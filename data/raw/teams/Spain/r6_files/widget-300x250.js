!function(e){var o={};function i(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=o,i.d=function(n,t,e){i.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)i.d(e,o,function(n){return t[n]}.bind(null,o));return e},i.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(t,"a",t),t},i.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},i.p="",i(i.s=1)}([function(n,t,e){"use strict";n.exports=function(e){var a=[];return a.toString=function(){return this.map(function(n){var t=function(n,t){var e=n[1]||"",o=n[3];if(!o)return e;if(t&&"function"==typeof btoa){var i=(a=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),r=o.sources.map(function(n){return"/*# sourceURL="+o.sourceRoot+n+" */"});return[e].concat(r).concat([i]).join("\n")}var a;return[e].join("\n")}(n,e);return n[2]?"@media "+n[2]+"{"+t+"}":t}).join("")},a.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var e={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(e[i]=!0)}for(o=0;o<n.length;o++){var r=n[o];null!=r[0]&&e[r[0]]||(t&&!r[2]?r[2]=t:t&&(r[2]="("+r[2]+") and ("+t+")"),a.push(r))}},a}},function(n,t,e){n.exports=e(2)},function(n,t,e){var z=e(3).toString(),j={creative:"creative",image:"creative__image",content:"creative__content",title:"creative__title",description:"creative__description",footer:"creative__footer",brandName:"creative__brand-name",callToAction:"creative__call-to-action-v1"};function N(n,t){if(!n)return 0;for(var e=n.innerHTML.split(" ");n.scrollHeight>t;)e.pop(),n.innerHTML=e.join(" ")+"...";return n.scrollHeight}!function(n){if(n&&document){var e,o;F=document,S=z,C=F.head||F.getElementsByTagName("head")[0],(T=F.createElement("style")).type="text/css",T.styleSheet?T.styleSheet.cssText=S:T.appendChild(F.createTextNode(S)),C.appendChild(T),document.body.style.background=(e=n.trackers,o="",(e||[]).forEach(function(n,t){o+="url(".concat(n,")"),t<e.length-1&&(o+=",")}),o),n.fontFamily&&""!=n.fontFamily&&(document.body.style.fontFamily=n.fontFamily);var t=document.createElement("a");t.href=n.url,t.target="_blank",t.className=j.creative,document.body.appendChild(t);var i=document.createElement("div");i.className=j.content,t.appendChild(i);var r,a,c=(r=n.title,(a=document.createElement("div")).className=j.title,a.innerHTML=r,a);n.titleFontSize&&0!=n.titleFontSize&&(c.style.fontSize="".concat(n.titleFontSize,"px")),n.titleFontWeight&&""!=n.titleFontWeight&&(c.style.fontWeight=n.titleFontWeight),n.titleFontColor&&""!=n.titleFontColor&&(c.style.color="#".concat(n.titleFontColor)),i.appendChild(c);var l=function(n){if(!n)return null;var t=document.createElement("div");return t.className=j.description,t.innerHTML=n,t}(n.description);l&&(n.descriptionFontSize&&0!=n.descriptionFontSize&&(l.style.fontSize="".concat(n.descriptionFontSize,"px")),n.descriptionFontColor&&""!=n.descriptionFontColor&&(l.style.color="#".concat(n.descriptionFontColor)),n.descriptionFontWeight&&""!=n.descriptionFontWeight&&(l.style.fontWeight=n.descriptionFontWeight),i.appendChild(l));var s=N(l,38),p=78-s-N(c,78-s),d=(g=n.imageSrc,v=298,x=108+p,y=n.imageCrop,b=n.imageFormat,_=document.createElement("img"),w="".concat(g,"?w=").concat(v,"&h=").concat(x,"&fit=crop&crop=").concat(y),w+=b?"&fm=".concat(b):"&auto=format&fm=jpg",_.src=w,_.className=j.image,_);t.insertBefore(d,i),n.CTAStyle&&""!=n.CTAStyle&&(j.callToAction=n.CTAStyle);var f,u,m,h=(f=n.brandName,u=n.callToAction,(m=document.createElement("div")).className=j.footer,m.innerHTML='\n        <span class="'.concat(j.brandName,'">').concat(f,'</span>\n        <span class="').concat(j.callToAction,'">').concat(u,"</span>\n    "),m);t.appendChild(h)}var g,v,x,y,b,_,w;var F,S,C,T}((window||{}).__zemCreative__)},function(n,t,e){(n.exports=e(0)(!1)).push([n.i,"* {\n    box-sizing: border-box;\n}\n\nbody {\n    padding: 0;\n    margin: 0;\n    font-family: Arial, sans-serif;\n}\n\n.creative {\n    display: block;\n    width: 300px;\n    height: 250px;\n    background-color: #ffffff;\n    border: 1px solid #cccccc;\n    text-decoration: none;\n}\n\n.creative__image {\n    display: block;\n}\n\n.creative__content {\n    padding: 14px;\n}\n\n.creative__title {\n    font-size: 16px;\n    font-weight: 900;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1;\n    letter-spacing: normal;\n    color: #282828; \n}\n\n.creative__description {\n    padding-top: 6px;\n    font-size: 14px;\n    font-weight: bold;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1;\n    letter-spacing: normal;\n    color: #828282;\n}\n\n.creative__footer {\n    position: relative;\n    padding: 0 116px 14px 14px;\n}\n\n.creative__brand-name {\n    display: block;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-size: 12px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: italic;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #828282;\n}\n\n.creative__call-to-action-v1 {\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 14px;\n    max-width: 100px;\n    height: 20px;\n    padding: 3px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    line-height: 14px;\n    border: 1px solid #4a90e2;\n    border-radius: 2px;\n    color: #4a90e2;\n    font-size: 12px;\n    text-transform: uppercase;\n}\n\n.creative__call-to-action-v2 {\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 14px;\n    max-width: 100px;\n    height: 20px;\n    padding: 3px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    line-height: 14px;\n    background-color: #dcdada;\n    border: 1px solid #595959;\n    border-radius: 2px;\n    color: #595959;\n    font-size: 12px;\n    text-transform: uppercase;\n    font-weight: bold;\n}\n",""])}]);