(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{100:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(6),b=(a(0),a(234)),c=a(236),i={id:"card",title:"Card"},l={unversionedId:"card",id:"version-1.2.0/card",isDocsHomePage:!1,title:"Card",description:"Cards are a great way to display information, usually containing content and",source:"@site/versioned_docs/version-1.2.0/card.md",permalink:"/docs/1.2.0/card",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-1.2.0/card.md",version:"1.2.0",sidebar:"version-1.2.0/docs",previous:{title:"ButtonGroup",permalink:"/docs/1.2.0/button_group"},next:{title:"CheckBox",permalink:"/docs/1.2.0/checkbox"}},o=[{value:"Usage",id:"usage",children:[]},{value:"Props",id:"props",children:[]},{value:"Reference",id:"reference",children:[{value:"<code>containerStyle</code>",id:"containerstyle",children:[]},{value:"<code>dividerStyle</code>",id:"dividerstyle",children:[]},{value:"<code>featuredSubtitle</code>",id:"featuredsubtitle",children:[]},{value:"<code>featuredSubtitleStyle</code>",id:"featuredsubtitlestyle",children:[]},{value:"<code>featuredTitle</code>",id:"featuredtitle",children:[]},{value:"<code>featuredTitleStyle</code>",id:"featuredtitlestyle",children:[]},{value:"<code>image</code>",id:"image",children:[]},{value:"<code>imageProps</code>",id:"imageprops",children:[]},{value:"<code>imageStyle</code>",id:"imagestyle",children:[]},{value:"<code>imageWrapperStyle</code>",id:"imagewrapperstyle",children:[]},{value:"<code>title</code>",id:"title",children:[]},{value:"<code>titleNumberOfLines</code>",id:"titlenumberoflines",children:[]},{value:"<code>titleStyle</code>",id:"titlestyle",children:[]},{value:"<code>wrapperStyle</code>",id:"wrapperstyle",children:[]}]}],p={rightToc:o};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Cards are a great way to display information, usually containing content and\nactions about a single subject. Cards can contain images, buttons, text and\nmore."),Object(b.b)("img",{alt:"Card Component",src:Object(c.a)("img/card.png")}),Object(b.b)("h2",{id:"usage"},"Usage"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const users = [\n {\n    name: 'brynn',\n    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'\n },\n ... // more users here\n]\n\nimport { View, Text, Image } from 'react-native'\nimport { Card, ListItem, Button, Icon } from 'react-native-elements'\n\n// implemented without image with header\n<Card title=\"CARD WITH DIVIDER\">\n  {\n    users.map((u, i) => {\n      return (\n        <View key={i} style={styles.user}>\n          <Image\n            style={styles.image}\n            resizeMode=\"cover\"\n            source={{ uri: u.avatar }}\n          />\n          <Text style={styles.name}>{u.name}</Text>\n        </View>\n      );\n    })\n  }\n</Card>\n\n// implemented without image without header, using ListItem component\n <Card containerStyle={{padding: 0}} >\n  {\n    users.map((u, i) => {\n      return (\n        <ListItem\n          key={i}\n          roundAvatar\n          title={u.name}\n          avatar={{uri:u.avatar}}\n        />\n      );\n    })\n  }\n</Card>\n\n\n// implemented with Text and Button as children\n<Card\n  title='HELLO WORLD'\n  image={require('../images/pic2.jpg')}>\n  <Text style={{marginBottom: 10}}>\n    The idea with React Native Elements is more about component structure than actual design.\n  </Text>\n  <Button\n    icon={<Icon name='code' color='#ffffff' />}\n    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}\n    title='VIEW NOW' />\n</Card>\n")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"props"},"Props"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#containerstyle"}),Object(b.b)("inlineCode",{parentName:"a"},"containerStyle"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#dividerstyle"}),Object(b.b)("inlineCode",{parentName:"a"},"dividerStyle"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#featuredsubtitle"}),Object(b.b)("inlineCode",{parentName:"a"},"featuredSubtitle"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#featuredsubtitlestyle"}),Object(b.b)("inlineCode",{parentName:"a"},"featuredSubtitleStyle"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#featuredtitle"}),Object(b.b)("inlineCode",{parentName:"a"},"featuredTitle"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#featuredtitlestyle"}),Object(b.b)("inlineCode",{parentName:"a"},"featuredTitleStyle"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#image"}),Object(b.b)("inlineCode",{parentName:"a"},"image"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#imageprops"}),Object(b.b)("inlineCode",{parentName:"a"},"imageProps"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#imagestyle"}),Object(b.b)("inlineCode",{parentName:"a"},"imageStyle"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#imagewrapperstyle"}),Object(b.b)("inlineCode",{parentName:"a"},"imageWrapperStyle"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#title"}),Object(b.b)("inlineCode",{parentName:"a"},"title"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#titlenumberoflines"}),Object(b.b)("inlineCode",{parentName:"a"},"titleNumberOfLines"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#titlestyle"}),Object(b.b)("inlineCode",{parentName:"a"},"titleStyle"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#wrapperstyle"}),Object(b.b)("inlineCode",{parentName:"a"},"wrapperStyle")))),Object(b.b)("hr",null),Object(b.b)("h2",{id:"reference"},"Reference"),Object(b.b)("h3",{id:"containerstyle"},Object(b.b)("inlineCode",{parentName:"h3"},"containerStyle")),Object(b.b)("p",null,"outer container style (optional)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"dividerstyle"},Object(b.b)("inlineCode",{parentName:"h3"},"dividerStyle")),Object(b.b)("p",null,"additional divider styling (if title provided) (optional)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"featuredsubtitle"},Object(b.b)("inlineCode",{parentName:"h3"},"featuredSubtitle")),Object(b.b)("p",null,"subtitle rendered over the image (only works if image prop is present)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"featuredsubtitlestyle"},Object(b.b)("inlineCode",{parentName:"h3"},"featuredSubtitleStyle")),Object(b.b)("p",null,"styling for featured subtitle"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"featuredtitle"},Object(b.b)("inlineCode",{parentName:"h3"},"featuredTitle")),Object(b.b)("p",null,"title rendered over the image (only works if image prop is present)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"featuredtitlestyle"},Object(b.b)("inlineCode",{parentName:"h3"},"featuredTitleStyle")),Object(b.b)("p",null,"styling for featured title"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"image"},Object(b.b)("inlineCode",{parentName:"h3"},"image")),Object(b.b)("p",null,"add an image as the heading with the image prop (optional)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"image uri or require path"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"imageprops"},Object(b.b)("inlineCode",{parentName:"h3"},"imageProps")),Object(b.b)("p",null,'optional properties to pass to the image if provided e.g "resizeMode"'),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"{",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/1.2.0/image#props"}),"...Image props"),"} )"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"imagestyle"},Object(b.b)("inlineCode",{parentName:"h3"},"imageStyle")),Object(b.b)("p",null,"specify image styling if image is provided"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object(style)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"inherited styling")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"imagewrapperstyle"},Object(b.b)("inlineCode",{parentName:"h3"},"imageWrapperStyle")),Object(b.b)("p",null,"specify styling for view surrounding image"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object(style)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"title"},Object(b.b)("inlineCode",{parentName:"h3"},"title")),Object(b.b)("p",null,"optional card title (optional)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string OR React Native Component"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"titlenumberoflines"},Object(b.b)("inlineCode",{parentName:"h3"},"titleNumberOfLines")),Object(b.b)("p",null,"number of lines for title (optional)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"number"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"titlestyle"},Object(b.b)("inlineCode",{parentName:"h3"},"titleStyle")),Object(b.b)("p",null,"additional title styling (if title provided) (optional)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"wrapperstyle"},Object(b.b)("inlineCode",{parentName:"h3"},"wrapperStyle")),Object(b.b)("p",null,"inner container style (optional)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object (style)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"none")))))}d.isMDXComponent=!0},234:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),d=p(a),j=n,m=d["".concat(c,".").concat(j)]||d[j]||O[j]||b;return a?r.a.createElement(m,i(i({ref:t},o),{},{components:a})):r.a.createElement(m,i({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=j;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var o=2;o<b;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},235:function(e,t,a){"use strict";var n=a(0),r=a(19);t.a=function(){var e=Object(n.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},236:function(e,t,a){"use strict";a.d(t,"b",(function(){return b})),a.d(t,"a",(function(){return c}));var n=a(235),r=a(237);function b(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,b=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var b=void 0===n?{}:n,c=b.forcePrependBaseUrl,i=void 0!==c&&c,l=b.absolute,o=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(r.b)(a))return a;if(i)return t+a;var p=!a.startsWith(t)?t+a.replace(/^\//,""):a;return o?e+p:p}(b,a,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,b().withBaseUrl)(e,t)}},237:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}))}}]);