"use strict";(()=>{var Pv=Object.create;var Jf=Object.defineProperty;var Lv=Object.getOwnPropertyDescriptor;var t5=Object.getOwnPropertyNames;var e5=Object.getPrototypeOf,i5=Object.prototype.hasOwnProperty;var n5=(e,t,i)=>t in e?Jf(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var uo=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var o5=(e,t,i,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of t5(t))!i5.call(e,o)&&o!==i&&Jf(e,o,{get:()=>t[o],enumerable:!(n=Lv(t,o))||n.enumerable});return e};var me=(e,t,i)=>(i=e!=null?Pv(e5(e)):{},o5(t||!e||!e.__esModule?Jf(i,"default",{value:e,enumerable:!0}):i,e));var dt=(e,t,i)=>n5(e,typeof t!="symbol"?t+"":t,i);var np=uo(jt=>{"use strict";var Hf=Symbol.for("react.transitional.element"),s5=Symbol.for("react.portal"),r5=Symbol.for("react.fragment"),a5=Symbol.for("react.strict_mode"),u5=Symbol.for("react.profiler"),c5=Symbol.for("react.consumer"),l5=Symbol.for("react.context"),x5=Symbol.for("react.forward_ref"),h5=Symbol.for("react.suspense"),m5=Symbol.for("react.memo"),DM=Symbol.for("react.lazy"),f5=Symbol.for("react.activity"),XM=Symbol.iterator;function d5(e){return e===null||typeof e!="object"?null:(e=XM&&e[XM]||e["@@iterator"],typeof e=="function"?e:null)}var PM={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},LM=Object.assign,tp={};function ga(e,t,i){this.props=e,this.context=t,this.refs=tp,this.updater=i||PM}ga.prototype.isReactComponent={};ga.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ga.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ep(){}ep.prototype=ga.prototype;function Af(e,t,i){this.props=e,this.context=t,this.refs=tp,this.updater=i||PM}var Xf=Af.prototype=new ep;Xf.constructor=Af;LM(Xf,ga.prototype);Xf.isPureReactComponent=!0;var qM=Array.isArray;function zf(){}var Ze={H:null,A:null,T:null,S:null},ip=Object.prototype.hasOwnProperty;function qf(e,t,i){var n=i.ref;return{$$typeof:Hf,type:e,key:t,ref:n!==void 0?n:null,props:i}}function _5(e,t){return qf(e.type,t,e.props)}function Qf(e){return typeof e=="object"&&e!==null&&e.$$typeof===Hf}function g5(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(i){return t[i]})}var QM=/\/+/g;function bf(e,t){return typeof e=="object"&&e!==null&&e.key!=null?g5(""+e.key):t.toString(36)}function k5(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(zf,zf):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function _a(e,t,i,n,o){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(s){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case Hf:case s5:r=!0;break;case DM:return r=e._init,_a(r(e._payload),t,i,n,o)}}if(r)return o=o(e),r=n===""?"."+bf(e,0):n,qM(o)?(i="",r!=null&&(i=r.replace(QM,"$&/")+"/"),_a(o,t,i,"",function(c){return c})):o!=null&&(Qf(o)&&(o=_5(o,i+(o.key==null||e&&e.key===o.key?"":(""+o.key).replace(QM,"$&/")+"/")+r)),t.push(o)),1;r=0;var a=n===""?".":n+":";if(qM(e))for(var u=0;u<e.length;u++)n=e[u],s=a+bf(n,u),r+=_a(n,t,i,s,o);else if(u=d5(e),typeof u=="function")for(e=u.call(e),u=0;!(n=e.next()).done;)n=n.value,s=a+bf(n,u++),r+=_a(n,t,i,s,o);else if(s==="object"){if(typeof e.then=="function")return _a(k5(e),t,i,n,o);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function Al(e,t,i){if(e==null)return e;var n=[],o=0;return _a(e,n,"","",function(s){return t.call(i,s,o++)}),n}function M5(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i)},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var BM=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},p5={map:Al,forEach:function(e,t,i){Al(e,function(){t.apply(this,arguments)},i)},count:function(e){var t=0;return Al(e,function(){t++}),t},toArray:function(e){return Al(e,function(t){return t})||[]},only:function(e){if(!Qf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};jt.Activity=f5;jt.Children=p5;jt.Component=ga;jt.Fragment=r5;jt.Profiler=u5;jt.PureComponent=Af;jt.StrictMode=a5;jt.Suspense=h5;jt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ze;jt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Ze.H.useMemoCache(e)}};jt.cache=function(e){return function(){return e.apply(null,arguments)}};jt.cacheSignal=function(){return null};jt.cloneElement=function(e,t,i){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var n=LM({},e.props),o=e.key;if(t!=null)for(s in t.key!==void 0&&(o=""+t.key),t)!ip.call(t,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&t.ref===void 0||(n[s]=t[s]);var s=arguments.length-2;if(s===1)n.children=i;else if(1<s){for(var r=Array(s),a=0;a<s;a++)r[a]=arguments[a+2];n.children=r}return qf(e.type,o,n)};jt.createContext=function(e){return e={$$typeof:l5,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:c5,_context:e},e};jt.createElement=function(e,t,i){var n,o={},s=null;if(t!=null)for(n in t.key!==void 0&&(s=""+t.key),t)ip.call(t,n)&&n!=="key"&&n!=="__self"&&n!=="__source"&&(o[n]=t[n]);var r=arguments.length-2;if(r===1)o.children=i;else if(1<r){for(var a=Array(r),u=0;u<r;u++)a[u]=arguments[u+2];o.children=a}if(e&&e.defaultProps)for(n in r=e.defaultProps,r)o[n]===void 0&&(o[n]=r[n]);return qf(e,s,o)};jt.createRef=function(){return{current:null}};jt.forwardRef=function(e){return{$$typeof:x5,render:e}};jt.isValidElement=Qf;jt.lazy=function(e){return{$$typeof:DM,_payload:{_status:-1,_result:e},_init:M5}};jt.memo=function(e,t){return{$$typeof:m5,type:e,compare:t===void 0?null:t}};jt.startTransition=function(e){var t=Ze.T,i={};Ze.T=i;try{var n=e(),o=Ze.S;o!==null&&o(i,n),typeof n=="object"&&n!==null&&typeof n.then=="function"&&n.then(zf,BM)}catch(s){BM(s)}finally{t!==null&&i.types!==null&&(t.types=i.types),Ze.T=t}};jt.unstable_useCacheRefresh=function(){return Ze.H.useCacheRefresh()};jt.use=function(e){return Ze.H.use(e)};jt.useActionState=function(e,t,i){return Ze.H.useActionState(e,t,i)};jt.useCallback=function(e,t){return Ze.H.useCallback(e,t)};jt.useContext=function(e){return Ze.H.useContext(e)};jt.useDebugValue=function(){};jt.useDeferredValue=function(e,t){return Ze.H.useDeferredValue(e,t)};jt.useEffect=function(e,t){return Ze.H.useEffect(e,t)};jt.useEffectEvent=function(e){return Ze.H.useEffectEvent(e)};jt.useId=function(){return Ze.H.useId()};jt.useImperativeHandle=function(e,t,i){return Ze.H.useImperativeHandle(e,t,i)};jt.useInsertionEffect=function(e,t){return Ze.H.useInsertionEffect(e,t)};jt.useLayoutEffect=function(e,t){return Ze.H.useLayoutEffect(e,t)};jt.useMemo=function(e,t){return Ze.H.useMemo(e,t)};jt.useOptimistic=function(e,t){return Ze.H.useOptimistic(e,t)};jt.useReducer=function(e,t,i){return Ze.H.useReducer(e,t,i)};jt.useRef=function(e){return Ze.H.useRef(e)};jt.useState=function(e){return Ze.H.useState(e)};jt.useSyncExternalStore=function(e,t,i){return Ze.H.useSyncExternalStore(e,t,i)};jt.useTransition=function(){return Ze.H.useTransition()};jt.version="19.2.3"});var Rn=uo((pN,op)=>{"use strict";op.exports=np()});var fp=uo(Ee=>{"use strict";function Lf(e,t){var i=e.length;e.push(t);t:for(;0<i;){var n=i-1>>>1,o=e[n];if(0<Xl(o,t))e[n]=t,e[i]=o,i=n;else break t}}function co(e){return e.length===0?null:e[0]}function Ql(e){if(e.length===0)return null;var t=e[0],i=e.pop();if(i!==t){e[0]=i;t:for(var n=0,o=e.length,s=o>>>1;n<s;){var r=2*(n+1)-1,a=e[r],u=r+1,c=e[u];if(0>Xl(a,i))u<o&&0>Xl(c,a)?(e[n]=c,e[u]=i,n=u):(e[n]=a,e[r]=i,n=r);else if(u<o&&0>Xl(c,i))e[n]=c,e[u]=i,n=u;else break t}}return t}function Xl(e,t){var i=e.sortIndex-t.sortIndex;return i!==0?i:e.id-t.id}Ee.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(sp=performance,Ee.unstable_now=function(){return sp.now()}):(Bf=Date,rp=Bf.now(),Ee.unstable_now=function(){return Bf.now()-rp});var sp,Bf,rp,Fo=[],_s=[],O5=1,Kn=null,wi=3,td=!1,Qu=!1,Bu=!1,ed=!1,cp=typeof setTimeout=="function"?setTimeout:null,lp=typeof clearTimeout=="function"?clearTimeout:null,ap=typeof setImmediate<"u"?setImmediate:null;function ql(e){for(var t=co(_s);t!==null;){if(t.callback===null)Ql(_s);else if(t.startTime<=e)Ql(_s),t.sortIndex=t.expirationTime,Lf(Fo,t);else break;t=co(_s)}}function id(e){if(Bu=!1,ql(e),!Qu)if(co(Fo)!==null)Qu=!0,Ma||(Ma=!0,ka());else{var t=co(_s);t!==null&&nd(id,t.startTime-e)}}var Ma=!1,Du=-1,xp=5,hp=-1;function mp(){return ed?!0:!(Ee.unstable_now()-hp<xp)}function Df(){if(ed=!1,Ma){var e=Ee.unstable_now();hp=e;var t=!0;try{t:{Qu=!1,Bu&&(Bu=!1,lp(Du),Du=-1),td=!0;var i=wi;try{e:{for(ql(e),Kn=co(Fo);Kn!==null&&!(Kn.expirationTime>e&&mp());){var n=Kn.callback;if(typeof n=="function"){Kn.callback=null,wi=Kn.priorityLevel;var o=n(Kn.expirationTime<=e);if(e=Ee.unstable_now(),typeof o=="function"){Kn.callback=o,ql(e),t=!0;break e}Kn===co(Fo)&&Ql(Fo),ql(e)}else Ql(Fo);Kn=co(Fo)}if(Kn!==null)t=!0;else{var s=co(_s);s!==null&&nd(id,s.startTime-e),t=!1}}break t}finally{Kn=null,wi=i,td=!1}t=void 0}}finally{t?ka():Ma=!1}}}var ka;typeof ap=="function"?ka=function(){ap(Df)}:typeof MessageChannel<"u"?(Pf=new MessageChannel,up=Pf.port2,Pf.port1.onmessage=Df,ka=function(){up.postMessage(null)}):ka=function(){cp(Df,0)};var Pf,up;function nd(e,t){Du=cp(function(){e(Ee.unstable_now())},t)}Ee.unstable_IdlePriority=5;Ee.unstable_ImmediatePriority=1;Ee.unstable_LowPriority=4;Ee.unstable_NormalPriority=3;Ee.unstable_Profiling=null;Ee.unstable_UserBlockingPriority=2;Ee.unstable_cancelCallback=function(e){e.callback=null};Ee.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):xp=0<e?Math.floor(1e3/e):5};Ee.unstable_getCurrentPriorityLevel=function(){return wi};Ee.unstable_next=function(e){switch(wi){case 1:case 2:case 3:var t=3;break;default:t=wi}var i=wi;wi=t;try{return e()}finally{wi=i}};Ee.unstable_requestPaint=function(){ed=!0};Ee.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var i=wi;wi=e;try{return t()}finally{wi=i}};Ee.unstable_scheduleCallback=function(e,t,i){var n=Ee.unstable_now();switch(typeof i=="object"&&i!==null?(i=i.delay,i=typeof i=="number"&&0<i?n+i:n):i=n,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=i+o,e={id:O5++,callback:t,priorityLevel:e,startTime:i,expirationTime:o,sortIndex:-1},i>n?(e.sortIndex=i,Lf(_s,e),co(Fo)===null&&e===co(_s)&&(Bu?(lp(Du),Du=-1):Bu=!0,nd(id,i-n))):(e.sortIndex=o,Lf(Fo,e),Qu||td||(Qu=!0,Ma||(Ma=!0,ka()))),e};Ee.unstable_shouldYield=mp;Ee.unstable_wrapCallback=function(e){var t=wi;return function(){var i=wi;wi=t;try{return e.apply(this,arguments)}finally{wi=i}}}});var _p=uo((IN,dp)=>{"use strict";dp.exports=fp()});var kp=uo(Ti=>{"use strict";var I5=Rn();function gp(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function gs(){}var Ni={d:{f:gs,r:function(){throw Error(gp(522))},D:gs,C:gs,L:gs,m:gs,X:gs,S:gs,M:gs},p:0,findDOMNode:null},y5=Symbol.for("react.portal");function S5(e,t,i){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:y5,key:n==null?null:""+n,children:e,containerInfo:t,implementation:i}}var Pu=I5.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Bl(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Ti.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ni;Ti.createPortal=function(e,t){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(gp(299));return S5(e,t,null,i)};Ti.flushSync=function(e){var t=Pu.T,i=Ni.p;try{if(Pu.T=null,Ni.p=2,e)return e()}finally{Pu.T=t,Ni.p=i,Ni.d.f()}};Ti.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Ni.d.C(e,t))};Ti.prefetchDNS=function(e){typeof e=="string"&&Ni.d.D(e)};Ti.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var i=t.as,n=Bl(i,t.crossOrigin),o=typeof t.integrity=="string"?t.integrity:void 0,s=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;i==="style"?Ni.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:n,integrity:o,fetchPriority:s}):i==="script"&&Ni.d.X(e,{crossOrigin:n,integrity:o,fetchPriority:s,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Ti.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var i=Bl(t.as,t.crossOrigin);Ni.d.M(e,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&Ni.d.M(e)};Ti.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var i=t.as,n=Bl(i,t.crossOrigin);Ni.d.L(e,i,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Ti.preloadModule=function(e,t){if(typeof e=="string")if(t){var i=Bl(t.as,t.crossOrigin);Ni.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else Ni.d.m(e)};Ti.requestFormReset=function(e){Ni.d.r(e)};Ti.unstable_batchedUpdates=function(e,t){return e(t)};Ti.useFormState=function(e,t,i){return Pu.H.useFormState(e,t,i)};Ti.useFormStatus=function(){return Pu.H.useHostTransitionStatus()};Ti.version="19.2.3"});var Op=uo((SN,pp)=>{"use strict";function Mp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mp)}catch(e){console.error(e)}}Mp(),pp.exports=kp()});var FS=uo(Oh=>{"use strict";var si=_p(),XO=Rn(),Z5=Op();function X(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function qO(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Uc(e){var t=e,i=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(i=t.return),e=t.return;while(e)}return t.tag===3?i:null}function QO(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function BO(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ip(e){if(Uc(e)!==e)throw Error(X(188))}function w5(e){var t=e.alternate;if(!t){if(t=Uc(e),t===null)throw Error(X(188));return t!==e?null:e}for(var i=e,n=t;;){var o=i.return;if(o===null)break;var s=o.alternate;if(s===null){if(n=o.return,n!==null){i=n;continue}break}if(o.child===s.child){for(s=o.child;s;){if(s===i)return Ip(o),e;if(s===n)return Ip(o),t;s=s.sibling}throw Error(X(188))}if(i.return!==n.return)i=o,n=s;else{for(var r=!1,a=o.child;a;){if(a===i){r=!0,i=o,n=s;break}if(a===n){r=!0,n=o,i=s;break}a=a.sibling}if(!r){for(a=s.child;a;){if(a===i){r=!0,i=s,n=o;break}if(a===n){r=!0,n=s,i=o;break}a=a.sibling}if(!r)throw Error(X(189))}}if(i.alternate!==n)throw Error(X(190))}if(i.tag!==3)throw Error(X(188));return i.stateNode.current===i?e:t}function DO(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=DO(e),t!==null)return t;e=e.sibling}return null}var Re=Object.assign,v5=Symbol.for("react.element"),Dl=Symbol.for("react.transitional.element"),rc=Symbol.for("react.portal"),Za=Symbol.for("react.fragment"),PO=Symbol.for("react.strict_mode"),Wd=Symbol.for("react.profiler"),LO=Symbol.for("react.consumer"),Yo=Symbol.for("react.context"),G_=Symbol.for("react.forward_ref"),Ud=Symbol.for("react.suspense"),$d=Symbol.for("react.suspense_list"),F_=Symbol.for("react.memo"),ks=Symbol.for("react.lazy");Symbol.for("react.scope");var Cd=Symbol.for("react.activity");Symbol.for("react.legacy_hidden");Symbol.for("react.tracing_marker");var R5=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");var yp=Symbol.iterator;function Lu(e){return e===null||typeof e!="object"?null:(e=yp&&e[yp]||e["@@iterator"],typeof e=="function"?e:null)}var K5=Symbol.for("react.client.reference");function Yd(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===K5?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Za:return"Fragment";case Wd:return"Profiler";case PO:return"StrictMode";case Ud:return"Suspense";case $d:return"SuspenseList";case Cd:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case rc:return"Portal";case Yo:return e.displayName||"Context";case LO:return(e._context.displayName||"Context")+".Consumer";case G_:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F_:return t=e.displayName||null,t!==null?t:Yd(e.type)||"Memo";case ks:t=e._payload,e=e._init;try{return Yd(e(t))}catch{}}return null}var ac=Array.isArray,Rt=XO.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe=Z5.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,yr={pending:!1,data:null,method:null,action:null},Jd=[],wa=-1;function fo(e){return{current:e}}function mi(e){0>wa||(e.current=Jd[wa],Jd[wa]=null,wa--)}function ye(e,t){wa++,Jd[wa]=e.current,e.current=t}var mo=fo(null),Sc=fo(null),Ks=fo(null),Ex=fo(null);function Vx(e,t){switch(ye(Ks,t),ye(Sc,e),ye(mo,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?EO(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=EO(t),e=MS(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}mi(mo),ye(mo,e)}function za(){mi(mo),mi(Sc),mi(Ks)}function bd(e){e.memoizedState!==null&&ye(Ex,e);var t=mo.current,i=MS(t,e.type);t!==i&&(ye(Sc,e),ye(mo,i))}function Gx(e){Sc.current===e&&(mi(mo),mi(Sc)),Ex.current===e&&(mi(Ex),Nc._currentValue=yr)}var od,Sp;function Mr(e){if(od===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);od=t&&t[1]||"",Sp=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+od+e+Sp}var sd=!1;function rd(e,t){if(!e||sd)return"";sd=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var x=function(){throw Error()};if(Object.defineProperty(x.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(x,[])}catch(m){var h=m}Reflect.construct(e,[],x)}else{try{x.call()}catch(m){h=m}e.call(x.prototype)}}else{try{throw Error()}catch(m){h=m}(x=e())&&typeof x.catch=="function"&&x.catch(function(){})}}catch(m){if(m&&h&&typeof m.stack=="string")return[m.stack,h.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=n.DetermineComponentFrameRoot(),r=s[0],a=s[1];if(r&&a){var u=r.split(`
`),c=a.split(`
`);for(o=n=0;n<u.length&&!u[n].includes("DetermineComponentFrameRoot");)n++;for(;o<c.length&&!c[o].includes("DetermineComponentFrameRoot");)o++;if(n===u.length||o===c.length)for(n=u.length-1,o=c.length-1;1<=n&&0<=o&&u[n]!==c[o];)o--;for(;1<=n&&0<=o;n--,o--)if(u[n]!==c[o]){if(n!==1||o!==1)do if(n--,o--,0>o||u[n]!==c[o]){var l=`
`+u[n].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=n&&0<=o);break}}}finally{sd=!1,Error.prepareStackTrace=i}return(i=e?e.displayName||e.name:"")?Mr(i):""}function E5(e,t){switch(e.tag){case 26:case 27:case 5:return Mr(e.type);case 16:return Mr("Lazy");case 13:return e.child!==t&&t!==null?Mr("Suspense Fallback"):Mr("Suspense");case 19:return Mr("SuspenseList");case 0:case 15:return rd(e.type,!1);case 11:return rd(e.type.render,!1);case 1:return rd(e.type,!0);case 31:return Mr("Activity");default:return""}}function Zp(e){try{var t="",i=null;do t+=E5(e,i),i=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var zd=Object.prototype.hasOwnProperty,j_=si.unstable_scheduleCallback,ad=si.unstable_cancelCallback,V5=si.unstable_shouldYield,G5=si.unstable_requestPaint,hn=si.unstable_now,F5=si.unstable_getCurrentPriorityLevel,tI=si.unstable_ImmediatePriority,eI=si.unstable_UserBlockingPriority,Fx=si.unstable_NormalPriority,j5=si.unstable_LowPriority,iI=si.unstable_IdlePriority,N5=si.log,T5=si.unstable_setDisableYieldValue,$c=null,mn=null;function Ss(e){if(typeof N5=="function"&&T5(e),mn&&typeof mn.setStrictMode=="function")try{mn.setStrictMode($c,e)}catch{}}var fn=Math.clz32?Math.clz32:$5,W5=Math.log,U5=Math.LN2;function $5(e){return e>>>=0,e===0?32:31-(W5(e)/U5|0)|0}var Pl=256,Ll=262144,tx=4194304;function pr(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function sh(e,t,i){var n=e.pendingLanes;if(n===0)return 0;var o=0,s=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var a=n&134217727;return a!==0?(n=a&~s,n!==0?o=pr(n):(r&=a,r!==0?o=pr(r):i||(i=a&~e,i!==0&&(o=pr(i))))):(a=n&~s,a!==0?o=pr(a):r!==0?o=pr(r):i||(i=n&~e,i!==0&&(o=pr(i)))),o===0?0:t!==0&&t!==o&&!(t&s)&&(s=o&-o,i=t&-t,s>=i||s===32&&(i&4194048)!==0)?t:o}function Cc(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function C5(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nI(){var e=tx;return tx<<=1,!(tx&62914560)&&(tx=4194304),e}function ud(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function Yc(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Y5(e,t,i,n,o,s){var r=e.pendingLanes;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=i,e.entangledLanes&=i,e.errorRecoveryDisabledLanes&=i,e.shellSuspendCounter=0;var a=e.entanglements,u=e.expirationTimes,c=e.hiddenUpdates;for(i=r&~i;0<i;){var l=31-fn(i),x=1<<l;a[l]=0,u[l]=-1;var h=c[l];if(h!==null)for(c[l]=null,l=0;l<h.length;l++){var m=h[l];m!==null&&(m.lane&=-536870913)}i&=~x}n!==0&&oI(e,n,0),s!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=s&~(r&~t))}function oI(e,t,i){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-fn(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|i&261930}function sI(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var n=31-fn(i),o=1<<n;o&t|e[n]&t&&(e[n]|=t),i&=~o}}function rI(e,t){var i=t&-t;return i=i&42?1:N_(i),i&(e.suspendedLanes|t)?0:i}function N_(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function T_(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function aI(){var e=oe.p;return e!==0?e:(e=window.event,e===void 0?32:ES(e.type))}function wp(e,t){var i=oe.p;try{return oe.p=e,t()}finally{oe.p=i}}var Js=Math.random().toString(36).slice(2),Mi="__reactFiber$"+Js,Bi="__reactProps$"+Js,eu="__reactContainer$"+Js,Hd="__reactEvents$"+Js,J5="__reactListeners$"+Js,b5="__reactHandles$"+Js,vp="__reactResources$"+Js,Jc="__reactMarker$"+Js;function W_(e){delete e[Mi],delete e[Bi],delete e[Hd],delete e[J5],delete e[b5]}function va(e){var t=e[Mi];if(t)return t;for(var i=e.parentNode;i;){if(t=i[eu]||i[Mi]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=NO(e);e!==null;){if(i=e[Mi])return i;e=NO(e)}return t}e=i,i=e.parentNode}return null}function iu(e){if(e=e[Mi]||e[eu]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function uc(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(X(33))}function Wa(e){var t=e[vp];return t||(t=e[vp]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function hi(e){e[Jc]=!0}var uI=new Set,cI={};function Fr(e,t){Ha(e,t),Ha(e+"Capture",t)}function Ha(e,t){for(cI[e]=t,e=0;e<t.length;e++)uI.add(t[e])}var z5=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Rp={},Kp={};function H5(e){return zd.call(Kp,e)?!0:zd.call(Rp,e)?!1:z5.test(e)?Kp[e]=!0:(Rp[e]=!0,!1)}function dx(e,t,i){if(H5(t))if(i===null)e.removeAttribute(t);else{switch(typeof i){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+i)}}function ex(e,t,i){if(i===null)e.removeAttribute(t);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+i)}}function jo(e,t,i,n){if(n===null)e.removeAttribute(i);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttributeNS(t,i,""+n)}}function Vn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function lI(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function A5(e,t,i){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(r){i=""+r,s.call(this,r)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(r){i=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ad(e){if(!e._valueTracker){var t=lI(e)?"checked":"value";e._valueTracker=A5(e,t,""+e[t])}}function xI(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),n="";return e&&(n=lI(e)?e.checked?"true":"false":e.value),e=n,e!==i?(t.setValue(e),!0):!1}function jx(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var X5=/[\n"\\]/g;function jn(e){return e.replace(X5,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Xd(e,t,i,n,o,s,r,a){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Vn(t)):e.value!==""+Vn(t)&&(e.value=""+Vn(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?qd(e,r,Vn(t)):i!=null?qd(e,r,Vn(i)):n!=null&&e.removeAttribute("value"),o==null&&s!=null&&(e.defaultChecked=!!s),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"?e.name=""+Vn(a):e.removeAttribute("name")}function hI(e,t,i,n,o,s,r,a){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||i!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){Ad(e);return}i=i!=null?""+Vn(i):"",t=t!=null?""+Vn(t):i,a||t===e.value||(e.value=t),e.defaultValue=t}n=n??o,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=a?e.checked:!!n,e.defaultChecked=!!n,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Ad(e)}function qd(e,t,i){t==="number"&&jx(e.ownerDocument)===e||e.defaultValue===""+i||(e.defaultValue=""+i)}function Ua(e,t,i,n){if(e=e.options,t){t={};for(var o=0;o<i.length;o++)t["$"+i[o]]=!0;for(i=0;i<e.length;i++)o=t.hasOwnProperty("$"+e[i].value),e[i].selected!==o&&(e[i].selected=o),o&&n&&(e[i].defaultSelected=!0)}else{for(i=""+Vn(i),t=null,o=0;o<e.length;o++){if(e[o].value===i){e[o].selected=!0,n&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function mI(e,t,i){if(t!=null&&(t=""+Vn(t),t!==e.value&&(e.value=t),i==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=i!=null?""+Vn(i):""}function fI(e,t,i,n){if(t==null){if(n!=null){if(i!=null)throw Error(X(92));if(ac(n)){if(1<n.length)throw Error(X(93));n=n[0]}i=n}i==null&&(i=""),t=i}i=Vn(t),e.defaultValue=i,n=e.textContent,n===i&&n!==""&&n!==null&&(e.value=n),Ad(e)}function Aa(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var q5=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ep(e,t,i){var n=t.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,i):typeof i!="number"||i===0||q5.has(t)?t==="float"?e.cssFloat=i:e[t]=(""+i).trim():e[t]=i+"px"}function dI(e,t,i){if(t!=null&&typeof t!="object")throw Error(X(62));if(e=e.style,i!=null){for(var n in i)!i.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var o in t)n=t[o],t.hasOwnProperty(o)&&i[o]!==n&&Ep(e,o,n)}else for(var s in t)t.hasOwnProperty(s)&&Ep(e,s,t[s])}function U_(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Q5=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),B5=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _x(e){return B5.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Jo(){}var Qd=null;function $_(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ra=null,$a=null;function Vp(e){var t=iu(e);if(t&&(e=t.stateNode)){var i=e[Bi]||null;t:switch(e=t.stateNode,t.type){case"input":if(Xd(e,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+jn(""+t)+'"][type="radio"]'),t=0;t<i.length;t++){var n=i[t];if(n!==e&&n.form===e.form){var o=n[Bi]||null;if(!o)throw Error(X(90));Xd(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<i.length;t++)n=i[t],n.form===e.form&&xI(n)}break t;case"textarea":mI(e,i.value,i.defaultValue);break t;case"select":t=i.value,t!=null&&Ua(e,!!i.multiple,t,!1)}}}var cd=!1;function _I(e,t,i){if(cd)return e(t,i);cd=!0;try{var n=e(t);return n}finally{if(cd=!1,(Ra!==null||$a!==null)&&(gh(),Ra&&(t=Ra,e=$a,$a=Ra=null,Vp(t),e)))for(t=0;t<e.length;t++)Vp(e[t])}}function Zc(e,t){var i=e.stateNode;if(i===null)return null;var n=i[Bi]||null;if(n===null)return null;i=n[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break t;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(X(231,t,typeof i));return i}var Xo=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bd=!1;if(Xo)try{pa={},Object.defineProperty(pa,"passive",{get:function(){Bd=!0}}),window.addEventListener("test",pa,pa),window.removeEventListener("test",pa,pa)}catch{Bd=!1}var pa,Zs=null,C_=null,gx=null;function gI(){if(gx)return gx;var e,t=C_,i=t.length,n,o="value"in Zs?Zs.value:Zs.textContent,s=o.length;for(e=0;e<i&&t[e]===o[e];e++);var r=i-e;for(n=1;n<=r&&t[i-n]===o[s-n];n++);return gx=o.slice(e,1<n?1-n:void 0)}function kx(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ix(){return!0}function Gp(){return!1}function Di(e){function t(i,n,o,s,r){this._reactName=i,this._targetInst=o,this.type=n,this.nativeEvent=s,this.target=r,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(i=e[a],this[a]=i?i(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ix:Gp,this.isPropagationStopped=Gp,this}return Re(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=ix)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=ix)},persist:function(){},isPersistent:ix}),t}var jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rh=Di(jr),bc=Re({},jr,{view:0,detail:0}),D5=Di(bc),ld,xd,tc,ah=Re({},bc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Y_,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==tc&&(tc&&e.type==="mousemove"?(ld=e.screenX-tc.screenX,xd=e.screenY-tc.screenY):xd=ld=0,tc=e),ld)},movementY:function(e){return"movementY"in e?e.movementY:xd}}),Fp=Di(ah),P5=Re({},ah,{dataTransfer:0}),L5=Di(P5),tR=Re({},bc,{relatedTarget:0}),hd=Di(tR),eR=Re({},jr,{animationName:0,elapsedTime:0,pseudoElement:0}),iR=Di(eR),nR=Re({},jr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),oR=Di(nR),sR=Re({},jr,{data:0}),jp=Di(sR),rR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},aR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cR(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=uR[e])?!!t[e]:!1}function Y_(){return cR}var lR=Re({},bc,{key:function(e){if(e.key){var t=rR[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=kx(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?aR[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Y_,charCode:function(e){return e.type==="keypress"?kx(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?kx(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xR=Di(lR),hR=Re({},ah,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Np=Di(hR),mR=Re({},bc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Y_}),fR=Di(mR),dR=Re({},jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),_R=Di(dR),gR=Re({},ah,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kR=Di(gR),MR=Re({},jr,{newState:0,oldState:0}),pR=Di(MR),OR=[9,13,27,32],J_=Xo&&"CompositionEvent"in window,xc=null;Xo&&"documentMode"in document&&(xc=document.documentMode);var IR=Xo&&"TextEvent"in window&&!xc,kI=Xo&&(!J_||xc&&8<xc&&11>=xc),Tp=" ",Wp=!1;function MI(e,t){switch(e){case"keyup":return OR.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pI(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ka=!1;function yR(e,t){switch(e){case"compositionend":return pI(t);case"keypress":return t.which!==32?null:(Wp=!0,Tp);case"textInput":return e=t.data,e===Tp&&Wp?null:e;default:return null}}function SR(e,t){if(Ka)return e==="compositionend"||!J_&&MI(e,t)?(e=gI(),gx=C_=Zs=null,Ka=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return kI&&t.locale!=="ko"?null:t.data;default:return null}}var ZR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Up(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ZR[e.type]:t==="textarea"}function OI(e,t,i,n){Ra?$a?$a.push(n):$a=[n]:Ra=n,t=Px(t,"onChange"),0<t.length&&(i=new rh("onChange","change",null,i,n),e.push({event:i,listeners:t}))}var hc=null,wc=null;function wR(e){_S(e,0)}function uh(e){var t=uc(e);if(xI(t))return e}function $p(e,t){if(e==="change")return t}var II=!1;Xo&&(Xo?(ox="oninput"in document,ox||(md=document.createElement("div"),md.setAttribute("oninput","return;"),ox=typeof md.oninput=="function"),nx=ox):nx=!1,II=nx&&(!document.documentMode||9<document.documentMode));var nx,ox,md;function Cp(){hc&&(hc.detachEvent("onpropertychange",yI),wc=hc=null)}function yI(e){if(e.propertyName==="value"&&uh(wc)){var t=[];OI(t,wc,e,$_(e)),_I(wR,t)}}function vR(e,t,i){e==="focusin"?(Cp(),hc=t,wc=i,hc.attachEvent("onpropertychange",yI)):e==="focusout"&&Cp()}function RR(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return uh(wc)}function KR(e,t){if(e==="click")return uh(t)}function ER(e,t){if(e==="input"||e==="change")return uh(t)}function VR(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _n=typeof Object.is=="function"?Object.is:VR;function vc(e,t){if(_n(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),n=Object.keys(t);if(i.length!==n.length)return!1;for(n=0;n<i.length;n++){var o=i[n];if(!zd.call(t,o)||!_n(e[o],t[o]))return!1}return!0}function Yp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Jp(e,t){var i=Yp(e);e=0;for(var n;i;){if(i.nodeType===3){if(n=e+i.textContent.length,e<=t&&n>=t)return{node:i,offset:t-e};e=n}t:{for(;i;){if(i.nextSibling){i=i.nextSibling;break t}i=i.parentNode}i=void 0}i=Yp(i)}}function SI(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?SI(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ZI(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=jx(e.document);t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=jx(e.document)}return t}function b_(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var GR=Xo&&"documentMode"in document&&11>=document.documentMode,Ea=null,Dd=null,mc=null,Pd=!1;function bp(e,t,i){var n=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Pd||Ea==null||Ea!==jx(n)||(n=Ea,"selectionStart"in n&&b_(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),mc&&vc(mc,n)||(mc=n,n=Px(Dd,"onSelect"),0<n.length&&(t=new rh("onSelect","select",null,t,i),e.push({event:t,listeners:n}),t.target=Ea)))}function kr(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var Va={animationend:kr("Animation","AnimationEnd"),animationiteration:kr("Animation","AnimationIteration"),animationstart:kr("Animation","AnimationStart"),transitionrun:kr("Transition","TransitionRun"),transitionstart:kr("Transition","TransitionStart"),transitioncancel:kr("Transition","TransitionCancel"),transitionend:kr("Transition","TransitionEnd")},fd={},wI={};Xo&&(wI=document.createElement("div").style,"AnimationEvent"in window||(delete Va.animationend.animation,delete Va.animationiteration.animation,delete Va.animationstart.animation),"TransitionEvent"in window||delete Va.transitionend.transition);function Nr(e){if(fd[e])return fd[e];if(!Va[e])return e;var t=Va[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in wI)return fd[e]=t[i];return e}var vI=Nr("animationend"),RI=Nr("animationiteration"),KI=Nr("animationstart"),FR=Nr("transitionrun"),jR=Nr("transitionstart"),NR=Nr("transitioncancel"),EI=Nr("transitionend"),VI=new Map,Ld="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ld.push("scrollEnd");function Bn(e,t){VI.set(e,t),Fr(t,[e])}var Nx=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},En=[],Ga=0,z_=0;function ch(){for(var e=Ga,t=z_=Ga=0;t<e;){var i=En[t];En[t++]=null;var n=En[t];En[t++]=null;var o=En[t];En[t++]=null;var s=En[t];if(En[t++]=null,n!==null&&o!==null){var r=n.pending;r===null?o.next=o:(o.next=r.next,r.next=o),n.pending=o}s!==0&&GI(i,o,s)}}function lh(e,t,i,n){En[Ga++]=e,En[Ga++]=t,En[Ga++]=i,En[Ga++]=n,z_|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function H_(e,t,i,n){return lh(e,t,i,n),Tx(e)}function Tr(e,t){return lh(e,null,null,t),Tx(e)}function GI(e,t,i){e.lanes|=i;var n=e.alternate;n!==null&&(n.lanes|=i);for(var o=!1,s=e.return;s!==null;)s.childLanes|=i,n=s.alternate,n!==null&&(n.childLanes|=i),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(o=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,o&&t!==null&&(o=31-fn(i),e=s.hiddenUpdates,n=e[o],n===null?e[o]=[t]:n.push(t),t.lane=i|536870912),s):null}function Tx(e){if(50<Ic)throw Ic=0,p_=null,Error(X(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Fa={};function TR(e,t,i,n){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ln(e,t,i,n){return new TR(e,t,i,n)}function A_(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zo(e,t){var i=e.alternate;return i===null?(i=ln(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&65011712,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i.refCleanup=e.refCleanup,i}function FI(e,t){e.flags&=65011714;var i=e.alternate;return i===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=i.childLanes,e.lanes=i.lanes,e.child=i.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=i.memoizedProps,e.memoizedState=i.memoizedState,e.updateQueue=i.updateQueue,e.type=i.type,t=i.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Mx(e,t,i,n,o,s){var r=0;if(n=e,typeof e=="function")A_(e)&&(r=1);else if(typeof e=="string")r=$K(e,i,mo.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case Cd:return e=ln(31,i,t,o),e.elementType=Cd,e.lanes=s,e;case Za:return Sr(i.children,o,s,t);case PO:r=8,o|=24;break;case Wd:return e=ln(12,i,t,o|2),e.elementType=Wd,e.lanes=s,e;case Ud:return e=ln(13,i,t,o),e.elementType=Ud,e.lanes=s,e;case $d:return e=ln(19,i,t,o),e.elementType=$d,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Yo:r=10;break t;case LO:r=9;break t;case G_:r=11;break t;case F_:r=14;break t;case ks:r=16,n=null;break t}r=29,i=Error(X(130,e===null?"null":typeof e,"")),n=null}return t=ln(r,i,t,o),t.elementType=e,t.type=n,t.lanes=s,t}function Sr(e,t,i,n){return e=ln(7,e,n,t),e.lanes=i,e}function dd(e,t,i){return e=ln(6,e,null,t),e.lanes=i,e}function jI(e){var t=ln(18,null,null,0);return t.stateNode=e,t}function _d(e,t,i){return t=ln(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var zp=new WeakMap;function Nn(e,t){if(typeof e=="object"&&e!==null){var i=zp.get(e);return i!==void 0?i:(t={value:e,source:t,stack:Zp(t)},zp.set(e,t),t)}return{value:e,source:t,stack:Zp(t)}}var ja=[],Na=0,Wx=null,Rc=0,Gn=[],Fn=0,Us=null,lo=1,xo="";function $o(e,t){ja[Na++]=Rc,ja[Na++]=Wx,Wx=e,Rc=t}function NI(e,t,i){Gn[Fn++]=lo,Gn[Fn++]=xo,Gn[Fn++]=Us,Us=e;var n=lo;e=xo;var o=32-fn(n)-1;n&=~(1<<o),i+=1;var s=32-fn(t)+o;if(30<s){var r=o-o%5;s=(n&(1<<r)-1).toString(32),n>>=r,o-=r,lo=1<<32-fn(t)+o|i<<o|n,xo=s+e}else lo=1<<s|i<<o|n,xo=e}function X_(e){e.return!==null&&($o(e,1),NI(e,1,0))}function q_(e){for(;e===Wx;)Wx=ja[--Na],ja[Na]=null,Rc=ja[--Na],ja[Na]=null;for(;e===Us;)Us=Gn[--Fn],Gn[Fn]=null,xo=Gn[--Fn],Gn[Fn]=null,lo=Gn[--Fn],Gn[Fn]=null}function TI(e,t){Gn[Fn++]=lo,Gn[Fn++]=xo,Gn[Fn++]=Us,lo=t.id,xo=t.overflow,Us=e}var pi=null,ve=null,Xt=!1,Es=null,Tn=!1,t_=Error(X(519));function $s(e){var t=Error(X(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Kc(Nn(t,e)),t_}function Hp(e){var t=e.stateNode,i=e.type,n=e.memoizedProps;switch(t[Mi]=e,t[Bi]=n,i){case"dialog":zt("cancel",t),zt("close",t);break;case"iframe":case"object":case"embed":zt("load",t);break;case"video":case"audio":for(i=0;i<Fc.length;i++)zt(Fc[i],t);break;case"source":zt("error",t);break;case"img":case"image":case"link":zt("error",t),zt("load",t);break;case"details":zt("toggle",t);break;case"input":zt("invalid",t),hI(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":zt("invalid",t);break;case"textarea":zt("invalid",t),fI(t,n.value,n.defaultValue,n.children)}i=n.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||t.textContent===""+i||n.suppressHydrationWarning===!0||kS(t.textContent,i)?(n.popover!=null&&(zt("beforetoggle",t),zt("toggle",t)),n.onScroll!=null&&zt("scroll",t),n.onScrollEnd!=null&&zt("scrollend",t),n.onClick!=null&&(t.onclick=Jo),t=!0):t=!1,t||$s(e,!0)}function Ap(e){for(pi=e.return;pi;)switch(pi.tag){case 5:case 31:case 13:Tn=!1;return;case 27:case 3:Tn=!0;return;default:pi=pi.return}}function Oa(e){if(e!==pi)return!1;if(!Xt)return Ap(e),Xt=!0,!1;var t=e.tag,i;if((i=t!==3&&t!==27)&&((i=t===5)&&(i=e.type,i=!(i!=="form"&&i!=="button")||Z_(e.type,e.memoizedProps)),i=!i),i&&ve&&$s(e),Ap(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(X(317));ve=jO(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(X(317));ve=jO(e)}else t===27?(t=ve,bs(e.type)?(e=K_,K_=null,ve=e):ve=t):ve=pi?Un(e.stateNode.nextSibling):null;return!0}function Rr(){ve=pi=null,Xt=!1}function gd(){var e=Es;return e!==null&&(qi===null?qi=e:qi.push.apply(qi,e),Es=null),e}function Kc(e){Es===null?Es=[e]:Es.push(e)}var e_=fo(null),Wr=null,bo=null;function ps(e,t,i){ye(e_,t._currentValue),t._currentValue=i}function Ho(e){e._currentValue=e_.current,mi(e_)}function i_(e,t,i){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===i)break;e=e.return}}function n_(e,t,i,n){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var s=o.dependencies;if(s!==null){var r=o.child;s=s.firstContext;t:for(;s!==null;){var a=s;s=o;for(var u=0;u<t.length;u++)if(a.context===t[u]){s.lanes|=i,a=s.alternate,a!==null&&(a.lanes|=i),i_(s.return,i,e),n||(r=null);break t}s=a.next}}else if(o.tag===18){if(r=o.return,r===null)throw Error(X(341));r.lanes|=i,s=r.alternate,s!==null&&(s.lanes|=i),i_(r,i,e),r=null}else r=o.child;if(r!==null)r.return=o;else for(r=o;r!==null;){if(r===e){r=null;break}if(o=r.sibling,o!==null){o.return=r.return,r=o;break}r=r.return}o=r}}function nu(e,t,i,n){e=null;for(var o=t,s=!1;o!==null;){if(!s){if(o.flags&524288)s=!0;else if(o.flags&262144)break}if(o.tag===10){var r=o.alternate;if(r===null)throw Error(X(387));if(r=r.memoizedProps,r!==null){var a=o.type;_n(o.pendingProps.value,r.value)||(e!==null?e.push(a):e=[a])}}else if(o===Ex.current){if(r=o.alternate,r===null)throw Error(X(387));r.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(Nc):e=[Nc])}o=o.return}e!==null&&n_(t,e,i,n),t.flags|=262144}function Ux(e){for(e=e.firstContext;e!==null;){if(!_n(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Kr(e){Wr=e,bo=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Oi(e){return WI(Wr,e)}function sx(e,t){return Wr===null&&Kr(e),WI(e,t)}function WI(e,t){var i=t._currentValue;if(t={context:t,memoizedValue:i,next:null},bo===null){if(e===null)throw Error(X(308));bo=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else bo=bo.next=t;return i}var WR=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(i,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(i){return i()})}},UR=si.unstable_scheduleCallback,$R=si.unstable_NormalPriority,Pe={$$typeof:Yo,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Q_(){return{controller:new WR,data:new Map,refCount:0}}function zc(e){e.refCount--,e.refCount===0&&UR($R,function(){e.controller.abort()})}var fc=null,o_=0,Xa=0,Ca=null;function CR(e,t){if(fc===null){var i=fc=[];o_=0,Xa=pg(),Ca={status:"pending",value:void 0,then:function(n){i.push(n)}}}return o_++,t.then(Xp,Xp),t}function Xp(){if(--o_===0&&fc!==null){Ca!==null&&(Ca.status="fulfilled");var e=fc;fc=null,Xa=0,Ca=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function YR(e,t){var i=[],n={status:"pending",value:null,reason:null,then:function(o){i.push(o)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var o=0;o<i.length;o++)(0,i[o])(t)},function(o){for(n.status="rejected",n.reason=o,o=0;o<i.length;o++)(0,i[o])(void 0)}),n}var qp=Rt.S;Rt.S=function(e,t){Dy=hn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&CR(e,t),qp!==null&&qp(e,t)};var Zr=fo(null);function B_(){var e=Zr.current;return e!==null?e:ke.pooledCache}function px(e,t){t===null?ye(Zr,Zr.current):ye(Zr,t.pool)}function UI(){var e=B_();return e===null?null:{parent:Pe._currentValue,pool:e}}var ou=Error(X(460)),D_=Error(X(474)),xh=Error(X(542)),$x={then:function(){}};function Qp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function $I(e,t,i){switch(i=e[i],i===void 0?e.push(t):i!==t&&(t.then(Jo,Jo),t=i),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Dp(e),e;default:if(typeof t.status=="string")t.then(Jo,Jo);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(X(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var o=t;o.status="fulfilled",o.value=n}},function(n){if(t.status==="pending"){var o=t;o.status="rejected",o.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Dp(e),e}throw wr=t,ou}}function Or(e){try{var t=e._init;return t(e._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(wr=i,ou):i}}var wr=null;function Bp(){if(wr===null)throw Error(X(459));var e=wr;return wr=null,e}function Dp(e){if(e===ou||e===xh)throw Error(X(483))}var Ya=null,Ec=0;function rx(e){var t=Ec;return Ec+=1,Ya===null&&(Ya=[]),$I(Ya,e,t)}function ec(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ax(e,t){throw t.$$typeof===v5?Error(X(525)):(e=Object.prototype.toString.call(t),Error(X(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function CI(e){function t(f,k){if(e){var M=f.deletions;M===null?(f.deletions=[k],f.flags|=16):M.push(k)}}function i(f,k){if(!e)return null;for(;k!==null;)t(f,k),k=k.sibling;return null}function n(f){for(var k=new Map;f!==null;)f.key!==null?k.set(f.key,f):k.set(f.index,f),f=f.sibling;return k}function o(f,k){return f=zo(f,k),f.index=0,f.sibling=null,f}function s(f,k,M){return f.index=M,e?(M=f.alternate,M!==null?(M=M.index,M<k?(f.flags|=67108866,k):M):(f.flags|=67108866,k)):(f.flags|=1048576,k)}function r(f){return e&&f.alternate===null&&(f.flags|=67108866),f}function a(f,k,M,p){return k===null||k.tag!==6?(k=dd(M,f.mode,p),k.return=f,k):(k=o(k,M),k.return=f,k)}function u(f,k,M,p){var I=M.type;return I===Za?l(f,k,M.props.children,p,M.key):k!==null&&(k.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===ks&&Or(I)===k.type)?(k=o(k,M.props),ec(k,M),k.return=f,k):(k=Mx(M.type,M.key,M.props,null,f.mode,p),ec(k,M),k.return=f,k)}function c(f,k,M,p){return k===null||k.tag!==4||k.stateNode.containerInfo!==M.containerInfo||k.stateNode.implementation!==M.implementation?(k=_d(M,f.mode,p),k.return=f,k):(k=o(k,M.children||[]),k.return=f,k)}function l(f,k,M,p,I){return k===null||k.tag!==7?(k=Sr(M,f.mode,p,I),k.return=f,k):(k=o(k,M),k.return=f,k)}function x(f,k,M){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=dd(""+k,f.mode,M),k.return=f,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Dl:return M=Mx(k.type,k.key,k.props,null,f.mode,M),ec(M,k),M.return=f,M;case rc:return k=_d(k,f.mode,M),k.return=f,k;case ks:return k=Or(k),x(f,k,M)}if(ac(k)||Lu(k))return k=Sr(k,f.mode,M,null),k.return=f,k;if(typeof k.then=="function")return x(f,rx(k),M);if(k.$$typeof===Yo)return x(f,sx(f,k),M);ax(f,k)}return null}function h(f,k,M,p){var I=k!==null?k.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return I!==null?null:a(f,k,""+M,p);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Dl:return M.key===I?u(f,k,M,p):null;case rc:return M.key===I?c(f,k,M,p):null;case ks:return M=Or(M),h(f,k,M,p)}if(ac(M)||Lu(M))return I!==null?null:l(f,k,M,p,null);if(typeof M.then=="function")return h(f,k,rx(M),p);if(M.$$typeof===Yo)return h(f,k,sx(f,M),p);ax(f,M)}return null}function m(f,k,M,p,I){if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return f=f.get(M)||null,a(k,f,""+p,I);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Dl:return f=f.get(p.key===null?M:p.key)||null,u(k,f,p,I);case rc:return f=f.get(p.key===null?M:p.key)||null,c(k,f,p,I);case ks:return p=Or(p),m(f,k,M,p,I)}if(ac(p)||Lu(p))return f=f.get(M)||null,l(k,f,p,I,null);if(typeof p.then=="function")return m(f,k,M,rx(p),I);if(p.$$typeof===Yo)return m(f,k,M,sx(k,p),I);ax(k,p)}return null}function g(f,k,M,p){for(var I=null,w=null,Z=k,R=k=0,O=null;Z!==null&&R<M.length;R++){Z.index>R?(O=Z,Z=null):O=Z.sibling;var S=h(f,Z,M[R],p);if(S===null){Z===null&&(Z=O);break}e&&Z&&S.alternate===null&&t(f,Z),k=s(S,k,R),w===null?I=S:w.sibling=S,w=S,Z=O}if(R===M.length)return i(f,Z),Xt&&$o(f,R),I;if(Z===null){for(;R<M.length;R++)Z=x(f,M[R],p),Z!==null&&(k=s(Z,k,R),w===null?I=Z:w.sibling=Z,w=Z);return Xt&&$o(f,R),I}for(Z=n(Z);R<M.length;R++)O=m(Z,f,R,M[R],p),O!==null&&(e&&O.alternate!==null&&Z.delete(O.key===null?R:O.key),k=s(O,k,R),w===null?I=O:w.sibling=O,w=O);return e&&Z.forEach(function(E){return t(f,E)}),Xt&&$o(f,R),I}function _(f,k,M,p){if(M==null)throw Error(X(151));for(var I=null,w=null,Z=k,R=k=0,O=null,S=M.next();Z!==null&&!S.done;R++,S=M.next()){Z.index>R?(O=Z,Z=null):O=Z.sibling;var E=h(f,Z,S.value,p);if(E===null){Z===null&&(Z=O);break}e&&Z&&E.alternate===null&&t(f,Z),k=s(E,k,R),w===null?I=E:w.sibling=E,w=E,Z=O}if(S.done)return i(f,Z),Xt&&$o(f,R),I;if(Z===null){for(;!S.done;R++,S=M.next())S=x(f,S.value,p),S!==null&&(k=s(S,k,R),w===null?I=S:w.sibling=S,w=S);return Xt&&$o(f,R),I}for(Z=n(Z);!S.done;R++,S=M.next())S=m(Z,f,R,S.value,p),S!==null&&(e&&S.alternate!==null&&Z.delete(S.key===null?R:S.key),k=s(S,k,R),w===null?I=S:w.sibling=S,w=S);return e&&Z.forEach(function(N){return t(f,N)}),Xt&&$o(f,R),I}function d(f,k,M,p){if(typeof M=="object"&&M!==null&&M.type===Za&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case Dl:t:{for(var I=M.key;k!==null;){if(k.key===I){if(I=M.type,I===Za){if(k.tag===7){i(f,k.sibling),p=o(k,M.props.children),p.return=f,f=p;break t}}else if(k.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===ks&&Or(I)===k.type){i(f,k.sibling),p=o(k,M.props),ec(p,M),p.return=f,f=p;break t}i(f,k);break}else t(f,k);k=k.sibling}M.type===Za?(p=Sr(M.props.children,f.mode,p,M.key),p.return=f,f=p):(p=Mx(M.type,M.key,M.props,null,f.mode,p),ec(p,M),p.return=f,f=p)}return r(f);case rc:t:{for(I=M.key;k!==null;){if(k.key===I)if(k.tag===4&&k.stateNode.containerInfo===M.containerInfo&&k.stateNode.implementation===M.implementation){i(f,k.sibling),p=o(k,M.children||[]),p.return=f,f=p;break t}else{i(f,k);break}else t(f,k);k=k.sibling}p=_d(M,f.mode,p),p.return=f,f=p}return r(f);case ks:return M=Or(M),d(f,k,M,p)}if(ac(M))return g(f,k,M,p);if(Lu(M)){if(I=Lu(M),typeof I!="function")throw Error(X(150));return M=I.call(M),_(f,k,M,p)}if(typeof M.then=="function")return d(f,k,rx(M),p);if(M.$$typeof===Yo)return d(f,k,sx(f,M),p);ax(f,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,k!==null&&k.tag===6?(i(f,k.sibling),p=o(k,M),p.return=f,f=p):(i(f,k),p=dd(M,f.mode,p),p.return=f,f=p),r(f)):i(f,k)}return function(f,k,M,p){try{Ec=0;var I=d(f,k,M,p);return Ya=null,I}catch(Z){if(Z===ou||Z===xh)throw Z;var w=ln(29,Z,null,f.mode);return w.lanes=p,w.return=f,w}finally{}}}var Er=CI(!0),YI=CI(!1),Ms=!1;function P_(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function s_(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Vs(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Gs(e,t,i){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,ne&2){var o=n.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),n.pending=t,t=Tx(e),GI(e,null,i),t}return lh(e,n,t,i),Tx(e)}function dc(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,i|=n,t.lanes=i,sI(e,i)}}function kd(e,t){var i=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,i===n)){var o=null,s=null;if(i=i.firstBaseUpdate,i!==null){do{var r={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};s===null?o=s=r:s=s.next=r,i=i.next}while(i!==null);s===null?o=s=t:s=s.next=t}else o=s=t;i={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:s,shared:n.shared,callbacks:n.callbacks},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}var r_=!1;function _c(){if(r_){var e=Ca;if(e!==null)throw e}}function gc(e,t,i,n){r_=!1;var o=e.updateQueue;Ms=!1;var s=o.firstBaseUpdate,r=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var u=a,c=u.next;u.next=null,r===null?s=c:r.next=c,r=u;var l=e.alternate;l!==null&&(l=l.updateQueue,a=l.lastBaseUpdate,a!==r&&(a===null?l.firstBaseUpdate=c:a.next=c,l.lastBaseUpdate=u))}if(s!==null){var x=o.baseState;r=0,l=c=u=null,a=s;do{var h=a.lane&-536870913,m=h!==a.lane;if(m?(At&h)===h:(n&h)===h){h!==0&&h===Xa&&(r_=!0),l!==null&&(l=l.next={lane:0,tag:a.tag,payload:a.payload,callback:null,next:null});t:{var g=e,_=a;h=t;var d=i;switch(_.tag){case 1:if(g=_.payload,typeof g=="function"){x=g.call(d,x,h);break t}x=g;break t;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,h=typeof g=="function"?g.call(d,x,h):g,h==null)break t;x=Re({},x,h);break t;case 2:Ms=!0}}h=a.callback,h!==null&&(e.flags|=64,m&&(e.flags|=8192),m=o.callbacks,m===null?o.callbacks=[h]:m.push(h))}else m={lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},l===null?(c=l=m,u=x):l=l.next=m,r|=h;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;m=a,a=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);l===null&&(u=x),o.baseState=u,o.firstBaseUpdate=c,o.lastBaseUpdate=l,s===null&&(o.shared.lanes=0),Ys|=r,e.lanes=r,e.memoizedState=x}}function JI(e,t){if(typeof e!="function")throw Error(X(191,e));e.call(t)}function bI(e,t){var i=e.callbacks;if(i!==null)for(e.callbacks=null,e=0;e<i.length;e++)JI(i[e],t)}var qa=fo(null),Cx=fo(0);function Pp(e,t){e=Do,ye(Cx,e),ye(qa,t),Do=e|t.baseLanes}function a_(){ye(Cx,Do),ye(qa,qa.current)}function L_(){Do=Cx.current,mi(qa),mi(Cx)}var gn=fo(null),Wn=null;function Os(e){var t=e.alternate;ye(He,He.current&1),ye(gn,e),Wn===null&&(t===null||qa.current!==null||t.memoizedState!==null)&&(Wn=e)}function u_(e){ye(He,He.current),ye(gn,e),Wn===null&&(Wn=e)}function zI(e){e.tag===22?(ye(He,He.current),ye(gn,e),Wn===null&&(Wn=e)):Is(e)}function Is(){ye(He,He.current),ye(gn,gn.current)}function cn(e){mi(gn),Wn===e&&(Wn=null),mi(He)}var He=fo(0);function Yx(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||v_(i)||R_(i)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var qo=0,Tt=null,de=null,Be=null,Jx=!1,Ja=!1,Vr=!1,bx=0,Vc=0,ba=null,JR=0;function $e(){throw Error(X(321))}function tg(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!_n(e[i],t[i]))return!1;return!0}function eg(e,t,i,n,o,s){return qo=s,Tt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Rt.H=e===null||e.memoizedState===null?Oy:hg,Vr=!1,s=i(n,o),Vr=!1,Ja&&(s=AI(t,i,n,o)),HI(e),s}function HI(e){Rt.H=Gc;var t=de!==null&&de.next!==null;if(qo=0,Be=de=Tt=null,Jx=!1,Vc=0,ba=null,t)throw Error(X(300));e===null||Le||(e=e.dependencies,e!==null&&Ux(e)&&(Le=!0))}function AI(e,t,i,n){Tt=e;var o=0;do{if(Ja&&(ba=null),Vc=0,Ja=!1,25<=o)throw Error(X(301));if(o+=1,Be=de=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}Rt.H=Iy,s=t(i,n)}while(Ja);return s}function bR(){var e=Rt.H,t=e.useState()[0];return t=typeof t.then=="function"?Hc(t):t,e=e.useState()[0],(de!==null?de.memoizedState:null)!==e&&(Tt.flags|=1024),t}function ig(){var e=bx!==0;return bx=0,e}function ng(e,t,i){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i}function og(e){if(Jx){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Jx=!1}qo=0,Be=de=Tt=null,Ja=!1,Vc=bx=0,ba=null}function Wi(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Tt.memoizedState=Be=e:Be=Be.next=e,Be}function Ae(){if(de===null){var e=Tt.alternate;e=e!==null?e.memoizedState:null}else e=de.next;var t=Be===null?Tt.memoizedState:Be.next;if(t!==null)Be=t,de=e;else{if(e===null)throw Tt.alternate===null?Error(X(467)):Error(X(310));de=e,e={memoizedState:de.memoizedState,baseState:de.baseState,baseQueue:de.baseQueue,queue:de.queue,next:null},Be===null?Tt.memoizedState=Be=e:Be=Be.next=e}return Be}function hh(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Hc(e){var t=Vc;return Vc+=1,ba===null&&(ba=[]),e=$I(ba,e,t),t=Tt,(Be===null?t.memoizedState:Be.next)===null&&(t=t.alternate,Rt.H=t===null||t.memoizedState===null?Oy:hg),e}function mh(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Hc(e);if(e.$$typeof===Yo)return Oi(e)}throw Error(X(438,String(e)))}function sg(e){var t=null,i=Tt.updateQueue;if(i!==null&&(t=i.memoCache),t==null){var n=Tt.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(o){return o.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),i===null&&(i=hh(),Tt.updateQueue=i),i.memoCache=t,i=t.data[t.index],i===void 0)for(i=t.data[t.index]=Array(e),n=0;n<e;n++)i[n]=R5;return t.index++,i}function Qo(e,t){return typeof t=="function"?t(e):t}function Ox(e){var t=Ae();return rg(t,de,e)}function rg(e,t,i){var n=e.queue;if(n===null)throw Error(X(311));n.lastRenderedReducer=i;var o=e.baseQueue,s=n.pending;if(s!==null){if(o!==null){var r=o.next;o.next=s.next,s.next=r}t.baseQueue=o=s,n.pending=null}if(s=e.baseState,o===null)e.memoizedState=s;else{t=o.next;var a=r=null,u=null,c=t,l=!1;do{var x=c.lane&-536870913;if(x!==c.lane?(At&x)===x:(qo&x)===x){var h=c.revertLane;if(h===0)u!==null&&(u=u.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),x===Xa&&(l=!0);else if((qo&h)===h){c=c.next,h===Xa&&(l=!0);continue}else x={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},u===null?(a=u=x,r=s):u=u.next=x,Tt.lanes|=h,Ys|=h;x=c.action,Vr&&i(s,x),s=c.hasEagerState?c.eagerState:i(s,x)}else h={lane:x,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},u===null?(a=u=h,r=s):u=u.next=h,Tt.lanes|=x,Ys|=x;c=c.next}while(c!==null&&c!==t);if(u===null?r=s:u.next=a,!_n(s,e.memoizedState)&&(Le=!0,l&&(i=Ca,i!==null)))throw i;e.memoizedState=s,e.baseState=r,e.baseQueue=u,n.lastRenderedState=s}return o===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Md(e){var t=Ae(),i=t.queue;if(i===null)throw Error(X(311));i.lastRenderedReducer=e;var n=i.dispatch,o=i.pending,s=t.memoizedState;if(o!==null){i.pending=null;var r=o=o.next;do s=e(s,r.action),r=r.next;while(r!==o);_n(s,t.memoizedState)||(Le=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),i.lastRenderedState=s}return[s,n]}function XI(e,t,i){var n=Tt,o=Ae(),s=Xt;if(s){if(i===void 0)throw Error(X(407));i=i()}else i=t();var r=!_n((de||o).memoizedState,i);if(r&&(o.memoizedState=i,Le=!0),o=o.queue,ag(BI.bind(null,n,o,e),[e]),o.getSnapshot!==t||r||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,Qa(9,{destroy:void 0},QI.bind(null,n,o,i,t),null),ke===null)throw Error(X(349));s||qo&127||qI(n,t,i)}return i}function qI(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=Tt.updateQueue,t===null?(t=hh(),Tt.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function QI(e,t,i,n){t.value=i,t.getSnapshot=n,DI(t)&&PI(e)}function BI(e,t,i){return i(function(){DI(t)&&PI(e)})}function DI(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!_n(e,i)}catch{return!0}}function PI(e){var t=Tr(e,2);t!==null&&Qi(t,e,2)}function c_(e){var t=Wi();if(typeof e=="function"){var i=e;if(e=i(),Vr){Ss(!0);try{i()}finally{Ss(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qo,lastRenderedState:e},t}function LI(e,t,i,n){return e.baseState=i,rg(e,de,typeof n=="function"?n:Qo)}function zR(e,t,i,n,o){if(dh(e))throw Error(X(485));if(e=t.action,e!==null){var s={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){s.listeners.push(r)}};Rt.T!==null?i(!0):s.isTransition=!1,n(s),i=t.pending,i===null?(s.next=t.pending=s,ty(t,s)):(s.next=i.next,t.pending=i.next=s)}}function ty(e,t){var i=t.action,n=t.payload,o=e.state;if(t.isTransition){var s=Rt.T,r={};Rt.T=r;try{var a=i(o,n),u=Rt.S;u!==null&&u(r,a),Lp(e,t,a)}catch(c){l_(e,t,c)}finally{s!==null&&r.types!==null&&(s.types=r.types),Rt.T=s}}else try{s=i(o,n),Lp(e,t,s)}catch(c){l_(e,t,c)}}function Lp(e,t,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(n){tO(e,t,n)},function(n){return l_(e,t,n)}):tO(e,t,i)}function tO(e,t,i){t.status="fulfilled",t.value=i,ey(t),e.state=i,t=e.pending,t!==null&&(i=t.next,i===t?e.pending=null:(i=i.next,t.next=i,ty(e,i)))}function l_(e,t,i){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=i,ey(t),t=t.next;while(t!==n)}e.action=null}function ey(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function iy(e,t){return t}function eO(e,t){if(Xt){var i=ke.formState;if(i!==null){t:{var n=Tt;if(Xt){if(ve){e:{for(var o=ve,s=Tn;o.nodeType!==8;){if(!s){o=null;break e}if(o=Un(o.nextSibling),o===null){o=null;break e}}s=o.data,o=s==="F!"||s==="F"?o:null}if(o){ve=Un(o.nextSibling),n=o.data==="F!";break t}}$s(n)}n=!1}n&&(t=i[0])}}return i=Wi(),i.memoizedState=i.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:iy,lastRenderedState:t},i.queue=n,i=ky.bind(null,Tt,n),n.dispatch=i,n=c_(!1),s=xg.bind(null,Tt,!1,n.queue),n=Wi(),o={state:t,dispatch:null,action:e,pending:null},n.queue=o,i=zR.bind(null,Tt,o,s,i),o.dispatch=i,n.memoizedState=e,[t,i,!1]}function iO(e){var t=Ae();return ny(t,de,e)}function ny(e,t,i){if(t=rg(e,t,iy)[0],e=Ox(Qo)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=Hc(t)}catch(r){throw r===ou?xh:r}else n=t;t=Ae();var o=t.queue,s=o.dispatch;return i!==t.memoizedState&&(Tt.flags|=2048,Qa(9,{destroy:void 0},HR.bind(null,o,i),null)),[n,s,e]}function HR(e,t){e.action=t}function nO(e){var t=Ae(),i=de;if(i!==null)return ny(t,i,e);Ae(),t=t.memoizedState,i=Ae();var n=i.queue.dispatch;return i.memoizedState=e,[t,n,!1]}function Qa(e,t,i,n){return e={tag:e,create:i,deps:n,inst:t,next:null},t=Tt.updateQueue,t===null&&(t=hh(),Tt.updateQueue=t),i=t.lastEffect,i===null?t.lastEffect=e.next=e:(n=i.next,i.next=e,e.next=n,t.lastEffect=e),e}function oy(){return Ae().memoizedState}function Ix(e,t,i,n){var o=Wi();Tt.flags|=e,o.memoizedState=Qa(1|t,{destroy:void 0},i,n===void 0?null:n)}function fh(e,t,i,n){var o=Ae();n=n===void 0?null:n;var s=o.memoizedState.inst;de!==null&&n!==null&&tg(n,de.memoizedState.deps)?o.memoizedState=Qa(t,s,i,n):(Tt.flags|=e,o.memoizedState=Qa(1|t,s,i,n))}function oO(e,t){Ix(8390656,8,e,t)}function ag(e,t){fh(2048,8,e,t)}function AR(e){Tt.flags|=4;var t=Tt.updateQueue;if(t===null)t=hh(),Tt.updateQueue=t,t.events=[e];else{var i=t.events;i===null?t.events=[e]:i.push(e)}}function sy(e){var t=Ae().memoizedState;return AR({ref:t,nextImpl:e}),function(){if(ne&2)throw Error(X(440));return t.impl.apply(void 0,arguments)}}function ry(e,t){return fh(4,2,e,t)}function ay(e,t){return fh(4,4,e,t)}function uy(e,t){if(typeof t=="function"){e=e();var i=t(e);return function(){typeof i=="function"?i():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function cy(e,t,i){i=i!=null?i.concat([e]):null,fh(4,4,uy.bind(null,t,e),i)}function ug(){}function ly(e,t){var i=Ae();t=t===void 0?null:t;var n=i.memoizedState;return t!==null&&tg(t,n[1])?n[0]:(i.memoizedState=[e,t],e)}function xy(e,t){var i=Ae();t=t===void 0?null:t;var n=i.memoizedState;if(t!==null&&tg(t,n[1]))return n[0];if(n=e(),Vr){Ss(!0);try{e()}finally{Ss(!1)}}return i.memoizedState=[n,t],n}function cg(e,t,i){return i===void 0||qo&1073741824&&!(At&261930)?e.memoizedState=t:(e.memoizedState=i,e=Ly(),Tt.lanes|=e,Ys|=e,i)}function hy(e,t,i,n){return _n(i,t)?i:qa.current!==null?(e=cg(e,i,n),_n(e,t)||(Le=!0),e):!(qo&42)||qo&1073741824&&!(At&261930)?(Le=!0,e.memoizedState=i):(e=Ly(),Tt.lanes|=e,Ys|=e,t)}function my(e,t,i,n,o){var s=oe.p;oe.p=s!==0&&8>s?s:8;var r=Rt.T,a={};Rt.T=a,xg(e,!1,t,i);try{var u=o(),c=Rt.S;if(c!==null&&c(a,u),u!==null&&typeof u=="object"&&typeof u.then=="function"){var l=YR(u,n);kc(e,t,l,dn(e))}else kc(e,t,n,dn(e))}catch(x){kc(e,t,{then:function(){},status:"rejected",reason:x},dn())}finally{oe.p=s,r!==null&&a.types!==null&&(r.types=a.types),Rt.T=r}}function XR(){}function x_(e,t,i,n){if(e.tag!==5)throw Error(X(476));var o=fy(e).queue;my(e,o,t,yr,i===null?XR:function(){return dy(e),i(n)})}function fy(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:yr,baseState:yr,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qo,lastRenderedState:yr},next:null};var i={};return t.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qo,lastRenderedState:i},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function dy(e){var t=fy(e);t.next===null&&(t=e.alternate.memoizedState),kc(e,t.next.queue,{},dn())}function lg(){return Oi(Nc)}function _y(){return Ae().memoizedState}function gy(){return Ae().memoizedState}function qR(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var i=dn();e=Vs(i);var n=Gs(t,e,i);n!==null&&(Qi(n,t,i),dc(n,t,i)),t={cache:Q_()},e.payload=t;return}t=t.return}}function QR(e,t,i){var n=dn();i={lane:n,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},dh(e)?My(t,i):(i=H_(e,t,i,n),i!==null&&(Qi(i,e,n),py(i,t,n)))}function ky(e,t,i){var n=dn();kc(e,t,i,n)}function kc(e,t,i,n){var o={lane:n,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(dh(e))My(t,o);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var r=t.lastRenderedState,a=s(r,i);if(o.hasEagerState=!0,o.eagerState=a,_n(a,r))return lh(e,t,o,0),ke===null&&ch(),!1}catch{}finally{}if(i=H_(e,t,o,n),i!==null)return Qi(i,e,n),py(i,t,n),!0}return!1}function xg(e,t,i,n){if(n={lane:2,revertLane:pg(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},dh(e)){if(t)throw Error(X(479))}else t=H_(e,i,n,2),t!==null&&Qi(t,e,2)}function dh(e){var t=e.alternate;return e===Tt||t!==null&&t===Tt}function My(e,t){Ja=Jx=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function py(e,t,i){if(i&4194048){var n=t.lanes;n&=e.pendingLanes,i|=n,t.lanes=i,sI(e,i)}}var Gc={readContext:Oi,use:mh,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useLayoutEffect:$e,useInsertionEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useSyncExternalStore:$e,useId:$e,useHostTransitionStatus:$e,useFormState:$e,useActionState:$e,useOptimistic:$e,useMemoCache:$e,useCacheRefresh:$e};Gc.useEffectEvent=$e;var Oy={readContext:Oi,use:mh,useCallback:function(e,t){return Wi().memoizedState=[e,t===void 0?null:t],e},useContext:Oi,useEffect:oO,useImperativeHandle:function(e,t,i){i=i!=null?i.concat([e]):null,Ix(4194308,4,uy.bind(null,t,e),i)},useLayoutEffect:function(e,t){return Ix(4194308,4,e,t)},useInsertionEffect:function(e,t){Ix(4,2,e,t)},useMemo:function(e,t){var i=Wi();t=t===void 0?null:t;var n=e();if(Vr){Ss(!0);try{e()}finally{Ss(!1)}}return i.memoizedState=[n,t],n},useReducer:function(e,t,i){var n=Wi();if(i!==void 0){var o=i(t);if(Vr){Ss(!0);try{i(t)}finally{Ss(!1)}}}else o=t;return n.memoizedState=n.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},n.queue=e,e=e.dispatch=QR.bind(null,Tt,e),[n.memoizedState,e]},useRef:function(e){var t=Wi();return e={current:e},t.memoizedState=e},useState:function(e){e=c_(e);var t=e.queue,i=ky.bind(null,Tt,t);return t.dispatch=i,[e.memoizedState,i]},useDebugValue:ug,useDeferredValue:function(e,t){var i=Wi();return cg(i,e,t)},useTransition:function(){var e=c_(!1);return e=my.bind(null,Tt,e.queue,!0,!1),Wi().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,i){var n=Tt,o=Wi();if(Xt){if(i===void 0)throw Error(X(407));i=i()}else{if(i=t(),ke===null)throw Error(X(349));At&127||qI(n,t,i)}o.memoizedState=i;var s={value:i,getSnapshot:t};return o.queue=s,oO(BI.bind(null,n,s,e),[e]),n.flags|=2048,Qa(9,{destroy:void 0},QI.bind(null,n,s,i,t),null),i},useId:function(){var e=Wi(),t=ke.identifierPrefix;if(Xt){var i=xo,n=lo;i=(n&~(1<<32-fn(n)-1)).toString(32)+i,t="_"+t+"R_"+i,i=bx++,0<i&&(t+="H"+i.toString(32)),t+="_"}else i=JR++,t="_"+t+"r_"+i.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:lg,useFormState:eO,useActionState:eO,useOptimistic:function(e){var t=Wi();t.memoizedState=t.baseState=e;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=i,t=xg.bind(null,Tt,!0,i),i.dispatch=t,[e,t]},useMemoCache:sg,useCacheRefresh:function(){return Wi().memoizedState=qR.bind(null,Tt)},useEffectEvent:function(e){var t=Wi(),i={impl:e};return t.memoizedState=i,function(){if(ne&2)throw Error(X(440));return i.impl.apply(void 0,arguments)}}},hg={readContext:Oi,use:mh,useCallback:ly,useContext:Oi,useEffect:ag,useImperativeHandle:cy,useInsertionEffect:ry,useLayoutEffect:ay,useMemo:xy,useReducer:Ox,useRef:oy,useState:function(){return Ox(Qo)},useDebugValue:ug,useDeferredValue:function(e,t){var i=Ae();return hy(i,de.memoizedState,e,t)},useTransition:function(){var e=Ox(Qo)[0],t=Ae().memoizedState;return[typeof e=="boolean"?e:Hc(e),t]},useSyncExternalStore:XI,useId:_y,useHostTransitionStatus:lg,useFormState:iO,useActionState:iO,useOptimistic:function(e,t){var i=Ae();return LI(i,de,e,t)},useMemoCache:sg,useCacheRefresh:gy};hg.useEffectEvent=sy;var Iy={readContext:Oi,use:mh,useCallback:ly,useContext:Oi,useEffect:ag,useImperativeHandle:cy,useInsertionEffect:ry,useLayoutEffect:ay,useMemo:xy,useReducer:Md,useRef:oy,useState:function(){return Md(Qo)},useDebugValue:ug,useDeferredValue:function(e,t){var i=Ae();return de===null?cg(i,e,t):hy(i,de.memoizedState,e,t)},useTransition:function(){var e=Md(Qo)[0],t=Ae().memoizedState;return[typeof e=="boolean"?e:Hc(e),t]},useSyncExternalStore:XI,useId:_y,useHostTransitionStatus:lg,useFormState:nO,useActionState:nO,useOptimistic:function(e,t){var i=Ae();return de!==null?LI(i,de,e,t):(i.baseState=e,[e,i.queue.dispatch])},useMemoCache:sg,useCacheRefresh:gy};Iy.useEffectEvent=sy;function pd(e,t,i,n){t=e.memoizedState,i=i(n,t),i=i==null?t:Re({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var h_={enqueueSetState:function(e,t,i){e=e._reactInternals;var n=dn(),o=Vs(n);o.payload=t,i!=null&&(o.callback=i),t=Gs(e,o,n),t!==null&&(Qi(t,e,n),dc(t,e,n))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var n=dn(),o=Vs(n);o.tag=1,o.payload=t,i!=null&&(o.callback=i),t=Gs(e,o,n),t!==null&&(Qi(t,e,n),dc(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=dn(),n=Vs(i);n.tag=2,t!=null&&(n.callback=t),t=Gs(e,n,i),t!==null&&(Qi(t,e,i),dc(t,e,i))}};function sO(e,t,i,n,o,s,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,s,r):t.prototype&&t.prototype.isPureReactComponent?!vc(i,n)||!vc(o,s):!0}function rO(e,t,i,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,n),t.state!==e&&h_.enqueueReplaceState(t,t.state,null)}function Gr(e,t){var i=t;if("ref"in t){i={};for(var n in t)n!=="ref"&&(i[n]=t[n])}if(e=e.defaultProps){i===t&&(i=Re({},i));for(var o in e)i[o]===void 0&&(i[o]=e[o])}return i}function yy(e){Nx(e)}function Sy(e){console.error(e)}function Zy(e){Nx(e)}function zx(e,t){try{var i=e.onUncaughtError;i(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function aO(e,t,i){try{var n=e.onCaughtError;n(i.value,{componentStack:i.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function m_(e,t,i){return i=Vs(i),i.tag=3,i.payload={element:null},i.callback=function(){zx(e,t)},i}function wy(e){return e=Vs(e),e.tag=3,e}function vy(e,t,i,n){var o=i.type.getDerivedStateFromError;if(typeof o=="function"){var s=n.value;e.payload=function(){return o(s)},e.callback=function(){aO(t,i,n)}}var r=i.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){aO(t,i,n),typeof o!="function"&&(Fs===null?Fs=new Set([this]):Fs.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})})}function BR(e,t,i,n,o){if(i.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=i.alternate,t!==null&&nu(t,i,o,!0),i=gn.current,i!==null){switch(i.tag){case 31:case 13:return Wn===null?Qx():i.alternate===null&&Ce===0&&(Ce=3),i.flags&=-257,i.flags|=65536,i.lanes=o,n===$x?i.flags|=16384:(t=i.updateQueue,t===null?i.updateQueue=new Set([n]):t.add(n),Vd(e,n,o)),!1;case 22:return i.flags|=65536,n===$x?i.flags|=16384:(t=i.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},i.updateQueue=t):(i=t.retryQueue,i===null?t.retryQueue=new Set([n]):i.add(n)),Vd(e,n,o)),!1}throw Error(X(435,i.tag))}return Vd(e,n,o),Qx(),!1}if(Xt)return t=gn.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=o,n!==t_&&(e=Error(X(422),{cause:n}),Kc(Nn(e,i)))):(n!==t_&&(t=Error(X(423),{cause:n}),Kc(Nn(t,i))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,n=Nn(n,i),o=m_(e.stateNode,n,o),kd(e,o),Ce!==4&&(Ce=2)),!1;var s=Error(X(520),{cause:n});if(s=Nn(s,i),Oc===null?Oc=[s]:Oc.push(s),Ce!==4&&(Ce=2),t===null)return!0;n=Nn(n,i),i=t;do{switch(i.tag){case 3:return i.flags|=65536,e=o&-o,i.lanes|=e,e=m_(i.stateNode,n,e),kd(i,e),!1;case 1:if(t=i.type,s=i.stateNode,(i.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(Fs===null||!Fs.has(s))))return i.flags|=65536,o&=-o,i.lanes|=o,o=wy(o),vy(o,e,i,n),kd(i,o),!1}i=i.return}while(i!==null);return!1}var mg=Error(X(461)),Le=!1;function ki(e,t,i,n){t.child=e===null?YI(t,null,i,n):Er(t,e.child,i,n)}function uO(e,t,i,n,o){i=i.render;var s=t.ref;if("ref"in n){var r={};for(var a in n)a!=="ref"&&(r[a]=n[a])}else r=n;return Kr(t),n=eg(e,t,i,r,s,o),a=ig(),e!==null&&!Le?(ng(e,t,o),Bo(e,t,o)):(Xt&&a&&X_(t),t.flags|=1,ki(e,t,n,o),t.child)}function cO(e,t,i,n,o){if(e===null){var s=i.type;return typeof s=="function"&&!A_(s)&&s.defaultProps===void 0&&i.compare===null?(t.tag=15,t.type=s,Ry(e,t,s,n,o)):(e=Mx(i.type,null,n,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!fg(e,o)){var r=s.memoizedProps;if(i=i.compare,i=i!==null?i:vc,i(r,n)&&e.ref===t.ref)return Bo(e,t,o)}return t.flags|=1,e=zo(s,n),e.ref=t.ref,e.return=t,t.child=e}function Ry(e,t,i,n,o){if(e!==null){var s=e.memoizedProps;if(vc(s,n)&&e.ref===t.ref)if(Le=!1,t.pendingProps=n=s,fg(e,o))e.flags&131072&&(Le=!0);else return t.lanes=e.lanes,Bo(e,t,o)}return f_(e,t,i,n,o)}function Ky(e,t,i,n){var o=n.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if(t.flags&128){if(s=s!==null?s.baseLanes|i:i,e!==null){for(n=t.child=e.child,o=0;n!==null;)o=o|n.lanes|n.childLanes,n=n.sibling;n=o&~s}else n=0,t.child=null;return lO(e,t,s,i,n)}if(i&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&px(t,s!==null?s.cachePool:null),s!==null?Pp(t,s):a_(),zI(t);else return n=t.lanes=536870912,lO(e,t,s!==null?s.baseLanes|i:i,i,n)}else s!==null?(px(t,s.cachePool),Pp(t,s),Is(t),t.memoizedState=null):(e!==null&&px(t,null),a_(),Is(t));return ki(e,t,o,i),t.child}function cc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function lO(e,t,i,n,o){var s=B_();return s=s===null?null:{parent:Pe._currentValue,pool:s},t.memoizedState={baseLanes:i,cachePool:s},e!==null&&px(t,null),a_(),zI(t),e!==null&&nu(e,t,n,!0),t.childLanes=o,null}function yx(e,t){return t=Hx({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function xO(e,t,i){return Er(t,e.child,null,i),e=yx(t,t.pendingProps),e.flags|=2,cn(t),t.memoizedState=null,e}function DR(e,t,i){var n=t.pendingProps,o=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Xt){if(n.mode==="hidden")return e=yx(t,n),t.lanes=536870912,cc(null,e);if(u_(t),(e=ve)?(e=OS(e,Tn),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Us!==null?{id:lo,overflow:xo}:null,retryLane:536870912,hydrationErrors:null},i=jI(e),i.return=t,t.child=i,pi=t,ve=null)):e=null,e===null)throw $s(t);return t.lanes=536870912,null}return yx(t,n)}var s=e.memoizedState;if(s!==null){var r=s.dehydrated;if(u_(t),o)if(t.flags&256)t.flags&=-257,t=xO(e,t,i);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(X(558));else if(Le||nu(e,t,i,!1),o=(i&e.childLanes)!==0,Le||o){if(n=ke,n!==null&&(r=rI(n,i),r!==0&&r!==s.retryLane))throw s.retryLane=r,Tr(e,r),Qi(n,e,r),mg;Qx(),t=xO(e,t,i)}else e=s.treeContext,ve=Un(r.nextSibling),pi=t,Xt=!0,Es=null,Tn=!1,e!==null&&TI(t,e),t=yx(t,n),t.flags|=4096;return t}return e=zo(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Sx(e,t){var i=t.ref;if(i===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(X(284));(e===null||e.ref!==i)&&(t.flags|=4194816)}}function f_(e,t,i,n,o){return Kr(t),i=eg(e,t,i,n,void 0,o),n=ig(),e!==null&&!Le?(ng(e,t,o),Bo(e,t,o)):(Xt&&n&&X_(t),t.flags|=1,ki(e,t,i,o),t.child)}function hO(e,t,i,n,o,s){return Kr(t),t.updateQueue=null,i=AI(t,n,i,o),HI(e),n=ig(),e!==null&&!Le?(ng(e,t,s),Bo(e,t,s)):(Xt&&n&&X_(t),t.flags|=1,ki(e,t,i,s),t.child)}function mO(e,t,i,n,o){if(Kr(t),t.stateNode===null){var s=Fa,r=i.contextType;typeof r=="object"&&r!==null&&(s=Oi(r)),s=new i(n,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=h_,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=n,s.state=t.memoizedState,s.refs={},P_(t),r=i.contextType,s.context=typeof r=="object"&&r!==null?Oi(r):Fa,s.state=t.memoizedState,r=i.getDerivedStateFromProps,typeof r=="function"&&(pd(t,i,r,n),s.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(r=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),r!==s.state&&h_.enqueueReplaceState(s,s.state,null),gc(t,n,s,o),_c(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){s=t.stateNode;var a=t.memoizedProps,u=Gr(i,a);s.props=u;var c=s.context,l=i.contextType;r=Fa,typeof l=="object"&&l!==null&&(r=Oi(l));var x=i.getDerivedStateFromProps;l=typeof x=="function"||typeof s.getSnapshotBeforeUpdate=="function",a=t.pendingProps!==a,l||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a||c!==r)&&rO(t,s,n,r),Ms=!1;var h=t.memoizedState;s.state=h,gc(t,n,s,o),_c(),c=t.memoizedState,a||h!==c||Ms?(typeof x=="function"&&(pd(t,i,x,n),c=t.memoizedState),(u=Ms||sO(t,i,u,n,h,c,r))?(l||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=c),s.props=n,s.state=c,s.context=r,n=u):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{s=t.stateNode,s_(e,t),r=t.memoizedProps,l=Gr(i,r),s.props=l,x=t.pendingProps,h=s.context,c=i.contextType,u=Fa,typeof c=="object"&&c!==null&&(u=Oi(c)),a=i.getDerivedStateFromProps,(c=typeof a=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(r!==x||h!==u)&&rO(t,s,n,u),Ms=!1,h=t.memoizedState,s.state=h,gc(t,n,s,o),_c();var m=t.memoizedState;r!==x||h!==m||Ms||e!==null&&e.dependencies!==null&&Ux(e.dependencies)?(typeof a=="function"&&(pd(t,i,a,n),m=t.memoizedState),(l=Ms||sO(t,i,l,n,h,m,u)||e!==null&&e.dependencies!==null&&Ux(e.dependencies))?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,m,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,m,u)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=m),s.props=n,s.state=m,s.context=u,n=l):(typeof s.componentDidUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),n=!1)}return s=n,Sx(e,t),n=(t.flags&128)!==0,s||n?(s=t.stateNode,i=n&&typeof i.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&n?(t.child=Er(t,e.child,null,o),t.child=Er(t,null,i,o)):ki(e,t,i,o),t.memoizedState=s.state,e=t.child):e=Bo(e,t,o),e}function fO(e,t,i,n){return Rr(),t.flags|=256,ki(e,t,i,n),t.child}var Od={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Id(e){return{baseLanes:e,cachePool:UI()}}function yd(e,t,i){return e=e!==null?e.childLanes&~i:0,t&&(e|=xn),e}function Ey(e,t,i){var n=t.pendingProps,o=!1,s=(t.flags&128)!==0,r;if((r=s)||(r=e!==null&&e.memoizedState===null?!1:(He.current&2)!==0),r&&(o=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(Xt){if(o?Os(t):Is(t),(e=ve)?(e=OS(e,Tn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Us!==null?{id:lo,overflow:xo}:null,retryLane:536870912,hydrationErrors:null},i=jI(e),i.return=t,t.child=i,pi=t,ve=null)):e=null,e===null)throw $s(t);return R_(e)?t.lanes=32:t.lanes=536870912,null}var a=n.children;return n=n.fallback,o?(Is(t),o=t.mode,a=Hx({mode:"hidden",children:a},o),n=Sr(n,o,i,null),a.return=t,n.return=t,a.sibling=n,t.child=a,n=t.child,n.memoizedState=Id(i),n.childLanes=yd(e,r,i),t.memoizedState=Od,cc(null,n)):(Os(t),d_(t,a))}var u=e.memoizedState;if(u!==null&&(a=u.dehydrated,a!==null)){if(s)t.flags&256?(Os(t),t.flags&=-257,t=Sd(e,t,i)):t.memoizedState!==null?(Is(t),t.child=e.child,t.flags|=128,t=null):(Is(t),a=n.fallback,o=t.mode,n=Hx({mode:"visible",children:n.children},o),a=Sr(a,o,i,null),a.flags|=2,n.return=t,a.return=t,n.sibling=a,t.child=n,Er(t,e.child,null,i),n=t.child,n.memoizedState=Id(i),n.childLanes=yd(e,r,i),t.memoizedState=Od,t=cc(null,n));else if(Os(t),R_(a)){if(r=a.nextSibling&&a.nextSibling.dataset,r)var c=r.dgst;r=c,n=Error(X(419)),n.stack="",n.digest=r,Kc({value:n,source:null,stack:null}),t=Sd(e,t,i)}else if(Le||nu(e,t,i,!1),r=(i&e.childLanes)!==0,Le||r){if(r=ke,r!==null&&(n=rI(r,i),n!==0&&n!==u.retryLane))throw u.retryLane=n,Tr(e,n),Qi(r,e,n),mg;v_(a)||Qx(),t=Sd(e,t,i)}else v_(a)?(t.flags|=192,t.child=e.child,t=null):(e=u.treeContext,ve=Un(a.nextSibling),pi=t,Xt=!0,Es=null,Tn=!1,e!==null&&TI(t,e),t=d_(t,n.children),t.flags|=4096);return t}return o?(Is(t),a=n.fallback,o=t.mode,u=e.child,c=u.sibling,n=zo(u,{mode:"hidden",children:n.children}),n.subtreeFlags=u.subtreeFlags&65011712,c!==null?a=zo(c,a):(a=Sr(a,o,i,null),a.flags|=2),a.return=t,n.return=t,n.sibling=a,t.child=n,cc(null,n),n=t.child,a=e.child.memoizedState,a===null?a=Id(i):(o=a.cachePool,o!==null?(u=Pe._currentValue,o=o.parent!==u?{parent:u,pool:u}:o):o=UI(),a={baseLanes:a.baseLanes|i,cachePool:o}),n.memoizedState=a,n.childLanes=yd(e,r,i),t.memoizedState=Od,cc(e.child,n)):(Os(t),i=e.child,e=i.sibling,i=zo(i,{mode:"visible",children:n.children}),i.return=t,i.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=i,t.memoizedState=null,i)}function d_(e,t){return t=Hx({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Hx(e,t){return e=ln(22,e,null,t),e.lanes=0,e}function Sd(e,t,i){return Er(t,e.child,null,i),e=d_(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function dO(e,t,i){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),i_(e.return,t,i)}function Zd(e,t,i,n,o,s){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:i,tailMode:o,treeForkCount:s}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=n,r.tail=i,r.tailMode=o,r.treeForkCount=s)}function Vy(e,t,i){var n=t.pendingProps,o=n.revealOrder,s=n.tail;n=n.children;var r=He.current,a=(r&2)!==0;if(a?(r=r&1|2,t.flags|=128):r&=1,ye(He,r),ki(e,t,n,i),n=Xt?Rc:0,!a&&e!==null&&e.flags&128)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&dO(e,i,t);else if(e.tag===19)dO(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(o){case"forwards":for(i=t.child,o=null;i!==null;)e=i.alternate,e!==null&&Yx(e)===null&&(o=i),i=i.sibling;i=o,i===null?(o=t.child,t.child=null):(o=i.sibling,i.sibling=null),Zd(t,!1,o,i,s,n);break;case"backwards":case"unstable_legacy-backwards":for(i=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Yx(e)===null){t.child=o;break}e=o.sibling,o.sibling=i,i=o,o=e}Zd(t,!0,i,null,s,n);break;case"together":Zd(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function Bo(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),Ys|=t.lanes,!(i&t.childLanes))if(e!==null){if(nu(e,t,i,!1),(i&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(X(153));if(t.child!==null){for(e=t.child,i=zo(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=zo(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function fg(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&Ux(e)))}function PR(e,t,i){switch(t.tag){case 3:Vx(t,t.stateNode.containerInfo),ps(t,Pe,e.memoizedState.cache),Rr();break;case 27:case 5:bd(t);break;case 4:Vx(t,t.stateNode.containerInfo);break;case 10:ps(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,u_(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(Os(t),t.flags|=128,null):i&t.child.childLanes?Ey(e,t,i):(Os(t),e=Bo(e,t,i),e!==null?e.sibling:null);Os(t);break;case 19:var o=(e.flags&128)!==0;if(n=(i&t.childLanes)!==0,n||(nu(e,t,i,!1),n=(i&t.childLanes)!==0),o){if(n)return Vy(e,t,i);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ye(He,He.current),n)break;return null;case 22:return t.lanes=0,Ky(e,t,i,t.pendingProps);case 24:ps(t,Pe,e.memoizedState.cache)}return Bo(e,t,i)}function Gy(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps)Le=!0;else{if(!fg(e,i)&&!(t.flags&128))return Le=!1,PR(e,t,i);Le=!!(e.flags&131072)}else Le=!1,Xt&&t.flags&1048576&&NI(t,Rc,t.index);switch(t.lanes=0,t.tag){case 16:t:{var n=t.pendingProps;if(e=Or(t.elementType),t.type=e,typeof e=="function")A_(e)?(n=Gr(e,n),t.tag=1,t=mO(null,t,e,n,i)):(t.tag=0,t=f_(null,t,e,n,i));else{if(e!=null){var o=e.$$typeof;if(o===G_){t.tag=11,t=uO(null,t,e,n,i);break t}else if(o===F_){t.tag=14,t=cO(null,t,e,n,i);break t}}throw t=Yd(e)||e,Error(X(306,t,""))}}return t;case 0:return f_(e,t,t.type,t.pendingProps,i);case 1:return n=t.type,o=Gr(n,t.pendingProps),mO(e,t,n,o,i);case 3:t:{if(Vx(t,t.stateNode.containerInfo),e===null)throw Error(X(387));n=t.pendingProps;var s=t.memoizedState;o=s.element,s_(e,t),gc(t,n,null,i);var r=t.memoizedState;if(n=r.cache,ps(t,Pe,n),n!==s.cache&&n_(t,[Pe],i,!0),_c(),n=r.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=fO(e,t,n,i);break t}else if(n!==o){o=Nn(Error(X(424)),t),Kc(o),t=fO(e,t,n,i);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ve=Un(e.firstChild),pi=t,Xt=!0,Es=null,Tn=!0,i=YI(t,null,n,i),t.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling}else{if(Rr(),n===o){t=Bo(e,t,i);break t}ki(e,t,n,i)}t=t.child}return t;case 26:return Sx(e,t),e===null?(i=WO(t.type,null,t.pendingProps,null))?t.memoizedState=i:Xt||(i=t.type,e=t.pendingProps,n=Lx(Ks.current).createElement(i),n[Mi]=t,n[Bi]=e,Ii(n,i,e),hi(n),t.stateNode=n):t.memoizedState=WO(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return bd(t),e===null&&Xt&&(n=t.stateNode=IS(t.type,t.pendingProps,Ks.current),pi=t,Tn=!0,o=ve,bs(t.type)?(K_=o,ve=Un(n.firstChild)):ve=o),ki(e,t,t.pendingProps.children,i),Sx(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Xt&&((o=n=ve)&&(n=wK(n,t.type,t.pendingProps,Tn),n!==null?(t.stateNode=n,pi=t,ve=Un(n.firstChild),Tn=!1,o=!0):o=!1),o||$s(t)),bd(t),o=t.type,s=t.pendingProps,r=e!==null?e.memoizedProps:null,n=s.children,Z_(o,s)?n=null:r!==null&&Z_(o,r)&&(t.flags|=32),t.memoizedState!==null&&(o=eg(e,t,bR,null,null,i),Nc._currentValue=o),Sx(e,t),ki(e,t,n,i),t.child;case 6:return e===null&&Xt&&((e=i=ve)&&(i=vK(i,t.pendingProps,Tn),i!==null?(t.stateNode=i,pi=t,ve=null,e=!0):e=!1),e||$s(t)),null;case 13:return Ey(e,t,i);case 4:return Vx(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Er(t,null,n,i):ki(e,t,n,i),t.child;case 11:return uO(e,t,t.type,t.pendingProps,i);case 7:return ki(e,t,t.pendingProps,i),t.child;case 8:return ki(e,t,t.pendingProps.children,i),t.child;case 12:return ki(e,t,t.pendingProps.children,i),t.child;case 10:return n=t.pendingProps,ps(t,t.type,n.value),ki(e,t,n.children,i),t.child;case 9:return o=t.type._context,n=t.pendingProps.children,Kr(t),o=Oi(o),n=n(o),t.flags|=1,ki(e,t,n,i),t.child;case 14:return cO(e,t,t.type,t.pendingProps,i);case 15:return Ry(e,t,t.type,t.pendingProps,i);case 19:return Vy(e,t,i);case 31:return DR(e,t,i);case 22:return Ky(e,t,i,t.pendingProps);case 24:return Kr(t),n=Oi(Pe),e===null?(o=B_(),o===null&&(o=ke,s=Q_(),o.pooledCache=s,s.refCount++,s!==null&&(o.pooledCacheLanes|=i),o=s),t.memoizedState={parent:n,cache:o},P_(t),ps(t,Pe,o)):(e.lanes&i&&(s_(e,t),gc(t,null,null,i),_c()),o=e.memoizedState,s=t.memoizedState,o.parent!==n?(o={parent:n,cache:n},t.memoizedState=o,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=o),ps(t,Pe,n)):(n=s.cache,ps(t,Pe,n),n!==o.cache&&n_(t,[Pe],i,!0))),ki(e,t,t.pendingProps.children,i),t.child;case 29:throw t.pendingProps}throw Error(X(156,t.tag))}function No(e){e.flags|=4}function wd(e,t,i,n,o){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(o&335544128)===o)if(e.stateNode.complete)e.flags|=8192;else if(iS())e.flags|=8192;else throw wr=$x,D_}else e.flags&=-16777217}function _O(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!ZS(t))if(iS())e.flags|=8192;else throw wr=$x,D_}function ux(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?nI():536870912,e.lanes|=t,Ba|=t)}function ic(e,t){if(!Xt)switch(e.tailMode){case"hidden":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var n=null;i!==null;)i.alternate!==null&&(n=i),i=i.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function we(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,n=0;if(t)for(var o=e.child;o!==null;)i|=o.lanes|o.childLanes,n|=o.subtreeFlags&65011712,n|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)i|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=i,t}function LR(e,t,i){var n=t.pendingProps;switch(q_(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(t),null;case 1:return we(t),null;case 3:return i=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ho(Pe),za(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Oa(t)?No(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,gd())),we(t),null;case 26:var o=t.type,s=t.memoizedState;return e===null?(No(t),s!==null?(we(t),_O(t,s)):(we(t),wd(t,o,null,n,i))):s?s!==e.memoizedState?(No(t),we(t),_O(t,s)):(we(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&No(t),we(t),wd(t,o,e,n,i)),null;case 27:if(Gx(t),i=Ks.current,o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&No(t);else{if(!n){if(t.stateNode===null)throw Error(X(166));return we(t),null}e=mo.current,Oa(t)?Hp(t,e):(e=IS(o,n,i),t.stateNode=e,No(t))}return we(t),null;case 5:if(Gx(t),o=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&No(t);else{if(!n){if(t.stateNode===null)throw Error(X(166));return we(t),null}if(s=mo.current,Oa(t))Hp(t,s);else{var r=Lx(Ks.current);switch(s){case 1:s=r.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:s=r.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":s=r.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":s=r.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":s=r.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof n.is=="string"?r.createElement("select",{is:n.is}):r.createElement("select"),n.multiple?s.multiple=!0:n.size&&(s.size=n.size);break;default:s=typeof n.is=="string"?r.createElement(o,{is:n.is}):r.createElement(o)}}s[Mi]=t,s[Bi]=n;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)s.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=s;t:switch(Ii(s,o,n),o){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break t;case"img":n=!0;break t;default:n=!1}n&&No(t)}}return we(t),wd(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,i),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&No(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(X(166));if(e=Ks.current,Oa(t)){if(e=t.stateNode,i=t.memoizedProps,n=null,o=pi,o!==null)switch(o.tag){case 27:case 5:n=o.memoizedProps}e[Mi]=t,e=!!(e.nodeValue===i||n!==null&&n.suppressHydrationWarning===!0||kS(e.nodeValue,i)),e||$s(t,!0)}else e=Lx(e).createTextNode(n),e[Mi]=t,t.stateNode=e}return we(t),null;case 31:if(i=t.memoizedState,e===null||e.memoizedState!==null){if(n=Oa(t),i!==null){if(e===null){if(!n)throw Error(X(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(X(557));e[Mi]=t}else Rr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;we(t),e=!1}else i=gd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),e=!0;if(!e)return t.flags&256?(cn(t),t):(cn(t),null);if(t.flags&128)throw Error(X(558))}return we(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=Oa(t),n!==null&&n.dehydrated!==null){if(e===null){if(!o)throw Error(X(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(X(317));o[Mi]=t}else Rr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;we(t),o=!1}else o=gd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return t.flags&256?(cn(t),t):(cn(t),null)}return cn(t),t.flags&128?(t.lanes=i,t):(i=n!==null,e=e!==null&&e.memoizedState!==null,i&&(n=t.child,o=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(o=n.alternate.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==o&&(n.flags|=2048)),i!==e&&i&&(t.child.flags|=8192),ux(t,t.updateQueue),we(t),null);case 4:return za(),e===null&&Og(t.stateNode.containerInfo),we(t),null;case 10:return Ho(t.type),we(t),null;case 19:if(mi(He),n=t.memoizedState,n===null)return we(t),null;if(o=(t.flags&128)!==0,s=n.rendering,s===null)if(o)ic(n,!1);else{if(Ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Yx(e),s!==null){for(t.flags|=128,ic(n,!1),e=s.updateQueue,t.updateQueue=e,ux(t,e),t.subtreeFlags=0,e=i,i=t.child;i!==null;)FI(i,e),i=i.sibling;return ye(He,He.current&1|2),Xt&&$o(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&hn()>Xx&&(t.flags|=128,o=!0,ic(n,!1),t.lanes=4194304)}else{if(!o)if(e=Yx(s),e!==null){if(t.flags|=128,o=!0,e=e.updateQueue,t.updateQueue=e,ux(t,e),ic(n,!0),n.tail===null&&n.tailMode==="hidden"&&!s.alternate&&!Xt)return we(t),null}else 2*hn()-n.renderingStartTime>Xx&&i!==536870912&&(t.flags|=128,o=!0,ic(n,!1),t.lanes=4194304);n.isBackwards?(s.sibling=t.child,t.child=s):(e=n.last,e!==null?e.sibling=s:t.child=s,n.last=s)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=hn(),e.sibling=null,i=He.current,ye(He,o?i&1|2:i&1),Xt&&$o(t,n.treeForkCount),e):(we(t),null);case 22:case 23:return cn(t),L_(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?i&536870912&&!(t.flags&128)&&(we(t),t.subtreeFlags&6&&(t.flags|=8192)):we(t),i=t.updateQueue,i!==null&&ux(t,i.retryQueue),i=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==i&&(t.flags|=2048),e!==null&&mi(Zr),null;case 24:return i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Ho(Pe),we(t),null;case 25:return null;case 30:return null}throw Error(X(156,t.tag))}function tK(e,t){switch(q_(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ho(Pe),za(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Gx(t),null;case 31:if(t.memoizedState!==null){if(cn(t),t.alternate===null)throw Error(X(340));Rr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(cn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(X(340));Rr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return mi(He),null;case 4:return za(),null;case 10:return Ho(t.type),null;case 22:case 23:return cn(t),L_(),e!==null&&mi(Zr),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ho(Pe),null;case 25:return null;default:return null}}function Fy(e,t){switch(q_(t),t.tag){case 3:Ho(Pe),za();break;case 26:case 27:case 5:Gx(t);break;case 4:za();break;case 31:t.memoizedState!==null&&cn(t);break;case 13:cn(t);break;case 19:mi(He);break;case 10:Ho(t.type);break;case 22:case 23:cn(t),L_(),e!==null&&mi(Zr);break;case 24:Ho(Pe)}}function Ac(e,t){try{var i=t.updateQueue,n=i!==null?i.lastEffect:null;if(n!==null){var o=n.next;i=o;do{if((i.tag&e)===e){n=void 0;var s=i.create,r=i.inst;n=s(),r.destroy=n}i=i.next}while(i!==o)}}catch(a){xe(t,t.return,a)}}function Cs(e,t,i){try{var n=t.updateQueue,o=n!==null?n.lastEffect:null;if(o!==null){var s=o.next;n=s;do{if((n.tag&e)===e){var r=n.inst,a=r.destroy;if(a!==void 0){r.destroy=void 0,o=t;var u=i,c=a;try{c()}catch(l){xe(o,u,l)}}}n=n.next}while(n!==s)}}catch(l){xe(t,t.return,l)}}function jy(e){var t=e.updateQueue;if(t!==null){var i=e.stateNode;try{bI(t,i)}catch(n){xe(e,e.return,n)}}}function Ny(e,t,i){i.props=Gr(e.type,e.memoizedProps),i.state=e.memoizedState;try{i.componentWillUnmount()}catch(n){xe(e,t,n)}}function Mc(e,t){try{var i=e.ref;if(i!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof i=="function"?e.refCleanup=i(n):i.current=n}}catch(o){xe(e,t,o)}}function ho(e,t){var i=e.ref,n=e.refCleanup;if(i!==null)if(typeof n=="function")try{n()}catch(o){xe(e,t,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(o){xe(e,t,o)}else i.current=null}function Ty(e){var t=e.type,i=e.memoizedProps,n=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":i.autoFocus&&n.focus();break t;case"img":i.src?n.src=i.src:i.srcSet&&(n.srcset=i.srcSet)}}catch(o){xe(e,e.return,o)}}function vd(e,t,i){try{var n=e.stateNode;pK(n,e.type,i,t),n[Bi]=t}catch(o){xe(e,e.return,o)}}function Wy(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&bs(e.type)||e.tag===4}function Rd(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Wy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&bs(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function __(e,t,i){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(e,t):(t=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,t.appendChild(e),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=Jo));else if(n!==4&&(n===27&&bs(e.type)&&(i=e.stateNode,t=null),e=e.child,e!==null))for(__(e,t,i),e=e.sibling;e!==null;)__(e,t,i),e=e.sibling}function Ax(e,t,i){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?i.insertBefore(e,t):i.appendChild(e);else if(n!==4&&(n===27&&bs(e.type)&&(i=e.stateNode),e=e.child,e!==null))for(Ax(e,t,i),e=e.sibling;e!==null;)Ax(e,t,i),e=e.sibling}function Uy(e){var t=e.stateNode,i=e.memoizedProps;try{for(var n=e.type,o=t.attributes;o.length;)t.removeAttributeNode(o[0]);Ii(t,n,i),t[Mi]=e,t[Bi]=i}catch(s){xe(e,e.return,s)}}var Co=!1,De=!1,Kd=!1,gO=typeof WeakSet=="function"?WeakSet:Set,xi=null;function eK(e,t){if(e=e.containerInfo,y_=nh,e=ZI(e),b_(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else t:{i=(i=e.ownerDocument)&&i.defaultView||window;var n=i.getSelection&&i.getSelection();if(n&&n.rangeCount!==0){i=n.anchorNode;var o=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{i.nodeType,s.nodeType}catch{i=null;break t}var r=0,a=-1,u=-1,c=0,l=0,x=e,h=null;e:for(;;){for(var m;x!==i||o!==0&&x.nodeType!==3||(a=r+o),x!==s||n!==0&&x.nodeType!==3||(u=r+n),x.nodeType===3&&(r+=x.nodeValue.length),(m=x.firstChild)!==null;)h=x,x=m;for(;;){if(x===e)break e;if(h===i&&++c===o&&(a=r),h===s&&++l===n&&(u=r),(m=x.nextSibling)!==null)break;x=h,h=x.parentNode}x=m}i=a===-1||u===-1?null:{start:a,end:u}}else i=null}i=i||{start:0,end:0}}else i=null;for(S_={focusedElem:e,selectionRange:i},nh=!1,xi=t;xi!==null;)if(t=xi,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,xi=e;else for(;xi!==null;){switch(t=xi,s=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(i=0;i<e.length;i++)o=e[i],o.ref.impl=o.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&s!==null){e=void 0,i=t,o=s.memoizedProps,s=s.memoizedState,n=i.stateNode;try{var g=Gr(i.type,o);e=n.getSnapshotBeforeUpdate(g,s),n.__reactInternalSnapshotBeforeUpdate=e}catch(_){xe(i,i.return,_)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,i=e.nodeType,i===9)w_(e);else if(i===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":w_(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(X(163))}if(e=t.sibling,e!==null){e.return=t.return,xi=e;break}xi=t.return}}function $y(e,t,i){var n=i.flags;switch(i.tag){case 0:case 11:case 15:Wo(e,i),n&4&&Ac(5,i);break;case 1:if(Wo(e,i),n&4)if(e=i.stateNode,t===null)try{e.componentDidMount()}catch(r){xe(i,i.return,r)}else{var o=Gr(i.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){xe(i,i.return,r)}}n&64&&jy(i),n&512&&Mc(i,i.return);break;case 3:if(Wo(e,i),n&64&&(e=i.updateQueue,e!==null)){if(t=null,i.child!==null)switch(i.child.tag){case 27:case 5:t=i.child.stateNode;break;case 1:t=i.child.stateNode}try{bI(e,t)}catch(r){xe(i,i.return,r)}}break;case 27:t===null&&n&4&&Uy(i);case 26:case 5:Wo(e,i),t===null&&n&4&&Ty(i),n&512&&Mc(i,i.return);break;case 12:Wo(e,i);break;case 31:Wo(e,i),n&4&&Jy(e,i);break;case 13:Wo(e,i),n&4&&by(e,i),n&64&&(e=i.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(i=lK.bind(null,i),RK(e,i))));break;case 22:if(n=i.memoizedState!==null||Co,!n){t=t!==null&&t.memoizedState!==null||De,o=Co;var s=De;Co=n,(De=t)&&!s?Uo(e,i,(i.subtreeFlags&8772)!==0):Wo(e,i),Co=o,De=s}break;case 30:break;default:Wo(e,i)}}function Cy(e){var t=e.alternate;t!==null&&(e.alternate=null,Cy(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&W_(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ve=null,Xi=!1;function To(e,t,i){for(i=i.child;i!==null;)Yy(e,t,i),i=i.sibling}function Yy(e,t,i){if(mn&&typeof mn.onCommitFiberUnmount=="function")try{mn.onCommitFiberUnmount($c,i)}catch{}switch(i.tag){case 26:De||ho(i,t),To(e,t,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:De||ho(i,t);var n=Ve,o=Xi;bs(i.type)&&(Ve=i.stateNode,Xi=!1),To(e,t,i),yc(i.stateNode),Ve=n,Xi=o;break;case 5:De||ho(i,t);case 6:if(n=Ve,o=Xi,Ve=null,To(e,t,i),Ve=n,Xi=o,Ve!==null)if(Xi)try{(Ve.nodeType===9?Ve.body:Ve.nodeName==="HTML"?Ve.ownerDocument.body:Ve).removeChild(i.stateNode)}catch(s){xe(i,t,s)}else try{Ve.removeChild(i.stateNode)}catch(s){xe(i,t,s)}break;case 18:Ve!==null&&(Xi?(e=Ve,GO(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,i.stateNode),tu(e)):GO(Ve,i.stateNode));break;case 4:n=Ve,o=Xi,Ve=i.stateNode.containerInfo,Xi=!0,To(e,t,i),Ve=n,Xi=o;break;case 0:case 11:case 14:case 15:Cs(2,i,t),De||Cs(4,i,t),To(e,t,i);break;case 1:De||(ho(i,t),n=i.stateNode,typeof n.componentWillUnmount=="function"&&Ny(i,t,n)),To(e,t,i);break;case 21:To(e,t,i);break;case 22:De=(n=De)||i.memoizedState!==null,To(e,t,i),De=n;break;default:To(e,t,i)}}function Jy(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{tu(e)}catch(i){xe(t,t.return,i)}}}function by(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{tu(e)}catch(i){xe(t,t.return,i)}}function iK(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new gO),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new gO),t;default:throw Error(X(435,e.tag))}}function cx(e,t){var i=iK(e);t.forEach(function(n){if(!i.has(n)){i.add(n);var o=xK.bind(null,e,n);n.then(o,o)}})}function Hi(e,t){var i=t.deletions;if(i!==null)for(var n=0;n<i.length;n++){var o=i[n],s=e,r=t,a=r;t:for(;a!==null;){switch(a.tag){case 27:if(bs(a.type)){Ve=a.stateNode,Xi=!1;break t}break;case 5:Ve=a.stateNode,Xi=!1;break t;case 3:case 4:Ve=a.stateNode.containerInfo,Xi=!0;break t}a=a.return}if(Ve===null)throw Error(X(160));Yy(s,r,o),Ve=null,Xi=!1,s=o.alternate,s!==null&&(s.return=null),o.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)zy(t,e),t=t.sibling}var Qn=null;function zy(e,t){var i=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Hi(t,e),Ai(e),n&4&&(Cs(3,e,e.return),Ac(3,e),Cs(5,e,e.return));break;case 1:Hi(t,e),Ai(e),n&512&&(De||i===null||ho(i,i.return)),n&64&&Co&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(i=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=i===null?n:i.concat(n))));break;case 26:var o=Qn;if(Hi(t,e),Ai(e),n&512&&(De||i===null||ho(i,i.return)),n&4){var s=i!==null?i.memoizedState:null;if(n=e.memoizedState,i===null)if(n===null)if(e.stateNode===null){t:{n=e.type,i=e.memoizedProps,o=o.ownerDocument||o;e:switch(n){case"title":s=o.getElementsByTagName("title")[0],(!s||s[Jc]||s[Mi]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=o.createElement(n),o.head.insertBefore(s,o.querySelector("head > title"))),Ii(s,n,i),s[Mi]=e,hi(s),n=s;break t;case"link":var r=$O("link","href",o).get(n+(i.href||""));if(r){for(var a=0;a<r.length;a++)if(s=r[a],s.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&s.getAttribute("rel")===(i.rel==null?null:i.rel)&&s.getAttribute("title")===(i.title==null?null:i.title)&&s.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){r.splice(a,1);break e}}s=o.createElement(n),Ii(s,n,i),o.head.appendChild(s);break;case"meta":if(r=$O("meta","content",o).get(n+(i.content||""))){for(a=0;a<r.length;a++)if(s=r[a],s.getAttribute("content")===(i.content==null?null:""+i.content)&&s.getAttribute("name")===(i.name==null?null:i.name)&&s.getAttribute("property")===(i.property==null?null:i.property)&&s.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&s.getAttribute("charset")===(i.charSet==null?null:i.charSet)){r.splice(a,1);break e}}s=o.createElement(n),Ii(s,n,i),o.head.appendChild(s);break;default:throw Error(X(468,n))}s[Mi]=e,hi(s),n=s}e.stateNode=n}else CO(o,e.type,e.stateNode);else e.stateNode=UO(o,n,e.memoizedProps);else s!==n?(s===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):s.count--,n===null?CO(o,e.type,e.stateNode):UO(o,n,e.memoizedProps)):n===null&&e.stateNode!==null&&vd(e,e.memoizedProps,i.memoizedProps)}break;case 27:Hi(t,e),Ai(e),n&512&&(De||i===null||ho(i,i.return)),i!==null&&n&4&&vd(e,e.memoizedProps,i.memoizedProps);break;case 5:if(Hi(t,e),Ai(e),n&512&&(De||i===null||ho(i,i.return)),e.flags&32){o=e.stateNode;try{Aa(o,"")}catch(g){xe(e,e.return,g)}}n&4&&e.stateNode!=null&&(o=e.memoizedProps,vd(e,o,i!==null?i.memoizedProps:o)),n&1024&&(Kd=!0);break;case 6:if(Hi(t,e),Ai(e),n&4){if(e.stateNode===null)throw Error(X(162));n=e.memoizedProps,i=e.stateNode;try{i.nodeValue=n}catch(g){xe(e,e.return,g)}}break;case 3:if(vx=null,o=Qn,Qn=th(t.containerInfo),Hi(t,e),Qn=o,Ai(e),n&4&&i!==null&&i.memoizedState.isDehydrated)try{tu(t.containerInfo)}catch(g){xe(e,e.return,g)}Kd&&(Kd=!1,Hy(e));break;case 4:n=Qn,Qn=th(e.stateNode.containerInfo),Hi(t,e),Ai(e),Qn=n;break;case 12:Hi(t,e),Ai(e);break;case 31:Hi(t,e),Ai(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,cx(e,n)));break;case 13:Hi(t,e),Ai(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(_h=hn()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,cx(e,n)));break;case 22:o=e.memoizedState!==null;var u=i!==null&&i.memoizedState!==null,c=Co,l=De;if(Co=c||o,De=l||u,Hi(t,e),De=l,Co=c,Ai(e),n&8192)t:for(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,o&&(i===null||u||Co||De||Ir(e)),i=null,t=e;;){if(t.tag===5||t.tag===26){if(i===null){u=i=t;try{if(s=u.stateNode,o)r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{a=u.stateNode;var x=u.memoizedProps.style,h=x!=null&&x.hasOwnProperty("display")?x.display:null;a.style.display=h==null||typeof h=="boolean"?"":(""+h).trim()}}catch(g){xe(u,u.return,g)}}}else if(t.tag===6){if(i===null){u=t;try{u.stateNode.nodeValue=o?"":u.memoizedProps}catch(g){xe(u,u.return,g)}}}else if(t.tag===18){if(i===null){u=t;try{var m=u.stateNode;o?FO(m,!0):FO(u.stateNode,!1)}catch(g){xe(u,u.return,g)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;i===t&&(i=null),t=t.return}i===t&&(i=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(i=n.retryQueue,i!==null&&(n.retryQueue=null,cx(e,i))));break;case 19:Hi(t,e),Ai(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,cx(e,n)));break;case 30:break;case 21:break;default:Hi(t,e),Ai(e)}}function Ai(e){var t=e.flags;if(t&2){try{for(var i,n=e.return;n!==null;){if(Wy(n)){i=n;break}n=n.return}if(i==null)throw Error(X(160));switch(i.tag){case 27:var o=i.stateNode,s=Rd(e);Ax(e,s,o);break;case 5:var r=i.stateNode;i.flags&32&&(Aa(r,""),i.flags&=-33);var a=Rd(e);Ax(e,a,r);break;case 3:case 4:var u=i.stateNode.containerInfo,c=Rd(e);__(e,c,u);break;default:throw Error(X(161))}}catch(l){xe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Hy(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Hy(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Wo(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)$y(e,t.alternate,t),t=t.sibling}function Ir(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Cs(4,t,t.return),Ir(t);break;case 1:ho(t,t.return);var i=t.stateNode;typeof i.componentWillUnmount=="function"&&Ny(t,t.return,i),Ir(t);break;case 27:yc(t.stateNode);case 26:case 5:ho(t,t.return),Ir(t);break;case 22:t.memoizedState===null&&Ir(t);break;case 30:Ir(t);break;default:Ir(t)}e=e.sibling}}function Uo(e,t,i){for(i=i&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,o=e,s=t,r=s.flags;switch(s.tag){case 0:case 11:case 15:Uo(o,s,i),Ac(4,s);break;case 1:if(Uo(o,s,i),n=s,o=n.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(c){xe(n,n.return,c)}if(n=s,o=n.updateQueue,o!==null){var a=n.stateNode;try{var u=o.shared.hiddenCallbacks;if(u!==null)for(o.shared.hiddenCallbacks=null,o=0;o<u.length;o++)JI(u[o],a)}catch(c){xe(n,n.return,c)}}i&&r&64&&jy(s),Mc(s,s.return);break;case 27:Uy(s);case 26:case 5:Uo(o,s,i),i&&n===null&&r&4&&Ty(s),Mc(s,s.return);break;case 12:Uo(o,s,i);break;case 31:Uo(o,s,i),i&&r&4&&Jy(o,s);break;case 13:Uo(o,s,i),i&&r&4&&by(o,s);break;case 22:s.memoizedState===null&&Uo(o,s,i),Mc(s,s.return);break;case 30:break;default:Uo(o,s,i)}t=t.sibling}}function dg(e,t){var i=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==i&&(e!=null&&e.refCount++,i!=null&&zc(i))}function _g(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&zc(e))}function qn(e,t,i,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ay(e,t,i,n),t=t.sibling}function Ay(e,t,i,n){var o=t.flags;switch(t.tag){case 0:case 11:case 15:qn(e,t,i,n),o&2048&&Ac(9,t);break;case 1:qn(e,t,i,n);break;case 3:qn(e,t,i,n),o&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&zc(e)));break;case 12:if(o&2048){qn(e,t,i,n),e=t.stateNode;try{var s=t.memoizedProps,r=s.id,a=s.onPostCommit;typeof a=="function"&&a(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(u){xe(t,t.return,u)}}else qn(e,t,i,n);break;case 31:qn(e,t,i,n);break;case 13:qn(e,t,i,n);break;case 23:break;case 22:s=t.stateNode,r=t.alternate,t.memoizedState!==null?s._visibility&2?qn(e,t,i,n):pc(e,t):s._visibility&2?qn(e,t,i,n):(s._visibility|=2,ya(e,t,i,n,(t.subtreeFlags&10256)!==0||!1)),o&2048&&dg(r,t);break;case 24:qn(e,t,i,n),o&2048&&_g(t.alternate,t);break;default:qn(e,t,i,n)}}function ya(e,t,i,n,o){for(o=o&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,r=t,a=i,u=n,c=r.flags;switch(r.tag){case 0:case 11:case 15:ya(s,r,a,u,o),Ac(8,r);break;case 23:break;case 22:var l=r.stateNode;r.memoizedState!==null?l._visibility&2?ya(s,r,a,u,o):pc(s,r):(l._visibility|=2,ya(s,r,a,u,o)),o&&c&2048&&dg(r.alternate,r);break;case 24:ya(s,r,a,u,o),o&&c&2048&&_g(r.alternate,r);break;default:ya(s,r,a,u,o)}t=t.sibling}}function pc(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var i=e,n=t,o=n.flags;switch(n.tag){case 22:pc(i,n),o&2048&&dg(n.alternate,n);break;case 24:pc(i,n),o&2048&&_g(n.alternate,n);break;default:pc(i,n)}t=t.sibling}}var lc=8192;function Ia(e,t,i){if(e.subtreeFlags&lc)for(e=e.child;e!==null;)Xy(e,t,i),e=e.sibling}function Xy(e,t,i){switch(e.tag){case 26:Ia(e,t,i),e.flags&lc&&e.memoizedState!==null&&CK(i,Qn,e.memoizedState,e.memoizedProps);break;case 5:Ia(e,t,i);break;case 3:case 4:var n=Qn;Qn=th(e.stateNode.containerInfo),Ia(e,t,i),Qn=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=lc,lc=16777216,Ia(e,t,i),lc=n):Ia(e,t,i));break;default:Ia(e,t,i)}}function qy(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function nc(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var i=0;i<t.length;i++){var n=t[i];xi=n,By(n,e)}qy(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Qy(e),e=e.sibling}function Qy(e){switch(e.tag){case 0:case 11:case 15:nc(e),e.flags&2048&&Cs(9,e,e.return);break;case 3:nc(e);break;case 12:nc(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Zx(e)):nc(e);break;default:nc(e)}}function Zx(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var i=0;i<t.length;i++){var n=t[i];xi=n,By(n,e)}qy(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Cs(8,t,t.return),Zx(t);break;case 22:i=t.stateNode,i._visibility&2&&(i._visibility&=-3,Zx(t));break;default:Zx(t)}e=e.sibling}}function By(e,t){for(;xi!==null;){var i=xi;switch(i.tag){case 0:case 11:case 15:Cs(8,i,t);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var n=i.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:zc(i.memoizedState.cache)}if(n=i.child,n!==null)n.return=i,xi=n;else t:for(i=e;xi!==null;){n=xi;var o=n.sibling,s=n.return;if(Cy(n),n===i){xi=null;break t}if(o!==null){o.return=s,xi=o;break t}xi=s}}}var nK={getCacheForType:function(e){var t=Oi(Pe),i=t.data.get(e);return i===void 0&&(i=e(),t.data.set(e,i)),i},cacheSignal:function(){return Oi(Pe).controller.signal}},oK=typeof WeakMap=="function"?WeakMap:Map,ne=0,ke=null,Ht=null,At=0,le=0,un=null,ws=!1,su=!1,gg=!1,Do=0,Ce=0,Ys=0,vr=0,kg=0,xn=0,Ba=0,Oc=null,qi=null,g_=!1,_h=0,Dy=0,Xx=1/0,qx=null,Fs=null,oi=0,js=null,Da=null,Ao=0,k_=0,M_=null,Py=null,Ic=0,p_=null;function dn(){return ne&2&&At!==0?At&-At:Rt.T!==null?pg():aI()}function Ly(){if(xn===0)if(!(At&536870912)||Xt){var e=Ll;Ll<<=1,!(Ll&3932160)&&(Ll=262144),xn=e}else xn=536870912;return e=gn.current,e!==null&&(e.flags|=32),xn}function Qi(e,t,i){(e===ke&&(le===2||le===9)||e.cancelPendingCommit!==null)&&(Pa(e,0),vs(e,At,xn,!1)),Yc(e,i),(!(ne&2)||e!==ke)&&(e===ke&&(!(ne&2)&&(vr|=i),Ce===4&&vs(e,At,xn,!1)),_o(e))}function tS(e,t,i){if(ne&6)throw Error(X(327));var n=!i&&(t&127)===0&&(t&e.expiredLanes)===0||Cc(e,t),o=n?aK(e,t):Ed(e,t,!0),s=n;do{if(o===0){su&&!n&&vs(e,t,0,!1);break}else{if(i=e.current.alternate,s&&!sK(i)){o=Ed(e,t,!1),s=!1;continue}if(o===2){if(s=t,e.errorRecoveryDisabledLanes&s)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var a=e;o=Oc;var u=a.current.memoizedState.isDehydrated;if(u&&(Pa(a,r).flags|=256),r=Ed(a,r,!1),r!==2){if(gg&&!u){a.errorRecoveryDisabledLanes|=s,vr|=s,o=4;break t}s=qi,qi=o,s!==null&&(qi===null?qi=s:qi.push.apply(qi,s))}o=r}if(s=!1,o!==2)continue}}if(o===1){Pa(e,0),vs(e,t,0,!0);break}t:{switch(n=e,s=o,s){case 0:case 1:throw Error(X(345));case 4:if((t&4194048)!==t)break;case 6:vs(n,t,xn,!ws);break t;case 2:qi=null;break;case 3:case 5:break;default:throw Error(X(329))}if((t&62914560)===t&&(o=_h+300-hn(),10<o)){if(vs(n,t,xn,!ws),sh(n,0,!0)!==0)break t;Ao=t,n.timeoutHandle=pS(kO.bind(null,n,i,qi,qx,g_,t,xn,vr,Ba,ws,s,"Throttled",-0,0),o);break t}kO(n,i,qi,qx,g_,t,xn,vr,Ba,ws,s,null,-0,0)}}break}while(!0);_o(e)}function kO(e,t,i,n,o,s,r,a,u,c,l,x,h,m){if(e.timeoutHandle=-1,x=t.subtreeFlags,x&8192||(x&16785408)===16785408){x={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Jo},Xy(t,s,x);var g=(s&62914560)===s?_h-hn():(s&4194048)===s?Dy-hn():0;if(g=YK(x,g),g!==null){Ao=s,e.cancelPendingCommit=g(pO.bind(null,e,t,s,i,n,o,r,a,u,l,x,null,h,m)),vs(e,s,r,!c);return}}pO(e,t,s,i,n,o,r,a,u)}function sK(e){for(var t=e;;){var i=t.tag;if((i===0||i===11||i===15)&&t.flags&16384&&(i=t.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var n=0;n<i.length;n++){var o=i[n],s=o.getSnapshot;o=o.value;try{if(!_n(s(),o))return!1}catch{return!1}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vs(e,t,i,n){t&=~kg,t&=~vr,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var o=t;0<o;){var s=31-fn(o),r=1<<s;n[s]=-1,o&=~r}i!==0&&oI(e,i,t)}function gh(){return ne&6?!0:(Xc(0,!1),!1)}function Mg(){if(Ht!==null){if(le===0)var e=Ht.return;else e=Ht,bo=Wr=null,og(e),Ya=null,Ec=0,e=Ht;for(;e!==null;)Fy(e.alternate,e),e=e.return;Ht=null}}function Pa(e,t){var i=e.timeoutHandle;i!==-1&&(e.timeoutHandle=-1,yK(i)),i=e.cancelPendingCommit,i!==null&&(e.cancelPendingCommit=null,i()),Ao=0,Mg(),ke=e,Ht=i=zo(e.current,null),At=t,le=0,un=null,ws=!1,su=Cc(e,t),gg=!1,Ba=xn=kg=vr=Ys=Ce=0,qi=Oc=null,g_=!1,t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var o=31-fn(n),s=1<<o;t|=e[o],n&=~s}return Do=t,ch(),i}function eS(e,t){Tt=null,Rt.H=Gc,t===ou||t===xh?(t=Bp(),le=3):t===D_?(t=Bp(),le=4):le=t===mg?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,un=t,Ht===null&&(Ce=1,zx(e,Nn(t,e.current)))}function iS(){var e=gn.current;return e===null?!0:(At&4194048)===At?Wn===null:(At&62914560)===At||At&536870912?e===Wn:!1}function nS(){var e=Rt.H;return Rt.H=Gc,e===null?Gc:e}function oS(){var e=Rt.A;return Rt.A=nK,e}function Qx(){Ce=4,ws||(At&4194048)!==At&&gn.current!==null||(su=!0),!(Ys&134217727)&&!(vr&134217727)||ke===null||vs(ke,At,xn,!1)}function Ed(e,t,i){var n=ne;ne|=2;var o=nS(),s=oS();(ke!==e||At!==t)&&(qx=null,Pa(e,t)),t=!1;var r=Ce;t:do try{if(le!==0&&Ht!==null){var a=Ht,u=un;switch(le){case 8:Mg(),r=6;break t;case 3:case 2:case 9:case 6:gn.current===null&&(t=!0);var c=le;if(le=0,un=null,Ta(e,a,u,c),i&&su){r=0;break t}break;default:c=le,le=0,un=null,Ta(e,a,u,c)}}rK(),r=Ce;break}catch(l){eS(e,l)}while(!0);return t&&e.shellSuspendCounter++,bo=Wr=null,ne=n,Rt.H=o,Rt.A=s,Ht===null&&(ke=null,At=0,ch()),r}function rK(){for(;Ht!==null;)sS(Ht)}function aK(e,t){var i=ne;ne|=2;var n=nS(),o=oS();ke!==e||At!==t?(qx=null,Xx=hn()+500,Pa(e,t)):su=Cc(e,t);t:do try{if(le!==0&&Ht!==null){t=Ht;var s=un;e:switch(le){case 1:le=0,un=null,Ta(e,t,s,1);break;case 2:case 9:if(Qp(s)){le=0,un=null,MO(t);break}t=function(){le!==2&&le!==9||ke!==e||(le=7),_o(e)},s.then(t,t);break t;case 3:le=7;break t;case 4:le=5;break t;case 7:Qp(s)?(le=0,un=null,MO(t)):(le=0,un=null,Ta(e,t,s,7));break;case 5:var r=null;switch(Ht.tag){case 26:r=Ht.memoizedState;case 5:case 27:var a=Ht;if(r?ZS(r):a.stateNode.complete){le=0,un=null;var u=a.sibling;if(u!==null)Ht=u;else{var c=a.return;c!==null?(Ht=c,kh(c)):Ht=null}break e}}le=0,un=null,Ta(e,t,s,5);break;case 6:le=0,un=null,Ta(e,t,s,6);break;case 8:Mg(),Ce=6;break t;default:throw Error(X(462))}}uK();break}catch(l){eS(e,l)}while(!0);return bo=Wr=null,Rt.H=n,Rt.A=o,ne=i,Ht!==null?0:(ke=null,At=0,ch(),Ce)}function uK(){for(;Ht!==null&&!V5();)sS(Ht)}function sS(e){var t=Gy(e.alternate,e,Do);e.memoizedProps=e.pendingProps,t===null?kh(e):Ht=t}function MO(e){var t=e,i=t.alternate;switch(t.tag){case 15:case 0:t=hO(i,t,t.pendingProps,t.type,void 0,At);break;case 11:t=hO(i,t,t.pendingProps,t.type.render,t.ref,At);break;case 5:og(t);default:Fy(i,t),t=Ht=FI(t,Do),t=Gy(i,t,Do)}e.memoizedProps=e.pendingProps,t===null?kh(e):Ht=t}function Ta(e,t,i,n){bo=Wr=null,og(t),Ya=null,Ec=0;var o=t.return;try{if(BR(e,o,t,i,At)){Ce=1,zx(e,Nn(i,e.current)),Ht=null;return}}catch(s){if(o!==null)throw Ht=o,s;Ce=1,zx(e,Nn(i,e.current)),Ht=null;return}t.flags&32768?(Xt||n===1?e=!0:su||At&536870912?e=!1:(ws=e=!0,(n===2||n===9||n===3||n===6)&&(n=gn.current,n!==null&&n.tag===13&&(n.flags|=16384))),rS(t,e)):kh(t)}function kh(e){var t=e;do{if(t.flags&32768){rS(t,ws);return}e=t.return;var i=LR(t.alternate,t,Do);if(i!==null){Ht=i;return}if(t=t.sibling,t!==null){Ht=t;return}Ht=t=e}while(t!==null);Ce===0&&(Ce=5)}function rS(e,t){do{var i=tK(e.alternate,e);if(i!==null){i.flags&=32767,Ht=i;return}if(i=e.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!t&&(e=e.sibling,e!==null)){Ht=e;return}Ht=e=i}while(e!==null);Ce=6,Ht=null}function pO(e,t,i,n,o,s,r,a,u){e.cancelPendingCommit=null;do Mh();while(oi!==0);if(ne&6)throw Error(X(327));if(t!==null){if(t===e.current)throw Error(X(177));if(s=t.lanes|t.childLanes,s|=z_,Y5(e,i,s,r,a,u),e===ke&&(Ht=ke=null,At=0),Da=t,js=e,Ao=i,k_=s,M_=o,Py=n,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,hK(Fx,function(){return xS(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,t.subtreeFlags&13878||n){n=Rt.T,Rt.T=null,o=oe.p,oe.p=2,r=ne,ne|=4;try{eK(e,t,i)}finally{ne=r,oe.p=o,Rt.T=n}}oi=1,aS(),uS(),cS()}}function aS(){if(oi===1){oi=0;var e=js,t=Da,i=(t.flags&13878)!==0;if(t.subtreeFlags&13878||i){i=Rt.T,Rt.T=null;var n=oe.p;oe.p=2;var o=ne;ne|=4;try{zy(t,e);var s=S_,r=ZI(e.containerInfo),a=s.focusedElem,u=s.selectionRange;if(r!==a&&a&&a.ownerDocument&&SI(a.ownerDocument.documentElement,a)){if(u!==null&&b_(a)){var c=u.start,l=u.end;if(l===void 0&&(l=c),"selectionStart"in a)a.selectionStart=c,a.selectionEnd=Math.min(l,a.value.length);else{var x=a.ownerDocument||document,h=x&&x.defaultView||window;if(h.getSelection){var m=h.getSelection(),g=a.textContent.length,_=Math.min(u.start,g),d=u.end===void 0?_:Math.min(u.end,g);!m.extend&&_>d&&(r=d,d=_,_=r);var f=Jp(a,_),k=Jp(a,d);if(f&&k&&(m.rangeCount!==1||m.anchorNode!==f.node||m.anchorOffset!==f.offset||m.focusNode!==k.node||m.focusOffset!==k.offset)){var M=x.createRange();M.setStart(f.node,f.offset),m.removeAllRanges(),_>d?(m.addRange(M),m.extend(k.node,k.offset)):(M.setEnd(k.node,k.offset),m.addRange(M))}}}}for(x=[],m=a;m=m.parentNode;)m.nodeType===1&&x.push({element:m,left:m.scrollLeft,top:m.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<x.length;a++){var p=x[a];p.element.scrollLeft=p.left,p.element.scrollTop=p.top}}nh=!!y_,S_=y_=null}finally{ne=o,oe.p=n,Rt.T=i}}e.current=t,oi=2}}function uS(){if(oi===2){oi=0;var e=js,t=Da,i=(t.flags&8772)!==0;if(t.subtreeFlags&8772||i){i=Rt.T,Rt.T=null;var n=oe.p;oe.p=2;var o=ne;ne|=4;try{$y(e,t.alternate,t)}finally{ne=o,oe.p=n,Rt.T=i}}oi=3}}function cS(){if(oi===4||oi===3){oi=0,G5();var e=js,t=Da,i=Ao,n=Py;t.subtreeFlags&10256||t.flags&10256?oi=5:(oi=0,Da=js=null,lS(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&(Fs=null),T_(i),t=t.stateNode,mn&&typeof mn.onCommitFiberRoot=="function")try{mn.onCommitFiberRoot($c,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=Rt.T,o=oe.p,oe.p=2,Rt.T=null;try{for(var s=e.onRecoverableError,r=0;r<n.length;r++){var a=n[r];s(a.value,{componentStack:a.stack})}}finally{Rt.T=t,oe.p=o}}Ao&3&&Mh(),_o(e),o=e.pendingLanes,i&261930&&o&42?e===p_?Ic++:(Ic=0,p_=e):Ic=0,Xc(0,!1)}}function lS(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,zc(t)))}function Mh(){return aS(),uS(),cS(),xS()}function xS(){if(oi!==5)return!1;var e=js,t=k_;k_=0;var i=T_(Ao),n=Rt.T,o=oe.p;try{oe.p=32>i?32:i,Rt.T=null,i=M_,M_=null;var s=js,r=Ao;if(oi=0,Da=js=null,Ao=0,ne&6)throw Error(X(331));var a=ne;if(ne|=4,Qy(s.current),Ay(s,s.current,r,i),ne=a,Xc(0,!1),mn&&typeof mn.onPostCommitFiberRoot=="function")try{mn.onPostCommitFiberRoot($c,s)}catch{}return!0}finally{oe.p=o,Rt.T=n,lS(e,t)}}function OO(e,t,i){t=Nn(i,t),t=m_(e.stateNode,t,2),e=Gs(e,t,2),e!==null&&(Yc(e,2),_o(e))}function xe(e,t,i){if(e.tag===3)OO(e,e,i);else for(;t!==null;){if(t.tag===3){OO(t,e,i);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Fs===null||!Fs.has(n))){e=Nn(i,e),i=wy(2),n=Gs(t,i,2),n!==null&&(vy(i,n,t,e),Yc(n,2),_o(n));break}}t=t.return}}function Vd(e,t,i){var n=e.pingCache;if(n===null){n=e.pingCache=new oK;var o=new Set;n.set(t,o)}else o=n.get(t),o===void 0&&(o=new Set,n.set(t,o));o.has(i)||(gg=!0,o.add(i),e=cK.bind(null,e,t,i),t.then(e,e))}function cK(e,t,i){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&i,e.warmLanes&=~i,ke===e&&(At&i)===i&&(Ce===4||Ce===3&&(At&62914560)===At&&300>hn()-_h?!(ne&2)&&Pa(e,0):kg|=i,Ba===At&&(Ba=0)),_o(e)}function hS(e,t){t===0&&(t=nI()),e=Tr(e,t),e!==null&&(Yc(e,t),_o(e))}function lK(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),hS(e,i)}function xK(e,t){var i=0;switch(e.tag){case 31:case 13:var n=e.stateNode,o=e.memoizedState;o!==null&&(i=o.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(X(314))}n!==null&&n.delete(t),hS(e,i)}function hK(e,t){return j_(e,t)}var Bx=null,Sa=null,O_=!1,Dx=!1,Gd=!1,Rs=0;function _o(e){e!==Sa&&e.next===null&&(Sa===null?Bx=Sa=e:Sa=Sa.next=e),Dx=!0,O_||(O_=!0,fK())}function Xc(e,t){if(!Gd&&Dx){Gd=!0;do for(var i=!1,n=Bx;n!==null;){if(!t)if(e!==0){var o=n.pendingLanes;if(o===0)var s=0;else{var r=n.suspendedLanes,a=n.pingedLanes;s=(1<<31-fn(42|e)+1)-1,s&=o&~(r&~a),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(i=!0,IO(n,s))}else s=At,s=sh(n,n===ke?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),!(s&3)||Cc(n,s)||(i=!0,IO(n,s));n=n.next}while(i);Gd=!1}}function mK(){mS()}function mS(){Dx=O_=!1;var e=0;Rs!==0&&IK()&&(e=Rs);for(var t=hn(),i=null,n=Bx;n!==null;){var o=n.next,s=fS(n,t);s===0?(n.next=null,i===null?Bx=o:i.next=o,o===null&&(Sa=i)):(i=n,(e!==0||s&3)&&(Dx=!0)),n=o}oi!==0&&oi!==5||Xc(e,!1),Rs!==0&&(Rs=0)}function fS(e,t){for(var i=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var r=31-fn(s),a=1<<r,u=o[r];u===-1?(!(a&i)||a&n)&&(o[r]=C5(a,t)):u<=t&&(e.expiredLanes|=a),s&=~a}if(t=ke,i=At,i=sh(e,e===t?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,i===0||e===t&&(le===2||le===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&ad(n),e.callbackNode=null,e.callbackPriority=0;if(!(i&3)||Cc(e,i)){if(t=i&-i,t===e.callbackPriority)return t;switch(n!==null&&ad(n),T_(i)){case 2:case 8:i=eI;break;case 32:i=Fx;break;case 268435456:i=iI;break;default:i=Fx}return n=dS.bind(null,e),i=j_(i,n),e.callbackPriority=t,e.callbackNode=i,t}return n!==null&&n!==null&&ad(n),e.callbackPriority=2,e.callbackNode=null,2}function dS(e,t){if(oi!==0&&oi!==5)return e.callbackNode=null,e.callbackPriority=0,null;var i=e.callbackNode;if(Mh()&&e.callbackNode!==i)return null;var n=At;return n=sh(e,e===ke?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(tS(e,n,t),fS(e,hn()),e.callbackNode!=null&&e.callbackNode===i?dS.bind(null,e):null)}function IO(e,t){if(Mh())return null;tS(e,t,!0)}function fK(){SK(function(){ne&6?j_(tI,mK):mS()})}function pg(){if(Rs===0){var e=Xa;e===0&&(e=Pl,Pl<<=1,!(Pl&261888)&&(Pl=256)),Rs=e}return Rs}function yO(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:_x(""+e)}function SO(e,t){var i=t.ownerDocument.createElement("input");return i.name=t.name,i.value=t.value,e.id&&i.setAttribute("form",e.id),t.parentNode.insertBefore(i,t),e=new FormData(e),i.parentNode.removeChild(i),e}function dK(e,t,i,n,o){if(t==="submit"&&i&&i.stateNode===o){var s=yO((o[Bi]||null).action),r=n.submitter;r&&(t=(t=r[Bi]||null)?yO(t.formAction):r.getAttribute("formAction"),t!==null&&(s=t,r=null));var a=new rh("action","action",null,n,o);e.push({event:a,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(Rs!==0){var u=r?SO(o,r):new FormData(o);x_(i,{pending:!0,data:u,method:o.method,action:s},null,u)}}else typeof s=="function"&&(a.preventDefault(),u=r?SO(o,r):new FormData(o),x_(i,{pending:!0,data:u,method:o.method,action:s},s,u))},currentTarget:o}]})}}for(lx=0;lx<Ld.length;lx++)xx=Ld[lx],ZO=xx.toLowerCase(),wO=xx[0].toUpperCase()+xx.slice(1),Bn(ZO,"on"+wO);var xx,ZO,wO,lx;Bn(vI,"onAnimationEnd");Bn(RI,"onAnimationIteration");Bn(KI,"onAnimationStart");Bn("dblclick","onDoubleClick");Bn("focusin","onFocus");Bn("focusout","onBlur");Bn(FR,"onTransitionRun");Bn(jR,"onTransitionStart");Bn(NR,"onTransitionCancel");Bn(EI,"onTransitionEnd");Ha("onMouseEnter",["mouseout","mouseover"]);Ha("onMouseLeave",["mouseout","mouseover"]);Ha("onPointerEnter",["pointerout","pointerover"]);Ha("onPointerLeave",["pointerout","pointerover"]);Fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_K=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fc));function _S(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var n=e[i],o=n.event;n=n.listeners;t:{var s=void 0;if(t)for(var r=n.length-1;0<=r;r--){var a=n[r],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==s&&o.isPropagationStopped())break t;s=a,o.currentTarget=c;try{s(o)}catch(l){Nx(l)}o.currentTarget=null,s=u}else for(r=0;r<n.length;r++){if(a=n[r],u=a.instance,c=a.currentTarget,a=a.listener,u!==s&&o.isPropagationStopped())break t;s=a,o.currentTarget=c;try{s(o)}catch(l){Nx(l)}o.currentTarget=null,s=u}}}}function zt(e,t){var i=t[Hd];i===void 0&&(i=t[Hd]=new Set);var n=e+"__bubble";i.has(n)||(gS(t,e,2,!1),i.add(n))}function Fd(e,t,i){var n=0;t&&(n|=4),gS(i,e,n,t)}var hx="_reactListening"+Math.random().toString(36).slice(2);function Og(e){if(!e[hx]){e[hx]=!0,uI.forEach(function(i){i!=="selectionchange"&&(_K.has(i)||Fd(i,!1,e),Fd(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[hx]||(t[hx]=!0,Fd("selectionchange",!1,t))}}function gS(e,t,i,n){switch(ES(t)){case 2:var o=zK;break;case 8:o=HK;break;default:o=Zg}i=o.bind(null,t,i,e),o=void 0,!Bd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),n?o!==void 0?e.addEventListener(t,i,{capture:!0,passive:o}):e.addEventListener(t,i,!0):o!==void 0?e.addEventListener(t,i,{passive:o}):e.addEventListener(t,i,!1)}function jd(e,t,i,n,o){var s=n;if(!(t&1)&&!(t&2)&&n!==null)t:for(;;){if(n===null)return;var r=n.tag;if(r===3||r===4){var a=n.stateNode.containerInfo;if(a===o)break;if(r===4)for(r=n.return;r!==null;){var u=r.tag;if((u===3||u===4)&&r.stateNode.containerInfo===o)return;r=r.return}for(;a!==null;){if(r=va(a),r===null)return;if(u=r.tag,u===5||u===6||u===26||u===27){n=s=r;continue t}a=a.parentNode}}n=n.return}_I(function(){var c=s,l=$_(i),x=[];t:{var h=VI.get(e);if(h!==void 0){var m=rh,g=e;switch(e){case"keypress":if(kx(i)===0)break t;case"keydown":case"keyup":m=xR;break;case"focusin":g="focus",m=hd;break;case"focusout":g="blur",m=hd;break;case"beforeblur":case"afterblur":m=hd;break;case"click":if(i.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Fp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=L5;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=fR;break;case vI:case RI:case KI:m=iR;break;case EI:m=_R;break;case"scroll":case"scrollend":m=D5;break;case"wheel":m=kR;break;case"copy":case"cut":case"paste":m=oR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Np;break;case"toggle":case"beforetoggle":m=pR}var _=(t&4)!==0,d=!_&&(e==="scroll"||e==="scrollend"),f=_?h!==null?h+"Capture":null:h;_=[];for(var k=c,M;k!==null;){var p=k;if(M=p.stateNode,p=p.tag,p!==5&&p!==26&&p!==27||M===null||f===null||(p=Zc(k,f),p!=null&&_.push(jc(k,p,M))),d)break;k=k.return}0<_.length&&(h=new m(h,g,null,i,l),x.push({event:h,listeners:_}))}}if(!(t&7)){t:{if(h=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",h&&i!==Qd&&(g=i.relatedTarget||i.fromElement)&&(va(g)||g[eu]))break t;if((m||h)&&(h=l.window===l?l:(h=l.ownerDocument)?h.defaultView||h.parentWindow:window,m?(g=i.relatedTarget||i.toElement,m=c,g=g?va(g):null,g!==null&&(d=Uc(g),_=g.tag,g!==d||_!==5&&_!==27&&_!==6)&&(g=null)):(m=null,g=c),m!==g)){if(_=Fp,p="onMouseLeave",f="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(_=Np,p="onPointerLeave",f="onPointerEnter",k="pointer"),d=m==null?h:uc(m),M=g==null?h:uc(g),h=new _(p,k+"leave",m,i,l),h.target=d,h.relatedTarget=M,p=null,va(l)===c&&(_=new _(f,k+"enter",g,i,l),_.target=M,_.relatedTarget=d,p=_),d=p,m&&g)e:{for(_=gK,f=m,k=g,M=0,p=f;p;p=_(p))M++;p=0;for(var I=k;I;I=_(I))p++;for(;0<M-p;)f=_(f),M--;for(;0<p-M;)k=_(k),p--;for(;M--;){if(f===k||k!==null&&f===k.alternate){_=f;break e}f=_(f),k=_(k)}_=null}else _=null;m!==null&&vO(x,h,m,_,!1),g!==null&&d!==null&&vO(x,d,g,_,!0)}}t:{if(h=c?uc(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var w=$p;else if(Up(h))if(II)w=ER;else{w=RR;var Z=vR}else m=h.nodeName,!m||m.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?c&&U_(c.elementType)&&(w=$p):w=KR;if(w&&(w=w(e,c))){OI(x,w,i,l);break t}Z&&Z(e,h,c),e==="focusout"&&c&&h.type==="number"&&c.memoizedProps.value!=null&&qd(h,"number",h.value)}switch(Z=c?uc(c):window,e){case"focusin":(Up(Z)||Z.contentEditable==="true")&&(Ea=Z,Dd=c,mc=null);break;case"focusout":mc=Dd=Ea=null;break;case"mousedown":Pd=!0;break;case"contextmenu":case"mouseup":case"dragend":Pd=!1,bp(x,i,l);break;case"selectionchange":if(GR)break;case"keydown":case"keyup":bp(x,i,l)}var R;if(J_)t:{switch(e){case"compositionstart":var O="onCompositionStart";break t;case"compositionend":O="onCompositionEnd";break t;case"compositionupdate":O="onCompositionUpdate";break t}O=void 0}else Ka?MI(e,i)&&(O="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(O="onCompositionStart");O&&(kI&&i.locale!=="ko"&&(Ka||O!=="onCompositionStart"?O==="onCompositionEnd"&&Ka&&(R=gI()):(Zs=l,C_="value"in Zs?Zs.value:Zs.textContent,Ka=!0)),Z=Px(c,O),0<Z.length&&(O=new jp(O,e,null,i,l),x.push({event:O,listeners:Z}),R?O.data=R:(R=pI(i),R!==null&&(O.data=R)))),(R=IR?yR(e,i):SR(e,i))&&(O=Px(c,"onBeforeInput"),0<O.length&&(Z=new jp("onBeforeInput","beforeinput",null,i,l),x.push({event:Z,listeners:O}),Z.data=R)),dK(x,e,c,i,l)}_S(x,t)})}function jc(e,t,i){return{instance:e,listener:t,currentTarget:i}}function Px(e,t){for(var i=t+"Capture",n=[];e!==null;){var o=e,s=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||s===null||(o=Zc(e,i),o!=null&&n.unshift(jc(e,o,s)),o=Zc(e,t),o!=null&&n.push(jc(e,o,s))),e.tag===3)return n;e=e.return}return[]}function gK(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function vO(e,t,i,n,o){for(var s=t._reactName,r=[];i!==null&&i!==n;){var a=i,u=a.alternate,c=a.stateNode;if(a=a.tag,u!==null&&u===n)break;a!==5&&a!==26&&a!==27||c===null||(u=c,o?(c=Zc(i,s),c!=null&&r.unshift(jc(i,c,u))):o||(c=Zc(i,s),c!=null&&r.push(jc(i,c,u)))),i=i.return}r.length!==0&&e.push({event:t,listeners:r})}var kK=/\r\n?/g,MK=/\u0000|\uFFFD/g;function RO(e){return(typeof e=="string"?e:""+e).replace(kK,`
`).replace(MK,"")}function kS(e,t){return t=RO(t),RO(e)===t}function fe(e,t,i,n,o,s){switch(i){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||Aa(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&Aa(e,""+n);break;case"className":ex(e,"class",n);break;case"tabIndex":ex(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":ex(e,i,n);break;case"style":dI(e,n,s);break;case"data":if(t!=="object"){ex(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||i!=="href")){e.removeAttribute(i);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(i);break}n=_x(""+n),e.setAttribute(i,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(i==="formAction"?(t!=="input"&&fe(e,t,"name",o.name,o,null),fe(e,t,"formEncType",o.formEncType,o,null),fe(e,t,"formMethod",o.formMethod,o,null),fe(e,t,"formTarget",o.formTarget,o,null)):(fe(e,t,"encType",o.encType,o,null),fe(e,t,"method",o.method,o,null),fe(e,t,"target",o.target,o,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(i);break}n=_x(""+n),e.setAttribute(i,n);break;case"onClick":n!=null&&(e.onclick=Jo);break;case"onScroll":n!=null&&zt("scroll",e);break;case"onScrollEnd":n!=null&&zt("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(X(61));if(i=n.__html,i!=null){if(o.children!=null)throw Error(X(60));e.innerHTML=i}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}i=_x(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(i,""+n):e.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(i,""):e.removeAttribute(i);break;case"capture":case"download":n===!0?e.setAttribute(i,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(i,n):e.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(i,n):e.removeAttribute(i);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(i):e.setAttribute(i,n);break;case"popover":zt("beforetoggle",e),zt("toggle",e),dx(e,"popover",n);break;case"xlinkActuate":jo(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":jo(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":jo(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":jo(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":jo(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":jo(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":jo(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":jo(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":jo(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":dx(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=Q5.get(i)||i,dx(e,i,n))}}function I_(e,t,i,n,o,s){switch(i){case"style":dI(e,n,s);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(X(61));if(i=n.__html,i!=null){if(o.children!=null)throw Error(X(60));e.innerHTML=i}}break;case"children":typeof n=="string"?Aa(e,n):(typeof n=="number"||typeof n=="bigint")&&Aa(e,""+n);break;case"onScroll":n!=null&&zt("scroll",e);break;case"onScrollEnd":n!=null&&zt("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Jo);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!cI.hasOwnProperty(i))t:{if(i[0]==="o"&&i[1]==="n"&&(o=i.endsWith("Capture"),t=i.slice(2,o?i.length-7:void 0),s=e[Bi]||null,s=s!=null?s[i]:null,typeof s=="function"&&e.removeEventListener(t,s,o),typeof n=="function")){typeof s!="function"&&s!==null&&(i in e?e[i]=null:e.hasAttribute(i)&&e.removeAttribute(i)),e.addEventListener(t,n,o);break t}i in e?e[i]=n:n===!0?e.setAttribute(i,""):dx(e,i,n)}}}function Ii(e,t,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":zt("error",e),zt("load",e);var n=!1,o=!1,s;for(s in i)if(i.hasOwnProperty(s)){var r=i[s];if(r!=null)switch(s){case"src":n=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(X(137,t));default:fe(e,t,s,r,i,null)}}o&&fe(e,t,"srcSet",i.srcSet,i,null),n&&fe(e,t,"src",i.src,i,null);return;case"input":zt("invalid",e);var a=s=r=o=null,u=null,c=null;for(n in i)if(i.hasOwnProperty(n)){var l=i[n];if(l!=null)switch(n){case"name":o=l;break;case"type":r=l;break;case"checked":u=l;break;case"defaultChecked":c=l;break;case"value":s=l;break;case"defaultValue":a=l;break;case"children":case"dangerouslySetInnerHTML":if(l!=null)throw Error(X(137,t));break;default:fe(e,t,n,l,i,null)}}hI(e,s,a,u,c,r,o,!1);return;case"select":zt("invalid",e),n=r=s=null;for(o in i)if(i.hasOwnProperty(o)&&(a=i[o],a!=null))switch(o){case"value":s=a;break;case"defaultValue":r=a;break;case"multiple":n=a;default:fe(e,t,o,a,i,null)}t=s,i=r,e.multiple=!!n,t!=null?Ua(e,!!n,t,!1):i!=null&&Ua(e,!!n,i,!0);return;case"textarea":zt("invalid",e),s=o=n=null;for(r in i)if(i.hasOwnProperty(r)&&(a=i[r],a!=null))switch(r){case"value":n=a;break;case"defaultValue":o=a;break;case"children":s=a;break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(X(91));break;default:fe(e,t,r,a,i,null)}fI(e,n,o,s);return;case"option":for(u in i)if(i.hasOwnProperty(u)&&(n=i[u],n!=null))switch(u){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:fe(e,t,u,n,i,null)}return;case"dialog":zt("beforetoggle",e),zt("toggle",e),zt("cancel",e),zt("close",e);break;case"iframe":case"object":zt("load",e);break;case"video":case"audio":for(n=0;n<Fc.length;n++)zt(Fc[n],e);break;case"image":zt("error",e),zt("load",e);break;case"details":zt("toggle",e);break;case"embed":case"source":case"link":zt("error",e),zt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in i)if(i.hasOwnProperty(c)&&(n=i[c],n!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(X(137,t));default:fe(e,t,c,n,i,null)}return;default:if(U_(t)){for(l in i)i.hasOwnProperty(l)&&(n=i[l],n!==void 0&&I_(e,t,l,n,i,void 0));return}}for(a in i)i.hasOwnProperty(a)&&(n=i[a],n!=null&&fe(e,t,a,n,i,null))}function pK(e,t,i,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,s=null,r=null,a=null,u=null,c=null,l=null;for(m in i){var x=i[m];if(i.hasOwnProperty(m)&&x!=null)switch(m){case"checked":break;case"value":break;case"defaultValue":u=x;default:n.hasOwnProperty(m)||fe(e,t,m,null,n,x)}}for(var h in n){var m=n[h];if(x=i[h],n.hasOwnProperty(h)&&(m!=null||x!=null))switch(h){case"type":s=m;break;case"name":o=m;break;case"checked":c=m;break;case"defaultChecked":l=m;break;case"value":r=m;break;case"defaultValue":a=m;break;case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(X(137,t));break;default:m!==x&&fe(e,t,h,m,n,x)}}Xd(e,r,a,u,c,l,s,o);return;case"select":m=r=a=h=null;for(s in i)if(u=i[s],i.hasOwnProperty(s)&&u!=null)switch(s){case"value":break;case"multiple":m=u;default:n.hasOwnProperty(s)||fe(e,t,s,null,n,u)}for(o in n)if(s=n[o],u=i[o],n.hasOwnProperty(o)&&(s!=null||u!=null))switch(o){case"value":h=s;break;case"defaultValue":a=s;break;case"multiple":r=s;default:s!==u&&fe(e,t,o,s,n,u)}t=a,i=r,n=m,h!=null?Ua(e,!!i,h,!1):!!n!=!!i&&(t!=null?Ua(e,!!i,t,!0):Ua(e,!!i,i?[]:"",!1));return;case"textarea":m=h=null;for(a in i)if(o=i[a],i.hasOwnProperty(a)&&o!=null&&!n.hasOwnProperty(a))switch(a){case"value":break;case"children":break;default:fe(e,t,a,null,n,o)}for(r in n)if(o=n[r],s=i[r],n.hasOwnProperty(r)&&(o!=null||s!=null))switch(r){case"value":h=o;break;case"defaultValue":m=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(X(91));break;default:o!==s&&fe(e,t,r,o,n,s)}mI(e,h,m);return;case"option":for(var g in i)if(h=i[g],i.hasOwnProperty(g)&&h!=null&&!n.hasOwnProperty(g))switch(g){case"selected":e.selected=!1;break;default:fe(e,t,g,null,n,h)}for(u in n)if(h=n[u],m=i[u],n.hasOwnProperty(u)&&h!==m&&(h!=null||m!=null))switch(u){case"selected":e.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:fe(e,t,u,h,n,m)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var _ in i)h=i[_],i.hasOwnProperty(_)&&h!=null&&!n.hasOwnProperty(_)&&fe(e,t,_,null,n,h);for(c in n)if(h=n[c],m=i[c],n.hasOwnProperty(c)&&h!==m&&(h!=null||m!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(X(137,t));break;default:fe(e,t,c,h,n,m)}return;default:if(U_(t)){for(var d in i)h=i[d],i.hasOwnProperty(d)&&h!==void 0&&!n.hasOwnProperty(d)&&I_(e,t,d,void 0,n,h);for(l in n)h=n[l],m=i[l],!n.hasOwnProperty(l)||h===m||h===void 0&&m===void 0||I_(e,t,l,h,n,m);return}}for(var f in i)h=i[f],i.hasOwnProperty(f)&&h!=null&&!n.hasOwnProperty(f)&&fe(e,t,f,null,n,h);for(x in n)h=n[x],m=i[x],!n.hasOwnProperty(x)||h===m||h==null&&m==null||fe(e,t,x,h,n,m)}function KO(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function OK(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,i=performance.getEntriesByType("resource"),n=0;n<i.length;n++){var o=i[n],s=o.transferSize,r=o.initiatorType,a=o.duration;if(s&&a&&KO(r)){for(r=0,a=o.responseEnd,n+=1;n<i.length;n++){var u=i[n],c=u.startTime;if(c>a)break;var l=u.transferSize,x=u.initiatorType;l&&KO(x)&&(u=u.responseEnd,r+=l*(u<a?1:(a-c)/(u-c)))}if(--n,t+=8*(s+r)/(o.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var y_=null,S_=null;function Lx(e){return e.nodeType===9?e:e.ownerDocument}function EO(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function MS(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Z_(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Nd=null;function IK(){var e=window.event;return e&&e.type==="popstate"?e===Nd?!1:(Nd=e,!0):(Nd=null,!1)}var pS=typeof setTimeout=="function"?setTimeout:void 0,yK=typeof clearTimeout=="function"?clearTimeout:void 0,VO=typeof Promise=="function"?Promise:void 0,SK=typeof queueMicrotask=="function"?queueMicrotask:typeof VO<"u"?function(e){return VO.resolve(null).then(e).catch(ZK)}:pS;function ZK(e){setTimeout(function(){throw e})}function bs(e){return e==="head"}function GO(e,t){var i=t,n=0;do{var o=i.nextSibling;if(e.removeChild(i),o&&o.nodeType===8)if(i=o.data,i==="/$"||i==="/&"){if(n===0){e.removeChild(o),tu(t);return}n--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")n++;else if(i==="html")yc(e.ownerDocument.documentElement);else if(i==="head"){i=e.ownerDocument.head,yc(i);for(var s=i.firstChild;s;){var r=s.nextSibling,a=s.nodeName;s[Jc]||a==="SCRIPT"||a==="STYLE"||a==="LINK"&&s.rel.toLowerCase()==="stylesheet"||i.removeChild(s),s=r}}else i==="body"&&yc(e.ownerDocument.body);i=o}while(i);tu(t)}function FO(e,t){var i=e;e=0;do{var n=i.nextSibling;if(i.nodeType===1?t?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(t?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),n&&n.nodeType===8)if(i=n.data,i==="/$"){if(e===0)break;e--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||e++;i=n}while(i)}function w_(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var i=t;switch(t=t.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":w_(i),W_(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}e.removeChild(i)}}function wK(e,t,i,n){for(;e.nodeType===1;){var o=i;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Jc])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Un(e.nextSibling),e===null)break}return null}function vK(e,t,i){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Un(e.nextSibling),e===null))return null;return e}function OS(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Un(e.nextSibling),e===null))return null;return e}function v_(e){return e.data==="$?"||e.data==="$~"}function R_(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function RK(e,t){var i=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||i.readyState!=="loading")t();else{var n=function(){t(),i.removeEventListener("DOMContentLoaded",n)};i.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Un(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var K_=null;function jO(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"||i==="/&"){if(t===0)return Un(e.nextSibling);t--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||t++}e=e.nextSibling}return null}function NO(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(t===0)return e;t--}else i!=="/$"&&i!=="/&"||t++}e=e.previousSibling}return null}function IS(e,t,i){switch(t=Lx(i),e){case"html":if(e=t.documentElement,!e)throw Error(X(452));return e;case"head":if(e=t.head,!e)throw Error(X(453));return e;case"body":if(e=t.body,!e)throw Error(X(454));return e;default:throw Error(X(451))}}function yc(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);W_(e)}var $n=new Map,TO=new Set;function th(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Po=oe.d;oe.d={f:KK,r:EK,D:VK,C:GK,L:FK,m:jK,X:TK,S:NK,M:WK};function KK(){var e=Po.f(),t=gh();return e||t}function EK(e){var t=iu(e);t!==null&&t.tag===5&&t.type==="form"?dy(t):Po.r(e)}var ru=typeof document>"u"?null:document;function yS(e,t,i){var n=ru;if(n&&typeof t=="string"&&t){var o=jn(t);o='link[rel="'+e+'"][href="'+o+'"]',typeof i=="string"&&(o+='[crossorigin="'+i+'"]'),TO.has(o)||(TO.add(o),e={rel:e,crossOrigin:i,href:t},n.querySelector(o)===null&&(t=n.createElement("link"),Ii(t,"link",e),hi(t),n.head.appendChild(t)))}}function VK(e){Po.D(e),yS("dns-prefetch",e,null)}function GK(e,t){Po.C(e,t),yS("preconnect",e,t)}function FK(e,t,i){Po.L(e,t,i);var n=ru;if(n&&e&&t){var o='link[rel="preload"][as="'+jn(t)+'"]';t==="image"&&i&&i.imageSrcSet?(o+='[imagesrcset="'+jn(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(o+='[imagesizes="'+jn(i.imageSizes)+'"]')):o+='[href="'+jn(e)+'"]';var s=o;switch(t){case"style":s=La(e);break;case"script":s=au(e)}$n.has(s)||(e=Re({rel:"preload",href:t==="image"&&i&&i.imageSrcSet?void 0:e,as:t},i),$n.set(s,e),n.querySelector(o)!==null||t==="style"&&n.querySelector(qc(s))||t==="script"&&n.querySelector(Qc(s))||(t=n.createElement("link"),Ii(t,"link",e),hi(t),n.head.appendChild(t)))}}function jK(e,t){Po.m(e,t);var i=ru;if(i&&e){var n=t&&typeof t.as=="string"?t.as:"script",o='link[rel="modulepreload"][as="'+jn(n)+'"][href="'+jn(e)+'"]',s=o;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=au(e)}if(!$n.has(s)&&(e=Re({rel:"modulepreload",href:e},t),$n.set(s,e),i.querySelector(o)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(Qc(s)))return}n=i.createElement("link"),Ii(n,"link",e),hi(n),i.head.appendChild(n)}}}function NK(e,t,i){Po.S(e,t,i);var n=ru;if(n&&e){var o=Wa(n).hoistableStyles,s=La(e);t=t||"default";var r=o.get(s);if(!r){var a={loading:0,preload:null};if(r=n.querySelector(qc(s)))a.loading=5;else{e=Re({rel:"stylesheet",href:e,"data-precedence":t},i),(i=$n.get(s))&&Ig(e,i);var u=r=n.createElement("link");hi(u),Ii(u,"link",e),u._p=new Promise(function(c,l){u.onload=c,u.onerror=l}),u.addEventListener("load",function(){a.loading|=1}),u.addEventListener("error",function(){a.loading|=2}),a.loading|=4,wx(r,t,n)}r={type:"stylesheet",instance:r,count:1,state:a},o.set(s,r)}}}function TK(e,t){Po.X(e,t);var i=ru;if(i&&e){var n=Wa(i).hoistableScripts,o=au(e),s=n.get(o);s||(s=i.querySelector(Qc(o)),s||(e=Re({src:e,async:!0},t),(t=$n.get(o))&&yg(e,t),s=i.createElement("script"),hi(s),Ii(s,"link",e),i.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(o,s))}}function WK(e,t){Po.M(e,t);var i=ru;if(i&&e){var n=Wa(i).hoistableScripts,o=au(e),s=n.get(o);s||(s=i.querySelector(Qc(o)),s||(e=Re({src:e,async:!0,type:"module"},t),(t=$n.get(o))&&yg(e,t),s=i.createElement("script"),hi(s),Ii(s,"link",e),i.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(o,s))}}function WO(e,t,i,n){var o=(o=Ks.current)?th(o):null;if(!o)throw Error(X(446));switch(e){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(t=La(i.href),i=Wa(o).hoistableStyles,n=i.get(t),n||(n={type:"style",instance:null,count:0,state:null},i.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){e=La(i.href);var s=Wa(o).hoistableStyles,r=s.get(e);if(r||(o=o.ownerDocument||o,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,r),(s=o.querySelector(qc(e)))&&!s._p&&(r.instance=s,r.state.loading=5),$n.has(e)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},$n.set(e,i),s||UK(o,e,i,r.state))),t&&n===null)throw Error(X(528,""));return r}if(t&&n!==null)throw Error(X(529,""));return null;case"script":return t=i.async,i=i.src,typeof i=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=au(i),i=Wa(o).hoistableScripts,n=i.get(t),n||(n={type:"script",instance:null,count:0,state:null},i.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(X(444,e))}}function La(e){return'href="'+jn(e)+'"'}function qc(e){return'link[rel="stylesheet"]['+e+"]"}function SS(e){return Re({},e,{"data-precedence":e.precedence,precedence:null})}function UK(e,t,i,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),Ii(t,"link",i),hi(t),e.head.appendChild(t))}function au(e){return'[src="'+jn(e)+'"]'}function Qc(e){return"script[async]"+e}function UO(e,t,i){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+jn(i.href)+'"]');if(n)return t.instance=n,hi(n),n;var o=Re({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),hi(n),Ii(n,"style",o),wx(n,i.precedence,e),t.instance=n;case"stylesheet":o=La(i.href);var s=e.querySelector(qc(o));if(s)return t.state.loading|=4,t.instance=s,hi(s),s;n=SS(i),(o=$n.get(o))&&Ig(n,o),s=(e.ownerDocument||e).createElement("link"),hi(s);var r=s;return r._p=new Promise(function(a,u){r.onload=a,r.onerror=u}),Ii(s,"link",n),t.state.loading|=4,wx(s,i.precedence,e),t.instance=s;case"script":return s=au(i.src),(o=e.querySelector(Qc(s)))?(t.instance=o,hi(o),o):(n=i,(o=$n.get(s))&&(n=Re({},i),yg(n,o)),e=e.ownerDocument||e,o=e.createElement("script"),hi(o),Ii(o,"link",n),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(X(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(n=t.instance,t.state.loading|=4,wx(n,i.precedence,e));return t.instance}function wx(e,t,i){for(var n=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=n.length?n[n.length-1]:null,s=o,r=0;r<n.length;r++){var a=n[r];if(a.dataset.precedence===t)s=a;else if(s!==o)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=i.nodeType===9?i.head:i,t.insertBefore(e,t.firstChild))}function Ig(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function yg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var vx=null;function $O(e,t,i){if(vx===null){var n=new Map,o=vx=new Map;o.set(i,n)}else o=vx,n=o.get(i),n||(n=new Map,o.set(i,n));if(n.has(e))return n;for(n.set(e,null),i=i.getElementsByTagName(e),o=0;o<i.length;o++){var s=i[o];if(!(s[Jc]||s[Mi]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var r=s.getAttribute(t)||"";r=e+r;var a=n.get(r);a?a.push(s):n.set(r,[s])}}return n}function CO(e,t,i){e=e.ownerDocument||e,e.head.insertBefore(i,t==="title"?e.querySelector("head > title"):null)}function $K(e,t,i){if(i===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function ZS(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function CK(e,t,i,n){if(i.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&!(i.state.loading&4)){if(i.instance===null){var o=La(n.href),s=t.querySelector(qc(o));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=eh.bind(e),t.then(e,e)),i.state.loading|=4,i.instance=s,hi(s);return}s=t.ownerDocument||t,n=SS(n),(o=$n.get(o))&&Ig(n,o),s=s.createElement("link"),hi(s);var r=s;r._p=new Promise(function(a,u){r.onload=a,r.onerror=u}),Ii(s,"link",n),i.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(i,t),(t=i.state.preload)&&!(i.state.loading&3)&&(e.count++,i=eh.bind(e),t.addEventListener("load",i),t.addEventListener("error",i))}}var Td=0;function YK(e,t){return e.stylesheets&&e.count===0&&Rx(e,e.stylesheets),0<e.count||0<e.imgCount?function(i){var n=setTimeout(function(){if(e.stylesheets&&Rx(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&Td===0&&(Td=62500*OK());var o=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Rx(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>Td?50:800)+t);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(o)}}:null}function eh(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Rx(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ih=null;function Rx(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ih=new Map,t.forEach(JK,e),ih=null,eh.call(e))}function JK(e,t){if(!(t.state.loading&4)){var i=ih.get(e);if(i)var n=i.get(null);else{i=new Map,ih.set(e,i);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<o.length;s++){var r=o[s];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(i.set(r.dataset.precedence,r),n=r)}n&&i.set(null,n)}o=t.instance,r=o.getAttribute("data-precedence"),s=i.get(r)||n,s===n&&i.set(null,o),i.set(r,o),this.count++,n=eh.bind(this),o.addEventListener("load",n),o.addEventListener("error",n),s?s.parentNode.insertBefore(o,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),t.state.loading|=4}}var Nc={$$typeof:Yo,Provider:null,Consumer:null,_currentValue:yr,_currentValue2:yr,_threadCount:0};function bK(e,t,i,n,o,s,r,a,u){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ud(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ud(0),this.hiddenUpdates=ud(null),this.identifierPrefix=n,this.onUncaughtError=o,this.onCaughtError=s,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=u,this.incompleteTransitions=new Map}function wS(e,t,i,n,o,s,r,a,u,c,l,x){return e=new bK(e,t,i,r,u,c,l,x,a),t=1,s===!0&&(t|=24),s=ln(3,null,null,t),e.current=s,s.stateNode=e,t=Q_(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:n,isDehydrated:i,cache:t},P_(s),e}function vS(e){return e?(e=Fa,e):Fa}function RS(e,t,i,n,o,s){o=vS(o),n.context===null?n.context=o:n.pendingContext=o,n=Vs(t),n.payload={element:i},s=s===void 0?null:s,s!==null&&(n.callback=s),i=Gs(e,n,t),i!==null&&(Qi(i,e,t),dc(i,e,t))}function YO(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function Sg(e,t){YO(e,t),(e=e.alternate)&&YO(e,t)}function KS(e){if(e.tag===13||e.tag===31){var t=Tr(e,67108864);t!==null&&Qi(t,e,67108864),Sg(e,67108864)}}function JO(e){if(e.tag===13||e.tag===31){var t=dn();t=N_(t);var i=Tr(e,t);i!==null&&Qi(i,e,t),Sg(e,t)}}var nh=!0;function zK(e,t,i,n){var o=Rt.T;Rt.T=null;var s=oe.p;try{oe.p=2,Zg(e,t,i,n)}finally{oe.p=s,Rt.T=o}}function HK(e,t,i,n){var o=Rt.T;Rt.T=null;var s=oe.p;try{oe.p=8,Zg(e,t,i,n)}finally{oe.p=s,Rt.T=o}}function Zg(e,t,i,n){if(nh){var o=E_(n);if(o===null)jd(e,t,n,oh,i),bO(e,n);else if(XK(o,e,t,i,n))n.stopPropagation();else if(bO(e,n),t&4&&-1<AK.indexOf(e)){for(;o!==null;){var s=iu(o);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var r=pr(s.pendingLanes);if(r!==0){var a=s;for(a.pendingLanes|=2,a.entangledLanes|=2;r;){var u=1<<31-fn(r);a.entanglements[1]|=u,r&=~u}_o(s),!(ne&6)&&(Xx=hn()+500,Xc(0,!1))}}break;case 31:case 13:a=Tr(s,2),a!==null&&Qi(a,s,2),gh(),Sg(s,2)}if(s=E_(n),s===null&&jd(e,t,n,oh,i),s===o)break;o=s}o!==null&&n.stopPropagation()}else jd(e,t,n,null,i)}}function E_(e){return e=$_(e),wg(e)}var oh=null;function wg(e){if(oh=null,e=va(e),e!==null){var t=Uc(e);if(t===null)e=null;else{var i=t.tag;if(i===13){if(e=QO(t),e!==null)return e;e=null}else if(i===31){if(e=BO(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return oh=e,null}function ES(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(F5()){case tI:return 2;case eI:return 8;case Fx:case j5:return 32;case iI:return 268435456;default:return 32}default:return 32}}var V_=!1,Ns=null,Ts=null,Ws=null,Tc=new Map,Wc=new Map,ys=[],AK="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function bO(e,t){switch(e){case"focusin":case"focusout":Ns=null;break;case"dragenter":case"dragleave":Ts=null;break;case"mouseover":case"mouseout":Ws=null;break;case"pointerover":case"pointerout":Tc.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wc.delete(t.pointerId)}}function oc(e,t,i,n,o,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:i,eventSystemFlags:n,nativeEvent:s,targetContainers:[o]},t!==null&&(t=iu(t),t!==null&&KS(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function XK(e,t,i,n,o){switch(t){case"focusin":return Ns=oc(Ns,e,t,i,n,o),!0;case"dragenter":return Ts=oc(Ts,e,t,i,n,o),!0;case"mouseover":return Ws=oc(Ws,e,t,i,n,o),!0;case"pointerover":var s=o.pointerId;return Tc.set(s,oc(Tc.get(s)||null,e,t,i,n,o)),!0;case"gotpointercapture":return s=o.pointerId,Wc.set(s,oc(Wc.get(s)||null,e,t,i,n,o)),!0}return!1}function VS(e){var t=va(e.target);if(t!==null){var i=Uc(t);if(i!==null){if(t=i.tag,t===13){if(t=QO(i),t!==null){e.blockedOn=t,wp(e.priority,function(){JO(i)});return}}else if(t===31){if(t=BO(i),t!==null){e.blockedOn=t,wp(e.priority,function(){JO(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Kx(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=E_(e.nativeEvent);if(i===null){i=e.nativeEvent;var n=new i.constructor(i.type,i);Qd=n,i.target.dispatchEvent(n),Qd=null}else return t=iu(i),t!==null&&KS(t),e.blockedOn=i,!1;t.shift()}return!0}function zO(e,t,i){Kx(e)&&i.delete(t)}function qK(){V_=!1,Ns!==null&&Kx(Ns)&&(Ns=null),Ts!==null&&Kx(Ts)&&(Ts=null),Ws!==null&&Kx(Ws)&&(Ws=null),Tc.forEach(zO),Wc.forEach(zO)}function mx(e,t){e.blockedOn===t&&(e.blockedOn=null,V_||(V_=!0,si.unstable_scheduleCallback(si.unstable_NormalPriority,qK)))}var fx=null;function HO(e){fx!==e&&(fx=e,si.unstable_scheduleCallback(si.unstable_NormalPriority,function(){fx===e&&(fx=null);for(var t=0;t<e.length;t+=3){var i=e[t],n=e[t+1],o=e[t+2];if(typeof n!="function"){if(wg(n||i)===null)continue;break}var s=iu(i);s!==null&&(e.splice(t,3),t-=3,x_(s,{pending:!0,data:o,method:i.method,action:n},n,o))}}))}function tu(e){function t(u){return mx(u,e)}Ns!==null&&mx(Ns,e),Ts!==null&&mx(Ts,e),Ws!==null&&mx(Ws,e),Tc.forEach(t),Wc.forEach(t);for(var i=0;i<ys.length;i++){var n=ys[i];n.blockedOn===e&&(n.blockedOn=null)}for(;0<ys.length&&(i=ys[0],i.blockedOn===null);)VS(i),i.blockedOn===null&&ys.shift();if(i=(e.ownerDocument||e).$$reactFormReplay,i!=null)for(n=0;n<i.length;n+=3){var o=i[n],s=i[n+1],r=o[Bi]||null;if(typeof s=="function")r||HO(i);else if(r){var a=null;if(s&&s.hasAttribute("formAction")){if(o=s,r=s[Bi]||null)a=r.formAction;else if(wg(o)!==null)continue}else a=r.action;typeof a=="function"?i[n+1]=a:(i.splice(n,3),n-=3),HO(i)}}}function GS(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(r){return o=r})},focusReset:"manual",scroll:"manual"})}function t(){o!==null&&(o(),o=null),n||setTimeout(i,20)}function i(){if(!n&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,o=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(i,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),o!==null&&(o(),o=null)}}}function vg(e){this._internalRoot=e}ph.prototype.render=vg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(X(409));var i=t.current,n=dn();RS(i,n,e,t,null,null)};ph.prototype.unmount=vg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;RS(e.current,2,null,e,null,null),gh(),t[eu]=null}};function ph(e){this._internalRoot=e}ph.prototype.unstable_scheduleHydration=function(e){if(e){var t=aI();e={blockedOn:null,target:e,priority:t};for(var i=0;i<ys.length&&t!==0&&t<ys[i].priority;i++);ys.splice(i,0,e),i===0&&VS(e)}};var AO=XO.version;if(AO!=="19.2.3")throw Error(X(527,AO,"19.2.3"));oe.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(X(188)):(e=Object.keys(e).join(","),Error(X(268,e)));return e=w5(t),e=e!==null?DO(e):null,e=e===null?null:e.stateNode,e};var QK={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:Rt,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(sc=__REACT_DEVTOOLS_GLOBAL_HOOK__,!sc.isDisabled&&sc.supportsFiber))try{$c=sc.inject(QK),mn=sc}catch{}var sc;Oh.createRoot=function(e,t){if(!qO(e))throw Error(X(299));var i=!1,n="",o=yy,s=Sy,r=Zy;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=wS(e,1,!1,null,null,i,n,null,o,s,r,GS),e[eu]=t.current,Og(e),new vg(t)};Oh.hydrateRoot=function(e,t,i){if(!qO(e))throw Error(X(299));var n=!1,o="",s=yy,r=Sy,a=Zy,u=null;return i!=null&&(i.unstable_strictMode===!0&&(n=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(s=i.onUncaughtError),i.onCaughtError!==void 0&&(r=i.onCaughtError),i.onRecoverableError!==void 0&&(a=i.onRecoverableError),i.formState!==void 0&&(u=i.formState)),t=wS(e,1,!0,t,i??null,n,o,u,s,r,a,GS),t.context=vS(null),i=t.current,n=dn(),n=N_(n),o=Vs(n),o.callback=null,Gs(i,o,n),i=n,t.current.lanes=i,Yc(t,i),_o(t),e[eu]=t.current,Og(e),new ph(t)};Oh.version="19.2.3"});var TS=uo((wN,NS)=>{"use strict";function jS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jS)}catch(e){console.error(e)}}jS(),NS.exports=FS()});var gw=uo(gf=>{"use strict";var y0=Symbol.for("react.transitional.element"),S0=Symbol.for("react.fragment");function _w(e,t,i){var n=null;if(i!==void 0&&(n=""+i),t.key!==void 0&&(n=""+t.key),"key"in t){i={};for(var o in t)o!=="key"&&(i[o]=t[o])}else i=t;return t=i.ref,{$$typeof:y0,type:e,key:n,ref:t!==void 0?t:null,props:i}}gf.Fragment=S0;gf.jsx=_w;gf.jsxs=_w});var ui=uo((dU,kw)=>{"use strict";kw.exports=gw()});var Jv=me(Rn(),1),bv=me(TS(),1);var fa=me(Rn(),1);var BK="1.3.16";function $S(e,t,i){return Math.max(e,Math.min(t,i))}function DK(e,t,i){return(1-i)*e+i*t}function PK(e,t,i,n){return DK(e,t,1-Math.exp(-i*n))}function LK(e,t){return(e%t+t)%t}var t4=class{constructor(){dt(this,"isRunning",!1);dt(this,"value",0);dt(this,"from",0);dt(this,"to",0);dt(this,"currentTime",0);dt(this,"lerp");dt(this,"duration");dt(this,"easing");dt(this,"onUpdate")}advance(e){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=e;let i=$S(0,this.currentTime/this.duration,1);t=i>=1;let n=t?1:this.easing(i);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=PK(this.value,this.to,this.lerp*60,e),Math.round(this.value)===this.to&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(e,t,{lerp:i,duration:n,easing:o,onStart:s,onUpdate:r}){this.from=this.value=e,this.to=t,this.lerp=i,this.duration=n,this.easing=o,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=r}};function e4(e,t){let i;return function(...n){let o=this;clearTimeout(i),i=setTimeout(()=>{i=void 0,e.apply(o,n)},t)}}var i4=class{constructor(e,t,{autoResize:i=!0,debounce:n=250}={}){dt(this,"width",0);dt(this,"height",0);dt(this,"scrollHeight",0);dt(this,"scrollWidth",0);dt(this,"debouncedResize");dt(this,"wrapperResizeObserver");dt(this,"contentResizeObserver");dt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});dt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});dt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=e,this.content=t,i&&(this.debouncedResize=e4(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},CS=class{constructor(){dt(this,"events",{})}emit(e,...t){let i=this.events[e]||[];for(let n=0,o=i.length;n<o;n++)i[n]?.(...t)}on(e,t){return this.events[e]?.push(t)||(this.events[e]=[t]),()=>{this.events[e]=this.events[e]?.filter(i=>t!==i)}}off(e,t){this.events[e]=this.events[e]?.filter(i=>t!==i)}destroy(){this.events={}}},WS=100/6,zs={passive:!1},n4=class{constructor(e,t={wheelMultiplier:1,touchMultiplier:1}){dt(this,"touchStart",{x:0,y:0});dt(this,"lastDelta",{x:0,y:0});dt(this,"window",{width:0,height:0});dt(this,"emitter",new CS);dt(this,"onTouchStart",e=>{let{clientX:t,clientY:i}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=t,this.touchStart.y=i,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:e})});dt(this,"onTouchMove",e=>{let{clientX:t,clientY:i}=e.targetTouches?e.targetTouches[0]:e,n=-(t-this.touchStart.x)*this.options.touchMultiplier,o=-(i-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=i,this.lastDelta={x:n,y:o},this.emitter.emit("scroll",{deltaX:n,deltaY:o,event:e})});dt(this,"onTouchEnd",e=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})});dt(this,"onWheel",e=>{let{deltaX:t,deltaY:i,deltaMode:n}=e,o=n===1?WS:n===2?this.window.width:1,s=n===1?WS:n===2?this.window.height:1;t*=o,i*=s,t*=this.options.wheelMultiplier,i*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:i,event:e})});dt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=e,this.options=t,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,zs),this.element.addEventListener("touchstart",this.onTouchStart,zs),this.element.addEventListener("touchmove",this.onTouchMove,zs),this.element.addEventListener("touchend",this.onTouchEnd,zs)}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,zs),this.element.removeEventListener("touchstart",this.onTouchStart,zs),this.element.removeEventListener("touchmove",this.onTouchMove,zs),this.element.removeEventListener("touchend",this.onTouchEnd,zs)}},US=e=>Math.min(1,1.001-Math.pow(2,-10*e)),YS=class{constructor({wrapper:e=window,content:t=document.documentElement,eventsTarget:i=e,smoothWheel:n=!0,syncTouch:o=!1,syncTouchLerp:s=.075,touchInertiaExponent:r=1.7,duration:a,easing:u,lerp:c=.1,infinite:l=!1,orientation:x="vertical",gestureOrientation:h=x==="horizontal"?"both":"vertical",touchMultiplier:m=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:d,virtualScroll:f,overscroll:k=!0,autoRaf:M=!1,anchors:p=!1,autoToggle:I=!1,allowNestedScroll:w=!1,__experimental__naiveDimensions:Z=!1}={}){dt(this,"_isScrolling",!1);dt(this,"_isStopped",!1);dt(this,"_isLocked",!1);dt(this,"_preventNextNativeScrollEvent",!1);dt(this,"_resetVelocityTimeout",null);dt(this,"__rafID",null);dt(this,"isTouching");dt(this,"time",0);dt(this,"userData",{});dt(this,"lastVelocity",0);dt(this,"velocity",0);dt(this,"direction",0);dt(this,"options");dt(this,"targetScroll");dt(this,"animatedScroll");dt(this,"animate",new t4);dt(this,"emitter",new CS);dt(this,"dimensions");dt(this,"virtualScroll");dt(this,"onScrollEnd",e=>{e instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&e.stopPropagation()});dt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});dt(this,"onTransitionEnd",e=>{e.propertyName.includes("overflow")&&this.checkOverflow()});dt(this,"onClick",e=>{let i=e.composedPath().find(n=>n instanceof HTMLAnchorElement&&n.getAttribute("href")?.includes("#"));if(i){let n=i.getAttribute("href");if(n){let o=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=`#${n.split("#")[1]}`;this.scrollTo(s,o)}}});dt(this,"onPointerDown",e=>{e.button===1&&this.reset()});dt(this,"onVirtualScroll",e=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(e)===!1)return;let{deltaX:t,deltaY:i,event:n}=e;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:i,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let o=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";let r=t===0&&i===0;if(this.options.syncTouch&&o&&n.type==="touchstart"&&r&&!this.isStopped&&!this.isLocked){this.reset();return}let u=this.options.gestureOrientation==="vertical"&&i===0||this.options.gestureOrientation==="horizontal"&&t===0;if(r||u)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));let l=this.options.prevent;if(c.find(d=>d instanceof HTMLElement&&(typeof l=="function"&&l?.(d)||d.hasAttribute?.("data-lenis-prevent")||o&&d.hasAttribute?.("data-lenis-prevent-touch")||s&&d.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.checkNestedScroll(d,{deltaX:t,deltaY:i}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&o||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let h=i;this.options.gestureOrientation==="both"?h=Math.abs(i)>Math.abs(t)?i:t:this.options.gestureOrientation==="horizontal"&&(h=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&i>0||this.animatedScroll===this.limit&&i<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let m=o&&this.options.syncTouch,_=o&&n.type==="touchend";_&&(h=Math.sign(this.velocity)*Math.pow(Math.abs(this.velocity),this.options.touchInertiaExponent)),this.scrollTo(this.targetScroll+h,{programmatic:!1,...m?{lerp:_?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});dt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let e=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-e,this.direction=Math.sign(this.animatedScroll-e),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});dt(this,"raf",e=>{let t=e-(this.time||e);this.time=e,this.animate.advance(t*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))});window.lenisVersion=BK,(!e||e===document.documentElement)&&(e=window),typeof a=="number"&&typeof u!="function"?u=US:typeof u=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:e,content:t,eventsTarget:i,smoothWheel:n,syncTouch:o,syncTouchLerp:s,touchInertiaExponent:r,duration:a,easing:u,lerp:c,infinite:l,gestureOrientation:h,orientation:x,touchMultiplier:m,wheelMultiplier:g,autoResize:_,prevent:d,virtualScroll:f,overscroll:k,autoRaf:M,anchors:p,autoToggle:I,allowNestedScroll:w,__experimental__naiveDimensions:Z},this.dimensions=new i4(e,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new n4(i,{touchMultiplier:m,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0})),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}get overflow(){let e=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[e]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(e){this.isHorizontal?this.options.wrapper.scrollTo({left:e,behavior:"instant"}):this.options.wrapper.scrollTo({top:e,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(e,{offset:t=0,immediate:i=!1,lock:n=!1,duration:o=this.options.duration,easing:s=this.options.easing,lerp:r=this.options.lerp,onStart:a,onComplete:u,force:c=!1,programmatic:l=!0,userData:x}={}){if(!((this.isStopped||this.isLocked)&&!c)){if(typeof e=="string"&&["top","left","start","#"].includes(e))e=0;else if(typeof e=="string"&&["bottom","right","end"].includes(e))e=this.limit;else{let h;if(typeof e=="string"?(h=document.querySelector(e),h||(e==="#top"?e=0:console.warn("Lenis: Target not found",e))):e instanceof HTMLElement&&e?.nodeType&&(h=e),h){if(this.options.wrapper!==window){let g=this.rootElement.getBoundingClientRect();t-=this.isHorizontal?g.left:g.top}let m=h.getBoundingClientRect();e=(this.isHorizontal?m.left:m.top)+this.animatedScroll}}if(typeof e=="number"){if(e+=t,e=Math.round(e),this.options.infinite){if(l){this.targetScroll=this.animatedScroll=this.scroll;let h=e-this.animatedScroll;h>this.limit/2?e=e-this.limit:h<-this.limit/2&&(e=e+this.limit)}}else e=$S(0,e,this.limit);if(e===this.targetScroll){a?.(this),u?.(this);return}if(this.userData=x??{},i){this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),u?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}l||(this.targetScroll=e),typeof o=="number"&&typeof s!="function"?s=US:typeof s=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,e,{duration:o,easing:s,lerp:r,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",a?.(this)},onUpdate:(h,m)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=h-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=h,this.setScroll(this.scroll),l&&(this.targetScroll=h),m||this.emit(),m&&(this.reset(),this.emit(),u?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(e,{deltaX:t,deltaY:i}){let n=Date.now(),o=e._lenis??(e._lenis={}),s,r,a,u,c,l,x,h,m=this.options.gestureOrientation;if(n-(o.time??0)>2e3){o.time=Date.now();let I=window.getComputedStyle(e);o.computedStyle=I;let w=I.overflowX,Z=I.overflowY;if(s=["auto","overlay","scroll"].includes(w),r=["auto","overlay","scroll"].includes(Z),o.hasOverflowX=s,o.hasOverflowY=r,!s&&!r||m==="vertical"&&!r||m==="horizontal"&&!s)return!1;c=e.scrollWidth,l=e.scrollHeight,x=e.clientWidth,h=e.clientHeight,a=c>x,u=l>h,o.isScrollableX=a,o.isScrollableY=u,o.scrollWidth=c,o.scrollHeight=l,o.clientWidth=x,o.clientHeight=h}else a=o.isScrollableX,u=o.isScrollableY,s=o.hasOverflowX,r=o.hasOverflowY,c=o.scrollWidth,l=o.scrollHeight,x=o.clientWidth,h=o.clientHeight;if(!s&&!r||!a&&!u||m==="vertical"&&(!r||!u)||m==="horizontal"&&(!s||!a))return!1;let g;if(m==="horizontal")g="x";else if(m==="vertical")g="y";else{let I=t!==0,w=i!==0;I&&s&&a&&(g="x"),w&&r&&u&&(g="y")}if(!g)return!1;let _,d,f,k,M;if(g==="x")_=e.scrollLeft,d=c-x,f=t,k=s,M=a;else if(g==="y")_=e.scrollTop,d=l-h,f=i,k=r,M=u;else return!1;return(f>0?_<d:_>0)&&k&&M}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let e=this.options.wrapper;return this.isHorizontal?e.scrollX??e.scrollLeft:e.scrollY??e.scrollTop}get scroll(){return this.options.infinite?LK(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(e){this._isScrolling!==e&&(this._isScrolling=e,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(e){this._isStopped!==e&&(this._isStopped=e,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(e){this._isLocked!==e&&(this._isLocked=e,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let e="lenis";return this.options.autoToggle&&(e+=" lenis-autoToggle"),this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),this.isScrolling==="smooth"&&(e+=" lenis-smooth"),e}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};var kf=me(Rn(),1);var fm="182";var sZ=0,nk=1,rZ=2;var gl=1,aZ=2,Ku=3,ss=0,$i=1,Oo=2,Io=0,br=1,ok=2,sk=3,rk=4,uZ=5,Ps=100,cZ=101,lZ=102,xZ=103,hZ=104,mZ=200,fZ=201,dZ=202,_Z=203,Jh=204,bh=205,gZ=206,kZ=207,MZ=208,pZ=209,OZ=210,IZ=211,yZ=212,SZ=213,ZZ=214,dm=0,_m=1,gm=2,zr=3,km=4,Mm=5,pm=6,Om=7,ak=0,wZ=1,vZ=2,oo=0,uk=1,ck=2,lk=3,xk=4,hk=5,mk=6,fk=7;var dk=300,or=301,Qr=302,Im=303,ym=304,kl=306,zh=1e3,ko=1001,Hh=1002,_i=1003,RZ=1004;var Ml=1005;var Ye=1006,Sm=1007;var sr=1008;var yn=1009,_k=1010,gk=1011,Eu=1012,Zm=1013,so=1014,ro=1015,Jn=1016,wm=1017,vm=1018,Vu=1020,kk=35902,Mk=35899,pk=1021,Ok=1022,Li=1023,Mo=1026,rr=1027,Ik=1028,Rm=1029,Br=1030,Km=1031;var Em=1033,pl=33776,Ol=33777,Il=33778,yl=33779,Vm=35840,Gm=35841,Fm=35842,jm=35843,Nm=36196,Tm=37492,Wm=37496,Um=37488,$m=37489,Cm=37490,Ym=37491,Jm=37808,bm=37809,zm=37810,Hm=37811,Am=37812,Xm=37813,qm=37814,Qm=37815,Bm=37816,Dm=37817,Pm=37818,Lm=37819,tf=37820,ef=37821,nf=36492,of=36494,sf=36495,rf=36283,af=36284,uf=36285,cf=36286;var el=2300,Ah=2301,Ch=2302,Dg=2400,Pg=2401,Lg=2402;var KZ=3200;var EZ=0,VZ=1,ls="",di="srgb",Hr="srgb-linear",il="linear",re="srgb";var Jr=7680;var tk=519,GZ=512,FZ=513,jZ=514,lf=515,NZ=516,TZ=517,xf=518,WZ=519,ek=35044;var yk="300 es",to=2e3,nl=2001;function Sk(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function o4(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Iu(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function UZ(){let e=Iu("canvas");return e.style.display="block",e}var JS={},yu=null;function Zk(...e){let t="THREE."+e.shift();yu?yu("log",t,...e):console.log(t,...e)}function Vt(...e){let t="THREE."+e.shift();yu?yu("warn",t,...e):console.warn(t,...e)}function Kt(...e){let t="THREE."+e.shift();yu?yu("error",t,...e):console.error(t,...e)}function Su(...e){let t=e.join(" ");t in JS||(JS[t]=!0,Vt(...e))}function $Z(e,t,i){return new Promise(function(n,o){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:o();break;case e.TIMEOUT_EXPIRED:setTimeout(s,i);break;default:n()}}setTimeout(s,i)})}var rs=class{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(i)===-1&&n[t].push(i)}hasEventListener(t,i){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(i)!==-1}removeEventListener(t,i){let n=this._listeners;if(n===void 0)return;let o=n[t];if(o!==void 0){let s=o.indexOf(i);s!==-1&&o.splice(s,1)}}dispatchEvent(t){let i=this._listeners;if(i===void 0)return;let n=i[t.type];if(n!==void 0){t.target=this;let o=n.slice(0);for(let s=0,r=o.length;s<r;s++)o[s].call(this,t);t.target=null}}},vi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Rg=Math.PI/180,Xh=180/Math.PI;function Sl(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vi[e&255]+vi[e>>8&255]+vi[e>>16&255]+vi[e>>24&255]+"-"+vi[t&255]+vi[t>>8&255]+"-"+vi[t>>16&15|64]+vi[t>>24&255]+"-"+vi[i&63|128]+vi[i>>8&255]+"-"+vi[i>>16&255]+vi[i>>24&255]+vi[n&255]+vi[n>>8&255]+vi[n>>16&255]+vi[n>>24&255]).toLowerCase()}function qt(e,t,i){return Math.max(t,Math.min(i,e))}function s4(e,t){return(e%t+t)%t}function Kg(e,t,i){return(1-i)*e+i*t}function Bc(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function Pi(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var Wt=class e{constructor(t=0,i=0){e.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let i=this.x,n=this.y,o=t.elements;return this.x=o[0]*i+o[3]*n+o[6],this.y=o[1]*i+o[4]*n+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=qt(this.x,t.x,i.x),this.y=qt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=qt(this.x,t,i),this.y=qt(this.y,t,i),this}clampLength(t,i){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let n=this.dot(t)/i;return Math.acos(qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,n=this.y-t.y;return i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,n){return this.x=t.x+(i.x-t.x)*n,this.y=t.y+(i.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){let n=Math.cos(i),o=Math.sin(i),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*o+t.x,this.y=s*o+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},as=class{constructor(t=0,i=0,n=0,o=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=n,this._w=o}static slerpFlat(t,i,n,o,s,r,a){let u=n[o+0],c=n[o+1],l=n[o+2],x=n[o+3],h=s[r+0],m=s[r+1],g=s[r+2],_=s[r+3];if(a<=0){t[i+0]=u,t[i+1]=c,t[i+2]=l,t[i+3]=x;return}if(a>=1){t[i+0]=h,t[i+1]=m,t[i+2]=g,t[i+3]=_;return}if(x!==_||u!==h||c!==m||l!==g){let d=u*h+c*m+l*g+x*_;d<0&&(h=-h,m=-m,g=-g,_=-_,d=-d);let f=1-a;if(d<.9995){let k=Math.acos(d),M=Math.sin(k);f=Math.sin(f*k)/M,a=Math.sin(a*k)/M,u=u*f+h*a,c=c*f+m*a,l=l*f+g*a,x=x*f+_*a}else{u=u*f+h*a,c=c*f+m*a,l=l*f+g*a,x=x*f+_*a;let k=1/Math.sqrt(u*u+c*c+l*l+x*x);u*=k,c*=k,l*=k,x*=k}}t[i]=u,t[i+1]=c,t[i+2]=l,t[i+3]=x}static multiplyQuaternionsFlat(t,i,n,o,s,r){let a=n[o],u=n[o+1],c=n[o+2],l=n[o+3],x=s[r],h=s[r+1],m=s[r+2],g=s[r+3];return t[i]=a*g+l*x+u*m-c*h,t[i+1]=u*g+l*h+c*x-a*m,t[i+2]=c*g+l*m+a*h-u*x,t[i+3]=l*g-a*x-u*h-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,n,o){return this._x=t,this._y=i,this._z=n,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){let n=t._x,o=t._y,s=t._z,r=t._order,a=Math.cos,u=Math.sin,c=a(n/2),l=a(o/2),x=a(s/2),h=u(n/2),m=u(o/2),g=u(s/2);switch(r){case"XYZ":this._x=h*l*x+c*m*g,this._y=c*m*x-h*l*g,this._z=c*l*g+h*m*x,this._w=c*l*x-h*m*g;break;case"YXZ":this._x=h*l*x+c*m*g,this._y=c*m*x-h*l*g,this._z=c*l*g-h*m*x,this._w=c*l*x+h*m*g;break;case"ZXY":this._x=h*l*x-c*m*g,this._y=c*m*x+h*l*g,this._z=c*l*g+h*m*x,this._w=c*l*x-h*m*g;break;case"ZYX":this._x=h*l*x-c*m*g,this._y=c*m*x+h*l*g,this._z=c*l*g-h*m*x,this._w=c*l*x+h*m*g;break;case"YZX":this._x=h*l*x+c*m*g,this._y=c*m*x+h*l*g,this._z=c*l*g-h*m*x,this._w=c*l*x-h*m*g;break;case"XZY":this._x=h*l*x-c*m*g,this._y=c*m*x-h*l*g,this._z=c*l*g+h*m*x,this._w=c*l*x+h*m*g;break;default:Vt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){let n=i/2,o=Math.sin(n);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let i=t.elements,n=i[0],o=i[4],s=i[8],r=i[1],a=i[5],u=i[9],c=i[2],l=i[6],x=i[10],h=n+a+x;if(h>0){let m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(l-u)*m,this._y=(s-c)*m,this._z=(r-o)*m}else if(n>a&&n>x){let m=2*Math.sqrt(1+n-a-x);this._w=(l-u)/m,this._x=.25*m,this._y=(o+r)/m,this._z=(s+c)/m}else if(a>x){let m=2*Math.sqrt(1+a-n-x);this._w=(s-c)/m,this._x=(o+r)/m,this._y=.25*m,this._z=(u+l)/m}else{let m=2*Math.sqrt(1+x-n-a);this._w=(r-o)/m,this._x=(s+c)/m,this._y=(u+l)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let n=t.dot(i)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qt(this.dot(t),-1,1)))}rotateTowards(t,i){let n=this.angleTo(t);if(n===0)return this;let o=Math.min(1,i/n);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){let n=t._x,o=t._y,s=t._z,r=t._w,a=i._x,u=i._y,c=i._z,l=i._w;return this._x=n*l+r*a+o*c-s*u,this._y=o*l+r*u+s*a-n*c,this._z=s*l+r*c+n*u-o*a,this._w=r*l-n*a-o*u-s*c,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let n=t._x,o=t._y,s=t._z,r=t._w,a=this.dot(t);a<0&&(n=-n,o=-o,s=-s,r=-r,a=-a);let u=1-i;if(a<.9995){let c=Math.acos(a),l=Math.sin(c);u=Math.sin(u*c)/l,i=Math.sin(i*c)/l,this._x=this._x*u+n*i,this._y=this._y*u+o*i,this._z=this._z*u+s*i,this._w=this._w*u+r*i,this._onChangeCallback()}else this._x=this._x*u+n*i,this._y=this._y*u+o*i,this._z=this._z*u+s*i,this._w=this._w*u+r*i,this.normalize();return this}slerpQuaternions(t,i,n){return this.copy(t).slerp(i,n)}random(){let t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),n=Math.random(),o=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(o*Math.sin(t),o*Math.cos(t),s*Math.sin(i),s*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class e{constructor(t=0,i=0,n=0){e.prototype.isVector3=!0,this.x=t,this.y=i,this.z=n}set(t,i,n){return n===void 0&&(n=this.z),this.x=t,this.y=i,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(bS.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(bS.setFromAxisAngle(t,i))}applyMatrix3(t){let i=this.x,n=this.y,o=this.z,s=t.elements;return this.x=s[0]*i+s[3]*n+s[6]*o,this.y=s[1]*i+s[4]*n+s[7]*o,this.z=s[2]*i+s[5]*n+s[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let i=this.x,n=this.y,o=this.z,s=t.elements,r=1/(s[3]*i+s[7]*n+s[11]*o+s[15]);return this.x=(s[0]*i+s[4]*n+s[8]*o+s[12])*r,this.y=(s[1]*i+s[5]*n+s[9]*o+s[13])*r,this.z=(s[2]*i+s[6]*n+s[10]*o+s[14])*r,this}applyQuaternion(t){let i=this.x,n=this.y,o=this.z,s=t.x,r=t.y,a=t.z,u=t.w,c=2*(r*o-a*n),l=2*(a*i-s*o),x=2*(s*n-r*i);return this.x=i+u*c+r*x-a*l,this.y=n+u*l+a*c-s*x,this.z=o+u*x+s*l-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let i=this.x,n=this.y,o=this.z,s=t.elements;return this.x=s[0]*i+s[4]*n+s[8]*o,this.y=s[1]*i+s[5]*n+s[9]*o,this.z=s[2]*i+s[6]*n+s[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=qt(this.x,t.x,i.x),this.y=qt(this.y,t.y,i.y),this.z=qt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=qt(this.x,t,i),this.y=qt(this.y,t,i),this.z=qt(this.z,t,i),this}clampLength(t,i){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,n){return this.x=t.x+(i.x-t.x)*n,this.y=t.y+(i.y-t.y)*n,this.z=t.z+(i.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){let n=t.x,o=t.y,s=t.z,r=i.x,a=i.y,u=i.z;return this.x=o*u-s*a,this.y=s*r-n*u,this.z=n*a-o*r,this}projectOnVector(t){let i=t.lengthSq();if(i===0)return this.set(0,0,0);let n=t.dot(this)/i;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Eg.copy(this).projectOnVector(t),this.sub(Eg)}reflect(t){return this.sub(Eg.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let n=this.dot(t)/i;return Math.acos(qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,n=this.y-t.y,o=this.z-t.z;return i*i+n*n+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,n){let o=Math.sin(i)*t;return this.x=o*Math.sin(n),this.y=Math.cos(i)*t,this.z=o*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,n){return this.x=t*Math.sin(i),this.y=n,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){let i=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=n,this.z=o,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,i=Math.random()*2-1,n=Math.sqrt(1-i*i);return this.x=n*Math.cos(t),this.y=i,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Eg=new C,bS=new as,Ut=class e{constructor(t,i,n,o,s,r,a,u,c){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,n,o,s,r,a,u,c)}set(t,i,n,o,s,r,a,u,c){let l=this.elements;return l[0]=t,l[1]=o,l[2]=a,l[3]=i,l[4]=s,l[5]=u,l[6]=n,l[7]=r,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let i=this.elements,n=t.elements;return i[0]=n[0],i[1]=n[1],i[2]=n[2],i[3]=n[3],i[4]=n[4],i[5]=n[5],i[6]=n[6],i[7]=n[7],i[8]=n[8],this}extractBasis(t,i,n){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let n=t.elements,o=i.elements,s=this.elements,r=n[0],a=n[3],u=n[6],c=n[1],l=n[4],x=n[7],h=n[2],m=n[5],g=n[8],_=o[0],d=o[3],f=o[6],k=o[1],M=o[4],p=o[7],I=o[2],w=o[5],Z=o[8];return s[0]=r*_+a*k+u*I,s[3]=r*d+a*M+u*w,s[6]=r*f+a*p+u*Z,s[1]=c*_+l*k+x*I,s[4]=c*d+l*M+x*w,s[7]=c*f+l*p+x*Z,s[2]=h*_+m*k+g*I,s[5]=h*d+m*M+g*w,s[8]=h*f+m*p+g*Z,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){let t=this.elements,i=t[0],n=t[1],o=t[2],s=t[3],r=t[4],a=t[5],u=t[6],c=t[7],l=t[8];return i*r*l-i*a*c-n*s*l+n*a*u+o*s*c-o*r*u}invert(){let t=this.elements,i=t[0],n=t[1],o=t[2],s=t[3],r=t[4],a=t[5],u=t[6],c=t[7],l=t[8],x=l*r-a*c,h=a*u-l*s,m=c*s-r*u,g=i*x+n*h+o*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=x*_,t[1]=(o*c-l*n)*_,t[2]=(a*n-o*r)*_,t[3]=h*_,t[4]=(l*i-o*u)*_,t[5]=(o*s-a*i)*_,t[6]=m*_,t[7]=(n*u-c*i)*_,t[8]=(r*i-n*s)*_,this}transpose(){let t,i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,n,o,s,r,a){let u=Math.cos(s),c=Math.sin(s);return this.set(n*u,n*c,-n*(u*r+c*a)+r+t,-o*c,o*u,-o*(-c*r+u*a)+a+i,0,0,1),this}scale(t,i){return this.premultiply(Vg.makeScale(t,i)),this}rotate(t){return this.premultiply(Vg.makeRotation(-t)),this}translate(t,i){return this.premultiply(Vg.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){let i=Math.cos(t),n=Math.sin(t);return this.set(i,-n,0,n,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){let i=this.elements,n=t.elements;for(let o=0;o<9;o++)if(i[o]!==n[o])return!1;return!0}fromArray(t,i=0){for(let n=0;n<9;n++)this.elements[n]=t[n+i];return this}toArray(t=[],i=0){let n=this.elements;return t[i]=n[0],t[i+1]=n[1],t[i+2]=n[2],t[i+3]=n[3],t[i+4]=n[4],t[i+5]=n[5],t[i+6]=n[6],t[i+7]=n[7],t[i+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Vg=new Ut,zS=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),HS=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function r4(){let e={enabled:!0,workingColorSpace:Hr,spaces:{},convert:function(o,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===re&&(o.r=os(o.r),o.g=os(o.g),o.b=os(o.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(o.applyMatrix3(this.spaces[s].toXYZ),o.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===re&&(o.r=Ou(o.r),o.g=Ou(o.g),o.b=Ou(o.b))),o},workingToColorSpace:function(o,s){return this.convert(o,this.workingColorSpace,s)},colorSpaceToWorking:function(o,s){return this.convert(o,s,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===ls?il:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,s=this.workingColorSpace){return o.fromArray(this.spaces[s].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,s,r){return o.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,s){return Su("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(o,s)},toWorkingColorSpace:function(o,s){return Su("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(o,s)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],n=[.3127,.329];return e.define({[Hr]:{primaries:t,whitePoint:n,transfer:il,toXYZ:zS,fromXYZ:HS,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:di},outputColorSpaceConfig:{drawingBufferColorSpace:di}},[di]:{primaries:t,whitePoint:n,transfer:re,toXYZ:zS,fromXYZ:HS,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:di}}}),e}var Dt=r4();function os(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Ou(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var uu,qh=class{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{uu===void 0&&(uu=Iu("canvas")),uu.width=t.width,uu.height=t.height;let o=uu.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),n=uu}return n.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let i=Iu("canvas");i.width=t.width,i.height=t.height;let n=i.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let o=n.getImageData(0,0,t.width,t.height),s=o.data;for(let r=0;r<s.length;r++)s[r]=os(s[r]/255)*255;return n.putImageData(o,0,0),i}else if(t.data){let i=t.data.slice(0);for(let n=0;n<i.length;n++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[n]=Math.floor(os(i[n]/255)*255):i[n]=os(i[n]);return{data:i,width:t.width,height:t.height}}else return Vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},a4=0,Zu=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:a4++}),this.uuid=Sl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},o=this.data;if(o!==null){let s;if(Array.isArray(o)){s=[];for(let r=0,a=o.length;r<a;r++)o[r].isDataTexture?s.push(Gg(o[r].image)):s.push(Gg(o[r]))}else s=Gg(o);n.url=s}return i||(t.images[this.uuid]=n),n}};function Gg(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?qh.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Vt("Texture: Unable to serialize Texture."),{})}var u4=0,Fg=new C,Ki=class e extends rs{constructor(t=e.DEFAULT_IMAGE,i=e.DEFAULT_MAPPING,n=ko,o=ko,s=Ye,r=sr,a=Li,u=yn,c=e.DEFAULT_ANISOTROPY,l=ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:u4++}),this.uuid=Sl(),this.name="",this.source=new Zu(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=n,this.wrapT=o,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=u,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Fg).x}get height(){return this.source.getSize(Fg).y}get depth(){return this.source.getSize(Fg).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let n=t[i];if(n===void 0){Vt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let o=this[i];if(o===void 0){Vt(`Texture.setValues(): property '${i}' does not exist.`);continue}o&&n&&o.isVector2&&n.isVector2||o&&n&&o.isVector3&&n.isVector3||o&&n&&o.isMatrix3&&n.isMatrix3?o.copy(n):this[i]=n}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),i||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dk)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case zh:t.x=t.x-Math.floor(t.x);break;case ko:t.x=t.x<0?0:1;break;case Hh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case zh:t.y=t.y-Math.floor(t.y);break;case ko:t.y=t.y<0?0:1;break;case Hh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ki.DEFAULT_IMAGE=null;Ki.DEFAULT_MAPPING=dk;Ki.DEFAULT_ANISOTROPY=1;var Je=class e{constructor(t=0,i=0,n=0,o=1){e.prototype.isVector4=!0,this.x=t,this.y=i,this.z=n,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,n,o){return this.x=t,this.y=i,this.z=n,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let i=this.x,n=this.y,o=this.z,s=this.w,r=t.elements;return this.x=r[0]*i+r[4]*n+r[8]*o+r[12]*s,this.y=r[1]*i+r[5]*n+r[9]*o+r[13]*s,this.z=r[2]*i+r[6]*n+r[10]*o+r[14]*s,this.w=r[3]*i+r[7]*n+r[11]*o+r[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,n,o,s,u=t.elements,c=u[0],l=u[4],x=u[8],h=u[1],m=u[5],g=u[9],_=u[2],d=u[6],f=u[10];if(Math.abs(l-h)<.01&&Math.abs(x-_)<.01&&Math.abs(g-d)<.01){if(Math.abs(l+h)<.1&&Math.abs(x+_)<.1&&Math.abs(g+d)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let M=(c+1)/2,p=(m+1)/2,I=(f+1)/2,w=(l+h)/4,Z=(x+_)/4,R=(g+d)/4;return M>p&&M>I?M<.01?(n=0,o=.707106781,s=.707106781):(n=Math.sqrt(M),o=w/n,s=Z/n):p>I?p<.01?(n=.707106781,o=0,s=.707106781):(o=Math.sqrt(p),n=w/o,s=R/o):I<.01?(n=.707106781,o=.707106781,s=0):(s=Math.sqrt(I),n=Z/s,o=R/s),this.set(n,o,s,i),this}let k=Math.sqrt((d-g)*(d-g)+(x-_)*(x-_)+(h-l)*(h-l));return Math.abs(k)<.001&&(k=1),this.x=(d-g)/k,this.y=(x-_)/k,this.z=(h-l)/k,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=qt(this.x,t.x,i.x),this.y=qt(this.y,t.y,i.y),this.z=qt(this.z,t.z,i.z),this.w=qt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=qt(this.x,t,i),this.y=qt(this.y,t,i),this.z=qt(this.z,t,i),this.w=qt(this.w,t,i),this}clampLength(t,i){let n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,n){return this.x=t.x+(i.x-t.x)*n,this.y=t.y+(i.y-t.y)*n,this.z=t.z+(i.z-t.z)*n,this.w=t.w+(i.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qh=class extends rs{constructor(t=1,i=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ye,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=n.depth,this.scissor=new Je(0,0,t,i),this.scissorTest=!1,this.viewport=new Je(0,0,t,i);let o={width:t,height:i,depth:n.depth},s=new Ki(o);this.textures=[];let r=n.count;for(let a=0;a<r;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let i={minFilter:Ye,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,n=1){if(this.width!==t||this.height!==i||this.depth!==n){this.width=t,this.height=i,this.depth=n;for(let o=0,s=this.textures.length;o<s;o++)this.textures[o].image.width=t,this.textures[o].image.height=i,this.textures[o].image.depth=n,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,n=t.textures.length;i<n;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;let o=Object.assign({},t.textures[i].image);this.textures[i].source=new Zu(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},yi=class extends Qh{constructor(t=1,i=1,n={}){super(t,i,n),this.isWebGLRenderTarget=!0}},ol=class extends Ki{constructor(t=null,i=1,n=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:n,depth:o},this.magFilter=_i,this.minFilter=_i,this.wrapR=ko,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Bh=class extends Ki{constructor(t=null,i=1,n=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:n,depth:o},this.magFilter=_i,this.minFilter=_i,this.wrapR=ko,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ls=class{constructor(t=new C(1/0,1/0,1/0),i=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,n=t.length;i<n;i+=3)this.expandByPoint(Dn.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,n=t.count;i<n;i++)this.expandByPoint(Dn.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,n=t.length;i<n;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){let n=Dn.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(i===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Dn):Dn.fromBufferAttribute(s,r),Dn.applyMatrix4(t.matrixWorld),this.expandByPoint(Dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ih.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ih.copy(n.boundingBox)),Ih.applyMatrix4(t.matrixWorld),this.union(Ih)}let o=t.children;for(let s=0,r=o.length;s<r;s++)this.expandByObject(o[s],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Dn),Dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,n;return t.normal.x>0?(i=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),i<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Dc),yh.subVectors(this.max,Dc),cu.subVectors(t.a,Dc),lu.subVectors(t.b,Dc),xu.subVectors(t.c,Dc),Hs.subVectors(lu,cu),As.subVectors(xu,lu),Ur.subVectors(cu,xu);let i=[0,-Hs.z,Hs.y,0,-As.z,As.y,0,-Ur.z,Ur.y,Hs.z,0,-Hs.x,As.z,0,-As.x,Ur.z,0,-Ur.x,-Hs.y,Hs.x,0,-As.y,As.x,0,-Ur.y,Ur.x,0];return!jg(i,cu,lu,xu,yh)||(i=[1,0,0,0,1,0,0,0,1],!jg(i,cu,lu,xu,yh))?!1:(Sh.crossVectors(Hs,As),i=[Sh.x,Sh.y,Sh.z],jg(i,cu,lu,xu,yh))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Lo[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Lo[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Lo[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Lo[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Lo[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Lo[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Lo[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Lo[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Lo),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Lo=[new C,new C,new C,new C,new C,new C,new C,new C],Dn=new C,Ih=new Ls,cu=new C,lu=new C,xu=new C,Hs=new C,As=new C,Ur=new C,Dc=new C,yh=new C,Sh=new C,$r=new C;function jg(e,t,i,n,o){for(let s=0,r=e.length-3;s<=r;s+=3){$r.fromArray(e,s);let a=o.x*Math.abs($r.x)+o.y*Math.abs($r.y)+o.z*Math.abs($r.z),u=t.dot($r),c=i.dot($r),l=n.dot($r);if(Math.max(-Math.max(u,c,l),Math.min(u,c,l))>a)return!1}return!0}var c4=new Ls,Pc=new C,Ng=new C,wu=class{constructor(t=new C,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){let n=this.center;i!==void 0?n.copy(i):c4.setFromPoints(t).getCenter(n);let o=0;for(let s=0,r=t.length;s<r;s++)o=Math.max(o,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){let n=this.center.distanceToSquared(t);return i.copy(t),n>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Pc.subVectors(t,this.center);let i=Pc.lengthSq();if(i>this.radius*this.radius){let n=Math.sqrt(i),o=(n-this.radius)*.5;this.center.addScaledVector(Pc,o/n),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ng.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Pc.copy(t.center).add(Ng)),this.expandByPoint(Pc.copy(t.center).sub(Ng))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},ts=new C,Tg=new C,Zh=new C,Xs=new C,Wg=new C,wh=new C,Ug=new C,Dh=class{constructor(t=new C,i=new C(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ts)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);let n=i.dot(this.direction);return n<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let i=ts.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ts.copy(this.origin).addScaledVector(this.direction,i),ts.distanceToSquared(t))}distanceSqToSegment(t,i,n,o){Tg.copy(t).add(i).multiplyScalar(.5),Zh.copy(i).sub(t).normalize(),Xs.copy(this.origin).sub(Tg);let s=t.distanceTo(i)*.5,r=-this.direction.dot(Zh),a=Xs.dot(this.direction),u=-Xs.dot(Zh),c=Xs.lengthSq(),l=Math.abs(1-r*r),x,h,m,g;if(l>0)if(x=r*u-a,h=r*a-u,g=s*l,x>=0)if(h>=-g)if(h<=g){let _=1/l;x*=_,h*=_,m=x*(x+r*h+2*a)+h*(r*x+h+2*u)+c}else h=s,x=Math.max(0,-(r*h+a)),m=-x*x+h*(h+2*u)+c;else h=-s,x=Math.max(0,-(r*h+a)),m=-x*x+h*(h+2*u)+c;else h<=-g?(x=Math.max(0,-(-r*s+a)),h=x>0?-s:Math.min(Math.max(-s,-u),s),m=-x*x+h*(h+2*u)+c):h<=g?(x=0,h=Math.min(Math.max(-s,-u),s),m=h*(h+2*u)+c):(x=Math.max(0,-(r*s+a)),h=x>0?s:Math.min(Math.max(-s,-u),s),m=-x*x+h*(h+2*u)+c);else h=r>0?-s:s,x=Math.max(0,-(r*h+a)),m=-x*x+h*(h+2*u)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,x),o&&o.copy(Tg).addScaledVector(Zh,h),m}intersectSphere(t,i){ts.subVectors(t.center,this.origin);let n=ts.dot(this.direction),o=ts.dot(ts)-n*n,s=t.radius*t.radius;if(o>s)return null;let r=Math.sqrt(s-o),a=n-r,u=n+r;return u<0?null:a<0?this.at(u,i):this.at(a,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/i;return n>=0?n:null}intersectPlane(t,i){let n=this.distanceToPlane(t);return n===null?null:this.at(n,i)}intersectsPlane(t){let i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let n,o,s,r,a,u,c=1/this.direction.x,l=1/this.direction.y,x=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,o=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,o=(t.min.x-h.x)*c),l>=0?(s=(t.min.y-h.y)*l,r=(t.max.y-h.y)*l):(s=(t.max.y-h.y)*l,r=(t.min.y-h.y)*l),n>r||s>o||((s>n||isNaN(n))&&(n=s),(r<o||isNaN(o))&&(o=r),x>=0?(a=(t.min.z-h.z)*x,u=(t.max.z-h.z)*x):(a=(t.max.z-h.z)*x,u=(t.min.z-h.z)*x),n>u||a>o)||((a>n||n!==n)&&(n=a),(u<o||o!==o)&&(o=u),o<0)?null:this.at(n>=0?n:o,i)}intersectsBox(t){return this.intersectBox(t,ts)!==null}intersectTriangle(t,i,n,o,s){Wg.subVectors(i,t),wh.subVectors(n,t),Ug.crossVectors(Wg,wh);let r=this.direction.dot(Ug),a;if(r>0){if(o)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Xs.subVectors(this.origin,t);let u=a*this.direction.dot(wh.crossVectors(Xs,wh));if(u<0)return null;let c=a*this.direction.dot(Wg.cross(Xs));if(c<0||u+c>r)return null;let l=-a*Xs.dot(Ug);return l<0?null:this.at(l/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ii=class e{constructor(t,i,n,o,s,r,a,u,c,l,x,h,m,g,_,d){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,n,o,s,r,a,u,c,l,x,h,m,g,_,d)}set(t,i,n,o,s,r,a,u,c,l,x,h,m,g,_,d){let f=this.elements;return f[0]=t,f[4]=i,f[8]=n,f[12]=o,f[1]=s,f[5]=r,f[9]=a,f[13]=u,f[2]=c,f[6]=l,f[10]=x,f[14]=h,f[3]=m,f[7]=g,f[11]=_,f[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let i=this.elements,n=t.elements;return i[0]=n[0],i[1]=n[1],i[2]=n[2],i[3]=n[3],i[4]=n[4],i[5]=n[5],i[6]=n[6],i[7]=n[7],i[8]=n[8],i[9]=n[9],i[10]=n[10],i[11]=n[11],i[12]=n[12],i[13]=n[13],i[14]=n[14],i[15]=n[15],this}copyPosition(t){let i=this.elements,n=t.elements;return i[12]=n[12],i[13]=n[13],i[14]=n[14],this}setFromMatrix3(t){let i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,n){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,i,n){return this.set(t.x,i.x,n.x,0,t.y,i.y,n.y,0,t.z,i.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();let i=this.elements,n=t.elements,o=1/hu.setFromMatrixColumn(t,0).length(),s=1/hu.setFromMatrixColumn(t,1).length(),r=1/hu.setFromMatrixColumn(t,2).length();return i[0]=n[0]*o,i[1]=n[1]*o,i[2]=n[2]*o,i[3]=0,i[4]=n[4]*s,i[5]=n[5]*s,i[6]=n[6]*s,i[7]=0,i[8]=n[8]*r,i[9]=n[9]*r,i[10]=n[10]*r,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){let i=this.elements,n=t.x,o=t.y,s=t.z,r=Math.cos(n),a=Math.sin(n),u=Math.cos(o),c=Math.sin(o),l=Math.cos(s),x=Math.sin(s);if(t.order==="XYZ"){let h=r*l,m=r*x,g=a*l,_=a*x;i[0]=u*l,i[4]=-u*x,i[8]=c,i[1]=m+g*c,i[5]=h-_*c,i[9]=-a*u,i[2]=_-h*c,i[6]=g+m*c,i[10]=r*u}else if(t.order==="YXZ"){let h=u*l,m=u*x,g=c*l,_=c*x;i[0]=h+_*a,i[4]=g*a-m,i[8]=r*c,i[1]=r*x,i[5]=r*l,i[9]=-a,i[2]=m*a-g,i[6]=_+h*a,i[10]=r*u}else if(t.order==="ZXY"){let h=u*l,m=u*x,g=c*l,_=c*x;i[0]=h-_*a,i[4]=-r*x,i[8]=g+m*a,i[1]=m+g*a,i[5]=r*l,i[9]=_-h*a,i[2]=-r*c,i[6]=a,i[10]=r*u}else if(t.order==="ZYX"){let h=r*l,m=r*x,g=a*l,_=a*x;i[0]=u*l,i[4]=g*c-m,i[8]=h*c+_,i[1]=u*x,i[5]=_*c+h,i[9]=m*c-g,i[2]=-c,i[6]=a*u,i[10]=r*u}else if(t.order==="YZX"){let h=r*u,m=r*c,g=a*u,_=a*c;i[0]=u*l,i[4]=_-h*x,i[8]=g*x+m,i[1]=x,i[5]=r*l,i[9]=-a*l,i[2]=-c*l,i[6]=m*x+g,i[10]=h-_*x}else if(t.order==="XZY"){let h=r*u,m=r*c,g=a*u,_=a*c;i[0]=u*l,i[4]=-x,i[8]=c*l,i[1]=h*x+_,i[5]=r*l,i[9]=m*x-g,i[2]=g*x-m,i[6]=a*l,i[10]=_*x+h}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(l4,t,x4)}lookAt(t,i,n){let o=this.elements;return kn.subVectors(t,i),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),qs.crossVectors(n,kn),qs.lengthSq()===0&&(Math.abs(n.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),qs.crossVectors(n,kn)),qs.normalize(),vh.crossVectors(kn,qs),o[0]=qs.x,o[4]=vh.x,o[8]=kn.x,o[1]=qs.y,o[5]=vh.y,o[9]=kn.y,o[2]=qs.z,o[6]=vh.z,o[10]=kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let n=t.elements,o=i.elements,s=this.elements,r=n[0],a=n[4],u=n[8],c=n[12],l=n[1],x=n[5],h=n[9],m=n[13],g=n[2],_=n[6],d=n[10],f=n[14],k=n[3],M=n[7],p=n[11],I=n[15],w=o[0],Z=o[4],R=o[8],O=o[12],S=o[1],E=o[5],N=o[9],T=o[13],$=o[2],z=o[6],U=o[10],Y=o[14],Q=o[3],ut=o[7],it=o[11],lt=o[15];return s[0]=r*w+a*S+u*$+c*Q,s[4]=r*Z+a*E+u*z+c*ut,s[8]=r*R+a*N+u*U+c*it,s[12]=r*O+a*T+u*Y+c*lt,s[1]=l*w+x*S+h*$+m*Q,s[5]=l*Z+x*E+h*z+m*ut,s[9]=l*R+x*N+h*U+m*it,s[13]=l*O+x*T+h*Y+m*lt,s[2]=g*w+_*S+d*$+f*Q,s[6]=g*Z+_*E+d*z+f*ut,s[10]=g*R+_*N+d*U+f*it,s[14]=g*O+_*T+d*Y+f*lt,s[3]=k*w+M*S+p*$+I*Q,s[7]=k*Z+M*E+p*z+I*ut,s[11]=k*R+M*N+p*U+I*it,s[15]=k*O+M*T+p*Y+I*lt,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){let t=this.elements,i=t[0],n=t[4],o=t[8],s=t[12],r=t[1],a=t[5],u=t[9],c=t[13],l=t[2],x=t[6],h=t[10],m=t[14],g=t[3],_=t[7],d=t[11],f=t[15],k=u*m-c*h,M=a*m-c*x,p=a*h-u*x,I=r*m-c*l,w=r*h-u*l,Z=r*x-a*l;return i*(_*k-d*M+f*p)-n*(g*k-d*I+f*w)+o*(g*M-_*I+f*Z)-s*(g*p-_*w+d*Z)}transpose(){let t=this.elements,i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,n){let o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=i,o[14]=n),this}invert(){let t=this.elements,i=t[0],n=t[1],o=t[2],s=t[3],r=t[4],a=t[5],u=t[6],c=t[7],l=t[8],x=t[9],h=t[10],m=t[11],g=t[12],_=t[13],d=t[14],f=t[15],k=x*d*c-_*h*c+_*u*m-a*d*m-x*u*f+a*h*f,M=g*h*c-l*d*c-g*u*m+r*d*m+l*u*f-r*h*f,p=l*_*c-g*x*c+g*a*m-r*_*m-l*a*f+r*x*f,I=g*x*u-l*_*u-g*a*h+r*_*h+l*a*d-r*x*d,w=i*k+n*M+o*p+s*I;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Z=1/w;return t[0]=k*Z,t[1]=(_*h*s-x*d*s-_*o*m+n*d*m+x*o*f-n*h*f)*Z,t[2]=(a*d*s-_*u*s+_*o*c-n*d*c-a*o*f+n*u*f)*Z,t[3]=(x*u*s-a*h*s-x*o*c+n*h*c+a*o*m-n*u*m)*Z,t[4]=M*Z,t[5]=(l*d*s-g*h*s+g*o*m-i*d*m-l*o*f+i*h*f)*Z,t[6]=(g*u*s-r*d*s-g*o*c+i*d*c+r*o*f-i*u*f)*Z,t[7]=(r*h*s-l*u*s+l*o*c-i*h*c-r*o*m+i*u*m)*Z,t[8]=p*Z,t[9]=(g*x*s-l*_*s-g*n*m+i*_*m+l*n*f-i*x*f)*Z,t[10]=(r*_*s-g*a*s+g*n*c-i*_*c-r*n*f+i*a*f)*Z,t[11]=(l*a*s-r*x*s-l*n*c+i*x*c+r*n*m-i*a*m)*Z,t[12]=I*Z,t[13]=(l*_*o-g*x*o+g*n*h-i*_*h-l*n*d+i*x*d)*Z,t[14]=(g*a*o-r*_*o-g*n*u+i*_*u+r*n*d-i*a*d)*Z,t[15]=(r*x*o-l*a*o+l*n*u-i*x*u-r*n*h+i*a*h)*Z,this}scale(t){let i=this.elements,n=t.x,o=t.y,s=t.z;return i[0]*=n,i[4]*=o,i[8]*=s,i[1]*=n,i[5]*=o,i[9]*=s,i[2]*=n,i[6]*=o,i[10]*=s,i[3]*=n,i[7]*=o,i[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,n,o))}makeTranslation(t,i,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,n,0,0,0,1),this}makeRotationX(t){let i=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,i,-n,0,0,n,i,0,0,0,0,1),this}makeRotationY(t){let i=Math.cos(t),n=Math.sin(t);return this.set(i,0,n,0,0,1,0,0,-n,0,i,0,0,0,0,1),this}makeRotationZ(t){let i=Math.cos(t),n=Math.sin(t);return this.set(i,-n,0,0,n,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){let n=Math.cos(i),o=Math.sin(i),s=1-n,r=t.x,a=t.y,u=t.z,c=s*r,l=s*a;return this.set(c*r+n,c*a-o*u,c*u+o*a,0,c*a+o*u,l*a+n,l*u-o*r,0,c*u-o*a,l*u+o*r,s*u*u+n,0,0,0,0,1),this}makeScale(t,i,n){return this.set(t,0,0,0,0,i,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,i,n,o,s,r){return this.set(1,n,s,0,t,1,r,0,i,o,1,0,0,0,0,1),this}compose(t,i,n){let o=this.elements,s=i._x,r=i._y,a=i._z,u=i._w,c=s+s,l=r+r,x=a+a,h=s*c,m=s*l,g=s*x,_=r*l,d=r*x,f=a*x,k=u*c,M=u*l,p=u*x,I=n.x,w=n.y,Z=n.z;return o[0]=(1-(_+f))*I,o[1]=(m+p)*I,o[2]=(g-M)*I,o[3]=0,o[4]=(m-p)*w,o[5]=(1-(h+f))*w,o[6]=(d+k)*w,o[7]=0,o[8]=(g+M)*Z,o[9]=(d-k)*Z,o[10]=(1-(h+_))*Z,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,i,n){let o=this.elements;if(t.x=o[12],t.y=o[13],t.z=o[14],this.determinant()===0)return n.set(1,1,1),i.identity(),this;let s=hu.set(o[0],o[1],o[2]).length(),r=hu.set(o[4],o[5],o[6]).length(),a=hu.set(o[8],o[9],o[10]).length();this.determinant()<0&&(s=-s),Pn.copy(this);let c=1/s,l=1/r,x=1/a;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=l,Pn.elements[5]*=l,Pn.elements[6]*=l,Pn.elements[8]*=x,Pn.elements[9]*=x,Pn.elements[10]*=x,i.setFromRotationMatrix(Pn),n.x=s,n.y=r,n.z=a,this}makePerspective(t,i,n,o,s,r,a=to,u=!1){let c=this.elements,l=2*s/(i-t),x=2*s/(n-o),h=(i+t)/(i-t),m=(n+o)/(n-o),g,_;if(u)g=s/(r-s),_=r*s/(r-s);else if(a===to)g=-(r+s)/(r-s),_=-2*r*s/(r-s);else if(a===nl)g=-r/(r-s),_=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=x,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,i,n,o,s,r,a=to,u=!1){let c=this.elements,l=2/(i-t),x=2/(n-o),h=-(i+t)/(i-t),m=-(n+o)/(n-o),g,_;if(u)g=1/(r-s),_=r/(r-s);else if(a===to)g=-2/(r-s),_=-(r+s)/(r-s);else if(a===nl)g=-1/(r-s),_=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=x,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let i=this.elements,n=t.elements;for(let o=0;o<16;o++)if(i[o]!==n[o])return!1;return!0}fromArray(t,i=0){for(let n=0;n<16;n++)this.elements[n]=t[n+i];return this}toArray(t=[],i=0){let n=this.elements;return t[i]=n[0],t[i+1]=n[1],t[i+2]=n[2],t[i+3]=n[3],t[i+4]=n[4],t[i+5]=n[5],t[i+6]=n[6],t[i+7]=n[7],t[i+8]=n[8],t[i+9]=n[9],t[i+10]=n[10],t[i+11]=n[11],t[i+12]=n[12],t[i+13]=n[13],t[i+14]=n[14],t[i+15]=n[15],t}},hu=new C,Pn=new ii,l4=new C(0,0,0),x4=new C(1,1,1),qs=new C,vh=new C,kn=new C,AS=new ii,XS=new as,po=class e{constructor(t=0,i=0,n=0,o=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=n,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,n,o=this._order){return this._x=t,this._y=i,this._z=n,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,n=!0){let o=t.elements,s=o[0],r=o[4],a=o[8],u=o[1],c=o[5],l=o[9],x=o[2],h=o[6],m=o[10];switch(i){case"XYZ":this._y=Math.asin(qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-l,m),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(u,c)):(this._y=Math.atan2(-x,s),this._z=0);break;case"ZXY":this._x=Math.asin(qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-x,m),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-qt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(qt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-x,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-qt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-l,m),this._y=0);break;default:Vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,n){return AS.makeRotationFromQuaternion(t),this.setFromRotationMatrix(AS,i,n)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return XS.setFromEuler(this),this.setFromQuaternion(XS,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};po.DEFAULT_ORDER="XYZ";var sl=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},h4=0,qS=new C,mu=new as,es=new ii,Rh=new C,Lc=new C,m4=new C,f4=new as,QS=new C(1,0,0),BS=new C(0,1,0),DS=new C(0,0,1),PS={type:"added"},d4={type:"removed"},fu={type:"childadded",child:null},$g={type:"childremoved",child:null},Yn=class e extends rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:h4++}),this.uuid=Sl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new C,i=new po,n=new as,o=new C(1,1,1);function s(){n.setFromEuler(i,!1)}function r(){i.setFromQuaternion(n,void 0,!1)}i._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new ii},normalMatrix:{value:new Ut}}),this.matrix=new ii,this.matrixWorld=new ii,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return mu.setFromAxisAngle(t,i),this.quaternion.multiply(mu),this}rotateOnWorldAxis(t,i){return mu.setFromAxisAngle(t,i),this.quaternion.premultiply(mu),this}rotateX(t){return this.rotateOnAxis(QS,t)}rotateY(t){return this.rotateOnAxis(BS,t)}rotateZ(t){return this.rotateOnAxis(DS,t)}translateOnAxis(t,i){return qS.copy(t).applyQuaternion(this.quaternion),this.position.add(qS.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(QS,t)}translateY(t){return this.translateOnAxis(BS,t)}translateZ(t){return this.translateOnAxis(DS,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(es.copy(this.matrixWorld).invert())}lookAt(t,i,n){t.isVector3?Rh.copy(t):Rh.set(t,i,n);let o=this.parent;this.updateWorldMatrix(!0,!1),Lc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?es.lookAt(Lc,Rh,this.up):es.lookAt(Rh,Lc,this.up),this.quaternion.setFromRotationMatrix(es),o&&(es.extractRotation(o.matrixWorld),mu.setFromRotationMatrix(es),this.quaternion.premultiply(mu.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(PS),fu.child=t,this.dispatchEvent(fu),fu.child=null):Kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(d4),$g.child=t,this.dispatchEvent($g),$g.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),es.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),es.multiply(t.parent.matrixWorld)),t.applyMatrix4(es),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(PS),fu.child=t,this.dispatchEvent(fu),fu.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let n=0,o=this.children.length;n<o;n++){let r=this.children[n].getObjectByProperty(t,i);if(r!==void 0)return r}}getObjectsByProperty(t,i,n=[]){this[t]===i&&n.push(this);let o=this.children;for(let s=0,r=o.length;s<r;s++)o[s].getObjectsByProperty(t,i,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lc,t,m4),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lc,f4,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let n=0,o=i.length;n<o;n++)i[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let n=0,o=i.length;n<o;n++)i[n].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let n=0,o=i.length;n<o;n++)i[n].updateMatrixWorld(t)}updateWorldMatrix(t,i){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let o=this.children;for(let s=0,r=o.length;s<r;s++)o[s].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",n={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(a=>({...a})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function s(a,u){return a[u.uuid]===void 0&&(a[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let u=a.shapes;if(Array.isArray(u))for(let c=0,l=u.length;c<l;c++){let x=u[c];s(t.shapes,x)}else s(t.shapes,u)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let u=0,c=this.material.length;u<c;u++)a.push(s(t.materials,this.material[u]));o.material=a}else o.material=s(t.materials,this.material);if(this.children.length>0){o.children=[];for(let a=0;a<this.children.length;a++)o.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let a=0;a<this.animations.length;a++){let u=this.animations[a];o.animations.push(s(t.animations,u))}}if(i){let a=r(t.geometries),u=r(t.materials),c=r(t.textures),l=r(t.images),x=r(t.shapes),h=r(t.skeletons),m=r(t.animations),g=r(t.nodes);a.length>0&&(n.geometries=a),u.length>0&&(n.materials=u),c.length>0&&(n.textures=c),l.length>0&&(n.images=l),x.length>0&&(n.shapes=x),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=o,n;function r(a){let u=[];for(let c in a){let l=a[c];delete l.metadata,u.push(l)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let n=0;n<t.children.length;n++){let o=t.children[n];this.add(o.clone())}return this}};Yn.DEFAULT_UP=new C(0,1,0);Yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ln=new C,is=new C,Cg=new C,ns=new C,du=new C,_u=new C,LS=new C,Yg=new C,Jg=new C,bg=new C,zg=new Je,Hg=new Je,Ag=new Je,Ds=class e{constructor(t=new C,i=new C,n=new C){this.a=t,this.b=i,this.c=n}static getNormal(t,i,n,o){o.subVectors(n,i),Ln.subVectors(t,i),o.cross(Ln);let s=o.lengthSq();return s>0?o.multiplyScalar(1/Math.sqrt(s)):o.set(0,0,0)}static getBarycoord(t,i,n,o,s){Ln.subVectors(o,i),is.subVectors(n,i),Cg.subVectors(t,i);let r=Ln.dot(Ln),a=Ln.dot(is),u=Ln.dot(Cg),c=is.dot(is),l=is.dot(Cg),x=r*c-a*a;if(x===0)return s.set(0,0,0),null;let h=1/x,m=(c*u-a*l)*h,g=(r*l-a*u)*h;return s.set(1-m-g,g,m)}static containsPoint(t,i,n,o){return this.getBarycoord(t,i,n,o,ns)===null?!1:ns.x>=0&&ns.y>=0&&ns.x+ns.y<=1}static getInterpolation(t,i,n,o,s,r,a,u){return this.getBarycoord(t,i,n,o,ns)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,ns.x),u.addScaledVector(r,ns.y),u.addScaledVector(a,ns.z),u)}static getInterpolatedAttribute(t,i,n,o,s,r){return zg.setScalar(0),Hg.setScalar(0),Ag.setScalar(0),zg.fromBufferAttribute(t,i),Hg.fromBufferAttribute(t,n),Ag.fromBufferAttribute(t,o),r.setScalar(0),r.addScaledVector(zg,s.x),r.addScaledVector(Hg,s.y),r.addScaledVector(Ag,s.z),r}static isFrontFacing(t,i,n,o){return Ln.subVectors(n,i),is.subVectors(t,i),Ln.cross(is).dot(o)<0}set(t,i,n){return this.a.copy(t),this.b.copy(i),this.c.copy(n),this}setFromPointsAndIndices(t,i,n,o){return this.a.copy(t[i]),this.b.copy(t[n]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,i,n,o){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ln.subVectors(this.c,this.b),is.subVectors(this.a,this.b),Ln.cross(is).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return e.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,n,o,s){return e.getInterpolation(t,this.a,this.b,this.c,i,n,o,s)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){let n=this.a,o=this.b,s=this.c,r,a;du.subVectors(o,n),_u.subVectors(s,n),Yg.subVectors(t,n);let u=du.dot(Yg),c=_u.dot(Yg);if(u<=0&&c<=0)return i.copy(n);Jg.subVectors(t,o);let l=du.dot(Jg),x=_u.dot(Jg);if(l>=0&&x<=l)return i.copy(o);let h=u*x-l*c;if(h<=0&&u>=0&&l<=0)return r=u/(u-l),i.copy(n).addScaledVector(du,r);bg.subVectors(t,s);let m=du.dot(bg),g=_u.dot(bg);if(g>=0&&m<=g)return i.copy(s);let _=m*c-u*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),i.copy(n).addScaledVector(_u,a);let d=l*g-m*x;if(d<=0&&x-l>=0&&m-g>=0)return LS.subVectors(s,o),a=(x-l)/(x-l+(m-g)),i.copy(o).addScaledVector(LS,a);let f=1/(d+_+h);return r=_*f,a=h*f,i.copy(n).addScaledVector(du,r).addScaledVector(_u,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},CZ={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qs={h:0,s:0,l:0},Kh={h:0,s:0,l:0};function Xg(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}var Qt=class{constructor(t,i,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,n)}set(t,i,n){if(i===void 0&&n===void 0){let o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,i,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=di){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Dt.colorSpaceToWorking(this,i),this}setRGB(t,i,n,o=Dt.workingColorSpace){return this.r=t,this.g=i,this.b=n,Dt.colorSpaceToWorking(this,o),this}setHSL(t,i,n,o=Dt.workingColorSpace){if(t=s4(t,1),i=qt(i,0,1),n=qt(n,0,1),i===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+i):n+i-n*i,r=2*n-s;this.r=Xg(r,s,t+1/3),this.g=Xg(r,s,t),this.b=Xg(r,s,t-1/3)}return Dt.colorSpaceToWorking(this,o),this}setStyle(t,i=di){function n(s){s!==void 0&&parseFloat(s)<1&&Vt("Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,r=o[1],a=o[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,i);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,i);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,i);break;default:Vt("Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=o[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,i);if(r===6)return this.setHex(parseInt(s,16),i);Vt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=di){let n=CZ[t.toLowerCase()];return n!==void 0?this.setHex(n,i):Vt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=os(t.r),this.g=os(t.g),this.b=os(t.b),this}copyLinearToSRGB(t){return this.r=Ou(t.r),this.g=Ou(t.g),this.b=Ou(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=di){return Dt.workingToColorSpace(Ri.copy(this),t),Math.round(qt(Ri.r*255,0,255))*65536+Math.round(qt(Ri.g*255,0,255))*256+Math.round(qt(Ri.b*255,0,255))}getHexString(t=di){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Dt.workingColorSpace){Dt.workingToColorSpace(Ri.copy(this),i);let n=Ri.r,o=Ri.g,s=Ri.b,r=Math.max(n,o,s),a=Math.min(n,o,s),u,c,l=(a+r)/2;if(a===r)u=0,c=0;else{let x=r-a;switch(c=l<=.5?x/(r+a):x/(2-r-a),r){case n:u=(o-s)/x+(o<s?6:0);break;case o:u=(s-n)/x+2;break;case s:u=(n-o)/x+4;break}u/=6}return t.h=u,t.s=c,t.l=l,t}getRGB(t,i=Dt.workingColorSpace){return Dt.workingToColorSpace(Ri.copy(this),i),t.r=Ri.r,t.g=Ri.g,t.b=Ri.b,t}getStyle(t=di){Dt.workingToColorSpace(Ri.copy(this),t);let i=Ri.r,n=Ri.g,o=Ri.b;return t!==di?`color(${t} ${i.toFixed(3)} ${n.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(n*255)},${Math.round(o*255)})`}offsetHSL(t,i,n){return this.getHSL(Qs),this.setHSL(Qs.h+t,Qs.s+i,Qs.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,n){return this.r=t.r+(i.r-t.r)*n,this.g=t.g+(i.g-t.g)*n,this.b=t.b+(i.b-t.b)*n,this}lerpHSL(t,i){this.getHSL(Qs),t.getHSL(Kh);let n=Kg(Qs.h,Kh.h,i),o=Kg(Qs.s,Kh.s,i),s=Kg(Qs.l,Kh.l,i);return this.setHSL(n,o,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let i=this.r,n=this.g,o=this.b,s=t.elements;return this.r=s[0]*i+s[3]*n+s[6]*o,this.g=s[1]*i+s[4]*n+s[7]*o,this.b=s[2]*i+s[5]*n+s[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ri=new Qt;Qt.NAMES=CZ;var _4=0,Ar=class extends rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_4++}),this.uuid=Sl(),this.name="",this.type="Material",this.blending=br,this.side=ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jh,this.blendDst=bh,this.blendEquation=Ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tk,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jr,this.stencilZFail=Jr,this.stencilZPass=Jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let i in t){let n=t[i];if(n===void 0){Vt(`Material: parameter '${i}' has value of undefined.`);continue}let o=this[i];if(o===void 0){Vt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(n):o&&o.isVector3&&n&&n.isVector3?o.copy(n):this[i]=n}}toJSON(t){let i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==br&&(n.blending=this.blending),this.side!==ss&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Jh&&(n.blendSrc=this.blendSrc),this.blendDst!==bh&&(n.blendDst=this.blendDst),this.blendEquation!==Ps&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==zr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tk&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Jr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Jr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function o(s){let r=[];for(let a in s){let u=s[a];delete u.metadata,r.push(u)}return r}if(i){let s=o(t.textures),r=o(t.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let i=t.clippingPlanes,n=null;if(i!==null){let o=i.length;n=new Array(o);for(let s=0;s!==o;++s)n[s]=i[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},us=class extends Ar{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new po,this.combine=ak,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ti=new C,Eh=new Wt,g4=0,pn=class{constructor(t,i,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:g4++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=n,this.usage=ek,this.updateRanges=[],this.gpuType=ro,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,n){t*=this.itemSize,n*=i.itemSize;for(let o=0,s=this.itemSize;o<s;o++)this.array[t+o]=i.array[n+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,n=this.count;i<n;i++)Eh.fromBufferAttribute(this,i),Eh.applyMatrix3(t),this.setXY(i,Eh.x,Eh.y);else if(this.itemSize===3)for(let i=0,n=this.count;i<n;i++)ti.fromBufferAttribute(this,i),ti.applyMatrix3(t),this.setXYZ(i,ti.x,ti.y,ti.z);return this}applyMatrix4(t){for(let i=0,n=this.count;i<n;i++)ti.fromBufferAttribute(this,i),ti.applyMatrix4(t),this.setXYZ(i,ti.x,ti.y,ti.z);return this}applyNormalMatrix(t){for(let i=0,n=this.count;i<n;i++)ti.fromBufferAttribute(this,i),ti.applyNormalMatrix(t),this.setXYZ(i,ti.x,ti.y,ti.z);return this}transformDirection(t){for(let i=0,n=this.count;i<n;i++)ti.fromBufferAttribute(this,i),ti.transformDirection(t),this.setXYZ(i,ti.x,ti.y,ti.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let n=this.array[t*this.itemSize+i];return this.normalized&&(n=Bc(n,this.array)),n}setComponent(t,i,n){return this.normalized&&(n=Pi(n,this.array)),this.array[t*this.itemSize+i]=n,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Bc(i,this.array)),i}setX(t,i){return this.normalized&&(i=Pi(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Bc(i,this.array)),i}setY(t,i){return this.normalized&&(i=Pi(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Bc(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Pi(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Bc(i,this.array)),i}setW(t,i){return this.normalized&&(i=Pi(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,n){return t*=this.itemSize,this.normalized&&(i=Pi(i,this.array),n=Pi(n,this.array)),this.array[t+0]=i,this.array[t+1]=n,this}setXYZ(t,i,n,o){return t*=this.itemSize,this.normalized&&(i=Pi(i,this.array),n=Pi(n,this.array),o=Pi(o,this.array)),this.array[t+0]=i,this.array[t+1]=n,this.array[t+2]=o,this}setXYZW(t,i,n,o,s){return t*=this.itemSize,this.normalized&&(i=Pi(i,this.array),n=Pi(n,this.array),o=Pi(o,this.array),s=Pi(s,this.array)),this.array[t+0]=i,this.array[t+1]=n,this.array[t+2]=o,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ek&&(t.usage=this.usage),t}};var rl=class extends pn{constructor(t,i,n){super(new Uint16Array(t),i,n)}};var al=class extends pn{constructor(t,i,n){super(new Uint32Array(t),i,n)}};var Ui=class extends pn{constructor(t,i,n){super(new Float32Array(t),i,n)}},k4=0,Cn=new ii,qg=new Yn,gu=new C,Mn=new Ls,tl=new Ls,fi=new C,io=class e extends rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:k4++}),this.uuid=Sl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sk(t)?al:rl)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,n=0){this.groups.push({start:t,count:i,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ut().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Cn.makeRotationFromQuaternion(t),this.applyMatrix4(Cn),this}rotateX(t){return Cn.makeRotationX(t),this.applyMatrix4(Cn),this}rotateY(t){return Cn.makeRotationY(t),this.applyMatrix4(Cn),this}rotateZ(t){return Cn.makeRotationZ(t),this.applyMatrix4(Cn),this}translate(t,i,n){return Cn.makeTranslation(t,i,n),this.applyMatrix4(Cn),this}scale(t,i,n){return Cn.makeScale(t,i,n),this.applyMatrix4(Cn),this}lookAt(t){return qg.lookAt(t),qg.updateMatrix(),this.applyMatrix4(qg.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gu).negate(),this.translate(gu.x,gu.y,gu.z),this}setFromPoints(t){let i=this.getAttribute("position");if(i===void 0){let n=[];for(let o=0,s=t.length;o<s;o++){let r=t[o];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Ui(n,3))}else{let n=Math.min(t.length,i.count);for(let o=0;o<n;o++){let s=t[o];i.setXYZ(o,s.x,s.y,s.z||0)}t.length>i.count&&Vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ls);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let n=0,o=i.length;n<o;n++){let s=i[n];Mn.setFromBufferAttribute(s),this.morphTargetsRelative?(fi.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(fi),fi.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(fi)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wu);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(t),i)for(let s=0,r=i.length;s<r;s++){let a=i[s];tl.setFromBufferAttribute(a),this.morphTargetsRelative?(fi.addVectors(Mn.min,tl.min),Mn.expandByPoint(fi),fi.addVectors(Mn.max,tl.max),Mn.expandByPoint(fi)):(Mn.expandByPoint(tl.min),Mn.expandByPoint(tl.max))}Mn.getCenter(n);let o=0;for(let s=0,r=t.count;s<r;s++)fi.fromBufferAttribute(t,s),o=Math.max(o,n.distanceToSquared(fi));if(i)for(let s=0,r=i.length;s<r;s++){let a=i[s],u=this.morphTargetsRelative;for(let c=0,l=a.count;c<l;c++)fi.fromBufferAttribute(a,c),u&&(gu.fromBufferAttribute(t,c),fi.add(gu)),o=Math.max(o,n.distanceToSquared(fi))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=i.position,o=i.normal,s=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*n.count),4));let r=this.getAttribute("tangent"),a=[],u=[];for(let R=0;R<n.count;R++)a[R]=new C,u[R]=new C;let c=new C,l=new C,x=new C,h=new Wt,m=new Wt,g=new Wt,_=new C,d=new C;function f(R,O,S){c.fromBufferAttribute(n,R),l.fromBufferAttribute(n,O),x.fromBufferAttribute(n,S),h.fromBufferAttribute(s,R),m.fromBufferAttribute(s,O),g.fromBufferAttribute(s,S),l.sub(c),x.sub(c),m.sub(h),g.sub(h);let E=1/(m.x*g.y-g.x*m.y);isFinite(E)&&(_.copy(l).multiplyScalar(g.y).addScaledVector(x,-m.y).multiplyScalar(E),d.copy(x).multiplyScalar(m.x).addScaledVector(l,-g.x).multiplyScalar(E),a[R].add(_),a[O].add(_),a[S].add(_),u[R].add(d),u[O].add(d),u[S].add(d))}let k=this.groups;k.length===0&&(k=[{start:0,count:t.count}]);for(let R=0,O=k.length;R<O;++R){let S=k[R],E=S.start,N=S.count;for(let T=E,$=E+N;T<$;T+=3)f(t.getX(T+0),t.getX(T+1),t.getX(T+2))}let M=new C,p=new C,I=new C,w=new C;function Z(R){I.fromBufferAttribute(o,R),w.copy(I);let O=a[R];M.copy(O),M.sub(I.multiplyScalar(I.dot(O))).normalize(),p.crossVectors(w,O);let E=p.dot(u[R])<0?-1:1;r.setXYZW(R,M.x,M.y,M.z,E)}for(let R=0,O=k.length;R<O;++R){let S=k[R],E=S.start,N=S.count;for(let T=E,$=E+N;T<$;T+=3)Z(t.getX(T+0)),Z(t.getX(T+1)),Z(t.getX(T+2))}}computeVertexNormals(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pn(new Float32Array(i.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);let o=new C,s=new C,r=new C,a=new C,u=new C,c=new C,l=new C,x=new C;if(t)for(let h=0,m=t.count;h<m;h+=3){let g=t.getX(h+0),_=t.getX(h+1),d=t.getX(h+2);o.fromBufferAttribute(i,g),s.fromBufferAttribute(i,_),r.fromBufferAttribute(i,d),l.subVectors(r,s),x.subVectors(o,s),l.cross(x),a.fromBufferAttribute(n,g),u.fromBufferAttribute(n,_),c.fromBufferAttribute(n,d),a.add(l),u.add(l),c.add(l),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,u.x,u.y,u.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let h=0,m=i.count;h<m;h+=3)o.fromBufferAttribute(i,h+0),s.fromBufferAttribute(i,h+1),r.fromBufferAttribute(i,h+2),l.subVectors(r,s),x.subVectors(o,s),l.cross(x),n.setXYZ(h+0,l.x,l.y,l.z),n.setXYZ(h+1,l.x,l.y,l.z),n.setXYZ(h+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let i=0,n=t.count;i<n;i++)fi.fromBufferAttribute(t,i),fi.normalize(),t.setXYZ(i,fi.x,fi.y,fi.z)}toNonIndexed(){function t(a,u){let c=a.array,l=a.itemSize,x=a.normalized,h=new c.constructor(u.length*l),m=0,g=0;for(let _=0,d=u.length;_<d;_++){a.isInterleavedBufferAttribute?m=u[_]*a.data.stride+a.offset:m=u[_]*l;for(let f=0;f<l;f++)h[g++]=c[m++]}return new pn(h,l,x)}if(this.index===null)return Vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new e,n=this.index.array,o=this.attributes;for(let a in o){let u=o[a],c=t(u,n);i.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let u=[],c=s[a];for(let l=0,x=c.length;l<x;l++){let h=c[l],m=t(h,n);u.push(m)}i.morphAttributes[a]=u}i.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let a=0,u=r.length;a<u;a++){let c=r[a];i.addGroup(c.start,c.count,c.materialIndex)}return i}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let u=this.parameters;for(let c in u)u[c]!==void 0&&(t[c]=u[c]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let n=this.attributes;for(let u in n){let c=n[u];t.data.attributes[u]=c.toJSON(t.data)}let o={},s=!1;for(let u in this.morphAttributes){let c=this.morphAttributes[u],l=[];for(let x=0,h=c.length;x<h;x++){let m=c[x];l.push(m.toJSON(t.data))}l.length>0&&(o[u]=l,s=!0)}s&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let o=t.attributes;for(let c in o){let l=o[c];this.setAttribute(c,l.clone(i))}let s=t.morphAttributes;for(let c in s){let l=[],x=s[c];for(let h=0,m=x.length;h<m;h++)l.push(x[h].clone(i));this.morphAttributes[c]=l}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,l=r.length;c<l;c++){let x=r[c];this.addGroup(x.start,x.count,x.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},tZ=new ii,Cr=new Dh,Vh=new wu,eZ=new C,Gh=new C,Fh=new C,jh=new C,Qg=new C,Nh=new C,iZ=new C,Th=new C,Fe=class extends Yn{constructor(t=new io,i=new us){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let i=this.geometry.morphAttributes,n=Object.keys(i);if(n.length>0){let o=i[n[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=o.length;s<r;s++){let a=o[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,i){let n=this.geometry,o=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;i.fromBufferAttribute(o,t);let a=this.morphTargetInfluences;if(s&&a){Nh.set(0,0,0);for(let u=0,c=s.length;u<c;u++){let l=a[u],x=s[u];l!==0&&(Qg.fromBufferAttribute(x,t),r?Nh.addScaledVector(Qg,l):Nh.addScaledVector(Qg.sub(i),l))}i.add(Nh)}return i}raycast(t,i){let n=this.geometry,o=this.material,s=this.matrixWorld;o!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vh.copy(n.boundingSphere),Vh.applyMatrix4(s),Cr.copy(t.ray).recast(t.near),!(Vh.containsPoint(Cr.origin)===!1&&(Cr.intersectSphere(Vh,eZ)===null||Cr.origin.distanceToSquared(eZ)>(t.far-t.near)**2))&&(tZ.copy(s).invert(),Cr.copy(t.ray).applyMatrix4(tZ),!(n.boundingBox!==null&&Cr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,i,Cr)))}_computeIntersections(t,i,n){let o,s=this.geometry,r=this.material,a=s.index,u=s.attributes.position,c=s.attributes.uv,l=s.attributes.uv1,x=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,_=h.length;g<_;g++){let d=h[g],f=r[d.materialIndex],k=Math.max(d.start,m.start),M=Math.min(a.count,Math.min(d.start+d.count,m.start+m.count));for(let p=k,I=M;p<I;p+=3){let w=a.getX(p),Z=a.getX(p+1),R=a.getX(p+2);o=Wh(this,f,t,n,c,l,x,w,Z,R),o&&(o.faceIndex=Math.floor(p/3),o.face.materialIndex=d.materialIndex,i.push(o))}}else{let g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let d=g,f=_;d<f;d+=3){let k=a.getX(d),M=a.getX(d+1),p=a.getX(d+2);o=Wh(this,r,t,n,c,l,x,k,M,p),o&&(o.faceIndex=Math.floor(d/3),i.push(o))}}else if(u!==void 0)if(Array.isArray(r))for(let g=0,_=h.length;g<_;g++){let d=h[g],f=r[d.materialIndex],k=Math.max(d.start,m.start),M=Math.min(u.count,Math.min(d.start+d.count,m.start+m.count));for(let p=k,I=M;p<I;p+=3){let w=p,Z=p+1,R=p+2;o=Wh(this,f,t,n,c,l,x,w,Z,R),o&&(o.faceIndex=Math.floor(p/3),o.face.materialIndex=d.materialIndex,i.push(o))}}else{let g=Math.max(0,m.start),_=Math.min(u.count,m.start+m.count);for(let d=g,f=_;d<f;d+=3){let k=d,M=d+1,p=d+2;o=Wh(this,r,t,n,c,l,x,k,M,p),o&&(o.faceIndex=Math.floor(d/3),i.push(o))}}}};function M4(e,t,i,n,o,s,r,a){let u;if(t.side===$i?u=n.intersectTriangle(r,s,o,!0,a):u=n.intersectTriangle(o,s,r,t.side===ss,a),u===null)return null;Th.copy(a),Th.applyMatrix4(e.matrixWorld);let c=i.ray.origin.distanceTo(Th);return c<i.near||c>i.far?null:{distance:c,point:Th.clone(),object:e}}function Wh(e,t,i,n,o,s,r,a,u,c){e.getVertexPosition(a,Gh),e.getVertexPosition(u,Fh),e.getVertexPosition(c,jh);let l=M4(e,t,i,n,Gh,Fh,jh,iZ);if(l){let x=new C;Ds.getBarycoord(iZ,Gh,Fh,jh,x),o&&(l.uv=Ds.getInterpolatedAttribute(o,a,u,c,x,new Wt)),s&&(l.uv1=Ds.getInterpolatedAttribute(s,a,u,c,x,new Wt)),r&&(l.normal=Ds.getInterpolatedAttribute(r,a,u,c,x,new C),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));let h={a,b:u,c,normal:new C,materialIndex:0};Ds.getNormal(Gh,Fh,jh,h.normal),l.face=h,l.barycoord=x}return l}var On=class e extends io{constructor(t=1,i=1,n=1,o=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:n,widthSegments:o,heightSegments:s,depthSegments:r};let a=this;o=Math.floor(o),s=Math.floor(s),r=Math.floor(r);let u=[],c=[],l=[],x=[],h=0,m=0;g("z","y","x",-1,-1,n,i,t,r,s,0),g("z","y","x",1,-1,n,i,-t,r,s,1),g("x","z","y",1,1,t,n,i,o,r,2),g("x","z","y",1,-1,t,n,-i,o,r,3),g("x","y","z",1,-1,t,i,n,o,s,4),g("x","y","z",-1,-1,t,i,-n,o,s,5),this.setIndex(u),this.setAttribute("position",new Ui(c,3)),this.setAttribute("normal",new Ui(l,3)),this.setAttribute("uv",new Ui(x,2));function g(_,d,f,k,M,p,I,w,Z,R,O){let S=p/Z,E=I/R,N=p/2,T=I/2,$=w/2,z=Z+1,U=R+1,Y=0,Q=0,ut=new C;for(let it=0;it<U;it++){let lt=it*E-T;for(let Gt=0;Gt<z;Gt++){let Nt=Gt*S-N;ut[_]=Nt*k,ut[d]=lt*M,ut[f]=$,c.push(ut.x,ut.y,ut.z),ut[_]=0,ut[d]=0,ut[f]=w>0?1:-1,l.push(ut.x,ut.y,ut.z),x.push(Gt/Z),x.push(1-it/R),Y+=1}}for(let it=0;it<R;it++)for(let lt=0;lt<Z;lt++){let Gt=h+lt+z*it,Nt=h+lt+z*(it+1),Pt=h+(lt+1)+z*(it+1),Lt=h+(lt+1)+z*it;u.push(Gt,Nt,Lt),u.push(Nt,Pt,Lt),Q+=6}a.addGroup(m,Q,O),m+=Q,h+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Dr(e){let t={};for(let i in e){t[i]={};for(let n in e[i]){let o=e[i][n];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(Vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][n]=null):t[i][n]=o.clone():Array.isArray(o)?t[i][n]=o.slice():t[i][n]=o}}return t}function Ei(e){let t={};for(let i=0;i<e.length;i++){let n=Dr(e[i]);for(let o in n)t[o]=n[o]}return t}function p4(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function wk(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Dt.workingColorSpace}var YZ={clone:Dr,merge:Ei},O4=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,I4=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ni=class extends Ar{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=O4,this.fragmentShader=I4,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Dr(t.uniforms),this.uniformsGroups=p4(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(let o in this.uniforms){let r=this.uniforms[o].value;r&&r.isTexture?i.uniforms[o]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?i.uniforms[o]={type:"c",value:r.getHex()}:r&&r.isVector2?i.uniforms[o]={type:"v2",value:r.toArray()}:r&&r.isVector3?i.uniforms[o]={type:"v3",value:r.toArray()}:r&&r.isVector4?i.uniforms[o]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?i.uniforms[o]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?i.uniforms[o]={type:"m4",value:r.toArray()}:i.uniforms[o]={value:r}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;let n={};for(let o in this.extensions)this.extensions[o]===!0&&(n[o]=!0);return Object.keys(n).length>0&&(i.extensions=n),i}},ul=class extends Yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ii,this.projectionMatrix=new ii,this.projectionMatrixInverse=new ii,this.coordinateSystem=to,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Bs=new C,nZ=new Wt,oZ=new Wt,ei=class extends ul{constructor(t=50,i=1,n=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=o,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let i=.5*this.getFilmHeight()/t;this.fov=Xh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Rg*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xh*2*Math.atan(Math.tan(Rg*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,n){Bs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bs.x,Bs.y).multiplyScalar(-t/Bs.z),Bs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bs.x,Bs.y).multiplyScalar(-t/Bs.z)}getViewSize(t,i){return this.getViewBounds(t,nZ,oZ),i.subVectors(oZ,nZ)}setViewOffset(t,i,n,o,s,r){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=n,this.view.offsetY=o,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,i=t*Math.tan(Rg*.5*this.fov)/this.zoom,n=2*i,o=this.aspect*n,s=-.5*o,r=this.view;if(this.view!==null&&this.view.enabled){let u=r.fullWidth,c=r.fullHeight;s+=r.offsetX*o/u,i-=r.offsetY*n/c,o*=r.width/u,n*=r.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+o,i,i-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}},ku=-90,Mu=1,Ph=class extends Yn{constructor(t,i,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let o=new ei(ku,Mu,t,i);o.layers=this.layers,this.add(o);let s=new ei(ku,Mu,t,i);s.layers=this.layers,this.add(s);let r=new ei(ku,Mu,t,i);r.layers=this.layers,this.add(r);let a=new ei(ku,Mu,t,i);a.layers=this.layers,this.add(a);let u=new ei(ku,Mu,t,i);u.layers=this.layers,this.add(u);let c=new ei(ku,Mu,t,i);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,i=this.children.concat(),[n,o,s,r,a,u]=i;for(let c of i)this.remove(c);if(t===to)n.up.set(0,1,0),n.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(t===nl)n.up.set(0,-1,0),n.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of i)this.add(c),c.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,r,a,u,c,l]=this.children,x=t.getRenderTarget(),h=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,o),t.render(i,s),t.setRenderTarget(n,1,o),t.render(i,r),t.setRenderTarget(n,2,o),t.render(i,a),t.setRenderTarget(n,3,o),t.render(i,u),t.setRenderTarget(n,4,o),t.render(i,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,o),t.render(i,l),t.setRenderTarget(x,h,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},cl=class extends Ki{constructor(t=[],i=or,n,o,s,r,a,u,c,l){super(t,i,n,o,s,r,a,u,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ll=class extends yi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},o=[n,n,n,n,n,n];this.texture=new cl(o),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new On(5,5,5),s=new ni({name:"CubemapFromEquirect",uniforms:Dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$i,blending:Io});s.uniforms.tEquirect.value=i;let r=new Fe(o,s),a=i.minFilter;return i.minFilter===sr&&(i.minFilter=Ye),new Ph(1,10,this).update(t,r),i.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,i=!0,n=!0,o=!0){let s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(i,n,o);t.setRenderTarget(s)}},eo=class extends Yn{constructor(){super(),this.isGroup=!0,this.type="Group"}},y4={type:"move"},vu=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new eo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new eo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new eo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let i=this._hand;if(i)for(let n of t.hand.values())this._getHandJoint(i,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,n){let o=null,s=null,r=null,a=this._targetRay,u=this._grip,c=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let _ of t.hand.values()){let d=i.getJointPose(_,n),f=this._getHandJoint(c,_);d!==null&&(f.matrix.fromArray(d.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=d.radius),f.visible=d!==null}let l=c.joints["index-finger-tip"],x=c.joints["thumb-tip"],h=l.position.distanceTo(x.position),m=.02,g=.005;c.inputState.pinching&&h>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else u!==null&&t.gripSpace&&(s=i.getPose(t.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));a!==null&&(o=i.getPose(t.targetRaySpace,n),o===null&&s!==null&&(o=s),o!==null&&(a.matrix.fromArray(o.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,o.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(o.linearVelocity)):a.hasLinearVelocity=!1,o.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(o.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(y4)))}return a!==null&&(a.visible=o!==null),u!==null&&(u.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){let n=new eo;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[i.jointName]=n,t.add(n)}return t.joints[i.jointName]}};var no=class extends Yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new po,this.environmentIntensity=1,this.environmentRotation=new po,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}};var Lh=class extends Ki{constructor(t=null,i=1,n=1,o,s,r,a,u,c=_i,l=_i,x,h){super(null,r,a,u,c,l,o,s,x,h),this.isDataTexture=!0,this.image={data:t,width:i,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bg=new C,S4=new C,Z4=new Ut,go=class{constructor(t=new C(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,n,o){return this.normal.set(t,i,n),this.constant=o,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,n){let o=Bg.subVectors(n,i).cross(S4.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){let n=t.delta(Bg),o=this.normal.dot(n);if(o===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/o;return s<0||s>1?null:i.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let i=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return i<0&&n>0||n<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){let n=i||Z4.getNormalMatrix(t),o=this.coplanarPoint(Bg).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-o.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Yr=new wu,w4=new Wt(.5,.5),Uh=new C,xl=class{constructor(t=new go,i=new go,n=new go,o=new go,s=new go,r=new go){this.planes=[t,i,n,o,s,r]}set(t,i,n,o,s,r){let a=this.planes;return a[0].copy(t),a[1].copy(i),a[2].copy(n),a[3].copy(o),a[4].copy(s),a[5].copy(r),this}copy(t){let i=this.planes;for(let n=0;n<6;n++)i[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,i=to,n=!1){let o=this.planes,s=t.elements,r=s[0],a=s[1],u=s[2],c=s[3],l=s[4],x=s[5],h=s[6],m=s[7],g=s[8],_=s[9],d=s[10],f=s[11],k=s[12],M=s[13],p=s[14],I=s[15];if(o[0].setComponents(c-r,m-l,f-g,I-k).normalize(),o[1].setComponents(c+r,m+l,f+g,I+k).normalize(),o[2].setComponents(c+a,m+x,f+_,I+M).normalize(),o[3].setComponents(c-a,m-x,f-_,I-M).normalize(),n)o[4].setComponents(u,h,d,p).normalize(),o[5].setComponents(c-u,m-h,f-d,I-p).normalize();else if(o[4].setComponents(c-u,m-h,f-d,I-p).normalize(),i===to)o[5].setComponents(c+u,m+h,f+d,I+p).normalize();else if(i===nl)o[5].setComponents(u,h,d,p).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Yr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Yr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Yr)}intersectsSprite(t){Yr.center.set(0,0,0);let i=w4.distanceTo(t.center);return Yr.radius=.7071067811865476+i,Yr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Yr)}intersectsSphere(t){let i=this.planes,n=t.center,o=-t.radius;for(let s=0;s<6;s++)if(i[s].distanceToPoint(n)<o)return!1;return!0}intersectsBox(t){let i=this.planes;for(let n=0;n<6;n++){let o=i[n];if(Uh.x=o.normal.x>0?t.max.x:t.min.x,Uh.y=o.normal.y>0?t.max.y:t.min.y,Uh.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(Uh)<0)return!1}return!0}containsPoint(t){let i=this.planes;for(let n=0;n<6;n++)if(i[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var hl=class extends Ki{constructor(t,i,n,o,s=Ye,r=Ye,a,u,c){super(t,i,n,o,s,r,a,u,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;let l=this;function x(){l.needsUpdate=!0,l._requestVideoFrameCallbackId=t.requestVideoFrameCallback(x)}"requestVideoFrameCallback"in t&&(this._requestVideoFrameCallbackId=t.requestVideoFrameCallback(x))}clone(){return new this.constructor(this.image).copy(this)}update(){let t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}};var tr=class extends Ki{constructor(t,i,n=so,o,s,r,a=_i,u=_i,c,l=Mo,x=1){if(l!==Mo&&l!==rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:i,depth:x};super(h,o,s,r,a,u,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Zu(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}},tm=class extends tr{constructor(t,i=so,n=or,o,s,r=_i,a=_i,u,c=Mo){let l={width:t,height:t,depth:1},x=[l,l,l,l,l,l];super(t,t,i,n,o,s,r,a,u,c),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ml=class extends Ki{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var fl=class e extends io{constructor(t=1,i=1,n=1,o=32,s=1,r=!1,a=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:n,radialSegments:o,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:u};let c=this;o=Math.floor(o),s=Math.floor(s);let l=[],x=[],h=[],m=[],g=0,_=[],d=n/2,f=0;k(),r===!1&&(t>0&&M(!0),i>0&&M(!1)),this.setIndex(l),this.setAttribute("position",new Ui(x,3)),this.setAttribute("normal",new Ui(h,3)),this.setAttribute("uv",new Ui(m,2));function k(){let p=new C,I=new C,w=0,Z=(i-t)/n;for(let R=0;R<=s;R++){let O=[],S=R/s,E=S*(i-t)+t;for(let N=0;N<=o;N++){let T=N/o,$=T*u+a,z=Math.sin($),U=Math.cos($);I.x=E*z,I.y=-S*n+d,I.z=E*U,x.push(I.x,I.y,I.z),p.set(z,Z,U).normalize(),h.push(p.x,p.y,p.z),m.push(T,1-S),O.push(g++)}_.push(O)}for(let R=0;R<o;R++)for(let O=0;O<s;O++){let S=_[O][R],E=_[O+1][R],N=_[O+1][R+1],T=_[O][R+1];(t>0||O!==0)&&(l.push(S,E,T),w+=3),(i>0||O!==s-1)&&(l.push(E,N,T),w+=3)}c.addGroup(f,w,0),f+=w}function M(p){let I=g,w=new Wt,Z=new C,R=0,O=p===!0?t:i,S=p===!0?1:-1;for(let N=1;N<=o;N++)x.push(0,d*S,0),h.push(0,S,0),m.push(.5,.5),g++;let E=g;for(let N=0;N<=o;N++){let $=N/o*u+a,z=Math.cos($),U=Math.sin($);Z.x=O*U,Z.y=d*S,Z.z=O*z,x.push(Z.x,Z.y,Z.z),h.push(0,S,0),w.x=z*.5+.5,w.y=U*.5*S+.5,m.push(w.x,w.y),g++}for(let N=0;N<o;N++){let T=I+N,$=E+N;p===!0?l.push($,$+1,T):l.push($+1,$,T),R+=3}c.addGroup(f,R,p===!0?1:2),f+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var er=class e extends io{constructor(t=1,i=1,n=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:n,heightSegments:o};let s=t/2,r=i/2,a=Math.floor(n),u=Math.floor(o),c=a+1,l=u+1,x=t/a,h=i/u,m=[],g=[],_=[],d=[];for(let f=0;f<l;f++){let k=f*h-r;for(let M=0;M<c;M++){let p=M*x-s;g.push(p,-k,0),_.push(0,0,1),d.push(M/a),d.push(1-f/u)}}for(let f=0;f<u;f++)for(let k=0;k<a;k++){let M=k+c*f,p=k+c*(f+1),I=k+1+c*(f+1),w=k+1+c*f;m.push(M,p,w),m.push(p,I,w)}this.setIndex(m),this.setAttribute("position",new Ui(g,3)),this.setAttribute("normal",new Ui(_,3)),this.setAttribute("uv",new Ui(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};var em=class extends ni{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var im=class extends Ar{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=KZ,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},nm=class extends Ar{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function $h(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}var Xr=class{constructor(t,i,n,o){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=o!==void 0?o:new i.constructor(n),this.sampleValues=i,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let i=this.parameterPositions,n=this._cachedIndex,o=i[n],s=i[n-1];t:{e:{let r;i:{n:if(!(t<o)){for(let a=n+2;;){if(o===void 0){if(t<s)break n;return n=i.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=o,o=i[++n],t<o)break e}r=i.length;break i}if(!(t>=s)){let a=i[1];t<a&&(n=2,s=a);for(let u=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(o=s,s=i[--n-1],t>=s)break e}r=n,n=0;break i}break t}for(;n<r;){let a=n+r>>>1;t<i[a]?r=a:n=a+1}if(o=i[n],s=i[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(o===void 0)return n=i.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,o)}return this.interpolate_(n,s,t,o)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let i=this.resultBuffer,n=this.sampleValues,o=this.valueSize,s=t*o;for(let r=0;r!==o;++r)i[r]=n[s+r];return i}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},om=class extends Xr{constructor(t,i,n,o){super(t,i,n,o),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dg,endingEnd:Dg}}intervalChanged_(t,i,n){let o=this.parameterPositions,s=t-2,r=t+1,a=o[s],u=o[r];if(a===void 0)switch(this.getSettings_().endingStart){case Pg:s=t,a=2*i-n;break;case Lg:s=o.length-2,a=i+o[s]-o[s+1];break;default:s=t,a=n}if(u===void 0)switch(this.getSettings_().endingEnd){case Pg:r=t,u=2*n-i;break;case Lg:r=1,u=n+o[1]-o[0];break;default:r=t-1,u=i}let c=(n-i)*.5,l=this.valueSize;this._weightPrev=c/(i-a),this._weightNext=c/(u-n),this._offsetPrev=s*l,this._offsetNext=r*l}interpolate_(t,i,n,o){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,u=t*a,c=u-a,l=this._offsetPrev,x=this._offsetNext,h=this._weightPrev,m=this._weightNext,g=(n-i)/(o-i),_=g*g,d=_*g,f=-h*d+2*h*_-h*g,k=(1+h)*d+(-1.5-2*h)*_+(-.5+h)*g+1,M=(-1-m)*d+(1.5+m)*_+.5*g,p=m*d-m*_;for(let I=0;I!==a;++I)s[I]=f*r[l+I]+k*r[c+I]+M*r[u+I]+p*r[x+I];return s}},sm=class extends Xr{constructor(t,i,n,o){super(t,i,n,o)}interpolate_(t,i,n,o){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,u=t*a,c=u-a,l=(n-i)/(o-i),x=1-l;for(let h=0;h!==a;++h)s[h]=r[c+h]*x+r[u+h]*l;return s}},rm=class extends Xr{constructor(t,i,n,o){super(t,i,n,o)}interpolate_(t){return this.copySampleValue_(t-1)}},In=class{constructor(t,i,n,o){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(i===void 0||i.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=$h(i,this.TimeBufferType),this.values=$h(n,this.ValueBufferType),this.setInterpolation(o||this.DefaultInterpolation)}static toJSON(t){let i=t.constructor,n;if(i.toJSON!==this.toJSON)n=i.toJSON(t);else{n={name:t.name,times:$h(t.times,Array),values:$h(t.values,Array)};let o=t.getInterpolation();o!==t.DefaultInterpolation&&(n.interpolation=o)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new rm(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new sm(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new om(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let i;switch(t){case el:i=this.InterpolantFactoryMethodDiscrete;break;case Ah:i=this.InterpolantFactoryMethodLinear;break;case Ch:i=this.InterpolantFactoryMethodSmooth;break}if(i===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Vt("KeyframeTrack:",n),this}return this.createInterpolant=i,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return el;case this.InterpolantFactoryMethodLinear:return Ah;case this.InterpolantFactoryMethodSmooth:return Ch}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let i=this.times;for(let n=0,o=i.length;n!==o;++n)i[n]+=t}return this}scale(t){if(t!==1){let i=this.times;for(let n=0,o=i.length;n!==o;++n)i[n]*=t}return this}trim(t,i){let n=this.times,o=n.length,s=0,r=o-1;for(;s!==o&&n[s]<t;)++s;for(;r!==-1&&n[r]>i;)--r;if(++r,s!==0||r!==o){s>=r&&(r=Math.max(r,1),s=r-1);let a=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let t=!0,i=this.getValueSize();i-Math.floor(i)!==0&&(Kt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,o=this.values,s=n.length;s===0&&(Kt("KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let a=0;a!==s;a++){let u=n[a];if(typeof u=="number"&&isNaN(u)){Kt("KeyframeTrack: Time is not a valid number.",this,a,u),t=!1;break}if(r!==null&&r>u){Kt("KeyframeTrack: Out of order keys.",this,a,u,r),t=!1;break}r=u}if(o!==void 0&&o4(o))for(let a=0,u=o.length;a!==u;++a){let c=o[a];if(isNaN(c)){Kt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),i=this.values.slice(),n=this.getValueSize(),o=this.getInterpolation()===Ch,s=t.length-1,r=1;for(let a=1;a<s;++a){let u=!1,c=t[a],l=t[a+1];if(c!==l&&(a!==1||c!==t[0]))if(o)u=!0;else{let x=a*n,h=x-n,m=x+n;for(let g=0;g!==n;++g){let _=i[x+g];if(_!==i[h+g]||_!==i[m+g]){u=!0;break}}}if(u){if(a!==r){t[r]=t[a];let x=a*n,h=r*n;for(let m=0;m!==n;++m)i[h+m]=i[x+m]}++r}}if(s>0){t[r]=t[s];for(let a=s*n,u=r*n,c=0;c!==n;++c)i[u+c]=i[a+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=i.slice(0,r*n)):(this.times=t,this.values=i),this}clone(){let t=this.times.slice(),i=this.values.slice(),n=this.constructor,o=new n(this.name,t,i);return o.createInterpolant=this.createInterpolant,o}};In.prototype.ValueTypeName="";In.prototype.TimeBufferType=Float32Array;In.prototype.ValueBufferType=Float32Array;In.prototype.DefaultInterpolation=Ah;var ir=class extends In{constructor(t,i,n){super(t,i,n)}};ir.prototype.ValueTypeName="bool";ir.prototype.ValueBufferType=Array;ir.prototype.DefaultInterpolation=el;ir.prototype.InterpolantFactoryMethodLinear=void 0;ir.prototype.InterpolantFactoryMethodSmooth=void 0;var am=class extends In{constructor(t,i,n,o){super(t,i,n,o)}};am.prototype.ValueTypeName="color";var um=class extends In{constructor(t,i,n,o){super(t,i,n,o)}};um.prototype.ValueTypeName="number";var cm=class extends Xr{constructor(t,i,n,o){super(t,i,n,o)}interpolate_(t,i,n,o){let s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,u=(n-i)/(o-i),c=t*a;for(let l=c+a;c!==l;c+=4)as.slerpFlat(s,0,r,c-a,r,c,u);return s}},dl=class extends In{constructor(t,i,n,o){super(t,i,n,o)}InterpolantFactoryMethodLinear(t){return new cm(this.times,this.values,this.getValueSize(),t)}};dl.prototype.ValueTypeName="quaternion";dl.prototype.InterpolantFactoryMethodSmooth=void 0;var nr=class extends In{constructor(t,i,n){super(t,i,n)}};nr.prototype.ValueTypeName="string";nr.prototype.ValueBufferType=Array;nr.prototype.DefaultInterpolation=el;nr.prototype.InterpolantFactoryMethodLinear=void 0;nr.prototype.InterpolantFactoryMethodSmooth=void 0;var lm=class extends In{constructor(t,i,n,o){super(t,i,n,o)}};lm.prototype.ValueTypeName="vector";var Yh={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}},xm=class{constructor(t,i,n){let o=this,s=!1,r=0,a=0,u,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=n,this._abortController=null,this.itemStart=function(l){a++,s===!1&&o.onStart!==void 0&&o.onStart(l,r,a),s=!0},this.itemEnd=function(l){r++,o.onProgress!==void 0&&o.onProgress(l,r,a),r===a&&(s=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(l){o.onError!==void 0&&o.onError(l)},this.resolveURL=function(l){return u?u(l):l},this.setURLModifier=function(l){return u=l,this},this.addHandler=function(l,x){return c.push(l,x),this},this.removeHandler=function(l){let x=c.indexOf(l);return x!==-1&&c.splice(x,2),this},this.getHandler=function(l){for(let x=0,h=c.length;x<h;x+=2){let m=c[x],g=c[x+1];if(m.global&&(m.lastIndex=0),m.test(l))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},JZ=new xm,Ru=class{constructor(t){this.manager=t!==void 0?t:JZ,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){let n=this;return new Promise(function(o,s){n.load(t,o,i,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ru.DEFAULT_MATERIAL_NAME="__DEFAULT";var pu=new WeakMap,hm=class extends Ru{constructor(t){super(t)}load(t,i,n,o){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,r=Yh.get(`image:${t}`);if(r!==void 0){if(r.complete===!0)s.manager.itemStart(t),setTimeout(function(){i&&i(r),s.manager.itemEnd(t)},0);else{let x=pu.get(r);x===void 0&&(x=[],pu.set(r,x)),x.push({onLoad:i,onError:o})}return r}let a=Iu("img");function u(){l(),i&&i(this);let x=pu.get(this)||[];for(let h=0;h<x.length;h++){let m=x[h];m.onLoad&&m.onLoad(this)}pu.delete(this),s.manager.itemEnd(t)}function c(x){l(),o&&o(x),Yh.remove(`image:${t}`);let h=pu.get(this)||[];for(let m=0;m<h.length;m++){let g=h[m];g.onError&&g.onError(x)}pu.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function l(){a.removeEventListener("load",u,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",u,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Yh.add(`image:${t}`,a),s.manager.itemStart(t),a.src=t,a}};var cs=class extends Ru{constructor(t){super(t)}load(t,i,n,o){let s=new Ki,r=new hm(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(a){s.image=a,s.needsUpdate=!0,i!==void 0&&i(s)},n,o),s}};var qr=class extends ul{constructor(t=-1,i=1,n=1,o=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=n,this.bottom=o,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,n,o,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=n,this.view.offsetY=o,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,o=(this.top+this.bottom)/2,s=n-t,r=n+t,a=o+i,u=o-i;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,a-=l*this.view.offsetY,u=a-l*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}};var mm=class extends ei{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},_l=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}};var vk="\\[\\]\\.:\\/",v4=new RegExp("["+vk+"]","g"),Rk="[^"+vk+"]",R4="[^"+vk.replace("\\.","")+"]",K4=/((?:WC+[\/:])*)/.source.replace("WC",Rk),E4=/(WCOD+)?/.source.replace("WCOD",R4),V4=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Rk),G4=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Rk),F4=new RegExp("^"+K4+E4+V4+G4+"$"),j4=["material","materials","bones","map"],ik=class{constructor(t,i,n){let o=n||Ke.parseTrackName(i);this._targetGroup=t,this._bindings=t.subscribe_(i,o)}getValue(t,i){this.bind();let n=this._targetGroup.nCachedObjects_,o=this._bindings[n];o!==void 0&&o.getValue(t,i)}setValue(t,i){let n=this._bindings;for(let o=this._targetGroup.nCachedObjects_,s=n.length;o!==s;++o)n[o].setValue(t,i)}bind(){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,n=t.length;i!==n;++i)t[i].bind()}unbind(){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,n=t.length;i!==n;++i)t[i].unbind()}},Ke=class e{constructor(t,i,n){this.path=i,this.parsedPath=n||e.parseTrackName(i),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,n){return t&&t.isAnimationObjectGroup?new e.Composite(t,i,n):new e(t,i,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(v4,"")}static parseTrackName(t){let i=F4.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},o=n.nodeName&&n.nodeName.lastIndexOf(".");if(o!==void 0&&o!==-1){let s=n.nodeName.substring(o+1);j4.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,o),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(i);if(n!==void 0)return n}if(t.children){let n=function(s){for(let r=0;r<s.length;r++){let a=s[r];if(a.name===i||a.uuid===i)return a;let u=n(a.children);if(u)return u}return null},o=n(t.children);if(o)return o}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let n=this.resolvedProperty;for(let o=0,s=n.length;o!==s;++o)t[i++]=n[o]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let n=this.resolvedProperty;for(let o=0,s=n.length;o!==s;++o)n[o]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let n=this.resolvedProperty;for(let o=0,s=n.length;o!==s;++o)n[o]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let n=this.resolvedProperty;for(let o=0,s=n.length;o!==s;++o)n[o]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,n=i.objectName,o=i.propertyName,s=i.propertyIndex;if(t||(t=e.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Vt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=i.objectIndex;switch(n){case"materials":if(!t.material){Kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let l=0;l<t.length;l++)if(t[l].name===c){c=l;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[o];if(r===void 0){let c=i.nodeName;Kt("PropertyBinding: Trying to update property for track: "+c+"."+o+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(s!==void 0){if(o==="morphTargetInfluences"){if(!t.geometry){Kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}u=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(u=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=o;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ke.Composite=ik;Ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ke.prototype.GetterByBindingType=[Ke.prototype._getValue_direct,Ke.prototype._getValue_array,Ke.prototype._getValue_arrayElement,Ke.prototype._getValue_toArray];Ke.prototype.SetterByBindingTypeAndVersioning=[[Ke.prototype._setValue_direct,Ke.prototype._setValue_direct_setNeedsUpdate,Ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_array,Ke.prototype._setValue_array_setNeedsUpdate,Ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_arrayElement,Ke.prototype._setValue_arrayElement_setNeedsUpdate,Ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ke.prototype._setValue_fromArray,Ke.prototype._setValue_fromArray_setNeedsUpdate,Ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var jN=new Float32Array(1);function Kk(e,t,i,n){let o=N4(n);switch(i){case pk:return e*t;case Ik:return e*t/o.components*o.byteLength;case Rm:return e*t/o.components*o.byteLength;case Br:return e*t*2/o.components*o.byteLength;case Km:return e*t*2/o.components*o.byteLength;case Ok:return e*t*3/o.components*o.byteLength;case Li:return e*t*4/o.components*o.byteLength;case Em:return e*t*4/o.components*o.byteLength;case pl:case Ol:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Il:case yl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Gm:case jm:return Math.max(e,16)*Math.max(t,8)/4;case Vm:case Fm:return Math.max(e,8)*Math.max(t,8)/2;case Nm:case Tm:case Um:case $m:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Wm:case Cm:case Ym:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Jm:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case bm:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case zm:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Hm:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Am:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Xm:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case qm:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Qm:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Bm:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Dm:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Pm:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Lm:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case tf:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case ef:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case nf:case of:case sf:return Math.ceil(e/4)*Math.ceil(t/4)*16;case rf:case af:return Math.ceil(e/4)*Math.ceil(t/4)*8;case uf:case cf:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function N4(e){switch(e){case yn:case _k:return{byteLength:1,components:1};case Eu:case gk:case Jn:return{byteLength:2,components:1};case wm:case vm:return{byteLength:2,components:4};case so:case Zm:case ro:return{byteLength:4,components:1};case kk:case Mk:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fm}}));typeof window<"u"&&(window.__THREE__?Vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fm);function xw(){let e=null,t=!1,i=null,n=null;function o(s,r){i(s,r),n=e.requestAnimationFrame(o)}return{start:function(){t!==!0&&i!==null&&(n=e.requestAnimationFrame(o),t=!0)},stop:function(){e.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){i=s},setContext:function(s){e=s}}}function T4(e){let t=new WeakMap;function i(a,u){let c=a.array,l=a.usage,x=c.byteLength,h=e.createBuffer();e.bindBuffer(u,h),e.bufferData(u,c,l),a.onUploadCallback();let m;if(c instanceof Float32Array)m=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=e.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=e.HALF_FLOAT:m=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=e.SHORT;else if(c instanceof Uint32Array)m=e.UNSIGNED_INT;else if(c instanceof Int32Array)m=e.INT;else if(c instanceof Int8Array)m=e.BYTE;else if(c instanceof Uint8Array)m=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:x}}function n(a,u,c){let l=u.array,x=u.updateRanges;if(e.bindBuffer(c,a),x.length===0)e.bufferSubData(c,0,l);else{x.sort((m,g)=>m.start-g.start);let h=0;for(let m=1;m<x.length;m++){let g=x[h],_=x[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,x[h]=_)}x.length=h+1;for(let m=0,g=x.length;m<g;m++){let _=x[m];e.bufferSubData(c,_.start*l.BYTES_PER_ELEMENT,l,_.start,_.count)}u.clearUpdateRanges()}u.onUploadCallback()}function o(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let u=t.get(a);u&&(e.deleteBuffer(u.buffer),t.delete(a))}function r(a,u){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let l=t.get(a);(!l||l.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,i(a,u));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,u),c.version=a.version}}return{get:o,remove:s,update:r}}var W4=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,U4=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$4=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,C4=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Y4=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,J4=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,b4=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,z4=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,H4=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,A4=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,X4=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,q4=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Q4=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,B4=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,D4=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,P4=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,L4=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,oE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,rE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,aE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,uE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mE="gl_FragColor = linearToOutputTexel( gl_FragColor );",fE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_E=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,gE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ME=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,pE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,OE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,IE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,SE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ZE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,RE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,KE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,EE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,VE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,GE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,FE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,NE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,TE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,WE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,UE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$E=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,CE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,HE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,AE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,QE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,BE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,DE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,LE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tV=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,eV=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,iV=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nV=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oV=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sV=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,rV=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,aV=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uV=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cV=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lV=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xV=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,hV=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mV=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fV=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dV=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_V=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gV=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kV=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,MV=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pV=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,OV=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,IV=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yV=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,SV=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ZV=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wV=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vV=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,RV=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,KV=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,EV=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,VV=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,GV=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,FV=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jV=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,NV=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,TV=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WV=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UV=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$V=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CV=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YV=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JV=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bV=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,zV=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,HV=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,AV=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,XV=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qV=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,QV=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,BV=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,DV=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PV=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LV=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tG=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,eG=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iG=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,nG=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,oG=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sG=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rG=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,aG=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uG=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cG=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lG=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xG=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hG=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mG=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fG=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dG=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ct={alphahash_fragment:W4,alphahash_pars_fragment:U4,alphamap_fragment:$4,alphamap_pars_fragment:C4,alphatest_fragment:Y4,alphatest_pars_fragment:J4,aomap_fragment:b4,aomap_pars_fragment:z4,batching_pars_vertex:H4,batching_vertex:A4,begin_vertex:X4,beginnormal_vertex:q4,bsdfs:Q4,iridescence_fragment:B4,bumpmap_pars_fragment:D4,clipping_planes_fragment:P4,clipping_planes_pars_fragment:L4,clipping_planes_pars_vertex:tE,clipping_planes_vertex:eE,color_fragment:iE,color_pars_fragment:nE,color_pars_vertex:oE,color_vertex:sE,common:rE,cube_uv_reflection_fragment:aE,defaultnormal_vertex:uE,displacementmap_pars_vertex:cE,displacementmap_vertex:lE,emissivemap_fragment:xE,emissivemap_pars_fragment:hE,colorspace_fragment:mE,colorspace_pars_fragment:fE,envmap_fragment:dE,envmap_common_pars_fragment:_E,envmap_pars_fragment:gE,envmap_pars_vertex:kE,envmap_physical_pars_fragment:KE,envmap_vertex:ME,fog_vertex:pE,fog_pars_vertex:OE,fog_fragment:IE,fog_pars_fragment:yE,gradientmap_pars_fragment:SE,lightmap_pars_fragment:ZE,lights_lambert_fragment:wE,lights_lambert_pars_fragment:vE,lights_pars_begin:RE,lights_toon_fragment:EE,lights_toon_pars_fragment:VE,lights_phong_fragment:GE,lights_phong_pars_fragment:FE,lights_physical_fragment:jE,lights_physical_pars_fragment:NE,lights_fragment_begin:TE,lights_fragment_maps:WE,lights_fragment_end:UE,logdepthbuf_fragment:$E,logdepthbuf_pars_fragment:CE,logdepthbuf_pars_vertex:YE,logdepthbuf_vertex:JE,map_fragment:bE,map_pars_fragment:zE,map_particle_fragment:HE,map_particle_pars_fragment:AE,metalnessmap_fragment:XE,metalnessmap_pars_fragment:qE,morphinstance_vertex:QE,morphcolor_vertex:BE,morphnormal_vertex:DE,morphtarget_pars_vertex:PE,morphtarget_vertex:LE,normal_fragment_begin:tV,normal_fragment_maps:eV,normal_pars_fragment:iV,normal_pars_vertex:nV,normal_vertex:oV,normalmap_pars_fragment:sV,clearcoat_normal_fragment_begin:rV,clearcoat_normal_fragment_maps:aV,clearcoat_pars_fragment:uV,iridescence_pars_fragment:cV,opaque_fragment:lV,packing:xV,premultiplied_alpha_fragment:hV,project_vertex:mV,dithering_fragment:fV,dithering_pars_fragment:dV,roughnessmap_fragment:_V,roughnessmap_pars_fragment:gV,shadowmap_pars_fragment:kV,shadowmap_pars_vertex:MV,shadowmap_vertex:pV,shadowmask_pars_fragment:OV,skinbase_vertex:IV,skinning_pars_vertex:yV,skinning_vertex:SV,skinnormal_vertex:ZV,specularmap_fragment:wV,specularmap_pars_fragment:vV,tonemapping_fragment:RV,tonemapping_pars_fragment:KV,transmission_fragment:EV,transmission_pars_fragment:VV,uv_pars_fragment:GV,uv_pars_vertex:FV,uv_vertex:jV,worldpos_vertex:NV,background_vert:TV,background_frag:WV,backgroundCube_vert:UV,backgroundCube_frag:$V,cube_vert:CV,cube_frag:YV,depth_vert:JV,depth_frag:bV,distance_vert:zV,distance_frag:HV,equirect_vert:AV,equirect_frag:XV,linedashed_vert:qV,linedashed_frag:QV,meshbasic_vert:BV,meshbasic_frag:DV,meshlambert_vert:PV,meshlambert_frag:LV,meshmatcap_vert:tG,meshmatcap_frag:eG,meshnormal_vert:iG,meshnormal_frag:nG,meshphong_vert:oG,meshphong_frag:sG,meshphysical_vert:rG,meshphysical_frag:aG,meshtoon_vert:uG,meshtoon_frag:cG,points_vert:lG,points_frag:xG,shadow_vert:hG,shadow_frag:mG,sprite_vert:fG,sprite_frag:dG},ct={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},So={basic:{uniforms:Ei([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Ct.meshbasic_vert,fragmentShader:Ct.meshbasic_frag},lambert:{uniforms:Ei([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Ct.meshlambert_vert,fragmentShader:Ct.meshlambert_frag},phong:{uniforms:Ei([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:Ct.meshphong_vert,fragmentShader:Ct.meshphong_frag},standard:{uniforms:Ei([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag},toon:{uniforms:Ei([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Ct.meshtoon_vert,fragmentShader:Ct.meshtoon_frag},matcap:{uniforms:Ei([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Ct.meshmatcap_vert,fragmentShader:Ct.meshmatcap_frag},points:{uniforms:Ei([ct.points,ct.fog]),vertexShader:Ct.points_vert,fragmentShader:Ct.points_frag},dashed:{uniforms:Ei([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ct.linedashed_vert,fragmentShader:Ct.linedashed_frag},depth:{uniforms:Ei([ct.common,ct.displacementmap]),vertexShader:Ct.depth_vert,fragmentShader:Ct.depth_frag},normal:{uniforms:Ei([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Ct.meshnormal_vert,fragmentShader:Ct.meshnormal_frag},sprite:{uniforms:Ei([ct.sprite,ct.fog]),vertexShader:Ct.sprite_vert,fragmentShader:Ct.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ct.background_vert,fragmentShader:Ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Ct.backgroundCube_vert,fragmentShader:Ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ct.cube_vert,fragmentShader:Ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ct.equirect_vert,fragmentShader:Ct.equirect_frag},distance:{uniforms:Ei([ct.common,ct.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ct.distance_vert,fragmentShader:Ct.distance_frag},shadow:{uniforms:Ei([ct.lights,ct.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:Ct.shadow_vert,fragmentShader:Ct.shadow_frag}};So.physical={uniforms:Ei([So.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag};var hf={r:0,b:0,g:0},Pr=new po,_G=new ii;function gG(e,t,i,n,o,s,r){let a=new Qt(0),u=s===!0?0:1,c,l,x=null,h=0,m=null;function g(M){let p=M.isScene===!0?M.background:null;return p&&p.isTexture&&(p=(M.backgroundBlurriness>0?i:t).get(p)),p}function _(M){let p=!1,I=g(M);I===null?f(a,u):I&&I.isColor&&(f(I,1),p=!0);let w=e.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(e.autoClear||p)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function d(M,p){let I=g(p);I&&(I.isCubeTexture||I.mapping===kl)?(l===void 0&&(l=new Fe(new On(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:Dr(So.backgroundCube.uniforms),vertexShader:So.backgroundCube.vertexShader,fragmentShader:So.backgroundCube.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,Z,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(l)),Pr.copy(p.backgroundRotation),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),l.material.uniforms.envMap.value=I,l.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(_G.makeRotationFromEuler(Pr)),l.material.toneMapped=Dt.getTransfer(I.colorSpace)!==re,(x!==I||h!==I.version||m!==e.toneMapping)&&(l.material.needsUpdate=!0,x=I,h=I.version,m=e.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new Fe(new er(2,2),new ni({name:"BackgroundMaterial",uniforms:Dr(So.background.uniforms),vertexShader:So.background.vertexShader,fragmentShader:So.background.fragmentShader,side:ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=Dt.getTransfer(I.colorSpace)!==re,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(x!==I||h!==I.version||m!==e.toneMapping)&&(c.material.needsUpdate=!0,x=I,h=I.version,m=e.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function f(M,p){M.getRGB(hf,wk(e)),n.buffers.color.setClear(hf.r,hf.g,hf.b,p,r)}function k(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,p=1){a.set(M),u=p,f(a,u)},getClearAlpha:function(){return u},setClearAlpha:function(M){u=M,f(a,u)},render:_,addToRenderList:d,dispose:k}}function kG(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),n={},o=h(null),s=o,r=!1;function a(S,E,N,T,$){let z=!1,U=x(T,N,E);s!==U&&(s=U,c(s.object)),z=m(S,T,N,$),z&&g(S,T,N,$),$!==null&&t.update($,e.ELEMENT_ARRAY_BUFFER),(z||r)&&(r=!1,p(S,E,N,T),$!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function u(){return e.createVertexArray()}function c(S){return e.bindVertexArray(S)}function l(S){return e.deleteVertexArray(S)}function x(S,E,N){let T=N.wireframe===!0,$=n[S.id];$===void 0&&($={},n[S.id]=$);let z=$[E.id];z===void 0&&(z={},$[E.id]=z);let U=z[T];return U===void 0&&(U=h(u()),z[T]=U),U}function h(S){let E=[],N=[],T=[];for(let $=0;$<i;$++)E[$]=0,N[$]=0,T[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:N,attributeDivisors:T,object:S,attributes:{},index:null}}function m(S,E,N,T){let $=s.attributes,z=E.attributes,U=0,Y=N.getAttributes();for(let Q in Y)if(Y[Q].location>=0){let it=$[Q],lt=z[Q];if(lt===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(lt=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(lt=S.instanceColor)),it===void 0||it.attribute!==lt||lt&&it.data!==lt.data)return!0;U++}return s.attributesNum!==U||s.index!==T}function g(S,E,N,T){let $={},z=E.attributes,U=0,Y=N.getAttributes();for(let Q in Y)if(Y[Q].location>=0){let it=z[Q];it===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(it=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(it=S.instanceColor));let lt={};lt.attribute=it,it&&it.data&&(lt.data=it.data),$[Q]=lt,U++}s.attributes=$,s.attributesNum=U,s.index=T}function _(){let S=s.newAttributes;for(let E=0,N=S.length;E<N;E++)S[E]=0}function d(S){f(S,0)}function f(S,E){let N=s.newAttributes,T=s.enabledAttributes,$=s.attributeDivisors;N[S]=1,T[S]===0&&(e.enableVertexAttribArray(S),T[S]=1),$[S]!==E&&(e.vertexAttribDivisor(S,E),$[S]=E)}function k(){let S=s.newAttributes,E=s.enabledAttributes;for(let N=0,T=E.length;N<T;N++)E[N]!==S[N]&&(e.disableVertexAttribArray(N),E[N]=0)}function M(S,E,N,T,$,z,U){U===!0?e.vertexAttribIPointer(S,E,N,$,z):e.vertexAttribPointer(S,E,N,T,$,z)}function p(S,E,N,T){_();let $=T.attributes,z=N.getAttributes(),U=E.defaultAttributeValues;for(let Y in z){let Q=z[Y];if(Q.location>=0){let ut=$[Y];if(ut===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(ut=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(ut=S.instanceColor)),ut!==void 0){let it=ut.normalized,lt=ut.itemSize,Gt=t.get(ut);if(Gt===void 0)continue;let Nt=Gt.buffer,Pt=Gt.type,Lt=Gt.bytesPerElement,q=Pt===e.INT||Pt===e.UNSIGNED_INT||ut.gpuType===Zm;if(ut.isInterleavedBufferAttribute){let P=ut.data,_t=P.stride,$t=ut.offset;if(P.isInstancedInterleavedBuffer){for(let Mt=0;Mt<Q.locationSize;Mt++)f(Q.location+Mt,P.meshPerAttribute);S.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let Mt=0;Mt<Q.locationSize;Mt++)d(Q.location+Mt);e.bindBuffer(e.ARRAY_BUFFER,Nt);for(let Mt=0;Mt<Q.locationSize;Mt++)M(Q.location+Mt,lt/Q.locationSize,Pt,it,_t*Lt,($t+lt/Q.locationSize*Mt)*Lt,q)}else{if(ut.isInstancedBufferAttribute){for(let P=0;P<Q.locationSize;P++)f(Q.location+P,ut.meshPerAttribute);S.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let P=0;P<Q.locationSize;P++)d(Q.location+P);e.bindBuffer(e.ARRAY_BUFFER,Nt);for(let P=0;P<Q.locationSize;P++)M(Q.location+P,lt/Q.locationSize,Pt,it,lt*Lt,lt/Q.locationSize*P*Lt,q)}}else if(U!==void 0){let it=U[Y];if(it!==void 0)switch(it.length){case 2:e.vertexAttrib2fv(Q.location,it);break;case 3:e.vertexAttrib3fv(Q.location,it);break;case 4:e.vertexAttrib4fv(Q.location,it);break;default:e.vertexAttrib1fv(Q.location,it)}}}}k()}function I(){R();for(let S in n){let E=n[S];for(let N in E){let T=E[N];for(let $ in T)l(T[$].object),delete T[$];delete E[N]}delete n[S]}}function w(S){if(n[S.id]===void 0)return;let E=n[S.id];for(let N in E){let T=E[N];for(let $ in T)l(T[$].object),delete T[$];delete E[N]}delete n[S.id]}function Z(S){for(let E in n){let N=n[E];if(N[S.id]===void 0)continue;let T=N[S.id];for(let $ in T)l(T[$].object),delete T[$];delete N[S.id]}}function R(){O(),r=!0,s!==o&&(s=o,c(s.object))}function O(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:a,reset:R,resetDefaultState:O,dispose:I,releaseStatesOfGeometry:w,releaseStatesOfProgram:Z,initAttributes:_,enableAttribute:d,disableUnusedAttributes:k}}function MG(e,t,i){let n;function o(c){n=c}function s(c,l){e.drawArrays(n,c,l),i.update(l,n,1)}function r(c,l,x){x!==0&&(e.drawArraysInstanced(n,c,l,x),i.update(l,n,x))}function a(c,l,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,x);let m=0;for(let g=0;g<x;g++)m+=l[g];i.update(m,n,1)}function u(c,l,x,h){if(x===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)r(c[g],l[g],h[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,l,0,h,0,x);let g=0;for(let _=0;_<x;_++)g+=l[_]*h[_];i.update(g,n,1)}}this.setMode=o,this.render=s,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=u}function pG(e,t,i,n){let o;function s(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){let Z=t.get("EXT_texture_filter_anisotropic");o=e.getParameter(Z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function r(Z){return!(Z!==Li&&n.convert(Z)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(Z){let R=Z===Jn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(Z!==yn&&n.convert(Z)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&Z!==ro&&!R)}function u(Z){if(Z==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";Z="mediump"}return Z==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=i.precision!==void 0?i.precision:"highp",l=u(c);l!==c&&(Vt("WebGLRenderer:",c,"not supported, using",l,"instead."),c=l);let x=i.logarithmicDepthBuffer===!0,h=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_TEXTURE_SIZE),d=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),k=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),M=e.getParameter(e.MAX_VARYING_VECTORS),p=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),I=e.getParameter(e.MAX_SAMPLES),w=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:u,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:x,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:d,maxAttributes:f,maxVertexUniforms:k,maxVaryings:M,maxFragmentUniforms:p,maxSamples:I,samples:w}}function OG(e){let t=this,i=null,n=0,o=!1,s=!1,r=new go,a=new Ut,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(x,h){let m=x.length!==0||h||n!==0||o;return o=h,n=x.length,m},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(x,h){i=l(x,h,0)},this.setState=function(x,h,m){let g=x.clippingPlanes,_=x.clipIntersection,d=x.clipShadows,f=e.get(x);if(!o||g===null||g.length===0||s&&!d)s?l(null):c();else{let k=s?0:n,M=k*4,p=f.clippingState||null;u.value=p,p=l(g,h,M,m);for(let I=0;I!==M;++I)p[I]=i[I];f.clippingState=p,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=k}};function c(){u.value!==i&&(u.value=i,u.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function l(x,h,m,g){let _=x!==null?x.length:0,d=null;if(_!==0){if(d=u.value,g!==!0||d===null){let f=m+_*4,k=h.matrixWorldInverse;a.getNormalMatrix(k),(d===null||d.length<f)&&(d=new Float32Array(f));for(let M=0,p=m;M!==_;++M,p+=4)r.copy(x[M]).applyMatrix4(k,a),r.normal.toArray(d,p),d[p+3]=r.constant}u.value=d,u.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,d}}function IG(e){let t=new WeakMap;function i(r,a){return a===Im?r.mapping=or:a===ym&&(r.mapping=Qr),r}function n(r){if(r&&r.isTexture){let a=r.mapping;if(a===Im||a===ym)if(t.has(r)){let u=t.get(r).texture;return i(u,r.mapping)}else{let u=r.image;if(u&&u.height>0){let c=new ll(u.height);return c.fromEquirectangularTexture(e,r),t.set(r,c),r.addEventListener("dispose",o),i(c.texture,r.mapping)}else return null}}return r}function o(r){let a=r.target;a.removeEventListener("dispose",o);let u=t.get(a);u!==void 0&&(t.delete(a),u.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var ar=4,bZ=[.125,.215,.35,.446,.526,.582],ta=20,yG=256,Zl=new qr,zZ=new Qt,Ek=null,Vk=0,Gk=0,Fk=!1,SG=new C,ff=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,n=.1,o=100,s={}){let{size:r=256,position:a=SG}=s;Ek=this._renderer.getRenderTarget(),Vk=this._renderer.getActiveCubeFace(),Gk=this._renderer.getActiveMipmapLevel(),Fk=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,n,o,u,a),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=XZ(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=AZ(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ek,Vk,Gk),this._renderer.xr.enabled=Fk,t.scissorTest=!1,Gu(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===or||t.mapping===Qr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ek=this._renderer.getRenderTarget(),Vk=this._renderer.getActiveCubeFace(),Gk=this._renderer.getActiveMipmapLevel(),Fk=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=i||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,n={magFilter:Ye,minFilter:Ye,generateMipmaps:!1,type:Jn,format:Li,colorSpace:Hr,depthBuffer:!1},o=HZ(t,i,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=HZ(t,i,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ZG(s)),this._blurMaterial=vG(s,t,i),this._ggxMaterial=wG(s,t,i)}return o}_compileMaterial(t){let i=new Fe(new io,t);this._renderer.compile(i,Zl)}_sceneToCubeUV(t,i,n,o,s){let u=new ei(90,1,i,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],x=this._renderer,h=x.autoClear,m=x.toneMapping;x.getClearColor(zZ),x.toneMapping=oo,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(o),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fe(new On,new us({name:"PMREM.Background",side:$i,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,d=_.material,f=!1,k=t.background;k?k.isColor&&(d.color.copy(k),t.background=null,f=!0):(d.color.copy(zZ),f=!0);for(let M=0;M<6;M++){let p=M%3;p===0?(u.up.set(0,c[M],0),u.position.set(s.x,s.y,s.z),u.lookAt(s.x+l[M],s.y,s.z)):p===1?(u.up.set(0,0,c[M]),u.position.set(s.x,s.y,s.z),u.lookAt(s.x,s.y+l[M],s.z)):(u.up.set(0,c[M],0),u.position.set(s.x,s.y,s.z),u.lookAt(s.x,s.y,s.z+l[M]));let I=this._cubeSize;Gu(o,p*I,M>2?I:0,I,I),x.setRenderTarget(o),f&&x.render(_,u),x.render(t,u)}x.toneMapping=m,x.autoClear=h,t.background=k}_textureToCubeUV(t,i){let n=this._renderer,o=t.mapping===or||t.mapping===Qr;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=XZ()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=AZ());let s=o?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;let a=s.uniforms;a.envMap.value=t;let u=this._cubeSize;Gu(i,0,0,3*u,2*u),n.setRenderTarget(i),n.render(r,Zl)}_applyPMREM(t){let i=this._renderer,n=i.autoClear;i.autoClear=!1;let o=this._lodMeshes.length;for(let s=1;s<o;s++)this._applyGGXFilter(t,s-1,s);i.autoClear=n}_applyGGXFilter(t,i,n){let o=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,a=this._lodMeshes[n];a.material=r;let u=r.uniforms,c=n/(this._lodMeshes.length-1),l=i/(this._lodMeshes.length-1),x=Math.sqrt(c*c-l*l),h=0+c*1.25,m=x*h,{_lodMax:g}=this,_=this._sizeLods[n],d=3*_*(n>g-ar?n-g+ar:0),f=4*(this._cubeSize-_);u.envMap.value=t.texture,u.roughness.value=m,u.mipInt.value=g-i,Gu(s,d,f,3*_,2*_),o.setRenderTarget(s),o.render(a,Zl),u.envMap.value=s.texture,u.roughness.value=0,u.mipInt.value=g-n,Gu(t,d,f,3*_,2*_),o.setRenderTarget(t),o.render(a,Zl)}_blur(t,i,n,o,s){let r=this._pingPongRenderTarget;this._halfBlur(t,r,i,n,o,"latitudinal",s),this._halfBlur(r,t,n,n,o,"longitudinal",s)}_halfBlur(t,i,n,o,s,r,a){let u=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&Kt("blur direction must be either latitudinal or longitudinal!");let l=3,x=this._lodMeshes[o];x.material=c;let h=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ta-1),_=s/g,d=isFinite(s)?1+Math.floor(l*_):ta;d>ta&&Vt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${ta}`);let f=[],k=0;for(let Z=0;Z<ta;++Z){let R=Z/_,O=Math.exp(-R*R/2);f.push(O),Z===0?k+=O:Z<d&&(k+=2*O)}for(let Z=0;Z<f.length;Z++)f[Z]=f[Z]/k;h.envMap.value=t.texture,h.samples.value=d,h.weights.value=f,h.latitudinal.value=r==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:M}=this;h.dTheta.value=g,h.mipInt.value=M-n;let p=this._sizeLods[o],I=3*p*(o>M-ar?o-M+ar:0),w=4*(this._cubeSize-p);Gu(i,I,w,3*p,2*p),u.setRenderTarget(i),u.render(x,Zl)}};function ZG(e){let t=[],i=[],n=[],o=e,s=e-ar+1+bZ.length;for(let r=0;r<s;r++){let a=Math.pow(2,o);t.push(a);let u=1/a;r>e-ar?u=bZ[r-e+ar-1]:r===0&&(u=0),i.push(u);let c=1/(a-2),l=-c,x=1+c,h=[l,l,x,l,x,x,l,l,x,x,l,x],m=6,g=6,_=3,d=2,f=1,k=new Float32Array(_*g*m),M=new Float32Array(d*g*m),p=new Float32Array(f*g*m);for(let w=0;w<m;w++){let Z=w%3*2/3-1,R=w>2?0:-1,O=[Z,R,0,Z+2/3,R,0,Z+2/3,R+1,0,Z,R,0,Z+2/3,R+1,0,Z,R+1,0];k.set(O,_*g*w),M.set(h,d*g*w);let S=[w,w,w,w,w,w];p.set(S,f*g*w)}let I=new io;I.setAttribute("position",new pn(k,_)),I.setAttribute("uv",new pn(M,d)),I.setAttribute("faceIndex",new pn(p,f)),n.push(new Fe(I,null)),o>ar&&o--}return{lodMeshes:n,sizeLods:t,sigmas:i}}function HZ(e,t,i){let n=new yi(e,t,i);return n.texture.mapping=kl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gu(e,t,i,n,o){e.viewport.set(t,i,n,o),e.scissor.set(t,i,n,o)}function wG(e,t,i){return new ni({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:yG,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:df(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Io,depthTest:!1,depthWrite:!1})}function vG(e,t,i){let n=new Float32Array(ta),o=new C(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:ta,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Io,depthTest:!1,depthWrite:!1})}function AZ(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Io,depthTest:!1,depthWrite:!1})}function XZ(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Io,depthTest:!1,depthWrite:!1})}function df(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function RG(e){let t=new WeakMap,i=null;function n(a){if(a&&a.isTexture){let u=a.mapping,c=u===Im||u===ym,l=u===or||u===Qr;if(c||l){let x=t.get(a),h=x!==void 0?x.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return i===null&&(i=new ff(e)),x=c?i.fromEquirectangular(a,x):i.fromCubemap(a,x),x.texture.pmremVersion=a.pmremVersion,t.set(a,x),x.texture;if(x!==void 0)return x.texture;{let m=a.image;return c&&m&&m.height>0||l&&m&&o(m)?(i===null&&(i=new ff(e)),x=c?i.fromEquirectangular(a):i.fromCubemap(a),x.texture.pmremVersion=a.pmremVersion,t.set(a,x),a.addEventListener("dispose",s),x.texture):null}}}return a}function o(a){let u=0,c=6;for(let l=0;l<c;l++)a[l]!==void 0&&u++;return u===c}function s(a){let u=a.target;u.removeEventListener("dispose",s);let c=t.get(u);c!==void 0&&(t.delete(u),c.dispose())}function r(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:r}}function KG(e){let t={};function i(n){if(t[n]!==void 0)return t[n];let o=e.getExtension(n);return t[n]=o,o}return{has:function(n){return i(n)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(n){let o=i(n);return o===null&&Su("WebGLRenderer: "+n+" extension not supported."),o}}}function EG(e,t,i,n){let o={},s=new WeakMap;function r(x){let h=x.target;h.index!==null&&t.remove(h.index);for(let g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",r),delete o[h.id];let m=s.get(h);m&&(t.remove(m),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,i.memory.geometries--}function a(x,h){return o[h.id]===!0||(h.addEventListener("dispose",r),o[h.id]=!0,i.memory.geometries++),h}function u(x){let h=x.attributes;for(let m in h)t.update(h[m],e.ARRAY_BUFFER)}function c(x){let h=[],m=x.index,g=x.attributes.position,_=0;if(m!==null){let k=m.array;_=m.version;for(let M=0,p=k.length;M<p;M+=3){let I=k[M+0],w=k[M+1],Z=k[M+2];h.push(I,w,w,Z,Z,I)}}else if(g!==void 0){let k=g.array;_=g.version;for(let M=0,p=k.length/3-1;M<p;M+=3){let I=M+0,w=M+1,Z=M+2;h.push(I,w,w,Z,Z,I)}}else return;let d=new(Sk(h)?al:rl)(h,1);d.version=_;let f=s.get(x);f&&t.remove(f),s.set(x,d)}function l(x){let h=s.get(x);if(h){let m=x.index;m!==null&&h.version<m.version&&c(x)}else c(x);return s.get(x)}return{get:a,update:u,getWireframeAttribute:l}}function VG(e,t,i){let n;function o(h){n=h}let s,r;function a(h){s=h.type,r=h.bytesPerElement}function u(h,m){e.drawElements(n,m,s,h*r),i.update(m,n,1)}function c(h,m,g){g!==0&&(e.drawElementsInstanced(n,m,s,h*r,g),i.update(m,n,g))}function l(h,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,h,0,g);let d=0;for(let f=0;f<g;f++)d+=m[f];i.update(d,n,1)}function x(h,m,g,_){if(g===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<h.length;f++)c(h[f]/r,m[f],_[f]);else{d.multiDrawElementsInstancedWEBGL(n,m,0,s,h,0,_,0,g);let f=0;for(let k=0;k<g;k++)f+=m[k]*_[k];i.update(f,n,1)}}this.setMode=o,this.setIndex=a,this.render=u,this.renderInstances=c,this.renderMultiDraw=l,this.renderMultiDrawInstances=x}function GG(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,a){switch(i.calls++,r){case e.TRIANGLES:i.triangles+=a*(s/3);break;case e.LINES:i.lines+=a*(s/2);break;case e.LINE_STRIP:i.lines+=a*(s-1);break;case e.LINE_LOOP:i.lines+=a*s;break;case e.POINTS:i.points+=a*s;break;default:Kt("WebGLInfo: Unknown draw mode:",r);break}}function o(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:o,update:n}}function FG(e,t,i){let n=new WeakMap,o=new Je;function s(r,a,u){let c=r.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,x=l!==void 0?l.length:0,h=n.get(a);if(h===void 0||h.count!==x){let O=function(){Z.dispose(),n.delete(a),a.removeEventListener("dispose",O)};h!==void 0&&h.texture.dispose();let m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],k=a.morphAttributes.color||[],M=0;m===!0&&(M=1),g===!0&&(M=2),_===!0&&(M=3);let p=a.attributes.position.count*M,I=1;p>t.maxTextureSize&&(I=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let w=new Float32Array(p*I*4*x),Z=new ol(w,p,I,x);Z.type=ro,Z.needsUpdate=!0;let R=M*4;for(let S=0;S<x;S++){let E=d[S],N=f[S],T=k[S],$=p*I*4*S;for(let z=0;z<E.count;z++){let U=z*R;m===!0&&(o.fromBufferAttribute(E,z),w[$+U+0]=o.x,w[$+U+1]=o.y,w[$+U+2]=o.z,w[$+U+3]=0),g===!0&&(o.fromBufferAttribute(N,z),w[$+U+4]=o.x,w[$+U+5]=o.y,w[$+U+6]=o.z,w[$+U+7]=0),_===!0&&(o.fromBufferAttribute(T,z),w[$+U+8]=o.x,w[$+U+9]=o.y,w[$+U+10]=o.z,w[$+U+11]=T.itemSize===4?o.w:1)}}h={count:x,texture:Z,size:new Wt(p,I)},n.set(a,h),a.addEventListener("dispose",O)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)u.getUniforms().setValue(e,"morphTexture",r.morphTexture,i);else{let m=0;for(let _=0;_<c.length;_++)m+=c[_];let g=a.morphTargetsRelative?1:1-m;u.getUniforms().setValue(e,"morphTargetBaseInfluence",g),u.getUniforms().setValue(e,"morphTargetInfluences",c)}u.getUniforms().setValue(e,"morphTargetsTexture",h.texture,i),u.getUniforms().setValue(e,"morphTargetsTextureSize",h.size)}return{update:s}}function jG(e,t,i,n){let o=new WeakMap;function s(u){let c=n.render.frame,l=u.geometry,x=t.get(u,l);if(o.get(x)!==c&&(t.update(x),o.set(x,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",a)===!1&&u.addEventListener("dispose",a),o.get(u)!==c&&(i.update(u.instanceMatrix,e.ARRAY_BUFFER),u.instanceColor!==null&&i.update(u.instanceColor,e.ARRAY_BUFFER),o.set(u,c))),u.isSkinnedMesh){let h=u.skeleton;o.get(h)!==c&&(h.update(),o.set(h,c))}return x}function r(){o=new WeakMap}function a(u){let c=u.target;c.removeEventListener("dispose",a),i.remove(c.instanceMatrix),c.instanceColor!==null&&i.remove(c.instanceColor)}return{update:s,dispose:r}}var NG={[uk]:"LINEAR_TONE_MAPPING",[ck]:"REINHARD_TONE_MAPPING",[lk]:"CINEON_TONE_MAPPING",[xk]:"ACES_FILMIC_TONE_MAPPING",[mk]:"AGX_TONE_MAPPING",[fk]:"NEUTRAL_TONE_MAPPING",[hk]:"CUSTOM_TONE_MAPPING"};function TG(e,t,i,n,o){let s=new yi(t,i,{type:e,depthBuffer:n,stencilBuffer:o}),r=new yi(t,i,{type:Jn,depthBuffer:!1,stencilBuffer:!1}),a=new io;a.setAttribute("position",new Ui([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Ui([0,2,0,0,2,0],2));let u=new em({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Fe(a,u),l=new qr(-1,1,1,-1,0,1),x=null,h=null,m=!1,g,_=null,d=[],f=!1;this.setSize=function(k,M){s.setSize(k,M),r.setSize(k,M);for(let p=0;p<d.length;p++){let I=d[p];I.setSize&&I.setSize(k,M)}},this.setEffects=function(k){d=k,f=d.length>0&&d[0].isRenderPass===!0;let M=s.width,p=s.height;for(let I=0;I<d.length;I++){let w=d[I];w.setSize&&w.setSize(M,p)}},this.begin=function(k,M){if(m||k.toneMapping===oo&&d.length===0)return!1;if(_=M,M!==null){let p=M.width,I=M.height;(s.width!==p||s.height!==I)&&this.setSize(p,I)}return f===!1&&k.setRenderTarget(s),g=k.toneMapping,k.toneMapping=oo,!0},this.hasRenderPass=function(){return f},this.end=function(k,M){k.toneMapping=g,m=!0;let p=s,I=r;for(let w=0;w<d.length;w++){let Z=d[w];if(Z.enabled!==!1&&(Z.render(k,I,p,M),Z.needsSwap!==!1)){let R=p;p=I,I=R}}if(x!==k.outputColorSpace||h!==k.toneMapping){x=k.outputColorSpace,h=k.toneMapping,u.defines={},Dt.getTransfer(x)===re&&(u.defines.SRGB_TRANSFER="");let w=NG[h];w&&(u.defines[w]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=p.texture,k.setRenderTarget(_),k.render(c,l),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.dispose(),r.dispose(),a.dispose(),u.dispose()}}var hw=new Ki,Tk=new tr(1,1),mw=new ol,fw=new Bh,dw=new cl,qZ=[],QZ=[],BZ=new Float32Array(16),DZ=new Float32Array(9),PZ=new Float32Array(4);function ju(e,t,i){let n=e[0];if(n<=0||n>0)return e;let o=t*i,s=qZ[o];if(s===void 0&&(s=new Float32Array(o),qZ[o]=s),t!==0){n.toArray(s,0);for(let r=1,a=0;r!==t;++r)a+=i,e[r].toArray(s,a)}return s}function ri(e,t){if(e.length!==t.length)return!1;for(let i=0,n=e.length;i<n;i++)if(e[i]!==t[i])return!1;return!0}function ai(e,t){for(let i=0,n=t.length;i<n;i++)e[i]=t[i]}function _f(e,t){let i=QZ[t];i===void 0&&(i=new Int32Array(t),QZ[t]=i);for(let n=0;n!==t;++n)i[n]=e.allocateTextureUnit();return i}function WG(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function UG(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ri(i,t))return;e.uniform2fv(this.addr,t),ai(i,t)}}function $G(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(ri(i,t))return;e.uniform3fv(this.addr,t),ai(i,t)}}function CG(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ri(i,t))return;e.uniform4fv(this.addr,t),ai(i,t)}}function YG(e,t){let i=this.cache,n=t.elements;if(n===void 0){if(ri(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),ai(i,t)}else{if(ri(i,n))return;PZ.set(n),e.uniformMatrix2fv(this.addr,!1,PZ),ai(i,n)}}function JG(e,t){let i=this.cache,n=t.elements;if(n===void 0){if(ri(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),ai(i,t)}else{if(ri(i,n))return;DZ.set(n),e.uniformMatrix3fv(this.addr,!1,DZ),ai(i,n)}}function bG(e,t){let i=this.cache,n=t.elements;if(n===void 0){if(ri(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),ai(i,t)}else{if(ri(i,n))return;BZ.set(n),e.uniformMatrix4fv(this.addr,!1,BZ),ai(i,n)}}function zG(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function HG(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ri(i,t))return;e.uniform2iv(this.addr,t),ai(i,t)}}function AG(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(ri(i,t))return;e.uniform3iv(this.addr,t),ai(i,t)}}function XG(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ri(i,t))return;e.uniform4iv(this.addr,t),ai(i,t)}}function qG(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function QG(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(ri(i,t))return;e.uniform2uiv(this.addr,t),ai(i,t)}}function BG(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(ri(i,t))return;e.uniform3uiv(this.addr,t),ai(i,t)}}function DG(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(ri(i,t))return;e.uniform4uiv(this.addr,t),ai(i,t)}}function PG(e,t,i){let n=this.cache,o=i.allocateTextureUnit();n[0]!==o&&(e.uniform1i(this.addr,o),n[0]=o);let s;this.type===e.SAMPLER_2D_SHADOW?(Tk.compareFunction=i.isReversedDepthBuffer()?xf:lf,s=Tk):s=hw,i.setTexture2D(t||s,o)}function LG(e,t,i){let n=this.cache,o=i.allocateTextureUnit();n[0]!==o&&(e.uniform1i(this.addr,o),n[0]=o),i.setTexture3D(t||fw,o)}function tF(e,t,i){let n=this.cache,o=i.allocateTextureUnit();n[0]!==o&&(e.uniform1i(this.addr,o),n[0]=o),i.setTextureCube(t||dw,o)}function eF(e,t,i){let n=this.cache,o=i.allocateTextureUnit();n[0]!==o&&(e.uniform1i(this.addr,o),n[0]=o),i.setTexture2DArray(t||mw,o)}function iF(e){switch(e){case 5126:return WG;case 35664:return UG;case 35665:return $G;case 35666:return CG;case 35674:return YG;case 35675:return JG;case 35676:return bG;case 5124:case 35670:return zG;case 35667:case 35671:return HG;case 35668:case 35672:return AG;case 35669:case 35673:return XG;case 5125:return qG;case 36294:return QG;case 36295:return BG;case 36296:return DG;case 35678:case 36198:case 36298:case 36306:case 35682:return PG;case 35679:case 36299:case 36307:return LG;case 35680:case 36300:case 36308:case 36293:return tF;case 36289:case 36303:case 36311:case 36292:return eF}}function nF(e,t){e.uniform1fv(this.addr,t)}function oF(e,t){let i=ju(t,this.size,2);e.uniform2fv(this.addr,i)}function sF(e,t){let i=ju(t,this.size,3);e.uniform3fv(this.addr,i)}function rF(e,t){let i=ju(t,this.size,4);e.uniform4fv(this.addr,i)}function aF(e,t){let i=ju(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function uF(e,t){let i=ju(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function cF(e,t){let i=ju(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function lF(e,t){e.uniform1iv(this.addr,t)}function xF(e,t){e.uniform2iv(this.addr,t)}function hF(e,t){e.uniform3iv(this.addr,t)}function mF(e,t){e.uniform4iv(this.addr,t)}function fF(e,t){e.uniform1uiv(this.addr,t)}function dF(e,t){e.uniform2uiv(this.addr,t)}function _F(e,t){e.uniform3uiv(this.addr,t)}function gF(e,t){e.uniform4uiv(this.addr,t)}function kF(e,t,i){let n=this.cache,o=t.length,s=_f(i,o);ri(n,s)||(e.uniform1iv(this.addr,s),ai(n,s));let r;this.type===e.SAMPLER_2D_SHADOW?r=Tk:r=hw;for(let a=0;a!==o;++a)i.setTexture2D(t[a]||r,s[a])}function MF(e,t,i){let n=this.cache,o=t.length,s=_f(i,o);ri(n,s)||(e.uniform1iv(this.addr,s),ai(n,s));for(let r=0;r!==o;++r)i.setTexture3D(t[r]||fw,s[r])}function pF(e,t,i){let n=this.cache,o=t.length,s=_f(i,o);ri(n,s)||(e.uniform1iv(this.addr,s),ai(n,s));for(let r=0;r!==o;++r)i.setTextureCube(t[r]||dw,s[r])}function OF(e,t,i){let n=this.cache,o=t.length,s=_f(i,o);ri(n,s)||(e.uniform1iv(this.addr,s),ai(n,s));for(let r=0;r!==o;++r)i.setTexture2DArray(t[r]||mw,s[r])}function IF(e){switch(e){case 5126:return nF;case 35664:return oF;case 35665:return sF;case 35666:return rF;case 35674:return aF;case 35675:return uF;case 35676:return cF;case 5124:case 35670:return lF;case 35667:case 35671:return xF;case 35668:case 35672:return hF;case 35669:case 35673:return mF;case 5125:return fF;case 36294:return dF;case 36295:return _F;case 36296:return gF;case 35678:case 36198:case 36298:case 36306:case 35682:return kF;case 35679:case 36299:case 36307:return MF;case 35680:case 36300:case 36308:case 36293:return pF;case 36289:case 36303:case 36311:case 36292:return OF}}var Wk=class{constructor(t,i,n){this.id=t,this.addr=n,this.cache=[],this.type=i.type,this.setValue=iF(i.type)}},Uk=class{constructor(t,i,n){this.id=t,this.addr=n,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=IF(i.type)}},$k=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,n){let o=this.seq;for(let s=0,r=o.length;s!==r;++s){let a=o[s];a.setValue(t,i[a.id],n)}}},jk=/(\w+)(\])?(\[|\.)?/g;function LZ(e,t){e.seq.push(t),e.map[t.id]=t}function yF(e,t,i){let n=e.name,o=n.length;for(jk.lastIndex=0;;){let s=jk.exec(n),r=jk.lastIndex,a=s[1],u=s[2]==="]",c=s[3];if(u&&(a=a|0),c===void 0||c==="["&&r+2===o){LZ(i,c===void 0?new Wk(a,e,t):new Uk(a,e,t));break}else{let x=i.map[a];x===void 0&&(x=new $k(a),LZ(i,x)),i=x}}}var Fu=class{constructor(t,i){this.seq=[],this.map={};let n=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let a=t.getActiveUniform(i,r),u=t.getUniformLocation(i,a.name);yF(a,u,this)}let o=[],s=[];for(let r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?o.push(r):s.push(r);o.length>0&&(this.seq=o.concat(s))}setValue(t,i,n,o){let s=this.map[i];s!==void 0&&s.setValue(t,n,o)}setOptional(t,i,n){let o=i[n];o!==void 0&&this.setValue(t,n,o)}static upload(t,i,n,o){for(let s=0,r=i.length;s!==r;++s){let a=i[s],u=n[a.id];u.needsUpdate!==!1&&a.setValue(t,u.value,o)}}static seqWithValue(t,i){let n=[];for(let o=0,s=t.length;o!==s;++o){let r=t[o];r.id in i&&n.push(r)}return n}};function tw(e,t,i){let n=e.createShader(t);return e.shaderSource(n,i),e.compileShader(n),n}var SF=37297,ZF=0;function wF(e,t){let i=e.split(`
`),n=[],o=Math.max(t-6,0),s=Math.min(t+6,i.length);for(let r=o;r<s;r++){let a=r+1;n.push(`${a===t?">":" "} ${a}: ${i[r]}`)}return n.join(`
`)}var ew=new Ut;function vF(e){Dt._getMatrix(ew,Dt.workingColorSpace,e);let t=`mat3( ${ew.elements.map(i=>i.toFixed(4))} )`;switch(Dt.getTransfer(e)){case il:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return Vt("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function iw(e,t,i){let n=e.getShaderParameter(t,e.COMPILE_STATUS),s=(e.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return i.toUpperCase()+`

`+s+`

`+wF(e.getShaderSource(t),a)}else return s}function RF(e,t){let i=vF(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}var KF={[uk]:"Linear",[ck]:"Reinhard",[lk]:"Cineon",[xk]:"ACESFilmic",[mk]:"AgX",[fk]:"Neutral",[hk]:"Custom"};function EF(e,t){let i=KF[t];return i===void 0?(Vt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var mf=new C;function VF(){Dt.getLuminanceCoefficients(mf);let e=mf.x.toFixed(4),t=mf.y.toFixed(4),i=mf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function GF(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vl).join(`
`)}function FF(e){let t=[];for(let i in e){let n=e[i];n!==!1&&t.push("#define "+i+" "+n)}return t.join(`
`)}function jF(e,t){let i={},n=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let o=0;o<n;o++){let s=e.getActiveAttrib(t,o),r=s.name,a=1;s.type===e.FLOAT_MAT2&&(a=2),s.type===e.FLOAT_MAT3&&(a=3),s.type===e.FLOAT_MAT4&&(a=4),i[r]={type:s.type,location:e.getAttribLocation(t,r),locationSize:a}}return i}function vl(e){return e!==""}function nw(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ow(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var NF=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ck(e){return e.replace(NF,WF)}var TF=new Map;function WF(e,t){let i=Ct[t];if(i===void 0){let n=TF.get(t);if(n!==void 0)i=Ct[n],Vt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ck(i)}var UF=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sw(e){return e.replace(UF,$F)}function $F(e,t,i,n){let o="";for(let s=parseInt(t);s<parseInt(i);s++)o+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return o}function rw(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var CF={[gl]:"SHADOWMAP_TYPE_PCF",[Ku]:"SHADOWMAP_TYPE_VSM"};function YF(e){return CF[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var JF={[or]:"ENVMAP_TYPE_CUBE",[Qr]:"ENVMAP_TYPE_CUBE",[kl]:"ENVMAP_TYPE_CUBE_UV"};function bF(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":JF[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var zF={[Qr]:"ENVMAP_MODE_REFRACTION"};function HF(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":zF[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var AF={[ak]:"ENVMAP_BLENDING_MULTIPLY",[wZ]:"ENVMAP_BLENDING_MIX",[vZ]:"ENVMAP_BLENDING_ADD"};function XF(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":AF[e.combine]||"ENVMAP_BLENDING_NONE"}function qF(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let i=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:n,maxMip:i}}function QF(e,t,i,n){let o=e.getContext(),s=i.defines,r=i.vertexShader,a=i.fragmentShader,u=YF(i),c=bF(i),l=HF(i),x=XF(i),h=qF(i),m=GF(i),g=FF(s),_=o.createProgram(),d,f,k=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(d=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(vl).join(`
`),d.length>0&&(d+=`
`),f=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(vl).join(`
`),f.length>0&&(f+=`
`)):(d=[rw(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+l:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+u:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vl).join(`
`),f=[rw(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.envMap?"#define "+l:"",i.envMap?"#define "+x:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+u:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==oo?"#define TONE_MAPPING":"",i.toneMapping!==oo?Ct.tonemapping_pars_fragment:"",i.toneMapping!==oo?EF("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Ct.colorspace_pars_fragment,RF("linearToOutputTexel",i.outputColorSpace),VF(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(vl).join(`
`)),r=Ck(r),r=nw(r,i),r=ow(r,i),a=Ck(a),a=nw(a,i),a=ow(a,i),r=sw(r),a=sw(a),i.isRawShaderMaterial!==!0&&(k=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,f=["#define varying in",i.glslVersion===yk?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===yk?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let M=k+d+r,p=k+f+a,I=tw(o,o.VERTEX_SHADER,M),w=tw(o,o.FRAGMENT_SHADER,p);o.attachShader(_,I),o.attachShader(_,w),i.index0AttributeName!==void 0?o.bindAttribLocation(_,0,i.index0AttributeName):i.morphTargets===!0&&o.bindAttribLocation(_,0,"position"),o.linkProgram(_);function Z(E){if(e.debug.checkShaderErrors){let N=o.getProgramInfoLog(_)||"",T=o.getShaderInfoLog(I)||"",$=o.getShaderInfoLog(w)||"",z=N.trim(),U=T.trim(),Y=$.trim(),Q=!0,ut=!0;if(o.getProgramParameter(_,o.LINK_STATUS)===!1)if(Q=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(o,_,I,w);else{let it=iw(o,I,"vertex"),lt=iw(o,w,"fragment");Kt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(_,o.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+z+`
`+it+`
`+lt)}else z!==""?Vt("WebGLProgram: Program Info Log:",z):(U===""||Y==="")&&(ut=!1);ut&&(E.diagnostics={runnable:Q,programLog:z,vertexShader:{log:U,prefix:d},fragmentShader:{log:Y,prefix:f}})}o.deleteShader(I),o.deleteShader(w),R=new Fu(o,_),O=jF(o,_)}let R;this.getUniforms=function(){return R===void 0&&Z(this),R};let O;this.getAttributes=function(){return O===void 0&&Z(this),O};let S=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=o.getProgramParameter(_,SF)),S},this.destroy=function(){n.releaseStatesOfProgram(this),o.deleteProgram(_),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=ZF++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=w,this}var BF=0,Yk=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let i=t.vertexShader,n=t.fragmentShader,o=this._getShaderStage(i),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(o)===!1&&(r.add(o),o.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){let i=this.materialCache.get(t);for(let n of i)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let i=this.materialCache,n=i.get(t);return n===void 0&&(n=new Set,i.set(t,n)),n}_getShaderStage(t){let i=this.shaderCache,n=i.get(t);return n===void 0&&(n=new Jk(t),i.set(t,n)),n}},Jk=class{constructor(t){this.id=BF++,this.code=t,this.usedTimes=0}};function DF(e,t,i,n,o,s,r){let a=new sl,u=new Yk,c=new Set,l=[],x=new Map,h=o.logarithmicDepthBuffer,m=o.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(O){return c.add(O),O===0?"uv":`uv${O}`}function d(O,S,E,N,T){let $=N.fog,z=T.geometry,U=O.isMeshStandardMaterial?N.environment:null,Y=(O.isMeshStandardMaterial?i:t).get(O.envMap||U),Q=Y&&Y.mapping===kl?Y.image.height:null,ut=g[O.type];O.precision!==null&&(m=o.getMaxPrecision(O.precision),m!==O.precision&&Vt("WebGLProgram.getParameters:",O.precision,"not supported, using",m,"instead."));let it=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,lt=it!==void 0?it.length:0,Gt=0;z.morphAttributes.position!==void 0&&(Gt=1),z.morphAttributes.normal!==void 0&&(Gt=2),z.morphAttributes.color!==void 0&&(Gt=3);let Nt,Pt,Lt,q;if(ut){let ue=So[ut];Nt=ue.vertexShader,Pt=ue.fragmentShader}else Nt=O.vertexShader,Pt=O.fragmentShader,u.update(O),Lt=u.getVertexShaderID(O),q=u.getFragmentShaderID(O);let P=e.getRenderTarget(),_t=e.state.buffers.depth.getReversed(),$t=T.isInstancedMesh===!0,Mt=T.isBatchedMesh===!0,ee=!!O.map,li=!!O.matcap,te=!!Y,ae=!!O.aoMap,_e=!!O.lightMap,Yt=!!O.bumpMap,qe=!!O.normalMap,V=!!O.displacementMap,Qe=!!O.emissiveMap,se=!!O.metalnessMap,pe=!!O.roughnessMap,Ot=O.anisotropy>0,K=O.clearcoat>0,y=O.dispersion>0,F=O.iridescence>0,A=O.sheen>0,D=O.transmission>0,H=Ot&&!!O.anisotropyMap,yt=K&&!!O.clearcoatMap,ot=K&&!!O.clearcoatNormalMap,pt=K&&!!O.clearcoatRoughnessMap,Et=F&&!!O.iridescenceMap,tt=F&&!!O.iridescenceThicknessMap,rt=A&&!!O.sheenColorMap,kt=A&&!!O.sheenRoughnessMap,It=!!O.specularMap,st=!!O.specularColorMap,Jt=!!O.specularIntensityMap,G=D&&!!O.transmissionMap,ht=D&&!!O.thicknessMap,et=!!O.gradientMap,mt=!!O.alphaMap,L=O.alphaTest>0,B=!!O.alphaHash,nt=!!O.extensions,Ft=oo;O.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ft=e.toneMapping);let Oe={shaderID:ut,shaderType:O.type,shaderName:O.name,vertexShader:Nt,fragmentShader:Pt,defines:O.defines,customVertexShaderID:Lt,customFragmentShaderID:q,isRawShaderMaterial:O.isRawShaderMaterial===!0,glslVersion:O.glslVersion,precision:m,batching:Mt,batchingColor:Mt&&T._colorsTexture!==null,instancing:$t,instancingColor:$t&&T.instanceColor!==null,instancingMorph:$t&&T.morphTexture!==null,outputColorSpace:P===null?e.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Hr,alphaToCoverage:!!O.alphaToCoverage,map:ee,matcap:li,envMap:te,envMapMode:te&&Y.mapping,envMapCubeUVHeight:Q,aoMap:ae,lightMap:_e,bumpMap:Yt,normalMap:qe,displacementMap:V,emissiveMap:Qe,normalMapObjectSpace:qe&&O.normalMapType===VZ,normalMapTangentSpace:qe&&O.normalMapType===EZ,metalnessMap:se,roughnessMap:pe,anisotropy:Ot,anisotropyMap:H,clearcoat:K,clearcoatMap:yt,clearcoatNormalMap:ot,clearcoatRoughnessMap:pt,dispersion:y,iridescence:F,iridescenceMap:Et,iridescenceThicknessMap:tt,sheen:A,sheenColorMap:rt,sheenRoughnessMap:kt,specularMap:It,specularColorMap:st,specularIntensityMap:Jt,transmission:D,transmissionMap:G,thicknessMap:ht,gradientMap:et,opaque:O.transparent===!1&&O.blending===br&&O.alphaToCoverage===!1,alphaMap:mt,alphaTest:L,alphaHash:B,combine:O.combine,mapUv:ee&&_(O.map.channel),aoMapUv:ae&&_(O.aoMap.channel),lightMapUv:_e&&_(O.lightMap.channel),bumpMapUv:Yt&&_(O.bumpMap.channel),normalMapUv:qe&&_(O.normalMap.channel),displacementMapUv:V&&_(O.displacementMap.channel),emissiveMapUv:Qe&&_(O.emissiveMap.channel),metalnessMapUv:se&&_(O.metalnessMap.channel),roughnessMapUv:pe&&_(O.roughnessMap.channel),anisotropyMapUv:H&&_(O.anisotropyMap.channel),clearcoatMapUv:yt&&_(O.clearcoatMap.channel),clearcoatNormalMapUv:ot&&_(O.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&_(O.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&_(O.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&_(O.iridescenceThicknessMap.channel),sheenColorMapUv:rt&&_(O.sheenColorMap.channel),sheenRoughnessMapUv:kt&&_(O.sheenRoughnessMap.channel),specularMapUv:It&&_(O.specularMap.channel),specularColorMapUv:st&&_(O.specularColorMap.channel),specularIntensityMapUv:Jt&&_(O.specularIntensityMap.channel),transmissionMapUv:G&&_(O.transmissionMap.channel),thicknessMapUv:ht&&_(O.thicknessMap.channel),alphaMapUv:mt&&_(O.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(qe||Ot),vertexColors:O.vertexColors,vertexAlphas:O.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:T.isPoints===!0&&!!z.attributes.uv&&(ee||mt),fog:!!$,useFog:O.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:O.flatShading===!0&&O.wireframe===!1,sizeAttenuation:O.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:_t,skinning:T.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:Gt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:O.dithering,shadowMapEnabled:e.shadowMap.enabled&&E.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ft,decodeVideoTexture:ee&&O.map.isVideoTexture===!0&&Dt.getTransfer(O.map.colorSpace)===re,decodeVideoTextureEmissive:Qe&&O.emissiveMap.isVideoTexture===!0&&Dt.getTransfer(O.emissiveMap.colorSpace)===re,premultipliedAlpha:O.premultipliedAlpha,doubleSided:O.side===Oo,flipSided:O.side===$i,useDepthPacking:O.depthPacking>=0,depthPacking:O.depthPacking||0,index0AttributeName:O.index0AttributeName,extensionClipCullDistance:nt&&O.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&O.extensions.multiDraw===!0||Mt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:O.customProgramCacheKey()};return Oe.vertexUv1s=c.has(1),Oe.vertexUv2s=c.has(2),Oe.vertexUv3s=c.has(3),c.clear(),Oe}function f(O){let S=[];if(O.shaderID?S.push(O.shaderID):(S.push(O.customVertexShaderID),S.push(O.customFragmentShaderID)),O.defines!==void 0)for(let E in O.defines)S.push(E),S.push(O.defines[E]);return O.isRawShaderMaterial===!1&&(k(S,O),M(S,O),S.push(e.outputColorSpace)),S.push(O.customProgramCacheKey),S.join()}function k(O,S){O.push(S.precision),O.push(S.outputColorSpace),O.push(S.envMapMode),O.push(S.envMapCubeUVHeight),O.push(S.mapUv),O.push(S.alphaMapUv),O.push(S.lightMapUv),O.push(S.aoMapUv),O.push(S.bumpMapUv),O.push(S.normalMapUv),O.push(S.displacementMapUv),O.push(S.emissiveMapUv),O.push(S.metalnessMapUv),O.push(S.roughnessMapUv),O.push(S.anisotropyMapUv),O.push(S.clearcoatMapUv),O.push(S.clearcoatNormalMapUv),O.push(S.clearcoatRoughnessMapUv),O.push(S.iridescenceMapUv),O.push(S.iridescenceThicknessMapUv),O.push(S.sheenColorMapUv),O.push(S.sheenRoughnessMapUv),O.push(S.specularMapUv),O.push(S.specularColorMapUv),O.push(S.specularIntensityMapUv),O.push(S.transmissionMapUv),O.push(S.thicknessMapUv),O.push(S.combine),O.push(S.fogExp2),O.push(S.sizeAttenuation),O.push(S.morphTargetsCount),O.push(S.morphAttributeCount),O.push(S.numDirLights),O.push(S.numPointLights),O.push(S.numSpotLights),O.push(S.numSpotLightMaps),O.push(S.numHemiLights),O.push(S.numRectAreaLights),O.push(S.numDirLightShadows),O.push(S.numPointLightShadows),O.push(S.numSpotLightShadows),O.push(S.numSpotLightShadowsWithMaps),O.push(S.numLightProbes),O.push(S.shadowMapType),O.push(S.toneMapping),O.push(S.numClippingPlanes),O.push(S.numClipIntersection),O.push(S.depthPacking)}function M(O,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),O.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),O.push(a.mask)}function p(O){let S=g[O.type],E;if(S){let N=So[S];E=YZ.clone(N.uniforms)}else E=O.uniforms;return E}function I(O,S){let E=x.get(S);return E!==void 0?++E.usedTimes:(E=new QF(e,S,O,s),l.push(E),x.set(S,E)),E}function w(O){if(--O.usedTimes===0){let S=l.indexOf(O);l[S]=l[l.length-1],l.pop(),x.delete(O.cacheKey),O.destroy()}}function Z(O){u.remove(O)}function R(){u.dispose()}return{getParameters:d,getProgramCacheKey:f,getUniforms:p,acquireProgram:I,releaseProgram:w,releaseShaderCache:Z,programs:l,dispose:R}}function PF(){let e=new WeakMap;function t(r){return e.has(r)}function i(r){let a=e.get(r);return a===void 0&&(a={},e.set(r,a)),a}function n(r){e.delete(r)}function o(r,a,u){e.get(r)[a]=u}function s(){e=new WeakMap}return{has:t,get:i,remove:n,update:o,dispose:s}}function LF(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function aw(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function uw(){let e=[],t=0,i=[],n=[],o=[];function s(){t=0,i.length=0,n.length=0,o.length=0}function r(x,h,m,g,_,d){let f=e[t];return f===void 0?(f={id:x.id,object:x,geometry:h,material:m,groupOrder:g,renderOrder:x.renderOrder,z:_,group:d},e[t]=f):(f.id=x.id,f.object=x,f.geometry=h,f.material=m,f.groupOrder=g,f.renderOrder=x.renderOrder,f.z=_,f.group=d),t++,f}function a(x,h,m,g,_,d){let f=r(x,h,m,g,_,d);m.transmission>0?n.push(f):m.transparent===!0?o.push(f):i.push(f)}function u(x,h,m,g,_,d){let f=r(x,h,m,g,_,d);m.transmission>0?n.unshift(f):m.transparent===!0?o.unshift(f):i.unshift(f)}function c(x,h){i.length>1&&i.sort(x||LF),n.length>1&&n.sort(h||aw),o.length>1&&o.sort(h||aw)}function l(){for(let x=t,h=e.length;x<h;x++){let m=e[x];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:i,transmissive:n,transparent:o,init:s,push:a,unshift:u,finish:l,sort:c}}function t0(){let e=new WeakMap;function t(n,o){let s=e.get(n),r;return s===void 0?(r=new uw,e.set(n,[r])):o>=s.length?(r=new uw,s.push(r)):r=s[o],r}function i(){e=new WeakMap}return{get:t,dispose:i}}function e0(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new C,color:new Qt};break;case"SpotLight":i={position:new C,direction:new C,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new C,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new C,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":i={color:new Qt,position:new C,halfWidth:new C,halfHeight:new C};break}return e[t.id]=i,i}}}function i0(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}var n0=0;function o0(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function s0(e){let t=new e0,i=i0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let o=new C,s=new ii,r=new ii;function a(c){let l=0,x=0,h=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let m=0,g=0,_=0,d=0,f=0,k=0,M=0,p=0,I=0,w=0,Z=0;c.sort(o0);for(let O=0,S=c.length;O<S;O++){let E=c[O],N=E.color,T=E.intensity,$=E.distance,z=null;if(E.shadow&&E.shadow.map&&(E.shadow.map.texture.format===Br?z=E.shadow.map.texture:z=E.shadow.map.depthTexture||E.shadow.map.texture),E.isAmbientLight)l+=N.r*T,x+=N.g*T,h+=N.b*T;else if(E.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(E.sh.coefficients[U],T);Z++}else if(E.isDirectionalLight){let U=t.get(E);if(U.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let Y=E.shadow,Q=i.get(E);Q.shadowIntensity=Y.intensity,Q.shadowBias=Y.bias,Q.shadowNormalBias=Y.normalBias,Q.shadowRadius=Y.radius,Q.shadowMapSize=Y.mapSize,n.directionalShadow[m]=Q,n.directionalShadowMap[m]=z,n.directionalShadowMatrix[m]=E.shadow.matrix,k++}n.directional[m]=U,m++}else if(E.isSpotLight){let U=t.get(E);U.position.setFromMatrixPosition(E.matrixWorld),U.color.copy(N).multiplyScalar(T),U.distance=$,U.coneCos=Math.cos(E.angle),U.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),U.decay=E.decay,n.spot[_]=U;let Y=E.shadow;if(E.map&&(n.spotLightMap[I]=E.map,I++,Y.updateMatrices(E),E.castShadow&&w++),n.spotLightMatrix[_]=Y.matrix,E.castShadow){let Q=i.get(E);Q.shadowIntensity=Y.intensity,Q.shadowBias=Y.bias,Q.shadowNormalBias=Y.normalBias,Q.shadowRadius=Y.radius,Q.shadowMapSize=Y.mapSize,n.spotShadow[_]=Q,n.spotShadowMap[_]=z,p++}_++}else if(E.isRectAreaLight){let U=t.get(E);U.color.copy(N).multiplyScalar(T),U.halfWidth.set(E.width*.5,0,0),U.halfHeight.set(0,E.height*.5,0),n.rectArea[d]=U,d++}else if(E.isPointLight){let U=t.get(E);if(U.color.copy(E.color).multiplyScalar(E.intensity),U.distance=E.distance,U.decay=E.decay,E.castShadow){let Y=E.shadow,Q=i.get(E);Q.shadowIntensity=Y.intensity,Q.shadowBias=Y.bias,Q.shadowNormalBias=Y.normalBias,Q.shadowRadius=Y.radius,Q.shadowMapSize=Y.mapSize,Q.shadowCameraNear=Y.camera.near,Q.shadowCameraFar=Y.camera.far,n.pointShadow[g]=Q,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=E.shadow.matrix,M++}n.point[g]=U,g++}else if(E.isHemisphereLight){let U=t.get(E);U.skyColor.copy(E.color).multiplyScalar(T),U.groundColor.copy(E.groundColor).multiplyScalar(T),n.hemi[f]=U,f++}}d>0&&(e.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=x,n.ambient[2]=h;let R=n.hash;(R.directionalLength!==m||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==d||R.hemiLength!==f||R.numDirectionalShadows!==k||R.numPointShadows!==M||R.numSpotShadows!==p||R.numSpotMaps!==I||R.numLightProbes!==Z)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=d,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=k,n.directionalShadowMap.length=k,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=p,n.spotShadowMap.length=p,n.directionalShadowMatrix.length=k,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=p+I-w,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=Z,R.directionalLength=m,R.pointLength=g,R.spotLength=_,R.rectAreaLength=d,R.hemiLength=f,R.numDirectionalShadows=k,R.numPointShadows=M,R.numSpotShadows=p,R.numSpotMaps=I,R.numLightProbes=Z,n.version=n0++)}function u(c,l){let x=0,h=0,m=0,g=0,_=0,d=l.matrixWorldInverse;for(let f=0,k=c.length;f<k;f++){let M=c[f];if(M.isDirectionalLight){let p=n.directional[x];p.direction.setFromMatrixPosition(M.matrixWorld),o.setFromMatrixPosition(M.target.matrixWorld),p.direction.sub(o),p.direction.transformDirection(d),x++}else if(M.isSpotLight){let p=n.spot[m];p.position.setFromMatrixPosition(M.matrixWorld),p.position.applyMatrix4(d),p.direction.setFromMatrixPosition(M.matrixWorld),o.setFromMatrixPosition(M.target.matrixWorld),p.direction.sub(o),p.direction.transformDirection(d),m++}else if(M.isRectAreaLight){let p=n.rectArea[g];p.position.setFromMatrixPosition(M.matrixWorld),p.position.applyMatrix4(d),r.identity(),s.copy(M.matrixWorld),s.premultiply(d),r.extractRotation(s),p.halfWidth.set(M.width*.5,0,0),p.halfHeight.set(0,M.height*.5,0),p.halfWidth.applyMatrix4(r),p.halfHeight.applyMatrix4(r),g++}else if(M.isPointLight){let p=n.point[h];p.position.setFromMatrixPosition(M.matrixWorld),p.position.applyMatrix4(d),h++}else if(M.isHemisphereLight){let p=n.hemi[_];p.direction.setFromMatrixPosition(M.matrixWorld),p.direction.transformDirection(d),_++}}}return{setup:a,setupView:u,state:n}}function cw(e){let t=new s0(e),i=[],n=[];function o(l){c.camera=l,i.length=0,n.length=0}function s(l){i.push(l)}function r(l){n.push(l)}function a(){t.setup(i)}function u(l){t.setupView(i,l)}let c={lightsArray:i,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:c,setupLights:a,setupLightsView:u,pushLight:s,pushShadow:r}}function r0(e){let t=new WeakMap;function i(o,s=0){let r=t.get(o),a;return r===void 0?(a=new cw(e),t.set(o,[a])):s>=r.length?(a=new cw(e),r.push(a)):a=r[s],a}function n(){t=new WeakMap}return{get:i,dispose:n}}var a0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,c0=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],l0=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],lw=new ii,wl=new C,Nk=new C;function x0(e,t,i){let n=new xl,o=new Wt,s=new Wt,r=new Je,a=new im,u=new nm,c={},l=i.maxTextureSize,x={[ss]:$i,[$i]:ss,[Oo]:Oo},h=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:a0,fragmentShader:u0}),m=h.clone();m.defines.HORIZONTAL_PASS=1;let g=new io;g.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Fe(g,h),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gl;let f=this.type;this.render=function(w,Z,R){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||w.length===0)return;w.type===aZ&&(Vt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),w.type=gl);let O=e.getRenderTarget(),S=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),N=e.state;N.setBlending(Io),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let T=f!==this.type;T&&Z.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(z=>z.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,z=w.length;$<z;$++){let U=w[$],Y=U.shadow;if(Y===void 0){Vt("WebGLShadowMap:",U,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;o.copy(Y.mapSize);let Q=Y.getFrameExtents();if(o.multiply(Q),s.copy(Y.mapSize),(o.x>l||o.y>l)&&(o.x>l&&(s.x=Math.floor(l/Q.x),o.x=s.x*Q.x,Y.mapSize.x=s.x),o.y>l&&(s.y=Math.floor(l/Q.y),o.y=s.y*Q.y,Y.mapSize.y=s.y)),Y.map===null||T===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Ku){if(U.isPointLight){Vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new yi(o.x,o.y,{format:Br,type:Jn,minFilter:Ye,magFilter:Ye,generateMipmaps:!1}),Y.map.texture.name=U.name+".shadowMap",Y.map.depthTexture=new tr(o.x,o.y,ro),Y.map.depthTexture.name=U.name+".shadowMapDepth",Y.map.depthTexture.format=Mo,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=_i,Y.map.depthTexture.magFilter=_i}else{U.isPointLight?(Y.map=new ll(o.x),Y.map.depthTexture=new tm(o.x,so)):(Y.map=new yi(o.x,o.y),Y.map.depthTexture=new tr(o.x,o.y,so)),Y.map.depthTexture.name=U.name+".shadowMap",Y.map.depthTexture.format=Mo;let it=e.state.buffers.depth.getReversed();this.type===gl?(Y.map.depthTexture.compareFunction=it?xf:lf,Y.map.depthTexture.minFilter=Ye,Y.map.depthTexture.magFilter=Ye):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=_i,Y.map.depthTexture.magFilter=_i)}Y.camera.updateProjectionMatrix()}let ut=Y.map.isWebGLCubeRenderTarget?6:1;for(let it=0;it<ut;it++){if(Y.map.isWebGLCubeRenderTarget)e.setRenderTarget(Y.map,it),e.clear();else{it===0&&(e.setRenderTarget(Y.map),e.clear());let lt=Y.getViewport(it);r.set(s.x*lt.x,s.y*lt.y,s.x*lt.z,s.y*lt.w),N.viewport(r)}if(U.isPointLight){let lt=Y.camera,Gt=Y.matrix,Nt=U.distance||lt.far;Nt!==lt.far&&(lt.far=Nt,lt.updateProjectionMatrix()),wl.setFromMatrixPosition(U.matrixWorld),lt.position.copy(wl),Nk.copy(lt.position),Nk.add(c0[it]),lt.up.copy(l0[it]),lt.lookAt(Nk),lt.updateMatrixWorld(),Gt.makeTranslation(-wl.x,-wl.y,-wl.z),lw.multiplyMatrices(lt.projectionMatrix,lt.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(lw,lt.coordinateSystem,lt.reversedDepth)}else Y.updateMatrices(U);n=Y.getFrustum(),p(Z,R,Y.camera,U,this.type)}Y.isPointLightShadow!==!0&&this.type===Ku&&k(Y,R),Y.needsUpdate=!1}f=this.type,d.needsUpdate=!1,e.setRenderTarget(O,S,E)};function k(w,Z){let R=t.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new yi(o.x,o.y,{format:Br,type:Jn})),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,e.setRenderTarget(w.mapPass),e.clear(),e.renderBufferDirect(Z,null,R,h,_,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,e.setRenderTarget(w.map),e.clear(),e.renderBufferDirect(Z,null,R,m,_,null)}function M(w,Z,R,O){let S=null,E=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(E!==void 0)S=E;else if(S=R.isPointLight===!0?u:a,e.localClippingEnabled&&Z.clipShadows===!0&&Array.isArray(Z.clippingPlanes)&&Z.clippingPlanes.length!==0||Z.displacementMap&&Z.displacementScale!==0||Z.alphaMap&&Z.alphaTest>0||Z.map&&Z.alphaTest>0||Z.alphaToCoverage===!0){let N=S.uuid,T=Z.uuid,$=c[N];$===void 0&&($={},c[N]=$);let z=$[T];z===void 0&&(z=S.clone(),$[T]=z,Z.addEventListener("dispose",I)),S=z}if(S.visible=Z.visible,S.wireframe=Z.wireframe,O===Ku?S.side=Z.shadowSide!==null?Z.shadowSide:Z.side:S.side=Z.shadowSide!==null?Z.shadowSide:x[Z.side],S.alphaMap=Z.alphaMap,S.alphaTest=Z.alphaToCoverage===!0?.5:Z.alphaTest,S.map=Z.map,S.clipShadows=Z.clipShadows,S.clippingPlanes=Z.clippingPlanes,S.clipIntersection=Z.clipIntersection,S.displacementMap=Z.displacementMap,S.displacementScale=Z.displacementScale,S.displacementBias=Z.displacementBias,S.wireframeLinewidth=Z.wireframeLinewidth,S.linewidth=Z.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let N=e.properties.get(S);N.light=R}return S}function p(w,Z,R,O,S){if(w.visible===!1)return;if(w.layers.test(Z.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===Ku)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);let T=t.update(w),$=w.material;if(Array.isArray($)){let z=T.groups;for(let U=0,Y=z.length;U<Y;U++){let Q=z[U],ut=$[Q.materialIndex];if(ut&&ut.visible){let it=M(w,ut,O,S);w.onBeforeShadow(e,w,Z,R,T,it,Q),e.renderBufferDirect(R,null,T,it,w,Q),w.onAfterShadow(e,w,Z,R,T,it,Q)}}}else if($.visible){let z=M(w,$,O,S);w.onBeforeShadow(e,w,Z,R,T,z,null),e.renderBufferDirect(R,null,T,z,w,null),w.onAfterShadow(e,w,Z,R,T,z,null)}}let N=w.children;for(let T=0,$=N.length;T<$;T++)p(N[T],Z,R,O,S)}function I(w){w.target.removeEventListener("dispose",I);for(let R in c){let O=c[R],S=w.target.uuid;S in O&&(O[S].dispose(),delete O[S])}}}var h0={[dm]:_m,[gm]:pm,[km]:Om,[zr]:Mm,[_m]:dm,[pm]:gm,[Om]:km,[Mm]:zr};function m0(e,t){function i(){let G=!1,ht=new Je,et=null,mt=new Je(0,0,0,0);return{setMask:function(L){et!==L&&!G&&(e.colorMask(L,L,L,L),et=L)},setLocked:function(L){G=L},setClear:function(L,B,nt,Ft,Oe){Oe===!0&&(L*=Ft,B*=Ft,nt*=Ft),ht.set(L,B,nt,Ft),mt.equals(ht)===!1&&(e.clearColor(L,B,nt,Ft),mt.copy(ht))},reset:function(){G=!1,et=null,mt.set(-1,0,0,0)}}}function n(){let G=!1,ht=!1,et=null,mt=null,L=null;return{setReversed:function(B){if(ht!==B){let nt=t.get("EXT_clip_control");B?nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.ZERO_TO_ONE_EXT):nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.NEGATIVE_ONE_TO_ONE_EXT),ht=B;let Ft=L;L=null,this.setClear(Ft)}},getReversed:function(){return ht},setTest:function(B){B?P(e.DEPTH_TEST):_t(e.DEPTH_TEST)},setMask:function(B){et!==B&&!G&&(e.depthMask(B),et=B)},setFunc:function(B){if(ht&&(B=h0[B]),mt!==B){switch(B){case dm:e.depthFunc(e.NEVER);break;case _m:e.depthFunc(e.ALWAYS);break;case gm:e.depthFunc(e.LESS);break;case zr:e.depthFunc(e.LEQUAL);break;case km:e.depthFunc(e.EQUAL);break;case Mm:e.depthFunc(e.GEQUAL);break;case pm:e.depthFunc(e.GREATER);break;case Om:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}mt=B}},setLocked:function(B){G=B},setClear:function(B){L!==B&&(ht&&(B=1-B),e.clearDepth(B),L=B)},reset:function(){G=!1,et=null,mt=null,L=null,ht=!1}}}function o(){let G=!1,ht=null,et=null,mt=null,L=null,B=null,nt=null,Ft=null,Oe=null;return{setTest:function(ue){G||(ue?P(e.STENCIL_TEST):_t(e.STENCIL_TEST))},setMask:function(ue){ht!==ue&&!G&&(e.stencilMask(ue),ht=ue)},setFunc:function(ue,ao,Go){(et!==ue||mt!==ao||L!==Go)&&(e.stencilFunc(ue,ao,Go),et=ue,mt=ao,L=Go)},setOp:function(ue,ao,Go){(B!==ue||nt!==ao||Ft!==Go)&&(e.stencilOp(ue,ao,Go),B=ue,nt=ao,Ft=Go)},setLocked:function(ue){G=ue},setClear:function(ue){Oe!==ue&&(e.clearStencil(ue),Oe=ue)},reset:function(){G=!1,ht=null,et=null,mt=null,L=null,B=null,nt=null,Ft=null,Oe=null}}}let s=new i,r=new n,a=new o,u=new WeakMap,c=new WeakMap,l={},x={},h=new WeakMap,m=[],g=null,_=!1,d=null,f=null,k=null,M=null,p=null,I=null,w=null,Z=new Qt(0,0,0),R=0,O=!1,S=null,E=null,N=null,T=null,$=null,z=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,Y=0,Q=e.getParameter(e.VERSION);Q.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(Q)[1]),U=Y>=1):Q.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),U=Y>=2);let ut=null,it={},lt=e.getParameter(e.SCISSOR_BOX),Gt=e.getParameter(e.VIEWPORT),Nt=new Je().fromArray(lt),Pt=new Je().fromArray(Gt);function Lt(G,ht,et,mt){let L=new Uint8Array(4),B=e.createTexture();e.bindTexture(G,B),e.texParameteri(G,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(G,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let nt=0;nt<et;nt++)G===e.TEXTURE_3D||G===e.TEXTURE_2D_ARRAY?e.texImage3D(ht,0,e.RGBA,1,1,mt,0,e.RGBA,e.UNSIGNED_BYTE,L):e.texImage2D(ht+nt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,L);return B}let q={};q[e.TEXTURE_2D]=Lt(e.TEXTURE_2D,e.TEXTURE_2D,1),q[e.TEXTURE_CUBE_MAP]=Lt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[e.TEXTURE_2D_ARRAY]=Lt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),q[e.TEXTURE_3D]=Lt(e.TEXTURE_3D,e.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),P(e.DEPTH_TEST),r.setFunc(zr),Yt(!1),qe(nk),P(e.CULL_FACE),ae(Io);function P(G){l[G]!==!0&&(e.enable(G),l[G]=!0)}function _t(G){l[G]!==!1&&(e.disable(G),l[G]=!1)}function $t(G,ht){return x[G]!==ht?(e.bindFramebuffer(G,ht),x[G]=ht,G===e.DRAW_FRAMEBUFFER&&(x[e.FRAMEBUFFER]=ht),G===e.FRAMEBUFFER&&(x[e.DRAW_FRAMEBUFFER]=ht),!0):!1}function Mt(G,ht){let et=m,mt=!1;if(G){et=h.get(ht),et===void 0&&(et=[],h.set(ht,et));let L=G.textures;if(et.length!==L.length||et[0]!==e.COLOR_ATTACHMENT0){for(let B=0,nt=L.length;B<nt;B++)et[B]=e.COLOR_ATTACHMENT0+B;et.length=L.length,mt=!0}}else et[0]!==e.BACK&&(et[0]=e.BACK,mt=!0);mt&&e.drawBuffers(et)}function ee(G){return g!==G?(e.useProgram(G),g=G,!0):!1}let li={[Ps]:e.FUNC_ADD,[cZ]:e.FUNC_SUBTRACT,[lZ]:e.FUNC_REVERSE_SUBTRACT};li[xZ]=e.MIN,li[hZ]=e.MAX;let te={[mZ]:e.ZERO,[fZ]:e.ONE,[dZ]:e.SRC_COLOR,[Jh]:e.SRC_ALPHA,[OZ]:e.SRC_ALPHA_SATURATE,[MZ]:e.DST_COLOR,[gZ]:e.DST_ALPHA,[_Z]:e.ONE_MINUS_SRC_COLOR,[bh]:e.ONE_MINUS_SRC_ALPHA,[pZ]:e.ONE_MINUS_DST_COLOR,[kZ]:e.ONE_MINUS_DST_ALPHA,[IZ]:e.CONSTANT_COLOR,[yZ]:e.ONE_MINUS_CONSTANT_COLOR,[SZ]:e.CONSTANT_ALPHA,[ZZ]:e.ONE_MINUS_CONSTANT_ALPHA};function ae(G,ht,et,mt,L,B,nt,Ft,Oe,ue){if(G===Io){_===!0&&(_t(e.BLEND),_=!1);return}if(_===!1&&(P(e.BLEND),_=!0),G!==uZ){if(G!==d||ue!==O){if((f!==Ps||p!==Ps)&&(e.blendEquation(e.FUNC_ADD),f=Ps,p=Ps),ue)switch(G){case br:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ok:e.blendFunc(e.ONE,e.ONE);break;case sk:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case rk:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Kt("WebGLState: Invalid blending: ",G);break}else switch(G){case br:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ok:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case sk:Kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rk:Kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Kt("WebGLState: Invalid blending: ",G);break}k=null,M=null,I=null,w=null,Z.set(0,0,0),R=0,d=G,O=ue}return}L=L||ht,B=B||et,nt=nt||mt,(ht!==f||L!==p)&&(e.blendEquationSeparate(li[ht],li[L]),f=ht,p=L),(et!==k||mt!==M||B!==I||nt!==w)&&(e.blendFuncSeparate(te[et],te[mt],te[B],te[nt]),k=et,M=mt,I=B,w=nt),(Ft.equals(Z)===!1||Oe!==R)&&(e.blendColor(Ft.r,Ft.g,Ft.b,Oe),Z.copy(Ft),R=Oe),d=G,O=!1}function _e(G,ht){G.side===Oo?_t(e.CULL_FACE):P(e.CULL_FACE);let et=G.side===$i;ht&&(et=!et),Yt(et),G.blending===br&&G.transparent===!1?ae(Io):ae(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),r.setFunc(G.depthFunc),r.setTest(G.depthTest),r.setMask(G.depthWrite),s.setMask(G.colorWrite);let mt=G.stencilWrite;a.setTest(mt),mt&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Qe(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?P(e.SAMPLE_ALPHA_TO_COVERAGE):_t(e.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(G){S!==G&&(G?e.frontFace(e.CW):e.frontFace(e.CCW),S=G)}function qe(G){G!==sZ?(P(e.CULL_FACE),G!==E&&(G===nk?e.cullFace(e.BACK):G===rZ?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):_t(e.CULL_FACE),E=G}function V(G){G!==N&&(U&&e.lineWidth(G),N=G)}function Qe(G,ht,et){G?(P(e.POLYGON_OFFSET_FILL),(T!==ht||$!==et)&&(e.polygonOffset(ht,et),T=ht,$=et)):_t(e.POLYGON_OFFSET_FILL)}function se(G){G?P(e.SCISSOR_TEST):_t(e.SCISSOR_TEST)}function pe(G){G===void 0&&(G=e.TEXTURE0+z-1),ut!==G&&(e.activeTexture(G),ut=G)}function Ot(G,ht,et){et===void 0&&(ut===null?et=e.TEXTURE0+z-1:et=ut);let mt=it[et];mt===void 0&&(mt={type:void 0,texture:void 0},it[et]=mt),(mt.type!==G||mt.texture!==ht)&&(ut!==et&&(e.activeTexture(et),ut=et),e.bindTexture(G,ht||q[G]),mt.type=G,mt.texture=ht)}function K(){let G=it[ut];G!==void 0&&G.type!==void 0&&(e.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function y(){try{e.compressedTexImage2D(...arguments)}catch(G){Kt("WebGLState:",G)}}function F(){try{e.compressedTexImage3D(...arguments)}catch(G){Kt("WebGLState:",G)}}function A(){try{e.texSubImage2D(...arguments)}catch(G){Kt("WebGLState:",G)}}function D(){try{e.texSubImage3D(...arguments)}catch(G){Kt("WebGLState:",G)}}function H(){try{e.compressedTexSubImage2D(...arguments)}catch(G){Kt("WebGLState:",G)}}function yt(){try{e.compressedTexSubImage3D(...arguments)}catch(G){Kt("WebGLState:",G)}}function ot(){try{e.texStorage2D(...arguments)}catch(G){Kt("WebGLState:",G)}}function pt(){try{e.texStorage3D(...arguments)}catch(G){Kt("WebGLState:",G)}}function Et(){try{e.texImage2D(...arguments)}catch(G){Kt("WebGLState:",G)}}function tt(){try{e.texImage3D(...arguments)}catch(G){Kt("WebGLState:",G)}}function rt(G){Nt.equals(G)===!1&&(e.scissor(G.x,G.y,G.z,G.w),Nt.copy(G))}function kt(G){Pt.equals(G)===!1&&(e.viewport(G.x,G.y,G.z,G.w),Pt.copy(G))}function It(G,ht){let et=c.get(ht);et===void 0&&(et=new WeakMap,c.set(ht,et));let mt=et.get(G);mt===void 0&&(mt=e.getUniformBlockIndex(ht,G.name),et.set(G,mt))}function st(G,ht){let mt=c.get(ht).get(G);u.get(ht)!==mt&&(e.uniformBlockBinding(ht,mt,G.__bindingPointIndex),u.set(ht,mt))}function Jt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),l={},ut=null,it={},x={},h=new WeakMap,m=[],g=null,_=!1,d=null,f=null,k=null,M=null,p=null,I=null,w=null,Z=new Qt(0,0,0),R=0,O=!1,S=null,E=null,N=null,T=null,$=null,Nt.set(0,0,e.canvas.width,e.canvas.height),Pt.set(0,0,e.canvas.width,e.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:P,disable:_t,bindFramebuffer:$t,drawBuffers:Mt,useProgram:ee,setBlending:ae,setMaterial:_e,setFlipSided:Yt,setCullFace:qe,setLineWidth:V,setPolygonOffset:Qe,setScissorTest:se,activeTexture:pe,bindTexture:Ot,unbindTexture:K,compressedTexImage2D:y,compressedTexImage3D:F,texImage2D:Et,texImage3D:tt,updateUBOMapping:It,uniformBlockBinding:st,texStorage2D:ot,texStorage3D:pt,texSubImage2D:A,texSubImage3D:D,compressedTexSubImage2D:H,compressedTexSubImage3D:yt,scissor:rt,viewport:kt,reset:Jt}}function f0(e,t,i,n,o,s,r){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Wt,l=new WeakMap,x,h=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(K,y){return m?new OffscreenCanvas(K,y):Iu("canvas")}function _(K,y,F){let A=1,D=Ot(K);if((D.width>F||D.height>F)&&(A=F/Math.max(D.width,D.height)),A<1)if(typeof HTMLImageElement<"u"&&K instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&K instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&K instanceof ImageBitmap||typeof VideoFrame<"u"&&K instanceof VideoFrame){let H=Math.floor(A*D.width),yt=Math.floor(A*D.height);x===void 0&&(x=g(H,yt));let ot=y?g(H,yt):x;return ot.width=H,ot.height=yt,ot.getContext("2d").drawImage(K,0,0,H,yt),Vt("WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+H+"x"+yt+")."),ot}else return"data"in K&&Vt("WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),K;return K}function d(K){return K.generateMipmaps}function f(K){e.generateMipmap(K)}function k(K){return K.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:K.isWebGL3DRenderTarget?e.TEXTURE_3D:K.isWebGLArrayRenderTarget||K.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function M(K,y,F,A,D=!1){if(K!==null){if(e[K]!==void 0)return e[K];Vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+K+"'")}let H=y;if(y===e.RED&&(F===e.FLOAT&&(H=e.R32F),F===e.HALF_FLOAT&&(H=e.R16F),F===e.UNSIGNED_BYTE&&(H=e.R8)),y===e.RED_INTEGER&&(F===e.UNSIGNED_BYTE&&(H=e.R8UI),F===e.UNSIGNED_SHORT&&(H=e.R16UI),F===e.UNSIGNED_INT&&(H=e.R32UI),F===e.BYTE&&(H=e.R8I),F===e.SHORT&&(H=e.R16I),F===e.INT&&(H=e.R32I)),y===e.RG&&(F===e.FLOAT&&(H=e.RG32F),F===e.HALF_FLOAT&&(H=e.RG16F),F===e.UNSIGNED_BYTE&&(H=e.RG8)),y===e.RG_INTEGER&&(F===e.UNSIGNED_BYTE&&(H=e.RG8UI),F===e.UNSIGNED_SHORT&&(H=e.RG16UI),F===e.UNSIGNED_INT&&(H=e.RG32UI),F===e.BYTE&&(H=e.RG8I),F===e.SHORT&&(H=e.RG16I),F===e.INT&&(H=e.RG32I)),y===e.RGB_INTEGER&&(F===e.UNSIGNED_BYTE&&(H=e.RGB8UI),F===e.UNSIGNED_SHORT&&(H=e.RGB16UI),F===e.UNSIGNED_INT&&(H=e.RGB32UI),F===e.BYTE&&(H=e.RGB8I),F===e.SHORT&&(H=e.RGB16I),F===e.INT&&(H=e.RGB32I)),y===e.RGBA_INTEGER&&(F===e.UNSIGNED_BYTE&&(H=e.RGBA8UI),F===e.UNSIGNED_SHORT&&(H=e.RGBA16UI),F===e.UNSIGNED_INT&&(H=e.RGBA32UI),F===e.BYTE&&(H=e.RGBA8I),F===e.SHORT&&(H=e.RGBA16I),F===e.INT&&(H=e.RGBA32I)),y===e.RGB&&(F===e.UNSIGNED_INT_5_9_9_9_REV&&(H=e.RGB9_E5),F===e.UNSIGNED_INT_10F_11F_11F_REV&&(H=e.R11F_G11F_B10F)),y===e.RGBA){let yt=D?il:Dt.getTransfer(A);F===e.FLOAT&&(H=e.RGBA32F),F===e.HALF_FLOAT&&(H=e.RGBA16F),F===e.UNSIGNED_BYTE&&(H=yt===re?e.SRGB8_ALPHA8:e.RGBA8),F===e.UNSIGNED_SHORT_4_4_4_4&&(H=e.RGBA4),F===e.UNSIGNED_SHORT_5_5_5_1&&(H=e.RGB5_A1)}return(H===e.R16F||H===e.R32F||H===e.RG16F||H===e.RG32F||H===e.RGBA16F||H===e.RGBA32F)&&t.get("EXT_color_buffer_float"),H}function p(K,y){let F;return K?y===null||y===so||y===Vu?F=e.DEPTH24_STENCIL8:y===ro?F=e.DEPTH32F_STENCIL8:y===Eu&&(F=e.DEPTH24_STENCIL8,Vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===so||y===Vu?F=e.DEPTH_COMPONENT24:y===ro?F=e.DEPTH_COMPONENT32F:y===Eu&&(F=e.DEPTH_COMPONENT16),F}function I(K,y){return d(K)===!0||K.isFramebufferTexture&&K.minFilter!==_i&&K.minFilter!==Ye?Math.log2(Math.max(y.width,y.height))+1:K.mipmaps!==void 0&&K.mipmaps.length>0?K.mipmaps.length:K.isCompressedTexture&&Array.isArray(K.image)?y.mipmaps.length:1}function w(K){let y=K.target;y.removeEventListener("dispose",w),R(y),y.isVideoTexture&&l.delete(y)}function Z(K){let y=K.target;y.removeEventListener("dispose",Z),S(y)}function R(K){let y=n.get(K);if(y.__webglInit===void 0)return;let F=K.source,A=h.get(F);if(A){let D=A[y.__cacheKey];D.usedTimes--,D.usedTimes===0&&O(K),Object.keys(A).length===0&&h.delete(F)}n.remove(K)}function O(K){let y=n.get(K);e.deleteTexture(y.__webglTexture);let F=K.source,A=h.get(F);delete A[y.__cacheKey],r.memory.textures--}function S(K){let y=n.get(K);if(K.depthTexture&&(K.depthTexture.dispose(),n.remove(K.depthTexture)),K.isWebGLCubeRenderTarget)for(let A=0;A<6;A++){if(Array.isArray(y.__webglFramebuffer[A]))for(let D=0;D<y.__webglFramebuffer[A].length;D++)e.deleteFramebuffer(y.__webglFramebuffer[A][D]);else e.deleteFramebuffer(y.__webglFramebuffer[A]);y.__webglDepthbuffer&&e.deleteRenderbuffer(y.__webglDepthbuffer[A])}else{if(Array.isArray(y.__webglFramebuffer))for(let A=0;A<y.__webglFramebuffer.length;A++)e.deleteFramebuffer(y.__webglFramebuffer[A]);else e.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&e.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&e.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let A=0;A<y.__webglColorRenderbuffer.length;A++)y.__webglColorRenderbuffer[A]&&e.deleteRenderbuffer(y.__webglColorRenderbuffer[A]);y.__webglDepthRenderbuffer&&e.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let F=K.textures;for(let A=0,D=F.length;A<D;A++){let H=n.get(F[A]);H.__webglTexture&&(e.deleteTexture(H.__webglTexture),r.memory.textures--),n.remove(F[A])}n.remove(K)}let E=0;function N(){E=0}function T(){let K=E;return K>=o.maxTextures&&Vt("WebGLTextures: Trying to use "+K+" texture units while this GPU supports only "+o.maxTextures),E+=1,K}function $(K){let y=[];return y.push(K.wrapS),y.push(K.wrapT),y.push(K.wrapR||0),y.push(K.magFilter),y.push(K.minFilter),y.push(K.anisotropy),y.push(K.internalFormat),y.push(K.format),y.push(K.type),y.push(K.generateMipmaps),y.push(K.premultiplyAlpha),y.push(K.flipY),y.push(K.unpackAlignment),y.push(K.colorSpace),y.join()}function z(K,y){let F=n.get(K);if(K.isVideoTexture&&se(K),K.isRenderTargetTexture===!1&&K.isExternalTexture!==!0&&K.version>0&&F.__version!==K.version){let A=K.image;if(A===null)Vt("WebGLRenderer: Texture marked for update but no image data found.");else if(A.complete===!1)Vt("WebGLRenderer: Texture marked for update but image is incomplete");else{q(F,K,y);return}}else K.isExternalTexture&&(F.__webglTexture=K.sourceTexture?K.sourceTexture:null);i.bindTexture(e.TEXTURE_2D,F.__webglTexture,e.TEXTURE0+y)}function U(K,y){let F=n.get(K);if(K.isRenderTargetTexture===!1&&K.version>0&&F.__version!==K.version){q(F,K,y);return}else K.isExternalTexture&&(F.__webglTexture=K.sourceTexture?K.sourceTexture:null);i.bindTexture(e.TEXTURE_2D_ARRAY,F.__webglTexture,e.TEXTURE0+y)}function Y(K,y){let F=n.get(K);if(K.isRenderTargetTexture===!1&&K.version>0&&F.__version!==K.version){q(F,K,y);return}i.bindTexture(e.TEXTURE_3D,F.__webglTexture,e.TEXTURE0+y)}function Q(K,y){let F=n.get(K);if(K.isCubeDepthTexture!==!0&&K.version>0&&F.__version!==K.version){P(F,K,y);return}i.bindTexture(e.TEXTURE_CUBE_MAP,F.__webglTexture,e.TEXTURE0+y)}let ut={[zh]:e.REPEAT,[ko]:e.CLAMP_TO_EDGE,[Hh]:e.MIRRORED_REPEAT},it={[_i]:e.NEAREST,[RZ]:e.NEAREST_MIPMAP_NEAREST,[Ml]:e.NEAREST_MIPMAP_LINEAR,[Ye]:e.LINEAR,[Sm]:e.LINEAR_MIPMAP_NEAREST,[sr]:e.LINEAR_MIPMAP_LINEAR},lt={[GZ]:e.NEVER,[WZ]:e.ALWAYS,[FZ]:e.LESS,[lf]:e.LEQUAL,[jZ]:e.EQUAL,[xf]:e.GEQUAL,[NZ]:e.GREATER,[TZ]:e.NOTEQUAL};function Gt(K,y){if(y.type===ro&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Ye||y.magFilter===Sm||y.magFilter===Ml||y.magFilter===sr||y.minFilter===Ye||y.minFilter===Sm||y.minFilter===Ml||y.minFilter===sr)&&Vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(K,e.TEXTURE_WRAP_S,ut[y.wrapS]),e.texParameteri(K,e.TEXTURE_WRAP_T,ut[y.wrapT]),(K===e.TEXTURE_3D||K===e.TEXTURE_2D_ARRAY)&&e.texParameteri(K,e.TEXTURE_WRAP_R,ut[y.wrapR]),e.texParameteri(K,e.TEXTURE_MAG_FILTER,it[y.magFilter]),e.texParameteri(K,e.TEXTURE_MIN_FILTER,it[y.minFilter]),y.compareFunction&&(e.texParameteri(K,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(K,e.TEXTURE_COMPARE_FUNC,lt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===_i||y.minFilter!==Ml&&y.minFilter!==sr||y.type===ro&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");e.texParameterf(K,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,o.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Nt(K,y){let F=!1;K.__webglInit===void 0&&(K.__webglInit=!0,y.addEventListener("dispose",w));let A=y.source,D=h.get(A);D===void 0&&(D={},h.set(A,D));let H=$(y);if(H!==K.__cacheKey){D[H]===void 0&&(D[H]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,F=!0),D[H].usedTimes++;let yt=D[K.__cacheKey];yt!==void 0&&(D[K.__cacheKey].usedTimes--,yt.usedTimes===0&&O(y)),K.__cacheKey=H,K.__webglTexture=D[H].texture}return F}function Pt(K,y,F){return Math.floor(Math.floor(K/F)/y)}function Lt(K,y,F,A){let H=K.updateRanges;if(H.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,y.width,y.height,F,A,y.data);else{H.sort((tt,rt)=>tt.start-rt.start);let yt=0;for(let tt=1;tt<H.length;tt++){let rt=H[yt],kt=H[tt],It=rt.start+rt.count,st=Pt(kt.start,y.width,4),Jt=Pt(rt.start,y.width,4);kt.start<=It+1&&st===Jt&&Pt(kt.start+kt.count-1,y.width,4)===st?rt.count=Math.max(rt.count,kt.start+kt.count-rt.start):(++yt,H[yt]=kt)}H.length=yt+1;let ot=e.getParameter(e.UNPACK_ROW_LENGTH),pt=e.getParameter(e.UNPACK_SKIP_PIXELS),Et=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,y.width);for(let tt=0,rt=H.length;tt<rt;tt++){let kt=H[tt],It=Math.floor(kt.start/4),st=Math.ceil(kt.count/4),Jt=It%y.width,G=Math.floor(It/y.width),ht=st,et=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Jt),e.pixelStorei(e.UNPACK_SKIP_ROWS,G),i.texSubImage2D(e.TEXTURE_2D,0,Jt,G,ht,et,F,A,y.data)}K.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,ot),e.pixelStorei(e.UNPACK_SKIP_PIXELS,pt),e.pixelStorei(e.UNPACK_SKIP_ROWS,Et)}}function q(K,y,F){let A=e.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(A=e.TEXTURE_2D_ARRAY),y.isData3DTexture&&(A=e.TEXTURE_3D);let D=Nt(K,y),H=y.source;i.bindTexture(A,K.__webglTexture,e.TEXTURE0+F);let yt=n.get(H);if(H.version!==yt.__version||D===!0){i.activeTexture(e.TEXTURE0+F);let ot=Dt.getPrimaries(Dt.workingColorSpace),pt=y.colorSpace===ls?null:Dt.getPrimaries(y.colorSpace),Et=y.colorSpace===ls||ot===pt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let tt=_(y.image,!1,o.maxTextureSize);tt=pe(y,tt);let rt=s.convert(y.format,y.colorSpace),kt=s.convert(y.type),It=M(y.internalFormat,rt,kt,y.colorSpace,y.isVideoTexture);Gt(A,y);let st,Jt=y.mipmaps,G=y.isVideoTexture!==!0,ht=yt.__version===void 0||D===!0,et=H.dataReady,mt=I(y,tt);if(y.isDepthTexture)It=p(y.format===rr,y.type),ht&&(G?i.texStorage2D(e.TEXTURE_2D,1,It,tt.width,tt.height):i.texImage2D(e.TEXTURE_2D,0,It,tt.width,tt.height,0,rt,kt,null));else if(y.isDataTexture)if(Jt.length>0){G&&ht&&i.texStorage2D(e.TEXTURE_2D,mt,It,Jt[0].width,Jt[0].height);for(let L=0,B=Jt.length;L<B;L++)st=Jt[L],G?et&&i.texSubImage2D(e.TEXTURE_2D,L,0,0,st.width,st.height,rt,kt,st.data):i.texImage2D(e.TEXTURE_2D,L,It,st.width,st.height,0,rt,kt,st.data);y.generateMipmaps=!1}else G?(ht&&i.texStorage2D(e.TEXTURE_2D,mt,It,tt.width,tt.height),et&&Lt(y,tt,rt,kt)):i.texImage2D(e.TEXTURE_2D,0,It,tt.width,tt.height,0,rt,kt,tt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){G&&ht&&i.texStorage3D(e.TEXTURE_2D_ARRAY,mt,It,Jt[0].width,Jt[0].height,tt.depth);for(let L=0,B=Jt.length;L<B;L++)if(st=Jt[L],y.format!==Li)if(rt!==null)if(G){if(et)if(y.layerUpdates.size>0){let nt=Kk(st.width,st.height,y.format,y.type);for(let Ft of y.layerUpdates){let Oe=st.data.subarray(Ft*nt/st.data.BYTES_PER_ELEMENT,(Ft+1)*nt/st.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,L,0,0,Ft,st.width,st.height,1,rt,Oe)}y.clearLayerUpdates()}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,L,0,0,0,st.width,st.height,tt.depth,rt,st.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,L,It,st.width,st.height,tt.depth,0,st.data,0,0);else Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?et&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,L,0,0,0,st.width,st.height,tt.depth,rt,kt,st.data):i.texImage3D(e.TEXTURE_2D_ARRAY,L,It,st.width,st.height,tt.depth,0,rt,kt,st.data)}else{G&&ht&&i.texStorage2D(e.TEXTURE_2D,mt,It,Jt[0].width,Jt[0].height);for(let L=0,B=Jt.length;L<B;L++)st=Jt[L],y.format!==Li?rt!==null?G?et&&i.compressedTexSubImage2D(e.TEXTURE_2D,L,0,0,st.width,st.height,rt,st.data):i.compressedTexImage2D(e.TEXTURE_2D,L,It,st.width,st.height,0,st.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?et&&i.texSubImage2D(e.TEXTURE_2D,L,0,0,st.width,st.height,rt,kt,st.data):i.texImage2D(e.TEXTURE_2D,L,It,st.width,st.height,0,rt,kt,st.data)}else if(y.isDataArrayTexture)if(G){if(ht&&i.texStorage3D(e.TEXTURE_2D_ARRAY,mt,It,tt.width,tt.height,tt.depth),et)if(y.layerUpdates.size>0){let L=Kk(tt.width,tt.height,y.format,y.type);for(let B of y.layerUpdates){let nt=tt.data.subarray(B*L/tt.data.BYTES_PER_ELEMENT,(B+1)*L/tt.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,B,tt.width,tt.height,1,rt,kt,nt)}y.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,rt,kt,tt.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,It,tt.width,tt.height,tt.depth,0,rt,kt,tt.data);else if(y.isData3DTexture)G?(ht&&i.texStorage3D(e.TEXTURE_3D,mt,It,tt.width,tt.height,tt.depth),et&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,rt,kt,tt.data)):i.texImage3D(e.TEXTURE_3D,0,It,tt.width,tt.height,tt.depth,0,rt,kt,tt.data);else if(y.isFramebufferTexture){if(ht)if(G)i.texStorage2D(e.TEXTURE_2D,mt,It,tt.width,tt.height);else{let L=tt.width,B=tt.height;for(let nt=0;nt<mt;nt++)i.texImage2D(e.TEXTURE_2D,nt,It,L,B,0,rt,kt,null),L>>=1,B>>=1}}else if(Jt.length>0){if(G&&ht){let L=Ot(Jt[0]);i.texStorage2D(e.TEXTURE_2D,mt,It,L.width,L.height)}for(let L=0,B=Jt.length;L<B;L++)st=Jt[L],G?et&&i.texSubImage2D(e.TEXTURE_2D,L,0,0,rt,kt,st):i.texImage2D(e.TEXTURE_2D,L,It,rt,kt,st);y.generateMipmaps=!1}else if(G){if(ht){let L=Ot(tt);i.texStorage2D(e.TEXTURE_2D,mt,It,L.width,L.height)}et&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,rt,kt,tt)}else i.texImage2D(e.TEXTURE_2D,0,It,rt,kt,tt);d(y)&&f(A),yt.__version=H.version,y.onUpdate&&y.onUpdate(y)}K.__version=y.version}function P(K,y,F){if(y.image.length!==6)return;let A=Nt(K,y),D=y.source;i.bindTexture(e.TEXTURE_CUBE_MAP,K.__webglTexture,e.TEXTURE0+F);let H=n.get(D);if(D.version!==H.__version||A===!0){i.activeTexture(e.TEXTURE0+F);let yt=Dt.getPrimaries(Dt.workingColorSpace),ot=y.colorSpace===ls?null:Dt.getPrimaries(y.colorSpace),pt=y.colorSpace===ls||yt===ot?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let Et=y.isCompressedTexture||y.image[0].isCompressedTexture,tt=y.image[0]&&y.image[0].isDataTexture,rt=[];for(let B=0;B<6;B++)!Et&&!tt?rt[B]=_(y.image[B],!0,o.maxCubemapSize):rt[B]=tt?y.image[B].image:y.image[B],rt[B]=pe(y,rt[B]);let kt=rt[0],It=s.convert(y.format,y.colorSpace),st=s.convert(y.type),Jt=M(y.internalFormat,It,st,y.colorSpace),G=y.isVideoTexture!==!0,ht=H.__version===void 0||A===!0,et=D.dataReady,mt=I(y,kt);Gt(e.TEXTURE_CUBE_MAP,y);let L;if(Et){G&&ht&&i.texStorage2D(e.TEXTURE_CUBE_MAP,mt,Jt,kt.width,kt.height);for(let B=0;B<6;B++){L=rt[B].mipmaps;for(let nt=0;nt<L.length;nt++){let Ft=L[nt];y.format!==Li?It!==null?G?et&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+B,nt,0,0,Ft.width,Ft.height,It,Ft.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+B,nt,Jt,Ft.width,Ft.height,0,Ft.data):Vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?et&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+B,nt,0,0,Ft.width,Ft.height,It,st,Ft.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+B,nt,Jt,Ft.width,Ft.height,0,It,st,Ft.data)}}}else{if(L=y.mipmaps,G&&ht){L.length>0&&mt++;let B=Ot(rt[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,mt,Jt,B.width,B.height)}for(let B=0;B<6;B++)if(tt){G?et&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,rt[B].width,rt[B].height,It,st,rt[B].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,Jt,rt[B].width,rt[B].height,0,It,st,rt[B].data);for(let nt=0;nt<L.length;nt++){let Oe=L[nt].image[B].image;G?et&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+B,nt+1,0,0,Oe.width,Oe.height,It,st,Oe.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+B,nt+1,Jt,Oe.width,Oe.height,0,It,st,Oe.data)}}else{G?et&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,It,st,rt[B]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,Jt,It,st,rt[B]);for(let nt=0;nt<L.length;nt++){let Ft=L[nt];G?et&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+B,nt+1,0,0,It,st,Ft.image[B]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+B,nt+1,Jt,It,st,Ft.image[B])}}}d(y)&&f(e.TEXTURE_CUBE_MAP),H.__version=D.version,y.onUpdate&&y.onUpdate(y)}K.__version=y.version}function _t(K,y,F,A,D,H){let yt=s.convert(F.format,F.colorSpace),ot=s.convert(F.type),pt=M(F.internalFormat,yt,ot,F.colorSpace),Et=n.get(y),tt=n.get(F);if(tt.__renderTarget=y,!Et.__hasExternalTextures){let rt=Math.max(1,y.width>>H),kt=Math.max(1,y.height>>H);D===e.TEXTURE_3D||D===e.TEXTURE_2D_ARRAY?i.texImage3D(D,H,pt,rt,kt,y.depth,0,yt,ot,null):i.texImage2D(D,H,pt,rt,kt,0,yt,ot,null)}i.bindFramebuffer(e.FRAMEBUFFER,K),Qe(y)?a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,A,D,tt.__webglTexture,0,V(y)):(D===e.TEXTURE_2D||D>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&D<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,A,D,tt.__webglTexture,H),i.bindFramebuffer(e.FRAMEBUFFER,null)}function $t(K,y,F){if(e.bindRenderbuffer(e.RENDERBUFFER,K),y.depthBuffer){let A=y.depthTexture,D=A&&A.isDepthTexture?A.type:null,H=p(y.stencilBuffer,D),yt=y.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Qe(y)?a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,V(y),H,y.width,y.height):F?e.renderbufferStorageMultisample(e.RENDERBUFFER,V(y),H,y.width,y.height):e.renderbufferStorage(e.RENDERBUFFER,H,y.width,y.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,yt,e.RENDERBUFFER,K)}else{let A=y.textures;for(let D=0;D<A.length;D++){let H=A[D],yt=s.convert(H.format,H.colorSpace),ot=s.convert(H.type),pt=M(H.internalFormat,yt,ot,H.colorSpace);Qe(y)?a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,V(y),pt,y.width,y.height):F?e.renderbufferStorageMultisample(e.RENDERBUFFER,V(y),pt,y.width,y.height):e.renderbufferStorage(e.RENDERBUFFER,pt,y.width,y.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Mt(K,y,F){let A=y.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,K),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let D=n.get(y.depthTexture);if(D.__renderTarget=y,(!D.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),A){if(D.__webglInit===void 0&&(D.__webglInit=!0,y.depthTexture.addEventListener("dispose",w)),D.__webglTexture===void 0){D.__webglTexture=e.createTexture(),i.bindTexture(e.TEXTURE_CUBE_MAP,D.__webglTexture),Gt(e.TEXTURE_CUBE_MAP,y.depthTexture);let Et=s.convert(y.depthTexture.format),tt=s.convert(y.depthTexture.type),rt;y.depthTexture.format===Mo?rt=e.DEPTH_COMPONENT24:y.depthTexture.format===rr&&(rt=e.DEPTH24_STENCIL8);for(let kt=0;kt<6;kt++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+kt,0,rt,y.width,y.height,0,Et,tt,null)}}else z(y.depthTexture,0);let H=D.__webglTexture,yt=V(y),ot=A?e.TEXTURE_CUBE_MAP_POSITIVE_X+F:e.TEXTURE_2D,pt=y.depthTexture.format===rr?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(y.depthTexture.format===Mo)Qe(y)?a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,pt,ot,H,0,yt):e.framebufferTexture2D(e.FRAMEBUFFER,pt,ot,H,0);else if(y.depthTexture.format===rr)Qe(y)?a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,pt,ot,H,0,yt):e.framebufferTexture2D(e.FRAMEBUFFER,pt,ot,H,0);else throw new Error("Unknown depthTexture format")}function ee(K){let y=n.get(K),F=K.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==K.depthTexture){let A=K.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),A){let D=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,A.removeEventListener("dispose",D)};A.addEventListener("dispose",D),y.__depthDisposeCallback=D}y.__boundDepthTexture=A}if(K.depthTexture&&!y.__autoAllocateDepthBuffer)if(F)for(let A=0;A<6;A++)Mt(y.__webglFramebuffer[A],K,A);else{let A=K.texture.mipmaps;A&&A.length>0?Mt(y.__webglFramebuffer[0],K,0):Mt(y.__webglFramebuffer,K,0)}else if(F){y.__webglDepthbuffer=[];for(let A=0;A<6;A++)if(i.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer[A]),y.__webglDepthbuffer[A]===void 0)y.__webglDepthbuffer[A]=e.createRenderbuffer(),$t(y.__webglDepthbuffer[A],K,!1);else{let D=K.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,H=y.__webglDepthbuffer[A];e.bindRenderbuffer(e.RENDERBUFFER,H),e.framebufferRenderbuffer(e.FRAMEBUFFER,D,e.RENDERBUFFER,H)}}else{let A=K.texture.mipmaps;if(A&&A.length>0?i.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer[0]):i.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=e.createRenderbuffer(),$t(y.__webglDepthbuffer,K,!1);else{let D=K.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,H=y.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,H),e.framebufferRenderbuffer(e.FRAMEBUFFER,D,e.RENDERBUFFER,H)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function li(K,y,F){let A=n.get(K);y!==void 0&&_t(A.__webglFramebuffer,K,K.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),F!==void 0&&ee(K)}function te(K){let y=K.texture,F=n.get(K),A=n.get(y);K.addEventListener("dispose",Z);let D=K.textures,H=K.isWebGLCubeRenderTarget===!0,yt=D.length>1;if(yt||(A.__webglTexture===void 0&&(A.__webglTexture=e.createTexture()),A.__version=y.version,r.memory.textures++),H){F.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer[ot]=[];for(let pt=0;pt<y.mipmaps.length;pt++)F.__webglFramebuffer[ot][pt]=e.createFramebuffer()}else F.__webglFramebuffer[ot]=e.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer=[];for(let ot=0;ot<y.mipmaps.length;ot++)F.__webglFramebuffer[ot]=e.createFramebuffer()}else F.__webglFramebuffer=e.createFramebuffer();if(yt)for(let ot=0,pt=D.length;ot<pt;ot++){let Et=n.get(D[ot]);Et.__webglTexture===void 0&&(Et.__webglTexture=e.createTexture(),r.memory.textures++)}if(K.samples>0&&Qe(K)===!1){F.__webglMultisampledFramebuffer=e.createFramebuffer(),F.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ot=0;ot<D.length;ot++){let pt=D[ot];F.__webglColorRenderbuffer[ot]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,F.__webglColorRenderbuffer[ot]);let Et=s.convert(pt.format,pt.colorSpace),tt=s.convert(pt.type),rt=M(pt.internalFormat,Et,tt,pt.colorSpace,K.isXRRenderTarget===!0),kt=V(K);e.renderbufferStorageMultisample(e.RENDERBUFFER,kt,rt,K.width,K.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ot,e.RENDERBUFFER,F.__webglColorRenderbuffer[ot])}e.bindRenderbuffer(e.RENDERBUFFER,null),K.depthBuffer&&(F.__webglDepthRenderbuffer=e.createRenderbuffer(),$t(F.__webglDepthRenderbuffer,K,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(H){i.bindTexture(e.TEXTURE_CUBE_MAP,A.__webglTexture),Gt(e.TEXTURE_CUBE_MAP,y);for(let ot=0;ot<6;ot++)if(y.mipmaps&&y.mipmaps.length>0)for(let pt=0;pt<y.mipmaps.length;pt++)_t(F.__webglFramebuffer[ot][pt],K,y,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ot,pt);else _t(F.__webglFramebuffer[ot],K,y,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);d(y)&&f(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(yt){for(let ot=0,pt=D.length;ot<pt;ot++){let Et=D[ot],tt=n.get(Et),rt=e.TEXTURE_2D;(K.isWebGL3DRenderTarget||K.isWebGLArrayRenderTarget)&&(rt=K.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(rt,tt.__webglTexture),Gt(rt,Et),_t(F.__webglFramebuffer,K,Et,e.COLOR_ATTACHMENT0+ot,rt,0),d(Et)&&f(rt)}i.unbindTexture()}else{let ot=e.TEXTURE_2D;if((K.isWebGL3DRenderTarget||K.isWebGLArrayRenderTarget)&&(ot=K.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(ot,A.__webglTexture),Gt(ot,y),y.mipmaps&&y.mipmaps.length>0)for(let pt=0;pt<y.mipmaps.length;pt++)_t(F.__webglFramebuffer[pt],K,y,e.COLOR_ATTACHMENT0,ot,pt);else _t(F.__webglFramebuffer,K,y,e.COLOR_ATTACHMENT0,ot,0);d(y)&&f(ot),i.unbindTexture()}K.depthBuffer&&ee(K)}function ae(K){let y=K.textures;for(let F=0,A=y.length;F<A;F++){let D=y[F];if(d(D)){let H=k(K),yt=n.get(D).__webglTexture;i.bindTexture(H,yt),f(H),i.unbindTexture()}}}let _e=[],Yt=[];function qe(K){if(K.samples>0){if(Qe(K)===!1){let y=K.textures,F=K.width,A=K.height,D=e.COLOR_BUFFER_BIT,H=K.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,yt=n.get(K),ot=y.length>1;if(ot)for(let Et=0;Et<y.length;Et++)i.bindFramebuffer(e.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Et,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,yt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Et,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer);let pt=K.texture.mipmaps;pt&&pt.length>0?i.bindFramebuffer(e.DRAW_FRAMEBUFFER,yt.__webglFramebuffer[0]):i.bindFramebuffer(e.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let Et=0;Et<y.length;Et++){if(K.resolveDepthBuffer&&(K.depthBuffer&&(D|=e.DEPTH_BUFFER_BIT),K.stencilBuffer&&K.resolveStencilBuffer&&(D|=e.STENCIL_BUFFER_BIT)),ot){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,yt.__webglColorRenderbuffer[Et]);let tt=n.get(y[Et]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,tt,0)}e.blitFramebuffer(0,0,F,A,0,0,F,A,D,e.NEAREST),u===!0&&(_e.length=0,Yt.length=0,_e.push(e.COLOR_ATTACHMENT0+Et),K.depthBuffer&&K.resolveDepthBuffer===!1&&(_e.push(H),Yt.push(H),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Yt)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,_e))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ot)for(let Et=0;Et<y.length;Et++){i.bindFramebuffer(e.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Et,e.RENDERBUFFER,yt.__webglColorRenderbuffer[Et]);let tt=n.get(y[Et]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,yt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Et,e.TEXTURE_2D,tt,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(K.depthBuffer&&K.resolveDepthBuffer===!1&&u){let y=K.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[y])}}}function V(K){return Math.min(o.maxSamples,K.samples)}function Qe(K){let y=n.get(K);return K.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function se(K){let y=r.render.frame;l.get(K)!==y&&(l.set(K,y),K.update())}function pe(K,y){let F=K.colorSpace,A=K.format,D=K.type;return K.isCompressedTexture===!0||K.isVideoTexture===!0||F!==Hr&&F!==ls&&(Dt.getTransfer(F)===re?(A!==Li||D!==yn)&&Vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Kt("WebGLTextures: Unsupported texture color space:",F)),y}function Ot(K){return typeof HTMLImageElement<"u"&&K instanceof HTMLImageElement?(c.width=K.naturalWidth||K.width,c.height=K.naturalHeight||K.height):typeof VideoFrame<"u"&&K instanceof VideoFrame?(c.width=K.displayWidth,c.height=K.displayHeight):(c.width=K.width,c.height=K.height),c}this.allocateTextureUnit=T,this.resetTextureUnits=N,this.setTexture2D=z,this.setTexture2DArray=U,this.setTexture3D=Y,this.setTextureCube=Q,this.rebindTextures=li,this.setupRenderTarget=te,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Qe,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function d0(e,t){function i(n,o=ls){let s,r=Dt.getTransfer(o);if(n===yn)return e.UNSIGNED_BYTE;if(n===wm)return e.UNSIGNED_SHORT_4_4_4_4;if(n===vm)return e.UNSIGNED_SHORT_5_5_5_1;if(n===kk)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===Mk)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===_k)return e.BYTE;if(n===gk)return e.SHORT;if(n===Eu)return e.UNSIGNED_SHORT;if(n===Zm)return e.INT;if(n===so)return e.UNSIGNED_INT;if(n===ro)return e.FLOAT;if(n===Jn)return e.HALF_FLOAT;if(n===pk)return e.ALPHA;if(n===Ok)return e.RGB;if(n===Li)return e.RGBA;if(n===Mo)return e.DEPTH_COMPONENT;if(n===rr)return e.DEPTH_STENCIL;if(n===Ik)return e.RED;if(n===Rm)return e.RED_INTEGER;if(n===Br)return e.RG;if(n===Km)return e.RG_INTEGER;if(n===Em)return e.RGBA_INTEGER;if(n===pl||n===Ol||n===Il||n===yl)if(r===re)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===pl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ol)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===yl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===pl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ol)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Il)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===yl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vm||n===Gm||n===Fm||n===jm)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Vm)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Gm)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fm)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===jm)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Nm||n===Tm||n===Wm||n===Um||n===$m||n===Cm||n===Ym)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Nm||n===Tm)return r===re?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Wm)return r===re?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Um)return s.COMPRESSED_R11_EAC;if(n===$m)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Cm)return s.COMPRESSED_RG11_EAC;if(n===Ym)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Jm||n===bm||n===zm||n===Hm||n===Am||n===Xm||n===qm||n===Qm||n===Bm||n===Dm||n===Pm||n===Lm||n===tf||n===ef)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Jm)return r===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===bm)return r===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zm)return r===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Hm)return r===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Am)return r===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xm)return r===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qm)return r===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Qm)return r===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bm)return r===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Dm)return r===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pm)return r===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Lm)return r===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===tf)return r===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ef)return r===re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===nf||n===of||n===sf)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===nf)return r===re?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===of)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rf||n===af||n===uf||n===cf)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===rf)return s.COMPRESSED_RED_RGTC1_EXT;if(n===af)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===uf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===cf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vu?e.UNSIGNED_INT_24_8:e[n]!==void 0?e[n]:null}return{convert:i}}var _0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,g0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,bk=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){let n=new ml(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let i=t.cameras[0].viewport,n=new ni({vertexShader:_0,fragmentShader:g0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Fe(new er(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},zk=class extends rs{constructor(t,i){super();let n=this,o=null,s=1,r=null,a="local-floor",u=1,c=null,l=null,x=null,h=null,m=null,g=null,_=typeof XRWebGLBinding<"u",d=new bk,f={},k=i.getContextAttributes(),M=null,p=null,I=[],w=[],Z=new Wt,R=null,O=new ei;O.viewport=new Je;let S=new ei;S.viewport=new Je;let E=[O,S],N=new mm,T=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let P=I[q];return P===void 0&&(P=new vu,I[q]=P),P.getTargetRaySpace()},this.getControllerGrip=function(q){let P=I[q];return P===void 0&&(P=new vu,I[q]=P),P.getGripSpace()},this.getHand=function(q){let P=I[q];return P===void 0&&(P=new vu,I[q]=P),P.getHandSpace()};function z(q){let P=w.indexOf(q.inputSource);if(P===-1)return;let _t=I[P];_t!==void 0&&(_t.update(q.inputSource,q.frame,c||r),_t.dispatchEvent({type:q.type,data:q.inputSource}))}function U(){o.removeEventListener("select",z),o.removeEventListener("selectstart",z),o.removeEventListener("selectend",z),o.removeEventListener("squeeze",z),o.removeEventListener("squeezestart",z),o.removeEventListener("squeezeend",z),o.removeEventListener("end",U),o.removeEventListener("inputsourceschange",Y);for(let q=0;q<I.length;q++){let P=w[q];P!==null&&(w[q]=null,I[q].disconnect(P))}T=null,$=null,d.reset();for(let q in f)delete f[q];t.setRenderTarget(M),m=null,h=null,x=null,o=null,p=null,Lt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(Z.width,Z.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&Vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&Vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return x===null&&_&&(x=new XRWebGLBinding(o,i)),x},this.getFrame=function(){return g},this.getSession=function(){return o},this.setSession=async function(q){if(o=q,o!==null){if(M=t.getRenderTarget(),o.addEventListener("select",z),o.addEventListener("selectstart",z),o.addEventListener("selectend",z),o.addEventListener("squeeze",z),o.addEventListener("squeezestart",z),o.addEventListener("squeezeend",z),o.addEventListener("end",U),o.addEventListener("inputsourceschange",Y),k.xrCompatible!==!0&&await i.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(Z),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,$t=null,Mt=null;k.depth&&(Mt=k.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,_t=k.stencil?rr:Mo,$t=k.stencil?Vu:so);let ee={colorFormat:i.RGBA8,depthFormat:Mt,scaleFactor:s};x=this.getBinding(),h=x.createProjectionLayer(ee),o.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),p=new yi(h.textureWidth,h.textureHeight,{format:Li,type:yn,depthTexture:new tr(h.textureWidth,h.textureHeight,$t,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:k.stencil,colorSpace:t.outputColorSpace,samples:k.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let _t={antialias:k.antialias,alpha:!0,depth:k.depth,stencil:k.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(o,i,_t),o.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),p=new yi(m.framebufferWidth,m.framebufferHeight,{format:Li,type:yn,colorSpace:t.outputColorSpace,stencilBuffer:k.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}p.isXRRenderTarget=!0,this.setFoveation(u),c=null,r=await o.requestReferenceSpace(a),Lt.setContext(o),Lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function Y(q){for(let P=0;P<q.removed.length;P++){let _t=q.removed[P],$t=w.indexOf(_t);$t>=0&&(w[$t]=null,I[$t].disconnect(_t))}for(let P=0;P<q.added.length;P++){let _t=q.added[P],$t=w.indexOf(_t);if($t===-1){for(let ee=0;ee<I.length;ee++)if(ee>=w.length){w.push(_t),$t=ee;break}else if(w[ee]===null){w[ee]=_t,$t=ee;break}if($t===-1)break}let Mt=I[$t];Mt&&Mt.connect(_t)}}let Q=new C,ut=new C;function it(q,P,_t){Q.setFromMatrixPosition(P.matrixWorld),ut.setFromMatrixPosition(_t.matrixWorld);let $t=Q.distanceTo(ut),Mt=P.projectionMatrix.elements,ee=_t.projectionMatrix.elements,li=Mt[14]/(Mt[10]-1),te=Mt[14]/(Mt[10]+1),ae=(Mt[9]+1)/Mt[5],_e=(Mt[9]-1)/Mt[5],Yt=(Mt[8]-1)/Mt[0],qe=(ee[8]+1)/ee[0],V=li*Yt,Qe=li*qe,se=$t/(-Yt+qe),pe=se*-Yt;if(P.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(pe),q.translateZ(se),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Mt[10]===-1)q.projectionMatrix.copy(P.projectionMatrix),q.projectionMatrixInverse.copy(P.projectionMatrixInverse);else{let Ot=li+se,K=te+se,y=V-pe,F=Qe+($t-pe),A=ae*te/K*Ot,D=_e*te/K*Ot;q.projectionMatrix.makePerspective(y,F,A,D,Ot,K),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function lt(q,P){P===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(P.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(o===null)return;let P=q.near,_t=q.far;d.texture!==null&&(d.depthNear>0&&(P=d.depthNear),d.depthFar>0&&(_t=d.depthFar)),N.near=S.near=O.near=P,N.far=S.far=O.far=_t,(T!==N.near||$!==N.far)&&(o.updateRenderState({depthNear:N.near,depthFar:N.far}),T=N.near,$=N.far),N.layers.mask=q.layers.mask|6,O.layers.mask=N.layers.mask&3,S.layers.mask=N.layers.mask&5;let $t=q.parent,Mt=N.cameras;lt(N,$t);for(let ee=0;ee<Mt.length;ee++)lt(Mt[ee],$t);Mt.length===2?it(N,O,S):N.projectionMatrix.copy(O.projectionMatrix),Gt(q,N,$t)};function Gt(q,P,_t){_t===null?q.matrix.copy(P.matrixWorld):(q.matrix.copy(_t.matrixWorld),q.matrix.invert(),q.matrix.multiply(P.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(P.projectionMatrix),q.projectionMatrixInverse.copy(P.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Xh*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(h===null&&m===null))return u},this.setFoveation=function(q){u=q,h!==null&&(h.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(N)},this.getCameraTexture=function(q){return f[q]};let Nt=null;function Pt(q,P){if(l=P.getViewerPose(c||r),g=P,l!==null){let _t=l.views;m!==null&&(t.setRenderTargetFramebuffer(p,m.framebuffer),t.setRenderTarget(p));let $t=!1;_t.length!==N.cameras.length&&(N.cameras.length=0,$t=!0);for(let te=0;te<_t.length;te++){let ae=_t[te],_e=null;if(m!==null)_e=m.getViewport(ae);else{let qe=x.getViewSubImage(h,ae);_e=qe.viewport,te===0&&(t.setRenderTargetTextures(p,qe.colorTexture,qe.depthStencilTexture),t.setRenderTarget(p))}let Yt=E[te];Yt===void 0&&(Yt=new ei,Yt.layers.enable(te),Yt.viewport=new Je,E[te]=Yt),Yt.matrix.fromArray(ae.transform.matrix),Yt.matrix.decompose(Yt.position,Yt.quaternion,Yt.scale),Yt.projectionMatrix.fromArray(ae.projectionMatrix),Yt.projectionMatrixInverse.copy(Yt.projectionMatrix).invert(),Yt.viewport.set(_e.x,_e.y,_e.width,_e.height),te===0&&(N.matrix.copy(Yt.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),$t===!0&&N.cameras.push(Yt)}let Mt=o.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&_){x=n.getBinding();let te=x.getDepthInformation(_t[0]);te&&te.isValid&&te.texture&&d.init(te,o.renderState)}if(Mt&&Mt.includes("camera-access")&&_){t.state.unbindTexture(),x=n.getBinding();for(let te=0;te<_t.length;te++){let ae=_t[te].camera;if(ae){let _e=f[ae];_e||(_e=new ml,f[ae]=_e);let Yt=x.getCameraImage(ae);_e.sourceTexture=Yt}}}}for(let _t=0;_t<I.length;_t++){let $t=w[_t],Mt=I[_t];$t!==null&&Mt!==void 0&&Mt.update($t,P,c||r)}Nt&&Nt(q,P),P.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:P}),g=null}let Lt=new xw;Lt.setAnimationLoop(Pt),this.setAnimationLoop=function(q){Nt=q},this.dispose=function(){}}},Lr=new po,k0=new ii;function M0(e,t){function i(d,f){d.matrixAutoUpdate===!0&&d.updateMatrix(),f.value.copy(d.matrix)}function n(d,f){f.color.getRGB(d.fogColor.value,wk(e)),f.isFog?(d.fogNear.value=f.near,d.fogFar.value=f.far):f.isFogExp2&&(d.fogDensity.value=f.density)}function o(d,f,k,M,p){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(d,f):f.isMeshToonMaterial?(s(d,f),x(d,f)):f.isMeshPhongMaterial?(s(d,f),l(d,f)):f.isMeshStandardMaterial?(s(d,f),h(d,f),f.isMeshPhysicalMaterial&&m(d,f,p)):f.isMeshMatcapMaterial?(s(d,f),g(d,f)):f.isMeshDepthMaterial?s(d,f):f.isMeshDistanceMaterial?(s(d,f),_(d,f)):f.isMeshNormalMaterial?s(d,f):f.isLineBasicMaterial?(r(d,f),f.isLineDashedMaterial&&a(d,f)):f.isPointsMaterial?u(d,f,k,M):f.isSpriteMaterial?c(d,f):f.isShadowMaterial?(d.color.value.copy(f.color),d.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(d,f){d.opacity.value=f.opacity,f.color&&d.diffuse.value.copy(f.color),f.emissive&&d.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(d.map.value=f.map,i(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,i(f.alphaMap,d.alphaMapTransform)),f.bumpMap&&(d.bumpMap.value=f.bumpMap,i(f.bumpMap,d.bumpMapTransform),d.bumpScale.value=f.bumpScale,f.side===$i&&(d.bumpScale.value*=-1)),f.normalMap&&(d.normalMap.value=f.normalMap,i(f.normalMap,d.normalMapTransform),d.normalScale.value.copy(f.normalScale),f.side===$i&&d.normalScale.value.negate()),f.displacementMap&&(d.displacementMap.value=f.displacementMap,i(f.displacementMap,d.displacementMapTransform),d.displacementScale.value=f.displacementScale,d.displacementBias.value=f.displacementBias),f.emissiveMap&&(d.emissiveMap.value=f.emissiveMap,i(f.emissiveMap,d.emissiveMapTransform)),f.specularMap&&(d.specularMap.value=f.specularMap,i(f.specularMap,d.specularMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest);let k=t.get(f),M=k.envMap,p=k.envMapRotation;M&&(d.envMap.value=M,Lr.copy(p),Lr.x*=-1,Lr.y*=-1,Lr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Lr.y*=-1,Lr.z*=-1),d.envMapRotation.value.setFromMatrix4(k0.makeRotationFromEuler(Lr)),d.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=f.reflectivity,d.ior.value=f.ior,d.refractionRatio.value=f.refractionRatio),f.lightMap&&(d.lightMap.value=f.lightMap,d.lightMapIntensity.value=f.lightMapIntensity,i(f.lightMap,d.lightMapTransform)),f.aoMap&&(d.aoMap.value=f.aoMap,d.aoMapIntensity.value=f.aoMapIntensity,i(f.aoMap,d.aoMapTransform))}function r(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,f.map&&(d.map.value=f.map,i(f.map,d.mapTransform))}function a(d,f){d.dashSize.value=f.dashSize,d.totalSize.value=f.dashSize+f.gapSize,d.scale.value=f.scale}function u(d,f,k,M){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.size.value=f.size*k,d.scale.value=M*.5,f.map&&(d.map.value=f.map,i(f.map,d.uvTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,i(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function c(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.rotation.value=f.rotation,f.map&&(d.map.value=f.map,i(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,i(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function l(d,f){d.specular.value.copy(f.specular),d.shininess.value=Math.max(f.shininess,1e-4)}function x(d,f){f.gradientMap&&(d.gradientMap.value=f.gradientMap)}function h(d,f){d.metalness.value=f.metalness,f.metalnessMap&&(d.metalnessMap.value=f.metalnessMap,i(f.metalnessMap,d.metalnessMapTransform)),d.roughness.value=f.roughness,f.roughnessMap&&(d.roughnessMap.value=f.roughnessMap,i(f.roughnessMap,d.roughnessMapTransform)),f.envMap&&(d.envMapIntensity.value=f.envMapIntensity)}function m(d,f,k){d.ior.value=f.ior,f.sheen>0&&(d.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),d.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(d.sheenColorMap.value=f.sheenColorMap,i(f.sheenColorMap,d.sheenColorMapTransform)),f.sheenRoughnessMap&&(d.sheenRoughnessMap.value=f.sheenRoughnessMap,i(f.sheenRoughnessMap,d.sheenRoughnessMapTransform))),f.clearcoat>0&&(d.clearcoat.value=f.clearcoat,d.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(d.clearcoatMap.value=f.clearcoatMap,i(f.clearcoatMap,d.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,i(f.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(d.clearcoatNormalMap.value=f.clearcoatNormalMap,i(f.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===$i&&d.clearcoatNormalScale.value.negate())),f.dispersion>0&&(d.dispersion.value=f.dispersion),f.iridescence>0&&(d.iridescence.value=f.iridescence,d.iridescenceIOR.value=f.iridescenceIOR,d.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(d.iridescenceMap.value=f.iridescenceMap,i(f.iridescenceMap,d.iridescenceMapTransform)),f.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=f.iridescenceThicknessMap,i(f.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),f.transmission>0&&(d.transmission.value=f.transmission,d.transmissionSamplerMap.value=k.texture,d.transmissionSamplerSize.value.set(k.width,k.height),f.transmissionMap&&(d.transmissionMap.value=f.transmissionMap,i(f.transmissionMap,d.transmissionMapTransform)),d.thickness.value=f.thickness,f.thicknessMap&&(d.thicknessMap.value=f.thicknessMap,i(f.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=f.attenuationDistance,d.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(d.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(d.anisotropyMap.value=f.anisotropyMap,i(f.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=f.specularIntensity,d.specularColor.value.copy(f.specularColor),f.specularColorMap&&(d.specularColorMap.value=f.specularColorMap,i(f.specularColorMap,d.specularColorMapTransform)),f.specularIntensityMap&&(d.specularIntensityMap.value=f.specularIntensityMap,i(f.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,f){f.matcap&&(d.matcap.value=f.matcap)}function _(d,f){let k=t.get(f).light;d.referencePosition.value.setFromMatrixPosition(k.matrixWorld),d.nearDistance.value=k.shadow.camera.near,d.farDistance.value=k.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:o}}function p0(e,t,i,n){let o={},s={},r=[],a=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function u(k,M){let p=M.program;n.uniformBlockBinding(k,p)}function c(k,M){let p=o[k.id];p===void 0&&(g(k),p=l(k),o[k.id]=p,k.addEventListener("dispose",d));let I=M.program;n.updateUBOMapping(k,I);let w=t.render.frame;s[k.id]!==w&&(h(k),s[k.id]=w)}function l(k){let M=x();k.__bindingPointIndex=M;let p=e.createBuffer(),I=k.__size,w=k.usage;return e.bindBuffer(e.UNIFORM_BUFFER,p),e.bufferData(e.UNIFORM_BUFFER,I,w),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,M,p),p}function x(){for(let k=0;k<a;k++)if(r.indexOf(k)===-1)return r.push(k),k;return Kt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(k){let M=o[k.id],p=k.uniforms,I=k.__cache;e.bindBuffer(e.UNIFORM_BUFFER,M);for(let w=0,Z=p.length;w<Z;w++){let R=Array.isArray(p[w])?p[w]:[p[w]];for(let O=0,S=R.length;O<S;O++){let E=R[O];if(m(E,w,O,I)===!0){let N=E.__offset,T=Array.isArray(E.value)?E.value:[E.value],$=0;for(let z=0;z<T.length;z++){let U=T[z],Y=_(U);typeof U=="number"||typeof U=="boolean"?(E.__data[0]=U,e.bufferSubData(e.UNIFORM_BUFFER,N+$,E.__data)):U.isMatrix3?(E.__data[0]=U.elements[0],E.__data[1]=U.elements[1],E.__data[2]=U.elements[2],E.__data[3]=0,E.__data[4]=U.elements[3],E.__data[5]=U.elements[4],E.__data[6]=U.elements[5],E.__data[7]=0,E.__data[8]=U.elements[6],E.__data[9]=U.elements[7],E.__data[10]=U.elements[8],E.__data[11]=0):(U.toArray(E.__data,$),$+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,N,E.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function m(k,M,p,I){let w=k.value,Z=M+"_"+p;if(I[Z]===void 0)return typeof w=="number"||typeof w=="boolean"?I[Z]=w:I[Z]=w.clone(),!0;{let R=I[Z];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return I[Z]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function g(k){let M=k.uniforms,p=0,I=16;for(let Z=0,R=M.length;Z<R;Z++){let O=Array.isArray(M[Z])?M[Z]:[M[Z]];for(let S=0,E=O.length;S<E;S++){let N=O[S],T=Array.isArray(N.value)?N.value:[N.value];for(let $=0,z=T.length;$<z;$++){let U=T[$],Y=_(U),Q=p%I,ut=Q%Y.boundary,it=Q+ut;p+=ut,it!==0&&I-it<Y.storage&&(p+=I-it),N.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=p,p+=Y.storage}}}let w=p%I;return w>0&&(p+=I-w),k.__size=p,k.__cache={},this}function _(k){let M={boundary:0,storage:0};return typeof k=="number"||typeof k=="boolean"?(M.boundary=4,M.storage=4):k.isVector2?(M.boundary=8,M.storage=8):k.isVector3||k.isColor?(M.boundary=16,M.storage=12):k.isVector4?(M.boundary=16,M.storage=16):k.isMatrix3?(M.boundary=48,M.storage=48):k.isMatrix4?(M.boundary=64,M.storage=64):k.isTexture?Vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Vt("WebGLRenderer: Unsupported uniform value type.",k),M}function d(k){let M=k.target;M.removeEventListener("dispose",d);let p=r.indexOf(M.__bindingPointIndex);r.splice(p,1),e.deleteBuffer(o[M.id]),delete o[M.id],delete s[M.id]}function f(){for(let k in o)e.deleteBuffer(o[k]);r=[],o={},s={}}return{bind:u,update:c,dispose:f}}var O0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),yo=null;function I0(){return yo===null&&(yo=new Lh(O0,16,16,Br,Jn),yo.name="DFG_LUT",yo.minFilter=Ye,yo.magFilter=Ye,yo.wrapS=ko,yo.wrapT=ko,yo.generateMipmaps=!1,yo.needsUpdate=!0),yo}var Zo=class{constructor(t={}){let{canvas:i=UZ(),context:n=null,depth:o=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:c=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:h=!1,outputBufferType:m=yn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=r;let _=m,d=new Set([Em,Km,Rm]),f=new Set([yn,so,Eu,Vu,wm,vm]),k=new Uint32Array(4),M=new Int32Array(4),p=null,I=null,w=[],Z=[],R=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oo,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let O=this,S=!1;this._outputColorSpace=di;let E=0,N=0,T=null,$=-1,z=null,U=new Je,Y=new Je,Q=null,ut=new Qt(0),it=0,lt=i.width,Gt=i.height,Nt=1,Pt=null,Lt=null,q=new Je(0,0,lt,Gt),P=new Je(0,0,lt,Gt),_t=!1,$t=new xl,Mt=!1,ee=!1,li=new ii,te=new C,ae=new Je,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Yt=!1;function qe(){return T===null?Nt:1}let V=n;function Qe(v,j){return i.getContext(v,j)}try{let v={alpha:!0,depth:o,stencil:s,antialias:a,premultipliedAlpha:u,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${fm}`),i.addEventListener("webglcontextlost",Ft,!1),i.addEventListener("webglcontextrestored",Oe,!1),i.addEventListener("webglcontextcreationerror",ue,!1),V===null){let j="webgl2";if(V=Qe(j,v),V===null)throw Qe(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw Kt("WebGLRenderer: "+v.message),v}let se,pe,Ot,K,y,F,A,D,H,yt,ot,pt,Et,tt,rt,kt,It,st,Jt,G,ht,et,mt,L;function B(){se=new KG(V),se.init(),et=new d0(V,se),pe=new pG(V,se,t,et),Ot=new m0(V,se),pe.reversedDepthBuffer&&h&&Ot.buffers.depth.setReversed(!0),K=new GG(V),y=new PF,F=new f0(V,se,Ot,y,pe,et,K),A=new IG(O),D=new RG(O),H=new T4(V),mt=new kG(V,H),yt=new EG(V,H,K,mt),ot=new jG(V,yt,H,K),Jt=new FG(V,pe,F),kt=new OG(y),pt=new DF(O,A,D,se,pe,mt,kt),Et=new M0(O,y),tt=new t0,rt=new r0(se),st=new gG(O,A,D,Ot,ot,g,u),It=new x0(O,ot,pe),L=new p0(V,K,pe,Ot),G=new MG(V,se,K),ht=new VG(V,se,K),K.programs=pt.programs,O.capabilities=pe,O.extensions=se,O.properties=y,O.renderLists=tt,O.shadowMap=It,O.state=Ot,O.info=K}B(),_!==yn&&(R=new TG(_,i.width,i.height,o,s));let nt=new zk(O,V);this.xr=nt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let v=se.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=se.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return Nt},this.setPixelRatio=function(v){v!==void 0&&(Nt=v,this.setSize(lt,Gt,!1))},this.getSize=function(v){return v.set(lt,Gt)},this.setSize=function(v,j,b=!0){if(nt.isPresenting){Vt("WebGLRenderer: Can't change size while VR device is presenting.");return}lt=v,Gt=j,i.width=Math.floor(v*Nt),i.height=Math.floor(j*Nt),b===!0&&(i.style.width=v+"px",i.style.height=j+"px"),R!==null&&R.setSize(i.width,i.height),this.setViewport(0,0,v,j)},this.getDrawingBufferSize=function(v){return v.set(lt*Nt,Gt*Nt).floor()},this.setDrawingBufferSize=function(v,j,b){lt=v,Gt=j,Nt=b,i.width=Math.floor(v*b),i.height=Math.floor(j*b),this.setViewport(0,0,v,j)},this.setEffects=function(v){if(_===yn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let j=0;j<v.length;j++)if(v[j].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(U)},this.getViewport=function(v){return v.copy(q)},this.setViewport=function(v,j,b,J){v.isVector4?q.set(v.x,v.y,v.z,v.w):q.set(v,j,b,J),Ot.viewport(U.copy(q).multiplyScalar(Nt).round())},this.getScissor=function(v){return v.copy(P)},this.setScissor=function(v,j,b,J){v.isVector4?P.set(v.x,v.y,v.z,v.w):P.set(v,j,b,J),Ot.scissor(Y.copy(P).multiplyScalar(Nt).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(v){Ot.setScissorTest(_t=v)},this.setOpaqueSort=function(v){Pt=v},this.setTransparentSort=function(v){Lt=v},this.getClearColor=function(v){return v.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor(...arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha(...arguments)},this.clear=function(v=!0,j=!0,b=!0){let J=0;if(v){let W=!1;if(T!==null){let at=T.texture.format;W=d.has(at)}if(W){let at=T.texture.type,ft=f.has(at),xt=st.getClearColor(),gt=st.getClearAlpha(),St=xt.r,vt=xt.g,Zt=xt.b;ft?(k[0]=St,k[1]=vt,k[2]=Zt,k[3]=gt,V.clearBufferuiv(V.COLOR,0,k)):(M[0]=St,M[1]=vt,M[2]=Zt,M[3]=gt,V.clearBufferiv(V.COLOR,0,M))}else J|=V.COLOR_BUFFER_BIT}j&&(J|=V.DEPTH_BUFFER_BIT),b&&(J|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ft,!1),i.removeEventListener("webglcontextrestored",Oe,!1),i.removeEventListener("webglcontextcreationerror",ue,!1),st.dispose(),tt.dispose(),rt.dispose(),y.dispose(),A.dispose(),D.dispose(),ot.dispose(),mt.dispose(),L.dispose(),pt.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",CM),nt.removeEventListener("sessionend",YM),_r.stop()};function Ft(v){v.preventDefault(),Zk("WebGLRenderer: Context Lost."),S=!0}function Oe(){Zk("WebGLRenderer: Context Restored."),S=!1;let v=K.autoReset,j=It.enabled,b=It.autoUpdate,J=It.needsUpdate,W=It.type;B(),K.autoReset=v,It.enabled=j,It.autoUpdate=b,It.needsUpdate=J,It.type=W}function ue(v){Kt("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function ao(v){let j=v.target;j.removeEventListener("dispose",ao),Go(j)}function Go(v){zv(v),y.remove(v)}function zv(v){let j=y.get(v).programs;j!==void 0&&(j.forEach(function(b){pt.releaseProgram(b)}),v.isShaderMaterial&&pt.releaseShaderCache(v))}this.renderBufferDirect=function(v,j,b,J,W,at){j===null&&(j=_e);let ft=W.isMesh&&W.matrixWorld.determinant()<0,xt=Av(v,j,b,J,W);Ot.setMaterial(J,ft);let gt=b.index,St=1;if(J.wireframe===!0){if(gt=yt.getWireframeAttribute(b),gt===void 0)return;St=2}let vt=b.drawRange,Zt=b.attributes.position,bt=vt.start*St,he=(vt.start+vt.count)*St;at!==null&&(bt=Math.max(bt,at.start*St),he=Math.min(he,(at.start+at.count)*St)),gt!==null?(bt=Math.max(bt,0),he=Math.min(he,gt.count)):Zt!=null&&(bt=Math.max(bt,0),he=Math.min(he,Zt.count));let We=he-bt;if(We<0||We===1/0)return;mt.setup(W,J,xt,b,gt);let Ue,ge=G;if(gt!==null&&(Ue=H.get(gt),ge=ht,ge.setIndex(Ue)),W.isMesh)J.wireframe===!0?(Ot.setLineWidth(J.wireframeLinewidth*qe()),ge.setMode(V.LINES)):ge.setMode(V.TRIANGLES);else if(W.isLine){let wt=J.linewidth;wt===void 0&&(wt=1),Ot.setLineWidth(wt*qe()),W.isLineSegments?ge.setMode(V.LINES):W.isLineLoop?ge.setMode(V.LINE_LOOP):ge.setMode(V.LINE_STRIP)}else W.isPoints?ge.setMode(V.POINTS):W.isSprite&&ge.setMode(V.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Su("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ge.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))ge.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let wt=W._multiDrawStarts,ce=W._multiDrawCounts,ie=W._multiDrawCount,rn=gt?H.get(gt).bytesPerElement:1,da=y.get(J).currentProgram.getUniforms();for(let an=0;an<ie;an++)da.setValue(V,"_gl_DrawID",an),ge.render(wt[an]/rn,ce[an])}else if(W.isInstancedMesh)ge.renderInstances(bt,We,W.count);else if(b.isInstancedBufferGeometry){let wt=b._maxInstanceCount!==void 0?b._maxInstanceCount:1/0,ce=Math.min(b.instanceCount,wt);ge.renderInstances(bt,We,ce)}else ge.render(bt,We)};function $M(v,j,b){v.transparent===!0&&v.side===Oo&&v.forceSinglePass===!1?(v.side=$i,v.needsUpdate=!0,Hl(v,j,b),v.side=ss,v.needsUpdate=!0,Hl(v,j,b),v.side=Oo):Hl(v,j,b)}this.compile=function(v,j,b=null){b===null&&(b=v),I=rt.get(b),I.init(j),Z.push(I),b.traverseVisible(function(W){W.isLight&&W.layers.test(j.layers)&&(I.pushLight(W),W.castShadow&&I.pushShadow(W))}),v!==b&&v.traverseVisible(function(W){W.isLight&&W.layers.test(j.layers)&&(I.pushLight(W),W.castShadow&&I.pushShadow(W))}),I.setupLights();let J=new Set;return v.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let at=W.material;if(at)if(Array.isArray(at))for(let ft=0;ft<at.length;ft++){let xt=at[ft];$M(xt,b,W),J.add(xt)}else $M(at,b,W),J.add(at)}),I=Z.pop(),J},this.compileAsync=function(v,j,b=null){let J=this.compile(v,j,b);return new Promise(W=>{function at(){if(J.forEach(function(ft){y.get(ft).currentProgram.isReady()&&J.delete(ft)}),J.size===0){W(v);return}setTimeout(at,10)}se.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let $f=null;function Hv(v){$f&&$f(v)}function CM(){_r.stop()}function YM(){_r.start()}let _r=new xw;_r.setAnimationLoop(Hv),typeof self<"u"&&_r.setContext(self),this.setAnimationLoop=function(v){$f=v,nt.setAnimationLoop(v),v===null?_r.stop():_r.start()},nt.addEventListener("sessionstart",CM),nt.addEventListener("sessionend",YM),this.render=function(v,j){if(j!==void 0&&j.isCamera!==!0){Kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;let b=nt.enabled===!0&&nt.isPresenting===!0,J=R!==null&&(T===null||b)&&R.begin(O,T);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(j),j=nt.getCamera()),v.isScene===!0&&v.onBeforeRender(O,v,j,T),I=rt.get(v,Z.length),I.init(j),Z.push(I),li.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),$t.setFromProjectionMatrix(li,to,j.reversedDepth),ee=this.localClippingEnabled,Mt=kt.init(this.clippingPlanes,ee),p=tt.get(v,w.length),p.init(),w.push(p),nt.enabled===!0&&nt.isPresenting===!0){let ft=O.xr.getDepthSensingMesh();ft!==null&&Cf(ft,j,-1/0,O.sortObjects)}Cf(v,j,0,O.sortObjects),p.finish(),O.sortObjects===!0&&p.sort(Pt,Lt),Yt=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,Yt&&st.addToRenderList(p,v),this.info.render.frame++,Mt===!0&&kt.beginShadows();let W=I.state.shadowsArray;if(It.render(W,v,j),Mt===!0&&kt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(J&&R.hasRenderPass())===!1){let ft=p.opaque,xt=p.transmissive;if(I.setupLights(),j.isArrayCamera){let gt=j.cameras;if(xt.length>0)for(let St=0,vt=gt.length;St<vt;St++){let Zt=gt[St];bM(ft,xt,v,Zt)}Yt&&st.render(v);for(let St=0,vt=gt.length;St<vt;St++){let Zt=gt[St];JM(p,v,Zt,Zt.viewport)}}else xt.length>0&&bM(ft,xt,v,j),Yt&&st.render(v),JM(p,v,j)}T!==null&&N===0&&(F.updateMultisampleRenderTarget(T),F.updateRenderTargetMipmap(T)),J&&R.end(O),v.isScene===!0&&v.onAfterRender(O,v,j),mt.resetDefaultState(),$=-1,z=null,Z.pop(),Z.length>0?(I=Z[Z.length-1],Mt===!0&&kt.setGlobalState(O.clippingPlanes,I.state.camera)):I=null,w.pop(),w.length>0?p=w[w.length-1]:p=null};function Cf(v,j,b,J){if(v.visible===!1)return;if(v.layers.test(j.layers)){if(v.isGroup)b=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(j);else if(v.isLight)I.pushLight(v),v.castShadow&&I.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||$t.intersectsSprite(v)){J&&ae.setFromMatrixPosition(v.matrixWorld).applyMatrix4(li);let ft=ot.update(v),xt=v.material;xt.visible&&p.push(v,ft,xt,b,ae.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||$t.intersectsObject(v))){let ft=ot.update(v),xt=v.material;if(J&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),ae.copy(v.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),ae.copy(ft.boundingSphere.center)),ae.applyMatrix4(v.matrixWorld).applyMatrix4(li)),Array.isArray(xt)){let gt=ft.groups;for(let St=0,vt=gt.length;St<vt;St++){let Zt=gt[St],bt=xt[Zt.materialIndex];bt&&bt.visible&&p.push(v,ft,bt,b,ae.z,Zt)}}else xt.visible&&p.push(v,ft,xt,b,ae.z,null)}}let at=v.children;for(let ft=0,xt=at.length;ft<xt;ft++)Cf(at[ft],j,b,J)}function JM(v,j,b,J){let{opaque:W,transmissive:at,transparent:ft}=v;I.setupLightsView(b),Mt===!0&&kt.setGlobalState(O.clippingPlanes,b),J&&Ot.viewport(U.copy(J)),W.length>0&&zl(W,j,b),at.length>0&&zl(at,j,b),ft.length>0&&zl(ft,j,b),Ot.buffers.depth.setTest(!0),Ot.buffers.depth.setMask(!0),Ot.buffers.color.setMask(!0),Ot.setPolygonOffset(!1)}function bM(v,j,b,J){if((b.isScene===!0?b.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[J.id]===void 0){let bt=se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[J.id]=new yi(1,1,{generateMipmaps:!0,type:bt?Jn:yn,minFilter:sr,samples:pe.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Dt.workingColorSpace})}let at=I.state.transmissionRenderTarget[J.id],ft=J.viewport||U;at.setSize(ft.z*O.transmissionResolutionScale,ft.w*O.transmissionResolutionScale);let xt=O.getRenderTarget(),gt=O.getActiveCubeFace(),St=O.getActiveMipmapLevel();O.setRenderTarget(at),O.getClearColor(ut),it=O.getClearAlpha(),it<1&&O.setClearColor(16777215,.5),O.clear(),Yt&&st.render(b);let vt=O.toneMapping;O.toneMapping=oo;let Zt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),I.setupLightsView(J),Mt===!0&&kt.setGlobalState(O.clippingPlanes,J),zl(v,b,J),F.updateMultisampleRenderTarget(at),F.updateRenderTargetMipmap(at),se.has("WEBGL_multisampled_render_to_texture")===!1){let bt=!1;for(let he=0,We=j.length;he<We;he++){let Ue=j[he],{object:ge,geometry:wt,material:ce,group:ie}=Ue;if(ce.side===Oo&&ge.layers.test(J.layers)){let rn=ce.side;ce.side=$i,ce.needsUpdate=!0,zM(ge,b,J,wt,ce,ie),ce.side=rn,ce.needsUpdate=!0,bt=!0}}bt===!0&&(F.updateMultisampleRenderTarget(at),F.updateRenderTargetMipmap(at))}O.setRenderTarget(xt,gt,St),O.setClearColor(ut,it),Zt!==void 0&&(J.viewport=Zt),O.toneMapping=vt}function zl(v,j,b){let J=j.isScene===!0?j.overrideMaterial:null;for(let W=0,at=v.length;W<at;W++){let ft=v[W],{object:xt,geometry:gt,group:St}=ft,vt=ft.material;vt.allowOverride===!0&&J!==null&&(vt=J),xt.layers.test(b.layers)&&zM(xt,j,b,gt,vt,St)}}function zM(v,j,b,J,W,at){v.onBeforeRender(O,j,b,J,W,at),v.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),W.onBeforeRender(O,j,b,J,v,at),W.transparent===!0&&W.side===Oo&&W.forceSinglePass===!1?(W.side=$i,W.needsUpdate=!0,O.renderBufferDirect(b,j,J,W,v,at),W.side=ss,W.needsUpdate=!0,O.renderBufferDirect(b,j,J,W,v,at),W.side=Oo):O.renderBufferDirect(b,j,J,W,v,at),v.onAfterRender(O,j,b,J,W,at)}function Hl(v,j,b){j.isScene!==!0&&(j=_e);let J=y.get(v),W=I.state.lights,at=I.state.shadowsArray,ft=W.state.version,xt=pt.getParameters(v,W.state,at,j,b),gt=pt.getProgramCacheKey(xt),St=J.programs;J.environment=v.isMeshStandardMaterial?j.environment:null,J.fog=j.fog,J.envMap=(v.isMeshStandardMaterial?D:A).get(v.envMap||J.environment),J.envMapRotation=J.environment!==null&&v.envMap===null?j.environmentRotation:v.envMapRotation,St===void 0&&(v.addEventListener("dispose",ao),St=new Map,J.programs=St);let vt=St.get(gt);if(vt!==void 0){if(J.currentProgram===vt&&J.lightsStateVersion===ft)return AM(v,xt),vt}else xt.uniforms=pt.getUniforms(v),v.onBeforeCompile(xt,O),vt=pt.acquireProgram(xt,gt),St.set(gt,vt),J.uniforms=xt.uniforms;let Zt=J.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Zt.clippingPlanes=kt.uniform),AM(v,xt),J.needsLights=qv(v),J.lightsStateVersion=ft,J.needsLights&&(Zt.ambientLightColor.value=W.state.ambient,Zt.lightProbe.value=W.state.probe,Zt.directionalLights.value=W.state.directional,Zt.directionalLightShadows.value=W.state.directionalShadow,Zt.spotLights.value=W.state.spot,Zt.spotLightShadows.value=W.state.spotShadow,Zt.rectAreaLights.value=W.state.rectArea,Zt.ltc_1.value=W.state.rectAreaLTC1,Zt.ltc_2.value=W.state.rectAreaLTC2,Zt.pointLights.value=W.state.point,Zt.pointLightShadows.value=W.state.pointShadow,Zt.hemisphereLights.value=W.state.hemi,Zt.directionalShadowMap.value=W.state.directionalShadowMap,Zt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Zt.spotShadowMap.value=W.state.spotShadowMap,Zt.spotLightMatrix.value=W.state.spotLightMatrix,Zt.spotLightMap.value=W.state.spotLightMap,Zt.pointShadowMap.value=W.state.pointShadowMap,Zt.pointShadowMatrix.value=W.state.pointShadowMatrix),J.currentProgram=vt,J.uniformsList=null,vt}function HM(v){if(v.uniformsList===null){let j=v.currentProgram.getUniforms();v.uniformsList=Fu.seqWithValue(j.seq,v.uniforms)}return v.uniformsList}function AM(v,j){let b=y.get(v);b.outputColorSpace=j.outputColorSpace,b.batching=j.batching,b.batchingColor=j.batchingColor,b.instancing=j.instancing,b.instancingColor=j.instancingColor,b.instancingMorph=j.instancingMorph,b.skinning=j.skinning,b.morphTargets=j.morphTargets,b.morphNormals=j.morphNormals,b.morphColors=j.morphColors,b.morphTargetsCount=j.morphTargetsCount,b.numClippingPlanes=j.numClippingPlanes,b.numIntersection=j.numClipIntersection,b.vertexAlphas=j.vertexAlphas,b.vertexTangents=j.vertexTangents,b.toneMapping=j.toneMapping}function Av(v,j,b,J,W){j.isScene!==!0&&(j=_e),F.resetTextureUnits();let at=j.fog,ft=J.isMeshStandardMaterial?j.environment:null,xt=T===null?O.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Hr,gt=(J.isMeshStandardMaterial?D:A).get(J.envMap||ft),St=J.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,vt=!!b.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Zt=!!b.morphAttributes.position,bt=!!b.morphAttributes.normal,he=!!b.morphAttributes.color,We=oo;J.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(We=O.toneMapping);let Ue=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,ge=Ue!==void 0?Ue.length:0,wt=y.get(J),ce=I.state.lights;if(Mt===!0&&(ee===!0||v!==z)){let ji=v===z&&J.id===$;kt.setState(J,v,ji)}let ie=!1;J.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==ce.state.version||wt.outputColorSpace!==xt||W.isBatchedMesh&&wt.batching===!1||!W.isBatchedMesh&&wt.batching===!0||W.isBatchedMesh&&wt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&wt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&wt.instancing===!1||!W.isInstancedMesh&&wt.instancing===!0||W.isSkinnedMesh&&wt.skinning===!1||!W.isSkinnedMesh&&wt.skinning===!0||W.isInstancedMesh&&wt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&wt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&wt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&wt.instancingMorph===!1&&W.morphTexture!==null||wt.envMap!==gt||J.fog===!0&&wt.fog!==at||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==kt.numPlanes||wt.numIntersection!==kt.numIntersection)||wt.vertexAlphas!==St||wt.vertexTangents!==vt||wt.morphTargets!==Zt||wt.morphNormals!==bt||wt.morphColors!==he||wt.toneMapping!==We||wt.morphTargetsCount!==ge)&&(ie=!0):(ie=!0,wt.__version=J.version);let rn=wt.currentProgram;ie===!0&&(rn=Hl(J,j,W));let da=!1,an=!1,qu=!1,Ie=rn.getUniforms(),bi=wt.uniforms;if(Ot.useProgram(rn.program)&&(da=!0,an=!0,qu=!0),J.id!==$&&($=J.id,an=!0),da||z!==v){Ot.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),Ie.setValue(V,"projectionMatrix",v.projectionMatrix),Ie.setValue(V,"viewMatrix",v.matrixWorldInverse);let zi=Ie.map.cameraPosition;zi!==void 0&&zi.setValue(V,te.setFromMatrixPosition(v.matrixWorld)),pe.logarithmicDepthBuffer&&Ie.setValue(V,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ie.setValue(V,"isOrthographic",v.isOrthographicCamera===!0),z!==v&&(z=v,an=!0,qu=!0)}if(wt.needsLights&&(ce.state.directionalShadowMap.length>0&&Ie.setValue(V,"directionalShadowMap",ce.state.directionalShadowMap,F),ce.state.spotShadowMap.length>0&&Ie.setValue(V,"spotShadowMap",ce.state.spotShadowMap,F),ce.state.pointShadowMap.length>0&&Ie.setValue(V,"pointShadowMap",ce.state.pointShadowMap,F)),W.isSkinnedMesh){Ie.setOptional(V,W,"bindMatrix"),Ie.setOptional(V,W,"bindMatrixInverse");let ji=W.skeleton;ji&&(ji.boneTexture===null&&ji.computeBoneTexture(),Ie.setValue(V,"boneTexture",ji.boneTexture,F))}W.isBatchedMesh&&(Ie.setOptional(V,W,"batchingTexture"),Ie.setValue(V,"batchingTexture",W._matricesTexture,F),Ie.setOptional(V,W,"batchingIdTexture"),Ie.setValue(V,"batchingIdTexture",W._indirectTexture,F),Ie.setOptional(V,W,"batchingColorTexture"),W._colorsTexture!==null&&Ie.setValue(V,"batchingColorTexture",W._colorsTexture,F));let vn=b.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&Jt.update(W,b,rn),(an||wt.receiveShadow!==W.receiveShadow)&&(wt.receiveShadow=W.receiveShadow,Ie.setValue(V,"receiveShadow",W.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(bi.envMap.value=gt,bi.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&j.environment!==null&&(bi.envMapIntensity.value=j.environmentIntensity),bi.dfgLUT!==void 0&&(bi.dfgLUT.value=I0()),an&&(Ie.setValue(V,"toneMappingExposure",O.toneMappingExposure),wt.needsLights&&Xv(bi,qu),at&&J.fog===!0&&Et.refreshFogUniforms(bi,at),Et.refreshMaterialUniforms(bi,J,Nt,Gt,I.state.transmissionRenderTarget[v.id]),Fu.upload(V,HM(wt),bi,F)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Fu.upload(V,HM(wt),bi,F),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ie.setValue(V,"center",W.center),Ie.setValue(V,"modelViewMatrix",W.modelViewMatrix),Ie.setValue(V,"normalMatrix",W.normalMatrix),Ie.setValue(V,"modelMatrix",W.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let ji=J.uniformsGroups;for(let zi=0,Yf=ji.length;zi<Yf;zi++){let gr=ji[zi];L.update(gr,rn),L.bind(gr,rn)}}return rn}function Xv(v,j){v.ambientLightColor.needsUpdate=j,v.lightProbe.needsUpdate=j,v.directionalLights.needsUpdate=j,v.directionalLightShadows.needsUpdate=j,v.pointLights.needsUpdate=j,v.pointLightShadows.needsUpdate=j,v.spotLights.needsUpdate=j,v.spotLightShadows.needsUpdate=j,v.rectAreaLights.needsUpdate=j,v.hemisphereLights.needsUpdate=j}function qv(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(v,j,b){let J=y.get(v);J.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),y.get(v.texture).__webglTexture=j,y.get(v.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:b,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,j){let b=y.get(v);b.__webglFramebuffer=j,b.__useDefaultFramebuffer=j===void 0};let Qv=V.createFramebuffer();this.setRenderTarget=function(v,j=0,b=0){T=v,E=j,N=b;let J=null,W=!1,at=!1;if(v){let xt=y.get(v);if(xt.__useDefaultFramebuffer!==void 0){Ot.bindFramebuffer(V.FRAMEBUFFER,xt.__webglFramebuffer),U.copy(v.viewport),Y.copy(v.scissor),Q=v.scissorTest,Ot.viewport(U),Ot.scissor(Y),Ot.setScissorTest(Q),$=-1;return}else if(xt.__webglFramebuffer===void 0)F.setupRenderTarget(v);else if(xt.__hasExternalTextures)F.rebindTextures(v,y.get(v.texture).__webglTexture,y.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let vt=v.depthTexture;if(xt.__boundDepthTexture!==vt){if(vt!==null&&y.has(vt)&&(v.width!==vt.image.width||v.height!==vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(v)}}let gt=v.texture;(gt.isData3DTexture||gt.isDataArrayTexture||gt.isCompressedArrayTexture)&&(at=!0);let St=y.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(St[j])?J=St[j][b]:J=St[j],W=!0):v.samples>0&&F.useMultisampledRTT(v)===!1?J=y.get(v).__webglMultisampledFramebuffer:Array.isArray(St)?J=St[b]:J=St,U.copy(v.viewport),Y.copy(v.scissor),Q=v.scissorTest}else U.copy(q).multiplyScalar(Nt).floor(),Y.copy(P).multiplyScalar(Nt).floor(),Q=_t;if(b!==0&&(J=Qv),Ot.bindFramebuffer(V.FRAMEBUFFER,J)&&Ot.drawBuffers(v,J),Ot.viewport(U),Ot.scissor(Y),Ot.setScissorTest(Q),W){let xt=y.get(v.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+j,xt.__webglTexture,b)}else if(at){let xt=j;for(let gt=0;gt<v.textures.length;gt++){let St=y.get(v.textures[gt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+gt,St.__webglTexture,b,xt)}}else if(v!==null&&b!==0){let xt=y.get(v.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,xt.__webglTexture,b)}$=-1},this.readRenderTargetPixels=function(v,j,b,J,W,at,ft,xt=0){if(!(v&&v.isWebGLRenderTarget)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=y.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ft!==void 0&&(gt=gt[ft]),gt){Ot.bindFramebuffer(V.FRAMEBUFFER,gt);try{let St=v.textures[xt],vt=St.format,Zt=St.type;if(!pe.textureFormatReadable(vt)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pe.textureTypeReadable(Zt)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=v.width-J&&b>=0&&b<=v.height-W&&(v.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+xt),V.readPixels(j,b,J,W,et.convert(vt),et.convert(Zt),at))}finally{let St=T!==null?y.get(T).__webglFramebuffer:null;Ot.bindFramebuffer(V.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(v,j,b,J,W,at,ft,xt=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=y.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ft!==void 0&&(gt=gt[ft]),gt)if(j>=0&&j<=v.width-J&&b>=0&&b<=v.height-W){Ot.bindFramebuffer(V.FRAMEBUFFER,gt);let St=v.textures[xt],vt=St.format,Zt=St.type;if(!pe.textureFormatReadable(vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pe.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let bt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,bt),V.bufferData(V.PIXEL_PACK_BUFFER,at.byteLength,V.STREAM_READ),v.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+xt),V.readPixels(j,b,J,W,et.convert(vt),et.convert(Zt),0);let he=T!==null?y.get(T).__webglFramebuffer:null;Ot.bindFramebuffer(V.FRAMEBUFFER,he);let We=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await $Z(V,We,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,bt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,at),V.deleteBuffer(bt),V.deleteSync(We),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,j=null,b=0){let J=Math.pow(2,-b),W=Math.floor(v.image.width*J),at=Math.floor(v.image.height*J),ft=j!==null?j.x:0,xt=j!==null?j.y:0;F.setTexture2D(v,0),V.copyTexSubImage2D(V.TEXTURE_2D,b,0,0,ft,xt,W,at),Ot.unbindTexture()};let Bv=V.createFramebuffer(),Dv=V.createFramebuffer();this.copyTextureToTexture=function(v,j,b=null,J=null,W=0,at=null){at===null&&(W!==0?(Su("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),at=W,W=0):at=0);let ft,xt,gt,St,vt,Zt,bt,he,We,Ue=v.isCompressedTexture?v.mipmaps[at]:v.image;if(b!==null)ft=b.max.x-b.min.x,xt=b.max.y-b.min.y,gt=b.isBox3?b.max.z-b.min.z:1,St=b.min.x,vt=b.min.y,Zt=b.isBox3?b.min.z:0;else{let vn=Math.pow(2,-W);ft=Math.floor(Ue.width*vn),xt=Math.floor(Ue.height*vn),v.isDataArrayTexture?gt=Ue.depth:v.isData3DTexture?gt=Math.floor(Ue.depth*vn):gt=1,St=0,vt=0,Zt=0}J!==null?(bt=J.x,he=J.y,We=J.z):(bt=0,he=0,We=0);let ge=et.convert(j.format),wt=et.convert(j.type),ce;j.isData3DTexture?(F.setTexture3D(j,0),ce=V.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(F.setTexture2DArray(j,0),ce=V.TEXTURE_2D_ARRAY):(F.setTexture2D(j,0),ce=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,j.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,j.unpackAlignment);let ie=V.getParameter(V.UNPACK_ROW_LENGTH),rn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),da=V.getParameter(V.UNPACK_SKIP_PIXELS),an=V.getParameter(V.UNPACK_SKIP_ROWS),qu=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ue.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ue.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,St),V.pixelStorei(V.UNPACK_SKIP_ROWS,vt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Zt);let Ie=v.isDataArrayTexture||v.isData3DTexture,bi=j.isDataArrayTexture||j.isData3DTexture;if(v.isDepthTexture){let vn=y.get(v),ji=y.get(j),zi=y.get(vn.__renderTarget),Yf=y.get(ji.__renderTarget);Ot.bindFramebuffer(V.READ_FRAMEBUFFER,zi.__webglFramebuffer),Ot.bindFramebuffer(V.DRAW_FRAMEBUFFER,Yf.__webglFramebuffer);for(let gr=0;gr<gt;gr++)Ie&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,y.get(v).__webglTexture,W,Zt+gr),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,y.get(j).__webglTexture,at,We+gr)),V.blitFramebuffer(St,vt,ft,xt,bt,he,ft,xt,V.DEPTH_BUFFER_BIT,V.NEAREST);Ot.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ot.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(W!==0||v.isRenderTargetTexture||y.has(v)){let vn=y.get(v),ji=y.get(j);Ot.bindFramebuffer(V.READ_FRAMEBUFFER,Bv),Ot.bindFramebuffer(V.DRAW_FRAMEBUFFER,Dv);for(let zi=0;zi<gt;zi++)Ie?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,vn.__webglTexture,W,Zt+zi):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,vn.__webglTexture,W),bi?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ji.__webglTexture,at,We+zi):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,ji.__webglTexture,at),W!==0?V.blitFramebuffer(St,vt,ft,xt,bt,he,ft,xt,V.COLOR_BUFFER_BIT,V.NEAREST):bi?V.copyTexSubImage3D(ce,at,bt,he,We+zi,St,vt,ft,xt):V.copyTexSubImage2D(ce,at,bt,he,St,vt,ft,xt);Ot.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ot.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else bi?v.isDataTexture||v.isData3DTexture?V.texSubImage3D(ce,at,bt,he,We,ft,xt,gt,ge,wt,Ue.data):j.isCompressedArrayTexture?V.compressedTexSubImage3D(ce,at,bt,he,We,ft,xt,gt,ge,Ue.data):V.texSubImage3D(ce,at,bt,he,We,ft,xt,gt,ge,wt,Ue):v.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,at,bt,he,ft,xt,ge,wt,Ue.data):v.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,at,bt,he,Ue.width,Ue.height,ge,Ue.data):V.texSubImage2D(V.TEXTURE_2D,at,bt,he,ft,xt,ge,wt,Ue);V.pixelStorei(V.UNPACK_ROW_LENGTH,ie),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,rn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,da),V.pixelStorei(V.UNPACK_SKIP_ROWS,an),V.pixelStorei(V.UNPACK_SKIP_IMAGES,qu),at===0&&j.generateMipmaps&&V.generateMipmap(ce),Ot.unbindTexture()},this.initRenderTarget=function(v){y.get(v).__webglFramebuffer===void 0&&F.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?F.setTextureCube(v,0):v.isData3DTexture?F.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?F.setTexture2DArray(v,0):F.setTexture2D(v,0),Ot.unbindTexture()},this.resetState=function(){E=0,N=0,T=null,Ot.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return to}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let i=this.getContext();i.drawingBufferColorSpace=Dt._getDrawingBufferColorSpace(t),i.unpackColorSpace=Dt._getUnpackColorSpace()}};var pw=me(ui(),1),Z0=()=>{let e=(0,kf.useRef)(null);return(0,kf.useEffect)(()=>{let t=e.current;if(!t)return;let i=new Zo({antialias:!1,alpha:!0});i.setSize(window.innerWidth,window.innerHeight),i.setPixelRatio(1),t.appendChild(i.domElement);let n=new no,o=new qr(-1,1,1,-1,0,1),s=512,r={type:Jn,format:Li,minFilter:Ye,magFilter:Ye},a=new yi(s,s,r),u=new yi(s,s,r),c=new yi(s,s,r),l=new ni({uniforms:{uCurrent:{value:null},uPrev:{value:null},uMouse:{value:new Wt(-1,-1)},uRadius:{value:.04},uStrength:{value:.035},uDamping:{value:.96},uResolution:{value:new Wt(s,s)}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D uCurrent;
        uniform sampler2D uPrev;
        uniform vec2 uMouse;
        uniform float uRadius;
        uniform float uStrength;
        uniform float uDamping;
        uniform vec2 uResolution;
        varying vec2 vUv;

        void main() {
          float p = 1.0 / uResolution.x;
          float h0 = texture2D(uCurrent, vUv + vec2(p, 0.0)).r;
          float h1 = texture2D(uCurrent, vUv - vec2(p, 0.0)).r;
          float h2 = texture2D(uCurrent, vUv + vec2(0.0, p)).r;
          float h3 = texture2D(uCurrent, vUv - vec2(0.0, p)).r;
          float ph = texture2D(uPrev, vUv).r;

          float nh = ((h0 + h1 + h2 + h3) * 0.5 - ph) * uDamping;
          float d = distance(vUv, uMouse);

          if (d < uRadius) {
            nh += (1.0 - smoothstep(0.0, uRadius, d)) * uStrength;
          }

          gl_FragColor = vec4(nh, 0.0, 0.0, 1.0);
        }
      `}),x=new Fe(new er(2,2),l),m=new cs().load("https://raw.githubusercontent.com/nidorx/matcaps/master/512/3B3C3F_DAD9D5_929290_ABACAC.png");m.colorSpace=di;let g=new ni({uniforms:{uSim:{value:null},uMatcap:{value:m}},transparent:!0,vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D uSim;
        uniform sampler2D uMatcap;
        varying vec2 vUv;

        void main() {
          float p = 1.0 / 512.0;
          float hL = texture2D(uSim, vUv - vec2(p, 0.0)).r;
          float hR = texture2D(uSim, vUv + vec2(p, 0.0)).r;
          float hU = texture2D(uSim, vUv - vec2(0.0, p)).r;
          float hD = texture2D(uSim, vUv + vec2(0.0, p)).r;

          vec3 n = normalize(vec3(hL - hR, hU - hD, 0.4));
          vec2 mUv = n.xy * 0.5 + 0.5;
          vec3 refl = texture2D(uMatcap, mUv).rgb;

          float h = texture2D(uSim, vUv).r;
          float mask = smoothstep(0.001, 0.15, abs(h));

          gl_FragColor = vec4(refl * 0.8 + vec3(h) * 0.1, mask * 0.2);
        }
      `}),_=new Fe(new er(2,2),g),d=new Wt(-1,-1),f=new Wt(-1,-1),k=R=>{f.set(R.clientX/window.innerWidth,1-R.clientY/window.innerHeight)};window.addEventListener("mousemove",k);let M=0,p,I=()=>{p=requestAnimationFrame(I),!(M>.8)&&(d.lerp(f,.15),l.uniforms.uCurrent.value=a.texture,l.uniforms.uPrev.value=u.texture,l.uniforms.uMouse.value.copy(d),i.setRenderTarget(c),n.children[0]=x,i.render(n,o),[a,u,c]=[c,a,u],i.setRenderTarget(null),g.uniforms.uSim.value=a.texture,n.children[0]=_,i.render(n,o),f.lerp(new Wt(-1,-1),.01))};I();let w=()=>i.setSize(window.innerWidth,window.innerHeight);window.addEventListener("resize",w);let Z=R=>{M=R.detail.progress,t&&(t.style.opacity=(1-Math.pow(M,2.5)*.8).toString())};return window.addEventListener("lenis-scroll",Z),()=>{window.removeEventListener("mousemove",k),window.removeEventListener("resize",w),window.removeEventListener("lenis-scroll",Z),cancelAnimationFrame(p),i.dispose(),a.dispose(),u.dispose(),c.dispose(),t.contains(i.domElement)&&t.removeChild(i.domElement)}},[]),(0,pw.jsx)("div",{ref:e,className:"water-distortion"})},Mw=Z0;var kU=me(Rn(),1),Kl=me(ui(),1),w0=()=>(0,Kl.jsxs)("div",{className:"curved-grid",children:[(0,Kl.jsx)("div",{id:"spline-target",className:"curved-grid__spline"}),(0,Kl.jsx)("div",{className:"curved-grid__overlay"})]}),Ow=w0;var ma=me(Rn(),1);function xs(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Kw(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var on={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Tu={duration:.5,overwrite:!1,delay:0},cM,Vi,Ge,zn=1e8,Se=1/zn,Pk=Math.PI*2,v0=Pk/4,R0=0,Ew=Math.sqrt,K0=Math.cos,E0=Math.sin,ci=function(t){return typeof t=="string"},be=function(t){return typeof t=="function"},ms=function(t){return typeof t=="number"},Rf=function(t){return typeof t>"u"},Ro=function(t){return typeof t=="object"},nn=function(t){return t!==!1},lM=function(){return typeof window<"u"},Mf=function(t){return be(t)||ci(t)},Vw=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Gi=Array.isArray,Lk=/(?:-?\.?\d|\.)+/gi,xM=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,sa=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Hk=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,hM=/[+-]=-?[.\d]+/,Gw=/[^,'"\[\]\s]+/gi,V0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,je,wo,tM,mM,Zn={},yf={},Fw,jw=function(t){return(yf=oa(t,Zn))&&Fi},Kf=function(t,i){return console.warn("Invalid property",t,"set to",i,"Missing plugin? gsap.registerPlugin()")},Nl=function(t,i){return!i&&console.warn(t)},Nw=function(t,i){return t&&(Zn[t]=i)&&yf&&(yf[t]=i)||Zn},Tl=function(){return 0},G0={suppressEvents:!0,isStart:!0,kill:!1},pf={suppressEvents:!0,kill:!1},F0={suppressEvents:!0},fM={},cr=[],eM={},Tw,tn={},Ak={},Iw=30,Of=[],dM="",_M=function(t){var i=t[0],n,o;if(Ro(i)||be(i)||(t=[t]),!(n=(i._gsap||{}).harness)){for(o=Of.length;o--&&!Of[o].targetTest(i););n=Of[o]}for(o=t.length;o--;)t[o]&&(t[o]._gsap||(t[o]._gsap=new MM(t[o],n)))||t.splice(o,1);return t},lr=function(t){return t._gsap||_M(Hn(t))[0]._gsap},gM=function(t,i,n){return(n=t[i])&&be(n)?t[i]():Rf(n)&&t.getAttribute&&t.getAttribute(i)||n},Ci=function(t,i){return(t=t.split(",")).forEach(i)||t},ze=function(t){return Math.round(t*1e5)/1e5||0},gi=function(t){return Math.round(t*1e7)/1e7||0},ra=function(t,i){var n=i.charAt(0),o=parseFloat(i.substr(2));return t=parseFloat(t),n==="+"?t+o:n==="-"?t-o:n==="*"?t*o:t/o},j0=function(t,i){for(var n=i.length,o=0;t.indexOf(i[o])<0&&++o<n;);return o<n},Sf=function(){var t=cr.length,i=cr.slice(0),n,o;for(eM={},cr.length=0,n=0;n<t;n++)o=i[n],o&&o._lazy&&(o.render(o._lazy[0],o._lazy[1],!0)._lazy=0)},Ww=function(t,i,n,o){cr.length&&!Vi&&Sf(),t.render(i,n,o||Vi&&i<0&&(t._initted||t._startAt)),cr.length&&!Vi&&Sf()},Uw=function(t){var i=parseFloat(t);return(i||i===0)&&(t+"").match(Gw).length<2?i:ci(t)?t.trim():t},$w=function(t){return t},An=function(t,i){for(var n in i)n in t||(t[n]=i[n]);return t},N0=function(t){return function(i,n){for(var o in n)o in i||o==="duration"&&t||o==="ease"||(i[o]=n[o])}},oa=function(t,i){for(var n in i)t[n]=i[n];return t},yw=function e(t,i){for(var n in i)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Ro(i[n])?e(t[n]||(t[n]={}),i[n]):i[n]);return t},Zf=function(t,i){var n={},o;for(o in t)o in i||(n[o]=t[o]);return n},Gl=function(t){var i=t.parent||je,n=t.keyframes?N0(Gi(t.keyframes)):An;if(nn(t.inherit))for(;i;)n(t,i.vars.defaults),i=i.parent||i._dp;return t},T0=function(t,i){for(var n=t.length,o=n===i.length;o&&n--&&t[n]===i[n];);return n<0},Cw=function(t,i,n,o,s){n===void 0&&(n="_first"),o===void 0&&(o="_last");var r=t[o],a;if(s)for(a=i[s];r&&r[s]>a;)r=r._prev;return r?(i._next=r._next,r._next=i):(i._next=t[n],t[n]=i),i._next?i._next._prev=i:t[o]=i,i._prev=r,i.parent=i._dp=t,i},Ef=function(t,i,n,o){n===void 0&&(n="_first"),o===void 0&&(o="_last");var s=i._prev,r=i._next;s?s._next=r:t[n]===i&&(t[n]=r),r?r._prev=s:t[o]===i&&(t[o]=s),i._next=i._prev=i.parent=null},xr=function(t,i){t.parent&&(!i||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},ea=function(t,i){if(t&&(!i||i._end>t._dur||i._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},W0=function(t){for(var i=t.parent;i&&i.parent;)i._dirty=1,i.totalDuration(),i=i.parent;return t},iM=function(t,i,n,o){return t._startAt&&(Vi?t._startAt.revert(pf):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(i,!0,o))},U0=function e(t){return!t||t._ts&&e(t.parent)},Sw=function(t){return t._repeat?Wu(t._tTime,t=t.duration()+t._rDelay)*t:0},Wu=function(t,i){var n=Math.floor(t/=i);return t&&n===t?n-1:n},wf=function(t,i){return(t-i._start)*i._ts+(i._ts>=0?0:i._dirty?i.totalDuration():i._tDur)},Vf=function(t){return t._end=gi(t._start+(t._tDur/Math.abs(t._ts||t._rts||Se)||0))},Gf=function(t,i){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=gi(n._time-(t._ts>0?i/t._ts:((t._dirty?t.totalDuration():t._tDur)-i)/-t._ts)),Vf(t),n._dirty||ea(n,t)),t},Yw=function(t,i){var n;if((i._time||!i._dur&&i._initted||i._start<t._time&&(i._dur||!i.add))&&(n=wf(t.rawTime(),i),(!i._dur||$l(0,i.totalDuration(),n)-i._tTime>Se)&&i.render(n,!0)),ea(t,i)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Se}},vo=function(t,i,n,o){return i.parent&&xr(i),i._start=gi((ms(n)?n:n||t!==je?bn(t,n,i):t._time)+i._delay),i._end=gi(i._start+(i.totalDuration()/Math.abs(i.timeScale())||0)),Cw(t,i,"_first","_last",t._sort?"_start":0),nM(i)||(t._recent=i),o||Yw(t,i),t._ts<0&&Gf(t,t._tTime),t},Jw=function(t,i){return(Zn.ScrollTrigger||Kf("scrollTrigger",i))&&Zn.ScrollTrigger.create(i,t)},bw=function(t,i,n,o,s){if(IM(t,i,s),!t._initted)return 1;if(!n&&t._pt&&!Vi&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Tw!==en.frame)return cr.push(t),t._lazy=[s,o],1},$0=function e(t){var i=t.parent;return i&&i._ts&&i._initted&&!i._lock&&(i.rawTime()<0||e(i))},nM=function(t){var i=t.data;return i==="isFromStart"||i==="isStart"},C0=function(t,i,n,o){var s=t.ratio,r=i<0||!i&&(!t._start&&$0(t)&&!(!t._initted&&nM(t))||(t._ts<0||t._dp._ts<0)&&!nM(t))?0:1,a=t._rDelay,u=0,c,l,x;if(a&&t._repeat&&(u=$l(0,t._tDur,i),l=Wu(u,a),t._yoyo&&l&1&&(r=1-r),l!==Wu(t._tTime,a)&&(s=1-r,t.vars.repeatRefresh&&t._initted&&t.invalidate())),r!==s||Vi||o||t._zTime===Se||!i&&t._zTime){if(!t._initted&&bw(t,i,o,n,u))return;for(x=t._zTime,t._zTime=i||(n?Se:0),n||(n=i&&!x),t.ratio=r,t._from&&(r=1-r),t._time=0,t._tTime=u,c=t._pt;c;)c.r(r,c.d),c=c._next;i<0&&iM(t,i,n,!0),t._onUpdate&&!n&&Sn(t,"onUpdate"),u&&t._repeat&&!n&&t.parent&&Sn(t,"onRepeat"),(i>=t._tDur||i<0)&&t.ratio===r&&(r&&xr(t,1),!n&&!Vi&&(Sn(t,r?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=i)},Y0=function(t,i,n){var o;if(n>i)for(o=t._first;o&&o._start<=n;){if(o.data==="isPause"&&o._start>i)return o;o=o._next}else for(o=t._last;o&&o._start>=n;){if(o.data==="isPause"&&o._start<i)return o;o=o._prev}},Uu=function(t,i,n,o){var s=t._repeat,r=gi(i)||0,a=t._tTime/t._tDur;return a&&!o&&(t._time*=r/t._dur),t._dur=r,t._tDur=s?s<0?1e10:gi(r*(s+1)+t._rDelay*s):r,a>0&&!o&&Gf(t,t._tTime=t._tDur*a),t.parent&&Vf(t),n||ea(t.parent,t),t},Zw=function(t){return t instanceof Si?ea(t):Uu(t,t._dur)},J0={_start:0,endTime:Tl,totalDuration:Tl},bn=function e(t,i,n){var o=t.labels,s=t._recent||J0,r=t.duration()>=zn?s.endTime(!1):t._dur,a,u,c;return ci(i)&&(isNaN(i)||i in o)?(u=i.charAt(0),c=i.substr(-1)==="%",a=i.indexOf("="),u==="<"||u===">"?(a>=0&&(i=i.replace(/=/,"")),(u==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(i.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(i in o||(o[i]=r),o[i]):(u=parseFloat(i.charAt(a-1)+i.substr(a+1)),c&&n&&(u=u/100*(Gi(n)?n[0]:n).totalDuration()),a>1?e(t,i.substr(0,a-1),n)+u:r+u)):i==null?r:+i},Fl=function(t,i,n){var o=ms(i[1]),s=(o?2:1)+(t<2?0:1),r=i[s],a,u;if(o&&(r.duration=i[1]),r.parent=n,t){for(a=r,u=n;u&&!("immediateRender"in a);)a=u.vars.defaults||{},u=nn(u.vars.inherit)&&u.parent;r.immediateRender=nn(a.immediateRender),t<2?r.runBackwards=1:r.startAt=i[s-1]}return new Xe(i[0],r,i[s+1])},hr=function(t,i){return t||t===0?i(t):i},$l=function(t,i,n){return n<t?t:n>i?i:n},Zi=function(t,i){return!ci(t)||!(i=V0.exec(t))?"":i[1]},b0=function(t,i,n){return hr(n,function(o){return $l(t,i,o)})},oM=[].slice,zw=function(t,i){return t&&Ro(t)&&"length"in t&&(!i&&!t.length||t.length-1 in t&&Ro(t[0]))&&!t.nodeType&&t!==wo},z0=function(t,i,n){return n===void 0&&(n=[]),t.forEach(function(o){var s;return ci(o)&&!i||zw(o,1)?(s=n).push.apply(s,Hn(o)):n.push(o)})||n},Hn=function(t,i,n){return Ge&&!i&&Ge.selector?Ge.selector(t):ci(t)&&!n&&(tM||!$u())?oM.call((i||mM).querySelectorAll(t),0):Gi(t)?z0(t,n):zw(t)?oM.call(t,0):t?[t]:[]},sM=function(t){return t=Hn(t)[0]||Nl("Invalid scope")||{},function(i){var n=t.current||t.nativeElement||t;return Hn(i,n.querySelectorAll?n:n===t?Nl("Invalid scope")||mM.createElement("div"):t)}},Hw=function(t){return t.sort(function(){return .5-Math.random()})},Aw=function(t){if(be(t))return t;var i=Ro(t)?t:{each:t},n=ia(i.ease),o=i.from||0,s=parseFloat(i.base)||0,r={},a=o>0&&o<1,u=isNaN(o)||a,c=i.axis,l=o,x=o;return ci(o)?l=x={center:.5,edges:.5,end:1}[o]||0:!a&&u&&(l=o[0],x=o[1]),function(h,m,g){var _=(g||i).length,d=r[_],f,k,M,p,I,w,Z,R,O;if(!d){if(O=i.grid==="auto"?0:(i.grid||[1,zn])[1],!O){for(Z=-zn;Z<(Z=g[O++].getBoundingClientRect().left)&&O<_;);O<_&&O--}for(d=r[_]=[],f=u?Math.min(O,_)*l-.5:o%O,k=O===zn?0:u?_*x/O-.5:o/O|0,Z=0,R=zn,w=0;w<_;w++)M=w%O-f,p=k-(w/O|0),d[w]=I=c?Math.abs(c==="y"?p:M):Ew(M*M+p*p),I>Z&&(Z=I),I<R&&(R=I);o==="random"&&Hw(d),d.max=Z-R,d.min=R,d.v=_=(parseFloat(i.amount)||parseFloat(i.each)*(O>_?_-1:c?c==="y"?_/O:O:Math.max(O,_/O))||0)*(o==="edges"?-1:1),d.b=_<0?s-_:s,d.u=Zi(i.amount||i.each)||0,n=n&&_<0?ev(n):n}return _=(d[h]-d.min)/d.max||0,gi(d.b+(n?n(_):_)*d.v)+d.u}},rM=function(t){var i=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var o=gi(Math.round(parseFloat(n)/t)*t*i);return(o-o%1)/i+(ms(n)?0:Zi(n))}},Xw=function(t,i){var n=Gi(t),o,s;return!n&&Ro(t)&&(o=n=t.radius||zn,t.values?(t=Hn(t.values),(s=!ms(t[0]))&&(o*=o)):t=rM(t.increment)),hr(i,n?be(t)?function(r){return s=t(r),Math.abs(s-r)<=o?s:r}:function(r){for(var a=parseFloat(s?r.x:r),u=parseFloat(s?r.y:0),c=zn,l=0,x=t.length,h,m;x--;)s?(h=t[x].x-a,m=t[x].y-u,h=h*h+m*m):h=Math.abs(t[x]-a),h<c&&(c=h,l=x);return l=!o||c<=o?t[l]:r,s||l===r||ms(r)?l:l+Zi(r)}:rM(t))},qw=function(t,i,n,o){return hr(Gi(t)?!i:n===!0?!!(n=0):!o,function(){return Gi(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(o=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(i-t+n*.99))/n)*n*o)/o})},H0=function(){for(var t=arguments.length,i=new Array(t),n=0;n<t;n++)i[n]=arguments[n];return function(o){return i.reduce(function(s,r){return r(s)},o)}},A0=function(t,i){return function(n){return t(parseFloat(n))+(i||Zi(n))}},X0=function(t,i,n){return Bw(t,i,0,1,n)},Qw=function(t,i,n){return hr(n,function(o){return t[~~i(o)]})},q0=function e(t,i,n){var o=i-t;return Gi(t)?Qw(t,e(0,t.length),i):hr(n,function(s){return(o+(s-t)%o)%o+t})},Q0=function e(t,i,n){var o=i-t,s=o*2;return Gi(t)?Qw(t,e(0,t.length-1),i):hr(n,function(r){return r=(s+(r-t)%s)%s||0,t+(r>o?s-r:r)})},Cu=function(t){for(var i=0,n="",o,s,r,a;~(o=t.indexOf("random(",i));)r=t.indexOf(")",o),a=t.charAt(o+7)==="[",s=t.substr(o+7,r-o-7).match(a?Gw:Lk),n+=t.substr(i,o-i)+qw(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),i=r+1;return n+t.substr(i,t.length-i)},Bw=function(t,i,n,o,s){var r=i-t,a=o-n;return hr(s,function(u){return n+((u-t)/r*a||0)})},B0=function e(t,i,n,o){var s=isNaN(t+i)?0:function(m){return(1-m)*t+m*i};if(!s){var r=ci(t),a={},u,c,l,x,h;if(n===!0&&(o=1)&&(n=null),r)t={p:t},i={p:i};else if(Gi(t)&&!Gi(i)){for(l=[],x=t.length,h=x-2,c=1;c<x;c++)l.push(e(t[c-1],t[c]));x--,s=function(g){g*=x;var _=Math.min(h,~~g);return l[_](g-_)},n=i}else o||(t=oa(Gi(t)?[]:{},t));if(!l){for(u in i)pM.call(a,t,u,"get",i[u]);s=function(g){return ZM(g,a)||(r?t.p:t)}}}return hr(n,s)},ww=function(t,i,n){var o=t.labels,s=zn,r,a,u;for(r in o)a=o[r]-i,a<0==!!n&&a&&s>(a=Math.abs(a))&&(u=r,s=a);return u},Sn=function(t,i,n){var o=t.vars,s=o[i],r=Ge,a=t._ctx,u,c,l;if(s)return u=o[i+"Params"],c=o.callbackScope||t,n&&cr.length&&Sf(),a&&(Ge=a),l=u?s.apply(c,u):s.call(c),Ge=r,l},El=function(t){return xr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Vi),t.progress()<1&&Sn(t,"onInterrupt"),t},Nu,Dw=[],Pw=function(t){if(t)if(t=!t.name&&t.default||t,lM()||t.headless){var i=t.name,n=be(t),o=i&&!n&&t.init?function(){this._props=[]}:t,s={init:Tl,render:ZM,add:pM,kill:hj,modifier:xj,rawVars:0},r={targetTest:0,get:0,getSetter:Ff,aliases:{},register:0};if($u(),t!==o){if(tn[i])return;An(o,An(Zf(t,s),r)),oa(o.prototype,oa(s,Zf(t,r))),tn[o.prop=i]=o,t.targetTest&&(Of.push(o),fM[i]=1),i=(i==="css"?"CSS":i.charAt(0).toUpperCase()+i.substr(1))+"Plugin"}Nw(i,o),t.register&&t.register(Fi,o,Yi)}else Dw.push(t)},Me=255,Vl={aqua:[0,Me,Me],lime:[0,Me,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Me],navy:[0,0,128],white:[Me,Me,Me],olive:[128,128,0],yellow:[Me,Me,0],orange:[Me,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Me,0,0],pink:[Me,192,203],cyan:[0,Me,Me],transparent:[Me,Me,Me,0]},Xk=function(t,i,n){return t+=t<0?1:t>1?-1:0,(t*6<1?i+(n-i)*t*6:t<.5?n:t*3<2?i+(n-i)*(2/3-t)*6:i)*Me+.5|0},Lw=function(t,i,n){var o=t?ms(t)?[t>>16,t>>8&Me,t&Me]:0:Vl.black,s,r,a,u,c,l,x,h,m,g;if(!o){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Vl[t])o=Vl[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),r=t.charAt(2),a=t.charAt(3),t="#"+s+s+r+r+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return o=parseInt(t.substr(1,6),16),[o>>16,o>>8&Me,o&Me,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),o=[t>>16,t>>8&Me,t&Me]}else if(t.substr(0,3)==="hsl"){if(o=g=t.match(Lk),!i)u=+o[0]%360/360,c=+o[1]/100,l=+o[2]/100,r=l<=.5?l*(c+1):l+c-l*c,s=l*2-r,o.length>3&&(o[3]*=1),o[0]=Xk(u+1/3,s,r),o[1]=Xk(u,s,r),o[2]=Xk(u-1/3,s,r);else if(~t.indexOf("="))return o=t.match(xM),n&&o.length<4&&(o[3]=1),o}else o=t.match(Lk)||Vl.transparent;o=o.map(Number)}return i&&!g&&(s=o[0]/Me,r=o[1]/Me,a=o[2]/Me,x=Math.max(s,r,a),h=Math.min(s,r,a),l=(x+h)/2,x===h?u=c=0:(m=x-h,c=l>.5?m/(2-x-h):m/(x+h),u=x===s?(r-a)/m+(r<a?6:0):x===r?(a-s)/m+2:(s-r)/m+4,u*=60),o[0]=~~(u+.5),o[1]=~~(c*100+.5),o[2]=~~(l*100+.5)),n&&o.length<4&&(o[3]=1),o},tv=function(t){var i=[],n=[],o=-1;return t.split(hs).forEach(function(s){var r=s.match(sa)||[];i.push.apply(i,r),n.push(o+=r.length+1)}),i.c=n,i},vw=function(t,i,n){var o="",s=(t+o).match(hs),r=i?"hsla(":"rgba(",a=0,u,c,l,x;if(!s)return t;if(s=s.map(function(h){return(h=Lw(h,i,1))&&r+(i?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(l=tv(t),u=n.c,u.join(o)!==l.c.join(o)))for(c=t.replace(hs,"1").split(sa),x=c.length-1;a<x;a++)o+=c[a]+(~u.indexOf(a)?s.shift()||r+"0,0,0,0)":(l.length?l:s.length?s:n).shift());if(!c)for(c=t.split(hs),x=c.length-1;a<x;a++)o+=c[a]+s[a];return o+c[x]},hs=function(){var e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Vl)e+="|"+t+"\\b";return new RegExp(e+")","gi")}(),D0=/hsl[a]?\(/,kM=function(t){var i=t.join(" "),n;if(hs.lastIndex=0,hs.test(i))return n=D0.test(i),t[1]=vw(t[1],n),t[0]=vw(t[0],n,tv(t[1])),!0},Wl,en=function(){var e=Date.now,t=500,i=33,n=e(),o=n,s=1e3/240,r=s,a=[],u,c,l,x,h,m,g=function _(d){var f=e()-o,k=d===!0,M,p,I,w;if((f>t||f<0)&&(n+=f-i),o+=f,I=o-n,M=I-r,(M>0||k)&&(w=++x.frame,h=I-x.time*1e3,x.time=I=I/1e3,r+=M+(M>=s?4:s-M),p=1),k||(u=c(_)),p)for(m=0;m<a.length;m++)a[m](I,h,w,d)};return x={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(d){return h/(1e3/(d||60))},wake:function(){Fw&&(!tM&&lM()&&(wo=tM=window,mM=wo.document||{},Zn.gsap=Fi,(wo.gsapVersions||(wo.gsapVersions=[])).push(Fi.version),jw(yf||wo.GreenSockGlobals||!wo.gsap&&wo||{}),Dw.forEach(Pw)),l=typeof requestAnimationFrame<"u"&&requestAnimationFrame,u&&x.sleep(),c=l||function(d){return setTimeout(d,r-x.time*1e3+1|0)},Wl=1,g(2))},sleep:function(){(l?cancelAnimationFrame:clearTimeout)(u),Wl=0,c=Tl},lagSmoothing:function(d,f){t=d||1/0,i=Math.min(f||33,t)},fps:function(d){s=1e3/(d||240),r=x.time*1e3+s},add:function(d,f,k){var M=f?function(p,I,w,Z){d(p,I,w,Z),x.remove(M)}:d;return x.remove(d),a[k?"unshift":"push"](M),$u(),M},remove:function(d,f){~(f=a.indexOf(d))&&a.splice(f,1)&&m>=f&&m--},_listeners:a},x}(),$u=function(){return!Wl&&en.wake()},Bt={},P0=/^[\d.\-M][\d.\-,\s]/,L0=/["']/g,tj=function(t){for(var i={},n=t.substr(1,t.length-3).split(":"),o=n[0],s=1,r=n.length,a,u,c;s<r;s++)u=n[s],a=s!==r-1?u.lastIndexOf(","):u.length,c=u.substr(0,a),i[o]=isNaN(c)?c.replace(L0,"").trim():+c,o=u.substr(a+1).trim();return i},ej=function(t){var i=t.indexOf("(")+1,n=t.indexOf(")"),o=t.indexOf("(",i);return t.substring(i,~o&&o<n?t.indexOf(")",n+1):n)},ij=function(t){var i=(t+"").split("("),n=Bt[i[0]];return n&&i.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[tj(i[1])]:ej(t).split(",").map(Uw)):Bt._CE&&P0.test(t)?Bt._CE("",t):n},ev=function(t){return function(i){return 1-t(1-i)}},iv=function e(t,i){for(var n=t._first,o;n;)n instanceof Si?e(n,i):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==i&&(n.timeline?e(n.timeline,i):(o=n._ease,n._ease=n._yEase,n._yEase=o,n._yoyo=i)),n=n._next},ia=function(t,i){return t&&(be(t)?t:Bt[t]||ij(t))||i},aa=function(t,i,n,o){n===void 0&&(n=function(u){return 1-i(1-u)}),o===void 0&&(o=function(u){return u<.5?i(u*2)/2:1-i((1-u)*2)/2});var s={easeIn:i,easeOut:n,easeInOut:o},r;return Ci(t,function(a){Bt[a]=Zn[a]=s,Bt[r=a.toLowerCase()]=n;for(var u in s)Bt[r+(u==="easeIn"?".in":u==="easeOut"?".out":".inOut")]=Bt[a+"."+u]=s[u]}),s},nv=function(t){return function(i){return i<.5?(1-t(1-i*2))/2:.5+t((i-.5)*2)/2}},qk=function e(t,i,n){var o=i>=1?i:1,s=(n||(t?.3:.45))/(i<1?i:1),r=s/Pk*(Math.asin(1/o)||0),a=function(l){return l===1?1:o*Math.pow(2,-10*l)*E0((l-r)*s)+1},u=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:nv(a);return s=Pk/s,u.config=function(c,l){return e(t,c,l)},u},Qk=function e(t,i){i===void 0&&(i=1.70158);var n=function(r){return r?--r*r*((i+1)*r+i)+1:0},o=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:nv(n);return o.config=function(s){return e(t,s)},o};Ci("Linear,Quad,Cubic,Quart,Quint,Strong",function(e,t){var i=t<5?t+1:t;aa(e+",Power"+(i-1),t?function(n){return Math.pow(n,i)}:function(n){return n},function(n){return 1-Math.pow(1-n,i)},function(n){return n<.5?Math.pow(n*2,i)/2:1-Math.pow((1-n)*2,i)/2})});Bt.Linear.easeNone=Bt.none=Bt.Linear.easeIn;aa("Elastic",qk("in"),qk("out"),qk());(function(e,t){var i=1/t,n=2*i,o=2.5*i,s=function(a){return a<i?e*a*a:a<n?e*Math.pow(a-1.5/t,2)+.75:a<o?e*(a-=2.25/t)*a+.9375:e*Math.pow(a-2.625/t,2)+.984375};aa("Bounce",function(r){return 1-s(1-r)},s)})(7.5625,2.75);aa("Expo",function(e){return e?Math.pow(2,10*(e-1)):0});aa("Circ",function(e){return-(Ew(1-e*e)-1)});aa("Sine",function(e){return e===1?1:-K0(e*v0)+1});aa("Back",Qk("in"),Qk("out"),Qk());Bt.SteppedEase=Bt.steps=Zn.SteppedEase={config:function(t,i){t===void 0&&(t=1);var n=1/t,o=t+(i?0:1),s=i?1:0,r=1-Se;return function(a){return((o*$l(0,r,a)|0)+s)*n}}};Tu.ease=Bt["quad.out"];Ci("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(e){return dM+=e+","+e+"Params,"});var MM=function(t,i){this.id=R0++,t._gsap=this,this.target=t,this.harness=i,this.get=i?i.get:gM,this.set=i?i.getSetter:Ff},Ul=function(){function e(i){this.vars=i,this._delay=+i.delay||0,(this._repeat=i.repeat===1/0?-2:i.repeat||0)&&(this._rDelay=i.repeatDelay||0,this._yoyo=!!i.yoyo||!!i.yoyoEase),this._ts=1,Uu(this,+i.duration,1,1),this.data=i.data,Ge&&(this._ctx=Ge,Ge.data.push(this)),Wl||en.wake()}var t=e.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Uu(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,o){if($u(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Gf(this,n),!s._dp||s.parent||Yw(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&vo(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!o||this._initted&&Math.abs(this._zTime)===Se||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Ww(this,n,o)),this},t.time=function(n,o){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Sw(this))%(this._dur+this._rDelay)||(n?this._dur:0),o):this._time},t.totalProgress=function(n,o){return arguments.length?this.totalTime(this.totalDuration()*n,o):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},t.progress=function(n,o){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Sw(this),o):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,o){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,o):this._repeat?Wu(this._tTime,s)+1:1},t.timeScale=function(n,o){if(!arguments.length)return this._rts===-Se?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?wf(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Se?0:this._rts,this.totalTime($l(-Math.abs(this._delay),this._tDur,s),o!==!1),Vf(this),W0(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):($u(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Se&&(this._tTime-=Se)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var o=this.parent||this._dp;return o&&(o._sort||!this.parent)&&vo(o,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(nn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var o=this.parent||this._dp;return o?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?wf(o.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=F0);var o=Vi;return Vi=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Vi=o,this},t.globalTime=function(n){for(var o=this,s=arguments.length?n:o.rawTime();o;)s=o._start+s/(Math.abs(o._ts)||1),o=o._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Zw(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var o=this._time;return this._rDelay=n,Zw(this),o?this.time(o):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,o){return this.totalTime(bn(this,n),nn(o))},t.restart=function(n,o){return this.play().totalTime(n?-this._delay:0,nn(o))},t.play=function(n,o){return n!=null&&this.seek(n,o),this.reversed(!1).paused(!1)},t.reverse=function(n,o){return n!=null&&this.seek(n||this.totalDuration(),o),this.reversed(!0).paused(!1)},t.pause=function(n,o){return n!=null&&this.seek(n,o),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Se:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Se,this},t.isActive=function(){var n=this.parent||this._dp,o=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=o&&s<this.endTime(!0)-Se)},t.eventCallback=function(n,o,s){var r=this.vars;return arguments.length>1?(o?(r[n]=o,s&&(r[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=o)):delete r[n],this):r[n]},t.then=function(n){var o=this;return new Promise(function(s){var r=be(n)?n:$w,a=function(){var c=o.then;o.then=null,be(r)&&(r=r(o))&&(r.then||r===o)&&(o.then=c),s(r),o.then=c};o._initted&&o.totalProgress()===1&&o._ts>=0||!o._tTime&&o._ts<0?a():o._prom=a})},t.kill=function(){El(this)},e}();An(Ul.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Se,_prom:0,_ps:!1,_rts:1});var Si=function(e){Kw(t,e);function t(n,o){var s;return n===void 0&&(n={}),s=e.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=nn(n.sortChildren),je&&vo(n.parent||je,xs(s),o),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Jw(xs(s),n.scrollTrigger),s}var i=t.prototype;return i.to=function(o,s,r){return Fl(0,arguments,this),this},i.from=function(o,s,r){return Fl(1,arguments,this),this},i.fromTo=function(o,s,r,a){return Fl(2,arguments,this),this},i.set=function(o,s,r){return s.duration=0,s.parent=this,Gl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Xe(o,s,bn(this,r),1),this},i.call=function(o,s,r){return vo(this,Xe.delayedCall(0,o,s),r)},i.staggerTo=function(o,s,r,a,u,c,l){return r.duration=s,r.stagger=r.stagger||a,r.onComplete=c,r.onCompleteParams=l,r.parent=this,new Xe(o,r,bn(this,u)),this},i.staggerFrom=function(o,s,r,a,u,c,l){return r.runBackwards=1,Gl(r).immediateRender=nn(r.immediateRender),this.staggerTo(o,s,r,a,u,c,l)},i.staggerFromTo=function(o,s,r,a,u,c,l,x){return a.startAt=r,Gl(a).immediateRender=nn(a.immediateRender),this.staggerTo(o,s,a,u,c,l,x)},i.render=function(o,s,r){var a=this._time,u=this._dirty?this.totalDuration():this._tDur,c=this._dur,l=o<=0?0:gi(o),x=this._zTime<0!=o<0&&(this._initted||!c),h,m,g,_,d,f,k,M,p,I,w,Z;if(this!==je&&l>u&&o>=0&&(l=u),l!==this._tTime||r||x){if(a!==this._time&&c&&(l+=this._time-a,o+=this._time-a),h=l,p=this._start,M=this._ts,f=!M,x&&(c||(a=this._zTime),(o||!s)&&(this._zTime=o)),this._repeat){if(w=this._yoyo,d=c+this._rDelay,this._repeat<-1&&o<0)return this.totalTime(d*100+o,s,r);if(h=gi(l%d),l===u?(_=this._repeat,h=c):(_=~~(l/d),_&&_===l/d&&(h=c,_--),h>c&&(h=c)),I=Wu(this._tTime,d),!a&&this._tTime&&I!==_&&this._tTime-I*d-this._dur<=0&&(I=_),w&&_&1&&(h=c-h,Z=1),_!==I&&!this._lock){var R=w&&I&1,O=R===(w&&_&1);if(_<I&&(R=!R),a=R?0:l%c?c:l,this._lock=1,this.render(a||(Z?0:gi(_*d)),s,!c)._lock=0,this._tTime=l,!s&&this.parent&&Sn(this,"onRepeat"),this.vars.repeatRefresh&&!Z&&(this.invalidate()._lock=1),a&&a!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,u=this._tDur,O&&(this._lock=2,a=R?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!Z&&this.invalidate()),this._lock=0,!this._ts&&!f)return this;iv(this,Z)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(k=Y0(this,gi(a),gi(h)),k&&(l-=h-(h=k._start))),this._tTime=l,this._time=h,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=o,a=0),!a&&h&&!s&&!_&&(Sn(this,"onStart"),this._tTime!==l))return this;if(h>=a&&o>=0)for(m=this._first;m;){if(g=m._next,(m._act||h>=m._start)&&m._ts&&k!==m){if(m.parent!==this)return this.render(o,s,r);if(m.render(m._ts>0?(h-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(h-m._start)*m._ts,s,r),h!==this._time||!this._ts&&!f){k=0,g&&(l+=this._zTime=-Se);break}}m=g}else{m=this._last;for(var S=o<0?o:h;m;){if(g=m._prev,(m._act||S<=m._end)&&m._ts&&k!==m){if(m.parent!==this)return this.render(o,s,r);if(m.render(m._ts>0?(S-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(S-m._start)*m._ts,s,r||Vi&&(m._initted||m._startAt)),h!==this._time||!this._ts&&!f){k=0,g&&(l+=this._zTime=S?-Se:Se);break}}m=g}}if(k&&!s&&(this.pause(),k.render(h>=a?0:-Se)._zTime=h>=a?1:-1,this._ts))return this._start=p,Vf(this),this.render(o,s,r);this._onUpdate&&!s&&Sn(this,"onUpdate",!0),(l===u&&this._tTime>=this.totalDuration()||!l&&a)&&(p===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((o||!c)&&(l===u&&this._ts>0||!l&&this._ts<0)&&xr(this,1),!s&&!(o<0&&!a)&&(l||a||!u)&&(Sn(this,l===u&&o>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(l<u&&this.timeScale()>0)&&this._prom())))}return this},i.add=function(o,s){var r=this;if(ms(s)||(s=bn(this,s,o)),!(o instanceof Ul)){if(Gi(o))return o.forEach(function(a){return r.add(a,s)}),this;if(ci(o))return this.addLabel(o,s);if(be(o))o=Xe.delayedCall(0,o);else return this}return this!==o?vo(this,o,s):this},i.getChildren=function(o,s,r,a){o===void 0&&(o=!0),s===void 0&&(s=!0),r===void 0&&(r=!0),a===void 0&&(a=-zn);for(var u=[],c=this._first;c;)c._start>=a&&(c instanceof Xe?s&&u.push(c):(r&&u.push(c),o&&u.push.apply(u,c.getChildren(!0,s,r)))),c=c._next;return u},i.getById=function(o){for(var s=this.getChildren(1,1,1),r=s.length;r--;)if(s[r].vars.id===o)return s[r]},i.remove=function(o){return ci(o)?this.removeLabel(o):be(o)?this.killTweensOf(o):(Ef(this,o),o===this._recent&&(this._recent=this._last),ea(this))},i.totalTime=function(o,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=gi(en.time-(this._ts>0?o/this._ts:(this.totalDuration()-o)/-this._ts))),e.prototype.totalTime.call(this,o,s),this._forcing=0,this):this._tTime},i.addLabel=function(o,s){return this.labels[o]=bn(this,s),this},i.removeLabel=function(o){return delete this.labels[o],this},i.addPause=function(o,s,r){var a=Xe.delayedCall(0,s||Tl,r);return a.data="isPause",this._hasPause=1,vo(this,a,bn(this,o))},i.removePause=function(o){var s=this._first;for(o=bn(this,o);s;)s._start===o&&s.data==="isPause"&&xr(s),s=s._next},i.killTweensOf=function(o,s,r){for(var a=this.getTweensOf(o,r),u=a.length;u--;)ur!==a[u]&&a[u].kill(o,s);return this},i.getTweensOf=function(o,s){for(var r=[],a=Hn(o),u=this._first,c=ms(s),l;u;)u instanceof Xe?j0(u._targets,a)&&(c?(!ur||u._initted&&u._ts)&&u.globalTime(0)<=s&&u.globalTime(u.totalDuration())>s:!s||u.isActive())&&r.push(u):(l=u.getTweensOf(a,s)).length&&r.push.apply(r,l),u=u._next;return r},i.tweenTo=function(o,s){s=s||{};var r=this,a=bn(r,o),u=s,c=u.startAt,l=u.onStart,x=u.onStartParams,h=u.immediateRender,m,g=Xe.to(r,An({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:r._time))/r.timeScale())||Se,onStart:function(){if(r.pause(),!m){var d=s.duration||Math.abs((a-(c&&"time"in c?c.time:r._time))/r.timeScale());g._dur!==d&&Uu(g,d,0,1).render(g._time,!0,!0),m=1}l&&l.apply(g,x||[])}},s));return h?g.render(0):g},i.tweenFromTo=function(o,s,r){return this.tweenTo(s,An({startAt:{time:bn(this,o)}},r))},i.recent=function(){return this._recent},i.nextLabel=function(o){return o===void 0&&(o=this._time),ww(this,bn(this,o))},i.previousLabel=function(o){return o===void 0&&(o=this._time),ww(this,bn(this,o),1)},i.currentLabel=function(o){return arguments.length?this.seek(o,!0):this.previousLabel(this._time+Se)},i.shiftChildren=function(o,s,r){r===void 0&&(r=0);for(var a=this._first,u=this.labels,c;a;)a._start>=r&&(a._start+=o,a._end+=o),a=a._next;if(s)for(c in u)u[c]>=r&&(u[c]+=o);return ea(this)},i.invalidate=function(o){var s=this._first;for(this._lock=0;s;)s.invalidate(o),s=s._next;return e.prototype.invalidate.call(this,o)},i.clear=function(o){o===void 0&&(o=!0);for(var s=this._first,r;s;)r=s._next,this.remove(s),s=r;return this._dp&&(this._time=this._tTime=this._pTime=0),o&&(this.labels={}),ea(this)},i.totalDuration=function(o){var s=0,r=this,a=r._last,u=zn,c,l,x;if(arguments.length)return r.timeScale((r._repeat<0?r.duration():r.totalDuration())/(r.reversed()?-o:o));if(r._dirty){for(x=r.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),l=a._start,l>u&&r._sort&&a._ts&&!r._lock?(r._lock=1,vo(r,a,l-a._delay,1)._lock=0):u=l,l<0&&a._ts&&(s-=l,(!x&&!r._dp||x&&x.smoothChildTiming)&&(r._start+=l/r._ts,r._time-=l,r._tTime-=l),r.shiftChildren(-l,!1,-1/0),u=0),a._end>s&&a._ts&&(s=a._end),a=c;Uu(r,r===je&&r._time>s?r._time:s,1,1),r._dirty=0}return r._tDur},t.updateRoot=function(o){if(je._ts&&(Ww(je,wf(o,je)),Tw=en.frame),en.frame>=Iw){Iw+=on.autoSleep||120;var s=je._first;if((!s||!s._ts)&&on.autoSleep&&en._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||en.sleep()}}},t}(Ul);An(Si.prototype,{_lock:0,_hasPause:0,_forcing:0});var nj=function(t,i,n,o,s,r,a){var u=new Yi(this._pt,t,i,0,1,SM,null,s),c=0,l=0,x,h,m,g,_,d,f,k;for(u.b=n,u.e=o,n+="",o+="",(f=~o.indexOf("random("))&&(o=Cu(o)),r&&(k=[n,o],r(k,t,i),n=k[0],o=k[1]),h=n.match(Hk)||[];x=Hk.exec(o);)g=x[0],_=o.substring(c,x.index),m?m=(m+1)%5:_.substr(-5)==="rgba("&&(m=1),g!==h[l++]&&(d=parseFloat(h[l-1])||0,u._pt={_next:u._pt,p:_||l===1?_:",",s:d,c:g.charAt(1)==="="?ra(d,g)-d:parseFloat(g)-d,m:m&&m<4?Math.round:0},c=Hk.lastIndex);return u.c=c<o.length?o.substring(c,o.length):"",u.fp=a,(hM.test(o)||f)&&(u.e=0),this._pt=u,u},pM=function(t,i,n,o,s,r,a,u,c,l){be(o)&&(o=o(s||0,t,r));var x=t[i],h=n!=="get"?n:be(x)?c?t[i.indexOf("set")||!be(t["get"+i.substr(3)])?i:"get"+i.substr(3)](c):t[i]():x,m=be(x)?c?uj:rv:yM,g;if(ci(o)&&(~o.indexOf("random(")&&(o=Cu(o)),o.charAt(1)==="="&&(g=ra(h,o)+(Zi(h)||0),(g||g===0)&&(o=g))),!l||h!==o||aM)return!isNaN(h*o)&&o!==""?(g=new Yi(this._pt,t,i,+h||0,o-(h||0),typeof x=="boolean"?lj:av,0,m),c&&(g.fp=c),a&&g.modifier(a,this,t),this._pt=g):(!x&&!(i in t)&&Kf(i,o),nj.call(this,t,i,h,o,m,u||on.stringFilter,c))},oj=function(t,i,n,o,s){if(be(t)&&(t=jl(t,s,i,n,o)),!Ro(t)||t.style&&t.nodeType||Gi(t)||Vw(t))return ci(t)?jl(t,s,i,n,o):t;var r={},a;for(a in t)r[a]=jl(t[a],s,i,n,o);return r},OM=function(t,i,n,o,s,r){var a,u,c,l;if(tn[t]&&(a=new tn[t]).init(s,a.rawVars?i[t]:oj(i[t],o,s,r,n),n,o,r)!==!1&&(n._pt=u=new Yi(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==Nu))for(c=n._ptLookup[n._targets.indexOf(s)],l=a._props.length;l--;)c[a._props[l]]=u;return a},ur,aM,IM=function e(t,i,n){var o=t.vars,s=o.ease,r=o.startAt,a=o.immediateRender,u=o.lazy,c=o.onUpdate,l=o.runBackwards,x=o.yoyoEase,h=o.keyframes,m=o.autoRevert,g=t._dur,_=t._startAt,d=t._targets,f=t.parent,k=f&&f.data==="nested"?f.vars.targets:d,M=t._overwrite==="auto"&&!cM,p=t.timeline,I,w,Z,R,O,S,E,N,T,$,z,U,Y;if(p&&(!h||!s)&&(s="none"),t._ease=ia(s,Tu.ease),t._yEase=x?ev(ia(x===!0?s:x,Tu.ease)):0,x&&t._yoyo&&!t._repeat&&(x=t._yEase,t._yEase=t._ease,t._ease=x),t._from=!p&&!!o.runBackwards,!p||h&&!o.stagger){if(N=d[0]?lr(d[0]).harness:0,U=N&&o[N.prop],I=Zf(o,fM),_&&(_._zTime<0&&_.progress(1),i<0&&l&&a&&!m?_.render(-1,!0):_.revert(l&&g?pf:G0),_._lazy=0),r){if(xr(t._startAt=Xe.set(d,An({data:"isStart",overwrite:!1,parent:f,immediateRender:!0,lazy:!_&&nn(u),startAt:null,delay:0,onUpdate:c&&function(){return Sn(t,"onUpdate")},stagger:0},r))),t._startAt._dp=0,t._startAt._sat=t,i<0&&(Vi||!a&&!m)&&t._startAt.revert(pf),a&&g&&i<=0&&n<=0){i&&(t._zTime=i);return}}else if(l&&g&&!_){if(i&&(a=!1),Z=An({overwrite:!1,data:"isFromStart",lazy:a&&!_&&nn(u),immediateRender:a,stagger:0,parent:f},I),U&&(Z[N.prop]=U),xr(t._startAt=Xe.set(d,Z)),t._startAt._dp=0,t._startAt._sat=t,i<0&&(Vi?t._startAt.revert(pf):t._startAt.render(-1,!0)),t._zTime=i,!a)e(t._startAt,Se,Se);else if(!i)return}for(t._pt=t._ptCache=0,u=g&&nn(u)||u&&!g,w=0;w<d.length;w++){if(O=d[w],E=O._gsap||_M(d)[w]._gsap,t._ptLookup[w]=$={},eM[E.id]&&cr.length&&Sf(),z=k===d?w:k.indexOf(O),N&&(T=new N).init(O,U||I,t,z,k)!==!1&&(t._pt=R=new Yi(t._pt,O,T.name,0,1,T.render,T,0,T.priority),T._props.forEach(function(Q){$[Q]=R}),T.priority&&(S=1)),!N||U)for(Z in I)tn[Z]&&(T=OM(Z,I,t,z,O,k))?T.priority&&(S=1):$[Z]=R=pM.call(t,O,Z,"get",I[Z],z,k,0,o.stringFilter);t._op&&t._op[w]&&t.kill(O,t._op[w]),M&&t._pt&&(ur=t,je.killTweensOf(O,$,t.globalTime(i)),Y=!t.parent,ur=0),t._pt&&u&&(eM[E.id]=1)}S&&wM(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!Y,h&&i<=0&&p.render(zn,!0,!0)},sj=function(t,i,n,o,s,r,a,u){var c=(t._pt&&t._ptCache||(t._ptCache={}))[i],l,x,h,m;if(!c)for(c=t._ptCache[i]=[],h=t._ptLookup,m=t._targets.length;m--;){if(l=h[m][i],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==i&&l.fp!==i;)l=l._next;if(!l)return aM=1,t.vars[i]="+=0",IM(t,a),aM=0,u?Nl(i+" not eligible for reset"):1;c.push(l)}for(m=c.length;m--;)x=c[m],l=x._pt||x,l.s=(o||o===0)&&!s?o:l.s+(o||0)+r*l.c,l.c=n-l.s,x.e&&(x.e=ze(n)+Zi(x.e)),x.b&&(x.b=l.s+Zi(x.b))},rj=function(t,i){var n=t[0]?lr(t[0]).harness:0,o=n&&n.aliases,s,r,a,u;if(!o)return i;s=oa({},i);for(r in o)if(r in s)for(u=o[r].split(","),a=u.length;a--;)s[u[a]]=s[r];return s},aj=function(t,i,n,o){var s=i.ease||o||"power1.inOut",r,a;if(Gi(i))a=n[t]||(n[t]=[]),i.forEach(function(u,c){return a.push({t:c/(i.length-1)*100,v:u,e:s})});else for(r in i)a=n[r]||(n[r]=[]),r==="ease"||a.push({t:parseFloat(t),v:i[r],e:s})},jl=function(t,i,n,o,s){return be(t)?t.call(i,n,o,s):ci(t)&&~t.indexOf("random(")?Cu(t):t},ov=dM+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",sv={};Ci(ov+",id,stagger,delay,duration,paused,scrollTrigger",function(e){return sv[e]=1});var Xe=function(e){Kw(t,e);function t(n,o,s,r){var a;typeof o=="number"&&(s.duration=o,o=s,s=null),a=e.call(this,r?o:Gl(o))||this;var u=a.vars,c=u.duration,l=u.delay,x=u.immediateRender,h=u.stagger,m=u.overwrite,g=u.keyframes,_=u.defaults,d=u.scrollTrigger,f=u.yoyoEase,k=o.parent||je,M=(Gi(n)||Vw(n)?ms(n[0]):"length"in o)?[n]:Hn(n),p,I,w,Z,R,O,S,E;if(a._targets=M.length?_M(M):Nl("GSAP target "+n+" not found. https://gsap.com",!on.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,g||h||Mf(c)||Mf(l)){if(o=a.vars,p=a.timeline=new Si({data:"nested",defaults:_||{},targets:k&&k.data==="nested"?k.vars.targets:M}),p.kill(),p.parent=p._dp=xs(a),p._start=0,h||Mf(c)||Mf(l)){if(Z=M.length,S=h&&Aw(h),Ro(h))for(R in h)~ov.indexOf(R)&&(E||(E={}),E[R]=h[R]);for(I=0;I<Z;I++)w=Zf(o,sv),w.stagger=0,f&&(w.yoyoEase=f),E&&oa(w,E),O=M[I],w.duration=+jl(c,xs(a),I,O,M),w.delay=(+jl(l,xs(a),I,O,M)||0)-a._delay,!h&&Z===1&&w.delay&&(a._delay=l=w.delay,a._start+=l,w.delay=0),p.to(O,w,S?S(I,O,M):0),p._ease=Bt.none;p.duration()?c=l=0:a.timeline=0}else if(g){Gl(An(p.vars.defaults,{ease:"none"})),p._ease=ia(g.ease||o.ease||"none");var N=0,T,$,z;if(Gi(g))g.forEach(function(U){return p.to(M,U,">")}),p.duration();else{w={};for(R in g)R==="ease"||R==="easeEach"||aj(R,g[R],w,g.easeEach);for(R in w)for(T=w[R].sort(function(U,Y){return U.t-Y.t}),N=0,I=0;I<T.length;I++)$=T[I],z={ease:$.e,duration:($.t-(I?T[I-1].t:0))/100*c},z[R]=$.v,p.to(M,z,N),N+=z.duration;p.duration()<c&&p.to({},{duration:c-p.duration()})}}c||a.duration(c=p.duration())}else a.timeline=0;return m===!0&&!cM&&(ur=xs(a),je.killTweensOf(M),ur=0),vo(k,xs(a),s),o.reversed&&a.reverse(),o.paused&&a.paused(!0),(x||!c&&!g&&a._start===gi(k._time)&&nn(x)&&U0(xs(a))&&k.data!=="nested")&&(a._tTime=-Se,a.render(Math.max(0,-l)||0)),d&&Jw(xs(a),d),a}var i=t.prototype;return i.render=function(o,s,r){var a=this._time,u=this._tDur,c=this._dur,l=o<0,x=o>u-Se&&!l?u:o<Se?0:o,h,m,g,_,d,f,k,M,p;if(!c)C0(this,o,s,r);else if(x!==this._tTime||!o||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==l){if(h=x,M=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&l)return this.totalTime(_*100+o,s,r);if(h=gi(x%_),x===u?(g=this._repeat,h=c):(g=~~(x/_),g&&g===gi(x/_)&&(h=c,g--),h>c&&(h=c)),f=this._yoyo&&g&1,f&&(p=this._yEase,h=c-h),d=Wu(this._tTime,_),h===a&&!r&&this._initted&&g===d)return this._tTime=x,this;g!==d&&(M&&this._yEase&&iv(M,f),this.vars.repeatRefresh&&!f&&!this._lock&&this._time!==_&&this._initted&&(this._lock=r=1,this.render(gi(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(bw(this,l?o:h,r,s,x))return this._tTime=0,this;if(a!==this._time&&!(r&&this.vars.repeatRefresh&&g!==d))return this;if(c!==this._dur)return this.render(o,s,r)}if(this._tTime=x,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=k=(p||this._ease)(h/c),this._from&&(this.ratio=k=1-k),h&&!a&&!s&&!g&&(Sn(this,"onStart"),this._tTime!==x))return this;for(m=this._pt;m;)m.r(k,m.d),m=m._next;M&&M.render(o<0?o:M._dur*M._ease(h/this._dur),s,r)||this._startAt&&(this._zTime=o),this._onUpdate&&!s&&(l&&iM(this,o,s,r),Sn(this,"onUpdate")),this._repeat&&g!==d&&this.vars.onRepeat&&!s&&this.parent&&Sn(this,"onRepeat"),(x===this._tDur||!x)&&this._tTime===x&&(l&&!this._onUpdate&&iM(this,o,!0,!0),(o||!c)&&(x===this._tDur&&this._ts>0||!x&&this._ts<0)&&xr(this,1),!s&&!(l&&!a)&&(x||a||f)&&(Sn(this,x===u?"onComplete":"onReverseComplete",!0),this._prom&&!(x<u&&this.timeScale()>0)&&this._prom()))}return this},i.targets=function(){return this._targets},i.invalidate=function(o){return(!o||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(o),e.prototype.invalidate.call(this,o)},i.resetTo=function(o,s,r,a,u){Wl||en.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),l;return this._initted||IM(this,c),l=this._ease(c/this._dur),sj(this,o,s,r,a,l,c,u)?this.resetTo(o,s,r,a,1):(Gf(this,0),this.parent||Cw(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},i.kill=function(o,s){if(s===void 0&&(s="all"),!o&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?El(this):this;if(this.timeline){var r=this.timeline.totalDuration();return this.timeline.killTweensOf(o,s,ur&&ur.vars.overwrite!==!0)._first||El(this),this.parent&&r!==this.timeline.totalDuration()&&Uu(this,this._dur*this.timeline._tDur/r,0,1),this}var a=this._targets,u=o?Hn(o):a,c=this._ptLookup,l=this._pt,x,h,m,g,_,d,f;if((!s||s==="all")&&T0(a,u))return s==="all"&&(this._pt=0),El(this);for(x=this._op=this._op||[],s!=="all"&&(ci(s)&&(_={},Ci(s,function(k){return _[k]=1}),s=_),s=rj(a,s)),f=a.length;f--;)if(~u.indexOf(a[f])){h=c[f],s==="all"?(x[f]=s,g=h,m={}):(m=x[f]=x[f]||{},g=s);for(_ in g)d=h&&h[_],d&&((!("kill"in d.d)||d.d.kill(_)===!0)&&Ef(this,d,"_pt"),delete h[_]),m!=="all"&&(m[_]=1)}return this._initted&&!this._pt&&l&&El(this),this},t.to=function(o,s){return new t(o,s,arguments[2])},t.from=function(o,s){return Fl(1,arguments)},t.delayedCall=function(o,s,r,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:o,onComplete:s,onReverseComplete:s,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:a})},t.fromTo=function(o,s,r){return Fl(2,arguments)},t.set=function(o,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(o,s)},t.killTweensOf=function(o,s,r){return je.killTweensOf(o,s,r)},t}(Ul);An(Xe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ci("staggerTo,staggerFrom,staggerFromTo",function(e){Xe[e]=function(){var t=new Si,i=oM.call(arguments,0);return i.splice(e==="staggerFromTo"?5:4,0,0),t[e].apply(t,i)}});var yM=function(t,i,n){return t[i]=n},rv=function(t,i,n){return t[i](n)},uj=function(t,i,n,o){return t[i](o.fp,n)},cj=function(t,i,n){return t.setAttribute(i,n)},Ff=function(t,i){return be(t[i])?rv:Rf(t[i])&&t.setAttribute?cj:yM},av=function(t,i){return i.set(i.t,i.p,Math.round((i.s+i.c*t)*1e6)/1e6,i)},lj=function(t,i){return i.set(i.t,i.p,!!(i.s+i.c*t),i)},SM=function(t,i){var n=i._pt,o="";if(!t&&i.b)o=i.b;else if(t===1&&i.e)o=i.e;else{for(;n;)o=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+o,n=n._next;o+=i.c}i.set(i.t,i.p,o,i)},ZM=function(t,i){for(var n=i._pt;n;)n.r(t,n.d),n=n._next},xj=function(t,i,n,o){for(var s=this._pt,r;s;)r=s._next,s.p===o&&s.modifier(t,i,n),s=r},hj=function(t){for(var i=this._pt,n,o;i;)o=i._next,i.p===t&&!i.op||i.op===t?Ef(this,i,"_pt"):i.dep||(n=1),i=o;return!n},mj=function(t,i,n,o){o.mSet(t,i,o.m.call(o.tween,n,o.mt),o)},wM=function(t){for(var i=t._pt,n,o,s,r;i;){for(n=i._next,o=s;o&&o.pr>i.pr;)o=o._next;(i._prev=o?o._prev:r)?i._prev._next=i:s=i,(i._next=o)?o._prev=i:r=i,i=n}t._pt=s},Yi=function(){function e(i,n,o,s,r,a,u,c,l){this.t=n,this.s=s,this.c=r,this.p=o,this.r=a||av,this.d=u||this,this.set=c||yM,this.pr=l||0,this._next=i,i&&(i._prev=this)}var t=e.prototype;return t.modifier=function(n,o,s){this.mSet=this.mSet||this.set,this.set=mj,this.m=n,this.mt=s,this.tween=o},e}();Ci(dM+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(e){return fM[e]=1});Zn.TweenMax=Zn.TweenLite=Xe;Zn.TimelineLite=Zn.TimelineMax=Si;je=new Si({sortChildren:!1,defaults:Tu,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});on.stringFilter=kM;var na=[],If={},fj=[],Rw=0,dj=0,Bk=function(t){return(If[t]||fj).map(function(i){return i()})},uM=function(){var t=Date.now(),i=[];t-Rw>2&&(Bk("matchMediaInit"),na.forEach(function(n){var o=n.queries,s=n.conditions,r,a,u,c;for(a in o)r=wo.matchMedia(o[a]).matches,r&&(u=1),r!==s[a]&&(s[a]=r,c=1);c&&(n.revert(),u&&i.push(n))}),Bk("matchMediaRevert"),i.forEach(function(n){return n.onMatch(n,function(o){return n.add(null,o)})}),Rw=t,Bk("matchMedia"))},uv=function(){function e(i,n){this.selector=n&&sM(n),this.data=[],this._r=[],this.isReverted=!1,this.id=dj++,i&&this.add(i)}var t=e.prototype;return t.add=function(n,o,s){be(n)&&(s=o,o=n,n=be);var r=this,a=function(){var c=Ge,l=r.selector,x;return c&&c!==r&&c.data.push(r),s&&(r.selector=sM(s)),Ge=r,x=o.apply(r,arguments),be(x)&&r._r.push(x),Ge=c,r.selector=l,r.isReverted=!1,x};return r.last=a,n===be?a(r,function(u){return r.add(null,u)}):n?r[n]=a:a},t.ignore=function(n){var o=Ge;Ge=null,n(this),Ge=o},t.getTweens=function(){var n=[];return this.data.forEach(function(o){return o instanceof e?n.push.apply(n,o.getTweens()):o instanceof Xe&&!(o.parent&&o.parent.data==="nested")&&n.push(o)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,o){var s=this;if(n?function(){for(var a=s.getTweens(),u=s.data.length,c;u--;)c=s.data[u],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(l){return a.splice(a.indexOf(l),1)}));for(a.map(function(l){return{g:l._dur||l._delay||l._sat&&!l._sat.vars.immediateRender?l.globalTime(0):-1/0,t:l}}).sort(function(l,x){return x.g-l.g||-1/0}).forEach(function(l){return l.t.revert(n)}),u=s.data.length;u--;)c=s.data[u],c instanceof Si?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Xe)&&c.revert&&c.revert(n);s._r.forEach(function(l){return l(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),o)for(var r=na.length;r--;)na[r].id===this.id&&na.splice(r,1)},t.revert=function(n){this.kill(n||{})},e}(),_j=function(){function e(i){this.contexts=[],this.scope=i,Ge&&Ge.data.push(this)}var t=e.prototype;return t.add=function(n,o,s){Ro(n)||(n={matches:n});var r=new uv(0,s||this.scope),a=r.conditions={},u,c,l;Ge&&!r.selector&&(r.selector=Ge.selector),this.contexts.push(r),o=r.add("onMatch",o),r.queries=n;for(c in n)c==="all"?l=1:(u=wo.matchMedia(n[c]),u&&(na.indexOf(r)<0&&na.push(r),(a[c]=u.matches)&&(l=1),u.addListener?u.addListener(uM):u.addEventListener("change",uM)));return l&&o(r,function(x){return r.add(null,x)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(o){return o.kill(n,!0)})},e}(),vf={registerPlugin:function(){for(var t=arguments.length,i=new Array(t),n=0;n<t;n++)i[n]=arguments[n];i.forEach(function(o){return Pw(o)})},timeline:function(t){return new Si(t)},getTweensOf:function(t,i){return je.getTweensOf(t,i)},getProperty:function(t,i,n,o){ci(t)&&(t=Hn(t)[0]);var s=lr(t||{}).get,r=n?$w:Uw;return n==="native"&&(n=""),t&&(i?r((tn[i]&&tn[i].get||s)(t,i,n,o)):function(a,u,c){return r((tn[a]&&tn[a].get||s)(t,a,u,c))})},quickSetter:function(t,i,n){if(t=Hn(t),t.length>1){var o=t.map(function(l){return Fi.quickSetter(l,i,n)}),s=o.length;return function(l){for(var x=s;x--;)o[x](l)}}t=t[0]||{};var r=tn[i],a=lr(t),u=a.harness&&(a.harness.aliases||{})[i]||i,c=r?function(l){var x=new r;Nu._pt=0,x.init(t,n?l+n:l,Nu,0,[t]),x.render(1,x),Nu._pt&&ZM(1,Nu)}:a.set(t,u);return r?c:function(l){return c(t,u,n?l+n:l,a,1)}},quickTo:function(t,i,n){var o,s=Fi.to(t,oa((o={},o[i]="+=0.1",o.paused=!0,o),n||{})),r=function(u,c,l){return s.resetTo(i,u,c,l)};return r.tween=s,r},isTweening:function(t){return je.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=ia(t.ease,Tu.ease)),yw(Tu,t||{})},config:function(t){return yw(on,t||{})},registerEffect:function(t){var i=t.name,n=t.effect,o=t.plugins,s=t.defaults,r=t.extendTimeline;(o||"").split(",").forEach(function(a){return a&&!tn[a]&&!Zn[a]&&Nl(i+" effect requires "+a+" plugin.")}),Ak[i]=function(a,u,c){return n(Hn(a),An(u||{},s),c)},r&&(Si.prototype[i]=function(a,u,c){return this.add(Ak[i](a,Ro(u)?u:(c=u)&&{},this),c)})},registerEase:function(t,i){Bt[t]=ia(i)},parseEase:function(t,i){return arguments.length?ia(t,i):Bt},getById:function(t){return je.getById(t)},exportRoot:function(t,i){t===void 0&&(t={});var n=new Si(t),o,s;for(n.smoothChildTiming=nn(t.smoothChildTiming),je.remove(n),n._dp=0,n._time=n._tTime=je._time,o=je._first;o;)s=o._next,(i||!(!o._dur&&o instanceof Xe&&o.vars.onComplete===o._targets[0]))&&vo(n,o,o._start-o._delay),o=s;return vo(je,n,0),n},context:function(t,i){return t?new uv(t,i):Ge},matchMedia:function(t){return new _j(t)},matchMediaRefresh:function(){return na.forEach(function(t){var i=t.conditions,n,o;for(o in i)i[o]&&(i[o]=!1,n=1);n&&t.revert()})||uM()},addEventListener:function(t,i){var n=If[t]||(If[t]=[]);~n.indexOf(i)||n.push(i)},removeEventListener:function(t,i){var n=If[t],o=n&&n.indexOf(i);o>=0&&n.splice(o,1)},utils:{wrap:q0,wrapYoyo:Q0,distribute:Aw,random:qw,snap:Xw,normalize:X0,getUnit:Zi,clamp:b0,splitColor:Lw,toArray:Hn,selector:sM,mapRange:Bw,pipe:H0,unitize:A0,interpolate:B0,shuffle:Hw},install:jw,effects:Ak,ticker:en,updateRoot:Si.updateRoot,plugins:tn,globalTimeline:je,core:{PropTween:Yi,globals:Nw,Tween:Xe,Timeline:Si,Animation:Ul,getCache:lr,_removeLinkedListItem:Ef,reverting:function(){return Vi},context:function(t){return t&&Ge&&(Ge.data.push(t),t._ctx=Ge),Ge},suppressOverwrites:function(t){return cM=t}}};Ci("to,from,fromTo,delayedCall,set,killTweensOf",function(e){return vf[e]=Xe[e]});en.add(Si.updateRoot);Nu=vf.to({},{duration:0});var gj=function(t,i){for(var n=t._pt;n&&n.p!==i&&n.op!==i&&n.fp!==i;)n=n._next;return n},kj=function(t,i){var n=t._targets,o,s,r;for(o in i)for(s=n.length;s--;)r=t._ptLookup[s][o],r&&(r=r.d)&&(r._pt&&(r=gj(r,o)),r&&r.modifier&&r.modifier(i[o],t,n[s],o))},Dk=function(t,i){return{name:t,rawVars:1,init:function(o,s,r){r._onInit=function(a){var u,c;if(ci(s)&&(u={},Ci(s,function(l){return u[l]=1}),s=u),i){u={};for(c in s)u[c]=i(s[c]);s=u}kj(a,s)}}}},Fi=vf.registerPlugin({name:"attr",init:function(t,i,n,o,s){var r,a,u;this.tween=n;for(r in i)u=t.getAttribute(r)||"",a=this.add(t,"setAttribute",(u||0)+"",i[r],o,s,0,0,r),a.op=r,a.b=u,this._props.push(r)},render:function(t,i){for(var n=i._pt;n;)Vi?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,i){for(var n=i.length;n--;)this.add(t,n,t[n]||0,i[n],0,0,0,0,0,1)}},Dk("roundProps",rM),Dk("modifiers"),Dk("snap",Xw))||vf;Xe.version=Si.version=Fi.version="3.12.5";Fw=1;lM()&&$u();var Mj=Bt.Power0,pj=Bt.Power1,Oj=Bt.Power2,Ij=Bt.Power3,yj=Bt.Power4,Sj=Bt.Linear,Zj=Bt.Quad,wj=Bt.Cubic,vj=Bt.Quart,Rj=Bt.Quint,Kj=Bt.Strong,Ej=Bt.Elastic,Vj=Bt.Back,Gj=Bt.SteppedEase,Fj=Bt.Bounce,jj=Bt.Sine,Nj=Bt.Expo,Tj=Bt.Circ;var cv,mr,Ju,FM,xa,Wj,lv,jM,Uj=function(){return typeof window<"u"},ds={},la=180/Math.PI,bu=Math.PI/180,Yu=Math.atan2,xv=1e8,NM=/([A-Z])/g,$j=/(left|right|width|margin|padding|x)/i,Cj=/[\s,\(]\S/,Ko={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},KM=function(t,i){return i.set(i.t,i.p,Math.round((i.s+i.c*t)*1e4)/1e4+i.u,i)},Yj=function(t,i){return i.set(i.t,i.p,t===1?i.e:Math.round((i.s+i.c*t)*1e4)/1e4+i.u,i)},Jj=function(t,i){return i.set(i.t,i.p,t?Math.round((i.s+i.c*t)*1e4)/1e4+i.u:i.b,i)},bj=function(t,i){var n=i.s+i.c*t;i.set(i.t,i.p,~~(n+(n<0?-.5:.5))+i.u,i)},kv=function(t,i){return i.set(i.t,i.p,t?i.e:i.b,i)},Mv=function(t,i){return i.set(i.t,i.p,t!==1?i.b:i.e,i)},zj=function(t,i,n){return t.style[i]=n},Hj=function(t,i,n){return t.style.setProperty(i,n)},Aj=function(t,i,n){return t._gsap[i]=n},Xj=function(t,i,n){return t._gsap.scaleX=t._gsap.scaleY=n},qj=function(t,i,n,o,s){var r=t._gsap;r.scaleX=r.scaleY=n,r.renderTransform(s,r)},Qj=function(t,i,n,o,s){var r=t._gsap;r[i]=n,r.renderTransform(s,r)},Ne="transform",sn=Ne+"Origin",Bj=function e(t,i){var n=this,o=this.target,s=o.style,r=o._gsap;if(t in ds&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Ko[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=fs(o,a)}):this.tfm[t]=r.x?r[t]:fs(o,t),t===sn&&(this.tfm.zOrigin=r.zOrigin);else return Ko.transform.split(",").forEach(function(a){return e.call(n,a,i)});if(this.props.indexOf(Ne)>=0)return;r.svg&&(this.svgo=o.getAttribute("data-svg-origin"),this.props.push(sn,i,"")),t=Ne}(s||i)&&this.props.push(t,i,s[t])},pv=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Dj=function(){var t=this.props,i=this.target,n=i.style,o=i._gsap,s,r;for(s=0;s<t.length;s+=3)t[s+1]?i[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(NM,"-$1").toLowerCase());if(this.tfm){for(r in this.tfm)o[r]=this.tfm[r];o.svg&&(o.renderTransform(),i.setAttribute("data-svg-origin",this.svgo||"")),s=jM(),(!s||!s.isStart)&&!n[Ne]&&(pv(n),o.zOrigin&&n[sn]&&(n[sn]+=" "+o.zOrigin+"px",o.zOrigin=0,o.renderTransform()),o.uncache=1)}},Ov=function(t,i){var n={target:t,props:[],revert:Dj,save:Bj};return t._gsap||Fi.core.getCache(t),i&&i.split(",").forEach(function(o){return n.save(o)}),n},Iv,EM=function(t,i){var n=mr.createElementNS?mr.createElementNS((i||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):mr.createElement(t);return n&&n.style?n:mr.createElement(t)},Eo=function e(t,i,n){var o=getComputedStyle(t);return o[i]||o.getPropertyValue(i.replace(NM,"-$1").toLowerCase())||o.getPropertyValue(i)||!n&&e(t,zu(i)||i,1)||""},hv="O,Moz,ms,Ms,Webkit".split(","),zu=function(t,i,n){var o=i||xa,s=o.style,r=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);r--&&!(hv[r]+t in s););return r<0?null:(r===3?"ms":r>=0?hv[r]:"")+t},VM=function(){Uj()&&window.document&&(cv=window,mr=cv.document,Ju=mr.documentElement,xa=EM("div")||{style:{}},Wj=EM("div"),Ne=zu(Ne),sn=Ne+"Origin",xa.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Iv=!!zu("perspective"),jM=Fi.core.reverting,FM=1)},vM=function e(t){var i=EM("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,o=this.nextSibling,s=this.style.cssText,r;if(Ju.appendChild(i),i.appendChild(this),this.style.display="block",t)try{r=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=e}catch{}else this._gsapBBox&&(r=this._gsapBBox());return n&&(o?n.insertBefore(this,o):n.appendChild(this)),Ju.removeChild(i),this.style.cssText=s,r},mv=function(t,i){for(var n=i.length;n--;)if(t.hasAttribute(i[n]))return t.getAttribute(i[n])},yv=function(t){var i;try{i=t.getBBox()}catch{i=vM.call(t,!0)}return i&&(i.width||i.height)||t.getBBox===vM||(i=vM.call(t,!0)),i&&!i.width&&!i.x&&!i.y?{x:+mv(t,["x","cx","x1"])||0,y:+mv(t,["y","cy","y1"])||0,width:0,height:0}:i},Sv=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&yv(t))},ha=function(t,i){if(i){var n=t.style,o;i in ds&&i!==sn&&(i=Ne),n.removeProperty?(o=i.substr(0,2),(o==="ms"||i.substr(0,6)==="webkit")&&(i="-"+i),n.removeProperty(o==="--"?i:i.replace(NM,"-$1").toLowerCase())):n.removeAttribute(i)}},fr=function(t,i,n,o,s,r){var a=new Yi(t._pt,i,n,0,1,r?Mv:kv);return t._pt=a,a.b=o,a.e=s,t._props.push(n),a},fv={deg:1,rad:1,turn:1},Pj={grid:1,flex:1},dr=function e(t,i,n,o){var s=parseFloat(n)||0,r=(n+"").trim().substr((s+"").length)||"px",a=xa.style,u=$j.test(i),c=t.tagName.toLowerCase()==="svg",l=(c?"client":"offset")+(u?"Width":"Height"),x=100,h=o==="px",m=o==="%",g,_,d,f;if(o===r||!s||fv[o]||fv[r])return s;if(r!=="px"&&!h&&(s=e(t,i,n,"px")),f=t.getCTM&&Sv(t),(m||r==="%")&&(ds[i]||~i.indexOf("adius")))return g=f?t.getBBox()[u?"width":"height"]:t[l],ze(m?s/g*x:s/100*g);if(a[u?"width":"height"]=x+(h?r:o),_=~i.indexOf("adius")||o==="em"&&t.appendChild&&!c?t:t.parentNode,f&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===mr||!_.appendChild)&&(_=mr.body),d=_._gsap,d&&m&&d.width&&u&&d.time===en.time&&!d.uncache)return ze(s/d.width*x);if(m&&(i==="height"||i==="width")){var k=t.style[i];t.style[i]=x+o,g=t[l],k?t.style[i]=k:ha(t,i)}else(m||r==="%")&&!Pj[Eo(_,"display")]&&(a.position=Eo(t,"position")),_===t&&(a.position="static"),_.appendChild(xa),g=xa[l],_.removeChild(xa),a.position="absolute";return u&&m&&(d=lr(_),d.time=en.time,d.width=_[l]),ze(h?g*s/x:g&&s?x/g*s:0)},fs=function(t,i,n,o){var s;return FM||VM(),i in Ko&&i!=="transform"&&(i=Ko[i],~i.indexOf(",")&&(i=i.split(",")[0])),ds[i]&&i!=="transform"?(s=Jl(t,o),s=i!=="transformOrigin"?s[i]:s.svg?s.origin:Nf(Eo(t,sn))+" "+s.zOrigin+"px"):(s=t.style[i],(!s||s==="auto"||o||~(s+"").indexOf("calc("))&&(s=jf[i]&&jf[i](t,i,n)||Eo(t,i)||gM(t,i)||(i==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?dr(t,i,s,n)+n:s},Lj=function(t,i,n,o){if(!n||n==="none"){var s=zu(i,t,1),r=s&&Eo(t,s,1);r&&r!==n?(i=s,n=r):i==="borderColor"&&(n=Eo(t,"borderTopColor"))}var a=new Yi(this._pt,t.style,i,0,1,SM),u=0,c=0,l,x,h,m,g,_,d,f,k,M,p,I;if(a.b=n,a.e=o,n+="",o+="",o==="auto"&&(_=t.style[i],t.style[i]=o,o=Eo(t,i)||o,_?t.style[i]=_:ha(t,i)),l=[n,o],kM(l),n=l[0],o=l[1],h=n.match(sa)||[],I=o.match(sa)||[],I.length){for(;x=sa.exec(o);)d=x[0],k=o.substring(u,x.index),g?g=(g+1)%5:(k.substr(-5)==="rgba("||k.substr(-5)==="hsla(")&&(g=1),d!==(_=h[c++]||"")&&(m=parseFloat(_)||0,p=_.substr((m+"").length),d.charAt(1)==="="&&(d=ra(m,d)+p),f=parseFloat(d),M=d.substr((f+"").length),u=sa.lastIndex-M.length,M||(M=M||on.units[i]||p,u===o.length&&(o+=M,a.e+=M)),p!==M&&(m=dr(t,i,_,M)||0),a._pt={_next:a._pt,p:k||c===1?k:",",s:m,c:f-m,m:g&&g<4||i==="zIndex"?Math.round:0});a.c=u<o.length?o.substring(u,o.length):""}else a.r=i==="display"&&o==="none"?Mv:kv;return hM.test(o)&&(a.e=0),this._pt=a,a},dv={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},tN=function(t){var i=t.split(" "),n=i[0],o=i[1]||"50%";return(n==="top"||n==="bottom"||o==="left"||o==="right")&&(t=n,n=o,o=t),i[0]=dv[n]||n,i[1]=dv[o]||o,i.join(" ")},eN=function(t,i){if(i.tween&&i.tween._time===i.tween._dur){var n=i.t,o=n.style,s=i.u,r=n._gsap,a,u,c;if(s==="all"||s===!0)o.cssText="",u=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],ds[a]&&(u=1,a=a==="transformOrigin"?sn:Ne),ha(n,a);u&&(ha(n,Ne),r&&(r.svg&&n.removeAttribute("transform"),Jl(n,1),r.uncache=1,pv(o)))}},jf={clearProps:function(t,i,n,o,s){if(s.data!=="isFromStart"){var r=t._pt=new Yi(t._pt,i,n,0,0,eN);return r.u=o,r.pr=-10,r.tween=s,t._props.push(n),1}}},Yl=[1,0,0,1,0,0],Zv={},wv=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},_v=function(t){var i=Eo(t,Ne);return wv(i)?Yl:i.substr(7).match(xM).map(ze)},TM=function(t,i){var n=t._gsap||lr(t),o=t.style,s=_v(t),r,a,u,c;return n.svg&&t.getAttribute("transform")?(u=t.transform.baseVal.consolidate().matrix,s=[u.a,u.b,u.c,u.d,u.e,u.f],s.join(",")==="1,0,0,1,0,0"?Yl:s):(s===Yl&&!t.offsetParent&&t!==Ju&&!n.svg&&(u=o.display,o.display="block",r=t.parentNode,(!r||!t.offsetParent)&&(c=1,a=t.nextElementSibling,Ju.appendChild(t)),s=_v(t),u?o.display=u:ha(t,"display"),c&&(a?r.insertBefore(t,a):r?r.appendChild(t):Ju.removeChild(t))),i&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},GM=function(t,i,n,o,s,r){var a=t._gsap,u=s||TM(t,!0),c=a.xOrigin||0,l=a.yOrigin||0,x=a.xOffset||0,h=a.yOffset||0,m=u[0],g=u[1],_=u[2],d=u[3],f=u[4],k=u[5],M=i.split(" "),p=parseFloat(M[0])||0,I=parseFloat(M[1])||0,w,Z,R,O;n?u!==Yl&&(Z=m*d-g*_)&&(R=p*(d/Z)+I*(-_/Z)+(_*k-d*f)/Z,O=p*(-g/Z)+I*(m/Z)-(m*k-g*f)/Z,p=R,I=O):(w=yv(t),p=w.x+(~M[0].indexOf("%")?p/100*w.width:p),I=w.y+(~(M[1]||M[0]).indexOf("%")?I/100*w.height:I)),o||o!==!1&&a.smooth?(f=p-c,k=I-l,a.xOffset=x+(f*m+k*_)-f,a.yOffset=h+(f*g+k*d)-k):a.xOffset=a.yOffset=0,a.xOrigin=p,a.yOrigin=I,a.smooth=!!o,a.origin=i,a.originIsAbsolute=!!n,t.style[sn]="0px 0px",r&&(fr(r,a,"xOrigin",c,p),fr(r,a,"yOrigin",l,I),fr(r,a,"xOffset",x,a.xOffset),fr(r,a,"yOffset",h,a.yOffset)),t.setAttribute("data-svg-origin",p+" "+I)},Jl=function(t,i){var n=t._gsap||new MM(t);if("x"in n&&!i&&!n.uncache)return n;var o=t.style,s=n.scaleX<0,r="px",a="deg",u=getComputedStyle(t),c=Eo(t,sn)||"0",l,x,h,m,g,_,d,f,k,M,p,I,w,Z,R,O,S,E,N,T,$,z,U,Y,Q,ut,it,lt,Gt,Nt,Pt,Lt;return l=x=h=_=d=f=k=M=p=0,m=g=1,n.svg=!!(t.getCTM&&Sv(t)),u.translate&&((u.translate!=="none"||u.scale!=="none"||u.rotate!=="none")&&(o[Ne]=(u.translate!=="none"?"translate3d("+(u.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(u.rotate!=="none"?"rotate("+u.rotate+") ":"")+(u.scale!=="none"?"scale("+u.scale.split(" ").join(",")+") ":"")+(u[Ne]!=="none"?u[Ne]:"")),o.scale=o.rotate=o.translate="none"),Z=TM(t,n.svg),n.svg&&(n.uncache?(Q=t.getBBox(),c=n.xOrigin-Q.x+"px "+(n.yOrigin-Q.y)+"px",Y=""):Y=!i&&t.getAttribute("data-svg-origin"),GM(t,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,Z)),I=n.xOrigin||0,w=n.yOrigin||0,Z!==Yl&&(E=Z[0],N=Z[1],T=Z[2],$=Z[3],l=z=Z[4],x=U=Z[5],Z.length===6?(m=Math.sqrt(E*E+N*N),g=Math.sqrt($*$+T*T),_=E||N?Yu(N,E)*la:0,k=T||$?Yu(T,$)*la+_:0,k&&(g*=Math.abs(Math.cos(k*bu))),n.svg&&(l-=I-(I*E+w*T),x-=w-(I*N+w*$))):(Lt=Z[6],Nt=Z[7],it=Z[8],lt=Z[9],Gt=Z[10],Pt=Z[11],l=Z[12],x=Z[13],h=Z[14],R=Yu(Lt,Gt),d=R*la,R&&(O=Math.cos(-R),S=Math.sin(-R),Y=z*O+it*S,Q=U*O+lt*S,ut=Lt*O+Gt*S,it=z*-S+it*O,lt=U*-S+lt*O,Gt=Lt*-S+Gt*O,Pt=Nt*-S+Pt*O,z=Y,U=Q,Lt=ut),R=Yu(-T,Gt),f=R*la,R&&(O=Math.cos(-R),S=Math.sin(-R),Y=E*O-it*S,Q=N*O-lt*S,ut=T*O-Gt*S,Pt=$*S+Pt*O,E=Y,N=Q,T=ut),R=Yu(N,E),_=R*la,R&&(O=Math.cos(R),S=Math.sin(R),Y=E*O+N*S,Q=z*O+U*S,N=N*O-E*S,U=U*O-z*S,E=Y,z=Q),d&&Math.abs(d)+Math.abs(_)>359.9&&(d=_=0,f=180-f),m=ze(Math.sqrt(E*E+N*N+T*T)),g=ze(Math.sqrt(U*U+Lt*Lt)),R=Yu(z,U),k=Math.abs(R)>2e-4?R*la:0,p=Pt?1/(Pt<0?-Pt:Pt):0),n.svg&&(Y=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!wv(Eo(t,Ne)),Y&&t.setAttribute("transform",Y))),Math.abs(k)>90&&Math.abs(k)<270&&(s?(m*=-1,k+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,k+=k<=0?180:-180)),i=i||n.uncache,n.x=l-((n.xPercent=l&&(!i&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-l)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+r,n.y=x-((n.yPercent=x&&(!i&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-x)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+r,n.z=h+r,n.scaleX=ze(m),n.scaleY=ze(g),n.rotation=ze(_)+a,n.rotationX=ze(d)+a,n.rotationY=ze(f)+a,n.skewX=k+a,n.skewY=M+a,n.transformPerspective=p+r,(n.zOrigin=parseFloat(c.split(" ")[2])||!i&&n.zOrigin||0)&&(o[sn]=Nf(c)),n.xOffset=n.yOffset=0,n.force3D=on.force3D,n.renderTransform=n.svg?nN:Iv?vv:iN,n.uncache=0,n},Nf=function(t){return(t=t.split(" "))[0]+" "+t[1]},RM=function(t,i,n){var o=Zi(i);return ze(parseFloat(i)+parseFloat(dr(t,"x",n+"px",o)))+o},iN=function(t,i){i.z="0px",i.rotationY=i.rotationX="0deg",i.force3D=0,vv(t,i)},ua="0deg",Cl="0px",ca=") ",vv=function(t,i){var n=i||this,o=n.xPercent,s=n.yPercent,r=n.x,a=n.y,u=n.z,c=n.rotation,l=n.rotationY,x=n.rotationX,h=n.skewX,m=n.skewY,g=n.scaleX,_=n.scaleY,d=n.transformPerspective,f=n.force3D,k=n.target,M=n.zOrigin,p="",I=f==="auto"&&t&&t!==1||f===!0;if(M&&(x!==ua||l!==ua)){var w=parseFloat(l)*bu,Z=Math.sin(w),R=Math.cos(w),O;w=parseFloat(x)*bu,O=Math.cos(w),r=RM(k,r,Z*O*-M),a=RM(k,a,-Math.sin(w)*-M),u=RM(k,u,R*O*-M+M)}d!==Cl&&(p+="perspective("+d+ca),(o||s)&&(p+="translate("+o+"%, "+s+"%) "),(I||r!==Cl||a!==Cl||u!==Cl)&&(p+=u!==Cl||I?"translate3d("+r+", "+a+", "+u+") ":"translate("+r+", "+a+ca),c!==ua&&(p+="rotate("+c+ca),l!==ua&&(p+="rotateY("+l+ca),x!==ua&&(p+="rotateX("+x+ca),(h!==ua||m!==ua)&&(p+="skew("+h+", "+m+ca),(g!==1||_!==1)&&(p+="scale("+g+", "+_+ca),k.style[Ne]=p||"translate(0, 0)"},nN=function(t,i){var n=i||this,o=n.xPercent,s=n.yPercent,r=n.x,a=n.y,u=n.rotation,c=n.skewX,l=n.skewY,x=n.scaleX,h=n.scaleY,m=n.target,g=n.xOrigin,_=n.yOrigin,d=n.xOffset,f=n.yOffset,k=n.forceCSS,M=parseFloat(r),p=parseFloat(a),I,w,Z,R,O;u=parseFloat(u),c=parseFloat(c),l=parseFloat(l),l&&(l=parseFloat(l),c+=l,u+=l),u||c?(u*=bu,c*=bu,I=Math.cos(u)*x,w=Math.sin(u)*x,Z=Math.sin(u-c)*-h,R=Math.cos(u-c)*h,c&&(l*=bu,O=Math.tan(c-l),O=Math.sqrt(1+O*O),Z*=O,R*=O,l&&(O=Math.tan(l),O=Math.sqrt(1+O*O),I*=O,w*=O)),I=ze(I),w=ze(w),Z=ze(Z),R=ze(R)):(I=x,R=h,w=Z=0),(M&&!~(r+"").indexOf("px")||p&&!~(a+"").indexOf("px"))&&(M=dr(m,"x",r,"px"),p=dr(m,"y",a,"px")),(g||_||d||f)&&(M=ze(M+g-(g*I+_*Z)+d),p=ze(p+_-(g*w+_*R)+f)),(o||s)&&(O=m.getBBox(),M=ze(M+o/100*O.width),p=ze(p+s/100*O.height)),O="matrix("+I+","+w+","+Z+","+R+","+M+","+p+")",m.setAttribute("transform",O),k&&(m.style[Ne]=O)},oN=function(t,i,n,o,s){var r=360,a=ci(s),u=parseFloat(s)*(a&&~s.indexOf("rad")?la:1),c=u-o,l=o+c+"deg",x,h;return a&&(x=s.split("_")[1],x==="short"&&(c%=r,c!==c%(r/2)&&(c+=c<0?r:-r)),x==="cw"&&c<0?c=(c+r*xv)%r-~~(c/r)*r:x==="ccw"&&c>0&&(c=(c-r*xv)%r-~~(c/r)*r)),t._pt=h=new Yi(t._pt,i,n,o,c,Yj),h.e=l,h.u="deg",t._props.push(n),h},gv=function(t,i){for(var n in i)t[n]=i[n];return t},sN=function(t,i,n){var o=gv({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",r=n.style,a,u,c,l,x,h,m,g;o.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),r[Ne]=i,a=Jl(n,1),ha(n,Ne),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ne],r[Ne]=i,a=Jl(n,1),r[Ne]=c);for(u in ds)c=o[u],l=a[u],c!==l&&s.indexOf(u)<0&&(m=Zi(c),g=Zi(l),x=m!==g?dr(n,u,c,g):parseFloat(c),h=parseFloat(l),t._pt=new Yi(t._pt,a,u,x,h-x,KM),t._pt.u=g||0,t._props.push(u));gv(a,o)};Ci("padding,margin,Width,Radius",function(e,t){var i="Top",n="Right",o="Bottom",s="Left",r=(t<3?[i,n,o,s]:[i+s,i+n,o+n,o+s]).map(function(a){return t<2?e+a:"border"+a+e});jf[t>1?"border"+e:e]=function(a,u,c,l,x){var h,m;if(arguments.length<4)return h=r.map(function(g){return fs(a,g,c)}),m=h.join(" "),m.split(h[0]).length===5?h[0]:m;h=(l+"").split(" "),m={},r.forEach(function(g,_){return m[g]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(u,m,x)}});var WM={name:"css",register:VM,targetTest:function(t){return t.style&&t.nodeType},init:function(t,i,n,o,s){var r=this._props,a=t.style,u=n.vars.startAt,c,l,x,h,m,g,_,d,f,k,M,p,I,w,Z,R;FM||VM(),this.styles=this.styles||Ov(t),R=this.styles.props,this.tween=n;for(_ in i)if(_!=="autoRound"&&(l=i[_],!(tn[_]&&OM(_,i,n,o,t,s)))){if(m=typeof l,g=jf[_],m==="function"&&(l=l.call(n,o,t,s),m=typeof l),m==="string"&&~l.indexOf("random(")&&(l=Cu(l)),g)g(this,t,_,l,n)&&(Z=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),l+="",hs.lastIndex=0,hs.test(c)||(d=Zi(c),f=Zi(l)),f?d!==f&&(c=dr(t,_,c,f)+f):d&&(l+=d),this.add(a,"setProperty",c,l,o,s,0,0,_),r.push(_),R.push(_,0,a[_]);else if(m!=="undefined"){if(u&&_ in u?(c=typeof u[_]=="function"?u[_].call(n,o,t,s):u[_],ci(c)&&~c.indexOf("random(")&&(c=Cu(c)),Zi(c+"")||c==="auto"||(c+=on.units[_]||Zi(fs(t,_))||""),(c+"").charAt(1)==="="&&(c=fs(t,_))):c=fs(t,_),h=parseFloat(c),k=m==="string"&&l.charAt(1)==="="&&l.substr(0,2),k&&(l=l.substr(2)),x=parseFloat(l),_ in Ko&&(_==="autoAlpha"&&(h===1&&fs(t,"visibility")==="hidden"&&x&&(h=0),R.push("visibility",0,a.visibility),fr(this,a,"visibility",h?"inherit":"hidden",x?"inherit":"hidden",!x)),_!=="scale"&&_!=="transform"&&(_=Ko[_],~_.indexOf(",")&&(_=_.split(",")[0]))),M=_ in ds,M){if(this.styles.save(_),p||(I=t._gsap,I.renderTransform&&!i.parseTransform||Jl(t,i.parseTransform),w=i.smoothOrigin!==!1&&I.smooth,p=this._pt=new Yi(this._pt,a,Ne,0,1,I.renderTransform,I,0,-1),p.dep=1),_==="scale")this._pt=new Yi(this._pt,I,"scaleY",I.scaleY,(k?ra(I.scaleY,k+x):x)-I.scaleY||0,KM),this._pt.u=0,r.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(sn,0,a[sn]),l=tN(l),I.svg?GM(t,l,0,w,0,this):(f=parseFloat(l.split(" ")[2])||0,f!==I.zOrigin&&fr(this,I,"zOrigin",I.zOrigin,f),fr(this,a,_,Nf(c),Nf(l)));continue}else if(_==="svgOrigin"){GM(t,l,1,w,0,this);continue}else if(_ in Zv){oN(this,I,_,h,k?ra(h,k+l):l);continue}else if(_==="smoothOrigin"){fr(this,I,"smooth",I.smooth,l);continue}else if(_==="force3D"){I[_]=l;continue}else if(_==="transform"){sN(this,l,t);continue}}else _ in a||(_=zu(_)||_);if(M||(x||x===0)&&(h||h===0)&&!Cj.test(l)&&_ in a)d=(c+"").substr((h+"").length),x||(x=0),f=Zi(l)||(_ in on.units?on.units[_]:d),d!==f&&(h=dr(t,_,c,f)),this._pt=new Yi(this._pt,M?I:a,_,h,(k?ra(h,k+x):x)-h,!M&&(f==="px"||_==="zIndex")&&i.autoRound!==!1?bj:KM),this._pt.u=f||0,d!==f&&f!=="%"&&(this._pt.b=c,this._pt.r=Jj);else if(_ in a)Lj.call(this,t,_,c,k?k+l:l);else if(_ in t)this.add(t,_,c||t[_],k?k+l:l,o,s);else if(_!=="parseTransform"){Kf(_,l);continue}M||(_ in a?R.push(_,0,a[_]):R.push(_,1,c||t[_])),r.push(_)}}Z&&wM(this)},render:function(t,i){if(i.tween._time||!jM())for(var n=i._pt;n;)n.r(t,n.d),n=n._next;else i.styles.revert()},get:fs,aliases:Ko,getSetter:function(t,i,n){var o=Ko[i];return o&&o.indexOf(",")<0&&(i=o),i in ds&&i!==sn&&(t._gsap.x||fs(t,"x"))?n&&lv===n?i==="scale"?Xj:Aj:(lv=n||{})&&(i==="scale"?qj:Qj):t.style&&!Rf(t.style[i])?zj:~i.indexOf("-")?Hj:Ff(t,i)},core:{_removeProperty:ha,_getMatrix:TM}};Fi.utils.checkPrefix=zu;Fi.core.getStyleSaver=Ov;(function(e,t,i,n){var o=Ci(e+","+t+","+i,function(s){ds[s]=1});Ci(t,function(s){on.units[s]="deg",Zv[s]=1}),Ko[o[13]]=e+","+t,Ci(n,function(s){var r=s.split(":");Ko[r[1]]=o[r[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ci("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(e){on.units[e]="px"});Fi.registerPlugin(WM);var Ji=Fi.registerPlugin(WM)||Fi,RU=Ji.core.Tween;var wn=me(ui(),1),rN=({show:e})=>{let t=(0,ma.useRef)(null),i=(0,ma.useRef)(null),n=(0,ma.useRef)(null),o=(u,c="")=>u.split("").map((l,x)=>(0,wn.jsx)("span",{className:`overlay-text__char ${c}`,children:l===" "?"\xA0":l},x)),s=(u,c)=>{let l=u.currentTarget,x=l.querySelectorAll(".overlay-text__link-primary span"),h=l.querySelectorAll(".overlay-text__link-secondary span");Ji.killTweensOf([...Array.from(x),...Array.from(h)]),c?(Ji.to(x,{y:"-100%",opacity:0,duration:.5,stagger:.012,ease:"power3.inOut"}),Ji.fromTo(h,{y:"100%",opacity:0},{y:"0%",opacity:1,duration:.5,stagger:.012,ease:"power3.out"})):(Ji.to(x,{y:"0%",opacity:1,duration:.5,stagger:.012,ease:"power3.out"}),Ji.to(h,{y:"100%",opacity:0,duration:.5,stagger:.012,ease:"power3.inOut"}))};return(0,ma.useEffect)(()=>{if(!e)return;let u=Ji.timeline({delay:.1});if(i.current){let l=i.current.querySelectorAll("span");u.fromTo(l,{y:120,opacity:0,rotateX:-90},{y:0,opacity:1,rotateX:0,stagger:.03,duration:1.8,ease:"expo.out"})}if(n.current){let l=n.current.querySelectorAll("span");u.fromTo(l,{opacity:0,y:15},{opacity:1,y:0,stagger:.003,duration:1.2,ease:"power4.out"},"-=1.4")}let c=t.current?.querySelectorAll(".overlay-text__social-link");c&&u.fromTo(c,{opacity:0,y:20},{opacity:1,y:0,stagger:.08,duration:1,ease:"power3.out"},"-=1.2")},[e]),(0,ma.useEffect)(()=>{let u=c=>{let{progress:l}=c.detail,h=Math.max(0,1-l/.12);t.current&&Ji.to(t.current,{opacity:h,y:-l*250,scale:1+l*.05,duration:.3,overwrite:"auto"})};return window.addEventListener("lenis-scroll",u),()=>window.removeEventListener("lenis-scroll",u)},[]),(0,wn.jsxs)("div",{ref:t,className:`overlay-text ${e?"is-visible":""}`,children:[(0,wn.jsx)("div",{className:"overlay-text__center",children:(0,wn.jsx)("h1",{ref:i,className:"overlay-text__title",children:o("LOREM IPSUM")})}),(0,wn.jsxs)("div",{className:"overlay-text__footer",children:[(0,wn.jsx)("div",{className:"overlay-text__links",children:["INSTAGRAM","X / TWITTER","LINKEDIN"].map(u=>(0,wn.jsxs)("a",{href:"/",className:"overlay-text__social-link",onClick:c=>c.preventDefault(),onMouseEnter:c=>s(c,!0),onMouseLeave:c=>s(c,!1),children:[(0,wn.jsx)("div",{className:"overlay-text__link-primary",children:o(u)}),(0,wn.jsx)("div",{className:"overlay-text__link-secondary",children:o(u)})]},u))}),(0,wn.jsx)("div",{className:"overlay-text__card",children:(0,wn.jsx)("p",{ref:n,className:"overlay-text__body",children:o("LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.")})})]})]})},Rv=rN;var bl=me(Rn(),1);var Ev=me(ui(),1),aN=()=>{let e=(0,bl.useRef)(null),t=(0,bl.useRef)(new Wt(0,0));return(0,bl.useEffect)(()=>{let i=e.current;if(!i)return;let n=document.createElement("video");n.src="https://vjs.zencdn.net/v/oceans.mp4",n.crossOrigin="anonymous",n.loop=!0,n.muted=!0,n.playsInline=!0;let o=()=>{n.play().catch(()=>{}),window.removeEventListener("mousedown",o)};window.addEventListener("mousedown",o),n.play().catch(()=>{});let s=new no,r=new ei(22,window.innerWidth/window.innerHeight,.1,1e3);r.position.set(0,0,80);let a=new Zo({alpha:!0,antialias:!0,powerPreference:"high-performance"});a.setSize(window.innerWidth,window.innerHeight),a.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.appendChild(a.domElement);let c=new cs().load("https://raw.githubusercontent.com/nidorx/matcaps/master/512/3B3C3F_DAD9D5_929290_ABACAC.png");c.colorSpace=di;let l=new hl(n);l.colorSpace=di;let x=new On(35,20,.5,128,1,16),h=new ni({uniforms:{uCurveRadius:{value:32},uMatcap:{value:c},uMouse:{value:new Wt(0,0)},uProgress:{value:0},uTexture:{value:l},uTime:{value:0}},transparent:!0,depthWrite:!1,vertexShader:"...",fragmentShader:"..."}),m=new Fe(x,h);m.visible=!1,s.add(m);let g=I=>{t.current.x=I.clientX/window.innerWidth*2-1,t.current.y=-(I.clientY/window.innerHeight)*2+1};window.addEventListener("mousemove",g);let _=0,d=0,f=I=>{_=I.detail.progress};window.addEventListener("lenis-scroll",f);let k=new _l,M,p=()=>{M=requestAnimationFrame(p),d+=(_-d)*.1,h.uniforms.uTime.value=k.getElapsedTime(),h.uniforms.uProgress.value=d,h.uniforms.uMouse.value.lerp(t.current,.08),m.position.y=Math.sin(k.getElapsedTime()*.5)*.5,d<.075||d>.42?m.visible=!1:(m.visible=!0,a.render(s,r))};return p(),()=>{window.removeEventListener("mousemove",g),window.removeEventListener("lenis-scroll",f),window.removeEventListener("mousedown",o),cancelAnimationFrame(M),i.contains(a.domElement)&&i.removeChild(a.domElement),a.dispose(),n.pause()}},[]),(0,Ev.jsx)("div",{ref:e,className:"interactive-video-plane"})},Kv=aN;var Vo=me(Rn(),1);var Vv="./assets/7-I4QFDFGC.jpg";var Gv="./assets/1-CS55Q5LZ.avif";var Fv="./assets/2-ZEOEPIML.avif";var jv="./assets/3-VQ62EGEQ.avif";var Nv="./assets/4-SHZ3BEZH.avif";var Tv="./assets/5-3EHBCWT5.avif";var Xn=me(ui(),1),Hu=[{id:0,title:"NEURAL LINK",category:"Biotech",year:"2024",texture:Gv},{id:1,title:"HYPER GRID",category:"Infrastructure",year:"2024",texture:Fv},{id:2,title:"VOID SPACE",category:"Energy",year:"2025",texture:jv},{id:3,title:"SONIC FLUX",category:"Audio",year:"2023",texture:Nv},{id:4,title:"AERO DYNAMICS",category:"Automotive",year:"2024",texture:Tv}],fN=()=>{let e=(0,Vo.useRef)(null),t=(0,Vo.useRef)(null),[i,n]=(0,Vo.useState)(null),o=(0,Vo.useRef)(null);return(0,Vo.useLayoutEffect)(()=>{if(!i||!t.current)return;let s=t.current.querySelector("h2"),r=t.current.querySelectorAll("[data-meta]");if(!s)return;let a=Ji.timeline();a.fromTo(s,{y:60,opacity:0,rotateX:-15},{y:0,opacity:1,rotateX:0,duration:.6,ease:"power4.out"}),r.length&&a.fromTo(r,{y:30,opacity:0},{y:0,opacity:1,duration:.4,stagger:.1,ease:"power2.out"},"-=0.4")},[i]),(0,Vo.useEffect)(()=>{let s=e.current;if(!s)return;let r=new ei(45,window.innerWidth/window.innerHeight,.1,400),a=()=>{let p=window.innerWidth,I=window.innerHeight;r.aspect=p/I,r.updateProjectionMatrix(),r.position.set(0,0,p/I<1?45:30)};a();let u=new no,c=new Zo({alpha:!0,antialias:!0});c.setSize(window.innerWidth,window.innerHeight),c.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.appendChild(c.domElement);let l=new eo;u.add(l);let x=new cs,h=x.load(Vv),m=[],g=18;Hu.forEach(p=>{let I=x.load(p.texture),w=new ni({uniforms:{uTexture:{value:I},uMatcap:{value:h},uDistanceFromCenter:{value:0},uOpacity:{value:0}},transparent:!0,vertexShader:`
          varying vec2 vUv;
          varying vec3 vNormal;
          varying vec3 vViewPosition;
          void main() {
            vUv = uv;
            vNormal = normalize(normalMatrix * normal);
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            vViewPosition = -mvPosition.xyz;
            gl_Position = projectionMatrix * mvPosition;
          }
        `,fragmentShader:`
          uniform sampler2D uTexture;
          uniform sampler2D uMatcap;
          uniform float uDistanceFromCenter;
          uniform float uOpacity;
          varying vec2 vUv;
          varying vec3 vNormal;
          varying vec3 vViewPosition;
          void main() {
            float focus = 1.0 - smoothstep(0.0, 1.5, abs(uDistanceFromCenter));
            vec4 tex = texture2D(uTexture, vUv);
            vec2 mUv = vNormal.xy * 0.495 + 0.5;
            vec3 refl = texture2D(uMatcap, mUv).rgb;
            vec3 finalColor = mix(vec3(0.1), tex.rgb, focus) + refl * 0.4;
            gl_FragColor = vec4(finalColor, mix(0.4, 0.95, focus) * uOpacity);
          }
        `}),Z=new Fe(new On(10,6.25,.05),w);Z.visible=!1,l.add(Z),m.push(Z)});let _={scroll:0,target:0},d=p=>{let I=p.detail;_.target=I.progress};window.addEventListener("lenis-scroll",d);let f=()=>{a(),c.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",f);let k=()=>{requestAnimationFrame(k),_.scroll+=(_.target-_.scroll)*.08;let p=M(.3,.45,_.scroll)*(1-M(.85,.95,_.scroll)),I=_.scroll>.52?(_.scroll-.52)/.33*(Hu.length+.3):0;m.forEach((Z,R)=>{let O=Z.material,S=R-I,E=S*(Math.PI/5);Z.position.set(Math.sin(E)*g+40*(1-p),S*-4,Math.cos(E)*g),Z.rotation.y=E,O.uniforms.uDistanceFromCenter.value=S,O.uniforms.uOpacity.value=p,Z.visible=p>.001&&Math.abs(S)<6}),p>.01&&c.render(u,r);let w=Math.round(I);w>=0&&w<Hu.length?o.current!==Hu[w].id&&(o.current=Hu[w].id,n(Hu[w])):(o.current=null,n(null))};k();function M(p,I,w){let Z=Math.max(0,Math.min(1,(w-p)/(I-p)));return Z*Z*(3-2*Z)}return()=>{window.removeEventListener("lenis-scroll",d),window.removeEventListener("resize",f),c.dispose(),s.removeChild(c.domElement)}},[]),(0,Xn.jsxs)(Xn.Fragment,{children:[(0,Xn.jsx)("div",{ref:e,className:"work-section__images"}),(0,Xn.jsx)("div",{ref:t,className:"work-section__text",children:i&&(0,Xn.jsxs)("div",{children:[(0,Xn.jsx)("h2",{className:"work-section__title",children:i.title}),(0,Xn.jsxs)("div",{className:"work-section__meta",children:[(0,Xn.jsxs)("span",{"data-meta":!0,className:"work-section__year",children:["// ",i.year]}),(0,Xn.jsxs)("p",{"data-meta":!0,className:"work-section__category",children:[i.category," UNIT"]})]})]})})]})},Wv=fN;var Au=me(Rn(),1),Tf=me(ui(),1),dN=()=>{let e=(0,Au.useRef)(null),t=(0,Au.useRef)(null),i=(0,Au.useRef)(0);return(0,Au.useEffect)(()=>{let n=0,o=0,s,r=()=>{i.current+=(n-i.current)*.15;let u=.85,c=1,l=window.innerHeight;if(o>=u){let x=Math.min(1,(o-u)/(c-u)),h=1-Math.pow(1-x,3);l=window.innerHeight*(1-h)}if(e.current){let x=window.innerWidth,h=window.innerHeight,m=l+i.current,g=`
          M 0, ${h}
          L 0, ${l}
          Q ${x/2}, ${m} ${x}, ${l}
          L ${x}, ${h}
          Z
        `;e.current.setAttribute("d",g)}s=requestAnimationFrame(r)};r();let a=u=>{let{progress:c,velocity:l}=u.detail;o=c;let x=window.innerHeight*.25,h=4,m=l||0;n=Math.max(-x,Math.min(x,m*h))};return window.addEventListener("lenis-scroll",a),()=>{window.removeEventListener("lenis-scroll",a),cancelAnimationFrame(s)}},[]),(0,Tf.jsx)("div",{ref:t,className:"final-section",children:(0,Tf.jsx)("svg",{className:"final-section__svg",preserveAspectRatio:"none",children:(0,Tf.jsx)("path",{ref:e,className:"final-section__path"})})})},Uv=dN;var Xu=me(Rn(),1);var Wf=class{constructor(){dt(this,"group");dt(this,"vertexMat");dt(this,"edgeMat");dt(this,"coreMat");dt(this,"targetRotation",new Wt(0,0));dt(this,"currentRotation",new Wt(0,0));dt(this,"handleMouseMove",t=>{let i=t.clientX/window.innerWidth*2-1,n=-(t.clientY/window.innerHeight)*2+1,o=Math.PI/6,s=Math.PI/4,r=.6;this.targetRotation.y=s+i*r,this.targetRotation.x=o-n*r});this.group=new eo;let t=8,i=.05,n=.18,o=new On(t-.1,t-.1,t-.1);this.coreMat=new us({color:0,transparent:!0,opacity:1});let s=new Fe(o,this.coreMat);this.group.add(s);let r=t/2,a=new fl(i,i,t,8);this.edgeMat=new us({color:16777215,transparent:!0,opacity:1}),[{pos:[r,0,r],rot:[0,0,0]},{pos:[r,0,-r],rot:[0,0,0]},{pos:[-r,0,r],rot:[0,0,0]},{pos:[-r,0,-r],rot:[0,0,0]},{pos:[0,r,r],rot:[0,0,Math.PI/2]},{pos:[0,r,-r],rot:[0,0,Math.PI/2]},{pos:[0,-r,r],rot:[0,0,Math.PI/2]},{pos:[0,-r,-r],rot:[0,0,Math.PI/2]},{pos:[r,r,0],rot:[Math.PI/2,0,0]},{pos:[r,-r,0],rot:[Math.PI/2,0,0]},{pos:[-r,r,0],rot:[Math.PI/2,0,0]},{pos:[-r,-r,0],rot:[Math.PI/2,0,0]}].forEach(m=>{let g=new Fe(a,this.edgeMat);g.position.set(m.pos[0],m.pos[1],m.pos[2]),m.rot[0]&&(g.rotation.x=m.rot[0]),m.rot[1]&&(g.rotation.y=m.rot[1]),m.rot[2]&&(g.rotation.z=m.rot[2]),this.group.add(g)});let c=new On(n*2,n*2,n*2);this.vertexMat=new us({color:16777215,transparent:!0,opacity:.8}),[[r,r,r],[r,r,-r],[r,-r,r],[r,-r,-r],[-r,r,r],[-r,r,-r],[-r,-r,r],[-r,-r,-r]].forEach(m=>{let g=new Fe(c,this.vertexMat);g.position.set(m[0],m[1],m[2]),this.group.add(g)});let x=Math.PI/6,h=Math.PI/4;this.currentRotation.set(x,h),this.targetRotation.set(x,h),this.group.rotation.x=x,this.group.rotation.y=h,window.addEventListener("mousemove",this.handleMouseMove)}setVertexOpacity(t){this.vertexMat&&(this.vertexMat.opacity=t)}setStructureOpacity(t){this.coreMat&&(this.coreMat.opacity=t),this.edgeMat&&(this.edgeMat.opacity=t)}setCoreColor(t){this.coreMat&&this.coreMat.color.copy(t)}setEdgeColor(t){this.edgeMat&&this.edgeMat.color.copy(t)}setVertexColor(t){this.vertexMat&&this.vertexMat.color.copy(t)}update(){this.currentRotation.x+=(this.targetRotation.x-this.currentRotation.x)*.08,this.currentRotation.y+=(this.targetRotation.y-this.currentRotation.y)*.08,this.group.rotation.x=this.currentRotation.x,this.group.rotation.y=this.currentRotation.y}dispose(){window.removeEventListener("mousemove",this.handleMouseMove),this.vertexMat.dispose(),this.edgeMat.dispose(),this.coreMat.dispose()}};var Cv=me(ui(),1),_N=({show:e})=>{let t=(0,Xu.useRef)(null),i=(0,Xu.useRef)(null);return(0,Xu.useEffect)(()=>{let n=t.current;if(!n)return;let o=new no,s=new ei(45,window.innerWidth/window.innerHeight,.1,400),r=()=>{let h=window.innerWidth,m=window.innerHeight;s.aspect=h/m,s.updateProjectionMatrix(),s.position.set(0,0,h/m<1?45:30)};r();let a=new Zo({alpha:!0,antialias:!0});a.setSize(window.innerWidth,window.innerHeight),a.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.appendChild(a.domElement);let u=new Wf;u.setCoreColor(new Qt(131594)),u.setEdgeColor(new Qt(6514417)),u.setVertexColor(new Qt(2282478)),u.setStructureOpacity(0),u.setVertexOpacity(0),u.group.scale.set(1,1,1),o.add(u.group),i.current=u;let c,l=()=>{c=requestAnimationFrame(l),u.update(),a.render(o,s)};l();let x=()=>{r(),a.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",x),()=>{window.removeEventListener("resize",x),cancelAnimationFrame(c),u.dispose(),n.contains(a.domElement)&&n.removeChild(a.domElement),a.dispose()}},[]),(0,Xu.useEffect)(()=>{if(!e||!i.current)return;let n=i.current,o=Ji.timeline();o.to({val:0},{val:1,duration:2.5,ease:"power2.inOut",onUpdate(){n.setStructureOpacity(this.targets()[0].val)}}),o.to({val:0},{val:1,duration:1.5,ease:"power4.out",onUpdate(){n.setVertexOpacity(this.targets()[0].val)}},"-=1.8"),Ji.to(n.group.scale,{x:1.04,y:1.04,z:1.04,duration:.08,repeat:5,yoyo:!0,ease:"none",delay:.1}),Ji.to(n.group.scale,{x:1,y:1,z:1,duration:1.2,ease:"elastic.out(1, 0.3)",delay:.5})},[e]),(0,Cv.jsx)("div",{ref:t,className:"persistent-cube"})},$v=_N;var Te=me(ui(),1),gN=()=>{let e=(0,fa.useRef)(null),[t,i]=(0,fa.useState)(!1),[n,o]=(0,fa.useState)(!1);return(0,fa.useEffect)(()=>{"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual"),window.scrollTo(0,0);let s=e.current;if(!s||!s.firstElementChild)return;let r=new YS({wrapper:s,content:s.firstElementChild,orientation:"horizontal",gestureOrientation:"both",smoothWheel:!0,wheelMultiplier:1,infinite:!1});r.scrollTo(0,{immediate:!0});let a;function u(x){r.raf(x),window.dispatchEvent(new CustomEvent("lenis-scroll",{detail:{scroll:r.scroll,limit:r.limit,progress:r.progress,velocity:r.velocity}})),a=requestAnimationFrame(u)}a=requestAnimationFrame(u);let c=setTimeout(()=>{o(!0);let x=setTimeout(()=>i(!0),100);return()=>clearTimeout(x)},250),l=x=>{Math.abs(x.deltaY)>Math.abs(x.deltaX)&&(x.preventDefault(),r.scrollTo(r.scroll+x.deltaY,{immediate:!1}))};return window.addEventListener("wheel",l,{passive:!1}),()=>{clearTimeout(c),window.removeEventListener("wheel",l),r.destroy(),cancelAnimationFrame(a)}},[]),(0,Te.jsxs)("div",{className:"relative w-full h-full bg-white overflow-hidden font-sans select-none",children:[(0,Te.jsx)("div",{className:`absolute inset-0 z-[1000] bg-white transition-opacity duration-1000 pointer-events-none ${n?"opacity-0":"opacity-100"}`}),(0,Te.jsxs)("div",{className:`w-full h-full transition-opacity duration-1000 ${t?"opacity-100":"opacity-0"}`,children:[(0,Te.jsx)("div",{className:"absolute inset-0 z-0",children:(0,Te.jsx)(Ow,{})}),(0,Te.jsx)(Mw,{}),(0,Te.jsx)("div",{className:"absolute inset-0 z-[200] pointer-events-none",children:(0,Te.jsx)($v,{show:t})}),(0,Te.jsx)("div",{className:"absolute inset-0 z-[150] pointer-events-none",children:(0,Te.jsx)(Rv,{show:t})}),n&&(0,Te.jsxs)(Te.Fragment,{children:[(0,Te.jsx)("div",{className:"absolute inset-0 z-[70] pointer-events-none",children:(0,Te.jsx)(Kv,{})}),(0,Te.jsx)("div",{className:"relative z-[65]",children:(0,Te.jsx)(Wv,{})}),(0,Te.jsx)("div",{className:"absolute inset-0 z-[85] pointer-events-none",children:(0,Te.jsx)(Uv,{})})]})]}),(0,Te.jsx)("div",{id:"scroll-wrapper",ref:e,style:{visibility:n?"visible":"hidden"},className:"absolute inset-0 w-full h-full overflow-x-auto overflow-y-hidden no-scrollbar z-[60] pointer-events-none",children:(0,Te.jsx)("div",{className:"w-[500vw] h-full pointer-events-none"})})]})},Yv=gN;var UM=me(ui(),1);function Uf(){let e=document.querySelector('[data-sensa="app"]')||document.getElementById("root");if(!e){console.warn("SensaLab: Mount point not found. Ensure [data-sensa='app'] or #root exists.");return}if(e._reactRoot)return;let t=(0,bv.createRoot)(e);e._reactRoot=t,t.render((0,UM.jsx)(Jv.default.StrictMode,{children:(0,UM.jsx)(Yv,{})})),console.log("%cSensaLab: Digital Experience Mounted","color: #6366f1; font-weight: bold;")}window.Webflow=window.Webflow||[];window.Webflow.push(()=>{Uf()});(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1")&&Uf();Uf();})();
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.core.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.12.5
   * https://gsap.com
   *
   * Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
