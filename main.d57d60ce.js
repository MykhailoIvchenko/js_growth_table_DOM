parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e,t,r=document.querySelector(".append-row"),l=document.querySelector(".append-column"),d=document.querySelector(".remove-row"),n=document.querySelector(".remove-column"),o=document.querySelector(".field");function s(t,r){9===(e=t.rows.length)&&(r.target.disabled=!r.target.disabled),2===e&&(d.disabled=!d.disabled);for(var l=t.insertRow(),n=0;n<t.rows[0].cells.length;n++)l.insertCell()}function i(e,r){9===(t=e.rows[0].cells.length)&&(r.target.disabled=!r.target.disabled),2===t&&(n.disabled=!n.disabled);for(var l=e.rows.length,d=0;d<l;d++)e.rows[d].insertCell()}function a(t,l){3===(e=t.rows.length)&&(l.target.disabled=!l.target.disabled),10===e&&(r.disabled=!r.disabled),t.deleteRow(t.rows-1)}function c(e,r){3===(t=e.rows[0].cells.length)&&(r.target.disabled=!r.target.disabled),10===t&&(l.disabled=!l.disabled);for(var d=0;d<e.rows.length;d++)e.rows[d].deleteCell(e.rows[d].cells.length-1)}r.addEventListener("click",function(e){return s(o,e)}),l.addEventListener("click",function(e){return i(o,e)}),d.addEventListener("click",function(e){return a(o,e)}),n.addEventListener("click",function(e){return c(o,e)});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.d57d60ce.js.map