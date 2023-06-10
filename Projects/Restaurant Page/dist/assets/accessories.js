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

/***/ "./src/scripts/accessories.js":
/*!************************************!*\
  !*** ./src/scripts/accessories.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildElement: () => (/* binding */ buildElement),\n/* harmony export */   buildHeader: () => (/* binding */ buildHeader),\n/* harmony export */   buildNav: () => (/* binding */ buildNav),\n/* harmony export */   clearElement: () => (/* binding */ clearElement),\n/* harmony export */   createButton: () => (/* binding */ createButton),\n/* harmony export */   fillWithLorem: () => (/* binding */ fillWithLorem)\n/* harmony export */ });\n/* harmony import */ var _pages_about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/about */ \"./src/scripts/pages/about.js\");\n/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/contact */ \"./src/scripts/pages/contact.js\");\n/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/menu */ \"./src/scripts/pages/menu.js\");\n/* harmony import */ var _style_media_donut_cropped_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/media/donut-cropped.svg */ \"./src/style/media/donut-cropped.svg\");\n/* harmony import */ var _mobile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mobile */ \"./src/scripts/mobile.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n/**\r\n * Returns a div with specified class(es)\r\n * @param type - element type\r\n * @param id - ID\r\n * @param classes - takes one or more class names eg. 'class1' || 'class1', 'class2', ...\r\n * @returns div\r\n */\r\nfunction buildElement(type, id, ...classes) {\r\n    let div = document.createElement(type);\r\n\r\n    if (id != '') {\r\n        div.id = id;\r\n    }\r\n\r\n    if (classes != '') {\r\n        div.classList.add(...classes);\r\n    }\r\n\r\n    return div;\r\n}\r\n\r\nfunction buildHeader() {\r\n    let header = buildElement('div', 'header', '');\r\n    let logo = buildElement('div', 'logo', '');\r\n    let logoImage = buildElement('img', '', '');\r\n    let logoText = buildElement('div', '', 'logo-text');\r\n\r\n    logoText.textContent = 'Andeez Donuts';\r\n    logoImage.src = _style_media_donut_cropped_svg__WEBPACK_IMPORTED_MODULE_3__;\r\n\r\n    logo.appendChild(logoImage);\r\n    logo.appendChild(logoText);\r\n    header.appendChild(logo);\r\n\r\n    return header;\r\n}\r\n\r\nfunction buildNav() {\r\n    let navBar = buildElement('div', 'top-nav', '');\r\n\r\n    let pages = {\r\n        'About': _pages_about__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n        'Contact': _pages_contact__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n        'Menu': _pages_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\r\n    };\r\n\r\n    navBar.appendChild((0,_mobile__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\r\n\r\n    let navLinks = buildElement('div', 'nav-links', '');\r\n    navBar.appendChild(navLinks);\r\n\r\n    Object.keys(pages).forEach((page) => {\r\n        navLinks.appendChild(createButton(page, pages[page]));\r\n    });\r\n\r\n    return navBar;\r\n}\r\n\r\n/**\r\n * Removes all of the child elements within the element\r\n */\r\nfunction clearElement() {\r\n}\r\n\r\n/**\r\n * Returns a button element with an eventlistener that executes the action\r\n * parameter\r\n * @param name - button text and title\r\n * @param action - a function\r\n * @returns button\r\n */\r\nfunction createButton(name, action) {\r\n    let button = document.createElement('button');\r\n\r\n    button.classList.add('nav');\r\n    button.textContent = name;\r\n    button.title = name;\r\n    button.type = 'button';\r\n\r\n    button.addEventListener('click', () => {\r\n        /* If button contains a class indicating that it is the active page, then do nothing */\r\n        action();\r\n    })\r\n\r\n    return button;\r\n}\r\n\r\nfunction fillWithLorem() {\r\n    let stuff = buildElement('div', 'stuff', '');\r\n\r\n    let paragraphs = [\r\n        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet porttitor eget dolor morbi non arcu risus. Vitae turpis massa sed elementum tempus. Tortor id aliquet lectus proin nibh nisl condimentum id. Turpis tincidunt id aliquet risus. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer. Neque gravida in fermentum et sollicitudin. Consectetur adipiscing elit duis tristique sollicitudin nibh sit. Consequat id porta nibh venenatis. Vitae et leo duis ut diam quam nulla. Nibh nisl condimentum id venenatis a condimentum vitae. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. At auctor urna nunc id cursus metus aliquam. Urna condimentum mattis pellentesque id nibh tortor id aliquet lectus.',\r\n\r\n        'Diam maecenas ultricies mi eget mauris pharetra et ultrices. Ac tortor dignissim convallis aenean et tortor. Molestie at elementum eu facilisis sed odio morbi quis commodo. Vitae ultricies leo integer malesuada nunc vel risus commodo. Id diam maecenas ultricies mi eget. Leo in vitae turpis massa. Amet luctus venenatis lectus magna fringilla. Blandit cursus risus at ultrices mi. Semper risus in hendrerit gravida rutrum. Faucibus a pellentesque sit amet porttitor eget. Porta lorem mollis aliquam ut porttitor leo a. Orci ac auctor augue mauris. Ut aliquam purus sit amet luctus venenatis lectus magna. Tincidunt ornare massa eget egestas purus viverra accumsan in.',\r\n\r\n        'Nunc vel risus commodo viverra. Ipsum suspendisse ultrices gravida dictum fusce ut. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed. Nulla aliquet enim tortor at auctor. Ut tristique et egestas quis ipsum. Accumsan sit amet nulla facilisi morbi tempus iaculis urna id. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Semper viverra nam libero justo laoreet sit. Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Fames ac turpis egestas maecenas pharetra convallis.',\r\n\r\n        'Neque convallis a cras semper auctor. Vulputate eu scelerisque felis imperdiet proin. Bibendum enim facilisis gravida neque convallis a cras. Lectus urna duis convallis convallis tellus id interdum velit laoreet. Enim facilisis gravida neque convallis. Mi proin sed libero enim sed faucibus turpis in. Urna nec tincidunt praesent semper feugiat nibh. Tempus egestas sed sed risus. Hac habitasse platea dictumst quisque. Morbi tristique senectus et netus et. Semper eget duis at tellus at urna condimentum mattis.',\r\n\r\n        'Ultrices tincidunt arcu non sodales neque sodales ut etiam. Quis ipsum suspendisse ultrices gravida dictum fusce ut. Imperdiet nulla malesuada pellentesque elit eget gravida. Dui sapien eget mi proin sed libero enim. Volutpat odio facilisis mauris sit amet massa. Massa sapien faucibus et molestie ac. Pulvinar elementum integer enim neque volutpat ac. Sit amet risus nullam eget felis eget nunc lobortis mattis. Eget mi proin sed libero enim sed faucibus turpis in. Facilisis leo vel fringilla est ullamcorper eget nulla. Fringilla urna porttitor rhoncus dolor. Purus ut faucibus pulvinar elementum integer. Tortor dignissim convallis aenean et tortor at risus. Quis lectus nulla at volutpat diam ut venenatis tellus in. Non arcu risus quis varius quam.'\r\n    ];\r\n\r\n    paragraphs.forEach(words => {\r\n        let paragraph = buildElement('p', '', '');\r\n        paragraph.textContent = words;\r\n        stuff.appendChild(paragraph);\r\n    });\r\n\r\n    return stuff;\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9hY2Nlc3Nvcmllcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFrQztBQUNJO0FBQ047QUFDcUI7QUFDdkI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwyREFBSztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsb0RBQUs7QUFDdEIsbUJBQW1CLHNEQUFPO0FBQzFCLGdCQUFnQixtREFBSTtBQUNwQjtBQUNBO0FBQ0EsdUJBQXVCLG1EQUFNO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zY3JpcHRzL2FjY2Vzc29yaWVzLmpzPzRlODYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFib3V0IGZyb20gJy4vcGFnZXMvYWJvdXQnO1xyXG5pbXBvcnQgY29udGFjdCBmcm9tICcuL3BhZ2VzL2NvbnRhY3QnO1xyXG5pbXBvcnQgbWVudSBmcm9tICcuL3BhZ2VzL21lbnUnO1xyXG5pbXBvcnQgZG9udXQgZnJvbSAnLi4vc3R5bGUvbWVkaWEvZG9udXQtY3JvcHBlZC5zdmcnO1xyXG5pbXBvcnQgbW9iaWxlIGZyb20gJy4vbW9iaWxlJztcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgZGl2IHdpdGggc3BlY2lmaWVkIGNsYXNzKGVzKVxyXG4gKiBAcGFyYW0gdHlwZSAtIGVsZW1lbnQgdHlwZVxyXG4gKiBAcGFyYW0gaWQgLSBJRFxyXG4gKiBAcGFyYW0gY2xhc3NlcyAtIHRha2VzIG9uZSBvciBtb3JlIGNsYXNzIG5hbWVzIGVnLiAnY2xhc3MxJyB8fCAnY2xhc3MxJywgJ2NsYXNzMicsIC4uLlxyXG4gKiBAcmV0dXJucyBkaXZcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBidWlsZEVsZW1lbnQodHlwZSwgaWQsIC4uLmNsYXNzZXMpIHtcclxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xyXG5cclxuICAgIGlmIChpZCAhPSAnJykge1xyXG4gICAgICAgIGRpdi5pZCA9IGlkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjbGFzc2VzICE9ICcnKSB7XHJcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRpdjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkSGVhZGVyKCkge1xyXG4gICAgbGV0IGhlYWRlciA9IGJ1aWxkRWxlbWVudCgnZGl2JywgJ2hlYWRlcicsICcnKTtcclxuICAgIGxldCBsb2dvID0gYnVpbGRFbGVtZW50KCdkaXYnLCAnbG9nbycsICcnKTtcclxuICAgIGxldCBsb2dvSW1hZ2UgPSBidWlsZEVsZW1lbnQoJ2ltZycsICcnLCAnJyk7XHJcbiAgICBsZXQgbG9nb1RleHQgPSBidWlsZEVsZW1lbnQoJ2RpdicsICcnLCAnbG9nby10ZXh0Jyk7XHJcblxyXG4gICAgbG9nb1RleHQudGV4dENvbnRlbnQgPSAnQW5kZWV6IERvbnV0cyc7XHJcbiAgICBsb2dvSW1hZ2Uuc3JjID0gZG9udXQ7XHJcblxyXG4gICAgbG9nby5hcHBlbmRDaGlsZChsb2dvSW1hZ2UpO1xyXG4gICAgbG9nby5hcHBlbmRDaGlsZChsb2dvVGV4dCk7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nbyk7XHJcblxyXG4gICAgcmV0dXJuIGhlYWRlcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTmF2KCkge1xyXG4gICAgbGV0IG5hdkJhciA9IGJ1aWxkRWxlbWVudCgnZGl2JywgJ3RvcC1uYXYnLCAnJyk7XHJcblxyXG4gICAgbGV0IHBhZ2VzID0ge1xyXG4gICAgICAgICdBYm91dCc6IGFib3V0LFxyXG4gICAgICAgICdDb250YWN0JzogY29udGFjdCxcclxuICAgICAgICAnTWVudSc6IG1lbnUsXHJcbiAgICB9O1xyXG5cclxuICAgIG5hdkJhci5hcHBlbmRDaGlsZChtb2JpbGUoKSk7XHJcblxyXG4gICAgbGV0IG5hdkxpbmtzID0gYnVpbGRFbGVtZW50KCdkaXYnLCAnbmF2LWxpbmtzJywgJycpO1xyXG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKG5hdkxpbmtzKTtcclxuXHJcbiAgICBPYmplY3Qua2V5cyhwYWdlcykuZm9yRWFjaCgocGFnZSkgPT4ge1xyXG4gICAgICAgIG5hdkxpbmtzLmFwcGVuZENoaWxkKGNyZWF0ZUJ1dHRvbihwYWdlLCBwYWdlc1twYWdlXSkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIG5hdkJhcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZXMgYWxsIG9mIHRoZSBjaGlsZCBlbGVtZW50cyB3aXRoaW4gdGhlIGVsZW1lbnRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGVhckVsZW1lbnQoKSB7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgYnV0dG9uIGVsZW1lbnQgd2l0aCBhbiBldmVudGxpc3RlbmVyIHRoYXQgZXhlY3V0ZXMgdGhlIGFjdGlvblxyXG4gKiBwYXJhbWV0ZXJcclxuICogQHBhcmFtIG5hbWUgLSBidXR0b24gdGV4dCBhbmQgdGl0bGVcclxuICogQHBhcmFtIGFjdGlvbiAtIGEgZnVuY3Rpb25cclxuICogQHJldHVybnMgYnV0dG9uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQnV0dG9uKG5hbWUsIGFjdGlvbikge1xyXG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCduYXYnKTtcclxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgICBidXR0b24udGl0bGUgPSBuYW1lO1xyXG4gICAgYnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcclxuXHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgLyogSWYgYnV0dG9uIGNvbnRhaW5zIGEgY2xhc3MgaW5kaWNhdGluZyB0aGF0IGl0IGlzIHRoZSBhY3RpdmUgcGFnZSwgdGhlbiBkbyBub3RoaW5nICovXHJcbiAgICAgICAgYWN0aW9uKCk7XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBidXR0b247XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaWxsV2l0aExvcmVtKCkge1xyXG4gICAgbGV0IHN0dWZmID0gYnVpbGRFbGVtZW50KCdkaXYnLCAnc3R1ZmYnLCAnJyk7XHJcblxyXG4gICAgbGV0IHBhcmFncmFwaHMgPSBbXHJcbiAgICAgICAgJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBTaXQgYW1ldCBwb3J0dGl0b3IgZWdldCBkb2xvciBtb3JiaSBub24gYXJjdSByaXN1cy4gVml0YWUgdHVycGlzIG1hc3NhIHNlZCBlbGVtZW50dW0gdGVtcHVzLiBUb3J0b3IgaWQgYWxpcXVldCBsZWN0dXMgcHJvaW4gbmliaCBuaXNsIGNvbmRpbWVudHVtIGlkLiBUdXJwaXMgdGluY2lkdW50IGlkIGFsaXF1ZXQgcmlzdXMuIFBhcnR1cmllbnQgbW9udGVzIG5hc2NldHVyIHJpZGljdWx1cyBtdXMgbWF1cmlzIHZpdGFlIHVsdHJpY2llcyBsZW8gaW50ZWdlci4gTmVxdWUgZ3JhdmlkYSBpbiBmZXJtZW50dW0gZXQgc29sbGljaXR1ZGluLiBDb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQgZHVpcyB0cmlzdGlxdWUgc29sbGljaXR1ZGluIG5pYmggc2l0LiBDb25zZXF1YXQgaWQgcG9ydGEgbmliaCB2ZW5lbmF0aXMuIFZpdGFlIGV0IGxlbyBkdWlzIHV0IGRpYW0gcXVhbSBudWxsYS4gTmliaCBuaXNsIGNvbmRpbWVudHVtIGlkIHZlbmVuYXRpcyBhIGNvbmRpbWVudHVtIHZpdGFlLiBBbWV0IGx1Y3R1cyB2ZW5lbmF0aXMgbGVjdHVzIG1hZ25hIGZyaW5naWxsYSB1cm5hIHBvcnR0aXRvciByaG9uY3VzIGRvbG9yLiBBdCBhdWN0b3IgdXJuYSBudW5jIGlkIGN1cnN1cyBtZXR1cyBhbGlxdWFtLiBVcm5hIGNvbmRpbWVudHVtIG1hdHRpcyBwZWxsZW50ZXNxdWUgaWQgbmliaCB0b3J0b3IgaWQgYWxpcXVldCBsZWN0dXMuJyxcclxuXHJcbiAgICAgICAgJ0RpYW0gbWFlY2VuYXMgdWx0cmljaWVzIG1pIGVnZXQgbWF1cmlzIHBoYXJldHJhIGV0IHVsdHJpY2VzLiBBYyB0b3J0b3IgZGlnbmlzc2ltIGNvbnZhbGxpcyBhZW5lYW4gZXQgdG9ydG9yLiBNb2xlc3RpZSBhdCBlbGVtZW50dW0gZXUgZmFjaWxpc2lzIHNlZCBvZGlvIG1vcmJpIHF1aXMgY29tbW9kby4gVml0YWUgdWx0cmljaWVzIGxlbyBpbnRlZ2VyIG1hbGVzdWFkYSBudW5jIHZlbCByaXN1cyBjb21tb2RvLiBJZCBkaWFtIG1hZWNlbmFzIHVsdHJpY2llcyBtaSBlZ2V0LiBMZW8gaW4gdml0YWUgdHVycGlzIG1hc3NhLiBBbWV0IGx1Y3R1cyB2ZW5lbmF0aXMgbGVjdHVzIG1hZ25hIGZyaW5naWxsYS4gQmxhbmRpdCBjdXJzdXMgcmlzdXMgYXQgdWx0cmljZXMgbWkuIFNlbXBlciByaXN1cyBpbiBoZW5kcmVyaXQgZ3JhdmlkYSBydXRydW0uIEZhdWNpYnVzIGEgcGVsbGVudGVzcXVlIHNpdCBhbWV0IHBvcnR0aXRvciBlZ2V0LiBQb3J0YSBsb3JlbSBtb2xsaXMgYWxpcXVhbSB1dCBwb3J0dGl0b3IgbGVvIGEuIE9yY2kgYWMgYXVjdG9yIGF1Z3VlIG1hdXJpcy4gVXQgYWxpcXVhbSBwdXJ1cyBzaXQgYW1ldCBsdWN0dXMgdmVuZW5hdGlzIGxlY3R1cyBtYWduYS4gVGluY2lkdW50IG9ybmFyZSBtYXNzYSBlZ2V0IGVnZXN0YXMgcHVydXMgdml2ZXJyYSBhY2N1bXNhbiBpbi4nLFxyXG5cclxuICAgICAgICAnTnVuYyB2ZWwgcmlzdXMgY29tbW9kbyB2aXZlcnJhLiBJcHN1bSBzdXNwZW5kaXNzZSB1bHRyaWNlcyBncmF2aWRhIGRpY3R1bSBmdXNjZSB1dC4gUG90ZW50aSBudWxsYW0gYWMgdG9ydG9yIHZpdGFlIHB1cnVzIGZhdWNpYnVzIG9ybmFyZSBzdXNwZW5kaXNzZSBzZWQuIE51bGxhIGFsaXF1ZXQgZW5pbSB0b3J0b3IgYXQgYXVjdG9yLiBVdCB0cmlzdGlxdWUgZXQgZWdlc3RhcyBxdWlzIGlwc3VtLiBBY2N1bXNhbiBzaXQgYW1ldCBudWxsYSBmYWNpbGlzaSBtb3JiaSB0ZW1wdXMgaWFjdWxpcyB1cm5hIGlkLiBGcmluZ2lsbGEgcGhhc2VsbHVzIGZhdWNpYnVzIHNjZWxlcmlzcXVlIGVsZWlmZW5kIGRvbmVjIHByZXRpdW0gdnVscHV0YXRlIHNhcGllbi4gU2VtcGVyIHZpdmVycmEgbmFtIGxpYmVybyBqdXN0byBsYW9yZWV0IHNpdC4gU2VtIG51bGxhIHBoYXJldHJhIGRpYW0gc2l0IGFtZXQgbmlzbCBzdXNjaXBpdCBhZGlwaXNjaW5nIGJpYmVuZHVtLiBTZWQgdWxsYW1jb3JwZXIgbW9yYmkgdGluY2lkdW50IG9ybmFyZSBtYXNzYSBlZ2V0IGVnZXN0YXMuIEZhbWVzIGFjIHR1cnBpcyBlZ2VzdGFzIG1hZWNlbmFzIHBoYXJldHJhIGNvbnZhbGxpcy4nLFxyXG5cclxuICAgICAgICAnTmVxdWUgY29udmFsbGlzIGEgY3JhcyBzZW1wZXIgYXVjdG9yLiBWdWxwdXRhdGUgZXUgc2NlbGVyaXNxdWUgZmVsaXMgaW1wZXJkaWV0IHByb2luLiBCaWJlbmR1bSBlbmltIGZhY2lsaXNpcyBncmF2aWRhIG5lcXVlIGNvbnZhbGxpcyBhIGNyYXMuIExlY3R1cyB1cm5hIGR1aXMgY29udmFsbGlzIGNvbnZhbGxpcyB0ZWxsdXMgaWQgaW50ZXJkdW0gdmVsaXQgbGFvcmVldC4gRW5pbSBmYWNpbGlzaXMgZ3JhdmlkYSBuZXF1ZSBjb252YWxsaXMuIE1pIHByb2luIHNlZCBsaWJlcm8gZW5pbSBzZWQgZmF1Y2lidXMgdHVycGlzIGluLiBVcm5hIG5lYyB0aW5jaWR1bnQgcHJhZXNlbnQgc2VtcGVyIGZldWdpYXQgbmliaC4gVGVtcHVzIGVnZXN0YXMgc2VkIHNlZCByaXN1cy4gSGFjIGhhYml0YXNzZSBwbGF0ZWEgZGljdHVtc3QgcXVpc3F1ZS4gTW9yYmkgdHJpc3RpcXVlIHNlbmVjdHVzIGV0IG5ldHVzIGV0LiBTZW1wZXIgZWdldCBkdWlzIGF0IHRlbGx1cyBhdCB1cm5hIGNvbmRpbWVudHVtIG1hdHRpcy4nLFxyXG5cclxuICAgICAgICAnVWx0cmljZXMgdGluY2lkdW50IGFyY3Ugbm9uIHNvZGFsZXMgbmVxdWUgc29kYWxlcyB1dCBldGlhbS4gUXVpcyBpcHN1bSBzdXNwZW5kaXNzZSB1bHRyaWNlcyBncmF2aWRhIGRpY3R1bSBmdXNjZSB1dC4gSW1wZXJkaWV0IG51bGxhIG1hbGVzdWFkYSBwZWxsZW50ZXNxdWUgZWxpdCBlZ2V0IGdyYXZpZGEuIER1aSBzYXBpZW4gZWdldCBtaSBwcm9pbiBzZWQgbGliZXJvIGVuaW0uIFZvbHV0cGF0IG9kaW8gZmFjaWxpc2lzIG1hdXJpcyBzaXQgYW1ldCBtYXNzYS4gTWFzc2Egc2FwaWVuIGZhdWNpYnVzIGV0IG1vbGVzdGllIGFjLiBQdWx2aW5hciBlbGVtZW50dW0gaW50ZWdlciBlbmltIG5lcXVlIHZvbHV0cGF0IGFjLiBTaXQgYW1ldCByaXN1cyBudWxsYW0gZWdldCBmZWxpcyBlZ2V0IG51bmMgbG9ib3J0aXMgbWF0dGlzLiBFZ2V0IG1pIHByb2luIHNlZCBsaWJlcm8gZW5pbSBzZWQgZmF1Y2lidXMgdHVycGlzIGluLiBGYWNpbGlzaXMgbGVvIHZlbCBmcmluZ2lsbGEgZXN0IHVsbGFtY29ycGVyIGVnZXQgbnVsbGEuIEZyaW5naWxsYSB1cm5hIHBvcnR0aXRvciByaG9uY3VzIGRvbG9yLiBQdXJ1cyB1dCBmYXVjaWJ1cyBwdWx2aW5hciBlbGVtZW50dW0gaW50ZWdlci4gVG9ydG9yIGRpZ25pc3NpbSBjb252YWxsaXMgYWVuZWFuIGV0IHRvcnRvciBhdCByaXN1cy4gUXVpcyBsZWN0dXMgbnVsbGEgYXQgdm9sdXRwYXQgZGlhbSB1dCB2ZW5lbmF0aXMgdGVsbHVzIGluLiBOb24gYXJjdSByaXN1cyBxdWlzIHZhcml1cyBxdWFtLidcclxuICAgIF07XHJcblxyXG4gICAgcGFyYWdyYXBocy5mb3JFYWNoKHdvcmRzID0+IHtcclxuICAgICAgICBsZXQgcGFyYWdyYXBoID0gYnVpbGRFbGVtZW50KCdwJywgJycsICcnKTtcclxuICAgICAgICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSB3b3JkcztcclxuICAgICAgICBzdHVmZi5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHN0dWZmO1xyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/accessories.js\n");

