
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"32",
  
  "macros":[{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"active_ga_session"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=1;return function(a){a.set(\"dimension\"+b,a.get(\"clientId\"));(a=",["escape",["macro",3],8,16],")\u0026\u0026GTMsetCookie(\"active_ga_session\",1,30)}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageSubCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageContentType"
    },{
      "function":"__jsm",
      "convert_null_to":"no meta keywords tag detected",
      "convert_undefined_to":"no meta keywords tag detected",
      "convert_false_to":"no meta keywords tag detected",
      "vtp_javascript":["template","(function(){var a=document.querySelector(\"meta[name\\x3dkeywords]\").content.substr(0,149);\"\"==a\u0026\u0026(a=null);return a})();"]
    },{
      "function":"__uv"
    },{
      "function":"__u",
      "convert_null_to":["macro",9],
      "convert_undefined_to":["macro",9],
      "vtp_component":"QUERY",
      "vtp_queryKey":"int_source",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",11],
      "vtp_defaultValue":"UA-810100-10",
      "vtp_map":["list",["map","key","m.sport5.co.il","value","UA-810100-1"],["map","key","sport5.co.il","value","UA-810100-1"],["map","key","nba.sport5.co.il","value","UA-810100-1"],["map","key","dreamteam.sport5.co.il","value","UA-810100-1"],["map","key","fantasyleague.sport5.co.il","value","UA-810100-1"],["map","key","vod.sport5.co.il","value","UA-810100-1"],["map","key","playbyplay.sport5.co.il","value","UA-810100-1"],["map","key","playbasket.sport5.co.il","value","UA-810100-1"],["map","key","www.sport5.co.il","value","UA-810100-1"],["map","key","sites.sport5.co.il","value","UA-810100-1"]]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","forceSSL","value","true"],["map","fieldName","customTask","value",["macro",4]]],
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",5]],["map","index","2","group",["macro",6]],["map","index","3","group",["macro",7]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","2","dimension",["macro",8]],["map","index","3","dimension",["macro",10]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",12],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",15],8,16],";a=a.match(\/\\\/\\\/(www\\.)?([^\\\/]+)\/);return a=a[2]})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",16],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"Outbound Links",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*trc\\.taboola.*","value","Ad Platform Links"],["map","key",".*doubleclick\\.net.*","value","Ad Platform Links"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"Missing Title",
      "vtp_name":"vpPageTitle"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"Missing Page Path",
      "vtp_name":"vpPagePath"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"0",
      "vtp_name":"GTMeventNonInteraction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"GTMeventValue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"GTMeventCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"GTMeventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"GTMeventLabel"
    },{
      "function":"__v",
      "convert_null_to":"N\/A",
      "convert_undefined_to":"N\/A",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"GTMeventLabel2"
    },{
      "function":"__v",
      "convert_null_to":"N\/A",
      "convert_undefined_to":"N\/A",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"GTMeventLabel3"
    },{
      "function":"__c",
      "vtp_value":"1058987"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=GTMuserData.current_session.utm_source;return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=GTMuserData.current_session.utm_medium;return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"",["escape",["macro",22],7],"-",["escape",["macro",23],7],"-",["escape",["macro",24],7],"\";return output=a.replace(\/ +\/g,\"\")})();"]
    },{
      "function":"__u",
      "convert_null_to":["macro",9],
      "convert_undefined_to":["macro",9],
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_source",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "convert_null_to":["macro",9],
      "convert_undefined_to":["macro",9],
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_medium",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__t"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=localStorage.getItem(\"_psegs\");return a})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"idx_aud_sync"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.querySelector(\"h1\").innerText})();"]
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__j",
      "vtp_name":"document.title"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var f=\"",["escape",["macro",7],7],"\";f=f.trim();var c=\"",["escape",["macro",5],7],"\";c=c.trim();var e=\"",["escape",["macro",6],7],"\";e=e.trim();var b=\"",["escape",["macro",36],7],"\";b=b.replace(\/[\u0026\\\/\\\\#,+()$~%.'\":*?\u003C\u003E{}]\/g,\"\");var g=\"",["escape",["macro",37],7],"\",a=\"\",d=\"",["escape",["macro",38],7],"\";d=d.replace(\/(-|_)\/g,\" \").replace(\/[\u0026\\\/\\\\#,+()$~%.'\":*?\u003C\u003E{}]\/g,\"\");switch(f){case \"\\u05e2\\u05de\\u05d5\\u05d3 \\u05d4\\u05d1\\u05d9\\u05ea\":a=\"Home - Sport5\";break;case \"\\u05e2\\u05de\\u05d5\\u05d3 \\u05db\\u05ea\\u05d1\\u05d4\":a=\"Article - \"+\nb;break;case \"\\u05e2\\u05de\\u05d5\\u05d3 \\u05e7\\u05d8\\u05d2\\u05d5\\u05e8\\u05d9\\u05d4\":a=\"\\u05e8\\u05d0\\u05e9\\u05d9\"===e?\"Category - \"+c:\"Sub Category - \"+c+\" - \"+e;break;case \"\\u05d6\\u05d9\\u05e8\\u05ea \\u05de\\u05e9\\u05d7\\u05e7\":a=\"Play by Play - \"+b;break;case \"\\u05d3\\u05e7\\u05d4 \\u05d0\\u05d7\\u05e8\\u05d9 \\u05d3\\u05e7\\u05d4\":a=\"Day Events - \"+d;break;case \"\\u05d8\\u05d1\\u05dc\\u05d0\\u05d5\\u05ea \\u05d5\\u05e1\\u05d8\\u05d8\\u05d9\\u05e1\\u05d8\\u05d9\\u05e7\\u05d4\":a=\"Tables and Statistics - \"+c;break;case \"\\u05e2\\u05de\\u05d5\\u05d3 \\u05e7\\u05d1\\u05d5\\u05e6\\u05d4\":a=\n\"Team - \"+d;break;case \"\\u05d6\\u05d9\\u05e8\\u05ea \\u05de\\u05e9\\u05d7\\u05e7 \\u05db\\u05d3\\u05d5\\u05e8\\u05e1\\u05dc\":a=\"Play Basket - \"+b;break;case \"\\u05e2\\u05de\\u05d5\\u05d3 \\u05ea\\u05d2\\u05d9\\u05ea\":a=\"Tag - \"+d;break;case \"\\u05e2\\u05de\\u05d5\\u05d3 \\u05e9\\u05d7\\u05e7\\u05df\":a=\"Player - \"+d;break;case \"404\":a=\"404\";break;case \"\\u05d0\\u05d7\\u05e8\":a=g.match(\/^\\\/Author\\\/.+\/)?\"Auther - \"+b:\"\\u05dc\\u05d5\\u05d7 \\u05ea\\u05d5\\u05e6\\u05d0\\u05d5\\u05ea\"===c?\"Score Board - \"+b:\"Other\"}return a})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__e"
    }],
  "tags":[{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"scroll",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",13],
      "vtp_eventAction":["macro",14],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":2
    },{
      "function":"__ua",
      "metadata":["map"],
      "setup_tags":["list",["tag",13,0]],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",13],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":3
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",17],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",13],
      "vtp_eventAction":["macro",16],
      "vtp_eventLabel":["macro",15],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":5
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","title","value",["macro",18]],["map","fieldName","page","value",["macro",19]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",13],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":7
    },{
      "function":"__ua",
      "metadata":["map"],
      "teardown_tags":["list",["tag",17,0]],
      "once_per_event":true,
      "vtp_nonInteraction":["macro",20],
      "vtp_overrideGaSettings":true,
      "vtp_eventValue":["macro",21],
      "vtp_eventCategory":["macro",22],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",13],
      "vtp_eventAction":["macro",23],
      "vtp_eventLabel":["macro",24],
      "vtp_dimension":["list",["map","index","4","dimension",["macro",25]],["map","index","5","dimension",["macro",26]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":43
    },{
      "function":"__cvt_9317816_45",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_addRevenue":false,
      "vtp_accountId":["macro",27],
      "vtp_addItemUrl":false,
      "vtp_addOther":false,
      "vtp_pixelType":"page_view",
      "vtp_addCurrency":false,
      "tag_id":46
    },{
      "function":"__cvt_9317816_45",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_addRevenue":false,
      "vtp_accountId":["macro",27],
      "vtp_addItemUrl":false,
      "vtp_eventName":"custom",
      "vtp_addOther":false,
      "vtp_pixelType":"event",
      "vtp_customEventName":["macro",30],
      "vtp_addCurrency":false,
      "tag_id":49
    },{
      "function":"__ua",
      "metadata":["map"],
      "setup_tags":["list",["tag",13,0]],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",13],
      "vtp_trackingId":"UA-810100-9",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":62
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"40",
      "vtp_verticalThresholdOn":true,
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"9317816_5",
      "vtp_enableTriggerStartOption":true,
      "tag_id":83
    },{
      "function":"__sdl",
      "vtp_verticalThresholdUnits":"PERCENT",
      "vtp_verticalThresholdsPercent":"40",
      "vtp_verticalThresholdOn":true,
      "vtp_horizontalThresholdOn":false,
      "vtp_uniqueTriggerId":"9317816_9",
      "vtp_enableTriggerStartOption":true,
      "tag_id":84
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"9317816_14",
      "tag_id":85
    },{
      "function":"__cl",
      "tag_id":86
    },{
      "function":"__html",
      "metadata":["map"],
      "teardown_tags":["list",["tag",18,2]],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction GTMsaveUserData(a){a\u0026\u0026(GTMuserData=a);GTMuserData.last_update=Date.now();localStorage.setItem(\"GTMuserData\",JSON.stringify(GTMuserData))}function GTMinitiateUserData(){var a=JSON.parse(localStorage.getItem(\"GTMuserData\"));a||(a={current_session:{}},a.creation_time=Date.now(),GTMsaveUserData(a));return a}\nfunction GTMsessionCounter(a){GTMuserData.current_session||(GTMuserData.current_session={});GTMuserData.current_session[a]=GTMuserData.current_session[a]?GTMuserData.current_session[a]+1:1;GTMsaveUserData();return GTMuserData.current_session[a]}function GTMuserLegitPageView(){GTMuserData.legit_page_views=GTMuserData.legit_page_views?GTMuserData.legit_page_views+1:1;GTMsaveUserData();GTMsessionCounter(\"legit_page_views\");return GTMuserData.legit_page_views}\nfunction GTMuserSessions(){GTMuserData.sessions=GTMuserData.sessions?GTMuserData.sessions+1:1;GTMsaveUserData();return GTMuserData.sessions}var GTMuserData=GTMinitiateUserData(),GTMactiveGaSession=",["escape",["macro",3],8,16],";\n1!=GTMactiveGaSession\u0026\u0026(GTMuserSessions(),GTMuserData.current_session={},GTMutmSource=",["escape",["macro",31],8,16],",GTMutmMedium=",["escape",["macro",32],8,16],",GTMutmSource\u0026\u0026(GTMuserData.current_session.utm_source=GTMutmSource),GTMutmMedium\u0026\u0026(GTMuserData.current_session.utm_medium=GTMutmMedium),GTMsaveUserData(GTMuserData),GTMsetCookie(\"active_ga_session\",1,30));GTMuserLegitPageView();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":27
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction GTMsetCookie(a,b,c){var d=new Date;d.setTime(d.getTime()+6E4*c);c=\"expires\\x3d\"+d.toUTCString();document.cookie=a+\"\\x3d\"+b+\";\"+c+\";path\\x3d\/;domain\\x3dsport5.co.il\"}function GTMsetSessionCookie(a,b){document.cookie=a+\"\\x3d\"+b+\";0;path\\x3d\/;domain\\x3dsport5.co.il\"};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":29
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",13,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar GTMlsPsegs=",["escape",["macro",34],8,16],",GTMcookiePsegs=",["escape",["macro",35],8,16],";if(GTMlsPsegs\u0026\u0026!GTMpsegsChecked){var GTMpsegsChecked=!0;GTMcookiePsegs?GTMlsPsegs!==GTMcookiePsegs\u0026\u0026GTMsetSessionCookie(\"idx_aud_sync\",GTMlsPsegs):GTMsetSessionCookie(\"idx_aud_sync\",GTMlsPsegs)};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":72
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E\"undefined\"!==typeof jsInterface\u0026\u0026jsInterface.sendEvent(\"custom_screen_view\",\"{'screen_name':'",["escape",["macro",39],7],"','screen_class':'",["escape",["macro",11],7],["escape",["macro",37],7],"','pageCategory':'",["escape",["macro",5],7],"','pageSubCategory':'",["escape",["macro",6],7],"','pageContentType':'",["escape",["macro",7],7],"','native':'false'}\");\"undefined\"!==typeof window.webkit\u0026\u0026window.webkit.messageHandlers.sendEvent.postMessage('{\"eventName\":\"custom_screen_view\",\"params\":{\"screen_name\":\"",["escape",["macro",39],7],"\",\"screen_class\":\"",["escape",["macro",11],7],["escape",["macro",37],7],"\",\"pageCategory\":\"",["escape",["macro",5],7],"\",\"pageSubCategory\":\"",["escape",["macro",6],7],"\",\"pageContentType\":\"",["escape",["macro",7],7],"\",\"native\":\"false\"}}');\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":78
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar gtmEentCategory=\"UI Elements\",gtmEventAction=\"News Room\",gtmEventLabel,gtmEventLabel2,gtmEventLabel3;function GTMsendEvent(a,b,c){dataLayer.push({GTMeventCategory:gtmEentCategory,GTMeventAction:gtmEventAction,GTMeventLabel:a,GTMeventLabel2:b,GTMeventLabel3:c,GTMeventNonInteraction:1,event:\"GTM_Send_Event\"})}var gtmClickElement=",["escape",["macro",40],8,16],";\nif(gtmClickElement.matches(\"a.newsroom-in-title\")||gtmClickElement.matches(\"div.newsroom-title-in a\"))GTMsendEvent(\"News Room Title\");else if(gtmClickElement.matches(\"a.go-to-newsroom-a\"))GTMsendEvent(\"More News Button\");else if(gtmClickElement.matches(\"span.container-message-in,span.container-message-in *\")){gtmClickElement=gtmClickElement.closest(\"span.container-message-in\");var gtmNewsflashText=\"\\u05dc\\u05dc\\u05d0 \\u05d8\\u05e7\\u05e1\\u05d8\",gtmNewsflashType=\"Message\";gtmClickElement.querySelector(\".with-reply\")\u0026\u0026\n(gtmNewsflashType=\"Reply\");gtmClickElement.querySelector(\".newsroom-content-pos\\x3e.content-text\")\u0026\u0026(gtmNewsflashText=gtmClickElement.querySelector(\".newsroom-content-pos\\x3e.content-text\").textContent.trim());gtmEventLabel2=gtmNewsflashType+\": \"+gtmNewsflashText;(gtmEventLabel3=gtmClickElement.getAttribute(\"user\"))\u0026\u0026GTMsendEvent(\"Specific Item\",gtmEventLabel2,gtmEventLabel3)};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":80
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"clearLabels\",GTMeventLabel2:void 0,GTMeventLabel3:void 0});var GTMeventCategory=void 0,GTMeventAction=void 0,GTMeventLabel=void 0,GTMeventLabel2=void 0,GTMeventLabel3=void 0;\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":82
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efunction GTMsendEvent(a,b,c){dataLayer.push({GTMeventCategory:a,GTMeventAction:b,GTMeventLabel:c,GTMeventNonInteraction:1,event:\"GTM_Send_Event\"})}1==GTMuserData.sessions\u0026\u00261==GTMuserData.legit_page_views\u0026\u0026GTMsendEvent(\"Quality Measures\",\"Acquisition\",\"First Session\");5==GTMuserData.sessions\u0026\u00261==GTMuserData.current_session.legit_page_views\u0026\u0026GTMsendEvent(\"Quality Measures\",\"Retention\",\"5 Sessions Completed\");\n3==GTMuserData.sessions\u0026\u00261==GTMuserData.current_session.legit_page_views\u0026\u0026GTMsendEvent(\"Quality Measures\",\"Retention\",\"3 Sessions Completed\");5==GTMuserData.current_session.legit_page_views\u0026\u0026GTMsendEvent(\"Quality Measures\",\"Engagement\",\"5 Page Views Completed\");3==GTMuserData.current_session.legit_page_views\u0026\u0026GTMsendEvent(\"Quality Measures\",\"Engagement\",\"3 Page Views Completed\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":36
    }],
  "predicates":[{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"http:\/\/qa-mondial2018.sport5.co.il\/TemplatesExternal\/Mondial\/Mondial2018.aspx?FolderId=5485\u0026lang=HE"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"http:\/\/qa-mondial2018.sport5.co.il"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.scrollDepth"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"(^$|((^|,)9317816_5($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"TemplatesExternal\/Mondial\/Mondial2018.aspx?FolderID=7524\u0026lang=He"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"(^$|((^|,)9317816_9($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",11],
      "arg1":"sites.sport5.co.il"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"sport5.co.il"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"undefined"
    },{
      "function":"_cn",
      "arg0":["macro",16],
      "arg1":"undefined"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"rgesport5-vh.akamaihd.net"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"sport5-lh.akamaihd.net"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"(^$|((^|,)9317816_14($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"Virtual_Pageview"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"GTM_Send_Event"
    },{
      "function":"_eq",
      "arg0":["macro",22],
      "arg1":"Quality Measures"
    },{
      "function":"_eq",
      "arg0":["macro",28],
      "arg1":"taboola"
    },{
      "function":"_eq",
      "arg0":["macro",29],
      "arg1":"content-text"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"רכב"
    },{
      "function":"_re",
      "arg0":["macro",11],
      "arg1":"(^www.sport5.co.il$|^m.sport5.co.il$)"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.dom"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.load"
    },{
      "function":"_css",
      "arg0":["macro",40],
      "arg1":".news-room-container *"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.click"
    }],
  "rules":[
    [["if",0,1,2,3],["add",0]],
    [["if",2,4,5],["add",0]],
    [["if",6],["add",1,5,13,14,8,9,10,11]],
    [["if",13,14],["unless",8,9,10,11,12],["add",2]],
    [["if",15],["add",3]],
    [["if",16],["add",4]],
    [["if",16,17,18,19],["add",6]],
    [["if",6,20],["add",7]],
    [["if",21,22],["add",12]],
    [["if",22],["add",14,15]],
    [["if",23],["add",14]],
    [["if",24,25],["add",16]],
    [["if",6,7],["block",1]]]
},
"runtime":[[50,"__cvt_9317816_45",[46,"a"],[52,"b",["require","createQueue"]],[52,"c",["require","injectScript"]],[52,"d",["require","copyFromWindow"]],[52,"e",["require","makeTableMap"]],[52,"f",["require","logToConsole"]],[52,"g",["require","encodeUriComponent"]],[52,"h",["b","__tfa_pixel_init"]],[52,"i",["d","__tfa_pixel_init"]],[52,"j",["b","_tfa"]],[52,"k",[17,[15,"a"],"accountId"]],[52,"l",[17,[15,"a"],"pixelType"]],[52,"m",[39,[20,[17,[15,"a"],"eventName"],"custom"],[17,[15,"a"],"customEventName"],[17,[15,"a"],"eventName"]]],[52,"n",[39,[17,[15,"a"],"otherParams"],["e",[17,[15,"a"],"otherParams"],"name","value"],[8]]],[52,"o",[8,"notify","event","id",[15,"k"]]],[22,[17,[15,"a"],"itemUrl"],[46,[43,[15,"o"],"item-url",[17,[15,"a"],"itemUrl"]]]],[22,[17,[15,"a"],"revenue"],[46,[43,[15,"o"],"revenue",[17,[15,"a"],"revenue"]]]],[22,[17,[15,"a"],"currency"],[46,[43,[15,"o"],"currency",[17,[15,"a"],"currency"]]]],[55,"p",[15,"n"],[46,[43,[15,"o"],[15,"p"],[16,[15,"n"],[15,"p"]]]]],[22,[20,[2,[15,"i"],"indexOf",[7,[15,"k"]]],[27,1]],[46,[53,[52,"p",[8,"notify","event","id",[15,"k"],"name","page_view"]],[22,[17,[15,"a"],"itemUrl"],[46,[43,[15,"p"],"item-url",[17,[15,"a"],"itemUrl"]]]],["j",[15,"p"]],["h",[15,"k"]]]]],[22,[20,[15,"l"],"event"],[46,[43,[15,"o"],"name",[15,"m"]],["j",[15,"o"]]]],["c",[0,[0,"https://cdn.taboola.com/libtrc/unip/",["g",[15,"k"]]],"/tfa.js"],[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"],"_tfa_script"]]]
,"permissions":{"__cvt_9317816_45":{"access_globals":{"keys":[{"key":"_tfa","read":true,"write":true,"execute":false},{"key":"__tfa_pixel_init","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/cdn.taboola.com\/libtrc\/unip\/*"]},"logging":{"environments":"debug"}}}
,"sandboxed_scripts":["__cvt_9317816_45"]


};


/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var k,aa=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},da=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}},ea="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},fa;
if("function"==typeof Object.setPrototypeOf)fa=Object.setPrototypeOf;else{var ha;a:{var ja={a:!0},ka={};try{ka.__proto__=ja;ha=ka.a;break a}catch(a){}ha=!1}fa=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var na=fa,oa=function(a,b){a.prototype=ea(b.prototype);a.prototype.constructor=a;if(na)na(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Fj=b.prototype},pa=this||self,ra=function(a){return a};var sa=function(a,b){this.g=a;this.s=b};var ta=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},ua=function(){this.B={};this.F=!1;this.H={}},va=function(a,b){var c=[],d;for(d in a.B)if(a.B.hasOwnProperty(d))switch(d=d.substr(5),b){case 1:c.push(d);break;case 2:c.push(a.get(d));break;case 3:c.push([d,a.get(d)])}return c};ua.prototype.get=function(a){return this.B["dust."+a]};ua.prototype.set=function(a,b){this.F||(a="dust."+a,this.H.hasOwnProperty(a)||(this.B[a]=b))};
ua.prototype.has=function(a){return this.B.hasOwnProperty("dust."+a)};var wa=function(a,b){b="dust."+b;a.F||a.H.hasOwnProperty(b)||delete a.B[b]};ua.prototype.rb=function(){this.F=!0};var n=function(a){this.s=new ua;this.g=[];this.B=!1;a=a||[];for(var b in a)a.hasOwnProperty(b)&&(ta(b)?this.g[Number(b)]=a[Number(b)]:this.s.set(b,a[b]))};k=n.prototype;k.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.g.length;c++){var d=this.g[c];null===d||void 0===d?b.push(""):d instanceof n?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
k.set=function(a,b){if(!this.B)if("length"===a){if(!ta(b))throw Error("RangeError: Length property must be a valid integer.");this.g.length=Number(b)}else ta(a)?this.g[Number(a)]=b:this.s.set(a,b)};k.get=function(a){return"length"===a?this.length():ta(a)?this.g[Number(a)]:this.s.get(a)};k.length=function(){return this.g.length};k.qb=function(){for(var a=va(this.s,1),b=0;b<this.g.length;b++)a.push(b+"");return new n(a)};var xa=function(a,b){ta(b)?delete a.g[Number(b)]:wa(a.s,b)};k=n.prototype;
k.pop=function(){return this.g.pop()};k.push=function(a){return this.g.push.apply(this.g,Array.prototype.slice.call(arguments))};k.shift=function(){return this.g.shift()};k.splice=function(a,b,c){return new n(this.g.splice.apply(this.g,arguments))};k.unshift=function(a){return this.g.unshift.apply(this.g,Array.prototype.slice.call(arguments))};k.has=function(a){return ta(a)&&this.g.hasOwnProperty(a)||this.s.has(a)};k.rb=function(){this.B=!0;Object.freeze(this.g);this.s.rb()};var ya=function(){function a(f,g){if(b[f]){if(b[f].od+g>b[f].max)throw Error("Quota exceeded");b[f].od+=g}}var b={},c=void 0,d=void 0,e={Pi:function(f){c=f},mg:function(){c&&a(c,1)},Ri:function(f){d=f},sb:function(f){d&&a(d,f)},fj:function(f,g){b[f]=b[f]||{od:0};b[f].max=g},ri:function(f){return b[f]&&b[f].od||0},reset:function(){b={}},ci:a};e.onFnConsume=e.Pi;e.consumeFn=e.mg;e.onStorageConsume=e.Ri;e.consumeStorage=e.sb;e.setMax=e.fj;e.getConsumed=e.ri;e.reset=e.reset;e.consume=e.ci;return e};var Aa=function(a,b){this.B=a;this.P=function(c,d,e){return c.apply(d,e)};this.F=b;this.s=new ua;this.g=this.H=void 0};Aa.prototype.add=function(a,b){Ca(this,a,b,!1)};var Ca=function(a,b,c,d){if(!a.s.F)if(a.B.sb(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.s;e.set(b,c);e.H["dust."+b]=!0}else a.s.set(b,c)};
Aa.prototype.set=function(a,b){this.s.F||(!this.s.has(a)&&this.F&&this.F.has(a)?this.F.set(a,b):(this.B.sb(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.s.set(a,b)))};Aa.prototype.get=function(a){return this.s.has(a)?this.s.get(a):this.F?this.F.get(a):void 0};Aa.prototype.has=function(a){return!!this.s.has(a)||!(!this.F||!this.F.has(a))};var Ea=function(a){var b=new Aa(a.B,a);a.H&&(b.H=a.H);b.P=a.P;b.g=a.g;return b};var Fa={},Ga=function(a,b){Fa[a]=Fa[a]||[];Fa[a][b]=!0},Ha=function(a){for(var b=[],c=Fa[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var Ia=function(){},Ja=function(a){return"function"==typeof a},A=function(a){return"string"==typeof a},La=function(a){return"number"==typeof a&&!isNaN(a)},Ma=function(a){var b="[object Array]"==Object.prototype.toString.call(Object(a));Array.isArray?Array.isArray(a)!==b&&Ga("TAGGING",4):Ga("TAGGING",5);return b},Na=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Oa=function(a,b){if(a&&Ma(a))for(var c=
0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Qa=function(a,b){if(!La(a)||!La(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ta=function(a,b){for(var c=new Ra,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Ua=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Wa=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Xa=
function(a){return Math.round(Number(a))||0},Ya=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Za=function(a){var b=[];if(Ma(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},$a=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},bb=function(){return new Date(Date.now())},cb=function(){return bb().getTime()},Ra=function(){this.prefix="gtm.";this.values={}};Ra.prototype.set=function(a,b){this.values[this.prefix+a]=b};
Ra.prototype.get=function(a){return this.values[this.prefix+a]};
var db=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},eb=function(a){var b=a;return function(){if(b){var c=b;b=void 0;try{c()}catch(d){}}}},fb=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},gb=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},hb=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},ib=function(a,b){var c=F;b=b||[];for(var d=c,e=0;e<a.length-1;e++){if(!d.hasOwnProperty(a[e]))return;d=d[a[e]];if(0<=
Na(b,d))return}return d},jb=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},kb=/^\w{1,9}$/,lb=function(a){var b=[];Ua(a,function(c,d){kb.test(c)&&d&&b.push(c)});return b.join(",")};var mb=function(a,b){ua.call(this);this.P=a;this.Ba=b};oa(mb,ua);mb.prototype.toString=function(){return this.P};mb.prototype.qb=function(){return new n(va(this,1))};mb.prototype.g=function(a,b){a.B.mg();return this.Ba.apply(new qb(this,a),Array.prototype.slice.call(arguments,1))};mb.prototype.s=function(a,b){try{return this.g.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};
var sb=function(a,b){for(var c,d=0;d<b.length&&!(c=rb(a,b[d]),c instanceof sa);d++);return c},rb=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof mb))throw Error("Attempting to execute non-function "+b[0]+".");return c.g.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.H;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}},qb=function(a,b){this.s=a;this.g=b},G=function(a,b){var c=a.g;return Ma(b)?rb(c,b):b},H=function(a){return a.s.P};var tb=function(){ua.call(this)};oa(tb,ua);tb.prototype.qb=function(){return new n(va(this,1))};var wb={control:function(a,b){return new sa(a,G(this,b))},fn:function(a,b,c){var d=this.g,e=G(this,b);if(!(e instanceof n))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.g.B.sb(a.length+f.length);return new mb(a,function(){return function(g){var h=Ea(d);void 0===h.g&&(h.g=this.g.g);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=G(this,l[m]),l[m]instanceof sa)return l[m];for(var p=e.get("length"),q=
0;q<p;q++)q<l.length?h.add(e.get(q),l[q]):h.add(e.get(q),void 0);h.add("arguments",new n(l));var r=sb(h,f);if(r instanceof sa)return"return"===r.g?r.s:r}}())},list:function(a){var b=this.g.B;b.sb(arguments.length);for(var c=new n,d=0;d<arguments.length;d++){var e=G(this,arguments[d]);"string"===typeof e&&b.sb(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.g.B,c=new tb,d=0;d<arguments.length-1;d+=2){var e=G(this,arguments[d])+"",f=G(this,arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.sb(g);c.set(e,f)}return c},undefined:function(){}};var xb=function(){this.B=ya();this.g=new Aa(this.B)},yb=function(a,b,c){var d=new mb(b,c);d.rb();a.g.set(b,d)},zb=function(a,b,c){wb.hasOwnProperty(b)&&yb(a,c||b,wb[b])};xb.prototype.Kb=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.s(c)};xb.prototype.s=function(a){for(var b,c=0;c<arguments.length;c++)b=rb(this.g,arguments[c]);return b};xb.prototype.F=function(a,b){var c=Ea(this.g);c.g=a;for(var d,e=1;e<arguments.length;e++)d=d=rb(c,arguments[e]);return d};var Ab,Cb=function(){if(void 0===Ab){var a=null,b=pa.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:ra,createScript:ra,createScriptURL:ra})}catch(c){pa.console&&pa.console.error(c.message)}Ab=a}else Ab=a}return Ab};var Eb=function(a,b){this.g=b===Db?a:""};Eb.prototype.toString=function(){return this.g+""};var Db={},Fb=function(a){var b=Cb(),c=b?b.createScriptURL(a):a;return new Eb(c,Db)};var Gb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Hb;a:{var Ib=pa.navigator;if(Ib){var Jb=Ib.userAgent;if(Jb){Hb=Jb;break a}}Hb=""}var Kb=function(a){return-1!=Hb.indexOf(a)};var Mb=function(a,b,c){this.g=c===Lb?a:""};Mb.prototype.toString=function(){return this.g.toString()};var Nb=function(a){return a instanceof Mb&&a.constructor===Mb?a.g:"type_error:SafeHtml"},Lb={},Ob=function(a){var b=Cb(),c=b?b.createHTML(a):a;return new Mb(c,null,Lb)},Pb=new Mb(pa.trustedTypes&&pa.trustedTypes.emptyHTML||"",0,Lb);var Qb=function(a,b){a.src=b instanceof Eb&&b.constructor===Eb?b.g:"type_error:TrustedResourceUrl";var c,d,e=(a.ownerDocument&&a.ownerDocument.defaultView||window).document,f=null===(d=e.querySelector)||void 0===d?void 0:d.call(e,"script[nonce]");(c=f?f.nonce||f.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)};var Rb=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},Ub=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};var Vb=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);var c=a.firstChild.firstChild;a.innerHTML=Nb(Pb);return!c.parentElement}),Wb=function(a,b){if(Vb())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Nb(b)};var F=window,J=document,Xb=navigator,Yb=J.currentScript&&J.currentScript.src,Zb=function(a,b){var c=F[a];F[a]=void 0===c?b:c;return F[a]},$b=function(a){var b=J.getElementsByTagName("script")[0]||J.body||J.head;b.parentNode.insertBefore(a,b)},ac=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},bc={async:1,nonce:1,onerror:1,onload:1,src:1,type:1},cc=function(a,b,c,d){var e=J.createElement("script");
d&&Ua(d,function(f,g){f=f.toLowerCase();bc.hasOwnProperty(f)||e.setAttribute(f,g)});e.type="text/javascript";e.async=!0;Qb(e,Fb(a));ac(e,b);c&&(e.onerror=c);$b(e);return e},dc=function(){if(Yb){var a=Yb.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},ec=function(a,b){var c=J.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=J.body&&J.body.lastChild||J.body||J.head;d.parentNode.insertBefore(c,
d);ac(c,b);void 0!==a&&(c.src=a);return c},fc=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},gc=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},hc=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},L=function(a){F.setTimeout(a,0)},ic=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:
null},jc=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},kc=function(a){var b=J.createElement("div"),c=Ob("A<div>"+a+"</div>");Wb(b,c);b=b.lastChild;for(var d=[];b.firstChild;)d.push(b.removeChild(b.firstChild));return d},lc=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;f=f.parentElement}return null},
mc=function(a){Xb.sendBeacon&&Xb.sendBeacon(a)||fc(a)},nc=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var oc=function(a,b){return G(this,a)&&G(this,b)},pc=function(a,b){return G(this,a)===G(this,b)},qc=function(a,b){return G(this,a)||G(this,b)},rc=function(a,b){a=G(this,a);b=G(this,b);return-1<String(a).indexOf(String(b))},sc=function(a,b){a=String(G(this,a));b=String(G(this,b));return a.substring(0,b.length)===b},tc=function(a,b){a=G(this,a);b=G(this,b);switch(a){case "pageLocation":var c=F.location.href;b instanceof tb&&b.get("stripProtocol")&&(c=c.replace(/^https?:\/\//,""));return c}};var vc=function(){this.g=new xb;uc(this)};vc.prototype.Kb=function(a){return this.g.s(a)};var uc=function(a){zb(a.g,"map");var b=function(c,d){yb(a.g,c,d)};b("and",oc);b("contains",rc);b("equals",pc);b("or",qc);b("startsWith",sc);b("variable",tc)};var wc=function(a){if(a instanceof wc)return a;this.Qa=a};wc.prototype.toString=function(){return String(this.Qa)};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var xc=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,yc=function(a){if(null==a)return String(a);var b=xc.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},zc=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ac=function(a){if(!a||"object"!=yc(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!zc(a,"constructor")&&!zc(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||zc(a,b)},M=function(a,b){var c=b||("array"==yc(a)?[]:{}),d;for(d in a)if(zc(a,d)){var e=a[d];"array"==yc(e)?("array"!=yc(c[d])&&(c[d]=[]),c[d]=M(e,c[d])):Ac(e)?(Ac(c[d])||(c[d]={}),c[d]=M(e,c[d])):c[d]=e}return c};var Cc=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m=va(h,1),p=0;p<m.length;p++)l[m[p]]=g(h.get(m[p]))},g=function(h){var l=Na(d,h);if(-1<l)return e[l];if(h instanceof n){var m=[];d.push(h);e.push(m);for(var p=h.qb(),q=0;q<p.length();q++)m[p.get(q)]=g(h.get(p.get(q)));return m}if(h instanceof tb){var r={};d.push(h);e.push(r);f(h,r);return r}if(h instanceof mb){var t=function(){for(var u=Array.prototype.slice.call(arguments,0),v=0;v<u.length;v++)u[v]=Bc(u[v],b,!!c);var w=b?b.B:ya(),y=new Aa(w);
b&&(y.g=b.g);return g(h.g.apply(h,[y].concat(u)))};d.push(h);e.push(t);f(h,t);return t}switch(typeof h){case "boolean":case "number":case "string":case "undefined":return h;case "object":if(null===h)return null}};return g(a)},Bc=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m in h)h.hasOwnProperty(m)&&l.set(m,g(h[m]))},g=function(h){var l=Na(d,
h);if(-1<l)return e[l];if(Ma(h)||Wa(h)){var m=new n([]);d.push(h);e.push(m);for(var p in h)h.hasOwnProperty(p)&&m.set(p,g(h[p]));return m}if(Ac(h)){var q=new tb;d.push(h);e.push(q);f(h,q);return q}if("function"===typeof h){var r=new mb("",function(u){for(var v=Array.prototype.slice.call(arguments,0),w=0;w<v.length;w++)v[w]=Cc(G(this,v[w]),b,!!c);return g((0,this.g.P)(h,h,v))});d.push(h);e.push(r);f(h,r);return r}var t=typeof h;if(null===h||"string"===t||"number"===t||"boolean"===t)return h;};return g(a)};var Dc=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b},Ec=function(a){if(void 0===a||Ma(a)||Ac(a))return!0;switch(typeof a){case "boolean":case "number":case "string":case "function":return!0}return!1};var Fc={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof n)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new n(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.g(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.g(a,this.get(e),e,this)&&d.push(this.get(e));return new n(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.g(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.g(a,this.get(e),e,this));return new n(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g===d)throw Error("TypeError: Reduce on List with no elements.");}for(var h=f;h<d;h++)this.has(h)&&(e=b.g(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var h=f;0<=h;h--)this.has(h)&&(e=b.g(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=Dc(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):xa(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new n(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.g(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=Dc(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.g(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):xa(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var Mc="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),Nc=new sa("break"),Oc=new sa("continue"),Pc=function(a,b){return G(this,a)+G(this,b)},Qc=function(a,b){return G(this,a)&&G(this,b)},Rc=function(a,b,c){a=G(this,a);b=G(this,b);c=G(this,c);if(!(c instanceof n))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"===typeof a||"number"===typeof a){if("toString"===b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"===typeof a){if(0<=Na(Mc,b)){var d=Cc(c);return Bc(a[b].apply(a,d),this.g)}throw Error("TypeError: "+b+" is not a function");}if(a instanceof n){if(a.has(b)){var e=a.get(b);if(e instanceof mb){var f=Dc(c);f.unshift(this.g);return e.g.apply(e,f)}throw Error("TypeError: "+b+" is not a function");}if(0<=Na(Fc.supportedMethods,b)){var g=
Dc(c);g.unshift(this.g);return Fc[b].apply(a,g)}}if(a instanceof mb||a instanceof tb){if(a.has(b)){var h=a.get(b);if(h instanceof mb){var l=Dc(c);l.unshift(this.g);return h.g.apply(h,l)}throw Error("TypeError: "+b+" is not a function");}if("toString"===b)return a instanceof mb?a.P:a.toString();if("hasOwnProperty"===b)return a.has.apply(a,Dc(c))}if(a instanceof wc&&"toString"===b)return a.toString();throw Error("TypeError: Object has no '"+b+"' property.");},Sc=function(a,b){a=G(this,a);if("string"!==
typeof a)throw Error("Invalid key name given for assignment.");var c=this.g;if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=G(this,b);c.set(a,d);return d},Tc=function(a){var b=Ea(this.g),c=sb(b,Array.prototype.slice.apply(arguments));if(c instanceof sa)return c},Uc=function(){return Nc},Vc=function(a){for(var b=G(this,a),c=0;c<b.length;c++){var d=G(this,b[c]);if(d instanceof sa)return d}},Wc=function(a){for(var b=this.g,c=0;c<arguments.length-1;c+=2){var d=arguments[c];
if("string"===typeof d){var e=G(this,arguments[c+1]);Ca(b,d,e,!0)}}},Xc=function(){return Oc},Yc=function(a,b,c){var d=new n;b=G(this,b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.g.add(a,G(this,f))},Zc=function(a,b){return G(this,a)/G(this,b)},$c=function(a,b){a=G(this,a);b=G(this,b);var c=a instanceof wc,d=b instanceof wc;return c||d?c&&d?a.Qa==b.Qa:!1:a==b},ad=function(a){for(var b,c=0;c<arguments.length;c++)b=
G(this,arguments[c]);return b};function bd(a,b,c,d){for(var e=0;e<b();e++){var f=a(c(e)),g=sb(f,d);if(g instanceof sa){if("break"===g.g)break;if("return"===g.g)return g}}}function cd(a,b,c){if("string"===typeof b)return bd(a,function(){return b.length},function(f){return f},c);if(b instanceof tb||b instanceof n||b instanceof mb){var d=b.qb(),e=d.length();return bd(a,function(){return e},function(f){return d.get(f)},c)}}
var dd=function(a,b,c){a=G(this,a);b=G(this,b);c=G(this,c);var d=this.g;return cd(function(e){d.set(a,e);return d},b,c)},ed=function(a,b,c){a=G(this,a);b=G(this,b);c=G(this,c);var d=this.g;return cd(function(e){var f=Ea(d);Ca(f,a,e,!0);return f},b,c)},fd=function(a,b,c){a=G(this,a);b=G(this,b);c=G(this,c);var d=this.g;return cd(function(e){var f=Ea(d);f.add(a,e);return f},b,c)},hd=function(a,b,c){a=G(this,a);b=G(this,b);c=G(this,c);var d=this.g;return gd(function(e){d.set(a,e);return d},b,c)},id=
function(a,b,c){a=G(this,a);b=G(this,b);c=G(this,c);var d=this.g;return gd(function(e){var f=Ea(d);Ca(f,a,e,!0);return f},b,c)},jd=function(a,b,c){a=G(this,a);b=G(this,b);c=G(this,c);var d=this.g;return gd(function(e){var f=Ea(d);f.add(a,e);return f},b,c)};
function gd(a,b,c){if("string"===typeof b)return bd(a,function(){return b.length},function(d){return b[d]},c);if(b instanceof n)return bd(a,function(){return b.length()},function(d){return b.get(d)},c);throw new TypeError("The value is not iterable.");}
var kd=function(a,b,c,d){function e(p,q){for(var r=0;r<f.length();r++){var t=f.get(r);q.add(t,p.get(t))}}var f=G(this,a);if(!(f instanceof n))throw Error("TypeError: Non-List argument given to ForLet instruction.");var g=this.g;d=G(this,d);var h=Ea(g);for(e(g,h);rb(h,b);){var l=sb(h,d);if(l instanceof sa){if("break"===l.g)break;if("return"===l.g)return l}var m=Ea(g);e(h,m);rb(m,c);h=m}},ld=function(a){a=G(this,a);var b=this.g,c=!1;if(c&&!b.has(a))throw new ReferenceError(a+" is not defined.");return b.get(a)},md=function(a,b){var c;a=G(this,a);b=G(this,b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+a+".");if(a instanceof tb||a instanceof n||a instanceof mb)c=a.get(b);else if("string"===typeof a)"length"===b?c=a.length:ta(b)&&(c=a[b]);else if(a instanceof wc)return;return c},nd=function(a,b){return G(this,a)>G(this,
b)},od=function(a,b){return G(this,a)>=G(this,b)},ud=function(a,b){a=G(this,a);b=G(this,b);a instanceof wc&&(a=a.Qa);b instanceof wc&&(b=b.Qa);return a===b},vd=function(a,b){return!ud.call(this,a,b)},wd=function(a,b,c){var d=[];G(this,a)?d=G(this,b):c&&(d=G(this,c));var e=sb(this.g,d);if(e instanceof sa)return e},xd=function(a,b){return G(this,a)<G(this,b)},yd=function(a,b){return G(this,a)<=G(this,b)},zd=function(a,b){return G(this,a)%G(this,b)},Ad=function(a,b){return G(this,a)*G(this,b)},Bd=function(a){return-G(this,
a)},Cd=function(a){return!G(this,a)},Dd=function(a,b){return!$c.call(this,a,b)},Ed=function(){return null},Fd=function(a,b){return G(this,a)||G(this,b)},Gd=function(a,b){var c=G(this,a);G(this,b);return c},Hd=function(a){return G(this,a)},Id=function(a){return Array.prototype.slice.apply(arguments)},Jd=function(a){return new sa("return",G(this,a))},Kd=function(a,b,c){a=G(this,a);b=G(this,b);c=G(this,c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof
mb||a instanceof n||a instanceof tb)&&a.set(b,c);return c},Ld=function(a,b){return G(this,a)-G(this,b)},Md=function(a,b,c){a=G(this,a);var d=G(this,b),e=G(this,c);if(!Ma(d)||!Ma(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,h=0;h<d.length;h++)if(g||a===G(this,d[h]))if(f=G(this,e[h]),f instanceof sa){var l=f.g;if("break"===l)return;if("return"===l||"continue"===l)return f}else g=!0;if(e.length===d.length+1&&(f=G(this,e[e.length-1]),f instanceof sa&&("return"===f.g||"continue"===
f.g)))return f},Nd=function(a,b,c){return G(this,a)?G(this,b):G(this,c)},Od=function(a){a=G(this,a);return a instanceof mb?"function":typeof a},Pd=function(a){for(var b=this.g,c=0;c<arguments.length;c++){var d=arguments[c];"string"!==typeof d||b.add(d,void 0)}},Qd=function(a,b,c,d){var e=G(this,d);if(G(this,c)){var f=sb(this.g,e);if(f instanceof sa){if("break"===f.g)return;if("return"===f.g)return f}}for(;G(this,a);){var g=sb(this.g,e);if(g instanceof sa){if("break"===g.g)break;if("return"===g.g)return g}G(this,
b)}},Rd=function(a){return~Number(G(this,a))},Sd=function(a,b){return Number(G(this,a))<<Number(G(this,b))},Td=function(a,b){return Number(G(this,a))>>Number(G(this,b))},Ud=function(a,b){return Number(G(this,a))>>>Number(G(this,b))},Vd=function(a,b){return Number(G(this,a))&Number(G(this,b))},Wd=function(a,b){return Number(G(this,a))^Number(G(this,b))},Xd=function(a,b){return Number(G(this,a))|Number(G(this,b))};var Zd=function(){this.g=new xb;Yd(this)};Zd.prototype.Kb=function(a){return $d(this.g.s(a))};
var de=function(a,b){return $d(ae.g.F(a,b))},Yd=function(a){var b=function(d,e){zb(a.g,d,String(e))};b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);var c=function(d,e){yb(a.g,String(d),e)};c(0,Pc);c(1,Qc);c(2,Rc);c(3,Sc);c(53,Tc);c(4,Uc);c(5,Vc);c(52,Wc);c(6,Xc);c(9,Vc);c(50,Yc);c(10,Zc);c(12,$c);c(13,ad);c(47,dd);c(54,ed);c(55,fd);c(63,kd);c(64,hd);c(65,id);c(66,jd);c(15,ld);c(16,md);c(17,md);c(18,nd);c(19,od);c(20,ud);c(21,vd);c(22,wd);c(23,xd);c(24,yd);c(25,zd);c(26,Ad);c(27,
Bd);c(28,Cd);c(29,Dd);c(45,Ed);c(30,Fd);c(32,Gd);c(33,Gd);c(34,Hd);c(35,Hd);c(46,Id);c(36,Jd);c(43,Kd);c(37,Ld);c(38,Md);c(39,Nd);c(40,Od);c(41,Pd);c(42,Qd);c(58,Rd);c(57,Sd);c(60,Td);c(61,Ud);c(56,Vd);c(62,Wd);c(59,Xd)},fe=function(){var a=ae,b=ee();yb(a.g,"require",b)},ge=function(a,b){a.g.g.P=b};function $d(a){if(a instanceof sa||a instanceof mb||a instanceof n||a instanceof tb||a instanceof wc||null===a||void 0===a||"string"===typeof a||"number"===typeof a||"boolean"===typeof a)return a};var he=function(){var a=function(b){return{toString:function(){return b}}};return{Wg:a("consent"),Gd:a("consent_always_fire"),qf:a("convert_case_to"),rf:a("convert_false_to"),sf:a("convert_null_to"),tf:a("convert_true_to"),uf:a("convert_undefined_to"),oj:a("debug_mode_metadata"),pb:a("function"),Hh:a("instance_name"),Jh:a("live_only"),Kh:a("malware_disabled"),Lh:a("metadata"),tj:a("original_activity_id"),uj:a("original_vendor_template_id"),Nh:a("once_per_event"),Vf:a("once_per_load"),wj:a("priority_override"),
xj:a("respected_consent_types"),Zf:a("setup_tags"),$f:a("tag_id"),ag:a("teardown_tags")}}();
var ie=[],je={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},ke=function(a){return je[a]},le=/[\x00\x22\x26\x27\x3c\x3e]/g;var pe=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,qe={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},re=function(a){return qe[a]};ie[7]=function(a){return String(a).replace(pe,re)};
ie[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(pe,re)+"'"}};var ze=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Ae={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Be=function(a){return Ae[a]};ie[16]=function(a){return a};var De;
var Ee=[],Fe=[],Ge=[],He=[],Ie=[],Je={},Ke,Le,Me,Ne=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Oe=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=Je[c],e={},f;for(f in a)if(a.hasOwnProperty(f))if(0===f.indexOf("vtp_"))d&&b&&b.kg&&b.kg(a[f]),e[void 0!==d?f:f.substr(4)]=a[f];else if(f===he.Gd.toString()&&a[f]){}d&&b&&b.jg&&(e.vtp_gtmCachedValues=b.jg);return void 0!==d?d(e):De(c,e,b)},Qe=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Pe(a[e],b,c));return d},Pe=function(a,b,c){if(Ma(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Pe(a[e],b,c));return d;case "macro":var f=
a[1];if(c[f])return;var g=Ee[f];if(!g||b.Oe(g))return;c[f]=!0;try{var h=Qe(g,b,c);h.vtp_gtmEventId=b.id;d=Oe(h,b);Me&&(d=Me.di(d,h))}catch(y){b.Ag&&b.Ag(y,Number(f)),d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Pe(a[l],b,c)]=Pe(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,p=1;p<a.length;p++){var q=Pe(a[p],b,c);Le&&(m=m||q===Le.dd);d.push(q)}return Le&&m?Le.gi(d):d.join("");case "escape":d=Pe(a[1],b,c);if(Le&&Ma(a[1])&&"macro"===a[1][0]&&Le.Di(a))return Le.Ui(d);d=
String(d);for(var r=2;r<a.length;r++)ie[a[r]]&&(d=ie[a[r]](d));return d;case "tag":var t=a[1];if(!He[t])throw Error("Unable to resolve tag reference "+t+".");return d={sg:a[2],index:t};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=Re(u,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Re=function(a,b,c){try{return Ke(Qe(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Se=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.s=a;this.g=c};oa(Se,Error);function Te(a,b){if(Ma(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)Te(a[c],b[c])}};var Ue=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.B=a;this.s=b;this.g=[]};oa(Ue,Error);var We=function(){return function(a,b){a instanceof Ue||(a=new Ue(a,Ve));b&&a.g.push(b);throw a;}};function Ve(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)La(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var Ze=function(a){function b(r){for(var t=0;t<r.length;t++)d[r[t]]=!0}for(var c=[],d=[],e=Xe(a),f=0;f<Fe.length;f++){var g=Fe[f],h=Ye(g,e);if(h){for(var l=g.add||[],m=0;m<l.length;m++)c[l[m]]=!0;b(g.block||[])}else null===h&&b(g.block||[]);}for(var p=[],q=0;q<He.length;q++)c[q]&&!d[q]&&(p[q]=!0);return p},Ye=function(a,b){for(var c=a["if"]||[],d=0;d<c.length;d++){var e=b(c[d]);if(0===e)return!1;if(2===e)return null}for(var f=
a.unless||[],g=0;g<f.length;g++){var h=b(f[g]);if(2===h)return null;if(1===h)return!1}return!0},Xe=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Re(Ge[c],a));return b[c]}};var $e={di:function(a,b){b[he.qf]&&"string"===typeof a&&(a=1==b[he.qf]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(he.sf)&&null===a&&(a=b[he.sf]);b.hasOwnProperty(he.uf)&&void 0===a&&(a=b[he.uf]);b.hasOwnProperty(he.tf)&&!0===a&&(a=b[he.tf]);b.hasOwnProperty(he.rf)&&!1===a&&(a=b[he.rf]);return a}};var af=function(){this.g={}};function bf(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(h){g="string"===typeof h?g+(": "+h):h instanceof Error?g+(": "+h.message):g+"."}if(!f)throw new Se(c,d,g);}}function cf(a,b,c){return function(){var d=arguments[0];if(d){var e=a.g[d],f=a.g.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));bf(e,b,d,g);bf(f,b,d,g)}}}};var gf=function(a){var b=df.N,c=this;this.s=new af;this.g={};var d={},e=cf(this.s,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});Ua(a,function(f,g){var h={};Ua(g,function(l,m){var p=ef(l,m);h[l]=p.assert;d[l]||(d[l]=p.V)});c.g[f]=function(l,m){var p=h[l];if(!p)throw ff(l,{},"The requested permission "+l+" is not configured.");var q=Array.prototype.slice.call(arguments,0);p.apply(void 0,q);e.apply(void 0,q)}})},qf=function(a){return hf.g[a]||
function(){}};function ef(a,b){var c=Ne(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=ff;try{return Oe(c)}catch(d){return{assert:function(e){throw new Se(e,{},"Permission "+e+" is unknown.");},V:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function ff(a,b,c){return new Se(a,b,c)};var rf=!1;var sf={};sf.nj=Ya('');sf.ki=Ya('');var tf=rf,uf=sf.ki,vf=sf.nj;
var Kf=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},Lf=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;Kf(b,"/*")&&(b=b.slice(0,-2));Kf(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var h=d[d.length-1];return a.lastIndexOf(h)===a.length-h.length},Mf=/^[a-z0-9-]+$/i,Nf=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
Pf=function(a,b){var c;if(!(c=!Of(a))){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!Mf.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var h;var l=a,m=b[g];if(!Nf.exec(m))throw Error("Invalid Wildcard");var p=m.slice(8),q=p.slice(0,p.indexOf("/")),r;var t=l.hostname,u=q;if(0!==u.indexOf("*."))r=t.toLowerCase()===u.toLowerCase();else{u=u.slice(2);var v=t.toLowerCase().indexOf(u.toLowerCase());r=-1===v?!1:t.length===u.length?
!0:t.length!==u.length+v?!1:"."===t[v-1]}if(r){var w=p.slice(p.indexOf("/"));h=Lf(l.pathname+l.search,w)?!0:!1}else h=!1;if(h)return!0}return!1},Of=function(a){return"https:"===a.protocol&&(!a.port||"443"===a.port)};var Qf=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,Rf={Fn:"function",DustMap:"Object",List:"Array"},N=function(a,b,c){for(var d=0;d<b.length;d++){var e=Qf.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],h=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==h){var p=typeof l;l instanceof mb?p="Fn":l instanceof n?p="List":l instanceof tb?p="DustMap":
l instanceof wc&&(p="OpaqueValue");if(p!=h)throw Error("Error in "+a+". Argument "+f+" has type "+p+", which does not match required type "+(Rf[h]||h)+".");}}};function Sf(a){return""+a}
function Tf(a,b){var c=[];return c};var Uf=function(a,b){var c=new mb(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=G(this,d[e]);return b.apply(this,d)});c.rb();return c},Vf=function(a,b){var c=new tb,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Ja(e)?c.set(d,Uf(a+"_"+d,e)):(La(e)||A(e)||"boolean"==typeof e)&&c.set(d,e)}c.rb();return c};var Wf=function(a,b){N(H(this),["apiName:!string","message:?string"],arguments);var c={},d=new tb;return d=Vf("AssertApiSubject",c)};var Xf=function(a,b){N(H(this),["actual:?*","message:?string"],arguments);var c={},d=new tb;
return d=Vf("AssertThatSubject",c)};function Yf(a){return function(){for(var b=[],c=this.g,d=0;d<arguments.length;++d)b.push(Cc(arguments[d],c));return Bc(a.apply(null,b))}}var $f=function(){for(var a=Math,b=Zf,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=Yf(a[e].bind(a)))}return c};var ag=function(a){var b;return b};var bg=function(a){var b;return b};var cg=function(a){N(H(this),["uri:!string"],arguments);return encodeURI(a)};var dg=function(a){N(H(this),["uri:!string"],arguments);return encodeURIComponent(a)};var eg=function(a){N(H(this),["message:?string"],arguments);};var fg=function(a,b){N(H(this),["min:!number","max:!number"],arguments);return Qa(a,b)};var gg=function(a,b,c){var d=a.g.g;if(!d)throw Error("Missing program state.");d.Xh.apply(null,Array.prototype.slice.call(arguments,1))};var hg=function(){gg(this,"read_container_data");var a=new tb;a.set("containerId",'GTM-M6CNR58');a.set("version",'32');a.set("environmentName",'');a.set("debugMode",tf);a.set("previewMode",vf);a.set("environmentMode",uf);a.rb();return a};var ig=function(){return(new Date).getTime()};var jg=function(a){if(null===a)return"null";if(a instanceof n)return"array";if(a instanceof mb)return"function";if(a instanceof wc){a=a.Qa;if(void 0===a.constructor||void 0===a.constructor.name){var b=String(a);return b.substring(8,b.length-1)}return String(a.constructor.name)}return typeof a};var kg=function(a){function b(c){return function(d){try{return c(d)}catch(e){(tf||vf)&&a.call(this,e.message)}}}return{parse:b(function(c){return Bc(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(Cc(c))})}};var lg=function(a){return Xa(Cc(a,this.g))};var mg=function(a){return Number(Cc(a,this.g))};var ng=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var og=function(a,b,c){var d=null,e=!1;N(H(this),["tableObj:!List","keyColumnName:!string","valueColumnName:!string"],arguments);d=new tb;for(var f=0;f<a.length();f++){var g=a.get(f);g instanceof tb&&g.has(b)&&g.has(c)&&(d.set(g.get(b),g.get(c)),e=!0)}return e?d:null};var Zf="floor ceil round max min abs pow sqrt".split(" ");var pg=function(){var a={};return{si:function(b){return a.hasOwnProperty(b)?a[b]:void 0},gj:function(b,c){a[b]=c},reset:function(){a={}}}},qg=function(a,b){N(H(this),["apiName:!string","mock:?*"],arguments);};var rg={};
rg.keys=function(a){return new n};
rg.values=function(a){return new n};
rg.entries=function(a){return new n};rg.freeze=function(a){return a};var tg=function(){this.g={};this.s={};};tg.prototype.get=function(a,b){var c=this.g.hasOwnProperty(a)?this.g[a]:void 0;return c};
tg.prototype.add=function(a,b,c){if(this.g.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(this.s.hasOwnProperty(a))throw"Attempting to add an API with an existing private API name: "+a+".";this.g[a]=c?void 0:Ja(b)?Uf(a,b):Vf(a,b)};
var vg=function(a,b,c){if(a.s.hasOwnProperty(b))throw"Attempting to add a private function which already exists: "+b+".";if(a.g.hasOwnProperty(b))throw"Attempting to add a private function with an existing API name: "+b+".";a.s[b]=Ja(c)?Uf(b,c):Vf(b,c)};function ug(a,b){var c=void 0;return c};function wg(){var a={};return a};var Q={ac:"_ee",kd:"_syn_or_mod",yj:"_uei",ee:"_eu",vj:"_pci",Wd:"event_callback",Sc:"event_timeout",Ca:"gtag.config",Ma:"gtag.get",sa:"purchase",Bb:"refund",ib:"begin_checkout",zb:"add_to_cart",Ab:"remove_from_cart",fh:"view_cart",yf:"add_to_wishlist",La:"view_item",xf:"view_promotion",wf:"select_promotion",Jd:"select_item",Mc:"view_item_list",vf:"add_payment_info",eh:"add_shipping_info",Ya:"value_key",Xa:"value_callback",Da:"allow_ad_personalization_signals",Yb:"restricted_data_processing",Ub:"allow_google_signals",
Ga:"cookie_expires",Vb:"cookie_update",$b:"session_duration",Xc:"session_engaged_time",Pa:"user_properties",ma:"transport_url",T:"ads_data_redaction",$a:"user_data",Wb:"first_party_collection",D:"ad_storage",I:"analytics_storage",Hd:"region",pf:"wait_for_update",Fa:"conversion_linker",Ea:"conversion_cookie_prefix",ia:"value",fa:"currency",Pf:"trip_type",aa:"items",If:"passengers",Kd:"allow_custom_scripts",Fb:"session_id",Nf:"quantity",ob:"transaction_id",lb:"language",Qc:"country",Oc:"allow_enhanced_conversions",
Pd:"aw_merchant_id",Nd:"aw_feed_country",Od:"aw_feed_language",Md:"discount",Cf:"developer_id",Zc:"delivery_postal_code",Vd:"estimated_delivery_date",Td:"shipping",ce:"new_customer",Qd:"customer_lifetime_value",Ud:"enhanced_conversions"};Q.Sf=[Q.sa,Q.Bb,Q.ib,Q.zb,Q.Ab,Q.fh,Q.yf,Q.La,Q.xf,Q.wf,Q.Mc,Q.Jd,Q.vf,Q.eh];Q.Rf=[Q.Da,Q.Ub,Q.Vb];Q.Tf=[Q.Ga,Q.Sc,Q.$b,Q.Xc];var yg=function(a){Ga("GTM",a)};var zg=function(a,b){this.g=a;this.defaultValue=void 0===b?!1:b};var Ag=new zg(1936,!0),Bg=new zg(1933),Cg=new zg(373442741);var Eg=function(){var a=Dg;if(a.Me&&a.hasOwnProperty("Me"))return a.Me;var b=new a;return a.Me=b};var Dg=function(){var a={};this.g=function(b,c){return null!=a[b]?a[b]:c};this.s=function(){a[Bg.g]=!0}},Fg=function(a){return Eg().g(a.g,a.defaultValue)};var Gg=[];function Hg(){var a=Zb("google_tag_data",{});a.ics||(a.ics={entries:{},set:Ig,update:Jg,addListener:Kg,notifyListeners:Lg,active:!1,usedDefault:!1});return a.ics}
function Ig(a,b,c,d,e,f){var g=Hg();g.active=!0;g.usedDefault=!0;if(void 0!=b){var h=g.entries,l=h[a]||{},m=l.region,p=c&&A(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(""===d||p===e||(p===d?m!==e:!p&&!m)){var q=!!(f&&0<f&&void 0===l.update),r={region:p,initial:"granted"===b,update:l.update,quiet:q};if(""!==d||!1!==l.initial)h[a]=r;q&&F.setTimeout(function(){h[a]===r&&r.quiet&&(r.quiet=!1,Mg(a),Lg(),Ga("TAGGING",2))},f)}}}
function Jg(a,b){var c=Hg();c.active=!0;if(void 0!=b){var d=Ng(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=Ng(a);f.quiet?(f.quiet=!1,Mg(a)):g!==d&&Mg(a)}}function Kg(a,b){Gg.push({Ae:a,mi:b})}function Mg(a){for(var b=0;b<Gg.length;++b){var c=Gg[b];Ma(c.Ae)&&-1!==c.Ae.indexOf(a)&&(c.Cg=!0)}}function Lg(a){for(var b=0;b<Gg.length;++b){var c=Gg[b];if(c.Cg){c.Cg=!1;try{c.mi({bi:a})}catch(d){}}}}
var Ng=function(a){var b=Hg().entries[a]||{};return void 0!==b.update?b.update:b.initial},Og=function(a){return(Hg().entries[a]||{}).initial},Pg=function(a){return!(Hg().entries[a]||{}).quiet},Qg=function(){return Fg(Bg)?Hg().active:!1},Rg=function(){return Hg().usedDefault},Sg=function(a,b){Hg().addListener(a,b)},Tg=function(a){Hg().notifyListeners(a)},Ug=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!Pg(b[e]))return!0;return!1}if(c()){var d=!1;Sg(b,function(e){d||c()||(d=!0,a(e))})}else a({})},
Vg=function(a,b){function c(){for(var f=[],g=0;g<d.length;g++){var h=d[g];!1===Ng(h)||e[h]||(f.push(h),e[h]=!0)}return f}var d=A(b)?[b]:b,e={};c().length!==d.length&&Sg(d,function(f){var g=c();0<g.length&&(f.Ae=g,a(f))})};function Wg(a){for(var b=[],c=0;c<Xg.length;c++){var d=a(Xg[c]);b[c]=!0===d?"1":!1===d?"0":"-"}return b.join("")}
var Xg=[Q.D,Q.I],Yg=function(a){var b=a[Q.Hd];b&&yg(40);var c=a[Q.pf];c&&yg(41);for(var d=Ma(b)?b:[b],e={Ob:0};e.Ob<d.length;e={Ob:e.Ob},++e.Ob)Ua(a,function(f){return function(g,h){if(g!==Q.Hd&&g!==Q.pf){var l=d[f.Ob];Hg().set(g,h,l,"IL","IL-TA",c)}}}(e))},Zg=function(a,b){Ua(a,function(c,d){Hg().update(c,d)});Tg(b)},fh=function(a){var b=Ng(a);return void 0!=b?b:!0},gh=function(){return"G1"+Wg(Ng)},hh=function(a,b){Sg(a,b)},ih=function(a,b){Vg(a,b)},jh=function(a,b){Ug(a,
b)};var lh=function(a){return kh?J.querySelectorAll(a):null},mh=function(a,b){if(!kh)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!J.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},nh=!1;if(J.querySelectorAll)try{var oh=J.querySelectorAll(":root");oh&&1==oh.length&&oh[0]==J.documentElement&&(nh=!0)}catch(a){}var kh=nh;var ph=function(a){if(J.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!F.getComputedStyle)return!0;var c=F.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var h=g.indexOf("opacity(");0<=h&&(g=g.substring(h+8,g.indexOf(")",h)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-1)),f=Math.min(g,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=F.getComputedStyle(d,
null))}return!1};
var qh=function(){var a=J.body,b=J.documentElement||a&&a.parentElement,c,d;if(J.compatMode&&"BackCompat"!==J.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,g){return f&&g?Math.min(f,g):Math.max(f,g)};yg(7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},rh=function(a){var b=qh(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,g=e.right-e.left;return f&&g?(1-Math.min((Math.max(0-e.left,0)+Math.max(e.right-
d,0))/g,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0};var yh=/:[0-9]+$/,zh=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var h=f[g].split("=");if(decodeURIComponent(h[0]).replace(/\+/g," ")===b){var l=h.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},Ch=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Ah(a.protocol)||Ah(F.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
F.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||F.location.hostname).replace(yh,"").toLowerCase());return Bh(a,b,c,d,e)},Bh=function(a,b,c,d,e){var f,g=Ah(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=Dh(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(yh,"").toLowerCase();if(c){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||Ga("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=Na(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=zh(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Ah=function(a){return a?a.replace(":",
"").toLowerCase():""},Dh=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},Eh=function(a){var b=J.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||Ga("TAGGING",1),c="/"+c);var d=b.hostname.replace(yh,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},Fh=function(a){function b(m){var p=m.split("=")[0];return 0>d.indexOf(p)?m:p+"=0"}function c(m){return m.split("&").map(b).filter(function(p){return void 0!=
p}).join("&")}var d="gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),e=Eh(a),f=a.split(/[?#]/)[0],g=e.search,h=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===h[0]&&(h=h.substring(1));g=c(g);h=c(h);""!==g&&(g="?"+g);""!==h&&(h="#"+h);var l=""+f+g+h;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};var Gh={};var Hh=new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),Ih=new RegExp(/@(gmail|googlemail)\./i),Jh=new RegExp(/support|noreply/i),Kh="SCRIPT STYLE IMG SVG PATH BR".split(" "),Lh=["BR"],Mh={};
function Nh(a){var b;if(a===J.body)b="body";else{var c;if(a.id)c="#"+a.id;else{var d;if(a.parentElement){var e;a:{var f=a.parentElement;if(f){for(var g=0;g<f.childElementCount;g++)if(f.children[g]===a){e=g+1;break a}e=-1}else e=1}d=Nh(a.parentElement)+">:nth-child("+e+")"}else d="";c=d}b=c}return b}function Oh(a,b){if(1>=a.length)return a;var c=a.filter(b);return 0==c.length?a:c}
function Ph(a){if(0==a.length)return null;var b;b=Oh(a,function(c){return!Jh.test(c.ra)});b=Oh(b,function(c){return"INPUT"===c.element.tagName.toUpperCase()});b=Oh(b,function(c){return!ph(c.element)});return b[0]}
var Qh=function(a){var b=!a||!!a.Ai,c=!a||!!a.Bi,d=b+"."+c;a&&a.sd&&a.sd.length&&(d+="."+a.sd.join("."));var e=Mh[d];if(e&&200>cb()-e.timestamp)return e.result;var f;var g=[],h=J.body;if(h){for(var l=h.querySelectorAll("*"),m=0;m<l.length&&1E4>m;m++){var p=l[m];if(!(0<=Kh.indexOf(p.tagName.toUpperCase()))){for(var q=!1,r=0;r<p.childElementCount&&1E4>r;r++)if(!(0<=Lh.indexOf(p.children[r].tagName.toUpperCase()))){q=!0;break}q||g.push(p)}}f={elements:g,status:1E4<l.length?"2":"1"}}else f={elements:g,
status:"4"};for(var t=f,u=t.elements,v=[],w=0;w<u.length;w++){var y=u[w],x=y.textContent;y.value&&(x=y.value);if(x){var z=x.match(Hh);if(z){var B=z[0],C;if(F.location){var E=Bh(F.location,"host",!0);C=0<=B.toLowerCase().indexOf(E)}else C=!1;C||v.push({element:y,ra:B})}}}var D;var I=a&&a.sd;if(I&&0!==I.length){for(var R=[],S=0;S<v.length;S++){for(var U=!0,T=0;T<I.length;T++){var O=I[T];if(O&&mh(v[S].element,O)){U=!1;break}}U&&R.push(v[S])}D=R}else D=v;var K=Ph(D),W=[];if(K){var ba=K.element,P={ra:K.ra,
tagName:ba.tagName,type:1};b&&(P.querySelector=Nh(ba));c&&(P.isVisible=!ph(ba));W.push(P)}var la={elements:W,status:10<v.length?"3":t.status};Mh[d]={timestamp:cb(),result:la};return la},Rh=function(a){return a.tagName+":"+a.isVisible+":"+a.ra.length+":"+Ih.test(a.ra)};var df={},li=null,mi=Math.random();df.N="GTM-M6CNR58";df.jd="6u0";df.sj="";df.Yg="ChAI8JWAhwYQtrnu6InCqcgjEiQAtM+X25+SvGdyW+aSS0JR80wRLT63j6wyezU8rKtV8chDYSMaAglq";var ni={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},oi={__paused:!0,__tg:!0},pi;for(pi in ni)ni.hasOwnProperty(pi)&&(oi[pi]=!0);var qi="www.googletagmanager.com/gtm.js";
var ri=qi,si=Ya(""),ti=null,ui=null,vi="https://www.googletagmanager.com/a?id="+df.N+"&cv=32",wi={},xi={},yi=function(){var a=li.sequence||1;li.sequence=a+1;return a};df.Xg="";var zi={},Ai=new Ra,Bi={},Ci={},Fi={name:"dataLayer",set:function(a,b){M(jb(a,b),Bi);Di()},get:function(a){return Ei(a,2)},reset:function(){Ai=new Ra;Bi={};Di()}},Ei=function(a,b){return 2!=b?Ai.get(a):Gi(a)},Gi=function(a,b){var c=a.split(".");b=b||[];for(var d=Bi,e=0;e<c.length;e++){if(null===d)return!1;if(void 0===d)break;d=d[c[e]];if(-1!==Na(b,d))return}return d},Hi=function(a,b){Ci.hasOwnProperty(a)||(Ai.set(a,b),M(jb(a,b),Bi),Di())},Ii=function(){for(var a=["gtm.allowlist","gtm.blocklist",
"gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],b=0;b<a.length;b++){var c=a[b],d=Ei(c,1);if(Ma(d)||Ac(d))d=M(d);Ci[c]=d}},Di=function(a){Ua(Ci,function(b,c){Ai.set(b,c);M(jb(b,void 0),Bi);M(jb(b,c),Bi);a&&delete Ci[b]})},Ki=function(a,b,c){zi[a]=zi[a]||{};zi[a][b]=Ji(b,c)},Ji=function(a,b){var c,d=1!==(void 0===b?2:b)?Gi(a):Ai.get(a);"array"===yc(d)||"object"===yc(d)?c=M(d):c=d;return c},Li=function(a,b){if(zi[a])return zi[a][b]},Mi=function(a,b){zi[a]&&delete zi[a][b]};var Qi={},Ri=function(a,b){if(F._gtmexpgrp&&F._gtmexpgrp.hasOwnProperty(a))return F._gtmexpgrp[a];void 0===Qi[a]&&(Qi[a]=Math.floor(Math.random()*b));return Qi[a]};function Si(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),h=g[0].replace(/^\s*|\s*$/g,"");if(h&&h==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};function Ti(a){return Fg(Cg)&&!a.navigator.cookieEnabled?!1:"null"!==a.origin};var Wi=function(a,b,c,d){return Ui(d)?Si(a,String(b||Vi()),c):[]},Zi=function(a,b,c,d,e){if(Ui(e)){var f=Xi(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=Yi(f,function(g){return g.rd},b);if(1===f.length)return f[0].id;f=Yi(f,function(g){return g.Ac},c);return f[0]?f[0].id:void 0}}};function $i(a,b,c,d){var e=Vi(),f=window;Ti(f)&&(f.document.cookie=a);var g=Vi();return e!=g||void 0!=c&&0<=Wi(b,g,!1,d).indexOf(c)}
var dj=function(a,b,c,d){function e(w,y,x){if(null==x)return delete h[y],w;h[y]=x;return w+"; "+y+"="+x}function f(w,y){if(null==y)return delete h[y],w;h[y]=!0;return w+"; "+y}if(!Ui(c.Ua))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=aj(b),g=a+"="+b);var h={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.Ni);g=e(g,"samesite",
c.aj);c.cj&&(g=f(g,"secure"));var m=c.domain;if("auto"===m){for(var p=bj(),q=void 0,r=!1,t=0;t<p.length;++t){var u="none"!==p[t]?p[t]:void 0,v=e(g,"domain",u);v=f(v,c.flags);try{d&&d(a,h)}catch(w){q=w;continue}r=!0;if(!cj(u,c.path)&&$i(v,a,b,c.Ua))return 0}if(q&&!r)throw q;return 1}m&&"none"!==m&&(g=e(g,"domain",m));g=f(g,c.flags);d&&d(a,h);return cj(m,c.path)?1:$i(g,a,b,c.Ua)?0:1},ej=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return dj(a,b,c)};
function Yi(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var h=a[g],l=b(h);l===c?d.push(h):void 0===f||l<f?(e=[h],f=l):l===f&&e.push(h)}return 0<d.length?d:e}function Xi(a,b,c){for(var d=[],e=Wi(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),rd:1*l[0]||1,Ac:1*l[1]||1}))}}return d}
var aj=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},fj=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,gj=/(^|\.)doubleclick\.net$/i,cj=function(a,b){return gj.test(window.document.location.hostname)||"/"===b&&fj.test(a)},Vi=function(){return Ti(window)?window.document.cookie:""},bj=function(){var a=[],b=window.document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));
var e=window.document.location.hostname;gj.test(e)||fj.test(e)||a.push("none");return a},Ui=function(a){if(!Fg(Bg)||!a||!Qg())return!0;if(!Pg(a))return!1;var b=Ng(a);return null==b?!0:!!b};var hj=function(){return[Math.round(2147483647*Math.random()),Math.round(cb()/1E3)].join(".")},kj=function(a,b,c,d,e){var f=ij(b);return Zi(a,f,jj(c),d,e)},lj=function(a,b,c,d){var e=""+ij(c),f=jj(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},ij=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},jj=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function mj(a,b,c){var d,e=Number(null!=a.ub?a.ub:void 0);0!==e&&(d=new Date((b||cb())+1E3*(e||7776E3)));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var nj=["1"],oj={},sj=function(a){var b=pj(a.prefix);if(!oj[b]&&!qj(b,a.path,a.domain)){var c=hj();if(0===rj(b,c,a)){var d=Zb("google_tag_data",{});d._gcl_au?Ga("GTM",57):d._gcl_au=c}qj(b,a.path,a.domain)}};function rj(a,b,c){var d=lj(b,"1",c.domain,c.path),e=mj(c);e.Ua="ad_storage";return ej(a,d,e)}function qj(a,b,c){var d=kj(a,b,c,nj,"ad_storage");d&&(oj[a]=d);return d}function pj(a){return(a||"_gcl")+"_au"};var tj=function(a){for(var b=[],c=J.cookie.split(";"),d=new RegExp("^\\s*"+(a||"_gac")+"_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"),e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({ff:f[1],value:f[2],timestamp:Number(f[2].split(".")[1])||0})}b.sort(function(g,h){return h.timestamp-g.timestamp});return b};
function uj(a,b){var c=tj(a),d={};if(!c||!c.length)return d;for(var e=0;e<c.length;e++){var f=c[e].value.split(".");if(!("1"!==f[0]||b&&3>f.length||!b&&3!==f.length)&&Number(f[1])){d[c[e].ff]||(d[c[e].ff]=[]);var g={version:f[0],timestamp:1E3*Number(f[1]),ya:f[2]};b&&3<f.length&&(g.labels=f.slice(3));d[c[e].ff].push(g)}}return d};function vj(){for(var a=wj,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function xj(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var wj,yj;
function zj(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),p=yj[m];if(null!=p)return p;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}wj=wj||xj();yj=yj||vj();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),h=b(64);if(64===h&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=h&&(c+=String.fromCharCode(g<<6&192|h)))}};var Aj;var Ej=function(){var a=Bj,b=Cj,c=Dj(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){gc(J,"mousedown",d);gc(J,"keyup",d);gc(J,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},Fj=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};Dj().decorators.push(f)},Gj=function(a,b,c){for(var d=Dj().decorators,e={},f=0;f<d.length;++f){var g=
d[f],h;if(h=!c||g.forms)a:{var l=g.domains,m=a,p=!!g.sameHost;if(l&&(p||m!==J.location.hostname))for(var q=0;q<l.length;q++)if(l[q]instanceof RegExp){if(l[q].test(m)){h=!0;break a}}else if(0<=m.indexOf(l[q])||p&&0<=l[q].indexOf(m)){h=!0;break a}h=!1}if(h){var r=g.placement;void 0==r&&(r=g.fragment?2:1);r===b&&fb(e,g.callback())}}return e},Dj=function(){var a=Zb("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Hj=/(.*?)\*(.*?)\*(.*)/,Ij=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Jj=/^(?:www\.|m\.|amp\.)+/,Kj=/([^?#]+)(\?[^#]*)?(#.*)?/;function Lj(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var Nj=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()){b.push(c);var e=b,f=e.push,g,h=String(d);wj=wj||xj();yj=yj||vj();for(var l=[],m=0;m<h.length;m+=3){var p=m+1<h.length,q=m+2<h.length,r=h.charCodeAt(m),t=p?h.charCodeAt(m+1):0,u=q?h.charCodeAt(m+2):0,v=r>>2,w=(r&3)<<4|t>>4,y=(t&15)<<2|u>>6,x=u&63;q||(x=64,p||(y=64));l.push(wj[v],wj[w],wj[y],wj[x])}g=l.join("");f.call(e,g)}}var z=b.join("*");return["1",Mj(z),
z].join("*")},Mj=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Aj)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,h=0;8>h;h++)g=g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}Aj=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Aj[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Pj=function(){return function(a){var b=Eh(F.location.href),
c=b.search.replace("?",""),d=zh(c,"_gl",!1,!0)||"";a.query=Oj(d)||{};var e=Ch(b,"fragment").match(Lj("_gl"));a.fragment=Oj(e&&e[3]||"")||{}}},Qj=function(a){var b=Pj(),c=Dj();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(fb(d,e.query),a&&fb(d,e.fragment));return d},Oj=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Hj.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var h=g[3],l;a:{for(var m=g[2],p=
0;p<b;++p)if(m===Mj(h,p)){l=!0;break a}l=!1}if(l){for(var q={},r=h?h.split("*"):[],t=0;t<r.length;t+=2)q[r[t]]=zj(r[t+1]);return q}}}}catch(u){}};function Rj(a,b,c,d){function e(p){var q=p,r=Lj(a).exec(q),t=q;if(r){var u=r[2],v=r[4];t=r[1];v&&(t=t+u+v)}p=t;var w=p.charAt(p.length-1);p&&"&"!==w&&(p+="&");return p+m}d=void 0===d?!1:d;var f=Kj.exec(c);if(!f)return"";var g=f[1],h=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):h="?"+e(h.substring(1));return""+g+h+l}
function Sj(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=Gj(b,1,c),e=Gj(b,2,c),f=Gj(b,3,c);if(gb(d)){var g=Nj(d);c?Tj("_gl",g,a):Uj("_gl",g,a,!1)}if(!c&&gb(e)){var h=Nj(e);Uj("_gl",h,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,p=f[l],q=a;if(q.tagName){if("a"===q.tagName.toLowerCase()){Uj(m,p,q,void 0);break a}if("form"===q.tagName.toLowerCase()){Tj(m,p,q);break a}}"string"==typeof q&&Rj(m,p,q,void 0)}}
function Uj(a,b,c,d){if(c.href){var e=Rj(a,b,c.href,void 0===d?!1:d);Gb.test(e)&&(c.href=e)}}
function Tj(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var h=e[g];if(h.name===a){h.setAttribute("value",b);f=!0;break}}if(!f){var l=J.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=Rj(a,b,c.action);Gb.test(m)&&(c.action=m)}}}
var Bj=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Sj(e,e.hostname)}}catch(g){}},Cj=function(a){try{if(a.action){var b=Ch(Eh(a.action),"host");Sj(a,b)}}catch(c){}},Vj=function(a,b,c,d){Ej();Fj(a,b,"fragment"===c?2:1,!!d,!1)},Wj=function(a,b){Ej();Fj(a,[Bh(F.location,"host",!0)],b,!0,!0)},Xj=function(){var a=J.location.hostname,b=Ij.exec(J.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var h=a.replace(Jj,""),l=e.replace(Jj,""),m;if(!(m=h===l)){var p="."+l;m=h.substring(h.length-p.length,h.length)===p}return m},Yj=function(a,b){return!1===a?!1:a||b||Xj()};var Zj={};var ak=/^\w+$/,bk=/^[\w-]+$/,ck={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp",gb:"_gb"},dk=function(){if(!Fg(Bg)||!Qg())return!0;var a=Ng("ad_storage");return null==a?!0:!!a},mk=function(a,b){Pg("ad_storage")?dk()?a():Vg(a,"ad_storage"):b?Ga("TAGGING",3):Ug(function(){mk(a,!0)},["ad_storage"])},ok=function(a){return nk(a).map(function(b){return b.ya})},nk=function(a){var b=[];if(!Ti(F)||!J.cookie)return b;var c=Wi(a,J.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d={},e=0;e<c.length;d=
{Jc:d.Jc},e++){var f=pk(c[e]);if(null!=f){var g=f,h=g.version;d.Jc=g.ya;var l=g.timestamp,m=g.labels,p=Oa(b,function(q){return function(r){return r.ya===q.Jc}}(d));p?(p.timestamp=Math.max(p.timestamp,l),p.labels=qk(p.labels,m||[])):b.push({version:h,ya:d.Jc,timestamp:l,labels:m})}}b.sort(function(q,r){return r.timestamp-q.timestamp});return rk(b)};function qk(a,b){for(var c={},d=[],e=0;e<a.length;e++)c[a[e]]=!0,d.push(a[e]);for(var f=0;f<b.length;f++)c[b[f]]||d.push(b[f]);return d}
function sk(a){return a&&"string"==typeof a&&a.match(ak)?a:"_gcl"}
var uk=function(){var a=Eh(F.location.href),b=Ch(a,"query",!1,void 0,"gclid"),c=Ch(a,"query",!1,void 0,"gclsrc"),d=Ch(a,"query",!1,void 0,"wbraid"),e=Ch(a,"query",!1,void 0,"dclid");if(!b||!c||!d){var f=a.hash.replace("#","");b=b||zh(f,"gclid",!1,void 0);c=c||zh(f,"gclsrc",!1,void 0);d=d||zh(f,"wbraid",!1,void 0)}return tk(b,c,e,d)},tk=function(a,b,c,d){var e={},f=function(g,h){e[h]||(e[h]=[]);e[h].push(g)};e.gclid=a;e.gclsrc=b;e.dclid=c;void 0!==d&&bk.test(d)&&(e.gbraid=d,f(d,"gb"));if(void 0!==
a&&a.match(bk))switch(b){case void 0:f(a,"aw");break;case "aw.ds":f(a,"aw");f(a,"dc");break;case "ds":f(a,"dc");break;case "3p.ds":f(a,"dc");break;case "gf":f(a,"gf");break;case "ha":f(a,"ha")}c&&f(c,"dc");return e},vk=function(a,b){switch(a){case void 0:case "aw":return"aw"===b;case "aw.ds":return"aw"===b||"dc"===b;case "ds":case "3p.ds":return"dc"===b;case "gf":return"gf"===b;case "ha":return"ha"===b}return!1},xk=function(a){var b=uk();mk(function(){wk(b,a)})};
function wk(a,b,c,d){function e(p,q){var r=yk(p,f);r&&(ej(r,q,g),h=!0)}b=b||{};d=d||[];var f=sk(b.prefix);c=c||cb();var g=mj(b,c,!0);g.Ua="ad_storage";var h=!1,l=Math.round(c/1E3),m=function(p){var q=["GCL",l,p];0<d.length&&q.push(d.join("."));return q.join(".")};a.aw&&e("aw",m(a.aw[0]));a.dc&&e("dc",m(a.dc[0]));a.gf&&e("gf",m(a.gf[0]));a.ha&&e("ha",m(a.ha[0]));a.gp&&e("gp",m(a.gp[0]));(void 0==Zj.enable_gbraid_cookie_write?0:Zj.enable_gbraid_cookie_write)&&!h&&a.gb&&e("gb",m(a.gb[0]))}
var Ak=function(a,b){var c=Qj(!0);mk(function(){for(var d=sk(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==ck[f]){var g=yk(f,d),h=c[g];if(h){var l=Math.min(zk(h),cb()),m;b:{var p=l,q=g;if(Ti(F))for(var r=Wi(q,J.cookie,void 0,"ad_storage"),t=0;t<r.length;++t)if(zk(r[t])>p){m=!0;break b}m=!1}if(!m){var u=mj(b,l,!0);u.Ua="ad_storage";ej(g,h,u)}}}}wk(tk(c.gclid,c.gclsrc),b)})},yk=function(a,b){var c=ck[a];if(void 0!==c)return b+c},zk=function(a){return 0!==Bk(a.split(".")).length?1E3*(Number(a.split(".")[1])||
0):0};function pk(a){var b=Bk(a.split("."));return 0===b.length?null:{version:b[0],ya:b[2],timestamp:1E3*(Number(b[1])||0),labels:b.slice(3)}}function Bk(a){return 3>a.length||"GCL"!==a[0]&&"1"!==a[0]||!/^\d+$/.test(a[1])||!bk.test(a[2])?[]:a}
var Ck=function(a,b,c,d,e){if(Ma(b)&&Ti(F)){var f=sk(e),g=function(){for(var h={},l=0;l<a.length;++l){var m=yk(a[l],f);if(m){var p=Wi(m,J.cookie,void 0,"ad_storage");p.length&&(h[m]=p.sort()[p.length-1])}}return h};mk(function(){Vj(g,b,c,d)})}},rk=function(a){return a.filter(function(b){return bk.test(b.ya)})},Dk=function(a,b){if(Ti(F)){for(var c=sk(b.prefix),d={},e=0;e<a.length;e++)ck[a[e]]&&(d[a[e]]=ck[a[e]]);mk(function(){Ua(d,function(f,g){var h=Wi(c+g,J.cookie,void 0,"ad_storage");h.sort(function(t,
u){return zk(u)-zk(t)});if(h.length){var l=h[0],m=zk(l),p=0!==Bk(l.split(".")).length?l.split(".").slice(3):[],q={},r;r=0!==Bk(l.split(".")).length?l.split(".")[2]:void 0;q[f]=[r];wk(q,b,m,p)}})})}};function Ek(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var Fk=function(a){function b(e,f,g){g&&(e[f]=g)}if(Qg()){var c=uk();if(Ek(c,a)){var d={};b(d,"gclid",c.gclid);b(d,"dclid",c.dclid);b(d,"gclsrc",c.gclsrc);b(d,"wbraid",c.gbraid);Wj(function(){return d},3);Wj(function(){var e={};return e._up="1",e},1)}}};function Gk(a,b){var c=sk(b),d=yk(a,c);if(!d)return 0;for(var e=nk(d),f=0,g=0;g<e.length;g++)f=Math.max(f,e[g].timestamp);return f}
function Hk(a){var b=0,c;for(c in a)for(var d=a[c],e=0;e<d.length;e++)b=Math.max(b,Number(d[e].timestamp));return b};var Ik=/^\d+\.fls\.doubleclick\.net$/;function Jk(a,b){Pg(Q.D)?fh(Q.D)?a():Vg(a,Q.D):b?yg(42):jh(function(){Jk(a,!0)},[Q.D])}function Kk(a){var b=Eh(F.location.href),c=Ch(b,"host",!1);if(c&&c.match(Ik)){var d=Ch(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Lk(a,b,c){if("aw"===a||"dc"===a||"gb"===a){var d=Kk("gcl"+a);if(d)return d.split(".")}var e=sk(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!fh(Q.D)&&c,g;g=uk()[a]||[];if(0<g.length)return f?["0"]:g}var h=yk(a,e);return h?ok(h):[]}function Mk(a){var b=[];Ua(a,function(c,d){d=rk(d);for(var e=[],f=0;f<d.length;f++)e.push(d[f].ya);e.length&&b.push(c+":"+e.join(","))});return b.join(";")}
var Nk=function(a){var b=Kk("gac");return b?!fh(Q.D)&&a?"0":decodeURIComponent(b):Mk(dk()?uj():{})},Ok=function(a){var b=Kk("gacgb");return b?!fh(Q.D)&&a?"0":decodeURIComponent(b):Mk(dk()?uj("_gac_gb",!0):{})},Pk=function(a,b,c){var d=uk(),e=[],f=d.gclid,g=d.dclid,h=d.gclsrc||"aw";!f||"aw.ds"!==h&&"aw"!==h&&"ds"!==h||c&&!vk(h,c)||e.push({ya:f,He:h});!g||c&&"dc"!==c||e.push({ya:g,He:"ds"});Jk(function(){sj(b);var l=oj[pj(b.prefix)],m=!1;if(l&&0<e.length)for(var p=li.joined_auid=li.joined_auid||{},q=0;q<e.length;q++){var r=e[q],t=r.ya,u=r.He,v=(b.prefix||"_gcl")+"."+u+"."+t;if(!p[v]){var w="https://adservice.google.com/pagead/regclk";w="gb"===u?w+"?gbraid="+t+"&auid="+l:w+"?gclid="+t+"&auid="+l+"&gclsrc="+u;mc(w);m=p[v]=!0}}null==a&&(a=
m);if(a&&l){var y=pj(b.prefix),x=oj[y];x&&rj(y,x,b)}})},Qk=function(a){var b;if(Kk("gclaw")||Kk("gac")||0<(uk().aw||[]).length)b=!1;else{var c;if(0<(uk().gb||[]).length)c=!0;else{var d=Math.max(Gk("aw",a),Hk(dk()?uj():{}));c=Math.max(Gk("gb",a),Hk(dk()?uj("_gac_gb",!0):{}))>d}b=c}return b};var Rk=/[A-Z]+/,Sk=/\s/,Tk=function(a){if(A(a)&&(a=$a(a),!Sk.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Rk.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],O:d}}}}},Vk=function(a){for(var b={},c=0;c<a.length;++c){var d=Tk(a[c]);d&&(b[d.id]=d)}Uk(b);var e=[];Ua(b,function(f,g){e.push(g)});return e};
function Uk(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.O[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Wk=function(){var a=!1;return a};var Yk=function(a,b,c,d){return(2===Xk()||d||"http:"!=F.location.protocol?a:b)+c},Xk=function(){var a=dc(),b;if(1===a)a:{var c=ri;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=J.getElementsByTagName("script"),h=0;h<g.length&&100>h;h++){var l=g[h].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var kl=function(a){if(fh(Q.D))return a;a=a.replace(/&url=([^&#]+)/,function(b,c){var d=Fh(decodeURIComponent(c));return"&url="+encodeURIComponent(d)});a=a.replace(/&ref=([^&#]+)/,function(b,c){var d=Fh(decodeURIComponent(c));return"&ref="+encodeURIComponent(d)});return a},ll=function(){var a;if(!(a=si)){var b;if(!0===F._gtmdgs)b=!0;else{var c=Xb&&Xb.userAgent||"";b=0>c.indexOf("Safari")||/Chrome|Coast|Opera|Edg|Silk|Android/.test(c)||
11>((/Version\/([\d]+)/.exec(c)||[])[1]||"")?!1:!0}a=!b}if(a)return-1;var d=Xa("1");return Ri(1,100)<d?Ri(2,2):-1},ml=function(a){var b;if(!a||!a.length)return;for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&e.estimated_delivery_date?c.push(""+e.estimated_delivery_date):c.push("")}b=c.join(",");return b};var nl=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),ol={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},pl={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},ql="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var rl=function(){var a=!1;return a},tl=function(a){var b=Ei("gtm.allowlist")||Ei("gtm.whitelist");b&&yg(9);rl()&&(b="google gtagfl lcl zone oid op".split(" "));var c=b&&hb(Za(b),ol),d=Ei("gtm.blocklist")||
Ei("gtm.blacklist");d||(d=Ei("tagTypeBlacklist"))&&yg(3);d?yg(8):d=[];sl()&&(d=Za(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=Na(Za(d),"google")&&yg(2);var e=d&&hb(Za(d),pl),f={};return function(g){var h=g&&g[he.pb];if(!h||"string"!=typeof h)return!0;h=h.replace(/^_*/,"");if(void 0!==f[h])return f[h];var l=xi[h]||[],m=a(h,l);if(b){var p;if(p=
m)a:{if(0>Na(c,h))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>Na(c,l[q])){yg(11);p=!1;break a}}else{p=!1;break a}p=!0}m=p}var r=!1;if(d){var t=0<=Na(e,h);if(t)r=t;else{var u=Ta(e,l||[]);u&&yg(10);r=u}}var v=!m||r;v||!(0<=Na(l,"sandboxedScripts"))||c&&-1!==Na(c,"sandboxedScripts")||(v=Ta(e,ql));return f[h]=v}},sl=function(){return nl.test(F.location&&F.location.hostname)};var ul={active:!0,isAllowed:function(){return!0}},vl=function(a){var b=li.zones;return b?b.checkState(df.N,a):ul},wl=function(a){var b=li.zones;!b&&a&&(b=li.zones=a());return b};var xl=function(){},yl=function(){};var zl=!1,Al=0,Bl=[];function Cl(a){if(!zl){var b=J.createEventObject,c="complete"==J.readyState,d="interactive"==J.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){zl=!0;for(var e=0;e<Bl.length;e++)L(Bl[e])}Bl.push=function(){for(var f=0;f<arguments.length;f++)L(arguments[f]);return 0}}}function Dl(){if(!zl&&140>Al){Al++;try{J.documentElement.doScroll("left"),Cl()}catch(a){F.setTimeout(Dl,50)}}}var El=function(a){zl?a():Bl.push(a)};var Gl=function(a,b){this.g=!1;this.F=[];this.H={tags:[]};this.P=!1;this.s=this.B=0;Fl(this,a,b)},Hl=function(a,b,c,d){if(oi.hasOwnProperty(b)||"__zone"===b)return-1;var e={};Ac(d)&&(e=M(d,e));e.id=c;e.status="timeout";return a.H.tags.push(e)-1},Il=function(a,b,c,d){var e=a.H.tags[b];e&&(e.status=c,e.executionTime=d)},Jl=function(a){if(!a.g){for(var b=a.F,c=0;c<b.length;c++)b[c]();a.g=!0;a.F.length=0}},Fl=function(a,b,c){Ja(b)&&a.ic(b);c&&F.setTimeout(function(){return Jl(a)},Number(c))};
Gl.prototype.ic=function(a){var b=this,c=eb(function(){return L(function(){a(df.N,b.H)})});this.g?c():this.F.push(c)};var Kl=function(a){a.B++;return eb(function(){a.s++;a.P&&a.s>=a.B&&Jl(a)})};var Ll=function(){function a(d){return!La(d)||0>d?0:d}if(!li._li&&F.performance&&F.performance.timing){var b=F.performance.timing.navigationStart,c=La(Fi.get("gtm.start"))?Fi.get("gtm.start"):0;li._li={cst:a(c-b),cbt:a(ui-b)}}},Ml=function(a){F.performance&&F.performance.mark(df.N+"_"+a+"_start")},Nl=function(a){if(F.performance){var b=df.N+"_"+a+"_start",c=df.N+"_"+a+"_duration";F.performance.measure(c,b);var d=F.performance.getEntriesByName(c)[0];F.performance.clearMarks(b);F.performance.clearMeasures(c);
var e=li._p||{};void 0===e[a]&&(e[a]=d.duration,li._p=e);return d.duration}},Ol=function(){if(F.performance&&F.performance.now){var a=li._p||{};a.PAGEVIEW=F.performance.now();li._p=a}};var Pl={},Ql=function(){return F.GoogleAnalyticsObject&&F[F.GoogleAnalyticsObject]},Rl=!1;
var Sl=function(a){F.GoogleAnalyticsObject||(F.GoogleAnalyticsObject=a||"ga");var b=F.GoogleAnalyticsObject;if(F[b])F.hasOwnProperty(b)||yg(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(bb());F[b]=c}Ll();return F[b]},Tl=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Ql();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)},Ul=function(a){if(!Qg())return;var b=Ql();b(a+"require","linker");b(a+"linker:passthrough",
!0);};
var Wl=function(a){},Vl=function(){return F.GoogleAnalyticsObject||"ga"},Xl=function(a,b){return function(){var c=Ql(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var g=f.get("hitPayload"),h=f.get("hitCallback"),l=0>g.indexOf("&tid="+b);l&&(f.set("hitPayload",g.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+
b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",g,!0),f.set("hitCallback",h,!0),f.set("_x_19",void 0,!0),e(f))})}}};
var dm=function(a){},hm=function(a){},im=
function(){return"&tc="+He.filter(function(a){return a}).length},lm=function(){2022<=jm().length&&km()},mm=function(a){return 0===a.indexOf("gtm.")?encodeURIComponent(a):"*"},om=function(){nm||(nm=F.setTimeout(km,500))},km=function(){nm&&(F.clearTimeout(nm),nm=void 0);void 0===pm||qm[pm]&&!rm&&!sm||(tm[pm]||um.Ei()||0>=vm--?(yg(1),tm[pm]=!0):(um.Xi(),fc(jm(!0)),qm[pm]=!0,wm=xm=ym=sm=rm=""))},jm=function(a){var b=pm;if(void 0===b)return"";var c=Ha("GTM"),d=Ha("TAGGING");return[zm,qm[b]?"":"&es=1",
Am[b],dm(b),c?"&u="+c:"",d?"&ut="+d:"",im(),rm,sm,ym,xm,hm(a),wm,"&z=0"].join("")},Cm=function(){zm=Bm()},Bm=function(){return[vi,"&v=3&t=t","&pid="+Qa(),"&rv="+df.jd].join("")},Dm={rj:"L",Oh:"S",zj:"Y"},Em={},Fm=(Em.L="Load",Em.S="Setup",Em.Y="Yield",Em),gm=["L","S","Y"],Gm={Oh:"S",pj:"E"},Hm={},Im=(Hm.S="Setup",Hm.E="Elapsed",Hm),cm=["S","E"],Jm={sampleRate:"0.005000",Rg:"",Qg:Number("5")},Km=0<=J.location.search.indexOf("?gtm_latency=")||
0<=J.location.search.indexOf("&gtm_latency="),Lm;if(!(Lm=Km)){var Mm=Math.random(),Nm=Jm.sampleRate;Lm=Mm<Nm}var Om=Lm,Pm={label:df.N+" Container",children:[{label:"Initialization",children:[]}]},zm=Bm(),qm={},rm="",sm="",wm="",xm="",fm={},em=!1,bm={},Qm={},ym="",pm=void 0,Am={},tm={},nm=void 0,Rm=2;
0<Jm.Qg&&(Rm=Jm.Qg);var um=function(a,b){for(var c=0,d=[],e=0;e<a;++e)d.push(0);return{Ei:function(){return c<a?!1:cb()-d[c%a]<b},Xi:function(){var f=c++%a;d[f]=cb()}}}(Rm,1E3),vm=1E3,Tm=function(a,b){if(Om&&!tm[a]&&pm!==a){km();pm=a;wm=rm="";Am[a]="&e="+mm(b)+"&eid="+a;om();}},Um=function(a,b,c,d){if(Om&&b){var e,f=String(b[he.pb]||"").replace(/_/g,"");0===f.indexOf("cvt")&&(f="cvt");e=f;var g=c+e;
if(!tm[a]){a!==pm&&(km(),pm=a);rm=rm?rm+"."+g:"&tr="+g;var h=b["function"];if(!h)throw Error("Error: No function name given for function call.");var l=(Je[h]?"1":"2")+e;wm=wm?wm+"."+l:"&ti="+l;om();lm()}}};var Xm=function(a,b,c){if(Om&&!tm[a]){a!==pm&&(km(),pm=a);var d=c+b;sm=sm?sm+"."+d:"&epr="+d;om();lm()}},Ym=function(a,b,c){};
function Zm(a,b,c,d){var e=He[a],f=$m(a,b,c,d);if(!f)return null;var g=Pe(e[he.Zf],c,[]);if(g&&g.length){var h=g[0];f=Zm(h.index,{onSuccess:f,onFailure:1===h.sg?b.terminate:f,terminate:b.terminate},c,d)}return f}
function $m(a,b,c,d){function e(){if(f[he.Kh])h();else{var w=Qe(f,c,[]);var y=w[he.Wg];if(null!=y)for(var x=0;x<y.length;x++)if(!fh(y[x])){h();return}var z=Hl(c.cb,String(f[he.pb]),Number(f[he.$f]),w[he.Lh]),B=!1;w.vtp_gtmOnSuccess=function(){if(!B){B=!0;var D=cb()-E;Um(c.id,He[a],"5",D);Il(c.cb,z,"success",
D);g()}};w.vtp_gtmOnFailure=function(){if(!B){B=!0;var D=cb()-E;Um(c.id,He[a],"6",D);Il(c.cb,z,"failure",D);h()}};w.vtp_gtmTagId=f.tag_id;w.vtp_gtmEventId=c.id;Um(c.id,f,"1");var C=function(){var D=cb()-E;Um(c.id,f,"7",D);Il(c.cb,z,"exception",D);B||(B=!0,h())};var E=cb();try{Oe(w,c)}catch(D){C(D)}}}var f=He[a],g=b.onSuccess,h=b.onFailure,l=b.terminate;if(c.Oe(f))return null;var m=Pe(f[he.ag],c,[]);if(m&&m.length){var p=m[0],q=Zm(p.index,{onSuccess:g,onFailure:h,terminate:l},c,d);if(!q)return null;g=q;h=2===p.sg?l:q}if(f[he.Vf]||f[he.Nh]){var r=f[he.Vf]?Ie:
c.ij,t=g,u=h;if(!r[a]){e=eb(e);var v=an(a,r,e);g=v.onSuccess;h=v.onFailure}return function(){r[a](t,u)}}return e}function an(a,b,c){var d=[],e=[];b[a]=bn(d,e,c);return{onSuccess:function(){b[a]=cn;for(var f=0;f<d.length;f++)d[f]()},onFailure:function(){b[a]=dn;for(var f=0;f<e.length;f++)e[f]()}}}function bn(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function cn(a){a()}function dn(a,b){b()};var gn=function(a,b){for(var c=[],d=0;d<He.length;d++)if(a[d]){var e=He[d];var f=Kl(b.cb);try{var g=Zm(d,{onSuccess:f,onFailure:f,terminate:f},b,d);if(g){var h=c,l=h.push,m=d,p=e["function"];if(!p)throw"Error: No function name given for function call.";var q=Je[p];l.call(h,{Mg:m,Dg:q?q.priorityOverride||0:0,Kb:g})}else en(d,b),f()}catch(u){f()}}var r=b.cb;r.P=!0;r.s>=r.B&&Jl(r);c.sort(fn);for(var t=0;t<c.length;t++)c[t].Kb();
return 0<c.length};function fn(a,b){var c,d=b.Dg,e=a.Dg;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.Mg,h=b.Mg;f=g>h?1:g<h?-1:0}return f}function en(a,b){if(!Om)return;var c=function(d){var e=b.Oe(He[d])?"3":"4",f=Pe(He[d][he.Zf],b,[]);f&&f.length&&c(f[0].index);Um(b.id,He[d],e);var g=Pe(He[d][he.ag],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var hn=!1,on=function(a){var b=cb(),c=a["gtm.uniqueEventId"],d=a.event;if("gtm.js"===d){if(hn)return!1;hn=!0;}var g=vl(c),h=!1;if(!g.active){if("gtm.js"!==d)return!1;h=!0;g=vl(Number.MAX_SAFE_INTEGER)}
Tm(c,d);var l=a.eventCallback,m=a.eventTimeout,p=l;var q={id:c,name:d,Oe:tl(g.isAllowed),ij:[],Ag:function(){yg(6)},kg:jn(c),cb:new Gl(p,m)};q.jg=kn();
ln(c,q.cb);var r=Ze(q);h&&(r=mn(r));var t=gn(r,q);"gtm.js"!==d&&"gtm.sync"!==d||Wl(df.N);switch(d){case "gtm.init":t&&yg(20)}return nn(r,t)};function jn(a){return function(b){Om&&(Ec(b)||Ym(a,"input",b))}}
function ln(a,b){Ki(a,"event",1);Ki(a,"ecommerce",1);Ki(a,"gtm");Ki(a,"eventModel");}function kn(){var a={};a.event=Ji("event",1);a.ecommerce=Ji("ecommerce",1);a.gtm=Ji("gtm");a.eventModel=Ji("eventModel");return a}function mn(a){for(var b=[],c=0;c<a.length;c++)a[c]&&ni[String(He[c][he.pb])]&&(b[c]=!0);return b}
function nn(a,b){if(!b)return b;for(var c=0;c<a.length;c++)if(a[c]&&He[c]&&!oi[String(He[c][he.pb])])return!0;return!1}function pn(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return Eh(""+c+b).href}}function qn(a,b){return rn()?pn(a,b):void 0}function rn(){var a=!1;return a};var sn=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.remoteConfig={};this.globalConfig={};this.onSuccess=function(){};this.onFailure=function(){};this.setContainerTypeLoaded=function(){};this.getContainerTypeLoaded=function(){};this.eventId=void 0;this.isGtmEvent=!1},tn=function(a){var b=new sn;b.eventModel=a;return b},un=function(a,b){a.targetConfig=b;return a},vn=function(a,b){a.containerConfig=b;return a},wn=function(a,b){a.remoteConfig=b;return a},xn=function(a,
b){a.globalConfig=b;return a},yn=function(a,b){a.onSuccess=b;return a},zn=function(a,b){a.setContainerTypeLoaded=b;return a},An=function(a,b){a.getContainerTypeLoaded=b;return a},Bn=function(a,b){a.onFailure=b;return a};
sn.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.remoteConfig[a])return this.remoteConfig[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Cn=function(a){function b(e){Ua(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Ua(c,function(e){d.push(e)});return d},Dn=function(a,b){function c(f){Ac(f)&&Ua(f,function(g,h){e=!0;d[g]=h})}var d={},e=!1;c(a.globalConfig[b]);c(a.remoteConfig[b]);c(a.containerConfig[b]);c(a.targetConfig[b]);c(a.eventModel[b]);return e?d:void 0};var En;if(3===df.jd.length)En="g";else{var Fn="G";En=Fn}
var Gn={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:En,OPT:"o"},Hn=function(a){var b=df.N.split("-"),c=b[0].toUpperCase(),d=Gn[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===df.jd.length){var g="w";f="2"+g}else f="";return f+d+df.jd+e};var In=function(a,b){a.addEventListener&&a.addEventListener.call(a,"message",b,!1)};var Jn=function(){return Kb("iPhone")&&!Kb("iPod")&&!Kb("iPad")};Kb("Opera");Kb("Trident")||Kb("MSIE");Kb("Edge");!Kb("Gecko")||-1!=Hb.toLowerCase().indexOf("webkit")&&!Kb("Edge")||Kb("Trident")||Kb("MSIE")||Kb("Edge");-1!=Hb.toLowerCase().indexOf("webkit")&&!Kb("Edge")&&Kb("Mobile");Kb("Macintosh");Kb("Windows");Kb("Linux")||Kb("CrOS");var Kn=pa.navigator||null;Kn&&(Kn.appVersion||"").indexOf("X11");Kb("Android");Jn();Kb("iPad");Kb("iPod");Jn()||Kb("iPad")||Kb("iPod");Hb.toLowerCase().indexOf("kaios");var Ln=function(a,b){for(var c=a,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames[b])}catch(h){e=!1}if(e)return c;var f;a:{try{var g=c.parent;if(g&&g!=c){f=g;break a}}catch(h){}f=null}if(!(c=f))break}return null},Mn=function(a){var b=J;b=void 0===b?window.document:b;if(!a||!b.head)return null;var c=document.createElement("meta");b.head.appendChild(c);c.httpEquiv="origin-trial";c.content=a;return c};var Nn=function(){};var On=function(a){void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent&&(a.addtlConsent=void 0);void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies&&(a.gdprApplies=void 0);return void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==a.listenerId&&"number"!==typeof a.listenerId?2:a.cmpStatus&&"error"!==a.cmpStatus?0:3},Pn=function(a,b){this.s=a;this.g=null;this.F={};this.P=0;this.H=void 0===b?500:b;this.B=null};oa(Pn,Nn);
var Rn=function(a){return"function"===typeof a.s.__tcfapi||null!=Qn(a)};
Pn.prototype.addEventListener=function(a){var b={},c=Ub(function(){return a(b)}),d=0;-1!==this.H&&(d=setTimeout(function(){b.tcString="tcunavailable";b.internalErrorState=1;c()},this.H));var e=function(f,g){clearTimeout(d);f?(b=f,b.internalErrorState=On(b),g&&0===b.internalErrorState||(b.tcString="tcunavailable",g||(b.internalErrorState=3))):(b.tcString="tcunavailable",b.internalErrorState=3);a(b)};try{Sn(this,"addEventListener",e)}catch(f){b.tcString="tcunavailable",b.internalErrorState=3,d&&(clearTimeout(d),
d=0),c()}};Pn.prototype.removeEventListener=function(a){a&&a.listenerId&&Sn(this,"removeEventListener",null,a.listenerId)};
var Un=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var g=e;if(0===g)return!1;var h=c;2===c?(h=0,2===g&&(h=1)):3===c&&(h=1,1===g&&(h=0));var l;if(0===h)if(a.purpose&&a.vendor){var m=Tn(a.vendor.consents,void 0===d?"755":d);l=m&&"1"===b&&a.purposeOneTreatment&&("DE"===a.publisherCC||Fg(Ag)&&"CH"===a.publisherCC)?!0:m&&Tn(a.purpose.consents,b)}else l=!0;else l=
1===h?a.purpose&&a.vendor?Tn(a.purpose.legitimateInterests,b)&&Tn(a.vendor.legitimateInterests,void 0===d?"755":d):!0:!0;return l},Tn=function(a,b){return!(!a||!a[b])},Sn=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.s.__tcfapi){var e=a.s.__tcfapi;e(b,2,c,d)}else if(Qn(a)){Vn(a);var f=++a.P;a.F[f]=c;if(a.g){var g={};a.g.postMessage((g.__tcfapiCall={command:b,version:2,callId:f,parameter:d},g),"*")}}else c({},!1)},Qn=function(a){if(a.g)return a.g;a.g=Ln(a.s,"__tcfapiLocator");return a.g},
Vn=function(a){a.B||(a.B=function(b){try{var c;c=("string"===typeof b.data?JSON.parse(b.data):b.data).__tcfapiReturn;a.F[c.callId](c.returnValue,c.success)}catch(d){}},In(a.s,a.B))};var Wn=!0;Wn=!1;var Xn={1:0,3:0,4:0,7:3,9:3,10:3};function Yn(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c}var Zn=Yn("",550),$n=Yn("",500);function ao(){var a=li.tcf||{};return li.tcf=a}
var bo=function(a,b){this.B=a;this.g=b;this.s=cb();},co=function(a){},eo=function(a){},ko=function(){var a=ao(),b=new Pn(F,Wn?3E3:-1),c=new bo(b,a);if((fo()?!0===F.gtag_enable_tcf_support:!1!==F.gtag_enable_tcf_support)&&!a.active&&("function"===typeof F.__tcfapi||Rn(b))){a.active=!0;a.Cc={};go();var d=null;Wn?d=F.setTimeout(function(){ho(a);io(a);d=null},$n):a.tcString="tcunavailable";try{b.addEventListener(function(e){d&&(clearTimeout(d),d=null);if(0!==e.internalErrorState)ho(a),io(a),co(c);
else{var f;a.gdprApplies=e.gdprApplies;if(!1===e.gdprApplies)f=jo(),b.removeEventListener(e);else if("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus||"cmpuishown"===e.eventStatus){var g={},h;for(h in Xn)if(Xn.hasOwnProperty(h))if("1"===h){var l,m=e,p=!0;p=void 0===p?!1:p;var q;var r=m;!1===r.gdprApplies?q=!0:(void 0===r.internalErrorState&&(r.internalErrorState=On(r)),q="error"===r.cmpStatus||0!==r.internalErrorState||"loaded"===r.cmpStatus&&("tcloaded"===r.eventStatus||"useractioncomplete"===
r.eventStatus)?!0:!1);l=q?!1===m.gdprApplies||"tcunavailable"===m.tcString||void 0===m.gdprApplies&&!p||"string"!==typeof m.tcString||!m.tcString.length?!0:Un(m,"1",0):!1;g["1"]=l}else g[h]=Un(e,h,Xn[h]);f=g}f&&(a.tcString=e.tcString||"tcempty",a.Cc=f,io(a),co(c))}}),eo(c)}catch(e){d&&(clearTimeout(d),d=null),ho(a),io(a)}}};function ho(a){a.type="e";a.tcString="tcunavailable";Wn&&(a.Cc=jo())}function go(){var a={},b=(a.ad_storage="denied",a.wait_for_update=Zn,a);Yg(b)}
var fo=function(){var a=!1;a=!0;return a};function jo(){var a={},b;for(b in Xn)Xn.hasOwnProperty(b)&&(a[b]=!0);return a}function io(a){var b={},c=(b.ad_storage=a.Cc["1"]?"granted":"denied",b);lo();Zg(c,0)}
var mo=function(){var a=ao();if(a.active&&void 0!==a.loadTime)return Number(a.loadTime)},lo=function(){var a=ao();return a.active?a.tcString||"":""},no=function(){var a=ao();return a.active&&void 0!==a.gdprApplies?a.gdprApplies?"1":"0":""},oo=function(a){if(!Xn.hasOwnProperty(String(a)))return!0;var b=ao();return b.active&&b.Cc?!!b.Cc[String(a)]:!0};var po=!1;po=!0;function qo(a){var b=String(F.location).split(/[?#]/)[0],c=df.Yg||F._CONSENT_MODE_SALT,d;if(a){var e;if(c){var f=b+a+c,g=1,h,l,m;if(f)for(g=0,l=f.length-1;0<=l;l--)m=f.charCodeAt(l),g=(g<<6&268435455)+m+(m<<14),h=g&266338304,g=0!=h?g^h>>21:g;e=String(g)}else e="0";d=e}else d="";return d}
function ro(a){function b(u){var v;li.reported_gclid||(li.reported_gclid={});v=li.reported_gclid;var w;w=po&&g&&(!Qg()||fh(Q.D))?l+"."+(f.prefix||"_gcl")+(u?"gcu":"gcs"):l+(u?"gcu":"gcs");if(!v[w]){v[w]=!0;var y=[],x={},z=function(S,U){U&&(y.push(S+"="+encodeURIComponent(U)),x[S]=!0)},B="https://www.google.com";if(Qg()){var C=fh(Q.D);z("gcs",gh());u&&z("gcu","1");Rg()&&z("gcd","G1"+Wg(Og));
li.dedupe_gclid||(li.dedupe_gclid=""+hj());z("rnd",li.dedupe_gclid);if((!l||m&&"aw.ds"!==m)&&fh(Q.D)){var E=ok("_gcl_aw");z("gclaw",E.join("."))}z("url",String(F.location).split(/[?#]/)[0]);z("dclid",so(d,p));var D=!1;D=!0;C||!d&&!D||(B="https://pagead2.googlesyndication.com")}
z("gdpr_consent",lo()),z("gdpr",no());"1"===Qj(!1)._up&&z("gtm_up","1");z("gclid",so(d,l));z("gclsrc",m);if(!(x.gclid||x.dclid||x.gclaw)&&(z("gbraid",so(d,q)),!x.gbraid&&Qg()&&fh(Q.D))){var I=ok("_gcl_gb");z("gclgb",I.join("."))}z("gtm",Hn(!e));po&&g&&fh(Q.D)&&(sj(f||{}),z("auid",oj[pj(f.prefix)]||""));
a.pg&&z("did",a.pg);var R=B+"/pagead/landing?"+y.join("&");mc(R)}}var c=!!a.ze,d=!!a.oa,e=a.W,f=void 0===a.pd?{}:a.pd,g=void 0===a.wd?!0:a.wd,h=uk(),l=h.gclid||"",m=h.gclsrc,p=h.dclid||"",q=h.gbraid||"",r=!c&&((!l||m&&"aw.ds"!==m?!1:!0)||q),t=Qg();if(r||t)t?jh(function(){b();fh(Q.D)||ih(function(u){return b(!0,u.bi)},Q.D)},[Q.D]):b()}function so(a,b){var c=a&&!fh(Q.D);return b&&c?"0":b}var xo=!1,yo=Number("200");function zo(){if(!F.Promise)return!1;Ja(J.interestCohort)||xo||(xo=!0,Mn("A489+ZNTpP/HCOD+k3I13nobRVH7eyh5fz5LGhYvQlNf9WauHk/0awCtXOEoWTIK9JN8bgzgn2SfPdaFXe5O9QkAAACKeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"));return Ja(J.interestCohort)}
function Ao(){var a=li.floc;if(a){var b=a.ts,c=a.floc;if(b&&c&&1E3>cb()-b)return Promise.resolve(c)}var d=void 0;try{d=Promise.race([J.interestCohort().then(function(e){li.floc={ts:cb(),floc:e};return e}),new Promise(function(e){F.setTimeout(function(){return e()},yo)})]).catch(function(){})}catch(e){return}return d}var Bp=function(){var a=!0;oo(7)&&oo(9)&&oo(10)||(a=!1);var b=!0;b=!1;b&&!Ap()&&(a=!1);return a},Ap=function(){var a=!0;oo(3)&&oo(4)||(a=!1);return a};var Zp=!1;function $p(){var a=li;return a.gcq=a.gcq||new aq}
var bq=function(a,b,c){$p().register(a,b,c)},cq=function(a,b,c,d){$p().push("event",[b,a],c,d)},dq=function(a,b){$p().push("config",[a],b)},eq=function(a,b,c,d){$p().push("get",[a,b],c,d)},fq=function(a){return $p().getRemoteConfig(a)},gq={},hq=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.remoteConfig={};this.s={};this.B=null;this.g=!1},iq=function(a,b,c,d,e){this.type=a;this.B=b;this.W=c||"";this.g=d;this.s=e},aq=function(){this.s={};this.B={};this.g=[];this.F={AW:!1,
UA:!1};this.enableDeferrableCommandAfterConfig=Zp},jq=function(a,b){var c=Tk(b);return a.s[c.containerId]=a.s[c.containerId]||new hq},kq=function(a,b,c){if(b){var d=Tk(b);if(d&&1===jq(a,b).status){jq(a,b).status=2;var e={};Om&&(e.timeoutId=F.setTimeout(function(){yg(38);om()},3E3));a.push("require",[e],d.containerId);gq[d.containerId]=cb();if(Wk()){}else{var g="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",h=("http:"!=F.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=qn(c,g)||h;cc(l)}}}},lq=function(a,b,c,d){if(d.W){var e=jq(a,d.W),f=e.B;if(f){var g=M(c),h=M(e.targetConfig[d.W]),l=M(e.containerConfig),m=M(e.remoteConfig),p=M(a.B),q=Ei("gtm.uniqueEventId"),r=Tk(d.W).prefix,t=An(zn(Bn(yn(xn(wn(vn(un(tn(g),
h),l),m),p),function(){Xm(q,r,"2");}),function(){Xm(q,r,"3");}),function(u,v){a.F[u]=v}),function(u){return a.F[u]});try{Xm(q,r,"1");f(d.W,b,d.B,t)}catch(u){Xm(q,r,"4");}}}};
aq.prototype.register=function(a,b,c){var d=jq(this,a);if(3!==d.status){d.B=b;d.status=3;if(c){M(d.remoteConfig,c);d.remoteConfig=c}var e=Tk(a),f=gq[e.containerId];if(void 0!==f){var g=li[e.containerId].bootstrap,h=e.prefix.toUpperCase();li[e.containerId]._spx&&(h=h.toLowerCase());var l=Ei("gtm.uniqueEventId"),m=h,p=cb()-g;if(Om&&!tm[l]){l!==pm&&(km(),pm=l);var q=m+"."+Math.floor(g-
f)+"."+Math.floor(p);xm=xm?xm+","+q:"&cl="+q}delete gq[e.containerId]}this.flush()}};aq.prototype.push=function(a,b,c,d){var e=Math.floor(cb()/1E3);kq(this,c,b[0][Q.ma]||this.B[Q.ma]);Zp&&c&&jq(this,c).g&&(d=!1);this.g.push(new iq(a,e,c,b,d));d||this.flush()};aq.prototype.insert=function(a,b,c){var d=Math.floor(cb()/1E3);0<this.g.length?this.g.splice(1,0,new iq(a,d,c,b,!1)):this.g.push(new iq(a,d,c,b,!1))};
aq.prototype.flush=function(a){for(var b=this,c=[],d=!1,e={};this.g.length;){var f=this.g[0];if(f.s)Zp?!f.W||jq(this,f.W).g?(f.s=!1,this.g.push(f)):c.push(f):(f.s=!1,this.g.push(f)),this.g.shift();else{switch(f.type){case "require":if(3!==jq(this,f.W).status&&!a){Zp&&this.g.push.apply(this.g,c);return}Om&&F.clearTimeout(f.g[0].timeoutId);break;case "set":Ua(f.g[0],function(r,t){M(jb(r,t),b.B)});break;case "config":e.Ka={};Ua(f.g[0],function(r){return function(t,u){M(jb(t,u),r.Ka)}}(e));var g=!!e.Ka[Q.$c];
delete e.Ka[Q.$c];var h=jq(this,f.W),l=Tk(f.W),m=l.containerId===l.id;g||(m?h.containerConfig={}:h.targetConfig[f.W]={});h.g&&g||lq(this,Q.Ca,e.Ka,f);h.g=!0;delete e.Ka[Q.ac];m?M(e.Ka,h.containerConfig):M(e.Ka,h.targetConfig[f.W]);Zp&&(d=!0);break;case "event":e.Ic={};Ua(f.g[0],function(r){return function(t,u){M(jb(t,u),r.Ic)}}(e));lq(this,f.g[1],e.Ic,f);break;case "get":var p={},q=(p[Q.Ya]=f.g[0],p[Q.Xa]=f.g[1],p);lq(this,Q.Ma,q,f)}this.g.shift();mq(this,f)}e={Ka:e.Ka,Ic:e.Ic}}Zp&&(this.g.push.apply(this.g,
c),d&&this.flush())};var mq=function(a,b){if("require"!==b.type)if(b.W)for(var c=a.getCommandListeners(b.W)[b.type]||[],d=0;d<c.length;d++)c[d]();else for(var e in a.s)if(a.s.hasOwnProperty(e)){var f=a.s[e];if(f&&f.s)for(var g=f.s[b.type]||[],h=0;h<g.length;h++)g[h]()}};aq.prototype.getRemoteConfig=function(a){return jq(this,a).remoteConfig};aq.prototype.getCommandListeners=function(a){return jq(this,a).s};function nq(a,b){var c=this;};function oq(a,b,c){};function pq(a,b,c,d){};function qq(a){};var rq=function(a,b,c){var d={event:b,"gtm.element":a,"gtm.elementClasses":nc(a,"className"),"gtm.elementId":a["for"]||ic(a,"id")||"","gtm.elementTarget":a.formTarget||nc(a,"target")||""};c&&(d["gtm.triggers"]=c.join(","));d["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||nc(a,"href")||a.src||a.code||a.codebase||"";return d},sq=function(a){li.hasOwnProperty("autoEventsSettings")||(li.autoEventsSettings={});var b=li.autoEventsSettings;b.hasOwnProperty(a)||(b[a]=
{});return b[a]},tq=function(a,b,c){sq(a)[b]=c},uq=function(a,b,c,d){var e=sq(a),f=db(e,b,d);e[b]=c(f)},vq=function(a,b,c){var d=sq(a);return db(d,b,c)};var wq=["input","select","textarea"],xq=["button","hidden","image","reset","submit"],yq=function(a){var b=a.tagName.toLowerCase();return!Oa(wq,function(c){return c===b})||"input"===b&&Oa(xq,function(c){return c===a.type.toLowerCase()})?!1:!0},zq=function(a){return a.form?a.form.tagName?a.form:J.getElementById(a.form):lc(a,["form"],100)},Aq=function(a,b,c){if(!a.elements)return 0;for(var d=b.dataset[c],e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(yq(g)){if(g.dataset[c]===d)return f;f++}}return 0};
function Eq(a){};var Fq={},Gq=[],Hq={},Iq=0,Jq=0;
function Qq(a,b){}
function Yq(a,b){}
;function Zq(){};var $q={},ar=[];
var hr=function(a,b){};

function kr(a,b){};var lr=/^\s*$/,mr,nr=!1;
function yr(a,b){}function zr(a,b,c){};var Ar=!!F.MutationObserver,Br=void 0,Cr=function(a){if(!Br){var b=function(){var c=J.body;if(c)if(Ar)(new MutationObserver(function(){for(var e=0;e<Br.length;e++)L(Br[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;gc(c,"DOMNodeInserted",function(){d||(d=!0,L(function(){d=!1;for(var e=0;e<Br.length;e++)L(Br[e])}))})}};Br=[];J.body?b():L(b)}Br.push(a)};var Er=["www.youtube.com","www.youtube-nocookie.com"],Fr,Gr=!1,Hr=0;
function Rr(a,b){}function Sr(a,b){return!0};function Tr(a,b,c){};function Ur(a,b){var c;return c};function Vr(a){};function Wr(a){};var Xr=!1,Yr=[];function Zr(){if(!Xr){Xr=!0;for(var a=0;a<Yr.length;a++)L(Yr[a])}}var $r=function(a){Xr?L(a):Yr.push(a)};function as(a){N(H(this),["listener:!Fn"],arguments);gg(this,"process_dom_events","window","load");$r(Cc(a))};function bs(a){var b;return b};function cs(a,b){var c;var d=!1;var e=Bc(c,this.g,d);void 0===e&&void 0!==c&&yg(45);return e};function ds(a){var b;N(H(this),["path:!string"],arguments);gg(this,"access_globals","read",a);var c=a.split("."),d=ib(c,[F,J]);if(!d)return;var e=d[c[c.length-1]],f=!1;b=Bc(e,this.g,f);void 0===b&&void 0!==e&&yg(45);return b};function es(a,b){var c=null,d=!1;return Bc(c,this.g,d)};function fs(a){var b;N(H(this),["path:!string"],arguments);gg(this,"access_globals","readwrite",a);var c=a.split("."),d=ib(c,[F,J]),e=c[c.length-1];if(void 0===d)throw Error("Path "+a+" does not exist.");var f=d[e];void 0===f&&(f=[],d[e]=f);b=function(){if(!Ja(f.push))throw Error("Object at "+a+" in window is not an array.");f.push.apply(f,Array.prototype.slice.call(arguments,0))};var g=!1;return Bc(b,this.g,g)};function gs(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var hs=new Ra;function is(a,b,c){var d=c?"i":void 0;try{var e=String(b)+d,f=hs.get(e);f||(f=new RegExp(b,d),hs.set(e,f));return f.test(a)}catch(g){return!1}}
function js(a,b){function c(g){var h=Eh(g),l=Ch(h,"protocol"),m=Ch(h,"host",!0),p=Ch(h,"port"),q=Ch(h,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==p||"https"==l&&"443"==p)l="web",p="default";return[l,m,p,q]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function ks(a){return ls(a)?1:0}
function ls(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Ma(c)){for(var d=0;d<c.length;d++){var e=M(a,{});M({arg1:c[d],any_of:void 0},e);if(ks(e))return!0}return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var f;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){f=b[g[h]](c);break a}}catch(m){}}f=!1}return f;case "_ew":return gs(b,c);case "_eq":return String(b)==
String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var l;l=String(b).split(",");return 0<=Na(l,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":return is(b,c,a.ignore_case);case "_sw":return 0==String(b).indexOf(String(c));case "_um":return js(b,c)}return!1};function ms(a){return!1}var ns;function os(a){var b=!1;return b};var ps=function(a){var b;return b};function qs(a,b){b=void 0===b?!0:b;var c;return c};function rs(a){var b=null;return b};function ss(a,b){var c;return c};function ts(a,b){var c;return c};function us(a){var b="";return b};function vs(a,b){var c;return c};function ws(a){var b="";return b};function xs(){gg(this,"get_user_agent");return F.navigator.userAgent};function ys(a,b){};var zs={};function As(a,b,c,d,e,f){f?e[f]?(e[f][0].push(c),e[f][1].push(d)):(e[f]=[[c],[d]],cc(a,function(){for(var g=e[f][0],h=0;h<g.length;h++)L(g[h]);g.push=function(l){L(l);return 0}},function(){for(var g=e[f][1],h=0;h<g.length;h++)L(g[h]);e[f]=null},b)):cc(a,c,d,b)}
function Bs(a,b,c,d){N(H(this),["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);gg(this,"inject_script",a);var e=this.g;As(a,void 0,function(){b&&b.s(e)},function(){c&&c.s(e)},zs,d);}var Cs=Object.freeze({dl:1,id:1}),Ds={};
function Es(a,b,c,d){};function Fs(a){var b=!0;return b};var Gs=function(){return!1},Hs={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};var Is=["textContent","value","tagName","children","childElementCount"];
function Js(a){var b;return b};function Ks(){try{gg(this,"logging")}catch(c){return}if(!console)return;for(var a=Array.prototype.slice.call(arguments,0),b=0;b<a.length;b++)a[b]=Cc(a[b],this.g);console.log.apply(console,a);};function Ls(a,b){var c;return c};function Ms(a){var b=void 0;return b};function Ns(a,b){var c=!1;return c};function Os(){var a="";return a};function Ps(){var a="";return a};var Qs=["set","get","config","event"];
function Rs(a,b,c){};function Ss(){};function Ts(a,b,c,d){d=void 0===d?!1:d;};function Us(a,b,c){};function Vs(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};function Ws(a){N(H(this),["consentSettings:!DustMap"],arguments);for(var b=a.qb(),c=b.length(),d=0;d<c;d++){var e=b.get(d);e!==Q.Hd&&gg(this,"access_consent",e,"write")}Yg(Cc(a))};function Xs(a,b,c){return!1};function Ys(a,b,c){}
;var Zs=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};function $s(a,b,c,d){var e=this;};function at(a,b,c){}
;var bt={},ct={};bt.getItem=function(a){var b=null;return b};
bt.setItem=function(a,b){};
bt.removeItem=function(a){};bt.clear=function(){};var dt=function(a){var b;return b};function et(a){N(H(this),["consentSettings:!DustMap"],arguments);var b=Cc(a),c;for(c in b)b.hasOwnProperty(c)&&gg(this,"access_consent",c,"write");Zg(b)};var ee=function(){var a=new tg;Wk()?(a.add("injectHiddenIframe",Ia),a.add("injectScript",Ia)):(a.add("injectHiddenIframe",ys),a.add("injectScript",Bs));var b=Us;a.add("Math",$f());a.add("TestHelper",wg());a.add("addEventCallback",qq);a.add("aliasInWindow",Sr);a.add("assertApi",Wf);a.add("assertThat",Xf);a.add("callInWindow",
Ur);a.add("callLater",Vr);a.add("copyFromDataLayer",cs);a.add("copyFromWindow",ds);a.add("createArgumentsQueue",es);a.add("createQueue",fs);a.add("decodeUri",ag);a.add("decodeUriComponent",bg);a.add("encodeUri",cg);a.add("encodeUriComponent",dg);a.add("fail",eg);a.add("fromBase64",ps,!("atob"in F));a.add("generateRandom",fg);a.add("getContainerVersion",hg);a.add("getCookieValues",qs);a.add("getQueryParameters",ss);a.add("getReferrerQueryParameters",ts);a.add("getReferrerUrl",us);a.add("getTimestamp",
ig);a.add("getTimestampMillis",ig);a.add("getType",jg);a.add("getUrl",ws);a.add("localStorage",Hs,!Gs());a.add("logToConsole",Ks);a.add("makeInteger",lg);a.add("makeNumber",mg);a.add("makeString",ng);a.add("makeTableMap",og);a.add("mock",qg);a.add("parseUrl",Ms);a.add("queryPermission",Ns);a.add("readCharacterSet",Os);a.add("readTitle",Ps);a.add("sendPixel",b);a.add("setCookie",Vs);a.add("setInWindow",Xs);a.add("sha256",$s);a.add("templateStorage",bt);a.add("toBase64",dt,!("btoa"in F));a.add("JSON",
kg(function(d){var e=this.g.g;e&&e.log.call(this,"error",d)}));var c=!1;
c=!0;c&&a.add("setDefaultConsentState",Ws);a.add("updateConsentState",et);
a.add("isConsentGranted",Fs);a.add("addConsentListener",nq);
vg(a,"callOnWindowLoad",as);Wk()?vg(a,"internal.injectScript",
Ia):vg(a,"internal.injectScript",Es);return function(d){var e;if(a.g.hasOwnProperty(d))e=a.get(d,this);else{var f;if(f=a.s.hasOwnProperty(d)){var g=!1,h=this.g.g;if(h){var l=h.sc();if(l){0!==l.indexOf("__cvt_")&&(g=!0);}}f=g}if(f){var m=a.s.hasOwnProperty(d)?a.s[d]:void 0;e=m}else throw Error(d+" is not a valid API name.");}return e}};var ft=function(){return!1},gt=function(){var a={};return function(b,c,d){}};var ae,hf;
function ht(){var a=data.runtime||[],b=data.runtime_lines;ae=new Zd;it();De=function(e,f,g){jt(f);var h=new tb;Ua(f,function(t,u){var v=Bc(u);void 0===v&&void 0!==u&&yg(44);h.set(t,v)});ae.g.g.H=We();var l={Xh:qf(e),eventId:void 0!==g?g.id:void 0,ic:void 0!==g?function(t){return g.cb.ic(t)}:void 0,sc:function(){return e},log:function(){}};if(ft()){var m=gt(),
p=void 0,q=void 0;l.Aa={jc:{},Lb:function(t,u,v){1===u&&(p=t);7===u&&(q=v);m(t,u,v)},Re:pg()};l.log=function(t,u){if(p){var v=Array.prototype.slice.call(arguments,1);m(p,4,{level:t,source:q,message:v})}}}var r=de(l,[e,h]);ae.g.g.H=void 0;r instanceof sa&&"return"===r.g&&(r=r.s);return Cc(r)};fe();for(var c=0;c<a.length;c++){var d=a[c];if(!Ma(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&Te(d,b[c]);ae.Kb(d)}}
function jt(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Ja(b)&&(a.gtmOnSuccess=function(){L(b)});Ja(c)&&(a.gtmOnFailure=function(){L(c)})}function it(){var a=ae;li.SANDBOXED_JS_SEMAPHORE=li.SANDBOXED_JS_SEMAPHORE||0;ge(a,function(b,c,d){li.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{li.SANDBOXED_JS_SEMAPHORE--}})}function kt(a){void 0!==a&&Ua(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");xi[e]=xi[e]||[];xi[e].push(b)}})};var lt="HA GF G UA AW DC".split(" "),mt=!1,nt={},ot=!1;function pt(a,b){var c={event:a};b&&(c.eventModel=M(b),b[Q.Wd]&&(c.eventCallback=b[Q.Wd]),b[Q.Sc]&&(c.eventTimeout=b[Q.Sc]));return c}function qt(a){a.hasOwnProperty("gtm.uniqueEventId")||Object.defineProperty(a,"gtm.uniqueEventId",{value:yi()});return a["gtm.uniqueEventId"]}
function rt(){return mt}
var ut={config:function(a){var b,c;c=qt(a);void 0===c&&(c=yi());return b},consent:function(a){function b(){rt()&&M(a[2],{subcommand:a[1]})}if(3===a.length){yg(39);var c=yi(),d=a[1];"default"===d?(b(),Yg(a[2])):"update"===d&&(b(),Zg(a[2],c))}},event:function(a){var b=a[1];if(!(2>a.length)&&A(b)){var c;if(2<a.length){if(!Ac(a[2])&&
void 0!=a[2]||3<a.length)return;c=a[2]}var d=pt(b,c),e=void 0;e=qt(a),d["gtm.uniqueEventId"]=e;void 0===e&&yi();return d}},get:function(a){},js:function(a){if(2==a.length&&a[1].getTime){ot=!0;rt();var b={event:"gtm.js","gtm.start":a[1].getTime()};b["gtm.uniqueEventId"]=qt(a);return b}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=hf.s;d.g[b]?d.g[b].push(c):
d.g[b]=[c]}},set:function(a){var b;2==a.length&&Ac(a[1])?b=M(a[1]):3==a.length&&A(a[1])&&(b={},Ac(a[2])||Ma(a[2])?b[a[1]]=M(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},vt={policy:!0};var wt=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},yt=function(a){var b=xt(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Pt=function(a){if(Ot(a))return a;this.g=a};Pt.prototype.wi=function(){return this.g};var Ot=function(a){return!a||"object"!==yc(a)||Ac(a)?!1:"getUntrustedUpdateValue"in a};Pt.prototype.getUntrustedUpdateValue=Pt.prototype.wi;var Qt=[],Rt=!1,St=!1,Tt=!1,Ut=function(a){return F["dataLayer"].push(a)},Vt=function(a){var b=li["dataLayer"],c=b?b.subscribers:1,d=0,e=a;return function(){++d===c&&(e(),e=null)}};
function Wt(a){var b=a._clear;Ua(a,function(d,e){"_clear"!==d&&(b&&Hi(d,void 0),Hi(d,e))});ti||(ti=a["gtm.start"]);var c=a["gtm.uniqueEventId"];if(!a.event)return!1;c||(c=yi(),a["gtm.uniqueEventId"]=c,Hi("gtm.uniqueEventId",c));return on(a)}function Xt(){var a=Qt[0];if(null==a||"object"!==typeof a)return!1;if(a.event)return!0;if(Wa(a)){var b=a[0];if("config"===b||"event"===b||"js"===b)return!0}return!1}
function Yt(){for(var a=!1;!Tt&&0<Qt.length;){var b=!1;b=!0;if(b&&!St&&Xt()){var c={};Qt.unshift((c.event=
"gtm.init",c));St=!0}var d=!1;d=!0;if(d&&!Rt&&Xt()){var e={};Qt.unshift((e.event="gtm.init_consent",e));Rt=!0}Tt=!0;delete Bi.eventModel;Di();var f=Qt.shift();if(null!=f){var g=Ot(f);
if(g){var h=f;f=Ot(h)?h.getUntrustedUpdateValue():void 0;Ii()}try{if(Ja(f))try{f.call(Fi)}catch(v){}else if(Ma(f)){var l=f;if(A(l[0])){var m=l[0].split("."),p=m.pop(),q=l.slice(1),r=Ei(m.join("."),2);if(void 0!==r&&null!==r)try{r[p].apply(r,q)}catch(v){}}}else{if(Wa(f)){a:{var t=f;if(t.length&&A(t[0])){var u=ut[t[0]];if(u&&(!g||!vt[t[0]])){f=u(t);break a}}f=void 0}if(!f){Tt=!1;continue}}a=Wt(f)||a}}finally{g&&Di(!0)}}Tt=!1}
return!a}function Zt(){var b=Yt();try{wt(F["dataLayer"],df.N)}catch(c){}return b}
var au=function(){var a=Zb("dataLayer",[]),b=Zb("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};El(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});$r(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<li.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new Pt(arguments[f])}else e=[].slice.call(arguments,0);var g=c.apply(a,e);Qt.push.apply(Qt,e);if(300<
this.length)for(yg(4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return Yt()&&h};var d=a.slice(0);Qt.push.apply(Qt,d);if($t()){L(Zt)}},$t=function(){var a=!0;return a};var bu={};bu.dd=new String("undefined");
var cu=function(a){this.g=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===bu.dd?b:a[d]);return c.join("")}};cu.prototype.toString=function(){return this.g("undefined")};cu.prototype.valueOf=cu.prototype.toString;bu.Qh=cu;bu.pe={};bu.gi=function(a){return new cu(a)};var du={};bu.Yi=function(a,b){var c=yi();du[c]=[a,b];return c};bu.ng=function(a){var b=a?0:1;return function(c){var d=du[c];if(d&&"function"===typeof d[b])d[b]();du[c]=void 0}};bu.Di=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};bu.Ui=function(a){if(a===bu.dd)return a;var b=yi();bu.pe[b]=a;return'google_tag_manager["'+df.N+'"].macro('+b+")"};bu.Oi=function(a,b,c){a instanceof bu.Qh&&(a=a.g(bu.Yi(b,c)),b=Ia);return{yi:a,onSuccess:b}};var ou=F.clearTimeout,pu=F.setTimeout,V=function(a,b,c){if(Wk()){b&&L(b)}else return cc(a,b,c)},qu=function(){return new Date},ru=function(){return F.location.href},su=function(a){return Ch(Eh(a),"fragment")},tu=function(a){return Dh(Eh(a))},uu=function(a,b){return Ei(a,b||2)},vu=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Ut(a)):d=Ut(a);return d},wu=function(a,b){F[a]=b},X=function(a,b,c){b&&
(void 0===F[a]||c&&!F[a])&&(F[a]=b);return F[a]},xu=function(a,b,c){return Wi(a,b,void 0===c?!0:!!c)},yu=function(a,b,c){return 0===ej(a,b,c)},zu=function(a,b){if(Wk()){b&&L(b)}else ec(a,b)},Au=function(a){return!!vq(a,"init",!1)},Bu=function(a){tq(a,"init",!0)},Cu=function(a){var b=ri+"?id="+encodeURIComponent(a)+"&l=dataLayer";V(Yk("https://","http://",b))},Du=function(a,b,c){Om&&(Ec(a)||Ym(c,b,a))};var Eu=bu.Oi;var av=encodeURI,Y=encodeURIComponent,bv=fc;var cv=function(a,b){if(!a)return!1;var c=Ch(Eh(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var dv=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};function Kw(){return F.gaGlobal=F.gaGlobal||{}}var Lw=function(){var a=Kw();a.hid=a.hid||Qa();return a.hid},Mw=function(a,b){var c=Kw();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var jx=function(){if(Ja(F.__uspapi)){var a="";try{F.__uspapi("getUSPData",1,function(b,c){if(c&&b){var d=b.uspString;d&&/^[\da-zA-Z-]{1,20}$/.test(d)&&(a=d)}})}catch(b){}return a}};var Ex=window,Fx=document,Gx=function(a){var b=Ex._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Ex["ga-disable-"+a])return!0;try{var c=Ex.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Si("AMP_TOKEN",String(Fx.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Fx.getElementById("__gaOptOutExtension")?!0:!1};var Hx={};function Kx(a){delete a.eventModel[Q.ac];Mx(a.eventModel)}
var Mx=function(a){Ua(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[Q.Pa]||{};Ua(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var Px=function(a,b,c){cq(b,c,a)},Qx=function(a,b,c){cq(b,c,a,!0)},Yx=function(a,b){};
function Rx(a,b){}var Z={h:{}};
Z.h.sdl=["google"],function(){function a(){return!!(Object.keys(l("horiz.pix")).length||Object.keys(l("horiz.pct")).length||Object.keys(l("vert.pix")).length||Object.keys(l("vert.pct")).length)}function b(x){for(var z=[],B=x.split(","),C=0;C<B.length;C++){var E=Number(B[C]);if(isNaN(E))return[];p.test(B[C])||z.push(E)}return z}function c(){var x=0,z=0;return function(){var B=qh(),C=B.height;x=Math.max(v.scrollLeft+B.width,x);z=Math.max(v.scrollTop+C,z);return{Ce:x,De:z}}}function d(){t=X("self");
u=t.document;v=u.scrollingElement||u.body&&u.body.parentNode;y=c()}function e(x,z,B,C){var E=l(z),D={},I;for(I in E){D.yb=I;if(E.hasOwnProperty(D.yb)){var R=Number(D.yb);x<R||(vu({event:"gtm.scrollDepth","gtm.scrollThreshold":R,"gtm.scrollUnits":B.toLowerCase(),"gtm.scrollDirection":C,"gtm.triggers":E[D.yb].join(",")}),uq("sdl",z,function(S){return function(U){delete U[S.yb];return U}}(D),{}))}D={yb:D.yb}}}function f(){var x=y(),z=x.Ce,B=x.De,C=z/v.scrollWidth*100,E=B/v.scrollHeight*100;e(z,"horiz.pix",
q.gd,r.Uf);e(C,"horiz.pct",q.fd,r.Uf);e(B,"vert.pix",q.gd,r.cg);e(E,"vert.pct",q.fd,r.cg);tq("sdl","pending",!1)}function g(){var x=250,z=!1;u.scrollingElement&&u.documentElement&&t.addEventListener&&(x=50,z=!0);var B=0,C=!1,E=function(){C?B=pu(E,x):(B=0,f(),Au("sdl")&&!a()&&(hc(t,"scroll",D),hc(t,"resize",D),tq("sdl","init",!1)));C=!1},D=function(){z&&y();B?C=!0:(B=pu(E,x),tq("sdl","pending",!0))};return D}function h(x,z,B){if(z){var C=b(String(x));uq("sdl",B,function(E){for(var D=0;D<C.length;D++){var I=
String(C[D]);E.hasOwnProperty(I)||(E[I]=[]);E[I].push(z)}return E},{})}}function l(x){return vq("sdl",x,{})}function m(x){L(x.vtp_gtmOnSuccess);var z=x.vtp_uniqueTriggerId,B=x.vtp_horizontalThresholdsPixels,C=x.vtp_horizontalThresholdsPercent,E=x.vtp_verticalThresholdUnits,D=x.vtp_verticalThresholdsPixels,I=x.vtp_verticalThresholdsPercent;switch(x.vtp_horizontalThresholdUnits){case q.gd:h(B,z,"horiz.pix");break;case q.fd:h(C,z,"horiz.pct")}switch(E){case q.gd:h(D,z,"vert.pix");break;case q.fd:h(I,
z,"vert.pct")}Au("sdl")?vq("sdl","pending")||(w||(d(),w=!0),L(function(){return f()})):(d(),w=!0,v&&(Bu("sdl"),tq("sdl","pending",!0),L(function(){f();if(a()){var R=g();gc(t,"scroll",R);gc(t,"resize",R)}else tq("sdl","init",!1)})))}var p=/^\s*$/,q={fd:"PERCENT",gd:"PIXELS"},r={cg:"vertical",Uf:"horizontal"},t,u,v,w=!1,y;(function(x){Z.__sdl=x;Z.__sdl.m="sdl";Z.__sdl.o=!0;Z.__sdl.priorityOverride=0})(function(x){x.vtp_triggerStartOption?m(x):$r(function(){m(x)})})}();

Z.h.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.m="jsm";Z.__jsm.o=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=X("google_tag_manager");var d=c&&c.e&&c.e(b);Du(d,"jsm",a.vtp_gtmEventId);return d}catch(e){}}})}();Z.h.c=["google"],function(){(function(a){Z.__c=a;Z.__c.m="c";Z.__c.o=!0;Z.__c.priorityOverride=0})(function(a){Du(a.vtp_value,"c",a.vtp_gtmEventId);return a.vtp_value})}();
Z.h.e=["google"],function(){(function(a){Z.__e=a;Z.__e.m="e";Z.__e.o=!0;Z.__e.priorityOverride=0})(function(a){var b=String(Li(a.vtp_gtmEventId,"event"));a.vtp_gtmCachedValues&&(b=String(a.vtp_gtmCachedValues.event));return b})}();
Z.h.f=["google"],function(){(function(a){Z.__f=a;Z.__f.m="f";Z.__f.o=!0;Z.__f.priorityOverride=0})(function(a){var b=uu("gtm.referrer",1)||J.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Ch(Eh(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):tu(String(b)):String(b)})}();
Z.h.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=rq(c,"gtm.click");vu(d)}}(function(b){Z.__cl=b;Z.__cl.m="cl";Z.__cl.o=!0;Z.__cl.priorityOverride=0})(function(b){if(!Au("cl")){var c=X("document");gc(c,"click",a,!0);Bu("cl")}L(b.vtp_gtmOnSuccess)})}();
Z.h.j=["google"],function(){(function(a){Z.__j=a;Z.__j.m="j";Z.__j.o=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=X(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];Du(c,"j",a.vtp_gtmEventId);return c})}();Z.h.k=["google"],function(){(function(a){Z.__k=a;Z.__k.m="k";Z.__k.o=!0;Z.__k.priorityOverride=0})(function(a){return xu(a.vtp_name,uu("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Z.h.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid "+b+" request "+c);}return e}(function(b){Z.__access_globals=b;Z.__access_globals.m="access_globals";Z.__access_globals.o=!0;Z.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],h=0;h<c.length;h++){var l=c[h],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&g.push(m)}return{assert:function(p,q,r){if(!A(r))throw d(p,{},"Key must be a string.");if("read"===q){if(-1<Na(e,r))return}else if("write"===q){if(-1<Na(f,r))return}else if("readwrite"===q){if(-1<Na(f,r)&&-1<Na(e,r))return}else if("execute"===q){if(-1<Na(g,r))return}else throw d(p,{},"Operation must be either 'read', 'write', or 'execute', was "+q);throw d(p,{},"Prohibited "+q+" on global variable: "+
r+".");},V:a}})}();
Z.h.t=["google"],function(){(function(a){Z.__t=a;Z.__t.m="t";Z.__t.o=!0;Z.__t.priorityOverride=0})(function(){return qu().getTime()})}();
Z.h.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.m="u";Z.__u.o=!0;Z.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:uu("gtm.url",1))||ru();var d=b[a("vtp_component")];if(!d||"URL"==d)return tu(String(c));var e=Eh(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],h=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;g?Ma(h)?m=h:m=String(h).replace(/\s+/g,
"").split(","):m=[String(h)];for(var p=0;p<m.length;p++){var q=Ch(e,"QUERY",void 0,void 0,m[p]);if(void 0!=q&&(!l||""!==q)){f=q;break a}}f=void 0}else f=Ch(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.h.v=["google"],function(){(function(a){Z.__v=a;Z.__v.m="v";Z.__v.o=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=uu(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;Du(d,"v",a.vtp_gtmEventId);return d})}();
Z.h.ua=["google"],function(){function a(q){return fh(q)}function b(q,r,t){var u=!1;if(Qg()&&!u&&!e[q]){var v=!fh(Q.I),w=function(){var y=Ql(),x="gtm"+yi(),z=m(r);z["&gtm"]=Hn(!0);var B={name:x};l(z,B,!0);var C=void 0,E=B._useUp;y(function(){var D=y.getByName(t);D&&(C=D.get("clientId"))});
y("create",q,B);v&&fh(Q.I)&&(v=!1,y(function(){var D=y.getByName(x);!D||D.get("clientId")===C&&E||(z["&gcs"]=gh(),z["&gcu"]="1",D.set(z),D.send("pageview"))}));y(function(){y.remove(x)})};Vg(w,Q.I);Vg(w,Q.D);e[q]=!0}}var c,d={},e={},f={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,
cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0,_cd2l:!0,_useUp:!0,_cs:!0},g={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},h={urlPassthrough:!0},l=function(q,r,t){var u=0;if(q)for(var v in q)if(!h[v]&&
q.hasOwnProperty(v)&&(t&&f[v]||!t&&void 0===f[v])){var w=g[v]?Ya(q[v]):q[v];"anonymizeIp"!=v||w||(w=void 0);r[v]=w;u++}return u},m=function(q){var r={};q.vtp_gaSettings&&M(dv(q.vtp_gaSettings.vtp_fieldsToSet,"fieldName","value"),r);M(dv(q.vtp_fieldsToSet,"fieldName","value"),r);fh(Q.I)||(r.storage="none");fh(Q.D)||(r.allowAdFeatures=!1,r.storeGac=!1);Bp()||(r.allowAdFeatures=!1);Ap()||(r.allowAdPersonalizationSignals=!1);q.vtp_transportUrl&&(r._x_19=q.vtp_transportUrl);if(Ya(r.urlPassthrough)){r._useUp=!0;var t=!1;Qg()&&!t&&(r._cs=a)}return r},p=function(q){function r(Da,ia){void 0!==ia&&D("set",Da,ia)}var t={},u={},v={},w={};if(q.vtp_gaSettings){var y=q.vtp_gaSettings;M(dv(y.vtp_contentGroup,"index","group"),u);M(dv(y.vtp_dimension,"index","dimension"),v);M(dv(y.vtp_metric,"index","metric"),w);var x=M(y);x.vtp_fieldsToSet=void 0;x.vtp_contentGroup=void 0;x.vtp_dimension=void 0;x.vtp_metric=
void 0;q=M(q,x)}M(dv(q.vtp_contentGroup,"index","group"),u);M(dv(q.vtp_dimension,"index","dimension"),v);M(dv(q.vtp_metric,"index","metric"),w);var z=m(q),B=Sl(q.vtp_functionName);if(Ja(B)){var C="",E="";q.vtp_setTrackerName&&"string"==typeof q.vtp_trackerName?""!==q.vtp_trackerName&&(E=q.vtp_trackerName,C=E+"."):(E="gtm"+yi(),C=E+".");var D=function(Da){var ia=[].slice.call(arguments,0);ia[0]=C+ia[0];B.apply(window,ia)},I=function(Da,ia){return void 0===ia?ia:Da(ia)},R=function(Da,ia){if(ia)for(var nb in ia)ia.hasOwnProperty(nb)&&
D("set",Da+nb,ia[nb])},S=function(){},U={name:E};l(z,U,!0);var T=q.vtp_trackingId||t.trackingId;B("create",T,U);D("set","&gtm",Hn(!0));var O=!1;
Qg()&&!O&&(D("set","&gcs",gh()),b(T,q,E));z._x_19&&z._x_20&&!d[E]&&(d[E]=!0,B(Xl(E,String(z._x_20))));q.vtp_enableRecaptcha&&D("require","recaptcha","recaptcha.js");(function(Da,ia){void 0!==q[ia]&&D("set",Da,q[ia])})("nonInteraction","vtp_nonInteraction");R("contentGroup",u);R("dimension",v);R("metric",w);var K={};l(z,K,!1)&&D("set",K);var W;
q.vtp_enableLinkId&&D("require","linkid","linkid.js");D("set","hitCallback",function(){var Da=z&&z.hitCallback;Ja(Da)&&Da();q.vtp_gtmOnSuccess()});var ba=function(Da,ia){return void 0===q[Da]?t[ia]:q[Da]};if("TRACK_EVENT"==q.vtp_trackType){q.vtp_enableEcommerce&&(D("require","ec","ec.js"),S());var P={hitType:"event",eventCategory:String(ba("vtp_eventCategory","category")),eventAction:String(ba("vtp_eventAction","action")),eventLabel:I(String,
ba("vtp_eventLabel","label")),eventValue:I(Xa,ba("vtp_eventValue","value"))};l(W,P,!1);D("send",P);}else if("TRACK_SOCIAL"==q.vtp_trackType){}else if("TRACK_TRANSACTION"==
q.vtp_trackType){}else if("TRACK_TIMING"==q.vtp_trackType){}else if("DECORATE_LINK"==
q.vtp_trackType){}else if("DECORATE_FORM"==q.vtp_trackType){}else if("TRACK_DATA"==q.vtp_trackType){}else{q.vtp_enableEcommerce&&
(D("require","ec","ec.js"),S());if(q.vtp_doubleClick||"DISPLAY_FEATURES"==q.vtp_advertisingFeaturesType){var ek="_dc_gtm_"+String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");D("require","displayfeatures",void 0,{cookieName:ek})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==q.vtp_advertisingFeaturesType){var fk="_dc_gtm_"+String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");D("require","adfeatures",{cookieName:fk})}W?D("send","pageview",W):D("send","pageview");Ya(z.urlPassthrough)&&Ul(C)}if(!c){var Hc=q.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";q.vtp_useInternalVersion&&!q.vtp_useDebugVersion&&(Hc="internal/"+Hc);c=!0;var jf=qn(z._x_19,"/analytics.js"),$g=Yk("https:","http:","//www.google-analytics.com/"+Hc,z&&!!z.forceSSL);V("analytics.js"===Hc&&jf?jf:$g,function(){var Da=
Ql();Da&&Da.loaded||q.vtp_gtmOnFailure();},q.vtp_gtmOnFailure)}}else L(q.vtp_gtmOnFailure)};(function(q){Z.__ua=q;Z.__ua.m="ua";Z.__ua.o=!0;Z.__ua.priorityOverride=0})(function(q){jh(function(){p(q)},
[Q.I,Q.D])})}();
Z.h.uv=["google"],function(){(function(a){Z.__uv=a;Z.__uv.m="uv";Z.__uv.o=!0;Z.__uv.priorityOverride=0})(function(){})}();
Z.h.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Z.__inject_script=b;Z.__inject_script.m="inject_script";Z.__inject_script.o=!0;Z.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!A(f))throw d(e,{},"Script URL must be a string.");try{if(Pf(Eh(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},V:a}})}();







Z.h.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.m="gas";Z.__gas.o=!0;Z.__gas.priorityOverride=0})(function(a){var b=M(a),c=b;c[he.pb]=null;c[he.Hh]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();
Z.h.remm=["google"],function(){(function(a){Z.__remm=a;Z.__remm.m="remm";Z.__remm.o=!0;Z.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",f=a.vtp_defaultValue,g=0;g<c.length;g++){var h=c[g].key||"";d&&(h="^"+h+"$");var l=new RegExp(h,e);if(l.test(b)){var m=c[g].value;a.vtp_replaceAfterMatch&&(m=String(b).replace(l,m));f=m;break}}Du(f,"remm",a.vtp_gtmEventId);return f})}();

Z.h.logging=["google"],function(){function a(){return{}}(function(b){Z.__logging=b;Z.__logging.m="logging";Z.__logging.o=!0;Z.__logging.priorityOverride=0})(function(b){var c=b.vtp_environments||"debug",d=b.vtp_createPermissionError;return{assert:function(e){var f;if(f="all"!==c&&!0){var g=!1;f=!g}if(f)throw d(e,{},"Logging is not enabled in all environments");},V:a}})}();Z.h.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.m="smm";Z.__smm.o=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=dv(a.vtp_map,"key","value")||{},d=c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue;Du(d,"smm",a.vtp_gtmEventId);return d})}();





Z.h.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var h=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(h.nodeName).toUpperCase()&&"text/gtmscript"==h.type){var m=J.createElement("script");m.async=!1;m.type="text/javascript";m.id=h.id;m.text=h.text||h.textContent||h.innerHTML||"";h.charset&&(m.charset=h.charset);var p=h.getAttribute("data-gtmsrc");p&&(m.src=p,ac(m,l));d.insertBefore(m,null);p||l()}else if(h.innerHTML&&0<=h.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];h.firstChild;)q.push(h.removeChild(h.firstChild));d.insertBefore(h,null);a(h,q,l,g)()}else d.insertBefore(h,null),l()}else f()}catch(r){L(g)}}}var c=function(d){if(J.body){var e=
d.vtp_gtmOnFailure,f=Eu(d.vtp_html,d.vtp_gtmOnSuccess,e),g=f.yi,h=f.onSuccess;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,h,e):a(J.body,kc(g),h,e)()}else pu(function(){c(d)},
200)};Z.__html=c;Z.__html.m="html";Z.__html.o=!0;Z.__html.priorityOverride=0}();






Z.h.lcl=[],function(){function a(){var c=X("document"),d=0,e=function(f){var g=f.target;if(g&&3!==f.which&&!(f.zg||f.timeStamp&&f.timeStamp===d)){d=f.timeStamp;g=lc(g,["a","area"],100);if(!g)return f.returnValue;var h=f.defaultPrevented||!1===f.returnValue,l=vq("lcl",h?"nv.mwt":"mwt",0),m;m=h?vq("lcl","nv.ids",[]):vq("lcl","ids",[]);if(m.length){var p=rq(g,"gtm.linkClick",m);if(b(f,g,c)&&!h&&l&&g.href){var q=!!Oa(String(nc(g,"rel")||"").split(" "),function(u){return"noreferrer"===u.toLowerCase()});
q&&yg(36);var r=X((nc(g,"target")||"_self").substring(1)),t=!0;if(vu(p,Vt(function(){var u;if(u=t&&r){var v;a:if(q){var w;try{w=new MouseEvent(f.type,{bubbles:!0})}catch(y){if(!c.createEvent){v=!1;break a}w=c.createEvent("MouseEvents");w.initEvent(f.type,!0,!0)}w.zg=!0;f.target.dispatchEvent(w);v=!0}else v=!1;u=!v}u&&(r.location.href=nc(g,"href"))}),l))t=!1;else return f.preventDefault&&f.preventDefault(),f.returnValue=!1}else vu(p,function(){},l||2E3);return!0}}};gc(c,"click",e,!1);gc(c,"auxclick",
e,!1)}function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var f=nc(d,"href"),g=f.indexOf("#"),h=nc(d,"target");if(h&&"_self"!==h&&"_parent"!==h&&"_top"!==h||0===g)return!1;if(0<g){var l=tu(f),m=tu(e.location);return l!==m}return!0}(function(c){Z.__lcl=c;Z.__lcl.m="lcl";Z.__lcl.o=!0;Z.__lcl.priorityOverride=0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,f=Number(c.vtp_waitForTagsTimeout);
if(!f||0>=f)f=2E3;var g=c.vtp_uniqueTriggerId||"0";if(d){var h=function(m){return Math.max(f,m)};uq("lcl","mwt",h,0);e||uq("lcl","nv.mwt",h,0)}var l=function(m){m.push(g);return m};uq("lcl","ids",l,[]);e||uq("lcl","nv.ids",l,[]);Au("lcl")||(a(),Bu("lcl"));L(c.vtp_gtmOnSuccess)})}();


var Zx={};Zx.macro=function(a){if(bu.pe.hasOwnProperty(a))return bu.pe[a]},Zx.onHtmlSuccess=bu.ng(!0),Zx.onHtmlFailure=bu.ng(!1);Zx.dataLayer=Fi;Zx.callback=function(a){wi.hasOwnProperty(a)&&Ja(wi[a])&&wi[a]();delete wi[a]};Zx.bootstrap=0;Zx._spx=!1;function $x(){li[df.N]=Zx;fb(xi,Z.h);Le=Le||bu;Me=$e}
function ay(){var a=!1;a&&Ml("INIT");Eg().s();li=F.google_tag_manager=F.google_tag_manager||{};ko();
Zj.enable_gbraid_cookie_write=!0;if(li[df.N]){var b=li.zones;b&&b.unregisterChild(df.N);}else{for(var c=data.resource||{},d=c.macros||[],e=0;e<d.length;e++)Ee.push(d[e]);for(var f=c.tags||[],g=0;g<f.length;g++)He.push(f[g]);for(var h=c.predicates||[],l=0;l<h.length;l++)Ge.push(h[l]);for(var m=c.rules||[],p=0;p<m.length;p++){for(var q=m[p],r={},t=
0;t<q.length;t++)r[q[t][0]]=Array.prototype.slice.call(q[t],1);Fe.push(r)}Je=Z;Ke=ks;var u=data.permissions||{},v=data.sandboxed_scripts,w=data.security_groups;ht();hf=new gf(u);if(void 0!==v)for(var y=["sandboxedScripts"],x=0;x<v.length;x++){var z=v[x].replace(/^_*/,"");xi[z]=y}kt(w);$x();au();zl=!1;Al=0;if("interactive"==J.readyState&&!J.createEventObject||"complete"==J.readyState)Cl();else{gc(J,"DOMContentLoaded",Cl);gc(J,"readystatechange",Cl);if(J.createEventObject&&J.documentElement.doScroll){var B=
!0;try{B=!F.frameElement}catch(R){}B&&Dl()}gc(F,"load",Cl)}Xr=!1;"complete"===J.readyState?Zr():gc(F,"load",Zr);Om&&F.setInterval(Cm,864E5);
ui=(new Date).getTime();if(a){var I=Nl("INIT");
}}}
(function(a){if(!F["__TAGGY_INSTALLED"]){var b=!1;if(J.referrer){var c=Eh(J.referrer);b="cct.google"===Bh(c,"host")}if(!b){var d=Wi("googTaggyReferrer");b=d.length&&d[0].length}b&&(F["__TAGGY_INSTALLED"]=!0,cc("https://cct.google/taggy/agent.js"))}var f=function(){var m=F["google.tagmanager.debugui2.queue"];m||(m=[],F["google.tagmanager.debugui2.queue"]=m,cc("https://www.googletagmanager.com/debug/bootstrap"));var p={messageType:"CONTAINER_STARTING",data:{scriptSource:Yb,containerProduct:"GTM",debug:!1}};p.data.resume=function(){a()};df.Xg&&(p.data.initialPublish=!0);m.push(p)},g="x"===Ch(F.location,"query",!1,void 0,"gtm_debug");if(!g&&J.referrer){var h=Eh(J.referrer);g="tagassistant.google.com"===Bh(h,"host")}if(!g){var l=Wi("__TAG_ASSISTANT");g=l.length&&l[0].length}F.__TAG_ASSISTANT_API&&(g=!0);g&&Yb?f():a()})(ay);

})()
