/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _zipRegex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zipRegex */ \"./src/zipRegex.js\");\n\n\nconsole.log((0,_zipRegex__WEBPACK_IMPORTED_MODULE_0__.getZipExample)('US'));\n\n\n//# sourceURL=webpack://sign-up-form2/./src/index.js?");

/***/ }),

/***/ "./src/zipRegex.js":
/*!*************************!*\
  !*** ./src/zipRegex.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getZipExample: () => (/* binding */ getZipExample),\n/* harmony export */   validateZip: () => (/* binding */ validateZip)\n/* harmony export */ });\nconst zipRegex = {\n    AD: [\n        {\n            regex: /^[0-9]{5}$/,\n            example: '11111',\n        },\n        {\n            regex: /^[a-zA-Z]{2}[0-9]{3}$/,\n            example: 'AA111',\n        },\n    ],\n    AM: [\n        {\n            regex: /^[0-9]{4}$/,\n            example: '1111',\n        },\n    ],\n    AR: [\n        {\n            regex: /^[0-9]{4}$/,\n            example: '1111',\n        },\n    ],\n    AS: [\n        {\n            regex: /^[0-9]{5}$/,\n            example: '11111',\n        },\n    ],\n    AT: [\n        {\n            regex: /^[0-9]{4}$/,\n            example: '1111',\n        },\n    ],\n    AU: [\n        {\n            regex: /^[0-9]{4}$/,\n            example: '1111',\n        },\n    ],\n    AZ: [\n        {\n            regex: /^[0-9]{4}$/,\n            example: '1111',\n        },\n        {\n            regex: /^[0-9]{6}$/,\n            example: '111111',\n        },\n    ],\n    BA: [\n        {\n            regex: /^[0-9]{5}$/,\n            example: '11111',\n        },\n    ],\n    BD: [\n        {\n            regex: /^[0-9]{4}$/,\n            example: '1111',\n        },\n    ],\n    BE: [\n        {\n            regex: /^[0-9]{4}$/,\n            example: '1111',\n        },\n    ],\n    BG: [\n        {\n            regex: /^[0-9]{4}$/,\n            example: '1111',\n        },\n    ],\n    BN: [\n        {\n            regex: /^[a-zA-Z]{2}[0-9]{4}$/,\n            example: 'AA1111',\n        },\n    ],\n\n    BR: [\n        {\n            regex: /^[0-9]{5}$/,\n            example: '11111',\n        },\n        {\n            regex: /^[0-9]{5}-[0-9]{3}$/,\n            example: '11111-111',\n        },\n    ],\n    BY: [\n        {\n            regex: /^[0-9]{6}$/,\n            example: '111111',\n        },\n    ],\n    CA: [\n        {\n            regex: /^[a-zA-Z]{1}[0-9]{1}[a-zA-Z]{1} [0-9]{1}[a-zA-Z]{1}$/,\n            example: 'A3A 3A',\n        },\n        {\n            regex: /^[a-zA-Z]{1}[0-9]{1}[a-zA-Z]{1} [0-9]{1}[a-zA-Z]{1}[0-9]{1}$/,\n            example: 'A3A 3A3',\n        },\n    ],\n    CH: [\n        {\n            regex: /^[0-9]{4}$/,\n            example: '1111',\n        },\n    ],\n    CN: [\n        {\n            regex: /^[0-9]{6}$/,\n            example: '111111',\n        },\n    ],\n    CO: [\n        {\n            regex: /^[0-9]{6}$/,\n            example: '111111',\n        },\n    ],\n    CU: [\n        {\n            regex: /^[0-9]{5}$/,\n            example: '11111',\n        },\n    ],\n    CY: [\n        {\n            regex: /^[0-9]{4}$/,\n            example: '1111',\n        },\n    ],\n    CZ: [\n        {\n            regex: /^[0-9]{3} [0-9]{2}$/,\n            example: '111 11',\n        },\n    ],\n    DE: [\n        {\n            regex: /^[0-9]{5}$/,\n            example: '11111',\n        },\n    ],\n    DK: [\n        {\n            regex: /^[0-9]{4}$/,\n            example: '1111',\n        },\n    ],\n    DZ: [\n        {\n            regex: /^[0-9]{5}$/,\n            example: '11111',\n        },\n    ],\n    EC: [\n        {\n            regex: /^[0-9]{6}$/,\n            example: '111111',\n        },\n    ],\n    EE: [\n        {\n            regex: /^[0-9]{5}$/,\n            example: '11111',\n        },\n    ],\n    ES: [\n        {\n            regex: /^[0-9]{5}$/,\n            example: '11111',\n        },\n    ],\n    FI: [\n        {\n            regex: /^[0-9]{5}$/,\n            example: '11111',\n        },\n    ],\n    FM: [\n        {\n            regex: /^[0-9]{5}$/,\n            example: '11111',\n        },\n    ],\n    FO: [\n        {\n            regex: /^[0-9]{3}$/,\n            example: '111',\n        },\n    ],\n    FR: [\n        {\n            regex: /^[0-9]{5}$/,\n            example: '11111',\n        },\n    ],\n    GB: [\n        {\n            regex: /^[a-zA-Z]{2}[0-9]{1}[a-zA-Z]{1} [0-9]{1}[a-zA-Z]{2}$/,\n            example: 'AA3A 3AA',\n        },\n        {\n            regex: /^[a-zA-Z]{1}[0-9]{2} [0-9]{1}[a-zA-Z]{2}$/,\n            example: 'A33 3AA',\n        },\n        {\n            regex: /^[a-zA-Z]{1}[0-9]{1}[a-zA-Z]{1} [0-9]{1}[a-zA-Z]{2}$/,\n            example: 'A3A 3AA',\n        },\n        {\n            regex: /^[a-zA-Z]{1}[0-9]{1} [0-9]{1}[a-zA-Z]{2}$/,\n            example: 'A3 3AA',\n        },\n        {\n            regex: /^[a-zA-Z]{2}[0-9]{2} [0-9]{1}[a-zA-Z]{2}$/,\n            example: 'AA33 3AA',\n        },\n        {\n            regex: /^[a-zA-Z]{2}[0-9]{1} [0-9]{1}[a-zA-Z]{2}$/,\n            example: 'AA3 3AA',\n        },\n    ],\n    GE: [\n        {\n            regex: /^[0-9]{5}$/,\n            example: '11111',\n        },\n    ],\n    GF: [\n        {\n            regex: /^[0-9]{5}$/,\n            example: '11111',\n        },\n    ],\n    GG: [\n        {\n            regex: /^[a-zA-Z]{2}[0-9]{2} [0-9]{1}[a-zA-Z]{2}$/,\n            example: 'AA33 3AA',\n        },\n        {\n            regex: /^[a-zA-Z]{2}[0-9]{1} [0-9]{1}[a-zA-Z]{2}$/,\n            example: 'AA3 3AA',\n        },\n    ],\n    GL: [\n        {\n            regex: /^[0-9]{4}$/,\n            example: '1111',\n        },\n    ],\n    GP: [\n        {\n            regex: /^[0-9]{5}$/,\n            example: '11111',\n        },\n    ],\n    GR: [\n        {\n            regex: /^[0-9]{3} [0-9]{2}$/,\n            example: '111 11',\n        },\n    ],\n    GU: [\n        {\n            regex: /^[0-9]{5}$/,\n            example: '11111',\n        },\n        {\n            regex: /^[0-9]{5}-[0-9]{4}$/,\n            example: '11111-1111',\n        },\n    ],\n    HR: [\n        {\n            regex: /^[0-9]{5}$/,\n            example: '11111',\n        },\n    ],\n    HU: [\n        {\n            regex: /^[0-9]{4}$/,\n            example: '1111',\n        },\n    ],\n    IC: [\n        {\n            regex: /^[0-9]{5}$/,\n            example: '11111',\n        },\n    ],\n    ID: [\n        {\n            regex: /^[0-9]{5}$/,\n            example: '11111',\n        },\n    ],\n    IL: [\n        {\n            regex: /^[0-9]{7}$/,\n            example: '1111111',\n        },\n    ],\n    IN: [\n        {\n            regex: /^[0-9]{6}$/,\n            example: '111111',\n        },\n    ],\n    IS: [\n        {\n            regex: /^[0-9]{3}$/,\n            example: '111',\n        },\n    ],\n    IT: [\n        {\n            regex: /^[0-9]{5}$/,\n            example: '11111',\n        },\n    ],\n    JE: [\n        {\n            regex: /^[a-zA-Z]{2}[0-9]{1} [0-9]{1}[a-zA-Z]{2}$/,\n            example: 'AA3 3AA',\n        },\n    ],\n    JP: [\n        {\n            regex: /^[0-9]{3}-[0-9]{4}$/,\n            example: '1111',\n        },\n    ],\n    KG: [\n        {\n            regex: /^[0-9]{6}$/,\n            example: '111111',\n        },\n    ],\n    KH: [\n        {\n            regex: /^[0-9]{6}$/,\n            example: '111111',\n        },\n    ],\n    KR: [\n        {\n            regex: /^[0-9]{5}$/,\n            example: '11111',\n        },\n    ],\n    KV: [\n        {\n            regex: /^[0-9]{5}$/,\n            example: '11111',\n        },\n    ],\n    KZ: [\n        {\n            regex: /^[0-9]{6}$/,\n            example: '111111',\n        },\n    ],\n    LI: [\n        {\n            regex: /^[0-9]{4}$/,\n            example: '1111',\n        },\n    ],\n    LT: [\n        {\n            regex: /^[0-9]{5}$/,\n            example: '11111',\n        },\n    ],\n    LU: [\n        {\n            regex: /^[0-9]{4}$/,\n            example: '1111',\n        },\n    ],\n    LV: [\n        {\n            regex: /^[0-9]{4}$/,\n            example: '1111',\n        },\n    ],\n    MA: [\n        {\n            regex: /^[0-9]{5}$/,\n            example: '11111',\n        },\n    ],\n    MC: [\n        {\n            regex: /^[0-9]{5}$/,\n            example: '11111',\n        },\n    ],\n    MD: [\n        {\n            regex: /^[0-9]{4}$/,\n            example: '1111',\n        },\n    ],\n    ME: [\n        {\n            regex: /^[0-9]{5}$/,\n            example: '11111',\n        },\n    ],\n    MG: [\n        {\n            regex: /^[0-9]{3}$/,\n            example: '111',\n        },\n    ],\n    MH: [\n        {\n            regex: /^[0-9]{5}$/,\n            example: '11111',\n        },\n    ],\n    MK: [\n        {\n            regex: /^[0-9]{4}$/,\n            example: '1111',\n        },\n    ],\n    MN: [\n        {\n            regex: /^[0-9]{6}$/,\n            example: '111111',\n        },\n        {\n            regex: /^[0-9]{5}$/,\n            example: '11111',\n        },\n    ],\n    MP: [\n        {\n            regex: /^[0-9]{5}$/,\n            example: '11111',\n        },\n    ],\n    MQ: [\n        {\n            regex: /^[0-9]{5}$/,\n            example: '11111',\n        },\n    ],\n    MV: [\n        {\n            regex: /^[0-9]{4}$/,\n            example: '1111',\n        },\n    ],\n    MX: [\n        {\n            regex: /^[0-9]{5}$/,\n            example: '11111',\n        },\n    ],\n    MY: [\n        {\n            regex: /^[0-9]{5}$/,\n            example: '11111',\n        },\n    ],\n    NC: [\n        {\n            regex: /^[0-9]{5}$/,\n            example: '11111',\n        },\n    ],\n    NL: [\n        {\n            regex: /^[0-9]{4}$/,\n            example: '1111',\n        },\n        {\n            regex: /^[0-9]{4} [a-zA-Z]{2}$/,\n            example: '3333 AA',\n        },\n    ],\n    NO: [\n        {\n            regex: /^[0-9]{4}$/,\n            example: '1111',\n        },\n    ],\n    NZ: [\n        {\n            regex: /^[0-9]{4}$/,\n            example: '1111',\n        },\n    ],\n    PF: [\n        {\n            regex: /^[0-9]{5}$/,\n            example: '11111',\n        },\n    ],\n    PG: [\n        {\n            regex: /^[0-9]{3}$/,\n            example: '111',\n        },\n    ],\n    PH: [\n        {\n            regex: /^[0-9]{4}$/,\n            example: '1111',\n        },\n    ],\n    PK: [\n        {\n            regex: /^[0-9]{5}$/,\n            example: '11111',\n        },\n    ],\n    PL: [\n        {\n            regex: /^[0-9]{2}-[0-9]{3}$/,\n            example: '11-111',\n        },\n    ],\n    PR: [\n        {\n            regex: /^[0-9]{5}$/,\n            example: '11111',\n        },\n    ],\n    PT: [\n        {\n            regex: /^[0-9]{4}-[0-9]{3}$/,\n            example: '1111-111',\n        },\n    ],\n    PW: [\n        {\n            regex: /^[0-9]{5}$/,\n            example: '11111',\n        },\n    ],\n    RE: [\n        {\n            regex: /^[0-9]{5}$/,\n            example: '11111',\n        },\n    ],\n    RO: [\n        {\n            regex: /^[0-9]{6}$/,\n            example: '111111',\n        },\n    ],\n    RS: [\n        {\n            regex: /^[0-9]{5}$/,\n            example: '11111',\n        },\n    ],\n    RU: [\n        {\n            regex: /^[0-9]{6}$/,\n            example: '111111',\n        },\n    ],\n    SE: [\n        {\n            regex: /^[0-9]{3} [0-9]{2}$/,\n            example: '111 11',\n        },\n    ],\n    SG: [\n        {\n            regex: /^[0-9]{6}$/,\n            example: '111111',\n        },\n    ],\n    SH: [\n        {\n            regex: /^[a-zA-Z]{4} [0-9]{1}[a-zA-Z]{2}$/,\n            example: 'AAAA 3AA',\n        },\n    ],\n    SI: [\n        {\n            regex: /^[0-9]{4}$/,\n            example: '1111',\n        },\n    ],\n    SK: [\n        {\n            regex: /^[0-9]{3} [0-9]{2}$/,\n            example: '111 11',\n        },\n    ],\n    SM: [\n        {\n            regex: /^[0-9]{5}$/,\n            example: '11111',\n        },\n    ],\n    SZ: [\n        {\n            regex: /^[a-zA-Z]{1}[0-9]{3}$/,\n            example: 'A333',\n        },\n    ],\n    TH: [\n        {\n            regex: /^[0-9]{5}$/,\n            example: '11111',\n        },\n    ],\n    TM: [\n        {\n            regex: /^[0-9]{6}$/,\n            example: '111111',\n        },\n    ],\n    TN: [\n        {\n            regex: /^[0-9]{4}$/,\n            example: '1111',\n        },\n    ],\n    TR: [\n        {\n            regex: /^[0-9]{5}$/,\n            example: '11111',\n        },\n    ],\n    TW: [\n        {\n            regex: /^[0-9]{3}$/,\n            example: '111',\n        },\n        {\n            regex: /^[0-9]{5}$/,\n            example: '11111',\n        },\n    ],\n    UA: [\n        {\n            regex: /^[0-9]{5}$/,\n            example: '11111',\n        },\n    ],\n    US: [\n        {\n            regex: /^[0-9]{5}$/,\n            example: '11111',\n        },\n        {\n            regex: /^[0-9]{5}-[0-9]{4}$/,\n            example: '11111-1111',\n        },\n    ],\n    UZ: [\n        {\n            regex: /^[0-9]{6}$/,\n            example: '111111',\n        },\n    ],\n    VI: [\n        {\n            regex: /^[0-9]{5}$/,\n            example: '11111',\n        },\n    ],\n    XY: [\n        {\n            regex: /^[0-9]{5}$/,\n            example: '11111',\n        },\n    ],\n    YT: [\n        {\n            regex: /^[0-9]{5}$/,\n            example: '11111',\n        },\n    ],\n    ZA: [\n        {\n            regex: /^[0-9]{4}$/,\n            example: '1111',\n        },\n    ],\n};\n\nfunction validateZip(countryCode, input) {\n    let result = false;\n\n    zipRegex[countryCode].forEach((entry) => {\n        if (entry.regex.test(input)) {\n            result = true;\n        }\n    });\n\n    return result;\n}\n\nfunction getZipExample(countryCode) {\n    const result = [];\n\n    zipRegex[countryCode].forEach((entry) => {\n        result.push(entry.example);\n    });\n\n    return result;\n}\n\n\n//# sourceURL=webpack://sign-up-form2/./src/zipRegex.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;