/***/ }),

/***/ "./src/scripts/mobile.js":
/*!*******************************!*\
  !*** ./src/scripts/mobile.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ buildMobileNavBurger)\n/* harmony export */ });\nfunction buildMobileNavBurger() {\r\n    let mobileHamburger = buildElement('button', 'navBurger', 'hamburger', 'hamburger--squeeze');\r\n\r\n    mobileHamburger.addEventListener('click', () => {\r\n        mobileHamburger.classList.toggle('is-active');\r\n    })\r\n\r\n    mobileHamburger.type = 'button';\r\n    let hamburgerBox = buildElement('span', '', 'hamburger-box');\r\n    let hamburgerInner = buildElement('span', '', 'hamburger-inner');\r\n\r\n    hamburgerBox.appendChild(hamburgerInner);\r\n    mobileHamburger.appendChild(hamburgerBox);\r\n\r\n    return mobileHamburger;\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tb2JpbGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc2NyaXB0cy9tb2JpbGUuanM/YjE0NSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1vYmlsZU5hdkJ1cmdlcigpIHtcclxuICAgIGxldCBtb2JpbGVIYW1idXJnZXIgPSBidWlsZEVsZW1lbnQoJ2J1dHRvbicsICduYXZCdXJnZXInLCAnaGFtYnVyZ2VyJywgJ2hhbWJ1cmdlci0tc3F1ZWV6ZScpO1xyXG5cclxuICAgIG1vYmlsZUhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBtb2JpbGVIYW1idXJnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XHJcbiAgICB9KVxyXG5cclxuICAgIG1vYmlsZUhhbWJ1cmdlci50eXBlID0gJ2J1dHRvbic7XHJcbiAgICBsZXQgaGFtYnVyZ2VyQm94ID0gYnVpbGRFbGVtZW50KCdzcGFuJywgJycsICdoYW1idXJnZXItYm94Jyk7XHJcbiAgICBsZXQgaGFtYnVyZ2VySW5uZXIgPSBidWlsZEVsZW1lbnQoJ3NwYW4nLCAnJywgJ2hhbWJ1cmdlci1pbm5lcicpO1xyXG5cclxuICAgIGhhbWJ1cmdlckJveC5hcHBlbmRDaGlsZChoYW1idXJnZXJJbm5lcik7XHJcbiAgICBtb2JpbGVIYW1idXJnZXIuYXBwZW5kQ2hpbGQoaGFtYnVyZ2VyQm94KTtcclxuXHJcbiAgICByZXR1cm4gbW9iaWxlSGFtYnVyZ2VyO1xyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/mobile.js\n");

/***/ }),

