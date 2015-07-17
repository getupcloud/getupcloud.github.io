/*! jQuery UI - v1.10.0 - 2013-02-11
* http://jqueryui.com
* Includes: jquery.ui.effect.js
* Copyright (c) 2013 jQuery Foundation and other contributors Licensed MIT */

jQuery.effects||function(e,t){var n="ui-effects-";e.effects={effect:{}},function(e,t){function h(e,t,n){var r=u[t.type]||{};return e==null?n||!t.def?null:t.def:(e=r.floor?~~e:parseFloat(e),isNaN(e)?t.def:r.mod?(e+r.mod)%r.mod:0>e?0:r.max<e?r.max:e)}function p(t){var n=s(),r=n._rgba=[];return t=t.toLowerCase(),c(i,function(e,i){var s,u=i.re.exec(t),a=u&&i.parse(u),f=i.space||"rgba";if(a)return s=n[f](a),n[o[f].cache]=s[o[f].cache],r=n._rgba=s._rgba,!1}),r.length?(r.join()==="0,0,0,0"&&e.extend(r,l.transparent),n):l[t]}function d(e,t,n){return n=(n+1)%1,n*6<1?e+(t-e)*n*6:n*2<1?t:n*3<2?e+(t-e)*(2/3-n)*6:e}var n="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,i=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1]*2.55,e[2]*2.55,e[3]*2.55,e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],s=e.Color=function(t,n,r,i){return new e.Color.fn.parse(t,n,r,i)},o={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},u={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},a=s.support={},f=e("<p>")[0],l,c=e.each;f.style.cssText="background-color:rgba(1,1,1,.5)",a.rgba=f.style.backgroundColor.indexOf("rgba")>-1,c(o,function(e,t){t.cache="_"+e,t.props.alpha={idx:3,type:"percent",def:1}}),s.fn=e.extend(s.prototype,{parse:function(n,r,i,u){if(n===t)return this._rgba=[null,null,null,null],this;if(n.jquery||n.nodeType)n=e(n).css(r),r=t;var a=this,f=e.type(n),d=this._rgba=[];r!==t&&(n=[n,r,i,u],f="array");if(f==="string")return this.parse(p(n)||l._default);if(f==="array")return c(o.rgba.props,function(e,t){d[t.idx]=h(n[t.idx],t)}),this;if(f==="object")return n instanceof s?c(o,function(e,t){n[t.cache]&&(a[t.cache]=n[t.cache].slice())}):c(o,function(t,r){var i=r.cache;c(r.props,function(e,t){if(!a[i]&&r.to){if(e==="alpha"||n[e]==null)return;a[i]=r.to(a._rgba)}a[i][t.idx]=h(n[e],t,!0)}),a[i]&&e.inArray(null,a[i].slice(0,3))<0&&(a[i][3]=1,r.from&&(a._rgba=r.from(a[i])))}),this},is:function(e){var t=s(e),n=!0,r=this;return c(o,function(e,i){var s,o=t[i.cache];return o&&(s=r[i.cache]||i.to&&i.to(r._rgba)||[],c(i.props,function(e,t){if(o[t.idx]!=null)return n=o[t.idx]===s[t.idx],n})),n}),n},_space:function(){var e=[],t=this;return c(o,function(n,r){t[r.cache]&&e.push(n)}),e.pop()},transition:function(e,t){var n=s(e),r=n._space(),i=o[r],a=this.alpha()===0?s("transparent"):this,f=a[i.cache]||i.to(a._rgba),l=f.slice();return n=n[i.cache],c(i.props,function(e,r){var i=r.idx,s=f[i],o=n[i],a=u[r.type]||{};if(o===null)return;s===null?l[i]=o:(a.mod&&(o-s>a.mod/2?s+=a.mod:s-o>a.mod/2&&(s-=a.mod)),l[i]=h((o-s)*t+s,r))}),this[r](l)},blend:function(t){if(this._rgba[3]===1)return this;var n=this._rgba.slice(),r=n.pop(),i=s(t)._rgba;return s(e.map(n,function(e,t){return(1-r)*i[t]+r*e}))},toRgbaString:function(){var t="rgba(",n=e.map(this._rgba,function(e,t){return e==null?t>2?1:0:e});return n[3]===1&&(n.pop(),t="rgb("),t+n.join()+")"},toHslaString:function(){var t="hsla(",n=e.map(this.hsla(),function(e,t){return e==null&&(e=t>2?1:0),t&&t<3&&(e=Math.round(e*100)+"%"),e});return n[3]===1&&(n.pop(),t="hsl("),t+n.join()+")"},toHexString:function(t){var n=this._rgba.slice(),r=n.pop();return t&&n.push(~~(r*255)),"#"+e.map(n,function(e){return e=(e||0).toString(16),e.length===1?"0"+e:e}).join("")},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()}}),s.fn.parse.prototype=s.fn,o.hsla.to=function(e){if(e[0]==null||e[1]==null||e[2]==null)return[null,null,null,e[3]];var t=e[0]/255,n=e[1]/255,r=e[2]/255,i=e[3],s=Math.max(t,n,r),o=Math.min(t,n,r),u=s-o,a=s+o,f=a*.5,l,c;return o===s?l=0:t===s?l=60*(n-r)/u+360:n===s?l=60*(r-t)/u+120:l=60*(t-n)/u+240,u===0?c=0:f<=.5?c=u/a:c=u/(2-a),[Math.round(l)%360,c,f,i==null?1:i]},o.hsla.from=function(e){if(e[0]==null||e[1]==null||e[2]==null)return[null,null,null,e[3]];var t=e[0]/360,n=e[1],r=e[2],i=e[3],s=r<=.5?r*(1+n):r+n-r*n,o=2*r-s;return[Math.round(d(o,s,t+1/3)*255),Math.round(d(o,s,t)*255),Math.round(d(o,s,t-1/3)*255),i]},c(o,function(n,i){var o=i.props,u=i.cache,a=i.to,f=i.from;s.fn[n]=function(n){a&&!this[u]&&(this[u]=a(this._rgba));if(n===t)return this[u].slice();var r,i=e.type(n),l=i==="array"||i==="object"?n:arguments,p=this[u].slice();return c(o,function(e,t){var n=l[i==="object"?e:t.idx];n==null&&(n=p[t.idx]),p[t.idx]=h(n,t)}),f?(r=s(f(p)),r[u]=p,r):s(p)},c(o,function(t,i){if(s.fn[t])return;s.fn[t]=function(s){var o=e.type(s),u=t==="alpha"?this._hsla?"hsla":"rgba":n,a=this[u](),f=a[i.idx],l;return o==="undefined"?f:(o==="function"&&(s=s.call(this,f),o=e.type(s)),s==null&&i.empty?this:(o==="string"&&(l=r.exec(s),l&&(s=f+parseFloat(l[2])*(l[1]==="+"?1:-1))),a[i.idx]=s,this[u](a)))}})}),s.hook=function(t){var n=t.split(" ");c(n,function(t,n){e.cssHooks[n]={set:function(t,r){var i,o,u="";if(r!=="transparent"&&(e.type(r)!=="string"||(i=p(r)))){r=s(i||r);if(!a.rgba&&r._rgba[3]!==1){o=n==="backgroundColor"?t.parentNode:t;while((u===""||u==="transparent")&&o&&o.style)try{u=e.css(o,"backgroundColor"),o=o.parentNode}catch(f){}r=r.blend(u&&u!=="transparent"?u:"_default")}r=r.toRgbaString()}try{t.style[n]=r}catch(f){}}},e.fx.step[n]=function(t){t.colorInit||(t.start=s(t.elem,n),t.end=s(t.end),t.colorInit=!0),e.cssHooks[n].set(t.elem,t.start.transition(t.end,t.pos))}})},s.hook(n),e.cssHooks.borderColor={expand:function(e){var t={};return c(["Top","Right","Bottom","Left"],function(n,r){t["border"+r+"Color"]=e}),t}},l=e.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function i(t){var n,r,i=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,s={};if(i&&i.length&&i[0]&&i[i[0]]){r=i.length;while(r--)n=i[r],typeof i[n]=="string"&&(s[e.camelCase(n)]=i[n])}else for(n in i)typeof i[n]=="string"&&(s[n]=i[n]);return s}function s(t,n){var i={},s,o;for(s in n)o=n[s],t[s]!==o&&!r[s]&&(e.fx.step[s]||!isNaN(parseFloat(o)))&&(i[s]=o);return i}var n=["add","remove","toggle"],r={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,n){e.fx.step[n]=function(e){if(e.end!=="none"&&!e.setAttr||e.pos===1&&!e.setAttr)jQuery.style(e.elem,n,e.end),e.setAttr=!0}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}),e.effects.animateClass=function(t,r,o,u){var a=e.speed(r,o,u);return this.queue(function(){var r=e(this),o=r.attr("class")||"",u,f=a.children?r.find("*").addBack():r;f=f.map(function(){var t=e(this);return{el:t,start:i(this)}}),u=function(){e.each(n,function(e,n){t[n]&&r[n+"Class"](t[n])})},u(),f=f.map(function(){return this.end=i(this.el[0]),this.diff=s(this.start,this.end),this}),r.attr("class",o),f=f.map(function(){var t=this,n=e.Deferred(),r=e.extend({},a,{queue:!1,complete:function(){n.resolve(t)}});return this.el.animate(this.diff,r),n.promise()}),e.when.apply(e,f.get()).done(function(){u(),e.each(arguments,function(){var t=this.el;e.each(this.diff,function(e){t.css(e,"")})}),a.complete.call(r[0])})})},e.fn.extend({_addClass:e.fn.addClass,addClass:function(t,n,r,i){return n?e.effects.animateClass.call(this,{add:t},n,r,i):this._addClass(t)},_removeClass:e.fn.removeClass,removeClass:function(t,n,r,i){return n?e.effects.animateClass.call(this,{remove:t},n,r,i):this._removeClass(t)},_toggleClass:e.fn.toggleClass,toggleClass:function(n,r,i,s,o){return typeof r=="boolean"||r===t?i?e.effects.animateClass.call(this,r?{add:n}:{remove:n},i,s,o):this._toggleClass(n,r):e.effects.animateClass.call(this,{toggle:n},r,i,s)},switchClass:function(t,n,r,i,s){return e.effects.animateClass.call(this,{add:n,remove:t},r,i,s)}})}(),function(){function r(t,n,r,i){e.isPlainObject(t)&&(n=t,t=t.effect),t={effect:t},n==null&&(n={}),e.isFunction(n)&&(i=n,r=null,n={});if(typeof n=="number"||e.fx.speeds[n])i=r,r=n,n={};return e.isFunction(r)&&(i=r,r=null),n&&e.extend(t,n),r=r||n.duration,t.duration=e.fx.off?0:typeof r=="number"?r:r in e.fx.speeds?e.fx.speeds[r]:e.fx.speeds._default,t.complete=i||n.complete,t}function i(t){return!t||typeof t=="number"||e.fx.speeds[t]?!0:typeof t=="string"&&!e.effects.effect[t]}e.extend(e.effects,{version:"1.10.0",save:function(e,t){for(var r=0;r<t.length;r++)t[r]!==null&&e.data(n+t[r],e[0].style[t[r]])},restore:function(e,r){var i,s;for(s=0;s<r.length;s++)r[s]!==null&&(i=e.data(n+r[s]),i===t&&(i=""),e.css(r[s],i))},setMode:function(e,t){return t==="toggle"&&(t=e.is(":hidden")?"show":"hide"),t},getBaseline:function(e,t){var n,r;switch(e[0]){case"top":n=0;break;case"middle":n=.5;break;case"bottom":n=1;break;default:n=e[0]/t.height}switch(e[1]){case"left":r=0;break;case"center":r=.5;break;case"right":r=1;break;default:r=e[1]/t.width}return{x:r,y:n}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper"))return t.parent();var n={width:t.outerWidth(!0),height:t.outerHeight(!0),"float":t.css("float")},r=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),i={width:t.width(),height:t.height()},s=document.activeElement;try{s.id}catch(o){s=document.body}return t.wrap(r),(t[0]===s||e.contains(t[0],s))&&e(s).focus(),r=t.parent(),t.css("position")==="static"?(r.css({position:"relative"}),t.css({position:"relative"})):(e.extend(n,{position:t.css("position"),zIndex:t.css("z-index")}),e.each(["top","left","bottom","right"],function(e,r){n[r]=t.css(r),isNaN(parseInt(n[r],10))&&(n[r]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),t.css(i),r.css(n).show()},removeWrapper:function(t){var n=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===n||e.contains(t[0],n))&&e(n).focus()),t},setTransition:function(t,n,r,i){return i=i||{},e.each(n,function(e,n){var s=t.cssUnit(n);s[0]>0&&(i[n]=s[0]*r+s[1])}),i}}),e.fn.extend({effect:function(){function o(n){function u(){e.isFunction(i)&&i.call(r[0]),e.isFunction(n)&&n()}var r=e(this),i=t.complete,o=t.mode;(r.is(":hidden")?o==="hide":o==="show")?u():s.call(r[0],t,u)}var t=r.apply(this,arguments),n=t.mode,i=t.queue,s=e.effects.effect[t.effect];return e.fx.off||!s?n?this[n](t.duration,t.complete):this.each(function(){t.complete&&t.complete.call(this)}):i===!1?this.each(o):this.queue(i||"fx",o)},_show:e.fn.show,show:function(e){if(i(e))return this._show.apply(this,arguments);var t=r.apply(this,arguments);return t.mode="show",this.effect.call(this,t)},_hide:e.fn.hide,hide:function(e){if(i(e))return this._hide.apply(this,arguments);var t=r.apply(this,arguments);return t.mode="hide",this.effect.call(this,t)},__toggle:e.fn.toggle,toggle:function(t){if(i(t)||typeof t=="boolean"||e.isFunction(t))return this.__toggle.apply(this,arguments);var n=r.apply(this,arguments);return n.mode="toggle",this.effect.call(this,n)},cssUnit:function(t){var n=this.css(t),r=[];return e.each(["em","px","%","pt"],function(e,t){n.indexOf(t)>0&&(r=[parseFloat(n),t])}),r}})}(),function(){var t={};e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,n){t[n]=function(t){return Math.pow(t,e+2)}}),e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return e===0||e===1?e:-Math.pow(2,8*(e-1))*Math.sin(((e-1)*80-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){var t,n=4;while(e<((t=Math.pow(2,--n))-1)/11);return 1/Math.pow(4,3-n)-7.5625*Math.pow((t*3-2)/22-e,2)}}),e.each(t,function(t,n){e.easing["easeIn"+t]=n,e.easing["easeOut"+t]=function(e){return 1-n(1-e)},e.easing["easeInOut"+t]=function(e){return e<.5?n(e*2)/2:1-n(e*-2+2)/2}})}()}(jQuery);

/*
    Masked Input plugin for jQuery
    Copyright (c) 2007-2013 Josh Bush (digitalbush.com)
    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
    Version: 1.3.1
*/
(function(e){function t(){var e=document.createElement("input"),t="onpaste";return e.setAttribute(t,""),"function"==typeof e[t]?"paste":"input"}var n,a=t()+".mask",r=navigator.userAgent,i=/iphone/i.test(r),o=/android/i.test(r);e.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},dataName:"rawMaskFn",placeholder:"_"},e.fn.extend({caret:function(e,t){var n;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof e?(t="number"==typeof t?t:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&(n=this.createTextRange(),n.collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),e=0-n.duplicate().moveStart("character",-1e5),t=e+n.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(t,r){var c,l,s,u,f,h;return!t&&this.length>0?(c=e(this[0]),c.data(e.mask.dataName)()):(r=e.extend({placeholder:e.mask.placeholder,completed:null},r),l=e.mask.definitions,s=[],u=h=t.length,f=null,e.each(t.split(""),function(e,t){"?"==t?(h--,u=e):l[t]?(s.push(RegExp(l[t])),null===f&&(f=s.length-1)):s.push(null)}),this.trigger("unmask").each(function(){function c(e){for(;h>++e&&!s[e];);return e}function d(e){for(;--e>=0&&!s[e];);return e}function m(e,t){var n,a;if(!(0>e)){for(n=e,a=c(t);h>n;n++)if(s[n]){if(!(h>a&&s[n].test(R[a])))break;R[n]=R[a],R[a]=r.placeholder,a=c(a)}b(),x.caret(Math.max(f,e))}}function p(e){var t,n,a,i;for(t=e,n=r.placeholder;h>t;t++)if(s[t]){if(a=c(t),i=R[t],R[t]=n,!(h>a&&s[a].test(i)))break;n=i}}function g(e){var t,n,a,r=e.which;8===r||46===r||i&&127===r?(t=x.caret(),n=t.begin,a=t.end,0===a-n&&(n=46!==r?d(n):a=c(n-1),a=46===r?c(a):a),k(n,a),m(n,a-1),e.preventDefault()):27==r&&(x.val(S),x.caret(0,y()),e.preventDefault())}function v(t){var n,a,i,l=t.which,u=x.caret();t.ctrlKey||t.altKey||t.metaKey||32>l||l&&(0!==u.end-u.begin&&(k(u.begin,u.end),m(u.begin,u.end-1)),n=c(u.begin-1),h>n&&(a=String.fromCharCode(l),s[n].test(a)&&(p(n),R[n]=a,b(),i=c(n),o?setTimeout(e.proxy(e.fn.caret,x,i),0):x.caret(i),r.completed&&i>=h&&r.completed.call(x))),t.preventDefault())}function k(e,t){var n;for(n=e;t>n&&h>n;n++)s[n]&&(R[n]=r.placeholder)}function b(){x.val(R.join(""))}function y(e){var t,n,a=x.val(),i=-1;for(t=0,pos=0;h>t;t++)if(s[t]){for(R[t]=r.placeholder;pos++<a.length;)if(n=a.charAt(pos-1),s[t].test(n)){R[t]=n,i=t;break}if(pos>a.length)break}else R[t]===a.charAt(pos)&&t!==u&&(pos++,i=t);return e?b():u>i+1?(x.val(""),k(0,h)):(b(),x.val(x.val().substring(0,i+1))),u?t:f}var x=e(this),R=e.map(t.split(""),function(e){return"?"!=e?l[e]?r.placeholder:e:void 0}),S=x.val();x.data(e.mask.dataName,function(){return e.map(R,function(e,t){return s[t]&&e!=r.placeholder?e:null}).join("")}),x.attr("readonly")||x.one("unmask",function(){x.unbind(".mask").removeData(e.mask.dataName)}).bind("focus.mask",function(){clearTimeout(n);var e;S=x.val(),e=y(),n=setTimeout(function(){b(),e==t.length?x.caret(0,e):x.caret(e)},10)}).bind("blur.mask",function(){y(),x.val()!=S&&x.change()}).bind("keydown.mask",g).bind("keypress.mask",v).bind(a,function(){setTimeout(function(){var e=y(!0);x.caret(e),r.completed&&e==x.val().length&&r.completed.call(x)},0)}),y()}))}})})(jQuery);


// VERSION: 2.3 LAST UPDATE: 11.07.2013
/* 
 * Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
 * 
 * Made by Wilq32, wilq32@gmail.com, Wroclaw, Poland, 01.2009
 * Website: http://code.google.com/p/jqueryrotate/ 
 */
(function(k){for(var d,f,l=document.getElementsByTagName("head")[0].style,h=["transformProperty","WebkitTransform","OTransform","msTransform","MozTransform"],g=0;g<h.length;g++)void 0!==l[h[g]]&&(d=h[g]);d&&(f=d.replace(/[tT]ransform/,"TransformOrigin"),"T"==f[0]&&(f[0]="t"));eval('IE = "v"=="\v"');jQuery.fn.extend({rotate:function(a){if(0!==this.length&&"undefined"!=typeof a){"number"==typeof a&&(a={angle:a});for(var b=[],c=0,d=this.length;c<d;c++){var e=this.get(c);if(e.Wilq32&&e.Wilq32.PhotoEffect)e.Wilq32.PhotoEffect._handleRotation(a);
else{var f=k.extend(!0,{},a),e=(new Wilq32.PhotoEffect(e,f))._rootObj;b.push(k(e))}}return b}},getRotateAngle:function(){for(var a=[],b=0,c=this.length;b<c;b++){var d=this.get(b);d.Wilq32&&d.Wilq32.PhotoEffect&&(a[b]=d.Wilq32.PhotoEffect._angle)}return a},stopRotate:function(){for(var a=0,b=this.length;a<b;a++){var c=this.get(a);c.Wilq32&&c.Wilq32.PhotoEffect&&clearTimeout(c.Wilq32.PhotoEffect._timer)}}});Wilq32=window.Wilq32||{};Wilq32.PhotoEffect=function(){return d?function(a,b){a.Wilq32={PhotoEffect:this};
this._img=this._rootObj=this._eventObj=a;this._handleRotation(b)}:function(a,b){this._img=a;this._onLoadDelegate=[b];this._rootObj=document.createElement("span");this._rootObj.style.display="inline-block";this._rootObj.Wilq32={PhotoEffect:this};a.parentNode.insertBefore(this._rootObj,a);if(a.complete)this._Loader();else{var c=this;jQuery(this._img).bind("load",function(){c._Loader()})}}}();Wilq32.PhotoEffect.prototype={_setupParameters:function(a){this._parameters=this._parameters||{};"number"!==
typeof this._angle&&(this._angle=0);"number"===typeof a.angle&&(this._angle=a.angle);this._parameters.animateTo="number"===typeof a.animateTo?a.animateTo:this._angle;this._parameters.step=a.step||this._parameters.step||null;this._parameters.easing=a.easing||this._parameters.easing||this._defaultEasing;this._parameters.duration=a.duration||this._parameters.duration||1E3;this._parameters.callback=a.callback||this._parameters.callback||this._emptyFunction;this._parameters.center=a.center||this._parameters.center||
["50%","50%"];this._rotationCenterX="string"==typeof this._parameters.center[0]?parseInt(this._parameters.center[0],10)/100*this._imgWidth*this._aspectW:this._parameters.center[0];this._rotationCenterY="string"==typeof this._parameters.center[1]?parseInt(this._parameters.center[1],10)/100*this._imgHeight*this._aspectH:this._parameters.center[1];a.bind&&a.bind!=this._parameters.bind&&this._BindEvents(a.bind)},_emptyFunction:function(){},_defaultEasing:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-
1)+c},_handleRotation:function(a,b){d||this._img.complete||b?(this._setupParameters(a),this._angle==this._parameters.animateTo?this._rotate(this._angle):this._animateStart()):this._onLoadDelegate.push(a)},_BindEvents:function(a){if(a&&this._eventObj){if(this._parameters.bind){var b=this._parameters.bind,c;for(c in b)b.hasOwnProperty(c)&&jQuery(this._eventObj).unbind(c,b[c])}this._parameters.bind=a;for(c in a)a.hasOwnProperty(c)&&jQuery(this._eventObj).bind(c,a[c])}},_Loader:function(){return IE?function(){var a=
this._img.width,b=this._img.height;this._imgWidth=a;this._imgHeight=b;this._img.parentNode.removeChild(this._img);this._vimage=this.createVMLNode("image");this._vimage.src=this._img.src;this._vimage.style.height=b+"px";this._vimage.style.width=a+"px";this._vimage.style.position="absolute";this._vimage.style.top="0px";this._vimage.style.left="0px";this._aspectW=this._aspectH=1;this._container=this.createVMLNode("group");this._container.style.width=a;this._container.style.height=b;this._container.style.position=
"absolute";this._container.style.top="0px";this._container.style.left="0px";this._container.setAttribute("coordsize",a-1+","+(b-1));this._container.appendChild(this._vimage);this._rootObj.appendChild(this._container);this._rootObj.style.position="relative";this._rootObj.style.width=a+"px";this._rootObj.style.height=b+"px";this._rootObj.setAttribute("id",this._img.getAttribute("id"));this._rootObj.className=this._img.className;for(this._eventObj=this._rootObj;a=this._onLoadDelegate.shift();)this._handleRotation(a,
!0)}:function(){this._rootObj.setAttribute("id",this._img.getAttribute("id"));this._rootObj.className=this._img.className;this._imgWidth=this._img.naturalWidth;this._imgHeight=this._img.naturalHeight;var a=Math.sqrt(this._imgHeight*this._imgHeight+this._imgWidth*this._imgWidth);this._width=3*a;this._height=3*a;this._aspectW=this._img.offsetWidth/this._img.naturalWidth;this._aspectH=this._img.offsetHeight/this._img.naturalHeight;this._img.parentNode.removeChild(this._img);this._canvas=document.createElement("canvas");
this._canvas.setAttribute("width",this._width);this._canvas.style.position="relative";this._canvas.style.left=-this._img.height*this._aspectW+"px";this._canvas.style.top=-this._img.width*this._aspectH+"px";this._canvas.Wilq32=this._rootObj.Wilq32;this._rootObj.appendChild(this._canvas);this._rootObj.style.width=this._img.width*this._aspectW+"px";this._rootObj.style.height=this._img.height*this._aspectH+"px";this._eventObj=this._canvas;for(this._cnv=this._canvas.getContext("2d");a=this._onLoadDelegate.shift();)this._handleRotation(a,
!0)}}(),_animateStart:function(){this._timer&&clearTimeout(this._timer);this._animateStartTime=+new Date;this._animateStartAngle=this._angle;this._animate()},_animate:function(){var a=+new Date,b=a-this._animateStartTime>this._parameters.duration;if(b&&!this._parameters.animatedGif)clearTimeout(this._timer);else{if(this._canvas||this._vimage||this._img)a=this._parameters.easing(0,a-this._animateStartTime,this._animateStartAngle,this._parameters.animateTo-this._animateStartAngle,this._parameters.duration),
this._rotate(~~(10*a)/10);this._parameters.step&&this._parameters.step(this._angle);var c=this;this._timer=setTimeout(function(){c._animate.call(c)},10)}this._parameters.callback&&b&&(this._angle=this._parameters.animateTo,this._rotate(this._angle),this._parameters.callback.call(this._rootObj))},_rotate:function(){var a=Math.PI/180;return IE?function(a){this._angle=a;this._container.style.rotation=a%360+"deg";this._vimage.style.top=-(this._rotationCenterY-this._imgHeight/2)+"px";this._vimage.style.left=
-(this._rotationCenterX-this._imgWidth/2)+"px";this._container.style.top=this._rotationCenterY-this._imgHeight/2+"px";this._container.style.left=this._rotationCenterX-this._imgWidth/2+"px"}:d?function(a){this._angle=a;this._img.style[d]="rotate("+a%360+"deg)";this._img.style[f]=this._parameters.center.join(" ")}:function(b){this._angle=b;b=b%360*a;this._canvas.width=this._width;this._canvas.height=this._height;this._cnv.translate(this._imgWidth*this._aspectW,this._imgHeight*this._aspectH);this._cnv.translate(this._rotationCenterX,
this._rotationCenterY);this._cnv.rotate(b);this._cnv.translate(-this._rotationCenterX,-this._rotationCenterY);this._cnv.scale(this._aspectW,this._aspectH);this._cnv.drawImage(this._img,0,0)}}()};IE&&(Wilq32.PhotoEffect.prototype.createVMLNode=function(){document.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)");try{return!document.namespaces.rvml&&document.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),function(a){return document.createElement("<rvml:"+a+' class="rvml">')}}catch(a){return function(a){return document.createElement("<"+
a+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}}())})(jQuery);

