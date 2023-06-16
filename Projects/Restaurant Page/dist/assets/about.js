/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/pages/about.js":
/*!************************************!*\
  !*** ./src/scripts/pages/about.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _tools_accessories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tools/accessories */ \"./src/scripts/tools/accessories.js\");\n\r\n\r\n/**\r\n * Generate about page content\r\n */\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\r\n    let about = document.createElement('div');\r\n    let information = {\r\n        description: 'We serve fresh donuts, kolaches, croissants, breakfast burritos, and coffee. Family owned and operated since 2014.',\r\n\r\n        /* Address: '800 Culver Street, Commerce, TX 75428',\r\n        Phone: '(903) 886-1011'*/\r\n\r\n        /* <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d427243.1265642727!2d-96.4976552105055!3d33.21837117916807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864bc89eae23defb%3A0xf7a2110e2a70b25e!2sGood%20Donuts!5e0!3m2!1sen!2sus!4v1686700624215!5m2!1sen!2sus\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe> */\r\n    }\r\n\r\n    let content = (0,_tools_accessories__WEBPACK_IMPORTED_MODULE_0__.buildElement)('div', 'about_description', '');\r\n\r\n    for (let info in information) {\r\n        content.appendChild((0,_tools_accessories__WEBPACK_IMPORTED_MODULE_0__.buildElement)('div', '', info));\r\n    }\r\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wYWdlcy9hYm91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRVQUE0VTtBQUM1VTtBQUNBO0FBQ0Esa0JBQWtCLGdFQUFZO0FBQzlCO0FBQ0E7QUFDQSw0QkFBNEIsZ0VBQVk7QUFDeEM7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zY3JpcHRzL3BhZ2VzL2Fib3V0LmpzPzg2MDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYnVpbGRFbGVtZW50IH0gZnJvbSBcIi4uL3Rvb2xzL2FjY2Vzc29yaWVzXCI7XHJcblxyXG4vKipcclxuICogR2VuZXJhdGUgYWJvdXQgcGFnZSBjb250ZW50XHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gICAgbGV0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZXQgaW5mb3JtYXRpb24gPSB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdXZSBzZXJ2ZSBmcmVzaCBkb251dHMsIGtvbGFjaGVzLCBjcm9pc3NhbnRzLCBicmVha2Zhc3QgYnVycml0b3MsIGFuZCBjb2ZmZWUuIEZhbWlseSBvd25lZCBhbmQgb3BlcmF0ZWQgc2luY2UgMjAxNC4nLFxyXG5cclxuICAgICAgICAvKiBBZGRyZXNzOiAnODAwIEN1bHZlciBTdHJlZXQsIENvbW1lcmNlLCBUWCA3NTQyOCcsXHJcbiAgICAgICAgUGhvbmU6ICcoOTAzKSA4ODYtMTAxMScqL1xyXG5cclxuICAgICAgICAvKiA8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDQyNzI0My4xMjY1NjQyNzI3ITJkLTk2LjQ5NzY1NTIxMDUwNTUhM2QzMy4yMTgzNzExNzkxNjgwNyEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4ODY0YmM4OWVhZTIzZGVmYiUzQTB4ZjdhMjExMGUyYTcwYjI1ZSEyc0dvb2QlMjBEb251dHMhNWUwITNtMiExc2VuITJzdXMhNHYxNjg2NzAwNjI0MjE1ITVtMiExc2VuITJzdXNcIiB3aWR0aD1cIjYwMFwiIGhlaWdodD1cIjQ1MFwiIHN0eWxlPVwiYm9yZGVyOjA7XCIgYWxsb3dmdWxsc2NyZWVuPVwiXCIgbG9hZGluZz1cImxhenlcIiByZWZlcnJlcnBvbGljeT1cIm5vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlXCI+PC9pZnJhbWU+ICovXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGNvbnRlbnQgPSBidWlsZEVsZW1lbnQoJ2RpdicsICdhYm91dF9kZXNjcmlwdGlvbicsICcnKTtcclxuXHJcbiAgICBmb3IgKGxldCBpbmZvIGluIGluZm9ybWF0aW9uKSB7XHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChidWlsZEVsZW1lbnQoJ2RpdicsICcnLCBpbmZvKSk7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/pages/about.js\n");

/***/ }),

