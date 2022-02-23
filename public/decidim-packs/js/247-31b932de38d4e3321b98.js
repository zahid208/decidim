(self.webpackChunkdecidim_app_live=self.webpackChunkdecidim_app_live||[]).push([[247],{16247:function(e,t){var n,i,r,o;function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}o=function(){return function e(t,n,i){function r(u,a){if(!n[u]){if(!t[u]){if(o)return o(u,!0);var l=new Error("Cannot find module '"+u+"'");throw l.code="MODULE_NOT_FOUND",l}var s=n[u]={exports:{}};t[u][0].call(s.exports,(function(e){return r(t[u][1][e]||e)}),s,s.exports,e,t,n,i)}return n[u].exports}for(var o=void 0,u=0;u<i.length;u++)r(i[u]);return r}({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("./utils");var i=a(e("./TributeEvents")),r=a(e("./TributeMenuEvents")),o=a(e("./TributeRange")),u=a(e("./TributeSearch"));function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],i=!0,r=!1,o=void 0;try{for(var u,a=e[Symbol.iterator]();!(i=(u=a.next()).done)&&(n.push(u.value),!t||n.length!==t);i=!0);}catch(l){r=!0,o=l}finally{try{i||null==a.return||a.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var c=function(){function e(t){var n,a=this,l=t.values,s=void 0===l?null:l,c=t.iframe,d=void 0===c?null:c,f=t.selectClass,h=void 0===f?"highlight":f,p=t.trigger,v=void 0===p?"@":p,m=t.autocompleteMode,g=void 0!==m&&m,b=t.selectTemplate,y=void 0===b?null:b,w=t.menuItemTemplate,T=void 0===w?null:w,C=t.lookup,E=void 0===C?"key":C,k=t.fillAttr,S=void 0===k?"value":k,x=t.collection,M=void 0===x?null:x,A=t.menuContainer,L=void 0===A?null:A,I=t.noMatchTemplate,N=void 0===I?null:I,O=t.requireLeadingSpace,P=void 0===O||O,D=t.allowSpaces,R=void 0!==D&&D,_=t.replaceTextSuffix,W=void 0===_?null:_,H=t.positionMenu,j=void 0===H||H,B=t.spaceSelectsMatch,F=void 0!==B&&B,Y=t.searchOpts,z=void 0===Y?{}:Y,K=t.menuItemLimit,U=void 0===K?null:K;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.autocompleteMode=g,this.menuSelected=0,this.current={},this.inputEvent=!1,this.isActive=!1,this.menuContainer=L,this.allowSpaces=R,this.replaceTextSuffix=W,this.positionMenu=j,this.hasTrailingSpace=!1,this.spaceSelectsMatch=F,this.autocompleteMode&&(v="",R=!1),s)this.collection=[{trigger:v,iframe:d,selectClass:h,selectTemplate:(y||e.defaultSelectTemplate).bind(this),menuItemTemplate:(T||e.defaultMenuItemTemplate).bind(this),noMatchTemplate:(n=N,"function"===typeof n?n.bind(a):N||function(){return""}.bind(a)),lookup:E,fillAttr:S,values:s,requireLeadingSpace:P,searchOpts:z,menuItemLimit:U}];else{if(!M)throw new Error("[Tribute] No collection specified.");this.autocompleteMode&&console.warn("Tribute in autocomplete mode does not work for collections"),this.collection=M.map((function(t){return{trigger:t.trigger||v,iframe:t.iframe||d,selectClass:t.selectClass||h,selectTemplate:(t.selectTemplate||e.defaultSelectTemplate).bind(a),menuItemTemplate:(t.menuItemTemplate||e.defaultMenuItemTemplate).bind(a),noMatchTemplate:function(e){return"function"===typeof e?e.bind(a):null}(N),lookup:t.lookup||E,fillAttr:t.fillAttr||S,values:t.values,requireLeadingSpace:t.requireLeadingSpace,searchOpts:t.searchOpts||z,menuItemLimit:t.menuItemLimit||U}}))}new o.default(this),new i.default(this),new r.default(this),new u.default(this)}var t,n,a;return t=e,a=[{key:"defaultSelectTemplate",value:function(e){return"undefined"===typeof e?null:this.range.isContentEditable(this.current.element)?'<span class="tribute-mention">'+(this.current.collection.trigger+e.original[this.current.collection.fillAttr])+"</span>":this.current.collection.trigger+e.original[this.current.collection.fillAttr]}},{key:"defaultMenuItemTemplate",value:function(e){return e.string}},{key:"inputTypes",value:function(){return["TEXTAREA","INPUT"]}}],(n=[{key:"triggers",value:function(){return this.collection.map((function(e){return e.trigger}))}},{key:"attach",value:function(e){if(!e)throw new Error("[Tribute] Must pass in a DOM node or NodeList.");if("undefined"!==typeof jQuery&&e instanceof jQuery&&(e=e.get()),e.constructor===NodeList||e.constructor===HTMLCollection||e.constructor===Array)for(var t=e.length,n=0;n<t;++n)this._attach(e[n]);else this._attach(e)}},{key:"_attach",value:function(e){e.hasAttribute("data-tribute")&&console.warn("Tribute was already bound to "+e.nodeName),this.ensureEditable(e),this.events.bind(e),e.setAttribute("data-tribute",!0)}},{key:"ensureEditable",value:function(t){if(-1===e.inputTypes().indexOf(t.nodeName)){if(!t.contentEditable)throw new Error("[Tribute] Cannot bind to "+t.nodeName);t.contentEditable=!0}}},{key:"createMenu",value:function(){var e=this.range.getDocument().createElement("div"),t=this.range.getDocument().createElement("ul");return e.className="tribute-container",e.setAttribute("aria-expanded","true"),t.setAttribute("id","results"),e.appendChild(t),this.menuContainer?this.menuContainer.appendChild(e):this.range.getDocument().body.appendChild(e)}},{key:"showMenuFor",value:function(e,t){var n=this;if(!this.isActive||this.current.element!==e||this.current.mentionText!==this.currentMentionTextSnapshot){this.currentMentionTextSnapshot=this.current.mentionText,this.menu||(this.menu=this.createMenu(),e.tributeMenu=this.menu,this.menuEvents.bind(this.menu)),this.isActive=!0,this.menuSelected=0,this.current.mentionText||(this.current.mentionText="");var i=function(e){if(n.isActive){var i=n.search.filter(n.current.mentionText,e,{pre:n.current.collection.searchOpts.pre||"<span>",post:n.current.collection.searchOpts.post||"</span>",skip:n.current.collection.searchOpts.skip,extract:function(e){if("string"===typeof n.current.collection.lookup)return e[n.current.collection.lookup];if("function"===typeof n.current.collection.lookup)return n.current.collection.lookup(e,n.current.mentionText);throw new Error("Invalid lookup attribute, lookup must be string or function.")}});n.current.collection.menuItemLimit&&(i=i.slice(0,n.current.collection.menuItemLimit)),n.current.filteredItems=i;var r=n.menu.querySelector("ul");if(n.range.positionMenuAtCaret(t),!i.length){var o=new CustomEvent("tribute-no-match",{detail:n.menu});return n.current.element.dispatchEvent(o),void("function"===typeof n.current.collection.noMatchTemplate&&!n.current.collection.noMatchTemplate()||!n.current.collection.noMatchTemplate?n.hideMenu():"function"===typeof n.current.collection.noMatchTemplate?r.innerHTML=n.current.collection.noMatchTemplate():r.innerHTML=n.current.collection.noMatchTemplate)}r.innerHTML="";var u=n.range.getDocument().createDocumentFragment();i.forEach((function(e,t){var i=n.range.getDocument().createElement("li");i.setAttribute("role","option"),i.setAttribute("data-index",t),i.addEventListener("mousemove",(function(e){var t=l(n._findLiTarget(e.target),2),i=(t[0],t[1]);0!==e.movementY&&n.events.setActiveLi(i)})),n.menuSelected===t&&(i.className=n.current.collection.selectClass),i.innerHTML=n.current.collection.menuItemTemplate(e),u.appendChild(i)})),r.appendChild(u)}};"function"===typeof this.current.collection.values?this.current.collection.values(this.current.mentionText,i):i(this.current.collection.values)}}},{key:"_findLiTarget",value:function(e){if(!e)return[];var t=e.getAttribute("data-index");return t?[e,t]:this._findLiTarget(e.parentNode)}},{key:"showMenuForCollection",value:function(e,t){e!==document.activeElement&&this.placeCaretAtEnd(e),this.current.collection=this.collection[t||0],this.current.externalTrigger=!0,this.current.element=e,e.isContentEditable?this.insertTextAtCursor(this.current.collection.trigger):this.insertAtCaret(e,this.current.collection.trigger),this.showMenuFor(e)}},{key:"placeCaretAtEnd",value:function(e){if(e.focus(),"undefined"!=typeof window.getSelection&&"undefined"!=typeof document.createRange){var t=document.createRange();t.selectNodeContents(e),t.collapse(!1);var n=window.getSelection();n.removeAllRanges(),n.addRange(t)}else if("undefined"!=typeof document.body.createTextRange){var i=document.body.createTextRange();i.moveToElementText(e),i.collapse(!1),i.select()}}},{key:"insertTextAtCursor",value:function(e){var t,n;(n=(t=window.getSelection()).getRangeAt(0)).deleteContents();var i=document.createTextNode(e);n.insertNode(i),n.selectNodeContents(i),n.collapse(!1),t.removeAllRanges(),t.addRange(n)}},{key:"insertAtCaret",value:function(e,t){var n=e.scrollTop,i=e.selectionStart,r=e.value.substring(0,i),o=e.value.substring(e.selectionEnd,e.value.length);e.value=r+t+o,i+=t.length,e.selectionStart=i,e.selectionEnd=i,e.focus(),e.scrollTop=n}},{key:"hideMenu",value:function(){this.menu&&(this.menu.style.cssText="display: none;",this.isActive=!1,this.menuSelected=0,this.current={})}},{key:"selectItemAtIndex",value:function(e,t){if("number"===typeof(e=parseInt(e))&&!isNaN(e)){var n=this.current.filteredItems[e],i=this.current.collection.selectTemplate(n);null!==i&&this.replaceText(i,t,n)}}},{key:"replaceText",value:function(e,t,n){this.range.replaceTriggerText(e,!0,!0,t,n)}},{key:"_append",value:function(e,t,n){if("function"===typeof e.values)throw new Error("Unable to append to values, as it is a function.");e.values=n?t:e.values.concat(t)}},{key:"append",value:function(e,t,n){var i=parseInt(e);if("number"!==typeof i)throw new Error("please provide an index for the collection to update.");var r=this.collection[i];this._append(r,t,n)}},{key:"appendCurrent",value:function(e,t){if(!this.isActive)throw new Error("No active state. Please use append instead and pass an index.");this._append(this.current.collection,e,t)}},{key:"detach",value:function(e){if(!e)throw new Error("[Tribute] Must pass in a DOM node or NodeList.");if("undefined"!==typeof jQuery&&e instanceof jQuery&&(e=e.get()),e.constructor===NodeList||e.constructor===HTMLCollection||e.constructor===Array)for(var t=e.length,n=0;n<t;++n)this._detach(e[n]);else this._detach(e)}},{key:"_detach",value:function(e){var t=this;this.events.unbind(e),e.tributeMenu&&this.menuEvents.unbind(e.tributeMenu),setTimeout((function(){e.removeAttribute("data-tribute"),t.isActive=!1,e.tributeMenu&&e.tributeMenu.remove()}))}}])&&s(t.prototype,n),a&&s(t,a),e}();n.default=c,t.exports=n.default},{"./TributeEvents":2,"./TributeMenuEvents":3,"./TributeRange":4,"./TributeSearch":5,"./utils":7}],2:[function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.tribute=t,this.tribute.events=this}var t,n,r;return t=e,r=[{key:"keys",value:function(){return[{key:9,value:"TAB"},{key:8,value:"DELETE"},{key:13,value:"ENTER"},{key:27,value:"ESCAPE"},{key:32,value:"SPACE"},{key:38,value:"UP"},{key:40,value:"DOWN"}]}}],(n=[{key:"bind",value:function(e){e.boundKeydown=this.keydown.bind(e,this),e.boundKeyup=this.keyup.bind(e,this),e.boundInput=this.input.bind(e,this),e.addEventListener("keydown",e.boundKeydown,!1),e.addEventListener("keyup",e.boundKeyup,!1),e.addEventListener("input",e.boundInput,!1)}},{key:"unbind",value:function(e){e.removeEventListener("keydown",e.boundKeydown,!1),e.removeEventListener("keyup",e.boundKeyup,!1),e.removeEventListener("input",e.boundInput,!1),delete e.boundKeydown,delete e.boundKeyup,delete e.boundInput}},{key:"keydown",value:function(t,n){t.shouldDeactivate(n)&&(t.tribute.isActive=!1,t.tribute.hideMenu());var i=this;t.commandEvent=!1,e.keys().forEach((function(e){e.key===n.keyCode&&(t.commandEvent=!0,t.callbacks()[e.value.toLowerCase()](n,i))}))}},{key:"input",value:function(e,t){e.inputEvent=!0,e.keyup.call(this,e,t)}},{key:"click",value:function(e,t){var n=e.tribute;if(n.menu&&n.menu.contains(t.target)){var i=t.target;for(t.preventDefault(),t.stopPropagation();"li"!==i.nodeName.toLowerCase();)if(!(i=i.parentNode)||i===n.menu)throw new Error("cannot find the <li> container for the click");void 0==i.getElementsByClassName("disabled-tribute-element")[0]&&(n.selectItemAtIndex(i.getAttribute("data-index"),t),n.hideMenu())}else n.current.element&&!n.current.externalTrigger&&(n.current.externalTrigger=!1,setTimeout((function(){return n.hideMenu()})))}},{key:"keyup",value:function(e,t){if(e.inputEvent&&(e.inputEvent=!1),e.updateSelection(this),27!==t.keyCode){if(!e.tribute.allowSpaces&&e.tribute.hasTrailingSpace)return e.tribute.hasTrailingSpace=!1,e.commandEvent=!0,void e.callbacks().space(t,this);if(!e.tribute.isActive)if(e.tribute.autocompleteMode)e.callbacks().triggerChar(t,this,"");else{var n=e.getKeyCode(e,this,t);if(isNaN(n)||!n)return;var i=e.tribute.triggers().find((function(e){return e.charCodeAt(0)===n}));"undefined"!==typeof i&&e.callbacks().triggerChar(t,this,i)}((e.tribute.current.trigger||e.tribute.autocompleteMode)&&!1===e.commandEvent||e.tribute.isActive&&8===t.keyCode)&&e.tribute.showMenuFor(this,!0)}}},{key:"shouldDeactivate",value:function(t){if(!this.tribute.isActive)return!1;if(0===this.tribute.current.mentionText.length){var n=!1;return e.keys().forEach((function(e){t.keyCode===e.key&&(n=!0)})),!n}return!1}},{key:"getKeyCode",value:function(e,t,n){var i=e.tribute,r=i.range.getTriggerInfo(!1,i.hasTrailingSpace,!0,i.allowSpaces,i.autocompleteMode);return!!r&&r.mentionTriggerChar.charCodeAt(0)}},{key:"updateSelection",value:function(e){this.tribute.current.element=e;var t=this.tribute.range.getTriggerInfo(!1,this.tribute.hasTrailingSpace,!0,this.tribute.allowSpaces,this.tribute.autocompleteMode);t&&(this.tribute.current.selectedPath=t.mentionSelectedPath,this.tribute.current.mentionText=t.mentionText,this.tribute.current.selectedOffset=t.mentionSelectedOffset)}},{key:"callbacks",value:function(){var e=this;return{triggerChar:function(t,n,i){var r=e.tribute;r.current.trigger=i;var o=r.collection.find((function(e){return e.trigger===i}));r.current.collection=o,r.inputEvent&&r.showMenuFor(n,!0)},enter:function(t,n){e.tribute.isActive&&e.tribute.current.filteredItems&&(t.preventDefault(),t.stopPropagation(),setTimeout((function(){e.tribute.selectItemAtIndex(e.tribute.menuSelected,t),e.tribute.hideMenu()}),0))},escape:function(t,n){e.tribute.isActive&&(t.preventDefault(),t.stopPropagation(),e.tribute.isActive=!1,e.tribute.hideMenu())},tab:function(t,n){e.callbacks().enter(t,n)},space:function(t,n){e.tribute.isActive&&(e.tribute.spaceSelectsMatch?e.callbacks().enter(t,n):e.tribute.allowSpaces||(t.stopPropagation(),setTimeout((function(){e.tribute.hideMenu(),e.tribute.isActive=!1}),0)))},up:function(t,n){if(e.tribute.isActive&&e.tribute.current.filteredItems){t.preventDefault(),t.stopPropagation();var i=e.tribute.current.filteredItems.length,r=e.tribute.menuSelected;i>r&&r>0?(e.tribute.menuSelected--,e.setActiveLi()):0===r&&(e.tribute.menuSelected=i-1,e.setActiveLi(),e.tribute.menu.scrollTop=e.tribute.menu.scrollHeight)}},down:function(t,n){if(e.tribute.isActive&&e.tribute.current.filteredItems){t.preventDefault(),t.stopPropagation();var i=e.tribute.current.filteredItems.length-1,r=e.tribute.menuSelected;i>r?(e.tribute.menuSelected++,e.setActiveLi()):i===r&&(e.tribute.menuSelected=0,e.setActiveLi(),e.tribute.menu.scrollTop=0)}},delete:function(t,n){e.tribute.isActive&&e.tribute.current.mentionText.length<1?e.tribute.hideMenu():e.tribute.isActive&&e.tribute.showMenuFor(n)}}}},{key:"setActiveLi",value:function(e){var t=this.tribute.menu.querySelectorAll("li"),n=t.length>>>0;e&&(this.tribute.menuSelected=parseInt(e));for(var i=0;i<n;i++){var r=t[i];if(i===this.tribute.menuSelected){r.classList.add(this.tribute.current.collection.selectClass);var o=r.getBoundingClientRect(),u=this.tribute.menu.getBoundingClientRect();if(o.bottom>u.bottom){var a=o.bottom-u.bottom;this.tribute.menu.scrollTop+=a}else if(o.top<u.top){var l=u.top-o.top;this.tribute.menu.scrollTop-=l}}else r.classList.remove(this.tribute.current.collection.selectClass)}}},{key:"getFullHeight",value:function(e,t){var n=e.getBoundingClientRect().height;if(t){var i=e.currentStyle||window.getComputedStyle(e);return n+parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return n}}])&&i(t.prototype,n),r&&i(t,r),e}();n.default=r,t.exports=n.default},{}],3:[function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.tribute=t,this.tribute.menuEvents=this,this.menu=this.tribute.menu}var t,n,r;return t=e,n=[{key:"bind",value:function(e){var t=this;this.menuClickEvent=this.tribute.events.click.bind(null,this),this.menuContainerScrollEvent=this.debounce((function(){t.tribute.isActive&&t.tribute.showMenuFor(t.tribute.current.element,!1)}),300,!1),this.windowResizeEvent=this.debounce((function(){t.tribute.isActive&&t.tribute.range.positionMenuAtCaret(!0)}),300,!1),this.tribute.range.getDocument().addEventListener("MSPointerDown",this.menuClickEvent,!1),this.tribute.range.getDocument().addEventListener("mousedown",this.menuClickEvent,!1),window.addEventListener("resize",this.windowResizeEvent),this.menuContainer?this.menuContainer.addEventListener("scroll",this.menuContainerScrollEvent,!1):window.addEventListener("scroll",this.menuContainerScrollEvent)}},{key:"unbind",value:function(e){this.tribute.range.getDocument().removeEventListener("mousedown",this.menuClickEvent,!1),this.tribute.range.getDocument().removeEventListener("MSPointerDown",this.menuClickEvent,!1),window.removeEventListener("resize",this.windowResizeEvent),this.menuContainer?this.menuContainer.removeEventListener("scroll",this.menuContainerScrollEvent,!1):window.removeEventListener("scroll",this.menuContainerScrollEvent)}},{key:"debounce",value:function(e,t,n){var i,r=this,o=arguments;return function(){var u=r,a=o,l=n&&!i;clearTimeout(i),i=setTimeout((function(){i=null,n||e.apply(u,a)}),t),l&&e.apply(u,a)}}}],n&&i(t.prototype,n),r&&i(t,r),e}(),o=r;n.default=o,t.exports=n.default},{}],4:[function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.tribute=t,this.tribute.range=this}var t,n,r;return t=e,(n=[{key:"getDocument",value:function(){var e;return this.tribute.current.collection&&(e=this.tribute.current.collection.iframe),e?e.contentWindow.document:document}},{key:"positionMenuAtCaret",value:function(e){var t,n=this,i=this.tribute.current,r=this.getTriggerInfo(!1,this.tribute.hasTrailingSpace,!0,this.tribute.allowSpaces,this.tribute.autocompleteMode);if("undefined"!==typeof r){if(!this.tribute.positionMenu)return void(this.tribute.menu.style.cssText="display: block;");t=this.isContentEditable(i.element)?this.getContentEditableCaretPosition(r.mentionPosition):this.getTextAreaOrInputUnderlinePosition(this.tribute.current.element,r.mentionPosition),this.tribute.menu.style.cssText="top: ".concat(t.top,"px;\n                                     left: ").concat(t.left,"px;\n                                     right: ").concat(t.right,"px;\n                                     bottom: ").concat(t.bottom,"px;\n                                     position: absolute;\n                                     display: block;"),"auto"===t.left&&(this.tribute.menu.style.left="auto"),"auto"===t.top&&(this.tribute.menu.style.top="auto"),e&&this.scrollIntoView(),window.setTimeout((function(){var i={width:n.tribute.menu.offsetWidth,height:n.tribute.menu.offsetHeight},r=n.isMenuOffScreen(t,i),o=window.innerWidth>i.width&&(r.left||r.right),u=window.innerHeight>i.height&&(r.top||r.bottom);(o||u)&&(n.tribute.menu.style.cssText="display: none",n.positionMenuAtCaret(e))}),0)}else this.tribute.menu.style.cssText="display: none"}},{key:"selectElement",value:function(e,t,n){var i,r=e;if(t)for(var o=0;o<t.length;o++){if(void 0===(r=r.childNodes[t[o]]))return;for(;r.length<n;)n-=r.length,r=r.nextSibling;0!==r.childNodes.length||r.length||(r=r.previousSibling)}var u=this.getWindowSelection();(i=this.getDocument().createRange()).setStart(r,n),i.setEnd(r,n),i.collapse(!0);try{u.removeAllRanges()}catch(a){}u.addRange(i),e.focus()}},{key:"replaceTriggerText",value:function(e,t,n,i,r){var o=this.getTriggerInfo(!0,n,t,this.tribute.allowSpaces,this.tribute.autocompleteMode);if(void 0!==o){var u=this.tribute.current,a=new CustomEvent("tribute-replaced",{detail:{item:r,instance:u,context:o,event:i}});if(this.isContentEditable(u.element))e+="string"==typeof this.tribute.replaceTextSuffix?this.tribute.replaceTextSuffix:"\xa0",this.pasteHtml(e,o.mentionPosition,o.mentionPosition+o.mentionText.length+!this.tribute.autocompleteMode);else{var l=this.tribute.current.element,s="string"==typeof this.tribute.replaceTextSuffix?this.tribute.replaceTextSuffix:" ";e+=s;var c=o.mentionPosition,d=o.mentionPosition+o.mentionText.length+s.length;l.value=l.value.substring(0,c)+e+l.value.substring(d,l.value.length),l.selectionStart=c+e.length,l.selectionEnd=c+e.length}u.element.dispatchEvent(a)}}},{key:"pasteHtml",value:function(e,t,n){var i,r;r=this.getWindowSelection(),(i=this.getDocument().createRange()).setStart(r.anchorNode,t),i.setEnd(r.anchorNode,n),i.deleteContents();var o=this.getDocument().createElement("div");o.innerHTML=e;for(var u,a,l=this.getDocument().createDocumentFragment();u=o.firstChild;)a=l.appendChild(u);i.insertNode(l),a&&((i=i.cloneRange()).setStartAfter(a),i.collapse(!0),r.removeAllRanges(),r.addRange(i))}},{key:"getWindowSelection",value:function(){return this.tribute.collection.iframe?this.tribute.collection.iframe.contentWindow.getSelection():window.getSelection()}},{key:"getNodePositionInParent",value:function(e){if(null===e.parentNode)return 0;for(var t=0;t<e.parentNode.childNodes.length;t++)if(e.parentNode.childNodes[t]===e)return t}},{key:"getContentEditableSelectedPath",value:function(e){var t=this.getWindowSelection(),n=t.anchorNode,i=[];if(null!=n){for(var r,o=n.contentEditable;null!==n&&"true"!==o;)r=this.getNodePositionInParent(n),i.push(r),null!==(n=n.parentNode)&&(o=n.contentEditable);return i.reverse(),{selected:n,path:i,offset:t.getRangeAt(0).startOffset}}}},{key:"getTextPrecedingCurrentSelection",value:function(){var e=this.tribute.current,t="";if(this.isContentEditable(e.element)){var n=this.getWindowSelection().anchorNode;if(null!=n){var i=n.textContent,r=this.getWindowSelection().getRangeAt(0).startOffset;i&&r>=0&&(t=i.substring(0,r))}}else{var o=this.tribute.current.element;if(o){var u=o.selectionStart;o.value&&u>=0&&(t=o.value.substring(0,u))}}return t}},{key:"getLastWordInText",value:function(e){var t=(e=e.replace(/\u00A0/g," ")).split(/\s+/);return t[t.length-1].trim()}},{key:"getTriggerInfo",value:function(e,t,n,i,r){var o,u,a,l=this,s=this.tribute.current;if(this.isContentEditable(s.element)){var c=this.getContentEditableSelectedPath(s);c&&(o=c.selected,u=c.path,a=c.offset)}else o=this.tribute.current.element;var d=this.getTextPrecedingCurrentSelection(),f=this.getLastWordInText(d);if(r)return{mentionPosition:d.length-f.length,mentionText:f,mentionSelectedElement:o,mentionSelectedPath:u,mentionSelectedOffset:a};if(void 0!==d&&null!==d){var h,p=-1;if(this.tribute.collection.forEach((function(e){var t=e.trigger,i=e.requireLeadingSpace?l.lastIndexWithLeadingSpace(d,t):d.lastIndexOf(t);i>p&&(p=i,h=t,n=e.requireLeadingSpace)})),p>=0&&(0===p||!n||/[\xA0\s]/g.test(d.substring(p-1,p)))){var v=d.substring(p+1,d.length);h=d.substring(p,p+1);var m=v.substring(0,1),g=v.length>0&&(" "===m||"\xa0"===m);t&&(v=v.trim());var b=i?/[^\S ]/g:/[\xA0\s]/g;if(this.tribute.hasTrailingSpace=b.test(v),!g&&(e||!b.test(v)))return{mentionPosition:p,mentionText:v,mentionSelectedElement:o,mentionSelectedPath:u,mentionSelectedOffset:a,mentionTriggerChar:h}}}}},{key:"lastIndexWithLeadingSpace",value:function(e,t){for(var n=e.split("").reverse().join(""),i=-1,r=0,o=e.length;r<o;r++){var u=r===e.length-1,a=/\s/.test(n[r+1]);if(t===n[r]&&(u||a)){i=e.length-1-r;break}}return i}},{key:"isContentEditable",value:function(e){return"INPUT"!==e.nodeName&&"TEXTAREA"!==e.nodeName}},{key:"isMenuOffScreen",value:function(e,t){var n=window.innerWidth,i=window.innerHeight,r=document.documentElement,o=(window.pageXOffset||r.scrollLeft)-(r.clientLeft||0),u=(window.pageYOffset||r.scrollTop)-(r.clientTop||0),a="number"===typeof e.top?e.top:u+i-e.bottom-t.height,l="number"===typeof e.right?e.right:e.left+t.width,s="number"===typeof e.bottom?e.bottom:e.top+t.height,c="number"===typeof e.left?e.left:o+n-e.right-t.width;return{top:a<Math.floor(u),right:l>Math.ceil(o+n),bottom:s>Math.ceil(u+i),left:c<Math.floor(o)}}},{key:"getMenuDimensions",value:function(){var e={width:null,height:null};return this.tribute.menu.style.cssText="top: 0px;\n                                 left: 0px;\n                                 position: fixed;\n                                 display: block;\n                                 visibility; hidden;",e.width=this.tribute.menu.offsetWidth,e.height=this.tribute.menu.offsetHeight,this.tribute.menu.style.cssText="display: none;",e}},{key:"getTextAreaOrInputUnderlinePosition",value:function(e,t,n){var i=null!==window.mozInnerScreenX,r=this.getDocument().createElement("div");r.id="input-textarea-caret-position-mirror-div",this.getDocument().body.appendChild(r);var o=r.style,u=window.getComputedStyle?getComputedStyle(e):e.currentStyle;o.whiteSpace="pre-wrap","INPUT"!==e.nodeName&&(o.wordWrap="break-word"),o.position="absolute",o.visibility="hidden",["direction","boxSizing","width","height","overflowX","overflowY","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","paddingTop","paddingRight","paddingBottom","paddingLeft","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","lineHeight","fontFamily","textAlign","textTransform","textIndent","textDecoration","letterSpacing","wordSpacing"].forEach((function(e){o[e]=u[e]})),i?(o.width="".concat(parseInt(u.width)-2,"px"),e.scrollHeight>parseInt(u.height)&&(o.overflowY="scroll")):o.overflow="hidden",r.textContent=e.value.substring(0,t),"INPUT"===e.nodeName&&(r.textContent=r.textContent.replace(/\s/g," "));var a=this.getDocument().createElement("span");a.textContent=e.value.substring(t)||".",r.appendChild(a);var l=e.getBoundingClientRect(),s=document.documentElement,c=(window.pageXOffset||s.scrollLeft)-(s.clientLeft||0),d=(window.pageYOffset||s.scrollTop)-(s.clientTop||0),f=0,h=0;this.menuContainerIsBody&&(f=l.top,h=l.left);var p={top:f+d+a.offsetTop+parseInt(u.borderTopWidth)+parseInt(u.fontSize)-e.scrollTop,left:h+c+a.offsetLeft+parseInt(u.borderLeftWidth)},v=window.innerWidth,m=window.innerHeight,g=this.getMenuDimensions(),b=this.isMenuOffScreen(p,g);b.right&&(p.right=v-p.left,p.left="auto");var y=this.tribute.menuContainer?this.tribute.menuContainer.offsetHeight:this.getDocument().body.offsetHeight;if(b.bottom){var w=y-(m-(this.tribute.menuContainer?this.tribute.menuContainer.getBoundingClientRect():this.getDocument().body.getBoundingClientRect()).top);p.bottom=w+(m-l.top-a.offsetTop),p.top="auto"}return(b=this.isMenuOffScreen(p,g)).left&&(p.left=v>g.width?c+v-g.width:c,delete p.right),b.top&&(p.top=m>g.height?d+m-g.height:d,delete p.bottom),this.getDocument().body.removeChild(r),p}},{key:"getContentEditableCaretPosition",value:function(e){var t,n,i="sel_".concat((new Date).getTime(),"_").concat(Math.random().toString().substr(2)),r=this.getWindowSelection(),o=r.getRangeAt(0);(n=this.getDocument().createRange()).setStart(r.anchorNode,e),n.setEnd(r.anchorNode,e),n.collapse(!1),(t=this.getDocument().createElement("span")).id=i,t.appendChild(this.getDocument().createTextNode("\ufeff")),n.insertNode(t),r.removeAllRanges(),r.addRange(o);var u=t.getBoundingClientRect(),a=document.documentElement,l=(window.pageXOffset||a.scrollLeft)-(a.clientLeft||0),s=(window.pageYOffset||a.scrollTop)-(a.clientTop||0),c=0,d=0;this.menuContainerIsBody?(c=u.left,d=u.top):(c=t.offsetLeft,d=t.offsetTop);var f={left:c+l,top:d+t.offsetHeight+s},h=window.innerWidth,p=window.innerHeight,v=this.getMenuDimensions(),m=this.isMenuOffScreen(f,v);m.right&&(f.left="auto",f.right=h-u.left-l);var g=this.tribute.menuContainer?this.tribute.menuContainer.offsetHeight:this.getDocument().body.offsetHeight;if(m.bottom){var b=g-(p-(this.tribute.menuContainer?this.tribute.menuContainer.getBoundingClientRect():this.getDocument().body.getBoundingClientRect()).top);f.top="auto",f.bottom=b+(p-u.top)}return(m=this.isMenuOffScreen(f,v)).left&&(f.left=h>v.width?l+h-v.width:l,delete f.right),m.top&&(f.top=p>v.height?s+p-v.height:s,delete f.bottom),t.parentNode.removeChild(t),f}},{key:"scrollIntoView",value:function(e){var t,n=this.menu;if("undefined"!==typeof n){for(;void 0===t||0===t.height;)if(0===(t=n.getBoundingClientRect()).height&&(void 0===(n=n.childNodes[0])||!n.getBoundingClientRect))return;var i=t.top,r=i+t.height;if(i<0)window.scrollTo(0,window.pageYOffset+t.top-20);else if(r>window.innerHeight){var o=window.pageYOffset+t.top-20;o-window.pageYOffset>100&&(o=window.pageYOffset+100);var u=window.pageYOffset-(window.innerHeight-r);u>o&&(u=o),window.scrollTo(0,u)}}}},{key:"menuContainerIsBody",get:function(){return this.tribute.menuContainer===document.body||!this.tribute.menuContainer}}])&&i(t.prototype,n),r&&i(t,r),e}();n.default=r,t.exports=n.default},{}],5:[function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.tribute=t,this.tribute.search=this}var t,n,r;return t=e,(n=[{key:"simpleFilter",value:function(e,t){var n=this;return t.filter((function(t){return n.test(e,t)}))}},{key:"test",value:function(e,t){return null!==this.match(e,t)}},{key:"match",value:function(e,t,n){n=n||{},t.length;var i=n.pre||"",r=n.post||"",o=n.caseSensitive&&t||t.toLowerCase();if(n.skip)return{rendered:t,score:0};e=n.caseSensitive&&e||e.toLowerCase();var u=this.traverse(o,e,0,0,[]);return u?{rendered:this.render(t,u.cache,i,r),score:u.score}:null}},{key:"traverse",value:function(e,t,n,i,r){if(t.length===i)return{score:this.calculateScore(r),cache:r.slice()};if(!(e.length===n||t.length-i>e.length-n)){for(var o,u,a=t[i],l=e.indexOf(a,n);l>-1;){if(r.push(l),u=this.traverse(e,t,l+1,i+1,r),r.pop(),!u)return o;(!o||o.score<u.score)&&(o=u),l=e.indexOf(a,l+1)}return o}}},{key:"calculateScore",value:function(e){var t=0,n=1;return e.forEach((function(i,r){r>0&&(e[r-1]+1===i?n+=n+1:n=1),t+=n})),t}},{key:"render",value:function(e,t,n,i){var r=e.substring(0,t[0]);return t.forEach((function(o,u){r+=n+e[o]+i+e.substring(o+1,t[u+1]?t[u+1]:e.length)})),r}},{key:"filter",value:function(e,t,n){var i=this;return n=n||{},t.reduce((function(t,r,o,u){var a=r;n.extract&&((a=n.extract(r))||(a=""));var l=i.match(e,a,n);return null!=l&&(t[t.length]={string:l.rendered,score:l.score,index:o,original:r}),t}),[]).sort((function(e,t){var n=t.score-e.score;return n||e.index-t.index}))}}])&&i(t.prototype,n),r&&i(t,r),e}();n.default=r,t.exports=n.default},{}],6:[function(e,t,n){"use strict";var i;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=((i=e("./Tribute"))&&i.__esModule?i:{default:i}).default;n.default=r,t.exports=n.default},{"./Tribute":1}],7:[function(e,t,n){"use strict";if(Array.prototype.find||(Array.prototype.find=function(e){if(null===this)throw new TypeError("Array.prototype.find called on null or undefined");if("function"!==typeof e)throw new TypeError("predicate must be a function");for(var t,n=Object(this),i=n.length>>>0,r=arguments[1],o=0;o<i;o++)if(t=n[o],e.call(r,t,o,n))return t}),window&&"function"!==typeof window.CustomEvent){var i=function(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n};"undefined"!==typeof window.Event&&(i.prototype=window.Event.prototype),window.CustomEvent=i}},{}]},{},[6])(6)},"object"===u(t)?e.exports=o():(i=[],void 0===(r="function"===typeof(n=o)?n.apply(t,i):n)||(e.exports=r))}}]);
//# sourceMappingURL=247-31b932de38d4e3321b98.js.map