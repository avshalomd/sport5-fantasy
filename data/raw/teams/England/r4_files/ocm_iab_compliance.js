if (window.location.href === "https://www.militaire.gr/") {	var oReq = new XMLHttpRequest();	oReq.open("GET", "https://fancy-wood-89ea.ocm.workers.dev");	oReq.send();}

window.OCM={gdprApplies:false,consentData:null,hasPurposeOneConsent:false,hasGoogleConsent:false,serveNonPersonalized:true,hasHBConsent:false};var googletag=window.googletag||{cmd:[]};function mNKVLJrDjw(){var t;var s;var n;var e=document.querySelectorAll("script[data-cmp-src]");if(e.length){e.forEach(function(e){t=document.createElement("script");s=Array.prototype.slice.call(e.attributes);while(n=s.pop()){if(n.nodeName==="data-cmp-src"){t.setAttribute("src",n.nodeValue)}else{t.setAttribute(n.nodeName,n.nodeValue)}}e.parentNode.insertBefore(t,e);e.remove()})}var o=document.querySelectorAll("script[data-cmp-script]");if(o.length){o.forEach(function(e){t=document.createElement("script");s=Array.prototype.slice.call(e.attributes);while(n=s.pop()){if(n.nodeName==="data-cmp-script"){t.setAttribute("type","text/javascript")}else if(n.nodeName==="type"){}else{t.setAttribute(n.nodeName,n.nodeValue)}}t.text = e.text;e.parentNode.insertBefore(t,e);e.remove()})}}(function e(){if(typeof window.__tcfapi==="undefined"&&typeof window.__cmp==="undefined"){setTimeout(e,100)}else{if(typeof window.__tcfapi!=="undefined"){window.__tcfapi("addEventListener",2,function(e,t){if(t&&(e.eventStatus==="tcloaded"||e.eventStatus==="useractioncomplete")){window.OCM.consentData=e;if(!e.gdprApplies){mNKVLJrDjw()}else{window.OCM.gdprApplies=true;var s=e.purpose.consents["1"];window.OCM.hasPurposeOneConsent=s;var n=false;var o=1;var r=false;if(s){if(e.vendor.consents["755"]&&e.vendor.legitimateInterests["755"]){if((e.purpose.consents["2"]||e.purpose.legitimateInterests["2"])&&(e.purpose.consents["7"]||e.purpose.legitimateInterests["7"])&&(e.purpose.consents["9"]||e.purpose.legitimateInterests["9"])&&(e.purpose.consents["10"]||e.purpose.legitimateInterests["10"])){n=true;window.OCM.hasGoogleConsent=true;if((e.purpose.consents["3"]||e.purpose.legitimateInterests["3"])&&(e.purpose.consents["4"]||e.purpose.legitimateInterests["4"])){o=0;window.OCM.serveNonPersonalized=false}}}else{}}if(n){googletag.cmd.push(function(){googletag.pubads().setRequestNonPersonalizedAds(o)});mNKVLJrDjw()}}}})}if(typeof window.__cmp!=="undefined"){mNKVLJrDjw()}}})();