/***/ "./src/scripts/pages/location.js":
/*!***************************************!*\
  !*** ./src/scripts/pages/location.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * Generate contact page content\r\n */\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\r\n    let contact = document.createElement('div');\r\n    contact.classList.add('contact');\r\n    \r\n    let header = document.createElement('div');\r\n    header.textContent = 'Contact Us';\r\n    \r\n    let information = {\r\n        /* Address: '805 Manchester Ave, Inglewood, CA 90301',\r\n        Phone: '(310) 645-4707'\r\n        Email: info@randysdonuts.com */\r\n    }\r\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wYWdlcy9sb2NhdGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zY3JpcHRzL3BhZ2VzL2xvY2F0aW9uLmpzPzcxODciXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEdlbmVyYXRlIGNvbnRhY3QgcGFnZSBjb250ZW50XHJcbiAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gICAgbGV0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xyXG4gICAgXHJcbiAgICBsZXQgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSAnQ29udGFjdCBVcyc7XHJcbiAgICBcclxuICAgIGxldCBpbmZvcm1hdGlvbiA9IHtcclxuICAgICAgICAvKiBBZGRyZXNzOiAnODA1IE1hbmNoZXN0ZXIgQXZlLCBJbmdsZXdvb2QsIENBIDkwMzAxJyxcclxuICAgICAgICBQaG9uZTogJygzMTApIDY0NS00NzA3J1xyXG4gICAgICAgIEVtYWlsOiBpbmZvQHJhbmR5c2RvbnV0cy5jb20gKi9cclxuICAgIH1cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/pages/location.js\n");

/***/ }),

/***/ "./src/scripts/pages/menu.js":
/*!***********************************!*\
  !*** ./src/scripts/pages/menu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * Generate menu page content\r\n */\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\r\n    console.log('menu');\r\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wYWdlcy9tZW51LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlO0FBQ2Y7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zY3JpcHRzL3BhZ2VzL21lbnUuanM/N2Q5MSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogR2VuZXJhdGUgbWVudSBwYWdlIGNvbnRlbnRcclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnbWVudScpO1xyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/pages/menu.js\n");

/***/ }),

