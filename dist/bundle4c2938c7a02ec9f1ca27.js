/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/reset.css":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/reset.css ***!
  \********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n/***\n    The new CSS reset - version 1.8.2 (last updated 23.12.2022)\n    GitHub page: https://github.com/elad2412/the-new-css-reset\n***/\n/*\n    Remove all the styles of the \"User-Agent-Stylesheet\", except for the 'display' property\n    - The \"symbol *\" part is to solve Firefox SVG sprite bug\n */\n*:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)) {\n  all: unset;\n  display: revert;\n}\n\n/* Preferred box-sizing value */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Reapply the pointer cursor for anchor tags */\na, button {\n  cursor: revert;\n}\n\n/* Remove list styles (bullets/numbers) */\nol, ul, menu {\n  list-style: none;\n}\n\n/* For images to not be able to exceed their container */\nimg {\n  max-inline-size: 100%;\n  max-block-size: 100%;\n}\n\n/* removes spacing between cells in tables */\ntable {\n  border-collapse: collapse;\n}\n\n/* Safari - solving issue when using user-select:none on the <body> text input doesn't working */\ninput, textarea {\n  -webkit-user-select: auto;\n  user-select: auto;\n}\n\n/* revert the 'white-space' property for textarea elements on Safari */\ntextarea {\n  white-space: revert;\n}\n\n/* minimum style to allow to style meter element */\nmeter {\n  -webkit-appearance: revert;\n  appearance: revert;\n}\n\n/* preformatted text - use only for this feature */\npre {\n  all: revert;\n}\n\n/* reset default text opacity of input placeholder */\n::placeholder {\n  color: unset;\n}\n\n/* remove default dot (•) sign */\n::marker {\n  content: \"\";\n}\n\n/* fix the feature of 'hidden' attribute.\n   display:revert; revert to element instead of attribute */\n:where([hidden]) {\n  display: none;\n}\n\n/* revert for bug in Chromium browsers\n   - fix for the content editable attribute will work properly.\n   - webkit-user-select: auto; added for Safari in case of using user-select:none on wrapper element*/\n:where([contenteditable]:not([contenteditable=false])) {\n  -moz-user-modify: read-write;\n  -webkit-user-modify: read-write;\n  overflow-wrap: break-word;\n  -webkit-line-break: after-white-space;\n  line-break: after-white-space;\n  -webkit-user-select: auto;\n  user-select: auto;\n}\n\n/* apply back the draggable feature - exist only in Chromium and Safari */\n:where([draggable=true]) {\n  -webkit-user-drag: element;\n}\n\n/* Revert Modal native behavior */\n:where(dialog:modal) {\n  all: revert;\n}", "",{"version":3,"sources":["webpack://./src/css/reset.css"],"names":[],"mappings":"AAAA,gBAAgB;AAAhB;;;GAAA;AAKA;;;EAAA;AAIC;EACG,UAAA;EACA,eAAA;AACJ;;AAEA,+BAAA;AACA;;;EAGI,sBAAA;AACJ;;AAEA,+CAAA;AACA;EACI,cAAA;AACJ;;AAEA,yCAAA;AACA;EACI,gBAAA;AACJ;;AAEA,wDAAA;AACA;EACI,qBAAA;EACA,oBAAA;AACJ;;AAEA,4CAAA;AACA;EACI,yBAAA;AACJ;;AAEA,gGAAA;AACA;EACI,yBAAA;EACH,iBAAA;AACD;;AAEA,sEAAA;AACA;EACI,mBAAA;AACJ;;AAEA,kDAAA;AACA;EACI,0BAAA;EACA,kBAAA;AACJ;;AAEA,kDAAA;AACA;EACI,WAAA;AACJ;;AAEA,oDAAA;AACA;EACI,YAAA;AACJ;;AAEA,gCAAA;AACA;EACI,WAAA;AACJ;;AAEA;2DAAA;AAEA;EACI,aAAA;AACJ;;AAEA;;qGAAA;AAGA;EACI,4BAAA;EACA,+BAAA;EACA,yBAAA;EACA,qCAAA;EACH,6BAAA;EACG,yBAAA;EACH,iBAAA;AACD;;AAEA,yEAAA;AACA;EACI,0BAAA;AACJ;;AAEA,iCAAA;AACA;EACI,WAAA;AACJ","sourcesContent":["/***\n    The new CSS reset - version 1.8.2 (last updated 23.12.2022)\n    GitHub page: https://github.com/elad2412/the-new-css-reset\n***/\n\n/*\n    Remove all the styles of the \"User-Agent-Stylesheet\", except for the 'display' property\n    - The \"symbol *\" part is to solve Firefox SVG sprite bug\n */\n *:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)) {\n    all: unset;\n    display: revert;\n}\n\n/* Preferred box-sizing value */\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n/* Reapply the pointer cursor for anchor tags */\na, button {\n    cursor: revert;\n}\n\n/* Remove list styles (bullets/numbers) */\nol, ul, menu {\n    list-style: none;\n}\n\n/* For images to not be able to exceed their container */\nimg {\n    max-inline-size: 100%;\n    max-block-size: 100%;\n}\n\n/* removes spacing between cells in tables */\ntable {\n    border-collapse: collapse;\n}\n\n/* Safari - solving issue when using user-select:none on the <body> text input doesn't working */\ninput, textarea {\n    -webkit-user-select: auto;\n\tuser-select: auto;\n}\n\n/* revert the 'white-space' property for textarea elements on Safari */\ntextarea {\n    white-space: revert;\n}\n\n/* minimum style to allow to style meter element */\nmeter {\n    -webkit-appearance: revert;\n    appearance: revert;\n}\n\n/* preformatted text - use only for this feature */\npre {\n    all: revert;\n}\n\n/* reset default text opacity of input placeholder */\n::placeholder {\n    color: unset;\n}\n\n/* remove default dot (•) sign */\n::marker {\n    content: \"\";\n}\n\n/* fix the feature of 'hidden' attribute.\n   display:revert; revert to element instead of attribute */\n:where([hidden]) {\n    display: none;\n}\n\n/* revert for bug in Chromium browsers\n   - fix for the content editable attribute will work properly.\n   - webkit-user-select: auto; added for Safari in case of using user-select:none on wrapper element*/\n:where([contenteditable]:not([contenteditable=\"false\"])) {\n    -moz-user-modify: read-write;\n    -webkit-user-modify: read-write;\n    overflow-wrap: break-word;\n    -webkit-line-break: after-white-space;\n\tline-break: after-white-space;\n    -webkit-user-select: auto;\n\tuser-select: auto;\n}\n\n/* apply back the draggable feature - exist only in Chromium and Safari */\n:where([draggable=\"true\"]) {\n    -webkit-user-drag: element;\n}\n\n/* Revert Modal native behavior */\n:where(dialog:modal) {\n    all: revert;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/styles.css":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/styles.css ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/bg-hero.jpg */ "./src/images/bg-hero.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/bg-prices.jpg */ "./src/images/bg-prices.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/bg-contact.jpg */ "./src/images/bg-contact.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Courgette&family=Montserrat:wght@300;400;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  /* color palette */\n  --main-dark: #250C10;\n  --main: #8C0375;\n  --main-hover: #790465;\n  --contrast: #F29A2E;\n  --contrast-dark: #CE7910;\n  --off-white: #F7FBFE;\n  --grey-200: #E1E5E8;\n  --grey-400: #C0C4C7;\n  --grey-600: #8a8c8e;\n  --off-black: #250C10;\n  /*check in figma */\n  /* font styles */\n  --ff-main: \"Montserrat\", Arial, sans-serif;\n  --ff-accent: \"Courgette\", \"Lucida Handwriting\", cursive;\n  --fw-light: 200;\n  --fw-regular: 400;\n  --fw-bold: 700;\n  /* various utility classes */\n  --nav-height: 5rem;\n}\n\nhtml {\n  scroll-behavior: smooth;\n  font-size: 16px;\n}\n\nbody {\n  font-family: var(--ff-main);\n  font-weight: var(--fw-regular);\n}\n\n/*******************************************************/\n/******************** button styles ********************/\n/*******************************************************/\n/* link styled as a button */\n.btn {\n  background-color: var(--main);\n  padding: 1rem;\n  max-width: 400px;\n  border-radius: 99px;\n  text-transform: uppercase;\n  color: var(--off-white);\n  font-weight: var(--fw-bold);\n  text-align: center;\n  letter-spacing: 0.1rem;\n  line-height: 2rem;\n}\n\n.btn:hover {\n  background-color: var(--main-hover);\n}\n\n.btn:active {\n  -webkit-transform: translate(0px, 2px);\n  -moz-transform: translate(0px, 2px);\n  -ms-transform: translate(0px, 2px);\n  -o-transform: translate(0px, 2px);\n  transform: translate(0px, 2px);\n}\n\n/* link styled as a button in the footer */\n.footer-btn {\n  background-color: var(--contrast);\n  display: inline-block;\n  height: 4rem;\n  /* margin: auto; */\n}\n\n.footer-btn:hover {\n  background-color: var(--contrast-dark);\n  color: var(--off-white);\n}\n\n/*******************************************************/\n/******************** navbar styles ********************/\n/*******************************************************/\nnav {\n  background-color: var(--main-dark);\n  display: flex;\n  height: var(----nav-height);\n  justify-content: space-between;\n  align-items: center;\n  color: var(--off-whitewhite);\n  font-size: 1.1rem;\n  position: sticky;\n  top: 0;\n  z-index: 999;\n  -webkit-box-shadow: 2px 2px 24px 0px var(--off-black);\n  -moz-box-shadow: 2px 2px 24px 0px var(--off-black);\n  box-shadow: 2px 2px 24px 0px var(--off-black);\n  /* padding: 0 10rem; */\n}\n\n.nav-links {\n  float: right;\n}\n\n.nav-links ul {\n  display: flex;\n  align-content: center;\n  align-items: center;\n}\n\n.nav-links li {\n  transition-duration: 0.2s;\n}\n\n.nav-links li:hover,\n.nav-links li:active {\n  background-color: var(--main);\n}\n\n.nav-links a {\n  color: var(--off-white);\n  text-decoration: none;\n  height: var(--nav-height);\n  display: flex;\n  align-items: center;\n  text-align: center;\n  padding: 1rem;\n}\n\n/* burger icon styles */\n#toggle-btn {\n  position: absolute;\n  top: 1.75rem;\n  right: 2rem;\n  display: none;\n  /* hide by default */\n  flex-direction: column;\n  justify-content: space-between;\n  width: 30px;\n  height: 21px;\n}\n\n.bar {\n  height: 3px;\n  width: 100%;\n  background-color: var(--off-white);\n  border-radius: 10px;\n}\n\n.logo {\n  height: calc(var(--nav-height) - 0.5rem);\n}\n\n@media (max-width: 700px) {\n  #toggle-btn {\n    display: flex;\n  }\n  .logo {\n    /* position: fixed; */\n    left: 45vw;\n    top: 3vh;\n    opacity: 50%;\n  }\n  nav {\n    display: grid;\n    padding: 0;\n  }\n  .nav-links {\n    display: none;\n  }\n  .nav-links ul {\n    display: grid;\n  }\n  .nav-links.active {\n    display: grid;\n    justify-content: center;\n    width: 100vw;\n    height: 100vh;\n  }\n  .nav-links.active a {\n    text-align: center;\n  }\n}\n/*******************************************************/\n/********************  main styles  ********************/\n/*******************************************************/\nsection {\n  padding: 2rem;\n}\n\nsection:nth-of-type(even) {\n  background-color: var(--grey-400);\n}\n\n.center {\n  margin: auto;\n  text-align: center;\n}\n\n/* hero section */\n#about {\n  background-color: rgba(18, 23, 37, 0.5);\n  /* change color */\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-blend-mode: multiply;\n  background-size: cover;\n  height: 100vh;\n  /* width: 100vw; */\n  display: grid;\n  justify-content: center;\n  align-content: center;\n}\n\nhgroup {\n  color: var(--off-white);\n  width: 85vw;\n  max-width: 600px;\n  display: grid;\n  text-align: center;\n}\n\nh1 {\n  font-size: 1.625rem;\n}\n\nh2 {\n  font-size: 1.5rem;\n  width: 150px;\n  text-align: center;\n  color: var(--off-white);\n  border-bottom: 1px solid var(--off-white);\n  line-height: 0.1rem;\n  margin: 1rem;\n}\n\nh2 span {\n  background-color: var(--grey-400);\n  padding: 0 0.5rem;\n}\n\nh3 {\n  font-weight: var(--fw-bold);\n  padding: 2rem;\n  font-size: 1.2rem;\n}\n\nh4 {\n  color: var(--off-white);\n  font-weight: var(--fw-bold);\n}\n\n#studio-masazu,\n#subtitle {\n  font-size: 0.9rem;\n  font-weight: var(--fw-light);\n  letter-spacing: 1.5px;\n}\n\n#studio-masazu {\n  text-align: left;\n  margin-bottom: 1.2rem;\n}\n\n#title {\n  font-family: var(--ff-accent);\n  font-size: clamp(2rem, 80vw, 5rem);\n}\n\n#subtitle {\n  text-align: right;\n  margin-top: 1.2rem;\n}\n\n.hero-p {\n  font-weight: var(--fw-light);\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n  text-align: justify;\n}\n\n/* services section */\n.section-header {\n  display: grid;\n  justify-content: center;\n  align-content: center;\n  margin-bottom: 2rem;\n}\n\n.cards {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n  align-items: center;\n  justify-content: center;\n}\n\n@media (min-width: 700px) {\n  .cards {\n    flex-direction: row;\n    padding: 2rem;\n  }\n}\nfigure {\n  display: grid;\n  justify-content: center;\n  align-content: center;\n  border-radius: 0.5rem;\n  /* height: 400px; */\n  -webkit-box-shadow: 0px 0px 24px 0px var(--grey-600);\n  -moz-box-shadow: 0px 0px 24px 0px var(--grey-600);\n  box-shadow: 0px 0px 24px 0px var(--grey-600);\n}\n\nfigure img {\n  border-radius: 0.5rem 0.5rem 0 0;\n}\n\nfigcaption {\n  text-align: center;\n  padding: 1rem 0;\n  background-color: var(--main-dark);\n  color: var(--off-white);\n  border-radius: 0 0 0.5rem 0.5rem;\n}\n\n/* price section */\n#prices {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  min-height: 70vh;\n}\n\n#prices h2 > span {\n  background-color: black;\n  /* change this */\n}\n\ntable h3 {\n  padding: unset;\n}\n\n/* table */\ntable {\n  background-color: var(--off-white);\n  opacity: 0.7;\n  backdrop-filter: blur(10px);\n  margin: auto;\n  width: 100%;\n  border-radius: 0.5rem;\n}\n\nth,\ntd {\n  padding: 1rem;\n}\n\n@media (min-width: 600px) {\n  th,\n  td {\n    padding: 1.5rem;\n  }\n}\nth:nth-of-type(2),\ntd:nth-of-type(2) {\n  text-align: right;\n  font-weight: var(--fw-bold);\n}\n\n/* contact section */\n#opening-hours {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-height: 70vh;\n}\n\n#opening-hours h2 span {\n  background-color: #b79f85;\n}\n\n.tables-contact-sctn {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin: auto;\n}\n\n@media (min-width: 750px) {\n  .tables-contact-sctn {\n    flex-direction: row;\n    justify-content: center;\n    gap: 2rem;\n  }\n}\narticle {\n  background-color: var(--off-white);\n  opacity: 0.8;\n  border-radius: 0.5rem;\n  /* max-width: 400px; */\n  margin: auto;\n  margin-bottom: 2rem;\n  -webkit-box-shadow: 0px 0px 24px 0px var(--grey-600);\n  -moz-box-shadow: 0px 0px 24px 0px var(--grey-600);\n  box-shadow: 0px 0px 24px 0px var(--grey-600);\n}\n\n#prices article {\n  max-width: 600px;\n}\n\n.tables-contact-sctn article:last-of-type {\n  margin-bottom: unset;\n}\n\n@media (min-width: 750px) {\n  .tables-contact-sctn article {\n    height: 450px;\n    margin-bottom: unset;\n    margin: unset;\n    width: 500px;\n  }\n}\n/* footer */\nfooter {\n  background-color: var(--main-dark);\n  padding: 2rem;\n}\n\nfooter hr {\n  width: 70vw;\n  height: 1px;\n  background-color: var(--grey-200);\n  margin: 2rem auto;\n}\n\nfooter p {\n  color: var(--off-white);\n  font-size: 0.8rem;\n}\n\nfooter a {\n  color: var(--contrast);\n}\n\nfooter a:hover {\n  color: var(--contrast-dark);\n  cursor: pointer;\n}\n\nfooter hgroup {\n  text-align: left;\n  width: 70vw;\n}\n\nh4 {\n  margin: 1rem 0;\n}\n\nfooter hgroup p {\n  margin: 0.5rem 0;\n}\n\n.footer-top {\n  display: flex;\n  flex-direction: column-reverse;\n  align-items: center;\n  align-content: center;\n  justify-content: space-between;\n  justify-items: start;\n  width: 70vw;\n  gap: 2rem;\n  margin: auto;\n  margin-bottom: 2rem;\n}\n\nfooter img {\n  width: 300px;\n  /* margin: auto; */\n}\n\n.footer-info {\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  align-content: center;\n  gap: 2rem;\n  width: 70vw;\n}\n\n.right-align {\n  float: right;\n}\n\n@media (min-width: 600px) {\n  footer hgroup {\n    width: 100%;\n  }\n  .footer-top {\n    flex-direction: row;\n  }\n  .footer-info {\n    flex-direction: row;\n  }\n}", "",{"version":3,"sources":["webpack://./src/css/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Courgette&family=Montserrat:wght@300;400;700&display=swap');\n\n:root {\n    /* color palette */\n    --main-dark: #250C10;\n    --main: #8C0375;\n    --main-hover: #790465;\n    --contrast: #F29A2E;\n    --contrast-dark: #CE7910;\n    --off-white: #F7FBFE;\n    --grey-200: #E1E5E8;\n    --grey-400: #C0C4C7;\n    --grey-600: #8a8c8e;\n    --off-black: #250C10;\n    /*check in figma */\n\n    /* font styles */\n    --ff-main: \"Montserrat\", Arial, sans-serif;\n    --ff-accent: \"Courgette\", \"Lucida Handwriting\", cursive;\n    --fw-light: 200;\n    --fw-regular: 400;\n    --fw-bold: 700;\n\n    /* various utility classes */\n    --nav-height: 5rem;\n}\n\nhtml {\n    scroll-behavior: smooth;\n    font-size: 16px;\n}\n\nbody {\n    font-family: var(--ff-main);\n    font-weight: var(--fw-regular);\n}\n\n/*******************************************************/\n/******************** button styles ********************/\n/*******************************************************/\n/* link styled as a button */\n.btn {\n    background-color: var(--main);\n    padding: 1rem;\n    max-width: 400px;\n    border-radius: 99px;\n    text-transform: uppercase;\n    color: var(--off-white);\n    font-weight: var(--fw-bold);\n    text-align: center;\n    letter-spacing: 0.1rem;\n    line-height: 2rem;\n}\n\n.btn:hover {\n    background-color: var(--main-hover);\n}\n\n.btn:active {\n    -webkit-transform: translate(0px, 2px);\n    -moz-transform: translate(0px, 2px);\n    -ms-transform: translate(0px, 2px);\n    -o-transform: translate(0px, 2px);\n    transform: translate(0px, 2px);\n}\n\n/* link styled as a button in the footer */\n.footer-btn {\n    background-color: var(--contrast);\n    display: inline-block;\n    height: 4rem;\n    /* margin: auto; */\n}\n\n.footer-btn:hover {\n    background-color: var(--contrast-dark);\n    color: var(--off-white);\n}\n\n\n/*******************************************************/\n/******************** navbar styles ********************/\n/*******************************************************/\n\nnav {\n    background-color: var(--main-dark);\n    display: flex;\n    height: var(----nav-height);\n    justify-content: space-between;\n    align-items: center;\n    color: var(--off-whitewhite);\n    font-size: 1.1rem;\n    position: sticky;\n    top: 0;\n    z-index: 999;\n    -webkit-box-shadow: 2px 2px 24px 0px var(--off-black);\n    -moz-box-shadow: 2px 2px 24px 0px var(--off-black);\n    box-shadow: 2px 2px 24px 0px var(--off-black);\n    /* padding: 0 10rem; */\n}\n\n\n.nav-links {\n    float: right;\n}\n\n.nav-links ul {\n    display: flex;\n    align-content: center;\n    align-items: center;\n}\n\n.nav-links li {\n    transition-duration: 0.2s;\n}\n\n.nav-links li:hover,\n.nav-links li:active {\n    background-color: var(--main);\n}\n\n.nav-links a {\n    color: var(--off-white);\n    text-decoration: none;\n    height: var(--nav-height);\n    display: flex;\n    align-items: center;\n    text-align: center;\n    padding: 1rem;\n}\n\n/* burger icon styles */\n#toggle-btn {\n    position: absolute;\n    top: 1.75rem;\n    right: 2rem;\n    display: none;\n    /* hide by default */\n    flex-direction: column;\n    justify-content: space-between;\n    width: 30px;\n    height: 21px;\n}\n\n.bar {\n    height: 3px;\n    width: 100%;\n    background-color: var(--off-white);\n    border-radius: 10px;\n}\n\n.logo {\n    height: calc(var(--nav-height) - 0.5rem);\n}\n\n@media (max-width: 700px) {\n    #toggle-btn {\n        display: flex;\n    }\n\n    .logo {\n        /* position: fixed; */\n        left: 45vw;\n        top: 3vh;\n        opacity: 50%;\n    }\n\n    nav {\n        display: grid;\n        padding: 0;\n    }\n\n    .nav-links {\n        display: none;\n    }\n\n    .nav-links ul {\n        display: grid;\n    }\n\n    .nav-links.active {\n        display: grid;\n        justify-content: center;\n        width: 100vw;\n        height: 100vh;\n    }\n\n    .nav-links.active a {\n        text-align: center;\n    }\n}\n\n/*******************************************************/\n/********************  main styles  ********************/\n/*******************************************************/\nsection {\n    padding: 2rem;\n}\n\nsection:nth-of-type(even) {\n    background-color: var(--grey-400);\n}\n\n.center {\n    margin: auto;\n    text-align: center;\n}\n\n/* hero section */\n\n#about {\n    background-color: rgba(18, 23, 37, 0.5);\n    /* change color */\n    background-image: url(../images/bg-hero.jpg);\n    background-blend-mode: multiply;\n    background-size: cover;\n    height: 100vh;\n    /* width: 100vw; */\n    display: grid;\n    justify-content: center;\n    align-content: center;\n}\n\nhgroup {\n    color: var(--off-white);\n    width: 85vw;\n    max-width: 600px;\n    display: grid;\n    text-align: center;\n}\n\nh1 {\n    font-size: 1.625rem;\n}\n\nh2 {\n    font-size: 1.5rem;\n    width: 150px;\n    text-align: center;\n    color: var(--off-white);\n    border-bottom: 1px solid var(--off-white);\n    line-height: 0.1rem;\n    margin: 1rem;\n}\n\nh2 span {\n    background-color: var(--grey-400);\n    padding: 0 0.5rem;\n}\n\nh3 {\n    font-weight: var(--fw-bold);\n    padding: 2rem;\n    font-size: 1.2rem;\n}\n\nh4 {\n    color: var(--off-white);\n    font-weight: var(--fw-bold);\n}\n\n#studio-masazu,\n#subtitle {\n    font-size: 0.9rem;\n    font-weight: var(--fw-light);\n    letter-spacing: 1.5px;\n}\n\n#studio-masazu {\n    text-align: left;\n    margin-bottom: 1.2rem;\n}\n\n#title {\n    font-family: var(--ff-accent);\n    font-size: clamp(2rem, 80vw, 5rem);\n}\n\n#subtitle {\n    text-align: right;\n    margin-top: 1.2rem;\n}\n\n.hero-p {\n    font-weight: var(--fw-light);\n    margin-top: 1.5rem;\n    margin-bottom: 1.5rem;\n    text-align: justify;\n}\n\n/* services section */\n\n.section-header {\n    display: grid;\n    justify-content: center;\n    align-content: center;\n    margin-bottom: 2rem;\n}\n\n.cards {\n    display: flex;\n    flex-direction: column;\n    gap: 1.5rem;\n    align-items: center;\n    justify-content: center;\n}\n\n@media (min-width: 700px) {\n    .cards {\n        flex-direction: row;\n        padding: 2rem;\n    }\n}\n\nfigure {\n    display: grid;\n    justify-content: center;\n    align-content: center;\n    border-radius: 0.5rem;\n    /* height: 400px; */\n    -webkit-box-shadow: 0px 0px 24px 0px var(--grey-600);\n    -moz-box-shadow: 0px 0px 24px 0px var(--grey-600);\n    box-shadow: 0px 0px 24px 0px var(--grey-600);\n}\n\nfigure img {\n    border-radius: 0.5rem 0.5rem 0 0;\n}\n\nfigcaption {\n    text-align: center;\n    padding: 1rem 0;\n    background-color: var(--main-dark);\n    color: var(--off-white);\n    border-radius: 0 0 0.5rem 0.5rem;\n}\n\n/* price section */\n#prices {\n    background-image: url(../images/bg-prices.jpg);\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    min-height: 70vh;\n}\n\n#prices h2>span {\n    background-color: black;\n    /* change this */\n}\n\n\n\ntable h3 {\n    padding: unset;\n}\n\n/* table */\ntable {\n    background-color: var(--off-white);\n    opacity: 0.7;\n    backdrop-filter: blur(10px);\n    margin: auto;\n    width: 100%;\n    border-radius: 0.5rem;\n}\n\nth,\ntd {\n    padding: 1rem;\n}\n\n@media (min-width: 600px) {\n    th,\n    td {\n        padding: 1.5rem;\n    }\n}\n\nth:nth-of-type(2),\ntd:nth-of-type(2) {\n    text-align: right;\n    font-weight: var(--fw-bold);\n}\n\n/* contact section */\n\n#opening-hours {\n    background-image: url(../images/bg-contact.jpg);\n    background-repeat: no-repeat;\n    background-size: cover;\n    min-height: 70vh;\n}\n\n#opening-hours h2 span {\n    background-color: #b79f85;\n}\n\n.tables-contact-sctn {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    margin: auto;\n}\n\n@media (min-width: 750px) {\n    .tables-contact-sctn {\n        flex-direction: row;\n        justify-content: center;\n        gap: 2rem;\n    }\n}\n\narticle {\n    background-color: var(--off-white);\n    opacity: 0.8;\n    border-radius: 0.5rem;\n    /* max-width: 400px; */\n    margin: auto;\n    margin-bottom: 2rem;\n    -webkit-box-shadow: 0px 0px 24px 0px var(--grey-600);\n    -moz-box-shadow: 0px 0px 24px 0px var(--grey-600);\n    box-shadow: 0px 0px 24px 0px var(--grey-600);\n}\n\n#prices article {\n    max-width: 600px;\n}\n\n.tables-contact-sctn article:last-of-type {\n    margin-bottom: unset;\n}\n\n@media (min-width: 750px) {\n    .tables-contact-sctn article {\n        height: 450px;\n        margin-bottom: unset;\n        margin: unset;\n        width: 500px;\n    }\n}\n\n/* footer */\nfooter {\n    background-color: var(--main-dark);\n    padding: 2rem;\n}\n\n\nfooter hr {\n    width: 70vw;\n    height: 1px;\n    background-color: var(--grey-200);\n    margin: 2rem auto;\n}\n\nfooter p {\n    color: var(--off-white);\n    font-size: 0.8rem;\n}\n\nfooter a {\n    color: var(--contrast);\n}\n\nfooter a:hover {\n    color: var(--contrast-dark);\n    cursor: pointer;\n}\n\nfooter hgroup {\n    text-align: left;\n    width: 70vw;\n}\n\nh4 {\n    margin: 1rem 0;\n}\n\nfooter hgroup p {\n    margin: 0.5rem 0;\n}\n\n.footer-top {\n    display: flex;\n    flex-direction: column-reverse;\n    align-items: center;\n    align-content: center;\n    justify-content: space-between;\n    justify-items: start;\n    width: 70vw;\n    gap: 2rem;\n    margin: auto;\n    margin-bottom: 2rem;\n}\n\n\nfooter img {\n    width: 300px;\n    /* margin: auto; */\n}\n\n.footer-info {\n    display: flex;\n    flex-direction: column;\n    margin: auto;\n    align-content: center;\n    gap: 2rem;\n    width: 70vw;\n}\n\n.right-align {\n    float: right;\n}\n\n@media (min-width: 600px) {\n    footer hgroup {\n        width: 100%;\n    }\n\n    .footer-top {\n        flex-direction: row;\n    }\n\n    .footer-info {\n        flex-direction: row;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/reset.css":
/*!***************************!*\
  !*** ./src/css/reset.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/images/bg-contact.jpg":
/*!***********************************!*\
  !*** ./src/images/bg-contact.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2d21baf81e9d83021f71.jpg";

/***/ }),

/***/ "./src/images/bg-hero.jpg":
/*!********************************!*\
  !*** ./src/images/bg-hero.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3765139d8c60254bc9b3.jpg";

/***/ }),

/***/ "./src/images/bg-prices.jpg":
/*!**********************************!*\
  !*** ./src/images/bg-prices.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cb331733089481354b30.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/styles.css */ "./src/css/styles.css");
/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/reset.css */ "./src/css/reset.css");


var toggleMenuBtn = document.getElementById("toggle-btn");
var navLinks = document.getElementsByClassName("nav-links")[0];
toggleMenuBtn.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});
})();

/******/ })()
;
//# sourceMappingURL=bundle4c2938c7a02ec9f1ca27.js.map