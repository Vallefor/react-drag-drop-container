(function(m,g){typeof exports=="object"&&typeof module<"u"?g(exports,require("react"),require("prop-types"),require("react-dom")):typeof define=="function"&&define.amd?define(["exports","react","prop-types","react-dom"],g):(m=typeof globalThis<"u"?globalThis:m||self,g(m["react-drag-drop-container"]={},m.require$$0,m.PropTypes,m.ReactDOM))})(this,function(m,g,o,Ie){"use strict";var Dt=Object.defineProperty;var Rt=(m,g,o)=>g in m?Dt(m,g,{enumerable:!0,configurable:!0,writable:!0,value:o}):m[g]=o;var v=(m,g,o)=>Rt(m,typeof g!="symbol"?g+"":g,o);var X={exports:{}},W={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var se;function Fe(){if(se)return W;se=1;var C=g,f=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,P={key:!0,ref:!0,__self:!0,__source:!0};function O(x,b,I){var D,S={},w=null,H=null;I!==void 0&&(w=""+I),b.key!==void 0&&(w=""+b.key),b.ref!==void 0&&(H=b.ref);for(D in b)a.call(b,D)&&!P.hasOwnProperty(D)&&(S[D]=b[D]);if(x&&x.defaultProps)for(D in b=x.defaultProps,b)S[D]===void 0&&(S[D]=b[D]);return{$$typeof:f,type:x,key:w,ref:H,props:S,_owner:s.current}}return W.Fragment=r,W.jsx=O,W.jsxs=O,W}var Y={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oe;function Me(){return oe||(oe=1,process.env.NODE_ENV!=="production"&&function(){var C=g,f=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),x=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),D=Symbol.for("react.suspense_list"),S=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),H=Symbol.for("react.offscreen"),ue=Symbol.iterator,Ye="@@iterator";function Ne(e){if(e===null||typeof e!="object")return null;var t=ue&&e[ue]||e[Ye];return typeof t=="function"?t:null}var F=C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function E(e){{for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];$e("error",e,n)}}function $e(e,t,n){{var i=F.ReactDebugCurrentFrame,c=i.getStackAddendum();c!==""&&(t+="%s",n=n.concat([c]));var d=n.map(function(u){return String(u)});d.unshift("Warning: "+t),Function.prototype.apply.call(console[e],console,d)}}var Ke=!1,He=!1,Ue=!1,Be=!1,ze=!1,ce;ce=Symbol.for("react.module.reference");function Ve(e){return!!(typeof e=="string"||typeof e=="function"||e===a||e===P||ze||e===s||e===I||e===D||Be||e===H||Ke||He||Ue||typeof e=="object"&&e!==null&&(e.$$typeof===w||e.$$typeof===S||e.$$typeof===O||e.$$typeof===x||e.$$typeof===b||e.$$typeof===ce||e.getModuleId!==void 0))}function Xe(e,t,n){var i=e.displayName;if(i)return i;var c=t.displayName||t.name||"";return c!==""?n+"("+c+")":n}function fe(e){return e.displayName||"Context"}function T(e){if(e==null)return null;if(typeof e.tag=="number"&&E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case a:return"Fragment";case r:return"Portal";case P:return"Profiler";case s:return"StrictMode";case I:return"Suspense";case D:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case x:var t=e;return fe(t)+".Consumer";case O:var n=e;return fe(n._context)+".Provider";case b:return Xe(e,e.render,"ForwardRef");case S:var i=e.displayName||null;return i!==null?i:T(e.type)||"Memo";case w:{var c=e,d=c._payload,u=c._init;try{return T(u(d))}catch{return null}}}return null}var k=Object.assign,N=0,de,he,pe,ge,ve,me,Ee;function be(){}be.__reactDisabledLog=!0;function qe(){{if(N===0){de=console.log,he=console.info,pe=console.warn,ge=console.error,ve=console.group,me=console.groupCollapsed,Ee=console.groupEnd;var e={configurable:!0,enumerable:!0,value:be,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}N++}}function Ge(){{if(N--,N===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:k({},e,{value:de}),info:k({},e,{value:he}),warn:k({},e,{value:pe}),error:k({},e,{value:ge}),group:k({},e,{value:ve}),groupCollapsed:k({},e,{value:me}),groupEnd:k({},e,{value:Ee})})}N<0&&E("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var J=F.ReactCurrentDispatcher,Z;function U(e,t,n){{if(Z===void 0)try{throw Error()}catch(c){var i=c.stack.trim().match(/\n( *(at )?)/);Z=i&&i[1]||""}return`
`+Z+e}}var Q=!1,B;{var Je=typeof WeakMap=="function"?WeakMap:Map;B=new Je}function ye(e,t){if(!e||Q)return"";{var n=B.get(e);if(n!==void 0)return n}var i;Q=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var d;d=J.current,J.current=null,qe();try{if(t){var u=function(){throw Error()};if(Object.defineProperty(u.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(u,[])}catch(_){i=_}Reflect.construct(e,[],u)}else{try{u.call()}catch(_){i=_}e.call(u.prototype)}}else{try{throw Error()}catch(_){i=_}e()}}catch(_){if(_&&i&&typeof _.stack=="string"){for(var l=_.stack.split(`
`),y=i.stack.split(`
`),h=l.length-1,p=y.length-1;h>=1&&p>=0&&l[h]!==y[p];)p--;for(;h>=1&&p>=0;h--,p--)if(l[h]!==y[p]){if(h!==1||p!==1)do if(h--,p--,p<0||l[h]!==y[p]){var R=`
`+l[h].replace(" at new "," at ");return e.displayName&&R.includes("<anonymous>")&&(R=R.replace("<anonymous>",e.displayName)),typeof e=="function"&&B.set(e,R),R}while(h>=1&&p>=0);break}}}finally{Q=!1,J.current=d,Ge(),Error.prepareStackTrace=c}var A=e?e.displayName||e.name:"",j=A?U(A):"";return typeof e=="function"&&B.set(e,j),j}function Ze(e,t,n){return ye(e,!1)}function Qe(e){var t=e.prototype;return!!(t&&t.isReactComponent)}function z(e,t,n){if(e==null)return"";if(typeof e=="function")return ye(e,Qe(e));if(typeof e=="string")return U(e);switch(e){case I:return U("Suspense");case D:return U("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case b:return Ze(e.render);case S:return z(e.type,t,n);case w:{var i=e,c=i._payload,d=i._init;try{return z(d(c),t,n)}catch{}}}return""}var $=Object.prototype.hasOwnProperty,_e={},De=F.ReactDebugCurrentFrame;function V(e){if(e){var t=e._owner,n=z(e.type,e._source,t?t.type:null);De.setExtraStackFrame(n)}else De.setExtraStackFrame(null)}function et(e,t,n,i,c){{var d=Function.call.bind($);for(var u in e)if(d(e,u)){var l=void 0;try{if(typeof e[u]!="function"){var y=Error((i||"React class")+": "+n+" type `"+u+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[u]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw y.name="Invariant Violation",y}l=e[u](t,u,i,n,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(h){l=h}l&&!(l instanceof Error)&&(V(c),E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",i||"React class",n,u,typeof l),V(null)),l instanceof Error&&!(l.message in _e)&&(_e[l.message]=!0,V(c),E("Failed %s type: %s",n,l.message),V(null))}}}var tt=Array.isArray;function ee(e){return tt(e)}function rt(e){{var t=typeof Symbol=="function"&&Symbol.toStringTag,n=t&&e[Symbol.toStringTag]||e.constructor.name||"Object";return n}}function nt(e){try{return Re(e),!1}catch{return!0}}function Re(e){return""+e}function Ce(e){if(nt(e))return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",rt(e)),Re(e)}var K=F.ReactCurrentOwner,at={key:!0,ref:!0,__self:!0,__source:!0},Oe,Te,te;te={};function it(e){if($.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return e.ref!==void 0}function st(e){if($.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return e.key!==void 0}function ot(e,t){if(typeof e.ref=="string"&&K.current&&t&&K.current.stateNode!==t){var n=T(K.current.type);te[n]||(E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',T(K.current.type),e.ref),te[n]=!0)}}function lt(e,t){{var n=function(){Oe||(Oe=!0,E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};n.isReactWarning=!0,Object.defineProperty(e,"key",{get:n,configurable:!0})}}function ut(e,t){{var n=function(){Te||(Te=!0,E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};n.isReactWarning=!0,Object.defineProperty(e,"ref",{get:n,configurable:!0})}}var ct=function(e,t,n,i,c,d,u){var l={$$typeof:f,type:e,key:t,ref:n,props:u,_owner:d};return l._store={},Object.defineProperty(l._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(l,"_self",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.defineProperty(l,"_source",{configurable:!1,enumerable:!1,writable:!1,value:c}),Object.freeze&&(Object.freeze(l.props),Object.freeze(l)),l};function ft(e,t,n,i,c){{var d,u={},l=null,y=null;n!==void 0&&(Ce(n),l=""+n),st(t)&&(Ce(t.key),l=""+t.key),it(t)&&(y=t.ref,ot(t,c));for(d in t)$.call(t,d)&&!at.hasOwnProperty(d)&&(u[d]=t[d]);if(e&&e.defaultProps){var h=e.defaultProps;for(d in h)u[d]===void 0&&(u[d]=h[d])}if(l||y){var p=typeof e=="function"?e.displayName||e.name||"Unknown":e;l&&lt(u,p),y&&ut(u,p)}return ct(e,l,y,c,i,K.current,u)}}var re=F.ReactCurrentOwner,Se=F.ReactDebugCurrentFrame;function M(e){if(e){var t=e._owner,n=z(e.type,e._source,t?t.type:null);Se.setExtraStackFrame(n)}else Se.setExtraStackFrame(null)}var ne;ne=!1;function ae(e){return typeof e=="object"&&e!==null&&e.$$typeof===f}function xe(){{if(re.current){var e=T(re.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function dt(e){return""}var we={};function ht(e){{var t=xe();if(!t){var n=typeof e=="string"?e:e.displayName||e.name;n&&(t=`

Check the top-level render call using <`+n+">.")}return t}}function ke(e,t){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var n=ht(t);if(we[n])return;we[n]=!0;var i="";e&&e._owner&&e._owner!==re.current&&(i=" It was passed a child from "+T(e._owner.type)+"."),M(e),E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',n,i),M(null)}}function je(e,t){{if(typeof e!="object")return;if(ee(e))for(var n=0;n<e.length;n++){var i=e[n];ae(i)&&ke(i,t)}else if(ae(e))e._store&&(e._store.validated=!0);else if(e){var c=Ne(e);if(typeof c=="function"&&c!==e.entries)for(var d=c.call(e),u;!(u=d.next()).done;)ae(u.value)&&ke(u.value,t)}}}function pt(e){{var t=e.type;if(t==null||typeof t=="string")return;var n;if(typeof t=="function")n=t.propTypes;else if(typeof t=="object"&&(t.$$typeof===b||t.$$typeof===S))n=t.propTypes;else return;if(n){var i=T(t);et(n,e.props,"prop",i,e)}else if(t.PropTypes!==void 0&&!ne){ne=!0;var c=T(t);E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",c||"Unknown")}typeof t.getDefaultProps=="function"&&!t.getDefaultProps.isReactClassApproved&&E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function gt(e){{for(var t=Object.keys(e.props),n=0;n<t.length;n++){var i=t[n];if(i!=="children"&&i!=="key"){M(e),E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",i),M(null);break}}e.ref!==null&&(M(e),E("Invalid attribute `ref` supplied to `React.Fragment`."),M(null))}}var Le={};function Pe(e,t,n,i,c,d){{var u=Ve(e);if(!u){var l="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(l+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var y=dt();y?l+=y:l+=xe();var h;e===null?h="null":ee(e)?h="array":e!==void 0&&e.$$typeof===f?(h="<"+(T(e.type)||"Unknown")+" />",l=" Did you accidentally export a JSX literal instead of a component?"):h=typeof e,E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",h,l)}var p=ft(e,t,n,c,d);if(p==null)return p;if(u){var R=t.children;if(R!==void 0)if(i)if(ee(R)){for(var A=0;A<R.length;A++)je(R[A],e);Object.freeze&&Object.freeze(R)}else E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else je(R,e)}if($.call(t,"key")){var j=T(e),_=Object.keys(t).filter(function(_t){return _t!=="key"}),ie=_.length>0?"{key: someKey, "+_.join(": ..., ")+": ...}":"{key: someKey}";if(!Le[j+ie]){var yt=_.length>0?"{"+_.join(": ..., ")+": ...}":"{}";E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,ie,j,yt,j),Le[j+ie]=!0}}return e===a?gt(p):pt(p),p}}function vt(e,t,n){return Pe(e,t,n,!0)}function mt(e,t,n){return Pe(e,t,n,!1)}var Et=mt,bt=vt;Y.Fragment=a,Y.jsx=Et,Y.jsxs=bt}()),Y}process.env.NODE_ENV==="production"?X.exports=Fe():X.exports=Me();var L=X.exports;class Ae extends g.Component{componentDidMount(){}componentWillUnmount(){this.defaultNode&&(document.body.removeChild(this.defaultNode),this.defaultNode=null)}componentDidUpdate(){}render(){return this.defaultNode||(this.defaultNode=document.createElement("div"),this.defaultNode.className="dragAndDropPortal",document.body.appendChild(this.defaultNode)),Ie.createPortal(this.props.children,this.defaultNode)}}class le extends g.Component{constructor(f){super(f),this.state={scroll_top:0,scroll_left:0}}componentWillReceiveProps(f){this.props.dragging!==f.dragging&&f.dragging}componentDidMount(){this.props.setGhostElem(this.ghostElem)}render(){if(this.props.parentNode){const s=this.props.parentNode.getBoundingClientRect();s.left,s.top}const f=this.props.parentState,r={top:this.state.scroll_top,left:this.state.scroll_left},a={position:"fixed",zIndex:this.props.zIndex,left:this.props.parentState.mouse.x-(f.clickX-f.initialLeftOffset)-r.left,top:this.props.parentState.mouse.y-(f.clickY-f.initialTopOffset)-r.top,display:this.props.dragging?"block":"none",pointerEvents:"none",width:f.containerWidth,height:f.containerHeight};return this.props.dragging?L.jsx(Ae,{children:L.jsx("div",{style:a,ref:s=>{this.ghostElem=s},children:this.props.children})}):null}}le.propTypes={children:o.node.isRequired,setGhostElem:o.func.isRequired,dragging:o.bool.isRequired,left:o.number.isRequired,top:o.number.isRequired,zIndex:o.number.isRequired};function We(C){return(C.buttons||C.which||C.button)===1}class q extends g.Component{constructor(r){super(r);v(this,"setGhostElem",r=>{this.ghostElem=r});v(this,"addListeners",r=>{r.addEventListener("mousedown",a=>{this.handleMouseDown(a)},!1),r.addEventListener("touchstart",a=>{this.handleTouchStart(a)},!1)});v(this,"buildCustomEvent",r=>{let a;return typeof window.CustomEvent!="function"?(a=document.createEvent("CustomEvent"),a.initCustomEvent(r,!0,!0,{})):a=new CustomEvent(r,{bubbles:!0,cancelable:!0}),Object.assign(a,{dragData:this.props.dragData,dragElem:this.dragElem,sourceElem:this.containerElem}),a});v(this,"setCurrentTarget",(r,a)=>{this.dragElem.style.zIndex=-1;const s=document.elementFromPoint(r,a)||document.body;this.dragElem.style.zIndex=this.props.zIndex,this.currentTarget=this.dragElem.contains(s)?document.body:s});v(this,"generateEnterLeaveEvents",(r,a)=>{const s=this.props.targetKey;this.setCurrentTarget(r,a),this.currentTarget!==this.prevTarget&&(this.prevTarget&&this.prevTarget.dispatchEvent(this.buildCustomEvent(`${s}DragLeave`)),this.currentTarget&&this.currentTarget.dispatchEvent(this.buildCustomEvent(`${s}DragEnter`))),this.prevTarget=this.currentTarget});v(this,"generateDropEvent",(r,a)=>{this.setCurrentTarget(r,a);const s=this.buildCustomEvent(`${this.props.targetKey}Drop`);this.currentTarget.dispatchEvent(s)});v(this,"handleMouseDown",r=>{We(r)&&!this.props.noDragging&&(document.addEventListener("mousemove",this.handleMouseMove),document.addEventListener("mouseup",this.handleMouseUp),this.startDrag(r.clientX,r.clientY))});v(this,"handleTouchStart",r=>{this.props.noDragging||(r.preventDefault(),document.addEventListener("touchmove",this.handleTouchMove),document.addEventListener("touchend",this.handleTouchEnd),this.startDrag(r.targetTouches[0].clientX,r.targetTouches[0].clientY))});v(this,"startDrag",(r,a)=>{this._distanceWasOk=!1,document.addEventListener(`${this.props.targetKey}Dropped`,this._droppedEvent);let s={};this.props.customDragElement||this.props.dragClone?s=this.containerElem.getBoundingClientRect():s={left:this.containerElem.offsetLeft,top:this.containerElem.offsetTop},this.setState({clicked:!0,start_x:r,start_y:a,clickX:r-this.state.left,clickY:a-this.state.top,containerWidth:this.containerElem.clientWidth,containerHeight:this.containerElem.clientHeight,initialLeftOffset:this.state.dragged?this.state.initialLeftOffset:s.left,initialTopOffset:this.state.dragged?this.state.initialTopOffset:s.top})});v(this,"handleMouseMove",r=>{this.distanceIsOk(r)&&(this.props.noDragging||(r.preventDefault(),this.state.clicked&&this.drag(r.clientX,r.clientY)))});v(this,"handleTouchMove",r=>{this.props.noDragging||(r.preventDefault(),this.state.clicked&&this.drag(r.targetTouches[0].clientX,r.targetTouches[0].clientY))});v(this,"drag",(r,a)=>{this.generateEnterLeaveEvents(r,a);const[s,P]=this.checkForOffsetChanges(),O={dragging:!0};this.props.yOnly||(O.left=s+r-this.state.clickX),this.props.xOnly||(O.top=P+a-this.state.clickY),O.mouse={x:r,y:a},this.setState(O),this._dragging||(this._dragging=!0,this.props.onDragStart(this.props.dragData)),this.props.onDrag(this.props.dragData,this.currentTarget,r,a)});v(this,"handleMouseUp",r=>{this.setState({clicked:!1}),this.state.dragging&&(this._dragging=!1,this.drop(r.clientX,r.clientY)),document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp),document.removeEventListener(`${this.props.targetKey}Dropped`,this._droppedEvent)});v(this,"handleTouchEnd",r=>{this.setState({clicked:!1}),document.removeEventListener("touchmove",this.handleTouchMove),document.removeEventListener("touchend",this.handleTouchEnd),this.state.dragging&&this.drop(r.changedTouches[0].clientX,r.changedTouches[0].clientY)});v(this,"drop",(r,a)=>{this.generateDropEvent(r,a),this.props.onDragEnd(this.props.dragData,this.currentTarget,r,a),this.containerElem&&(this.props.returnToBase?this.setState({left:0,top:0,dragging:!1}):this.setState({dragged:!0,dragging:!1}))});v(this,"checkForOffsetChanges",()=>{let r,a;if(this.props.customDragElement||this.props.dragClone){let s=this.containerElem.getBoundingClientRect();r=this.state.initialLeftOffset-s.left,a=this.state.initialTopOffset-s.top}else r=this.state.initialLeftOffset+this.state.left-this.containerElem.offsetLeft,a=this.state.initialTopOffset+this.state.top-this.containerElem.offsetTop;return[r,a]});this.state={clickX:0,clickY:0,left:0,top:0,initialLeftOffset:0,initialTopOffset:0,clicked:!1,dragging:!1,dragged:!1,mouse:{x:0,y:0}},this.dragElem=null,this.ghostElem=null,this.containerElem=null,this.currentTarget=null,this.prevTarget=null,this._droppedEvent=a=>{this.props.onDrop(a)}}componentDidMount(){this.dragElem=this.ghostElem||this.containerElem;const r=this.dragElem.getElementsByTagName("IMG");for(let a=0;a<r.length;a+=1)r[a].setAttribute("draggable","false");if(this.props.dragHandleClassName){const a=this.containerElem.getElementsByClassName(this.props.dragHandleClassName);for(let s=0;s<a.length;s+=1)this.addListeners(a[s])}else this.addListeners(this.containerElem)}distanceIsOk(r){return this._distanceWasOk?!0:Math.abs(this.state.start_x-r.clientX)+Math.abs(this.state.start_y-r.clientY)>this.props.dragStartThreshold?(this._distanceWasOk=!0,!0):!1}render(){const r={position:"relative",display:this.props.elementProps.style&&this.props.elementProps.style.display?this.props.elementProps.style.display:"inline-block"};let a="";if(this.props.customDragElement||this.props.dragClone){let s;this.props.customDragElement?s=this.props.customDragElement:s=this.props.children,a=L.jsx(le,{dragging:this.state.dragging,left:this.state.left,top:this.state.top,zIndex:this.props.zIndex,setGhostElem:this.setGhostElem,parentState:this.state,children:L.jsx("div",{style:{opacity:this.props.dragCloneOpacity,cursor:"move"},children:s})})}else r.left=this.state.left,r.top=this.state.top,r.zIndex=this.state.dragging||this.state.dragged?this.props.zIndex:"inherit",r.cursor=this.state.dragging?"move":"pointer";if(this.props.elementProps.style)for(let s in this.props.elementProps.style)r[s]=this.props.elementProps.style[s];return L.jsxs("div",{...this.props.elementProps,style:r,ref:s=>{this.containerElem=s},children:[this.props.children,a]})}}q.propTypes={children:o.node.isRequired,elementProps:o.object,targetKey:o.string,customDragElement:o.oneOfType([o.string,o.node]),dragClone:o.bool,dragCloneOpacity:o.number,dragData:o.object,dragHandleClassName:o.string,noDragging:o.bool,onDrop:o.func,onDrag:o.func,onDragEnd:o.func,onDragStart:o.func,returnToBase:o.bool,xOnly:o.bool,yOnly:o.bool,zIndex:o.number,dragStartThreshold:o.number},q.defaultProps={targetKey:"ddc",elementProps:{},customDragElement:null,dragClone:!1,dragCloneOpacity:.9,dragData:{},dragHandleClassName:"",onDragStart:()=>{},onDrag:()=>{},onDragEnd:()=>{},onDrop:()=>{},noDragging:!1,returnToBase:!1,xOnly:!1,yOnly:!1,zIndex:1e3,dragStartThreshold:0};class G extends g.Component{constructor(f){super(f),this.elem=null,this.handleDrop=this.handleDrop.bind(this),this._dragEnterHandler=r=>{this.props.onDragEnter(r)},this._dragLeaveHandler=r=>{this.props.onDragLeave(r)},this._dragDropHandler=r=>{this.handleDrop(r)}}componentWillUnmount(){this.elem.removeEventListener(`${this.props.targetKey}DragEnter`,this._dragEnterHandler,!1),this.elem.removeEventListener(`${this.props.targetKey}DragLeave`,this._dragLeaveHandler,!1),this.elem.removeEventListener(`${this.props.targetKey}Drop`,this._dragDropHandler,!1)}componentDidMount(){this.elem.addEventListener(`${this.props.targetKey}DragEnter`,this._dragEnterHandler,!1),this.elem.addEventListener(`${this.props.targetKey}DragLeave`,this._dragLeaveHandler,!1),this.elem.addEventListener(`${this.props.targetKey}Drop`,this._dragDropHandler,!1)}createEvent(f,r){let a;return typeof window.CustomEvent!="function"?(a=document.createEvent("CustomEvent"),a.initCustomEvent(f,!0,!0,{})):a=new CustomEvent(f,{bubbles:!0,cancelable:!0}),Object.assign(a,r),a}handleDrop(f){const r=this.createEvent(`${this.props.targetKey}Dropped`,{dropElem:this.elem,dropData:this.props.dropData});f.sourceElem.dispatchEvent(r),this.props.onHit(f)}render(){return L.jsx("span",{ref:f=>{this.elem=f},children:this.props.children})}}G.propTypes={children:o.node.isRequired,targetKey:o.string,dropData:o.object,onDragEnter:o.func,onDragLeave:o.func,onHit:o.func},G.defaultProps={targetKey:"ddc",onDragEnter:()=>{},onDragLeave:()=>{},onHit:()=>()=>{},dropData:{}},m.DragDropContainer=q,m.DropTarget=G,Object.defineProperty(m,Symbol.toStringTag,{value:"Module"})});
