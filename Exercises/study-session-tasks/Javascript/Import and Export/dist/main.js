(()=>{"use strict";var o={276:()=>{},225:(o,e,t)=>{var r=t(930),s=t(668);console.log("support:"),(0,r.H)(),console.log("other_support:"),(0,s.X)().mod_func()},668:(o,e,t)=>{t.d(e,{X:()=>r});let r=()=>Object.assign({},{mod_func:()=>{console.log("This is the text from the module_object")}})},930:(o,e,t)=>{t.d(e,{H:()=>r});let r=()=>{console.log("This is my_module.")}}},e={};function t(r){var s=e[r];if(void 0!==s)return s.exports;var l=e[r]={exports:{}};return o[r](l,l.exports,t),l.exports}t.d=(o,e)=>{for(var r in e)t.o(e,r)&&!t.o(o,r)&&Object.defineProperty(o,r,{enumerable:!0,get:e[r]})},t.o=(o,e)=>Object.prototype.hasOwnProperty.call(o,e),t(225),t(276),t(930),t(668)})();