(self["webpackChunkstrapi_socket"] = self["webpackChunkstrapi_socket"] || []).push([[8418],{

/***/ 44981:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

  
  
  if (true) {
    module.exports = __webpack_require__(5582);
  } else {}
  

/***/ }),

/***/ 5582:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(n,e){ true?module.exports=e(__webpack_require__(53547),__webpack_require__(78384),__webpack_require__(74764)):0}(this,(function(n,e,t){return function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=112)}({0:function(n,e,t){n.exports=t(19)()},1:function(e,t){e.exports=n},10:function(n,e,t){var r=t(25),o=t(26),i=t(22),a=t(27);n.exports=function(n,e){return r(n)||o(n,e)||i(n,e)||a()},n.exports.default=n.exports,n.exports.__esModule=!0},112:function(n,e,t){"use strict";t.r(e),t.d(e,"Crumb",(function(){return w})),t.d(e,"Breadcrumbs",(function(){return T}));var r,o=t(4),i=t.n(o),a=t(3),s=t.n(a),u=t(1),c=t.n(u),f=t(0),l=t.n(f),p=t(2),d=t.n(p),h=t(50),g=t.n(h),m=t(8),b=t(6),v=t(9),y=t(18),x=["children","label"],O=d()(v.Flex)(r||(r=s()(["\n  svg {\n    height: 10px;\n    width: 10px;\n  }\n  svg path {\n    fill: ",";\n  }\n  :last-of-type "," {\n    display: none;\n  }\n"])),(function(n){return n.theme.colors.neutral300}),b.Box),w=function(n){var e=n.children;return c.a.createElement(O,{inline:!0,as:"li"},c.a.createElement(m.Typography,{fontWeight:"bold",color:"neutral800"},e),c.a.createElement(b.Box,{paddingLeft:3,paddingRight:3},c.a.createElement(g.a,null)))};w.displayName="Crumb",w.propTypes={children:l.a.string.isRequired};var S=l.a.shape({type:l.a.oneOf([w])}),T=function(n){var e=n.children,t=n.label,r=i()(n,x);return c.a.createElement(v.Flex,r,c.a.createElement(y.VisuallyHidden,null,t),c.a.createElement("ol",{"aria-hidden":!0},e))};T.displayName="Breadcrumbs",T.propTypes={children:l.a.oneOfType([l.a.arrayOf(S),S]).isRequired,label:l.a.string.isRequired}},13:function(n,e){function t(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(n.exports=t=function(n){return typeof n},n.exports.default=n.exports,n.exports.__esModule=!0):(n.exports=t=function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n.exports.default=n.exports,n.exports.__esModule=!0),t(e)}n.exports=t,n.exports.default=n.exports,n.exports.__esModule=!0},18:function(n,e,t){"use strict";t.r(e),t.d(e,"VisuallyHidden",(function(){return s}));var r,o=t(3),i=t.n(o),a=t(2),s=t.n(a).a.div(r||(r=i()(["\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n"])))},19:function(n,e,t){"use strict";var r=t(20);function o(){}function i(){}i.resetWarningCache=o,n.exports=function(){function n(n,e,t,o,i,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return n}n.isRequired=n;var t={array:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return t.PropTypes=t,t}},2:function(n,t){n.exports=e},20:function(n,e,t){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(n,e){n.exports=function(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r},n.exports.default=n.exports,n.exports.__esModule=!0},22:function(n,e,t){var r=t(21);n.exports=function(n,e){if(n){if("string"==typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,e):void 0}},n.exports.default=n.exports,n.exports.__esModule=!0},24:function(n,e){n.exports=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o},n.exports.default=n.exports,n.exports.__esModule=!0},25:function(n,e){n.exports=function(n){if(Array.isArray(n))return n},n.exports.default=n.exports,n.exports.__esModule=!0},26:function(n,e){n.exports=function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,i=[],a=!0,s=!1;try{for(t=t.call(n);!(a=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(n){s=!0,o=n}finally{try{a||null==t.return||t.return()}finally{if(s)throw o}}return i}},n.exports.default=n.exports,n.exports.__esModule=!0},27:function(n,e){n.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},n.exports.default=n.exports,n.exports.__esModule=!0},3:function(n,e){n.exports=function(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))},n.exports.default=n.exports,n.exports.__esModule=!0},4:function(n,e,t){var r=t(24);n.exports=function(n,e){if(null==n)return{};var t,o,i=r(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i},n.exports.default=n.exports,n.exports.__esModule=!0},50:function(n,e){n.exports=t},6:function(n,e,t){"use strict";t.r(e),t.d(e,"Box",(function(){return b}));var r,o=t(3),i=t.n(o),a=t(2),s=t.n(a),u=t(7),c=t(1),f=t.n(c),l=t(0),p=t.n(l),d=function(n){return f.a.createElement("div",n)},h={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},g={_hover:p.a.func,background:p.a.string,basis:p.a.oneOfType([p.a.string,p.a.string]),borderColor:p.a.string,children:p.a.oneOfType([p.a.node,p.a.string]),color:p.a.string,flex:p.a.oneOfType([p.a.string,p.a.string]),grow:p.a.oneOfType([p.a.string,p.a.string]),hasRadius:p.a.bool,hiddenS:p.a.bool,hiddenXS:p.a.bool,padding:p.a.oneOfType([p.a.number,p.a.arrayOf(p.a.number)]),paddingBottom:p.a.oneOfType([p.a.number,p.a.arrayOf(p.a.number)]),paddingLeft:p.a.oneOfType([p.a.number,p.a.arrayOf(p.a.number)]),paddingRight:p.a.oneOfType([p.a.number,p.a.arrayOf(p.a.number)]),paddingTop:p.a.oneOfType([p.a.number,p.a.arrayOf(p.a.number)]),shadow:p.a.string,shrink:p.a.oneOfType([p.a.string,p.a.string])};d.defaultProps=h,d.propTypes=g;var m={color:!0},b=s.a.div.withConfig({shouldForwardProp:function(n,e){return!m[n]&&e(n)}})(r||(r=i()(["\n  // Font\n  font-size: ",";\n\n  // Colors\n  background: ",";\n  color: ",";\n\n  // Spaces\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  // Responsive hiding\n  ","\n  ","\n  \n\n  // Borders\n  border-radius: ",";\n  border-style: ",";\n  border-width: ",";\n  border-color: ",";\n  border: ",";\n\n  // Shadows\n  box-shadow: ",";\n\n  // Handlers\n  pointer-events: ",";\n  &:hover {\n    ","\n  }\n\n  // Display\n  display: ",";\n\n  // Position\n  position: ",";\n  left: ",";\n  right: ",";\n  top: ",";\n  bottom: ",";\n  z-index: ",";\n  overflow: ",";\n  cursor: ",";\n\n  // Size\n  width: ",";\n  max-width: ",";\n  min-width: ",";\n  height: ",";\n  max-height: ",";\n  min-height: ",";\n\n  // Animation\n  transition: ",";\n  transform: ",";\n  animation: ",";\n\n  //Flexbox children props\n  flex-shrink: ",";\n  flex-grow: ",";\n  flex-basis: ",";\n  flex: ",";\n\n  // Text\n  text-align: ",";\n  text-transform: ",";\n  line-height: ",";\n\n  // Cursor\n  cursor: ",";\n"])),(function(n){var e=n.fontSize;return n.theme.fontSizes[e]||e}),(function(n){var e=n.theme,t=n.background;return e.colors[t]}),(function(n){var e=n.theme,t=n.color;return e.colors[t]}),(function(n){var e=n.theme,t=n.padding;return Object(u.a)("padding",t,e)}),(function(n){var e=n.theme,t=n.paddingTop;return Object(u.a)("padding-top",t,e)}),(function(n){var e=n.theme,t=n.paddingRight;return Object(u.a)("padding-right",t,e)}),(function(n){var e=n.theme,t=n.paddingBottom;return Object(u.a)("padding-bottom",t,e)}),(function(n){var e=n.theme,t=n.paddingLeft;return Object(u.a)("padding-left",t,e)}),(function(n){var e=n.theme,t=n.marginLeft;return Object(u.a)("margin-left",t,e)}),(function(n){var e=n.theme,t=n.marginRight;return Object(u.a)("margin-right",t,e)}),(function(n){var e=n.theme,t=n.marginTop;return Object(u.a)("margin-top",t,e)}),(function(n){var e=n.theme,t=n.marginBottom;return Object(u.a)("margin-bottom",t,e)}),(function(n){var e=n.theme;return n.hiddenS?"".concat(e.mediaQueries.tablet," { display: none; }"):void 0}),(function(n){var e=n.theme;return n.hiddenXS?"".concat(e.mediaQueries.mobile," { display: none; }"):void 0}),(function(n){var e=n.theme,t=n.hasRadius,r=n.borderRadius;return t?e.borderRadius:r}),(function(n){return n.borderStyle}),(function(n){return n.borderWidth}),(function(n){var e=n.borderColor;return n.theme.colors[e]}),(function(n){var e=n.theme,t=n.borderColor,r=n.borderStyle,o=n.borderWidth;if(t&&!r&&!o)return"1px solid ".concat(e.colors[t])}),(function(n){var e=n.theme,t=n.shadow;return e.shadows[t]}),(function(n){return n.pointerEvents}),(function(n){var e=n._hover,t=n.theme;return e?e(t):void 0}),(function(n){return n.display}),(function(n){return n.position}),(function(n){var e=n.left;return n.theme.spaces[e]||e}),(function(n){var e=n.right;return n.theme.spaces[e]||e}),(function(n){var e=n.top;return n.theme.spaces[e]||e}),(function(n){var e=n.bottom;return n.theme.spaces[e]||e}),(function(n){return n.zIndex}),(function(n){return n.overflow}),(function(n){return n.cursor}),(function(n){var e=n.width;return n.theme.spaces[e]||e}),(function(n){var e=n.maxWidth;return n.theme.spaces[e]||e}),(function(n){var e=n.minWidth;return n.theme.spaces[e]||e}),(function(n){var e=n.height;return n.theme.spaces[e]||e}),(function(n){var e=n.maxHeight;return n.theme.spaces[e]||e}),(function(n){var e=n.minHeight;return n.theme.spaces[e]||e}),(function(n){return n.transition}),(function(n){return n.transform}),(function(n){return n.animation}),(function(n){return n.shrink}),(function(n){return n.grow}),(function(n){return n.basis}),(function(n){return n.flex}),(function(n){return n.textAlign}),(function(n){return n.textTransform}),(function(n){return n.lineHeight}),(function(n){return n.cursor}));b.defaultProps=h,b.propTypes=g},7:function(n,e,t){"use strict";var r=t(10),o=t.n(r),i=t(13),a=t.n(i);e.a=function(n,e,t){var r=e;if(Array.isArray(e)||"object"!==a()(e)||(r=[null==e?void 0:e.desktop,null==e?void 0:e.tablet,null==e?void 0:e.mobile]),void 0!==r){if(Array.isArray(r)){var i=r,s=o()(i,3),u=s[0],c=s[1],f=s[2],l="".concat(n,": ").concat(t.spaces[u],";");return void 0!==c&&(l+="".concat(t.mediaQueries.tablet,"{\n          ").concat(n,": ").concat(t.spaces[c],";\n        }")),void 0!==f&&(l+="".concat(t.mediaQueries.mobile,"{\n          ").concat(n,": ").concat(t.spaces[f],";\n        }")),l}var p=t.spaces[r]||r;return"".concat(n,": ").concat(p,";")}}},8:function(n,e,t){"use strict";t.r(e),t.d(e,"Typography",(function(){return b}));var r,o=t(3),i=t.n(o),a=t(2),s=t.n(a),u=["alpha","beta","delta","epsilon","omega","pi","sigma"],c=t(1),f=t.n(c),l=t(0),p=t.n(l),d=function(n){return f.a.createElement("div",n)},h={ellipsis:!1,fontWeight:void 0,fontSize:void 0,lineHeight:void 0,textColor:void 0,textTransform:void 0,variant:"omega"},g={ellipsis:p.a.bool,fontSize:p.a.oneOfType([p.a.number,p.a.string]),fontWeight:p.a.string,lineHeight:p.a.oneOfType([p.a.number,p.a.string]),textColor:p.a.string,textTransform:p.a.string,variant:p.a.oneOf(u)};d.defaultProps=h,d.propTypes=g;var m={fontSize:!0,fontWeight:!0},b=s.a.span.withConfig({shouldForwardProp:function(n,e){return!m[n]&&e(n)}})(r||(r=i()(["\n  font-weight: ",";\n  font-size: ",";\n  line-height: ",";\n  color: ",";\n  text-transform: ",";\n  ","\n  ","\n"])),(function(n){var e=n.theme,t=n.fontWeight;return e.fontWeights[t]}),(function(n){var e=n.theme,t=n.fontSize;return e.fontSizes[t]}),(function(n){var e=n.theme,t=n.lineHeight;return e.lineHeights[t]}),(function(n){var e=n.theme,t=n.textColor;return e.colors[t||"neutral800"]}),(function(n){return n.textTransform}),(function(n){return n.ellipsis&&"\n    display: block;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  "}),(function(n){var e=n.variant,t=n.theme;switch(e){case"alpha":return"\n        font-weight: ".concat(t.fontWeights.bold,";\n        font-size: ").concat(t.fontSizes[5],";\n        line-height: ").concat(t.lineHeights[2],";\n      ");case"beta":return"\n        font-weight: ".concat(t.fontWeights.bold,";\n        font-size: ").concat(t.fontSizes[4],";\n        line-height: ").concat(t.lineHeights[1],";\n      ");case"delta":return"\n        font-weight: ".concat(t.fontWeights.semiBold,";\n        font-size: ").concat(t.fontSizes[3],";\n        line-height: ").concat(t.lineHeights[2],";\n      ");case"epsilon":return"\n        font-size: ".concat(t.fontSizes[3],";\n        line-height: ").concat(t.lineHeights[6],";\n      ");case"omega":return"\n        font-size: ".concat(t.fontSizes[2],";\n        line-height: ").concat(t.lineHeights[4],";\n      ");case"pi":return"\n        font-size: ".concat(t.fontSizes[1],";\n        line-height: ").concat(t.lineHeights[3],";\n      ");case"sigma":return"\n        font-weight: ".concat(t.fontWeights.bold,";\n        font-size: ").concat(t.fontSizes[0],";\n        line-height: ").concat(t.lineHeights[5],";\n        text-transform: uppercase;\n      ");default:return"\n        font-size: ".concat(t.fontSizes[2],";\n      ")}}));b.defaultProps=h,b.propTypes=g},9:function(n,e,t){"use strict";t.r(e),t.d(e,"Flex",(function(){return v}));var r,o=t(3),i=t.n(o),a=t(2),s=t.n(a),u=t(6),c=t(7),f=t(1),l=t.n(f),p=t(0),d=t.n(p),h=function(n){return l.a.createElement("div",n)},g={alignItems:"center",basis:void 0,direction:"row",gap:void 0,inline:!1,justifyContent:void 0,reverse:!1,wrap:void 0},m={alignItems:d.a.string,basis:d.a.oneOfType([d.a.string,d.a.number]),direction:d.a.string,gap:d.a.oneOfType([d.a.shape({desktop:d.a.number,mobile:d.a.number,tablet:d.a.number}),d.a.number,d.a.arrayOf(d.a.number),d.a.string]),inline:d.a.bool,justifyContent:d.a.string,reverse:d.a.bool,wrap:d.a.string};h.defaultProps=g,h.propTypes=m;var b={direction:!0},v=s()(u.Box).withConfig({shouldForwardProp:function(n,e){return!b[n]&&e(n)}})(r||(r=i()(["\n  align-items: ",";\n  display: ",";\n  flex-direction: ",";\n  flex-wrap: ",";\n  ","};\n  justify-content: ",";\n"])),(function(n){return n.alignItems}),(function(n){return n.inline?"inline-flex":"flex"}),(function(n){return n.direction}),(function(n){return n.wrap}),(function(n){var e=n.gap,t=n.theme;return Object(c.a)("gap",e,t)}),(function(n){return n.justifyContent}));v.defaultProps=g,v.propTypes=m}})}));

