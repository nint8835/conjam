var Be=Object.defineProperty;var je=(e,t,n)=>t in e?Be(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var U=(e,t,n)=>(je(e,typeof t!="symbol"?t+"":t,n),n),de=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)};var W=(e,t,n)=>(de(e,t,"read from private field"),n?n.call(e):t.get(e)),he=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},J=(e,t,n,r)=>(de(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function g(){}function ke(e){return e()}function me(){return Object.create(null)}function q(e){e.forEach(ke)}function Ie(e){return typeof e=="function"}function V(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Pe(e){return Object.keys(e).length===0}function qe(e,...t){if(e==null){for(const r of t)r(void 0);return g}const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function Le(e,t,n){e.$$.on_destroy.push(qe(t,n))}function f(e,t){e.appendChild(t)}function Y(e,t,n){e.insertBefore(t,n||null)}function j(e){e.parentNode&&e.parentNode.removeChild(e)}function h(e){return document.createElement(e)}function A(e){return document.createTextNode(e)}function v(){return A(" ")}function L(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function a(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Ce(e){return e===""?null:+e}function Re(e){return Array.from(e.childNodes)}function ze(e,t){t=""+t,e.data!==t&&(e.data=t)}function R(e,t){e.value=t??""}function Xe(e,t,n,r){e.style.setProperty(t,n,"")}let P;function B(e){P=e}function Ye(){if(!P)throw new Error("Function called outside component initialization");return P}function Ve(e){Ye().$$.on_mount.push(e)}const T=[],_e=[];let M=[];const ge=[],Ge=Promise.resolve();let te=!1;function He(){te||(te=!0,Ge.then(Fe))}function ne(e){M.push(e)}const Q=new Set;let C=0;function Fe(){if(C!==0)return;const e=P;do{try{for(;C<T.length;){const t=T[C];C++,B(t),Ke(t.$$)}}catch(t){throw T.length=0,C=0,t}for(B(null),T.length=0,C=0;_e.length;)_e.pop()();for(let t=0;t<M.length;t+=1){const n=M[t];Q.has(n)||(Q.add(n),n())}M.length=0}while(T.length);for(;ge.length;)ge.pop()();te=!1,Q.clear(),B(e)}function Ke(e){if(e.fragment!==null){e.update(),q(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ne)}}function Ue(e){const t=[],n=[];M.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),M=t}const X=new Set;let We;function re(e,t){e&&e.i&&(X.delete(e),e.i(t))}function be(e,t,n,r){if(e&&e.o){if(X.has(e))return;X.add(e),We.c.push(()=>{X.delete(e)}),e.o(t)}}function $e(e){e&&e.c()}function ie(e,t,n){const{fragment:r,after_update:i}=e.$$;r&&r.m(t,n),ne(()=>{const s=e.$$.on_mount.map(ke).filter(Ie);e.$$.on_destroy?e.$$.on_destroy.push(...s):q(s),e.$$.on_mount=[]}),i.forEach(ne)}function se(e,t){const n=e.$$;n.fragment!==null&&(Ue(n.after_update),q(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Je(e,t){e.$$.dirty[0]===-1&&(T.push(e),He(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ue(e,t,n,r,i,s,u=null,c=[-1]){const l=P;B(e);const o=e.$$={fragment:null,ctx:[],props:s,update:g,not_equal:i,bound:me(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:me(),dirty:c,skip_bound:!1,root:t.target||l.$$.root};u&&u(o.root);let p=!1;if(o.ctx=n?n(e,t.props||{},(m,$,...w)=>{const b=w.length?w[0]:$;return o.ctx&&i(o.ctx[m],o.ctx[m]=b)&&(!o.skip_bound&&o.bound[m]&&o.bound[m](b),p&&Je(e,m)),$}):[],o.update(),p=!0,q(o.before_update),o.fragment=r?r(o.ctx):!1,t.target){if(t.hydrate){const m=Re(t.target);o.fragment&&o.fragment.l(m),m.forEach(j)}else o.fragment&&o.fragment.c();t.intro&&re(e.$$.fragment),ie(e,t.target,t.anchor),Fe()}B(l)}class oe{constructor(){U(this,"$$");U(this,"$$set")}$destroy(){se(this,1),this.$destroy=g}$on(t,n){if(!Ie(n))return g;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(t){this.$$set&&!Pe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Qe="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Qe);class G{withFields(t){let n=Object.keys(this).map(r=>r in t?t[r]:this[r]);return new this.constructor(...n)}}class le{static fromArray(t,n){let r=n||new Te;for(let i=t.length-1;i>=0;--i)r=new Oe(t[i],r);return r}[Symbol.iterator](){return new et(this)}toArray(){return[...this]}atLeastLength(t){for(let n of this){if(t<=0)return!0;t--}return t<=0}hasLength(t){for(let n of this){if(t<=0)return!1;t--}return t===0}countLength(){let t=0;for(let n of this)t++;return t}}function Z(e,t){return new Oe(e,t)}function Ze(e,t){return le.fromArray(e,t)}var k;class et{constructor(t){he(this,k,void 0);J(this,k,t)}next(){if(W(this,k)instanceof Te)return{done:!0};{let{head:t,tail:n}=W(this,k);return J(this,k,n),{value:t,done:!1}}}}k=new WeakMap;class Te extends le{}class Oe extends le{constructor(t,n){super(),this.head=t,this.tail=n}}class H extends G{static isResult(t){return t instanceof H}}class tt extends H{constructor(t){super(),this[0]=t}isOk(){return!0}}let nt=class extends H{constructor(t){super(),this[0]=t}isOk(){return!1}};function Ae(e,t){return e%t}function Me(e,t){return Math.trunc(rt(e,t))}function rt(e,t){return e/t}class it extends G{}class Se extends G{}class De extends G{}function st(e){return e}function we(e,t){let r=st(e);return Ne(r,t)}function ut(e,t){return e===t?new Se:e<t?new it:new De}function ye(e,t,n){for(;;){let r=e,i=t,s=n;if(r.hasLength(0))return i;{let u=r.head;e=r.tail,t=s(i,u),n=s}}}function ot(e,t,n){for(;;){let r=e,i=t,s=n,u=ut(r,i);if(u instanceof Se)return Z(i,s);u instanceof De?(e=r,t=i+1,n=Z(i,s)):(e=r,t=i-1,n=Z(i,s))}}function xe(e,t){return ot(e,t,Ze([]))}function ee(e,t){return e.isOk()?e[0]:t}function lt(e){return Math.ceil(e)}function ve(e){return Math.round(e)}function ct(e,t){return Math.pow(e,t)}function at(e){return lt(e)}function Ne(e,t){let n=at(t)-t>0;return e<0&&n||e===0&&t<0?new nt(void 0):new tt(ct(e,t))}function ft(e){return Ne(e,.5)}function pt(e){return-1*e}function dt(e){return e>=0?ve(e):0-ve(pt(e))}function ht(e){return dt(e)}const mt=640,_t=480;function N(e,t){const n=e.data,r=t*4;return n[r]<<24|n[r+1]<<16|n[r+2]<<8|n[r+3]}function O(e,t,n){const r=t*4,i=e.data;return i[r]=n>>24&255,i[r+1]=n>>16&255,i[r+2]=n>>8&255,i[r+3]=n&255,e}function gt(e){const n=document.getElementById("canvas").getContext("2d"),r=n.getImageData(0,0,mt,_t),i=e(r);n.putImageData(i,0,0)}const _=640;function Ee(e,t,n){return N(e,n*_+t)}function ce(e,t,n,r){return O(e,n*_+t,r)}const bt=480;function $t(e,t){let n=Ae(t,_),r=Me(t,_);if(r===0)return e;{let s=Ee(e,n,r),u=Ee(e,n,r-1);return s===u&&s!==0?ce(e,n,r,0):e}}function wt(e,t,n,r,i){let s=xe(-1*r,r);return ye(s,e,(u,c)=>{let l=xe(-1*r,r);return ye(l,u,(o,p)=>(()=>{let w=ft((()=>{let I=we(p,2);return ee(I,0)})()+(()=>{let I=we(c,2);return ee(I,0)})()),b=ee(w,0);return ht(b)})()>r?o:ce(o,t+p,n+c,i))})}const yt=479;function xt(e,t){let n=Ae(t,_),r=Me(t,_);if(r===yt)return e;{let s=N(e,t),u=N(e,t+_),c=N(e,t+_-1),l=N(e,t+_+1);if(s===0)return e;if(u===0){let p=ce(e,n,r+1,s);return O(p,t,0)}else if(c===0&&n>0){let p=O(e,t+_-1,s);return O(p,t,0)}else if(l===0&&n<639){let p=O(e,t+_+1,s);return O(p,t,0)}else return e}}function vt(e,t){for(;;){let n=e,r=t;if(r===-1)return n;e=(()=>{let u=xt(n,r);return $t(u,r)})(),t=r-1}}function Et(e,t,n,r,i){return gt(s=>{let c=e?wt(s,t,n,r,i):s;return vt(c,bt*_)})}const F=[];function kt(e,t=g){let n;const r=new Set;function i(c){if(V(e,c)&&(e=c,n)){const l=!F.length;for(const o of r)o[1](),F.push(o,e);if(l){for(let o=0;o<F.length;o+=2)F[o][0](F[o+1]);F.length=0}}}function s(c){i(c(e))}function u(c,l=g){const o=[c,l];return r.add(o),r.size===1&&(n=t(i,s)||g),c(e),()=>{r.delete(o),r.size===0&&n&&(n(),n=null)}}return{set:i,update:s,subscribe:u}}const z=1;let d={lastFrameTime:performance.now(),currentFrameTime:performance.now(),mouseDown:!1,mouseX:0,mouseY:0,brushSize:10,brushColour:"#ff0000",autoTick:!0};const E=kt(d);E.subscribe(e=>{d=e});function ae(){Et(d.mouseDown,d.mouseX,d.mouseY,d.brushSize,parseInt(d.brushColour.substring(1),16)<<8|255),E.update(e=>({...e,lastFrameTime:e.currentFrameTime,currentFrameTime:performance.now()})),d.autoTick&&requestAnimationFrame(ae)}function It(){const e=document.getElementById("canvas");e.addEventListener("mousedown",t=>{d.mouseDown=!0,d.mouseX=Math.trunc(t.offsetX/z),d.mouseY=Math.trunc(t.offsetY/z)}),e.addEventListener("mouseup",()=>{d.mouseDown=!1}),e.addEventListener("mousemove",t=>{d.mouseX=Math.trunc(t.offsetX/z),d.mouseY=Math.trunc(t.offsetY/z)}),requestAnimationFrame(ae)}function Lt(e){let t,n,r,i,s,u,c,l,o,p,m,$,w,b,I,x,fe,S,K,pe;return{c(){t=h("div"),n=h("label"),r=A(`Brush size:
        `),i=h("input"),s=v(),u=h("label"),c=A(`Brush colour:
        `),l=h("input"),o=v(),p=h("button"),p.textContent="Insert noise",m=v(),$=h("button"),$.textContent="Clear canvas",w=v(),b=h("label"),I=A(`Auto tick:
        `),x=h("input"),fe=v(),S=h("button"),S.textContent="Tick frame",a(i,"class","rounded-md bg-slate-900 p-2 outline-none ring-teal-600 transition-all focus:ring-2"),a(i,"type","number"),a(i,"min","0"),a(i,"max","50"),a(i,"step","1"),a(n,"class","flex flex-row items-center justify-between"),a(l,"class","rounded-md bg-slate-900 p-2 outline-none ring-teal-600 transition-all focus:ring-2"),a(l,"type","color"),a(u,"class","flex flex-row items-center justify-between"),a(p,"class","rounded-md bg-teal-600 p-2 transition-colors hover:bg-teal-700"),a($,"class","rounded-md bg-teal-600 p-2 transition-colors hover:bg-teal-700"),a(x,"class","rounded-md bg-slate-900 p-2 outline-none ring-teal-600 transition-all focus:ring-2"),a(x,"type","checkbox"),a(b,"class","flex flex-row items-center justify-between"),a(S,"class","rounded-md bg-teal-600 p-2 transition-colors hover:bg-teal-700"),a(t,"class","grid grid-cols-2 gap-2 rounded-b-lg bg-slate-950 p-4")},m(y,D){Y(y,t,D),f(t,n),f(n,r),f(n,i),R(i,e[0].brushSize),f(t,s),f(t,u),f(u,c),f(u,l),R(l,e[0].brushColour),f(t,o),f(t,p),f(t,m),f(t,$),f(t,w),f(t,b),f(b,I),f(b,x),x.checked=e[0].autoTick,f(t,fe),f(t,S),K||(pe=[L(i,"input",e[1]),L(l,"input",e[2]),L(p,"click",Ct),L($,"click",Ft),L(x,"change",e[3]),L(S,"click",ae)],K=!0)},p(y,[D]){D&1&&Ce(i.value)!==y[0].brushSize&&R(i,y[0].brushSize),D&1&&R(l,y[0].brushColour),D&1&&(x.checked=y[0].autoTick)},i:g,o:g,d(y){y&&j(t),K=!1,q(pe)}}}function Ct(){const e=document.getElementById("canvas"),t=e.getContext("2d"),n=t.getImageData(0,0,e.width,e.height),r=[[255,0,0,0],[0,255,0],[0,0,255]];for(let i=0;i<n.data.length;i+=4){if(n.data[i+3])continue;const[s,u,c]=r[Math.floor(Math.random()*r.length)];n.data[i]=s,n.data[i+1]=u,n.data[i+2]=c,n.data[i+3]=255}t.putImageData(n,0,0)}function Ft(){const e=document.getElementById("canvas");e.getContext("2d").clearRect(0,0,e.width,e.height)}function Tt(e,t,n){let r;Le(e,E,c=>n(0,r=c));function i(){r.brushSize=Ce(this.value),E.set(r)}function s(){r.brushColour=this.value,E.set(r)}function u(){r.autoTick=this.checked,E.set(r)}return[r,i,s,u]}class Ot extends oe{constructor(t){super(),ue(this,t,Tt,Lt,V,{})}}function At(e){let t,n,r;return{c(){t=h("div"),n=A("FPS: "),r=A(e[0]),a(t,"class","absolute bottom-2 right-2 text-slate-500")},m(i,s){Y(i,t,s),f(t,n),f(t,r)},p(i,[s]){s&1&&ze(r,i[0])},i:g,o:g,d(i){i&&j(t)}}}const Mt=200;function St(e,t,n){let r;Le(e,E,u=>n(2,r=u));let i=0,s=performance.now();return e.$$.update=()=>{if(e.$$.dirty&6){const u=performance.now();u-s>Mt&&(n(1,s=u),n(0,i=Math.trunc(1e3/(r.currentFrameTime-r.lastFrameTime))))}},[i,s,r]}class Dt extends oe{constructor(t){super(),ue(this,t,St,At,V,{})}}function Nt(e){let t,n,r,i,s,u,c;return i=new Ot({}),u=new Dt({}),{c(){t=h("div"),n=h("canvas"),r=v(),$e(i.$$.fragment),s=v(),$e(u.$$.fragment),a(n,"class","scale h-[480px] w-full bg-black bg-opacity-25"),Xe(n,"image-rendering","pixelated"),a(n,"id","canvas"),a(n,"width","640"),a(n,"height","480"),a(t,"class","w-[640px]")},m(l,o){Y(l,t,o),f(t,n),f(t,r),ie(i,t,null),Y(l,s,o),ie(u,l,o),c=!0},p:g,i(l){c||(re(i.$$.fragment,l),re(u.$$.fragment,l),c=!0)},o(l){be(i.$$.fragment,l),be(u.$$.fragment,l),c=!1},d(l){l&&(j(t),j(s)),se(i),se(u,l)}}}function Bt(e){return Ve(()=>{It()}),[]}class jt extends oe{constructor(t){super(),ue(this,t,Bt,Nt,V,{})}}new jt({target:document.getElementById("app")});
