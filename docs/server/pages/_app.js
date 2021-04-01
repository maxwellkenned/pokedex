(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 727:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: external "next/head"
var head_namespaceObject = require("next/head");;
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(914);
;// CONCATENATED MODULE: ./src/styles/global.ts

const GlobalStyles = external_styled_components_.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: monospace;
  }

  div {
    display: flex;
    flex-direction:column;
  }
`;
/* harmony default export */ var global = (GlobalStyles);
;// CONCATENATED MODULE: ./src/pages/_app.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function App({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsx)("title", {
        children: "Pokedex - Maxwell Kenned"
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("link", {
        rel: "shortcut icon",
        href: "/img/icon-512.png"
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("link", {
        rel: "apple-touch-icon",
        href: "/img/icon-512.png"
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("link", {
        rel: "manifest",
        href: "/manifest.webmanifest"
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("meta", {
        name: "theme-color",
        content: "#ffffff00"
      }), /*#__PURE__*/(0,jsx_runtime_.jsx)("meta", {
        name: "description",
        content: "Projeto de pokedex utilizando nextJS consumindo a pokeApi, feito por Maxwell kenned"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsx)(global, {}), /*#__PURE__*/(0,jsx_runtime_.jsx)(Component, _objectSpread({}, pageProps))]
  });
}

/* harmony default export */ var _app = (App);

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 914:
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(727));
module.exports = __webpack_exports__;

})();