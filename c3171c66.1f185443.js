(window.webpackJsonp=window.webpackJsonp||[]).push([[754],{1069:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),u=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(a),b=r,d=p["".concat(c,".").concat(b)]||p[b]||y[b]||o;return a?n.a.createElement(d,l(l({ref:t},s),{},{components:a})):n.a.createElement(d,l({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var s=2;s<o;s++)c[s]=a[s];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},830:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return u}));var r=a(3),n=a(7),o=(a(0),a(1069)),c={id:"classic-guides-network-layer",title:"Network Layer",original_id:"classic-guides-network-layer"},l={unversionedId:"classic-guides-network-layer",id:"version-classic/classic-guides-network-layer",isDocsHomePage:!1,title:"Network Layer",description:"Relay has a network layer abstraction that separates mutations and queries from the actual machinery that sends requests to the GraphQL server. This gives us the flexibility to configure or even completely replace the default network layer via injection.",source:"@site/versioned_docs/version-classic/Classic-Guides-NetworkLayer.md",slug:"/classic-guides-network-layer",permalink:"/docs/classic/classic-guides-network-layer",editUrl:"https://github.com/facebook/relay/edit/master/website-v2/docs/versioned_docs/version-classic/Classic-Guides-NetworkLayer.md",version:"classic",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1614354101,sidebar:"version-classic/docs",previous:{title:"Mutations",permalink:"/docs/classic/classic-guides-mutations"},next:{title:"Relay",permalink:"/docs/classic/classic-api-reference-relay"}},i=[{value:"Default Network Layer",id:"default-network-layer",children:[]},{value:"Custom Network Layers",id:"custom-network-layers",children:[]}],s={toc:i};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Relay has a network layer abstraction that separates mutations and queries from the actual machinery that sends requests to the GraphQL server. This gives us the flexibility to configure or even completely replace the default network layer via injection."),Object(o.b)("h2",{id:"default-network-layer"},"Default Network Layer"),Object(o.b)("p",null,"Relay is pre-configured to use a default network layer that works with ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/graphql/express-graphql"}),"express-graphql"),". This default network layer is exposed via ",Object(o.b)("inlineCode",{parentName:"p"},"Relay.DefaultNetworkLayer"),"."),Object(o.b)("p",null,"By default, Relay assumes that GraphQL is served at ",Object(o.b)("inlineCode",{parentName:"p"},"/graphql")," relative to the origin where our application is served. This can be re-configured by injecting a custom instantiation of the default network layer."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"\nRelay.injectNetworkLayer(\n  new Relay.DefaultNetworkLayer('http://example.com/graphql')\n);\n\n")),Object(o.b)("p",null,"Underneath the hood, the default network layer uses ",Object(o.b)("inlineCode",{parentName:"p"},"fetch")," (",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://fetch.spec.whatwg.org"}),"Living Standard"),"). The constructor for ",Object(o.b)("inlineCode",{parentName:"p"},"Relay.DefaultNetworkLayer")," takes an optional second argument that accepts any valid initialization property that ",Object(o.b)("inlineCode",{parentName:"p"},"fetch")," accepts."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:'language-{"{"}3{"}"}'}),"\nRelay.injectNetworkLayer(\n  new Relay.DefaultNetworkLayer('http://example.com/graphql', {\n    credentials: 'same-origin',\n  })\n);\n\n")),Object(o.b)("p",null,"When it sends queries, it will automatically fail requests after a 15 second timeout. Also, failed requests are automatically retried twice, with a 1 second delay and a 3 second delay, respectively."),Object(o.b)("p",null,"Like the GraphQL URI, the timeout and retry behavior can be configured:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:'language-{"{"}3-4{"}"}'}),"\nRelay.injectNetworkLayer(\n  new Relay.DefaultNetworkLayer('http://example.com/graphql', {\n    fetchTimeout: 30000,   // Timeout after 30s.\n    retryDelays: [5000],   // Only retry once after a 5s delay.\n  })\n);\n\n")),Object(o.b)("p",null,"Unlike queries, failed requests for mutations are not automatically retried."),Object(o.b)("p",null,"Custom HTTP headers can be configured by providing a ",Object(o.b)("inlineCode",{parentName:"p"},"headers")," object:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:'language-{"{"}3-5{"}"}'}),"\nRelay.injectNetworkLayer(\n  new Relay.DefaultNetworkLayer('http://example.com/graphql', {\n    headers: {\n      Authorization: 'Basic SSdsbCBmaW5kIHNvbWV0aGluZyB0byBwdXQgaGVyZQ==',\n    },\n  })\n);\n\n")),Object(o.b)("h2",{id:"custom-network-layers"},"Custom Network Layers"),Object(o.b)("p",null,"Relay also lets us completely replace the default network layer."),Object(o.b)("p",null,"Custom network layers must conform to the following ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"./classic-interfaces-relay-network-layer"}),"RelayNetworkLayer")," interface. Although the default network layer is an instantiable class that accepts some configuration, this is not a requirement of an injected network layer."),Object(o.b)("p",null,"For example, a network layer can be a simple object that conforms to the interface:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"\nvar myNetworkLayer = {\n  sendMutation(mutationRequest) {\n    // ...\n  },\n  sendQueries(queryRequests) {\n    // ...\n  },\n  supports(...options) {\n    // ...\n  },\n};\n\nRelay.injectNetworkLayer(myNetworkLayer);\n\n")),Object(o.b)("p",null,"You can read more about the API ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"./classic-interfaces-relay-network-layer"}),"RelayNetworkLayer")," interface."))}u.isMDXComponent=!0}}]);