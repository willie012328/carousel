(this.webpackJsonpcarousel=this.webpackJsonpcarousel||[]).push([[0],{25:function(e){e.exports=JSON.parse('{"a":"https://raw.githubusercontent.com/willie012328/carousel-content-source/main/{carouselRepo}","b":"config.json"}')},52:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var s=n(2),a=n.n(s),i=n(27),o=n.n(i),c=(n(52),n(29)),r=n(18),l=n(13),h=n(45),u=n(30),d=n(8),b=n(16),j="GET_CAROUSEL_CONFIG_INIT",p="GET_CAROUSEL_CONFIG_SUCCESS",g="GET_CAROUSEL_CONFIG_FAIL",O="initialized",x="fetching",m="error",f="status",v="data",w="other",C=Object(l.combineReducers)({carouselConfig:function(e,t){var n,s=t.status,a=void 0===s?0:s,i=t.data,o=void 0===i?{}:i;if(void 0===e)return Object(b.b)((n={},Object(d.a)(n,O,!1),Object(d.a)(n,x,!1),Object(d.a)(n,m,!1),Object(d.a)(n,f,a),Object(d.a)(n,v,Object(b.b)(o)),n));switch(t.type){case j:return e.withMutations((function(e){e.set(O,!1),e.set(x,!0),e.set(m,!1),e.set(f,a),e.set(w,Object(b.b)(o))}));case p:return e.withMutations((function(e){e.set(O,!0),e.set(x,!1),e.set(m,!1),e.set(f,a),e.set(v,Object(b.c)(o))}));case g:return e.withMutations((function(e){e.set(O,!1),e.set(x,!1),e.set(m,!0),e.set(f,a),e.set(v,Object(b.c)(o))}));default:return e}}}),_=Object(l.combineReducers)({CarouselReducer:C}),y=n(14),k=n.n(y),I=n(15),N=n(25),S=n(17),P=n.n(S),B={get:function(e){return P.a.get(e).then((function(e){return e.data}))},post:function(e,t,n){return P.a.post(e,t,n).then((function(e){return e.data}))},put:function(e,t,n){return P.a.put(e,t,n).then((function(e){return e.data}))},del:function(e,t,n){return P.a.delete(e,t,n).then((function(e){return e.data}))},api:function(e,t){var n,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=e.toLowerCase(),c=["post","put","patch"].indexOf(o)>=0,r=c?a:s;i&&(n=S.CancelToken.source(),r.cancelToken=n.token);var l=c?P.a[o](t,s,r):P.a[o](t,r);return i&&(l[u.a]=function(){return n.cancel()}),l}};function F(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(/[^?/&]+([{}])/g),s=e.match(/([{]+[\w]+[}])+/g),a=e.match(/[^{}]+(?=})/g);return n&&n.map((function(n,i){var o=t[a[i]];if(o)if(Array.isArray(o))if(o.length>0){for(var c="",r=0;r<o.length;r++)c+=0===r?encodeURIComponent(o[r]):"&".concat(a[i],"=").concat(encodeURIComponent(o[r]));e=e.replace(s[i],c)}else e=e.replace(n,"");else e=e.replace(s[i],encodeURIComponent(o));else e=e.replace(n,"");return null})),e.replace(/[&]{2,}/g,"&").replace(/[?&]+$/g,"").replace("?&","?")}var T=k.a.mark(V),R=k.a.mark(E),L=k.a.mark(G);function V(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(I.e)(j,E);case 2:case"end":return e.stop()}}),T)}function E(e){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(I.b)(G,e.data);case 2:case"end":return t.stop()}}),R)}function G(e){var t,n,s,a,i,o,c;return k.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t="".concat(N.a,"/").concat(N.b),n=F(t,e),r.prev=2,r.next=5,Object(I.b)(B.api,"get",n);case 5:return s=r.sent,a=s.status,i=s.data,r.next=9,Object(I.d)({type:p,status:a,data:i});case 9:r.next=17;break;case 11:return r.prev=11,r.t0=r.catch(2),o=r.t0.response?r.t0.response.status:500,c=r.t0.response?r.t0.response:{response:r.t0.toString()},r.next=17,Object(I.d)({type:g,status:o,data:c});case 17:case"end":return r.stop()}}),L,null,[[2,11]])}var D=k.a.mark(U);function U(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(I.a)([Object(I.c)(V)]);case 2:case"end":return e.stop()}}),D)}var A=U,M=Object(u.b)(),W=Object(l.createStore)(_,{},Object(h.composeWithDevTools)(Object(l.applyMiddleware)(M)));M.run(A);var K=W,J=n(20),q=n(21),z=n(23),H=n(22),$=n(1),Q=function(e){Object(z.a)(n,e);var t=Object(H.a)(n);function n(e){var s;return Object(J.a)(this,n),(s=t.call(this,e)).state={hasError:!1,error:null,info:null},s}return Object(q.a)(n,[{key:"componentDidCatch",value:function(e,t){console.log("Error:",e),console.log("Info:",t),this.setState({hasError:!0,error:e,info:t})}},{key:"render",value:function(){return this.state.hasError?Object($.jsx)("div",{}):this.props.children}}]),n}(s.Component),X=n(6),Y=function(e){Object(z.a)(n,e);var t=Object(H.a)(n);function n(e){var s;return Object(J.a)(this,n),(s=t.call(this,e)).transformIncomingProps=function(e){var t={source_repo_name:""};return t},s.updateState=function(e,t){s.setState(Object(d.a)({},e,t))},s.handleChange=function(e){var t=e.target.value;s.updateState("source_repo_name",t)},s.handleSubmit=function(){s.props.history.push("/".concat(s.state.source_repo_name))},s.state=s.transformIncomingProps(),s}return Object(q.a)(n,[{key:"render",value:function(){return Object($.jsx)("section",{className:"app",children:Object($.jsx)("div",{className:"app-sandbox",children:Object($.jsxs)("div",{className:"app-sandbox-content text-center",children:[Object($.jsx)("h2",{className:"app-header",children:"Enter Source Repository Name"}),Object($.jsxs)("div",{className:"margin-auto",children:[Object($.jsx)("label",{className:"landing-interval-label",children:"".concat("GitHub/willie012328/")}),Object($.jsx)("input",{className:"landing-interval-input",type:"text",onChange:this.handleChange,value:this.state.source_repo_name}),Object($.jsx)("button",{className:"landing-interval-button",onClick:this.handleSubmit,children:"Submit"})]})]})})})}}]),n}(a.a.Component),Z=n(47),ee=n(26),te=n(46),ne=n.n(te),se=function(e){return Object($.jsx)("section",{className:"app",children:Object($.jsx)("div",{className:"app-sandbox",children:Object($.jsxs)("div",{className:"app-sandbox-content text-center",children:[Object($.jsx)("h2",{className:"app-header",children:"Error"}),Object($.jsxs)("h2",{className:"app-header",children:["Code: ",e.status]}),Object($.jsxs)("div",{className:"margin-auto",children:[Object($.jsxs)("p",{children:["Error Content: ",e.data]}),Object($.jsx)("p",{children:"Please make sure source repository exists or check out you network connection."}),Object($.jsx)(r.b,{className:"button-like-link",to:"/",replace:!0,children:"Back to Landing Page"})]})]})})})},ae=function(){return Object($.jsx)("div",{className:"text-center",children:Object($.jsx)("div",{class:"loadingio-spinner-rolling-2ahyqw99da8",children:Object($.jsx)("div",{class:"ldio-oc49n2cckl",children:Object($.jsx)("div",{})})})})},ie=function(e){Object(z.a)(n,e);var t=Object(H.a)(n);function n(){var e;return Object(J.a)(this,n),(e=t.call(this)).transformIncomingProps=function(e){return{showIndex:!1,showBullets:!0,infinite:!0,showThumbnails:!0,showFullscreenButton:!0,showGalleryFullscreenButton:!0,showPlayButton:!0,showGalleryPlayButton:!0,showNav:!0,isRTL:!1,slideDuration:450,slideInterval:2e3,slideOnThumbnailOver:!1,thumbnailPosition:"bottom",showVideo:{},useWindowKeyDown:!0,images:[]}},e.updateState=function(t,n){e.setState(Object(d.a)({},t,n))},e.checkCarouselConfig=function(t){if(t.carouselConfig!==e.props.carouselConfig){var n=e.props.carouselConfig.get(O,!1),s=e.props.carouselConfig.getIn([v,"images"],Object(b.a)([]));if(n){var a=s.toJS(),i=[];a.map((function(t){var n,s,a;return t.isVideo?(n=e.handleIsVideoObject(t),i.push(null!==(s=n)&&void 0!==s?s:t)):t.isImageInLocal?(n=e.handleLocalImage(t),i.push.apply(i,Object(Z.a)(null!==(a=n)&&void 0!==a?a:t))):i.push(t)})),e.updateState("images",i)}}},e.handleIsVideoObject=function(t){return t.isVideo&&Object.assign({},t,{renderItem:e._renderVideo.bind(t)})},e.handleLocalImage=function(t){for(var n,s,a=e.props.carouselConfig.getIn([w,"carouselRepo"],""),i=F("".concat(N.a,"/"),{carouselRepo:a}),o=null!==(n=t.indexStart)&&void 0!==n?n:0,c=null!==(s=t.indexEnd)&&void 0!==s?s:0,r=[],l=o;l<=c;l++)r.push({original:"".concat(i).concat(l,".jpg"),thumbnail:"".concat(i).concat(l,".jpg")});return r},e.renderSpinner=function(){return Object($.jsx)(ae,{})},e.renderErrorPage=function(){var t=e.props.carouselConfig.get(f,0),n=e.props.carouselConfig.getIn([v,"data"],"");return Object($.jsx)(se,{status:t,data:n})},e._onImageClick=function(t){console.debug("clicked on image",t.target,"at index",e._imageGallery.getCurrentIndex())},e._onImageLoad=function(e){console.debug("loaded image",e.target.src)},e._onSlide=function(t){e._resetVideo(),console.debug("slid to index",t)},e._onPause=function(e){console.debug("paused on index",e)},e._onScreenChange=function(e){console.debug("isFullScreen?",!!e)},e._onPlay=function(e){console.debug("playing from index",e)},e._handleInputChange=function(t,n){n.target.value>0&&e.setState(Object(d.a)({},t,n.target.value))},e._handleCheckboxChange=function(t,n){e.setState(Object(d.a)({},t,n.target.checked))},e._handleThumbnailPositionChange=function(t){e.setState({thumbnailPosition:t.target.value})},e._resetVideo=function(){e.setState({showVideo:{}}),e.state.showPlayButton&&e.setState({showGalleryPlayButton:!0}),e.state.showFullscreenButton&&e.setState({showGalleryFullscreenButton:!0})},e._toggleShowVideo=function(t){e.state.showVideo[t]=!Boolean(e.state.showVideo[t]),e.setState({showVideo:e.state.showVideo}),e.state.showVideo[t]&&(e.state.showPlayButton&&e.setState({showGalleryPlayButton:!1}),e.state.showFullscreenButton&&e.setState({showGalleryFullscreenButton:!1}))},e._renderVideo=function(t){return Object($.jsx)("div",{children:e.state.showVideo[t.embedUrl]?Object($.jsxs)("div",{className:"video-wrapper",children:[Object($.jsx)("button",{className:"close-video",onClick:e._toggleShowVideo.bind(Object(ee.a)(e),t.embedUrl)}),Object($.jsx)("iframe",{width:"560",height:"315",title:t.embedUrl,src:t.embedUrl,frameBorder:"0",allowFullScreen:!0})]}):Object($.jsxs)("a",{onClick:e._toggleShowVideo.bind(Object(ee.a)(e),t.embedUrl),children:[Object($.jsx)("div",{className:"play-button"}),Object($.jsx)("img",{className:"image-gallery-image",src:t.original,alt:"Video thumbnail"}),t.description&&Object($.jsx)("span",{className:"image-gallery-description",style:{right:"0",left:"initial"},children:t.description})]})})},e.state=e.transformIncomingProps(),e}return Object(q.a)(n,[{key:"componentDidMount",value:function(){var e,t,n=this.props.match,s=null!==(e=null===n||void 0===n||null===(t=n.params)||void 0===t?void 0:t.carouselRepo)&&void 0!==e?e:"";this.props.getCarouselConfig({carouselRepo:s})}},{key:"componentDidUpdate",value:function(e,t){this.checkCarouselConfig(e)}},{key:"render",value:function(){var e=this,t=this.props.carouselConfig.get(x,!1),n=this.props.carouselConfig.get(m,!1);return t?this.renderSpinner():n?this.renderErrorPage():Object($.jsxs)("section",{className:"app",children:[Object($.jsx)(ne.a,{ref:function(t){return e._imageGallery=t},items:this.state.images,onClick:this._onImageClick.bind(this),onImageLoad:this._onImageLoad,onSlide:this._onSlide.bind(this),onPause:this._onPause.bind(this),onScreenChange:this._onScreenChange.bind(this),onPlay:this._onPlay.bind(this),infinite:this.state.infinite,showBullets:this.state.showBullets,showFullscreenButton:this.state.showFullscreenButton&&this.state.showGalleryFullscreenButton,showPlayButton:this.state.showPlayButton&&this.state.showGalleryPlayButton,showThumbnails:this.state.showThumbnails,showIndex:this.state.showIndex,showNav:this.state.showNav,isRTL:this.state.isRTL,thumbnailPosition:this.state.thumbnailPosition,slideDuration:parseInt(this.state.slideDuration),slideInterval:parseInt(this.state.slideInterval),slideOnThumbnailOver:this.state.slideOnThumbnailOver,additionalClass:"app-image-gallery",useWindowKeyDown:this.state.useWindowKeyDown}),Object($.jsx)("div",{className:"app-sandbox",children:Object($.jsxs)("div",{className:"app-sandbox-content",children:[Object($.jsxs)("h2",{className:"app-header",children:["Settings ",Object($.jsx)(r.b,{className:"button-like-link",to:"/",replace:!0,children:"Back to Landing Page"})]}),Object($.jsxs)("ul",{className:"app-buttons",children:[Object($.jsx)("li",{children:Object($.jsxs)("div",{className:"app-interval-input-group",children:[Object($.jsx)("span",{className:"app-interval-label",children:"Play Interval"}),Object($.jsx)("input",{className:"app-interval-input",type:"text",onChange:this._handleInputChange.bind(this,"slideInterval"),value:this.state.slideInterval})]})}),Object($.jsx)("li",{children:Object($.jsxs)("div",{className:"app-interval-input-group",children:[Object($.jsx)("span",{className:"app-interval-label",children:"Slide Duration"}),Object($.jsx)("input",{className:"app-interval-input",type:"text",onChange:this._handleInputChange.bind(this,"slideDuration"),value:this.state.slideDuration})]})}),Object($.jsx)("li",{children:Object($.jsxs)("div",{className:"app-interval-input-group",children:[Object($.jsx)("span",{className:"app-interval-label",children:"Thumbnail Bar Position"}),Object($.jsxs)("select",{className:"app-interval-input",value:this.state.thumbnailPosition,onChange:this._handleThumbnailPositionChange.bind(this),children:[Object($.jsx)("option",{value:"bottom",children:"Bottom"}),Object($.jsx)("option",{value:"top",children:"Top"}),Object($.jsx)("option",{value:"left",children:"Left"}),Object($.jsx)("option",{value:"right",children:"Right"})]})]})})]}),Object($.jsxs)("ul",{className:"app-checkboxes",children:[Object($.jsxs)("li",{children:[Object($.jsx)("input",{id:"infinite",type:"checkbox",onChange:this._handleCheckboxChange.bind(this,"infinite"),checked:this.state.infinite}),Object($.jsx)("label",{htmlFor:"infinite",children:"allow infinite sliding"})]}),Object($.jsxs)("li",{children:[Object($.jsx)("input",{id:"show_fullscreen",type:"checkbox",onChange:this._handleCheckboxChange.bind(this,"showFullscreenButton"),checked:this.state.showFullscreenButton}),Object($.jsx)("label",{htmlFor:"show_fullscreen",children:"show fullscreen button"})]}),Object($.jsxs)("li",{children:[Object($.jsx)("input",{id:"show_playbutton",type:"checkbox",onChange:this._handleCheckboxChange.bind(this,"showPlayButton"),checked:this.state.showPlayButton}),Object($.jsx)("label",{htmlFor:"show_playbutton",children:"show play button"})]}),Object($.jsxs)("li",{children:[Object($.jsx)("input",{id:"show_bullets",type:"checkbox",onChange:this._handleCheckboxChange.bind(this,"showBullets"),checked:this.state.showBullets}),Object($.jsx)("label",{htmlFor:"show_bullets",children:"show bullets"})]}),Object($.jsxs)("li",{children:[Object($.jsx)("input",{id:"show_thumbnails",type:"checkbox",onChange:this._handleCheckboxChange.bind(this,"showThumbnails"),checked:this.state.showThumbnails}),Object($.jsx)("label",{htmlFor:"show_thumbnails",children:"show thumbnails"})]}),Object($.jsxs)("li",{children:[Object($.jsx)("input",{id:"show_navigation",type:"checkbox",onChange:this._handleCheckboxChange.bind(this,"showNav"),checked:this.state.showNav}),Object($.jsx)("label",{htmlFor:"show_navigation",children:"show navigation"})]}),Object($.jsxs)("li",{children:[Object($.jsx)("input",{id:"show_index",type:"checkbox",onChange:this._handleCheckboxChange.bind(this,"showIndex"),checked:this.state.showIndex}),Object($.jsx)("label",{htmlFor:"show_index",children:"show index"})]}),Object($.jsxs)("li",{children:[Object($.jsx)("input",{id:"is_rtl",type:"checkbox",onChange:this._handleCheckboxChange.bind(this,"isRTL"),checked:this.state.isRTL}),Object($.jsx)("label",{htmlFor:"is_rtl",children:"is right to left"})]}),Object($.jsxs)("li",{children:[Object($.jsx)("input",{id:"slide_on_thumbnail_hover",type:"checkbox",onChange:this._handleCheckboxChange.bind(this,"slideOnThumbnailOver"),checked:this.state.slideOnThumbnailOver}),Object($.jsx)("label",{htmlFor:"slide_on_thumbnail_hover",children:"slide on mouse over thumbnails"})]}),Object($.jsxs)("li",{children:[Object($.jsx)("input",{id:"use_window_keydown",type:"checkbox",onChange:this._handleCheckboxChange.bind(this,"useWindowKeyDown"),checked:this.state.useWindowKeyDown}),Object($.jsx)("label",{htmlFor:"use_window_keydown",children:"use window keydown"})]})]})]})})]})}}]),n}(a.a.Component),oe=Object(c.b)((function(e){return{carouselConfig:e.CarouselReducer.carouselConfig}}),(function(e){return{getCarouselConfig:function(t){e(function(e){return{type:j,data:e}}(t))}}}))(ie);var ce=Object(X.g)((function(e){return Object($.jsxs)(X.d,{children:[Object($.jsx)(X.b,{exact:!0,path:"/",component:Y}),Object($.jsx)(X.b,{exact:!0,path:"/:carouselRepo",component:oe}),Object($.jsx)(X.a,{to:"/"})]})}));n(81);var re=function(){return Object($.jsx)(c.a,{store:K,children:Object($.jsx)(r.a,{children:Object($.jsx)(Q,{children:Object($.jsx)(ce,{})})})})},le=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,83)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),s(e),a(e),i(e),o(e)}))};o.a.render(Object($.jsx)(a.a.StrictMode,{children:Object($.jsx)(re,{})}),document.getElementById("root")),le()}},[[82,1,2]]]);
//# sourceMappingURL=main.9abfedec.chunk.js.map