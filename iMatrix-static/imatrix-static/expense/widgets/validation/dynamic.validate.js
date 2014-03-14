var __signatureVisible=false;var __signatureFields="";function addFormValidate(setting,formId){if(typeof(setting)=="undefined"||setting==""){return}if('[{request:"false",readonly:"true",controltype:"allreadolny"}]'==setting.toLowerCase()){allFieldForbidden(formId)}else{var json=eval("("+setting+")");$.each(json,function(key,values){validateHandler(this,formId)})}}function validateHandler(e,j){if(e.controlType.toLowerCase()=="radio"){var a=e.name;var f=$("input:radio[name="+a+"]");if(f.length==0){return}if(e.readonly=="true"){$(f).attr("disabled","disabled")}else{if(e.request=="true"){var g=$(f[f.length-1]).next("span");if(g.length>0){return}$(f[f.length-1]).after('<span style="color:red;">*</span>');addCheckboxRadioRule($(f[0]))}}}else{if(e.controlType.toLowerCase()=="checkbox"){var a=e.name;var f=$("input:checkbox[name="+a+"]");if(f.length==0){return}if(e.readonly=="true"){replaceCheckboxForbiddenField(f);$(f).attr("name","");$(f).attr("disabled","disabled")}else{if(e.request=="true"){var g=$(f[f.length-1]).next("span");if(g.length>0){return}$(f[f.length-1]).after('<span style="color:red;">*</span>');addCheckboxRadioRule($(f[0]))}}}else{if(e.id==""){return}var b=$("input[id="+e.id+"]");if(e.controlType.toLowerCase()=="textarea"){b=$("textarea[id="+e.id+"]")}else{if(e.controlType.toLowerCase()=="select"){b=$("select[id="+e.id+"]")}}if(e.datatype=="DATE"||e.datatype=="TIME"){if(e.datatype=="DATE"){if("CUSTOM"==e.customType){customTypeCalendarControl(b,e.format)}else{$(b).datepicker({dateFormat:"yy-mm-dd",changeMonth:true,changeYear:true,showButtonPanel:"true"})}}else{if("CUSTOM"==e.customType){customTypeCalendarControl(b,e.format)}else{$(b).datetimepicker({dateFormat:"yy-mm-dd",changeMonth:true,changeYear:true,showSecond:false,showMillisec:false,timeFormat:"hh:mm"})}}}else{if(e.datatype=="INTEGER"){addRule($(b),"digits","\u8bf7\u8f93\u5165\u6574\u6570")}else{if(e.datatype=="LONG"){addRule($(b),"digits","\u8bf7\u8f93\u5165\u6574\u6570")}else{if(e.datatype=="DOUBLE"){addRule($(b),"number","\u8bf7\u8f93\u5165\u6570\u5b57")}else{var d=e.formatType;if(d=="string"||d=="enum"){addRule($(b),e.format,"\u8bf7\u8f93\u5165"+e.formatTip)}}}}}var c=$(b).attr("maxlength");if(c>0&&c!=2147483647&&typeof(c)!="undefined"&&c!=524288){addRule($(b),"maxlength","\u8d85\u8fc7\u6700\u5927\u957f\u5ea6"+c)}if(e.request=="true"){var a=e.name;if(typeof a=="undefined"||a==null||a==""){a=e.id}var h=false;if(!isSignatureField(a)){var d=e.formatType;if(d=="null"){if(e.datatype=="DATE"||e.datatype=="TIME"){if(e.readonly!=true&&e.readonly!="true"){addRule($(b),"required","\u5fc5\u586b");h=true}}else{if(e.datatype=="INTEGER"){addRule($(b),"required","\u5fc5\u586b");h=true}else{if(e.datatype=="LONG"){addRule($(b),"required","\u5fc5\u586b");h=true}else{if(e.datatype=="DOUBLE"){addRule($(b),"required","\u5fc5\u586b");h=true}else{addRule($(b),"required","\u5fc5\u586b");h=true}}}}}else{addRule($(b),"required","\u5fc5\u586b");h=true}if(h){if($(b).next("span").length<=0){$(b).after('<span style="color:red;">*</span>')}}}}if(e.readonly=="true"){if(e.controlType.toLowerCase()!="radio"&&e.controlType.toLowerCase()!="checkbox"){if(e.controlType.toLowerCase()=="select"){replaceForbiddenField(b)}else{if(e.datatype=="DATE"||e.datatype=="TIME"){$(b).attr("onclick","");replaceForbiddenField(b)}else{$(b).attr("readonly","readonly");var i=$("input[hiddenid="+$(b).attr("id")+"]");if(i.length>=1){$("input[hiddenid="+$(b).attr("id")+"]").css("display","none")}}}}}}}}function customTypeCalendarControl(a,b){if("yyyy-m"==b){timeFormat1(a)}else{if("m-d"==b){timeFormat2(a)}else{if("yyyy\u5e74m\u6708d\u65e5"==b){timeFormat3(a)}else{if("yyyy\u5e74m\u6708"==b){timeFormat4(a)}else{if("m\u6708d\u65e5"==b){timeFormat5(a)}else{if("\u4e8cO\u4e00\u56db\u5e74\u4e00\u6708\u4e00\u65e5"==b){timeFormat6(a)}else{if("\u4e8cO\u4e00\u56db\u5e74\u4e00\u6708"==b){timeFormat7(a)}else{if("\u4e00\u6708\u4e00\u65e5"==b){timeFormat8(a)}else{if("h:mm"==b){timeFormat9(a)}else{if("h\u65f6mm\u5206"==b){timeFormat10(a)}}}}}}}}}}}function timeFormat1(a){$(a).datepicker({dateFormat:"yy-mm",changeMonth:true,changeYear:true,showButtonPanel:"true"})}function timeFormat2(a){$(a).datepicker({dateFormat:"mm-dd",changeMonth:true,changeYear:false,showMonthAfterYear:false,showButtonPanel:"true"})}function timeFormat3(a){$(a).datepicker({dateFormat:"yy\u5e74mm\u6708dd\u65e5",changeMonth:true,changeYear:true,showButtonPanel:"true"})}function timeFormat4(a){$(a).datepicker({dateFormat:"yy\u5e74mm\u6708",changeMonth:true,changeYear:true,showButtonPanel:"true"})}function timeFormat5(a){$(a).datepicker({dateFormat:"mm\u6708dd\u65e5",changeMonth:true,changeYear:false,showMonthAfterYear:false,showButtonPanel:"true"})}function timeFormat6(a){$(a).datepicker({dateFormat:"yy-m-d",changeMonth:true,changeYear:true,showButtonPanel:"true",onClose:function(j,g){var i=g.currentDay;var k=g.currentMonth;var h=g.currentYear+"";var f=h.charAt(0);var d=h.charAt(1);var c=h.charAt(2);var b=h.charAt(3);var e=tohanzi(parseInt(f))+tohanzi(parseInt(d))+tohanzi(parseInt(c))+tohanzi(parseInt(b));e+="\u5e74";e+=tohanzi(parseInt(k)+1);e+="\u6708";e+=tohanzi(parseInt(i));e+="\u65e5";$(a).attr("value",e)}})}function timeFormat7(a){$(a).datepicker({dateFormat:"yy-m",changeMonth:true,changeYear:true,showButtonPanel:"true",onClose:function(i,g){var j=g.currentMonth;var h=g.currentYear+"";var f=h.charAt(0);var d=h.charAt(1);var c=h.charAt(2);var b=h.charAt(3);var e=tohanzi(parseInt(f))+tohanzi(parseInt(d))+tohanzi(parseInt(c))+tohanzi(parseInt(b));e+="\u5e74";e+=tohanzi(parseInt(j)+1);e+="\u6708";$(a).attr("value",e)}})}function timeFormat8(a){$(a).datepicker({dateFormat:"yy-m-d",changeMonth:true,changeYear:false,showMonthAfterYear:false,showButtonPanel:"true",onClose:function(e,d){var c=d.currentDay;var b=d.currentMonth;var f=tohanzi(parseInt(b)+1);f+="\u6708";f+=tohanzi(parseInt(c));f+="\u65e5";$(a).attr("value",f)}})}function timeFormat9(a){$(a).timepicker({timeOnlyTitle:"\u65f6\u95f4",beforeShow:function(b,c){if($(a).attr("value")==""||typeof($(a).attr("value"))=="undefined"){$(a).attr("value","00:00")}}})}function timeFormat10(a){$(a).timepicker({timeFormat:"hh\u65f6mm\u5206",timeOnlyTitle:"\u65f6\u95f4",beforeShow:function(b,c){if($(a).attr("value")==""||typeof($(a).attr("value"))=="undefined"){$(a).attr("value","00\u65f600\u5206")}}})}function tohanzi(a){if(a==0){return"O"}else{if(a==1){return"\u4e00"}else{if(a==2){return"\u4e8c"}else{if(a==3){return"\u4e09"}else{if(a==4){return"\u56db"}else{if(a==5){return"\u4e94"}else{if(a==6){return"\u516d"}else{if(a==7){return"\u4e03"}else{if(a==8){return"\u516b"}else{if(a==9){return"\u4e5d"}else{if(a==10){return"\u5341"}else{if(a==11){return"\u5341\u4e00"}else{if(a==12){return"\u5341\u4e8c"}else{if(a==13){return"\u5341\u4e09"}else{if(a==14){return"\u5341\u56db"}else{if(a==15){return"\u5341\u4e94"}else{if(a==16){return"\u5341\u516d"}else{if(a==17){return"\u5341\u4e03"}else{if(a==18){return"\u5341\u516b"}else{if(a==19){return"\u5341\u4e5d"}else{if(a==20){return"\u4e8c\u5341"}else{if(a==21){return"\u4e8c\u5341\u4e00"}else{if(a==22){return"\u4e8c\u5341\u4e8c"}else{if(a==23){return"\u4e8c\u5341\u4e09"}else{if(a==24){return"\u4e8c\u5341\u56db"}else{if(a==25){return"\u4e8c\u5341\u4e94"}else{if(a==26){return"\u4e8c\u5341\u516d"}else{if(a==27){return"\u4e8c\u5341\u4e03"}else{if(a==28){return"\u4e8c\u5341\u516b"}else{if(a==29){return"\u4e8c\u5341\u4e5d"}else{if(a==30){return"\u4e09\u5341"}else{if(a==31){return"\u4e09\u5341\u4e00"}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}return""}function replaceForbiddenField(d){var c=$(d).attr("name");if(typeof c=="undefined"||c==null||c==""){c=$(d).attr("id")}var b=$(d).attr("customtype");if("CUSTOM"!=b){$(d).attr("name","")}$(d).attr("disabled","disabled");var a=$("input[name='"+c+"'][disableField='true']");if(a.length<=0){if("CUSTOM"!=b){$(d).after("<input name='"+c+"'  type='hidden' disableField='true' readonly='readonly' value='"+$(d).val()+"'/>")}}}function replaceCheckboxForbiddenField(b){if(b.length>0){var c=$(b[0]).attr("name");if(c!=""&&typeof(c)!="undefined"&&c!=null){var a=$("input[name='"+c+"'][disableField='true']");if(a.length<=0){var e="";for(var d=0;d<b.length;d++){if($(b[d]).attr("checked")){if(e==""){e=$(b[d]).val()}else{e=e+","+$(b[d]).val()}}}$(b[0]).after("<input name='"+c+"'  type='hidden' disableField='true' readonly='readonly' value='"+e+"'/>")}}}}function isSignatureField(d){var b=false;if(__signatureVisible){var c=__signatureFields.split(",");for(var a=0;a<c.length;a++){if(c[a]==d){b=true}}}return b}function allFieldForbidden(g){var a=$("#"+g+" input[name!='transitionName'][disableField!='true']");for(var c=0;c<a.length;c++){if($(a[c]).attr("type").toLowerCase()=="radio"||$(a[c]).attr("type").toLowerCase()=="checkbox"){if($(a[c]).attr("type").toLowerCase()=="checkbox"){var b=$(a[c]).attr("name");var f=$("input:checkbox[name='"+b+"']");replaceCheckboxForbiddenField(f)}$(a[c]).attr("disabled","disabled")}else{if($(a[c]).attr("datatype")=="DATE"||$(a[c]).attr("datatype")=="TIME"){replaceForbiddenField(a[c])}else{$(a[c]).attr("onfocus","");$(a[c]).attr("onclick","");$(a[c]).attr("readonly","readonly")}}if($("#"+$(a[c]).attr("id")+"Div").length==1){$("#"+$(a[c]).attr("id")+"Div").hide()}var e=$("input[hiddenid="+$(a[c]).attr("id")+"]");if(e.length>=1){$("input[hiddenid="+$(a[c]).attr("id")+"]").css("display","none")}}a=$("#"+g+" input[type='checkbox']");for(var d=0;d<a.length;d++){$(a[d]).attr("name","")}a=$("#"+g+" textarea");for(var c=0;c<a.length;c++){$(a[c]).attr("readonly","readonly")}a=$("#"+g+" select");for(var c=0;c<a.length;c++){replaceForbiddenField(a[c])}}function addCheckboxRadioRule(a){$.validator.addMethod("checkboxRequired",function(g,e){var c=$(e).attr("name");var f=$(e).attr("type");var b=$("input:"+f+"[name="+c+"]");var h=false;if($(e).attr("checked")){return true}for(var d=0;d<b.length;d++){if($(b[d]).attr("checked")){h=true;return true}}if(!h){return false}});$(a).attr("class","checkboxRequired");$(a).attr("title","\u5fc5\u586b")}function addRule(obj,type,msg){var c=$(obj).attr("class");if(typeof(c)=="undefined"){c=""}var vc=c.match(/\{[\W\w]+\}/ig);if(vc==null||vc==""){c=c+" {"+type+":true, messages:{"+type+":'"+msg+"'}}"}else{var vo=eval("("+vc+")");vo[type]=true;if(typeof(vo.messages)=="undefined"){vo.messages={}}vo.messages[type]=msg;c=c.replace(vc,json2str(vo))}$(obj).attr("class",c)}function json2str(d){var a=[];var b=function(e){if(typeof e=="object"&&e!=null){return json2str(e)}return/^(string|number)$/.test(typeof e)?"'"+e+"'":e};for(var c in d){a.push(""+c+":"+b(d[c]))}return"{"+a.join(",")+"}"};
