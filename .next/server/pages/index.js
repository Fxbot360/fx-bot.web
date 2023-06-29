module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");
exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");
var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");
let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};
function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser
  if (!IntersectionObserver) {
    return undefined;
  }
  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }
      const cb = listeners.get(entry.target);
      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}
const listenToIntersections = (el, cb) => {
  const observer = getObserver();
  if (!observer) {
    return () => {};
  }
  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }
    listeners.delete(el);
  };
};
function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch
  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character
  prefetched[href + '%' + as] = true;
}
function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey ||
  // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;
  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }
  e.preventDefault(); //  avoid scroll for urls with anchor refs
  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present
  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;
    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}
function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:
    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:
    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      if (key === 'as') {
        if (props[key] && typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: typeof props[key]
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && typeof props[key] !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const hasWarned = _react.default.useRef(false);
    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }
  const p = props.prefetch !== false;
  const [childElm, setChildElm] = _react.default.useState();
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';
  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router.resolveHref)(pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedHref
    };
  }, [pathname, props.href, props.as]);
  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];
      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);
  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag
  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error
  const child = _react.Children.only(children);
  const childProps = {
    ref: el => {
      if (el) setChildElm(el);
      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }
      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };
  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;
      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }
      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user
  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)(as);
  }
  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}
var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0; /**
                                             * Removes the trailing slash of a path if there is one. Preserves the root path `/`.
                                             */
function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
} /**
  * Normalizes the trailing slash of a path according to the `trailingSlash` option
  * in `next.config.js`.
  */
const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));
exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;
var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");
var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));
exports.withRouter = _withRouter.default; /* global window */
const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready(cb) {
    if (this.router) return cb();
    if (false) {}
  }
}; // Create public properties and methods of the router in the singletonRouter
const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it
Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }
});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;
      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});
function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }
  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.
var _default = singletonRouter; // Reexport the withRoute HOC
exports.default = _default;
function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.
const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance
exports.createRouter = createRouter;
function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};
  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful
      continue;
    }
    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it
  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports.default = withRouter;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");
function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }
  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;
  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }
  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt; /*
                        MIT License
                        Copyright (c) Jason Miller (https://jasonformat.com/)
                        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
                        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
                        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                        */ // This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file
function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;
var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");
var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");
var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));
var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");
var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");
var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");
var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));
var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");
var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} /* global __NEXT_DATA__ */ // tslint:disable:no-console
const basePath =  false || '';
function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}
function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}
function addBasePath(path) {
  // we only add the basepath on relative urls
  return basePath && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}
function delBasePath(path) {
  return path.slice(basePath.length) || '/';
} /**
  * Detects whether a given url is routable by the Next.js router (browser only).
  */
function isLocalURL(url) {
  if (url.startsWith('/')) return true;
  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
} /**
  * Resolves a given hyperlink with a certain router state (basePath not included).
  * Preserves absolute urls.
  */
function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);
  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href
    return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
  } catch (_) {
    return urlAsString;
  }
}
const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');
function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}
function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}
const manualScrollRestoration =  false && false;
function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }
      throw new Error(`Failed to load static props`);
    }
    return res.json();
  });
}
function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }
    throw err;
  });
}
class Router {
  /**
  * Map of all components loaded in `Router`
  */ // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.onPopState = e => {
      const state = e.state;
      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }
      if (!state.__N) {
        return;
      }
      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site
      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.
      if (this._bps && !this._bps(state)) {
        return;
      }
      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key
    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)
    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.
    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }
    this.components['/_app'] = {
      Component: App,
      styleSheets: [/* /_app does not need its stylesheets managed */]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch
    this.asPath =
    // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site
    this.isSsr = true;
    this.isFallback = isFallback;
    if (false) {}
  }
  reload() {
    window.location.reload();
  } /**
    * Go back in history
    */
  back() {
    window.history.back();
  } /**
    * Performs a `pushState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */
  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  } /**
    * Performs a `replaceState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */
  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }
  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }
    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry
    if (_utils.ST) {
      performance.mark('routeChange');
    }
    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }
    const cleanedAs = hasBasePath(as) ? delBasePath(as) : as;
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.
    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?
      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to
    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      searchParams
    } = parsed;
    parsed = this._resolveHref(parsed, pages);
    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    }
    const query = (0, _querystring.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1
    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url
    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }
    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly
    let resolvedAs = as;
    if (true) {
      resolvedAs = (0, _resolveRewrites.default)(as, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);
    }
    resolvedAs = delBasePath(resolvedAs);
    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);
        if (missingParams.length > 0) {
          if (true) {
            console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }
          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }
    Router.events.emit('routeChangeStart', as);
    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);
      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }
      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });
      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }
      if (false) {}
      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }
      throw err;
    }
  }
  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }
      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }
    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      },
      // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }
  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }
    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.
      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.
      throw buildCancellationError();
    }
    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };
      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }
      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }
  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];
      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;
      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");
        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }
      let dataHref;
      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG);
      }
      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component,
      // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }
  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  } /**
    * Callback to execute before replacing router state
    * @param cb callback to be executed
    */
  beforePopState(cb) {
    this._bps = cb;
  }
  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same
    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change
    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.
    return oldHash !== newHash;
  }
  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value
    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found
    const idEl = document.getElementById(hash);
    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers
    const nameEl = document.getElementsByName(hash)[0];
    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }
  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  _resolveHref(parsedHref, pages) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _denormalizePagePath.denormalizePagePath)(delBasePath(pathname));
    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes
    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = addBasePath(page);
          return true;
        }
      });
    }
    return parsedHref;
  } /**
    * Prefetch page code, you may wait for the data during page rendering.
    * This feature only works in production!
    * @param url the href of prefetched page
    * @param asPath the as path of the prefetched page
    */
  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);
    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries
    if (true) {
      return;
    }
    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }
  async fetchComponent(route) {
    let cancelled = false;
    const cancel = this.clc = () => {
      cancelled = true;
    };
    const componentResult = await this.pageLoader.loadPage(route);
    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }
    if (cancel === this.clc) {
      this.clc = null;
    }
    return componentResult;
  }
  _getData(fn) {
    let cancelled = false;
    const cancel = () => {
      cancelled = true;
    };
    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }
      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }
      return data;
    });
  }
  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);
    if (false) {}
    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }
  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }
  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];
    const AppTree = this._wrapApp(App);
    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }
  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }
  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }
}
exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;
var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function () {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);
    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }
  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }
  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';
  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }
  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string
const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;
function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;
var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");
const DUMMY_BASE = new URL(true ? 'http://n' : undefined); /**
                                                                                 * Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
                                                                                 * (e.g. `./hello`) then at least base must be.
                                                                                 * Absolute urls are rejected with one exception, in the browser, absolute urls that are on
                                                                                 * the current origin will be parsed as relative
                                                                                 */
function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);
  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }
  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;
var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));
exports.pathToRegexp = pathToRegexp;
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function () {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
const matcherOptions = {
  sensitive: false,
  delimiter: '/',
  decode: decodeParam
};
exports.matcherOptions = matcherOptions;
const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});
exports.customRouteMatcherOptions = customRouteMatcherOptions;
var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys, matcherOptions);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);
      if (!res) {
        return false;
      }
      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }
      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};
exports.default = _default;
function decodeParam(param) {
  try {
    return decodeURIComponent(param);
  } catch (_) {
    const err = new Error('failed to decode param');
    err.code = 'DECODE_FAILED';
    throw err;
  }
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
exports.__esModule = true;
exports.default = prepareDestination;
var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");
var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function () {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};
  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      searchParams,
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }
  parsedDestination.query = (0, _querystring.searchParamsToUrlQuery)(parsedDestination.searchParams);
  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath,
  // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values
  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;
    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }
    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path
  const paramKeys = Object.keys(params);
  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }
  const shouldAddBasePath = destination.startsWith('/') && basePath;
  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${encodeURI(destinationCompiler(params))}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
    delete parsedDestination.searchParams;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }
    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values
  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;
function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}
function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, item));
    } else {
      result.set(key, value);
    }
  });
  return result;
}
function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;
var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));
var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
const customRouteMatcher = (0, _pathMatch.default)(true);
function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);
      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }
        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);
        if (pages.includes(asPath)) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain
        const resolvedHref = resolveHref(asPath);
        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }
  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;
function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);
    if (!routeMatch) {
      return false;
    }
    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];
      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes
function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}
function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');
  if (optional) {
    param = param.slice(1, -1);
  }
  const repeat = param.startsWith('...');
  if (repeat) {
    param = param.slice(3);
  }
  return {
    key: param,
    repeat,
    optional
  };
}
function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest
  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters
    const getSafeRouteKey = () => {
      let routeKey = '';
      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;
        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }
      return routeKey;
    };
    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex
        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key
        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }
        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }
        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }
        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }
  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;
var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js"); /**
                                                       * Utils
                                                       */
function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }
    return result;
  };
}
function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}
function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
  return res.finished || res.headersSent;
}
async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;
    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`
  const res = ctx.res || ctx.ctx && ctx.ctx.res;
  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }
    return {};
  }
  const props = await App.getInitialProps(ctx);
  if (res && isResSent(res)) {
    return props;
  }
  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }
  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }
  return props;
}
const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;
function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }
  return (0, _formatUrl.formatUrl)(url);
}
const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./src/assets/accordion-arrow-e.svg":
/*!******************************************!*\
  !*** ./src/assets/accordion-arrow-e.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iOSIgdmlld0JveD0iMCAwIDE2IDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNOC4zMjg0MSA4Ljc3NDIxQzguMDU5NjUgOC43NjgyMiA3Ljc5MzIxIDguNjU5NjIgNy41OTI4NiA4LjQ1MDI0TDEuMjg4NDUgMS44NTg0NEMwLjg4NzQwNCAxLjQzOTEyIDAuOTAyMjIgMC43NzQwODEgMS4zMjE1NCAwLjM3MzIwNEMxLjc0MDY5IC0wLjAyNzY3NzEgMi40MDU1OSAtMC4wMTI4NjMzIDIuODA2NjcgMC40MDYyOTJMOC4zODQ5IDYuMjM5MDhMMTQuMjE3NCAwLjY2MDcxNkMxNC42MzY3IDAuMjU5ODM5IDE1LjMwMTUgMC4yNzQ2NTEgMTUuNzAyNCAwLjY5MzgwMkMxNi4xMDM2IDEuMTEyOTYgMTYuMDg4OCAxLjc3OCAxNS42NjkzIDIuMTc5MDRMOS4wNzc2NiA4LjQ4MzUyQzguODY4MDkgOC42ODM4IDguNTk3MDggOC43ODAyIDguMzI4NDEgOC43NzQyMVoiIGZpbGw9IiMwMjA3M0UiLz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "./src/assets/accordion-arrow.svg":
/*!****************************************!*\
  !*** ./src/assets/accordion-arrow.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDkgMTUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNOC42OTg4OCA3LjUwMDAzQzguNjk4ODggNy43Njg4NiA4LjU5NjIzIDguMDM3NjUgOC4zOTEzNyA4LjI0MjYxTDEuOTQxNjMgMTQuNjkyM0MxLjUzMTM1IDE1LjEwMjYgMC44NjYxNDMgMTUuMTAyNiAwLjQ1NjAyNiAxNC42OTIzQzAuMDQ1OTA4MSAxNC4yODIyIDAuMDQ1OTA4MSAxMy42MTcxIDAuNDU2MDI2IDEzLjIwNjhMNi4xNjMxMSA3LjUwMDAzTDAuNDU2MjI1IDEuNzkzMjRDMC4wNDYxMDc0IDEuMzgyOTUgMC4wNDYxMDc0IDAuNzE3OTQ4IDAuNDU2MjI1IDAuMzA3ODYzQzAuODY2MzQzIC0wLjEwMjYxOSAxLjUzMTU1IC0wLjEwMjYxOSAxLjk0MTgzIDAuMzA3ODYzTDguMzkxNTcgNi43NTc0NEM4LjU5NjQ2IDYuOTYyNSA4LjY5ODg4IDcuMjMxMjkgOC42OTg4OCA3LjUwMDAzWiIgZmlsbD0iIzAyMDczRSIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ "./src/assets/arrow-angle.svg":
/*!************************************!*\
  !*** ./src/assets/arrow-angle.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSIxMSIgdmlld0JveD0iMCAwIDYgMTEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNNS44NDg3MiA1Ljg0NjcxQzUuODQ4NzIgNi4wMjU5MyA1Ljc4MDI5IDYuMjA1MTIgNS42NDM3MiA2LjM0MTc2TDEuMzQzOSAxMC42NDE1QzEuMDcwMzggMTAuOTE1MSAwLjYyNjkwNyAxMC45MTUxIDAuMzUzNDk2IDEwLjY0MTVDMC4wODAwODQ3IDEwLjM2ODEgMC4wODAwODQ3IDkuOTI0NzUgMC4zNTM0OTYgOS42NTEyTDQuMTU4MjEgNS44NDY3MUwwLjM1MzYyOSAyLjA0MjE5QzAuMDgwMjE3NiAxLjc2ODY3IDAuMDgwMjE3NiAxLjMyNTMzIDAuMzUzNjI5IDEuMDUxOTRDMC42MjcwNCAwLjc3ODI4OSAxLjA3MDUxIDAuNzc4Mjg5IDEuMzQ0MDMgMS4wNTE5NEw1LjY0Mzg1IDUuMzUxNjVDNS43ODA0NCA1LjQ4ODM2IDUuODQ4NzIgNS42Njc1NSA1Ljg0ODcyIDUuODQ2NzFaIiBmaWxsPSIjNEY5NkZGIi8+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ "./src/assets/banner-icon-1-1.svg":
/*!****************************************!*\
  !*** ./src/assets/banner-icon-1-1.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDMiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0MyA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xMS4yIDEzLjM5MTFMMCAxNy45OTExTDEyLjUgNDcuOTkxMUw0Mi41IDM1LjQ5MTFMMzcuNyAyMy44OTExQzM3LjYgMjMuNzkxMSAzNy42IDIzLjc5MTEgMzcuNSAyMy43OTExQzM3LjQgMjMuNzkxMSAzNy40IDIzLjY5MTEgMzcuMyAyMy42OTExQzM3LjIgMjMuNTkxMSAzNy4xIDIzLjU5MTEgMzYuOSAyMy41OTExQzM2LjkgMjMuNTkxMSAzNi45IDIzLjU5MTEgMzYuOCAyMy41OTExSDM2LjdIMzYuNkgzNi41QzM2LjQgMjMuNTkxMSAzNi40IDIzLjU5MTEgMzYuMyAyMy41OTExSDM2LjJDMzYuMSAyMy41OTExIDM2IDIzLjU5MTEgMzUuOSAyMy42OTExQzM1LjQgMjMuODkxMSAzNS4xIDI0LjI5MTEgMzUgMjQuNjkxMUMzNC42IDI2LjE5MTEgMzMuNSAyNy41OTExIDMxLjkgMjguMTkxMUMyOS4yIDI5LjI5MTEgMjYuMSAyNy45OTExIDI0LjkgMjUuMjkxMUMyMy44IDIyLjU5MTEgMjUuMSAxOS40OTExIDI3LjggMTguMjkxMUMyOS40IDE3LjU5MTEgMzEuMSAxNy43OTExIDMyLjUgMTguNTkxMUMzMi45IDE4Ljc5MTEgMzMuNCAxOC44OTExIDMzLjkgMTguNjkxMUMzNCAxOC42OTExIDM0LjEgMTguNTkxMSAzNC4xIDE4LjU5MTFDMzQuMSAxOC41OTExIDM0LjIgMTguNTkxMSAzNC4yIDE4LjQ5MTFMMzQuMyAxOC4zOTExTDM0LjQgMTguMjkxMUwzNC41IDE4LjE5MTFMMzQuNiAxOC4wOTExQzM0LjYgMTguMDkxMSAzNC42IDE4LjA5MTEgMzQuNiAxNy45OTExQzM0LjcgMTcuODkxMSAzNC43IDE3Ljc5MTEgMzQuOCAxNy42OTExQzM0LjggMTcuNTkxMSAzNC44IDE3LjU5MTEgMzQuOCAxNy40OTExQzM0LjggMTcuMzkxMSAzNC44IDE3LjM5MTEgMzQuOCAxNy4yOTExTDMwIDUuNTkxMTFMMTguOCAxMC4yOTExQzE4IDEwLjQ5MTEgMTcuMiAxMC4xOTExIDE2LjkgOS4zOTExMUMxNi43IDguODkxMTEgMTYuOCA4LjM5MTEyIDE3IDcuOTkxMTJDMTcuOCA2LjU5MTExIDE4IDQuODkxMTEgMTcuMyAzLjI5MTExQzE2LjIgMC41OTExMTUgMTMuMSAtMC43MDg4ODUgMTAuMyAwLjM5MTExNUM3LjYgMS40OTExMSA2LjMgNC41OTExMSA3LjQgNy4zOTExMkM4IDguOTkxMTIgOS40IDkuOTkxMTEgMTAuOSAxMC40OTExQzExLjMgMTAuNTkxMSAxMS43IDEwLjg5MTEgMTEuOSAxMS4zOTExQzEyLjMgMTIuMDkxMSAxMS45IDEyLjk5MTEgMTEuMiAxMy4zOTExWiIgZmlsbD0iI0RBRTJFOCIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ "./src/assets/banner-icon-1-2.svg":
/*!****************************************!*\
  !*** ./src/assets/banner-icon-1-2.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA1MyA0NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik00OS4wMTQ2IDI0LjQ5OTZDNDguNzkzNiAyNS40NzQ5IDQ3LjgzNjYgMjYuMDc4MyA0Ni44NjEzIDI1Ljg1NzNMNDMuMzUwMyAyNS4wNjE3TDQxLjgyNTUgMzEuNzkxMUwzNC44NjU0IDIzLjEzOTFMMjMuNDU0NyAyMC41NTM0QzIyLjQ3OTQgMjAuMzMyNSAyMS44NzYgMTkuMzc1NCAyMi4wOTcgMTguNDAwMkwyNS42NzcxIDIuNjAwNzFDMjUuODk4MSAxLjYyNTQzIDI2Ljg1NTEgMS4wMjIwMSAyNy44MzA0IDEuMjQzMDFMNTEuMjM3IDYuNTQ2ODhDNTIuMjEyMyA2Ljc2Nzg4IDUyLjgxNTcgNy43MjQ4OSA1Mi41OTQ3IDguNzAwMTdMNDkuMDE0NiAyNC40OTk2WiIgZmlsbD0iI0RBRTJFOCIvPg0KPHBhdGggZD0iTTUuMjY2NiAzOC4zNzQ4TDcuMjU1NTYgMjkuNTk3M0w1LjY5NTEyIDI5LjI0MzdDMy42NDcwNCAyOC43Nzk2IDIuMzY0NzYgMjYuNzQ2IDIuODI4ODUgMjQuNjk3OUw2LjQwODk3IDguODk4NDNDNi44NzMwNiA2Ljg1MDM1IDguOTA2NzIgNS41NjgwNyAxMC45NTQ4IDYuMDMyMTZMMzQuMzYxNCAxMS4zMzZDMzYuNDA5NSAxMS44MDAxIDM3LjY5MTcgMTMuODMzOCAzNy4yMjc3IDE1Ljg4MTlMMzMuNjY5NiAzMS41ODM4QzMzLjIwNTYgMzMuNjMxOSAzMS4xNzE5IDM0LjkxNDEgMjkuMTIzOCAzNC40NTAxTDE4LjM5NTggMzIuMDE5MUw1LjI2NjYgMzguMzc0OFpNNS43OTYyNSAyNi4yODkzTDEyLjA2MjcgMjcuNDgyN0wxMC4wMDIgMzMuMTY0TDE4LjAxMTkgMjguODMwN0wzMC45MTAzIDMxLjUyNjlMMzQuNDAyIDE0LjExNzVMMTAuMjg4IDguODc5OTRMNS43OTYyNSAyNi4yODkzWiIgZmlsbD0iI0RBRTJFOCIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ "./src/assets/banner-icon-1-3.svg":
/*!****************************************!*\
  !*** ./src/assets/banner-icon-1-3.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzM5IiBoZWlnaHQ9IjQ1NiIgdmlld0JveD0iMCAwIDMzOSA0NTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNMzAxLjg0IDYwLjI4NDNMMzAzLjc5OCA1NS45MDIxQzI4Ny42MTggNTkuMTIxNyAyNzMuNDAxIDY1LjI2MjIgMjYxLjQ1MiA3NC4zMTA4QzI0NC42IDg3LjA2NCAyMzYuMjYzIDEwMi41MTYgMjMyLjIyMyAxMTMuMjI3QzIzMC40MzEgMTE4LjAwMiAyMjkuMDk3IDEyMi44OTggMjI4LjMxNCAxMjcuNjE0QzIyMi42MzIgMTI3LjM3MyAyMTYuMjYyIDEyOC4zMzYgMjA5LjUgMTMwLjQ2NUMxOTYuOTk5IDEzNC4zOTIgMTg4LjE2NiAxNDQuMjU5IDE4MS42NTQgMTYxLjUwNkMxNzUuOSAxNzYuNzcxIDE3Mi41NjkgMTk1Ljg4NyAxNjguNzAxIDIxOC4wMkMxNjUuMTIgMjM4LjU1NiAxNjEuMDYgMjYxLjgzNyAxNTQuMjggMjg0LjYwNkMxNDYuNTY1IDMxMC42MTYgMTM2LjQ0NyAzMzIuMTA2IDEyMy4zODkgMzUwLjI4QzExMi41OTggMzY1LjI5NSA5OS42NzMzIDM3Ny4xIDg0Ljk5MzYgMzg1LjM3NUM3Mi4yMTA4IDM5Mi41NjEgNTcuNjg2MiAzOTcuMjg3IDQxLjc3MiAzOTkuNDMzQzI3Ljc4MzcgNDAxLjMzNCAxMy43MjU2IDQwMS4yODcgMC4wMTQ4Nzk5IDM5OS44NDJMMTAuMzk2MyA0MDQuNDgyQzIwLjg5NTQgNDA1LjEzIDMxLjYyNjggNDA0LjczMyA0Mi4zMTk0IDQwMy4yNzVDNTguNzE4NiA0MDEuMDQ3IDczLjcyNDMgMzk2LjE1MyA4Ni45MzI4IDM4OC43MzJDMTAyLjExNSAzODAuMTkyIDExNS40NDIgMzY4LjAxMyAxMjYuNTcgMzUyLjUzMUMxMzkuODc0IDMzMy45OTkgMTUwLjE3NSAzMTIuMTQ1IDE1OC4wMiAyODUuNzAyQzE2NC44NTEgMjYyLjcyMyAxNjguOTQxIDIzOS4zMjggMTcyLjUyNiAyMTguNjg3QzE3Ni4zNSAxOTYuNzQ3IDE3OS42NzEgMTc3Ljc5NyAxODUuMjkzIDE2Mi44NzdDMTkxLjMzNSAxNDYuODI1IDE5OS40MDcgMTM3LjcwNCAyMTAuNjY5IDEzNC4xNTlDMjE3LjY4MSAxMzEuOTUgMjIzLjM0MiAxMzEuMzMgMjI3Ljc2MyAxMzEuNDc2QzIyNy41MzggMTMzLjY1MyAyMjcuNDI0IDEzNS43NzMgMjI3LjQzNiAxMzcuOEMyMjcuNTA0IDE0NS4xNTMgMjI5LjI0MyAxNTAuODY5IDIzMi4zMjcgMTUzLjg2NEMyMzQuNzk5IDE1Ni4yNjggMjM4LjA0NCAxNTYuODQ2IDI0MS40NDYgMTU1LjQ1QzI0NC45OTMgMTU0LjAxMyAyNDcuNjA0IDE1MS43MSAyNDguOTk5IDE0OC43NzlDMjUwLjMzOSAxNDUuOTcyIDI1MC40NTYgMTQyLjc0NiAyNDkuMzQyIDEzOS42OTRDMjQ3LjUzMyAxMzQuNzU2IDI0Mi44MzcgMTMwLjgyNyAyMzYuNDI2IDEyOC45MTlDMjM1LjA3MiAxMjguNTA2IDIzMy42NjMgMTI4LjIxNyAyMzIuMTg3IDEyNy45ODNDMjMyLjk1IDEyMy41OTggMjM0LjE4NyAxMTkuMDY0IDIzNS44NjIgMTE0LjU5N0MyMzkuNzMxIDEwNC4zNjQgMjQ3LjY4IDg5LjU4OTkgMjYzLjc5IDc3LjM5ODhDMjc0LjYxOCA2OS4yMzI4IDI4Ny4zNjIgNjMuNTE5NiAzMDEuODQgNjAuMjg0M1pNMjM1LjMyOSAxMzIuNjY1QzI0MC41MjkgMTM0LjIyMyAyNDQuMzEzIDEzNy4yNzYgMjQ1LjY4NiAxNDEuMDRDMjQ3LjMxOSAxNDUuNTU5IDI0NS4wNzYgMTQ5LjgxNCAyMzkuOTYgMTUxLjg5MUMyMzguMDA2IDE1Mi42NzggMjM2LjM4OSAxNTIuNDIzIDIzNS4wNDggMTUxLjEyMkMyMzIuNzU4IDE0OC44ODUgMjMxLjM5OCAxNDQuMDQxIDIzMS4zMzcgMTM3LjgyQzIzMS4zMTIgMTM1LjkxNCAyMzEuNDE1IDEzMy45MTcgMjMxLjY1NCAxMzEuODUyQzIzMy4wNTkgMTMyLjA1NSAyMzQuMjc2IDEzMi4zNDMgMjM1LjMyOSAxMzIuNjY1WiIgZmlsbD0iI0RBRTJFOCIvPg0KPHBhdGggZD0iTTMzOC43NDkgNDkuNzQ2TDI4NC44ODkgMzguMjUxNUwyOTIuNjM3IDUyLjY1ODNMMzI1LjA1NCA1MS42NjkzTDI5NS40OTggNTcuOTc3NEwyOTUuNTA1IDU3Ljk5MTJMMjk1LjQ5NSA1Ny45NzUyTDI4Ni43NTEgNjcuODkxN0wyOTkuODQxIDY2LjA1MzRMMzA1LjM0NiA3Ni4yODgyTDMzOC43NDkgNDkuNzQ2WiIgZmlsbD0iI0RBRTJFOCIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ "./src/assets/banner-icon-1-4.svg":
/*!****************************************!*\
  !*** ./src/assets/banner-icon-1-4.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzM4IiBoZWlnaHQ9IjMxNiIgdmlld0JveD0iMCAwIDMzOCAzMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNMTE4LjMyOCA4NS44MjgxQzExMy40MzMgNzQuMzIwNSAxMDYuMDEgNjQuMDM1IDk2Ljg2NjMgNTYuMTE5Qzg5LjA4MzcgNDkuMzUzIDc5Ljc0OCA0NC4wODIxIDY5LjY5MDYgNDAuNzAzNkw3MS43NjkxIDM3LjE3NzNDODIuMTQgNDAuODEgOTEuNTE0MSA0Ni4xNzMxIDk5LjQ5MjkgNTMuMDc3OUMxMDkuMDkyIDYxLjQwMTIgMTE2Ljg3NCA3Mi4xNzcgMTIyLjAxNyA4NC4yNDc2QzEyNy4xNTkgOTYuMzE4MiAxMjkuNTAyIDEwOS40MDQgMTI4LjgyOSAxMjIuMTAzQzEyOC42NDQgMTI1LjY4IDEyOC4yMTMgMTI5LjIwMyAxMjcuNTYxIDEzMi42NjdDMTM4Ljc4NSAxNDcgMTQ1Ljg3MSAxNjMuODMyIDE1MS44MTkgMTgwLjA0QzE1My4yNzMgMTgzLjk4IDE1NC42OTQgMTg4LjAxNiAxNTYuMDYzIDE5MS45MDVDMTYxLjEwMiAyMDYuMTE3IDE2Ni4zMDUgMjIwLjc5NiAxNzMuNjE1IDIzNC4xNDRDMTgxLjg2MSAyNDkuMjAzIDE5My4yODMgMjYzLjAwNCAyMDYuNjQ4IDI3NC4wNThDMjIwLjM4NSAyODUuNDIzIDIzNS42NiAyOTMuNzA4IDI1Mi4wNiAyOTguNjY5QzI1OC43OTMgMzAwLjY5MSAyNjUuNyAzMDIuMTQyIDI3Mi42MTIgMzAyLjk5NUwyNzAuNDExIDMwNi43MjhDMjYzLjc4MyAzMDUuNzg3IDI1Ny4zMDEgMzA0LjQwMSAyNTAuOTEyIDMwMi40NjZDMjQwLjkxOSAyOTkuNDUgMjMxLjMxNCAyOTUuMjI1IDIyMi4yMzQgMjg5Ljg3M0MyMTUuOTQgMjg2LjE2NCAyMDkuODgyIDI4MS44OTcgMjA0LjEgMjc3LjEyMkMxOTAuMzYzIDI2NS43NTcgMTc4LjYwMyAyNTEuNTQ3IDE3MC4xMSAyMzYuMDQyQzE2Mi42NTggMjIyLjQyNCAxNTcuMzg1IDIwNy41ODggMTUyLjMxIDE5My4yNEMxNTAuOTQyIDE4OS4zNSAxNDkuNTExIDE4NS4zMzIgMTQ4LjA2MyAxODEuNDE5QzE0Mi41OCAxNjYuNTA1IDEzNi4xNTYgMTUxLjEwNiAxMjYuNDAyIDEzNy43NzhDMTIzLjA0IDE1MC42NzcgMTE2LjQ2OCAxNjIuMTAxIDEwNy40MDEgMTcwLjQwOEMxMDAuNjgzIDE3Ni41NzcgOTIuNDIxNCAxODEuMDAyIDgzLjUxNjIgMTgzLjIxN0M3NC4yODMgMTg1LjUxNiA2NC45ODU2IDE4NS4yNTEgNTYuNjE2OSAxODIuNDI4QzQ4LjA0NTkgMTc5LjU1NCA0MC40MDcxIDE3My42ODQgMzUuMDU0NyAxNjUuOTRDMjkuNTczOSAxNTcuOTgxIDI3LjEwNjcgMTQ4Ljc2MiAyOC4wNzMyIDEzOS45NjhDMjkuMTM4OCAxMzAuMjU5IDM0LjMzNzYgMTIxLjA4NSA0Mi43MTAyIDExNC4xNTNDNTAuNjI2OSAxMDcuNjAxIDYwLjg4NDEgMTAzLjU2NCA3MC44Nzc2IDEwMy4wOEM4MC41NTYzIDEwMi42MiA5MC4zNTQ4IDEwNC44MjYgOTkuOTQ3MSAxMDkuNjIyQzEwOC42MzIgMTEzLjk1MyAxMTYuODQzIDEyMC4zNDYgMTIzLjY5OSAxMjguMDk1QzEyMy44NDcgMTI4LjI3NiAxMjQuMDA2IDEyOC40MzkgMTI0LjE1NSAxMjguNjE5QzEyNC40NzcgMTI2LjQyMiAxMjQuNjg1IDEyNC4xOCAxMjQuODA1IDEyMS45MzNDMTI1LjQ2NSAxMDkuODA2IDEyMy4yMjMgOTcuMzM1NyAxMTguMzI4IDg1LjgyODFaTTEyMC43MzMgMTMwLjcyOEMxMTQuMjA5IDEyMy4zNiAxMDYuNDA1IDExNy4yOTkgOTguMTcwMSAxMTMuMTg3Qzg5LjE4MjggMTA4LjcwMSA4MC4wNjMzIDEwNi42NCA3MS4wNzYgMTA3LjA2OEM2MS45NDQ5IDEwNy41MDQgNTIuNTM0MSAxMTEuMjA1IDQ1LjI4MDkgMTE3LjIyMUMzNy43MTQ3IDEyMy40OTMgMzMuMDE4OSAxMzEuNzM1IDMyLjA2MTcgMTQwLjM5NUMzMC4yOTQyIDE1Ni4zNjYgNDEuNjU5NyAxNzMuMTcxIDU3LjkxNjQgMTc4LjY1MUM2NS41NTA0IDE4MS4yMjYgNzQuMDgwNyAxODEuNDU2IDgyLjU3NTggMTc5LjM0OEM5MC44MzUxIDE3Ny4yODYgOTguNDgzMSAxNzMuMTk1IDEwNC43MjIgMTY3LjQ4NUMxMTMuOTIyIDE1OS4wNyAxMjAuMzk0IDE0Ny4xNDcgMTIzLjI3MyAxMzMuNzMyQzEyMi40NSAxMzIuNjkgMTIxLjU5NyAxMzEuNzAxIDEyMC43MzMgMTMwLjcyOFoiIGZpbGw9IiNEQUUyRTgiLz4NCjxwYXRoIGQ9Ik0zMy45OTkzIDI2LjYwNTFMODUuMTMxNCAyMC4zNDM4TDc2LjcyMjMgMzMuMTI3MUw0Ni42MDA0IDI5LjUyODJMNzMuNjE3NyAzNy44NDY4TDczLjYwOTcgMzcuODU5TDczLjYyMDIgMzcuODQ0OUw4MC45NDgyIDQ3LjgwNjZMNjguOTAzNiA0NS4wMTI3TDYyLjkyOTggNTQuMDk0MUwzMy45OTkzIDI2LjYwNTFaIiBmaWxsPSIjREFFMkU4Ii8+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ "./src/assets/banner-icon-1-5.svg":
/*!****************************************!*\
  !*** ./src/assets/banner-icon-1-5.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/banner-icon-1-5-315098ec5365f1860c85d4ab36927ef6.svg";

/***/ }),

/***/ "./src/assets/banner-icon-1-6.svg":
/*!****************************************!*\
  !*** ./src/assets/banner-icon-1-6.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/banner-icon-1-6-febc6856267d115ff67a15ac6bd1d849.svg";

/***/ }),

/***/ "./src/assets/banner-logo.png":
/*!************************************!*\
  !*** ./src/assets/banner-logo.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/banner-logo-00c09951d3f430a03872b4873fbe3193.png";

/***/ }),

/***/ "./src/assets/banner-mockup.png":
/*!**************************************!*\
  !*** ./src/assets/banner-mockup.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/banner-mockup-4772a2f82c0b6aed38b4842d6f446c50.png";

/***/ }),

/***/ "./src/assets/blog-1-1.png":
/*!*********************************!*\
  !*** ./src/assets/blog-1-1.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/blog-1-1-d86f9e76171d4076536f2b5bd12ea54c.png";

/***/ }),

/***/ "./src/assets/blog-1-2.png":
/*!*********************************!*\
  !*** ./src/assets/blog-1-2.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/blog-1-2-c2b2210ffbf19096a63e88517589962a.png";

/***/ }),

/***/ "./src/assets/blog-1-3.png":
/*!*********************************!*\
  !*** ./src/assets/blog-1-3.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/blog-1-3-00722a86a6fc65f08db8c1d043eb8121.png";

/***/ }),

/***/ "./src/assets/blog-1-4.png":
/*!*********************************!*\
  !*** ./src/assets/blog-1-4.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/blog-1-4-0b516e1514e67dc24dec5e71bd8f52e7.png";

/***/ }),

/***/ "./src/assets/call-image.png":
/*!***********************************!*\
  !*** ./src/assets/call-image.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/call-image-0322bd43c52fb16fe81fdc165368f6b9.png";

/***/ }),

/***/ "./src/assets/dot-pattern.svg":
/*!************************************!*\
  !*** ./src/assets/dot-pattern.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/dot-pattern-e61cd58476ba8deb6ab1d4746fe5b838.svg";

/***/ }),

/***/ "./src/assets/jackpot-1-1.png":
/*!************************************!*\
  !*** ./src/assets/jackpot-1-1.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/jackpot-1-2.png":
/*!************************************!*\
  !*** ./src/assets/jackpot-1-2.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/jackpot.png":
/*!********************************!*\
  !*** ./src/assets/jackpot.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/jackpot-e752e2aa03dc63aee0530f2af095be56.png";

/***/ }),

/***/ "./src/assets/logo-dark.svg":
/*!**********************************!*\
  !*** ./src/assets/logo-dark.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-dark-2e7ada7c286ae36e144f51c220fc6f28.svg";

/***/ }),

/***/ "./src/assets/logo-light.svg":
/*!***********************************!*\
  !*** ./src/assets/logo-light.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-light-2e7ada7c286ae36e144f51c220fc6f28.svg";

/***/ }),

/***/ "./src/assets/price-arrow.svg":
/*!************************************!*\
  !*** ./src/assets/price-arrow.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAyMCAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xLjEyNDIyIDEwLjI2MjRMMS4wOTMgMTAuMjU1NkgxNC40NzYxTDEwLjI2ODkgMTQuNDcyQzEwLjA2MjkgMTQuNjc3OSA5Ljk0OTkxIDE0Ljk1NjcgOS45NDk5MSAxNS4yNDk0QzkuOTQ5OTEgMTUuNTQyMSAxMC4wNjI5IDE1LjgxOSAxMC4yNjg5IDE2LjAyNTRMMTAuOTIzNiAxNi42ODAzQzExLjEyOTQgMTYuODg2MiAxMS40MDM3IDE3IDExLjY5NjMgMTdDMTEuOTg4OSAxNyAxMi4yNjM0IDE2Ljg4NyAxMi40NjkzIDE2LjY4MTFMMTkuNjgxMSA5LjQ2OTkyQzE5Ljg4NzggOS4yNjMyNSAyMC4wMDA4IDguOTg3OTcgMjAgOC42OTUxMkMyMC4wMDA4IDguNDAwNjUgMTkuODg3OCA4LjEyNTIgMTkuNjgxMSA3LjkxODg2TDEyLjQ2OTMgMC43MDY5OTJDMTIuMjYzNCAwLjUwMTMwMSAxMS45ODkxIDAuMzg4MTMgMTEuNjk2MyAwLjM4ODEzQzExLjQwMzcgMC4zODgxMyAxMS4xMjk0IDAuNTAxNDYzIDEwLjkyMzYgMC43MDY5OTJMMTAuMjY4OSAxLjM2MTk1QzEwLjA2MjkgMS41Njc0OCA5Ljk0OTkxIDEuODQxOTUgOS45NDk5MSAyLjEzNDYzQzkuOTQ5OTEgMi40MjcxNSAxMC4wNjI5IDIuNjg3MTUgMTAuMjY4OSAyLjg5Mjg1TDE0LjUyMzYgNy4xMzI4NEgxLjEwOTI2QzAuNTA2NSA3LjEzMjg0IC00LjIxNzE1ZS0wNiA3LjY1MjM2IC00LjIxNzE1ZS0wNiA4LjI1NDhWOS4xODExNEMtNC4yMTcxNWUtMDYgOS43ODM1OCAwLjUyMTQ1OSAxMC4yNjI0IDEuMTI0MjIgMTAuMjYyNFoiIGZpbGw9IiM2MzY4NzkiLz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "./src/assets/price-check.svg":
/*!************************************!*\
  !*** ./src/assets/price-check.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOS45OTk5NiAwQzQuNDg2MDggMCAwIDQuNDg1NDggMCA5Ljk5OTk5QzAgMTUuNTE0IDQuNDg2MDggMjAgOS45OTk5NiAyMEMxNS41MTM4IDIwIDIwIDE1LjUxNCAyMCA5Ljk5OTk5QzIwIDQuNDg1NDggMTUuNTEzOCAwIDkuOTk5OTYgMFpNMTUuNTc1IDYuNjY0NTNMOS40MjExMiAxMy41ODc2QzkuMjY5NiAxMy43NTg2IDkuMDU4NDYgMTMuODQ2MiA4Ljg0NTcxIDEzLjg0NjJDOC42NzY5MSAxMy44NDYyIDguNTA3MzEgMTMuNzkwOCA4LjM2NTQgMTMuNjc3NEw0LjUxOTE2IDEwLjYwMDVDNC4xODc2MSAxMC4zMzU1IDQuMTMzODQgOS44NTE2MSA0LjM5OTIxIDkuNTE5MzZDNC42NjQyNiA5LjE4NzEgNS4xNDg4IDkuMTMzODggNS40ODAzNSA5LjM5OTQ2TDguNzU2MSAxMi4wMTkzTDE0LjQyNDkgNS42NDI0OEMxNC43MDY2IDUuMzI0NzMgMTUuMTkzNCA1LjI5NjIzIDE1LjUxMDcgNS41Nzg0OUMxNS44Mjg0IDUuODYxMyAxNS44NTczIDYuMzQ2NzggMTUuNTc1IDYuNjY0NTNaIiBmaWxsPSIjM0ZEQkIxIi8+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ "./src/assets/price-cross.svg":
/*!************************************!*\
  !*** ./src/assets/price-cross.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xMC4wMDA4IDBDNC40NzgxNiAwIDAuMDAxMDA3MDggNC40NzcyMiAwLjAwMTAwNzA4IDkuOTk5OUMwLjAwMTAwNzA4IDE1LjUyMjQgNC40NzgxIDIwIDEwLjAwMDcgMjBDMTUuNTIzMyAyMCAyMC4wMDA5IDE1LjUyMjQgMjAuMDAwOSA5Ljk5OTlDMjAuMDAwOSA0LjQ3NzIyIDE1LjUyMzQgMCAxMC4wMDA4IDBaTTEzLjc3MzEgMTMuODExM0MxMy4zNzM4IDE0LjIxMDIgMTIuNzI3IDE0LjIxMDIgMTIuMzI4MSAxMy44MTEzTDEwLjA1MjYgMTEuNTM1OEw3LjY3MzYgMTMuOTE0OUM3LjI3NDU0IDE0LjMxMzggNi42Mjc2NyAxNC4zMTM4IDYuMjI4ODEgMTMuOTE0OUM1LjgyOTU1IDEzLjUxNTUgNS44Mjk1NSAxMi44Njg4IDYuMjI4ODEgMTIuNDY5NUw4LjYwNzY2IDEwLjA5MDdMNi4zOTI3NCA3Ljg3NTkyQzUuOTkzODEgNy40NzY1MyA1Ljk5MzgxIDYuODI5ODYgNi4zOTI3NCA2LjQzMDc0QzYuNzkxODEgNi4wMzE2NyA3LjQzODggNi4wMzE2NyA3LjgzNzkzIDYuNDMwNzRMMTAuMDUyNyA4LjY0NTUxTDEyLjE2NDEgNi41MzRDMTIuNTYzMSA2LjEzNTA3IDEzLjIxMDMgNi4xMzQ5NCAxMy42MDkxIDYuNTM0QzE0LjAwODMgNi45MzM0IDE0LjAwODMgNy41ODA0NiAxMy42MDkxIDcuOTc5MTlMMTEuNDk3OSAxMC4wOTA2TDEzLjc3MzIgMTIuMzY2QzE0LjE3MjEgMTIuNzY0OSAxNC4xNzIzIDEzLjQxMjEgMTMuNzczMSAxMy44MTEzWiIgZmlsbD0iI0NFRDdFMSIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ "./src/assets/price-user-1-1.svg":
/*!***************************************!*\
  !*** ./src/assets/price-user-1-1.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzMiIGhlaWdodD0iNjUiIHZpZXdCb3g9IjAgMCA3MyA2NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik02OS40MTA3IDQ0LjMxNzdMNjkuNDExMSA0NC4zMTc5QzcxLjMwNzkgNDUuNDA2MyA3Mi41MDA1IDQ3LjUwMDkgNzIuNTAwNCA0OS43OTI2VjYyLjcxMjdDNzIuNTAwNCA2My43MDA1IDcxLjcwMTYgNjQuNDk5MyA3MC43MTM4IDY0LjQ5OTNINTkuNzgxVjYwLjkyNjJINjguNDI3Mkg2OC45MjcyVjYwLjQyNjJWNDkuNzkyN0M2OC45MjcyIDQ4LjgxMDEgNjguNDUyMiA0Ny44ODgzIDY3LjYzNCA0Ny40MTY3TDY3LjYzMzUgNDcuNDE2NEM2NC41Nzk5IDQ1LjY2MTggNjEuMjkyMyA0NC4zMjY1IDU3Ljg3ODYgNDMuMzYzNUM1Ni44ODY0IDQxLjc5NjUgNTUuNTUzMyA0MC40Mzg3IDUzLjg5NjUgMzkuNDg1MUw1My44OTYzIDM5LjQ4NUM1My4zNTA2IDM5LjE3MTMgNTIuNzkyMSAzOC44ODEyIDUyLjIyODMgMzguNjA1OEM1OC4zMzEgMzkuNDE3MyA2NC4xODI5IDQxLjMxMjEgNjkuNDEwNyA0NC4zMTc3WiIgZmlsbD0iIzhENDQ4QiIgc3Ryb2tlPSJ3aGl0ZSIvPg0KPHBhdGggZD0iTTUxLjI4OCA0NC4zMTc5QzUzLjE4NzYgNDUuNDEwNyA1NC4zNzc4IDQ3LjUwMzcgNTQuMzc3OCA0OS43OTA4VjYyLjcxMzFDNTQuMzc3OCA2My43MDA5IDUzLjU3OSA2NC40OTk3IDUyLjU5MTIgNjQuNDk5N0gyLjI4NjZDMS4yOTg4MiA2NC40OTk3IDAuNSA2My43MDA5IDAuNSA2Mi43MTMxVjQ5Ljc5M0MwLjUgNDcuNTAzNiAxLjY5MDI2IDQ1LjQxMDggMy41ODk2OSA0NC4zMThMNTEuMjg4IDQ0LjMxNzlaTTUxLjI4OCA0NC4zMTc5QzM3LjA0ODYgMzYuMTMxMiAxNy44Mjk1IDM2LjEzMTIgMy41ODk4MSA0NC4zMTc5SDUxLjI4OFpNNTAuMzA0OCA2MC45MjY1SDUwLjgwNDhWNjAuNDI2NVY0OS43OTA4QzUwLjgwNDggNDguODEwMSA1MC4zMjk2IDQ3Ljg4ODIgNDkuNTA4OSA0Ny40MTY4QzM2LjM0MDggMzkuODQ3NiAxOC41MzcyIDM5Ljg0NzYgNS4zNjkxNCA0Ny40MTY4QzQuNTQ4NDUgNDcuODg4MyA0LjA3MzMzIDQ4LjgxMDMgNC4wNzMzMyA0OS43OTNWNjAuNDI2NVY2MC45MjY1SDQuNTczMzNINTAuMzA0OFoiIGZpbGw9IiM4RDQ0OEIiIHN0cm9rZT0id2hpdGUiLz4NCjxwYXRoIGQ9Ik00NS41NjIyIDMyLjQ4NzdDNDQuMzQyNiAzMi40ODc3IDQzLjEzOSAzMi4zMDAzIDQxLjk1NCAzMS45OTJDNDIuOTUxMyAzMS4wMzQxIDQzLjg3MzIgMjkuOTkzIDQ0LjY2NzEgMjguODM5NkM0NC45NDM1IDI4Ljg3NDcgNDUuMjU5OSAyOC45MTQ2IDQ1LjU2MjIgMjguOTE0NkM1Mi4xNDIgMjguOTE0NiA1Ny40OTUxIDIzLjU2MTYgNTcuNDk1MSAxNi45ODE4QzU3LjQ5NTEgMTAuNDAyIDUyLjE0MjIgNS4wNDg5MSA0NS41NjIyIDUuMDQ4OTFDNDUuMjU5NiA1LjA0ODkxIDQ0Ljk0MzUgNS4wODg1OSA0NC42NjY5IDUuMTIzNThDNDMuODcyOSAzLjk3MDIxIDQyLjk1MSAyLjkyOTI3IDQxLjk1MzcgMS45NzEyNUM0My4xMzg3IDEuNjYyOTYgNDQuMzQyNCAxLjQ3NTU5IDQ1LjU2MjIgMS40NzU1OUM1NC4xMTA5IDEuNDc1NTkgNjEuMDY4MyA4LjQzMjk0IDYxLjA2ODMgMTYuOTgxNkM2MS4wNjgzIDI1LjUzMDMgNTQuMTEwOCAzMi40ODc3IDQ1LjU2MjIgMzIuNDg3N1oiIGZpbGw9IiM4RDQ0OEIiIHN0cm9rZT0id2hpdGUiLz4NCjxwYXRoIGQ9Ik00Mi45NDUgMTYuOTgxN0M0Mi45NDUgMjUuNTMwNCAzNS45ODc1IDMyLjQ4NzcgMjcuNDM4OSAzMi40ODc3QzE4Ljg5MDQgMzIuNDg3NyAxMS45MzI5IDI1LjUzMDQgMTEuOTMyOSAxNi45ODE3QzExLjkzMjkgOC40MzI5NSAxOC44OTAyIDEuNDc1NTkgMjcuNDM4OSAxLjQ3NTU5QzM1Ljk4NzYgMS40NzU1OSA0Mi45NDUgOC40MzI5NSA0Mi45NDUgMTYuOTgxN1pNMzkuMzcxOCAxNi45ODE3QzM5LjM3MTggMTAuNDAxOSAzNC4wMTg5IDUuMDQ4NzkgMjcuNDM4OSA1LjA0ODc5QzIwLjg1OTIgNS4wNDg3OSAxNS41MDYxIDEwLjQwMTkgMTUuNTA2MSAxNi45ODE3QzE1LjUwNjEgMjMuNTYxNSAyMC44NTkyIDI4LjkxNDUgMjcuNDM4OSAyOC45MTQ1QzM0LjAxODcgMjguOTE0NSAzOS4zNzE4IDIzLjU2MTUgMzkuMzcxOCAxNi45ODE3WiIgZmlsbD0iIzhENDQ4QiIgc3Ryb2tlPSJ3aGl0ZSIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ "./src/assets/price-user-1-2.svg":
/*!***************************************!*\
  !*** ./src/assets/price-user-1-2.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODQiIGhlaWdodD0iNjUiIHZpZXdCb3g9IjAgMCA4NCA2NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik02OS40MTA3IDQ0LjMxNzdMNjkuNDExMSA0NC4zMTc5QzcxLjMwNzkgNDUuNDA2MyA3Mi41MDA1IDQ3LjUwMDkgNzIuNTAwNCA0OS43OTI2VjYyLjcxMjdDNzIuNTAwNCA2My43MDA1IDcxLjcwMTYgNjQuNDk5MyA3MC43MTM4IDY0LjQ5OTNINTkuNzgxVjYwLjkyNjJINjguNDI3Mkg2OC45MjcyVjYwLjQyNjJWNDkuNzkyN0M2OC45MjcyIDQ4LjgxMDEgNjguNDUyMiA0Ny44ODgzIDY3LjYzNCA0Ny40MTY3TDY3LjYzMzUgNDcuNDE2NEM2NC41Nzk5IDQ1LjY2MTggNjEuMjkyMyA0NC4zMjY1IDU3Ljg3ODYgNDMuMzYzNUM1Ni44ODY0IDQxLjc5NjUgNTUuNTUzMyA0MC40Mzg3IDUzLjg5NjUgMzkuNDg1MUw1My44OTYzIDM5LjQ4NUM1My4zNTA2IDM5LjE3MTMgNTIuNzkyMSAzOC44ODEyIDUyLjIyODMgMzguNjA1OEM1OC4zMzEgMzkuNDE3MyA2NC4xODI5IDQxLjMxMjEgNjkuNDEwNyA0NC4zMTc3WiIgZmlsbD0iIzhENDQ4QiIgc3Ryb2tlPSJ3aGl0ZSIvPg0KPHBhdGggZD0iTTUxLjI4OCA0NC4zMTc5QzUzLjE4NzYgNDUuNDEwNyA1NC4zNzc4IDQ3LjUwMzcgNTQuMzc3OCA0OS43OTA4VjYyLjcxMzFDNTQuMzc3OCA2My43MDA5IDUzLjU3OSA2NC40OTk3IDUyLjU5MTIgNjQuNDk5N0gyLjI4NjZDMS4yOTg4MiA2NC40OTk3IDAuNSA2My43MDA5IDAuNSA2Mi43MTMxVjQ5Ljc5M0MwLjUgNDcuNTAzNiAxLjY5MDI2IDQ1LjQxMDggMy41ODk2OSA0NC4zMThMNTEuMjg4IDQ0LjMxNzlaTTUxLjI4OCA0NC4zMTc5QzM3LjA0ODYgMzYuMTMxMiAxNy44Mjk1IDM2LjEzMTIgMy41ODk4MSA0NC4zMTc5SDUxLjI4OFpNNTAuMzA0OCA2MC45MjY1SDUwLjgwNDhWNjAuNDI2NVY0OS43OTA4QzUwLjgwNDggNDguODEwMSA1MC4zMjk2IDQ3Ljg4ODIgNDkuNTA4OSA0Ny40MTY4QzM2LjM0MDggMzkuODQ3NiAxOC41MzcyIDM5Ljg0NzYgNS4zNjkxNCA0Ny40MTY4QzQuNTQ4NDUgNDcuODg4MyA0LjA3MzMzIDQ4LjgxMDMgNC4wNzMzMyA0OS43OTNWNjAuNDI2NVY2MC45MjY1SDQuNTczMzNINTAuMzA0OFoiIGZpbGw9IiM4RDQ0OEIiIHN0cm9rZT0id2hpdGUiLz4NCjxwYXRoIGQ9Ik00NS41NjIyIDMyLjQ4NzdDNDQuMzQyNiAzMi40ODc3IDQzLjEzOSAzMi4zMDAzIDQxLjk1NCAzMS45OTJDNDIuOTUxMyAzMS4wMzQxIDQzLjg3MzIgMjkuOTkzIDQ0LjY2NzEgMjguODM5NkM0NC45NDM1IDI4Ljg3NDcgNDUuMjU5OSAyOC45MTQ2IDQ1LjU2MjIgMjguOTE0NkM1Mi4xNDIgMjguOTE0NiA1Ny40OTUxIDIzLjU2MTYgNTcuNDk1MSAxNi45ODE4QzU3LjQ5NTEgMTAuNDAyIDUyLjE0MjIgNS4wNDg5MSA0NS41NjIyIDUuMDQ4OTFDNDUuMjU5NiA1LjA0ODkxIDQ0Ljk0MzUgNS4wODg1OSA0NC42NjY5IDUuMTIzNThDNDMuODcyOSAzLjk3MDIxIDQyLjk1MSAyLjkyOTI3IDQxLjk1MzcgMS45NzEyNUM0My4xMzg3IDEuNjYyOTYgNDQuMzQyNCAxLjQ3NTU5IDQ1LjU2MjIgMS40NzU1OUM1NC4xMTA5IDEuNDc1NTkgNjEuMDY4MyA4LjQzMjk0IDYxLjA2ODMgMTYuOTgxNkM2MS4wNjgzIDI1LjUzMDMgNTQuMTEwOCAzMi40ODc3IDQ1LjU2MjIgMzIuNDg3N1oiIGZpbGw9IiM4RDQ0OEIiIHN0cm9rZT0id2hpdGUiLz4NCjxwYXRoIGQ9Ik04MS4yMDA3IDQyLjEzOTVMODEuMjAwOCA0Mi4xMzk2QzgyLjc2NzYgNDMuMDQ3OSA4My43NTAxIDQ0Ljc5NDIgODMuNzUgNDYuNzAxN1Y1Ny4xNTA3QzgzLjc1IDU4LjAzNzMgODMuMDQwOSA1OC43NSA4Mi4xNjk4IDU4Ljc1SDczLjI2ODhWNTUuNTUxNUg4MC4zMzk2SDgwLjU4OTZWNTUuMzAxNVY0Ni43MDE3QzgwLjU4OTYgNDUuOTU1OSA4MC4yMzMgNDUuMjY1MyA3OS42MzA2IDQ0LjkxNDVMNzkuNjMwNCA0NC45MTQzQzc3LjE4MTUgNDMuNDkyNiA3NC41NDI2IDQyLjQxMjIgNzEuODAwOCA0MS42MzUyQzcxLjAxNTIgNDAuMzY1NyA2OS45NTQ5IDM5LjI2NzUgNjguNjM1IDM4LjQ5OTlMNjguNjM0OSAzOC40OTk4QzY3LjkyNzYgMzguMDg5MSA2Ny4xOTM0IDM3LjcyODcgNjYuNDU0OSAzNy4zODYzQzcxLjY5NDggMzcuOTY3OSA3Ni43MzA2IDM5LjU0MjcgODEuMjAwNyA0Mi4xMzk1WiIgZmlsbD0iIzhENDQ4QiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz4NCjxwYXRoIGQ9Ik01OC41MDA4IDcuNzMwODNDNTkuNTc2OSA3LjQzNDggNjAuNjc2MiA3LjI1IDYxLjc5NDYgNy4yNUM2OC45NDA5IDcuMjUgNzQuNzUgMTIuOTc0MyA3NC43NSAyMEM3NC43NSAyNy4wMjU3IDY4Ljk0MDggMzIuNzUgNjEuNzk0NiAzMi43NUM2MC42NzY0IDMyLjc1IDU5LjU3NzIgMzIuNTY1MiA1OC41MDExIDMyLjI2OTJDNTkuNDE5NiAzMS40MjMxIDYwLjI2NCAzMC40OTg2IDYwLjk3NjkgMjkuNDYzN0M2MS4wMTE5IDI5LjQ2NzkgNjEuMDQ3NSAyOS40NzI0IDYxLjA4MzYgMjkuNDc2OUM2MS4zMDk2IDI5LjUwNTEgNjEuNTU0OSAyOS41MzU4IDYxLjc5NDYgMjkuNTM1OEM2Ny4xMjk2IDI5LjUzNTggNzEuNDc3IDI1LjI2MTYgNzEuNDc3IDIwLjAwMDFDNzEuNDc3IDE0LjczODYgNjcuMTI5NyAxMC40NjQ0IDYxLjc5NDYgMTAuNDY0NEM2MS41NTQyIDEwLjQ2NDQgNjEuMzA4NiAxMC40OTUgNjEuMDgyMSAxMC41MjMyQzYxLjA0NjUgMTAuNTI3NyA2MS4wMTEzIDEwLjUzMiA2MC45NzY3IDEwLjUzNjJDNjAuMjYzNyA5LjUwMTI1IDU5LjQxOTMgOC41NzY5OSA1OC41MDA4IDcuNzMwODNaIiBmaWxsPSIjOEQ0NDhCIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjAuNSIvPg0KPHBhdGggZD0iTTQyLjk0NSAxNi45ODE3QzQyLjk0NSAyNS41MzA0IDM1Ljk4NzUgMzIuNDg3NyAyNy40MzkgMzIuNDg3N0MxOC44OTA0IDMyLjQ4NzcgMTEuOTMyOSAyNS41MzA0IDExLjkzMjkgMTYuOTgxN0MxMS45MzI5IDguNDMyOTUgMTguODkwMyAxLjQ3NTU5IDI3LjQzOSAxLjQ3NTU5QzM1Ljk4NzYgMS40NzU1OSA0Mi45NDUgOC40MzI5NSA0Mi45NDUgMTYuOTgxN1pNMzkuMzcxOCAxNi45ODE3QzM5LjM3MTggMTAuNDAxOSAzNC4wMTg5IDUuMDQ4NzkgMjcuNDM5IDUuMDQ4NzlDMjAuODU5MiA1LjA0ODc5IDE1LjUwNjEgMTAuNDAxOSAxNS41MDYxIDE2Ljk4MTdDMTUuNTA2MSAyMy41NjE1IDIwLjg1OTIgMjguOTE0NSAyNy40MzkgMjguOTE0NUMzNC4wMTg3IDI4LjkxNDUgMzkuMzcxOCAyMy41NjE1IDM5LjM3MTggMTYuOTgxN1oiIGZpbGw9IiM4RDQ0OEIiIHN0cm9rZT0id2hpdGUiLz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "./src/assets/service-1.png":
/*!**********************************!*\
  !*** ./src/assets/service-1.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAA4VBMVEUAAADwNkHwNUHwNkDvNkDvNUDvNEDwNkHvNEDvNEDvMEDxNkDvM0DxNkLxNkDwNUHwNkLvN0DvQEDvNEDvNkDwNkDxNUDwNkH/////fYXMGybzT1ntND7RHinkLDfbJTD95uf7tLjfKTT2gYj+8vP9ztD4m6D/jZT+eID9dH36YmvxQ03yP0nrMTzOHCj5cnrSJzLWIiz/7/D/rrLzZm/4WWPfP0rxO0X/3d/4p6z3jpTrVl/aNUD/9/j/vsL/naP/hYz7a3T4Xmf3VV7mTFb/xsr6wMP/pavvXmfiRVDTJzLmo1loAAAAF3RSTlMA3++/gGAgkEAwEJ9Qf3/Pr3AQcLCvb+z2RQkAAALiSURBVFjDtZnZcuIwEEUly8Y2NgMkkxE2CWsICVkJCVlnSTL7/3/QUOOHxo6llkVz3iiqTnW1btuSzHSE3m7UEpw7MofDuRC+G4fMgnrgNyWK8ON6JW0gHGlKyzMutgFWI3ijZq4lV3ugrabWN6QmpDWRpuiAyw3gyvh9khvSKPd+kBvToPaCmdgLtIveUBIRFHLGqcQ8n7pIkiFy8yYJ8WgbATh12kQALnXBUDIUvJ2SObXYUUSCakpa0ozueNytkuW6oXbYWTHsmi9fLA04PTrsZDx0TXvhG2szBo8Sx1+JhcQYDzo5BmOJ0VyJJcLNpPOOwaVEYCysogV+Iq0OWYxEQQEWEI+5yJopwALSZr6NFg9IxAQSBQVYQD6qxNBchIliqFWPtompeKh4pzJO2woQO1LFI6o+PDpVP5J1KX5AtWpATDgguPhsNr0v195/nZ1Zi+9uj5Mk+XVdpk1WvOrUTKvNWBTU14sk4+TNQtw9SYDhmvrzl2/wx0m3qniW5Jj+yGuBl4ril6TAdPJ/gKdJgZl1K0C9WIC2eiuAN1ArOL69s4rb2SuqtR8QtddiQIDz/tXvcu3Nc//cWrw/ukjT9PmyTJuu0KqZo9NmLAvqy2WacTBSeh3lg753kAJ/1tTH39f+OejJim+Qfprj6imvBeYqsZClzNO0TP10lRboq16mLawVoF4u/8IvpBVCcyYdgVrBxWhfvY/d1cStj2qVuHC0qarWD0iMbWP35+XaeQ/bxjIJ4KsIWgTGWFMaqyEKGAI/3EBAYM3MDjeBBJBVBC1GvBLXHWmmhijg1Bmcx3B1r4dpYdvNoBdkwO2NQ+3lLMOlFruZ12j57K7eXPKCoWTSgrd9oQdZJiHa/qUp7ZSErECbOBGAS+0FM5WX3txmCsLNPrAETEktsveKGtPhWRbteAyh5nILrbsDBjI1aHG8PXOrCFgVdmJf4NamH+wwC8LY9UX55+O9aNcLmYZ/LJFt9G1UvkEAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/service-2.png":
/*!**********************************!*\
  !*** ./src/assets/service-2.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAAw1BMVEUAAAB1Mcx1Mcx0MMtwMM91Mcx2Ms10MMt0Mcx1MMp0MMx1MM10Mc10MMt0MMx4MMdwMMd1MMp1Msx0Mcx2Ms11MMt2MsxwMMp2Mcx1Mcz///+5g/+wefl+O9N9Ps/38vy0fvx5NtC6mOWWWOWPV9aCQNbl2fasc/aiZ+6GStPu5fndy/Kpft+OUN+HRtqGS9Pcy/KobvLLsuybX+mXZNnu5vnLseyxi+KXZdnu5fjUvu/Cpenl2PXUv+/Cpeixi+OgcdxnmzggAAAAGXRSTlMA37+AEO9/QO8wkGCfcFAgIGCvz4+wrzDPCK3t3gAAAvtJREFUWMO12elaozAUgOEk0FKWUveZQ1lasSOj3eu4znb/VzU+ZPC0QkiI8ftl/7zPMYYIlLTl+sPgglE6gIN6lDJ2ZoUu0ch2zk5BGjsL7U6swwag2sWx8rB9VJWi/SN11jjtI9uNbl+QIwbaBS1DOxQ+EBVuvyF8sH6z2wcwK6NrVEbXSMPasQCGct7tM2oKpoe7LgBjsX3XB4Mdm10IrGeb3RGYZXpgHBkH/pyRqWm4V9sSZq+SE+jY1eU6i6Kf94/te9nuyKbbqOr2e9ufL+w47o8Iy+Yta+F1c7PooL/QmPcKMw0Xy5pX4+srrOVmT9VPz9AYIV803OxPCjD/v9gpNOWSsLt7w3/9Ff/4IDjiLB2Xd1l+vBf8i/K0XVjxzQxNBcqbYlVzIW2Bz5Xh+VOGLu+xBWZdjrb0brvmLo9f27+hKcphrS6jsjsBPFAxpnkRx/EmT+ruDQiOZBV2N64qEnR5omNIAZ7FYyxODt0X0IZnk/F+k2Tf/ZbqwehieauLsLJbLchO6iIsdyf5FGBR2jOZi7DcjRNIVwDJZhznchdhuZuuq6tZ7iIsd+GhvBbmV6vHNbpSWO7CbYShK4PlLvyqu7pwgi6e8lJXDicxurX7lG0K2nCBLm+1rdj1HSgkODaTNxdL5y+3z/cPSiz0BAf9Dl29qADelPACsHxcLJbJVB1m0FS5JSYHLm+mCDPBbTdfibp7PVWGg5aJ9V3wBG8/rktnqe2CRfzWXaHrQii4jV1yKl5MYVlouOASAoL9hmm4QAg5FZ9B+i4TP9wsNF18uHGguWU8xopuLoSvsD2A5pKiYuMFdMwmrc9jSV5srovdErp2zl88gtnw7c3AtEsJzzINW4RnGx6ZjgiObH5gHNn8wOZf6GHMnBuQ/Ub0ExbC7FXikncNDe8IzDLtomzKNS8PiSCXfoSlDhE2CvRdNiJt+ZpD946JpJFFNVjLRsEYjaw8/0RdZQ7pkh16TK6eeo5NNHJDy2OM0l796+OTYOi7pKV/lmqayNIvXqQAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/service-3.png":
/*!**********************************!*\
  !*** ./src/assets/service-3.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAAWlBMVEUAAAAzXe8zXe40XO80XO0yXew0Xu80XOswYO8zXO0zWuozXe8zXO4zXO4zXOwwYO8wWOc0XO8wUN80Xe0zXO80Xe7///8UJXgXKoPy9f7m6/2AmfQoSMIoSMHwfS8pAAAAFXRSTlMA3++/gGB/QBCQMK+fcFAgIM8QjzDkfvqUAAAB5UlEQVRYw+3Z3W7iMBCG4W/8Q/4TKJg20L3/21wpXdVLycSJMyNVVZ9DH7waDfYBgCW179rGEpnwwBBZe3Z9jQwvxfkUkuy5f8EWhTVhrcavHvZgwiZ0OGZkpdLehCzkseRoQ7Z2YeiCwg5Ug9GFnQ6YdQi7HaS7sSzcjTp8UQchBR4cSSpMj7euDWIsEPkgyMsuIjKl7I2InPTAceQ4sM7IJB02T1dC9pU0gfP+9jp5e+dP+btcBtZUmBr8Kf/x9Xz49RN/yu+i0ghXACy33TR+0ycA/HbT+E0DdWIJabOBC3qdsIfTCXeodMItrE640QpbkE6Y9MJG54EYhFl/Mp90hLDbb3hP+D5eJ7c7c5obvl3/GZnT3PD10/zpdwpPe0xY3jQS200bN4WvG/yYsNEJG5BOmPTCVids0WiFW51whU4n7OB1wj1qnfAF0AkDOGmELYBKI1wBKDTCPYDShGfj+u5tLlyC+T52v63tjvfwrAHiLiR5TIx0l/DBSYcdPpTCI9MAnZEdoDIyDfo/6AFWrtvifwMpLEL2lVzwRSd8IyIn3Y1lka5KuQOjpj1ZKsAa2vyuHbDEZw5tPBIGRxlZVwKQTsdsmm/WV22BLcq+sunqqSpKZKh7V9n5v4+btvM1FvwF+34qwOxad7EAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/service-4.png":
/*!**********************************!*\
  !*** ./src/assets/service-4.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAAtFBMVEUAAAD/fkf/fkf/fkb/f0f/fEj/eED/fEf/fUX/fUf/fUX/fkf/fEb/fUf/fUj/fkf/fkb/fUf/fkb/fkf/fkfUXSr////pbTj/jl7/7+j+9vP/nnX6ekP9fEXlajXXXyzvwq//lmr0dT/ij2zZcUXfZDD/39H/z7rvuKD/poD/hlLZcUTwcjz34df118r/v6P/spLsrJHno4ffhl/ZYS7/593/x6//xq7kmnrvglPce1LWZzgDcEZWAAAAFHRSTlMA34DvvyAQQDCQYK9QcGCfz4+gb2W7HX0AAAKOSURBVFjDtdnpdqIwGIDhJERQVu18YRAX3Nq6tNN19vu/r4lTNVqiJiR5/vSUH+/JCR+KgC5ph0kWUYw9OOFhTGmPxG3UgB/0unAV7cW+VjagHqiKQuXFEg+0YNIyyJqmQw8awZc3pEWhsezCogMMBvDZ8fsChoi8S8AYUe+alwlYkdQ+FsCS4NOcYbAEn05dBtbQk+sNLArtboTg+XYnQiC2FyyWLBbsZskYLPNqI2H3KolAsDnLPghWT18MgtW96IADHR6m4ECXh8EJ8UFsWRvF4ESICDiRaAxFsVpNQVWmPBSDu5zrD0BNdDY8HazhyFO+8ySOracDrjhzUWN5ts8bP47+zw8Oay76HweeQQLLw0WZb90Xe9t9eHx93abu9see8w99edgDifu87pFx3+rH5WEPgUw/r5szbq4aBs3wm2H4Z163ZNzEJCxO+LJi3H5vX/5slvzPhO382oW/a4Sh4KevfGEHizLfKRdsSyy/XCmFhfWMHZmXu+4bE/7+5lMHoBkeVuzYYlLy7GTBjlVDAN3w6J19ttnUDr2PtMNjpmSsGx4yRTPN8K1q+FYvPGPKZlrhsXp4rBMeMXWVfDDkH5sPjBnuhYew2U5wY7VvEDETRnOB5V+mlU64kn+ZRobnjhtJwzdNLzthKL2PTdyECQql4/ZVwwNIxM5uY93deKMuOEBd/rgJwIGYh30P7PORm99jEUJu9iJF/1nfC+z0QYiD04dbrh828SU7WTCX2h8JzvIsZ+4fmtq9SmoP6hNbE+H+Ubp52f1rhQSd0TZ7wRKgs1o30BhtoUvShov2UnRFi+AGWeIjTjNtnhXSSL1KA6TDjzsUrup2Ah810I5Jh8pfH0dZkrbRBf8AHkYUPvOU+08AAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/service-5.png":
/*!**********************************!*\
  !*** ./src/assets/service-5.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAAclBMVEUAAABIp/9Hp/9Ip/9Ip/9Ipv9Ip/9An/9Hp/9Ipv9Ipv9Hpf9Ip/9Ipv9Gpv9Hp/9HqP9Hp/9JqP9Jpv9Ip//////o9P9fsv/d7/9TrP/0+v92vf/R6f+NyP+k0/+j0/+Yzv9ruP+63v+v2P/G5P+Bw/98LCfxAAAAFHRSTlMA3++/gGAgEJB/QDCfcFDPr7CvUAUHM0oAAAKqSURBVFjDtZnpeqowEEATwiaL2nZYEkAttO//ipcUvQMfJTU4Of8w5DhOJoMAM5EGeXYWnHuwwONciNj/SNkOoiQ+wZ+I+COy0ibCg2c5B08He/DACn4ILbTU6gC1dmpzQkIBu8kMQSccXoBvll8OL3L43XsAoDWjl9SMXhLyVVsAIpKlN+RABF9WXQZkiMV+A0IC2kQgXkRbEYhPHTCGjAG7CZkDMd6qJGh3yRkQylqOACFdviMgpLmIwQHxKBbggNMoBidgIyYmpV47bHE+OCHHoqAlYwKc8OZKLEytrRlKVah2qFYD11oVRd03sAnfFjdt8aBfqCscKJttsbcxci1mlJ848KnmI9fNlmz0qrqtJ8EN7nTTcd22ymhei3F62Un9yy93AX6husifk0p90FiJ9ZRaPn68PrqApl8kpqr1kY240xMqXK5ySoWsi+WA1F/5bSH+Gs/vAKmau3+klYDcxg++LMQ6MrmqP6W9A8yRq1yYxXj6Mjid6vVi7Bdj/XXwmrhcpWLQWqXLYZWK2nLxboDIFsuhkYB0lov3rTVyXm7/6/p29+NAZ71BKtwgI/0j1WiW1hsEmmlL/8y+qlk53Pe3VstpS3fPi1Gg2lUTuj2aUK3m9bcWe9tmRDWgwcRojF7P0OhR0C4bfY8Djc0VBNV9rVvyZTW7GlpVqHIwXZrcXUzPgJCKM3BCzHJwgs8CcMLR2d9Yd3+82QkcIFze3CTggOMojjygJ2Ju7sfetJc8F/j0hjwXnE34QIyvrQ6WDx+9+eQBOwmZh64f6BHXcub0oSmSEDbiJTlxRSA+tRfNVF56c842SF97wZIYXgllsBsRMhPBzqC9gP1B6PMdWj9Cg0lNrEWC9+etImE2RMdYwJ+c4iRiO0iPfix+f338nuVBygz8AxJEDfiSd7+KAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/service-6.png":
/*!**********************************!*\
  !*** ./src/assets/service-6.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAAV1BMVEUAAAD2SXz1SXz1SXz2SXzzSHjzSHz0SHrzSHzvRXX0SXz2SXz1SXzySHr0Snr0SXv0RXr1SXv/QHD2SX3ySHr2SX31SXz////3X4z6pL3+6e/5mbX2VIR8gw8fAAAAFnRSTlMA3++/fyCAYEAQkK+fUDBwMM8Qj2BwCzrN+AAAAadJREFUWMPt2dluIjEQheFT3ntvllTI8v7POcxkJIvIxtBUKYrEd+WrXyXavYJr1uMyDpbI8AVDZO0hTCs26NJhx032MHW4R7KGbzXEm4d1hu9Czm/ISqWj4U0o4hpvebPRoyoRP4BWVLzwgxyKHD/MVboqZcciXvDNzEISLnhiIXS560YWY4EssqAo+0NkppPdEZmTHjiPnAfWGZlYmKlsCamzZGBxFmcdZ6KHb2IFCUDPCnoAlhXsAHDZ6ePt7NReltUvxO+vf71/tpdFK6bKwK9fTu1lUUTQCS/odcIjrE540ApbkE6Y9MJGJ2zAOmF+hp/hZ/gZ/tGw2mXzF95B1G6mg1Z41An3WHTCAUed8ISZiz7/P6W2l2Vr/cH77ezj1F6WAdixAqv5cpNYwQSgMyyvg8772ADo/BYR/xgWRvgSWJjDmcLhIw+dkR2gMjJ57Q96wnt51P9oKnuWzPhmEd4RWRDuZkGkq1JeUDETP4ASqvzIm1mPa+LGoU1Egw+0IRv2AKTTOdsWh9urNuEe+6m33LTr0x4bzFPobfnv42FcjjOu+ANCG0GtzOkAkAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/tab-image-1.png":
/*!************************************!*\
  !*** ./src/assets/tab-image-1.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/tab-image-1-4b2b806639c40b89080889f8f9c5bdc0.png";

/***/ }),

/***/ "./src/assets/testimonial-1-1.png":
/*!****************************************!*\
  !*** ./src/assets/testimonial-1-1.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/testimonial-1-2.png":
/*!****************************************!*\
  !*** ./src/assets/testimonial-1-2.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/testimonial-1-3.png":
/*!****************************************!*\
  !*** ./src/assets/testimonial-1-3.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAMAAAANxBKoAAAC9FBMVEUAAAATHBkiJyAqJyAaHhrAqKUXHRkeIh0aIBl2SjgVHBdwRTQhJCAgKB9YPCopKBxIMyUkKySEUz4mLycfJh4gIhlbOSqVcWQaJByCXEoTHBYgJB4RGRdJNyh+Tz1pQy0kKiCTXkTIsa9kTkkmMCUPGRbIr6uTXETLsK3Fsq1wYF1HOzpiPSvIsq9zRi0QGBTFr6oPGRcYHBgVGhgWGhYbHBccHxwRGRYgIh4kLiUaIxsiHhgfIB0YIRoTGRc8Kh+NVToqJyIxJh4fIBsbHRkdKB8cJR0qIRseHhkZGxaRXkiTXUQkIRvWtq6IUTmDTzdKMCMkJSAtIxwWHxrUsqfGqqd8TDctLCUhKyJFLiEiKB84KB4ZHhvHnI2dZ1NsRTRtQS40KSEnIx0dHBfPubXGqKGSYk+KWEEoMilXNSZQMyYgJh0UHRjZubDTrqLPqJq9npnNopKzj4TDlYOJW0iTWj+DUT1/TTd5SDJzRjFfPC5AMSoiJB8nIBrfysXexsHZwb3avLPKsKvKp5/Jn5C+kYKaYUeHVj2KUTWHTTSDTDN+SC9mPy5KNy5dOigzLibNtbHPsq3PrqXHoZiwmJauk47GmovGmIa0iXy6iXW1hXSZal2pdFxiT0iCVEWPWkA5MCteMxnavbfQsqvAo57MpZfEm5G3mJC4j4m5iYOuioDBkX6ngHmvfXKlfnGVdHGzgWycbmeDXFSMXFCeZUx1TUBmST5zSTVYOCtGMSlQLyPk1dLi0Mzew7vVvLnUubXJtLLRq5/LopabfHWgdmylcFl2W1OIVUGXWz9QNys3KyU9LyQqKyJYMBTEr6y5o6G/gYK9jXywhXqveWmhY2GgcV9xZV+LZVqKV1RPR0JcRTxXPTp3QTd3QipqOx+ii4a6jXqlc22LbWaCa2Wbb1eRY1d5Ukh+Uz9FPTd0RCG2YyCSTh4+KBhxOxWFQhKAPxHQycrHvr2ZgH6vfnqve2Okak9qOzfHbyVjMiWbUBqOTBiOSRg+pFcdAAAAMXRSTlMAICDvgPzfcDD779u/nyAQ5d+lgF9QNSDv37+woIB4aEDv38/Pz7+/r5+fn59wUEAwRqvhVAAABntJREFUSMd9lVV0GlEQhrfu7u6urLFIcAIEJ0gIEKzQAm3cpY0nTSNN4400qbu7u7u7u7u+9KZy6v0e9mW/85+ZO3dnod9p3GhYvy67ioIbDBw8YjT0X+rUr0cn8ipvFgVrkqeOGTOm75BO/3TrNieIeNzIzVk2O3kqkAHbjw6t81e3VX06QSdwmEfk7Jo9dev2Y4WFxxoc1RSx6/+tiIY4gRN0npGwrV3qGFNYGcc5eGnZvNC91dw2dX+XRzU1EnQlncejc+POzUsuXFZY+PKiYk3p0g2VOl29Dr/K7RkIjisJHo/gsu8u1Gh2aTQax/yVq4JnLyuqZHs87X+WOyAMxIgb8fh4QrV2oSM5uEGD4N0rz60MTU7UrLxk8/ce1/uH3LIesBlGOsGl0ysXOvKTNcGL126Iy9kbrNma2OAC1+NF7fyj9tZcBGGQYWU8zou75sifNS1lfvm5lXdWzJu6LXFr4vazuBeV36bVN7mdjgejZBIKw7Cycl6+VKqWTpBKk2YmTpy4beu2/LT5F7wp48a1+zYUih+MIyQujhjpuouh06TSCROSZk7avGnTplkFM6etiFx1n0+h8L2+jqnFOIoIh+N2r1hbza5eUzonUD0haUISsDdPWuJz2rXx8pKz3l5evr7Nv4yFWpuNrXmfrV2TcyC8rNg0Z4d6wpaJEyfNTNm9eFV41Z2AWx4qqJxS22h3qj+fy7NfLg8tD3BWnSkLCysJCUzasmWmNCV03tRkR/Bs514/CoXi51dbeUM8XknAWNWSU5YmaaHTr4eVlISAWqTTChYsnZ2fcuP0adnFcQC+d2dwn4nx3ko6bNywYMmqk6a5pWElptQgtVqdMnd6+dKF5y+fX7FiXw6FAtK9fRtDjYAdD8M4equ0QL2guDStJCQoUKresfNEQNXdt+eLtj9/sbTa48fn8729GkHdlOM9BGL0xa27du4MOQUqCdkRuCNwTmrY7o2Xbl47VrQ49ORBfxDO96O0gJrrxtONCIzEK9l7T04vO7V8EcgODAoxmeYsXLxs/oLjx4+/supAl3y/cf2henkYHQU2m63kWW8syb5dljonKCgktdgUNG1W/qyUuQtKQzmH/fl8Kpg+xK6WABthsPPYMJIQ89hcEZaammoqLi4pDlJLwZVxODQXdB4q1ct3/HhIl6cU8mCEnHeQjaPYkQcun+WLFqWlpYHHTjCkxEkTN088et+f6vXFpuKEkA4zyLo4Nn286uqHqxk+FcuXT59eVnbCFChNAvakbY6z/t61ui/UEOYCm0zCqpU8tObTs0esGVnpe/ZUvF5+IsxkmltQUDB3/uKcr3ZTaACMCbkImURmEyj64OHTR/vTp1zJYu1Pf1NRUbEnAOCsyrEeBjrVqyvUHUFxmEEikXhCVFTz7uOTzAjWlStTJmdmZk4GZMldhw5yrBylB6R3gxoxwEdGIpNIMMZAax4+uRoty5oyJSuTVUtmpllFs8apDlnZoE/fRlBjMgBEM4Atqnl6pCZGGw1sGStCHBERpacJudY4q/5Q3mGQ3RiCmpK+gMAYihx5dqTGEhMdFRWVMUMsjlhHQzFMaDhgYDIP6fy9G4IbWx8kA8gwjKC0BIHbEh0l3xce7uMzY52dDGwJM1axVsFk+3taALvOd1uEYgJ7gtsSJR/r43T6iMMNKAPF7BKOa909rVt12O/Lkuj6VeeJRDSVULAxJjJjrE8tBzARKhLSJCpmbLY2nKkD0d/DGQw7hiWo7KqN6yLHAsQ+kQJMBAJsApVBoc8da877tn/qg1NBhTRMKLHRmO6YyLEZtT3GSuwioRCjqaxMvV6Re7vH983dEEGFAgnGtdE4CpdFGymXsVgZChtNwBFgqD0BHMnG3C4/dndTu0QgsYO3G9y5tWciz5Jp3QaDgikApdM4BkNuk59+Kb25EpDE3KBYH5ttidbKZXKZ1hzrcnNoGAoymI8tI3/Z35IEzoH1sbGx5nUxMdFy2eTJ+/Zp1zMTaDzYZmDq1/eCfqFDPf36bLM5e829qOgpMpmMJZ4Ro+ck0Iy+Nr2idUfoN1o2M5ubRDYJdzrHgiYj9kfIXXqDQIL72hStW0J/0nNV+ZnyqjN7AsTi9PT9LItbwVRJ4nFOj1bQ3+jUNtypdQYErF69Oj1Cnu1y6Tlconld6F+0bNvMnCFOX71azNJacnPd9erXgf5Lx55tB/URz4hs1mx4rz+a+ww8vJ49JIsCkQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/testimonial-1-4.png":
/*!****************************************!*\
  !*** ./src/assets/testimonial-1-4.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAMAAAANxBKoAAAC91BMVEUAAACZlYPCt6e/nYmemomZloW2r57l4928uLCpopGbloOZlIPX08i/t6eWkoCpoo/Yzr+emYna1cusqJfMwKyalYUVIi3l4t7JwbHa18zHwLKSkIGwqpeumYfKtaAaJjDj4969tqUaKC+fm4vl5ODdwqyspJTm5uHCxb22urzMqZRQSUjg3tXZuJ/m5uBZS0iaemnHv7CqopLbu6Xk39uLcmbHv6/k39qAZWDg3dbk4t3d2tDHv7C7taMaKDESIy/NxrjFva3Du6zBuqq+tqWmoJCgm4spLTQUJTLj4Nvi39jPybzLxLa2rp0YJize3NPb1824sZ6wqpjWsZevp5apo5GIaFtXRkRNPz5HPj7l5N/Z1crV0sa/uKdyVU1HOTchLDYdKjMgKTAXJC/IwbHnxa3fuqG5sqHas5s7NzskLDEVJy7X1MnSzcHKw7Ljv6admYiYlIKWd2h4XlVuVExAOTo3NDceJyzJwrXauqCzrJnYq5espZTNpYuAYVp7W1DTzsLpyLDmwqrEoouSkIOujX1/aGF3V01dSkZOREMyMTLk4Nnqzrnqy7TjwqzRtJyzrJyXlYixg2+qfWp1W1RvWlJgTUxjTUhWQT8wNjhQOjfl4t3tz7rOuqjdvaTQqJGhno3Mn4m2lIW+kHueeWujd2eedWSZcGGFY1eAXlFjUkxaS0lqUEhbQj8uLzYmKCrlx7HdwqvYvKXhu6Pet5vKrprRq5SlnozFnoq6mofEmYXBlYCCgnu0jXi6iHathnWsgW9pbWhaWlhpUk9MUExURUJjSUERIyrf39vh3NO1r6HXsp62ppu8n5Oom5ONiH6jg3Ftc3B2eG+DeW6bgGyDcGmVc2SPbWNnWVNdVFFuTUUuLi87MS3y18TU0MS2tavqvKmqqJy9ppejoZednpWpk4WUbl6SZ1o0O0HSzL/HuKXVrI2vl42chHmifmyKd2p1bWh2aGNcX15xY1tFR0fz4dPCx8W9vbSjpqfDrJmzopOub2SSXFXULdoQAAAAOXRSTlMAICD9f+/nIBDl2rqwn59wa2VKSjAwIO/v59/fx7+ooICAgEDv7+/f39/f38/Pv7+vn5+AcHBgMDA2dneBAAAF6UlEQVRIx32UZViTURiGP8Xu7u7uAtkGCGwoTGCwQF2ysQ11sjFwzjGJbWwS0iUgqXQj3WFLt93d7Q/P9wG23r/v85znPde5Xuh3Jo8dM2KEn4PD4JEjx0+G/suAQYONjY0PHfLzKGmqrGwsmTlmwL/d2acAxsZ+jTVYJh6Ppz+suurxD3/YICOEU01heBYOhwGw+DUeHh6D/hY83Nra+qi1td9r53qgIro9GvsajDDzj/iFS45aAe40dbMwOEw9Hs3As/B4Bv1hiQOYeOKv8ngrK0vLS5an3jLA/fb29mg0nY5GM+j09E4HMLTD+J/liZYnABdu1eBxsAk8NIPPpNPpTL7YA34kh4U/5IFDTpgBLlSicTh7PJqPTddoemgUmphGy8CWeMCPOvhH9yFmZhZ2dnYXwlg4exYTyyOTUuVEobCN2NKSgg2r8TM6a3xoxLA+eb6dHQrmFh/0YKTzyHXy+wn+cTHR+U+exHZkOFcZwfqgvh4olCHCHWfQA8ujhKYmJfiXxeRzJbm5FxU9rDBjRO/tMnrfvh0IwMY58yhqT8czAWXFBIKEwxFwfUVM/tWj1kAfiUQbGBjoI9x1xqGxYnJtiOpBQFwMgcCJYrtxJLEaZrMVosPh63VhbG1tdWG7mxLqmZp03784hkvg+GS6uuUQgp2bLS2BbgQ3n3EYxtT08OEbTDRTQ64FRU77F8m4BEKOTyZbwFUym45YgnTr4RA0Se87N5wZ6RQSKSVYRCyPkXKjZbkCdqYgV8j3ONKrT4bG7fpBGJbiSVKLnXjijvJoiVQmi72cJ+EoKLcszE7A+lho1IE+Hj06UKVJCa516iFTwrrrSvOlMiU5PJVI0HqDsjAzg9M3QKOuXz/WxyWaU2dKeJoyOCWYRGqTyQpKFbFaCqH7C0OUnQWsz4Km7+3n+u1qcnWIp6M6o+pzEDm1KJfQHnTvObfQvcEQhbKA9eHQnv179sMA/bJLiCNVpAoNfZZ/OpRW7hbddeVdkUxw0f3xPhBuceKIFWRubr4HAB95mhZIlRNd5A8SKuLTyG2cnGifa2yBa1Te4319XaDt24Hfe6I1XEmlEtsSEwIS5KHhZ3LYbievXfPy9ok02AHrYFJo+nYE4JtfSVMGUomJFQGJD6ih5CQp29X7pJe3q0+kPqyD6kOgVdq7AciBXUGBIqrL6Qp//0RHGq2F6+bq45Pp7Z0F20iXWdAobcBubeSCVpELsAPK4uLDaWSF1E3gxvb28sqK1AW6IQifA20y2bkT+Ej8rlYXatLpiuKC+HB1T1dAEYfDPnnSKztSV7c3fCy0VcfExKTPN28WBQbeD4iLi3cMr6uQSm8KYDsSfE+4Cwo1CYKmRujo9OWfv5ocBD5gIjE1jaooksq4YE6vzE8HDyO24RDwY+fpAPs40IF9JTkkhOqiqqMFt5fFcKMKtHJcXbNuIzbQRwN7qA2wIxD9/IUOEsnTUZUmpnV9/VIWV5zkzo7Ku3TQ1lYfDh8IAdbY2OhEIPruAx0p6togoiikmhgrvXlTUOou8b1tYHoQKQ6ikXAbmwgTuMzu86/IapJnXZdKJVepFBI3DoGg9VQP2OBVDJBo0BzoOibA19a+ouZRKGIyVZiYJHQXENwLtFr0EVtff37/5l4KV4dHPbe/xikMi3UiERPKi/O57g3CF0a79ExND+rqzoD6GbrIRgdw/Nz7qy81WDoD6+R5pty/oPCZ45sSPT3EngZ69DMBNInQOdfonPGyFstAo/k8ktJF2FpFS6780GtPgH5iHIjWbqzHZLxyFPNhPZ3HEzs5VV/SMO8C2XYL9AsTpp77iMdgKIGByZR0JhPseayGEhSdl4Hh3zCdNhH6jaHLH7IweHW1XBREAqm8t53N9y5zLnbW4yuXgc5/sICFYfGSRWfalSGkZOW9PF9f3yjJ5e76BcOgvzFlLgsL9lR8g1Auby/MlvhmZ0VdXDsFAvzDX+lCfF5aGi9siPXNzs5avBGU+B/bNq+brVWoKFyxes64SdBvfAMxr90PVLFT0gAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/testimonial-1-5.png":
/*!****************************************!*\
  !*** ./src/assets/testimonial-1-5.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/testimonial-1-6.png":
/*!****************************************!*\
  !*** ./src/assets/testimonial-1-6.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/components/accordion/accordion.js":
/*!***********************************************!*\
  !*** ./src/components/accordion/accordion.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Accordion; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-accordion */ "./src/components/accordion/base-accordion.js");
/* harmony import */ var assets_accordion_arrow_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/accordion-arrow.svg */ "./src/assets/accordion-arrow.svg");
/* harmony import */ var assets_accordion_arrow_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_accordion_arrow_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_accordion_arrow_e_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/accordion-arrow-e.svg */ "./src/assets/accordion-arrow-e.svg");
/* harmony import */ var assets_accordion_arrow_e_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_accordion_arrow_e_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared */ "./src/components/accordion/shared.js");
var _jsxFileName = "C:\\Users\\Martins\\Documents\\Projects\\fx-bot.web\\src\\components\\accordion\\accordion.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function Accordion(_ref) {
  let {
      items
    } = _ref,
    props = _objectWithoutProperties(_ref, ["items"]);
  const openIcon = __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_accordion_arrow_e_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "open icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 20
    }
  });
  const closeIcon = __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_accordion_arrow_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "close icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  });
  return __jsx(_base_accordion__WEBPACK_IMPORTED_MODULE_2__["BaseAccordion"], _extends({
    stateReducer: Object(_shared__WEBPACK_IMPORTED_MODULE_5__["combineReducers"])(_shared__WEBPACK_IMPORTED_MODULE_5__["single"], _shared__WEBPACK_IMPORTED_MODULE_5__["preventClose"])
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }), ({
    openIndexes,
    handleItemClick
  }) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, items.map((item, index) => __jsx(_shared__WEBPACK_IMPORTED_MODULE_5__["AccordionItem"], {
    key: item.title,
    isOpen: openIndexes.includes(index),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, __jsx(_shared__WEBPACK_IMPORTED_MODULE_5__["AccordionButton"], {
    onClick: () => handleItemClick(index),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, openIndexes.includes(index) ? openIcon : closeIcon), item.title), __jsx(_shared__WEBPACK_IMPORTED_MODULE_5__["AccordionContents"], {
    isOpen: openIndexes.includes(index),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }, item.contents)))));
}

/***/ }),

/***/ "./src/components/accordion/base-accordion.js":
/*!****************************************************!*\
  !*** ./src/components/accordion/base-accordion.js ***!
  \****************************************************/
/*! exports provided: BaseAccordion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseAccordion", function() { return BaseAccordion; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

class BaseAccordion extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "state", {
      openIndexes: [0]
    });
    _defineProperty(this, "handleItemClick", index => {
      this.internalSetState(state => {
        const closing = state.openIndexes.includes(index);
        return {
          type: closing ? 'closing' : 'opening',
          openIndexes: closing ? state.openIndexes.filter(i => i !== index) : [...state.openIndexes, index]
        };
      });
      console.log('clicked');
    });
  }
  getState(state = this.state) {
    return {
      openIndexes: this.props.openIndexes === undefined ? state.openIndexes : this.props.openIndexes
    };
  }
  internalSetState(changes, callback = () => {}) {
    let allChanges;
    this.setState(state => {
      const actualState = this.getState(state);
      const changesObject = typeof changes === 'function' ? changes(actualState) : changes;
      allChanges = this.props.stateReducer(actualState, changesObject);
      return allChanges;
    }, () => {
      this.props.onStateChange(allChanges);
      callback();
    });
  }
  render() {
    return this.props.children({
      openIndexes: this.getState().openIndexes,
      handleItemClick: this.handleItemClick
    });
  }
}
_defineProperty(BaseAccordion, "defaultProps", {
  stateReducer: (state, changes) => changes,
  onStateChange: () => {}
});


/***/ }),

/***/ "./src/components/accordion/shared.js":
/*!********************************************!*\
  !*** ./src/components/accordion/shared.js ***!
  \********************************************/
/*! exports provided: AccordionButton, AccordionContents, AccordionItem, preventClose, single, combineReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionButton", function() { return AccordionButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionContents", function() { return AccordionContents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItem", function() { return AccordionItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preventClose", function() { return preventClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "single", function() { return single; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Martins\\Documents\\Projects\\fx-bot.web\\src\\components\\accordion\\shared.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/** @jsx jsx */


const AccordionButton = _ref => {
  let {
      children
    } = _ref,
    rest = _objectWithoutProperties(_ref, ["children"]);
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", _extends({
    css: {
      display: 'flex',
      alignItems: 'center',
      letterSpacing: '-0.2px',
      cursor: 'pointer',
      fontSize: '17px',
      lineHeight: 1.5,
      fontWeight: '500',
      border: 'none',
      paddingTop: '10px',
      paddingBottom: '10px',
      paddingLeft: '15px',
      paddingRight: '30px',
      position: 'relative',
      color: '#0F2137',
      '@media(min-width: 768px)': {
        paddingLeft: '30px',
        paddingRight: '30px',
        paddingTop: '20px',
        paddingBottom: '20px',
        fontSize: '15px'
      },
      ':focus': {
        outline: 'none',
        backgroundColor: 'rgba(255, 255, 255, 0.4)'
      },
      span: {
        position: 'absolute',
        top: '50%',
        right: '20px',
        transform: 'translateY(-50%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        color: '#fff',
        '@media(min-width: 768px)': {
          right: '30px'
        },
        img: {
          width: '7px',
          '@media(min-width: 768px)': {
            width: 'auto'
          }
        }
      }
    }
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }), children);
};
const variants = {
  open: {
    // maxHeight: 200,
    height: 'auto',
    marginBottom: 10,
    '@media(min-width: 768px)': {
      marginBottom: 30
    }
  },
  closed: {
    height: 0,
    marginTop: 0,
    marginBottom: 0
  }
};
function AccordionContents(_ref2) {
  let {
      isOpen
    } = _ref2,
    props = _objectWithoutProperties(_ref2, ["isOpen"]);
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, _extends({
    initial: "closed",
    animate: isOpen ? 'open' : 'closed',
    variants: variants,
    css: {
      overflowY: 'hidden',
      fontSize: 15,
      padding: '0 15px',
      paddingRight: '40px',
      lineHeight: '30px',
      color: '#343D48',
      '@media(min-width: 768px)': {
        padding: '0 30px'
      }
    }
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }
  }));
}
const AccordionItem = _ref3 => {
  let {
      isOpen,
      children
    } = _ref3,
    rest = _objectWithoutProperties(_ref3, ["isOpen", "children"]);
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", _extends({
    css: {
      borderRadius: 5,
      marginBottom: 10,
      border: '1px solid #EDEFF2',
      padding: 0,
      overflow: 'hidden'
    }
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 3
    }
  }), children);
};
const preventClose = (state, changes) => changes.type === 'closing' && state.openIndexes.length < 2 ? _objectSpread(_objectSpread({}, changes), {}, {
  openIndexes: state.openIndexes
}) : changes;
const single = (state, changes) => changes.type === 'opening' ? _objectSpread(_objectSpread({}, changes), {}, {
  openIndexes: changes.openIndexes.slice(-1)
}) : changes;
const combineReducers = (...reducers) => (state, changes) => reducers.reduce((acc, reducer) => reducer(state, acc), changes);

/***/ }),

/***/ "./src/components/block-title.js":
/*!***************************************!*\
  !*** ./src/components/block-title.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Martins\\Documents\\Projects\\fx-bot.web\\src\\components\\block-title.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const BlockTitle = ({
  title,
  text
}) => {
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.blockTitle,
    className: "blockTitle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, title), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, text));
};
/* harmony default export */ __webpack_exports__["default"] = (BlockTitle);
const styles = {
  blockTitle: {
    textAlign: 'center',
    mb: ['60px', null, null, null, '60px', null, '80px'],
    h3: {
      color: '#0F2137',
      fontSize: ['23px', null, null, '30px'],
      fontWeight: 700,
      letterSpacing: '-1.5px',
      lineHeight: 1,
      mb: '20px'
    },
    p: {
      lineHeight: 1,
      fontSize: '18px',
      color: '#858B91'
    }
  }
};

/***/ }),

/***/ "./src/components/cards/blog-card.js":
/*!*******************************************!*\
  !*** ./src/components/cards/blog-card.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../link */ "./src/components/link.js");
/* harmony import */ var _assets_arrow_angle_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/arrow-angle.svg */ "./src/assets/arrow-angle.svg");
/* harmony import */ var _assets_arrow_angle_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_arrow_angle_svg__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Martins\\Documents\\Projects\\fx-bot.web\\src\\components\\cards\\blog-card.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const BlogCard = ({
  image,
  title,
  description,
  path,
  linkLabel
}) => {
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.blogCard,
    className: `blogCard ${image === null ? 'noThumb ' : ' '} ${description === null ? 'noDescription  ' : ''} ${linkLabel === null ? 'noLabel ' : ''}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, image !== null && __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: image,
    alt: title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  })), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.content,
    className: "blogContent",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx(_link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    path: path,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, title)), description !== null && __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 34
    }
  }, description), linkLabel !== null && __jsx(_link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    sx: styles.linkLabel,
    path: path,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, linkLabel, " ", __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: _assets_arrow_angle_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "angle icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (BlogCard);
const styles = {
  blogCard: {
    position: 'relative',
    overflow: 'hidden',
    mb: 30,
    mx: 15,
    width: ['calc(100% - 30px)', 'calc(100% - 30px)', 'calc(50% - 30px)', 'calc(50% - 30px)', 'calc(33.3333% - 30px)'],
    '&.noThumb': {
      p: '25px',
      backgroundColor: '#F0F0F4',
      borderRadius: '5px',
      h3: {
        fontSize: '20px',
        lineHeight: 1.75,
        fontWeight: 500,
        m: 0
      }
    },
    '&.noDescription:not(.noThumb)': {
      position: 'relative',
      img: {
        width: '100%'
      },
      '.blogContent': {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'linear-gradient(180.06deg, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.71) 99.95%)',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'flex-end',
        p: '25px',
        h3: {
          m: 0,
          color: '#fff'
        }
      }
    }
  },
  image: {
    img: {
      borderRadius: '5px',
      width: '100%',
      display: 'block'
    }
  },
  content: {
    h3: {
      fontSize: '18px',
      color: '#0F2137',
      lineHeight: 1.67,
      fontWeight: 700,
      mt: '20px',
      mb: '15px',
      a: {
        color: 'inherit'
      }
    },
    p: {
      fontSize: '16px',
      lineHeight: 1.87,
      color: '#0F2137',
      opacity: 0.6,
      mb: '15px'
    }
  },
  linkLabel: {
    color: '#3183FF',
    fontSize: '16px',
    fontWeight: '500',
    img: {
      ml: '6px'
    }
  }
};

/***/ }),

/***/ "./src/components/cards/jackpot-card.js":
/*!**********************************************!*\
  !*** ./src/components/cards/jackpot-card.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Martins\\Documents\\Projects\\fx-bot.web\\src\\components\\cards\\jackpot-card.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const JackpotCard = ({
  image,
  heading,
  text
}) => {
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.jackpotCard,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: image,
    alt: heading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  })), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, heading), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, text)));
};
/* harmony default export */ __webpack_exports__["default"] = (JackpotCard);
const styles = {
  jackpotCard: {
    p: ['30px', null, null, null, null, '15px 30px', '30px'],
    display: 'flex',
    flexDirection: ['column', null, null, 'row'],
    textAlign: ['center', null, null, 'left'],
    transition: 'all 500ms ease',
    borderRadius: '10px',
    backgroundColor: '#ffffff',
    '&:hover': {
      boxShadow: ' 0px 8px 24px rgba(69, 88, 157, 0.07)'
    }
  },
  image: {
    flexShrink: '0',
    mr: ['0', null, null, '30px'],
    mb: ['20px', null, null, '0px']
  },
  content: {
    h3: {
      color: '#0F2137',
      fontSize: '18px',
      lineHeight: 1,
      fontWeight: 700,
      mb: '10px'
    },
    p: {
      fontSize: '15px',
      color: '#343D48',
      lineHeight: 1.73
    }
  }
};

/***/ }),

/***/ "./src/components/cards/price-card.js":
/*!********************************************!*\
  !*** ./src/components/cards/price-card.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/link */ "./src/components/link.js");
/* harmony import */ var assets_price_check_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/price-check.svg */ "./src/assets/price-check.svg");
/* harmony import */ var assets_price_check_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_price_check_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_price_cross_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/price-cross.svg */ "./src/assets/price-cross.svg");
/* harmony import */ var assets_price_cross_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_price_cross_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_price_arrow_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/price-arrow.svg */ "./src/assets/price-arrow.svg");
/* harmony import */ var assets_price_arrow_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_price_arrow_svg__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Martins\\Documents\\Projects\\fx-bot.web\\src\\components\\cards\\price-card.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const PriceCard = ({
  data: {
    title,
    icon,
    amount,
    options,
    recommended
  }
}) => {
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: `${recommended === null ? 'priceCard ' : 'priceCard recommended'}`,
    sx: styles.priceCard,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.priceHeader,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: "priceHeader",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, recommended === null ? null : __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.recommended,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, recommended), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: icon,
    alt: title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, title))), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "ul",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, options.map((option, index) => __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "li",
    className: `${option.status === true ? '' : 'closed'}`,
    key: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, option.status === true ? __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_price_check_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  }) : __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_price_cross_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }), option.label))), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.buttonWrap,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: "priceAmount",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, "Starting from"), __jsx(components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    path: "#",
    sx: styles.heading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, amount)), __jsx(components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    path: "#",
    className: "priceButton",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_price_arrow_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "price button",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (PriceCard);
const styles = {
  priceCard: {
    px: ['20px', null, null, null, '40px'],
    border: '1px solid #E0E2E4',
    borderRadius: '10px',
    backgroundColor: '#ffffff',
    ul: {
      p: 0,
      mt: ['30px', null, null, null, '50px'],
      listStyle: 'none',
      li: {
        display: 'flex',
        alignItems: 'flex-start',
        color: '#343D48',
        fontSize: '16px',
        lineHeight: '26px',
        width: '100%',
        maxWidth: ['100%', null, null, null, '90%'],
        '+li': {
          mt: ['10px', null, null, null, '20px']
        },
        '&.closed': {
          color: 'rgba(52,61,72,.6)'
        },
        img: {
          flexShrink: 0,
          position: 'relative',
          top: '5px',
          mr: '15px'
        }
      }
    }
  },
  priceHeader: {
    pt: ['40px', null, null, null, '60px'],
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: ['column', null, 'row'],
    '.priceAmount': {
      textAlign: 'right'
    },
    '.priceHeader': {
      mb: ['20px', null, '0'],
      h3: {
        lineHeight: 1,
        color: '#0F2137',
        fontSize: '22px',
        fontWeight: 700,
        letterSpacing: '-0.55px',
        mt: '35px'
      }
    }
  },
  recommended: {
    display: 'inline-block',
    backgroundColor: 'primary',
    borderRadius: '3px',
    lineHeight: 1,
    color: '#ffffff',
    fontSize: '14px',
    fontWeight: 700,
    letterSpacing: '-0.14px',
    padding: '5px 8px',
    position: 'absolute',
    top: ['-15px', null, null, null],
    left: '0px'
  },
  buttonWrap: {
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
    py: '44px',
    mt: '60px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F8F8FA',
    mx: ['-20px', null, null, null, '-40px'],
    px: ['20px', null, null, null, '40px'],
    img: {
      display: 'block'
    },
    '.priceAmount': {
      p: {
        lineHeight: 1,
        fontSize: '16px',
        color: '#343D48',
        mb: '10px'
      }
    }
  },
  heading: {
    color: 'primary',
    fontSize: '26px',
    fontWeight: 700,
    lineHeight: 1
  }
};

/***/ }),

/***/ "./src/components/cards/service-card.js":
/*!**********************************************!*\
  !*** ./src/components/cards/service-card.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/link */ "./src/components/link.js");
/* harmony import */ var assets_arrow_angle_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/arrow-angle.svg */ "./src/assets/arrow-angle.svg");
/* harmony import */ var assets_arrow_angle_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_arrow_angle_svg__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Martins\\Documents\\Projects\\fx-bot.web\\src\\components\\cards\\service-card.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const ServiceCard = ({
  image,
  text,
  heading,
  path
}) => {
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.serviceCard,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: image,
    alt: heading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  })), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, heading), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, text), __jsx(components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    sx: styles.link,
    path: path,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, "Learn More ", __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_arrow_angle_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "angle icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 22
    }
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (ServiceCard);
const styles = {
  serviceCard: {
    display: 'flex',
    flexDirection: ['column', null, null, 'row'],
    textAlign: ['center', null, null, 'left']
  },
  image: {
    flexShrink: 0
  },
  content: {
    ml: ['0', null, null, '30px'],
    mt: ['20px', null, null, '0px'],
    h3: {
      color: '#0F2137',
      fontWeight: 700,
      fontSize: '18px',
      lineHeight: 1
    },
    p: {
      fontSize: '16px',
      lineHeight: 1.87,
      color: '#343D48',
      mt: '20px',
      mb: '20px'
    }
  },
  link: {
    color: '#3183FF',
    fontSize: '16px',
    fontWeight: 500,
    display: 'inline-block',
    img: {
      ml: '5px'
    }
  }
};

/***/ }),

/***/ "./src/components/cards/testimonial-card.js":
/*!**************************************************!*\
  !*** ./src/components/cards/testimonial-card.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Martins\\Documents\\Projects\\fx-bot.web\\src\\components\\cards\\testimonial-card.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const TestimonialsCard = ({
  image,
  text,
  name,
  username
}) => {
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.testimonialsCard,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, text), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.testimonialsInfo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.testimonialsImage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: image,
    alt: name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  })), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.testimonialsContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, name), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, username))));
};
/* harmony default export */ __webpack_exports__["default"] = (TestimonialsCard);
const styles = {
  testimonialsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: '5px',
    mb: '20px',
    px: ['20px', null, null, null, null, '25px', '35px'],
    py: ['20px', null, null, null, null, '20px', '25px'],
    pb: ['25px', null, null, null, null, '25px', '35px'],
    p: {
      fontSize: '16px',
      lineHeight: 1.87,
      color: '#343D48'
    }
  },
  testimonialsInfo: {
    display: 'flex',
    alignItems: 'center',
    mt: '20px'
  },
  testimonialsImage: {
    img: {
      display: 'block',
      mr: '15px'
    }
  },
  testimonialsContent: {
    h3: {
      m: 0,
      color: '#343D48',
      fontSize: '17px',
      fontWeight: 500,
      lineHeight: 1
    },
    p: {
      m: 0,
      lineHeight: 1,
      color: '#4F96FF',
      fontSize: '14px',
      fontWeight: 500,
      mt: '10px'
    }
  }
};

/***/ }),

/***/ "./src/components/drawer.js":
/*!**********************************!*\
  !*** ./src/components/drawer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-drawer */ "rc-drawer");
/* harmony import */ var rc_drawer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rc_drawer__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Martins\\Documents\\Projects\\fx-bot.web\\src\\components\\drawer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const Drawer = _ref => {
  let {
      className,
      children,
      closeButton,
      closeButtonStyle,
      drawerHandler,
      toggleHandler,
      open,
      width,
      placement,
      drawerStyle,
      closeBtnStyle
    } = _ref,
    props = _objectWithoutProperties(_ref, ["className", "children", "closeButton", "closeButtonStyle", "drawerHandler", "toggleHandler", "open", "width", "placement", "drawerStyle", "closeBtnStyle"]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(rc_drawer__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({
    open: open,
    onClose: toggleHandler,
    className: `drawer ${className ? className : ''}`.trim(),
    width: width,
    placement: placement,
    handler: false,
    level: null,
    duration: "0.4s"
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), closeButton && __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "div",
    onClick: toggleHandler,
    sx: closeBtnStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, closeButton), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: drawerStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, children)), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: "drawer__handler",
    style: {
      display: 'inline-block'
    },
    onClick: toggleHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, drawerHandler));
};
Drawer.defaultProps = {
  width: '320px',
  placement: 'left'
};
/* harmony default export */ __webpack_exports__["default"] = (Drawer);

/***/ }),

/***/ "./src/components/footer/footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/link */ "./src/components/link.js");
/* harmony import */ var components_logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/logo */ "./src/components/logo.js");
/* harmony import */ var assets_logo_light_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/logo-light.svg */ "./src/assets/logo-light.svg");
/* harmony import */ var assets_logo_light_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_logo_light_svg__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Martins\\Documents\\Projects\\fx-bot.web\\src\\components\\footer\\footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/** @jsx jsx */





function Footer() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "footer",
    sx: styles.footer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    sx: styles.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: ['column', null, null, null, null, 'row']
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_logo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    image: assets_logo_light_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    sx: {
      color: '#ffffff',
      opacity: '0.7',
      fontSize: '14px',
      mt: ['10px', null, null, null, null, '0']
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, "Copyright by ", new Date().getFullYear(), " Fxbot360")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.linksWrap,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    path: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, "Home"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    path: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, "Supports"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    path: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, "FAQ"))));
}
const styles = {
  footer: {
    py: ['40px', null, null, null, null, '30px', '40px'],
    backgroundColor: '#020718',
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#ffffff',
      opacity: '0.05'
    }
  },
  container: {
    display: 'flex',
    flexDirection: ['column', null, null, null, null, 'row'],
    justifyContent: ['center', null, null, null, null, 'space-between'],
    alignItems: 'center',
    position: 'relative',
    flexWrap: 'wrap'
  },
  linksWrap: {
    mt: ['15px', null, null, null, null, '0'],
    display: 'flex',
    flexWrap: 'wrap',
    a: {
      fontSize: ['14px', null, null, null, '16px'],
      color: '#ffffff',
      transition: 'all 500ms ease',
      '&:hover': {
        opacity: 0.7
      }
    },
    'a+a': {
      ml: ['15px', null, null, null, '35px']
    }
  }
};

/***/ }),

/***/ "./src/components/header/header.data.js":
/*!**********************************************!*\
  !*** ./src/components/header/header.data.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  path: 'banner',
  label: 'Home'
}, {
  path: 'services',
  label: 'Services'
}, {
  path: 'pricing',
  label: 'Pricing'
}, {
  path: 'testimonials',
  label: 'Testimonials'
}, {
  path: 'news',
  label: 'News'
}]);

/***/ }),

/***/ "./src/components/header/header.js":
/*!*****************************************!*\
  !*** ./src/components/header/header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/link */ "./src/components/link.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/logo */ "./src/components/logo.js");
/* harmony import */ var contexts_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! contexts/drawer/drawer.provider */ "./src/contexts/drawer/drawer.provider.js");
/* harmony import */ var _mobileDrawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mobileDrawer */ "./src/components/header/mobileDrawer.js");
/* harmony import */ var _header_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header.data */ "./src/components/header/header.data.js");
/* harmony import */ var assets_logo_dark_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/logo-dark.svg */ "./src/assets/logo-dark.svg");
/* harmony import */ var assets_logo_dark_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_logo_dark_svg__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\Martins\\Documents\\Projects\\fx-bot.web\\src\\components\\header\\header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/** @jsx jsx */








function Header({
  className
}) {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(contexts_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_5__["DrawerProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("header", {
    sx: styles.header,
    className: className,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    sx: styles.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_logo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    image: assets_logo_dark_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    as: "nav",
    sx: styles.nav,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, _header_data__WEBPACK_IMPORTED_MODULE_7__["default"].map(({
    path,
    label
  }, i) => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_scroll__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    activeClass: "active",
    sx: styles.nav.navLink,
    to: path,
    spy: true,
    smooth: true,
    offset: -70,
    duration: 500,
    key: i,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 15
    }
  }, label))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    path: "/",
    ml: 2,
    label: "Purchase Now",
    sx: styles.headerBtn,
    variant: "buttons.primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_mobileDrawer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }))));
}
const styles = {
  headerBtn: {
    backgroundColor: 'black',
    fontSize: '16px',
    fontWeight: 'bold',
    letterSpacing: '-0.16px',
    borderRadius: '5px',
    color: '#ffffff',
    padding: '6.5px 24px',
    display: ['none', null, null, null, 'inline-block'],
    ml: ['0', null, null, 'auto', '0'],
    mr: ['0', null, null, '20px', '0'],
    '&:hover': {
      color: '#fff'
    }
  },
  header: {
    color: 'text_white',
    fontWeight: 'normal',
    py: '25px',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',
    '&.sticky': {
      backgroundColor: 'background',
      color: 'text',
      py: '15px',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)'
    }
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    width: [null, null, null, null, null, null, '1390px'],
    '@media screen and (max-width: 960px)': {
      justifyContent: 'space-between'
    }
  },
  nav: {
    mx: 'auto',
    '@media screen and (max-width: 960px)': {
      display: 'none'
    },
    navLink: {
      fontSize: '16px',
      color: '#02073E',
      fontWeight: '400',
      cursor: 'pointer',
      lineHeight: '1.2',
      mr: '48px',
      transition: '500ms',
      ':last-child': {
        mr: '0'
      },
      '&:hover, &.active': {
        color: 'primary'
      }
    }
  }
};

/***/ }),

/***/ "./src/components/header/mobileDrawer.js":
/*!***********************************************!*\
  !*** ./src/components/header/mobileDrawer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-custom-scrollbars */ "react-custom-scrollbars");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_drawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/drawer */ "./src/components/drawer.js");
/* harmony import */ var contexts_drawer_drawer_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! contexts/drawer/drawer.context */ "./src/contexts/drawer/drawer.context.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _header_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header.data */ "./src/components/header/header.data.js");
/* harmony import */ var components_logo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/logo */ "./src/components/logo.js");
/* harmony import */ var assets_logo_dark_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/logo-dark.svg */ "./src/assets/logo-dark.svg");
/* harmony import */ var assets_logo_dark_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_logo_dark_svg__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\Martins\\Documents\\Projects\\fx-bot.web\\src\\components\\header\\mobileDrawer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const MobileDrawer = () => {
  const {
    state,
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(contexts_drawer_drawer_context__WEBPACK_IMPORTED_MODULE_4__["DrawerContext"]);

  // Toggle drawer
  const toggleHandler = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(() => {
    dispatch({
      type: 'TOGGLE'
    });
  }, [dispatch]);
  return __jsx(components_drawer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: "320px",
    drawerHandler: __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      sx: styles.handler,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }
    }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_5__["IoMdMenu"], {
      size: "22px",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }
    })),
    open: state.isOpen,
    toggleHandler: toggleHandler,
    closeButton: __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_5__["IoMdClose"], {
      size: "24px",
      color: "#02073E",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 20
      }
    }),
    drawerStyle: styles.drawer,
    closeBtnStyle: styles.close,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_2__["Scrollbars"], {
    autoHide: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx(components_logo__WEBPACK_IMPORTED_MODULE_8__["default"], {
    image: assets_logo_dark_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.menu,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, _header_data__WEBPACK_IMPORTED_MODULE_7__["default"].map(({
    path,
    label
  }, i) => __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_6__["Link"], {
    activeClass: "active",
    to: path,
    spy: true,
    smooth: true,
    offset: 10,
    duration: 500,
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }, label))), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.menuFooter,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "primary",
    sx: styles.button,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, "Purchase Now")))));
};
const styles = {
  handler: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    width: '26px',
    '@media screen and (min-width: 960px)': {
      display: 'none'
    }
  },
  drawer: {
    width: '100%',
    height: '100%',
    background: '#fff'
  },
  close: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '30px',
    right: '30px',
    zIndex: '1'
  },
  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    pt: '30px',
    pb: '40px',
    px: '30px'
  },
  menu: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '30px',
    a: {
      fontSize: '16px',
      fontWeight: '400',
      color: 'black',
      py: '5px',
      cursor: 'pointer'
    }
  },
  menuFooter: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: 'auto'
  },
  button: {
    fontSize: '15px',
    fw: '700',
    height: '48px',
    borderRadius: '3px',
    cursor: 'pointer',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    py: '0',
    backgroundColor: 'black',
    color: '#fff'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (MobileDrawer);

/***/ }),

/***/ "./src/components/image.js":
/*!*********************************!*\
  !*** ./src/components/image.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Image; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Martins\\Documents\\Projects\\fx-bot.web\\src\\components\\image.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


function Image(_ref) {
  let {
      src
    } = _ref,
    rest = _objectWithoutProperties(_ref, ["src"]);
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], _extends({
    src: src
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 10
    }
  }));
}

/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-stickynode */ "react-stickynode");
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_stickynode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var contexts_app_app_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! contexts/app/app.provider */ "./src/contexts/app/app.provider.js");
/* harmony import */ var react_waypoint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-waypoint */ "react-waypoint");
/* harmony import */ var react_waypoint__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_waypoint__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header */ "./src/components/header/header.js");
/* harmony import */ var _footer_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer */ "./src/components/footer/footer.js");
var _jsxFileName = "C:\\Users\\Martins\\Documents\\Projects\\fx-bot.web\\src\\components\\layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
/** @jsx jsx */








function Layout({
  children
}) {
  const isSticky = Object(contexts_app_app_provider__WEBPACK_IMPORTED_MODULE_3__["useStickyState"])('isSticky');
  const dispatch = Object(contexts_app_app_provider__WEBPACK_IMPORTED_MODULE_3__["useStickyDispatch"])();
  const setSticky = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => dispatch({
    type: 'SET_STICKY'
  }), [dispatch]);
  const removeSticky = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => dispatch({
    type: 'REMOVE_STICKY'
  }), [dispatch]);
  const onWaypointPositionChange = ({
    currentPosition
  }) => {
    if (currentPosition === 'above') {
      setSticky();
    }
    if (currentPosition === 'below') {
      removeSticky();
    }
  };
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_stickynode__WEBPACK_IMPORTED_MODULE_2___default.a, {
    enabled: isSticky,
    innerZ: 991,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_header_header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: `${isSticky ? 'sticky' : 'unSticky'}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react_waypoint__WEBPACK_IMPORTED_MODULE_4__["Waypoint"], {
    onEnter: removeSticky
    // onLeave={setSticky}
    ,
    onPositionChange: onWaypointPositionChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])("main", {
    sx: {
      variant: 'layout.main'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, children), Object(theme_ui__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_footer_footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/components/link.js":
/*!********************************!*\
  !*** ./src/components/link.js ***!
  \********************************/
/*! exports provided: NavLink, Link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return NavLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Martins\\Documents\\Projects\\fx-bot.web\\src\\components\\link.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/** @jsx jsx */


function NavLink(_ref) {
  let {
      path,
      label,
      children
    } = _ref,
    rest = _objectWithoutProperties(_ref, ["path", "label", "children"]);
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: path,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["NavLink"], _extends({}, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }), children ? children : label));
}
function Link(_ref2) {
  let {
      path,
      label,
      children
    } = _ref2,
    rest = _objectWithoutProperties(_ref2, ["path", "label", "children"]);
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: path,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Link"], _extends({}, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }), children ? children : label));
}

/***/ }),

/***/ "./src/components/logo.js":
/*!********************************!*\
  !*** ./src/components/logo.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Logo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/link */ "./src/components/link.js");
var _jsxFileName = "C:\\Users\\Martins\\Documents\\Projects\\fx-bot.web\\src\\components\\logo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/** @jsx jsx */


function Logo({
  image
}) {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    path: "/",
    sx: {
      variant: 'links.logo',
      display: 'flex',
      alignItems: 'center'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: image,
    alt: "startup landing logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/components/seo.js":
/*!*******************************!*\
  !*** ./src/components/seo.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SEO; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Martins\\Documents\\Projects\\fx-bot.web\\src\\components\\seo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function SEO({
  description = 'startup landing descriptions',
  author = 'RedQ, Inc',
  meta,
  title = 'startup landing title'
}) {
  const metaData = [{
    name: `description`,
    content: description
  }, {
    property: `og:title`,
    content: title
  }, {
    property: `og:description`,
    content: description
  }, {
    property: `og:type`,
    content: `website`
  }, {
    name: `twitter:card`,
    content: `summary`
  }, {
    name: `twitter:creator`,
    content: author
  }, {
    name: `twitter:title`,
    content: title
  }, {
    name: `twitter:description`,
    content: description
  }].concat(meta);
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, title), metaData.map(({
    name,
    content
  }, i) => __jsx("meta", {
    key: i,
    name: name,
    content: content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  })));
}
SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``
};

/***/ }),

/***/ "./src/contexts/app/app.provider.js":
/*!******************************************!*\
  !*** ./src/contexts/app/app.provider.js ***!
  \******************************************/
/*! exports provided: useStickyState, useStickyDispatch, StickyProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStickyState", function() { return useStickyState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStickyDispatch", function() { return useStickyDispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickyProvider", function() { return StickyProvider; });
/* harmony import */ var _create_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create-context */ "./src/contexts/create-context.js");
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.reducer */ "./src/contexts/app/app.reducer.js");


const [state, useDispatch, provider] = Object(_create_context__WEBPACK_IMPORTED_MODULE_0__["useCreateContext"])(_app_reducer__WEBPACK_IMPORTED_MODULE_1__["initialState"], _app_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"]);
const useStickyState = state;
const useStickyDispatch = useDispatch;
const StickyProvider = provider;

/***/ }),

/***/ "./src/contexts/app/app.reducer.js":
/*!*****************************************!*\
  !*** ./src/contexts/app/app.reducer.js ***!
  \*****************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
const initialState = {
  isSticky: false,
  isSidebarSticky: true
};
function reducer(state, {
  type
}) {
  switch (type) {
    case 'SET_STICKY':
      return _objectSpread(_objectSpread({}, state), {}, {
        isSticky: true
      });
    case 'REMOVE_STICKY':
      return _objectSpread(_objectSpread({}, state), {}, {
        isSticky: false
      });
    case 'SET_SIDEBAR_STICKY':
      return _objectSpread(_objectSpread({}, state), {}, {
        isSidebarSticky: true
      });
    case 'REMOVE_SIDEBAR_STICKY':
      return _objectSpread(_objectSpread({}, state), {}, {
        isSidebarSticky: false
      });
    default:
      {
        throw new Error(`Unsupported action type: ${type}`);
      }
  }
}

/***/ }),

/***/ "./src/contexts/create-context.js":
/*!****************************************!*\
  !*** ./src/contexts/create-context.js ***!
  \****************************************/
/*! exports provided: useCreateContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCreateContext", function() { return useCreateContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Martins\\Documents\\Projects\\fx-bot.web\\src\\contexts\\create-context.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function useCreateContext(defaultValue, reducer) {
  const defaultDispatch = () => defaultValue;
  const stateCtx = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(defaultValue);
  const dispatchCtx = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(defaultDispatch);
  function useStateCtx(property) {
    const state = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(stateCtx);
    return state[property]; // only one depth selector for comparison
  }

  function useDispatchCtx() {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(dispatchCtx);
  }
  function Provider({
    children
  }) {
    const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useReducer(reducer, defaultValue);
    return __jsx(dispatchCtx.Provider, {
      value: dispatch,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 7
      }
    }, __jsx(stateCtx.Provider, {
      value: state,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }
    }, children));
  }
  return [useStateCtx, useDispatchCtx, Provider];
}

/***/ }),

/***/ "./src/contexts/drawer/drawer.context.js":
/*!***********************************************!*\
  !*** ./src/contexts/drawer/drawer.context.js ***!
  \***********************************************/
/*! exports provided: DrawerContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerContext", function() { return DrawerContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const DrawerContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});

/***/ }),

/***/ "./src/contexts/drawer/drawer.provider.js":
/*!************************************************!*\
  !*** ./src/contexts/drawer/drawer.provider.js ***!
  \************************************************/
/*! exports provided: DrawerProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerProvider", function() { return DrawerProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _drawer_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawer.context */ "./src/contexts/drawer/drawer.context.js");
var _jsxFileName = "C:\\Users\\Martins\\Documents\\Projects\\fx-bot.web\\src\\contexts\\drawer\\drawer.provider.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


const initialState = {
  isOpen: false
};
function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE':
      return _objectSpread(_objectSpread({}, state), {}, {
        isOpen: !state.isOpen
      });
    default:
      return state;
  }
}
const DrawerProvider = ({
  children
}) => {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, initialState);
  return __jsx(_drawer_context__WEBPACK_IMPORTED_MODULE_1__["DrawerContext"].Provider, {
    value: {
      state,
      dispatch
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, children);
};

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndexPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var contexts_app_app_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! contexts/app/app.provider */ "./src/contexts/app/app.provider.js");
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! theme */ "./src/theme/index.js");
/* harmony import */ var components_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/seo */ "./src/components/seo.js");
/* harmony import */ var components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/layout */ "./src/components/layout.js");
/* harmony import */ var sections_banner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sections/banner */ "./src/sections/banner.js");
/* harmony import */ var sections_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sections/services */ "./src/sections/services.js");
/* harmony import */ var sections_jackpot__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sections/jackpot */ "./src/sections/jackpot.js");
/* harmony import */ var sections_call_to_action__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sections/call-to-action */ "./src/sections/call-to-action.js");
/* harmony import */ var sections_featured__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sections/featured */ "./src/sections/featured.js");
/* harmony import */ var sections_pricing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sections/pricing */ "./src/sections/pricing.js");
/* harmony import */ var sections_testimonials__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sections/testimonials */ "./src/sections/testimonials.js");
/* harmony import */ var sections_blogs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! sections/blogs */ "./src/sections/blogs.js");
/* harmony import */ var sections_faq__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! sections/faq */ "./src/sections/faq.js");
/* harmony import */ var sections_subscribe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! sections/subscribe */ "./src/sections/subscribe.js");
var _jsxFileName = "C:\\Users\\Martins\\Documents\\Projects\\fx-bot.web\\src\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















function IndexPage() {
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: theme__WEBPACK_IMPORTED_MODULE_3__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(contexts_app_app_provider__WEBPACK_IMPORTED_MODULE_2__["StickyProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx(components_layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx(components_seo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Startup Landing 014",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }), __jsx(sections_banner__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }), __jsx(sections_services__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }), __jsx(sections_jackpot__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }), __jsx(sections_call_to_action__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }), __jsx(sections_featured__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }), __jsx(sections_pricing__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }), __jsx(sections_testimonials__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }), __jsx(sections_blogs__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }), __jsx(sections_faq__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }), __jsx(sections_subscribe__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }))));
}

/***/ }),

/***/ "./src/sections/banner.js":
/*!********************************!*\
  !*** ./src/sections/banner.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var assets_banner_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/banner-logo.png */ "./src/assets/banner-logo.png");
/* harmony import */ var assets_banner_logo_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_banner_logo_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_banner_mockup_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/banner-mockup.png */ "./src/assets/banner-mockup.png");
/* harmony import */ var assets_banner_mockup_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_banner_mockup_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_banner_icon_1_1_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/banner-icon-1-1.svg */ "./src/assets/banner-icon-1-1.svg");
/* harmony import */ var assets_banner_icon_1_1_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_banner_icon_1_1_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_banner_icon_1_2_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/banner-icon-1-2.svg */ "./src/assets/banner-icon-1-2.svg");
/* harmony import */ var assets_banner_icon_1_2_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_banner_icon_1_2_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_banner_icon_1_3_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/banner-icon-1-3.svg */ "./src/assets/banner-icon-1-3.svg");
/* harmony import */ var assets_banner_icon_1_3_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_banner_icon_1_3_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_banner_icon_1_4_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/banner-icon-1-4.svg */ "./src/assets/banner-icon-1-4.svg");
/* harmony import */ var assets_banner_icon_1_4_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_banner_icon_1_4_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var assets_banner_icon_1_5_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/banner-icon-1-5.svg */ "./src/assets/banner-icon-1-5.svg");
/* harmony import */ var assets_banner_icon_1_5_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_banner_icon_1_5_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var assets_banner_icon_1_6_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! assets/banner-icon-1-6.svg */ "./src/assets/banner-icon-1-6.svg");
/* harmony import */ var assets_banner_icon_1_6_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(assets_banner_icon_1_6_svg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var assets_dot_pattern_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! assets/dot-pattern.svg */ "./src/assets/dot-pattern.svg");
/* harmony import */ var assets_dot_pattern_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(assets_dot_pattern_svg__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "C:\\Users\\Martins\\Documents\\Projects\\fx-bot.web\\src\\sections\\banner.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const Banner = () => {
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "section",
    id: "banner",
    sx: styles.banner,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    sx: styles.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    sx: styles.bannerIcon1,
    className: "bannerIcon",
    alt: "banner icon",
    src: assets_banner_icon_1_1_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    sx: styles.bannerIcon2,
    className: "bannerIcon",
    alt: "banner icon",
    src: assets_banner_icon_1_2_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    sx: styles.bannerIcon3,
    className: "bannerIcon",
    alt: "banner icon",
    src: assets_banner_icon_1_3_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    sx: styles.bannerIcon4,
    className: "bannerIcon",
    alt: "banner icon",
    src: assets_banner_icon_1_4_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    sx: styles.bannerIcon5,
    className: "bannerIcon",
    alt: "banner icon",
    src: assets_banner_icon_1_5_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    sx: styles.bannerIcon6,
    className: "bannerIcon",
    alt: "banner icon",
    src: assets_banner_icon_1_6_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    sx: styles.bannerIcon7,
    className: "bannerIcon",
    alt: "banner icon",
    src: assets_dot_pattern_svg__WEBPACK_IMPORTED_MODULE_11___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    sx: styles.logo,
    src: assets_banner_logo_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "logo image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, "Automate your trading with ease..."), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_banner_mockup_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    sx: styles.bannerImage,
    alt: "banner moc",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Banner);
const bannerAnim1 = _emotion_core__WEBPACK_IMPORTED_MODULE_2__["keyframes"]`
    0% {
        transform: rotate3d(0, 1, 0, 0deg);
    }

    30% {
        transform: rotate3d(0, 0, 1, 5deg);
    }

    60% {
        transform: rotate3d(1, 0, 0, 0deg);
    }

    80% {
        transform: rotate3d(0, 0, 1, 5deg);
    }

    100% {
        transform: rotate3d(0, 1, 0, 0deg);
    }
`;
const bannerAnim2 = _emotion_core__WEBPACK_IMPORTED_MODULE_2__["keyframes"]`
    0% {
        transform: translateY(0px) translateX(0) rotate(0);
    }

    30% {
        transform: translateY(30px) translateX(30px) rotate(15deg);
        transform-origin: center center;
    }

    50% {
        transform: translateY(50px) translateX(50px) rotate(45deg);
        transform-origin: right bottom;
    }

    80% {
        transform: translateY(30px) translateX(30px) rotate(15deg);
        transform-origin: left top;
    }

    100% {
        transform: translateY(0px) translateX(0) rotate(0);
        transform-origin: center center;
    }
`;
const bannerAnim3 = _emotion_core__WEBPACK_IMPORTED_MODULE_2__["keyframes"]`
    0%,
    100% {
        transform: perspective(400px) translateY(0) rotate(0deg) translateZ(0px) translateX(0);
    }

    50% {
        transform: perspective(400px) rotate(-45deg) translateZ(20px) translateY(20px) translateX(20px);
    }
`;
const styles = {
  banner: {
    overflow: 'hidden',
    backgroundColor: '#F9FBFD',
    textAlign: 'center',
    pt: ['110px', null, null, null, '130px'],
    h2: {
      fontSize: ['28px', null, null, '32px', '38px', '48px', '64px'],
      lineHeight: 1.25,
      color: '#02073E',
      fontWeight: 700,
      width: '100%',
      maxWidth: ['100%', null, null, '55%', '500px', '640px', '851px'],
      mx: 'auto',
      mt: '30px',
      mb: ['40px', null, null, '65px']
    }
  },
  logo: {
    display: 'block',
    borderRadius: '50%',
    mx: 'auto',
    boxShadow: '0px 15px 35px rgba(65, 104, 139, 0.12)'
  },
  bannerImage: {
    display: 'block',
    mx: 'auto',
    position: 'relative',
    maxWidth: ['100%', null, null, '80%', null, '100%']
  },
  container: {
    position: 'relative',
    '.bannerIcon': {
      position: 'absolute',
      display: ['none', null, null, null, 'block']
    }
  },
  bannerIcon1: {
    top: '10%',
    left: '10%',
    animation: `${bannerAnim2} 8s linear infinite`
  },
  bannerIcon2: {
    top: '10%',
    right: '10%',
    animation: `${bannerAnim2} 8s linear infinite`
  },
  bannerIcon3: {
    bottom: '40px',
    right: '-120px',
    animation: `${bannerAnim1} 5s ease-out infinite`
  },
  bannerIcon4: {
    bottom: '130px',
    left: '-120px',
    animation: `${bannerAnim1} 5s ease-out infinite`
  },
  bannerIcon5: {
    bottom: '50%',
    left: '15%'
  },
  bannerIcon6: {
    bottom: '-65px',
    left: '0px',
    animation: `${bannerAnim3} 9s linear infinite`
  },
  bannerIcon7: {
    bottom: '30%',
    right: '0%'
  }
};

/***/ }),

/***/ "./src/sections/blogs.js":
/*!*******************************!*\
  !*** ./src/sections/blogs.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-masonry-component */ "react-masonry-component");
/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_masonry_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_block_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/block-title */ "./src/components/block-title.js");
/* harmony import */ var components_cards_blog_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/cards/blog-card */ "./src/components/cards/blog-card.js");
/* harmony import */ var assets_blog_1_1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/blog-1-1.png */ "./src/assets/blog-1-1.png");
/* harmony import */ var assets_blog_1_1_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_blog_1_1_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_blog_1_2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/blog-1-2.png */ "./src/assets/blog-1-2.png");
/* harmony import */ var assets_blog_1_2_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_blog_1_2_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_blog_1_3_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/blog-1-3.png */ "./src/assets/blog-1-3.png");
/* harmony import */ var assets_blog_1_3_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_blog_1_3_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_blog_1_4_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/blog-1-4.png */ "./src/assets/blog-1-4.png");
/* harmony import */ var assets_blog_1_4_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_blog_1_4_png__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\Martins\\Documents\\Projects\\fx-bot.web\\src\\sections\\blogs.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const BLOG_DATA = [{
  image: assets_blog_1_1_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  title: 'How to work with prototype design with adobe xd featuring tools',
  description: 'The 2019 Innovation by Design Awards honor the designers and businesses solving the problems of today and tomorrow. It is one of the most sought-after design',
  path: '/',
  linkLabel: 'Learn More'
}, {
  image: null,
  title: 'Antibias receives honorable gift mention at Fast Company’s most Innovation by Design Awards',
  description: null,
  path: '/',
  linkLabel: null
}, {
  image: assets_blog_1_3_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  title: 'Multiple task wireframing with team management perform better',
  description: null,
  path: '/',
  linkLabel: null
}, {
  image: assets_blog_1_2_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  title: 'Multiple art board prototype with Figma',
  description: 'Beyond launched antibias, a Chrome extension that replaces LinkedIn profile photos',
  path: '/',
  linkLabel: 'Learn More'
}, {
  image: assets_blog_1_4_png__WEBPACK_IMPORTED_MODULE_8___default.a,
  title: 'Team presentation with latest user interface & experience reach more',
  description: null,
  path: '/',
  linkLabel: null
}];
const masonryOptions = {
  transitionDuration: 0
};
const Blogs = () => {
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "section",
    id: "news",
    sx: styles.blogs,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, __jsx(components_block_title__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Popular blog post we updated",
    text: "Updete newsfeed blog",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: react_masonry_component__WEBPACK_IMPORTED_MODULE_2___default.a,
    options: masonryOptions,
    sx: styles.blogWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, BLOG_DATA.map(({
    image,
    title,
    description,
    path,
    linkLabel
  }, index) => __jsx(components_cards_blog_card__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: index,
    image: image,
    title: title,
    description: description,
    path: path,
    linkLabel: linkLabel,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  })))));
};
/* harmony default export */ __webpack_exports__["default"] = (Blogs);
const styles = {
  blogs: {
    pt: ['80px', null, null, null, '80px', null, '100px'],
    pb: ['40px', null, null, null, '140px', null, '100px']
  },
  blogWrapper: {
    mx: '-15px'
  }
};

/***/ }),

/***/ "./src/sections/call-to-action.js":
/*!****************************************!*\
  !*** ./src/sections/call-to-action.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/link */ "./src/components/link.js");
/* harmony import */ var assets_call_image_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/call-image.png */ "./src/assets/call-image.png");
/* harmony import */ var assets_call_image_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_call_image_png__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Martins\\Documents\\Projects\\fx-bot.web\\src\\sections\\call-to-action.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const CallToAction = () => {
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "section",
    sx: styles.callToAction,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    sx: styles.flex,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "span",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, "Behind the design"), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, "Code that we used to built the website with integrating apps"), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, "Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever. Get your tests delivered at let home collect sample."), __jsx(components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    path: "#",
    sx: styles.button,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, "Explore More")), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.images,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_call_image_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "call image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  })))));
};
/* harmony default export */ __webpack_exports__["default"] = (CallToAction);
const styles = {
  callToAction: {
    mt: ['-90px', null, null, null, '0'],
    py: ['50px', null, null, null, '110px', null, '140px']
  },
  flex: {
    flexWrap: 'wrap'
  },
  content: {
    flex: ['0 0 100%', null, null, null, '0 0 38.5%'],
    textAlign: ['center', null, null, null, 'left'],
    pt: ['80px', null, null, null, '0'],
    maxWidth: ['100%', null, null, '80%', '100%'],
    mx: ['auto', null, null, null, '0'],
    mb: ['30px', null, null, null, '0'],
    span: {
      fontSize: '18px',
      fontWeight: 700,
      color: 'primary',
      display: 'block',
      lineHeight: 1
    },
    h3: {
      color: '#0F2137',
      fontWeight: 700,
      fontSize: ['23px', null, null, null, '30px', '36px', '44px'],
      maxWidth: ['100%', null, null, null, null, '90%', '100%'],
      lineHeight: 1.36,
      letterSpacing: '-1.5px',
      mt: '20px',
      mb: '30px'
    },
    p: {
      color: '#02073E',
      fontSize: ['16px', null, null, '18px'],
      lineHeight: ['2', null, null, 2.33],
      mb: '30px'
    }
  },
  button: {
    display: 'inline-block',
    verticalAlign: 'middle',
    backgroundColor: '#02073E',
    color: '#fff',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 700,
    p: '6.5px 19px',
    letterSpacing: '-0.16px',
    transition: 'all 500ms ease',
    '&:hover': {
      opacity: 0.8
    }
  },
  images: {
    flex: ['0 0 100%', null, null, null, '0 0 61.5%']
  }
};

/***/ }),

/***/ "./src/sections/faq.js":
/*!*****************************!*\
  !*** ./src/sections/faq.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/link */ "./src/components/link.js");
/* harmony import */ var components_block_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/block-title */ "./src/components/block-title.js");
/* harmony import */ var components_accordion_accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/accordion/accordion */ "./src/components/accordion/accordion.js");
var _jsxFileName = "C:\\Users\\Martins\\Documents\\Projects\\fx-bot.web\\src\\sections\\faq.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const accordionData = [{
  isExpanded: false,
  title: 'How much does it cost to be a credit card merchant?',
  contents: __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, "For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend")
}, {
  isExpanded: true,
  title: 'How can I open a merchant account?',
  contents: __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, "For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend")
}, {
  isExpanded: false,
  title: 'How long does the application take?',
  contents: __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, "For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend")
}, {
  isExpanded: false,
  title: 'Can I make payment outside of Hong Kong?',
  contents: __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, "For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend")
}, {
  isExpanded: false,
  title: 'How do I get the payment complete?',
  contents: __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, "For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend")
}];
const FAQ = () => {
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "section",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 5
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, __jsx(components_block_title__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Frequently Ask Question",
    text: "Ask your question and meet",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    sx: styles.flex,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.faqWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, __jsx(components_accordion_accordion__WEBPACK_IMPORTED_MODULE_4__["default"], {
    items: accordionData,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  })), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }, "Do you have any quesiton? Please ask here we ready to support"), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, "If your question is not list here, please feel free to make a manual support."), __jsx(components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    sx: styles.askButton,
    path: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, "Ask your Question")))));
};
/* harmony default export */ __webpack_exports__["default"] = (FAQ);
const styles = {
  flex: {
    flexWrap: 'wrap',
    flexDirection: ['column', null, null, null, null, 'row-reverse'],
    pb: ['70px', null, null, null, '90px', null, '130px']
  },
  content: {
    flex: ['0 0 100%', null, null, null, '0 0 33.333%'],
    maxWidth: ['100%', null, null, '450px', '100%'],
    mx: ['auto', null, null, null, '0'],
    mb: ['0px', null, null, null, '0'],
    textAlign: ['center', null, null, null, null, 'left'],
    mt: ['40px', null, null, null, null, '0'],
    h3: {
      fontSize: ['23px', null, null, null, '24px'],
      lineHeight: [1.5, null, null, null, 1.67],
      color: 'black',
      fontWeight: 700,
      letterSpacing: '-1.5px',
      mt: '-5px',
      pr: ['0', null, null, null, null, '30px']
    },
    p: {
      fontSize: '16px',
      lineHeight: 1.87,
      color: '#343D48',
      opacity: 0.7,
      mt: '10px',
      pr: ['0', null, null, null, null, '80px']
    }
  },
  askButton: {
    display: 'inline-block',
    verticalAlign: 'middle',
    backgroundColor: '#02073E',
    color: '#fff',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 700,
    p: '6.5px 19px',
    letterSpacing: '-0.16px',
    mt: '25px',
    transition: 'all 500ms ease',
    '&:hover': {
      opacity: 0.8
    }
  },
  faqWrapper: {
    flex: ['0 0 100%', null, null, null, '0 0 66.666%']
  }
};

/***/ }),

/***/ "./src/sections/featured.js":
/*!**********************************!*\
  !*** ./src/sections/featured.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_block_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/block-title */ "./src/components/block-title.js");
/* harmony import */ var components_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/image */ "./src/components/image.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ "react-icons/ai");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_tab_image_1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/tab-image-1.png */ "./src/assets/tab-image-1.png");
/* harmony import */ var assets_tab_image_1_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_tab_image_1_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_dot_pattern_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/dot-pattern.svg */ "./src/assets/dot-pattern.svg");
/* harmony import */ var assets_dot_pattern_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_dot_pattern_svg__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\Martins\\Documents\\Projects\\fx-bot.web\\src\\sections\\featured.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }









const Featured = () => {
  const {
    0: tab,
    1: setTab
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    active: 'budget'
  });
  const handleTab = tab => {
    if (tab === 'budget') {
      setTab(_objectSpread(_objectSpread({}, tab), {}, {
        active: 'budget'
      }));
    }
    if (tab === 'adjust') {
      setTab(_objectSpread(_objectSpread({}, tab), {}, {
        active: 'adjust'
      }));
    }
    if (tab === 'report') {
      setTab(_objectSpread(_objectSpread({}, tab), {}, {
        active: 'report'
      }));
    }
    if (tab === 'create') {
      setTab(_objectSpread(_objectSpread({}, tab), {}, {
        active: 'create'
      }));
    }
  };
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "section",
    sx: styles.featured,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    sx: styles.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx(components_block_title__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "What the features of product",
    text: "Introducing all screen details",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.tabButtonTopWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.tabButtonWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: () => handleTab('budget'),
    className: `${tab.active === 'budget' ? 'active' : ''}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__["AiFillDollarCircle"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }), "Budget Overview"), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: () => handleTab('adjust'),
    className: `${tab.active === 'adjust' ? 'active' : ''}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaCog"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 15
    }
  }), "Create & adjust"), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: () => handleTab('report'),
    className: `${tab.active === 'report' ? 'active' : ''}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__["AiFillPieChart"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 15
    }
  }), "View Reports"), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: () => handleTab('create'),
    className: `${tab.active === 'create' ? 'active' : ''}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaBriefcase"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }), "Create & adjust"))), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.tabContent,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, tab.active === 'budget' && __jsx(components_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
    src: assets_tab_image_1_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "tab image",
    className: "tabImage",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }), tab.active === 'create' && __jsx(components_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
    src: assets_tab_image_1_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "tab image",
    className: "tabImage",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }), tab.active === 'adjust' && __jsx(components_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
    src: assets_tab_image_1_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "tab image",
    className: "tabImage",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }), tab.active === 'report' && __jsx(components_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
    src: assets_tab_image_1_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "tab image",
    className: "tabImage",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (Featured);
const fadeIn = _emotion_core__WEBPACK_IMPORTED_MODULE_2__["keyframes"]`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const styles = {
  featured: {
    pt: ['80px', null, null, null, '80px', null, '100px'],
    backgroundColor: '#F9FAFC'
  },
  container: {
    position: 'relative',
    top: '150px',
    mt: '-150px'
  },
  tabButtonTopWrapper: {
    overflowY: ['hidden', null, null, null, null, 'inherit'],
    overflowX: ['auto', null, null, null, null, 'inherit']
  },
  tabButtonWrapper: {
    width: ['700px', null, null, null, null, '100%'],
    mx: ['auto', null, null, null, null, '0'],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottom: '1px solid rgba(1,7,13,.1)',
    mb: '35px',
    button: {
      display: 'flex',
      alignItems: 'center',
      pb: ['15px', null, null, null, '35px'],
      px: ['15px', null, null, null, '30px'],
      flexShrink: '0',
      border: 0,
      backgroundColor: 'rgba(0,0,0,0)',
      color: '#0F2137',
      fontSize: ['14px', null, null, null, '18px'],
      fontWeight: 500,
      lineHeight: 1,
      position: 'relative',
      transition: 'all 500ms ease',
      svg: {
        fontSize: ['18px', null, null, null, '30px'],
        color: '#ADBDD0',
        opacity: 0.7,
        mr: '15px',
        transition: 'all 500ms ease'
      },
      '&:hover, &.active': {
        backgroundColor: 'rgba(0,0,0,0)',
        color: '#0F2137',
        svg: {
          color: '#0F2137',
          opacity: 1
        },
        '&::before': {
          transform: 'scale(1,1)'
        }
      },
      '&::before': {
        content: "''",
        position: 'absolute',
        bottom: '-2px',
        backgroundColor: '#0F2137',
        left: 0,
        width: '100%',
        height: '3px',
        transform: 'scale(0,1)',
        transition: 'transform 500ms ease'
      }
    }
  },
  tabContent: {
    minHeight: ['190px', null, '300px', '385px', null, '600px'],
    position: 'relative',
    '&::before': {
      content: "''",
      width: '302px',
      height: '347px',
      backgroundImage: `url(${assets_dot_pattern_svg__WEBPACK_IMPORTED_MODULE_8___default.a})`,
      position: 'absolute',
      bottom: '-30px',
      right: '-40px',
      display: ['none', null, null, null, null, 'block']
    },
    '.tabImage': {
      position: 'relative',
      animation: `${fadeIn} 0.8s linear`
    }
  }
};

/***/ }),

/***/ "./src/sections/jackpot.js":
/*!*********************************!*\
  !*** ./src/sections/jackpot.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_cards_jackpot_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/cards/jackpot-card */ "./src/components/cards/jackpot-card.js");
/* harmony import */ var assets_jackpot_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/jackpot.png */ "./src/assets/jackpot.png");
/* harmony import */ var assets_jackpot_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_jackpot_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_jackpot_1_1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/jackpot-1-1.png */ "./src/assets/jackpot-1-1.png");
/* harmony import */ var assets_jackpot_1_1_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_jackpot_1_1_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_jackpot_1_2_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/jackpot-1-2.png */ "./src/assets/jackpot-1-2.png");
/* harmony import */ var assets_jackpot_1_2_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_jackpot_1_2_png__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Martins\\Documents\\Projects\\fx-bot.web\\src\\sections\\jackpot.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const JACKPOT_DATA = [{
  image: assets_jackpot_1_1_png__WEBPACK_IMPORTED_MODULE_4___default.a,
  text: 'Smart automation of trade with 24/5 scalping strategy...',
  heading: 'Smart Features'
}, {
  image: assets_jackpot_1_2_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  text: 'Never loss trades again, one-Time payment, Life-time Robot ',
  heading: 'Trade Security '
}];
const Jackpot = () => {
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "section",
    sx: styles.jackpot,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    sx: styles.flex,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_jackpot_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "jackpot image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  })), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.heading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "span",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  }, "Core features"), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  }, "AI trading Robot with great results...")), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.jackpotCardBox,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, JACKPOT_DATA.map(({
    image,
    heading,
    text
  }, index) => __jsx(components_cards_jackpot_card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    image: image,
    heading: heading,
    text: text,
    key: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  })))))));
};
/* harmony default export */ __webpack_exports__["default"] = (Jackpot);
const styles = {
  jackpot: {
    pt: ['65px', null, null, null, '85px', null, '125px']
  },
  flex: {
    flexWrap: 'wrap'
  },
  image: {
    flex: ['0 0 100%', null, null, null, null, '0 0 62.5%'],
    img: {
      maxWidth: ['100%', null, null, null, null, null, 'none'],
      float: 'right'
    }
  },
  content: {
    flex: ['0 0 100%', null, null, null, null, '0 0 37.5%']
  },
  heading: {
    mb: '30px',
    pt: '60px',
    textAlign: ['center', null, null, null, null, 'left'],
    pl: ['0', null, null, '30px'],
    maxWidth: ['80%', null, null, '100%'],
    mx: ['auto', null, null, '0'],
    span: {
      display: 'block',
      fontSize: '18px',
      color: 'primary',
      fontWeight: 700,
      lineHeight: 1,
      mb: '20px'
    },
    h3: {
      color: '#0F2137',
      fontSize: ['23px', null, null, null, '30px', '36px', '44px'],
      maxWidth: ['100%', null, null, null, null, '90%', '100%'],
      fontWeight: 700,
      letterSpacing: '-1.5px',
      lineHeight: 1.36
    }
  },
  jackpotCardBox: {
    display: ['grid', null, null, null, null, 'block'],
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr']
  }
};

/***/ }),

/***/ "./src/sections/pricing.js":
/*!*********************************!*\
  !*** ./src/sections/pricing.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_block_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/block-title */ "./src/components/block-title.js");
/* harmony import */ var components_cards_price_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/cards/price-card */ "./src/components/cards/price-card.js");
/* harmony import */ var assets_price_user_1_1_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/price-user-1-1.svg */ "./src/assets/price-user-1-1.svg");
/* harmony import */ var assets_price_user_1_1_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_price_user_1_1_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_price_user_1_2_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/price-user-1-2.svg */ "./src/assets/price-user-1-2.svg");
/* harmony import */ var assets_price_user_1_2_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_price_user_1_2_svg__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\Martins\\Documents\\Projects\\fx-bot.web\\src\\sections\\pricing.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }







const PRICE_MONTHLY_DATA = [{
  recommended: null,
  title: 'For Team pack',
  icon: assets_price_user_1_1_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
  amount: '29.99/mo',
  options: [{
    status: true,
    label: 'Ultimate access to all course, exercises and assessments'
  }, {
    status: true,
    label: 'Free access for all kind of exercise corrections with downloads.'
  }, {
    status: true,
    label: 'Total assessment corrections with free download access system'
  }, {
    status: false,
    label: 'Unlimited download of courses on the mobile app contents'
  }, {
    status: false,
    label: 'Download and print courses and exercises in PDF'
  }]
}, {
  recommended: 'Recommended',
  title: 'For Organization pack',
  icon: assets_price_user_1_2_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
  amount: '49.99/mo',
  options: [{
    status: true,
    label: 'Ultimate access to all course, exercises and assessments'
  }, {
    status: true,
    label: 'Free access for all kind of exercise corrections with downloads.'
  }, {
    status: true,
    label: 'Total assessment corrections with free download access system'
  }, {
    status: true,
    label: 'Unlimited download of courses on the mobile app contents'
  }, {
    status: true,
    label: 'Download and print courses and exercises in PDF'
  }]
}];
const PRICE_YEARLY_DATA = [{
  recommended: null,
  title: 'For Team pack',
  icon: assets_price_user_1_1_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
  amount: '99.99/yr',
  options: [{
    status: true,
    label: 'Ultimate access to all course, exercises and assessments'
  }, {
    status: true,
    label: 'Free access for all kind of exercise corrections with downloads.'
  }, {
    status: true,
    label: 'Total assessment corrections with free download access system'
  }, {
    status: false,
    label: 'Unlimited download of courses on the mobile app contents'
  }, {
    status: false,
    label: 'Download and print courses and exercises in PDF'
  }]
}, {
  recommended: 'Recommended',
  title: 'For Organization pack',
  icon: assets_price_user_1_2_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
  amount: '199.99/yr',
  options: [{
    status: true,
    label: 'Ultimate access to all course, exercises and assessments'
  }, {
    status: true,
    label: 'Free access for all kind of exercise corrections with downloads.'
  }, {
    status: true,
    label: 'Total assessment corrections with free download access system'
  }, {
    status: true,
    label: 'Unlimited download of courses on the mobile app contents'
  }, {
    status: true,
    label: 'Download and print courses and exercises in PDF'
  }]
}];
const Pricing = () => {
  const {
    0: plan,
    1: setPlan
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    active: 'monthly',
    pricingPlan: PRICE_MONTHLY_DATA
  });
  const handlePlan = plan => {
    if (plan === 'monthly') {
      setPlan(_objectSpread(_objectSpread({}, plan), {}, {
        active: 'monthly',
        pricingPlan: PRICE_MONTHLY_DATA
      }));
    }
    if (plan === 'yearly') {
      setPlan(_objectSpread(_objectSpread({}, plan), {}, {
        active: 'yearly',
        pricingPlan: PRICE_YEARLY_DATA
      }));
    }
  };
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    as: "section",
    id: "pricing",
    sx: styles.pricing,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 5
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 7
    }
  }, __jsx(components_block_title__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "What deal suit you perfect",
    text: "Meet our pricing plan",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 9
    }
  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.btnWrap,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: () => handlePlan('monthly'),
    className: `${plan.active === 'monthly' ? 'active' : ''}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 11
    }
  }, "Monthly Plan"), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: () => handlePlan('yearly'),
    className: `${plan.active === 'yearly' ? 'active' : ''}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 11
    }
  }, "Annual Plan")), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    sx: styles.grid,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 9
    }
  }, plan.pricingPlan.map((price, index) => __jsx(components_cards_price_card__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: price,
    key: `${plan.active}-card--key${index}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 13
    }
  })))));
};
/* harmony default export */ __webpack_exports__["default"] = (Pricing);
const fadeIn = _emotion_core__WEBPACK_IMPORTED_MODULE_1__["keyframes"]`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = _emotion_core__WEBPACK_IMPORTED_MODULE_1__["keyframes"]`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
const styles = {
  pricing: {
    pt: ['200px', null, null, null, '200px', null, '240px'],
    pb: ['80px', null, null, null, '80px', '100px', '140px']
  },
  btnWrap: {
    width: '302px',
    height: '60px',
    mt: ['-20px', null, null, '0px'],
    mb: ['40px', null, null, '60px'],
    backgroundColor: '#F7F8FB',
    borderRadius: '5px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    p: '7px',
    mx: 'auto',
    button: {
      backgroundColor: 'rgba(0,0,0,0)',
      borderRadius: '5px',
      color: '#0F2137',
      letterSpacing: '-0.24px',
      fontSize: '16px',
      fontWeight: 500,
      position: 'relative',
      outline: 'none',
      fontFamily: 'DM Sans',
      transition: 'all 500ms ease',
      '&.active': {
        boxShadow: '0px 3px 3.8px rgba(38, 78, 118, 0.1)',
        backgroundColor: '#ffffff'
      },
      '&:hover': {
        backgroundColor: 'rgba(0,0,0,0)'
      }
    }
  },
  grid: {
    width: '100%',
    maxWidth: '960px',
    mx: ['auto'],
    gridGap: '30px',
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr'],
    '.priceCard': {
      '.priceHeader': {
        animation: `${fadeIn} 0.8s linear`
      },
      'ul > li': {
        animation: `${fadeIn2} 0.7s linear`
      },
      '.priceAmount': {
        animation: `${fadeIn} 0.9s linear`
      },
      '.priceButton': {
        animation: `${fadeIn2} 0.7s linear`
      }
    }
  }
};

/***/ }),

/***/ "./src/sections/services.js":
/*!**********************************!*\
  !*** ./src/sections/services.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_block_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/block-title */ "./src/components/block-title.js");
/* harmony import */ var components_cards_service_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/cards/service-card */ "./src/components/cards/service-card.js");
/* harmony import */ var assets_service_1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/service-1.png */ "./src/assets/service-1.png");
/* harmony import */ var assets_service_1_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_service_1_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_service_2_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/service-2.png */ "./src/assets/service-2.png");
/* harmony import */ var assets_service_2_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_service_2_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_service_3_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/service-3.png */ "./src/assets/service-3.png");
/* harmony import */ var assets_service_3_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_service_3_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_service_4_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/service-4.png */ "./src/assets/service-4.png");
/* harmony import */ var assets_service_4_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_service_4_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_service_5_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/service-5.png */ "./src/assets/service-5.png");
/* harmony import */ var assets_service_5_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_service_5_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var assets_service_6_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/service-6.png */ "./src/assets/service-6.png");
/* harmony import */ var assets_service_6_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_service_6_png__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\Martins\\Documents\\Projects\\fx-bot.web\\src\\sections\\services.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const SERVICES_DATA = [{
  image: assets_service_1_png__WEBPACK_IMPORTED_MODULE_4___default.a,
  text: 'Get your info tests delivered at home collect a sample from the your progress tests.',
  heading: '3D modeling & art',
  path: '#'
}, {
  image: assets_service_2_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  text: 'Get your info tests delivered at home collect a sample from the your progress tests.',
  heading: 'Digital promotion',
  path: '#'
}, {
  image: assets_service_3_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  text: 'Get your info tests delivered at home collect a sample from the your progress tests.',
  heading: 'Business Enterprise',
  path: '#'
}, {
  image: assets_service_4_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  text: 'Get your info tests delivered at home collect a sample from the your progress tests.',
  heading: 'Marketing & advertising',
  path: '#'
}, {
  image: assets_service_5_png__WEBPACK_IMPORTED_MODULE_8___default.a,
  text: 'Get your info tests delivered at home collect a sample from the your progress tests.',
  heading: 'Ultimate development',
  path: '#'
}, {
  image: assets_service_6_png__WEBPACK_IMPORTED_MODULE_9___default.a,
  text: 'Get your info tests delivered at home collect a sample from the your progress tests.',
  heading: 'Online support',
  path: '#'
}];
const Services = () => {
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "section",
    id: "services",
    sx: styles.services,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, __jsx(components_block_title__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "What the features of product",
    text: "Features are highlighted here",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    sx: styles.grid,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, SERVICES_DATA.map(({
    image,
    text,
    heading,
    path
  }, index) => __jsx(components_cards_service_card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    image: image,
    text: text,
    heading: heading,
    path: path,
    key: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  })))));
};
/* harmony default export */ __webpack_exports__["default"] = (Services);
const styles = {
  services: {
    pt: ['80px', null, null, null, '80px', null, '100px']
  },
  grid: {
    gridGap: '30px',
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr', null, '1fr 1fr 1fr']
  }
};

/***/ }),

/***/ "./src/sections/subscribe.js":
/*!***********************************!*\
  !*** ./src/sections/subscribe.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Martins\\Documents\\Projects\\fx-bot.web\\src\\sections\\subscribe.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Subscribe = () => {
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "section",
    sx: styles.subscribe,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, "Subscribe to get notified about event"), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, "By subscribing with your mail, you will accept our privacy policy"), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "form",
    sx: styles.form,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "label",
    htmlFor: "subscribeEmail",
    variant: "styles.srOnly",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, "Email"), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "Enter your email",
    type: "email",
    id: "subscribeEmail",
    sx: styles.input,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "submit",
    sx: styles.button,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, "Subscribe us"))));
};
/* harmony default export */ __webpack_exports__["default"] = (Subscribe);
const styles = {
  subscribe: {
    py: ['80px', null, null, null, '80px', '100px', '140px'],
    backgroundColor: '#020718',
    h3: {
      textAlign: 'center',
      fontSize: ['23px', null, null, null, null, '30px', '36px'],
      lineHeight: [1.5, null, null, '1'],
      color: '#fff',
      letterSpacing: ['-0.5px'],
      mb: ['0px', null, null, '15px'],
      width: ['70%', null, null, 'auto'],
      mx: ['auto', null, null, '0']
    },
    p: {
      fontSize: ['16px'],
      color: '#fff',
      opacity: '.6',
      letterSpacing: ['-0.5px'],
      textAlign: 'center',
      width: ['70%', null, null, 'auto'],
      mx: ['auto', null, null, '0'],
      mt: ['10px', null, null, '0']
    }
  },
  form: {
    width: ['100%'],
    maxWidth: ['555px'],
    mx: ['auto'],
    display: ['flex'],
    flexWrap: ['wrap'],
    mt: ['30px', null, null, null, '60px']
  },
  input: {
    width: ['100%'],
    maxWidth: ['100%', null, '370px', '380px'],
    borderRadius: '5px',
    border: 'none',
    backgroundColor: 'rgba(255,255,255, .08)',
    outline: 'none',
    color: 'rgba(255,255,255, .8)',
    fontSize: '16px',
    pl: ['0px', null, null, '30px'],
    height: ['50px', null, null, '60px'],
    mr: ['0px', null, null, '15px'],
    textAlign: ['center', null, null, 'left']
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: '5px',
    fontWeight: '500',
    fontSize: ['18px'],
    color: '#020718',
    letterSpacing: '-0.5px',
    outline: 'none',
    padding: ['0px 30.75px'],
    minHeight: ['50px', null, null, '60px'],
    width: ['100%', null, null, 'auto'],
    mt: ['10px', null, null, '0'],
    mx: ['auto', null, null, '0'],
    '&:hover': {
      backgroundColor: '#fff',
      opacity: '0.8'
    }
  }
};

/***/ }),

/***/ "./src/sections/testimonials.js":
/*!**************************************!*\
  !*** ./src/sections/testimonials.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ "swiper");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/react */ "swiper/react");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_block_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/block-title */ "./src/components/block-title.js");
/* harmony import */ var components_cards_testimonial_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/cards/testimonial-card */ "./src/components/cards/testimonial-card.js");
/* harmony import */ var assets_testimonial_1_1_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/testimonial-1-1.png */ "./src/assets/testimonial-1-1.png");
/* harmony import */ var assets_testimonial_1_1_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_1_1_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_testimonial_1_2_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/testimonial-1-2.png */ "./src/assets/testimonial-1-2.png");
/* harmony import */ var assets_testimonial_1_2_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_1_2_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_testimonial_1_3_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/testimonial-1-3.png */ "./src/assets/testimonial-1-3.png");
/* harmony import */ var assets_testimonial_1_3_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_1_3_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var assets_testimonial_1_4_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/testimonial-1-4.png */ "./src/assets/testimonial-1-4.png");
/* harmony import */ var assets_testimonial_1_4_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_1_4_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var assets_testimonial_1_5_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! assets/testimonial-1-5.png */ "./src/assets/testimonial-1-5.png");
/* harmony import */ var assets_testimonial_1_5_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_1_5_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var assets_testimonial_1_6_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! assets/testimonial-1-6.png */ "./src/assets/testimonial-1-6.png");
/* harmony import */ var assets_testimonial_1_6_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_1_6_png__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "C:\\Users\\Martins\\Documents\\Projects\\fx-bot.web\\src\\sections\\testimonials.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }












swiper__WEBPACK_IMPORTED_MODULE_2___default.a.use([swiper__WEBPACK_IMPORTED_MODULE_2__["Autoplay"]]);
const TESTIMONIALS_DATA = [[{
  image: assets_testimonial_1_1_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  text: 'I would like to take this oppertunity to thank SA Places for the great service rendered to us and in particular Estelle. You got me the best place ever in just a few moments after I spoke to you.',
  username: '@hello.mimmie',
  name: 'Minnie Horn'
}, {
  image: assets_testimonial_1_2_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  text: 'Many thanks for you kind and efficient service. I have already and will definitely continue to recommend your services to others in the future.',
  username: '@merryn.manley',
  name: 'Merryn Manley'
}], [{
  image: assets_testimonial_1_3_png__WEBPACK_IMPORTED_MODULE_8___default.a,
  text: 'I would just like to compliment Estelle Pestana. She has been most professional and gone to great lengths to assist me. Her patience with me as I continuously changed my plans is to be commended. Her service re-affirms why I always choose to book through an agency instead of directly. Thank you',
  username: '@hi.veona',
  name: 'Veona Watson'
}, {
  image: assets_testimonial_1_4_png__WEBPACK_IMPORTED_MODULE_9___default.a,
  text: 'I have seldom experienced such an efficient help and support like from you! Thank you so much. We will do all the bookings during the next few days and I will revert to you with the end result',
  username: '@hey.nku',
  name: 'Paseka Nku'
}], [{
  image: assets_testimonial_1_5_png__WEBPACK_IMPORTED_MODULE_10___default.a,
  text: 'Thank you for all your help. Your service was excellent and very FAST.',
  username: '@cherice.me',
  name: 'Cherice Justin'
}, {
  image: assets_testimonial_1_6_png__WEBPACK_IMPORTED_MODULE_11___default.a,
  text: 'For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend',
  username: '@myself.thais',
  name: 'Thais Carballal'
}], [{
  image: assets_testimonial_1_1_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  text: 'I would like to take this oppertunity to thank SA Places for the great service rendered to us and in particular Estelle. You got me the best place ever in just a few moments after I spoke to you.',
  username: '@hello.mimmie',
  name: 'Minnie Horn'
}, {
  image: assets_testimonial_1_2_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  text: 'Many thanks for you kind and efficient service. I have already and will definitely continue to recommend your services to others in the future.',
  username: '@merryn.manley',
  name: 'Merryn Manley'
}], [{
  image: assets_testimonial_1_3_png__WEBPACK_IMPORTED_MODULE_8___default.a,
  text: 'I would just like to compliment Estelle Pestana. She has been most professional and gone to great lengths to assist me. Her patience with me as I continuously changed my plans is to be commended. Her service re-affirms why I always choose to book through an agency instead of directly. Thank you',
  username: '@hi.veona',
  name: 'Veona Watson'
}, {
  image: assets_testimonial_1_4_png__WEBPACK_IMPORTED_MODULE_9___default.a,
  text: 'I have seldom experienced such an efficient help and support like from you! Thank you so much. We will do all the bookings during the next few days and I will revert to you with the end result',
  username: '@hey.nku',
  name: 'Paseka Nku'
}], [{
  image: assets_testimonial_1_5_png__WEBPACK_IMPORTED_MODULE_10___default.a,
  text: 'Thank you for all your help. Your service was excellent and very FAST.',
  username: '@cherice.me',
  name: 'Cherice Justin'
}, {
  image: assets_testimonial_1_6_png__WEBPACK_IMPORTED_MODULE_11___default.a,
  text: 'For our recent trip to S.A. I booked several accommodation thru SA Places. I just wanted to tell you that everything worked out perfectly with all the bookings and also your booking was very quick and professional. I hope I have the opportunity to re-visit South Africa soon, I will then make my bookings with your company again. I will also recommend',
  username: '@myself.thais',
  name: 'Thais Carballal'
}]];
const Testimonials = () => {
  const testimonialCarousel = {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 1000,
    centeredSlides: true,
    autoHeight: true,
    autoplay: {
      waitForTransition: false,
      delay: 4000
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    }
  };
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "section",
    id: "testimonials",
    sx: styles.testimonials,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 5
    }
  }, __jsx(components_block_title__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "What client say about us",
    text: "Customer testimonial",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 7
    }
  }), __jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__["Swiper"], _extends({}, testimonialCarousel, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 7
    }
  }), TESTIMONIALS_DATA.map((item, index) => __jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__["SwiperSlide"], {
    key: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 11
    }
  }, item.map(({
    image,
    text,
    name,
    username
  }, _index) => __jsx(components_cards_testimonial_card__WEBPACK_IMPORTED_MODULE_5__["default"], {
    image: image,
    text: text,
    name: name,
    key: _index,
    username: username,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 15
    }
  }))))));
};
/* harmony default export */ __webpack_exports__["default"] = (Testimonials);
const styles = {
  testimonials: {
    backgroundColor: '#F4F4F6',
    pt: ['80px', null, null, null, '80px', null, '100px'],
    pb: ['60px', null, null, null, '80px', null, '120px']
  }
};

/***/ }),

/***/ "./src/theme/index.js":
/*!****************************!*\
  !*** ./src/theme/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  // example colors with dark mode
  breakpoints: ['376px', '576px', '768px', '992px', '1200px', '1650px'],
  colors: {
    text: '#343D48',
    // body color and primary color
    text_secondary: '#02073E',
    // secondary body color
    heading: '#02073E',
    // primary heading color
    heading_secondary: '#343D48',
    // heading color
    background: '#FFFFFF',
    // body background color
    background_secondary: '#F9FBFD',
    // secondary background color
    border_color: '#E9EDF5',
    // border color
    primary: '#8D448B',
    // primary button and link color
    secondary: '#793677',
    // secondary color - can be used for hover states
    black: '#0F2137',
    // black color
    gray: '#F8FAFC',
    muted: '#7B8188',
    // muted color
    accent: '#609' // a contrast color for emphasizing UI
  },

  fonts: {
    body: 'DM Sans',
    // body:
    //   'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'DM Sans',
    // heading: 'Bree Serif',
    monospace: 'Menlo, monospace'
  },
  fontSizes: [13, 14, 16, 18, 20, 21, 30, 36, 48, 64],
  fontWeights: {
    body: 'normal',
    heading: 500,
    bold: 700
  },
  lineHeights: {
    body: 2,
    heading: '50px'
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
    heading: '-0.5px'
  },
  // space: [0, 4, 8, 16, 32, 64],
  sizes: {
    container: ['1250px']
  },
  // variants can use custom, user-defined names
  layout: {
    container: {
      px: ['15px', null, null, '30px', '40px']
    },
    header: {
      color: '#02073E',
      fontWeight: 'normal',
      py: 3
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center'
      // justifyContent: 'space-between',
    },

    main: {},
    footer: {
      backgroundColor: 'background_secondary'
    }
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4,
      letterSpacing: 'heading',
      color: 'heading'
    },
    heroPrimary: {
      fontSize: [5, 55],
      fontWeight: 'normal',
      lineHeight: ['40px', '80px'],
      letterSpacing: '-1px',
      textAlign: ['center', 'left']
    },
    title: {
      variant: 'text.heading',
      fontWeight: 'bold',
      fontSize: 18,
      lineHeight: '30px',
      color: '#0F2137'
    },
    heroSecondary: {
      color: 'text_secondary',
      lineHeight: ['30px', '42px'],
      letterSpacing: '0.1em',
      textAlign: ['center', 'left']
    },
    lead: {
      fontSize: 40,
      fontFamily: 'DM Sans',
      fontWeight: '500',
      lineHeight: '60px',
      letterSpacing: '-1.5px',
      color: '#0F2137'
    },
    muted: {
      lineHeight: '26px',
      color: 'muted'
    },
    secondary: {
      fontWeight: 500,
      color: '#00A99D',
      lineHeight: '40px'
    }
  },
  links: {
    bold: {
      fontWeight: 'bold'
    },
    nav: {
      display: ['none', null, 'inline-block'],
      p: 2
    },
    footer: {
      display: 'block',
      px: 0,
      color: 'inherit',
      cursor: 'pointer',
      textDecoration: 'none'
    }
  },
  images: {
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 99999
    }
  },
  // variants for buttons
  buttons: {
    menu: {
      display: [null, null, 'none']
    },
    // default variant for MenuButton
    // you can reference other values defined in the theme
    primary: {
      fontWeight: 'bold',
      color: 'white',
      bg: 'primary',
      cursor: 'pointer',
      transition: '500ms',
      fontSize: 2,
      outline: 'none',
      '&:hover': {
        bg: 'secondary'
      }
    }
  },
  styles: {
    // To add base, top-level styles to the <body> element, use theme.styles.root.
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      WebkitFontSmoothing: 'antialiased'
    },
    a: {
      cursor: 'pointer',
      textDecoration: 'none'
    },
    button: {
      cursor: 'pointer'
    },
    // Divider styles
    hr: {
      border: 0,
      borderBottom: '1px solid',
      borderColor: '#D9E0E7'
    },
    // also you can use other HTML elements style here
    ul: {
      listStyle: 'none'
    },
    srOnly: {
      border: '0 !important',
      clip: 'rect(1px, 1px, 1px, 1px) !important',
      clipPath: 'inset(50%) !important',
      height: '1px !important',
      margin: '-1px !important',
      overflow: 'hidden !important',
      padding: '0 !important',
      position: 'absolute !important',
      width: '1px !important',
      whiteSpace: 'nowrap !important'
    }
  }
});

/***/ }),

/***/ "@emotion/core":
/*!********************************!*\
  !*** external "@emotion/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "rc-drawer":
/*!****************************!*\
  !*** external "rc-drawer" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-drawer");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-custom-scrollbars":
/*!******************************************!*\
  !*** external "react-custom-scrollbars" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-custom-scrollbars");

/***/ }),

/***/ "react-icons/ai":
/*!*********************************!*\
  !*** external "react-icons/ai" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/ai");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-icons/io":
/*!*********************************!*\
  !*** external "react-icons/io" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/io");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-masonry-component":
/*!******************************************!*\
  !*** external "react-masonry-component" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-masonry-component");

/***/ }),

/***/ "react-scroll":
/*!*******************************!*\
  !*** external "react-scroll" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ }),

/***/ "react-stickynode":
/*!***********************************!*\
  !*** external "react-stickynode" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stickynode");

/***/ }),

/***/ "react-waypoint":
/*!*********************************!*\
  !*** external "react-waypoint" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-waypoint");

/***/ }),

/***/ "swiper":
/*!*************************!*\
  !*** external "swiper" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swiper");

/***/ }),

/***/ "swiper/react":
/*!*******************************!*\
  !*** external "swiper/react" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("swiper/react");

/***/ }),

/***/ "theme-ui":
/*!***************************!*\
  !*** external "theme-ui" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("theme-ui");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2FjY29yZGlvbi1hcnJvdy1lLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2FjY29yZGlvbi1hcnJvdy5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9hcnJvdy1hbmdsZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9iYW5uZXItaWNvbi0xLTEuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvYmFubmVyLWljb24tMS0yLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2Jhbm5lci1pY29uLTEtMy5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9iYW5uZXItaWNvbi0xLTQuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvYmFubmVyLWljb24tMS01LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2Jhbm5lci1pY29uLTEtNi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9iYW5uZXItbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9iYW5uZXItbW9ja3VwLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2Jsb2ctMS0xLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2Jsb2ctMS0yLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2Jsb2ctMS0zLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2Jsb2ctMS00LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2NhbGwtaW1hZ2UucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZG90LXBhdHRlcm4uc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamFja3BvdC0xLTEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamFja3BvdC0xLTIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamFja3BvdC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9sb2dvLWRhcmsuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvbG9nby1saWdodC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wcmljZS1hcnJvdy5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wcmljZS1jaGVjay5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wcmljZS1jcm9zcy5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wcmljZS11c2VyLTEtMS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wcmljZS11c2VyLTEtMi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zZXJ2aWNlLTEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2VydmljZS0yLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NlcnZpY2UtMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zZXJ2aWNlLTQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2VydmljZS01LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NlcnZpY2UtNi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy90YWItaW1hZ2UtMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy90ZXN0aW1vbmlhbC0xLTEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvdGVzdGltb25pYWwtMS0yLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3Rlc3RpbW9uaWFsLTEtMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy90ZXN0aW1vbmlhbC0xLTQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvdGVzdGltb25pYWwtMS01LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3Rlc3RpbW9uaWFsLTEtNi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hY2NvcmRpb24vYmFzZS1hY2NvcmRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWNjb3JkaW9uL3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ibG9jay10aXRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJkcy9ibG9nLWNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FyZHMvamFja3BvdC1jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcmRzL3ByaWNlLWNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FyZHMvc2VydmljZS1jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcmRzL3Rlc3RpbW9uaWFsLWNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZHJhd2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL21vYmlsZURyYXdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sb2dvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Nlby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvYXBwL2FwcC5wcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvYXBwL2FwcC5yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250ZXh0cy9jcmVhdGUtY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvZHJhd2VyL2RyYXdlci5jb250ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250ZXh0cy9kcmF3ZXIvZHJhd2VyLnByb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvYmFubmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9ibG9ncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvY2FsbC10by1hY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL2ZhcS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvZmVhdHVyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL2phY2twb3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL3ByaWNpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL3NlcnZpY2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9zdWJzY3JpYmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL3Rlc3RpbW9uaWFscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGVtb3Rpb24vY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZyYW1lci1tb3Rpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyYy1kcmF3ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWN1c3RvbS1zY3JvbGxiYXJzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvYWlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9mYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2lvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tYXNvbnJ5LWNvbXBvbmVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNjcm9sbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN0aWNreW5vZGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC13YXlwb2ludFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN3aXBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN3aXBlci9yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRoZW1lLXVpXCIiXSwibmFtZXMiOlsiY2FjaGVkT2JzZXJ2ZXIiLCJsaXN0ZW5lcnMiLCJNYXAiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJnZXRPYnNlcnZlciIsInVuZGVmaW5lZCIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJoYXMiLCJ0YXJnZXQiLCJjYiIsImdldCIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ1bm9ic2VydmUiLCJkZWxldGUiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwiZWwiLCJvYnNlcnZlciIsIm9ic2VydmUiLCJzZXQiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJwcmVmZXRjaCIsInJvdXRlciIsImhyZWYiLCJhcyIsIm9wdGlvbnMiLCJjYXRjaCIsImlzTW9kaWZpZWRFdmVudCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJhbHRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwibGlua0NsaWNrZWQiLCJlIiwicmVwbGFjZSIsInNoYWxsb3ciLCJzY3JvbGwiLCJub2RlTmFtZSIsInByZXZlbnREZWZhdWx0IiwiaW5kZXhPZiIsInRoZW4iLCJzdWNjZXNzIiwic2Nyb2xsVG8iLCJkb2N1bWVudCIsImJvZHkiLCJmb2N1cyIsIkxpbmsiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsImFyZ3MiLCJFcnJvciIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsImtleXMiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwicGFzc0hyZWYiLCJvcHRpb25hbFByb3BzIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJ1c2VSZWYiLCJjdXJyZW50Iiwid2FybiIsInAiLCJjaGlsZEVsbSIsInNldENoaWxkRWxtIiwidXNlU3RhdGUiLCJwYXRobmFtZSIsInVzZU1lbW8iLCJyZXNvbHZlZEhyZWYiLCJ1c2VFZmZlY3QiLCJ0YWdOYW1lIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkUHJvcHMiLCJyZWYiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5IiwidHlwZSIsImNsb25lRWxlbWVudCIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwicGF0aCIsImVuZHNXaXRoIiwic2xpY2UiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZGVmaW5lUHJvcGVydHkiLCJSb3V0ZXIiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsInVzZVJvdXRlciIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiX3JvdXRlciIsImluc3RhbmNlIiwicHJvcGVydHkiLCJhc3NpZ24iLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJuYW1lIiwiZGlzcGxheU5hbWUiLCJtaXR0IiwiYWxsIiwiY3JlYXRlIiwiaGFuZGxlciIsInB1c2giLCJvZmYiLCJzcGxpY2UiLCJlbWl0IiwiZXZ0cyIsIm1hcCIsImJhc2VQYXRoIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImNhbmNlbGxlZCIsImhhc0Jhc2VQYXRoIiwic3RhcnRzV2l0aCIsImFkZEJhc2VQYXRoIiwiZGVsQmFzZVBhdGgiLCJsZW5ndGgiLCJpc0xvY2FsVVJMIiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsIlVSTCIsIm9yaWdpbiIsInJlc29sdmVIcmVmIiwiY3VycmVudFBhdGgiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsIlBBR0VfTE9BRF9FUlJPUiIsIlN5bWJvbCIsIm1hcmtMb2FkaW5nRXJyb3IiLCJwcmVwYXJlVXJsQXMiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwicmVzIiwib2siLCJzdGF0dXMiLCJqc29uIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJjb25zdHJ1Y3RvciIsInF1ZXJ5IiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJDb21wb25lbnQiLCJpbml0aWFsU3R5bGVTaGVldHMiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwicm91dGUiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwiX2JwcyIsIl93cmFwQXBwIiwiaXNTc3IiLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93Iiwib25Qb3BTdGF0ZSIsInN0YXRlIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJjaGFuZ2UiLCJzdHlsZVNoZWV0cyIsIl9fTl9TU0ciLCJfX05fU1NQIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJyZWxvYWQiLCJsb2NhdGlvbiIsImJhY2siLCJoaXN0b3J5IiwibWV0aG9kIiwiX2giLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsIm9ubHlBSGFzaENoYW5nZSIsInNjcm9sbFRvSGFzaCIsIm5vdGlmeSIsInBhZ2VzIiwiZ2V0UGFnZUxpc3QiLCJfX3Jld3JpdGVzIiwicmV3cml0ZXMiLCJwcm9taXNlZEJ1aWxkTWFuaWZlc3QiLCJwYXJzZWQiLCJzZWFyY2hQYXJhbXMiLCJfcmVzb2x2ZUhyZWYiLCJ1cmxJc05ldyIsInJlc29sdmVkQXMiLCJhc1BhdGhuYW1lIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwiZ3JvdXBzIiwiZmlsdGVyIiwicGFyYW0iLCJqb2luIiwicm91dGVJbmZvIiwiZ2V0Um91dGVJbmZvIiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwicGFnZSIsImZldGNoQ29tcG9uZW50IiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiY2FjaGVkUm91dGVJbmZvIiwibW9kIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwicmVxdWlyZSIsImdldERhdGFIcmVmIiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiZGF0YSIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNwbGl0IiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsImhhc2giLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwicGFyc2VkSHJlZiIsImNsZWFuUGF0aG5hbWUiLCJpbmNsdWRlcyIsInNvbWUiLCJyZSIsInRlc3QiLCJQcm9taXNlIiwicHJlZmV0Y2hEYXRhIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJmbiIsImNhY2hlS2V5IiwiY3R4IiwiQXBwVHJlZSIsInNsYXNoZWRQcm90b2NvbHMiLCJmb3JtYXRVcmwiLCJ1cmxPYmoiLCJhdXRoIiwiaG9zdG5hbWUiLCJwcm90b2NvbCIsImhvc3QiLCJlbmNvZGVVUklDb21wb25lbnQiLCJwb3J0IiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJ1cmxRdWVyeVRvU2VhcmNoUGFyYW1zIiwic2VhcmNoIiwic3Vic3RyIiwic2xhc2hlcyIsIlRFU1RfUk9VVEUiLCJpc0R5bmFtaWNSb3V0ZSIsIkRVTU1ZX0JBU0UiLCJwYXJzZVJlbGF0aXZlVXJsIiwicmVzb2x2ZWRCYXNlIiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJkZWNvZGUiLCJkZWNvZGVQYXJhbSIsImN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMiLCJzdHJpY3QiLCJjdXN0b21Sb3V0ZSIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJyZWdleHBUb0Z1bmN0aW9uIiwicGFyYW1zIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiY29kZSIsInByZXBhcmVEZXN0aW5hdGlvbiIsImRlc3RpbmF0aW9uIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsInBhcnNlZERlc3RpbmF0aW9uIiwiZGVzdFF1ZXJ5IiwiZGVzdFBhdGgiLCJkZXN0UGF0aFBhcmFtS2V5cyIsImRlc3RQYXRoUGFyYW1zIiwiZGVzdGluYXRpb25Db21waWxlciIsImNvbXBpbGUiLCJ2YWxpZGF0ZSIsIm5ld1VybCIsInN0ck9yQXJyYXkiLCJ2YWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsInF1ZXJ5Q29tcGlsZXIiLCJwYXJhbUtleXMiLCJzaG91bGRBZGRCYXNlUGF0aCIsImVuY29kZVVSSSIsIm1hdGNoIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsInVybFF1ZXJ5IiwicmVzdWx0IiwiVVJMU2VhcmNoUGFyYW1zIiwiaXRlbSIsImFwcGVuZCIsInNlYXJjaFBhcmFtc0xpc3QiLCJmcm9tIiwiY3VzdG9tUm91dGVNYXRjaGVyIiwicmVzb2x2ZVJld3JpdGVzIiwicmV3cml0ZSIsInNvdXJjZSIsImRlc3RSZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJleGVjIiwic2x1Z05hbWUiLCJnIiwibSIsInBvcyIsInJlcGVhdCIsImVzY2FwZVJlZ2V4Iiwic3RyIiwicGFyc2VQYXJhbWV0ZXIiLCJvcHRpb25hbCIsImdldFJvdXRlUmVnZXgiLCJub3JtYWxpemVkUm91dGUiLCJzZWdtZW50cyIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJzZWdtZW50Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsImZyb21DaGFyQ29kZSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJpc05hTiIsInBhcnNlSW50IiwiUmVnRXhwIiwibmFtZWRSZWdleCIsImV4ZWNPbmNlIiwidXNlZCIsImdldExvY2F0aW9uT3JpZ2luIiwiZ2V0VVJMIiwiZ2V0RGlzcGxheU5hbWUiLCJpc1Jlc1NlbnQiLCJmaW5pc2hlZCIsImhlYWRlcnNTZW50IiwibG9hZEdldEluaXRpYWxQcm9wcyIsInByb3RvdHlwZSIsInBhZ2VQcm9wcyIsInVybE9iamVjdEtleXMiLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsIlNQIiwibWVhc3VyZSIsIkFjY29yZGlvbiIsIl9yZWYiLCJpdGVtcyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIm9wZW5JY29uIiwiX19qc3giLCJJbWFnZSIsInNyYyIsImFjY29yZGlvbkljb25PcGVuIiwiYWx0IiwiX19zZWxmIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJjbG9zZUljb24iLCJhY2NvcmRpb25JY29uQ2xvc2UiLCJCYXNlQWNjb3JkaW9uIiwiX2V4dGVuZHMiLCJzdGF0ZVJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJzaW5nbGUiLCJwcmV2ZW50Q2xvc2UiLCJvcGVuSW5kZXhlcyIsImhhbmRsZUl0ZW1DbGljayIsIkZyYWdtZW50IiwiaW5kZXgiLCJBY2NvcmRpb25JdGVtIiwidGl0bGUiLCJpc09wZW4iLCJBY2NvcmRpb25CdXR0b24iLCJBY2NvcmRpb25Db250ZW50cyIsImNvbnRlbnRzIiwiX2RlZmluZVByb3BlcnR5IiwiaW50ZXJuYWxTZXRTdGF0ZSIsImNsb3NpbmciLCJsb2ciLCJnZXRTdGF0ZSIsImNoYW5nZXMiLCJjYWxsYmFjayIsImFsbENoYW5nZXMiLCJzZXRTdGF0ZSIsImFjdHVhbFN0YXRlIiwiY2hhbmdlc09iamVjdCIsIm9uU3RhdGVDaGFuZ2UiLCJyZW5kZXIiLCJyZXN0IiwianN4IiwiY3NzIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJsZXR0ZXJTcGFjaW5nIiwiY3Vyc29yIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwiZm9udFdlaWdodCIsImJvcmRlciIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJwb3NpdGlvbiIsImNvbG9yIiwib3V0bGluZSIsImJhY2tncm91bmRDb2xvciIsInNwYW4iLCJ0b3AiLCJyaWdodCIsInRyYW5zZm9ybSIsImp1c3RpZnlDb250ZW50IiwiYm9yZGVyUmFkaXVzIiwiaW1nIiwid2lkdGgiLCJ2YXJpYW50cyIsIm9wZW4iLCJoZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJjbG9zZWQiLCJtYXJnaW5Ub3AiLCJfcmVmMiIsIm1vdGlvbiIsImRpdiIsImluaXRpYWwiLCJhbmltYXRlIiwib3ZlcmZsb3dZIiwicGFkZGluZyIsIl9yZWYzIiwib3ZlcmZsb3ciLCJfb2JqZWN0U3ByZWFkIiwicmVkdWNlcnMiLCJyZWR1Y2UiLCJhY2MiLCJyZWR1Y2VyIiwiQmxvY2tUaXRsZSIsInRleHQiLCJCb3giLCJzeCIsInN0eWxlcyIsImJsb2NrVGl0bGUiLCJjbGFzc05hbWUiLCJIZWFkaW5nIiwiVGV4dCIsInRleHRBbGlnbiIsIm1iIiwiaDMiLCJCbG9nQ2FyZCIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJsaW5rTGFiZWwiLCJibG9nQ2FyZCIsImNvbnRlbnQiLCJhcnJvd0FuZ2xlIiwibXgiLCJsZWZ0IiwiYm90dG9tIiwiYmFja2dyb3VuZEltYWdlIiwibXQiLCJhIiwib3BhY2l0eSIsIm1sIiwiSmFja3BvdENhcmQiLCJoZWFkaW5nIiwiamFja3BvdENhcmQiLCJmbGV4RGlyZWN0aW9uIiwidHJhbnNpdGlvbiIsImJveFNoYWRvdyIsImZsZXhTaHJpbmsiLCJtciIsIlByaWNlQ2FyZCIsImljb24iLCJhbW91bnQiLCJyZWNvbW1lbmRlZCIsInByaWNlQ2FyZCIsInByaWNlSGVhZGVyIiwib3B0aW9uIiwicHJpY2VDaGVjayIsInByaWNlQ3Jvc3MiLCJsYWJlbCIsImJ1dHRvbldyYXAiLCJwcmljZUFycm93IiwicHgiLCJ1bCIsImxpc3RTdHlsZSIsImxpIiwibWF4V2lkdGgiLCJwdCIsImJvcmRlckJvdHRvbUxlZnRSYWRpdXMiLCJib3JkZXJCb3R0b21SaWdodFJhZGl1cyIsInB5IiwiU2VydmljZUNhcmQiLCJzZXJ2aWNlQ2FyZCIsImxpbmsiLCJUZXN0aW1vbmlhbHNDYXJkIiwidXNlcm5hbWUiLCJ0ZXN0aW1vbmlhbHNDYXJkIiwidGVzdGltb25pYWxzSW5mbyIsInRlc3RpbW9uaWFsc0ltYWdlIiwidGVzdGltb25pYWxzQ29udGVudCIsInBiIiwiRHJhd2VyIiwiY2xvc2VCdXR0b24iLCJjbG9zZUJ1dHRvblN0eWxlIiwiZHJhd2VySGFuZGxlciIsInRvZ2dsZUhhbmRsZXIiLCJwbGFjZW1lbnQiLCJkcmF3ZXJTdHlsZSIsImNsb3NlQnRuU3R5bGUiLCJSY0RyYXdlciIsIm9uQ2xvc2UiLCJ0cmltIiwibGV2ZWwiLCJkdXJhdGlvbiIsInN0eWxlIiwiZGVmYXVsdFByb3BzIiwiRm9vdGVyIiwiZm9vdGVyIiwiQ29udGFpbmVyIiwiY29udGFpbmVyIiwiTG9nbyIsImxvZ29MaWdodCIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImxpbmtzV3JhcCIsImZsZXhXcmFwIiwiSGVhZGVyIiwiRHJhd2VyUHJvdmlkZXIiLCJoZWFkZXIiLCJsb2dvRGFyayIsIkZsZXgiLCJuYXYiLCJtZW51SXRlbXMiLCJTY3JvbGxMaW5rIiwiYWN0aXZlQ2xhc3MiLCJuYXZMaW5rIiwidG8iLCJzcHkiLCJzbW9vdGgiLCJvZmZzZXQiLCJoZWFkZXJCdG4iLCJ2YXJpYW50IiwiTW9iaWxlRHJhd2VyIiwiZGlzcGF0Y2giLCJEcmF3ZXJDb250ZXh0IiwidXNlQ2FsbGJhY2siLCJJb01kTWVudSIsInNpemUiLCJJb01kQ2xvc2UiLCJkcmF3ZXIiLCJjbG9zZSIsIlNjcm9sbGJhcnMiLCJhdXRvSGlkZSIsIm1lbnUiLCJtZW51Rm9vdGVyIiwiQnV0dG9uIiwiYnV0dG9uIiwiYmFja2dyb3VuZCIsInpJbmRleCIsImZ3IiwiSW1nIiwiTGF5b3V0IiwiaXNTdGlja3kiLCJ1c2VTdGlja3lTdGF0ZSIsInVzZVN0aWNreURpc3BhdGNoIiwic2V0U3RpY2t5IiwicmVtb3ZlU3RpY2t5Iiwib25XYXlwb2ludFBvc2l0aW9uQ2hhbmdlIiwiY3VycmVudFBvc2l0aW9uIiwiU3RpY2t5IiwiZW5hYmxlZCIsImlubmVyWiIsIldheXBvaW50Iiwib25FbnRlciIsIm9uUG9zaXRpb25DaGFuZ2UiLCJOYXZMaW5rIiwiTmV4dExpbmsiLCJNZW51TGluayIsIkEiLCJTRU8iLCJhdXRob3IiLCJtZXRhIiwibWV0YURhdGEiLCJjb25jYXQiLCJIZWFkIiwibGFuZyIsInVzZURpc3BhdGNoIiwicHJvdmlkZXIiLCJ1c2VDcmVhdGVDb250ZXh0IiwiaW5pdGlhbFN0YXRlIiwiU3RpY2t5UHJvdmlkZXIiLCJpc1NpZGViYXJTdGlja3kiLCJkZWZhdWx0VmFsdWUiLCJkZWZhdWx0RGlzcGF0Y2giLCJzdGF0ZUN0eCIsImNyZWF0ZUNvbnRleHQiLCJkaXNwYXRjaEN0eCIsInVzZVN0YXRlQ3R4IiwidXNlRGlzcGF0Y2hDdHgiLCJQcm92aWRlciIsInVzZVJlZHVjZXIiLCJhY3Rpb24iLCJJbmRleFBhZ2UiLCJUaGVtZVByb3ZpZGVyIiwidGhlbWUiLCJCYW5uZXIiLCJTZXJ2aWNlcyIsIkphY2twb3QiLCJDYWxsVG9BY3Rpb24iLCJGZWF0dXJlZCIsIlByaWNpbmciLCJUZXN0aW1vbmlhbHMiLCJCbG9ncyIsIkZBUSIsIlN1YnNjcmliZSIsImlkIiwiYmFubmVyIiwiYmFubmVySWNvbjEiLCJiYW5uZXJJY29uMiIsImJhbm5lckljb24zIiwiYmFubmVySWNvbjQiLCJiYW5uZXJJY29uNSIsImJhbm5lckljb242IiwiYmFubmVySWNvbjciLCJsb2dvIiwibG9nb0ltYWdlIiwiYmFubmVySW1hZ2UiLCJiYW5uZXJBbmltMSIsImtleWZyYW1lcyIsImJhbm5lckFuaW0yIiwiYmFubmVyQW5pbTMiLCJoMiIsImFuaW1hdGlvbiIsIkJMT0dfREFUQSIsImJsb2dJbWFnZTEiLCJibG9nSW1hZ2UzIiwiYmxvZ0ltYWdlMiIsImJsb2dJbWFnZTQiLCJtYXNvbnJ5T3B0aW9ucyIsInRyYW5zaXRpb25EdXJhdGlvbiIsImJsb2dzIiwiTWFzb25yeSIsImJsb2dXcmFwcGVyIiwiY2FsbFRvQWN0aW9uIiwiZmxleCIsImltYWdlcyIsImNhbGxJbWFnZSIsInZlcnRpY2FsQWxpZ24iLCJhY2NvcmRpb25EYXRhIiwiaXNFeHBhbmRlZCIsImZhcVdyYXBwZXIiLCJhc2tCdXR0b24iLCJwciIsInRhYiIsInNldFRhYiIsImFjdGl2ZSIsImhhbmRsZVRhYiIsImZlYXR1cmVkIiwidGFiQnV0dG9uVG9wV3JhcHBlciIsInRhYkJ1dHRvbldyYXBwZXIiLCJBaUZpbGxEb2xsYXJDaXJjbGUiLCJGYUNvZyIsIkFpRmlsbFBpZUNoYXJ0IiwiRmFCcmllZmNhc2UiLCJ0YWJDb250ZW50IiwidGFiSW1hZ2UxIiwiZmFkZUluIiwib3ZlcmZsb3dYIiwiYm9yZGVyQm90dG9tIiwic3ZnIiwibWluSGVpZ2h0IiwiZG90UGF0dGVybiIsIkpBQ0tQT1RfREFUQSIsImphY2twb3RJbWFnZTEiLCJqYWNrcG90SW1hZ2UyIiwiamFja3BvdCIsImphY2twb3RJbWFnZSIsImphY2twb3RDYXJkQm94IiwiZmxvYXQiLCJwbCIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJQUklDRV9NT05USExZX0RBVEEiLCJwcmljZUljb24xIiwicHJpY2VJY29uMiIsIlBSSUNFX1lFQVJMWV9EQVRBIiwicGxhbiIsInNldFBsYW4iLCJwcmljaW5nUGxhbiIsImhhbmRsZVBsYW4iLCJwcmljaW5nIiwiYnRuV3JhcCIsIkdyaWQiLCJncmlkIiwicHJpY2UiLCJmYWRlSW4yIiwiZm9udEZhbWlseSIsImdyaWRHYXAiLCJTRVJWSUNFU19EQVRBIiwic2VydmljZUltYWdlMSIsInNlcnZpY2VJbWFnZTIiLCJzZXJ2aWNlSW1hZ2UzIiwic2VydmljZUltYWdlNCIsInNlcnZpY2VJbWFnZTUiLCJzZXJ2aWNlSW1hZ2U2Iiwic2VydmljZXMiLCJzdWJzY3JpYmUiLCJmb3JtIiwiaHRtbEZvciIsIklucHV0IiwicGxhY2Vob2xkZXIiLCJpbnB1dCIsIlN3aXBlckNvcmUiLCJ1c2UiLCJBdXRvcGxheSIsIlRFU1RJTU9OSUFMU19EQVRBIiwidGVzdGltb25pYWxzSW1hZ2UxIiwidGVzdGltb25pYWxzSW1hZ2UyIiwidGVzdGltb25pYWxzSW1hZ2UzIiwidGVzdGltb25pYWxzSW1hZ2U0IiwidGVzdGltb25pYWxzSW1hZ2U1IiwidGVzdGltb25pYWxzSW1hZ2U2IiwidGVzdGltb25pYWxDYXJvdXNlbCIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJsb29wIiwic3BlZWQiLCJjZW50ZXJlZFNsaWRlcyIsImF1dG9IZWlnaHQiLCJhdXRvcGxheSIsIndhaXRGb3JUcmFuc2l0aW9uIiwiZGVsYXkiLCJicmVha3BvaW50cyIsInRlc3RpbW9uaWFscyIsIlN3aXBlciIsIlN3aXBlclNsaWRlIiwiX2luZGV4IiwiY29sb3JzIiwidGV4dF9zZWNvbmRhcnkiLCJoZWFkaW5nX3NlY29uZGFyeSIsImJhY2tncm91bmRfc2Vjb25kYXJ5IiwiYm9yZGVyX2NvbG9yIiwicHJpbWFyeSIsInNlY29uZGFyeSIsImJsYWNrIiwiZ3JheSIsIm11dGVkIiwiYWNjZW50IiwiZm9udHMiLCJtb25vc3BhY2UiLCJmb250U2l6ZXMiLCJmb250V2VpZ2h0cyIsImJvbGQiLCJsaW5lSGVpZ2h0cyIsImxldHRlclNwYWNpbmdzIiwiY2FwcyIsInNpemVzIiwibGF5b3V0IiwidG9vbGJhciIsIm1haW4iLCJoZXJvUHJpbWFyeSIsImhlcm9TZWNvbmRhcnkiLCJsZWFkIiwibGlua3MiLCJ0ZXh0RGVjb3JhdGlvbiIsImF2YXRhciIsImJ1dHRvbnMiLCJiZyIsInJvb3QiLCJXZWJraXRGb250U21vb3RoaW5nIiwiaHIiLCJib3JkZXJDb2xvciIsInNyT25seSIsImNsaXAiLCJjbGlwUGF0aCIsIm1hcmdpbiIsIndoaXRlU3BhY2UiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSx3RTs7Ozs7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MkY7Ozs7Ozs7Ozs7O0FDQUEsc0Y7Ozs7Ozs7Ozs7O0FDQUEsc0Y7Ozs7Ozs7Ozs7O0FDQUEsc0Y7Ozs7Ozs7Ozs7O0FDQUEsc0Y7Ozs7Ozs7Ozs7O0FDQUEsd0Y7Ozs7Ozs7Ozs7O0FDQUEseUY7Ozs7Ozs7Ozs7O0FDQUEsaUNBQWlDLG9rRjs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLHdsRTs7Ozs7Ozs7Ozs7QUNBakMscUY7Ozs7Ozs7Ozs7O0FDQUEsdUY7Ozs7Ozs7Ozs7O0FDQUEsd0Y7Ozs7Ozs7Ozs7O0FDQUEscUNBQXFDLDRuQzs7Ozs7Ozs7Ozs7QUNBckMscUNBQXFDLHc0Qjs7Ozs7Ozs7Ozs7QUNBckMscUNBQXFDLDRsQzs7Ozs7Ozs7Ozs7QUNBckMscUNBQXFDLG8wRjs7Ozs7Ozs7Ozs7QUNBckMscUNBQXFDLG95STs7Ozs7Ozs7Ozs7QUNBckMsaUNBQWlDLHc1Qzs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLG81Qzs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLGc1Qjs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLHd1Qzs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLG9yQzs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLDR6Qjs7Ozs7Ozs7Ozs7QUNBakMseUY7Ozs7Ozs7Ozs7O0FDQUEsaUNBQWlDLG8xRzs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLDR4Rzs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLDQwRzs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLHdwRzs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLGczRzs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLGcwRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBUDtBQUNPO0FBQ2dCO0FBQ1c7QUFDQztBQVEzQztBQUVILFNBQVNDLFNBQVNBLENBQUFDLElBQUEsRUFBc0I7RUFBQSxJQUFyQjtNQUFFQztJQUFnQixDQUFDLEdBQUFELElBQUE7SUFBUGpXLEtBQUssR0FBQW1XLHdCQUFBLENBQUFGLElBQUE7RUFDakQsTUFBTUcsUUFBUSxHQUFHQyxLQUFBLENBQUNDLDhD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QUFtQjtNQUM3QkYsT0FBTyxFQUFFLGNBQWM7TUFDdkJ4QixRQUFRLEVBQUUscUJBQXFCO01BQy9CVyxLQUFLLEVBQUUsZ0JBQWdCO01BQ3ZCeVcsVUFBVSxFQUFFO0lBQ2Q7RUFDRjtBQUNGLENBQUMsRTs7Ozs7Ozs7Ozs7QUNqTUQsMEM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEscUMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5sZXQgY2FjaGVkT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAoY2FjaGVkT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gY2FjaGVkT2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChjYWNoZWRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBjYWNoZWRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc10gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW5cbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHsgc2hhbGxvdyB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmXG4gICAgICAgICAgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3QgW2NoaWxkRWxtLCBzZXRDaGlsZEVsbV0gPSBSZWFjdC51c2VTdGF0ZTxFbGVtZW50PigpXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hcyA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcykgOiByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHAgJiZcbiAgICAgIEludGVyc2VjdGlvbk9ic2VydmVyICYmXG4gICAgICBjaGlsZEVsbSAmJlxuICAgICAgY2hpbGRFbG0udGFnTmFtZSAmJlxuICAgICAgaXNMb2NhbFVSTChocmVmKVxuICAgICkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwgfSA9IHByb3BzXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsKSBzZXRDaGlsZEVsbShlbClcblxuICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbClcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoYXMpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oe30sIF9yb3V0ZXJbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVG9rZW5pemUgaW5wdXQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBsZXhlcihzdHIpIHtcbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHN0cltpXTtcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKlwiIHx8IGNoYXIgPT09IFwiK1wiIHx8IGNoYXIgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTU9ESUZJRVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVTQ0FQRURfQ0hBUlwiLCBpbmRleDogaSsrLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJPUEVOXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDTE9TRVwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiOlwiKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChqKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgLy8gYDAtOWBcbiAgICAgICAgICAgICAgICAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgQS1aYFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgYS16YFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYF9gXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPT09IDk1KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk5BTUVcIiwgaW5kZXg6IGksIHZhbHVlOiBuYW1lIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0dGVybiBjYW5ub3Qgc3RhcnQgd2l0aCBcXFwiP1xcXCIgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK10gKyBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RyW2pdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ogKyAxXSAhPT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYXB0dXJpbmcgZ3JvdXBzIGFyZSBub3QgYWxsb3dlZCBhdCBcIiArIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuYmFsYW5jZWQgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJQQVRURVJOXCIsIGluZGV4OiBpLCB2YWx1ZTogcGF0dGVybiB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNIQVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICB9XG4gICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVORFwiLCBpbmRleDogaSwgdmFsdWU6IFwiXCIgfSk7XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICovXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciB0b2tlbnMgPSBsZXhlcihzdHIpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMucHJlZml4ZXMsIHByZWZpeGVzID0gX2EgPT09IHZvaWQgMCA/IFwiLi9cIiA6IF9hO1xuICAgIHZhciBkZWZhdWx0UGF0dGVybiA9IFwiW15cIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXSs/XCI7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgdmFyIHRyeUNvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2ldLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zW2krK10udmFsdWU7XG4gICAgfTtcbiAgICB2YXIgbXVzdENvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFyIF9hID0gdG9rZW5zW2ldLCBuZXh0VHlwZSA9IF9hLnR5cGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIFwiICsgbmV4dFR5cGUgKyBcIiBhdCBcIiArIGluZGV4ICsgXCIsIGV4cGVjdGVkIFwiICsgdHlwZSk7XG4gICAgfTtcbiAgICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB3aGlsZSAoKHZhbHVlID0gdHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gdHJ5Q29uc3VtZShcIkNIQVJcIik7XG4gICAgICAgIHZhciBuYW1lID0gdHJ5Q29uc3VtZShcIk5BTUVcIik7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIik7XG4gICAgICAgIGlmIChuYW1lIHx8IHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjaGFyIHx8IFwiXCI7XG4gICAgICAgICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gcHJlZml4O1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IGNoYXIgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBwYXRoICs9IHZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wZW4gPSB0cnlDb25zdW1lKFwiT1BFTlwiKTtcbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgcGF0dGVybl8xID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgbXVzdENvbnN1bWUoXCJDTE9TRVwiKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzEgfHwgKHBhdHRlcm5fMSA/IGtleSsrIDogXCJcIiksXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmFtZV8xICYmICFwYXR0ZXJuXzEgPyBkZWZhdWx0UGF0dGVybiA6IHBhdHRlcm5fMSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbXVzdENvbnN1bWUoXCJFTkRcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciByZUZsYWdzID0gZmxhZ3Mob3B0aW9ucyk7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hLCBfYiA9IG9wdGlvbnMudmFsaWRhdGUsIHZhbGlkYXRlID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcbiAgICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgICB2YXIgbWF0Y2hlcyA9IHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSRcIiwgcmVGbGFncyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHBhdGggPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW47XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVt0b2tlbi5uYW1lXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBvcHRpb25hbCA9IHRva2VuLm1vZGlmaWVyID09PSBcIj9cIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCI7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIitcIjtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghcmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGFsbCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZShTdHJpbmcodmFsdWUpLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB2YXIgdHlwZU9mTWVzc2FnZSA9IHJlcGVhdCA/IFwiYW4gYXJyYXlcIiA6IFwiYSBzdHJpbmdcIjtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIGJlIFwiICsgdHlwZU9mTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbn1cbmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb247XG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5mdW5jdGlvbiBtYXRjaChzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIHZhciByZSA9IHBhdGhUb1JlZ2V4cChzdHIsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubWF0Y2ggPSBtYXRjaDtcbi8qKlxuICogQ3JlYXRlIGEgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgb3V0cHV0LlxuICovXG5mdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLmRlY29kZSwgZGVjb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwYXRobmFtZSkge1xuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIW0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBwYXRoID0gbVswXSwgaW5kZXggPSBtLmluZGV4O1xuICAgICAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBpZiAobVtpXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV07XG4gICAgICAgICAgICBpZiAoa2V5Lm1vZGlmaWVyID09PSBcIipcIiB8fCBrZXkubW9kaWZpZXIgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IG1baV0uc3BsaXQoa2V5LnByZWZpeCArIGtleS5zdWZmaXgpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZSh2YWx1ZSwga2V5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBkZWNvZGUobVtpXSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIGluZGV4OiBpbmRleCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9O1xufVxuZXhwb3J0cy5yZWdleHBUb0Z1bmN0aW9uID0gcmVnZXhwVG9GdW5jdGlvbjtcbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBmbGFncyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyBcIlwiIDogXCJpXCI7XG59XG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cykge1xuICAgIGlmICgha2V5cylcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XG4gICAgaWYgKGdyb3Vwcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpLFxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwKHBhdGhzLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhcnRzID0gcGF0aHMubWFwKGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykuc291cmNlOyB9KTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIig/OlwiICsgcGFydHMuam9pbihcInxcIikgKyBcIilcIiwgZmxhZ3Mob3B0aW9ucykpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb1JlZ2V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucyk7XG59XG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnZXhwKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zdHJpY3QsIHN0cmljdCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3RhcnQsIHN0YXJ0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgX2MgPSBvcHRpb25zLmVuZCwgZW5kID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2QgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2Q7XG4gICAgdmFyIGVuZHNXaXRoID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCBcIlwiKSArIFwiXXwkXCI7XG4gICAgdmFyIGRlbGltaXRlciA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdXCI7XG4gICAgdmFyIHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18xID0gdG9rZW5zOyBfaSA8IHRva2Vuc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnByZWZpeCkpO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4uc3VmZml4KSk7XG4gICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIGlmIChrZXlzKVxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiID8gXCI/XCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKCg/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSg/OlwiICsgc3VmZml4ICsgcHJlZml4ICsgXCIoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikpKilcIiArIHN1ZmZpeCArIFwiKVwiICsgbW9kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7XG4gICAgICAgIGlmICghc3RyaWN0KVxuICAgICAgICAgICAgcm91dGUgKz0gZGVsaW1pdGVyICsgXCI/XCI7XG4gICAgICAgIHJvdXRlICs9ICFvcHRpb25zLmVuZHNXaXRoID8gXCIkXCIgOiBcIig/PVwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkZWxpbWl0ZXIuaW5kZXhPZihlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSkgPiAtMVxuICAgICAgICAgICAgOiAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIGRlbGltaXRlciArIFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKSk/XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VuZERlbGltaXRlZCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPz1cIiArIGRlbGltaXRlciArIFwifFwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpO1xufVxuZXhwb3J0cy50b2tlbnNUb1JlZ2V4cCA9IHRva2Vuc1RvUmVnZXhwO1xuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKVxuICAgICAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpXG4gICAgICAgIHJldHVybiBhcnJheVRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMucGF0aFRvUmVnZXhwID0gcGF0aFRvUmVnZXhwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPSBudWxsIHwgeyBfX046IGZhbHNlIH0gfCAoeyBfX046IHRydWUgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYmFzZVBhdGggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChiYXNlUGF0aClcbiAgICAgIDogYmFzZVBhdGggKyBwYXRoXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKGN1cnJlbnRQYXRoOiBzdHJpbmcsIGhyZWY6IFVybCk6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICByZXR1cm4gZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICA6IGZpbmFsVXJsLmhyZWZcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiB1cmxBc1N0cmluZ1xuICB9XG59XG5cbmNvbnN0IFBBR0VfTE9BRF9FUlJPUiA9IFN5bWJvbCgnUEFHRV9MT0FEX0VSUk9SJylcbmV4cG9ydCBmdW5jdGlvbiBtYXJrTG9hZGluZ0Vycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBQQUdFX0xPQURfRVJST1IsIHt9KVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBQcml2YXRlUm91dGVJbmZvLCBBcHA6IEFwcENvbXBvbmVudCkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrTG9hZGluZ0Vycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHM6IGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG5cbiAgICAgICAgICBsZXQgc2Nyb2xsRGVib3VuY2VUaW1lb3V0OiB1bmRlZmluZWQgfCBOb2RlSlMuVGltZW91dFxuXG4gICAgICAgICAgY29uc3QgZGVib3VuY2VkU2Nyb2xsU2F2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpIGNsZWFyVGltZW91dChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpXG5cbiAgICAgICAgICAgIHNjcm9sbERlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybCwgYXM6IGN1ckFzLCBvcHRpb25zIH0gPSBoaXN0b3J5LnN0YXRlXG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGN1ckFzLFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgIF9OX1g6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgICAgX05fWTogd2luZG93LnNjcm9sbFksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwgMTApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlZFNjcm9sbFNhdmUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gc3RhdGVcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhbmVkQXMgPSBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhc1xuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBjb25zdCB7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIucHJvbWlzZWRCdWlsZE1hbmlmZXN0XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zIH0gPSBwYXJzZWRcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpXG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUykge1xuICAgICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgYXMsXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSFcbiAgICAgIClcbiAgICB9XG4gICAgcmVzb2x2ZWRBcyA9IGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHNoYWxsb3dcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yIH0gPSByb3V0ZUluZm9cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKFBBR0VfTE9BRF9FUlJPUiBpbiBlcnIgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAnL19lcnJvcidcbiAgICAgIClcbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyLFxuICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICBlcnIsXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgIH0gYXMgYW55KVxuICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGRlbEJhc2VQYXRoKGFzKSxcbiAgICAgICAgICBfX05fU1NHXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPFByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGRlbEJhc2VQYXRoKHBhdGhuYW1lISkpXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFnZSlcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VkSHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBhc1BhdGgpLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBQcml2YXRlUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShEVU1NWV9CQVNFLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG5leHBvcnQgeyBwYXRoVG9SZWdleHAgfVxuXG5leHBvcnQgY29uc3QgbWF0Y2hlck9wdGlvbnMgPSB7XG4gIHNlbnNpdGl2ZTogZmFsc2UsXG4gIGRlbGltaXRlcjogJy8nLFxuICBkZWNvZGU6IGRlY29kZVBhcmFtLFxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihcbiAgICAgIG1hdGNoZXJSZWdleCxcbiAgICAgIGtleXMsXG4gICAgICBtYXRjaGVyT3B0aW9uc1xuICAgIClcblxuICAgIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmFtcz86IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gcGF0aG5hbWUgPT0gbnVsbCA/IGZhbHNlIDogbWF0Y2hlcihwYXRobmFtZSlcbiAgICAgIGlmICghcmVzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoY3VzdG9tUm91dGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgIC8vIHVubmFtZWQgcGFyYW1zIHNob3VsZCBiZSByZW1vdmVkIGFzIHRoZXlcbiAgICAgICAgICAvLyBhcmUgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBpbiB0aGUgZGVzdGluYXRpb25cbiAgICAgICAgICBpZiAodHlwZW9mIGtleS5uYW1lID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgZGVsZXRlIChyZXMucGFyYW1zIGFzIGFueSlba2V5Lm5hbWVdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IC4uLnBhcmFtcywgLi4ucmVzLnBhcmFtcyB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlY29kZVBhcmFtKHBhcmFtOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICB9IGNhdGNoIChfKSB7XG4gICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKCdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJylcbiAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgIHRocm93IGVyclxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG50eXBlIFBhcmFtcyA9IHsgW3BhcmFtOiBzdHJpbmddOiBhbnkgfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVwYXJlRGVzdGluYXRpb24oXG4gIGRlc3RpbmF0aW9uOiBzdHJpbmcsXG4gIHBhcmFtczogUGFyYW1zLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIGFwcGVuZFBhcmFtc1RvUXVlcnk6IGJvb2xlYW4sXG4gIGJhc2VQYXRoOiBzdHJpbmdcbikge1xuICBsZXQgcGFyc2VkRGVzdGluYXRpb246IHtcbiAgICBxdWVyeT86IFBhcnNlZFVybFF1ZXJ5XG4gICAgcHJvdG9jb2w/OiBzdHJpbmdcbiAgICBob3N0bmFtZT86IHN0cmluZ1xuICAgIHBvcnQ/OiBzdHJpbmdcbiAgfSAmIFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+ID0ge30gYXMgYW55XG5cbiAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgIHBhcnNlZERlc3RpbmF0aW9uID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICAgIGhhc2gsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfSA9IG5ldyBVUkwoZGVzdGluYXRpb24pXG5cbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9XG4gIH1cblxuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gICAgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoUGFyYW1zXG4gIClcbiAgY29uc3QgZGVzdFF1ZXJ5ID0gcGFyc2VkRGVzdGluYXRpb24ucXVlcnlcbiAgY29uc3QgZGVzdFBhdGggPSBgJHtwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSF9JHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoIHx8ICcnXG4gIH1gXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1LZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKGRlc3RQYXRoLCBkZXN0UGF0aFBhcmFtS2V5cylcblxuICBjb25zdCBkZXN0UGF0aFBhcmFtcyA9IGRlc3RQYXRoUGFyYW1LZXlzLm1hcCgoa2V5KSA9PiBrZXkubmFtZSlcblxuICBsZXQgZGVzdGluYXRpb25Db21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKFxuICAgIGRlc3RQYXRoLFxuICAgIC8vIHdlIGRvbid0IHZhbGlkYXRlIHdoaWxlIGNvbXBpbGluZyB0aGUgZGVzdGluYXRpb24gc2luY2Ugd2Ugc2hvdWxkXG4gICAgLy8gaGF2ZSBhbHJlYWR5IHZhbGlkYXRlZCBiZWZvcmUgd2UgZ290IHRvIHRoaXMgcG9pbnQgYW5kIHZhbGlkYXRpbmdcbiAgICAvLyBicmVha3MgY29tcGlsaW5nIGRlc3RpbmF0aW9ucyB3aXRoIG5hbWVkIHBhdHRlcm4gcGFyYW1zIGZyb20gdGhlIHNvdXJjZVxuICAgIC8vIGUuZy4gL3NvbWV0aGluZzpoZWxsbyguKikgLT4gL2Fub3RoZXIvOmhlbGxvIGlzIGJyb2tlbiB3aXRoIHZhbGlkYXRpb25cbiAgICAvLyBzaW5jZSBjb21waWxlIHZhbGlkYXRpb24gaXMgbWVhbnQgZm9yIHJldmVyc2luZyBhbmQgbm90IGZvciBpbnNlcnRpbmdcbiAgICAvLyBwYXJhbXMgZnJvbSBhIHNlcGFyYXRlIHBhdGgtcmVnZXggaW50byBhbm90aGVyXG4gICAgeyB2YWxpZGF0ZTogZmFsc2UgfVxuICApXG4gIGxldCBuZXdVcmxcblxuICAvLyB1cGRhdGUgYW55IHBhcmFtcyBpbiBxdWVyeSB2YWx1ZXNcbiAgZm9yIChjb25zdCBba2V5LCBzdHJPckFycmF5XSBvZiBPYmplY3QuZW50cmllcyhkZXN0UXVlcnkpKSB7XG4gICAgbGV0IHZhbHVlID0gQXJyYXkuaXNBcnJheShzdHJPckFycmF5KSA/IHN0ck9yQXJyYXlbMF0gOiBzdHJPckFycmF5XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAvLyB0aGUgdmFsdWUgbmVlZHMgdG8gc3RhcnQgd2l0aCBhIGZvcndhcmQtc2xhc2ggdG8gYmUgY29tcGlsZWRcbiAgICAgIC8vIGNvcnJlY3RseVxuICAgICAgdmFsdWUgPSBgLyR7dmFsdWV9YFxuICAgICAgY29uc3QgcXVlcnlDb21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKHZhbHVlLCB7IHZhbGlkYXRlOiBmYWxzZSB9KVxuICAgICAgdmFsdWUgPSBxdWVyeUNvbXBpbGVyKHBhcmFtcykuc3Vic3RyKDEpXG4gICAgfVxuICAgIGRlc3RRdWVyeVtrZXldID0gdmFsdWVcbiAgfVxuXG4gIC8vIGFkZCBwYXRoIHBhcmFtcyB0byBxdWVyeSBpZiBpdCdzIG5vdCBhIHJlZGlyZWN0IGFuZCBub3RcbiAgLy8gYWxyZWFkeSBkZWZpbmVkIGluIGRlc3RpbmF0aW9uIHF1ZXJ5IG9yIHBhdGhcbiAgY29uc3QgcGFyYW1LZXlzID0gT2JqZWN0LmtleXMocGFyYW1zKVxuXG4gIGlmIChcbiAgICBhcHBlbmRQYXJhbXNUb1F1ZXJ5ICYmXG4gICAgIXBhcmFtS2V5cy5zb21lKChrZXkpID0+IGRlc3RQYXRoUGFyYW1zLmluY2x1ZGVzKGtleSkpXG4gICkge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHBhcmFtS2V5cykge1xuICAgICAgaWYgKCEoa2V5IGluIGRlc3RRdWVyeSkpIHtcbiAgICAgICAgZGVzdFF1ZXJ5W2tleV0gPSBwYXJhbXNba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNob3VsZEFkZEJhc2VQYXRoID0gZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpICYmIGJhc2VQYXRoXG5cbiAgdHJ5IHtcbiAgICBuZXdVcmwgPSBgJHtzaG91bGRBZGRCYXNlUGF0aCA/IGJhc2VQYXRoIDogJyd9JHtlbmNvZGVVUkkoXG4gICAgICBkZXN0aW5hdGlvbkNvbXBpbGVyKHBhcmFtcylcbiAgICApfWBcblxuICAgIGNvbnN0IFtwYXRobmFtZSwgaGFzaF0gPSBuZXdVcmwuc3BsaXQoJyMnKVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoID0gYCR7aGFzaCA/ICcjJyA6ICcnfSR7aGFzaCB8fCAnJ31gXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFxuICAgIGRlbGV0ZSBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hQYXJhbXNcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyci5tZXNzYWdlLm1hdGNoKC9FeHBlY3RlZCAuKj8gdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheS8pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUbyB1c2UgYSBtdWx0aS1tYXRjaCBpbiB0aGUgZGVzdGluYXRpb24geW91IG11c3QgYWRkIFxcYCpcXGAgYXQgdGhlIGVuZCBvZiB0aGUgcGFyYW0gbmFtZSB0byBzaWduaWZ5IGl0IHNob3VsZCByZXBlYXQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtbXVsdGktbWF0Y2hgXG4gICAgICApXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9XG5cbiAgLy8gUXVlcnkgbWVyZ2Ugb3JkZXIgbG93ZXN0IHByaW9yaXR5IHRvIGhpZ2hlc3RcbiAgLy8gMS4gaW5pdGlhbCBVUkwgcXVlcnkgdmFsdWVzXG4gIC8vIDIuIHBhdGggc2VnbWVudCB2YWx1ZXNcbiAgLy8gMy4gZGVzdGluYXRpb24gc3BlY2lmaWVkIHF1ZXJ5IHZhbHVlc1xuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHtcbiAgICAuLi5xdWVyeSxcbiAgICAuLi5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSxcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmV3VXJsLFxuICAgIHBhcnNlZERlc3RpbmF0aW9uLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBpdGVtKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHZhbHVlKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCBwYXRoTWF0Y2ggZnJvbSAnLi9wYXRoLW1hdGNoJ1xuaW1wb3J0IHByZXBhcmVEZXN0aW5hdGlvbiBmcm9tICcuL3ByZXBhcmUtZGVzdGluYXRpb24nXG5pbXBvcnQgeyBSZXdyaXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2xvYWQtY3VzdG9tLXJvdXRlcydcblxuY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyID0gcGF0aE1hdGNoKHRydWUpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcyhcbiAgYXNQYXRoOiBzdHJpbmcsXG4gIHBhZ2VzOiBzdHJpbmdbXSxcbiAgYmFzZVBhdGg6IHN0cmluZyxcbiAgcmV3cml0ZXM6IFJld3JpdGVbXSxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICByZXNvbHZlSHJlZjogKHBhdGg6IHN0cmluZykgPT4gc3RyaW5nXG4pIHtcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhhc1BhdGgpKSB7XG4gICAgZm9yIChjb25zdCByZXdyaXRlIG9mIHJld3JpdGVzKSB7XG4gICAgICBjb25zdCBtYXRjaGVyID0gY3VzdG9tUm91dGVNYXRjaGVyKHJld3JpdGUuc291cmNlKVxuICAgICAgY29uc3QgcGFyYW1zID0gbWF0Y2hlcihhc1BhdGgpXG5cbiAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgaWYgKCFyZXdyaXRlLmRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgLy8gdGhpcyBpcyBhIHByb3hpZWQgcmV3cml0ZSB3aGljaCBpc24ndCBoYW5kbGVkIG9uIHRoZSBjbGllbnRcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlc3RSZXMgPSBwcmVwYXJlRGVzdGluYXRpb24oXG4gICAgICAgICAgcmV3cml0ZS5kZXN0aW5hdGlvbixcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICByZXdyaXRlLmJhc2VQYXRoID09PSBmYWxzZSA/ICcnIDogYmFzZVBhdGhcbiAgICAgICAgKVxuICAgICAgICBhc1BhdGggPSBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIVxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5KVxuXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhhc1BhdGgpKSB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugbm93IG1hdGNoIGEgcGFnZSBhcyB0aGlzIG1lYW5zIHdlIGFyZSBkb25lXG4gICAgICAgICAgLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBtYXRjaCBhIGR5bmFtaWMtcm91dGUsIGlmIHNvIHdlIGJyZWFrIHRoZSByZXdyaXRlcyBjaGFpblxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihhc1BhdGgpXG5cbiAgICAgICAgaWYgKHJlc29sdmVkSHJlZiAhPT0gYXNQYXRoICYmIHBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZikpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhc1BhdGhcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJy4uLy4uL2xpYi9sb2FkLWVudi1jb25maWcnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU1UWWlJR2hsYVdkb2REMGlPU0lnZG1sbGQwSnZlRDBpTUNBd0lERTJJRGtpSUdacGJHdzlJbTV2Ym1VaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK0RRbzhjR0YwYUNCa1BTSk5PQzR6TWpnME1TQTRMamMzTkRJeFF6Z3VNRFU1TmpVZ09DNDNOamd5TWlBM0xqYzVNekl4SURndU5qVTVOaklnTnk0MU9USTROaUE0TGpRMU1ESTBUREV1TWpnNE5EVWdNUzQ0TlRnME5FTXdMamc0TnpRd05DQXhMalF6T1RFeUlEQXVPVEF5TWpJZ01DNDNOelF3T0RFZ01TNHpNakUxTkNBd0xqTTNNekl3TkVNeExqYzBNRFk1SUMwd0xqQXlOelkzTnpFZ01pNDBNRFUxT1NBdE1DNHdNVEk0TmpNeklESXVPREEyTmpjZ01DNDBNRFl5T1RKTU9DNHpPRFE1SURZdU1qTTVNRGhNTVRRdU1qRTNOQ0F3TGpZMk1EY3hOa014TkM0Mk16WTNJREF1TWpVNU9ETTVJREUxTGpNd01UVWdNQzR5TnpRMk5URWdNVFV1TnpBeU5DQXdMalk1TXpnd01rTXhOaTR4TURNMklERXVNVEV5T1RZZ01UWXVNRGc0T0NBeExqYzNPQ0F4TlM0Mk5qa3pJREl1TVRjNU1EUk1PUzR3TnpjMk5pQTRMalE0TXpVeVF6Z3VPRFk0TURrZ09DNDJPRE00SURndU5UazNNRGdnT0M0M09EQXlJRGd1TXpJNE5ERWdPQzQzTnpReU1Wb2lJR1pwYkd3OUlpTXdNakEzTTBVaUx6NE5Dand2YzNablBnMEtcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlPU0lnYUdWcFoyaDBQU0l4TlNJZ2RtbGxkMEp2ZUQwaU1DQXdJRGtnTVRVaUlHWnBiR3c5SW01dmJtVWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStEUW84Y0dGMGFDQmtQU0pOT0M0Mk9UZzRPQ0EzTGpVd01EQXpRemd1TmprNE9EZ2dOeTQzTmpnNE5pQTRMalU1TmpJeklEZ3VNRE0zTmpVZ09DNHpPVEV6TnlBNExqSTBNall4VERFdU9UUXhOak1nTVRRdU5qa3lNME14TGpVek1UTTFJREUxTGpFd01qWWdNQzQ0TmpZeE5ETWdNVFV1TVRBeU5pQXdMalExTmpBeU5pQXhOQzQyT1RJelF6QXVNRFExT1RBNE1TQXhOQzR5T0RJeUlEQXVNRFExT1RBNE1TQXhNeTQyTVRjeElEQXVORFUyTURJMklERXpMakl3TmpoTU5pNHhOak14TVNBM0xqVXdNREF6VERBdU5EVTJNakkxSURFdU56a3pNalJETUM0d05EWXhNRGMwSURFdU16Z3lPVFVnTUM0d05EWXhNRGMwSURBdU56RTNPVFE0SURBdU5EVTJNakkxSURBdU16QTNPRFl6UXpBdU9EWTJNelF6SUMwd0xqRXdNall4T1NBeExqVXpNVFUxSUMwd0xqRXdNall4T1NBeExqazBNVGd6SURBdU16QTNPRFl6VERndU16a3hOVGNnTmk0M05UYzBORU00TGpVNU5qUTJJRFl1T1RZeU5TQTRMalk1T0RnNElEY3VNak14TWprZ09DNDJPVGc0T0NBM0xqVXdNREF6V2lJZ1ptbHNiRDBpSXpBeU1EY3pSU0l2UGcwS1BDOXpkbWMrRFFvPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU5pSWdhR1ZwWjJoMFBTSXhNU0lnZG1sbGQwSnZlRDBpTUNBd0lEWWdNVEVpSUdacGJHdzlJbTV2Ym1VaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK0RRbzhjR0YwYUNCa1BTSk5OUzQ0TkRnM01pQTFMamcwTmpjeFF6VXVPRFE0TnpJZ05pNHdNalU1TXlBMUxqYzRNREk1SURZdU1qQTFNVElnTlM0Mk5ETTNNaUEyTGpNME1UYzJUREV1TXpRek9TQXhNQzQyTkRFMVF6RXVNRGN3TXpnZ01UQXVPVEUxTVNBd0xqWXlOamt3TnlBeE1DNDVNVFV4SURBdU16VXpORGsySURFd0xqWTBNVFZETUM0d09EQXdPRFEzSURFd0xqTTJPREVnTUM0d09EQXdPRFEzSURrdU9USTBOelVnTUM0ek5UTTBPVFlnT1M0Mk5URXlURFF1TVRVNE1qRWdOUzQ0TkRZM01Vd3dMak0xTXpZeU9TQXlMakEwTWpFNVF6QXVNRGd3TWpFM05pQXhMamMyT0RZM0lEQXVNRGd3TWpFM05pQXhMak15TlRNeklEQXVNelV6TmpJNUlERXVNRFV4T1RSRE1DNDJNamN3TkNBd0xqYzNPREk0T1NBeExqQTNNRFV4SURBdU56YzRNamc1SURFdU16UTBNRE1nTVM0d05URTVORXcxTGpZME16ZzFJRFV1TXpVeE5qVkROUzQzT0RBME5DQTFMalE0T0RNMklEVXVPRFE0TnpJZ05TNDJOamMxTlNBMUxqZzBPRGN5SURVdU9EUTJOekZhSWlCbWFXeHNQU0lqTkVZNU5rWkdJaTgrRFFvOEwzTjJaejROQ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU5ETWlJR2hsYVdkb2REMGlORGdpSUhacFpYZENiM2c5SWpBZ01DQTBNeUEwT0NJZ1ptbHNiRDBpYm05dVpTSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklqNE5Danh3WVhSb0lHUTlJazB4TVM0eUlERXpMak01TVRGTU1DQXhOeTQ1T1RFeFRERXlMalVnTkRjdU9Ua3hNVXcwTWk0MUlETTFMalE1TVRGTU16Y3VOeUF5TXk0NE9URXhRek0zTGpZZ01qTXVOemt4TVNBek55NDJJREl6TGpjNU1URWdNemN1TlNBeU15NDNPVEV4UXpNM0xqUWdNak11TnpreE1TQXpOeTQwSURJekxqWTVNVEVnTXpjdU15QXlNeTQyT1RFeFF6TTNMaklnTWpNdU5Ua3hNU0F6Tnk0eElESXpMalU1TVRFZ016WXVPU0F5TXk0MU9URXhRek0yTGprZ01qTXVOVGt4TVNBek5pNDVJREl6TGpVNU1URWdNell1T0NBeU15NDFPVEV4U0RNMkxqZElNell1Tmtnek5pNDFRek0yTGpRZ01qTXVOVGt4TVNBek5pNDBJREl6TGpVNU1URWdNell1TXlBeU15NDFPVEV4U0RNMkxqSkRNell1TVNBeU15NDFPVEV4SURNMklESXpMalU1TVRFZ016VXVPU0F5TXk0Mk9URXhRek0xTGpRZ01qTXVPRGt4TVNBek5TNHhJREkwTGpJNU1URWdNelVnTWpRdU5qa3hNVU16TkM0MklESTJMakU1TVRFZ016TXVOU0F5Tnk0MU9URXhJRE14TGprZ01qZ3VNVGt4TVVNeU9TNHlJREk1TGpJNU1URWdNall1TVNBeU55NDVPVEV4SURJMExqa2dNalV1TWpreE1VTXlNeTQ0SURJeUxqVTVNVEVnTWpVdU1TQXhPUzQwT1RFeElESTNMamdnTVRndU1qa3hNVU15T1M0MElERTNMalU1TVRFZ016RXVNU0F4Tnk0M09URXhJRE15TGpVZ01UZ3VOVGt4TVVNek1pNDVJREU0TGpjNU1URWdNek11TkNBeE9DNDRPVEV4SURNekxqa2dNVGd1TmpreE1VTXpOQ0F4T0M0Mk9URXhJRE0wTGpFZ01UZ3VOVGt4TVNBek5DNHhJREU0TGpVNU1URkRNelF1TVNBeE9DNDFPVEV4SURNMExqSWdNVGd1TlRreE1TQXpOQzR5SURFNExqUTVNVEZNTXpRdU15QXhPQzR6T1RFeFRETTBMalFnTVRndU1qa3hNVXd6TkM0MUlERTRMakU1TVRGTU16UXVOaUF4T0M0d09URXhRek0wTGpZZ01UZ3VNRGt4TVNBek5DNDJJREU0TGpBNU1URWdNelF1TmlBeE55NDVPVEV4UXpNMExqY2dNVGN1T0RreE1TQXpOQzQzSURFM0xqYzVNVEVnTXpRdU9DQXhOeTQyT1RFeFF6TTBMamdnTVRjdU5Ua3hNU0F6TkM0NElERTNMalU1TVRFZ016UXVPQ0F4Tnk0ME9URXhRek0wTGpnZ01UY3VNemt4TVNBek5DNDRJREUzTGpNNU1URWdNelF1T0NBeE55NHlPVEV4VERNd0lEVXVOVGt4TVRGTU1UZ3VPQ0F4TUM0eU9URXhRekU0SURFd0xqUTVNVEVnTVRjdU1pQXhNQzR4T1RFeElERTJMamtnT1M0ek9URXhNVU14Tmk0M0lEZ3VPRGt4TVRFZ01UWXVPQ0E0TGpNNU1URXlJREUzSURjdU9Ua3hNVEpETVRjdU9DQTJMalU1TVRFeElERTRJRFF1T0RreE1URWdNVGN1TXlBekxqSTVNVEV4UXpFMkxqSWdNQzQxT1RFeE1UVWdNVE11TVNBdE1DNDNNRGc0T0RVZ01UQXVNeUF3TGpNNU1URXhOVU0zTGpZZ01TNDBPVEV4TVNBMkxqTWdOQzQxT1RFeE1TQTNMalFnTnk0ek9URXhNa000SURndU9Ua3hNVElnT1M0MElEa3VPVGt4TVRFZ01UQXVPU0F4TUM0ME9URXhRekV4TGpNZ01UQXVOVGt4TVNBeE1TNDNJREV3TGpnNU1URWdNVEV1T1NBeE1TNHpPVEV4UXpFeUxqTWdNVEl1TURreE1TQXhNUzQ1SURFeUxqazVNVEVnTVRFdU1pQXhNeTR6T1RFeFdpSWdabWxzYkQwaUkwUkJSVEpGT0NJdlBnMEtQQzl6ZG1jK0RRbz1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlOVE1pSUdobGFXZG9kRDBpTkRVaUlIWnBaWGRDYjNnOUlqQWdNQ0ExTXlBME5TSWdabWxzYkQwaWJtOXVaU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajROQ2p4d1lYUm9JR1E5SWswME9TNHdNVFEySURJMExqUTVPVFpETkRndU56a3pOaUF5TlM0ME56UTVJRFEzTGpnek5qWWdNall1TURjNE15QTBOaTQ0TmpFeklESTFMamcxTnpOTU5ETXVNelV3TXlBeU5TNHdOakUzVERReExqZ3lOVFVnTXpFdU56a3hNVXd6TkM0NE5qVTBJREl6TGpFek9URk1Nak11TkRVME55QXlNQzQxTlRNMFF6SXlMalEzT1RRZ01qQXVNek15TlNBeU1TNDROellnTVRrdU16YzFOQ0F5TWk0d09UY2dNVGd1TkRBd01rd3lOUzQyTnpjeElESXVOakF3TnpGRE1qVXVPRGs0TVNBeExqWXlOVFF6SURJMkxqZzFOVEVnTVM0d01qSXdNU0F5Tnk0NE16QTBJREV1TWpRek1ERk1OVEV1TWpNM0lEWXVOVFEyT0RoRE5USXVNakV5TXlBMkxqYzJOemc0SURVeUxqZ3hOVGNnTnk0M01qUTRPU0ExTWk0MU9UUTNJRGd1TnpBd01UZE1ORGt1TURFME5pQXlOQzQwT1RrMldpSWdabWxzYkQwaUkwUkJSVEpGT0NJdlBnMEtQSEJoZEdnZ1pEMGlUVFV1TWpZMk5pQXpPQzR6TnpRNFREY3VNalUxTlRZZ01qa3VOVGszTTB3MUxqWTVOVEV5SURJNUxqSTBNemRETXk0Mk5EY3dOQ0F5T0M0M056azJJREl1TXpZME56WWdNall1TnpRMklESXVPREk0T0RVZ01qUXVOamszT1V3MkxqUXdPRGszSURndU9EazRORE5ETmk0NE56TXdOaUEyTGpnMU1ETTFJRGd1T1RBMk56SWdOUzQxTmpnd055QXhNQzQ1TlRRNElEWXVNRE15TVRaTU16UXVNell4TkNBeE1TNHpNelpETXpZdU5EQTVOU0F4TVM0NE1EQXhJRE0zTGpZNU1UY2dNVE11T0RNek9DQXpOeTR5TWpjM0lERTFMamc0TVRsTU16TXVOalk1TmlBek1TNDFPRE00UXpNekxqSXdOVFlnTXpNdU5qTXhPU0F6TVM0eE56RTVJRE0wTGpreE5ERWdNamt1TVRJek9DQXpOQzQwTlRBeFRERTRMak01TlRnZ016SXVNREU1TVV3MUxqSTJOallnTXpndU16YzBPRnBOTlM0M09UWXlOU0F5Tmk0eU9Ea3pUREV5TGpBMk1qY2dNamN1TkRneU4wd3hNQzR3TURJZ016TXVNVFkwVERFNExqQXhNVGtnTWpndU9ETXdOMHd6TUM0NU1UQXpJRE14TGpVeU5qbE1NelF1TkRBeUlERTBMakV4TnpWTU1UQXVNamc0SURndU9EYzVPVFJNTlM0M09UWXlOU0F5Tmk0eU9Ea3pXaUlnWm1sc2JEMGlJMFJCUlRKRk9DSXZQZzBLUEM5emRtYytEUW89XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTXpNNUlpQm9aV2xuYUhROUlqUTFOaUlnZG1sbGQwSnZlRDBpTUNBd0lETXpPU0EwTlRZaUlHWnBiR3c5SW01dmJtVWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStEUW84Y0dGMGFDQmtQU0pOTXpBeExqZzBJRFl3TGpJNE5ETk1NekF6TGpjNU9DQTFOUzQ1TURJeFF6STROeTQyTVRnZ05Ua3VNVEl4TnlBeU56TXVOREF4SURZMUxqSTJNaklnTWpZeExqUTFNaUEzTkM0ek1UQTRRekkwTkM0MklEZzNMakEyTkNBeU16WXVNall6SURFd01pNDFNVFlnTWpNeUxqSXlNeUF4TVRNdU1qSTNRekl6TUM0ME16RWdNVEU0TGpBd01pQXlNamt1TURrM0lERXlNaTQ0T1RnZ01qSTRMak14TkNBeE1qY3VOakUwUXpJeU1pNDJNeklnTVRJM0xqTTNNeUF5TVRZdU1qWXlJREV5T0M0ek16WWdNakE1TGpVZ01UTXdMalEyTlVNeE9UWXVPVGs1SURFek5DNHpPVElnTVRnNExqRTJOaUF4TkRRdU1qVTVJREU0TVM0Mk5UUWdNVFl4TGpVd05rTXhOelV1T1NBeE56WXVOemN4SURFM01pNDFOamtnTVRrMUxqZzROeUF4TmpndU56QXhJREl4T0M0d01rTXhOalV1TVRJZ01qTTRMalUxTmlBeE5qRXVNRFlnTWpZeExqZ3pOeUF4TlRRdU1qZ2dNamcwTGpZd05rTXhORFl1TlRZMUlETXhNQzQyTVRZZ01UTTJMalEwTnlBek16SXVNVEEySURFeU15NHpPRGtnTXpVd0xqSTRRekV4TWk0MU9UZ2dNelkxTGpJNU5TQTVPUzQyTnpNeklETTNOeTR4SURnMExqazVNellnTXpnMUxqTTNOVU0zTWk0eU1UQTRJRE01TWk0MU5qRWdOVGN1TmpnMk1pQXpPVGN1TWpnM0lEUXhMamMzTWlBek9Ua3VORE16UXpJM0xqYzRNemNnTkRBeExqTXpOQ0F4TXk0M01qVTJJRFF3TVM0eU9EY2dNQzR3TVRRNE56azVJRE01T1M0NE5ESk1NVEF1TXprMk15QTBNRFF1TkRneVF6SXdMamc1TlRRZ05EQTFMakV6SURNeExqWXlOamdnTkRBMExqY3pNeUEwTWk0ek1UazBJRFF3TXk0eU56VkROVGd1TnpFNE5pQTBNREV1TURRM0lEY3pMamN5TkRNZ016azJMakUxTXlBNE5pNDVNekk0SURNNE9DNDNNekpETVRBeUxqRXhOU0F6T0RBdU1Ua3lJREV4TlM0ME5ESWdNelk0TGpBeE15QXhNall1TlRjZ016VXlMalV6TVVNeE16a3VPRGMwSURNek15NDVPVGtnTVRVd0xqRTNOU0F6TVRJdU1UUTFJREUxT0M0d01pQXlPRFV1TnpBeVF6RTJOQzQ0TlRFZ01qWXlMamN5TXlBeE5qZ3VPVFF4SURJek9TNHpNamdnTVRjeUxqVXlOaUF5TVRndU5qZzNRekUzTmk0ek5TQXhPVFl1TnpRM0lERTNPUzQyTnpFZ01UYzNMamM1TnlBeE9EVXVNamt6SURFMk1pNDROemRETVRreExqTXpOU0F4TkRZdU9ESTFJREU1T1M0ME1EY2dNVE0zTGpjd05DQXlNVEF1TmpZNUlERXpOQzR4TlRsRE1qRTNMalk0TVNBeE16RXVPVFVnTWpJekxqTTBNaUF4TXpFdU16TWdNakkzTGpjMk15QXhNekV1TkRjMlF6SXlOeTQxTXpnZ01UTXpMalkxTXlBeU1qY3VOREkwSURFek5TNDNOek1nTWpJM0xqUXpOaUF4TXpjdU9FTXlNamN1TlRBMElERTBOUzR4TlRNZ01qSTVMakkwTXlBeE5UQXVPRFk1SURJek1pNHpNamNnTVRVekxqZzJORU15TXpRdU56azVJREUxTmk0eU5qZ2dNak00TGpBME5DQXhOVFl1T0RRMklESTBNUzQwTkRZZ01UVTFMalExUXpJME5DNDVPVE1nTVRVMExqQXhNeUF5TkRjdU5qQTBJREUxTVM0M01TQXlORGd1T1RrNUlERTBPQzQzTnpsRE1qVXdMak16T1NBeE5EVXVPVGN5SURJMU1DNDBOVFlnTVRReUxqYzBOaUF5TkRrdU16UXlJREV6T1M0Mk9UUkRNalEzTGpVek15QXhNelF1TnpVMklESTBNaTQ0TXpjZ01UTXdMamd5TnlBeU16WXVOREkySURFeU9DNDVNVGxETWpNMUxqQTNNaUF4TWpndU5UQTJJREl6TXk0Mk5qTWdNVEk0TGpJeE55QXlNekl1TVRnM0lERXlOeTQ1T0RORE1qTXlMamsxSURFeU15NDFPVGdnTWpNMExqRTROeUF4TVRrdU1EWTBJREl6TlM0NE5qSWdNVEUwTGpVNU4wTXlNemt1TnpNeElERXdOQzR6TmpRZ01qUTNMalk0SURnNUxqVTRPVGtnTWpZekxqYzVJRGMzTGpNNU9EaERNamMwTGpZeE9DQTJPUzR5TXpJNElESTROeTR6TmpJZ05qTXVOVEU1TmlBek1ERXVPRFFnTmpBdU1qZzBNMXBOTWpNMUxqTXlPU0F4TXpJdU5qWTFRekkwTUM0MU1qa2dNVE0wTGpJeU15QXlORFF1TXpFeklERXpOeTR5TnpZZ01qUTFMalk0TmlBeE5ERXVNRFJETWpRM0xqTXhPU0F4TkRVdU5UVTVJREkwTlM0d056WWdNVFE1TGpneE5DQXlNemt1T1RZZ01UVXhMamc1TVVNeU16Z3VNREEySURFMU1pNDJOemdnTWpNMkxqTTRPU0F4TlRJdU5ESXpJREl6TlM0d05EZ2dNVFV4TGpFeU1rTXlNekl1TnpVNElERTBPQzQ0T0RVZ01qTXhMak01T0NBeE5EUXVNRFF4SURJek1TNHpNemNnTVRNM0xqZ3lRekl6TVM0ek1USWdNVE0xTGpreE5DQXlNekV1TkRFMUlERXpNeTQ1TVRjZ01qTXhMalkxTkNBeE16RXVPRFV5UXpJek15NHdOVGtnTVRNeUxqQTFOU0F5TXpRdU1qYzJJREV6TWk0ek5ETWdNak0xTGpNeU9TQXhNekl1TmpZMVdpSWdabWxzYkQwaUkwUkJSVEpGT0NJdlBnMEtQSEJoZEdnZ1pEMGlUVE16T0M0M05Ea2dORGt1TnpRMlRESTROQzQ0T0RrZ016Z3VNalV4TlV3eU9USXVOak0zSURVeUxqWTFPRE5NTXpJMUxqQTFOQ0ExTVM0Mk5qa3pUREk1TlM0ME9UZ2dOVGN1T1RjM05Fd3lPVFV1TlRBMUlEVTNMams1TVRKTU1qazFMalE1TlNBMU55NDVOelV5VERJNE5pNDNOVEVnTmpjdU9Ea3hOMHd5T1RrdU9EUXhJRFkyTGpBMU16Uk1NekExTGpNME5pQTNOaTR5T0RneVRETXpPQzQzTkRrZ05Ea3VOelEyV2lJZ1ptbHNiRDBpSTBSQlJUSkZPQ0l2UGcwS1BDOXpkbWMrRFFvPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU16TTRJaUJvWldsbmFIUTlJak14TmlJZ2RtbGxkMEp2ZUQwaU1DQXdJRE16T0NBek1UWWlJR1pwYkd3OUltNXZibVVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUkrRFFvOGNHRjBhQ0JrUFNKTk1URTRMak15T0NBNE5TNDRNamd4UXpFeE15NDBNek1nTnpRdU16SXdOU0F4TURZdU1ERWdOalF1TURNMUlEazJMamcyTmpNZ05UWXVNVEU1UXpnNUxqQTRNemNnTkRrdU16VXpJRGM1TGpjME9DQTBOQzR3T0RJeElEWTVMalk1TURZZ05EQXVOekF6Tmt3M01TNDNOamt4SURNM0xqRTNOek5ET0RJdU1UUWdOREF1T0RFZ09URXVOVEUwTVNBME5pNHhOek14SURrNUxqUTVNamtnTlRNdU1EYzNPVU14TURrdU1Ea3lJRFl4TGpRd01USWdNVEUyTGpnM05DQTNNaTR4TnpjZ01USXlMakF4TnlBNE5DNHlORGMyUXpFeU55NHhOVGtnT1RZdU16RTRNaUF4TWprdU5UQXlJREV3T1M0ME1EUWdNVEk0TGpneU9TQXhNakl1TVRBelF6RXlPQzQyTkRRZ01USTFMalk0SURFeU9DNHlNVE1nTVRJNUxqSXdNeUF4TWpjdU5UWXhJREV6TWk0Mk5qZERNVE00TGpjNE5TQXhORGNnTVRRMUxqZzNNU0F4TmpNdU9ETXlJREUxTVM0NE1Ua2dNVGd3TGpBMFF6RTFNeTR5TnpNZ01UZ3pMams0SURFMU5DNDJPVFFnTVRnNExqQXhOaUF4TlRZdU1EWXpJREU1TVM0NU1EVkRNVFl4TGpFd01pQXlNRFl1TVRFM0lERTJOaTR6TURVZ01qSXdMamM1TmlBeE56TXVOakUxSURJek5DNHhORFJETVRneExqZzJNU0F5TkRrdU1qQXpJREU1TXk0eU9ETWdNall6TGpBd05DQXlNRFl1TmpRNElESTNOQzR3TlRoRE1qSXdMak00TlNBeU9EVXVOREl6SURJek5TNDJOaUF5T1RNdU56QTRJREkxTWk0d05pQXlPVGd1TmpZNVF6STFPQzQzT1RNZ016QXdMalk1TVNBeU5qVXVOeUF6TURJdU1UUXlJREkzTWk0Mk1USWdNekF5TGprNU5Vd3lOekF1TkRFeElETXdOaTQzTWpoRE1qWXpMamM0TXlBek1EVXVOemczSURJMU55NHpNREVnTXpBMExqUXdNU0F5TlRBdU9URXlJRE13TWk0ME5qWkRNalF3TGpreE9TQXlPVGt1TkRVZ01qTXhMak14TkNBeU9UVXVNakkxSURJeU1pNHlNelFnTWpnNUxqZzNNME15TVRVdU9UUWdNamcyTGpFMk5DQXlNRGt1T0RneUlESTRNUzQ0T1RjZ01qQTBMakVnTWpjM0xqRXlNa014T1RBdU16WXpJREkyTlM0M05UY2dNVGM0TGpZd015QXlOVEV1TlRRM0lERTNNQzR4TVNBeU16WXVNRFF5UXpFMk1pNDJOVGdnTWpJeUxqUXlOQ0F4TlRjdU16ZzFJREl3Tnk0MU9EZ2dNVFV5TGpNeElERTVNeTR5TkVNeE5UQXVPVFF5SURFNE9TNHpOU0F4TkRrdU5URXhJREU0TlM0ek16SWdNVFE0TGpBMk15QXhPREV1TkRFNVF6RTBNaTQxT0NBeE5qWXVOVEExSURFek5pNHhOVFlnTVRVeExqRXdOaUF4TWpZdU5EQXlJREV6Tnk0M056aERNVEl6TGpBMElERTFNQzQyTnpjZ01URTJMalEyT0NBeE5qSXVNVEF4SURFd055NDBNREVnTVRjd0xqUXdPRU14TURBdU5qZ3pJREUzTmk0MU56Y2dPVEl1TkRJeE5DQXhPREV1TURBeUlEZ3pMalV4TmpJZ01UZ3pMakl4TjBNM05DNHlPRE1nTVRnMUxqVXhOaUEyTkM0NU9EVTJJREU0TlM0eU5URWdOVFl1TmpFMk9TQXhPREl1TkRJNFF6UTRMakEwTlRrZ01UYzVMalUxTkNBME1DNDBNRGN4SURFM015NDJPRFFnTXpVdU1EVTBOeUF4TmpVdU9UUkRNamt1TlRjek9TQXhOVGN1T1RneElESTNMakV3TmpjZ01UUTRMamMyTWlBeU9DNHdOek15SURFek9TNDVOamhETWprdU1UTTRPQ0F4TXpBdU1qVTVJRE0wTGpNek56WWdNVEl4TGpBNE5TQTBNaTQzTVRBeUlERXhOQzR4TlRORE5UQXVOakkyT1NBeE1EY3VOakF4SURZd0xqZzROREVnTVRBekxqVTJOQ0EzTUM0NE56YzJJREV3TXk0d09FTTRNQzQxTlRZeklERXdNaTQyTWlBNU1DNHpOVFE0SURFd05DNDRNallnT1RrdU9UUTNNU0F4TURrdU5qSXlRekV3T0M0Mk16SWdNVEV6TGprMU15QXhNVFl1T0RReklERXlNQzR6TkRZZ01USXpMalk1T1NBeE1qZ3VNRGsxUXpFeU15NDRORGNnTVRJNExqSTNOaUF4TWpRdU1EQTJJREV5T0M0ME16a2dNVEkwTGpFMU5TQXhNamd1TmpFNVF6RXlOQzQwTnpjZ01USTJMalF5TWlBeE1qUXVOamcxSURFeU5DNHhPQ0F4TWpRdU9EQTFJREV5TVM0NU16TkRNVEkxTGpRMk5TQXhNRGt1T0RBMklERXlNeTR5TWpNZ09UY3VNek0xTnlBeE1UZ3VNekk0SURnMUxqZ3lPREZhVFRFeU1DNDNNek1nTVRNd0xqY3lPRU14TVRRdU1qQTVJREV5TXk0ek5pQXhNRFl1TkRBMUlERXhOeTR5T1RrZ09UZ3VNVGN3TVNBeE1UTXVNVGczUXpnNUxqRTRNamdnTVRBNExqY3dNU0E0TUM0d05qTXpJREV3Tmk0Mk5DQTNNUzR3TnpZZ01UQTNMakEyT0VNMk1TNDVORFE1SURFd055NDFNRFFnTlRJdU5UTTBNU0F4TVRFdU1qQTFJRFExTGpJNE1Ea2dNVEUzTGpJeU1VTXpOeTQzTVRRM0lERXlNeTQwT1RNZ016TXVNREU0T1NBeE16RXVOek0xSURNeUxqQTJNVGNnTVRRd0xqTTVOVU16TUM0eU9UUXlJREUxTmk0ek5qWWdOREV1TmpVNU55QXhOek11TVRjeElEVTNMamt4TmpRZ01UYzRMalkxTVVNMk5TNDFOVEEwSURFNE1TNHlNallnTnpRdU1EZ3dOeUF4T0RFdU5EVTJJRGd5TGpVM05UZ2dNVGM1TGpNME9FTTVNQzQ0TXpVeElERTNOeTR5T0RZZ09UZ3VORGd6TVNBeE56TXVNVGsxSURFd05DNDNNaklnTVRZM0xqUTROVU14TVRNdU9USXlJREUxT1M0d055QXhNakF1TXprMElERTBOeTR4TkRjZ01USXpMakkzTXlBeE16TXVOek15UXpFeU1pNDBOU0F4TXpJdU5qa2dNVEl4TGpVNU55QXhNekV1TnpBeElERXlNQzQzTXpNZ01UTXdMamN5T0ZvaUlHWnBiR3c5SWlORVFVVXlSVGdpTHo0TkNqeHdZWFJvSUdROUlrMHpNeTQ1T1RreklESTJMall3TlRGTU9EVXVNVE14TkNBeU1DNHpORE00VERjMkxqY3lNak1nTXpNdU1USTNNVXcwTmk0Mk1EQTBJREk1TGpVeU9ESk1Oek11TmpFM055QXpOeTQ0TkRZNFREY3pMall3T1RjZ016Y3VPRFU1VERjekxqWXlNRElnTXpjdU9EUTBPVXc0TUM0NU5EZ3lJRFEzTGpnd05qWk1Oamd1T1RBek5pQTBOUzR3TVRJM1REWXlMamt5T1RnZ05UUXVNRGswTVV3ek15NDVPVGt6SURJMkxqWXdOVEZhSWlCbWFXeHNQU0lqUkVGRk1rVTRJaTgrRFFvOEwzTjJaejROQ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2Jhbm5lci1pY29uLTEtNS0zMTUwOThlYzUzNjVmMTg2MGM4NWQ0YWIzNjkyN2VmNi5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvYmFubmVyLWljb24tMS02LWZlYmM2ODU2MjY3ZDExNWZmNjdhMTVhYzZiZDFkODQ5LnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9iYW5uZXItbG9nby0wMGMwOTk1MWQzZjQzMGEwMzg3MmI0ODczZmJlMzE5My5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvYmFubmVyLW1vY2t1cC00NzcyYTJmODJjMGI2YWVkMzhiNDg0MmQ2ZjQ0NmM1MC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvYmxvZy0xLTEtZDg2ZjllNzYxNzFkNDA3NjUzNmYyYjViZDEyZWE1NGMucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2Jsb2ctMS0yLWMyYjIyMTBmZmJmMTkwOTZhNjNlODg1MTc1ODk5NjJhLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9ibG9nLTEtMy0wMDcyMmE4NmE2ZmM2NWYwOGRiOGMxZDA0M2ViODEyMS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvYmxvZy0xLTQtMGI1MTZlMTUxNGU2N2RjMjRkZWM1ZTcxYmQ4ZjUyZTcucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2NhbGwtaW1hZ2UtMDMyMmJkNDNjNTJmYjE2ZmU4MWZkYzE2NTM2OGY2YjkucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2RvdC1wYXR0ZXJuLWU2MWNkNTg0NzZiYThkZWI2YWIxZDQ3NDZmZTViODM4LnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUR3QUFBQThDQVlBQUFBNi9ObHlBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBZENTVVJCVkhnQjVadDViRlJWRk1hLysyYmFtUzdEV290WWxoYVF5R0tFUWxRa3hhYUpMUmhSREltWUtLQnhneEFTRFNwRWpBeEdDRVNxZjVCbzFFQUF3Y1JFb29sRUdFd0FRVUdKZ21nVHdMQzBwQ3d0cGFWTXA1MzFYYi83cHJYTFRFdm5EVjFtL0NYVHZybnYzdmZldWN1NTU1eDNSaUFPcEJNYTZtY01RdWFBU1JCaUJFVG9Qa2pMYUVEUEE3VEJyREVNVXRwNExwUFZMYmU1bk02NmJ0YjE4YmdXRXBVOHZzempjcDQ2alpCZUFaOTJBWm43YTRTVGRVMGlZQkw1VnVIZHNOdVdVMlFLaWNtOFZDNUxVOUV6ZVBtcFpJZjhBMDA3QVovY0xqYTR6c0VFTVFrc0Z4Wm5ZQlNtUVJNZnNPVU1GbG5STnpTeWt3OUQ2SnZnQ1p5Q283QldPSjNkR3ZWdUN5eFhGejhDcTFqQkc4M2kxeXowRHpqMTVRSG9jcU5ZOStQdjNXbHdXNEhsNjRXRE1ORDJCaS84UElYTjQ3b3l2UXg2Q0RXeWFucHZSUkE3eEhyWDFhNHFkL253Y3MyY0VaQWhKNnM5eDY5MjlHKzhISkJ0c0lpTndybXZ2TE5LblFvc1Z4WG1JdFgyQ1EvbklKR1EyQWM5c0VTc08xQVI3WFJVZ2FWemRpNm44S2RzUEJ1SmlNUmVhdk5YeGRxOWxSMVBhUkYxM3lrWlRtRlhKcXl3Q3NGWnlhVm82SjhPUkFqTWtrVVU5Z1VrUE5RN1N0bDJMRzA1a0U2bmhzQXYrYkJvdS9oMVBKSUNjWUVXMmtLeGJ2L1JscExXRVhZZkdrS0RZaVdQeGlGcGtIbGN5eXZrbXpTWW1ta1ZPTTAyaFh0c0VhSk44OFJGUU1oWnNORTZiRVpyYzJvRi93NUI4cEZsbU1MTkdHdFlyaW9aaDFTYzRtRTZrcE1nbWl3anhZYy9YTk1NRjg4bUZ5TjVoVlZZa1I1YXJtVFYwRkNjUldzMEg4bU9UamVXdnJ1R3ROQllLcXNrMllhNlFOQm5UM2RNcHRKU0VRcU1RUEtUUytVMWdnTExDZWovbnRDZElCVVdPVjZETUViNC80R3U1VnJwS09TZ3QxeDZhd293NEM0Z20zMnNNYVozL1JKd2d3Nk5iam9tRnh0QzVsa3BiSHpyMTA2ckxZVXJ3bFBYOVlObk1vajU4TlBBdEJKdWdBUERaUUVHS0gvOUx2eHBxSXZlenNxNFlKcURxc2JhMnNaekU2YVFjckM2aWpuclNrVjZIbm9LZUhBdVlPTVdYdkVYNE5wQ203d21zcTZGSXp1TjN1YU1lWkFhSjVXdlVkbDhFS25zcUlJRmZCQjIxSkd2YVI3NDI3ZXpNN3I3eERKZzFQM2greGtQemJyZmxnTG5UOEFFdzZ6TmNXUEV6TWlKUVBITHJUMC82VkZPMTJ3R1U4OUUxazJ4QVJObkdxUGwrZnRuM0hEdHBPcXdZRWpSczhoOG9BQ1kvamhIbmE1cndOdStuUkk0YnlyUERXaGZQamJmcE1EQ3hpa3RIREREbUNtdHdyWXdja0w0MHdVMWU3YkNjL28zNDFnRy9HR0IxUlNmM2d1UkpJbE01VHlZODQ2Q0FjU0xEUG5ScTRpSUlZcUJzOGU0L3A0SlQ3dG0zRC90UnUzUlBleEkyYTZxeGpVK2ZORnFwR1RsWUdqSlFnb2FoUFI3a1RYM05lTzg3OHA1Vk8vZWpGQkRlMldVbWowSzJmT1d3anAwZVB0N3g5SFpRcjVYSW1HV2UrN2wyaXlBN2hpTXVyTGpxRDd3RGZSZ2xGRVRHaHo1UmNoNWFTMHNtZTNEVE1FYjEzRGx5L1Z3bnp3WVZrZ2RjRXd0eEpDWlR5SWpJejI4ZS9xYmdJTTdnZnBxbUNFK2dadngrRU80WEZXRlFERFVhUjJOR3RreHBSRFo4NWNoSlR0czZ3U3FMdUg2OTUvajFuRVhJNnUrNkEycFVGTnNhY2dabG9VTXV6MnN5ZlVRekJLM3dENS9BQmV2VmpOMDFIM2pRVTF4aGM3dHFkdHQ2TmlOR1Q0TXR0VDRYbWZGRmM2UlVxTE83WWxKV0lVU05CWmhqVGE4UjUzYkhmTzlPaEtYd083R0p0eHM4S0MzcUc5b1JBUHZHUTl4Q1Z6dmFZcTd4Mk1oeUh1cGU4YURFdGlVQmxDQ3V1UHNiVE40bXJ3SWhVeDNzcTV4SVRiQUJFMWV2N0dHZXh1ZDkvVDZUUnNzYnEwNXB5Sm12SUZldHBMYTRQR2FlbVFpZlNyaVVZVVlVU1ByOHdmUlZ3UzUzNXViWEtLV1V4cW1uRXU5RjVWVjVMMlZ0Q1lrbHFpa3Q2UmQ0RkVCWWlUZGJqTzBabDlndDV0TUZoTGlNZ1VPVmRBcmo3R2R3Q0JIQmh3WmFlZ0xyQXdQbVV3MUtiZFNVWitsVmE0MFVFemRacUdwcHo2SmcyUjBRWjdXcU9kVldrQTVraDVSeVpsOFNVT0tLT01JbHlIWlVWbDhUYmZPYzA2NmxKWStnMlJIaUpQSVBGcWpHWW1hd3JlWlhkQjNHMnZQMDBnamVwdVMxZEE2d25ub0d2OGVRN0lpY0ZnNHc4bW9yV28ySk4vbG1Sb2tIN1YwajBwYnZyUUs3TU1makg4Y2pvakFKVGJLTWpySVZ6eC90aFQ4SjdEWXROOURnVXVoeVl0SUhzN3hIZFlHQnIxcld3b2l6Qlc1cG1RdHgvaHRKUDRyVlBVYXd5bmVkMjFzV3hocEtnbmZ4OXl6dmtMQ0k3ZkRoaDBkUzZNbmw2cTBZVjMvZ21jVE5ibDBIeXhpYWJRMDRxakdzSkdGeWdaczZFS2kwWVd3aWs2dGY2T0JSU3poRlQ1RGVEMzBkL2lNWWdzRDJLK1lTaEJ2d1VnbnRzakZOTTFlUkRnUHMzKzVTQ3I4SWpUdUxISVhOTjlITktLNkRHakU4Q09QeDZZYnlhY0NSV3pXWDFJVWE1UVZoYUFzYlpzeDJ4WGRINjJVbVNkZ1NWMUtvUmMwciszWVhoM2NXWlRkZndSYVlENDhjbEYzaFZXWS82R1dzMlFjcDVOS1djeUhOQkxiVks1SVQrM2RLa0JSem80dTR4Q2RVYzVPMlA2UG5ianlkNHc4VFJSbklhU05wUlUzMnNqNU10S2dwQkkrQnlwL0pKeFNvYklNYmplYlFrYU0zQWdiQzBaU1pSMy9YelJDVUxvOHkvQktKZXJwdXc5MDNZem5wM2ovQWtOS2h5M1dkSUw2QUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRHdBQUFBOENBWUFBQUE2L05seUFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFYUFNVUkJWSGdCN1p2ZmJ4UlZGTWUvNTg3czlzZHVhWXRWaXRRVWhCQ0lKQmpwQzVvZ01iR2wrT2lEVVJIUVJBTVBKaW9LaEdwWUV5Q2dnQThtR2tQOEFVYi9BNEdpVVlJSnZnaENVaU1TZnJSYXRHRFRuN3ZkM2U3TVBaNjd5NjVZdG1XWnBxRTd5eWRwdC9mT3ZkTTVNL2VlZTgvWjd4QW1BU09paHBZUDFnUm5oQjlpU3pld3F4YXgwbzBLMWp5UXJtWEdMQWJLQ0J3R3lKcndaQVF0N1ljSlNCSlJINE83bWZtS3hkVEpwSDREM0M3WFRWNEtId3YzRWlJYUhpRjRKTHI2clhyaThsZkJ2SWlKbG9oUmM2VTZpS2toUWFCdXVRbm53WFRhNGRUQjZ2YmRGK0NCMnpLNHAvbUZVQWozTHlNN3NJTTBsa3R2RzNlR0VmbmZKMWlydlRvUk83dC9aVlZmSkZMWVV5L1k0S0duMmg2VjRiVkp4dkVLS2RaaGV0QW5KbndQUis4SmZidno1MEk2M05MZy9wV3YxUVFycWw2WGhtdVl0Y3hOOGp3TnBnZ3QwK21DVnZSWjNOR0g3bTNmOWZkRWpTZTgrSkhXN1EzTWJrUmFQUy9GY2t4dkV1Skd2MURzN3FrNHVydHp2RWJqR3R5L2F1dmNvTEkrRWlmUmltS0NjRlNCTjFRYzN0bVYvM0FlTXNiYUg4dDhYWVdpaEk4UVVxOVVIbm12ZSt3Uk5iWWkxckp0ZGxBRnRoU3ZzUVpxWlE1R2pQOFplK1FtZzFtcHRiSzJya2V4STM3SE9OdXgxVG1EWlIxVHNkVnRUUXIwRXFhL2d5cUVjaUs5WmtTVzB4c3Jjd2EvY1h4NHBqaW9MYktiV1FDZndFeno0TkttbnVZM1E5bTZuTUc2ck9KaCtYZ0NlWVo1RVVOTVdCR0N0U3hia1RQT0p0bEZBVFBoUCtvc0ZkaVJMYVNYcGNHV3JRc0N5ajRya1UwbC9JbkRsSHdnZlBqOUhtVkNQTnNLclBPeHNRYmJSSGJHVmhWdGp0Yko3SDRFZmtmQzJHNkozUldyd0h6eHpndmhjMHpNWGxNYlhHSkxTTnNvdnF3Qlhpa1B3bG9pcDdBekNRM2RPd2g5c2NmY1VmRVFCTlY0SDZpK05yZUhkYzljQWlkR0o5LzNOa2tuS0Z5cndaWlV6R0lwZXR0b3lFVUZubjBjOXFvbThmZlhIWDQwZ1dUa1MraXVhNkJaTlNqYkxvRldxRHpkMXFDT25rTHE0SGRnMS9YZTEzSGdnU0NSV21qTHpxb1JYaWtMZ0diZkE2cTZ3ZC9KQlZKNUp0TkROU0c1OE5yL2RhRloxZUpDVlBySGMxOVA5cG9UWUs1RVVwaURFb0doNWlsU2s1aS9SWVlrUm11Vlp2TGo3aW8va2pZMlE3b01KWUxKa1N0eGdGVW9FWWc0Yk5ZRFAwVkh0NENzRWpJMncxMkQvYzVkZy8zT1hZUDlqaGpNTGtvRjJVd3J5ZDFHVVNLd3hyRFpXaVpSSWhqOWlKbkRWMUVpU0NqY0orRWhCbEFpTUtoYktjSWxsQW9hVjJ5dHFVdEpPdDRUcmdaZjZ3ZkhFcG15bklaamNmQmdMRk1lR1lXVzR4U3F1UDRQNWF1NnY2UjlNaVc1S2N0N1g2OG9kRkswWmR0enBOVG44S3F4cXBCVTY5SUhrYjFxdmpvQTNYbnR2MVRyL0hwUVhYWG1zR1FiOWE5L2dPT2prKzk3K3lUa2pPdHB1TGx0aFVTSkJ5UnY2K3RrUElFdXlEMWRxelFGT21SRWQ4RG5NUE41ZHloK1VjMVlqZ0VtZlE1K2gvRkwrS1RSYVFyUmxaRjZxbkQrbEQvdmxKUndxaGx4dExQVTZEUFR3VVA0ZUtSSC9NUlA4Q3VNRTFreGFpNWFZczF2eTBjdmZJWU00VDdGenI1c09XZHdETWxUNWs1azFnVGZZRmJ2SDFLQjhqUFppcHpCOWNmMnhraXozQWwxR1Q3QmlFN2wxKzZxSnFPNnpkYU5JZGI2enJ2eWxEZWorTFZhc3RIUWtjb2p1L2JjV0hsVHhtTTBibjBnOC9sckZEbWE5VUdKZncrTnJjOHJMaDFwM2R6Z2NQQ0FSVVdxdDJTanFIVTI1cE1SNTgxcEdSV3FLeDFrZDlLT1lvTjVYR01ONHlieGFxVkRDdTRHR1JxZklDMitudllrNU1sK1NwUjYyWk5BUE1zL0xkdG1seEd0azdqNVJkbUFHeDNtTk10MHlqSktzckt3KzlWb1BMaS85bmhrd29SR3dlOHZ4SjVzYTRKTlc1RFJZMDZMTDlGbHc5QXJnYzhKeCtKOU03N1plYktRUGdVL3JjckhBcWRkeTk0b251OFpMWE9iektzMGR3NUhudXVQbHN0UEQrbkUya0tOTlhoK1E4WG9NNE5XWUoxT3EvaU1zQzJ0RlptcXRYdFV4bTJuSXJlRDJUckhjZXREcy8rSEJ5YjFTbzdSTGthYmpWbzFPZDlOQzl6MFlqSXlLQmJqbFpwRHpHYm9HMG1GVVJuY2FqU1pMd1JNanR5a2phL0toZlZMQXVteWZIWTVtbjlYVE4xaEd1bEFlL1hBWkY3Rit4ZWdXbXMyQi83eVZBQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvamFja3BvdC1lNzUyZTJhYTAzZGM2M2FlZTA1MzBmMmFmMDk1YmU1Ni5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvbG9nby1kYXJrLTJlN2FkYTdjMjg2YWUzNmUxNDRmNTFjMjIwZmM2ZjI4LnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9sb2dvLWxpZ2h0LTJlN2FkYTdjMjg2YWUzNmUxNDRmNTFjMjIwZmM2ZjI4LnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlNakFpSUdobGFXZG9kRDBpTVRjaUlIWnBaWGRDYjNnOUlqQWdNQ0F5TUNBeE55SWdabWxzYkQwaWJtOXVaU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajROQ2p4d1lYUm9JR1E5SWsweExqRXlOREl5SURFd0xqSTJNalJNTVM0d09UTWdNVEF1TWpVMU5rZ3hOQzQwTnpZeFRERXdMakkyT0RrZ01UUXVORGN5UXpFd0xqQTJNamtnTVRRdU5qYzNPU0E1TGprME9Ua3hJREUwTGprMU5qY2dPUzQ1TkRrNU1TQXhOUzR5TkRrMFF6a3VPVFE1T1RFZ01UVXVOVFF5TVNBeE1DNHdOakk1SURFMUxqZ3hPU0F4TUM0eU5qZzVJREUyTGpBeU5UUk1NVEF1T1RJek5pQXhOaTQyT0RBelF6RXhMakV5T1RRZ01UWXVPRGcyTWlBeE1TNDBNRE0zSURFM0lERXhMalk1TmpNZ01UZERNVEV1T1RnNE9TQXhOeUF4TWk0eU5qTTBJREUyTGpnNE55QXhNaTQwTmpreklERTJMalk0TVRGTU1Ua3VOamd4TVNBNUxqUTJPVGt5UXpFNUxqZzROemdnT1M0eU5qTXlOU0F5TUM0d01EQTRJRGd1T1RnM09UY2dNakFnT0M0Mk9UVXhNa015TUM0d01EQTRJRGd1TkRBd05qVWdNVGt1T0RnM09DQTRMakV5TlRJZ01Ua3VOamd4TVNBM0xqa3hPRGcyVERFeUxqUTJPVE1nTUM0M01EWTVPVEpETVRJdU1qWXpOQ0F3TGpVd01UTXdNU0F4TVM0NU9Ea3hJREF1TXpnNE1UTWdNVEV1TmprMk15QXdMak00T0RFelF6RXhMalF3TXpjZ01DNHpPRGd4TXlBeE1TNHhNamswSURBdU5UQXhORFl6SURFd0xqa3lNellnTUM0M01EWTVPVEpNTVRBdU1qWTRPU0F4TGpNMk1UazFRekV3TGpBMk1qa2dNUzQxTmpjME9DQTVMamswT1RreElERXVPRFF4T1RVZ09TNDVORGs1TVNBeUxqRXpORFl6UXprdU9UUTVPVEVnTWk0ME1qY3hOU0F4TUM0d05qSTVJREl1TmpnM01UVWdNVEF1TWpZNE9TQXlMamc1TWpnMVRERTBMalV5TXpZZ055NHhNekk0TkVneExqRXdPVEkyUXpBdU5UQTJOU0EzTGpFek1qZzBJQzAwTGpJeE56RTFaUzB3TmlBM0xqWTFNak0ySUMwMExqSXhOekUxWlMwd05pQTRMakkxTkRoV09TNHhPREV4TkVNdE5DNHlNVGN4TldVdE1EWWdPUzQzT0RNMU9DQXdMalV5TVRRMU9TQXhNQzR5TmpJMElERXVNVEkwTWpJZ01UQXVNall5TkZvaUlHWnBiR3c5SWlNMk16WTROemtpTHo0TkNqd3ZjM1puUGcwS1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU1qQWlJR2hsYVdkb2REMGlNakFpSUhacFpYZENiM2c5SWpBZ01DQXlNQ0F5TUNJZ1ptbHNiRDBpYm05dVpTSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklqNE5Danh3WVhSb0lHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSWdZMnhwY0MxeWRXeGxQU0psZG1WdWIyUmtJaUJrUFNKTk9TNDVPVGs1TmlBd1F6UXVORGcyTURnZ01DQXdJRFF1TkRnMU5EZ2dNQ0E1TGprNU9UazVRekFnTVRVdU5URTBJRFF1TkRnMk1EZ2dNakFnT1M0NU9UazVOaUF5TUVNeE5TNDFNVE00SURJd0lESXdJREUxTGpVeE5DQXlNQ0E1TGprNU9UazVRekl3SURRdU5EZzFORGdnTVRVdU5URXpPQ0F3SURrdU9UazVPVFlnTUZwTk1UVXVOVGMxSURZdU5qWTBOVE5NT1M0ME1qRXhNaUF4TXk0MU9EYzJRemt1TWpZNU5pQXhNeTQzTlRnMklEa3VNRFU0TkRZZ01UTXVPRFEyTWlBNExqZzBOVGN4SURFekxqZzBOakpET0M0Mk56WTVNU0F4TXk0NE5EWXlJRGd1TlRBM016RWdNVE11Tnprd09DQTRMak0yTlRRZ01UTXVOamMzTkV3MExqVXhPVEUySURFd0xqWXdNRFZETkM0eE9EYzJNU0F4TUM0ek16VTFJRFF1TVRNek9EUWdPUzQ0TlRFMk1TQTBMak01T1RJeElEa3VOVEU1TXpaRE5DNDJOalF5TmlBNUxqRTROekVnTlM0eE5EZzRJRGt1TVRNek9EZ2dOUzQwT0RBek5TQTVMak01T1RRMlREZ3VOelUyTVNBeE1pNHdNVGt6VERFMExqUXlORGtnTlM0Mk5ESTBPRU14TkM0M01EWTJJRFV1TXpJME56TWdNVFV1TVRrek5DQTFMakk1TmpJeklERTFMalV4TURjZ05TNDFOemcwT1VNeE5TNDRNamcwSURVdU9EWXhNeUF4TlM0NE5UY3pJRFl1TXpRMk56Z2dNVFV1TlRjMUlEWXVOalkwTlROYUlpQm1hV3hzUFNJak0wWkVRa0l4SWk4K0RRbzhMM04yWno0TkNnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlNakFpSUdobGFXZG9kRDBpTWpBaUlIWnBaWGRDYjNnOUlqQWdNQ0F5TUNBeU1DSWdabWxzYkQwaWJtOXVaU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajROQ2p4d1lYUm9JR1E5SWsweE1DNHdNREE0SURCRE5DNDBOemd4TmlBd0lEQXVNREF4TURBM01EZ2dOQzQwTnpjeU1pQXdMakF3TVRBd056QTRJRGt1T1RrNU9VTXdMakF3TVRBd056QTRJREUxTGpVeU1qUWdOQzQwTnpneElESXdJREV3TGpBd01EY2dNakJETVRVdU5USXpNeUF5TUNBeU1DNHdNREE1SURFMUxqVXlNalFnTWpBdU1EQXdPU0E1TGprNU9UbERNakF1TURBd09TQTBMalEzTnpJeUlERTFMalV5TXpRZ01DQXhNQzR3TURBNElEQmFUVEV6TGpjM016RWdNVE11T0RFeE0wTXhNeTR6TnpNNElERTBMakl4TURJZ01USXVOekkzSURFMExqSXhNRElnTVRJdU16STRNU0F4TXk0NE1URXpUREV3TGpBMU1qWWdNVEV1TlRNMU9FdzNMalkzTXpZZ01UTXVPVEUwT1VNM0xqSTNORFUwSURFMExqTXhNemdnTmk0Mk1qYzJOeUF4TkM0ek1UTTRJRFl1TWpJNE9ERWdNVE11T1RFME9VTTFMamd5T1RVMUlERXpMalV4TlRVZ05TNDRNamsxTlNBeE1pNDROamc0SURZdU1qSTRPREVnTVRJdU5EWTVOVXc0TGpZd056WTJJREV3TGpBNU1EZE1OaTR6T1RJM05DQTNMamczTlRreVF6VXVPVGt6T0RFZ055NDBOelkxTXlBMUxqazVNemd4SURZdU9ESTVPRFlnTmk0ek9USTNOQ0EyTGpRek1EYzBRell1TnpreE9ERWdOaTR3TXpFMk55QTNMalF6T0RnZ05pNHdNekUyTnlBM0xqZ3pOemt6SURZdU5ETXdOelJNTVRBdU1EVXlOeUE0TGpZME5UVXhUREV5TGpFMk5ERWdOaTQxTXpSRE1USXVOVFl6TVNBMkxqRXpOVEEzSURFekxqSXhNRE1nTmk0eE16UTVOQ0F4TXk0Mk1Ea3hJRFl1TlRNMFF6RTBMakF3T0RNZ05pNDVNek0wSURFMExqQXdPRE1nTnk0MU9EQTBOaUF4TXk0Mk1Ea3hJRGN1T1RjNU1UbE1NVEV1TkRrM09TQXhNQzR3T1RBMlRERXpMamMzTXpJZ01USXVNelkyUXpFMExqRTNNakVnTVRJdU56WTBPU0F4TkM0eE56SXpJREV6TGpReE1qRWdNVE11Tnpjek1TQXhNeTQ0TVRFeldpSWdabWxzYkQwaUkwTkZSRGRGTVNJdlBnMEtQQzl6ZG1jK0RRbz1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlOek1pSUdobGFXZG9kRDBpTmpVaUlIWnBaWGRDYjNnOUlqQWdNQ0EzTXlBMk5TSWdabWxzYkQwaWJtOXVaU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajROQ2p4d1lYUm9JR1E5SWswMk9TNDBNVEEzSURRMExqTXhOemRNTmprdU5ERXhNU0EwTkM0ek1UYzVRemN4TGpNd056a2dORFV1TkRBMk15QTNNaTQxTURBMUlEUTNMalV3TURrZ056SXVOVEF3TkNBME9TNDNPVEkyVmpZeUxqY3hNamRETnpJdU5UQXdOQ0EyTXk0M01EQTFJRGN4TGpjd01UWWdOalF1TkRrNU15QTNNQzQzTVRNNElEWTBMalE1T1ROSU5Ua3VOemd4VmpZd0xqa3lOakpJTmpndU5ESTNNa2cyT0M0NU1qY3lWall3TGpReU5qSldORGt1TnpreU4wTTJPQzQ1TWpjeUlEUTRMamd4TURFZ05qZ3VORFV5TWlBME55NDRPRGd6SURZM0xqWXpOQ0EwTnk0ME1UWTNURFkzTGpZek16VWdORGN1TkRFMk5FTTJOQzQxTnprNUlEUTFMalkyTVRnZ05qRXVNamt5TXlBME5DNHpNalkxSURVM0xqZzNPRFlnTkRNdU16WXpOVU0xTmk0NE9EWTBJRFF4TGpjNU5qVWdOVFV1TlRVek15QTBNQzQwTXpnM0lEVXpMamc1TmpVZ016a3VORGcxTVV3MU15NDRPVFl6SURNNUxqUTROVU0xTXk0ek5UQTJJRE01TGpFM01UTWdOVEl1TnpreU1TQXpPQzQ0T0RFeUlEVXlMakl5T0RNZ016Z3VOakExT0VNMU9DNHpNekVnTXprdU5ERTNNeUEyTkM0eE9ESTVJRFF4TGpNeE1qRWdOamt1TkRFd055QTBOQzR6TVRjM1dpSWdabWxzYkQwaUl6aEVORFE0UWlJZ2MzUnliMnRsUFNKM2FHbDBaU0l2UGcwS1BIQmhkR2dnWkQwaVRUVXhMakk0T0NBME5DNHpNVGM1UXpVekxqRTROellnTkRVdU5ERXdOeUExTkM0ek56YzRJRFEzTGpVd016Y2dOVFF1TXpjM09DQTBPUzQzT1RBNFZqWXlMamN4TXpGRE5UUXVNemMzT0NBMk15NDNNREE1SURVekxqVTNPU0EyTkM0ME9UazNJRFV5TGpVNU1USWdOalF1TkRrNU4wZ3lMakk0TmpaRE1TNHlPVGc0TWlBMk5DNDBPVGszSURBdU5TQTJNeTQzTURBNUlEQXVOU0EyTWk0M01UTXhWalE1TGpjNU0wTXdMalVnTkRjdU5UQXpOaUF4TGpZNU1ESTJJRFExTGpReE1EZ2dNeTQxT0RrMk9TQTBOQzR6TVRoTU5URXVNamc0SURRMExqTXhOemxhVFRVeExqSTRPQ0EwTkM0ek1UYzVRek0zTGpBME9EWWdNell1TVRNeE1pQXhOeTQ0TWprMUlETTJMakV6TVRJZ015NDFPRGs0TVNBME5DNHpNVGM1U0RVeExqSTRPRnBOTlRBdU16QTBPQ0EyTUM0NU1qWTFTRFV3TGpnd05EaFdOakF1TkRJMk5WWTBPUzQzT1RBNFF6VXdMamd3TkRnZ05EZ3VPREV3TVNBMU1DNHpNamsySURRM0xqZzRPRElnTkRrdU5UQTRPU0EwTnk0ME1UWTRRek0yTGpNME1EZ2dNemt1T0RRM05pQXhPQzQxTXpjeUlETTVMamcwTnpZZ05TNHpOamt4TkNBME55NDBNVFk0UXpRdU5UUTRORFVnTkRjdU9EZzRNeUEwTGpBM016TXpJRFE0TGpneE1ETWdOQzR3TnpNek15QTBPUzQzT1ROV05qQXVOREkyTlZZMk1DNDVNalkxU0RRdU5UY3pNek5JTlRBdU16QTBPRm9pSUdacGJHdzlJaU00UkRRME9FSWlJSE4wY205clpUMGlkMmhwZEdVaUx6NE5Danh3WVhSb0lHUTlJazAwTlM0MU5qSXlJRE15TGpRNE56ZERORFF1TXpReU5pQXpNaTQwT0RjM0lEUXpMakV6T1NBek1pNHpNREF6SURReExqazFOQ0F6TVM0NU9USkROREl1T1RVeE15QXpNUzR3TXpReElEUXpMamczTXpJZ01qa3VPVGt6SURRMExqWTJOekVnTWpndU9ETTVOa00wTkM0NU5ETTFJREk0TGpnM05EY2dORFV1TWpVNU9TQXlPQzQ1TVRRMklEUTFMalUyTWpJZ01qZ3VPVEUwTmtNMU1pNHhORElnTWpndU9URTBOaUExTnk0ME9UVXhJREl6TGpVMk1UWWdOVGN1TkRrMU1TQXhOaTQ1T0RFNFF6VTNMalE1TlRFZ01UQXVOREF5SURVeUxqRTBNaklnTlM0d05EZzVNU0EwTlM0MU5qSXlJRFV1TURRNE9URkRORFV1TWpVNU5pQTFMakEwT0RreElEUTBMamswTXpVZ05TNHdPRGcxT1NBME5DNDJOalk1SURVdU1USXpOVGhETkRNdU9EY3lPU0F6TGprM01ESXhJRFF5TGprMU1TQXlMamt5T1RJM0lEUXhMamsxTXpjZ01TNDVOekV5TlVNME15NHhNemczSURFdU5qWXlPVFlnTkRRdU16UXlOQ0F4TGpRM05UVTVJRFExTGpVMk1qSWdNUzQwTnpVMU9VTTFOQzR4TVRBNUlERXVORGMxTlRrZ05qRXVNRFk0TXlBNExqUXpNamswSURZeExqQTJPRE1nTVRZdU9UZ3hOa00yTVM0d05qZ3pJREkxTGpVek1ETWdOVFF1TVRFd09DQXpNaTQwT0RjM0lEUTFMalUyTWpJZ016SXVORGczTjFvaUlHWnBiR3c5SWlNNFJEUTBPRUlpSUhOMGNtOXJaVDBpZDJocGRHVWlMejROQ2p4d1lYUm9JR1E5SWswME1pNDVORFVnTVRZdU9UZ3hOME0wTWk0NU5EVWdNalV1TlRNd05DQXpOUzQ1T0RjMUlETXlMalE0TnpjZ01qY3VORE00T1NBek1pNDBPRGMzUXpFNExqZzVNRFFnTXpJdU5EZzNOeUF4TVM0NU16STVJREkxTGpVek1EUWdNVEV1T1RNeU9TQXhOaTQ1T0RFM1F6RXhMamt6TWprZ09DNDBNekk1TlNBeE9DNDRPVEF5SURFdU5EYzFOVGtnTWpjdU5ETTRPU0F4TGpRM05UVTVRek0xTGprNE56WWdNUzQwTnpVMU9TQTBNaTQ1TkRVZ09DNDBNekk1TlNBME1pNDVORFVnTVRZdU9UZ3hOMXBOTXprdU16Y3hPQ0F4Tmk0NU9ERTNRek01TGpNM01UZ2dNVEF1TkRBeE9TQXpOQzR3TVRnNUlEVXVNRFE0TnprZ01qY3VORE00T1NBMUxqQTBPRGM1UXpJd0xqZzFPVElnTlM0d05EZzNPU0F4TlM0MU1EWXhJREV3TGpRd01Ua2dNVFV1TlRBMk1TQXhOaTQ1T0RFM1F6RTFMalV3TmpFZ01qTXVOVFl4TlNBeU1DNDROVGt5SURJNExqa3hORFVnTWpjdU5ETTRPU0F5T0M0NU1UUTFRek0wTGpBeE9EY2dNamd1T1RFME5TQXpPUzR6TnpFNElESXpMalUyTVRVZ016a3VNemN4T0NBeE5pNDVPREUzV2lJZ1ptbHNiRDBpSXpoRU5EUTRRaUlnYzNSeWIydGxQU0ozYUdsMFpTSXZQZzBLUEM5emRtYytEUW89XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpT0RRaUlHaGxhV2RvZEQwaU5qVWlJSFpwWlhkQ2IzZzlJakFnTUNBNE5DQTJOU0lnWm1sc2JEMGlibTl1WlNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0TkNqeHdZWFJvSUdROUlrMDJPUzQwTVRBM0lEUTBMak14TnpkTU5qa3VOREV4TVNBME5DNHpNVGM1UXpjeExqTXdOemtnTkRVdU5EQTJNeUEzTWk0MU1EQTFJRFEzTGpVd01Ea2dOekl1TlRBd05DQTBPUzQzT1RJMlZqWXlMamN4TWpkRE56SXVOVEF3TkNBMk15NDNNREExSURjeExqY3dNVFlnTmpRdU5EazVNeUEzTUM0M01UTTRJRFkwTGpRNU9UTklOVGt1TnpneFZqWXdMamt5TmpKSU5qZ3VOREkzTWtnMk9DNDVNamN5VmpZd0xqUXlOakpXTkRrdU56a3lOME0yT0M0NU1qY3lJRFE0TGpneE1ERWdOamd1TkRVeU1pQTBOeTQ0T0RneklEWTNMall6TkNBME55NDBNVFkzVERZM0xqWXpNelVnTkRjdU5ERTJORU0yTkM0MU56azVJRFExTGpZMk1UZ2dOakV1TWpreU15QTBOQzR6TWpZMUlEVTNMamczT0RZZ05ETXVNell6TlVNMU5pNDRPRFkwSURReExqYzVOalVnTlRVdU5UVXpNeUEwTUM0ME16ZzNJRFV6TGpnNU5qVWdNemt1TkRnMU1VdzFNeTQ0T1RZeklETTVMalE0TlVNMU15NHpOVEEySURNNUxqRTNNVE1nTlRJdU56a3lNU0F6T0M0NE9ERXlJRFV5TGpJeU9ETWdNemd1TmpBMU9FTTFPQzR6TXpFZ016a3VOREUzTXlBMk5DNHhPREk1SURReExqTXhNakVnTmprdU5ERXdOeUEwTkM0ek1UYzNXaUlnWm1sc2JEMGlJemhFTkRRNFFpSWdjM1J5YjJ0bFBTSjNhR2wwWlNJdlBnMEtQSEJoZEdnZ1pEMGlUVFV4TGpJNE9DQTBOQzR6TVRjNVF6VXpMakU0TnpZZ05EVXVOREV3TnlBMU5DNHpOemM0SURRM0xqVXdNemNnTlRRdU16YzNPQ0EwT1M0M09UQTRWall5TGpjeE16RkROVFF1TXpjM09DQTJNeTQzTURBNUlEVXpMalUzT1NBMk5DNDBPVGszSURVeUxqVTVNVElnTmpRdU5EazVOMGd5TGpJNE5qWkRNUzR5T1RnNE1pQTJOQzQwT1RrM0lEQXVOU0EyTXk0M01EQTVJREF1TlNBMk1pNDNNVE14VmpRNUxqYzVNME13TGpVZ05EY3VOVEF6TmlBeExqWTVNREkySURRMUxqUXhNRGdnTXk0MU9EazJPU0EwTkM0ek1UaE1OVEV1TWpnNElEUTBMak14TnpsYVRUVXhMakk0T0NBME5DNHpNVGM1UXpNM0xqQTBPRFlnTXpZdU1UTXhNaUF4Tnk0NE1qazFJRE0yTGpFek1USWdNeTQxT0RrNE1TQTBOQzR6TVRjNVNEVXhMakk0T0ZwTk5UQXVNekEwT0NBMk1DNDVNalkxU0RVd0xqZ3dORGhXTmpBdU5ESTJOVlkwT1M0M09UQTRRelV3TGpnd05EZ2dORGd1T0RFd01TQTFNQzR6TWprMklEUTNMamc0T0RJZ05Ea3VOVEE0T1NBME55NDBNVFk0UXpNMkxqTTBNRGdnTXprdU9EUTNOaUF4T0M0MU16Y3lJRE01TGpnME56WWdOUzR6TmpreE5DQTBOeTQwTVRZNFF6UXVOVFE0TkRVZ05EY3VPRGc0TXlBMExqQTNNek16SURRNExqZ3hNRE1nTkM0d056TXpNeUEwT1M0M09UTldOakF1TkRJMk5WWTJNQzQ1TWpZMVNEUXVOVGN6TXpOSU5UQXVNekEwT0ZvaUlHWnBiR3c5SWlNNFJEUTBPRUlpSUhOMGNtOXJaVDBpZDJocGRHVWlMejROQ2p4d1lYUm9JR1E5SWswME5TNDFOakl5SURNeUxqUTROemRETkRRdU16UXlOaUF6TWk0ME9EYzNJRFF6TGpFek9TQXpNaTR6TURBeklEUXhMamsxTkNBek1TNDVPVEpETkRJdU9UVXhNeUF6TVM0d016UXhJRFF6TGpnM016SWdNamt1T1RreklEUTBMalkyTnpFZ01qZ3VPRE01TmtNME5DNDVORE0xSURJNExqZzNORGNnTkRVdU1qVTVPU0F5T0M0NU1UUTJJRFExTGpVMk1qSWdNamd1T1RFME5rTTFNaTR4TkRJZ01qZ3VPVEUwTmlBMU55NDBPVFV4SURJekxqVTJNVFlnTlRjdU5EazFNU0F4Tmk0NU9ERTRRelUzTGpRNU5URWdNVEF1TkRBeUlEVXlMakUwTWpJZ05TNHdORGc1TVNBME5TNDFOakl5SURVdU1EUTRPVEZETkRVdU1qVTVOaUExTGpBME9Ea3hJRFEwTGprME16VWdOUzR3T0RnMU9TQTBOQzQyTmpZNUlEVXVNVEl6TlRoRE5ETXVPRGN5T1NBekxqazNNREl4SURReUxqazFNU0F5TGpreU9USTNJRFF4TGprMU16Y2dNUzQ1TnpFeU5VTTBNeTR4TXpnM0lERXVOall5T1RZZ05EUXVNelF5TkNBeExqUTNOVFU1SURRMUxqVTJNaklnTVM0ME56VTFPVU0xTkM0eE1UQTVJREV1TkRjMU5Ua2dOakV1TURZNE15QTRMalF6TWprMElEWXhMakEyT0RNZ01UWXVPVGd4TmtNMk1TNHdOamd6SURJMUxqVXpNRE1nTlRRdU1URXdPQ0F6TWk0ME9EYzNJRFExTGpVMk1qSWdNekl1TkRnM04xb2lJR1pwYkd3OUlpTTRSRFEwT0VJaUlITjBjbTlyWlQwaWQyaHBkR1VpTHo0TkNqeHdZWFJvSUdROUlrMDRNUzR5TURBM0lEUXlMakV6T1RWTU9ERXVNakF3T0NBME1pNHhNemsyUXpneUxqYzJOellnTkRNdU1EUTNPU0E0TXk0M05UQXhJRFEwTGpjNU5ESWdPRE11TnpVZ05EWXVOekF4TjFZMU55NHhOVEEzUXpnekxqYzFJRFU0TGpBek56TWdPRE11TURRd09TQTFPQzQzTlNBNE1pNHhOams0SURVNExqYzFTRGN6TGpJMk9EaFdOVFV1TlRVeE5VZzRNQzR6TXprMlNEZ3dMalU0T1RaV05UVXVNekF4TlZZME5pNDNNREUzUXpnd0xqVTRPVFlnTkRVdU9UVTFPU0E0TUM0eU16TWdORFV1TWpZMU15QTNPUzQyTXpBMklEUTBMamt4TkRWTU56a3VOak13TkNBME5DNDVNVFF6UXpjM0xqRTRNVFVnTkRNdU5Ea3lOaUEzTkM0MU5ESTJJRFF5TGpReE1qSWdOekV1T0RBd09DQTBNUzQyTXpVeVF6Y3hMakF4TlRJZ05EQXVNelkxTnlBMk9TNDVOVFE1SURNNUxqSTJOelVnTmpndU5qTTFJRE00TGpRNU9UbE1Oamd1TmpNME9TQXpPQzQwT1RrNFF6WTNMamt5TnpZZ016Z3VNRGc1TVNBMk55NHhPVE0wSURNM0xqY3lPRGNnTmpZdU5EVTBPU0F6Tnk0ek9EWXpRemN4TGpZNU5EZ2dNemN1T1RZM09TQTNOaTQzTXpBMklETTVMalUwTWpjZ09ERXVNakF3TnlBME1pNHhNemsxV2lJZ1ptbHNiRDBpSXpoRU5EUTRRaUlnYzNSeWIydGxQU0ozYUdsMFpTSWdjM1J5YjJ0bExYZHBaSFJvUFNJd0xqVWlMejROQ2p4d1lYUm9JR1E5SWswMU9DNDFNREE0SURjdU56TXdPRE5ETlRrdU5UYzJPU0EzTGpRek5EZ2dOakF1TmpjMk1pQTNMakkxSURZeExqYzVORFlnTnk0eU5VTTJPQzQ1TkRBNUlEY3VNalVnTnpRdU56VWdNVEl1T1RjME15QTNOQzQzTlNBeU1FTTNOQzQzTlNBeU55NHdNalUzSURZNExqazBNRGdnTXpJdU56VWdOakV1TnprME5pQXpNaTQzTlVNMk1DNDJOelkwSURNeUxqYzFJRFU1TGpVM056SWdNekl1TlRZMU1pQTFPQzQxTURFeElETXlMakkyT1RKRE5Ua3VOREU1TmlBek1TNDBNak14SURZd0xqSTJOQ0F6TUM0ME9UZzJJRFl3TGprM05qa2dNamt1TkRZek4wTTJNUzR3TVRFNUlESTVMalEyTnprZ05qRXVNRFEzTlNBeU9TNDBOekkwSURZeExqQTRNellnTWprdU5EYzJPVU0yTVM0ek1EazJJREk1TGpVd05URWdOakV1TlRVME9TQXlPUzQxTXpVNElEWXhMamM1TkRZZ01qa3VOVE0xT0VNMk55NHhNamsySURJNUxqVXpOVGdnTnpFdU5EYzNJREkxTGpJMk1UWWdOekV1TkRjM0lESXdMakF3TURGRE56RXVORGMzSURFMExqY3pPRFlnTmpjdU1USTVOeUF4TUM0ME5qUTBJRFl4TGpjNU5EWWdNVEF1TkRZME5FTTJNUzQxTlRReUlERXdMalEyTkRRZ05qRXVNekE0TmlBeE1DNDBPVFVnTmpFdU1EZ3lNU0F4TUM0MU1qTXlRell4TGpBME5qVWdNVEF1TlRJM055QTJNUzR3TVRFeklERXdMalV6TWlBMk1DNDVOelkzSURFd0xqVXpOakpETmpBdU1qWXpOeUE1TGpVd01USTFJRFU1TGpReE9UTWdPQzQxTnpZNU9TQTFPQzQxTURBNElEY3VOek13T0ROYUlpQm1hV3hzUFNJak9FUTBORGhDSWlCemRISnZhMlU5SW5kb2FYUmxJaUJ6ZEhKdmEyVXRkMmxrZEdnOUlqQXVOU0l2UGcwS1BIQmhkR2dnWkQwaVRUUXlMamswTlNBeE5pNDVPREUzUXpReUxqazBOU0F5TlM0MU16QTBJRE0xTGprNE56VWdNekl1TkRnM055QXlOeTQwTXprZ016SXVORGczTjBNeE9DNDRPVEEwSURNeUxqUTROemNnTVRFdU9UTXlPU0F5TlM0MU16QTBJREV4TGprek1qa2dNVFl1T1RneE4wTXhNUzQ1TXpJNUlEZ3VORE15T1RVZ01UZ3VPRGt3TXlBeExqUTNOVFU1SURJM0xqUXpPU0F4TGpRM05UVTVRek0xTGprNE56WWdNUzQwTnpVMU9TQTBNaTQ1TkRVZ09DNDBNekk1TlNBME1pNDVORFVnTVRZdU9UZ3hOMXBOTXprdU16Y3hPQ0F4Tmk0NU9ERTNRek01TGpNM01UZ2dNVEF1TkRBeE9TQXpOQzR3TVRnNUlEVXVNRFE0TnprZ01qY3VORE01SURVdU1EUTROemxETWpBdU9EVTVNaUExTGpBME9EYzVJREUxTGpVd05qRWdNVEF1TkRBeE9TQXhOUzQxTURZeElERTJMams0TVRkRE1UVXVOVEEyTVNBeU15NDFOakUxSURJd0xqZzFPVElnTWpndU9URTBOU0F5Tnk0ME16a2dNamd1T1RFME5VTXpOQzR3TVRnM0lESTRMamt4TkRVZ016a3VNemN4T0NBeU15NDFOakUxSURNNUxqTTNNVGdnTVRZdU9UZ3hOMW9pSUdacGJHdzlJaU00UkRRME9FSWlJSE4wY205clpUMGlkMmhwZEdVaUx6NE5Dand2YzNablBnMEtcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUZnQUFBQllDQU1BQUFCR1M4QUdBQUFBNFZCTVZFVUFBQUR3TmtId05VSHdOa0R2TmtEdk5VRHZORUR3TmtIdk5FRHZORUR2TUVEeE5rRHZNMER4TmtMeE5rRHdOVUh3TmtMdk4wRHZRRUR2TkVEdk5rRHdOa0R4TlVEd05rSC8vLy8vZllYTUd5YnpUMW50TkQ3UkhpbmtMRGZiSlREOTV1Zjd0TGpmS1RUMmdZais4dlA5enRENG02RC9qWlQrZUlEOWRIMzZZbXZ4UTAzeVAwbnJNVHpPSENqNWNuclNKekxXSWl6LzcvRC9yckx6Wm0vNFdXUGZQMHJ4TzBYLzNkLzRwNnozanBUclZsL2FOVUQvOS9qL3ZzTC9uYVAvaFl6N2EzVDRYbWYzVlY3bVRGYi94c3I2d01QL3BhdnZYbWZpUlZEVEp6TG1vMWxvQUFBQUYzUlNUbE1BMysrL2dHQWdrRUF3RUo5UWYzL1ByM0FRY0xDdmIrejJSUWtBQUFMaVNVUkJWRmpEdFpuWmN1SXdFRVVseThZMk5nTWtreEUyQ1dzSUNWa0pDVmxuU1RMNy8zL1FVT09IeG82bGxrVnozaWlxVG5XMWJ0dVN6SFNFM203VUVwdzdNb2ZEdVJDK0c0Zk1nbnJnTnlXSzhPTjZKVzBnSEdsS3l6TXV0Z0ZXSTNpalpxNGxWM3VncmFiV042UW1wRFdScHVpQXl3M2d5dmg5a2h2U0tQZCtrQnZUb1BhQ21kZ0x0SXZlVUJJUkZITEdxY1E4bjdwSWtpRnk4eVlKOFdnYkFUaDEya1FBTG5YQlVESVV2SjJTT2JYWVVVU0Nha3BhMG96dWVOeXRrdVc2b1hiWVdUSHNtaTlmTEEwNFBUcnNaRHgwVFh2aEcyc3pCbzhTeDErSmhjUVlEem81Qm1PSjBWeUpKY0xOcFBPT3dhVkVZQ3lzb2dWK0lxME9XWXhFUVFFV0VJKzV5Sm9wd0FMU1pyNk5GZzlJeEFRU0JRVllRRDZxeE5CY2hJbGlxRldQdG9tcGVLaDRwekpPMndvUU8xTEZJNm8rUERwVlA1SjFLWDVBdFdwQVREZ2d1UGhzTnIwdjE5NS9uWjFaaSs5dWo1TWsrWFZkcGsxV3ZPclVUS3ZOV0JUVTE0c2s0K1ROUXR3OVNZRGhtdnJ6bDIvd3gwbTNxbmlXNUpqK3lHdUJsNHJpbDZUQWRQSi9nS2RKZ1psMUswQzlXSUMyZWl1QU4xQXJPTDY5czRyYjJTdXF0UjhRdGRkaVFJRHovdFh2Y3UzTmMvL2NXcncvdWtqVDlQbXlUSnV1MEtxWm85Tm1MQXZxeTJXYWNUQlNlaDNsZzc1M2tBSi8xdFRIMzlmK09lakppbStRZnByajZpbXZCZVlxc1pDbHpOTzBUUDEwbFJib3ExNm1MYXdWb0Y0dS84SXZwQlZDY3lZZGdWckJ4V2hmdlkvZDFjU3RqMnFWdUhDMHFhcldEMGlNYldQMzUrWGFlUS9ieGpJSjRLc0lXZ1RHV0ZNYXF5RUtHQUkvM0VCQVlNM01EamVCQkpCVkJDMUd2QkxYSFdtbWhpamcxQm1jeDNCMXI0ZHBZZHZOb0Jka3dPMk5RKzNsTE1PbEZydVoxMmo1N0s3ZVhQS0NvV1RTZ3JkOW9RZFpKaUhhL3FVcDdaU0VyRUNiT0JHQVMrMEZNNVdYM3R4bUNzTE5QckFFVEVrdHN2ZUtHdFBoV1JidGVBeWg1bklMcmJzREJqSTFhSEc4UFhPckNGZ1ZkbUpmNE5hbUgrd3dDOExZOVVYNTUrTzlhTmNMbVlaL0xKRnQ5RzFVdmtFQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUZnQUFBQllDQU1BQUFCR1M4QUdBQUFBdzFCTVZFVUFBQUIxTWN4MU1jeDBNTXR3TU05MU1jeDJNczEwTU10ME1jeDFNTXAwTU14MU1NMTBNYzEwTU10ME1NeDRNTWR3TU1kMU1NcDFNc3gwTWN4Mk1zMTFNTXQyTXN4d01NcDJNY3gxTWN6Ly8vKzVnLyt3ZWZsK085TjlQcy8zOHZ5MGZ2eDVOdEM2bU9XV1dPV1BWOWFDUU5ibDJmYXNjL2FpWis2R1N0UHU1Zm5keS9LcGZ0K09VTitIUnRxR1M5UGN5L0tvYnZMTHN1eWJYK21YWk5udTV2bkxzZXl4aStLWFpkbnU1ZmpVdnUvQ3BlbmwyUFhVdisvQ3BlaXhpK09nY2R4bm16Z2dBQUFBR1hSU1RsTUEzNytBRU85L1FPOHdrR0NmY0ZBZ0lHQ3Z6NCt3cnpEUENLM3QzZ0FBQXZ0SlJFRlVXTU8xMmVsYW96QVVnT0VrMEZLV1V2ZVpRMWxhc1NPajNldTR6bmIvVnpVK1pQQzBRa2lJOGZ0bC83elBNWVlJbExUbCtzUGdnbEU2Z0lONmxESjJab1V1MGNoMnprNUJHanNMN1U2c3d3YWcyc1d4OHJCOVZKV2kvU04xMWpqdEk5dU5ibCtRSXdiYUJTMURPeFErRUJWdXZ5RjhzSDZ6Mndjd0s2TnJWRWJYU01QYXNRQ0djdDd0TTJvS3BvZTdMZ0Jqc1gzWEI0TWRtMTBJckdlYjNSR1laWHBnSEJrSC9weVJxV200VjlzU1pxK1NFK2pZMWVVNmk2S2Y5NC90ZTludXlLYmJxT3IyZTl1ZkwrdzQ3bzhJeStZdGErRjFjN1Bvb0wvUW1QY0tNdzBYeTVwWDQrc3JyT1ZtVDlWUHo5QVlJVjgwM094UENqRC92OWdwTk9XU3NMdDd3My85RmYvNElEamlMQjJYZDFsK3ZCZjhpL0swWFZqeHpReE5CY3FiWWxWeklXMkJ6NVhoK1ZPR0x1K3hCV1pkanJiMGJydm1MbzlmMjcraEtjcGhyUzZqc2pzQlBGQXhwbmtSeC9FbVQrcnVEUWlPWkJWMk42NHFFblI1b21OSUFaN0ZZeXhPRHQwWDBJWm5rL0YrazJUZi9aYnF3ZWhpZWF1THNMSmJMY2hPNmlJc2R5ZjVGR0JSMmpPWmk3RGNqUk5JVndESlpoem5jaGRodVp1dXE2dFo3aUlzZCtHaHZCYm1WNnZITmJwU1dPN0NiWVNoSzRQbEx2eXF1N3B3Z2k2ZThsSlhEaWN4dXJYN2xHMEsybkNCTG0rMXJkajFIU2drT0RhVE54ZEw1eSszei9jUFNpejBCQWY5RGwyOXFBRGVsUEFDc0h4Y0xKYkpWQjFtMEZTNUpTWUhMbSttQ0RQQmJUZGZpYnA3UFZXR2c1YUo5VjN3Qkc4L3JrdG5xZTJDUmZ6V1hhSHJRaWk0alYxeUtsNU1ZVmxvdU9BU0FvTDlobW00UUFnNUZaOUIraTRUUDl3c05GMTh1SEdndVdVOHhvcHVMb1N2c0QyQTVwS2lZdU1GZE13bXJjOWpTVjVzcm92ZEVycDJ6bDg4Z3RudzdjM0F0RXNKenpJTlc0Um5HeDZaamdpT2JINWdITm44d09aZjZHSE1uQnVRL1ViMEV4YkM3Rlhpa25jTkRlOEl6REx0b216S05TOFBpU0NYZm9TbERoRTJDdlJkTmlKdCtacEQ5NDZKcEpGRk5WakxSc0VZamF3OC8wUmRaUTdwa2gxNlRLNmVlbzVOTkhKRHkyT00wbDc5NitPVFlPaTdwS1YvbG1xYXlOSXZYcVFBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRmdBQUFCWUNBTUFBQUJHUzhBR0FBQUFXbEJNVkVVQUFBQXpYZTh6WGU0MFhPODBYTzB5WGV3MFh1ODBYT3N3WU84elhPMHpXdW96WGU4elhPNHpYTzR6WE93d1lPOHdXT2MwWE84d1VOODBYZTB6WE84MFhlNy8vLzhVSlhnWEtvUHk5ZjdtNi8yQW1mUW9TTUlvU01Id2ZTOHBBQUFBRlhSU1RsTUEzKysvZ0dCL1FCQ1FNSytmY0ZBZ0lNOFFqekRrZnZxVUFBQUI1VWxFUVZSWXcrM1ozVzdpTUJDRzRXLzhRLzRUS0pnMjBMMy8yMXdwWGRWTHljU0pNeU5WVlo5REg3d2FEZllCZ0NXMTc5ckdFcG53d0JCWmUzWjlqUXd2eGZrVWt1eTVmOEVXaFRWaHJjYXZIdlpnd2laME9HWmtwZExlaEN6a3NlUm9RN1oyWWVpQ3dnNVVnOUdGblE2WWRRaTdIYVM3c1N6Y2pUcDhVUWNoQlI0Y1NTcE1qN2V1RFdJc0VQa2d5TXN1SWpLbDdJMkluUFRBY2VRNHNNN0lKQjAyVDFkQzlwVTBnZlArOWpwNWUrZFArYnRjQnRaVW1CcjhLZi94OVh6NDlSTi95dStpMGdoWEFDeTMzVFIrMHljQS9IYlQrRTBEZFdJSmFiT0JDM3Fkc0lmVENYZW9kTUl0ckU2NDBRcGJrRTZZOU1KRzU0RVloRmwvTXA5MGhMRGJiM2hQK0Q1ZUo3YzdjNW9idmwzL0dablQzUEQxMC96cGR3cFBlMHhZM2pRUzIwMGJONFd2Ry95WXNORUpHNUJPbVBUQ1ZpZHMwV2lGVzUxd2hVNG43T0Ixd2oxcW5mQUYwQWtET0dtRUxZQktJMXdCS0RUQ1BZRFNoR2ZqK3U1dExseUMrVDUydjYzdGp2ZndyQUhpTGlSNVRJeDBsL0RCU1ljZFBwVENJOU1BblpFZG9ESXlEZm8vNkFGV3J0dmlmd01wTEVMMmxWendSU2Q4SXlJbjNZMWxrYTVLdVFPanBqMVpLc0FhMnZ5dUhiREVadzV0UEJJR1J4bFpWd0tRVHNkc21tL1dWMjJCTGNxK3N1bnFxU3BLWktoN1Y5bjV2NCtidHZNMUZ2d0YrMzRxd094YWQ3RUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFGZ0FBQUJZQ0FNQUFBQkdTOEFHQUFBQXRGQk1WRVVBQUFEL2ZrZi9ma2YvZmtiL2YwZi9mRWovZUVEL2ZFZi9mVVgvZlVmL2ZVWC9ma2YvZkViL2ZVZi9mVWovZmtmL2ZrYi9mVWYvZmtiL2ZrZi9ma2ZVWFNyLy8vL3BiVGovamw3Lzcrais5dlAvbm5YNmVrUDlmRVhsYWpYWFh5enZ3cS8vbG1yMGRUL2lqMnpaY1VYZlpERC8zOUgvejdydnVLRC9wb0QvaGxMWmNVVHdjanozNGRmMTE4ci92NlAvc3BMc3JKSG5vNGZmaGwvWllTNy81OTMveDYvL3hxN2ttbnJ2Z2xQY2UxTFdaemdEY0VaV0FBQUFGSFJTVGxNQTM0RHZ2eUFRUURDUVlLOVFjR0NmejQrZ2IyVzdIWDBBQUFLT1NVUkJWRmpEdGRucGRxSXdHSURoSkVSUVZ1MThZUkFYM05xNnROTjE5dnUvcjRsVE5WcWlKaVI1L3ZTVUgrL0pDUitLZ0M1cGgwa1dVWXc5T09GaFRHbVB4RzNVZ0IvMHVuQVY3Y1crVmphZ0hxaUtRdVhGRWcrMFlOSXl5SnFtUXc4YXdaYzNwRVdoc2V6Q29nTU1CdkRaOGZzQ2hvaThTOEFZVWUrYWx3bFlrZFErRnNDUzROT2NZYkFFbjA1ZEJ0YlFrK3NOTEFydGJvVGcrWFluUWlDMkZ5eVdMQmJzWnNrWUxQTnFJMkgzS29sQXNEbkxQZ2hXVDE4TWd0Vzk2SUFESFI2bTRFQ1hoOEVKOFVGc1dSdkY0RVNJQ0RpUmFBeEZzVnBOUVZXbVBCU0R1NXpyRDBCTmREWThIYXpoeUZPKzh5U09yYWNEcmpoelVXTjV0czhiUDQ3K3p3OE9heTc2SHdlZVFRTEx3MFdaYjkwWGU5dDllSHg5M2FidTlzZWU4dzk5ZWRnRGlmdTg3cEZ4MytySDVXRVBnVXcvcjVzemJxNGFCczN3bTJINFoxNjNaTnpFSkN4TytMSmkzSDV2WC81c2x2elBoTzM4Mm9XL2E0U2g0S2V2ZkdFSGl6TGZLUmRzU3l5L1hDbUZoZldNSFptWHUrNGJFLzcrNWxNSG9Ca2VWdXpZWWxMeTdHVEJqbFZEQU4zdzZKMTl0dG5VRHIyUHRNTmpwbVNzR3g0eVJUUE44SzFxK0ZZdlBHUEtabHJoc1hwNHJCTWVNWFdWZkREa0g1c1BqQm51aFlldzJVNXdZN1Z2RURFVFJuT0I1VittbFU2NGtuK1pSb2Juamh0Snd6ZE5MenRoS0wyUFRkeUVDUXFsNC9aVnd3Tkl4TTV1WTkzZGVLTXVPRUJkL3JnSndJR1loMzBQN1BPUm05OWpFVUp1OWlKRi8xbmZDK3owUVlpRDA0ZGJyaDgyOFNVN1dUQ1gyaDhKenZJc1orNGZtdHE5U21vUDZoTmJFK0grVWJwNTJmMXJoUVNkMFRaN3dSS2dzMW8zMEJodG9VdlNob3YyVW5SRmkrQUdXZUlqVGpOdG5oWFNTTDFLQTZURGp6c1VydXAyQWg4MTBJNUpoOHBmSDBkWmtyYlJCZjhBSGtZVVB2T1UrMDhBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRmdBQUFCWUNBTUFBQUJHUzhBR0FBQUFjbEJNVkVVQUFBQklwLzlIcC85SXAvOUlwLzlJcHY5SXAvOUFuLzlIcC85SXB2OUlwdjlIcGY5SXAvOUlwdjlHcHY5SHAvOUhxUDlIcC85SnFQOUpwdjlJcC8vLy8vL285UDlmc3YvZDcvOVRyUC8wK3Y5MnZmL1I2ZitOeVArazAvK2owLytZenY5cnVQKzYzdit2MlAvRzVQK0J3Lzk4TENmeEFBQUFGSFJTVGxNQTMrKy9nR0FnRUpCL1FEQ2ZjRkRQcjdDdlVBVUhNMG9BQUFLcVNVUkJWRmpEdFpucGVxb3dFRUFUd2lhTDJuWllFa0F0dE8vL2lwY1V2UU1mSlRVNE9mOHc1RGhPSm9NQU01RUdlWFlXbkh1d3dPTmNpTmovU05rT29pUSt3WitJK0NPeTBpYkNnMmM1QjA4SGUvREFDbjRJTGJUVTZnQzFkbXB6UWtJQnU4a01RU2NjWG9CdmxsOE9MM0w0M1hzQW9EV2psOVNNWGhMeVZWc0FJcEtsTitSQUJGOVdYUVpraU1WK0EwSUMya1FnWGtSYkVZaFBIVENHakFHN0Naa0RNZDZxSkdoM3lSa1F5bHFPQUNGZHZpTWdwTG1Jd1FIeEtCYmdnTk1vQmlkZ0l5WW1wVjQ3YkhFK09DSEhvcUFsWXdLYzhPWktMRXl0clJsS1ZhaDJxRllEMTFvVlJkMDNzQW5mRmpkdDhhQmZxQ3NjS0p0dHNiY3hjaTFtbEo4NDhLbm1JOWZObG16MHFycXRKOEVON25UVGNkMjJ5bWhlaTNGNjJVbjl5eTkzQVg2aHVzaWZrMHA5MEZpSjlaUmFQbjY4UHJxQXBsOGtwcXIxa1kyNDB4TXFYSzV5U29Xc2krV0ExRi81YlNIK0dzL3ZBS21hdTMra2xZRGN4ZysrTE1RNk1ybXFQNlc5QTh5UnExeVl4WGo2TWppZDZ2Vmk3QmRqL1hYd21yaGNwV0xRV3FYTFlaV0sybkx4Ym9ESUZzdWhrWUIwbG92M3JUVnlYbTcvNi9wMjkrTkFaNzFCS3R3Z0kvMGoxV2lXMWhzRW1tbEwvOHkrcWxrNTNQZTNWc3RwUzNmUGkxR2cybFVUdWoyYVVLM205YmNXZTl0bVJEV2d3Y1JvakY3UDBPaFIwQzRiZlk4RGpjMFZCTlY5clZ2eVpUVzdHbHBWcUhJd1hacmNYVXpQZ0pDS00zQkN6SEp3Z3M4Q2NNTFIyZDlZZDMrODJRa2NJRnplM0NUZ2dPTW9qanlnSjJKdTdzZmV0SmM4Ri9qMGhqd1huRTM0UUl5dnJRNldEeCs5K2VRQk93bVpoNjRmNkJIWGN1YjBvU21TRURiaUpUbHhSU0ErdFJmTlZGNTZjODQyU0Y5N3daSVlYZ2xsc0JzUk1oUEJ6cUM5Z1AxQjZQTWRXajlDZzBsTnJFV0M5K2V0SW1FMlJNZFl3SitjNGlSaU8waVBmaXgrZjMzOG51VkJ5Z3o4QXhKRURmaVNkNytLQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRmdBQUFCWUNBTUFBQUJHUzhBR0FBQUFWMUJNVkVVQUFBRDJTWHoxU1h6MVNYejJTWHp6U0hqelNIejBTSHJ6U0h6dlJYWDBTWHoyU1h6MVNYenlTSHIwU25yMFNYdjBSWHIxU1h2L1FIRDJTWDN5U0hyMlNYMzFTWHovLy8vM1g0ejZwTDMrNmUvNW1iWDJWSVI4Z3c4ZkFBQUFGblJTVGxNQTMrKy9meUNBWUVBUWtLK2ZVREJ3TU04UWoyQndDenJOK0FBQUFhZEpSRUZVV01QdDJkbHVJakVRaGVGVDNudHZsbFRJOHY3UE9jeGtKSXZJeHRCVUtZckVkK1dyWHlYYXZZSnIxdU15RHBiSThBVkRaTzBoVENzMjZOSmh4MDMyTUhXNFI3S0dielhFbTRkMWh1OUN6bS9JU3FXajRVMG80aHB2ZWJQUm95b1JQNEJXVkx6d2d4eUtIRC9NVmJvcVpjY2lYdkROekVJU0xuaGlJWFM1NjBZV1k0RXNzcUFvKzBOa3BwUGRFWm1USGppUG5BZldHWmxZbUtsc0NhbXpaR0J4Rm1jZFo2S0hiMklGQ1VEUENub0FsaFhzQUhEWjZlUHQ3TlJlbHRVdnhPK3ZmNzEvdHBkRks2Ykt3SzlmVHUxbFVVVFFDUy9vZGNJanJFNTQwQXBia0U2WTlNSkdKMnpBT21GK2hwL2haL2daL3RHdzJtWHpGOTVCMUc2bWcxWjQxQW4zV0hUQ0FVZWQ4SVNaaXo3L1A2VzJsMlZyL2NINzdlemoxRjZXQWRpeEFxdjVjcE5Zd1FTZ015eXZnODc3MkFEby9CWVIveGdXUnZnU1dKakRtY0xoSXcrZGtSMmdNako1N1E5NndudDUxUDlvS251V3pQaG1FZDRSV1JEdVprR2txMUplVURFVFA0QVNxdnpJbTFtUGErTEdvVTFFZ3crMElSdjJBS1RUT2RzV2g5dXJOdUVlKzZtMzNMVHIweDRiekZQb2JmbnY0MkZjampPdStBTkNHMEd0ek9rQWtBQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvdGFiLWltYWdlLTEtNGIyYjgwNjYzOWM0MGI4OTA4MDg4OWY4ZjljNWJkYzAucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQzBBQUFBdENBTUFBQUFOeEJLb0FBQUMvVkJNVkVVQUFBRG41OWZYeHJEbjRNenU3TnZyN05yZXpiYnE2ZGZyNnRucTZkbGdURVRmMzhmbTV0aE1PVG5sNWRYTnZhZmozOURkekxQWHhhOCtMelRtNTluUXhMUHE2TmJkeTdOQk1qZnY3dHJyNjliZHliUE12YTdlemJoQk1UTHE2dHZwNmR2TndhODlNakxoeTdqV3g3QXdLREZBTXpEajVOWTVMakZsVDBqczY5Ym82TnZmekxYWnpMVFd4N0xmejdqcDZkZWhqWUZBTGpiWHdxL3Y3OXZqNTlQYndxYmN5N0xlekxQaHo3ZEFMVExuNXRNK0tTN3A2TlhQdEp2aTRjN1l2cUxWdktFc0d5UHQ3Tmc1S1M0MkpDbmYzczdkeEtpemtuc3lJaXc2SnlzeklpanE2dGZyNmRYZ3piUmVSa05TUHo5UVBEaE9PRGRJTlRZdkhTYlp5YlhLcjVkR01qVThLU3ZjeWJIV3VKN05yWmE5bllWRU1ERThLekFwRnlIazVOTG41ZERrNDgvYnc2dk9ySkJWUWoxRU5ETS9MUzQzSmkwMElDWGgzOUxSdWFIU3VKdkVyNXZGcElpNm1IMnVpSFNzZzI5WVJVSktOamxYT1RoRE1qZ3dJQ3JuNDlmajR0WHA1OUxYMThiUXpiL1Z4ckxZd2FySnQ2WFV0YURGc3AvVHVwM1B0NTNMc3AzV3M1ckFySnE2cDVUUnJwT25obk53VVV0WlFqMURMUy9iMjh6Y3pMYmN4cTNZdjZiSHFwUEJvNCsxbDRDNWszK1ZoMzZRZ25lY2UycWRkbUY2YUdCNFlseHVXVkJrVUU5Sk16RS9LU3JvNTlyajBibkd2ckhadVo2enA1M1h1WnZVc0piU3RKWFBzWlhJcDR1K29JbXlqM1NnZzIrWmVHVnlZVmx4VzFpQ1lGSm5Va3RqUXp4ZVFEdExPanRLTFM0aEVoM2w2TmpqNWRmYjFjakl3clRTdmFmYnU2UElwSTdHbjQ3THA0ekRvSXE1bTRqQ29JUy9tWUdKYWx3ekpUQTdKQ2MvSkNRV0RCdmgyc3JWMDhiVnpyekp4N25aeDY3QnVhNnVvNW5DcUk2MW1ZV3Znbm0xbEhpRGNXeVdiMTEzV1ZGcVRrVmlTa1Z4VEVSblMwTnJSa0JXUFR4UE5ESHI2ZHZVME1UUndhN1d3cU80cmFIUHM1S3FuWks4b295MW5JcWNqSWFqZG0yb2dXdVJjV2FTYlY2QlpWbUxaMWVJWGxTQVdsRjZWRXJlMThYTnhiVE91cW05dEtuQ3RLVy9tNDZrazQ2bGozMldmWE9EYkdMUHVhYkdySnZMcEpXYWtZTzBpSU9PY1dJRldsdS9BQUFBTm5SU1RsTUFJQ0F3MysvYnY1OXdJQkR2bjRCVjcrL3Y3OS9mMTcrM240Q0FnSEJ3WDFCQU1PL2YzOS9Qejcrd3I2K2dvSitBZjM5Z1FFQitWKzhlQUFBR2RFbEVRVlJJeDMyVWRWUlRZUnlHcjkzZDNkMDF4OTFkaDB1WHJEYzIxcUFEeGdhS29vQW9wWlIwQ1VpWGhOM2QzZDNkM1hyOHJ0M1BPZmV2KzV6M3Z2ZUxIL1E3L1h1M0dqcklLcTd0MExWcjcvN1FmMmsrdm9PNU50c3NTSCtWbGlrUVcrREJyWnIvMngwbTBMcHF4Y0xUa1pzU3JoMksvSmlSUmE4Vi9zTnYwVFBOSWRZSVpHZXJJemRJQ2RNSWhQakVxaGpFSVRzNTdpOXl2WTQzS210aHNVQVRYYldSUUNhVFNXdThDWnRPVzZJRm92Uk85WDZYSjdYTXJlQzdYQUtOdUNaRnVpWU9FNGN4a0paR2xHZEZtNFQ4cExaOWY1WDdyR0M4cmpUTGFzVXkvek5NS1FtRHdVeVpRbElXK1RxRnBtaEI1bE5xbjUvbHZqazVCOUw1WnJHL0N4WTlYRHlQL05WV01aMUNJZDhrU05MaEovN1V1ZEdLVmE4cnRTNk54a1U3ZTIvTFhNeG5nTDJsK3B5STd6aGJFWVJ2OUtON3d4VXI4NCtiV0RTemJKdllHUWwrRXFoa2NxZ3kzQmlWSmViem81Zk5JbklidHZncWQrZmlGaDdOMEFaWXpWcWE2Tnp0Ni9POHlXR2gwd0NGRzA5cU5HZjVEdFRtanYzYWc3dEN0N2RDSU5rR3V6aitjTlR0NHllMlJxNHJpUEFwdnh0MTF3VEhPUGtuTTRJWWVEeitTNWVtWEowdVB3UDIyQVpURUFRNWZpOGxwZndPTXp3aU5UV1NtVm90ajRtT2pxcGdlT0x3M0NaZm92RzZvQnNuMlFIYnRsbGh4Rm5uejYrczhtWG1HVXVyVG1UVXNWbm1hR0ZVMm1lYldnK05QbjkrOStxclFpM0hhcVd4blZ0VHlzdVl6TVRFdFVVYnkyOXY1U01VaTBrV2xSRkV4T0h3dk83b2d1U3N1bkFoV2NUV1dpWDA3Q2pmemZFcVZieDYwOXBDNHhYN2tSUW5oU1BVOEUrdjF1bUEzUWlDR3B3UDNNMllsWnpGZ1RrYzJvNnEwbUlDZ1NBdDJUUzNLQ0pQcWZRN2JaUElZRkgxZnJRS2o5b0FhcGJqdGZ2Qy9xUXNsNVZPcDJ5Lzc1c1E1dTB0M1pRd3Q4aElJb2Y3blVJb2RJdW1KbWtoVWNmZ1VadEJJM0lDZDgvS3ZlcUFyUjRCSHB6N2ZtclYzTG54aHhMV0tqZms1Ulg0blpKSktGcTIwRkdSdkVxUHAzYURtZ1I2TFp5VmV5QVQ5Z0EyNjRHZnp6cGdNNDh0dnJVNUlqekM3NHpJWnFOWjVDSitaYTRleitzTXRReWM0YlZ3OVlGMG00ZkVTbUU5OVBOWnJ5SklFOVRxZFJIaEJjWmIxVFUyR2dlSmtRbE5lNGg0WGtNb0VOaEJzL0tQSWhRSmkwTjU4TVdXemwyN05yeWdZRVBxbVJva2dNYU9rV1crSjNyTzVGR2hRQy9Hd3FDOUI5TGtFbitZTFhub3UxaTlidDN6d3pmOURtOHhHcmNjTytXTW9YRGtXckVqMlJPc0lSWEttZUhGQ05xYnY4d2tzdEFwTzZPQXZkbjN6czNESHc3ZlROM3NrM29teGtLQjZTei81RDFFSEpyZGNlV01XWXluNlVLUkdhRXQzeWtEdGwzMWZQSDZkK3ZYRjJ4WWZLeEdyZzJRMFZuaVpGQmtKdGllSVY2N2NwTmVPTExrY3JiSDh1VTdqelBWSlFmajdWdDg3QkdGUnQ4SGRRaWJvd0haRmJuNm1UaGVFNmpwcXFTMFpTYUJHYkZwZ2I0enV6eXg1S0IwbXBKRVduckZlSDhISXFkenREU3I1bHphNWNlZTFPRlFzeG03Vmw5K2tTa3d3eFk1Wi9sTy85VEl4QkxWTkhJY3NGTjJiRWM0RXJBbTJTTGhhaTRQM2NzR29IZCswdEZLRjUwdVoxT1dMN3ZGWkRMVmRudXhzYmlzdW82TlNDUXNHdDJVL0FpSG0wa0Y1d1JxdWRMcjZsRUJ6R0lGeUMwVWo2MlJQbXFmSTBkS2o1U1dIcXM2dDUxdUM2Qko2STZYai9WNkxyVWhPTEd0VjZ3a1hwWlRQQ1FzbTRnaVRtRnVMaTYyMnpjVTJ6ZVczanUxdzhhbTBWaXNtSXpaK3BsY2FqZjA3dUJ4TTJic3Y1RzUzWVprSWVrdkQ1V29pb29LQzhQREMzMFM3OVJsYjdmQXNHalpnbDJvL2ZsaU5zRjVFb21CKzlNeS9kTlBsQjBxU1FBamMrbFNaZDdTUEJYelJFM2RqdXhzNXdJaUVhZkhOLzF5NTNGNlR5SzYvZm12eWhLdkhZeVhUZ3NORFNXVE1LUlF3a0YxMmRhN1pRbnVqNGllT0I0YWpUYkg2Y0JoV2ZYcyt2VnJDeFpNbnk0TnZVUWlvYU50Q3VaU0dFR3BKTWRkV3VPK1M5LzYyK1R1VEdRdzlzei96UFNRZWZPOE1haUwydVJRY08rOHc4TG1lYThaK0dNT3R0MHpKMlRPbkpEcEFOU09BeUk2MjhMQ3dzZ1lySnNiMWhEYnZqNzBuWDdQUXFhSHpGOEFtRC85TGNnMnhCcmk0Z3l4Q3V4VWdOdlVmY0hCYmFDZmFETm56cE1uYzBMQUI5NnNDVGJFeGhxQ2c0TVZVOTJXTEZuaWhwMnMyTGR2QW5CKzF0dlBubjF4OW14M2QzY3NGcXRRR0lJTis3N0preFh0K2tHL1ViL1R4WXV6M1JjdFdqUVp2QWJac1pQZEFGTW5BeHFEem4vUUUwUURGS2l1VUdCUkdZdktQVnBBZjZQK2FIZDNOQnM3R1lzRnoxVDBIN0ZkdmdmLzZZOXFqTnFBcVNCMmtkdUFIc0Q5SHcxNmplelNEcFJvM0hoTXJ3YlFiM3dDRktmYzlJemsyY1FBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQzBBQUFBdENBTUFBQUFOeEJLb0FBQUM5MUJNVkVVQUFBRFh6ZEZXSmhoVUtoaXptWXZTd3JoZ01pQVlFeEM1ZUYrL2kyemYyTjdSdjd3K0h4VG0zT0xMcTVUbTJ1UFcwdC9TME40NUdRNU5JaGVKVER6UXo5N1V5OGN1RlJGREhoZk13THdXREFxdGtYSzJvNThVQ2dtU2FWQy91cmZUeThpZlkwTFN3YnJQejkyVFpVUXZGeEhlMU56cDRlTGwxOXZYejlmUHp0N1YwZGs5TFNlSVpsdkFjazFQTHlFSUJ3Zk9tM1VIQmdiSWptVk1JQlRRejkwRkJ3ZkNsM3BFS0NUbTIrUGUydURZMTkvaTIrTFh5OGptalczUXo5M2F5c1RYeU1MRGRGbEFJQmJWaFduYWUxTHE0T2JVMU43aWszM1pqSFhNZ21ubDN1VGoyZC9sbDREWmhHVEtlbURiZjFtemNWalBkRXRaTGg1Z0tCblMwZDNQeGNiVnhielJoM0RlZ2wvWWYxNmFhVlhOZGxQWGNsQ01UemhNSXhjMkhSWTlHZzQxRnc3VXhjSGZqVy9oaUdUQ2ZXUzdjVnErYkVoSkhoRFN5Y1hpd2F1bmxJN3JrR3JxaW1HNWVWNmhaRTNVZTB5TFdrUXBHUlFrRVEzazNkN2cxTmJ3b29uaGtYWFlpbkRiaFd5aWNWekpjbEN5YkUvTGNVU1NWME8wWVVDOFpEdDFRelpyT0N1WlF5Z3RJeUJuTHg5YUlCUlBIUkF2RWdzTUNRckt2TGJMc3A3cW5JUzVnR3ZiaUdmVGcyVFNmV1BsaEdDc2NWelRlbG1xYWxPcFpVekVha1cyWmtTa1dUK2FWRCtkVXpXTVJpNUtLeVJ5TkJ6ajJOdlYwOXZjemMzTXdzTHlwWTdOb0hyYmtIcnRsM25EbEhYemxIRzdlMldPWkZlNmVsWGhlbE9CWEZHY1N6dTBYRE9uVFNtR1BDaUJPQjBHQlFYSnY3NzNvSU9taFh2Y25YcjBublBUa25PWmUzTG1oV3Jma21pWGNHWE5pMkhLZDFyamdWaWpaMUs1YkZIRmNrbWJZRW5PYjBmRFl6NkJTenEwVERaME5pTVZDd3JQdkxmQXVyYkV0S3pDbzV2bHZKZTlub215a29DZGk0REVoV3gzYUdYRWUxbXhmbEtWWGxLOVlVek9ZMENoWXo5MFBpazlKaUZHR0E3eTJzankxYmJGcktXWGpJdlVwNGlRaElMSG1JSGlzbml5aUhhd2dXbVBiMlZvWEZodlVFaUFVaitzV3p5dFREbXFXUzgxTVMvaDFjbTNvNkxrcXBtL2hYS0tkMjdjYm1ERVoxN0laRTlmUGpXK2NUSE54OG5ueGEvZnJKSVdrVll5QUFBQU9YUlNUbE1BSVA0aS9mMzgrU0Q3Z0RRdzcrcmZ4WitmZjFYZjM5L1h6NyszcUtlZ240Q0FlSEJ3Y0Y5UVFCRHY3Ky9mMzkvZno4Ky92Njl3WUVEU3E5TmlBQUFHVFVsRVFWUkl4MzNWWlZpVFVSZ0c0SThKZG5kM2QrdGdHMHZjaHF4MTZab0ZHeXhCdWh1a3V4UUZFWkMybXc2N3U3dTcvZUVaWU1meis3NmU2ejA3NTNzSC9aN2VVd1lPSDQ0VE03dU5IRE9sTi9UZmRCbkVaRVd3d2lPdlNpOUxwR2F6YU43QUx2KzJpME9FV1psWk9UazVWZUhNdkZhY0dkZFZMUUgrNzcxcWxqQlZpY1ZpZlgzck02TmdJcVlVSjVIZ2NLSkJmOFBESkpjRGt1bFlhbUlpUG9HSGhabWxVbWFrU0dLV1NwakQvcWhmUHRzVTBxQ25LdzhtNHIyOHZlTzVnZEtvcUs0c0ppektiTUxsZGgzOEt4NmNHeVkyNmxPVlpBN0p5Y21KS04rN04wTXRsY0JZTEpFMFNvM0x1ekgxWnp4Tis4aVV5OWNuNnpoZVJLZDFhOWV0Mjd6RlZTZ1NNNW13aUtzNE5mUHlEby9wUDdCVkgrU1pzQS84MmxRbGgyVFJtOWJ1MnVWNnFBckdaS29qcitKeUplRWxiS1RWZDkzUGNlTkQweU4rTFYxQjd0RGJ0Kzl5VFNKVXEwV3dxeEx4RlhGa3lJMzhvVE02Y2MvMUNPU1ZzREsrajA3QktTUTZPVzNhdEJaTTR1YW1DaGVKSWlQRkpseEUrQTRYNVBqT09XeHQzZk56VFNVK3ljV25keGVDTTdaUEFqZ3RzSm9WRWFIR3dWak4rMk9RbmJNTXNMTnpkM2dqM3M5dmlEdE41bmg2ZWhLZE5tMTM1ZFV6Q0RSVlJuVkVWQlFyTDNqSERUUnlSSHYxcWhWMkNFVCttYkxnMXRZQUJUbkJTKzZKVjVhSFZncFNCTDc0ZytuVmtWRjVvYW5XUjJWSWpKV2xlaFhndHJZdkgvRDF6ZUd0YVdmeFhyeUswTkFuZFZRZUx6NmVRbnNXRVZtNUp1N2tZU1FhTXhIb0lmYnRPdWFSMkd3U2k3bzJlSGtLQXJORHJvakZvcHpzZ3hSdWZRN3I2Y1hYeDloSXRNd0dnbm9Cdk1MT3pqYS9MT3hLTHU1RGlORnJNemNqSjZSTWtpdGwrU1ZRS0lLTTZwYUx3YWZZR0NUbVRHOW9FdENXd1QxOFNvS0RqVVkrbjdUWkxjR3Y0WEZ6Z04vWkJPLzRCRUY5NkJxdStUWWJnMEUvWHdvdHNiZFVJeHpYK3hUcjZQVDd5YlVrbEhNOFhxRlFVUEZ5dVRNRm4rSmZlUWpiZGh1SlJtUEN4a0Q5TzdYSCtXSXlwL0MxRDUySUFwSGp2YjFSS0dkS1BKNlMwcFFrYkx1WmowYXp3eFpDTSswdFo3UUZXc2toRmhiWDZqeWRYVkdlNjV5SW03ZTRKWEc5dmJ6cVhMUHoybTZDbjRRZE5oK3l0MSsxQVJ3U2FEOHFoNXlxVjhpZGs3Z3BpZXZXYm0vWHBFSWNMQytrVFl2RzJMRERhaXdhZENQZzZ3TXlWWFZaV1dsa29Od1lUeTVROWg3YVN1UGhDM2RMMVhsZHpWcjBZUnNiVTNSSE45QU8vUExBTEtFK0lDdjlZbm82alp3WnRBWWtoVUlpcThNdjQ5cHVvMjNZTnRIUjRITHNPL1FPWVdhVk1KVWVFRm9oY0pZN1k4c3ZNSURta1lwWndmdE4wYyszeVdSbmFycEIvVmQxVE9JUTA1eGRKY3hLVTJJUEVyMlRhRHpmMEVBR2djQWo2VXIyV0QrTWpvN3UxcTJtWmlRMHdINEZ3QWc0M01GNHRpNGdJcmdxOU9uVGxwYVd5cXBNRlhpRUZFN2NIdkNpYmo2UHJxbnA5bkEwdU1zTnRpdmhjTGlqZzNYYVBsM0lnNU05RkR0Mzd0dnBkeUZCUUtOeDhlUzRrN0dIWmVnWG1KZ1lObnNpMUd0RGgzYUhleGp4dXRyeTVEdXZYaEVGVFZ3NXhabEw0NUdwY1M5bE1oa2FnMFRLWW1KNlFkQXN1NVVXRFFmblROUHh5OSs5ZlVmYSszWXJTbzdpR2d5Q3hKVGlZeGdRRnhlWGJVZEdXTDdLbGV2YkozRjA5SGljN0tNdmI3bncvajBOQmE3ZFlHQUlDR3ZvdWdJTkd1bXljZU9SSStPQXRyTG9qdkpqeG1SOUtoWjdrQksvRDVWRVlQajdHN1l5c1BkMjMzSnhXYjE2NDdZajdSOW0vNVhmTkh5L1hnRldDc2tUTkFPY3ppQnM5Zldsbjc1M3VGMkRha3M1Nk83a3lCSTZHU3lnemE1dUJQL0dwa2JDMWpVWG04NGVQeEdMV1ExaTFibFB2bWxIeExiOWRlQmRvdzRaZ29JcUdnMUErKzYrZnZ6TE5UVEE0NkdPek9nSC84WTlOcDdQZmhJWUZGVDVyS0tlWVNBY1lueSt0bnZudGVOM2pyb00vV2tQZG1wMzkwL2E0UERXNnNvZ2YvL0dSc0plOGkyTlJuVjMzNzZkSi9wYVFkOHovWnQyMEo1NjNDeThGS2hLYjBybjBmd1BIUGM3ZmIzaVFHelJyVjgyK05UT3VSMjAycEljNGFVTVZWQ0ZJREhvN2wyNlJoTjNvS0FvWUJuMFM2YUJZUkFJOS94VDFzYUc3TXpBakF4Vm91OUh3OGR6c1Qzb1BVcDc5SUoraTFVL2k5NVRGaXRNOC9OVHFaUllhdW4xU3dWRjV3b09ISmpiSGZvelBlRU8yZ2VuanQ1TFUxS3BWQ3hXVVhEdVhKR202Rm4yaEw5aFVELzZmdGtiN1lsTHBRQ1hsaGJjNGNleU5hV0xnUDFIdW8rZFk3VFdGTVVkTzNIeWhjWW45bjVmMFB2ZjlKNDhhcFQxbmowK2ZSZU1uZnpILytSWEEwM2EyNlVIUTdZQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUMwQUFBQXRDQU1BQUFBTnhCS29BQUFDOUZCTVZFVUFBQUFUSEJraUp5QXFKeUFhSGhyQXFLVVhIUmtlSWgwYUlCbDJTamdWSEJkd1JUUWhKQ0FnS0I5WVBDb3BLQnhJTXlVa0t5U0VVejRtTHljZkpoNGdJaGxiT1NxVmNXUWFKQnlDWEVvVEhCWWdKQjRSR1JkSk55aCtUejFwUXkwa0tpQ1RYa1RJc2E5a1Rra21NQ1VQR1JiSXI2dVRYRVRMc0szRnNxMXdZRjFIT3pwaVBTdklzcTl6UmkwUUdCVEZyNm9QR1JjWUhCZ1ZHaGdXR2hZYkhCY2NIeHdSR1JZZ0loNGtMaVVhSXhzaUhoZ2ZJQjBZSVJvVEdSYzhLaCtOVlRvcUp5SXhKaDRmSUJzYkhSa2RLQjhjSlIwcUlSc2VIaGtaR3hhUlhraVRYVVFrSVJ2V3RxNklVVG1EVHpkS01DTWtKU0F0SXh3V0h4clVzcWZHcXFkOFREY3RMQ1VoS3lKRkxpRWlLQjg0S0I0WkhodkhuSTJkWjFOc1JUUnRRUzQwS1NFbkl4MGRIQmZQdWJYR3FLR1NZaytLV0VFb01pbFhOU1pRTXlZZ0poMFVIUmpadWJEVHJxTFBxSnE5bnBuTm9wS3pqNFREbFlPSlcwaVRXaitEVVQxL1RUZDVTREp6UmpGZlBDNUFNU29pSkI4bklCcmZ5c1hleHNIWndiM2F2TFBLc0t2S3A1L0puNUMra1lLYVlVZUhWajJLVVRXSFRUU0RURE4rU0M5bVB5NUtOeTVkT2lnekxpYk50YkhQc3EzUHJxWEhvWml3bUphdWs0N0dtb3ZHbUlhMGlYeTZpWFcxaFhTWmFsMnBkRnhpVDBpQ1ZFV1BXa0E1TUN0ZU14bmF2YmZRc3F2QW81N01wWmZFbTVHM21KQzRqNG01aVlPdWlvREJrWDZuZ0htdmZYS2xmbkdWZEhHemdXeWNibWVEWEZTTVhGQ2VaVXgxVFVCbVNUNXpTVFZZT0N0R01TbFFMeVBrMWRMaTBNemV3N3ZWdkxuVXViWEp0TExScTUvTG9wYWJmSFdnZG15bGNGbDJXMU9JVlVHWFd6OVFOeXMzS3lVOUx5UXFLeUpZTUJURXI2eTVvNkcvZ1lLOWpYeXdoWHF2ZVdtaFkyR2djVjl4WlYrTFpWcUtWMVJQUjBKY1JUeFhQVHAzUVRkM1FpcHFPeCtpaTRhNmpYcWxjMjJMYldhQ2EyV2JiMWVSWTFkNVVraCtVejlGUFRkMFJDRzJZeUNTVGg0K0tCaHhPeFdGUWhLQVB4SFF5Y3JIdnIyWmdINnZmbnF2ZTJPa2FrOXFPemZIYnlWak1pV2JVQnFPVEJpT1NSZytwRmNkQUFBQU1YUlNUbE1BSUNEdmdQemZjREQ3Nzl1L255QVE1ZCtsZ0Y5UU5TRHYzNyt3b0lCNGFFRHYzOC9QejcrL3I1K2ZuNTl3VUVBd1JxdmhWQUFBQm50SlJFRlVTTWQ5bFZWMEdsRVFocmZ1N3U2dXJMRkljQUlFSjBnSUVLelFBbTNjcFkwblRTTk40NDAwcWJ1N3U3dTd1N3UrOUtaeTZ2MGU5bVcvODUrWk8zZG5vZDlwM0doWXZ5Njdpb0liREJ3OFlqVDBYK3JVcjBjbjhpcHZGZ1Zya3FlT0dUT203NUJPLzNUck5pZUllTnpJelZrMk8za3FrQUhianc2dDgxZTNWWDA2UVNkd21FZms3Sm85ZGV2Mlk0V0Z4eG9jMVJTeDYvK3RpSVk0Z1JOMG5wR3dyVjNxR0ZOWUdjYzVlR25adk5DOTFkdzJkWCtYUnpVMUVuUWxuY2VqYytQT3pVc3VYRlpZK1BLaVlrM3AwZzJWT2wyOURyL0s3UmtJamlzSkhvL2dzdTh1MUdoMmFUUWF4L3lWcTRKbkx5dXFaSHM4N1grV095QU14SWdiOGZoNFFyVjJvU001dUVHRDROMHJ6NjBNVFU3VXJMeGs4L2NlMS91SDNMSWVzQmxHT3NHbDB5c1hPdktUTmNHTDEyNkl5OWtick5tYTJPQUMxK05GN2Z5ajl0WmNCR0dRWVdVOHpvdTc1c2lmTlMxbGZ2bTVsWGRXekp1NkxYRnI0dmF6dUJlVjM2YlZON21kamdlalpCSUt3N0N5Y2w2K1ZLcVdUcEJLazJZbVRweTRiZXUyL0xUNUY3d3A0OGExK3pZVWloK01JeVF1amhqcHVvdWgwNlRTQ1JPU1prN2F2R25UcGxrRk02ZXRpRngxbjAraDhMMitqcW5GT0lvSWgrTjJyMWhiemE1ZVV6b25VRDBoYVVJU3NEZFBXdUp6MnJYeDhwS3ozbDVldnI3TnY0eUZXcHVOclhtZnJWMlRjeUM4ck5nMFo0ZDZ3cGFKRXlmTlRObTllRlY0MVoyQVd4NHFxSnhTMjJoM3FqK2Z5N05mTGc4dEQzQlduU2tMQ3lzSkNVemFzbVdtTkNWMDN0UmtSL0JzNTE0L0NvWGk1MWRiZVVNOFhrbkFXTldTVTVZbWFhSFRyNGVWbElTQVdxVFRDaFlzbloyZmN1UDBhZG5GY1FDK2QyZHduNG54M2tvNmJOeXdZTW1xazZhNXBXRWxwdFFndFZxZE1uZDYrZEtGNXkrZlg3RmlYdzZGQXRLOWZSdERqWUFkRDhNNGVxdTBRTDJndURTdEpDUW9VS3Jlc2ZORVFOWGR0K2VMdGo5L3NiVGE0OGZuODcyOUdrSGRsT005QkdMMHhhMjdkdTRNT1FVcUNka1J1Q053VG1yWTdvMlhibDQ3VnJRNDlPUkJmeERPOTZPMGdKcnJ4dE9OQ0l6RUs5bDdUMDR2TzdWOEVjZ09EQW94bWVZc1hMeHMvb0xqeDQrL3N1cEFsM3kvY2YyaGVua1lIUVUybTYza1dXOHN5YjVkbGpvbktDZ2t0ZGdVTkcxVy9xeVV1UXRLUXptSC9mbDhLcGcreEs2V0FCdGhzUFBZTUpJUTg5aGNFWmFhbW1vcUxpNHBEbEpMd1pWeE9EUVhkQjRxMWN0My9IaElsNmNVOG1DRW5IZVFqYVBZa1FjdW4rV0xGcVdscFlISFRqQ2t4RWtUTjA4OGV0K2Y2dlhGcHVLRWtBNHp5TG80Tm4yODZ1cUhxeGsrRmN1WFQ1OWVWbmJDRkNoTkF2YWtiWTZ6L3Q2MXVpL1VFT1lDbTB6Q3FwVTh0T2JUczBlc0dWbnBlL1pVdkY1K0lzeGttbHRRVURCMy91S2NyM1pUYUFDTUNia0ltVVJtRXlqNjRPSFRSL3ZUcDF6Sll1MVBmMU5SVWJFbkFPQ3N5ckVlQmpyVnF5dlVIVUZ4bUVFaWtYaENWRlR6N3VPVHpBaldsU3RUSm1kbVprNEdaTWxkaHc1eXJCeWxCNlIzZ3hveHdFZEdJcE5JTU1aQWF4NCt1Um90eTVveUpTdVRWVXRtcGxsRnM4YXBEbG5ab0UvZlJsQmpNZ0JFTTRBdHFubDZwQ1pHR3cxc0dTdENIQkVScGFjSnVkWTRxLzVRM21HUTNSaUNtcEsrZ01BWWloeDVkcVRHRWhNZEZSV1ZNVU1zamxoSFF6Rk1hRGhnWURJUDZmeTlHNEliV3g4a0E4Z3dqS0MwQklIYkVoMGwzeGNlN3VNelk1MmRER3dKTTFheFZzRmsrM3RhQUx2T2QxdUVZZ0o3Z3RzU0pSL3I0M1Q2aU1NTktBUEY3QktPYTkwOXJWdDEyTy9Ma3VqNlZlZUpSRFNWVUxBeEpqSmpyRTh0QnpBUktoTFNKQ3BtYkxZMm5La0QwZC9ER1F3N2hpV283S3FONnlMSEFzUStrUUpNQkFKc0FwVkJvYzhkYTg3N3RuL3FnMU5CaFRSTUtMSFJtTzZZeUxFWnRUM0dTdXdpb1JDanFheE12VjZSZTd2SDk4M2RFRUdGQWduR3RkRTRDcGRGR3ltWHNWZ1pDaHROd0JGZ3FEMEJITW5HM0M0L2RuZFR1MFFnc1lPM0c5eTV0V2NpejVKcDNRYURnaWtBcGRNNEJrTnVrNTkrS2IyNUVwREUzS0JZSDV0dGlkYktaWEtaMWh6cmNuTm9HQW95bUk4dEkzL1ozNUlFem9IMXNiR3g1blV4TWRGeTJlVEorL1pwMXpNVGFEellabURxMS9lQ2ZxRkRQZjM2YkxNNWU4MjlxT2dwTXBtTUpaNFJvK2NrMEl5K05yMmlkVWZvTjFvMk01dWJSRFlKZHpySGdpWWo5a2ZJWFhxRFFJTDcyaFN0VzBKLzBuTlYrWm55cWpON0FzVGk5UFQ5TEl0YndWUko0bkZPajFiUTMralVOdHlwZFFZRXJGNjlPajFDbnUxeTZUbGNvbmxkNkYrMGJOdk1uQ0ZPWDcxYXpOSmFjblBkOWVyWGdmNUx4NTV0Qi9VUno0aHMxbXg0cnorYSt3dzh2SjQ5SklzQ2tRQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDMEFBQUF0Q0FNQUFBQU54QktvQUFBQzkxQk1WRVVBQUFDWmxZUEN0NmUvblltZW1vbVpsb1cycjU3bDQ5Mjh1TENwb3BHYmxvT1psSVBYMDhpL3Q2ZVdrb0Nwb28vWXpyK2VtWW5hMWN1c3FKZk13S3lhbFlVVklpM2w0dDdKd2JIYTE4ekh3TEtTa0lHd3FwZXVtWWZLdGFBYUpqRGo0OTY5dHFVYUtDK2ZtNHZsNU9EZHdxeXNwSlRtNXVIQ3hiMjJ1cnpNcVpSUVNVamczdFhadUovbTV1QlpTMGlhZW1uSHY3Q3FvcExidTZYazM5dUxjbWJIdjYvazM5cUFaV0RnM2RiazR0M2QydERIdjdDN3RhTWFLREVTSXkvTnhyakZ2YTNEdTZ6QnVxcSt0cVdtb0pDZ200c3BMVFFVSlRMajROdmkzOWpQeWJ6THhMYTJycDBZSml6ZTNOUGIxODI0c1o2d3FwaldzWmV2cDVhcG81R0lhRnRYUmtSTlB6NUhQajdsNU4vWjFjclYwc2EvdUtkeVZVMUhPVGNoTERZZEtqTWdLVEFYSkMvSXdiSG54YTNmdXFHNXNxSGFzNXM3Tnpza0xERVZKeTdYMU1uU3pjSEt3N0xqdjZhZG1ZaVlsSUtXZDJoNFhsVnVWRXhBT1RvM05EY2VKeXpKd3JYYXVxQ3pySm5ZcTVlc3BaVE5wWXVBWVZwN1cxRFR6c0xweUxEbXdxckVvb3VTa0lPdWpYMS9hR0YzVjAxZFNrWk9SRU15TVRMazRObnF6cm5xeTdUandxelJ0Snl6ckp5WGxZaXhnMitxZldwMVcxUnZXbEpnVFV4alRVaFdRVDh3TmpoUU9qZmw0dDN0ejdyT3VxamR2YVRRcUpHaG5vM01uNG0ybElXK2tIdWVlV3VqZDJlZWRXU1pjR0dGWTFlQVhsRmpVa3hhUzBscVVFaGJRajh1THpZbUtDcmx4N0hkd3F2WXZLWGh1NlBldDV2S3JwclJxNVNsbm96Rm5vcTZtb2ZFbVlYQmxZQ0NnbnUwalhpNmlIYXRobldzZ1c5cGJXaGFXbGhwVWs5TVVFeFVSVUpqU1VFUkl5cmYzOXZoM05PMXI2SFhzcDYycHB1OG41T29tNU9OaUg2amczRnRjM0IyZUcrRGVXNmJnR3lEY0dtVmMyU1BiV05uV1ZOZFZGRnVUVVV1TGk4N01TM3kxOFRVME1TMnRhdnF2S21xcUp5OXBwZWpvWmVkbnBXcGs0V1VibDZTWjFvME8wSFN6TC9IdUtYVnJJMnZsNDJjaEhtaWZteUtkMnAxYldoMmFHTmNYMTV4WTF0RlIwZno0ZFBDeDhXOXZiU2pwcWZEckptem9wT3ViMlNTWEZYVUxkb1FBQUFBT1hSU1RsTUFJQ0Q5ZisvbklCRGwycnF3bjU5d2EyVktTakF3SU8vdjU5L2Z4Nytvb0lDQWdFRHY3Ky9mMzkvZjM4L1B2Nyt2bjUrQWNIQmdNREEyZG5lQkFBQUY2VWxFUVZSSXgzMlVaVmlUVVJpR1A4WHU3dTd1QXRrR0NHd29UR0N3UUYyeXNRMTFzakZ3empHSmJXd1MwaVVncVhRajNXRkx0OTNkN1EvUDl3RzIzci92ODV6blBkZTVYdWgzSm84ZE0yS0VuNFBENEpFangwK0cvc3VBUVlPTmpZMFBIZkx6S0dtcXJHd3NtVGxtd0wvZDJhY0F4c1oralRWWUpoNlBweitzdXVyeEQzL1lJQ09FVTAxaGVCWU9od0d3K0RVZUhoNkQvaFk4M05yYStxaTF0ZDlyNTNxZ0lybzlHdnNhakREemovaUZTNDVhQWU0MGRiTXdPRXc5SHMzQXMvQjRCdjFoaVFPWWVPS3Y4bmdySzB2TFM1YW4zakxBL2ZiMjltZzBuWTVHTStqMDlFNEhNTFREK0ovbGlaWW5BQmR1MWVCeHNBazhOSVBQcE5QcFRMN1lBMzRraDRVLzVJRkRUcGdCTGxTaWNUaDdQSnFQVGRkb2VtZ1VtcGhHeThDV2VNQ1BPdmhIOXlGbVpoWjJkbllYd2xnNGV4WVR5eU9UVXVWRW9iQ04yTktTZ2cycjhUTTZhM3hveExBK2ViNmRIUXJtRmgvMFlLVHp5SFh5K3duK2NUSFIrVStleEhaa09GY1p3ZnFndmg0b2xDSENIV2ZRQTh1amhLWW1KZmlYeGVSekpibTVGeFU5ckRCalJPL3RNbnJmdmgwSXdNWTU4eWhxVDhjekFXWEZCSUtFd3hGd2ZVVk0vdFdqMWtBZmlVUWJHQmpvSTl4MXhxR3hZbkp0aU9wQlFGd01nY0NKWXJ0eEpMRWFack1Wb3NQaDYzVmhiRzF0ZFdHN214THFtWnAwMzc4NGhrdmcrR1M2dXVVUWdwMmJMUzJCYmdRM24zRVl4dFQwOE9FYlREUlRRNjRGUlU3N0Y4bTRCRUtPVHlaYndGVXltNDVZZ25UcjRSQTBTZTg3TjV3WjZSUVNLU1ZZUkN5UGtYS2paYmtDZHFZZ1Y4ajNPTktyVDRiRzdmcEJHSmJpU1ZLTG5YamlqdkpvaVZRbWk3MmNKK0VvS0xjc3pFN0ErbGhvMUlFK0hqMDZVS1ZKQ2E1MTZpRlR3cnJyU3ZPbE1pVTVQSlZJMEhxRHNqQXpnOU0zUUtPdVh6L1d4eVdhVTJkS2VKb3lPQ1dZUkdxVHlRcEtGYkZhQ3FIN0MwT1VuUVdzejRLbTcrM24rdTFxY25XSXA2TTZvK3B6RURtMUtKZlFIblR2T2JmUXZjRVFoYktBOWVIUW52MTc5c01BL2JKTGlDTlZwQW9OZlpaL09wUlc3aGJkZGVWZGtVeHcwZjN4UGhCdWNlS0lGV1J1YnI0SEFCOTVtaFpJbFJOZDVBOFNLdUxUeUcyY25HaWZhMnlCYTFUZTQzMTlYYUR0MjRIZmU2STFYRW1sRXRzU0V3SVM1S0hoWjNMWWJpZXZYZlB5OW9rMDJBSHJZRkpvK25ZRTRKdGZTVk1HVW9tSkZRR0pENmloNUNRcDI5WDdwSmUzcTAra1BxeUQ2a09nVmRxN0FjaUJYVUdCSXFyTDZRcC8vMFJIR3EyRjYrYnE0NVBwN1owRjIwaVhXZEFvYmNCdWJlU0NWcEVMc0FQSzR1TERhV1NGMUUzZ3h2YjI4c3FLMUFXNklRaWZBMjB5MmJrVCtFajhybFlYYXRMcGl1S0MrSEIxVDFkQUVZZkRQbm5TS3p0U1Y3YzNmQ3kwVmNmRXhLVFBOMjhXQlFiZUQ0aUxpM2NNcjZ1UVNtOEtZRHNTZkUrNEN3bzFDWUttUnVqbzlPV2Z2NW9jQkQ1Z0lqRTFqYW9va3NxNFlFNnZ6RThIRHlPMjRSRHdZK2ZwQVBzNDBJRjlKVGtraE9xaXFxTUZ0NWZGY0tNS3RISmNYYk51SXpiUVJ3TjdxQTJ3SXhEOS9JVU9Fc25UVVpVbXBuVjkvVklXVjV6a3pvN0t1M1RRMWxZZkRoOElBZGJZMk9oRUlQcnVBeDBwNnRvZ29paWttaGdydlhsVFVPb3U4YjF0WUhvUUtRNmlrWEFibXdnVHVNenU4Ni9JYXBKblhaZEtKVmVwRkJJM0RvR2c5VlFQMk9CVkRKQm8wQnpvT2liQTE5YStvdVpSS0dJeVZaaVlKSFFYRU53THRGcjBFVnRmZjM3LzVsNEtWNGRIUGJlL3hpa01pM1VpRVJQS2kvTzU3ZzNDRjBhNzlFeE5EK3Jxem9ENkdicklSZ2R3L056N3F5ODFXRG9ENitSNXB0eS9vUENaNDVzU1BUM0VuZ1o2OURNQk5JblFPZGZvblBHeUZzdEFvL2s4a3RKRjJGcEZTNjc4MEd0UGdINWlISWpXYnF6SFpMeHlGUE5oUFozSEV6czVWVi9TTU84QzJYWUw5QXNUcHA3N2lNZGdLSUdCeVpSMEpoUHNlYXlHRWhTZGw0SGgzekNkTmhINmphSExIN0l3ZUhXMVhCUkVBcW04dDUzTjl5NXpMbmJXNHl1WGdjNS9zSUNGWWZHU1JXZmFsU0drWk9XOVBGOWYzeWpKNWU3NkJjT2d2ekZsTGdzTDlsUjhnMUF1YnkvTWx2aG1aMFZkWERzRkF2ekRYK2xDZkY1YUdpOXNpUFhOenM1YXZCR1UrQi9iTnErYnJWV29LRnl4ZXM2NFNkQnZmQU14cjkwUFZMRlQwZ0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQzBBQUFBdENBTUFBQUFOeEJLb0FBQUMrbEJNVkVVQUFBRE51YXpaMWN6T3c3blh5Ynk5bG9EWHg3ak92S3ZOdWFyWXliekl0YVdya29TNnJxSzRwSldubElsK2FsekxzNnZPcnByUXdyU3lvWmZPdEtMTXQ2YmEwc1hld2JIUnZLMnRtWXRsVGtIY3g3ZlV6OFhQdDZTUmc0T3BqSGMxSUJXNXFxRWlHU1BZejhYVXdyblh2YXk4cHBJK1BsTEJzYUU3TlViZnc3V0VaVktCYWxwRU1palRzcHZmM3RqZnlydlgwc25jeHJYVnZLbll0WjdPcjVmSm5ZTFd6TUROd2JUU3JwV3ZsWVhleDdmVXVLVFBySkxiM2RUYXdySzFwSnFuaW5pY2huamc0dHZjeTcvT3hyN0t2N0xPdWFySHVhaTlycVhTdGFITXNaN01vNHFwbG9xd2UxcE5JQmJiMmRMVXlielF3N2ZSd0xESHVLL0NyNkMrclo2em9KZXVuNVRJb0lmTW40YVdoMzdJbVh5T2VXNldWejl0UHpGYU1DWlRLaDdSeHJyV3hyakZ2TFRFdEtmYXVxYXpuNUdsa29URG0zL0lsSG5Bam5EQWlHcTFmMmRvTWlQU3k4TFN5cjdEdWJISnZiQytzNm5JdEtTK3E1akJxSmJNcDR5Y2luNnBqWDJqaTMzRmszZkZrWEdyZkdTNmdWKzFjMWF1YmsxdlJ6bURRUzVoTXlaQ0dSRFZ6OFRheUxyR3dycTZxNkM2cUp2TXFKVzdtb3F2bDRuRG40aWZqWUtQYjE2NGVWeDFYVnVyY2xwcFUxYXBjbFNsYWxPTFpGTjlUMEIyU1RwU055OXhPaW5iejhUUXhMVGZ3N0hjd3E3Q3VLemN2NnJDczZURXJKcTdwNU80b3BEUHFZK3VtNDZqa291U2ZuU2RmbXpCZjJ1WmJsMUVRVktYWUV1cFdrZUtWa043UHpGaE9pOHRFUWsyRHdqZTJNM2gwc2JMdmJmYXZxN0p2YTNWcjVhcG1aUFlvNDZCZG9YU29ZU3JqNEs5a1hkblluZWFnSFY2Wm5GU1ZHKzJobXlZZTJ5RWJtcUhiMlJYVFZxQ1hFMmhZa2VVVzBaOFYwVjBVa0tsVVVDR1RUcGNRRGVNU1RSSExDZGNKeHhESXhyazVOck5sSUNyaVhQR2lIRzZqMjJUZDJpK2ZXR2tkRjErWjF1YloxQTVNRDErU1RWY0lCVGQxTXVpbXFXem1JKzBsSDZ3a255aGgzUnVZM0IzWm1wMFlHVzdoMktiYWxpTlgwNWxURUNXVFR1Q0xTTnZMQjJ1cGF5OW9wall0SlNhalpURXA0K0JiSFkySGh2SHljMlhob21oZ0dpSllHQ1BhMVFjQXdsRUFBQUFMblJTVGxNQUlQNzllLzJpU0REQ2NDQzNuM2dnRU9YZjM0QmY3Ky92NysvZjE3K2dTRER2NzkvZjM5L2Z6OCt2bjRDQVZXMjBCQUFBQnBOSlJFRlVTTWQ5bFhWWVUxRVloeWRoZDNkM1RGeHZiTEpOR0d3c0JKYTRNY1lZNjRGMGQzZURvQ0NDZ0NKU2RpY2dJUkoyZDNmWDgzZ0cyT2o3M1AvdWUzL1BkNzU3em5jZ2Z6SndjUDlCbyszTUNpWU1XbXcwRVBKZitoa1oya1JMUFJOSlcxSk9wWkR3SmxQNjkvdTNPeWdmalk3MkJtYXVPQ3lpeGpFRkI0ZHpodlh0anpTeWswcWxsb21ud25LZlBuMVNVWkdkSGRhYWt1RE5MUnJiVi9Bb2F3RFN1Q0lpSWpjM1RDek9hUW5MYWNuSjlyUEUyTTc5SzM3QXFMdjNjTGlFOHhVM2RIbTZDRWRIUjRuRVVaeVRlNnFDWk90a08zSEE3L0xnQXBmNFRWN2VXOExFelVHVmVhekl1a2lXcEZPbmswaHVQRDNFOFlyekd2ZGJNc3lzQUc1WHZFVVMyUnJ2WWx5bDY3eDVVMWZkMWhZZXdXSkZaTjhsbmIrYk5PT1htaWZBWURBenFXZUxPR3lUaVRuZStGcGw1Yldzb0JQcTlHcFFrYmdpS09qRVllTWhQK3g1dTJFdzAyZ2J6MWF4Mzg2ZCtUQ29FbVZQcDlNM0U0Uk1IY3RSa25PbGtua1JOV3BrcjJ5MGU3ZXBxV2swMmpzaXpHVG5UblBZUmlRU2lrRGdhWGprd2F6SUxwYjRTZWFKQUFGaGJHOGRHM2FibVpxWW1PZDdPNTQwTVRmWnNCR1BKQkNnVVAwbmV3OUhSSGJWcEFlcmxRSXN0S2VQL2MzZzNmWk9UMGtDekF5T2gySUpQcHV4aE0yRXZWQ3NJTGZ1UTQxV0V5aWtZNkhUdXFOTmUrMTh5NjZFQWppZVJvTmlzUWdYQkFoSEVnUTV0YlUxbWdzcWxNOWVHcTJmUHRvVVpnYUxCcmE1ZVZjQ0hGNWdhcnFoWU9QR2pTNHVlR3VrajZDcXRqWlhIU2kwM3d5bDRmV1ZUNEYxMjBDM2VVYUN3NEFNVEFSMEx4YUJRQkI4c210cnMxVXFGSjBBN0lsZ1AxdnFzZE5UMkpDeVliZTF3SWRPUnduVjJtdlgwclYwd3ZrNnlZbHpJQm9McGNIaEF5R0RPUnlackVobUJaQjVaNk91M01pclNnMVVaMVhmN014cmI5SmczMFZXWHQ1NlRoQ1B0TGFtMFFaRCtydTdZd3pkS1JRS0JvT3hTamw4cGRxeHMxMFQyQlIrTTdLdXMxM3JBODNMdWhDUVZPenR2UWt3RERKb3hRb0Q4QmpzMkxGajlRNmNUOVdOT3RiTGkyK1k3Uy96MnJKU1ZmR0k5TzFiQmNWZVhsNWNMb2V6RUdLd1dzL3lIcXp3ZEsxRHVBTUtvY3AwYUc0S0NiUW5RQStHbkVOeVBEMnRyUGE0WTBaRFZ1cnBjVmN0M3dHSEh0WnF6MkZkN0FOVUtOUkJlL3ZOQk9YK2VLczlsbnNvR0Zzbkc1dGVlMVUzWjgrdXh5UEFiNEdiWVFQVSs3RklMSjB1aUxmMkxBUnJXdS9rNU9ZYUJRRmxkR2YzMkRad3hCdVVZSU1MWXI4MldHaHY3Nk5VeHBkWTdjRVlnbUFnUjBHbVdyaUNaZHE0UmEwQWE3MFZqZDk3VUh0dy80VUxXMU5EUWpScVlRQXFDYmVIb3BmUjZLaW84WkNwYkhlM0tFTjN0eFVHcXcwTVZwalRsQmZWQWVuYm56OFB1UndheW1TcUE1TDh5OWl4SHJKQ05wdGlPd2pTbjh1eGRhVzRvMEVUYnhrWTVGdGZmS3dTcHA4K0hacWFHaG9hekh4OElrbVVSazBXbGE5WnM4YVhPeFF5dlB5MUxkcTlxSlRCNThuNXhMaDNxTUJBKzYzYlQ1OEdqUXdKWm1ZR0pmREtHRExmTmI3SnllVGl3WkNaclY1U05JYnpyS3RqM2JwMVo4NXNRUVZtVlZXL2VQSGllZnJseTZtaERrL3U3R05RTGZqbElKcGNBdWJpNUJJN053cjNXY2U2TTNxNzFWaUoyZyt5dDIvVkJBZUhPbFNkdXNNanNpMDhraFVNaGY5OHNHT1hGcTlIWXp5dlhoVWRKWlA5L1VuM2twUUJtdER0SWFuQm1VeUh0cG9HUlduY0xrTTBUM1R5MHFWaHdCN2h0UjY5M3ZJU21jRW9sUlBsOHZ2bmpZVWFaaFB6Y1hDbVF4dHJuYWdVRjhlSkxVUXpXbHErZGcrSmFWSmduL1F2VmZneStNa2lYL0k5SlVxb1Vta3ltOFdSSFJtK3VFT0pDcDZ6NnkycmswdDZ6cndOMnNtT25FaFVsQ2Z6NnpQS2lDV2ZtU0ZOV1E1NXJMb1BhV2xrRW1rTHJnaGpZYkcyckhmK0dMazVVY2c4S3BIUEo5YW44WXM4aXE4MHQ0ZnJXS3lPakl3R3YvdCtwSkk0Tm5zWGNmajN5VDBuWDZxSWRTNHM5S0RXWCtWelBXVFdRWlhoTDNVMUdZOHlqdDRuK1pFVDQ0aWxvakUvNStCNEtZTWE0d3pZVjhaajhOYnVTOG9NRDY5T08vYW8zcC9rZDRnc2wzSGxrMGI4TW1NcENvOWR1NXhqWEMxMlVjdEZyNDRsQkRYbmZEbjJQczBmUi9JN1NvNmx4aGI5TnNISEtiaTgxMnhYc0EvWGlzcHZIMms0SEhUeS9iR0hhWWR3T0p6SWowdWtqb1A4eG94SlIvMWpZeXhpWXFpK3QyODNkdUNTUHgwNDhPam9JVnlKL09vZDNxd0JmOTA3b3pHR0ZnQW4yMWRIR3E4L2JHdzhjT0JoWWlJeFR0N0FHTlBYdFdiazdMd1dFUFB4d0lNSEQ3WmQzNVpSVDQxbHkrU1hobytFOU1XUTZXc0FhMlBldmoxMjVQaTJiZGZMcU94OS9LSGR6ZWpiSHpiR3c5VnRYK01SWUYvZjVrR2N2QXk0LzJPZzBkQ2hzNDhmUDc1ZzBmVGhNLzk4K1EzOUh0T2puZUJMOGdBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUMwQUFBQXRDQU1BQUFBTnhCS29BQUFEQUZCTVZFVUFBQUFURGd0d1JDNWhSenhRTWlENDhPZytNeTVWTlNnTkRBb25JQm9MQ0FWclUwWURBd01PREFzSUNBWU5DUXNySXg5dlYwNGFGaElJQmdjV0RRbjY4dTBuSGh2OCtmUUZBZ0paTnlWSExpWDc5dW9FQWdGWU1pTU5Dd2c5Sng1NGFHUWdFQXBITXloSU1Da1FDUW5JZ1dFZUdob09DZ3VRaVlCWFNrYUxWMEY5U2pOaU9pZ1pHQkwvOSt5K2ZGai85dXlsWlVrWUVCRC8rL0g5K2ZmLzl1dVpYVVJRU0ZELzlPcWZaVW9CQUFBRUF3TUlCZ1lRRGcwTUNnai85KzM3OHVqaW4zMHJJUndlRmhNd0pTQXRHaFA4OWVubW80THBwSHUvakcvZGxHZk9qbVFpR2hYYm5vdlpub1BhbDNuV2wyK2JibGdlRXcwWURRbm1xWXZObVlucnFZZmpwb2Znb1lYbW9IemZtM3Jtb1hlNWgyM1ZrR1d3ZUdER2lGeFlTRUpBS1NFdUhoc25IUmtWRXhIOS92cnNwWUxEalhIRGhHL0xqMnk2ZVZUTWcxUEZmazFkVGtpeGFUcDhURGRGTFNFU0N3ZjkrUFA1OU96ODhPTG5vb3pacElyV21vZmdtNFhQbUlIR2szalNrSGpVbUhYa25uTElrWExnbVdyRmpXbTJnR0NpYzE1NllsdXpjMWlwZEZlcGJFcVFXMGVGV1VhMGJqK3BaejlOS3g0eEhSUDU1dGZTb0kvbnA0TE1rMzNFaW5uTGxuVFBtSFBobW5IT2tYSE1pRisrZjEyN2QwbDZWMGhRUWoxelN6azVKUjcyNE16dXFwRGRxWTdobjR2S2tZalJub2ZHbDMvVG1YN2NuSFhhajJ1M2dXbXZnR25UbFdqQ2htR1phRmJIaGxHZFpFbWpaRVpsUWpkVlB6WkZPREk5TWl4ak95czFLeVphTlNNM0lCcmV2NnZyczUzaXFaU2VrSW5Ga0gvWm5udStoWEtyZTJUUmgyT25kbVBWaVdIRWhGdlFpRnBsVjFpbFoxZVRaVkMwYlV1SFhrdWRYajZrWURWclBDbEdMeWxESkJnbUZnM3M1dC91Mkw2dHBKN1hycDN6cjVYYW81UFhrb08rajMvT25YbUhlSFRNaFc2OGVtVnhZVm1nYTB4clVFaUNVVFpOT1RKYk95ajY3ZDNlMDhma3lidnpyNHEzaVhheWVtckZlV20raEdpWGNXWjBaR1pmVVU5bFREcVVXVFdOV0RWelBDZnY0TmZ3M3MvUHdMYkN0S1hidVpyVXA1YTBvSkhVaW9PWmlYYlNrWENMYkdXeWFXWE9nV0xBZWttN3JKV1VYRkl5MzhTVEFBQUFPblJTVGxNQUlQMGcvZnpuZDNCRU1PL3YzOCsvdXArQWdGOGc3OS9mMTdlZ29KK2ZnRmhRTUJBUTcrL3YzOS9mMzkvZnY3K3ZyNStBZjNCd1FEQXdlWHdROUFBQUJsNUpSRUZVU01kOTFXVllVMUVjQnZBclluZDNkM2Z0M2szV3JJdHRiTElSWTJOc3dBanA3dTVRQkdrQlVVQWtiR2tFRWV6dTd1NzJiTFByL1hwK3ovdjh6N24zbmd2OW5zazl4bzJhOHpCRU5XM0JvdVdyb1ArbWF3OERnMGRsS3BxRW5iSlpRbE9GelI3VTlaKzJ5MmlEOExhd2RiUVUzNVFVa1FocmFxb3NmVnc5N3U5K3lvVHFDK3ZTYWh1cEtXdldyREVXS1lRbXU5dzhwWlhWVjNyOGJZaFJoaEVsNW1scDlWUmZZMlBBallVbUptNXgrVUdWbGRWei82anZaWmlSY1dGZFExcGhvYjh2TnQ1NERWYU1KWnN5bVhsN1doOUVYK25UNjFjOHREUEdVRk9tYXFCUnFmNisya0d3WkRJWW5KbVhVSHpGMGRJSkdmb3pua1RrRVRzTTJnNllTeVJVZjM5Zlg1RW9QbDRnRkFxWmVaN0Y1VFU0R0lYNnFYMVlINkpUWjdUbVlWUUREV2d3TjVsTUZncE1URXl5M1R5TE1oelJLQlNxYjVmdmVvUjlESTlvYUtCcGEwaHJsSUJkQ2dUeFlJOUNac0ZwQ3NYR3dCRUJHdTQzOVN0ZUtqL1A3U1FhUmorTzJxcFcyNmtDS05MQUpMR3JtN0wwa3FZbFBOUUFod0pCMElPL250MWgrVFd1RlRlem8wMnQvbml3TGJDNHBWUjY1MjJPZTJDb1dWS1NNalFERCt1MHRYNldRZGZrY25zWnp6STZSRzEzVUdXYm1ocHdwOGdHSzJBRUJuRTR0NlJtNlJpZHhxQUg2S3JQUDVQTGQvTzRsdEZoVyswK2xvU0V0YVp2Q1ExZ3h6T2xkZWZ0Z3lQTU9JaFd3eGcwdW91MnV1bW9zL3h3VEV4SFI5VFdyVFR6c3ZEMGQ0a2g3RnF4QjhVckx6OC83K1hOR3BRMlFBOEJlbGJUYmhmNXRjZlYxWVlIN2JiNnM5bHNwbWNxdTdBK3hkWExxNkNnSUh2WEhrdVVmcHZvR2VCOXRyaC81b244M0lHd1M1VlJRSU5IemhMSEcwc2FxWUlFVDJaVzFzNmQvRVBmTkxvMzFHT0RmZkF6WitWWjJxUDJTTHRHcXJGQW9WQUl5RlIxdlNMSDB6VHIrTTZkY2R1K2FtdDBUMmowQmd2NzNVKzhhOW1SRHlQWE4yNWVvN2h4STB0QnJxOHR6TnFWNE8xNi9Qak91Qi9kNDZHQkZSWVdUYStVaGF6MURwR1Jhc2tteFkzakFyRnA3ZTBRNzMzTmZ0NnVycnM4djNkYjk0ZUdid2ZsNTR2RkxMV0RnNE1kalMwU1pIbXp5TGJLYzlKYnAzSVRsU2VaWHVXdzdreXM2ZlI1RUw3cXNvWDkvZUFQSDlRT2tRNTJhUkl4bG5XV3hkcWI0SDB1TVplL2I1K1NTVW1IWVoyV3llZ1FHcWN0djNpdW5ncEdXVzlPMnlSTzlmTm1NVTFOUE56NXVZbDdFZ3ZNdHNCb3JoT013ZU53ZEFqQkV5b0FiMDFMb1drMWV4TjJiN0x0MmJPM2I3OXZmdjg1UExIQXphdkdtbDZUU2VUaGNRUVpOTktKWGxXeHpjSWlnMU1hNWFEVjhhYk56VXIrc1IzSGR1dzRWZWVlN1hZS3c4VlpPbG9TdVRqQ2NLaS9FNWV3L2ZLMkRSV080V0ZSNjB0czl3cE54RDZGM3Z5WHgvaTV1U2Zjc3ZsM01Ud1owQVFjampBUUdvdWhXMlZhSHFyWTduakIvT0NCZGJaSmJxWUtrWWgxOHVUcjE3bHhjWXk4L0lzWURGcVdTU0RnQ0VEM1JQQXlLd0toaWtCOFJJdUtVZ1VrSis4bGswWENYUXgzZDRiN2liZzlsQm9FY0x3TWg4UEpla0s5WVRTZWp1Zmg4YnhMNXRyeUFOdFVGcGFNOVdDY2RHY3dUdkRCaVNBSUFnN2J5b3B1M1J1QytzSVlEQUlqR01UQTNEK3NETXhpNjdNWGkvWHc4TWh4elQ2UnZ6OFRocldyZUtEN1FSQTBCTllGZzdRM1NHaGxaYXFTa2dDZlRWZ1AxNXljSEFiL1pxViswUWx2UmVTT0I3cUxYaVBiT1hhYk42MHJMUTBKREF5d1pYbTRNaGp1Q1RjakVCU01nbm1kblRFeFJMenV3eHlnNTI5ZXFLakpwMHZDd2krRVNnTXBuZ3orbm4yM3d0dGhvSjJJSGRHT05jVEYrb3NZMFhVLzM3aGo4MllmbjREQTBDMWJPRUZCZFVGQkxacExyU2dVd05HVjdlV0hySFRWWUhMQVVWVkhqc1J1ekFZOGlXSzJuOE5wQ1crTmlHamhSTUFJTHlhNlhhTXBQelFCMG1mcVNBVGo5T2JJeHRpMWExOGsrNXhPc2dHK2pzUFpFbFFYR2tHMHZGeWVvZEZrUE9qKzQ2ZlFGMTkxWkNQUVJpNnh4L3lTay8wb1pzWDc5eGNYRllWR2JMc1kvTzd1M2ZUMFBsMS91cjNSRlU4M3hsNDFNbHBMSWoyTjgwdjFzNkZRek16MkZZV2tBMzNtekwzZzRJbS8zTis4NTdHeFYwRTNpZVRpY2ozZkw4blBCa1FhVW41NXcvMTc5NXFhQVA0NWs3b2ZCdGpJaUdRRXN2YjY2YmVwWGw1M21xWEJWakV5d3ZidUsvNzRvYzBrYVhXM2J0Mk1WcTkySnUzd0Nrb29rcDU2WlhnbGs5NjlDL1JubHBCSW9KdTBHc1RaMmZsb1pvSk40dlZQRHh6Umc2ZEFmOHV3TVZxcTF5NW5yTG03dXgzZHpSMmdLLzZISDZIbkxvZXIwR2dFTjMwd3NQL0x5bVVMNTNkYjdYSzBYLyt4UFh2L3Z2Z0ZJeG5qNHRnZXE4Z0FBQUFBU1VWT1JLNUNZSUk9XCIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgQmFzZUFjY29yZGlvbiB9IGZyb20gJy4vYmFzZS1hY2NvcmRpb24nO1xyXG5pbXBvcnQgYWNjb3JkaW9uSWNvbkNsb3NlIGZyb20gJ2Fzc2V0cy9hY2NvcmRpb24tYXJyb3cuc3ZnJztcclxuaW1wb3J0IGFjY29yZGlvbkljb25PcGVuIGZyb20gJ2Fzc2V0cy9hY2NvcmRpb24tYXJyb3ctZS5zdmcnO1xyXG5pbXBvcnQge1xyXG4gIEFjY29yZGlvbkJ1dHRvbixcclxuICBBY2NvcmRpb25JdGVtLFxyXG4gIEFjY29yZGlvbkNvbnRlbnRzLFxyXG4gIHNpbmdsZSxcclxuICBwcmV2ZW50Q2xvc2UsXHJcbiAgY29tYmluZVJlZHVjZXJzLFxyXG59IGZyb20gJy4vc2hhcmVkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFjY29yZGlvbih7IGl0ZW1zLCAuLi5wcm9wcyB9KSB7XHJcbiAgY29uc3Qgb3Blbkljb24gPSA8SW1hZ2Ugc3JjPXthY2NvcmRpb25JY29uT3Blbn0gYWx0PVwib3BlbiBpY29uXCIgLz47XHJcbiAgY29uc3QgY2xvc2VJY29uID0gPEltYWdlIHNyYz17YWNjb3JkaW9uSWNvbkNsb3NlfSBhbHQ9XCJjbG9zZSBpY29uXCIgLz47XHJcbiAgcmV0dXJuIChcclxuICAgIDxCYXNlQWNjb3JkaW9uXHJcbiAgICAgIHN0YXRlUmVkdWNlcj17Y29tYmluZVJlZHVjZXJzKHNpbmdsZSwgcHJldmVudENsb3NlKX1cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgPlxyXG4gICAgICB7KHsgb3BlbkluZGV4ZXMsIGhhbmRsZUl0ZW1DbGljayB9KSA9PiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtXHJcbiAgICAgICAgICAgICAga2V5PXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgIGlzT3Blbj17b3BlbkluZGV4ZXMuaW5jbHVkZXMoaW5kZXgpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEFjY29yZGlvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVJdGVtQ2xpY2soaW5kZXgpfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICB7b3BlbkluZGV4ZXMuaW5jbHVkZXMoaW5kZXgpID8gb3Blbkljb24gOiBjbG9zZUljb259XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICA8L0FjY29yZGlvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8QWNjb3JkaW9uQ29udGVudHMgaXNPcGVuPXtvcGVuSW5kZXhlcy5pbmNsdWRlcyhpbmRleCl9PlxyXG4gICAgICAgICAgICAgICAge2l0ZW0uY29udGVudHN9XHJcbiAgICAgICAgICAgICAgPC9BY2NvcmRpb25Db250ZW50cz5cclxuICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8L0Jhc2VBY2NvcmRpb24+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgQmFzZUFjY29yZGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHN0YXRlUmVkdWNlcjogKHN0YXRlLCBjaGFuZ2VzKSA9PiBjaGFuZ2VzLFxyXG4gICAgb25TdGF0ZUNoYW5nZTogKCkgPT4ge30sXHJcbiAgfTtcclxuICBzdGF0ZSA9IHsgb3BlbkluZGV4ZXM6IFswXSB9O1xyXG4gIGdldFN0YXRlKHN0YXRlID0gdGhpcy5zdGF0ZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgb3BlbkluZGV4ZXM6XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vcGVuSW5kZXhlcyA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICA/IHN0YXRlLm9wZW5JbmRleGVzXHJcbiAgICAgICAgICA6IHRoaXMucHJvcHMub3BlbkluZGV4ZXMsXHJcbiAgICB9O1xyXG4gIH1cclxuICBpbnRlcm5hbFNldFN0YXRlKGNoYW5nZXMsIGNhbGxiYWNrID0gKCkgPT4ge30pIHtcclxuICAgIGxldCBhbGxDaGFuZ2VzO1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYWN0dWFsU3RhdGUgPSB0aGlzLmdldFN0YXRlKHN0YXRlKTtcclxuICAgICAgICBjb25zdCBjaGFuZ2VzT2JqZWN0ID1cclxuICAgICAgICAgIHR5cGVvZiBjaGFuZ2VzID09PSAnZnVuY3Rpb24nID8gY2hhbmdlcyhhY3R1YWxTdGF0ZSkgOiBjaGFuZ2VzO1xyXG4gICAgICAgIGFsbENoYW5nZXMgPSB0aGlzLnByb3BzLnN0YXRlUmVkdWNlcihhY3R1YWxTdGF0ZSwgY2hhbmdlc09iamVjdCk7XHJcbiAgICAgICAgcmV0dXJuIGFsbENoYW5nZXM7XHJcbiAgICAgIH0sXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLm9uU3RhdGVDaGFuZ2UoYWxsQ2hhbmdlcyk7XHJcbiAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcbiAgaGFuZGxlSXRlbUNsaWNrID0gKGluZGV4KSA9PiB7XHJcbiAgICB0aGlzLmludGVybmFsU2V0U3RhdGUoKHN0YXRlKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNsb3NpbmcgPSBzdGF0ZS5vcGVuSW5kZXhlcy5pbmNsdWRlcyhpbmRleCk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogY2xvc2luZyA/ICdjbG9zaW5nJyA6ICdvcGVuaW5nJyxcclxuICAgICAgICBvcGVuSW5kZXhlczogY2xvc2luZ1xyXG4gICAgICAgICAgPyBzdGF0ZS5vcGVuSW5kZXhlcy5maWx0ZXIoKGkpID0+IGkgIT09IGluZGV4KVxyXG4gICAgICAgICAgOiBbLi4uc3RhdGUub3BlbkluZGV4ZXMsIGluZGV4XSxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coJ2NsaWNrZWQnKTtcclxuICB9O1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuKHtcclxuICAgICAgb3BlbkluZGV4ZXM6IHRoaXMuZ2V0U3RhdGUoKS5vcGVuSW5kZXhlcyxcclxuICAgICAgaGFuZGxlSXRlbUNsaWNrOiB0aGlzLmhhbmRsZUl0ZW1DbGljayxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgQmFzZUFjY29yZGlvbiB9O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuXHJcbmV4cG9ydCBjb25zdCBBY2NvcmRpb25CdXR0b24gPSAoeyBjaGlsZHJlbiwgLi4ucmVzdCB9KSA9PiAoXHJcbiAgPGRpdlxyXG4gICAgY3NzPXt7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6ICctMC4ycHgnLFxyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgZm9udFNpemU6ICcxN3B4JyxcclxuICAgICAgbGluZUhlaWdodDogMS41LFxyXG4gICAgICBmb250V2VpZ2h0OiAnNTAwJyxcclxuICAgICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICAgIHBhZGRpbmdUb3A6ICcxMHB4JyxcclxuICAgICAgcGFkZGluZ0JvdHRvbTogJzEwcHgnLFxyXG4gICAgICBwYWRkaW5nTGVmdDogJzE1cHgnLFxyXG4gICAgICBwYWRkaW5nUmlnaHQ6ICczMHB4JyxcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIGNvbG9yOiAnIzBGMjEzNycsXHJcbiAgICAgICdAbWVkaWEobWluLXdpZHRoOiA3NjhweCknOiB7XHJcbiAgICAgICAgcGFkZGluZ0xlZnQ6ICczMHB4JyxcclxuICAgICAgICBwYWRkaW5nUmlnaHQ6ICczMHB4JyxcclxuICAgICAgICBwYWRkaW5nVG9wOiAnMjBweCcsXHJcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogJzIwcHgnLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMTVweCcsXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICAnOmZvY3VzJzoge1xyXG4gICAgICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCknLFxyXG4gICAgICB9LFxyXG4gICAgICBzcGFuOiB7XHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgdG9wOiAnNTAlJyxcclxuICAgICAgICByaWdodDogJzIwcHgnLFxyXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTUwJSknLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICAgICAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgICAgICdAbWVkaWEobWluLXdpZHRoOiA3NjhweCknOiB7XHJcbiAgICAgICAgICByaWdodDogJzMwcHgnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW1nOiB7XHJcbiAgICAgICAgICB3aWR0aDogJzdweCcsXHJcbiAgICAgICAgICAnQG1lZGlhKG1pbi13aWR0aDogNzY4cHgpJzoge1xyXG4gICAgICAgICAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfX1cclxuICAgIHsuLi5yZXN0fVxyXG4gID5cclxuICAgIHtjaGlsZHJlbn1cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmNvbnN0IHZhcmlhbnRzID0ge1xyXG4gIG9wZW46IHtcclxuICAgIC8vIG1heEhlaWdodDogMjAwLFxyXG4gICAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgICBtYXJnaW5Cb3R0b206IDEwLFxyXG4gICAgJ0BtZWRpYShtaW4td2lkdGg6IDc2OHB4KSc6IHtcclxuICAgICAgbWFyZ2luQm90dG9tOiAzMCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjbG9zZWQ6IHsgaGVpZ2h0OiAwLCBtYXJnaW5Ub3A6IDAsIG1hcmdpbkJvdHRvbTogMCB9LFxyXG59O1xyXG5leHBvcnQgZnVuY3Rpb24gQWNjb3JkaW9uQ29udGVudHMoeyBpc09wZW4sIC4uLnByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPG1vdGlvbi5kaXZcclxuICAgICAgaW5pdGlhbD1cImNsb3NlZFwiXHJcbiAgICAgIGFuaW1hdGU9e2lzT3BlbiA/ICdvcGVuJyA6ICdjbG9zZWQnfVxyXG4gICAgICB2YXJpYW50cz17dmFyaWFudHN9XHJcbiAgICAgIGNzcz17e1xyXG4gICAgICAgIG92ZXJmbG93WTogJ2hpZGRlbicsXHJcbiAgICAgICAgZm9udFNpemU6IDE1LFxyXG4gICAgICAgIHBhZGRpbmc6ICcwIDE1cHgnLFxyXG4gICAgICAgIHBhZGRpbmdSaWdodDogJzQwcHgnLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6ICczMHB4JyxcclxuICAgICAgICBjb2xvcjogJyMzNDNENDgnLFxyXG4gICAgICAgICdAbWVkaWEobWluLXdpZHRoOiA3NjhweCknOiB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAnMCAzMHB4JyxcclxuICAgICAgICB9LFxyXG4gICAgICB9fVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICAvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBY2NvcmRpb25JdGVtID0gKHsgaXNPcGVuLCBjaGlsZHJlbiwgLi4ucmVzdCB9KSA9PiAoXHJcbiAgPGRpdlxyXG4gICAgY3NzPXt7XHJcbiAgICAgIGJvcmRlclJhZGl1czogNSxcclxuICAgICAgbWFyZ2luQm90dG9tOiAxMCxcclxuICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNFREVGRjInLFxyXG4gICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICB9fVxyXG4gICAgey4uLnJlc3R9XHJcbiAgPlxyXG4gICAge2NoaWxkcmVufVxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHByZXZlbnRDbG9zZSA9IChzdGF0ZSwgY2hhbmdlcykgPT5cclxuICBjaGFuZ2VzLnR5cGUgPT09ICdjbG9zaW5nJyAmJiBzdGF0ZS5vcGVuSW5kZXhlcy5sZW5ndGggPCAyXHJcbiAgICA/IHsgLi4uY2hhbmdlcywgb3BlbkluZGV4ZXM6IHN0YXRlLm9wZW5JbmRleGVzIH1cclxuICAgIDogY2hhbmdlcztcclxuXHJcbmV4cG9ydCBjb25zdCBzaW5nbGUgPSAoc3RhdGUsIGNoYW5nZXMpID0+XHJcbiAgY2hhbmdlcy50eXBlID09PSAnb3BlbmluZydcclxuICAgID8geyAuLi5jaGFuZ2VzLCBvcGVuSW5kZXhlczogY2hhbmdlcy5vcGVuSW5kZXhlcy5zbGljZSgtMSkgfVxyXG4gICAgOiBjaGFuZ2VzO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbWJpbmVSZWR1Y2VycyA9ICguLi5yZWR1Y2VycykgPT4gKHN0YXRlLCBjaGFuZ2VzKSA9PlxyXG4gIHJlZHVjZXJzLnJlZHVjZSgoYWNjLCByZWR1Y2VyKSA9PiByZWR1Y2VyKHN0YXRlLCBhY2MpLCBjaGFuZ2VzKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94LCBUZXh0LCBIZWFkaW5nIH0gZnJvbSAndGhlbWUtdWknO1xyXG5cclxuY29uc3QgQmxvY2tUaXRsZSA9ICh7IHRpdGxlLCB0ZXh0IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBzeD17c3R5bGVzLmJsb2NrVGl0bGV9IGNsYXNzTmFtZT1cImJsb2NrVGl0bGVcIj5cclxuICAgICAgPEhlYWRpbmcgYXM9XCJoM1wiPnt0aXRsZX08L0hlYWRpbmc+XHJcbiAgICAgIDxUZXh0IGFzPVwicFwiPnt0ZXh0fTwvVGV4dD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9ja1RpdGxlO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGJsb2NrVGl0bGU6IHtcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICBtYjogWyc2MHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzYwcHgnLCBudWxsLCAnODBweCddLFxyXG4gICAgaDM6IHtcclxuICAgICAgY29sb3I6ICcjMEYyMTM3JyxcclxuICAgICAgZm9udFNpemU6IFsnMjNweCcsIG51bGwsIG51bGwsICczMHB4J10sXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgICAgbGV0dGVyU3BhY2luZzogJy0xLjVweCcsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEsXHJcbiAgICAgIG1iOiAnMjBweCcsXHJcbiAgICB9LFxyXG4gICAgcDoge1xyXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxyXG4gICAgICBmb250U2l6ZTogJzE4cHgnLFxyXG4gICAgICBjb2xvcjogJyM4NThCOTEnLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb3gsIFRleHQsIEhlYWRpbmcsIEltYWdlIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vbGluayc7XHJcblxyXG5pbXBvcnQgYXJyb3dBbmdsZSBmcm9tICcuLi8uLi9hc3NldHMvYXJyb3ctYW5nbGUuc3ZnJztcclxuXHJcbmNvbnN0IEJsb2dDYXJkID0gKHsgaW1hZ2UsIHRpdGxlLCBkZXNjcmlwdGlvbiwgcGF0aCwgbGlua0xhYmVsIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgICBzeD17c3R5bGVzLmJsb2dDYXJkfVxyXG4gICAgICBjbGFzc05hbWU9e2BibG9nQ2FyZCAke2ltYWdlID09PSBudWxsID8gJ25vVGh1bWIgJyA6ICcgJ30gJHtcclxuICAgICAgICBkZXNjcmlwdGlvbiA9PT0gbnVsbCA/ICdub0Rlc2NyaXB0aW9uICAnIDogJydcclxuICAgICAgfSAke2xpbmtMYWJlbCA9PT0gbnVsbCA/ICdub0xhYmVsICcgOiAnJ31gfVxyXG4gICAgPlxyXG4gICAgICB7aW1hZ2UgIT09IG51bGwgJiYgKFxyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5pbWFnZX0+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gYWx0PXt0aXRsZX0gLz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIDxCb3ggc3g9e3N0eWxlcy5jb250ZW50fSBjbGFzc05hbWU9XCJibG9nQ29udGVudFwiPlxyXG4gICAgICAgIDxIZWFkaW5nIGFzPVwiaDNcIj5cclxuICAgICAgICAgIDxMaW5rIHBhdGg9e3BhdGh9Pnt0aXRsZX08L0xpbms+XHJcbiAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgIHtkZXNjcmlwdGlvbiAhPT0gbnVsbCAmJiA8VGV4dCBhcz1cInBcIj57ZGVzY3JpcHRpb259PC9UZXh0Pn1cclxuICAgICAgICB7bGlua0xhYmVsICE9PSBudWxsICYmIChcclxuICAgICAgICAgIDxMaW5rIHN4PXtzdHlsZXMubGlua0xhYmVsfSBwYXRoPXtwYXRofT5cclxuICAgICAgICAgICAge2xpbmtMYWJlbH0gPEltYWdlIHNyYz17YXJyb3dBbmdsZX0gYWx0PVwiYW5nbGUgaWNvblwiIC8+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvZ0NhcmQ7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgYmxvZ0NhcmQ6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgbWI6IDMwLFxyXG4gICAgbXg6IDE1LFxyXG4gICAgd2lkdGg6IFtcclxuICAgICAgJ2NhbGMoMTAwJSAtIDMwcHgpJyxcclxuICAgICAgJ2NhbGMoMTAwJSAtIDMwcHgpJyxcclxuICAgICAgJ2NhbGMoNTAlIC0gMzBweCknLFxyXG4gICAgICAnY2FsYyg1MCUgLSAzMHB4KScsXHJcbiAgICAgICdjYWxjKDMzLjMzMzMlIC0gMzBweCknLFxyXG4gICAgXSxcclxuICAgICcmLm5vVGh1bWInOiB7XHJcbiAgICAgIHA6ICcyNXB4JyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0YwRjBGNCcsXHJcbiAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICAgIGgzOiB7XHJcbiAgICAgICAgZm9udFNpemU6ICcyMHB4JyxcclxuICAgICAgICBsaW5lSGVpZ2h0OiAxLjc1LFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgICAgICBtOiAwLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgICcmLm5vRGVzY3JpcHRpb246bm90KC5ub1RodW1iKSc6IHtcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIGltZzoge1xyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIH0sXHJcbiAgICAgICcuYmxvZ0NvbnRlbnQnOiB7XHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgICAgYm90dG9tOiAwLFxyXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTpcclxuICAgICAgICAgICdsaW5lYXItZ3JhZGllbnQoMTgwLjA2ZGVnLCByZ2JhKDAsIDAsIDAsIDApIDUwJSwgcmdiYSgwLCAwLCAwLCAwLjcxKSA5OS45NSUpJyxcclxuICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnZmxleC1lbmQnLFxyXG4gICAgICAgIHA6ICcyNXB4JyxcclxuICAgICAgICBoMzoge1xyXG4gICAgICAgICAgbTogMCxcclxuICAgICAgICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBpbWFnZToge1xyXG4gICAgaW1nOiB7XHJcbiAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY29udGVudDoge1xyXG4gICAgaDM6IHtcclxuICAgICAgZm9udFNpemU6ICcxOHB4JyxcclxuICAgICAgY29sb3I6ICcjMEYyMTM3JyxcclxuICAgICAgbGluZUhlaWdodDogMS42NyxcclxuICAgICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgICBtdDogJzIwcHgnLFxyXG4gICAgICBtYjogJzE1cHgnLFxyXG4gICAgICBhOiB7XHJcbiAgICAgICAgY29sb3I6ICdpbmhlcml0JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBwOiB7XHJcbiAgICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuODcsXHJcbiAgICAgIGNvbG9yOiAnIzBGMjEzNycsXHJcbiAgICAgIG9wYWNpdHk6IDAuNixcclxuICAgICAgbWI6ICcxNXB4JyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBsaW5rTGFiZWw6IHtcclxuICAgIGNvbG9yOiAnIzMxODNGRicsXHJcbiAgICBmb250U2l6ZTogJzE2cHgnLFxyXG4gICAgZm9udFdlaWdodDogJzUwMCcsXHJcbiAgICBpbWc6IHtcclxuICAgICAgbWw6ICc2cHgnLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb3gsIFRleHQsIEhlYWRpbmcsIEltYWdlIH0gZnJvbSAndGhlbWUtdWknO1xyXG5jb25zdCBKYWNrcG90Q2FyZCA9ICh7IGltYWdlLCBoZWFkaW5nLCB0ZXh0IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBzeD17c3R5bGVzLmphY2twb3RDYXJkfT5cclxuICAgICAgPEJveCBzeD17c3R5bGVzLmltYWdlfT5cclxuICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gYWx0PXtoZWFkaW5nfSAvPlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPEJveCBzeD17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgIDxIZWFkaW5nIGFzPVwiaDNcIj57aGVhZGluZ308L0hlYWRpbmc+XHJcbiAgICAgICAgPFRleHQgYXM9XCJwXCI+e3RleHR9PC9UZXh0PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBKYWNrcG90Q2FyZDtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBqYWNrcG90Q2FyZDoge1xyXG4gICAgcDogWyczMHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJzE1cHggMzBweCcsICczMHB4J10sXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBbJ2NvbHVtbicsIG51bGwsIG51bGwsICdyb3cnXSxcclxuICAgIHRleHRBbGlnbjogWydjZW50ZXInLCBudWxsLCBudWxsLCAnbGVmdCddLFxyXG4gICAgdHJhbnNpdGlvbjogJ2FsbCA1MDBtcyBlYXNlJyxcclxuICAgIGJvcmRlclJhZGl1czogJzEwcHgnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXHJcblxyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgIGJveFNoYWRvdzogJyAwcHggOHB4IDI0cHggcmdiYSg2OSwgODgsIDE1NywgMC4wNyknLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGltYWdlOiB7XHJcbiAgICBmbGV4U2hyaW5rOiAnMCcsXHJcbiAgICBtcjogWycwJywgbnVsbCwgbnVsbCwgJzMwcHgnXSxcclxuICAgIG1iOiBbJzIwcHgnLCBudWxsLCBudWxsLCAnMHB4J10sXHJcbiAgfSxcclxuICBjb250ZW50OiB7XHJcbiAgICBoMzoge1xyXG4gICAgICBjb2xvcjogJyMwRjIxMzcnLFxyXG4gICAgICBmb250U2l6ZTogJzE4cHgnLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxyXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICAgIG1iOiAnMTBweCcsXHJcbiAgICB9LFxyXG4gICAgcDoge1xyXG4gICAgICBmb250U2l6ZTogJzE1cHgnLFxyXG4gICAgICBjb2xvcjogJyMzNDNENDgnLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjczLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb3gsIEltYWdlLCBUZXh0LCBIZWFkaW5nIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnY29tcG9uZW50cy9saW5rJztcclxuXHJcbmltcG9ydCBwcmljZUNoZWNrIGZyb20gJ2Fzc2V0cy9wcmljZS1jaGVjay5zdmcnO1xyXG5pbXBvcnQgcHJpY2VDcm9zcyBmcm9tICdhc3NldHMvcHJpY2UtY3Jvc3Muc3ZnJztcclxuaW1wb3J0IHByaWNlQXJyb3cgZnJvbSAnYXNzZXRzL3ByaWNlLWFycm93LnN2Zyc7XHJcblxyXG5jb25zdCBQcmljZUNhcmQgPSAoeyBkYXRhOiB7IHRpdGxlLCBpY29uLCBhbW91bnQsIG9wdGlvbnMsIHJlY29tbWVuZGVkIH0gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgcmVjb21tZW5kZWQgPT09IG51bGwgPyAncHJpY2VDYXJkICcgOiAncHJpY2VDYXJkIHJlY29tbWVuZGVkJ1xyXG4gICAgICB9YH1cclxuICAgICAgc3g9e3N0eWxlcy5wcmljZUNhcmR9XHJcbiAgICA+XHJcbiAgICAgIDxCb3ggc3g9e3N0eWxlcy5wcmljZUhlYWRlcn0+XHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9XCJwcmljZUhlYWRlclwiPlxyXG4gICAgICAgICAge3JlY29tbWVuZGVkID09PSBudWxsID8gbnVsbCA6IChcclxuICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLnJlY29tbWVuZGVkfT57cmVjb21tZW5kZWR9PC9Cb3g+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPEltYWdlIHNyYz17aWNvbn0gYWx0PXt0aXRsZX0gLz5cclxuICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDNcIj57dGl0bGV9PC9IZWFkaW5nPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPEJveCBhcz1cInVsXCI+XHJcbiAgICAgICAge29wdGlvbnMubWFwKChvcHRpb24sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIGFzPVwibGlcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake29wdGlvbi5zdGF0dXMgPT09IHRydWUgPyAnJyA6ICdjbG9zZWQnfWB9XHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtvcHRpb24uc3RhdHVzID09PSB0cnVlID8gKFxyXG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3ByaWNlQ2hlY2t9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17cHJpY2VDcm9zc30gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge29wdGlvbi5sYWJlbH1cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0JveD5cclxuICAgICAgPEJveCBzeD17c3R5bGVzLmJ1dHRvbldyYXB9PlxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPVwicHJpY2VBbW91bnRcIj5cclxuICAgICAgICAgIDxUZXh0IGFzPVwicFwiPlN0YXJ0aW5nIGZyb208L1RleHQ+XHJcbiAgICAgICAgICA8TGluayBwYXRoPVwiI1wiIHN4PXtzdHlsZXMuaGVhZGluZ30+XHJcbiAgICAgICAgICAgIHthbW91bnR9XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPExpbmsgcGF0aD1cIiNcIiBjbGFzc05hbWU9XCJwcmljZUJ1dHRvblwiPlxyXG4gICAgICAgICAgPEltYWdlIHNyYz17cHJpY2VBcnJvd30gYWx0PVwicHJpY2UgYnV0dG9uXCIgLz5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByaWNlQ2FyZDtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBwcmljZUNhcmQ6IHtcclxuICAgIHB4OiBbJzIwcHgnLCBudWxsLCBudWxsLCBudWxsLCAnNDBweCddLFxyXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICNFMEUyRTQnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcclxuICAgIHVsOiB7XHJcbiAgICAgIHA6IDAsXHJcbiAgICAgIG10OiBbJzMwcHgnLCBudWxsLCBudWxsLCBudWxsLCAnNTBweCddLFxyXG4gICAgICBsaXN0U3R5bGU6ICdub25lJyxcclxuICAgICAgbGk6IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgICAgIGNvbG9yOiAnIzM0M0Q0OCcsXHJcbiAgICAgICAgZm9udFNpemU6ICcxNnB4JyxcclxuICAgICAgICBsaW5lSGVpZ2h0OiAnMjZweCcsXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBtYXhXaWR0aDogWycxMDAlJywgbnVsbCwgbnVsbCwgbnVsbCwgJzkwJSddLFxyXG4gICAgICAgICcrbGknOiB7XHJcbiAgICAgICAgICBtdDogWycxMHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzIwcHgnXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgICcmLmNsb3NlZCc6IHtcclxuICAgICAgICAgIGNvbG9yOiAncmdiYSg1Miw2MSw3MiwuNiknLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW1nOiB7XHJcbiAgICAgICAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgICB0b3A6ICc1cHgnLFxyXG4gICAgICAgICAgbXI6ICcxNXB4JyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHByaWNlSGVhZGVyOiB7XHJcbiAgICBwdDogWyc0MHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzYwcHgnXSxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgIGZsZXhEaXJlY3Rpb246IFsnY29sdW1uJywgbnVsbCwgJ3JvdyddLFxyXG4gICAgJy5wcmljZUFtb3VudCc6IHtcclxuICAgICAgdGV4dEFsaWduOiAncmlnaHQnLFxyXG4gICAgfSxcclxuICAgICcucHJpY2VIZWFkZXInOiB7XHJcbiAgICAgIG1iOiBbJzIwcHgnLCBudWxsLCAnMCddLFxyXG4gICAgICBoMzoge1xyXG4gICAgICAgIGxpbmVIZWlnaHQ6IDEsXHJcbiAgICAgICAgY29sb3I6ICcjMEYyMTM3JyxcclxuICAgICAgICBmb250U2l6ZTogJzIycHgnLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuNTVweCcsXHJcbiAgICAgICAgbXQ6ICczNXB4JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICByZWNvbW1lbmRlZDoge1xyXG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdwcmltYXJ5JyxcclxuICAgIGJvcmRlclJhZGl1czogJzNweCcsXHJcbiAgICBsaW5lSGVpZ2h0OiAxLFxyXG4gICAgY29sb3I6ICcjZmZmZmZmJyxcclxuICAgIGZvbnRTaXplOiAnMTRweCcsXHJcbiAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuMTRweCcsXHJcbiAgICBwYWRkaW5nOiAnNXB4IDhweCcsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHRvcDogWyctMTVweCcsIG51bGwsIG51bGwsIG51bGxdLFxyXG4gICAgbGVmdDogJzBweCcsXHJcbiAgfSxcclxuICBidXR0b25XcmFwOiB7XHJcbiAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiAnMTBweCcsXHJcbiAgICBib3JkZXJCb3R0b21SaWdodFJhZGl1czogJzEwcHgnLFxyXG4gICAgcHk6ICc0NHB4JyxcclxuICAgIG10OiAnNjBweCcsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjhGOEZBJyxcclxuICAgIG14OiBbJy0yMHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJy00MHB4J10sXHJcbiAgICBweDogWycyMHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzQwcHgnXSxcclxuICAgIGltZzoge1xyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgfSxcclxuICAgICcucHJpY2VBbW91bnQnOiB7XHJcbiAgICAgIHA6IHtcclxuICAgICAgICBsaW5lSGVpZ2h0OiAxLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICAgICAgY29sb3I6ICcjMzQzRDQ4JyxcclxuICAgICAgICBtYjogJzEwcHgnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGhlYWRpbmc6IHtcclxuICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICBmb250U2l6ZTogJzI2cHgnLFxyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgbGluZUhlaWdodDogMSxcclxuICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb3gsIFRleHQsIEhlYWRpbmcsIEltYWdlIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnY29tcG9uZW50cy9saW5rJztcclxuaW1wb3J0IGFycm93QW5nbGUgZnJvbSAnYXNzZXRzL2Fycm93LWFuZ2xlLnN2Zyc7XHJcblxyXG5jb25zdCBTZXJ2aWNlQ2FyZCA9ICh7IGltYWdlLCB0ZXh0LCBoZWFkaW5nLCBwYXRoIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBzeD17c3R5bGVzLnNlcnZpY2VDYXJkfT5cclxuICAgICAgPEJveCBzeD17c3R5bGVzLmltYWdlfT5cclxuICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gYWx0PXtoZWFkaW5nfSAvPlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPEJveCBzeD17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgIDxIZWFkaW5nIGFzPVwiaDNcIj57aGVhZGluZ308L0hlYWRpbmc+XHJcbiAgICAgICAgPFRleHQgYXM9XCJwXCI+e3RleHR9PC9UZXh0PlxyXG4gICAgICAgIDxMaW5rIHN4PXtzdHlsZXMubGlua30gcGF0aD17cGF0aH0+XHJcbiAgICAgICAgICBMZWFybiBNb3JlIDxJbWFnZSBzcmM9e2Fycm93QW5nbGV9IGFsdD1cImFuZ2xlIGljb25cIiAvPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VydmljZUNhcmQ7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgc2VydmljZUNhcmQ6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246IFsnY29sdW1uJywgbnVsbCwgbnVsbCwgJ3JvdyddLFxyXG4gICAgdGV4dEFsaWduOiBbJ2NlbnRlcicsIG51bGwsIG51bGwsICdsZWZ0J10sXHJcbiAgfSxcclxuICBpbWFnZToge1xyXG4gICAgZmxleFNocmluazogMCxcclxuICB9LFxyXG4gIGNvbnRlbnQ6IHtcclxuICAgIG1sOiBbJzAnLCBudWxsLCBudWxsLCAnMzBweCddLFxyXG4gICAgbXQ6IFsnMjBweCcsIG51bGwsIG51bGwsICcwcHgnXSxcclxuICAgIGgzOiB7XHJcbiAgICAgIGNvbG9yOiAnIzBGMjEzNycsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgICAgZm9udFNpemU6ICcxOHB4JyxcclxuICAgICAgbGluZUhlaWdodDogMSxcclxuICAgIH0sXHJcbiAgICBwOiB7XHJcbiAgICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuODcsXHJcbiAgICAgIGNvbG9yOiAnIzM0M0Q0OCcsXHJcbiAgICAgIG10OiAnMjBweCcsXHJcbiAgICAgIG1iOiAnMjBweCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbGluazoge1xyXG4gICAgY29sb3I6ICcjMzE4M0ZGJyxcclxuICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgIGltZzoge1xyXG4gICAgICBtbDogJzVweCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCwgVGV4dCwgSGVhZGluZywgSW1hZ2UgfSBmcm9tICd0aGVtZS11aSc7XHJcbmNvbnN0IFRlc3RpbW9uaWFsc0NhcmQgPSAoeyBpbWFnZSwgdGV4dCwgbmFtZSwgdXNlcm5hbWUgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHN4PXtzdHlsZXMudGVzdGltb25pYWxzQ2FyZH0+XHJcbiAgICAgIDxUZXh0IGFzPVwicFwiPnt0ZXh0fTwvVGV4dD5cclxuICAgICAgPEJveCBzeD17c3R5bGVzLnRlc3RpbW9uaWFsc0luZm99PlxyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy50ZXN0aW1vbmlhbHNJbWFnZX0+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gYWx0PXtuYW1lfSAvPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy50ZXN0aW1vbmlhbHNDb250ZW50fT5cclxuICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDNcIj57bmFtZX08L0hlYWRpbmc+XHJcbiAgICAgICAgICA8VGV4dCBhcz1cInBcIj57dXNlcm5hbWV9PC9UZXh0PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXN0aW1vbmlhbHNDYXJkO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHRlc3RpbW9uaWFsc0NhcmQ6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNGRkZGRkYnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgIG1iOiAnMjBweCcsXHJcbiAgICBweDogWycyMHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJzI1cHgnLCAnMzVweCddLFxyXG4gICAgcHk6IFsnMjBweCcsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICcyMHB4JywgJzI1cHgnXSxcclxuICAgIHBiOiBbJzI1cHgnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnMjVweCcsICczNXB4J10sXHJcbiAgICBwOiB7XHJcbiAgICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuODcsXHJcbiAgICAgIGNvbG9yOiAnIzM0M0Q0OCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdGVzdGltb25pYWxzSW5mbzoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBtdDogJzIwcHgnLFxyXG4gIH0sXHJcbiAgdGVzdGltb25pYWxzSW1hZ2U6IHtcclxuICAgIGltZzoge1xyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICBtcjogJzE1cHgnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHRlc3RpbW9uaWFsc0NvbnRlbnQ6IHtcclxuICAgIGgzOiB7XHJcbiAgICAgIG06IDAsXHJcbiAgICAgIGNvbG9yOiAnIzM0M0Q0OCcsXHJcbiAgICAgIGZvbnRTaXplOiAnMTdweCcsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgICAgbGluZUhlaWdodDogMSxcclxuICAgIH0sXHJcbiAgICBwOiB7XHJcbiAgICAgIG06IDAsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEsXHJcbiAgICAgIGNvbG9yOiAnIzRGOTZGRicsXHJcbiAgICAgIGZvbnRTaXplOiAnMTRweCcsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgICAgbXQ6ICcxMHB4JyxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBSY0RyYXdlciBmcm9tICdyYy1kcmF3ZXInO1xyXG5cclxuY29uc3QgRHJhd2VyID0gKHtcclxuICBjbGFzc05hbWUsXHJcbiAgY2hpbGRyZW4sXHJcbiAgY2xvc2VCdXR0b24sXHJcbiAgY2xvc2VCdXR0b25TdHlsZSxcclxuICBkcmF3ZXJIYW5kbGVyLFxyXG4gIHRvZ2dsZUhhbmRsZXIsXHJcbiAgb3BlbixcclxuICB3aWR0aCxcclxuICBwbGFjZW1lbnQsXHJcbiAgZHJhd2VyU3R5bGUsXHJcbiAgY2xvc2VCdG5TdHlsZSxcclxuICAuLi5wcm9wc1xyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPFJjRHJhd2VyXHJcbiAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICBvbkNsb3NlPXt0b2dnbGVIYW5kbGVyfVxyXG4gICAgICAgIGNsYXNzTmFtZT17YGRyYXdlciAke2NsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICcnfWAudHJpbSgpfVxyXG4gICAgICAgIHdpZHRoPXt3aWR0aH1cclxuICAgICAgICBwbGFjZW1lbnQ9e3BsYWNlbWVudH1cclxuICAgICAgICBoYW5kbGVyPXtmYWxzZX1cclxuICAgICAgICBsZXZlbD17bnVsbH1cclxuICAgICAgICBkdXJhdGlvbj1cIjAuNHNcIlxyXG4gICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgPlxyXG4gICAgICAgIHtjbG9zZUJ1dHRvbiAmJiAoXHJcbiAgICAgICAgICA8Qm94IGFzPVwiZGl2XCIgb25DbGljaz17dG9nZ2xlSGFuZGxlcn0gc3g9e2Nsb3NlQnRuU3R5bGV9PlxyXG4gICAgICAgICAgICB7Y2xvc2VCdXR0b259XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxCb3ggc3g9e2RyYXdlclN0eWxlfT57Y2hpbGRyZW59PC9Cb3g+XHJcbiAgICAgIDwvUmNEcmF3ZXI+XHJcbiAgICAgIDxCb3hcclxuICAgICAgICBjbGFzc05hbWU9XCJkcmF3ZXJfX2hhbmRsZXJcIlxyXG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH19XHJcbiAgICAgICAgb25DbGljaz17dG9nZ2xlSGFuZGxlcn1cclxuICAgICAgPlxyXG4gICAgICAgIHtkcmF3ZXJIYW5kbGVyfVxyXG4gICAgICA8L0JveD5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbkRyYXdlci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgd2lkdGg6ICczMjBweCcsXHJcbiAgcGxhY2VtZW50OiAnbGVmdCcsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEcmF3ZXI7XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBqc3gsIEJveCwgVGV4dCwgQ29udGFpbmVyIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnY29tcG9uZW50cy9saW5rJztcclxuaW1wb3J0IExvZ28gZnJvbSAnY29tcG9uZW50cy9sb2dvJztcclxuaW1wb3J0IGxvZ29MaWdodCBmcm9tICdhc3NldHMvbG9nby1saWdodC5zdmcnO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggYXM9XCJmb290ZXJcIiBzeD17c3R5bGVzLmZvb3Rlcn0+XHJcbiAgICAgIDxDb250YWluZXIgc3g9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIHN4PXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFsnY29sdW1uJywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJ3JvdyddLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TG9nbyBpbWFnZT17bG9nb0xpZ2h0fSAvPlxyXG4gICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgYXM9XCJwXCJcclxuICAgICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICAgICAgICAgIG9wYWNpdHk6ICcwLjcnLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAnMTRweCcsXHJcbiAgICAgICAgICAgICAgbXQ6IFsnMTBweCcsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICcwJ10sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIENvcHlyaWdodCBieSB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBGeGJvdDM2MFxyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5saW5rc1dyYXB9PlxyXG4gICAgICAgICAgPExpbmsgcGF0aD1cIi9cIj5Ib21lPC9MaW5rPlxyXG4gICAgICAgICAgey8qIDxMaW5rIHBhdGg9XCIvXCI+QWR2ZXJ0aXNlPC9MaW5rPiAqL31cclxuICAgICAgICAgIDxMaW5rIHBhdGg9XCIvXCI+U3VwcG9ydHM8L0xpbms+XHJcbiAgICAgICAgICB7LyogPExpbmsgcGF0aD1cIi9cIj5NYXJrZXRpbmc8L0xpbms+ICovfVxyXG4gICAgICAgICAgPExpbmsgcGF0aD1cIi9cIj5GQVE8L0xpbms+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGZvb3Rlcjoge1xyXG4gICAgcHk6IFsnNDBweCcsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICczMHB4JywgJzQwcHgnXSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMwMjA3MTgnLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAnJjo6YmVmb3JlJzoge1xyXG4gICAgICBjb250ZW50OiAnXCJcIicsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICBib3R0b206IDAsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICBvcGFjaXR5OiAnMC4wNScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY29udGFpbmVyOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBbJ2NvbHVtbicsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICdyb3cnXSxcclxuICAgIGp1c3RpZnlDb250ZW50OiBbJ2NlbnRlcicsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICdzcGFjZS1iZXR3ZWVuJ10sXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICB9LFxyXG4gIGxpbmtzV3JhcDoge1xyXG4gICAgbXQ6IFsnMTVweCcsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICcwJ10sXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgYToge1xyXG4gICAgICBmb250U2l6ZTogWycxNHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzE2cHgnXSxcclxuICAgICAgY29sb3I6ICcjZmZmZmZmJyxcclxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCA1MDBtcyBlYXNlJyxcclxuICAgICAgJyY6aG92ZXInOiB7IG9wYWNpdHk6IDAuNyB9LFxyXG4gICAgfSxcclxuICAgICdhK2EnOiB7IG1sOiBbJzE1cHgnLCBudWxsLCBudWxsLCBudWxsLCAnMzVweCddIH0sXHJcbiAgfSxcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgW1xyXG4gIHtcclxuICAgIHBhdGg6ICdiYW5uZXInLFxyXG4gICAgbGFiZWw6ICdIb21lJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICdzZXJ2aWNlcycsXHJcbiAgICBsYWJlbDogJ1NlcnZpY2VzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICdwcmljaW5nJyxcclxuICAgIGxhYmVsOiAnUHJpY2luZycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAndGVzdGltb25pYWxzJyxcclxuICAgIGxhYmVsOiAnVGVzdGltb25pYWxzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICduZXdzJyxcclxuICAgIGxhYmVsOiAnTmV3cycsXHJcbiAgfSxcclxuXTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQ29udGFpbmVyLCBGbGV4IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnY29tcG9uZW50cy9saW5rJztcclxuaW1wb3J0IHsgTGluayBhcyBTY3JvbGxMaW5rIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcclxuaW1wb3J0IExvZ28gZnJvbSAnY29tcG9uZW50cy9sb2dvJztcclxuaW1wb3J0IHsgRHJhd2VyUHJvdmlkZXIgfSBmcm9tICdjb250ZXh0cy9kcmF3ZXIvZHJhd2VyLnByb3ZpZGVyJztcclxuaW1wb3J0IE1vYmlsZURyYXdlciBmcm9tICcuL21vYmlsZURyYXdlcic7XHJcbmltcG9ydCBtZW51SXRlbXMgZnJvbSAnLi9oZWFkZXIuZGF0YSc7XHJcbmltcG9ydCBsb2dvRGFyayBmcm9tICdhc3NldHMvbG9nby1kYXJrLnN2Zyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoeyBjbGFzc05hbWUgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RHJhd2VyUHJvdmlkZXI+XHJcbiAgICAgIDxoZWFkZXIgc3g9e3N0eWxlcy5oZWFkZXJ9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cclxuICAgICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgIDxMb2dvIGltYWdlPXtsb2dvRGFya30gLz5cclxuXHJcbiAgICAgICAgICA8RmxleCBhcz1cIm5hdlwiIHN4PXtzdHlsZXMubmF2fT5cclxuICAgICAgICAgICAge21lbnVJdGVtcy5tYXAoKHsgcGF0aCwgbGFiZWwgfSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxTY3JvbGxMaW5rXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICBzeD17c3R5bGVzLm5hdi5uYXZMaW5rfVxyXG4gICAgICAgICAgICAgICAgdG89e3BhdGh9XHJcbiAgICAgICAgICAgICAgICBzcHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQ9ey03MH1cclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uPXs1MDB9XHJcbiAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICAgIDwvU2Nyb2xsTGluaz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0ZsZXg+XHJcblxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgcGF0aD1cIi9cIlxyXG4gICAgICAgICAgICBtbD17Mn1cclxuICAgICAgICAgICAgbGFiZWw9XCJQdXJjaGFzZSBOb3dcIlxyXG4gICAgICAgICAgICBzeD17c3R5bGVzLmhlYWRlckJ0bn1cclxuICAgICAgICAgICAgdmFyaWFudD1cImJ1dHRvbnMucHJpbWFyeVwiXHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxNb2JpbGVEcmF3ZXIgLz5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICA8L0RyYXdlclByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBoZWFkZXJCdG46IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJyxcclxuICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuMTZweCcsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gICAgY29sb3I6ICcjZmZmZmZmJyxcclxuICAgIHBhZGRpbmc6ICc2LjVweCAyNHB4JyxcclxuICAgIGRpc3BsYXk6IFsnbm9uZScsIG51bGwsIG51bGwsIG51bGwsICdpbmxpbmUtYmxvY2snXSxcclxuICAgIG1sOiBbJzAnLCBudWxsLCBudWxsLCAnYXV0bycsICcwJ10sXHJcbiAgICBtcjogWycwJywgbnVsbCwgbnVsbCwgJzIwcHgnLCAnMCddLFxyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaGVhZGVyOiB7XHJcbiAgICBjb2xvcjogJ3RleHRfd2hpdGUnLFxyXG4gICAgZm9udFdlaWdodDogJ25vcm1hbCcsXHJcbiAgICBweTogJzI1cHgnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgbGVmdDogMCxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgIHRyYW5zaXRpb246ICdhbGwgMC40cyBlYXNlJyxcclxuXHJcbiAgICAnJi5zdGlja3knOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JhY2tncm91bmQnLFxyXG4gICAgICBjb2xvcjogJ3RleHQnLFxyXG4gICAgICBweTogJzE1cHgnLFxyXG4gICAgICBib3hTaGFkb3c6ICcwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjA2KScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY29udGFpbmVyOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIHdpZHRoOiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJzEzOTBweCddLFxyXG4gICAgJ0BtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSc6IHtcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBuYXY6IHtcclxuICAgIG14OiAnYXV0bycsXHJcbiAgICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpJzoge1xyXG4gICAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgICB9LFxyXG4gICAgbmF2TGluazoge1xyXG4gICAgICBmb250U2l6ZTogJzE2cHgnLFxyXG4gICAgICBjb2xvcjogJyMwMjA3M0UnLFxyXG4gICAgICBmb250V2VpZ2h0OiAnNDAwJyxcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICcxLjInLFxyXG4gICAgICBtcjogJzQ4cHgnLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnNTAwbXMnLFxyXG4gICAgICAnOmxhc3QtY2hpbGQnOiB7XHJcbiAgICAgICAgbXI6ICcwJyxcclxuICAgICAgfSxcclxuICAgICAgJyY6aG92ZXIsICYuYWN0aXZlJzoge1xyXG4gICAgICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24sIEJveCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgU2Nyb2xsYmFycyB9IGZyb20gJ3JlYWN0LWN1c3RvbS1zY3JvbGxiYXJzJztcclxuaW1wb3J0IERyYXdlciBmcm9tICdjb21wb25lbnRzL2RyYXdlcic7XHJcbmltcG9ydCB7IERyYXdlckNvbnRleHQgfSBmcm9tICdjb250ZXh0cy9kcmF3ZXIvZHJhd2VyLmNvbnRleHQnO1xyXG5pbXBvcnQgeyBJb01kQ2xvc2UsIElvTWRNZW51IH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xyXG5pbXBvcnQgeyBMaW5rIGFzIFNjcm9sbExpbmsgfSBmcm9tICdyZWFjdC1zY3JvbGwnO1xyXG5pbXBvcnQgbWVudUl0ZW1zIGZyb20gJy4vaGVhZGVyLmRhdGEnO1xyXG5pbXBvcnQgTG9nbyBmcm9tICdjb21wb25lbnRzL2xvZ28nO1xyXG5pbXBvcnQgbG9nb0RhcmsgZnJvbSAnYXNzZXRzL2xvZ28tZGFyay5zdmcnO1xyXG5cclxuY29uc3QgTW9iaWxlRHJhd2VyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KERyYXdlckNvbnRleHQpO1xyXG5cclxuICAvLyBUb2dnbGUgZHJhd2VyXHJcbiAgY29uc3QgdG9nZ2xlSGFuZGxlciA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogJ1RPR0dMRScsXHJcbiAgICB9KTtcclxuICB9LCBbZGlzcGF0Y2hdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxEcmF3ZXJcclxuICAgICAgd2lkdGg9XCIzMjBweFwiXHJcbiAgICAgIGRyYXdlckhhbmRsZXI9e1xyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5oYW5kbGVyfT5cclxuICAgICAgICAgIDxJb01kTWVudSBzaXplPVwiMjJweFwiIC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIH1cclxuICAgICAgb3Blbj17c3RhdGUuaXNPcGVufVxyXG4gICAgICB0b2dnbGVIYW5kbGVyPXt0b2dnbGVIYW5kbGVyfVxyXG4gICAgICBjbG9zZUJ1dHRvbj17PElvTWRDbG9zZSBzaXplPVwiMjRweFwiIGNvbG9yPVwiIzAyMDczRVwiIC8+fVxyXG4gICAgICBkcmF3ZXJTdHlsZT17c3R5bGVzLmRyYXdlcn1cclxuICAgICAgY2xvc2VCdG5TdHlsZT17c3R5bGVzLmNsb3NlfVxyXG4gICAgPlxyXG4gICAgICA8U2Nyb2xsYmFycyBhdXRvSGlkZT5cclxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICA8TG9nbyBpbWFnZT17bG9nb0Rhcmt9IC8+XHJcbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMubWVudX0+XHJcbiAgICAgICAgICAgIHttZW51SXRlbXMubWFwKCh7IHBhdGgsIGxhYmVsIH0sIGkpID0+IChcclxuICAgICAgICAgICAgICA8U2Nyb2xsTGlua1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxyXG4gICAgICAgICAgICAgICAgdG89e3BhdGh9XHJcbiAgICAgICAgICAgICAgICBzcHk9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBzbW9vdGg9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQ9ezEwfVxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cclxuICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgICAgPC9TY3JvbGxMaW5rPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5tZW51Rm9vdGVyfT5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHN4PXtzdHlsZXMuYnV0dG9ufT5cclxuICAgICAgICAgICAgICBQdXJjaGFzZSBOb3dcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9TY3JvbGxiYXJzPlxyXG4gICAgPC9EcmF3ZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBoYW5kbGVyOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIGZsZXhTaHJpbms6ICcwJyxcclxuICAgIHdpZHRoOiAnMjZweCcsXHJcblxyXG4gICAgJ0BtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSc6IHtcclxuICAgICAgZGlzcGxheTogJ25vbmUnLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBkcmF3ZXI6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcclxuICB9LFxyXG5cclxuICBjbG9zZToge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHRvcDogJzMwcHgnLFxyXG4gICAgcmlnaHQ6ICczMHB4JyxcclxuICAgIHpJbmRleDogJzEnLFxyXG4gIH0sXHJcblxyXG4gIGNvbnRlbnQ6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgcHQ6ICczMHB4JyxcclxuICAgIHBiOiAnNDBweCcsXHJcbiAgICBweDogJzMwcHgnLFxyXG4gIH0sXHJcblxyXG4gIG1lbnU6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIG1hcmdpblRvcDogJzMwcHgnLFxyXG5cclxuICAgIGE6IHtcclxuICAgICAgZm9udFNpemU6ICcxNnB4JyxcclxuICAgICAgZm9udFdlaWdodDogJzQwMCcsXHJcbiAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICBweTogJzVweCcsXHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBtZW51Rm9vdGVyOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIG10OiAnYXV0bycsXHJcbiAgfSxcclxuXHJcbiAgYnV0dG9uOiB7XHJcbiAgICBmb250U2l6ZTogJzE1cHgnLFxyXG4gICAgZnc6ICc3MDAnLFxyXG4gICAgaGVpZ2h0OiAnNDhweCcsXHJcbiAgICBib3JkZXJSYWRpdXM6ICczcHgnLFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBweTogJzAnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnYmxhY2snLFxyXG4gICAgY29sb3I6ICcjZmZmJyxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlRHJhd2VyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJbWFnZSBhcyBJbWcgfSBmcm9tICd0aGVtZS11aSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZSh7IHNyYywgLi4ucmVzdCB9KSB7XHJcbiAgcmV0dXJuIDxJbWcgc3JjPXtzcmN9IHsuLi5yZXN0fSAvPjtcclxufVxyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTdGlja3kgZnJvbSAncmVhY3Qtc3RpY2t5bm9kZSc7XHJcbmltcG9ydCB7IHVzZVN0aWNreVN0YXRlIH0gZnJvbSAnY29udGV4dHMvYXBwL2FwcC5wcm92aWRlcic7XHJcbmltcG9ydCB7IFdheXBvaW50IH0gZnJvbSAncmVhY3Qtd2F5cG9pbnQnO1xyXG5pbXBvcnQgeyB1c2VTdGlja3lEaXNwYXRjaCB9IGZyb20gJ2NvbnRleHRzL2FwcC9hcHAucHJvdmlkZXInO1xyXG5cclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlci9oZWFkZXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vZm9vdGVyL2Zvb3Rlcic7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBpc1N0aWNreSA9IHVzZVN0aWNreVN0YXRlKCdpc1N0aWNreScpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlU3RpY2t5RGlzcGF0Y2goKTtcclxuICBjb25zdCBzZXRTdGlja3kgPSB1c2VDYWxsYmFjaygoKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdTRVRfU1RJQ0tZJyB9KSwgW1xyXG4gICAgZGlzcGF0Y2gsXHJcbiAgXSk7XHJcbiAgY29uc3QgcmVtb3ZlU3RpY2t5ID0gdXNlQ2FsbGJhY2soKCkgPT4gZGlzcGF0Y2goeyB0eXBlOiAnUkVNT1ZFX1NUSUNLWScgfSksIFtcclxuICAgIGRpc3BhdGNoLFxyXG4gIF0pO1xyXG5cclxuICBjb25zdCBvbldheXBvaW50UG9zaXRpb25DaGFuZ2UgPSAoeyBjdXJyZW50UG9zaXRpb24gfSkgPT4ge1xyXG4gICAgaWYgKGN1cnJlbnRQb3NpdGlvbiA9PT0gJ2Fib3ZlJykge1xyXG4gICAgICBzZXRTdGlja3koKTtcclxuICAgIH1cclxuICAgIGlmIChjdXJyZW50UG9zaXRpb24gPT09ICdiZWxvdycpIHtcclxuICAgICAgcmVtb3ZlU3RpY2t5KCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPFN0aWNreSBlbmFibGVkPXtpc1N0aWNreX0gaW5uZXJaPXs5OTF9PlxyXG4gICAgICAgIDxIZWFkZXIgY2xhc3NOYW1lPXtgJHtpc1N0aWNreSA/ICdzdGlja3knIDogJ3VuU3RpY2t5J31gfSAvPlxyXG4gICAgICA8L1N0aWNreT5cclxuICAgICAgPFdheXBvaW50XHJcbiAgICAgICAgb25FbnRlcj17cmVtb3ZlU3RpY2t5fVxyXG4gICAgICAgIC8vIG9uTGVhdmU9e3NldFN0aWNreX1cclxuICAgICAgICBvblBvc2l0aW9uQ2hhbmdlPXtvbldheXBvaW50UG9zaXRpb25DaGFuZ2V9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxtYWluXHJcbiAgICAgICAgc3g9e3tcclxuICAgICAgICAgIHZhcmlhbnQ6ICdsYXlvdXQubWFpbicsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9tYWluPlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgTmF2TGluayBhcyBNZW51TGluaywgTGluayBhcyBBIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuZXhwb3J0IGZ1bmN0aW9uIE5hdkxpbmsoeyBwYXRoLCBsYWJlbCwgY2hpbGRyZW4sIC4uLnJlc3QgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TmV4dExpbmsgaHJlZj17cGF0aH0+XHJcbiAgICAgIDxNZW51TGluayB7Li4ucmVzdH0+e2NoaWxkcmVuID8gY2hpbGRyZW4gOiBsYWJlbH08L01lbnVMaW5rPlxyXG4gICAgPC9OZXh0TGluaz5cclxuICApO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBMaW5rKHsgcGF0aCwgbGFiZWwsIGNoaWxkcmVuLCAuLi5yZXN0IH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPE5leHRMaW5rIGhyZWY9e3BhdGh9PlxyXG4gICAgICA8QSB7Li4ucmVzdH0+e2NoaWxkcmVuID8gY2hpbGRyZW4gOiBsYWJlbH08L0E+XHJcbiAgICA8L05leHRMaW5rPlxyXG4gICk7XHJcbn1cclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgSW1hZ2UgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdjb21wb25lbnRzL2xpbmsnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9nbyh7IGltYWdlIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPExpbmtcclxuICAgICAgcGF0aD1cIi9cIlxyXG4gICAgICBzeD17e1xyXG4gICAgICAgIHZhcmlhbnQ6ICdsaW5rcy5sb2dvJyxcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxJbWFnZSBzcmM9e2ltYWdlfSBhbHQ9XCJzdGFydHVwIGxhbmRpbmcgbG9nb1wiIC8+XHJcbiAgICA8L0xpbms+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU0VPKHtcclxuICBkZXNjcmlwdGlvbiA9ICdzdGFydHVwIGxhbmRpbmcgZGVzY3JpcHRpb25zJyxcclxuICBhdXRob3IgPSAnUmVkUSwgSW5jJyxcclxuICBtZXRhLFxyXG4gIHRpdGxlID0gJ3N0YXJ0dXAgbGFuZGluZyB0aXRsZScsXHJcbn0pIHtcclxuICBjb25zdCBtZXRhRGF0YSA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogYGRlc2NyaXB0aW9uYCxcclxuICAgICAgY29udGVudDogZGVzY3JpcHRpb24sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm9wZXJ0eTogYG9nOnRpdGxlYCxcclxuICAgICAgY29udGVudDogdGl0bGUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm9wZXJ0eTogYG9nOmRlc2NyaXB0aW9uYCxcclxuICAgICAgY29udGVudDogZGVzY3JpcHRpb24sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm9wZXJ0eTogYG9nOnR5cGVgLFxyXG4gICAgICBjb250ZW50OiBgd2Vic2l0ZWAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBgdHdpdHRlcjpjYXJkYCxcclxuICAgICAgY29udGVudDogYHN1bW1hcnlgLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogYHR3aXR0ZXI6Y3JlYXRvcmAsXHJcbiAgICAgIGNvbnRlbnQ6IGF1dGhvcixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IGB0d2l0dGVyOnRpdGxlYCxcclxuICAgICAgY29udGVudDogdGl0bGUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBgdHdpdHRlcjpkZXNjcmlwdGlvbmAsXHJcbiAgICAgIGNvbnRlbnQ6IGRlc2NyaXB0aW9uLFxyXG4gICAgfSxcclxuICBdLmNvbmNhdChtZXRhKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cclxuICAgICAge21ldGFEYXRhLm1hcCgoeyBuYW1lLCBjb250ZW50IH0sIGkpID0+IChcclxuICAgICAgICA8bWV0YSBrZXk9e2l9IG5hbWU9e25hbWV9IGNvbnRlbnQ9e2NvbnRlbnR9IC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC9IZWFkPlxyXG4gICk7XHJcbn1cclxuXHJcblNFTy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgbGFuZzogYGVuYCxcclxuICBtZXRhOiBbXSxcclxuICBkZXNjcmlwdGlvbjogYGAsXHJcbn07XHJcbiIsImltcG9ydCB7IHVzZUNyZWF0ZUNvbnRleHQgfSBmcm9tICcuLi9jcmVhdGUtY29udGV4dCc7XHJcbmltcG9ydCB7IHJlZHVjZXIsIGluaXRpYWxTdGF0ZSB9IGZyb20gJy4vYXBwLnJlZHVjZXInO1xyXG5cclxuY29uc3QgW3N0YXRlLCB1c2VEaXNwYXRjaCwgcHJvdmlkZXJdID0gdXNlQ3JlYXRlQ29udGV4dChpbml0aWFsU3RhdGUsIHJlZHVjZXIpO1xyXG5leHBvcnQgY29uc3QgdXNlU3RpY2t5U3RhdGUgPSBzdGF0ZTtcclxuZXhwb3J0IGNvbnN0IHVzZVN0aWNreURpc3BhdGNoID0gdXNlRGlzcGF0Y2g7XHJcbmV4cG9ydCBjb25zdCBTdGlja3lQcm92aWRlciA9IHByb3ZpZGVyO1xyXG4iLCJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGlzU3RpY2t5OiBmYWxzZSxcclxuICBpc1NpZGViYXJTdGlja3k6IHRydWUsXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgeyB0eXBlIH0pIHtcclxuICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgIGNhc2UgJ1NFVF9TVElDS1knOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzU3RpY2t5OiB0cnVlLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSAnUkVNT1ZFX1NUSUNLWSc6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNTdGlja3k6IGZhbHNlLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSAnU0VUX1NJREVCQVJfU1RJQ0tZJzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc1NpZGViYXJTdGlja3k6IHRydWUsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlICdSRU1PVkVfU0lERUJBUl9TVElDS1knOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzU2lkZWJhclN0aWNreTogZmFsc2UsXHJcbiAgICAgIH07XHJcbiAgICBkZWZhdWx0OiB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5zdXBwb3J0ZWQgYWN0aW9uIHR5cGU6ICR7dHlwZX1gKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JlYXRlQ29udGV4dChkZWZhdWx0VmFsdWUsIHJlZHVjZXIpIHtcclxuICBjb25zdCBkZWZhdWx0RGlzcGF0Y2ggPSAoKSA9PiBkZWZhdWx0VmFsdWU7XHJcbiAgY29uc3Qgc3RhdGVDdHggPSBjcmVhdGVDb250ZXh0KGRlZmF1bHRWYWx1ZSk7XHJcbiAgY29uc3QgZGlzcGF0Y2hDdHggPSBjcmVhdGVDb250ZXh0KGRlZmF1bHREaXNwYXRjaCk7XHJcblxyXG4gIGZ1bmN0aW9uIHVzZVN0YXRlQ3R4KHByb3BlcnR5KSB7XHJcbiAgICBjb25zdCBzdGF0ZSA9IHVzZUNvbnRleHQoc3RhdGVDdHgpO1xyXG4gICAgcmV0dXJuIHN0YXRlW3Byb3BlcnR5XTsgLy8gb25seSBvbmUgZGVwdGggc2VsZWN0b3IgZm9yIGNvbXBhcmlzb25cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHVzZURpc3BhdGNoQ3R4KCkge1xyXG4gICAgcmV0dXJuIHVzZUNvbnRleHQoZGlzcGF0Y2hDdHgpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IFJlYWN0LnVzZVJlZHVjZXIocmVkdWNlciwgZGVmYXVsdFZhbHVlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXNwYXRjaEN0eC5Qcm92aWRlciB2YWx1ZT17ZGlzcGF0Y2h9PlxyXG4gICAgICAgIDxzdGF0ZUN0eC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PntjaGlsZHJlbn08L3N0YXRlQ3R4LlByb3ZpZGVyPlxyXG4gICAgICA8L2Rpc3BhdGNoQ3R4LlByb3ZpZGVyPlxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIFt1c2VTdGF0ZUN0eCwgdXNlRGlzcGF0Y2hDdHgsIFByb3ZpZGVyXTtcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERyYXdlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IERyYXdlckNvbnRleHQgfSBmcm9tICcuL2RyYXdlci5jb250ZXh0JztcclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGlzT3BlbjogZmFsc2UsXHJcbn07XHJcblxyXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlICdUT0dHTEUnOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzT3BlbjogIXN0YXRlLmlzT3BlbixcclxuICAgICAgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IERyYXdlclByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8RHJhd2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBzdGF0ZSwgZGlzcGF0Y2ggfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvRHJhd2VyQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBTdGlja3lQcm92aWRlciB9IGZyb20gJ2NvbnRleHRzL2FwcC9hcHAucHJvdmlkZXInO1xyXG5pbXBvcnQgdGhlbWUgZnJvbSAndGhlbWUnO1xyXG5pbXBvcnQgU0VPIGZyb20gJ2NvbXBvbmVudHMvc2VvJztcclxuaW1wb3J0IExheW91dCBmcm9tICdjb21wb25lbnRzL2xheW91dCc7XHJcbmltcG9ydCBCYW5uZXIgZnJvbSAnc2VjdGlvbnMvYmFubmVyJztcclxuaW1wb3J0IFNlcnZpY2VzIGZyb20gJ3NlY3Rpb25zL3NlcnZpY2VzJztcclxuaW1wb3J0IEphY2twb3QgZnJvbSAnc2VjdGlvbnMvamFja3BvdCc7XHJcbmltcG9ydCBDYWxsVG9BY3Rpb24gZnJvbSAnc2VjdGlvbnMvY2FsbC10by1hY3Rpb24nO1xyXG5pbXBvcnQgRmVhdHVyZWQgZnJvbSAnc2VjdGlvbnMvZmVhdHVyZWQnO1xyXG5pbXBvcnQgUHJpY2luZyBmcm9tICdzZWN0aW9ucy9wcmljaW5nJztcclxuaW1wb3J0IFRlc3RpbW9uaWFscyBmcm9tICdzZWN0aW9ucy90ZXN0aW1vbmlhbHMnO1xyXG5pbXBvcnQgQmxvZ3MgZnJvbSAnc2VjdGlvbnMvYmxvZ3MnO1xyXG5pbXBvcnQgRkFRIGZyb20gJ3NlY3Rpb25zL2ZhcSc7XHJcbmltcG9ydCBTdWJzY3JpYmUgZnJvbSAnc2VjdGlvbnMvc3Vic2NyaWJlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4UGFnZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgPFN0aWNreVByb3ZpZGVyPlxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICA8U0VPIHRpdGxlPVwiU3RhcnR1cCBMYW5kaW5nIDAxNFwiIC8+XHJcbiAgICAgICAgICA8QmFubmVyIC8+XHJcbiAgICAgICAgICA8U2VydmljZXMgLz5cclxuICAgICAgICAgIDxKYWNrcG90IC8+XHJcbiAgICAgICAgICA8Q2FsbFRvQWN0aW9uIC8+XHJcbiAgICAgICAgICA8RmVhdHVyZWQgLz5cclxuICAgICAgICAgIDxQcmljaW5nIC8+XHJcbiAgICAgICAgICA8VGVzdGltb25pYWxzIC8+XHJcbiAgICAgICAgICA8QmxvZ3MgLz5cclxuICAgICAgICAgIDxGQVEgLz5cclxuICAgICAgICAgIDxTdWJzY3JpYmUgLz5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICAgPC9TdGlja3lQcm92aWRlcj5cclxuICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCwgQ29udGFpbmVyLCBJbWFnZSwgSGVhZGluZyB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XHJcbmltcG9ydCBsb2dvSW1hZ2UgZnJvbSAnYXNzZXRzL2Jhbm5lci1sb2dvLnBuZyc7XHJcbmltcG9ydCBiYW5uZXJJbWFnZSBmcm9tICdhc3NldHMvYmFubmVyLW1vY2t1cC5wbmcnO1xyXG5pbXBvcnQgYmFubmVySWNvbjEgZnJvbSAnYXNzZXRzL2Jhbm5lci1pY29uLTEtMS5zdmcnO1xyXG5pbXBvcnQgYmFubmVySWNvbjIgZnJvbSAnYXNzZXRzL2Jhbm5lci1pY29uLTEtMi5zdmcnO1xyXG5pbXBvcnQgYmFubmVySWNvbjMgZnJvbSAnYXNzZXRzL2Jhbm5lci1pY29uLTEtMy5zdmcnO1xyXG5pbXBvcnQgYmFubmVySWNvbjQgZnJvbSAnYXNzZXRzL2Jhbm5lci1pY29uLTEtNC5zdmcnO1xyXG5pbXBvcnQgYmFubmVySWNvbjUgZnJvbSAnYXNzZXRzL2Jhbm5lci1pY29uLTEtNS5zdmcnO1xyXG5pbXBvcnQgYmFubmVySWNvbjYgZnJvbSAnYXNzZXRzL2Jhbm5lci1pY29uLTEtNi5zdmcnO1xyXG5pbXBvcnQgYmFubmVySWNvbjcgZnJvbSAnYXNzZXRzL2RvdC1wYXR0ZXJuLnN2Zyc7XHJcblxyXG5jb25zdCBCYW5uZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggYXM9XCJzZWN0aW9uXCIgaWQ9XCJiYW5uZXJcIiBzeD17c3R5bGVzLmJhbm5lcn0+XHJcbiAgICAgIDxDb250YWluZXIgc3g9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgc3g9e3N0eWxlcy5iYW5uZXJJY29uMX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJhbm5lckljb25cIlxyXG4gICAgICAgICAgYWx0PVwiYmFubmVyIGljb25cIlxyXG4gICAgICAgICAgc3JjPXtiYW5uZXJJY29uMX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgc3g9e3N0eWxlcy5iYW5uZXJJY29uMn1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJhbm5lckljb25cIlxyXG4gICAgICAgICAgYWx0PVwiYmFubmVyIGljb25cIlxyXG4gICAgICAgICAgc3JjPXtiYW5uZXJJY29uMn1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgc3g9e3N0eWxlcy5iYW5uZXJJY29uM31cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJhbm5lckljb25cIlxyXG4gICAgICAgICAgYWx0PVwiYmFubmVyIGljb25cIlxyXG4gICAgICAgICAgc3JjPXtiYW5uZXJJY29uM31cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgc3g9e3N0eWxlcy5iYW5uZXJJY29uNH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJhbm5lckljb25cIlxyXG4gICAgICAgICAgYWx0PVwiYmFubmVyIGljb25cIlxyXG4gICAgICAgICAgc3JjPXtiYW5uZXJJY29uNH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgc3g9e3N0eWxlcy5iYW5uZXJJY29uNX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJhbm5lckljb25cIlxyXG4gICAgICAgICAgYWx0PVwiYmFubmVyIGljb25cIlxyXG4gICAgICAgICAgc3JjPXtiYW5uZXJJY29uNX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgc3g9e3N0eWxlcy5iYW5uZXJJY29uNn1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJhbm5lckljb25cIlxyXG4gICAgICAgICAgYWx0PVwiYmFubmVyIGljb25cIlxyXG4gICAgICAgICAgc3JjPXtiYW5uZXJJY29uNn1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgc3g9e3N0eWxlcy5iYW5uZXJJY29uN31cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJhbm5lckljb25cIlxyXG4gICAgICAgICAgYWx0PVwiYmFubmVyIGljb25cIlxyXG4gICAgICAgICAgc3JjPXtiYW5uZXJJY29uN31cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8SW1hZ2Ugc3g9e3N0eWxlcy5sb2dvfSBzcmM9e2xvZ29JbWFnZX0gYWx0PVwibG9nbyBpbWFnZVwiIC8+XHJcbiAgICAgICAgPEhlYWRpbmcgYXM9XCJoMlwiPkF1dG9tYXRlIHlvdXIgdHJhZGluZyB3aXRoIGVhc2UuLi48L0hlYWRpbmc+XHJcbiAgICAgICAgPEltYWdlIHNyYz17YmFubmVySW1hZ2V9IHN4PXtzdHlsZXMuYmFubmVySW1hZ2V9IGFsdD1cImJhbm5lciBtb2NcIiAvPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYW5uZXI7XHJcblxyXG5jb25zdCBiYW5uZXJBbmltMSA9IGtleWZyYW1lc2BcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDEsIDAsIDBkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgIDMwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA1ZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICA2MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMSwgMCwgMCwgMGRlZyk7XHJcbiAgICB9XHJcblxyXG4gICAgODAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDVkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMSwgMCwgMGRlZyk7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBiYW5uZXJBbmltMiA9IGtleWZyYW1lc2BcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSB0cmFuc2xhdGVYKDApIHJvdGF0ZSgwKTtcclxuICAgIH1cclxuXHJcbiAgICAzMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHB4KSB0cmFuc2xhdGVYKDMwcHgpIHJvdGF0ZSgxNWRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICA1MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MHB4KSB0cmFuc2xhdGVYKDUwcHgpIHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xyXG4gICAgfVxyXG5cclxuICAgIDgwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpIHRyYW5zbGF0ZVgoMzBweCkgcm90YXRlKDE1ZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcclxuICAgIH1cclxuXHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSB0cmFuc2xhdGVYKDApIHJvdGF0ZSgwKTtcclxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgYmFubmVyQW5pbTMgPSBrZXlmcmFtZXNgXHJcbiAgICAwJSxcclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHRyYW5zbGF0ZVkoMCkgcm90YXRlKDBkZWcpIHRyYW5zbGF0ZVooMHB4KSB0cmFuc2xhdGVYKDApO1xyXG4gICAgfVxyXG5cclxuICAgIDUwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlKC00NWRlZykgdHJhbnNsYXRlWigyMHB4KSB0cmFuc2xhdGVZKDIwcHgpIHRyYW5zbGF0ZVgoMjBweCk7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgYmFubmVyOiB7XHJcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjlGQkZEJyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICBwdDogWycxMTBweCcsIG51bGwsIG51bGwsIG51bGwsICcxMzBweCddLFxyXG4gICAgaDI6IHtcclxuICAgICAgZm9udFNpemU6IFsnMjhweCcsIG51bGwsIG51bGwsICczMnB4JywgJzM4cHgnLCAnNDhweCcsICc2NHB4J10sXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMjUsXHJcbiAgICAgIGNvbG9yOiAnIzAyMDczRScsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgbWF4V2lkdGg6IFsnMTAwJScsIG51bGwsIG51bGwsICc1NSUnLCAnNTAwcHgnLCAnNjQwcHgnLCAnODUxcHgnXSxcclxuICAgICAgbXg6ICdhdXRvJyxcclxuICAgICAgbXQ6ICczMHB4JyxcclxuICAgICAgbWI6IFsnNDBweCcsIG51bGwsIG51bGwsICc2NXB4J10sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbG9nbzoge1xyXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgIGJvcmRlclJhZGl1czogJzUwJScsXHJcbiAgICBteDogJ2F1dG8nLFxyXG4gICAgYm94U2hhZG93OiAnMHB4IDE1cHggMzVweCByZ2JhKDY1LCAxMDQsIDEzOSwgMC4xMiknLFxyXG4gIH0sXHJcbiAgYmFubmVySW1hZ2U6IHtcclxuICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICBteDogJ2F1dG8nLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBtYXhXaWR0aDogWycxMDAlJywgbnVsbCwgbnVsbCwgJzgwJScsIG51bGwsICcxMDAlJ10sXHJcbiAgfSxcclxuICBjb250YWluZXI6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgJy5iYW5uZXJJY29uJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgZGlzcGxheTogWydub25lJywgbnVsbCwgbnVsbCwgbnVsbCwgJ2Jsb2NrJ10sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYmFubmVySWNvbjE6IHtcclxuICAgIHRvcDogJzEwJScsXHJcbiAgICBsZWZ0OiAnMTAlJyxcclxuICAgIGFuaW1hdGlvbjogYCR7YmFubmVyQW5pbTJ9IDhzIGxpbmVhciBpbmZpbml0ZWAsXHJcbiAgfSxcclxuICBiYW5uZXJJY29uMjoge1xyXG4gICAgdG9wOiAnMTAlJyxcclxuICAgIHJpZ2h0OiAnMTAlJyxcclxuICAgIGFuaW1hdGlvbjogYCR7YmFubmVyQW5pbTJ9IDhzIGxpbmVhciBpbmZpbml0ZWAsXHJcbiAgfSxcclxuICBiYW5uZXJJY29uMzoge1xyXG4gICAgYm90dG9tOiAnNDBweCcsXHJcbiAgICByaWdodDogJy0xMjBweCcsXHJcbiAgICBhbmltYXRpb246IGAke2Jhbm5lckFuaW0xfSA1cyBlYXNlLW91dCBpbmZpbml0ZWAsXHJcbiAgfSxcclxuICBiYW5uZXJJY29uNDoge1xyXG4gICAgYm90dG9tOiAnMTMwcHgnLFxyXG4gICAgbGVmdDogJy0xMjBweCcsXHJcbiAgICBhbmltYXRpb246IGAke2Jhbm5lckFuaW0xfSA1cyBlYXNlLW91dCBpbmZpbml0ZWAsXHJcbiAgfSxcclxuICBiYW5uZXJJY29uNToge1xyXG4gICAgYm90dG9tOiAnNTAlJyxcclxuICAgIGxlZnQ6ICcxNSUnLFxyXG4gIH0sXHJcbiAgYmFubmVySWNvbjY6IHtcclxuICAgIGJvdHRvbTogJy02NXB4JyxcclxuICAgIGxlZnQ6ICcwcHgnLFxyXG4gICAgYW5pbWF0aW9uOiBgJHtiYW5uZXJBbmltM30gOXMgbGluZWFyIGluZmluaXRlYCxcclxuICB9LFxyXG4gIGJhbm5lckljb243OiB7XHJcbiAgICBib3R0b206ICczMCUnLFxyXG4gICAgcmlnaHQ6ICcwJScsXHJcbiAgfSxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBCb3gsIEdyaWQgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBNYXNvbnJ5IGZyb20gJ3JlYWN0LW1hc29ucnktY29tcG9uZW50JztcclxuaW1wb3J0IEJsb2NrVGl0bGUgZnJvbSAnY29tcG9uZW50cy9ibG9jay10aXRsZSc7XHJcbmltcG9ydCBCbG9nQ2FyZCBmcm9tICdjb21wb25lbnRzL2NhcmRzL2Jsb2ctY2FyZCc7XHJcblxyXG5pbXBvcnQgYmxvZ0ltYWdlMSBmcm9tICdhc3NldHMvYmxvZy0xLTEucG5nJztcclxuaW1wb3J0IGJsb2dJbWFnZTIgZnJvbSAnYXNzZXRzL2Jsb2ctMS0yLnBuZyc7XHJcbmltcG9ydCBibG9nSW1hZ2UzIGZyb20gJ2Fzc2V0cy9ibG9nLTEtMy5wbmcnO1xyXG5pbXBvcnQgYmxvZ0ltYWdlNCBmcm9tICdhc3NldHMvYmxvZy0xLTQucG5nJztcclxuXHJcbmNvbnN0IEJMT0dfREFUQSA9IFtcclxuICB7XHJcbiAgICBpbWFnZTogYmxvZ0ltYWdlMSxcclxuICAgIHRpdGxlOiAnSG93IHRvIHdvcmsgd2l0aCBwcm90b3R5cGUgZGVzaWduIHdpdGggYWRvYmUgeGQgZmVhdHVyaW5nIHRvb2xzJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnVGhlIDIwMTkgSW5ub3ZhdGlvbiBieSBEZXNpZ24gQXdhcmRzIGhvbm9yIHRoZSBkZXNpZ25lcnMgYW5kIGJ1c2luZXNzZXMgc29sdmluZyB0aGUgcHJvYmxlbXMgb2YgdG9kYXkgYW5kIHRvbW9ycm93LiBJdCBpcyBvbmUgb2YgdGhlIG1vc3Qgc291Z2h0LWFmdGVyIGRlc2lnbicsXHJcbiAgICBwYXRoOiAnLycsXHJcbiAgICBsaW5rTGFiZWw6ICdMZWFybiBNb3JlJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiBudWxsLFxyXG4gICAgdGl0bGU6XHJcbiAgICAgICdBbnRpYmlhcyByZWNlaXZlcyBob25vcmFibGUgZ2lmdCBtZW50aW9uIGF0IEZhc3QgQ29tcGFueeKAmXMgbW9zdCBJbm5vdmF0aW9uIGJ5IERlc2lnbiBBd2FyZHMnLFxyXG4gICAgZGVzY3JpcHRpb246IG51bGwsXHJcbiAgICBwYXRoOiAnLycsXHJcbiAgICBsaW5rTGFiZWw6IG51bGwsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogYmxvZ0ltYWdlMyxcclxuICAgIHRpdGxlOiAnTXVsdGlwbGUgdGFzayB3aXJlZnJhbWluZyB3aXRoIHRlYW0gbWFuYWdlbWVudCBwZXJmb3JtIGJldHRlcicsXHJcbiAgICBkZXNjcmlwdGlvbjogbnVsbCxcclxuICAgIHBhdGg6ICcvJyxcclxuICAgIGxpbmtMYWJlbDogbnVsbCxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiBibG9nSW1hZ2UyLFxyXG4gICAgdGl0bGU6ICdNdWx0aXBsZSBhcnQgYm9hcmQgcHJvdG90eXBlIHdpdGggRmlnbWEnLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgICdCZXlvbmQgbGF1bmNoZWQgYW50aWJpYXMsIGEgQ2hyb21lIGV4dGVuc2lvbiB0aGF0IHJlcGxhY2VzIExpbmtlZEluIHByb2ZpbGUgcGhvdG9zJyxcclxuICAgIHBhdGg6ICcvJyxcclxuICAgIGxpbmtMYWJlbDogJ0xlYXJuIE1vcmUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6IGJsb2dJbWFnZTQsXHJcbiAgICB0aXRsZTpcclxuICAgICAgJ1RlYW0gcHJlc2VudGF0aW9uIHdpdGggbGF0ZXN0IHVzZXIgaW50ZXJmYWNlICYgZXhwZXJpZW5jZSByZWFjaCBtb3JlJyxcclxuICAgIGRlc2NyaXB0aW9uOiBudWxsLFxyXG4gICAgcGF0aDogJy8nLFxyXG4gICAgbGlua0xhYmVsOiBudWxsLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBtYXNvbnJ5T3B0aW9ucyA9IHtcclxuICB0cmFuc2l0aW9uRHVyYXRpb246IDAsXHJcbn07XHJcblxyXG5jb25zdCBCbG9ncyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBhcz1cInNlY3Rpb25cIiBpZD1cIm5ld3NcIiBzeD17c3R5bGVzLmJsb2dzfT5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8QmxvY2tUaXRsZVxyXG4gICAgICAgICAgdGl0bGU9XCJQb3B1bGFyIGJsb2cgcG9zdCB3ZSB1cGRhdGVkXCJcclxuICAgICAgICAgIHRleHQ9XCJVcGRldGUgbmV3c2ZlZWQgYmxvZ1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Qm94IGFzPXtNYXNvbnJ5fSBvcHRpb25zPXttYXNvbnJ5T3B0aW9uc30gc3g9e3N0eWxlcy5ibG9nV3JhcHBlcn0+XHJcbiAgICAgICAgICB7QkxPR19EQVRBLm1hcChcclxuICAgICAgICAgICAgKHsgaW1hZ2UsIHRpdGxlLCBkZXNjcmlwdGlvbiwgcGF0aCwgbGlua0xhYmVsIH0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPEJsb2dDYXJkXHJcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgaW1hZ2U9e2ltYWdlfVxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgcGF0aD17cGF0aH1cclxuICAgICAgICAgICAgICAgIGxpbmtMYWJlbD17bGlua0xhYmVsfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2dzO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGJsb2dzOiB7XHJcbiAgICBwdDogWyc4MHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzgwcHgnLCBudWxsLCAnMTAwcHgnXSxcclxuICAgIHBiOiBbJzQwcHgnLCBudWxsLCBudWxsLCBudWxsLCAnMTQwcHgnLCBudWxsLCAnMTAwcHgnXSxcclxuICB9LFxyXG4gIGJsb2dXcmFwcGVyOiB7XHJcbiAgICBteDogJy0xNXB4JyxcclxuICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb3gsIENvbnRhaW5lciwgRmxleCwgVGV4dCwgSGVhZGluZywgSW1hZ2UgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdjb21wb25lbnRzL2xpbmsnO1xyXG5cclxuaW1wb3J0IGNhbGxJbWFnZSBmcm9tICdhc3NldHMvY2FsbC1pbWFnZS5wbmcnO1xyXG5cclxuY29uc3QgQ2FsbFRvQWN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGFzPVwic2VjdGlvblwiIHN4PXtzdHlsZXMuY2FsbFRvQWN0aW9ufT5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8RmxleCBzeD17c3R5bGVzLmZsZXh9PlxyXG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICA8VGV4dCBhcz1cInNwYW5cIj5CZWhpbmQgdGhlIGRlc2lnbjwvVGV4dD5cclxuICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoM1wiPlxyXG4gICAgICAgICAgICAgIENvZGUgdGhhdCB3ZSB1c2VkIHRvIGJ1aWx0IHRoZSB3ZWJzaXRlIHdpdGggaW50ZWdyYXRpbmcgYXBwc1xyXG4gICAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgIDxUZXh0IGFzPVwicFwiPlxyXG4gICAgICAgICAgICAgIEdldCB5b3VyIHRlc3RzIGRlbGl2ZXJlZCBhdCBsZXQgaG9tZSBjb2xsZWN0IHNhbXBsZSBmcm9tIHRoZVxyXG4gICAgICAgICAgICAgIHZpY3Rvcnkgb2YgdGhlIG1hbmFnZW1lbnRzIHRoYXQgc3VwcGxpZXMgYmVzdCBkZXNpZ24gc3lzdGVtXHJcbiAgICAgICAgICAgICAgZ3VpZGVsaW5lcyBldmVyLiBHZXQgeW91ciB0ZXN0cyBkZWxpdmVyZWQgYXQgbGV0IGhvbWUgY29sbGVjdFxyXG4gICAgICAgICAgICAgIHNhbXBsZS5cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICA8TGluayBwYXRoPVwiI1wiIHN4PXtzdHlsZXMuYnV0dG9ufT5cclxuICAgICAgICAgICAgICBFeHBsb3JlIE1vcmVcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuaW1hZ2VzfT5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz17Y2FsbEltYWdlfSBhbHQ9XCJjYWxsIGltYWdlXCIgLz5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvRmxleD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FsbFRvQWN0aW9uO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGNhbGxUb0FjdGlvbjoge1xyXG4gICAgbXQ6IFsnLTkwcHgnLCBudWxsLCBudWxsLCBudWxsLCAnMCddLFxyXG4gICAgcHk6IFsnNTBweCcsIG51bGwsIG51bGwsIG51bGwsICcxMTBweCcsIG51bGwsICcxNDBweCddLFxyXG4gIH0sXHJcbiAgZmxleDoge1xyXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICB9LFxyXG4gIGNvbnRlbnQ6IHtcclxuICAgIGZsZXg6IFsnMCAwIDEwMCUnLCBudWxsLCBudWxsLCBudWxsLCAnMCAwIDM4LjUlJ10sXHJcbiAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgbnVsbCwgbnVsbCwgbnVsbCwgJ2xlZnQnXSxcclxuICAgIHB0OiBbJzgwcHgnLCBudWxsLCBudWxsLCBudWxsLCAnMCddLFxyXG4gICAgbWF4V2lkdGg6IFsnMTAwJScsIG51bGwsIG51bGwsICc4MCUnLCAnMTAwJSddLFxyXG4gICAgbXg6IFsnYXV0bycsIG51bGwsIG51bGwsIG51bGwsICcwJ10sXHJcbiAgICBtYjogWyczMHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzAnXSxcclxuICAgIHNwYW46IHtcclxuICAgICAgZm9udFNpemU6ICcxOHB4JyxcclxuICAgICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgICBjb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxyXG4gICAgfSxcclxuICAgIGgzOiB7XHJcbiAgICAgIGNvbG9yOiAnIzBGMjEzNycsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgICAgZm9udFNpemU6IFsnMjNweCcsIG51bGwsIG51bGwsIG51bGwsICczMHB4JywgJzM2cHgnLCAnNDRweCddLFxyXG4gICAgICBtYXhXaWR0aDogWycxMDAlJywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJzkwJScsICcxMDAlJ10sXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMzYsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6ICctMS41cHgnLFxyXG4gICAgICBtdDogJzIwcHgnLFxyXG4gICAgICBtYjogJzMwcHgnLFxyXG4gICAgfSxcclxuICAgIHA6IHtcclxuICAgICAgY29sb3I6ICcjMDIwNzNFJyxcclxuICAgICAgZm9udFNpemU6IFsnMTZweCcsIG51bGwsIG51bGwsICcxOHB4J10sXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFsnMicsIG51bGwsIG51bGwsIDIuMzNdLFxyXG4gICAgICBtYjogJzMwcHgnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJ1dHRvbjoge1xyXG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMwMjA3M0UnLFxyXG4gICAgY29sb3I6ICcjZmZmJyxcclxuICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICBmb250U2l6ZTogJzE2cHgnLFxyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgcDogJzYuNXB4IDE5cHgnLFxyXG4gICAgbGV0dGVyU3BhY2luZzogJy0wLjE2cHgnLFxyXG4gICAgdHJhbnNpdGlvbjogJ2FsbCA1MDBtcyBlYXNlJyxcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICBvcGFjaXR5OiAwLjgsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaW1hZ2VzOiB7XHJcbiAgICBmbGV4OiBbJzAgMCAxMDAlJywgbnVsbCwgbnVsbCwgbnVsbCwgJzAgMCA2MS41JSddLFxyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCwgQ29udGFpbmVyLCBGbGV4LCBUZXh0LCBIZWFkaW5nIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnY29tcG9uZW50cy9saW5rJztcclxuaW1wb3J0IEJsb2NrVGl0bGUgZnJvbSAnY29tcG9uZW50cy9ibG9jay10aXRsZSc7XHJcbmltcG9ydCBBY2NvcmRpb24gZnJvbSAnY29tcG9uZW50cy9hY2NvcmRpb24vYWNjb3JkaW9uJztcclxuXHJcbmNvbnN0IGFjY29yZGlvbkRhdGEgPSBbXHJcbiAge1xyXG4gICAgaXNFeHBhbmRlZDogZmFsc2UsXHJcbiAgICB0aXRsZTogJ0hvdyBtdWNoIGRvZXMgaXQgY29zdCB0byBiZSBhIGNyZWRpdCBjYXJkIG1lcmNoYW50PycsXHJcbiAgICBjb250ZW50czogKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIEZvciBvdXIgcmVjZW50IHRyaXAgdG8gUy5BLiBJIGJvb2tlZCBzZXZlcmFsIGFjY29tbW9kYXRpb24gdGhydSBTQVxyXG4gICAgICAgIFBsYWNlcy4gSSBqdXN0IHdhbnRlZCB0byB0ZWxsIHlvdSB0aGF0IGV2ZXJ5dGhpbmcgd29ya2VkIG91dCBwZXJmZWN0bHlcclxuICAgICAgICB3aXRoIGFsbCB0aGUgYm9va2luZ3MgYW5kIGFsc28geW91ciBib29raW5nIHdhcyB2ZXJ5IHF1aWNrIGFuZFxyXG4gICAgICAgIHByb2Zlc3Npb25hbC4gSSBob3BlIEkgaGF2ZSB0aGUgb3Bwb3J0dW5pdHkgdG8gcmUtdmlzaXQgU291dGggQWZyaWNhXHJcbiAgICAgICAgc29vbiwgSSB3aWxsIHRoZW4gbWFrZSBteSBib29raW5ncyB3aXRoIHlvdXIgY29tcGFueSBhZ2Fpbi4gSSB3aWxsIGFsc29cclxuICAgICAgICByZWNvbW1lbmRcclxuICAgICAgPC9kaXY+XHJcbiAgICApLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaXNFeHBhbmRlZDogdHJ1ZSxcclxuICAgIHRpdGxlOiAnSG93IGNhbiBJIG9wZW4gYSBtZXJjaGFudCBhY2NvdW50PycsXHJcbiAgICBjb250ZW50czogKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIEZvciBvdXIgcmVjZW50IHRyaXAgdG8gUy5BLiBJIGJvb2tlZCBzZXZlcmFsIGFjY29tbW9kYXRpb24gdGhydSBTQVxyXG4gICAgICAgIFBsYWNlcy4gSSBqdXN0IHdhbnRlZCB0byB0ZWxsIHlvdSB0aGF0IGV2ZXJ5dGhpbmcgd29ya2VkIG91dCBwZXJmZWN0bHlcclxuICAgICAgICB3aXRoIGFsbCB0aGUgYm9va2luZ3MgYW5kIGFsc28geW91ciBib29raW5nIHdhcyB2ZXJ5IHF1aWNrIGFuZFxyXG4gICAgICAgIHByb2Zlc3Npb25hbC4gSSBob3BlIEkgaGF2ZSB0aGUgb3Bwb3J0dW5pdHkgdG8gcmUtdmlzaXQgU291dGggQWZyaWNhXHJcbiAgICAgICAgc29vbiwgSSB3aWxsIHRoZW4gbWFrZSBteSBib29raW5ncyB3aXRoIHlvdXIgY29tcGFueSBhZ2Fpbi4gSSB3aWxsIGFsc29cclxuICAgICAgICByZWNvbW1lbmRcclxuICAgICAgPC9kaXY+XHJcbiAgICApLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaXNFeHBhbmRlZDogZmFsc2UsXHJcbiAgICB0aXRsZTogJ0hvdyBsb25nIGRvZXMgdGhlIGFwcGxpY2F0aW9uIHRha2U/JyxcclxuICAgIGNvbnRlbnRzOiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgRm9yIG91ciByZWNlbnQgdHJpcCB0byBTLkEuIEkgYm9va2VkIHNldmVyYWwgYWNjb21tb2RhdGlvbiB0aHJ1IFNBXHJcbiAgICAgICAgUGxhY2VzLiBJIGp1c3Qgd2FudGVkIHRvIHRlbGwgeW91IHRoYXQgZXZlcnl0aGluZyB3b3JrZWQgb3V0IHBlcmZlY3RseVxyXG4gICAgICAgIHdpdGggYWxsIHRoZSBib29raW5ncyBhbmQgYWxzbyB5b3VyIGJvb2tpbmcgd2FzIHZlcnkgcXVpY2sgYW5kXHJcbiAgICAgICAgcHJvZmVzc2lvbmFsLiBJIGhvcGUgSSBoYXZlIHRoZSBvcHBvcnR1bml0eSB0byByZS12aXNpdCBTb3V0aCBBZnJpY2FcclxuICAgICAgICBzb29uLCBJIHdpbGwgdGhlbiBtYWtlIG15IGJvb2tpbmdzIHdpdGggeW91ciBjb21wYW55IGFnYWluLiBJIHdpbGwgYWxzb1xyXG4gICAgICAgIHJlY29tbWVuZFxyXG4gICAgICA8L2Rpdj5cclxuICAgICksXHJcbiAgfSxcclxuICB7XHJcbiAgICBpc0V4cGFuZGVkOiBmYWxzZSxcclxuICAgIHRpdGxlOiAnQ2FuIEkgbWFrZSBwYXltZW50IG91dHNpZGUgb2YgSG9uZyBLb25nPycsXHJcbiAgICBjb250ZW50czogKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIEZvciBvdXIgcmVjZW50IHRyaXAgdG8gUy5BLiBJIGJvb2tlZCBzZXZlcmFsIGFjY29tbW9kYXRpb24gdGhydSBTQVxyXG4gICAgICAgIFBsYWNlcy4gSSBqdXN0IHdhbnRlZCB0byB0ZWxsIHlvdSB0aGF0IGV2ZXJ5dGhpbmcgd29ya2VkIG91dCBwZXJmZWN0bHlcclxuICAgICAgICB3aXRoIGFsbCB0aGUgYm9va2luZ3MgYW5kIGFsc28geW91ciBib29raW5nIHdhcyB2ZXJ5IHF1aWNrIGFuZFxyXG4gICAgICAgIHByb2Zlc3Npb25hbC4gSSBob3BlIEkgaGF2ZSB0aGUgb3Bwb3J0dW5pdHkgdG8gcmUtdmlzaXQgU291dGggQWZyaWNhXHJcbiAgICAgICAgc29vbiwgSSB3aWxsIHRoZW4gbWFrZSBteSBib29raW5ncyB3aXRoIHlvdXIgY29tcGFueSBhZ2Fpbi4gSSB3aWxsIGFsc29cclxuICAgICAgICByZWNvbW1lbmRcclxuICAgICAgPC9kaXY+XHJcbiAgICApLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaXNFeHBhbmRlZDogZmFsc2UsXHJcbiAgICB0aXRsZTogJ0hvdyBkbyBJIGdldCB0aGUgcGF5bWVudCBjb21wbGV0ZT8nLFxyXG4gICAgY29udGVudHM6IChcclxuICAgICAgPGRpdj5cclxuICAgICAgICBGb3Igb3VyIHJlY2VudCB0cmlwIHRvIFMuQS4gSSBib29rZWQgc2V2ZXJhbCBhY2NvbW1vZGF0aW9uIHRocnUgU0FcclxuICAgICAgICBQbGFjZXMuIEkganVzdCB3YW50ZWQgdG8gdGVsbCB5b3UgdGhhdCBldmVyeXRoaW5nIHdvcmtlZCBvdXQgcGVyZmVjdGx5XHJcbiAgICAgICAgd2l0aCBhbGwgdGhlIGJvb2tpbmdzIGFuZCBhbHNvIHlvdXIgYm9va2luZyB3YXMgdmVyeSBxdWljayBhbmRcclxuICAgICAgICBwcm9mZXNzaW9uYWwuIEkgaG9wZSBJIGhhdmUgdGhlIG9wcG9ydHVuaXR5IHRvIHJlLXZpc2l0IFNvdXRoIEFmcmljYVxyXG4gICAgICAgIHNvb24sIEkgd2lsbCB0aGVuIG1ha2UgbXkgYm9va2luZ3Mgd2l0aCB5b3VyIGNvbXBhbnkgYWdhaW4uIEkgd2lsbCBhbHNvXHJcbiAgICAgICAgcmVjb21tZW5kXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSxcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgRkFRID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGFzPVwic2VjdGlvblwiPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxCbG9ja1RpdGxlXHJcbiAgICAgICAgICB0aXRsZT1cIkZyZXF1ZW50bHkgQXNrIFF1ZXN0aW9uXCJcclxuICAgICAgICAgIHRleHQ9XCJBc2sgeW91ciBxdWVzdGlvbiBhbmQgbWVldFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8RmxleCBzeD17c3R5bGVzLmZsZXh9PlxyXG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLmZhcVdyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8QWNjb3JkaW9uIGl0ZW1zPXthY2NvcmRpb25EYXRhfSAvPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDNcIj5cclxuICAgICAgICAgICAgICBEbyB5b3UgaGF2ZSBhbnkgcXVlc2l0b24/IFBsZWFzZSBhc2sgaGVyZSB3ZSByZWFkeSB0byBzdXBwb3J0XHJcbiAgICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgICAgPFRleHQgYXM9XCJwXCI+XHJcbiAgICAgICAgICAgICAgSWYgeW91ciBxdWVzdGlvbiBpcyBub3QgbGlzdCBoZXJlLCBwbGVhc2UgZmVlbCBmcmVlIHRvIG1ha2UgYVxyXG4gICAgICAgICAgICAgIG1hbnVhbCBzdXBwb3J0LlxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgIDxMaW5rIHN4PXtzdHlsZXMuYXNrQnV0dG9ufSBwYXRoPVwiI1wiPlxyXG4gICAgICAgICAgICAgIEFzayB5b3VyIFF1ZXN0aW9uXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvRmxleD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRkFRO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGZsZXg6IHtcclxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBbJ2NvbHVtbicsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICdyb3ctcmV2ZXJzZSddLFxyXG4gICAgcGI6IFsnNzBweCcsIG51bGwsIG51bGwsIG51bGwsICc5MHB4JywgbnVsbCwgJzEzMHB4J10sXHJcbiAgfSxcclxuICBjb250ZW50OiB7XHJcbiAgICBmbGV4OiBbJzAgMCAxMDAlJywgbnVsbCwgbnVsbCwgbnVsbCwgJzAgMCAzMy4zMzMlJ10sXHJcbiAgICBtYXhXaWR0aDogWycxMDAlJywgbnVsbCwgbnVsbCwgJzQ1MHB4JywgJzEwMCUnXSxcclxuICAgIG14OiBbJ2F1dG8nLCBudWxsLCBudWxsLCBudWxsLCAnMCddLFxyXG4gICAgbWI6IFsnMHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzAnXSxcclxuICAgIHRleHRBbGlnbjogWydjZW50ZXInLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnbGVmdCddLFxyXG4gICAgbXQ6IFsnNDBweCcsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICcwJ10sXHJcbiAgICBoMzoge1xyXG4gICAgICBmb250U2l6ZTogWycyM3B4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzI0cHgnXSxcclxuICAgICAgbGluZUhlaWdodDogWzEuNSwgbnVsbCwgbnVsbCwgbnVsbCwgMS42N10sXHJcbiAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6ICctMS41cHgnLFxyXG4gICAgICBtdDogJy01cHgnLFxyXG4gICAgICBwcjogWycwJywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJzMwcHgnXSxcclxuICAgIH0sXHJcbiAgICBwOiB7XHJcbiAgICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuODcsXHJcbiAgICAgIGNvbG9yOiAnIzM0M0Q0OCcsXHJcbiAgICAgIG9wYWNpdHk6IDAuNyxcclxuICAgICAgbXQ6ICcxMHB4JyxcclxuICAgICAgcHI6IFsnMCcsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICc4MHB4J10sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYXNrQnV0dG9uOiB7XHJcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzAyMDczRScsXHJcbiAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICBwOiAnNi41cHggMTlweCcsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuMTZweCcsXHJcbiAgICBtdDogJzI1cHgnLFxyXG4gICAgdHJhbnNpdGlvbjogJ2FsbCA1MDBtcyBlYXNlJyxcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICBvcGFjaXR5OiAwLjgsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZmFxV3JhcHBlcjoge1xyXG4gICAgZmxleDogWycwIDAgMTAwJScsIG51bGwsIG51bGwsIG51bGwsICcwIDAgNjYuNjY2JSddLFxyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94LCBDb250YWluZXIsIEJ1dHRvbiB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XHJcbmltcG9ydCBCbG9ja1RpdGxlIGZyb20gJ2NvbXBvbmVudHMvYmxvY2stdGl0bGUnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnY29tcG9uZW50cy9pbWFnZSc7XHJcbmltcG9ydCB7IEFpRmlsbERvbGxhckNpcmNsZSwgQWlGaWxsUGllQ2hhcnQgfSBmcm9tICdyZWFjdC1pY29ucy9haSc7XHJcbmltcG9ydCB7IEZhQnJpZWZjYXNlLCBGYUNvZyB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuaW1wb3J0IHRhYkltYWdlMSBmcm9tICdhc3NldHMvdGFiLWltYWdlLTEucG5nJztcclxuaW1wb3J0IGRvdFBhdHRlcm4gZnJvbSAnYXNzZXRzL2RvdC1wYXR0ZXJuLnN2Zyc7XHJcblxyXG5jb25zdCBGZWF0dXJlZCA9ICgpID0+IHtcclxuICBjb25zdCBbdGFiLCBzZXRUYWJdID0gdXNlU3RhdGUoe1xyXG4gICAgYWN0aXZlOiAnYnVkZ2V0JyxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVGFiID0gKHRhYikgPT4ge1xyXG4gICAgaWYgKHRhYiA9PT0gJ2J1ZGdldCcpIHtcclxuICAgICAgc2V0VGFiKHtcclxuICAgICAgICAuLi50YWIsXHJcbiAgICAgICAgYWN0aXZlOiAnYnVkZ2V0JyxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGFiID09PSAnYWRqdXN0Jykge1xyXG4gICAgICBzZXRUYWIoe1xyXG4gICAgICAgIC4uLnRhYixcclxuICAgICAgICBhY3RpdmU6ICdhZGp1c3QnLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmICh0YWIgPT09ICdyZXBvcnQnKSB7XHJcbiAgICAgIHNldFRhYih7XHJcbiAgICAgICAgLi4udGFiLFxyXG4gICAgICAgIGFjdGl2ZTogJ3JlcG9ydCcsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHRhYiA9PT0gJ2NyZWF0ZScpIHtcclxuICAgICAgc2V0VGFiKHtcclxuICAgICAgICAuLi50YWIsXHJcbiAgICAgICAgYWN0aXZlOiAnY3JlYXRlJyxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBhcz1cInNlY3Rpb25cIiBzeD17c3R5bGVzLmZlYXR1cmVkfT5cclxuICAgICAgPENvbnRhaW5lciBzeD17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPEJsb2NrVGl0bGVcclxuICAgICAgICAgIHRpdGxlPVwiV2hhdCB0aGUgZmVhdHVyZXMgb2YgcHJvZHVjdFwiXHJcbiAgICAgICAgICB0ZXh0PVwiSW50cm9kdWNpbmcgYWxsIHNjcmVlbiBkZXRhaWxzXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy50YWJCdXR0b25Ub3BXcmFwcGVyfT5cclxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy50YWJCdXR0b25XcmFwcGVyfT5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVRhYignYnVkZ2V0Jyl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHt0YWIuYWN0aXZlID09PSAnYnVkZ2V0JyA/ICdhY3RpdmUnIDogJyd9YH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxBaUZpbGxEb2xsYXJDaXJjbGUgLz5cclxuICAgICAgICAgICAgICBCdWRnZXQgT3ZlcnZpZXdcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVUYWIoJ2FkanVzdCcpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7dGFiLmFjdGl2ZSA9PT0gJ2FkanVzdCcgPyAnYWN0aXZlJyA6ICcnfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8RmFDb2cgLz5cclxuICAgICAgICAgICAgICBDcmVhdGUgJiBhZGp1c3RcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVUYWIoJ3JlcG9ydCcpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7dGFiLmFjdGl2ZSA9PT0gJ3JlcG9ydCcgPyAnYWN0aXZlJyA6ICcnfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8QWlGaWxsUGllQ2hhcnQgLz5cclxuICAgICAgICAgICAgICBWaWV3IFJlcG9ydHNcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVUYWIoJ2NyZWF0ZScpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7dGFiLmFjdGl2ZSA9PT0gJ2NyZWF0ZScgPyAnYWN0aXZlJyA6ICcnfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8RmFCcmllZmNhc2UgLz5cclxuICAgICAgICAgICAgICBDcmVhdGUgJiBhZGp1c3RcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMudGFiQ29udGVudH0+XHJcbiAgICAgICAgICB7dGFiLmFjdGl2ZSA9PT0gJ2J1ZGdldCcgJiYgKFxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXt0YWJJbWFnZTF9IGFsdD1cInRhYiBpbWFnZVwiIGNsYXNzTmFtZT1cInRhYkltYWdlXCIgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7dGFiLmFjdGl2ZSA9PT0gJ2NyZWF0ZScgJiYgKFxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXt0YWJJbWFnZTF9IGFsdD1cInRhYiBpbWFnZVwiIGNsYXNzTmFtZT1cInRhYkltYWdlXCIgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7dGFiLmFjdGl2ZSA9PT0gJ2FkanVzdCcgJiYgKFxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXt0YWJJbWFnZTF9IGFsdD1cInRhYiBpbWFnZVwiIGNsYXNzTmFtZT1cInRhYkltYWdlXCIgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7dGFiLmFjdGl2ZSA9PT0gJ3JlcG9ydCcgJiYgKFxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXt0YWJJbWFnZTF9IGFsdD1cInRhYiBpbWFnZVwiIGNsYXNzTmFtZT1cInRhYkltYWdlXCIgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVkO1xyXG5jb25zdCBmYWRlSW4gPSBrZXlmcmFtZXNgXHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBmZWF0dXJlZDoge1xyXG4gICAgcHQ6IFsnODBweCcsIG51bGwsIG51bGwsIG51bGwsICc4MHB4JywgbnVsbCwgJzEwMHB4J10sXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjlGQUZDJyxcclxuICB9LFxyXG4gIGNvbnRhaW5lcjoge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICB0b3A6ICcxNTBweCcsXHJcbiAgICBtdDogJy0xNTBweCcsXHJcbiAgfSxcclxuICB0YWJCdXR0b25Ub3BXcmFwcGVyOiB7XHJcbiAgICBvdmVyZmxvd1k6IFsnaGlkZGVuJywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJ2luaGVyaXQnXSxcclxuICAgIG92ZXJmbG93WDogWydhdXRvJywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJ2luaGVyaXQnXSxcclxuICB9LFxyXG4gIHRhYkJ1dHRvbldyYXBwZXI6IHtcclxuICAgIHdpZHRoOiBbJzcwMHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJzEwMCUnXSxcclxuICAgIG14OiBbJ2F1dG8nLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnMCddLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQgcmdiYSgxLDcsMTMsLjEpJyxcclxuICAgIG1iOiAnMzVweCcsXHJcbiAgICBidXR0b246IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgcGI6IFsnMTVweCcsIG51bGwsIG51bGwsIG51bGwsICczNXB4J10sXHJcbiAgICAgIHB4OiBbJzE1cHgnLCBudWxsLCBudWxsLCBudWxsLCAnMzBweCddLFxyXG4gICAgICBmbGV4U2hyaW5rOiAnMCcsXHJcbiAgICAgIGJvcmRlcjogMCxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDAsMCwwKScsXHJcbiAgICAgIGNvbG9yOiAnIzBGMjEzNycsXHJcbiAgICAgIGZvbnRTaXplOiBbJzE0cHgnLCBudWxsLCBudWxsLCBudWxsLCAnMThweCddLFxyXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEsXHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDUwMG1zIGVhc2UnLFxyXG4gICAgICBzdmc6IHtcclxuICAgICAgICBmb250U2l6ZTogWycxOHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzMwcHgnXSxcclxuICAgICAgICBjb2xvcjogJyNBREJERDAnLFxyXG4gICAgICAgIG9wYWNpdHk6IDAuNyxcclxuICAgICAgICBtcjogJzE1cHgnLFxyXG4gICAgICAgIHRyYW5zaXRpb246ICdhbGwgNTAwbXMgZWFzZScsXHJcbiAgICAgIH0sXHJcbiAgICAgICcmOmhvdmVyLCAmLmFjdGl2ZSc6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLDApJyxcclxuICAgICAgICBjb2xvcjogJyMwRjIxMzcnLFxyXG4gICAgICAgIHN2Zzoge1xyXG4gICAgICAgICAgY29sb3I6ICcjMEYyMTM3JyxcclxuICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnJjo6YmVmb3JlJzoge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMSwxKScsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgJyY6OmJlZm9yZSc6IHtcclxuICAgICAgICBjb250ZW50OiBcIicnXCIsXHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgYm90dG9tOiAnLTJweCcsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzBGMjEzNycsXHJcbiAgICAgICAgbGVmdDogMCxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIGhlaWdodDogJzNweCcsXHJcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMCwxKScsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSA1MDBtcyBlYXNlJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICB0YWJDb250ZW50OiB7XHJcbiAgICBtaW5IZWlnaHQ6IFsnMTkwcHgnLCBudWxsLCAnMzAwcHgnLCAnMzg1cHgnLCBudWxsLCAnNjAwcHgnXSxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgJyY6OmJlZm9yZSc6IHtcclxuICAgICAgY29udGVudDogXCInJ1wiLFxyXG4gICAgICB3aWR0aDogJzMwMnB4JyxcclxuICAgICAgaGVpZ2h0OiAnMzQ3cHgnLFxyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtkb3RQYXR0ZXJufSlgLFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgYm90dG9tOiAnLTMwcHgnLFxyXG4gICAgICByaWdodDogJy00MHB4JyxcclxuICAgICAgZGlzcGxheTogWydub25lJywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJ2Jsb2NrJ10sXHJcbiAgICB9LFxyXG4gICAgJy50YWJJbWFnZSc6IHtcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIGFuaW1hdGlvbjogYCR7ZmFkZUlufSAwLjhzIGxpbmVhcmAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCwgQ29udGFpbmVyLCBGbGV4LCBJbWFnZSwgVGV4dCwgSGVhZGluZyB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IEphY2twb3RDYXJkIGZyb20gJ2NvbXBvbmVudHMvY2FyZHMvamFja3BvdC1jYXJkJztcclxuaW1wb3J0IGphY2twb3RJbWFnZSBmcm9tICdhc3NldHMvamFja3BvdC5wbmcnO1xyXG5pbXBvcnQgamFja3BvdEltYWdlMSBmcm9tICdhc3NldHMvamFja3BvdC0xLTEucG5nJztcclxuaW1wb3J0IGphY2twb3RJbWFnZTIgZnJvbSAnYXNzZXRzL2phY2twb3QtMS0yLnBuZyc7XHJcblxyXG5jb25zdCBKQUNLUE9UX0RBVEEgPSBbXHJcbiAge1xyXG4gICAgaW1hZ2U6IGphY2twb3RJbWFnZTEsXHJcbiAgICB0ZXh0OlxyXG4gICAgICAnU21hcnQgYXV0b21hdGlvbiBvZiB0cmFkZSB3aXRoIDI0LzUgc2NhbHBpbmcgc3RyYXRlZ3kuLi4nLFxyXG4gICAgaGVhZGluZzogJ1NtYXJ0IEZlYXR1cmVzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiBqYWNrcG90SW1hZ2UyLFxyXG4gICAgdGV4dDpcclxuICAgICAgJ05ldmVyIGxvc3MgdHJhZGVzIGFnYWluLCBvbmUtVGltZSBwYXltZW50LCBMaWZlLXRpbWUgUm9ib3QgJyxcclxuICAgIGhlYWRpbmc6ICdUcmFkZSBTZWN1cml0eSAnLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBKYWNrcG90ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGFzPVwic2VjdGlvblwiIHN4PXtzdHlsZXMuamFja3BvdH0+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPEZsZXggc3g9e3N0eWxlcy5mbGV4fT5cclxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5pbWFnZX0+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2phY2twb3RJbWFnZX0gYWx0PVwiamFja3BvdCBpbWFnZVwiIC8+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLmhlYWRpbmd9PlxyXG4gICAgICAgICAgICAgIDxUZXh0IGFzPVwic3BhblwiPkNvcmUgZmVhdHVyZXM8L1RleHQ+XHJcbiAgICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoM1wiPkFJIHRyYWRpbmcgUm9ib3Qgd2l0aCBncmVhdCByZXN1bHRzLi4uPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLmphY2twb3RDYXJkQm94fT5cclxuICAgICAgICAgICAgICB7SkFDS1BPVF9EQVRBLm1hcCgoeyBpbWFnZSwgaGVhZGluZywgdGV4dCB9LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPEphY2twb3RDYXJkXHJcbiAgICAgICAgICAgICAgICAgIGltYWdlPXtpbWFnZX1cclxuICAgICAgICAgICAgICAgICAgaGVhZGluZz17aGVhZGluZ31cclxuICAgICAgICAgICAgICAgICAgdGV4dD17dGV4dH1cclxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9GbGV4PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBKYWNrcG90O1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGphY2twb3Q6IHtcclxuICAgIHB0OiBbJzY1cHgnLCBudWxsLCBudWxsLCBudWxsLCAnODVweCcsIG51bGwsICcxMjVweCddLFxyXG4gIH0sXHJcbiAgZmxleDoge1xyXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICB9LFxyXG4gIGltYWdlOiB7XHJcbiAgICBmbGV4OiBbJzAgMCAxMDAlJywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJzAgMCA2Mi41JSddLFxyXG4gICAgaW1nOiB7XHJcbiAgICAgIG1heFdpZHRoOiBbJzEwMCUnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnbm9uZSddLFxyXG4gICAgICBmbG9hdDogJ3JpZ2h0JyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjb250ZW50OiB7XHJcbiAgICBmbGV4OiBbJzAgMCAxMDAlJywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJzAgMCAzNy41JSddLFxyXG4gIH0sXHJcbiAgaGVhZGluZzoge1xyXG4gICAgbWI6ICczMHB4JyxcclxuICAgIHB0OiAnNjBweCcsXHJcbiAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJ2xlZnQnXSxcclxuICAgIHBsOiBbJzAnLCBudWxsLCBudWxsLCAnMzBweCddLFxyXG4gICAgbWF4V2lkdGg6IFsnODAlJywgbnVsbCwgbnVsbCwgJzEwMCUnXSxcclxuICAgIG14OiBbJ2F1dG8nLCBudWxsLCBudWxsLCAnMCddLFxyXG4gICAgc3Bhbjoge1xyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICBmb250U2l6ZTogJzE4cHgnLFxyXG4gICAgICBjb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEsXHJcbiAgICAgIG1iOiAnMjBweCcsXHJcbiAgICB9LFxyXG4gICAgaDM6IHtcclxuICAgICAgY29sb3I6ICcjMEYyMTM3JyxcclxuICAgICAgZm9udFNpemU6IFsnMjNweCcsIG51bGwsIG51bGwsIG51bGwsICczMHB4JywgJzM2cHgnLCAnNDRweCddLFxyXG4gICAgICBtYXhXaWR0aDogWycxMDAlJywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJzkwJScsICcxMDAlJ10sXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgICAgbGV0dGVyU3BhY2luZzogJy0xLjVweCcsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMzYsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgamFja3BvdENhcmRCb3g6IHtcclxuICAgIGRpc3BsYXk6IFsnZ3JpZCcsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICdibG9jayddLFxyXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogWycxZnInLCBudWxsLCBudWxsLCAnMWZyIDFmciddLFxyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XHJcbmltcG9ydCB7IEJveCwgQ29udGFpbmVyLCBHcmlkLCBCdXR0b24sIFRleHQgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBCbG9ja1RpdGxlIGZyb20gJ2NvbXBvbmVudHMvYmxvY2stdGl0bGUnO1xyXG5pbXBvcnQgUHJpY2VDYXJkIGZyb20gJ2NvbXBvbmVudHMvY2FyZHMvcHJpY2UtY2FyZCc7XHJcbmltcG9ydCBwcmljZUljb24xIGZyb20gJ2Fzc2V0cy9wcmljZS11c2VyLTEtMS5zdmcnO1xyXG5pbXBvcnQgcHJpY2VJY29uMiBmcm9tICdhc3NldHMvcHJpY2UtdXNlci0xLTIuc3ZnJztcclxuXHJcbmNvbnN0IFBSSUNFX01PTlRITFlfREFUQSA9IFtcclxuICB7XHJcbiAgICByZWNvbW1lbmRlZDogbnVsbCxcclxuICAgIHRpdGxlOiAnRm9yIFRlYW0gcGFjaycsXHJcbiAgICBpY29uOiBwcmljZUljb24xLFxyXG4gICAgYW1vdW50OiAnMjkuOTkvbW8nLFxyXG4gICAgb3B0aW9uczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgc3RhdHVzOiB0cnVlLFxyXG4gICAgICAgIGxhYmVsOiAnVWx0aW1hdGUgYWNjZXNzIHRvIGFsbCBjb3Vyc2UsIGV4ZXJjaXNlcyBhbmQgYXNzZXNzbWVudHMnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgc3RhdHVzOiB0cnVlLFxyXG4gICAgICAgIGxhYmVsOlxyXG4gICAgICAgICAgJ0ZyZWUgYWNjZXNzIGZvciBhbGwga2luZCBvZiBleGVyY2lzZSBjb3JyZWN0aW9ucyB3aXRoIGRvd25sb2Fkcy4nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgc3RhdHVzOiB0cnVlLFxyXG4gICAgICAgIGxhYmVsOiAnVG90YWwgYXNzZXNzbWVudCBjb3JyZWN0aW9ucyB3aXRoIGZyZWUgZG93bmxvYWQgYWNjZXNzIHN5c3RlbScsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBzdGF0dXM6IGZhbHNlLFxyXG4gICAgICAgIGxhYmVsOiAnVW5saW1pdGVkIGRvd25sb2FkIG9mIGNvdXJzZXMgb24gdGhlIG1vYmlsZSBhcHAgY29udGVudHMnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgc3RhdHVzOiBmYWxzZSxcclxuICAgICAgICBsYWJlbDogJ0Rvd25sb2FkIGFuZCBwcmludCBjb3Vyc2VzIGFuZCBleGVyY2lzZXMgaW4gUERGJyxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICByZWNvbW1lbmRlZDogJ1JlY29tbWVuZGVkJyxcclxuICAgIHRpdGxlOiAnRm9yIE9yZ2FuaXphdGlvbiBwYWNrJyxcclxuICAgIGljb246IHByaWNlSWNvbjIsXHJcbiAgICBhbW91bnQ6ICc0OS45OS9tbycsXHJcbiAgICBvcHRpb25zOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBzdGF0dXM6IHRydWUsXHJcbiAgICAgICAgbGFiZWw6ICdVbHRpbWF0ZSBhY2Nlc3MgdG8gYWxsIGNvdXJzZSwgZXhlcmNpc2VzIGFuZCBhc3Nlc3NtZW50cycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBzdGF0dXM6IHRydWUsXHJcbiAgICAgICAgbGFiZWw6XHJcbiAgICAgICAgICAnRnJlZSBhY2Nlc3MgZm9yIGFsbCBraW5kIG9mIGV4ZXJjaXNlIGNvcnJlY3Rpb25zIHdpdGggZG93bmxvYWRzLicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBzdGF0dXM6IHRydWUsXHJcbiAgICAgICAgbGFiZWw6ICdUb3RhbCBhc3Nlc3NtZW50IGNvcnJlY3Rpb25zIHdpdGggZnJlZSBkb3dubG9hZCBhY2Nlc3Mgc3lzdGVtJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHN0YXR1czogdHJ1ZSxcclxuICAgICAgICBsYWJlbDogJ1VubGltaXRlZCBkb3dubG9hZCBvZiBjb3Vyc2VzIG9uIHRoZSBtb2JpbGUgYXBwIGNvbnRlbnRzJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHN0YXR1czogdHJ1ZSxcclxuICAgICAgICBsYWJlbDogJ0Rvd25sb2FkIGFuZCBwcmludCBjb3Vyc2VzIGFuZCBleGVyY2lzZXMgaW4gUERGJyxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IFBSSUNFX1lFQVJMWV9EQVRBID0gW1xyXG4gIHtcclxuICAgIHJlY29tbWVuZGVkOiBudWxsLFxyXG4gICAgdGl0bGU6ICdGb3IgVGVhbSBwYWNrJyxcclxuICAgIGljb246IHByaWNlSWNvbjEsXHJcbiAgICBhbW91bnQ6ICc5OS45OS95cicsXHJcbiAgICBvcHRpb25zOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBzdGF0dXM6IHRydWUsXHJcbiAgICAgICAgbGFiZWw6ICdVbHRpbWF0ZSBhY2Nlc3MgdG8gYWxsIGNvdXJzZSwgZXhlcmNpc2VzIGFuZCBhc3Nlc3NtZW50cycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBzdGF0dXM6IHRydWUsXHJcbiAgICAgICAgbGFiZWw6XHJcbiAgICAgICAgICAnRnJlZSBhY2Nlc3MgZm9yIGFsbCBraW5kIG9mIGV4ZXJjaXNlIGNvcnJlY3Rpb25zIHdpdGggZG93bmxvYWRzLicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBzdGF0dXM6IHRydWUsXHJcbiAgICAgICAgbGFiZWw6ICdUb3RhbCBhc3Nlc3NtZW50IGNvcnJlY3Rpb25zIHdpdGggZnJlZSBkb3dubG9hZCBhY2Nlc3Mgc3lzdGVtJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHN0YXR1czogZmFsc2UsXHJcbiAgICAgICAgbGFiZWw6ICdVbmxpbWl0ZWQgZG93bmxvYWQgb2YgY291cnNlcyBvbiB0aGUgbW9iaWxlIGFwcCBjb250ZW50cycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBzdGF0dXM6IGZhbHNlLFxyXG4gICAgICAgIGxhYmVsOiAnRG93bmxvYWQgYW5kIHByaW50IGNvdXJzZXMgYW5kIGV4ZXJjaXNlcyBpbiBQREYnLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHJlY29tbWVuZGVkOiAnUmVjb21tZW5kZWQnLFxyXG4gICAgdGl0bGU6ICdGb3IgT3JnYW5pemF0aW9uIHBhY2snLFxyXG4gICAgaWNvbjogcHJpY2VJY29uMixcclxuICAgIGFtb3VudDogJzE5OS45OS95cicsXHJcbiAgICBvcHRpb25zOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBzdGF0dXM6IHRydWUsXHJcbiAgICAgICAgbGFiZWw6ICdVbHRpbWF0ZSBhY2Nlc3MgdG8gYWxsIGNvdXJzZSwgZXhlcmNpc2VzIGFuZCBhc3Nlc3NtZW50cycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBzdGF0dXM6IHRydWUsXHJcbiAgICAgICAgbGFiZWw6XHJcbiAgICAgICAgICAnRnJlZSBhY2Nlc3MgZm9yIGFsbCBraW5kIG9mIGV4ZXJjaXNlIGNvcnJlY3Rpb25zIHdpdGggZG93bmxvYWRzLicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBzdGF0dXM6IHRydWUsXHJcbiAgICAgICAgbGFiZWw6ICdUb3RhbCBhc3Nlc3NtZW50IGNvcnJlY3Rpb25zIHdpdGggZnJlZSBkb3dubG9hZCBhY2Nlc3Mgc3lzdGVtJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHN0YXR1czogdHJ1ZSxcclxuICAgICAgICBsYWJlbDogJ1VubGltaXRlZCBkb3dubG9hZCBvZiBjb3Vyc2VzIG9uIHRoZSBtb2JpbGUgYXBwIGNvbnRlbnRzJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHN0YXR1czogdHJ1ZSxcclxuICAgICAgICBsYWJlbDogJ0Rvd25sb2FkIGFuZCBwcmludCBjb3Vyc2VzIGFuZCBleGVyY2lzZXMgaW4gUERGJyxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IFByaWNpbmcgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3BsYW4sIHNldFBsYW5dID0gdXNlU3RhdGUoe1xyXG4gICAgYWN0aXZlOiAnbW9udGhseScsXHJcbiAgICBwcmljaW5nUGxhbjogUFJJQ0VfTU9OVEhMWV9EQVRBLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVQbGFuID0gKHBsYW4pID0+IHtcclxuICAgIGlmIChwbGFuID09PSAnbW9udGhseScpIHtcclxuICAgICAgc2V0UGxhbih7XHJcbiAgICAgICAgLi4ucGxhbixcclxuICAgICAgICBhY3RpdmU6ICdtb250aGx5JyxcclxuICAgICAgICBwcmljaW5nUGxhbjogUFJJQ0VfTU9OVEhMWV9EQVRBLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChwbGFuID09PSAneWVhcmx5Jykge1xyXG4gICAgICBzZXRQbGFuKHtcclxuICAgICAgICAuLi5wbGFuLFxyXG4gICAgICAgIGFjdGl2ZTogJ3llYXJseScsXHJcbiAgICAgICAgcHJpY2luZ1BsYW46IFBSSUNFX1lFQVJMWV9EQVRBLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGFzPVwic2VjdGlvblwiIGlkPVwicHJpY2luZ1wiIHN4PXtzdHlsZXMucHJpY2luZ30+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPEJsb2NrVGl0bGVcclxuICAgICAgICAgIHRpdGxlPVwiV2hhdCBkZWFsIHN1aXQgeW91IHBlcmZlY3RcIlxyXG4gICAgICAgICAgdGV4dD1cIk1lZXQgb3VyIHByaWNpbmcgcGxhblwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuYnRuV3JhcH0+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVBsYW4oJ21vbnRobHknKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwbGFuLmFjdGl2ZSA9PT0gJ21vbnRobHknID8gJ2FjdGl2ZScgOiAnJ31gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBNb250aGx5IFBsYW5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQbGFuKCd5ZWFybHknKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwbGFuLmFjdGl2ZSA9PT0gJ3llYXJseScgPyAnYWN0aXZlJyA6ICcnfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEFubnVhbCBQbGFuXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8R3JpZCBzeD17c3R5bGVzLmdyaWR9PlxyXG4gICAgICAgICAge3BsYW4ucHJpY2luZ1BsYW4ubWFwKChwcmljZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPFByaWNlQ2FyZCBkYXRhPXtwcmljZX0ga2V5PXtgJHtwbGFuLmFjdGl2ZX0tY2FyZC0ta2V5JHtpbmRleH1gfSAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmljaW5nO1xyXG5cclxuY29uc3QgZmFkZUluID0ga2V5ZnJhbWVzYFxyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbmA7XHJcbmNvbnN0IGZhZGVJbjIgPSBrZXlmcmFtZXNgXHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHByaWNpbmc6IHtcclxuICAgIHB0OiBbJzIwMHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzIwMHB4JywgbnVsbCwgJzI0MHB4J10sXHJcbiAgICBwYjogWyc4MHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzgwcHgnLCAnMTAwcHgnLCAnMTQwcHgnXSxcclxuICB9LFxyXG4gIGJ0bldyYXA6IHtcclxuICAgIHdpZHRoOiAnMzAycHgnLFxyXG4gICAgaGVpZ2h0OiAnNjBweCcsXHJcbiAgICBtdDogWyctMjBweCcsIG51bGwsIG51bGwsICcwcHgnXSxcclxuICAgIG1iOiBbJzQwcHgnLCBudWxsLCBudWxsLCAnNjBweCddLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI0Y3RjhGQicsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gICAgZGlzcGxheTogJ2dyaWQnLFxyXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJzFmciAxZnInLFxyXG4gICAgcDogJzdweCcsXHJcbiAgICBteDogJ2F1dG8nLFxyXG4gICAgYnV0dG9uOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsMCknLFxyXG4gICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gICAgICBjb2xvcjogJyMwRjIxMzcnLFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuMjRweCcsXHJcbiAgICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgICAgZm9udEZhbWlseTogJ0RNIFNhbnMnLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDUwMG1zIGVhc2UnLFxyXG4gICAgICAnJi5hY3RpdmUnOiB7XHJcbiAgICAgICAgYm94U2hhZG93OiAnMHB4IDNweCAzLjhweCByZ2JhKDM4LCA3OCwgMTE4LCAwLjEpJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcclxuICAgICAgfSxcclxuICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDAsMCwwKScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZ3JpZDoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIG1heFdpZHRoOiAnOTYwcHgnLFxyXG4gICAgbXg6IFsnYXV0byddLFxyXG4gICAgZ3JpZEdhcDogJzMwcHgnLFxyXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogWycxZnInLCBudWxsLCBudWxsLCAnMWZyIDFmciddLFxyXG4gICAgJy5wcmljZUNhcmQnOiB7XHJcbiAgICAgICcucHJpY2VIZWFkZXInOiB7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBgJHtmYWRlSW59IDAuOHMgbGluZWFyYCxcclxuICAgICAgfSxcclxuICAgICAgJ3VsID4gbGknOiB7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBgJHtmYWRlSW4yfSAwLjdzIGxpbmVhcmAsXHJcbiAgICAgIH0sXHJcbiAgICAgICcucHJpY2VBbW91bnQnOiB7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBgJHtmYWRlSW59IDAuOXMgbGluZWFyYCxcclxuICAgICAgfSxcclxuICAgICAgJy5wcmljZUJ1dHRvbic6IHtcclxuICAgICAgICBhbmltYXRpb246IGAke2ZhZGVJbjJ9IDAuN3MgbGluZWFyYCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94LCBDb250YWluZXIsIEdyaWQgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBCbG9ja1RpdGxlIGZyb20gJ2NvbXBvbmVudHMvYmxvY2stdGl0bGUnO1xyXG5pbXBvcnQgU2VydmljZUNhcmQgZnJvbSAnY29tcG9uZW50cy9jYXJkcy9zZXJ2aWNlLWNhcmQnO1xyXG5pbXBvcnQgc2VydmljZUltYWdlMSBmcm9tICdhc3NldHMvc2VydmljZS0xLnBuZyc7XHJcbmltcG9ydCBzZXJ2aWNlSW1hZ2UyIGZyb20gJ2Fzc2V0cy9zZXJ2aWNlLTIucG5nJztcclxuaW1wb3J0IHNlcnZpY2VJbWFnZTMgZnJvbSAnYXNzZXRzL3NlcnZpY2UtMy5wbmcnO1xyXG5pbXBvcnQgc2VydmljZUltYWdlNCBmcm9tICdhc3NldHMvc2VydmljZS00LnBuZyc7XHJcbmltcG9ydCBzZXJ2aWNlSW1hZ2U1IGZyb20gJ2Fzc2V0cy9zZXJ2aWNlLTUucG5nJztcclxuaW1wb3J0IHNlcnZpY2VJbWFnZTYgZnJvbSAnYXNzZXRzL3NlcnZpY2UtNi5wbmcnO1xyXG5cclxuY29uc3QgU0VSVklDRVNfREFUQSA9IFtcclxuICB7XHJcbiAgICBpbWFnZTogc2VydmljZUltYWdlMSxcclxuICAgIHRleHQ6XHJcbiAgICAgICdHZXQgeW91ciBpbmZvIHRlc3RzIGRlbGl2ZXJlZCBhdCBob21lIGNvbGxlY3QgYSBzYW1wbGUgZnJvbSB0aGUgeW91ciBwcm9ncmVzcyB0ZXN0cy4nLFxyXG4gICAgaGVhZGluZzogJzNEIG1vZGVsaW5nICYgYXJ0JyxcclxuICAgIHBhdGg6ICcjJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiBzZXJ2aWNlSW1hZ2UyLFxyXG4gICAgdGV4dDpcclxuICAgICAgJ0dldCB5b3VyIGluZm8gdGVzdHMgZGVsaXZlcmVkIGF0IGhvbWUgY29sbGVjdCBhIHNhbXBsZSBmcm9tIHRoZSB5b3VyIHByb2dyZXNzIHRlc3RzLicsXHJcbiAgICBoZWFkaW5nOiAnRGlnaXRhbCBwcm9tb3Rpb24nLFxyXG4gICAgcGF0aDogJyMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6IHNlcnZpY2VJbWFnZTMsXHJcbiAgICB0ZXh0OlxyXG4gICAgICAnR2V0IHlvdXIgaW5mbyB0ZXN0cyBkZWxpdmVyZWQgYXQgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gdGhlIHlvdXIgcHJvZ3Jlc3MgdGVzdHMuJyxcclxuICAgIGhlYWRpbmc6ICdCdXNpbmVzcyBFbnRlcnByaXNlJyxcclxuICAgIHBhdGg6ICcjJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiBzZXJ2aWNlSW1hZ2U0LFxyXG4gICAgdGV4dDpcclxuICAgICAgJ0dldCB5b3VyIGluZm8gdGVzdHMgZGVsaXZlcmVkIGF0IGhvbWUgY29sbGVjdCBhIHNhbXBsZSBmcm9tIHRoZSB5b3VyIHByb2dyZXNzIHRlc3RzLicsXHJcbiAgICBoZWFkaW5nOiAnTWFya2V0aW5nICYgYWR2ZXJ0aXNpbmcnLFxyXG4gICAgcGF0aDogJyMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6IHNlcnZpY2VJbWFnZTUsXHJcbiAgICB0ZXh0OlxyXG4gICAgICAnR2V0IHlvdXIgaW5mbyB0ZXN0cyBkZWxpdmVyZWQgYXQgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gdGhlIHlvdXIgcHJvZ3Jlc3MgdGVzdHMuJyxcclxuICAgIGhlYWRpbmc6ICdVbHRpbWF0ZSBkZXZlbG9wbWVudCcsXHJcbiAgICBwYXRoOiAnIycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogc2VydmljZUltYWdlNixcclxuICAgIHRleHQ6XHJcbiAgICAgICdHZXQgeW91ciBpbmZvIHRlc3RzIGRlbGl2ZXJlZCBhdCBob21lIGNvbGxlY3QgYSBzYW1wbGUgZnJvbSB0aGUgeW91ciBwcm9ncmVzcyB0ZXN0cy4nLFxyXG4gICAgaGVhZGluZzogJ09ubGluZSBzdXBwb3J0JyxcclxuICAgIHBhdGg6ICcjJyxcclxuICB9LFxyXG5dO1xyXG5jb25zdCBTZXJ2aWNlcyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBhcz1cInNlY3Rpb25cIiBpZD1cInNlcnZpY2VzXCIgc3g9e3N0eWxlcy5zZXJ2aWNlc30+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPEJsb2NrVGl0bGVcclxuICAgICAgICAgIHRpdGxlPVwiV2hhdCB0aGUgZmVhdHVyZXMgb2YgcHJvZHVjdFwiXHJcbiAgICAgICAgICB0ZXh0PVwiRmVhdHVyZXMgYXJlIGhpZ2hsaWdodGVkIGhlcmVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEdyaWQgc3g9e3N0eWxlcy5ncmlkfT5cclxuICAgICAgICAgIHtTRVJWSUNFU19EQVRBLm1hcCgoeyBpbWFnZSwgdGV4dCwgaGVhZGluZywgcGF0aCB9LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8U2VydmljZUNhcmRcclxuICAgICAgICAgICAgICBpbWFnZT17aW1hZ2V9XHJcbiAgICAgICAgICAgICAgdGV4dD17dGV4dH1cclxuICAgICAgICAgICAgICBoZWFkaW5nPXtoZWFkaW5nfVxyXG4gICAgICAgICAgICAgIHBhdGg9e3BhdGh9XHJcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VydmljZXM7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgc2VydmljZXM6IHtcclxuICAgIHB0OiBbJzgwcHgnLCBudWxsLCBudWxsLCBudWxsLCAnODBweCcsIG51bGwsICcxMDBweCddLFxyXG4gIH0sXHJcbiAgZ3JpZDoge1xyXG4gICAgZ3JpZEdhcDogJzMwcHgnLFxyXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogWycxZnInLCBudWxsLCBudWxsLCAnMWZyIDFmcicsIG51bGwsICcxZnIgMWZyIDFmciddLFxyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgSW5wdXQsIEJveCwgQ29udGFpbmVyLCBIZWFkaW5nLCBUZXh0IH0gZnJvbSAndGhlbWUtdWknO1xyXG5cclxuY29uc3QgU3Vic2NyaWJlID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGFzPVwic2VjdGlvblwiIHN4PXtzdHlsZXMuc3Vic2NyaWJlfT5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8SGVhZGluZyBhcz1cImgzXCI+U3Vic2NyaWJlIHRvIGdldCBub3RpZmllZCBhYm91dCBldmVudDwvSGVhZGluZz5cclxuICAgICAgICA8VGV4dCBhcz1cInBcIj5cclxuICAgICAgICAgIEJ5IHN1YnNjcmliaW5nIHdpdGggeW91ciBtYWlsLCB5b3Ugd2lsbCBhY2NlcHQgb3VyIHByaXZhY3kgcG9saWN5XHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDxCb3ggYXM9XCJmb3JtXCIgc3g9e3N0eWxlcy5mb3JtfT5cclxuICAgICAgICAgIDxCb3ggYXM9XCJsYWJlbFwiIGh0bWxGb3I9XCJzdWJzY3JpYmVFbWFpbFwiIHZhcmlhbnQ9XCJzdHlsZXMuc3JPbmx5XCI+XHJcbiAgICAgICAgICAgIEVtYWlsXHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZW1haWxcIlxyXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBpZD1cInN1YnNjcmliZUVtYWlsXCJcclxuICAgICAgICAgICAgc3g9e3N0eWxlcy5pbnB1dH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBzeD17c3R5bGVzLmJ1dHRvbn0+XHJcbiAgICAgICAgICAgIFN1YnNjcmliZSB1c1xyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN1YnNjcmliZTtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBzdWJzY3JpYmU6IHtcclxuICAgIHB5OiBbJzgwcHgnLCBudWxsLCBudWxsLCBudWxsLCAnODBweCcsICcxMDBweCcsICcxNDBweCddLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzAyMDcxOCcsXHJcbiAgICBoMzoge1xyXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICBmb250U2l6ZTogWycyM3B4JywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJzMwcHgnLCAnMzZweCddLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBbMS41LCBudWxsLCBudWxsLCAnMSddLFxyXG4gICAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nOiBbJy0wLjVweCddLFxyXG4gICAgICBtYjogWycwcHgnLCBudWxsLCBudWxsLCAnMTVweCddLFxyXG4gICAgICB3aWR0aDogWyc3MCUnLCBudWxsLCBudWxsLCAnYXV0byddLFxyXG4gICAgICBteDogWydhdXRvJywgbnVsbCwgbnVsbCwgJzAnXSxcclxuICAgIH0sXHJcbiAgICBwOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbJzE2cHgnXSxcclxuICAgICAgY29sb3I6ICcjZmZmJyxcclxuICAgICAgb3BhY2l0eTogJy42JyxcclxuICAgICAgbGV0dGVyU3BhY2luZzogWyctMC41cHgnXSxcclxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgd2lkdGg6IFsnNzAlJywgbnVsbCwgbnVsbCwgJ2F1dG8nXSxcclxuICAgICAgbXg6IFsnYXV0bycsIG51bGwsIG51bGwsICcwJ10sXHJcbiAgICAgIG10OiBbJzEwcHgnLCBudWxsLCBudWxsLCAnMCddLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGZvcm06IHtcclxuICAgIHdpZHRoOiBbJzEwMCUnXSxcclxuICAgIG1heFdpZHRoOiBbJzU1NXB4J10sXHJcbiAgICBteDogWydhdXRvJ10sXHJcbiAgICBkaXNwbGF5OiBbJ2ZsZXgnXSxcclxuICAgIGZsZXhXcmFwOiBbJ3dyYXAnXSxcclxuICAgIG10OiBbJzMwcHgnLCBudWxsLCBudWxsLCBudWxsLCAnNjBweCddLFxyXG4gIH0sXHJcbiAgaW5wdXQ6IHtcclxuICAgIHdpZHRoOiBbJzEwMCUnXSxcclxuICAgIG1heFdpZHRoOiBbJzEwMCUnLCBudWxsLCAnMzcwcHgnLCAnMzgwcHgnXSxcclxuICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICBib3JkZXI6ICdub25lJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsIC4wOCknLFxyXG4gICAgb3V0bGluZTogJ25vbmUnLFxyXG4gICAgY29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LCAuOCknLFxyXG4gICAgZm9udFNpemU6ICcxNnB4JyxcclxuICAgIHBsOiBbJzBweCcsIG51bGwsIG51bGwsICczMHB4J10sXHJcbiAgICBoZWlnaHQ6IFsnNTBweCcsIG51bGwsIG51bGwsICc2MHB4J10sXHJcbiAgICBtcjogWycwcHgnLCBudWxsLCBudWxsLCAnMTVweCddLFxyXG4gICAgdGV4dEFsaWduOiBbJ2NlbnRlcicsIG51bGwsIG51bGwsICdsZWZ0J10sXHJcbiAgfSxcclxuICBidXR0b246IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgIGZvbnRXZWlnaHQ6ICc1MDAnLFxyXG4gICAgZm9udFNpemU6IFsnMThweCddLFxyXG4gICAgY29sb3I6ICcjMDIwNzE4JyxcclxuICAgIGxldHRlclNwYWNpbmc6ICctMC41cHgnLFxyXG4gICAgb3V0bGluZTogJ25vbmUnLFxyXG4gICAgcGFkZGluZzogWycwcHggMzAuNzVweCddLFxyXG4gICAgbWluSGVpZ2h0OiBbJzUwcHgnLCBudWxsLCBudWxsLCAnNjBweCddLFxyXG4gICAgd2lkdGg6IFsnMTAwJScsIG51bGwsIG51bGwsICdhdXRvJ10sXHJcbiAgICBtdDogWycxMHB4JywgbnVsbCwgbnVsbCwgJzAnXSxcclxuICAgIG14OiBbJ2F1dG8nLCBudWxsLCBudWxsLCAnMCddLFxyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgICBvcGFjaXR5OiAnMC44JyxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgU3dpcGVyQ29yZSwgeyBBdXRvcGxheSB9IGZyb20gJ3N3aXBlcic7XHJcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tICdzd2lwZXIvcmVhY3QnO1xyXG5pbXBvcnQgQmxvY2tUaXRsZSBmcm9tICdjb21wb25lbnRzL2Jsb2NrLXRpdGxlJztcclxuaW1wb3J0IFRlc3RpbW9uaWFsc0NhcmQgZnJvbSAnY29tcG9uZW50cy9jYXJkcy90ZXN0aW1vbmlhbC1jYXJkJztcclxuaW1wb3J0IHRlc3RpbW9uaWFsc0ltYWdlMSBmcm9tICdhc3NldHMvdGVzdGltb25pYWwtMS0xLnBuZyc7XHJcbmltcG9ydCB0ZXN0aW1vbmlhbHNJbWFnZTIgZnJvbSAnYXNzZXRzL3Rlc3RpbW9uaWFsLTEtMi5wbmcnO1xyXG5pbXBvcnQgdGVzdGltb25pYWxzSW1hZ2UzIGZyb20gJ2Fzc2V0cy90ZXN0aW1vbmlhbC0xLTMucG5nJztcclxuaW1wb3J0IHRlc3RpbW9uaWFsc0ltYWdlNCBmcm9tICdhc3NldHMvdGVzdGltb25pYWwtMS00LnBuZyc7XHJcbmltcG9ydCB0ZXN0aW1vbmlhbHNJbWFnZTUgZnJvbSAnYXNzZXRzL3Rlc3RpbW9uaWFsLTEtNS5wbmcnO1xyXG5pbXBvcnQgdGVzdGltb25pYWxzSW1hZ2U2IGZyb20gJ2Fzc2V0cy90ZXN0aW1vbmlhbC0xLTYucG5nJztcclxuXHJcblN3aXBlckNvcmUudXNlKFtBdXRvcGxheV0pO1xyXG5cclxuY29uc3QgVEVTVElNT05JQUxTX0RBVEEgPSBbXHJcbiAgW1xyXG4gICAge1xyXG4gICAgICBpbWFnZTogdGVzdGltb25pYWxzSW1hZ2UxLFxyXG4gICAgICB0ZXh0OlxyXG4gICAgICAgICdJIHdvdWxkIGxpa2UgdG8gdGFrZSB0aGlzIG9wcGVydHVuaXR5IHRvIHRoYW5rIFNBIFBsYWNlcyBmb3IgdGhlIGdyZWF0IHNlcnZpY2UgcmVuZGVyZWQgdG8gdXMgYW5kIGluIHBhcnRpY3VsYXIgRXN0ZWxsZS4gWW91IGdvdCBtZSB0aGUgYmVzdCBwbGFjZSBldmVyIGluIGp1c3QgYSBmZXcgbW9tZW50cyBhZnRlciBJIHNwb2tlIHRvIHlvdS4nLFxyXG4gICAgICB1c2VybmFtZTogJ0BoZWxsby5taW1taWUnLFxyXG4gICAgICBuYW1lOiAnTWlubmllIEhvcm4nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaW1hZ2U6IHRlc3RpbW9uaWFsc0ltYWdlMixcclxuICAgICAgdGV4dDpcclxuICAgICAgICAnTWFueSB0aGFua3MgZm9yIHlvdSBraW5kIGFuZCBlZmZpY2llbnQgc2VydmljZS4gSSBoYXZlIGFscmVhZHkgYW5kIHdpbGwgZGVmaW5pdGVseSBjb250aW51ZSB0byByZWNvbW1lbmQgeW91ciBzZXJ2aWNlcyB0byBvdGhlcnMgaW4gdGhlIGZ1dHVyZS4nLFxyXG4gICAgICB1c2VybmFtZTogJ0BtZXJyeW4ubWFubGV5JyxcclxuICAgICAgbmFtZTogJ01lcnJ5biBNYW5sZXknLFxyXG4gICAgfSxcclxuICBdLFxyXG4gIFtcclxuICAgIHtcclxuICAgICAgaW1hZ2U6IHRlc3RpbW9uaWFsc0ltYWdlMyxcclxuICAgICAgdGV4dDpcclxuICAgICAgICAnSSB3b3VsZCBqdXN0IGxpa2UgdG8gY29tcGxpbWVudCBFc3RlbGxlIFBlc3RhbmEuIFNoZSBoYXMgYmVlbiBtb3N0IHByb2Zlc3Npb25hbCBhbmQgZ29uZSB0byBncmVhdCBsZW5ndGhzIHRvIGFzc2lzdCBtZS4gSGVyIHBhdGllbmNlIHdpdGggbWUgYXMgSSBjb250aW51b3VzbHkgY2hhbmdlZCBteSBwbGFucyBpcyB0byBiZSBjb21tZW5kZWQuIEhlciBzZXJ2aWNlIHJlLWFmZmlybXMgd2h5IEkgYWx3YXlzIGNob29zZSB0byBib29rIHRocm91Z2ggYW4gYWdlbmN5IGluc3RlYWQgb2YgZGlyZWN0bHkuIFRoYW5rIHlvdScsXHJcbiAgICAgIHVzZXJuYW1lOiAnQGhpLnZlb25hJyxcclxuICAgICAgbmFtZTogJ1Zlb25hIFdhdHNvbicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpbWFnZTogdGVzdGltb25pYWxzSW1hZ2U0LFxyXG4gICAgICB0ZXh0OlxyXG4gICAgICAgICdJIGhhdmUgc2VsZG9tIGV4cGVyaWVuY2VkIHN1Y2ggYW4gZWZmaWNpZW50IGhlbHAgYW5kIHN1cHBvcnQgbGlrZSBmcm9tIHlvdSEgVGhhbmsgeW91IHNvIG11Y2guIFdlIHdpbGwgZG8gYWxsIHRoZSBib29raW5ncyBkdXJpbmcgdGhlIG5leHQgZmV3IGRheXMgYW5kIEkgd2lsbCByZXZlcnQgdG8geW91IHdpdGggdGhlIGVuZCByZXN1bHQnLFxyXG4gICAgICB1c2VybmFtZTogJ0BoZXkubmt1JyxcclxuICAgICAgbmFtZTogJ1Bhc2VrYSBOa3UnLFxyXG4gICAgfSxcclxuICBdLFxyXG4gIFtcclxuICAgIHtcclxuICAgICAgaW1hZ2U6IHRlc3RpbW9uaWFsc0ltYWdlNSxcclxuICAgICAgdGV4dDpcclxuICAgICAgICAnVGhhbmsgeW91IGZvciBhbGwgeW91ciBoZWxwLiBZb3VyIHNlcnZpY2Ugd2FzIGV4Y2VsbGVudCBhbmQgdmVyeSBGQVNULicsXHJcbiAgICAgIHVzZXJuYW1lOiAnQGNoZXJpY2UubWUnLFxyXG4gICAgICBuYW1lOiAnQ2hlcmljZSBKdXN0aW4nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaW1hZ2U6IHRlc3RpbW9uaWFsc0ltYWdlNixcclxuICAgICAgdGV4dDpcclxuICAgICAgICAnRm9yIG91ciByZWNlbnQgdHJpcCB0byBTLkEuIEkgYm9va2VkIHNldmVyYWwgYWNjb21tb2RhdGlvbiB0aHJ1IFNBIFBsYWNlcy4gSSBqdXN0IHdhbnRlZCB0byB0ZWxsIHlvdSB0aGF0IGV2ZXJ5dGhpbmcgd29ya2VkIG91dCBwZXJmZWN0bHkgd2l0aCBhbGwgdGhlIGJvb2tpbmdzIGFuZCBhbHNvIHlvdXIgYm9va2luZyB3YXMgdmVyeSBxdWljayBhbmQgcHJvZmVzc2lvbmFsLiBJIGhvcGUgSSBoYXZlIHRoZSBvcHBvcnR1bml0eSB0byByZS12aXNpdCBTb3V0aCBBZnJpY2Egc29vbiwgSSB3aWxsIHRoZW4gbWFrZSBteSBib29raW5ncyB3aXRoIHlvdXIgY29tcGFueSBhZ2Fpbi4gSSB3aWxsIGFsc28gcmVjb21tZW5kJyxcclxuICAgICAgdXNlcm5hbWU6ICdAbXlzZWxmLnRoYWlzJyxcclxuICAgICAgbmFtZTogJ1RoYWlzIENhcmJhbGxhbCcsXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgW1xyXG4gICAge1xyXG4gICAgICBpbWFnZTogdGVzdGltb25pYWxzSW1hZ2UxLFxyXG4gICAgICB0ZXh0OlxyXG4gICAgICAgICdJIHdvdWxkIGxpa2UgdG8gdGFrZSB0aGlzIG9wcGVydHVuaXR5IHRvIHRoYW5rIFNBIFBsYWNlcyBmb3IgdGhlIGdyZWF0IHNlcnZpY2UgcmVuZGVyZWQgdG8gdXMgYW5kIGluIHBhcnRpY3VsYXIgRXN0ZWxsZS4gWW91IGdvdCBtZSB0aGUgYmVzdCBwbGFjZSBldmVyIGluIGp1c3QgYSBmZXcgbW9tZW50cyBhZnRlciBJIHNwb2tlIHRvIHlvdS4nLFxyXG4gICAgICB1c2VybmFtZTogJ0BoZWxsby5taW1taWUnLFxyXG4gICAgICBuYW1lOiAnTWlubmllIEhvcm4nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaW1hZ2U6IHRlc3RpbW9uaWFsc0ltYWdlMixcclxuICAgICAgdGV4dDpcclxuICAgICAgICAnTWFueSB0aGFua3MgZm9yIHlvdSBraW5kIGFuZCBlZmZpY2llbnQgc2VydmljZS4gSSBoYXZlIGFscmVhZHkgYW5kIHdpbGwgZGVmaW5pdGVseSBjb250aW51ZSB0byByZWNvbW1lbmQgeW91ciBzZXJ2aWNlcyB0byBvdGhlcnMgaW4gdGhlIGZ1dHVyZS4nLFxyXG4gICAgICB1c2VybmFtZTogJ0BtZXJyeW4ubWFubGV5JyxcclxuICAgICAgbmFtZTogJ01lcnJ5biBNYW5sZXknLFxyXG4gICAgfSxcclxuICBdLFxyXG4gIFtcclxuICAgIHtcclxuICAgICAgaW1hZ2U6IHRlc3RpbW9uaWFsc0ltYWdlMyxcclxuICAgICAgdGV4dDpcclxuICAgICAgICAnSSB3b3VsZCBqdXN0IGxpa2UgdG8gY29tcGxpbWVudCBFc3RlbGxlIFBlc3RhbmEuIFNoZSBoYXMgYmVlbiBtb3N0IHByb2Zlc3Npb25hbCBhbmQgZ29uZSB0byBncmVhdCBsZW5ndGhzIHRvIGFzc2lzdCBtZS4gSGVyIHBhdGllbmNlIHdpdGggbWUgYXMgSSBjb250aW51b3VzbHkgY2hhbmdlZCBteSBwbGFucyBpcyB0byBiZSBjb21tZW5kZWQuIEhlciBzZXJ2aWNlIHJlLWFmZmlybXMgd2h5IEkgYWx3YXlzIGNob29zZSB0byBib29rIHRocm91Z2ggYW4gYWdlbmN5IGluc3RlYWQgb2YgZGlyZWN0bHkuIFRoYW5rIHlvdScsXHJcbiAgICAgIHVzZXJuYW1lOiAnQGhpLnZlb25hJyxcclxuICAgICAgbmFtZTogJ1Zlb25hIFdhdHNvbicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpbWFnZTogdGVzdGltb25pYWxzSW1hZ2U0LFxyXG4gICAgICB0ZXh0OlxyXG4gICAgICAgICdJIGhhdmUgc2VsZG9tIGV4cGVyaWVuY2VkIHN1Y2ggYW4gZWZmaWNpZW50IGhlbHAgYW5kIHN1cHBvcnQgbGlrZSBmcm9tIHlvdSEgVGhhbmsgeW91IHNvIG11Y2guIFdlIHdpbGwgZG8gYWxsIHRoZSBib29raW5ncyBkdXJpbmcgdGhlIG5leHQgZmV3IGRheXMgYW5kIEkgd2lsbCByZXZlcnQgdG8geW91IHdpdGggdGhlIGVuZCByZXN1bHQnLFxyXG4gICAgICB1c2VybmFtZTogJ0BoZXkubmt1JyxcclxuICAgICAgbmFtZTogJ1Bhc2VrYSBOa3UnLFxyXG4gICAgfSxcclxuICBdLFxyXG4gIFtcclxuICAgIHtcclxuICAgICAgaW1hZ2U6IHRlc3RpbW9uaWFsc0ltYWdlNSxcclxuICAgICAgdGV4dDpcclxuICAgICAgICAnVGhhbmsgeW91IGZvciBhbGwgeW91ciBoZWxwLiBZb3VyIHNlcnZpY2Ugd2FzIGV4Y2VsbGVudCBhbmQgdmVyeSBGQVNULicsXHJcbiAgICAgIHVzZXJuYW1lOiAnQGNoZXJpY2UubWUnLFxyXG4gICAgICBuYW1lOiAnQ2hlcmljZSBKdXN0aW4nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaW1hZ2U6IHRlc3RpbW9uaWFsc0ltYWdlNixcclxuICAgICAgdGV4dDpcclxuICAgICAgICAnRm9yIG91ciByZWNlbnQgdHJpcCB0byBTLkEuIEkgYm9va2VkIHNldmVyYWwgYWNjb21tb2RhdGlvbiB0aHJ1IFNBIFBsYWNlcy4gSSBqdXN0IHdhbnRlZCB0byB0ZWxsIHlvdSB0aGF0IGV2ZXJ5dGhpbmcgd29ya2VkIG91dCBwZXJmZWN0bHkgd2l0aCBhbGwgdGhlIGJvb2tpbmdzIGFuZCBhbHNvIHlvdXIgYm9va2luZyB3YXMgdmVyeSBxdWljayBhbmQgcHJvZmVzc2lvbmFsLiBJIGhvcGUgSSBoYXZlIHRoZSBvcHBvcnR1bml0eSB0byByZS12aXNpdCBTb3V0aCBBZnJpY2Egc29vbiwgSSB3aWxsIHRoZW4gbWFrZSBteSBib29raW5ncyB3aXRoIHlvdXIgY29tcGFueSBhZ2Fpbi4gSSB3aWxsIGFsc28gcmVjb21tZW5kJyxcclxuICAgICAgdXNlcm5hbWU6ICdAbXlzZWxmLnRoYWlzJyxcclxuICAgICAgbmFtZTogJ1RoYWlzIENhcmJhbGxhbCcsXHJcbiAgICB9LFxyXG4gIF0sXHJcbl07XHJcblxyXG5jb25zdCBUZXN0aW1vbmlhbHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGVzdGltb25pYWxDYXJvdXNlbCA9IHtcclxuICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIHNwZWVkOiAxMDAwLFxyXG4gICAgY2VudGVyZWRTbGlkZXM6IHRydWUsXHJcbiAgICBhdXRvSGVpZ2h0OiB0cnVlLFxyXG4gICAgYXV0b3BsYXk6IHtcclxuICAgICAgd2FpdEZvclRyYW5zaXRpb246IGZhbHNlLFxyXG4gICAgICBkZWxheTogNDAwMCxcclxuICAgIH0sXHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgICA2NDA6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgIH0sXHJcbiAgICAgIDc2ODoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgICAgfSxcclxuICAgICAgMTAyNDoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgICAgfSxcclxuICAgICAgMTIwMDoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBhcz1cInNlY3Rpb25cIiBpZD1cInRlc3RpbW9uaWFsc1wiIHN4PXtzdHlsZXMudGVzdGltb25pYWxzfT5cclxuICAgICAgPEJsb2NrVGl0bGVcclxuICAgICAgICB0aXRsZT1cIldoYXQgY2xpZW50IHNheSBhYm91dCB1c1wiXHJcbiAgICAgICAgdGV4dD1cIkN1c3RvbWVyIHRlc3RpbW9uaWFsXCJcclxuICAgICAgLz5cclxuICAgICAgPFN3aXBlciB7Li4udGVzdGltb25pYWxDYXJvdXNlbH0+XHJcbiAgICAgICAge1RFU1RJTU9OSUFMU19EQVRBLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxTd2lwZXJTbGlkZSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAge2l0ZW0ubWFwKCh7IGltYWdlLCB0ZXh0LCBuYW1lLCB1c2VybmFtZSB9LCBfaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8VGVzdGltb25pYWxzQ2FyZFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U9e2ltYWdlfVxyXG4gICAgICAgICAgICAgICAgdGV4dD17dGV4dH1cclxuICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XHJcbiAgICAgICAgICAgICAgICBrZXk9e19pbmRleH1cclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lPXt1c2VybmFtZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvU3dpcGVyPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlc3RpbW9uaWFscztcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICB0ZXN0aW1vbmlhbHM6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNGNEY0RjYnLFxyXG4gICAgcHQ6IFsnODBweCcsIG51bGwsIG51bGwsIG51bGwsICc4MHB4JywgbnVsbCwgJzEwMHB4J10sXHJcbiAgICBwYjogWyc2MHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzgwcHgnLCBudWxsLCAnMTIwcHgnXSxcclxuICB9LFxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgLy8gZXhhbXBsZSBjb2xvcnMgd2l0aCBkYXJrIG1vZGVcclxuICBicmVha3BvaW50czogWyczNzZweCcsICc1NzZweCcsICc3NjhweCcsICc5OTJweCcsICcxMjAwcHgnLCAnMTY1MHB4J10sXHJcbiAgY29sb3JzOiB7XHJcbiAgICB0ZXh0OiAnIzM0M0Q0OCcsIC8vIGJvZHkgY29sb3IgYW5kIHByaW1hcnkgY29sb3JcclxuICAgIHRleHRfc2Vjb25kYXJ5OiAnIzAyMDczRScsIC8vIHNlY29uZGFyeSBib2R5IGNvbG9yXHJcbiAgICBoZWFkaW5nOiAnIzAyMDczRScsIC8vIHByaW1hcnkgaGVhZGluZyBjb2xvclxyXG4gICAgaGVhZGluZ19zZWNvbmRhcnk6ICcjMzQzRDQ4JywgLy8gaGVhZGluZyBjb2xvclxyXG4gICAgYmFja2dyb3VuZDogJyNGRkZGRkYnLCAvLyBib2R5IGJhY2tncm91bmQgY29sb3JcclxuICAgIGJhY2tncm91bmRfc2Vjb25kYXJ5OiAnI0Y5RkJGRCcsIC8vIHNlY29uZGFyeSBiYWNrZ3JvdW5kIGNvbG9yXHJcbiAgICBib3JkZXJfY29sb3I6ICcjRTlFREY1JywgLy8gYm9yZGVyIGNvbG9yXHJcbiAgICBwcmltYXJ5OiAnIzhENDQ4QicsIC8vIHByaW1hcnkgYnV0dG9uIGFuZCBsaW5rIGNvbG9yXHJcbiAgICBzZWNvbmRhcnk6ICcjNzkzNjc3JywgLy8gc2Vjb25kYXJ5IGNvbG9yIC0gY2FuIGJlIHVzZWQgZm9yIGhvdmVyIHN0YXRlc1xyXG4gICAgYmxhY2s6ICcjMEYyMTM3JywgLy8gYmxhY2sgY29sb3JcclxuICAgIGdyYXk6ICcjRjhGQUZDJyxcclxuICAgIG11dGVkOiAnIzdCODE4OCcsIC8vIG11dGVkIGNvbG9yXHJcbiAgICBhY2NlbnQ6ICcjNjA5JywgLy8gYSBjb250cmFzdCBjb2xvciBmb3IgZW1waGFzaXppbmcgVUlcclxuICB9LFxyXG4gIGZvbnRzOiB7XHJcbiAgICBib2R5OiAnRE0gU2FucycsXHJcbiAgICAvLyBib2R5OlxyXG4gICAgLy8gICAnc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWYnLFxyXG4gICAgaGVhZGluZzogJ0RNIFNhbnMnLFxyXG4gICAgLy8gaGVhZGluZzogJ0JyZWUgU2VyaWYnLFxyXG4gICAgbW9ub3NwYWNlOiAnTWVubG8sIG1vbm9zcGFjZScsXHJcbiAgfSxcclxuICBmb250U2l6ZXM6IFsxMywgMTQsIDE2LCAxOCwgMjAsIDIxLCAzMCwgMzYsIDQ4LCA2NF0sXHJcbiAgZm9udFdlaWdodHM6IHtcclxuICAgIGJvZHk6ICdub3JtYWwnLFxyXG4gICAgaGVhZGluZzogNTAwLFxyXG4gICAgYm9sZDogNzAwLFxyXG4gIH0sXHJcbiAgbGluZUhlaWdodHM6IHtcclxuICAgIGJvZHk6IDIsXHJcbiAgICBoZWFkaW5nOiAnNTBweCcsXHJcbiAgfSxcclxuICBsZXR0ZXJTcGFjaW5nczoge1xyXG4gICAgYm9keTogJ25vcm1hbCcsXHJcbiAgICBjYXBzOiAnMC4yZW0nLFxyXG4gICAgaGVhZGluZzogJy0wLjVweCcsXHJcbiAgfSxcclxuICAvLyBzcGFjZTogWzAsIDQsIDgsIDE2LCAzMiwgNjRdLFxyXG4gIHNpemVzOiB7XHJcbiAgICBjb250YWluZXI6IFsnMTI1MHB4J10sXHJcbiAgfSxcclxuICAvLyB2YXJpYW50cyBjYW4gdXNlIGN1c3RvbSwgdXNlci1kZWZpbmVkIG5hbWVzXHJcbiAgbGF5b3V0OiB7XHJcbiAgICBjb250YWluZXI6IHtcclxuICAgICAgcHg6IFsnMTVweCcsIG51bGwsIG51bGwsICczMHB4JywgJzQwcHgnXSxcclxuICAgIH0sXHJcbiAgICBoZWFkZXI6IHtcclxuICAgICAgY29sb3I6ICcjMDIwNzNFJyxcclxuICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXHJcbiAgICAgIHB5OiAzLFxyXG4gICAgfSxcclxuICAgIHRvb2xiYXI6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgLy8ganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgIH0sXHJcbiAgICBtYWluOiB7fSxcclxuICAgIGZvb3Rlcjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdiYWNrZ3JvdW5kX3NlY29uZGFyeScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdGV4dDoge1xyXG4gICAgaGVhZGluZzoge1xyXG4gICAgICBmb250RmFtaWx5OiAnaGVhZGluZycsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICdoZWFkaW5nJyxcclxuICAgICAgZm9udFdlaWdodDogJ2hlYWRpbmcnLFxyXG4gICAgICBmb250U2l6ZTogNCxcclxuICAgICAgbGV0dGVyU3BhY2luZzogJ2hlYWRpbmcnLFxyXG4gICAgICBjb2xvcjogJ2hlYWRpbmcnLFxyXG4gICAgfSxcclxuICAgIGhlcm9QcmltYXJ5OiB7XHJcbiAgICAgIGZvbnRTaXplOiBbNSwgNTVdLFxyXG4gICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgICAgbGluZUhlaWdodDogWyc0MHB4JywgJzgwcHgnXSxcclxuICAgICAgbGV0dGVyU3BhY2luZzogJy0xcHgnLFxyXG4gICAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgJ2xlZnQnXSxcclxuICAgIH0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICB2YXJpYW50OiAndGV4dC5oZWFkaW5nJyxcclxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgICBmb250U2l6ZTogMTgsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICczMHB4JyxcclxuICAgICAgY29sb3I6ICcjMEYyMTM3JyxcclxuICAgIH0sXHJcbiAgICBoZXJvU2Vjb25kYXJ5OiB7XHJcbiAgICAgIGNvbG9yOiAndGV4dF9zZWNvbmRhcnknLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBbJzMwcHgnLCAnNDJweCddLFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnMC4xZW0nLFxyXG4gICAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgJ2xlZnQnXSxcclxuICAgIH0sXHJcbiAgICBsZWFkOiB7XHJcbiAgICAgIGZvbnRTaXplOiA0MCxcclxuICAgICAgZm9udEZhbWlseTogJ0RNIFNhbnMnLFxyXG4gICAgICBmb250V2VpZ2h0OiAnNTAwJyxcclxuICAgICAgbGluZUhlaWdodDogJzYwcHgnLFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLTEuNXB4JyxcclxuICAgICAgY29sb3I6ICcjMEYyMTM3JyxcclxuICAgIH0sXHJcbiAgICBtdXRlZDoge1xyXG4gICAgICBsaW5lSGVpZ2h0OiAnMjZweCcsXHJcbiAgICAgIGNvbG9yOiAnbXV0ZWQnLFxyXG4gICAgfSxcclxuICAgIHNlY29uZGFyeToge1xyXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICAgIGNvbG9yOiAnIzAwQTk5RCcsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICc0MHB4JyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBsaW5rczoge1xyXG4gICAgYm9sZDoge1xyXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICB9LFxyXG4gICAgbmF2OiB7XHJcbiAgICAgIGRpc3BsYXk6IFsnbm9uZScsIG51bGwsICdpbmxpbmUtYmxvY2snXSxcclxuICAgICAgcDogMixcclxuICAgIH0sXHJcbiAgICBmb290ZXI6IHtcclxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgcHg6IDAsXHJcbiAgICAgIGNvbG9yOiAnaW5oZXJpdCcsXHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGltYWdlczoge1xyXG4gICAgYXZhdGFyOiB7XHJcbiAgICAgIHdpZHRoOiA0OCxcclxuICAgICAgaGVpZ2h0OiA0OCxcclxuICAgICAgYm9yZGVyUmFkaXVzOiA5OTk5OSxcclxuICAgIH0sXHJcbiAgfSxcclxuICAvLyB2YXJpYW50cyBmb3IgYnV0dG9uc1xyXG4gIGJ1dHRvbnM6IHtcclxuICAgIG1lbnU6IHtcclxuICAgICAgZGlzcGxheTogW251bGwsIG51bGwsICdub25lJ10sXHJcbiAgICB9LCAvLyBkZWZhdWx0IHZhcmlhbnQgZm9yIE1lbnVCdXR0b25cclxuICAgIC8vIHlvdSBjYW4gcmVmZXJlbmNlIG90aGVyIHZhbHVlcyBkZWZpbmVkIGluIHRoZSB0aGVtZVxyXG4gICAgcHJpbWFyeToge1xyXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICBiZzogJ3ByaW1hcnknLFxyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgdHJhbnNpdGlvbjogJzUwMG1zJyxcclxuICAgICAgZm9udFNpemU6IDIsXHJcbiAgICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgYmc6ICdzZWNvbmRhcnknLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBzdHlsZXM6IHtcclxuICAgIC8vIFRvIGFkZCBiYXNlLCB0b3AtbGV2ZWwgc3R5bGVzIHRvIHRoZSA8Ym9keT4gZWxlbWVudCwgdXNlIHRoZW1lLnN0eWxlcy5yb290LlxyXG4gICAgcm9vdDoge1xyXG4gICAgICBmb250RmFtaWx5OiAnYm9keScsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICdib2R5JyxcclxuICAgICAgZm9udFdlaWdodDogJ2JvZHknLFxyXG4gICAgICBXZWJraXRGb250U21vb3RoaW5nOiAnYW50aWFsaWFzZWQnLFxyXG4gICAgfSxcclxuICAgIGE6IHtcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXHJcbiAgICB9LFxyXG4gICAgYnV0dG9uOiB7XHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgfSxcclxuICAgIC8vIERpdmlkZXIgc3R5bGVzXHJcbiAgICBocjoge1xyXG4gICAgICBib3JkZXI6IDAsXHJcbiAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCcsXHJcbiAgICAgIGJvcmRlckNvbG9yOiAnI0Q5RTBFNycsXHJcbiAgICB9LFxyXG4gICAgLy8gYWxzbyB5b3UgY2FuIHVzZSBvdGhlciBIVE1MIGVsZW1lbnRzIHN0eWxlIGhlcmVcclxuICAgIHVsOiB7XHJcbiAgICAgIGxpc3RTdHlsZTogJ25vbmUnLFxyXG4gICAgfSxcclxuICAgIHNyT25seToge1xyXG4gICAgICBib3JkZXI6ICcwICFpbXBvcnRhbnQnLFxyXG4gICAgICBjbGlwOiAncmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpICFpbXBvcnRhbnQnLFxyXG4gICAgICBjbGlwUGF0aDogJ2luc2V0KDUwJSkgIWltcG9ydGFudCcsXHJcbiAgICAgIGhlaWdodDogJzFweCAhaW1wb3J0YW50JyxcclxuICAgICAgbWFyZ2luOiAnLTFweCAhaW1wb3J0YW50JyxcclxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4gIWltcG9ydGFudCcsXHJcbiAgICAgIHBhZGRpbmc6ICcwICFpbXBvcnRhbnQnLFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlICFpbXBvcnRhbnQnLFxyXG4gICAgICB3aWR0aDogJzFweCAhaW1wb3J0YW50JyxcclxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCAhaW1wb3J0YW50JyxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtb3Rpb24vY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcmFtZXItbW90aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyYy1kcmF3ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtY3VzdG9tLXNjcm9sbGJhcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvYWlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvZmFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvaW9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbWFzb25yeS1jb21wb25lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc2Nyb2xsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXN0aWNreW5vZGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtd2F5cG9pbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dpcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3aXBlci9yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0aGVtZS11aVwiKTsiXSwic291cmNlUm9vdCI6IiJ9