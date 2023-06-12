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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildElement: () => (/* binding */ buildElement),\n/* harmony export */   buildHeader: () => (/* binding */ buildHeader),\n/* harmony export */   buildNav: () => (/* binding */ buildNav),\n/* harmony export */   clearElement: () => (/* binding */ clearElement),\n/* harmony export */   createButton: () => (/* binding */ createButton),\n/* harmony export */   fillWithLorem: () => (/* binding */ fillWithLorem)\n/* harmony export */ });\n/* harmony import */ var _pages_about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/about */ \"./src/scripts/pages/about.js\");\n/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/contact */ \"./src/scripts/pages/contact.js\");\n/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/menu */ \"./src/scripts/pages/menu.js\");\n/* harmony import */ var _style_media_donut_cropped_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/media/donut-cropped.svg */ \"./src/style/media/donut-cropped.svg\");\n/* harmony import */ var _mobile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mobile */ \"./src/scripts/mobile.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n/**\r\n * Returns a div with specified class(es)\r\n * @param type - element type\r\n * @param id - ID\r\n * @param classes - takes one or more class names eg. 'class1' || 'class1', 'class2', ...\r\n * @returns div\r\n */\r\nfunction buildElement(type, id, ...classes) {\r\n    let div = document.createElement(type);\r\n\r\n    if (id != '') {\r\n        div.id = id;\r\n    }\r\n\r\n    if (classes != '') {\r\n        div.classList.add(...classes);\r\n    }\r\n\r\n    return div;\r\n}\r\n\r\nfunction buildHeader() {\r\n    let header = buildElement('div', 'header', '');\r\n    let logo = buildElement('div', 'logo', '');\r\n    let logoImage = buildElement('img', '', '');\r\n    let logoText = buildElement('div', '', 'logo-text');\r\n\r\n    logoText.textContent = 'Andeez Donuts';\r\n    logoImage.src = _style_media_donut_cropped_svg__WEBPACK_IMPORTED_MODULE_3__;\r\n\r\n    logo.appendChild(logoImage);\r\n    logo.appendChild(logoText);\r\n    header.appendChild(logo);\r\n\r\n    return header;\r\n}\r\n\r\n/**\r\n * Additional pages can be added by adding a key/pair value into the \"pages\" object initializer\r\n * @returns navBar element containing navigation links\r\n */\r\nfunction buildNav() {\r\n    let navBar = buildElement('div', 'top-nav', '');\r\n\r\n    let pages = {\r\n        'About': _pages_about__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n        'Menu': _pages_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\r\n        'Contact': _pages_contact__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n    };\r\n    console.log((0,_mobile__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\r\n    navBar.appendChild((0,_mobile__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\r\n\r\n    let navLinks = buildElement('div', 'nav-links', '');\r\n    navBar.appendChild(navLinks);\r\n\r\n    Object.keys(pages).forEach((page) => {\r\n        navLinks.appendChild(createButton(page, pages[page]));\r\n    });\r\n\r\n    return navBar;\r\n}\r\n\r\n/**\r\n * Removes all of the child elements within the element\r\n */\r\nfunction clearElement() {\r\n}\r\n\r\n/**\r\n * Returns a button element with an eventlistener that executes the action\r\n * parameter\r\n * @param name - button text and title\r\n * @param action - a function\r\n * @returns button\r\n */\r\nfunction createButton(name, action) {\r\n    let button = document.createElement('button');\r\n\r\n    button.classList.add('nav');\r\n    button.textContent = name;\r\n    button.title = name;\r\n    button.type = 'button';\r\n\r\n    button.addEventListener('click', () => {\r\n        /* If button contains a class indicating that it is the active page, then do nothing */\r\n        action();\r\n    })\r\n\r\n    return button;\r\n}\r\n\r\nfunction fillWithLorem() {\r\n    let stuff = buildElement('div', 'stuff', '');\r\n\r\n    let paragraphs = [\r\n        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet porttitor eget dolor morbi non arcu risus. Vitae turpis massa sed elementum tempus. Tortor id aliquet lectus proin nibh nisl condimentum id. Turpis tincidunt id aliquet risus. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer. Neque gravida in fermentum et sollicitudin. Consectetur adipiscing elit duis tristique sollicitudin nibh sit. Consequat id porta nibh venenatis. Vitae et leo duis ut diam quam nulla. Nibh nisl condimentum id venenatis a condimentum vitae. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. At auctor urna nunc id cursus metus aliquam. Urna condimentum mattis pellentesque id nibh tortor id aliquet lectus.',\r\n\r\n        'Diam maecenas ultricies mi eget mauris pharetra et ultrices. Ac tortor dignissim convallis aenean et tortor. Molestie at elementum eu facilisis sed odio morbi quis commodo. Vitae ultricies leo integer malesuada nunc vel risus commodo. Id diam maecenas ultricies mi eget. Leo in vitae turpis massa. Amet luctus venenatis lectus magna fringilla. Blandit cursus risus at ultrices mi. Semper risus in hendrerit gravida rutrum. Faucibus a pellentesque sit amet porttitor eget. Porta lorem mollis aliquam ut porttitor leo a. Orci ac auctor augue mauris. Ut aliquam purus sit amet luctus venenatis lectus magna. Tincidunt ornare massa eget egestas purus viverra accumsan in.',\r\n\r\n        'Nunc vel risus commodo viverra. Ipsum suspendisse ultrices gravida dictum fusce ut. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed. Nulla aliquet enim tortor at auctor. Ut tristique et egestas quis ipsum. Accumsan sit amet nulla facilisi morbi tempus iaculis urna id. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Semper viverra nam libero justo laoreet sit. Sem nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Sed ullamcorper morbi tincidunt ornare massa eget egestas. Fames ac turpis egestas maecenas pharetra convallis.',\r\n\r\n        'Neque convallis a cras semper auctor. Vulputate eu scelerisque felis imperdiet proin. Bibendum enim facilisis gravida neque convallis a cras. Lectus urna duis convallis convallis tellus id interdum velit laoreet. Enim facilisis gravida neque convallis. Mi proin sed libero enim sed faucibus turpis in. Urna nec tincidunt praesent semper feugiat nibh. Tempus egestas sed sed risus. Hac habitasse platea dictumst quisque. Morbi tristique senectus et netus et. Semper eget duis at tellus at urna condimentum mattis.',\r\n\r\n        'Ultrices tincidunt arcu non sodales neque sodales ut etiam. Quis ipsum suspendisse ultrices gravida dictum fusce ut. Imperdiet nulla malesuada pellentesque elit eget gravida. Dui sapien eget mi proin sed libero enim. Volutpat odio facilisis mauris sit amet massa. Massa sapien faucibus et molestie ac. Pulvinar elementum integer enim neque volutpat ac. Sit amet risus nullam eget felis eget nunc lobortis mattis. Eget mi proin sed libero enim sed faucibus turpis in. Facilisis leo vel fringilla est ullamcorper eget nulla. Fringilla urna porttitor rhoncus dolor. Purus ut faucibus pulvinar elementum integer. Tortor dignissim convallis aenean et tortor at risus. Quis lectus nulla at volutpat diam ut venenatis tellus in. Non arcu risus quis varius quam.'\r\n    ];\r\n\r\n    paragraphs.forEach(words => {\r\n        let paragraph = buildElement('p', '', '');\r\n        paragraph.textContent = words;\r\n        stuff.appendChild(paragraph);\r\n    });\r\n\r\n    return stuff;\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9hY2Nlc3Nvcmllcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFrQztBQUNJO0FBQ047QUFDcUI7QUFDdkI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwyREFBSztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixvREFBSztBQUN0QixnQkFBZ0IsbURBQUk7QUFDcEIsbUJBQW1CLHNEQUFPO0FBQzFCO0FBQ0EsZ0JBQWdCLG1EQUFNO0FBQ3RCLHVCQUF1QixtREFBTTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc2NyaXB0cy9hY2Nlc3Nvcmllcy5qcz80ZTg2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhYm91dCBmcm9tICcuL3BhZ2VzL2Fib3V0JztcclxuaW1wb3J0IGNvbnRhY3QgZnJvbSAnLi9wYWdlcy9jb250YWN0JztcclxuaW1wb3J0IG1lbnUgZnJvbSAnLi9wYWdlcy9tZW51JztcclxuaW1wb3J0IGRvbnV0IGZyb20gJy4uL3N0eWxlL21lZGlhL2RvbnV0LWNyb3BwZWQuc3ZnJztcclxuaW1wb3J0IG1vYmlsZSBmcm9tICcuL21vYmlsZSc7XHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIGRpdiB3aXRoIHNwZWNpZmllZCBjbGFzcyhlcylcclxuICogQHBhcmFtIHR5cGUgLSBlbGVtZW50IHR5cGVcclxuICogQHBhcmFtIGlkIC0gSURcclxuICogQHBhcmFtIGNsYXNzZXMgLSB0YWtlcyBvbmUgb3IgbW9yZSBjbGFzcyBuYW1lcyBlZy4gJ2NsYXNzMScgfHwgJ2NsYXNzMScsICdjbGFzczInLCAuLi5cclxuICogQHJldHVybnMgZGl2XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRFbGVtZW50KHR5cGUsIGlkLCAuLi5jbGFzc2VzKSB7XHJcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcclxuXHJcbiAgICBpZiAoaWQgIT0gJycpIHtcclxuICAgICAgICBkaXYuaWQgPSBpZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2xhc3NlcyAhPSAnJykge1xyXG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkaXY7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBidWlsZEhlYWRlcigpIHtcclxuICAgIGxldCBoZWFkZXIgPSBidWlsZEVsZW1lbnQoJ2RpdicsICdoZWFkZXInLCAnJyk7XHJcbiAgICBsZXQgbG9nbyA9IGJ1aWxkRWxlbWVudCgnZGl2JywgJ2xvZ28nLCAnJyk7XHJcbiAgICBsZXQgbG9nb0ltYWdlID0gYnVpbGRFbGVtZW50KCdpbWcnLCAnJywgJycpO1xyXG4gICAgbGV0IGxvZ29UZXh0ID0gYnVpbGRFbGVtZW50KCdkaXYnLCAnJywgJ2xvZ28tdGV4dCcpO1xyXG5cclxuICAgIGxvZ29UZXh0LnRleHRDb250ZW50ID0gJ0FuZGVleiBEb251dHMnO1xyXG4gICAgbG9nb0ltYWdlLnNyYyA9IGRvbnV0O1xyXG5cclxuICAgIGxvZ28uYXBwZW5kQ2hpbGQobG9nb0ltYWdlKTtcclxuICAgIGxvZ28uYXBwZW5kQ2hpbGQobG9nb1RleHQpO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ28pO1xyXG5cclxuICAgIHJldHVybiBoZWFkZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGRpdGlvbmFsIHBhZ2VzIGNhbiBiZSBhZGRlZCBieSBhZGRpbmcgYSBrZXkvcGFpciB2YWx1ZSBpbnRvIHRoZSBcInBhZ2VzXCIgb2JqZWN0IGluaXRpYWxpemVyXHJcbiAqIEByZXR1cm5zIG5hdkJhciBlbGVtZW50IGNvbnRhaW5pbmcgbmF2aWdhdGlvbiBsaW5rc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTmF2KCkge1xyXG4gICAgbGV0IG5hdkJhciA9IGJ1aWxkRWxlbWVudCgnZGl2JywgJ3RvcC1uYXYnLCAnJyk7XHJcblxyXG4gICAgbGV0IHBhZ2VzID0ge1xyXG4gICAgICAgICdBYm91dCc6IGFib3V0LFxyXG4gICAgICAgICdNZW51JzogbWVudSxcclxuICAgICAgICAnQ29udGFjdCc6IGNvbnRhY3QsXHJcbiAgICB9O1xyXG4gICAgY29uc29sZS5sb2cobW9iaWxlKCkpO1xyXG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKG1vYmlsZSgpKTtcclxuXHJcbiAgICBsZXQgbmF2TGlua3MgPSBidWlsZEVsZW1lbnQoJ2RpdicsICduYXYtbGlua3MnLCAnJyk7XHJcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQobmF2TGlua3MpO1xyXG5cclxuICAgIE9iamVjdC5rZXlzKHBhZ2VzKS5mb3JFYWNoKChwYWdlKSA9PiB7XHJcbiAgICAgICAgbmF2TGlua3MuYXBwZW5kQ2hpbGQoY3JlYXRlQnV0dG9uKHBhZ2UsIHBhZ2VzW3BhZ2VdKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gbmF2QmFyO1xyXG59XHJcblxyXG4vKipcclxuICogUmVtb3ZlcyBhbGwgb2YgdGhlIGNoaWxkIGVsZW1lbnRzIHdpdGhpbiB0aGUgZWxlbWVudFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyRWxlbWVudCgpIHtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBidXR0b24gZWxlbWVudCB3aXRoIGFuIGV2ZW50bGlzdGVuZXIgdGhhdCBleGVjdXRlcyB0aGUgYWN0aW9uXHJcbiAqIHBhcmFtZXRlclxyXG4gKiBAcGFyYW0gbmFtZSAtIGJ1dHRvbiB0ZXh0IGFuZCB0aXRsZVxyXG4gKiBAcGFyYW0gYWN0aW9uIC0gYSBmdW5jdGlvblxyXG4gKiBAcmV0dXJucyBidXR0b25cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCdXR0b24obmFtZSwgYWN0aW9uKSB7XHJcbiAgICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcblxyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25hdicpO1xyXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgIGJ1dHRvbi50aXRsZSA9IG5hbWU7XHJcbiAgICBidXR0b24udHlwZSA9ICdidXR0b24nO1xyXG5cclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAvKiBJZiBidXR0b24gY29udGFpbnMgYSBjbGFzcyBpbmRpY2F0aW5nIHRoYXQgaXQgaXMgdGhlIGFjdGl2ZSBwYWdlLCB0aGVuIGRvIG5vdGhpbmcgKi9cclxuICAgICAgICBhY3Rpb24oKTtcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIGJ1dHRvbjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbGxXaXRoTG9yZW0oKSB7XHJcbiAgICBsZXQgc3R1ZmYgPSBidWlsZEVsZW1lbnQoJ2RpdicsICdzdHVmZicsICcnKTtcclxuXHJcbiAgICBsZXQgcGFyYWdyYXBocyA9IFtcclxuICAgICAgICAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFNpdCBhbWV0IHBvcnR0aXRvciBlZ2V0IGRvbG9yIG1vcmJpIG5vbiBhcmN1IHJpc3VzLiBWaXRhZSB0dXJwaXMgbWFzc2Egc2VkIGVsZW1lbnR1bSB0ZW1wdXMuIFRvcnRvciBpZCBhbGlxdWV0IGxlY3R1cyBwcm9pbiBuaWJoIG5pc2wgY29uZGltZW50dW0gaWQuIFR1cnBpcyB0aW5jaWR1bnQgaWQgYWxpcXVldCByaXN1cy4gUGFydHVyaWVudCBtb250ZXMgbmFzY2V0dXIgcmlkaWN1bHVzIG11cyBtYXVyaXMgdml0YWUgdWx0cmljaWVzIGxlbyBpbnRlZ2VyLiBOZXF1ZSBncmF2aWRhIGluIGZlcm1lbnR1bSBldCBzb2xsaWNpdHVkaW4uIENvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCBkdWlzIHRyaXN0aXF1ZSBzb2xsaWNpdHVkaW4gbmliaCBzaXQuIENvbnNlcXVhdCBpZCBwb3J0YSBuaWJoIHZlbmVuYXRpcy4gVml0YWUgZXQgbGVvIGR1aXMgdXQgZGlhbSBxdWFtIG51bGxhLiBOaWJoIG5pc2wgY29uZGltZW50dW0gaWQgdmVuZW5hdGlzIGEgY29uZGltZW50dW0gdml0YWUuIEFtZXQgbHVjdHVzIHZlbmVuYXRpcyBsZWN0dXMgbWFnbmEgZnJpbmdpbGxhIHVybmEgcG9ydHRpdG9yIHJob25jdXMgZG9sb3IuIEF0IGF1Y3RvciB1cm5hIG51bmMgaWQgY3Vyc3VzIG1ldHVzIGFsaXF1YW0uIFVybmEgY29uZGltZW50dW0gbWF0dGlzIHBlbGxlbnRlc3F1ZSBpZCBuaWJoIHRvcnRvciBpZCBhbGlxdWV0IGxlY3R1cy4nLFxyXG5cclxuICAgICAgICAnRGlhbSBtYWVjZW5hcyB1bHRyaWNpZXMgbWkgZWdldCBtYXVyaXMgcGhhcmV0cmEgZXQgdWx0cmljZXMuIEFjIHRvcnRvciBkaWduaXNzaW0gY29udmFsbGlzIGFlbmVhbiBldCB0b3J0b3IuIE1vbGVzdGllIGF0IGVsZW1lbnR1bSBldSBmYWNpbGlzaXMgc2VkIG9kaW8gbW9yYmkgcXVpcyBjb21tb2RvLiBWaXRhZSB1bHRyaWNpZXMgbGVvIGludGVnZXIgbWFsZXN1YWRhIG51bmMgdmVsIHJpc3VzIGNvbW1vZG8uIElkIGRpYW0gbWFlY2VuYXMgdWx0cmljaWVzIG1pIGVnZXQuIExlbyBpbiB2aXRhZSB0dXJwaXMgbWFzc2EuIEFtZXQgbHVjdHVzIHZlbmVuYXRpcyBsZWN0dXMgbWFnbmEgZnJpbmdpbGxhLiBCbGFuZGl0IGN1cnN1cyByaXN1cyBhdCB1bHRyaWNlcyBtaS4gU2VtcGVyIHJpc3VzIGluIGhlbmRyZXJpdCBncmF2aWRhIHJ1dHJ1bS4gRmF1Y2lidXMgYSBwZWxsZW50ZXNxdWUgc2l0IGFtZXQgcG9ydHRpdG9yIGVnZXQuIFBvcnRhIGxvcmVtIG1vbGxpcyBhbGlxdWFtIHV0IHBvcnR0aXRvciBsZW8gYS4gT3JjaSBhYyBhdWN0b3IgYXVndWUgbWF1cmlzLiBVdCBhbGlxdWFtIHB1cnVzIHNpdCBhbWV0IGx1Y3R1cyB2ZW5lbmF0aXMgbGVjdHVzIG1hZ25hLiBUaW5jaWR1bnQgb3JuYXJlIG1hc3NhIGVnZXQgZWdlc3RhcyBwdXJ1cyB2aXZlcnJhIGFjY3Vtc2FuIGluLicsXHJcblxyXG4gICAgICAgICdOdW5jIHZlbCByaXN1cyBjb21tb2RvIHZpdmVycmEuIElwc3VtIHN1c3BlbmRpc3NlIHVsdHJpY2VzIGdyYXZpZGEgZGljdHVtIGZ1c2NlIHV0LiBQb3RlbnRpIG51bGxhbSBhYyB0b3J0b3Igdml0YWUgcHVydXMgZmF1Y2lidXMgb3JuYXJlIHN1c3BlbmRpc3NlIHNlZC4gTnVsbGEgYWxpcXVldCBlbmltIHRvcnRvciBhdCBhdWN0b3IuIFV0IHRyaXN0aXF1ZSBldCBlZ2VzdGFzIHF1aXMgaXBzdW0uIEFjY3Vtc2FuIHNpdCBhbWV0IG51bGxhIGZhY2lsaXNpIG1vcmJpIHRlbXB1cyBpYWN1bGlzIHVybmEgaWQuIEZyaW5naWxsYSBwaGFzZWxsdXMgZmF1Y2lidXMgc2NlbGVyaXNxdWUgZWxlaWZlbmQgZG9uZWMgcHJldGl1bSB2dWxwdXRhdGUgc2FwaWVuLiBTZW1wZXIgdml2ZXJyYSBuYW0gbGliZXJvIGp1c3RvIGxhb3JlZXQgc2l0LiBTZW0gbnVsbGEgcGhhcmV0cmEgZGlhbSBzaXQgYW1ldCBuaXNsIHN1c2NpcGl0IGFkaXBpc2NpbmcgYmliZW5kdW0uIFNlZCB1bGxhbWNvcnBlciBtb3JiaSB0aW5jaWR1bnQgb3JuYXJlIG1hc3NhIGVnZXQgZWdlc3Rhcy4gRmFtZXMgYWMgdHVycGlzIGVnZXN0YXMgbWFlY2VuYXMgcGhhcmV0cmEgY29udmFsbGlzLicsXHJcblxyXG4gICAgICAgICdOZXF1ZSBjb252YWxsaXMgYSBjcmFzIHNlbXBlciBhdWN0b3IuIFZ1bHB1dGF0ZSBldSBzY2VsZXJpc3F1ZSBmZWxpcyBpbXBlcmRpZXQgcHJvaW4uIEJpYmVuZHVtIGVuaW0gZmFjaWxpc2lzIGdyYXZpZGEgbmVxdWUgY29udmFsbGlzIGEgY3Jhcy4gTGVjdHVzIHVybmEgZHVpcyBjb252YWxsaXMgY29udmFsbGlzIHRlbGx1cyBpZCBpbnRlcmR1bSB2ZWxpdCBsYW9yZWV0LiBFbmltIGZhY2lsaXNpcyBncmF2aWRhIG5lcXVlIGNvbnZhbGxpcy4gTWkgcHJvaW4gc2VkIGxpYmVybyBlbmltIHNlZCBmYXVjaWJ1cyB0dXJwaXMgaW4uIFVybmEgbmVjIHRpbmNpZHVudCBwcmFlc2VudCBzZW1wZXIgZmV1Z2lhdCBuaWJoLiBUZW1wdXMgZWdlc3RhcyBzZWQgc2VkIHJpc3VzLiBIYWMgaGFiaXRhc3NlIHBsYXRlYSBkaWN0dW1zdCBxdWlzcXVlLiBNb3JiaSB0cmlzdGlxdWUgc2VuZWN0dXMgZXQgbmV0dXMgZXQuIFNlbXBlciBlZ2V0IGR1aXMgYXQgdGVsbHVzIGF0IHVybmEgY29uZGltZW50dW0gbWF0dGlzLicsXHJcblxyXG4gICAgICAgICdVbHRyaWNlcyB0aW5jaWR1bnQgYXJjdSBub24gc29kYWxlcyBuZXF1ZSBzb2RhbGVzIHV0IGV0aWFtLiBRdWlzIGlwc3VtIHN1c3BlbmRpc3NlIHVsdHJpY2VzIGdyYXZpZGEgZGljdHVtIGZ1c2NlIHV0LiBJbXBlcmRpZXQgbnVsbGEgbWFsZXN1YWRhIHBlbGxlbnRlc3F1ZSBlbGl0IGVnZXQgZ3JhdmlkYS4gRHVpIHNhcGllbiBlZ2V0IG1pIHByb2luIHNlZCBsaWJlcm8gZW5pbS4gVm9sdXRwYXQgb2RpbyBmYWNpbGlzaXMgbWF1cmlzIHNpdCBhbWV0IG1hc3NhLiBNYXNzYSBzYXBpZW4gZmF1Y2lidXMgZXQgbW9sZXN0aWUgYWMuIFB1bHZpbmFyIGVsZW1lbnR1bSBpbnRlZ2VyIGVuaW0gbmVxdWUgdm9sdXRwYXQgYWMuIFNpdCBhbWV0IHJpc3VzIG51bGxhbSBlZ2V0IGZlbGlzIGVnZXQgbnVuYyBsb2JvcnRpcyBtYXR0aXMuIEVnZXQgbWkgcHJvaW4gc2VkIGxpYmVybyBlbmltIHNlZCBmYXVjaWJ1cyB0dXJwaXMgaW4uIEZhY2lsaXNpcyBsZW8gdmVsIGZyaW5naWxsYSBlc3QgdWxsYW1jb3JwZXIgZWdldCBudWxsYS4gRnJpbmdpbGxhIHVybmEgcG9ydHRpdG9yIHJob25jdXMgZG9sb3IuIFB1cnVzIHV0IGZhdWNpYnVzIHB1bHZpbmFyIGVsZW1lbnR1bSBpbnRlZ2VyLiBUb3J0b3IgZGlnbmlzc2ltIGNvbnZhbGxpcyBhZW5lYW4gZXQgdG9ydG9yIGF0IHJpc3VzLiBRdWlzIGxlY3R1cyBudWxsYSBhdCB2b2x1dHBhdCBkaWFtIHV0IHZlbmVuYXRpcyB0ZWxsdXMgaW4uIE5vbiBhcmN1IHJpc3VzIHF1aXMgdmFyaXVzIHF1YW0uJ1xyXG4gICAgXTtcclxuXHJcbiAgICBwYXJhZ3JhcGhzLmZvckVhY2god29yZHMgPT4ge1xyXG4gICAgICAgIGxldCBwYXJhZ3JhcGggPSBidWlsZEVsZW1lbnQoJ3AnLCAnJywgJycpO1xyXG4gICAgICAgIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IHdvcmRzO1xyXG4gICAgICAgIHN0dWZmLmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gc3R1ZmY7XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/accessories.js\n");

