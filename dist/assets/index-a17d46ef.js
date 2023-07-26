import*as y from"react";import nt,{forwardRef as al,useContext as cl,Children as ll,isValidElement as cr,cloneElement as lr,useState as we,useEffect as No}from"react";import ul from"react-dom";import{useSelector as Se,useDispatch as Bt,Provider as dl}from"react-redux";import{combineReducers as fl,createStore as hl,applyMiddleware as pl}from"redux";import ml from"redux-thunk";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();function gl(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var $o={exports:{}},Nr={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yl=nt,vl=Symbol.for("react.element"),bl=Symbol.for("react.fragment"),_l=Object.prototype.hasOwnProperty,wl=yl.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,El={key:!0,ref:!0,__self:!0,__source:!0};function Do(t,e,r){var n,i={},s=null,o=null;r!==void 0&&(s=""+r),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(n in e)_l.call(e,n)&&!El.hasOwnProperty(n)&&(i[n]=e[n]);if(t&&t.defaultProps)for(n in e=t.defaultProps,e)i[n]===void 0&&(i[n]=e[n]);return{$$typeof:vl,type:t,key:s,ref:o,props:i,_owner:wl.current}}Nr.Fragment=bl;Nr.jsx=Do;Nr.jsxs=Do;$o.exports=Nr;var v=$o.exports;/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function kt(){return kt=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},kt.apply(this,arguments)}var Pe;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Pe||(Pe={}));const Qi="popstate";function Sl(t){t===void 0&&(t={});function e(n,i){let{pathname:s,search:o,hash:a}=n.location;return Kn("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function r(n,i){return typeof i=="string"?i:wr(i)}return Cl(e,r,null,t)}function j(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function di(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Il(){return Math.random().toString(36).substr(2,8)}function Zi(t,e){return{usr:t.state,key:t.key,idx:e}}function Kn(t,e,r,n){return r===void 0&&(r=null),kt({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ht(e):e,{state:r,key:e&&e.key||n||Il()})}function wr(t){let{pathname:e="/",search:r="",hash:n=""}=t;return r&&r!=="?"&&(e+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function ht(t){let e={};if(t){let r=t.indexOf("#");r>=0&&(e.hash=t.substr(r),t=t.substr(0,r));let n=t.indexOf("?");n>=0&&(e.search=t.substr(n),t=t.substr(0,n)),t&&(e.pathname=t)}return e}function Cl(t,e,r,n){n===void 0&&(n={});let{window:i=document.defaultView,v5Compat:s=!1}=n,o=i.history,a=Pe.Pop,c=null,l=u();l==null&&(l=0,o.replaceState(kt({},o.state,{idx:l}),""));function u(){return(o.state||{idx:null}).idx}function d(){a=Pe.Pop;let p=u(),b=p==null?null:p-l;l=p,c&&c({action:a,location:h.location,delta:b})}function f(p,b){a=Pe.Push;let _=Kn(h.location,p,b);r&&r(_,p),l=u()+1;let I=Zi(_,l),w=h.createHref(_);try{o.pushState(I,"",w)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;i.location.assign(w)}s&&c&&c({action:a,location:h.location,delta:1})}function m(p,b){a=Pe.Replace;let _=Kn(h.location,p,b);r&&r(_,p),l=u();let I=Zi(_,l),w=h.createHref(_);o.replaceState(I,"",w),s&&c&&c({action:a,location:h.location,delta:0})}function g(p){let b=i.location.origin!=="null"?i.location.origin:i.location.href,_=typeof p=="string"?p:wr(p);return j(b,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,b)}let h={get action(){return a},get location(){return t(i,o)},listen(p){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Qi,d),c=p,()=>{i.removeEventListener(Qi,d),c=null}},createHref(p){return e(i,p)},createURL:g,encodeLocation(p){let b=g(p);return{pathname:b.pathname,search:b.search,hash:b.hash}},push:f,replace:m,go(p){return o.go(p)}};return h}var es;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(es||(es={}));function Rl(t,e,r){r===void 0&&(r="/");let n=typeof e=="string"?ht(e):e,i=fi(n.pathname||"/",r);if(i==null)return null;let s=Lo(t);Tl(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=Ll(s[a],jl(i));return o}function Lo(t,e,r,n){e===void 0&&(e=[]),r===void 0&&(r=[]),n===void 0&&(n="");let i=(s,o,a)=>{let c={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};c.relativePath.startsWith("/")&&(j(c.relativePath.startsWith(n),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(n.length));let l=Ne([n,c.relativePath]),u=r.concat(c);s.children&&s.children.length>0&&(j(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+l+'".')),Lo(s.children,e,u,l)),!(s.path==null&&!s.index)&&e.push({path:l,score:$l(l,s.index),routesMeta:u})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let c of Mo(s.path))i(s,o,c)}),e}function Mo(t){let e=t.split("/");if(e.length===0)return[];let[r,...n]=e,i=r.endsWith("?"),s=r.replace(/\?$/,"");if(n.length===0)return i?[s,""]:[s];let o=Mo(n.join("/")),a=[];return a.push(...o.map(c=>c===""?s:[s,c].join("/"))),i&&a.push(...o),a.map(c=>t.startsWith("/")&&c===""?"/":c)}function Tl(t){t.sort((e,r)=>e.score!==r.score?r.score-e.score:Dl(e.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const xl=/^:\w+$/,kl=3,Al=2,Ol=1,Pl=10,Nl=-2,ts=t=>t==="*";function $l(t,e){let r=t.split("/"),n=r.length;return r.some(ts)&&(n+=Nl),e&&(n+=Al),r.filter(i=>!ts(i)).reduce((i,s)=>i+(xl.test(s)?kl:s===""?Ol:Pl),n)}function Dl(t,e){return t.length===e.length&&t.slice(0,-1).every((n,i)=>n===e[i])?t[t.length-1]-e[e.length-1]:0}function Ll(t,e){let{routesMeta:r}=t,n={},i="/",s=[];for(let o=0;o<r.length;++o){let a=r[o],c=o===r.length-1,l=i==="/"?e:e.slice(i.length)||"/",u=Ml({path:a.relativePath,caseSensitive:a.caseSensitive,end:c},l);if(!u)return null;Object.assign(n,u.params);let d=a.route;s.push({params:n,pathname:Ne([i,u.pathname]),pathnameBase:Wl(Ne([i,u.pathnameBase])),route:d}),u.pathnameBase!=="/"&&(i=Ne([i,u.pathnameBase]))}return s}function Ml(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[r,n]=Ul(t.path,t.caseSensitive,t.end),i=e.match(r);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:n.reduce((l,u,d)=>{if(u==="*"){let f=a[d]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return l[u]=Bl(a[d]||"",u),l},{}),pathname:s,pathnameBase:o,pattern:t}}function Ul(t,e,r){e===void 0&&(e=!1),r===void 0&&(r=!0),di(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let n=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(n.push(a),"/([^\\/]+)"));return t.endsWith("*")?(n.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),n]}function jl(t){try{return decodeURI(t)}catch(e){return di(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Bl(t,e){try{return decodeURIComponent(t)}catch(r){return di(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+r+").")),t}}function fi(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let r=e.endsWith("/")?e.length-1:e.length,n=t.charAt(r);return n&&n!=="/"?null:t.slice(r)||"/"}function Fl(t,e){e===void 0&&(e="/");let{pathname:r,search:n="",hash:i=""}=typeof t=="string"?ht(t):t;return{pathname:r?r.startsWith("/")?r:Hl(r,e):e,search:zl(n),hash:Vl(i)}}function Hl(t,e){let r=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function gn(t,e,r,n){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Uo(t){return t.filter((e,r)=>r===0||e.route.path&&e.route.path.length>0)}function jo(t,e,r,n){n===void 0&&(n=!1);let i;typeof t=="string"?i=ht(t):(i=kt({},t),j(!i.pathname||!i.pathname.includes("?"),gn("?","pathname","search",i)),j(!i.pathname||!i.pathname.includes("#"),gn("#","pathname","hash",i)),j(!i.search||!i.search.includes("#"),gn("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(n||o==null)a=r;else{let d=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?e[d]:"/"}let c=Fl(i,a),l=o&&o!=="/"&&o.endsWith("/"),u=(s||o===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(l||u)&&(c.pathname+="/"),c}const Ne=t=>t.join("/").replace(/\/\/+/g,"/"),Wl=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),zl=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Vl=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Kl(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Bo=["post","put","patch","delete"];new Set(Bo);const ql=["get",...Bo];new Set(ql);/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Er(){return Er=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},Er.apply(this,arguments)}const hi=y.createContext(null),Gl=y.createContext(null),pt=y.createContext(null),$r=y.createContext(null),Ke=y.createContext({outlet:null,matches:[],isDataRoute:!1}),Fo=y.createContext(null);function Jl(t,e){let{relative:r}=e===void 0?{}:e;Ft()||j(!1);let{basename:n,navigator:i}=y.useContext(pt),{hash:s,pathname:o,search:a}=Wo(t,{relative:r}),c=o;return n!=="/"&&(c=o==="/"?n:Ne([n,o])),i.createHref({pathname:c,search:a,hash:s})}function Ft(){return y.useContext($r)!=null}function Dr(){return Ft()||j(!1),y.useContext($r).location}function Ho(t){y.useContext(pt).static||y.useLayoutEffect(t)}function Yl(){let{isDataRoute:t}=y.useContext(Ke);return t?lu():Xl()}function Xl(){Ft()||j(!1);let t=y.useContext(hi),{basename:e,navigator:r}=y.useContext(pt),{matches:n}=y.useContext(Ke),{pathname:i}=Dr(),s=JSON.stringify(Uo(n).map(c=>c.pathnameBase)),o=y.useRef(!1);return Ho(()=>{o.current=!0}),y.useCallback(function(c,l){if(l===void 0&&(l={}),!o.current)return;if(typeof c=="number"){r.go(c);return}let u=jo(c,JSON.parse(s),i,l.relative==="path");t==null&&e!=="/"&&(u.pathname=u.pathname==="/"?e:Ne([e,u.pathname])),(l.replace?r.replace:r.push)(u,l.state,l)},[e,r,s,i,t])}function Wo(t,e){let{relative:r}=e===void 0?{}:e,{matches:n}=y.useContext(Ke),{pathname:i}=Dr(),s=JSON.stringify(Uo(n).map(o=>o.pathnameBase));return y.useMemo(()=>jo(t,JSON.parse(s),i,r==="path"),[t,s,i,r])}function Ql(t,e){return Zl(t,e)}function Zl(t,e,r){Ft()||j(!1);let{navigator:n}=y.useContext(pt),{matches:i}=y.useContext(Ke),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let c=Dr(),l;if(e){var u;let h=typeof e=="string"?ht(e):e;a==="/"||(u=h.pathname)!=null&&u.startsWith(a)||j(!1),l=h}else l=c;let d=l.pathname||"/",f=a==="/"?d:d.slice(a.length)||"/",m=Rl(t,{pathname:f}),g=iu(m&&m.map(h=>Object.assign({},h,{params:Object.assign({},o,h.params),pathname:Ne([a,n.encodeLocation?n.encodeLocation(h.pathname).pathname:h.pathname]),pathnameBase:h.pathnameBase==="/"?a:Ne([a,n.encodeLocation?n.encodeLocation(h.pathnameBase).pathname:h.pathnameBase])})),i,r);return e&&g?y.createElement($r.Provider,{value:{location:Er({pathname:"/",search:"",hash:"",state:null,key:"default"},l),navigationType:Pe.Pop}},g):g}function eu(){let t=cu(),e=Kl(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},e),r?y.createElement("pre",{style:i},r):null,s)}const tu=y.createElement(eu,null);class ru extends y.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,r){return r.location!==e.location||r.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||r.error,location:r.location,revalidation:e.revalidation||r.revalidation}}componentDidCatch(e,r){console.error("React Router caught the following error during render",e,r)}render(){return this.state.error?y.createElement(Ke.Provider,{value:this.props.routeContext},y.createElement(Fo.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function nu(t){let{routeContext:e,match:r,children:n}=t,i=y.useContext(hi);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),y.createElement(Ke.Provider,{value:e},n)}function iu(t,e,r){var n;if(e===void 0&&(e=[]),r===void 0&&(r=null),t==null){var i;if((i=r)!=null&&i.errors)t=r.matches;else return null}let s=t,o=(n=r)==null?void 0:n.errors;if(o!=null){let a=s.findIndex(c=>c.route.id&&(o==null?void 0:o[c.route.id]));a>=0||j(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,c,l)=>{let u=c.route.id?o==null?void 0:o[c.route.id]:null,d=null;r&&(d=c.route.errorElement||tu);let f=e.concat(s.slice(0,l+1)),m=()=>{let g;return u?g=d:c.route.Component?g=y.createElement(c.route.Component,null):c.route.element?g=c.route.element:g=a,y.createElement(nu,{match:c,routeContext:{outlet:a,matches:f,isDataRoute:r!=null},children:g})};return r&&(c.route.ErrorBoundary||c.route.errorElement||l===0)?y.createElement(ru,{location:r.location,revalidation:r.revalidation,component:d,error:u,children:m(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):m()},null)}var qn;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(qn||(qn={}));var At;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(At||(At={}));function su(t){let e=y.useContext(hi);return e||j(!1),e}function ou(t){let e=y.useContext(Gl);return e||j(!1),e}function au(t){let e=y.useContext(Ke);return e||j(!1),e}function zo(t){let e=au(),r=e.matches[e.matches.length-1];return r.route.id||j(!1),r.route.id}function cu(){var t;let e=y.useContext(Fo),r=ou(At.UseRouteError),n=zo(At.UseRouteError);return e||((t=r.errors)==null?void 0:t[n])}function lu(){let{router:t}=su(qn.UseNavigateStable),e=zo(At.UseNavigateStable),r=y.useRef(!1);return Ho(()=>{r.current=!0}),y.useCallback(function(i,s){s===void 0&&(s={}),r.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Er({fromRouteId:e},s)))},[t,e])}function ur(t){j(!1)}function uu(t){let{basename:e="/",children:r=null,location:n,navigationType:i=Pe.Pop,navigator:s,static:o=!1}=t;Ft()&&j(!1);let a=e.replace(/^\/*/,"/"),c=y.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof n=="string"&&(n=ht(n));let{pathname:l="/",search:u="",hash:d="",state:f=null,key:m="default"}=n,g=y.useMemo(()=>{let h=fi(l,a);return h==null?null:{location:{pathname:h,search:u,hash:d,state:f,key:m},navigationType:i}},[a,l,u,d,f,m,i]);return g==null?null:y.createElement(pt.Provider,{value:c},y.createElement($r.Provider,{children:r,value:g}))}function du(t){let{children:e,location:r}=t;return Ql(Gn(e),r)}var rs;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(rs||(rs={}));new Promise(()=>{});function Gn(t,e){e===void 0&&(e=[]);let r=[];return y.Children.forEach(t,(n,i)=>{if(!y.isValidElement(n))return;let s=[...e,i];if(n.type===y.Fragment){r.push.apply(r,Gn(n.props.children,s));return}n.type!==ur&&j(!1),!n.props.index||!n.props.children||j(!1);let o={id:n.props.id||s.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(o.children=Gn(n.props.children,s)),r.push(o)}),r}/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jn(){return Jn=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},Jn.apply(this,arguments)}function fu(t,e){if(t==null)return{};var r={},n=Object.keys(t),i,s;for(s=0;s<n.length;s++)i=n[s],!(e.indexOf(i)>=0)&&(r[i]=t[i]);return r}function hu(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function pu(t,e){return t.button===0&&(!e||e==="_self")&&!hu(t)}const mu=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],gu="startTransition",ns=y[gu];function yu(t){let{basename:e,children:r,future:n,window:i}=t,s=y.useRef();s.current==null&&(s.current=Sl({window:i,v5Compat:!0}));let o=s.current,[a,c]=y.useState({action:o.action,location:o.location}),{v7_startTransition:l}=n||{},u=y.useCallback(d=>{l&&ns?ns(()=>c(d)):c(d)},[c,l]);return y.useLayoutEffect(()=>o.listen(u),[o,u]),y.createElement(uu,{basename:e,children:r,location:a.location,navigationType:a.action,navigator:o})}const vu=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",bu=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yn=y.forwardRef(function(e,r){let{onClick:n,relative:i,reloadDocument:s,replace:o,state:a,target:c,to:l,preventScrollReset:u}=e,d=fu(e,mu),{basename:f}=y.useContext(pt),m,g=!1;if(typeof l=="string"&&bu.test(l)&&(m=l,vu))try{let _=new URL(window.location.href),I=l.startsWith("//")?new URL(_.protocol+l):new URL(l),w=fi(I.pathname,f);I.origin===_.origin&&w!=null?l=w+I.search+I.hash:g=!0}catch{}let h=Jl(l,{relative:i}),p=_u(l,{replace:o,state:a,target:c,preventScrollReset:u,relative:i});function b(_){n&&n(_),_.defaultPrevented||p(_)}return y.createElement("a",Jn({},d,{href:m||h,onClick:g||s?n:b,ref:r,target:c}))});var is;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(is||(is={}));var ss;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(ss||(ss={}));function _u(t,e){let{target:r,replace:n,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Yl(),c=Dr(),l=Wo(t,{relative:o});return y.useCallback(u=>{if(pu(u,r)){u.preventDefault();let d=n!==void 0?n:wr(c)===wr(l);a(t,{replace:d,state:i,preventScrollReset:s,relative:o})}},[c,a,l,n,i,r,t,s,o])}const wu=()=>{const t=Se(e=>e.auth.user);return v.jsxs("div",{className:"header",children:[v.jsx("div",{className:"header__left",children:v.jsx(yn,{to:"/",children:"Weather App"})}),v.jsxs("div",{className:"header__right",children:[v.jsx(yn,{to:"/favorites",children:"Favorites"}),t?v.jsxs("span",{children:["Hello, ",t.email]}):v.jsx(yn,{to:"/login",children:"Login"})]})]})};var pi={exports:{}},Vo=function(e,r){return function(){for(var i=new Array(arguments.length),s=0;s<i.length;s++)i[s]=arguments[s];return e.apply(r,i)}},Eu=Vo,qe=Object.prototype.toString;function mi(t){return qe.call(t)==="[object Array]"}function Yn(t){return typeof t>"u"}function Su(t){return t!==null&&!Yn(t)&&t.constructor!==null&&!Yn(t.constructor)&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}function Iu(t){return qe.call(t)==="[object ArrayBuffer]"}function Cu(t){return typeof FormData<"u"&&t instanceof FormData}function Ru(t){var e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&t.buffer instanceof ArrayBuffer,e}function Tu(t){return typeof t=="string"}function xu(t){return typeof t=="number"}function Ko(t){return t!==null&&typeof t=="object"}function dr(t){if(qe.call(t)!=="[object Object]")return!1;var e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}function ku(t){return qe.call(t)==="[object Date]"}function Au(t){return qe.call(t)==="[object File]"}function Ou(t){return qe.call(t)==="[object Blob]"}function qo(t){return qe.call(t)==="[object Function]"}function Pu(t){return Ko(t)&&qo(t.pipe)}function Nu(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}function $u(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function Du(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function gi(t,e){if(!(t===null||typeof t>"u"))if(typeof t!="object"&&(t=[t]),mi(t))for(var r=0,n=t.length;r<n;r++)e.call(null,t[r],r,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}function Xn(){var t={};function e(i,s){dr(t[s])&&dr(i)?t[s]=Xn(t[s],i):dr(i)?t[s]=Xn({},i):mi(i)?t[s]=i.slice():t[s]=i}for(var r=0,n=arguments.length;r<n;r++)gi(arguments[r],e);return t}function Lu(t,e,r){return gi(e,function(i,s){r&&typeof i=="function"?t[s]=Eu(i,r):t[s]=i}),t}function Mu(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t}var te={isArray:mi,isArrayBuffer:Iu,isBuffer:Su,isFormData:Cu,isArrayBufferView:Ru,isString:Tu,isNumber:xu,isObject:Ko,isPlainObject:dr,isUndefined:Yn,isDate:ku,isFile:Au,isBlob:Ou,isFunction:qo,isStream:Pu,isURLSearchParams:Nu,isStandardBrowserEnv:Du,forEach:gi,merge:Xn,extend:Lu,trim:$u,stripBOM:Mu},Je=te;function os(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Go=function(e,r,n){if(!r)return e;var i;if(n)i=n(r);else if(Je.isURLSearchParams(r))i=r.toString();else{var s=[];Je.forEach(r,function(c,l){c===null||typeof c>"u"||(Je.isArray(c)?l=l+"[]":c=[c],Je.forEach(c,function(d){Je.isDate(d)?d=d.toISOString():Je.isObject(d)&&(d=JSON.stringify(d)),s.push(os(l)+"="+os(d))}))}),i=s.join("&")}if(i){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e},Uu=te;function Lr(){this.handlers=[]}Lr.prototype.use=function(e,r,n){return this.handlers.push({fulfilled:e,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1};Lr.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};Lr.prototype.forEach=function(e){Uu.forEach(this.handlers,function(n){n!==null&&e(n)})};var ju=Lr,Bu=te,Fu=function(e,r){Bu.forEach(e,function(i,s){s!==r&&s.toUpperCase()===r.toUpperCase()&&(e[r]=i,delete e[s])})},Jo=function(e,r,n,i,s){return e.config=r,n&&(e.code=n),e.request=i,e.response=s,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e},vn,as;function Yo(){if(as)return vn;as=1;var t=Jo;return vn=function(r,n,i,s,o){var a=new Error(r);return t(a,n,i,s,o)},vn}var bn,cs;function Hu(){if(cs)return bn;cs=1;var t=Yo();return bn=function(r,n,i){var s=i.config.validateStatus;!i.status||!s||s(i.status)?r(i):n(t("Request failed with status code "+i.status,i.config,null,i.request,i))},bn}var _n,ls;function Wu(){if(ls)return _n;ls=1;var t=te;return _n=t.isStandardBrowserEnv()?function(){return{write:function(n,i,s,o,a,c){var l=[];l.push(n+"="+encodeURIComponent(i)),t.isNumber(s)&&l.push("expires="+new Date(s).toGMTString()),t.isString(o)&&l.push("path="+o),t.isString(a)&&l.push("domain="+a),c===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(n){var i=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),_n}var wn,us;function zu(){return us||(us=1,wn=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}),wn}var En,ds;function Vu(){return ds||(ds=1,En=function(e,r){return r?e.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):e}),En}var Sn,fs;function Ku(){if(fs)return Sn;fs=1;var t=zu(),e=Vu();return Sn=function(n,i){return n&&!t(i)?e(n,i):i},Sn}var In,hs;function qu(){if(hs)return In;hs=1;var t=te,e=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return In=function(n){var i={},s,o,a;return n&&t.forEach(n.split(`
`),function(l){if(a=l.indexOf(":"),s=t.trim(l.substr(0,a)).toLowerCase(),o=t.trim(l.substr(a+1)),s){if(i[s]&&e.indexOf(s)>=0)return;s==="set-cookie"?i[s]=(i[s]?i[s]:[]).concat([o]):i[s]=i[s]?i[s]+", "+o:o}}),i},In}var Cn,ps;function Gu(){if(ps)return Cn;ps=1;var t=te;return Cn=t.isStandardBrowserEnv()?function(){var r=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a"),i;function s(o){var a=o;return r&&(n.setAttribute("href",a),a=n.href),n.setAttribute("href",a),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return i=s(window.location.href),function(a){var c=t.isString(a)?s(a):a;return c.protocol===i.protocol&&c.host===i.host}}():function(){return function(){return!0}}(),Cn}var Rn,ms;function gs(){if(ms)return Rn;ms=1;var t=te,e=Hu(),r=Wu(),n=Go,i=Ku(),s=qu(),o=Gu(),a=Yo();return Rn=function(l){return new Promise(function(d,f){var m=l.data,g=l.headers,h=l.responseType;t.isFormData(m)&&delete g["Content-Type"];var p=new XMLHttpRequest;if(l.auth){var b=l.auth.username||"",_=l.auth.password?unescape(encodeURIComponent(l.auth.password)):"";g.Authorization="Basic "+btoa(b+":"+_)}var I=i(l.baseURL,l.url);p.open(l.method.toUpperCase(),n(I,l.params,l.paramsSerializer),!0),p.timeout=l.timeout;function w(){if(p){var T="getAllResponseHeaders"in p?s(p.getAllResponseHeaders()):null,E=!h||h==="text"||h==="json"?p.responseText:p.response,B={data:E,status:p.status,statusText:p.statusText,headers:T,config:l,request:p};e(d,f,B),p=null}}if("onloadend"in p?p.onloadend=w:p.onreadystatechange=function(){!p||p.readyState!==4||p.status===0&&!(p.responseURL&&p.responseURL.indexOf("file:")===0)||setTimeout(w)},p.onabort=function(){p&&(f(a("Request aborted",l,"ECONNABORTED",p)),p=null)},p.onerror=function(){f(a("Network Error",l,null,p)),p=null},p.ontimeout=function(){var E="timeout of "+l.timeout+"ms exceeded";l.timeoutErrorMessage&&(E=l.timeoutErrorMessage),f(a(E,l,l.transitional&&l.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",p)),p=null},t.isStandardBrowserEnv()){var R=(l.withCredentials||o(I))&&l.xsrfCookieName?r.read(l.xsrfCookieName):void 0;R&&(g[l.xsrfHeaderName]=R)}"setRequestHeader"in p&&t.forEach(g,function(E,B){typeof m>"u"&&B.toLowerCase()==="content-type"?delete g[B]:p.setRequestHeader(B,E)}),t.isUndefined(l.withCredentials)||(p.withCredentials=!!l.withCredentials),h&&h!=="json"&&(p.responseType=l.responseType),typeof l.onDownloadProgress=="function"&&p.addEventListener("progress",l.onDownloadProgress),typeof l.onUploadProgress=="function"&&p.upload&&p.upload.addEventListener("progress",l.onUploadProgress),l.cancelToken&&l.cancelToken.promise.then(function(E){p&&(p.abort(),f(E),p=null)}),m||(m=null),p.send(m)})},Rn}var V=te,ys=Fu,Ju=Jo,Yu={"Content-Type":"application/x-www-form-urlencoded"};function vs(t,e){!V.isUndefined(t)&&V.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function Xu(){var t;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(t=gs()),t}function Qu(t,e,r){if(V.isString(t))try{return(e||JSON.parse)(t),V.trim(t)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(t)}var Mr={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:Xu(),transformRequest:[function(e,r){return ys(r,"Accept"),ys(r,"Content-Type"),V.isFormData(e)||V.isArrayBuffer(e)||V.isBuffer(e)||V.isStream(e)||V.isFile(e)||V.isBlob(e)?e:V.isArrayBufferView(e)?e.buffer:V.isURLSearchParams(e)?(vs(r,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):V.isObject(e)||r&&r["Content-Type"]==="application/json"?(vs(r,"application/json"),Qu(e)):e}],transformResponse:[function(e){var r=this.transitional,n=r&&r.silentJSONParsing,i=r&&r.forcedJSONParsing,s=!n&&this.responseType==="json";if(s||i&&V.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(s)throw o.name==="SyntaxError"?Ju(o,this,"E_JSON_PARSE"):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};Mr.headers={common:{Accept:"application/json, text/plain, */*"}};V.forEach(["delete","get","head"],function(e){Mr.headers[e]={}});V.forEach(["post","put","patch"],function(e){Mr.headers[e]=V.merge(Yu)});var yi=Mr,Zu=te,ed=yi,td=function(e,r,n){var i=this||ed;return Zu.forEach(n,function(o){e=o.call(i,e,r)}),e},Tn,bs;function Xo(){return bs||(bs=1,Tn=function(e){return!!(e&&e.__CANCEL__)}),Tn}var _s=te,xn=td,rd=Xo(),nd=yi;function kn(t){t.cancelToken&&t.cancelToken.throwIfRequested()}var id=function(e){kn(e),e.headers=e.headers||{},e.data=xn.call(e,e.data,e.headers,e.transformRequest),e.headers=_s.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),_s.forEach(["delete","get","head","post","put","patch","common"],function(i){delete e.headers[i]});var r=e.adapter||nd.adapter;return r(e).then(function(i){return kn(e),i.data=xn.call(e,i.data,i.headers,e.transformResponse),i},function(i){return rd(i)||(kn(e),i&&i.response&&(i.response.data=xn.call(e,i.response.data,i.response.headers,e.transformResponse))),Promise.reject(i)})},q=te,Qo=function(e,r){r=r||{};var n={},i=["url","method","data"],s=["headers","auth","proxy","params"],o=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],a=["validateStatus"];function c(f,m){return q.isPlainObject(f)&&q.isPlainObject(m)?q.merge(f,m):q.isPlainObject(m)?q.merge({},m):q.isArray(m)?m.slice():m}function l(f){q.isUndefined(r[f])?q.isUndefined(e[f])||(n[f]=c(void 0,e[f])):n[f]=c(e[f],r[f])}q.forEach(i,function(m){q.isUndefined(r[m])||(n[m]=c(void 0,r[m]))}),q.forEach(s,l),q.forEach(o,function(m){q.isUndefined(r[m])?q.isUndefined(e[m])||(n[m]=c(void 0,e[m])):n[m]=c(void 0,r[m])}),q.forEach(a,function(m){m in r?n[m]=c(e[m],r[m]):m in e&&(n[m]=c(void 0,e[m]))});var u=i.concat(s).concat(o).concat(a),d=Object.keys(e).concat(Object.keys(r)).filter(function(m){return u.indexOf(m)===-1});return q.forEach(d,l),n};const sd="axios",od="0.21.4",ad="Promise based HTTP client for the browser and node.js",cd="index.js",ld={test:"grunt test",start:"node ./sandbox/server.js",build:"NODE_ENV=production grunt build",preversion:"npm test",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",postversion:"git push && git push --tags",examples:"node ./examples/server.js",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",fix:"eslint --fix lib/**/*.js"},ud={type:"git",url:"https://github.com/axios/axios.git"},dd=["xhr","http","ajax","promise","node"],fd="Matt Zabriskie",hd="MIT",pd={url:"https://github.com/axios/axios/issues"},md="https://axios-http.com",gd={coveralls:"^3.0.0","es6-promise":"^4.2.4",grunt:"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0",mocha:"^8.2.1",sinon:"^4.5.0","terser-webpack-plugin":"^4.2.3",typescript:"^4.0.5","url-search-params":"^0.10.0",webpack:"^4.44.2","webpack-dev-server":"^3.11.0"},yd={"./lib/adapters/http.js":"./lib/adapters/xhr.js"},vd="dist/axios.min.js",bd="dist/axios.min.js",_d="./index.d.ts",wd={"follow-redirects":"^1.14.0"},Ed=[{path:"./dist/axios.min.js",threshold:"5kB"}],Sd={name:sd,version:od,description:ad,main:cd,scripts:ld,repository:ud,keywords:dd,author:fd,license:hd,bugs:pd,homepage:md,devDependencies:gd,browser:yd,jsdelivr:vd,unpkg:bd,typings:_d,dependencies:wd,bundlesize:Ed};var Zo=Sd,vi={};["object","boolean","number","function","string","symbol"].forEach(function(t,e){vi[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}});var ws={},Id=Zo.version.split(".");function ea(t,e){for(var r=e?e.split("."):Id,n=t.split("."),i=0;i<3;i++){if(r[i]>n[i])return!0;if(r[i]<n[i])return!1}return!1}vi.transitional=function(e,r,n){var i=r&&ea(r);function s(o,a){return"[Axios v"+Zo.version+"] Transitional option '"+o+"'"+a+(n?". "+n:"")}return function(o,a,c){if(e===!1)throw new Error(s(a," has been removed in "+r));return i&&!ws[a]&&(ws[a]=!0,console.warn(s(a," has been deprecated since v"+r+" and will be removed in the near future"))),e?e(o,a,c):!0}};function Cd(t,e,r){if(typeof t!="object")throw new TypeError("options must be an object");for(var n=Object.keys(t),i=n.length;i-- >0;){var s=n[i],o=e[s];if(o){var a=t[s],c=a===void 0||o(a,s,t);if(c!==!0)throw new TypeError("option "+s+" must be "+c);continue}if(r!==!0)throw Error("Unknown option "+s)}}var Rd={isOlderVersion:ea,assertOptions:Cd,validators:vi},ta=te,Td=Go,Es=ju,Ss=id,Ur=Qo,ra=Rd,Ye=ra.validators;function Ht(t){this.defaults=t,this.interceptors={request:new Es,response:new Es}}Ht.prototype.request=function(e){typeof e=="string"?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=Ur(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var r=e.transitional;r!==void 0&&ra.assertOptions(r,{silentJSONParsing:Ye.transitional(Ye.boolean,"1.0.0"),forcedJSONParsing:Ye.transitional(Ye.boolean,"1.0.0"),clarifyTimeoutError:Ye.transitional(Ye.boolean,"1.0.0")},!1);var n=[],i=!0;this.interceptors.request.forEach(function(f){typeof f.runWhen=="function"&&f.runWhen(e)===!1||(i=i&&f.synchronous,n.unshift(f.fulfilled,f.rejected))});var s=[];this.interceptors.response.forEach(function(f){s.push(f.fulfilled,f.rejected)});var o;if(!i){var a=[Ss,void 0];for(Array.prototype.unshift.apply(a,n),a=a.concat(s),o=Promise.resolve(e);a.length;)o=o.then(a.shift(),a.shift());return o}for(var c=e;n.length;){var l=n.shift(),u=n.shift();try{c=l(c)}catch(d){u(d);break}}try{o=Ss(c)}catch(d){return Promise.reject(d)}for(;s.length;)o=o.then(s.shift(),s.shift());return o};Ht.prototype.getUri=function(e){return e=Ur(this.defaults,e),Td(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};ta.forEach(["delete","get","head","options"],function(e){Ht.prototype[e]=function(r,n){return this.request(Ur(n||{},{method:e,url:r,data:(n||{}).data}))}});ta.forEach(["post","put","patch"],function(e){Ht.prototype[e]=function(r,n,i){return this.request(Ur(i||{},{method:e,url:r,data:n}))}});var xd=Ht,An,Is;function na(){if(Is)return An;Is=1;function t(e){this.message=e}return t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,An=t,An}var On,Cs;function kd(){if(Cs)return On;Cs=1;var t=na();function e(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var n;this.promise=new Promise(function(o){n=o});var i=this;r(function(o){i.reason||(i.reason=new t(o),n(i.reason))})}return e.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},e.source=function(){var n,i=new e(function(o){n=o});return{token:i,cancel:n}},On=e,On}var Pn,Rs;function Ad(){return Rs||(Rs=1,Pn=function(e){return function(n){return e.apply(null,n)}}),Pn}var Nn,Ts;function Od(){return Ts||(Ts=1,Nn=function(e){return typeof e=="object"&&e.isAxiosError===!0}),Nn}var xs=te,Pd=Vo,fr=xd,Nd=Qo,$d=yi;function ia(t){var e=new fr(t),r=Pd(fr.prototype.request,e);return xs.extend(r,fr.prototype,e),xs.extend(r,e),r}var ae=ia($d);ae.Axios=fr;ae.create=function(e){return ia(Nd(ae.defaults,e))};ae.Cancel=na();ae.CancelToken=kd();ae.isCancel=Xo();ae.all=function(e){return Promise.all(e)};ae.spread=Ad();ae.isAxiosError=Od();pi.exports=ae;pi.exports.default=ae;var Dd=pi.exports,Ld=Dd;const Md=gl(Ld),sa="FETCH_WEATHER_REQUEST",oa="FETCH_WEATHER_SUCCESS",aa="FETCH_WEATHER_FAILURE",Ud=()=>({type:sa}),jd=t=>({type:oa,payload:t}),Bd=t=>({type:aa,payload:t}),Fd="0ccf4d9c7c30b20269a20552ea6f7fb2",Hd="https://api.openweathermap.org/data/2.5/weather",Wd=(t,e)=>r=>{r(Ud()),Md.get(`${Hd}?q=${t},${e}&appid=${Fd}&units=metric`).then(n=>{r(jd(n.data))}).catch(n=>{r(Bd(n.message))})},ca="ADD_TO_FAVORITES",la="REMOVE_FROM_FAVORITES",zd="LOAD_FAVORITES_FROM_LOCAL_STORAGE",ua=t=>({type:ca,payload:t}),da=t=>({type:la,payload:t}),Vd={black:"#000",white:"#fff"},Ot=Vd,Kd={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},Xe=Kd,qd={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},Qe=qd,Gd={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},Ze=Gd,Jd={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},et=Jd,Yd={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},tt=Yd,Xd={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},Et=Xd,Qd={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},Zd=Qd;function S(){return S=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},S.apply(this,arguments)}function rt(t){return t!==null&&typeof t=="object"&&t.constructor===Object}function fa(t){if(!rt(t))return t;const e={};return Object.keys(t).forEach(r=>{e[r]=fa(t[r])}),e}function Ee(t,e,r={clone:!0}){const n=r.clone?S({},t):t;return rt(t)&&rt(e)&&Object.keys(e).forEach(i=>{i!=="__proto__"&&(rt(e[i])&&i in t&&rt(t[i])?n[i]=Ee(t[i],e[i],r):r.clone?n[i]=rt(e[i])?fa(e[i]):e[i]:n[i]=e[i])}),n}function ut(t){let e="https://mui.com/production-error/?code="+t;for(let r=1;r<arguments.length;r+=1)e+="&args[]="+encodeURIComponent(arguments[r]);return"Minified MUI error #"+t+"; visit "+e+" for the full message."}function F(t){if(typeof t!="string")throw new Error(ut(7));return t.charAt(0).toUpperCase()+t.slice(1)}function ef(t,e){typeof t=="function"?t(e):t&&(t.current=e)}const tf=typeof window<"u"?y.useLayoutEffect:y.useEffect,rf=tf;function sr(t){const e=y.useRef(t);return rf(()=>{e.current=t}),y.useCallback((...r)=>(0,e.current)(...r),[])}function ks(...t){return y.useMemo(()=>t.every(e=>e==null)?null:e=>{t.forEach(r=>{ef(r,e)})},t)}let jr=!0,Qn=!1,As;const nf={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function sf(t){const{type:e,tagName:r}=t;return!!(r==="INPUT"&&nf[e]&&!t.readOnly||r==="TEXTAREA"&&!t.readOnly||t.isContentEditable)}function of(t){t.metaKey||t.altKey||t.ctrlKey||(jr=!0)}function $n(){jr=!1}function af(){this.visibilityState==="hidden"&&Qn&&(jr=!0)}function cf(t){t.addEventListener("keydown",of,!0),t.addEventListener("mousedown",$n,!0),t.addEventListener("pointerdown",$n,!0),t.addEventListener("touchstart",$n,!0),t.addEventListener("visibilitychange",af,!0)}function lf(t){const{target:e}=t;try{return e.matches(":focus-visible")}catch{}return jr||sf(e)}function uf(){const t=y.useCallback(i=>{i!=null&&cf(i.ownerDocument)},[]),e=y.useRef(!1);function r(){return e.current?(Qn=!0,window.clearTimeout(As),As=window.setTimeout(()=>{Qn=!1},100),e.current=!1,!0):!1}function n(i){return lf(i)?(e.current=!0,!0):!1}return{isFocusVisibleRef:e,onFocus:n,onBlur:r,ref:t}}function ha(t,e){const r=S({},e);return Object.keys(t).forEach(n=>{if(n.toString().match(/^(components|slots)$/))r[n]=S({},t[n],r[n]);else if(n.toString().match(/^(componentsProps|slotProps)$/)){const i=t[n]||{},s=e[n];r[n]={},!s||!Object.keys(s)?r[n]=i:!i||!Object.keys(i)?r[n]=s:(r[n]=S({},s),Object.keys(i).forEach(o=>{r[n][o]=ha(i[o],s[o])}))}else r[n]===void 0&&(r[n]=t[n])}),r}function Br(t,e,r=void 0){const n={};return Object.keys(t).forEach(i=>{n[i]=t[i].reduce((s,o)=>{if(o){const a=e(o);a!==""&&s.push(a),r&&r[o]&&s.push(r[o])}return s},[]).join(" ")}),n}const Os=t=>t,df=()=>{let t=Os;return{configure(e){t=e},generate(e){return t(e)},reset(){t=Os}}},ff=df(),hf=ff,pf={active:"active",checked:"checked",completed:"completed",disabled:"disabled",readOnly:"readOnly",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",required:"required",selected:"selected"};function Wt(t,e,r="Mui"){const n=pf[e];return n?`${r}-${n}`:`${hf.generate(t)}-${e}`}function zt(t,e,r="Mui"){const n={};return e.forEach(i=>{n[i]=Wt(t,i,r)}),n}const pa="$$material";function X(t,e){if(t==null)return{};var r={},n=Object.keys(t),i,s;for(s=0;s<n.length;s++)i=n[s],!(e.indexOf(i)>=0)&&(r[i]=t[i]);return r}function ma(t){var e=Object.create(null);return function(r){return e[r]===void 0&&(e[r]=t(r)),e[r]}}var mf=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,gf=ma(function(t){return mf.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91});function yf(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function vf(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var bf=function(){function t(r){var n=this;this._insertTag=function(i){var s;n.tags.length===0?n.insertionPoint?s=n.insertionPoint.nextSibling:n.prepend?s=n.container.firstChild:s=n.before:s=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(i,s),n.tags.push(i)},this.isSpeedy=r.speedy===void 0?!0:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(n){n.forEach(this._insertTag)},e.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(vf(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var s=yf(i);try{s.insertRule(n,s.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(n));this.ctr++},e.flush=function(){this.tags.forEach(function(n){return n.parentNode&&n.parentNode.removeChild(n)}),this.tags=[],this.ctr=0},t}(),G="-ms-",Sr="-moz-",A="-webkit-",ga="comm",bi="rule",_i="decl",_f="@import",ya="@keyframes",wf="@layer",Ef=Math.abs,Fr=String.fromCharCode,Sf=Object.assign;function If(t,e){return K(t,0)^45?(((e<<2^K(t,0))<<2^K(t,1))<<2^K(t,2))<<2^K(t,3):0}function va(t){return t.trim()}function Cf(t,e){return(t=e.exec(t))?t[0]:t}function O(t,e,r){return t.replace(e,r)}function Zn(t,e){return t.indexOf(e)}function K(t,e){return t.charCodeAt(e)|0}function Pt(t,e,r){return t.slice(e,r)}function de(t){return t.length}function wi(t){return t.length}function or(t,e){return e.push(t),t}function Rf(t,e){return t.map(e).join("")}var Hr=1,dt=1,ba=0,Y=0,U=0,mt="";function Wr(t,e,r,n,i,s,o){return{value:t,root:e,parent:r,type:n,props:i,children:s,line:Hr,column:dt,length:o,return:""}}function St(t,e){return Sf(Wr("",null,null,"",null,null,0),t,{length:-t.length},e)}function Tf(){return U}function xf(){return U=Y>0?K(mt,--Y):0,dt--,U===10&&(dt=1,Hr--),U}function ee(){return U=Y<ba?K(mt,Y++):0,dt++,U===10&&(dt=1,Hr++),U}function pe(){return K(mt,Y)}function hr(){return Y}function Vt(t,e){return Pt(mt,t,e)}function Nt(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function _a(t){return Hr=dt=1,ba=de(mt=t),Y=0,[]}function wa(t){return mt="",t}function pr(t){return va(Vt(Y-1,ei(t===91?t+2:t===40?t+1:t)))}function kf(t){for(;(U=pe())&&U<33;)ee();return Nt(t)>2||Nt(U)>3?"":" "}function Af(t,e){for(;--e&&ee()&&!(U<48||U>102||U>57&&U<65||U>70&&U<97););return Vt(t,hr()+(e<6&&pe()==32&&ee()==32))}function ei(t){for(;ee();)switch(U){case t:return Y;case 34:case 39:t!==34&&t!==39&&ei(U);break;case 40:t===41&&ei(t);break;case 92:ee();break}return Y}function Of(t,e){for(;ee()&&t+U!==47+10;)if(t+U===42+42&&pe()===47)break;return"/*"+Vt(e,Y-1)+"*"+Fr(t===47?t:ee())}function Pf(t){for(;!Nt(pe());)ee();return Vt(t,Y)}function Nf(t){return wa(mr("",null,null,null,[""],t=_a(t),0,[0],t))}function mr(t,e,r,n,i,s,o,a,c){for(var l=0,u=0,d=o,f=0,m=0,g=0,h=1,p=1,b=1,_=0,I="",w=i,R=s,T=n,E=I;p;)switch(g=_,_=ee()){case 40:if(g!=108&&K(E,d-1)==58){Zn(E+=O(pr(_),"&","&\f"),"&\f")!=-1&&(b=-1);break}case 34:case 39:case 91:E+=pr(_);break;case 9:case 10:case 13:case 32:E+=kf(g);break;case 92:E+=Af(hr()-1,7);continue;case 47:switch(pe()){case 42:case 47:or($f(Of(ee(),hr()),e,r),c);break;default:E+="/"}break;case 123*h:a[l++]=de(E)*b;case 125*h:case 59:case 0:switch(_){case 0:case 125:p=0;case 59+u:b==-1&&(E=O(E,/\f/g,"")),m>0&&de(E)-d&&or(m>32?Ns(E+";",n,r,d-1):Ns(O(E," ","")+";",n,r,d-2),c);break;case 59:E+=";";default:if(or(T=Ps(E,e,r,l,u,i,a,I,w=[],R=[],d),s),_===123)if(u===0)mr(E,e,T,T,w,s,d,a,R);else switch(f===99&&K(E,3)===110?100:f){case 100:case 108:case 109:case 115:mr(t,T,T,n&&or(Ps(t,T,T,0,0,i,a,I,i,w=[],d),R),i,R,d,a,n?w:R);break;default:mr(E,T,T,T,[""],R,0,a,R)}}l=u=m=0,h=b=1,I=E="",d=o;break;case 58:d=1+de(E),m=g;default:if(h<1){if(_==123)--h;else if(_==125&&h++==0&&xf()==125)continue}switch(E+=Fr(_),_*h){case 38:b=u>0?1:(E+="\f",-1);break;case 44:a[l++]=(de(E)-1)*b,b=1;break;case 64:pe()===45&&(E+=pr(ee())),f=pe(),u=d=de(I=E+=Pf(hr())),_++;break;case 45:g===45&&de(E)==2&&(h=0)}}return s}function Ps(t,e,r,n,i,s,o,a,c,l,u){for(var d=i-1,f=i===0?s:[""],m=wi(f),g=0,h=0,p=0;g<n;++g)for(var b=0,_=Pt(t,d+1,d=Ef(h=o[g])),I=t;b<m;++b)(I=va(h>0?f[b]+" "+_:O(_,/&\f/g,f[b])))&&(c[p++]=I);return Wr(t,e,r,i===0?bi:a,c,l,u)}function $f(t,e,r){return Wr(t,e,r,ga,Fr(Tf()),Pt(t,2,-2),0)}function Ns(t,e,r,n){return Wr(t,e,r,_i,Pt(t,0,n),Pt(t,n+1,-1),n)}function st(t,e){for(var r="",n=wi(t),i=0;i<n;i++)r+=e(t[i],i,t,e)||"";return r}function Df(t,e,r,n){switch(t.type){case wf:if(t.children.length)break;case _f:case _i:return t.return=t.return||t.value;case ga:return"";case ya:return t.return=t.value+"{"+st(t.children,n)+"}";case bi:t.value=t.props.join(",")}return de(r=st(t.children,n))?t.return=t.value+"{"+r+"}":""}function Lf(t){var e=wi(t);return function(r,n,i,s){for(var o="",a=0;a<e;a++)o+=t[a](r,n,i,s)||"";return o}}function Mf(t){return function(e){e.root||(e=e.return)&&t(e)}}var Uf=function(e,r,n){for(var i=0,s=0;i=s,s=pe(),i===38&&s===12&&(r[n]=1),!Nt(s);)ee();return Vt(e,Y)},jf=function(e,r){var n=-1,i=44;do switch(Nt(i)){case 0:i===38&&pe()===12&&(r[n]=1),e[n]+=Uf(Y-1,r,n);break;case 2:e[n]+=pr(i);break;case 4:if(i===44){e[++n]=pe()===58?"&\f":"",r[n]=e[n].length;break}default:e[n]+=Fr(i)}while(i=ee());return e},Bf=function(e,r){return wa(jf(_a(e),r))},$s=new WeakMap,Ff=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var r=e.value,n=e.parent,i=e.column===n.column&&e.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(e.props.length===1&&r.charCodeAt(0)!==58&&!$s.get(n))&&!i){$s.set(e,!0);for(var s=[],o=Bf(r,s),a=n.props,c=0,l=0;c<o.length;c++)for(var u=0;u<a.length;u++,l++)e.props[l]=s[c]?o[c].replace(/&\f/g,a[u]):a[u]+" "+o[c]}}},Hf=function(e){if(e.type==="decl"){var r=e.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(e.return="",e.value="")}};function Ea(t,e){switch(If(t,e)){case 5103:return A+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return A+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return A+t+Sr+t+G+t+t;case 6828:case 4268:return A+t+G+t+t;case 6165:return A+t+G+"flex-"+t+t;case 5187:return A+t+O(t,/(\w+).+(:[^]+)/,A+"box-$1$2"+G+"flex-$1$2")+t;case 5443:return A+t+G+"flex-item-"+O(t,/flex-|-self/,"")+t;case 4675:return A+t+G+"flex-line-pack"+O(t,/align-content|flex-|-self/,"")+t;case 5548:return A+t+G+O(t,"shrink","negative")+t;case 5292:return A+t+G+O(t,"basis","preferred-size")+t;case 6060:return A+"box-"+O(t,"-grow","")+A+t+G+O(t,"grow","positive")+t;case 4554:return A+O(t,/([^-])(transform)/g,"$1"+A+"$2")+t;case 6187:return O(O(O(t,/(zoom-|grab)/,A+"$1"),/(image-set)/,A+"$1"),t,"")+t;case 5495:case 3959:return O(t,/(image-set\([^]*)/,A+"$1$`$1");case 4968:return O(O(t,/(.+:)(flex-)?(.*)/,A+"box-pack:$3"+G+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+A+t+t;case 4095:case 3583:case 4068:case 2532:return O(t,/(.+)-inline(.+)/,A+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(de(t)-1-e>6)switch(K(t,e+1)){case 109:if(K(t,e+4)!==45)break;case 102:return O(t,/(.+:)(.+)-([^]+)/,"$1"+A+"$2-$3$1"+Sr+(K(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Zn(t,"stretch")?Ea(O(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(K(t,e+1)!==115)break;case 6444:switch(K(t,de(t)-3-(~Zn(t,"!important")&&10))){case 107:return O(t,":",":"+A)+t;case 101:return O(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+A+(K(t,14)===45?"inline-":"")+"box$3$1"+A+"$2$3$1"+G+"$2box$3")+t}break;case 5936:switch(K(t,e+11)){case 114:return A+t+G+O(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return A+t+G+O(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return A+t+G+O(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return A+t+G+t+t}return t}var Wf=function(e,r,n,i){if(e.length>-1&&!e.return)switch(e.type){case _i:e.return=Ea(e.value,e.length);break;case ya:return st([St(e,{value:O(e.value,"@","@"+A)})],i);case bi:if(e.length)return Rf(e.props,function(s){switch(Cf(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return st([St(e,{props:[O(s,/:(read-\w+)/,":"+Sr+"$1")]})],i);case"::placeholder":return st([St(e,{props:[O(s,/:(plac\w+)/,":"+A+"input-$1")]}),St(e,{props:[O(s,/:(plac\w+)/,":"+Sr+"$1")]}),St(e,{props:[O(s,/:(plac\w+)/,G+"input-$1")]})],i)}return""})}},zf=[Wf],Vf=function(e){var r=e.key;if(r==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(h){var p=h.getAttribute("data-emotion");p.indexOf(" ")!==-1&&(document.head.appendChild(h),h.setAttribute("data-s",""))})}var i=e.stylisPlugins||zf,s={},o,a=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(h){for(var p=h.getAttribute("data-emotion").split(" "),b=1;b<p.length;b++)s[p[b]]=!0;a.push(h)});var c,l=[Ff,Hf];{var u,d=[Df,Mf(function(h){u.insert(h)})],f=Lf(l.concat(i,d)),m=function(p){return st(Nf(p),f)};c=function(p,b,_,I){u=_,m(p?p+"{"+b.styles+"}":b.styles),I&&(g.inserted[b.name]=!0)}}var g={key:r,sheet:new bf({key:r,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:c};return g.sheet.hydrate(a),g},Sa={exports:{}},N={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H=typeof Symbol=="function"&&Symbol.for,Ei=H?Symbol.for("react.element"):60103,Si=H?Symbol.for("react.portal"):60106,zr=H?Symbol.for("react.fragment"):60107,Vr=H?Symbol.for("react.strict_mode"):60108,Kr=H?Symbol.for("react.profiler"):60114,qr=H?Symbol.for("react.provider"):60109,Gr=H?Symbol.for("react.context"):60110,Ii=H?Symbol.for("react.async_mode"):60111,Jr=H?Symbol.for("react.concurrent_mode"):60111,Yr=H?Symbol.for("react.forward_ref"):60112,Xr=H?Symbol.for("react.suspense"):60113,Kf=H?Symbol.for("react.suspense_list"):60120,Qr=H?Symbol.for("react.memo"):60115,Zr=H?Symbol.for("react.lazy"):60116,qf=H?Symbol.for("react.block"):60121,Gf=H?Symbol.for("react.fundamental"):60117,Jf=H?Symbol.for("react.responder"):60118,Yf=H?Symbol.for("react.scope"):60119;function re(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Ei:switch(t=t.type,t){case Ii:case Jr:case zr:case Kr:case Vr:case Xr:return t;default:switch(t=t&&t.$$typeof,t){case Gr:case Yr:case Zr:case Qr:case qr:return t;default:return e}}case Si:return e}}}function Ia(t){return re(t)===Jr}N.AsyncMode=Ii;N.ConcurrentMode=Jr;N.ContextConsumer=Gr;N.ContextProvider=qr;N.Element=Ei;N.ForwardRef=Yr;N.Fragment=zr;N.Lazy=Zr;N.Memo=Qr;N.Portal=Si;N.Profiler=Kr;N.StrictMode=Vr;N.Suspense=Xr;N.isAsyncMode=function(t){return Ia(t)||re(t)===Ii};N.isConcurrentMode=Ia;N.isContextConsumer=function(t){return re(t)===Gr};N.isContextProvider=function(t){return re(t)===qr};N.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ei};N.isForwardRef=function(t){return re(t)===Yr};N.isFragment=function(t){return re(t)===zr};N.isLazy=function(t){return re(t)===Zr};N.isMemo=function(t){return re(t)===Qr};N.isPortal=function(t){return re(t)===Si};N.isProfiler=function(t){return re(t)===Kr};N.isStrictMode=function(t){return re(t)===Vr};N.isSuspense=function(t){return re(t)===Xr};N.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===zr||t===Jr||t===Kr||t===Vr||t===Xr||t===Kf||typeof t=="object"&&t!==null&&(t.$$typeof===Zr||t.$$typeof===Qr||t.$$typeof===qr||t.$$typeof===Gr||t.$$typeof===Yr||t.$$typeof===Gf||t.$$typeof===Jf||t.$$typeof===Yf||t.$$typeof===qf)};N.typeOf=re;Sa.exports=N;var Xf=Sa.exports,Ca=Xf,Qf={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Zf={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ra={};Ra[Ca.ForwardRef]=Qf;Ra[Ca.Memo]=Zf;var eh=!0;function th(t,e,r){var n="";return r.split(" ").forEach(function(i){t[i]!==void 0?e.push(t[i]+";"):n+=i+" "}),n}var Ta=function(e,r,n){var i=e.key+"-"+r.name;(n===!1||eh===!1)&&e.registered[i]===void 0&&(e.registered[i]=r.styles)},rh=function(e,r,n){Ta(e,r,n);var i=e.key+"-"+r.name;if(e.inserted[r.name]===void 0){var s=r;do e.insert(r===s?"."+i:"",s,e.sheet,!0),s=s.next;while(s!==void 0)}};function nh(t){for(var e=0,r,n=0,i=t.length;i>=4;++n,i-=4)r=t.charCodeAt(n)&255|(t.charCodeAt(++n)&255)<<8|(t.charCodeAt(++n)&255)<<16|(t.charCodeAt(++n)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,e=(r&65535)*1540483477+((r>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(i){case 3:e^=(t.charCodeAt(n+2)&255)<<16;case 2:e^=(t.charCodeAt(n+1)&255)<<8;case 1:e^=t.charCodeAt(n)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var ih={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},sh=/[A-Z]|^ms/g,oh=/_EMO_([^_]+?)_([^]*?)_EMO_/g,xa=function(e){return e.charCodeAt(1)===45},Ds=function(e){return e!=null&&typeof e!="boolean"},Dn=ma(function(t){return xa(t)?t:t.replace(sh,"-$&").toLowerCase()}),Ls=function(e,r){switch(e){case"animation":case"animationName":if(typeof r=="string")return r.replace(oh,function(n,i,s){return fe={name:i,styles:s,next:fe},i})}return ih[e]!==1&&!xa(e)&&typeof r=="number"&&r!==0?r+"px":r};function $t(t,e,r){if(r==null)return"";if(r.__emotion_styles!==void 0)return r;switch(typeof r){case"boolean":return"";case"object":{if(r.anim===1)return fe={name:r.name,styles:r.styles,next:fe},r.name;if(r.styles!==void 0){var n=r.next;if(n!==void 0)for(;n!==void 0;)fe={name:n.name,styles:n.styles,next:fe},n=n.next;var i=r.styles+";";return i}return ah(t,e,r)}case"function":{if(t!==void 0){var s=fe,o=r(t);return fe=s,$t(t,e,o)}break}}if(e==null)return r;var a=e[r];return a!==void 0?a:r}function ah(t,e,r){var n="";if(Array.isArray(r))for(var i=0;i<r.length;i++)n+=$t(t,e,r[i])+";";else for(var s in r){var o=r[s];if(typeof o!="object")e!=null&&e[o]!==void 0?n+=s+"{"+e[o]+"}":Ds(o)&&(n+=Dn(s)+":"+Ls(s,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(e==null||e[o[0]]===void 0))for(var a=0;a<o.length;a++)Ds(o[a])&&(n+=Dn(s)+":"+Ls(s,o[a])+";");else{var c=$t(t,e,o);switch(s){case"animation":case"animationName":{n+=Dn(s)+":"+c+";";break}default:n+=s+"{"+c+"}"}}}return n}var Ms=/label:\s*([^\s;\n{]+)\s*(;|$)/g,fe,ka=function(e,r,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var i=!0,s="";fe=void 0;var o=e[0];o==null||o.raw===void 0?(i=!1,s+=$t(n,r,o)):s+=o[0];for(var a=1;a<e.length;a++)s+=$t(n,r,e[a]),i&&(s+=o[a]);Ms.lastIndex=0;for(var c="",l;(l=Ms.exec(s))!==null;)c+="-"+l[1];var u=nh(s)+c;return{name:u,styles:s,next:fe}},ch=function(e){return e()},lh=y["useInsertionEffect"]?y["useInsertionEffect"]:!1,uh=lh||ch,Aa=y.createContext(typeof HTMLElement<"u"?Vf({key:"css"}):null);Aa.Provider;var dh=function(e){return al(function(r,n){var i=cl(Aa);return e(r,i,n)})},Oa=y.createContext({});function Ci(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return ka(e)}var Kt=function(){var e=Ci.apply(void 0,arguments),r="animation-"+e.name;return{name:r,styles:"@keyframes "+r+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},fh=gf,hh=function(e){return e!=="theme"},Us=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?fh:hh},js=function(e,r,n){var i;if(r){var s=r.shouldForwardProp;i=e.__emotion_forwardProp&&s?function(o){return e.__emotion_forwardProp(o)&&s(o)}:s}return typeof i!="function"&&n&&(i=e.__emotion_forwardProp),i},ph=function(e){var r=e.cache,n=e.serialized,i=e.isStringTag;return Ta(r,n,i),uh(function(){return rh(r,n,i)}),null},mh=function t(e,r){var n=e.__emotion_real===e,i=n&&e.__emotion_base||e,s,o;r!==void 0&&(s=r.label,o=r.target);var a=js(e,r,n),c=a||Us(i),l=!c("as");return function(){var u=arguments,d=n&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(s!==void 0&&d.push("label:"+s+";"),u[0]==null||u[0].raw===void 0)d.push.apply(d,u);else{d.push(u[0][0]);for(var f=u.length,m=1;m<f;m++)d.push(u[m],u[0][m])}var g=dh(function(h,p,b){var _=l&&h.as||i,I="",w=[],R=h;if(h.theme==null){R={};for(var T in h)R[T]=h[T];R.theme=y.useContext(Oa)}typeof h.className=="string"?I=th(p.registered,w,h.className):h.className!=null&&(I=h.className+" ");var E=ka(d.concat(w),p.registered,R);I+=p.key+"-"+E.name,o!==void 0&&(I+=" "+o);var B=l&&a===void 0?Us(_):c,W={};for(var k in h)l&&k==="as"||B(k)&&(W[k]=h[k]);return W.className=I,W.ref=b,y.createElement(y.Fragment,null,y.createElement(ph,{cache:p,serialized:E,isStringTag:typeof _=="string"}),y.createElement(_,W))});return g.displayName=s!==void 0?s:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",g.defaultProps=e.defaultProps,g.__emotion_real=g,g.__emotion_base=i,g.__emotion_styles=d,g.__emotion_forwardProp=a,Object.defineProperty(g,"toString",{value:function(){return"."+o}}),g.withComponent=function(h,p){return t(h,S({},r,p,{shouldForwardProp:js(g,p,!0)})).apply(void 0,d)},g}},gh=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],ti=mh.bind();gh.forEach(function(t){ti[t]=ti(t)});/**
 * @mui/styled-engine v5.13.2
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function yh(t,e){return ti(t,e)}const vh=(t,e)=>{Array.isArray(t.__emotion_styles)&&(t.__emotion_styles=e(t.__emotion_styles))},bh=["values","unit","step"],_h=t=>{const e=Object.keys(t).map(r=>({key:r,val:t[r]}))||[];return e.sort((r,n)=>r.val-n.val),e.reduce((r,n)=>S({},r,{[n.key]:n.val}),{})};function wh(t){const{values:e={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:r="px",step:n=5}=t,i=X(t,bh),s=_h(e),o=Object.keys(s);function a(f){return`@media (min-width:${typeof e[f]=="number"?e[f]:f}${r})`}function c(f){return`@media (max-width:${(typeof e[f]=="number"?e[f]:f)-n/100}${r})`}function l(f,m){const g=o.indexOf(m);return`@media (min-width:${typeof e[f]=="number"?e[f]:f}${r}) and (max-width:${(g!==-1&&typeof e[o[g]]=="number"?e[o[g]]:m)-n/100}${r})`}function u(f){return o.indexOf(f)+1<o.length?l(f,o[o.indexOf(f)+1]):a(f)}function d(f){const m=o.indexOf(f);return m===0?a(o[1]):m===o.length-1?c(o[m]):l(f,o[o.indexOf(f)+1]).replace("@media","@media not all and")}return S({keys:o,values:s,up:a,down:c,between:l,only:u,not:d,unit:r},i)}const Eh={borderRadius:4},Sh=Eh;function Tt(t,e){return e?Ee(t,e,{clone:!1}):t}const Ri={xs:0,sm:600,md:900,lg:1200,xl:1536},Bs={keys:["xs","sm","md","lg","xl"],up:t=>`@media (min-width:${Ri[t]}px)`};function Ie(t,e,r){const n=t.theme||{};if(Array.isArray(e)){const s=n.breakpoints||Bs;return e.reduce((o,a,c)=>(o[s.up(s.keys[c])]=r(e[c]),o),{})}if(typeof e=="object"){const s=n.breakpoints||Bs;return Object.keys(e).reduce((o,a)=>{if(Object.keys(s.values||Ri).indexOf(a)!==-1){const c=s.up(a);o[c]=r(e[a],a)}else{const c=a;o[c]=e[c]}return o},{})}return r(e)}function Ih(t={}){var e;return((e=t.keys)==null?void 0:e.reduce((n,i)=>{const s=t.up(i);return n[s]={},n},{}))||{}}function Ch(t,e){return t.reduce((r,n)=>{const i=r[n];return(!i||Object.keys(i).length===0)&&delete r[n],r},e)}function en(t,e,r=!0){if(!e||typeof e!="string")return null;if(t&&t.vars&&r){const n=`vars.${e}`.split(".").reduce((i,s)=>i&&i[s]?i[s]:null,t);if(n!=null)return n}return e.split(".").reduce((n,i)=>n&&n[i]!=null?n[i]:null,t)}function Ir(t,e,r,n=r){let i;return typeof t=="function"?i=t(r):Array.isArray(t)?i=t[r]||n:i=en(t,r)||n,e&&(i=e(i,n,t)),i}function P(t){const{prop:e,cssProperty:r=t.prop,themeKey:n,transform:i}=t,s=o=>{if(o[e]==null)return null;const a=o[e],c=o.theme,l=en(c,n)||{};return Ie(o,a,d=>{let f=Ir(l,i,d);return d===f&&typeof d=="string"&&(f=Ir(l,i,`${e}${d==="default"?"":F(d)}`,d)),r===!1?f:{[r]:f}})};return s.propTypes={},s.filterProps=[e],s}function Rh(t){const e={};return r=>(e[r]===void 0&&(e[r]=t(r)),e[r])}const Th={m:"margin",p:"padding"},xh={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},Fs={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},kh=Rh(t=>{if(t.length>2)if(Fs[t])t=Fs[t];else return[t];const[e,r]=t.split(""),n=Th[e],i=xh[r]||"";return Array.isArray(i)?i.map(s=>n+s):[n+i]}),Ti=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],xi=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...Ti,...xi];function qt(t,e,r,n){var i;const s=(i=en(t,e,!1))!=null?i:r;return typeof s=="number"?o=>typeof o=="string"?o:s*o:Array.isArray(s)?o=>typeof o=="string"?o:s[o]:typeof s=="function"?s:()=>{}}function Pa(t){return qt(t,"spacing",8)}function Gt(t,e){if(typeof e=="string"||e==null)return e;const r=Math.abs(e),n=t(r);return e>=0?n:typeof n=="number"?-n:`-${n}`}function Ah(t,e){return r=>t.reduce((n,i)=>(n[i]=Gt(e,r),n),{})}function Oh(t,e,r,n){if(e.indexOf(r)===-1)return null;const i=kh(r),s=Ah(i,n),o=t[r];return Ie(t,o,s)}function Na(t,e){const r=Pa(t.theme);return Object.keys(t).map(n=>Oh(t,e,n,r)).reduce(Tt,{})}function L(t){return Na(t,Ti)}L.propTypes={};L.filterProps=Ti;function M(t){return Na(t,xi)}M.propTypes={};M.filterProps=xi;function Ph(t=8){if(t.mui)return t;const e=Pa({spacing:t}),r=(...n)=>(n.length===0?[1]:n).map(s=>{const o=e(s);return typeof o=="number"?`${o}px`:o}).join(" ");return r.mui=!0,r}function tn(...t){const e=t.reduce((n,i)=>(i.filterProps.forEach(s=>{n[s]=i}),n),{}),r=n=>Object.keys(n).reduce((i,s)=>e[s]?Tt(i,e[s](n)):i,{});return r.propTypes={},r.filterProps=t.reduce((n,i)=>n.concat(i.filterProps),[]),r}function he(t){return typeof t!="number"?t:`${t}px solid`}const Nh=P({prop:"border",themeKey:"borders",transform:he}),$h=P({prop:"borderTop",themeKey:"borders",transform:he}),Dh=P({prop:"borderRight",themeKey:"borders",transform:he}),Lh=P({prop:"borderBottom",themeKey:"borders",transform:he}),Mh=P({prop:"borderLeft",themeKey:"borders",transform:he}),Uh=P({prop:"borderColor",themeKey:"palette"}),jh=P({prop:"borderTopColor",themeKey:"palette"}),Bh=P({prop:"borderRightColor",themeKey:"palette"}),Fh=P({prop:"borderBottomColor",themeKey:"palette"}),Hh=P({prop:"borderLeftColor",themeKey:"palette"}),rn=t=>{if(t.borderRadius!==void 0&&t.borderRadius!==null){const e=qt(t.theme,"shape.borderRadius",4),r=n=>({borderRadius:Gt(e,n)});return Ie(t,t.borderRadius,r)}return null};rn.propTypes={};rn.filterProps=["borderRadius"];tn(Nh,$h,Dh,Lh,Mh,Uh,jh,Bh,Fh,Hh,rn);const nn=t=>{if(t.gap!==void 0&&t.gap!==null){const e=qt(t.theme,"spacing",8),r=n=>({gap:Gt(e,n)});return Ie(t,t.gap,r)}return null};nn.propTypes={};nn.filterProps=["gap"];const sn=t=>{if(t.columnGap!==void 0&&t.columnGap!==null){const e=qt(t.theme,"spacing",8),r=n=>({columnGap:Gt(e,n)});return Ie(t,t.columnGap,r)}return null};sn.propTypes={};sn.filterProps=["columnGap"];const on=t=>{if(t.rowGap!==void 0&&t.rowGap!==null){const e=qt(t.theme,"spacing",8),r=n=>({rowGap:Gt(e,n)});return Ie(t,t.rowGap,r)}return null};on.propTypes={};on.filterProps=["rowGap"];const Wh=P({prop:"gridColumn"}),zh=P({prop:"gridRow"}),Vh=P({prop:"gridAutoFlow"}),Kh=P({prop:"gridAutoColumns"}),qh=P({prop:"gridAutoRows"}),Gh=P({prop:"gridTemplateColumns"}),Jh=P({prop:"gridTemplateRows"}),Yh=P({prop:"gridTemplateAreas"}),Xh=P({prop:"gridArea"});tn(nn,sn,on,Wh,zh,Vh,Kh,qh,Gh,Jh,Yh,Xh);function ot(t,e){return e==="grey"?e:t}const Qh=P({prop:"color",themeKey:"palette",transform:ot}),Zh=P({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:ot}),ep=P({prop:"backgroundColor",themeKey:"palette",transform:ot});tn(Qh,Zh,ep);function Z(t){return t<=1&&t!==0?`${t*100}%`:t}const tp=P({prop:"width",transform:Z}),ki=t=>{if(t.maxWidth!==void 0&&t.maxWidth!==null){const e=r=>{var n,i,s;return{maxWidth:((n=t.theme)==null||(i=n.breakpoints)==null||(s=i.values)==null?void 0:s[r])||Ri[r]||Z(r)}};return Ie(t,t.maxWidth,e)}return null};ki.filterProps=["maxWidth"];const rp=P({prop:"minWidth",transform:Z}),np=P({prop:"height",transform:Z}),ip=P({prop:"maxHeight",transform:Z}),sp=P({prop:"minHeight",transform:Z});P({prop:"size",cssProperty:"width",transform:Z});P({prop:"size",cssProperty:"height",transform:Z});const op=P({prop:"boxSizing"});tn(tp,ki,rp,np,ip,sp,op);const ap={border:{themeKey:"borders",transform:he},borderTop:{themeKey:"borders",transform:he},borderRight:{themeKey:"borders",transform:he},borderBottom:{themeKey:"borders",transform:he},borderLeft:{themeKey:"borders",transform:he},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:rn},color:{themeKey:"palette",transform:ot},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:ot},backgroundColor:{themeKey:"palette",transform:ot},p:{style:M},pt:{style:M},pr:{style:M},pb:{style:M},pl:{style:M},px:{style:M},py:{style:M},padding:{style:M},paddingTop:{style:M},paddingRight:{style:M},paddingBottom:{style:M},paddingLeft:{style:M},paddingX:{style:M},paddingY:{style:M},paddingInline:{style:M},paddingInlineStart:{style:M},paddingInlineEnd:{style:M},paddingBlock:{style:M},paddingBlockStart:{style:M},paddingBlockEnd:{style:M},m:{style:L},mt:{style:L},mr:{style:L},mb:{style:L},ml:{style:L},mx:{style:L},my:{style:L},margin:{style:L},marginTop:{style:L},marginRight:{style:L},marginBottom:{style:L},marginLeft:{style:L},marginX:{style:L},marginY:{style:L},marginInline:{style:L},marginInlineStart:{style:L},marginInlineEnd:{style:L},marginBlock:{style:L},marginBlockStart:{style:L},marginBlockEnd:{style:L},displayPrint:{cssProperty:!1,transform:t=>({"@media print":{display:t}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:nn},rowGap:{style:on},columnGap:{style:sn},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:Z},maxWidth:{style:ki},minWidth:{transform:Z},height:{transform:Z},maxHeight:{transform:Z},minHeight:{transform:Z},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}},Ai=ap;function cp(...t){const e=t.reduce((n,i)=>n.concat(Object.keys(i)),[]),r=new Set(e);return t.every(n=>r.size===Object.keys(n).length)}function lp(t,e){return typeof t=="function"?t(e):t}function up(){function t(r,n,i,s){const o={[r]:n,theme:i},a=s[r];if(!a)return{[r]:n};const{cssProperty:c=r,themeKey:l,transform:u,style:d}=a;if(n==null)return null;if(l==="typography"&&n==="inherit")return{[r]:n};const f=en(i,l)||{};return d?d(o):Ie(o,n,g=>{let h=Ir(f,u,g);return g===h&&typeof g=="string"&&(h=Ir(f,u,`${r}${g==="default"?"":F(g)}`,g)),c===!1?h:{[c]:h}})}function e(r){var n;const{sx:i,theme:s={}}=r||{};if(!i)return null;const o=(n=s.unstable_sxConfig)!=null?n:Ai;function a(c){let l=c;if(typeof c=="function")l=c(s);else if(typeof c!="object")return c;if(!l)return null;const u=Ih(s.breakpoints),d=Object.keys(u);let f=u;return Object.keys(l).forEach(m=>{const g=lp(l[m],s);if(g!=null)if(typeof g=="object")if(o[m])f=Tt(f,t(m,g,s,o));else{const h=Ie({theme:s},g,p=>({[m]:p}));cp(h,g)?f[m]=e({sx:g,theme:s}):f=Tt(f,h)}else f=Tt(f,t(m,g,s,o))}),Ch(d,f)}return Array.isArray(i)?i.map(a):a(i)}return e}const $a=up();$a.filterProps=["sx"];const Oi=$a,dp=["breakpoints","palette","spacing","shape"];function Pi(t={},...e){const{breakpoints:r={},palette:n={},spacing:i,shape:s={}}=t,o=X(t,dp),a=wh(r),c=Ph(i);let l=Ee({breakpoints:a,direction:"ltr",components:{},palette:S({mode:"light"},n),spacing:c,shape:S({},Sh,s)},o);return l=e.reduce((u,d)=>Ee(u,d),l),l.unstable_sxConfig=S({},Ai,o==null?void 0:o.unstable_sxConfig),l.unstable_sx=function(d){return Oi({sx:d,theme:this})},l}function fp(t){return Object.keys(t).length===0}function hp(t=null){const e=y.useContext(Oa);return!e||fp(e)?t:e}const pp=Pi();function mp(t=pp){return hp(t)}function Da(t){var e,r,n="";if(typeof t=="string"||typeof t=="number")n+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(r=Da(t[e]))&&(n&&(n+=" "),n+=r);else for(e in t)t[e]&&(n&&(n+=" "),n+=e);return n}function Q(){for(var t,e,r=0,n="";r<arguments.length;)(t=arguments[r++])&&(e=Da(t))&&(n&&(n+=" "),n+=e);return n}const gp=["variant"];function Hs(t){return t.length===0}function La(t){const{variant:e}=t,r=X(t,gp);let n=e||"";return Object.keys(r).sort().forEach(i=>{i==="color"?n+=Hs(n)?t[i]:F(t[i]):n+=`${Hs(n)?i:F(i)}${F(t[i].toString())}`}),n}const yp=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function vp(t){return Object.keys(t).length===0}function bp(t){return typeof t=="string"&&t.charCodeAt(0)>96}const _p=(t,e)=>e.components&&e.components[t]&&e.components[t].styleOverrides?e.components[t].styleOverrides:null,wp=(t,e)=>{let r=[];e&&e.components&&e.components[t]&&e.components[t].variants&&(r=e.components[t].variants);const n={};return r.forEach(i=>{const s=La(i.props);n[s]=i.style}),n},Ep=(t,e,r,n)=>{var i,s;const{ownerState:o={}}=t,a=[],c=r==null||(i=r.components)==null||(s=i[n])==null?void 0:s.variants;return c&&c.forEach(l=>{let u=!0;Object.keys(l.props).forEach(d=>{o[d]!==l.props[d]&&t[d]!==l.props[d]&&(u=!1)}),u&&a.push(e[La(l.props)])}),a};function gr(t){return t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"}const Sp=Pi();function It({defaultTheme:t,theme:e,themeId:r}){return vp(e)?t:e[r]||e}function Ip(t={}){const{themeId:e,defaultTheme:r=Sp,rootShouldForwardProp:n=gr,slotShouldForwardProp:i=gr}=t,s=o=>Oi(S({},o,{theme:It(S({},o,{defaultTheme:r,themeId:e}))}));return s.__mui_systemSx=!0,(o,a={})=>{vh(o,w=>w.filter(R=>!(R!=null&&R.__mui_systemSx)));const{name:c,slot:l,skipVariantsResolver:u,skipSx:d,overridesResolver:f}=a,m=X(a,yp),g=u!==void 0?u:l&&l!=="Root"||!1,h=d||!1;let p,b=gr;l==="Root"?b=n:l?b=i:bp(o)&&(b=void 0);const _=yh(o,S({shouldForwardProp:b,label:p},m)),I=(w,...R)=>{const T=R?R.map(k=>typeof k=="function"&&k.__emotion_real!==k?z=>k(S({},z,{theme:It(S({},z,{defaultTheme:r,themeId:e}))})):k):[];let E=w;c&&f&&T.push(k=>{const z=It(S({},k,{defaultTheme:r,themeId:e})),ne=_p(c,z);if(ne){const se={};return Object.entries(ne).forEach(([le,oe])=>{se[le]=typeof oe=="function"?oe(S({},k,{theme:z})):oe}),f(k,se)}return null}),c&&!g&&T.push(k=>{const z=It(S({},k,{defaultTheme:r,themeId:e}));return Ep(k,wp(c,z),z,c)}),h||T.push(s);const B=T.length-R.length;if(Array.isArray(w)&&B>0){const k=new Array(B).fill("");E=[...w,...k],E.raw=[...w.raw,...k]}else typeof w=="function"&&w.__emotion_real!==w&&(E=k=>w(S({},k,{theme:It(S({},k,{defaultTheme:r,themeId:e}))})));const W=_(E,...T);return o.muiName&&(W.muiName=o.muiName),W};return _.withConfig&&(I.withConfig=_.withConfig),I}}function Cp(t){const{theme:e,name:r,props:n}=t;return!e||!e.components||!e.components[r]||!e.components[r].defaultProps?n:ha(e.components[r].defaultProps,n)}function Rp({props:t,name:e,defaultTheme:r,themeId:n}){let i=mp(r);return n&&(i=i[n]||i),Cp({theme:i,name:e,props:t})}function Ni(t,e=0,r=1){return Math.min(Math.max(e,t),r)}function Tp(t){t=t.slice(1);const e=new RegExp(`.{1,${t.length>=6?2:1}}`,"g");let r=t.match(e);return r&&r[0].length===1&&(r=r.map(n=>n+n)),r?`rgb${r.length===4?"a":""}(${r.map((n,i)=>i<3?parseInt(n,16):Math.round(parseInt(n,16)/255*1e3)/1e3).join(", ")})`:""}function He(t){if(t.type)return t;if(t.charAt(0)==="#")return He(Tp(t));const e=t.indexOf("("),r=t.substring(0,e);if(["rgb","rgba","hsl","hsla","color"].indexOf(r)===-1)throw new Error(ut(9,t));let n=t.substring(e+1,t.length-1),i;if(r==="color"){if(n=n.split(" "),i=n.shift(),n.length===4&&n[3].charAt(0)==="/"&&(n[3]=n[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(i)===-1)throw new Error(ut(10,i))}else n=n.split(",");return n=n.map(s=>parseFloat(s)),{type:r,values:n,colorSpace:i}}function an(t){const{type:e,colorSpace:r}=t;let{values:n}=t;return e.indexOf("rgb")!==-1?n=n.map((i,s)=>s<3?parseInt(i,10):i):e.indexOf("hsl")!==-1&&(n[1]=`${n[1]}%`,n[2]=`${n[2]}%`),e.indexOf("color")!==-1?n=`${r} ${n.join(" ")}`:n=`${n.join(", ")}`,`${e}(${n})`}function xp(t){t=He(t);const{values:e}=t,r=e[0],n=e[1]/100,i=e[2]/100,s=n*Math.min(i,1-i),o=(l,u=(l+r/30)%12)=>i-s*Math.max(Math.min(u-3,9-u,1),-1);let a="rgb";const c=[Math.round(o(0)*255),Math.round(o(8)*255),Math.round(o(4)*255)];return t.type==="hsla"&&(a+="a",c.push(e[3])),an({type:a,values:c})}function Ws(t){t=He(t);let e=t.type==="hsl"||t.type==="hsla"?He(xp(t)).values:t.values;return e=e.map(r=>(t.type!=="color"&&(r/=255),r<=.03928?r/12.92:((r+.055)/1.055)**2.4)),Number((.2126*e[0]+.7152*e[1]+.0722*e[2]).toFixed(3))}function kp(t,e){const r=Ws(t),n=Ws(e);return(Math.max(r,n)+.05)/(Math.min(r,n)+.05)}function zs(t,e){return t=He(t),e=Ni(e),(t.type==="rgb"||t.type==="hsl")&&(t.type+="a"),t.type==="color"?t.values[3]=`/${e}`:t.values[3]=e,an(t)}function Ap(t,e){if(t=He(t),e=Ni(e),t.type.indexOf("hsl")!==-1)t.values[2]*=1-e;else if(t.type.indexOf("rgb")!==-1||t.type.indexOf("color")!==-1)for(let r=0;r<3;r+=1)t.values[r]*=1-e;return an(t)}function Op(t,e){if(t=He(t),e=Ni(e),t.type.indexOf("hsl")!==-1)t.values[2]+=(100-t.values[2])*e;else if(t.type.indexOf("rgb")!==-1)for(let r=0;r<3;r+=1)t.values[r]+=(255-t.values[r])*e;else if(t.type.indexOf("color")!==-1)for(let r=0;r<3;r+=1)t.values[r]+=(1-t.values[r])*e;return an(t)}function Pp(t,e){return S({toolbar:{minHeight:56,[t.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[t.up("sm")]:{minHeight:64}}},e)}const Np=["mode","contrastThreshold","tonalOffset"],Vs={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:Ot.white,default:Ot.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},Ln={text:{primary:Ot.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:Ot.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function Ks(t,e,r,n){const i=n.light||n,s=n.dark||n*1.5;t[e]||(t.hasOwnProperty(r)?t[e]=t[r]:e==="light"?t.light=Op(t.main,i):e==="dark"&&(t.dark=Ap(t.main,s)))}function $p(t="light"){return t==="dark"?{main:Ze[200],light:Ze[50],dark:Ze[400]}:{main:Ze[700],light:Ze[400],dark:Ze[800]}}function Dp(t="light"){return t==="dark"?{main:Qe[200],light:Qe[50],dark:Qe[400]}:{main:Qe[500],light:Qe[300],dark:Qe[700]}}function Lp(t="light"){return t==="dark"?{main:Xe[500],light:Xe[300],dark:Xe[700]}:{main:Xe[700],light:Xe[400],dark:Xe[800]}}function Mp(t="light"){return t==="dark"?{main:et[400],light:et[300],dark:et[700]}:{main:et[700],light:et[500],dark:et[900]}}function Up(t="light"){return t==="dark"?{main:tt[400],light:tt[300],dark:tt[700]}:{main:tt[800],light:tt[500],dark:tt[900]}}function jp(t="light"){return t==="dark"?{main:Et[400],light:Et[300],dark:Et[700]}:{main:"#ed6c02",light:Et[500],dark:Et[900]}}function Bp(t){const{mode:e="light",contrastThreshold:r=3,tonalOffset:n=.2}=t,i=X(t,Np),s=t.primary||$p(e),o=t.secondary||Dp(e),a=t.error||Lp(e),c=t.info||Mp(e),l=t.success||Up(e),u=t.warning||jp(e);function d(h){return kp(h,Ln.text.primary)>=r?Ln.text.primary:Vs.text.primary}const f=({color:h,name:p,mainShade:b=500,lightShade:_=300,darkShade:I=700})=>{if(h=S({},h),!h.main&&h[b]&&(h.main=h[b]),!h.hasOwnProperty("main"))throw new Error(ut(11,p?` (${p})`:"",b));if(typeof h.main!="string")throw new Error(ut(12,p?` (${p})`:"",JSON.stringify(h.main)));return Ks(h,"light",_,n),Ks(h,"dark",I,n),h.contrastText||(h.contrastText=d(h.main)),h},m={dark:Ln,light:Vs};return Ee(S({common:S({},Ot),mode:e,primary:f({color:s,name:"primary"}),secondary:f({color:o,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:f({color:a,name:"error"}),warning:f({color:u,name:"warning"}),info:f({color:c,name:"info"}),success:f({color:l,name:"success"}),grey:Zd,contrastThreshold:r,getContrastText:d,augmentColor:f,tonalOffset:n},m[e]),i)}const Fp=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function Hp(t){return Math.round(t*1e5)/1e5}const qs={textTransform:"uppercase"},Gs='"Roboto", "Helvetica", "Arial", sans-serif';function Wp(t,e){const r=typeof e=="function"?e(t):e,{fontFamily:n=Gs,fontSize:i=14,fontWeightLight:s=300,fontWeightRegular:o=400,fontWeightMedium:a=500,fontWeightBold:c=700,htmlFontSize:l=16,allVariants:u,pxToRem:d}=r,f=X(r,Fp),m=i/14,g=d||(b=>`${b/l*m}rem`),h=(b,_,I,w,R)=>S({fontFamily:n,fontWeight:b,fontSize:g(_),lineHeight:I},n===Gs?{letterSpacing:`${Hp(w/_)}em`}:{},R,u),p={h1:h(s,96,1.167,-1.5),h2:h(s,60,1.2,-.5),h3:h(o,48,1.167,0),h4:h(o,34,1.235,.25),h5:h(o,24,1.334,0),h6:h(a,20,1.6,.15),subtitle1:h(o,16,1.75,.15),subtitle2:h(a,14,1.57,.1),body1:h(o,16,1.5,.15),body2:h(o,14,1.43,.15),button:h(a,14,1.75,.4,qs),caption:h(o,12,1.66,.4),overline:h(o,12,2.66,1,qs),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return Ee(S({htmlFontSize:l,pxToRem:g,fontFamily:n,fontSize:i,fontWeightLight:s,fontWeightRegular:o,fontWeightMedium:a,fontWeightBold:c},p),f,{clone:!1})}const zp=.2,Vp=.14,Kp=.12;function D(...t){return[`${t[0]}px ${t[1]}px ${t[2]}px ${t[3]}px rgba(0,0,0,${zp})`,`${t[4]}px ${t[5]}px ${t[6]}px ${t[7]}px rgba(0,0,0,${Vp})`,`${t[8]}px ${t[9]}px ${t[10]}px ${t[11]}px rgba(0,0,0,${Kp})`].join(",")}const qp=["none",D(0,2,1,-1,0,1,1,0,0,1,3,0),D(0,3,1,-2,0,2,2,0,0,1,5,0),D(0,3,3,-2,0,3,4,0,0,1,8,0),D(0,2,4,-1,0,4,5,0,0,1,10,0),D(0,3,5,-1,0,5,8,0,0,1,14,0),D(0,3,5,-1,0,6,10,0,0,1,18,0),D(0,4,5,-2,0,7,10,1,0,2,16,1),D(0,5,5,-3,0,8,10,1,0,3,14,2),D(0,5,6,-3,0,9,12,1,0,3,16,2),D(0,6,6,-3,0,10,14,1,0,4,18,3),D(0,6,7,-4,0,11,15,1,0,4,20,3),D(0,7,8,-4,0,12,17,2,0,5,22,4),D(0,7,8,-4,0,13,19,2,0,5,24,4),D(0,7,9,-4,0,14,21,2,0,5,26,4),D(0,8,9,-5,0,15,22,2,0,6,28,5),D(0,8,10,-5,0,16,24,2,0,6,30,5),D(0,8,11,-5,0,17,26,2,0,6,32,5),D(0,9,11,-5,0,18,28,2,0,7,34,6),D(0,9,12,-6,0,19,29,2,0,7,36,6),D(0,10,13,-6,0,20,31,3,0,8,38,7),D(0,10,13,-6,0,21,33,3,0,8,40,7),D(0,10,14,-6,0,22,35,3,0,8,42,7),D(0,11,14,-7,0,23,36,3,0,9,44,8),D(0,11,15,-7,0,24,38,3,0,9,46,8)],Gp=qp,Jp=["duration","easing","delay"],Yp={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},Xp={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function Js(t){return`${Math.round(t)}ms`}function Qp(t){if(!t)return 0;const e=t/36;return Math.round((4+15*e**.25+e/5)*10)}function Zp(t){const e=S({},Yp,t.easing),r=S({},Xp,t.duration);return S({getAutoHeightDuration:Qp,create:(i=["all"],s={})=>{const{duration:o=r.standard,easing:a=e.easeInOut,delay:c=0}=s;return X(s,Jp),(Array.isArray(i)?i:[i]).map(l=>`${l} ${typeof o=="string"?o:Js(o)} ${a} ${typeof c=="string"?c:Js(c)}`).join(",")}},t,{easing:e,duration:r})}const em={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},tm=em,rm=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function nm(t={},...e){const{mixins:r={},palette:n={},transitions:i={},typography:s={}}=t,o=X(t,rm);if(t.vars)throw new Error(ut(18));const a=Bp(n),c=Pi(t);let l=Ee(c,{mixins:Pp(c.breakpoints,r),palette:a,shadows:Gp.slice(),typography:Wp(a,s),transitions:Zp(i),zIndex:S({},tm)});return l=Ee(l,o),l=e.reduce((u,d)=>Ee(u,d),l),l.unstable_sxConfig=S({},Ai,o==null?void 0:o.unstable_sxConfig),l.unstable_sx=function(d){return Oi({sx:d,theme:this})},l}const im=nm(),Ma=im;function Jt({props:t,name:e}){return Rp({props:t,name:e,defaultTheme:Ma,themeId:pa})}const sm=t=>gr(t)&&t!=="classes",om=Ip({themeId:pa,defaultTheme:Ma,rootShouldForwardProp:sm}),Le=om;function am(t){return Wt("MuiSvgIcon",t)}zt("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const cm=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],lm=t=>{const{color:e,fontSize:r,classes:n}=t,i={root:["root",e!=="inherit"&&`color${F(e)}`,`fontSize${F(r)}`]};return Br(i,am,n)},um=Le("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.color!=="inherit"&&e[`color${F(r.color)}`],e[`fontSize${F(r.fontSize)}`]]}})(({theme:t,ownerState:e})=>{var r,n,i,s,o,a,c,l,u,d,f,m,g,h,p,b,_;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:e.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(r=t.transitions)==null||(n=r.create)==null?void 0:n.call(r,"fill",{duration:(i=t.transitions)==null||(s=i.duration)==null?void 0:s.shorter}),fontSize:{inherit:"inherit",small:((o=t.typography)==null||(a=o.pxToRem)==null?void 0:a.call(o,20))||"1.25rem",medium:((c=t.typography)==null||(l=c.pxToRem)==null?void 0:l.call(c,24))||"1.5rem",large:((u=t.typography)==null||(d=u.pxToRem)==null?void 0:d.call(u,35))||"2.1875rem"}[e.fontSize],color:(f=(m=(t.vars||t).palette)==null||(g=m[e.color])==null?void 0:g.main)!=null?f:{action:(h=(t.vars||t).palette)==null||(p=h.action)==null?void 0:p.active,disabled:(b=(t.vars||t).palette)==null||(_=b.action)==null?void 0:_.disabled,inherit:void 0}[e.color]}}),Ua=y.forwardRef(function(e,r){const n=Jt({props:e,name:"MuiSvgIcon"}),{children:i,className:s,color:o="inherit",component:a="svg",fontSize:c="medium",htmlColor:l,inheritViewBox:u=!1,titleAccess:d,viewBox:f="0 0 24 24"}=n,m=X(n,cm),g=y.isValidElement(i)&&i.type==="svg",h=S({},n,{color:o,component:a,fontSize:c,instanceFontSize:e.fontSize,inheritViewBox:u,viewBox:f,hasSvgAsChild:g}),p={};u||(p.viewBox=f);const b=lm(h);return v.jsxs(um,S({as:a,className:Q(b.root,s),focusable:"false",color:l,"aria-hidden":d?void 0:!0,role:d?"img":void 0,ref:r},p,m,g&&i.props,{ownerState:h,children:[g?i.props.children:i,d?v.jsx("title",{children:d}):null]}))});Ua.muiName="SvgIcon";const Ys=Ua;function ja(t,e){function r(n,i){return v.jsx(Ys,S({"data-testid":`${e}Icon`,ref:i},n,{children:t}))}return r.muiName=Ys.muiName,y.memo(y.forwardRef(r))}function ri(t,e){return ri=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},ri(t,e)}function dm(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,ri(t,e)}const Xs=nt.createContext(null);function fm(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function $i(t,e){var r=function(s){return e&&cr(s)?e(s):s},n=Object.create(null);return t&&ll.map(t,function(i){return i}).forEach(function(i){n[i.key]=r(i)}),n}function hm(t,e){t=t||{},e=e||{};function r(u){return u in e?e[u]:t[u]}var n=Object.create(null),i=[];for(var s in t)s in e?i.length&&(n[s]=i,i=[]):i.push(s);var o,a={};for(var c in e){if(n[c])for(o=0;o<n[c].length;o++){var l=n[c][o];a[n[c][o]]=r(l)}a[c]=r(c)}for(o=0;o<i.length;o++)a[i[o]]=r(i[o]);return a}function Be(t,e,r){return r[e]!=null?r[e]:t.props[e]}function pm(t,e){return $i(t.children,function(r){return lr(r,{onExited:e.bind(null,r),in:!0,appear:Be(r,"appear",t),enter:Be(r,"enter",t),exit:Be(r,"exit",t)})})}function mm(t,e,r){var n=$i(t.children),i=hm(e,n);return Object.keys(i).forEach(function(s){var o=i[s];if(cr(o)){var a=s in e,c=s in n,l=e[s],u=cr(l)&&!l.props.in;c&&(!a||u)?i[s]=lr(o,{onExited:r.bind(null,o),in:!0,exit:Be(o,"exit",t),enter:Be(o,"enter",t)}):!c&&a&&!u?i[s]=lr(o,{in:!1}):c&&a&&cr(l)&&(i[s]=lr(o,{onExited:r.bind(null,o),in:l.props.in,exit:Be(o,"exit",t),enter:Be(o,"enter",t)}))}}),i}var gm=Object.values||function(t){return Object.keys(t).map(function(e){return t[e]})},ym={component:"div",childFactory:function(e){return e}},Di=function(t){dm(e,t);function e(n,i){var s;s=t.call(this,n,i)||this;var o=s.handleExited.bind(fm(s));return s.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},s}var r=e.prototype;return r.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},r.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(i,s){var o=s.children,a=s.handleExited,c=s.firstRender;return{children:c?pm(i,a):mm(i,o,a),firstRender:!1}},r.handleExited=function(i,s){var o=$i(this.props.children);i.key in o||(i.props.onExited&&i.props.onExited(s),this.mounted&&this.setState(function(a){var c=S({},a.children);return delete c[i.key],{children:c}}))},r.render=function(){var i=this.props,s=i.component,o=i.childFactory,a=X(i,["component","childFactory"]),c=this.state.contextValue,l=gm(this.state.children).map(o);return delete a.appear,delete a.enter,delete a.exit,s===null?nt.createElement(Xs.Provider,{value:c},l):nt.createElement(Xs.Provider,{value:c},nt.createElement(s,a,l))},e}(nt.Component);Di.propTypes={};Di.defaultProps=ym;const vm=Di;function bm(t){const{className:e,classes:r,pulsate:n=!1,rippleX:i,rippleY:s,rippleSize:o,in:a,onExited:c,timeout:l}=t,[u,d]=y.useState(!1),f=Q(e,r.ripple,r.rippleVisible,n&&r.ripplePulsate),m={width:o,height:o,top:-(o/2)+s,left:-(o/2)+i},g=Q(r.child,u&&r.childLeaving,n&&r.childPulsate);return!a&&!u&&d(!0),y.useEffect(()=>{if(!a&&c!=null){const h=setTimeout(c,l);return()=>{clearTimeout(h)}}},[c,a,l]),v.jsx("span",{className:f,style:m,children:v.jsx("span",{className:g})})}const _m=zt("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),ie=_m,wm=["center","classes","className"];let cn=t=>t,Qs,Zs,eo,to;const ni=550,Em=80,Sm=Kt(Qs||(Qs=cn`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),Im=Kt(Zs||(Zs=cn`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),Cm=Kt(eo||(eo=cn`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),Rm=Le("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),Tm=Le(bm,{name:"MuiTouchRipple",slot:"Ripple"})(to||(to=cn`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),ie.rippleVisible,Sm,ni,({theme:t})=>t.transitions.easing.easeInOut,ie.ripplePulsate,({theme:t})=>t.transitions.duration.shorter,ie.child,ie.childLeaving,Im,ni,({theme:t})=>t.transitions.easing.easeInOut,ie.childPulsate,Cm,({theme:t})=>t.transitions.easing.easeInOut),xm=y.forwardRef(function(e,r){const n=Jt({props:e,name:"MuiTouchRipple"}),{center:i=!1,classes:s={},className:o}=n,a=X(n,wm),[c,l]=y.useState([]),u=y.useRef(0),d=y.useRef(null);y.useEffect(()=>{d.current&&(d.current(),d.current=null)},[c]);const f=y.useRef(!1),m=y.useRef(0),g=y.useRef(null),h=y.useRef(null);y.useEffect(()=>()=>{m.current&&clearTimeout(m.current)},[]);const p=y.useCallback(w=>{const{pulsate:R,rippleX:T,rippleY:E,rippleSize:B,cb:W}=w;l(k=>[...k,v.jsx(Tm,{classes:{ripple:Q(s.ripple,ie.ripple),rippleVisible:Q(s.rippleVisible,ie.rippleVisible),ripplePulsate:Q(s.ripplePulsate,ie.ripplePulsate),child:Q(s.child,ie.child),childLeaving:Q(s.childLeaving,ie.childLeaving),childPulsate:Q(s.childPulsate,ie.childPulsate)},timeout:ni,pulsate:R,rippleX:T,rippleY:E,rippleSize:B},u.current)]),u.current+=1,d.current=W},[s]),b=y.useCallback((w={},R={},T=()=>{})=>{const{pulsate:E=!1,center:B=i||R.pulsate,fakeElement:W=!1}=R;if((w==null?void 0:w.type)==="mousedown"&&f.current){f.current=!1;return}(w==null?void 0:w.type)==="touchstart"&&(f.current=!0);const k=W?null:h.current,z=k?k.getBoundingClientRect():{width:0,height:0,left:0,top:0};let ne,se,le;if(B||w===void 0||w.clientX===0&&w.clientY===0||!w.clientX&&!w.touches)ne=Math.round(z.width/2),se=Math.round(z.height/2);else{const{clientX:oe,clientY:ye}=w.touches&&w.touches.length>0?w.touches[0]:w;ne=Math.round(oe-z.left),se=Math.round(ye-z.top)}if(B)le=Math.sqrt((2*z.width**2+z.height**2)/3),le%2===0&&(le+=1);else{const oe=Math.max(Math.abs((k?k.clientWidth:0)-ne),ne)*2+2,ye=Math.max(Math.abs((k?k.clientHeight:0)-se),se)*2+2;le=Math.sqrt(oe**2+ye**2)}w!=null&&w.touches?g.current===null&&(g.current=()=>{p({pulsate:E,rippleX:ne,rippleY:se,rippleSize:le,cb:T})},m.current=setTimeout(()=>{g.current&&(g.current(),g.current=null)},Em)):p({pulsate:E,rippleX:ne,rippleY:se,rippleSize:le,cb:T})},[i,p]),_=y.useCallback(()=>{b({},{pulsate:!0})},[b]),I=y.useCallback((w,R)=>{if(clearTimeout(m.current),(w==null?void 0:w.type)==="touchend"&&g.current){g.current(),g.current=null,m.current=setTimeout(()=>{I(w,R)});return}g.current=null,l(T=>T.length>0?T.slice(1):T),d.current=R},[]);return y.useImperativeHandle(r,()=>({pulsate:_,start:b,stop:I}),[_,b,I]),v.jsx(Rm,S({className:Q(ie.root,s.root,o),ref:h},a,{children:v.jsx(vm,{component:null,exit:!0,children:c})}))}),km=xm;function Am(t){return Wt("MuiButtonBase",t)}const Om=zt("MuiButtonBase",["root","disabled","focusVisible"]),Pm=Om,Nm=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],$m=t=>{const{disabled:e,focusVisible:r,focusVisibleClassName:n,classes:i}=t,o=Br({root:["root",e&&"disabled",r&&"focusVisible"]},Am,i);return r&&n&&(o.root+=` ${n}`),o},Dm=Le("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(t,e)=>e.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${Pm.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Lm=y.forwardRef(function(e,r){const n=Jt({props:e,name:"MuiButtonBase"}),{action:i,centerRipple:s=!1,children:o,className:a,component:c="button",disabled:l=!1,disableRipple:u=!1,disableTouchRipple:d=!1,focusRipple:f=!1,LinkComponent:m="a",onBlur:g,onClick:h,onContextMenu:p,onDragLeave:b,onFocus:_,onFocusVisible:I,onKeyDown:w,onKeyUp:R,onMouseDown:T,onMouseLeave:E,onMouseUp:B,onTouchEnd:W,onTouchMove:k,onTouchStart:z,tabIndex:ne=0,TouchRippleProps:se,touchRippleRef:le,type:oe}=n,ye=X(n,Nm),_t=y.useRef(null),ue=y.useRef(null),Bc=ks(ue,le),{isFocusVisibleRef:Gi,onFocus:Fc,onBlur:Hc,ref:Wc}=uf(),[Ue,nr]=y.useState(!1);l&&Ue&&nr(!1),y.useImperativeHandle(i,()=>({focusVisible:()=>{nr(!0),_t.current.focus()}}),[]);const[hn,zc]=y.useState(!1);y.useEffect(()=>{zc(!0)},[]);const Vc=hn&&!u&&!l;y.useEffect(()=>{Ue&&f&&!u&&hn&&ue.current.pulsate()},[u,f,Ue,hn]);function ve(x,Yi,ol=d){return sr(Xi=>(Yi&&Yi(Xi),!ol&&ue.current&&ue.current[x](Xi),!0))}const Kc=ve("start",T),qc=ve("stop",p),Gc=ve("stop",b),Jc=ve("stop",B),Yc=ve("stop",x=>{Ue&&x.preventDefault(),E&&E(x)}),Xc=ve("start",z),Qc=ve("stop",W),Zc=ve("stop",k),el=ve("stop",x=>{Hc(x),Gi.current===!1&&nr(!1),g&&g(x)},!1),tl=sr(x=>{_t.current||(_t.current=x.currentTarget),Fc(x),Gi.current===!0&&(nr(!0),I&&I(x)),_&&_(x)}),pn=()=>{const x=_t.current;return c&&c!=="button"&&!(x.tagName==="A"&&x.href)},mn=y.useRef(!1),rl=sr(x=>{f&&!mn.current&&Ue&&ue.current&&x.key===" "&&(mn.current=!0,ue.current.stop(x,()=>{ue.current.start(x)})),x.target===x.currentTarget&&pn()&&x.key===" "&&x.preventDefault(),w&&w(x),x.target===x.currentTarget&&pn()&&x.key==="Enter"&&!l&&(x.preventDefault(),h&&h(x))}),nl=sr(x=>{f&&x.key===" "&&ue.current&&Ue&&!x.defaultPrevented&&(mn.current=!1,ue.current.stop(x,()=>{ue.current.pulsate(x)})),R&&R(x),h&&x.target===x.currentTarget&&pn()&&x.key===" "&&!x.defaultPrevented&&h(x)});let ir=c;ir==="button"&&(ye.href||ye.to)&&(ir=m);const wt={};ir==="button"?(wt.type=oe===void 0?"button":oe,wt.disabled=l):(!ye.href&&!ye.to&&(wt.role="button"),l&&(wt["aria-disabled"]=l));const il=ks(r,Wc,_t),Ji=S({},n,{centerRipple:s,component:c,disabled:l,disableRipple:u,disableTouchRipple:d,focusRipple:f,tabIndex:ne,focusVisible:Ue}),sl=$m(Ji);return v.jsxs(Dm,S({as:ir,className:Q(sl.root,a),ownerState:Ji,onBlur:el,onClick:h,onContextMenu:qc,onFocus:tl,onKeyDown:rl,onKeyUp:nl,onMouseDown:Kc,onMouseLeave:Yc,onMouseUp:Jc,onDragLeave:Gc,onTouchEnd:Qc,onTouchMove:Zc,onTouchStart:Xc,ref:il,tabIndex:l?-1:ne,type:oe},wt,ye,{children:[o,Vc?v.jsx(km,S({ref:Bc,center:s},se)):null]}))}),Mm=Lm;function Um(t){return Wt("MuiIconButton",t)}const jm=zt("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),Bm=jm,Fm=["edge","children","className","color","disabled","disableFocusRipple","size"],Hm=t=>{const{classes:e,disabled:r,color:n,edge:i,size:s}=t,o={root:["root",r&&"disabled",n!=="default"&&`color${F(n)}`,i&&`edge${F(i)}`,`size${F(s)}`]};return Br(o,Um,e)},Wm=Le(Mm,{name:"MuiIconButton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.color!=="default"&&e[`color${F(r.color)}`],r.edge&&e[`edge${F(r.edge)}`],e[`size${F(r.size)}`]]}})(({theme:t,ownerState:e})=>S({textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(t.vars||t).palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest})},!e.disableRipple&&{"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:zs(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12}),({theme:t,ownerState:e})=>{var r;const n=(r=(t.vars||t).palette)==null?void 0:r[e.color];return S({},e.color==="inherit"&&{color:"inherit"},e.color!=="inherit"&&e.color!=="default"&&S({color:n==null?void 0:n.main},!e.disableRipple&&{"&:hover":S({},n&&{backgroundColor:t.vars?`rgba(${n.mainChannel} / ${t.vars.palette.action.hoverOpacity})`:zs(n.main,t.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),e.size==="small"&&{padding:5,fontSize:t.typography.pxToRem(18)},e.size==="large"&&{padding:12,fontSize:t.typography.pxToRem(28)},{[`&.${Bm.disabled}`]:{backgroundColor:"transparent",color:(t.vars||t).palette.action.disabled}})}),zm=y.forwardRef(function(e,r){const n=Jt({props:e,name:"MuiIconButton"}),{edge:i=!1,children:s,className:o,color:a="default",disabled:c=!1,disableFocusRipple:l=!1,size:u="medium"}=n,d=X(n,Fm),f=S({},n,{edge:i,color:a,disabled:c,disableFocusRipple:l,size:u}),m=Hm(f);return v.jsx(Wm,S({className:Q(m.root,o),centerRipple:!0,focusRipple:!l,disabled:c,ref:r,ownerState:f},d,{children:s}))}),Ba=zm;function Vm(t){return Wt("MuiCircularProgress",t)}zt("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const Km=["className","color","disableShrink","size","style","thickness","value","variant"];let ln=t=>t,ro,no,io,so;const Re=44,qm=Kt(ro||(ro=ln`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),Gm=Kt(no||(no=ln`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),Jm=t=>{const{classes:e,variant:r,color:n,disableShrink:i}=t,s={root:["root",r,`color${F(n)}`],svg:["svg"],circle:["circle",`circle${F(r)}`,i&&"circleDisableShrink"]};return Br(s,Vm,e)},Ym=Le("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,e[r.variant],e[`color${F(r.color)}`]]}})(({ownerState:t,theme:e})=>S({display:"inline-block"},t.variant==="determinate"&&{transition:e.transitions.create("transform")},t.color!=="inherit"&&{color:(e.vars||e).palette[t.color].main}),({ownerState:t})=>t.variant==="indeterminate"&&Ci(io||(io=ln`
      animation: ${0} 1.4s linear infinite;
    `),qm)),Xm=Le("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(t,e)=>e.svg})({display:"block"}),Qm=Le("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.circle,e[`circle${F(r.variant)}`],r.disableShrink&&e.circleDisableShrink]}})(({ownerState:t,theme:e})=>S({stroke:"currentColor"},t.variant==="determinate"&&{transition:e.transitions.create("stroke-dashoffset")},t.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:t})=>t.variant==="indeterminate"&&!t.disableShrink&&Ci(so||(so=ln`
      animation: ${0} 1.4s ease-in-out infinite;
    `),Gm)),Zm=y.forwardRef(function(e,r){const n=Jt({props:e,name:"MuiCircularProgress"}),{className:i,color:s="primary",disableShrink:o=!1,size:a=40,style:c,thickness:l=3.6,value:u=0,variant:d="indeterminate"}=n,f=X(n,Km),m=S({},n,{color:s,disableShrink:o,size:a,thickness:l,value:u,variant:d}),g=Jm(m),h={},p={},b={};if(d==="determinate"){const _=2*Math.PI*((Re-l)/2);h.strokeDasharray=_.toFixed(3),b["aria-valuenow"]=Math.round(u),h.strokeDashoffset=`${((100-u)/100*_).toFixed(3)}px`,p.transform="rotate(-90deg)"}return v.jsx(Ym,S({className:Q(g.root,i),style:S({width:a,height:a},p,c),ownerState:m,ref:r,role:"progressbar"},b,f,{children:v.jsx(Xm,{className:g.svg,ownerState:m,viewBox:`${Re/2} ${Re/2} ${Re} ${Re}`,children:v.jsx(Qm,{className:g.circle,style:h,ownerState:m,cx:Re,cy:Re,r:(Re-l)/2,fill:"none",strokeWidth:l})})}))}),eg=Zm,Fa=ja(v.jsx("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite"),Ha=ja(v.jsx("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"}),"FavoriteBorder"),tg=()=>{const t=Se(l=>l.weather.data),e=Se(l=>l.favorites),[r,n]=we(!0),i=e.some(l=>l.id===t.id),s=Bt(),o=()=>{n(!r)},a=l=>r?`${l} °C`:`${(l*9/5+32).toFixed(2)} °F`,c=()=>{if(i)s(da(t.id));else{const{id:l,name:u,sys:d}=t;s(ua({id:l,name:u,country:d.country}))}};return v.jsx("div",{className:"weather-card",children:t?v.jsx(v.Fragment,{children:v.jsxs("div",{className:"weather-info",children:[v.jsx("h2",{children:`${t.name}, ${t.sys.country}`}),v.jsxs("div",{className:"temperature-switch",children:[v.jsx("span",{children:a(t.main.temp)}),v.jsx("button",{onClick:o,children:r?"Switch to Fahrenheit":"Switch to Celsius"}),v.jsx(Ba,{onClick:c,children:i?v.jsx(Fa,{}):v.jsx(Ha,{})})]}),v.jsx("div",{className:"weather-description",children:t.weather[0].description})]})}):v.jsx(eg,{})})},rg=`.weather{display:flex;flex-wrap:wrap;justify-content:flex-start;gap:20px;width:100%}.weatherCard{text-align:center;padding:10px;border:1px solid #ccc;border-radius:8px;box-shadow:0 4px 6px #0000001a;width:150px}.weather img{width:50px;height:50px;margin-bottom:10px}.weather-day-1,.weather-day-2,.weather-day-3,.weather-day-4,.weather-day-5,.weather-day-6,.weather-day-7{display:inline-block;flex-direction:column;align-items:center;text-align:center;padding:10px;border-radius:8px;box-shadow:0 4px 6px #0000001a;margin-right:10px;width:150px;color:#ccc}.weather-day-1 img,.weather-day-2 img,.weather-day-3 img,.weather-day-4 img,.weather-day-5 img,.weather-day-6 img,.weather-day-7{width:50px;height:50px;margin-bottom:10px}.weatherCard:nth-child(1){background-color:#f1f1f1}.weatherCard:nth-child(2){background-color:#f9f9f9}.weatherCard:nth-child(3){background-color:#fefefe}.weatherCard:nth-child(4){background-color:#f8f8f8}.weatherCard:nth-child(5){background-color:#f5f5f5}.weatherCard:nth-child(6){background-color:#f2f2f2}.weatherCard:nth-child(7){background-color:#f2f2f2}
`,ng="0ccf4d9c7c30b20269a20552ea6f7fb2";function ig({apiKey:t,lat:e,lon:r,units:n="metric"}){const[i,s]=we(null),o=`https://api.openweathermap.org/data/2.5/onecall?lat=${e}&lon=${r}&appid=${t}&units=${n}`;return No(()=>{fetch(o).then(a=>a.json()).then(a=>{s(a)})},[o]),i}function sg({lat:t,lon:e}){const r=ig({apiKey:ng,lat:t,lon:e,units:"metric"});return v.jsx("div",{className:rg.weather,children:r&&r.daily.slice(0,7).map((n,i)=>v.jsxs("div",{className:`weather-day-${i+1}`,children:[v.jsx("img",{src:`http://openweathermap.org/img/w/${n.weather[0].icon}.png`,alt:n.weather[0].main}),v.jsx("div",{children:i===0?"Today":`Day ${i+1}`}),v.jsx("div",{children:n.weather[0].description}),v.jsx("div",{children:`Max: ${n.temp.max}°C`}),v.jsx("div",{children:`Min: ${n.temp.min}°C`})]},i))})}const og=()=>{const[t,e]=we(""),[r,n]=we(""),i=Se(a=>a.weather.data),s=Bt(),o=()=>{s(Wd(t,r))};return v.jsx("div",{className:"container",children:v.jsxs("div",{className:"weather-page",children:[v.jsxs("div",{className:"search-bar",children:[v.jsx("input",{type:"text",placeholder:"Enter city",value:t,onChange:a=>e(a.target.value)}),v.jsx("input",{type:"text",placeholder:"Enter country",value:r,onChange:a=>n(a.target.value)}),v.jsx("button",{onClick:o,children:"Search"})]}),i&&v.jsx("div",{className:"current-weather",children:v.jsx("div",{className:"current-weather-info",children:v.jsx(tg,{weatherData:i})})}),i&&v.jsx("div",{className:"weekly-weather",children:v.jsxs("div",{className:"weekly-weather-wrapper",children:[v.jsx("h2",{children:"Weekly Weather Forecast"}),v.jsx(sg,{lat:i.coord.lat,lon:i.coord.lon})]})})]})})},ag=()=>{const t=Se(i=>i.favorites),e=Bt(),r=i=>t.some(s=>s.id===i),n=i=>{r(i.id)?e(da(i.id)):e(ua(i))};return v.jsx("div",{className:"favorites",children:t.length>0?v.jsx("ul",{className:"favorites-list",children:t.map(i=>v.jsxs("li",{children:[v.jsx("span",{className:"favorite-city",children:`${i.name}, ${i.country}`}),v.jsx(Ba,{onClick:()=>n(i),children:r(i.id)?v.jsx(Fa,{style:{color:"white"}}):v.jsx(Ha,{style:{color:"white"}})})]},i.id))}):v.jsx("p",{style:{color:"white"},children:"No favorite cities yet."})})},cg=()=>{const t=Se(e=>e.favorites);return v.jsxs("div",{className:"favorites-page",children:[v.jsx("h2",{style:{color:"white"},children:"Favorites"}),t.length>0?v.jsx(ag,{}):v.jsx("p",{style:{color:"white"},children:"No favorite cities added yet."})]})};/**
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
 */const Wa=function(t){const e=[];let r=0;for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);i<128?e[r++]=i:i<2048?(e[r++]=i>>6|192,e[r++]=i&63|128):(i&64512)===55296&&n+1<t.length&&(t.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++n)&1023),e[r++]=i>>18|240,e[r++]=i>>12&63|128,e[r++]=i>>6&63|128,e[r++]=i&63|128):(e[r++]=i>>12|224,e[r++]=i>>6&63|128,e[r++]=i&63|128)}return e},lg=function(t){const e=[];let r=0,n=0;for(;r<t.length;){const i=t[r++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[r++];e[n++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[r++],o=t[r++],a=t[r++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{const s=t[r++],o=t[r++];e[n++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},za={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,l=c?t[i+2]:0,u=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|l>>6,m=l&63;c||(m=64,o||(f=64)),n.push(r[u],r[d],r[f],r[m])}return n.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Wa(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):lg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const r=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<t.length;){const s=r[t.charAt(i++)],a=i<t.length?r[t.charAt(i)]:0;++i;const l=i<t.length?r[t.charAt(i)]:64;++i;const d=i<t.length?r[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||d==null)throw new ug;const f=s<<2|a>>4;if(n.push(f),l!==64){const m=a<<4&240|l>>2;if(n.push(m),d!==64){const g=l<<6&192|d;n.push(g)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ug extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const dg=function(t){const e=Wa(t);return za.encodeByteArray(e,!0)},Va=function(t){return dg(t).replace(/\./g,"")},Ka=function(t){try{return za.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function fg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const hg=()=>fg().__FIREBASE_DEFAULTS__,pg=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},mg=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ka(t[1]);return e&&JSON.parse(e)},Li=()=>{try{return hg()||pg()||mg()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},gg=t=>{var e,r;return(r=(e=Li())===null||e===void 0?void 0:e.emulatorHosts)===null||r===void 0?void 0:r[t]},qa=()=>{var t;return(t=Li())===null||t===void 0?void 0:t.config},Ga=t=>{var e;return(e=Li())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class yg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}wrapCallback(e){return(r,n)=>{r?this.reject(r):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(r):e(r,n))}}}/**
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
 */function J(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(J())}function bg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function _g(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wg(){const t=J();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Eg(){try{return typeof indexedDB=="object"}catch{return!1}}function Sg(){return new Promise((t,e)=>{try{let r=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),t(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(r){e(r)}})}/**
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
 */const Ig="FirebaseError";class Me extends Error{constructor(e,r,n){super(r),this.code=e,this.customData=n,this.name=Ig,Object.setPrototypeOf(this,Me.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yt.prototype.create)}}class Yt{constructor(e,r,n){this.service=e,this.serviceName=r,this.errors=n}create(e,...r){const n=r[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Cg(s,n):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Me(i,a,n)}}function Cg(t,e){return t.replace(Rg,(r,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const Rg=/\{\$([^}]+)}/g;function Tg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Cr(t,e){if(t===e)return!0;const r=Object.keys(t),n=Object.keys(e);for(const i of r){if(!n.includes(i))return!1;const s=t[i],o=e[i];if(oo(s)&&oo(o)){if(!Cr(s,o))return!1}else if(s!==o)return!1}for(const i of n)if(!r.includes(i))return!1;return!0}function oo(t){return t!==null&&typeof t=="object"}/**
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
 */function Xt(t){const e=[];for(const[r,n]of Object.entries(t))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(r)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function Ct(t){const e={};return t.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[i,s]=n.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Rt(t){const e=t.indexOf("?");if(!e)return"";const r=t.indexOf("#",e);return t.substring(e,r>0?r:void 0)}function xg(t,e){const r=new kg(t,e);return r.subscribe.bind(r)}class kg{constructor(e,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(r=>{r.next(e)})}error(e){this.forEachObserver(r=>{r.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,r,n){let i;if(e===void 0&&r===void 0&&n===void 0)throw new Error("Missing Observer.");Ag(e,["next","error","complete"])?i=e:i={next:e,error:r,complete:n},i.next===void 0&&(i.next=Mn),i.error===void 0&&(i.error=Mn),i.complete===void 0&&(i.complete=Mn);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,e)}sendOne(e,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{r(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ag(t,e){if(typeof t!="object"||t===null)return!1;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}function Mn(){}/**
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
 */function Ge(t){return t&&t._delegate?t._delegate:t}class ft{constructor(e,r,n){this.name=e,this.instanceFactory=r,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const je="[DEFAULT]";/**
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
 */class Og{constructor(e,r){this.name=e,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const r=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(r)){const n=new yg;if(this.instancesDeferred.set(r,n),this.isInitialized(r)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:r});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(e){var r;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(r=e==null?void 0:e.optional)!==null&&r!==void 0?r:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ng(e))try{this.getOrInitializeService({instanceIdentifier:je})}catch{}for(const[r,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(r);try{const s=this.getOrInitializeService({instanceIdentifier:i});n.resolve(s)}catch{}}}}clearInstance(e=je){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...e.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=je){return this.instances.has(e)}getOptions(e=je){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:r={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:r});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);n===a&&o.resolve(i)}return i}onInit(e,r){var n;const i=this.normalizeInstanceIdentifier(r),s=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,r){const n=this.onInitCallbacks.get(r);if(n)for(const i of n)try{i(e,r)}catch{}}getOrInitializeService({instanceIdentifier:e,options:r={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Pg(e),options:r}),this.instances.set(e,n),this.instancesOptions.set(e,r),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=je){return this.component?this.component.multipleInstances?e:je:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Pg(t){return t===je?void 0:t}function Ng(t){return t.instantiationMode==="EAGER"}/**
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
 */class $g{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const r=this.getProvider(e.name);if(r.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);r.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const r=new Og(e,this);return this.providers.set(e,r),r}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var $;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})($||($={}));const Dg={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},Lg=$.INFO,Mg={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},Ug=(t,e,...r)=>{if(e<t.logLevel)return;const n=new Date().toISOString(),i=Mg[e];if(i)console[i](`[${n}]  ${t.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ja{constructor(e){this.name=e,this._logLevel=Lg,this._logHandler=Ug,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Dg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...e),this._logHandler(this,$.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...e),this._logHandler(this,$.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$.INFO,...e),this._logHandler(this,$.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$.WARN,...e),this._logHandler(this,$.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...e),this._logHandler(this,$.ERROR,...e)}}const jg=(t,e)=>e.some(r=>t instanceof r);let ao,co;function Bg(){return ao||(ao=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Fg(){return co||(co=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ya=new WeakMap,ii=new WeakMap,Xa=new WeakMap,Un=new WeakMap,Mi=new WeakMap;function Hg(t){const e=new Promise((r,n)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{r($e(t.result)),i()},o=()=>{n(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(r=>{r instanceof IDBCursor&&Ya.set(r,t)}).catch(()=>{}),Mi.set(e,t),e}function Wg(t){if(ii.has(t))return;const e=new Promise((r,n)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{r(),i()},o=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ii.set(t,e)}let si={get(t,e,r){if(t instanceof IDBTransaction){if(e==="done")return ii.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Xa.get(t);if(e==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return $e(t[e])},set(t,e,r){return t[e]=r,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function zg(t){si=t(si)}function Vg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...r){const n=t.call(jn(this),e,...r);return Xa.set(n,e.sort?e.sort():[e]),$e(n)}:Fg().includes(t)?function(...e){return t.apply(jn(this),e),$e(Ya.get(this))}:function(...e){return $e(t.apply(jn(this),e))}}function Kg(t){return typeof t=="function"?Vg(t):(t instanceof IDBTransaction&&Wg(t),jg(t,Bg())?new Proxy(t,si):t)}function $e(t){if(t instanceof IDBRequest)return Hg(t);if(Un.has(t))return Un.get(t);const e=Kg(t);return e!==t&&(Un.set(t,e),Mi.set(e,t)),e}const jn=t=>Mi.get(t);function qg(t,e,{blocked:r,upgrade:n,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=$e(o);return n&&o.addEventListener("upgradeneeded",c=>{n($e(o.result),c.oldVersion,c.newVersion,$e(o.transaction),c)}),r&&o.addEventListener("blocked",c=>r(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Gg=["get","getKey","getAll","getAllKeys","count"],Jg=["put","add","delete","clear"],Bn=new Map;function lo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Bn.get(e))return Bn.get(e);const r=e.replace(/FromIndex$/,""),n=e!==r,i=Jg.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||Gg.includes(r)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return n&&(l=l.index(a.shift())),(await Promise.all([l[r](...a),i&&c.done]))[0]};return Bn.set(e,s),s}zg(t=>({...t,get:(e,r,n)=>lo(e,r)||t.get(e,r,n),has:(e,r)=>!!lo(e,r)||t.has(e,r)}));/**
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
 */class Yg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(Xg(r)){const n=r.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(r=>r).join(" ")}}function Xg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const oi="@firebase/app",uo="0.9.15";/**
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
 */const We=new Ja("@firebase/app"),Qg="@firebase/app-compat",Zg="@firebase/analytics-compat",ey="@firebase/analytics",ty="@firebase/app-check-compat",ry="@firebase/app-check",ny="@firebase/auth",iy="@firebase/auth-compat",sy="@firebase/database",oy="@firebase/database-compat",ay="@firebase/functions",cy="@firebase/functions-compat",ly="@firebase/installations",uy="@firebase/installations-compat",dy="@firebase/messaging",fy="@firebase/messaging-compat",hy="@firebase/performance",py="@firebase/performance-compat",my="@firebase/remote-config",gy="@firebase/remote-config-compat",yy="@firebase/storage",vy="@firebase/storage-compat",by="@firebase/firestore",_y="@firebase/firestore-compat",wy="firebase",Ey="10.1.0";/**
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
 */const ai="[DEFAULT]",Sy={[oi]:"fire-core",[Qg]:"fire-core-compat",[ey]:"fire-analytics",[Zg]:"fire-analytics-compat",[ry]:"fire-app-check",[ty]:"fire-app-check-compat",[ny]:"fire-auth",[iy]:"fire-auth-compat",[sy]:"fire-rtdb",[oy]:"fire-rtdb-compat",[ay]:"fire-fn",[cy]:"fire-fn-compat",[ly]:"fire-iid",[uy]:"fire-iid-compat",[dy]:"fire-fcm",[fy]:"fire-fcm-compat",[hy]:"fire-perf",[py]:"fire-perf-compat",[my]:"fire-rc",[gy]:"fire-rc-compat",[yy]:"fire-gcs",[vy]:"fire-gcs-compat",[by]:"fire-fst",[_y]:"fire-fst-compat","fire-js":"fire-js",[wy]:"fire-js-all"};/**
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
 */const Rr=new Map,ci=new Map;function Iy(t,e){try{t.container.addComponent(e)}catch(r){We.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,r)}}function Dt(t){const e=t.name;if(ci.has(e))return We.debug(`There were multiple attempts to register component ${e}.`),!1;ci.set(e,t);for(const r of Rr.values())Iy(r,t);return!0}function Qa(t,e){const r=t.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Cy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},De=new Yt("app","Firebase",Cy);/**
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
 */class Ry{constructor(e,r,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ft("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw De.create("app-deleted",{appName:this._name})}}/**
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
 */const Qt=Ey;function Ui(t,e={}){let r=t;typeof e!="object"&&(e={name:e});const n=Object.assign({name:ai,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw De.create("bad-app-name",{appName:String(i)});if(r||(r=qa()),!r)throw De.create("no-options");const s=Rr.get(i);if(s){if(Cr(r,s.options)&&Cr(n,s.config))return s;throw De.create("duplicate-app",{appName:i})}const o=new $g(i);for(const c of ci.values())o.addComponent(c);const a=new Ry(r,n,o);return Rr.set(i,a),a}function Ty(t=ai){const e=Rr.get(t);if(!e&&t===ai&&qa())return Ui();if(!e)throw De.create("no-app",{appName:t});return e}function at(t,e,r){var n;let i=(n=Sy[t])!==null&&n!==void 0?n:t;r&&(i+=`-${r}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),We.warn(a.join(" "));return}Dt(new ft(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const xy="firebase-heartbeat-database",ky=1,Lt="firebase-heartbeat-store";let Fn=null;function Za(){return Fn||(Fn=qg(xy,ky,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Lt)}}}).catch(t=>{throw De.create("idb-open",{originalErrorMessage:t.message})})),Fn}async function Ay(t){try{return await(await Za()).transaction(Lt).objectStore(Lt).get(ec(t))}catch(e){if(e instanceof Me)We.warn(e.message);else{const r=De.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});We.warn(r.message)}}}async function fo(t,e){try{const n=(await Za()).transaction(Lt,"readwrite");await n.objectStore(Lt).put(e,ec(t)),await n.done}catch(r){if(r instanceof Me)We.warn(r.message);else{const n=De.create("idb-set",{originalErrorMessage:r==null?void 0:r.message});We.warn(n.message)}}}function ec(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Oy=1024,Py=30*24*60*60*1e3;class Ny{constructor(e){this.container=e,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new Dy(r),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=ho();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(i=>i.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Py}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ho(),{heartbeatsToSend:r,unsentEntries:n}=$y(this._heartbeatsCache.heartbeats),i=Va(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ho(){return new Date().toISOString().substring(0,10)}function $y(t,e=Oy){const r=[];let n=t.slice();for(const i of t){const s=r.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),po(r)>e){s.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),po(r)>e){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}class Dy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Eg()?Sg().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ay(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var r;if(await this._canUseIndexedDBPromise){const i=await this.read();return fo(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var r;if(await this._canUseIndexedDBPromise){const i=await this.read();return fo(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function po(t){return Va(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Ly(t){Dt(new ft("platform-logger",e=>new Yg(e),"PRIVATE")),Dt(new ft("heartbeat",e=>new Ny(e),"PRIVATE")),at(oi,uo,t),at(oi,uo,"esm2017"),at("fire-js","")}Ly("");function ji(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]]);return r}function tc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const My=tc,rc=new Yt("auth","Firebase",tc());/**
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
 */const Tr=new Ja("@firebase/auth");function Uy(t,...e){Tr.logLevel<=$.WARN&&Tr.warn(`Auth (${Qt}): ${t}`,...e)}function yr(t,...e){Tr.logLevel<=$.ERROR&&Tr.error(`Auth (${Qt}): ${t}`,...e)}/**
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
 */function ce(t,...e){throw Bi(t,...e)}function me(t,...e){return Bi(t,...e)}function jy(t,e,r){const n=Object.assign(Object.assign({},My()),{[e]:r});return new Yt("auth","Firebase",n).create(e,{appName:t.name})}function Bi(t,...e){if(typeof t!="string"){const r=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=t.name),t._errorFactory.create(r,...n)}return rc.create(t,...e)}function C(t,e,...r){if(!t)throw Bi(e,...r)}function be(t){const e="INTERNAL ASSERTION FAILED: "+t;throw yr(e),new Error(e)}function Ce(t,e){t||be(e)}/**
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
 */function li(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function By(){return mo()==="http:"||mo()==="https:"}function mo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Fy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(By()||bg()||"connection"in navigator)?navigator.onLine:!0}function Hy(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Zt{constructor(e,r){this.shortDelay=e,this.longDelay=r,Ce(r>e,"Short delay should be less than long delay!"),this.isMobile=vg()||_g()}get(){return Fy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Fi(t,e){Ce(t.emulator,"Emulator should always be set here");const{url:r}=t.emulator;return e?`${r}${e.startsWith("/")?e.slice(1):e}`:r}/**
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
 */class nc{static initialize(e,r,n){this.fetchImpl=e,r&&(this.headersImpl=r),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;be("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;be("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;be("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Wy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const zy=new Zt(3e4,6e4);function gt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function yt(t,e,r,n,i={}){return ic(t,i,async()=>{let s={},o={};n&&(e==="GET"?o=n:s={body:JSON.stringify(n)});const a=Xt(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),nc.fetch()(sc(t,t.config.apiHost,r,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function ic(t,e,r){t._canInitEmulator=!1;const n=Object.assign(Object.assign({},Wy),e);try{const i=new Vy(t),s=await Promise.race([r(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ar(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ar(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ar(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ar(t,"user-disabled",o);const u=n[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw jy(t,u,l);ce(t,u)}}catch(i){if(i instanceof Me)throw i;ce(t,"network-request-failed",{message:String(i)})}}async function er(t,e,r,n,i={}){const s=await yt(t,e,r,n,i);return"mfaPendingCredential"in s&&ce(t,"multi-factor-auth-required",{_serverResponse:s}),s}function sc(t,e,r,n){const i=`${e}${r}?${n}`;return t.config.emulator?Fi(t.config,i):`${t.config.apiScheme}://${i}`}class Vy{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((r,n)=>{this.timer=setTimeout(()=>n(me(this.auth,"network-request-failed")),zy.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ar(t,e,r){const n={appName:t.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);const i=me(t,e,n);return i.customData._tokenResponse=r,i}/**
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
 */async function Ky(t,e){return yt(t,"POST","/v1/accounts:delete",e)}async function qy(t,e){return yt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function xt(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Gy(t,e=!1){const r=Ge(t),n=await r.getIdToken(e),i=Hi(n);C(i&&i.exp&&i.auth_time&&i.iat,r.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:n,authTime:xt(Hn(i.auth_time)),issuedAtTime:xt(Hn(i.iat)),expirationTime:xt(Hn(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Hn(t){return Number(t)*1e3}function Hi(t){const[e,r,n]=t.split(".");if(e===void 0||r===void 0||n===void 0)return yr("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ka(r);return i?JSON.parse(i):(yr("Failed to decode base64 JWT payload"),null)}catch(i){return yr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Jy(t){const e=Hi(t);return C(e,"internal-error"),C(typeof e.exp<"u","internal-error"),C(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Mt(t,e,r=!1){if(r)return e;try{return await e}catch(n){throw n instanceof Me&&Yy(n)&&t.auth.currentUser===t&&await t.auth.signOut(),n}}function Yy({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Xy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var r;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=((r=this.user.stsTokenManager.expirationTime)!==null&&r!==void 0?r:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const r=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class oc{constructor(e,r){this.createdAt=e,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=xt(this.lastLoginAt),this.creationTime=xt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function xr(t){var e;const r=t.auth,n=await t.getIdToken(),i=await Mt(t,qy(r,{idToken:n}));C(i==null?void 0:i.users.length,r,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?e0(s.providerUserInfo):[],a=Zy(t.providerData,o),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new oc(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function Qy(t){const e=Ge(t);await xr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Zy(t,e){return[...t.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function e0(t){return t.map(e=>{var{providerId:r}=e,n=ji(e,["providerId"]);return{providerId:r,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
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
 */async function t0(t,e){const r=await ic(t,{},async()=>{const n=Xt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=sc(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",nc.fetch()(o,{method:"POST",headers:a,body:n})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}/**
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
 */class Ut{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){C(e.idToken,"internal-error"),C(typeof e.idToken<"u","internal-error"),C(typeof e.refreshToken<"u","internal-error");const r="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Jy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}async getToken(e,r=!1){return C(!this.accessToken||this.refreshToken,e,"user-token-expired"),!r&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,r){const{accessToken:n,refreshToken:i,expiresIn:s}=await t0(e,r);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,r,n){this.refreshToken=r||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,r){const{refreshToken:n,accessToken:i,expirationTime:s}=r,o=new Ut;return n&&(C(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),i&&(C(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(C(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ut,this.toJSON())}_performRefresh(){return be("not implemented")}}/**
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
 */function Te(t,e){C(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Fe{constructor(e){var{uid:r,auth:n,stsTokenManager:i}=e,s=ji(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Xy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new oc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const r=await Mt(this,this.stsTokenManager.getToken(this.auth,e));return C(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(e){return Gy(this,e)}reload(){return Qy(this)}_assign(e){this!==e&&(C(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(r=>Object.assign({},r)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const r=new Fe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return r.metadata._copy(this.metadata),r}_onReload(e){C(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,r=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),r&&await xr(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Mt(this,Ky(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,r){var n,i,s,o,a,c,l,u;const d=(n=r.displayName)!==null&&n!==void 0?n:void 0,f=(i=r.email)!==null&&i!==void 0?i:void 0,m=(s=r.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=r.photoURL)!==null&&o!==void 0?o:void 0,h=(a=r.tenantId)!==null&&a!==void 0?a:void 0,p=(c=r._redirectEventId)!==null&&c!==void 0?c:void 0,b=(l=r.createdAt)!==null&&l!==void 0?l:void 0,_=(u=r.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:I,emailVerified:w,isAnonymous:R,providerData:T,stsTokenManager:E}=r;C(I&&E,e,"internal-error");const B=Ut.fromJSON(this.name,E);C(typeof I=="string",e,"internal-error"),Te(d,e.name),Te(f,e.name),C(typeof w=="boolean",e,"internal-error"),C(typeof R=="boolean",e,"internal-error"),Te(m,e.name),Te(g,e.name),Te(h,e.name),Te(p,e.name),Te(b,e.name),Te(_,e.name);const W=new Fe({uid:I,auth:e,email:f,emailVerified:w,displayName:d,isAnonymous:R,photoURL:g,phoneNumber:m,tenantId:h,stsTokenManager:B,createdAt:b,lastLoginAt:_});return T&&Array.isArray(T)&&(W.providerData=T.map(k=>Object.assign({},k))),p&&(W._redirectEventId=p),W}static async _fromIdTokenResponse(e,r,n=!1){const i=new Ut;i.updateFromServerResponse(r);const s=new Fe({uid:r.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await xr(s),s}}/**
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
 */const go=new Map;function _e(t){Ce(t instanceof Function,"Expected a class definition");let e=go.get(t);return e?(Ce(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,go.set(t,e),e)}/**
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
 */class ac{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,r){this.storage[e]=r}async _get(e){const r=this.storage[e];return r===void 0?null:r}async _remove(e){delete this.storage[e]}_addListener(e,r){}_removeListener(e,r){}}ac.type="NONE";const yo=ac;/**
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
 */function vr(t,e,r){return`firebase:${t}:${e}:${r}`}class ct{constructor(e,r,n){this.persistence=e,this.auth=r,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=vr(this.userKey,i.apiKey,s),this.fullPersistenceKey=vr("persistence",i.apiKey,s),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Fe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,r,n="authUser"){if(!r.length)return new ct(_e(yo),e,n);const i=(await Promise.all(r.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||_e(yo);const o=vr(n,e.config.apiKey,e.name);let a=null;for(const l of r)try{const u=await l._get(o);if(u){const d=Fe._fromJSON(e,u);l!==s&&(a=d),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new ct(s,e,n):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(r.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new ct(s,e,n))}}/**
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
 */function vo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(uc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fc(e))return"Blackberry";if(hc(e))return"Webos";if(Wi(e))return"Safari";if((e.includes("chrome/")||lc(e))&&!e.includes("edge/"))return"Chrome";if(dc(e))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(r);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function cc(t=J()){return/firefox\//i.test(t)}function Wi(t=J()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function lc(t=J()){return/crios\//i.test(t)}function uc(t=J()){return/iemobile/i.test(t)}function dc(t=J()){return/android/i.test(t)}function fc(t=J()){return/blackberry/i.test(t)}function hc(t=J()){return/webos/i.test(t)}function un(t=J()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function r0(t=J()){var e;return un(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function n0(){return wg()&&document.documentMode===10}function pc(t=J()){return un(t)||dc(t)||hc(t)||fc(t)||/windows phone/i.test(t)||uc(t)}function i0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function mc(t,e=[]){let r;switch(t){case"Browser":r=vo(J());break;case"Worker":r=`${vo(J())}-${t}`;break;default:r=t}const n=e.length?e.join(","):"FirebaseCore-web";return`${r}/JsCore/${Qt}/${n}`}async function gc(t,e){return yt(t,"GET","/v2/recaptchaConfig",gt(t,e))}function bo(t){return t!==void 0&&t.enterprise!==void 0}class yc{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(r=>r.provider==="EMAIL_PASSWORD_PROVIDER"&&r.enforcementState!=="OFF")}}/**
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
 */function s0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function vc(t){return new Promise((e,r)=>{const n=document.createElement("script");n.setAttribute("src",t),n.onload=e,n.onerror=i=>{const s=me("internal-error");s.customData=i,r(s)},n.type="text/javascript",n.charset="UTF-8",s0().appendChild(n)})}function o0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const a0="https://www.google.com/recaptcha/enterprise.js?render=",c0="recaptcha-enterprise",l0="NO_RECAPTCHA";class bc{constructor(e){this.type=c0,this.auth=vt(e)}async verify(e="verify",r=!1){async function n(s){if(!r){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{gc(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new yc(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;bo(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(l=>{o(l)}).catch(()=>{o(l0)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{n(this.auth).then(a=>{if(!r&&bo(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}vc(a0+a).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function kr(t,e,r,n=!1){const i=new bc(t);let s;try{s=await i.verify(r)}catch{s=await i.verify(r,!0)}const o=Object.assign({},e);return n?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class u0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,r){const n=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});n.onAbort=r,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const r=[];try{for(const n of this.queue)await n(e),n.onAbort&&r.push(n.onAbort)}catch(n){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */class d0{constructor(e,r,n,i){this.app=e,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _o(this),this.idTokenSubscription=new _o(this),this.beforeStateQueue=new u0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,r){return r&&(this._popupRedirectResolver=_e(r)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await ct.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var r;const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return C(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(e){try{await xr(e)}catch(r){if((r==null?void 0:r.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Hy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const r=e?Ge(e):null;return r&&C(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(e,r=!1){if(!this._deleted)return e&&C(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(_e(e))})}async initializeRecaptchaConfig(){const e=await gc(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new yc(e);this.tenantId==null?this._agentRecaptchaConfig=r:this._tenantRecaptchaConfigs[this.tenantId]=r,r.emailPasswordEnabled&&new bc(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Yt("auth","Firebase",e())}onAuthStateChanged(e,r,n){return this.registerStateListener(this.authStateSubscription,e,r,n)}beforeAuthStateChanged(e,r){return this.beforeStateQueue.pushCallback(e,r)}onIdTokenChanged(e,r,n){return this.registerStateListener(this.idTokenSubscription,e,r,n)}authStateReady(){return new Promise((e,r)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},r)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,r){const n=await this.getOrInitRedirectPersistenceManager(r);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const r=e&&_e(e)||this._popupRedirectResolver;C(r,this,"argument-error"),this.redirectPersistenceManager=await ct.create(this,[_e(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var r,n;return this._isInitialized&&await this.queue(async()=>{}),((r=this._currentUser)===null||r===void 0?void 0:r._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(r=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&r!==void 0?r:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,r,n,i){if(this._deleted)return()=>{};const s=typeof r=="function"?r:r.next.bind(r),o=this._isInitialized?Promise.resolve():this._initializationPromise;return C(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof r=="function"?e.addObserver(r,n,i):e.addObserver(r)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return C(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=mc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const r={"X-Client-Version":this.clientVersion};this.app.options.appId&&(r["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(r["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(r["X-Firebase-AppCheck"]=i),r}async _getAppCheckToken(){var e;const r=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return r!=null&&r.error&&Uy(`Error while retrieving App Check token: ${r.error}`),r==null?void 0:r.token}}function vt(t){return Ge(t)}class _o{constructor(e){this.auth=e,this.observer=null,this.addObserver=xg(r=>this.observer=r)}get next(){return C(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function f0(t,e){const r=Qa(t,"auth");if(r.isInitialized()){const i=r.getImmediate(),s=r.getOptions();if(Cr(s,e??{}))return i;ce(i,"already-initialized")}return r.initialize({options:e})}function h0(t,e){const r=(e==null?void 0:e.persistence)||[],n=(Array.isArray(r)?r:[r]).map(_e);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function p0(t,e,r){const n=vt(t);C(n._canInitEmulator,n,"emulator-config-failed"),C(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!!(r!=null&&r.disableWarnings),s=_c(e),{host:o,port:a}=m0(e),c=a===null?"":`:${a}`;n.config.emulator={url:`${s}//${o}${c}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||g0()}function _c(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function m0(t){const e=_c(t),r=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!r)return{host:"",port:null};const n=r[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const s=i[1];return{host:s,port:wo(n.substr(s.length+1))}}else{const[s,o]=n.split(":");return{host:s,port:wo(o)}}}function wo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function g0(){function t(){const e=document.createElement("p"),r=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class zi{constructor(e,r){this.providerId=e,this.signInMethod=r}toJSON(){return be("not implemented")}_getIdTokenResponse(e){return be("not implemented")}_linkToIdToken(e,r){return be("not implemented")}_getReauthenticationResolver(e){return be("not implemented")}}async function y0(t,e){return yt(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Wn(t,e){return er(t,"POST","/v1/accounts:signInWithPassword",gt(t,e))}/**
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
 */async function v0(t,e){return er(t,"POST","/v1/accounts:signInWithEmailLink",gt(t,e))}async function b0(t,e){return er(t,"POST","/v1/accounts:signInWithEmailLink",gt(t,e))}/**
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
 */class jt extends zi{constructor(e,r,n,i=null){super("password",n),this._email=e,this._password=r,this._tenantId=i}static _fromEmailAndPassword(e,r){return new jt(e,r,"password")}static _fromEmailAndCode(e,r,n=null){return new jt(e,r,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e;if(r!=null&&r.email&&(r!=null&&r.password)){if(r.signInMethod==="password")return this._fromEmailAndPassword(r.email,r.password);if(r.signInMethod==="emailLink")return this._fromEmailAndCode(r.email,r.password,r.tenantId)}return null}async _getIdTokenResponse(e){var r;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((r=e._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const i=await kr(e,n,"signInWithPassword");return Wn(e,i)}else return Wn(e,n).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await kr(e,n,"signInWithPassword");return Wn(e,s)}else return Promise.reject(i)});case"emailLink":return v0(e,{email:this._email,oobCode:this._password});default:ce(e,"internal-error")}}async _linkToIdToken(e,r){switch(this.signInMethod){case"password":return y0(e,{idToken:r,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return b0(e,{idToken:r,email:this._email,oobCode:this._password});default:ce(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function lt(t,e){return er(t,"POST","/v1/accounts:signInWithIdp",gt(t,e))}/**
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
 */const _0="http://localhost";class ze extends zi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const r=new ze(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(r.idToken=e.idToken),e.accessToken&&(r.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(r.nonce=e.nonce),e.pendingToken&&(r.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(r.accessToken=e.oauthToken,r.secret=e.oauthTokenSecret):ce("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i}=r,s=ji(r,["providerId","signInMethod"]);if(!n||!i)return null;const o=new ze(n,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const r=this.buildRequest();return lt(e,r)}_linkToIdToken(e,r){const n=this.buildRequest();return n.idToken=r,lt(e,n)}_getReauthenticationResolver(e){const r=this.buildRequest();return r.autoCreate=!1,lt(e,r)}buildRequest(){const e={requestUri:_0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),e.postBody=Xt(r)}return e}}/**
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
 */function w0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function E0(t){const e=Ct(Rt(t)).link,r=e?Ct(Rt(e)).deep_link_id:null,n=Ct(Rt(t)).deep_link_id;return(n?Ct(Rt(n)).link:null)||n||r||e||t}class Vi{constructor(e){var r,n,i,s,o,a;const c=Ct(Rt(e)),l=(r=c.apiKey)!==null&&r!==void 0?r:null,u=(n=c.oobCode)!==null&&n!==void 0?n:null,d=w0((i=c.mode)!==null&&i!==void 0?i:null);C(l&&u&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=u,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const r=E0(e);try{return new Vi(r)}catch{return null}}}/**
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
 */class bt{constructor(){this.providerId=bt.PROVIDER_ID}static credential(e,r){return jt._fromEmailAndPassword(e,r)}static credentialWithLink(e,r){const n=Vi.parseLink(r);return C(n,"argument-error"),jt._fromEmailAndCode(e,n.code,n.tenantId)}}bt.PROVIDER_ID="password";bt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";bt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class wc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class tr extends wc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class xe extends tr{constructor(){super("facebook.com")}static credential(e){return ze._fromParams({providerId:xe.PROVIDER_ID,signInMethod:xe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xe.credentialFromTaggedObject(e)}static credentialFromError(e){return xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xe.credential(e.oauthAccessToken)}catch{return null}}}xe.FACEBOOK_SIGN_IN_METHOD="facebook.com";xe.PROVIDER_ID="facebook.com";/**
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
 */class ke extends tr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,r){return ze._fromParams({providerId:ke.PROVIDER_ID,signInMethod:ke.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:r})}static credentialFromResult(e){return ke.credentialFromTaggedObject(e)}static credentialFromError(e){return ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:r,oauthAccessToken:n}=e;if(!r&&!n)return null;try{return ke.credential(r,n)}catch{return null}}}ke.GOOGLE_SIGN_IN_METHOD="google.com";ke.PROVIDER_ID="google.com";/**
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
 */class Ae extends tr{constructor(){super("github.com")}static credential(e){return ze._fromParams({providerId:Ae.PROVIDER_ID,signInMethod:Ae.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ae.credentialFromTaggedObject(e)}static credentialFromError(e){return Ae.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ae.credential(e.oauthAccessToken)}catch{return null}}}Ae.GITHUB_SIGN_IN_METHOD="github.com";Ae.PROVIDER_ID="github.com";/**
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
 */class Oe extends tr{constructor(){super("twitter.com")}static credential(e,r){return ze._fromParams({providerId:Oe.PROVIDER_ID,signInMethod:Oe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:r})}static credentialFromResult(e){return Oe.credentialFromTaggedObject(e)}static credentialFromError(e){return Oe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:r,oauthTokenSecret:n}=e;if(!r||!n)return null;try{return Oe.credential(r,n)}catch{return null}}}Oe.TWITTER_SIGN_IN_METHOD="twitter.com";Oe.PROVIDER_ID="twitter.com";/**
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
 */async function zn(t,e){return er(t,"POST","/v1/accounts:signUp",gt(t,e))}/**
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
 */class Ve{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,r,n,i=!1){const s=await Fe._fromIdTokenResponse(e,n,i),o=Eo(n);return new Ve({user:s,providerId:o,_tokenResponse:n,operationType:r})}static async _forOperation(e,r,n){await e._updateTokensIfNecessary(n,!0);const i=Eo(n);return new Ve({user:e,providerId:i,_tokenResponse:n,operationType:r})}}function Eo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ar extends Me{constructor(e,r,n,i){var s;super(r.code,r.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Ar.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:r.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,r,n,i){return new Ar(e,r,n,i)}}function Ec(t,e,r,n){return(e==="reauthenticate"?r._getReauthenticationResolver(t):r._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ar._fromErrorAndOperation(t,s,e,n):s})}async function S0(t,e,r=!1){const n=await Mt(t,e._linkToIdToken(t.auth,await t.getIdToken()),r);return Ve._forOperation(t,"link",n)}/**
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
 */async function I0(t,e,r=!1){const{auth:n}=t,i="reauthenticate";try{const s=await Mt(t,Ec(n,i,e,t),r);C(s.idToken,n,"internal-error");const o=Hi(s.idToken);C(o,n,"internal-error");const{sub:a}=o;return C(t.uid===a,n,"user-mismatch"),Ve._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ce(n,"user-mismatch"),s}}/**
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
 */async function Sc(t,e,r=!1){const n="signIn",i=await Ec(t,n,e),s=await Ve._fromIdTokenResponse(t,n,i);return r||await t._updateCurrentUser(s.user),s}async function C0(t,e){return Sc(vt(t),e)}async function R0(t,e,r){var n;const i=vt(t),s={returnSecureToken:!0,email:e,password:r,clientType:"CLIENT_TYPE_WEB"};let o;if(!((n=i._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const l=await kr(i,s,"signUpPassword");o=zn(i,l)}else o=zn(i,s).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await kr(i,s,"signUpPassword");return zn(i,u)}else return Promise.reject(l)});const a=await o.catch(l=>Promise.reject(l)),c=await Ve._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function T0(t,e,r){return C0(Ge(t),bt.credential(e,r))}function x0(t,e,r,n){return Ge(t).onIdTokenChanged(e,r,n)}function k0(t,e,r){return Ge(t).beforeAuthStateChanged(e,r)}const Or="__sak";/**
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
 */class Ic{constructor(e,r){this.storageRetriever=e,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(Or,"1"),this.storage.removeItem(Or),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,r){return this.storage.setItem(e,JSON.stringify(r)),Promise.resolve()}_get(e){const r=this.storage.getItem(e);return Promise.resolve(r?JSON.parse(r):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function A0(){const t=J();return Wi(t)||un(t)}const O0=1e3,P0=10;class Cc extends Ic{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,r)=>this.onStorageEvent(e,r),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=A0()&&i0(),this.fallbackToPolling=pc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const r of Object.keys(this.listeners)){const n=this.storage.getItem(r),i=this.localCache[r];n!==i&&e(r,i,n)}}onStorageEvent(e,r=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const n=e.key;if(r?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(n);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!r)return}const i=()=>{const o=this.storage.getItem(n);!r&&this.localCache[n]===o||this.notifyListeners(n,o)},s=this.storage.getItem(n);n0()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,P0):i()}notifyListeners(e,r){this.localCache[e]=r;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,r,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:n}),!0)})},O0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,r){await super._set(e,r),this.localCache[e]=JSON.stringify(r)}async _get(e){const r=await super._get(e);return this.localCache[e]=JSON.stringify(r),r}async _remove(e){await super._remove(e),delete this.localCache[e]}}Cc.type="LOCAL";const N0=Cc;/**
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
 */class Rc extends Ic{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,r){}_removeListener(e,r){}}Rc.type="SESSION";const Tc=Rc;/**
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
 */function $0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(r){return{fulfilled:!1,reason:r}}}))}/**
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
 */class dn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const r=this.receivers.find(i=>i.isListeningto(e));if(r)return r;const n=new dn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const r=e,{eventId:n,eventType:i,data:s}=r.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;r.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const a=Array.from(o).map(async l=>l(r.origin,s)),c=await $0(a);r.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:c})}_subscribe(e,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(r)}_unsubscribe(e,r){this.handlersMap[e]&&r&&this.handlersMap[e].delete(r),(!r||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}dn.receivers=[];/**
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
 */function Ki(t="",e=10){let r="";for(let n=0;n<e;n++)r+=Math.floor(Math.random()*10);return t+r}/**
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
 */class D0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,r,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=Ki("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},n);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===l)switch(f.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:r},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ge(){return window}function L0(t){ge().location.href=t}/**
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
 */function xc(){return typeof ge().WorkerGlobalScope<"u"&&typeof ge().importScripts=="function"}async function M0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function U0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function j0(){return xc()?self:null}/**
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
 */const kc="firebaseLocalStorageDb",B0=1,Pr="firebaseLocalStorage",Ac="fbase_key";class rr{constructor(e){this.request=e}toPromise(){return new Promise((e,r)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function fn(t,e){return t.transaction([Pr],e?"readwrite":"readonly").objectStore(Pr)}function F0(){const t=indexedDB.deleteDatabase(kc);return new rr(t).toPromise()}function ui(){const t=indexedDB.open(kc,B0);return new Promise((e,r)=>{t.addEventListener("error",()=>{r(t.error)}),t.addEventListener("upgradeneeded",()=>{const n=t.result;try{n.createObjectStore(Pr,{keyPath:Ac})}catch(i){r(i)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains(Pr)?e(n):(n.close(),await F0(),e(await ui()))})})}async function So(t,e,r){const n=fn(t,!0).put({[Ac]:e,value:r});return new rr(n).toPromise()}async function H0(t,e){const r=fn(t,!1).get(e),n=await new rr(r).toPromise();return n===void 0?null:n.value}function Io(t,e){const r=fn(t,!0).delete(e);return new rr(r).toPromise()}const W0=800,z0=3;class Oc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ui(),this.db)}async _withRetries(e){let r=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(r++>z0)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=dn._getInstance(j0()),this.receiver._subscribe("keyChanged",async(e,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(e,r)=>["keyChanged"])}async initializeSender(){var e,r;if(this.activeServiceWorker=await M0(),!this.activeServiceWorker)return;this.sender=new D0(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((r=n[0])===null||r===void 0)&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||U0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ui();return await So(e,Or,"1"),await Io(e,Or),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,r){return this._withPendingWrite(async()=>(await this._withRetries(n=>So(n,e,r)),this.localCache[e]=r,this.notifyServiceWorker(e)))}async _get(e){const r=await this._withRetries(n=>H0(n,e));return this.localCache[e]=r,r}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(r=>Io(r,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=fn(i,!1).getAll();return new rr(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const r=[],n=new Set;for(const{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),r.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),r.push(i));return r}notifyListeners(e,r){this.localCache[e]=r;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),W0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Oc.type="LOCAL";const V0=Oc;new Zt(3e4,6e4);/**
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
 */function K0(t,e){return e?_e(e):(C(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class qi extends zi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return lt(e,this._buildIdpRequest())}_linkToIdToken(e,r){return lt(e,this._buildIdpRequest(r))}_getReauthenticationResolver(e){return lt(e,this._buildIdpRequest())}_buildIdpRequest(e){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(r.idToken=e),r}}function q0(t){return Sc(t.auth,new qi(t),t.bypassAuthState)}function G0(t){const{auth:e,user:r}=t;return C(r,e,"internal-error"),I0(r,new qi(t),t.bypassAuthState)}async function J0(t){const{auth:e,user:r}=t;return C(r,e,"internal-error"),S0(r,new qi(t),t.bypassAuthState)}/**
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
 */class Pc{constructor(e,r,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(e,r)=>{this.pendingPromise={resolve:e,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:r,sessionId:n,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:r,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return q0;case"linkViaPopup":case"linkViaRedirect":return J0;case"reauthViaPopup":case"reauthViaRedirect":return G0;default:ce(this.auth,"internal-error")}}resolve(e){Ce(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ce(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Y0=new Zt(2e3,1e4);class it extends Pc{constructor(e,r,n,i,s){super(e,r,i,s),this.provider=n,this.authWindow=null,this.pollId=null,it.currentPopupAction&&it.currentPopupAction.cancel(),it.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return C(e,this.auth,"internal-error"),e}async onExecution(){Ce(this.filter.length===1,"Popup operations only handle one event");const e=Ki();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(me(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(me(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,it.currentPopupAction=null}pollUserCancellation(){const e=()=>{var r,n;if(!((n=(r=this.authWindow)===null||r===void 0?void 0:r.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(me(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Y0.get())};e()}}it.currentPopupAction=null;/**
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
 */const X0="pendingRedirect",br=new Map;class Q0 extends Pc{constructor(e,r,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,n),this.eventId=null}async execute(){let e=br.get(this.auth._key());if(!e){try{const n=await Z0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(r){e=()=>Promise.reject(r)}br.set(this.auth._key(),e)}return this.bypassAuthState||br.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const r=await this.auth._redirectUserForId(e.eventId);if(r)return this.user=r,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Z0(t,e){const r=rv(e),n=tv(t);if(!await n._isAvailable())return!1;const i=await n._get(r)==="true";return await n._remove(r),i}function ev(t,e){br.set(t._key(),e)}function tv(t){return _e(t._redirectPersistence)}function rv(t){return vr(X0,t.config.apiKey,t.name)}async function nv(t,e,r=!1){const n=vt(t),i=K0(n,e),o=await new Q0(n,i,r).execute();return o&&!r&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
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
 */const iv=10*60*1e3;class sv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let r=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(r=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ov(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}sendToConsumer(e,r){var n;if(e.error&&!Nc(e)){const i=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";r.onError(me(this.auth,i))}else r.onAuthEvent(e)}isEventForConsumer(e,r){const n=r.eventId===null||!!e.eventId&&e.eventId===r.eventId;return r.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=iv&&this.cachedEventUids.clear(),this.cachedEventUids.has(Co(e))}saveEventToCache(e){this.cachedEventUids.add(Co(e)),this.lastProcessedEventTime=Date.now()}}function Co(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Nc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ov(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Nc(t);default:return!1}}/**
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
 */async function av(t,e={}){return yt(t,"GET","/v1/projects",e)}/**
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
 */const cv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lv=/^https?/;async function uv(t){if(t.config.emulator)return;const{authorizedDomains:e}=await av(t);for(const r of e)try{if(dv(r))return}catch{}ce(t,"unauthorized-domain")}function dv(t){const e=li(),{protocol:r,hostname:n}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&n===""?r==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):r==="chrome-extension:"&&o.hostname===n}if(!lv.test(r))return!1;if(cv.test(t))return n===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
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
 */const fv=new Zt(3e4,6e4);function Ro(){const t=ge().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let r=0;r<t.CP.length;r++)t.CP[r]=null}}function hv(t){return new Promise((e,r)=>{var n,i,s;function o(){Ro(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ro(),r(me(t,"network-request-failed"))},timeout:fv.get()})}if(!((i=(n=ge().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=ge().gapi)===null||s===void 0)&&s.load)o();else{const a=o0("iframefcb");return ge()[a]=()=>{gapi.load?o():r(me(t,"network-request-failed"))},vc(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>r(c))}}).catch(e=>{throw _r=null,e})}let _r=null;function pv(t){return _r=_r||hv(t),_r}/**
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
 */const mv=new Zt(5e3,15e3),gv="__/auth/iframe",yv="emulator/auth/iframe",vv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _v(t){const e=t.config;C(e.authDomain,t,"auth-domain-config-required");const r=e.emulator?Fi(e,yv):`https://${t.config.authDomain}/${gv}`,n={apiKey:e.apiKey,appName:t.name,v:Qt},i=bv.get(t.config.apiHost);i&&(n.eid=i);const s=t._getFrameworks();return s.length&&(n.fw=s.join(",")),`${r}?${Xt(n).slice(1)}`}async function wv(t){const e=await pv(t),r=ge().gapi;return C(r,t,"internal-error"),e.open({where:document.body,url:_v(t),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:vv,dontclear:!0},n=>new Promise(async(i,s)=>{await n.restyle({setHideOnLeave:!1});const o=me(t,"network-request-failed"),a=ge().setTimeout(()=>{s(o)},mv.get());function c(){ge().clearTimeout(a),i(n)}n.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const Ev={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Sv=500,Iv=600,Cv="_blank",Rv="http://localhost";class To{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Tv(t,e,r,n=Sv,i=Iv){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Ev),{width:n.toString(),height:i.toString(),top:s,left:o}),l=J().toLowerCase();r&&(a=lc(l)?Cv:r),cc(l)&&(e=e||Rv,c.scrollbars="yes");const u=Object.entries(c).reduce((f,[m,g])=>`${f}${m}=${g},`,"");if(r0(l)&&a!=="_self")return xv(e||"",a),new To(null);const d=window.open(e||"",a,u);C(d,t,"popup-blocked");try{d.focus()}catch{}return new To(d)}function xv(t,e){const r=document.createElement("a");r.href=t,r.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}/**
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
 */const kv="__/auth/handler",Av="emulator/auth/handler",Ov=encodeURIComponent("fac");async function xo(t,e,r,n,i,s){C(t.config.authDomain,t,"auth-domain-config-required"),C(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:r,redirectUrl:n,v:Qt,eventId:i};if(e instanceof wc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Tg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries(s||{}))o[u]=d}if(e instanceof tr){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${Ov}=${encodeURIComponent(c)}`:"";return`${Pv(t)}?${Xt(a).slice(1)}${l}`}function Pv({config:t}){return t.emulator?Fi(t,Av):`https://${t.authDomain}/${kv}`}/**
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
 */const Vn="webStorageSupport";class Nv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Tc,this._completeRedirectFn=nv,this._overrideRedirectResult=ev}async _openPopup(e,r,n,i){var s;Ce((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await xo(e,r,n,li(),i);return Tv(e,o,Ki())}async _openRedirect(e,r,n,i){await this._originValidation(e);const s=await xo(e,r,n,li(),i);return L0(s),new Promise(()=>{})}_initialize(e){const r=e._key();if(this.eventManagers[r]){const{manager:i,promise:s}=this.eventManagers[r];return i?Promise.resolve(i):(Ce(s,"If manager is not set, promise should be"),s)}const n=this.initAndGetManager(e);return this.eventManagers[r]={promise:n},n.catch(()=>{delete this.eventManagers[r]}),n}async initAndGetManager(e){const r=await wv(e),n=new sv(e);return r.register("authEvent",i=>(C(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=r,n}_isIframeWebStorageSupported(e,r){this.iframes[e._key()].send(Vn,{type:Vn},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Vn];o!==void 0&&r(!!o),ce(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const r=e._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=uv(e)),this.originValidationPromises[r]}get _shouldInitProactively(){return pc()||Wi()||un()}}const $v=Nv;var ko="@firebase/auth",Ao="1.1.0";/**
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
 */class Dv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const r=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,r),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const r=this.internalListeners.get(e);r&&(this.internalListeners.delete(e),r(),this.updateProactiveRefresh())}assertAuthConfigured(){C(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Lv(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Mv(t){Dt(new ft("auth",(e,{options:r})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=n.options;C(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:mc(t)},l=new d0(n,i,s,c);return h0(l,r),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,r,n)=>{e.getProvider("auth-internal").initialize()})),Dt(new ft("auth-internal",e=>{const r=vt(e.getProvider("auth").getImmediate());return(n=>new Dv(n))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),at(ko,Ao,Lv(t)),at(ko,Ao,"esm2017")}/**
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
 */const Uv=5*60,jv=Ga("authIdTokenMaxAge")||Uv;let Oo=null;const Bv=t=>async e=>{const r=e&&await e.getIdTokenResult(),n=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(n&&n>jv)return;const i=r==null?void 0:r.token;Oo!==i&&(Oo=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function $c(t=Ty()){const e=Qa(t,"auth");if(e.isInitialized())return e.getImmediate();const r=f0(t,{popupRedirectResolver:$v,persistence:[V0,N0,Tc]}),n=Ga("authTokenSyncURL");if(n){const s=Bv(n);k0(r,s,()=>s(r.currentUser)),x0(r,o=>s(o))}const i=gg("auth");return i&&p0(r,`http://${i}`),r}Mv("Browser");var Fv="firebase",Hv="10.1.0";/**
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
 */at(Fv,Hv,"app");const Dc="LOGIN_REQUEST",Wv="LOGIN_SUCCESS",zv="LOGIN_FAILURE",Vv="LOGOUT_SUCCESS",Lc="SIGNUP_REQUEST",Mc="SIGNUP_SUCCESS",Uc="SIGNUP_FAILURE",Kv="SIGNIN_FAILURE",jc="SIGNIN_SUCCESS",qv=()=>({type:Lc}),Gv=t=>({type:Mc,payload:t}),Jv=t=>({type:Uc,payload:t}),Yv=()=>({type:Dc}),Xv=t=>({type:jc,payload:t}),Qv=t=>({type:Kv,payload:t}),Zv=(t,e)=>r=>{r(Yv());const i=Ui({apiKey:"AIzaSyDjxPLS7gSLoUVAcd7gju7gHIYefaxFS6A",authDomain:"weather-app-375b5.firebaseapp.com",projectId:"weather-app-375b5",storageBucket:"weather-app-375b5.appspot.com",messagingSenderId:"350073201404",appId:"1:350073201404:web:a148fa5c3b7324a6386d79",measurementId:"G-117SVT71H7"}),s=$c(i);T0(s,t,e).then(o=>{const a=o.user;r(Xv(a))}).catch(o=>{r(Qv(o.message))})},eb=(t,e)=>r=>{r(qv());const i=Ui({apiKey:"AIzaSyDjxPLS7gSLoUVAcd7gju7gHIYefaxFS6A",authDomain:"weather-app-375b5.firebaseapp.com",projectId:"weather-app-375b5",storageBucket:"weather-app-375b5.appspot.com",messagingSenderId:"350073201404",appId:"1:350073201404:web:a148fa5c3b7324a6386d79",measurementId:"G-117SVT71H7"}),s=$c(i);R0(s,t,e).then(o=>{const a=o.user;r(Gv(a))}).catch(o=>{r(Jv(o.message))})},tb=()=>{const[t,e]=we(""),[r,n]=we(""),[i,s]=we(!1),o=Bt(),a=Se(d=>d.auth.signupSuccess),c=Se(d=>d.auth.users),l=d=>c.some(f=>f.email===d),u=d=>{d.preventDefault(),i?l(t)?alert("Email is already registered. Please sign in."):o(eb(t,r)):o(Zv(t,r))};return v.jsxs("div",{className:"signin",children:[v.jsx("h2",{children:i?"Sign Up":"Sign In"}),a&&v.jsx("p",{children:"Sign up successful! You can now sign in."}),v.jsxs("div",{className:"signin-form",children:[v.jsxs("form",{onSubmit:u,children:[v.jsx("input",{type:"email",placeholder:"Email",value:t,onChange:d=>e(d.target.value)}),v.jsx("input",{type:"password",placeholder:"Password",value:r,onChange:d=>n(d.target.value)}),v.jsx("button",{type:"submit",children:i?"Sign Up":"Sign In"})]}),v.jsxs("p",{children:[i?"Already have an account?":"Don’t have an account yet?",v.jsx("span",{onClick:()=>s(!i),style:{cursor:"pointer"},children:i?" Sign In":" Sign Up"})]})]})]})},rb=()=>v.jsx("div",{className:"signin-page",children:v.jsx(tb,{})});const nb=()=>{we("");const[t,e]=we(!0),r=Bt();Se(i=>i.auth.weather),No(()=>{const i=localStorage.getItem("favorites");if(i){const s=JSON.parse(i);r({type:"LOAD_FAVORITES_FROM_LOCAL_STORAGE",payload:s})}},[r]);const n=()=>{e(!1)};return v.jsx(yu,{children:v.jsx("div",{className:`app ${t?"landing-page":""}`,onClick:n,children:t?v.jsxs("div",{className:"landing-page-content",children:[v.jsx("h1",{className:"app-name",style:{fontWeight:"bold"},children:"myWeather"}),v.jsx("div",{className:"swipe-up",children:"Swipe up to continue"})]}):v.jsxs(v.Fragment,{children:[v.jsx(wu,{}),v.jsxs(du,{children:[v.jsx(ur,{path:"/",element:v.jsx(og,{})}),v.jsx(ur,{path:"/favorites",element:v.jsx(cg,{})}),v.jsx(ur,{path:"/login",element:v.jsx(rb,{})})]})]})})})},ib={data:null,weeklyData:null,loading:!1,error:null},sb=(t=ib,e)=>{switch(e.type){case sa:return{...t,loading:!0,error:null};case oa:return{...t,data:e.payload,loading:!1,error:null};case aa:return{...t,data:null,loading:!1,error:e.payload};default:return t}},ob={user:null,isLoading:!1,error:null,signupSuccess:!1},ab=(t=ob,e)=>{switch(e.type){case Dc:return{...t,isLoading:!0,error:null};case Wv:return{...t,isLoading:!1,user:e.payload,error:null};case zv:return{...t,isLoading:!1,error:e.payload};case Vv:return{...t,user:null};case Lc:return{...t,isLoading:!0,error:null,signupSuccess:!1};case Mc:return{...t,isLoading:!1,user:e.payload,error:null,signupSuccess:!0};case Uc:return{...t,isLoading:!1,error:e.payload,signupSuccess:!1};case jc:return{...t,isLoading:!1,user:e.payload,error:null};default:return t}},cb=[],Po=t=>{localStorage.setItem("favorites",JSON.stringify(t))},lb=(t=cb,e)=>{switch(e.type){case ca:const r=[...t,e.payload];return Po(r),r;case la:const n=t.filter(i=>i.id!==e.payload);return Po(n),n;case zd:return e.payload;default:return t}},ub=fl({weather:sb,auth:ab,favorites:lb}),db=hl(ub,pl(ml));ul.render(v.jsx(dl,{store:db,children:v.jsx(nb,{})}),document.getElementById("root"));
