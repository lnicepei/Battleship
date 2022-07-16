/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Cormorant+SC&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  font-family: 'Cormorant SC', serif;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow: hidden;\n}\n\n.title {\n  text-align: center;\n  min-height: 5vh;\n  width: 100vw;\n  font-size: 4rem;\n}\n\n.gameboards {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  min-height: 95vh;\n  gap: 100px;\n}\n\n.cells,\n.computer {\n  width: 700px;\n  height: 700px;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  gap: 3px;\n  transition: 2s all linear;\n}\n\n.computer {\n  display: none;\n  transition: visibility 0s, opacity 0.5s linear;\n  visibility: hidden;\n  opacity: 0;\n}\n\n.computer-visible {\n  display: grid;\n  visibility: visible;\n  opacity: 1;\n}\n\n.cell {\n  width: auto;\n  height: auto;\n  background-color: cyan;\n  border-radius: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.start,\n.shuffle {\n  font-size: 2rem;\n  user-select: none;\n  cursor: pointer;\n}\n\n.menu {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  gap: 20px;\n  padding: 30px;\n}\n\n.menu-invisible {\n  display: none;\n}\n\n@media screen and (max-width: 480px) {\n  * {\n    overflow: auto;\n  }\n\n  body {\n    overflow: hidden;\n  }\n\n  .gameboards {\n    justify-content: flex-start;\n    flex-direction: column;\n    gap: 20px;\n    overflow: hidden;\n  }\n\n  .cell {\n    overflow: hidden;\n  }\n\n  .cells,\n  .computer {\n    width: 90vw;\n    height: 40vh;\n  }\n\n  .menu{\n    padding: 0;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,gBAAgB;EAChB,UAAU;AACZ;;AAEA;;EAEE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,QAAQ;EACR,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,8CAA8C;EAC9C,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;;EAEE,eAAe;EACf,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,SAAS;EACT,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE;IACE,cAAc;EAChB;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,2BAA2B;IAC3B,sBAAsB;IACtB,SAAS;IACT,gBAAgB;EAClB;;EAEA;IACE,gBAAgB;EAClB;;EAEA;;IAEE,WAAW;IACX,YAAY;EACd;;EAEA;IACE,UAAU;EACZ;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Cormorant+SC&display=swap');\n\n* {\n  margin: 0;\n  padding: 0;\n  font-family: 'Cormorant SC', serif;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow: hidden;\n}\n\n.title {\n  text-align: center;\n  min-height: 5vh;\n  width: 100vw;\n  font-size: 4rem;\n}\n\n.gameboards {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  min-height: 95vh;\n  gap: 100px;\n}\n\n.cells,\n.computer {\n  width: 700px;\n  height: 700px;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  gap: 3px;\n  transition: 2s all linear;\n}\n\n.computer {\n  display: none;\n  transition: visibility 0s, opacity 0.5s linear;\n  visibility: hidden;\n  opacity: 0;\n}\n\n.computer-visible {\n  display: grid;\n  visibility: visible;\n  opacity: 1;\n}\n\n.cell {\n  width: auto;\n  height: auto;\n  background-color: cyan;\n  border-radius: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.start,\n.shuffle {\n  font-size: 2rem;\n  user-select: none;\n  cursor: pointer;\n}\n\n.menu {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  gap: 20px;\n  padding: 30px;\n}\n\n.menu-invisible {\n  display: none;\n}\n\n@media screen and (max-width: 480px) {\n  * {\n    overflow: auto;\n  }\n\n  body {\n    overflow: hidden;\n  }\n\n  .gameboards {\n    justify-content: flex-start;\n    flex-direction: column;\n    gap: 20px;\n    overflow: hidden;\n  }\n\n  .cell {\n    overflow: hidden;\n  }\n\n  .cells,\n  .computer {\n    width: 90vw;\n    height: 40vh;\n  }\n\n  .menu{\n    padding: 0;\n  }\n}\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/DOMInteraction.ts":
/*!*******************************!*\
  !*** ./src/DOMInteraction.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toggleMenu = exports.markSunkShip = exports.resetBoards = exports.playerHitCoordinatesInPromise = exports.createHumanBoard = exports.updateComputerBoard = exports.updateHumanBoard = void 0;
const cross = `<svg style="width:50px;height:50px" viewBox="0 0 24 24">
<path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
</svg>`;
const dot = `<svg style="width:50px;height:50px" viewBox="0 0 24 24">
<path fill="currentColor" d="M12,10A2,2 0 0,0 10,12C10,13.11 10.9,14 12,14C13.11,14 14,13.11 14,12A2,2 0 0,0 12,10Z" />
</svg>`;
/* eslint-disable  @typescript-eslint/no-non-null-assertion */
function createHumanBoard(shipsBoard) {
    var _a;
    const children = (_a = document.querySelector('.cells')) === null || _a === void 0 ? void 0 : _a.children;
    resetBoards();
    for (let y = 0; y < 10; y++) {
        for (let x = 0; x < 10; x++) {
            if (shipsBoard[y][x] !== 0)
                if (children != null)
                    children.item(x + y * 10).style.backgroundColor = 'red';
        }
    }
}
exports.createHumanBoard = createHumanBoard;
function updateHumanBoard(shipsBoard) {
    var _a;
    const children = (_a = document.querySelector('.cells')) === null || _a === void 0 ? void 0 : _a.children;
    for (let y = 0; y < 10; y++) {
        for (let x = 0; x < 10; x++) {
            if (shipsBoard[y][x] == 1 || shipsBoard[y][x] == 2)
                children.item(x + y * 10).style.backgroundColor = 'red';
            if (shipsBoard[y][x] == 3)
                children.item(x + y * 10).innerHTML = cross;
            if (shipsBoard[y][x] == 4) {
                children.item(x + y * 10).innerHTML = dot;
                children.item(x + y * 10).style.backgroundColor = '#04ECF0';
            }
        }
    }
}
exports.updateHumanBoard = updateHumanBoard;
function updateComputerBoard(shipsBoard) {
    var _a;
    const children = (_a = document.querySelector('.computer')) === null || _a === void 0 ? void 0 : _a.children;
    for (let y = 0; y < 10; y++) {
        for (let x = 0; x < 10; x++) {
            if (shipsBoard[y][x] == 3) {
                children.item(x + y * 10).innerHTML = cross;
                children.item(x + y * 10).style.backgroundColor = 'red';
            }
            if (shipsBoard[y][x] == 4) {
                children.item(x + y * 10).innerHTML = dot;
                children.item(x + y * 10).style.backgroundColor = '#04ECF0';
            }
        }
    }
}
exports.updateComputerBoard = updateComputerBoard;
function playerHitCoordinatesInPromise() {
    return new Promise((resolve) => {
        var _a;
        let hitX, hitY;
        (_a = document.querySelector('.computer')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', (e) => {
            const target = e.target;
            if (target.className == 'cell') {
                const parent = target.parentNode;
                const attackField = Array.prototype.indexOf.call(parent.children, target);
                hitX = attackField % 10;
                hitY = Math.floor(attackField / 10);
                resolve([hitX, hitY]);
            }
        });
    });
}
exports.playerHitCoordinatesInPromise = playerHitCoordinatesInPromise;
function resetBoards() {
    var _a, _b;
    const children1 = (_a = document.querySelector('.cells')) === null || _a === void 0 ? void 0 : _a.children;
    const children2 = (_b = document.querySelector('.computer')) === null || _b === void 0 ? void 0 : _b.children;
    for (let y = 0; y < 10; y++) {
        for (let x = 0; x < 10; x++) {
            children1.item(x + y * 10).innerHTML = '';
            children1.item(x + y * 10).style.backgroundColor = 'cyan';
            children2.item(x + y * 10).innerHTML = '';
            children2.item(x + y * 10).style.backgroundColor = 'cyan';
        }
    }
}
exports.resetBoards = resetBoards;
function toggleMenu() {
    var _a, _b;
    (_a = document.querySelector('.computer')) === null || _a === void 0 ? void 0 : _a.classList.toggle('computer-visible');
    (_b = document.querySelector('.menu')) === null || _b === void 0 ? void 0 : _b.classList.toggle('menu-invisible');
}
exports.toggleMenu = toggleMenu;
function markSunkShip(attackedShip, board) {
    for (let x = attackedShip.coordinateX - 1; x <= attackedShip.width + attackedShip.coordinateX; x++) {
        for (let y = attackedShip.coordinateY - 1; y <= attackedShip.height + attackedShip.coordinateY; y++) {
            if (x < 10 && y < 10 && x >= 0 && y >= 0) {
                if (board.shipsBoard[y][x] !== undefined && board.shipsBoard[y][x] == 0) {
                    board.shipsBoard[y][x] = 4;
                }
            }
        }
    }
    if (board.name == 'computer')
        updateComputerBoard(board.shipsBoard);
}
exports.markSunkShip = markSunkShip;
(_a = document.querySelector('.start')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    var _a, _b;
    (_a = document.querySelector('.computer')) === null || _a === void 0 ? void 0 : _a.classList.toggle('computer-visible');
    (_b = document.querySelector('.menu')) === null || _b === void 0 ? void 0 : _b.classList.toggle('menu-invisible');
});


/***/ }),

