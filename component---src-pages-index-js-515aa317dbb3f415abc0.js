(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{140:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(150),o=n(144),c=n(148),l=n(142),s=function(){return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",marginBottom:"1em"}},r.a.createElement("p",{class:"type-header"},"My name is Anika Corpus and I am a User Interface Engineer."),r.a.createElement(l.Link,{to:"https://www.linkedin.com/in/anika-corpus?trk=profile-badge"},r.a.createElement("img",{style:{marginTop:"1.5em"},src:"https://static.licdn.com/scds/common/u/images/logos/linkedin/logo_linkedin_93x21_v2.png",alt:"LinkedIn"})))};t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(c.a,{title:"Home",keywords:["ui","ui engineer","react developer"],metaDescription:"User Interface Engineer"}),r.a.createElement("h1",{class:"type-first"},"Hello! ",r.a.createElement(o.a,{symbol:"👋"})," "),r.a.createElement(s,null))}},142:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(141),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var s=n(143),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var d=n(32);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},143:function(e,t,n){var a;e.exports=(a=n(146))&&a.default||a},144:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("span",{className:"emoji",role:"img","aria-label":e.label?e.label:"","aria-hidden":e.label?"false":"true"},e.symbol)}},145:function(e){e.exports={data:{site:{siteMetadata:{title:"Anika Corpus"}}}}},146:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(51),l=n(2),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},147:function(e,t,n){},148:function(e,t,n){"use strict";var a=n(149),r=n(0),i=n.n(r),o=n(4),c=n.n(o),l=n(151),s=n.n(l),u=n(142);function d(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,c=e.title;return i.a.createElement(u.StaticQuery,{query:m,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d;var m="1025518380"},149:function(e){e.exports={data:{site:{siteMetadata:{title:"Anika Corpus",description:"User Interface Engineer",author:""}}}}},150:function(e,t,n){"use strict";var a=n(145),r=n(0),i=n.n(r),o=n(4),c=n.n(o),l=n(142),s=n(144),u=function(e){e.siteTitle;return i.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",margin:"1.45rem"}},i.a.createElement("a",{href:"mailto:anikacorpus@gmail.com",style:{color:"black",textDecoration:"none",fontSize:"18px"}},i.a.createElement(s.a,{symbol:"📬",label:"mail"}),"Contact Me"))};u.propTypes={siteTitle:c.a.string},u.defaultProps={siteTitle:""};var d=u,m=(n(147),function(e){var t=e.children;return i.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d,null),i.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",margin:"1.45rem"}},t))},data:a})});m.propTypes={children:c.a.node.isRequired};t.a=m}}]);
//# sourceMappingURL=component---src-pages-index-js-515aa317dbb3f415abc0.js.map