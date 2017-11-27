# Jekyll Home Menu

## [Demo](https://tlezotte.github.io/jekyll-homemenu)

## Setup your workstation
Run the setup script to make sure you have the required software.

* RVM and Ruby (if required)
* Install Jekyll and Bundler 
* Install node with Homebrew (if required)
* Install global NPMs
* Generating Apache vhost
* Generating package.json
* Clone jekyll-homemenu (if approved)
* Install dependencies with Bundler and NPM

```bash
mkdir <project>
cd <project>
./setup.sh
```

## Main Configuration
Location: `_config.yml`

This is the main configuration file for your website. 

Here are some of the `site` variables you need to update.
* title: Department
* email: you@domain.net
* description: > Department Home Page
* baseurl: "" _(the subpath of your site, e.g. /blog)_
* url: "https://you.domain.net"
* domain: "domain.net" _(used for google site search)_
* name: Department
* icon: "fa fa-building-o" _(FontAwsome example)_
* logo: department.png
* ns: "dept" _(javascript namespace)_
* google_analytics: UA-XXXXXXXX-X
* google_search: false _(Do you want google site search in the navbar)_
* twitter_username:
* github_username:

### Changing Data
Location: `_data`

The two main configuration files will update the thumbnails menu. The JavaScript library `fullPage` uses these to build different pages.

* one.json
* two.json

The next two data files will edit the projects JavaScript and CSS files.

* javascript.json
* css.json

#### Images Specs for Thumbnails [logo]
Location: `assets\img`  
Size: `100px x 100px`

### Changing navbar
The top navbar is configured with the following file.

* _includes/menu.html
* _includes/menu-right.html

### Other Configuration Files
* .editorconfig
  * Configuration for IDE - [editorconfig](http://editorconfig.org/)
* .eslintrc.json
  * ECMAScript Linting configuration - [eslint](https://eslint.org/)
* .jsbeautifyrc
  * Configuration file to cleanup minimized files - [jsbeautifier](http://jsbeautifier.org/)
* .rsync-exclude
  * Files and Directories that you don't want synced to server - [rsync](https://rsync.samba.org/)
* Gemfile
  * Bundler configuration file - [Bundler](http://bundler.io/)
* jsdoc-conf.json
  * Configuration file for jsdoc - [jsdoc](http://usejsdoc.org/)
* kss-config.json
  * Configuration file for KSS - [KSS](http://warpspire.com/kss/)

<br>
<br>

## Run your website
### Deploy to Server
The `package.json` does the following to deploy your website.

* Generate Style Sheet with KSS
* Generate JavaScript Documentation with jsDoc
* Build the website with Jekyll
* Minimize JavaScript and generate Source Map with uglifyjs
* Rsync `_site` to server

```bash
npm run deploy
```

### Run Local
This command will start a local server and uses LiveReload. Open [http://localhost:4000/](http://localhost:4000/) in Chrome to view website.

```bash
jekyll serve -L
```
or
```bash
npm run serve
```

<br>
<br>

## Example Files

* iframe.html.example
  * a themed template for iframe content
* jsdocs.html.example
  * a themed template for jsdocs - [jsdoc](http://usejsdoc.org/)
* styleguide.html.example
  * a themed template for css styleguide - [KSS](http://warpspire.com/kss/)