/***/ "./src/scripts/tools/accessories.js":
/*!******************************************!*\
  !*** ./src/scripts/tools/accessories.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildElement: () => (/* binding */ buildElement),\n/* harmony export */   buildHeader: () => (/* binding */ buildHeader),\n/* harmony export */   buildNav: () => (/* binding */ buildNav),\n/* harmony export */   clearElement: () => (/* binding */ clearElement),\n/* harmony export */   createButton: () => (/* binding */ createButton),\n/* harmony export */   fillWithLorem: () => (/* binding */ fillWithLorem)\n/* harmony export */ });\n/* harmony import */ var _pages_about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/about */ \"./src/scripts/pages/about.js\");\n/* harmony import */ var _pages_location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/location */ \"./src/scripts/pages/location.js\");\n/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/menu */ \"./src/scripts/pages/menu.js\");\n/* harmony import */ var _style_media_donut_cropped_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../style/media/donut-cropped.svg */ \"./src/style/media/donut-cropped.svg\");\n/* harmony import */ var _mobile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mobile */ \"./src/scripts/tools/mobile.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n/**\r\n * Returns a div with specified class(es)\r\n * @param type - element type\r\n * @param id - ID\r\n * @param classes - takes one or more class names eg. 'class1' || 'class1', 'class2', ...\r\n * @returns div\r\n */\r\nfunction buildElement(type, id, ...classes) {\r\n    let div = document.createElement(type);\r\n\r\n    if (id != '') {\r\n        div.id = id;\r\n    }\r\n\r\n    if (classes != '') {\r\n        div.classList.add(...classes);\r\n    }\r\n\r\n    return div;\r\n}\r\n\r\nfunction buildHeader() {\r\n    let header = buildElement('div', 'header', '');\r\n    let logo = buildElement('div', 'logo', '');\r\n    let logoImage = buildElement('img', '', '');\r\n    let logoText = buildElement('div', '', 'logo-text');\r\n\r\n    logoText.textContent = 'Good Donuts';\r\n    logoImage.src = _style_media_donut_cropped_svg__WEBPACK_IMPORTED_MODULE_3__;\r\n\r\n    logo.appendChild(logoImage);\r\n    logo.appendChild(logoText);\r\n    header.appendChild(logo);\r\n\r\n    return header;\r\n}\r\n\r\n/**\r\n * Additional pages can be added by adding a key/pair value into the \"pages\" object initializer\r\n * @returns navBar element containing navigation links\r\n */\r\nfunction buildNav() {\r\n    let navBar = buildElement('div', 'top-nav', '');\r\n\r\n    let pages = {\r\n        'About': _pages_about__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n        'Menu': _pages_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\r\n        'Location': _pages_location__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n    };\r\n    console.log((0,_mobile__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\r\n    navBar.appendChild((0,_mobile__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\r\n\r\n    let navLinks = buildElement('div', 'nav-links', '');\r\n    navBar.appendChild(navLinks);\r\n\r\n    Object.keys(pages).forEach((page) => {\r\n        navLinks.appendChild(createButton(page, pages[page]));\r\n    });\r\n\r\n    return navBar;\r\n}\r\n\r\n/**\r\n * Removes all of the child elements within the element\r\n */\r\nfunction clearElement() {\r\n}\r\n\r\n/**\r\n * Returns a button element with an eventlistener that executes the action\r\n * parameter\r\n * @param name - button text and title\r\n * @param action - a function\r\n * @returns button\r\n */\r\nfunction createButton(name, action) {\r\n    let button = document.createElement('button');\r\n\r\n    button.classList.add('nav');\r\n    button.textContent = name;\r\n    button.title = name;\r\n    button.type = 'button';\r\n\r\n    button.addEventListener('click', () => {\r\n        /* If button contains a class indicating that it is the active page, then do nothing */\r\n        action();\r\n    })\r\n\r\n    return button;\r\n}\r\n\r\nfunction fillWithLorem() {\r\n    let stuff = buildElement('div', 'stuff', '');\r\n\r\n    let paragraphs = [\r\n        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet porttitor eget dolor morbi non arcu risus. Vitae turpis massa sed elementum tempus. Tortor id aliquet lectus proin nibh nisl condimentum id. Turpis tincidunt id aliquet risus. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer. Neque gravida in fermentum et sollicitudin. Consectetur adipiscing elit duis tristique sollicitudin nibh sit. Consequat id porta nibh venenatis. Vitae et leo duis ut diam quam nulla. Nibh nisl condimentum id venenatis a condimentum vitae. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. At auctor urna nunc id cursus metus aliquam. Urna condimentum mattis pellentesque id nibh tortor id aliquet lectus.',\r\n\r\n        'Diam maecenas ultricies mi eget mauris pharetra et ultrices. Ac tortor dignissim convallis aenean et tortor. Molestie at elementum eu facilisis sed odio morbi quis commodo. Vitae ultricies leo integer malesuada nunc vel risus commodo. Id diam maecenas ultricies mi eget. Leo in vitae turpis massa. Amet luctus venenatis lectus magna fringilla. Blandit cursus risus at ultrices mi. Semper risus in hendrerit gravida rutrum. Faucibus a pellentesque sit amet porttitor eget. Porta lorem mollis aliquam ut porttitor leo a. Orci ac auctor augue mauris. Ut aliquam purus sit amet luctus venenatis lectus magna. Tincidunt ornare massa eget egestas purus viverra accumsan in.',\r\n\r\n        'Nunc vel risus commodo viverra. Ipsum suspendisse ultrices gravida dictum fusce ut. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed. Nulla aliquet enim tortor at auctor. Ut tristique et egestas quis ipsum. Accumsan sit amet nulla facilisi morbi tempus iaculis urna id. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Semper viverra nam libero justo laoreet sit. Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Fames ac turpis egestas maecenas pharetra convallis.',\r\n\r\n        'Neque convallis a cras semper auctor. Vulputate eu scelerisque felis imperdiet proin. Bibendum enim facilisis gravida neque convallis a cras. Lectus urna duis convallis convallis tellus id interdum velit laoreet. Enim facilisis gravida neque convallis. Mi proin sed libero enim sed faucibus turpis in. Urna nec tincidunt praesent semper feugiat nibh. Tempus egestas sed sed risus. Hac habitasse platea dictumst quisque. Morbi tristique senectus et netus et. Semper eget duis at tellus at urna condimentum mattis.',\r\n\r\n        'Ultrices tincidunt arcu non sodales neque sodales ut etiam. Quis ipsum suspendisse ultrices gravida dictum fusce ut. Imperdiet nulla malesuada pellentesque elit eget gravida. Dui sapien eget mi proin sed libero enim. Volutpat odio facilisis mauris sit amet massa. Massa sapien faucibus et molestie ac. Pulvinar elementum integer enim neque volutpat ac. Sit amet risus nullam eget felis eget nunc lobortis mattis. Eget mi proin sed libero enim sed faucibus turpis in. Facilisis leo vel fringilla est ullamcorper eget nulla. Fringilla urna porttitor rhoncus dolor. Purus ut faucibus pulvinar elementum integer. Tortor dignissim convallis aenean et tortor at risus. Quis lectus nulla at volutpat diam ut venenatis tellus in. Non arcu risus quis varius quam.'\r\n    ];\r\n\r\n    paragraphs.forEach(words => {\r\n        let paragraph = buildElement('p', '', '');\r\n        paragraph.textContent = words;\r\n        stuff.appendChild(paragraph);\r\n    });\r\n\r\n    return stuff;\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy90b29scy9hY2Nlc3Nvcmllcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFtQztBQUNNO0FBQ1I7QUFDdUI7QUFDMUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwyREFBSztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixvREFBSztBQUN0QixnQkFBZ0IsbURBQUk7QUFDcEIsb0JBQW9CLHVEQUFRO0FBQzVCO0FBQ0EsZ0JBQWdCLG1EQUFNO0FBQ3RCLHVCQUF1QixtREFBTTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc2NyaXB0cy90b29scy9hY2Nlc3Nvcmllcy5qcz9iNTNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhYm91dCBmcm9tICcuLi9wYWdlcy9hYm91dCc7XHJcbmltcG9ydCBsb2NhdGlvbiBmcm9tICcuLi9wYWdlcy9sb2NhdGlvbic7XHJcbmltcG9ydCBtZW51IGZyb20gJy4uL3BhZ2VzL21lbnUnO1xyXG5pbXBvcnQgZG9udXQgZnJvbSAnLi4vLi4vc3R5bGUvbWVkaWEvZG9udXQtY3JvcHBlZC5zdmcnO1xyXG5pbXBvcnQgbW9iaWxlIGZyb20gJy4vbW9iaWxlJztcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgZGl2IHdpdGggc3BlY2lmaWVkIGNsYXNzKGVzKVxyXG4gKiBAcGFyYW0gdHlwZSAtIGVsZW1lbnQgdHlwZVxyXG4gKiBAcGFyYW0gaWQgLSBJRFxyXG4gKiBAcGFyYW0gY2xhc3NlcyAtIHRha2VzIG9uZSBvciBtb3JlIGNsYXNzIG5hbWVzIGVnLiAnY2xhc3MxJyB8fCAnY2xhc3MxJywgJ2NsYXNzMicsIC4uLlxyXG4gKiBAcmV0dXJucyBkaXZcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBidWlsZEVsZW1lbnQodHlwZSwgaWQsIC4uLmNsYXNzZXMpIHtcclxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xyXG5cclxuICAgIGlmIChpZCAhPSAnJykge1xyXG4gICAgICAgIGRpdi5pZCA9IGlkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjbGFzc2VzICE9ICcnKSB7XHJcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRpdjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkSGVhZGVyKCkge1xyXG4gICAgbGV0IGhlYWRlciA9IGJ1aWxkRWxlbWVudCgnZGl2JywgJ2hlYWRlcicsICcnKTtcclxuICAgIGxldCBsb2dvID0gYnVpbGRFbGVtZW50KCdkaXYnLCAnbG9nbycsICcnKTtcclxuICAgIGxldCBsb2dvSW1hZ2UgPSBidWlsZEVsZW1lbnQoJ2ltZycsICcnLCAnJyk7XHJcbiAgICBsZXQgbG9nb1RleHQgPSBidWlsZEVsZW1lbnQoJ2RpdicsICcnLCAnbG9nby10ZXh0Jyk7XHJcblxyXG4gICAgbG9nb1RleHQudGV4dENvbnRlbnQgPSAnR29vZCBEb251dHMnO1xyXG4gICAgbG9nb0ltYWdlLnNyYyA9IGRvbnV0O1xyXG5cclxuICAgIGxvZ28uYXBwZW5kQ2hpbGQobG9nb0ltYWdlKTtcclxuICAgIGxvZ28uYXBwZW5kQ2hpbGQobG9nb1RleHQpO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ28pO1xyXG5cclxuICAgIHJldHVybiBoZWFkZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGRpdGlvbmFsIHBhZ2VzIGNhbiBiZSBhZGRlZCBieSBhZGRpbmcgYSBrZXkvcGFpciB2YWx1ZSBpbnRvIHRoZSBcInBhZ2VzXCIgb2JqZWN0IGluaXRpYWxpemVyXHJcbiAqIEByZXR1cm5zIG5hdkJhciBlbGVtZW50IGNvbnRhaW5pbmcgbmF2aWdhdGlvbiBsaW5rc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTmF2KCkge1xyXG4gICAgbGV0IG5hdkJhciA9IGJ1aWxkRWxlbWVudCgnZGl2JywgJ3RvcC1uYXYnLCAnJyk7XHJcblxyXG4gICAgbGV0IHBhZ2VzID0ge1xyXG4gICAgICAgICdBYm91dCc6IGFib3V0LFxyXG4gICAgICAgICdNZW51JzogbWVudSxcclxuICAgICAgICAnTG9jYXRpb24nOiBsb2NhdGlvbixcclxuICAgIH07XHJcbiAgICBjb25zb2xlLmxvZyhtb2JpbGUoKSk7XHJcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQobW9iaWxlKCkpO1xyXG5cclxuICAgIGxldCBuYXZMaW5rcyA9IGJ1aWxkRWxlbWVudCgnZGl2JywgJ25hdi1saW5rcycsICcnKTtcclxuICAgIG5hdkJhci5hcHBlbmRDaGlsZChuYXZMaW5rcyk7XHJcblxyXG4gICAgT2JqZWN0LmtleXMocGFnZXMpLmZvckVhY2goKHBhZ2UpID0+IHtcclxuICAgICAgICBuYXZMaW5rcy5hcHBlbmRDaGlsZChjcmVhdGVCdXR0b24ocGFnZSwgcGFnZXNbcGFnZV0pKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBuYXZCYXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZW1vdmVzIGFsbCBvZiB0aGUgY2hpbGQgZWxlbWVudHMgd2l0aGluIHRoZSBlbGVtZW50XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJFbGVtZW50KCkge1xyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIGJ1dHRvbiBlbGVtZW50IHdpdGggYW4gZXZlbnRsaXN0ZW5lciB0aGF0IGV4ZWN1dGVzIHRoZSBhY3Rpb25cclxuICogcGFyYW1ldGVyXHJcbiAqIEBwYXJhbSBuYW1lIC0gYnV0dG9uIHRleHQgYW5kIHRpdGxlXHJcbiAqIEBwYXJhbSBhY3Rpb24gLSBhIGZ1bmN0aW9uXHJcbiAqIEByZXR1cm5zIGJ1dHRvblxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbihuYW1lLCBhY3Rpb24pIHtcclxuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHJcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnbmF2Jyk7XHJcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgYnV0dG9uLnRpdGxlID0gbmFtZTtcclxuICAgIGJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XHJcblxyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIC8qIElmIGJ1dHRvbiBjb250YWlucyBhIGNsYXNzIGluZGljYXRpbmcgdGhhdCBpdCBpcyB0aGUgYWN0aXZlIHBhZ2UsIHRoZW4gZG8gbm90aGluZyAqL1xyXG4gICAgICAgIGFjdGlvbigpO1xyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gYnV0dG9uO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmlsbFdpdGhMb3JlbSgpIHtcclxuICAgIGxldCBzdHVmZiA9IGJ1aWxkRWxlbWVudCgnZGl2JywgJ3N0dWZmJywgJycpO1xyXG5cclxuICAgIGxldCBwYXJhZ3JhcGhzID0gW1xyXG4gICAgICAgICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gU2l0IGFtZXQgcG9ydHRpdG9yIGVnZXQgZG9sb3IgbW9yYmkgbm9uIGFyY3UgcmlzdXMuIFZpdGFlIHR1cnBpcyBtYXNzYSBzZWQgZWxlbWVudHVtIHRlbXB1cy4gVG9ydG9yIGlkIGFsaXF1ZXQgbGVjdHVzIHByb2luIG5pYmggbmlzbCBjb25kaW1lbnR1bSBpZC4gVHVycGlzIHRpbmNpZHVudCBpZCBhbGlxdWV0IHJpc3VzLiBQYXJ0dXJpZW50IG1vbnRlcyBuYXNjZXR1ciByaWRpY3VsdXMgbXVzIG1hdXJpcyB2aXRhZSB1bHRyaWNpZXMgbGVvIGludGVnZXIuIE5lcXVlIGdyYXZpZGEgaW4gZmVybWVudHVtIGV0IHNvbGxpY2l0dWRpbi4gQ29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0IGR1aXMgdHJpc3RpcXVlIHNvbGxpY2l0dWRpbiBuaWJoIHNpdC4gQ29uc2VxdWF0IGlkIHBvcnRhIG5pYmggdmVuZW5hdGlzLiBWaXRhZSBldCBsZW8gZHVpcyB1dCBkaWFtIHF1YW0gbnVsbGEuIE5pYmggbmlzbCBjb25kaW1lbnR1bSBpZCB2ZW5lbmF0aXMgYSBjb25kaW1lbnR1bSB2aXRhZS4gQW1ldCBsdWN0dXMgdmVuZW5hdGlzIGxlY3R1cyBtYWduYSBmcmluZ2lsbGEgdXJuYSBwb3J0dGl0b3IgcmhvbmN1cyBkb2xvci4gQXQgYXVjdG9yIHVybmEgbnVuYyBpZCBjdXJzdXMgbWV0dXMgYWxpcXVhbS4gVXJuYSBjb25kaW1lbnR1bSBtYXR0aXMgcGVsbGVudGVzcXVlIGlkIG5pYmggdG9ydG9yIGlkIGFsaXF1ZXQgbGVjdHVzLicsXHJcblxyXG4gICAgICAgICdEaWFtIG1hZWNlbmFzIHVsdHJpY2llcyBtaSBlZ2V0IG1hdXJpcyBwaGFyZXRyYSBldCB1bHRyaWNlcy4gQWMgdG9ydG9yIGRpZ25pc3NpbSBjb252YWxsaXMgYWVuZWFuIGV0IHRvcnRvci4gTW9sZXN0aWUgYXQgZWxlbWVudHVtIGV1IGZhY2lsaXNpcyBzZWQgb2RpbyBtb3JiaSBxdWlzIGNvbW1vZG8uIFZpdGFlIHVsdHJpY2llcyBsZW8gaW50ZWdlciBtYWxlc3VhZGEgbnVuYyB2ZWwgcmlzdXMgY29tbW9kby4gSWQgZGlhbSBtYWVjZW5hcyB1bHRyaWNpZXMgbWkgZWdldC4gTGVvIGluIHZpdGFlIHR1cnBpcyBtYXNzYS4gQW1ldCBsdWN0dXMgdmVuZW5hdGlzIGxlY3R1cyBtYWduYSBmcmluZ2lsbGEuIEJsYW5kaXQgY3Vyc3VzIHJpc3VzIGF0IHVsdHJpY2VzIG1pLiBTZW1wZXIgcmlzdXMgaW4gaGVuZHJlcml0IGdyYXZpZGEgcnV0cnVtLiBGYXVjaWJ1cyBhIHBlbGxlbnRlc3F1ZSBzaXQgYW1ldCBwb3J0dGl0b3IgZWdldC4gUG9ydGEgbG9yZW0gbW9sbGlzIGFsaXF1YW0gdXQgcG9ydHRpdG9yIGxlbyBhLiBPcmNpIGFjIGF1Y3RvciBhdWd1ZSBtYXVyaXMuIFV0IGFsaXF1YW0gcHVydXMgc2l0IGFtZXQgbHVjdHVzIHZlbmVuYXRpcyBsZWN0dXMgbWFnbmEuIFRpbmNpZHVudCBvcm5hcmUgbWFzc2EgZWdldCBlZ2VzdGFzIHB1cnVzIHZpdmVycmEgYWNjdW1zYW4gaW4uJyxcclxuXHJcbiAgICAgICAgJ051bmMgdmVsIHJpc3VzIGNvbW1vZG8gdml2ZXJyYS4gSXBzdW0gc3VzcGVuZGlzc2UgdWx0cmljZXMgZ3JhdmlkYSBkaWN0dW0gZnVzY2UgdXQuIFBvdGVudGkgbnVsbGFtIGFjIHRvcnRvciB2aXRhZSBwdXJ1cyBmYXVjaWJ1cyBvcm5hcmUgc3VzcGVuZGlzc2Ugc2VkLiBOdWxsYSBhbGlxdWV0IGVuaW0gdG9ydG9yIGF0IGF1Y3Rvci4gVXQgdHJpc3RpcXVlIGV0IGVnZXN0YXMgcXVpcyBpcHN1bS4gQWNjdW1zYW4gc2l0IGFtZXQgbnVsbGEgZmFjaWxpc2kgbW9yYmkgdGVtcHVzIGlhY3VsaXMgdXJuYSBpZC4gRnJpbmdpbGxhIHBoYXNlbGx1cyBmYXVjaWJ1cyBzY2VsZXJpc3F1ZSBlbGVpZmVuZCBkb25lYyBwcmV0aXVtIHZ1bHB1dGF0ZSBzYXBpZW4uIFNlbXBlciB2aXZlcnJhIG5hbSBsaWJlcm8ganVzdG8gbGFvcmVldCBzaXQuIFNlbSBudWxsYSBwaGFyZXRyYSBkaWFtIHNpdCBhbWV0IG5pc2wgc3VzY2lwaXQgYWRpcGlzY2luZyBiaWJlbmR1bS4gU2VkIHVsbGFtY29ycGVyIG1vcmJpIHRpbmNpZHVudCBvcm5hcmUgbWFzc2EgZWdldCBlZ2VzdGFzLiBGYW1lcyBhYyB0dXJwaXMgZWdlc3RhcyBtYWVjZW5hcyBwaGFyZXRyYSBjb252YWxsaXMuJyxcclxuXHJcbiAgICAgICAgJ05lcXVlIGNvbnZhbGxpcyBhIGNyYXMgc2VtcGVyIGF1Y3Rvci4gVnVscHV0YXRlIGV1IHNjZWxlcmlzcXVlIGZlbGlzIGltcGVyZGlldCBwcm9pbi4gQmliZW5kdW0gZW5pbSBmYWNpbGlzaXMgZ3JhdmlkYSBuZXF1ZSBjb252YWxsaXMgYSBjcmFzLiBMZWN0dXMgdXJuYSBkdWlzIGNvbnZhbGxpcyBjb252YWxsaXMgdGVsbHVzIGlkIGludGVyZHVtIHZlbGl0IGxhb3JlZXQuIEVuaW0gZmFjaWxpc2lzIGdyYXZpZGEgbmVxdWUgY29udmFsbGlzLiBNaSBwcm9pbiBzZWQgbGliZXJvIGVuaW0gc2VkIGZhdWNpYnVzIHR1cnBpcyBpbi4gVXJuYSBuZWMgdGluY2lkdW50IHByYWVzZW50IHNlbXBlciBmZXVnaWF0IG5pYmguIFRlbXB1cyBlZ2VzdGFzIHNlZCBzZWQgcmlzdXMuIEhhYyBoYWJpdGFzc2UgcGxhdGVhIGRpY3R1bXN0IHF1aXNxdWUuIE1vcmJpIHRyaXN0aXF1ZSBzZW5lY3R1cyBldCBuZXR1cyBldC4gU2VtcGVyIGVnZXQgZHVpcyBhdCB0ZWxsdXMgYXQgdXJuYSBjb25kaW1lbnR1bSBtYXR0aXMuJyxcclxuXHJcbiAgICAgICAgJ1VsdHJpY2VzIHRpbmNpZHVudCBhcmN1IG5vbiBzb2RhbGVzIG5lcXVlIHNvZGFsZXMgdXQgZXRpYW0uIFF1aXMgaXBzdW0gc3VzcGVuZGlzc2UgdWx0cmljZXMgZ3JhdmlkYSBkaWN0dW0gZnVzY2UgdXQuIEltcGVyZGlldCBudWxsYSBtYWxlc3VhZGEgcGVsbGVudGVzcXVlIGVsaXQgZWdldCBncmF2aWRhLiBEdWkgc2FwaWVuIGVnZXQgbWkgcHJvaW4gc2VkIGxpYmVybyBlbmltLiBWb2x1dHBhdCBvZGlvIGZhY2lsaXNpcyBtYXVyaXMgc2l0IGFtZXQgbWFzc2EuIE1hc3NhIHNhcGllbiBmYXVjaWJ1cyBldCBtb2xlc3RpZSBhYy4gUHVsdmluYXIgZWxlbWVudHVtIGludGVnZXIgZW5pbSBuZXF1ZSB2b2x1dHBhdCBhYy4gU2l0IGFtZXQgcmlzdXMgbnVsbGFtIGVnZXQgZmVsaXMgZWdldCBudW5jIGxvYm9ydGlzIG1hdHRpcy4gRWdldCBtaSBwcm9pbiBzZWQgbGliZXJvIGVuaW0gc2VkIGZhdWNpYnVzIHR1cnBpcyBpbi4gRmFjaWxpc2lzIGxlbyB2ZWwgZnJpbmdpbGxhIGVzdCB1bGxhbWNvcnBlciBlZ2V0IG51bGxhLiBGcmluZ2lsbGEgdXJuYSBwb3J0dGl0b3IgcmhvbmN1cyBkb2xvci4gUHVydXMgdXQgZmF1Y2lidXMgcHVsdmluYXIgZWxlbWVudHVtIGludGVnZXIuIFRvcnRvciBkaWduaXNzaW0gY29udmFsbGlzIGFlbmVhbiBldCB0b3J0b3IgYXQgcmlzdXMuIFF1aXMgbGVjdHVzIG51bGxhIGF0IHZvbHV0cGF0IGRpYW0gdXQgdmVuZW5hdGlzIHRlbGx1cyBpbi4gTm9uIGFyY3UgcmlzdXMgcXVpcyB2YXJpdXMgcXVhbS4nXHJcbiAgICBdO1xyXG5cclxuICAgIHBhcmFncmFwaHMuZm9yRWFjaCh3b3JkcyA9PiB7XHJcbiAgICAgICAgbGV0IHBhcmFncmFwaCA9IGJ1aWxkRWxlbWVudCgncCcsICcnLCAnJyk7XHJcbiAgICAgICAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gd29yZHM7XHJcbiAgICAgICAgc3R1ZmYuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzdHVmZjtcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/tools/accessories.js\n");

