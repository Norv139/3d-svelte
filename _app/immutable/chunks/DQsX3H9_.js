var Pn=Array.isArray,zt=Array.prototype.indexOf,Cn=Array.from,Fn=Object.defineProperty,vt=Object.getOwnPropertyDescriptor,Jt=Object.getOwnPropertyDescriptors,qn=Object.prototype,Ln=Array.prototype,Qt=Object.getPrototypeOf;const Yn=()=>{};function Mn(t){return t()}function Et(t){for(var n=0;n<t.length;n++)t[n]()}const g=2,gt=4,J=8,ut=16,k=32,M=64,H=128,y=256,V=512,c=1024,D=2048,S=4096,I=8192,Q=16384,Xt=32768,mt=65536,jn=1<<17,tn=1<<19,Tt=1<<20,pt=Symbol("$state"),Bn=Symbol("legacy props"),Un=Symbol("");function xt(t){return t===this.v}function nn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function At(t){return!nn(t,this.v)}function rn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function en(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ln(t){throw new Error("https://svelte.dev/e/effect_orphan")}function an(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Hn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Vn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Gn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Kn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function sn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function un(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let X=!1;function Zn(){X=!0}const $n=1,Wn=2,zn=4,Jn=8,Qn=16,Xn=1,tr=2,fn="[",on="[!",_n="]",kt={},nr=Symbol();function Rt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let o=null;function ht(t){o=t}function rr(t,n=!1,r){o={p:o,c:null,e:null,m:!1,s:t,x:null,l:null},X&&!n&&(o.l={s:null,u:null,r1:[],r2:ft(!1)})}function er(t){const n=o;if(n!==null){const s=n.e;if(s!==null){var r=f,e=u;n.e=null;try{for(var l=0;l<s.length;l++){var a=s[l];$(a.effect),Z(a.reaction),qt(a.fn)}}finally{$(r),Z(e)}}o=n.p,n.m=!0}return{}}function tt(){return!X||o!==null&&o.l===null}function ft(t,n){var r={f:0,v:t,reactions:null,equals:xt,rv:0,wv:0};return r}function lr(t){return Dt(ft(t))}function cn(t,n=!1){var e;const r=ft(t);return n||(r.equals=At),X&&o!==null&&o.l!==null&&((e=o.l).s??(e.s=[])).push(r),r}function ar(t,n=!1){return Dt(cn(t,n))}function Dt(t){return u!==null&&!E&&(u.f&g)!==0&&(T===null?xn([t]):T.push(t)),t}function sr(t,n){return Ot(t,Wt(()=>_t(t))),n}function Ot(t,n){return u!==null&&!E&&tt()&&(u.f&(g|ut))!==0&&(T===null||!T.includes(t))&&un(),vn(t,n)}function vn(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Gt(),St(t,D),tt()&&f!==null&&(f.f&c)!==0&&(f.f&(k|M))===0&&(x===null?An([t]):x.push(t))),n}function St(t,n){var r=t.reactions;if(r!==null)for(var e=tt(),l=r.length,a=0;a<l;a++){var s=r[a],i=s.f;(i&D)===0&&(!e&&s===f||(m(s,n),(i&(c|y))!==0&&((i&g)!==0?St(s,S):et(s))))}}let b=!1;function ur(t){b=t}let A;function q(t){if(t===null)throw Rt(),kt;return A=t}function fr(){return q(N(A))}function or(t){if(b){if(N(A)!==null)throw Rt(),kt;A=t}}function ir(){for(var t=0,n=A;;){if(n.nodeType===8){var r=n.data;if(r===_n){if(t===0)return n;t-=1}else(r===fn||r===on)&&(t+=1)}var e=N(n);n.remove(),n=e}}var dt,pn,It,bt;function _r(){if(dt===void 0){dt=window,pn=/Firefox/.test(navigator.userAgent);var t=Element.prototype,n=Node.prototype;It=vt(n,"firstChild").get,bt=vt(n,"nextSibling").get,t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function lt(t=""){return document.createTextNode(t)}function at(t){return It.call(t)}function N(t){return bt.call(t)}function cr(t,n){if(!b)return at(t);var r=at(A);if(r===null)r=A.appendChild(lt());else if(n&&r.nodeType!==3){var e=lt();return r==null||r.before(e),q(e),e}return q(r),r}function vr(t,n){if(!b){var r=at(t);return r instanceof Comment&&r.data===""?N(r):r}return A}function pr(t,n=1,r=!1){let e=b?A:t;for(var l;n--;)l=e,e=N(e);if(!b)return e;var a=e==null?void 0:e.nodeType;if(r&&a!==3){var s=lt();return e===null?l==null||l.after(s):e.before(s),q(s),s}return q(e),e}function hr(t){t.textContent=""}function Nt(t){var n=g|D,r=u!==null&&(u.f&g)!==0?u:null;return f===null||r!==null&&(r.f&y)!==0?n|=y:f.f|=Tt,{ctx:o,deps:null,effects:null,equals:xt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??f}}function dr(t){const n=Nt(t);return n.equals=At,n}function Pt(t){var n=t.effects;if(n!==null){t.effects=null;for(var r=0;r<n.length;r+=1)O(n[r])}}function hn(t){for(var n=t.parent;n!==null;){if((n.f&g)===0)return n;n=n.parent}return null}function dn(t){var n,r=f;$(hn(t));try{Pt(t),n=Zt(t)}finally{$(r)}return n}function Ct(t){var n=dn(t),r=(R||(t.f&y)!==0)&&t.deps!==null?S:c;m(t,r),t.equals(n)||(t.v=n,t.wv=Gt())}function Ft(t){f===null&&u===null&&ln(),u!==null&&(u.f&y)!==0&&f===null&&en(),it&&rn()}function wn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function P(t,n,r,e=!0){var l=(t&M)!==0,a=f,s={ctx:o,deps:null,nodes_start:null,nodes_end:null,f:t|D,first:null,fn:n,last:null,next:null,parent:l?null:a,prev:null,teardown:null,transitions:null,wv:0};if(r)try{rt(s),s.f|=Xt}catch(w){throw O(s),w}else n!==null&&et(s);var i=r&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&(Tt|H))===0;if(!i&&!l&&e&&(a!==null&&wn(s,a),u!==null&&(u.f&g)!==0)){var _=u;(_.effects??(_.effects=[])).push(s)}return s}function wr(t){const n=P(J,null,!1);return m(n,c),n.teardown=t,n}function yr(t){Ft();var n=f!==null&&(f.f&k)!==0&&o!==null&&!o.m;if(n){var r=o;(r.e??(r.e=[])).push({fn:t,effect:f,reaction:u})}else{var e=qt(t);return e}}function Er(t){return Ft(),ot(t)}function gr(t){const n=P(M,t,!0);return(r={})=>new Promise(e=>{r.outro?gn(n,()=>{O(n),e(void 0)}):(O(n),e(void 0))})}function qt(t){return P(gt,t,!1)}function mr(t,n){var r=o,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=ot(()=>{t(),!e.ran&&(e.ran=!0,Ot(r.l.r2,!0),Wt(n))})}function Tr(){var t=o;ot(()=>{if(_t(t.l.r2)){for(var n of t.l.r1){var r=n.effect;(r.f&c)!==0&&m(r,S),C(r)&&rt(r),n.ran=!1}t.l.r2.v=!1}})}function ot(t){return P(J,t,!0)}function xr(t,n=[],r=Nt){const e=n.map(r);return yn(()=>t(...e.map(_t)))}function yn(t,n=0){return P(J|ut|n,t,!0)}function Ar(t,n=!0){return P(J|k,t,!0,n)}function Lt(t){var n=t.teardown;if(n!==null){const r=it,e=u;yt(!0),Z(null);try{n.call(null)}finally{yt(r),Z(e)}}}function Yt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;O(r,n),r=e}}function En(t){for(var n=t.first;n!==null;){var r=n.next;(n.f&k)===0&&O(n),n=r}}function O(t,n=!0){var r=!1;if((n||(t.f&tn)!==0)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var a=e===l?null:N(e);e.remove(),e=a}r=!0}Yt(t,n&&!r),z(t,0),m(t,Q);var s=t.transitions;if(s!==null)for(const _ of s)_.stop();Lt(t);var i=t.parent;i!==null&&i.first!==null&&Mt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Mt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function gn(t,n){var r=[];jt(t,r,!0),mn(r,()=>{O(t),n&&n()})}function mn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function jt(t,n,r){if((t.f&I)===0){if(t.f^=I,t.transitions!==null)for(const s of t.transitions)(s.is_global||r)&&n.push(s);for(var e=t.first;e!==null;){var l=e.next,a=(e.f&mt)!==0||(e.f&k)!==0;jt(e,n,a?r:!1),e=l}}}function kr(t){Bt(t,!0)}function Bt(t,n){if((t.f&I)!==0){t.f^=I,(t.f&c)===0&&(t.f^=c),C(t)&&(m(t,D),et(t));for(var r=t.first;r!==null;){var e=r.next,l=(r.f&mt)!==0||(r.f&k)!==0;Bt(r,l?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}const Tn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let L=[],Y=[];function Ut(){var t=L;L=[],Et(t)}function Ht(){var t=Y;Y=[],Et(t)}function Rr(t){L.length===0&&queueMicrotask(Ut),L.push(t)}function Dr(t){Y.length===0&&Tn(Ht),Y.push(t)}function wt(){L.length>0&&Ut(),Y.length>0&&Ht()}let B=!1,G=!1,K=null,U=!1,it=!1;function yt(t){it=t}let F=[];let u=null,E=!1;function Z(t){u=t}let f=null;function $(t){f=t}let T=null;function xn(t){T=t}let v=null,d=0,x=null;function An(t){x=t}let Vt=1,W=0,R=!1;function Gt(){return++Vt}function C(t){var p;var n=t.f;if((n&D)!==0)return!0;if((n&S)!==0){var r=t.deps,e=(n&y)!==0;if(r!==null){var l,a,s=(n&V)!==0,i=e&&f!==null&&!R,_=r.length;if(s||i){var w=t,j=w.parent;for(l=0;l<_;l++)a=r[l],(s||!((p=a==null?void 0:a.reactions)!=null&&p.includes(w)))&&(a.reactions??(a.reactions=[])).push(w);s&&(w.f^=V),i&&j!==null&&(j.f&y)===0&&(w.f^=y)}for(l=0;l<_;l++)if(a=r[l],C(a)&&Ct(a),a.wv>t.wv)return!0}(!e||f!==null&&!R)&&m(t,c)}return!1}function kn(t,n){for(var r=n;r!==null;){if((r.f&H)!==0)try{r.fn(t);return}catch{r.f^=H}r=r.parent}throw B=!1,t}function Rn(t){return(t.f&Q)===0&&(t.parent===null||(t.parent.f&H)===0)}function nt(t,n,r,e){if(B){if(r===null&&(B=!1),Rn(n))throw t;return}r!==null&&(B=!0);{kn(t,n);return}}function Kt(t,n,r=!0){var e=t.reactions;if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];(a.f&g)!==0?Kt(a,n,!1):n===a&&(r?m(a,D):(a.f&c)!==0&&m(a,S),et(a))}}function Zt(t){var ct;var n=v,r=d,e=x,l=u,a=R,s=T,i=o,_=E,w=t.f;v=null,d=0,x=null,R=(w&y)!==0&&(E||!U||u===null),u=(w&(k|M))===0?t:null,T=null,ht(t.ctx),E=!1,W++;try{var j=(0,t.fn)(),p=t.deps;if(v!==null){var h;if(z(t,d),p!==null&&d>0)for(p.length=d+v.length,h=0;h<v.length;h++)p[d+h]=v[h];else t.deps=p=v;if(!R)for(h=d;h<p.length;h++)((ct=p[h]).reactions??(ct.reactions=[])).push(t)}else p!==null&&d<p.length&&(z(t,d),p.length=d);if(tt()&&x!==null&&!E&&p!==null&&(t.f&(g|S|D))===0)for(h=0;h<x.length;h++)Kt(x[h],t);return l!==null&&W++,j}finally{v=n,d=r,x=e,u=l,R=a,T=s,ht(i),E=_}}function Dn(t,n){let r=n.reactions;if(r!==null){var e=zt.call(r,t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&(n.f&g)!==0&&(v===null||!v.includes(n))&&(m(n,S),(n.f&(y|V))===0&&(n.f^=V),Pt(n),z(n,0))}function z(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Dn(t,r[e])}function rt(t){var n=t.f;if((n&Q)===0){m(t,c);var r=f,e=o,l=U;f=t,U=!0;try{(n&ut)!==0?En(t):Yt(t),Lt(t);var a=Zt(t);t.teardown=typeof a=="function"?a:null,t.wv=Vt;var s=t.deps,i}catch(_){nt(_,t,r,e||t.ctx)}finally{U=l,f=r}}}function On(){try{an()}catch(t){if(K!==null)nt(t,K,null);else throw t}}function $t(){try{for(var t=0;F.length>0;){t++>1e3&&On();var n=F,r=n.length;F=[];for(var e=0;e<r;e++){var l=n[e];(l.f&c)===0&&(l.f^=c);var a=In(l);Sn(a)}}}finally{G=!1,K=null}}function Sn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if((e.f&(Q|I))===0)try{C(e)&&(rt(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Mt(e):e.fn=null))}catch(l){nt(l,e,null,e.ctx)}}}function et(t){G||(G=!0,queueMicrotask($t));for(var n=K=t;n.parent!==null;){n=n.parent;var r=n.f;if((r&(M|k))!==0){if((r&c)===0)return;n.f^=c}}F.push(n)}function In(t){for(var n=[],r=t.first;r!==null;){var e=r.f,l=(e&k)!==0,a=l&&(e&c)!==0;if(!a&&(e&I)===0){if((e&gt)!==0)n.push(r);else if(l)r.f^=c;else{var s=u;try{u=r,C(r)&&rt(r)}catch(w){nt(w,r,null,r.ctx)}finally{u=s}}var i=r.first;if(i!==null){r=i;continue}}var _=r.parent;for(r=r.next;r===null&&_!==null;)r=_.next,_=_.parent}return n}function bn(t){var n;for(wt();F.length>0;)G=!0,$t(),wt();return n}async function Or(){await Promise.resolve(),bn()}function _t(t){var n=t.f,r=(n&g)!==0;if(u!==null&&!E){T!==null&&T.includes(t)&&sn();var e=u.deps;t.rv<W&&(t.rv=W,v===null&&e!==null&&e[d]===t?d++:v===null?v=[t]:(!R||!v.includes(t))&&v.push(t))}else if(r&&t.deps===null&&t.effects===null){var l=t,a=l.parent;a!==null&&(a.f&y)===0&&(l.f^=y)}return r&&(l=t,C(l)&&Ct(l)),t.v}function Wt(t){var n=E;try{return E=!0,t()}finally{E=n}}const Nn=-7169;function m(t,n){t.f=t.f&Nn|n}function Sr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(pt in t)st(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&pt in r&&st(r)}}}function st(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{st(t[e],n)}catch{}const r=Qt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Jt(r);for(let l in e){const a=e[l].get;if(a)try{a.call(t)}catch{}}}}}export{_n as $,O as A,vr as B,rr as C,xr as D,mt as E,er as F,cr as G,fn as H,or as I,pr as J,lt as K,at as L,pn as M,f as N,tr as O,Z as P,$ as Q,u as R,pt as S,Xn as T,nr as U,wr as V,Fn as W,Pn as X,_r as Y,N as Z,kt as _,fr as a,Rt as a0,Hn as a1,hr as a2,Cn as a3,gr as a4,qn as a5,Ln as a6,ft as a7,Kn as a8,Ot as a9,vt as aa,Gn as ab,Qt as ac,Vn as ad,jn as ae,dr as af,zn as ag,At as ah,cn as ai,Jn as aj,Bn as ak,Wn as al,$n as am,Qn as an,bn as ao,lr as ap,Or as aq,Dr as ar,Un as as,tt as at,mr as au,Tr as av,ar as aw,sr as ax,nn as ay,yn as b,on as c,ur as d,kr as e,Ar as f,A as g,b as h,qt as i,ot as j,o as k,Er as l,yr as m,Et as n,Mn as o,gn as p,Rr as q,ir as r,q as s,_t as t,Wt as u,Sr as v,Nt as w,Zn as x,X as y,Yn as z};