/***/ "./src/Gameboard.ts":
/*!**************************!*\
  !*** ./src/Gameboard.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.finishHim = exports.createShipsBoard = exports.randomCoordinate = exports.Gameboard = void 0;
const DOMInteraction_1 = __webpack_require__(/*! ./DOMInteraction */ "./src/DOMInteraction.ts");
const Ships_1 = __webpack_require__(/*! ./Ships */ "./src/Ships.ts");
function Gameboard(name) {
    let arrayOfShips = [], shipsBoard = [];
    [arrayOfShips, shipsBoard] = createShips(arrayOfShips);
    return {
        name,
        arrayOfShips,
        receiveAttack(coordinateX, coordinateY) {
            let resultOfAttack = 1;
            if (this.shipsBoard[coordinateY][coordinateX] == 0) {
                this.shipsBoard[coordinateY][coordinateX] = 4;
                resultOfAttack = 0;
            }
            else if (this.shipsBoard[coordinateY][coordinateX] == 1) {
                for (let x = coordinateX; x >= 0; x--) {
                    const attackedShip = this.arrayOfShips.find((someShip) => someShip.coordinateX == x && someShip.coordinateY == coordinateY);
                    if (x - 1 >= 0 &&
                        this.shipsBoard[coordinateY][x - 1] !== undefined &&
                        this.shipsBoard[coordinateY][x] !== 0 &&
                        attackedShip) {
                        console.log(attackedShip);
                        attackedShip === null || attackedShip === void 0 ? void 0 : attackedShip.hit(coordinateX, coordinateY);
                    }
                    else if ((this.shipsBoard[coordinateY][x - 1] == undefined || x - 1 < 0) &&
                        this.shipsBoard[coordinateY][x] !== 0 &&
                        attackedShip) {
                        attackedShip === null || attackedShip === void 0 ? void 0 : attackedShip.hit(coordinateX, coordinateY);
                    }
                    if ((attackedShip === null || attackedShip === void 0 ? void 0 : attackedShip.sunk) == true && attackedShip)
                        (0, DOMInteraction_1.markSunkShip)(attackedShip, this); //how to mark sunk ships???
                }
                this.shipsBoard[coordinateY][coordinateX] = 3;
            }
            else if (this.shipsBoard[coordinateY][coordinateX] == 2) {
                for (let y = coordinateY; y >= 0; y--) {
                    const attackedShip = this.arrayOfShips.find((someShip) => someShip.coordinateX == coordinateX && someShip.coordinateY == y);
                    if (y - 1 >= 0 &&
                        this.shipsBoard[y - 1][coordinateX] !== undefined &&
                        this.shipsBoard[y][coordinateX] !== 0 &&
                        attackedShip) {
                        console.log(attackedShip);
                        attackedShip === null || attackedShip === void 0 ? void 0 : attackedShip.hit(coordinateX, coordinateY);
                    }
                    else if ((y - 1 < 0 || this.shipsBoard[y - 1][coordinateX] == undefined) &&
                        this.shipsBoard[y][coordinateX] !== 0 &&
                        attackedShip) {
                        attackedShip === null || attackedShip === void 0 ? void 0 : attackedShip.hit(coordinateX, coordinateY);
                    }
                    if ((attackedShip === null || attackedShip === void 0 ? void 0 : attackedShip.sunk) == true && attackedShip)
                        (0, DOMInteraction_1.markSunkShip)(attackedShip, this);
                }
                this.shipsBoard[coordinateY][coordinateX] = 3;
            }
            return [this.shipsBoard, resultOfAttack];
        },
        checkShipsAlive() {
            return this.shipsBoard.flat().filter((element) => element == 1 || element == 2).length > 0;
        },
        shipsBoard: shipsBoard,
        reset() {
            arrayOfShips = [];
            shipsBoard = [];
        },
    };
}
exports.Gameboard = Gameboard;
function createShips(arrayOfShips) {
    let shipsBoard = [];
    shipsBoard = createShipsBoard(shipsBoard);
    for (let k = 4; k > 0; k--) {
        for (let i = k; i > 0; i--) {
            //creates all kinds of ships
            let result = 1;
            while (result) {
                const ship = (0, Ships_1.Ships)(i, setOrientation(), randomCoordinate(), randomCoordinate());
                [shipsBoard, result] = checkBorderCells(shipsBoard, ship);
                if (!result)
                    arrayOfShips.push(ship);
            }
        }
    }
    return [arrayOfShips, shipsBoard];
}
function checkBorderCells(shipsBoard, ship) {
    const initialBoard = shipsBoard.map((arr) => arr.slice());
    for (let y = ship.coordinateY - 1; y <= ship.coordinateY + ship.height; y++) {
        for (let x = ship.coordinateX - 1; x <= ship.coordinateX + ship.width; x++) {
            if (x < 10 && y < 10 && x >= 0 && y >= 0) {
                if (shipsBoard[y][x] !== 0)
                    return [initialBoard, 1];
            }
        }
    }
    if (ship.position === 'horizontal')
        for (let x = ship.coordinateX; x < ship.coordinateX + ship.length; x++) {
            if (x < 10) {
                shipsBoard[ship.coordinateY][x] = 1;
            }
            else {
                return [initialBoard, 1];
            }
        }
    if (ship.position === 'vertical')
        for (let y = ship.coordinateY; y < ship.coordinateY + ship.length; y++) {
            if (y < 10) {
                shipsBoard[y][ship.coordinateX] = 2;
            }
            else {
                return [initialBoard, 1];
            }
        }
    return [shipsBoard, 0];
}
function createShipsBoard(shipsBoard) {
    shipsBoard = [];
    for (let i = 0; i < 10; i++) {
        shipsBoard[i] = new Array(10);
        for (let j = 0; j < 10; j++) {
            shipsBoard[i][j] = 0;
        }
    }
    return shipsBoard;
}
exports.createShipsBoard = createShipsBoard;
function finishHim(x, y, Gameboard) {
    // for (let i = 0; i < 6; i++) {
    // Gameboard.receiveAttack(x, y - 1);
    // Gameboard.receiveAttack(x + 1, y);
    // Gameboard.receiveAttack(x, y + 1);
    // Gameboard.receiveAttack(x - 1, y);
    // Gameboard.shipsBoard[y - 1][x] = 4;
    // Gameboard.shipsBoard[y][x + 1] = 4;
    // }
    // console.log();
    // Gameboard.receiveAttack(x, y + 1);
    // Gameboard.shipsBoard
}
exports.finishHim = finishHim;
function randomCoordinate() {
    return Math.floor(Math.random() * 10);
}
exports.randomCoordinate = randomCoordinate;
function setOrientation() {
    return Math.floor(Math.random() * 2) == 1 ? 'horizontal' : 'vertical';
}


