(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();var Wh={exports:{}},_a={},qh={exports:{}},Se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rm;function j0(){if(Rm)return Se;Rm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),S=Symbol.iterator;function R(L){return L===null||typeof L!="object"?null:(L=S&&L[S]||L["@@iterator"],typeof L=="function"?L:null)}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,j={};function $(L,q,he){this.props=L,this.context=q,this.refs=j,this.updater=he||F}$.prototype.isReactComponent={},$.prototype.setState=function(L,q){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,q,"setState")},$.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function G(){}G.prototype=$.prototype;function J(L,q,he){this.props=L,this.context=q,this.refs=j,this.updater=he||F}var ie=J.prototype=new G;ie.constructor=J,U(ie,$.prototype),ie.isPureReactComponent=!0;var de=Array.isArray,Ce=Object.prototype.hasOwnProperty,ve={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function T(L,q,he){var Ee,Ie={},Ne=null,Me=null;if(q!=null)for(Ee in q.ref!==void 0&&(Me=q.ref),q.key!==void 0&&(Ne=""+q.key),q)Ce.call(q,Ee)&&!N.hasOwnProperty(Ee)&&(Ie[Ee]=q[Ee]);var Ve=arguments.length-2;if(Ve===1)Ie.children=he;else if(1<Ve){for(var Be=Array(Ve),ft=0;ft<Ve;ft++)Be[ft]=arguments[ft+2];Ie.children=Be}if(L&&L.defaultProps)for(Ee in Ve=L.defaultProps,Ve)Ie[Ee]===void 0&&(Ie[Ee]=Ve[Ee]);return{$$typeof:r,type:L,key:Ne,ref:Me,props:Ie,_owner:ve.current}}function C(L,q){return{$$typeof:r,type:L.type,key:q,ref:L.ref,props:L.props,_owner:L._owner}}function P(L){return typeof L=="object"&&L!==null&&L.$$typeof===r}function D(L){var q={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(he){return q[he]})}var O=/\/+/g;function A(L,q){return typeof L=="object"&&L!==null&&L.key!=null?D(""+L.key):q.toString(36)}function nt(L,q,he,Ee,Ie){var Ne=typeof L;(Ne==="undefined"||Ne==="boolean")&&(L=null);var Me=!1;if(L===null)Me=!0;else switch(Ne){case"string":case"number":Me=!0;break;case"object":switch(L.$$typeof){case r:case e:Me=!0}}if(Me)return Me=L,Ie=Ie(Me),L=Ee===""?"."+A(Me,0):Ee,de(Ie)?(he="",L!=null&&(he=L.replace(O,"$&/")+"/"),nt(Ie,q,he,"",function(ft){return ft})):Ie!=null&&(P(Ie)&&(Ie=C(Ie,he+(!Ie.key||Me&&Me.key===Ie.key?"":(""+Ie.key).replace(O,"$&/")+"/")+L)),q.push(Ie)),1;if(Me=0,Ee=Ee===""?".":Ee+":",de(L))for(var Ve=0;Ve<L.length;Ve++){Ne=L[Ve];var Be=Ee+A(Ne,Ve);Me+=nt(Ne,q,he,Be,Ie)}else if(Be=R(L),typeof Be=="function")for(L=Be.call(L),Ve=0;!(Ne=L.next()).done;)Ne=Ne.value,Be=Ee+A(Ne,Ve++),Me+=nt(Ne,q,he,Be,Ie);else if(Ne==="object")throw q=String(L),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return Me}function Pt(L,q,he){if(L==null)return L;var Ee=[],Ie=0;return nt(L,Ee,"","",function(Ne){return q.call(he,Ne,Ie++)}),Ee}function Nt(L){if(L._status===-1){var q=L._result;q=q(),q.then(function(he){(L._status===0||L._status===-1)&&(L._status=1,L._result=he)},function(he){(L._status===0||L._status===-1)&&(L._status=2,L._result=he)}),L._status===-1&&(L._status=0,L._result=q)}if(L._status===1)return L._result.default;throw L._result}var Ue={current:null},ne={transition:null},fe={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:ne,ReactCurrentOwner:ve};function se(){throw Error("act(...) is not supported in production builds of React.")}return Se.Children={map:Pt,forEach:function(L,q,he){Pt(L,function(){q.apply(this,arguments)},he)},count:function(L){var q=0;return Pt(L,function(){q++}),q},toArray:function(L){return Pt(L,function(q){return q})||[]},only:function(L){if(!P(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},Se.Component=$,Se.Fragment=t,Se.Profiler=o,Se.PureComponent=J,Se.StrictMode=s,Se.Suspense=g,Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,Se.act=se,Se.cloneElement=function(L,q,he){if(L==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+L+".");var Ee=U({},L.props),Ie=L.key,Ne=L.ref,Me=L._owner;if(q!=null){if(q.ref!==void 0&&(Ne=q.ref,Me=ve.current),q.key!==void 0&&(Ie=""+q.key),L.type&&L.type.defaultProps)var Ve=L.type.defaultProps;for(Be in q)Ce.call(q,Be)&&!N.hasOwnProperty(Be)&&(Ee[Be]=q[Be]===void 0&&Ve!==void 0?Ve[Be]:q[Be])}var Be=arguments.length-2;if(Be===1)Ee.children=he;else if(1<Be){Ve=Array(Be);for(var ft=0;ft<Be;ft++)Ve[ft]=arguments[ft+2];Ee.children=Ve}return{$$typeof:r,type:L.type,key:Ie,ref:Ne,props:Ee,_owner:Me}},Se.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},L.Provider={$$typeof:u,_context:L},L.Consumer=L},Se.createElement=T,Se.createFactory=function(L){var q=T.bind(null,L);return q.type=L,q},Se.createRef=function(){return{current:null}},Se.forwardRef=function(L){return{$$typeof:p,render:L}},Se.isValidElement=P,Se.lazy=function(L){return{$$typeof:E,_payload:{_status:-1,_result:L},_init:Nt}},Se.memo=function(L,q){return{$$typeof:_,type:L,compare:q===void 0?null:q}},Se.startTransition=function(L){var q=ne.transition;ne.transition={};try{L()}finally{ne.transition=q}},Se.unstable_act=se,Se.useCallback=function(L,q){return Ue.current.useCallback(L,q)},Se.useContext=function(L){return Ue.current.useContext(L)},Se.useDebugValue=function(){},Se.useDeferredValue=function(L){return Ue.current.useDeferredValue(L)},Se.useEffect=function(L,q){return Ue.current.useEffect(L,q)},Se.useId=function(){return Ue.current.useId()},Se.useImperativeHandle=function(L,q,he){return Ue.current.useImperativeHandle(L,q,he)},Se.useInsertionEffect=function(L,q){return Ue.current.useInsertionEffect(L,q)},Se.useLayoutEffect=function(L,q){return Ue.current.useLayoutEffect(L,q)},Se.useMemo=function(L,q){return Ue.current.useMemo(L,q)},Se.useReducer=function(L,q,he){return Ue.current.useReducer(L,q,he)},Se.useRef=function(L){return Ue.current.useRef(L)},Se.useState=function(L){return Ue.current.useState(L)},Se.useSyncExternalStore=function(L,q,he){return Ue.current.useSyncExternalStore(L,q,he)},Se.useTransition=function(){return Ue.current.useTransition()},Se.version="18.3.1",Se}var km;function Dd(){return km||(km=1,qh.exports=j0()),qh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pm;function B0(){if(Pm)return _a;Pm=1;var r=Dd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(p,g,_){var E,S={},R=null,F=null;_!==void 0&&(R=""+_),g.key!==void 0&&(R=""+g.key),g.ref!==void 0&&(F=g.ref);for(E in g)s.call(g,E)&&!u.hasOwnProperty(E)&&(S[E]=g[E]);if(p&&p.defaultProps)for(E in g=p.defaultProps,g)S[E]===void 0&&(S[E]=g[E]);return{$$typeof:e,type:p,key:R,ref:F,props:S,_owner:o.current}}return _a.Fragment=t,_a.jsx=h,_a.jsxs=h,_a}var Nm;function $0(){return Nm||(Nm=1,Wh.exports=B0()),Wh.exports}var H=$0(),W=Dd(),pu={},Kh={exports:{}},Yt={},Gh={exports:{}},Qh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xm;function z0(){return xm||(xm=1,function(r){function e(ne,fe){var se=ne.length;ne.push(fe);e:for(;0<se;){var L=se-1>>>1,q=ne[L];if(0<o(q,fe))ne[L]=fe,ne[se]=q,se=L;else break e}}function t(ne){return ne.length===0?null:ne[0]}function s(ne){if(ne.length===0)return null;var fe=ne[0],se=ne.pop();if(se!==fe){ne[0]=se;e:for(var L=0,q=ne.length,he=q>>>1;L<he;){var Ee=2*(L+1)-1,Ie=ne[Ee],Ne=Ee+1,Me=ne[Ne];if(0>o(Ie,se))Ne<q&&0>o(Me,Ie)?(ne[L]=Me,ne[Ne]=se,L=Ne):(ne[L]=Ie,ne[Ee]=se,L=Ee);else if(Ne<q&&0>o(Me,se))ne[L]=Me,ne[Ne]=se,L=Ne;else break e}}return fe}function o(ne,fe){var se=ne.sortIndex-fe.sortIndex;return se!==0?se:ne.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var h=Date,p=h.now();r.unstable_now=function(){return h.now()-p}}var g=[],_=[],E=1,S=null,R=3,F=!1,U=!1,j=!1,$=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,J=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ie(ne){for(var fe=t(_);fe!==null;){if(fe.callback===null)s(_);else if(fe.startTime<=ne)s(_),fe.sortIndex=fe.expirationTime,e(g,fe);else break;fe=t(_)}}function de(ne){if(j=!1,ie(ne),!U)if(t(g)!==null)U=!0,Nt(Ce);else{var fe=t(_);fe!==null&&Ue(de,fe.startTime-ne)}}function Ce(ne,fe){U=!1,j&&(j=!1,G(T),T=-1),F=!0;var se=R;try{for(ie(fe),S=t(g);S!==null&&(!(S.expirationTime>fe)||ne&&!D());){var L=S.callback;if(typeof L=="function"){S.callback=null,R=S.priorityLevel;var q=L(S.expirationTime<=fe);fe=r.unstable_now(),typeof q=="function"?S.callback=q:S===t(g)&&s(g),ie(fe)}else s(g);S=t(g)}if(S!==null)var he=!0;else{var Ee=t(_);Ee!==null&&Ue(de,Ee.startTime-fe),he=!1}return he}finally{S=null,R=se,F=!1}}var ve=!1,N=null,T=-1,C=5,P=-1;function D(){return!(r.unstable_now()-P<C)}function O(){if(N!==null){var ne=r.unstable_now();P=ne;var fe=!0;try{fe=N(!0,ne)}finally{fe?A():(ve=!1,N=null)}}else ve=!1}var A;if(typeof J=="function")A=function(){J(O)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,Pt=nt.port2;nt.port1.onmessage=O,A=function(){Pt.postMessage(null)}}else A=function(){$(O,0)};function Nt(ne){N=ne,ve||(ve=!0,A())}function Ue(ne,fe){T=$(function(){ne(r.unstable_now())},fe)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(ne){ne.callback=null},r.unstable_continueExecution=function(){U||F||(U=!0,Nt(Ce))},r.unstable_forceFrameRate=function(ne){0>ne||125<ne?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<ne?Math.floor(1e3/ne):5},r.unstable_getCurrentPriorityLevel=function(){return R},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(ne){switch(R){case 1:case 2:case 3:var fe=3;break;default:fe=R}var se=R;R=fe;try{return ne()}finally{R=se}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(ne,fe){switch(ne){case 1:case 2:case 3:case 4:case 5:break;default:ne=3}var se=R;R=ne;try{return fe()}finally{R=se}},r.unstable_scheduleCallback=function(ne,fe,se){var L=r.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?L+se:L):se=L,ne){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=se+q,ne={id:E++,callback:fe,priorityLevel:ne,startTime:se,expirationTime:q,sortIndex:-1},se>L?(ne.sortIndex=se,e(_,ne),t(g)===null&&ne===t(_)&&(j?(G(T),T=-1):j=!0,Ue(de,se-L))):(ne.sortIndex=q,e(g,ne),U||F||(U=!0,Nt(Ce))),ne},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(ne){var fe=R;return function(){var se=R;R=fe;try{return ne.apply(this,arguments)}finally{R=se}}}}(Qh)),Qh}var Dm;function H0(){return Dm||(Dm=1,Gh.exports=z0()),Gh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lm;function W0(){if(Lm)return Yt;Lm=1;var r=Dd(),e=H0();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},S={};function R(n){return g.call(S,n)?!0:g.call(E,n)?!1:_.test(n)?S[n]=!0:(E[n]=!0,!1)}function F(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function U(n,i,a,c){if(i===null||typeof i>"u"||F(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function j(n,i,a,c,d,m,v){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=v}var $={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){$[n]=new j(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];$[i]=new j(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){$[n]=new j(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){$[n]=new j(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){$[n]=new j(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){$[n]=new j(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){$[n]=new j(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){$[n]=new j(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){$[n]=new j(n,5,!1,n.toLowerCase(),null,!1,!1)});var G=/[\-:]([a-z])/g;function J(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(G,J);$[i]=new j(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(G,J);$[i]=new j(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(G,J);$[i]=new j(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){$[n]=new j(n,1,!1,n.toLowerCase(),null,!1,!1)}),$.xlinkHref=new j("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){$[n]=new j(n,1,!1,n.toLowerCase(),null,!0,!0)});function ie(n,i,a,c){var d=$.hasOwnProperty(i)?$[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(U(i,a,d,c)&&(a=null),c||d===null?R(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var de=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ce=Symbol.for("react.element"),ve=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),D=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),nt=Symbol.for("react.suspense_list"),Pt=Symbol.for("react.memo"),Nt=Symbol.for("react.lazy"),Ue=Symbol.for("react.offscreen"),ne=Symbol.iterator;function fe(n){return n===null||typeof n!="object"?null:(n=ne&&n[ne]||n["@@iterator"],typeof n=="function"?n:null)}var se=Object.assign,L;function q(n){if(L===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);L=i&&i[1]||""}return`
`+L+n}var he=!1;function Ee(n,i){if(!n||he)return"";he=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(B){var c=B}Reflect.construct(n,[],i)}else{try{i.call()}catch(B){c=B}n.call(i.prototype)}else{try{throw Error()}catch(B){c=B}n()}}catch(B){if(B&&c&&typeof B.stack=="string"){for(var d=B.stack.split(`
`),m=c.stack.split(`
`),v=d.length-1,I=m.length-1;1<=v&&0<=I&&d[v]!==m[I];)I--;for(;1<=v&&0<=I;v--,I--)if(d[v]!==m[I]){if(v!==1||I!==1)do if(v--,I--,0>I||d[v]!==m[I]){var k=`
`+d[v].replace(" at new "," at ");return n.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",n.displayName)),k}while(1<=v&&0<=I);break}}}finally{he=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?q(n):""}function Ie(n){switch(n.tag){case 5:return q(n.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return n=Ee(n.type,!1),n;case 11:return n=Ee(n.type.render,!1),n;case 1:return n=Ee(n.type,!0),n;default:return""}}function Ne(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case ve:return"Portal";case C:return"Profiler";case T:return"StrictMode";case A:return"Suspense";case nt:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case D:return(n.displayName||"Context")+".Consumer";case P:return(n._context.displayName||"Context")+".Provider";case O:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Pt:return i=n.displayName||null,i!==null?i:Ne(n.type)||"Memo";case Nt:i=n._payload,n=n._init;try{return Ne(n(i))}catch{}}return null}function Me(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ne(i);case 8:return i===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ve(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Be(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ft(n){var i=Be(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,m.call(this,v)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function ar(n){n._valueTracker||(n._valueTracker=ft(n))}function fs(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Be(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function br(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ei(n,i){var a=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function ps(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Ve(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function So(n,i){i=i.checked,i!=null&&ie(n,"checked",i,!1)}function Co(n,i){So(n,i);var a=Ve(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?ms(n,i.type,a):i.hasOwnProperty("defaultValue")&&ms(n,i.type,Ve(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Za(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ms(n,i,a){(i!=="number"||br(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var lr=Array.isArray;function ur(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Ve(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Ao(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function gs(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(lr(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Ve(a)}}function ys(n,i){var a=Ve(i.value),c=Ve(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Ro(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function lt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ut(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?lt(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var cr,ko=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(cr=cr||document.createElement("div"),cr.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=cr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Fr(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ti={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ii=["Webkit","ms","Moz","O"];Object.keys(Ti).forEach(function(n){Ii.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ti[i]=Ti[n]})});function Po(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ti.hasOwnProperty(n)&&Ti[n]?(""+i).trim():i+"px"}function No(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Po(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var xo=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Do(n,i){if(i){if(xo[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Lo(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Si=null;function _s(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var vs=null,cn=null,$n=null;function ws(n){if(n=ra(n)){if(typeof vs!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Pl(i),vs(n.stateNode,n.type,i))}}function zn(n){cn?$n?$n.push(n):$n=[n]:cn=n}function Oo(){if(cn){var n=cn,i=$n;if($n=cn=null,ws(n),i)for(n=0;n<i.length;n++)ws(i[n])}}function Ci(n,i){return n(i)}function Mo(){}var hr=!1;function Vo(n,i,a){if(hr)return n(i,a);hr=!0;try{return Ci(n,i,a)}finally{hr=!1,(cn!==null||$n!==null)&&(Mo(),Oo())}}function rt(n,i){var a=n.stateNode;if(a===null)return null;var c=Pl(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Es=!1;if(p)try{var En={};Object.defineProperty(En,"passive",{get:function(){Es=!0}}),window.addEventListener("test",En,En),window.removeEventListener("test",En,En)}catch{Es=!1}function Ai(n,i,a,c,d,m,v,I,k){var B=Array.prototype.slice.call(arguments,3);try{i.apply(a,B)}catch(X){this.onError(X)}}var Ri=!1,Ts=null,Tn=!1,bo=null,vc={onError:function(n){Ri=!0,Ts=n}};function Is(n,i,a,c,d,m,v,I,k){Ri=!1,Ts=null,Ai.apply(vc,arguments)}function el(n,i,a,c,d,m,v,I,k){if(Is.apply(this,arguments),Ri){if(Ri){var B=Ts;Ri=!1,Ts=null}else throw Error(t(198));Tn||(Tn=!0,bo=B)}}function In(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,i.flags&4098&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function ki(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Sn(n){if(In(n)!==n)throw Error(t(188))}function tl(n){var i=n.alternate;if(!i){if(i=In(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return Sn(d),n;if(m===c)return Sn(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var v=!1,I=d.child;I;){if(I===a){v=!0,a=d,c=m;break}if(I===c){v=!0,c=d,a=m;break}I=I.sibling}if(!v){for(I=m.child;I;){if(I===a){v=!0,a=m,c=d;break}if(I===c){v=!0,c=m,a=d;break}I=I.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Fo(n){return n=tl(n),n!==null?Ss(n):null}function Ss(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Ss(n);if(i!==null)return i;n=n.sibling}return null}var Cs=e.unstable_scheduleCallback,Uo=e.unstable_cancelCallback,nl=e.unstable_shouldYield,wc=e.unstable_requestPaint,$e=e.unstable_now,rl=e.unstable_getCurrentPriorityLevel,Pi=e.unstable_ImmediatePriority,Ur=e.unstable_UserBlockingPriority,hn=e.unstable_NormalPriority,jo=e.unstable_LowPriority,il=e.unstable_IdlePriority,Ni=null,tn=null;function sl(n){if(tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(Ni,n,void 0,(n.current.flags&128)===128)}catch{}}var Ut=Math.clz32?Math.clz32:al,Bo=Math.log,ol=Math.LN2;function al(n){return n>>>=0,n===0?32:31-(Bo(n)/ol|0)|0}var As=64,Rs=4194304;function jr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function xi(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,v=a&268435455;if(v!==0){var I=v&~d;I!==0?c=jr(I):(m&=v,m!==0&&(c=jr(m)))}else v=a&~d,v!==0?c=jr(v):m!==0&&(c=jr(m));if(c===0)return 0;if(i!==0&&i!==c&&!(i&d)&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if(c&4&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Ut(i),d=1<<a,c|=n[a],i&=~d;return c}function Ec(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dr(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var v=31-Ut(m),I=1<<v,k=d[v];k===-1?(!(I&a)||I&c)&&(d[v]=Ec(I,i)):k<=i&&(n.expiredLanes|=I),m&=~I}}function nn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Di(){var n=As;return As<<=1,!(As&4194240)&&(As=64),n}function Br(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function $r(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Ut(i),n[i]=a}function je(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Ut(a),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function zr(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Ut(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var Pe=0;function Hr(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var ll,ks,ul,cl,hl,$o=!1,Hn=[],Et=null,Cn=null,An=null,Wr=new Map,dn=new Map,Wn=[],Tc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dl(n,i){switch(n){case"focusin":case"focusout":Et=null;break;case"dragenter":case"dragleave":Cn=null;break;case"mouseover":case"mouseout":An=null;break;case"pointerover":case"pointerout":Wr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":dn.delete(i.pointerId)}}function Ht(n,i,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=ra(i),i!==null&&ks(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Ic(n,i,a,c,d){switch(i){case"focusin":return Et=Ht(Et,n,i,a,c,d),!0;case"dragenter":return Cn=Ht(Cn,n,i,a,c,d),!0;case"mouseover":return An=Ht(An,n,i,a,c,d),!0;case"pointerover":var m=d.pointerId;return Wr.set(m,Ht(Wr.get(m)||null,n,i,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,dn.set(m,Ht(dn.get(m)||null,n,i,a,c,d)),!0}return!1}function fl(n){var i=bi(n.target);if(i!==null){var a=In(i);if(a!==null){if(i=a.tag,i===13){if(i=ki(a),i!==null){n.blockedOn=i,hl(n.priority,function(){ul(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function fr(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Ps(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Si=c,a.target.dispatchEvent(c),Si=null}else return i=ra(a),i!==null&&ks(i),n.blockedOn=a,!1;i.shift()}return!0}function Li(n,i,a){fr(n)&&a.delete(i)}function pl(){$o=!1,Et!==null&&fr(Et)&&(Et=null),Cn!==null&&fr(Cn)&&(Cn=null),An!==null&&fr(An)&&(An=null),Wr.forEach(Li),dn.forEach(Li)}function Rn(n,i){n.blockedOn===i&&(n.blockedOn=null,$o||($o=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,pl)))}function kn(n){function i(d){return Rn(d,n)}if(0<Hn.length){Rn(Hn[0],n);for(var a=1;a<Hn.length;a++){var c=Hn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Et!==null&&Rn(Et,n),Cn!==null&&Rn(Cn,n),An!==null&&Rn(An,n),Wr.forEach(i),dn.forEach(i),a=0;a<Wn.length;a++)c=Wn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Wn.length&&(a=Wn[0],a.blockedOn===null);)fl(a),a.blockedOn===null&&Wn.shift()}var pr=de.ReactCurrentBatchConfig,qr=!0;function Ke(n,i,a,c){var d=Pe,m=pr.transition;pr.transition=null;try{Pe=1,zo(n,i,a,c)}finally{Pe=d,pr.transition=m}}function Sc(n,i,a,c){var d=Pe,m=pr.transition;pr.transition=null;try{Pe=4,zo(n,i,a,c)}finally{Pe=d,pr.transition=m}}function zo(n,i,a,c){if(qr){var d=Ps(n,i,a,c);if(d===null)Mc(n,i,c,Oi,a),dl(n,c);else if(Ic(d,n,i,a,c))c.stopPropagation();else if(dl(n,c),i&4&&-1<Tc.indexOf(n)){for(;d!==null;){var m=ra(d);if(m!==null&&ll(m),m=Ps(n,i,a,c),m===null&&Mc(n,i,c,Oi,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else Mc(n,i,c,null,a)}}var Oi=null;function Ps(n,i,a,c){if(Oi=null,n=_s(c),n=bi(n),n!==null)if(i=In(n),i===null)n=null;else if(a=i.tag,a===13){if(n=ki(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Oi=n,null}function Ho(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rl()){case Pi:return 1;case Ur:return 4;case hn:case jo:return 16;case il:return 536870912;default:return 16}default:return 16}}var rn=null,Ns=null,Wt=null;function Wo(){if(Wt)return Wt;var n,i=Ns,a=i.length,c,d="value"in rn?rn.value:rn.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&i[a-c]===d[m-c];c++);return Wt=d.slice(n,1<c?1-c:void 0)}function xs(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function qn(){return!0}function qo(){return!1}function Tt(n){function i(a,c,d,m,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(m):m[I]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?qn:qo,this.isPropagationStopped=qo,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=qn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=qn)},persist:function(){},isPersistent:qn}),i}var Pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ds=Tt(Pn),Kn=se({},Pn,{view:0,detail:0}),Cc=Tt(Kn),Ls,mr,Kr,Mi=se({},Kn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Kr&&(Kr&&n.type==="mousemove"?(Ls=n.screenX-Kr.screenX,mr=n.screenY-Kr.screenY):mr=Ls=0,Kr=n),Ls)},movementY:function(n){return"movementY"in n?n.movementY:mr}}),Os=Tt(Mi),Ko=se({},Mi,{dataTransfer:0}),ml=Tt(Ko),Ms=se({},Kn,{relatedTarget:0}),Vs=Tt(Ms),gl=se({},Pn,{animationName:0,elapsedTime:0,pseudoElement:0}),gr=Tt(gl),yl=se({},Pn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),_l=Tt(yl),vl=se({},Pn,{data:0}),Go=Tt(vl),bs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function El(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=wl[n])?!!i[n]:!1}function Gn(){return El}var l=se({},Kn,{key:function(n){if(n.key){var i=bs[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=xs(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?jt[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gn,charCode:function(n){return n.type==="keypress"?xs(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?xs(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f=Tt(l),y=se({},Mi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w=Tt(y),M=se({},Kn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gn}),z=Tt(M),te=se({},Pn,{propertyName:0,elapsedTime:0,pseudoElement:0}),be=Tt(te),ct=se({},Mi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),xe=Tt(ct),pt=[9,13,27,32],st=p&&"CompositionEvent"in window,fn=null;p&&"documentMode"in document&&(fn=document.documentMode);var sn=p&&"TextEvent"in window&&!fn,Vi=p&&(!st||fn&&8<fn&&11>=fn),Fs=" ",Ef=!1;function Tf(n,i){switch(n){case"keyup":return pt.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function If(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Us=!1;function bv(n,i){switch(n){case"compositionend":return If(i);case"keypress":return i.which!==32?null:(Ef=!0,Fs);case"textInput":return n=i.data,n===Fs&&Ef?null:n;default:return null}}function Fv(n,i){if(Us)return n==="compositionend"||!st&&Tf(n,i)?(n=Wo(),Wt=Ns=rn=null,Us=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Vi&&i.locale!=="ko"?null:i.data;default:return null}}var Uv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Uv[n.type]:i==="textarea"}function Cf(n,i,a,c){zn(c),i=Al(i,"onChange"),0<i.length&&(a=new Ds("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Qo=null,Xo=null;function jv(n){zf(n,0)}function Tl(n){var i=Hs(n);if(fs(i))return n}function Bv(n,i){if(n==="change")return i}var Af=!1;if(p){var Ac;if(p){var Rc="oninput"in document;if(!Rc){var Rf=document.createElement("div");Rf.setAttribute("oninput","return;"),Rc=typeof Rf.oninput=="function"}Ac=Rc}else Ac=!1;Af=Ac&&(!document.documentMode||9<document.documentMode)}function kf(){Qo&&(Qo.detachEvent("onpropertychange",Pf),Xo=Qo=null)}function Pf(n){if(n.propertyName==="value"&&Tl(Xo)){var i=[];Cf(i,Xo,n,_s(n)),Vo(jv,i)}}function $v(n,i,a){n==="focusin"?(kf(),Qo=i,Xo=a,Qo.attachEvent("onpropertychange",Pf)):n==="focusout"&&kf()}function zv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Tl(Xo)}function Hv(n,i){if(n==="click")return Tl(i)}function Wv(n,i){if(n==="input"||n==="change")return Tl(i)}function qv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Nn=typeof Object.is=="function"?Object.is:qv;function Yo(n,i){if(Nn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(i,d)||!Nn(n[d],i[d]))return!1}return!0}function Nf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function xf(n,i){var a=Nf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Nf(a)}}function Df(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Df(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Lf(){for(var n=window,i=br();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=br(n.document)}return i}function kc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Kv(n){var i=Lf(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Df(a.ownerDocument.documentElement,a)){if(c!==null&&kc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=xf(a,m);var v=xf(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(v.node,v.offset)):(i.setEnd(v.node,v.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Gv=p&&"documentMode"in document&&11>=document.documentMode,js=null,Pc=null,Jo=null,Nc=!1;function Of(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Nc||js==null||js!==br(c)||(c=js,"selectionStart"in c&&kc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Jo&&Yo(Jo,c)||(Jo=c,c=Al(Pc,"onSelect"),0<c.length&&(i=new Ds("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=js)))}function Il(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Bs={animationend:Il("Animation","AnimationEnd"),animationiteration:Il("Animation","AnimationIteration"),animationstart:Il("Animation","AnimationStart"),transitionend:Il("Transition","TransitionEnd")},xc={},Mf={};p&&(Mf=document.createElement("div").style,"AnimationEvent"in window||(delete Bs.animationend.animation,delete Bs.animationiteration.animation,delete Bs.animationstart.animation),"TransitionEvent"in window||delete Bs.transitionend.transition);function Sl(n){if(xc[n])return xc[n];if(!Bs[n])return n;var i=Bs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Mf)return xc[n]=i[a];return n}var Vf=Sl("animationend"),bf=Sl("animationiteration"),Ff=Sl("animationstart"),Uf=Sl("transitionend"),jf=new Map,Bf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gr(n,i){jf.set(n,i),u(i,[n])}for(var Dc=0;Dc<Bf.length;Dc++){var Lc=Bf[Dc],Qv=Lc.toLowerCase(),Xv=Lc[0].toUpperCase()+Lc.slice(1);Gr(Qv,"on"+Xv)}Gr(Vf,"onAnimationEnd"),Gr(bf,"onAnimationIteration"),Gr(Ff,"onAnimationStart"),Gr("dblclick","onDoubleClick"),Gr("focusin","onFocus"),Gr("focusout","onBlur"),Gr(Uf,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zo));function $f(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,el(c,i,void 0,n),n.currentTarget=null}function zf(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var v=c.length-1;0<=v;v--){var I=c[v],k=I.instance,B=I.currentTarget;if(I=I.listener,k!==m&&d.isPropagationStopped())break e;$f(d,I,B),m=k}else for(v=0;v<c.length;v++){if(I=c[v],k=I.instance,B=I.currentTarget,I=I.listener,k!==m&&d.isPropagationStopped())break e;$f(d,I,B),m=k}}}if(Tn)throw n=bo,Tn=!1,bo=null,n}function We(n,i){var a=i[Bc];a===void 0&&(a=i[Bc]=new Set);var c=n+"__bubble";a.has(c)||(Hf(i,n,2,!1),a.add(c))}function Oc(n,i,a){var c=0;i&&(c|=4),Hf(a,n,c,i)}var Cl="_reactListening"+Math.random().toString(36).slice(2);function ea(n){if(!n[Cl]){n[Cl]=!0,s.forEach(function(a){a!=="selectionchange"&&(Yv.has(a)||Oc(a,!1,n),Oc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Cl]||(i[Cl]=!0,Oc("selectionchange",!1,i))}}function Hf(n,i,a,c){switch(Ho(i)){case 1:var d=Ke;break;case 4:d=Sc;break;default:d=zo}a=d.bind(null,i,a,n),d=void 0,!Es||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Mc(n,i,a,c,d){var m=c;if(!(i&1)&&!(i&2)&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var I=c.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var k=v.tag;if((k===3||k===4)&&(k=v.stateNode.containerInfo,k===d||k.nodeType===8&&k.parentNode===d))return;v=v.return}for(;I!==null;){if(v=bi(I),v===null)return;if(k=v.tag,k===5||k===6){c=m=v;continue e}I=I.parentNode}}c=c.return}Vo(function(){var B=m,X=_s(a),Y=[];e:{var Q=jf.get(n);if(Q!==void 0){var re=Ds,ae=n;switch(n){case"keypress":if(xs(a)===0)break e;case"keydown":case"keyup":re=f;break;case"focusin":ae="focus",re=Vs;break;case"focusout":ae="blur",re=Vs;break;case"beforeblur":case"afterblur":re=Vs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":re=Os;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":re=ml;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":re=z;break;case Vf:case bf:case Ff:re=gr;break;case Uf:re=be;break;case"scroll":re=Cc;break;case"wheel":re=xe;break;case"copy":case"cut":case"paste":re=_l;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":re=w}var le=(i&4)!==0,it=!le&&n==="scroll",V=le?Q!==null?Q+"Capture":null:Q;le=[];for(var x=B,b;x!==null;){b=x;var ee=b.stateNode;if(b.tag===5&&ee!==null&&(b=ee,V!==null&&(ee=rt(x,V),ee!=null&&le.push(ta(x,ee,b)))),it)break;x=x.return}0<le.length&&(Q=new re(Q,ae,null,a,X),Y.push({event:Q,listeners:le}))}}if(!(i&7)){e:{if(Q=n==="mouseover"||n==="pointerover",re=n==="mouseout"||n==="pointerout",Q&&a!==Si&&(ae=a.relatedTarget||a.fromElement)&&(bi(ae)||ae[yr]))break e;if((re||Q)&&(Q=X.window===X?X:(Q=X.ownerDocument)?Q.defaultView||Q.parentWindow:window,re?(ae=a.relatedTarget||a.toElement,re=B,ae=ae?bi(ae):null,ae!==null&&(it=In(ae),ae!==it||ae.tag!==5&&ae.tag!==6)&&(ae=null)):(re=null,ae=B),re!==ae)){if(le=Os,ee="onMouseLeave",V="onMouseEnter",x="mouse",(n==="pointerout"||n==="pointerover")&&(le=w,ee="onPointerLeave",V="onPointerEnter",x="pointer"),it=re==null?Q:Hs(re),b=ae==null?Q:Hs(ae),Q=new le(ee,x+"leave",re,a,X),Q.target=it,Q.relatedTarget=b,ee=null,bi(X)===B&&(le=new le(V,x+"enter",ae,a,X),le.target=b,le.relatedTarget=it,ee=le),it=ee,re&&ae)t:{for(le=re,V=ae,x=0,b=le;b;b=$s(b))x++;for(b=0,ee=V;ee;ee=$s(ee))b++;for(;0<x-b;)le=$s(le),x--;for(;0<b-x;)V=$s(V),b--;for(;x--;){if(le===V||V!==null&&le===V.alternate)break t;le=$s(le),V=$s(V)}le=null}else le=null;re!==null&&Wf(Y,Q,re,le,!1),ae!==null&&it!==null&&Wf(Y,it,ae,le,!0)}}e:{if(Q=B?Hs(B):window,re=Q.nodeName&&Q.nodeName.toLowerCase(),re==="select"||re==="input"&&Q.type==="file")var ce=Bv;else if(Sf(Q))if(Af)ce=Wv;else{ce=zv;var pe=$v}else(re=Q.nodeName)&&re.toLowerCase()==="input"&&(Q.type==="checkbox"||Q.type==="radio")&&(ce=Hv);if(ce&&(ce=ce(n,B))){Cf(Y,ce,a,X);break e}pe&&pe(n,Q,B),n==="focusout"&&(pe=Q._wrapperState)&&pe.controlled&&Q.type==="number"&&ms(Q,"number",Q.value)}switch(pe=B?Hs(B):window,n){case"focusin":(Sf(pe)||pe.contentEditable==="true")&&(js=pe,Pc=B,Jo=null);break;case"focusout":Jo=Pc=js=null;break;case"mousedown":Nc=!0;break;case"contextmenu":case"mouseup":case"dragend":Nc=!1,Of(Y,a,X);break;case"selectionchange":if(Gv)break;case"keydown":case"keyup":Of(Y,a,X)}var me;if(st)e:{switch(n){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else Us?Tf(n,a)&&(_e="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(_e="onCompositionStart");_e&&(Vi&&a.locale!=="ko"&&(Us||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&Us&&(me=Wo()):(rn=X,Ns="value"in rn?rn.value:rn.textContent,Us=!0)),pe=Al(B,_e),0<pe.length&&(_e=new Go(_e,n,null,a,X),Y.push({event:_e,listeners:pe}),me?_e.data=me:(me=If(a),me!==null&&(_e.data=me)))),(me=sn?bv(n,a):Fv(n,a))&&(B=Al(B,"onBeforeInput"),0<B.length&&(X=new Go("onBeforeInput","beforeinput",null,a,X),Y.push({event:X,listeners:B}),X.data=me))}zf(Y,i)})}function ta(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Al(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=rt(n,a),m!=null&&c.unshift(ta(n,m,d)),m=rt(n,i),m!=null&&c.push(ta(n,m,d))),n=n.return}return c}function $s(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Wf(n,i,a,c,d){for(var m=i._reactName,v=[];a!==null&&a!==c;){var I=a,k=I.alternate,B=I.stateNode;if(k!==null&&k===c)break;I.tag===5&&B!==null&&(I=B,d?(k=rt(a,m),k!=null&&v.unshift(ta(a,k,I))):d||(k=rt(a,m),k!=null&&v.push(ta(a,k,I)))),a=a.return}v.length!==0&&n.push({event:i,listeners:v})}var Jv=/\r\n?/g,Zv=/\u0000|\uFFFD/g;function qf(n){return(typeof n=="string"?n:""+n).replace(Jv,`
`).replace(Zv,"")}function Rl(n,i,a){if(i=qf(i),qf(n)!==i&&a)throw Error(t(425))}function kl(){}var Vc=null,bc=null;function Fc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Uc=typeof setTimeout=="function"?setTimeout:void 0,e0=typeof clearTimeout=="function"?clearTimeout:void 0,Kf=typeof Promise=="function"?Promise:void 0,t0=typeof queueMicrotask=="function"?queueMicrotask:typeof Kf<"u"?function(n){return Kf.resolve(null).then(n).catch(n0)}:Uc;function n0(n){setTimeout(function(){throw n})}function jc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),kn(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);kn(i)}function Qr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Gf(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var zs=Math.random().toString(36).slice(2),Qn="__reactFiber$"+zs,na="__reactProps$"+zs,yr="__reactContainer$"+zs,Bc="__reactEvents$"+zs,r0="__reactListeners$"+zs,i0="__reactHandles$"+zs;function bi(n){var i=n[Qn];if(i)return i;for(var a=n.parentNode;a;){if(i=a[yr]||a[Qn]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Gf(n);n!==null;){if(a=n[Qn])return a;n=Gf(n)}return i}n=a,a=n.parentNode}return null}function ra(n){return n=n[Qn]||n[yr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Hs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Pl(n){return n[na]||null}var $c=[],Ws=-1;function Xr(n){return{current:n}}function qe(n){0>Ws||(n.current=$c[Ws],$c[Ws]=null,Ws--)}function ze(n,i){Ws++,$c[Ws]=n.current,n.current=i}var Yr={},xt=Xr(Yr),qt=Xr(!1),Fi=Yr;function qs(n,i){var a=n.type.contextTypes;if(!a)return Yr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Kt(n){return n=n.childContextTypes,n!=null}function Nl(){qe(qt),qe(xt)}function Qf(n,i,a){if(xt.current!==Yr)throw Error(t(168));ze(xt,i),ze(qt,a)}function Xf(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,Me(n)||"Unknown",d));return se({},a,c)}function xl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Yr,Fi=xt.current,ze(xt,n),ze(qt,qt.current),!0}function Yf(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Xf(n,i,Fi),c.__reactInternalMemoizedMergedChildContext=n,qe(qt),qe(xt),ze(xt,n)):qe(qt),ze(qt,a)}var _r=null,Dl=!1,zc=!1;function Jf(n){_r===null?_r=[n]:_r.push(n)}function s0(n){Dl=!0,Jf(n)}function Jr(){if(!zc&&_r!==null){zc=!0;var n=0,i=Pe;try{var a=_r;for(Pe=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}_r=null,Dl=!1}catch(d){throw _r!==null&&(_r=_r.slice(n+1)),Cs(Pi,Jr),d}finally{Pe=i,zc=!1}}return null}var Ks=[],Gs=0,Ll=null,Ol=0,pn=[],mn=0,Ui=null,vr=1,wr="";function ji(n,i){Ks[Gs++]=Ol,Ks[Gs++]=Ll,Ll=n,Ol=i}function Zf(n,i,a){pn[mn++]=vr,pn[mn++]=wr,pn[mn++]=Ui,Ui=n;var c=vr;n=wr;var d=32-Ut(c)-1;c&=~(1<<d),a+=1;var m=32-Ut(i)+d;if(30<m){var v=d-d%5;m=(c&(1<<v)-1).toString(32),c>>=v,d-=v,vr=1<<32-Ut(i)+d|a<<d|c,wr=m+n}else vr=1<<m|a<<d|c,wr=n}function Hc(n){n.return!==null&&(ji(n,1),Zf(n,1,0))}function Wc(n){for(;n===Ll;)Ll=Ks[--Gs],Ks[Gs]=null,Ol=Ks[--Gs],Ks[Gs]=null;for(;n===Ui;)Ui=pn[--mn],pn[mn]=null,wr=pn[--mn],pn[mn]=null,vr=pn[--mn],pn[mn]=null}var on=null,an=null,Ge=!1,xn=null;function ep(n,i){var a=vn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function tp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,on=n,an=Qr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,on=n,an=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Ui!==null?{id:vr,overflow:wr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=vn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,on=n,an=null,!0):!1;default:return!1}}function qc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Kc(n){if(Ge){var i=an;if(i){var a=i;if(!tp(n,i)){if(qc(n))throw Error(t(418));i=Qr(a.nextSibling);var c=on;i&&tp(n,i)?ep(c,a):(n.flags=n.flags&-4097|2,Ge=!1,on=n)}}else{if(qc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ge=!1,on=n}}}function np(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;on=n}function Ml(n){if(n!==on)return!1;if(!Ge)return np(n),Ge=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Fc(n.type,n.memoizedProps)),i&&(i=an)){if(qc(n))throw rp(),Error(t(418));for(;i;)ep(n,i),i=Qr(i.nextSibling)}if(np(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){an=Qr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}an=null}}else an=on?Qr(n.stateNode.nextSibling):null;return!0}function rp(){for(var n=an;n;)n=Qr(n.nextSibling)}function Qs(){an=on=null,Ge=!1}function Gc(n){xn===null?xn=[n]:xn.push(n)}var o0=de.ReactCurrentBatchConfig;function ia(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(v){var I=d.refs;v===null?delete I[m]:I[m]=v},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Vl(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function ip(n){var i=n._init;return i(n._payload)}function sp(n){function i(V,x){if(n){var b=V.deletions;b===null?(V.deletions=[x],V.flags|=16):b.push(x)}}function a(V,x){if(!n)return null;for(;x!==null;)i(V,x),x=x.sibling;return null}function c(V,x){for(V=new Map;x!==null;)x.key!==null?V.set(x.key,x):V.set(x.index,x),x=x.sibling;return V}function d(V,x){return V=oi(V,x),V.index=0,V.sibling=null,V}function m(V,x,b){return V.index=b,n?(b=V.alternate,b!==null?(b=b.index,b<x?(V.flags|=2,x):b):(V.flags|=2,x)):(V.flags|=1048576,x)}function v(V){return n&&V.alternate===null&&(V.flags|=2),V}function I(V,x,b,ee){return x===null||x.tag!==6?(x=Uh(b,V.mode,ee),x.return=V,x):(x=d(x,b),x.return=V,x)}function k(V,x,b,ee){var ce=b.type;return ce===N?X(V,x,b.props.children,ee,b.key):x!==null&&(x.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===Nt&&ip(ce)===x.type)?(ee=d(x,b.props),ee.ref=ia(V,x,b),ee.return=V,ee):(ee=ou(b.type,b.key,b.props,null,V.mode,ee),ee.ref=ia(V,x,b),ee.return=V,ee)}function B(V,x,b,ee){return x===null||x.tag!==4||x.stateNode.containerInfo!==b.containerInfo||x.stateNode.implementation!==b.implementation?(x=jh(b,V.mode,ee),x.return=V,x):(x=d(x,b.children||[]),x.return=V,x)}function X(V,x,b,ee,ce){return x===null||x.tag!==7?(x=Gi(b,V.mode,ee,ce),x.return=V,x):(x=d(x,b),x.return=V,x)}function Y(V,x,b){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Uh(""+x,V.mode,b),x.return=V,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ce:return b=ou(x.type,x.key,x.props,null,V.mode,b),b.ref=ia(V,null,x),b.return=V,b;case ve:return x=jh(x,V.mode,b),x.return=V,x;case Nt:var ee=x._init;return Y(V,ee(x._payload),b)}if(lr(x)||fe(x))return x=Gi(x,V.mode,b,null),x.return=V,x;Vl(V,x)}return null}function Q(V,x,b,ee){var ce=x!==null?x.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return ce!==null?null:I(V,x,""+b,ee);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ce:return b.key===ce?k(V,x,b,ee):null;case ve:return b.key===ce?B(V,x,b,ee):null;case Nt:return ce=b._init,Q(V,x,ce(b._payload),ee)}if(lr(b)||fe(b))return ce!==null?null:X(V,x,b,ee,null);Vl(V,b)}return null}function re(V,x,b,ee,ce){if(typeof ee=="string"&&ee!==""||typeof ee=="number")return V=V.get(b)||null,I(x,V,""+ee,ce);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case Ce:return V=V.get(ee.key===null?b:ee.key)||null,k(x,V,ee,ce);case ve:return V=V.get(ee.key===null?b:ee.key)||null,B(x,V,ee,ce);case Nt:var pe=ee._init;return re(V,x,b,pe(ee._payload),ce)}if(lr(ee)||fe(ee))return V=V.get(b)||null,X(x,V,ee,ce,null);Vl(x,ee)}return null}function ae(V,x,b,ee){for(var ce=null,pe=null,me=x,_e=x=0,yt=null;me!==null&&_e<b.length;_e++){me.index>_e?(yt=me,me=null):yt=me.sibling;var Oe=Q(V,me,b[_e],ee);if(Oe===null){me===null&&(me=yt);break}n&&me&&Oe.alternate===null&&i(V,me),x=m(Oe,x,_e),pe===null?ce=Oe:pe.sibling=Oe,pe=Oe,me=yt}if(_e===b.length)return a(V,me),Ge&&ji(V,_e),ce;if(me===null){for(;_e<b.length;_e++)me=Y(V,b[_e],ee),me!==null&&(x=m(me,x,_e),pe===null?ce=me:pe.sibling=me,pe=me);return Ge&&ji(V,_e),ce}for(me=c(V,me);_e<b.length;_e++)yt=re(me,V,_e,b[_e],ee),yt!==null&&(n&&yt.alternate!==null&&me.delete(yt.key===null?_e:yt.key),x=m(yt,x,_e),pe===null?ce=yt:pe.sibling=yt,pe=yt);return n&&me.forEach(function(ai){return i(V,ai)}),Ge&&ji(V,_e),ce}function le(V,x,b,ee){var ce=fe(b);if(typeof ce!="function")throw Error(t(150));if(b=ce.call(b),b==null)throw Error(t(151));for(var pe=ce=null,me=x,_e=x=0,yt=null,Oe=b.next();me!==null&&!Oe.done;_e++,Oe=b.next()){me.index>_e?(yt=me,me=null):yt=me.sibling;var ai=Q(V,me,Oe.value,ee);if(ai===null){me===null&&(me=yt);break}n&&me&&ai.alternate===null&&i(V,me),x=m(ai,x,_e),pe===null?ce=ai:pe.sibling=ai,pe=ai,me=yt}if(Oe.done)return a(V,me),Ge&&ji(V,_e),ce;if(me===null){for(;!Oe.done;_e++,Oe=b.next())Oe=Y(V,Oe.value,ee),Oe!==null&&(x=m(Oe,x,_e),pe===null?ce=Oe:pe.sibling=Oe,pe=Oe);return Ge&&ji(V,_e),ce}for(me=c(V,me);!Oe.done;_e++,Oe=b.next())Oe=re(me,V,_e,Oe.value,ee),Oe!==null&&(n&&Oe.alternate!==null&&me.delete(Oe.key===null?_e:Oe.key),x=m(Oe,x,_e),pe===null?ce=Oe:pe.sibling=Oe,pe=Oe);return n&&me.forEach(function(U0){return i(V,U0)}),Ge&&ji(V,_e),ce}function it(V,x,b,ee){if(typeof b=="object"&&b!==null&&b.type===N&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Ce:e:{for(var ce=b.key,pe=x;pe!==null;){if(pe.key===ce){if(ce=b.type,ce===N){if(pe.tag===7){a(V,pe.sibling),x=d(pe,b.props.children),x.return=V,V=x;break e}}else if(pe.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===Nt&&ip(ce)===pe.type){a(V,pe.sibling),x=d(pe,b.props),x.ref=ia(V,pe,b),x.return=V,V=x;break e}a(V,pe);break}else i(V,pe);pe=pe.sibling}b.type===N?(x=Gi(b.props.children,V.mode,ee,b.key),x.return=V,V=x):(ee=ou(b.type,b.key,b.props,null,V.mode,ee),ee.ref=ia(V,x,b),ee.return=V,V=ee)}return v(V);case ve:e:{for(pe=b.key;x!==null;){if(x.key===pe)if(x.tag===4&&x.stateNode.containerInfo===b.containerInfo&&x.stateNode.implementation===b.implementation){a(V,x.sibling),x=d(x,b.children||[]),x.return=V,V=x;break e}else{a(V,x);break}else i(V,x);x=x.sibling}x=jh(b,V.mode,ee),x.return=V,V=x}return v(V);case Nt:return pe=b._init,it(V,x,pe(b._payload),ee)}if(lr(b))return ae(V,x,b,ee);if(fe(b))return le(V,x,b,ee);Vl(V,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,x!==null&&x.tag===6?(a(V,x.sibling),x=d(x,b),x.return=V,V=x):(a(V,x),x=Uh(b,V.mode,ee),x.return=V,V=x),v(V)):a(V,x)}return it}var Xs=sp(!0),op=sp(!1),bl=Xr(null),Fl=null,Ys=null,Qc=null;function Xc(){Qc=Ys=Fl=null}function Yc(n){var i=bl.current;qe(bl),n._currentValue=i}function Jc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Js(n,i){Fl=n,Qc=Ys=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&i&&(Gt=!0),n.firstContext=null)}function gn(n){var i=n._currentValue;if(Qc!==n)if(n={context:n,memoizedValue:i,next:null},Ys===null){if(Fl===null)throw Error(t(308));Ys=n,Fl.dependencies={lanes:0,firstContext:n}}else Ys=Ys.next=n;return i}var Bi=null;function Zc(n){Bi===null?Bi=[n]:Bi.push(n)}function ap(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,Zc(i)):(a.next=d.next,d.next=a),i.interleaved=a,Er(n,c)}function Er(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Zr=!1;function eh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Tr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function ei(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,Le&2){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Er(n,a)}return d=c.interleaved,d===null?(i.next=i,Zc(c)):(i.next=d.next,d.next=i),c.interleaved=i,Er(n,a)}function Ul(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,zr(n,a)}}function up(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=v:m=m.next=v,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function jl(n,i,a,c){var d=n.updateQueue;Zr=!1;var m=d.firstBaseUpdate,v=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var k=I,B=k.next;k.next=null,v===null?m=B:v.next=B,v=k;var X=n.alternate;X!==null&&(X=X.updateQueue,I=X.lastBaseUpdate,I!==v&&(I===null?X.firstBaseUpdate=B:I.next=B,X.lastBaseUpdate=k))}if(m!==null){var Y=d.baseState;v=0,X=B=k=null,I=m;do{var Q=I.lane,re=I.eventTime;if((c&Q)===Q){X!==null&&(X=X.next={eventTime:re,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var ae=n,le=I;switch(Q=i,re=a,le.tag){case 1:if(ae=le.payload,typeof ae=="function"){Y=ae.call(re,Y,Q);break e}Y=ae;break e;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=le.payload,Q=typeof ae=="function"?ae.call(re,Y,Q):ae,Q==null)break e;Y=se({},Y,Q);break e;case 2:Zr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,Q=d.effects,Q===null?d.effects=[I]:Q.push(I))}else re={eventTime:re,lane:Q,tag:I.tag,payload:I.payload,callback:I.callback,next:null},X===null?(B=X=re,k=Y):X=X.next=re,v|=Q;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;Q=I,I=Q.next,Q.next=null,d.lastBaseUpdate=Q,d.shared.pending=null}}while(!0);if(X===null&&(k=Y),d.baseState=k,d.firstBaseUpdate=B,d.lastBaseUpdate=X,i=d.shared.interleaved,i!==null){d=i;do v|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);Hi|=v,n.lanes=v,n.memoizedState=Y}}function cp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var sa={},Xn=Xr(sa),oa=Xr(sa),aa=Xr(sa);function $i(n){if(n===sa)throw Error(t(174));return n}function th(n,i){switch(ze(aa,i),ze(oa,n),ze(Xn,sa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ut(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=ut(i,n)}qe(Xn),ze(Xn,i)}function Zs(){qe(Xn),qe(oa),qe(aa)}function hp(n){$i(aa.current);var i=$i(Xn.current),a=ut(i,n.type);i!==a&&(ze(oa,n),ze(Xn,a))}function nh(n){oa.current===n&&(qe(Xn),qe(oa))}var Xe=Xr(0);function Bl(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var rh=[];function ih(){for(var n=0;n<rh.length;n++)rh[n]._workInProgressVersionPrimary=null;rh.length=0}var $l=de.ReactCurrentDispatcher,sh=de.ReactCurrentBatchConfig,zi=0,Ye=null,ht=null,mt=null,zl=!1,la=!1,ua=0,a0=0;function Dt(){throw Error(t(321))}function oh(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Nn(n[a],i[a]))return!1;return!0}function ah(n,i,a,c,d,m){if(zi=m,Ye=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,$l.current=n===null||n.memoizedState===null?h0:d0,n=a(c,d),la){m=0;do{if(la=!1,ua=0,25<=m)throw Error(t(301));m+=1,mt=ht=null,i.updateQueue=null,$l.current=f0,n=a(c,d)}while(la)}if($l.current=ql,i=ht!==null&&ht.next!==null,zi=0,mt=ht=Ye=null,zl=!1,i)throw Error(t(300));return n}function lh(){var n=ua!==0;return ua=0,n}function Yn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mt===null?Ye.memoizedState=mt=n:mt=mt.next=n,mt}function yn(){if(ht===null){var n=Ye.alternate;n=n!==null?n.memoizedState:null}else n=ht.next;var i=mt===null?Ye.memoizedState:mt.next;if(i!==null)mt=i,ht=n;else{if(n===null)throw Error(t(310));ht=n,n={memoizedState:ht.memoizedState,baseState:ht.baseState,baseQueue:ht.baseQueue,queue:ht.queue,next:null},mt===null?Ye.memoizedState=mt=n:mt=mt.next=n}return mt}function ca(n,i){return typeof i=="function"?i(n):i}function uh(n){var i=yn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=ht,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var v=d.next;d.next=m.next,m.next=v}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var I=v=null,k=null,B=m;do{var X=B.lane;if((zi&X)===X)k!==null&&(k=k.next={lane:0,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),c=B.hasEagerState?B.eagerState:n(c,B.action);else{var Y={lane:X,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null};k===null?(I=k=Y,v=c):k=k.next=Y,Ye.lanes|=X,Hi|=X}B=B.next}while(B!==null&&B!==m);k===null?v=c:k.next=I,Nn(c,i.memoizedState)||(Gt=!0),i.memoizedState=c,i.baseState=v,i.baseQueue=k,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,Ye.lanes|=m,Hi|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function ch(n){var i=yn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do m=n(m,v.action),v=v.next;while(v!==d);Nn(m,i.memoizedState)||(Gt=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function dp(){}function fp(n,i){var a=Ye,c=yn(),d=i(),m=!Nn(c.memoizedState,d);if(m&&(c.memoizedState=d,Gt=!0),c=c.queue,hh(gp.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||mt!==null&&mt.memoizedState.tag&1){if(a.flags|=2048,ha(9,mp.bind(null,a,c,d,i),void 0,null),gt===null)throw Error(t(349));zi&30||pp(a,i,d)}return d}function pp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Ye.updateQueue,i===null?(i={lastEffect:null,stores:null},Ye.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function mp(n,i,a,c){i.value=a,i.getSnapshot=c,yp(i)&&_p(n)}function gp(n,i,a){return a(function(){yp(i)&&_p(n)})}function yp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Nn(n,a)}catch{return!0}}function _p(n){var i=Er(n,1);i!==null&&Mn(i,n,1,-1)}function vp(n){var i=Yn();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:n},i.queue=n,n=n.dispatch=c0.bind(null,Ye,n),[i.memoizedState,n]}function ha(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Ye.updateQueue,i===null?(i={lastEffect:null,stores:null},Ye.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function wp(){return yn().memoizedState}function Hl(n,i,a,c){var d=Yn();Ye.flags|=n,d.memoizedState=ha(1|i,a,void 0,c===void 0?null:c)}function Wl(n,i,a,c){var d=yn();c=c===void 0?null:c;var m=void 0;if(ht!==null){var v=ht.memoizedState;if(m=v.destroy,c!==null&&oh(c,v.deps)){d.memoizedState=ha(i,a,m,c);return}}Ye.flags|=n,d.memoizedState=ha(1|i,a,m,c)}function Ep(n,i){return Hl(8390656,8,n,i)}function hh(n,i){return Wl(2048,8,n,i)}function Tp(n,i){return Wl(4,2,n,i)}function Ip(n,i){return Wl(4,4,n,i)}function Sp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Cp(n,i,a){return a=a!=null?a.concat([n]):null,Wl(4,4,Sp.bind(null,i,n),a)}function dh(){}function Ap(n,i){var a=yn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&oh(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Rp(n,i){var a=yn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&oh(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function kp(n,i,a){return zi&21?(Nn(a,i)||(a=Di(),Ye.lanes|=a,Hi|=a,n.baseState=!0),i):(n.baseState&&(n.baseState=!1,Gt=!0),n.memoizedState=a)}function l0(n,i){var a=Pe;Pe=a!==0&&4>a?a:4,n(!0);var c=sh.transition;sh.transition={};try{n(!1),i()}finally{Pe=a,sh.transition=c}}function Pp(){return yn().memoizedState}function u0(n,i,a){var c=ii(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Np(n))xp(i,a);else if(a=ap(n,i,a,c),a!==null){var d=$t();Mn(a,n,c,d),Dp(a,i,c)}}function c0(n,i,a){var c=ii(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Np(n))xp(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var v=i.lastRenderedState,I=m(v,a);if(d.hasEagerState=!0,d.eagerState=I,Nn(I,v)){var k=i.interleaved;k===null?(d.next=d,Zc(i)):(d.next=k.next,k.next=d),i.interleaved=d;return}}catch{}finally{}a=ap(n,i,d,c),a!==null&&(d=$t(),Mn(a,n,c,d),Dp(a,i,c))}}function Np(n){var i=n.alternate;return n===Ye||i!==null&&i===Ye}function xp(n,i){la=zl=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Dp(n,i,a){if(a&4194240){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,zr(n,a)}}var ql={readContext:gn,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useInsertionEffect:Dt,useLayoutEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useMutableSource:Dt,useSyncExternalStore:Dt,useId:Dt,unstable_isNewReconciler:!1},h0={readContext:gn,useCallback:function(n,i){return Yn().memoizedState=[n,i===void 0?null:i],n},useContext:gn,useEffect:Ep,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Hl(4194308,4,Sp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Hl(4194308,4,n,i)},useInsertionEffect:function(n,i){return Hl(4,2,n,i)},useMemo:function(n,i){var a=Yn();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Yn();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=u0.bind(null,Ye,n),[c.memoizedState,n]},useRef:function(n){var i=Yn();return n={current:n},i.memoizedState=n},useState:vp,useDebugValue:dh,useDeferredValue:function(n){return Yn().memoizedState=n},useTransition:function(){var n=vp(!1),i=n[0];return n=l0.bind(null,n[1]),Yn().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Ye,d=Yn();if(Ge){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),gt===null)throw Error(t(349));zi&30||pp(c,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,Ep(gp.bind(null,c,m,n),[n]),c.flags|=2048,ha(9,mp.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=Yn(),i=gt.identifierPrefix;if(Ge){var a=wr,c=vr;a=(c&~(1<<32-Ut(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=ua++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=a0++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},d0={readContext:gn,useCallback:Ap,useContext:gn,useEffect:hh,useImperativeHandle:Cp,useInsertionEffect:Tp,useLayoutEffect:Ip,useMemo:Rp,useReducer:uh,useRef:wp,useState:function(){return uh(ca)},useDebugValue:dh,useDeferredValue:function(n){var i=yn();return kp(i,ht.memoizedState,n)},useTransition:function(){var n=uh(ca)[0],i=yn().memoizedState;return[n,i]},useMutableSource:dp,useSyncExternalStore:fp,useId:Pp,unstable_isNewReconciler:!1},f0={readContext:gn,useCallback:Ap,useContext:gn,useEffect:hh,useImperativeHandle:Cp,useInsertionEffect:Tp,useLayoutEffect:Ip,useMemo:Rp,useReducer:ch,useRef:wp,useState:function(){return ch(ca)},useDebugValue:dh,useDeferredValue:function(n){var i=yn();return ht===null?i.memoizedState=n:kp(i,ht.memoizedState,n)},useTransition:function(){var n=ch(ca)[0],i=yn().memoizedState;return[n,i]},useMutableSource:dp,useSyncExternalStore:fp,useId:Pp,unstable_isNewReconciler:!1};function Dn(n,i){if(n&&n.defaultProps){i=se({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function fh(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:se({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Kl={isMounted:function(n){return(n=n._reactInternals)?In(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=$t(),d=ii(n),m=Tr(c,d);m.payload=i,a!=null&&(m.callback=a),i=ei(n,m,d),i!==null&&(Mn(i,n,d,c),Ul(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=$t(),d=ii(n),m=Tr(c,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=ei(n,m,d),i!==null&&(Mn(i,n,d,c),Ul(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=$t(),c=ii(n),d=Tr(a,c);d.tag=2,i!=null&&(d.callback=i),i=ei(n,d,c),i!==null&&(Mn(i,n,c,a),Ul(i,n,c))}};function Lp(n,i,a,c,d,m,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,v):i.prototype&&i.prototype.isPureReactComponent?!Yo(a,c)||!Yo(d,m):!0}function Op(n,i,a){var c=!1,d=Yr,m=i.contextType;return typeof m=="object"&&m!==null?m=gn(m):(d=Kt(i)?Fi:xt.current,c=i.contextTypes,m=(c=c!=null)?qs(n,d):Yr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Kl,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function Mp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Kl.enqueueReplaceState(i,i.state,null)}function ph(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},eh(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=gn(m):(m=Kt(i)?Fi:xt.current,d.context=qs(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(fh(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Kl.enqueueReplaceState(d,d.state,null),jl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function eo(n,i){try{var a="",c=i;do a+=Ie(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function mh(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function gh(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var p0=typeof WeakMap=="function"?WeakMap:Map;function Vp(n,i,a){a=Tr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){eu||(eu=!0,xh=c),gh(n,i)},a}function bp(n,i,a){a=Tr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){gh(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){gh(n,i),typeof c!="function"&&(ni===null?ni=new Set([this]):ni.add(this));var v=i.stack;this.componentDidCatch(i.value,{componentStack:v!==null?v:""})}),a}function Fp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new p0;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=k0.bind(null,n,i,a),i.then(n,n))}function Up(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function jp(n,i,a,c,d){return n.mode&1?(n.flags|=65536,n.lanes=d,n):(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Tr(-1,1),i.tag=2,ei(a,i,1))),a.lanes|=1),n)}var m0=de.ReactCurrentOwner,Gt=!1;function Bt(n,i,a,c){i.child=n===null?op(i,null,a,c):Xs(i,n.child,a,c)}function Bp(n,i,a,c,d){a=a.render;var m=i.ref;return Js(i,d),c=ah(n,i,a,c,m,d),a=lh(),n!==null&&!Gt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Ir(n,i,d)):(Ge&&a&&Hc(i),i.flags|=1,Bt(n,i,c,d),i.child)}function $p(n,i,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!Fh(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,zp(n,i,m,c,d)):(n=ou(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,!(n.lanes&d)){var v=m.memoizedProps;if(a=a.compare,a=a!==null?a:Yo,a(v,c)&&n.ref===i.ref)return Ir(n,i,d)}return i.flags|=1,n=oi(m,c),n.ref=i.ref,n.return=i,i.child=n}function zp(n,i,a,c,d){if(n!==null){var m=n.memoizedProps;if(Yo(m,c)&&n.ref===i.ref)if(Gt=!1,i.pendingProps=c=m,(n.lanes&d)!==0)n.flags&131072&&(Gt=!0);else return i.lanes=n.lanes,Ir(n,i,d)}return yh(n,i,a,c,d)}function Hp(n,i,a){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},ze(no,ln),ln|=a;else{if(!(a&1073741824))return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,ze(no,ln),ln|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,ze(no,ln),ln|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,ze(no,ln),ln|=c;return Bt(n,i,d,a),i.child}function Wp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function yh(n,i,a,c,d){var m=Kt(a)?Fi:xt.current;return m=qs(i,m),Js(i,d),a=ah(n,i,a,c,m,d),c=lh(),n!==null&&!Gt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Ir(n,i,d)):(Ge&&c&&Hc(i),i.flags|=1,Bt(n,i,a,d),i.child)}function qp(n,i,a,c,d){if(Kt(a)){var m=!0;xl(i)}else m=!1;if(Js(i,d),i.stateNode===null)Ql(n,i),Op(i,a,c),ph(i,a,c,d),c=!0;else if(n===null){var v=i.stateNode,I=i.memoizedProps;v.props=I;var k=v.context,B=a.contextType;typeof B=="object"&&B!==null?B=gn(B):(B=Kt(a)?Fi:xt.current,B=qs(i,B));var X=a.getDerivedStateFromProps,Y=typeof X=="function"||typeof v.getSnapshotBeforeUpdate=="function";Y||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(I!==c||k!==B)&&Mp(i,v,c,B),Zr=!1;var Q=i.memoizedState;v.state=Q,jl(i,c,v,d),k=i.memoizedState,I!==c||Q!==k||qt.current||Zr?(typeof X=="function"&&(fh(i,a,X,c),k=i.memoizedState),(I=Zr||Lp(i,a,I,c,Q,k,B))?(Y||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(i.flags|=4194308)):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=k),v.props=c,v.state=k,v.context=B,c=I):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{v=i.stateNode,lp(n,i),I=i.memoizedProps,B=i.type===i.elementType?I:Dn(i.type,I),v.props=B,Y=i.pendingProps,Q=v.context,k=a.contextType,typeof k=="object"&&k!==null?k=gn(k):(k=Kt(a)?Fi:xt.current,k=qs(i,k));var re=a.getDerivedStateFromProps;(X=typeof re=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(I!==Y||Q!==k)&&Mp(i,v,c,k),Zr=!1,Q=i.memoizedState,v.state=Q,jl(i,c,v,d);var ae=i.memoizedState;I!==Y||Q!==ae||qt.current||Zr?(typeof re=="function"&&(fh(i,a,re,c),ae=i.memoizedState),(B=Zr||Lp(i,a,B,c,Q,ae,k)||!1)?(X||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ae,k),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ae,k)),typeof v.componentDidUpdate=="function"&&(i.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof v.componentDidUpdate!="function"||I===n.memoizedProps&&Q===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&Q===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ae),v.props=c,v.state=ae,v.context=k,c=B):(typeof v.componentDidUpdate!="function"||I===n.memoizedProps&&Q===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&Q===n.memoizedState||(i.flags|=1024),c=!1)}return _h(n,i,a,c,m,d)}function _h(n,i,a,c,d,m){Wp(n,i);var v=(i.flags&128)!==0;if(!c&&!v)return d&&Yf(i,a,!1),Ir(n,i,m);c=i.stateNode,m0.current=i;var I=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&v?(i.child=Xs(i,n.child,null,m),i.child=Xs(i,null,I,m)):Bt(n,i,I,m),i.memoizedState=c.state,d&&Yf(i,a,!0),i.child}function Kp(n){var i=n.stateNode;i.pendingContext?Qf(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Qf(n,i.context,!1),th(n,i.containerInfo)}function Gp(n,i,a,c,d){return Qs(),Gc(d),i.flags|=256,Bt(n,i,a,c),i.child}var vh={dehydrated:null,treeContext:null,retryLane:0};function wh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Qp(n,i,a){var c=i.pendingProps,d=Xe.current,m=!1,v=(i.flags&128)!==0,I;if((I=v)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),ze(Xe,d&1),n===null)return Kc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(i.mode&1?n.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(v=c.children,n=c.fallback,m?(c=i.mode,m=i.child,v={mode:"hidden",children:v},!(c&1)&&m!==null?(m.childLanes=0,m.pendingProps=v):m=au(v,c,0,null),n=Gi(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=wh(a),i.memoizedState=vh,n):Eh(i,v));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return g0(n,i,v,c,I,d,a);if(m){m=c.fallback,v=i.mode,d=n.child,I=d.sibling;var k={mode:"hidden",children:c.children};return!(v&1)&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=k,i.deletions=null):(c=oi(d,k),c.subtreeFlags=d.subtreeFlags&14680064),I!==null?m=oi(I,m):(m=Gi(m,v,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,v=n.child.memoizedState,v=v===null?wh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},m.memoizedState=v,m.childLanes=n.childLanes&~a,i.memoizedState=vh,c}return m=n.child,n=m.sibling,c=oi(m,{mode:"visible",children:c.children}),!(i.mode&1)&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Eh(n,i){return i=au({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Gl(n,i,a,c){return c!==null&&Gc(c),Xs(i,n.child,null,a),n=Eh(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function g0(n,i,a,c,d,m,v){if(a)return i.flags&256?(i.flags&=-257,c=mh(Error(t(422))),Gl(n,i,v,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=au({mode:"visible",children:c.children},d,0,null),m=Gi(m,d,v,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,i.mode&1&&Xs(i,n.child,null,v),i.child.memoizedState=wh(v),i.memoizedState=vh,m);if(!(i.mode&1))return Gl(n,i,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var I=c.dgst;return c=I,m=Error(t(419)),c=mh(m,c,void 0),Gl(n,i,v,c)}if(I=(v&n.childLanes)!==0,Gt||I){if(c=gt,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(c.suspendedLanes|v)?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Er(n,d),Mn(c,n,d,-1))}return bh(),c=mh(Error(t(421))),Gl(n,i,v,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=P0.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,an=Qr(d.nextSibling),on=i,Ge=!0,xn=null,n!==null&&(pn[mn++]=vr,pn[mn++]=wr,pn[mn++]=Ui,vr=n.id,wr=n.overflow,Ui=i),i=Eh(i,c.children),i.flags|=4096,i)}function Xp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Jc(n.return,i,a)}function Th(n,i,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function Yp(n,i,a){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(Bt(n,i,c.children,a),c=Xe.current,c&2)c=c&1|2,i.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Xp(n,a,i);else if(n.tag===19)Xp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(ze(Xe,c),!(i.mode&1))i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Bl(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Th(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Bl(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Th(i,!0,a,null,m);break;case"together":Th(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ql(n,i){!(i.mode&1)&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Ir(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Hi|=i.lanes,!(a&i.childLanes))return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=oi(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=oi(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function y0(n,i,a){switch(i.tag){case 3:Kp(i),Qs();break;case 5:hp(i);break;case 1:Kt(i.type)&&xl(i);break;case 4:th(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;ze(bl,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(ze(Xe,Xe.current&1),i.flags|=128,null):a&i.child.childLanes?Qp(n,i,a):(ze(Xe,Xe.current&1),n=Ir(n,i,a),n!==null?n.sibling:null);ze(Xe,Xe.current&1);break;case 19:if(c=(a&i.childLanes)!==0,n.flags&128){if(c)return Yp(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),ze(Xe,Xe.current),c)break;return null;case 22:case 23:return i.lanes=0,Hp(n,i,a)}return Ir(n,i,a)}var Jp,Ih,Zp,em;Jp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Ih=function(){},Zp=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,$i(Xn.current);var m=null;switch(a){case"input":d=Ei(n,d),c=Ei(n,c),m=[];break;case"select":d=se({},d,{value:void 0}),c=se({},c,{value:void 0}),m=[];break;case"textarea":d=Ao(n,d),c=Ao(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=kl)}Do(a,c);var v;a=null;for(B in d)if(!c.hasOwnProperty(B)&&d.hasOwnProperty(B)&&d[B]!=null)if(B==="style"){var I=d[B];for(v in I)I.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else B!=="dangerouslySetInnerHTML"&&B!=="children"&&B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&B!=="autoFocus"&&(o.hasOwnProperty(B)?m||(m=[]):(m=m||[]).push(B,null));for(B in c){var k=c[B];if(I=d!=null?d[B]:void 0,c.hasOwnProperty(B)&&k!==I&&(k!=null||I!=null))if(B==="style")if(I){for(v in I)!I.hasOwnProperty(v)||k&&k.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in k)k.hasOwnProperty(v)&&I[v]!==k[v]&&(a||(a={}),a[v]=k[v])}else a||(m||(m=[]),m.push(B,a)),a=k;else B==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,I=I?I.__html:void 0,k!=null&&I!==k&&(m=m||[]).push(B,k)):B==="children"?typeof k!="string"&&typeof k!="number"||(m=m||[]).push(B,""+k):B!=="suppressContentEditableWarning"&&B!=="suppressHydrationWarning"&&(o.hasOwnProperty(B)?(k!=null&&B==="onScroll"&&We("scroll",n),m||I===k||(m=[])):(m=m||[]).push(B,k))}a&&(m=m||[]).push("style",a);var B=m;(i.updateQueue=B)&&(i.flags|=4)}},em=function(n,i,a,c){a!==c&&(i.flags|=4)};function da(n,i){if(!Ge)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Lt(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function _0(n,i,a){var c=i.pendingProps;switch(Wc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(i),null;case 1:return Kt(i.type)&&Nl(),Lt(i),null;case 3:return c=i.stateNode,Zs(),qe(qt),qe(xt),ih(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Ml(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,xn!==null&&(Oh(xn),xn=null))),Ih(n,i),Lt(i),null;case 5:nh(i);var d=$i(aa.current);if(a=i.type,n!==null&&i.stateNode!=null)Zp(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Lt(i),null}if(n=$i(Xn.current),Ml(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[Qn]=i,c[na]=m,n=(i.mode&1)!==0,a){case"dialog":We("cancel",c),We("close",c);break;case"iframe":case"object":case"embed":We("load",c);break;case"video":case"audio":for(d=0;d<Zo.length;d++)We(Zo[d],c);break;case"source":We("error",c);break;case"img":case"image":case"link":We("error",c),We("load",c);break;case"details":We("toggle",c);break;case"input":ps(c,m),We("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},We("invalid",c);break;case"textarea":gs(c,m),We("invalid",c)}Do(a,m),d=null;for(var v in m)if(m.hasOwnProperty(v)){var I=m[v];v==="children"?typeof I=="string"?c.textContent!==I&&(m.suppressHydrationWarning!==!0&&Rl(c.textContent,I,n),d=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(m.suppressHydrationWarning!==!0&&Rl(c.textContent,I,n),d=["children",""+I]):o.hasOwnProperty(v)&&I!=null&&v==="onScroll"&&We("scroll",c)}switch(a){case"input":ar(c),Za(c,m,!0);break;case"textarea":ar(c),Ro(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=kl)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=lt(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[Qn]=i,n[na]=c,Jp(n,i,!1,!1),i.stateNode=n;e:{switch(v=Lo(a,c),a){case"dialog":We("cancel",n),We("close",n),d=c;break;case"iframe":case"object":case"embed":We("load",n),d=c;break;case"video":case"audio":for(d=0;d<Zo.length;d++)We(Zo[d],n);d=c;break;case"source":We("error",n),d=c;break;case"img":case"image":case"link":We("error",n),We("load",n),d=c;break;case"details":We("toggle",n),d=c;break;case"input":ps(n,c),d=Ei(n,c),We("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=se({},c,{value:void 0}),We("invalid",n);break;case"textarea":gs(n,c),d=Ao(n,c),We("invalid",n);break;default:d=c}Do(a,d),I=d;for(m in I)if(I.hasOwnProperty(m)){var k=I[m];m==="style"?No(n,k):m==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&ko(n,k)):m==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&Fr(n,k):typeof k=="number"&&Fr(n,""+k):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?k!=null&&m==="onScroll"&&We("scroll",n):k!=null&&ie(n,m,k,v))}switch(a){case"input":ar(n),Za(n,c,!1);break;case"textarea":ar(n),Ro(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Ve(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?ur(n,!!c.multiple,m,!1):c.defaultValue!=null&&ur(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=kl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Lt(i),null;case 6:if(n&&i.stateNode!=null)em(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=$i(aa.current),$i(Xn.current),Ml(i)){if(c=i.stateNode,a=i.memoizedProps,c[Qn]=i,(m=c.nodeValue!==a)&&(n=on,n!==null))switch(n.tag){case 3:Rl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Rl(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Qn]=i,i.stateNode=c}return Lt(i),null;case 13:if(qe(Xe),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ge&&an!==null&&i.mode&1&&!(i.flags&128))rp(),Qs(),i.flags|=98560,m=!1;else if(m=Ml(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Qn]=i}else Qs(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;Lt(i),m=!1}else xn!==null&&(Oh(xn),xn=null),m=!0;if(!m)return i.flags&65536?i:null}return i.flags&128?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,i.mode&1&&(n===null||Xe.current&1?dt===0&&(dt=3):bh())),i.updateQueue!==null&&(i.flags|=4),Lt(i),null);case 4:return Zs(),Ih(n,i),n===null&&ea(i.stateNode.containerInfo),Lt(i),null;case 10:return Yc(i.type._context),Lt(i),null;case 17:return Kt(i.type)&&Nl(),Lt(i),null;case 19:if(qe(Xe),m=i.memoizedState,m===null)return Lt(i),null;if(c=(i.flags&128)!==0,v=m.rendering,v===null)if(c)da(m,!1);else{if(dt!==0||n!==null&&n.flags&128)for(n=i.child;n!==null;){if(v=Bl(n),v!==null){for(i.flags|=128,da(m,!1),c=v.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,v=m.alternate,v===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=v.childLanes,m.lanes=v.lanes,m.child=v.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=v.memoizedProps,m.memoizedState=v.memoizedState,m.updateQueue=v.updateQueue,m.type=v.type,n=v.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return ze(Xe,Xe.current&1|2),i.child}n=n.sibling}m.tail!==null&&$e()>ro&&(i.flags|=128,c=!0,da(m,!1),i.lanes=4194304)}else{if(!c)if(n=Bl(v),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),da(m,!0),m.tail===null&&m.tailMode==="hidden"&&!v.alternate&&!Ge)return Lt(i),null}else 2*$e()-m.renderingStartTime>ro&&a!==1073741824&&(i.flags|=128,c=!0,da(m,!1),i.lanes=4194304);m.isBackwards?(v.sibling=i.child,i.child=v):(a=m.last,a!==null?a.sibling=v:i.child=v,m.last=v)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=$e(),i.sibling=null,a=Xe.current,ze(Xe,c?a&1|2:a&1),i):(Lt(i),null);case 22:case 23:return Vh(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&i.mode&1?ln&1073741824&&(Lt(i),i.subtreeFlags&6&&(i.flags|=8192)):Lt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function v0(n,i){switch(Wc(i),i.tag){case 1:return Kt(i.type)&&Nl(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Zs(),qe(qt),qe(xt),ih(),n=i.flags,n&65536&&!(n&128)?(i.flags=n&-65537|128,i):null;case 5:return nh(i),null;case 13:if(qe(Xe),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Qs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return qe(Xe),null;case 4:return Zs(),null;case 10:return Yc(i.type._context),null;case 22:case 23:return Vh(),null;case 24:return null;default:return null}}var Xl=!1,Ot=!1,w0=typeof WeakSet=="function"?WeakSet:Set,oe=null;function to(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Ze(n,i,c)}else a.current=null}function Sh(n,i,a){try{a()}catch(c){Ze(n,i,c)}}var tm=!1;function E0(n,i){if(Vc=qr,n=Lf(),kc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var v=0,I=-1,k=-1,B=0,X=0,Y=n,Q=null;t:for(;;){for(var re;Y!==a||d!==0&&Y.nodeType!==3||(I=v+d),Y!==m||c!==0&&Y.nodeType!==3||(k=v+c),Y.nodeType===3&&(v+=Y.nodeValue.length),(re=Y.firstChild)!==null;)Q=Y,Y=re;for(;;){if(Y===n)break t;if(Q===a&&++B===d&&(I=v),Q===m&&++X===c&&(k=v),(re=Y.nextSibling)!==null)break;Y=Q,Q=Y.parentNode}Y=re}a=I===-1||k===-1?null:{start:I,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(bc={focusedElem:n,selectionRange:a},qr=!1,oe=i;oe!==null;)if(i=oe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,oe=n;else for(;oe!==null;){i=oe;try{var ae=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ae!==null){var le=ae.memoizedProps,it=ae.memoizedState,V=i.stateNode,x=V.getSnapshotBeforeUpdate(i.elementType===i.type?le:Dn(i.type,le),it);V.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var b=i.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ee){Ze(i,i.return,ee)}if(n=i.sibling,n!==null){n.return=i.return,oe=n;break}oe=i.return}return ae=tm,tm=!1,ae}function fa(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&Sh(i,a,m)}d=d.next}while(d!==c)}}function Yl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Ch(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function nm(n){var i=n.alternate;i!==null&&(n.alternate=null,nm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Qn],delete i[na],delete i[Bc],delete i[r0],delete i[i0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function rm(n){return n.tag===5||n.tag===3||n.tag===4}function im(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||rm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ah(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=kl));else if(c!==4&&(n=n.child,n!==null))for(Ah(n,i,a),n=n.sibling;n!==null;)Ah(n,i,a),n=n.sibling}function Rh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Rh(n,i,a),n=n.sibling;n!==null;)Rh(n,i,a),n=n.sibling}var It=null,Ln=!1;function ti(n,i,a){for(a=a.child;a!==null;)sm(n,i,a),a=a.sibling}function sm(n,i,a){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(Ni,a)}catch{}switch(a.tag){case 5:Ot||to(a,i);case 6:var c=It,d=Ln;It=null,ti(n,i,a),It=c,Ln=d,It!==null&&(Ln?(n=It,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):It.removeChild(a.stateNode));break;case 18:It!==null&&(Ln?(n=It,a=a.stateNode,n.nodeType===8?jc(n.parentNode,a):n.nodeType===1&&jc(n,a),kn(n)):jc(It,a.stateNode));break;case 4:c=It,d=Ln,It=a.stateNode.containerInfo,Ln=!0,ti(n,i,a),It=c,Ln=d;break;case 0:case 11:case 14:case 15:if(!Ot&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,v=m.destroy;m=m.tag,v!==void 0&&(m&2||m&4)&&Sh(a,i,v),d=d.next}while(d!==c)}ti(n,i,a);break;case 1:if(!Ot&&(to(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){Ze(a,i,I)}ti(n,i,a);break;case 21:ti(n,i,a);break;case 22:a.mode&1?(Ot=(c=Ot)||a.memoizedState!==null,ti(n,i,a),Ot=c):ti(n,i,a);break;default:ti(n,i,a)}}function om(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new w0),i.forEach(function(c){var d=N0.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function On(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,v=i,I=v;e:for(;I!==null;){switch(I.tag){case 5:It=I.stateNode,Ln=!1;break e;case 3:It=I.stateNode.containerInfo,Ln=!0;break e;case 4:It=I.stateNode.containerInfo,Ln=!0;break e}I=I.return}if(It===null)throw Error(t(160));sm(m,v,d),It=null,Ln=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch(B){Ze(d,i,B)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)am(i,n),i=i.sibling}function am(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(On(i,n),Jn(n),c&4){try{fa(3,n,n.return),Yl(3,n)}catch(le){Ze(n,n.return,le)}try{fa(5,n,n.return)}catch(le){Ze(n,n.return,le)}}break;case 1:On(i,n),Jn(n),c&512&&a!==null&&to(a,a.return);break;case 5:if(On(i,n),Jn(n),c&512&&a!==null&&to(a,a.return),n.flags&32){var d=n.stateNode;try{Fr(d,"")}catch(le){Ze(n,n.return,le)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,v=a!==null?a.memoizedProps:m,I=n.type,k=n.updateQueue;if(n.updateQueue=null,k!==null)try{I==="input"&&m.type==="radio"&&m.name!=null&&So(d,m),Lo(I,v);var B=Lo(I,m);for(v=0;v<k.length;v+=2){var X=k[v],Y=k[v+1];X==="style"?No(d,Y):X==="dangerouslySetInnerHTML"?ko(d,Y):X==="children"?Fr(d,Y):ie(d,X,Y,B)}switch(I){case"input":Co(d,m);break;case"textarea":ys(d,m);break;case"select":var Q=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var re=m.value;re!=null?ur(d,!!m.multiple,re,!1):Q!==!!m.multiple&&(m.defaultValue!=null?ur(d,!!m.multiple,m.defaultValue,!0):ur(d,!!m.multiple,m.multiple?[]:"",!1))}d[na]=m}catch(le){Ze(n,n.return,le)}}break;case 6:if(On(i,n),Jn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(le){Ze(n,n.return,le)}}break;case 3:if(On(i,n),Jn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{kn(i.containerInfo)}catch(le){Ze(n,n.return,le)}break;case 4:On(i,n),Jn(n);break;case 13:On(i,n),Jn(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(Nh=$e())),c&4&&om(n);break;case 22:if(X=a!==null&&a.memoizedState!==null,n.mode&1?(Ot=(B=Ot)||X,On(i,n),Ot=B):On(i,n),Jn(n),c&8192){if(B=n.memoizedState!==null,(n.stateNode.isHidden=B)&&!X&&n.mode&1)for(oe=n,X=n.child;X!==null;){for(Y=oe=X;oe!==null;){switch(Q=oe,re=Q.child,Q.tag){case 0:case 11:case 14:case 15:fa(4,Q,Q.return);break;case 1:to(Q,Q.return);var ae=Q.stateNode;if(typeof ae.componentWillUnmount=="function"){c=Q,a=Q.return;try{i=c,ae.props=i.memoizedProps,ae.state=i.memoizedState,ae.componentWillUnmount()}catch(le){Ze(c,a,le)}}break;case 5:to(Q,Q.return);break;case 22:if(Q.memoizedState!==null){cm(Y);continue}}re!==null?(re.return=Q,oe=re):cm(Y)}X=X.sibling}e:for(X=null,Y=n;;){if(Y.tag===5){if(X===null){X=Y;try{d=Y.stateNode,B?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(I=Y.stateNode,k=Y.memoizedProps.style,v=k!=null&&k.hasOwnProperty("display")?k.display:null,I.style.display=Po("display",v))}catch(le){Ze(n,n.return,le)}}}else if(Y.tag===6){if(X===null)try{Y.stateNode.nodeValue=B?"":Y.memoizedProps}catch(le){Ze(n,n.return,le)}}else if((Y.tag!==22&&Y.tag!==23||Y.memoizedState===null||Y===n)&&Y.child!==null){Y.child.return=Y,Y=Y.child;continue}if(Y===n)break e;for(;Y.sibling===null;){if(Y.return===null||Y.return===n)break e;X===Y&&(X=null),Y=Y.return}X===Y&&(X=null),Y.sibling.return=Y.return,Y=Y.sibling}}break;case 19:On(i,n),Jn(n),c&4&&om(n);break;case 21:break;default:On(i,n),Jn(n)}}function Jn(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(rm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Fr(d,""),c.flags&=-33);var m=im(n);Rh(n,m,d);break;case 3:case 4:var v=c.stateNode.containerInfo,I=im(n);Ah(n,I,v);break;default:throw Error(t(161))}}catch(k){Ze(n,n.return,k)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function T0(n,i,a){oe=n,lm(n)}function lm(n,i,a){for(var c=(n.mode&1)!==0;oe!==null;){var d=oe,m=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||Xl;if(!v){var I=d.alternate,k=I!==null&&I.memoizedState!==null||Ot;I=Xl;var B=Ot;if(Xl=v,(Ot=k)&&!B)for(oe=d;oe!==null;)v=oe,k=v.child,v.tag===22&&v.memoizedState!==null?hm(d):k!==null?(k.return=v,oe=k):hm(d);for(;m!==null;)oe=m,lm(m),m=m.sibling;oe=d,Xl=I,Ot=B}um(n)}else d.subtreeFlags&8772&&m!==null?(m.return=d,oe=m):um(n)}}function um(n){for(;oe!==null;){var i=oe;if(i.flags&8772){var a=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:Ot||Yl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Ot)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Dn(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&cp(i,m,c);break;case 3:var v=i.updateQueue;if(v!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}cp(i,v,a)}break;case 5:var I=i.stateNode;if(a===null&&i.flags&4){a=I;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var B=i.alternate;if(B!==null){var X=B.memoizedState;if(X!==null){var Y=X.dehydrated;Y!==null&&kn(Y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ot||i.flags&512&&Ch(i)}catch(Q){Ze(i,i.return,Q)}}if(i===n){oe=null;break}if(a=i.sibling,a!==null){a.return=i.return,oe=a;break}oe=i.return}}function cm(n){for(;oe!==null;){var i=oe;if(i===n){oe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,oe=a;break}oe=i.return}}function hm(n){for(;oe!==null;){var i=oe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Yl(4,i)}catch(k){Ze(i,a,k)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(k){Ze(i,d,k)}}var m=i.return;try{Ch(i)}catch(k){Ze(i,m,k)}break;case 5:var v=i.return;try{Ch(i)}catch(k){Ze(i,v,k)}}}catch(k){Ze(i,i.return,k)}if(i===n){oe=null;break}var I=i.sibling;if(I!==null){I.return=i.return,oe=I;break}oe=i.return}}var I0=Math.ceil,Jl=de.ReactCurrentDispatcher,kh=de.ReactCurrentOwner,_n=de.ReactCurrentBatchConfig,Le=0,gt=null,ot=null,St=0,ln=0,no=Xr(0),dt=0,pa=null,Hi=0,Zl=0,Ph=0,ma=null,Qt=null,Nh=0,ro=1/0,Sr=null,eu=!1,xh=null,ni=null,tu=!1,ri=null,nu=0,ga=0,Dh=null,ru=-1,iu=0;function $t(){return Le&6?$e():ru!==-1?ru:ru=$e()}function ii(n){return n.mode&1?Le&2&&St!==0?St&-St:o0.transition!==null?(iu===0&&(iu=Di()),iu):(n=Pe,n!==0||(n=window.event,n=n===void 0?16:Ho(n.type)),n):1}function Mn(n,i,a,c){if(50<ga)throw ga=0,Dh=null,Error(t(185));$r(n,a,c),(!(Le&2)||n!==gt)&&(n===gt&&(!(Le&2)&&(Zl|=a),dt===4&&si(n,St)),Xt(n,c),a===1&&Le===0&&!(i.mode&1)&&(ro=$e()+500,Dl&&Jr()))}function Xt(n,i){var a=n.callbackNode;dr(n,i);var c=xi(n,n===gt?St:0);if(c===0)a!==null&&Uo(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Uo(a),i===1)n.tag===0?s0(fm.bind(null,n)):Jf(fm.bind(null,n)),t0(function(){!(Le&6)&&Jr()}),a=null;else{switch(Hr(c)){case 1:a=Pi;break;case 4:a=Ur;break;case 16:a=hn;break;case 536870912:a=il;break;default:a=hn}a=Em(a,dm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function dm(n,i){if(ru=-1,iu=0,Le&6)throw Error(t(327));var a=n.callbackNode;if(io()&&n.callbackNode!==a)return null;var c=xi(n,n===gt?St:0);if(c===0)return null;if(c&30||c&n.expiredLanes||i)i=su(n,c);else{i=c;var d=Le;Le|=2;var m=mm();(gt!==n||St!==i)&&(Sr=null,ro=$e()+500,qi(n,i));do try{A0();break}catch(I){pm(n,I)}while(!0);Xc(),Jl.current=m,Le=d,ot!==null?i=0:(gt=null,St=0,i=dt)}if(i!==0){if(i===2&&(d=nn(n),d!==0&&(c=d,i=Lh(n,d))),i===1)throw a=pa,qi(n,0),si(n,c),Xt(n,$e()),a;if(i===6)si(n,c);else{if(d=n.current.alternate,!(c&30)&&!S0(d)&&(i=su(n,c),i===2&&(m=nn(n),m!==0&&(c=m,i=Lh(n,m))),i===1))throw a=pa,qi(n,0),si(n,c),Xt(n,$e()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Ki(n,Qt,Sr);break;case 3:if(si(n,c),(c&130023424)===c&&(i=Nh+500-$e(),10<i)){if(xi(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){$t(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Uc(Ki.bind(null,n,Qt,Sr),i);break}Ki(n,Qt,Sr);break;case 4:if(si(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var v=31-Ut(c);m=1<<v,v=i[v],v>d&&(d=v),c&=~m}if(c=d,c=$e()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*I0(c/1960))-c,10<c){n.timeoutHandle=Uc(Ki.bind(null,n,Qt,Sr),c);break}Ki(n,Qt,Sr);break;case 5:Ki(n,Qt,Sr);break;default:throw Error(t(329))}}}return Xt(n,$e()),n.callbackNode===a?dm.bind(null,n):null}function Lh(n,i){var a=ma;return n.current.memoizedState.isDehydrated&&(qi(n,i).flags|=256),n=su(n,i),n!==2&&(i=Qt,Qt=a,i!==null&&Oh(i)),n}function Oh(n){Qt===null?Qt=n:Qt.push.apply(Qt,n)}function S0(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!Nn(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function si(n,i){for(i&=~Ph,i&=~Zl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Ut(i),c=1<<a;n[a]=-1,i&=~c}}function fm(n){if(Le&6)throw Error(t(327));io();var i=xi(n,0);if(!(i&1))return Xt(n,$e()),null;var a=su(n,i);if(n.tag!==0&&a===2){var c=nn(n);c!==0&&(i=c,a=Lh(n,c))}if(a===1)throw a=pa,qi(n,0),si(n,i),Xt(n,$e()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Ki(n,Qt,Sr),Xt(n,$e()),null}function Mh(n,i){var a=Le;Le|=1;try{return n(i)}finally{Le=a,Le===0&&(ro=$e()+500,Dl&&Jr())}}function Wi(n){ri!==null&&ri.tag===0&&!(Le&6)&&io();var i=Le;Le|=1;var a=_n.transition,c=Pe;try{if(_n.transition=null,Pe=1,n)return n()}finally{Pe=c,_n.transition=a,Le=i,!(Le&6)&&Jr()}}function Vh(){ln=no.current,qe(no)}function qi(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,e0(a)),ot!==null)for(a=ot.return;a!==null;){var c=a;switch(Wc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Nl();break;case 3:Zs(),qe(qt),qe(xt),ih();break;case 5:nh(c);break;case 4:Zs();break;case 13:qe(Xe);break;case 19:qe(Xe);break;case 10:Yc(c.type._context);break;case 22:case 23:Vh()}a=a.return}if(gt=n,ot=n=oi(n.current,null),St=ln=i,dt=0,pa=null,Ph=Zl=Hi=0,Qt=ma=null,Bi!==null){for(i=0;i<Bi.length;i++)if(a=Bi[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var v=m.next;m.next=d,c.next=v}a.pending=c}Bi=null}return n}function pm(n,i){do{var a=ot;try{if(Xc(),$l.current=ql,zl){for(var c=Ye.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}zl=!1}if(zi=0,mt=ht=Ye=null,la=!1,ua=0,kh.current=null,a===null||a.return===null){dt=1,pa=i,ot=null;break}e:{var m=n,v=a.return,I=a,k=i;if(i=St,I.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var B=k,X=I,Y=X.tag;if(!(X.mode&1)&&(Y===0||Y===11||Y===15)){var Q=X.alternate;Q?(X.updateQueue=Q.updateQueue,X.memoizedState=Q.memoizedState,X.lanes=Q.lanes):(X.updateQueue=null,X.memoizedState=null)}var re=Up(v);if(re!==null){re.flags&=-257,jp(re,v,I,m,i),re.mode&1&&Fp(m,B,i),i=re,k=B;var ae=i.updateQueue;if(ae===null){var le=new Set;le.add(k),i.updateQueue=le}else ae.add(k);break e}else{if(!(i&1)){Fp(m,B,i),bh();break e}k=Error(t(426))}}else if(Ge&&I.mode&1){var it=Up(v);if(it!==null){!(it.flags&65536)&&(it.flags|=256),jp(it,v,I,m,i),Gc(eo(k,I));break e}}m=k=eo(k,I),dt!==4&&(dt=2),ma===null?ma=[m]:ma.push(m),m=v;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var V=Vp(m,k,i);up(m,V);break e;case 1:I=k;var x=m.type,b=m.stateNode;if(!(m.flags&128)&&(typeof x.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(ni===null||!ni.has(b)))){m.flags|=65536,i&=-i,m.lanes|=i;var ee=bp(m,I,i);up(m,ee);break e}}m=m.return}while(m!==null)}ym(a)}catch(ce){i=ce,ot===a&&a!==null&&(ot=a=a.return);continue}break}while(!0)}function mm(){var n=Jl.current;return Jl.current=ql,n===null?ql:n}function bh(){(dt===0||dt===3||dt===2)&&(dt=4),gt===null||!(Hi&268435455)&&!(Zl&268435455)||si(gt,St)}function su(n,i){var a=Le;Le|=2;var c=mm();(gt!==n||St!==i)&&(Sr=null,qi(n,i));do try{C0();break}catch(d){pm(n,d)}while(!0);if(Xc(),Le=a,Jl.current=c,ot!==null)throw Error(t(261));return gt=null,St=0,dt}function C0(){for(;ot!==null;)gm(ot)}function A0(){for(;ot!==null&&!nl();)gm(ot)}function gm(n){var i=wm(n.alternate,n,ln);n.memoizedProps=n.pendingProps,i===null?ym(n):ot=i,kh.current=null}function ym(n){var i=n;do{var a=i.alternate;if(n=i.return,i.flags&32768){if(a=v0(a,i),a!==null){a.flags&=32767,ot=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{dt=6,ot=null;return}}else if(a=_0(a,i,ln),a!==null){ot=a;return}if(i=i.sibling,i!==null){ot=i;return}ot=i=n}while(i!==null);dt===0&&(dt=5)}function Ki(n,i,a){var c=Pe,d=_n.transition;try{_n.transition=null,Pe=1,R0(n,i,a,c)}finally{_n.transition=d,Pe=c}return null}function R0(n,i,a,c){do io();while(ri!==null);if(Le&6)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(je(n,m),n===gt&&(ot=gt=null,St=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||tu||(tu=!0,Em(hn,function(){return io(),null})),m=(a.flags&15990)!==0,a.subtreeFlags&15990||m){m=_n.transition,_n.transition=null;var v=Pe;Pe=1;var I=Le;Le|=4,kh.current=null,E0(n,a),am(a,n),Kv(bc),qr=!!Vc,bc=Vc=null,n.current=a,T0(a),wc(),Le=I,Pe=v,_n.transition=m}else n.current=a;if(tu&&(tu=!1,ri=n,nu=d),m=n.pendingLanes,m===0&&(ni=null),sl(a.stateNode),Xt(n,$e()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(eu)throw eu=!1,n=xh,xh=null,n;return nu&1&&n.tag!==0&&io(),m=n.pendingLanes,m&1?n===Dh?ga++:(ga=0,Dh=n):ga=0,Jr(),null}function io(){if(ri!==null){var n=Hr(nu),i=_n.transition,a=Pe;try{if(_n.transition=null,Pe=16>n?16:n,ri===null)var c=!1;else{if(n=ri,ri=null,nu=0,Le&6)throw Error(t(331));var d=Le;for(Le|=4,oe=n.current;oe!==null;){var m=oe,v=m.child;if(oe.flags&16){var I=m.deletions;if(I!==null){for(var k=0;k<I.length;k++){var B=I[k];for(oe=B;oe!==null;){var X=oe;switch(X.tag){case 0:case 11:case 15:fa(8,X,m)}var Y=X.child;if(Y!==null)Y.return=X,oe=Y;else for(;oe!==null;){X=oe;var Q=X.sibling,re=X.return;if(nm(X),X===B){oe=null;break}if(Q!==null){Q.return=re,oe=Q;break}oe=re}}}var ae=m.alternate;if(ae!==null){var le=ae.child;if(le!==null){ae.child=null;do{var it=le.sibling;le.sibling=null,le=it}while(le!==null)}}oe=m}}if(m.subtreeFlags&2064&&v!==null)v.return=m,oe=v;else e:for(;oe!==null;){if(m=oe,m.flags&2048)switch(m.tag){case 0:case 11:case 15:fa(9,m,m.return)}var V=m.sibling;if(V!==null){V.return=m.return,oe=V;break e}oe=m.return}}var x=n.current;for(oe=x;oe!==null;){v=oe;var b=v.child;if(v.subtreeFlags&2064&&b!==null)b.return=v,oe=b;else e:for(v=x;oe!==null;){if(I=oe,I.flags&2048)try{switch(I.tag){case 0:case 11:case 15:Yl(9,I)}}catch(ce){Ze(I,I.return,ce)}if(I===v){oe=null;break e}var ee=I.sibling;if(ee!==null){ee.return=I.return,oe=ee;break e}oe=I.return}}if(Le=d,Jr(),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(Ni,n)}catch{}c=!0}return c}finally{Pe=a,_n.transition=i}}return!1}function _m(n,i,a){i=eo(a,i),i=Vp(n,i,1),n=ei(n,i,1),i=$t(),n!==null&&($r(n,1,i),Xt(n,i))}function Ze(n,i,a){if(n.tag===3)_m(n,n,a);else for(;i!==null;){if(i.tag===3){_m(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ni===null||!ni.has(c))){n=eo(a,n),n=bp(i,n,1),i=ei(i,n,1),n=$t(),i!==null&&($r(i,1,n),Xt(i,n));break}}i=i.return}}function k0(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=$t(),n.pingedLanes|=n.suspendedLanes&a,gt===n&&(St&a)===a&&(dt===4||dt===3&&(St&130023424)===St&&500>$e()-Nh?qi(n,0):Ph|=a),Xt(n,i)}function vm(n,i){i===0&&(n.mode&1?(i=Rs,Rs<<=1,!(Rs&130023424)&&(Rs=4194304)):i=1);var a=$t();n=Er(n,i),n!==null&&($r(n,i,a),Xt(n,a))}function P0(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),vm(n,a)}function N0(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),vm(n,a)}var wm;wm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||qt.current)Gt=!0;else{if(!(n.lanes&a)&&!(i.flags&128))return Gt=!1,y0(n,i,a);Gt=!!(n.flags&131072)}else Gt=!1,Ge&&i.flags&1048576&&Zf(i,Ol,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Ql(n,i),n=i.pendingProps;var d=qs(i,xt.current);Js(i,a),d=ah(null,i,c,n,d,a);var m=lh();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Kt(c)?(m=!0,xl(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,eh(i),d.updater=Kl,i.stateNode=d,d._reactInternals=i,ph(i,c,n,a),i=_h(null,i,c,!0,m,a)):(i.tag=0,Ge&&m&&Hc(i),Bt(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Ql(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=D0(c),n=Dn(c,n),d){case 0:i=yh(null,i,c,n,a);break e;case 1:i=qp(null,i,c,n,a);break e;case 11:i=Bp(null,i,c,n,a);break e;case 14:i=$p(null,i,c,Dn(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Dn(c,d),yh(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Dn(c,d),qp(n,i,c,d,a);case 3:e:{if(Kp(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,lp(n,i),jl(i,c,null,a);var v=i.memoizedState;if(c=v.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=eo(Error(t(423)),i),i=Gp(n,i,c,a,d);break e}else if(c!==d){d=eo(Error(t(424)),i),i=Gp(n,i,c,a,d);break e}else for(an=Qr(i.stateNode.containerInfo.firstChild),on=i,Ge=!0,xn=null,a=op(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Qs(),c===d){i=Ir(n,i,a);break e}Bt(n,i,c,a)}i=i.child}return i;case 5:return hp(i),n===null&&Kc(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,v=d.children,Fc(c,d)?v=null:m!==null&&Fc(c,m)&&(i.flags|=32),Wp(n,i),Bt(n,i,v,a),i.child;case 6:return n===null&&Kc(i),null;case 13:return Qp(n,i,a);case 4:return th(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Xs(i,null,c,a):Bt(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Dn(c,d),Bp(n,i,c,d,a);case 7:return Bt(n,i,i.pendingProps,a),i.child;case 8:return Bt(n,i,i.pendingProps.children,a),i.child;case 12:return Bt(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,v=d.value,ze(bl,c._currentValue),c._currentValue=v,m!==null)if(Nn(m.value,v)){if(m.children===d.children&&!qt.current){i=Ir(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var I=m.dependencies;if(I!==null){v=m.child;for(var k=I.firstContext;k!==null;){if(k.context===c){if(m.tag===1){k=Tr(-1,a&-a),k.tag=2;var B=m.updateQueue;if(B!==null){B=B.shared;var X=B.pending;X===null?k.next=k:(k.next=X.next,X.next=k),B.pending=k}}m.lanes|=a,k=m.alternate,k!==null&&(k.lanes|=a),Jc(m.return,a,i),I.lanes|=a;break}k=k.next}}else if(m.tag===10)v=m.type===i.type?null:m.child;else if(m.tag===18){if(v=m.return,v===null)throw Error(t(341));v.lanes|=a,I=v.alternate,I!==null&&(I.lanes|=a),Jc(v,a,i),v=m.sibling}else v=m.child;if(v!==null)v.return=m;else for(v=m;v!==null;){if(v===i){v=null;break}if(m=v.sibling,m!==null){m.return=v.return,v=m;break}v=v.return}m=v}Bt(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Js(i,a),d=gn(d),c=c(d),i.flags|=1,Bt(n,i,c,a),i.child;case 14:return c=i.type,d=Dn(c,i.pendingProps),d=Dn(c.type,d),$p(n,i,c,d,a);case 15:return zp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Dn(c,d),Ql(n,i),i.tag=1,Kt(c)?(n=!0,xl(i)):n=!1,Js(i,a),Op(i,c,d),ph(i,c,d,a),_h(null,i,c,!0,n,a);case 19:return Yp(n,i,a);case 22:return Hp(n,i,a)}throw Error(t(156,i.tag))};function Em(n,i){return Cs(n,i)}function x0(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vn(n,i,a,c){return new x0(n,i,a,c)}function Fh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function D0(n){if(typeof n=="function")return Fh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===O)return 11;if(n===Pt)return 14}return 2}function oi(n,i){var a=n.alternate;return a===null?(a=vn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function ou(n,i,a,c,d,m){var v=2;if(c=n,typeof n=="function")Fh(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case N:return Gi(a.children,d,m,i);case T:v=8,d|=8;break;case C:return n=vn(12,a,i,d|2),n.elementType=C,n.lanes=m,n;case A:return n=vn(13,a,i,d),n.elementType=A,n.lanes=m,n;case nt:return n=vn(19,a,i,d),n.elementType=nt,n.lanes=m,n;case Ue:return au(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case P:v=10;break e;case D:v=9;break e;case O:v=11;break e;case Pt:v=14;break e;case Nt:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=vn(v,a,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function Gi(n,i,a,c){return n=vn(7,n,c,i),n.lanes=a,n}function au(n,i,a,c){return n=vn(22,n,c,i),n.elementType=Ue,n.lanes=a,n.stateNode={isHidden:!1},n}function Uh(n,i,a){return n=vn(6,n,null,i),n.lanes=a,n}function jh(n,i,a){return i=vn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function L0(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Br(0),this.expirationTimes=Br(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Br(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Bh(n,i,a,c,d,m,v,I,k){return n=new L0(n,i,a,I,k),i===1?(i=1,m===!0&&(i|=8)):i=0,m=vn(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},eh(m),n}function O0(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ve,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Tm(n){if(!n)return Yr;n=n._reactInternals;e:{if(In(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Kt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Kt(a))return Xf(n,a,i)}return i}function Im(n,i,a,c,d,m,v,I,k){return n=Bh(a,c,!0,n,d,m,v,I,k),n.context=Tm(null),a=n.current,c=$t(),d=ii(a),m=Tr(c,d),m.callback=i??null,ei(a,m,d),n.current.lanes=d,$r(n,d,c),Xt(n,c),n}function lu(n,i,a,c){var d=i.current,m=$t(),v=ii(d);return a=Tm(a),i.context===null?i.context=a:i.pendingContext=a,i=Tr(m,v),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=ei(d,i,v),n!==null&&(Mn(n,d,v,m),Ul(n,d,v)),v}function uu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Sm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function $h(n,i){Sm(n,i),(n=n.alternate)&&Sm(n,i)}function M0(){return null}var Cm=typeof reportError=="function"?reportError:function(n){console.error(n)};function zh(n){this._internalRoot=n}cu.prototype.render=zh.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));lu(n,i,null,null)},cu.prototype.unmount=zh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Wi(function(){lu(null,n,null,null)}),i[yr]=null}};function cu(n){this._internalRoot=n}cu.prototype.unstable_scheduleHydration=function(n){if(n){var i=cl();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Wn.length&&i!==0&&i<Wn[a].priority;a++);Wn.splice(a,0,n),a===0&&fl(n)}};function Hh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function hu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Am(){}function V0(n,i,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var B=uu(v);m.call(B)}}var v=Im(i,c,n,0,null,!1,!1,"",Am);return n._reactRootContainer=v,n[yr]=v.current,ea(n.nodeType===8?n.parentNode:n),Wi(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var I=c;c=function(){var B=uu(k);I.call(B)}}var k=Bh(n,0,!1,null,null,!1,!1,"",Am);return n._reactRootContainer=k,n[yr]=k.current,ea(n.nodeType===8?n.parentNode:n),Wi(function(){lu(i,k,a,c)}),k}function du(n,i,a,c,d){var m=a._reactRootContainer;if(m){var v=m;if(typeof d=="function"){var I=d;d=function(){var k=uu(v);I.call(k)}}lu(i,v,n,d)}else v=V0(a,i,n,d,c);return uu(v)}ll=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=jr(i.pendingLanes);a!==0&&(zr(i,a|1),Xt(i,$e()),!(Le&6)&&(ro=$e()+500,Jr()))}break;case 13:Wi(function(){var c=Er(n,1);if(c!==null){var d=$t();Mn(c,n,1,d)}}),$h(n,1)}},ks=function(n){if(n.tag===13){var i=Er(n,134217728);if(i!==null){var a=$t();Mn(i,n,134217728,a)}$h(n,134217728)}},ul=function(n){if(n.tag===13){var i=ii(n),a=Er(n,i);if(a!==null){var c=$t();Mn(a,n,i,c)}$h(n,i)}},cl=function(){return Pe},hl=function(n,i){var a=Pe;try{return Pe=n,i()}finally{Pe=a}},vs=function(n,i,a){switch(i){case"input":if(Co(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Pl(c);if(!d)throw Error(t(90));fs(c),Co(c,d)}}}break;case"textarea":ys(n,a);break;case"select":i=a.value,i!=null&&ur(n,!!a.multiple,i,!1)}},Ci=Mh,Mo=Wi;var b0={usingClientEntryPoint:!1,Events:[ra,Hs,Pl,zn,Oo,Mh]},ya={findFiberByHostInstance:bi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},F0={bundleType:ya.bundleType,version:ya.version,rendererPackageName:ya.rendererPackageName,rendererConfig:ya.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:de.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Fo(n),n===null?null:n.stateNode},findFiberByHostInstance:ya.findFiberByHostInstance||M0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fu.isDisabled&&fu.supportsFiber)try{Ni=fu.inject(F0),tn=fu}catch{}}return Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=b0,Yt.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hh(i))throw Error(t(200));return O0(n,i,null,a)},Yt.createRoot=function(n,i){if(!Hh(n))throw Error(t(299));var a=!1,c="",d=Cm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Bh(n,1,!1,null,null,a,!1,c,d),n[yr]=i.current,ea(n.nodeType===8?n.parentNode:n),new zh(i)},Yt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Fo(i),n=n===null?null:n.stateNode,n},Yt.flushSync=function(n){return Wi(n)},Yt.hydrate=function(n,i,a){if(!hu(i))throw Error(t(200));return du(null,n,i,!0,a)},Yt.hydrateRoot=function(n,i,a){if(!Hh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",v=Cm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),i=Im(i,null,n,1,a??null,d,!1,m,v),n[yr]=i.current,ea(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new cu(i)},Yt.render=function(n,i,a){if(!hu(i))throw Error(t(200));return du(null,n,i,!1,a)},Yt.unmountComponentAtNode=function(n){if(!hu(n))throw Error(t(40));return n._reactRootContainer?(Wi(function(){du(null,null,n,!1,function(){n._reactRootContainer=null,n[yr]=null})}),!0):!1},Yt.unstable_batchedUpdates=Mh,Yt.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!hu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return du(n,i,a,!1,c)},Yt.version="18.3.1-next-f1338f8080-20240426",Yt}var Om;function q0(){if(Om)return Kh.exports;Om=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Kh.exports=W0(),Kh.exports}var Mm;function K0(){if(Mm)return pu;Mm=1;var r=q0();return pu.createRoot=r.createRoot,pu.hydrateRoot=r.hydrateRoot,pu}var G0=K0(),va={},Vm;function Q0(){if(Vm)return va;Vm=1,Object.defineProperty(va,"__esModule",{value:!0}),va.parse=h,va.serialize=_;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,u=(()=>{const R=function(){};return R.prototype=Object.create(null),R})();function h(R,F){const U=new u,j=R.length;if(j<2)return U;const $=(F==null?void 0:F.decode)||E;let G=0;do{const J=R.indexOf("=",G);if(J===-1)break;const ie=R.indexOf(";",G),de=ie===-1?j:ie;if(J>de){G=R.lastIndexOf(";",J-1)+1;continue}const Ce=p(R,G,J),ve=g(R,J,Ce),N=R.slice(Ce,ve);if(U[N]===void 0){let T=p(R,J+1,de),C=g(R,de,T);const P=$(R.slice(T,C));U[N]=P}G=de+1}while(G<j);return U}function p(R,F,U){do{const j=R.charCodeAt(F);if(j!==32&&j!==9)return F}while(++F<U);return U}function g(R,F,U){for(;F>U;){const j=R.charCodeAt(--F);if(j!==32&&j!==9)return F+1}return U}function _(R,F,U){const j=(U==null?void 0:U.encode)||encodeURIComponent;if(!r.test(R))throw new TypeError(`argument name is invalid: ${R}`);const $=j(F);if(!e.test($))throw new TypeError(`argument val is invalid: ${F}`);let G=R+"="+$;if(!U)return G;if(U.maxAge!==void 0){if(!Number.isInteger(U.maxAge))throw new TypeError(`option maxAge is invalid: ${U.maxAge}`);G+="; Max-Age="+U.maxAge}if(U.domain){if(!t.test(U.domain))throw new TypeError(`option domain is invalid: ${U.domain}`);G+="; Domain="+U.domain}if(U.path){if(!s.test(U.path))throw new TypeError(`option path is invalid: ${U.path}`);G+="; Path="+U.path}if(U.expires){if(!S(U.expires)||!Number.isFinite(U.expires.valueOf()))throw new TypeError(`option expires is invalid: ${U.expires}`);G+="; Expires="+U.expires.toUTCString()}if(U.httpOnly&&(G+="; HttpOnly"),U.secure&&(G+="; Secure"),U.partitioned&&(G+="; Partitioned"),U.priority)switch(typeof U.priority=="string"?U.priority.toLowerCase():void 0){case"low":G+="; Priority=Low";break;case"medium":G+="; Priority=Medium";break;case"high":G+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${U.priority}`)}if(U.sameSite)switch(typeof U.sameSite=="string"?U.sameSite.toLowerCase():U.sameSite){case!0:case"strict":G+="; SameSite=Strict";break;case"lax":G+="; SameSite=Lax";break;case"none":G+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${U.sameSite}`)}return G}function E(R){if(R.indexOf("%")===-1)return R;try{return decodeURIComponent(R)}catch{return R}}function S(R){return o.call(R)==="[object Date]"}return va}Q0();/**
 * react-router v7.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var bm="popstate";function X0(r={}){function e(s,o){let{pathname:u,search:h,hash:p}=s.location;return hd("",{pathname:u,search:h,hash:p},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(s,o){return typeof o=="string"?o:xa(o)}return J0(e,t,null,r)}function Je(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function nr(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Y0(){return Math.random().toString(36).substring(2,10)}function Fm(r,e){return{usr:r.state,key:r.key,idx:e}}function hd(r,e,t=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?_o(e):e,state:t,key:e&&e.key||s||Y0()}}function xa({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function _o(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function J0(r,e,t,s={}){let{window:o=document.defaultView,v5Compat:u=!1}=s,h=o.history,p="POP",g=null,_=E();_==null&&(_=0,h.replaceState({...h.state,idx:_},""));function E(){return(h.state||{idx:null}).idx}function S(){p="POP";let $=E(),G=$==null?null:$-_;_=$,g&&g({action:p,location:j.location,delta:G})}function R($,G){p="PUSH";let J=hd(j.location,$,G);_=E()+1;let ie=Fm(J,_),de=j.createHref(J);try{h.pushState(ie,"",de)}catch(Ce){if(Ce instanceof DOMException&&Ce.name==="DataCloneError")throw Ce;o.location.assign(de)}u&&g&&g({action:p,location:j.location,delta:1})}function F($,G){p="REPLACE";let J=hd(j.location,$,G);_=E();let ie=Fm(J,_),de=j.createHref(J);h.replaceState(ie,"",de),u&&g&&g({action:p,location:j.location,delta:0})}function U($){let G=o.location.origin!=="null"?o.location.origin:o.location.href,J=typeof $=="string"?$:xa($);return J=J.replace(/ $/,"%20"),Je(G,`No window.location.(origin|href) available to create URL for href: ${J}`),new URL(J,G)}let j={get action(){return p},get location(){return r(o,h)},listen($){if(g)throw new Error("A history only accepts one active listener");return o.addEventListener(bm,S),g=$,()=>{o.removeEventListener(bm,S),g=null}},createHref($){return e(o,$)},createURL:U,encodeLocation($){let G=U($);return{pathname:G.pathname,search:G.search,hash:G.hash}},push:R,replace:F,go($){return h.go($)}};return j}function ry(r,e,t="/"){return Z0(r,e,t,!1)}function Z0(r,e,t,s){let o=typeof e=="string"?_o(e):e,u=gi(o.pathname||"/",t);if(u==null)return null;let h=iy(r);ew(h);let p=null;for(let g=0;p==null&&g<h.length;++g){let _=hw(u);p=uw(h[g],_,s)}return p}function iy(r,e=[],t=[],s=""){let o=(u,h,p)=>{let g={relativePath:p===void 0?u.path||"":p,caseSensitive:u.caseSensitive===!0,childrenIndex:h,route:u};g.relativePath.startsWith("/")&&(Je(g.relativePath.startsWith(s),`Absolute route path "${g.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(s.length));let _=kr([s,g.relativePath]),E=t.concat(g);u.children&&u.children.length>0&&(Je(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),iy(u.children,e,E,_)),!(u.path==null&&!u.index)&&e.push({path:_,score:aw(_,u.index),routesMeta:E})};return r.forEach((u,h)=>{var p;if(u.path===""||!((p=u.path)!=null&&p.includes("?")))o(u,h);else for(let g of sy(u.path))o(u,h,g)}),e}function sy(r){let e=r.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),u=t.replace(/\?$/,"");if(s.length===0)return o?[u,""]:[u];let h=sy(s.join("/")),p=[];return p.push(...h.map(g=>g===""?u:[u,g].join("/"))),o&&p.push(...h),p.map(g=>r.startsWith("/")&&g===""?"/":g)}function ew(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:lw(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var tw=/^:[\w-]+$/,nw=3,rw=2,iw=1,sw=10,ow=-2,Um=r=>r==="*";function aw(r,e){let t=r.split("/"),s=t.length;return t.some(Um)&&(s+=ow),e&&(s+=rw),t.filter(o=>!Um(o)).reduce((o,u)=>o+(tw.test(u)?nw:u===""?iw:sw),s)}function lw(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function uw(r,e,t=!1){let{routesMeta:s}=r,o={},u="/",h=[];for(let p=0;p<s.length;++p){let g=s[p],_=p===s.length-1,E=u==="/"?e:e.slice(u.length)||"/",S=Lu({path:g.relativePath,caseSensitive:g.caseSensitive,end:_},E),R=g.route;if(!S&&_&&t&&!s[s.length-1].route.index&&(S=Lu({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},E)),!S)return null;Object.assign(o,S.params),h.push({params:o,pathname:kr([u,S.pathname]),pathnameBase:mw(kr([u,S.pathnameBase])),route:R}),S.pathnameBase!=="/"&&(u=kr([u,S.pathnameBase]))}return h}function Lu(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,s]=cw(r.path,r.caseSensitive,r.end),o=e.match(t);if(!o)return null;let u=o[0],h=u.replace(/(.)\/+$/,"$1"),p=o.slice(1);return{params:s.reduce((_,{paramName:E,isOptional:S},R)=>{if(E==="*"){let U=p[R]||"";h=u.slice(0,u.length-U.length).replace(/(.)\/+$/,"$1")}const F=p[R];return S&&!F?_[E]=void 0:_[E]=(F||"").replace(/%2F/g,"/"),_},{}),pathname:u,pathnameBase:h,pattern:r}}function cw(r,e=!1,t=!0){nr(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,p,g)=>(s.push({paramName:p,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function hw(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return nr(!1,`The URL path "${r}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function gi(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=r.charAt(t);return s&&s!=="/"?null:r.slice(t)||"/"}function dw(r,e="/"){let{pathname:t,search:s="",hash:o=""}=typeof r=="string"?_o(r):r;return{pathname:t?t.startsWith("/")?t:fw(t,e):e,search:gw(s),hash:yw(o)}}function fw(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Xh(r,e,t,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function pw(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function oy(r){let e=pw(r);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function ay(r,e,t,s=!1){let o;typeof r=="string"?o=_o(r):(o={...r},Je(!o.pathname||!o.pathname.includes("?"),Xh("?","pathname","search",o)),Je(!o.pathname||!o.pathname.includes("#"),Xh("#","pathname","hash",o)),Je(!o.search||!o.search.includes("#"),Xh("#","search","hash",o)));let u=r===""||o.pathname==="",h=u?"/":o.pathname,p;if(h==null)p=t;else{let S=e.length-1;if(!s&&h.startsWith("..")){let R=h.split("/");for(;R[0]==="..";)R.shift(),S-=1;o.pathname=R.join("/")}p=S>=0?e[S]:"/"}let g=dw(o,p),_=h&&h!=="/"&&h.endsWith("/"),E=(u||h===".")&&t.endsWith("/");return!g.pathname.endsWith("/")&&(_||E)&&(g.pathname+="/"),g}var kr=r=>r.join("/").replace(/\/\/+/g,"/"),mw=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),gw=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,yw=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function _w(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var ly=["POST","PUT","PATCH","DELETE"];new Set(ly);var vw=["GET",...ly];new Set(vw);var vo=W.createContext(null);vo.displayName="DataRouter";var nc=W.createContext(null);nc.displayName="DataRouterState";var uy=W.createContext({isTransitioning:!1});uy.displayName="ViewTransition";var ww=W.createContext(new Map);ww.displayName="Fetchers";var Ew=W.createContext(null);Ew.displayName="Await";var or=W.createContext(null);or.displayName="Navigation";var Ba=W.createContext(null);Ba.displayName="Location";var Or=W.createContext({outlet:null,matches:[],isDataRoute:!1});Or.displayName="Route";var Ld=W.createContext(null);Ld.displayName="RouteError";function Tw(r,{relative:e}={}){Je($a(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=W.useContext(or),{hash:o,pathname:u,search:h}=za(r,{relative:e}),p=u;return t!=="/"&&(p=u==="/"?t:kr([t,u])),s.createHref({pathname:p,search:h,hash:o})}function $a(){return W.useContext(Ba)!=null}function ls(){return Je($a(),"useLocation() may be used only in the context of a <Router> component."),W.useContext(Ba).location}var cy="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function hy(r){W.useContext(or).static||W.useLayoutEffect(r)}function Iw(){let{isDataRoute:r}=W.useContext(Or);return r?Vw():Sw()}function Sw(){Je($a(),"useNavigate() may be used only in the context of a <Router> component.");let r=W.useContext(vo),{basename:e,navigator:t}=W.useContext(or),{matches:s}=W.useContext(Or),{pathname:o}=ls(),u=JSON.stringify(oy(s)),h=W.useRef(!1);return hy(()=>{h.current=!0}),W.useCallback((g,_={})=>{if(nr(h.current,cy),!h.current)return;if(typeof g=="number"){t.go(g);return}let E=ay(g,JSON.parse(u),o,_.relative==="path");r==null&&e!=="/"&&(E.pathname=E.pathname==="/"?e:kr([e,E.pathname])),(_.replace?t.replace:t.push)(E,_.state,_)},[e,t,u,o,r])}W.createContext(null);function za(r,{relative:e}={}){let{matches:t}=W.useContext(Or),{pathname:s}=ls(),o=JSON.stringify(oy(t));return W.useMemo(()=>ay(r,JSON.parse(o),s,e==="path"),[r,o,s,e])}function Cw(r,e){return dy(r,e)}function dy(r,e,t,s){var G;Je($a(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=W.useContext(or),{matches:u}=W.useContext(Or),h=u[u.length-1],p=h?h.params:{},g=h?h.pathname:"/",_=h?h.pathnameBase:"/",E=h&&h.route;{let J=E&&E.path||"";fy(g,!E||J.endsWith("*")||J.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${J}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${J}"> to <Route path="${J==="/"?"*":`${J}/*`}">.`)}let S=ls(),R;if(e){let J=typeof e=="string"?_o(e):e;Je(_==="/"||((G=J.pathname)==null?void 0:G.startsWith(_)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${_}" but pathname "${J.pathname}" was given in the \`location\` prop.`),R=J}else R=S;let F=R.pathname||"/",U=F;if(_!=="/"){let J=_.replace(/^\//,"").split("/");U="/"+F.replace(/^\//,"").split("/").slice(J.length).join("/")}let j=ry(r,{pathname:U});nr(E||j!=null,`No routes matched location "${R.pathname}${R.search}${R.hash}" `),nr(j==null||j[j.length-1].route.element!==void 0||j[j.length-1].route.Component!==void 0||j[j.length-1].route.lazy!==void 0,`Matched leaf route at location "${R.pathname}${R.search}${R.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let $=Nw(j&&j.map(J=>Object.assign({},J,{params:Object.assign({},p,J.params),pathname:kr([_,o.encodeLocation?o.encodeLocation(J.pathname).pathname:J.pathname]),pathnameBase:J.pathnameBase==="/"?_:kr([_,o.encodeLocation?o.encodeLocation(J.pathnameBase).pathname:J.pathnameBase])})),u,t,s);return e&&$?W.createElement(Ba.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...R},navigationType:"POP"}},$):$}function Aw(){let r=Mw(),e=_w(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},u={padding:"2px 4px",backgroundColor:s},h=null;return console.error("Error handled by React Router default ErrorBoundary:",r),h=W.createElement(W.Fragment,null,W.createElement("p",null,"💿 Hey developer 👋"),W.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",W.createElement("code",{style:u},"ErrorBoundary")," or"," ",W.createElement("code",{style:u},"errorElement")," prop on your route.")),W.createElement(W.Fragment,null,W.createElement("h2",null,"Unexpected Application Error!"),W.createElement("h3",{style:{fontStyle:"italic"}},e),t?W.createElement("pre",{style:o},t):null,h)}var Rw=W.createElement(Aw,null),kw=class extends W.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){console.error("React Router caught the following error during render",r,e)}render(){return this.state.error!==void 0?W.createElement(Or.Provider,{value:this.props.routeContext},W.createElement(Ld.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Pw({routeContext:r,match:e,children:t}){let s=W.useContext(vo);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),W.createElement(Or.Provider,{value:r},t)}function Nw(r,e=[],t=null,s=null){if(r==null){if(!t)return null;if(t.errors)r=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let o=r,u=t==null?void 0:t.errors;if(u!=null){let g=o.findIndex(_=>_.route.id&&(u==null?void 0:u[_.route.id])!==void 0);Je(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),o=o.slice(0,Math.min(o.length,g+1))}let h=!1,p=-1;if(t)for(let g=0;g<o.length;g++){let _=o[g];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(p=g),_.route.id){let{loaderData:E,errors:S}=t,R=_.route.loader&&!E.hasOwnProperty(_.route.id)&&(!S||S[_.route.id]===void 0);if(_.route.lazy||R){h=!0,p>=0?o=o.slice(0,p+1):o=[o[0]];break}}}return o.reduceRight((g,_,E)=>{let S,R=!1,F=null,U=null;t&&(S=u&&_.route.id?u[_.route.id]:void 0,F=_.route.errorElement||Rw,h&&(p<0&&E===0?(fy("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),R=!0,U=null):p===E&&(R=!0,U=_.route.hydrateFallbackElement||null)));let j=e.concat(o.slice(0,E+1)),$=()=>{let G;return S?G=F:R?G=U:_.route.Component?G=W.createElement(_.route.Component,null):_.route.element?G=_.route.element:G=g,W.createElement(Pw,{match:_,routeContext:{outlet:g,matches:j,isDataRoute:t!=null},children:G})};return t&&(_.route.ErrorBoundary||_.route.errorElement||E===0)?W.createElement(kw,{location:t.location,revalidation:t.revalidation,component:F,error:S,children:$(),routeContext:{outlet:null,matches:j,isDataRoute:!0}}):$()},null)}function Od(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function xw(r){let e=W.useContext(vo);return Je(e,Od(r)),e}function Dw(r){let e=W.useContext(nc);return Je(e,Od(r)),e}function Lw(r){let e=W.useContext(Or);return Je(e,Od(r)),e}function Md(r){let e=Lw(r),t=e.matches[e.matches.length-1];return Je(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function Ow(){return Md("useRouteId")}function Mw(){var s;let r=W.useContext(Ld),e=Dw("useRouteError"),t=Md("useRouteError");return r!==void 0?r:(s=e.errors)==null?void 0:s[t]}function Vw(){let{router:r}=xw("useNavigate"),e=Md("useNavigate"),t=W.useRef(!1);return hy(()=>{t.current=!0}),W.useCallback(async(o,u={})=>{nr(t.current,cy),t.current&&(typeof o=="number"?r.navigate(o):await r.navigate(o,{fromRouteId:e,...u}))},[r,e])}var jm={};function fy(r,e,t){!e&&!jm[r]&&(jm[r]=!0,nr(!1,t))}W.memo(bw);function bw({routes:r,future:e,state:t}){return dy(r,void 0,t,e)}function dd(r){Je(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Fw({basename:r="/",children:e=null,location:t,navigationType:s="POP",navigator:o,static:u=!1}){Je(!$a(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=r.replace(/^\/*/,"/"),p=W.useMemo(()=>({basename:h,navigator:o,static:u,future:{}}),[h,o,u]);typeof t=="string"&&(t=_o(t));let{pathname:g="/",search:_="",hash:E="",state:S=null,key:R="default"}=t,F=W.useMemo(()=>{let U=gi(g,h);return U==null?null:{location:{pathname:U,search:_,hash:E,state:S,key:R},navigationType:s}},[h,g,_,E,S,R,s]);return nr(F!=null,`<Router basename="${h}"> is not able to match the URL "${g}${_}${E}" because it does not start with the basename, so the <Router> won't render anything.`),F==null?null:W.createElement(or.Provider,{value:p},W.createElement(Ba.Provider,{children:e,value:F}))}function Uw({children:r,location:e}){return Cw(fd(r),e)}function fd(r,e=[]){let t=[];return W.Children.forEach(r,(s,o)=>{if(!W.isValidElement(s))return;let u=[...e,o];if(s.type===W.Fragment){t.push.apply(t,fd(s.props.children,u));return}Je(s.type===dd,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Je(!s.props.index||!s.props.children,"An index route cannot have child routes.");let h={id:s.props.id||u.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(h.children=fd(s.props.children,u)),t.push(h)}),t}var Tu="get",Iu="application/x-www-form-urlencoded";function rc(r){return r!=null&&typeof r.tagName=="string"}function jw(r){return rc(r)&&r.tagName.toLowerCase()==="button"}function Bw(r){return rc(r)&&r.tagName.toLowerCase()==="form"}function $w(r){return rc(r)&&r.tagName.toLowerCase()==="input"}function zw(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Hw(r,e){return r.button===0&&(!e||e==="_self")&&!zw(r)}var mu=null;function Ww(){if(mu===null)try{new FormData(document.createElement("form"),0),mu=!1}catch{mu=!0}return mu}var qw=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Yh(r){return r!=null&&!qw.has(r)?(nr(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Iu}"`),null):r}function Kw(r,e){let t,s,o,u,h;if(Bw(r)){let p=r.getAttribute("action");s=p?gi(p,e):null,t=r.getAttribute("method")||Tu,o=Yh(r.getAttribute("enctype"))||Iu,u=new FormData(r)}else if(jw(r)||$w(r)&&(r.type==="submit"||r.type==="image")){let p=r.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=r.getAttribute("formaction")||p.getAttribute("action");if(s=g?gi(g,e):null,t=r.getAttribute("formmethod")||p.getAttribute("method")||Tu,o=Yh(r.getAttribute("formenctype"))||Yh(p.getAttribute("enctype"))||Iu,u=new FormData(p,r),!Ww()){let{name:_,type:E,value:S}=r;if(E==="image"){let R=_?`${_}.`:"";u.append(`${R}x`,"0"),u.append(`${R}y`,"0")}else _&&u.append(_,S)}}else{if(rc(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Tu,s=null,o=Iu,h=r}return u&&o==="text/plain"&&(h=u,u=void 0),{action:s,method:t.toLowerCase(),encType:o,formData:u,body:h}}function Vd(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}async function Gw(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Qw(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function Xw(r,e,t){let s=await Promise.all(r.map(async o=>{let u=e.routes[o.route.id];if(u){let h=await Gw(u,t);return h.links?h.links():[]}return[]}));return eE(s.flat(1).filter(Qw).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Bm(r,e,t,s,o,u){let h=(g,_)=>t[_]?g.route.id!==t[_].route.id:!0,p=(g,_)=>{var E;return t[_].pathname!==g.pathname||((E=t[_].route.path)==null?void 0:E.endsWith("*"))&&t[_].params["*"]!==g.params["*"]};return u==="assets"?e.filter((g,_)=>h(g,_)||p(g,_)):u==="data"?e.filter((g,_)=>{var S;let E=s.routes[g.route.id];if(!E||!E.hasLoader)return!1;if(h(g,_)||p(g,_))return!0;if(g.route.shouldRevalidate){let R=g.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((S=t[0])==null?void 0:S.params)||{},nextUrl:new URL(r,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof R=="boolean")return R}return!0}):[]}function Yw(r,e){return Jw(r.map(t=>{let s=e.routes[t.route.id];if(!s)return[];let o=[s.module];return s.imports&&(o=o.concat(s.imports)),o}).flat(1))}function Jw(r){return[...new Set(r)]}function Zw(r){let e={},t=Object.keys(r).sort();for(let s of t)e[s]=r[s];return e}function eE(r,e){let t=new Set;return new Set(e),r.reduce((s,o)=>{let u=JSON.stringify(Zw(o));return t.has(u)||(t.add(u),s.push({key:u,link:o})),s},[])}function tE(r){let e=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function nE(){let r=W.useContext(vo);return Vd(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function rE(){let r=W.useContext(nc);return Vd(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var bd=W.createContext(void 0);bd.displayName="FrameworkContext";function py(){let r=W.useContext(bd);return Vd(r,"You must render this element inside a <HydratedRouter> element"),r}function iE(r,e){let t=W.useContext(bd),[s,o]=W.useState(!1),[u,h]=W.useState(!1),{onFocus:p,onBlur:g,onMouseEnter:_,onMouseLeave:E,onTouchStart:S}=e,R=W.useRef(null);W.useEffect(()=>{if(r==="render"&&h(!0),r==="viewport"){let j=G=>{G.forEach(J=>{h(J.isIntersecting)})},$=new IntersectionObserver(j,{threshold:.5});return R.current&&$.observe(R.current),()=>{$.disconnect()}}},[r]),W.useEffect(()=>{if(s){let j=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(j)}}},[s]);let F=()=>{o(!0)},U=()=>{o(!1),h(!1)};return t?r!=="intent"?[u,R,{}]:[u,R,{onFocus:wa(p,F),onBlur:wa(g,U),onMouseEnter:wa(_,F),onMouseLeave:wa(E,U),onTouchStart:wa(S,F)}]:[!1,R,{}]}function wa(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function sE({page:r,...e}){let{router:t}=nE(),s=W.useMemo(()=>ry(t.routes,r,t.basename),[t.routes,r,t.basename]);return s?W.createElement(aE,{page:r,matches:s,...e}):null}function oE(r){let{manifest:e,routeModules:t}=py(),[s,o]=W.useState([]);return W.useEffect(()=>{let u=!1;return Xw(r,e,t).then(h=>{u||o(h)}),()=>{u=!0}},[r,e,t]),s}function aE({page:r,matches:e,...t}){let s=ls(),{manifest:o,routeModules:u}=py(),{loaderData:h,matches:p}=rE(),g=W.useMemo(()=>Bm(r,e,p,o,s,"data"),[r,e,p,o,s]),_=W.useMemo(()=>Bm(r,e,p,o,s,"assets"),[r,e,p,o,s]),E=W.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let F=new Set,U=!1;if(e.forEach($=>{var J;let G=o.routes[$.route.id];!G||!G.hasLoader||(!g.some(ie=>ie.route.id===$.route.id)&&$.route.id in h&&((J=u[$.route.id])!=null&&J.shouldRevalidate)||G.hasClientLoader?U=!0:F.add($.route.id))}),F.size===0)return[];let j=tE(r);return U&&F.size>0&&j.searchParams.set("_routes",e.filter($=>F.has($.route.id)).map($=>$.route.id).join(",")),[j.pathname+j.search]},[h,s,o,g,e,r,u]),S=W.useMemo(()=>Yw(_,o),[_,o]),R=oE(_);return W.createElement(W.Fragment,null,E.map(F=>W.createElement("link",{key:F,rel:"prefetch",as:"fetch",href:F,...t})),S.map(F=>W.createElement("link",{key:F,rel:"modulepreload",href:F,...t})),R.map(({key:F,link:U})=>W.createElement("link",{key:F,...U})))}function lE(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var my=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{my&&(window.__reactRouterVersion="7.1.1")}catch{}function uE({basename:r,children:e,window:t}){let s=W.useRef();s.current==null&&(s.current=X0({window:t,v5Compat:!0}));let o=s.current,[u,h]=W.useState({action:o.action,location:o.location}),p=W.useCallback(g=>{W.startTransition(()=>h(g))},[h]);return W.useLayoutEffect(()=>o.listen(p),[o,p]),W.createElement(Fw,{basename:r,children:e,location:u.location,navigationType:u.action,navigator:o})}var gy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yy=W.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:o,reloadDocument:u,replace:h,state:p,target:g,to:_,preventScrollReset:E,viewTransition:S,...R},F){let{basename:U}=W.useContext(or),j=typeof _=="string"&&gy.test(_),$,G=!1;if(typeof _=="string"&&j&&($=_,my))try{let C=new URL(window.location.href),P=_.startsWith("//")?new URL(C.protocol+_):new URL(_),D=gi(P.pathname,U);P.origin===C.origin&&D!=null?_=D+P.search+P.hash:G=!0}catch{nr(!1,`<Link to="${_}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let J=Tw(_,{relative:o}),[ie,de,Ce]=iE(s,R),ve=fE(_,{replace:h,state:p,target:g,preventScrollReset:E,relative:o,viewTransition:S});function N(C){e&&e(C),C.defaultPrevented||ve(C)}let T=W.createElement("a",{...R,...Ce,href:$||J,onClick:G||u?e:N,ref:lE(F,de),target:g,"data-discover":!j&&t==="render"?"true":void 0});return ie&&!j?W.createElement(W.Fragment,null,T,W.createElement(sE,{page:J})):T});yy.displayName="Link";var cE=W.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:o=!1,style:u,to:h,viewTransition:p,children:g,..._},E){let S=za(h,{relative:_.relative}),R=ls(),F=W.useContext(nc),{navigator:U,basename:j}=W.useContext(or),$=F!=null&&_E(S)&&p===!0,G=U.encodeLocation?U.encodeLocation(S).pathname:S.pathname,J=R.pathname,ie=F&&F.navigation&&F.navigation.location?F.navigation.location.pathname:null;t||(J=J.toLowerCase(),ie=ie?ie.toLowerCase():null,G=G.toLowerCase()),ie&&j&&(ie=gi(ie,j)||ie);const de=G!=="/"&&G.endsWith("/")?G.length-1:G.length;let Ce=J===G||!o&&J.startsWith(G)&&J.charAt(de)==="/",ve=ie!=null&&(ie===G||!o&&ie.startsWith(G)&&ie.charAt(G.length)==="/"),N={isActive:Ce,isPending:ve,isTransitioning:$},T=Ce?e:void 0,C;typeof s=="function"?C=s(N):C=[s,Ce?"active":null,ve?"pending":null,$?"transitioning":null].filter(Boolean).join(" ");let P=typeof u=="function"?u(N):u;return W.createElement(yy,{..._,"aria-current":T,className:C,ref:E,style:P,to:h,viewTransition:p},typeof g=="function"?g(N):g)});cE.displayName="NavLink";var hE=W.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:o,state:u,method:h=Tu,action:p,onSubmit:g,relative:_,preventScrollReset:E,viewTransition:S,...R},F)=>{let U=gE(),j=yE(p,{relative:_}),$=h.toLowerCase()==="get"?"get":"post",G=typeof p=="string"&&gy.test(p),J=ie=>{if(g&&g(ie),ie.defaultPrevented)return;ie.preventDefault();let de=ie.nativeEvent.submitter,Ce=(de==null?void 0:de.getAttribute("formmethod"))||h;U(de||ie.currentTarget,{fetcherKey:e,method:Ce,navigate:t,replace:o,state:u,relative:_,preventScrollReset:E,viewTransition:S})};return W.createElement("form",{ref:F,method:$,action:j,onSubmit:s?g:J,...R,"data-discover":!G&&r==="render"?"true":void 0})});hE.displayName="Form";function dE(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function _y(r){let e=W.useContext(vo);return Je(e,dE(r)),e}function fE(r,{target:e,replace:t,state:s,preventScrollReset:o,relative:u,viewTransition:h}={}){let p=Iw(),g=ls(),_=za(r,{relative:u});return W.useCallback(E=>{if(Hw(E,e)){E.preventDefault();let S=t!==void 0?t:xa(g)===xa(_);p(r,{replace:S,state:s,preventScrollReset:o,relative:u,viewTransition:h})}},[g,p,_,t,s,e,r,o,u,h])}var pE=0,mE=()=>`__${String(++pE)}__`;function gE(){let{router:r}=_y("useSubmit"),{basename:e}=W.useContext(or),t=Ow();return W.useCallback(async(s,o={})=>{let{action:u,method:h,encType:p,formData:g,body:_}=Kw(s,e);if(o.navigate===!1){let E=o.fetcherKey||mE();await r.fetch(E,t,o.action||u,{preventScrollReset:o.preventScrollReset,formData:g,body:_,formMethod:o.method||h,formEncType:o.encType||p,flushSync:o.flushSync})}else await r.navigate(o.action||u,{preventScrollReset:o.preventScrollReset,formData:g,body:_,formMethod:o.method||h,formEncType:o.encType||p,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,e,t])}function yE(r,{relative:e}={}){let{basename:t}=W.useContext(or),s=W.useContext(Or);Je(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),u={...za(r||".",{relative:e})},h=ls();if(r==null){u.search=h.search;let p=new URLSearchParams(u.search),g=p.getAll("index");if(g.some(E=>E==="")){p.delete("index"),g.filter(S=>S).forEach(S=>p.append("index",S));let E=p.toString();u.search=E?`?${E}`:""}}return(!r||r===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(u.pathname=u.pathname==="/"?t:kr([t,u.pathname])),xa(u)}function _E(r,e={}){let t=W.useContext(uy);Je(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=_y("useViewTransitionState"),o=za(r,{relative:e.relative});if(!t.isTransitioning)return!1;let u=gi(t.currentLocation.pathname,s)||t.currentLocation.pathname,h=gi(t.nextLocation.pathname,s)||t.nextLocation.pathname;return Lu(o.pathname,h)!=null||Lu(o.pathname,u)!=null}new TextEncoder;const vE="Main-module__lightTheme___4NTMm",wE="Main-module__darkTheme___l3t-O",EE="Main-module__themeBtn___SXVXJ",TE="Main-module__menuLinks___FQihz",IE="Main-module__active___tsKgi",SE="Main-module__slider___Tk4ca",CE="Main-module__round___Ln2HM",AE="Main-module__navbar___Y0-LP",RE="Main-module__headerInner___rE7GL",kE="Main-module__navbarLight___bgKQB",PE="Main-module__headerContent___jn3e0",NE="Main-module__searchIcon___r7vBr",xE="Main-module__profile___WiCRi",DE="Main-module__notification___hT1fz",LE="Main-module__dishesDashboard___v59T-",OE="Main-module__mainContent___VvKnc",ME="Main-module__heroContainer___I-b8l",VE="Main-module__heroLeft___A9Fay",bE="Main-module__heroImage___-sLWA",FE="Main-module__heroCredit___EG6WH",UE="Main-module__heroRight___gz46K",jE="Main-module__heroTitle___gVyW6",BE="Main-module__heroSubtitle___38Dbn",$E="Main-module__dishesContainer___DgRR5",zE="Main-module__dishCard___m-Uhd",HE="Main-module__dishImage___chrc9",WE="Main-module__dishTitle___5HKeX",qE="Main-module__dishCredit___FEHhL",KE="Main-module__dishButton___QX937",GE="Main-module__firePlate___LS8vt",QE="Main-module__fireImage___C10pJ",XE="Main-module__fireWidth___cP8CW",YE="Main-module__fireContent___6xdY8",JE="Main-module__fireTime___y3sBG",ZE="Main-module__middleLine___FbCKy",eT="Main-module__fireUser___vjq4R",tT="Main-module__fireLinks___i22qp",nT="Main-module__heart___mFQx5",rT="Main-module__paintImage___JNRUk",iT="Main-module__trending___-qqXK",sT="Main-module__trendingTitle___cB2kA",oT="Main-module__trendingContent___2PLHS",aT="Main-module__trendingDesc___obXy3",lT="Main-module__userImage___Q1QwQ",uT="Main-module__userTitle___UjOHi",cT="Main-module__userPosition___xAyxL",hT="Main-module__bid___uYWcd",dT="Main-module__logoImage___fDIXm",fT="Main-module__logoText___rNBos",pT="Main-module__contentArea___n2TFl",mT="Main-module__mainContainer___cEpo0",Ae={lightTheme:vE,darkTheme:wE,themeBtn:EE,menuLinks:TE,active:IE,switch:"Main-module__switch___2IAME",slider:SE,round:CE,navbar:AE,headerInner:RE,navbarLight:kE,headerContent:PE,searchIcon:NE,profile:xE,notification:DE,dishesDashboard:LE,mainContent:OE,heroContainer:ME,heroLeft:VE,heroImage:bE,heroCredit:FE,heroRight:UE,heroTitle:jE,heroSubtitle:BE,dishesContainer:$E,dishCard:zE,dishImage:HE,dishTitle:WE,dishCredit:qE,dishButton:KE,firePlate:GE,fireImage:QE,fireWidth:XE,fireContent:YE,fireTime:JE,middleLine:ZE,fireUser:eT,fireLinks:tT,heart:nT,paintImage:rT,trending:iT,trendingTitle:sT,trendingContent:oT,trendingDesc:aT,userImage:lT,userTitle:uT,userPosition:cT,bid:hT,logoImage:dT,logoText:fT,contentArea:pT,mainContainer:mT},gT="/Projeto-PetitChef/PetitChefLogo.png";function yT(){const[r,e]=W.useState([]),[t,s]=W.useState(!0),[o,u]=W.useState(null),h=W.useRef(!1),p=6e4,g=async()=>{const S="https://api.unsplash.com/photos/random?query=food+dish&count=10&client_id=PS9FWequ00yxYBrmYYuLojsiKH9cb6Gy-TTfB9LM9H4";try{const R=await fetch(S);if(!R.ok)throw new Error("Limite de requisições atingido ou erro na API.");const F=await R.json();e(F),localStorage.setItem("unsplashImages",JSON.stringify(F)),localStorage.setItem("unsplashImagesTimestamp",Date.now())}catch(R){console.error("Erro ao buscar imagens do Unsplash:",R),u("Erro ao buscar imagens do Unsplash")}finally{s(!1)}};W.useEffect(()=>{if(h.current)return;const E=localStorage.getItem("unsplashImages"),S=localStorage.getItem("unsplashImagesTimestamp");if(E&&S&&Date.now()-parseInt(S,10)<p){e(JSON.parse(E)),s(!1),h.current=!0;return}g(),h.current=!0},[]);const _=["Experimente Agora","Aproveite o Sabor","Desfrute o Momento","Novidade no Cardápio","Sabor Inigualável","Feito com Amor","Delícia para o Paladar","Prato Exclusivo","Sabores que Encantam","Uma Explosão de Sabor","Harmonia de Ingredientes","Culinária de Primeira","Surpreenda-se","Para os Amantes da Boa Mesa","Uma Experiência Única","Tradição e Qualidade","Feito para Você","Sabor que Conquista","Descubra o Segredo","Um Toque Especial"];return t?H.jsx("p",{children:"Carregando imagens..."}):o?H.jsxs("p",{children:["Erro ao carregar imagens: ",o]}):r.length===0?H.jsx("p",{children:"Nenhuma imagem encontrada."}):H.jsxs("div",{className:Ae.mainContent,children:[H.jsxs("div",{className:`${Ae.heroContainer} d-flex`,children:[H.jsxs("div",{className:Ae.heroLeft,children:[H.jsx("img",{src:r[0].urls.regular,alt:"Prato",className:Ae.heroImage,loading:"lazy"}),H.jsxs("p",{className:Ae.heroCredit,children:["Foto por"," ",H.jsx("a",{href:`${r[0].user.links.html}?utm_source=PetitChef&utm_medium=referral`,target:"_blank",rel:"noopener noreferrer",children:r[0].user.name})," ","no"," ",H.jsx("a",{href:"https://unsplash.com/?utm_source=PetitChef&utm_medium=referral",target:"_blank",rel:"noopener noreferrer",children:"Unsplash"})]})]}),H.jsxs("div",{className:Ae.heroRight,children:[H.jsx("h2",{className:Ae.heroTitle,children:"Venha conhecer nosso novo prato!"}),H.jsx("p",{className:Ae.heroSubtitle,children:"Experimente um sabor como nunca antes."})]})]}),H.jsx("div",{className:Ae.dishesContainer,children:r.slice(1,9).map((E,S)=>H.jsxs("div",{className:`${Ae.dishCard} ${Ae.dishTheme}`,children:[H.jsx("img",{src:E.urls.small,alt:"Prato",className:Ae.dishImage,loading:"lazy"}),H.jsx("h3",{className:Ae.dishTitle,children:_[S%_.length]}),H.jsxs("p",{className:Ae.dishCredit,children:["Foto por"," ",H.jsx("a",{href:`${E.user.links.html}?utm_source=PetitChef&utm_medium=referral`,target:"_blank",rel:"noopener noreferrer",children:E.user.name})," ","no"," ",H.jsx("a",{href:"https://unsplash.com/?utm_source=PetitChef&utm_medium=referral",target:"_blank",rel:"noopener noreferrer",children:"Unsplash"})]})]},E.id))})]})}var $m={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},_T=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[t++],h=r[t++],p=r[t++],g=((o&7)<<18|(u&63)<<12|(h&63)<<6|p&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const u=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},wy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],h=o+1<r.length,p=h?r[o+1]:0,g=o+2<r.length,_=g?r[o+2]:0,E=u>>2,S=(u&3)<<4|p>>4;let R=(p&15)<<2|_>>6,F=_&63;g||(F=64,h||(R=64)),s.push(t[E],t[S],t[R],t[F])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(vy(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):_T(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=t[r.charAt(o++)],p=o<r.length?t[r.charAt(o)]:0;++o;const _=o<r.length?t[r.charAt(o)]:64;++o;const S=o<r.length?t[r.charAt(o)]:64;if(++o,u==null||p==null||_==null||S==null)throw new vT;const R=u<<2|p>>4;if(s.push(R),_!==64){const F=p<<4&240|_>>2;if(s.push(F),S!==64){const U=_<<6&192|S;s.push(U)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class vT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wT=function(r){const e=vy(r);return wy.encodeByteArray(e,!0)},Ou=function(r){return wT(r).replace(/\./g,"")},Ey=function(r){try{return wy.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ET(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT=()=>ET().__FIREBASE_DEFAULTS__,IT=()=>{if(typeof process>"u"||typeof $m>"u")return;const r=$m.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},ST=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Ey(r[1]);return e&&JSON.parse(e)},ic=()=>{try{return TT()||IT()||ST()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Ty=r=>{var e,t;return(t=(e=ic())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},CT=r=>{const e=Ty(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Iy=()=>{var r;return(r=ic())===null||r===void 0?void 0:r.config},Sy=r=>{var e;return(e=ic())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RT(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Ou(JSON.stringify(t)),Ou(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ft())}function PT(){var r;const e=(r=ic())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function NT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Cy(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function xT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function DT(){const r=Ft();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function LT(){return!PT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ay(){try{return typeof indexedDB=="object"}catch{return!1}}function Ry(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}function OT(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT="FirebaseError";class Bn extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=MT,Object.setPrototypeOf(this,Bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,us.prototype.create)}}class us{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?VT(u,s):"Error",p=`${this.serviceName}: ${h} (${o}).`;return new Bn(o,p,s)}}function VT(r,e){return r.replace(bT,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const bT=/\{\$([^}]+)}/g;function FT(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Da(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=r[o],h=e[o];if(zm(u)&&zm(h)){if(!Da(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function zm(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ta(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function Ia(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function UT(r,e){const t=new jT(r,e);return t.subscribe.bind(t)}class jT{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");BT(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Jh),o.error===void 0&&(o.error=Jh),o.complete===void 0&&(o.complete=Jh);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function BT(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Jh(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $T=1e3,zT=2,HT=4*60*60*1e3,WT=.5;function Hm(r,e=$T,t=zT){const s=e*Math.pow(t,r),o=Math.round(WT*s*(Math.random()-.5)*2);return Math.min(HT,s+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(r){return r&&r._delegate?r._delegate:r}class Un{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new AT;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(GT(e))try{this.getOrInitializeService({instanceIdentifier:Qi})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=Qi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qi){return this.instances.has(e)}getOptions(e=Qi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(u);s===p&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:KT(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Qi){return this.component?this.component.multipleInstances?e:Qi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function KT(r){return r===Qi?void 0:r}function GT(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new qT(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Re||(Re={}));const XT={debug:Re.DEBUG,verbose:Re.VERBOSE,info:Re.INFO,warn:Re.WARN,error:Re.ERROR,silent:Re.SILENT},YT=Re.INFO,JT={[Re.DEBUG]:"log",[Re.VERBOSE]:"log",[Re.INFO]:"info",[Re.WARN]:"warn",[Re.ERROR]:"error"},ZT=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=JT[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sc{constructor(e){this.name=e,this._logLevel=YT,this._logHandler=ZT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?XT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Re.DEBUG,...e),this._logHandler(this,Re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Re.VERBOSE,...e),this._logHandler(this,Re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Re.INFO,...e),this._logHandler(this,Re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Re.WARN,...e),this._logHandler(this,Re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Re.ERROR,...e),this._logHandler(this,Re.ERROR,...e)}}const eI=(r,e)=>e.some(t=>r instanceof t);let Wm,qm;function tI(){return Wm||(Wm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nI(){return qm||(qm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ky=new WeakMap,pd=new WeakMap,Py=new WeakMap,Zh=new WeakMap,Fd=new WeakMap;function rI(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",h)},u=()=>{t(fi(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&ky.set(t,r)}).catch(()=>{}),Fd.set(e,r),e}function iI(r){if(pd.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",h),r.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",h),r.addEventListener("abort",h)});pd.set(r,e)}let md={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return pd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Py.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return fi(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function sI(r){md=r(md)}function oI(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(ed(this),e,...t);return Py.set(s,e.sort?e.sort():[e]),fi(s)}:nI().includes(r)?function(...e){return r.apply(ed(this),e),fi(ky.get(this))}:function(...e){return fi(r.apply(ed(this),e))}}function aI(r){return typeof r=="function"?oI(r):(r instanceof IDBTransaction&&iI(r),eI(r,tI())?new Proxy(r,md):r)}function fi(r){if(r instanceof IDBRequest)return rI(r);if(Zh.has(r))return Zh.get(r);const e=aI(r);return e!==r&&(Zh.set(r,e),Fd.set(e,r)),e}const ed=r=>Fd.get(r);function Ny(r,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(r,e),p=fi(h);return s&&h.addEventListener("upgradeneeded",g=>{s(fi(h.result),g.oldVersion,g.newVersion,fi(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),p.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),p}const lI=["get","getKey","getAll","getAllKeys","count"],uI=["put","add","delete","clear"],td=new Map;function Km(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(td.get(e))return td.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=uI.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||lI.includes(t)))return;const u=async function(h,...p){const g=this.transaction(h,o?"readwrite":"readonly");let _=g.store;return s&&(_=_.index(p.shift())),(await Promise.all([_[t](...p),o&&g.done]))[0]};return td.set(e,u),u}sI(r=>({...r,get:(e,t,s)=>Km(e,t)||r.get(e,t,s),has:(e,t)=>!!Km(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(hI(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function hI(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const gd="@firebase/app",Gm="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=new sc("@firebase/app"),dI="@firebase/app-compat",fI="@firebase/analytics-compat",pI="@firebase/analytics",mI="@firebase/app-check-compat",gI="@firebase/app-check",yI="@firebase/auth",_I="@firebase/auth-compat",vI="@firebase/database",wI="@firebase/data-connect",EI="@firebase/database-compat",TI="@firebase/functions",II="@firebase/functions-compat",SI="@firebase/installations",CI="@firebase/installations-compat",AI="@firebase/messaging",RI="@firebase/messaging-compat",kI="@firebase/performance",PI="@firebase/performance-compat",NI="@firebase/remote-config",xI="@firebase/remote-config-compat",DI="@firebase/storage",LI="@firebase/storage-compat",OI="@firebase/firestore",MI="@firebase/vertexai",VI="@firebase/firestore-compat",bI="firebase",FI="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd="[DEFAULT]",UI={[gd]:"fire-core",[dI]:"fire-core-compat",[pI]:"fire-analytics",[fI]:"fire-analytics-compat",[gI]:"fire-app-check",[mI]:"fire-app-check-compat",[yI]:"fire-auth",[_I]:"fire-auth-compat",[vI]:"fire-rtdb",[wI]:"fire-data-connect",[EI]:"fire-rtdb-compat",[TI]:"fire-fn",[II]:"fire-fn-compat",[SI]:"fire-iid",[CI]:"fire-iid-compat",[AI]:"fire-fcm",[RI]:"fire-fcm-compat",[kI]:"fire-perf",[PI]:"fire-perf-compat",[NI]:"fire-rc",[xI]:"fire-rc-compat",[DI]:"fire-gcs",[LI]:"fire-gcs-compat",[OI]:"fire-fst",[VI]:"fire-fst-compat",[MI]:"fire-vertex","fire-js":"fire-js",[bI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu=new Map,jI=new Map,_d=new Map;function Qm(r,e){try{r.container.addComponent(e)}catch(t){Dr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function rr(r){const e=r.name;if(_d.has(e))return Dr.debug(`There were multiple attempts to register component ${e}.`),!1;_d.set(e,r);for(const t of Mu.values())Qm(t,r);for(const t of jI.values())Qm(t,r);return!0}function cs(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Zn(r){return r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},pi=new us("app","Firebase",BI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo=FI;function xy(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:yd,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw pi.create("bad-app-name",{appName:String(o)});if(t||(t=Iy()),!t)throw pi.create("no-options");const u=Mu.get(o);if(u){if(Da(t,u.options)&&Da(s,u.config))return u;throw pi.create("duplicate-app",{appName:o})}const h=new QT(o);for(const g of _d.values())h.addComponent(g);const p=new $I(t,s,h);return Mu.set(o,p),p}function Ud(r=yd){const e=Mu.get(r);if(!e&&r===yd&&Iy())return xy();if(!e)throw pi.create("no-app",{appName:r});return e}function wn(r,e,t){var s;let o=(s=UI[r])!==null&&s!==void 0?s:r;t&&(o+=`-${t}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const p=[`Unable to register library "${o}" with version "${e}":`];u&&p.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&p.push("and"),h&&p.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dr.warn(p.join(" "));return}rr(new Un(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI="firebase-heartbeat-database",HI=1,La="firebase-heartbeat-store";let nd=null;function Dy(){return nd||(nd=Ny(zI,HI,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(La)}catch(t){console.warn(t)}}}}).catch(r=>{throw pi.create("idb-open",{originalErrorMessage:r.message})})),nd}async function WI(r){try{const t=(await Dy()).transaction(La),s=await t.objectStore(La).get(Ly(r));return await t.done,s}catch(e){if(e instanceof Bn)Dr.warn(e.message);else{const t=pi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Dr.warn(t.message)}}}async function Xm(r,e){try{const s=(await Dy()).transaction(La,"readwrite");await s.objectStore(La).put(e,Ly(r)),await s.done}catch(t){if(t instanceof Bn)Dr.warn(t.message);else{const s=pi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Dr.warn(s.message)}}}function Ly(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI=1024,KI=30*24*60*60*1e3;class GI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new XI(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Ym();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u)?void 0:(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const p=new Date(h.date).valueOf();return Date.now()-p<=KI}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Dr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ym(),{heartbeatsToSend:s,unsentEntries:o}=QI(this._heartbeatsCache.heartbeats),u=Ou(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return Dr.warn(t),""}}}function Ym(){return new Date().toISOString().substring(0,10)}function QI(r,e=qI){const t=[];let s=r.slice();for(const o of r){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),Jm(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Jm(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class XI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ay()?Ry().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await WI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Xm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Xm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Jm(r){return Ou(JSON.stringify({version:2,heartbeats:r})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YI(r){rr(new Un("platform-logger",e=>new cI(e),"PRIVATE")),rr(new Un("heartbeat",e=>new GI(e),"PRIVATE")),wn(gd,Gm,r),wn(gd,Gm,"esm2017"),wn("fire-js","")}YI("");var JI="firebase",ZI="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wn(JI,ZI,"app");const Oy="@firebase/installations",jd="0.6.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const My=1e4,Vy=`w:${jd}`,by="FIS_v2",eS="https://firebaseinstallations.googleapis.com/v1",tS=60*60*1e3,nS="installations",rS="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},es=new us(nS,rS,iS);function Fy(r){return r instanceof Bn&&r.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uy({projectId:r}){return`${eS}/projects/${r}/installations`}function jy(r){return{token:r.token,requestStatus:2,expiresIn:oS(r.expiresIn),creationTime:Date.now()}}async function By(r,e){const s=(await e.json()).error;return es.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function $y({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function sS(r,{refreshToken:e}){const t=$y(r);return t.append("Authorization",aS(e)),t}async function zy(r){const e=await r();return e.status>=500&&e.status<600?r():e}function oS(r){return Number(r.replace("s","000"))}function aS(r){return`${by} ${r}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lS({appConfig:r,heartbeatServiceProvider:e},{fid:t}){const s=Uy(r),o=$y(r),u=e.getImmediate({optional:!0});if(u){const _=await u.getHeartbeatsHeader();_&&o.append("x-firebase-client",_)}const h={fid:t,authVersion:by,appId:r.appId,sdkVersion:Vy},p={method:"POST",headers:o,body:JSON.stringify(h)},g=await zy(()=>fetch(s,p));if(g.ok){const _=await g.json();return{fid:_.fid||t,registrationStatus:2,refreshToken:_.refreshToken,authToken:jy(_.authToken)}}else throw await By("Create Installation",g)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hy(r){return new Promise(e=>{setTimeout(e,r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uS(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cS=/^[cdef][\w-]{21}$/,vd="";function hS(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const t=dS(r);return cS.test(t)?t:vd}catch{return vd}}function dS(r){return uS(r).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(r){return`${r.appName}!${r.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy=new Map;function qy(r,e){const t=oc(r);Ky(t,e),fS(t,e)}function Ky(r,e){const t=Wy.get(r);if(t)for(const s of t)s(e)}function fS(r,e){const t=pS();t&&t.postMessage({key:r,fid:e}),mS()}let Xi=null;function pS(){return!Xi&&"BroadcastChannel"in self&&(Xi=new BroadcastChannel("[Firebase] FID Change"),Xi.onmessage=r=>{Ky(r.data.key,r.data.fid)}),Xi}function mS(){Wy.size===0&&Xi&&(Xi.close(),Xi=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS="firebase-installations-database",yS=1,ts="firebase-installations-store";let rd=null;function Bd(){return rd||(rd=Ny(gS,yS,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(ts)}}})),rd}async function Vu(r,e){const t=oc(r),o=(await Bd()).transaction(ts,"readwrite"),u=o.objectStore(ts),h=await u.get(t);return await u.put(e,t),await o.done,(!h||h.fid!==e.fid)&&qy(r,e.fid),e}async function Gy(r){const e=oc(r),s=(await Bd()).transaction(ts,"readwrite");await s.objectStore(ts).delete(e),await s.done}async function ac(r,e){const t=oc(r),o=(await Bd()).transaction(ts,"readwrite"),u=o.objectStore(ts),h=await u.get(t),p=e(h);return p===void 0?await u.delete(t):await u.put(p,t),await o.done,p&&(!h||h.fid!==p.fid)&&qy(r,p.fid),p}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $d(r){let e;const t=await ac(r.appConfig,s=>{const o=_S(s),u=vS(r,o);return e=u.registrationPromise,u.installationEntry});return t.fid===vd?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function _S(r){const e=r||{fid:hS(),registrationStatus:0};return Qy(e)}function vS(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(es.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=wS(r,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:ES(r)}:{installationEntry:e}}async function wS(r,e){try{const t=await lS(r,e);return Vu(r.appConfig,t)}catch(t){throw Fy(t)&&t.customData.serverCode===409?await Gy(r.appConfig):await Vu(r.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function ES(r){let e=await Zm(r.appConfig);for(;e.registrationStatus===1;)await Hy(100),e=await Zm(r.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await $d(r);return s||t}return e}function Zm(r){return ac(r,e=>{if(!e)throw es.create("installation-not-found");return Qy(e)})}function Qy(r){return TS(r)?{fid:r.fid,registrationStatus:0}:r}function TS(r){return r.registrationStatus===1&&r.registrationTime+My<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IS({appConfig:r,heartbeatServiceProvider:e},t){const s=SS(r,t),o=sS(r,t),u=e.getImmediate({optional:!0});if(u){const _=await u.getHeartbeatsHeader();_&&o.append("x-firebase-client",_)}const h={installation:{sdkVersion:Vy,appId:r.appId}},p={method:"POST",headers:o,body:JSON.stringify(h)},g=await zy(()=>fetch(s,p));if(g.ok){const _=await g.json();return jy(_)}else throw await By("Generate Auth Token",g)}function SS(r,{fid:e}){return`${Uy(r)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zd(r,e=!1){let t;const s=await ac(r.appConfig,u=>{if(!Xy(u))throw es.create("not-registered");const h=u.authToken;if(!e&&RS(h))return u;if(h.requestStatus===1)return t=CS(r,e),u;{if(!navigator.onLine)throw es.create("app-offline");const p=PS(u);return t=AS(r,p),p}});return t?await t:s.authToken}async function CS(r,e){let t=await eg(r.appConfig);for(;t.authToken.requestStatus===1;)await Hy(100),t=await eg(r.appConfig);const s=t.authToken;return s.requestStatus===0?zd(r,e):s}function eg(r){return ac(r,e=>{if(!Xy(e))throw es.create("not-registered");const t=e.authToken;return NS(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function AS(r,e){try{const t=await IS(r,e),s=Object.assign(Object.assign({},e),{authToken:t});return await Vu(r.appConfig,s),t}catch(t){if(Fy(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Gy(r.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Vu(r.appConfig,s)}throw t}}function Xy(r){return r!==void 0&&r.registrationStatus===2}function RS(r){return r.requestStatus===2&&!kS(r)}function kS(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+tS}function PS(r){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:e})}function NS(r){return r.requestStatus===1&&r.requestTime+My<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xS(r){const e=r,{installationEntry:t,registrationPromise:s}=await $d(e);return s?s.catch(console.error):zd(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DS(r,e=!1){const t=r;return await LS(t),(await zd(t,e)).token}async function LS(r){const{registrationPromise:e}=await $d(r);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OS(r){if(!r||!r.options)throw id("App Configuration");if(!r.name)throw id("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!r.options[t])throw id(t);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function id(r){return es.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yy="installations",MS="installations-internal",VS=r=>{const e=r.getProvider("app").getImmediate(),t=OS(e),s=cs(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},bS=r=>{const e=r.getProvider("app").getImmediate(),t=cs(e,Yy).getImmediate();return{getId:()=>xS(t),getToken:o=>DS(t,o)}};function FS(){rr(new Un(Yy,VS,"PUBLIC")),rr(new Un(MS,bS,"PRIVATE"))}FS();wn(Oy,jd);wn(Oy,jd,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu="analytics",US="firebase_id",jS="origin",BS=60*1e3,$S="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Hd="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=new sc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},un=new us("analytics","Analytics",zS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HS(r){if(!r.startsWith(Hd)){const e=un.create("invalid-gtag-resource",{gtagURL:r});return Zt.warn(e.message),""}return r}function Jy(r){return Promise.all(r.map(e=>e.catch(t=>t)))}function WS(r,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(r,e)),t}function qS(r,e){const t=WS("firebase-js-sdk-policy",{createScriptURL:HS}),s=document.createElement("script"),o=`${Hd}?l=${r}&id=${e}`;s.src=t?t==null?void 0:t.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function KS(r){let e=[];return Array.isArray(window[r])?e=window[r]:window[r]=e,e}async function GS(r,e,t,s,o,u){const h=s[o];try{if(h)await e[h];else{const g=(await Jy(t)).find(_=>_.measurementId===o);g&&await e[g.appId]}}catch(p){Zt.error(p)}r("config",o,u)}async function QS(r,e,t,s,o){try{let u=[];if(o&&o.send_to){let h=o.send_to;Array.isArray(h)||(h=[h]);const p=await Jy(t);for(const g of h){const _=p.find(S=>S.measurementId===g),E=_&&e[_.appId];if(E)u.push(E);else{u=[];break}}}u.length===0&&(u=Object.values(e)),await Promise.all(u),r("event",s,o||{})}catch(u){Zt.error(u)}}function XS(r,e,t,s){async function o(u,...h){try{if(u==="event"){const[p,g]=h;await QS(r,e,t,p,g)}else if(u==="config"){const[p,g]=h;await GS(r,e,t,s,p,g)}else if(u==="consent"){const[p,g]=h;r("consent",p,g)}else if(u==="get"){const[p,g,_]=h;r("get",p,g,_)}else if(u==="set"){const[p]=h;r("set",p)}else r(u,...h)}catch(p){Zt.error(p)}}return o}function YS(r,e,t,s,o){let u=function(...h){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(u=window[o]),window[o]=XS(u,r,e,t),{gtagCore:u,wrappedGtag:window[o]}}function JS(r){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Hd)&&t.src.includes(r))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS=30,e1=1e3;class t1{constructor(e={},t=e1){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Zy=new t1;function n1(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function r1(r){var e;const{appId:t,apiKey:s}=r,o={method:"GET",headers:n1(s)},u=$S.replace("{app-id}",t),h=await fetch(u,o);if(h.status!==200&&h.status!==304){let p="";try{const g=await h.json();!((e=g.error)===null||e===void 0)&&e.message&&(p=g.error.message)}catch{}throw un.create("config-fetch-failed",{httpStatus:h.status,responseMessage:p})}return h.json()}async function i1(r,e=Zy,t){const{appId:s,apiKey:o,measurementId:u}=r.options;if(!s)throw un.create("no-app-id");if(!o){if(u)return{measurementId:u,appId:s};throw un.create("no-api-key")}const h=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},p=new a1;return setTimeout(async()=>{p.abort()},BS),e_({appId:s,apiKey:o,measurementId:u},h,p,e)}async function e_(r,{throttleEndTimeMillis:e,backoffCount:t},s,o=Zy){var u;const{appId:h,measurementId:p}=r;try{await s1(s,e)}catch(g){if(p)return Zt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${p} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:h,measurementId:p};throw g}try{const g=await r1(r);return o.deleteThrottleMetadata(h),g}catch(g){const _=g;if(!o1(_)){if(o.deleteThrottleMetadata(h),p)return Zt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${p} provided in the "measurementId" field in the local Firebase config. [${_==null?void 0:_.message}]`),{appId:h,measurementId:p};throw g}const E=Number((u=_==null?void 0:_.customData)===null||u===void 0?void 0:u.httpStatus)===503?Hm(t,o.intervalMillis,ZS):Hm(t,o.intervalMillis),S={throttleEndTimeMillis:Date.now()+E,backoffCount:t+1};return o.setThrottleMetadata(h,S),Zt.debug(`Calling attemptFetch again in ${E} millis`),e_(r,S,s,o)}}function s1(r,e){return new Promise((t,s)=>{const o=Math.max(e-Date.now(),0),u=setTimeout(t,o);r.addEventListener(()=>{clearTimeout(u),s(un.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function o1(r){if(!(r instanceof Bn)||!r.customData)return!1;const e=Number(r.customData.httpStatus);return e===429||e===500||e===503||e===504}class a1{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function l1(r,e,t,s,o){if(o&&o.global){r("event",t,s);return}else{const u=await e,h=Object.assign(Object.assign({},s),{send_to:u});r("event",t,h)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u1(){if(Ay())try{await Ry()}catch(r){return Zt.warn(un.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return Zt.warn(un.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function c1(r,e,t,s,o,u,h){var p;const g=i1(r);g.then(F=>{t[F.measurementId]=F.appId,r.options.measurementId&&F.measurementId!==r.options.measurementId&&Zt.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${F.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(F=>Zt.error(F)),e.push(g);const _=u1().then(F=>{if(F)return s.getId()}),[E,S]=await Promise.all([g,_]);JS(u)||qS(u,E.measurementId),o("js",new Date);const R=(p=h==null?void 0:h.config)!==null&&p!==void 0?p:{};return R[jS]="firebase",R.update=!0,S!=null&&(R[US]=S),o("config",E.measurementId,R),E.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{constructor(e){this.app=e}_delete(){return delete Ca[this.app.options.appId],Promise.resolve()}}let Ca={},tg=[];const ng={};let sd="dataLayer",d1="gtag",rg,t_,ig=!1;function f1(){const r=[];if(Cy()&&r.push("This is a browser extension environment."),OT()||r.push("Cookies are not available."),r.length>0){const e=r.map((s,o)=>`(${o+1}) ${s}`).join(" "),t=un.create("invalid-analytics-context",{errorInfo:e});Zt.warn(t.message)}}function p1(r,e,t){f1();const s=r.options.appId;if(!s)throw un.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)Zt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw un.create("no-api-key");if(Ca[s]!=null)throw un.create("already-exists",{id:s});if(!ig){KS(sd);const{wrappedGtag:u,gtagCore:h}=YS(Ca,tg,ng,sd,d1);t_=u,rg=h,ig=!0}return Ca[s]=c1(r,tg,ng,e,rg,sd,t),new h1(r)}function m1(r=Ud()){r=zt(r);const e=cs(r,bu);return e.isInitialized()?e.getImmediate():g1(r)}function g1(r,e={}){const t=cs(r,bu);if(t.isInitialized()){const o=t.getImmediate();if(Da(e,t.getOptions()))return o;throw un.create("already-initialized")}return t.initialize({options:e})}function y1(r,e,t,s){r=zt(r),l1(t_,Ca[r.app.options.appId],e,t,s).catch(o=>Zt.error(o))}const sg="@firebase/analytics",og="0.10.10";function _1(){rr(new Un(bu,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return p1(s,o,t)},"PUBLIC")),rr(new Un("analytics-internal",r,"PRIVATE")),wn(sg,og),wn(sg,og,"esm2017");function r(e){try{const t=e.getProvider(bu).getImmediate();return{logEvent:(s,o,u)=>y1(t,s,o,u)}}catch(t){throw un.create("interop-component-reg-failed",{reason:t})}}}_1();function Wd(r,e){var t={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(t[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(t[s[o]]=r[s[o]]);return t}function n_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const v1=n_,r_=new us("auth","Firebase",n_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu=new sc("@firebase/auth");function w1(r,...e){Fu.logLevel<=Re.WARN&&Fu.warn(`Auth (${wo}): ${r}`,...e)}function Su(r,...e){Fu.logLevel<=Re.ERROR&&Fu.error(`Auth (${wo}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(r,...e){throw qd(r,...e)}function er(r,...e){return qd(r,...e)}function i_(r,e,t){const s=Object.assign(Object.assign({},v1()),{[e]:t});return new us("auth","Firebase",s).create(e,{appName:r.name})}function Pr(r){return i_(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function qd(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return r_.create(r,...e)}function ge(r,e,...t){if(!r)throw qd(e,...t)}function Cr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Su(e),new Error(e)}function Lr(r,e){r||Cr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function E1(){return ag()==="http:"||ag()==="https:"}function ag(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(E1()||Cy()||"connection"in navigator)?navigator.onLine:!0}function I1(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,t){this.shortDelay=e,this.longDelay=t,Lr(t>e,"Short delay should be less than long delay!"),this.isMobile=kT()||xT()}get(){return T1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(r,e){Lr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Cr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Cr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Cr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C1=new Wa(3e4,6e4);function Mr(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Vr(r,e,t,s,o={}){return o_(r,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const p=Ha(Object.assign({key:r.config.apiKey},h)).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const _=Object.assign({method:e,headers:g},u);return NT()||(_.referrerPolicy="no-referrer"),s_.fetch()(a_(r,r.config.apiHost,t,p),_)})}async function o_(r,e,t){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},S1),e);try{const o=new R1(r),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw gu(r,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const p=u.ok?h.errorMessage:h.error.message,[g,_]=p.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw gu(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw gu(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw gu(r,"user-disabled",h);const E=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw i_(r,E,_);jn(r,E)}}catch(o){if(o instanceof Bn)throw o;jn(r,"network-request-failed",{message:String(o)})}}async function qa(r,e,t,s,o={}){const u=await Vr(r,e,t,s,o);return"mfaPendingCredential"in u&&jn(r,"multi-factor-auth-required",{_serverResponse:u}),u}function a_(r,e,t,s){const o=`${e}${t}?${s}`;return r.config.emulator?Kd(r.config,o):`${r.config.apiScheme}://${o}`}function A1(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class R1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(er(this.auth,"network-request-failed")),C1.get())})}}function gu(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=er(r,e,s);return o.customData._tokenResponse=t,o}function lg(r){return r!==void 0&&r.enterprise!==void 0}class k1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return A1(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function P1(r,e){return Vr(r,"GET","/v2/recaptchaConfig",Mr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N1(r,e){return Vr(r,"POST","/v1/accounts:delete",e)}async function l_(r,e){return Vr(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function x1(r,e=!1){const t=zt(r),s=await t.getIdToken(e),o=Gd(s);ge(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Aa(od(o.auth_time)),issuedAtTime:Aa(od(o.iat)),expirationTime:Aa(od(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function od(r){return Number(r)*1e3}function Gd(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Su("JWT malformed, contained fewer than 3 sections"),null;try{const o=Ey(t);return o?JSON.parse(o):(Su("Failed to decode base64 JWT payload"),null)}catch(o){return Su("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function ug(r){const e=Gd(r);return ge(e,"internal-error"),ge(typeof e.exp<"u","internal-error"),ge(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oa(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Bn&&D1(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function D1({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Aa(this.lastLoginAt),this.creationTime=Aa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uu(r){var e;const t=r.auth,s=await r.getIdToken(),o=await Oa(r,l_(t,{idToken:s}));ge(o==null?void 0:o.users.length,t,"internal-error");const u=o.users[0];r._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?u_(u.providerUserInfo):[],p=M1(r.providerData,h),g=r.isAnonymous,_=!(r.email&&u.passwordHash)&&!(p!=null&&p.length),E=g?_:!1,S={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:p,metadata:new Ed(u.createdAt,u.lastLoginAt),isAnonymous:E};Object.assign(r,S)}async function O1(r){const e=zt(r);await Uu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function M1(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function u_(r){return r.map(e=>{var{providerId:t}=e,s=Wd(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V1(r,e){const t=await o_(r,{},async()=>{const s=Ha({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,h=a_(r,o,"/v1/token",`key=${u}`),p=await r._getAdditionalHeaders();return p["Content-Type"]="application/x-www-form-urlencoded",s_.fetch()(h,{method:"POST",headers:p,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function b1(r,e){return Vr(r,"POST","/v2/accounts:revokeToken",Mr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ge(e.idToken,"internal-error"),ge(typeof e.idToken<"u","internal-error"),ge(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ug(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ge(e.length!==0,"internal-error");const t=ug(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ge(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await V1(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new lo;return s&&(ge(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(ge(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(ge(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new lo,this.toJSON())}_performRefresh(){return Cr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(r,e){ge(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Ar{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,u=Wd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new L1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new Ed(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await Oa(this,this.stsTokenManager.getToken(this.auth,e));return ge(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return x1(this,e)}reload(){return O1(this)}_assign(e){this!==e&&(ge(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ar(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ge(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Uu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Zn(this.auth.app))return Promise.reject(Pr(this.auth));const e=await this.getIdToken();return await Oa(this,N1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,u,h,p,g,_,E;const S=(s=t.displayName)!==null&&s!==void 0?s:void 0,R=(o=t.email)!==null&&o!==void 0?o:void 0,F=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,U=(h=t.photoURL)!==null&&h!==void 0?h:void 0,j=(p=t.tenantId)!==null&&p!==void 0?p:void 0,$=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,G=(_=t.createdAt)!==null&&_!==void 0?_:void 0,J=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:ie,emailVerified:de,isAnonymous:Ce,providerData:ve,stsTokenManager:N}=t;ge(ie&&N,e,"internal-error");const T=lo.fromJSON(this.name,N);ge(typeof ie=="string",e,"internal-error"),li(S,e.name),li(R,e.name),ge(typeof de=="boolean",e,"internal-error"),ge(typeof Ce=="boolean",e,"internal-error"),li(F,e.name),li(U,e.name),li(j,e.name),li($,e.name),li(G,e.name),li(J,e.name);const C=new Ar({uid:ie,auth:e,email:R,emailVerified:de,displayName:S,isAnonymous:Ce,photoURL:U,phoneNumber:F,tenantId:j,stsTokenManager:T,createdAt:G,lastLoginAt:J});return ve&&Array.isArray(ve)&&(C.providerData=ve.map(P=>Object.assign({},P))),$&&(C._redirectEventId=$),C}static async _fromIdTokenResponse(e,t,s=!1){const o=new lo;o.updateFromServerResponse(t);const u=new Ar({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Uu(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];ge(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?u_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),p=new lo;p.updateFromIdToken(s);const g=new Ar({uid:o.localId,auth:e,stsTokenManager:p,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Ed(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,_),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg=new Map;function Rr(r){Lr(r instanceof Function,"Expected a class definition");let e=cg.get(r);return e?(Lr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,cg.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}c_.type="NONE";const hg=c_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(r,e,t){return`firebase:${r}:${e}:${t}`}class uo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Cu(this.userKey,o.apiKey,u),this.fullPersistenceKey=Cu("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ar._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new uo(Rr(hg),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let u=o[0]||Rr(hg);const h=Cu(s,e.config.apiKey,e.name);let p=null;for(const _ of t)try{const E=await _._get(h);if(E){const S=Ar._fromJSON(e,E);_!==u&&(p=S),u=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new uo(u,e,s):(u=g[0],p&&await u._set(h,p.toJSON()),await Promise.all(t.map(async _=>{if(_!==u)try{await _._remove(h)}catch{}})),new uo(u,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dg(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(p_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(h_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(g_(e))return"Blackberry";if(y_(e))return"Webos";if(d_(e))return"Safari";if((e.includes("chrome/")||f_(e))&&!e.includes("edge/"))return"Chrome";if(m_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function h_(r=Ft()){return/firefox\//i.test(r)}function d_(r=Ft()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function f_(r=Ft()){return/crios\//i.test(r)}function p_(r=Ft()){return/iemobile/i.test(r)}function m_(r=Ft()){return/android/i.test(r)}function g_(r=Ft()){return/blackberry/i.test(r)}function y_(r=Ft()){return/webos/i.test(r)}function Qd(r=Ft()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function F1(r=Ft()){var e;return Qd(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function U1(){return DT()&&document.documentMode===10}function __(r=Ft()){return Qd(r)||m_(r)||y_(r)||g_(r)||/windows phone/i.test(r)||p_(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v_(r,e=[]){let t;switch(r){case"Browser":t=dg(Ft());break;case"Worker":t=`${dg(Ft())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${wo}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,p)=>{try{const g=e(u);h(g)}catch(g){p(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B1(r,e={}){return Vr(r,"GET","/v2/passwordPolicy",Mr(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $1=6;class z1{constructor(e){var t,s,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:$1,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,u,h,p;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(u=g.containsUppercaseLetter)!==null&&u!==void 0?u:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(p=g.containsNonAlphanumericCharacter)!==null&&p!==void 0?p:!0),g}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fg(this),this.idTokenSubscription=new fg(this),this.beforeStateQueue=new j1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=r_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Rr(t)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await uo.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await l_(this,{idToken:e}),s=await Ar._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Zn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(p,p))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,p=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===p)&&(g!=null&&g.user)&&(o=g.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ge(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Uu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=I1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Zn(this.app))return Promise.reject(Pr(this));const t=e?zt(e):null;return t&&ge(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ge(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Zn(this.app)?Promise.reject(Pr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Zn(this.app)?Promise.reject(Pr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Rr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await B1(this),t=new z1(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new us("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await b1(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Rr(e)||this._popupRedirectResolver;ge(t,this,"argument-error"),this.redirectPersistenceManager=await uo.create(this,[Rr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(ge(p,this,"internal-error"),p.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ge(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=v_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&w1(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function wi(r){return zt(r)}class fg{constructor(e){this.auth=e,this.observer=null,this.addObserver=UT(t=>this.observer=t)}get next(){return ge(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function W1(r){lc=r}function w_(r){return lc.loadJS(r)}function q1(){return lc.recaptchaEnterpriseScript}function K1(){return lc.gapiScript}function G1(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class Q1{constructor(){this.enterprise=new X1}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class X1{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Y1="recaptcha-enterprise",E_="NO_RECAPTCHA";class J1{constructor(e){this.type=Y1,this.auth=wi(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,p)=>{P1(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const _=new k1(g);return u.tenantId==null?u._agentRecaptchaConfig=_:u._tenantRecaptchaConfigs[u.tenantId]=_,h(_.siteKey)}}).catch(g=>{p(g)})})}function o(u,h,p){const g=window.grecaptcha;lg(g)?g.enterprise.ready(()=>{g.enterprise.execute(u,{action:e}).then(_=>{h(_)}).catch(()=>{h(E_)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Q1().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{s(this.auth).then(p=>{if(!t&&lg(window.grecaptcha))o(p,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=q1();g.length!==0&&(g+=p),w_(g).then(()=>{o(p,u,h)}).catch(_=>{h(_)})}}).catch(p=>{h(p)})})}}async function pg(r,e,t,s=!1,o=!1){const u=new J1(r);let h;if(o)h=E_;else try{h=await u.verify(t)}catch{h=await u.verify(t,!0)}const p=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const g=p.phoneEnrollmentInfo.phoneNumber,_=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:_,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const g=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return s?Object.assign(p,{captchaResp:h}):Object.assign(p,{captchaResponse:h}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function ju(r,e,t,s,o){var u;if(!((u=r._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await pg(r,e,t,t==="getOobCode");return s(r,h)}else return s(r,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const p=await pg(r,e,t,t==="getOobCode");return s(r,p)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z1(r,e){const t=cs(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(Da(u,e??{}))return o;jn(o,"already-initialized")}return t.initialize({options:e})}function eC(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Rr);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function tC(r,e,t){const s=wi(r);ge(s._canInitEmulator,s,"emulator-config-failed"),ge(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=T_(e),{host:h,port:p}=nC(e),g=p===null?"":`:${p}`;s.config.emulator={url:`${u}//${h}${g}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:h,port:p,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})}),rC()}function T_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function nC(r){const e=T_(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:mg(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:mg(h)}}}function mg(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function rC(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Cr("not implemented")}_getIdTokenResponse(e){return Cr("not implemented")}_linkToIdToken(e,t){return Cr("not implemented")}_getReauthenticationResolver(e){return Cr("not implemented")}}async function iC(r,e){return Vr(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sC(r,e){return qa(r,"POST","/v1/accounts:signInWithPassword",Mr(r,e))}async function oC(r,e){return Vr(r,"POST","/v1/accounts:sendOobCode",Mr(r,e))}async function aC(r,e){return oC(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lC(r,e){return qa(r,"POST","/v1/accounts:signInWithEmailLink",Mr(r,e))}async function uC(r,e){return qa(r,"POST","/v1/accounts:signInWithEmailLink",Mr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma extends Xd{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Ma(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Ma(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ju(e,t,"signInWithPassword",sC);case"emailLink":return lC(e,{email:this._email,oobCode:this._password});default:jn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ju(e,s,"signUpPassword",iC);case"emailLink":return uC(e,{idToken:t,email:this._email,oobCode:this._password});default:jn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function co(r,e){return qa(r,"POST","/v1/accounts:signInWithIdp",Mr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC="http://localhost";class ns extends Xd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ns(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):jn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,u=Wd(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new ns(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return co(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,co(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,co(e,t)}buildRequest(){const e={requestUri:cC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ha(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hC(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function dC(r){const e=Ta(Ia(r)).link,t=e?Ta(Ia(e)).deep_link_id:null,s=Ta(Ia(r)).deep_link_id;return(s?Ta(Ia(s)).link:null)||s||t||e||r}class Yd{constructor(e){var t,s,o,u,h,p;const g=Ta(Ia(e)),_=(t=g.apiKey)!==null&&t!==void 0?t:null,E=(s=g.oobCode)!==null&&s!==void 0?s:null,S=hC((o=g.mode)!==null&&o!==void 0?o:null);ge(_&&E&&S,"argument-error"),this.apiKey=_,this.operation=S,this.code=E,this.continueUrl=(u=g.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(h=g.languageCode)!==null&&h!==void 0?h:null,this.tenantId=(p=g.tenantId)!==null&&p!==void 0?p:null}static parseLink(e){const t=dC(e);try{return new Yd(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(){this.providerId=Eo.PROVIDER_ID}static credential(e,t){return Ma._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Yd.parseLink(t);return ge(s,"argument-error"),Ma._fromEmailAndCode(e,s.code,s.tenantId)}}Eo.PROVIDER_ID="password";Eo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Eo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka extends I_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui extends Ka{constructor(){super("facebook.com")}static credential(e){return ns._fromParams({providerId:ui.PROVIDER_ID,signInMethod:ui.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ui.credentialFromTaggedObject(e)}static credentialFromError(e){return ui.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ui.credential(e.oauthAccessToken)}catch{return null}}}ui.FACEBOOK_SIGN_IN_METHOD="facebook.com";ui.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci extends Ka{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ns._fromParams({providerId:ci.PROVIDER_ID,signInMethod:ci.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ci.credentialFromTaggedObject(e)}static credentialFromError(e){return ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ci.credential(t,s)}catch{return null}}}ci.GOOGLE_SIGN_IN_METHOD="google.com";ci.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends Ka{constructor(){super("github.com")}static credential(e){return ns._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hi.credentialFromTaggedObject(e)}static credentialFromError(e){return hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hi.credential(e.oauthAccessToken)}catch{return null}}}hi.GITHUB_SIGN_IN_METHOD="github.com";hi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di extends Ka{constructor(){super("twitter.com")}static credential(e,t){return ns._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return di.credentialFromTaggedObject(e)}static credentialFromError(e){return di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return di.credential(t,s)}catch{return null}}}di.TWITTER_SIGN_IN_METHOD="twitter.com";di.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fC(r,e){return qa(r,"POST","/v1/accounts:signUp",Mr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await Ar._fromIdTokenResponse(e,s,o),h=gg(s);return new rs({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=gg(s);return new rs({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function gg(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu extends Bn{constructor(e,t,s,o){var u;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Bu.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Bu(e,t,s,o)}}function S_(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Bu._fromErrorAndOperation(r,u,e,s):u})}async function pC(r,e,t=!1){const s=await Oa(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return rs._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mC(r,e,t=!1){const{auth:s}=r;if(Zn(s.app))return Promise.reject(Pr(s));const o="reauthenticate";try{const u=await Oa(r,S_(s,o,e,r),t);ge(u.idToken,s,"internal-error");const h=Gd(u.idToken);ge(h,s,"internal-error");const{sub:p}=h;return ge(r.uid===p,s,"user-mismatch"),rs._forOperation(r,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&jn(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C_(r,e,t=!1){if(Zn(r.app))return Promise.reject(Pr(r));const s="signIn",o=await S_(r,s,e),u=await rs._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(u.user),u}async function gC(r,e){return C_(wi(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A_(r){const e=wi(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function yC(r,e,t){const s=wi(r);await ju(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",aC)}async function _C(r,e,t){if(Zn(r.app))return Promise.reject(Pr(r));const s=wi(r),h=await ju(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",fC).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&A_(r),g}),p=await rs._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(p.user),p}function vC(r,e,t){return Zn(r.app)?Promise.reject(Pr(r)):gC(zt(r),Eo.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&A_(r),s})}function wC(r,e,t,s){return zt(r).onIdTokenChanged(e,t,s)}function EC(r,e,t){return zt(r).beforeAuthStateChanged(e,t)}function TC(r,e,t,s){return zt(r).onAuthStateChanged(e,t,s)}const $u="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem($u,"1"),this.storage.removeItem($u),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC=1e3,SC=10;class k_ extends R_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=__(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,p,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);U1()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,SC):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},IC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}k_.type="LOCAL";const CC=k_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_ extends R_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}P_.type="SESSION";const N_=P_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AC(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new uc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const p=Array.from(h).map(async _=>_(t.origin,u)),g=await AC(p);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}uc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jd(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((p,g)=>{const _=Jd("",20);o.port1.start();const E=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(S){const R=S;if(R.data.eventId===_)switch(R.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),p(R.data.response);break;default:clearTimeout(E),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(){return window}function kC(r){tr().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(){return typeof tr().WorkerGlobalScope<"u"&&typeof tr().importScripts=="function"}async function PC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function NC(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function xC(){return x_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_="firebaseLocalStorageDb",DC=1,zu="firebaseLocalStorage",L_="fbase_key";class Ga{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function cc(r,e){return r.transaction([zu],e?"readwrite":"readonly").objectStore(zu)}function LC(){const r=indexedDB.deleteDatabase(D_);return new Ga(r).toPromise()}function Td(){const r=indexedDB.open(D_,DC);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(zu,{keyPath:L_})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(zu)?e(s):(s.close(),await LC(),e(await Td()))})})}async function yg(r,e,t){const s=cc(r,!0).put({[L_]:e,value:t});return new Ga(s).toPromise()}async function OC(r,e){const t=cc(r,!1).get(e),s=await new Ga(t).toPromise();return s===void 0?null:s.value}function _g(r,e){const t=cc(r,!0).delete(e);return new Ga(t).toPromise()}const MC=800,VC=3;class O_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Td(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>VC)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return x_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=uc._getInstance(xC()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await PC(),!this.activeServiceWorker)return;this.sender=new RC(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||NC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Td();return await yg(e,$u,"1"),await _g(e,$u),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>yg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>OC(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>_g(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=cc(o,!1).getAll();return new Ga(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),MC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}O_.type="LOCAL";const bC=O_;new Wa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FC(r,e){return e?Rr(e):(ge(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd extends Xd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return co(e,this._buildIdpRequest())}_linkToIdToken(e,t){return co(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return co(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function UC(r){return C_(r.auth,new Zd(r),r.bypassAuthState)}function jC(r){const{auth:e,user:t}=r;return ge(t,e,"internal-error"),mC(t,new Zd(r),r.bypassAuthState)}async function BC(r){const{auth:e,user:t}=r;return ge(t,e,"internal-error"),pC(t,new Zd(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:p}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return UC;case"linkViaPopup":case"linkViaRedirect":return BC;case"reauthViaPopup":case"reauthViaRedirect":return jC;default:jn(this.auth,"internal-error")}}resolve(e){Lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Lr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $C=new Wa(2e3,1e4);class ao extends M_{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,ao.currentPopupAction&&ao.currentPopupAction.cancel(),ao.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ge(e,this.auth,"internal-error"),e}async onExecution(){Lr(this.filter.length===1,"Popup operations only handle one event");const e=Jd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(er(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(er(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ao.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(er(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,$C.get())};e()}}ao.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC="pendingRedirect",Au=new Map;class HC extends M_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Au.get(this.auth._key());if(!e){try{const s=await WC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Au.set(this.auth._key(),e)}return this.bypassAuthState||Au.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function WC(r,e){const t=GC(e),s=KC(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function qC(r,e){Au.set(r._key(),e)}function KC(r){return Rr(r._redirectPersistence)}function GC(r){return Cu(zC,r.config.apiKey,r.name)}async function QC(r,e,t=!1){if(Zn(r.app))return Promise.reject(Pr(r));const s=wi(r),o=FC(s,e),h=await new HC(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XC=10*60*1e3;class YC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!JC(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!V_(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(er(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=XC&&this.cachedEventUids.clear(),this.cachedEventUids.has(vg(e))}saveEventToCache(e){this.cachedEventUids.add(vg(e)),this.lastProcessedEventTime=Date.now()}}function vg(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function V_({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function JC(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return V_(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZC(r,e={}){return Vr(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tA=/^https?/;async function nA(r){if(r.config.emulator)return;const{authorizedDomains:e}=await ZC(r);for(const t of e)try{if(rA(t))return}catch{}jn(r,"unauthorized-domain")}function rA(r){const e=wd(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!tA.test(t))return!1;if(eA.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iA=new Wa(3e4,6e4);function wg(){const r=tr().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function sA(r){return new Promise((e,t)=>{var s,o,u;function h(){wg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wg(),t(er(r,"network-request-failed"))},timeout:iA.get()})}if(!((o=(s=tr().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=tr().gapi)===null||u===void 0)&&u.load)h();else{const p=G1("iframefcb");return tr()[p]=()=>{gapi.load?h():t(er(r,"network-request-failed"))},w_(`${K1()}?onload=${p}`).catch(g=>t(g))}}).catch(e=>{throw Ru=null,e})}let Ru=null;function oA(r){return Ru=Ru||sA(r),Ru}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA=new Wa(5e3,15e3),lA="__/auth/iframe",uA="emulator/auth/iframe",cA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dA(r){const e=r.config;ge(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Kd(e,uA):`https://${r.config.authDomain}/${lA}`,s={apiKey:e.apiKey,appName:r.name,v:wo},o=hA.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${Ha(s).slice(1)}`}async function fA(r){const e=await oA(r),t=tr().gapi;return ge(t,r,"internal-error"),e.open({where:document.body,url:dA(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cA,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=er(r,"network-request-failed"),p=tr().setTimeout(()=>{u(h)},aA.get());function g(){tr().clearTimeout(p),o(s)}s.ping(g).then(g,()=>{u(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mA=500,gA=600,yA="_blank",_A="http://localhost";class Eg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vA(r,e,t,s=mA,o=gA){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let p="";const g=Object.assign(Object.assign({},pA),{width:s.toString(),height:o.toString(),top:u,left:h}),_=Ft().toLowerCase();t&&(p=f_(_)?yA:t),h_(_)&&(e=e||_A,g.scrollbars="yes");const E=Object.entries(g).reduce((R,[F,U])=>`${R}${F}=${U},`,"");if(F1(_)&&p!=="_self")return wA(e||"",p),new Eg(null);const S=window.open(e||"",p,E);ge(S,r,"popup-blocked");try{S.focus()}catch{}return new Eg(S)}function wA(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA="__/auth/handler",TA="emulator/auth/handler",IA=encodeURIComponent("fac");async function Tg(r,e,t,s,o,u){ge(r.config.authDomain,r,"auth-domain-config-required"),ge(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:wo,eventId:o};if(e instanceof I_){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",FT(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,S]of Object.entries({}))h[E]=S}if(e instanceof Ka){const E=e.getScopes().filter(S=>S!=="");E.length>0&&(h.scopes=E.join(","))}r.tenantId&&(h.tid=r.tenantId);const p=h;for(const E of Object.keys(p))p[E]===void 0&&delete p[E];const g=await r._getAppCheckToken(),_=g?`#${IA}=${encodeURIComponent(g)}`:"";return`${SA(r)}?${Ha(p).slice(1)}${_}`}function SA({config:r}){return r.emulator?Kd(r,TA):`https://${r.authDomain}/${EA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad="webStorageSupport";class CA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=N_,this._completeRedirectFn=QC,this._overrideRedirectResult=qC}async _openPopup(e,t,s,o){var u;Lr((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await Tg(e,t,s,wd(),o);return vA(e,h,Jd())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await Tg(e,t,s,wd(),o);return kC(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Lr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await fA(e),s=new YC(e);return t.register("authEvent",o=>(ge(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ad,{type:ad},o=>{var u;const h=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[ad];h!==void 0&&t(!!h),jn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=nA(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return __()||d_()||Qd()}}const AA=CA;var Ig="@firebase/auth",Sg="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ge(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kA(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function PA(r){rr(new Un("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:p}=s.options;ge(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:p,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:v_(r)},_=new H1(s,o,u,g);return eC(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),rr(new Un("auth-internal",e=>{const t=wi(e.getProvider("auth").getImmediate());return(s=>new RA(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),wn(Ig,Sg,kA(r)),wn(Ig,Sg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NA=5*60,xA=Sy("authIdTokenMaxAge")||NA;let Cg=null;const DA=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>xA)return;const o=t==null?void 0:t.token;Cg!==o&&(Cg=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function LA(r=Ud()){const e=cs(r,"auth");if(e.isInitialized())return e.getImmediate();const t=Z1(r,{popupRedirectResolver:AA,persistence:[bC,CC,N_]}),s=Sy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=DA(u.toString());EC(t,h,()=>h(t.currentUser)),wC(t,p=>h(p))}}const o=Ty("auth");return o&&tC(t,`http://${o}`),t}function OA(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}W1({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const u=er("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",OA().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});PA("Browser");var Ag=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var b_;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,T){function C(){}C.prototype=T.prototype,N.D=T.prototype,N.prototype=new C,N.prototype.constructor=N,N.C=function(P,D,O){for(var A=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)A[nt-2]=arguments[nt];return T.prototype[D].apply(P,A)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,T,C){C||(C=0);var P=Array(16);if(typeof T=="string")for(var D=0;16>D;++D)P[D]=T.charCodeAt(C++)|T.charCodeAt(C++)<<8|T.charCodeAt(C++)<<16|T.charCodeAt(C++)<<24;else for(D=0;16>D;++D)P[D]=T[C++]|T[C++]<<8|T[C++]<<16|T[C++]<<24;T=N.g[0],C=N.g[1],D=N.g[2];var O=N.g[3],A=T+(O^C&(D^O))+P[0]+3614090360&4294967295;T=C+(A<<7&4294967295|A>>>25),A=O+(D^T&(C^D))+P[1]+3905402710&4294967295,O=T+(A<<12&4294967295|A>>>20),A=D+(C^O&(T^C))+P[2]+606105819&4294967295,D=O+(A<<17&4294967295|A>>>15),A=C+(T^D&(O^T))+P[3]+3250441966&4294967295,C=D+(A<<22&4294967295|A>>>10),A=T+(O^C&(D^O))+P[4]+4118548399&4294967295,T=C+(A<<7&4294967295|A>>>25),A=O+(D^T&(C^D))+P[5]+1200080426&4294967295,O=T+(A<<12&4294967295|A>>>20),A=D+(C^O&(T^C))+P[6]+2821735955&4294967295,D=O+(A<<17&4294967295|A>>>15),A=C+(T^D&(O^T))+P[7]+4249261313&4294967295,C=D+(A<<22&4294967295|A>>>10),A=T+(O^C&(D^O))+P[8]+1770035416&4294967295,T=C+(A<<7&4294967295|A>>>25),A=O+(D^T&(C^D))+P[9]+2336552879&4294967295,O=T+(A<<12&4294967295|A>>>20),A=D+(C^O&(T^C))+P[10]+4294925233&4294967295,D=O+(A<<17&4294967295|A>>>15),A=C+(T^D&(O^T))+P[11]+2304563134&4294967295,C=D+(A<<22&4294967295|A>>>10),A=T+(O^C&(D^O))+P[12]+1804603682&4294967295,T=C+(A<<7&4294967295|A>>>25),A=O+(D^T&(C^D))+P[13]+4254626195&4294967295,O=T+(A<<12&4294967295|A>>>20),A=D+(C^O&(T^C))+P[14]+2792965006&4294967295,D=O+(A<<17&4294967295|A>>>15),A=C+(T^D&(O^T))+P[15]+1236535329&4294967295,C=D+(A<<22&4294967295|A>>>10),A=T+(D^O&(C^D))+P[1]+4129170786&4294967295,T=C+(A<<5&4294967295|A>>>27),A=O+(C^D&(T^C))+P[6]+3225465664&4294967295,O=T+(A<<9&4294967295|A>>>23),A=D+(T^C&(O^T))+P[11]+643717713&4294967295,D=O+(A<<14&4294967295|A>>>18),A=C+(O^T&(D^O))+P[0]+3921069994&4294967295,C=D+(A<<20&4294967295|A>>>12),A=T+(D^O&(C^D))+P[5]+3593408605&4294967295,T=C+(A<<5&4294967295|A>>>27),A=O+(C^D&(T^C))+P[10]+38016083&4294967295,O=T+(A<<9&4294967295|A>>>23),A=D+(T^C&(O^T))+P[15]+3634488961&4294967295,D=O+(A<<14&4294967295|A>>>18),A=C+(O^T&(D^O))+P[4]+3889429448&4294967295,C=D+(A<<20&4294967295|A>>>12),A=T+(D^O&(C^D))+P[9]+568446438&4294967295,T=C+(A<<5&4294967295|A>>>27),A=O+(C^D&(T^C))+P[14]+3275163606&4294967295,O=T+(A<<9&4294967295|A>>>23),A=D+(T^C&(O^T))+P[3]+4107603335&4294967295,D=O+(A<<14&4294967295|A>>>18),A=C+(O^T&(D^O))+P[8]+1163531501&4294967295,C=D+(A<<20&4294967295|A>>>12),A=T+(D^O&(C^D))+P[13]+2850285829&4294967295,T=C+(A<<5&4294967295|A>>>27),A=O+(C^D&(T^C))+P[2]+4243563512&4294967295,O=T+(A<<9&4294967295|A>>>23),A=D+(T^C&(O^T))+P[7]+1735328473&4294967295,D=O+(A<<14&4294967295|A>>>18),A=C+(O^T&(D^O))+P[12]+2368359562&4294967295,C=D+(A<<20&4294967295|A>>>12),A=T+(C^D^O)+P[5]+4294588738&4294967295,T=C+(A<<4&4294967295|A>>>28),A=O+(T^C^D)+P[8]+2272392833&4294967295,O=T+(A<<11&4294967295|A>>>21),A=D+(O^T^C)+P[11]+1839030562&4294967295,D=O+(A<<16&4294967295|A>>>16),A=C+(D^O^T)+P[14]+4259657740&4294967295,C=D+(A<<23&4294967295|A>>>9),A=T+(C^D^O)+P[1]+2763975236&4294967295,T=C+(A<<4&4294967295|A>>>28),A=O+(T^C^D)+P[4]+1272893353&4294967295,O=T+(A<<11&4294967295|A>>>21),A=D+(O^T^C)+P[7]+4139469664&4294967295,D=O+(A<<16&4294967295|A>>>16),A=C+(D^O^T)+P[10]+3200236656&4294967295,C=D+(A<<23&4294967295|A>>>9),A=T+(C^D^O)+P[13]+681279174&4294967295,T=C+(A<<4&4294967295|A>>>28),A=O+(T^C^D)+P[0]+3936430074&4294967295,O=T+(A<<11&4294967295|A>>>21),A=D+(O^T^C)+P[3]+3572445317&4294967295,D=O+(A<<16&4294967295|A>>>16),A=C+(D^O^T)+P[6]+76029189&4294967295,C=D+(A<<23&4294967295|A>>>9),A=T+(C^D^O)+P[9]+3654602809&4294967295,T=C+(A<<4&4294967295|A>>>28),A=O+(T^C^D)+P[12]+3873151461&4294967295,O=T+(A<<11&4294967295|A>>>21),A=D+(O^T^C)+P[15]+530742520&4294967295,D=O+(A<<16&4294967295|A>>>16),A=C+(D^O^T)+P[2]+3299628645&4294967295,C=D+(A<<23&4294967295|A>>>9),A=T+(D^(C|~O))+P[0]+4096336452&4294967295,T=C+(A<<6&4294967295|A>>>26),A=O+(C^(T|~D))+P[7]+1126891415&4294967295,O=T+(A<<10&4294967295|A>>>22),A=D+(T^(O|~C))+P[14]+2878612391&4294967295,D=O+(A<<15&4294967295|A>>>17),A=C+(O^(D|~T))+P[5]+4237533241&4294967295,C=D+(A<<21&4294967295|A>>>11),A=T+(D^(C|~O))+P[12]+1700485571&4294967295,T=C+(A<<6&4294967295|A>>>26),A=O+(C^(T|~D))+P[3]+2399980690&4294967295,O=T+(A<<10&4294967295|A>>>22),A=D+(T^(O|~C))+P[10]+4293915773&4294967295,D=O+(A<<15&4294967295|A>>>17),A=C+(O^(D|~T))+P[1]+2240044497&4294967295,C=D+(A<<21&4294967295|A>>>11),A=T+(D^(C|~O))+P[8]+1873313359&4294967295,T=C+(A<<6&4294967295|A>>>26),A=O+(C^(T|~D))+P[15]+4264355552&4294967295,O=T+(A<<10&4294967295|A>>>22),A=D+(T^(O|~C))+P[6]+2734768916&4294967295,D=O+(A<<15&4294967295|A>>>17),A=C+(O^(D|~T))+P[13]+1309151649&4294967295,C=D+(A<<21&4294967295|A>>>11),A=T+(D^(C|~O))+P[4]+4149444226&4294967295,T=C+(A<<6&4294967295|A>>>26),A=O+(C^(T|~D))+P[11]+3174756917&4294967295,O=T+(A<<10&4294967295|A>>>22),A=D+(T^(O|~C))+P[2]+718787259&4294967295,D=O+(A<<15&4294967295|A>>>17),A=C+(O^(D|~T))+P[9]+3951481745&4294967295,N.g[0]=N.g[0]+T&4294967295,N.g[1]=N.g[1]+(D+(A<<21&4294967295|A>>>11))&4294967295,N.g[2]=N.g[2]+D&4294967295,N.g[3]=N.g[3]+O&4294967295}s.prototype.u=function(N,T){T===void 0&&(T=N.length);for(var C=T-this.blockSize,P=this.B,D=this.h,O=0;O<T;){if(D==0)for(;O<=C;)o(this,N,O),O+=this.blockSize;if(typeof N=="string"){for(;O<T;)if(P[D++]=N.charCodeAt(O++),D==this.blockSize){o(this,P),D=0;break}}else for(;O<T;)if(P[D++]=N[O++],D==this.blockSize){o(this,P),D=0;break}}this.h=D,this.o+=T},s.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var T=1;T<N.length-8;++T)N[T]=0;var C=8*this.o;for(T=N.length-8;T<N.length;++T)N[T]=C&255,C/=256;for(this.u(N),N=Array(16),T=C=0;4>T;++T)for(var P=0;32>P;P+=8)N[C++]=this.g[T]>>>P&255;return N};function u(N,T){var C=p;return Object.prototype.hasOwnProperty.call(C,N)?C[N]:C[N]=T(N)}function h(N,T){this.h=T;for(var C=[],P=!0,D=N.length-1;0<=D;D--){var O=N[D]|0;P&&O==T||(C[D]=O,P=!1)}this.g=C}var p={};function g(N){return-128<=N&&128>N?u(N,function(T){return new h([T|0],0>T?-1:0)}):new h([N|0],0>N?-1:0)}function _(N){if(isNaN(N)||!isFinite(N))return S;if(0>N)return $(_(-N));for(var T=[],C=1,P=0;N>=C;P++)T[P]=N/C|0,C*=4294967296;return new h(T,0)}function E(N,T){if(N.length==0)throw Error("number format error: empty string");if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(N.charAt(0)=="-")return $(E(N.substring(1),T));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=_(Math.pow(T,8)),P=S,D=0;D<N.length;D+=8){var O=Math.min(8,N.length-D),A=parseInt(N.substring(D,D+O),T);8>O?(O=_(Math.pow(T,O)),P=P.j(O).add(_(A))):(P=P.j(C),P=P.add(_(A)))}return P}var S=g(0),R=g(1),F=g(16777216);r=h.prototype,r.m=function(){if(j(this))return-$(this).m();for(var N=0,T=1,C=0;C<this.g.length;C++){var P=this.i(C);N+=(0<=P?P:4294967296+P)*T,T*=4294967296}return N},r.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(U(this))return"0";if(j(this))return"-"+$(this).toString(N);for(var T=_(Math.pow(N,6)),C=this,P="";;){var D=de(C,T).g;C=G(C,D.j(T));var O=((0<C.g.length?C.g[0]:C.h)>>>0).toString(N);if(C=D,U(C))return O+P;for(;6>O.length;)O="0"+O;P=O+P}},r.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function U(N){if(N.h!=0)return!1;for(var T=0;T<N.g.length;T++)if(N.g[T]!=0)return!1;return!0}function j(N){return N.h==-1}r.l=function(N){return N=G(this,N),j(N)?-1:U(N)?0:1};function $(N){for(var T=N.g.length,C=[],P=0;P<T;P++)C[P]=~N.g[P];return new h(C,~N.h).add(R)}r.abs=function(){return j(this)?$(this):this},r.add=function(N){for(var T=Math.max(this.g.length,N.g.length),C=[],P=0,D=0;D<=T;D++){var O=P+(this.i(D)&65535)+(N.i(D)&65535),A=(O>>>16)+(this.i(D)>>>16)+(N.i(D)>>>16);P=A>>>16,O&=65535,A&=65535,C[D]=A<<16|O}return new h(C,C[C.length-1]&-2147483648?-1:0)};function G(N,T){return N.add($(T))}r.j=function(N){if(U(this)||U(N))return S;if(j(this))return j(N)?$(this).j($(N)):$($(this).j(N));if(j(N))return $(this.j($(N)));if(0>this.l(F)&&0>N.l(F))return _(this.m()*N.m());for(var T=this.g.length+N.g.length,C=[],P=0;P<2*T;P++)C[P]=0;for(P=0;P<this.g.length;P++)for(var D=0;D<N.g.length;D++){var O=this.i(P)>>>16,A=this.i(P)&65535,nt=N.i(D)>>>16,Pt=N.i(D)&65535;C[2*P+2*D]+=A*Pt,J(C,2*P+2*D),C[2*P+2*D+1]+=O*Pt,J(C,2*P+2*D+1),C[2*P+2*D+1]+=A*nt,J(C,2*P+2*D+1),C[2*P+2*D+2]+=O*nt,J(C,2*P+2*D+2)}for(P=0;P<T;P++)C[P]=C[2*P+1]<<16|C[2*P];for(P=T;P<2*T;P++)C[P]=0;return new h(C,0)};function J(N,T){for(;(N[T]&65535)!=N[T];)N[T+1]+=N[T]>>>16,N[T]&=65535,T++}function ie(N,T){this.g=N,this.h=T}function de(N,T){if(U(T))throw Error("division by zero");if(U(N))return new ie(S,S);if(j(N))return T=de($(N),T),new ie($(T.g),$(T.h));if(j(T))return T=de(N,$(T)),new ie($(T.g),T.h);if(30<N.g.length){if(j(N)||j(T))throw Error("slowDivide_ only works with positive integers.");for(var C=R,P=T;0>=P.l(N);)C=Ce(C),P=Ce(P);var D=ve(C,1),O=ve(P,1);for(P=ve(P,2),C=ve(C,2);!U(P);){var A=O.add(P);0>=A.l(N)&&(D=D.add(C),O=A),P=ve(P,1),C=ve(C,1)}return T=G(N,D.j(T)),new ie(D,T)}for(D=S;0<=N.l(T);){for(C=Math.max(1,Math.floor(N.m()/T.m())),P=Math.ceil(Math.log(C)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),O=_(C),A=O.j(T);j(A)||0<A.l(N);)C-=P,O=_(C),A=O.j(T);U(O)&&(O=R),D=D.add(O),N=G(N,A)}return new ie(D,N)}r.A=function(N){return de(this,N).h},r.and=function(N){for(var T=Math.max(this.g.length,N.g.length),C=[],P=0;P<T;P++)C[P]=this.i(P)&N.i(P);return new h(C,this.h&N.h)},r.or=function(N){for(var T=Math.max(this.g.length,N.g.length),C=[],P=0;P<T;P++)C[P]=this.i(P)|N.i(P);return new h(C,this.h|N.h)},r.xor=function(N){for(var T=Math.max(this.g.length,N.g.length),C=[],P=0;P<T;P++)C[P]=this.i(P)^N.i(P);return new h(C,this.h^N.h)};function Ce(N){for(var T=N.g.length+1,C=[],P=0;P<T;P++)C[P]=N.i(P)<<1|N.i(P-1)>>>31;return new h(C,N.h)}function ve(N,T){var C=T>>5;T%=32;for(var P=N.g.length-C,D=[],O=0;O<P;O++)D[O]=0<T?N.i(O+C)>>>T|N.i(O+C+1)<<32-T:N.i(O+C);return new h(D,N.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=E,b_=h}).apply(typeof Ag<"u"?Ag:typeof self<"u"?self:typeof window<"u"?window:{});var yu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var F_,Sa,U_,ku,Id,j_,B_,$_;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,f,y){return l==Array.prototype||l==Object.prototype||(l[f]=y.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof yu=="object"&&yu];for(var f=0;f<l.length;++f){var y=l[f];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(l,f){if(f)e:{var y=s;l=l.split(".");for(var w=0;w<l.length-1;w++){var M=l[w];if(!(M in y))break e;y=y[M]}l=l[l.length-1],w=y[l],f=f(w),f!=w&&f!=null&&e(y,l,{configurable:!0,writable:!0,value:f})}}function u(l,f){l instanceof String&&(l+="");var y=0,w=!1,M={next:function(){if(!w&&y<l.length){var z=y++;return{value:f(z,l[z]),done:!1}}return w=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}o("Array.prototype.values",function(l){return l||function(){return u(this,function(f,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},p=this||self;function g(l){var f=typeof l;return f=f!="object"?f:l?Array.isArray(l)?"array":f:"null",f=="array"||f=="object"&&typeof l.length=="number"}function _(l){var f=typeof l;return f=="object"&&l!=null||f=="function"}function E(l,f,y){return l.call.apply(l.bind,arguments)}function S(l,f,y){if(!l)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,w),l.apply(f,M)}}return function(){return l.apply(f,arguments)}}function R(l,f,y){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:S,R.apply(null,arguments)}function F(l,f){var y=Array.prototype.slice.call(arguments,1);return function(){var w=y.slice();return w.push.apply(w,arguments),l.apply(this,w)}}function U(l,f){function y(){}y.prototype=f.prototype,l.aa=f.prototype,l.prototype=new y,l.prototype.constructor=l,l.Qb=function(w,M,z){for(var te=Array(arguments.length-2),be=2;be<arguments.length;be++)te[be-2]=arguments[be];return f.prototype[M].apply(w,te)}}function j(l){const f=l.length;if(0<f){const y=Array(f);for(let w=0;w<f;w++)y[w]=l[w];return y}return[]}function $(l,f){for(let y=1;y<arguments.length;y++){const w=arguments[y];if(g(w)){const M=l.length||0,z=w.length||0;l.length=M+z;for(let te=0;te<z;te++)l[M+te]=w[te]}else l.push(w)}}class G{constructor(f,y){this.i=f,this.j=y,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function J(l){return/^[\s\xa0]*$/.test(l)}function ie(){var l=p.navigator;return l&&(l=l.userAgent)?l:""}function de(l){return de[" "](l),l}de[" "]=function(){};var Ce=ie().indexOf("Gecko")!=-1&&!(ie().toLowerCase().indexOf("webkit")!=-1&&ie().indexOf("Edge")==-1)&&!(ie().indexOf("Trident")!=-1||ie().indexOf("MSIE")!=-1)&&ie().indexOf("Edge")==-1;function ve(l,f,y){for(const w in l)f.call(y,l[w],w,l)}function N(l,f){for(const y in l)f.call(void 0,l[y],y,l)}function T(l){const f={};for(const y in l)f[y]=l[y];return f}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(l,f){let y,w;for(let M=1;M<arguments.length;M++){w=arguments[M];for(y in w)l[y]=w[y];for(let z=0;z<C.length;z++)y=C[z],Object.prototype.hasOwnProperty.call(w,y)&&(l[y]=w[y])}}function D(l){var f=1;l=l.split(":");const y=[];for(;0<f&&l.length;)y.push(l.shift()),f--;return l.length&&y.push(l.join(":")),y}function O(l){p.setTimeout(()=>{throw l},0)}function A(){var l=fe;let f=null;return l.g&&(f=l.g,l.g=l.g.next,l.g||(l.h=null),f.next=null),f}class nt{constructor(){this.h=this.g=null}add(f,y){const w=Pt.get();w.set(f,y),this.h?this.h.next=w:this.g=w,this.h=w}}var Pt=new G(()=>new Nt,l=>l.reset());class Nt{constructor(){this.next=this.g=this.h=null}set(f,y){this.h=f,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Ue,ne=!1,fe=new nt,se=()=>{const l=p.Promise.resolve(void 0);Ue=()=>{l.then(L)}};var L=()=>{for(var l;l=A();){try{l.h.call(l.g)}catch(y){O(y)}var f=Pt;f.j(l),100>f.h&&(f.h++,l.next=f.g,f.g=l)}ne=!1};function q(){this.s=this.s,this.C=this.C}q.prototype.s=!1,q.prototype.ma=function(){this.s||(this.s=!0,this.N())},q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function he(l,f){this.type=l,this.g=this.target=f,this.defaultPrevented=!1}he.prototype.h=function(){this.defaultPrevented=!0};var Ee=function(){if(!p.addEventListener||!Object.defineProperty)return!1;var l=!1,f=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const y=()=>{};p.addEventListener("test",y,f),p.removeEventListener("test",y,f)}catch{}return l}();function Ie(l,f){if(he.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var y=this.type=l.type,w=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=f,f=l.relatedTarget){if(Ce){e:{try{de(f.nodeName);var M=!0;break e}catch{}M=!1}M||(f=null)}}else y=="mouseover"?f=l.fromElement:y=="mouseout"&&(f=l.toElement);this.relatedTarget=f,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Ne[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Ie.aa.h.call(this)}}U(Ie,he);var Ne={2:"touch",3:"pen",4:"mouse"};Ie.prototype.h=function(){Ie.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Me="closure_listenable_"+(1e6*Math.random()|0),Ve=0;function Be(l,f,y,w,M){this.listener=l,this.proxy=null,this.src=f,this.type=y,this.capture=!!w,this.ha=M,this.key=++Ve,this.da=this.fa=!1}function ft(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function ar(l){this.src=l,this.g={},this.h=0}ar.prototype.add=function(l,f,y,w,M){var z=l.toString();l=this.g[z],l||(l=this.g[z]=[],this.h++);var te=br(l,f,w,M);return-1<te?(f=l[te],y||(f.fa=!1)):(f=new Be(f,this.src,z,!!w,M),f.fa=y,l.push(f)),f};function fs(l,f){var y=f.type;if(y in l.g){var w=l.g[y],M=Array.prototype.indexOf.call(w,f,void 0),z;(z=0<=M)&&Array.prototype.splice.call(w,M,1),z&&(ft(f),l.g[y].length==0&&(delete l.g[y],l.h--))}}function br(l,f,y,w){for(var M=0;M<l.length;++M){var z=l[M];if(!z.da&&z.listener==f&&z.capture==!!y&&z.ha==w)return M}return-1}var Ei="closure_lm_"+(1e6*Math.random()|0),ps={};function So(l,f,y,w,M){if(Array.isArray(f)){for(var z=0;z<f.length;z++)So(l,f[z],y,w,M);return null}return y=Ro(y),l&&l[Me]?l.K(f,y,_(w)?!!w.capture:!!w,M):Co(l,f,y,!1,w,M)}function Co(l,f,y,w,M,z){if(!f)throw Error("Invalid event type");var te=_(M)?!!M.capture:!!M,be=gs(l);if(be||(l[Ei]=be=new ar(l)),y=be.add(f,y,w,te,z),y.proxy)return y;if(w=Za(),y.proxy=w,w.src=l,w.listener=y,l.addEventListener)Ee||(M=te),M===void 0&&(M=!1),l.addEventListener(f.toString(),w,M);else if(l.attachEvent)l.attachEvent(ur(f.toString()),w);else if(l.addListener&&l.removeListener)l.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return y}function Za(){function l(y){return f.call(l.src,l.listener,y)}const f=Ao;return l}function ms(l,f,y,w,M){if(Array.isArray(f))for(var z=0;z<f.length;z++)ms(l,f[z],y,w,M);else w=_(w)?!!w.capture:!!w,y=Ro(y),l&&l[Me]?(l=l.i,f=String(f).toString(),f in l.g&&(z=l.g[f],y=br(z,y,w,M),-1<y&&(ft(z[y]),Array.prototype.splice.call(z,y,1),z.length==0&&(delete l.g[f],l.h--)))):l&&(l=gs(l))&&(f=l.g[f.toString()],l=-1,f&&(l=br(f,y,w,M)),(y=-1<l?f[l]:null)&&lr(y))}function lr(l){if(typeof l!="number"&&l&&!l.da){var f=l.src;if(f&&f[Me])fs(f.i,l);else{var y=l.type,w=l.proxy;f.removeEventListener?f.removeEventListener(y,w,l.capture):f.detachEvent?f.detachEvent(ur(y),w):f.addListener&&f.removeListener&&f.removeListener(w),(y=gs(f))?(fs(y,l),y.h==0&&(y.src=null,f[Ei]=null)):ft(l)}}}function ur(l){return l in ps?ps[l]:ps[l]="on"+l}function Ao(l,f){if(l.da)l=!0;else{f=new Ie(f,this);var y=l.listener,w=l.ha||l.src;l.fa&&lr(l),l=y.call(w,f)}return l}function gs(l){return l=l[Ei],l instanceof ar?l:null}var ys="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ro(l){return typeof l=="function"?l:(l[ys]||(l[ys]=function(f){return l.handleEvent(f)}),l[ys])}function lt(){q.call(this),this.i=new ar(this),this.M=this,this.F=null}U(lt,q),lt.prototype[Me]=!0,lt.prototype.removeEventListener=function(l,f,y,w){ms(this,l,f,y,w)};function ut(l,f){var y,w=l.F;if(w)for(y=[];w;w=w.F)y.push(w);if(l=l.M,w=f.type||f,typeof f=="string")f=new he(f,l);else if(f instanceof he)f.target=f.target||l;else{var M=f;f=new he(w,l),P(f,M)}if(M=!0,y)for(var z=y.length-1;0<=z;z--){var te=f.g=y[z];M=cr(te,w,!0,f)&&M}if(te=f.g=l,M=cr(te,w,!0,f)&&M,M=cr(te,w,!1,f)&&M,y)for(z=0;z<y.length;z++)te=f.g=y[z],M=cr(te,w,!1,f)&&M}lt.prototype.N=function(){if(lt.aa.N.call(this),this.i){var l=this.i,f;for(f in l.g){for(var y=l.g[f],w=0;w<y.length;w++)ft(y[w]);delete l.g[f],l.h--}}this.F=null},lt.prototype.K=function(l,f,y,w){return this.i.add(String(l),f,!1,y,w)},lt.prototype.L=function(l,f,y,w){return this.i.add(String(l),f,!0,y,w)};function cr(l,f,y,w){if(f=l.i.g[String(f)],!f)return!0;f=f.concat();for(var M=!0,z=0;z<f.length;++z){var te=f[z];if(te&&!te.da&&te.capture==y){var be=te.listener,ct=te.ha||te.src;te.fa&&fs(l.i,te),M=be.call(ct,w)!==!1&&M}}return M&&!w.defaultPrevented}function ko(l,f,y){if(typeof l=="function")y&&(l=R(l,y));else if(l&&typeof l.handleEvent=="function")l=R(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:p.setTimeout(l,f||0)}function Fr(l){l.g=ko(()=>{l.g=null,l.i&&(l.i=!1,Fr(l))},l.l);const f=l.h;l.h=null,l.m.apply(null,f)}class Ti extends q{constructor(f,y){super(),this.m=f,this.l=y,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Fr(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ii(l){q.call(this),this.h=l,this.g={}}U(Ii,q);var Po=[];function No(l){ve(l.g,function(f,y){this.g.hasOwnProperty(y)&&lr(f)},l),l.g={}}Ii.prototype.N=function(){Ii.aa.N.call(this),No(this)},Ii.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var xo=p.JSON.stringify,Do=p.JSON.parse,Lo=class{stringify(l){return p.JSON.stringify(l,void 0)}parse(l){return p.JSON.parse(l,void 0)}};function Si(){}Si.prototype.h=null;function _s(l){return l.h||(l.h=l.i())}function vs(){}var cn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function $n(){he.call(this,"d")}U($n,he);function ws(){he.call(this,"c")}U(ws,he);var zn={},Oo=null;function Ci(){return Oo=Oo||new lt}zn.La="serverreachability";function Mo(l){he.call(this,zn.La,l)}U(Mo,he);function hr(l){const f=Ci();ut(f,new Mo(f))}zn.STAT_EVENT="statevent";function Vo(l,f){he.call(this,zn.STAT_EVENT,l),this.stat=f}U(Vo,he);function rt(l){const f=Ci();ut(f,new Vo(f,l))}zn.Ma="timingevent";function Es(l,f){he.call(this,zn.Ma,l),this.size=f}U(Es,he);function En(l,f){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){l()},f)}function Ai(){this.g=!0}Ai.prototype.xa=function(){this.g=!1};function Ri(l,f,y,w,M,z){l.info(function(){if(l.g)if(z)for(var te="",be=z.split("&"),ct=0;ct<be.length;ct++){var xe=be[ct].split("=");if(1<xe.length){var pt=xe[0];xe=xe[1];var st=pt.split("_");te=2<=st.length&&st[1]=="type"?te+(pt+"="+xe+"&"):te+(pt+"=redacted&")}}else te=null;else te=z;return"XMLHTTP REQ ("+w+") [attempt "+M+"]: "+f+`
`+y+`
`+te})}function Ts(l,f,y,w,M,z,te){l.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+M+"]: "+f+`
`+y+`
`+z+" "+te})}function Tn(l,f,y,w){l.info(function(){return"XMLHTTP TEXT ("+f+"): "+vc(l,y)+(w?" "+w:"")})}function bo(l,f){l.info(function(){return"TIMEOUT: "+f})}Ai.prototype.info=function(){};function vc(l,f){if(!l.g)return f;if(!f)return null;try{var y=JSON.parse(f);if(y){for(l=0;l<y.length;l++)if(Array.isArray(y[l])){var w=y[l];if(!(2>w.length)){var M=w[1];if(Array.isArray(M)&&!(1>M.length)){var z=M[0];if(z!="noop"&&z!="stop"&&z!="close")for(var te=1;te<M.length;te++)M[te]=""}}}}return xo(y)}catch{return f}}var Is={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},el={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},In;function ki(){}U(ki,Si),ki.prototype.g=function(){return new XMLHttpRequest},ki.prototype.i=function(){return{}},In=new ki;function Sn(l,f,y,w){this.j=l,this.i=f,this.l=y,this.R=w||1,this.U=new Ii(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new tl}function tl(){this.i=null,this.g="",this.h=!1}var Fo={},Ss={};function Cs(l,f,y){l.L=1,l.v=zr(nn(f)),l.m=y,l.P=!0,Uo(l,null)}function Uo(l,f){l.F=Date.now(),$e(l),l.A=nn(l.v);var y=l.A,w=l.R;Array.isArray(w)||(w=[String(w)]),Wr(y.i,"t",w),l.C=0,y=l.j.J,l.h=new tl,l.g=vl(l.j,y?f:null,!l.m),0<l.O&&(l.M=new Ti(R(l.Y,l,l.g),l.O)),f=l.U,y=l.g,w=l.ca;var M="readystatechange";Array.isArray(M)||(M&&(Po[0]=M.toString()),M=Po);for(var z=0;z<M.length;z++){var te=So(y,M[z],w||f.handleEvent,!1,f.h||f);if(!te)break;f.g[te.key]=te}f=l.H?T(l.H):{},l.m?(l.u||(l.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,f)):(l.u="GET",l.g.ea(l.A,l.u,null,f)),hr(),Ri(l.i,l.u,l.A,l.l,l.R,l.m)}Sn.prototype.ca=function(l){l=l.target;const f=this.M;f&&Wt(l)==3?f.j():this.Y(l)},Sn.prototype.Y=function(l){try{if(l==this.g)e:{const st=Wt(this.g);var f=this.g.Ba();const fn=this.g.Z();if(!(3>st)&&(st!=3||this.g&&(this.h.h||this.g.oa()||Wo(this.g)))){this.J||st!=4||f==7||(f==8||0>=fn?hr(3):hr(2)),Pi(this);var y=this.g.Z();this.X=y;t:if(nl(this)){var w=Wo(this.g);l="";var M=w.length,z=Wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){hn(this),Ur(this);var te="";break t}this.h.i=new p.TextDecoder}for(f=0;f<M;f++)this.h.h=!0,l+=this.h.i.decode(w[f],{stream:!(z&&f==M-1)});w.length=0,this.h.g+=l,this.C=0,te=this.h.g}else te=this.g.oa();if(this.o=y==200,Ts(this.i,this.u,this.A,this.l,this.R,st,y),this.o){if(this.T&&!this.K){t:{if(this.g){var be,ct=this.g;if((be=ct.g?ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!J(be)){var xe=be;break t}}xe=null}if(y=xe)Tn(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,jo(this,y);else{this.o=!1,this.s=3,rt(12),hn(this),Ur(this);break e}}if(this.P){y=!0;let sn;for(;!this.J&&this.C<te.length;)if(sn=wc(this,te),sn==Ss){st==4&&(this.s=4,rt(14),y=!1),Tn(this.i,this.l,null,"[Incomplete Response]");break}else if(sn==Fo){this.s=4,rt(15),Tn(this.i,this.l,te,"[Invalid Chunk]"),y=!1;break}else Tn(this.i,this.l,sn,null),jo(this,sn);if(nl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),st!=4||te.length!=0||this.h.h||(this.s=1,rt(16),y=!1),this.o=this.o&&y,!y)Tn(this.i,this.l,te,"[Invalid Chunked Response]"),hn(this),Ur(this);else if(0<te.length&&!this.W){this.W=!0;var pt=this.j;pt.g==this&&pt.ba&&!pt.M&&(pt.j.info("Great, no buffering proxy detected. Bytes received: "+te.length),Ko(pt),pt.M=!0,rt(11))}}else Tn(this.i,this.l,te,null),jo(this,te);st==4&&hn(this),this.o&&!this.J&&(st==4?Vs(this.j,this):(this.o=!1,$e(this)))}else xs(this.g),y==400&&0<te.indexOf("Unknown SID")?(this.s=3,rt(12)):(this.s=0,rt(13)),hn(this),Ur(this)}}}catch{}finally{}};function nl(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function wc(l,f){var y=l.C,w=f.indexOf(`
`,y);return w==-1?Ss:(y=Number(f.substring(y,w)),isNaN(y)?Fo:(w+=1,w+y>f.length?Ss:(f=f.slice(w,w+y),l.C=w+y,f)))}Sn.prototype.cancel=function(){this.J=!0,hn(this)};function $e(l){l.S=Date.now()+l.I,rl(l,l.I)}function rl(l,f){if(l.B!=null)throw Error("WatchDog timer not null");l.B=En(R(l.ba,l),f)}function Pi(l){l.B&&(p.clearTimeout(l.B),l.B=null)}Sn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(bo(this.i,this.A),this.L!=2&&(hr(),rt(17)),hn(this),this.s=2,Ur(this)):rl(this,this.S-l)};function Ur(l){l.j.G==0||l.J||Vs(l.j,l)}function hn(l){Pi(l);var f=l.M;f&&typeof f.ma=="function"&&f.ma(),l.M=null,No(l.U),l.g&&(f=l.g,l.g=null,f.abort(),f.ma())}function jo(l,f){try{var y=l.j;if(y.G!=0&&(y.g==l||Ut(y.h,l))){if(!l.K&&Ut(y.h,l)&&y.G==3){try{var w=y.Da.g.parse(f)}catch{w=null}if(Array.isArray(w)&&w.length==3){var M=w;if(M[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<l.F)Ms(y),Pn(y);else break e;Os(y),rt(18)}}else y.za=M[1],0<y.za-y.T&&37500>M[2]&&y.F&&y.v==0&&!y.C&&(y.C=En(R(y.Za,y),6e3));if(1>=sl(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else gr(y,11)}else if((l.K||y.g==l)&&Ms(y),!J(f))for(M=y.Da.g.parse(f),f=0;f<M.length;f++){let xe=M[f];if(y.T=xe[0],xe=xe[1],y.G==2)if(xe[0]=="c"){y.K=xe[1],y.ia=xe[2];const pt=xe[3];pt!=null&&(y.la=pt,y.j.info("VER="+y.la));const st=xe[4];st!=null&&(y.Aa=st,y.j.info("SVER="+y.Aa));const fn=xe[5];fn!=null&&typeof fn=="number"&&0<fn&&(w=1.5*fn,y.L=w,y.j.info("backChannelRequestTimeoutMs_="+w)),w=y;const sn=l.g;if(sn){const Vi=sn.g?sn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Vi){var z=w.h;z.g||Vi.indexOf("spdy")==-1&&Vi.indexOf("quic")==-1&&Vi.indexOf("h2")==-1||(z.j=z.l,z.g=new Set,z.h&&(Bo(z,z.h),z.h=null))}if(w.D){const Fs=sn.g?sn.g.getResponseHeader("X-HTTP-Session-Id"):null;Fs&&(w.ya=Fs,je(w.I,w.D,Fs))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-l.F,y.j.info("Handshake RTT: "+y.R+"ms")),w=y;var te=l;if(w.qa=_l(w,w.J?w.ia:null,w.W),te.K){ol(w.h,te);var be=te,ct=w.L;ct&&(be.I=ct),be.B&&(Pi(be),$e(be)),w.g=te}else Mi(w);0<y.i.length&&Kn(y)}else xe[0]!="stop"&&xe[0]!="close"||gr(y,7);else y.G==3&&(xe[0]=="stop"||xe[0]=="close"?xe[0]=="stop"?gr(y,7):Tt(y):xe[0]!="noop"&&y.l&&y.l.ta(xe),y.v=0)}}hr(4)}catch{}}var il=class{constructor(l,f){this.g=l,this.map=f}};function Ni(l){this.l=l||10,p.PerformanceNavigationTiming?(l=p.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function tn(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function sl(l){return l.h?1:l.g?l.g.size:0}function Ut(l,f){return l.h?l.h==f:l.g?l.g.has(f):!1}function Bo(l,f){l.g?l.g.add(f):l.h=f}function ol(l,f){l.h&&l.h==f?l.h=null:l.g&&l.g.has(f)&&l.g.delete(f)}Ni.prototype.cancel=function(){if(this.i=al(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function al(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let f=l.i;for(const y of l.g.values())f=f.concat(y.D);return f}return j(l.i)}function As(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(g(l)){for(var f=[],y=l.length,w=0;w<y;w++)f.push(l[w]);return f}f=[],y=0;for(w in l)f[y++]=l[w];return f}function Rs(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(g(l)||typeof l=="string"){var f=[];l=l.length;for(var y=0;y<l;y++)f.push(y);return f}f=[],y=0;for(const w in l)f[y++]=w;return f}}}function jr(l,f){if(l.forEach&&typeof l.forEach=="function")l.forEach(f,void 0);else if(g(l)||typeof l=="string")Array.prototype.forEach.call(l,f,void 0);else for(var y=Rs(l),w=As(l),M=w.length,z=0;z<M;z++)f.call(void 0,w[z],y&&y[z],l)}var xi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ec(l,f){if(l){l=l.split("&");for(var y=0;y<l.length;y++){var w=l[y].indexOf("="),M=null;if(0<=w){var z=l[y].substring(0,w);M=l[y].substring(w+1)}else z=l[y];f(z,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function dr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof dr){this.h=l.h,Di(this,l.j),this.o=l.o,this.g=l.g,Br(this,l.s),this.l=l.l;var f=l.i,y=new Hn;y.i=f.i,f.g&&(y.g=new Map(f.g),y.h=f.h),$r(this,y),this.m=l.m}else l&&(f=String(l).match(xi))?(this.h=!1,Di(this,f[1]||"",!0),this.o=Pe(f[2]||""),this.g=Pe(f[3]||"",!0),Br(this,f[4]),this.l=Pe(f[5]||"",!0),$r(this,f[6]||"",!0),this.m=Pe(f[7]||"")):(this.h=!1,this.i=new Hn(null,this.h))}dr.prototype.toString=function(){var l=[],f=this.j;f&&l.push(Hr(f,ks,!0),":");var y=this.g;return(y||f=="file")&&(l.push("//"),(f=this.o)&&l.push(Hr(f,ks,!0),"@"),l.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&l.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&l.push("/"),l.push(Hr(y,y.charAt(0)=="/"?cl:ul,!0))),(y=this.i.toString())&&l.push("?",y),(y=this.m)&&l.push("#",Hr(y,$o)),l.join("")};function nn(l){return new dr(l)}function Di(l,f,y){l.j=y?Pe(f,!0):f,l.j&&(l.j=l.j.replace(/:$/,""))}function Br(l,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);l.s=f}else l.s=null}function $r(l,f,y){f instanceof Hn?(l.i=f,Wn(l.i,l.h)):(y||(f=Hr(f,hl)),l.i=new Hn(f,l.h))}function je(l,f,y){l.i.set(f,y)}function zr(l){return je(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Pe(l,f){return l?f?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Hr(l,f,y){return typeof l=="string"?(l=encodeURI(l).replace(f,ll),y&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function ll(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var ks=/[#\/\?@]/g,ul=/[#\?:]/g,cl=/[#\?]/g,hl=/[#\?@]/g,$o=/#/g;function Hn(l,f){this.h=this.g=null,this.i=l||null,this.j=!!f}function Et(l){l.g||(l.g=new Map,l.h=0,l.i&&Ec(l.i,function(f,y){l.add(decodeURIComponent(f.replace(/\+/g," ")),y)}))}r=Hn.prototype,r.add=function(l,f){Et(this),this.i=null,l=dn(this,l);var y=this.g.get(l);return y||this.g.set(l,y=[]),y.push(f),this.h+=1,this};function Cn(l,f){Et(l),f=dn(l,f),l.g.has(f)&&(l.i=null,l.h-=l.g.get(f).length,l.g.delete(f))}function An(l,f){return Et(l),f=dn(l,f),l.g.has(f)}r.forEach=function(l,f){Et(this),this.g.forEach(function(y,w){y.forEach(function(M){l.call(f,M,w,this)},this)},this)},r.na=function(){Et(this);const l=Array.from(this.g.values()),f=Array.from(this.g.keys()),y=[];for(let w=0;w<f.length;w++){const M=l[w];for(let z=0;z<M.length;z++)y.push(f[w])}return y},r.V=function(l){Et(this);let f=[];if(typeof l=="string")An(this,l)&&(f=f.concat(this.g.get(dn(this,l))));else{l=Array.from(this.g.values());for(let y=0;y<l.length;y++)f=f.concat(l[y])}return f},r.set=function(l,f){return Et(this),this.i=null,l=dn(this,l),An(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[f]),this.h+=1,this},r.get=function(l,f){return l?(l=this.V(l),0<l.length?String(l[0]):f):f};function Wr(l,f,y){Cn(l,f),0<y.length&&(l.i=null,l.g.set(dn(l,f),j(y)),l.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],f=Array.from(this.g.keys());for(var y=0;y<f.length;y++){var w=f[y];const z=encodeURIComponent(String(w)),te=this.V(w);for(w=0;w<te.length;w++){var M=z;te[w]!==""&&(M+="="+encodeURIComponent(String(te[w]))),l.push(M)}}return this.i=l.join("&")};function dn(l,f){return f=String(f),l.j&&(f=f.toLowerCase()),f}function Wn(l,f){f&&!l.j&&(Et(l),l.i=null,l.g.forEach(function(y,w){var M=w.toLowerCase();w!=M&&(Cn(this,w),Wr(this,M,y))},l)),l.j=f}function Tc(l,f){const y=new Ai;if(p.Image){const w=new Image;w.onload=F(Ht,y,"TestLoadImage: loaded",!0,f,w),w.onerror=F(Ht,y,"TestLoadImage: error",!1,f,w),w.onabort=F(Ht,y,"TestLoadImage: abort",!1,f,w),w.ontimeout=F(Ht,y,"TestLoadImage: timeout",!1,f,w),p.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=l}else f(!1)}function dl(l,f){const y=new Ai,w=new AbortController,M=setTimeout(()=>{w.abort(),Ht(y,"TestPingServer: timeout",!1,f)},1e4);fetch(l,{signal:w.signal}).then(z=>{clearTimeout(M),z.ok?Ht(y,"TestPingServer: ok",!0,f):Ht(y,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(M),Ht(y,"TestPingServer: error",!1,f)})}function Ht(l,f,y,w,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),w(y)}catch{}}function Ic(){this.g=new Lo}function fl(l,f,y){const w=y||"";try{jr(l,function(M,z){let te=M;_(M)&&(te=xo(M)),f.push(w+z+"="+encodeURIComponent(te))})}catch(M){throw f.push(w+"type="+encodeURIComponent("_badmap")),M}}function fr(l){this.l=l.Ub||null,this.j=l.eb||!1}U(fr,Si),fr.prototype.g=function(){return new Li(this.l,this.j)},fr.prototype.i=function(l){return function(){return l}}({});function Li(l,f){lt.call(this),this.D=l,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}U(Li,lt),r=Li.prototype,r.open=function(l,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=f,this.readyState=1,kn(this)},r.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(f.body=l),(this.D||p).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Rn(this)),this.readyState=0},r.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,kn(this)),this.g&&(this.readyState=3,kn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;pl(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function pl(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}r.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var f=l.value?l.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!l.done}))&&(this.response=this.responseText+=f)}l.done?Rn(this):kn(this),this.readyState==3&&pl(this)}},r.Ra=function(l){this.g&&(this.response=this.responseText=l,Rn(this))},r.Qa=function(l){this.g&&(this.response=l,Rn(this))},r.ga=function(){this.g&&Rn(this)};function Rn(l){l.readyState=4,l.l=null,l.j=null,l.v=null,kn(l)}r.setRequestHeader=function(l,f){this.u.append(l,f)},r.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],f=this.h.entries();for(var y=f.next();!y.done;)y=y.value,l.push(y[0]+": "+y[1]),y=f.next();return l.join(`\r
`)};function kn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Li.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function pr(l){let f="";return ve(l,function(y,w){f+=w,f+=":",f+=y,f+=`\r
`}),f}function qr(l,f,y){e:{for(w in y){var w=!1;break e}w=!0}w||(y=pr(y),typeof l=="string"?y!=null&&encodeURIComponent(String(y)):je(l,f,y))}function Ke(l){lt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}U(Ke,lt);var Sc=/^https?$/i,zo=["POST","PUT"];r=Ke.prototype,r.Ha=function(l){this.J=l},r.ea=function(l,f,y,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);f=f?f.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():In.g(),this.v=this.o?_s(this.o):_s(In),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(f,String(l),!0),this.B=!1}catch(z){Oi(this,z);return}if(l=y||"",y=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var M in w)y.set(M,w[M]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const z of w.keys())y.set(z,w.get(z));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(y.keys()).find(z=>z.toLowerCase()=="content-type"),M=p.FormData&&l instanceof p.FormData,!(0<=Array.prototype.indexOf.call(zo,f,void 0))||w||M||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[z,te]of y)this.g.setRequestHeader(z,te);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ns(this),this.u=!0,this.g.send(l),this.u=!1}catch(z){Oi(this,z)}};function Oi(l,f){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=f,l.m=5,Ps(l),rn(l)}function Ps(l){l.A||(l.A=!0,ut(l,"complete"),ut(l,"error"))}r.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,ut(this,"complete"),ut(this,"abort"),rn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),rn(this,!0)),Ke.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Ho(this):this.bb())},r.bb=function(){Ho(this)};function Ho(l){if(l.h&&typeof h<"u"&&(!l.v[1]||Wt(l)!=4||l.Z()!=2)){if(l.u&&Wt(l)==4)ko(l.Ea,0,l);else if(ut(l,"readystatechange"),Wt(l)==4){l.h=!1;try{const te=l.Z();e:switch(te){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var y;if(!(y=f)){var w;if(w=te===0){var M=String(l.D).match(xi)[1]||null;!M&&p.self&&p.self.location&&(M=p.self.location.protocol.slice(0,-1)),w=!Sc.test(M?M.toLowerCase():"")}y=w}if(y)ut(l,"complete"),ut(l,"success");else{l.m=6;try{var z=2<Wt(l)?l.g.statusText:""}catch{z=""}l.l=z+" ["+l.Z()+"]",Ps(l)}}finally{rn(l)}}}}function rn(l,f){if(l.g){Ns(l);const y=l.g,w=l.v[0]?()=>{}:null;l.g=null,l.v=null,f||ut(l,"ready");try{y.onreadystatechange=w}catch{}}}function Ns(l){l.I&&(p.clearTimeout(l.I),l.I=null)}r.isActive=function(){return!!this.g};function Wt(l){return l.g?l.g.readyState:0}r.Z=function(){try{return 2<Wt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(l){if(this.g){var f=this.g.responseText;return l&&f.indexOf(l)==0&&(f=f.substring(l.length)),Do(f)}};function Wo(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function xs(l){const f={};l=(l.g&&2<=Wt(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<l.length;w++){if(J(l[w]))continue;var y=D(l[w]);const M=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const z=f[M]||[];f[M]=z,z.push(y)}N(f,function(w){return w.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function qn(l,f,y){return y&&y.internalChannelParams&&y.internalChannelParams[l]||f}function qo(l){this.Aa=0,this.i=[],this.j=new Ai,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=qn("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=qn("baseRetryDelayMs",5e3,l),this.cb=qn("retryDelaySeedMs",1e4,l),this.Wa=qn("forwardChannelMaxRetries",2,l),this.wa=qn("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Ni(l&&l.concurrentRequestLimit),this.Da=new Ic,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=qo.prototype,r.la=8,r.G=1,r.connect=function(l,f,y,w){rt(0),this.W=l,this.H=f||{},y&&w!==void 0&&(this.H.OSID=y,this.H.OAID=w),this.F=this.X,this.I=_l(this,null,this.W),Kn(this)};function Tt(l){if(Ds(l),l.G==3){var f=l.U++,y=nn(l.I);if(je(y,"SID",l.K),je(y,"RID",f),je(y,"TYPE","terminate"),mr(l,y),f=new Sn(l,l.j,f),f.L=2,f.v=zr(nn(y)),y=!1,p.navigator&&p.navigator.sendBeacon)try{y=p.navigator.sendBeacon(f.v.toString(),"")}catch{}!y&&p.Image&&(new Image().src=f.v,y=!0),y||(f.g=vl(f.j,null),f.g.ea(f.v)),f.F=Date.now(),$e(f)}yl(l)}function Pn(l){l.g&&(Ko(l),l.g.cancel(),l.g=null)}function Ds(l){Pn(l),l.u&&(p.clearTimeout(l.u),l.u=null),Ms(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&p.clearTimeout(l.s),l.s=null)}function Kn(l){if(!tn(l.h)&&!l.s){l.s=!0;var f=l.Ga;Ue||se(),ne||(Ue(),ne=!0),fe.add(f,l),l.B=0}}function Cc(l,f){return sl(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=f.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=En(R(l.Ga,l,f),gl(l,l.B)),l.B++,!0)}r.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const M=new Sn(this,this.j,l);let z=this.o;if(this.S&&(z?(z=T(z),P(z,this.S)):z=this.S),this.m!==null||this.O||(M.H=z,z=null),this.P)e:{for(var f=0,y=0;y<this.i.length;y++){t:{var w=this.i[y];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(f+=w,4096<f){f=y;break e}if(f===4096||y===this.i.length-1){f=y+1;break e}}f=1e3}else f=1e3;f=Kr(this,M,f),y=nn(this.I),je(y,"RID",l),je(y,"CVER",22),this.D&&je(y,"X-HTTP-Session-Id",this.D),mr(this,y),z&&(this.O?f="headers="+encodeURIComponent(String(pr(z)))+"&"+f:this.m&&qr(y,this.m,z)),Bo(this.h,M),this.Ua&&je(y,"TYPE","init"),this.P?(je(y,"$req",f),je(y,"SID","null"),M.T=!0,Cs(M,y,null)):Cs(M,y,f),this.G=2}}else this.G==3&&(l?Ls(this,l):this.i.length==0||tn(this.h)||Ls(this))};function Ls(l,f){var y;f?y=f.l:y=l.U++;const w=nn(l.I);je(w,"SID",l.K),je(w,"RID",y),je(w,"AID",l.T),mr(l,w),l.m&&l.o&&qr(w,l.m,l.o),y=new Sn(l,l.j,y,l.B+1),l.m===null&&(y.H=l.o),f&&(l.i=f.D.concat(l.i)),f=Kr(l,y,1e3),y.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Bo(l.h,y),Cs(y,w,f)}function mr(l,f){l.H&&ve(l.H,function(y,w){je(f,w,y)}),l.l&&jr({},function(y,w){je(f,w,y)})}function Kr(l,f,y){y=Math.min(l.i.length,y);var w=l.l?R(l.l.Na,l.l,l):null;e:{var M=l.i;let z=-1;for(;;){const te=["count="+y];z==-1?0<y?(z=M[0].g,te.push("ofs="+z)):z=0:te.push("ofs="+z);let be=!0;for(let ct=0;ct<y;ct++){let xe=M[ct].g;const pt=M[ct].map;if(xe-=z,0>xe)z=Math.max(0,M[ct].g-100),be=!1;else try{fl(pt,te,"req"+xe+"_")}catch{w&&w(pt)}}if(be){w=te.join("&");break e}}}return l=l.i.splice(0,y),f.D=l,w}function Mi(l){if(!l.g&&!l.u){l.Y=1;var f=l.Fa;Ue||se(),ne||(Ue(),ne=!0),fe.add(f,l),l.v=0}}function Os(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=En(R(l.Fa,l),gl(l,l.v)),l.v++,!0)}r.Fa=function(){if(this.u=null,ml(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=En(R(this.ab,this),l)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,rt(10),Pn(this),ml(this))};function Ko(l){l.A!=null&&(p.clearTimeout(l.A),l.A=null)}function ml(l){l.g=new Sn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var f=nn(l.qa);je(f,"RID","rpc"),je(f,"SID",l.K),je(f,"AID",l.T),je(f,"CI",l.F?"0":"1"),!l.F&&l.ja&&je(f,"TO",l.ja),je(f,"TYPE","xmlhttp"),mr(l,f),l.m&&l.o&&qr(f,l.m,l.o),l.L&&(l.g.I=l.L);var y=l.g;l=l.ia,y.L=1,y.v=zr(nn(f)),y.m=null,y.P=!0,Uo(y,l)}r.Za=function(){this.C!=null&&(this.C=null,Pn(this),Os(this),rt(19))};function Ms(l){l.C!=null&&(p.clearTimeout(l.C),l.C=null)}function Vs(l,f){var y=null;if(l.g==f){Ms(l),Ko(l),l.g=null;var w=2}else if(Ut(l.h,f))y=f.D,ol(l.h,f),w=1;else return;if(l.G!=0){if(f.o)if(w==1){y=f.m?f.m.length:0,f=Date.now()-f.F;var M=l.B;w=Ci(),ut(w,new Es(w,y)),Kn(l)}else Mi(l);else if(M=f.s,M==3||M==0&&0<f.X||!(w==1&&Cc(l,f)||w==2&&Os(l)))switch(y&&0<y.length&&(f=l.h,f.i=f.i.concat(y)),M){case 1:gr(l,5);break;case 4:gr(l,10);break;case 3:gr(l,6);break;default:gr(l,2)}}}function gl(l,f){let y=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(y*=2),y*f}function gr(l,f){if(l.j.info("Error code "+f),f==2){var y=R(l.fb,l),w=l.Xa;const M=!w;w=new dr(w||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||Di(w,"https"),zr(w),M?Tc(w.toString(),y):dl(w.toString(),y)}else rt(2);l.G=0,l.l&&l.l.sa(f),yl(l),Ds(l)}r.fb=function(l){l?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function yl(l){if(l.G=0,l.ka=[],l.l){const f=al(l.h);(f.length!=0||l.i.length!=0)&&($(l.ka,f),$(l.ka,l.i),l.h.i.length=0,j(l.i),l.i.length=0),l.l.ra()}}function _l(l,f,y){var w=y instanceof dr?nn(y):new dr(y);if(w.g!="")f&&(w.g=f+"."+w.g),Br(w,w.s);else{var M=p.location;w=M.protocol,f=f?f+"."+M.hostname:M.hostname,M=+M.port;var z=new dr(null);w&&Di(z,w),f&&(z.g=f),M&&Br(z,M),y&&(z.l=y),w=z}return y=l.D,f=l.ya,y&&f&&je(w,y,f),je(w,"VER",l.la),mr(l,w),w}function vl(l,f,y){if(f&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=l.Ca&&!l.pa?new Ke(new fr({eb:y})):new Ke(l.pa),f.Ha(l.J),f}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Go(){}r=Go.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function bs(){}bs.prototype.g=function(l,f){return new jt(l,f)};function jt(l,f){lt.call(this),this.g=new qo(f),this.l=l,this.h=f&&f.messageUrlParams||null,l=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(l?l["X-WebChannel-Content-Type"]=f.messageContentType:l={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(l?l["X-WebChannel-Client-Profile"]=f.va:l={"X-WebChannel-Client-Profile":f.va}),this.g.S=l,(l=f&&f.Sb)&&!J(l)&&(this.g.m=l),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!J(f)&&(this.g.D=f,l=this.h,l!==null&&f in l&&(l=this.h,f in l&&delete l[f])),this.j=new Gn(this)}U(jt,lt),jt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},jt.prototype.close=function(){Tt(this.g)},jt.prototype.o=function(l){var f=this.g;if(typeof l=="string"){var y={};y.__data__=l,l=y}else this.u&&(y={},y.__data__=xo(l),l=y);f.i.push(new il(f.Ya++,l)),f.G==3&&Kn(f)},jt.prototype.N=function(){this.g.l=null,delete this.j,Tt(this.g),delete this.g,jt.aa.N.call(this)};function wl(l){$n.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var f=l.__sm__;if(f){e:{for(const y in f){l=y;break e}l=void 0}(this.i=l)&&(l=this.i,f=f!==null&&l in f?f[l]:void 0),this.data=f}else this.data=l}U(wl,$n);function El(){ws.call(this),this.status=1}U(El,ws);function Gn(l){this.g=l}U(Gn,Go),Gn.prototype.ua=function(){ut(this.g,"a")},Gn.prototype.ta=function(l){ut(this.g,new wl(l))},Gn.prototype.sa=function(l){ut(this.g,new El)},Gn.prototype.ra=function(){ut(this.g,"b")},bs.prototype.createWebChannel=bs.prototype.g,jt.prototype.send=jt.prototype.o,jt.prototype.open=jt.prototype.m,jt.prototype.close=jt.prototype.close,$_=function(){return new bs},B_=function(){return Ci()},j_=zn,Id={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Is.NO_ERROR=0,Is.TIMEOUT=8,Is.HTTP_ERROR=6,ku=Is,el.COMPLETE="complete",U_=el,vs.EventType=cn,cn.OPEN="a",cn.CLOSE="b",cn.ERROR="c",cn.MESSAGE="d",lt.prototype.listen=lt.prototype.K,Sa=vs,Ke.prototype.listenOnce=Ke.prototype.L,Ke.prototype.getLastError=Ke.prototype.Ka,Ke.prototype.getLastErrorCode=Ke.prototype.Ba,Ke.prototype.getStatus=Ke.prototype.Z,Ke.prototype.getResponseJson=Ke.prototype.Oa,Ke.prototype.getResponseText=Ke.prototype.oa,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Ha,F_=Ke}).apply(typeof yu<"u"?yu:typeof self<"u"?self:typeof window<"u"?window:{});const Rg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Vt.UNAUTHENTICATED=new Vt(null),Vt.GOOGLE_CREDENTIALS=new Vt("google-credentials-uid"),Vt.FIRST_PARTY=new Vt("first-party-uid"),Vt.MOCK_USER=new Vt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let To="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is=new sc("@firebase/firestore");function so(){return is.logLevel}function ue(r,...e){if(is.logLevel<=Re.DEBUG){const t=e.map(ef);is.debug(`Firestore (${To}): ${r}`,...t)}}function ss(r,...e){if(is.logLevel<=Re.ERROR){const t=e.map(ef);is.error(`Firestore (${To}): ${r}`,...t)}}function Hu(r,...e){if(is.logLevel<=Re.WARN){const t=e.map(ef);is.warn(`Firestore (${To}): ${r}`,...t)}}function ef(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(r="Unexpected state"){const e=`FIRESTORE (${To}) INTERNAL ASSERTION FAILED: `+r;throw ss(e),new Error(e)}function tt(r,e){r||ke()}function He(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ye extends Bn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class MA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Vt.UNAUTHENTICATED))}shutdown(){}}class VA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class bA{constructor(e){this.t=e,this.currentUser=Vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){tt(this.o===void 0);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let u=new Ji;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Ji,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const g=u;e.enqueueRetryable(async()=>{await g.promise,await o(this.currentUser)})},p=g=>{ue("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(g=>p(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?p(g):(ue("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Ji)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(ue("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(tt(typeof s.accessToken=="string"),new z_(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return tt(e===null||typeof e=="string"),new Vt(e)}}class FA{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=Vt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class UA{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new FA(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class jA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class BA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){tt(this.o===void 0);const s=u=>{u.error!=null&&ue("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.R;return this.R=u.token,ue("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{ue("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.A.getImmediate({optional:!0});u?o(u):ue("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(tt(typeof t.token=="string"),this.R=t.token,new jA(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $A(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const o=$A(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%e.length))}return s}}function Fe(r,e){return r<e?-1:r>e?1:0}function fo(r,e,t){return r.length===e.length&&r.every((s,o)=>t(s,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{static now(){return wt.fromMillis(Date.now())}static fromDate(e){return wt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new wt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ye(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ye(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ye(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ye(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Fe(this.nanoseconds,e.nanoseconds):Fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{static fromTimestamp(e){return new Qe(e)}static min(){return new Qe(new wt(0,0))}static max(){return new Qe(new wt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e,t,s){t===void 0?t=0:t>e.length&&ke(),s===void 0?s=e.length-t:s>e.length-t&&ke(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Va.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Va?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=e.get(o),h=t.get(o);if(u<h)return-1;if(u>h)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class et extends Va{construct(e,t,s){return new et(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ye(Z.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new et(t)}static emptyPath(){return new et([])}}const zA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Rt extends Va{construct(e,t,s){return new Rt(e,t,s)}static isValidIdentifier(e){return zA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Rt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Rt(["__name__"])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new ye(Z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const p=e[o];if(p==="\\"){if(o+1===e.length)throw new ye(Z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ye(Z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else p==="`"?(h=!h,o++):p!=="."||h?(s+=p,o++):(u(),o++)}if(u(),h)throw new ye(Z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Rt(t)}static emptyPath(){return new Rt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.path=e}static fromPath(e){return new we(et.fromString(e))}static fromName(e){return new we(et.fromString(e).popFirst(5))}static empty(){return new we(et.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&et.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return et.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new we(new et(e.slice()))}}function HA(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=Qe.fromTimestamp(s===1e9?new wt(t+1,0):new wt(t,s));return new yi(o,we.empty(),e)}function WA(r){return new yi(r.readTime,r.key,-1)}class yi{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new yi(Qe.min(),we.empty(),-1)}static max(){return new yi(Qe.max(),we.empty(),-1)}}function qA(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=we.comparator(r.documentKey,e.documentKey),t!==0?t:Fe(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class GA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tf(r){if(r.code!==Z.FAILED_PRECONDITION||r.message!==KA)throw r;ue("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ke(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new K((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof K?t:K.resolve(t)}catch(t){return K.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):K.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):K.reject(t)}static resolve(e){return new K((t,s)=>{t(e)})}static reject(e){return new K((t,s)=>{s(e)})}static waitFor(e){return new K((t,s)=>{let o=0,u=0,h=!1;e.forEach(p=>{++o,p.next(()=>{++u,h&&u===o&&t()},g=>s(g))}),h=!0,u===o&&t()})}static or(e){let t=K.resolve(!1);for(const s of e)t=t.next(o=>o?K.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,u)=>{s.push(t.call(this,o,u))}),this.waitFor(s)}static mapArray(e,t){return new K((s,o)=>{const u=e.length,h=new Array(u);let p=0;for(let g=0;g<u;g++){const _=g;t(e[_]).next(E=>{h[_]=E,++p,p===u&&s(h)},E=>o(E))}})}static doWhile(e,t){return new K((s,o)=>{const u=()=>{e()===!0?t().next(()=>{u()},o):s()};u()})}}function QA(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Qa(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ie(s),this.se=s=>t.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}nf.oe=-1;function rf(r){return r==null}function Wu(r){return r===0&&1/r==-1/0}function XA(r){return typeof r=="number"&&Number.isInteger(r)&&!Wu(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YA(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=kg(e)),e=JA(r.get(t),e);return kg(e)}function JA(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":t+="";break;case"":t+="";break;default:t+=u}}return t}function kg(r){return r+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Io(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function W_(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,t){this.comparator=e,this.root=t||Ct.EMPTY}insert(e,t){return new en(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ct.BLACK,null,null))}remove(e){return new en(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ct.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _u(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _u(this.root,e,this.comparator,!1)}getReverseIterator(){return new _u(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _u(this.root,e,this.comparator,!0)}}class _u{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ct{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??Ct.RED,this.left=o??Ct.EMPTY,this.right=u??Ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new Ct(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Ct.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ke();const e=this.left.check();if(e!==this.right.check())throw ke();return e+(this.isRed()?0:1)}}Ct.EMPTY=null,Ct.RED=!0,Ct.BLACK=!1;Ct.EMPTY=new class{constructor(){this.size=0}get key(){throw ke()}get value(){throw ke()}get color(){throw ke()}get left(){throw ke()}get right(){throw ke()}copy(e,t,s,o,u){return this}insert(e,t,s){return new Ct(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.comparator=e,this.data=new en(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ng(this.data.getIterator())}getIteratorFrom(e){return new Ng(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof kt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new kt(this.comparator);return t.data=e,t}}class Ng{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this.fields=e,e.sort(Rt.comparator)}static empty(){return new Fn([])}unionWith(e){let t=new kt(Rt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Fn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return fo(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new ZA("Invalid base64 string: "+u):u}}(e);return new ir(t)}static fromUint8Array(e){const t=function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u}(e);return new ir(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ir.EMPTY_BYTE_STRING=new ir("");const eR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function os(r){if(tt(!!r),typeof r=="string"){let e=0;const t=eR.exec(r);if(tt(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:At(r.seconds),nanos:At(r.nanos)}}function At(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function po(r){return typeof r=="string"?ir.fromBase64String(r):ir.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function of(r){const e=r.mapValue.fields.__previous_value__;return sf(e)?of(e):e}function qu(r){const e=os(r.mapValue.fields.__local_write_time__.timestampValue);return new wt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tR{constructor(e,t,s,o,u,h,p,g,_){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=p,this.longPollingOptions=g,this.useFetchStreams=_}}class Ku{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Ku("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ku&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function as(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?sf(r)?4:rR(r)?9007199254740991:nR(r)?10:11:ke()}function sr(r,e){if(r===e)return!0;const t=as(r);if(t!==as(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return qu(r).isEqual(qu(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=os(o.timestampValue),p=os(u.timestampValue);return h.seconds===p.seconds&&h.nanos===p.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(o,u){return po(o.bytesValue).isEqual(po(u.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(o,u){return At(o.geoPointValue.latitude)===At(u.geoPointValue.latitude)&&At(o.geoPointValue.longitude)===At(u.geoPointValue.longitude)}(r,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return At(o.integerValue)===At(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=At(o.doubleValue),p=At(u.doubleValue);return h===p?Wu(h)===Wu(p):isNaN(h)&&isNaN(p)}return!1}(r,e);case 9:return fo(r.arrayValue.values||[],e.arrayValue.values||[],sr);case 10:case 11:return function(o,u){const h=o.mapValue.fields||{},p=u.mapValue.fields||{};if(Pg(h)!==Pg(p))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(p[g]===void 0||!sr(h[g],p[g])))return!1;return!0}(r,e);default:return ke()}}function ba(r,e){return(r.values||[]).find(t=>sr(t,e))!==void 0}function mo(r,e){if(r===e)return 0;const t=as(r),s=as(e);if(t!==s)return Fe(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Fe(r.booleanValue,e.booleanValue);case 2:return function(u,h){const p=At(u.integerValue||u.doubleValue),g=At(h.integerValue||h.doubleValue);return p<g?-1:p>g?1:p===g?0:isNaN(p)?isNaN(g)?0:-1:1}(r,e);case 3:return xg(r.timestampValue,e.timestampValue);case 4:return xg(qu(r),qu(e));case 5:return Fe(r.stringValue,e.stringValue);case 6:return function(u,h){const p=po(u),g=po(h);return p.compareTo(g)}(r.bytesValue,e.bytesValue);case 7:return function(u,h){const p=u.split("/"),g=h.split("/");for(let _=0;_<p.length&&_<g.length;_++){const E=Fe(p[_],g[_]);if(E!==0)return E}return Fe(p.length,g.length)}(r.referenceValue,e.referenceValue);case 8:return function(u,h){const p=Fe(At(u.latitude),At(h.latitude));return p!==0?p:Fe(At(u.longitude),At(h.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return Dg(r.arrayValue,e.arrayValue);case 10:return function(u,h){var p,g,_,E;const S=u.fields||{},R=h.fields||{},F=(p=S.value)===null||p===void 0?void 0:p.arrayValue,U=(g=R.value)===null||g===void 0?void 0:g.arrayValue,j=Fe(((_=F==null?void 0:F.values)===null||_===void 0?void 0:_.length)||0,((E=U==null?void 0:U.values)===null||E===void 0?void 0:E.length)||0);return j!==0?j:Dg(F,U)}(r.mapValue,e.mapValue);case 11:return function(u,h){if(u===vu.mapValue&&h===vu.mapValue)return 0;if(u===vu.mapValue)return 1;if(h===vu.mapValue)return-1;const p=u.fields||{},g=Object.keys(p),_=h.fields||{},E=Object.keys(_);g.sort(),E.sort();for(let S=0;S<g.length&&S<E.length;++S){const R=Fe(g[S],E[S]);if(R!==0)return R;const F=mo(p[g[S]],_[E[S]]);if(F!==0)return F}return Fe(g.length,E.length)}(r.mapValue,e.mapValue);default:throw ke()}}function xg(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Fe(r,e);const t=os(r),s=os(e),o=Fe(t.seconds,s.seconds);return o!==0?o:Fe(t.nanos,s.nanos)}function Dg(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=mo(t[o],s[o]);if(u)return u}return Fe(t.length,s.length)}function go(r){return Sd(r)}function Sd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const s=os(t);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return po(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return we.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=Sd(u);return s+"]"}(r.arrayValue):"mapValue"in r?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${Sd(t.fields[h])}`;return o+"}"}(r.mapValue):ke()}function Pu(r){switch(as(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=of(r);return e?16+Pu(e):16;case 5:return 2*r.stringValue.length;case 6:return po(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+Pu(u),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return Io(s.fields,(u,h)=>{o+=u.length+Pu(h)}),o}(r.mapValue);default:throw ke()}}function Cd(r){return!!r&&"integerValue"in r}function af(r){return!!r&&"arrayValue"in r}function Nu(r){return!!r&&"mapValue"in r}function nR(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Ra(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return Io(r.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Ra(s)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ra(r.arrayValue.values[t]);return e}return Object.assign({},r)}function rR(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e){this.value=e}static empty(){return new bn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Nu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ra(t)}setAll(e){let t=Rt.emptyPath(),s={},o=[];e.forEach((h,p)=>{if(!t.isImmediateParentOf(p)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=p.popLast()}h?s[p.lastSegment()]=Ra(h):o.push(p.lastSegment())});const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());Nu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return sr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Nu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Io(t,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new bn(Ra(this.value))}}function q_(r){const e=[];return Io(r.fields,(t,s)=>{const o=new Rt([t]);if(Nu(s)){const u=q_(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)}),new Fn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e,t,s,o,u,h,p){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=p}static newInvalidDocument(e){return new Vn(e,0,Qe.min(),Qe.min(),Qe.min(),bn.empty(),0)}static newFoundDocument(e,t,s,o){return new Vn(e,1,t,Qe.min(),s,o,0)}static newNoDocument(e,t){return new Vn(e,2,t,Qe.min(),Qe.min(),bn.empty(),0)}static newUnknownDocument(e,t){return new Vn(e,3,t,Qe.min(),Qe.min(),bn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Qe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=bn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=bn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Qe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Vn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Vn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,t){this.position=e,this.inclusive=t}}function Lg(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const u=e[o],h=r.position[o];if(u.field.isKeyField()?s=we.comparator(we.fromName(h.referenceValue),t.key):s=mo(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Og(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!sr(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e,t="asc"){this.field=e,this.dir=t}}function iR(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{}class vt extends K_{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new oR(e,t,s):t==="array-contains"?new uR(e,s):t==="in"?new cR(e,s):t==="not-in"?new hR(e,s):t==="array-contains-any"?new dR(e,s):new vt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new aR(e,s):new lR(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(mo(t,this.value)):t!==null&&as(this.value)===as(t)&&this.matchesComparison(mo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ke()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class _i extends K_{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new _i(e,t)}matches(e){return G_(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function G_(r){return r.op==="and"}function Q_(r){return sR(r)&&G_(r)}function sR(r){for(const e of r.filters)if(e instanceof _i)return!1;return!0}function Ad(r){if(r instanceof vt)return r.field.canonicalString()+r.op.toString()+go(r.value);if(Q_(r))return r.filters.map(e=>Ad(e)).join(",");{const e=r.filters.map(t=>Ad(t)).join(",");return`${r.op}(${e})`}}function X_(r,e){return r instanceof vt?function(s,o){return o instanceof vt&&s.op===o.op&&s.field.isEqual(o.field)&&sr(s.value,o.value)}(r,e):r instanceof _i?function(s,o){return o instanceof _i&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,h,p)=>u&&X_(h,o.filters[p]),!0):!1}(r,e):void ke()}function Y_(r){return r instanceof vt?function(t){return`${t.field.canonicalString()} ${t.op} ${go(t.value)}`}(r):r instanceof _i?function(t){return t.op.toString()+" {"+t.getFilters().map(Y_).join(" ,")+"}"}(r):"Filter"}class oR extends vt{constructor(e,t,s){super(e,t,s),this.key=we.fromName(s.referenceValue)}matches(e){const t=we.comparator(e.key,this.key);return this.matchesComparison(t)}}class aR extends vt{constructor(e,t){super(e,"in",t),this.keys=J_("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class lR extends vt{constructor(e,t){super(e,"not-in",t),this.keys=J_("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function J_(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>we.fromName(s.referenceValue))}class uR extends vt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return af(t)&&ba(t.arrayValue,this.value)}}class cR extends vt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ba(this.value.arrayValue,t)}}class hR extends vt{constructor(e,t){super(e,"not-in",t)}matches(e){if(ba(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ba(this.value.arrayValue,t)}}class dR extends vt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!af(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>ba(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(e,t=null,s=[],o=[],u=null,h=null,p=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=p,this.ue=null}}function Mg(r,e=null,t=[],s=[],o=null,u=null,h=null){return new fR(r,e,t,s,o,u,h)}function lf(r){const e=He(r);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>Ad(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),rf(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>go(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>go(s)).join(",")),e.ue=t}return e.ue}function uf(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!iR(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!X_(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Og(r.startAt,e.startAt)&&Og(r.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,t=null,s=[],o=[],u=null,h="F",p=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=p,this.endAt=g,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function pR(r,e,t,s,o,u,h,p){return new hc(r,e,t,s,o,u,h,p)}function mR(r){return new hc(r)}function Vg(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function gR(r){return r.collectionGroup!==null}function ka(r){const e=He(r);if(e.ce===null){e.ce=[];const t=new Set;for(const u of e.explicitOrderBy)e.ce.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let p=new kt(Rt.comparator);return h.filters.forEach(g=>{g.getFlattenedFilters().forEach(_=>{_.isInequality()&&(p=p.add(_.field))})}),p})(e).forEach(u=>{t.has(u.canonicalString())||u.isKeyField()||e.ce.push(new Qu(u,s))}),t.has(Rt.keyField().canonicalString())||e.ce.push(new Qu(Rt.keyField(),s))}return e.ce}function Zi(r){const e=He(r);return e.le||(e.le=yR(e,ka(r))),e.le}function yR(r,e){if(r.limitType==="F")return Mg(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new Qu(o.field,u)});const t=r.endAt?new Gu(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Gu(r.startAt.position,r.startAt.inclusive):null;return Mg(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function Rd(r,e,t){return new hc(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Z_(r,e){return uf(Zi(r),Zi(e))&&r.limitType===e.limitType}function ev(r){return`${lf(Zi(r))}|lt:${r.limitType}`}function Ea(r){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>Y_(o)).join(", ")}]`),rf(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>go(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>go(o)).join(",")),`Target(${s})`}(Zi(r))}; limitType=${r.limitType})`}function cf(r,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):we.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(r,e)&&function(s,o){for(const u of ka(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(r,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(r,e)&&function(s,o){return!(s.startAt&&!function(h,p,g){const _=Lg(h,p,g);return h.inclusive?_<=0:_<0}(s.startAt,ka(s),o)||s.endAt&&!function(h,p,g){const _=Lg(h,p,g);return h.inclusive?_>=0:_>0}(s.endAt,ka(s),o))}(r,e)}function _R(r){return(e,t)=>{let s=!1;for(const o of ka(r)){const u=vR(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function vR(r,e,t){const s=r.field.isKeyField()?we.comparator(e.key,t.key):function(u,h,p){const g=h.data.field(u),_=p.data.field(u);return g!==null&&_!==null?mo(g,_):ke()}(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return ke()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Io(this.inner,(t,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return W_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wR=new en(we.comparator);function Xu(){return wR}const tv=new en(we.comparator);function wu(...r){let e=tv;for(const t of r)e=e.insert(t.key,t);return e}function nv(r){let e=tv;return r.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Yi(){return Pa()}function rv(){return Pa()}function Pa(){return new hs(r=>r.toString(),(r,e)=>r.isEqual(e))}const ER=new en(we.comparator),TR=new kt(we.comparator);function bt(...r){let e=TR;for(const t of r)e=e.add(t);return e}const IR=new kt(Fe);function SR(){return IR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wu(e)?"-0":e}}function iv(r){return{integerValue:""+r}}function CR(r,e){return XA(e)?iv(e):hf(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(){this._=void 0}}function AR(r,e,t){return r instanceof Yu?function(o,u){const h={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&sf(u)&&(u=of(u)),u&&(h.fields.__previous_value__=u),{mapValue:h}}(t,e):r instanceof Fa?ov(r,e):r instanceof Ua?av(r,e):function(o,u){const h=sv(o,u),p=bg(h)+bg(o.Pe);return Cd(h)&&Cd(o.Pe)?iv(p):hf(o.serializer,p)}(r,e)}function RR(r,e,t){return r instanceof Fa?ov(r,e):r instanceof Ua?av(r,e):t}function sv(r,e){return r instanceof Ju?function(s){return Cd(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class Yu extends dc{}class Fa extends dc{constructor(e){super(),this.elements=e}}function ov(r,e){const t=lv(e);for(const s of r.elements)t.some(o=>sr(o,s))||t.push(s);return{arrayValue:{values:t}}}class Ua extends dc{constructor(e){super(),this.elements=e}}function av(r,e){let t=lv(e);for(const s of r.elements)t=t.filter(o=>!sr(o,s));return{arrayValue:{values:t}}}class Ju extends dc{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function bg(r){return At(r.integerValue||r.doubleValue)}function lv(r){return af(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function kR(r,e){return r.field.isEqual(e.field)&&function(s,o){return s instanceof Fa&&o instanceof Fa||s instanceof Ua&&o instanceof Ua?fo(s.elements,o.elements,sr):s instanceof Ju&&o instanceof Ju?sr(s.Pe,o.Pe):s instanceof Yu&&o instanceof Yu}(r.transform,e.transform)}class PR{constructor(e,t){this.version=e,this.transformResults=t}}class Nr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Nr}static exists(e){return new Nr(void 0,e)}static updateTime(e){return new Nr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function xu(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class fc{}function uv(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new hv(r.key,Nr.none()):new Xa(r.key,r.data,Nr.none());{const t=r.data,s=bn.empty();let o=new kt(Rt.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new ds(r.key,s,new Fn(o.toArray()),Nr.none())}}function NR(r,e,t){r instanceof Xa?function(o,u,h){const p=o.value.clone(),g=Ug(o.fieldTransforms,u,h.transformResults);p.setAll(g),u.convertToFoundDocument(h.version,p).setHasCommittedMutations()}(r,e,t):r instanceof ds?function(o,u,h){if(!xu(o.precondition,u))return void u.convertToUnknownDocument(h.version);const p=Ug(o.fieldTransforms,u,h.transformResults),g=u.data;g.setAll(cv(o)),g.setAll(p),u.convertToFoundDocument(h.version,g).setHasCommittedMutations()}(r,e,t):function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function Na(r,e,t,s){return r instanceof Xa?function(u,h,p,g){if(!xu(u.precondition,h))return p;const _=u.value.clone(),E=jg(u.fieldTransforms,g,h);return _.setAll(E),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null}(r,e,t,s):r instanceof ds?function(u,h,p,g){if(!xu(u.precondition,h))return p;const _=jg(u.fieldTransforms,g,h),E=h.data;return E.setAll(cv(u)),E.setAll(_),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),p===null?null:p.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(S=>S.field))}(r,e,t,s):function(u,h,p){return xu(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):p}(r,e,t)}function xR(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),u=sv(s.transform,o||null);u!=null&&(t===null&&(t=bn.empty()),t.set(s.field,u))}return t||null}function Fg(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&fo(s,o,(u,h)=>kR(u,h))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Xa extends fc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class ds extends fc{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function cv(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}}),e}function Ug(r,e,t){const s=new Map;tt(r.length===t.length);for(let o=0;o<t.length;o++){const u=r[o],h=u.transform,p=e.data.field(u.field);s.set(u.field,RR(h,p,t[o]))}return s}function jg(r,e,t){const s=new Map;for(const o of r){const u=o.transform,h=t.data.field(o.field);s.set(o.field,AR(u,h,e))}return s}class hv extends fc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class DR extends fc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&NR(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Na(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Na(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=rv();return this.mutations.forEach(o=>{const u=e.get(o.key),h=u.overlayedDocument;let p=this.applyToLocalView(h,u.mutatedFields);p=t.has(o.key)?null:p;const g=uv(h,p);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(Qe.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),bt())}isEqual(e){return this.batchId===e.batchId&&fo(this.mutations,e.mutations,(t,s)=>Fg(t,s))&&fo(this.baseMutations,e.baseMutations,(t,s)=>Fg(t,s))}}class df{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){tt(e.mutations.length===s.length);let o=function(){return ER}();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new df(e,t,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var at,De;function MR(r){switch(r){default:return ke();case Z.CANCELLED:case Z.UNKNOWN:case Z.DEADLINE_EXCEEDED:case Z.RESOURCE_EXHAUSTED:case Z.INTERNAL:case Z.UNAVAILABLE:case Z.UNAUTHENTICATED:return!1;case Z.INVALID_ARGUMENT:case Z.NOT_FOUND:case Z.ALREADY_EXISTS:case Z.PERMISSION_DENIED:case Z.FAILED_PRECONDITION:case Z.ABORTED:case Z.OUT_OF_RANGE:case Z.UNIMPLEMENTED:case Z.DATA_LOSS:return!0}}function VR(r){if(r===void 0)return ss("GRPC error has no .code"),Z.UNKNOWN;switch(r){case at.OK:return Z.OK;case at.CANCELLED:return Z.CANCELLED;case at.UNKNOWN:return Z.UNKNOWN;case at.DEADLINE_EXCEEDED:return Z.DEADLINE_EXCEEDED;case at.RESOURCE_EXHAUSTED:return Z.RESOURCE_EXHAUSTED;case at.INTERNAL:return Z.INTERNAL;case at.UNAVAILABLE:return Z.UNAVAILABLE;case at.UNAUTHENTICATED:return Z.UNAUTHENTICATED;case at.INVALID_ARGUMENT:return Z.INVALID_ARGUMENT;case at.NOT_FOUND:return Z.NOT_FOUND;case at.ALREADY_EXISTS:return Z.ALREADY_EXISTS;case at.PERMISSION_DENIED:return Z.PERMISSION_DENIED;case at.FAILED_PRECONDITION:return Z.FAILED_PRECONDITION;case at.ABORTED:return Z.ABORTED;case at.OUT_OF_RANGE:return Z.OUT_OF_RANGE;case at.UNIMPLEMENTED:return Z.UNIMPLEMENTED;case at.DATA_LOSS:return Z.DATA_LOSS;default:return ke()}}(De=at||(at={}))[De.OK=0]="OK",De[De.CANCELLED=1]="CANCELLED",De[De.UNKNOWN=2]="UNKNOWN",De[De.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",De[De.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",De[De.NOT_FOUND=5]="NOT_FOUND",De[De.ALREADY_EXISTS=6]="ALREADY_EXISTS",De[De.PERMISSION_DENIED=7]="PERMISSION_DENIED",De[De.UNAUTHENTICATED=16]="UNAUTHENTICATED",De[De.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",De[De.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",De[De.ABORTED=10]="ABORTED",De[De.OUT_OF_RANGE=11]="OUT_OF_RANGE",De[De.UNIMPLEMENTED=12]="UNIMPLEMENTED",De[De.INTERNAL=13]="INTERNAL",De[De.UNAVAILABLE=14]="UNAVAILABLE",De[De.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new b_([4294967295,4294967295],0);class bR{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function kd(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function FR(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function UR(r,e){return kd(r,e.toTimestamp())}function ho(r){return tt(!!r),Qe.fromTimestamp(function(t){const s=os(t);return new wt(s.seconds,s.nanos)}(r))}function dv(r,e){return Pd(r,e).canonicalString()}function Pd(r,e){const t=function(o){return new et(["projects",o.projectId,"databases",o.database])}(r).child("documents");return e===void 0?t:t.child(e)}function jR(r){const e=et.fromString(r);return tt(GR(e)),e}function Nd(r,e){return dv(r.databaseId,e.path)}function BR(r){const e=jR(r);return e.length===4?et.emptyPath():zR(e)}function $R(r){return new et(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function zR(r){return tt(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function Bg(r,e,t){return{name:Nd(r,e),fields:t.value.mapValue.fields}}function HR(r,e){let t;if(e instanceof Xa)t={update:Bg(r,e.key,e.value)};else if(e instanceof hv)t={delete:Nd(r,e.key)};else if(e instanceof ds)t={update:Bg(r,e.key,e.data),updateMask:KR(e.fieldMask)};else{if(!(e instanceof DR))return ke();t={verify:Nd(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(u,h){const p=h.transform;if(p instanceof Yu)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof Fa)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof Ua)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof Ju)return{fieldPath:h.field.canonicalString(),increment:p.Pe};throw ke()}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:UR(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:ke()}(r,e.precondition)),t}function WR(r,e){return r&&r.length>0?(tt(e!==void 0),r.map(t=>function(o,u){let h=o.updateTime?ho(o.updateTime):ho(u);return h.isEqual(Qe.min())&&(h=ho(u)),new PR(h,o.transformResults||[])}(t,e))):[]}function qR(r){let e=BR(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){tt(s===1);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let u=[];t.where&&(u=function(S){const R=fv(S);return R instanceof _i&&Q_(R)?R.getFilters():[R]}(t.where));let h=[];t.orderBy&&(h=function(S){return S.map(R=>function(U){return new Qu(oo(U.field),function($){switch($){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(U.direction))}(R))}(t.orderBy));let p=null;t.limit&&(p=function(S){let R;return R=typeof S=="object"?S.value:S,rf(R)?null:R}(t.limit));let g=null;t.startAt&&(g=function(S){const R=!!S.before,F=S.values||[];return new Gu(F,R)}(t.startAt));let _=null;return t.endAt&&(_=function(S){const R=!S.before,F=S.values||[];return new Gu(F,R)}(t.endAt)),pR(e,o,h,u,p,"F",g,_)}function fv(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=oo(t.unaryFilter.field);return vt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=oo(t.unaryFilter.field);return vt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=oo(t.unaryFilter.field);return vt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=oo(t.unaryFilter.field);return vt.create(h,"!=",{nullValue:"NULL_VALUE"});default:return ke()}}(r):r.fieldFilter!==void 0?function(t){return vt.create(oo(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ke()}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return _i.create(t.compositeFilter.filters.map(s=>fv(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ke()}}(t.compositeFilter.op))}(r):ke()}function oo(r){return Rt.fromServerFormat(r.fieldPath)}function KR(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function GR(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(e){this.ht=e}}function XR(r){const e=qR({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Rd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{constructor(){this.ln=new JR}addToCollectionParentIndex(e,t){return this.ln.add(t),K.resolve()}getCollectionParents(e,t){return K.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return K.resolve()}deleteFieldIndex(e,t){return K.resolve()}deleteAllFieldIndexes(e){return K.resolve()}createTargetIndexes(e,t){return K.resolve()}getDocumentsMatchingTarget(e,t){return K.resolve(null)}getIndexType(e,t){return K.resolve(0)}getFieldIndexes(e,t){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,t){return K.resolve(yi.min())}getMinOffsetFromCollectionGroup(e,t){return K.resolve(yi.min())}updateCollectionGroup(e,t,s){return K.resolve()}updateIndexEntries(e,t){return K.resolve()}}class JR{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new kt(et.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new kt(et.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Jt{static withCacheSize(e){return new Jt(e,Jt.DEFAULT_COLLECTION_PERCENTILE,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jt.DEFAULT_COLLECTION_PERCENTILE=10,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Jt.DEFAULT=new Jt(41943040,Jt.DEFAULT_COLLECTION_PERCENTILE,Jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Jt.DISABLED=new Jt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new yo(0)}static Qn(){return new yo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg([r,e],[t,s]){const o=Fe(r,t);return o===0?Fe(e,s):o}class ZR{constructor(e){this.Gn=e,this.buffer=new kt(zg),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();zg(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ek{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){ue("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Qa(t)?ue("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await tf(t)}await this.Yn(3e5)})}}class tk{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return K.resolve(nf.oe);const s=new ZR(t);return this.Zn.forEachTarget(e,o=>s.Hn(o.sequenceNumber)).next(()=>this.Zn.er(e,o=>s.Hn(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Zn.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ue("LruGarbageCollector","Garbage collection skipped; disabled"),K.resolve($g)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(ue("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),$g):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let s,o,u,h,p,g,_;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(S=>(S>this.params.maximumSequenceNumbersToCollect?(ue("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${S}`),o=this.params.maximumSequenceNumbersToCollect):o=S,h=Date.now(),this.nthSequenceNumber(e,o))).next(S=>(s=S,p=Date.now(),this.removeTargets(e,s,t))).next(S=>(u=S,g=Date.now(),this.removeOrphanedDocuments(e,s))).next(S=>(_=Date.now(),so()<=Re.DEBUG&&ue("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(p-h)+`ms
	Removed ${u} targets in `+(g-p)+`ms
	Removed ${S} documents in `+(_-g)+`ms
Total Duration: ${_-E}ms`),K.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:S})))}}function nk(r,e){return new tk(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(){this.changes=new hs(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Vn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?K.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&Na(s.mutation,o,Fn.empty(),wt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,bt()).next(()=>s))}getLocalViewOfDocuments(e,t,s=bt()){const o=Yi();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(u=>{let h=wu();return u.forEach((p,g)=>{h=h.insert(p,g.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=Yi();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,bt()))}populateOverlays(e,t,s){const o=[];return s.forEach(u=>{t.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((h,p)=>{t.set(h,p)})})}computeViews(e,t,s,o){let u=Xu();const h=Pa(),p=function(){return Pa()}();return t.forEach((g,_)=>{const E=s.get(_.key);o.has(_.key)&&(E===void 0||E.mutation instanceof ds)?u=u.insert(_.key,_):E!==void 0?(h.set(_.key,E.mutation.getFieldMask()),Na(E.mutation,_,E.mutation.getFieldMask(),wt.now())):h.set(_.key,Fn.empty())}),this.recalculateAndSaveOverlays(e,u).next(g=>(g.forEach((_,E)=>h.set(_,E)),t.forEach((_,E)=>{var S;return p.set(_,new ik(E,(S=h.get(_))!==null&&S!==void 0?S:null))}),p))}recalculateAndSaveOverlays(e,t){const s=Pa();let o=new en((h,p)=>h-p),u=bt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const p of h)p.keys().forEach(g=>{const _=t.get(g);if(_===null)return;let E=s.get(g)||Fn.empty();E=p.applyToLocalView(_,E),s.set(g,E);const S=(o.get(p.batchId)||bt()).add(g);o=o.insert(p.batchId,S)})}).next(()=>{const h=[],p=o.getReverseIterator();for(;p.hasNext();){const g=p.getNext(),_=g.key,E=g.value,S=rv();E.forEach(R=>{if(!u.has(R)){const F=uv(t.get(R),s.get(R));F!==null&&S.set(R,F),u=u.add(R)}}),h.push(this.documentOverlayCache.saveOverlays(e,_,S))}return K.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return we.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):gR(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):K.resolve(Yi());let p=-1,g=u;return h.next(_=>K.forEach(_,(E,S)=>(p<S.largestBatchId&&(p=S.largestBatchId),u.get(E)?K.resolve():this.remoteDocumentCache.getEntry(e,E).next(R=>{g=g.insert(E,R)}))).next(()=>this.populateOverlays(e,_,u)).next(()=>this.computeViews(e,g,_,bt())).next(E=>({batchId:p,changes:nv(E)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new we(t)).next(s=>{let o=wu();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=wu();return this.indexManager.getCollectionParents(e,u).next(p=>K.forEach(p,g=>{const _=function(S,R){return new hc(R,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)}(t,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next(E=>{E.forEach((S,R)=>{h=h.insert(S,R)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o))).next(h=>{u.forEach((g,_)=>{const E=_.getKey();h.get(E)===null&&(h=h.insert(E,Vn.newInvalidDocument(E)))});let p=wu();return h.forEach((g,_)=>{const E=u.get(g);E!==void 0&&Na(E.mutation,_,Fn.empty(),wt.now()),cf(t,_)&&(p=p.insert(g,_))}),p})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return K.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:ho(o.createTime)}}(t)),K.resolve()}getNamedQuery(e,t){return K.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(o){return{name:o.name,query:XR(o.bundledQuery),readTime:ho(o.readTime)}}(t)),K.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(){this.overlays=new en(we.comparator),this.Er=new Map}getOverlay(e,t){return K.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Yi();return K.forEach(t,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,u)=>{this.Tt(e,t,u)}),K.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Er.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.Er.delete(s)),K.resolve()}getOverlaysForCollection(e,t,s){const o=Yi(),u=t.length+1,h=new we(t.child("")),p=this.overlays.getIteratorFrom(h);for(;p.hasNext();){const g=p.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===u&&g.largestBatchId>s&&o.set(g.getKey(),g)}return K.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new en((_,E)=>_-E);const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let E=u.get(_.largestBatchId);E===null&&(E=Yi(),u=u.insert(_.largestBatchId,E)),E.set(_.getKey(),_)}}const p=Yi(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((_,E)=>p.set(_,E)),!(p.size()>=o)););return K.resolve(p)}Tt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Er.get(o.largestBatchId).delete(s.key);this.Er.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new OR(t,s));let u=this.Er.get(t);u===void 0&&(u=bt(),this.Er.set(t,u)),this.Er.set(t,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lk{constructor(){this.sessionToken=ir.EMPTY_BYTE_STRING}getSessionToken(e){return K.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,K.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(){this.dr=new kt(_t.Ar),this.Rr=new kt(_t.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const s=new _t(e,t);this.dr=this.dr.add(s),this.Rr=this.Rr.add(s)}mr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.gr(new _t(e,t))}pr(e,t){e.forEach(s=>this.removeReference(s,t))}yr(e){const t=new we(new et([])),s=new _t(t,e),o=new _t(t,e+1),u=[];return this.Rr.forEachInRange([s,o],h=>{this.gr(h),u.push(h.key)}),u}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new we(new et([])),s=new _t(t,e),o=new _t(t,e+1);let u=bt();return this.Rr.forEachInRange([s,o],h=>{u=u.add(h.key)}),u}containsKey(e){const t=new _t(e,0),s=this.dr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class _t{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return we.comparator(e.key,t.key)||Fe(e.br,t.br)}static Vr(e,t){return Fe(e.br,t.br)||we.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new kt(_t.Ar)}checkEmpty(e){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new LR(u,t,s,o);this.mutationQueue.push(h);for(const p of o)this.vr=this.vr.add(new _t(p.key,u)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return K.resolve(h)}lookupMutationBatch(e,t){return K.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Fr(s),u=o<0?0:o;return K.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new _t(t,0),o=new _t(t,Number.POSITIVE_INFINITY),u=[];return this.vr.forEachInRange([s,o],h=>{const p=this.Cr(h.br);u.push(p)}),K.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new kt(Fe);return t.forEach(o=>{const u=new _t(o,0),h=new _t(o,Number.POSITIVE_INFINITY);this.vr.forEachInRange([u,h],p=>{s=s.add(p.br)})}),K.resolve(this.Mr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;we.isDocumentKey(u)||(u=u.child(""));const h=new _t(new we(u),0);let p=new kt(Fe);return this.vr.forEachWhile(g=>{const _=g.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(p=p.add(g.br)),!0)},h),K.resolve(this.Mr(p))}Mr(e){const t=[];return e.forEach(s=>{const o=this.Cr(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){tt(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.vr;return K.forEach(t.mutations,o=>{const u=new _t(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.vr=s})}Ln(e){}containsKey(e,t){const s=new _t(t,0),o=this.vr.firstAfterOrEqual(s);return K.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(e){this.Nr=e,this.docs=function(){return new en(we.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.Nr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return K.resolve(s?s.document.mutableCopy():Vn.newInvalidDocument(t))}getEntries(e,t){let s=Xu();return t.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Vn.newInvalidDocument(o))}),K.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Xu();const h=t.path,p=new we(h.child("")),g=this.docs.getIteratorFrom(p);for(;g.hasNext();){const{key:_,value:{document:E}}=g.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||qA(WA(E),s)<=0||(o.has(E.key)||cf(t,E))&&(u=u.insert(E.key,E.mutableCopy()))}return K.resolve(u)}getAllFromCollectionGroup(e,t,s,o){ke()}Lr(e,t){return K.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new hk(this)}getSize(e){return K.resolve(this.size)}}class hk extends rk{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.hr.addEntry(e,o)):this.hr.removeEntry(s)}),K.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(e){this.persistence=e,this.Br=new hs(t=>lf(t),uf),this.lastRemoteSnapshotVersion=Qe.min(),this.highestTargetId=0,this.kr=0,this.qr=new ff,this.targetCount=0,this.Qr=yo.qn()}forEachTarget(e,t){return this.Br.forEach((s,o)=>t(o)),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.kr&&(this.kr=t),K.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new yo(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,K.resolve()}updateTargetData(e,t){return this.Un(t),K.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.Br.forEach((h,p)=>{p.sequenceNumber<=t&&s.get(p.targetId)===null&&(this.Br.delete(h),u.push(this.removeMatchingKeysForTargetId(e,p.targetId)),o++)}),K.waitFor(u).next(()=>o)}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,t){const s=this.Br.get(t)||null;return K.resolve(s)}addMatchingKeys(e,t,s){return this.qr.mr(t,s),K.resolve()}removeMatchingKeys(e,t,s){this.qr.pr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach(h=>{u.push(o.markPotentiallyOrphaned(e,h))}),K.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),K.resolve()}getMatchingKeysForTargetId(e,t){const s=this.qr.Sr(t);return K.resolve(s)}containsKey(e,t){return K.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(e,t){this.Kr={},this.overlays={},this.$r=new nf(0),this.Ur=!1,this.Ur=!0,this.Wr=new lk,this.referenceDelegate=e(this),this.Gr=new dk(this),this.indexManager=new YR,this.remoteDocumentCache=function(o){return new ck(o)}(s=>this.referenceDelegate.zr(s)),this.serializer=new QR(t),this.jr=new ok(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ak,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Kr[e.toKey()];return s||(s=new uk(t,this.referenceDelegate),this.Kr[e.toKey()]=s),s}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,s){ue("MemoryPersistence","Starting transaction:",e);const o=new fk(this.$r.next());return this.referenceDelegate.Hr(),s(o).next(u=>this.referenceDelegate.Jr(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Yr(e,t){return K.or(Object.values(this.Kr).map(s=>()=>s.containsKey(e,t)))}}class fk extends GA{constructor(e){super(),this.currentSequenceNumber=e}}class pf{constructor(e){this.persistence=e,this.Zr=new ff,this.Xr=null}static ei(e){return new pf(e)}get ti(){if(this.Xr)return this.Xr;throw ke()}addReference(e,t,s){return this.Zr.addReference(s,t),this.ti.delete(s.toString()),K.resolve()}removeReference(e,t,s){return this.Zr.removeReference(s,t),this.ti.add(s.toString()),K.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),K.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(o=>this.ti.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(u=>this.ti.add(u.toString()))}).next(()=>s.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.ti,s=>{const o=we.fromPath(s);return this.ni(e,o).next(u=>{u||t.removeEntry(o,Qe.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(s=>{s?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return K.or([()=>K.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class Zu{constructor(e,t){this.persistence=e,this.ri=new hs(s=>YA(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=nk(this,t)}static ei(e,t){return new Zu(e,t)}Hr(){}Jr(e){return K.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}nr(e){let t=0;return this.er(e,s=>{t++}).next(()=>t)}er(e,t){return K.forEach(this.ri,(s,o)=>this.ir(e,s,o).next(u=>u?K.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.Lr(e,h=>this.ir(e,h,t).next(p=>{p||(s++,u.removeEntry(h,Qe.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),K.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),K.resolve()}removeReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),K.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),K.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Pu(e.data.value)),t}ir(e,t,s){return K.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.ri.get(t);return K.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Wi=s,this.Gi=o}static zi(e,t){let s=bt(),o=bt();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new mf(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return LT()?8:QA(Ft())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.Xi(e,t).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.es(e,t,o,s).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new pk;return this.ts(e,t,h).next(p=>{if(u.result=p,this.Hi)return this.ns(e,t,h,p.size)})}).next(()=>u.result)}ns(e,t,s,o){return s.documentReadCount<this.Ji?(so()<=Re.DEBUG&&ue("QueryEngine","SDK will not create cache indexes for query:",Ea(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),K.resolve()):(so()<=Re.DEBUG&&ue("QueryEngine","Query:",Ea(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.Yi*o?(so()<=Re.DEBUG&&ue("QueryEngine","The SDK decides to create cache indexes for query:",Ea(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Zi(t))):K.resolve())}Xi(e,t){if(Vg(t))return K.resolve(null);let s=Zi(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=Rd(t,null,"F"),s=Zi(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const h=bt(...u);return this.Zi.getDocuments(e,h).next(p=>this.indexManager.getMinOffset(e,s).next(g=>{const _=this.rs(t,p);return this.ss(t,_,h,g.readTime)?this.Xi(e,Rd(t,null,"F")):this.os(e,_,t,g)}))})))}es(e,t,s,o){return Vg(t)||o.isEqual(Qe.min())?K.resolve(null):this.Zi.getDocuments(e,s).next(u=>{const h=this.rs(t,u);return this.ss(t,h,s,o)?K.resolve(null):(so()<=Re.DEBUG&&ue("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Ea(t)),this.os(e,h,t,HA(o,-1)).next(p=>p))})}rs(e,t){let s=new kt(_R(e));return t.forEach((o,u)=>{cf(e,u)&&(s=s.add(u))}),s}ss(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ts(e,t,s){return so()<=Re.DEBUG&&ue("QueryEngine","Using full collection scan to execute query:",Ea(t)),this.Zi.getDocumentsMatchingQuery(e,t,yi.min(),s)}os(e,t,s,o){return this.Zi.getDocumentsMatchingQuery(e,s,o).next(u=>(t.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(e,t,s,o){this.persistence=e,this._s=t,this.serializer=o,this.us=new en(Fe),this.cs=new hs(u=>lf(u),uf),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(s)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sk(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function yk(r,e,t,s){return new gk(r,e,t,s)}async function mv(r,e){const t=He(r);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,t.Ps(e),t.mutationQueue.getAllMutationBatches(s))).next(u=>{const h=[],p=[];let g=bt();for(const _ of o){h.push(_.batchId);for(const E of _.mutations)g=g.add(E.key)}for(const _ of u){p.push(_.batchId);for(const E of _.mutations)g=g.add(E.key)}return t.localDocuments.getDocuments(s,g).next(_=>({Ts:_,removedBatchIds:h,addedBatchIds:p}))})})}function _k(r,e){const t=He(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=t.hs.newChangeBuffer({trackRemovals:!0});return function(p,g,_,E){const S=_.batch,R=S.keys();let F=K.resolve();return R.forEach(U=>{F=F.next(()=>E.getEntry(g,U)).next(j=>{const $=_.docVersions.get(U);tt($!==null),j.version.compareTo($)<0&&(S.applyToRemoteDocument(j,_),j.isValidDocument()&&(j.setReadTime(_.commitVersion),E.addEntry(j)))})}),F.next(()=>p.mutationQueue.removeMutationBatch(g,S))}(t,s,e,u).next(()=>u.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(p){let g=bt();for(let _=0;_<p.mutationResults.length;++_)p.mutationResults[_].transformResults.length>0&&(g=g.add(p.batch.mutations[_].key));return g}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function vk(r){const e=He(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function wk(r,e){const t=He(r);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}class Hg{constructor(){this.activeTargetIds=SR()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ek{constructor(){this._o=new Hg,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,s){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Hg,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){ue("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){ue("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eu=null;function ld(){return Eu===null?Eu=function(){return 268435456+Math.round(2147483648*Math.random())}():Eu++,"0x"+Eu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ik={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt="WebChannelConnection";class Ck extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const s=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),u=encodeURIComponent(this.databaseId.database);this.Fo=s+"://"+t.host,this.Mo=`projects/${o}/databases/${u}`,this.xo=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${u}`}Oo(t,s,o,u,h){const p=ld(),g=this.No(t,s.toUriEncodedString());ue("RestConnection",`Sending RPC '${t}' ${p}:`,g,o);const _={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(_,u,h),this.Bo(t,g,_,o).then(E=>(ue("RestConnection",`Received RPC '${t}' ${p}: `,E),E),E=>{throw Hu("RestConnection",`RPC '${t}' ${p} failed with error: `,E,"url: ",g,"request:",o),E})}ko(t,s,o,u,h,p){return this.Oo(t,s,o,u,h)}Lo(t,s,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+To}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((u,h)=>t[h]=u),o&&o.headers.forEach((u,h)=>t[h]=u)}No(t,s){const o=Ik[t];return`${this.Fo}/v1/${s}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,s,o){const u=ld();return new Promise((h,p)=>{const g=new F_;g.setWithCredentials(!0),g.listenOnce(U_.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case ku.NO_ERROR:const E=g.getResponseJson();ue(Mt,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(E)),h(E);break;case ku.TIMEOUT:ue(Mt,`RPC '${e}' ${u} timed out`),p(new ye(Z.DEADLINE_EXCEEDED,"Request time out"));break;case ku.HTTP_ERROR:const S=g.getStatus();if(ue(Mt,`RPC '${e}' ${u} failed with status:`,S,"response text:",g.getResponseText()),S>0){let R=g.getResponseJson();Array.isArray(R)&&(R=R[0]);const F=R==null?void 0:R.error;if(F&&F.status&&F.message){const U=function($){const G=$.toLowerCase().replace(/_/g,"-");return Object.values(Z).indexOf(G)>=0?G:Z.UNKNOWN}(F.status);p(new ye(U,F.message))}else p(new ye(Z.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new ye(Z.UNAVAILABLE,"Connection failed."));break;default:ke()}}finally{ue(Mt,`RPC '${e}' ${u} completed.`)}});const _=JSON.stringify(o);ue(Mt,`RPC '${e}' ${u} sending request:`,o),g.send(t,"POST",_,s,15)})}qo(e,t,s){const o=ld(),u=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=$_(),p=B_(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(g.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(g.useFetchStreams=!0),this.Lo(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const E=u.join("");ue(Mt,`Creating RPC '${e}' stream ${o}: ${E}`,g);const S=h.createWebChannel(E,g);let R=!1,F=!1;const U=new Sk({Eo:$=>{F?ue(Mt,`Not sending because RPC '${e}' stream ${o} is closed:`,$):(R||(ue(Mt,`Opening RPC '${e}' stream ${o} transport.`),S.open(),R=!0),ue(Mt,`RPC '${e}' stream ${o} sending:`,$),S.send($))},Ao:()=>S.close()}),j=($,G,J)=>{$.listen(G,ie=>{try{J(ie)}catch(de){setTimeout(()=>{throw de},0)}})};return j(S,Sa.EventType.OPEN,()=>{F||(ue(Mt,`RPC '${e}' stream ${o} transport opened.`),U.So())}),j(S,Sa.EventType.CLOSE,()=>{F||(F=!0,ue(Mt,`RPC '${e}' stream ${o} transport closed`),U.Do())}),j(S,Sa.EventType.ERROR,$=>{F||(F=!0,Hu(Mt,`RPC '${e}' stream ${o} transport errored:`,$),U.Do(new ye(Z.UNAVAILABLE,"The operation could not be completed")))}),j(S,Sa.EventType.MESSAGE,$=>{var G;if(!F){const J=$.data[0];tt(!!J);const ie=J,de=(ie==null?void 0:ie.error)||((G=ie[0])===null||G===void 0?void 0:G.error);if(de){ue(Mt,`RPC '${e}' stream ${o} received error:`,de);const Ce=de.status;let ve=function(C){const P=at[C];if(P!==void 0)return VR(P)}(Ce),N=de.message;ve===void 0&&(ve=Z.INTERNAL,N="Unknown error status: "+Ce+" with message "+de.message),F=!0,U.Do(new ye(ve,N)),S.close()}else ue(Mt,`RPC '${e}' stream ${o} received:`,J),U.vo(J)}}),j(p,j_.STAT_EVENT,$=>{$.stat===Id.PROXY?ue(Mt,`RPC '${e}' stream ${o} detected buffering proxy`):$.stat===Id.NOPROXY&&ue(Mt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{U.bo()},0),U}}function ud(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(r){return new bR(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e,t,s=1e3,o=1.5,u=6e4){this.li=e,this.timerId=t,this.Qo=s,this.Ko=o,this.$o=u,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),s=Math.max(0,Date.now()-this.Go),o=Math.max(0,t-s);o>0&&ue("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,o,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(e,t,s,o,u,h,p,g){this.li=e,this.Yo=s,this.Zo=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=p,this.listener=g,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new gv(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===Z.RESOURCE_EXHAUSTED?(ss(t.toString()),ss("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===Z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.Xo===t&&this.I_(s,o)},s=>{e(()=>{const o=new ye(Z.UNKNOWN,"Fetching auth token failed: "+s.message);return this.E_(o)})})}I_(e,t){const s=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{s(()=>this.listener.Ro())}),this.stream.mo(()=>{s(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(o=>{s(()=>this.E_(o))}),this.stream.onMessage(o=>{s(()=>++this.n_==1?this.A_(o):this.onNext(o))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return ue("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(ue("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Rk extends Ak{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return tt(!!e.streamToken),this.lastStreamToken=e.streamToken,tt(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){tt(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=WR(e.writeResults,e.commitTime),s=ho(e.commitTime);return this.listener.y_(s,t)}w_(){const e={};e.database=$R(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>HR(this.serializer,s))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk extends class{}{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.S_=!1}b_(){if(this.S_)throw new ye(Z.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,s,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.Oo(e,Pd(t,s),o,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ye(Z.UNKNOWN,u.toString())})}ko(e,t,s,o,u){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,p])=>this.connection.ko(e,Pd(t,s),o,h,p,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ye(Z.UNKNOWN,h.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class Pk{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(ss(t),this.C_=!1):ue("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nk{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=u,this.Q_.uo(h=>{s.enqueueAndForget(async()=>{Ja(this)&&(ue("RemoteStore","Restarting streams for network reachability change."),await async function(g){const _=He(g);_.k_.add(4),await Ya(_),_.K_.set("Unknown"),_.k_.delete(4),await mc(_)}(this))})}),this.K_=new Pk(s,o)}}async function mc(r){if(Ja(r))for(const e of r.q_)await e(!0)}async function Ya(r){for(const e of r.q_)await e(!1)}function Ja(r){return He(r).k_.size===0}async function yv(r,e,t){if(!Qa(e))throw e;r.k_.add(1),await Ya(r),r.K_.set("Offline"),t||(t=()=>vk(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{ue("RemoteStore","Retrying IndexedDB access"),await t(),r.k_.delete(1),await mc(r)})}function _v(r,e){return e().catch(t=>yv(r,t,e))}async function gc(r){const e=He(r),t=vi(e);let s=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;xk(e);)try{const o=await wk(e.localStore,s);if(o===null){e.L_.length===0&&t.a_();break}s=o.batchId,Dk(e,o)}catch(o){await yv(e,o)}vv(e)&&wv(e)}function xk(r){return Ja(r)&&r.L_.length<10}function Dk(r,e){r.L_.push(e);const t=vi(r);t.s_()&&t.f_&&t.g_(e.mutations)}function vv(r){return Ja(r)&&!vi(r).i_()&&r.L_.length>0}function wv(r){vi(r).start()}async function Lk(r){vi(r).w_()}async function Ok(r){const e=vi(r);for(const t of r.L_)e.g_(t.mutations)}async function Mk(r,e,t){const s=r.L_.shift(),o=df.from(s,e,t);await _v(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await gc(r)}async function Vk(r,e){e&&vi(r).f_&&await async function(s,o){if(function(h){return MR(h)&&h!==Z.ABORTED}(o.code)){const u=s.L_.shift();vi(s).__(),await _v(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await gc(s)}}(r,e),vv(r)&&wv(r)}async function qg(r,e){const t=He(r);t.asyncQueue.verifyOperationInProgress(),ue("RemoteStore","RemoteStore received new credentials");const s=Ja(t);t.k_.add(3),await Ya(t),s&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await mc(t)}async function bk(r,e){const t=He(r);e?(t.k_.delete(2),await mc(t)):e||(t.k_.add(2),await Ya(t),t.K_.set("Unknown"))}function vi(r){return r.G_||(r.G_=function(t,s,o){const u=He(t);return u.b_(),new Rk(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{Ro:()=>Promise.resolve(),mo:Lk.bind(null,r),po:Vk.bind(null,r),p_:Ok.bind(null,r),y_:Mk.bind(null,r)}),r.q_.push(async e=>{e?(r.G_.__(),await gc(r)):(await r.G_.stop(),r.L_.length>0&&(ue("RemoteStore",`Stopping write stream with ${r.L_.length} pending writes`),r.L_=[]))})),r.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Ji,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,p=new gf(e,t,h,o,u);return p.start(s),p}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ye(Z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ev(r,e){if(ss("AsyncQueue",`${e}: ${r}`),Qa(r))return new ye(Z.UNAVAILABLE,`${e}: ${r}`);throw r}class Fk{constructor(){this.queries=Kg(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,s){const o=He(t),u=o.queries;o.queries=Kg(),u.forEach((h,p)=>{for(const g of p.J_)g.onError(s)})})(this,new ye(Z.ABORTED,"Firestore shutting down"))}}function Kg(){return new hs(r=>ev(r),Z_)}function Uk(r){r.X_.forEach(e=>{e.next()})}var Gg,Qg;(Qg=Gg||(Gg={})).na="default",Qg.Cache="cache";class jk{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Ma={},this.xa=new hs(p=>ev(p),Z_),this.Oa=new Map,this.Na=new Set,this.La=new en(we.comparator),this.Ba=new Map,this.ka=new ff,this.qa={},this.Qa=new Map,this.Ka=yo.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function Bk(r,e,t){const s=Wk(r);try{const o=await function(h,p){const g=He(h),_=wt.now(),E=p.reduce((F,U)=>F.add(U.key),bt());let S,R;return g.persistence.runTransaction("Locally write mutations","readwrite",F=>{let U=Xu(),j=bt();return g.hs.getEntries(F,E).next($=>{U=$,U.forEach((G,J)=>{J.isValidDocument()||(j=j.add(G))})}).next(()=>g.localDocuments.getOverlayedDocuments(F,U)).next($=>{S=$;const G=[];for(const J of p){const ie=xR(J,S.get(J.key).overlayedDocument);ie!=null&&G.push(new ds(J.key,ie,q_(ie.value.mapValue),Nr.exists(!0)))}return g.mutationQueue.addMutationBatch(F,_,G,p)}).next($=>{R=$;const G=$.applyToLocalDocumentSet(S,j);return g.documentOverlayCache.saveOverlays(F,$.batchId,G)})}).then(()=>({batchId:R.batchId,changes:nv(S)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,p,g){let _=h.qa[h.currentUser.toKey()];_||(_=new en(Fe)),_=_.insert(p,g),h.qa[h.currentUser.toKey()]=_}(s,o.batchId,t),await yc(s,o.changes),await gc(s.remoteStore)}catch(o){const u=Ev(o,"Failed to persist write");t.reject(u)}}function Xg(r,e,t){const s=He(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.xa.forEach((u,h)=>{const p=h.view.ea(e);p.snapshot&&o.push(p.snapshot)}),function(h,p){const g=He(h);g.onlineState=p;let _=!1;g.queries.forEach((E,S)=>{for(const R of S.J_)R.ea(p)&&(_=!0)}),_&&Uk(g)}(s.eventManager,e),o.length&&s.Ma.R_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function $k(r,e){const t=He(r),s=e.batch.batchId;try{const o=await _k(t.localStore,e);Iv(t,s,null),Tv(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await yc(t,o)}catch(o){await tf(o)}}async function zk(r,e,t){const s=He(r);try{const o=await function(h,p){const g=He(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",_=>{let E;return g.mutationQueue.lookupMutationBatch(_,p).next(S=>(tt(S!==null),E=S.keys(),g.mutationQueue.removeMutationBatch(_,S))).next(()=>g.mutationQueue.performConsistencyCheck(_)).next(()=>g.documentOverlayCache.removeOverlaysForBatchId(_,E,p)).next(()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,E)).next(()=>g.localDocuments.getDocuments(_,E))})}(s.localStore,e);Iv(s,e,t),Tv(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await yc(s,o)}catch(o){await tf(o)}}function Tv(r,e){(r.Qa.get(e)||[]).forEach(t=>{t.resolve()}),r.Qa.delete(e)}function Iv(r,e,t){const s=He(r);let o=s.qa[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.qa[s.currentUser.toKey()]=o}}async function yc(r,e,t){const s=He(r),o=[],u=[],h=[];s.xa.isEmpty()||(s.xa.forEach((p,g)=>{h.push(s.Ua(g,e,t).then(_=>{var E;if((_||t)&&s.isPrimaryClient){const S=_?!_.fromCache:(E=void 0)===null||E===void 0?void 0:E.current;s.sharedClientState.updateQueryState(g.targetId,S?"current":"not-current")}if(_){o.push(_);const S=mf.zi(g.targetId,_);u.push(S)}}))}),await Promise.all(h),s.Ma.R_(o),await async function(g,_){const E=He(g);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",S=>K.forEach(_,R=>K.forEach(R.Wi,F=>E.persistence.referenceDelegate.addReference(S,R.targetId,F)).next(()=>K.forEach(R.Gi,F=>E.persistence.referenceDelegate.removeReference(S,R.targetId,F)))))}catch(S){if(!Qa(S))throw S;ue("LocalStore","Failed to update sequence numbers: "+S)}for(const S of _){const R=S.targetId;if(!S.fromCache){const F=E.us.get(R),U=F.snapshotVersion,j=F.withLastLimboFreeSnapshotVersion(U);E.us=E.us.insert(R,j)}}}(s.localStore,u))}async function Hk(r,e){const t=He(r);if(!t.currentUser.isEqual(e)){ue("SyncEngine","User change. New user:",e.toKey());const s=await mv(t.localStore,e);t.currentUser=e,function(u,h){u.Qa.forEach(p=>{p.forEach(g=>{g.reject(new ye(Z.CANCELLED,h))})}),u.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await yc(t,s.Ts)}}function Wk(r){const e=He(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=$k.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zk.bind(null,e),e}class ec{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=pc(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return yk(this.persistence,new mk,e.initialUser,this.serializer)}ja(e){return new pv(pf.ei,this.serializer)}za(e){return new Ek}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ec.provider={build:()=>new ec};class qk extends ec{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){tt(this.persistence.referenceDelegate instanceof Zu);const s=this.persistence.referenceDelegate.garbageCollector;return new ek(s,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?Jt.withCacheSize(this.cacheSizeBytes):Jt.DEFAULT;return new pv(s=>Zu.ei(s,t),this.serializer)}}class xd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Xg(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Hk.bind(null,this.syncEngine),await bk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Fk}()}createDatastore(e){const t=pc(e.databaseInfo.databaseId),s=function(u){return new Ck(u)}(e.databaseInfo);return function(u,h,p,g){return new kk(u,h,p,g)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,u,h,p){return new Nk(s,o,u,h,p)}(this.localStore,this.datastore,e.asyncQueue,t=>Xg(this.syncEngine,t,0),function(){return Wg.p()?new Wg:new Tk}())}createSyncEngine(e,t){return function(o,u,h,p,g,_,E){const S=new jk(o,u,h,p,g,_);return E&&(S.$a=!0),S}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const u=He(o);ue("RemoteStore","RemoteStore shutting down."),u.k_.add(5),await Ya(u),u.Q_.shutdown(),u.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}xd.provider={build:()=>new xd};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Vt.UNAUTHENTICATED,this.clientId=H_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async h=>{ue("FirestoreClient","Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(ue("FirestoreClient","Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ji;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Ev(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function cd(r,e){r.asyncQueue.verifyOperationInProgress(),ue("FirestoreClient","Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await mv(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function Yg(r,e){r.asyncQueue.verifyOperationInProgress();const t=await Gk(r);ue("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(s=>qg(e.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>qg(e.remoteStore,o)),r._onlineComponents=e}async function Gk(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ue("FirestoreClient","Using user provided OfflineComponentProvider");try{await cd(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===Z.FAILED_PRECONDITION||o.code===Z.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;Hu("Error using user provided cache. Falling back to memory cache: "+t),await cd(r,new ec)}}else ue("FirestoreClient","Using default OfflineComponentProvider"),await cd(r,new qk(void 0));return r._offlineComponents}async function Qk(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ue("FirestoreClient","Using user provided OnlineComponentProvider"),await Yg(r,r._uninitializedComponentsProvider._online)):(ue("FirestoreClient","Using default OnlineComponentProvider"),await Yg(r,new xd))),r._onlineComponents}function Xk(r){return Qk(r).then(e=>e.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sv(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cv(r,e,t){if(!t)throw new ye(Z.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function Yk(r,e,t,s){if(e===!0&&s===!0)throw new ye(Z.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Zg(r){if(!we.isDocumentKey(r))throw new ye(Z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function ey(r){if(we.isDocumentKey(r))throw new ye(Z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function yf(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":ke()}function Av(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ye(Z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=yf(r);throw new ye(Z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ye(Z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ye(Z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Yk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Sv((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new ye(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new ye(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new ye(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class _c{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ty({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ye(Z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ye(Z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ty(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new MA;switch(s.type){case"firstParty":return new UA(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ye(Z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=Jg.get(t);s&&(ue("ComponentProvider","Removing Datastore"),Jg.delete(t),s.terminate())}(this),Promise.resolve()}}function Jk(r,e,t,s={}){var o;const u=(r=Av(r,_c))._getSettings(),h=`${e}:${t}`;if(u.host!=="firestore.googleapis.com"&&u.host!==h&&Hu("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},u),{host:h,ssl:!1})),s.mockUserToken){let p,g;if(typeof s.mockUserToken=="string")p=s.mockUserToken,g=Vt.MOCK_USER;else{p=RT(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const _=s.mockUserToken.sub||s.mockUserToken.user_id;if(!_)throw new ye(Z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Vt(_)}r._authCredentials=new VA(new z_(p,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new _f(this.firestore,e,this._query)}}class xr{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xr(this.firestore,e,this._key)}}class mi extends _f{constructor(e,t,s){super(e,t,mR(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xr(this.firestore,null,new we(e))}withConverter(e){return new mi(this.firestore,e,this._path)}}function Zk(r,e,...t){if(r=zt(r),Cv("collection","path",e),r instanceof _c){const s=et.fromString(e,...t);return ey(s),new mi(r,null,s)}{if(!(r instanceof xr||r instanceof mi))throw new ye(Z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(et.fromString(e,...t));return ey(s),new mi(r.firestore,null,s)}}function eP(r,e,...t){if(r=zt(r),arguments.length===1&&(e=H_.newId()),Cv("doc","path",e),r instanceof _c){const s=et.fromString(e,...t);return Zg(s),new xr(r,null,new we(s))}{if(!(r instanceof xr||r instanceof mi))throw new ye(Z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(et.fromString(e,...t));return Zg(s),new xr(r.firestore,r instanceof mi?r.converter:null,new we(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new gv(this,"async_queue_retry"),this.fu=()=>{const s=ud();s&&ue("AsyncQueue","Visibility state changed to "+s.visibilityState),this.r_.Jo()},this.gu=e;const t=ud();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=ud();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new Ji;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Qa(e))throw e;ue("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(s=>{this.Au=s,this.Ru=!1;const o=function(h){let p=h.message||"";return h.stack&&(p=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),p}(s);throw ss("INTERNAL UNHANDLED ERROR: ",o),s}).then(s=>(this.Ru=!1,s))));return this.gu=t,t}enqueueAfterDelay(e,t,s){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const o=gf.createAndSchedule(this,e,t,s,u=>this.Su(u));return this.du.push(o),o}pu(){this.Au&&ke()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}class Rv extends _c{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new ny,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ny(e),this._firestoreClient=void 0,await e}}}function tP(r,e){const t=typeof r=="object"?r:Ud(),s=typeof r=="string"?r:"(default)",o=cs(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=CT("firestore");u&&Jk(o,...u)}return o}function nP(r){if(r._terminated)throw new ye(Z.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||rP(r),r._firestoreClient}function rP(r){var e,t,s;const o=r._freezeSettings(),u=function(p,g,_,E){return new tR(p,g,_,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,Sv(E.experimentalLongPollingOptions),E.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new Kk(r._authCredentials,r._appCheckCredentials,r._queue,u,r._componentsProvider&&function(p){const g=p==null?void 0:p._online.build();return{_offline:p==null?void 0:p._offline.build(g),_online:g}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ja(ir.fromBase64String(e))}catch(t){throw new ye(Z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ja(ir.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ye(Z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ye(Z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ye(Z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Fe(this._lat,e._lat)||Fe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iP=/^__.*__$/;class sP{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new ds(e,this.data,this.fieldMask,t,this.fieldTransforms):new Xa(e,this.data,t,this.fieldTransforms)}}function Dv(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ke()}}class vf{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Fu(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new vf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:s,Nu:!1});return o.Lu(e),o}Bu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:s,Nu:!1});return o.Fu(),o}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return tc(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(Dv(this.Mu)&&iP.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class oP{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||pc(e)}$u(e,t,s,o=!1){return new vf({Mu:e,methodName:t,Ku:s,path:Rt.emptyPath(),Nu:!1,Qu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function aP(r){const e=r._freezeSettings(),t=pc(r._databaseId);return new oP(r._databaseId,!!e.ignoreUndefinedProperties,t)}function lP(r,e,t,s,o,u={}){const h=r.$u(u.merge||u.mergeFields?2:0,e,t,o);Vv("Data must be an object, but it was:",h,s);const p=Ov(s,h);let g,_;if(u.merge)g=new Fn(h.fieldMask),_=h.fieldTransforms;else if(u.mergeFields){const E=[];for(const S of u.mergeFields){const R=uP(e,S,t);if(!h.contains(R))throw new ye(Z.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);dP(E,R)||E.push(R)}g=new Fn(E),_=h.fieldTransforms.filter(S=>g.covers(S.field))}else g=null,_=h.fieldTransforms;return new sP(new bn(p),g,_)}function Lv(r,e){if(Mv(r=zt(r)))return Vv("Unsupported field value:",e,r),Ov(r,e);if(r instanceof Pv)return function(s,o){if(!Dv(o.Mu))throw o.qu(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.qu(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(s,o){const u=[];let h=0;for(const p of s){let g=Lv(p,o.ku(h));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),h++}return{arrayValue:{values:u}}}(r,e)}return function(s,o){if((s=zt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return CR(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=wt.fromDate(s);return{timestampValue:kd(o.serializer,u)}}if(s instanceof wt){const u=new wt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:kd(o.serializer,u)}}if(s instanceof Nv)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof ja)return{bytesValue:FR(o.serializer,s._byteString)};if(s instanceof xr){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.qu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:dv(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof xv)return function(h,p){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:h.toArray().map(g=>{if(typeof g!="number")throw p.qu("VectorValues must only contain numeric values.");return hf(p.serializer,g)})}}}}}}(s,o);throw o.qu(`Unsupported field value: ${yf(s)}`)}(r,e)}function Ov(r,e){const t={};return W_(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Io(r,(s,o)=>{const u=Lv(o,e.Ou(s));u!=null&&(t[s]=u)}),{mapValue:{fields:t}}}function Mv(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof wt||r instanceof Nv||r instanceof ja||r instanceof xr||r instanceof Pv||r instanceof xv)}function Vv(r,e,t){if(!Mv(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const s=yf(t);throw s==="an object"?e.qu(r+" a custom object"):e.qu(r+" "+s)}}function uP(r,e,t){if((e=zt(e))instanceof kv)return e._internalPath;if(typeof e=="string")return hP(r,e);throw tc("Field path arguments must be of type string or ",r,!1,void 0,t)}const cP=new RegExp("[~\\*/\\[\\]]");function hP(r,e,t){if(e.search(cP)>=0)throw tc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new kv(...e.split("."))._internalPath}catch{throw tc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function tc(r,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let p=`Function ${e}() called with invalid data`;t&&(p+=" (via `toFirestore()`)"),p+=". ";let g="";return(u||h)&&(g+=" (found",u&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new ye(Z.INVALID_ARGUMENT,p+r+g)}function dP(r,e){return r.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fP(r,e,t){let s;return s=r?r.toFirestore(e):e,s}function pP(r,e){const t=Av(r.firestore,Rv),s=eP(r),o=fP(r.converter,e);return mP(t,[lP(aP(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,Nr.exists(!1))]).then(()=>s)}function mP(r,e){return function(s,o){const u=new Ji;return s.asyncQueue.enqueueAndForget(async()=>Bk(await Xk(s),o,u)),u.promise}(nP(r),e)}(function(e,t=!0){(function(o){To=o})(wo),rr(new Un("firestore",(s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),p=new Rv(new bA(s.getProvider("auth-internal")),new BA(s.getProvider("app-check-internal")),function(_,E){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new ye(Z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ku(_.options.projectId,E)}(h,o),h);return u=Object.assign({useFetchStreams:t},u),p._setSettings(u),p},"PUBLIC").setMultipleInstances(!0)),wn(Rg,"4.7.5",e),wn(Rg,"4.7.5","esm2017")})();const gP={apiKey:"AIzaSyD2cfAps8ZDW-ZWrVerPTzJx960jP9PU7U",authDomain:"petitchef-d299c.firebaseapp.com",projectId:"petitchef-d299c",storageBucket:"petitchef-d299c.firebasestorage.app",messagingSenderId:"1015785273194",appId:"1:1015785273194:web:ddddbbdc677139df6e5713",measurementId:"G-EM6C30RDQ2"},wf=xy(gP);typeof window<"u"&&m1(wf);const Du=LA(wf),yP=tP(wf);function _P(){const[r,e]=W.useState(!0),[t,s]=W.useState("");W.useEffect(()=>{document.body.classList.toggle("darkTheme",r),document.body.classList.toggle("lightTheme",!r)},[r]);const o=()=>{e(h=>!h)},u=h=>{s(h.target.value)};return TC(Du,h=>{if(h){const p=h.uid;console.log("Usuário Logado "+p)}else console.log("O usuário não está logado")}),H.jsxs("div",{children:[H.jsx("header",{children:H.jsx("div",{className:"container-fluid",children:H.jsx("nav",{className:"navbar navbar-expand-lg navbar-light",children:H.jsxs("div",{className:`${Ae.headerInner} d-flex justify-content-between align-items-center`,children:[H.jsxs("a",{className:"navbar-brand flex-shrink-0",href:"#",children:[H.jsx("img",{id:"logo-image",src:gT,alt:"logo-image",className:`${Ae.logoImage} img-fluid`}),H.jsx("span",{className:Ae.logoText,children:"Petit Chef"})]}),H.jsxs("div",{className:`${Ae.headerContent} d-flex align-items-center justify-content-end`,children:[H.jsxs("form",{className:"d-flex justify-content-end align-items-center",children:[H.jsxs("div",{className:Ae.searchIcon,children:[t===""&&H.jsx("i",{className:"fa fa-search","aria-hidden":"true","aria-label":"Buscar"}),H.jsx("input",{className:"form-control",type:"search",placeholder:"Buscar","aria-label":"Buscar",value:t,onChange:u})]}),H.jsxs("label",{className:`${Ae.switch} flex-shrink-0 mb-0`,children:[H.jsx("input",{id:"checkbox",type:"checkbox",checked:r,onChange:o}),H.jsx("span",{className:`${Ae.slider} ${Ae.round}`})]})]}),H.jsx("a",{href:"#",className:Ae.profile,children:H.jsx("img",{src:"https://yudiz.com/codepen/nft-store/user-pic1.svg",alt:"user-image"})}),H.jsx("a",{href:"#",className:Ae.notification,children:H.jsx("i",{className:"fa fa-bell","aria-hidden":"true","aria-label":"Notificações"})})]})]})})})}),H.jsx("div",{className:Ae.contentWrapper,children:H.jsx("div",{className:"container-fluid",children:H.jsxs("div",{className:`${Ae.contentInner} d-flex`,children:[H.jsx("div",{className:Ae.menuLinks,children:H.jsxs("ul",{children:[H.jsx("li",{className:`${Ae.navItem} ${Ae.active}`,children:H.jsxs("a",{href:"#",className:"d-flex align-items-center nav-link",children:[H.jsx("i",{className:"fa fa-home","aria-hidden":"true"}),H.jsx("span",{children:"Home"})]})}),H.jsx("li",{className:Ae.navItem,children:H.jsxs("a",{href:"#",className:"d-flex align-items-center nav-link",children:[H.jsx("i",{className:"fa fa-briefcase","aria-hidden":"true"}),H.jsx("span",{children:"Market"})]})}),H.jsx("li",{className:Ae.navItem,children:H.jsxs("a",{href:"#",className:"d-flex align-items-center nav-link",children:[H.jsx("i",{className:"fa fa-heart-o","aria-hidden":"true"}),H.jsx("span",{children:"Favoritos"})]})}),H.jsx("li",{className:Ae.navItem,children:H.jsxs("a",{href:"#",className:"d-flex align-items-center nav-link",children:[H.jsx("i",{className:"fa fa-square-o","aria-hidden":"true"}),H.jsx("span",{children:"Coleções"})]})}),H.jsx("li",{className:Ae.navItem,children:H.jsxs("a",{href:"#",className:"d-flex align-items-center nav-link",children:[H.jsx("i",{className:"fa fa-fire","aria-hidden":"true"}),H.jsx("span",{children:"Em Alta"})]})}),H.jsx("li",{className:Ae.navItem,children:H.jsxs("a",{href:"#",className:"d-flex align-items-center nav-link",children:[H.jsx("i",{className:"fa fa-star","aria-hidden":"true"}),H.jsx("span",{children:"Destaques"})]})}),H.jsx("li",{className:Ae.navItem,children:H.jsxs("a",{href:"#",className:"d-flex align-items-center nav-link",children:[H.jsx("i",{className:"fa fa-shopping-cart","aria-hidden":"true"}),H.jsx("span",{children:"Comprados"})]})}),H.jsx("li",{className:Ae.navItem,children:H.jsxs("a",{href:"#",className:"d-flex align-items-center nav-link",children:[H.jsx("i",{className:"fa fa-cog","aria-hidden":"true"}),H.jsx("span",{children:"Configurações"})]})})]})}),H.jsx("div",{className:Ae.mainContent,children:H.jsx(yT,{})})]})})})]})}const vP="Login-module__loginBody___WMHEU",wP="Login-module__tip___DJybB",EP="Login-module__forgotPass___CsjPq",TP="Login-module__cont___m1kN5",IP="Login-module__form___KUbD0",SP="Login-module__sub-cont___FQeQ3",CP="Login-module__s--signup___xOcS9",AP="Login-module__img___mVSWO",RP="Login-module__img__text___5oQ09",kP="Login-module__img__text___5oQ09",PP="Login-module__m--up___ThXTS",NP="Login-module__m--in___sY0-0",xP="Login-module__img__btn___a6AFq",DP="Login-module__img__btn___a6AFq",LP="Login-module__submit___fv-Ne",OP="Login-module__fb-btn___CxihJ",MP="Login-module__sign-in___yJVCf",VP="Login-module__sign-up___861mK",bP="Login-module__icon-link___AmgBg",FP="Login-module__checkmark___esGZg",UP="Login-module__fill___geE5y",jP="Login-module__scale___P-Go5",BP="Login-module__checkmark__circle___cNe0y",$P="Login-module__checkmark__circle___cNe0y",zP="Login-module__stroke___n6xMw",HP="Login-module__checkmark__check___Lvluz",WP="Login-module__checkmark__check___Lvluz",qP="Login-module__text-darker___SdtFv",Te={loginBody:vP,tip:wP,forgotPass:EP,cont:TP,form:IP,"sub-cont":"Login-module__sub-cont___FQeQ3",subCont:SP,"s--signup":"Login-module__s--signup___xOcS9",sSignup:CP,img:AP,img__text:RP,imgText:kP,"m--up":"Login-module__m--up___ThXTS",mUp:PP,"m--in":"Login-module__m--in___sY0-0",mIn:NP,img__btn:xP,imgBtn:DP,submit:LP,"fb-btn":"Login-module__fb-btn___CxihJ",fbBtn:OP,"sign-in":"Login-module__sign-in___yJVCf",signIn:MP,"sign-up":"Login-module__sign-up___861mK",signUp:VP,"icon-link":"Login-module__icon-link___AmgBg",iconLink:bP,checkmark:FP,fill:UP,scale:jP,checkmark__circle:BP,checkmarkCircle:$P,stroke:zP,checkmark__check:HP,checkmarkCheck:WP,"text-darker":"Login-module__text-darker___SdtFv",textDarker:qP};function KP(){const[r,e]=W.useState(""),[t,s]=W.useState(""),[o,u]=W.useState(!1),[h,p]=W.useState(""),g=j=>e(j.target.value),_=j=>s(j.target.value),E=j=>p(j.target.value),S=async()=>{try{await yC(Du,r),alert("E-mail de redefinição de senha enviado com sucesso!")}catch(j){console.error("Erro ao enviar e-mail de redefinição:",j.code,j.message),alert("Erro ao enviar e-mail de redefinição. Verifique o e-mail informado.")}},R=(j,$)=>{j.key==="Enter"&&$()},F=async()=>{try{const j=await _C(Du,r,t);u(!0),console.log("Usuário cadastrado:",j.user);try{await pP(Zk(yP,"Usuario"),{nome:h,email:r})}catch($){console.error("Erro ao salvar dados no Firestore:",$.code,$.message)}setTimeout(()=>{window.location.href="http://localhost:5173"},2500)}catch(j){console.error("Erro ao cadastrar:",j.code,j.message)}},U=async()=>{try{const j=await vC(Du,r,t);u(!0),console.log("Usuário Logado:",j.user),setTimeout(()=>{window.location.href="http://localhost:5173"},2500)}catch(j){console.error("Erro ao fazer login:",j.code,j.message)}};return W.useEffect(()=>{const j=document.querySelector(`.${Te.img__btn}`),$=document.querySelector(`.${Te.cont}`);if(j&&$){const G=()=>$.classList.toggle(Te.sSignup);return j.addEventListener("click",G),()=>j.removeEventListener("click",G)}},[]),H.jsx(H.Fragment,{children:H.jsx("div",{className:Te.loginBody,children:H.jsxs("div",{className:Te.cont,children:[H.jsxs("div",{className:`${Te.form} ${Te.signIn}`,children:[H.jsx("h2",{className:Te.textDarker,children:"Bem-vindo de volta!"}),H.jsxs("label",{className:Te.textDarker,children:[H.jsx("span",{children:"Email"}),H.jsx("input",{type:"email",onChange:g,onKeyDown:j=>R(j,U)})]}),H.jsxs("label",{className:Te.textDarker,children:[H.jsx("span",{children:"Senha"}),H.jsx("input",{type:"password",onChange:_,onKeyDown:j=>R(j,U)})]}),H.jsx("p",{className:`${Te.forgotPass} ${Te.textDarker}`,onClick:S,children:"Esqueceu a senha?"}),o?H.jsxs("svg",{className:Te.checkmark,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52",children:[H.jsx("circle",{className:Te.checkmark__circle,cx:"26",cy:"26",r:"25",fill:"none"}),H.jsx("path",{className:Te.checkmark__check,fill:"none",d:"M14.1 27.2l7.1 7.2 16.7-16.8"})]}):H.jsx("button",{type:"button",className:Te.submit,onClick:U,children:"Entrar"})]}),H.jsxs("div",{className:Te.subCont,children:[H.jsxs("div",{className:Te.img,children:[H.jsxs("div",{className:`${Te.imgText} ${Te.mUp}`,children:[H.jsx("h2",{className:Te.textDarker,children:"Novo por aqui?"}),H.jsx("p",{className:Te.textDarker,children:"Cadastre-se e descubra um mundo de novas receitas!"})]}),H.jsxs("div",{className:`${Te.imgText} ${Te.mIn}`,children:[H.jsx("h2",{className:Te.textDarker,children:"Já é um de nós?"}),H.jsx("p",{className:Te.textDarker,children:"Se você já tem uma conta, é só fazer login!"})]}),H.jsxs("div",{className:Te.img__btn,children:[H.jsx("span",{className:Te.mUp,children:"Cadastrar"}),H.jsx("span",{className:Te.mIn,children:"Entrar"})]})]}),H.jsxs("div",{className:`${Te.form} ${Te.signUp}`,children:[H.jsx("h2",{className:Te.textDarker,children:"Prepare-se para saborear o melhor!"}),H.jsxs("label",{className:Te.textDarker,children:[H.jsx("span",{children:"Nome"}),H.jsx("input",{type:"text",onChange:E,onKeyDown:j=>R(j,F)})]}),H.jsxs("label",{className:Te.textDarker,children:[H.jsx("span",{children:"Email"}),H.jsx("input",{type:"email",onChange:g,onKeyDown:j=>R(j,F)})]}),H.jsxs("label",{className:Te.textDarker,children:[H.jsx("span",{children:"Senha"}),H.jsx("input",{type:"password",onChange:_,onKeyDown:j=>R(j,F)})]}),o?H.jsxs("svg",{className:Te.checkmark,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52",children:[H.jsx("circle",{className:Te.checkmark__circle,cx:"26",cy:"26",r:"25",fill:"none"}),H.jsx("path",{className:Te.checkmark__check,fill:"none",d:"M14.1 27.2l7.1 7.2 16.7-16.8"})]}):H.jsx("button",{type:"button",className:Te.submit,onClick:F,children:"Cadastrar"})]})]})]})})})}function GP(){return H.jsx(uE,{children:H.jsxs(Uw,{children:[H.jsx(dd,{path:"/login",element:H.jsx(KP,{})}),H.jsx(dd,{path:"/",element:H.jsx(_P,{})})]})})}G0.createRoot(document.getElementById("root")).render(H.jsx(W.StrictMode,{children:H.jsx(GP,{})}));
