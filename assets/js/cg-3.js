(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{349:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"e",(function(){return u})),n.d(t,"f",(function(){return c})),n.d(t,"g",(function(){return l})),n.d(t,"a",(function(){return f})),n.d(t,"d",(function(){return h})),n.d(t,"b",(function(){return p}));n(23),n(87),n(350),n(116),n(197),n(199),n(86),n(41),n(6),n(42),n(36),n(118),n(198);var r=/#.*$/,i=/\.(md|html)$/,s=/\/$/,a=/^[a-z]+:/i;function o(e){return decodeURI(e).replace(r,"").replace(i,"")}function u(e){return a.test(e)}function c(e){return/^mailto:/.test(e)}function l(e){return/^tel:/.test(e)}function f(e){if(u(e))return e;var t=e.match(r),n=t?t[0]:"",i=o(e);return s.test(i)?e:i+".html"+n}function h(e,t){var n=decodeURIComponent(e.hash),i=function(e){var t=e.match(r);if(t)return t[0]}(t);return(!i||n===i)&&o(e.path)===o(t)}function p(e){var t;return(e=e.map((function(e){return Object.assign({},e)}))).forEach((function(e){2===e.level?t=e:t&&(t.children||(t.children=[])).push(e)})),e.filter((function(e){return 2===e.level}))}},350:function(e,t,n){"use strict";var r=n(10),i=n(129),s=n(7),a=n(59),o=n(13),u=n(24),c=n(45),l=n(130),f=n(131);i("match",(function(e,t,n){return[function(t){var n=u(this),i=null==t?void 0:c(t,e);return i?r(i,t,n):new RegExp(t)[e](o(n))},function(e){var r=s(this),i=o(e),u=n(t,r,i);if(u.done)return u.value;if(!r.global)return f(r,i);var c=r.unicode;r.lastIndex=0;for(var h,p=[],d=0;null!==(h=f(r,i));){var g=o(h[0]);p[d]=g,""===g&&(r.lastIndex=l(i,a(r.lastIndex),c)),d++}return 0===d?null:p}]}))},352:function(e,t,n){"use strict";n(382),n(117),n(6),n(89);var r=n(349),i={name:"NavLink",props:{item:{required:!0}},computed:{link:function(){return Object(r.a)(this.item.link)},exact:function(){var e=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(t){return t===e.link})):"/"===this.link},isNonHttpURI:function(){return Object(r.f)(this.link)||Object(r.g)(this.link)},isBlankTarget:function(){return"_blank"===this.target},isInternal:function(){return!Object(r.e)(this.link)&&!this.isBlankTarget},target:function(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(r.e)(this.link)?"_blank":""},rel:function(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction:function(){this.$emit("focusout")}}},s=n(22),a=Object(s.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isInternal?n("RouterLink",{staticClass:"nav-link",attrs:{to:e.link,exact:e.exact},nativeOn:{focusout:function(t){return e.focusoutAction.apply(null,arguments)}}},[e._v("\n  "+e._s(e.item.text)+"\n")]):n("a",{staticClass:"nav-link external",attrs:{href:e.link,target:e.target,rel:e.rel},on:{focusout:e.focusoutAction}},[e._v("\n  "+e._s(e.item.text)+"\n  "),e.isBlankTarget?n("OutboundLink"):e._e()],1)}),[],!1,null,null,null);t.a=a.exports},354:function(e,t,n){},355:function(e,t,n){var r=n(3),i=n(4),s=n(26),a=i("iterator");e.exports=!r((function(){var e=new URL("b?a=1&b=2&c=3","http://a"),t=e.searchParams,n="";return e.pathname="c%20d",t.forEach((function(e,r){t.delete("b"),n+=r+e})),s&&!e.toJSON||!t.sort||"http://a/c%20d?a=1&c=3"!==e.href||"3"!==t.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!t[a]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==n||"x"!==new URL("http://x",void 0).host}))},356:function(e,t,n){"use strict";n(122);var r=n(1),i=n(0),s=n(14),a=n(10),o=n(2),u=n(355),c=n(18),l=n(207),f=n(43),h=n(206),p=n(35),d=n(200),g=n(5),v=n(11),m=n(44),b=n(61),y=n(7),k=n(8),w=n(13),x=n(29),R=n(46),_=n(124),L=n(92),E=n(4),I=n(388),S=E("iterator"),U=p.set,C=p.getterFor("URLSearchParams"),O=p.getterFor("URLSearchParamsIterator"),P=s("fetch"),q=s("Request"),A=s("Headers"),$=q&&q.prototype,F=A&&A.prototype,j=i.RegExp,N=i.TypeError,B=i.decodeURIComponent,T=i.encodeURIComponent,D=o("".charAt),G=o([].join),H=o([].push),M=o("".replace),z=o([].shift),V=o([].splice),W=o("".split),J=o("".slice),Y=/\+/g,X=Array(4),K=function(e){return X[e-1]||(X[e-1]=j("((?:%[\\da-f]{2}){"+e+"})","gi"))},Q=function(e){try{return B(e)}catch(t){return e}},Z=function(e){var t=M(e,Y," "),n=4;try{return B(t)}catch(e){for(;n;)t=M(t,K(n--),Q);return t}},ee=/[!'()~]|%20/g,te={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},ne=function(e){return te[e]},re=function(e){return M(T(e),ee,ne)},ie=function(e,t){if(t)for(var n,r,i=W(t,"&"),s=0;s<i.length;)(n=i[s++]).length&&(r=W(n,"="),H(e,{key:Z(z(r)),value:Z(G(r,"="))}))},se=function(e){this.entries.length=0,ie(this.entries,e)},ae=function(e,t){if(e<t)throw N("Not enough arguments")},oe=h((function(e,t){U(this,{type:"URLSearchParamsIterator",iterator:_(C(e).entries),kind:t})}),"Iterator",(function(){var e=O(this),t=e.kind,n=e.iterator.next(),r=n.value;return n.done||(n.value="keys"===t?r.key:"values"===t?r.value:[r.key,r.value]),n})),ue=function(){d(this,ce);var e,t,n,r,i,s,o,u,c,l=arguments.length>0?arguments[0]:void 0,f=this,h=[];if(U(f,{type:"URLSearchParams",entries:h,updateURL:function(){},updateSearchParams:se}),void 0!==l)if(k(l))if(e=L(l))for(n=(t=_(l,e)).next;!(r=a(n,t)).done;){if(s=(i=_(y(r.value))).next,(o=a(s,i)).done||(u=a(s,i)).done||!a(s,i).done)throw N("Expected sequence with length 2");H(h,{key:w(o.value),value:w(u.value)})}else for(c in l)v(l,c)&&H(h,{key:c,value:w(l[c])});else ie(h,"string"==typeof l?"?"===D(l,0)?J(l,1):l:w(l))},ce=ue.prototype;if(l(ce,{append:function(e,t){ae(arguments.length,2);var n=C(this);H(n.entries,{key:w(e),value:w(t)}),n.updateURL()},delete:function(e){ae(arguments.length,1);for(var t=C(this),n=t.entries,r=w(e),i=0;i<n.length;)n[i].key===r?V(n,i,1):i++;t.updateURL()},get:function(e){ae(arguments.length,1);for(var t=C(this).entries,n=w(e),r=0;r<t.length;r++)if(t[r].key===n)return t[r].value;return null},getAll:function(e){ae(arguments.length,1);for(var t=C(this).entries,n=w(e),r=[],i=0;i<t.length;i++)t[i].key===n&&H(r,t[i].value);return r},has:function(e){ae(arguments.length,1);for(var t=C(this).entries,n=w(e),r=0;r<t.length;)if(t[r++].key===n)return!0;return!1},set:function(e,t){ae(arguments.length,1);for(var n,r=C(this),i=r.entries,s=!1,a=w(e),o=w(t),u=0;u<i.length;u++)(n=i[u]).key===a&&(s?V(i,u--,1):(s=!0,n.value=o));s||H(i,{key:a,value:o}),r.updateURL()},sort:function(){var e=C(this);I(e.entries,(function(e,t){return e.key>t.key?1:-1})),e.updateURL()},forEach:function(e){for(var t,n=C(this).entries,r=m(e,arguments.length>1?arguments[1]:void 0),i=0;i<n.length;)r((t=n[i++]).value,t.key,this)},keys:function(){return new oe(this,"keys")},values:function(){return new oe(this,"values")},entries:function(){return new oe(this,"entries")}},{enumerable:!0}),c(ce,S,ce.entries,{name:"entries"}),c(ce,"toString",(function(){for(var e,t=C(this).entries,n=[],r=0;r<t.length;)e=t[r++],H(n,re(e.key)+"="+re(e.value));return G(n,"&")}),{enumerable:!0}),f(ue,"URLSearchParams"),r({global:!0,forced:!u},{URLSearchParams:ue}),!u&&g(A)){var le=o(F.has),fe=o(F.set),he=function(e){if(k(e)){var t,n=e.body;if("URLSearchParams"===b(n))return t=e.headers?new A(e.headers):new A,le(t,"content-type")||fe(t,"content-type","application/x-www-form-urlencoded;charset=UTF-8"),x(e,{body:R(0,w(n)),headers:R(0,t)})}return e};if(g(P)&&r({global:!0,enumerable:!0,forced:!0},{fetch:function(e){return P(e,arguments.length>1?he(arguments[1]):{})}}),g(q)){var pe=function(e){return d(this,$),new q(e,arguments.length>1?he(arguments[1]):{})};$.constructor=pe,pe.prototype=$,r({global:!0,forced:!0},{Request:pe})}}e.exports={URLSearchParams:ue,getState:C}},358:function(e,t,n){"use strict";var r=n(1),i=n(203).trim;r({target:"String",proto:!0,forced:n(390)("trim")},{trim:function(){return i(this)}})},359:function(e,t,n){var r=n(9),i=n(0),s=n(2),a=n(119),o=n(360),u=n(30),c=n(12).f,l=n(60).f,f=n(40),h=n(127),p=n(13),d=n(201),g=n(120),v=n(18),m=n(3),b=n(11),y=n(35).enforce,k=n(208),w=n(4),x=n(202),R=n(211),_=w("match"),L=i.RegExp,E=L.prototype,I=i.SyntaxError,S=s(d),U=s(E.exec),C=s("".charAt),O=s("".replace),P=s("".indexOf),q=s("".slice),A=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,$=/a/g,F=/a/g,j=new L($)!==$,N=g.UNSUPPORTED_Y,B=r&&(!j||N||x||R||m((function(){return F[_]=!1,L($)!=$||L(F)==F||"/a/i"!=L($,"i")})));if(a("RegExp",B)){for(var T=function(e,t){var n,r,i,s,a,c,l=f(E,this),d=h(e),g=void 0===t,v=[],m=e;if(!l&&d&&g&&e.constructor===T)return e;if((d||f(E,e))&&(e=e.source,g&&(t="flags"in m?m.flags:S(m))),e=void 0===e?"":p(e),t=void 0===t?"":p(t),m=e,x&&"dotAll"in $&&(r=!!t&&P(t,"s")>-1)&&(t=O(t,/s/g,"")),n=t,N&&"sticky"in $&&(i=!!t&&P(t,"y")>-1)&&(t=O(t,/y/g,"")),R&&(e=(s=function(e){for(var t,n=e.length,r=0,i="",s=[],a={},o=!1,u=!1,c=0,l="";r<=n;r++){if("\\"===(t=C(e,r)))t+=C(e,++r);else if("]"===t)o=!1;else if(!o)switch(!0){case"["===t:o=!0;break;case"("===t:U(A,q(e,r+1))&&(r+=2,u=!0),i+=t,c++;continue;case">"===t&&u:if(""===l||b(a,l))throw new I("Invalid capture group name");a[l]=!0,s[s.length]=[l,c],u=!1,l="";continue}u?l+=t:i+=t}return[i,s]}(e))[0],v=s[1]),a=o(L(e,t),l?this:E,T),(r||i||v.length)&&(c=y(a),r&&(c.dotAll=!0,c.raw=T(function(e){for(var t,n=e.length,r=0,i="",s=!1;r<=n;r++)"\\"!==(t=C(e,r))?s||"."!==t?("["===t?s=!0:"]"===t&&(s=!1),i+=t):i+="[\\s\\S]":i+=t+C(e,++r);return i}(e),n)),i&&(c.sticky=!0),v.length&&(c.groups=v)),e!==m)try{u(a,"source",""===m?"(?:)":m)}catch(e){}return a},D=function(e){e in T||c(T,e,{configurable:!0,get:function(){return L[e]},set:function(t){L[e]=t}})},G=l(L),H=0;G.length>H;)D(G[H++]);E.constructor=T,T.prototype=E,v(i,"RegExp",T)}k("RegExp")},360:function(e,t,n){var r=n(5),i=n(8),s=n(91);e.exports=function(e,t,n){var a,o;return s&&r(a=t.constructor)&&a!==n&&i(o=a.prototype)&&o!==n.prototype&&s(e,o),e}},361:function(e,t,n){var r=n(0),i=n(9),s=n(202),a=n(25),o=n(12).f,u=n(35).get,c=RegExp.prototype,l=r.TypeError;i&&s&&o(c,"dotAll",{configurable:!0,get:function(){if(this!==c){if("RegExp"===a(this))return!!u(this).dotAll;throw l("Incompatible receiver, RegExp required")}}})},362:function(e,t,n){var r=n(0),i=n(9),s=n(120).UNSUPPORTED_Y,a=n(25),o=n(12).f,u=n(35).get,c=RegExp.prototype,l=r.TypeError;i&&s&&o(c,"sticky",{configurable:!0,get:function(){if(this!==c){if("RegExp"===a(this))return!!u(this).sticky;throw l("Incompatible receiver, RegExp required")}}})},363:function(e,t,n){"use strict";var r=n(2),i=n(88).PROPER,s=n(18),a=n(7),o=n(40),u=n(13),c=n(3),l=n(201),f=RegExp.prototype,h=f.toString,p=r(l),d=c((function(){return"/a/b"!=h.call({source:"a",flags:"b"})})),g=i&&"toString"!=h.name;(d||g)&&s(RegExp.prototype,"toString",(function(){var e=a(this),t=u(e.source),n=e.flags;return"/"+t+"/"+u(void 0===n&&o(f,e)&&!("flags"in f)?p(e):n)}),{unsafe:!0})},364:function(e,t,n){},365:function(e,t,n){},371:function(e,t,n){},372:function(e,t,n){},373:function(e,t,n){},381:function(e,t,n){"use strict";n.r(t);n(117),n(6);var r=n(349),i={name:"SidebarGroup",components:{DropdownTransition:n(353).a},props:["item","open","collapsable","depth"],beforeCreate:function(){this.$options.components.SidebarLinks=n(381).default},methods:{isActive:r.d}},s=(n(399),n(22)),a=Object(s.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"sidebar-group",class:[{collapsable:e.collapsable,"is-sub-group":0!==e.depth},"depth-"+e.depth]},[e.item.path?n("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:e.open,active:e.isActive(e.$route,e.item.path)},attrs:{to:e.item.path},nativeOn:{click:function(t){return e.$emit("toggle")}}},[n("span",[e._v(e._s(e.item.title))]),e._v(" "),e.collapsable?n("span",{staticClass:"arrow",class:e.open?"down":"right"}):e._e()]):n("p",{staticClass:"sidebar-heading",class:{open:e.open},on:{click:function(t){return e.$emit("toggle")}}},[n("span",[e._v(e._s(e.item.title))]),e._v(" "),e.collapsable?n("span",{staticClass:"arrow",class:e.open?"down":"right"}):e._e()]),e._v(" "),n("DropdownTransition",[e.open||!e.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:e.item.children,"sidebar-depth":e.item.sidebarDepth,"initial-open-group-index":e.item.initialOpenGroupIndex,depth:e.depth+1}}):e._e()],1)],1)}),[],!1,null,null,null).exports;n(204),n(23),n(116),n(86);function o(e,t,n,r,i){var s={props:{to:t,activeClass:"",exactActiveClass:""},class:{active:r,"sidebar-link":!0}};return i>2&&(s.style={"padding-left":i+"rem"}),e("RouterLink",s,n)}function u(e,t,n,i,s){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!t||a>s?null:e("ul",{class:"sidebar-sub-headers"},t.map((function(t){var c=Object(r.d)(i,n+"#"+t.slug);return e("li",{class:"sidebar-sub-header"},[o(e,n+"#"+t.slug,t.title,c,t.level-1),u(e,t.children,n,i,s,a+1)])})))}var c={functional:!0,props:["item","sidebarDepth"],render:function(e,t){var n=t.parent,i=n.$page,s=(n.$site,n.$route),a=n.$themeConfig,c=n.$themeLocaleConfig,l=t.props,f=l.item,h=l.sidebarDepth,p=Object(r.d)(s,f.path),d="auto"===f.type?p||f.children.some((function(e){return Object(r.d)(s,f.basePath+"#"+e.slug)})):p,g="external"===f.type?function(e,t,n){return e("a",{attrs:{href:t,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,e("OutboundLink")])}(e,f.path,f.title||f.path):o(e,f.path,f.title||f.path,d),v=[i.frontmatter.sidebarDepth,h,c.sidebarDepth,a.sidebarDepth,1].find((function(e){return void 0!==e})),m=c.displayAllHeaders||a.displayAllHeaders;return"auto"===f.type?[g,u(e,f.children,f.basePath,s,v)]:(d||m)&&f.headers&&!r.c.test(f.path)?[g,u(e,Object(r.b)(f.headers),f.path,s,v)]:g}};n(400);function l(e,t){if("group"===t.type){var n=t.path&&Object(r.d)(e,t.path),i=t.children.some((function(t){return"group"===t.type?l(e,t):"page"===t.type&&Object(r.d)(e,t.path)}));return n||i}return!1}var f={name:"SidebarLinks",components:{SidebarGroup:a,SidebarLink:Object(s.a)(c,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth","initialOpenGroupIndex"],data:function(){return{openGroupIndex:this.initialOpenGroupIndex||0}},watch:{$route:function(){this.refreshIndex()}},created:function(){this.refreshIndex()},methods:{refreshIndex:function(){var e=function(e,t){for(var n=0;n<t.length;n++){var r=t[n];if(l(e,r))return n}return-1}(this.$route,this.items);e>-1&&(this.openGroupIndex=e)},toggleGroup:function(e){this.openGroupIndex=e===this.openGroupIndex?-1:e},isActive:function(e){return Object(r.d)(this.$route,e.regularPath)}}},h=Object(s.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.items.length?n("ul",{staticClass:"sidebar-links"},e._l(e.items,(function(t,r){return n("li",{key:r},["group"===t.type?n("SidebarGroup",{attrs:{item:t,open:r===e.openGroupIndex,collapsable:t.collapsable||t.collapsible,depth:e.depth},on:{toggle:function(t){return e.toggleGroup(r)}}}):n("SidebarLink",{attrs:{"sidebar-depth":e.sidebarDepth,item:t}})],1)})),0):e._e()}),[],!1,null,null,null);t.default=h.exports},382:function(e,t,n){"use strict";var r=n(1),i=n(383);r({target:"String",proto:!0,forced:n(384)("link")},{link:function(e){return i(this,"a","href",e)}})},383:function(e,t,n){var r=n(2),i=n(24),s=n(13),a=/"/g,o=r("".replace);e.exports=function(e,t,n,r){var u=s(i(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+o(s(r),a,"&quot;")+'"'),c+">"+u+"</"+t+">"}},384:function(e,t,n){var r=n(3);e.exports=function(e){return r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},385:function(e,t,n){"use strict";n(354)},386:function(e,t,n){"use strict";n(17);var r,i=n(1),s=n(9),a=n(355),o=n(0),u=n(44),c=n(10),l=n(2),f=n(123),h=n(18),p=n(200),d=n(11),g=n(209),v=n(210),m=n(28),b=n(125).codeAt,y=n(387),k=n(13),w=n(43),x=n(356),R=n(35),_=R.set,L=R.getterFor("URL"),E=x.URLSearchParams,I=x.getState,S=o.URL,U=o.TypeError,C=o.parseInt,O=Math.floor,P=Math.pow,q=l("".charAt),A=l(/./.exec),$=l([].join),F=l(1..toString),j=l([].pop),N=l([].push),B=l("".replace),T=l([].shift),D=l("".split),G=l("".slice),H=l("".toLowerCase),M=l([].unshift),z=/[a-z]/i,V=/[\d+-.a-z]/i,W=/\d/,J=/^0x/i,Y=/^[0-7]+$/,X=/^\d+$/,K=/^[\da-f]+$/i,Q=/[\0\t\n\r #%/:<>?@[\\\]^|]/,Z=/[\0\t\n\r #/:<>?@[\\\]^|]/,ee=/^[\u0000-\u0020]+|[\u0000-\u0020]+$/g,te=/[\t\n\r]/g,ne=function(e,t){var n,r,i;if("["==q(t,0)){if("]"!=q(t,t.length-1))return"Invalid host";if(!(n=ie(G(t,1,-1))))return"Invalid host";e.host=n}else if(he(e)){if(t=y(t),A(Q,t))return"Invalid host";if(null===(n=re(t)))return"Invalid host";e.host=n}else{if(A(Z,t))return"Invalid host";for(n="",r=v(t),i=0;i<r.length;i++)n+=le(r[i],ae);e.host=n}},re=function(e){var t,n,r,i,s,a,o,u=D(e,".");if(u.length&&""==u[u.length-1]&&u.length--,(t=u.length)>4)return e;for(n=[],r=0;r<t;r++){if(""==(i=u[r]))return e;if(s=10,i.length>1&&"0"==q(i,0)&&(s=A(J,i)?16:8,i=G(i,8==s?1:2)),""===i)a=0;else{if(!A(10==s?X:8==s?Y:K,i))return e;a=C(i,s)}N(n,a)}for(r=0;r<t;r++)if(a=n[r],r==t-1){if(a>=P(256,5-t))return null}else if(a>255)return null;for(o=j(n),r=0;r<n.length;r++)o+=n[r]*P(256,3-r);return o},ie=function(e){var t,n,r,i,s,a,o,u=[0,0,0,0,0,0,0,0],c=0,l=null,f=0,h=function(){return q(e,f)};if(":"==h()){if(":"!=q(e,1))return;f+=2,l=++c}for(;h();){if(8==c)return;if(":"!=h()){for(t=n=0;n<4&&A(K,h());)t=16*t+C(h(),16),f++,n++;if("."==h()){if(0==n)return;if(f-=n,c>6)return;for(r=0;h();){if(i=null,r>0){if(!("."==h()&&r<4))return;f++}if(!A(W,h()))return;for(;A(W,h());){if(s=C(h(),10),null===i)i=s;else{if(0==i)return;i=10*i+s}if(i>255)return;f++}u[c]=256*u[c]+i,2!=++r&&4!=r||c++}if(4!=r)return;break}if(":"==h()){if(f++,!h())return}else if(h())return;u[c++]=t}else{if(null!==l)return;f++,l=++c}}if(null!==l)for(a=c-l,c=7;0!=c&&a>0;)o=u[c],u[c--]=u[l+a-1],u[l+--a]=o;else if(8!=c)return;return u},se=function(e){var t,n,r,i;if("number"==typeof e){for(t=[],n=0;n<4;n++)M(t,e%256),e=O(e/256);return $(t,".")}if("object"==typeof e){for(t="",r=function(e){for(var t=null,n=1,r=null,i=0,s=0;s<8;s++)0!==e[s]?(i>n&&(t=r,n=i),r=null,i=0):(null===r&&(r=s),++i);return i>n&&(t=r,n=i),t}(e),n=0;n<8;n++)i&&0===e[n]||(i&&(i=!1),r===n?(t+=n?":":"::",i=!0):(t+=F(e[n],16),n<7&&(t+=":")));return"["+t+"]"}return e},ae={},oe=g({},ae,{" ":1,'"':1,"<":1,">":1,"`":1}),ue=g({},oe,{"#":1,"?":1,"{":1,"}":1}),ce=g({},ue,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),le=function(e,t){var n=b(e,0);return n>32&&n<127&&!d(t,e)?e:encodeURIComponent(e)},fe={ftp:21,file:null,http:80,https:443,ws:80,wss:443},he=function(e){return d(fe,e.scheme)},pe=function(e){return""!=e.username||""!=e.password},de=function(e){return!e.host||e.cannotBeABaseURL||"file"==e.scheme},ge=function(e,t){var n;return 2==e.length&&A(z,q(e,0))&&(":"==(n=q(e,1))||!t&&"|"==n)},ve=function(e){var t;return e.length>1&&ge(G(e,0,2))&&(2==e.length||"/"===(t=q(e,2))||"\\"===t||"?"===t||"#"===t)},me=function(e){var t=e.path,n=t.length;!n||"file"==e.scheme&&1==n&&ge(t[0],!0)||t.length--},be=function(e){return"."===e||"%2e"===H(e)},ye={},ke={},we={},xe={},Re={},_e={},Le={},Ee={},Ie={},Se={},Ue={},Ce={},Oe={},Pe={},qe={},Ae={},$e={},Fe={},je={},Ne={},Be={},Te=function(e,t,n,i){var s,a,o,u,c,l=n||ye,f=0,h="",p=!1,g=!1,b=!1;for(n||(e.scheme="",e.username="",e.password="",e.host=null,e.port=null,e.path=[],e.query=null,e.fragment=null,e.cannotBeABaseURL=!1,t=B(t,ee,"")),t=B(t,te,""),s=v(t);f<=s.length;){switch(a=s[f],l){case ye:if(!a||!A(z,a)){if(n)return"Invalid scheme";l=we;continue}h+=H(a),l=ke;break;case ke:if(a&&(A(V,a)||"+"==a||"-"==a||"."==a))h+=H(a);else{if(":"!=a){if(n)return"Invalid scheme";h="",l=we,f=0;continue}if(n&&(he(e)!=d(fe,h)||"file"==h&&(pe(e)||null!==e.port)||"file"==e.scheme&&!e.host))return;if(e.scheme=h,n)return void(he(e)&&fe[e.scheme]==e.port&&(e.port=null));h="","file"==e.scheme?l=Pe:he(e)&&i&&i.scheme==e.scheme?l=xe:he(e)?l=Ee:"/"==s[f+1]?(l=Re,f++):(e.cannotBeABaseURL=!0,N(e.path,""),l=je)}break;case we:if(!i||i.cannotBeABaseURL&&"#"!=a)return"Invalid scheme";if(i.cannotBeABaseURL&&"#"==a){e.scheme=i.scheme,e.path=m(i.path),e.query=i.query,e.fragment="",e.cannotBeABaseURL=!0,l=Be;break}l="file"==i.scheme?Pe:_e;continue;case xe:if("/"!=a||"/"!=s[f+1]){l=_e;continue}l=Ie,f++;break;case Re:if("/"==a){l=Se;break}l=Fe;continue;case _e:if(e.scheme=i.scheme,a==r)e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,e.path=m(i.path),e.query=i.query;else if("/"==a||"\\"==a&&he(e))l=Le;else if("?"==a)e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,e.path=m(i.path),e.query="",l=Ne;else{if("#"!=a){e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,e.path=m(i.path),e.path.length--,l=Fe;continue}e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,e.path=m(i.path),e.query=i.query,e.fragment="",l=Be}break;case Le:if(!he(e)||"/"!=a&&"\\"!=a){if("/"!=a){e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,l=Fe;continue}l=Se}else l=Ie;break;case Ee:if(l=Ie,"/"!=a||"/"!=q(h,f+1))continue;f++;break;case Ie:if("/"!=a&&"\\"!=a){l=Se;continue}break;case Se:if("@"==a){p&&(h="%40"+h),p=!0,o=v(h);for(var y=0;y<o.length;y++){var k=o[y];if(":"!=k||b){var w=le(k,ce);b?e.password+=w:e.username+=w}else b=!0}h=""}else if(a==r||"/"==a||"?"==a||"#"==a||"\\"==a&&he(e)){if(p&&""==h)return"Invalid authority";f-=v(h).length+1,h="",l=Ue}else h+=a;break;case Ue:case Ce:if(n&&"file"==e.scheme){l=Ae;continue}if(":"!=a||g){if(a==r||"/"==a||"?"==a||"#"==a||"\\"==a&&he(e)){if(he(e)&&""==h)return"Invalid host";if(n&&""==h&&(pe(e)||null!==e.port))return;if(u=ne(e,h))return u;if(h="",l=$e,n)return;continue}"["==a?g=!0:"]"==a&&(g=!1),h+=a}else{if(""==h)return"Invalid host";if(u=ne(e,h))return u;if(h="",l=Oe,n==Ce)return}break;case Oe:if(!A(W,a)){if(a==r||"/"==a||"?"==a||"#"==a||"\\"==a&&he(e)||n){if(""!=h){var x=C(h,10);if(x>65535)return"Invalid port";e.port=he(e)&&x===fe[e.scheme]?null:x,h=""}if(n)return;l=$e;continue}return"Invalid port"}h+=a;break;case Pe:if(e.scheme="file","/"==a||"\\"==a)l=qe;else{if(!i||"file"!=i.scheme){l=Fe;continue}if(a==r)e.host=i.host,e.path=m(i.path),e.query=i.query;else if("?"==a)e.host=i.host,e.path=m(i.path),e.query="",l=Ne;else{if("#"!=a){ve($(m(s,f),""))||(e.host=i.host,e.path=m(i.path),me(e)),l=Fe;continue}e.host=i.host,e.path=m(i.path),e.query=i.query,e.fragment="",l=Be}}break;case qe:if("/"==a||"\\"==a){l=Ae;break}i&&"file"==i.scheme&&!ve($(m(s,f),""))&&(ge(i.path[0],!0)?N(e.path,i.path[0]):e.host=i.host),l=Fe;continue;case Ae:if(a==r||"/"==a||"\\"==a||"?"==a||"#"==a){if(!n&&ge(h))l=Fe;else if(""==h){if(e.host="",n)return;l=$e}else{if(u=ne(e,h))return u;if("localhost"==e.host&&(e.host=""),n)return;h="",l=$e}continue}h+=a;break;case $e:if(he(e)){if(l=Fe,"/"!=a&&"\\"!=a)continue}else if(n||"?"!=a)if(n||"#"!=a){if(a!=r&&(l=Fe,"/"!=a))continue}else e.fragment="",l=Be;else e.query="",l=Ne;break;case Fe:if(a==r||"/"==a||"\\"==a&&he(e)||!n&&("?"==a||"#"==a)){if(".."===(c=H(c=h))||"%2e."===c||".%2e"===c||"%2e%2e"===c?(me(e),"/"==a||"\\"==a&&he(e)||N(e.path,"")):be(h)?"/"==a||"\\"==a&&he(e)||N(e.path,""):("file"==e.scheme&&!e.path.length&&ge(h)&&(e.host&&(e.host=""),h=q(h,0)+":"),N(e.path,h)),h="","file"==e.scheme&&(a==r||"?"==a||"#"==a))for(;e.path.length>1&&""===e.path[0];)T(e.path);"?"==a?(e.query="",l=Ne):"#"==a&&(e.fragment="",l=Be)}else h+=le(a,ue);break;case je:"?"==a?(e.query="",l=Ne):"#"==a?(e.fragment="",l=Be):a!=r&&(e.path[0]+=le(a,ae));break;case Ne:n||"#"!=a?a!=r&&("'"==a&&he(e)?e.query+="%27":e.query+="#"==a?"%23":le(a,ae)):(e.fragment="",l=Be);break;case Be:a!=r&&(e.fragment+=le(a,oe))}f++}},De=function(e){var t,n,r=p(this,Ge),i=arguments.length>1?arguments[1]:void 0,a=k(e),o=_(r,{type:"URL"});if(void 0!==i)try{t=L(i)}catch(e){if(n=Te(t={},k(i)))throw U(n)}if(n=Te(o,a,null,t))throw U(n);var u=o.searchParams=new E,l=I(u);l.updateSearchParams(o.query),l.updateURL=function(){o.query=k(u)||null},s||(r.href=c(He,r),r.origin=c(Me,r),r.protocol=c(ze,r),r.username=c(Ve,r),r.password=c(We,r),r.host=c(Je,r),r.hostname=c(Ye,r),r.port=c(Xe,r),r.pathname=c(Ke,r),r.search=c(Qe,r),r.searchParams=c(Ze,r),r.hash=c(et,r))},Ge=De.prototype,He=function(){var e=L(this),t=e.scheme,n=e.username,r=e.password,i=e.host,s=e.port,a=e.path,o=e.query,u=e.fragment,c=t+":";return null!==i?(c+="//",pe(e)&&(c+=n+(r?":"+r:"")+"@"),c+=se(i),null!==s&&(c+=":"+s)):"file"==t&&(c+="//"),c+=e.cannotBeABaseURL?a[0]:a.length?"/"+$(a,"/"):"",null!==o&&(c+="?"+o),null!==u&&(c+="#"+u),c},Me=function(){var e=L(this),t=e.scheme,n=e.port;if("blob"==t)try{return new De(t.path[0]).origin}catch(e){return"null"}return"file"!=t&&he(e)?t+"://"+se(e.host)+(null!==n?":"+n:""):"null"},ze=function(){return L(this).scheme+":"},Ve=function(){return L(this).username},We=function(){return L(this).password},Je=function(){var e=L(this),t=e.host,n=e.port;return null===t?"":null===n?se(t):se(t)+":"+n},Ye=function(){var e=L(this).host;return null===e?"":se(e)},Xe=function(){var e=L(this).port;return null===e?"":k(e)},Ke=function(){var e=L(this),t=e.path;return e.cannotBeABaseURL?t[0]:t.length?"/"+$(t,"/"):""},Qe=function(){var e=L(this).query;return e?"?"+e:""},Ze=function(){return L(this).searchParams},et=function(){var e=L(this).fragment;return e?"#"+e:""},tt=function(e,t){return{get:e,set:t,configurable:!0,enumerable:!0}};if(s&&f(Ge,{href:tt(He,(function(e){var t=L(this),n=k(e),r=Te(t,n);if(r)throw U(r);I(t.searchParams).updateSearchParams(t.query)})),origin:tt(Me),protocol:tt(ze,(function(e){var t=L(this);Te(t,k(e)+":",ye)})),username:tt(Ve,(function(e){var t=L(this),n=v(k(e));if(!de(t)){t.username="";for(var r=0;r<n.length;r++)t.username+=le(n[r],ce)}})),password:tt(We,(function(e){var t=L(this),n=v(k(e));if(!de(t)){t.password="";for(var r=0;r<n.length;r++)t.password+=le(n[r],ce)}})),host:tt(Je,(function(e){var t=L(this);t.cannotBeABaseURL||Te(t,k(e),Ue)})),hostname:tt(Ye,(function(e){var t=L(this);t.cannotBeABaseURL||Te(t,k(e),Ce)})),port:tt(Xe,(function(e){var t=L(this);de(t)||(""==(e=k(e))?t.port=null:Te(t,e,Oe))})),pathname:tt(Ke,(function(e){var t=L(this);t.cannotBeABaseURL||(t.path=[],Te(t,k(e),$e))})),search:tt(Qe,(function(e){var t=L(this);""==(e=k(e))?t.query=null:("?"==q(e,0)&&(e=G(e,1)),t.query="",Te(t,e,Ne)),I(t.searchParams).updateSearchParams(t.query)})),searchParams:tt(Ze),hash:tt(et,(function(e){var t=L(this);""!=(e=k(e))?("#"==q(e,0)&&(e=G(e,1)),t.fragment="",Te(t,e,Be)):t.fragment=null}))}),h(Ge,"toJSON",(function(){return c(He,this)}),{enumerable:!0}),h(Ge,"toString",(function(){return c(He,this)}),{enumerable:!0}),S){var nt=S.createObjectURL,rt=S.revokeObjectURL;nt&&h(De,"createObjectURL",u(nt,S)),rt&&h(De,"revokeObjectURL",u(rt,S))}w(De,"URL"),i({global:!0,forced:!a,sham:!s},{URL:De})},387:function(e,t,n){"use strict";var r=n(0),i=n(2),s=/[^\0-\u007E]/,a=/[.\u3002\uFF0E\uFF61]/g,o="Overflow: input needs wider integers to process",u=r.RangeError,c=i(a.exec),l=Math.floor,f=String.fromCharCode,h=i("".charCodeAt),p=i([].join),d=i([].push),g=i("".replace),v=i("".split),m=i("".toLowerCase),b=function(e){return e+22+75*(e<26)},y=function(e,t,n){var r=0;for(e=n?l(e/700):e>>1,e+=l(e/t);e>455;r+=36)e=l(e/35);return l(r+36*e/(e+38))},k=function(e){var t,n,r=[],i=(e=function(e){for(var t=[],n=0,r=e.length;n<r;){var i=h(e,n++);if(i>=55296&&i<=56319&&n<r){var s=h(e,n++);56320==(64512&s)?d(t,((1023&i)<<10)+(1023&s)+65536):(d(t,i),n--)}else d(t,i)}return t}(e)).length,s=128,a=0,c=72;for(t=0;t<e.length;t++)(n=e[t])<128&&d(r,f(n));var g=r.length,v=g;for(g&&d(r,"-");v<i;){var m=2147483647;for(t=0;t<e.length;t++)(n=e[t])>=s&&n<m&&(m=n);var k=v+1;if(m-s>l((2147483647-a)/k))throw u(o);for(a+=(m-s)*k,s=m,t=0;t<e.length;t++){if((n=e[t])<s&&++a>2147483647)throw u(o);if(n==s){for(var w=a,x=36;;x+=36){var R=x<=c?1:x>=c+26?26:x-c;if(w<R)break;var _=w-R,L=36-R;d(r,f(b(R+_%L))),w=l(_/L)}d(r,f(b(w))),c=y(a,k,v==g),a=0,++v}}++a,++s}return p(r,"")};e.exports=function(e){var t,n,r=[],i=v(g(m(e),a,"."),".");for(t=0;t<i.length;t++)n=i[t],d(r,c(s,n)?"xn--"+k(n):n);return p(r,".")}},388:function(e,t,n){var r=n(28),i=Math.floor,s=function(e,t){var n=e.length,u=i(n/2);return n<8?a(e,t):o(e,s(r(e,0,u),t),s(r(e,u),t),t)},a=function(e,t){for(var n,r,i=e.length,s=1;s<i;){for(r=s,n=e[s];r&&t(e[r-1],n)>0;)e[r]=e[--r];r!==s++&&(e[r]=n)}return e},o=function(e,t,n,r){for(var i=t.length,s=n.length,a=0,o=0;a<i||o<s;)e[a+o]=a<i&&o<s?r(t[a],n[o])<=0?t[a++]:n[o++]:a<i?t[a++]:n[o++];return e};e.exports=s},390:function(e,t,n){var r=n(88).PROPER,i=n(3),s=n(132);e.exports=function(e){return i((function(){return!!s[e]()||"​᠎"!=="​᠎"[e]()||r&&s[e].name!==e}))}},391:function(e,t,n){"use strict";var r,i=n(1),s=n(2),a=n(27).f,o=n(59),u=n(13),c=n(126),l=n(24),f=n(128),h=n(26),p=s("".endsWith),d=s("".slice),g=Math.min,v=f("endsWith");i({target:"String",proto:!0,forced:!!(h||v||(r=a(String.prototype,"endsWith"),!r||r.writable))&&!v},{endsWith:function(e){var t=u(l(this));c(e);var n=arguments.length>1?arguments[1]:void 0,r=t.length,i=void 0===n?r:g(o(n),r),s=u(e);return p?p(t,s,i):d(t,i-s.length,i)===s}})},392:function(e,t,n){"use strict";n(364)},393:function(e,t,n){"use strict";n(365)},399:function(e,t,n){"use strict";n(371)},400:function(e,t,n){"use strict";n(372)},401:function(e,t,n){"use strict";n(373)},403:function(e,t,n){
/*!
* screenfull
* v5.1.0 - 2020-12-24
* (c) Sindre Sorhus; MIT License
*/
!function(){"use strict";var t="undefined"!=typeof window&&void 0!==window.document?window.document:{},n=e.exports,r=function(){for(var e,n=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],r=0,i=n.length,s={};r<i;r++)if((e=n[r])&&e[1]in t){for(r=0;r<e.length;r++)s[n[0][r]]=e[r];return s}return!1}(),i={change:r.fullscreenchange,error:r.fullscreenerror},s={request:function(e,n){return new Promise(function(i,s){var a=function(){this.off("change",a),i()}.bind(this);this.on("change",a);var o=(e=e||t.documentElement)[r.requestFullscreen](n);o instanceof Promise&&o.then(a).catch(s)}.bind(this))},exit:function(){return new Promise(function(e,n){if(this.isFullscreen){var i=function(){this.off("change",i),e()}.bind(this);this.on("change",i);var s=t[r.exitFullscreen]();s instanceof Promise&&s.then(i).catch(n)}else e()}.bind(this))},toggle:function(e,t){return this.isFullscreen?this.exit():this.request(e,t)},onchange:function(e){this.on("change",e)},onerror:function(e){this.on("error",e)},on:function(e,n){var r=i[e];r&&t.addEventListener(r,n,!1)},off:function(e,n){var r=i[e];r&&t.removeEventListener(r,n,!1)},raw:r};r?(Object.defineProperties(s,{isFullscreen:{get:function(){return Boolean(t[r.fullscreenElement])}},element:{enumerable:!0,get:function(){return t[r.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(t[r.fullscreenEnabled])}}}),n?e.exports=s:window.screenfull=s):n?e.exports={isEnabled:!1}:window.screenfull={isEnabled:!1}}()},405:function(e,t,n){"use strict";var r=n(9),i=n(0),s=n(2),a=n(119),o=n(18),u=n(11),c=n(360),l=n(40),f=n(90),h=n(205),p=n(3),d=n(60).f,g=n(27).f,v=n(12).f,m=n(406),b=n(203).trim,y=i.Number,k=y.prototype,w=i.TypeError,x=s("".slice),R=s("".charCodeAt),_=function(e){var t=h(e,"number");return"bigint"==typeof t?t:L(t)},L=function(e){var t,n,r,i,s,a,o,u,c=h(e,"number");if(f(c))throw w("Cannot convert a Symbol value to a number");if("string"==typeof c&&c.length>2)if(c=b(c),43===(t=R(c,0))||45===t){if(88===(n=R(c,2))||120===n)return NaN}else if(48===t){switch(R(c,1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+c}for(a=(s=x(c,2)).length,o=0;o<a;o++)if((u=R(s,o))<48||u>i)return NaN;return parseInt(s,r)}return+c};if(a("Number",!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var E,I=function(e){var t=arguments.length<1?0:y(_(e)),n=this;return l(k,n)&&p((function(){m(n)}))?c(Object(t),n,I):t},S=r?d(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),U=0;S.length>U;U++)u(y,E=S[U])&&!u(I,E)&&v(I,E,g(y,E));I.prototype=k,k.constructor=I,o(i,"Number",I)}},406:function(e,t,n){var r=n(2);e.exports=r(1..valueOf)},412:function(e,t,n){"use strict";n(358),n(198),n(118),n(36),n(6),n(23),n(350),n(212),n(213),n(199),n(87),n(359),n(361),n(362),n(363),n(86),n(197),n(116),n(391),n(117);var r=n(214),i=n.n(r),s=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=i()(t,"title","");return i()(t,"frontmatter.tags")&&(r+=" ".concat(t.frontmatter.tags.join(" "))),n&&(r+=" ".concat(n)),a(e,r)},a=function(e,t){var n=function(e){return e.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")},r=new RegExp("[^\0-]"),i=e.split(/\s+/g).map((function(e){return e.trim()})).filter((function(e){return!!e}));if(r.test(e))return i.some((function(e){return t.toLowerCase().indexOf(e)>-1}));var s=e.endsWith(" ");return new RegExp(i.map((function(e,t){return i.length!==t+1||s?"(?=.*\\b".concat(n(e),"\\b)"):"(?=.*\\b".concat(n(e),")")})).join("")+".+","gi").test(t)},o={name:"SearchBox",data:function(){return{query:"",focused:!1,focusIndex:0,placeholder:void 0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var e=this.query.trim().toLowerCase();if(e){for(var t=this.$site.pages,n=this.$site.themeConfig.searchMaxSuggestions||5,r=this.$localePath,i=[],a=0;a<t.length&&!(i.length>=n);a++){var o=t[a];if(this.getPageLocalePath(o)===r&&this.isSearchable(o))if(s(e,o))i.push(o);else if(o.headers)for(var u=0;u<o.headers.length&&!(i.length>=n);u++){var c=o.headers[u];c.title&&s(e,o,c.title)&&i.push(Object.assign({},o,{path:o.path+"#"+c.slug,header:c}))}}return i}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted:function(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy:function(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath:function(e){for(var t in this.$site.locales||{})if("/"!==t&&0===e.path.indexOf(t))return t;return"/"},isSearchable:function(e){var t=null;return null===t||(t=Array.isArray(t)?t:new Array(t)).filter((function(t){return e.path.match(t)})).length>0},onHotkey:function(e){e.srcElement===document.body&&["s","/"].includes(e.key)&&(this.$refs.input.focus(),e.preventDefault())},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(e){this.showSuggestions&&(this.$router.push(this.suggestions[e].path),this.query="",this.focusIndex=0)},focus:function(e){this.focusIndex=e},unfocus:function(){this.focusIndex=-1}}},u=(n(392),n(22)),c=Object(u.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search-box"},[n("input",{ref:"input",class:{focused:e.focused},attrs:{"aria-label":"Search",placeholder:e.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:e.query},on:{input:function(t){e.query=t.target.value},focus:function(t){e.focused=!0},blur:function(t){e.focused=!1},keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.go(e.focusIndex)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.onUp.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.onDown.apply(null,arguments)}]}}),e._v(" "),e.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":e.alignRight},on:{mouseleave:e.unfocus}},e._l(e.suggestions,(function(t,r){return n("li",{key:r,staticClass:"suggestion",class:{focused:r===e.focusIndex},on:{mousedown:function(t){return e.go(r)},mouseenter:function(t){return e.focus(r)}}},[n("a",{attrs:{href:t.path},on:{click:function(e){e.preventDefault()}}},[n("span",{staticClass:"page-title"},[e._v(e._s(t.title||t.path))]),e._v(" "),t.header?n("span",{staticClass:"header"},[e._v("> "+e._s(t.header.title))]):e._e()])])})),0):e._e()])}),[],!1,null,null,null);t.a=c.exports},413:function(e,t,n){"use strict";var r={name:"Home",components:{NavLink:n(352).a},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},i=(n(385),n(22)),s=Object(i.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"home",attrs:{"aria-labelledby":null!==e.data.heroText?"main-title":null}},[n("header",{staticClass:"hero"},[e.data.heroImage?n("img",{attrs:{src:e.$withBase(e.data.heroImage),alt:e.data.heroAlt||"hero"}}):e._e(),e._v(" "),null!==e.data.heroText?n("h1",{attrs:{id:"main-title"}},[e._v("\n      "+e._s(e.data.heroText||e.$title||"Hello")+"\n    ")]):e._e(),e._v(" "),null!==e.data.tagline?n("p",{staticClass:"description"},[e._v("\n      "+e._s(e.data.tagline||e.$description||"Welcome to your VuePress site")+"\n    ")]):e._e(),e._v(" "),e.data.actionText&&e.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:e.actionLink}})],1):e._e()]),e._v(" "),e.data.features&&e.data.features.length?n("div",{staticClass:"features"},e._l(e.data.features,(function(t,r){return n("div",{key:r,staticClass:"feature"},[n("h2",[e._v(e._s(t.title))]),e._v(" "),n("p",[e._v(e._s(t.details))])])})),0):e._e(),e._v(" "),n("Content",{staticClass:"theme-default-content custom"}),e._v(" "),e.data.footer?n("div",{staticClass:"footer"},[e._v("\n    "+e._s(e.data.footer)+"\n  ")]):e._e()],1)}),[],!1,null,null,null);t.a=s.exports},414:function(e,t,n){"use strict";var r=n(381),i=n(351),s={name:"Sidebar",components:{SidebarLinks:r.default,NavLinks:i.a},props:["items"]},a=(n(401),n(22)),o=Object(a.a)(s,(function(){var e=this.$createElement,t=this._self._c||e;return t("aside",{staticClass:"sidebar"},[t("NavLinks"),this._v(" "),this._t("top"),this._v(" "),t("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null);t.a=o.exports},415:function(e,t,n){"use strict";n(393);var r=n(22),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sidebar-button",on:{click:function(t){return e.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null);t.a=i.exports}}]);