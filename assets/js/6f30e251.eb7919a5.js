"use strict";(self.webpackChunknew_blog_of_aki=self.webpackChunknew_blog_of_aki||[]).push([[33],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(n),m=l,d=s["".concat(u,".").concat(m)]||s[m]||g[m]||o;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:l,a[1]=i;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4801:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),l=(n(7294),n(3905));const o={title:"\u65f6\u95f4\u590d\u6742\u5ea6 O(logn) \u7684\u7406\u89e3",date:new Date("2021-12-18T23:23:41.000Z"),tags:["\u590d\u6742\u5ea6\u5206\u6790"],categories:["Data Structures and Algorithms"]},a="\u5206\u6790\u590d\u6742\u5ea6\u65b9\u6cd5",i={unversionedId:"DataStructuresAndAlgorithms/O",id:"DataStructuresAndAlgorithms/O",title:"\u65f6\u95f4\u590d\u6742\u5ea6 O(logn) \u7684\u7406\u89e3",description:"1. \u53ea\u9700\u8981\u5173\u6ce8\u5faa\u73af\u6b21\u6570\u6700\u591a\u7684\u4e00\u6bb5\u4ee3\u7801",source:"@site/docs/DataStructuresAndAlgorithms/O.md",sourceDirName:"DataStructuresAndAlgorithms",slug:"/DataStructuresAndAlgorithms/O",permalink:"/docs/DataStructuresAndAlgorithms/O",draft:!1,tags:[{label:"\u590d\u6742\u5ea6\u5206\u6790",permalink:"/docs/tags/\u590d\u6742\u5ea6\u5206\u6790"}],version:"current",frontMatter:{title:"\u65f6\u95f4\u590d\u6742\u5ea6 O(logn) \u7684\u7406\u89e3",date:"2021-12-18T23:23:41.000Z",tags:["\u590d\u6742\u5ea6\u5206\u6790"],categories:["Data Structures and Algorithms"]},sidebar:"tutorialSidebar",previous:{title:"\u6570\u636e\u7ed3\u6784\u548c\u57fa\u672c\u6570\u636e\u7684\u5173\u7cfb",permalink:"/docs/DataStructuresAndAlgorithms/DataStructures"},next:{title:"\u7f16\u7a0b",permalink:"/docs/DataStructuresAndAlgorithms/zhixianyun"}},u={},c=[],p={toc:c},s="wrapper";function g(e){let{components:t,...o}=e;return(0,l.kt)(s,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5206\u6790\u590d\u6742\u5ea6\u65b9\u6cd5"},"\u5206\u6790\u590d\u6742\u5ea6\u65b9\u6cd5"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u53ea\u9700\u8981\u5173\u6ce8\u5faa\u73af\u6b21\u6570\u6700\u591a\u7684\u4e00\u6bb5\u4ee3\u7801",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5ffd\u7565\u6389\u5e38\u91cf\u3001\u4f4e\u9636\u3001\u7cfb\u6570"))),(0,l.kt)("li",{parentName:"ol"},"\u52a0\u6cd5\u6cd5\u5219\uff1a\u603b\u590d\u6742\u5ea6\u7b49\u4e8e\u91cf\u7ea7\u6700\u5927\u7684\u90a3\u6bb5\u4ee3\u7801\u7684\u590d\u6742\u5ea6"),(0,l.kt)("li",{parentName:"ol"},"\u4e58\u6cd5\u6cd5\u5219\uff1a\u5d4c\u5957\u4ee3\u7801\u7684\u590d\u6742\u5ea6\u7b49\u4e8e\u5d4c\u5957\u5185\u5916\u4ee3\u7801\u590d\u6742\u5ea6\u7684\u4e58\u79ef")),(0,l.kt)("h1",{id:"\u5bf9\u6570"},"\u5bf9\u6570"),(0,l.kt)("p",null,"\u5728\u6570\u5b66\u4e2d\uff0c\u5bf9\u6570\u662f\u5bf9\u6c42\u5e42\u7684\u9006\u8fd0\u7b97\uff0c\u6b63\u5982\u9664\u6cd5\u662f\u4e58\u6cd5\u7684\u9006\u8fd0\u7b97\uff0c\u53cd\u4e4b\u4ea6\u7136\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image.png",src:n(4115).Z,width:"320",height:"314"})),(0,l.kt)("p",null,"\u5206\u6790\u4e0b\u65b9\u4ee3\u7801\u590d\u6742\u5ea6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"}," i=1;\n while (i <= n)  {\n   i = i * 2;\n }\n")),(0,l.kt)("p",null,"\u5176\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"i = i * 2")," \u7684\u6267\u884c\u6b21\u6570\u6700\u591a"),(0,l.kt)("p",null,"i \u7684\u53d6\u503c\uff1a2^0 2^1 2^2 ... 2^x = n"),(0,l.kt)("p",null,"\u53ea\u8981\u77e5\u9053 x \uff0c\u5c31\u53ef\u4ee5\u6c42\u51fa\u6267\u884c\u6b21\u6570"),(0,l.kt)("p",null,"2^x=n \u63a8\u5bfc\u51fa x=log2n"),(0,l.kt)("p",null,"\u4e0d\u7ba1\u662f\u4ee5 2 \u4e3a\u5e95\u3001\u4ee5 3 \u4e3a\u5e95\uff0c\u8fd8\u662f\u4ee5 10 \u4e3a\u5e95\uff0c\u6211\u4eec\u53ef\u4ee5\u628a\u6240\u6709\u5bf9\u6570\u9636\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u90fd\u8bb0\u4e3a O(logn)\u3002"),(0,l.kt)("p",null,"\u56e0\u4e3a"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5bf9\u6570\u4e4b\u95f4\u662f\u53ef\u4ee5\u4e92\u76f8\u8f6c\u6362\u7684\uff0clog3n \u5c31\u7b49\u4e8e log32 ",(0,l.kt)("em",{parentName:"p"}," log2n\uff0c\u6240\u4ee5 O(log3n) = O(C ")," log2n)\uff0c\n\u5176\u4e2d C=log32 \u662f\u4e00\u4e2a\u5e38\u91cf\u3002\u57fa\u4e8e\u6211\u4eec\u524d\u9762\u7684\u4e00\u4e2a\u7406\u8bba\uff1a\u5728\u91c7\u7528\u5927 O \u6807\u8bb0\u590d\u6742\u5ea6\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u5ffd\u7565\u7cfb\u6570\uff0c\n\u5373 O(Cf(n)) = O(f(n))\u3002\u6240\u4ee5\uff0cO(log2n) \u5c31\u7b49\u4e8e O(log3n)\u3002\u56e0\u6b64\uff0c\u5728\u5bf9\u6570\u9636\u65f6\u95f4\u590d\u6742\u5ea6\u7684\u8868\u793a\u65b9\u6cd5\u91cc\uff0c\n\u6211\u4eec\u5ffd\u7565\u5bf9\u6570\u7684\u201c\u5e95\u201d\uff0c\u7edf\u4e00\u8868\u793a\u4e3a O(logn)\u3002")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u4e00\u6bb5\u4ee3\u7801\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u662f O(logn)\uff0c\u6211\u4eec\u5faa\u73af\u6267\u884c n \u904d\uff0c\u65f6\u95f4\u590d\u6742\u5ea6\u5c31\u662f O(nlogn) \u4e86")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5f52\u5e76\u6392\u5e8f\u3001\u5feb\u901f\u6392\u5e8f\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u90fd\u662f O(nlogn)\u3002")),(0,l.kt)("p",null,"\u7ec3\u4e60\uff1a"),(0,l.kt)("p",null,"\u5206\u6790\u4e0b\u5217\u4ee3\u7801\u65f6\u95f4\u590d\u6742\u5ea6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var isPowerOfThree = function(n) {\n    while (n !== 0 && n % 3 === 0) {\n        n = Math.floor(n / 3);\n    }\n    return n === 1;\n};\n")),(0,l.kt)("p",null,"\u65f6\u95f4\u590d\u6742\u5ea6\u4e3a O(logn): \u5f53 n \u662f 3 \u7684\u5e42\uff0c\u7a0b\u5e8f\u6267\u884c log3n \u6b21\uff0c\u5f53 n \u4e0d\u662f 3 \u7684\u5e42\uff0c\n\u7a0b\u5e8f\u6267\u884c\u5c11\u4e8e log3n "),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5f53 n \u662f 3 \u7684\u5e42\u65f6\uff0c\u9700\u8981\u9664\u4ee5 3 \u7684\u6b21\u6570\u4e3a log3n = O(log n)\uff1b\n\u5f53 n \u4e0d\u662f 3 \u7684\u5e42\u65f6\uff0c\u9700\u8981\u9664\u4ee5 3 \u7684\u6b21\u6570\u5c0f\u4e8e\u8be5\u503c\u3002")))}g.isMDXComponent=!0},4115:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/96e12106b1ce4d9a8be707bd8ebb1527~tplv-k3u1fbpfcp-watermark.image-4b4f48fd099cd92de14d8880b6e230b0.png"}}]);