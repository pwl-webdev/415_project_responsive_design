!function(a){var b;"undefined"!=typeof window?b=window:"undefined"!=typeof self&&(b=self),b.inViewport=a()}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);throw i=Error("Cannot find module '"+g+"'"),i.code="MODULE_NOT_FOUND",i}i=c[g]={exports:{}},b[g][0].call(i.exports,function(a){var c=b[g][1][a];return e(c?c:a)},i,i.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){(function(a){function c(a,b,c){a.attachEvent?a.attachEvent("on"+b,c):a.addEventListener(b,c,!1)}function d(a,b,c){var d;return function(){var e=this,f=arguments,g=c&&!d;clearTimeout(d),d=setTimeout(function(){d=null,c||a.apply(e,f)},b),g&&a.apply(e,f)}}function e(b){function e(c,d,e){if(!i(a.document.documentElement,c)||!i(a.document.documentElement,b))return e?setTimeout(h(c,d,e),0):!1;var g=c.getBoundingClientRect(),j=b.getBoundingClientRect(),l=g.left,m=g.top,n=d,o=d;if(b===a.document.body?(n+=a.document.documentElement.clientWidth,o+=a.document.documentElement.clientHeight,j={bottom:b.scrollHeight,top:0,left:0,right:b.scrollWidth}):(l-=j.left,m-=j.top,n+=b.clientWidth,o+=b.clientHeight),!(g.right<j.left||g.left>j.right||g.bottom<j.top||g.top>j.bottom)&&o>=m&&n>=l){if(!e)return!0;k.splice(f.call(k,c),1),e(c)}else{if(!e)return!1;setTimeout(h(c,d,e),0)}}function h(a,b,c){return-1===f.call(k,a)&&k.push(a),function(){j.push(function(){e(a,b,c)})}}var j=[],k=[],l=b===a.document.body?a:b,m=d(function(){for(var a;a=j.shift();)a()},15);return c(l,"scroll",m),l===a&&c(a,"resize",m),"function"==typeof a.MutationObserver&&g(k,b,m),{container:b,isInViewport:e}}function f(a){for(var b=this.length;b--&&this[b]!==a;);return b}function g(a,b,c){function d(b){return-1!==f.call(a,b)}function e(a){return 0<h.call(a.addedNodes,d).length}var g=new MutationObserver(function(a){!0===a.some(e)&&setTimeout(c,0)}),h=Array.prototype.filter;g.observe(b,{childList:!0,subtree:!0})}b.exports=function(b,c,d){var f=a.document.body;(void 0===c||"function"==typeof c)&&(d=c,c={}),f=c.container||f,c=c.offset||0;for(var g=0;g<h.length;g++)if(h[g].container===f)return h[g].isInViewport(b,c,d);return h[h.push(e(f))-1].isInViewport(b,c,d)};var h=[],i=a.document.documentElement.compareDocumentPosition?function(a,b){return!!(16&a.compareDocumentPosition(b))}:a.document.documentElement.contains?function(a,b){return a!==b&&(a.contains?a.contains(b):!1)}:function(a,b){for(;b=b.parentNode;)if(b===a)return!0;return!1}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1])(1)});try{!function(a,b){for(var c=function(a){function b(){""!=S&&(null==t&&(S+=S.indexOf("?")>0?"&utm_source=evoke.ie&utm_medium=Social_Honey&utm_content="+[location.protocol,"//",location.host,location.pathname].join(""):"?utm_source=evoke.ie&utm_medium=Social_Honey&utm_content="+[location.protocol,"//",location.host,location.pathname].join("")),aa||(aa=!0,window.location=S,S=""))}function c(){I||(I=!0,ga(window,"message",function(a){a.data&&a.data.type&&"sendCustomResponse"===a.data.type&&b()}))}function d(){var a="undefined"!=typeof window.crypto&&"undefined"!=typeof window.crypto.getRandomValues?function(){var a=new Uint16Array(8);window.crypto.getRandomValues(a);var b=function(a){for(var b=a.toString(16);b.length<4;)b="0"+b;return b};return b(a[0])+b(a[1])+"-"+b(a[2])+"-"+b(a[3])+"-"+b(a[4])+"-"+b(a[5])+b(a[6])+b(a[7])}:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0,c="x"==a?b:3&b|8;return c.toString(16)})};return a()}function e(a,b,c){var d;window.XMLHttpRequest?d=new XMLHttpRequest:window.ActiveXObject&&(d=new ActiveXObject("Microsoft.XMLHTTP")),d.onreadystatechange=function(){try{4===d.readyState&&(200===d.status,c())}catch(a){}},d.open("POST","http://so.socialhoney.co/utils/ping",!0),d.setRequestHeader("Content-Type","application/json"),d.send('{ "type": "'+a+'", "payload": "{\'url\': \''+b+"', 'treatment': '"+T+"'}\"}")}function f(a){return a%2}function g(a,b,c){if(b!=c)if(c>b){var d=a;d.style.top=b+"px",setTimeout(function(){g(a,b+1,c)},1)}else{var d=a;d.style.top=b+"px",setTimeout(function(){g(a,b-1,c)},1)}}function h(){var a=inViewport(document.getElementById("original_related_posts"));null!=y&&(da()||(y.style.marginTop="56px","none"==y.style.display?a&&($||(y.style.display="block",$=!0,g(y,-76,0),$=!1,_||(_=!0,e("nextTimer_view",document.getElementById("shNextTimerAnchor").getAttribute("href"),function(){})))):null==x&&Z&&(x=setInterval(sa,1e3))))}function i(){Z?(j(),document.getElementById("shNextTimerCtl").src="http://cdn.socialhoney.co/widget/glycerine/play.png",e("nextTimer_pause",document.getElementById("shNextTimerAnchor").getAttribute("href"),function(){})):(document.getElementById("shNextTimerCtl").src="http://cdn.socialhoney.co/widget/glycerine/pause.png",Z=!0,h(),e("nextTimer_replay",document.getElementById("shNextTimerAnchor").getAttribute("href"),function(){}))}function j(){Z=!1,clearInterval(x),x=null}function k(a){Y=15,z=document.getElementById("original_related_posts");var c=!1,d=a.thumbnailImageURLs[0];null!=a.customDimensions&&a.customDimensions.indexOf("promoted")>-1&&(c=!0);var f="<div style='height: 75px; background-color: #000;z-index: 99;width: 100%;'>";f+="<div style='float:left;max-width: 30%;' href='"+a.url+"' rel='bookmark' title='"+a.title+"'>",f+="<img id='shToastImg' itemprop='image' class='entry-thumb' src='"+d,f+="' alt='' title='"+a.title+"' style='opacity: 1;  height: 75px; max-width: 100%;' scale='0'>",f+="<img id='shNextTimerCtl' src='http://cdn.socialhoney.co/widget/glycerine/pause.png' style='cursor:pointer;height: 65px; float:left;margin-top: 5px;opacity: 0.8;position: relative;left: 18px;top: -76px;' scale='0'></div>",f+="<a id='shNextTimerAnchor' style='float:left;width: 68%;margin-left: 2%;color: #fff;font-weight: 700;font-family: Roboto;margin-top: 5px;font-size: 0.9em;overflow: hidden;line-height:14px;",f+=c?"height: 28px":"height: 46px",f+="' itemprop='url' href='"+a.url+"' rel='bookmark' title='"+a.title+"'>"+a.title+"</a>",f+="<div style='float:left;width: 68%;margin-left: 2%;color: #ccc;font-weight: normal;font-family: Roboto;margin-top: 0px;font-size: 0.9em;overflow: hidden;line-height: 16px;",f+=c?"height: 16px;":"height: 0px;visibility:hidden",f+="'>[Promoted]</div>",f+="<div style='float:left;width: 68%;margin-left: 2%;color: #fff;font-family: Roboto;font-size: 0.9em;vertical-align: baseline;margin-top: 5px;'>Coming up next in <span class='color:red;' style='color: red;'><span id='nextTimerCount'>15</span> seconds...</span>",f+="</div></div>";var g=document.createElement("div");g.innerHTML=f,y=document.querySelector("article").appendChild(g),y.style.display="none",y.style.position="fixed",y.style.top="-76px",y.style.maxWidth="415px",y.style.zIndex="11",null!=z&&null!=y&&(document.getElementById("shNextTimerCtl").addEventListener("click",function(a){i()}),document.getElementById("shNextTimerAnchor").addEventListener("click",function(a){a.preventDefault(),S=document.getElementById("shNextTimerAnchor").getAttribute("href"),ba||(ba=!0,e("nextTimer_navigateClick",S,b))}),X=!0,document.getElementById("td-top-mobile-toggle").addEventListener("click",function(a){null!=y&&(Z&&j(),document.querySelector("article").removeChild(y),y=null)}))}function l(a){var b=a.getHours()-1,c=a.getMinutes(),d=b>=12?"pm":"am";b%=12,b=b?b:12,c=10>c?"0"+c:c;var e=b+":"+c+" "+d;return e}function m(a,b){var c="<section class='articleList more-news-article-page'>";c+="<header class='fhg__header'><h3>More Related Articles</h3></header>",c+="<ul class='articleList__list'>";for(var d=0,e=6,f=0;e>f;f++)if(null!=a.urls[f].thumbnailImageURLs){c+="<li class='articleList__item'>",c+="<a href='"+a.urls[f].url+"' data-sham='"+a.urls[f].url+"'>",c+="<figure class='articleList__figure'>",c+="<span class='articleList__imgWrapper'>",c+="<img src='"+a.urls[f].thumbnailImageURLs[0]+"' alt='"+a.urls[f].title+"'>",c+="</span>",c+="<figcaption class='articleList__figcaption'>",c+="<h3>"+a.urls[f].title.replace(" - Football365","")+"</h3>",a.urls[f].description&&(c+="<p>"+a.urls[f].description.replace("Football365 - ","").replace(" - Football365","")+"</p>"),c+="</figcaption></figure></a>";var g=new Date(a.urls[f].publicationDate);c+="<span class='visible-lg-block articleList__figcaption__date'><em><time datetime='"+a.urls[f].publicationDate+"'>"+g.toDateString()+", "+l(g)+"</time></em></span>",c+="</li>",d++}else e<a.length&&e++;if(c+="</ul></section>",6>d)throw"Fallback to default stories";return c}function n(a,b,c,d,e){for(var f="<div class='td_block_wrap td_block_related_posts td-pb-border-top' style='min-height:"+d+"px;'><div class='td-related-row'>",g=0,h=0;b>h;h++)if(null!=a.urls[h].thumbnailImageURLs){var i=a.urls[h].thumbnailImageURLs[0];null!=a.urls[h].customDimensions&&a.urls[h].customDimensions.indexOf("gifgrub")>-1&&(i="http://cdn.socialhoney.co/widget/gifgrub/"+i),f+="<div class='td-related-span4'";var j="height:"+e+"px;width: "+100/c+"%;padding: 0px 5px;";f+=" style='float:left;"+j+"'>",f+="<div class='td_module_related_posts td-animation-stack td_mod_related_posts'>",f+="<div class='td-module-image'>",f+="<div class='td-module-thumb'>",f+="<a href='"+a.urls[h].url+"' data-sham='"+a.urls[h].url+"' rel='bookmark' title='"+a.urls[h].title+"'><img width='238' height='178' itemprop='image' class='entry-thumb' src='"+i+"' alt='' title='"+a.urls[h].title+"' style='opacity: 1;height: 70px;width: auto;margin: 0 auto;'></a>",f+="</div>",f+="</div>",f+="<div class='item-details'>",f+="<h3 itemprop='name' class='entry-title td-module-title' style=''>",f+="<a itemprop='url' href='"+a.urls[h].url+"' data-sham='"+a.urls[h].url+"' rel='bookmark' title='"+a.urls[h].title+"'>"+a.urls[h].title+"</a>",f+="</h3>",f+="</div>",f+="</div>",f+="</div> ",f+="<!-- ./td-related-span4 -->",g++}else b<a.length&&b++;if(f+="</div></div>",b>g)throw"Fallback to default stories";return f}function o(a){var b=!1;if(K||(K=!0,ga(window,"message",function(c){if(c.data&&c.data.type&&"getRecommendedResponse"===c.data.type){var d=c.data.stories;if(null!=t)var e=t.innerHTML;else var e=document.getElementById("original_related_posts").innerHTML;if(d.urls)if(d.urls.length>5)try{switch(O){case"list":"variant"==T&&(e=m(d,t));break;case"tile":e="<header class='fhg__header'><h3>More Related Articles</h3></header>",e+=480>=A?n(d,8,2,700,165):n(d,8,4,700,165);break;default:e=480>=A?n(d,6,3,275,135):n(d,6,3,440,219)}}catch(f){b=!0}finally{b||(t?t.innerHTML=e:(document.getElementById("original_related_posts").innerHTML=e,480>=A&&d.urls.length>0&&N&&k(d.urls[0])))}else"variant"==T&&(T="control");oa(a)}})),!W)if(W=!0,"list"==O){var c=new Date;c.setDate(c.getDate()-2),a.contentWindow.postMessage({type:"gr"},"*")}else a.contentWindow.postMessage({type:"gr"},"*")}function p(a){if(A=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,null==t){var b=document.getElementById("original_related_posts");null!=b&&(b.querySelector("h4.td-related-title").style.display="none",b.querySelector(".td-next-prev-wrap").style.display="none",o(a))}else f((new Date).getSeconds())?(T="control",o(a)):(T="variant",o(a))}var q,r,s,t,u,v,w,x,y,z,A,B=!1,C=!1,D=!1,E=!1,F=!1,G=!1,H=!1,I=!1,J=!1,K=!1,L=!1,M=!1,N=!0,O="",P=document.body,Q=document.documentElement,R=!1,S="",T="",U=!1,V=!1,W=!1,X=!1,Y=15,Z=!0,$=!1,_=!1,aa=!1,ba=!1,ca=function(){R||(R=!0,ja())},da=function(){if(null==v)return!1;var a=new Date;return(a-w)/1e3>300?(R=!1,!0):(a-v)/1e3>5?(R=!1,!0):!1},ea=function(){var a,b=navigator.userAgent,c=b.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];return/trident/i.test(c[1])?(a=/\brv[ :]+(\d+)/g.exec(b)||[],["ie",a[1]||""]):"Chrome"===c[1]&&(a=b.match(/\bOPR\/(\d+)/),null!==a)?["opera",a[1]]:(c=c[2]?[c[1],c[2]]:[navigator.appName,navigator.appVersion,"-?"],null!==(a=b.match(/version\/(\d+)/i))&&c.splice(1,1,a[1]),c[0]=c[0].toLowerCase(),c)},fa=function(a){var b=ea(),c=encodeURIComponent(encodeURIComponent(a));return 2===b.length&&"safari"===b[0]&&parseInt(b[1])<=5&&(c=encodeURIComponent(c)),c},ga=function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent("on"+b,c)},ha=function(a){ga(a,"load",function(){B=!0,M?a.contentWindow.postMessage({type:"np"},"*"):a.contentWindow.postMessage({type:"t",r:document.referrer,u:navigator.userAgent,psid:r},"*")})},ia=function(a,c){c.addEventListener("click",function(a){"a"==c.tagName.toLowerCase()&&(a.preventDefault(),S=c.getAttribute(null==c.getAttribute("data-sham")||""==c.getAttribute("data-sham")?"href":"data-sham")),e("click",S,b)})},ja=function(){if(!U&&t){var a=inViewport(t);a&&(U=!0,e("view",[location.protocol,"//",location.host,location.pathname].join(""),function(){}))}if(X&&h(),X){var b=ka();b>=.25*u&&(V||(V=!0,e("qualView",location.href,function(){})))}},ka=function(){var a;return"number"==typeof window.pageYOffset?a=window.pageYOffset:document.body&&document.body.scrollTop?a=document.body.scrollTop:document.documentElement&&document.documentElement.scrollTop&&(a=document.documentElement.scrollTop),a},la=function(){null!==v&&(v=null),w=new Date,ca()},ma=function(){v=new Date},na=function(){null!==v&&(v=null),w=new Date,ca()},oa=function(a){u="undefined"!=typeof document.height?document.height:Math.max(P.scrollHeight,P.offsetHeight,Q.clientHeight,Q.scrollHeight,Q.offsetHeight);var b=document.querySelectorAll("[data-sham]");if(b.length>0)for(d=0;d<b.length;d++)ia(a,b[d]);else if(t)for(var c=document.querySelectorAll("section.more-news-article-page ul li.articleList__item a"),d=0;d<c.length;d++)ia(a,c[d]);D||(window.addEventListener("scroll",ja),D=!0),E||(window.addEventListener("focus",la),E=!0),F||(window.addEventListener("blur",ma),F=!0),G||(window.addEventListener("mousemove",na),G=!0)},pa=function(a){C||(C=!0,ga(window,"message",function(b){b.data&&b.data.type&&"getPersonaResponse"===b.data.type&&"function"==typeof a&&a(b.data.segments)})),q.contentWindow.postMessage({type:"gp"},"*")},qa=function(a,b,c){H||(H=!0,ga(window,"message",function(a){a.data&&a.data.type&&"getSegmentStoriesResponse"===a.data.type&&null!=b&&"function"==typeof c&&c(a.data.stories)})),a&&b&&q.contentWindow.postMessage({type:"gs",segmentType:a,segment:b},"*")},ra=function(a){J||(J=!0,ga(window,"message",function(b){b.data&&b.data.type&&"getTokenResponse"===b.data.type&&"function"==typeof a&&a(b.data.token)})),q.contentWindow.postMessage({type:"gt"},"*")},sa=function(){Y>0&&(Y-=1,document.getElementById("nextTimerCount").innerHTML=Y),0==Y&&(S=document.getElementById("shNextTimerAnchor").getAttribute("href"),ba||(ba=!0,e("nextTimer_navigate",S,b)))};return{create:function(b){var e;"string"==typeof b?s=b:"object"==typeof b&&(s=b[0],e=b[1]),r=d(),q=document.createElement("iframe"),document.body.appendChild(q),q.height=0,q.width=0,q.frameBorder="none",q.style.visibility="hidden",q.style.display="none",q.setAttribute("data-name","SHFrame"),q.src=a.WIDGET_LOCATION+fa(window.document.location.href)+"?uids="+s+"&psid="+r,document.body.appendChild(q),ha(q),c();var f=setInterval(function(){B&&(clearInterval(f),L&&p(q),null!=e&&e())},50)},getPersona:function(a){var b=setInterval(function(){B&&clearInterval(b),pa(a)},1e3)},getSegmentStories:function(a,b,c){var d=setInterval(function(){B&&clearInterval(d),qa(a,b,c)},50)},providence:function(a){L=a},getToken:function(a){ra(a)},toast:function(a){N=a},noPing:function(a){M=a},optOut:function(a){q.contentWindow.postMessage({type:"oo"},"*")},domLocation:function(a){t=a},template:function(a){O=a}}}(b),d=function(a){var b=a[0];if("function"==typeof c[b]){var d=Array.prototype.slice.call(a);c[b].apply(null,d.slice(1))}},e=0,f=a.sh.q.length;f>e;e+=1)d(a.sh.q[e]);delete a.sh.q,a.sh=function(){d(arguments)}}(window,{WIDGET_LOCATION:"http://cdn.socialhoney.co/widget/0.0.172/index.html#/st/",API_END_POINT:"http://api.socialhoney.co:3000"})}catch(e){console}