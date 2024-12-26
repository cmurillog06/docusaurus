"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["60291"],{74730:function(e,t,s){s.r(t),s.d(t,{metadata:()=>n,contentTitle:()=>l,default:()=>f,assets:()=>u,toc:()=>m,frontMatter:()=>p});var n=JSON.parse('{"id":"tests/import-bad-package","title":"Import Bad Package","description":"We are importing MDX content from a file that is in a package that has a bad React version.","source":"@site/_dogfooding/_docs tests/tests/import-bad-package.mdx","sourceDirName":"tests","slug":"/tests/import-bad-package","permalink":"/tests/docs/tests/import-bad-package","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedBy":"S\xe9bastien Lorber","lastUpdatedAt":1735213603000,"frontMatter":{},"sidebar":"sidebar","previous":{"title":"Image tests","permalink":"/tests/docs/tests/img-tests"},"next":{"title":"Broken Anchors tests","permalink":"/tests/docs/tests/links/broken-anchors-tests"}}'),r=s("85893"),a=s("80980"),o=s("67294"),i=s("73935");function c(){if(!o.version.startsWith("19"))throw Error(`'test-bad-package/README.mdx' is rendered with bad React version: ${o.version}`);if(!o.version.startsWith("19"))throw Error(`'test-bad-package/README.mdx' is rendered with bad React-DOM version: ${i.version}`);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{children:["React version: ",o.version]}),(0,r.jsxs)("div",{children:["React DOM version: ",i.version]})]})}function d(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",p:"p",pre:"pre",...(0,a.a)(),...e.components},{Details:s}=t;return!s&&function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"test-bad-package",children:"test-bad-package"})}),"\n",(0,r.jsx)(t.p,{children:"This package declares a wrong React version on purpose (16.14.0)"}),"\n",(0,r.jsx)(t.p,{children:"The goal is to test that the MD/MDX content of this package can still be imported/rendered by our website."}),"\n",(0,r.jsxs)(t.p,{children:["See related issue ",(0,r.jsx)(t.a,{href:"https://github.com/facebook/docusaurus/issues/9027",children:"https://github.com/facebook/docusaurus/issues/9027"})]}),"\n",(0,r.jsx)(t.hr,{}),"\n","\n","\n",(0,r.jsx)(c,{}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"mdx-components-work",children:"MDX Components work:"}),"\n",(0,r.jsxs)(s,{children:[(0,r.jsx)("summary",{children:"Summary"}),(0,r.jsx)(t.p,{children:"Details"})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"const age = 42;\n"})})]})}function h(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}let p={},l="Import Bad Package",u={},m=[{value:"MDX Components work:",id:"mdx-components-work",level:2}];function x(e){let t={a:"a",h1:"h1",header:"header",hr:"hr",p:"p",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"import-bad-package",children:"Import Bad Package"})}),"\n",(0,r.jsx)(t.p,{children:"We are importing MDX content from a file that is in a package that has a bad React version."}),"\n",(0,r.jsx)(t.p,{children:"This is expected to work despite the bad version."}),"\n",(0,r.jsxs)(t.p,{children:["See ",(0,r.jsx)(t.a,{href:"https://github.com/facebook/docusaurus/issues/9027",children:"https://github.com/facebook/docusaurus/issues/9027"})]}),"\n",(0,r.jsx)(t.hr,{}),"\n","\n",(0,r.jsx)(h,{})]})}function f(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}f.displayName="MDXContent(_dogfooding/_docs tests/tests/import-bad-package.mdx)"},80980:function(e,t,s){s.d(t,{Z:function(){return i},a:function(){return o}});var n=s(67294);let r={},a=n.createContext(r);function o(e){let t=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);