/***/ }),

/***/ "./src/Player.ts":
/*!***********************!*\
  !*** ./src/Player.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createPlayer = void 0;
const Gameboard_1 = __webpack_require__(/*! ../src/Gameboard */ "./src/Gameboard.ts");
function createPlayer(name) {
    const playersGameboard = (0, Gameboard_1.Gameboard)(name);
    let movesBoard = [];
    movesBoard = (0, Gameboard_1.createShipsBoard)(movesBoard);
    return {
        name: name,
        movesBoard: movesBoard,
        playersGameboard: playersGameboard,
        makeMove(x, y, opponentsMovesBoard, // opponent's field with 0/1/2/3/4s
        opponentsBoard // opponent's gameboard object with the properties of Gameboard
        ) {
            if (opponentsMovesBoard[y][x] == 0) {
                opponentsBoard.receiveAttack(x, y);
                opponentsMovesBoard[y][x] = 1;
                return true;
            }
            return false;
        },
        reset() {
            this.name = '';
            this.movesBoard = [];
            this.playersGameboard.arrayOfShips = [];
            this.playersGameboard.reset();
        },
    };
}
exports.createPlayer = createPlayer;


/***/ }),

/***/ "./src/Ships.ts":
/*!**********************!*\
  !*** ./src/Ships.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Ships = void 0;
function Ships(length, position, coordinateX, coordinateY) {
    let width, height;
    if (position === 'vertical') {
        width = 1;
        height = length;
    }
    else {
        width = length;
        height = 1;
    }
    return {
        length: length,
        width: width,
        height: height,
        position: position,
        whereHit: new Array(length).fill(''),
        sunk: false,
        coordinateX: coordinateX,
        coordinateY: coordinateY,
        hit(hitX, hitY) {
            if (this.position === 'horizontal') {
                if (hitY == coordinateY &&
                    this.coordinateX <= hitX &&
                    hitX < this.coordinateX + this.length)
                    this.whereHit[hitX - coordinateX] = 'x';
            }
            else {
                if (hitX == this.coordinateX &&
                    this.coordinateY <= hitY &&
                    hitY < this.coordinateY + this.length)
                    this.whereHit[hitY - this.coordinateY] = 'x';
            }
            this.sunk = this.whereHit.every((cell) => cell === 'x');
            return this;
        },
        isSunk() {
            return this.sunk;
        },
    };
}
exports.Ships = Ships;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable  @typescript-eslint/no-non-null-assertion */
const DOMInteraction_1 = __webpack_require__(/*! ./DOMInteraction */ "./src/DOMInteraction.ts");
const Gameboard_1 = __webpack_require__(/*! ./Gameboard */ "./src/Gameboard.ts");
const Player_1 = __webpack_require__(/*! ./Player */ "./src/Player.ts");
__webpack_require__(/*! ./style.css */ "./src/style.css");
let indexOfStartedGame = 0;
(_a = document.querySelector('.start')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    indexOfStartedGame++;
    createGame();
});
let human = (0, Player_1.createPlayer)('human'), computer = (0, Player_1.createPlayer)('computer');
createGame();
function createGame() {
    var _a;
    // resetBoards();
    (_a = document.querySelector('.shuffle')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', createGame);
    if (!indexOfStartedGame) {
        human = (0, Player_1.createPlayer)('human');
        computer = (0, Player_1.createPlayer)('computer');
        (0, DOMInteraction_1.createHumanBoard)(human.playersGameboard.shipsBoard);
    }
    if (indexOfStartedGame) {
        makeMovesInTurns(human, computer);
    }
}
function makeMovesInTurns(human, computer) {
    return __awaiter(this, void 0, void 0, function* () {
        let activeGame = true;
        let turn = 2;
        while (activeGame) {
            if (turn == 1) {
                const attackX = (0, Gameboard_1.randomCoordinate)();
                const attackY = (0, Gameboard_1.randomCoordinate)();
                const [humansBoard, resultOfAttack] = human.playersGameboard.receiveAttack(attackX, attackY);
                setTimeout(() => {
                    (0, DOMInteraction_1.updateHumanBoard)(humansBoard);
                }, 50);
                if (!resultOfAttack)
                    turn = 2;
            }
            else {
                const coordinates = yield (0, DOMInteraction_1.playerHitCoordinatesInPromise)();
                const [computersBoard, resultOfAttack] = computer.playersGameboard.receiveAttack(coordinates[0], coordinates[1]);
                (0, DOMInteraction_1.updateComputerBoard)(computersBoard);
                // updateComputerBoard(computer.playersGameboard.shipsBoard);
                if (!resultOfAttack)
                    turn = 1;
            }
            activeGame =
                human.playersGameboard.checkShipsAlive() && computer.playersGameboard.checkShipsAlive();
        }
        if (human.playersGameboard.checkShipsAlive() == false) {
            alert('computer won');
        }
        else if (computer.playersGameboard.checkShipsAlive() == false) {
            alert('player won');
        }
        resetGame(human, computer);
    });
}
function resetGame(human, computer) {
    human.playersGameboard.reset();
    computer.playersGameboard.reset();
    indexOfStartedGame = 0;
    human.reset();
    computer.reset();
    (0, DOMInteraction_1.toggleMenu)();
    (0, DOMInteraction_1.resetBoards)();
    createGame();
}


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map