/***/ }),

/***/ "./src/scripts/tools/mobile.js":
/*!*************************************!*\
  !*** ./src/scripts/tools/mobile.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ buildMobileNavBurger)\n/* harmony export */ });\n/* harmony import */ var _accessories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accessories */ \"./src/scripts/tools/accessories.js\");\n\r\n\r\n/**\r\n * @returns mobileHamburger button that toggles the mobile navigation bar\r\n */\r\nfunction buildMobileNavBurger() {\r\n    let mobileHamburger = (0,_accessories__WEBPACK_IMPORTED_MODULE_0__.buildElement)('button', 'navBurger', 'hamburger', 'hamburger--squeeze');\r\n\r\n    mobileHamburger.addEventListener('click', () => {\r\n        mobileHamburger.classList.toggle('is-active');\r\n    })\r\n\r\n    mobileHamburger.type = 'button';\r\n    let hamburgerBox = (0,_accessories__WEBPACK_IMPORTED_MODULE_0__.buildElement)('span', '', 'hamburger-box');\r\n    let hamburgerInner = (0,_accessories__WEBPACK_IMPORTED_MODULE_0__.buildElement)('span', '', 'hamburger-inner');\r\n\r\n    hamburgerBox.appendChild(hamburgerInner);\r\n    mobileHamburger.appendChild(hamburgerBox);\r\n\r\n    return mobileHamburger;\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy90b29scy9tb2JpbGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmLDBCQUEwQiwwREFBWTtBQUN0QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHVCQUF1QiwwREFBWTtBQUNuQyx5QkFBeUIsMERBQVk7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3NjcmlwdHMvdG9vbHMvbW9iaWxlLmpzPzAxYWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYnVpbGRFbGVtZW50IH0gZnJvbSBcIi4vYWNjZXNzb3JpZXNcIjtcclxuXHJcbi8qKlxyXG4gKiBAcmV0dXJucyBtb2JpbGVIYW1idXJnZXIgYnV0dG9uIHRoYXQgdG9nZ2xlcyB0aGUgbW9iaWxlIG5hdmlnYXRpb24gYmFyXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1vYmlsZU5hdkJ1cmdlcigpIHtcclxuICAgIGxldCBtb2JpbGVIYW1idXJnZXIgPSBidWlsZEVsZW1lbnQoJ2J1dHRvbicsICduYXZCdXJnZXInLCAnaGFtYnVyZ2VyJywgJ2hhbWJ1cmdlci0tc3F1ZWV6ZScpO1xyXG5cclxuICAgIG1vYmlsZUhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBtb2JpbGVIYW1idXJnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XHJcbiAgICB9KVxyXG5cclxuICAgIG1vYmlsZUhhbWJ1cmdlci50eXBlID0gJ2J1dHRvbic7XHJcbiAgICBsZXQgaGFtYnVyZ2VyQm94ID0gYnVpbGRFbGVtZW50KCdzcGFuJywgJycsICdoYW1idXJnZXItYm94Jyk7XHJcbiAgICBsZXQgaGFtYnVyZ2VySW5uZXIgPSBidWlsZEVsZW1lbnQoJ3NwYW4nLCAnJywgJ2hhbWJ1cmdlci1pbm5lcicpO1xyXG5cclxuICAgIGhhbWJ1cmdlckJveC5hcHBlbmRDaGlsZChoYW1idXJnZXJJbm5lcik7XHJcbiAgICBtb2JpbGVIYW1idXJnZXIuYXBwZW5kQ2hpbGQoaGFtYnVyZ2VyQm94KTtcclxuXHJcbiAgICByZXR1cm4gbW9iaWxlSGFtYnVyZ2VyO1xyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/tools/mobile.js\n");

/***/ }),

/***/ "./src/style/media/donut-cropped.svg":
/*!*******************************************!*\
  !*** ./src/style/media/donut-cropped.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e6c572ee602e45fe4265.svg";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/pages/about.js");
/******/ 	
/******/ })()
;