$(document).ready(function(){var a=$("#leafPageId").val();if(a=="true"){$("#tabs").tabs({select:function(b,c){}});$("#defaultTreeType").attr("value",defaultTreeType);$("#defaultTreeValue").attr("value",defaultTreeValue);singleLeafPageTree(defaultTreeType)}else{singleTree()}});function singleTree(){$.ajaxSetup({cache:false});$("#"+treeId).bind("search.jstree",function(e,data){$.jstree.rollback(data.rlbk)}).jstree({json_data:{ajax:{url:actionUrl,data:function(n){return{currentId:n!=-1?n.attr("id"):0}}}},themes:{theme:"classic",dots:true,icons:true},search:{ajax:{url:searchUrl,async:true,data:function(str){return{searchValue:str}},success:function(data){$("#"+treeId).find("li").find("a").removeClass("jstree-search");var arr=eval(data);for(var i=0;i<arr.length;i++){var deptInfos=arr[i].split(";");var deptInfo=deptInfos[0];var parentInfo=deptInfos[1];var openDeptInfo=deptInfo;if(parentInfo!=""){openDeptInfo=parentInfo}$.jstree._reference($("#"+treeId)).open_node($("li[id="+openDeptInfo+"]"),function(){for(var j=0;j<arr.length;j++){var jdeptInfos=arr[j].split(";");var jdeptInfo=jdeptInfos[0];var jparentInfo=jdeptInfos[1];if(jparentInfo!=""){$.jstree._reference($("li[id="+jparentInfo+"]")).open_node($("li[id="+jdeptInfo+"]"),function(){var result=$("#"+treeId).find("a:contains("+$("#searchInput").attr("value")+")");result.addClass("jstree-search")},true)}}var result=$("#"+treeId).find("a:contains("+$("#searchInput").attr("value")+")");result.addClass("jstree-search")},true)}}}},types:{types:{company:{icon:{image:resourceCtx+"/widgets/jstree/themes/root.gif"}},folder:{icon:{image:resourceCtx+"/widgets/jstree/themes/folder.gif"}},user:{icon:{image:resourceCtx+"/widgets/jstree/themes/file.gif"}},onlineUser:{icon:{image:resourceCtx+"/widgets/jstree/themes/online.gif"}}}},ui:{select_limit:1},plugins:["themes","json_data","types","ui","search"]}).bind("select_node.jstree",function(e){id=$(".jstree-clicked").parent().attr("id");if(getType()=="user"){getId();getName();getType();getTreeType();getLoginName();getEmail();getHonorificName();getWeight();getUserDepartmentName();getDepartmentId();getSubCompanyName();getSubCompanyId()}else{if(getType()=="department"){getDepartmentName();getDepartmentId();getDeptSubCompanyName();getDeptSubCompanyId();getDepartmentCode();getDepartmentShortTitle()}else{if(getType()=="workGroup"){getWorkGroupName();getWorkGroupId()}}}})}function search_fun(){$("#"+treeId).jstree("search",$("#searchInput").val())}var id="";function getInfo(c){var a="user";if(c!=""&&typeof(c)!="undefined"){a=c}if(id!=""){var d="[";if(a=="user"){var b=id.substring(0,id.indexOf(split_one));if(b=="user"){d+='{type:"'+id.substring(0,id.indexOf(split_one))+'",id:"'+id.substring(id.indexOf(split_one)+2,id.indexOf(split_two))+'",name:"'+id.substring(id.indexOf(split_two)+2,id.indexOf(split_three))+'",loginName:"'+id.substring(id.indexOf(split_three)+2,id.indexOf(split_four))+'",parentType:"'+id.substring(id.indexOf(split_five)+2,id.indexOf(split_eight))+'",parentName:"'+id.substring(id.indexOf(split_four)+2,id.indexOf(split_five))+'",nobranchId:"'+id.substring(id.indexOf(split_one)+2,id.indexOf(split_nine))+'",branchName:"'+id.substring(id.indexOf(split_nine)+2,id.indexOf(split_ten))+'",subCompanyId:"'+id.substring(id.indexOf(split_ten)+2,id.length)+'"},'}}else{if(a=="department"){var b=id.substring(0,id.indexOf(split_one));if(b=="department"){d+='{type:"'+id.substring(0,id.indexOf(split_one))+'",id:"'+id.substring(id.indexOf(split_one)+2,id.indexOf(split_two))+'",name:"'+id.substring(id.indexOf(split_two)+2,id.indexOf(split_three))+'",branchName:"'+id.substring(id.indexOf(split_three)+2,id.indexOf(split_four))+'",isBranch:"'+id.substring(id.indexOf(split_four)+2,id.indexOf(split_five))+'",subCompanyId:"'+id.substring(id.indexOf(split_five)+2,id.indexOf(split_six))+'",shortTitle:"'+id.substring(id.indexOf(split_six)+2,id.indexOf(split_seven))+'",code:"'+id.substring(id.indexOf(split_seven)+2,id.length)+'"},'}}else{if(a=="workGroup"){var b=id.substring(0,id.indexOf(split_one));if(b=="workGroup"){d+='{type:"'+id.substring(0,id.indexOf(split_one))+'",id:"'+id.substring(id.indexOf(split_one)+2,id.indexOf(split_two))+'",name:"'+id.substring(id.indexOf(split_two)+2,id.indexOf(split_three))+'",branchName:"'+id.substring(id.indexOf(split_three)+2,id.indexOf(split_four))+'",subCompanyId:"'+id.substring(id.indexOf(split_four)+2,id.length)+'"},'}}else{if(a=="departmentAndGroup"){var b=id.substring(0,id.indexOf(split_one));if(b=="department"){d+='{type:"'+id.substring(0,id.indexOf(split_one))+'",id:"'+id.substring(id.indexOf(split_one)+2,id.indexOf(split_two))+'",name:"'+id.substring(id.indexOf(split_two)+2,id.indexOf(split_three))+'",branchName:"'+id.substring(id.indexOf(split_three)+2,id.indexOf(split_four))+'",isBranch:"'+id.substring(id.indexOf(split_four)+2,id.length)+'",subCompanyId:"'+id.substring(id.indexOf(split_four)+2,id.length)+'"},'}else{if(b=="workGroup"){d+='{type:"'+id.substring(0,id.indexOf(split_one))+'",id:"'+id.substring(id.indexOf(split_one)+2,id.indexOf(split_two))+'",name:"'+id.substring(id.indexOf(split_two)+2,id.indexOf(split_three))+'",branchName:"'+id.substring(id.indexOf(split_three)+2,id.indexOf(split_four))+'",subCompanyId:"'+id.substring(id.indexOf(split_four)+2,id.length)+'"},'}}}}}}if(d.indexOf(",")>=0){d=d.substring(0,d.length-1)}d+="]";window.parent.sInfor=d;return d}else{return""}}function changeSelected(a,b){$("#defaultTreeType").attr("value",a);$("#defaultTreeValue").attr("value",b);singleLeafPageTree(a)}function singleLeafPageTree(type){$.ajaxSetup({cache:false});$("#"+treeId).jstree({json_data:{ajax:{url:actionUrl+"?treeType="+type,data:function(n){return{currentId:n!=-1?n.attr("id"):0}}}},themes:{theme:"classic",dots:true,icons:true},search:{ajax:{url:searchUrl+"?treeType="+type,async:true,data:function(str){return{searchValue:str}},success:function(data){$("#"+treeId).find("li").find("a").removeClass("jstree-search");var arr=eval(data);for(var i=0;i<arr.length;i++){var deptInfos=arr[i].split(";");var deptInfo=deptInfos[0];var parentInfo=deptInfos[1];var openDeptInfo=deptInfo;if(parentInfo!=""){openDeptInfo=parentInfo}$.jstree._reference($("#"+treeId)).open_node($("li[id="+openDeptInfo+"]"),function(){for(var j=0;j<arr.length;j++){var jdeptInfos=arr[j].split(";");var jdeptInfo=jdeptInfos[0];var jparentInfo=jdeptInfos[1];if(jparentInfo!=""){$.jstree._reference($("li[id="+jparentInfo+"]")).open_node($("li[id="+jdeptInfo+"]"),function(){var result=$("#"+treeId).find("a:contains("+$("#"+inputId).attr("value")+")");result.addClass("jstree-search")},true)}}var result=$("#"+treeId).find("a:contains("+$("#"+inputId).attr("value")+")");result.addClass("jstree-search")},true)}}}},types:{types:{company:{icon:{image:ctx+"/widgets/jstree/themes/root.gif"}},folder:{icon:{image:ctx+"/widgets/jstree/themes/folder.gif"}},user:{icon:{image:ctx+"/widgets/jstree/themes/file.gif"}},onlineUser:{icon:{image:resourceCtx+"/widgets/jstree/themes/online.gif"}}}},ui:{select_limit:1},plugins:["themes","json_data","types","ui","search"]}).bind("select_node.jstree",function(e){id=$(".jstree-clicked").parent().attr("id");getId();getName();getType();getLoginName()}).bind("search.jstree",function(e,data){$.jstree.rollback(data.rlbk)})}function getId(){var a=id.substring(id.indexOf(split_one)+2,id.indexOf(split_two));window.parent.singleId=a;return a}function getName(){var a=id.substring(id.indexOf(split_two)+2,id.indexOf(split_three));window.parent.singleName=a;return a}function getType(){var a=id.substring(0,id.indexOf(split_one));window.parent.singleType=a;return a}function getTreeType(){var a=$("#defaultTreeType").val();window.parent.mTreeType=a;return a}function getLoginName(){var a=id.substring(id.indexOf(split_three)+2,id.indexOf(split_four));window.parent.singleLoginName=a;return a}function getSubCompanyName(){var a=id.substring(id.indexOf(split_nine)+2,id.indexOf(split_ten));window.parent.singleSubCompanyName=a;return a}function getSubCompanyId(){var a=id.substring(id.indexOf(split_ten)+2,id.length);window.parent.singleSubCompanyId=a;return a}function getDeptSubCompanyName(){var a=id.substring(id.indexOf(split_three)+2,id.indexOf(split_four));window.parent.singleSubCompanyName=a;return a}function getDeptSubCompanyId(){var a=id.substring(id.indexOf(split_five)+2,id.indexOf(split_six));window.parent.singleSubCompanyId=a;return a}function getDepartmentName(){var a=id.substring(id.indexOf(split_three)+2,id.length);window.parent.singleDepartmentName=a;return a}function getDepartmentId(){var a=id.substring(id.indexOf(split_one)+2,id.indexOf(split_two));window.parent.singleDepartmentId=a;return a}function getDepartmentCode(){var a=id.substring(id.indexOf(split_seven)+2,id.length);window.parent.singleDepartmentCode=a;return a}function getDepartmentShortTitle(){var a=id.substring(id.indexOf(split_six)+2,id.indexOf(split_seven));window.parent.singleDepartmentShortTitle=a;return a}function getWorkGroupName(){var a=id.substring(id.indexOf(split_three)+2,id.indexOf(split_four));window.parent.singleWorkGroupName=a;return a}function getWorkGroupId(){var a=id.substring(id.indexOf(split_one)+2,id.indexOf(split_two));window.parent.singleWorkGroupId=a;return a}function getEmail(){var a=id.split(split_eight)[1].split(split_seven)[0];window.parent.singleEmail=a;return a}function getHonorificName(){var a=id.split(split_eight)[1].split(split_seven)[1];window.parent.singleHonorificName=a;return a}function getWeight(){var a=id.split(split_eight)[1].split(split_seven)[2];window.parent.singleWeight=a;return a}function getUserDepartmentName(){var a=id.substring(id.indexOf(split_five)+2,id.indexOf(split_six));window.parent.singleUserDeptName=a;return a}function returnParamater(c,b){var a="";if(b=="id"){a=c.id}else{if(b=="name"){a=c.name}else{if(b=="loginName"){a=c.loginName}else{if(b=="email"){a=c.email}}}}return a}function createValueStr(e,b){var a="";var c=b.split(",");var f="";for(var d=0;d<c.length;d++){a+=returnParamater(e,c[d])+","}return a.substring(0,a.length-1)}function selectMan(treeValue){var info=getInfo("user");if(info!=""&&info!="[]"){var user=eval(info);if(user!=""){var type=user[0].type;if(type=="user"){if(hiddenInputId!="NOHiddenInputId"){window.parent.$("#"+hiddenInputId).attr("value",createValueStr(user[0],treeValue))}var branchName=user[0].branchName;var name="";if(isSingleCompany=="true"){name=user[0].name+"("+branchName+")"}else{name=user[0].name}if(showInputId!="NOShowInputId"){window.parent.$("#"+showInputId).attr("value",name)}return true}else{alert("\u8bf7\u9009\u62e9\u4eba\u5458");return false}}else{alert("\u8bf7\u9009\u62e9\u6b63\u786e\u7684\u8282!");return false}}else{alert("\u8bf7\u9009\u62e9\u4eba\u5458");return false}}function selectDepartment(treeValue){var info=getInfo("department");if(info!=""&&info!="[]"){var user=eval(info);if(user!=""){var type=user[0].type;var isBranch=user[0].isBranch;if(type=="department"&&isBranch!="true"){if(hiddenInputId!="NOHiddenInputId"){window.parent.$("#"+hiddenInputId).attr("value",createValueStr(user[0],treeValue))}var branchName=user[0].branchName;var name="";if(isSingleCompany=="true"){name=user[0].name+"("+branchName+")"}else{name=user[0].name}if(showInputId!="NOShowInputId"){window.parent.$("#"+showInputId).attr("value",name)}return true}else{alert("\u8bf7\u9009\u62e9\u90e8\u95e8");return false}}else{alert("\u8bf7\u9009\u62e9\u6b63\u786e\u7684\u8282!");return false}}else{alert("\u8bf7\u9009\u62e9\u90e8\u95e8");return false}}function selectWorkGroup(treeValue){var info=getInfo("workGroup");if(info!=""&&info!="[]"){var user=eval(info);if(user!=""){var type=user[0].type;if(type=="workGroup"){if(hiddenInputId!="NOHiddenInputId"){window.parent.$("#"+hiddenInputId).attr("value",createValueStr(user[0],treeValue))}var branchName=user[0].branchName;var name="";if(isSingleCompany=="true"){name=user[0].name+"("+branchName+")"}else{name=user[0].name}if(showInputId!="NOShowInputId"){window.parent.$("#"+showInputId).attr("value",name)}return true}else{alert("\u8bf7\u9009\u62e9\u5de5\u4f5c\u7ec4");return false}}else{alert("\u8bf7\u9009\u62e9\u6b63\u786e\u7684\u8282!");return false}}else{alert("\u8bf7\u9009\u62e9\u5de5\u4f5c\u7ec4");return false}}function selectDepartmentAndWorkGroup(treeValue){var info=getInfo("departmentAndGroup");if(info!=""&&info!="[]"){var user=eval(info);if(user!=""){var type=user[0].type;var isBranch=user[0].isBranch;if(type=="department"&&isBranch!="true"){if(hiddenInputId!="NOHiddenInputId"){window.parent.$("#"+hiddenInputId).attr("value",createValueStr(user[0],treeValue))}var branchName=user[0].branchName;var name="";if(isSingleCompany=="true"){name=user[0].name+"("+branchName+")"}else{name=user[0].name}if(showInputId!="NOShowInputId"){window.parent.$("#"+showInputId).attr("value",name)}return true}else{if(type=="workGroup"){if(hiddenInputId!="NOHiddenInputId"){window.parent.$("#"+hiddenInputId).attr("value",createValueStr(user[0],treeValue))}var branchName=user[0].branchName;var name="";if(isSingleCompany=="true"){name=user[0].name+"("+branchName+")"}else{name=user[0].name}if(showInputId!="NOShowInputId"){window.parent.$("#"+showInputId).attr("value",name)}return true}else{alert("\u8bf7\u9009\u62e9\u90e8\u95e8\u6216\u5de5\u4f5c\u7ec4");return false}}}else{alert("\u8bf7\u9009\u62e9\u6b63\u786e\u7684\u8282!");return false}}else{alert("\u8bf7\u9009\u62e9\u90e8\u95e8\u6216\u5de5\u4f5c\u7ec4");return false}}function _ok_tree(){var d=$("#defaultTreeType").val();var a=$("#defaultTreeValue").val();var c=true;if(d=="COMPANY"||d=="MAN_DEPARTMENT_GROUP_TREE"||d=="MAN_DEPARTMENT_TREE"||d=="MAN_GROUP_TREE"){c=selectMan(a)}else{if(d=="DEPARTMENT_TREE"){c=selectDepartment(a)}else{if(d=="GROUP_TREE"){c=selectWorkGroup(a)}else{if(d=="DEPARTMENT_WORKGROUP_TREE"){c=selectDepartmentAndWorkGroup(a)}}}}var b;if(hiddenInputId!="NOHiddenInputId"){b=window.parent.$("#"+hiddenInputId).attr("value")}if(typeof b=="undefined"||b==""){}else{if(c){window.parent.okEnsure="OK";window.parent.$.colorbox.close()}}};