/***/ }),

/***/ "./src/scripts/mobile.js":
/*!*******************************!*\
  !*** ./src/scripts/mobile.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ buildMobileNavBurger)\n/* harmony export */ });\n/* harmony import */ var _accessories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accessories */ \"./src/scripts/accessories.js\");\n\r\n\r\n/**\r\n * @returns mobileHamburger button that toggles the mobile navigation bar\r\n */\r\nfunction buildMobileNavBurger() {\r\n    let mobileHamburger = (0,_accessories__WEBPACK_IMPORTED_MODULE_0__.buildElement)('button', 'navBurger', 'hamburger', 'hamburger--squeeze');\r\n\r\n    mobileHamburger.addEventListener('click', () => {\r\n        mobileHamburger.classList.toggle('is-active');\r\n    })\r\n\r\n    mobileHamburger.type = 'button';\r\n    let hamburgerBox = (0,_accessories__WEBPACK_IMPORTED_MODULE_0__.buildElement)('span', '', 'hamburger-box');\r\n    let hamburgerInner = (0,_accessories__WEBPACK_IMPORTED_MODULE_0__.buildElement)('span', '', 'hamburger-inner');\r\n\r\n    hamburgerBox.appendChild(hamburgerInner);\r\n    mobileHamburger.appendChild(hamburgerBox);\r\n\r\n    return mobileHamburger;\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tb2JpbGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmLDBCQUEwQiwwREFBWTtBQUN0QztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHVCQUF1QiwwREFBWTtBQUNuQyx5QkFBeUIsMERBQVk7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3NjcmlwdHMvbW9iaWxlLmpzP2IxNDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYnVpbGRFbGVtZW50IH0gZnJvbSBcIi4vYWNjZXNzb3JpZXNcIjtcclxuXHJcbi8qKlxyXG4gKiBAcmV0dXJucyBtb2JpbGVIYW1idXJnZXIgYnV0dG9uIHRoYXQgdG9nZ2xlcyB0aGUgbW9iaWxlIG5hdmlnYXRpb24gYmFyXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1vYmlsZU5hdkJ1cmdlcigpIHtcclxuICAgIGxldCBtb2JpbGVIYW1idXJnZXIgPSBidWlsZEVsZW1lbnQoJ2J1dHRvbicsICduYXZCdXJnZXInLCAnaGFtYnVyZ2VyJywgJ2hhbWJ1cmdlci0tc3F1ZWV6ZScpO1xyXG5cclxuICAgIG1vYmlsZUhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBtb2JpbGVIYW1idXJnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XHJcbiAgICB9KVxyXG5cclxuICAgIG1vYmlsZUhhbWJ1cmdlci50eXBlID0gJ2J1dHRvbic7XHJcbiAgICBsZXQgaGFtYnVyZ2VyQm94ID0gYnVpbGRFbGVtZW50KCdzcGFuJywgJycsICdoYW1idXJnZXItYm94Jyk7XHJcbiAgICBsZXQgaGFtYnVyZ2VySW5uZXIgPSBidWlsZEVsZW1lbnQoJ3NwYW4nLCAnJywgJ2hhbWJ1cmdlci1pbm5lcicpO1xyXG5cclxuICAgIGhhbWJ1cmdlckJveC5hcHBlbmRDaGlsZChoYW1idXJnZXJJbm5lcik7XHJcbiAgICBtb2JpbGVIYW1idXJnZXIuYXBwZW5kQ2hpbGQoaGFtYnVyZ2VyQm94KTtcclxuXHJcbiAgICByZXR1cm4gbW9iaWxlSGFtYnVyZ2VyO1xyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/mobile.js\n");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/mobile.js");
/******/ 	
/******/ })()
;