/***/ }),

/***/ 79274:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(53547)):0}(this,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=154)}({0:function(t,r){t.exports=e},154:function(e,t,r){"use strict";r.r(t);var n=r(0);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.default=function(e){return n.createElement("svg",o({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.681 2.804A9.64 9.64 0 0011.818 2C6.398 2 2 6.48 2 12c0 5.521 4.397 10 9.818 10 2.03 0 4.011-.641 5.67-1.835a9.987 9.987 0 003.589-4.831 1.117 1.117 0 00-.664-1.418 1.086 1.086 0 00-1.393.676 7.769 7.769 0 01-2.792 3.758 7.546 7.546 0 01-4.41 1.428V4.222h.002a7.492 7.492 0 013.003.625 7.61 7.61 0 012.5 1.762l.464.551-2.986 3.042a.186.186 0 00.129.316H22V3.317a.188.188 0 00-.112-.172.179.179 0 00-.199.04l-2.355 2.4-.394-.468-.02-.02a9.791 9.791 0 00-3.239-2.293zm-3.863 1.418V2v2.222zm0 0v15.556c-4.216 0-7.636-3.484-7.636-7.778s3.42-7.777 7.636-7.778z",fill:"#212134"}))}}})}));

/***/ }),

/***/ 84210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ EmailTemplates)
});

// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/react/index.js
var react = __webpack_require__(53547);
// EXTERNAL MODULE: ./node_modules/react-query/lib/index.js
var lib = __webpack_require__(23724);
// EXTERNAL MODULE: ./node_modules/react-intl/index.js
var react_intl = __webpack_require__(97132);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/helper-plugin/build/index.js
var build = __webpack_require__(79835);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/LiveRegions.js
var LiveRegions = __webpack_require__(67422);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Main.js
var Main = __webpack_require__(80117);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Layout.js
var Layout = __webpack_require__(35395);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/permissions.js
var permissions = __webpack_require__(51725);
// EXTERNAL MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/utils/index.js + 2 modules
var utils = __webpack_require__(42722);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/EmailTemplates/utils/api.js
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

const fetchData = () => __async(void 0, null, function* () {
  const { data } = yield utils/* axiosInstance.get */.be.get((0,utils/* getRequestURL */.Gc)("email-templates"));
  return data;
});
const putEmailTemplate = (body) => {
  return utils/* axiosInstance.put */.be.put((0,utils/* getRequestURL */.Gc)("email-templates"), body);
};


// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Table.js
var Table = __webpack_require__(43546);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/VisuallyHidden.js
var VisuallyHidden = __webpack_require__(19631);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Typography.js
var Typography = __webpack_require__(33483);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/IconButton.js
var IconButton = __webpack_require__(49549);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Icon.js
var Icon = __webpack_require__(33699);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Pencil.js
var Pencil = __webpack_require__(56204);
var Pencil_default = /*#__PURE__*/__webpack_require__.n(Pencil);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Refresh.js
var Refresh = __webpack_require__(79274);
var Refresh_default = /*#__PURE__*/__webpack_require__.n(Refresh);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/icons/Check.js
var Check = __webpack_require__(22754);
var Check_default = /*#__PURE__*/__webpack_require__.n(Check);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/EmailTemplates/components/EmailTable.js
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};













const EmailTable = ({ canUpdate, onEditClick }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(Table.Table, {
    colCount: 3,
    rowCount: 3
  }, /* @__PURE__ */ react.createElement(Table.Thead, null, /* @__PURE__ */ react.createElement(Table.Tr, null, /* @__PURE__ */ react.createElement(Table.Th, {
    width: "1%"
  }, /* @__PURE__ */ react.createElement(VisuallyHidden.VisuallyHidden, null, formatMessage({
    id: (0,utils/* getTrad */.OB)("Email.template.table.icon.label"),
    defaultMessage: "icon"
  }))), /* @__PURE__ */ react.createElement(Table.Th, null, /* @__PURE__ */ react.createElement(Typography.Typography, {
    variant: "sigma",
    textColor: "neutral600"
  }, formatMessage({
    id: (0,utils/* getTrad */.OB)("Email.template.table.name.label"),
    defaultMessage: "name"
  }))), /* @__PURE__ */ react.createElement(Table.Th, {
    width: "1%"
  }, /* @__PURE__ */ react.createElement(VisuallyHidden.VisuallyHidden, null, formatMessage({
    id: (0,utils/* getTrad */.OB)("Email.template.table.action.label"),
    defaultMessage: "action"
  }))))), /* @__PURE__ */ react.createElement(Table.Tbody, null, /* @__PURE__ */ react.createElement(Table.Tr, __spreadValues({}, (0,build.onRowClick)({ fn: () => onEditClick("reset_password") })), /* @__PURE__ */ react.createElement(Table.Td, null, /* @__PURE__ */ react.createElement(Icon.Icon, null, /* @__PURE__ */ react.createElement((Refresh_default()), {
    "aria-label": formatMessage({
      id: "global.reset-password",
      defaultMessage: "Reset password"
    })
  }))), /* @__PURE__ */ react.createElement(Table.Td, null, /* @__PURE__ */ react.createElement(Typography.Typography, null, formatMessage({
    id: "global.reset-password",
    defaultMessage: "Reset password"
  }))), /* @__PURE__ */ react.createElement(Table.Td, __spreadValues({}, build.stopPropagation), /* @__PURE__ */ react.createElement(IconButton.IconButton, {
    onClick: () => onEditClick("reset_password"),
    label: formatMessage({
      id: (0,utils/* getTrad */.OB)("Email.template.form.edit.label"),
      defaultMessage: "Edit a template"
    }),
    noBorder: true,
    icon: canUpdate && /* @__PURE__ */ react.createElement((Pencil_default()), null)
  }))), /* @__PURE__ */ react.createElement(Table.Tr, __spreadValues({}, (0,build.onRowClick)({ fn: () => onEditClick("email_confirmation") })), /* @__PURE__ */ react.createElement(Table.Td, null, /* @__PURE__ */ react.createElement(Icon.Icon, null, /* @__PURE__ */ react.createElement((Check_default()), {
    "aria-label": formatMessage({
      id: (0,utils/* getTrad */.OB)("Email.template.email_confirmation"),
      defaultMessage: "Email address confirmation"
    })
  }))), /* @__PURE__ */ react.createElement(Table.Td, null, /* @__PURE__ */ react.createElement(Typography.Typography, null, formatMessage({
    id: (0,utils/* getTrad */.OB)("Email.template.email_confirmation"),
    defaultMessage: "Email address confirmation"
  }))), /* @__PURE__ */ react.createElement(Table.Td, __spreadValues({}, build.stopPropagation), /* @__PURE__ */ react.createElement(IconButton.IconButton, {
    onClick: () => onEditClick("email_confirmation"),
    label: formatMessage({
      id: (0,utils/* getTrad */.OB)("Email.template.form.edit.label"),
      defaultMessage: "Edit a template"
    }),
    noBorder: true,
    icon: canUpdate && /* @__PURE__ */ react.createElement((Pencil_default()), null)
  })))));
};
EmailTable.propTypes = {
  canUpdate: (prop_types_default()).bool.isRequired,
  onEditClick: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_EmailTable = (EmailTable);

// EXTERNAL MODULE: ./node_modules/formik/dist/index.js
var dist = __webpack_require__(80831);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/ModalLayout.js
var ModalLayout = __webpack_require__(68991);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Grid.js
var Grid = __webpack_require__(39272);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Button.js
var Button = __webpack_require__(64459);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Breadcrumbs.js
var Breadcrumbs = __webpack_require__(44981);
// EXTERNAL MODULE: ./node_modules/@strapi/admin/node_modules/@strapi/design-system/Textarea.js
var Textarea = __webpack_require__(78607);
// EXTERNAL MODULE: ./node_modules/yup/lib/index.js
var yup_lib = __webpack_require__(53209);
;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/EmailTemplates/utils/schema.js


const schema = yup_lib/* object */.Ry().shape({
  options: yup_lib/* object */.Ry().shape({
    from: yup_lib/* object */.Ry().shape({
      name: yup_lib/* string */.Z_().required(build.translatedErrors.required),
      email: yup_lib/* string */.Z_().email(build.translatedErrors.email).required(build.translatedErrors.required)
    }).required(),
    response_email: yup_lib/* string */.Z_().email(build.translatedErrors.email),
    object: yup_lib/* string */.Z_().required(build.translatedErrors.required),
    message: yup_lib/* string */.Z_().required(build.translatedErrors.required)
  }).required(build.translatedErrors.required)
});
/* harmony default export */ const utils_schema = (schema);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/EmailTemplates/components/EmailForm.js












const EmailForm = ({ template, onToggle, onSubmit }) => {
  const { formatMessage } = (0,react_intl.useIntl)();
  return /* @__PURE__ */ react.createElement(ModalLayout.ModalLayout, {
    onClose: onToggle,
    labelledBy: `${formatMessage({
      id: (0,utils/* getTrad */.OB)("PopUpForm.header.edit.email-templates"),
      defaultMessage: "Edit email template"
    })}, ${formatMessage({ id: (0,utils/* getTrad */.OB)(template.display), defaultMessage: template.display })}`
  }, /* @__PURE__ */ react.createElement(ModalLayout.ModalHeader, null, /* @__PURE__ */ react.createElement(Breadcrumbs.Breadcrumbs, {
    label: `${formatMessage({
      id: (0,utils/* getTrad */.OB)("PopUpForm.header.edit.email-templates"),
      defaultMessage: "Edit email template"
    })}, ${formatMessage({
      id: (0,utils/* getTrad */.OB)(template.display),
      defaultMessage: template.display
    })}`
  }, /* @__PURE__ */ react.createElement(Breadcrumbs.Crumb, null, formatMessage({
    id: (0,utils/* getTrad */.OB)("PopUpForm.header.edit.email-templates"),
    defaultMessage: "Edit email template"
  })), /* @__PURE__ */ react.createElement(Breadcrumbs.Crumb, null, formatMessage({ id: (0,utils/* getTrad */.OB)(template.display), defaultMessage: template.display })))), /* @__PURE__ */ react.createElement(dist.Formik, {
    onSubmit,
    initialValues: template,
    validateOnChange: false,
    validationSchema: utils_schema,
    enableReinitialize: true
  }, ({ errors, values, handleChange, isSubmitting }) => {
    var _a, _b, _c, _d, _e, _f, _g;
    return /* @__PURE__ */ react.createElement(build.Form, null, /* @__PURE__ */ react.createElement(ModalLayout.ModalBody, null, /* @__PURE__ */ react.createElement(Grid.Grid, {
      gap: 5
    }, /* @__PURE__ */ react.createElement(Grid.GridItem, {
      col: 6,
      s: 12
    }, /* @__PURE__ */ react.createElement(build.GenericInput, {
      intlLabel: {
        id: (0,utils/* getTrad */.OB)("PopUpForm.Email.options.from.name.label"),
        defaultMessage: "Shipper name"
      },
      name: "options.from.name",
      onChange: handleChange,
      value: values.options.from.name,
      error: (_b = (_a = errors == null ? void 0 : errors.options) == null ? void 0 : _a.from) == null ? void 0 : _b.name,
      type: "text"
    })), /* @__PURE__ */ react.createElement(Grid.GridItem, {
      col: 6,
      s: 12
    }, /* @__PURE__ */ react.createElement(build.GenericInput, {
      intlLabel: {
        id: (0,utils/* getTrad */.OB)("PopUpForm.Email.options.from.email.label"),
        defaultMessage: "Shipper email"
      },
      name: "options.from.email",
      onChange: handleChange,
      value: values.options.from.email,
      error: (_d = (_c = errors == null ? void 0 : errors.options) == null ? void 0 : _c.from) == null ? void 0 : _d.email,
      type: "text"
    })), /* @__PURE__ */ react.createElement(Grid.GridItem, {
      col: 6,
      s: 12
    }, /* @__PURE__ */ react.createElement(build.GenericInput, {
      intlLabel: {
        id: (0,utils/* getTrad */.OB)("PopUpForm.Email.options.response_email.label"),
        defaultMessage: "Response email"
      },
      name: "options.response_email",
      onChange: handleChange,
      value: values.options.response_email,
      error: (_e = errors == null ? void 0 : errors.options) == null ? void 0 : _e.response_email,
      type: "text"
    })), /* @__PURE__ */ react.createElement(Grid.GridItem, {
      col: 6,
      s: 12
    }, /* @__PURE__ */ react.createElement(build.GenericInput, {
      intlLabel: {
        id: (0,utils/* getTrad */.OB)("PopUpForm.Email.options.object.label"),
        defaultMessage: "Subject"
      },
      name: "options.object",
      onChange: handleChange,
      value: values.options.object,
      error: (_f = errors == null ? void 0 : errors.options) == null ? void 0 : _f.object,
      type: "text"
    })), /* @__PURE__ */ react.createElement(Grid.GridItem, {
      col: 12,
      s: 12
    }, /* @__PURE__ */ react.createElement(Textarea.Textarea, {
      label: formatMessage({
        id: (0,utils/* getTrad */.OB)("PopUpForm.Email.options.message.label"),
        defaultMessage: "Message"
      }),
      name: "options.message",
      onChange: handleChange,
      value: values.options.message,
      error: ((_g = errors == null ? void 0 : errors.options) == null ? void 0 : _g.message) && formatMessage({
        id: errors.options.message,
        defaultMessage: errors.options.message
      })
    })))), /* @__PURE__ */ react.createElement(ModalLayout.ModalFooter, {
      startActions: /* @__PURE__ */ react.createElement(Button.Button, {
        onClick: onToggle,
        variant: "tertiary"
      }, "Cancel"),
      endActions: /* @__PURE__ */ react.createElement(Button.Button, {
        loading: isSubmitting,
        type: "submit"
      }, "Finish")
    }));
  }));
};
EmailForm.propTypes = {
  template: prop_types_default().shape({
    display: (prop_types_default()).string,
    icon: (prop_types_default()).string,
    options: prop_types_default().shape({
      from: prop_types_default().shape({
        name: (prop_types_default()).string,
        email: (prop_types_default()).string
      }),
      message: (prop_types_default()).string,
      object: (prop_types_default()).string,
      response_email: (prop_types_default()).string
    })
  }).isRequired,
  onSubmit: (prop_types_default()).func.isRequired,
  onToggle: (prop_types_default()).func.isRequired
};
/* harmony default export */ const components_EmailForm = (EmailForm);

;// CONCATENATED MODULE: ./node_modules/@strapi/plugin-users-permissions/admin/src/pages/EmailTemplates/index.js
var EmailTemplates_defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var EmailTemplates_getOwnPropSymbols = Object.getOwnPropertySymbols;
var EmailTemplates_hasOwnProp = Object.prototype.hasOwnProperty;
var EmailTemplates_propIsEnum = Object.prototype.propertyIsEnumerable;
var EmailTemplates_defNormalProp = (obj, key, value) => key in obj ? EmailTemplates_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var EmailTemplates_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (EmailTemplates_hasOwnProp.call(b, prop))
      EmailTemplates_defNormalProp(a, prop, b[prop]);
  if (EmailTemplates_getOwnPropSymbols)
    for (var prop of EmailTemplates_getOwnPropSymbols(b)) {
      if (EmailTemplates_propIsEnum.call(b, prop))
        EmailTemplates_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var EmailTemplates_async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};












const ProtectedEmailTemplatesPage = () => /* @__PURE__ */ react.createElement(build.CheckPagePermissions, {
  permissions: permissions/* default.readEmailTemplates */.Z.readEmailTemplates
}, /* @__PURE__ */ react.createElement(EmailTemplatesPage, null));
const EmailTemplatesPage = () => {
  const { formatMessage } = (0,react_intl.useIntl)();
  const { trackUsage } = (0,build.useTracking)();
  const { notifyStatus } = (0,LiveRegions.useNotifyAT)();
  const toggleNotification = (0,build.useNotification)();
  const { lockApp, unlockApp } = (0,build.useOverlayBlocker)();
  const trackUsageRef = (0,react.useRef)(trackUsage);
  const queryClient = (0,lib.useQueryClient)();
  (0,build.useFocusWhenNavigate)();
  const [isModalOpen, setIsModalOpen] = (0,react.useState)(false);
  const [templateToEdit, setTemplateToEdit] = (0,react.useState)(null);
  const updatePermissions = (0,react.useMemo)(() => {
    return { update: permissions/* default.updateEmailTemplates */.Z.updateEmailTemplates };
  }, []);
  const {
    isLoading: isLoadingForPermissions,
    allowedActions: { canUpdate }
  } = (0,build.useRBAC)(updatePermissions);
  const { status: isLoadingData, data } = (0,lib.useQuery)("email-templates", () => fetchData(), {
    onSuccess: () => {
      notifyStatus(formatMessage({
        id: (0,utils/* getTrad */.OB)("Email.template.data.loaded"),
        defaultMessage: "Email templates has been loaded"
      }));
    },
    onError: () => {
      toggleNotification({
        type: "warning",
        message: { id: "notification.error", defaultMessage: "An error occured" }
      });
    }
  });
  const isLoading = isLoadingForPermissions || isLoadingData !== "success";
  const handleToggle = () => {
    setIsModalOpen((prev) => !prev);
  };
  const handleEditClick = (template) => {
    setTemplateToEdit(template);
    handleToggle();
  };
  const submitMutation = (0,lib.useMutation)((body) => putEmailTemplate({ "email-templates": body }), {
    onSuccess: () => EmailTemplates_async(void 0, null, function* () {
      yield queryClient.invalidateQueries("email-templates");
      toggleNotification({
        type: "success",
        message: { id: "notification.success.saved", defaultMessage: "Saved" }
      });
      trackUsageRef.current("didEditEmailTemplates");
      unlockApp();
      handleToggle();
    }),
    onError: () => {
      toggleNotification({
        type: "warning",
        message: { id: "notification.error", defaultMessage: "An error occured" }
      });
      unlockApp();
    },
    refetchActive: true
  });
  const { isLoading: isSubmittingForm } = submitMutation;
  const handleSubmit = (body) => {
    lockApp();
    trackUsageRef.current("willEditEmailTemplates");
    const editedTemplates = __spreadProps(EmailTemplates_spreadValues({}, data), { [templateToEdit]: body });
    submitMutation.mutate(editedTemplates);
  };
  if (isLoading) {
    return /* @__PURE__ */ react.createElement(Main.Main, {
      "aria-busy": "true"
    }, /* @__PURE__ */ react.createElement(build.SettingsPageTitle, {
      name: formatMessage({
        id: (0,utils/* getTrad */.OB)("HeaderNav.link.emailTemplates"),
        defaultMessage: "Email templates"
      })
    }), /* @__PURE__ */ react.createElement(Layout.HeaderLayout, {
      title: formatMessage({
        id: (0,utils/* getTrad */.OB)("HeaderNav.link.emailTemplates"),
        defaultMessage: "Email templates"
      })
    }), /* @__PURE__ */ react.createElement(Layout.ContentLayout, null, /* @__PURE__ */ react.createElement(build.LoadingIndicatorPage, null)));
  }
  return /* @__PURE__ */ react.createElement(Main.Main, {
    "aria-busy": isSubmittingForm
  }, /* @__PURE__ */ react.createElement(build.SettingsPageTitle, {
    name: formatMessage({
      id: (0,utils/* getTrad */.OB)("HeaderNav.link.emailTemplates"),
      defaultMessage: "Email templates"
    })
  }), /* @__PURE__ */ react.createElement(Layout.HeaderLayout, {
    title: formatMessage({
      id: (0,utils/* getTrad */.OB)("HeaderNav.link.emailTemplates"),
      defaultMessage: "Email templates"
    })
  }), /* @__PURE__ */ react.createElement(Layout.ContentLayout, null, /* @__PURE__ */ react.createElement(components_EmailTable, {
    onEditClick: handleEditClick,
    canUpdate
  }), isModalOpen && /* @__PURE__ */ react.createElement(components_EmailForm, {
    template: data[templateToEdit],
    onToggle: handleToggle,
    onSubmit: handleSubmit
  })));
};
/* harmony default export */ const EmailTemplates = (ProtectedEmailTemplatesPage);


/***/ })

}]);