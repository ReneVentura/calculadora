(()=>{"use strict";var e={426:(e,r,n)=>{n.d(r,{Z:()=>o});var t=n(645),a=n.n(t)()((function(e){return e[1]}));a.push([e.id,"*, *::before, *::after {\r\n    box-sizing: border-box;\r\n    font-family: Gotham Rounded, sans-serif;\r\n    font-weight: normal;\r\n    \r\n  }\r\n  \r\n  body {\r\n    padding: 0;\r\n    margin: 0;\r\n    background: linear-gradient(to left, #ff006a, #0066ff);\r\n  }\r\n  \r\n  .calculator-grid {\r\n    display: grid;\r\n    justify-content: center;\r\n    align-content: center;\r\n    min-height: 100vh;\r\n    grid-template-columns: repeat(4, 100px);\r\n    grid-template-rows: minmax(120px, auto) repeat(5, 100px);\r\n  }\r\n  \r\n  .calculator-grid > button {\r\n    cursor: pointer;\r\n    font-size: 1.5rem;\r\n    border: 1px solid rgba(248, 206, 245, 0.75);\r\n    outline: none;\r\n    border-radius: 20px;\r\n    margin: 2px;\r\n    background-color: rgba(234, 177, 245, 0.75);\r\n  }\r\n  \r\n  .calculator-grid > button:hover {\r\n    background-color: rgba(219, 90, 245, 0.9);\r\n  }\r\n  \r\n  .span-two {\r\n    grid-column: span 2;\r\n  }\r\n  \r\n  .output {\r\n    grid-column: 1 / -1;\r\n    border-radius: 20px;\r\n    margin:2px;\r\n    background-color: rgba(0, 0, 0, .75);\r\n    display: flex;\r\n    align-items: flex-end;\r\n    justify-content: space-around;\r\n    flex-direction: column;\r\n    padding: 10px;\r\n    word-wrap: break-word;\r\n    word-break: break-all;\r\n  }\r\n  \r\n  .output .previous-operand {\r\n    color: rgba(255, 255, 255, .75);\r\n    font-size: 1.5rem;\r\n  }\r\n  \r\n  .output .current-operand {\r\n    color: rgb(252, 6, 199);\r\n    font-size: 2.5rem;\r\n  }",""]);const o=a},645:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var n=e(r);return r[2]?"@media ".concat(r[2]," {").concat(n,"}"):n})).join("")},r.i=function(e,n,t){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(t)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);t&&a[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),r.push(c))}},r}},379:(e,r,n)=>{var t,a=function(){var e={};return function(r){if(void 0===e[r]){var n=document.querySelector(r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[r]=n}return e[r]}}(),o=[];function i(e){for(var r=-1,n=0;n<o.length;n++)if(o[n].identifier===e){r=n;break}return r}function s(e,r){for(var n={},t=[],a=0;a<e.length;a++){var s=e[a],c=r.base?s[0]+r.base:s[0],u=n[c]||0,d="".concat(c," ").concat(u);n[c]=u+1;var l=i(d),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==l?(o[l].references++,o[l].updater(p)):o.push({identifier:d,updater:m(p,r),references:1}),t.push(d)}return t}function c(e){var r=document.createElement("style"),t=e.attributes||{};if(void 0===t.nonce){var o=n.nc;o&&(t.nonce=o)}if(Object.keys(t).forEach((function(e){r.setAttribute(e,t[e])})),"function"==typeof e.insert)e.insert(r);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(r)}return r}var u,d=(u=[],function(e,r){return u[e]=r,u.filter(Boolean).join("\n")});function l(e,r,n,t){var a=n?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(e.styleSheet)e.styleSheet.cssText=d(r,a);else{var o=document.createTextNode(a),i=e.childNodes;i[r]&&e.removeChild(i[r]),i.length?e.insertBefore(o,i[r]):e.appendChild(o)}}function p(e,r,n){var t=n.css,a=n.media,o=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var f=null,h=0;function m(e,r){var n,t,a;if(r.singleton){var o=h++;n=f||(f=c(r)),t=l.bind(null,n,o,!1),a=l.bind(null,n,o,!0)}else n=c(r),t=p.bind(null,n,r),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else a()}}e.exports=function(e,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var n=s(e=e||[],r);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var t=0;t<n.length;t++){var a=i(n[t]);o[a].references--}for(var c=s(e,r),u=0;u<n.length;u++){var d=i(n[u]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}n=c}}}}},r={};function n(t){var a=r[t];if(void 0!==a)return a.exports;var o=r[t]={id:t,exports:{}};return e[t](o,o.exports,n),o.exports}n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e=n(379),r=n.n(e),t=n(426);r()(t.Z,{insert:"head",singleton:!1}),t.Z.locals;const a=document.querySelectorAll("[data-number]"),o=document.querySelectorAll("[data-operation]"),i=document.querySelector("[data-equals]"),s=document.querySelector("[data-delete]"),c=document.querySelector("[data-all-clear]"),u=document.querySelector("[data-previous-operand]"),d=document.querySelector("[data-current-operand]"),l=new class{constructor(e,r){this.previousOperandTextElement=e,this.currentOperandTextElement=r,this.clear()}clear(){this.currentOperand="",this.previousOperand="",this.operation=void 0}delete(){this.currentOperand=this.currentOperand.toString().slice(0,-1)}appendNumber(e){"."===e&&this.currentOperand.includes(".")||(this.currentOperand=this.currentOperand.toString()+e.toString())}chooseOperation(e){""!==this.currentOperand&&(""!==this.previousOperand&&this.compute(),this.operation=e,this.previousOperand=this.currentOperand,this.currentOperand="")}compute(){let e;const r=parseFloat(this.previousOperand),n=parseFloat(this.currentOperand);if(!isNaN(r)&&!isNaN(n)){switch(this.operation){case"+":e=r+n,e>999999999&&(e="error");break;case"-":e=r-n,e<0&&(e="error");break;case"*":e=r*n,e>Math.pow(10,9)&&(e="error",console.log("mayor al numero"));break;case"÷":e=r/n;break;default:return}if(isNaN(e))this.currentOperand=e;else if(e%1!=0){var t=e.toFixed(7);this.currentOperand=t}else this.currentOperand=e;console.log(this.currentOperand),this.operation=void 0,this.previousOperand=""}}getDisplayNumber(e){const r=e.toString();let n;if(r.includes("error"))return console.log("sirve"),n="error",n;{r.length>=9&&(this.delete(),this.updateDisplay());const e=parseFloat(r.split(".")[0]),t=r.split(".")[1];return n=isNaN(e)?"":e.toLocaleString("en",{maximumFractionDigits:0}),null!=t?"".concat(n,".").concat(t):n}}updateDisplay(){this.currentOperandTextElement.innerText=this.getDisplayNumber(this.currentOperand),null!=this.operation?this.previousOperandTextElement.innerText="".concat(this.getDisplayNumber(this.previousOperand)," ").concat(this.operation):this.previousOperandTextElement.innerText=""}}(u,d);a.forEach((e=>{e.addEventListener("click",(()=>{l.appendNumber(e.innerText),l.updateDisplay()}))})),o.forEach((e=>{e.addEventListener("click",(()=>{l.chooseOperation(e.innerText),l.updateDisplay()}))})),i.addEventListener("click",(e=>{l.compute(),l.updateDisplay()})),c.addEventListener("click",(e=>{l.clear(),l.updateDisplay()})),s.addEventListener("click",(e=>{l.delete(),l.updateDisplay()}))})()})();