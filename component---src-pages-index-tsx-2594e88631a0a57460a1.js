(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{MUpH:function(t,e,n){"use strict";function a(t,e){return e||(e=t.slice(0)),t.raw=e,t}n.d(e,"a",(function(){return a}))},QeBL:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return d}));n("q1tI");var a,r=n("soUV"),c=n("hizP"),s=n("MUpH"),o=n("Wbzz"),i=n("rtRN"),l=n("jl/1"),u=n("qKvR");function b(t){var e=t.slug,n=t.title,r=t.content,c=t.authorId,b=t.date,d=t.readingTime,f=t.tags;return Object(u.b)("article",{onClick:function(t){Object(o.navigate)(e)},className:Object(l.a)(a||(a=Object(s.a)(["\n        bg-postBg p-3 rounded-md\n        cursor-pointer \n        flex flex-col\n        space-y-1\n        sm:w-3/4\n        w-full\n        !mt-4\n        min-h-200\n    "])))},Object(u.b)("div",{className:""},Object(u.b)("h3",{className:"p-0"},Object(u.b)(o.Link,{to:e},n)),Object(u.b)("div",{className:"p-1 text-sm card-subheading-info"},Object(u.b)("div",{className:"font-sans"},b+" | "+d," | by ",Object(u.b)("span",{className:"font-bold text-secondary text-sm"},c)))),Object(u.b)("section",null,Object(u.b)("p",{dangerouslySetInnerHTML:{__html:r}})),Object(u.b)(i.a,{tags:f,className:"!mt-auto pt-5 mb-2"}))}function d(t){var e=t.data,n=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges;return Object(u.b)(r.a,{location:t.location,title:n},Object(u.b)("div",{className:"space-y-3 p-3 !pt-0 sm:!pt-5 lg:p-20"},Object(u.b)(c.a,{title:"Don de Caballero"}),Object(u.b)("div",{className:"flex flex-col items-center max-w-screen-xl mx-auto space-y-2"},a.map((function(t){var e=t.node,n=e.fields.slug,a=e.frontmatter.title||n,r=e.frontmatter.description||e.excerpt,c=e.frontmatter.tags;return Object(u.b)(b,{key:n,slug:n,title:a,content:r,date:e.frontmatter.date,readingTime:e.fields.readingTime.text,authorId:e.frontmatter.author.id,tags:c})})))))}},"jl/1":function(t,e,n){"use strict";function a(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];var r="";return t.forEach((function(t,e){var a=n[e]||"";r+=t+a})),r.replace(/\n/g,"").split(" ").filter(Boolean).join(" ")}n.d(e,"a",(function(){return a}))},rtRN:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("q1tI");var a=n("qKvR");function r(t){var e=t.tags,n=t.className;return Object(a.b)("div",{className:"flex flex-wrap -m-0.5 dark:-m-2  "+n},e.map((function(t){return Object(a.b)(c,{key:t},"#"+t)})))}function c(t){return Object(a.b)("span",{className:"\n      m-0.5 rounded px-2\n      text-xs cursor-pointer\n      bg-tagBg\n      text-secondary\n      font-mono\n      pb-0\n      !py-1\n      "},t.children)}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-2594e88631a0a57460a1.js.map