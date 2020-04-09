define(function(){"use strict";var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(t,e)};var t,e,i=function(){return(i=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};function o(o,s,a,u){return new(a=a||Promise)(function(t,e){function r(t){try{i(u.next(t))}catch(t){e(t)}}function n(t){try{i(u.throw(t))}catch(t){e(t)}}function i(e){e.done?t(e.value):new a(function(t){t(e.value)}).then(r,n)}i((u=u.apply(o,s||[])).next())})}function s(r,n){var i,o,s,t,a={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return t={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(t[Symbol.iterator]=function(){return this}),t;function e(e){return function(t){return function(e){if(i)throw new TypeError("Generator is already executing.");for(;a;)try{if(i=1,o&&(s=2&e[0]?o.return:e[0]?o.throw||((s=o.return)&&s.call(o),0):o.next)&&!(s=s.call(o,e[1])).done)return s;switch(o=0,s&&(e=[2&e[0],s.value]),e[0]){case 0:case 1:s=e;break;case 4:return a.label++,{value:e[1],done:!1};case 5:a.label++,o=e[1],e=[0];continue;case 7:e=a.ops.pop(),a.trys.pop();continue;default:if(!(s=0<(s=a.trys).length&&s[s.length-1])&&(6===e[0]||2===e[0])){a=0;continue}if(3===e[0]&&(!s||e[1]>s[0]&&e[1]<s[3])){a.label=e[1];break}if(6===e[0]&&a.label<s[1]){a.label=s[1],s=e;break}if(s&&a.label<s[2]){a.label=s[2],a.ops.push(e);break}s[2]&&a.ops.pop(),a.trys.pop();continue}e=n.call(r,a)}catch(t){e=[6,t],o=0}finally{i=s=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,t])}}}function u(t){var e="function"==typeof Symbol&&t[Symbol.iterator],r=0;return e?e.call(t):{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}}}function c(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,i,o=r.call(t),s=[];try{for(;(void 0===e||0<e--)&&!(n=o.next()).done;)s.push(n.value)}catch(t){i={error:t}}finally{try{n&&!n.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}return s}(e=t=t||{}).Buildings="buildings",e.Cities="cities",e.Districts="districts",e.PostalCodes="postalcodes",e.PostalCodesCities="postalcodes_cities",e.PostalCodesCitiesDistricts="postalcodes_cities_districts",e.PostalCodesCitiesDistrictsStreets="postalcodes_cities_districts_streets",e.PostalCodesCitiesStreets="postalcodes_cities_streets";var a=t,n=(l.prototype.request=function(n){var i;return o(this,void 0,void 0,function(){var e,r;return s(this,function(t){switch(t.label){case 0:return e=new Request(n.url,{method:n.method,headers:n.headers}),[4,fetch(e)];case 1:return 200<=(r=t.sent()).status&&r.status<300?null!==(i=r.headers.get("Content-Type"))&&void 0!==i&&i.startsWith("application/json")?[2,r.json()]:[2,r.text()]:400===r.status?[2,r.json().then(function(t){throw new Error((r.statusText+": "+t.message).trim())})]:[2,r.text().then(function(t){throw new Error((r.statusText+" "+t).trim())})]}})})},l);function l(){}var d=(h.getAdapter=function(){return new n},h.baseUrl="https://autocomplete2.postdirekt.de/autocomplete2/",h.headers={Accept:"application/json",Authorization:""},h);function h(){}var p=function(t,e,r){void 0===e&&(e="GET"),void 0===r&&(r={}),this.url="",this.method="GET",this.headers={},this.url=t,this.method=e,this.headers=r},f=(v.prototype.create=function(t){var e=t.subject,r=t.country,n=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]])}return r}(t,["subject","country"]);return new p(this.buildUrl(r,e,n),"GET",i(i({},d.headers),{Authorization:"Bearer "+this.accessToken}))},v.prototype.buildUrl=function(t,e,r){var n=this.baseUrl+"/"+t;return n=n+"/"+e,n+=v.buildQueryString(r)},v.buildQueryString=function(t){var e=Object.entries(t).map(function(t){var e=c(t,2),r=e[0],n=e[1];return encodeURIComponent(r)+"="+encodeURIComponent(n)}).join("&");return e=e&&"?"+e},v);function v(t,e){this.baseUrl=t,this.accessToken=e}var y=(b.prototype.search=function(e){return o(this,void 0,void 0,function(){return s(this,function(t){switch(t.label){case 0:return[4,this.adapter.request(e)];case 1:return[2,t.sent()]}})})},b);function b(t,e,r){this.adapter=r,this.requestBuilder=new f(e,t)}var m,g,w,S=(r(g=E,w=m=f),g.prototype=null===w?Object.create(w):(C.prototype=w.prototype,new C),E.prototype.create=function(t){return m.prototype.create.call(this,t)},E);function C(){this.constructor=g}function E(){return null!==m&&m.apply(this,arguments)||this}var A=(j.prototype.select=function(e){return o(this,void 0,void 0,function(){return s(this,function(t){return[2,this.adapter.request(e)]})})},j);function j(t,e,r){this.adapter=r,this.requestBuilder=new S(e,t)}var T=(x.createSearchService=function(t){return new y(t,d.baseUrl+"search",d.getAdapter())},x.createSelectService=function(t){return new A(t,d.baseUrl+"select",d.getAdapter())},x.prototype.createSearchService=function(t){return x.createSearchService(t)},x.prototype.createSelectService=function(t){return x.createSelectService(t)},x);function x(){}var O=(P.prototype.getByUuid=function(e){return this.suggestions.find(function(t){return t.uuid===e})||null},P);function P(){this.suggestions=[]}var k,U,_=(Object.defineProperty(D.prototype,"address",{get:function(){var r={city:"",postalCode:"",street:""};return this.inputMap.forEach(function(t,e){r[e]=t.value}),r},set:function(t){var e,r;try{for(var n=u(this.inputMap),i=n.next();!i.done;i=n.next()){var o=c(i.value,2),s=o[0],a=o[1];a.value=t[s],a.dispatchEvent(new Event("change"))}}catch(t){e={error:t}}finally{try{i&&!i.done&&(r=n.return)&&r.call(n)}finally{if(e)throw e.error}}},enumerable:!0,configurable:!0}),D);function D(t){this.inputMap=t}(U=k=k||{}).ArrowUp="ArrowUp",U.ArrowDown="ArrowDown",U.Enter="Enter",U.Tab="Tab";var F=k,q=(I.prototype.render=function(r,t){var n=this;if(!r.parentElement)throw Error("Input elements without a parent cannot be assigned a suggestion list.");this.remove(),(this.currentField=r).setAttribute("autocomplete","off");var i=document.createElement("ul");i.setAttribute("id","datalist-"+r.id),i.setAttribute("class","datalist"),i.setAttribute("style","width:"+r.offsetWidth+"px; top:"+r.offsetHeight+"px;"),t.map(function(t){return{id:t.uuid,title:[t.street,t.postalCode,t.city].filter(Boolean).join(", ")}}).forEach(function(t){var e=document.createElement("li"),r=document.createTextNode(t.title);e.setAttribute("id",t.id),e.setAttribute("data-value",t.title),e.appendChild(r),i.appendChild(e)}),r.parentElement.appendChild(i),r.parentElement.classList.add("autocomplete-container"),r.setAttribute("list","datalist-"+r.id),i.addEventListener("mousedown",function(t){var e=t.target;n.itemSelect(e),setTimeout(function(){return r.focus()},0)}),r.addEventListener("focusout",this.remove.bind(this)),this.removableEventHandler=this.navigationKeyListener.bind(this),r.addEventListener("keydown",this.removableEventHandler)},I.prototype.remove=function(){if(this.removableEventHandler&&this.currentField){var t=document.querySelector('[id="datalist-'+this.currentField.id+'"]');t&&t.remove(),this.currentField.removeEventListener("keydown",this.removableEventHandler),this.currentField=void 0}},I.prototype.navigationKeyListener=function(t){t.key in F&&(t.key!==F.Tab&&t.preventDefault(),this.triggerKeydown(t.key))},I.prototype.triggerKeydown=function(t){if(this.currentField){var e=document.querySelector('[id="datalist-'+this.currentField.id+'"]');if(e){var r=Array.from(e.children),n=e.querySelector("[data-active]"),i=r.find(function(){return!0});if(n||t!==F.Enter)if(t!==F.ArrowDown||n){if(n){var o=null,s=null;r.forEach(function(t,e,r){t===n&&(o=r[e-1],s=r[e+1])}),n.removeAttribute("data-active"),t===F.ArrowUp&&(o?((o=o).setAttribute("data-active","true"),o.offsetTop<e.scrollTop&&(e.scrollTop-=o.offsetHeight)):r[r.length-1].setAttribute("data-active","true")),t===F.ArrowDown&&(s?(s=s).setAttribute("data-active","true"):r[0].setAttribute("data-active","true")),t===F.Tab&&this.currentField.focus(),[F.Enter,F.Tab].includes(t)&&this.itemSelect(n)}}else i.setAttribute("data-active","true")}}},I.prototype.itemSelect=function(t){this.currentField&&(this.currentField.dataset.suggestionUuid=t.id,this.currentField.dispatchEvent(new Event("autocomplete:datalist-select")),this.remove())},I);function I(){}var L,B,K=(M.prototype.start=function(){var e,t;try{for(var r=u(this.inputMap.values()),n=r.next();!n.done;n=r.next()){var i=n.value;i.addEventListener("keyup",this.handleFieldKeystroke.bind(this)),i.addEventListener("autocomplete:datalist-select",this.handleDatalistSelect.bind(this))}}catch(t){e={error:t}}finally{try{n&&!n.done&&(t=r.return)&&t.call(r)}finally{if(e)throw e.error}}this.countrySelect.addEventListener("change",this.handleCountryChange.bind(this))},M.prototype.handleFieldKeystroke=function(t){var e=this;this.countrySelect.value===this.deCountryId&&(this.navigationKeyCodes.includes(t.code)||this.triggerDelayedCallback(function(){return e.searchAction(t.target)},this.typingDelay))},M.prototype.handleDatalistSelect=function(t){var e=t.target.dataset.suggestionUuid,r=this.addressSuggestions.getByUuid(e);r&&(this.domAddress.address=r,this.selectAction(r.uuid))},M.prototype.handleCountryChange=function(){this.countrySelect.value!==this.deCountryId&&this.listRenderer.remove()},M.prototype.triggerDelayedCallback=function(t,e){this.timeoutId,clearTimeout(this.timeoutId),this.timeoutId=window.setTimeout(t,e)},M.prototype.searchAction=function(e){var r=this,t=this.domAddress.address,n=t.street?a.PostalCodesCitiesStreets:a.PostalCodesCities;""!==Object.values(t).join("").trim()&&this.searchService.search(this.searchService.requestBuilder.create({country:"de",subject:n,combined:Object.values(t).join(" ")})).then(function(t){r.addressSuggestions.suggestions=t.addresses.filter(function(t){return!!t.uuid}).map(function(t){return{street:t.street||"",postalCode:t.postalCode||"",city:t.city||"",uuid:t.uuid,district:t.district}}),e===document.activeElement&&r.listRenderer.render(e,r.addressSuggestions.suggestions)})},M.prototype.selectAction=function(t){this.selectService.select(this.selectService.requestBuilder.create({country:"de",subject:a.PostalCodesCitiesStreets,uuid:t}))},M);function M(t,e,r,n){this.navigationKeyCodes=["ArrowUp","ArrowDown","Escape","Enter","Space","Tab"],this.typingDelay=500,this.inputMap=t,this.countrySelect=e,this.deCountryId=r,this.searchService=T.createSearchService(n),this.selectService=T.createSelectService(n),this.addressSuggestions=new O,this.domAddress=new _(this.inputMap),this.listRenderer=new q}(B=L=L||{}).City="city",B.Street="street",B.PostalCode="postalCode";var H=L;return{init:function(t,e,r,n,i,o){var s=new K(new Map([[H.Street,t],[H.PostalCode,r],[H.City,e]]),n,i,o);return s.start(),s}}});
//# sourceMappingURL=postdirekt-autocomplete-lib.amd.js.map
