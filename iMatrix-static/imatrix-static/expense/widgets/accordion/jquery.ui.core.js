(function(f,g){f.ui=f.ui||{};if(f.ui.version){return}f.extend(f.ui,{version:"1.8.15",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});f.fn.extend({propAttr:f.fn.prop||f.fn.attr,_focus:f.fn.focus,focus:function(b,a){return typeof b==="number"?this.each(function(){var c=this;setTimeout(function(){f(c).focus();if(a){a.call(c)}},b)}):this._focus.apply(this,arguments)},scrollParent:function(){var a;if((f.browser.msie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){a=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(f.curCSS(this,"position",1))&&(/(auto|scroll)/).test(f.curCSS(this,"overflow",1)+f.curCSS(this,"overflow-y",1)+f.curCSS(this,"overflow-x",1))}).eq(0)}else{a=this.parents().filter(function(){return(/(auto|scroll)/).test(f.curCSS(this,"overflow",1)+f.curCSS(this,"overflow-y",1)+f.curCSS(this,"overflow-x",1))}).eq(0)}return(/fixed/).test(this.css("position"))||!a.length?f(document):a},zIndex:function(a){if(a!==g){return this.css("zIndex",a)}if(this.length){var c=f(this[0]),d,b;while(c.length&&c[0]!==document){d=c.css("position");if(d==="absolute"||d==="relative"||d==="fixed"){b=parseInt(c.css("zIndex"),10);if(!isNaN(b)&&b!==0){return b}}c=c.parent()}}return 0},disableSelection:function(){return this.bind((f.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});f.each(["Width","Height"],function(d,l){var i=l==="Width"?["Left","Right"]:["Top","Bottom"],c=l.toLowerCase(),a={innerWidth:f.fn.innerWidth,innerHeight:f.fn.innerHeight,outerWidth:f.fn.outerWidth,outerHeight:f.fn.outerHeight};function b(j,k,o,p){f.each(i,function(){k-=parseFloat(f.curCSS(j,"padding"+this,true))||0;if(o){k-=parseFloat(f.curCSS(j,"border"+this+"Width",true))||0}if(p){k-=parseFloat(f.curCSS(j,"margin"+this,true))||0}});return k}f.fn["inner"+l]=function(j){if(j===g){return a["inner"+l].call(this)}return this.each(function(){f(this).css(c,b(this,j)+"px")})};f.fn["outer"+l]=function(k,j){if(typeof k!=="number"){return a["outer"+l].call(this,k)}return this.each(function(){f(this).css(c,b(this,k,true,j)+"px")})}});function h(d,l){var a=d.nodeName.toLowerCase();if("area"===a){var b=d.parentNode,c=b.name,k;if(!d.href||!c||b.nodeName.toLowerCase()!=="map"){return false}k=f("img[usemap=#"+c+"]")[0];return !!k&&e(k)}return(/input|select|textarea|button|object/.test(a)?!d.disabled:"a"==a?d.href||l:l)&&e(d)}function e(a){return !f(a).parents().andSelf().filter(function(){return f.curCSS(this,"visibility")==="hidden"||f.expr.filters.hidden(this)}).length}f.extend(f.expr[":"],{data:function(a,b,c){return !!f.data(a,c[3])},focusable:function(a){return h(a,!isNaN(f.attr(a,"tabindex")))},tabbable:function(a){var c=f.attr(a,"tabindex"),b=isNaN(c);return(b||c>=0)&&h(a,!b)}});f(function(){var b=document.body,a=b.appendChild(a=document.createElement("div"));f.extend(a.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});f.support.minHeight=a.offsetHeight===100;f.support.selectstart="onselectstart" in a;b.removeChild(a).style.display="none"});f.extend(f.ui,{plugin:{add:function(d,c,a){var b=f.ui[d].prototype;for(var i in a){b.plugins[i]=b.plugins[i]||[];b.plugins[i].push([c,a[i]])}},call:function(i,c,d){var a=i.plugins[c];if(!a||!i.element[0].parentNode){return}for(var b=0;b<a.length;b++){if(i.options[a[b][0]]){a[b][1].apply(i.element,d)}}}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(a,c){if(f(a).css("overflow")==="hidden"){return false}var d=(c&&c==="left")?"scrollLeft":"scrollTop",b=false;if(a[d]>0){return true}a[d]=1;b=(a[d]>0);a[d]=0;return b},isOverAxis:function(b,c,a){return(b>c)&&(b<(c+a))},isOver:function(a,k,b,c,l,d){return f.ui.isOverAxis(a,b,l)&&f.ui.isOverAxis(k,c,d)}})})(jQuery);