/***/ "./src/scripts/pages/about.js":
/*!************************************!*\
  !*** ./src/scripts/pages/about.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * Generate about page content\r\n */\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\r\n    console.log('about');\r\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wYWdlcy9hYm91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZTtBQUNmO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc2NyaXB0cy9wYWdlcy9hYm91dC5qcz84NjAwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBHZW5lcmF0ZSBhYm91dCBwYWdlIGNvbnRlbnRcclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnYWJvdXQnKTtcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/pages/about.js\n");

/***/ }),

/***/ "./src/scripts/pages/contact.js":
/*!**************************************!*\
  !*** ./src/scripts/pages/contact.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * Generate contact page content\r\n */\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\r\n    let contact = document.createElement('div');\r\n    contact.classList.add('contact');\r\n    \r\n    let header = document.createElement('div');\r\n    header.textContent = 'Contact Us';\r\n    \r\n    let information = {\r\n        /* Address: '805 Manchester Ave, Inglewood, CA 90301',\r\n        Phone: '(310) 645-4707'\r\n        Email: info@randysdonuts.com */\r\n    }\r\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wYWdlcy9jb250YWN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3NjcmlwdHMvcGFnZXMvY29udGFjdC5qcz82MDExIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBHZW5lcmF0ZSBjb250YWN0IHBhZ2UgY29udGVudFxyXG4gKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcclxuICAgIGxldCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTtcclxuICAgIFxyXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ0NvbnRhY3QgVXMnO1xyXG4gICAgXHJcbiAgICBsZXQgaW5mb3JtYXRpb24gPSB7XHJcbiAgICAgICAgLyogQWRkcmVzczogJzgwNSBNYW5jaGVzdGVyIEF2ZSwgSW5nbGV3b29kLCBDQSA5MDMwMScsXHJcbiAgICAgICAgUGhvbmU6ICcoMzEwKSA2NDUtNDcwNydcclxuICAgICAgICBFbWFpbDogaW5mb0ByYW5keXNkb251dHMuY29tICovXHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/pages/contact.js\n");

/***/ }),

/***/ "./src/scripts/pages/menu.js":
/*!***********************************!*\
  !*** ./src/scripts/pages/menu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * Generate menu page content\r\n */\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\r\n    console.log('menu');\r\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wYWdlcy9tZW51LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlO0FBQ2Y7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zY3JpcHRzL3BhZ2VzL21lbnUuanM/N2Q5MSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogR2VuZXJhdGUgbWVudSBwYWdlIGNvbnRlbnRcclxuICovXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnbWVudScpO1xyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/pages/menu.js\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/accessories.js");
/******/ 	
/******/ })()
;