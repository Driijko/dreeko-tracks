(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function f(){}function z(e){return e()}function N(){return Object.create(null)}function m(e){e.forEach(z)}function q(e){return typeof e=="function"}function A(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function M(e){return Object.keys(e).length===0}function F(e,...t){if(e==null)return f;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function H(e,t,n){e.$$.on_destroy.push(F(t,n))}function L(e,t){e.appendChild(t)}function K(e,t,n){e.insertBefore(t,n||null)}function B(e){e.parentNode&&e.parentNode.removeChild(e)}function S(e){return document.createElement(e)}function R(e){return document.createTextNode(e)}function T(e){return Array.from(e.childNodes)}function W(e,t){t=""+t,e.data!==t&&(e.data=t)}let x;function b(e){x=e}const p=[],P=[];let _=[];const j=[],D=Promise.resolve();let y=!1;function G(){y||(y=!0,D.then(C))}function $(e){_.push(e)}const g=new Set;let d=0;function C(){if(d!==0)return;const e=x;do{try{for(;d<p.length;){const t=p[d];d++,b(t),J(t.$$)}}catch(t){throw p.length=0,d=0,t}for(b(null),p.length=0,d=0;P.length;)P.pop()();for(let t=0;t<_.length;t+=1){const n=_[t];g.has(n)||(g.add(n),n())}_.length=0}while(p.length);for(;j.length;)j.pop()();y=!1,g.clear(),b(e)}function J(e){if(e.fragment!==null){e.update(),m(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach($)}}function Q(e){const t=[],n=[];_.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),_=t}const U=new Set;function V(e,t){e&&e.i&&(U.delete(e),e.i(t))}function X(e,t,n,o){const{fragment:r,after_update:s}=e.$$;r&&r.m(t,n),o||$(()=>{const c=e.$$.on_mount.map(z).filter(q);e.$$.on_destroy?e.$$.on_destroy.push(...c):m(c),e.$$.on_mount=[]}),s.forEach($)}function Y(e,t){const n=e.$$;n.fragment!==null&&(Q(n.after_update),m(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Z(e,t){e.$$.dirty[0]===-1&&(p.push(e),G(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ee(e,t,n,o,r,s,c,u=[-1]){const l=x;b(e);const i=e.$$={fragment:null,ctx:[],props:s,update:f,not_equal:r,bound:N(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:N(),dirty:u,skip_bound:!1,root:t.target||l.$$.root};c&&c(i.root);let k=!1;if(i.ctx=n?n(e,t.props||{},(a,E,...O)=>{const v=O.length?O[0]:E;return i.ctx&&r(i.ctx[a],i.ctx[a]=v)&&(!i.skip_bound&&i.bound[a]&&i.bound[a](v),k&&Z(e,a)),E}):[],i.update(),k=!0,m(i.before_update),i.fragment=o?o(i.ctx):!1,t.target){if(t.hydrate){const a=T(t.target);i.fragment&&i.fragment.l(a),a.forEach(B)}else i.fragment&&i.fragment.c();t.intro&&V(e.$$.fragment),X(e,t.target,t.anchor,t.customElement),C()}b(l)}class te{$destroy(){Y(this,1),this.$destroy=f}$on(t,n){if(!q(n))return f;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!M(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const h=[];function ne(e,t=f){let n;const o=new Set;function r(u){if(A(e,u)&&(e=u,n)){const l=!h.length;for(const i of o)i[1](),h.push(i,e);if(l){for(let i=0;i<h.length;i+=2)h[i][0](h[i+1]);h.length=0}}}function s(u){r(u(e))}function c(u,l=f){const i=[u,l];return o.add(i),o.size===1&&(n=t(r)||f),u(e),()=>{o.delete(i),o.size===0&&n&&(n(),n=null)}}return{set:r,update:s,subscribe:c}}const w=ne("mobile");function I(){window.innerWidth<=window.innerHeight?w.set("mobile"):w.set("desktop")}function re(){window.addEventListener("resize",()=>{I()})}function oe(){I(),re()}function ie(e){let t,n,o;return{c(){t=S("main"),n=S("div"),o=R(e[0])},m(r,s){K(r,t,s),L(t,n),L(n,o)},p(r,[s]){s&1&&W(o,r[0])},i:f,o:f,d(r){r&&B(t)}}}function se(e,t,n){let o;return H(e,w,r=>n(0,o=r)),oe(),[o]}class ce extends te{constructor(t){super(),ee(this,t,se,ie,A,{})}}new ce({target:document.getElementById("app")});