/* Main */

!function() {

    'use strict';

    /*
     * Function getQueryString.
     * Return querystring value from URL.
     * Usage: $.getQueryString('name');
     */
    $.extend({
        getQueryString: function (name) {
            function parseParams() {
                var params = {},
                    e,
                    a = /\+/g,  // Regex for replacing addition symbol with a space
                    r = /([^&=]+)=?([^&]*)/g,
                    d = function (s) { return decodeURIComponent(s.replace(a, " ")); },
                    q = window.location.search.substring(1);

                while (e = r.exec(q))
                    params[d(e[1])] = d(e[2]);

                return params;
            }

            if (!this.queryStringParams)
                this.queryStringParams = parseParams();

            return this.queryStringParams[name];
        }
    });

    /**
     * Mobile resolution? Default is true.
     */
    var is_mobile = true;//Modernizr.mq('only all and (max-width: 480px)');

    /**
     * Getup
     */
    var Getup = window.Getup || {};

    /**
     * Getup
     * Configuration
     */
    Getup.config = {

        /**
         * Height of menu (update on window resize and load)
         */
        menu_height: 70
    };

    /**
     * Anaytics
     */
    Getup.Analytics = {};

    Getup.Analytics.prefix = false;

    /**
     * Anaytics
     * Tracker map
     */
    Getup.Analytics.map = {
        'en' : false,
        'pt' : {
            pageviews : {

            // Site
                'home'                              : 'home',
                'everything_you_need'   : 'tudo_voce_precisa',
                'cases'                             : 'cases_pt',
                'multiple_datacenters': 'multiplos_datacenters',
                'dedicated_servers'     : 'servidores_dedicados',
                'faq'                                   : 'faq',
                'trust_is_everything'   : 'confianca_e_tudo',
                'cases_startups'            : 'cases_startups_pt',
                'pricing'                           : 'preco',
                'get_in_touch'              : 'contato',
                'signup'                            : 'cadastro',           
                'terms_of_use'              : 'termos_de_uso',
                'privacy_policy'            : 'politica_privacidade',
                'acceptable_use_policy': 'politica_utilizacao_aceitavel',
                'support_policy'            : 'politica_suporte',

            // Technologies
                'technologies'                      : 'technologias',
                
                'technologies/php'              : 'technologias/php',
                'technologies/ruby'             : 'technologias/ruby',
                'technologies/nodejs'           : 'technologias/nodejs',
                'technologies/python'           : 'technologias/python',
                'technologies/java'             : 'technologias/java',
                'technologies/perl'             : 'technologias/perl',
                'technologies/mysql'            : 'technologias/mysql',
                'technologies/postgresql'   : 'technologias/postgresql',
                'technologies/mongodb'      : 'technologias/mongodb'
            },
            events : {
                // Menu
                'Menu,Link,Pricing'                 : 'Menu,Link,Preço',
                'Menu,Link,Technology'      : 'Menu,Link,Tecnologia',
                'Menu,Link,Get in touch'        : 'Menu,Link,Contato',
                'Menu,External link,Support': 'Menu,Link externo,Suporte',
                'Menu,External link,Blog'       : 'Menu,Link externo,Blog',
                'Menu,Button,Signin'                : 'Menu,Botão,Entrar',
                'Menu,Button,Signup'                : 'Menu,Botão,Criar sua conta',

                // Language
                'Language,Link,Portuguese'  : 'Language,Link,Português',
                'Language,Link,English'     : 'Language,Link,Inglês',               

                // Signup
                'Signup,Button,Free trial'          : 'Cadastro,Botão,Experimente grátis',
                'Signup,Button,Continue'            : 'Cadastro,Botão,Continuar',
                'Signup,Button,Cancel'                  : 'Cadastro,Botão,Cancelar',

                // Home Page
                'Home Page,Button,Drop us a line'   : 'Página Inicial,Botão,Entre em contato',

                // Get in touch
                'Get in touch,Button,Send'          : 'Contato,Botão,Enviar',

                // Footer
                'Footer,Link,Pricing'                       : 'Rodapé,Link,Preço',
                'Footer,Link,Technology'            : 'Rodapé,Link,Tecnologia',
                'Footer,Link,Get in touch'          : 'Rodapé,Link,Contato',
                'Footer,External link,Support'  : 'Rodapé,Link externo,Suporte',
                'Footer,External link,Blog'         : 'Rodapé,Link externo,Blog',

                'Footer,External link,Google+'  : 'Rodapé,Link externo,Google+',
                'Footer,External link,Twitter'  : 'Rodapé,Link externo,Twitter',
                'Footer,External link,Linkedin' : 'Rodapé,Link externo,Linkedin',
                'Footer,External link,Facebook' : 'Rodapé,Link externo,Facebook',
                
                'Footer,Button,Newsletter'          : 'Rodapé,Botão,Newsletter',

                'Footer,Link,Terms of use'          : 'Rodapé,Link,Termos de uso',
                'Footer,Link,Privacy Policy'        : 'Rodapé,Link,Política de privacidade',
                'Footer,Link,Acceptable use policy' : 'Rodapé,Link,PUA',
                'Footer,Link,Support policy'        : 'Rodapé,Link,Política de suporte'
            }
        }
    }

    /**
     * Anaytics
     * Set the prefix
     */
    Getup.Analytics.set_prefix = function(prefix) {

        // Set the prefix
        Getup.Analytics.prefix = prefix;
    };

    /**
     * Anaytics
     * track pageview
     */
    Getup.Analytics.track_pageview = function(tracker) {

        var translated = '/' + Getup.Analytics.prefix + '/' + (Getup.Analytics.map[Getup.Analytics.prefix]
            ? Getup.Analytics.map[Getup.Analytics.prefix]['pageviews'][tracker]
            : tracker);

        // Old track pageview
        //_gaq.push(['_trackPageview', translated]);

        // Track pageview
        ga('send', 'pageview', translated);
    };

    /**
     * Anaytics
     * track event
     */
    Getup.Analytics.track_event = function() {

        // Event
        var track_event = ['send', 'event'];
        var args = arguments;
        var translated = null;
        var track = [];

        if (args.length == 1) {

            translated = (Getup.Analytics.map[Getup.Analytics.prefix]
                ? Getup.Analytics.map[Getup.Analytics.prefix]['events'][args[0]]
                : args[0]);

            track = (Getup.Analytics.prefix.toUpperCase() + ' - ' + translated).split(',');
            
        } else {
            // Add prefix
            if (Getup.Analytics.prefix) {
                track_event.push(Getup.Analytics.prefix);
            }           

            // Add arguments to track event
            // track = track_event.concat();
        }

        // Old tracker event
        // _gaq.push(track_event.concat(track));

        // Track event
        ga.apply(undefined, track_event.concat(track));
    };

    /**
     * Preloader
     */
    Getup.preload = {};

    /**
     * Preloader
     * Configuration
     */
    Getup.preload.config = {};

    /**
     * Preloader
     * Loader content
     */
    Getup.preload.config.content = $('<div id="preloader"><p>fitting the clouds... <span id="percent">0%</span></p></div>');

    /**
     * Preloader
     * Directories configuration
     */
    Getup.preload.config.directories = {
        'image': '/images/'
    };

    /**
     * Preloader
     * Elements
     */
    Getup.preload.elements = {};

    /**
     * Preloader
     * Is loading?
     */
    Getup.preload.loading = false;

    /**
     * Preloader
     * Actual preloader precent
     */
    Getup.preload.percent = 0;

    /**
     * Preloader
     * Number of files to preload
     */
    Getup.preload.total = 0;

    /**
     * Preloader
     * Representative percent value of each file from the total
     */
    Getup.preload.eachLoad = 0;

    /**
     * Preloader
     * Callback function on preloader finish to load all files
     */
    Getup.preload.onComplete = null;

    /**
     * Preloader
     * Initialization
     */
    Getup.preload.init = function(callback) {

        /**
         * Preload
         */
        if (!Getup.elements.body.is('.preloader')) {
            Getup.elements.main.show();
            Getup.elements.footer.show();
            Getup.elements.header.css('top', 0);

            return callback();
        }

        /**
         * Files to donwload on page load (general or mobile)
         */
        // var directory = (is_mobile) ? 'mobile/' : '';
        var directory = '';
        Getup.preload.config.data = [
            {type: 'image', file: 'sprite.png'},
            {type: 'image', file: 'loader.gif'},
            {type: 'image', file: directory + 'icon-up-and-running.png'},
            {type: 'image', file: directory + 'icon-scale-your-app.png'},
            {type: 'image', file: directory + 'icon-bring-us-your-problem.png'},
      {type: 'image', file: directory + 'bgr-header-home.jpg'}
        ];

        /**
         * Number of files to preload
         */
        Getup.preload.total = Getup.preload.config.data.length;

        /**
         * Representative percent value of each file from the total
         */
        Getup.preload.eachLoad = Math.floor(100 / Getup.preload.total);

        /**
         * Append hide loader content to body
         */
        Getup.elements.body.append(Getup.preload.config.content.hide());

        /**
         * Show the loader content and start the loader
         */
        Getup.preload.config.content.fadeIn(function() {
            Getup.preload.elements.percent = $('#percent');
            Getup.preload.elements.text = Getup.preload.config.content.find('p');

            Getup.preload.onComplete = callback;
            Getup.preload.load();
        });
    };

    /**
     * Preloader
     * Load next file
     */
    Getup.preload.load = function() {
        if (Getup.preload.config.data < 1) {
            Getup.preload.percent = 100;
            Getup.preload.updatePercent();

            return Getup.preload.hide();
        }

        var data = Getup.preload.config.data.shift();
        var file = Getup.preload.config.directories[data.type] + data.file;

        var loader = $('<img />');
        loader.load(function() {
            Getup.preload.updatePercent();
            Getup.preload.load();
        });
        loader.attr('src', file);
    };

    /**
     * Preloader
     * Hide preload
     */
    Getup.preload.hide = function() {
        Getup.preload.elements.text.fadeOut(300, function() {
            Getup.elements.main.show();
            Getup.elements.footer.show();
            Getup.elements.header.css('top', 0);

            Getup.elements.body.removeClass('preloader');
            
            Getup.preload.config.content.animate({ height: Getup.config.menu_height }, { easing: 'easeInOutCirc', complete: function() {
                Getup.preload.config.content.fadeOut();

                Getup.preload.onComplete();
            }});
        });
    };

    /**
     * Preloader
     * Update the percent of preload
     */
    Getup.preload.updatePercent = function() {
        Getup.preload.percent += Getup.preload.eachLoad;
        if (Getup.preload.percent > 100) Getup.preload.percent = 100;

        Getup.preload.elements.percent.text(Getup.preload.percent + ' %');
    }

    /**
     * Elements
     */
    Getup.elements = {};

    /**
     * Elements
     * Element: window
     */
    Getup.elements.window = $(window);
  
    /**
     * Elements
     * Element: body
     */
    Getup.elements.bodyWindow = $('body, html');

    /**
     * Elements
     * Element: body
     */
    Getup.elements.body = $('body');

    /**
     * Elements
     * Element: header container
     */
    Getup.elements.header = $('.header-container');

    /**
     * Elements
     * Element: menu control
     */
    Getup.elements.header.menu_control = $('.menu-control');

    /**
     * Elements
     * Element: main container
     */
    Getup.elements.main = $('.main-container'); 

    /**
     * Elements
     * Element: how it works
     */
    Getup.elements.how_it_works = $('#how-it-works');

    /**
     * Elements
     * Element: see more form how it works
     */
    Getup.elements.see_more = Getup.elements.how_it_works.find("a");

    /**
     * Elements
     * Element: sign up
     */
    Getup.elements.signup = $('#sign-up');

   /**
    * Elements
    * Element: dedicated_servers
    */
   Getup.elements.dedicated_servers = $('#dedicated-servers-price');

      /**
    * Elements
    * Element: newsletter
    */
   Getup.elements.newsletter = $('#newsletter');

    /**
     * Elements
     * Element: pricing
     */
    Getup.elements.pricing = $('#pricing')

    /**
     * Elements
     * Element: compare
     */
    Getup.elements.compare = $('#compare')

    /**
     * Elements
     * Element: get in touch
     */
    Getup.elements.get_in_touch = $('#get-in-touch');

    /**
     * Elements
     * Element: section content of sign up
     */
    Getup.elements.signup.header = Getup.elements.signup.find('header');

    /**
     * Elements
     * Element: section button
     */
    Getup.elements.signup.call = Getup.elements.signup.header.find('a');

    /**
     * Elements
     * Element: section content of sign up
     */
    Getup.elements.signup.section = Getup.elements.signup.find('section');

    /**
     * Elements
     * Element: section content of sign up
     */
    Getup.elements.signup.actions = Getup.elements.signup.section.find('.actions');

   /**
    * Elements
    * Element: section content of sign up
    */
   Getup.elements.newsletter.section = Getup.elements.newsletter.find('section');

   /**
    * Elements
    * Element: section content of sign up
    */
   Getup.elements.newsletter.actions = Getup.elements.newsletter.section.find('.actions');

    /**
     * Elements
     * Element: technologies nav
     */
    Getup.elements.technologies_nav = $('#technologies-nav');

    /**
     * Elements
     * Element: footer container
     */
    Getup.elements.footer = $('.footer-container');

    /**
     * Mobile
     */
    Getup.mobile = {};

    /**
     * Mobile Menu
     */
    Getup.mobile.menu = {}

    /**
     * Mobile Menu
     * Configuration
     */
    Getup.mobile.menu.configuration = {

        /**
         * Height of menu when closed
         */
        closed_height : Getup.config.menu_height
    }       

    /**
     * Mobile Menu
     * Open mobile menu
     */
    Getup.mobile.menu.open = function() {

        /**
         * Remove the closed class and set the height to auto
         */
        Getup.elements.header.removeClass('closed').height('auto');

        /**
         * Retrieve the open height.
         */
        var open_height = Getup.elements.header.height();

        /**
         * set the original height to closed.
         */
        Getup.elements.header.height(Getup.mobile.menu.configuration.closed_height);

        /**
         * Animate the height of the menu to open height.
         */
         console.log(open_height);
        Getup.elements.header.animate({ height: open_height }, { queue: false, easing: 'easeInOutCirc' });
    };

    /**
     * Mobile Menu
     * Close mobile menu
     */
    Getup.mobile.menu.close = function() {
        /**
         * Animate the height of the menu to closed height.
         */
        Getup.elements.header.animate({ height: Getup.mobile.menu.configuration.closed_height }, { queue: false, easing: 'easeInOutCirc', complete: function() {

            /**
             * Remove the closed class.
             */
            Getup.elements.header.addClass('closed');
        }});
    };

    /**
     * Mobile Menu
     * Mobile menu toggle status
     */
    Getup.mobile.menu.toggle = function() {
        Getup.elements.header.hasClass('closed') ? Getup.mobile.menu.open() : Getup.mobile.menu.close();
    };  

    /**
     * Articles
     */
    Getup.articles = {};

    /**
     * Articles
     * How it works
     */
    Getup.articles.how_it_works = {};

    /** 
     * Articles
     * How it works
     * Toggle hidden information
     *
     * (element scope)
     */
    Getup.articles.how_it_works.toggle = function() {
        var element = $(this);
        var hidden = element.next();
        var text = element.data('text');

        hidden.slideToggle();

        element.data('text', element.text());
        element.text(text);

        return false;
    };

    /**
     * Articles
     * How it wroks
     * Link
     */
    Getup.articles.how_it_works.link = function() {

        var top = Getup.elements.how_it_works.offset().top - Getup.config.menu_height;

        Getup.elements.bodyWindow.animate({ 'scroll-top': top }, { queue: false, easing: 'easeInOutCirc', complete: function() {


        }});


        return false;
    };

    /**
     * Articles
     * Get in touch
     */
    Getup.articles.get_in_touch = {};

    /**
     * Articles
     * Get in touch
     * Link
     */
    Getup.articles.get_in_touch.link = function() {

        var top = Getup.elements.get_in_touch.offset().top - Getup.config.menu_height;

        Getup.elements.bodyWindow.animate({ 'scroll-top': top }, { queue: false, easing: 'easeInOutCirc', complete: function() {


        }});


        return false;
    };  

    /**
     * Articles
     * Home
     */
    Getup.articles.home = {};

    /**
     * Articles
     * Home
     * Link
     */
    Getup.articles.home.link = function() {

        Getup.elements.bodyWindow.animate({ 'scroll-top': 0 }, { queue: false, easing: 'easeInOutCirc' });

        return false;
    };

    /**
     * Articles
     * Compare
     */
    Getup.articles.compare = {};

    /**
     * Articles
     * Compare
     * Link
     */
    Getup.articles.compare.link = function() {
        if (is_mobile) return false;

        Getup.elements.compare.slideDown();

        var top = Getup.elements.compare.offset().top - Getup.config.menu_height;
        Getup.elements.bodyWindow.animate({ 'scroll-top': top }, { queue: false, easing: 'easeInOutCirc' });

        return false;
    };

   /**
    * Articles
    * Dedicated Servers
    */
   Getup.articles.dedicated_servers = {};

   /**
    * Articles
    * Dedicated Serveres
    * Link
    */
   Getup.articles.dedicated_servers.link = function() {
     var top = Getup.elements.dedicated_servers.offset().top - Getup.config.menu_height;

      Getup.elements.bodyWindow.animate({ 'scroll-top': top }, { queue: false, easing: 'easeInOutCirc', complete: function() {

      }});

      return false;
   };

    /**
     * Articles
     * Sign up
     */
    Getup.articles.sign_up = {};

    /**
     * Articles
     * Sign up
     * Toggle hidden form
     * (element scope)
     */
    
    Getup.articles.sign_up.link = function() {
      var top = Getup.elements.signup.offset().top - Getup.config.menu_height;      

      Getup.articles.sign_up.scrolling = false;

      if (!Getup.articles.sign_up.scrolling) {
         Getup.articles.sign_up.scrolling = true;
        Getup.elements.bodyWindow.animate({ 'scroll-top': top }, { easing: 'easeInOutCirc', complete: function() {

            Getup.elements.signup.header.slideUp();
            Getup.elements.signup.section.slideDown();
            Getup.articles.sign_up.scrolling = false;

        }});
      }
        return false;
    };
    
   // move this later
   $('.sign-up-cancel').on('click', function(ev) {
    ev.preventDefault();

    Getup.elements.signup.header.slideDown();
    Getup.elements.signup.section.slideUp();
   });

   $('.discount-coupon').on('click', function(ev) {
      Getup.articles.sign_up.elements.inputs.couponCode.closest('label').slideDown();
   });

    /**
     * Articles
     * Sign up
     * Elements
     */
    Getup.articles.sign_up.elements = {};

    /**
     *
     */
    Getup.articles.sign_up.elements.form = Getup.elements.signup.find('form');

    /**
     *
     */
    Getup.articles.sign_up.elements.success = $('#success');
    
    /**
     *
     */
    Getup.articles.sign_up.elements.inputs = {};

    /**
     *
     */
    Getup.articles.sign_up.elements.inputs.name = Getup.articles.sign_up.elements.form.find('input[name=name]');

    /**
     *
     */
    Getup.articles.sign_up.elements.inputs.email = Getup.articles.sign_up.elements.form.find('input[name=email]');

    /**
     *
     */
    Getup.articles.sign_up.elements.inputs.password = Getup.articles.sign_up.elements.form.find('input[name=password1]');

   /**
     *
     */
    Getup.articles.sign_up.elements.inputs.passwordConfirm = Getup.articles.sign_up.elements.form.find('input[name=password2]');    

    /**
     *
     */
    Getup.articles.sign_up.elements.inputs.couponCode = Getup.articles.sign_up.elements.form.find('input[name=coupon_code]');   

    /**
     *
     */
    Getup.articles.sign_up.elements.button = Getup.articles.sign_up.elements.form.find('button.orange');

    /**
     *
     */
     Getup.articles.sign_up.elements.message = $('<p class="message"></p>');
     Getup.elements.signup.actions.append(Getup.articles.sign_up.elements.message);

    /**
     * Setup partner ident
     */
    Getup.articles.sign_up.elements.inputs.partner = Getup.articles.sign_up.elements.form.find('input[name=partner]');

    var partner = $.getQueryString('partner');
    if (partner) {
        var expires = new Date();
        expires.setYear(expires.getFullYear() + 10);
        document.cookie = "partner=" + partner + ';domain=.getupcloud.com;path=/;expires=' + expires;
        Getup.articles.sign_up.elements.inputs.partner.val($.getQueryString('partner'));
    }

    /**
     * Articles
     * Sign up
     */
    Getup.articles.sign_up.submiting = false;

    /**
     *
     */
    Getup.articles.sign_up.validation = {};

    /**
     *
     */
    Getup.articles.sign_up.validation.exclude  = /[^@\-\.\w]|^[_@\.\-]|[\._\-]{2}|[@\.]{2}|(@)[^@]*\1/;

    /**
     *
     */
    Getup.articles.sign_up.validation.check    = /@[\w\-]+\./;

    /**
     *
     */
    Getup.articles.sign_up.validation.checkend = /\.[a-zA-Z]{2,3}$/;

    /**
     *
     */
    Getup.articles.sign_up.send = function() {
        if (Getup.articles.sign_up.submiting) return false;

        var name            = Getup.articles.sign_up.elements.inputs.name;
        var email           = Getup.articles.sign_up.elements.inputs.email;
        var password        = Getup.articles.sign_up.elements.inputs.password;
        var passwordConfirm = Getup.articles.sign_up.elements.inputs.passwordConfirm;     
        var couponCode      = Getup.articles.sign_up.elements.inputs.couponCode;

        var valid        = true;
        var emailValue   = email.val();
        var emailInvalid = ((emailValue.search(Getup.articles.sign_up.validation.exclude) != -1) || (emailValue.search(Getup.articles.sign_up.validation.check)) == -1) || (emailValue.search(Getup.articles.sign_up.validation.checkend) == -1);

        (name.val().length < 1)                   ? valid = !name.addClass('error') : name.removeClass('error');
        (emailInvalid)                            ? valid = !email.addClass('error') : email.removeClass('error');
        (password.val().length < 6)               ? valid = !password.addClass('error') : password.removeClass('error');
        // (passwordConfirm.val() != password.val()) ? valid = !passwordConfirm.addClass('error')   : passwordConfirm.removeClass('error');
        // (!terms.is(':checked'))                   ? valid = !terms.parent().addClass('error') : terms.parent().removeClass('error');

        passwordConfirm.val(password.val()); // not needed anymore, only for response success

        if (valid) {
            Getup.articles.sign_up.submiting = true;
            Getup.articles.sign_up.elements.button.addClass('loading');

            console.log(Getup.articles.sign_up.elements.form);

            var save = $.post(U.register, Getup.articles.sign_up.elements.form.serialize());

            save
                .done(function(transport) {
                    if (transport.status == "ok") {
                        Getup.articles.sign_up.elements.form.slideUp(function() {
                            Getup.articles.sign_up.elements.button.removeClass('loading');
                            Getup.articles.sign_up.submiting = false;

                            Getup.articles.sign_up.elements.inputs.name.val('').blur();
                            Getup.articles.sign_up.elements.inputs.email.val('').blur();
                            Getup.articles.sign_up.elements.inputs.password.val('').blur();                            
                            Getup.articles.sign_up.elements.inputs.couponCode.val('').blur();

                            Getup.articles.sign_up.elements.message.html('');
                            Getup.articles.sign_up.elements.form.find('.error').each(function() {
                              $(this).removeClass('error');
                            });
                        });

                        Getup.articles.sign_up.elements.success.slideDown();

                        setTimeout(function() {

                            Getup.elements.signup.section.slideUp(function() {
                                Getup.articles.sign_up.elements.success.hide();
                                Getup.articles.sign_up.elements.form.show();
                            });
                            
                            Getup.elements.signup.header.slideDown();

                        }, 5000);

                    } else {
                        Getup.articles.sign_up.elements.button.removeClass('loading');
                        Getup.articles.sign_up.submiting = false;                        
                    }
                })

                .fail(function(transport) {
                    var errors = $.parseJSON(transport.responseText).errors;

                    Getup.articles.sign_up.error.clear();

                    for (var i = 0, t = errors.length; i < t; ++i) {
                        var error = errors[i];
                        Getup.articles.sign_up.error.append(error);
                    }

                    Getup.articles.sign_up.error.show();

                    Getup.articles.sign_up.elements.button.removeClass('loading');
                    Getup.articles.sign_up.submiting = false;
                }, 'json');
        }

        return false;
    };

    /**
     *
     */
    Getup.articles.sign_up.elements.form.submit(Getup.articles.sign_up.send);


    /**
     *
     */
    Getup.articles.sign_up.error = {};

    /**
     *
     */
    Getup.articles.sign_up.error._content = '';

    /**
     *
     */
    Getup.articles.sign_up.error.append = function(error) {
        if (error.name != '_all_') {
            $('input[name=' + error.name + ']').parent().addClass('error');
        }

        if (error.value != 'This field is required.') {
            Getup.articles.sign_up.error._content
                += (Getup.articles.sign_up.error._content == '' ? '' : '<br/>')
                +  error.value;
        }
    };

    /**
     *
     */
    Getup.articles.sign_up.error.clear = function() {
        Getup.articles.sign_up.error._content = '';
    };

    /**
     *
     */
    Getup.articles.sign_up.error.show = function() {
        Getup.articles.sign_up.elements.message.html(Getup.articles.sign_up.error._content).fadeIn();
    };

    /**
     *
     */
    Getup.articles.sign_up.error.hide = function() {
        Getup.articles.sign_up.elements.message.fadeOut();
    };

   /**
    * Articles
    * Sign up
    */
   Getup.articles.newsletter = {};

   /**
    * Articles
    * Sign up
    * Elements
    */
   Getup.articles.newsletter.elements = {};

   /**
    *
    */
   Getup.articles.newsletter.elements.form = Getup.elements.newsletter.find('form');

   /**
    *
    */
   Getup.articles.newsletter.elements.success = $('#newsletter #success');
   
   /**
    *
    */
   Getup.articles.newsletter.elements.inputs = {};

   /**
    *
    */
   Getup.articles.newsletter.elements.inputs.email = Getup.articles.newsletter.elements.form.find('input[name=EMAIL]');

   /**
    *
    */
   Getup.articles.newsletter.elements.button = Getup.articles.newsletter.elements.form.find('.button');

   /**
    *
    */
    Getup.articles.newsletter.elements.message = $('<p class="message"></p>');
    Getup.elements.newsletter.append(Getup.articles.newsletter.elements.message);

   /**
    * Articles
    * Sign up
    */
   Getup.articles.newsletter.submiting = false;

   /**
    *
    */
     Getup.articles.newsletter.validation = {};

   /**
    *
    */
     Getup.articles.newsletter.validation.exclude  = /[^@\-\.\w]|^[_@\.\-]|[\._\-]{2}|[@\.]{2}|(@)[^@]*\1/;

   /**
    *
    */
     Getup.articles.newsletter.validation.check    = /@[\w\-]+\./;

   /**
    *
    */
     Getup.articles.newsletter.validation.checkend = /\.[a-zA-Z]{2,3}$/;

   /**
    *
    */
   Getup.articles.newsletter.send = function() {
      if (Getup.articles.newsletter.submiting) return false;

         var email           = Getup.articles.newsletter.elements.inputs.email;

         var valid        = true;
         var emailValue   = email.val();
         var emailInvalid = ((emailValue.search(Getup.articles.newsletter.validation.exclude) != -1) || (emailValue.search(Getup.articles.newsletter.validation.check)) == -1) || (emailValue.search(Getup.articles.newsletter.validation.checkend) == -1);

         (emailInvalid)                            ? valid = !email.addClass('error') : email.removeClass('error');

         if (valid) {
             Getup.articles.newsletter.submiting = true;
             Getup.articles.newsletter.elements.button.addClass('loading');

             console.log(Getup.articles.newsletter.elements.form);

             var save =  $.ajax({
                type: Getup.articles.newsletter.elements.form.attr('method'),
                url: Getup.articles.newsletter.elements.form.attr('action'),
                data: Getup.articles.newsletter.elements.form.serialize(),
                cache       : false,
                dataType    : 'json',
                contentType: "application/json; charset=utf-8"
              });

             save
                 .done(function(transport) {
                     console.log('done', transport);
                     if (transport.result == "success") {
                         Getup.articles.newsletter.elements.form.slideUp(function() {
                             Getup.articles.newsletter.elements.button.removeClass('loading');
                             Getup.articles.newsletter.submiting = false;

                             Getup.articles.newsletter.elements.inputs.email.val('').blur();
                         });

                         Getup.articles.newsletter.elements.success.slideDown();

                     } else {
                         Getup.articles.newsletter.elements.button.removeClass('loading');
                         Getup.articles.newsletter.submiting = false;                        
                     }
                 })

                 .fail(function(transport) {
                     console.log('fail', transport);
                     var errors = $.parseJSON(transport.responseText).errors;

                     Getup.articles.newsletter.error.clear();

                     for (var i = 0, t = errors.length; i < t; ++i) {
                         var error = errors[i];
                         Getup.articles.newsletter.error.append(error);
                     }

                     Getup.articles.newsletter.error.show();

                     Getup.articles.newsletter.elements.button.removeClass('loading');
                     Getup.articles.newsletter.submiting = false;
                 }, 'json');
         }

         return false;
   };

   /**
    *
    */
   Getup.articles.newsletter.elements.form.submit(Getup.articles.newsletter.send);

   /**
    *
    */
   Getup.articles.newsletter.elements.inputs.email.on('focus', function() {
   	Getup.articles.newsletter.error.clearClass();
   });

   /**
    *
    */
     Getup.articles.newsletter.error = {};

   /**
    *
    */
     Getup.articles.newsletter.error._content = '';

   /**
    *
    */
     Getup.articles.newsletter.error.append = function(error) {
         if (error.name != '_all_') {
             $('input[name=' + error.name + ']').parent().addClass('error');
         }

         if (error.value != 'This field is required.') {
             Getup.articles.newsletter.error._content
                 += (Getup.articles.newsletter.error._content == '' ? '' : '<br/>')
                 +  error.value;
         }
     };

   /**
    *
    */
     Getup.articles.newsletter.error.clear = function() {
         Getup.articles.newsletter.error._content = '';
     };

    /**
     *
     */
      Getup.articles.newsletter.error.clearClass = function() {
         Getup.articles.newsletter.elements.inputs.email.removeClass('error');
      };

   /**
    *
    */
     Getup.articles.newsletter.error.show = function() {
         Getup.articles.newsletter.elements.message.html(Getup.articles.newsletter.error._content).fadeIn();
     };

   /**
    *
    */
     Getup.articles.newsletter.error.hide = function() {
         Getup.articles.newsletter.elements.message.fadeOut();
     };

    /**
     * Modal
     */
    Getup.modal = {};

    /**
     * Modal
     * Cache
     */
    Getup.modal._cache = {};

    /**
     * Modal
     * Elements
     */
    Getup.modal.elements = {};

    /**
     * Modal
     * Elements main
     */
    Getup.modal.elements.main = $('<div id="modal" />');

    /**
     * Modal
     * Elements mask
     */
    Getup.modal.elements.mask = $('<div class="modal-mask" />');

    /**
     * Modal
     * Elements content
     */
    Getup.modal.elements.content = $('<div class="modal-content" />');

    /**
     * Modal
     * Elements close
     */
    Getup.modal.elements.close = $('<a href="javascript:;" class="close">X</a>');

    /**
     * Modal
     * Elements links
     */
     Getup.modal.elements.links = $('.modal-link');

    /**
     * Modal
     * Init
     */
    Getup.modal.init = function() {
        Getup.modal.elements.main.append(Getup.modal.elements.mask);
        Getup.modal.elements.main.append(Getup.modal.elements.content);

        Getup.elements.body.append(Getup.modal.elements.main);

        Getup.modal.elements.main.hide();

        Getup.modal.elements.links.click(function() {
            Getup.modal.show(this.href.replace(location.origin + '/', ''), $(this).data('pageview'));

            return false;
        });

    };

    /**
     * Modal
     * show
     */
    Getup.modal.show = function(section, tracker) {
        Getup.elements.body.css('overflow', 'hidden');

        if (Getup.modal._cache[section]) {
            Getup.modal.elements.content.html(Getup.modal._cache[section]);
            Getup.modal.elements.main.fadeIn();

            // Tracker
            if (tracker) {
                Getup.Analytics.track_pageview(tracker);
            }

            Getup.modal.elements.content.append(Getup.modal.elements.close);
            Getup.modal.close_event();
        } else {
            Getup.modal.load(section);
        }

    };

    /**
     * Modal
     * load
     */
    Getup.modal.load = function(section) {
        $.get('/' + section, function(transport) {
            Getup.modal._cache[section] = transport;
            Getup.modal.show(section);
        });
    };

    /**
     * Modal
     * close event
     */
    Getup.modal.close_event = function() {
        Getup.modal.elements.close.click(function() {
            Getup.modal.hide();

            return false;
        });
    };

    /**
     * Modal
     * hide
     */
    Getup.modal.hide = function() {
        Getup.elements.body.css('overflow', 'auto');
        Getup.modal.elements.main.fadeOut();
    };

    /**
     * Tooltip
     */
    Getup.tooltip = {};

    /**
     * Cases
     */
    Getup.cases = {};

    /**
     * Tooltip
     * Elements
     */
    Getup.tooltip.elements = {};

    /**
     * Tooltip
     * Elements icons
     */
    Getup.tooltip.elements.main = $('<div class="tooltip-content" />');

    /**
     * Tooltip
     * Elements icons
     */
    Getup.tooltip.elements.icons = $('i.tooltip');

    /**
     * Tooltip
     * Set events
     */
    Getup.tooltip.init = function() {
        Getup.elements.body.append(Getup.tooltip.elements.main);
        Getup.tooltip.elements.main.hide();

        Getup.tooltip.elements.icons.hover(Getup.tooltip.show, Getup.tooltip.hide);
    };

    /**
     * Tooltip
     * Show tooltip
     */
    Getup.tooltip.show = function(event) {

        /**
         * Set tooltip text
         */
        Getup.tooltip.elements.main.text($(this).data('text'));

        /**
         * Set tooltip position
         */

        var position = $(this).offset();
        Getup.tooltip.elements.main.show();
        Getup.tooltip.elements.main.css({ top: position.top - Getup.tooltip.elements.main.height() - 16, left: position.left });
        Getup.tooltip.elements.main.hide();

        /**
         * Show tooltip
         */
        Getup.tooltip.elements.main.fadeIn();
    };

    /**
     * Tooltip
     * Hide tooltip
     */
    Getup.tooltip.hide = function() {
        Getup.tooltip.elements.main.fadeOut();
    };

    /**
     * Cases
     * Set events
     */
    Getup.cases.init = function() {
        // Randomize cases
        var singleCases = $('.cases-wrapper .single-case');
        var totalCases = $('.cases-wrapper .single-case').length;
        var randomCase = Math.floor(Math.random() * totalCases) + 1;

        var singleStartupCases = $('.cases-wrapper .single-startup-case');
        var totalStartupCases = $('.cases-wrapper .single-startup-case').length;
        var randomStartupCase = Math.floor(Math.random() * totalStartupCases) + 1;

        singleCases.removeClass('visible');
        singleCases.eq(randomCase - 1).addClass('visible');

        singleStartupCases.removeClass('visible');
        singleStartupCases.eq(randomStartupCase - 1).addClass('visible');
    };

    /**
     * Getup
     * Track
     */
    Getup.track = {}

    /**
     * Getup
     * Track
     * Events allowed
     */
    Getup.track.events = $('a, .trackevent');

    /**
     * Getup
     * Add links event track
     */
    Getup.track.events.click(function() {

        var track_event = $(this).data('event');

        if (track_event) {
            Getup.Analytics.track_event(track_event);
        }
    });

    /**
     * Getup
     * Track
     * Pageviews allowed
     */
    Getup.track.pageviews = $('.pageview');

    /**
     * Getup
     * Last tracked pageview
     */
    Getup.track.last = null;

    /**
     * Getup
     * scroll timer
     */
    Getup.track.scroll_timer = null;

    /**
     * Site scroll
     */
    var scroll = function() {
        clearTimeout(Getup.track.scroll_timer);

        var top = Getup.elements.window.scrollTop();

        Getup.track.scroll_timer = setTimeout(function() {

            var half = Getup.elements.window.height() / 2;
            var next = null;

            Getup.track.pageviews.each(function() {
                var element = $(this);
                var pageview = element.data('pageview');

                if (!element.is(':visible') || (element.offset().top) > (top + 120 + half) || next == pageview) return;         
                next = pageview
            });

            if (next && Getup.track.last != next) {
                Getup.track.last = next;
                Getup.Analytics.track_pageview(next);
            }

            // header fixed
            if (top > 1) $('.header-container').addClass('header-fixed');
            else $('.header-container').removeClass('header-fixed');

        }, 100);        

        // Technologies Menu
        if (!is_mobile) {

            // if (top >= 280) {
            //  Getup.elements.technologies_nav.css({ position: 'fixed', width: 'auto', top: 145}); 
            // } else {
            //  Getup.elements.technologies_nav.css({ position: 'static', width: false, top: 0 });  
            // }
            
        }
        
    };

    /**
     * Site resize
     */
    var resize = function() {

        /**
         * Update mobile validation using Modernizr.mq
         */
        is_mobile = Modernizr.mq('only all and (max-width: 480px)');

        /**
         * Height of menu
         */
        Getup.config.menu_height = is_mobile ? 70 : 122;

        /**
         * Hide compare in mobile
         */
        if (is_mobile) {
            Getup.elements.compare.hide();
            
            /*
             * Mobile Nav - Begin
             */

            var nav = $('.mobile-custom-nav');

            // Nav menu options
            nav.find('.h3 a').on('click', function() {
               nav.toggleClass('active');
            });

            // Check page location and update nav 
            var currentPage = location.href.substr(location.href.lastIndexOf('/') + 1);

            nav.find('li a').each(function(index, element) {
               var currentNav = $(element).attr('href').substr($(element).attr('href').lastIndexOf('/') + 1);
               
               if (currentNav === currentPage) {
                  $(element).addClass('active');
                  nav.find('.h3 a').text($(element).text());
               };
            });

            /*
             * Mobile Nav - End
             */
        }       
    };

    /**
     * Site initialization
     */
    var init = function() {

        /**
         * Set the prefix of analytics
         */
        Getup.Analytics.set_prefix(U.language.slice(0, 2));

        /*
         * Initilize components
         */
        Getup.modal.init();
        Getup.tooltip.init();
        Getup.cases.init();
    };

    /**
     * General events
     */
    Getup.events = {};

    /**
     * General events
     * Event: mobile menu controller
     */
    Getup.elements.header.menu_control.click(Getup.mobile.menu.toggle);

    /**
     * General events
     * Event: mobile menu controller
     */
    Getup.elements.see_more.click(Getup.articles.how_it_works.toggle);

    /**
     * General events
     * Event: all articles links
     */
    // if (Getup.elements.body.is('.article-links')) {
    //  Getup.elements.body.find('.article').click(function() {
    //      var article = $(this).data('article');

    //      if (article == 'home' && location.pathname != '/' && location.pathname != '/index.html' && location.pathname != '/index_en.html') {
    //          location.href = (U.language.slice(0, 2) == 'pt' ? '/index.html' : '/index_en.html');
    //      }

    //      var module = Getup.articles[article.replace(/\-/g, '_')];

    //      if (module && module.link) {
    //          location.href = "#/" + article;
    //          module.link();  
    //      }

    //      return false;
    //  });
    // } else {
    //  Getup.elements.body.find('.all-article').click(function() {
    //      var article = $(this).data('article');

    //      var module = Getup.articles[article.replace(/\-/g, '_')];

    //      if (module && module.link) {
    //          location.href = "#/" + article;
    //          module.link();  
    //      }

    //      return false;
    //  }); 
    // }
    //Getup.elements.signup.call.click(Getup.articles.sign_up.show);

    /**
     * General events
     * Event: mobile menu controller
     */
    $(window).resize(resize);

    /**
     * General events
     * Event: window scroll
     */
    $(document).scroll(scroll);

    /**
     * Call resize to update config values
     */
    resize();

    /**
     * Call scroll to update tracker
     */
    scroll();

    /**
     * Preload initialization
     */
    Getup.preload.init(init);
    
    /**
     * Move to top
     */
    Getup.elements.body.css({ 'scroll-top': 0 });

    /**
     * Export getup class to window scope
     */
     window.Getup = Getup;
}(); 
