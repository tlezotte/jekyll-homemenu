#!/bin/bash

## Script to setup the software and configuration files
## required to run the website

server_path="/etc/htdocs/www/department"
OS=$(uname)

if [ $OS == "Darwin" ];
then
  echo ""
  echo "** Mac OS has some issues with Jekyll working with the default Ruby. "
  echo "** Do you want RMV to install the latest ruby? [Yn] "
  read rvm_read

  if [ $rvm_read == "" -o $rvm_read="y" -o $rvm_read="Y" ];
    echo "--> Installing ruby with RVM..."
    curl -sSL https://get.rvm.io | bash -s stable >/dev/null 2>&1
    rvm install ruby --latest >/dev/null 2>&1
  fi
fi

echo "--> Installing jekyll..."
gem install jekyll bundler >/dev/null 2>&1

if [ ! -e "/usr/local/bin/brew" ];
then
    echo "--> Installing Homebrew..."
    ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" >/dev/null 2>&1
fi

echo "--> Installing NodeJS..."
brew install node >/dev/null 2>&1

echo "--> Installing global NPM plugins..."
npm install -g npm-run-all >/dev/null 2>&1
npm install -g uglify-js >/dev/null 2>&1
npm install -g kss >/dev/null 2>&1
npm install -g jsdoc >/dev/null 2>&1


#
# -- Get user feedback --
#
echo ""
echo "Please enter the URL for your site, example [department.github.com]:"
read url_name

echo ""
echo "NOTE: This server needs to be a Development server,"
echo "      that has direct access to the app user."
echo ""
echo "Please enter the Server name for your site, example [one.server.com]:"
read server_name

echo ""
echo "Please enter the Server App username for your site, example [userapp]:"
read server_user


#
# -- Generate configuration files --
#
echo "--> Generating Apache config file..."
cat >vhost.conf <<EOL
<VirtualHost *:443>

# General setup for the virtual host, inherited from global configuration
DocumentRoot "${server_path}"
ServerName ${url_name}

# Use separate log files for the SSL virtual host; note that LogLevel
# is not inherited from httpd.conf.
ErrorLog /home/root/var/logs/httpd/ei_ssl_error.log
TransferLog /home/root/var/logs/httpd/ei_ssl_access.log
LogLevel warn

#   SSL Engine Switch:
#   Enable/Disable SSL for this virtual host.
SSLEngine on

#   SSL Protocol support:
# List the enable protocol levels with which clients will be able to
# connect.  Disable SSLv2 access by default:
SSLProtocol all -SSLv2

#   SSL Cipher Suite:
#   List the ciphers that the client is permitted to negotiate.
#   See the mod_ssl documentation for a complete list.
SSLCipherSuite HIGH:MEDIUM:!aNULL:!MD5

#   Server Certificate:
SSLCertificateFile /home/root/etc/pki/tls/certs/localhost.crt

#   Server Private Key:
SSLCertificateKeyFile /home/root/etc/pki/tls/private/localhost.key

#   SSL Protocol Adjustments:
BrowserMatch "MSIE [2-5]" \
         nokeepalive ssl-unclean-shutdown \
         downgrade-1.0 force-response-1.0

#   Per-Server Logging:
CustomLog /home/root/var/logs/httpd/ei_ssl_request.log \
          "%t %h %{SSL_PROTOCOL}x %{SSL_CIPHER}x \"%r\" %b"

</VirtualHost>
EOL


#
# -- Generate package.json files --
#
echo "--> Generating package.json config file..."
cat >package.json <<EOL
{
  "name": "department",
  "version": "1.0.0",
  "description": "team website for your group",
  "main": "index.html",
  "author": "me",
  "license": "ISC",
  "config": {
    "server": "${server_name}",
    "domain": "https://${url_name}",
    "home": "${server_path}",
    "user": "${server_user}"
  },
  "scripts": {
    "jekyll:build": "jekyll build",
    "jekyll:min": "uglifyjs _site/assets/js/main.js -c -m -o _site/assets/js/main.min.js --source-map _site/assets/js/app.min.js.map --source-map-root $npm_package_config_domain",
    "jekyll:sync": "rsync -avz --exclude-from '.rsync-exclude' _site/* $npm_package_config_user@$npm_package_config_server:$npm_package_config_home",
    "deploy": "npm-run-all jekyll:*"
  },
  "devDependencies": {
    "ink-docstrap": "^1.3.0",
    "michelangelo": "^0.5.1"
  }
}
EOL


#
# -- Clone jekyll-homemenu to start project --
#
echo ""
echo "Clone jekyll-homemenu to current directory? [Yn] "
read clone_ei

if [ $clone_ei == "" -o $clone_ei="y" -o $clone_ei="Y" ];
then
    echo "--> Cloning jekyll-homemenu website..."
    git clone https://github.com/tlezotte/jekyll-homemenu.git >/dev/null 2>&1
elfi
  echo "exited..."
  echo ""
  echo "Run Manually:"
  echo "1. git clone https://github.com/tlezotte/jekyll-homemenu.git"
  echo "2. bundler add jekyll-livereload --group=jekyll_plugins"
  echo "3. npm install"
  exit
fi

#
# -- Install Ruby and Node dependencies --
#
echo "--> Running Ruby Bundler..."
bundler add jekyll-livereload --group=jekyll_plugins >/dev/null 2>&1

echo "--> Running NPM global and dev dependencies..."
npm install >/dev/null 2>&1


echo ""
echo "TODO:"
echo "1. Copy Apache configuration file to '${server_name}:/etc/httpd/conf.d/vhost.conf', then run 'sudo systemctl reload httpd'"
echo "2. Source files will be copied to '${server_name}:${server_path}'. This will be done with 'npm run deploy'"
