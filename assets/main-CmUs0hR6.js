(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=t(o);fetch(o.href,u)}})();function Qw(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var qh={exports:{}},_a={},Kh={exports:{}},Se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Om;function Yw(){if(Om)return Se;Om=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),S=Symbol.iterator;function A(O){return O===null||typeof O!="object"?null:(O=S&&O[S]||O["@@iterator"],typeof O=="function"?O:null)}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,W={};function B(O,q,de){this.props=O,this.context=q,this.refs=W,this.updater=de||F}B.prototype.isReactComponent={},B.prototype.setState=function(O,q){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,q,"setState")},B.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function K(){}K.prototype=B.prototype;function J(O,q,de){this.props=O,this.context=q,this.refs=W,this.updater=de||F}var Y=J.prototype=new K;Y.constructor=J,U(Y,B.prototype),Y.isPureReactComponent=!0;var le=Array.isArray,we=Object.prototype.hasOwnProperty,_e={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function T(O,q,de){var Te,Ie={},Pe=null,Le=null;if(q!=null)for(Te in q.ref!==void 0&&(Le=q.ref),q.key!==void 0&&(Pe=""+q.key),q)we.call(q,Te)&&!N.hasOwnProperty(Te)&&(Ie[Te]=q[Te]);var Me=arguments.length-2;if(Me===1)Ie.children=de;else if(1<Me){for(var je=Array(Me),dt=0;dt<Me;dt++)je[dt]=arguments[dt+2];Ie.children=je}if(O&&O.defaultProps)for(Te in Me=O.defaultProps,Me)Ie[Te]===void 0&&(Ie[Te]=Me[Te]);return{$$typeof:r,type:O,key:Pe,ref:Le,props:Ie,_owner:_e.current}}function R(O,q){return{$$typeof:r,type:O.type,key:q,ref:O.ref,props:O.props,_owner:O._owner}}function P(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function D(O){var q={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(de){return q[de]})}var L=/\/+/g;function C(O,q){return typeof O=="object"&&O!==null&&O.key!=null?D(""+O.key):q.toString(36)}function tt(O,q,de,Te,Ie){var Pe=typeof O;(Pe==="undefined"||Pe==="boolean")&&(O=null);var Le=!1;if(O===null)Le=!0;else switch(Pe){case"string":case"number":Le=!0;break;case"object":switch(O.$$typeof){case r:case e:Le=!0}}if(Le)return Le=O,Ie=Ie(Le),O=Te===""?"."+C(Le,0):Te,le(Ie)?(de="",O!=null&&(de=O.replace(L,"$&/")+"/"),tt(Ie,q,de,"",function(dt){return dt})):Ie!=null&&(P(Ie)&&(Ie=R(Ie,de+(!Ie.key||Le&&Le.key===Ie.key?"":(""+Ie.key).replace(L,"$&/")+"/")+O)),q.push(Ie)),1;if(Le=0,Te=Te===""?".":Te+":",le(O))for(var Me=0;Me<O.length;Me++){Pe=O[Me];var je=Te+C(Pe,Me);Le+=tt(Pe,q,de,je,Ie)}else if(je=A(O),typeof je=="function")for(O=je.call(O),Me=0;!(Pe=O.next()).done;)Pe=Pe.value,je=Te+C(Pe,Me++),Le+=tt(Pe,q,de,je,Ie);else if(Pe==="object")throw q=String(O),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return Le}function kt(O,q,de){if(O==null)return O;var Te=[],Ie=0;return tt(O,Te,"","",function(Pe){return q.call(de,Pe,Ie++)}),Te}function Pt(O){if(O._status===-1){var q=O._result;q=q(),q.then(function(de){(O._status===0||O._status===-1)&&(O._status=1,O._result=de)},function(de){(O._status===0||O._status===-1)&&(O._status=2,O._result=de)}),O._status===-1&&(O._status=0,O._result=q)}if(O._status===1)return O._result.default;throw O._result}var Fe={current:null},re={transition:null},fe={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:re,ReactCurrentOwner:_e};function se(){throw Error("act(...) is not supported in production builds of React.")}return Se.Children={map:kt,forEach:function(O,q,de){kt(O,function(){q.apply(this,arguments)},de)},count:function(O){var q=0;return kt(O,function(){q++}),q},toArray:function(O){return kt(O,function(q){return q})||[]},only:function(O){if(!P(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Se.Component=B,Se.Fragment=t,Se.Profiler=o,Se.PureComponent=J,Se.StrictMode=s,Se.Suspense=g,Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,Se.act=se,Se.cloneElement=function(O,q,de){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Te=U({},O.props),Ie=O.key,Pe=O.ref,Le=O._owner;if(q!=null){if(q.ref!==void 0&&(Pe=q.ref,Le=_e.current),q.key!==void 0&&(Ie=""+q.key),O.type&&O.type.defaultProps)var Me=O.type.defaultProps;for(je in q)we.call(q,je)&&!N.hasOwnProperty(je)&&(Te[je]=q[je]===void 0&&Me!==void 0?Me[je]:q[je])}var je=arguments.length-2;if(je===1)Te.children=de;else if(1<je){Me=Array(je);for(var dt=0;dt<je;dt++)Me[dt]=arguments[dt+2];Te.children=Me}return{$$typeof:r,type:O.type,key:Ie,ref:Pe,props:Te,_owner:Le}},Se.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:u,_context:O},O.Consumer=O},Se.createElement=T,Se.createFactory=function(O){var q=T.bind(null,O);return q.type=O,q},Se.createRef=function(){return{current:null}},Se.forwardRef=function(O){return{$$typeof:f,render:O}},Se.isValidElement=P,Se.lazy=function(O){return{$$typeof:E,_payload:{_status:-1,_result:O},_init:Pt}},Se.memo=function(O,q){return{$$typeof:v,type:O,compare:q===void 0?null:q}},Se.startTransition=function(O){var q=re.transition;re.transition={};try{O()}finally{re.transition=q}},Se.unstable_act=se,Se.useCallback=function(O,q){return Fe.current.useCallback(O,q)},Se.useContext=function(O){return Fe.current.useContext(O)},Se.useDebugValue=function(){},Se.useDeferredValue=function(O){return Fe.current.useDeferredValue(O)},Se.useEffect=function(O,q){return Fe.current.useEffect(O,q)},Se.useId=function(){return Fe.current.useId()},Se.useImperativeHandle=function(O,q,de){return Fe.current.useImperativeHandle(O,q,de)},Se.useInsertionEffect=function(O,q){return Fe.current.useInsertionEffect(O,q)},Se.useLayoutEffect=function(O,q){return Fe.current.useLayoutEffect(O,q)},Se.useMemo=function(O,q){return Fe.current.useMemo(O,q)},Se.useReducer=function(O,q,de){return Fe.current.useReducer(O,q,de)},Se.useRef=function(O){return Fe.current.useRef(O)},Se.useState=function(O){return Fe.current.useState(O)},Se.useSyncExternalStore=function(O,q,de){return Fe.current.useSyncExternalStore(O,q,de)},Se.useTransition=function(){return Fe.current.useTransition()},Se.version="18.3.1",Se}var Lm;function bd(){return Lm||(Lm=1,Kh.exports=Yw()),Kh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mm;function Xw(){if(Mm)return _a;Mm=1;var r=bd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(f,g,v){var E,S={},A=null,F=null;v!==void 0&&(A=""+v),g.key!==void 0&&(A=""+g.key),g.ref!==void 0&&(F=g.ref);for(E in g)s.call(g,E)&&!u.hasOwnProperty(E)&&(S[E]=g[E]);if(f&&f.defaultProps)for(E in g=f.defaultProps,g)S[E]===void 0&&(S[E]=g[E]);return{$$typeof:e,type:f,key:A,ref:F,props:S,_owner:o.current}}return _a.Fragment=t,_a.jsx=h,_a.jsxs=h,_a}var Vm;function Jw(){return Vm||(Vm=1,qh.exports=Xw()),qh.exports}var $=Jw(),H=bd(),gu={},Gh={exports:{}},Yt={},Qh={exports:{}},Yh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bm;function Zw(){return bm||(bm=1,function(r){function e(re,fe){var se=re.length;re.push(fe);e:for(;0<se;){var O=se-1>>>1,q=re[O];if(0<o(q,fe))re[O]=fe,re[se]=q,se=O;else break e}}function t(re){return re.length===0?null:re[0]}function s(re){if(re.length===0)return null;var fe=re[0],se=re.pop();if(se!==fe){re[0]=se;e:for(var O=0,q=re.length,de=q>>>1;O<de;){var Te=2*(O+1)-1,Ie=re[Te],Pe=Te+1,Le=re[Pe];if(0>o(Ie,se))Pe<q&&0>o(Le,Ie)?(re[O]=Le,re[Pe]=se,O=Pe):(re[O]=Ie,re[Te]=se,O=Te);else if(Pe<q&&0>o(Le,se))re[O]=Le,re[Pe]=se,O=Pe;else break e}}return fe}function o(re,fe){var se=re.sortIndex-fe.sortIndex;return se!==0?se:re.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var h=Date,f=h.now();r.unstable_now=function(){return h.now()-f}}var g=[],v=[],E=1,S=null,A=3,F=!1,U=!1,W=!1,B=typeof setTimeout=="function"?setTimeout:null,K=typeof clearTimeout=="function"?clearTimeout:null,J=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Y(re){for(var fe=t(v);fe!==null;){if(fe.callback===null)s(v);else if(fe.startTime<=re)s(v),fe.sortIndex=fe.expirationTime,e(g,fe);else break;fe=t(v)}}function le(re){if(W=!1,Y(re),!U)if(t(g)!==null)U=!0,Pt(we);else{var fe=t(v);fe!==null&&Fe(le,fe.startTime-re)}}function we(re,fe){U=!1,W&&(W=!1,K(T),T=-1),F=!0;var se=A;try{for(Y(fe),S=t(g);S!==null&&(!(S.expirationTime>fe)||re&&!D());){var O=S.callback;if(typeof O=="function"){S.callback=null,A=S.priorityLevel;var q=O(S.expirationTime<=fe);fe=r.unstable_now(),typeof q=="function"?S.callback=q:S===t(g)&&s(g),Y(fe)}else s(g);S=t(g)}if(S!==null)var de=!0;else{var Te=t(v);Te!==null&&Fe(le,Te.startTime-fe),de=!1}return de}finally{S=null,A=se,F=!1}}var _e=!1,N=null,T=-1,R=5,P=-1;function D(){return!(r.unstable_now()-P<R)}function L(){if(N!==null){var re=r.unstable_now();P=re;var fe=!0;try{fe=N(!0,re)}finally{fe?C():(_e=!1,N=null)}}else _e=!1}var C;if(typeof J=="function")C=function(){J(L)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,kt=tt.port2;tt.port1.onmessage=L,C=function(){kt.postMessage(null)}}else C=function(){B(L,0)};function Pt(re){N=re,_e||(_e=!0,C())}function Fe(re,fe){T=B(function(){re(r.unstable_now())},fe)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(re){re.callback=null},r.unstable_continueExecution=function(){U||F||(U=!0,Pt(we))},r.unstable_forceFrameRate=function(re){0>re||125<re?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<re?Math.floor(1e3/re):5},r.unstable_getCurrentPriorityLevel=function(){return A},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(re){switch(A){case 1:case 2:case 3:var fe=3;break;default:fe=A}var se=A;A=fe;try{return re()}finally{A=se}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(re,fe){switch(re){case 1:case 2:case 3:case 4:case 5:break;default:re=3}var se=A;A=re;try{return fe()}finally{A=se}},r.unstable_scheduleCallback=function(re,fe,se){var O=r.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?O+se:O):se=O,re){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=se+q,re={id:E++,callback:fe,priorityLevel:re,startTime:se,expirationTime:q,sortIndex:-1},se>O?(re.sortIndex=se,e(v,re),t(g)===null&&re===t(v)&&(W?(K(T),T=-1):W=!0,Fe(le,se-O))):(re.sortIndex=q,e(g,re),U||F||(U=!0,Pt(we))),re},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(re){var fe=A;return function(){var se=A;A=fe;try{return re.apply(this,arguments)}finally{A=se}}}}(Yh)),Yh}var Fm;function eE(){return Fm||(Fm=1,Qh.exports=Zw()),Qh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Um;function tE(){if(Um)return Yt;Um=1;var r=bd(),e=eE();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},S={};function A(n){return g.call(S,n)?!0:g.call(E,n)?!1:v.test(n)?S[n]=!0:(E[n]=!0,!1)}function F(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function U(n,i,a,c){if(i===null||typeof i>"u"||F(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function W(n,i,a,c,d,m,_){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=_}var B={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){B[n]=new W(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];B[i]=new W(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){B[n]=new W(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){B[n]=new W(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){B[n]=new W(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){B[n]=new W(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){B[n]=new W(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){B[n]=new W(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){B[n]=new W(n,5,!1,n.toLowerCase(),null,!1,!1)});var K=/[\-:]([a-z])/g;function J(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(K,J);B[i]=new W(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(K,J);B[i]=new W(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(K,J);B[i]=new W(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){B[n]=new W(n,1,!1,n.toLowerCase(),null,!1,!1)}),B.xlinkHref=new W("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){B[n]=new W(n,1,!1,n.toLowerCase(),null,!0,!0)});function Y(n,i,a,c){var d=B.hasOwnProperty(i)?B[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(U(i,a,d,c)&&(a=null),c||d===null?A(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var le=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,we=Symbol.for("react.element"),_e=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),D=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),tt=Symbol.for("react.suspense_list"),kt=Symbol.for("react.memo"),Pt=Symbol.for("react.lazy"),Fe=Symbol.for("react.offscreen"),re=Symbol.iterator;function fe(n){return n===null||typeof n!="object"?null:(n=re&&n[re]||n["@@iterator"],typeof n=="function"?n:null)}var se=Object.assign,O;function q(n){if(O===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+n}var de=!1;function Te(n,i){if(!n||de)return"";de=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(j){var c=j}Reflect.construct(n,[],i)}else{try{i.call()}catch(j){c=j}n.call(i.prototype)}else{try{throw Error()}catch(j){c=j}n()}}catch(j){if(j&&c&&typeof j.stack=="string"){for(var d=j.stack.split(`
`),m=c.stack.split(`
`),_=d.length-1,I=m.length-1;1<=_&&0<=I&&d[_]!==m[I];)I--;for(;1<=_&&0<=I;_--,I--)if(d[_]!==m[I]){if(_!==1||I!==1)do if(_--,I--,0>I||d[_]!==m[I]){var k=`
`+d[_].replace(" at new "," at ");return n.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",n.displayName)),k}while(1<=_&&0<=I);break}}}finally{de=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?q(n):""}function Ie(n){switch(n.tag){case 5:return q(n.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return n=Te(n.type,!1),n;case 11:return n=Te(n.type.render,!1),n;case 1:return n=Te(n.type,!0),n;default:return""}}function Pe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case _e:return"Portal";case R:return"Profiler";case T:return"StrictMode";case C:return"Suspense";case tt:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case D:return(n.displayName||"Context")+".Consumer";case P:return(n._context.displayName||"Context")+".Provider";case L:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case kt:return i=n.displayName||null,i!==null?i:Pe(n.type)||"Memo";case Pt:i=n._payload,n=n._init;try{return Pe(n(i))}catch{}}return null}function Le(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pe(i);case 8:return i===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function je(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function dt(n){var i=je(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(_){c=""+_,m.call(this,_)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(_){c=""+_},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function or(n){n._valueTracker||(n._valueTracker=dt(n))}function ds(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=je(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Vr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function wi(n,i){var a=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function fs(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Me(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ro(n,i){i=i.checked,i!=null&&Y(n,"checked",i,!1)}function Co(n,i){Ro(n,i);var a=Me(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?ps(n,i.type,a):i.hasOwnProperty("defaultValue")&&ps(n,i.type,Me(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function tl(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ps(n,i,a){(i!=="number"||Vr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var ar=Array.isArray;function lr(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Me(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Ao(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ms(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(ar(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Me(a)}}function gs(n,i){var a=Me(i.value),c=Me(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function ko(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function at(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lt(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?at(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ur,Po=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ur=ur||document.createElement("div"),ur.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ur.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function br(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ei={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ti=["Webkit","ms","Moz","O"];Object.keys(Ei).forEach(function(n){Ti.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ei[i]=Ei[n]})});function No(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ei.hasOwnProperty(n)&&Ei[n]?(""+i).trim():i+"px"}function xo(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=No(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Do=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Oo(n,i){if(i){if(Do[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Lo(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ii=null;function ys(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var vs=null,un=null,Bn=null;function _s(n){if(n=ia(n)){if(typeof vs!="function")throw Error(t(280));var i=n.stateNode;i&&(i=xl(i),vs(n.stateNode,n.type,i))}}function zn(n){un?Bn?Bn.push(n):Bn=[n]:un=n}function Mo(){if(un){var n=un,i=Bn;if(Bn=un=null,_s(n),i)for(n=0;n<i.length;n++)_s(i[n])}}function Si(n,i){return n(i)}function Vo(){}var cr=!1;function bo(n,i,a){if(cr)return n(i,a);cr=!0;try{return Si(n,i,a)}finally{cr=!1,(un!==null||Bn!==null)&&(Vo(),Mo())}}function nt(n,i){var a=n.stateNode;if(a===null)return null;var c=xl(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var ws=!1;if(f)try{var wn={};Object.defineProperty(wn,"passive",{get:function(){ws=!0}}),window.addEventListener("test",wn,wn),window.removeEventListener("test",wn,wn)}catch{ws=!1}function Ri(n,i,a,c,d,m,_,I,k){var j=Array.prototype.slice.call(arguments,3);try{i.apply(a,j)}catch(X){this.onError(X)}}var Ci=!1,Es=null,En=!1,Fo=null,wc={onError:function(n){Ci=!0,Es=n}};function Ts(n,i,a,c,d,m,_,I,k){Ci=!1,Es=null,Ri.apply(wc,arguments)}function nl(n,i,a,c,d,m,_,I,k){if(Ts.apply(this,arguments),Ci){if(Ci){var j=Es;Ci=!1,Es=null}else throw Error(t(198));En||(En=!0,Fo=j)}}function Tn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Ai(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function In(n){if(Tn(n)!==n)throw Error(t(188))}function rl(n){var i=n.alternate;if(!i){if(i=Tn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return In(d),n;if(m===c)return In(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var _=!1,I=d.child;I;){if(I===a){_=!0,a=d,c=m;break}if(I===c){_=!0,c=d,a=m;break}I=I.sibling}if(!_){for(I=m.child;I;){if(I===a){_=!0,a=m,c=d;break}if(I===c){_=!0,c=m,a=d;break}I=I.sibling}if(!_)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Uo(n){return n=rl(n),n!==null?Is(n):null}function Is(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Is(n);if(i!==null)return i;n=n.sibling}return null}var Ss=e.unstable_scheduleCallback,jo=e.unstable_cancelCallback,il=e.unstable_shouldYield,Ec=e.unstable_requestPaint,Be=e.unstable_now,sl=e.unstable_getCurrentPriorityLevel,ki=e.unstable_ImmediatePriority,Fr=e.unstable_UserBlockingPriority,cn=e.unstable_NormalPriority,Bo=e.unstable_LowPriority,ol=e.unstable_IdlePriority,Pi=null,en=null;function al(n){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(Pi,n,void 0,(n.current.flags&128)===128)}catch{}}var Ut=Math.clz32?Math.clz32:ul,zo=Math.log,ll=Math.LN2;function ul(n){return n>>>=0,n===0?32:31-(zo(n)/ll|0)|0}var Rs=64,Cs=4194304;function Ur(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ni(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,_=a&268435455;if(_!==0){var I=_&~d;I!==0?c=Ur(I):(m&=_,m!==0&&(c=Ur(m)))}else _=a&~d,_!==0?c=Ur(_):m!==0&&(c=Ur(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Ut(i),d=1<<a,c|=n[a],i&=~d;return c}function Tc(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hr(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var _=31-Ut(m),I=1<<_,k=d[_];k===-1?((I&a)===0||(I&c)!==0)&&(d[_]=Tc(I,i)):k<=i&&(n.expiredLanes|=I),m&=~I}}function tn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function xi(){var n=Rs;return Rs<<=1,(Rs&4194240)===0&&(Rs=64),n}function jr(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Br(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Ut(i),n[i]=a}function Ue(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Ut(a),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function zr(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Ut(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var ke=0;function $r(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var cl,As,hl,dl,fl,$o=!1,$n=[],wt=null,Sn=null,Rn=null,Hr=new Map,hn=new Map,Hn=[],Ic="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pl(n,i){switch(n){case"focusin":case"focusout":wt=null;break;case"dragenter":case"dragleave":Sn=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":Hr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":hn.delete(i.pointerId)}}function $t(n,i,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=ia(i),i!==null&&As(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Sc(n,i,a,c,d){switch(i){case"focusin":return wt=$t(wt,n,i,a,c,d),!0;case"dragenter":return Sn=$t(Sn,n,i,a,c,d),!0;case"mouseover":return Rn=$t(Rn,n,i,a,c,d),!0;case"pointerover":var m=d.pointerId;return Hr.set(m,$t(Hr.get(m)||null,n,i,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,hn.set(m,$t(hn.get(m)||null,n,i,a,c,d)),!0}return!1}function ml(n){var i=Vi(n.target);if(i!==null){var a=Tn(i);if(a!==null){if(i=a.tag,i===13){if(i=Ai(a),i!==null){n.blockedOn=i,fl(n.priority,function(){hl(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function dr(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=ks(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Ii=c,a.target.dispatchEvent(c),Ii=null}else return i=ia(a),i!==null&&As(i),n.blockedOn=a,!1;i.shift()}return!0}function Di(n,i,a){dr(n)&&a.delete(i)}function gl(){$o=!1,wt!==null&&dr(wt)&&(wt=null),Sn!==null&&dr(Sn)&&(Sn=null),Rn!==null&&dr(Rn)&&(Rn=null),Hr.forEach(Di),hn.forEach(Di)}function Cn(n,i){n.blockedOn===i&&(n.blockedOn=null,$o||($o=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,gl)))}function An(n){function i(d){return Cn(d,n)}if(0<$n.length){Cn($n[0],n);for(var a=1;a<$n.length;a++){var c=$n[a];c.blockedOn===n&&(c.blockedOn=null)}}for(wt!==null&&Cn(wt,n),Sn!==null&&Cn(Sn,n),Rn!==null&&Cn(Rn,n),Hr.forEach(i),hn.forEach(i),a=0;a<Hn.length;a++)c=Hn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Hn.length&&(a=Hn[0],a.blockedOn===null);)ml(a),a.blockedOn===null&&Hn.shift()}var fr=le.ReactCurrentBatchConfig,Wr=!0;function qe(n,i,a,c){var d=ke,m=fr.transition;fr.transition=null;try{ke=1,Ho(n,i,a,c)}finally{ke=d,fr.transition=m}}function Rc(n,i,a,c){var d=ke,m=fr.transition;fr.transition=null;try{ke=4,Ho(n,i,a,c)}finally{ke=d,fr.transition=m}}function Ho(n,i,a,c){if(Wr){var d=ks(n,i,a,c);if(d===null)Vc(n,i,c,Oi,a),pl(n,c);else if(Sc(d,n,i,a,c))c.stopPropagation();else if(pl(n,c),i&4&&-1<Ic.indexOf(n)){for(;d!==null;){var m=ia(d);if(m!==null&&cl(m),m=ks(n,i,a,c),m===null&&Vc(n,i,c,Oi,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else Vc(n,i,c,null,a)}}var Oi=null;function ks(n,i,a,c){if(Oi=null,n=ys(c),n=Vi(n),n!==null)if(i=Tn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Ai(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Oi=n,null}function Wo(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sl()){case ki:return 1;case Fr:return 4;case cn:case Bo:return 16;case ol:return 536870912;default:return 16}default:return 16}}var nn=null,Ps=null,Ht=null;function qo(){if(Ht)return Ht;var n,i=Ps,a=i.length,c,d="value"in nn?nn.value:nn.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var _=a-n;for(c=1;c<=_&&i[a-c]===d[m-c];c++);return Ht=d.slice(n,1<c?1-c:void 0)}function Ns(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Wn(){return!0}function Ko(){return!1}function Et(n){function i(a,c,d,m,_){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=_,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(m):m[I]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Wn:Ko,this.isPropagationStopped=Ko,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wn)},persist:function(){},isPersistent:Wn}),i}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xs=Et(kn),qn=se({},kn,{view:0,detail:0}),Cc=Et(qn),Ds,pr,qr,Li=se({},qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==qr&&(qr&&n.type==="mousemove"?(Ds=n.screenX-qr.screenX,pr=n.screenY-qr.screenY):pr=Ds=0,qr=n),Ds)},movementY:function(n){return"movementY"in n?n.movementY:pr}}),Os=Et(Li),Go=se({},Li,{dataTransfer:0}),yl=Et(Go),Ls=se({},qn,{relatedTarget:0}),Ms=Et(Ls),vl=se({},kn,{animationName:0,elapsedTime:0,pseudoElement:0}),mr=Et(vl),_l=se({},kn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),wl=Et(_l),El=se({},kn,{data:0}),Qo=Et(El),Vs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Il(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Tl[n])?!!i[n]:!1}function Kn(){return Il}var l=se({},qn,{key:function(n){if(n.key){var i=Vs[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ns(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?jt[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kn,charCode:function(n){return n.type==="keypress"?Ns(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ns(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),p=Et(l),y=se({},Li,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w=Et(y),M=se({},qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kn}),z=Et(M),ne=se({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ve=Et(ne),ut=se({},Li,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ne=Et(ut),ft=[9,13,27,32],it=f&&"CompositionEvent"in window,dn=null;f&&"documentMode"in document&&(dn=document.documentMode);var rn=f&&"TextEvent"in window&&!dn,Mi=f&&(!it||dn&&8<dn&&11>=dn),bs=" ",Af=!1;function kf(n,i){switch(n){case"keyup":return ft.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Fs=!1;function q_(n,i){switch(n){case"compositionend":return Pf(i);case"keypress":return i.which!==32?null:(Af=!0,bs);case"textInput":return n=i.data,n===bs&&Af?null:n;default:return null}}function K_(n,i){if(Fs)return n==="compositionend"||!it&&kf(n,i)?(n=qo(),Ht=Ps=nn=null,Fs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Mi&&i.locale!=="ko"?null:i.data;default:return null}}var G_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!G_[n.type]:i==="textarea"}function xf(n,i,a,c){zn(c),i=kl(i,"onChange"),0<i.length&&(a=new xs("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Yo=null,Xo=null;function Q_(n){Qf(n,0)}function Sl(n){var i=$s(n);if(ds(i))return n}function Y_(n,i){if(n==="change")return i}var Df=!1;if(f){var Ac;if(f){var kc="oninput"in document;if(!kc){var Of=document.createElement("div");Of.setAttribute("oninput","return;"),kc=typeof Of.oninput=="function"}Ac=kc}else Ac=!1;Df=Ac&&(!document.documentMode||9<document.documentMode)}function Lf(){Yo&&(Yo.detachEvent("onpropertychange",Mf),Xo=Yo=null)}function Mf(n){if(n.propertyName==="value"&&Sl(Xo)){var i=[];xf(i,Xo,n,ys(n)),bo(Q_,i)}}function X_(n,i,a){n==="focusin"?(Lf(),Yo=i,Xo=a,Yo.attachEvent("onpropertychange",Mf)):n==="focusout"&&Lf()}function J_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Sl(Xo)}function Z_(n,i){if(n==="click")return Sl(i)}function ew(n,i){if(n==="input"||n==="change")return Sl(i)}function tw(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Pn=typeof Object.is=="function"?Object.is:tw;function Jo(n,i){if(Pn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(i,d)||!Pn(n[d],i[d]))return!1}return!0}function Vf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function bf(n,i){var a=Vf(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Vf(a)}}function Ff(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Ff(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Uf(){for(var n=window,i=Vr();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Vr(n.document)}return i}function Pc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function nw(n){var i=Uf(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Ff(a.ownerDocument.documentElement,a)){if(c!==null&&Pc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=bf(a,m);var _=bf(a,c);d&&_&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==_.node||n.focusOffset!==_.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(_.node,_.offset)):(i.setEnd(_.node,_.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var rw=f&&"documentMode"in document&&11>=document.documentMode,Us=null,Nc=null,Zo=null,xc=!1;function jf(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;xc||Us==null||Us!==Vr(c)||(c=Us,"selectionStart"in c&&Pc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Zo&&Jo(Zo,c)||(Zo=c,c=kl(Nc,"onSelect"),0<c.length&&(i=new xs("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Us)))}function Rl(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var js={animationend:Rl("Animation","AnimationEnd"),animationiteration:Rl("Animation","AnimationIteration"),animationstart:Rl("Animation","AnimationStart"),transitionend:Rl("Transition","TransitionEnd")},Dc={},Bf={};f&&(Bf=document.createElement("div").style,"AnimationEvent"in window||(delete js.animationend.animation,delete js.animationiteration.animation,delete js.animationstart.animation),"TransitionEvent"in window||delete js.transitionend.transition);function Cl(n){if(Dc[n])return Dc[n];if(!js[n])return n;var i=js[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Bf)return Dc[n]=i[a];return n}var zf=Cl("animationend"),$f=Cl("animationiteration"),Hf=Cl("animationstart"),Wf=Cl("transitionend"),qf=new Map,Kf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kr(n,i){qf.set(n,i),u(i,[n])}for(var Oc=0;Oc<Kf.length;Oc++){var Lc=Kf[Oc],iw=Lc.toLowerCase(),sw=Lc[0].toUpperCase()+Lc.slice(1);Kr(iw,"on"+sw)}Kr(zf,"onAnimationEnd"),Kr($f,"onAnimationIteration"),Kr(Hf,"onAnimationStart"),Kr("dblclick","onDoubleClick"),Kr("focusin","onFocus"),Kr("focusout","onBlur"),Kr(Wf,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ea="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ow=new Set("cancel close invalid load scroll toggle".split(" ").concat(ea));function Gf(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,nl(c,i,void 0,n),n.currentTarget=null}function Qf(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var _=c.length-1;0<=_;_--){var I=c[_],k=I.instance,j=I.currentTarget;if(I=I.listener,k!==m&&d.isPropagationStopped())break e;Gf(d,I,j),m=k}else for(_=0;_<c.length;_++){if(I=c[_],k=I.instance,j=I.currentTarget,I=I.listener,k!==m&&d.isPropagationStopped())break e;Gf(d,I,j),m=k}}}if(En)throw n=Fo,En=!1,Fo=null,n}function He(n,i){var a=i[zc];a===void 0&&(a=i[zc]=new Set);var c=n+"__bubble";a.has(c)||(Yf(i,n,2,!1),a.add(c))}function Mc(n,i,a){var c=0;i&&(c|=4),Yf(a,n,c,i)}var Al="_reactListening"+Math.random().toString(36).slice(2);function ta(n){if(!n[Al]){n[Al]=!0,s.forEach(function(a){a!=="selectionchange"&&(ow.has(a)||Mc(a,!1,n),Mc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Al]||(i[Al]=!0,Mc("selectionchange",!1,i))}}function Yf(n,i,a,c){switch(Wo(i)){case 1:var d=qe;break;case 4:d=Rc;break;default:d=Ho}a=d.bind(null,i,a,n),d=void 0,!ws||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Vc(n,i,a,c,d){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var _=c.tag;if(_===3||_===4){var I=c.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(_===4)for(_=c.return;_!==null;){var k=_.tag;if((k===3||k===4)&&(k=_.stateNode.containerInfo,k===d||k.nodeType===8&&k.parentNode===d))return;_=_.return}for(;I!==null;){if(_=Vi(I),_===null)return;if(k=_.tag,k===5||k===6){c=m=_;continue e}I=I.parentNode}}c=c.return}bo(function(){var j=m,X=ys(a),Z=[];e:{var Q=qf.get(n);if(Q!==void 0){var ie=xs,ae=n;switch(n){case"keypress":if(Ns(a)===0)break e;case"keydown":case"keyup":ie=p;break;case"focusin":ae="focus",ie=Ms;break;case"focusout":ae="blur",ie=Ms;break;case"beforeblur":case"afterblur":ie=Ms;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ie=Os;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ie=yl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ie=z;break;case zf:case $f:case Hf:ie=mr;break;case Wf:ie=Ve;break;case"scroll":ie=Cc;break;case"wheel":ie=Ne;break;case"copy":case"cut":case"paste":ie=wl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ie=w}var ue=(i&4)!==0,rt=!ue&&n==="scroll",V=ue?Q!==null?Q+"Capture":null:Q;ue=[];for(var x=j,b;x!==null;){b=x;var te=b.stateNode;if(b.tag===5&&te!==null&&(b=te,V!==null&&(te=nt(x,V),te!=null&&ue.push(na(x,te,b)))),rt)break;x=x.return}0<ue.length&&(Q=new ie(Q,ae,null,a,X),Z.push({event:Q,listeners:ue}))}}if((i&7)===0){e:{if(Q=n==="mouseover"||n==="pointerover",ie=n==="mouseout"||n==="pointerout",Q&&a!==Ii&&(ae=a.relatedTarget||a.fromElement)&&(Vi(ae)||ae[gr]))break e;if((ie||Q)&&(Q=X.window===X?X:(Q=X.ownerDocument)?Q.defaultView||Q.parentWindow:window,ie?(ae=a.relatedTarget||a.toElement,ie=j,ae=ae?Vi(ae):null,ae!==null&&(rt=Tn(ae),ae!==rt||ae.tag!==5&&ae.tag!==6)&&(ae=null)):(ie=null,ae=j),ie!==ae)){if(ue=Os,te="onMouseLeave",V="onMouseEnter",x="mouse",(n==="pointerout"||n==="pointerover")&&(ue=w,te="onPointerLeave",V="onPointerEnter",x="pointer"),rt=ie==null?Q:$s(ie),b=ae==null?Q:$s(ae),Q=new ue(te,x+"leave",ie,a,X),Q.target=rt,Q.relatedTarget=b,te=null,Vi(X)===j&&(ue=new ue(V,x+"enter",ae,a,X),ue.target=b,ue.relatedTarget=rt,te=ue),rt=te,ie&&ae)t:{for(ue=ie,V=ae,x=0,b=ue;b;b=Bs(b))x++;for(b=0,te=V;te;te=Bs(te))b++;for(;0<x-b;)ue=Bs(ue),x--;for(;0<b-x;)V=Bs(V),b--;for(;x--;){if(ue===V||V!==null&&ue===V.alternate)break t;ue=Bs(ue),V=Bs(V)}ue=null}else ue=null;ie!==null&&Xf(Z,Q,ie,ue,!1),ae!==null&&rt!==null&&Xf(Z,rt,ae,ue,!0)}}e:{if(Q=j?$s(j):window,ie=Q.nodeName&&Q.nodeName.toLowerCase(),ie==="select"||ie==="input"&&Q.type==="file")var he=Y_;else if(Nf(Q))if(Df)he=ew;else{he=J_;var pe=X_}else(ie=Q.nodeName)&&ie.toLowerCase()==="input"&&(Q.type==="checkbox"||Q.type==="radio")&&(he=Z_);if(he&&(he=he(n,j))){xf(Z,he,a,X);break e}pe&&pe(n,Q,j),n==="focusout"&&(pe=Q._wrapperState)&&pe.controlled&&Q.type==="number"&&ps(Q,"number",Q.value)}switch(pe=j?$s(j):window,n){case"focusin":(Nf(pe)||pe.contentEditable==="true")&&(Us=pe,Nc=j,Zo=null);break;case"focusout":Zo=Nc=Us=null;break;case"mousedown":xc=!0;break;case"contextmenu":case"mouseup":case"dragend":xc=!1,jf(Z,a,X);break;case"selectionchange":if(rw)break;case"keydown":case"keyup":jf(Z,a,X)}var me;if(it)e:{switch(n){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else Fs?kf(n,a)&&(ve="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(Mi&&a.locale!=="ko"&&(Fs||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Fs&&(me=qo()):(nn=X,Ps="value"in nn?nn.value:nn.textContent,Fs=!0)),pe=kl(j,ve),0<pe.length&&(ve=new Qo(ve,n,null,a,X),Z.push({event:ve,listeners:pe}),me?ve.data=me:(me=Pf(a),me!==null&&(ve.data=me)))),(me=rn?q_(n,a):K_(n,a))&&(j=kl(j,"onBeforeInput"),0<j.length&&(X=new Qo("onBeforeInput","beforeinput",null,a,X),Z.push({event:X,listeners:j}),X.data=me))}Qf(Z,i)})}function na(n,i,a){return{instance:n,listener:i,currentTarget:a}}function kl(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=nt(n,a),m!=null&&c.unshift(na(n,m,d)),m=nt(n,i),m!=null&&c.push(na(n,m,d))),n=n.return}return c}function Bs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Xf(n,i,a,c,d){for(var m=i._reactName,_=[];a!==null&&a!==c;){var I=a,k=I.alternate,j=I.stateNode;if(k!==null&&k===c)break;I.tag===5&&j!==null&&(I=j,d?(k=nt(a,m),k!=null&&_.unshift(na(a,k,I))):d||(k=nt(a,m),k!=null&&_.push(na(a,k,I)))),a=a.return}_.length!==0&&n.push({event:i,listeners:_})}var aw=/\r\n?/g,lw=/\u0000|\uFFFD/g;function Jf(n){return(typeof n=="string"?n:""+n).replace(aw,`
`).replace(lw,"")}function Pl(n,i,a){if(i=Jf(i),Jf(n)!==i&&a)throw Error(t(425))}function Nl(){}var bc=null,Fc=null;function Uc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var jc=typeof setTimeout=="function"?setTimeout:void 0,uw=typeof clearTimeout=="function"?clearTimeout:void 0,Zf=typeof Promise=="function"?Promise:void 0,cw=typeof queueMicrotask=="function"?queueMicrotask:typeof Zf<"u"?function(n){return Zf.resolve(null).then(n).catch(hw)}:jc;function hw(n){setTimeout(function(){throw n})}function Bc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),An(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);An(i)}function Gr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function ep(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var zs=Math.random().toString(36).slice(2),Gn="__reactFiber$"+zs,ra="__reactProps$"+zs,gr="__reactContainer$"+zs,zc="__reactEvents$"+zs,dw="__reactListeners$"+zs,fw="__reactHandles$"+zs;function Vi(n){var i=n[Gn];if(i)return i;for(var a=n.parentNode;a;){if(i=a[gr]||a[Gn]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=ep(n);n!==null;){if(a=n[Gn])return a;n=ep(n)}return i}n=a,a=n.parentNode}return null}function ia(n){return n=n[Gn]||n[gr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function $s(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function xl(n){return n[ra]||null}var $c=[],Hs=-1;function Qr(n){return{current:n}}function We(n){0>Hs||(n.current=$c[Hs],$c[Hs]=null,Hs--)}function ze(n,i){Hs++,$c[Hs]=n.current,n.current=i}var Yr={},Nt=Qr(Yr),Wt=Qr(!1),bi=Yr;function Ws(n,i){var a=n.type.contextTypes;if(!a)return Yr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function qt(n){return n=n.childContextTypes,n!=null}function Dl(){We(Wt),We(Nt)}function tp(n,i,a){if(Nt.current!==Yr)throw Error(t(168));ze(Nt,i),ze(Wt,a)}function np(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,Le(n)||"Unknown",d));return se({},a,c)}function Ol(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Yr,bi=Nt.current,ze(Nt,n),ze(Wt,Wt.current),!0}function rp(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=np(n,i,bi),c.__reactInternalMemoizedMergedChildContext=n,We(Wt),We(Nt),ze(Nt,n)):We(Wt),ze(Wt,a)}var yr=null,Ll=!1,Hc=!1;function ip(n){yr===null?yr=[n]:yr.push(n)}function pw(n){Ll=!0,ip(n)}function Xr(){if(!Hc&&yr!==null){Hc=!0;var n=0,i=ke;try{var a=yr;for(ke=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}yr=null,Ll=!1}catch(d){throw yr!==null&&(yr=yr.slice(n+1)),Ss(ki,Xr),d}finally{ke=i,Hc=!1}}return null}var qs=[],Ks=0,Ml=null,Vl=0,fn=[],pn=0,Fi=null,vr=1,_r="";function Ui(n,i){qs[Ks++]=Vl,qs[Ks++]=Ml,Ml=n,Vl=i}function sp(n,i,a){fn[pn++]=vr,fn[pn++]=_r,fn[pn++]=Fi,Fi=n;var c=vr;n=_r;var d=32-Ut(c)-1;c&=~(1<<d),a+=1;var m=32-Ut(i)+d;if(30<m){var _=d-d%5;m=(c&(1<<_)-1).toString(32),c>>=_,d-=_,vr=1<<32-Ut(i)+d|a<<d|c,_r=m+n}else vr=1<<m|a<<d|c,_r=n}function Wc(n){n.return!==null&&(Ui(n,1),sp(n,1,0))}function qc(n){for(;n===Ml;)Ml=qs[--Ks],qs[Ks]=null,Vl=qs[--Ks],qs[Ks]=null;for(;n===Fi;)Fi=fn[--pn],fn[pn]=null,_r=fn[--pn],fn[pn]=null,vr=fn[--pn],fn[pn]=null}var sn=null,on=null,Ke=!1,Nn=null;function op(n,i){var a=vn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function ap(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,sn=n,on=Gr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,sn=n,on=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Fi!==null?{id:vr,overflow:_r}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=vn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,sn=n,on=null,!0):!1;default:return!1}}function Kc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Gc(n){if(Ke){var i=on;if(i){var a=i;if(!ap(n,i)){if(Kc(n))throw Error(t(418));i=Gr(a.nextSibling);var c=sn;i&&ap(n,i)?op(c,a):(n.flags=n.flags&-4097|2,Ke=!1,sn=n)}}else{if(Kc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ke=!1,sn=n}}}function lp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;sn=n}function bl(n){if(n!==sn)return!1;if(!Ke)return lp(n),Ke=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Uc(n.type,n.memoizedProps)),i&&(i=on)){if(Kc(n))throw up(),Error(t(418));for(;i;)op(n,i),i=Gr(i.nextSibling)}if(lp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){on=Gr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}on=null}}else on=sn?Gr(n.stateNode.nextSibling):null;return!0}function up(){for(var n=on;n;)n=Gr(n.nextSibling)}function Gs(){on=sn=null,Ke=!1}function Qc(n){Nn===null?Nn=[n]:Nn.push(n)}var mw=le.ReactCurrentBatchConfig;function sa(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(_){var I=d.refs;_===null?delete I[m]:I[m]=_},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Fl(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function cp(n){var i=n._init;return i(n._payload)}function hp(n){function i(V,x){if(n){var b=V.deletions;b===null?(V.deletions=[x],V.flags|=16):b.push(x)}}function a(V,x){if(!n)return null;for(;x!==null;)i(V,x),x=x.sibling;return null}function c(V,x){for(V=new Map;x!==null;)x.key!==null?V.set(x.key,x):V.set(x.index,x),x=x.sibling;return V}function d(V,x){return V=si(V,x),V.index=0,V.sibling=null,V}function m(V,x,b){return V.index=b,n?(b=V.alternate,b!==null?(b=b.index,b<x?(V.flags|=2,x):b):(V.flags|=2,x)):(V.flags|=1048576,x)}function _(V){return n&&V.alternate===null&&(V.flags|=2),V}function I(V,x,b,te){return x===null||x.tag!==6?(x=jh(b,V.mode,te),x.return=V,x):(x=d(x,b),x.return=V,x)}function k(V,x,b,te){var he=b.type;return he===N?X(V,x,b.props.children,te,b.key):x!==null&&(x.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Pt&&cp(he)===x.type)?(te=d(x,b.props),te.ref=sa(V,x,b),te.return=V,te):(te=lu(b.type,b.key,b.props,null,V.mode,te),te.ref=sa(V,x,b),te.return=V,te)}function j(V,x,b,te){return x===null||x.tag!==4||x.stateNode.containerInfo!==b.containerInfo||x.stateNode.implementation!==b.implementation?(x=Bh(b,V.mode,te),x.return=V,x):(x=d(x,b.children||[]),x.return=V,x)}function X(V,x,b,te,he){return x===null||x.tag!==7?(x=Ki(b,V.mode,te,he),x.return=V,x):(x=d(x,b),x.return=V,x)}function Z(V,x,b){if(typeof x=="string"&&x!==""||typeof x=="number")return x=jh(""+x,V.mode,b),x.return=V,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case we:return b=lu(x.type,x.key,x.props,null,V.mode,b),b.ref=sa(V,null,x),b.return=V,b;case _e:return x=Bh(x,V.mode,b),x.return=V,x;case Pt:var te=x._init;return Z(V,te(x._payload),b)}if(ar(x)||fe(x))return x=Ki(x,V.mode,b,null),x.return=V,x;Fl(V,x)}return null}function Q(V,x,b,te){var he=x!==null?x.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return he!==null?null:I(V,x,""+b,te);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case we:return b.key===he?k(V,x,b,te):null;case _e:return b.key===he?j(V,x,b,te):null;case Pt:return he=b._init,Q(V,x,he(b._payload),te)}if(ar(b)||fe(b))return he!==null?null:X(V,x,b,te,null);Fl(V,b)}return null}function ie(V,x,b,te,he){if(typeof te=="string"&&te!==""||typeof te=="number")return V=V.get(b)||null,I(x,V,""+te,he);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case we:return V=V.get(te.key===null?b:te.key)||null,k(x,V,te,he);case _e:return V=V.get(te.key===null?b:te.key)||null,j(x,V,te,he);case Pt:var pe=te._init;return ie(V,x,b,pe(te._payload),he)}if(ar(te)||fe(te))return V=V.get(b)||null,X(x,V,te,he,null);Fl(x,te)}return null}function ae(V,x,b,te){for(var he=null,pe=null,me=x,ve=x=0,gt=null;me!==null&&ve<b.length;ve++){me.index>ve?(gt=me,me=null):gt=me.sibling;var Oe=Q(V,me,b[ve],te);if(Oe===null){me===null&&(me=gt);break}n&&me&&Oe.alternate===null&&i(V,me),x=m(Oe,x,ve),pe===null?he=Oe:pe.sibling=Oe,pe=Oe,me=gt}if(ve===b.length)return a(V,me),Ke&&Ui(V,ve),he;if(me===null){for(;ve<b.length;ve++)me=Z(V,b[ve],te),me!==null&&(x=m(me,x,ve),pe===null?he=me:pe.sibling=me,pe=me);return Ke&&Ui(V,ve),he}for(me=c(V,me);ve<b.length;ve++)gt=ie(me,V,ve,b[ve],te),gt!==null&&(n&&gt.alternate!==null&&me.delete(gt.key===null?ve:gt.key),x=m(gt,x,ve),pe===null?he=gt:pe.sibling=gt,pe=gt);return n&&me.forEach(function(oi){return i(V,oi)}),Ke&&Ui(V,ve),he}function ue(V,x,b,te){var he=fe(b);if(typeof he!="function")throw Error(t(150));if(b=he.call(b),b==null)throw Error(t(151));for(var pe=he=null,me=x,ve=x=0,gt=null,Oe=b.next();me!==null&&!Oe.done;ve++,Oe=b.next()){me.index>ve?(gt=me,me=null):gt=me.sibling;var oi=Q(V,me,Oe.value,te);if(oi===null){me===null&&(me=gt);break}n&&me&&oi.alternate===null&&i(V,me),x=m(oi,x,ve),pe===null?he=oi:pe.sibling=oi,pe=oi,me=gt}if(Oe.done)return a(V,me),Ke&&Ui(V,ve),he;if(me===null){for(;!Oe.done;ve++,Oe=b.next())Oe=Z(V,Oe.value,te),Oe!==null&&(x=m(Oe,x,ve),pe===null?he=Oe:pe.sibling=Oe,pe=Oe);return Ke&&Ui(V,ve),he}for(me=c(V,me);!Oe.done;ve++,Oe=b.next())Oe=ie(me,V,ve,Oe.value,te),Oe!==null&&(n&&Oe.alternate!==null&&me.delete(Oe.key===null?ve:Oe.key),x=m(Oe,x,ve),pe===null?he=Oe:pe.sibling=Oe,pe=Oe);return n&&me.forEach(function(Gw){return i(V,Gw)}),Ke&&Ui(V,ve),he}function rt(V,x,b,te){if(typeof b=="object"&&b!==null&&b.type===N&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case we:e:{for(var he=b.key,pe=x;pe!==null;){if(pe.key===he){if(he=b.type,he===N){if(pe.tag===7){a(V,pe.sibling),x=d(pe,b.props.children),x.return=V,V=x;break e}}else if(pe.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Pt&&cp(he)===pe.type){a(V,pe.sibling),x=d(pe,b.props),x.ref=sa(V,pe,b),x.return=V,V=x;break e}a(V,pe);break}else i(V,pe);pe=pe.sibling}b.type===N?(x=Ki(b.props.children,V.mode,te,b.key),x.return=V,V=x):(te=lu(b.type,b.key,b.props,null,V.mode,te),te.ref=sa(V,x,b),te.return=V,V=te)}return _(V);case _e:e:{for(pe=b.key;x!==null;){if(x.key===pe)if(x.tag===4&&x.stateNode.containerInfo===b.containerInfo&&x.stateNode.implementation===b.implementation){a(V,x.sibling),x=d(x,b.children||[]),x.return=V,V=x;break e}else{a(V,x);break}else i(V,x);x=x.sibling}x=Bh(b,V.mode,te),x.return=V,V=x}return _(V);case Pt:return pe=b._init,rt(V,x,pe(b._payload),te)}if(ar(b))return ae(V,x,b,te);if(fe(b))return ue(V,x,b,te);Fl(V,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,x!==null&&x.tag===6?(a(V,x.sibling),x=d(x,b),x.return=V,V=x):(a(V,x),x=jh(b,V.mode,te),x.return=V,V=x),_(V)):a(V,x)}return rt}var Qs=hp(!0),dp=hp(!1),Ul=Qr(null),jl=null,Ys=null,Yc=null;function Xc(){Yc=Ys=jl=null}function Jc(n){var i=Ul.current;We(Ul),n._currentValue=i}function Zc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Xs(n,i){jl=n,Yc=Ys=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Kt=!0),n.firstContext=null)}function mn(n){var i=n._currentValue;if(Yc!==n)if(n={context:n,memoizedValue:i,next:null},Ys===null){if(jl===null)throw Error(t(308));Ys=n,jl.dependencies={lanes:0,firstContext:n}}else Ys=Ys.next=n;return i}var ji=null;function eh(n){ji===null?ji=[n]:ji.push(n)}function fp(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,eh(i)):(a.next=d.next,d.next=a),i.interleaved=a,wr(n,c)}function wr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Jr=!1;function th(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Er(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Zr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(De&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,wr(n,a)}return d=c.interleaved,d===null?(i.next=i,eh(c)):(i.next=d.next,d.next=i),c.interleaved=i,wr(n,a)}function Bl(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,zr(n,a)}}function mp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var _={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=_:m=m.next=_,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function zl(n,i,a,c){var d=n.updateQueue;Jr=!1;var m=d.firstBaseUpdate,_=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var k=I,j=k.next;k.next=null,_===null?m=j:_.next=j,_=k;var X=n.alternate;X!==null&&(X=X.updateQueue,I=X.lastBaseUpdate,I!==_&&(I===null?X.firstBaseUpdate=j:I.next=j,X.lastBaseUpdate=k))}if(m!==null){var Z=d.baseState;_=0,X=j=k=null,I=m;do{var Q=I.lane,ie=I.eventTime;if((c&Q)===Q){X!==null&&(X=X.next={eventTime:ie,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var ae=n,ue=I;switch(Q=i,ie=a,ue.tag){case 1:if(ae=ue.payload,typeof ae=="function"){Z=ae.call(ie,Z,Q);break e}Z=ae;break e;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=ue.payload,Q=typeof ae=="function"?ae.call(ie,Z,Q):ae,Q==null)break e;Z=se({},Z,Q);break e;case 2:Jr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,Q=d.effects,Q===null?d.effects=[I]:Q.push(I))}else ie={eventTime:ie,lane:Q,tag:I.tag,payload:I.payload,callback:I.callback,next:null},X===null?(j=X=ie,k=Z):X=X.next=ie,_|=Q;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;Q=I,I=Q.next,Q.next=null,d.lastBaseUpdate=Q,d.shared.pending=null}}while(!0);if(X===null&&(k=Z),d.baseState=k,d.firstBaseUpdate=j,d.lastBaseUpdate=X,i=d.shared.interleaved,i!==null){d=i;do _|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);$i|=_,n.lanes=_,n.memoizedState=Z}}function gp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var oa={},Qn=Qr(oa),aa=Qr(oa),la=Qr(oa);function Bi(n){if(n===oa)throw Error(t(174));return n}function nh(n,i){switch(ze(la,i),ze(aa,n),ze(Qn,oa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:lt(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=lt(i,n)}We(Qn),ze(Qn,i)}function Js(){We(Qn),We(aa),We(la)}function yp(n){Bi(la.current);var i=Bi(Qn.current),a=lt(i,n.type);i!==a&&(ze(aa,n),ze(Qn,a))}function rh(n){aa.current===n&&(We(Qn),We(aa))}var Qe=Qr(0);function $l(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ih=[];function sh(){for(var n=0;n<ih.length;n++)ih[n]._workInProgressVersionPrimary=null;ih.length=0}var Hl=le.ReactCurrentDispatcher,oh=le.ReactCurrentBatchConfig,zi=0,Ye=null,ct=null,pt=null,Wl=!1,ua=!1,ca=0,gw=0;function xt(){throw Error(t(321))}function ah(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Pn(n[a],i[a]))return!1;return!0}function lh(n,i,a,c,d,m){if(zi=m,Ye=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Hl.current=n===null||n.memoizedState===null?ww:Ew,n=a(c,d),ua){m=0;do{if(ua=!1,ca=0,25<=m)throw Error(t(301));m+=1,pt=ct=null,i.updateQueue=null,Hl.current=Tw,n=a(c,d)}while(ua)}if(Hl.current=Gl,i=ct!==null&&ct.next!==null,zi=0,pt=ct=Ye=null,Wl=!1,i)throw Error(t(300));return n}function uh(){var n=ca!==0;return ca=0,n}function Yn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pt===null?Ye.memoizedState=pt=n:pt=pt.next=n,pt}function gn(){if(ct===null){var n=Ye.alternate;n=n!==null?n.memoizedState:null}else n=ct.next;var i=pt===null?Ye.memoizedState:pt.next;if(i!==null)pt=i,ct=n;else{if(n===null)throw Error(t(310));ct=n,n={memoizedState:ct.memoizedState,baseState:ct.baseState,baseQueue:ct.baseQueue,queue:ct.queue,next:null},pt===null?Ye.memoizedState=pt=n:pt=pt.next=n}return pt}function ha(n,i){return typeof i=="function"?i(n):i}function ch(n){var i=gn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=ct,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var _=d.next;d.next=m.next,m.next=_}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var I=_=null,k=null,j=m;do{var X=j.lane;if((zi&X)===X)k!==null&&(k=k.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),c=j.hasEagerState?j.eagerState:n(c,j.action);else{var Z={lane:X,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};k===null?(I=k=Z,_=c):k=k.next=Z,Ye.lanes|=X,$i|=X}j=j.next}while(j!==null&&j!==m);k===null?_=c:k.next=I,Pn(c,i.memoizedState)||(Kt=!0),i.memoizedState=c,i.baseState=_,i.baseQueue=k,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,Ye.lanes|=m,$i|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function hh(n){var i=gn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var _=d=d.next;do m=n(m,_.action),_=_.next;while(_!==d);Pn(m,i.memoizedState)||(Kt=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function vp(){}function _p(n,i){var a=Ye,c=gn(),d=i(),m=!Pn(c.memoizedState,d);if(m&&(c.memoizedState=d,Kt=!0),c=c.queue,dh(Tp.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||pt!==null&&pt.memoizedState.tag&1){if(a.flags|=2048,da(9,Ep.bind(null,a,c,d,i),void 0,null),mt===null)throw Error(t(349));(zi&30)!==0||wp(a,i,d)}return d}function wp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Ye.updateQueue,i===null?(i={lastEffect:null,stores:null},Ye.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Ep(n,i,a,c){i.value=a,i.getSnapshot=c,Ip(i)&&Sp(n)}function Tp(n,i,a){return a(function(){Ip(i)&&Sp(n)})}function Ip(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Pn(n,a)}catch{return!0}}function Sp(n){var i=wr(n,1);i!==null&&Ln(i,n,1,-1)}function Rp(n){var i=Yn();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:n},i.queue=n,n=n.dispatch=_w.bind(null,Ye,n),[i.memoizedState,n]}function da(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Ye.updateQueue,i===null?(i={lastEffect:null,stores:null},Ye.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Cp(){return gn().memoizedState}function ql(n,i,a,c){var d=Yn();Ye.flags|=n,d.memoizedState=da(1|i,a,void 0,c===void 0?null:c)}function Kl(n,i,a,c){var d=gn();c=c===void 0?null:c;var m=void 0;if(ct!==null){var _=ct.memoizedState;if(m=_.destroy,c!==null&&ah(c,_.deps)){d.memoizedState=da(i,a,m,c);return}}Ye.flags|=n,d.memoizedState=da(1|i,a,m,c)}function Ap(n,i){return ql(8390656,8,n,i)}function dh(n,i){return Kl(2048,8,n,i)}function kp(n,i){return Kl(4,2,n,i)}function Pp(n,i){return Kl(4,4,n,i)}function Np(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function xp(n,i,a){return a=a!=null?a.concat([n]):null,Kl(4,4,Np.bind(null,i,n),a)}function fh(){}function Dp(n,i){var a=gn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&ah(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Op(n,i){var a=gn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&ah(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Lp(n,i,a){return(zi&21)===0?(n.baseState&&(n.baseState=!1,Kt=!0),n.memoizedState=a):(Pn(a,i)||(a=xi(),Ye.lanes|=a,$i|=a,n.baseState=!0),i)}function yw(n,i){var a=ke;ke=a!==0&&4>a?a:4,n(!0);var c=oh.transition;oh.transition={};try{n(!1),i()}finally{ke=a,oh.transition=c}}function Mp(){return gn().memoizedState}function vw(n,i,a){var c=ri(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Vp(n))bp(i,a);else if(a=fp(n,i,a,c),a!==null){var d=zt();Ln(a,n,c,d),Fp(a,i,c)}}function _w(n,i,a){var c=ri(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Vp(n))bp(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var _=i.lastRenderedState,I=m(_,a);if(d.hasEagerState=!0,d.eagerState=I,Pn(I,_)){var k=i.interleaved;k===null?(d.next=d,eh(i)):(d.next=k.next,k.next=d),i.interleaved=d;return}}catch{}finally{}a=fp(n,i,d,c),a!==null&&(d=zt(),Ln(a,n,c,d),Fp(a,i,c))}}function Vp(n){var i=n.alternate;return n===Ye||i!==null&&i===Ye}function bp(n,i){ua=Wl=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Fp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,zr(n,a)}}var Gl={readContext:mn,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useInsertionEffect:xt,useLayoutEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useMutableSource:xt,useSyncExternalStore:xt,useId:xt,unstable_isNewReconciler:!1},ww={readContext:mn,useCallback:function(n,i){return Yn().memoizedState=[n,i===void 0?null:i],n},useContext:mn,useEffect:Ap,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,ql(4194308,4,Np.bind(null,i,n),a)},useLayoutEffect:function(n,i){return ql(4194308,4,n,i)},useInsertionEffect:function(n,i){return ql(4,2,n,i)},useMemo:function(n,i){var a=Yn();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Yn();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=vw.bind(null,Ye,n),[c.memoizedState,n]},useRef:function(n){var i=Yn();return n={current:n},i.memoizedState=n},useState:Rp,useDebugValue:fh,useDeferredValue:function(n){return Yn().memoizedState=n},useTransition:function(){var n=Rp(!1),i=n[0];return n=yw.bind(null,n[1]),Yn().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Ye,d=Yn();if(Ke){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),mt===null)throw Error(t(349));(zi&30)!==0||wp(c,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,Ap(Tp.bind(null,c,m,n),[n]),c.flags|=2048,da(9,Ep.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=Yn(),i=mt.identifierPrefix;if(Ke){var a=_r,c=vr;a=(c&~(1<<32-Ut(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=ca++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=gw++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Ew={readContext:mn,useCallback:Dp,useContext:mn,useEffect:dh,useImperativeHandle:xp,useInsertionEffect:kp,useLayoutEffect:Pp,useMemo:Op,useReducer:ch,useRef:Cp,useState:function(){return ch(ha)},useDebugValue:fh,useDeferredValue:function(n){var i=gn();return Lp(i,ct.memoizedState,n)},useTransition:function(){var n=ch(ha)[0],i=gn().memoizedState;return[n,i]},useMutableSource:vp,useSyncExternalStore:_p,useId:Mp,unstable_isNewReconciler:!1},Tw={readContext:mn,useCallback:Dp,useContext:mn,useEffect:dh,useImperativeHandle:xp,useInsertionEffect:kp,useLayoutEffect:Pp,useMemo:Op,useReducer:hh,useRef:Cp,useState:function(){return hh(ha)},useDebugValue:fh,useDeferredValue:function(n){var i=gn();return ct===null?i.memoizedState=n:Lp(i,ct.memoizedState,n)},useTransition:function(){var n=hh(ha)[0],i=gn().memoizedState;return[n,i]},useMutableSource:vp,useSyncExternalStore:_p,useId:Mp,unstable_isNewReconciler:!1};function xn(n,i){if(n&&n.defaultProps){i=se({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function ph(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:se({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Ql={isMounted:function(n){return(n=n._reactInternals)?Tn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=zt(),d=ri(n),m=Er(c,d);m.payload=i,a!=null&&(m.callback=a),i=Zr(n,m,d),i!==null&&(Ln(i,n,d,c),Bl(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=zt(),d=ri(n),m=Er(c,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=Zr(n,m,d),i!==null&&(Ln(i,n,d,c),Bl(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=zt(),c=ri(n),d=Er(a,c);d.tag=2,i!=null&&(d.callback=i),i=Zr(n,d,c),i!==null&&(Ln(i,n,c,a),Bl(i,n,c))}};function Up(n,i,a,c,d,m,_){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,_):i.prototype&&i.prototype.isPureReactComponent?!Jo(a,c)||!Jo(d,m):!0}function jp(n,i,a){var c=!1,d=Yr,m=i.contextType;return typeof m=="object"&&m!==null?m=mn(m):(d=qt(i)?bi:Nt.current,c=i.contextTypes,m=(c=c!=null)?Ws(n,d):Yr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ql,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function Bp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Ql.enqueueReplaceState(i,i.state,null)}function mh(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},th(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=mn(m):(m=qt(i)?bi:Nt.current,d.context=Ws(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(ph(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Ql.enqueueReplaceState(d,d.state,null),zl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Zs(n,i){try{var a="",c=i;do a+=Ie(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function gh(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function yh(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Iw=typeof WeakMap=="function"?WeakMap:Map;function zp(n,i,a){a=Er(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){nu||(nu=!0,Dh=c),yh(n,i)},a}function $p(n,i,a){a=Er(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){yh(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){yh(n,i),typeof c!="function"&&(ti===null?ti=new Set([this]):ti.add(this));var _=i.stack;this.componentDidCatch(i.value,{componentStack:_!==null?_:""})}),a}function Hp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Iw;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=bw.bind(null,n,i,a),i.then(n,n))}function Wp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function qp(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Er(-1,1),i.tag=2,Zr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var Sw=le.ReactCurrentOwner,Kt=!1;function Bt(n,i,a,c){i.child=n===null?dp(i,null,a,c):Qs(i,n.child,a,c)}function Kp(n,i,a,c,d){a=a.render;var m=i.ref;return Xs(i,d),c=lh(n,i,a,c,m,d),a=uh(),n!==null&&!Kt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Tr(n,i,d)):(Ke&&a&&Wc(i),i.flags|=1,Bt(n,i,c,d),i.child)}function Gp(n,i,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!Uh(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,Qp(n,i,m,c,d)):(n=lu(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var _=m.memoizedProps;if(a=a.compare,a=a!==null?a:Jo,a(_,c)&&n.ref===i.ref)return Tr(n,i,d)}return i.flags|=1,n=si(m,c),n.ref=i.ref,n.return=i,i.child=n}function Qp(n,i,a,c,d){if(n!==null){var m=n.memoizedProps;if(Jo(m,c)&&n.ref===i.ref)if(Kt=!1,i.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Kt=!0);else return i.lanes=n.lanes,Tr(n,i,d)}return vh(n,i,a,c,d)}function Yp(n,i,a){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},ze(to,an),an|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,ze(to,an),an|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,ze(to,an),an|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,ze(to,an),an|=c;return Bt(n,i,d,a),i.child}function Xp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function vh(n,i,a,c,d){var m=qt(a)?bi:Nt.current;return m=Ws(i,m),Xs(i,d),a=lh(n,i,a,c,m,d),c=uh(),n!==null&&!Kt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Tr(n,i,d)):(Ke&&c&&Wc(i),i.flags|=1,Bt(n,i,a,d),i.child)}function Jp(n,i,a,c,d){if(qt(a)){var m=!0;Ol(i)}else m=!1;if(Xs(i,d),i.stateNode===null)Xl(n,i),jp(i,a,c),mh(i,a,c,d),c=!0;else if(n===null){var _=i.stateNode,I=i.memoizedProps;_.props=I;var k=_.context,j=a.contextType;typeof j=="object"&&j!==null?j=mn(j):(j=qt(a)?bi:Nt.current,j=Ws(i,j));var X=a.getDerivedStateFromProps,Z=typeof X=="function"||typeof _.getSnapshotBeforeUpdate=="function";Z||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(I!==c||k!==j)&&Bp(i,_,c,j),Jr=!1;var Q=i.memoizedState;_.state=Q,zl(i,c,_,d),k=i.memoizedState,I!==c||Q!==k||Wt.current||Jr?(typeof X=="function"&&(ph(i,a,X,c),k=i.memoizedState),(I=Jr||Up(i,a,I,c,Q,k,j))?(Z||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(i.flags|=4194308)):(typeof _.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=k),_.props=c,_.state=k,_.context=j,c=I):(typeof _.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{_=i.stateNode,pp(n,i),I=i.memoizedProps,j=i.type===i.elementType?I:xn(i.type,I),_.props=j,Z=i.pendingProps,Q=_.context,k=a.contextType,typeof k=="object"&&k!==null?k=mn(k):(k=qt(a)?bi:Nt.current,k=Ws(i,k));var ie=a.getDerivedStateFromProps;(X=typeof ie=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(I!==Z||Q!==k)&&Bp(i,_,c,k),Jr=!1,Q=i.memoizedState,_.state=Q,zl(i,c,_,d);var ae=i.memoizedState;I!==Z||Q!==ae||Wt.current||Jr?(typeof ie=="function"&&(ph(i,a,ie,c),ae=i.memoizedState),(j=Jr||Up(i,a,j,c,Q,ae,k)||!1)?(X||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,ae,k),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,ae,k)),typeof _.componentDidUpdate=="function"&&(i.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof _.componentDidUpdate!="function"||I===n.memoizedProps&&Q===n.memoizedState||(i.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&Q===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ae),_.props=c,_.state=ae,_.context=k,c=j):(typeof _.componentDidUpdate!="function"||I===n.memoizedProps&&Q===n.memoizedState||(i.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&Q===n.memoizedState||(i.flags|=1024),c=!1)}return _h(n,i,a,c,m,d)}function _h(n,i,a,c,d,m){Xp(n,i);var _=(i.flags&128)!==0;if(!c&&!_)return d&&rp(i,a,!1),Tr(n,i,m);c=i.stateNode,Sw.current=i;var I=_&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&_?(i.child=Qs(i,n.child,null,m),i.child=Qs(i,null,I,m)):Bt(n,i,I,m),i.memoizedState=c.state,d&&rp(i,a,!0),i.child}function Zp(n){var i=n.stateNode;i.pendingContext?tp(n,i.pendingContext,i.pendingContext!==i.context):i.context&&tp(n,i.context,!1),nh(n,i.containerInfo)}function em(n,i,a,c,d){return Gs(),Qc(d),i.flags|=256,Bt(n,i,a,c),i.child}var wh={dehydrated:null,treeContext:null,retryLane:0};function Eh(n){return{baseLanes:n,cachePool:null,transitions:null}}function tm(n,i,a){var c=i.pendingProps,d=Qe.current,m=!1,_=(i.flags&128)!==0,I;if((I=_)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),ze(Qe,d&1),n===null)return Gc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(_=c.children,n=c.fallback,m?(c=i.mode,m=i.child,_={mode:"hidden",children:_},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=_):m=uu(_,c,0,null),n=Ki(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=Eh(a),i.memoizedState=wh,n):Th(i,_));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return Rw(n,i,_,c,I,d,a);if(m){m=c.fallback,_=i.mode,d=n.child,I=d.sibling;var k={mode:"hidden",children:c.children};return(_&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=k,i.deletions=null):(c=si(d,k),c.subtreeFlags=d.subtreeFlags&14680064),I!==null?m=si(I,m):(m=Ki(m,_,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,_=n.child.memoizedState,_=_===null?Eh(a):{baseLanes:_.baseLanes|a,cachePool:null,transitions:_.transitions},m.memoizedState=_,m.childLanes=n.childLanes&~a,i.memoizedState=wh,c}return m=n.child,n=m.sibling,c=si(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Th(n,i){return i=uu({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Yl(n,i,a,c){return c!==null&&Qc(c),Qs(i,n.child,null,a),n=Th(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Rw(n,i,a,c,d,m,_){if(a)return i.flags&256?(i.flags&=-257,c=gh(Error(t(422))),Yl(n,i,_,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=uu({mode:"visible",children:c.children},d,0,null),m=Ki(m,d,_,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&Qs(i,n.child,null,_),i.child.memoizedState=Eh(_),i.memoizedState=wh,m);if((i.mode&1)===0)return Yl(n,i,_,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var I=c.dgst;return c=I,m=Error(t(419)),c=gh(m,c,void 0),Yl(n,i,_,c)}if(I=(_&n.childLanes)!==0,Kt||I){if(c=mt,c!==null){switch(_&-_){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|_))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,wr(n,d),Ln(c,n,d,-1))}return Fh(),c=gh(Error(t(421))),Yl(n,i,_,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=Fw.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,on=Gr(d.nextSibling),sn=i,Ke=!0,Nn=null,n!==null&&(fn[pn++]=vr,fn[pn++]=_r,fn[pn++]=Fi,vr=n.id,_r=n.overflow,Fi=i),i=Th(i,c.children),i.flags|=4096,i)}function nm(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Zc(n.return,i,a)}function Ih(n,i,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function rm(n,i,a){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(Bt(n,i,c.children,a),c=Qe.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&nm(n,a,i);else if(n.tag===19)nm(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(ze(Qe,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&$l(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Ih(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&$l(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Ih(i,!0,a,null,m);break;case"together":Ih(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Xl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Tr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),$i|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=si(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=si(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Cw(n,i,a){switch(i.tag){case 3:Zp(i),Gs();break;case 5:yp(i);break;case 1:qt(i.type)&&Ol(i);break;case 4:nh(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;ze(Ul,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(ze(Qe,Qe.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?tm(n,i,a):(ze(Qe,Qe.current&1),n=Tr(n,i,a),n!==null?n.sibling:null);ze(Qe,Qe.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return rm(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),ze(Qe,Qe.current),c)break;return null;case 22:case 23:return i.lanes=0,Yp(n,i,a)}return Tr(n,i,a)}var im,Sh,sm,om;im=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Sh=function(){},sm=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,Bi(Qn.current);var m=null;switch(a){case"input":d=wi(n,d),c=wi(n,c),m=[];break;case"select":d=se({},d,{value:void 0}),c=se({},c,{value:void 0}),m=[];break;case"textarea":d=Ao(n,d),c=Ao(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Nl)}Oo(a,c);var _;a=null;for(j in d)if(!c.hasOwnProperty(j)&&d.hasOwnProperty(j)&&d[j]!=null)if(j==="style"){var I=d[j];for(_ in I)I.hasOwnProperty(_)&&(a||(a={}),a[_]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(o.hasOwnProperty(j)?m||(m=[]):(m=m||[]).push(j,null));for(j in c){var k=c[j];if(I=d!=null?d[j]:void 0,c.hasOwnProperty(j)&&k!==I&&(k!=null||I!=null))if(j==="style")if(I){for(_ in I)!I.hasOwnProperty(_)||k&&k.hasOwnProperty(_)||(a||(a={}),a[_]="");for(_ in k)k.hasOwnProperty(_)&&I[_]!==k[_]&&(a||(a={}),a[_]=k[_])}else a||(m||(m=[]),m.push(j,a)),a=k;else j==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,I=I?I.__html:void 0,k!=null&&I!==k&&(m=m||[]).push(j,k)):j==="children"?typeof k!="string"&&typeof k!="number"||(m=m||[]).push(j,""+k):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(o.hasOwnProperty(j)?(k!=null&&j==="onScroll"&&He("scroll",n),m||I===k||(m=[])):(m=m||[]).push(j,k))}a&&(m=m||[]).push("style",a);var j=m;(i.updateQueue=j)&&(i.flags|=4)}},om=function(n,i,a,c){a!==c&&(i.flags|=4)};function fa(n,i){if(!Ke)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Dt(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function Aw(n,i,a){var c=i.pendingProps;switch(qc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dt(i),null;case 1:return qt(i.type)&&Dl(),Dt(i),null;case 3:return c=i.stateNode,Js(),We(Wt),We(Nt),sh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(bl(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Nn!==null&&(Mh(Nn),Nn=null))),Sh(n,i),Dt(i),null;case 5:rh(i);var d=Bi(la.current);if(a=i.type,n!==null&&i.stateNode!=null)sm(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Dt(i),null}if(n=Bi(Qn.current),bl(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[Gn]=i,c[ra]=m,n=(i.mode&1)!==0,a){case"dialog":He("cancel",c),He("close",c);break;case"iframe":case"object":case"embed":He("load",c);break;case"video":case"audio":for(d=0;d<ea.length;d++)He(ea[d],c);break;case"source":He("error",c);break;case"img":case"image":case"link":He("error",c),He("load",c);break;case"details":He("toggle",c);break;case"input":fs(c,m),He("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},He("invalid",c);break;case"textarea":ms(c,m),He("invalid",c)}Oo(a,m),d=null;for(var _ in m)if(m.hasOwnProperty(_)){var I=m[_];_==="children"?typeof I=="string"?c.textContent!==I&&(m.suppressHydrationWarning!==!0&&Pl(c.textContent,I,n),d=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(m.suppressHydrationWarning!==!0&&Pl(c.textContent,I,n),d=["children",""+I]):o.hasOwnProperty(_)&&I!=null&&_==="onScroll"&&He("scroll",c)}switch(a){case"input":or(c),tl(c,m,!0);break;case"textarea":or(c),ko(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Nl)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{_=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=at(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=_.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=_.createElement(a,{is:c.is}):(n=_.createElement(a),a==="select"&&(_=n,c.multiple?_.multiple=!0:c.size&&(_.size=c.size))):n=_.createElementNS(n,a),n[Gn]=i,n[ra]=c,im(n,i,!1,!1),i.stateNode=n;e:{switch(_=Lo(a,c),a){case"dialog":He("cancel",n),He("close",n),d=c;break;case"iframe":case"object":case"embed":He("load",n),d=c;break;case"video":case"audio":for(d=0;d<ea.length;d++)He(ea[d],n);d=c;break;case"source":He("error",n),d=c;break;case"img":case"image":case"link":He("error",n),He("load",n),d=c;break;case"details":He("toggle",n),d=c;break;case"input":fs(n,c),d=wi(n,c),He("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=se({},c,{value:void 0}),He("invalid",n);break;case"textarea":ms(n,c),d=Ao(n,c),He("invalid",n);break;default:d=c}Oo(a,d),I=d;for(m in I)if(I.hasOwnProperty(m)){var k=I[m];m==="style"?xo(n,k):m==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Po(n,k)):m==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&br(n,k):typeof k=="number"&&br(n,""+k):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?k!=null&&m==="onScroll"&&He("scroll",n):k!=null&&Y(n,m,k,_))}switch(a){case"input":or(n),tl(n,c,!1);break;case"textarea":or(n),ko(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Me(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?lr(n,!!c.multiple,m,!1):c.defaultValue!=null&&lr(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Nl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Dt(i),null;case 6:if(n&&i.stateNode!=null)om(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Bi(la.current),Bi(Qn.current),bl(i)){if(c=i.stateNode,a=i.memoizedProps,c[Gn]=i,(m=c.nodeValue!==a)&&(n=sn,n!==null))switch(n.tag){case 3:Pl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Pl(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Gn]=i,i.stateNode=c}return Dt(i),null;case 13:if(We(Qe),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ke&&on!==null&&(i.mode&1)!==0&&(i.flags&128)===0)up(),Gs(),i.flags|=98560,m=!1;else if(m=bl(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Gn]=i}else Gs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Dt(i),m=!1}else Nn!==null&&(Mh(Nn),Nn=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Qe.current&1)!==0?ht===0&&(ht=3):Fh())),i.updateQueue!==null&&(i.flags|=4),Dt(i),null);case 4:return Js(),Sh(n,i),n===null&&ta(i.stateNode.containerInfo),Dt(i),null;case 10:return Jc(i.type._context),Dt(i),null;case 17:return qt(i.type)&&Dl(),Dt(i),null;case 19:if(We(Qe),m=i.memoizedState,m===null)return Dt(i),null;if(c=(i.flags&128)!==0,_=m.rendering,_===null)if(c)fa(m,!1);else{if(ht!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(_=$l(n),_!==null){for(i.flags|=128,fa(m,!1),c=_.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,_=m.alternate,_===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=_.childLanes,m.lanes=_.lanes,m.child=_.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=_.memoizedProps,m.memoizedState=_.memoizedState,m.updateQueue=_.updateQueue,m.type=_.type,n=_.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return ze(Qe,Qe.current&1|2),i.child}n=n.sibling}m.tail!==null&&Be()>no&&(i.flags|=128,c=!0,fa(m,!1),i.lanes=4194304)}else{if(!c)if(n=$l(_),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),fa(m,!0),m.tail===null&&m.tailMode==="hidden"&&!_.alternate&&!Ke)return Dt(i),null}else 2*Be()-m.renderingStartTime>no&&a!==1073741824&&(i.flags|=128,c=!0,fa(m,!1),i.lanes=4194304);m.isBackwards?(_.sibling=i.child,i.child=_):(a=m.last,a!==null?a.sibling=_:i.child=_,m.last=_)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Be(),i.sibling=null,a=Qe.current,ze(Qe,c?a&1|2:a&1),i):(Dt(i),null);case 22:case 23:return bh(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(an&1073741824)!==0&&(Dt(i),i.subtreeFlags&6&&(i.flags|=8192)):Dt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function kw(n,i){switch(qc(i),i.tag){case 1:return qt(i.type)&&Dl(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Js(),We(Wt),We(Nt),sh(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return rh(i),null;case 13:if(We(Qe),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Gs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return We(Qe),null;case 4:return Js(),null;case 10:return Jc(i.type._context),null;case 22:case 23:return bh(),null;case 24:return null;default:return null}}var Jl=!1,Ot=!1,Pw=typeof WeakSet=="function"?WeakSet:Set,oe=null;function eo(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Je(n,i,c)}else a.current=null}function Rh(n,i,a){try{a()}catch(c){Je(n,i,c)}}var am=!1;function Nw(n,i){if(bc=Wr,n=Uf(),Pc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var _=0,I=-1,k=-1,j=0,X=0,Z=n,Q=null;t:for(;;){for(var ie;Z!==a||d!==0&&Z.nodeType!==3||(I=_+d),Z!==m||c!==0&&Z.nodeType!==3||(k=_+c),Z.nodeType===3&&(_+=Z.nodeValue.length),(ie=Z.firstChild)!==null;)Q=Z,Z=ie;for(;;){if(Z===n)break t;if(Q===a&&++j===d&&(I=_),Q===m&&++X===c&&(k=_),(ie=Z.nextSibling)!==null)break;Z=Q,Q=Z.parentNode}Z=ie}a=I===-1||k===-1?null:{start:I,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(Fc={focusedElem:n,selectionRange:a},Wr=!1,oe=i;oe!==null;)if(i=oe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,oe=n;else for(;oe!==null;){i=oe;try{var ae=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ae!==null){var ue=ae.memoizedProps,rt=ae.memoizedState,V=i.stateNode,x=V.getSnapshotBeforeUpdate(i.elementType===i.type?ue:xn(i.type,ue),rt);V.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var b=i.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(te){Je(i,i.return,te)}if(n=i.sibling,n!==null){n.return=i.return,oe=n;break}oe=i.return}return ae=am,am=!1,ae}function pa(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&Rh(i,a,m)}d=d.next}while(d!==c)}}function Zl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Ch(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function lm(n){var i=n.alternate;i!==null&&(n.alternate=null,lm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Gn],delete i[ra],delete i[zc],delete i[dw],delete i[fw])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function um(n){return n.tag===5||n.tag===3||n.tag===4}function cm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||um(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ah(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Nl));else if(c!==4&&(n=n.child,n!==null))for(Ah(n,i,a),n=n.sibling;n!==null;)Ah(n,i,a),n=n.sibling}function kh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(kh(n,i,a),n=n.sibling;n!==null;)kh(n,i,a),n=n.sibling}var Tt=null,Dn=!1;function ei(n,i,a){for(a=a.child;a!==null;)hm(n,i,a),a=a.sibling}function hm(n,i,a){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(Pi,a)}catch{}switch(a.tag){case 5:Ot||eo(a,i);case 6:var c=Tt,d=Dn;Tt=null,ei(n,i,a),Tt=c,Dn=d,Tt!==null&&(Dn?(n=Tt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Tt.removeChild(a.stateNode));break;case 18:Tt!==null&&(Dn?(n=Tt,a=a.stateNode,n.nodeType===8?Bc(n.parentNode,a):n.nodeType===1&&Bc(n,a),An(n)):Bc(Tt,a.stateNode));break;case 4:c=Tt,d=Dn,Tt=a.stateNode.containerInfo,Dn=!0,ei(n,i,a),Tt=c,Dn=d;break;case 0:case 11:case 14:case 15:if(!Ot&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,_=m.destroy;m=m.tag,_!==void 0&&((m&2)!==0||(m&4)!==0)&&Rh(a,i,_),d=d.next}while(d!==c)}ei(n,i,a);break;case 1:if(!Ot&&(eo(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(I){Je(a,i,I)}ei(n,i,a);break;case 21:ei(n,i,a);break;case 22:a.mode&1?(Ot=(c=Ot)||a.memoizedState!==null,ei(n,i,a),Ot=c):ei(n,i,a);break;default:ei(n,i,a)}}function dm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Pw),i.forEach(function(c){var d=Uw.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function On(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,_=i,I=_;e:for(;I!==null;){switch(I.tag){case 5:Tt=I.stateNode,Dn=!1;break e;case 3:Tt=I.stateNode.containerInfo,Dn=!0;break e;case 4:Tt=I.stateNode.containerInfo,Dn=!0;break e}I=I.return}if(Tt===null)throw Error(t(160));hm(m,_,d),Tt=null,Dn=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch(j){Je(d,i,j)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)fm(i,n),i=i.sibling}function fm(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(On(i,n),Xn(n),c&4){try{pa(3,n,n.return),Zl(3,n)}catch(ue){Je(n,n.return,ue)}try{pa(5,n,n.return)}catch(ue){Je(n,n.return,ue)}}break;case 1:On(i,n),Xn(n),c&512&&a!==null&&eo(a,a.return);break;case 5:if(On(i,n),Xn(n),c&512&&a!==null&&eo(a,a.return),n.flags&32){var d=n.stateNode;try{br(d,"")}catch(ue){Je(n,n.return,ue)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,_=a!==null?a.memoizedProps:m,I=n.type,k=n.updateQueue;if(n.updateQueue=null,k!==null)try{I==="input"&&m.type==="radio"&&m.name!=null&&Ro(d,m),Lo(I,_);var j=Lo(I,m);for(_=0;_<k.length;_+=2){var X=k[_],Z=k[_+1];X==="style"?xo(d,Z):X==="dangerouslySetInnerHTML"?Po(d,Z):X==="children"?br(d,Z):Y(d,X,Z,j)}switch(I){case"input":Co(d,m);break;case"textarea":gs(d,m);break;case"select":var Q=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var ie=m.value;ie!=null?lr(d,!!m.multiple,ie,!1):Q!==!!m.multiple&&(m.defaultValue!=null?lr(d,!!m.multiple,m.defaultValue,!0):lr(d,!!m.multiple,m.multiple?[]:"",!1))}d[ra]=m}catch(ue){Je(n,n.return,ue)}}break;case 6:if(On(i,n),Xn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(ue){Je(n,n.return,ue)}}break;case 3:if(On(i,n),Xn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{An(i.containerInfo)}catch(ue){Je(n,n.return,ue)}break;case 4:On(i,n),Xn(n);break;case 13:On(i,n),Xn(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(xh=Be())),c&4&&dm(n);break;case 22:if(X=a!==null&&a.memoizedState!==null,n.mode&1?(Ot=(j=Ot)||X,On(i,n),Ot=j):On(i,n),Xn(n),c&8192){if(j=n.memoizedState!==null,(n.stateNode.isHidden=j)&&!X&&(n.mode&1)!==0)for(oe=n,X=n.child;X!==null;){for(Z=oe=X;oe!==null;){switch(Q=oe,ie=Q.child,Q.tag){case 0:case 11:case 14:case 15:pa(4,Q,Q.return);break;case 1:eo(Q,Q.return);var ae=Q.stateNode;if(typeof ae.componentWillUnmount=="function"){c=Q,a=Q.return;try{i=c,ae.props=i.memoizedProps,ae.state=i.memoizedState,ae.componentWillUnmount()}catch(ue){Je(c,a,ue)}}break;case 5:eo(Q,Q.return);break;case 22:if(Q.memoizedState!==null){gm(Z);continue}}ie!==null?(ie.return=Q,oe=ie):gm(Z)}X=X.sibling}e:for(X=null,Z=n;;){if(Z.tag===5){if(X===null){X=Z;try{d=Z.stateNode,j?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(I=Z.stateNode,k=Z.memoizedProps.style,_=k!=null&&k.hasOwnProperty("display")?k.display:null,I.style.display=No("display",_))}catch(ue){Je(n,n.return,ue)}}}else if(Z.tag===6){if(X===null)try{Z.stateNode.nodeValue=j?"":Z.memoizedProps}catch(ue){Je(n,n.return,ue)}}else if((Z.tag!==22&&Z.tag!==23||Z.memoizedState===null||Z===n)&&Z.child!==null){Z.child.return=Z,Z=Z.child;continue}if(Z===n)break e;for(;Z.sibling===null;){if(Z.return===null||Z.return===n)break e;X===Z&&(X=null),Z=Z.return}X===Z&&(X=null),Z.sibling.return=Z.return,Z=Z.sibling}}break;case 19:On(i,n),Xn(n),c&4&&dm(n);break;case 21:break;default:On(i,n),Xn(n)}}function Xn(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(um(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(br(d,""),c.flags&=-33);var m=cm(n);kh(n,m,d);break;case 3:case 4:var _=c.stateNode.containerInfo,I=cm(n);Ah(n,I,_);break;default:throw Error(t(161))}}catch(k){Je(n,n.return,k)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function xw(n,i,a){oe=n,pm(n)}function pm(n,i,a){for(var c=(n.mode&1)!==0;oe!==null;){var d=oe,m=d.child;if(d.tag===22&&c){var _=d.memoizedState!==null||Jl;if(!_){var I=d.alternate,k=I!==null&&I.memoizedState!==null||Ot;I=Jl;var j=Ot;if(Jl=_,(Ot=k)&&!j)for(oe=d;oe!==null;)_=oe,k=_.child,_.tag===22&&_.memoizedState!==null?ym(d):k!==null?(k.return=_,oe=k):ym(d);for(;m!==null;)oe=m,pm(m),m=m.sibling;oe=d,Jl=I,Ot=j}mm(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,oe=m):mm(n)}}function mm(n){for(;oe!==null;){var i=oe;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Ot||Zl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Ot)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:xn(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&gp(i,m,c);break;case 3:var _=i.updateQueue;if(_!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}gp(i,_,a)}break;case 5:var I=i.stateNode;if(a===null&&i.flags&4){a=I;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var j=i.alternate;if(j!==null){var X=j.memoizedState;if(X!==null){var Z=X.dehydrated;Z!==null&&An(Z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Ot||i.flags&512&&Ch(i)}catch(Q){Je(i,i.return,Q)}}if(i===n){oe=null;break}if(a=i.sibling,a!==null){a.return=i.return,oe=a;break}oe=i.return}}function gm(n){for(;oe!==null;){var i=oe;if(i===n){oe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,oe=a;break}oe=i.return}}function ym(n){for(;oe!==null;){var i=oe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Zl(4,i)}catch(k){Je(i,a,k)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(k){Je(i,d,k)}}var m=i.return;try{Ch(i)}catch(k){Je(i,m,k)}break;case 5:var _=i.return;try{Ch(i)}catch(k){Je(i,_,k)}}}catch(k){Je(i,i.return,k)}if(i===n){oe=null;break}var I=i.sibling;if(I!==null){I.return=i.return,oe=I;break}oe=i.return}}var Dw=Math.ceil,eu=le.ReactCurrentDispatcher,Ph=le.ReactCurrentOwner,yn=le.ReactCurrentBatchConfig,De=0,mt=null,st=null,It=0,an=0,to=Qr(0),ht=0,ma=null,$i=0,tu=0,Nh=0,ga=null,Gt=null,xh=0,no=1/0,Ir=null,nu=!1,Dh=null,ti=null,ru=!1,ni=null,iu=0,ya=0,Oh=null,su=-1,ou=0;function zt(){return(De&6)!==0?Be():su!==-1?su:su=Be()}function ri(n){return(n.mode&1)===0?1:(De&2)!==0&&It!==0?It&-It:mw.transition!==null?(ou===0&&(ou=xi()),ou):(n=ke,n!==0||(n=window.event,n=n===void 0?16:Wo(n.type)),n)}function Ln(n,i,a,c){if(50<ya)throw ya=0,Oh=null,Error(t(185));Br(n,a,c),((De&2)===0||n!==mt)&&(n===mt&&((De&2)===0&&(tu|=a),ht===4&&ii(n,It)),Qt(n,c),a===1&&De===0&&(i.mode&1)===0&&(no=Be()+500,Ll&&Xr()))}function Qt(n,i){var a=n.callbackNode;hr(n,i);var c=Ni(n,n===mt?It:0);if(c===0)a!==null&&jo(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&jo(a),i===1)n.tag===0?pw(_m.bind(null,n)):ip(_m.bind(null,n)),cw(function(){(De&6)===0&&Xr()}),a=null;else{switch($r(c)){case 1:a=ki;break;case 4:a=Fr;break;case 16:a=cn;break;case 536870912:a=ol;break;default:a=cn}a=Am(a,vm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function vm(n,i){if(su=-1,ou=0,(De&6)!==0)throw Error(t(327));var a=n.callbackNode;if(ro()&&n.callbackNode!==a)return null;var c=Ni(n,n===mt?It:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=au(n,c);else{i=c;var d=De;De|=2;var m=Em();(mt!==n||It!==i)&&(Ir=null,no=Be()+500,Wi(n,i));do try{Mw();break}catch(I){wm(n,I)}while(!0);Xc(),eu.current=m,De=d,st!==null?i=0:(mt=null,It=0,i=ht)}if(i!==0){if(i===2&&(d=tn(n),d!==0&&(c=d,i=Lh(n,d))),i===1)throw a=ma,Wi(n,0),ii(n,c),Qt(n,Be()),a;if(i===6)ii(n,c);else{if(d=n.current.alternate,(c&30)===0&&!Ow(d)&&(i=au(n,c),i===2&&(m=tn(n),m!==0&&(c=m,i=Lh(n,m))),i===1))throw a=ma,Wi(n,0),ii(n,c),Qt(n,Be()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:qi(n,Gt,Ir);break;case 3:if(ii(n,c),(c&130023424)===c&&(i=xh+500-Be(),10<i)){if(Ni(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){zt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=jc(qi.bind(null,n,Gt,Ir),i);break}qi(n,Gt,Ir);break;case 4:if(ii(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var _=31-Ut(c);m=1<<_,_=i[_],_>d&&(d=_),c&=~m}if(c=d,c=Be()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Dw(c/1960))-c,10<c){n.timeoutHandle=jc(qi.bind(null,n,Gt,Ir),c);break}qi(n,Gt,Ir);break;case 5:qi(n,Gt,Ir);break;default:throw Error(t(329))}}}return Qt(n,Be()),n.callbackNode===a?vm.bind(null,n):null}function Lh(n,i){var a=ga;return n.current.memoizedState.isDehydrated&&(Wi(n,i).flags|=256),n=au(n,i),n!==2&&(i=Gt,Gt=a,i!==null&&Mh(i)),n}function Mh(n){Gt===null?Gt=n:Gt.push.apply(Gt,n)}function Ow(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!Pn(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ii(n,i){for(i&=~Nh,i&=~tu,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Ut(i),c=1<<a;n[a]=-1,i&=~c}}function _m(n){if((De&6)!==0)throw Error(t(327));ro();var i=Ni(n,0);if((i&1)===0)return Qt(n,Be()),null;var a=au(n,i);if(n.tag!==0&&a===2){var c=tn(n);c!==0&&(i=c,a=Lh(n,c))}if(a===1)throw a=ma,Wi(n,0),ii(n,i),Qt(n,Be()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,qi(n,Gt,Ir),Qt(n,Be()),null}function Vh(n,i){var a=De;De|=1;try{return n(i)}finally{De=a,De===0&&(no=Be()+500,Ll&&Xr())}}function Hi(n){ni!==null&&ni.tag===0&&(De&6)===0&&ro();var i=De;De|=1;var a=yn.transition,c=ke;try{if(yn.transition=null,ke=1,n)return n()}finally{ke=c,yn.transition=a,De=i,(De&6)===0&&Xr()}}function bh(){an=to.current,We(to)}function Wi(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,uw(a)),st!==null)for(a=st.return;a!==null;){var c=a;switch(qc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Dl();break;case 3:Js(),We(Wt),We(Nt),sh();break;case 5:rh(c);break;case 4:Js();break;case 13:We(Qe);break;case 19:We(Qe);break;case 10:Jc(c.type._context);break;case 22:case 23:bh()}a=a.return}if(mt=n,st=n=si(n.current,null),It=an=i,ht=0,ma=null,Nh=tu=$i=0,Gt=ga=null,ji!==null){for(i=0;i<ji.length;i++)if(a=ji[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var _=m.next;m.next=d,c.next=_}a.pending=c}ji=null}return n}function wm(n,i){do{var a=st;try{if(Xc(),Hl.current=Gl,Wl){for(var c=Ye.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Wl=!1}if(zi=0,pt=ct=Ye=null,ua=!1,ca=0,Ph.current=null,a===null||a.return===null){ht=1,ma=i,st=null;break}e:{var m=n,_=a.return,I=a,k=i;if(i=It,I.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var j=k,X=I,Z=X.tag;if((X.mode&1)===0&&(Z===0||Z===11||Z===15)){var Q=X.alternate;Q?(X.updateQueue=Q.updateQueue,X.memoizedState=Q.memoizedState,X.lanes=Q.lanes):(X.updateQueue=null,X.memoizedState=null)}var ie=Wp(_);if(ie!==null){ie.flags&=-257,qp(ie,_,I,m,i),ie.mode&1&&Hp(m,j,i),i=ie,k=j;var ae=i.updateQueue;if(ae===null){var ue=new Set;ue.add(k),i.updateQueue=ue}else ae.add(k);break e}else{if((i&1)===0){Hp(m,j,i),Fh();break e}k=Error(t(426))}}else if(Ke&&I.mode&1){var rt=Wp(_);if(rt!==null){(rt.flags&65536)===0&&(rt.flags|=256),qp(rt,_,I,m,i),Qc(Zs(k,I));break e}}m=k=Zs(k,I),ht!==4&&(ht=2),ga===null?ga=[m]:ga.push(m),m=_;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var V=zp(m,k,i);mp(m,V);break e;case 1:I=k;var x=m.type,b=m.stateNode;if((m.flags&128)===0&&(typeof x.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(ti===null||!ti.has(b)))){m.flags|=65536,i&=-i,m.lanes|=i;var te=$p(m,I,i);mp(m,te);break e}}m=m.return}while(m!==null)}Im(a)}catch(he){i=he,st===a&&a!==null&&(st=a=a.return);continue}break}while(!0)}function Em(){var n=eu.current;return eu.current=Gl,n===null?Gl:n}function Fh(){(ht===0||ht===3||ht===2)&&(ht=4),mt===null||($i&268435455)===0&&(tu&268435455)===0||ii(mt,It)}function au(n,i){var a=De;De|=2;var c=Em();(mt!==n||It!==i)&&(Ir=null,Wi(n,i));do try{Lw();break}catch(d){wm(n,d)}while(!0);if(Xc(),De=a,eu.current=c,st!==null)throw Error(t(261));return mt=null,It=0,ht}function Lw(){for(;st!==null;)Tm(st)}function Mw(){for(;st!==null&&!il();)Tm(st)}function Tm(n){var i=Cm(n.alternate,n,an);n.memoizedProps=n.pendingProps,i===null?Im(n):st=i,Ph.current=null}function Im(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Aw(a,i,an),a!==null){st=a;return}}else{if(a=kw(a,i),a!==null){a.flags&=32767,st=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{ht=6,st=null;return}}if(i=i.sibling,i!==null){st=i;return}st=i=n}while(i!==null);ht===0&&(ht=5)}function qi(n,i,a){var c=ke,d=yn.transition;try{yn.transition=null,ke=1,Vw(n,i,a,c)}finally{yn.transition=d,ke=c}return null}function Vw(n,i,a,c){do ro();while(ni!==null);if((De&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(Ue(n,m),n===mt&&(st=mt=null,It=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||ru||(ru=!0,Am(cn,function(){return ro(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=yn.transition,yn.transition=null;var _=ke;ke=1;var I=De;De|=4,Ph.current=null,Nw(n,a),fm(a,n),nw(Fc),Wr=!!bc,Fc=bc=null,n.current=a,xw(a),Ec(),De=I,ke=_,yn.transition=m}else n.current=a;if(ru&&(ru=!1,ni=n,iu=d),m=n.pendingLanes,m===0&&(ti=null),al(a.stateNode),Qt(n,Be()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(nu)throw nu=!1,n=Dh,Dh=null,n;return(iu&1)!==0&&n.tag!==0&&ro(),m=n.pendingLanes,(m&1)!==0?n===Oh?ya++:(ya=0,Oh=n):ya=0,Xr(),null}function ro(){if(ni!==null){var n=$r(iu),i=yn.transition,a=ke;try{if(yn.transition=null,ke=16>n?16:n,ni===null)var c=!1;else{if(n=ni,ni=null,iu=0,(De&6)!==0)throw Error(t(331));var d=De;for(De|=4,oe=n.current;oe!==null;){var m=oe,_=m.child;if((oe.flags&16)!==0){var I=m.deletions;if(I!==null){for(var k=0;k<I.length;k++){var j=I[k];for(oe=j;oe!==null;){var X=oe;switch(X.tag){case 0:case 11:case 15:pa(8,X,m)}var Z=X.child;if(Z!==null)Z.return=X,oe=Z;else for(;oe!==null;){X=oe;var Q=X.sibling,ie=X.return;if(lm(X),X===j){oe=null;break}if(Q!==null){Q.return=ie,oe=Q;break}oe=ie}}}var ae=m.alternate;if(ae!==null){var ue=ae.child;if(ue!==null){ae.child=null;do{var rt=ue.sibling;ue.sibling=null,ue=rt}while(ue!==null)}}oe=m}}if((m.subtreeFlags&2064)!==0&&_!==null)_.return=m,oe=_;else e:for(;oe!==null;){if(m=oe,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:pa(9,m,m.return)}var V=m.sibling;if(V!==null){V.return=m.return,oe=V;break e}oe=m.return}}var x=n.current;for(oe=x;oe!==null;){_=oe;var b=_.child;if((_.subtreeFlags&2064)!==0&&b!==null)b.return=_,oe=b;else e:for(_=x;oe!==null;){if(I=oe,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Zl(9,I)}}catch(he){Je(I,I.return,he)}if(I===_){oe=null;break e}var te=I.sibling;if(te!==null){te.return=I.return,oe=te;break e}oe=I.return}}if(De=d,Xr(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(Pi,n)}catch{}c=!0}return c}finally{ke=a,yn.transition=i}}return!1}function Sm(n,i,a){i=Zs(a,i),i=zp(n,i,1),n=Zr(n,i,1),i=zt(),n!==null&&(Br(n,1,i),Qt(n,i))}function Je(n,i,a){if(n.tag===3)Sm(n,n,a);else for(;i!==null;){if(i.tag===3){Sm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ti===null||!ti.has(c))){n=Zs(a,n),n=$p(i,n,1),i=Zr(i,n,1),n=zt(),i!==null&&(Br(i,1,n),Qt(i,n));break}}i=i.return}}function bw(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=zt(),n.pingedLanes|=n.suspendedLanes&a,mt===n&&(It&a)===a&&(ht===4||ht===3&&(It&130023424)===It&&500>Be()-xh?Wi(n,0):Nh|=a),Qt(n,i)}function Rm(n,i){i===0&&((n.mode&1)===0?i=1:(i=Cs,Cs<<=1,(Cs&130023424)===0&&(Cs=4194304)));var a=zt();n=wr(n,i),n!==null&&(Br(n,i,a),Qt(n,a))}function Fw(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Rm(n,a)}function Uw(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Rm(n,a)}var Cm;Cm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Wt.current)Kt=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Kt=!1,Cw(n,i,a);Kt=(n.flags&131072)!==0}else Kt=!1,Ke&&(i.flags&1048576)!==0&&sp(i,Vl,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Xl(n,i),n=i.pendingProps;var d=Ws(i,Nt.current);Xs(i,a),d=lh(null,i,c,n,d,a);var m=uh();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,qt(c)?(m=!0,Ol(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,th(i),d.updater=Ql,i.stateNode=d,d._reactInternals=i,mh(i,c,n,a),i=_h(null,i,c,!0,m,a)):(i.tag=0,Ke&&m&&Wc(i),Bt(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Xl(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=Bw(c),n=xn(c,n),d){case 0:i=vh(null,i,c,n,a);break e;case 1:i=Jp(null,i,c,n,a);break e;case 11:i=Kp(null,i,c,n,a);break e;case 14:i=Gp(null,i,c,xn(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:xn(c,d),vh(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:xn(c,d),Jp(n,i,c,d,a);case 3:e:{if(Zp(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,pp(n,i),zl(i,c,null,a);var _=i.memoizedState;if(c=_.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Zs(Error(t(423)),i),i=em(n,i,c,a,d);break e}else if(c!==d){d=Zs(Error(t(424)),i),i=em(n,i,c,a,d);break e}else for(on=Gr(i.stateNode.containerInfo.firstChild),sn=i,Ke=!0,Nn=null,a=dp(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Gs(),c===d){i=Tr(n,i,a);break e}Bt(n,i,c,a)}i=i.child}return i;case 5:return yp(i),n===null&&Gc(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,_=d.children,Uc(c,d)?_=null:m!==null&&Uc(c,m)&&(i.flags|=32),Xp(n,i),Bt(n,i,_,a),i.child;case 6:return n===null&&Gc(i),null;case 13:return tm(n,i,a);case 4:return nh(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Qs(i,null,c,a):Bt(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:xn(c,d),Kp(n,i,c,d,a);case 7:return Bt(n,i,i.pendingProps,a),i.child;case 8:return Bt(n,i,i.pendingProps.children,a),i.child;case 12:return Bt(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,_=d.value,ze(Ul,c._currentValue),c._currentValue=_,m!==null)if(Pn(m.value,_)){if(m.children===d.children&&!Wt.current){i=Tr(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var I=m.dependencies;if(I!==null){_=m.child;for(var k=I.firstContext;k!==null;){if(k.context===c){if(m.tag===1){k=Er(-1,a&-a),k.tag=2;var j=m.updateQueue;if(j!==null){j=j.shared;var X=j.pending;X===null?k.next=k:(k.next=X.next,X.next=k),j.pending=k}}m.lanes|=a,k=m.alternate,k!==null&&(k.lanes|=a),Zc(m.return,a,i),I.lanes|=a;break}k=k.next}}else if(m.tag===10)_=m.type===i.type?null:m.child;else if(m.tag===18){if(_=m.return,_===null)throw Error(t(341));_.lanes|=a,I=_.alternate,I!==null&&(I.lanes|=a),Zc(_,a,i),_=m.sibling}else _=m.child;if(_!==null)_.return=m;else for(_=m;_!==null;){if(_===i){_=null;break}if(m=_.sibling,m!==null){m.return=_.return,_=m;break}_=_.return}m=_}Bt(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Xs(i,a),d=mn(d),c=c(d),i.flags|=1,Bt(n,i,c,a),i.child;case 14:return c=i.type,d=xn(c,i.pendingProps),d=xn(c.type,d),Gp(n,i,c,d,a);case 15:return Qp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:xn(c,d),Xl(n,i),i.tag=1,qt(c)?(n=!0,Ol(i)):n=!1,Xs(i,a),jp(i,c,d),mh(i,c,d,a),_h(null,i,c,!0,n,a);case 19:return rm(n,i,a);case 22:return Yp(n,i,a)}throw Error(t(156,i.tag))};function Am(n,i){return Ss(n,i)}function jw(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vn(n,i,a,c){return new jw(n,i,a,c)}function Uh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Bw(n){if(typeof n=="function")return Uh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===L)return 11;if(n===kt)return 14}return 2}function si(n,i){var a=n.alternate;return a===null?(a=vn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function lu(n,i,a,c,d,m){var _=2;if(c=n,typeof n=="function")Uh(n)&&(_=1);else if(typeof n=="string")_=5;else e:switch(n){case N:return Ki(a.children,d,m,i);case T:_=8,d|=8;break;case R:return n=vn(12,a,i,d|2),n.elementType=R,n.lanes=m,n;case C:return n=vn(13,a,i,d),n.elementType=C,n.lanes=m,n;case tt:return n=vn(19,a,i,d),n.elementType=tt,n.lanes=m,n;case Fe:return uu(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case P:_=10;break e;case D:_=9;break e;case L:_=11;break e;case kt:_=14;break e;case Pt:_=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=vn(_,a,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function Ki(n,i,a,c){return n=vn(7,n,c,i),n.lanes=a,n}function uu(n,i,a,c){return n=vn(22,n,c,i),n.elementType=Fe,n.lanes=a,n.stateNode={isHidden:!1},n}function jh(n,i,a){return n=vn(6,n,null,i),n.lanes=a,n}function Bh(n,i,a){return i=vn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function zw(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jr(0),this.expirationTimes=jr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function zh(n,i,a,c,d,m,_,I,k){return n=new zw(n,i,a,I,k),i===1?(i=1,m===!0&&(i|=8)):i=0,m=vn(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},th(m),n}function $w(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_e,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function km(n){if(!n)return Yr;n=n._reactInternals;e:{if(Tn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(qt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(qt(a))return np(n,a,i)}return i}function Pm(n,i,a,c,d,m,_,I,k){return n=zh(a,c,!0,n,d,m,_,I,k),n.context=km(null),a=n.current,c=zt(),d=ri(a),m=Er(c,d),m.callback=i??null,Zr(a,m,d),n.current.lanes=d,Br(n,d,c),Qt(n,c),n}function cu(n,i,a,c){var d=i.current,m=zt(),_=ri(d);return a=km(a),i.context===null?i.context=a:i.pendingContext=a,i=Er(m,_),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Zr(d,i,_),n!==null&&(Ln(n,d,_,m),Bl(n,d,_)),_}function hu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Nm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function $h(n,i){Nm(n,i),(n=n.alternate)&&Nm(n,i)}function Hw(){return null}var xm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Hh(n){this._internalRoot=n}du.prototype.render=Hh.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));cu(n,i,null,null)},du.prototype.unmount=Hh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Hi(function(){cu(null,n,null,null)}),i[gr]=null}};function du(n){this._internalRoot=n}du.prototype.unstable_scheduleHydration=function(n){if(n){var i=dl();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Hn.length&&i!==0&&i<Hn[a].priority;a++);Hn.splice(a,0,n),a===0&&ml(n)}};function Wh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function fu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Dm(){}function Ww(n,i,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var j=hu(_);m.call(j)}}var _=Pm(i,c,n,0,null,!1,!1,"",Dm);return n._reactRootContainer=_,n[gr]=_.current,ta(n.nodeType===8?n.parentNode:n),Hi(),_}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var I=c;c=function(){var j=hu(k);I.call(j)}}var k=zh(n,0,!1,null,null,!1,!1,"",Dm);return n._reactRootContainer=k,n[gr]=k.current,ta(n.nodeType===8?n.parentNode:n),Hi(function(){cu(i,k,a,c)}),k}function pu(n,i,a,c,d){var m=a._reactRootContainer;if(m){var _=m;if(typeof d=="function"){var I=d;d=function(){var k=hu(_);I.call(k)}}cu(i,_,n,d)}else _=Ww(a,i,n,d,c);return hu(_)}cl=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Ur(i.pendingLanes);a!==0&&(zr(i,a|1),Qt(i,Be()),(De&6)===0&&(no=Be()+500,Xr()))}break;case 13:Hi(function(){var c=wr(n,1);if(c!==null){var d=zt();Ln(c,n,1,d)}}),$h(n,1)}},As=function(n){if(n.tag===13){var i=wr(n,134217728);if(i!==null){var a=zt();Ln(i,n,134217728,a)}$h(n,134217728)}},hl=function(n){if(n.tag===13){var i=ri(n),a=wr(n,i);if(a!==null){var c=zt();Ln(a,n,i,c)}$h(n,i)}},dl=function(){return ke},fl=function(n,i){var a=ke;try{return ke=n,i()}finally{ke=a}},vs=function(n,i,a){switch(i){case"input":if(Co(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=xl(c);if(!d)throw Error(t(90));ds(c),Co(c,d)}}}break;case"textarea":gs(n,a);break;case"select":i=a.value,i!=null&&lr(n,!!a.multiple,i,!1)}},Si=Vh,Vo=Hi;var qw={usingClientEntryPoint:!1,Events:[ia,$s,xl,zn,Mo,Vh]},va={findFiberByHostInstance:Vi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Kw={bundleType:va.bundleType,version:va.version,rendererPackageName:va.rendererPackageName,rendererConfig:va.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:le.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Uo(n),n===null?null:n.stateNode},findFiberByHostInstance:va.findFiberByHostInstance||Hw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mu.isDisabled&&mu.supportsFiber)try{Pi=mu.inject(Kw),en=mu}catch{}}return Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qw,Yt.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wh(i))throw Error(t(200));return $w(n,i,null,a)},Yt.createRoot=function(n,i){if(!Wh(n))throw Error(t(299));var a=!1,c="",d=xm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=zh(n,1,!1,null,null,a,!1,c,d),n[gr]=i.current,ta(n.nodeType===8?n.parentNode:n),new Hh(i)},Yt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Uo(i),n=n===null?null:n.stateNode,n},Yt.flushSync=function(n){return Hi(n)},Yt.hydrate=function(n,i,a){if(!fu(i))throw Error(t(200));return pu(null,n,i,!0,a)},Yt.hydrateRoot=function(n,i,a){if(!Wh(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",_=xm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(_=a.onRecoverableError)),i=Pm(i,null,n,1,a??null,d,!1,m,_),n[gr]=i.current,ta(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new du(i)},Yt.render=function(n,i,a){if(!fu(i))throw Error(t(200));return pu(null,n,i,!1,a)},Yt.unmountComponentAtNode=function(n){if(!fu(n))throw Error(t(40));return n._reactRootContainer?(Hi(function(){pu(null,null,n,!1,function(){n._reactRootContainer=null,n[gr]=null})}),!0):!1},Yt.unstable_batchedUpdates=Vh,Yt.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!fu(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return pu(n,i,a,!1,c)},Yt.version="18.3.1-next-f1338f8080-20240426",Yt}var jm;function nE(){if(jm)return Gh.exports;jm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Gh.exports=tE(),Gh.exports}var Bm;function rE(){if(Bm)return gu;Bm=1;var r=nE();return gu.createRoot=r.createRoot,gu.hydrateRoot=r.hydrateRoot,gu}var iE=rE(),wa={},zm;function sE(){if(zm)return wa;zm=1,Object.defineProperty(wa,"__esModule",{value:!0}),wa.parse=h,wa.serialize=v;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,u=(()=>{const A=function(){};return A.prototype=Object.create(null),A})();function h(A,F){const U=new u,W=A.length;if(W<2)return U;const B=(F==null?void 0:F.decode)||E;let K=0;do{const J=A.indexOf("=",K);if(J===-1)break;const Y=A.indexOf(";",K),le=Y===-1?W:Y;if(J>le){K=A.lastIndexOf(";",J-1)+1;continue}const we=f(A,K,J),_e=g(A,J,we),N=A.slice(we,_e);if(U[N]===void 0){let T=f(A,J+1,le),R=g(A,le,T);const P=B(A.slice(T,R));U[N]=P}K=le+1}while(K<W);return U}function f(A,F,U){do{const W=A.charCodeAt(F);if(W!==32&&W!==9)return F}while(++F<U);return U}function g(A,F,U){for(;F>U;){const W=A.charCodeAt(--F);if(W!==32&&W!==9)return F+1}return U}function v(A,F,U){const W=(U==null?void 0:U.encode)||encodeURIComponent;if(!r.test(A))throw new TypeError(`argument name is invalid: ${A}`);const B=W(F);if(!e.test(B))throw new TypeError(`argument val is invalid: ${F}`);let K=A+"="+B;if(!U)return K;if(U.maxAge!==void 0){if(!Number.isInteger(U.maxAge))throw new TypeError(`option maxAge is invalid: ${U.maxAge}`);K+="; Max-Age="+U.maxAge}if(U.domain){if(!t.test(U.domain))throw new TypeError(`option domain is invalid: ${U.domain}`);K+="; Domain="+U.domain}if(U.path){if(!s.test(U.path))throw new TypeError(`option path is invalid: ${U.path}`);K+="; Path="+U.path}if(U.expires){if(!S(U.expires)||!Number.isFinite(U.expires.valueOf()))throw new TypeError(`option expires is invalid: ${U.expires}`);K+="; Expires="+U.expires.toUTCString()}if(U.httpOnly&&(K+="; HttpOnly"),U.secure&&(K+="; Secure"),U.partitioned&&(K+="; Partitioned"),U.priority)switch(typeof U.priority=="string"?U.priority.toLowerCase():void 0){case"low":K+="; Priority=Low";break;case"medium":K+="; Priority=Medium";break;case"high":K+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${U.priority}`)}if(U.sameSite)switch(typeof U.sameSite=="string"?U.sameSite.toLowerCase():U.sameSite){case!0:case"strict":K+="; SameSite=Strict";break;case"lax":K+="; SameSite=Lax";break;case"none":K+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${U.sameSite}`)}return K}function E(A){if(A.indexOf("%")===-1)return A;try{return decodeURIComponent(A)}catch{return A}}function S(A){return o.call(A)==="[object Date]"}return wa}sE();/**
 * react-router v7.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var $m="popstate";function oE(r={}){function e(s,o){let{pathname:u,search:h,hash:f}=s.location;return gd("",{pathname:u,search:h,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(s,o){return typeof o=="string"?o:Oa(o)}return lE(e,t,null,r)}function Xe(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function tr(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function aE(){return Math.random().toString(36).substring(2,10)}function Hm(r,e){return{usr:r.state,key:r.key,idx:e}}function gd(r,e,t=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?_o(e):e,state:t,key:e&&e.key||s||aE()}}function Oa({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function _o(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function lE(r,e,t,s={}){let{window:o=document.defaultView,v5Compat:u=!1}=s,h=o.history,f="POP",g=null,v=E();v==null&&(v=0,h.replaceState({...h.state,idx:v},""));function E(){return(h.state||{idx:null}).idx}function S(){f="POP";let B=E(),K=B==null?null:B-v;v=B,g&&g({action:f,location:W.location,delta:K})}function A(B,K){f="PUSH";let J=gd(W.location,B,K);v=E()+1;let Y=Hm(J,v),le=W.createHref(J);try{h.pushState(Y,"",le)}catch(we){if(we instanceof DOMException&&we.name==="DataCloneError")throw we;o.location.assign(le)}u&&g&&g({action:f,location:W.location,delta:1})}function F(B,K){f="REPLACE";let J=gd(W.location,B,K);v=E();let Y=Hm(J,v),le=W.createHref(J);h.replaceState(Y,"",le),u&&g&&g({action:f,location:W.location,delta:0})}function U(B){let K=o.location.origin!=="null"?o.location.origin:o.location.href,J=typeof B=="string"?B:Oa(B);return J=J.replace(/ $/,"%20"),Xe(K,`No window.location.(origin|href) available to create URL for href: ${J}`),new URL(J,K)}let W={get action(){return f},get location(){return r(o,h)},listen(B){if(g)throw new Error("A history only accepts one active listener");return o.addEventListener($m,S),g=B,()=>{o.removeEventListener($m,S),g=null}},createHref(B){return e(o,B)},createURL:U,encodeLocation(B){let K=U(B);return{pathname:K.pathname,search:K.search,hash:K.hash}},push:A,replace:F,go(B){return h.go(B)}};return W}function dy(r,e,t="/"){return uE(r,e,t,!1)}function uE(r,e,t,s){let o=typeof e=="string"?_o(e):e,u=mi(o.pathname||"/",t);if(u==null)return null;let h=fy(r);cE(h);let f=null;for(let g=0;f==null&&g<h.length;++g){let v=EE(u);f=_E(h[g],v,s)}return f}function fy(r,e=[],t=[],s=""){let o=(u,h,f)=>{let g={relativePath:f===void 0?u.path||"":f,caseSensitive:u.caseSensitive===!0,childrenIndex:h,route:u};g.relativePath.startsWith("/")&&(Xe(g.relativePath.startsWith(s),`Absolute route path "${g.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(s.length));let v=Ar([s,g.relativePath]),E=t.concat(g);u.children&&u.children.length>0&&(Xe(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),fy(u.children,e,E,v)),!(u.path==null&&!u.index)&&e.push({path:v,score:yE(v,u.index),routesMeta:E})};return r.forEach((u,h)=>{var f;if(u.path===""||!((f=u.path)!=null&&f.includes("?")))o(u,h);else for(let g of py(u.path))o(u,h,g)}),e}function py(r){let e=r.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),u=t.replace(/\?$/,"");if(s.length===0)return o?[u,""]:[u];let h=py(s.join("/")),f=[];return f.push(...h.map(g=>g===""?u:[u,g].join("/"))),o&&f.push(...h),f.map(g=>r.startsWith("/")&&g===""?"/":g)}function cE(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:vE(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var hE=/^:[\w-]+$/,dE=3,fE=2,pE=1,mE=10,gE=-2,Wm=r=>r==="*";function yE(r,e){let t=r.split("/"),s=t.length;return t.some(Wm)&&(s+=gE),e&&(s+=fE),t.filter(o=>!Wm(o)).reduce((o,u)=>o+(hE.test(u)?dE:u===""?pE:mE),s)}function vE(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function _E(r,e,t=!1){let{routesMeta:s}=r,o={},u="/",h=[];for(let f=0;f<s.length;++f){let g=s[f],v=f===s.length-1,E=u==="/"?e:e.slice(u.length)||"/",S=Lu({path:g.relativePath,caseSensitive:g.caseSensitive,end:v},E),A=g.route;if(!S&&v&&t&&!s[s.length-1].route.index&&(S=Lu({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},E)),!S)return null;Object.assign(o,S.params),h.push({params:o,pathname:Ar([u,S.pathname]),pathnameBase:RE(Ar([u,S.pathnameBase])),route:A}),S.pathnameBase!=="/"&&(u=Ar([u,S.pathnameBase]))}return h}function Lu(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,s]=wE(r.path,r.caseSensitive,r.end),o=e.match(t);if(!o)return null;let u=o[0],h=u.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:s.reduce((v,{paramName:E,isOptional:S},A)=>{if(E==="*"){let U=f[A]||"";h=u.slice(0,u.length-U.length).replace(/(.)\/+$/,"$1")}const F=f[A];return S&&!F?v[E]=void 0:v[E]=(F||"").replace(/%2F/g,"/"),v},{}),pathname:u,pathnameBase:h,pattern:r}}function wE(r,e=!1,t=!0){tr(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,f,g)=>(s.push({paramName:f,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function EE(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return tr(!1,`The URL path "${r}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function mi(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=r.charAt(t);return s&&s!=="/"?null:r.slice(t)||"/"}function TE(r,e="/"){let{pathname:t,search:s="",hash:o=""}=typeof r=="string"?_o(r):r;return{pathname:t?t.startsWith("/")?t:IE(t,e):e,search:CE(s),hash:AE(o)}}function IE(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Xh(r,e,t,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function SE(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function my(r){let e=SE(r);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function gy(r,e,t,s=!1){let o;typeof r=="string"?o=_o(r):(o={...r},Xe(!o.pathname||!o.pathname.includes("?"),Xh("?","pathname","search",o)),Xe(!o.pathname||!o.pathname.includes("#"),Xh("#","pathname","hash",o)),Xe(!o.search||!o.search.includes("#"),Xh("#","search","hash",o)));let u=r===""||o.pathname==="",h=u?"/":o.pathname,f;if(h==null)f=t;else{let S=e.length-1;if(!s&&h.startsWith("..")){let A=h.split("/");for(;A[0]==="..";)A.shift(),S-=1;o.pathname=A.join("/")}f=S>=0?e[S]:"/"}let g=TE(o,f),v=h&&h!=="/"&&h.endsWith("/"),E=(u||h===".")&&t.endsWith("/");return!g.pathname.endsWith("/")&&(v||E)&&(g.pathname+="/"),g}var Ar=r=>r.join("/").replace(/\/\/+/g,"/"),RE=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),CE=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,AE=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function kE(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var yy=["POST","PUT","PATCH","DELETE"];new Set(yy);var PE=["GET",...yy];new Set(PE);var wo=H.createContext(null);wo.displayName="DataRouter";var rc=H.createContext(null);rc.displayName="DataRouterState";var vy=H.createContext({isTransitioning:!1});vy.displayName="ViewTransition";var NE=H.createContext(new Map);NE.displayName="Fetchers";var xE=H.createContext(null);xE.displayName="Await";var sr=H.createContext(null);sr.displayName="Navigation";var $a=H.createContext(null);$a.displayName="Location";var Or=H.createContext({outlet:null,matches:[],isDataRoute:!1});Or.displayName="Route";var Fd=H.createContext(null);Fd.displayName="RouteError";function DE(r,{relative:e}={}){Xe(Ha(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=H.useContext(sr),{hash:o,pathname:u,search:h}=Wa(r,{relative:e}),f=u;return t!=="/"&&(f=u==="/"?t:Ar([t,u])),s.createHref({pathname:f,search:h,hash:o})}function Ha(){return H.useContext($a)!=null}function as(){return Xe(Ha(),"useLocation() may be used only in the context of a <Router> component."),H.useContext($a).location}var _y="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function wy(r){H.useContext(sr).static||H.useLayoutEffect(r)}function Ud(){let{isDataRoute:r}=H.useContext(Or);return r?WE():OE()}function OE(){Xe(Ha(),"useNavigate() may be used only in the context of a <Router> component.");let r=H.useContext(wo),{basename:e,navigator:t}=H.useContext(sr),{matches:s}=H.useContext(Or),{pathname:o}=as(),u=JSON.stringify(my(s)),h=H.useRef(!1);return wy(()=>{h.current=!0}),H.useCallback((g,v={})=>{if(tr(h.current,_y),!h.current)return;if(typeof g=="number"){t.go(g);return}let E=gy(g,JSON.parse(u),o,v.relative==="path");r==null&&e!=="/"&&(E.pathname=E.pathname==="/"?e:Ar([e,E.pathname])),(v.replace?t.replace:t.push)(E,v.state,v)},[e,t,u,o,r])}H.createContext(null);function Wa(r,{relative:e}={}){let{matches:t}=H.useContext(Or),{pathname:s}=as(),o=JSON.stringify(my(t));return H.useMemo(()=>gy(r,JSON.parse(o),s,e==="path"),[r,o,s,e])}function LE(r,e){return Ey(r,e)}function Ey(r,e,t,s){var K;Xe(Ha(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=H.useContext(sr),{matches:u}=H.useContext(Or),h=u[u.length-1],f=h?h.params:{},g=h?h.pathname:"/",v=h?h.pathnameBase:"/",E=h&&h.route;{let J=E&&E.path||"";Ty(g,!E||J.endsWith("*")||J.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${J}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${J}"> to <Route path="${J==="/"?"*":`${J}/*`}">.`)}let S=as(),A;if(e){let J=typeof e=="string"?_o(e):e;Xe(v==="/"||((K=J.pathname)==null?void 0:K.startsWith(v)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${J.pathname}" was given in the \`location\` prop.`),A=J}else A=S;let F=A.pathname||"/",U=F;if(v!=="/"){let J=v.replace(/^\//,"").split("/");U="/"+F.replace(/^\//,"").split("/").slice(J.length).join("/")}let W=dy(r,{pathname:U});tr(E||W!=null,`No routes matched location "${A.pathname}${A.search}${A.hash}" `),tr(W==null||W[W.length-1].route.element!==void 0||W[W.length-1].route.Component!==void 0||W[W.length-1].route.lazy!==void 0,`Matched leaf route at location "${A.pathname}${A.search}${A.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let B=UE(W&&W.map(J=>Object.assign({},J,{params:Object.assign({},f,J.params),pathname:Ar([v,o.encodeLocation?o.encodeLocation(J.pathname).pathname:J.pathname]),pathnameBase:J.pathnameBase==="/"?v:Ar([v,o.encodeLocation?o.encodeLocation(J.pathnameBase).pathname:J.pathnameBase])})),u,t,s);return e&&B?H.createElement($a.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...A},navigationType:"POP"}},B):B}function ME(){let r=HE(),e=kE(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},u={padding:"2px 4px",backgroundColor:s},h=null;return console.error("Error handled by React Router default ErrorBoundary:",r),h=H.createElement(H.Fragment,null,H.createElement("p",null,"💿 Hey developer 👋"),H.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",H.createElement("code",{style:u},"ErrorBoundary")," or"," ",H.createElement("code",{style:u},"errorElement")," prop on your route.")),H.createElement(H.Fragment,null,H.createElement("h2",null,"Unexpected Application Error!"),H.createElement("h3",{style:{fontStyle:"italic"}},e),t?H.createElement("pre",{style:o},t):null,h)}var VE=H.createElement(ME,null),bE=class extends H.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){console.error("React Router caught the following error during render",r,e)}render(){return this.state.error!==void 0?H.createElement(Or.Provider,{value:this.props.routeContext},H.createElement(Fd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function FE({routeContext:r,match:e,children:t}){let s=H.useContext(wo);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),H.createElement(Or.Provider,{value:r},t)}function UE(r,e=[],t=null,s=null){if(r==null){if(!t)return null;if(t.errors)r=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let o=r,u=t==null?void 0:t.errors;if(u!=null){let g=o.findIndex(v=>v.route.id&&(u==null?void 0:u[v.route.id])!==void 0);Xe(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),o=o.slice(0,Math.min(o.length,g+1))}let h=!1,f=-1;if(t)for(let g=0;g<o.length;g++){let v=o[g];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(f=g),v.route.id){let{loaderData:E,errors:S}=t,A=v.route.loader&&!E.hasOwnProperty(v.route.id)&&(!S||S[v.route.id]===void 0);if(v.route.lazy||A){h=!0,f>=0?o=o.slice(0,f+1):o=[o[0]];break}}}return o.reduceRight((g,v,E)=>{let S,A=!1,F=null,U=null;t&&(S=u&&v.route.id?u[v.route.id]:void 0,F=v.route.errorElement||VE,h&&(f<0&&E===0?(Ty("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),A=!0,U=null):f===E&&(A=!0,U=v.route.hydrateFallbackElement||null)));let W=e.concat(o.slice(0,E+1)),B=()=>{let K;return S?K=F:A?K=U:v.route.Component?K=H.createElement(v.route.Component,null):v.route.element?K=v.route.element:K=g,H.createElement(FE,{match:v,routeContext:{outlet:g,matches:W,isDataRoute:t!=null},children:K})};return t&&(v.route.ErrorBoundary||v.route.errorElement||E===0)?H.createElement(bE,{location:t.location,revalidation:t.revalidation,component:F,error:S,children:B(),routeContext:{outlet:null,matches:W,isDataRoute:!0}}):B()},null)}function jd(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function jE(r){let e=H.useContext(wo);return Xe(e,jd(r)),e}function BE(r){let e=H.useContext(rc);return Xe(e,jd(r)),e}function zE(r){let e=H.useContext(Or);return Xe(e,jd(r)),e}function Bd(r){let e=zE(r),t=e.matches[e.matches.length-1];return Xe(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function $E(){return Bd("useRouteId")}function HE(){var s;let r=H.useContext(Fd),e=BE("useRouteError"),t=Bd("useRouteError");return r!==void 0?r:(s=e.errors)==null?void 0:s[t]}function WE(){let{router:r}=jE("useNavigate"),e=Bd("useNavigate"),t=H.useRef(!1);return wy(()=>{t.current=!0}),H.useCallback(async(o,u={})=>{tr(t.current,_y),t.current&&(typeof o=="number"?r.navigate(o):await r.navigate(o,{fromRouteId:e,...u}))},[r,e])}var qm={};function Ty(r,e,t){!e&&!qm[r]&&(qm[r]=!0,tr(!1,t))}H.memo(qE);function qE({routes:r,future:e,state:t}){return Ey(r,void 0,t,e)}function yd(r){Xe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function KE({basename:r="/",children:e=null,location:t,navigationType:s="POP",navigator:o,static:u=!1}){Xe(!Ha(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=r.replace(/^\/*/,"/"),f=H.useMemo(()=>({basename:h,navigator:o,static:u,future:{}}),[h,o,u]);typeof t=="string"&&(t=_o(t));let{pathname:g="/",search:v="",hash:E="",state:S=null,key:A="default"}=t,F=H.useMemo(()=>{let U=mi(g,h);return U==null?null:{location:{pathname:U,search:v,hash:E,state:S,key:A},navigationType:s}},[h,g,v,E,S,A,s]);return tr(F!=null,`<Router basename="${h}"> is not able to match the URL "${g}${v}${E}" because it does not start with the basename, so the <Router> won't render anything.`),F==null?null:H.createElement(sr.Provider,{value:f},H.createElement($a.Provider,{children:e,value:F}))}function GE({children:r,location:e}){return LE(vd(r),e)}function vd(r,e=[]){let t=[];return H.Children.forEach(r,(s,o)=>{if(!H.isValidElement(s))return;let u=[...e,o];if(s.type===H.Fragment){t.push.apply(t,vd(s.props.children,u));return}Xe(s.type===yd,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Xe(!s.props.index||!s.props.children,"An index route cannot have child routes.");let h={id:s.props.id||u.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(h.children=vd(s.props.children,u)),t.push(h)}),t}var Su="get",Ru="application/x-www-form-urlencoded";function ic(r){return r!=null&&typeof r.tagName=="string"}function QE(r){return ic(r)&&r.tagName.toLowerCase()==="button"}function YE(r){return ic(r)&&r.tagName.toLowerCase()==="form"}function XE(r){return ic(r)&&r.tagName.toLowerCase()==="input"}function JE(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function ZE(r,e){return r.button===0&&(!e||e==="_self")&&!JE(r)}var yu=null;function e0(){if(yu===null)try{new FormData(document.createElement("form"),0),yu=!1}catch{yu=!0}return yu}var t0=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Jh(r){return r!=null&&!t0.has(r)?(tr(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ru}"`),null):r}function n0(r,e){let t,s,o,u,h;if(YE(r)){let f=r.getAttribute("action");s=f?mi(f,e):null,t=r.getAttribute("method")||Su,o=Jh(r.getAttribute("enctype"))||Ru,u=new FormData(r)}else if(QE(r)||XE(r)&&(r.type==="submit"||r.type==="image")){let f=r.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=r.getAttribute("formaction")||f.getAttribute("action");if(s=g?mi(g,e):null,t=r.getAttribute("formmethod")||f.getAttribute("method")||Su,o=Jh(r.getAttribute("formenctype"))||Jh(f.getAttribute("enctype"))||Ru,u=new FormData(f,r),!e0()){let{name:v,type:E,value:S}=r;if(E==="image"){let A=v?`${v}.`:"";u.append(`${A}x`,"0"),u.append(`${A}y`,"0")}else v&&u.append(v,S)}}else{if(ic(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Su,s=null,o=Ru,h=r}return u&&o==="text/plain"&&(h=u,u=void 0),{action:s,method:t.toLowerCase(),encType:o,formData:u,body:h}}function zd(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}async function r0(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function i0(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function s0(r,e,t){let s=await Promise.all(r.map(async o=>{let u=e.routes[o.route.id];if(u){let h=await r0(u,t);return h.links?h.links():[]}return[]}));return u0(s.flat(1).filter(i0).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Km(r,e,t,s,o,u){let h=(g,v)=>t[v]?g.route.id!==t[v].route.id:!0,f=(g,v)=>{var E;return t[v].pathname!==g.pathname||((E=t[v].route.path)==null?void 0:E.endsWith("*"))&&t[v].params["*"]!==g.params["*"]};return u==="assets"?e.filter((g,v)=>h(g,v)||f(g,v)):u==="data"?e.filter((g,v)=>{var S;let E=s.routes[g.route.id];if(!E||!E.hasLoader)return!1;if(h(g,v)||f(g,v))return!0;if(g.route.shouldRevalidate){let A=g.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((S=t[0])==null?void 0:S.params)||{},nextUrl:new URL(r,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof A=="boolean")return A}return!0}):[]}function o0(r,e){return a0(r.map(t=>{let s=e.routes[t.route.id];if(!s)return[];let o=[s.module];return s.imports&&(o=o.concat(s.imports)),o}).flat(1))}function a0(r){return[...new Set(r)]}function l0(r){let e={},t=Object.keys(r).sort();for(let s of t)e[s]=r[s];return e}function u0(r,e){let t=new Set;return new Set(e),r.reduce((s,o)=>{let u=JSON.stringify(l0(o));return t.has(u)||(t.add(u),s.push({key:u,link:o})),s},[])}function c0(r){let e=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function h0(){let r=H.useContext(wo);return zd(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function d0(){let r=H.useContext(rc);return zd(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var $d=H.createContext(void 0);$d.displayName="FrameworkContext";function Iy(){let r=H.useContext($d);return zd(r,"You must render this element inside a <HydratedRouter> element"),r}function f0(r,e){let t=H.useContext($d),[s,o]=H.useState(!1),[u,h]=H.useState(!1),{onFocus:f,onBlur:g,onMouseEnter:v,onMouseLeave:E,onTouchStart:S}=e,A=H.useRef(null);H.useEffect(()=>{if(r==="render"&&h(!0),r==="viewport"){let W=K=>{K.forEach(J=>{h(J.isIntersecting)})},B=new IntersectionObserver(W,{threshold:.5});return A.current&&B.observe(A.current),()=>{B.disconnect()}}},[r]),H.useEffect(()=>{if(s){let W=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(W)}}},[s]);let F=()=>{o(!0)},U=()=>{o(!1),h(!1)};return t?r!=="intent"?[u,A,{}]:[u,A,{onFocus:Ea(f,F),onBlur:Ea(g,U),onMouseEnter:Ea(v,F),onMouseLeave:Ea(E,U),onTouchStart:Ea(S,F)}]:[!1,A,{}]}function Ea(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function p0({page:r,...e}){let{router:t}=h0(),s=H.useMemo(()=>dy(t.routes,r,t.basename),[t.routes,r,t.basename]);return s?H.createElement(g0,{page:r,matches:s,...e}):null}function m0(r){let{manifest:e,routeModules:t}=Iy(),[s,o]=H.useState([]);return H.useEffect(()=>{let u=!1;return s0(r,e,t).then(h=>{u||o(h)}),()=>{u=!0}},[r,e,t]),s}function g0({page:r,matches:e,...t}){let s=as(),{manifest:o,routeModules:u}=Iy(),{loaderData:h,matches:f}=d0(),g=H.useMemo(()=>Km(r,e,f,o,s,"data"),[r,e,f,o,s]),v=H.useMemo(()=>Km(r,e,f,o,s,"assets"),[r,e,f,o,s]),E=H.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let F=new Set,U=!1;if(e.forEach(B=>{var J;let K=o.routes[B.route.id];!K||!K.hasLoader||(!g.some(Y=>Y.route.id===B.route.id)&&B.route.id in h&&((J=u[B.route.id])!=null&&J.shouldRevalidate)||K.hasClientLoader?U=!0:F.add(B.route.id))}),F.size===0)return[];let W=c0(r);return U&&F.size>0&&W.searchParams.set("_routes",e.filter(B=>F.has(B.route.id)).map(B=>B.route.id).join(",")),[W.pathname+W.search]},[h,s,o,g,e,r,u]),S=H.useMemo(()=>o0(v,o),[v,o]),A=m0(v);return H.createElement(H.Fragment,null,E.map(F=>H.createElement("link",{key:F,rel:"prefetch",as:"fetch",href:F,...t})),S.map(F=>H.createElement("link",{key:F,rel:"modulepreload",href:F,...t})),A.map(({key:F,link:U})=>H.createElement("link",{key:F,...U})))}function y0(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var Sy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Sy&&(window.__reactRouterVersion="7.1.1")}catch{}function v0({basename:r,children:e,window:t}){let s=H.useRef();s.current==null&&(s.current=oE({window:t,v5Compat:!0}));let o=s.current,[u,h]=H.useState({action:o.action,location:o.location}),f=H.useCallback(g=>{H.startTransition(()=>h(g))},[h]);return H.useLayoutEffect(()=>o.listen(f),[o,f]),H.createElement(KE,{basename:r,children:e,location:u.location,navigationType:u.action,navigator:o})}var Ry=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Cy=H.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:o,reloadDocument:u,replace:h,state:f,target:g,to:v,preventScrollReset:E,viewTransition:S,...A},F){let{basename:U}=H.useContext(sr),W=typeof v=="string"&&Ry.test(v),B,K=!1;if(typeof v=="string"&&W&&(B=v,Sy))try{let R=new URL(window.location.href),P=v.startsWith("//")?new URL(R.protocol+v):new URL(v),D=mi(P.pathname,U);P.origin===R.origin&&D!=null?v=D+P.search+P.hash:K=!0}catch{tr(!1,`<Link to="${v}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let J=DE(v,{relative:o}),[Y,le,we]=f0(s,A),_e=T0(v,{replace:h,state:f,target:g,preventScrollReset:E,relative:o,viewTransition:S});function N(R){e&&e(R),R.defaultPrevented||_e(R)}let T=H.createElement("a",{...A,...we,href:B||J,onClick:K||u?e:N,ref:y0(F,le),target:g,"data-discover":!W&&t==="render"?"true":void 0});return Y&&!W?H.createElement(H.Fragment,null,T,H.createElement(p0,{page:J})):T});Cy.displayName="Link";var _0=H.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:o=!1,style:u,to:h,viewTransition:f,children:g,...v},E){let S=Wa(h,{relative:v.relative}),A=as(),F=H.useContext(rc),{navigator:U,basename:W}=H.useContext(sr),B=F!=null&&A0(S)&&f===!0,K=U.encodeLocation?U.encodeLocation(S).pathname:S.pathname,J=A.pathname,Y=F&&F.navigation&&F.navigation.location?F.navigation.location.pathname:null;t||(J=J.toLowerCase(),Y=Y?Y.toLowerCase():null,K=K.toLowerCase()),Y&&W&&(Y=mi(Y,W)||Y);const le=K!=="/"&&K.endsWith("/")?K.length-1:K.length;let we=J===K||!o&&J.startsWith(K)&&J.charAt(le)==="/",_e=Y!=null&&(Y===K||!o&&Y.startsWith(K)&&Y.charAt(K.length)==="/"),N={isActive:we,isPending:_e,isTransitioning:B},T=we?e:void 0,R;typeof s=="function"?R=s(N):R=[s,we?"active":null,_e?"pending":null,B?"transitioning":null].filter(Boolean).join(" ");let P=typeof u=="function"?u(N):u;return H.createElement(Cy,{...v,"aria-current":T,className:R,ref:E,style:P,to:h,viewTransition:f},typeof g=="function"?g(N):g)});_0.displayName="NavLink";var w0=H.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:o,state:u,method:h=Su,action:f,onSubmit:g,relative:v,preventScrollReset:E,viewTransition:S,...A},F)=>{let U=R0(),W=C0(f,{relative:v}),B=h.toLowerCase()==="get"?"get":"post",K=typeof f=="string"&&Ry.test(f),J=Y=>{if(g&&g(Y),Y.defaultPrevented)return;Y.preventDefault();let le=Y.nativeEvent.submitter,we=(le==null?void 0:le.getAttribute("formmethod"))||h;U(le||Y.currentTarget,{fetcherKey:e,method:we,navigate:t,replace:o,state:u,relative:v,preventScrollReset:E,viewTransition:S})};return H.createElement("form",{ref:F,method:B,action:W,onSubmit:s?g:J,...A,"data-discover":!K&&r==="render"?"true":void 0})});w0.displayName="Form";function E0(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ay(r){let e=H.useContext(wo);return Xe(e,E0(r)),e}function T0(r,{target:e,replace:t,state:s,preventScrollReset:o,relative:u,viewTransition:h}={}){let f=Ud(),g=as(),v=Wa(r,{relative:u});return H.useCallback(E=>{if(ZE(E,e)){E.preventDefault();let S=t!==void 0?t:Oa(g)===Oa(v);f(r,{replace:S,state:s,preventScrollReset:o,relative:u,viewTransition:h})}},[g,f,v,t,s,e,r,o,u,h])}var I0=0,S0=()=>`__${String(++I0)}__`;function R0(){let{router:r}=Ay("useSubmit"),{basename:e}=H.useContext(sr),t=$E();return H.useCallback(async(s,o={})=>{let{action:u,method:h,encType:f,formData:g,body:v}=n0(s,e);if(o.navigate===!1){let E=o.fetcherKey||S0();await r.fetch(E,t,o.action||u,{preventScrollReset:o.preventScrollReset,formData:g,body:v,formMethod:o.method||h,formEncType:o.encType||f,flushSync:o.flushSync})}else await r.navigate(o.action||u,{preventScrollReset:o.preventScrollReset,formData:g,body:v,formMethod:o.method||h,formEncType:o.encType||f,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,e,t])}function C0(r,{relative:e}={}){let{basename:t}=H.useContext(sr),s=H.useContext(Or);Xe(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),u={...Wa(r||".",{relative:e})},h=as();if(r==null){u.search=h.search;let f=new URLSearchParams(u.search),g=f.getAll("index");if(g.some(E=>E==="")){f.delete("index"),g.filter(S=>S).forEach(S=>f.append("index",S));let E=f.toString();u.search=E?`?${E}`:""}}return(!r||r===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(u.pathname=u.pathname==="/"?t:Ar([t,u.pathname])),Oa(u)}function A0(r,e={}){let t=H.useContext(vy);Xe(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=Ay("useViewTransitionState"),o=Wa(r,{relative:e.relative});if(!t.isTransitioning)return!1;let u=mi(t.currentLocation.pathname,s)||t.currentLocation.pathname,h=mi(t.nextLocation.pathname,s)||t.nextLocation.pathname;return Lu(o.pathname,h)!=null||Lu(o.pathname,u)!=null}new TextEncoder;var Gm={};/**
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
 */const ky=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},k0=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[t++];e[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[t++],h=r[t++],f=r[t++],g=((o&7)<<18|(u&63)<<12|(h&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const u=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|h&63)}}return e.join("")},Py={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],h=o+1<r.length,f=h?r[o+1]:0,g=o+2<r.length,v=g?r[o+2]:0,E=u>>2,S=(u&3)<<4|f>>4;let A=(f&15)<<2|v>>6,F=v&63;g||(F=64,h||(A=64)),s.push(t[E],t[S],t[A],t[F])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(ky(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):k0(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=t[r.charAt(o++)],f=o<r.length?t[r.charAt(o)]:0;++o;const v=o<r.length?t[r.charAt(o)]:64;++o;const S=o<r.length?t[r.charAt(o)]:64;if(++o,u==null||f==null||v==null||S==null)throw new P0;const A=u<<2|f>>4;if(s.push(A),v!==64){const F=f<<4&240|v>>2;if(s.push(F),S!==64){const U=v<<6&192|S;s.push(U)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class P0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const N0=function(r){const e=ky(r);return Py.encodeByteArray(e,!0)},Mu=function(r){return N0(r).replace(/\./g,"")},Ny=function(r){try{return Py.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function x0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const D0=()=>x0().__FIREBASE_DEFAULTS__,O0=()=>{if(typeof process>"u"||typeof Gm>"u")return;const r=Gm.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},L0=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Ny(r[1]);return e&&JSON.parse(e)},sc=()=>{try{return D0()||O0()||L0()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},xy=r=>{var e,t;return(t=(e=sc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},M0=r=>{const e=xy(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Dy=()=>{var r;return(r=sc())===null||r===void 0?void 0:r.config},Oy=r=>{var e;return(e=sc())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class V0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function b0(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Mu(JSON.stringify(t)),Mu(JSON.stringify(h)),""].join(".")}/**
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
 */function bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function F0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(bt())}function U0(){var r;const e=(r=sc())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function j0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ly(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function B0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function z0(){const r=bt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function $0(){return!U0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function My(){try{return typeof indexedDB=="object"}catch{return!1}}function Vy(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var u;e(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(t){e(t)}})}function H0(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const W0="FirebaseError";class jn extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=W0,Object.setPrototypeOf(this,jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ls.prototype.create)}}class ls{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,u=this.errors[e],h=u?q0(u,s):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new jn(o,f,s)}}function q0(r,e){return r.replace(K0,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const K0=/\{\$([^}]+)}/g;function G0(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function La(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const u=r[o],h=e[o];if(Qm(u)&&Qm(h)){if(!La(u,h))return!1}else if(u!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Qm(r){return r!==null&&typeof r=="object"}/**
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
 */function qa(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ia(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(u)}}),e}function Sa(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function Q0(r,e){const t=new Y0(r,e);return t.subscribe.bind(t)}class Y0{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");X0(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=Zh),o.error===void 0&&(o.error=Zh),o.complete===void 0&&(o.complete=Zh);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function X0(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Zh(){}/**
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
 */const J0=1e3,Z0=2,eT=4*60*60*1e3,tT=.5;function Ym(r,e=J0,t=Z0){const s=e*Math.pow(t,r),o=Math.round(tT*s*(Math.random()-.5)*2);return Math.min(eT,s+o)}/**
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
 */function Ft(r){return r&&r._delegate?r._delegate:r}class Fn{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Gi="[DEFAULT]";/**
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
 */class nT{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new V0;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(iT(e))try{this.getOrInitializeService({instanceIdentifier:Gi})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(e=Gi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gi){return this.instances.has(e)}getOptions(e=Gi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[u,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(u);s===f&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(o,u);const h=this.instances.get(o);return h&&e(h,o),()=>{u.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:rT(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Gi){return this.component?this.component.multipleInstances?e:Gi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rT(r){return r===Gi?void 0:r}function iT(r){return r.instantiationMode==="EAGER"}/**
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
 */class sT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new nT(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ce;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ce||(Ce={}));const oT={debug:Ce.DEBUG,verbose:Ce.VERBOSE,info:Ce.INFO,warn:Ce.WARN,error:Ce.ERROR,silent:Ce.SILENT},aT=Ce.INFO,lT={[Ce.DEBUG]:"log",[Ce.VERBOSE]:"log",[Ce.INFO]:"info",[Ce.WARN]:"warn",[Ce.ERROR]:"error"},uT=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=lT[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class oc{constructor(e){this.name=e,this._logLevel=aT,this._logHandler=uT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?oT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ce.DEBUG,...e),this._logHandler(this,Ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ce.VERBOSE,...e),this._logHandler(this,Ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ce.INFO,...e),this._logHandler(this,Ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ce.WARN,...e),this._logHandler(this,Ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ce.ERROR,...e),this._logHandler(this,Ce.ERROR,...e)}}const cT=(r,e)=>e.some(t=>r instanceof t);let Xm,Jm;function hT(){return Xm||(Xm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dT(){return Jm||(Jm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const by=new WeakMap,_d=new WeakMap,Fy=new WeakMap,ed=new WeakMap,Hd=new WeakMap;function fT(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",h)},u=()=>{t(di(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&by.set(t,r)}).catch(()=>{}),Hd.set(e,r),e}function pT(r){if(_d.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",h),r.removeEventListener("abort",h)},u=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",h),r.addEventListener("abort",h)});_d.set(r,e)}let wd={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return _d.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Fy.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return di(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function mT(r){wd=r(wd)}function gT(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(td(this),e,...t);return Fy.set(s,e.sort?e.sort():[e]),di(s)}:dT().includes(r)?function(...e){return r.apply(td(this),e),di(by.get(this))}:function(...e){return di(r.apply(td(this),e))}}function yT(r){return typeof r=="function"?gT(r):(r instanceof IDBTransaction&&pT(r),cT(r,hT())?new Proxy(r,wd):r)}function di(r){if(r instanceof IDBRequest)return fT(r);if(ed.has(r))return ed.get(r);const e=yT(r);return e!==r&&(ed.set(r,e),Hd.set(e,r)),e}const td=r=>Hd.get(r);function Uy(r,e,{blocked:t,upgrade:s,blocking:o,terminated:u}={}){const h=indexedDB.open(r,e),f=di(h);return s&&h.addEventListener("upgradeneeded",g=>{s(di(h.result),g.oldVersion,g.newVersion,di(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),f.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",v=>o(v.oldVersion,v.newVersion,v))}).catch(()=>{}),f}const vT=["get","getKey","getAll","getAllKeys","count"],_T=["put","add","delete","clear"],nd=new Map;function Zm(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(nd.get(e))return nd.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=_T.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||vT.includes(t)))return;const u=async function(h,...f){const g=this.transaction(h,o?"readwrite":"readonly");let v=g.store;return s&&(v=v.index(f.shift())),(await Promise.all([v[t](...f),o&&g.done]))[0]};return nd.set(e,u),u}mT(r=>({...r,get:(e,t,s)=>Zm(e,t)||r.get(e,t,s),has:(e,t)=>!!Zm(e,t)||r.has(e,t)}));/**
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
 */class wT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ET(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function ET(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ed="@firebase/app",eg="0.10.17";/**
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
 */const xr=new oc("@firebase/app"),TT="@firebase/app-compat",IT="@firebase/analytics-compat",ST="@firebase/analytics",RT="@firebase/app-check-compat",CT="@firebase/app-check",AT="@firebase/auth",kT="@firebase/auth-compat",PT="@firebase/database",NT="@firebase/data-connect",xT="@firebase/database-compat",DT="@firebase/functions",OT="@firebase/functions-compat",LT="@firebase/installations",MT="@firebase/installations-compat",VT="@firebase/messaging",bT="@firebase/messaging-compat",FT="@firebase/performance",UT="@firebase/performance-compat",jT="@firebase/remote-config",BT="@firebase/remote-config-compat",zT="@firebase/storage",$T="@firebase/storage-compat",HT="@firebase/firestore",WT="@firebase/vertexai",qT="@firebase/firestore-compat",KT="firebase",GT="11.1.0";/**
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
 */const Td="[DEFAULT]",QT={[Ed]:"fire-core",[TT]:"fire-core-compat",[ST]:"fire-analytics",[IT]:"fire-analytics-compat",[CT]:"fire-app-check",[RT]:"fire-app-check-compat",[AT]:"fire-auth",[kT]:"fire-auth-compat",[PT]:"fire-rtdb",[NT]:"fire-data-connect",[xT]:"fire-rtdb-compat",[DT]:"fire-fn",[OT]:"fire-fn-compat",[LT]:"fire-iid",[MT]:"fire-iid-compat",[VT]:"fire-fcm",[bT]:"fire-fcm-compat",[FT]:"fire-perf",[UT]:"fire-perf-compat",[jT]:"fire-rc",[BT]:"fire-rc-compat",[zT]:"fire-gcs",[$T]:"fire-gcs-compat",[HT]:"fire-fst",[qT]:"fire-fst-compat",[WT]:"fire-vertex","fire-js":"fire-js",[KT]:"fire-js-all"};/**
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
 */const Vu=new Map,YT=new Map,Id=new Map;function tg(r,e){try{r.container.addComponent(e)}catch(t){xr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function nr(r){const e=r.name;if(Id.has(e))return xr.debug(`There were multiple attempts to register component ${e}.`),!1;Id.set(e,r);for(const t of Vu.values())tg(t,r);for(const t of YT.values())tg(t,r);return!0}function us(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Jn(r){return r.settings!==void 0}/**
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
 */const XT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},fi=new ls("app","Firebase",XT);/**
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
 */class JT{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fi.create("app-deleted",{appName:this._name})}}/**
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
 */const Eo=GT;function jy(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Td,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw fi.create("bad-app-name",{appName:String(o)});if(t||(t=Dy()),!t)throw fi.create("no-options");const u=Vu.get(o);if(u){if(La(t,u.options)&&La(s,u.config))return u;throw fi.create("duplicate-app",{appName:o})}const h=new sT(o);for(const g of Id.values())h.addComponent(g);const f=new JT(t,s,h);return Vu.set(o,f),f}function Wd(r=Td){const e=Vu.get(r);if(!e&&r===Td&&Dy())return jy();if(!e)throw fi.create("no-app",{appName:r});return e}function _n(r,e,t){var s;let o=(s=QT[r])!==null&&s!==void 0?s:r;t&&(o+=`-${t}`);const u=o.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const f=[`Unable to register library "${o}" with version "${e}":`];u&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&h&&f.push("and"),h&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xr.warn(f.join(" "));return}nr(new Fn(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const ZT="firebase-heartbeat-database",eI=1,Ma="firebase-heartbeat-store";let rd=null;function By(){return rd||(rd=Uy(ZT,eI,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Ma)}catch(t){console.warn(t)}}}}).catch(r=>{throw fi.create("idb-open",{originalErrorMessage:r.message})})),rd}async function tI(r){try{const t=(await By()).transaction(Ma),s=await t.objectStore(Ma).get(zy(r));return await t.done,s}catch(e){if(e instanceof jn)xr.warn(e.message);else{const t=fi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xr.warn(t.message)}}}async function ng(r,e){try{const s=(await By()).transaction(Ma,"readwrite");await s.objectStore(Ma).put(e,zy(r)),await s.done}catch(t){if(t instanceof jn)xr.warn(t.message);else{const s=fi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});xr.warn(s.message)}}}function zy(r){return`${r.name}!${r.options.appId}`}/**
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
 */const nI=1024,rI=30*24*60*60*1e3;class iI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new oI(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=rg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u)?void 0:(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const f=new Date(h.date).valueOf();return Date.now()-f<=rI}),this._storage.overwrite(this._heartbeatsCache))}catch(s){xr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=rg(),{heartbeatsToSend:s,unsentEntries:o}=sI(this._heartbeatsCache.heartbeats),u=Mu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(t){return xr.warn(t),""}}}function rg(){return new Date().toISOString().substring(0,10)}function sI(r,e=nI){const t=[];let s=r.slice();for(const o of r){const u=t.find(h=>h.agent===o.agent);if(u){if(u.dates.push(o.date),ig(t)>e){u.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),ig(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class oI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return My()?Vy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await tI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return ng(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return ng(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function ig(r){return Mu(JSON.stringify({version:2,heartbeats:r})).length}/**
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
 */function aI(r){nr(new Fn("platform-logger",e=>new wT(e),"PRIVATE")),nr(new Fn("heartbeat",e=>new iI(e),"PRIVATE")),_n(Ed,eg,r),_n(Ed,eg,"esm2017"),_n("fire-js","")}aI("");var lI="firebase",uI="11.1.0";/**
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
 */_n(lI,uI,"app");const $y="@firebase/installations",qd="0.6.11";/**
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
 */const Hy=1e4,Wy=`w:${qd}`,qy="FIS_v2",cI="https://firebaseinstallations.googleapis.com/v1",hI=60*60*1e3,dI="installations",fI="Installations";/**
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
 */const pI={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Zi=new ls(dI,fI,pI);function Ky(r){return r instanceof jn&&r.code.includes("request-failed")}/**
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
 */function Gy({projectId:r}){return`${cI}/projects/${r}/installations`}function Qy(r){return{token:r.token,requestStatus:2,expiresIn:gI(r.expiresIn),creationTime:Date.now()}}async function Yy(r,e){const s=(await e.json()).error;return Zi.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Xy({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function mI(r,{refreshToken:e}){const t=Xy(r);return t.append("Authorization",yI(e)),t}async function Jy(r){const e=await r();return e.status>=500&&e.status<600?r():e}function gI(r){return Number(r.replace("s","000"))}function yI(r){return`${qy} ${r}`}/**
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
 */async function vI({appConfig:r,heartbeatServiceProvider:e},{fid:t}){const s=Gy(r),o=Xy(r),u=e.getImmediate({optional:!0});if(u){const v=await u.getHeartbeatsHeader();v&&o.append("x-firebase-client",v)}const h={fid:t,authVersion:qy,appId:r.appId,sdkVersion:Wy},f={method:"POST",headers:o,body:JSON.stringify(h)},g=await Jy(()=>fetch(s,f));if(g.ok){const v=await g.json();return{fid:v.fid||t,registrationStatus:2,refreshToken:v.refreshToken,authToken:Qy(v.authToken)}}else throw await Yy("Create Installation",g)}/**
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
 */function Zy(r){return new Promise(e=>{setTimeout(e,r)})}/**
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
 */function _I(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const wI=/^[cdef][\w-]{21}$/,Sd="";function EI(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const t=TI(r);return wI.test(t)?t:Sd}catch{return Sd}}function TI(r){return _I(r).substr(0,22)}/**
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
 */function ac(r){return`${r.appName}!${r.appId}`}/**
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
 */const ev=new Map;function tv(r,e){const t=ac(r);nv(t,e),II(t,e)}function nv(r,e){const t=ev.get(r);if(t)for(const s of t)s(e)}function II(r,e){const t=SI();t&&t.postMessage({key:r,fid:e}),RI()}let Qi=null;function SI(){return!Qi&&"BroadcastChannel"in self&&(Qi=new BroadcastChannel("[Firebase] FID Change"),Qi.onmessage=r=>{nv(r.data.key,r.data.fid)}),Qi}function RI(){ev.size===0&&Qi&&(Qi.close(),Qi=null)}/**
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
 */const CI="firebase-installations-database",AI=1,es="firebase-installations-store";let id=null;function Kd(){return id||(id=Uy(CI,AI,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(es)}}})),id}async function bu(r,e){const t=ac(r),o=(await Kd()).transaction(es,"readwrite"),u=o.objectStore(es),h=await u.get(t);return await u.put(e,t),await o.done,(!h||h.fid!==e.fid)&&tv(r,e.fid),e}async function rv(r){const e=ac(r),s=(await Kd()).transaction(es,"readwrite");await s.objectStore(es).delete(e),await s.done}async function lc(r,e){const t=ac(r),o=(await Kd()).transaction(es,"readwrite"),u=o.objectStore(es),h=await u.get(t),f=e(h);return f===void 0?await u.delete(t):await u.put(f,t),await o.done,f&&(!h||h.fid!==f.fid)&&tv(r,f.fid),f}/**
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
 */async function Gd(r){let e;const t=await lc(r.appConfig,s=>{const o=kI(s),u=PI(r,o);return e=u.registrationPromise,u.installationEntry});return t.fid===Sd?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function kI(r){const e=r||{fid:EI(),registrationStatus:0};return iv(e)}function PI(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Zi.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=NI(r,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:xI(r)}:{installationEntry:e}}async function NI(r,e){try{const t=await vI(r,e);return bu(r.appConfig,t)}catch(t){throw Ky(t)&&t.customData.serverCode===409?await rv(r.appConfig):await bu(r.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function xI(r){let e=await sg(r.appConfig);for(;e.registrationStatus===1;)await Zy(100),e=await sg(r.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await Gd(r);return s||t}return e}function sg(r){return lc(r,e=>{if(!e)throw Zi.create("installation-not-found");return iv(e)})}function iv(r){return DI(r)?{fid:r.fid,registrationStatus:0}:r}function DI(r){return r.registrationStatus===1&&r.registrationTime+Hy<Date.now()}/**
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
 */async function OI({appConfig:r,heartbeatServiceProvider:e},t){const s=LI(r,t),o=mI(r,t),u=e.getImmediate({optional:!0});if(u){const v=await u.getHeartbeatsHeader();v&&o.append("x-firebase-client",v)}const h={installation:{sdkVersion:Wy,appId:r.appId}},f={method:"POST",headers:o,body:JSON.stringify(h)},g=await Jy(()=>fetch(s,f));if(g.ok){const v=await g.json();return Qy(v)}else throw await Yy("Generate Auth Token",g)}function LI(r,{fid:e}){return`${Gy(r)}/${e}/authTokens:generate`}/**
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
 */async function Qd(r,e=!1){let t;const s=await lc(r.appConfig,u=>{if(!sv(u))throw Zi.create("not-registered");const h=u.authToken;if(!e&&bI(h))return u;if(h.requestStatus===1)return t=MI(r,e),u;{if(!navigator.onLine)throw Zi.create("app-offline");const f=UI(u);return t=VI(r,f),f}});return t?await t:s.authToken}async function MI(r,e){let t=await og(r.appConfig);for(;t.authToken.requestStatus===1;)await Zy(100),t=await og(r.appConfig);const s=t.authToken;return s.requestStatus===0?Qd(r,e):s}function og(r){return lc(r,e=>{if(!sv(e))throw Zi.create("not-registered");const t=e.authToken;return jI(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function VI(r,e){try{const t=await OI(r,e),s=Object.assign(Object.assign({},e),{authToken:t});return await bu(r.appConfig,s),t}catch(t){if(Ky(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await rv(r.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await bu(r.appConfig,s)}throw t}}function sv(r){return r!==void 0&&r.registrationStatus===2}function bI(r){return r.requestStatus===2&&!FI(r)}function FI(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+hI}function UI(r){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:e})}function jI(r){return r.requestStatus===1&&r.requestTime+Hy<Date.now()}/**
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
 */async function BI(r){const e=r,{installationEntry:t,registrationPromise:s}=await Gd(e);return s?s.catch(console.error):Qd(e).catch(console.error),t.fid}/**
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
 */async function zI(r,e=!1){const t=r;return await $I(t),(await Qd(t,e)).token}async function $I(r){const{registrationPromise:e}=await Gd(r);e&&await e}/**
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
 */function HI(r){if(!r||!r.options)throw sd("App Configuration");if(!r.name)throw sd("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!r.options[t])throw sd(t);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function sd(r){return Zi.create("missing-app-config-values",{valueName:r})}/**
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
 */const ov="installations",WI="installations-internal",qI=r=>{const e=r.getProvider("app").getImmediate(),t=HI(e),s=us(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},KI=r=>{const e=r.getProvider("app").getImmediate(),t=us(e,ov).getImmediate();return{getId:()=>BI(t),getToken:o=>zI(t,o)}};function GI(){nr(new Fn(ov,qI,"PUBLIC")),nr(new Fn(WI,KI,"PRIVATE"))}GI();_n($y,qd);_n($y,qd,"esm2017");/**
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
 */const Fu="analytics",QI="firebase_id",YI="origin",XI=60*1e3,JI="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Yd="https://www.googletagmanager.com/gtag/js";/**
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
 */const Jt=new oc("@firebase/analytics");/**
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
 */const ZI={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ln=new ls("analytics","Analytics",ZI);/**
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
 */function eS(r){if(!r.startsWith(Yd)){const e=ln.create("invalid-gtag-resource",{gtagURL:r});return Jt.warn(e.message),""}return r}function av(r){return Promise.all(r.map(e=>e.catch(t=>t)))}function tS(r,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(r,e)),t}function nS(r,e){const t=tS("firebase-js-sdk-policy",{createScriptURL:eS}),s=document.createElement("script"),o=`${Yd}?l=${r}&id=${e}`;s.src=t?t==null?void 0:t.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function rS(r){let e=[];return Array.isArray(window[r])?e=window[r]:window[r]=e,e}async function iS(r,e,t,s,o,u){const h=s[o];try{if(h)await e[h];else{const g=(await av(t)).find(v=>v.measurementId===o);g&&await e[g.appId]}}catch(f){Jt.error(f)}r("config",o,u)}async function sS(r,e,t,s,o){try{let u=[];if(o&&o.send_to){let h=o.send_to;Array.isArray(h)||(h=[h]);const f=await av(t);for(const g of h){const v=f.find(S=>S.measurementId===g),E=v&&e[v.appId];if(E)u.push(E);else{u=[];break}}}u.length===0&&(u=Object.values(e)),await Promise.all(u),r("event",s,o||{})}catch(u){Jt.error(u)}}function oS(r,e,t,s){async function o(u,...h){try{if(u==="event"){const[f,g]=h;await sS(r,e,t,f,g)}else if(u==="config"){const[f,g]=h;await iS(r,e,t,s,f,g)}else if(u==="consent"){const[f,g]=h;r("consent",f,g)}else if(u==="get"){const[f,g,v]=h;r("get",f,g,v)}else if(u==="set"){const[f]=h;r("set",f)}else r(u,...h)}catch(f){Jt.error(f)}}return o}function aS(r,e,t,s,o){let u=function(...h){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(u=window[o]),window[o]=oS(u,r,e,t),{gtagCore:u,wrappedGtag:window[o]}}function lS(r){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Yd)&&t.src.includes(r))return t;return null}/**
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
 */const uS=30,cS=1e3;class hS{constructor(e={},t=cS){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const lv=new hS;function dS(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function fS(r){var e;const{appId:t,apiKey:s}=r,o={method:"GET",headers:dS(s)},u=JI.replace("{app-id}",t),h=await fetch(u,o);if(h.status!==200&&h.status!==304){let f="";try{const g=await h.json();!((e=g.error)===null||e===void 0)&&e.message&&(f=g.error.message)}catch{}throw ln.create("config-fetch-failed",{httpStatus:h.status,responseMessage:f})}return h.json()}async function pS(r,e=lv,t){const{appId:s,apiKey:o,measurementId:u}=r.options;if(!s)throw ln.create("no-app-id");if(!o){if(u)return{measurementId:u,appId:s};throw ln.create("no-api-key")}const h=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},f=new yS;return setTimeout(async()=>{f.abort()},XI),uv({appId:s,apiKey:o,measurementId:u},h,f,e)}async function uv(r,{throttleEndTimeMillis:e,backoffCount:t},s,o=lv){var u;const{appId:h,measurementId:f}=r;try{await mS(s,e)}catch(g){if(f)return Jt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:h,measurementId:f};throw g}try{const g=await fS(r);return o.deleteThrottleMetadata(h),g}catch(g){const v=g;if(!gS(v)){if(o.deleteThrottleMetadata(h),f)return Jt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${v==null?void 0:v.message}]`),{appId:h,measurementId:f};throw g}const E=Number((u=v==null?void 0:v.customData)===null||u===void 0?void 0:u.httpStatus)===503?Ym(t,o.intervalMillis,uS):Ym(t,o.intervalMillis),S={throttleEndTimeMillis:Date.now()+E,backoffCount:t+1};return o.setThrottleMetadata(h,S),Jt.debug(`Calling attemptFetch again in ${E} millis`),uv(r,S,s,o)}}function mS(r,e){return new Promise((t,s)=>{const o=Math.max(e-Date.now(),0),u=setTimeout(t,o);r.addEventListener(()=>{clearTimeout(u),s(ln.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function gS(r){if(!(r instanceof jn)||!r.customData)return!1;const e=Number(r.customData.httpStatus);return e===429||e===500||e===503||e===504}class yS{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function vS(r,e,t,s,o){if(o&&o.global){r("event",t,s);return}else{const u=await e,h=Object.assign(Object.assign({},s),{send_to:u});r("event",t,h)}}/**
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
 */async function _S(){if(My())try{await Vy()}catch(r){return Jt.warn(ln.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return Jt.warn(ln.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function wS(r,e,t,s,o,u,h){var f;const g=pS(r);g.then(F=>{t[F.measurementId]=F.appId,r.options.measurementId&&F.measurementId!==r.options.measurementId&&Jt.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${F.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(F=>Jt.error(F)),e.push(g);const v=_S().then(F=>{if(F)return s.getId()}),[E,S]=await Promise.all([g,v]);lS(u)||nS(u,E.measurementId),o("js",new Date);const A=(f=h==null?void 0:h.config)!==null&&f!==void 0?f:{};return A[YI]="firebase",A.update=!0,S!=null&&(A[QI]=S),o("config",E.measurementId,A),E.measurementId}/**
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
 */class ES{constructor(e){this.app=e}_delete(){return delete Ca[this.app.options.appId],Promise.resolve()}}let Ca={},ag=[];const lg={};let od="dataLayer",TS="gtag",ug,cv,cg=!1;function IS(){const r=[];if(Ly()&&r.push("This is a browser extension environment."),H0()||r.push("Cookies are not available."),r.length>0){const e=r.map((s,o)=>`(${o+1}) ${s}`).join(" "),t=ln.create("invalid-analytics-context",{errorInfo:e});Jt.warn(t.message)}}function SS(r,e,t){IS();const s=r.options.appId;if(!s)throw ln.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)Jt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ln.create("no-api-key");if(Ca[s]!=null)throw ln.create("already-exists",{id:s});if(!cg){rS(od);const{wrappedGtag:u,gtagCore:h}=aS(Ca,ag,lg,od,TS);cv=u,ug=h,cg=!0}return Ca[s]=wS(r,ag,lg,e,ug,od,t),new ES(r)}function RS(r=Wd()){r=Ft(r);const e=us(r,Fu);return e.isInitialized()?e.getImmediate():CS(r)}function CS(r,e={}){const t=us(r,Fu);if(t.isInitialized()){const o=t.getImmediate();if(La(e,t.getOptions()))return o;throw ln.create("already-initialized")}return t.initialize({options:e})}function AS(r,e,t,s){r=Ft(r),vS(cv,Ca[r.app.options.appId],e,t,s).catch(o=>Jt.error(o))}const hg="@firebase/analytics",dg="0.10.10";function kS(){nr(new Fn(Fu,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return SS(s,o,t)},"PUBLIC")),nr(new Fn("analytics-internal",r,"PRIVATE")),_n(hg,dg),_n(hg,dg,"esm2017");function r(e){try{const t=e.getProvider(Fu).getImmediate();return{logEvent:(s,o,u)=>AS(t,s,o,u)}}catch(t){throw ln.create("interop-component-reg-failed",{reason:t})}}}kS();function Xd(r,e){var t={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(t[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(t[s[o]]=r[s[o]]);return t}function hv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const PS=hv,dv=new ls("auth","Firebase",hv());/**
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
 */const Uu=new oc("@firebase/auth");function NS(r,...e){Uu.logLevel<=Ce.WARN&&Uu.warn(`Auth (${Eo}): ${r}`,...e)}function Cu(r,...e){Uu.logLevel<=Ce.ERROR&&Uu.error(`Auth (${Eo}): ${r}`,...e)}/**
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
 */function Un(r,...e){throw Jd(r,...e)}function Zn(r,...e){return Jd(r,...e)}function fv(r,e,t){const s=Object.assign(Object.assign({},PS()),{[e]:t});return new ls("auth","Firebase",s).create(e,{appName:r.name})}function kr(r){return fv(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Jd(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return dv.create(r,...e)}function ge(r,e,...t){if(!r)throw Jd(e,...t)}function Sr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Cu(e),new Error(e)}function Dr(r,e){r||Sr(e)}/**
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
 */function Rd(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function xS(){return fg()==="http:"||fg()==="https:"}function fg(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function DS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xS()||Ly()||"connection"in navigator)?navigator.onLine:!0}function OS(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Ka{constructor(e,t){this.shortDelay=e,this.longDelay=t,Dr(t>e,"Short delay should be less than long delay!"),this.isMobile=F0()||B0()}get(){return DS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Zd(r,e){Dr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class pv{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Sr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Sr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Sr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const LS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const MS=new Ka(3e4,6e4);function Lr(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Mr(r,e,t,s,o={}){return mv(r,o,async()=>{let u={},h={};s&&(e==="GET"?h=s:u={body:JSON.stringify(s)});const f=qa(Object.assign({key:r.config.apiKey},h)).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const v=Object.assign({method:e,headers:g},u);return j0()||(v.referrerPolicy="no-referrer"),pv.fetch()(gv(r,r.config.apiHost,t,f),v)})}async function mv(r,e,t){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},LS),e);try{const o=new bS(r),u=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await u.json();if("needConfirmation"in h)throw vu(r,"account-exists-with-different-credential",h);if(u.ok&&!("errorMessage"in h))return h;{const f=u.ok?h.errorMessage:h.error.message,[g,v]=f.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw vu(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw vu(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw vu(r,"user-disabled",h);const E=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw fv(r,E,v);Un(r,E)}}catch(o){if(o instanceof jn)throw o;Un(r,"network-request-failed",{message:String(o)})}}async function Ga(r,e,t,s,o={}){const u=await Mr(r,e,t,s,o);return"mfaPendingCredential"in u&&Un(r,"multi-factor-auth-required",{_serverResponse:u}),u}function gv(r,e,t,s){const o=`${e}${t}?${s}`;return r.config.emulator?Zd(r.config,o):`${r.config.apiScheme}://${o}`}function VS(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class bS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Zn(this.auth,"network-request-failed")),MS.get())})}}function vu(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Zn(r,e,s);return o.customData._tokenResponse=t,o}function pg(r){return r!==void 0&&r.enterprise!==void 0}class FS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return VS(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function US(r,e){return Mr(r,"GET","/v2/recaptchaConfig",Lr(r,e))}/**
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
 */async function jS(r,e){return Mr(r,"POST","/v1/accounts:delete",e)}async function yv(r,e){return Mr(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Aa(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function BS(r,e=!1){const t=Ft(r),s=await t.getIdToken(e),o=ef(s);ge(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,h=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Aa(ad(o.auth_time)),issuedAtTime:Aa(ad(o.iat)),expirationTime:Aa(ad(o.exp)),signInProvider:h||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function ad(r){return Number(r)*1e3}function ef(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Cu("JWT malformed, contained fewer than 3 sections"),null;try{const o=Ny(t);return o?JSON.parse(o):(Cu("Failed to decode base64 JWT payload"),null)}catch(o){return Cu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function mg(r){const e=ef(r);return ge(e,"internal-error"),ge(typeof e.exp<"u","internal-error"),ge(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Va(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof jn&&zS(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function zS({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class $S{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Cd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Aa(this.lastLoginAt),this.creationTime=Aa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ju(r){var e;const t=r.auth,s=await r.getIdToken(),o=await Va(r,yv(t,{idToken:s}));ge(o==null?void 0:o.users.length,t,"internal-error");const u=o.users[0];r._notifyReloadListener(u);const h=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?vv(u.providerUserInfo):[],f=WS(r.providerData,h),g=r.isAnonymous,v=!(r.email&&u.passwordHash)&&!(f!=null&&f.length),E=g?v:!1,S={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:f,metadata:new Cd(u.createdAt,u.lastLoginAt),isAnonymous:E};Object.assign(r,S)}async function HS(r){const e=Ft(r);await ju(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function WS(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function vv(r){return r.map(e=>{var{providerId:t}=e,s=Xd(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function qS(r,e){const t=await mv(r,{},async()=>{const s=qa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,h=gv(r,o,"/v1/token",`key=${u}`),f=await r._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",pv.fetch()(h,{method:"POST",headers:f,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function KS(r,e){return Mr(r,"POST","/v2/accounts:revokeToken",Lr(r,e))}/**
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
 */class uo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ge(e.idToken,"internal-error"),ge(typeof e.idToken<"u","internal-error"),ge(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):mg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ge(e.length!==0,"internal-error");const t=mg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ge(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:u}=await qS(e,t);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:u}=t,h=new uo;return s&&(ge(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(ge(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),u&&(ge(typeof u=="number","internal-error",{appName:e}),h.expirationTime=u),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new uo,this.toJSON())}_performRefresh(){return Sr("not implemented")}}/**
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
 */function ai(r,e){ge(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Rr{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,u=Xd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $S(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new Cd(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const t=await Va(this,this.stsTokenManager.getToken(this.auth,e));return ge(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return BS(this,e)}reload(){return HS(this)}_assign(e){this!==e&&(ge(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Rr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ge(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await ju(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Jn(this.auth.app))return Promise.reject(kr(this.auth));const e=await this.getIdToken();return await Va(this,jS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,u,h,f,g,v,E;const S=(s=t.displayName)!==null&&s!==void 0?s:void 0,A=(o=t.email)!==null&&o!==void 0?o:void 0,F=(u=t.phoneNumber)!==null&&u!==void 0?u:void 0,U=(h=t.photoURL)!==null&&h!==void 0?h:void 0,W=(f=t.tenantId)!==null&&f!==void 0?f:void 0,B=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,K=(v=t.createdAt)!==null&&v!==void 0?v:void 0,J=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:Y,emailVerified:le,isAnonymous:we,providerData:_e,stsTokenManager:N}=t;ge(Y&&N,e,"internal-error");const T=uo.fromJSON(this.name,N);ge(typeof Y=="string",e,"internal-error"),ai(S,e.name),ai(A,e.name),ge(typeof le=="boolean",e,"internal-error"),ge(typeof we=="boolean",e,"internal-error"),ai(F,e.name),ai(U,e.name),ai(W,e.name),ai(B,e.name),ai(K,e.name),ai(J,e.name);const R=new Rr({uid:Y,auth:e,email:A,emailVerified:le,displayName:S,isAnonymous:we,photoURL:U,phoneNumber:F,tenantId:W,stsTokenManager:T,createdAt:K,lastLoginAt:J});return _e&&Array.isArray(_e)&&(R.providerData=_e.map(P=>Object.assign({},P))),B&&(R._redirectEventId=B),R}static async _fromIdTokenResponse(e,t,s=!1){const o=new uo;o.updateFromServerResponse(t);const u=new Rr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await ju(u),u}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];ge(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?vv(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),f=new uo;f.updateFromIdToken(s);const g=new Rr({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),v={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new Cd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,v),g}}/**
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
 */const gg=new Map;function Cr(r){Dr(r instanceof Function,"Expected a class definition");let e=gg.get(r);return e?(Dr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,gg.set(r,e),e)}/**
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
 */class _v{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}_v.type="NONE";const yg=_v;/**
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
 */function Au(r,e,t){return`firebase:${r}:${e}:${t}`}class co{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Au(this.userKey,o.apiKey,u),this.fullPersistenceKey=Au("persistence",o.apiKey,u),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Rr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new co(Cr(yg),e,s);const o=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let u=o[0]||Cr(yg);const h=Au(s,e.config.apiKey,e.name);let f=null;for(const v of t)try{const E=await v._get(h);if(E){const S=Rr._fromJSON(e,E);v!==u&&(f=S),u=v;break}}catch{}const g=o.filter(v=>v._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new co(u,e,s):(u=g[0],f&&await u._set(h,f.toJSON()),await Promise.all(t.map(async v=>{if(v!==u)try{await v._remove(h)}catch{}})),new co(u,e,s))}}/**
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
 */function vg(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Iv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(wv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Rv(e))return"Blackberry";if(Cv(e))return"Webos";if(Ev(e))return"Safari";if((e.includes("chrome/")||Tv(e))&&!e.includes("edge/"))return"Chrome";if(Sv(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function wv(r=bt()){return/firefox\//i.test(r)}function Ev(r=bt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Tv(r=bt()){return/crios\//i.test(r)}function Iv(r=bt()){return/iemobile/i.test(r)}function Sv(r=bt()){return/android/i.test(r)}function Rv(r=bt()){return/blackberry/i.test(r)}function Cv(r=bt()){return/webos/i.test(r)}function tf(r=bt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function GS(r=bt()){var e;return tf(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function QS(){return z0()&&document.documentMode===10}function Av(r=bt()){return tf(r)||Sv(r)||Cv(r)||Rv(r)||/windows phone/i.test(r)||Iv(r)}/**
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
 */function kv(r,e=[]){let t;switch(r){case"Browser":t=vg(bt());break;case"Worker":t=`${vg(bt())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Eo}/${s}`}/**
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
 */class YS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=u=>new Promise((h,f)=>{try{const g=e(u);h(g)}catch(g){f(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function XS(r,e={}){return Mr(r,"GET","/v2/passwordPolicy",Lr(r,e))}/**
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
 */const JS=6;class ZS{constructor(e){var t,s,o,u;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:JS,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,u,h,f;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(u=g.containsUppercaseLetter)!==null&&u!==void 0?u:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(f=g.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),g}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class eR{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _g(this),this.idTokenSubscription=new _g(this),this.beforeStateQueue=new YS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Cr(t)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await co.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await yv(this,{idToken:e}),s=await Rr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Jn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===f)&&(g!=null&&g.user)&&(o=g.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ge(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ju(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=OS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Jn(this.app))return Promise.reject(kr(this));const t=e?Ft(e):null;return t&&ge(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ge(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Jn(this.app)?Promise.reject(kr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Jn(this.app)?Promise.reject(kr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Cr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await XS(this),t=new ZS(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ls("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await KS(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Cr(e)||this._popupRedirectResolver;ge(t,this,"argument-error"),this.redirectPersistenceManager=await co.create(this,[Cr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const u=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(ge(f,this,"internal-error"),f.then(()=>{h||u(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ge(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=kv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&NS(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function _i(r){return Ft(r)}class _g{constructor(e){this.auth=e,this.observer=null,this.addObserver=Q0(t=>this.observer=t)}get next(){return ge(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let uc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function tR(r){uc=r}function Pv(r){return uc.loadJS(r)}function nR(){return uc.recaptchaEnterpriseScript}function rR(){return uc.gapiScript}function iR(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class sR{constructor(){this.enterprise=new oR}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class oR{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const aR="recaptcha-enterprise",Nv="NO_RECAPTCHA";class lR{constructor(e){this.type=aR,this.auth=_i(e)}async verify(e="verify",t=!1){async function s(u){if(!t){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(h,f)=>{US(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const v=new FS(g);return u.tenantId==null?u._agentRecaptchaConfig=v:u._tenantRecaptchaConfigs[u.tenantId]=v,h(v.siteKey)}}).catch(g=>{f(g)})})}function o(u,h,f){const g=window.grecaptcha;pg(g)?g.enterprise.ready(()=>{g.enterprise.execute(u,{action:e}).then(v=>{h(v)}).catch(()=>{h(Nv)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new sR().execute("siteKey",{action:"verify"}):new Promise((u,h)=>{s(this.auth).then(f=>{if(!t&&pg(window.grecaptcha))o(f,u,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=nR();g.length!==0&&(g+=f),Pv(g).then(()=>{o(f,u,h)}).catch(v=>{h(v)})}}).catch(f=>{h(f)})})}}async function wg(r,e,t,s=!1,o=!1){const u=new lR(r);let h;if(o)h=Nv;else try{h=await u.verify(t)}catch{h=await u.verify(t,!0)}const f=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const g=f.phoneEnrollmentInfo.phoneNumber,v=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:v,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const g=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return s?Object.assign(f,{captchaResp:h}):Object.assign(f,{captchaResponse:h}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function Bu(r,e,t,s,o){var u;if(!((u=r._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await wg(r,e,t,t==="getOobCode");return s(r,h)}else return s(r,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await wg(r,e,t,t==="getOobCode");return s(r,f)}else return Promise.reject(h)})}/**
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
 */function uR(r,e){const t=us(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),u=t.getOptions();if(La(u,e??{}))return o;Un(o,"already-initialized")}return t.initialize({options:e})}function cR(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Cr);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function hR(r,e,t){const s=_i(r);ge(s._canInitEmulator,s,"emulator-config-failed"),ge(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,u=xv(e),{host:h,port:f}=dR(e),g=f===null?"":`:${f}`;s.config.emulator={url:`${u}//${h}${g}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:h,port:f,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})}),fR()}function xv(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function dR(r){const e=xv(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:Eg(s.substr(u.length+1))}}else{const[u,h]=s.split(":");return{host:u,port:Eg(h)}}}function Eg(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function fR(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class nf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Sr("not implemented")}_getIdTokenResponse(e){return Sr("not implemented")}_linkToIdToken(e,t){return Sr("not implemented")}_getReauthenticationResolver(e){return Sr("not implemented")}}async function pR(r,e){return Mr(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function mR(r,e){return Ga(r,"POST","/v1/accounts:signInWithPassword",Lr(r,e))}async function gR(r,e){return Mr(r,"POST","/v1/accounts:sendOobCode",Lr(r,e))}async function yR(r,e){return gR(r,e)}/**
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
 */async function vR(r,e){return Ga(r,"POST","/v1/accounts:signInWithEmailLink",Lr(r,e))}async function _R(r,e){return Ga(r,"POST","/v1/accounts:signInWithEmailLink",Lr(r,e))}/**
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
 */class ba extends nf{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new ba(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new ba(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bu(e,t,"signInWithPassword",mR);case"emailLink":return vR(e,{email:this._email,oobCode:this._password});default:Un(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bu(e,s,"signUpPassword",pR);case"emailLink":return _R(e,{idToken:t,email:this._email,oobCode:this._password});default:Un(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ho(r,e){return Ga(r,"POST","/v1/accounts:signInWithIdp",Lr(r,e))}/**
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
 */const wR="http://localhost";class ts extends nf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ts(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Un("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,u=Xd(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new ts(s,o);return h.idToken=u.idToken||void 0,h.accessToken=u.accessToken||void 0,h.secret=u.secret,h.nonce=u.nonce,h.pendingToken=u.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return ho(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,ho(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ho(e,t)}buildRequest(){const e={requestUri:wR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=qa(t)}return e}}/**
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
 */function ER(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function TR(r){const e=Ia(Sa(r)).link,t=e?Ia(Sa(e)).deep_link_id:null,s=Ia(Sa(r)).deep_link_id;return(s?Ia(Sa(s)).link:null)||s||t||e||r}class rf{constructor(e){var t,s,o,u,h,f;const g=Ia(Sa(e)),v=(t=g.apiKey)!==null&&t!==void 0?t:null,E=(s=g.oobCode)!==null&&s!==void 0?s:null,S=ER((o=g.mode)!==null&&o!==void 0?o:null);ge(v&&E&&S,"argument-error"),this.apiKey=v,this.operation=S,this.code=E,this.continueUrl=(u=g.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(h=g.languageCode)!==null&&h!==void 0?h:null,this.tenantId=(f=g.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const t=TR(e);try{return new rf(t)}catch{return null}}}/**
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
 */class To{constructor(){this.providerId=To.PROVIDER_ID}static credential(e,t){return ba._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=rf.parseLink(t);return ge(s,"argument-error"),ba._fromEmailAndCode(e,s.code,s.tenantId)}}To.PROVIDER_ID="password";To.EMAIL_PASSWORD_SIGN_IN_METHOD="password";To.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Dv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Qa extends Dv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class li extends Qa{constructor(){super("facebook.com")}static credential(e){return ts._fromParams({providerId:li.PROVIDER_ID,signInMethod:li.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return li.credentialFromTaggedObject(e)}static credentialFromError(e){return li.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return li.credential(e.oauthAccessToken)}catch{return null}}}li.FACEBOOK_SIGN_IN_METHOD="facebook.com";li.PROVIDER_ID="facebook.com";/**
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
 */class ui extends Qa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ts._fromParams({providerId:ui.PROVIDER_ID,signInMethod:ui.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ui.credentialFromTaggedObject(e)}static credentialFromError(e){return ui.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return ui.credential(t,s)}catch{return null}}}ui.GOOGLE_SIGN_IN_METHOD="google.com";ui.PROVIDER_ID="google.com";/**
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
 */class ci extends Qa{constructor(){super("github.com")}static credential(e){return ts._fromParams({providerId:ci.PROVIDER_ID,signInMethod:ci.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ci.credentialFromTaggedObject(e)}static credentialFromError(e){return ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ci.credential(e.oauthAccessToken)}catch{return null}}}ci.GITHUB_SIGN_IN_METHOD="github.com";ci.PROVIDER_ID="github.com";/**
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
 */class hi extends Qa{constructor(){super("twitter.com")}static credential(e,t){return ts._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return hi.credentialFromTaggedObject(e)}static credentialFromError(e){return hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return hi.credential(t,s)}catch{return null}}}hi.TWITTER_SIGN_IN_METHOD="twitter.com";hi.PROVIDER_ID="twitter.com";/**
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
 */async function IR(r,e){return Ga(r,"POST","/v1/accounts:signUp",Lr(r,e))}/**
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
 */class ns{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const u=await Rr._fromIdTokenResponse(e,s,o),h=Tg(s);return new ns({user:u,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Tg(s);return new ns({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Tg(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class zu extends jn{constructor(e,t,s,o){var u;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,zu.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new zu(e,t,s,o)}}function Ov(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?zu._fromErrorAndOperation(r,u,e,s):u})}async function SR(r,e,t=!1){const s=await Va(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return ns._forOperation(r,"link",s)}/**
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
 */async function RR(r,e,t=!1){const{auth:s}=r;if(Jn(s.app))return Promise.reject(kr(s));const o="reauthenticate";try{const u=await Va(r,Ov(s,o,e,r),t);ge(u.idToken,s,"internal-error");const h=ef(u.idToken);ge(h,s,"internal-error");const{sub:f}=h;return ge(r.uid===f,s,"user-mismatch"),ns._forOperation(r,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Un(s,"user-mismatch"),u}}/**
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
 */async function Lv(r,e,t=!1){if(Jn(r.app))return Promise.reject(kr(r));const s="signIn",o=await Ov(r,s,e),u=await ns._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(u.user),u}async function CR(r,e){return Lv(_i(r),e)}/**
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
 */async function Mv(r){const e=_i(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function AR(r,e,t){const s=_i(r);await Bu(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",yR)}async function kR(r,e,t){if(Jn(r.app))return Promise.reject(kr(r));const s=_i(r),h=await Bu(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",IR).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&Mv(r),g}),f=await ns._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(f.user),f}function PR(r,e,t){return Jn(r.app)?Promise.reject(kr(r)):CR(Ft(r),To.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Mv(r),s})}function NR(r,e,t,s){return Ft(r).onIdTokenChanged(e,t,s)}function xR(r,e,t){return Ft(r).beforeAuthStateChanged(e,t)}function DR(r,e,t,s){return Ft(r).onAuthStateChanged(e,t,s)}function OR(r){return Ft(r).signOut()}const $u="__sak";/**
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
 */class Vv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem($u,"1"),this.storage.removeItem($u),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const LR=1e3,MR=10;class bv extends Vv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Av(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},u=this.storage.getItem(s);QS()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,MR):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},LR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}bv.type="LOCAL";const VR=bv;/**
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
 */class Fv extends Vv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Fv.type="SESSION";const Uv=Fv;/**
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
 */function bR(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class cc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new cc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:u}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const f=Array.from(h).map(async v=>v(t.origin,u)),g=await bR(f);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}cc.receivers=[];/**
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
 */function sf(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class FR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,h;return new Promise((f,g)=>{const v=sf("",20);o.port1.start();const E=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(S){const A=S;if(A.data.eventId===v)switch(A.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),f(A.data.response);break;default:clearTimeout(E),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
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
 */function er(){return window}function UR(r){er().location.href=r}/**
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
 */function jv(){return typeof er().WorkerGlobalScope<"u"&&typeof er().importScripts=="function"}async function jR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function BR(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function zR(){return jv()?self:null}/**
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
 */const Bv="firebaseLocalStorageDb",$R=1,Hu="firebaseLocalStorage",zv="fbase_key";class Ya{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function hc(r,e){return r.transaction([Hu],e?"readwrite":"readonly").objectStore(Hu)}function HR(){const r=indexedDB.deleteDatabase(Bv);return new Ya(r).toPromise()}function Ad(){const r=indexedDB.open(Bv,$R);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Hu,{keyPath:zv})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Hu)?e(s):(s.close(),await HR(),e(await Ad()))})})}async function Ig(r,e,t){const s=hc(r,!0).put({[zv]:e,value:t});return new Ya(s).toPromise()}async function WR(r,e){const t=hc(r,!1).get(e),s=await new Ya(t).toPromise();return s===void 0?null:s.value}function Sg(r,e){const t=hc(r,!0).delete(e);return new Ya(t).toPromise()}const qR=800,KR=3;class $v{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ad(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>KR)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cc._getInstance(zR()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await jR(),!this.activeServiceWorker)return;this.sender=new FR(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||BR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ad();return await Ig(e,$u,"1"),await Sg(e,$u),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ig(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>WR(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Sg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const u=hc(o,!1).getAll();return new Ya(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:u}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$v.type="LOCAL";const GR=$v;new Ka(3e4,6e4);/**
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
 */function QR(r,e){return e?Cr(e):(ge(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class of extends nf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ho(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ho(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ho(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function YR(r){return Lv(r.auth,new of(r),r.bypassAuthState)}function XR(r){const{auth:e,user:t}=r;return ge(t,e,"internal-error"),RR(t,new of(r),r.bypassAuthState)}async function JR(r){const{auth:e,user:t}=r;return ge(t,e,"internal-error"),SR(t,new of(r),r.bypassAuthState)}/**
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
 */class Hv{constructor(e,t,s,o,u=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:u,error:h,type:f}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(g))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return YR;case"linkViaPopup":case"linkViaRedirect":return JR;case"reauthViaPopup":case"reauthViaRedirect":return XR;default:Un(this.auth,"internal-error")}}resolve(e){Dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ZR=new Ka(2e3,1e4);class lo extends Hv{constructor(e,t,s,o,u){super(e,t,o,u),this.provider=s,this.authWindow=null,this.pollId=null,lo.currentPopupAction&&lo.currentPopupAction.cancel(),lo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ge(e,this.auth,"internal-error"),e}async onExecution(){Dr(this.filter.length===1,"Popup operations only handle one event");const e=sf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Zn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Zn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,lo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ZR.get())};e()}}lo.currentPopupAction=null;/**
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
 */const eC="pendingRedirect",ku=new Map;class tC extends Hv{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=ku.get(this.auth._key());if(!e){try{const s=await nC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}ku.set(this.auth._key(),e)}return this.bypassAuthState||ku.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nC(r,e){const t=sC(e),s=iC(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function rC(r,e){ku.set(r._key(),e)}function iC(r){return Cr(r._redirectPersistence)}function sC(r){return Au(eC,r.config.apiKey,r.name)}async function oC(r,e,t=!1){if(Jn(r.app))return Promise.reject(kr(r));const s=_i(r),o=QR(s,e),h=await new tC(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
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
 */const aC=10*60*1e3;class lC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!uC(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Wv(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Zn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=aC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Rg(e))}saveEventToCache(e){this.cachedEventUids.add(Rg(e)),this.lastProcessedEventTime=Date.now()}}function Rg(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Wv({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function uC(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wv(r);default:return!1}}/**
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
 */async function cC(r,e={}){return Mr(r,"GET","/v1/projects",e)}/**
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
 */const hC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,dC=/^https?/;async function fC(r){if(r.config.emulator)return;const{authorizedDomains:e}=await cC(r);for(const t of e)try{if(pC(t))return}catch{}Un(r,"unauthorized-domain")}function pC(r){const e=Rd(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!dC.test(t))return!1;if(hC.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
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
 */const mC=new Ka(3e4,6e4);function Cg(){const r=er().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function gC(r){return new Promise((e,t)=>{var s,o,u;function h(){Cg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Cg(),t(Zn(r,"network-request-failed"))},timeout:mC.get()})}if(!((o=(s=er().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((u=er().gapi)===null||u===void 0)&&u.load)h();else{const f=iR("iframefcb");return er()[f]=()=>{gapi.load?h():t(Zn(r,"network-request-failed"))},Pv(`${rR()}?onload=${f}`).catch(g=>t(g))}}).catch(e=>{throw Pu=null,e})}let Pu=null;function yC(r){return Pu=Pu||gC(r),Pu}/**
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
 */const vC=new Ka(5e3,15e3),_C="__/auth/iframe",wC="emulator/auth/iframe",EC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},TC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function IC(r){const e=r.config;ge(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Zd(e,wC):`https://${r.config.authDomain}/${_C}`,s={apiKey:e.apiKey,appName:r.name,v:Eo},o=TC.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${t}?${qa(s).slice(1)}`}async function SC(r){const e=await yC(r),t=er().gapi;return ge(t,r,"internal-error"),e.open({where:document.body,url:IC(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:EC,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const h=Zn(r,"network-request-failed"),f=er().setTimeout(()=>{u(h)},vC.get());function g(){er().clearTimeout(f),o(s)}s.ping(g).then(g,()=>{u(h)})}))}/**
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
 */const RC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},CC=500,AC=600,kC="_blank",PC="http://localhost";class Ag{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function NC(r,e,t,s=CC,o=AC){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const g=Object.assign(Object.assign({},RC),{width:s.toString(),height:o.toString(),top:u,left:h}),v=bt().toLowerCase();t&&(f=Tv(v)?kC:t),wv(v)&&(e=e||PC,g.scrollbars="yes");const E=Object.entries(g).reduce((A,[F,U])=>`${A}${F}=${U},`,"");if(GS(v)&&f!=="_self")return xC(e||"",f),new Ag(null);const S=window.open(e||"",f,E);ge(S,r,"popup-blocked");try{S.focus()}catch{}return new Ag(S)}function xC(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const DC="__/auth/handler",OC="emulator/auth/handler",LC=encodeURIComponent("fac");async function kg(r,e,t,s,o,u){ge(r.config.authDomain,r,"auth-domain-config-required"),ge(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:Eo,eventId:o};if(e instanceof Dv){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",G0(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,S]of Object.entries({}))h[E]=S}if(e instanceof Qa){const E=e.getScopes().filter(S=>S!=="");E.length>0&&(h.scopes=E.join(","))}r.tenantId&&(h.tid=r.tenantId);const f=h;for(const E of Object.keys(f))f[E]===void 0&&delete f[E];const g=await r._getAppCheckToken(),v=g?`#${LC}=${encodeURIComponent(g)}`:"";return`${MC(r)}?${qa(f).slice(1)}${v}`}function MC({config:r}){return r.emulator?Zd(r,OC):`https://${r.authDomain}/${DC}`}/**
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
 */const ld="webStorageSupport";class VC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Uv,this._completeRedirectFn=oC,this._overrideRedirectResult=rC}async _openPopup(e,t,s,o){var u;Dr((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const h=await kg(e,t,s,Rd(),o);return NC(e,h,sf())}async _openRedirect(e,t,s,o){await this._originValidation(e);const u=await kg(e,t,s,Rd(),o);return UR(u),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:u}=this.eventManagers[t];return o?Promise.resolve(o):(Dr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await SC(e),s=new lC(e);return t.register("authEvent",o=>(ge(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ld,{type:ld},o=>{var u;const h=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[ld];h!==void 0&&t(!!h),Un(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=fC(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Av()||Ev()||tf()}}const bC=VC;var Pg="@firebase/auth",Ng="1.8.1";/**
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
 */class FC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ge(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function UC(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function jC(r){nr(new Fn("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=s.options;ge(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kv(r)},v=new eR(s,o,u,g);return cR(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),nr(new Fn("auth-internal",e=>{const t=_i(e.getProvider("auth").getImmediate());return(s=>new FC(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),_n(Pg,Ng,UC(r)),_n(Pg,Ng,"esm2017")}/**
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
 */const BC=5*60,zC=Oy("authIdTokenMaxAge")||BC;let xg=null;const $C=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>zC)return;const o=t==null?void 0:t.token;xg!==o&&(xg=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function HC(r=Wd()){const e=us(r,"auth");if(e.isInitialized())return e.getImmediate();const t=uR(r,{popupRedirectResolver:bC,persistence:[GR,VR,Uv]}),s=Oy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const h=$C(u.toString());xR(t,h,()=>h(t.currentUser)),NR(t,f=>h(f))}}const o=xy("auth");return o&&hR(t,`http://${o}`),t}function WC(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}tR({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const u=Zn("internal-error");u.customData=o,t(u)},s.type="text/javascript",s.charset="UTF-8",WC().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});jC("Browser");var Dg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qv;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,T){function R(){}R.prototype=T.prototype,N.D=T.prototype,N.prototype=new R,N.prototype.constructor=N,N.C=function(P,D,L){for(var C=Array(arguments.length-2),tt=2;tt<arguments.length;tt++)C[tt-2]=arguments[tt];return T.prototype[D].apply(P,C)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,T,R){R||(R=0);var P=Array(16);if(typeof T=="string")for(var D=0;16>D;++D)P[D]=T.charCodeAt(R++)|T.charCodeAt(R++)<<8|T.charCodeAt(R++)<<16|T.charCodeAt(R++)<<24;else for(D=0;16>D;++D)P[D]=T[R++]|T[R++]<<8|T[R++]<<16|T[R++]<<24;T=N.g[0],R=N.g[1],D=N.g[2];var L=N.g[3],C=T+(L^R&(D^L))+P[0]+3614090360&4294967295;T=R+(C<<7&4294967295|C>>>25),C=L+(D^T&(R^D))+P[1]+3905402710&4294967295,L=T+(C<<12&4294967295|C>>>20),C=D+(R^L&(T^R))+P[2]+606105819&4294967295,D=L+(C<<17&4294967295|C>>>15),C=R+(T^D&(L^T))+P[3]+3250441966&4294967295,R=D+(C<<22&4294967295|C>>>10),C=T+(L^R&(D^L))+P[4]+4118548399&4294967295,T=R+(C<<7&4294967295|C>>>25),C=L+(D^T&(R^D))+P[5]+1200080426&4294967295,L=T+(C<<12&4294967295|C>>>20),C=D+(R^L&(T^R))+P[6]+2821735955&4294967295,D=L+(C<<17&4294967295|C>>>15),C=R+(T^D&(L^T))+P[7]+4249261313&4294967295,R=D+(C<<22&4294967295|C>>>10),C=T+(L^R&(D^L))+P[8]+1770035416&4294967295,T=R+(C<<7&4294967295|C>>>25),C=L+(D^T&(R^D))+P[9]+2336552879&4294967295,L=T+(C<<12&4294967295|C>>>20),C=D+(R^L&(T^R))+P[10]+4294925233&4294967295,D=L+(C<<17&4294967295|C>>>15),C=R+(T^D&(L^T))+P[11]+2304563134&4294967295,R=D+(C<<22&4294967295|C>>>10),C=T+(L^R&(D^L))+P[12]+1804603682&4294967295,T=R+(C<<7&4294967295|C>>>25),C=L+(D^T&(R^D))+P[13]+4254626195&4294967295,L=T+(C<<12&4294967295|C>>>20),C=D+(R^L&(T^R))+P[14]+2792965006&4294967295,D=L+(C<<17&4294967295|C>>>15),C=R+(T^D&(L^T))+P[15]+1236535329&4294967295,R=D+(C<<22&4294967295|C>>>10),C=T+(D^L&(R^D))+P[1]+4129170786&4294967295,T=R+(C<<5&4294967295|C>>>27),C=L+(R^D&(T^R))+P[6]+3225465664&4294967295,L=T+(C<<9&4294967295|C>>>23),C=D+(T^R&(L^T))+P[11]+643717713&4294967295,D=L+(C<<14&4294967295|C>>>18),C=R+(L^T&(D^L))+P[0]+3921069994&4294967295,R=D+(C<<20&4294967295|C>>>12),C=T+(D^L&(R^D))+P[5]+3593408605&4294967295,T=R+(C<<5&4294967295|C>>>27),C=L+(R^D&(T^R))+P[10]+38016083&4294967295,L=T+(C<<9&4294967295|C>>>23),C=D+(T^R&(L^T))+P[15]+3634488961&4294967295,D=L+(C<<14&4294967295|C>>>18),C=R+(L^T&(D^L))+P[4]+3889429448&4294967295,R=D+(C<<20&4294967295|C>>>12),C=T+(D^L&(R^D))+P[9]+568446438&4294967295,T=R+(C<<5&4294967295|C>>>27),C=L+(R^D&(T^R))+P[14]+3275163606&4294967295,L=T+(C<<9&4294967295|C>>>23),C=D+(T^R&(L^T))+P[3]+4107603335&4294967295,D=L+(C<<14&4294967295|C>>>18),C=R+(L^T&(D^L))+P[8]+1163531501&4294967295,R=D+(C<<20&4294967295|C>>>12),C=T+(D^L&(R^D))+P[13]+2850285829&4294967295,T=R+(C<<5&4294967295|C>>>27),C=L+(R^D&(T^R))+P[2]+4243563512&4294967295,L=T+(C<<9&4294967295|C>>>23),C=D+(T^R&(L^T))+P[7]+1735328473&4294967295,D=L+(C<<14&4294967295|C>>>18),C=R+(L^T&(D^L))+P[12]+2368359562&4294967295,R=D+(C<<20&4294967295|C>>>12),C=T+(R^D^L)+P[5]+4294588738&4294967295,T=R+(C<<4&4294967295|C>>>28),C=L+(T^R^D)+P[8]+2272392833&4294967295,L=T+(C<<11&4294967295|C>>>21),C=D+(L^T^R)+P[11]+1839030562&4294967295,D=L+(C<<16&4294967295|C>>>16),C=R+(D^L^T)+P[14]+4259657740&4294967295,R=D+(C<<23&4294967295|C>>>9),C=T+(R^D^L)+P[1]+2763975236&4294967295,T=R+(C<<4&4294967295|C>>>28),C=L+(T^R^D)+P[4]+1272893353&4294967295,L=T+(C<<11&4294967295|C>>>21),C=D+(L^T^R)+P[7]+4139469664&4294967295,D=L+(C<<16&4294967295|C>>>16),C=R+(D^L^T)+P[10]+3200236656&4294967295,R=D+(C<<23&4294967295|C>>>9),C=T+(R^D^L)+P[13]+681279174&4294967295,T=R+(C<<4&4294967295|C>>>28),C=L+(T^R^D)+P[0]+3936430074&4294967295,L=T+(C<<11&4294967295|C>>>21),C=D+(L^T^R)+P[3]+3572445317&4294967295,D=L+(C<<16&4294967295|C>>>16),C=R+(D^L^T)+P[6]+76029189&4294967295,R=D+(C<<23&4294967295|C>>>9),C=T+(R^D^L)+P[9]+3654602809&4294967295,T=R+(C<<4&4294967295|C>>>28),C=L+(T^R^D)+P[12]+3873151461&4294967295,L=T+(C<<11&4294967295|C>>>21),C=D+(L^T^R)+P[15]+530742520&4294967295,D=L+(C<<16&4294967295|C>>>16),C=R+(D^L^T)+P[2]+3299628645&4294967295,R=D+(C<<23&4294967295|C>>>9),C=T+(D^(R|~L))+P[0]+4096336452&4294967295,T=R+(C<<6&4294967295|C>>>26),C=L+(R^(T|~D))+P[7]+1126891415&4294967295,L=T+(C<<10&4294967295|C>>>22),C=D+(T^(L|~R))+P[14]+2878612391&4294967295,D=L+(C<<15&4294967295|C>>>17),C=R+(L^(D|~T))+P[5]+4237533241&4294967295,R=D+(C<<21&4294967295|C>>>11),C=T+(D^(R|~L))+P[12]+1700485571&4294967295,T=R+(C<<6&4294967295|C>>>26),C=L+(R^(T|~D))+P[3]+2399980690&4294967295,L=T+(C<<10&4294967295|C>>>22),C=D+(T^(L|~R))+P[10]+4293915773&4294967295,D=L+(C<<15&4294967295|C>>>17),C=R+(L^(D|~T))+P[1]+2240044497&4294967295,R=D+(C<<21&4294967295|C>>>11),C=T+(D^(R|~L))+P[8]+1873313359&4294967295,T=R+(C<<6&4294967295|C>>>26),C=L+(R^(T|~D))+P[15]+4264355552&4294967295,L=T+(C<<10&4294967295|C>>>22),C=D+(T^(L|~R))+P[6]+2734768916&4294967295,D=L+(C<<15&4294967295|C>>>17),C=R+(L^(D|~T))+P[13]+1309151649&4294967295,R=D+(C<<21&4294967295|C>>>11),C=T+(D^(R|~L))+P[4]+4149444226&4294967295,T=R+(C<<6&4294967295|C>>>26),C=L+(R^(T|~D))+P[11]+3174756917&4294967295,L=T+(C<<10&4294967295|C>>>22),C=D+(T^(L|~R))+P[2]+718787259&4294967295,D=L+(C<<15&4294967295|C>>>17),C=R+(L^(D|~T))+P[9]+3951481745&4294967295,N.g[0]=N.g[0]+T&4294967295,N.g[1]=N.g[1]+(D+(C<<21&4294967295|C>>>11))&4294967295,N.g[2]=N.g[2]+D&4294967295,N.g[3]=N.g[3]+L&4294967295}s.prototype.u=function(N,T){T===void 0&&(T=N.length);for(var R=T-this.blockSize,P=this.B,D=this.h,L=0;L<T;){if(D==0)for(;L<=R;)o(this,N,L),L+=this.blockSize;if(typeof N=="string"){for(;L<T;)if(P[D++]=N.charCodeAt(L++),D==this.blockSize){o(this,P),D=0;break}}else for(;L<T;)if(P[D++]=N[L++],D==this.blockSize){o(this,P),D=0;break}}this.h=D,this.o+=T},s.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var T=1;T<N.length-8;++T)N[T]=0;var R=8*this.o;for(T=N.length-8;T<N.length;++T)N[T]=R&255,R/=256;for(this.u(N),N=Array(16),T=R=0;4>T;++T)for(var P=0;32>P;P+=8)N[R++]=this.g[T]>>>P&255;return N};function u(N,T){var R=f;return Object.prototype.hasOwnProperty.call(R,N)?R[N]:R[N]=T(N)}function h(N,T){this.h=T;for(var R=[],P=!0,D=N.length-1;0<=D;D--){var L=N[D]|0;P&&L==T||(R[D]=L,P=!1)}this.g=R}var f={};function g(N){return-128<=N&&128>N?u(N,function(T){return new h([T|0],0>T?-1:0)}):new h([N|0],0>N?-1:0)}function v(N){if(isNaN(N)||!isFinite(N))return S;if(0>N)return B(v(-N));for(var T=[],R=1,P=0;N>=R;P++)T[P]=N/R|0,R*=4294967296;return new h(T,0)}function E(N,T){if(N.length==0)throw Error("number format error: empty string");if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(N.charAt(0)=="-")return B(E(N.substring(1),T));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=v(Math.pow(T,8)),P=S,D=0;D<N.length;D+=8){var L=Math.min(8,N.length-D),C=parseInt(N.substring(D,D+L),T);8>L?(L=v(Math.pow(T,L)),P=P.j(L).add(v(C))):(P=P.j(R),P=P.add(v(C)))}return P}var S=g(0),A=g(1),F=g(16777216);r=h.prototype,r.m=function(){if(W(this))return-B(this).m();for(var N=0,T=1,R=0;R<this.g.length;R++){var P=this.i(R);N+=(0<=P?P:4294967296+P)*T,T*=4294967296}return N},r.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(U(this))return"0";if(W(this))return"-"+B(this).toString(N);for(var T=v(Math.pow(N,6)),R=this,P="";;){var D=le(R,T).g;R=K(R,D.j(T));var L=((0<R.g.length?R.g[0]:R.h)>>>0).toString(N);if(R=D,U(R))return L+P;for(;6>L.length;)L="0"+L;P=L+P}},r.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function U(N){if(N.h!=0)return!1;for(var T=0;T<N.g.length;T++)if(N.g[T]!=0)return!1;return!0}function W(N){return N.h==-1}r.l=function(N){return N=K(this,N),W(N)?-1:U(N)?0:1};function B(N){for(var T=N.g.length,R=[],P=0;P<T;P++)R[P]=~N.g[P];return new h(R,~N.h).add(A)}r.abs=function(){return W(this)?B(this):this},r.add=function(N){for(var T=Math.max(this.g.length,N.g.length),R=[],P=0,D=0;D<=T;D++){var L=P+(this.i(D)&65535)+(N.i(D)&65535),C=(L>>>16)+(this.i(D)>>>16)+(N.i(D)>>>16);P=C>>>16,L&=65535,C&=65535,R[D]=C<<16|L}return new h(R,R[R.length-1]&-2147483648?-1:0)};function K(N,T){return N.add(B(T))}r.j=function(N){if(U(this)||U(N))return S;if(W(this))return W(N)?B(this).j(B(N)):B(B(this).j(N));if(W(N))return B(this.j(B(N)));if(0>this.l(F)&&0>N.l(F))return v(this.m()*N.m());for(var T=this.g.length+N.g.length,R=[],P=0;P<2*T;P++)R[P]=0;for(P=0;P<this.g.length;P++)for(var D=0;D<N.g.length;D++){var L=this.i(P)>>>16,C=this.i(P)&65535,tt=N.i(D)>>>16,kt=N.i(D)&65535;R[2*P+2*D]+=C*kt,J(R,2*P+2*D),R[2*P+2*D+1]+=L*kt,J(R,2*P+2*D+1),R[2*P+2*D+1]+=C*tt,J(R,2*P+2*D+1),R[2*P+2*D+2]+=L*tt,J(R,2*P+2*D+2)}for(P=0;P<T;P++)R[P]=R[2*P+1]<<16|R[2*P];for(P=T;P<2*T;P++)R[P]=0;return new h(R,0)};function J(N,T){for(;(N[T]&65535)!=N[T];)N[T+1]+=N[T]>>>16,N[T]&=65535,T++}function Y(N,T){this.g=N,this.h=T}function le(N,T){if(U(T))throw Error("division by zero");if(U(N))return new Y(S,S);if(W(N))return T=le(B(N),T),new Y(B(T.g),B(T.h));if(W(T))return T=le(N,B(T)),new Y(B(T.g),T.h);if(30<N.g.length){if(W(N)||W(T))throw Error("slowDivide_ only works with positive integers.");for(var R=A,P=T;0>=P.l(N);)R=we(R),P=we(P);var D=_e(R,1),L=_e(P,1);for(P=_e(P,2),R=_e(R,2);!U(P);){var C=L.add(P);0>=C.l(N)&&(D=D.add(R),L=C),P=_e(P,1),R=_e(R,1)}return T=K(N,D.j(T)),new Y(D,T)}for(D=S;0<=N.l(T);){for(R=Math.max(1,Math.floor(N.m()/T.m())),P=Math.ceil(Math.log(R)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),L=v(R),C=L.j(T);W(C)||0<C.l(N);)R-=P,L=v(R),C=L.j(T);U(L)&&(L=A),D=D.add(L),N=K(N,C)}return new Y(D,N)}r.A=function(N){return le(this,N).h},r.and=function(N){for(var T=Math.max(this.g.length,N.g.length),R=[],P=0;P<T;P++)R[P]=this.i(P)&N.i(P);return new h(R,this.h&N.h)},r.or=function(N){for(var T=Math.max(this.g.length,N.g.length),R=[],P=0;P<T;P++)R[P]=this.i(P)|N.i(P);return new h(R,this.h|N.h)},r.xor=function(N){for(var T=Math.max(this.g.length,N.g.length),R=[],P=0;P<T;P++)R[P]=this.i(P)^N.i(P);return new h(R,this.h^N.h)};function we(N){for(var T=N.g.length+1,R=[],P=0;P<T;P++)R[P]=N.i(P)<<1|N.i(P-1)>>>31;return new h(R,N.h)}function _e(N,T){var R=T>>5;T%=32;for(var P=N.g.length-R,D=[],L=0;L<P;L++)D[L]=0<T?N.i(L+R)>>>T|N.i(L+R+1)<<32-T:N.i(L+R);return new h(D,N.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=E,qv=h}).apply(typeof Dg<"u"?Dg:typeof self<"u"?self:typeof window<"u"?window:{});var _u=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Kv,Ra,Gv,Nu,kd,Qv,Yv,Xv;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,p,y){return l==Array.prototype||l==Object.prototype||(l[p]=y.value),l};function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof _u=="object"&&_u];for(var p=0;p<l.length;++p){var y=l[p];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(l,p){if(p)e:{var y=s;l=l.split(".");for(var w=0;w<l.length-1;w++){var M=l[w];if(!(M in y))break e;y=y[M]}l=l[l.length-1],w=y[l],p=p(w),p!=w&&p!=null&&e(y,l,{configurable:!0,writable:!0,value:p})}}function u(l,p){l instanceof String&&(l+="");var y=0,w=!1,M={next:function(){if(!w&&y<l.length){var z=y++;return{value:p(z,l[z]),done:!1}}return w=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}o("Array.prototype.values",function(l){return l||function(){return u(this,function(p,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},f=this||self;function g(l){var p=typeof l;return p=p!="object"?p:l?Array.isArray(l)?"array":p:"null",p=="array"||p=="object"&&typeof l.length=="number"}function v(l){var p=typeof l;return p=="object"&&l!=null||p=="function"}function E(l,p,y){return l.call.apply(l.bind,arguments)}function S(l,p,y){if(!l)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,w),l.apply(p,M)}}return function(){return l.apply(p,arguments)}}function A(l,p,y){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:S,A.apply(null,arguments)}function F(l,p){var y=Array.prototype.slice.call(arguments,1);return function(){var w=y.slice();return w.push.apply(w,arguments),l.apply(this,w)}}function U(l,p){function y(){}y.prototype=p.prototype,l.aa=p.prototype,l.prototype=new y,l.prototype.constructor=l,l.Qb=function(w,M,z){for(var ne=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)ne[Ve-2]=arguments[Ve];return p.prototype[M].apply(w,ne)}}function W(l){const p=l.length;if(0<p){const y=Array(p);for(let w=0;w<p;w++)y[w]=l[w];return y}return[]}function B(l,p){for(let y=1;y<arguments.length;y++){const w=arguments[y];if(g(w)){const M=l.length||0,z=w.length||0;l.length=M+z;for(let ne=0;ne<z;ne++)l[M+ne]=w[ne]}else l.push(w)}}class K{constructor(p,y){this.i=p,this.j=y,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function J(l){return/^[\s\xa0]*$/.test(l)}function Y(){var l=f.navigator;return l&&(l=l.userAgent)?l:""}function le(l){return le[" "](l),l}le[" "]=function(){};var we=Y().indexOf("Gecko")!=-1&&!(Y().toLowerCase().indexOf("webkit")!=-1&&Y().indexOf("Edge")==-1)&&!(Y().indexOf("Trident")!=-1||Y().indexOf("MSIE")!=-1)&&Y().indexOf("Edge")==-1;function _e(l,p,y){for(const w in l)p.call(y,l[w],w,l)}function N(l,p){for(const y in l)p.call(void 0,l[y],y,l)}function T(l){const p={};for(const y in l)p[y]=l[y];return p}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(l,p){let y,w;for(let M=1;M<arguments.length;M++){w=arguments[M];for(y in w)l[y]=w[y];for(let z=0;z<R.length;z++)y=R[z],Object.prototype.hasOwnProperty.call(w,y)&&(l[y]=w[y])}}function D(l){var p=1;l=l.split(":");const y=[];for(;0<p&&l.length;)y.push(l.shift()),p--;return l.length&&y.push(l.join(":")),y}function L(l){f.setTimeout(()=>{throw l},0)}function C(){var l=fe;let p=null;return l.g&&(p=l.g,l.g=l.g.next,l.g||(l.h=null),p.next=null),p}class tt{constructor(){this.h=this.g=null}add(p,y){const w=kt.get();w.set(p,y),this.h?this.h.next=w:this.g=w,this.h=w}}var kt=new K(()=>new Pt,l=>l.reset());class Pt{constructor(){this.next=this.g=this.h=null}set(p,y){this.h=p,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Fe,re=!1,fe=new tt,se=()=>{const l=f.Promise.resolve(void 0);Fe=()=>{l.then(O)}};var O=()=>{for(var l;l=C();){try{l.h.call(l.g)}catch(y){L(y)}var p=kt;p.j(l),100>p.h&&(p.h++,l.next=p.g,p.g=l)}re=!1};function q(){this.s=this.s,this.C=this.C}q.prototype.s=!1,q.prototype.ma=function(){this.s||(this.s=!0,this.N())},q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function de(l,p){this.type=l,this.g=this.target=p,this.defaultPrevented=!1}de.prototype.h=function(){this.defaultPrevented=!0};var Te=function(){if(!f.addEventListener||!Object.defineProperty)return!1;var l=!1,p=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const y=()=>{};f.addEventListener("test",y,p),f.removeEventListener("test",y,p)}catch{}return l}();function Ie(l,p){if(de.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var y=this.type=l.type,w=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=p,p=l.relatedTarget){if(we){e:{try{le(p.nodeName);var M=!0;break e}catch{}M=!1}M||(p=null)}}else y=="mouseover"?p=l.fromElement:y=="mouseout"&&(p=l.toElement);this.relatedTarget=p,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Pe[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Ie.aa.h.call(this)}}U(Ie,de);var Pe={2:"touch",3:"pen",4:"mouse"};Ie.prototype.h=function(){Ie.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var Le="closure_listenable_"+(1e6*Math.random()|0),Me=0;function je(l,p,y,w,M){this.listener=l,this.proxy=null,this.src=p,this.type=y,this.capture=!!w,this.ha=M,this.key=++Me,this.da=this.fa=!1}function dt(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function or(l){this.src=l,this.g={},this.h=0}or.prototype.add=function(l,p,y,w,M){var z=l.toString();l=this.g[z],l||(l=this.g[z]=[],this.h++);var ne=Vr(l,p,w,M);return-1<ne?(p=l[ne],y||(p.fa=!1)):(p=new je(p,this.src,z,!!w,M),p.fa=y,l.push(p)),p};function ds(l,p){var y=p.type;if(y in l.g){var w=l.g[y],M=Array.prototype.indexOf.call(w,p,void 0),z;(z=0<=M)&&Array.prototype.splice.call(w,M,1),z&&(dt(p),l.g[y].length==0&&(delete l.g[y],l.h--))}}function Vr(l,p,y,w){for(var M=0;M<l.length;++M){var z=l[M];if(!z.da&&z.listener==p&&z.capture==!!y&&z.ha==w)return M}return-1}var wi="closure_lm_"+(1e6*Math.random()|0),fs={};function Ro(l,p,y,w,M){if(Array.isArray(p)){for(var z=0;z<p.length;z++)Ro(l,p[z],y,w,M);return null}return y=ko(y),l&&l[Le]?l.K(p,y,v(w)?!!w.capture:!1,M):Co(l,p,y,!1,w,M)}function Co(l,p,y,w,M,z){if(!p)throw Error("Invalid event type");var ne=v(M)?!!M.capture:!!M,Ve=ms(l);if(Ve||(l[wi]=Ve=new or(l)),y=Ve.add(p,y,w,ne,z),y.proxy)return y;if(w=tl(),y.proxy=w,w.src=l,w.listener=y,l.addEventListener)Te||(M=ne),M===void 0&&(M=!1),l.addEventListener(p.toString(),w,M);else if(l.attachEvent)l.attachEvent(lr(p.toString()),w);else if(l.addListener&&l.removeListener)l.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return y}function tl(){function l(y){return p.call(l.src,l.listener,y)}const p=Ao;return l}function ps(l,p,y,w,M){if(Array.isArray(p))for(var z=0;z<p.length;z++)ps(l,p[z],y,w,M);else w=v(w)?!!w.capture:!!w,y=ko(y),l&&l[Le]?(l=l.i,p=String(p).toString(),p in l.g&&(z=l.g[p],y=Vr(z,y,w,M),-1<y&&(dt(z[y]),Array.prototype.splice.call(z,y,1),z.length==0&&(delete l.g[p],l.h--)))):l&&(l=ms(l))&&(p=l.g[p.toString()],l=-1,p&&(l=Vr(p,y,w,M)),(y=-1<l?p[l]:null)&&ar(y))}function ar(l){if(typeof l!="number"&&l&&!l.da){var p=l.src;if(p&&p[Le])ds(p.i,l);else{var y=l.type,w=l.proxy;p.removeEventListener?p.removeEventListener(y,w,l.capture):p.detachEvent?p.detachEvent(lr(y),w):p.addListener&&p.removeListener&&p.removeListener(w),(y=ms(p))?(ds(y,l),y.h==0&&(y.src=null,p[wi]=null)):dt(l)}}}function lr(l){return l in fs?fs[l]:fs[l]="on"+l}function Ao(l,p){if(l.da)l=!0;else{p=new Ie(p,this);var y=l.listener,w=l.ha||l.src;l.fa&&ar(l),l=y.call(w,p)}return l}function ms(l){return l=l[wi],l instanceof or?l:null}var gs="__closure_events_fn_"+(1e9*Math.random()>>>0);function ko(l){return typeof l=="function"?l:(l[gs]||(l[gs]=function(p){return l.handleEvent(p)}),l[gs])}function at(){q.call(this),this.i=new or(this),this.M=this,this.F=null}U(at,q),at.prototype[Le]=!0,at.prototype.removeEventListener=function(l,p,y,w){ps(this,l,p,y,w)};function lt(l,p){var y,w=l.F;if(w)for(y=[];w;w=w.F)y.push(w);if(l=l.M,w=p.type||p,typeof p=="string")p=new de(p,l);else if(p instanceof de)p.target=p.target||l;else{var M=p;p=new de(w,l),P(p,M)}if(M=!0,y)for(var z=y.length-1;0<=z;z--){var ne=p.g=y[z];M=ur(ne,w,!0,p)&&M}if(ne=p.g=l,M=ur(ne,w,!0,p)&&M,M=ur(ne,w,!1,p)&&M,y)for(z=0;z<y.length;z++)ne=p.g=y[z],M=ur(ne,w,!1,p)&&M}at.prototype.N=function(){if(at.aa.N.call(this),this.i){var l=this.i,p;for(p in l.g){for(var y=l.g[p],w=0;w<y.length;w++)dt(y[w]);delete l.g[p],l.h--}}this.F=null},at.prototype.K=function(l,p,y,w){return this.i.add(String(l),p,!1,y,w)},at.prototype.L=function(l,p,y,w){return this.i.add(String(l),p,!0,y,w)};function ur(l,p,y,w){if(p=l.i.g[String(p)],!p)return!0;p=p.concat();for(var M=!0,z=0;z<p.length;++z){var ne=p[z];if(ne&&!ne.da&&ne.capture==y){var Ve=ne.listener,ut=ne.ha||ne.src;ne.fa&&ds(l.i,ne),M=Ve.call(ut,w)!==!1&&M}}return M&&!w.defaultPrevented}function Po(l,p,y){if(typeof l=="function")y&&(l=A(l,y));else if(l&&typeof l.handleEvent=="function")l=A(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:f.setTimeout(l,p||0)}function br(l){l.g=Po(()=>{l.g=null,l.i&&(l.i=!1,br(l))},l.l);const p=l.h;l.h=null,l.m.apply(null,p)}class Ei extends q{constructor(p,y){super(),this.m=p,this.l=y,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:br(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ti(l){q.call(this),this.h=l,this.g={}}U(Ti,q);var No=[];function xo(l){_e(l.g,function(p,y){this.g.hasOwnProperty(y)&&ar(p)},l),l.g={}}Ti.prototype.N=function(){Ti.aa.N.call(this),xo(this)},Ti.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Do=f.JSON.stringify,Oo=f.JSON.parse,Lo=class{stringify(l){return f.JSON.stringify(l,void 0)}parse(l){return f.JSON.parse(l,void 0)}};function Ii(){}Ii.prototype.h=null;function ys(l){return l.h||(l.h=l.i())}function vs(){}var un={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Bn(){de.call(this,"d")}U(Bn,de);function _s(){de.call(this,"c")}U(_s,de);var zn={},Mo=null;function Si(){return Mo=Mo||new at}zn.La="serverreachability";function Vo(l){de.call(this,zn.La,l)}U(Vo,de);function cr(l){const p=Si();lt(p,new Vo(p))}zn.STAT_EVENT="statevent";function bo(l,p){de.call(this,zn.STAT_EVENT,l),this.stat=p}U(bo,de);function nt(l){const p=Si();lt(p,new bo(p,l))}zn.Ma="timingevent";function ws(l,p){de.call(this,zn.Ma,l),this.size=p}U(ws,de);function wn(l,p){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){l()},p)}function Ri(){this.g=!0}Ri.prototype.xa=function(){this.g=!1};function Ci(l,p,y,w,M,z){l.info(function(){if(l.g)if(z)for(var ne="",Ve=z.split("&"),ut=0;ut<Ve.length;ut++){var Ne=Ve[ut].split("=");if(1<Ne.length){var ft=Ne[0];Ne=Ne[1];var it=ft.split("_");ne=2<=it.length&&it[1]=="type"?ne+(ft+"="+Ne+"&"):ne+(ft+"=redacted&")}}else ne=null;else ne=z;return"XMLHTTP REQ ("+w+") [attempt "+M+"]: "+p+`
`+y+`
`+ne})}function Es(l,p,y,w,M,z,ne){l.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+M+"]: "+p+`
`+y+`
`+z+" "+ne})}function En(l,p,y,w){l.info(function(){return"XMLHTTP TEXT ("+p+"): "+wc(l,y)+(w?" "+w:"")})}function Fo(l,p){l.info(function(){return"TIMEOUT: "+p})}Ri.prototype.info=function(){};function wc(l,p){if(!l.g)return p;if(!p)return null;try{var y=JSON.parse(p);if(y){for(l=0;l<y.length;l++)if(Array.isArray(y[l])){var w=y[l];if(!(2>w.length)){var M=w[1];if(Array.isArray(M)&&!(1>M.length)){var z=M[0];if(z!="noop"&&z!="stop"&&z!="close")for(var ne=1;ne<M.length;ne++)M[ne]=""}}}}return Do(y)}catch{return p}}var Ts={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},nl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Tn;function Ai(){}U(Ai,Ii),Ai.prototype.g=function(){return new XMLHttpRequest},Ai.prototype.i=function(){return{}},Tn=new Ai;function In(l,p,y,w){this.j=l,this.i=p,this.l=y,this.R=w||1,this.U=new Ti(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new rl}function rl(){this.i=null,this.g="",this.h=!1}var Uo={},Is={};function Ss(l,p,y){l.L=1,l.v=zr(tn(p)),l.m=y,l.P=!0,jo(l,null)}function jo(l,p){l.F=Date.now(),Be(l),l.A=tn(l.v);var y=l.A,w=l.R;Array.isArray(w)||(w=[String(w)]),Hr(y.i,"t",w),l.C=0,y=l.j.J,l.h=new rl,l.g=El(l.j,y?p:null,!l.m),0<l.O&&(l.M=new Ei(A(l.Y,l,l.g),l.O)),p=l.U,y=l.g,w=l.ca;var M="readystatechange";Array.isArray(M)||(M&&(No[0]=M.toString()),M=No);for(var z=0;z<M.length;z++){var ne=Ro(y,M[z],w||p.handleEvent,!1,p.h||p);if(!ne)break;p.g[ne.key]=ne}p=l.H?T(l.H):{},l.m?(l.u||(l.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,p)):(l.u="GET",l.g.ea(l.A,l.u,null,p)),cr(),Ci(l.i,l.u,l.A,l.l,l.R,l.m)}In.prototype.ca=function(l){l=l.target;const p=this.M;p&&Ht(l)==3?p.j():this.Y(l)},In.prototype.Y=function(l){try{if(l==this.g)e:{const it=Ht(this.g);var p=this.g.Ba();const dn=this.g.Z();if(!(3>it)&&(it!=3||this.g&&(this.h.h||this.g.oa()||qo(this.g)))){this.J||it!=4||p==7||(p==8||0>=dn?cr(3):cr(2)),ki(this);var y=this.g.Z();this.X=y;t:if(il(this)){var w=qo(this.g);l="";var M=w.length,z=Ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){cn(this),Fr(this);var ne="";break t}this.h.i=new f.TextDecoder}for(p=0;p<M;p++)this.h.h=!0,l+=this.h.i.decode(w[p],{stream:!(z&&p==M-1)});w.length=0,this.h.g+=l,this.C=0,ne=this.h.g}else ne=this.g.oa();if(this.o=y==200,Es(this.i,this.u,this.A,this.l,this.R,it,y),this.o){if(this.T&&!this.K){t:{if(this.g){var Ve,ut=this.g;if((Ve=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!J(Ve)){var Ne=Ve;break t}}Ne=null}if(y=Ne)En(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Bo(this,y);else{this.o=!1,this.s=3,nt(12),cn(this),Fr(this);break e}}if(this.P){y=!0;let rn;for(;!this.J&&this.C<ne.length;)if(rn=Ec(this,ne),rn==Is){it==4&&(this.s=4,nt(14),y=!1),En(this.i,this.l,null,"[Incomplete Response]");break}else if(rn==Uo){this.s=4,nt(15),En(this.i,this.l,ne,"[Invalid Chunk]"),y=!1;break}else En(this.i,this.l,rn,null),Bo(this,rn);if(il(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),it!=4||ne.length!=0||this.h.h||(this.s=1,nt(16),y=!1),this.o=this.o&&y,!y)En(this.i,this.l,ne,"[Invalid Chunked Response]"),cn(this),Fr(this);else if(0<ne.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+ne.length),Go(ft),ft.M=!0,nt(11))}}else En(this.i,this.l,ne,null),Bo(this,ne);it==4&&cn(this),this.o&&!this.J&&(it==4?Ms(this.j,this):(this.o=!1,Be(this)))}else Ns(this.g),y==400&&0<ne.indexOf("Unknown SID")?(this.s=3,nt(12)):(this.s=0,nt(13)),cn(this),Fr(this)}}}catch{}finally{}};function il(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function Ec(l,p){var y=l.C,w=p.indexOf(`
`,y);return w==-1?Is:(y=Number(p.substring(y,w)),isNaN(y)?Uo:(w+=1,w+y>p.length?Is:(p=p.slice(w,w+y),l.C=w+y,p)))}In.prototype.cancel=function(){this.J=!0,cn(this)};function Be(l){l.S=Date.now()+l.I,sl(l,l.I)}function sl(l,p){if(l.B!=null)throw Error("WatchDog timer not null");l.B=wn(A(l.ba,l),p)}function ki(l){l.B&&(f.clearTimeout(l.B),l.B=null)}In.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Fo(this.i,this.A),this.L!=2&&(cr(),nt(17)),cn(this),this.s=2,Fr(this)):sl(this,this.S-l)};function Fr(l){l.j.G==0||l.J||Ms(l.j,l)}function cn(l){ki(l);var p=l.M;p&&typeof p.ma=="function"&&p.ma(),l.M=null,xo(l.U),l.g&&(p=l.g,l.g=null,p.abort(),p.ma())}function Bo(l,p){try{var y=l.j;if(y.G!=0&&(y.g==l||Ut(y.h,l))){if(!l.K&&Ut(y.h,l)&&y.G==3){try{var w=y.Da.g.parse(p)}catch{w=null}if(Array.isArray(w)&&w.length==3){var M=w;if(M[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<l.F)Ls(y),kn(y);else break e;Os(y),nt(18)}}else y.za=M[1],0<y.za-y.T&&37500>M[2]&&y.F&&y.v==0&&!y.C&&(y.C=wn(A(y.Za,y),6e3));if(1>=al(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else mr(y,11)}else if((l.K||y.g==l)&&Ls(y),!J(p))for(M=y.Da.g.parse(p),p=0;p<M.length;p++){let Ne=M[p];if(y.T=Ne[0],Ne=Ne[1],y.G==2)if(Ne[0]=="c"){y.K=Ne[1],y.ia=Ne[2];const ft=Ne[3];ft!=null&&(y.la=ft,y.j.info("VER="+y.la));const it=Ne[4];it!=null&&(y.Aa=it,y.j.info("SVER="+y.Aa));const dn=Ne[5];dn!=null&&typeof dn=="number"&&0<dn&&(w=1.5*dn,y.L=w,y.j.info("backChannelRequestTimeoutMs_="+w)),w=y;const rn=l.g;if(rn){const Mi=rn.g?rn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Mi){var z=w.h;z.g||Mi.indexOf("spdy")==-1&&Mi.indexOf("quic")==-1&&Mi.indexOf("h2")==-1||(z.j=z.l,z.g=new Set,z.h&&(zo(z,z.h),z.h=null))}if(w.D){const bs=rn.g?rn.g.getResponseHeader("X-HTTP-Session-Id"):null;bs&&(w.ya=bs,Ue(w.I,w.D,bs))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-l.F,y.j.info("Handshake RTT: "+y.R+"ms")),w=y;var ne=l;if(w.qa=wl(w,w.J?w.ia:null,w.W),ne.K){ll(w.h,ne);var Ve=ne,ut=w.L;ut&&(Ve.I=ut),Ve.B&&(ki(Ve),Be(Ve)),w.g=ne}else Li(w);0<y.i.length&&qn(y)}else Ne[0]!="stop"&&Ne[0]!="close"||mr(y,7);else y.G==3&&(Ne[0]=="stop"||Ne[0]=="close"?Ne[0]=="stop"?mr(y,7):Et(y):Ne[0]!="noop"&&y.l&&y.l.ta(Ne),y.v=0)}}cr(4)}catch{}}var ol=class{constructor(l,p){this.g=l,this.map=p}};function Pi(l){this.l=l||10,f.PerformanceNavigationTiming?(l=f.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function en(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function al(l){return l.h?1:l.g?l.g.size:0}function Ut(l,p){return l.h?l.h==p:l.g?l.g.has(p):!1}function zo(l,p){l.g?l.g.add(p):l.h=p}function ll(l,p){l.h&&l.h==p?l.h=null:l.g&&l.g.has(p)&&l.g.delete(p)}Pi.prototype.cancel=function(){if(this.i=ul(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function ul(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let p=l.i;for(const y of l.g.values())p=p.concat(y.D);return p}return W(l.i)}function Rs(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(g(l)){for(var p=[],y=l.length,w=0;w<y;w++)p.push(l[w]);return p}p=[],y=0;for(w in l)p[y++]=l[w];return p}function Cs(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(g(l)||typeof l=="string"){var p=[];l=l.length;for(var y=0;y<l;y++)p.push(y);return p}p=[],y=0;for(const w in l)p[y++]=w;return p}}}function Ur(l,p){if(l.forEach&&typeof l.forEach=="function")l.forEach(p,void 0);else if(g(l)||typeof l=="string")Array.prototype.forEach.call(l,p,void 0);else for(var y=Cs(l),w=Rs(l),M=w.length,z=0;z<M;z++)p.call(void 0,w[z],y&&y[z],l)}var Ni=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Tc(l,p){if(l){l=l.split("&");for(var y=0;y<l.length;y++){var w=l[y].indexOf("="),M=null;if(0<=w){var z=l[y].substring(0,w);M=l[y].substring(w+1)}else z=l[y];p(z,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function hr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof hr){this.h=l.h,xi(this,l.j),this.o=l.o,this.g=l.g,jr(this,l.s),this.l=l.l;var p=l.i,y=new $n;y.i=p.i,p.g&&(y.g=new Map(p.g),y.h=p.h),Br(this,y),this.m=l.m}else l&&(p=String(l).match(Ni))?(this.h=!1,xi(this,p[1]||"",!0),this.o=ke(p[2]||""),this.g=ke(p[3]||"",!0),jr(this,p[4]),this.l=ke(p[5]||"",!0),Br(this,p[6]||"",!0),this.m=ke(p[7]||"")):(this.h=!1,this.i=new $n(null,this.h))}hr.prototype.toString=function(){var l=[],p=this.j;p&&l.push($r(p,As,!0),":");var y=this.g;return(y||p=="file")&&(l.push("//"),(p=this.o)&&l.push($r(p,As,!0),"@"),l.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&l.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&l.push("/"),l.push($r(y,y.charAt(0)=="/"?dl:hl,!0))),(y=this.i.toString())&&l.push("?",y),(y=this.m)&&l.push("#",$r(y,$o)),l.join("")};function tn(l){return new hr(l)}function xi(l,p,y){l.j=y?ke(p,!0):p,l.j&&(l.j=l.j.replace(/:$/,""))}function jr(l,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);l.s=p}else l.s=null}function Br(l,p,y){p instanceof $n?(l.i=p,Hn(l.i,l.h)):(y||(p=$r(p,fl)),l.i=new $n(p,l.h))}function Ue(l,p,y){l.i.set(p,y)}function zr(l){return Ue(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function ke(l,p){return l?p?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function $r(l,p,y){return typeof l=="string"?(l=encodeURI(l).replace(p,cl),y&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function cl(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var As=/[#\/\?@]/g,hl=/[#\?:]/g,dl=/[#\?]/g,fl=/[#\?@]/g,$o=/#/g;function $n(l,p){this.h=this.g=null,this.i=l||null,this.j=!!p}function wt(l){l.g||(l.g=new Map,l.h=0,l.i&&Tc(l.i,function(p,y){l.add(decodeURIComponent(p.replace(/\+/g," ")),y)}))}r=$n.prototype,r.add=function(l,p){wt(this),this.i=null,l=hn(this,l);var y=this.g.get(l);return y||this.g.set(l,y=[]),y.push(p),this.h+=1,this};function Sn(l,p){wt(l),p=hn(l,p),l.g.has(p)&&(l.i=null,l.h-=l.g.get(p).length,l.g.delete(p))}function Rn(l,p){return wt(l),p=hn(l,p),l.g.has(p)}r.forEach=function(l,p){wt(this),this.g.forEach(function(y,w){y.forEach(function(M){l.call(p,M,w,this)},this)},this)},r.na=function(){wt(this);const l=Array.from(this.g.values()),p=Array.from(this.g.keys()),y=[];for(let w=0;w<p.length;w++){const M=l[w];for(let z=0;z<M.length;z++)y.push(p[w])}return y},r.V=function(l){wt(this);let p=[];if(typeof l=="string")Rn(this,l)&&(p=p.concat(this.g.get(hn(this,l))));else{l=Array.from(this.g.values());for(let y=0;y<l.length;y++)p=p.concat(l[y])}return p},r.set=function(l,p){return wt(this),this.i=null,l=hn(this,l),Rn(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[p]),this.h+=1,this},r.get=function(l,p){return l?(l=this.V(l),0<l.length?String(l[0]):p):p};function Hr(l,p,y){Sn(l,p),0<y.length&&(l.i=null,l.g.set(hn(l,p),W(y)),l.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],p=Array.from(this.g.keys());for(var y=0;y<p.length;y++){var w=p[y];const z=encodeURIComponent(String(w)),ne=this.V(w);for(w=0;w<ne.length;w++){var M=z;ne[w]!==""&&(M+="="+encodeURIComponent(String(ne[w]))),l.push(M)}}return this.i=l.join("&")};function hn(l,p){return p=String(p),l.j&&(p=p.toLowerCase()),p}function Hn(l,p){p&&!l.j&&(wt(l),l.i=null,l.g.forEach(function(y,w){var M=w.toLowerCase();w!=M&&(Sn(this,w),Hr(this,M,y))},l)),l.j=p}function Ic(l,p){const y=new Ri;if(f.Image){const w=new Image;w.onload=F($t,y,"TestLoadImage: loaded",!0,p,w),w.onerror=F($t,y,"TestLoadImage: error",!1,p,w),w.onabort=F($t,y,"TestLoadImage: abort",!1,p,w),w.ontimeout=F($t,y,"TestLoadImage: timeout",!1,p,w),f.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=l}else p(!1)}function pl(l,p){const y=new Ri,w=new AbortController,M=setTimeout(()=>{w.abort(),$t(y,"TestPingServer: timeout",!1,p)},1e4);fetch(l,{signal:w.signal}).then(z=>{clearTimeout(M),z.ok?$t(y,"TestPingServer: ok",!0,p):$t(y,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(M),$t(y,"TestPingServer: error",!1,p)})}function $t(l,p,y,w,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),w(y)}catch{}}function Sc(){this.g=new Lo}function ml(l,p,y){const w=y||"";try{Ur(l,function(M,z){let ne=M;v(M)&&(ne=Do(M)),p.push(w+z+"="+encodeURIComponent(ne))})}catch(M){throw p.push(w+"type="+encodeURIComponent("_badmap")),M}}function dr(l){this.l=l.Ub||null,this.j=l.eb||!1}U(dr,Ii),dr.prototype.g=function(){return new Di(this.l,this.j)},dr.prototype.i=function(l){return function(){return l}}({});function Di(l,p){at.call(this),this.D=l,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}U(Di,at),r=Di.prototype,r.open=function(l,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=p,this.readyState=1,An(this)},r.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(p.body=l),(this.D||f).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Cn(this)),this.readyState=0},r.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,An(this)),this.g&&(this.readyState=3,An(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;gl(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function gl(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}r.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var p=l.value?l.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!l.done}))&&(this.response=this.responseText+=p)}l.done?Cn(this):An(this),this.readyState==3&&gl(this)}},r.Ra=function(l){this.g&&(this.response=this.responseText=l,Cn(this))},r.Qa=function(l){this.g&&(this.response=l,Cn(this))},r.ga=function(){this.g&&Cn(this)};function Cn(l){l.readyState=4,l.l=null,l.j=null,l.v=null,An(l)}r.setRequestHeader=function(l,p){this.u.append(l,p)},r.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],p=this.h.entries();for(var y=p.next();!y.done;)y=y.value,l.push(y[0]+": "+y[1]),y=p.next();return l.join(`\r
`)};function An(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Di.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function fr(l){let p="";return _e(l,function(y,w){p+=w,p+=":",p+=y,p+=`\r
`}),p}function Wr(l,p,y){e:{for(w in y){var w=!1;break e}w=!0}w||(y=fr(y),typeof l=="string"?y!=null&&encodeURIComponent(String(y)):Ue(l,p,y))}function qe(l){at.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}U(qe,at);var Rc=/^https?$/i,Ho=["POST","PUT"];r=qe.prototype,r.Ha=function(l){this.J=l},r.ea=function(l,p,y,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);p=p?p.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Tn.g(),this.v=this.o?ys(this.o):ys(Tn),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(p,String(l),!0),this.B=!1}catch(z){Oi(this,z);return}if(l=y||"",y=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var M in w)y.set(M,w[M]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const z of w.keys())y.set(z,w.get(z));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(y.keys()).find(z=>z.toLowerCase()=="content-type"),M=f.FormData&&l instanceof f.FormData,!(0<=Array.prototype.indexOf.call(Ho,p,void 0))||w||M||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[z,ne]of y)this.g.setRequestHeader(z,ne);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ps(this),this.u=!0,this.g.send(l),this.u=!1}catch(z){Oi(this,z)}};function Oi(l,p){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=p,l.m=5,ks(l),nn(l)}function ks(l){l.A||(l.A=!0,lt(l,"complete"),lt(l,"error"))}r.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,lt(this,"complete"),lt(this,"abort"),nn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),nn(this,!0)),qe.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Wo(this):this.bb())},r.bb=function(){Wo(this)};function Wo(l){if(l.h&&typeof h<"u"&&(!l.v[1]||Ht(l)!=4||l.Z()!=2)){if(l.u&&Ht(l)==4)Po(l.Ea,0,l);else if(lt(l,"readystatechange"),Ht(l)==4){l.h=!1;try{const ne=l.Z();e:switch(ne){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var y;if(!(y=p)){var w;if(w=ne===0){var M=String(l.D).match(Ni)[1]||null;!M&&f.self&&f.self.location&&(M=f.self.location.protocol.slice(0,-1)),w=!Rc.test(M?M.toLowerCase():"")}y=w}if(y)lt(l,"complete"),lt(l,"success");else{l.m=6;try{var z=2<Ht(l)?l.g.statusText:""}catch{z=""}l.l=z+" ["+l.Z()+"]",ks(l)}}finally{nn(l)}}}}function nn(l,p){if(l.g){Ps(l);const y=l.g,w=l.v[0]?()=>{}:null;l.g=null,l.v=null,p||lt(l,"ready");try{y.onreadystatechange=w}catch{}}}function Ps(l){l.I&&(f.clearTimeout(l.I),l.I=null)}r.isActive=function(){return!!this.g};function Ht(l){return l.g?l.g.readyState:0}r.Z=function(){try{return 2<Ht(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(l){if(this.g){var p=this.g.responseText;return l&&p.indexOf(l)==0&&(p=p.substring(l.length)),Oo(p)}};function qo(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Ns(l){const p={};l=(l.g&&2<=Ht(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<l.length;w++){if(J(l[w]))continue;var y=D(l[w]);const M=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const z=p[M]||[];p[M]=z,z.push(y)}N(p,function(w){return w.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Wn(l,p,y){return y&&y.internalChannelParams&&y.internalChannelParams[l]||p}function Ko(l){this.Aa=0,this.i=[],this.j=new Ri,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Wn("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Wn("baseRetryDelayMs",5e3,l),this.cb=Wn("retryDelaySeedMs",1e4,l),this.Wa=Wn("forwardChannelMaxRetries",2,l),this.wa=Wn("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Pi(l&&l.concurrentRequestLimit),this.Da=new Sc,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Ko.prototype,r.la=8,r.G=1,r.connect=function(l,p,y,w){nt(0),this.W=l,this.H=p||{},y&&w!==void 0&&(this.H.OSID=y,this.H.OAID=w),this.F=this.X,this.I=wl(this,null,this.W),qn(this)};function Et(l){if(xs(l),l.G==3){var p=l.U++,y=tn(l.I);if(Ue(y,"SID",l.K),Ue(y,"RID",p),Ue(y,"TYPE","terminate"),pr(l,y),p=new In(l,l.j,p),p.L=2,p.v=zr(tn(y)),y=!1,f.navigator&&f.navigator.sendBeacon)try{y=f.navigator.sendBeacon(p.v.toString(),"")}catch{}!y&&f.Image&&(new Image().src=p.v,y=!0),y||(p.g=El(p.j,null),p.g.ea(p.v)),p.F=Date.now(),Be(p)}_l(l)}function kn(l){l.g&&(Go(l),l.g.cancel(),l.g=null)}function xs(l){kn(l),l.u&&(f.clearTimeout(l.u),l.u=null),Ls(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&f.clearTimeout(l.s),l.s=null)}function qn(l){if(!en(l.h)&&!l.s){l.s=!0;var p=l.Ga;Fe||se(),re||(Fe(),re=!0),fe.add(p,l),l.B=0}}function Cc(l,p){return al(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=p.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=wn(A(l.Ga,l,p),vl(l,l.B)),l.B++,!0)}r.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const M=new In(this,this.j,l);let z=this.o;if(this.S&&(z?(z=T(z),P(z,this.S)):z=this.S),this.m!==null||this.O||(M.H=z,z=null),this.P)e:{for(var p=0,y=0;y<this.i.length;y++){t:{var w=this.i[y];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(p+=w,4096<p){p=y;break e}if(p===4096||y===this.i.length-1){p=y+1;break e}}p=1e3}else p=1e3;p=qr(this,M,p),y=tn(this.I),Ue(y,"RID",l),Ue(y,"CVER",22),this.D&&Ue(y,"X-HTTP-Session-Id",this.D),pr(this,y),z&&(this.O?p="headers="+encodeURIComponent(String(fr(z)))+"&"+p:this.m&&Wr(y,this.m,z)),zo(this.h,M),this.Ua&&Ue(y,"TYPE","init"),this.P?(Ue(y,"$req",p),Ue(y,"SID","null"),M.T=!0,Ss(M,y,null)):Ss(M,y,p),this.G=2}}else this.G==3&&(l?Ds(this,l):this.i.length==0||en(this.h)||Ds(this))};function Ds(l,p){var y;p?y=p.l:y=l.U++;const w=tn(l.I);Ue(w,"SID",l.K),Ue(w,"RID",y),Ue(w,"AID",l.T),pr(l,w),l.m&&l.o&&Wr(w,l.m,l.o),y=new In(l,l.j,y,l.B+1),l.m===null&&(y.H=l.o),p&&(l.i=p.D.concat(l.i)),p=qr(l,y,1e3),y.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),zo(l.h,y),Ss(y,w,p)}function pr(l,p){l.H&&_e(l.H,function(y,w){Ue(p,w,y)}),l.l&&Ur({},function(y,w){Ue(p,w,y)})}function qr(l,p,y){y=Math.min(l.i.length,y);var w=l.l?A(l.l.Na,l.l,l):null;e:{var M=l.i;let z=-1;for(;;){const ne=["count="+y];z==-1?0<y?(z=M[0].g,ne.push("ofs="+z)):z=0:ne.push("ofs="+z);let Ve=!0;for(let ut=0;ut<y;ut++){let Ne=M[ut].g;const ft=M[ut].map;if(Ne-=z,0>Ne)z=Math.max(0,M[ut].g-100),Ve=!1;else try{ml(ft,ne,"req"+Ne+"_")}catch{w&&w(ft)}}if(Ve){w=ne.join("&");break e}}}return l=l.i.splice(0,y),p.D=l,w}function Li(l){if(!l.g&&!l.u){l.Y=1;var p=l.Fa;Fe||se(),re||(Fe(),re=!0),fe.add(p,l),l.v=0}}function Os(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=wn(A(l.Fa,l),vl(l,l.v)),l.v++,!0)}r.Fa=function(){if(this.u=null,yl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=wn(A(this.ab,this),l)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,nt(10),kn(this),yl(this))};function Go(l){l.A!=null&&(f.clearTimeout(l.A),l.A=null)}function yl(l){l.g=new In(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var p=tn(l.qa);Ue(p,"RID","rpc"),Ue(p,"SID",l.K),Ue(p,"AID",l.T),Ue(p,"CI",l.F?"0":"1"),!l.F&&l.ja&&Ue(p,"TO",l.ja),Ue(p,"TYPE","xmlhttp"),pr(l,p),l.m&&l.o&&Wr(p,l.m,l.o),l.L&&(l.g.I=l.L);var y=l.g;l=l.ia,y.L=1,y.v=zr(tn(p)),y.m=null,y.P=!0,jo(y,l)}r.Za=function(){this.C!=null&&(this.C=null,kn(this),Os(this),nt(19))};function Ls(l){l.C!=null&&(f.clearTimeout(l.C),l.C=null)}function Ms(l,p){var y=null;if(l.g==p){Ls(l),Go(l),l.g=null;var w=2}else if(Ut(l.h,p))y=p.D,ll(l.h,p),w=1;else return;if(l.G!=0){if(p.o)if(w==1){y=p.m?p.m.length:0,p=Date.now()-p.F;var M=l.B;w=Si(),lt(w,new ws(w,y)),qn(l)}else Li(l);else if(M=p.s,M==3||M==0&&0<p.X||!(w==1&&Cc(l,p)||w==2&&Os(l)))switch(y&&0<y.length&&(p=l.h,p.i=p.i.concat(y)),M){case 1:mr(l,5);break;case 4:mr(l,10);break;case 3:mr(l,6);break;default:mr(l,2)}}}function vl(l,p){let y=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(y*=2),y*p}function mr(l,p){if(l.j.info("Error code "+p),p==2){var y=A(l.fb,l),w=l.Xa;const M=!w;w=new hr(w||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||xi(w,"https"),zr(w),M?Ic(w.toString(),y):pl(w.toString(),y)}else nt(2);l.G=0,l.l&&l.l.sa(p),_l(l),xs(l)}r.fb=function(l){l?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function _l(l){if(l.G=0,l.ka=[],l.l){const p=ul(l.h);(p.length!=0||l.i.length!=0)&&(B(l.ka,p),B(l.ka,l.i),l.h.i.length=0,W(l.i),l.i.length=0),l.l.ra()}}function wl(l,p,y){var w=y instanceof hr?tn(y):new hr(y);if(w.g!="")p&&(w.g=p+"."+w.g),jr(w,w.s);else{var M=f.location;w=M.protocol,p=p?p+"."+M.hostname:M.hostname,M=+M.port;var z=new hr(null);w&&xi(z,w),p&&(z.g=p),M&&jr(z,M),y&&(z.l=y),w=z}return y=l.D,p=l.ya,y&&p&&Ue(w,y,p),Ue(w,"VER",l.la),pr(l,w),w}function El(l,p,y){if(p&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=l.Ca&&!l.pa?new qe(new dr({eb:y})):new qe(l.pa),p.Ha(l.J),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Qo(){}r=Qo.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Vs(){}Vs.prototype.g=function(l,p){return new jt(l,p)};function jt(l,p){at.call(this),this.g=new Ko(p),this.l=l,this.h=p&&p.messageUrlParams||null,l=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(l?l["X-WebChannel-Content-Type"]=p.messageContentType:l={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(l?l["X-WebChannel-Client-Profile"]=p.va:l={"X-WebChannel-Client-Profile":p.va}),this.g.S=l,(l=p&&p.Sb)&&!J(l)&&(this.g.m=l),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!J(p)&&(this.g.D=p,l=this.h,l!==null&&p in l&&(l=this.h,p in l&&delete l[p])),this.j=new Kn(this)}U(jt,at),jt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},jt.prototype.close=function(){Et(this.g)},jt.prototype.o=function(l){var p=this.g;if(typeof l=="string"){var y={};y.__data__=l,l=y}else this.u&&(y={},y.__data__=Do(l),l=y);p.i.push(new ol(p.Ya++,l)),p.G==3&&qn(p)},jt.prototype.N=function(){this.g.l=null,delete this.j,Et(this.g),delete this.g,jt.aa.N.call(this)};function Tl(l){Bn.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var p=l.__sm__;if(p){e:{for(const y in p){l=y;break e}l=void 0}(this.i=l)&&(l=this.i,p=p!==null&&l in p?p[l]:void 0),this.data=p}else this.data=l}U(Tl,Bn);function Il(){_s.call(this),this.status=1}U(Il,_s);function Kn(l){this.g=l}U(Kn,Qo),Kn.prototype.ua=function(){lt(this.g,"a")},Kn.prototype.ta=function(l){lt(this.g,new Tl(l))},Kn.prototype.sa=function(l){lt(this.g,new Il)},Kn.prototype.ra=function(){lt(this.g,"b")},Vs.prototype.createWebChannel=Vs.prototype.g,jt.prototype.send=jt.prototype.o,jt.prototype.open=jt.prototype.m,jt.prototype.close=jt.prototype.close,Xv=function(){return new Vs},Yv=function(){return Si()},Qv=zn,kd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ts.NO_ERROR=0,Ts.TIMEOUT=8,Ts.HTTP_ERROR=6,Nu=Ts,nl.COMPLETE="complete",Gv=nl,vs.EventType=un,un.OPEN="a",un.CLOSE="b",un.ERROR="c",un.MESSAGE="d",at.prototype.listen=at.prototype.K,Ra=vs,qe.prototype.listenOnce=qe.prototype.L,qe.prototype.getLastError=qe.prototype.Ka,qe.prototype.getLastErrorCode=qe.prototype.Ba,qe.prototype.getStatus=qe.prototype.Z,qe.prototype.getResponseJson=qe.prototype.Oa,qe.prototype.getResponseText=qe.prototype.oa,qe.prototype.send=qe.prototype.ea,qe.prototype.setWithCredentials=qe.prototype.Ha,Kv=qe}).apply(typeof _u<"u"?_u:typeof self<"u"?self:typeof window<"u"?window:{});const Og="@firebase/firestore";/**
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
 */class Mt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Mt.UNAUTHENTICATED=new Mt(null),Mt.GOOGLE_CREDENTIALS=new Mt("google-credentials-uid"),Mt.FIRST_PARTY=new Mt("first-party-uid"),Mt.MOCK_USER=new Mt("mock-user");/**
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
 */let Io="11.0.2";/**
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
 */const rs=new oc("@firebase/firestore");function so(){return rs.logLevel}function ce(r,...e){if(rs.logLevel<=Ce.DEBUG){const t=e.map(af);rs.debug(`Firestore (${Io}): ${r}`,...t)}}function is(r,...e){if(rs.logLevel<=Ce.ERROR){const t=e.map(af);rs.error(`Firestore (${Io}): ${r}`,...t)}}function Wu(r,...e){if(rs.logLevel<=Ce.WARN){const t=e.map(af);rs.warn(`Firestore (${Io}): ${r}`,...t)}}function af(r){if(typeof r=="string")return r;try{/**
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
 */function Ae(r="Unexpected state"){const e=`FIRESTORE (${Io}) INTERNAL ASSERTION FAILED: `+r;throw is(e),new Error(e)}function et(r,e){r||Ae()}function $e(r,e){return r}/**
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
 */const ee={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ye extends jn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Xi{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Jv{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class qC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Mt.UNAUTHENTICATED))}shutdown(){}}class KC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class GC{constructor(e){this.t=e,this.currentUser=Mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){et(this.o===void 0);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let u=new Xi;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Xi,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const g=u;e.enqueueRetryable(async()=>{await g.promise,await o(this.currentUser)})},f=g=>{ce("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(g=>f(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?f(g):(ce("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Xi)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(ce("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(et(typeof s.accessToken=="string"),new Jv(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return et(e===null||typeof e=="string"),new Mt(e)}}class QC{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=Mt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class YC{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new QC(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class XC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class JC{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){et(this.o===void 0);const s=u=>{u.error!=null&&ce("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.R;return this.R=u.token,ce("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const o=u=>{ce("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.A.getImmediate({optional:!0});u?o(u):ce("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(et(typeof t.token=="string"),this.R=t.token,new XC(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function ZC(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class Zv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const o=ZC(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<t&&(s+=e.charAt(o[u]%e.length))}return s}}function be(r,e){return r<e?-1:r>e?1:0}function po(r,e,t){return r.length===e.length&&r.every((s,o)=>t(s,e[o]))}/**
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
 */class _t{static now(){return _t.fromMillis(Date.now())}static fromDate(e){return _t.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new _t(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ye(ee.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ye(ee.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ye(ee.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ye(ee.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Ge{static fromTimestamp(e){return new Ge(e)}static min(){return new Ge(new _t(0,0))}static max(){return new Ge(new _t(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Fa{constructor(e,t,s){t===void 0?t=0:t>e.length&&Ae(),s===void 0?s=e.length-t:s>e.length-t&&Ae(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Fa.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Fa?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const u=e.get(o),h=t.get(o);if(u<h)return-1;if(u>h)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ze extends Fa{construct(e,t,s){return new Ze(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ye(ee.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new Ze(t)}static emptyPath(){return new Ze([])}}const eA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ct extends Fa{construct(e,t,s){return new Ct(e,t,s)}static isValidIdentifier(e){return eA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ct.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ct(["__name__"])}static fromServerFormat(e){const t=[];let s="",o=0;const u=()=>{if(s.length===0)throw new ye(ee.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new ye(ee.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new ye(ee.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(s+=f,o++):(u(),o++)}if(u(),h)throw new ye(ee.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ct(t)}static emptyPath(){return new Ct([])}}/**
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
 */class Ee{constructor(e){this.path=e}static fromPath(e){return new Ee(Ze.fromString(e))}static fromName(e){return new Ee(Ze.fromString(e).popFirst(5))}static empty(){return new Ee(Ze.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ze.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ze.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ee(new Ze(e.slice()))}}function tA(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=Ge.fromTimestamp(s===1e9?new _t(t+1,0):new _t(t,s));return new gi(o,Ee.empty(),e)}function nA(r){return new gi(r.readTime,r.key,-1)}class gi{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new gi(Ge.min(),Ee.empty(),-1)}static max(){return new gi(Ge.max(),Ee.empty(),-1)}}function rA(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=Ee.comparator(r.documentKey,e.documentKey),t!==0?t:be(r.largestBatchId,e.largestBatchId))}/**
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
 */const iA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function lf(r){if(r.code!==ee.FAILED_PRECONDITION||r.message!==iA)throw r;ce("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class G{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ae(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new G((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(t,u).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof G?t:G.resolve(t)}catch(t){return G.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):G.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):G.reject(t)}static resolve(e){return new G((t,s)=>{t(e)})}static reject(e){return new G((t,s)=>{s(e)})}static waitFor(e){return new G((t,s)=>{let o=0,u=0,h=!1;e.forEach(f=>{++o,f.next(()=>{++u,h&&u===o&&t()},g=>s(g))}),h=!0,u===o&&t()})}static or(e){let t=G.resolve(!1);for(const s of e)t=t.next(o=>o?G.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,u)=>{s.push(t.call(this,o,u))}),this.waitFor(s)}static mapArray(e,t){return new G((s,o)=>{const u=e.length,h=new Array(u);let f=0;for(let g=0;g<u;g++){const v=g;t(e[v]).next(E=>{h[v]=E,++f,f===u&&s(h)},E=>o(E))}})}static doWhile(e,t){return new G((s,o)=>{const u=()=>{e()===!0?t().next(()=>{u()},o):s()};u()})}}function oA(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Xa(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class uf{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ie(s),this.se=s=>t.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}uf.oe=-1;function cf(r){return r==null}function qu(r){return r===0&&1/r==-1/0}function aA(r){return typeof r=="number"&&Number.isInteger(r)&&!qu(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */function lA(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Lg(e)),e=uA(r.get(t),e);return Lg(e)}function uA(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":t+="";break;case"":t+="";break;default:t+=u}}return t}function Lg(r){return r+""}/**
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
 */function Mg(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function So(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function e_(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class Zt{constructor(e,t){this.comparator=e,this.root=t||St.EMPTY}insert(e,t){return new Zt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,St.BLACK,null,null))}remove(e){return new Zt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,St.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new wu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new wu(this.root,e,this.comparator,!1)}getReverseIterator(){return new wu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new wu(this.root,e,this.comparator,!0)}}class wu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?s(e.key,t):1,t&&o&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class St{constructor(e,t,s,o,u){this.key=e,this.value=t,this.color=s??St.RED,this.left=o??St.EMPTY,this.right=u??St.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,u){return new St(e??this.key,t??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const u=s(e,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(e,t,s),null):u===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return St.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return St.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,St.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,St.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ae();const e=this.left.check();if(e!==this.right.check())throw Ae();return e+(this.isRed()?0:1)}}St.EMPTY=null,St.RED=!0,St.BLACK=!1;St.EMPTY=new class{constructor(){this.size=0}get key(){throw Ae()}get value(){throw Ae()}get color(){throw Ae()}get left(){throw Ae()}get right(){throw Ae()}copy(e,t,s,o,u){return this}insert(e,t,s){return new St(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class At{constructor(e){this.comparator=e,this.data=new Zt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Vg(this.data.getIterator())}getIteratorFrom(e){return new Vg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof At)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new At(this.comparator);return t.data=e,t}}class Vg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class bn{constructor(e){this.fields=e,e.sort(Ct.comparator)}static empty(){return new bn([])}unionWith(e){let t=new At(Ct.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new bn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return po(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class cA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class rr{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new cA("Invalid base64 string: "+u):u}}(e);return new rr(t)}static fromUint8Array(e){const t=function(o){let u="";for(let h=0;h<o.length;++h)u+=String.fromCharCode(o[h]);return u}(e);return new rr(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rr.EMPTY_BYTE_STRING=new rr("");const hA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ss(r){if(et(!!r),typeof r=="string"){let e=0;const t=hA.exec(r);if(et(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Rt(r.seconds),nanos:Rt(r.nanos)}}function Rt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function mo(r){return typeof r=="string"?rr.fromBase64String(r):rr.fromUint8Array(r)}/**
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
 */function hf(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function df(r){const e=r.mapValue.fields.__previous_value__;return hf(e)?df(e):e}function Ku(r){const e=ss(r.mapValue.fields.__local_write_time__.timestampValue);return new _t(e.seconds,e.nanos)}/**
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
 */class dA{constructor(e,t,s,o,u,h,f,g,v){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=g,this.useFetchStreams=v}}class Gu{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Gu("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Gu&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Eu={mapValue:{}};function os(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?hf(r)?4:pA(r)?9007199254740991:fA(r)?10:11:Ae()}function ir(r,e){if(r===e)return!0;const t=os(r);if(t!==os(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Ku(r).isEqual(Ku(e));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const h=ss(o.timestampValue),f=ss(u.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(o,u){return mo(o.bytesValue).isEqual(mo(u.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(o,u){return Rt(o.geoPointValue.latitude)===Rt(u.geoPointValue.latitude)&&Rt(o.geoPointValue.longitude)===Rt(u.geoPointValue.longitude)}(r,e);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return Rt(o.integerValue)===Rt(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const h=Rt(o.doubleValue),f=Rt(u.doubleValue);return h===f?qu(h)===qu(f):isNaN(h)&&isNaN(f)}return!1}(r,e);case 9:return po(r.arrayValue.values||[],e.arrayValue.values||[],ir);case 10:case 11:return function(o,u){const h=o.mapValue.fields||{},f=u.mapValue.fields||{};if(Mg(h)!==Mg(f))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(f[g]===void 0||!ir(h[g],f[g])))return!1;return!0}(r,e);default:return Ae()}}function Ua(r,e){return(r.values||[]).find(t=>ir(t,e))!==void 0}function go(r,e){if(r===e)return 0;const t=os(r),s=os(e);if(t!==s)return be(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return be(r.booleanValue,e.booleanValue);case 2:return function(u,h){const f=Rt(u.integerValue||u.doubleValue),g=Rt(h.integerValue||h.doubleValue);return f<g?-1:f>g?1:f===g?0:isNaN(f)?isNaN(g)?0:-1:1}(r,e);case 3:return bg(r.timestampValue,e.timestampValue);case 4:return bg(Ku(r),Ku(e));case 5:return be(r.stringValue,e.stringValue);case 6:return function(u,h){const f=mo(u),g=mo(h);return f.compareTo(g)}(r.bytesValue,e.bytesValue);case 7:return function(u,h){const f=u.split("/"),g=h.split("/");for(let v=0;v<f.length&&v<g.length;v++){const E=be(f[v],g[v]);if(E!==0)return E}return be(f.length,g.length)}(r.referenceValue,e.referenceValue);case 8:return function(u,h){const f=be(Rt(u.latitude),Rt(h.latitude));return f!==0?f:be(Rt(u.longitude),Rt(h.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return Fg(r.arrayValue,e.arrayValue);case 10:return function(u,h){var f,g,v,E;const S=u.fields||{},A=h.fields||{},F=(f=S.value)===null||f===void 0?void 0:f.arrayValue,U=(g=A.value)===null||g===void 0?void 0:g.arrayValue,W=be(((v=F==null?void 0:F.values)===null||v===void 0?void 0:v.length)||0,((E=U==null?void 0:U.values)===null||E===void 0?void 0:E.length)||0);return W!==0?W:Fg(F,U)}(r.mapValue,e.mapValue);case 11:return function(u,h){if(u===Eu.mapValue&&h===Eu.mapValue)return 0;if(u===Eu.mapValue)return 1;if(h===Eu.mapValue)return-1;const f=u.fields||{},g=Object.keys(f),v=h.fields||{},E=Object.keys(v);g.sort(),E.sort();for(let S=0;S<g.length&&S<E.length;++S){const A=be(g[S],E[S]);if(A!==0)return A;const F=go(f[g[S]],v[E[S]]);if(F!==0)return F}return be(g.length,E.length)}(r.mapValue,e.mapValue);default:throw Ae()}}function bg(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return be(r,e);const t=ss(r),s=ss(e),o=be(t.seconds,s.seconds);return o!==0?o:be(t.nanos,s.nanos)}function Fg(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const u=go(t[o],s[o]);if(u)return u}return be(t.length,s.length)}function yo(r){return Pd(r)}function Pd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const s=ss(t);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return mo(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return Ee.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let s="[",o=!0;for(const u of t.values||[])o?o=!1:s+=",",s+=Pd(u);return s+"]"}(r.arrayValue):"mapValue"in r?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",u=!0;for(const h of s)u?u=!1:o+=",",o+=`${h}:${Pd(t.fields[h])}`;return o+"}"}(r.mapValue):Ae()}function xu(r){switch(os(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=df(r);return e?16+xu(e):16;case 5:return 2*r.stringValue.length;case 6:return mo(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+xu(u),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return So(s.fields,(u,h)=>{o+=u.length+xu(h)}),o}(r.mapValue);default:throw Ae()}}function Nd(r){return!!r&&"integerValue"in r}function ff(r){return!!r&&"arrayValue"in r}function Du(r){return!!r&&"mapValue"in r}function fA(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function ka(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return So(r.mapValue.fields,(t,s)=>e.mapValue.fields[t]=ka(s)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ka(r.arrayValue.values[t]);return e}return Object.assign({},r)}function pA(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Vn{constructor(e){this.value=e}static empty(){return new Vn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Du(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ka(t)}setAll(e){let t=Ct.emptyPath(),s={},o=[];e.forEach((h,f)=>{if(!t.isImmediateParentOf(f)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=f.popLast()}h?s[f.lastSegment()]=ka(h):o.push(f.lastSegment())});const u=this.getFieldsMap(t);this.applyChanges(u,s,o)}delete(e){const t=this.field(e.popLast());Du(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ir(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];Du(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){So(t,(o,u)=>e[o]=u);for(const o of s)delete e[o]}clone(){return new Vn(ka(this.value))}}function t_(r){const e=[];return So(r.fields,(t,s)=>{const o=new Ct([t]);if(Du(s)){const u=t_(s.mapValue).fields;if(u.length===0)e.push(o);else for(const h of u)e.push(o.child(h))}else e.push(o)}),new bn(e)}/**
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
 */class Mn{constructor(e,t,s,o,u,h,f){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=u,this.data=h,this.documentState=f}static newInvalidDocument(e){return new Mn(e,0,Ge.min(),Ge.min(),Ge.min(),Vn.empty(),0)}static newFoundDocument(e,t,s,o){return new Mn(e,1,t,Ge.min(),s,o,0)}static newNoDocument(e,t){return new Mn(e,2,t,Ge.min(),Ge.min(),Vn.empty(),0)}static newUnknownDocument(e,t){return new Mn(e,3,t,Ge.min(),Ge.min(),Vn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ge.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Vn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Vn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ge.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Mn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Mn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Qu{constructor(e,t){this.position=e,this.inclusive=t}}function Ug(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const u=e[o],h=r.position[o];if(u.field.isKeyField()?s=Ee.comparator(Ee.fromName(h.referenceValue),t.key):s=go(h,t.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function jg(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!ir(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class Yu{constructor(e,t="asc"){this.field=e,this.dir=t}}function mA(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class n_{}class vt extends n_{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new yA(e,t,s):t==="array-contains"?new wA(e,s):t==="in"?new EA(e,s):t==="not-in"?new TA(e,s):t==="array-contains-any"?new IA(e,s):new vt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new vA(e,s):new _A(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(go(t,this.value)):t!==null&&os(this.value)===os(t)&&this.matchesComparison(go(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ae()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class yi extends n_{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new yi(e,t)}matches(e){return r_(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function r_(r){return r.op==="and"}function i_(r){return gA(r)&&r_(r)}function gA(r){for(const e of r.filters)if(e instanceof yi)return!1;return!0}function xd(r){if(r instanceof vt)return r.field.canonicalString()+r.op.toString()+yo(r.value);if(i_(r))return r.filters.map(e=>xd(e)).join(",");{const e=r.filters.map(t=>xd(t)).join(",");return`${r.op}(${e})`}}function s_(r,e){return r instanceof vt?function(s,o){return o instanceof vt&&s.op===o.op&&s.field.isEqual(o.field)&&ir(s.value,o.value)}(r,e):r instanceof yi?function(s,o){return o instanceof yi&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,h,f)=>u&&s_(h,o.filters[f]),!0):!1}(r,e):void Ae()}function o_(r){return r instanceof vt?function(t){return`${t.field.canonicalString()} ${t.op} ${yo(t.value)}`}(r):r instanceof yi?function(t){return t.op.toString()+" {"+t.getFilters().map(o_).join(" ,")+"}"}(r):"Filter"}class yA extends vt{constructor(e,t,s){super(e,t,s),this.key=Ee.fromName(s.referenceValue)}matches(e){const t=Ee.comparator(e.key,this.key);return this.matchesComparison(t)}}class vA extends vt{constructor(e,t){super(e,"in",t),this.keys=a_("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class _A extends vt{constructor(e,t){super(e,"not-in",t),this.keys=a_("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function a_(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>Ee.fromName(s.referenceValue))}class wA extends vt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ff(t)&&Ua(t.arrayValue,this.value)}}class EA extends vt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ua(this.value.arrayValue,t)}}class TA extends vt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ua(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Ua(this.value.arrayValue,t)}}class IA extends vt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ff(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Ua(this.value.arrayValue,s))}}/**
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
 */class SA{constructor(e,t=null,s=[],o=[],u=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=h,this.endAt=f,this.ue=null}}function Bg(r,e=null,t=[],s=[],o=null,u=null,h=null){return new SA(r,e,t,s,o,u,h)}function pf(r){const e=$e(r);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>xd(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),cf(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>yo(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>yo(s)).join(",")),e.ue=t}return e.ue}function mf(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!mA(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!s_(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!jg(r.startAt,e.startAt)&&jg(r.endAt,e.endAt)}/**
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
 */class dc{constructor(e,t=null,s=[],o=[],u=null,h="F",f=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=h,this.startAt=f,this.endAt=g,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function RA(r,e,t,s,o,u,h,f){return new dc(r,e,t,s,o,u,h,f)}function CA(r){return new dc(r)}function zg(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function AA(r){return r.collectionGroup!==null}function Pa(r){const e=$e(r);if(e.ce===null){e.ce=[];const t=new Set;for(const u of e.explicitOrderBy)e.ce.push(u),t.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new At(Ct.comparator);return h.filters.forEach(g=>{g.getFlattenedFilters().forEach(v=>{v.isInequality()&&(f=f.add(v.field))})}),f})(e).forEach(u=>{t.has(u.canonicalString())||u.isKeyField()||e.ce.push(new Yu(u,s))}),t.has(Ct.keyField().canonicalString())||e.ce.push(new Yu(Ct.keyField(),s))}return e.ce}function Ji(r){const e=$e(r);return e.le||(e.le=kA(e,Pa(r))),e.le}function kA(r,e){if(r.limitType==="F")return Bg(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new Yu(o.field,u)});const t=r.endAt?new Qu(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Qu(r.startAt.position,r.startAt.inclusive):null;return Bg(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function Dd(r,e,t){return new dc(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function l_(r,e){return mf(Ji(r),Ji(e))&&r.limitType===e.limitType}function u_(r){return`${pf(Ji(r))}|lt:${r.limitType}`}function Ta(r){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>o_(o)).join(", ")}]`),cf(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>yo(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>yo(o)).join(",")),`Target(${s})`}(Ji(r))}; limitType=${r.limitType})`}function gf(r,e){return e.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):Ee.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(r,e)&&function(s,o){for(const u of Pa(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(r,e)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(r,e)&&function(s,o){return!(s.startAt&&!function(h,f,g){const v=Ug(h,f,g);return h.inclusive?v<=0:v<0}(s.startAt,Pa(s),o)||s.endAt&&!function(h,f,g){const v=Ug(h,f,g);return h.inclusive?v>=0:v>0}(s.endAt,Pa(s),o))}(r,e)}function PA(r){return(e,t)=>{let s=!1;for(const o of Pa(r)){const u=NA(o,e,t);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function NA(r,e,t){const s=r.field.isKeyField()?Ee.comparator(e.key,t.key):function(u,h,f){const g=h.data.field(u),v=f.data.field(u);return g!==null&&v!==null?go(g,v):Ae()}(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return Ae()}}/**
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
 */class cs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,e))return u}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],e))return void(o[u]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){So(this.inner,(t,s)=>{for(const[o,u]of s)e(o,u)})}isEmpty(){return e_(this.inner)}size(){return this.innerSize}}/**
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
 */const xA=new Zt(Ee.comparator);function Xu(){return xA}const c_=new Zt(Ee.comparator);function Tu(...r){let e=c_;for(const t of r)e=e.insert(t.key,t);return e}function h_(r){let e=c_;return r.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Yi(){return Na()}function d_(){return Na()}function Na(){return new cs(r=>r.toString(),(r,e)=>r.isEqual(e))}const DA=new Zt(Ee.comparator),OA=new At(Ee.comparator);function Vt(...r){let e=OA;for(const t of r)e=e.add(t);return e}const LA=new At(be);function MA(){return LA}/**
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
 */function yf(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qu(e)?"-0":e}}function f_(r){return{integerValue:""+r}}function VA(r,e){return aA(e)?f_(e):yf(r,e)}/**
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
 */class fc{constructor(){this._=void 0}}function bA(r,e,t){return r instanceof Ju?function(o,u){const h={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&hf(u)&&(u=df(u)),u&&(h.fields.__previous_value__=u),{mapValue:h}}(t,e):r instanceof ja?m_(r,e):r instanceof Ba?g_(r,e):function(o,u){const h=p_(o,u),f=$g(h)+$g(o.Pe);return Nd(h)&&Nd(o.Pe)?f_(f):yf(o.serializer,f)}(r,e)}function FA(r,e,t){return r instanceof ja?m_(r,e):r instanceof Ba?g_(r,e):t}function p_(r,e){return r instanceof Zu?function(s){return Nd(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class Ju extends fc{}class ja extends fc{constructor(e){super(),this.elements=e}}function m_(r,e){const t=y_(e);for(const s of r.elements)t.some(o=>ir(o,s))||t.push(s);return{arrayValue:{values:t}}}class Ba extends fc{constructor(e){super(),this.elements=e}}function g_(r,e){let t=y_(e);for(const s of r.elements)t=t.filter(o=>!ir(o,s));return{arrayValue:{values:t}}}class Zu extends fc{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function $g(r){return Rt(r.integerValue||r.doubleValue)}function y_(r){return ff(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function UA(r,e){return r.field.isEqual(e.field)&&function(s,o){return s instanceof ja&&o instanceof ja||s instanceof Ba&&o instanceof Ba?po(s.elements,o.elements,ir):s instanceof Zu&&o instanceof Zu?ir(s.Pe,o.Pe):s instanceof Ju&&o instanceof Ju}(r.transform,e.transform)}class jA{constructor(e,t){this.version=e,this.transformResults=t}}class Pr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Pr}static exists(e){return new Pr(void 0,e)}static updateTime(e){return new Pr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ou(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class pc{}function v_(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new w_(r.key,Pr.none()):new Ja(r.key,r.data,Pr.none());{const t=r.data,s=Vn.empty();let o=new At(Ct.comparator);for(let u of e.fields)if(!o.has(u)){let h=t.field(u);h===null&&u.length>1&&(u=u.popLast(),h=t.field(u)),h===null?s.delete(u):s.set(u,h),o=o.add(u)}return new hs(r.key,s,new bn(o.toArray()),Pr.none())}}function BA(r,e,t){r instanceof Ja?function(o,u,h){const f=o.value.clone(),g=Wg(o.fieldTransforms,u,h.transformResults);f.setAll(g),u.convertToFoundDocument(h.version,f).setHasCommittedMutations()}(r,e,t):r instanceof hs?function(o,u,h){if(!Ou(o.precondition,u))return void u.convertToUnknownDocument(h.version);const f=Wg(o.fieldTransforms,u,h.transformResults),g=u.data;g.setAll(__(o)),g.setAll(f),u.convertToFoundDocument(h.version,g).setHasCommittedMutations()}(r,e,t):function(o,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function xa(r,e,t,s){return r instanceof Ja?function(u,h,f,g){if(!Ou(u.precondition,h))return f;const v=u.value.clone(),E=qg(u.fieldTransforms,g,h);return v.setAll(E),h.convertToFoundDocument(h.version,v).setHasLocalMutations(),null}(r,e,t,s):r instanceof hs?function(u,h,f,g){if(!Ou(u.precondition,h))return f;const v=qg(u.fieldTransforms,g,h),E=h.data;return E.setAll(__(u)),E.setAll(v),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),f===null?null:f.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(S=>S.field))}(r,e,t,s):function(u,h,f){return Ou(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f}(r,e,t)}function zA(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),u=p_(s.transform,o||null);u!=null&&(t===null&&(t=Vn.empty()),t.set(s.field,u))}return t||null}function Hg(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&po(s,o,(u,h)=>UA(u,h))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Ja extends pc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class hs extends pc{constructor(e,t,s,o,u=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function __(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}}),e}function Wg(r,e,t){const s=new Map;et(r.length===t.length);for(let o=0;o<t.length;o++){const u=r[o],h=u.transform,f=e.data.field(u.field);s.set(u.field,FA(h,f,t[o]))}return s}function qg(r,e,t){const s=new Map;for(const o of r){const u=o.transform,h=t.data.field(o.field);s.set(o.field,bA(u,h,e))}return s}class w_ extends pc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $A extends pc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class HA{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(e.key)&&BA(u,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=xa(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=xa(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=d_();return this.mutations.forEach(o=>{const u=e.get(o.key),h=u.overlayedDocument;let f=this.applyToLocalView(h,u.mutatedFields);f=t.has(o.key)?null:f;const g=v_(h,f);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(Ge.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Vt())}isEqual(e){return this.batchId===e.batchId&&po(this.mutations,e.mutations,(t,s)=>Hg(t,s))&&po(this.baseMutations,e.baseMutations,(t,s)=>Hg(t,s))}}class vf{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){et(e.mutations.length===s.length);let o=function(){return DA}();const u=e.mutations;for(let h=0;h<u.length;h++)o=o.insert(u[h].key,s[h].version);return new vf(e,t,s,o)}}/**
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
 */class WA{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */var ot,xe;function qA(r){switch(r){default:return Ae();case ee.CANCELLED:case ee.UNKNOWN:case ee.DEADLINE_EXCEEDED:case ee.RESOURCE_EXHAUSTED:case ee.INTERNAL:case ee.UNAVAILABLE:case ee.UNAUTHENTICATED:return!1;case ee.INVALID_ARGUMENT:case ee.NOT_FOUND:case ee.ALREADY_EXISTS:case ee.PERMISSION_DENIED:case ee.FAILED_PRECONDITION:case ee.ABORTED:case ee.OUT_OF_RANGE:case ee.UNIMPLEMENTED:case ee.DATA_LOSS:return!0}}function KA(r){if(r===void 0)return is("GRPC error has no .code"),ee.UNKNOWN;switch(r){case ot.OK:return ee.OK;case ot.CANCELLED:return ee.CANCELLED;case ot.UNKNOWN:return ee.UNKNOWN;case ot.DEADLINE_EXCEEDED:return ee.DEADLINE_EXCEEDED;case ot.RESOURCE_EXHAUSTED:return ee.RESOURCE_EXHAUSTED;case ot.INTERNAL:return ee.INTERNAL;case ot.UNAVAILABLE:return ee.UNAVAILABLE;case ot.UNAUTHENTICATED:return ee.UNAUTHENTICATED;case ot.INVALID_ARGUMENT:return ee.INVALID_ARGUMENT;case ot.NOT_FOUND:return ee.NOT_FOUND;case ot.ALREADY_EXISTS:return ee.ALREADY_EXISTS;case ot.PERMISSION_DENIED:return ee.PERMISSION_DENIED;case ot.FAILED_PRECONDITION:return ee.FAILED_PRECONDITION;case ot.ABORTED:return ee.ABORTED;case ot.OUT_OF_RANGE:return ee.OUT_OF_RANGE;case ot.UNIMPLEMENTED:return ee.UNIMPLEMENTED;case ot.DATA_LOSS:return ee.DATA_LOSS;default:return Ae()}}(xe=ot||(ot={}))[xe.OK=0]="OK",xe[xe.CANCELLED=1]="CANCELLED",xe[xe.UNKNOWN=2]="UNKNOWN",xe[xe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",xe[xe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",xe[xe.NOT_FOUND=5]="NOT_FOUND",xe[xe.ALREADY_EXISTS=6]="ALREADY_EXISTS",xe[xe.PERMISSION_DENIED=7]="PERMISSION_DENIED",xe[xe.UNAUTHENTICATED=16]="UNAUTHENTICATED",xe[xe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",xe[xe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",xe[xe.ABORTED=10]="ABORTED",xe[xe.OUT_OF_RANGE=11]="OUT_OF_RANGE",xe[xe.UNIMPLEMENTED=12]="UNIMPLEMENTED",xe[xe.INTERNAL=13]="INTERNAL",xe[xe.UNAVAILABLE=14]="UNAVAILABLE",xe[xe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new qv([4294967295,4294967295],0);class GA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Od(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function QA(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function YA(r,e){return Od(r,e.toTimestamp())}function fo(r){return et(!!r),Ge.fromTimestamp(function(t){const s=ss(t);return new _t(s.seconds,s.nanos)}(r))}function E_(r,e){return Ld(r,e).canonicalString()}function Ld(r,e){const t=function(o){return new Ze(["projects",o.projectId,"databases",o.database])}(r).child("documents");return e===void 0?t:t.child(e)}function XA(r){const e=Ze.fromString(r);return et(sk(e)),e}function Md(r,e){return E_(r.databaseId,e.path)}function JA(r){const e=XA(r);return e.length===4?Ze.emptyPath():ek(e)}function ZA(r){return new Ze(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function ek(r){return et(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function Kg(r,e,t){return{name:Md(r,e),fields:t.value.mapValue.fields}}function tk(r,e){let t;if(e instanceof Ja)t={update:Kg(r,e.key,e.value)};else if(e instanceof w_)t={delete:Md(r,e.key)};else if(e instanceof hs)t={update:Kg(r,e.key,e.data),updateMask:ik(e.fieldMask)};else{if(!(e instanceof $A))return Ae();t={verify:Md(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(u,h){const f=h.transform;if(f instanceof Ju)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof ja)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof Ba)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof Zu)return{fieldPath:h.field.canonicalString(),increment:f.Pe};throw Ae()}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:YA(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:Ae()}(r,e.precondition)),t}function nk(r,e){return r&&r.length>0?(et(e!==void 0),r.map(t=>function(o,u){let h=o.updateTime?fo(o.updateTime):fo(u);return h.isEqual(Ge.min())&&(h=fo(u)),new jA(h,o.transformResults||[])}(t,e))):[]}function rk(r){let e=JA(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){et(s===1);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let u=[];t.where&&(u=function(S){const A=T_(S);return A instanceof yi&&i_(A)?A.getFilters():[A]}(t.where));let h=[];t.orderBy&&(h=function(S){return S.map(A=>function(U){return new Yu(oo(U.field),function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(U.direction))}(A))}(t.orderBy));let f=null;t.limit&&(f=function(S){let A;return A=typeof S=="object"?S.value:S,cf(A)?null:A}(t.limit));let g=null;t.startAt&&(g=function(S){const A=!!S.before,F=S.values||[];return new Qu(F,A)}(t.startAt));let v=null;return t.endAt&&(v=function(S){const A=!S.before,F=S.values||[];return new Qu(F,A)}(t.endAt)),RA(e,o,h,u,f,"F",g,v)}function T_(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=oo(t.unaryFilter.field);return vt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=oo(t.unaryFilter.field);return vt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=oo(t.unaryFilter.field);return vt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=oo(t.unaryFilter.field);return vt.create(h,"!=",{nullValue:"NULL_VALUE"});default:return Ae()}}(r):r.fieldFilter!==void 0?function(t){return vt.create(oo(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ae()}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return yi.create(t.compositeFilter.filters.map(s=>T_(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Ae()}}(t.compositeFilter.op))}(r):Ae()}function oo(r){return Ct.fromServerFormat(r.fieldPath)}function ik(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function sk(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class ok{constructor(e){this.ht=e}}function ak(r){const e=rk({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Dd(e,e.limit,"L"):e}/**
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
 */class lk{constructor(){this.ln=new uk}addToCollectionParentIndex(e,t){return this.ln.add(t),G.resolve()}getCollectionParents(e,t){return G.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return G.resolve()}deleteFieldIndex(e,t){return G.resolve()}deleteAllFieldIndexes(e){return G.resolve()}createTargetIndexes(e,t){return G.resolve()}getDocumentsMatchingTarget(e,t){return G.resolve(null)}getIndexType(e,t){return G.resolve(0)}getFieldIndexes(e,t){return G.resolve([])}getNextCollectionGroupToUpdate(e){return G.resolve(null)}getMinOffset(e,t){return G.resolve(gi.min())}getMinOffsetFromCollectionGroup(e,t){return G.resolve(gi.min())}updateCollectionGroup(e,t,s){return G.resolve()}updateIndexEntries(e,t){return G.resolve()}}class uk{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new At(Ze.comparator),u=!o.has(s);return this.index[t]=o.add(s),u}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new At(Ze.comparator)).toArray()}}/**
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
 */const Gg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Xt{static withCacheSize(e){return new Xt(e,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Xt.DEFAULT_COLLECTION_PERCENTILE=10,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Xt.DEFAULT=new Xt(41943040,Xt.DEFAULT_COLLECTION_PERCENTILE,Xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Xt.DISABLED=new Xt(-1,0,0);/**
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
 */class vo{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new vo(0)}static Qn(){return new vo(-1)}}/**
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
 */function Qg([r,e],[t,s]){const o=be(r,t);return o===0?be(e,s):o}class ck{constructor(e){this.Gn=e,this.buffer=new At(Qg),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Qg(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class hk{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){ce("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Xa(t)?ce("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await lf(t)}await this.Yn(3e5)})}}class dk{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return G.resolve(uf.oe);const s=new ck(t);return this.Zn.forEachTarget(e,o=>s.Hn(o.sequenceNumber)).next(()=>this.Zn.er(e,o=>s.Hn(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Zn.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ce("LruGarbageCollector","Garbage collection skipped; disabled"),G.resolve(Gg)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(ce("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Gg):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let s,o,u,h,f,g,v;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(S=>(S>this.params.maximumSequenceNumbersToCollect?(ce("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${S}`),o=this.params.maximumSequenceNumbersToCollect):o=S,h=Date.now(),this.nthSequenceNumber(e,o))).next(S=>(s=S,f=Date.now(),this.removeTargets(e,s,t))).next(S=>(u=S,g=Date.now(),this.removeOrphanedDocuments(e,s))).next(S=>(v=Date.now(),so()<=Ce.DEBUG&&ce("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(f-h)+`ms
	Removed ${u} targets in `+(g-f)+`ms
	Removed ${S} documents in `+(v-g)+`ms
Total Duration: ${v-E}ms`),G.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:S})))}}function fk(r,e){return new dk(r,e)}/**
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
 */class pk{constructor(){this.changes=new cs(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Mn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?G.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class mk{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class gk{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&xa(s.mutation,o,bn.empty(),_t.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Vt()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Vt()){const o=Yi();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(u=>{let h=Tu();return u.forEach((f,g)=>{h=h.insert(f,g.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=Yi();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Vt()))}populateOverlays(e,t,s){const o=[];return s.forEach(u=>{t.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(e,o).next(u=>{u.forEach((h,f)=>{t.set(h,f)})})}computeViews(e,t,s,o){let u=Xu();const h=Na(),f=function(){return Na()}();return t.forEach((g,v)=>{const E=s.get(v.key);o.has(v.key)&&(E===void 0||E.mutation instanceof hs)?u=u.insert(v.key,v):E!==void 0?(h.set(v.key,E.mutation.getFieldMask()),xa(E.mutation,v,E.mutation.getFieldMask(),_t.now())):h.set(v.key,bn.empty())}),this.recalculateAndSaveOverlays(e,u).next(g=>(g.forEach((v,E)=>h.set(v,E)),t.forEach((v,E)=>{var S;return f.set(v,new mk(E,(S=h.get(v))!==null&&S!==void 0?S:null))}),f))}recalculateAndSaveOverlays(e,t){const s=Na();let o=new Zt((h,f)=>h-f),u=Vt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const f of h)f.keys().forEach(g=>{const v=t.get(g);if(v===null)return;let E=s.get(g)||bn.empty();E=f.applyToLocalView(v,E),s.set(g,E);const S=(o.get(f.batchId)||Vt()).add(g);o=o.insert(f.batchId,S)})}).next(()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const g=f.getNext(),v=g.key,E=g.value,S=d_();E.forEach(A=>{if(!u.has(A)){const F=v_(t.get(A),s.get(A));F!==null&&S.set(A,F),u=u.add(A)}}),h.push(this.documentOverlayCache.saveOverlays(e,v,S))}return G.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return Ee.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):AA(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(u=>{const h=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-u.size):G.resolve(Yi());let f=-1,g=u;return h.next(v=>G.forEach(v,(E,S)=>(f<S.largestBatchId&&(f=S.largestBatchId),u.get(E)?G.resolve():this.remoteDocumentCache.getEntry(e,E).next(A=>{g=g.insert(E,A)}))).next(()=>this.populateOverlays(e,v,u)).next(()=>this.computeViews(e,g,v,Vt())).next(E=>({batchId:f,changes:h_(E)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Ee(t)).next(s=>{let o=Tu();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const u=t.collectionGroup;let h=Tu();return this.indexManager.getCollectionParents(e,u).next(f=>G.forEach(f,g=>{const v=function(S,A){return new dc(A,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)}(t,g.child(u));return this.getDocumentsMatchingCollectionQuery(e,v,s,o).next(E=>{E.forEach((S,A)=>{h=h.insert(S,A)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,u,o))).next(h=>{u.forEach((g,v)=>{const E=v.getKey();h.get(E)===null&&(h=h.insert(E,Mn.newInvalidDocument(E)))});let f=Tu();return h.forEach((g,v)=>{const E=u.get(g);E!==void 0&&xa(E.mutation,v,bn.empty(),_t.now()),gf(t,v)&&(f=f.insert(g,v))}),f})}}/**
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
 */class yk{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return G.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:fo(o.createTime)}}(t)),G.resolve()}getNamedQuery(e,t){return G.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(o){return{name:o.name,query:ak(o.bundledQuery),readTime:fo(o.readTime)}}(t)),G.resolve()}}/**
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
 */class vk{constructor(){this.overlays=new Zt(Ee.comparator),this.Er=new Map}getOverlay(e,t){return G.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Yi();return G.forEach(t,o=>this.getOverlay(e,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,u)=>{this.Tt(e,t,u)}),G.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Er.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.Er.delete(s)),G.resolve()}getOverlaysForCollection(e,t,s){const o=Yi(),u=t.length+1,h=new Ee(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const g=f.getNext().value,v=g.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===u&&g.largestBatchId>s&&o.set(g.getKey(),g)}return G.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let u=new Zt((v,E)=>v-E);const h=this.overlays.getIterator();for(;h.hasNext();){const v=h.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>s){let E=u.get(v.largestBatchId);E===null&&(E=Yi(),u=u.insert(v.largestBatchId,E)),E.set(v.getKey(),v)}}const f=Yi(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((v,E)=>f.set(v,E)),!(f.size()>=o)););return G.resolve(f)}Tt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Er.get(o.largestBatchId).delete(s.key);this.Er.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new WA(t,s));let u=this.Er.get(t);u===void 0&&(u=Vt(),this.Er.set(t,u)),this.Er.set(t,u.add(s.key))}}/**
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
 */class _k{constructor(){this.sessionToken=rr.EMPTY_BYTE_STRING}getSessionToken(e){return G.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,G.resolve()}}/**
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
 */class _f{constructor(){this.dr=new At(yt.Ar),this.Rr=new At(yt.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const s=new yt(e,t);this.dr=this.dr.add(s),this.Rr=this.Rr.add(s)}mr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.gr(new yt(e,t))}pr(e,t){e.forEach(s=>this.removeReference(s,t))}yr(e){const t=new Ee(new Ze([])),s=new yt(t,e),o=new yt(t,e+1),u=[];return this.Rr.forEachInRange([s,o],h=>{this.gr(h),u.push(h.key)}),u}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new Ee(new Ze([])),s=new yt(t,e),o=new yt(t,e+1);let u=Vt();return this.Rr.forEachInRange([s,o],h=>{u=u.add(h.key)}),u}containsKey(e){const t=new yt(e,0),s=this.dr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class yt{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return Ee.comparator(e.key,t.key)||be(e.br,t.br)}static Vr(e,t){return be(e.br,t.br)||Ee.comparator(e.key,t.key)}}/**
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
 */class wk{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new At(yt.Ar)}checkEmpty(e){return G.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const u=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new HA(u,t,s,o);this.mutationQueue.push(h);for(const f of o)this.vr=this.vr.add(new yt(f.key,u)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return G.resolve(h)}lookupMutationBatch(e,t){return G.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Fr(s),u=o<0?0:o;return G.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return G.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return G.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new yt(t,0),o=new yt(t,Number.POSITIVE_INFINITY),u=[];return this.vr.forEachInRange([s,o],h=>{const f=this.Cr(h.br);u.push(f)}),G.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new At(be);return t.forEach(o=>{const u=new yt(o,0),h=new yt(o,Number.POSITIVE_INFINITY);this.vr.forEachInRange([u,h],f=>{s=s.add(f.br)})}),G.resolve(this.Mr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let u=s;Ee.isDocumentKey(u)||(u=u.child(""));const h=new yt(new Ee(u),0);let f=new At(be);return this.vr.forEachWhile(g=>{const v=g.key.path;return!!s.isPrefixOf(v)&&(v.length===o&&(f=f.add(g.br)),!0)},h),G.resolve(this.Mr(f))}Mr(e){const t=[];return e.forEach(s=>{const o=this.Cr(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){et(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.vr;return G.forEach(t.mutations,o=>{const u=new yt(o.key,t.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.vr=s})}Ln(e){}containsKey(e,t){const s=new yt(t,0),o=this.vr.firstAfterOrEqual(s);return G.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,G.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Ek{constructor(e){this.Nr=e,this.docs=function(){return new Zt(Ee.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),u=o?o.size:0,h=this.Nr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return G.resolve(s?s.document.mutableCopy():Mn.newInvalidDocument(t))}getEntries(e,t){let s=Xu();return t.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Mn.newInvalidDocument(o))}),G.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let u=Xu();const h=t.path,f=new Ee(h.child("")),g=this.docs.getIteratorFrom(f);for(;g.hasNext();){const{key:v,value:{document:E}}=g.getNext();if(!h.isPrefixOf(v.path))break;v.path.length>h.length+1||rA(nA(E),s)<=0||(o.has(E.key)||gf(t,E))&&(u=u.insert(E.key,E.mutableCopy()))}return G.resolve(u)}getAllFromCollectionGroup(e,t,s,o){Ae()}Lr(e,t){return G.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new Tk(this)}getSize(e){return G.resolve(this.size)}}class Tk extends pk{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.hr.addEntry(e,o)):this.hr.removeEntry(s)}),G.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
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
 */class Ik{constructor(e){this.persistence=e,this.Br=new cs(t=>pf(t),mf),this.lastRemoteSnapshotVersion=Ge.min(),this.highestTargetId=0,this.kr=0,this.qr=new _f,this.targetCount=0,this.Qr=vo.qn()}forEachTarget(e,t){return this.Br.forEach((s,o)=>t(o)),G.resolve()}getLastRemoteSnapshotVersion(e){return G.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return G.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),G.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.kr&&(this.kr=t),G.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new vo(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,G.resolve()}updateTargetData(e,t){return this.Un(t),G.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,G.resolve()}removeTargets(e,t,s){let o=0;const u=[];return this.Br.forEach((h,f)=>{f.sequenceNumber<=t&&s.get(f.targetId)===null&&(this.Br.delete(h),u.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)}),G.waitFor(u).next(()=>o)}getTargetCount(e){return G.resolve(this.targetCount)}getTargetData(e,t){const s=this.Br.get(t)||null;return G.resolve(s)}addMatchingKeys(e,t,s){return this.qr.mr(t,s),G.resolve()}removeMatchingKeys(e,t,s){this.qr.pr(t,s);const o=this.persistence.referenceDelegate,u=[];return o&&t.forEach(h=>{u.push(o.markPotentiallyOrphaned(e,h))}),G.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),G.resolve()}getMatchingKeysForTargetId(e,t){const s=this.qr.Sr(t);return G.resolve(s)}containsKey(e,t){return G.resolve(this.qr.containsKey(t))}}/**
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
 */class I_{constructor(e,t){this.Kr={},this.overlays={},this.$r=new uf(0),this.Ur=!1,this.Ur=!0,this.Wr=new _k,this.referenceDelegate=e(this),this.Gr=new Ik(this),this.indexManager=new lk,this.remoteDocumentCache=function(o){return new Ek(o)}(s=>this.referenceDelegate.zr(s)),this.serializer=new ok(t),this.jr=new yk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new vk,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Kr[e.toKey()];return s||(s=new wk(t,this.referenceDelegate),this.Kr[e.toKey()]=s),s}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,s){ce("MemoryPersistence","Starting transaction:",e);const o=new Sk(this.$r.next());return this.referenceDelegate.Hr(),s(o).next(u=>this.referenceDelegate.Jr(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Yr(e,t){return G.or(Object.values(this.Kr).map(s=>()=>s.containsKey(e,t)))}}class Sk extends sA{constructor(e){super(),this.currentSequenceNumber=e}}class wf{constructor(e){this.persistence=e,this.Zr=new _f,this.Xr=null}static ei(e){return new wf(e)}get ti(){if(this.Xr)return this.Xr;throw Ae()}addReference(e,t,s){return this.Zr.addReference(s,t),this.ti.delete(s.toString()),G.resolve()}removeReference(e,t,s){return this.Zr.removeReference(s,t),this.ti.add(s.toString()),G.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),G.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(o=>this.ti.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(u=>this.ti.add(u.toString()))}).next(()=>s.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return G.forEach(this.ti,s=>{const o=Ee.fromPath(s);return this.ni(e,o).next(u=>{u||t.removeEntry(o,Ge.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(s=>{s?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return G.or([()=>G.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class ec{constructor(e,t){this.persistence=e,this.ri=new cs(s=>lA(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=fk(this,t)}static ei(e,t){return new ec(e,t)}Hr(){}Jr(e){return G.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}nr(e){let t=0;return this.er(e,s=>{t++}).next(()=>t)}er(e,t){return G.forEach(this.ri,(s,o)=>this.ir(e,s,o).next(u=>u?G.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.Lr(e,h=>this.ir(e,h,t).next(f=>{f||(s++,u.removeEntry(h,Ge.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),G.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),G.resolve()}removeReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),G.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),G.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=xu(e.data.value)),t}ir(e,t,s){return G.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.ri.get(t);return G.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Ef{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Wi=s,this.Gi=o}static zi(e,t){let s=Vt(),o=Vt();for(const u of t.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new Ef(e,t.fromCache,s,o)}}/**
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
 */class Rk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Ck{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return $0()?8:oA(bt())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,s,o){const u={result:null};return this.Xi(e,t).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.es(e,t,o,s).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new Rk;return this.ts(e,t,h).next(f=>{if(u.result=f,this.Hi)return this.ns(e,t,h,f.size)})}).next(()=>u.result)}ns(e,t,s,o){return s.documentReadCount<this.Ji?(so()<=Ce.DEBUG&&ce("QueryEngine","SDK will not create cache indexes for query:",Ta(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),G.resolve()):(so()<=Ce.DEBUG&&ce("QueryEngine","Query:",Ta(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.Yi*o?(so()<=Ce.DEBUG&&ce("QueryEngine","The SDK decides to create cache indexes for query:",Ta(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ji(t))):G.resolve())}Xi(e,t){if(zg(t))return G.resolve(null);let s=Ji(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=Dd(t,null,"F"),s=Ji(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const h=Vt(...u);return this.Zi.getDocuments(e,h).next(f=>this.indexManager.getMinOffset(e,s).next(g=>{const v=this.rs(t,f);return this.ss(t,v,h,g.readTime)?this.Xi(e,Dd(t,null,"F")):this.os(e,v,t,g)}))})))}es(e,t,s,o){return zg(t)||o.isEqual(Ge.min())?G.resolve(null):this.Zi.getDocuments(e,s).next(u=>{const h=this.rs(t,u);return this.ss(t,h,s,o)?G.resolve(null):(so()<=Ce.DEBUG&&ce("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Ta(t)),this.os(e,h,t,tA(o,-1)).next(f=>f))})}rs(e,t){let s=new At(PA(e));return t.forEach((o,u)=>{gf(e,u)&&(s=s.add(u))}),s}ss(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const u=e.limitType==="F"?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}ts(e,t,s){return so()<=Ce.DEBUG&&ce("QueryEngine","Using full collection scan to execute query:",Ta(t)),this.Zi.getDocumentsMatchingQuery(e,t,gi.min(),s)}os(e,t,s,o){return this.Zi.getDocumentsMatchingQuery(e,s,o).next(u=>(t.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
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
 */class Ak{constructor(e,t,s,o){this.persistence=e,this._s=t,this.serializer=o,this.us=new Zt(be),this.cs=new cs(u=>pf(u),mf),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(s)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new gk(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function kk(r,e,t,s){return new Ak(r,e,t,s)}async function S_(r,e){const t=$e(r);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,t.Ps(e),t.mutationQueue.getAllMutationBatches(s))).next(u=>{const h=[],f=[];let g=Vt();for(const v of o){h.push(v.batchId);for(const E of v.mutations)g=g.add(E.key)}for(const v of u){f.push(v.batchId);for(const E of v.mutations)g=g.add(E.key)}return t.localDocuments.getDocuments(s,g).next(v=>({Ts:v,removedBatchIds:h,addedBatchIds:f}))})})}function Pk(r,e){const t=$e(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),u=t.hs.newChangeBuffer({trackRemovals:!0});return function(f,g,v,E){const S=v.batch,A=S.keys();let F=G.resolve();return A.forEach(U=>{F=F.next(()=>E.getEntry(g,U)).next(W=>{const B=v.docVersions.get(U);et(B!==null),W.version.compareTo(B)<0&&(S.applyToRemoteDocument(W,v),W.isValidDocument()&&(W.setReadTime(v.commitVersion),E.addEntry(W)))})}),F.next(()=>f.mutationQueue.removeMutationBatch(g,S))}(t,s,e,u).next(()=>u.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(f){let g=Vt();for(let v=0;v<f.mutationResults.length;++v)f.mutationResults[v].transformResults.length>0&&(g=g.add(f.batch.mutations[v].key));return g}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function Nk(r){const e=$e(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function xk(r,e){const t=$e(r);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}class Yg{constructor(){this.activeTargetIds=MA()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Dk{constructor(){this._o=new Yg,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,s){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Yg,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Ok{uo(e){}shutdown(){}}/**
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
 */class Xg{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){ce("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){ce("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Iu=null;function ud(){return Iu===null?Iu=function(){return 268435456+Math.round(2147483648*Math.random())}():Iu++,"0x"+Iu.toString(16)}/**
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
 */const Lk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Mk{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */const Lt="WebChannelConnection";class Vk extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const s=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),u=encodeURIComponent(this.databaseId.database);this.Fo=s+"://"+t.host,this.Mo=`projects/${o}/databases/${u}`,this.xo=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${u}`}Oo(t,s,o,u,h){const f=ud(),g=this.No(t,s.toUriEncodedString());ce("RestConnection",`Sending RPC '${t}' ${f}:`,g,o);const v={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(v,u,h),this.Bo(t,g,v,o).then(E=>(ce("RestConnection",`Received RPC '${t}' ${f}: `,E),E),E=>{throw Wu("RestConnection",`RPC '${t}' ${f} failed with error: `,E,"url: ",g,"request:",o),E})}ko(t,s,o,u,h,f){return this.Oo(t,s,o,u,h)}Lo(t,s,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Io}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((u,h)=>t[h]=u),o&&o.headers.forEach((u,h)=>t[h]=u)}No(t,s){const o=Lk[t];return`${this.Fo}/v1/${s}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,s,o){const u=ud();return new Promise((h,f)=>{const g=new Kv;g.setWithCredentials(!0),g.listenOnce(Gv.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case Nu.NO_ERROR:const E=g.getResponseJson();ce(Lt,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(E)),h(E);break;case Nu.TIMEOUT:ce(Lt,`RPC '${e}' ${u} timed out`),f(new ye(ee.DEADLINE_EXCEEDED,"Request time out"));break;case Nu.HTTP_ERROR:const S=g.getStatus();if(ce(Lt,`RPC '${e}' ${u} failed with status:`,S,"response text:",g.getResponseText()),S>0){let A=g.getResponseJson();Array.isArray(A)&&(A=A[0]);const F=A==null?void 0:A.error;if(F&&F.status&&F.message){const U=function(B){const K=B.toLowerCase().replace(/_/g,"-");return Object.values(ee).indexOf(K)>=0?K:ee.UNKNOWN}(F.status);f(new ye(U,F.message))}else f(new ye(ee.UNKNOWN,"Server responded with status "+g.getStatus()))}else f(new ye(ee.UNAVAILABLE,"Connection failed."));break;default:Ae()}}finally{ce(Lt,`RPC '${e}' ${u} completed.`)}});const v=JSON.stringify(o);ce(Lt,`RPC '${e}' ${u} sending request:`,o),g.send(t,"POST",v,s,15)})}qo(e,t,s){const o=ud(),u=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=Xv(),f=Yv(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(g.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(g.useFetchStreams=!0),this.Lo(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const E=u.join("");ce(Lt,`Creating RPC '${e}' stream ${o}: ${E}`,g);const S=h.createWebChannel(E,g);let A=!1,F=!1;const U=new Mk({Eo:B=>{F?ce(Lt,`Not sending because RPC '${e}' stream ${o} is closed:`,B):(A||(ce(Lt,`Opening RPC '${e}' stream ${o} transport.`),S.open(),A=!0),ce(Lt,`RPC '${e}' stream ${o} sending:`,B),S.send(B))},Ao:()=>S.close()}),W=(B,K,J)=>{B.listen(K,Y=>{try{J(Y)}catch(le){setTimeout(()=>{throw le},0)}})};return W(S,Ra.EventType.OPEN,()=>{F||(ce(Lt,`RPC '${e}' stream ${o} transport opened.`),U.So())}),W(S,Ra.EventType.CLOSE,()=>{F||(F=!0,ce(Lt,`RPC '${e}' stream ${o} transport closed`),U.Do())}),W(S,Ra.EventType.ERROR,B=>{F||(F=!0,Wu(Lt,`RPC '${e}' stream ${o} transport errored:`,B),U.Do(new ye(ee.UNAVAILABLE,"The operation could not be completed")))}),W(S,Ra.EventType.MESSAGE,B=>{var K;if(!F){const J=B.data[0];et(!!J);const Y=J,le=(Y==null?void 0:Y.error)||((K=Y[0])===null||K===void 0?void 0:K.error);if(le){ce(Lt,`RPC '${e}' stream ${o} received error:`,le);const we=le.status;let _e=function(R){const P=ot[R];if(P!==void 0)return KA(P)}(we),N=le.message;_e===void 0&&(_e=ee.INTERNAL,N="Unknown error status: "+we+" with message "+le.message),F=!0,U.Do(new ye(_e,N)),S.close()}else ce(Lt,`RPC '${e}' stream ${o} received:`,J),U.vo(J)}}),W(f,Qv.STAT_EVENT,B=>{B.stat===kd.PROXY?ce(Lt,`RPC '${e}' stream ${o} detected buffering proxy`):B.stat===kd.NOPROXY&&ce(Lt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{U.bo()},0),U}}function cd(){return typeof document<"u"?document:null}/**
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
 */function mc(r){return new GA(r,!0)}/**
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
 */class R_{constructor(e,t,s=1e3,o=1.5,u=6e4){this.li=e,this.timerId=t,this.Qo=s,this.Ko=o,this.$o=u,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),s=Math.max(0,Date.now()-this.Go),o=Math.max(0,t-s);o>0&&ce("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,o,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class bk{constructor(e,t,s,o,u,h,f,g){this.li=e,this.Yo=s,this.Zo=o,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=g,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new R_(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===ee.RESOURCE_EXHAUSTED?(is(t.toString()),is("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===ee.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.Xo===t&&this.I_(s,o)},s=>{e(()=>{const o=new ye(ee.UNKNOWN,"Fetching auth token failed: "+s.message);return this.E_(o)})})}I_(e,t){const s=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{s(()=>this.listener.Ro())}),this.stream.mo(()=>{s(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(o=>{s(()=>this.E_(o))}),this.stream.onMessage(o=>{s(()=>++this.n_==1?this.A_(o):this.onNext(o))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return ce("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(ce("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Fk extends bk{constructor(e,t,s,o,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=u}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return et(!!e.streamToken),this.lastStreamToken=e.streamToken,et(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){et(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=nk(e.writeResults,e.commitTime),s=fo(e.commitTime);return this.listener.y_(s,t)}w_(){const e={};e.database=ZA(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>tk(this.serializer,s))};this.c_(t)}}/**
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
 */class Uk extends class{}{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.S_=!1}b_(){if(this.S_)throw new ye(ee.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,s,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.Oo(e,Ld(t,s),o,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===ee.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ye(ee.UNKNOWN,u.toString())})}ko(e,t,s,o,u){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,f])=>this.connection.ko(e,Ld(t,s),o,h,f,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===ee.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ye(ee.UNKNOWN,h.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class jk{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(is(t),this.C_=!1):ce("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class Bk{constructor(e,t,s,o,u){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=u,this.Q_.uo(h=>{s.enqueueAndForget(async()=>{el(this)&&(ce("RemoteStore","Restarting streams for network reachability change."),await async function(g){const v=$e(g);v.k_.add(4),await Za(v),v.K_.set("Unknown"),v.k_.delete(4),await gc(v)}(this))})}),this.K_=new jk(s,o)}}async function gc(r){if(el(r))for(const e of r.q_)await e(!0)}async function Za(r){for(const e of r.q_)await e(!1)}function el(r){return $e(r).k_.size===0}async function C_(r,e,t){if(!Xa(e))throw e;r.k_.add(1),await Za(r),r.K_.set("Offline"),t||(t=()=>Nk(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{ce("RemoteStore","Retrying IndexedDB access"),await t(),r.k_.delete(1),await gc(r)})}function A_(r,e){return e().catch(t=>C_(r,t,e))}async function yc(r){const e=$e(r),t=vi(e);let s=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;zk(e);)try{const o=await xk(e.localStore,s);if(o===null){e.L_.length===0&&t.a_();break}s=o.batchId,$k(e,o)}catch(o){await C_(e,o)}k_(e)&&P_(e)}function zk(r){return el(r)&&r.L_.length<10}function $k(r,e){r.L_.push(e);const t=vi(r);t.s_()&&t.f_&&t.g_(e.mutations)}function k_(r){return el(r)&&!vi(r).i_()&&r.L_.length>0}function P_(r){vi(r).start()}async function Hk(r){vi(r).w_()}async function Wk(r){const e=vi(r);for(const t of r.L_)e.g_(t.mutations)}async function qk(r,e,t){const s=r.L_.shift(),o=vf.from(s,e,t);await A_(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await yc(r)}async function Kk(r,e){e&&vi(r).f_&&await async function(s,o){if(function(h){return qA(h)&&h!==ee.ABORTED}(o.code)){const u=s.L_.shift();vi(s).__(),await A_(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await yc(s)}}(r,e),k_(r)&&P_(r)}async function Jg(r,e){const t=$e(r);t.asyncQueue.verifyOperationInProgress(),ce("RemoteStore","RemoteStore received new credentials");const s=el(t);t.k_.add(3),await Za(t),s&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await gc(t)}async function Gk(r,e){const t=$e(r);e?(t.k_.delete(2),await gc(t)):e||(t.k_.add(2),await Za(t),t.K_.set("Unknown"))}function vi(r){return r.G_||(r.G_=function(t,s,o){const u=$e(t);return u.b_(),new Fk(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{Ro:()=>Promise.resolve(),mo:Hk.bind(null,r),po:Kk.bind(null,r),p_:Wk.bind(null,r),y_:qk.bind(null,r)}),r.q_.push(async e=>{e?(r.G_.__(),await yc(r)):(await r.G_.stop(),r.L_.length>0&&(ce("RemoteStore",`Stopping write stream with ${r.L_.length} pending writes`),r.L_=[]))})),r.G_}/**
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
 */class Tf{constructor(e,t,s,o,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new Xi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,u){const h=Date.now()+s,f=new Tf(e,t,h,o,u);return f.start(s),f}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ye(ee.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function N_(r,e){if(is("AsyncQueue",`${e}: ${r}`),Xa(r))return new ye(ee.UNAVAILABLE,`${e}: ${r}`);throw r}class Qk{constructor(){this.queries=Zg(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,s){const o=$e(t),u=o.queries;o.queries=Zg(),u.forEach((h,f)=>{for(const g of f.J_)g.onError(s)})})(this,new ye(ee.ABORTED,"Firestore shutting down"))}}function Zg(){return new cs(r=>u_(r),l_)}function Yk(r){r.X_.forEach(e=>{e.next()})}var ey,ty;(ty=ey||(ey={})).na="default",ty.Cache="cache";class Xk{constructor(e,t,s,o,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.Ma={},this.xa=new cs(f=>u_(f),l_),this.Oa=new Map,this.Na=new Set,this.La=new Zt(Ee.comparator),this.Ba=new Map,this.ka=new _f,this.qa={},this.Qa=new Map,this.Ka=vo.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function Jk(r,e,t){const s=nP(r);try{const o=await function(h,f){const g=$e(h),v=_t.now(),E=f.reduce((F,U)=>F.add(U.key),Vt());let S,A;return g.persistence.runTransaction("Locally write mutations","readwrite",F=>{let U=Xu(),W=Vt();return g.hs.getEntries(F,E).next(B=>{U=B,U.forEach((K,J)=>{J.isValidDocument()||(W=W.add(K))})}).next(()=>g.localDocuments.getOverlayedDocuments(F,U)).next(B=>{S=B;const K=[];for(const J of f){const Y=zA(J,S.get(J.key).overlayedDocument);Y!=null&&K.push(new hs(J.key,Y,t_(Y.value.mapValue),Pr.exists(!0)))}return g.mutationQueue.addMutationBatch(F,v,K,f)}).next(B=>{A=B;const K=B.applyToLocalDocumentSet(S,W);return g.documentOverlayCache.saveOverlays(F,B.batchId,K)})}).then(()=>({batchId:A.batchId,changes:h_(S)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,f,g){let v=h.qa[h.currentUser.toKey()];v||(v=new Zt(be)),v=v.insert(f,g),h.qa[h.currentUser.toKey()]=v}(s,o.batchId,t),await vc(s,o.changes),await yc(s.remoteStore)}catch(o){const u=N_(o,"Failed to persist write");t.reject(u)}}function ny(r,e,t){const s=$e(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.xa.forEach((u,h)=>{const f=h.view.ea(e);f.snapshot&&o.push(f.snapshot)}),function(h,f){const g=$e(h);g.onlineState=f;let v=!1;g.queries.forEach((E,S)=>{for(const A of S.J_)A.ea(f)&&(v=!0)}),v&&Yk(g)}(s.eventManager,e),o.length&&s.Ma.R_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Zk(r,e){const t=$e(r),s=e.batch.batchId;try{const o=await Pk(t.localStore,e);D_(t,s,null),x_(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await vc(t,o)}catch(o){await lf(o)}}async function eP(r,e,t){const s=$e(r);try{const o=await function(h,f){const g=$e(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",v=>{let E;return g.mutationQueue.lookupMutationBatch(v,f).next(S=>(et(S!==null),E=S.keys(),g.mutationQueue.removeMutationBatch(v,S))).next(()=>g.mutationQueue.performConsistencyCheck(v)).next(()=>g.documentOverlayCache.removeOverlaysForBatchId(v,E,f)).next(()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,E)).next(()=>g.localDocuments.getDocuments(v,E))})}(s.localStore,e);D_(s,e,t),x_(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await vc(s,o)}catch(o){await lf(o)}}function x_(r,e){(r.Qa.get(e)||[]).forEach(t=>{t.resolve()}),r.Qa.delete(e)}function D_(r,e,t){const s=$e(r);let o=s.qa[s.currentUser.toKey()];if(o){const u=o.get(e);u&&(t?u.reject(t):u.resolve(),o=o.remove(e)),s.qa[s.currentUser.toKey()]=o}}async function vc(r,e,t){const s=$e(r),o=[],u=[],h=[];s.xa.isEmpty()||(s.xa.forEach((f,g)=>{h.push(s.Ua(g,e,t).then(v=>{var E;if((v||t)&&s.isPrimaryClient){const S=v?!v.fromCache:(E=void 0)===null||E===void 0?void 0:E.current;s.sharedClientState.updateQueryState(g.targetId,S?"current":"not-current")}if(v){o.push(v);const S=Ef.zi(g.targetId,v);u.push(S)}}))}),await Promise.all(h),s.Ma.R_(o),await async function(g,v){const E=$e(g);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",S=>G.forEach(v,A=>G.forEach(A.Wi,F=>E.persistence.referenceDelegate.addReference(S,A.targetId,F)).next(()=>G.forEach(A.Gi,F=>E.persistence.referenceDelegate.removeReference(S,A.targetId,F)))))}catch(S){if(!Xa(S))throw S;ce("LocalStore","Failed to update sequence numbers: "+S)}for(const S of v){const A=S.targetId;if(!S.fromCache){const F=E.us.get(A),U=F.snapshotVersion,W=F.withLastLimboFreeSnapshotVersion(U);E.us=E.us.insert(A,W)}}}(s.localStore,u))}async function tP(r,e){const t=$e(r);if(!t.currentUser.isEqual(e)){ce("SyncEngine","User change. New user:",e.toKey());const s=await S_(t.localStore,e);t.currentUser=e,function(u,h){u.Qa.forEach(f=>{f.forEach(g=>{g.reject(new ye(ee.CANCELLED,h))})}),u.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await vc(t,s.Ts)}}function nP(r){const e=$e(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Zk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=eP.bind(null,e),e}class tc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=mc(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return kk(this.persistence,new Ck,e.initialUser,this.serializer)}ja(e){return new I_(wf.ei,this.serializer)}za(e){return new Dk}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}tc.provider={build:()=>new tc};class rP extends tc{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){et(this.persistence.referenceDelegate instanceof ec);const s=this.persistence.referenceDelegate.garbageCollector;return new hk(s,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?Xt.withCacheSize(this.cacheSizeBytes):Xt.DEFAULT;return new I_(s=>ec.ei(s,t),this.serializer)}}class Vd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>ny(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=tP.bind(null,this.syncEngine),await Gk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Qk}()}createDatastore(e){const t=mc(e.databaseInfo.databaseId),s=function(u){return new Vk(u)}(e.databaseInfo);return function(u,h,f,g){return new Uk(u,h,f,g)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,u,h,f){return new Bk(s,o,u,h,f)}(this.localStore,this.datastore,e.asyncQueue,t=>ny(this.syncEngine,t,0),function(){return Xg.p()?new Xg:new Ok}())}createSyncEngine(e,t){return function(o,u,h,f,g,v,E){const S=new Xk(o,u,h,f,g,v);return E&&(S.$a=!0),S}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const u=$e(o);ce("RemoteStore","RemoteStore shutting down."),u.k_.add(5),await Za(u),u.Q_.shutdown(),u.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Vd.provider={build:()=>new Vd};/**
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
 */class iP{constructor(e,t,s,o,u){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Mt.UNAUTHENTICATED,this.clientId=Zv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async h=>{ce("FirestoreClient","Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(ce("FirestoreClient","Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Xi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=N_(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function hd(r,e){r.asyncQueue.verifyOperationInProgress(),ce("FirestoreClient","Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await S_(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function ry(r,e){r.asyncQueue.verifyOperationInProgress();const t=await sP(r);ce("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(s=>Jg(e.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>Jg(e.remoteStore,o)),r._onlineComponents=e}async function sP(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ce("FirestoreClient","Using user provided OfflineComponentProvider");try{await hd(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===ee.FAILED_PRECONDITION||o.code===ee.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;Wu("Error using user provided cache. Falling back to memory cache: "+t),await hd(r,new tc)}}else ce("FirestoreClient","Using default OfflineComponentProvider"),await hd(r,new rP(void 0));return r._offlineComponents}async function oP(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ce("FirestoreClient","Using user provided OnlineComponentProvider"),await ry(r,r._uninitializedComponentsProvider._online)):(ce("FirestoreClient","Using default OnlineComponentProvider"),await ry(r,new Vd))),r._onlineComponents}function aP(r){return oP(r).then(e=>e.syncEngine)}/**
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
 */function O_(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const iy=new Map;/**
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
 */function L_(r,e,t){if(!t)throw new ye(ee.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function lP(r,e,t,s){if(e===!0&&s===!0)throw new ye(ee.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function sy(r){if(!Ee.isDocumentKey(r))throw new ye(ee.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function oy(r){if(Ee.isDocumentKey(r))throw new ye(ee.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function If(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":Ae()}function M_(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ye(ee.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=If(r);throw new ye(ee.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */class ay{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ye(ee.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ye(ee.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}lP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=O_((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new ye(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new ye(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new ye(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class _c{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ay({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ye(ee.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ye(ee.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ay(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new qC;switch(s.type){case"firstParty":return new YC(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ye(ee.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=iy.get(t);s&&(ce("ComponentProvider","Removing Datastore"),iy.delete(t),s.terminate())}(this),Promise.resolve()}}function uP(r,e,t,s={}){var o;const u=(r=M_(r,_c))._getSettings(),h=`${e}:${t}`;if(u.host!=="firestore.googleapis.com"&&u.host!==h&&Wu("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},u),{host:h,ssl:!1})),s.mockUserToken){let f,g;if(typeof s.mockUserToken=="string")f=s.mockUserToken,g=Mt.MOCK_USER;else{f=b0(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const v=s.mockUserToken.sub||s.mockUserToken.user_id;if(!v)throw new ye(ee.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Mt(v)}r._authCredentials=new KC(new Jv(f,g))}}/**
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
 */class Sf{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Sf(this.firestore,e,this._query)}}class Nr{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Nr(this.firestore,e,this._key)}}class pi extends Sf{constructor(e,t,s){super(e,t,CA(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Nr(this.firestore,null,new Ee(e))}withConverter(e){return new pi(this.firestore,e,this._path)}}function cP(r,e,...t){if(r=Ft(r),L_("collection","path",e),r instanceof _c){const s=Ze.fromString(e,...t);return oy(s),new pi(r,null,s)}{if(!(r instanceof Nr||r instanceof pi))throw new ye(ee.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Ze.fromString(e,...t));return oy(s),new pi(r.firestore,null,s)}}function hP(r,e,...t){if(r=Ft(r),arguments.length===1&&(e=Zv.newId()),L_("doc","path",e),r instanceof _c){const s=Ze.fromString(e,...t);return sy(s),new Nr(r,null,new Ee(s))}{if(!(r instanceof Nr||r instanceof pi))throw new ye(ee.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Ze.fromString(e,...t));return sy(s),new Nr(r.firestore,r instanceof pi?r.converter:null,new Ee(s))}}/**
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
 */class ly{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new R_(this,"async_queue_retry"),this.fu=()=>{const s=cd();s&&ce("AsyncQueue","Visibility state changed to "+s.visibilityState),this.r_.Jo()},this.gu=e;const t=cd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=cd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new Xi;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Xa(e))throw e;ce("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(s=>{this.Au=s,this.Ru=!1;const o=function(h){let f=h.message||"";return h.stack&&(f=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),f}(s);throw is("INTERNAL UNHANDLED ERROR: ",o),s}).then(s=>(this.Ru=!1,s))));return this.gu=t,t}enqueueAfterDelay(e,t,s){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const o=Tf.createAndSchedule(this,e,t,s,u=>this.Su(u));return this.du.push(o),o}pu(){this.Au&&Ae()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}class V_ extends _c{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new ly,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ly(e),this._firestoreClient=void 0,await e}}}function dP(r,e){const t=typeof r=="object"?r:Wd(),s=typeof r=="string"?r:"(default)",o=us(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=M0("firestore");u&&uP(o,...u)}return o}function fP(r){if(r._terminated)throw new ye(ee.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||pP(r),r._firestoreClient}function pP(r){var e,t,s;const o=r._freezeSettings(),u=function(f,g,v,E){return new dA(f,g,v,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,O_(E.experimentalLongPollingOptions),E.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new iP(r._authCredentials,r._appCheckCredentials,r._queue,u,r._componentsProvider&&function(f){const g=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(g),_online:g}}(r._componentsProvider))}/**
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
 */class za{constructor(e){this._byteString=e}static fromBase64String(e){try{return new za(rr.fromBase64String(e))}catch(t){throw new ye(ee.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new za(rr.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class b_{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ye(ee.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ct(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class F_{constructor(e){this._methodName=e}}/**
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
 */class U_{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ye(ee.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ye(ee.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}}/**
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
 */class j_{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,e._values)}}/**
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
 */const mP=/^__.*__$/;class gP{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new hs(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ja(e,this.data,t,this.fieldTransforms)}}function B_(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ae()}}class Rf{constructor(e,t,s,o,u,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this.Fu(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Rf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:s,Nu:!1});return o.Lu(e),o}Bu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:s,Nu:!1});return o.Fu(),o}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return nc(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(B_(this.Mu)&&mP.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class yP{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||mc(e)}$u(e,t,s,o=!1){return new Rf({Mu:e,methodName:t,Ku:s,path:Ct.emptyPath(),Nu:!1,Qu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function vP(r){const e=r._freezeSettings(),t=mc(r._databaseId);return new yP(r._databaseId,!!e.ignoreUndefinedProperties,t)}function _P(r,e,t,s,o,u={}){const h=r.$u(u.merge||u.mergeFields?2:0,e,t,o);W_("Data must be an object, but it was:",h,s);const f=$_(s,h);let g,v;if(u.merge)g=new bn(h.fieldMask),v=h.fieldTransforms;else if(u.mergeFields){const E=[];for(const S of u.mergeFields){const A=wP(e,S,t);if(!h.contains(A))throw new ye(ee.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);IP(E,A)||E.push(A)}g=new bn(E),v=h.fieldTransforms.filter(S=>g.covers(S.field))}else g=null,v=h.fieldTransforms;return new gP(new Vn(f),g,v)}function z_(r,e){if(H_(r=Ft(r)))return W_("Unsupported field value:",e,r),$_(r,e);if(r instanceof F_)return function(s,o){if(!B_(o.Mu))throw o.qu(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.qu(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(s,o){const u=[];let h=0;for(const f of s){let g=z_(f,o.ku(h));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),h++}return{arrayValue:{values:u}}}(r,e)}return function(s,o){if((s=Ft(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return VA(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=_t.fromDate(s);return{timestampValue:Od(o.serializer,u)}}if(s instanceof _t){const u=new _t(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Od(o.serializer,u)}}if(s instanceof U_)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof za)return{bytesValue:QA(o.serializer,s._byteString)};if(s instanceof Nr){const u=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw o.qu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:E_(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof j_)return function(h,f){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:h.toArray().map(g=>{if(typeof g!="number")throw f.qu("VectorValues must only contain numeric values.");return yf(f.serializer,g)})}}}}}}(s,o);throw o.qu(`Unsupported field value: ${If(s)}`)}(r,e)}function $_(r,e){const t={};return e_(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):So(r,(s,o)=>{const u=z_(o,e.Ou(s));u!=null&&(t[s]=u)}),{mapValue:{fields:t}}}function H_(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof _t||r instanceof U_||r instanceof za||r instanceof Nr||r instanceof F_||r instanceof j_)}function W_(r,e,t){if(!H_(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const s=If(t);throw s==="an object"?e.qu(r+" a custom object"):e.qu(r+" "+s)}}function wP(r,e,t){if((e=Ft(e))instanceof b_)return e._internalPath;if(typeof e=="string")return TP(r,e);throw nc("Field path arguments must be of type string or ",r,!1,void 0,t)}const EP=new RegExp("[~\\*/\\[\\]]");function TP(r,e,t){if(e.search(EP)>=0)throw nc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new b_(...e.split("."))._internalPath}catch{throw nc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function nc(r,e,t,s,o){const u=s&&!s.isEmpty(),h=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let g="";return(u||h)&&(g+=" (found",u&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new ye(ee.INVALID_ARGUMENT,f+r+g)}function IP(r,e){return r.some(t=>t.isEqual(e))}/**
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
 */function SP(r,e,t){let s;return s=r?r.toFirestore(e):e,s}function RP(r,e){const t=M_(r.firestore,V_),s=hP(r),o=SP(r.converter,e);return CP(t,[_P(vP(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,Pr.exists(!1))]).then(()=>s)}function CP(r,e){return function(s,o){const u=new Xi;return s.asyncQueue.enqueueAndForget(async()=>Jk(await aP(s),o,u)),u.promise}(fP(r),e)}(function(e,t=!0){(function(o){Io=o})(Eo),nr(new Fn("firestore",(s,{instanceIdentifier:o,options:u})=>{const h=s.getProvider("app").getImmediate(),f=new V_(new GC(s.getProvider("auth-internal")),new JC(s.getProvider("app-check-internal")),function(v,E){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new ye(ee.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gu(v.options.projectId,E)}(h,o),h);return u=Object.assign({useFetchStreams:t},u),f._setSettings(u),f},"PUBLIC").setMultipleInstances(!0)),_n(Og,"4.7.5",e),_n(Og,"4.7.5","esm2017")})();const AP={apiKey:"AIzaSyD2cfAps8ZDW-ZWrVerPTzJx960jP9PU7U",authDomain:"petitchef-d299c.firebaseapp.com",projectId:"petitchef-d299c",storageBucket:"petitchef-d299c.firebasestorage.app",messagingSenderId:"1015785273194",appId:"1:1015785273194:web:ddddbbdc677139df6e5713",measurementId:"G-EM6C30RDQ2"},Cf=jy(AP);typeof window<"u"&&RS(Cf);const Da=HC(Cf),kP=dP(Cf),PP="/Projeto-PetitChef/PetitChefLogo.png";function NP({searchValue:r,onSearchChange:e,isDarkTheme:t,onToggleTheme:s,onLogout:o}){const[u,h]=H.useState(!1),f=H.useRef(null);return H.useEffect(()=>{const g=v=>{f.current&&!f.current.contains(v.target)&&h(!1)};return document.addEventListener("mousedown",g),()=>document.removeEventListener("mousedown",g)},[]),$.jsx("header",{children:$.jsx("div",{className:"container-fluid",children:$.jsx("nav",{className:"navbar navbar-expand-lg navbar-light",children:$.jsxs("div",{className:"headerInner d-flex justify-content-between align-items-center",children:[$.jsxs("a",{className:"navbar-brand flex-shrink-0",href:"#",children:[$.jsx("img",{id:"logo-image",src:PP,alt:"logo-image",className:"logoImage img-fluid"}),$.jsx("span",{className:"logoText",children:"Petit Chef"})]}),$.jsxs("div",{className:"headerContent d-flex align-items-center justify-content-end",children:[$.jsxs("form",{className:"d-flex justify-content-end align-items-center",children:[$.jsxs("div",{className:"searchIcon",children:[r===""&&$.jsx("i",{className:"fa fa-search","aria-hidden":"true","aria-label":"Buscar"}),$.jsx("input",{className:"form-control",type:"search",placeholder:"Buscar","aria-label":"Buscar",value:r,onChange:e})]}),$.jsxs("label",{className:"switch flex-shrink-0 mb-0",children:[$.jsx("input",{type:"checkbox",checked:t,onChange:s}),$.jsx("span",{className:"slider round"})]})]}),$.jsxs("div",{className:"profile",ref:f,children:[$.jsx("img",{src:"https://yudiz.com/codepen/nft-store/user-pic1.svg",alt:"user-image",onClick:()=>h(!u),style:{cursor:"pointer"}}),$.jsxs("div",{className:`dropdownMenu ${u?"open":""}`,children:[$.jsx("a",{href:"#",children:"Perfil"}),$.jsx("a",{href:"#",children:"Configurações"}),$.jsx("a",{href:"#",onClick:o,children:"Sair"})]})]}),$.jsx("a",{href:"#",className:"notification",children:$.jsx("i",{className:"fa fa-bell","aria-hidden":"true","aria-label":"Notificações"})})]})]})})})})}function xP(){return $.jsx("div",{className:"menuLinks",children:$.jsxs("ul",{children:[$.jsx("li",{className:"navItem active",children:$.jsxs("a",{href:"#",className:"d-flex align-items-center nav-link",children:[$.jsx("i",{className:"fa fa-home","aria-hidden":"true"}),$.jsx("span",{children:"Home"})]})}),$.jsx("li",{className:"navItem",children:$.jsxs("a",{href:"#",className:"d-flex align-items-center nav-link",children:[$.jsx("i",{className:"fa fa-briefcase","aria-hidden":"true"}),$.jsx("span",{children:"Market"})]})}),$.jsx("li",{className:"navItem",children:$.jsxs("a",{href:"#",className:"d-flex align-items-center nav-link",children:[$.jsx("i",{className:"fa fa-heart-o","aria-hidden":"true"}),$.jsx("span",{children:"Favoritos"})]})}),$.jsx("li",{className:"navItem",children:$.jsxs("a",{href:"#",className:"d-flex align-items-center nav-link",children:[$.jsx("i",{className:"fa fa-square-o","aria-hidden":"true"}),$.jsx("span",{children:"Coleções"})]})}),$.jsx("li",{className:"navItem",children:$.jsxs("a",{href:"#",className:"d-flex align-items-center nav-link",children:[$.jsx("i",{className:"fa fa-fire","aria-hidden":"true"}),$.jsx("span",{children:"Em Alta"})]})}),$.jsx("li",{className:"navItem",children:$.jsxs("a",{href:"#",className:"d-flex align-items-center nav-link",children:[$.jsx("i",{className:"fa fa-star","aria-hidden":"true"}),$.jsx("span",{children:"Destaques"})]})}),$.jsx("li",{className:"navItem",children:$.jsxs("a",{href:"#",className:"d-flex align-items-center nav-link",children:[$.jsx("i",{className:"fa fa-shopping-cart","aria-hidden":"true"}),$.jsx("span",{children:"Comprados"})]})}),$.jsx("li",{className:"navItem",children:$.jsxs("a",{href:"#",className:"d-flex align-items-center nav-link",children:[$.jsx("i",{className:"fa fa-cog","aria-hidden":"true"}),$.jsx("span",{children:"Configurações"})]})})]})})}function DP(){const[r,e]=H.useState([]),[t,s]=H.useState(!0),[o,u]=H.useState(null),h=H.useRef(!1),f=30*60*1e3,g=async()=>{const S="https://api.unsplash.com/photos/random?query=food+dish&count=10&client_id=PS9FWequ00yxYBrmYYuLojsiKH9cb6Gy-TTfB9LM9H4";try{const A=await fetch(S);if(!A.ok)throw new Error("Limite de requisições atingido ou erro na API.");const F=await A.json();e(F),localStorage.setItem("unsplashImages",JSON.stringify(F)),localStorage.setItem("unsplashImagesTimestamp",Date.now())}catch(A){console.error("Erro ao buscar imagens do Unsplash:",A),u("Erro ao buscar imagens do Unsplash")}finally{s(!1)}};H.useEffect(()=>{if(h.current)return;const E=localStorage.getItem("unsplashImages"),S=localStorage.getItem("unsplashImagesTimestamp");if(E&&S&&Date.now()-parseInt(S,10)<f){e(JSON.parse(E)),s(!1),h.current=!0;return}g(),h.current=!0},[]);const v=["Experimente Agora","Aproveite o Sabor","Desfrute o Momento","Novidade no Cardápio","Sabor Inigualável","Feito com Amor","Delícia para o Paladar","Prato Exclusivo","Sabores que Encantam","Uma Explosão de Sabor","Harmonia de Ingredientes","Culinária de Primeira","Surpreenda-se","Para os Amantes da Boa Mesa","Uma Experiência Única","Tradição e Qualidade","Feito para Você","Sabor que Conquista","Descubra o Segredo","Um Toque Especial"];return t?$.jsx("p",{children:"Carregando imagens..."}):o?$.jsxs("p",{children:["Erro ao carregar imagens: ",o]}):r.length===0?$.jsx("p",{children:"Nenhuma imagem encontrada."}):$.jsxs("div",{className:"mainContent",children:[$.jsxs("div",{className:"heroContainer d-flex",children:[$.jsxs("div",{className:"heroLeft",children:[$.jsx("img",{src:r[0].urls.regular,alt:"Prato",className:"heroImage",loading:"lazy"}),$.jsxs("p",{className:"heroCredit",children:["Foto por"," ",$.jsx("a",{href:`${r[0].user.links.html}?utm_source=PetitChef&utm_medium=referral`,target:"_blank",rel:"noopener noreferrer",children:r[0].user.name})," ","no"," ",$.jsx("a",{href:"https://unsplash.com/?utm_source=PetitChef&utm_medium=referral",target:"_blank",rel:"noopener noreferrer",children:"Unsplash"})]})]}),$.jsxs("div",{className:"heroRight",children:[$.jsx("h2",{className:"heroTitle",children:"Venha conhecer nosso novo prato!"}),$.jsx("p",{className:"heroSubtitle",children:"Experimente um sabor como nunca antes."})]})]}),$.jsx("div",{className:"dishesContainer",children:r.slice(1,9).map((E,S)=>$.jsxs("div",{className:"dishCard dishTheme",children:[$.jsx("img",{src:E.urls.small,alt:"Prato",className:"dishImage",loading:"lazy"}),$.jsx("h3",{className:"dishTitle",children:v[S%v.length]}),$.jsxs("p",{className:"dishCredit",children:["Foto por"," ",$.jsx("a",{href:`${E.user.links.html}?utm_source=PetitChef&utm_medium=referral`,target:"_blank",rel:"noopener noreferrer",children:E.user.name})," ","no"," ",$.jsx("a",{href:"https://unsplash.com/?utm_source=PetitChef&utm_medium=referral",target:"_blank",rel:"noopener noreferrer",children:"Unsplash"})]})]},E.id))})]})}function OP(){return $.jsx("div",{className:"mainContent",children:$.jsx(DP,{})})}function LP(){const[r,e]=H.useState(!0),[t,s]=H.useState(""),[o,u]=H.useState(!0),h=Ud();H.useEffect(()=>{document.body.classList.toggle("darkTheme",r),document.body.classList.toggle("lightTheme",!r)},[r]),H.useEffect(()=>{const E=DR(Da,S=>{S||h("/login"),u(!1)});return()=>E()},[h]);const f=()=>{e(E=>!E)},g=E=>{s(E.target.value)},v=async()=>{try{await OR(Da),h("/login")}catch(E){console.error("Erro ao fazer logout:",E)}};return o?$.jsx("div",{className:"loading",children:$.jsx("div",{className:"spinner",children:$.jsx("svg",{width:"65px",height:"65px",viewBox:"0 0 66 66",xmlns:"http://www.w3.org/2000/svg",children:$.jsx("circle",{className:"path",fill:"none",strokeWidth:"6",strokeLinecap:"round",cx:"33",cy:"33",r:"30"})})})}):$.jsxs("div",{children:[$.jsx(NP,{searchValue:t,onSearchChange:g,isDarkTheme:r,onToggleTheme:f,onLogout:v}),$.jsx("div",{className:"contentWrapper",children:$.jsx("div",{className:"container-fluid",children:$.jsxs("div",{className:"contentInner d-flex",children:[$.jsx(xP,{}),$.jsx(OP,{})]})})})]})}const MP="Login-module__loginBody___WMHEU",VP="Login-module__forgotPass___CsjPq",bP="Login-module__cont___m1kN5",FP="Login-module__form___KUbD0",UP="Login-module__sub-cont___FQeQ3",jP="Login-module__s--signup___xOcS9",BP="Login-module__img___mVSWO",zP="Login-module__img__text___5oQ09",$P="Login-module__m--up___ThXTS",HP="Login-module__m--in___sY0-0",WP="Login-module__img__btn___a6AFq",qP="Login-module__submit___fv-Ne",KP="Login-module__sign-in___yJVCf",GP="Login-module__sign-up___861mK",QP="Login-module__checkmark___esGZg",YP="Login-module__checkmark__circle___cNe0y",XP="Login-module__checkmark__check___Lvluz",JP="Login-module__text-darker___SdtFv",Re={loginBody:MP,forgotPass:VP,cont:bP,form:FP,subCont:UP,sSignup:jP,img:BP,imgText:zP,mUp:$P,mIn:HP,img__btn:WP,submit:qP,signIn:KP,signUp:GP,checkmark:QP,checkmark__circle:YP,checkmark__check:XP,textDarker:JP};var dd={exports:{}},fd,uy;function ZP(){if(uy)return fd;uy=1;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return fd=r,fd}var pd,cy;function e1(){if(cy)return pd;cy=1;var r=ZP();function e(){}function t(){}return t.resetWarningCache=e,pd=function(){function s(h,f,g,v,E,S){if(S!==r){var A=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw A.name="Invariant Violation",A}}s.isRequired=s;function o(){return s}var u={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:o,element:s,elementType:s,instanceOf:o,node:s,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:t,resetWarningCache:e};return u.PropTypes=u,u},pd}var hy;function t1(){return hy||(hy=1,dd.exports=e1()()),dd.exports}var n1=t1();const io=Qw(n1),r1="InputField-module__inputField___mrMgT",i1="InputField-module__label___U4Bv8",s1="InputField-module__input___AdRyI",md={inputField:r1,label:i1,input:s1};function ao({label:r,type:e="text",value:t="",onChange:s,onKeyDown:o=()=>{},placeholder:u=""}){return $.jsx("div",{className:md.inputField,children:$.jsxs("label",{className:md.label,children:[$.jsx("span",{children:r}),$.jsx("input",{className:md.input,type:e,value:t,onChange:s,onKeyDown:o,placeholder:u})]})})}ao.propTypes={label:io.string.isRequired,type:io.string,value:io.string,onChange:io.func.isRequired,onKeyDown:io.func,placeholder:io.string};function o1(){const r=Ud(),[e,t]=H.useState(""),[s,o]=H.useState(""),[u,h]=H.useState(""),[f,g]=H.useState(""),[v,E]=H.useState(""),[S,A]=H.useState(!1),[F,U]=H.useState(""),W=(Y,le)=>{Y.key==="Enter"&&le()},B=async()=>{try{const Y=await kR(Da,f,v);A(!0),console.log("Usuário cadastrado:",Y.user);try{await RP(cP(kP,"Usuario"),{nome:u,email:f})}catch(le){console.error("Erro ao salvar dados no Firestore:",le.code,le.message)}setTimeout(()=>r("/"),2500)}catch{U("Erro ao cadastrar. Verifique os dados e tente novamente.")}},K=async()=>{try{const Y=await PR(Da,e,s);A(!0),console.log("Usuário logado:",Y.user),setTimeout(()=>r("/"),2500)}catch{U("E-mail ou senha incorretos. Tente novamente.")}},J=async()=>{try{await AR(Da,e),alert("E-mail de redefinição de senha enviado com sucesso!")}catch{alert("Erro ao enviar e-mail de redefinição. Verifique o e-mail informado.")}};return H.useEffect(()=>{const Y=document.querySelector(`.${Re.img__btn}`),le=document.querySelector(`.${Re.cont}`);if(!Y||!le)return;const we=()=>le.classList.toggle(Re.sSignup);return Y.addEventListener("click",we),()=>{Y.removeEventListener("click",we)}},[]),$.jsx("div",{className:Re.loginBody,children:$.jsxs("div",{className:Re.cont,children:[$.jsxs("div",{className:`${Re.form} ${Re.signIn}`,children:[$.jsx("h2",{className:Re.textDarker,children:"Bem-vindo de volta!"}),$.jsx(ao,{label:"Email",type:"email",value:e,onChange:Y=>t(Y.target.value),onKeyDown:Y=>W(Y,K)}),$.jsx(ao,{label:"Senha",type:"password",value:s,onChange:Y=>o(Y.target.value),onKeyDown:Y=>W(Y,K)}),$.jsx("p",{className:`${Re.forgotPass} ${Re.textDarker}`,onClick:J,children:"Esqueceu a senha?"}),F&&$.jsx("p",{className:Re.error,children:F}),S?$.jsxs("svg",{className:Re.checkmark,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52",children:[$.jsx("circle",{className:Re.checkmark__circle,cx:"26",cy:"26",r:"25",fill:"none"}),$.jsx("path",{className:Re.checkmark__check,fill:"none",d:"M14.1 27.2l7.1 7.2 16.7-16.8"})]}):$.jsx("button",{type:"button",className:Re.submit,onClick:K,children:"Entrar"})]}),$.jsxs("div",{className:Re.subCont,children:[$.jsxs("div",{className:Re.img,children:[$.jsxs("div",{className:`${Re.imgText} ${Re.mUp}`,children:[$.jsx("h2",{className:Re.textDarker,children:"Novo por aqui?"}),$.jsx("p",{className:Re.textDarker,children:"Cadastre-se e descubra um mundo de novas receitas!"})]}),$.jsxs("div",{className:`${Re.imgText} ${Re.mIn}`,children:[$.jsx("h2",{className:Re.textDarker,children:"Já é um de nós?"}),$.jsx("p",{className:Re.textDarker,children:"Se você já tem uma conta, é só fazer login!"})]}),$.jsxs("div",{className:Re.img__btn,children:[$.jsx("span",{className:Re.mUp,children:"Cadastrar"}),$.jsx("span",{className:Re.mIn,children:"Entrar"})]})]}),$.jsxs("div",{className:`${Re.form} ${Re.signUp}`,children:[$.jsx("h2",{className:Re.textDarker,children:"Prepare-se para saborear o melhor!"}),$.jsx(ao,{label:"Nome",type:"text",value:u,onChange:Y=>h(Y.target.value),onKeyDown:Y=>W(Y,B)}),$.jsx(ao,{label:"Email",type:"email",value:f,onChange:Y=>g(Y.target.value),onKeyDown:Y=>W(Y,B)}),$.jsx(ao,{label:"Senha",type:"password",value:v,onChange:Y=>E(Y.target.value),onKeyDown:Y=>W(Y,B)}),F&&$.jsx("p",{className:Re.error,children:F}),S?$.jsxs("svg",{className:Re.checkmark,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52",children:[$.jsx("circle",{className:Re.checkmark__circle,cx:"26",cy:"26",r:"25",fill:"none"}),$.jsx("path",{className:Re.checkmark__check,fill:"none",d:"M14.1 27.2l7.1 7.2 16.7-16.8"})]}):$.jsx("button",{type:"button",className:Re.submit,onClick:B,children:"Cadastrar"})]})]})]})})}const a1=H.createContext();function l1({children:r}){const[e,t]=H.useState(!0);H.useEffect(()=>{document.body.classList.toggle("darkTheme",e),document.body.classList.toggle("lightTheme",!e)},[e]);const s=()=>t(o=>!o);return $.jsx(a1.Provider,{value:{isDarkTheme:e,toggleTheme:s},children:r})}function u1(){return $.jsx(l1,{children:$.jsx(v0,{basename:"/Projeto-PetitChef",children:$.jsxs(GE,{children:[$.jsx(yd,{path:"/login",element:$.jsx(o1,{})}),$.jsx(yd,{path:"/",element:$.jsx(LP,{})})]})})})}iE.createRoot(document.getElementById("root")).render($.jsx(H.StrictMode,{children:$.jsx(u1,{})}));
