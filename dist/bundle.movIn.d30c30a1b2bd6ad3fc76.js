!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t,n){var o,r;
/*!
 * ScrollMagic v2.0.7 (2019-05-07)
 * The javascript library for magical scroll interactions.
 * (c) 2019 Jan Paepke (@janpaepke)
 * Project Website: http://scrollmagic.io
 * 
 * @version 2.0.7
 * @license Dual licensed under MIT license and GPL.
 * @author Jan Paepke - e-mail@janpaepke.de
 *
 * @file ScrollMagic main library.
 */void 0===(r="function"==typeof(o=function(){"use strict";var e=function(){o.log(2,"(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use 'new ScrollMagic.Controller()' to create a new controller instance. Use 'new ScrollMagic.Scene()' to instance a scene.")};e.version="2.0.7",window.addEventListener("mousewheel",function(){}),e.Controller=function(n){var r,i,l="ScrollMagic.Controller",a=t.defaults,s=this,c=o.extend({},a,n),u=[],f=!1,d=0,g="PAUSED",p=!0,h=0,v=!0,m=function(){c.refreshInterval>0&&(i=window.setTimeout(T,c.refreshInterval))},w=function(){return c.vertical?o.get.scrollTop(c.container):o.get.scrollLeft(c.container)},y=function(){return c.vertical?o.get.height(c.container):o.get.width(c.container)},S=this._setScrollPos=function(e){c.vertical?p?window.scrollTo(o.get.scrollLeft(),e):c.container.scrollTop=e:p?window.scrollTo(e,o.get.scrollTop()):c.container.scrollLeft=e},E=function(){if(v&&f){var e=o.type.Array(f)?f:u.slice(0);f=!1;var t=d,n=(d=s.scrollPos())-t;0!==n&&(g=n>0?"FORWARD":"REVERSE"),"REVERSE"===g&&e.reverse(),e.forEach(function(t,n){C(3,"updating Scene "+(n+1)+"/"+e.length+" ("+u.length+" total)"),t.update(!0)}),0===e.length&&c.loglevel>=3&&C(3,"updating 0 Scenes (nothing added to controller)")}},b=function(){r=o.rAF(E)},R=function(e){C(3,"event fired causing an update:",e.type),"resize"==e.type&&(h=y(),g="PAUSED"),!0!==f&&(f=!0,b())},T=function(){if(!p&&h!=y()){var e;try{e=new Event("resize",{bubbles:!1,cancelable:!1})}catch(t){(e=document.createEvent("Event")).initEvent("resize",!1,!1)}c.container.dispatchEvent(e)}u.forEach(function(e,t){e.refresh()}),m()},C=this._log=function(e,t){c.loglevel>=e&&(Array.prototype.splice.call(arguments,1,0,"("+l+") ->"),o.log.apply(window,arguments))};this._options=c;var x=function(e){if(e.length<=1)return e;var t=e.slice(0);return t.sort(function(e,t){return e.scrollOffset()>t.scrollOffset()?1:-1}),t};return this.addScene=function(t){if(o.type.Array(t))t.forEach(function(e,t){s.addScene(e)});else if(t instanceof e.Scene){if(t.controller()!==s)t.addTo(s);else if(u.indexOf(t)<0){for(var n in u.push(t),u=x(u),t.on("shift.controller_sort",function(){u=x(u)}),c.globalSceneOptions)t[n]&&t[n].call(t,c.globalSceneOptions[n]);C(3,"adding Scene (now "+u.length+" total)")}}else C(1,"ERROR: invalid argument supplied for '.addScene()'");return s},this.removeScene=function(e){if(o.type.Array(e))e.forEach(function(e,t){s.removeScene(e)});else{var t=u.indexOf(e);t>-1&&(e.off("shift.controller_sort"),u.splice(t,1),C(3,"removing Scene (now "+u.length+" left)"),e.remove())}return s},this.updateScene=function(t,n){return o.type.Array(t)?t.forEach(function(e,t){s.updateScene(e,n)}):n?t.update(!0):!0!==f&&t instanceof e.Scene&&(-1==(f=f||[]).indexOf(t)&&f.push(t),f=x(f),b()),s},this.update=function(e){return R({type:"resize"}),e&&E(),s},this.scrollTo=function(t,n){if(o.type.Number(t))S.call(c.container,t,n);else if(t instanceof e.Scene)t.controller()===s?s.scrollTo(t.scrollOffset(),n):C(2,"scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.",t);else if(o.type.Function(t))S=t;else{var r=o.get.elements(t)[0];if(r){for(;r.parentNode.hasAttribute("data-scrollmagic-pin-spacer");)r=r.parentNode;var i=c.vertical?"top":"left",l=o.get.offset(c.container),a=o.get.offset(r);p||(l[i]-=s.scrollPos()),s.scrollTo(a[i]-l[i],n)}else C(2,"scrollTo(): The supplied argument is invalid. Scroll cancelled.",t)}return s},this.scrollPos=function(e){return arguments.length?(o.type.Function(e)?w=e:C(2,"Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'."),s):w.call(s)},this.info=function(e){var t={size:h,vertical:c.vertical,scrollPos:d,scrollDirection:g,container:c.container,isDocument:p};return arguments.length?void 0!==t[e]?t[e]:void C(1,'ERROR: option "'+e+'" is not available'):t},this.loglevel=function(e){return arguments.length?(c.loglevel!=e&&(c.loglevel=e),s):c.loglevel},this.enabled=function(e){return arguments.length?(v!=e&&(v=!!e,s.updateScene(u,!0)),s):v},this.destroy=function(e){window.clearTimeout(i);for(var t=u.length;t--;)u[t].destroy(e);return c.container.removeEventListener("resize",R),c.container.removeEventListener("scroll",R),o.cAF(r),C(3,"destroyed "+l+" (reset: "+(e?"true":"false")+")"),null},function(){for(var t in c)a.hasOwnProperty(t)||(C(2,'WARNING: Unknown option "'+t+'"'),delete c[t]);if(c.container=o.get.elements(c.container)[0],!c.container)throw C(1,"ERROR creating object "+l+": No valid scroll container supplied"),l+" init failed.";(p=c.container===window||c.container===document.body||!document.body.contains(c.container))&&(c.container=window),h=y(),c.container.addEventListener("resize",R),c.container.addEventListener("scroll",R);var n=parseInt(c.refreshInterval,10);c.refreshInterval=o.type.Number(n)?n:a.refreshInterval,m(),C(3,"added new "+l+" controller (v"+e.version+")")}(),s};var t={defaults:{container:window,vertical:!0,globalSceneOptions:{},loglevel:2,refreshInterval:100}};e.Controller.addOption=function(e,n){t.defaults[e]=n},e.Controller.extend=function(t){var n=this;e.Controller=function(){return n.apply(this,arguments),this.$super=o.extend({},this),t.apply(this,arguments)||this},o.extend(e.Controller,n),e.Controller.prototype=n.prototype,e.Controller.prototype.constructor=e.Controller},e.Scene=function(t){var r,i,l="ScrollMagic.Scene",a=n.defaults,s=this,c=o.extend({},a,t),u="BEFORE",f=0,d={start:0,end:0},g=0,p=!0,h={};this.on=function(e,t){return o.type.Function(t)?(e=e.trim().split(" ")).forEach(function(e){var n=e.split("."),o=n[0],r=n[1];"*"!=o&&(h[o]||(h[o]=[]),h[o].push({namespace:r||"",callback:t}))}):v(1,"ERROR when calling '.on()': Supplied callback for '"+e+"' is not a valid function!"),s},this.off=function(e,t){return e?((e=e.trim().split(" ")).forEach(function(e,n){var o=e.split("."),r=o[0],i=o[1]||"",l="*"===r?Object.keys(h):[r];l.forEach(function(e){for(var n=h[e]||[],o=n.length;o--;){var r=n[o];!r||i!==r.namespace&&"*"!==i||t&&t!=r.callback||n.splice(o,1)}n.length||delete h[e]})}),s):(v(1,"ERROR: Invalid event name supplied."),s)},this.trigger=function(t,n){if(t){var o=t.trim().split("."),r=o[0],i=o[1],l=h[r];v(3,"event fired:",r,n?"->":"",n||""),l&&l.forEach(function(t,o){i&&i!==t.namespace||t.callback.call(s,new e.Event(r,t.namespace,s,n))})}else v(1,"ERROR: Invalid event name supplied.");return s},s.on("change.internal",function(e){"loglevel"!==e.what&&"tweenChanges"!==e.what&&("triggerElement"===e.what?E():"reverse"===e.what&&s.update())}).on("shift.internal",function(e){y(),s.update()});var v=this._log=function(e,t){c.loglevel>=e&&(Array.prototype.splice.call(arguments,1,0,"("+l+") ->"),o.log.apply(window,arguments))};this.addTo=function(t){return t instanceof e.Controller?i!=t&&(i&&i.removeScene(s),i=t,T(),S(!0),E(!0),y(),i.info("container").addEventListener("resize",b),t.addScene(s),s.trigger("add",{controller:i}),v(3,"added "+l+" to controller"),s.update()):v(1,"ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller"),s},this.enabled=function(e){return arguments.length?(p!=e&&(p=!!e,s.update(!0)),s):p},this.remove=function(){if(i){i.info("container").removeEventListener("resize",b);var e=i;i=void 0,e.removeScene(s),s.trigger("remove"),v(3,"removed "+l+" from controller")}return s},this.destroy=function(e){return s.trigger("destroy",{reset:e}),s.remove(),s.off("*.*"),v(3,"destroyed "+l+" (reset: "+(e?"true":"false")+")"),null},this.update=function(e){if(i)if(e)if(i.enabled()&&p){var t,n=i.info("scrollPos");t=c.duration>0?(n-d.start)/(d.end-d.start):n>=d.start?1:0,s.trigger("update",{startPos:d.start,endPos:d.end,scrollPos:n}),s.progress(t)}else m&&"DURING"===u&&O(!0);else i.updateScene(s,!1);return s},this.refresh=function(){return S(),E(),s},this.progress=function(e){if(arguments.length){var t=!1,n=u,o=i?i.info("scrollDirection"):"PAUSED",r=c.reverse||e>=f;if(0===c.duration?(t=f!=e,u=0==(f=e<1&&r?0:1)?"BEFORE":"DURING"):e<0&&"BEFORE"!==u&&r?(f=0,u="BEFORE",t=!0):e>=0&&e<1&&r?(f=e,u="DURING",t=!0):e>=1&&"AFTER"!==u?(f=1,u="AFTER",t=!0):"DURING"!==u||r||O(),t){var l={progress:f,state:u,scrollDirection:o},a=u!=n,d=function(e){s.trigger(e,l)};a&&"DURING"!==n&&(d("enter"),d("BEFORE"===n?"start":"end")),d("progress"),a&&"DURING"!==u&&(d("BEFORE"===u?"start":"end"),d("leave"))}return s}return f};var m,w,y=function(){d={start:g+c.offset},i&&c.triggerElement&&(d.start-=i.info("size")*c.triggerHook),d.end=d.start+c.duration},S=function(e){r&&C("duration",r.call(s))&&!e&&(s.trigger("change",{what:"duration",newval:c.duration}),s.trigger("shift",{reason:"duration"}))},E=function(e){var t=0,n=c.triggerElement;if(i&&(n||g>0)){if(n)if(n.parentNode){for(var r=i.info(),l=o.get.offset(r.container),a=r.vertical?"top":"left";n.parentNode.hasAttribute("data-scrollmagic-pin-spacer");)n=n.parentNode;var u=o.get.offset(n);r.isDocument||(l[a]-=i.scrollPos()),t=u[a]-l[a]}else v(2,"WARNING: triggerElement was removed from DOM and will be reset to",void 0),s.triggerElement(void 0);var f=t!=g;g=t,f&&!e&&s.trigger("shift",{reason:"triggerElementPosition"})}},b=function(e){c.triggerHook>0&&s.trigger("shift",{reason:"containerResize"})},R=o.extend(n.validate,{duration:function(e){if(o.type.String(e)&&e.match(/^(\.|\d)*\d+%$/)){var t=parseFloat(e)/100;e=function(){return i?i.info("size")*t:0}}if(o.type.Function(e)){r=e;try{e=parseFloat(r.call(s))}catch(t){e=-1}}if(e=parseFloat(e),!o.type.Number(e)||e<0)throw r?(r=void 0,['Invalid return value of supplied function for option "duration":',e]):['Invalid value for option "duration":',e];return e}}),T=function(e){(e=arguments.length?[e]:Object.keys(R)).forEach(function(e,t){var n;if(R[e])try{n=R[e](c[e])}catch(t){n=a[e];var r=o.type.String(t)?[t]:t;o.type.Array(r)?(r[0]="ERROR: "+r[0],r.unshift(1),v.apply(this,r)):v(1,"ERROR: Problem executing validation callback for option '"+e+"':",t.message)}finally{c[e]=n}})},C=function(e,t){var n=!1,o=c[e];return c[e]!=t&&(c[e]=t,T(e),n=o!=c[e]),n},x=function(e){s[e]||(s[e]=function(t){return arguments.length?("duration"===e&&(r=void 0),C(e,t)&&(s.trigger("change",{what:e,newval:c[e]}),n.shifts.indexOf(e)>-1&&s.trigger("shift",{reason:e})),s):c[e]})};this.controller=function(){return i},this.state=function(){return u},this.scrollOffset=function(){return d.start},this.triggerPosition=function(){var e=c.offset;return i&&(c.triggerElement?e+=g:e+=i.info("size")*s.triggerHook()),e},s.on("shift.internal",function(e){var t="duration"===e.reason;("AFTER"===u&&t||"DURING"===u&&0===c.duration)&&O(),t&&F()}).on("progress.internal",function(e){O()}).on("add.internal",function(e){F()}).on("destroy.internal",function(e){s.removePin(e.reset)});var O=function(e){if(m&&i){var t=i.info(),n=w.spacer.firstChild;if(e||"DURING"!==u){var r={position:w.inFlow?"relative":"absolute",top:0,left:0},l=o.css(n,"position")!=r.position;w.pushFollowers?c.duration>0&&("AFTER"===u&&0===parseFloat(o.css(w.spacer,"padding-top"))?l=!0:"BEFORE"===u&&0===parseFloat(o.css(w.spacer,"padding-bottom"))&&(l=!0)):r[t.vertical?"top":"left"]=c.duration*f,o.css(n,r),l&&F()}else{"fixed"!=o.css(n,"position")&&(o.css(n,{position:"fixed"}),F());var a=o.get.offset(w.spacer,!0),s=c.reverse||0===c.duration?t.scrollPos-d.start:Math.round(f*c.duration*10)/10;a[t.vertical?"top":"left"]+=s,o.css(w.spacer.firstChild,{top:a.top,left:a.left})}}},F=function(){if(m&&i&&w.inFlow){var e="DURING"===u,t=i.info("vertical"),n=w.spacer.firstChild,r=o.isMarginCollapseType(o.css(w.spacer,"display")),l={};w.relSize.width||w.relSize.autoFullWidth?e?o.css(m,{width:o.get.width(w.spacer)}):o.css(m,{width:"100%"}):(l["min-width"]=o.get.width(t?m:n,!0,!0),l.width=e?l["min-width"]:"auto"),w.relSize.height?e?o.css(m,{height:o.get.height(w.spacer)-(w.pushFollowers?c.duration:0)}):o.css(m,{height:"100%"}):(l["min-height"]=o.get.height(t?n:m,!0,!r),l.height=e?l["min-height"]:"auto"),w.pushFollowers&&(l["padding"+(t?"Top":"Left")]=c.duration*f,l["padding"+(t?"Bottom":"Right")]=c.duration*(1-f)),o.css(w.spacer,l)}},I=function(){i&&m&&"DURING"===u&&!i.info("isDocument")&&O()},N=function(){i&&m&&"DURING"===u&&((w.relSize.width||w.relSize.autoFullWidth)&&o.get.width(window)!=o.get.width(w.spacer.parentNode)||w.relSize.height&&o.get.height(window)!=o.get.height(w.spacer.parentNode))&&F()},P=function(e){i&&m&&"DURING"===u&&!i.info("isDocument")&&(e.preventDefault(),i._setScrollPos(i.info("scrollPos")-((e.wheelDelta||e[i.info("vertical")?"wheelDeltaY":"wheelDeltaX"])/3||30*-e.detail)))};this.setPin=function(e,t){var n=t&&t.hasOwnProperty("pushFollowers");if(t=o.extend({},{pushFollowers:!0,spacerClass:"scrollmagic-pin-spacer"},t),!(e=o.get.elements(e)[0]))return v(1,"ERROR calling method 'setPin()': Invalid pin element supplied."),s;if("fixed"===o.css(e,"position"))return v(1,"ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'."),s;if(m){if(m===e)return s;s.removePin()}var r=(m=e).parentNode.style.display,i=["top","left","bottom","right","margin","marginLeft","marginRight","marginTop","marginBottom"];m.parentNode.style.display="none";var l="absolute"!=o.css(m,"position"),a=o.css(m,i.concat(["display"])),u=o.css(m,["width","height"]);m.parentNode.style.display=r,!l&&t.pushFollowers&&(v(2,"WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled."),t.pushFollowers=!1),window.setTimeout(function(){m&&0===c.duration&&n&&t.pushFollowers&&v(2,"WARNING: pushFollowers =",!0,"has no effect, when scene duration is 0.")},0);var f=m.parentNode.insertBefore(document.createElement("div"),m),d=o.extend(a,{position:l?"relative":"absolute",boxSizing:"content-box",mozBoxSizing:"content-box",webkitBoxSizing:"content-box"});if(l||o.extend(d,o.css(m,["width","height"])),o.css(f,d),f.setAttribute("data-scrollmagic-pin-spacer",""),o.addClass(f,t.spacerClass),w={spacer:f,relSize:{width:"%"===u.width.slice(-1),height:"%"===u.height.slice(-1),autoFullWidth:"auto"===u.width&&l&&o.isMarginCollapseType(a.display)},pushFollowers:t.pushFollowers,inFlow:l},!m.___origStyle){m.___origStyle={};var g=m.style,p=i.concat(["width","height","position","boxSizing","mozBoxSizing","webkitBoxSizing"]);p.forEach(function(e){m.___origStyle[e]=g[e]||""})}return w.relSize.width&&o.css(f,{width:u.width}),w.relSize.height&&o.css(f,{height:u.height}),f.appendChild(m),o.css(m,{position:l?"relative":"absolute",margin:"auto",top:"auto",left:"auto",bottom:"auto",right:"auto"}),(w.relSize.width||w.relSize.autoFullWidth)&&o.css(m,{boxSizing:"border-box",mozBoxSizing:"border-box",webkitBoxSizing:"border-box"}),window.addEventListener("scroll",I),window.addEventListener("resize",I),window.addEventListener("resize",N),m.addEventListener("mousewheel",P),m.addEventListener("DOMMouseScroll",P),v(3,"added pin"),O(),s},this.removePin=function(e){if(m){if("DURING"===u&&O(!0),e||!i){var t=w.spacer.firstChild;if(t.hasAttribute("data-scrollmagic-pin-spacer")){var n=w.spacer.style,r={};["margin","marginLeft","marginRight","marginTop","marginBottom"].forEach(function(e){r[e]=n[e]||""}),o.css(t,r)}w.spacer.parentNode.insertBefore(t,w.spacer),w.spacer.parentNode.removeChild(w.spacer),m.parentNode.hasAttribute("data-scrollmagic-pin-spacer")||(o.css(m,m.___origStyle),delete m.___origStyle)}window.removeEventListener("scroll",I),window.removeEventListener("resize",I),window.removeEventListener("resize",N),m.removeEventListener("mousewheel",P),m.removeEventListener("DOMMouseScroll",P),m=void 0,v(3,"removed pin (reset: "+(e?"true":"false")+")")}return s};var A,_=[];return s.on("destroy.internal",function(e){s.removeClassToggle(e.reset)}),this.setClassToggle=function(e,t){var n=o.get.elements(e);return 0!==n.length&&o.type.String(t)?(_.length>0&&s.removeClassToggle(),A=t,_=n,s.on("enter.internal_class leave.internal_class",function(e){var t="enter"===e.type?o.addClass:o.removeClass;_.forEach(function(e,n){t(e,A)})}),s):(v(1,"ERROR calling method 'setClassToggle()': Invalid "+(0===n.length?"element":"classes")+" supplied."),s)},this.removeClassToggle=function(e){return e&&_.forEach(function(e,t){o.removeClass(e,A)}),s.off("start.internal_class end.internal_class"),A=void 0,_=[],s},function(){for(var e in c)a.hasOwnProperty(e)||(v(2,'WARNING: Unknown option "'+e+'"'),delete c[e]);for(var t in a)x(t);T()}(),s};var n={defaults:{duration:0,offset:0,triggerElement:void 0,triggerHook:.5,reverse:!0,loglevel:2},validate:{offset:function(e){if(e=parseFloat(e),!o.type.Number(e))throw['Invalid value for option "offset":',e];return e},triggerElement:function(e){if(e=e||void 0){var t=o.get.elements(e)[0];if(!t||!t.parentNode)throw['Element defined in option "triggerElement" was not found:',e];e=t}return e},triggerHook:function(e){var t={onCenter:.5,onEnter:1,onLeave:0};if(o.type.Number(e))e=Math.max(0,Math.min(parseFloat(e),1));else{if(!(e in t))throw['Invalid value for option "triggerHook": ',e];e=t[e]}return e},reverse:function(e){return!!e},loglevel:function(e){if(e=parseInt(e),!o.type.Number(e)||e<0||e>3)throw['Invalid value for option "loglevel":',e];return e}},shifts:["duration","offset","triggerHook"]};e.Scene.addOption=function(t,o,r,i){t in n.defaults?e._util.log(1,"[static] ScrollMagic.Scene -> Cannot add Scene option '"+t+"', because it already exists."):(n.defaults[t]=o,n.validate[t]=r,i&&n.shifts.push(t))},e.Scene.extend=function(t){var n=this;e.Scene=function(){return n.apply(this,arguments),this.$super=o.extend({},this),t.apply(this,arguments)||this},o.extend(e.Scene,n),e.Scene.prototype=n.prototype,e.Scene.prototype.constructor=e.Scene},e.Event=function(e,t,n,o){for(var r in o=o||{})this[r]=o[r];return this.type=e,this.target=this.currentTarget=n,this.namespace=t||"",this.timeStamp=this.timestamp=Date.now(),this};var o=e._util=function(e){var t,n={},o=function(e){return parseFloat(e)||0},r=function(t){return t.currentStyle?t.currentStyle:e.getComputedStyle(t)},i=function(t,n,i,l){if((n=n===document?e:n)===e)l=!1;else if(!p.DomElement(n))return 0;t=t.charAt(0).toUpperCase()+t.substr(1).toLowerCase();var a=(i?n["offset"+t]||n["outer"+t]:n["client"+t]||n["inner"+t])||0;if(i&&l){var s=r(n);a+="Height"===t?o(s.marginTop)+o(s.marginBottom):o(s.marginLeft)+o(s.marginRight)}return a},l=function(e){return e.replace(/^[^a-z]+([a-z])/g,"$1").replace(/-([a-z])/g,function(e){return e[1].toUpperCase()})};n.extend=function(e){for(e=e||{},t=1;t<arguments.length;t++)if(arguments[t])for(var n in arguments[t])arguments[t].hasOwnProperty(n)&&(e[n]=arguments[t][n]);return e},n.isMarginCollapseType=function(e){return["block","flex","list-item","table","-webkit-box"].indexOf(e)>-1};var a=0,s=["ms","moz","webkit","o"],c=e.requestAnimationFrame,u=e.cancelAnimationFrame;for(t=0;!c&&t<s.length;++t)c=e[s[t]+"RequestAnimationFrame"],u=e[s[t]+"CancelAnimationFrame"]||e[s[t]+"CancelRequestAnimationFrame"];c||(c=function(t){var n=(new Date).getTime(),o=Math.max(0,16-(n-a)),r=e.setTimeout(function(){t(n+o)},o);return a=n+o,r}),u||(u=function(t){e.clearTimeout(t)}),n.rAF=c.bind(e),n.cAF=u.bind(e);var f=["error","warn","log"],d=e.console||{};for(d.log=d.log||function(){},t=0;t<f.length;t++){var g=f[t];d[g]||(d[g]=d.log)}n.log=function(e){(e>f.length||e<=0)&&(e=f.length);var t=new Date,n=("0"+t.getHours()).slice(-2)+":"+("0"+t.getMinutes()).slice(-2)+":"+("0"+t.getSeconds()).slice(-2)+":"+("00"+t.getMilliseconds()).slice(-3),o=f[e-1],r=Array.prototype.splice.call(arguments,1),i=Function.prototype.bind.call(d[o],d);r.unshift(n),i.apply(d,r)};var p=n.type=function(e){return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/,"$1").toLowerCase()};p.String=function(e){return"string"===p(e)},p.Function=function(e){return"function"===p(e)},p.Array=function(e){return Array.isArray(e)},p.Number=function(e){return!p.Array(e)&&e-parseFloat(e)+1>=0},p.DomElement=function(e){return"object"==typeof HTMLElement||"function"==typeof HTMLElement?e instanceof HTMLElement||e instanceof SVGElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName};var h=n.get={};return h.elements=function(t){var n=[];if(p.String(t))try{t=document.querySelectorAll(t)}catch(e){return n}if("nodelist"===p(t)||p.Array(t)||t instanceof NodeList)for(var o=0,r=n.length=t.length;o<r;o++){var i=t[o];n[o]=p.DomElement(i)?i:h.elements(i)}else(p.DomElement(t)||t===document||t===e)&&(n=[t]);return n},h.scrollTop=function(t){return t&&"number"==typeof t.scrollTop?t.scrollTop:e.pageYOffset||0},h.scrollLeft=function(t){return t&&"number"==typeof t.scrollLeft?t.scrollLeft:e.pageXOffset||0},h.width=function(e,t,n){return i("width",e,t,n)},h.height=function(e,t,n){return i("height",e,t,n)},h.offset=function(e,t){var n={top:0,left:0};if(e&&e.getBoundingClientRect){var o=e.getBoundingClientRect();n.top=o.top,n.left=o.left,t||(n.top+=h.scrollTop(),n.left+=h.scrollLeft())}return n},n.addClass=function(e,t){t&&(e.classList?e.classList.add(t):e.className+=" "+t)},n.removeClass=function(e,t){t&&(e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," "))},n.css=function(e,t){if(p.String(t))return r(e)[l(t)];if(p.Array(t)){var n={},o=r(e);return t.forEach(function(e,t){n[e]=o[l(e)]}),n}for(var i in t){var a=t[i];a==parseFloat(a)&&(a+="px"),e.style[l(i)]=a}},n}(window||{});return e.Scene.prototype.addIndicators=function(){return e._util.log(1,"(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"),this},e.Scene.prototype.removeIndicators=function(){return e._util.log(1,"(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin 'debug.addIndicators'. Please make sure to include plugins/debug.addIndicators.js"),this},e.Scene.prototype.setTween=function(){return e._util.log(1,"(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"),this},e.Scene.prototype.removeTween=function(){return e._util.log(1,"(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin 'animation.gsap'. Please make sure to include plugins/animation.gsap.js"),this},e.Scene.prototype.setVelocity=function(){return e._util.log(1,"(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"),this},e.Scene.prototype.removeVelocity=function(){return e._util.log(1,"(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin 'animation.velocity'. Please make sure to include plugins/animation.velocity.js"),this},e})?o.call(t,n,t,e):o)||(e.exports=r)},function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);n(1),n(9),n(10);var o=n(0),r=n.n(o),i=document.querySelector("body"),l=document.querySelector("html");!function e(){window.requestAnimationFrame(e),i.style.height="".concat(Math.max(i.scrollHeight,i.offsetHeight,l.clientHeight,l.scrollHeight,l.offsetHeight),"px")}();var a=new r.a.Controller;new r.a.Scene({triggerElement:".main"}).setClassToggle(".bar_0","scaleYbar").addTo(a),new r.a.Scene({triggerElement:".main"}).setClassToggle(".bar_1","scaleXbar").addTo(a),new r.a.Scene({triggerElement:".main"}).setClassToggle(".mainContentText","textAnimation").addTo(a),new r.a.Scene({triggerElement:".main"}).setClassToggle(".mainContentImg","opacity").addTo(a),new r.a.Scene({triggerElement:".contentText"}).setClassToggle(".bar_2","scaleXbar").addTo(a),new r.a.Scene({triggerElement:".contentText"}).setClassToggle(".contentImage","opacity").addTo(a),new r.a.Scene({triggerElement:".contentImage"}).setClassToggle(".contentText","textAnimation").addTo(a),new r.a.Scene({triggerElement:".contentImage"}).setClassToggle(".bar_3","scaleXbar").addTo(a),new r.a.Scene({triggerElement:".contentImage"}).setClassToggle(".titleContent","opacity").addTo(a),new r.a.Scene({triggerElement:".titleContent"}).setClassToggle(".contentText_2","textAnimation").addTo(a),new r.a.Scene({triggerElement:".titleContent"}).setClassToggle(".contentImage_2","opacity").addTo(a),new r.a.Scene({triggerElement:".imageContainer_2"}).setClassToggle(".imageUp","opacity").addTo(a)},function(e,t,n){},function(e,t,n){}]);
//# sourceMappingURL=bundle.movIn.d30c30a1b2bd6ad3fc76.js.map