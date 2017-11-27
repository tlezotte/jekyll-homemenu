/**
 * @author Tom LeZottte <tom@lezotte.net>
 * @version 1.0
 * @class ready [main.js]
 */

/**
 * Declare a namespace.
 * @property {Object} {{ site.ns }}
 * @property {String} {{ site.ns }}.href - Get location.href.
 * @property {String} {{ site.ns }}.protocol - Get location.protocol.
 * @property {String} {{ site.ns }}.hostname - Get location.hostname.
 * @property {String} {{ site.ns }}.pathname - Get location.pathname.
 * @property {Int} {{ site.ns }}.browserHeight - Get Browser Height.
 * @property {Int} {{ site.ns }}.browserWidth - Get Browser Width.
 * @property {String} {{ site.ns }}.navUserAgent - Get Browser Information.
 * @property {String} {{ site.ns }}.navPlatform - Get Browser Platform.
 * @property {String} {{ site.ns }}.appCache - Get Browser Application Cache.
 * @property {String} {{ site.ns }}.isMobile - Is this a mobile device?
 * @property {String} {{ site.ns }}.isIos - Is this an iOS device?
 * @property {Boolean} {{ site.ns }}.isAndroid - Is this an Android device?
 * @property {Boolean} {{ site.ns }}.isBlackberry - Is this a Blackberry device?
 * @property {Boolean} {{ site.ns }}.isIphone - Is this an iPhone device?
 * @property {Boolean} {{ site.ns }}.isIpad - Is this an iPad device?
 * @property {Boolean} {{ site.ns }}.isStandalone - Is this an iPad device in Standalone mode?
 * @property {Boolean} {{ site.ns }}.isWebkit - Is this a Webkit browser?
 * @property {Boolean} {{ site.ns }}.isChrome - Is this a Chrome browser?
 * @property {Boolean} {{ site.ns }}.isFirefox - Is this a Firefox browser?
 * @property {Boolean} {{ site.ns }}.isSafari - Is this a Safari browser?
 * @property {Boolean} {{ site.ns }}.isIe - Is this a IE browser?
 * @property {Boolean} {{ site.ns }}.isIe6 - Is this a IE 6 browser?
 * @property {Boolean} {{ site.ns }}.isIe7 - Is this a IE 7 browser?
 * @property {Boolean} {{ site.ns }}.isIe8 - Is this a IE 8 browser?
 * @property {Boolean} {{ site.ns }}.isIe9 - Is this a IE 9 browser?
 * @property {Boolean} {{ site.ns }}.isIe10 - Is this a IE 10 browser?
 * @property {Boolean} {{ site.ns }}.isIe11 - Is this a IE 11 browser?
 * @property {Boolean} {{ site.ns }}.isEdge - Is this a Edge browser?
 * @property {Boolean} {{ site.ns }}.isCookie - Are Cookie enabled?
 * @property {Boolean} {{ site.ns }}.isOnline - Is the device/computer online?
 * @property {Boolean} {{ site.ns }}.use_menu - Use the built-in json menu
 * @property {Boolean} {{ site.ns }}.isProduction - Is Server Production?
 * @property {String} {{ site.ns }}.app_name - Set application name
 * @property {String} {{ site.ns }}.analytics - Set application Google analytics ID
 * @property {String} {{ site.ns }}.app_location - Set application home directory
 * @property {Boolean} {{ site.ns }}.menu_on - Turn the menu on or off
 * @return {Object}
 */
var {{ site.ns }} = {{ site.ns }} || {};

{{ site.ns }}.href = location.href;
{{ site.ns }}.protocol = location.protocol;
{{ site.ns }}.hostname = location.hostname;
{{ site.ns }}.pathname = location.pathname;
{{ site.ns }}.browserHeight = window.innerHeight;
{{ site.ns }}.browserWidth = window.innerWidth;
{{ site.ns }}.navUserAgent = navigator.userAgent;
{{ site.ns }}.navPlatform = navigator.platform;
{{ site.ns }}.appCache = window.applicationCache;
{{ site.ns }}.isMobile = /mobile/i.test({{ site.ns }}.navUserAgent);
{{ site.ns }}.isIos = /iphone|ipad/i.test({{ site.ns }}.navUserAgent);
{{ site.ns }}.isAndroid = /android/i.test({{ site.ns }}.navUserAgent);
{{ site.ns }}.isBlackberry = /blackberry/i.test({{ site.ns }}.navUserAgent);
{{ site.ns }}.isIphone = /iphone/i.test({{ site.ns }}.navUserAgent);
{{ site.ns }}.isIpad = /ipad/i.test({{ site.ns }}.navUserAgent);
{{ site.ns }}.isStandalone = navigator.standalone;
{{ site.ns }}.isWebkit = /webkit/i.test({{ site.ns }}.navUserAgent);
{{ site.ns }}.isChrome = /chrome/i.test({{ site.ns }}.navUserAgent);
{{ site.ns }}.isFirefox = /firefox/i.test({{ site.ns }}.navUserAgent);
{{ site.ns }}.isSafari = /safari/i.test({{ site.ns }}.navUserAgent) && !/chrome/i.test({{ site.ns }}.navUserAgent);
{{ site.ns }}.isIe = /msie/i.test({{ site.ns }}.navUserAgent);
{{ site.ns }}.isIe6 = /msie 6/i.test({{ site.ns }}.navUserAgent);
{{ site.ns }}.isIe7 = /msie 7/i.test({{ site.ns }}.navUserAgent);
{{ site.ns }}.isIe8 = /msie 8/i.test({{ site.ns }}.navUserAgent);
{{ site.ns }}.isIe9 = /msie 9/i.test({{ site.ns }}.navUserAgent);
{{ site.ns }}.isIe10 = /msie 10/i.test({{ site.ns }}.navUserAgent);
{{ site.ns }}.isIe11 = /msie 11/i.test({{ site.ns }}.navUserAgent);
{{ site.ns }}.isEdge = /edge/i.test({{ site.ns }}.navUserAgent);
{{ site.ns }}.isCookie = navigator.cookieEnabled;
{{ site.ns }}.isOnline = navigator.onLine;
{{ site.ns }}.use_menu = true;
{{ site.ns }}.isProduction = (
	location.hostname.toLowerCase().indexOf("localhost") > -1 ||
	location.hostname.toLowerCase().indexOf("wd") > -1 ||
	location.hostname.toLowerCase().indexOf("wt") > -1
) ? true : false;

// (function() {
// 	$.ajax({
// 		success: function(data, textStatus, request){
// 			getProduction = request.getResponseHeader('DEPARTMENT');
// 			{{ site.ns }}.isProduction = (/true/i.test(getProduction)) ? true : false;
// 		}
// 	});
// })();

{{ site.ns }}.app_name = "{{ site.name }}";
{{ site.ns }}.analytics = "{{ site.google_analytics }}";
{{ site.ns }}.app_location = "/";
{{ site.ns }}.menu_on = true;
