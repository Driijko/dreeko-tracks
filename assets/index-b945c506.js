(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(r){if(r.ep)return;r.ep=!0;const c=n(r);fetch(r.href,c)}})();function a(){}function A(e){return e()}function w(){return Object.create(null)}function p(e){e.forEach(A)}function L(e){return typeof e=="function"}function j(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function C(e){return Object.keys(e).length===0}function K(e,t,n){e.insertBefore(t,n||null)}function N(e){e.parentNode&&e.parentNode.removeChild(e)}function M(e){return document.createElement(e)}function B(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function I(e){return Array.from(e.childNodes)}let $;function h(e){$=e}const u=[],O=[];let d=[];const k=[],R=Promise.resolve();let g=!1;function T(){g||(g=!0,R.then(P))}function y(e){d.push(e)}const m=new Set;let f=0;function P(){if(f!==0)return;const e=$;do{try{for(;f<u.length;){const t=u[f];f++,h(t),q(t.$$)}}catch(t){throw u.length=0,f=0,t}for(h(null),u.length=0,f=0;O.length;)O.pop()();for(let t=0;t<d.length;t+=1){const n=d[t];m.has(n)||(m.add(n),n())}d.length=0}while(u.length);for(;k.length;)k.pop()();g=!1,m.clear(),h(e)}function q(e){if(e.fragment!==null){e.update(),p(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(y)}}function D(e){const t=[],n=[];d.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),d=t}const F=new Set;function H(e,t){e&&e.i&&(F.delete(e),e.i(t))}function z(e,t,n,o){const{fragment:r,after_update:c}=e.$$;r&&r.m(t,n),o||y(()=>{const i=e.$$.on_mount.map(A).filter(L);e.$$.on_destroy?e.$$.on_destroy.push(...i):p(i),e.$$.on_mount=[]}),c.forEach(y)}function G(e,t){const n=e.$$;n.fragment!==null&&(D(n.after_update),p(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function J(e,t){e.$$.dirty[0]===-1&&(u.push(e),T(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Q(e,t,n,o,r,c,i,S=[-1]){const _=$;h(e);const s=e.$$={fragment:null,ctx:[],props:c,update:a,not_equal:r,bound:w(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(_?_.$$.context:[])),callbacks:w(),dirty:S,skip_bound:!1,root:t.target||_.$$.root};i&&i(s.root);let b=!1;if(s.ctx=n?n(e,t.props||{},(l,x,...v)=>{const E=v.length?v[0]:x;return s.ctx&&r(s.ctx[l],s.ctx[l]=E)&&(!s.skip_bound&&s.bound[l]&&s.bound[l](E),b&&J(e,l)),x}):[],s.update(),b=!0,p(s.before_update),s.fragment=o?o(s.ctx):!1,t.target){if(t.hydrate){const l=I(t.target);s.fragment&&s.fragment.l(l),l.forEach(N)}else s.fragment&&s.fragment.c();t.intro&&H(e.$$.fragment),z(e,t.target,t.anchor,t.customElement),P()}h(_)}class U{$destroy(){G(this,1),this.$destroy=a}$on(t,n){if(!L(n))return a;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!C(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function V(e){let t;return{c(){t=M("main"),t.innerHTML='<div id="logo" class="svelte-a3ki2o">DREEKO<br/> TRACKS</div>',B(t,"class","svelte-a3ki2o")},m(n,o){K(n,t,o)},p:a,i:a,o:a,d(n){n&&N(t)}}}class W extends U{constructor(t){super(),Q(this,t,null,V,j,{})}}new W({target:document.getElementById("app")});
