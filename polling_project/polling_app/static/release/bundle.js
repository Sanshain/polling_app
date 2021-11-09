(function () {
	'use strict';

	var n,l,u,i,t,r,o,f={},e=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function s(n,l){for(var u in l)n[u]=l[u];return n}function a(n){var l=n.parentNode;l&&l.removeChild(n);}function v(n,l,u){var i,t=arguments,r={};for(i in l)"key"!==i&&"ref"!==i&&(r[i]=l[i]);if(arguments.length>3)for(u=[u],i=3;i<arguments.length;i++)u.push(t[i]);if(null!=u&&(r.children=u),"function"==typeof n&&null!=n.defaultProps)for(i in n.defaultProps)void 0===r[i]&&(r[i]=n.defaultProps[i]);return h(n,r,l&&l.key,l&&l.ref,null)}function h(l,u,i,t,r){var o={type:l,props:u,key:i,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:r};return null==r&&(o.__v=o),n.vnode&&n.vnode(o),o}function y(){return {current:null}}function p(n){return n.children}function d(n,l){this.props=n,this.context=l;}function _(n,l){if(null==l)return n.__?_(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?_(n):null}function k(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return k(n)}}function w(l){(!l.__d&&(l.__d=!0)&&u.push(l)&&!m.__r++||t!==n.debounceRendering)&&((t=n.debounceRendering)||i)(m);}function m(){for(var n;m.__r=u.length;)n=u.sort(function(n,l){return n.__v.__b-l.__v.__b}),u=[],n.some(function(n){var l,u,i,t,r,o,f;n.__d&&(o=(r=(l=n).__v).__e,(f=l.__P)&&(u=[],(i=s({},r)).__v=i,t=T(f,r,i,l.__n,void 0!==f.ownerSVGElement,null,u,null==o?_(r):o),$(u,r),t!=o&&k(r)));});}function g(n,l,u,i,t,r,o,c,s,v){var y,d,k,w,m,g,b,A=i&&i.__k||e,P=A.length;for(s==f&&(s=null!=o?o[0]:P?_(i,0):null),u.__k=[],y=0;y<l.length;y++)if(null!=(w=u.__k[y]=null==(w=l[y])||"boolean"==typeof w?null:"string"==typeof w||"number"==typeof w?h(null,w,null,null,w):Array.isArray(w)?h(p,{children:w},null,null,null):null!=w.__e||null!=w.__c?h(w.type,w.props,w.key,null,w.__v):w)){if(w.__=u,w.__b=u.__b+1,null===(k=A[y])||k&&w.key==k.key&&w.type===k.type)A[y]=void 0;else for(d=0;d<P;d++){if((k=A[d])&&w.key==k.key&&w.type===k.type){A[d]=void 0;break}k=null;}m=T(n,w,k=k||f,t,r,o,c,s,v),(d=w.ref)&&k.ref!=d&&(b||(b=[]),k.ref&&b.push(k.ref,null,w),b.push(d,w.__c||m,w)),null!=m?(null==g&&(g=m),s=x(n,w,k,A,o,m,s),"option"==u.type?n.value="":"function"==typeof u.type&&(u.__d=s)):s&&k.__e==s&&s.parentNode!=n&&(s=_(k));}if(u.__e=g,null!=o&&"function"!=typeof u.type)for(y=o.length;y--;)null!=o[y]&&a(o[y]);for(y=P;y--;)null!=A[y]&&I(A[y],A[y]);if(b)for(y=0;y<b.length;y++)H(b[y],b[++y],b[++y]);}function b(n){return null==n||"boolean"==typeof n?[]:Array.isArray(n)?e.concat.apply([],n.map(b)):[n]}function x(n,l,u,i,t,r,o){var f,e,c;if(void 0!==l.__d)f=l.__d,l.__d=void 0;else if(t==u||r!=o||null==r.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(r),f=null;else {for(e=o,c=0;(e=e.nextSibling)&&c<i.length;c+=2)if(e==r)break n;n.insertBefore(r,o),f=o;}return void 0!==f?f:r.nextSibling}function A(n,l,u,i,t){var r;for(r in u)"children"===r||"key"===r||r in l||C(n,r,null,u[r],i);for(r in l)t&&"function"!=typeof l[r]||"children"===r||"key"===r||"value"===r||"checked"===r||u[r]===l[r]||C(n,r,l[r],u[r],i);}function P(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]="number"==typeof u&&!1===c.test(l)?u+"px":null==u?"":u;}function C(n,l,u,i,t){var r,o,f,e,c;if(t?"className"===l&&(l="class"):"class"===l&&(l="className"),"style"===l)if(r=n.style,"string"==typeof u)r.cssText=u;else {if("string"==typeof i&&(r.cssText="",i=null),i)for(e in i)u&&e in u||P(r,e,"");if(u)for(c in u)i&&u[c]===i[c]||P(r,c,u[c]);}else "o"===l[0]&&"n"===l[1]?(o=l!==(l=l.replace(/Capture$/,"")),f=l.toLowerCase(),l=(f in n?f:l).slice(2),u?(i||n.addEventListener(l,N,o),(n.l||(n.l={}))[l]=u):n.removeEventListener(l,N,o)):"list"!==l&&"tagName"!==l&&"form"!==l&&"type"!==l&&"size"!==l&&!t&&l in n?n[l]=null==u?"":u:"function"!=typeof u&&"dangerouslySetInnerHTML"!==l&&(l!==(l=l.replace(/^xlink:?/,""))?null==u||!1===u?n.removeAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase()):n.setAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase(),u):null==u||!1===u&&!/^ar/.test(l)?n.removeAttribute(l):n.setAttribute(l,u));}function N(l){this.l[l.type](n.event?n.event(l):l);}function z(n,l,u){var i,t;for(i=0;i<n.__k.length;i++)(t=n.__k[i])&&(t.__=n,t.__e&&("function"==typeof t.type&&t.__k.length>1&&z(t,l,u),l=x(u,t,t,n.__k,null,t.__e,l),"function"==typeof n.type&&(n.__d=l)));}function T(l,u,i,t,r,o,f,e,c){var a,v,h,y,_,k,w,m,b,x,A,P=u.type;if(void 0!==u.constructor)return null;(a=n.__b)&&a(u);try{n:if("function"==typeof P){if(m=u.props,b=(a=P.contextType)&&t[a.__c],x=a?b?b.props.value:a.__:t,i.__c?w=(v=u.__c=i.__c).__=v.__E:("prototype"in P&&P.prototype.render?u.__c=v=new P(m,x):(u.__c=v=new d(m,x),v.constructor=P,v.render=L),b&&b.sub(v),v.props=m,v.state||(v.state={}),v.context=x,v.__n=t,h=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=P.getDerivedStateFromProps&&(v.__s==v.state&&(v.__s=s({},v.__s)),s(v.__s,P.getDerivedStateFromProps(m,v.__s))),y=v.props,_=v.state,h)null==P.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&v.__h.push(v.componentDidMount);else {if(null==P.getDerivedStateFromProps&&m!==y&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(m,x),!v.__e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(m,v.__s,x)||u.__v===i.__v){v.props=m,v.state=v.__s,u.__v!==i.__v&&(v.__d=!1),v.__v=u,u.__e=i.__e,u.__k=i.__k,v.__h.length&&f.push(v),z(u,e,l);break n}null!=v.componentWillUpdate&&v.componentWillUpdate(m,v.__s,x),null!=v.componentDidUpdate&&v.__h.push(function(){v.componentDidUpdate(y,_,k);});}v.context=x,v.props=m,v.state=v.__s,(a=n.__r)&&a(u),v.__d=!1,v.__v=u,v.__P=l,a=v.render(v.props,v.state,v.context),v.state=v.__s,null!=v.getChildContext&&(t=s(s({},t),v.getChildContext())),h||null==v.getSnapshotBeforeUpdate||(k=v.getSnapshotBeforeUpdate(y,_)),A=null!=a&&a.type==p&&null==a.key?a.props.children:a,g(l,Array.isArray(A)?A:[A],u,i,t,r,o,f,e,c),v.base=u.__e,v.__h.length&&f.push(v),w&&(v.__E=v.__=null),v.__e=!1;}else null==o&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=j(i.__e,u,i,t,r,o,f,c);(a=n.diffed)&&a(u);}catch(l){u.__v=null,n.__e(l,u,i);}return u.__e}function $(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u);});}catch(l){n.__e(l,u.__v);}});}function j(n,l,u,i,t,r,o,c){var s,a,v,h,y,p=u.props,d=l.props;if(t="svg"===l.type||t,null!=r)for(s=0;s<r.length;s++)if(null!=(a=r[s])&&((null===l.type?3===a.nodeType:a.localName===l.type)||n==a)){n=a,r[s]=null;break}if(null==n){if(null===l.type)return document.createTextNode(d);n=t?document.createElementNS("http://www.w3.org/2000/svg",l.type):document.createElement(l.type,d.is&&{is:d.is}),r=null,c=!1;}if(null===l.type)p!==d&&n.data!=d&&(n.data=d);else {if(null!=r&&(r=e.slice.call(n.childNodes)),v=(p=u.props||f).dangerouslySetInnerHTML,h=d.dangerouslySetInnerHTML,!c){if(null!=r)for(p={},y=0;y<n.attributes.length;y++)p[n.attributes[y].name]=n.attributes[y].value;(h||v)&&(h&&v&&h.__html==v.__html||(n.innerHTML=h&&h.__html||""));}A(n,d,p,t,c),h?l.__k=[]:(s=l.props.children,g(n,Array.isArray(s)?s:[s],l,u,i,"foreignObject"!==l.type&&t,r,o,f,c)),c||("value"in d&&void 0!==(s=d.value)&&s!==n.value&&C(n,"value",s,p.value,!1),"checked"in d&&void 0!==(s=d.checked)&&s!==n.checked&&C(n,"checked",s,p.checked,!1));}return n}function H(l,u,i){try{"function"==typeof l?l(u):l.current=u;}catch(l){n.__e(l,i);}}function I(l,u,i){var t,r,o;if(n.unmount&&n.unmount(l),(t=l.ref)&&(t.current&&t.current!==l.__e||H(t,null,u)),i||"function"==typeof l.type||(i=null!=(r=l.__e)),l.__e=l.__d=void 0,null!=(t=l.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount();}catch(l){n.__e(l,u);}t.base=t.__P=null;}if(t=l.__k)for(o=0;o<t.length;o++)t[o]&&I(t[o],u,i);null!=r&&a(r);}function L(n,l,u){return this.constructor(n,u)}function M(l,u,i){var t,o,c;n.__&&n.__(l,u),o=(t=i===r)?null:i&&i.__k||u.__k,l=v(p,null,[l]),c=[],T(u,(t?u:i||u).__k=l,o||f,f,void 0!==u.ownerSVGElement,i&&!t?[i]:o?null:u.childNodes.length?e.slice.call(u.childNodes):null,c,i||f,t),$(c,l);}function O(n,l){M(n,l,r);}function S(n,l){var u,i;for(i in l=s(s({},n.props),l),arguments.length>2&&(l.children=e.slice.call(arguments,2)),u={},l)"key"!==i&&"ref"!==i&&(u[i]=l[i]);return h(n.type,u,l.key||n.key,l.ref||n.ref,null)}function q(n){var l={},u={__c:"__cC"+o++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var i,t=this;return this.getChildContext||(i=[],this.getChildContext=function(){return l[u.__c]=t,l},this.shouldComponentUpdate=function(n){t.props.value!==n.value&&i.some(function(l){l.context=n.value,w(l);});},this.sub=function(n){i.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){i.splice(i.indexOf(n),1),l&&l.call(n);};}),n.children}};return u.Consumer.contextType=u,u.Provider.__=u,u}n={__e:function(n,l){for(var u,i;l=l.__;)if((u=l.__c)&&!u.__)try{if(u.constructor&&null!=u.constructor.getDerivedStateFromError&&(i=!0,u.setState(u.constructor.getDerivedStateFromError(n))),null!=u.componentDidCatch&&(i=!0,u.componentDidCatch(n)),i)return w(u.__E=u)}catch(l){n=l;}throw n}},l=function(n){return null!=n&&void 0===n.constructor},d.prototype.setState=function(n,l){var u;u=this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof n&&(n=n(u,this.props)),n&&s(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),w(this));},d.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),w(this));},d.prototype.render=p,u=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,m.__r=0,r=f,o=0;

	var preact_module = /*#__PURE__*/Object.freeze({
		__proto__: null,
		render: M,
		hydrate: O,
		createElement: v,
		h: v,
		Fragment: p,
		createRef: y,
		get isValidElement () { return l; },
		Component: d,
		cloneElement: S,
		createContext: q,
		toChildArray: b,
		__u: I,
		get options () { return n; }
	});

	var t$1,u$1,r$1,o$1=0,i$1=[],c$1=n.__r,f$1=n.diffed,e$1=n.__c,a$1=n.unmount;function v$1(t,r){n.__h&&n.__h(u$1,t,o$1||r),o$1=0;var i=u$1.__H||(u$1.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({}),i.__[t]}function m$1(n){return o$1=1,p$1(k$1,n)}function p$1(n,r,o){var i=v$1(t$1++,2);return i.t=n,i.__c||(i.__c=u$1,i.__=[o?o(r):k$1(void 0,r),function(n){var t=i.t(i.__[0],n);i.__[0]!==t&&(i.__=[t,i.__[1]],i.__c.setState({}));}]),i.__}function y$1(r,o){var i=v$1(t$1++,3);!n.__s&&j$1(i.__H,o)&&(i.__=r,i.__H=o,u$1.__H.__h.push(i));}function q$1(){i$1.some(function(t){if(t.__P)try{t.__H.__h.forEach(b$1),t.__H.__h.forEach(g$1),t.__H.__h=[];}catch(u){return t.__H.__h=[],n.__e(u,t.__v),!0}}),i$1=[];}n.__r=function(n){c$1&&c$1(n),t$1=0;var r=(u$1=n.__c).__H;r&&(r.__h.forEach(b$1),r.__h.forEach(g$1),r.__h=[]);},n.diffed=function(t){f$1&&f$1(t);var u=t.__c;u&&u.__H&&u.__H.__h.length&&(1!==i$1.push(u)&&r$1===n.requestAnimationFrame||((r$1=n.requestAnimationFrame)||function(n){var t,u=function(){clearTimeout(r),x$1&&cancelAnimationFrame(t),setTimeout(n);},r=setTimeout(u,100);x$1&&(t=requestAnimationFrame(u));})(q$1));},n.__c=function(t,u){u.some(function(t){try{t.__h.forEach(b$1),t.__h=t.__h.filter(function(n){return !n.__||g$1(n)});}catch(r){u.some(function(n){n.__h&&(n.__h=[]);}),u=[],n.__e(r,t.__v);}}),e$1&&e$1(t,u);},n.unmount=function(t){a$1&&a$1(t);var u=t.__c;if(u&&u.__H)try{u.__H.__.forEach(b$1);}catch(t){n.__e(t,u.__v);}};var x$1="function"==typeof requestAnimationFrame;function b$1(n){"function"==typeof n.u&&n.u();}function g$1(n){n.u=n.__();}function j$1(n,t){return !n||t.some(function(t,u){return t!==n[u]})}function k$1(n,t){return "function"==typeof t?t(n):t}

	var EMPTY$1 = {};

	function assign(obj, props) {
		// eslint-disable-next-line guard-for-in
		for (var i in props) {
			obj[i] = props[i];
		}
		return obj;
	}

	function exec(url, route, opts) {
		var reg = /(?:\?([^#]*))?(#.*)?$/,
			c = url.match(reg),
			matches = {},
			ret;
		if (c && c[1]) {
			var p = c[1].split('&');
			for (var i=0; i<p.length; i++) {
				var r = p[i].split('=');
				matches[decodeURIComponent(r[0])] = decodeURIComponent(r.slice(1).join('='));
			}
		}
		url = segmentize(url.replace(reg, ''));
		route = segmentize(route || '');
		var max = Math.max(url.length, route.length);
		for (var i$1=0; i$1<max; i$1++) {
			if (route[i$1] && route[i$1].charAt(0)===':') {
				var param = route[i$1].replace(/(^:|[+*?]+$)/g, ''),
					flags = (route[i$1].match(/[+*?]+$/) || EMPTY$1)[0] || '',
					plus = ~flags.indexOf('+'),
					star = ~flags.indexOf('*'),
					val = url[i$1] || '';
				if (!val && !star && (flags.indexOf('?')<0 || plus)) {
					ret = false;
					break;
				}
				matches[param] = decodeURIComponent(val);
				if (plus || star) {
					matches[param] = url.slice(i$1).map(decodeURIComponent).join('/');
					break;
				}
			}
			else if (route[i$1]!==url[i$1]) {
				ret = false;
				break;
			}
		}
		if (opts.default!==true && ret===false) { return false; }
		return matches;
	}

	function pathRankSort(a, b) {
		return (
			(a.rank < b.rank) ? 1 :
				(a.rank > b.rank) ? -1 :
					(a.index - b.index)
		);
	}

	// filter out VNodes without attributes (which are unrankeable), and add `index`/`rank` properties to be used in sorting.
	function prepareVNodeForRanking(vnode, index) {
		vnode.index = index;
		vnode.rank = rankChild(vnode);
		return vnode.props;
	}

	function segmentize(url) {
		return url.replace(/(^\/+|\/+$)/g, '').split('/');
	}

	function rankSegment(segment) {
		return segment.charAt(0)==':' ? (1 + '*+?'.indexOf(segment.charAt(segment.length-1))) || 4 : 5;
	}

	function rank(path) {
		return segmentize(path).map(rankSegment).join('');
	}

	function rankChild(vnode) {
		return vnode.props.default ? 0 : rank(vnode.props.path);
	}

	var customHistory = null;

	var ROUTERS = [];

	var subscribers = [];

	var EMPTY = {};

	function setUrl(url, type) {
		if ( type === void 0 ) type='push';

		if (customHistory && customHistory[type]) {
			customHistory[type](url);
		}
		else if (typeof history!=='undefined' && history[type+'State']) {
			history[type+'State'](null, null, url);
		}
	}


	function getCurrentUrl() {
		var url;
		if (customHistory && customHistory.location) {
			url = customHistory.location;
		}
		else if (customHistory && customHistory.getCurrentLocation) {
			url = customHistory.getCurrentLocation();
		}
		else {
			url = typeof location!=='undefined' ? location : EMPTY;
		}
		return ("" + (url.pathname || '') + (url.search || ''));
	}



	function route(url, replace) {
		if ( replace === void 0 ) replace=false;

		if (typeof url!=='string' && url.url) {
			replace = url.replace;
			url = url.url;
		}

		// only push URL into history if we can handle it
		if (canRoute(url)) {
			setUrl(url, replace ? 'replace' : 'push');
		}

		return routeTo(url);
	}


	/** Check if the given URL can be handled by any router instances. */
	function canRoute(url) {
		for (var i=ROUTERS.length; i--; ) {
			if (ROUTERS[i].canRoute(url)) { return true; }
		}
		return false;
	}


	/** Tell all router instances to handle the given URL.  */
	function routeTo(url) {
		var didRoute = false;
		for (var i=0; i<ROUTERS.length; i++) {
			if (ROUTERS[i].routeTo(url)===true) {
				didRoute = true;
			}
		}
		for (var i$1=subscribers.length; i$1--; ) {
			subscribers[i$1](url);
		}
		return didRoute;
	}


	function routeFromLink(node) {
		// only valid elements
		if (!node || !node.getAttribute) { return; }

		var href = node.getAttribute('href'),
			target = node.getAttribute('target');

		// ignore links with targets and non-path URLs
		if (!href || !href.match(/^\//g) || (target && !target.match(/^_?self$/i))) { return; }

		// attempt to route, if no match simply cede control to browser
		return route(href);
	}


	function handleLinkClick(e) {
		if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button!==0) { return; }
		routeFromLink(e.currentTarget || e.target || this);
		return prevent(e);
	}


	function prevent(e) {
		if (e) {
			if (e.stopImmediatePropagation) { e.stopImmediatePropagation(); }
			if (e.stopPropagation) { e.stopPropagation(); }
			e.preventDefault();
		}
		return false;
	}


	function delegateLinkHandler(e) {
		// ignore events the browser takes care of already:
		if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button!==0) { return; }

		var t = e.target;
		do {
			if (String(t.nodeName).toUpperCase()==='A' && t.getAttribute('href')) {
				if (t.hasAttribute('native')) { return; }
				// if link is handled by the router, prevent browser defaults
				if (routeFromLink(t)) {
					return prevent(e);
				}
			}
		} while ((t=t.parentNode));
	}


	var eventListenersInitialized = false;

	function initEventListeners() {
		if (eventListenersInitialized) { return; }

		if (typeof addEventListener==='function') {
			if (!customHistory) {
				addEventListener('popstate', function () {
					routeTo(getCurrentUrl());
				});
			}
			addEventListener('click', delegateLinkHandler);
		}
		eventListenersInitialized = true;
	}


	var Router = (function (Component$$1) {
		function Router(props) {
			Component$$1.call(this, props);
			if (props.history) {
				customHistory = props.history;
			}

			this.state = {
				url: props.url || getCurrentUrl()
			};

			initEventListeners();
		}

		if ( Component$$1 ) Router.__proto__ = Component$$1;
		Router.prototype = Object.create( Component$$1 && Component$$1.prototype );
		Router.prototype.constructor = Router;

		Router.prototype.shouldComponentUpdate = function shouldComponentUpdate (props) {
			if (props.static!==true) { return true; }
			return props.url!==this.props.url || props.onChange!==this.props.onChange;
		};

		/** Check if the given URL can be matched against any children */
		Router.prototype.canRoute = function canRoute (url) {
			var children = b(this.props.children);
			return this.getMatchingChildren(children, url, false).length > 0;
		};

		/** Re-render children with a new URL to match against. */
		Router.prototype.routeTo = function routeTo (url) {
			this.setState({ url: url });

			var didRoute = this.canRoute(url);

			// trigger a manual re-route if we're not in the middle of an update:
			if (!this.updating) { this.forceUpdate(); }

			return didRoute;
		};

		Router.prototype.componentWillMount = function componentWillMount () {
			ROUTERS.push(this);
			this.updating = true;
		};

		Router.prototype.componentDidMount = function componentDidMount () {
			var this$1 = this;

			if (customHistory) {
				this.unlisten = customHistory.listen(function (location) {
					this$1.routeTo(("" + (location.pathname || '') + (location.search || '')));
				});
			}
			this.updating = false;
		};

		Router.prototype.componentWillUnmount = function componentWillUnmount () {
			if (typeof this.unlisten==='function') { this.unlisten(); }
			ROUTERS.splice(ROUTERS.indexOf(this), 1);
		};

		Router.prototype.componentWillUpdate = function componentWillUpdate () {
			this.updating = true;
		};

		Router.prototype.componentDidUpdate = function componentDidUpdate () {
			this.updating = false;
		};

		Router.prototype.getMatchingChildren = function getMatchingChildren (children, url, invoke) {
			return children
				.filter(prepareVNodeForRanking)
				.sort(pathRankSort)
				.map( function (vnode) {
					var matches = exec(url, vnode.props.path, vnode.props);
					if (matches) {
						if (invoke !== false) {
							var newProps = { url: url, matches: matches };
							assign(newProps, matches);
							delete newProps.ref;
							delete newProps.key;
							return S(vnode, newProps);
						}
						return vnode;
					}
				}).filter(Boolean);
		};

		Router.prototype.render = function render (ref, ref$1) {
			var children = ref.children;
			var onChange = ref.onChange;
			var url = ref$1.url;

			var active = this.getMatchingChildren(b(children), url, true);

			var current = active[0] || null;

			var previous = this.previousUrl;
			if (url!==previous) {
				this.previousUrl = url;
				if (typeof onChange==='function') {
					onChange({
						router: this,
						url: url,
						previous: previous,
						active: active,
						current: current
					});
				}
			}

			return current;
		};

		return Router;
	}(d));

	var Link = function (props) { return (
		v('a', assign({ onClick: handleLinkClick }, props))
	); };

	var Route = function (props) { return v(props.component, props); };

	Router.subscribers = subscribers;
	Router.getCurrentUrl = getCurrentUrl;
	Router.route = route;
	Router.Router = Router;
	Router.Route = Route;
	Router.Link = Link;
	Router.exec = exec;

	var preactRouter_es = /*#__PURE__*/Object.freeze({
		__proto__: null,
		subscribers: subscribers,
		getCurrentUrl: getCurrentUrl,
		route: route,
		Router: Router,
		Route: Route,
		Link: Link,
		exec: exec,
		'default': Router
	});

	let e$2={data:""},t$2=t=>{if("undefined"!=typeof window){let e=t?t.querySelector("#_goober"):window._goober;return e||(e=(t||document.head).appendChild(document.createElement("style")),e.innerHTML=" ",e.id="_goober"),e.firstChild}return t||e$2},l$1=/(?:([A-Z0-9-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(})/gi,a$2=/\/\*[\s\S]*?\*\/|\s{2,}|\n/gm,n$1=(e,t)=>{let r,l="",a="",o="";for(let c in e){let s=e[c];"object"==typeof s?(r=t?t.replace(/([^,])+/g,e=>c.replace(/([^,])+/g,t=>/&/g.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):c,a+="@"==c[0]?"f"==c[1]?n$1(s,c):c+"{"+n$1(s,"k"==c[1]?"":t)+"}":n$1(s,r)):"@"==c[0]&&"i"==c[1]?l=c+" "+s+";":o+=n$1.p?n$1.p(c.replace(/[A-Z]/g,"-$&").toLowerCase(),s):c.replace(/[A-Z]/g,"-$&").toLowerCase()+":"+s+";";}return o[0]?(r=t?t+"{"+o+"}":o,l+r+a):l+a},o$2={},c$2=e=>{let t="";for(let r in e)t+=r+("object"==typeof e[r]?c$2(e[r]):e[r]);return t},s$1=(e,t,r,s,i)=>{let p="object"==typeof e?c$2(e):e,f=o$2[p]||(o$2[p]=(e=>{let t=0,r=e.length,l=11;for(;t<r;)l=101*l+e.charCodeAt(t++)>>>0;return "go"+l})(p));if(!o$2[f]){let t="object"==typeof e?e:(e=>{let t,r=[{}];for(;t=l$1.exec(e.replace(a$2,""));)t[4]&&r.shift(),t[3]?r.unshift(r[0][t[3]]=r[0][t[3]]||{}):t[4]||(r[0][t[1]]=t[2]);return r[0]})(e);o$2[f]=n$1(i?{["@keyframes "+f]:t}:t,r?"":"."+f);}return ((e,t,r)=>{-1==t.data.indexOf(e)&&(t.data=r?e+t.data:t.data+e);})(o$2[f],t,s),f},i$2=(e,t,r)=>e.reduce((e,l,a)=>{let o=t[a];if(o&&o.call){let e=o(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":n$1(e,""):e;}return e+l+(null==o?"":o)},"");function p$2(e){let r=this||{},l=e.call?e(r.p):e;return s$1(l.unshift?l.raw?i$2(l,[].slice.call(arguments,1),r.p):l.reduce((e,t)=>t?Object.assign(e,t.call?t(r.p):t):e,{}):l,t$2(r.target),r.g,r.o,r.k)}let f$2,u$2,d$1,g$2=p$2.bind({g:1}),b$2=p$2.bind({k:1});function h$1(e,t,r,l){n$1.p=t,f$2=e,u$2=r,d$1=l;}function m$2(e,t){let r=this||{};return function(){let l=arguments;function a(n,o){let c=Object.assign({},n),s=c.className||a.className;r.p=Object.assign({theme:u$2&&u$2()},c),r.o=/ *go\d+/g.test(s),c.className=p$2.apply(r,l)+(s?" "+s:""),t&&(c.ref=o);let i=c.as||e;return d$1&&i[0]&&d$1(c),f$2(i,c)}return t?t(a):a}}

	// //@ts-check
	let states = {};
	function setState(key, value) {
	  for (const hook of states[key].hooks) {
	    // console.log(hook);
	    hook(value);
	  }
	}
	function useStore(key, init_value) {
	  const [value, setValue] = m$1(init_value !== undefined ? init_value : (states[key] || {}).initState);

	  if (key in states) {
	    !~states[key].hooks.indexOf(setValue) && states[key].hooks.push(setValue);
	  } else states[key] = {
	    hooks: [setValue],
	    initState: init_value
	  };

	  return [value, setState.bind(null, key)];
	}
	function initStore(init_dict) {
	  for (const key in init_dict) {
	    states[key] = {
	      hooks: [],
	      initState: init_dict[key]
	    };
	  }
	}

	function getAugmentedNamespace(n) {
		if (n.__esModule) return n;
		var a = Object.defineProperty({}, '__esModule', {value: true});
		Object.keys(n).forEach(function (k) {
			var d = Object.getOwnPropertyDescriptor(n, k);
			Object.defineProperty(a, k, d.get ? d : {
				enumerable: true,
				get: function () {
					return n[k];
				}
			});
		});
		return a;
	}

	function createCommonjsModule(fn) {
	  var module = { exports: {} };
		return fn(module, module.exports), module.exports;
	}

	var _preact = /*@__PURE__*/getAugmentedNamespace(preact_module);

	var _preactRouter = /*@__PURE__*/getAugmentedNamespace(preactRouter_es);

	var match = createCommonjsModule(function (module, exports) {

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Link = exports.Match = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Match = exports.Match = function (_Component) {
		_inherits(Match, _Component);

		function Match() {
			var _temp, _this, _ret;

			_classCallCheck(this, Match);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.update = function (url) {
				_this.nextUrl = url;
				_this.setState({});
			}, _temp), _possibleConstructorReturn(_this, _ret);
		}

		Match.prototype.componentDidMount = function componentDidMount() {
			_preactRouter.subscribers.push(this.update);
		};

		Match.prototype.componentWillUnmount = function componentWillUnmount() {
			_preactRouter.subscribers.splice(_preactRouter.subscribers.indexOf(this.update) >>> 0, 1);
		};

		Match.prototype.render = function render(props) {
			var url = this.nextUrl || (0, _preactRouter.getCurrentUrl)(),
			    path = url.replace(/\?.+$/, '');
			this.nextUrl = null;
			return props.children({
				url: url,
				path: path,
				matches: (0, _preactRouter.exec)(path, props.path, {}) !== false
			});
		};

		return Match;
	}(_preact.Component);

	var Link = function Link(_ref) {
		var activeClassName = _ref.activeClassName,
		    path = _ref.path,
		    props = _objectWithoutProperties(_ref, ['activeClassName', 'path']);

		return (0, _preact.h)(
			Match,
			{ path: path || props.href },
			function (_ref2) {
				var matches = _ref2.matches;
				return (0, _preact.h)(_preactRouter.Link, _extends({}, props, { 'class': [props.class || props.className, matches && activeClassName].filter(Boolean).join(' ') }));
			}
		);
	};

	exports.Link = Link;
	exports.default = Match;

	Match.Link = Link;
	});

	var style = {"header":"style_header__2lFIG","active":"style_active__12geY"};

	// @ts-ignore
	// let r = '5'
	// @ts-ignore

	const Header = props => {
	  // @ts-ignore
	  const [r] = m$1('cls'); // console.log(style.header);
	  //@ts-ignore

	  return v("header", {
	    class: style.header
	  }, v("h1", null, "Polls App"), v("nav", null, v(match.Link, {
	    href: "/"
	  }, "Polls"), v(match.Link, {
	    href: "/results"
	  }, "Completed polls")));
	};

	//@ts-check

	const Polls = props => {
	  // const [text] = useState('minus')
	  // const [count, setCount] = useStore('count', 0)
	  // @ts-ignore
	  return v(p, null, v("h1", null, "Polls"), v("div", null, v("span", null, "some polls")));
	};

	//@ts-check

	const Polls$1 = props => {
	  const [text] = m$1('minus');
	  const [count, setCount] = useStore('count', 0); // @ts-ignore

	  return v(p, null, v("h1", null, "Polls"), v("div", null, v("span", null, "some results")));
	};

	//@ts-check

	const Polls$2 = props => {
	  const [text] = m$1('minus');
	  const [count, setCount] = useStore('count', 0); // @ts-ignore

	  return v(p, null, v("h1", null, "Polls"), v("div", null, v("span", null, "some poll")));
	};

	//@ts-check
	h$1(v);
	const Title = m$2("h1")`
  text-align: center;
  color: red;
`;
	const BtnClassName = p$2`
  background-color: lightgray;
`; // @ts-ignore

	const App = props => {
	  // const [message] = useState('Polling App')
	  // const [count, setCount] = useStore('count')
	  // const { dispatch, count } = useStoreon('count')
	  y$1(() => {
	    document.title = 'props.title777';
	  }, [props.title]); // @ts-ignore

	  return v(p, null, v(Header, null), v(Router, null, v(Polls, {
	    path: "/"
	  }), v(Polls$2, {
	    path: "/polls/:poll?"
	  }), v(Polls$1, {
	    path: "/results"
	  })));
	};

	//@ts-check
	initStore({
	  count: 9
	}); // @ts-ignore

	M(v(App, null), document.getElementById('root'));

}());
//# sourceMappingURL=bundle.js.map
