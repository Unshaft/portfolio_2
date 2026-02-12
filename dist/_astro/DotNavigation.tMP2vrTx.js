import{r as u}from"./index.BVOCwoKb.js";var a={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d;function v(){if(d)return s;d=1;var i=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function n(r,e,t){var o=null;if(t!==void 0&&(o=""+t),e.key!==void 0&&(o=""+e.key),"key"in e){t={};for(var c in e)c!=="key"&&(t[c]=e[c])}else t=e;return e=t.ref,{$$typeof:i,type:r,key:o,ref:e!==void 0?e:null,props:t}}return s.Fragment=l,s.jsx=n,s.jsxs=n,s}var f;function p(){return f||(f=1,a.exports=v()),a.exports}var m=p();const x=["welcome","projects","metrics","skills"];function R(){const[i,l]=u.useState("welcome");u.useEffect(()=>{const r=document.getElementById("scroll-frame");if(!r)return;const e=new IntersectionObserver(t=>{t.forEach(o=>{o.isIntersecting&&l(o.target.id)})},{root:r,threshold:.5});return x.forEach(t=>{const o=document.getElementById(t);o&&e.observe(o)}),()=>e.disconnect()},[]);const n=r=>{const e=document.getElementById("scroll-frame"),t=document.getElementById(r);e&&t&&e.scrollTo({top:t.offsetTop,behavior:"smooth"})};return m.jsx("div",{className:"fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4",children:x.map(r=>m.jsx("button",{onClick:()=>n(r),className:`w-4 h-4 rounded-full transition ${i===r?"bg-gold scale-125 shadow-md":"bg-gray-300 hover:bg-gold"}`,"aria-label":`Aller à ${r}`},r))})}export{R as default};
