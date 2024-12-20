"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["61597"],{46877:function(e,r,n){n.d(r,{Z:function(){return s}});let s=n.p+"assets/images/docsearch-troubleshoot-index-facets-4c0d9816a72c457e3e8352bc0fceccb6.jpg"},44426:function(e,r,n){n.r(r),n.d(r,{metadata:()=>s,contentTitle:()=>l,default:()=>g,assets:()=>h,toc:()=>d,frontMatter:()=>t});var s=JSON.parse('{"id":"search","title":"Search","description":"There are a few options you can use to add search to your website:","source":"@site/docs/search.mdx","sourceDirName":".","slug":"/search","permalink":"/docs/search","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/search.mdx","tags":[],"version":"current","lastUpdatedBy":"S\xe9bastien Lorber","lastUpdatedAt":1734709649000,"frontMatter":{"keywords":["algolia","search"]},"sidebar":"docs","previous":{"title":"Static Assets","permalink":"/docs/static-assets"},"next":{"title":"Browser support","permalink":"/docs/browser-support"}}'),a=n("24246"),o=n("80980"),i=n("46291"),c=n("67860");let t={keywords:["algolia","search"]},l="Search",h={},d=[{value:"\uD83E\uDD47 Using Algolia DocSearch",id:"using-algolia-docsearch",level:2},{value:"Index Configuration",id:"algolia-index-configuration",level:3},{value:"Connecting Algolia",id:"connecting-algolia",level:3},{value:"Contextual search",id:"contextual-search",level:3},{value:"Styling your Algolia search",id:"styling-your-algolia-search",level:3},{value:"Customizing the Algolia search behavior",id:"customizing-the-algolia-search-behavior",level:3},{value:"Editing the Algolia search component",id:"editing-the-algolia-search-component",level:3},{value:"Troubleshooting",id:"algolia-troubleshooting",level:3},{value:"No Search Results",id:"algolia-no-search-results",level:4},{value:"Support",id:"algolia-support",level:3},{value:"\uD83D\uDC65 Using Typesense DocSearch",id:"using-typesense-docsearch",level:2},{value:"\uD83D\uDC65 Using Local Search",id:"using-local-search",level:2},{value:"\uD83D\uDC65 Using your own search",id:"using-your-own-search",level:2}];function u(e){let r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components},{Details:s}=r;return!s&&function(e,r){throw Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.header,{children:(0,a.jsx)(r.h1,{id:"search",children:"Search"})}),"\n",(0,a.jsx)(r.p,{children:"There are a few options you can use to add search to your website:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["\uD83E\uDD47 ",(0,a.jsx)(r.a,{href:"#using-algolia-docsearch",children:"Algolia DocSearch"})," (",(0,a.jsx)(r.strong,{children:"official"}),")"]}),"\n",(0,a.jsxs)(r.li,{children:["\uD83D\uDC65 ",(0,a.jsx)(r.a,{href:"#using-typesense-docsearch",children:"Typesense DocSearch"})]}),"\n",(0,a.jsxs)(r.li,{children:["\uD83D\uDC65 ",(0,a.jsx)(r.a,{href:"#using-local-search",children:"Local Search"})]}),"\n",(0,a.jsxs)(r.li,{children:["\uD83D\uDC65 ",(0,a.jsxs)(r.a,{href:"#using-your-own-search",children:["Your own ",(0,a.jsx)(r.code,{children:"SearchBar"})," component"]})]}),"\n"]}),"\n",(0,a.jsxs)(r.admonition,{type:"info",children:[(0,a.jsxs)(r.p,{children:["\uD83E\uDD47 Docusaurus provides ",(0,a.jsx)(r.strong,{children:"first-class support"})," for ",(0,a.jsx)(r.a,{href:"#using-algolia-docsearch",children:"Algolia DocSearch"}),"."]}),(0,a.jsxs)(r.p,{children:["\uD83D\uDC65 Other options are ",(0,a.jsx)(r.strong,{children:"maintained by the community"}),": please report bugs to their respective repositories."]})]}),"\n",(0,a.jsx)(r.h2,{id:"using-algolia-docsearch",children:"\uD83E\uDD47 Using Algolia DocSearch"}),"\n",(0,a.jsxs)(r.p,{children:["Docusaurus has ",(0,a.jsx)(r.strong,{children:"official support"})," for ",(0,a.jsx)(r.a,{href:"https://docsearch.algolia.com",children:"Algolia DocSearch"}),"."]}),"\n",(0,a.jsxs)(r.p,{children:["The service is ",(0,a.jsx)(r.strong,{children:"free"})," for any developer documentation or technical blog: just make sure to read the ",(0,a.jsx)(r.a,{href:"https://docsearch.algolia.com/docs/who-can-apply/",children:"checklist"})," and ",(0,a.jsx)(r.a,{href:"https://docsearch.algolia.com/apply",children:"apply to the DocSearch program"}),"."]}),"\n",(0,a.jsx)(r.p,{children:"DocSearch crawls your website once a week (the schedule is configurable from the web interface) and aggregates all the content in an Algolia index. This content is then queried directly from your front-end using the Algolia API."}),"\n",(0,a.jsxs)(r.p,{children:["If your website is ",(0,a.jsx)(r.a,{href:"https://docsearch.algolia.com/docs/who-can-apply",children:"not eligible"})," for the free, hosted version of DocSearch, or if your website sits behind a firewall and is not public, then you can ",(0,a.jsx)(r.a,{href:"https://docsearch.algolia.com/docs/run-your-own/",children:"run your own"})," DocSearch crawler."]}),"\n",(0,a.jsx)(r.admonition,{type:"note",children:(0,a.jsxs)(r.p,{children:["By default, the Docusaurus preset generates a ",(0,a.jsx)(r.a,{href:"https://docusaurus.io/sitemap.xml",children:"sitemap.xml"})," that the Algolia crawler can use."]})}),"\n",(0,a.jsx)(r.admonition,{title:"From the old docsearch?",type:"info",children:(0,a.jsxs)(r.p,{children:["You can read more about migration from the legacy DocSearch infra in ",(0,a.jsx)(r.a,{href:"/blog/2021/11/21/algolia-docsearch-migration",children:"our blog post"})," or ",(0,a.jsx)(r.a,{href:"https://docsearch.algolia.com/docs/migrating-from-legacy",children:"the DocSearch migration docs"}),"."]})}),"\n",(0,a.jsx)(r.h3,{id:"algolia-index-configuration",children:"Index Configuration"}),"\n",(0,a.jsxs)(r.p,{children:["After your application has been approved and deployed, you will receive an email with all the details for you to add DocSearch to your project. Editing and managing your crawls can be done via ",(0,a.jsx)(r.a,{href:"https://crawler.algolia.com/",children:"the web interface"}),". Indices are readily available after deployment, so manual configuration usually isn't necessary."]}),"\n",(0,a.jsx)(r.admonition,{title:"Use the recommended crawler config",type:"danger",children:(0,a.jsxs)(r.p,{children:["It is highly recommended to use our official ",(0,a.jsx)(r.a,{href:"https://docsearch.algolia.com/docs/templates/#docusaurus-v3-template",children:(0,a.jsx)(r.strong,{children:"Docusaurus v3 crawler configuration"})}),". We cannot support you if you choose a different crawler configuration."]})}),"\n",(0,a.jsxs)(r.admonition,{title:"When updating your crawler config",type:"warning",children:[(0,a.jsxs)(r.p,{children:["The crawler configuration contains a ",(0,a.jsx)(r.code,{children:"initialIndexSettings"}),", which will only be used to initialize your Algolia index if it does not exist yet."]}),(0,a.jsxs)(r.p,{children:["If you update your ",(0,a.jsx)(r.code,{children:"initialIndexSettings"})," crawler setting, it is possible to update the index manually through the interface, but ",(0,a.jsx)(r.a,{href:"https://github.com/facebook/docusaurus/issues/9200#issuecomment-1667338492",children:"the Algolia team recommends to delete your index and then restart a crawl"})," to fully reinitialize it with the new settings."]})]}),"\n",(0,a.jsx)(r.h3,{id:"connecting-algolia",children:"Connecting Algolia"}),"\n",(0,a.jsxs)(r.p,{children:["Docusaurus' own ",(0,a.jsx)(r.code,{children:"@docusaurus/preset-classic"})," supports Algolia DocSearch integration. If you use the classic preset, no additional installation is needed."]}),"\n",(0,a.jsxs)(s,{children:[(0,a.jsxs)("summary",{children:["Installation steps when not using ",(0,a.jsx)("code",{children:"@docusaurus/preset-classic"})]}),(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsx)(r.li,{children:"Install the package:"}),"\n"]}),(0,a.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,a.jsx)(c.Z,{value:"npm",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"npm install --save @docusaurus/theme-search-algolia\n"})})}),(0,a.jsx)(c.Z,{value:"yarn",label:"Yarn",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"yarn add @docusaurus/theme-search-algolia\n"})})}),(0,a.jsx)(c.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"pnpm add @docusaurus/theme-search-algolia\n"})})})]}),(0,a.jsxs)(r.ol,{start:"2",children:["\n",(0,a.jsxs)(r.li,{children:["Register the theme in ",(0,a.jsx)(r.code,{children:"docusaurus.config.js"}),":"]}),"\n"]}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  title: 'My site',\n  // ...\n  themes: ['@docusaurus/theme-search-algolia'],\n  themeConfig: {\n    // ...\n  },\n};\n"})})]}),"\n",(0,a.jsxs)(r.p,{children:["Then, add an ",(0,a.jsx)(r.code,{children:"algolia"})," field in your ",(0,a.jsx)(r.code,{children:"themeConfig"}),". ",(0,a.jsx)(r.strong,{children:(0,a.jsx)(r.a,{href:"https://docsearch.algolia.com/apply/",children:"Apply for DocSearch"})})," to get your Algolia index and API key."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  // ...\n  themeConfig: {\n    // ...\n    // highlight-start\n    algolia: {\n      // The application ID provided by Algolia\n      appId: 'YOUR_APP_ID',\n\n      // Public API key: it is safe to commit it\n      apiKey: 'YOUR_SEARCH_API_KEY',\n\n      indexName: 'YOUR_INDEX_NAME',\n\n      // Optional: see doc section below\n      contextualSearch: true,\n\n      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.\n      externalUrlRegex: 'external\\\\.com|domain\\\\.com',\n\n      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs\n      replaceSearchResultPathname: {\n        from: '/docs/', // or as RegExp: /\\/docs\\//\n        to: '/',\n      },\n\n      // Optional: Algolia search parameters\n      searchParameters: {},\n\n      // Optional: path for search page that enabled by default (`false` to disable it)\n      searchPagePath: 'search',\n\n      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)\n      insights: false,\n\n      //... other Algolia params\n    },\n    // highlight-end\n  },\n};\n"})}),"\n",(0,a.jsxs)(r.admonition,{type:"info",children:[(0,a.jsxs)(r.p,{children:["The ",(0,a.jsx)(r.code,{children:"searchParameters"})," option used to be named ",(0,a.jsx)(r.code,{children:"algoliaOptions"})," in Docusaurus v1."]}),(0,a.jsxs)(r.p,{children:["Refer to its ",(0,a.jsx)(r.a,{href:"https://docsearch.algolia.com/docs/api#searchparameters",children:"official DocSearch documentation"})," for possible values."]})]}),"\n",(0,a.jsxs)(r.admonition,{type:"warning",children:[(0,a.jsx)(r.p,{children:"The search feature will not work reliably until Algolia crawls your site."}),(0,a.jsxs)(r.p,{children:["If search doesn't work after any significant change, please use the Algolia dashboard to ",(0,a.jsx)(r.strong,{children:"trigger a new crawl"}),"."]})]}),"\n",(0,a.jsx)(r.h3,{id:"contextual-search",children:"Contextual search"}),"\n",(0,a.jsxs)(r.p,{children:["Contextual search is ",(0,a.jsx)(r.strong,{children:"enabled by default"}),"."]}),"\n",(0,a.jsxs)(r.p,{children:["It ensures that search results are ",(0,a.jsx)(r.strong,{children:"relevant to the current language and version"}),"."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  // ...\n  themeConfig: {\n    // ...\n    // highlight-start\n    algolia: {\n      contextualSearch: true,\n    },\n    // highlight-end\n  },\n};\n"})}),"\n",(0,a.jsxs)(r.p,{children:["Let's consider you have 2 docs versions (",(0,a.jsx)(r.strong,{children:"v1"})," and ",(0,a.jsx)(r.strong,{children:"v2"}),") and 2 languages (",(0,a.jsx)(r.code,{children:"en"})," and ",(0,a.jsx)(r.code,{children:"fr"}),")."]}),"\n",(0,a.jsx)(r.p,{children:"When browsing v2 docs, it would be odd to return search results for the v1 documentation. Sometimes v1 and v2 docs are quite similar, and you would end up with duplicate search results for the same query (one result per version)."}),"\n",(0,a.jsx)(r.p,{children:"Similarly, when browsing the French site, it would be odd to return search results for the English docs."}),"\n",(0,a.jsx)(r.p,{children:"To solve this problem, the contextual search feature understands that you are browsing a specific docs version and language, and will create the search query filters dynamically."}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["on ",(0,a.jsx)(r.code,{children:"/en/docs/v1/myDoc"}),", search results will only include ",(0,a.jsx)(r.strong,{children:"English"})," results for the ",(0,a.jsx)(r.strong,{children:"v1"})," docs (+ other unversioned pages)"]}),"\n",(0,a.jsxs)(r.li,{children:["on ",(0,a.jsx)(r.code,{children:"/fr/docs/v2/myDoc"}),", search results will only include ",(0,a.jsx)(r.strong,{children:"French"})," results for the ",(0,a.jsx)(r.strong,{children:"v2"})," docs (+ other unversioned pages)"]}),"\n"]}),"\n",(0,a.jsxs)(r.admonition,{type:"info",children:[(0,a.jsxs)(r.p,{children:["When using ",(0,a.jsx)(r.code,{children:"contextualSearch: true"})," (default), the contextual facet filters will be merged with the ones provided with ",(0,a.jsx)(r.code,{children:"algolia.searchParameters.facetFilters"})," ."]}),(0,a.jsxs)(r.p,{children:["For specific needs, you can disable ",(0,a.jsx)(r.code,{children:"contextualSearch"})," and define your own ",(0,a.jsx)(r.code,{children:"facetFilters"}),":"]}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  // ...\n  themeConfig: {\n    // ...\n    // highlight-start\n    algolia: {\n      contextualSearch: false,\n      searchParameters: {\n        facetFilters: ['language:en', ['filter1', 'filter2'], 'filter3'],\n      },\n    },\n    // highlight-end\n  },\n};\n"})}),(0,a.jsxs)(r.p,{children:["Refer to the relevant ",(0,a.jsx)(r.a,{href:"https://www.algolia.com/doc/guides/managing-results/refine-results/faceting/",children:"Algolia faceting documentation"}),"."]})]}),"\n",(0,a.jsx)(r.admonition,{title:"Contextual search doesn't work?",type:"warning",children:(0,a.jsxs)(r.p,{children:["If you only get search results when Contextual Search is disabled, this is very likely because of an ",(0,a.jsx)(r.a,{href:"#algolia-no-search-results",children:"index configuration issue"}),"."]})}),"\n",(0,a.jsx)(r.h3,{id:"styling-your-algolia-search",children:"Styling your Algolia search"}),"\n",(0,a.jsx)(r.p,{children:"By default, DocSearch comes with a fine-tuned theme that was designed for accessibility, making sure that colors and contrasts respect standards."}),"\n",(0,a.jsxs)(r.p,{children:["Still, you can reuse the ",(0,a.jsx)(r.a,{href:"/docs/styling-layout#styling-your-site-with-infima",children:"Infima CSS variables"})," from Docusaurus to style DocSearch by editing the ",(0,a.jsx)(r.code,{children:"/src/css/custom.css"})," file."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-css",metastring:'title="/src/css/custom.css"',children:"[data-theme='light'] .DocSearch {\n  /* --docsearch-primary-color: var(--ifm-color-primary); */\n  /* --docsearch-text-color: var(--ifm-font-color-base); */\n  --docsearch-muted-color: var(--ifm-color-secondary-darkest);\n  --docsearch-container-background: rgba(94, 100, 112, 0.7);\n  /* Modal */\n  --docsearch-modal-background: var(--ifm-color-secondary-lighter);\n  /* Search box */\n  --docsearch-searchbox-background: var(--ifm-color-secondary);\n  --docsearch-searchbox-focus-background: var(--ifm-color-white);\n  /* Hit */\n  --docsearch-hit-color: var(--ifm-font-color-base);\n  --docsearch-hit-active-color: var(--ifm-color-white);\n  --docsearch-hit-background: var(--ifm-color-white);\n  /* Footer */\n  --docsearch-footer-background: var(--ifm-color-white);\n}\n\n[data-theme='dark'] .DocSearch {\n  --docsearch-text-color: var(--ifm-font-color-base);\n  --docsearch-muted-color: var(--ifm-color-secondary-darkest);\n  --docsearch-container-background: rgba(47, 55, 69, 0.7);\n  /* Modal */\n  --docsearch-modal-background: var(--ifm-background-color);\n  /* Search box */\n  --docsearch-searchbox-background: var(--ifm-background-color);\n  --docsearch-searchbox-focus-background: var(--ifm-color-black);\n  /* Hit */\n  --docsearch-hit-color: var(--ifm-font-color-base);\n  --docsearch-hit-active-color: var(--ifm-color-white);\n  --docsearch-hit-background: var(--ifm-color-emphasis-100);\n  /* Footer */\n  --docsearch-footer-background: var(--ifm-background-surface-color);\n  --docsearch-key-gradient: linear-gradient(\n    -26.5deg,\n    var(--ifm-color-emphasis-200) 0%,\n    var(--ifm-color-emphasis-100) 100%\n  );\n}\n"})}),"\n",(0,a.jsx)(r.h3,{id:"customizing-the-algolia-search-behavior",children:"Customizing the Algolia search behavior"}),"\n",(0,a.jsxs)(r.p,{children:["Algolia DocSearch supports a ",(0,a.jsx)(r.a,{href:"https://docsearch.algolia.com/docs/api/",children:"list of options"})," that you can pass to the ",(0,a.jsx)(r.code,{children:"algolia"})," field in the ",(0,a.jsx)(r.code,{children:"docusaurus.config.js"})," file."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  themeConfig: {\n    // ...\n    algolia: {\n      apiKey: 'YOUR_API_KEY',\n      indexName: 'YOUR_INDEX_NAME',\n      // Options...\n    },\n  },\n};\n"})}),"\n",(0,a.jsx)(r.h3,{id:"editing-the-algolia-search-component",children:"Editing the Algolia search component"}),"\n",(0,a.jsxs)(r.p,{children:["If you prefer to edit the Algolia search React component, ",(0,a.jsx)(r.a,{href:"/docs/swizzling",children:"swizzle"})," the ",(0,a.jsx)(r.code,{children:"SearchBar"})," component in ",(0,a.jsx)(r.code,{children:"@docusaurus/theme-search-algolia"}),":"]}),"\n",(0,a.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,a.jsx)(c.Z,{value:"npm",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"npm run swizzle @docusaurus/theme-search-algolia SearchBar\n"})})}),(0,a.jsx)(c.Z,{value:"yarn",label:"Yarn",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"yarn swizzle @docusaurus/theme-search-algolia SearchBar\n"})})}),(0,a.jsx)(c.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"pnpm run swizzle @docusaurus/theme-search-algolia SearchBar\n"})})})]}),"\n",(0,a.jsx)(r.h3,{id:"algolia-troubleshooting",children:"Troubleshooting"}),"\n",(0,a.jsx)(r.p,{children:"Here are the most common issues Docusaurus users face when using Algolia DocSearch."}),"\n",(0,a.jsx)(r.h4,{id:"algolia-no-search-results",children:"No Search Results"}),"\n",(0,a.jsxs)(r.p,{children:["Seeing no search results is usually related to an ",(0,a.jsx)(r.strong,{children:"index configuration problem"}),"."]}),"\n",(0,a.jsxs)(s,{children:[(0,a.jsx)("summary",{children:"How to check if I have a config problem?"}),(0,a.jsxs)(r.p,{children:["Docusaurus uses ",(0,a.jsx)(r.a,{href:"https://www.algolia.com/doc/guides/managing-results/refine-results/faceting/",children:"Algolia faceting"})," for its ",(0,a.jsx)(r.a,{href:"#contextual-search",children:"Contextual Search"})," feature, to create dynamic queries such as:"]}),(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-json",children:'[\n  "language:en",\n  [\n    "docusaurus_tag:default",\n    "docusaurus_tag:docs-default-3.2.1",\n    "docusaurus_tag:docs-community-current",\n    "docusaurus_tag:docs-docs-tests-current"\n  ]\n]\n'})}),(0,a.jsxs)(r.p,{children:["On the Algolia UI, your index should allow to create facet queries on fields ",(0,a.jsx)(r.code,{children:"docusaurus_tag"}),", ",(0,a.jsx)(r.code,{children:"language"}),", ",(0,a.jsx)(r.code,{children:"lang"}),", ",(0,a.jsx)(r.code,{children:"version"}),", ",(0,a.jsx)(r.code,{children:"type"}),", as shown in the screenshot below:"]}),(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{alt:"Algolia index showing appropriate faceting fields",src:n(46877).Z+"",width:"1072",height:"1761"})}),(0,a.jsxs)(r.p,{children:["Alternatively, if you disable ",(0,a.jsx)(r.a,{href:"#contextual-search",children:"Contextual Search"})," with ",(0,a.jsx)(r.code,{children:"{contextualSearch: false}"})," (which we don't particularly recommend), Docusaurus will not use facet queries, and you should start seeing results."]})]}),"\n",(0,a.jsx)(r.admonition,{title:"Use the recommended configuration",type:"danger",children:(0,a.jsxs)(r.p,{children:["We ",(0,a.jsx)(r.a,{href:"#algolia-index-configuration",children:"recommend a specific crawler configuration"})," for a good reason. We cannot support you if you choose to use a different configuration."]})}),"\n",(0,a.jsx)(r.p,{children:"You can fix index configuration problems by following those steps:"}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsxs)(r.li,{children:["Use the ",(0,a.jsx)(r.a,{href:"#algolia-index-configuration",children:"recommend crawler configuration"})]}),"\n",(0,a.jsx)(r.li,{children:"Delete your index through the UI"}),"\n",(0,a.jsx)(r.li,{children:"Trigger a new crawl through the UI"}),"\n",(0,a.jsxs)(r.li,{children:["Check your index is recreated with the appropriate faceting fields: ",(0,a.jsx)(r.code,{children:"docusaurus_tag"}),", ",(0,a.jsx)(r.code,{children:"language"}),", ",(0,a.jsx)(r.code,{children:"lang"}),", ",(0,a.jsx)(r.code,{children:"version"}),", ",(0,a.jsx)(r.code,{children:"type"})]}),"\n",(0,a.jsxs)(r.li,{children:["See that you now get search results, even with ",(0,a.jsx)(r.a,{href:"#contextual-search",children:"Contextual Search"})," enabled"]}),"\n"]}),"\n",(0,a.jsx)(r.h3,{id:"algolia-support",children:"Support"}),"\n",(0,a.jsx)(r.p,{children:"The Algolia DocSearch team can help you figure out search problems on your site."}),"\n",(0,a.jsxs)(r.p,{children:["You can reach out to Algolia via ",(0,a.jsx)(r.a,{href:"https://algolia.com/support",children:"their support page"})," or on ",(0,a.jsx)(r.a,{href:"https://discord.gg/wr2m5j948P",children:"Discord"}),"."]}),"\n",(0,a.jsxs)(r.p,{children:["Docusaurus also has an ",(0,a.jsx)(r.code,{children:"#algolia"})," channel on ",(0,a.jsx)(r.a,{href:"https://discordapp.com/invite/docusaurus",children:"Discord"}),"."]}),"\n",(0,a.jsx)(r.h2,{id:"using-typesense-docsearch",children:"\uD83D\uDC65 Using Typesense DocSearch"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.a,{href:"https://typesense.org",children:"Typesense"})," DocSearch works similar to Algolia DocSearch, except that your website is indexed into a Typesense search cluster."]}),"\n",(0,a.jsxs)(r.p,{children:["Typesense is an ",(0,a.jsx)(r.a,{href:"https://github.com/typesense/typesense",children:"open source"})," instant-search engine that you can either:"]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"https://typesense.org/docs/guide/install-typesense.html#option-2-local-machine-self-hosting",children:"Self-Host"})," on your own servers or"]}),"\n",(0,a.jsxs)(r.li,{children:["Use the Managed ",(0,a.jsx)(r.a,{href:"https://cloud.typesense.org",children:"Typesense Cloud"})," service."]}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:"Similar to Algolia DocSearch, there are two components:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"https://github.com/typesense/typesense-docsearch-scraper",children:"typesense-docsearch-scraper"})," - which scrapes your website and indexes the data in your Typesense cluster."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"https://github.com/typesense/docusaurus-theme-search-typesense",children:"docusaurus-theme-search-typesense"})," - a search bar UI component to add to your website."]}),"\n"]}),"\n",(0,a.jsxs)(r.p,{children:["Read a step-by-step walk-through of how to ",(0,a.jsx)(r.a,{href:"https://typesense.org/docs/guide/docsearch.html#step-1-set-up-docsearch-scraper",children:"run typesense-docsearch-scraper here"})," and how to ",(0,a.jsx)(r.a,{href:"https://typesense.org/docs/guide/docsearch.html#option-a-docusaurus-powered-sites",children:"install the Search Bar in your Docusaurus Site here"}),"."]}),"\n",(0,a.jsx)(r.h2,{id:"using-local-search",children:"\uD83D\uDC65 Using Local Search"}),"\n",(0,a.jsx)(r.p,{children:"You can use a local search plugin for websites where the search index is small and can be downloaded to your users' browsers when they visit your website."}),"\n",(0,a.jsxs)(r.p,{children:["You'll find a list of community-supported ",(0,a.jsx)(r.a,{href:"https://docusaurus.io/community/resources#search",children:"local search plugins listed here"}),"."]}),"\n",(0,a.jsx)(r.h2,{id:"using-your-own-search",children:"\uD83D\uDC65 Using your own search"}),"\n",(0,a.jsxs)(r.p,{children:["To use your own search, swizzle the ",(0,a.jsx)(r.code,{children:"SearchBar"})," component in ",(0,a.jsx)(r.code,{children:"@docusaurus/theme-classic"})]}),"\n",(0,a.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,a.jsx)(c.Z,{value:"npm",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"npm run swizzle @docusaurus/theme-classic SearchBar\n"})})}),(0,a.jsx)(c.Z,{value:"yarn",label:"Yarn",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"yarn swizzle @docusaurus/theme-classic SearchBar\n"})})}),(0,a.jsx)(c.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"pnpm run swizzle @docusaurus/theme-classic SearchBar\n"})})})]}),"\n",(0,a.jsxs)(r.p,{children:["This will create an ",(0,a.jsx)(r.code,{children:"src/theme/SearchBar"})," file in your project folder. Restart your dev server and edit the component, you will see that Docusaurus uses your own ",(0,a.jsx)(r.code,{children:"SearchBar"})," component now."]}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Notes"}),": You can alternatively ",(0,a.jsx)(r.a,{href:"#editing-the-algolia-search-component",children:"swizzle from Algolia SearchBar"})," and create your own search component from there."]})]})}function g(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},67860:function(e,r,n){n.d(r,{Z:()=>i});var s=n("24246");n("27378");var a=n("90496");let o="tabItem_pnkT";function i(e){let{children:r,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n,children:r})}},46291:function(e,r,n){n.d(r,{Z:()=>b});var s=n("24246"),a=n("27378"),o=n("90496"),i=n("12451"),c=n("3620"),t=n("89637"),l=n("74417"),h=n("46918"),d=n("58247");function u(e){return a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||a.isValidElement(e)&&function(e){let{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function g(e){let{value:r,tabValues:n}=e;return n.some(e=>e.value===r)}var p=n("8903");let x="tabList_Qoir",f="tabItem_AQgk";function m(e){let{className:r,block:n,selectedValue:a,selectValue:c,tabValues:t}=e,l=[],{blockElementScrollPositionUntilNextRender:h}=(0,i.o5)(),d=e=>{let r=e.currentTarget,n=t[l.indexOf(r)].value;n!==a&&(h(r),c(n))},u=e=>{let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let n=l.indexOf(e.currentTarget)+1;r=l[n]??l[0];break}case"ArrowLeft":{let n=l.indexOf(e.currentTarget)-1;r=l[n]??l[l.length-1]}}r?.focus()};return(0,s.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},r),children:t.map(e=>{let{value:r,label:n,attributes:i}=e;return(0,s.jsx)("li",{role:"tab",tabIndex:a===r?0:-1,"aria-selected":a===r,ref:e=>{l.push(e)},onKeyDown:u,onClick:d,...i,className:(0,o.Z)("tabs__item",f,i?.className,{"tabs__item--active":a===r}),children:n??r},r)})})}function j(e){let{lazy:r,children:n,selectedValue:i}=e,c=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){let e=c.find(e=>e.props.value===i);return e?(0,a.cloneElement)(e,{className:(0,o.Z)("margin-top--md",e.props.className)}):null}return(0,s.jsx)("div",{className:"margin-top--md",children:c.map((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==i}))})}function y(e){let r=function(e){let{defaultValue:r,queryString:n=!1,groupId:s}=e,o=function(e){let{values:r,children:n}=e;return(0,a.useMemo)(()=>{let e=r??u(n).map(e=>{let{props:{value:r,label:n,attributes:s,default:a}}=e;return{value:r,label:n,attributes:s,default:a}});return!function(e){let r=(0,h.lx)(e,(e,r)=>e.value===r.value);if(r.length>0)throw Error(`Docusaurus error: Duplicate values "${r.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[r,n])}(e),[i,p]=(0,a.useState)(()=>(function(e){let{defaultValue:r,tabValues:n}=e;if(0===n.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!g({value:r,tabValues:n}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${n.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}let s=n.find(e=>e.default)??n[0];if(!s)throw Error("Unexpected error: 0 tabValues");return s.value})({defaultValue:r,tabValues:o})),[x,f]=function(e){let{queryString:r=!1,groupId:n}=e,s=(0,c.k6)(),o=function(e){let{queryString:r=!1,groupId:n}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:r,groupId:n}),i=(0,l._X)(o);return[i,(0,a.useCallback)(e=>{if(!o)return;let r=new URLSearchParams(s.location.search);r.set(o,e),s.replace({...s.location,search:r.toString()})},[o,s])]}({queryString:n,groupId:s}),[m,j]=function(e){var r;let{groupId:n}=e;let s=(r=n)?`docusaurus.tab.${r}`:null,[o,i]=(0,d.Nk)(s);return[o,(0,a.useCallback)(e=>{if(!!s)i.set(e)},[s,i])]}({groupId:s}),y=(()=>{let e=x??m;return g({value:e,tabValues:o})?e:null})();return(0,t.Z)(()=>{y&&p(y)},[y]),{selectedValue:i,selectValue:(0,a.useCallback)(e=>{if(!g({value:e,tabValues:o}))throw Error(`Can't select invalid tab value=${e}`);p(e),f(e),j(e)},[f,j,o]),tabValues:o}}(e);return(0,s.jsxs)("div",{className:(0,o.Z)("tabs-container",x),children:[(0,s.jsx)(m,{...r,...e}),(0,s.jsx)(j,{...r,...e})]})}function b(e){let r=(0,p.Z)();return(0,s.jsx)(y,{...e,children:u(e.children)},String(r))}},80980:function(e,r,n){n.d(r,{Z:function(){return c},a:function(){return i}});var s=n(27378);let a={},o=s.createContext(a);function i(e){let r=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);