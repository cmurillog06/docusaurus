"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[95235],{32738:(e,n,t)=>{t.d(n,{A:()=>o});var r=t(62540);t(63696);var s=t(46733);function o({toc:e,minHeadingLevel:n,maxHeadingLevel:t}){return(0,r.jsx)("div",{className:"tableOfContentsInline_2sru",children:(0,r.jsx)(s.A,{toc:e,minHeadingLevel:n,maxHeadingLevel:t,className:"table-of-contents",linkClassName:null})})}},46733:(e,n,t)=>{t.d(n,{A:()=>d});var r=t(62540),s=t(63696),o=t(25436);function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){var r;r=t[n],n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r})}return e}function a(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t.push.apply(t,r)}return t})(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}),e}function c(e){let n=e.getBoundingClientRect();return n.top===n.bottom?c(e.parentNode):n}var l=t(36372);let u=s.memo(function e({toc:n,className:t,linkClassName:s,isChild:o}){return n.length?(0,r.jsx)("ul",{className:o?void 0:t,children:n.map(n=>(0,r.jsxs)("li",{children:[(0,r.jsx)(l.A,{to:`#${n.id}`,className:null!=s?s:void 0,dangerouslySetInnerHTML:{__html:n.value}}),(0,r.jsx)(e,{isChild:!0,toc:n.children,className:t,linkClassName:s})]},n.id))}):null});function d(e){var{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:d,minHeadingLevel:h,maxHeadingLevel:f}=e,p=function(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}(e,["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"]);let g=(0,o.p)(),m=null!=h?h:g.tableOfContents.minHeadingLevel,j=null!=f?f:g.tableOfContents.maxHeadingLevel,x=function({toc:e,minHeadingLevel:n,maxHeadingLevel:t}){return(0,s.useMemo)(()=>(function e({toc:n,minHeadingLevel:t,maxHeadingLevel:r}){return n.flatMap(n=>{let s=e({toc:n.children,minHeadingLevel:t,maxHeadingLevel:r});return n.level>=t&&n.level<=r?[a(i({},n),{children:s})]:s})})({toc:function(e){let n=e.map(e=>a(i({},e),{parentIndex:-1,children:[]})),t=Array(7).fill(-1);n.forEach((e,n)=>{let r=t.slice(2,e.level);e.parentIndex=Math.max(...r),t[e.level]=n});let r=[];return n.forEach(e=>{let{parentIndex:t}=e,s=function(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}(e,["parentIndex"]);t>=0?n[t].children.push(s):r.push(s)}),r}(e),minHeadingLevel:n,maxHeadingLevel:t}),[e,n,t])}({toc:n,minHeadingLevel:m,maxHeadingLevel:j});return!function(e){let n=(0,s.useRef)(void 0),t=function(){let e=(0,s.useRef)(0),{navbar:{hideOnScroll:n}}=(0,o.p)();return(0,s.useEffect)(()=>{e.current=n?0:document.querySelector(".navbar").clientHeight},[n]),e}();(0,s.useEffect)(()=>{if(!e)return()=>{};let{linkClassName:r,linkActiveClassName:s,minHeadingLevel:o,maxHeadingLevel:i}=e;function a(){let e=Array.from(document.getElementsByClassName(r)),a=function(e,{anchorTopOffset:n}){var t,r,s;let o=e.find(e=>c(e).top>=n);return o?(s=c(o)).top>0&&s.bottom<window.innerHeight/2?o:null!==(t=e[e.indexOf(o)-1])&&void 0!==t?t:null:null!==(r=e[e.length-1])&&void 0!==r?r:null}(function({minHeadingLevel:e,maxHeadingLevel:n}){let t=[];for(let r=e;r<=n;r+=1)t.push(`h${r}.anchor`);return Array.from(document.querySelectorAll(t.join()))}({minHeadingLevel:o,maxHeadingLevel:i}),{anchorTopOffset:t.current}),l=e.find(e=>a&&a.id===decodeURIComponent(e.href.substring(e.href.indexOf("#")+1)));e.forEach(e=>{e===l?(n.current&&n.current!==e&&n.current.classList.remove(s),e.classList.add(s),n.current=e):e.classList.remove(s)})}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),()=>{document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}},[e,t])}((0,s.useMemo)(()=>{if(l&&d)return{linkClassName:l,linkActiveClassName:d,minHeadingLevel:m,maxHeadingLevel:j}},[l,d,m,j])),(0,r.jsx)(u,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){var r;r=t[n],n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r})}return e}({toc:x,className:t,linkClassName:l},p))}},15995:(e,n,t)=>{t.d(n,{A:()=>o});var r=t(62540);t(63696);var s=t(11750);function o({children:e,hidden:n,className:t}){return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)("tabItem_pnkT",t),hidden:n,children:e})}},27446:(e,n,t)=>{t.d(n,{A:()=>y});var r=t(62540),s=t(63696),o=t(11750),i=t(7846),a=t(49519),c=t(96439),l=t(19739),u=t(66904),d=t(79244);function h(e){var n,t;return null!==(t=null===(n=s.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,s.isValidElement)(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))||void 0===n?void 0:n.filter(Boolean))&&void 0!==t?t:[]}function f({value:e,tabValues:n}){return n.some(n=>n.value===e)}var p=t(10709);function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){var r;r=t[n],n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r})}return e}function m(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t.push.apply(t,r)}return t})(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}),e}function j({className:e,block:n,selectedValue:t,selectValue:s,tabValues:a}){let c=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.a_)(),u=e=>{let n=e.currentTarget,r=a[c.indexOf(n)].value;r!==t&&(l(n),s(r))},d=e=>{var n,t;let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let t=c.indexOf(e.currentTarget)+1;r=null!==(n=c[t])&&void 0!==n?n:c[0];break}case"ArrowLeft":{let n=c.indexOf(e.currentTarget)-1;r=null!==(t=c[n])&&void 0!==t?t:c[c.length-1]}}null==r||r.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},e),children:a.map(({value:e,label:n,attributes:s})=>(0,r.jsx)("li",m(g({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,ref:e=>c.push(e),onKeyDown:d,onClick:u},s),{className:(0,o.A)("tabs__item","tabItem_AQgk",null==s?void 0:s.className,{"tabs__item--active":t===e}),children:null!=n?n:e}),e))})}function x({lazy:e,children:n,selectedValue:t}){let i=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){let e=i.find(e=>e.props.value===t);return e?(0,s.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:i.map((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t}))})}function b(e){let n=function(e){let{defaultValue:n,queryString:t=!1,groupId:r}=e,o=function(e){let{values:n,children:t}=e;return(0,s.useMemo)(()=>{let e=null!=n?n:h(t).map(({props:{value:e,label:n,attributes:t,default:r}})=>({value:e,label:n,attributes:t,default:r}));return!function(e){let n=(0,u.XI)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,t])}(e),[i,p]=(0,s.useState)(()=>(function({defaultValue:e,tabValues:n}){var t;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!f({value:e,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let r=null!==(t=n.find(e=>e.default))&&void 0!==t?t:n[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:n,tabValues:o})),[g,m]=function({queryString:e=!1,groupId:n}){let t=(0,a.W6)(),r=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n});return[(0,l.aZ)(r),(0,s.useCallback)(e=>{var n,s;if(!r)return;let o=new URLSearchParams(t.location.search);o.set(r,e),t.replace((n=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){var r;r=t[n],n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r})}return e}({},t.location),s=s={search:o.toString()},Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):(function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t.push.apply(t,r)}return t})(Object(s)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(s,e))}),n))},[r,t])]}({queryString:t,groupId:r}),[j,x]=function({groupId:e}){let n=e?`docusaurus.tab.${e}`:null,[t,r]=(0,d.Dv)(n);return[t,(0,s.useCallback)(e=>{n&&r.set(e)},[n,r])]}({groupId:r}),b=(()=>{let e=null!=g?g:j;return f({value:e,tabValues:o})?e:null})();return(0,c.A)(()=>{b&&p(b)},[b]),{selectedValue:i,selectValue:(0,s.useCallback)(e=>{if(!f({value:e,tabValues:o}))throw Error(`Can't select invalid tab value=${e}`);p(e),m(e),x(e)},[m,x,o]),tabValues:o}}(e);return(0,r.jsxs)("div",{className:(0,o.A)("tabs-container","tabList_Qoir"),children:[(0,r.jsx)(j,g({},n,e)),(0,r.jsx)(x,g({},n,e))]})}function y(e){let n=(0,p.A)();return(0,r.jsx)(b,m(g({},e),{children:h(e.children)}),String(n))}},64785:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>h});let r=JSON.parse('{"id":"configuration","title":"Configuration","description":"Configuring your site\'s behavior through docusaurus.config.js and more.","source":"@site/docs/configuration.mdx","sourceDirName":".","slug":"/configuration","permalink":"/docs/configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/configuration.mdx","tags":[],"version":"current","lastUpdatedBy":"Patrick","lastUpdatedAt":1728034365000,"frontMatter":{"description":"Configuring your site\'s behavior through docusaurus.config.js and more."},"sidebar":"docs","previous":{"title":"Installation","permalink":"/docs/installation"},"next":{"title":"Playground","permalink":"/docs/playground"}}');var s=t(62540),o=t(43023),i=t(27446),a=t(15995),c=t(32738);let l={description:"Configuring your site's behavior through docusaurus.config.js and more."},u="Configuration",d={},h=[{value:"Syntax to declare <code>docusaurus.config.js</code>",id:"syntax-to-declare-docusaurus-config",level:2},{value:"What goes into a <code>docusaurus.config.js</code>?",id:"what-goes-into-a-docusaurusconfigjs",level:2},{value:"Site metadata",id:"site-metadata",level:3},{value:"Deployment configurations",id:"deployment-configurations",level:3},{value:"Theme, plugin, and preset configurations",id:"theme-plugin-and-preset-configurations",level:3},{value:"Custom configurations",id:"custom-configurations",level:3},{value:"Accessing configuration from components",id:"accessing-configuration-from-components",level:2},{value:"Customizing Babel Configuration",id:"customizing-babel-configuration",level:2}];function f(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"configuration",children:"Configuration"})}),"\n","\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Check the ",(0,s.jsx)(n.a,{href:"/docs/api/docusaurus-config",children:(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"docusaurus.config.js"})," API reference"]})})," for an exhaustive list of options."]})}),"\n",(0,s.jsx)(n.p,{children:"Docusaurus has a unique take on configurations. We encourage you to congregate information about your site into one place. We guard the fields of this file and facilitate making this data object accessible across your site."}),"\n",(0,s.jsxs)(n.p,{children:["Keeping a well-maintained ",(0,s.jsx)(n.code,{children:"docusaurus.config.js"})," helps you, your collaborators, and your open source contributors to be able to focus on documentation while still being able to customize the site."]}),"\n",(0,s.jsxs)(n.h2,{id:"syntax-to-declare-docusaurus-config",children:["Syntax to declare ",(0,s.jsx)(n.code,{children:"docusaurus.config.js"})]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"docusaurus.config.js"})," file is run in Node.js and should export either:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["a ",(0,s.jsx)(n.strong,{children:"config object"})]}),"\n",(0,s.jsxs)(n.li,{children:["a ",(0,s.jsx)(n.strong,{children:"function"})," that creates the config object"]}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"docusaurus.config.js"})," file supports:"]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://flaviocopes.com/es-modules/",children:(0,s.jsx)(n.strong,{children:"ES Modules"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://flaviocopes.com/commonjs/",children:(0,s.jsx)(n.strong,{children:"CommonJS"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/typescript-support#typing-config",children:(0,s.jsx)(n.strong,{children:"TypeScript"})})}),"\n"]}),(0,s.jsx)(n.p,{children:"Constraints:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Required:"})," use ",(0,s.jsx)(n.code,{children:"export default /* your config*/"})," (or ",(0,s.jsx)(n.code,{children:"module.exports"}),") to export your Docusaurus config"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Optional:"})," use ",(0,s.jsx)(n.code,{children:"import Lib from 'lib'"})," (or ",(0,s.jsx)(n.code,{children:"require('lib')"}),") to import Node.js packages"]}),"\n"]})]}),"\n",(0,s.jsxs)(n.p,{children:["Docusaurus gives us the ability to declare its configuration in various ",(0,s.jsx)(n.strong,{children:"equivalent ways"}),", and all the following config examples lead to the exact same result:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  title: 'Docusaurus',\n  url: 'https://docusaurus.io',\n  // your site config ...\n};\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"module.exports = {\n  title: 'Docusaurus',\n  url: 'https://docusaurus.io',\n  // your site config ...\n};\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",metastring:'title="docusaurus.config.ts"',children:"import type {Config} from '@docusaurus/types';\n\nexport default {\n  title: 'Docusaurus',\n  url: 'https://docusaurus.io',\n  // your site config ...\n} satisfies Config;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"const config = {\n  title: 'Docusaurus',\n  url: 'https://docusaurus.io',\n  // your site config ...\n};\n\nexport default config;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default function configCreator() {\n  return {\n    title: 'Docusaurus',\n    url: 'https://docusaurus.io',\n    // your site config ...\n  };\n}\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default async function createConfigAsync() {\n  return {\n    title: 'Docusaurus',\n    url: 'https://docusaurus.io',\n    // your site config ...\n  };\n}\n"})}),"\n",(0,s.jsxs)(n.admonition,{title:"Using ESM-only packages",type:"tip",children:[(0,s.jsx)(n.p,{children:"Using an async config creator can be useful to import ESM-only modules (notably most Remark plugins). It is possible to import such modules thanks to dynamic imports:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default async function createConfigAsync() {\n  // Use a dynamic import instead of require('esm-lib')\n  // highlight-next-line\n  const lib = await import('lib');\n\n  return {\n    title: 'Docusaurus',\n    url: 'https://docusaurus.io',\n    // rest of your site config...\n  };\n}\n"})})]}),"\n",(0,s.jsxs)(n.h2,{id:"what-goes-into-a-docusaurusconfigjs",children:["What goes into a ",(0,s.jsx)(n.code,{children:"docusaurus.config.js"}),"?"]}),"\n",(0,s.jsxs)(n.p,{children:["You should not have to write your ",(0,s.jsx)(n.code,{children:"docusaurus.config.js"})," from scratch even if you are developing your site. All templates come with a ",(0,s.jsx)(n.code,{children:"docusaurus.config.js"})," that includes defaults for the common options."]}),"\n",(0,s.jsx)(n.p,{children:"However, it can be helpful if you have a high-level understanding of how the configurations are designed and implemented."}),"\n",(0,s.jsx)(n.p,{children:"The high-level overview of Docusaurus configuration can be categorized into:"}),"\n",(0,s.jsx)(c.A,{toc:h,minHeadingLevel:3,maxHeadingLevel:3}),"\n",(0,s.jsx)(n.h3,{id:"site-metadata",children:"Site metadata"}),"\n",(0,s.jsxs)(n.p,{children:["Site metadata contains the essential global metadata such as ",(0,s.jsx)(n.code,{children:"title"}),", ",(0,s.jsx)(n.code,{children:"url"}),", ",(0,s.jsx)(n.code,{children:"baseUrl"}),", and ",(0,s.jsx)(n.code,{children:"favicon"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"They are used in several places such as your site's title and headings, browser tab icon, social sharing (Facebook, X) information or even to generate the correct path to serve your static files."}),"\n",(0,s.jsx)(n.h3,{id:"deployment-configurations",children:"Deployment configurations"}),"\n",(0,s.jsxs)(n.p,{children:["Deployment configurations such as ",(0,s.jsx)(n.code,{children:"projectName"}),", ",(0,s.jsx)(n.code,{children:"organizationName"}),", and optionally ",(0,s.jsx)(n.code,{children:"deploymentBranch"})," are used when you deploy your site with the ",(0,s.jsx)(n.code,{children:"deploy"})," command."]}),"\n",(0,s.jsxs)(n.p,{children:["It is recommended to check the ",(0,s.jsx)(n.a,{href:"/docs/deployment",children:"deployment docs"})," for more information."]}),"\n",(0,s.jsx)(n.h3,{id:"theme-plugin-and-preset-configurations",children:"Theme, plugin, and preset configurations"}),"\n",(0,s.jsxs)(n.p,{children:["List the ",(0,s.jsx)(n.a,{href:"/docs/using-plugins#using-themes",children:"themes"}),", ",(0,s.jsx)(n.a,{href:"/docs/using-plugins",children:"plugins"}),", and ",(0,s.jsx)(n.a,{href:"/docs/using-plugins#using-presets",children:"presets"})," for your site in the ",(0,s.jsx)(n.code,{children:"themes"}),", ",(0,s.jsx)(n.code,{children:"plugins"}),", and ",(0,s.jsx)(n.code,{children:"presets"})," fields, respectively. These are typically npm packages:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  // ...\n  plugins: [\n    '@docusaurus/plugin-content-blog',\n    '@docusaurus/plugin-content-pages',\n  ],\n  themes: ['@docusaurus/theme-classic'],\n};\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["Docusaurus supports ",(0,s.jsx)(n.a,{href:"/docs/using-plugins#module-shorthands",children:(0,s.jsx)(n.strong,{children:"module shorthands"})}),", allowing you to simplify the above configuration as:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  // ...\n  plugins: ['content-blog', 'content-pages'],\n  themes: ['classic'],\n};\n"})})]}),"\n",(0,s.jsx)(n.p,{children:"They can also be loaded from local directories:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"import path from 'path';\n\nexport default {\n  // ...\n  themes: [path.resolve(__dirname, '/path/to/docusaurus-local-theme')],\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"To specify options for a plugin or theme, replace the name of the plugin or theme in the config file with an array containing the name and an options object:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  // ...\n  plugins: [\n    [\n      'content-blog',\n      {\n        path: 'blog',\n        routeBasePath: 'blog',\n        include: ['*.md', '*.mdx'],\n        // ...\n      },\n    ],\n    'content-pages',\n  ],\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To specify options for a plugin or theme that is bundled in a preset, pass the options through the ",(0,s.jsx)(n.code,{children:"presets"})," field. In this example, ",(0,s.jsx)(n.code,{children:"docs"})," refers to ",(0,s.jsx)(n.code,{children:"@docusaurus/plugin-content-docs"})," and ",(0,s.jsx)(n.code,{children:"theme"})," refers to ",(0,s.jsx)(n.code,{children:"@docusaurus/theme-classic"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  // ...\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          sidebarPath: './sidebars.js',\n        },\n        theme: {\n          customCss: ['./src/css/custom.css'],\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"presets: [['classic', {...}]]"})," shorthand works as well."]})}),"\n",(0,s.jsxs)(n.p,{children:["For further help configuring themes, plugins, and presets, see ",(0,s.jsx)(n.a,{href:"/docs/using-plugins",children:"Using Plugins"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"custom-configurations",children:"Custom configurations"}),"\n",(0,s.jsxs)(n.p,{children:["Docusaurus guards ",(0,s.jsx)(n.code,{children:"docusaurus.config.js"})," from unknown fields. To add custom fields, define them in ",(0,s.jsx)(n.code,{children:"customFields"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  // ...\n  // highlight-start\n  customFields: {\n    image: '',\n    keywords: [],\n  },\n  // highlight-end\n  // ...\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"accessing-configuration-from-components",children:"Accessing configuration from components"}),"\n",(0,s.jsxs)(n.p,{children:["Your configuration object will be made available to all the components of your site. And you may access them via React context as ",(0,s.jsx)(n.code,{children:"siteConfig"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Basic example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import React from 'react';\n// highlight-next-line\nimport useDocusaurusContext from '@docusaurus/useDocusaurusContext';\n\nconst Hello = () => {\n  // highlight-start\n  const {siteConfig} = useDocusaurusContext();\n  // highlight-end\n  const {title, tagline} = siteConfig;\n\n  return <div>{`${title} \xb7 ${tagline}`}</div>;\n};\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["If you just want to use those fields on the client side, you could create your own JS files and import them as ES6 modules, there is no need to put them in ",(0,s.jsx)(n.code,{children:"docusaurus.config.js"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"customizing-babel-configuration",children:"Customizing Babel Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["Docusaurus transpiles your site's source code using Babel by default. If you want to customize the Babel configuration, you can do so by creating a ",(0,s.jsx)(n.code,{children:"babel.config.js"})," file in your project root."]}),"\n",(0,s.jsx)(n.p,{children:"To use the built-in preset as a base configuration, install the following package and use it"}),"\n",(0,s.jsxs)(i.A,{groupId:"npm2yarn",children:[(0,s.jsx)(a.A,{value:"npm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install --save @docusaurus/theme-live-codeblock\n"})})}),(0,s.jsx)(a.A,{value:"yarn",label:"Yarn",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yarn add @docusaurus/theme-live-codeblock\n"})})}),(0,s.jsx)(a.A,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm add @docusaurus/theme-live-codeblock\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["Then use the preset in your ",(0,s.jsx)(n.code,{children:"babel.config.js"})," file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="babel.config.js"',children:"export default {\n  presets: ['@docusaurus/babel/preset'],\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"Most of the time, the default preset configuration will work just fine. If you want to customize your Babel configuration (e.g. to add support for Flow), you can directly edit this file. For your changes to take effect, you need to restart the Docusaurus dev server."})]})}function p(e={}){let{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},43023:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var r=t(63696);let s={},o=r.createContext(s);function i(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);