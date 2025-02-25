import{c as l,r,j as e,X as h}from"./index-CPhzIVrx.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=l("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=l("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),m=({images:a,currentIndex:c,onClose:s,onNext:i,onPrev:o})=>{const n=r.useCallback(t=>{t.key==="Escape"&&s(),t.key==="ArrowRight"&&i(),t.key==="ArrowLeft"&&o()},[s,i,o]);return r.useEffect(()=>(window.addEventListener("keydown",n),()=>window.removeEventListener("keydown",n)),[n]),e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4",onClick:s,children:e.jsxs("div",{className:"relative max-w-4xl max-h-[90vh] w-full",onClick:t=>t.stopPropagation(),children:[e.jsx("img",{src:a[c],alt:"Powiększone zdjęcie",className:"max-w-full max-h-[90vh] object-contain mx-auto"}),e.jsx("button",{className:"absolute top-4 right-4 text-white text-xl p-2 hover:bg-white/10 rounded-full transition-colors",onClick:s,children:e.jsx(h,{size:24})}),a.length>1&&e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full transition-colors",onClick:o,children:e.jsx(d,{size:24})}),e.jsx("button",{className:"absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/10 rounded-full transition-colors",onClick:i,children:e.jsx(x,{size:24})})]})]})})};export{m as I};
