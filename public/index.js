/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);

	let a = 2;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./app.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./app.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "/**\n * Foundation for Sites by ZURB\n * Version 6.2.3\n * foundation.zurb.com\n * Licensed under MIT Open Source\n */\n.message {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  background-color: lightgray;\n  height: 300px;\n  width: 600px; }\n\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n/**\n   * 1. Set default font family to sans-serif.\n   * 2. Prevent iOS and IE text size adjust after device orientation change,\n   *    without disabling user zoom.\n   */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/**\n   * Remove default margin.\n   */\nbody {\n  margin: 0; }\n\n/* HTML5 display definitions\n     ========================================================================== */\n/**\n   * Correct `block` display not defined for any HTML5 element in IE 8/9.\n   * Correct `block` display not defined for `details` or `summary` in IE 10/11\n   * and Firefox.\n   * Correct `block` display not defined for `main` in IE 11.\n   */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\n/**\n   * 1. Correct `inline-block` display not defined in IE 8/9.\n   * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n   */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n\n/**\n   * Prevent modern browsers from displaying `audio` without controls.\n   * Remove excess height in iOS 5 devices.\n   */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n/**\n   * Address `[hidden]` styling not present in IE 8/9/10.\n   * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\n   */\n[hidden],\ntemplate {\n  display: none; }\n\n/* Links\n     ========================================================================== */\n/**\n   * Remove the gray background color from active links in IE 10.\n   */\na {\n  background-color: transparent; }\n\n/**\n   * Improve readability of focused elements when they are also in an\n   * active/hover state.\n   */\na:active,\na:hover {\n  outline: 0; }\n\n/* Text-level semantics\n     ========================================================================== */\n/**\n   * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n   */\nabbr[title] {\n  border-bottom: 1px dotted; }\n\n/**\n   * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n   */\nb,\nstrong {\n  font-weight: bold; }\n\n/**\n   * Address styling not present in Safari and Chrome.\n   */\ndfn {\n  font-style: italic; }\n\n/**\n   * Address variable `h1` font-size and margin within `section` and `article`\n   * contexts in Firefox 4+, Safari, and Chrome.\n   */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/**\n   * Address styling not present in IE 8/9.\n   */\nmark {\n  background: #ff0;\n  color: #000; }\n\n/**\n   * Address inconsistent and variable font size in all browsers.\n   */\nsmall {\n  font-size: 80%; }\n\n/**\n   * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n   */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\n/* Embedded content\n     ========================================================================== */\n/**\n   * Remove border when inside `a` element in IE 8/9/10.\n   */\nimg {\n  border: 0; }\n\n/**\n   * Correct overflow not hidden in IE 9/10/11.\n   */\nsvg:not(:root) {\n  overflow: hidden; }\n\n/* Grouping content\n     ========================================================================== */\n/**\n   * Address margin not present in IE 8/9 and Safari.\n   */\nfigure {\n  margin: 1em 40px; }\n\n/**\n   * Address differences between Firefox and other browsers.\n   */\nhr {\n  box-sizing: content-box;\n  height: 0; }\n\n/**\n   * Contain overflow in all browsers.\n   */\npre {\n  overflow: auto; }\n\n/**\n   * Address odd `em`-unit font size rendering in all browsers.\n   */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\n/* Forms\n     ========================================================================== */\n/**\n   * Known limitation: by default, Chrome and Safari on OS X allow very limited\n   * styling of `select`, unless a `border` property is set.\n   */\n/**\n   * 1. Correct color not being inherited.\n   *    Known issue: affects color of disabled elements.\n   * 2. Correct font properties not being inherited.\n   * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n   */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */ }\n\n/**\n   * Address `overflow` set to `hidden` in IE 8/9/10/11.\n   */\nbutton {\n  overflow: visible; }\n\n/**\n   * Address inconsistent `text-transform` inheritance for `button` and `select`.\n   * All other form control elements do not inherit `text-transform` values.\n   * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n   * Correct `select` style inheritance in Firefox.\n   */\nbutton,\nselect {\n  text-transform: none; }\n\n/**\n   * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n   *    and `video` controls.\n   * 2. Correct inability to style clickable `input` types in iOS.\n   * 3. Improve usability and consistency of cursor style between image-type\n   *    `input` and others.\n   */\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */ }\n\n/**\n   * Re-set default cursor for disabled elements.\n   */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: not-allowed; }\n\n/**\n   * Remove inner padding and border in Firefox 4+.\n   */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\n/**\n   * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n   * the UA stylesheet.\n   */\ninput {\n  line-height: normal; }\n\n/**\n   * It's recommended that you don't attempt to style these elements.\n   * Firefox's implementation doesn't respect box-sizing, padding, or width.\n   *\n   * 1. Address box sizing set to `content-box` in IE 8/9/10.\n   * 2. Remove excess padding in IE 8/9/10.\n   */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n   * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n   * `font-size` values of the `input`, it causes the cursor style of the\n   * decrement button to change from `default` to `text`.\n   */\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n   * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n   * 2. Address `box-sizing` set to `border-box` in Safari and Chrome.\n   */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  box-sizing: content-box;\n  /* 2 */ }\n\n/**\n   * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n   * Safari (but not Chrome) clips the cancel button when the search input has\n   * padding (and `textfield` appearance).\n   */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n   * Define consistent border, margin, and padding.\n   * [NOTE] We don't enable this ruleset in Foundation, because we want the <fieldset> element to have plain styling.\n   */\n/* fieldset {\n    border: 1px solid #c0c0c0;\n    margin: 0 2px;\n    padding: 0.35em 0.625em 0.75em;\n  } */\n/**\n   * 1. Correct `color` not being inherited in IE 8/9/10/11.\n   * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n   */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n   * Remove default vertical scrollbar in IE 8/9/10/11.\n   */\ntextarea {\n  overflow: auto; }\n\n/**\n   * Don't inherit the `font-weight` (applied by a rule above).\n   * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n   */\noptgroup {\n  font-weight: bold; }\n\n/* Tables\n     ========================================================================== */\n/**\n   * Remove most spacing between table cells.\n   */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n\n.foundation-mq {\n  font-family: \"small=0em&medium=40em&large=64em&xlarge=75em&xxlarge=90em\"; }\n\nhtml {\n  font-size: 100%;\n  box-sizing: border-box; }\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit; }\n\nbody {\n  padding: 0;\n  margin: 0;\n  font-family: \"Helvetica Neue\", Helvetica, Roboto, Arial, sans-serif;\n  font-weight: normal;\n  line-height: 1.5;\n  color: #0a0a0a;\n  background: #fefefe;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\nimg {\n  max-width: 100%;\n  height: auto;\n  -ms-interpolation-mode: bicubic;\n  display: inline-block;\n  vertical-align: middle; }\n\ntextarea {\n  height: auto;\n  min-height: 50px;\n  border-radius: 0; }\n\nselect {\n  width: 100%;\n  border-radius: 0; }\n\n#map_canvas img,\n#map_canvas embed,\n#map_canvas object,\n.map_canvas img,\n.map_canvas embed,\n.map_canvas object,\n.mqa-display img,\n.mqa-display embed,\n.mqa-display object {\n  max-width: none !important; }\n\nbutton {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  background: transparent;\n  padding: 0;\n  border: 0;\n  border-radius: 0;\n  line-height: 1; }\n  [data-whatinput='mouse'] button {\n    outline: 0; }\n\n.is-visible {\n  display: block !important; }\n\n.is-hidden {\n  display: none !important; }\n\n.button {\n  display: inline-block;\n  text-align: center;\n  line-height: 1;\n  cursor: pointer;\n  -webkit-appearance: none;\n  transition: background-color 0.25s ease-out, color 0.25s ease-out;\n  vertical-align: middle;\n  border: 1px solid transparent;\n  border-radius: 0;\n  padding: 0.85em 1em;\n  margin: 0 0 1rem 0;\n  font-size: 0.9rem;\n  background-color: #2199e8;\n  color: #fefefe; }\n  [data-whatinput='mouse'] .button {\n    outline: 0; }\n  .button:hover, .button:focus {\n    background-color: #1583cc;\n    color: #fefefe; }\n  .button.tiny {\n    font-size: 0.6rem; }\n  .button.small {\n    font-size: 0.75rem; }\n  .button.large {\n    font-size: 1.25rem; }\n  .button.expanded {\n    display: block;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0; }\n  .button.primary {\n    background-color: #2199e8;\n    color: #fefefe; }\n    .button.primary:hover, .button.primary:focus {\n      background-color: #147cc0;\n      color: #fefefe; }\n  .button.secondary {\n    background-color: #777;\n    color: #fefefe; }\n    .button.secondary:hover, .button.secondary:focus {\n      background-color: #5f5f5f;\n      color: #fefefe; }\n  .button.success {\n    background-color: #3adb76;\n    color: #fefefe; }\n    .button.success:hover, .button.success:focus {\n      background-color: #22bb5b;\n      color: #fefefe; }\n  .button.warning {\n    background-color: #ffae00;\n    color: #fefefe; }\n    .button.warning:hover, .button.warning:focus {\n      background-color: #cc8b00;\n      color: #fefefe; }\n  .button.alert {\n    background-color: #ec5840;\n    color: #fefefe; }\n    .button.alert:hover, .button.alert:focus {\n      background-color: #da3116;\n      color: #fefefe; }\n  .button.hollow {\n    border: 1px solid #2199e8;\n    color: #2199e8; }\n    .button.hollow, .button.hollow:hover, .button.hollow:focus {\n      background-color: transparent; }\n    .button.hollow:hover, .button.hollow:focus {\n      border-color: #0c4d78;\n      color: #0c4d78; }\n    .button.hollow.primary {\n      border: 1px solid #2199e8;\n      color: #2199e8; }\n      .button.hollow.primary:hover, .button.hollow.primary:focus {\n        border-color: #0c4d78;\n        color: #0c4d78; }\n    .button.hollow.secondary {\n      border: 1px solid #777;\n      color: #777; }\n      .button.hollow.secondary:hover, .button.hollow.secondary:focus {\n        border-color: #3c3c3c;\n        color: #3c3c3c; }\n    .button.hollow.success {\n      border: 1px solid #3adb76;\n      color: #3adb76; }\n      .button.hollow.success:hover, .button.hollow.success:focus {\n        border-color: #157539;\n        color: #157539; }\n    .button.hollow.warning {\n      border: 1px solid #ffae00;\n      color: #ffae00; }\n      .button.hollow.warning:hover, .button.hollow.warning:focus {\n        border-color: #805700;\n        color: #805700; }\n    .button.hollow.alert {\n      border: 1px solid #ec5840;\n      color: #ec5840; }\n      .button.hollow.alert:hover, .button.hollow.alert:focus {\n        border-color: #881f0e;\n        color: #881f0e; }\n  .button.disabled, .button[disabled] {\n    opacity: 0.25;\n    cursor: not-allowed; }\n    .button.disabled:hover, .button.disabled:focus, .button[disabled]:hover, .button[disabled]:focus {\n      background-color: #2199e8;\n      color: #fefefe; }\n  .button.dropdown::after {\n    content: '';\n    display: block;\n    width: 0;\n    height: 0;\n    border: inset 0.4em;\n    border-color: #fefefe transparent transparent;\n    border-top-style: solid;\n    border-bottom-width: 0;\n    position: relative;\n    top: 0.4em;\n    float: right;\n    margin-left: 1em;\n    display: inline-block; }\n  .button.arrow-only::after {\n    margin-left: 0;\n    float: none;\n    top: -0.1em; }\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);