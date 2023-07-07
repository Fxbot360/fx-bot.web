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

module.exports = "/_next/static/images/call-image-8f777c0b65e74bc56bed13d9b6aa1b6f.png";

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

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/testimonial-1-4.png":
/*!****************************************!*\
  !*** ./src/assets/testimonial-1-4.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/testimonial-1-5.png":
/*!****************************************!*\
  !*** ./src/assets/testimonial-1-5.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAMAAAANxBKoAAAC+lBMVEUAAADNuazZ1czOw7nXyby9loDXx7jOvKvNuarYybzItaWrkoS6rqK4pJWnlIl+alzLs6vOrprQwrSyoZfOtKLMt6ba0sXewbHRvK2tmYtlTkHcx7fUz8XPt6SRg4OpjHc1IBW5qqEiGSPYz8XUwrnXvay8ppI+PlLBsaE7NUbfw7WEZVKBalpEMijTspvf3tjfyrvX0sncxrXVvKnYtZ7Or5fJnYLWzMDNwbTSrpWvlYXex7fUuKTPrJLb3dTawrK1pJqninichnjg4tvcy7/Oxr7Kv7LOuarHuai9rqXStaHMsZ7Mo4qploqwe1pNIBbb2dLUybzQw7fRwLDHuK/Cr6C+rZ6zoJeun5TIoIfMn4aWh37ImXyOeW6WVz9tPzFaMCZTKh7RxrrWxrjFvLTEtKfauqazn5GlkoTDm3/IlHnAjnDAiGq1f2doMiPSy8LSyr7DubHJvbC+s6nItKS+q5jBqJbMp4ycin6pjX2ji33Fk3fFkXGrfGS6gV+1c1aubk1vRzmDQS5hMyZCGRDVz8TayLrGwrq6q6C6qJvMqJW7moqvl4nDn4ifjYKPb164eVx1XVurclppU1apclSlalOLZFN9T0B2STpSNy9xOinbz8TQxLTfw7Hcwq7CuKzcv6rCs6TErJq7p5O4opDPqY+um46jkouSfnSdfmzBf2uZbl1EQVKXYEupWkeKVkN7PzFhOi8tEQk2Dwje2M3h0sbLvbfavq7Jva3Vr5apmZPYo46BdoXSoYSrj4K9kXdnYneagHV6ZnFSVG+2hmyYe2yEbmqHb2RXTVqCXE2hYkeUW0Z8V0V0UkKlUUCGTTpcQDeMSTRHLCdcJxxDIxrk5NrNlICriXPGiHG6j22Td2i+fWGkdF1+Z1ubZ1A5MD1+STVcIBTd1MuimqWzmI+0lH6wknyhh3RuY3B3Zmp0YGW7h2KbaliNX05lTECWTTuCLSNvLB2upay9opjYtJSajZTEp4+BbHY2HhvHyc2XhomhgGiJYGCPa1QcAwlEAAAALnRSTlMAIP79e/2iSDDCcCC3n3ggEOXf34Bf7+/v7+/f17+gSDDv79/f39/fz8+vn4CAVW20BAAABpNJREFUSMd9lXVYU1EYhydhd3d3TFxvbLJNGGwsBJa4McYY64F0d3eDoCCCgCJSdicgIRJ2d3fX83gG2Oj73P/ue3/Pd757zncgfzJwcP9Bo+3MCiYMWmw0EPJf+hkZ2kRLPRNJW1JOpZDwJlP69/u3OygfjY72BmauOCyixjEFB4dzhvXtjzSyk0qllomnwnKfPn1SUZGdHdaakuDNLRrbV/AoawDSuCIiIjc3TCzOaQnLacnJ9rPE2M79K37AqLv3cLiE8xU3dHm6CEdHR4nEUZyTe6qCZOtkO3HA7/LgApf4TV7eW8LEzUGVeazIukiWpFOnk0huPD3E8YrzGvdbMsysAG5XvEUS2RrvYlyl67x5U1fd1hYewWJFZN8lnb+bNOOXmifAYDAzqWeLOGyTiTne+Fpl5bWsoBPq9GpQkbgiKOjEYeMhP+x5u2Ew02gbz1ax386d+TCoEmVPp9M3E4RMHctRknOlknkRNWpkr2y0e7epqWk02jsizGTnTnPYRiQSikDgaXjkwazILpb4SeaJAAFhbG8dG3abmZqYmOd7O540MTfZsBGPJBCgUP0new9HRHbVpAerlQIstKeP/c3g3fZOT0kCzAyOh2IJPpuxhM2EvVCsILfuQ41WEyikY6HTuqNNe+18y66EAjieRoNisQgXBAhHEgQ5tbU1mgsqlM9eGq2fPtoUZgaLBra5eVcCHF5garqhYOPGjS4ueGukj6CqtjZXHSi03wyl4fWVT4F120C3eUaCw4AMTAR0LxaBQBB8smtrs1UqFJ0A7IlgP1vqsdNT2JCyYbe1wIdORwnV2mvX0rV0wvk6yYlzIBoLpcHhAyGDORyZrEhmBZB5Z6Ou3MirSg1UZ1Xf7Mxrb9Jg30VWXt56ThCPtLam0QZD+ru7YwzdKRQKBoOxSjl8pdqxs10T2BR+M7Kus13rA83LuhCQVOztvQkwDDJoxQoD8Bjs2LFj9Q6cT9WNOtbLi2+Y7S/z2rJSVfGI9O1bBcVeXl5cLoezEGKwWs/yHqzwdK1DuAMKocp0aG4KCbQnQA+GnENyPD2trPa4Y0ZDVurpcVct3wGHHtZqz2Fd7ANUKNRBe/vNBOX+eKs9lnsoGFsnG5tee1U3Z8+uxyPAb4GbYQPU+7FILJ0uiLf2LARrWu/k5OYaBQFldGf32DZwxBuUYIMLYr82WGhv76NUxpdY7cEYgmAgR0GmWriCZdq4Ra0Aa70Vjd97UHtw/4ULW1NDQjRqYQAqCbeHopfR6Kio8ZCpbHe3KEN3txUGqw0MVpjTlBfVAenbnz8PuRwaymSqA5L8y9ixHrJCNptiOwjSn8uxdaW4o0ETbxkY5FtffKwSpp8+HZqaGhoazHx8IkmURk0Wla9Zs8aXOxQyvPy1Ldq9qJTB58n5xLh3qMBA+63bT58GjQwJZmYGJfDKGDLfNb7JyeTiwZCZrV5SNIbzrKtj3bp1Z85sQQVmVVW/ePHiefrly6mhDk/u7GNQLfjlIJpcAubi5BI7Nwr3Wce6M3q71ViJ2g+yt2/VBAeHOlSdusMjsi08khUMhf98sGOXFq9HYzyvXhUdJZP9/Un3kpQBmtDtIanBmUyHtpoGRWncLkM0T3Ty0qVhwB7htR693vISmcEolRPl8vvnjYUaZhPzcXCmQxtrnagUF8eJLUQzWlq+dg+JaVJgn/QvVfgy+MkiX/I9JUqoUmkym8WRHRm+uEOJCp6z6y2rk0t6zrwN2smOnEhUlCfz6zPKiCWfmSFNWQ55rLoPaWlkEmkLrghjYbG2rHf+GLk5Ucg8KpHPJ9an8Ys8iq80t4frWKyOjIwGv/t+pJI4NnsXcfj3yT0nX6qIdS4s9KDWX+VzPWTWQZXhL3U1GY8yjt4n+ZET44ilojE/5+B4KYMa4wzYV8Zj8NbuS8oMD69OO/ao3p/kd4gsl3Hlk0b8MmMpCo9du5xjXC12UctFr44lBDXnfDn2Ps0fR/I7So6lxhb9NsHHKbi812xXsA/XispvH2k4HHTy/bGHaYdwOJzIj0ukjoP8xoxJR/1jYyxiYqi+t283duCSPx048OjoIVyJ/Ood3qwBf907ozGGFgAn21dHGq8/bGw8cOBhYiIxTt7AGNPXtWbk7LwWEPPxwIMHD7Zd35ZRT41ly+SXho+E9MWQ6WsAa2Pevj125Pi2bdfLqOx9/KHdzejbHzbGw9VtX+MRYF/f5kGcvAy4/2Og0dChs48fP75g0fThM/98+Q39HtOjneBL8gAAAABJRU5ErkJggg=="

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
    title: "Fxbot360",
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
  }, "Behind the our technology.."), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, "Fxbot360 tech-stack & technology"), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, "Get your best automated trading Bot delivered to you on Mt4 and Mt5 trading technologies"), __jsx(components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    path: "#",
    sx: styles.button,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, "Explore More")), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.images,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_call_image_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "call image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
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
      fontSize: ['16px', null, null, '20px'],
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
  text: 'Take a closer look at everything you’ll need to know about forex, including what it is, how you trade it and how leverage in forex works.',
  heading: 'How it works',
  path: '#'
}, {
  image: assets_service_2_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  text: 'Our tools and platforms have clear and simple instructions and are intuitively easy to navigate.',
  heading: 'Trading Robot tools',
  path: '#'
}, {
  image: assets_service_3_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  text: 'fxbot makes it easy for anyone to start trading, understand risk, and make better trading decisions.',
  heading: 'Customer-first trading experience',
  path: '#'
}, {
  image: assets_service_4_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  text: 'Online trading is exciting but involves risks and can lead to an addiction.',
  heading: 'Market measures',
  path: '#'
}, {
  image: assets_service_5_png__WEBPACK_IMPORTED_MODULE_8___default.a,
  text: 'we enforce best-in-class security measures such as to protect your account and personal data.',
  heading: 'Security measures',
  path: '#'
}, {
  image: assets_service_6_png__WEBPACK_IMPORTED_MODULE_9___default.a,
  text: 'The fxbot360 support team is available via live chat 24/7 – even on weekends.',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2FjY29yZGlvbi1hcnJvdy1lLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2FjY29yZGlvbi1hcnJvdy5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9hcnJvdy1hbmdsZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9iYW5uZXItaWNvbi0xLTEuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvYmFubmVyLWljb24tMS0yLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2Jhbm5lci1pY29uLTEtMy5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9iYW5uZXItaWNvbi0xLTQuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvYmFubmVyLWljb24tMS01LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2Jhbm5lci1pY29uLTEtNi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9iYW5uZXItbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9iYW5uZXItbW9ja3VwLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2Jsb2ctMS0xLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2Jsb2ctMS0yLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2Jsb2ctMS0zLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2Jsb2ctMS00LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2NhbGwtaW1hZ2UucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZG90LXBhdHRlcm4uc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamFja3BvdC0xLTEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamFja3BvdC0xLTIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvamFja3BvdC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9sb2dvLWRhcmsuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvbG9nby1saWdodC5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wcmljZS1hcnJvdy5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wcmljZS1jaGVjay5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wcmljZS1jcm9zcy5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wcmljZS11c2VyLTEtMS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wcmljZS11c2VyLTEtMi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zZXJ2aWNlLTEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2VydmljZS0yLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NlcnZpY2UtMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zZXJ2aWNlLTQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2VydmljZS01LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NlcnZpY2UtNi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy90YWItaW1hZ2UtMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy90ZXN0aW1vbmlhbC0xLTEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvdGVzdGltb25pYWwtMS0yLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3Rlc3RpbW9uaWFsLTEtMy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy90ZXN0aW1vbmlhbC0xLTQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvdGVzdGltb25pYWwtMS01LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3Rlc3RpbW9uaWFsLTEtNi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hY2NvcmRpb24vYmFzZS1hY2NvcmRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWNjb3JkaW9uL3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9ibG9jay10aXRsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJkcy9ibG9nLWNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FyZHMvamFja3BvdC1jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcmRzL3ByaWNlLWNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FyZHMvc2VydmljZS1jYXJkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcmRzL3Rlc3RpbW9uaWFsLWNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZHJhd2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL21vYmlsZURyYXdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sb2dvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Nlby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvYXBwL2FwcC5wcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvYXBwL2FwcC5yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250ZXh0cy9jcmVhdGUtY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvZHJhd2VyL2RyYXdlci5jb250ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250ZXh0cy9kcmF3ZXIvZHJhd2VyLnByb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvYmFubmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9ibG9ncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvY2FsbC10by1hY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL2ZhcS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvZmVhdHVyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL2phY2twb3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL3ByaWNpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL3NlcnZpY2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9zdWJzY3JpYmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL3Rlc3RpbW9uaWFscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGVtb3Rpb24vY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZyYW1lci1tb3Rpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyYy1kcmF3ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWN1c3RvbS1zY3JvbGxiYXJzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvYWlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9mYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2lvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tYXNvbnJ5LWNvbXBvbmVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNjcm9sbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN0aWNreW5vZGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC13YXlwb2ludFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN3aXBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN3aXBlci9yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRoZW1lLXVpXCIiXSwibmFtZXMiOlsiY2FjaGVkT2JzZXJ2ZXIiLCJsaXN0ZW5lcnMiLCJNYXAiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJnZXRPYnNlcnZlciIsInVuZGVmaW5lZCIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJoYXMiLCJ0YXJnZXQiLCJjYiIsImdldCIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ1bm9ic2VydmUiLCJkZWxldGUiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwiZWwiLCJvYnNlcnZlciIsIm9ic2VydmUiLCJzZXQiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJwcmVmZXRjaCIsInJvdXRlciIsImhyZWYiLCJhcyIsIm9wdGlvbnMiLCJjYXRjaCIsImlzTW9kaWZpZWRFdmVudCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJhbHRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwibGlua0NsaWNrZWQiLCJlIiwicmVwbGFjZSIsInNoYWxsb3ciLCJzY3JvbGwiLCJub2RlTmFtZSIsInByZXZlbnREZWZhdWx0IiwiaW5kZXhPZiIsInRoZW4iLCJzdWNjZXNzIiwic2Nyb2xsVG8iLCJkb2N1bWVudCIsImJvZHkiLCJmb2N1cyIsIkxpbmsiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsImFyZ3MiLCJFcnJvciIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsImtleXMiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwicGFzc0hyZWYiLCJvcHRpb25hbFByb3BzIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJ1c2VSZWYiLCJjdXJyZW50Iiwid2FybiIsInAiLCJjaGlsZEVsbSIsInNldENoaWxkRWxtIiwidXNlU3RhdGUiLCJwYXRobmFtZSIsInVzZU1lbW8iLCJyZXNvbHZlZEhyZWYiLCJ1c2VFZmZlY3QiLCJ0YWdOYW1lIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkUHJvcHMiLCJyZWYiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5IiwidHlwZSIsImNsb25lRWxlbWVudCIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwicGF0aCIsImVuZHNXaXRoIiwic2xpY2UiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZGVmaW5lUHJvcGVydHkiLCJSb3V0ZXIiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsInVzZVJvdXRlciIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiX3JvdXRlciIsImluc3RhbmNlIiwicHJvcGVydHkiLCJhc3NpZ24iLCJ3aXRoUm91dGVyIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJuYW1lIiwiZGlzcGxheU5hbWUiLCJtaXR0IiwiYWxsIiwiY3JlYXRlIiwiaGFuZGxlciIsInB1c2giLCJvZmYiLCJzcGxpY2UiLCJlbWl0IiwiZXZ0cyIsIm1hcCIsImJhc2VQYXRoIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImNhbmNlbGxlZCIsImhhc0Jhc2VQYXRoIiwic3RhcnRzV2l0aCIsImFkZEJhc2VQYXRoIiwiZGVsQmFzZVBhdGgiLCJsZW5ndGgiLCJpc0xvY2FsVVJMIiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsIlVSTCIsIm9yaWdpbiIsInJlc29sdmVIcmVmIiwiY3VycmVudFBhdGgiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsIlBBR0VfTE9BRF9FUlJPUiIsIlN5bWJvbCIsIm1hcmtMb2FkaW5nRXJyb3IiLCJwcmVwYXJlVXJsQXMiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwicmVzIiwib2siLCJzdGF0dXMiLCJqc29uIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJjb25zdHJ1Y3RvciIsInF1ZXJ5IiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJDb21wb25lbnQiLCJpbml0aWFsU3R5bGVTaGVldHMiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwicm91dGUiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwiX2JwcyIsIl93cmFwQXBwIiwiaXNTc3IiLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93Iiwib25Qb3BTdGF0ZSIsInN0YXRlIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJjaGFuZ2UiLCJzdHlsZVNoZWV0cyIsIl9fTl9TU0ciLCJfX05fU1NQIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJyZWxvYWQiLCJsb2NhdGlvbiIsImJhY2siLCJoaXN0b3J5IiwibWV0aG9kIiwiX2giLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsIm9ubHlBSGFzaENoYW5nZSIsInNjcm9sbFRvSGFzaCIsIm5vdGlmeSIsInBhZ2VzIiwiZ2V0UGFnZUxpc3QiLCJfX3Jld3JpdGVzIiwicmV3cml0ZXMiLCJwcm9taXNlZEJ1aWxkTWFuaWZlc3QiLCJwYXJzZWQiLCJzZWFyY2hQYXJhbXMiLCJfcmVzb2x2ZUhyZWYiLCJ1cmxJc05ldyIsInJlc29sdmVkQXMiLCJhc1BhdGhuYW1lIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwiZ3JvdXBzIiwiZmlsdGVyIiwicGFyYW0iLCJqb2luIiwicm91dGVJbmZvIiwiZ2V0Um91dGVJbmZvIiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwicGFnZSIsImZldGNoQ29tcG9uZW50IiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiY2FjaGVkUm91dGVJbmZvIiwibW9kIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwicmVxdWlyZSIsImdldERhdGFIcmVmIiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiZGF0YSIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNwbGl0IiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsImhhc2giLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwicGFyc2VkSHJlZiIsImNsZWFuUGF0aG5hbWUiLCJpbmNsdWRlcyIsInNvbWUiLCJyZSIsInRlc3QiLCJQcm9taXNlIiwicHJlZmV0Y2hEYXRhIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJmbiIsImNhY2hlS2V5IiwiY3R4IiwiQXBwVHJlZSIsInNsYXNoZWRQcm90b2NvbHMiLCJmb3JtYXRVcmwiLCJ1cmxPYmoiLCJhdXRoIiwiaG9zdG5hbWUiLCJwcm90b2NvbCIsImhvc3QiLCJlbmNvZGVVUklDb21wb25lbnQiLCJwb3J0IiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJ1cmxRdWVyeVRvU2VhcmNoUGFyYW1zIiwic2VhcmNoIiwic3Vic3RyIiwic2xhc2hlcyIsIlRFU1RfUk9VVEUiLCJpc0R5bmFtaWNSb3V0ZSIsIkRVTU1ZX0JBU0UiLCJwYXJzZVJlbGF0aXZlVXJsIiwicmVzb2x2ZWRCYXNlIiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJkZWNvZGUiLCJkZWNvZGVQYXJhbSIsImN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMiLCJzdHJpY3QiLCJjdXN0b21Sb3V0ZSIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJyZWdleHBUb0Z1bmN0aW9uIiwicGFyYW1zIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiY29kZSIsInByZXBhcmVEZXN0aW5hdGlvbiIsImRlc3RpbmF0aW9uIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsInBhcnNlZERlc3RpbmF0aW9uIiwiZGVzdFF1ZXJ5IiwiZGVzdFBhdGgiLCJkZXN0UGF0aFBhcmFtS2V5cyIsImRlc3RQYXRoUGFyYW1zIiwiZGVzdGluYXRpb25Db21waWxlciIsImNvbXBpbGUiLCJ2YWxpZGF0ZSIsIm5ld1VybCIsInN0ck9yQXJyYXkiLCJ2YWx1ZSIsIkFycmF5IiwiaXNBcnJheSIsInF1ZXJ5Q29tcGlsZXIiLCJwYXJhbUtleXMiLCJzaG91bGRBZGRCYXNlUGF0aCIsImVuY29kZVVSSSIsIm1hdGNoIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsInVybFF1ZXJ5IiwicmVzdWx0IiwiVVJMU2VhcmNoUGFyYW1zIiwiaXRlbSIsImFwcGVuZCIsInNlYXJjaFBhcmFtc0xpc3QiLCJmcm9tIiwiY3VzdG9tUm91dGVNYXRjaGVyIiwicmVzb2x2ZVJld3JpdGVzIiwicmV3cml0ZSIsInNvdXJjZSIsImRlc3RSZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJleGVjIiwic2x1Z05hbWUiLCJnIiwibSIsInBvcyIsInJlcGVhdCIsImVzY2FwZVJlZ2V4Iiwic3RyIiwicGFyc2VQYXJhbWV0ZXIiLCJvcHRpb25hbCIsImdldFJvdXRlUmVnZXgiLCJub3JtYWxpemVkUm91dGUiLCJzZWdtZW50cyIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJzZWdtZW50Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsImZyb21DaGFyQ29kZSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJpc05hTiIsInBhcnNlSW50IiwiUmVnRXhwIiwibmFtZWRSZWdleCIsImV4ZWNPbmNlIiwidXNlZCIsImdldExvY2F0aW9uT3JpZ2luIiwiZ2V0VVJMIiwiZ2V0RGlzcGxheU5hbWUiLCJpc1Jlc1NlbnQiLCJmaW5pc2hlZCIsImhlYWRlcnNTZW50IiwibG9hZEdldEluaXRpYWxQcm9wcyIsInByb3RvdHlwZSIsInBhZ2VQcm9wcyIsInVybE9iamVjdEtleXMiLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsIlNQIiwibWVhc3VyZSIsIkFjY29yZGlvbiIsIl9yZWYiLCJpdGVtcyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIm9wZW5JY29uIiwiX19qc3giLCJJbWFnZSIsInNyYyIsImFjY29yZGlvbkljb25PcGVuIiwiYWx0IiwiX19zZWxmIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJjbG9zZUljb24iLCJhY2NvcmRpb25JY29uQ2xvc2UiLCJCYXNlQWNjb3JkaW9uIiwiX2V4dGVuZHMiLCJzdGF0ZVJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJzaW5nbGUiLCJwcmV2ZW50Q2xvc2UiLCJvcGVuSW5kZXhlcyIsImhhbmRsZUl0ZW1DbGljayIsIkZyYWdtZW50IiwiaW5kZXgiLCJBY2NvcmRpb25JdGVtIiwidGl0bGUiLCJpc09wZW4iLCJBY2NvcmRpb25CdXR0b24iLCJBY2NvcmRpb25Db250ZW50cyIsImNvbnRlbnRzIiwiX2RlZmluZVByb3BlcnR5IiwiaW50ZXJuYWxTZXRTdGF0ZSIsImNsb3NpbmciLCJsb2ciLCJnZXRTdGF0ZSIsImNoYW5nZXMiLCJjYWxsYmFjayIsImFsbENoYW5nZXMiLCJzZXRTdGF0ZSIsImFjdHVhbFN0YXRlIiwiY2hhbmdlc09iamVjdCIsIm9uU3RhdGVDaGFuZ2UiLCJyZW5kZXIiLCJyZXN0IiwianN4IiwiY3NzIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJsZXR0ZXJTcGFjaW5nIiwiY3Vyc29yIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwiZm9udFdlaWdodCIsImJvcmRlciIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJwb3NpdGlvbiIsImNvbG9yIiwib3V0bGluZSIsImJhY2tncm91bmRDb2xvciIsInNwYW4iLCJ0b3AiLCJyaWdodCIsInRyYW5zZm9ybSIsImp1c3RpZnlDb250ZW50IiwiYm9yZGVyUmFkaXVzIiwiaW1nIiwid2lkdGgiLCJ2YXJpYW50cyIsIm9wZW4iLCJoZWlnaHQiLCJtYXJnaW5Cb3R0b20iLCJjbG9zZWQiLCJtYXJnaW5Ub3AiLCJfcmVmMiIsIm1vdGlvbiIsImRpdiIsImluaXRpYWwiLCJhbmltYXRlIiwib3ZlcmZsb3dZIiwicGFkZGluZyIsIl9yZWYzIiwib3ZlcmZsb3ciLCJfb2JqZWN0U3ByZWFkIiwicmVkdWNlcnMiLCJyZWR1Y2UiLCJhY2MiLCJyZWR1Y2VyIiwiQmxvY2tUaXRsZSIsInRleHQiLCJCb3giLCJzeCIsInN0eWxlcyIsImJsb2NrVGl0bGUiLCJjbGFzc05hbWUiLCJIZWFkaW5nIiwiVGV4dCIsInRleHRBbGlnbiIsIm1iIiwiaDMiLCJCbG9nQ2FyZCIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJsaW5rTGFiZWwiLCJibG9nQ2FyZCIsImNvbnRlbnQiLCJhcnJvd0FuZ2xlIiwibXgiLCJsZWZ0IiwiYm90dG9tIiwiYmFja2dyb3VuZEltYWdlIiwibXQiLCJhIiwib3BhY2l0eSIsIm1sIiwiSmFja3BvdENhcmQiLCJoZWFkaW5nIiwiamFja3BvdENhcmQiLCJmbGV4RGlyZWN0aW9uIiwidHJhbnNpdGlvbiIsImJveFNoYWRvdyIsImZsZXhTaHJpbmsiLCJtciIsIlByaWNlQ2FyZCIsImljb24iLCJhbW91bnQiLCJyZWNvbW1lbmRlZCIsInByaWNlQ2FyZCIsInByaWNlSGVhZGVyIiwib3B0aW9uIiwicHJpY2VDaGVjayIsInByaWNlQ3Jvc3MiLCJsYWJlbCIsImJ1dHRvbldyYXAiLCJwcmljZUFycm93IiwicHgiLCJ1bCIsImxpc3RTdHlsZSIsImxpIiwibWF4V2lkdGgiLCJwdCIsImJvcmRlckJvdHRvbUxlZnRSYWRpdXMiLCJib3JkZXJCb3R0b21SaWdodFJhZGl1cyIsInB5IiwiU2VydmljZUNhcmQiLCJzZXJ2aWNlQ2FyZCIsImxpbmsiLCJUZXN0aW1vbmlhbHNDYXJkIiwidXNlcm5hbWUiLCJ0ZXN0aW1vbmlhbHNDYXJkIiwidGVzdGltb25pYWxzSW5mbyIsInRlc3RpbW9uaWFsc0ltYWdlIiwidGVzdGltb25pYWxzQ29udGVudCIsInBiIiwiRHJhd2VyIiwiY2xvc2VCdXR0b24iLCJjbG9zZUJ1dHRvblN0eWxlIiwiZHJhd2VySGFuZGxlciIsInRvZ2dsZUhhbmRsZXIiLCJwbGFjZW1lbnQiLCJkcmF3ZXJTdHlsZSIsImNsb3NlQnRuU3R5bGUiLCJSY0RyYXdlciIsIm9uQ2xvc2UiLCJ0cmltIiwibGV2ZWwiLCJkdXJhdGlvbiIsInN0eWxlIiwiZGVmYXVsdFByb3BzIiwiRm9vdGVyIiwiZm9vdGVyIiwiQ29udGFpbmVyIiwiY29udGFpbmVyIiwiTG9nbyIsImxvZ29MaWdodCIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImxpbmtzV3JhcCIsImZsZXhXcmFwIiwiSGVhZGVyIiwiRHJhd2VyUHJvdmlkZXIiLCJoZWFkZXIiLCJsb2dvRGFyayIsIkZsZXgiLCJuYXYiLCJtZW51SXRlbXMiLCJTY3JvbGxMaW5rIiwiYWN0aXZlQ2xhc3MiLCJuYXZMaW5rIiwidG8iLCJzcHkiLCJzbW9vdGgiLCJvZmZzZXQiLCJoZWFkZXJCdG4iLCJ2YXJpYW50IiwiTW9iaWxlRHJhd2VyIiwiZGlzcGF0Y2giLCJEcmF3ZXJDb250ZXh0IiwidXNlQ2FsbGJhY2siLCJJb01kTWVudSIsInNpemUiLCJJb01kQ2xvc2UiLCJkcmF3ZXIiLCJjbG9zZSIsIlNjcm9sbGJhcnMiLCJhdXRvSGlkZSIsIm1lbnUiLCJtZW51Rm9vdGVyIiwiQnV0dG9uIiwiYnV0dG9uIiwiYmFja2dyb3VuZCIsInpJbmRleCIsImZ3IiwiSW1nIiwiTGF5b3V0IiwiaXNTdGlja3kiLCJ1c2VTdGlja3lTdGF0ZSIsInVzZVN0aWNreURpc3BhdGNoIiwic2V0U3RpY2t5IiwicmVtb3ZlU3RpY2t5Iiwib25XYXlwb2ludFBvc2l0aW9uQ2hhbmdlIiwiY3VycmVudFBvc2l0aW9uIiwiU3RpY2t5IiwiZW5hYmxlZCIsImlubmVyWiIsIldheXBvaW50Iiwib25FbnRlciIsIm9uUG9zaXRpb25DaGFuZ2UiLCJOYXZMaW5rIiwiTmV4dExpbmsiLCJNZW51TGluayIsIkEiLCJTRU8iLCJhdXRob3IiLCJtZXRhIiwibWV0YURhdGEiLCJjb25jYXQiLCJIZWFkIiwibGFuZyIsInVzZURpc3BhdGNoIiwicHJvdmlkZXIiLCJ1c2VDcmVhdGVDb250ZXh0IiwiaW5pdGlhbFN0YXRlIiwiU3RpY2t5UHJvdmlkZXIiLCJpc1NpZGViYXJTdGlja3kiLCJkZWZhdWx0VmFsdWUiLCJkZWZhdWx0RGlzcGF0Y2giLCJzdGF0ZUN0eCIsImNyZWF0ZUNvbnRleHQiLCJkaXNwYXRjaEN0eCIsInVzZVN0YXRlQ3R4IiwidXNlRGlzcGF0Y2hDdHgiLCJQcm92aWRlciIsInVzZVJlZHVjZXIiLCJhY3Rpb24iLCJJbmRleFBhZ2UiLCJUaGVtZVByb3ZpZGVyIiwidGhlbWUiLCJCYW5uZXIiLCJTZXJ2aWNlcyIsIkphY2twb3QiLCJDYWxsVG9BY3Rpb24iLCJGZWF0dXJlZCIsIlByaWNpbmciLCJGQVEiLCJTdWJzY3JpYmUiLCJpZCIsImJhbm5lciIsImJhbm5lckljb24xIiwiYmFubmVySWNvbjIiLCJiYW5uZXJJY29uMyIsImJhbm5lckljb240IiwiYmFubmVySWNvbjUiLCJiYW5uZXJJY29uNiIsImJhbm5lckljb243IiwibG9nbyIsImxvZ29JbWFnZSIsImJhbm5lckltYWdlIiwiYmFubmVyQW5pbTEiLCJrZXlmcmFtZXMiLCJiYW5uZXJBbmltMiIsImJhbm5lckFuaW0zIiwiaDIiLCJhbmltYXRpb24iLCJCTE9HX0RBVEEiLCJibG9nSW1hZ2UxIiwiYmxvZ0ltYWdlMyIsImJsb2dJbWFnZTIiLCJibG9nSW1hZ2U0IiwibWFzb25yeU9wdGlvbnMiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJCbG9ncyIsImJsb2dzIiwiTWFzb25yeSIsImJsb2dXcmFwcGVyIiwiY2FsbFRvQWN0aW9uIiwiZmxleCIsImltYWdlcyIsImNhbGxJbWFnZSIsInZlcnRpY2FsQWxpZ24iLCJhY2NvcmRpb25EYXRhIiwiaXNFeHBhbmRlZCIsImZhcVdyYXBwZXIiLCJhc2tCdXR0b24iLCJwciIsInRhYiIsInNldFRhYiIsImFjdGl2ZSIsImhhbmRsZVRhYiIsImZlYXR1cmVkIiwidGFiQnV0dG9uVG9wV3JhcHBlciIsInRhYkJ1dHRvbldyYXBwZXIiLCJBaUZpbGxEb2xsYXJDaXJjbGUiLCJGYUNvZyIsIkFpRmlsbFBpZUNoYXJ0IiwiRmFCcmllZmNhc2UiLCJ0YWJDb250ZW50IiwidGFiSW1hZ2UxIiwiZmFkZUluIiwib3ZlcmZsb3dYIiwiYm9yZGVyQm90dG9tIiwic3ZnIiwibWluSGVpZ2h0IiwiZG90UGF0dGVybiIsIkpBQ0tQT1RfREFUQSIsImphY2twb3RJbWFnZTEiLCJqYWNrcG90SW1hZ2UyIiwiamFja3BvdCIsImphY2twb3RJbWFnZSIsImphY2twb3RDYXJkQm94IiwiZmxvYXQiLCJwbCIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJQUklDRV9NT05USExZX0RBVEEiLCJwcmljZUljb24xIiwicHJpY2VJY29uMiIsIlBSSUNFX1lFQVJMWV9EQVRBIiwicGxhbiIsInNldFBsYW4iLCJwcmljaW5nUGxhbiIsImhhbmRsZVBsYW4iLCJwcmljaW5nIiwiYnRuV3JhcCIsIkdyaWQiLCJncmlkIiwicHJpY2UiLCJmYWRlSW4yIiwiZm9udEZhbWlseSIsImdyaWRHYXAiLCJTRVJWSUNFU19EQVRBIiwic2VydmljZUltYWdlMSIsInNlcnZpY2VJbWFnZTIiLCJzZXJ2aWNlSW1hZ2UzIiwic2VydmljZUltYWdlNCIsInNlcnZpY2VJbWFnZTUiLCJzZXJ2aWNlSW1hZ2U2Iiwic2VydmljZXMiLCJzdWJzY3JpYmUiLCJmb3JtIiwiaHRtbEZvciIsIklucHV0IiwicGxhY2Vob2xkZXIiLCJpbnB1dCIsIlN3aXBlckNvcmUiLCJ1c2UiLCJBdXRvcGxheSIsIlRFU1RJTU9OSUFMU19EQVRBIiwidGVzdGltb25pYWxzSW1hZ2UxIiwidGVzdGltb25pYWxzSW1hZ2UyIiwidGVzdGltb25pYWxzSW1hZ2UzIiwidGVzdGltb25pYWxzSW1hZ2U0IiwidGVzdGltb25pYWxzSW1hZ2U1IiwidGVzdGltb25pYWxzSW1hZ2U2IiwiVGVzdGltb25pYWxzIiwidGVzdGltb25pYWxDYXJvdXNlbCIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJsb29wIiwic3BlZWQiLCJjZW50ZXJlZFNsaWRlcyIsImF1dG9IZWlnaHQiLCJhdXRvcGxheSIsIndhaXRGb3JUcmFuc2l0aW9uIiwiZGVsYXkiLCJicmVha3BvaW50cyIsInRlc3RpbW9uaWFscyIsIlN3aXBlciIsIlN3aXBlclNsaWRlIiwiX2luZGV4IiwiY29sb3JzIiwidGV4dF9zZWNvbmRhcnkiLCJoZWFkaW5nX3NlY29uZGFyeSIsImJhY2tncm91bmRfc2Vjb25kYXJ5IiwiYm9yZGVyX2NvbG9yIiwicHJpbWFyeSIsInNlY29uZGFyeSIsImJsYWNrIiwiZ3JheSIsIm11dGVkIiwiYWNjZW50IiwiZm9udHMiLCJtb25vc3BhY2UiLCJmb250U2l6ZXMiLCJmb250V2VpZ2h0cyIsImJvbGQiLCJsaW5lSGVpZ2h0cyIsImxldHRlclNwYWNpbmdzIiwiY2FwcyIsInNpemVzIiwibGF5b3V0IiwidG9vbGJhciIsIm1haW4iLCJoZXJvUHJpbWFyeSIsImhlcm9TZWNvbmRhcnkiLCJsZWFkIiwibGlua3MiLCJ0ZXh0RGVjb3JhdGlvbiIsImF2YXRhciIsImJ1dHRvbnMiLCJiZyIsInJvb3QiLCJXZWJraXRGb250U21vb3RoaW5nIiwiaHIiLCJib3JkZXJDb2xvciIsInNyT25seSIsImNsaXAiLCJjbGlwUGF0aCIsIm1hcmdpbiIsIndoaXRlU3BhY2UiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSx3RTs7Ozs7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MkY7Ozs7Ozs7Ozs7O0FDQUEsc0Y7Ozs7Ozs7Ozs7O0FDQUEsc0Y7Ozs7Ozs7Ozs7O0FDQUEsc0Y7Ozs7Ozs7Ozs7O0FDQUEsc0Y7Ozs7Ozs7Ozs7O0FDQUEsd0Y7Ozs7Ozs7Ozs7O0FDQUEseUY7Ozs7Ozs7Ozs7O0FDQUEsaUNBQWlDLG9rRjs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLHdsRTs7Ozs7Ozs7Ozs7QUNBakMscUY7Ozs7Ozs7Ozs7O0FDQUEsdUY7Ozs7Ozs7Ozs7O0FDQUEsd0Y7Ozs7Ozs7Ozs7O0FDQUEscUNBQXFDLDRuQzs7Ozs7Ozs7Ozs7QUNBckMscUNBQXFDLHc0Qjs7Ozs7Ozs7Ozs7QUNBckMscUNBQXFDLDRsQzs7Ozs7Ozs7Ozs7QUNBckMscUNBQXFDLG8wRjs7Ozs7Ozs7Ozs7QUNBckMscUNBQXFDLG95STs7Ozs7Ozs7Ozs7QUNBckMsaUNBQWlDLHc1Qzs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLG81Qzs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLGc1Qjs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLHd1Qzs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLG9yQzs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLDR6Qjs7Ozs7Ozs7Ozs7QUNBakMseUY7Ozs7Ozs7Ozs7O0FDQUEsaUNBQWlDLG8xRzs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLDR4Rzs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLDQwRzs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLHdwRzs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLGczRzs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLGcwRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBUDtBQUNPO0FBQ2dCO0FBQ1c7QUFDQztBQVEzQztBQUVILFNBQVNDLFNBQVNBLENBQUFDLElBQUEsRUFBc0I7RUFBQSxJQUFyQjtNQUFFQztJQUFnQixDQUFDLEdBQUFELElBQUE7SUFBUGpXLEtBQUssR0FBQW1XLHdCQUFBLENBQUFGLElBQUE7RUFDakQsTUFBTUcsUUFBUSxHQUFHQyxLQUFBLENBQUNDLDhD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Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxxQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKGNhY2hlZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGNhY2hlZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhblxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93IH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiZcbiAgICAgICAgICB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCBbY2hpbGRFbG0sIHNldENoaWxkRWxtXSA9IFJlYWN0LnVzZVN0YXRlPEVsZW1lbnQ+KClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZilcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKSA6IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgcCAmJlxuICAgICAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiZcbiAgICAgIGNoaWxkRWxtICYmXG4gICAgICBjaGlsZEVsbS50YWdOYW1lICYmXG4gICAgICBpc0xvY2FsVVJMKGhyZWYpXG4gICAgKSB7XG4gICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICByZXR1cm4gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKGNoaWxkRWxtLCAoKSA9PiB7XG4gICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwLCBjaGlsZEVsbSwgaHJlZiwgYXMsIHJvdXRlcl0pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCB9ID0gcHJvcHNcbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICBpZiAoZWwpIHNldENoaWxkRWxtKGVsKVxuXG4gICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChhcylcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbih7fSwgX3JvdXRlcltwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUb2tlbml6ZSBpbnB1dCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGxleGVyKHN0cikge1xuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gc3RyW2ldO1xuICAgICAgICBpZiAoY2hhciA9PT0gXCIqXCIgfHwgY2hhciA9PT0gXCIrXCIgfHwgY2hhciA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJNT0RJRklFUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRVNDQVBFRF9DSEFSXCIsIGluZGV4OiBpKyssIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIntcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk9QRU5cIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIn1cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNMT1NFXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCI6XCIpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGopO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAvLyBgMC05YFxuICAgICAgICAgICAgICAgIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBBLVpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDY1ICYmIGNvZGUgPD0gOTApIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBhLXpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgX2BcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9PT0gOTUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSArPSBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTkFNRVwiLCBpbmRleDogaSwgdmFsdWU6IG5hbWUgfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIihcIikge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIj9cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXR0ZXJuIGNhbm5vdCBzdGFydCB3aXRoIFxcXCI/XFxcIiBhdCBcIiArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXSArIHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdHJbal0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaiArIDFdICE9PSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhcHR1cmluZyBncm91cHMgYXJlIG5vdCBhbGxvd2VkIGF0IFwiICsgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5iYWxhbmNlZCBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIlBBVFRFUk5cIiwgaW5kZXg6IGksIHZhbHVlOiBwYXR0ZXJuIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0hBUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgIH1cbiAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRU5EXCIsIGluZGV4OiBpLCB2YWx1ZTogXCJcIiB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHRva2VucyA9IGxleGVyKHN0cik7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5wcmVmaXhlcywgcHJlZml4ZXMgPSBfYSA9PT0gdm9pZCAwID8gXCIuL1wiIDogX2E7XG4gICAgdmFyIGRlZmF1bHRQYXR0ZXJuID0gXCJbXlwiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdKz9cIjtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleSA9IDA7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICB2YXIgdHJ5Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGlmIChpIDwgdG9rZW5zLmxlbmd0aCAmJiB0b2tlbnNbaV0udHlwZSA9PT0gdHlwZSlcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnNbaSsrXS52YWx1ZTtcbiAgICB9O1xuICAgIHZhciBtdXN0Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRyeUNvbnN1bWUodHlwZSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YXIgX2EgPSB0b2tlbnNbaV0sIG5leHRUeXBlID0gX2EudHlwZSwgaW5kZXggPSBfYS5pbmRleDtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuZXhwZWN0ZWQgXCIgKyBuZXh0VHlwZSArIFwiIGF0IFwiICsgaW5kZXggKyBcIiwgZXhwZWN0ZWQgXCIgKyB0eXBlKTtcbiAgICB9O1xuICAgIHZhciBjb25zdW1lVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHdoaWxlICgodmFsdWUgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKSB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICB3aGlsZSAoaSA8IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKTtcbiAgICAgICAgdmFyIG5hbWUgPSB0cnlDb25zdW1lKFwiTkFNRVwiKTtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKTtcbiAgICAgICAgaWYgKG5hbWUgfHwgcGF0dGVybikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNoYXIgfHwgXCJcIjtcbiAgICAgICAgICAgIGlmIChwcmVmaXhlcy5pbmRleE9mKHByZWZpeCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBwcmVmaXg7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogcGF0dGVybiB8fCBkZWZhdWx0UGF0dGVybixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gY2hhciB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3BlbiA9IHRyeUNvbnN1bWUoXCJPUEVOXCIpO1xuICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gdHJ5Q29uc3VtZShcIk5BTUVcIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuXzEgPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICBtdXN0Q29uc3VtZShcIkNMT1NFXCIpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVfMSB8fCAocGF0dGVybl8xID8ga2V5KysgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuYW1lXzEgJiYgIXBhdHRlcm5fMSA/IGRlZmF1bHRQYXR0ZXJuIDogcGF0dGVybl8xLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogc3VmZml4LFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtdXN0Q29uc3VtZShcIkVORFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqL1xuZnVuY3Rpb24gY29tcGlsZShzdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGU7XG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uKHRva2Vucywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHJlRmxhZ3MgPSBmbGFncyhvcHRpb25zKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2EsIF9iID0gb3B0aW9ucy52YWxpZGF0ZSwgdmFsaWRhdGUgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iO1xuICAgIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICAgIHZhciBtYXRjaGVzID0gdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpJFwiLCByZUZsYWdzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGEgPyBkYXRhW3Rva2VuLm5hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIG9wdGlvbmFsID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiP1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIjtcbiAgICAgICAgICAgIHZhciByZXBlYXQgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IGJlIGVtcHR5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYWxsIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKFN0cmluZyh2YWx1ZSksIHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciB0eXBlT2ZNZXNzYWdlID0gcmVwZWF0ID8gXCJhbiBhcnJheVwiIDogXCJhIHN0cmluZ1wiO1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gYmUgXCIgKyB0eXBlT2ZNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbjtcbi8qKlxuICogQ3JlYXRlIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIHNwZWMuXG4gKi9cbmZ1bmN0aW9uIG1hdGNoKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgdmFyIHJlID0gcGF0aFRvUmVnZXhwKHN0ciwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5tYXRjaCA9IG1hdGNoO1xuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuZGVjb2RlLCBkZWNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBhdGhuYW1lKSB7XG4gICAgICAgIHZhciBtID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghbSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHBhdGggPSBtWzBdLCBpbmRleCA9IG0uaW5kZXg7XG4gICAgICAgIHZhciBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGlmIChtW2ldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChrZXkubW9kaWZpZXIgPT09IFwiKlwiIHx8IGtleS5tb2RpZmllciA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gbVtpXS5zcGxpdChrZXkucHJlZml4ICsga2V5LnN1ZmZpeCkubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlKHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZShtW2ldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgaW5kZXg6IGluZGV4LCBwYXJhbXM6IHBhcmFtcyB9O1xuICAgIH07XG59XG5leHBvcnRzLnJlZ2V4cFRvRnVuY3Rpb24gPSByZWdleHBUb0Z1bmN0aW9uO1xuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGZsYWdzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLnNlbnNpdGl2ZSA/IFwiXCIgOiBcImlcIjtcbn1cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICAgIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKTtcbiAgICBpZiAoZ3JvdXBzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGksXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAocGF0aHMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFydHMgPSBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKS5zb3VyY2U7IH0pO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XCIgKyBwYXJ0cy5qb2luKFwifFwiKSArIFwiKVwiLCBmbGFncyhvcHRpb25zKSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvUmVnZXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKTtcbn1cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdleHAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLnN0cmljdCwgc3RyaWN0ID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsIF9iID0gb3B0aW9ucy5zdGFydCwgc3RhcnQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG9wdGlvbnMuZW5kLCBlbmQgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfZCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfZDtcbiAgICB2YXIgZW5kc1dpdGggPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmVuZHNXaXRoIHx8IFwiXCIpICsgXCJdfCRcIjtcbiAgICB2YXIgZGVsaW1pdGVyID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl1cIjtcbiAgICB2YXIgcm91dGUgPSBzdGFydCA/IFwiXlwiIDogXCJcIjtcbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICAgIGZvciAodmFyIF9pID0gMCwgdG9rZW5zXzEgPSB0b2tlbnM7IF9pIDwgdG9rZW5zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc18xW19pXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4ucHJlZml4KSk7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5zdWZmaXgpKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5wYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleXMpXG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeCB8fCBzdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLm1vZGlmaWVyID09PSBcIitcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2QgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgPyBcIj9cIiA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKD86XCIgKyBzdWZmaXggKyBwcmVmaXggKyBcIig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSkqKVwiICsgc3VmZml4ICsgXCIpXCIgKyBtb2Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChlbmQpIHtcbiAgICAgICAgaWYgKCFzdHJpY3QpXG4gICAgICAgICAgICByb3V0ZSArPSBkZWxpbWl0ZXIgKyBcIj9cIjtcbiAgICAgICAgcm91dGUgKz0gIW9wdGlvbnMuZW5kc1dpdGggPyBcIiRcIiA6IFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGVuZFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGlzRW5kRGVsaW1pdGVkID0gdHlwZW9mIGVuZFRva2VuID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRlbGltaXRlci5pbmRleE9mKGVuZFRva2VuW2VuZFRva2VuLmxlbmd0aCAtIDFdKSA+IC0xXG4gICAgICAgICAgICA6IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgIGVuZFRva2VuID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghc3RyaWN0KSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgZGVsaW1pdGVyICsgXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpKT9cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRW5kRGVsaW1pdGVkKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/PVwiICsgZGVsaW1pdGVyICsgXCJ8XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVnRXhwKHJvdXRlLCBmbGFncyhvcHRpb25zKSk7XG59XG5leHBvcnRzLnRva2Vuc1RvUmVnZXhwID0gdG9rZW5zVG9SZWdleHA7XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSlcbiAgICAgICAgcmV0dXJuIGFycmF5VG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5wYXRoVG9SZWdleHAgPSBwYXRoVG9SZWdleHA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9IG51bGwgfCB7IF9fTjogZmFsc2UgfSB8ICh7IF9fTjogdHJ1ZSB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBiYXNlUGF0aCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGJhc2VQYXRoKVxuICAgICAgOiBiYXNlUGF0aCArIHBhdGhcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoY3VycmVudFBhdGg6IHN0cmluZywgaHJlZjogVXJsKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIHJldHVybiBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgIDogZmluYWxVcmwuaHJlZlxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIHVybEFzU3RyaW5nXG4gIH1cbn1cblxuY29uc3QgUEFHRV9MT0FEX0VSUk9SID0gU3ltYm9sKCdQQUdFX0xPQURfRVJST1InKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtMb2FkaW5nRXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIFBBR0VfTE9BRF9FUlJPUiwge30pXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPFByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sIEFwcDogQXBwQ29tcG9uZW50KSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnlcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cblxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtMb2FkaW5nRXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0czogaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlKVxuICAgIH1cblxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGNvbnN0IHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5wcm9taXNlZEJ1aWxkTWFuaWZlc3RcblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lLCBzZWFyY2hQYXJhbXMgfSA9IHBhcnNlZFxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcylcblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKSB7XG4gICAgICByZXNvbHZlZEFzID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBhcyxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIGJhc2VQYXRoLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHRoaXMuX3Jlc29sdmVIcmVmKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lIVxuICAgICAgKVxuICAgIH1cbiAgICByZXNvbHZlZEFzID0gZGVsQmFzZVBhdGgocmVzb2x2ZWRBcylcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYCBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW5jb21wYXRpYmxlLWhyZWYtYXNgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgc2hhbGxvd1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSEsIHF1ZXJ5LCBjbGVhbmVkQXMsIHJvdXRlSW5mbykuY2F0Y2goXG4gICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgICAgfVxuICAgICAgKVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uICYmICdfTl9YJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKChvcHRpb25zIGFzIGFueSkuX05fWCwgKG9wdGlvbnMgYXMgYW55KS5fTl9ZKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoUEFHRV9MT0FEX0VSUk9SIGluIGVyciB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICcvX2Vycm9yJ1xuICAgICAgKVxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgIGVycixcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSBhcyBhbnkpXG4gICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gY2FjaGVkUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgZGVsQmFzZVBhdGgoYXMpLFxuICAgICAgICAgIF9fTl9TU0dcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8UHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICBfcmVzb2x2ZUhyZWYocGFyc2VkSHJlZjogVXJsT2JqZWN0LCBwYWdlczogc3RyaW5nW10pIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IGRlbm9ybWFsaXplUGFnZVBhdGgoZGVsQmFzZVBhdGgocGF0aG5hbWUhKSlcblxuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICByZXR1cm4gcGFyc2VkSHJlZlxuICAgIH1cblxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNEeW5hbWljUm91dGUocGFnZSkgJiZcbiAgICAgICAgICBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYWdlKVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGFzUGF0aCksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFByaXZhdGVSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcblxuY29uc3QgRFVNTVlfQkFTRSA9IG5ldyBVUkwoXG4gIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbilcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBEVU1NWV9CQVNFKSA6IERVTU1ZX0JBU0VcbiAgY29uc3Qge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmLFxuICAgIG9yaWdpbixcbiAgICBwcm90b2NvbCxcbiAgfSA9IG5ldyBVUkwodXJsLCByZXNvbHZlZEJhc2UpXG4gIGlmIChcbiAgICBvcmlnaW4gIT09IERVTU1ZX0JBU0Uub3JpZ2luIHx8XG4gICAgKHByb3RvY29sICE9PSAnaHR0cDonICYmIHByb3RvY29sICE9PSAnaHR0cHM6JylcbiAgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMJylcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKERVTU1ZX0JBU0Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbmV4cG9ydCB7IHBhdGhUb1JlZ2V4cCB9XG5cbmV4cG9ydCBjb25zdCBtYXRjaGVyT3B0aW9ucyA9IHtcbiAgc2Vuc2l0aXZlOiBmYWxzZSxcbiAgZGVsaW1pdGVyOiAnLycsXG4gIGRlY29kZTogZGVjb2RlUGFyYW0sXG59XG5cbmV4cG9ydCBjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zID0ge1xuICAuLi5tYXRjaGVyT3B0aW9ucyxcbiAgc3RyaWN0OiB0cnVlLFxufVxuXG5leHBvcnQgZGVmYXVsdCAoY3VzdG9tUm91dGUgPSBmYWxzZSkgPT4ge1xuICByZXR1cm4gKHBhdGg6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gICAgY29uc3QgbWF0Y2hlclJlZ2V4ID0gcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChcbiAgICAgIHBhdGgsXG4gICAgICBrZXlzLFxuICAgICAgY3VzdG9tUm91dGUgPyBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIDogbWF0Y2hlck9wdGlvbnNcbiAgICApXG4gICAgY29uc3QgbWF0Y2hlciA9IHBhdGhUb1JlZ2V4cC5yZWdleHBUb0Z1bmN0aW9uKFxuICAgICAgbWF0Y2hlclJlZ2V4LFxuICAgICAga2V5cyxcbiAgICAgIG1hdGNoZXJPcHRpb25zXG4gICAgKVxuXG4gICAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyYW1zPzogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXRobmFtZSA9PSBudWxsID8gZmFsc2UgOiBtYXRjaGVyKHBhdGhuYW1lKVxuICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChjdXN0b21Sb3V0ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgLy8gdW5uYW1lZCBwYXJhbXMgc2hvdWxkIGJlIHJlbW92ZWQgYXMgdGhleVxuICAgICAgICAgIC8vIGFyZSBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluIHRoZSBkZXN0aW5hdGlvblxuICAgICAgICAgIGlmICh0eXBlb2Yga2V5Lm5hbWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBkZWxldGUgKHJlcy5wYXJhbXMgYXMgYW55KVtrZXkubmFtZV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4ucGFyYW1zLCAuLi5yZXMucGFyYW1zIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVjb2RlUGFyYW0ocGFyYW06IHN0cmluZykge1xuICB0cnkge1xuICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nKVxuICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgdGhyb3cgZXJyXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbnR5cGUgUGFyYW1zID0geyBbcGFyYW06IHN0cmluZ106IGFueSB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBhcmVEZXN0aW5hdGlvbihcbiAgZGVzdGluYXRpb246IHN0cmluZyxcbiAgcGFyYW1zOiBQYXJhbXMsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgYXBwZW5kUGFyYW1zVG9RdWVyeTogYm9vbGVhbixcbiAgYmFzZVBhdGg6IHN0cmluZ1xuKSB7XG4gIGxldCBwYXJzZWREZXN0aW5hdGlvbjoge1xuICAgIHF1ZXJ5PzogUGFyc2VkVXJsUXVlcnlcbiAgICBwcm90b2NvbD86IHN0cmluZ1xuICAgIGhvc3RuYW1lPzogc3RyaW5nXG4gICAgcG9ydD86IHN0cmluZ1xuICB9ICYgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4gPSB7fSBhcyBhbnlcblxuICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9ID0gbmV3IFVSTChkZXN0aW5hdGlvbilcblxuICAgIHBhcnNlZERlc3RpbmF0aW9uID0ge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hQYXJhbXNcbiAgKVxuICBjb25zdCBkZXN0UXVlcnkgPSBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeVxuICBjb25zdCBkZXN0UGF0aCA9IGAke3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIX0ke1xuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggfHwgJydcbiAgfWBcbiAgY29uc3QgZGVzdFBhdGhQYXJhbUtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gIHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoZGVzdFBhdGgsIGRlc3RQYXRoUGFyYW1LZXlzKVxuXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1zID0gZGVzdFBhdGhQYXJhbUtleXMubWFwKChrZXkpID0+IGtleS5uYW1lKVxuXG4gIGxldCBkZXN0aW5hdGlvbkNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUoXG4gICAgZGVzdFBhdGgsXG4gICAgLy8gd2UgZG9uJ3QgdmFsaWRhdGUgd2hpbGUgY29tcGlsaW5nIHRoZSBkZXN0aW5hdGlvbiBzaW5jZSB3ZSBzaG91bGRcbiAgICAvLyBoYXZlIGFscmVhZHkgdmFsaWRhdGVkIGJlZm9yZSB3ZSBnb3QgdG8gdGhpcyBwb2ludCBhbmQgdmFsaWRhdGluZ1xuICAgIC8vIGJyZWFrcyBjb21waWxpbmcgZGVzdGluYXRpb25zIHdpdGggbmFtZWQgcGF0dGVybiBwYXJhbXMgZnJvbSB0aGUgc291cmNlXG4gICAgLy8gZS5nLiAvc29tZXRoaW5nOmhlbGxvKC4qKSAtPiAvYW5vdGhlci86aGVsbG8gaXMgYnJva2VuIHdpdGggdmFsaWRhdGlvblxuICAgIC8vIHNpbmNlIGNvbXBpbGUgdmFsaWRhdGlvbiBpcyBtZWFudCBmb3IgcmV2ZXJzaW5nIGFuZCBub3QgZm9yIGluc2VydGluZ1xuICAgIC8vIHBhcmFtcyBmcm9tIGEgc2VwYXJhdGUgcGF0aC1yZWdleCBpbnRvIGFub3RoZXJcbiAgICB7IHZhbGlkYXRlOiBmYWxzZSB9XG4gIClcbiAgbGV0IG5ld1VybFxuXG4gIC8vIHVwZGF0ZSBhbnkgcGFyYW1zIGluIHF1ZXJ5IHZhbHVlc1xuICBmb3IgKGNvbnN0IFtrZXksIHN0ck9yQXJyYXldIG9mIE9iamVjdC5lbnRyaWVzKGRlc3RRdWVyeSkpIHtcbiAgICBsZXQgdmFsdWUgPSBBcnJheS5pc0FycmF5KHN0ck9yQXJyYXkpID8gc3RyT3JBcnJheVswXSA6IHN0ck9yQXJyYXlcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAgICAgLy8gY29ycmVjdGx5XG4gICAgICB2YWx1ZSA9IGAvJHt2YWx1ZX1gXG4gICAgICBjb25zdCBxdWVyeUNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUodmFsdWUsIHsgdmFsaWRhdGU6IGZhbHNlIH0pXG4gICAgICB2YWx1ZSA9IHF1ZXJ5Q29tcGlsZXIocGFyYW1zKS5zdWJzdHIoMSlcbiAgICB9XG4gICAgZGVzdFF1ZXJ5W2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgLy8gYWRkIHBhdGggcGFyYW1zIHRvIHF1ZXJ5IGlmIGl0J3Mgbm90IGEgcmVkaXJlY3QgYW5kIG5vdFxuICAvLyBhbHJlYWR5IGRlZmluZWQgaW4gZGVzdGluYXRpb24gcXVlcnkgb3IgcGF0aFxuICBjb25zdCBwYXJhbUtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG5cbiAgaWYgKFxuICAgIGFwcGVuZFBhcmFtc1RvUXVlcnkgJiZcbiAgICAhcGFyYW1LZXlzLnNvbWUoKGtleSkgPT4gZGVzdFBhdGhQYXJhbXMuaW5jbHVkZXMoa2V5KSlcbiAgKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgcGFyYW1LZXlzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gZGVzdFF1ZXJ5KSkge1xuICAgICAgICBkZXN0UXVlcnlba2V5XSA9IHBhcmFtc1trZXldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2hvdWxkQWRkQmFzZVBhdGggPSBkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykgJiYgYmFzZVBhdGhcblxuICB0cnkge1xuICAgIG5ld1VybCA9IGAke3Nob3VsZEFkZEJhc2VQYXRoID8gYmFzZVBhdGggOiAnJ30ke2VuY29kZVVSSShcbiAgICAgIGRlc3RpbmF0aW9uQ29tcGlsZXIocGFyYW1zKVxuICAgICl9YFxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFBhcmFtc1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyLm1lc3NhZ2UubWF0Y2goL0V4cGVjdGVkIC4qPyB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5LykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRvIHVzZSBhIG11bHRpLW1hdGNoIGluIHRoZSBkZXN0aW5hdGlvbiB5b3UgbXVzdCBhZGQgXFxgKlxcYCBhdCB0aGUgZW5kIG9mIHRoZSBwYXJhbSBuYW1lIHRvIHNpZ25pZnkgaXQgc2hvdWxkIHJlcGVhdC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1tdWx0aS1tYXRjaGBcbiAgICAgIClcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH1cblxuICAvLyBRdWVyeSBtZXJnZSBvcmRlciBsb3dlc3QgcHJpb3JpdHkgdG8gaGlnaGVzdFxuICAvLyAxLiBpbml0aWFsIFVSTCBxdWVyeSB2YWx1ZXNcbiAgLy8gMi4gcGF0aCBzZWdtZW50IHZhbHVlc1xuICAvLyAzLiBkZXN0aW5hdGlvbiBzcGVjaWZpZWQgcXVlcnkgdmFsdWVzXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0ge1xuICAgIC4uLnF1ZXJ5LFxuICAgIC4uLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5LFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdVcmwsXG4gICAgcGFyc2VkRGVzdGluYXRpb24sXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIGl0ZW0pKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgdmFsdWUpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHBhdGhNYXRjaCBmcm9tICcuL3BhdGgtbWF0Y2gnXG5pbXBvcnQgcHJlcGFyZURlc3RpbmF0aW9uIGZyb20gJy4vcHJlcGFyZS1kZXN0aW5hdGlvbidcbmltcG9ydCB7IFJld3JpdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvbG9hZC1jdXN0b20tcm91dGVzJ1xuXG5jb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXIgPSBwYXRoTWF0Y2godHJ1ZSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKFxuICBhc1BhdGg6IHN0cmluZyxcbiAgcGFnZXM6IHN0cmluZ1tdLFxuICBiYXNlUGF0aDogc3RyaW5nLFxuICByZXdyaXRlczogUmV3cml0ZVtdLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIHJlc29sdmVIcmVmOiAocGF0aDogc3RyaW5nKSA9PiBzdHJpbmdcbikge1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGFzUGF0aCkpIHtcbiAgICBmb3IgKGNvbnN0IHJld3JpdGUgb2YgcmV3cml0ZXMpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXIgPSBjdXN0b21Sb3V0ZU1hdGNoZXIocmV3cml0ZS5zb3VyY2UpXG4gICAgICBjb25zdCBwYXJhbXMgPSBtYXRjaGVyKGFzUGF0aClcblxuICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICBpZiAoIXJld3JpdGUuZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIGEgcHJveGllZCByZXdyaXRlIHdoaWNoIGlzbid0IGhhbmRsZWQgb24gdGhlIGNsaWVudFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVzdFJlcyA9IHByZXBhcmVEZXN0aW5hdGlvbihcbiAgICAgICAgICByZXdyaXRlLmRlc3RpbmF0aW9uLFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIHJld3JpdGUuYmFzZVBhdGggPT09IGZhbHNlID8gJycgOiBiYXNlUGF0aFxuICAgICAgICApXG4gICAgICAgIGFzUGF0aCA9IGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucXVlcnkpXG5cbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKGFzUGF0aCkpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbiAgICAgICAgICAvLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGFzUGF0aClcblxuICAgICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnLi4vLi4vbGliL2xvYWQtZW52LWNvbmZpZydcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTVRZaUlHaGxhV2RvZEQwaU9TSWdkbWxsZDBKdmVEMGlNQ0F3SURFMklEa2lJR1pwYkd3OUltNXZibVVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUkrRFFvOGNHRjBhQ0JrUFNKTk9DNHpNamcwTVNBNExqYzNOREl4UXpndU1EVTVOalVnT0M0M05qZ3lNaUEzTGpjNU16SXhJRGd1TmpVNU5qSWdOeTQxT1RJNE5pQTRMalExTURJMFRERXVNamc0TkRVZ01TNDROVGcwTkVNd0xqZzROelF3TkNBeExqUXpPVEV5SURBdU9UQXlNaklnTUM0M056UXdPREVnTVM0ek1qRTFOQ0F3TGpNM016SXdORU14TGpjME1EWTVJQzB3TGpBeU56WTNOekVnTWk0ME1EVTFPU0F0TUM0d01USTROak16SURJdU9EQTJOamNnTUM0ME1EWXlPVEpNT0M0ek9EUTVJRFl1TWpNNU1EaE1NVFF1TWpFM05DQXdMalkyTURjeE5rTXhOQzQyTXpZM0lEQXVNalU1T0RNNUlERTFMak13TVRVZ01DNHlOelEyTlRFZ01UVXVOekF5TkNBd0xqWTVNemd3TWtNeE5pNHhNRE0ySURFdU1URXlPVFlnTVRZdU1EZzRPQ0F4TGpjM09DQXhOUzQyTmpreklESXVNVGM1TURSTU9TNHdOemMyTmlBNExqUTRNelV5UXpndU9EWTRNRGtnT0M0Mk9ETTRJRGd1TlRrM01EZ2dPQzQzT0RBeUlEZ3VNekk0TkRFZ09DNDNOelF5TVZvaUlHWnBiR3c5SWlNd01qQTNNMFVpTHo0TkNqd3ZjM1puUGcwS1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU9TSWdhR1ZwWjJoMFBTSXhOU0lnZG1sbGQwSnZlRDBpTUNBd0lEa2dNVFVpSUdacGJHdzlJbTV2Ym1VaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK0RRbzhjR0YwYUNCa1BTSk5PQzQyT1RnNE9DQTNMalV3TURBelF6Z3VOams0T0RnZ055NDNOamc0TmlBNExqVTVOakl6SURndU1ETTNOalVnT0M0ek9URXpOeUE0TGpJME1qWXhUREV1T1RReE5qTWdNVFF1TmpreU0wTXhMalV6TVRNMUlERTFMakV3TWpZZ01DNDROall4TkRNZ01UVXVNVEF5TmlBd0xqUTFOakF5TmlBeE5DNDJPVEl6UXpBdU1EUTFPVEE0TVNBeE5DNHlPREl5SURBdU1EUTFPVEE0TVNBeE15NDJNVGN4SURBdU5EVTJNREkySURFekxqSXdOamhNTmk0eE5qTXhNU0EzTGpVd01EQXpUREF1TkRVMk1qSTFJREV1Tnprek1qUkRNQzR3TkRZeE1EYzBJREV1TXpneU9UVWdNQzR3TkRZeE1EYzBJREF1TnpFM09UUTRJREF1TkRVMk1qSTFJREF1TXpBM09EWXpRekF1T0RZMk16UXpJQzB3TGpFd01qWXhPU0F4TGpVek1UVTFJQzB3TGpFd01qWXhPU0F4TGprME1UZ3pJREF1TXpBM09EWXpURGd1TXpreE5UY2dOaTQzTlRjME5FTTRMalU1TmpRMklEWXVPVFl5TlNBNExqWTVPRGc0SURjdU1qTXhNamtnT0M0Mk9UZzRPQ0EzTGpVd01EQXpXaUlnWm1sc2JEMGlJekF5TURjelJTSXZQZzBLUEM5emRtYytEUW89XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTmlJZ2FHVnBaMmgwUFNJeE1TSWdkbWxsZDBKdmVEMGlNQ0F3SURZZ01URWlJR1pwYkd3OUltNXZibVVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUkrRFFvOGNHRjBhQ0JrUFNKTk5TNDRORGczTWlBMUxqZzBOamN4UXpVdU9EUTROeklnTmk0d01qVTVNeUExTGpjNE1ESTVJRFl1TWpBMU1USWdOUzQyTkRNM01pQTJMak0wTVRjMlRERXVNelF6T1NBeE1DNDJOREUxUXpFdU1EY3dNemdnTVRBdU9URTFNU0F3TGpZeU5qa3dOeUF4TUM0NU1UVXhJREF1TXpVek5EazJJREV3TGpZME1UVkRNQzR3T0RBd09EUTNJREV3TGpNMk9ERWdNQzR3T0RBd09EUTNJRGt1T1RJME56VWdNQzR6TlRNME9UWWdPUzQyTlRFeVREUXVNVFU0TWpFZ05TNDRORFkzTVV3d0xqTTFNell5T1NBeUxqQTBNakU1UXpBdU1EZ3dNakUzTmlBeExqYzJPRFkzSURBdU1EZ3dNakUzTmlBeExqTXlOVE16SURBdU16VXpOakk1SURFdU1EVXhPVFJETUM0Mk1qY3dOQ0F3TGpjM09ESTRPU0F4TGpBM01EVXhJREF1TnpjNE1qZzVJREV1TXpRME1ETWdNUzR3TlRFNU5FdzFMalkwTXpnMUlEVXVNelV4TmpWRE5TNDNPREEwTkNBMUxqUTRPRE0ySURVdU9EUTROeklnTlM0Mk5qYzFOU0ExTGpnME9EY3lJRFV1T0RRMk56RmFJaUJtYVd4c1BTSWpORVk1TmtaR0lpOCtEUW84TDNOMlp6NE5DZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTkRNaUlHaGxhV2RvZEQwaU5EZ2lJSFpwWlhkQ2IzZzlJakFnTUNBME15QTBPQ0lnWm1sc2JEMGlibTl1WlNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0TkNqeHdZWFJvSUdROUlrMHhNUzR5SURFekxqTTVNVEZNTUNBeE55NDVPVEV4VERFeUxqVWdORGN1T1RreE1VdzBNaTQxSURNMUxqUTVNVEZNTXpjdU55QXlNeTQ0T1RFeFF6TTNMallnTWpNdU56a3hNU0F6Tnk0MklESXpMamM1TVRFZ016Y3VOU0F5TXk0M09URXhRek0zTGpRZ01qTXVOemt4TVNBek55NDBJREl6TGpZNU1URWdNemN1TXlBeU15NDJPVEV4UXpNM0xqSWdNak11TlRreE1TQXpOeTR4SURJekxqVTVNVEVnTXpZdU9TQXlNeTQxT1RFeFF6TTJMamtnTWpNdU5Ua3hNU0F6Tmk0NUlESXpMalU1TVRFZ016WXVPQ0F5TXk0MU9URXhTRE0yTGpkSU16WXVOa2d6Tmk0MVF6TTJMalFnTWpNdU5Ua3hNU0F6Tmk0MElESXpMalU1TVRFZ016WXVNeUF5TXk0MU9URXhTRE0yTGpKRE16WXVNU0F5TXk0MU9URXhJRE0ySURJekxqVTVNVEVnTXpVdU9TQXlNeTQyT1RFeFF6TTFMalFnTWpNdU9Ea3hNU0F6TlM0eElESTBMakk1TVRFZ016VWdNalF1TmpreE1VTXpOQzQySURJMkxqRTVNVEVnTXpNdU5TQXlOeTQxT1RFeElETXhMamtnTWpndU1Ua3hNVU15T1M0eUlESTVMakk1TVRFZ01qWXVNU0F5Tnk0NU9URXhJREkwTGprZ01qVXVNamt4TVVNeU15NDRJREl5TGpVNU1URWdNalV1TVNBeE9TNDBPVEV4SURJM0xqZ2dNVGd1TWpreE1VTXlPUzQwSURFM0xqVTVNVEVnTXpFdU1TQXhOeTQzT1RFeElETXlMalVnTVRndU5Ua3hNVU16TWk0NUlERTRMamM1TVRFZ016TXVOQ0F4T0M0NE9URXhJRE16TGprZ01UZ3VOamt4TVVNek5DQXhPQzQyT1RFeElETTBMakVnTVRndU5Ua3hNU0F6TkM0eElERTRMalU1TVRGRE16UXVNU0F4T0M0MU9URXhJRE0wTGpJZ01UZ3VOVGt4TVNBek5DNHlJREU0TGpRNU1URk1NelF1TXlBeE9DNHpPVEV4VERNMExqUWdNVGd1TWpreE1Vd3pOQzQxSURFNExqRTVNVEZNTXpRdU5pQXhPQzR3T1RFeFF6TTBMallnTVRndU1Ea3hNU0F6TkM0MklERTRMakE1TVRFZ016UXVOaUF4Tnk0NU9URXhRek0wTGpjZ01UY3VPRGt4TVNBek5DNDNJREUzTGpjNU1URWdNelF1T0NBeE55NDJPVEV4UXpNMExqZ2dNVGN1TlRreE1TQXpOQzQ0SURFM0xqVTVNVEVnTXpRdU9DQXhOeTQwT1RFeFF6TTBMamdnTVRjdU16a3hNU0F6TkM0NElERTNMak01TVRFZ016UXVPQ0F4Tnk0eU9URXhURE13SURVdU5Ua3hNVEZNTVRndU9DQXhNQzR5T1RFeFF6RTRJREV3TGpRNU1URWdNVGN1TWlBeE1DNHhPVEV4SURFMkxqa2dPUzR6T1RFeE1VTXhOaTQzSURndU9Ea3hNVEVnTVRZdU9DQTRMak01TVRFeUlERTNJRGN1T1RreE1USkRNVGN1T0NBMkxqVTVNVEV4SURFNElEUXVPRGt4TVRFZ01UY3VNeUF6TGpJNU1URXhRekUyTGpJZ01DNDFPVEV4TVRVZ01UTXVNU0F0TUM0M01EZzRPRFVnTVRBdU15QXdMak01TVRFeE5VTTNMallnTVM0ME9URXhNU0EyTGpNZ05DNDFPVEV4TVNBM0xqUWdOeTR6T1RFeE1rTTRJRGd1T1RreE1USWdPUzQwSURrdU9Ua3hNVEVnTVRBdU9TQXhNQzQwT1RFeFF6RXhMak1nTVRBdU5Ua3hNU0F4TVM0M0lERXdMamc1TVRFZ01URXVPU0F4TVM0ek9URXhRekV5TGpNZ01USXVNRGt4TVNBeE1TNDVJREV5TGprNU1URWdNVEV1TWlBeE15NHpPVEV4V2lJZ1ptbHNiRDBpSTBSQlJUSkZPQ0l2UGcwS1BDOXpkbWMrRFFvPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU5UTWlJR2hsYVdkb2REMGlORFVpSUhacFpYZENiM2c5SWpBZ01DQTFNeUEwTlNJZ1ptbHNiRDBpYm05dVpTSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklqNE5Danh3WVhSb0lHUTlJazAwT1M0d01UUTJJREkwTGpRNU9UWkRORGd1Tnprek5pQXlOUzQwTnpRNUlEUTNMamd6TmpZZ01qWXVNRGM0TXlBME5pNDROakV6SURJMUxqZzFOek5NTkRNdU16VXdNeUF5TlM0d05qRTNURFF4TGpneU5UVWdNekV1TnpreE1Vd3pOQzQ0TmpVMElESXpMakV6T1RGTU1qTXVORFUwTnlBeU1DNDFOVE0wUXpJeUxqUTNPVFFnTWpBdU16TXlOU0F5TVM0NE56WWdNVGt1TXpjMU5DQXlNaTR3T1RjZ01UZ3VOREF3TWt3eU5TNDJOemN4SURJdU5qQXdOekZETWpVdU9EazRNU0F4TGpZeU5UUXpJREkyTGpnMU5URWdNUzR3TWpJd01TQXlOeTQ0TXpBMElERXVNalF6TURGTU5URXVNak0zSURZdU5UUTJPRGhETlRJdU1qRXlNeUEyTGpjMk56ZzRJRFV5TGpneE5UY2dOeTQzTWpRNE9TQTFNaTQxT1RRM0lEZ3VOekF3TVRkTU5Ea3VNREUwTmlBeU5DNDBPVGsyV2lJZ1ptbHNiRDBpSTBSQlJUSkZPQ0l2UGcwS1BIQmhkR2dnWkQwaVRUVXVNalkyTmlBek9DNHpOelE0VERjdU1qVTFOVFlnTWprdU5UazNNMHcxTGpZNU5URXlJREk1TGpJME16ZERNeTQyTkRjd05DQXlPQzQzTnprMklESXVNelkwTnpZZ01qWXVOelEySURJdU9ESTRPRFVnTWpRdU5qazNPVXcyTGpRd09EazNJRGd1T0RrNE5ETkROaTQ0TnpNd05pQTJMamcxTURNMUlEZ3VPVEEyTnpJZ05TNDFOamd3TnlBeE1DNDVOVFE0SURZdU1ETXlNVFpNTXpRdU16WXhOQ0F4TVM0ek16WkRNell1TkRBNU5TQXhNUzQ0TURBeElETTNMalk1TVRjZ01UTXVPRE16T0NBek55NHlNamMzSURFMUxqZzRNVGxNTXpNdU5qWTVOaUF6TVM0MU9ETTRRek16TGpJd05UWWdNek11TmpNeE9TQXpNUzR4TnpFNUlETTBMamt4TkRFZ01qa3VNVEl6T0NBek5DNDBOVEF4VERFNExqTTVOVGdnTXpJdU1ERTVNVXcxTGpJMk5qWWdNemd1TXpjME9GcE5OUzQzT1RZeU5TQXlOaTR5T0RrelRERXlMakEyTWpjZ01qY3VORGd5TjB3eE1DNHdNRElnTXpNdU1UWTBUREU0TGpBeE1Ua2dNamd1T0RNd04wd3pNQzQ1TVRBeklETXhMalV5TmpsTU16UXVOREF5SURFMExqRXhOelZNTVRBdU1qZzRJRGd1T0RjNU9UUk1OUzQzT1RZeU5TQXlOaTR5T0RreldpSWdabWxzYkQwaUkwUkJSVEpGT0NJdlBnMEtQQzl6ZG1jK0RRbz1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlNek01SWlCb1pXbG5hSFE5SWpRMU5pSWdkbWxsZDBKdmVEMGlNQ0F3SURNek9TQTBOVFlpSUdacGJHdzlJbTV2Ym1VaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK0RRbzhjR0YwYUNCa1BTSk5NekF4TGpnMElEWXdMakk0TkROTU16QXpMamM1T0NBMU5TNDVNREl4UXpJNE55NDJNVGdnTlRrdU1USXhOeUF5TnpNdU5EQXhJRFkxTGpJMk1qSWdNall4TGpRMU1pQTNOQzR6TVRBNFF6STBOQzQySURnM0xqQTJOQ0F5TXpZdU1qWXpJREV3TWk0MU1UWWdNak15TGpJeU15QXhNVE11TWpJM1F6SXpNQzQwTXpFZ01URTRMakF3TWlBeU1qa3VNRGszSURFeU1pNDRPVGdnTWpJNExqTXhOQ0F4TWpjdU5qRTBRekl5TWk0Mk16SWdNVEkzTGpNM015QXlNVFl1TWpZeUlERXlPQzR6TXpZZ01qQTVMalVnTVRNd0xqUTJOVU14T1RZdU9UazVJREV6TkM0ek9USWdNVGc0TGpFMk5pQXhORFF1TWpVNUlERTRNUzQyTlRRZ01UWXhMalV3TmtNeE56VXVPU0F4TnpZdU56Y3hJREUzTWk0MU5qa2dNVGsxTGpnNE55QXhOamd1TnpBeElESXhPQzR3TWtNeE5qVXVNVElnTWpNNExqVTFOaUF4TmpFdU1EWWdNall4TGpnek55QXhOVFF1TWpnZ01qZzBMall3TmtNeE5EWXVOVFkxSURNeE1DNDJNVFlnTVRNMkxqUTBOeUF6TXpJdU1UQTJJREV5TXk0ek9Ea2dNelV3TGpJNFF6RXhNaTQxT1RnZ016WTFMakk1TlNBNU9TNDJOek16SURNM055NHhJRGcwTGprNU16WWdNemcxTGpNM05VTTNNaTR5TVRBNElETTVNaTQxTmpFZ05UY3VOamcyTWlBek9UY3VNamczSURReExqYzNNaUF6T1RrdU5ETXpRekkzTGpjNE16Y2dOREF4TGpNek5DQXhNeTQzTWpVMklEUXdNUzR5T0RjZ01DNHdNVFE0TnprNUlETTVPUzQ0TkRKTU1UQXVNemsyTXlBME1EUXVORGd5UXpJd0xqZzVOVFFnTkRBMUxqRXpJRE14TGpZeU5qZ2dOREEwTGpjek15QTBNaTR6TVRrMElEUXdNeTR5TnpWRE5UZ3VOekU0TmlBME1ERXVNRFEzSURjekxqY3lORE1nTXprMkxqRTFNeUE0Tmk0NU16STRJRE00T0M0M016SkRNVEF5TGpFeE5TQXpPREF1TVRreUlERXhOUzQwTkRJZ016WTRMakF4TXlBeE1qWXVOVGNnTXpVeUxqVXpNVU14TXprdU9EYzBJRE16TXk0NU9Ua2dNVFV3TGpFM05TQXpNVEl1TVRRMUlERTFPQzR3TWlBeU9EVXVOekF5UXpFMk5DNDROVEVnTWpZeUxqY3lNeUF4TmpndU9UUXhJREl6T1M0ek1qZ2dNVGN5TGpVeU5pQXlNVGd1TmpnM1F6RTNOaTR6TlNBeE9UWXVOelEzSURFM09TNDJOekVnTVRjM0xqYzVOeUF4T0RVdU1qa3pJREUyTWk0NE56ZERNVGt4TGpNek5TQXhORFl1T0RJMUlERTVPUzQwTURjZ01UTTNMamN3TkNBeU1UQXVOalk1SURFek5DNHhOVGxETWpFM0xqWTRNU0F4TXpFdU9UVWdNakl6TGpNME1pQXhNekV1TXpNZ01qSTNMamMyTXlBeE16RXVORGMyUXpJeU55NDFNemdnTVRNekxqWTFNeUF5TWpjdU5ESTBJREV6TlM0M056TWdNakkzTGpRek5pQXhNemN1T0VNeU1qY3VOVEEwSURFME5TNHhOVE1nTWpJNUxqSTBNeUF4TlRBdU9EWTVJREl6TWk0ek1qY2dNVFV6TGpnMk5FTXlNelF1TnprNUlERTFOaTR5TmpnZ01qTTRMakEwTkNBeE5UWXVPRFEySURJME1TNDBORFlnTVRVMUxqUTFRekkwTkM0NU9UTWdNVFUwTGpBeE15QXlORGN1TmpBMElERTFNUzQzTVNBeU5EZ3VPVGs1SURFME9DNDNOemxETWpVd0xqTXpPU0F4TkRVdU9UY3lJREkxTUM0ME5UWWdNVFF5TGpjME5pQXlORGt1TXpReUlERXpPUzQyT1RSRE1qUTNMalV6TXlBeE16UXVOelUySURJME1pNDRNemNnTVRNd0xqZ3lOeUF5TXpZdU5ESTJJREV5T0M0NU1UbERNak0xTGpBM01pQXhNamd1TlRBMklESXpNeTQyTmpNZ01USTRMakl4TnlBeU16SXVNVGczSURFeU55NDVPRE5ETWpNeUxqazFJREV5TXk0MU9UZ2dNak0wTGpFNE55QXhNVGt1TURZMElESXpOUzQ0TmpJZ01URTBMalU1TjBNeU16a3VOek14SURFd05DNHpOalFnTWpRM0xqWTRJRGc1TGpVNE9Ua2dNall6TGpjNUlEYzNMak01T0RoRE1qYzBMall4T0NBMk9TNHlNekk0SURJNE55NHpOaklnTmpNdU5URTVOaUF6TURFdU9EUWdOakF1TWpnME0xcE5Nak0xTGpNeU9TQXhNekl1TmpZMVF6STBNQzQxTWprZ01UTTBMakl5TXlBeU5EUXVNekV6SURFek55NHlOellnTWpRMUxqWTROaUF4TkRFdU1EUkRNalEzTGpNeE9TQXhORFV1TlRVNUlESTBOUzR3TnpZZ01UUTVMamd4TkNBeU16a3VPVFlnTVRVeExqZzVNVU15TXpndU1EQTJJREUxTWk0Mk56Z2dNak0yTGpNNE9TQXhOVEl1TkRJeklESXpOUzR3TkRnZ01UVXhMakV5TWtNeU16SXVOelU0SURFME9DNDRPRFVnTWpNeExqTTVPQ0F4TkRRdU1EUXhJREl6TVM0ek16Y2dNVE0zTGpneVF6SXpNUzR6TVRJZ01UTTFMamt4TkNBeU16RXVOREUxSURFek15NDVNVGNnTWpNeExqWTFOQ0F4TXpFdU9EVXlRekl6TXk0d05Ua2dNVE15TGpBMU5TQXlNelF1TWpjMklERXpNaTR6TkRNZ01qTTFMak15T1NBeE16SXVOalkxV2lJZ1ptbHNiRDBpSTBSQlJUSkZPQ0l2UGcwS1BIQmhkR2dnWkQwaVRUTXpPQzQzTkRrZ05Ea3VOelEyVERJNE5DNDRPRGtnTXpndU1qVXhOVXd5T1RJdU5qTTNJRFV5TGpZMU9ETk1NekkxTGpBMU5DQTFNUzQyTmprelRESTVOUzQwT1RnZ05UY3VPVGMzTkV3eU9UVXVOVEExSURVM0xqazVNVEpNTWprMUxqUTVOU0ExTnk0NU56VXlUREk0Tmk0M05URWdOamN1T0RreE4wd3lPVGt1T0RReElEWTJMakExTXpSTU16QTFMak0wTmlBM05pNHlPRGd5VERNek9DNDNORGtnTkRrdU56UTJXaUlnWm1sc2JEMGlJMFJCUlRKRk9DSXZQZzBLUEM5emRtYytEUW89XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTXpNNElpQm9aV2xuYUhROUlqTXhOaUlnZG1sbGQwSnZlRDBpTUNBd0lETXpPQ0F6TVRZaUlHWnBiR3c5SW01dmJtVWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SStEUW84Y0dGMGFDQmtQU0pOTVRFNExqTXlPQ0E0TlM0NE1qZ3hRekV4TXk0ME16TWdOelF1TXpJd05TQXhNRFl1TURFZ05qUXVNRE0xSURrMkxqZzJOak1nTlRZdU1URTVRemc1TGpBNE16Y2dORGt1TXpVeklEYzVMamMwT0NBME5DNHdPREl4SURZNUxqWTVNRFlnTkRBdU56QXpOa3czTVM0M05qa3hJRE0zTGpFM056TkRPREl1TVRRZ05EQXVPREVnT1RFdU5URTBNU0EwTmk0eE56TXhJRGs1TGpRNU1qa2dOVE11TURjM09VTXhNRGt1TURreUlEWXhMalF3TVRJZ01URTJMamczTkNBM01pNHhOemNnTVRJeUxqQXhOeUE0TkM0eU5EYzJRekV5Tnk0eE5Ua2dPVFl1TXpFNE1pQXhNamt1TlRBeUlERXdPUzQwTURRZ01USTRMamd5T1NBeE1qSXVNVEF6UXpFeU9DNDJORFFnTVRJMUxqWTRJREV5T0M0eU1UTWdNVEk1TGpJd015QXhNamN1TlRZeElERXpNaTQyTmpkRE1UTTRMamM0TlNBeE5EY2dNVFExTGpnM01TQXhOak11T0RNeUlERTFNUzQ0TVRrZ01UZ3dMakEwUXpFMU15NHlOek1nTVRnekxqazRJREUxTkM0Mk9UUWdNVGc0TGpBeE5pQXhOVFl1TURZeklERTVNUzQ1TURWRE1UWXhMakV3TWlBeU1EWXVNVEUzSURFMk5pNHpNRFVnTWpJd0xqYzVOaUF4TnpNdU5qRTFJREl6TkM0eE5EUkRNVGd4TGpnMk1TQXlORGt1TWpBeklERTVNeTR5T0RNZ01qWXpMakF3TkNBeU1EWXVOalE0SURJM05DNHdOVGhETWpJd0xqTTROU0F5T0RVdU5ESXpJREl6TlM0Mk5pQXlPVE11TnpBNElESTFNaTR3TmlBeU9UZ3VOalk1UXpJMU9DNDNPVE1nTXpBd0xqWTVNU0F5TmpVdU55QXpNREl1TVRReUlESTNNaTQyTVRJZ016QXlMams1TlV3eU56QXVOREV4SURNd05pNDNNamhETWpZekxqYzRNeUF6TURVdU56ZzNJREkxTnk0ek1ERWdNekEwTGpRd01TQXlOVEF1T1RFeUlETXdNaTQwTmpaRE1qUXdMamt4T1NBeU9Ua3VORFVnTWpNeExqTXhOQ0F5T1RVdU1qSTFJREl5TWk0eU16UWdNamc1TGpnM00wTXlNVFV1T1RRZ01qZzJMakUyTkNBeU1Ea3VPRGd5SURJNE1TNDRPVGNnTWpBMExqRWdNamMzTGpFeU1rTXhPVEF1TXpZeklESTJOUzQzTlRjZ01UYzRMall3TXlBeU5URXVOVFEzSURFM01DNHhNU0F5TXpZdU1EUXlRekUyTWk0Mk5UZ2dNakl5TGpReU5DQXhOVGN1TXpnMUlESXdOeTQxT0RnZ01UVXlMak14SURFNU15NHlORU14TlRBdU9UUXlJREU0T1M0ek5TQXhORGt1TlRFeElERTROUzR6TXpJZ01UUTRMakEyTXlBeE9ERXVOREU1UXpFME1pNDFPQ0F4TmpZdU5UQTFJREV6Tmk0eE5UWWdNVFV4TGpFd05pQXhNall1TkRBeUlERXpOeTQzTnpoRE1USXpMakEwSURFMU1DNDJOemNnTVRFMkxqUTJPQ0F4TmpJdU1UQXhJREV3Tnk0ME1ERWdNVGN3TGpRd09FTXhNREF1TmpneklERTNOaTQxTnpjZ09USXVOREl4TkNBeE9ERXVNREF5SURnekxqVXhOaklnTVRnekxqSXhOME0zTkM0eU9ETWdNVGcxTGpVeE5pQTJOQzQ1T0RVMklERTROUzR5TlRFZ05UWXVOakUyT1NBeE9ESXVOREk0UXpRNExqQTBOVGtnTVRjNUxqVTFOQ0EwTUM0ME1EY3hJREUzTXk0Mk9EUWdNelV1TURVME55QXhOalV1T1RSRE1qa3VOVGN6T1NBeE5UY3VPVGd4SURJM0xqRXdOamNnTVRRNExqYzJNaUF5T0M0d056TXlJREV6T1M0NU5qaERNamt1TVRNNE9DQXhNekF1TWpVNUlETTBMak16TnpZZ01USXhMakE0TlNBME1pNDNNVEF5SURFeE5DNHhOVE5ETlRBdU5qSTJPU0F4TURjdU5qQXhJRFl3TGpnNE5ERWdNVEF6TGpVMk5DQTNNQzQ0TnpjMklERXdNeTR3T0VNNE1DNDFOVFl6SURFd01pNDJNaUE1TUM0ek5UUTRJREV3TkM0NE1qWWdPVGt1T1RRM01TQXhNRGt1TmpJeVF6RXdPQzQyTXpJZ01URXpMamsxTXlBeE1UWXVPRFF6SURFeU1DNHpORFlnTVRJekxqWTVPU0F4TWpndU1EazFRekV5TXk0NE5EY2dNVEk0TGpJM05pQXhNalF1TURBMklERXlPQzQwTXprZ01USTBMakUxTlNBeE1qZ3VOakU1UXpFeU5DNDBOemNnTVRJMkxqUXlNaUF4TWpRdU5qZzFJREV5TkM0eE9DQXhNalF1T0RBMUlERXlNUzQ1TXpORE1USTFMalEyTlNBeE1Ea3VPREEySURFeU15NHlNak1nT1RjdU16TTFOeUF4TVRndU16STRJRGcxTGpneU9ERmFUVEV5TUM0M016TWdNVE13TGpjeU9FTXhNVFF1TWpBNUlERXlNeTR6TmlBeE1EWXVOREExSURFeE55NHlPVGtnT1RndU1UY3dNU0F4TVRNdU1UZzNRemc1TGpFNE1qZ2dNVEE0TGpjd01TQTRNQzR3TmpNeklERXdOaTQyTkNBM01TNHdOellnTVRBM0xqQTJPRU0yTVM0NU5EUTVJREV3Tnk0MU1EUWdOVEl1TlRNME1TQXhNVEV1TWpBMUlEUTFMakk0TURrZ01URTNMakl5TVVNek55NDNNVFEzSURFeU15NDBPVE1nTXpNdU1ERTRPU0F4TXpFdU56TTFJRE15TGpBMk1UY2dNVFF3TGpNNU5VTXpNQzR5T1RReUlERTFOaTR6TmpZZ05ERXVOalU1TnlBeE56TXVNVGN4SURVM0xqa3hOalFnTVRjNExqWTFNVU0yTlM0MU5UQTBJREU0TVM0eU1qWWdOelF1TURnd055QXhPREV1TkRVMklEZ3lMalUzTlRnZ01UYzVMak0wT0VNNU1DNDRNelV4SURFM055NHlPRFlnT1RndU5EZ3pNU0F4TnpNdU1UazFJREV3TkM0M01qSWdNVFkzTGpRNE5VTXhNVE11T1RJeUlERTFPUzR3TnlBeE1qQXVNemswSURFME55NHhORGNnTVRJekxqSTNNeUF4TXpNdU56TXlRekV5TWk0ME5TQXhNekl1TmprZ01USXhMalU1TnlBeE16RXVOekF4SURFeU1DNDNNek1nTVRNd0xqY3lPRm9pSUdacGJHdzlJaU5FUVVVeVJUZ2lMejROQ2p4d1lYUm9JR1E5SWswek15NDVPVGt6SURJMkxqWXdOVEZNT0RVdU1UTXhOQ0F5TUM0ek5ETTRURGMyTGpjeU1qTWdNek11TVRJM01VdzBOaTQyTURBMElESTVMalV5T0RKTU56TXVOakUzTnlBek55NDRORFk0VERjekxqWXdPVGNnTXpjdU9EVTVURGN6TGpZeU1ESWdNemN1T0RRME9VdzRNQzQ1TkRneUlEUTNMamd3TmpaTU5qZ3VPVEF6TmlBME5TNHdNVEkzVERZeUxqa3lPVGdnTlRRdU1EazBNVXd6TXk0NU9Ua3pJREkyTGpZd05URmFJaUJtYVd4c1BTSWpSRUZGTWtVNElpOCtEUW84TDNOMlp6NE5DZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvYmFubmVyLWljb24tMS01LTMxNTA5OGVjNTM2NWYxODYwYzg1ZDRhYjM2OTI3ZWY2LnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9iYW5uZXItaWNvbi0xLTYtZmViYzY4NTYyNjdkMTE1ZmY2N2ExNWFjNmJkMWQ4NDkuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2Jhbm5lci1sb2dvLTAwYzA5OTUxZDNmNDMwYTAzODcyYjQ4NzNmYmUzMTkzLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9iYW5uZXItbW9ja3VwLTQ3NzJhMmY4MmMwYjZhZWQzOGI0ODQyZDZmNDQ2YzUwLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9ibG9nLTEtMS1kODZmOWU3NjE3MWQ0MDc2NTM2ZjJiNWJkMTJlYTU0Yy5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvYmxvZy0xLTItYzJiMjIxMGZmYmYxOTA5NmE2M2U4ODUxNzU4OTk2MmEucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2Jsb2ctMS0zLTAwNzIyYTg2YTZmYzY1ZjA4ZGI4YzFkMDQzZWI4MTIxLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9ibG9nLTEtNC0wYjUxNmUxNTE0ZTY3ZGMyNGRlYzVlNzFiZDhmNTJlNy5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvY2FsbC1pbWFnZS04Zjc3N2MwYjY1ZTc0YmM1NmJlZDEzZDliNmFhMWI2Zi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvZG90LXBhdHRlcm4tZTYxY2Q1ODQ3NmJhOGRlYjZhYjFkNDc0NmZlNWI4Mzguc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRHdBQUFBOENBWUFBQUE2L05seUFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFkQ1NVUkJWSGdCNVp0NWJGUlZGTWEvKzJiYW1TN0RXb3RZbGhhUXlHS0VRbFFreGFhSkxSaFJESW1ZS0tCeGd4QVNEU3BFakF4R0NFU3FmNUJvMUVBQXdjUkVvb2xFR0V3QVFVR0pnbWdUd0xDMHBDd3RwYVZNcDUzMVhiLzdwclhMVEV2bkRWMW0vQ1hUdnJudjN2ZmV1Y3U1NTV4M1JpQU9wQk1hNm1jTVF1YUFTUkJpQkVUb1BrakxhRURQQTdUQnJERU1VdHA0THBQVkxiZTVuTTY2YnRiMThiZ1dFcFU4dnN6amNwNDZqWkJlQVo5MkFabjdhNFNUZFUwaVlCTDVWdUhkc051V1UyUUtpY204VkM1TFU5RXplUG1wWklmOEEwMDdBWi9jTGphNHpzRUVNUWtzRnhabllCU21RUk1mc09VTUZsblJOelN5a3c5RDZKdmdDWnlDbzdCV09KM2RHdlZ1Q3l4WEZ6OENxMWpCRzgzaTF5ejBEemoxNVFIb2NxTlk5K1B2M1dsd1c0SGw2NFdETU5EMkJpLzhQSVhONDdveXZReDZDRFd5YW5wdlJSQTd4SHJYMWE0cWQvbndjczJjRVpBaEo2czl4NjkyOUcrOEhKQnRzSWlOd3JtdnZMTktuUW9zVnhYbUl0WDJDUS9uSUpHUTJBYzlzRVNzTzFBUjdYUlVnYVZ6ZGk2bjhLZHNQQnVKaU1SZWF2Tlh4ZHE5bFIxUGFSRjEzeWtaVG1GWEpxeXdDc0ZaeWFWbzZKOE9SQWpNa2tVVTlnVWtQTlE3U3RsMkxHMDVrRTZuaHNBditiQm91L2gxUEpJQ2NZRVcya0t4YnYvUmxwTFdFWFlmR2tLRFlpV1B4aUZwa0hsY3l5dmttelNZbW1rVk9NMDJoWHRzRWFKTjg4UkZRTWhac05FNmJFWnJjMm9GL3c1QjhwRmxtTUxOR0d0WXJpb1poMVNjNG1FNmtwTWdtaXdqeFljL1hOTU1GODhtRnlONWhWVllrUjVhcm1UVjBGQ2NSV3MwSDhtT1RqZVd2cnVHdE5CWUtxc2syWWE2UU5CblQzZE1wdEpTRVFxTVFQS1RTK1UxZ2dMTENlai9udENkSUJVV09WNkRNRWI0LzRHdTVWcnBLT1NndDF4NmF3b3c0QzRnbTMyc01hWjMvUkp3Z3c2TmJqb21GeHRDNWxrcGJIenIxMDZyTFlVcndsUFg5WU5uTW9qNThOUEF0Qkp1Z0FQRFpRRUdLSC85THZ4cHFJdmV6c3E0WUpxRHFzYmEyc1p6RTZhUWNyQzZpam5yU2tWNkhub0tlSEF1WU9NV1h2RVg0TnBDbTd3bXNxNkZJenVOM3VhTWVaQWFKNVd2VWRsOEVLbnNxSUlGZkJCMjFKR3ZhUjc0Mjdlek03cjd4REpnMVAzaCt4a1B6YnJmbGdMblQ4QUV3NnpOY1dQRXpNaUpRUEhMclQwLzZWRk8xMndHVTg5RTFrMnhBUk5uR3FQbCtmdG4zSER0cE9xd1lFalJzOGg4b0FDWS9qaEhuYTVyd051K25SSTRieXJQRFdoZlBqYmZwTURDeGlrdEhERERtQ210d3JZd2NrTDQwd1UxZTdiQ2MvbzM0MWdHL0dHQjFSU2YzZ3VSSklsTTVUeVk4NDZDQWNTTERQblJxNGlJSVlxQnM4ZTQvcDRKVDd0bTNEL3RSdTNSUGV4STJhNnF4alUrZk5GcXBHVGxZR2pKUWdvYWhQUjdrVFgzTmVPODc4cDVWTy9lakZCRGUyV1VtajBLMmZPV3dqcDBlUHQ3eDlIWlFyNVhJbUdXZSs3bDJpeUE3aGlNdXJManFEN3dEZlJnbEZFVEdoejVSY2g1YVMwc21lM0RUTUViMTNEbHkvVnduendZVmtnZGNFd3R4SkNaVHlJakl6MjhlL3FiZ0lNN2dmcHFtQ0UrZ1p2eCtFTzRYRldGUUREVWFSMk5HdGt4cFJEWjg1Y2hKVHRzNndTcUx1SDY5NS9qMW5FWEk2dSs2QTJwVUZOc2FjZ1psb1VNdXoyc3lmVVF6Qkszd0Q1L0FCZXZWak4wMUgzalFVMXhoYzd0cWR0dDZOaU5HVDRNdHRUNFhtZkZGYzZSVXFMTzdZbEpXSVVTTkJaaGpUYThSNTNiSGZPOU9oS1h3TzdHSnR4czhLQzNxRzlvUkFQdkdROXhDVnp2YVlxN3gyTWh5SHVwZThhREV0aVVCbENDdXVQc2JUTjRtcndJaFV4M3NxNXhJVGJBQkUxZXY3R0dleHVkOS9UNlRSc3NicTA1cHlKbXZJRmV0cExhNFBHYWVtUWlmU3JpVVlVWVVTUHI4d2ZSVndTNTM1dWJYS0tXVXhxbW5FdTlGNVZWNUwyVnRDWWtscWlrdDZSZDRGRUJZaVRkYmpPMFpsOWd0NXRNRmhMaU1nVU9WZEFyajdHZHdDQkhCaHdaYWVnTHJBd1BtVXcxS2JkU1VaK2xWYTQwVUV6ZFpxR3BwejZKZzJSMFFaN1dxT2RWV2tBNWtoNVJ5Wmw4U1VPS0tPTUlseUhaVVZsOFRiZk9jMDY2bEpZK2cyUkhpSlBJUEZxakdZbWF3cmVaWGRCM0cydlAwMGdqZXB1UzFkQTZ3bm5vR3Y4ZVE3SWljRmc0dzhtb3JXbzJKTi9sbVJva0g3VjBqMHBidnJRSzdNTWZqSDhjam9qQUpUYktNanJJVnp4L3RoVDhKN0RZdE45RGdVdWh5WXRJSHM3eEhkWUdCcjFyV3dvaXpCVzVwbVF0eC9odEpQNHJWUFVhd3luZWQyMXNXeGhwS2duZng5eXp2a0xDSTdmRGhoMGRTNk1ubDZxMFlWMy9nbWNUTmJsMEh5eGlhYlEwNHFqR3NKR0Z5Z1pzNkVLaTBZV3dpazZ0ZjZPQlJTemhGVDVEZUQzMGQvaU1ZZ3NEMksrWVNoQnZ3VWdudHNqRk5NMWVSRGdQczMrNVNDcjhJalR1TEhJWE5OOUhOS0s2REdqRThDT1B4NllieWFjQ1JXeldYMUlVYTVRVmhhQXNiWnN4MnhYZEg2MlVtU2RnU1YxS29SYzByKzNZWGgzY1daVGRmd1JhWUQ0OGNsRjNoVldZLzZHV3MyUWNwNU5LV2N5SE5CTGJWSzVJVCszZEtrQlJ6bzR1NHhDZFVjNU8yUDZQbmJqeWQ0dzhUUlJuSWFTTnBSVTMyc2o1TXRLZ3BCSStCeXAvSkp4U29iSU1iamViUWthTTNBZ2JDMFpTWlIzL1h6UkNVTG84eS9CS0plcnB1dzkwM1l6bnAzai9Ba05LaHkzV2RJTDZBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEd0FBQUE4Q0FZQUFBQTYvTmx5QUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQVhQU1VSQlZIZ0I3WnZmYnhSVkZNZS81ODdzOXNkdWFZdFZpdFFVaEJDSUpCanBDNW9nTWJHbCtPaURVUkhRUkFNUEppb0toR3BZRXlDZ2dBOG1Ha1A4QVViL0E0R2lVWUlKdmdoQ1VpTVNmclJhdEdEVG43dmQzZTdNUFo2N3k2NVl0bVdacHFFN3l5ZHB0L2ZPdmRNNU0vZWVlOC9aN3hBbUFTT2locFlQMWdSbmhCOWlTemV3cXhheDBvMEsxanlRcm1YR0xBYktDQndHeUpyd1pBUXQ3WWNKU0JKUkg0TzdtZm1LeGRUSnBINEQzQzdYVFY0S0h3djNFaUlhSGlGNEpMcjZyWHJpOGxmQnZJaUpsb2hSYzZVNmlLa2hRYUJ1dVFubndYVGE0ZFRCNnZiZEYrQ0Iyeks0cC9tRlVBajNMeU03c0lNMGxrdHZHM2VHRWZuZkoxaXJ2VG9STzd0L1pWVmZKRkxZVXkvWTRLR24yaDZWNGJWSnh2RUtLZFpoZXRBbkpud1BSKzhKZmJ2ejUwSTYzTkxnL3BXdjFRUXJxbDZYaG11WXRjeE44andOcGdndDArbUNWdlJaM05HSDdtM2Y5ZmRFalNlOCtKSFc3UTNNYmtSYVBTL0Zja3h2RXVKR3YxRHM3cWs0dXJ0enZFYmpHdHkvYXV2Y29MSStFaWZSaW1LQ2NGU0JOMVFjM3RtVi8zQWVNc2JhSDh0OFhZV2loSThRVXE5VUhubXZlK3dSTmJZaTFySnRkbEFGdGhTdnNRWnFaUTVHalA4WmUrUW1nMW1wdGJLMnJrZXhJMzdIT051eDFUbURaUjFUc2RWdFRRcjBFcWEvZ3lxRWNpSzlaa1NXMHhzcmN3YS9jWHg0cGppb0xiS2JXUUNmd0V6ejROS21udVkzUTltNm5NRzZyT0poK1hnQ2VZWjVFVU5NV0JHQ3RTeGJrVFBPSnRsRkFUUGhQK29zRmRpUkxhU1hwY0dXclFzQ3lqNHJrVTBsL0luRGxId2dmUGo5SG1WQ1BOc0tyUE94c1FiYlJIYkdWaFZ0anRiSjdINEVma2ZDMkc2SjNSV3J3SHp4emd2aGMwek1YbE1iWEdKTFNOc292cXdCWGlrUHdsb2lwN0F6Q1EzZE93aDlzY2ZjVWZFUUJOVjRINmkrTnJlSGRjOWNBaWRHSjkvM05ra25LRnlyd1paVXpHSXBldHRveUVVRm5uMGM5cW9tOGZmWEhYNDBnV1RrUytpdWE2QlpOU2piTG9GV3FEemQxcUNPbmtMcTRIZGcxL1hlMTNIZ2dTQ1JXbWpMenFvUlhpa0xnR2JmQTZxNndkL0pCVko1SnRORE5TRzU4TnIvZGFGWjFlSkNWUHJIYzE5UDlwb1RZSzVFVXBpREVvR2g1aWxTazVpL1JZWWtSbXVWWnZMajdpby9ralkyUTdvTUpZTEprU3R4Z0ZVb0VZZzRiTllEUDBWSHQ0Q3NFakkydzEyRC9jNWRnLzNPWFlQOWpoak1Ma29GMlV3cnlkMUdVU0t3eHJEWldpWlJJaGo5aUpuRFYxRWlTQ2pjSitFaEJsQWlNS2hiS2NJbGxBb2FWMnl0cVV0Sk90NFRyZ1pmNndmSEVwbXluSVpqY2ZCZ0xGTWVHWVdXNHhTcXVQNFA1YXU2djZSOU1pVzVLY3Q3WDY4b2RGSzBaZHR6cE5UbjhLcXhxcEJVNjlJSGtiMXF2am9BM1hudHYxVHIvSHBRWFhYbXNHUWI5YTkvZ09PamsrOTcreVRrak90cHVMbHRoVVNKQnlSdjYrdGtQSUV1eUQxZHF6UUZPbVJFZDhEbk1QTjVkeWgrVWMxWWpnRW1mUTUraC9GTCtLVFJhUXJSbFpGNnFuRCtsRC92bEpSd3FobHh0TFBVNkRQVHdVUDRlS1JIL01SUDhDdU1FMWt4YWk1YVlzMXZ5MGN2ZklZTTRUN0Z6cjVzT1dkd0RNbFQ1azVrMWdUZllGYnZIMUtCOGpQWmlwekI5Y2YyeGtpejNBbDFHVDdCaUU3bDErNnFKcU82emRhTklkYjZ6cnZ5bERlaitMVmFzdEhRa2NvanUvYmNXSGxUeG1NMGJuMGc4L2xyRkRtYTlVR0pmdytOcmM4ckxoMXAzZHpnY1BDQVJVV3F0MlNqcUhVMjVwTVI1ODFwR1JXcUt4MWtkOUtPWW9ONVhHTU40eWJ4YXFWREN1NEdHUnFmSUMyK252WWs1TWwrU3BSNjJaTkFQTXMvTGR0bWx4R3RrN2o1UmRtQUd4M21OTXQweWpKS3NyS3crOVZvUExpLzluaGt3b1JHd2U4dnhKNXNhNEpOVzVEUlkwNkxMOUZsdzlBcmdjOEp4K0o5TTc3WmViS1FQZ1UvcmNySEFxZGR5OTRvbnU4WkxYT2J6S3MwZHc1SG51dVBsc3RQRCtuRTJrS05OWGgrUThYb000TldZSjFPcS9pTXNDMnRGWm1xdFh0VXhtMm5JcmVEMlRySGNldERzLytIQnliMVNvN1JMa2FialZvMU9kOU5DOXowWWpJeUtCYmpsWnBEekdib0cwbUZVUm5jYWpTWkx3Uk1qdHlramEvS2hmVkxBdW15ZkhZNW1uOVhUTjFoR3VsQWUvWEFaRjdGK3hlZ1dtczJCLzd5VkFBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9qYWNrcG90LWU3NTJlMmFhMDNkYzYzYWVlMDUzMGYyYWYwOTViZTU2LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9sb2dvLWRhcmstMmU3YWRhN2MyODZhZTM2ZTE0NGY1MWMyMjBmYzZmMjguc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2xvZ28tbGlnaHQtMmU3YWRhN2MyODZhZTM2ZTE0NGY1MWMyMjBmYzZmMjguc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU1qQWlJR2hsYVdkb2REMGlNVGNpSUhacFpYZENiM2c5SWpBZ01DQXlNQ0F4TnlJZ1ptbHNiRDBpYm05dVpTSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklqNE5Danh3WVhSb0lHUTlJazB4TGpFeU5ESXlJREV3TGpJMk1qUk1NUzR3T1RNZ01UQXVNalUxTmtneE5DNDBOell4VERFd0xqSTJPRGtnTVRRdU5EY3lRekV3TGpBMk1qa2dNVFF1TmpjM09TQTVMamswT1RreElERTBMamsxTmpjZ09TNDVORGs1TVNBeE5TNHlORGswUXprdU9UUTVPVEVnTVRVdU5UUXlNU0F4TUM0d05qSTVJREUxTGpneE9TQXhNQzR5TmpnNUlERTJMakF5TlRSTU1UQXVPVEl6TmlBeE5pNDJPREF6UXpFeExqRXlPVFFnTVRZdU9EZzJNaUF4TVM0ME1ETTNJREUzSURFeExqWTVOak1nTVRkRE1URXVPVGc0T1NBeE55QXhNaTR5TmpNMElERTJMamc0TnlBeE1pNDBOamt6SURFMkxqWTRNVEZNTVRrdU5qZ3hNU0E1TGpRMk9Ua3lRekU1TGpnNE56Z2dPUzR5TmpNeU5TQXlNQzR3TURBNElEZ3VPVGczT1RjZ01qQWdPQzQyT1RVeE1rTXlNQzR3TURBNElEZ3VOREF3TmpVZ01Ua3VPRGczT0NBNExqRXlOVElnTVRrdU5qZ3hNU0EzTGpreE9EZzJUREV5TGpRMk9UTWdNQzQzTURZNU9USkRNVEl1TWpZek5DQXdMalV3TVRNd01TQXhNUzQ1T0RreElEQXVNemc0TVRNZ01URXVOamsyTXlBd0xqTTRPREV6UXpFeExqUXdNemNnTUM0ek9EZ3hNeUF4TVM0eE1qazBJREF1TlRBeE5EWXpJREV3TGpreU16WWdNQzQzTURZNU9USk1NVEF1TWpZNE9TQXhMak0yTVRrMVF6RXdMakEyTWprZ01TNDFOamMwT0NBNUxqazBPVGt4SURFdU9EUXhPVFVnT1M0NU5EazVNU0F5TGpFek5EWXpRemt1T1RRNU9URWdNaTQwTWpjeE5TQXhNQzR3TmpJNUlESXVOamczTVRVZ01UQXVNalk0T1NBeUxqZzVNamcxVERFMExqVXlNellnTnk0eE16STRORWd4TGpFd09USTJRekF1TlRBMk5TQTNMakV6TWpnMElDMDBMakl4TnpFMVpTMHdOaUEzTGpZMU1qTTJJQzAwTGpJeE56RTFaUzB3TmlBNExqSTFORGhXT1M0eE9ERXhORU10TkM0eU1UY3hOV1V0TURZZ09TNDNPRE0xT0NBd0xqVXlNVFExT1NBeE1DNHlOakkwSURFdU1USTBNaklnTVRBdU1qWXlORm9pSUdacGJHdzlJaU0yTXpZNE56a2lMejROQ2p3dmMzWm5QZzBLXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTWpBaUlHaGxhV2RvZEQwaU1qQWlJSFpwWlhkQ2IzZzlJakFnTUNBeU1DQXlNQ0lnWm1sc2JEMGlibTl1WlNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0TkNqeHdZWFJvSUdacGJHd3RjblZzWlQwaVpYWmxibTlrWkNJZ1kyeHBjQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmtQU0pOT1M0NU9UazVOaUF3UXpRdU5EZzJNRGdnTUNBd0lEUXVORGcxTkRnZ01DQTVMams1T1RrNVF6QWdNVFV1TlRFMElEUXVORGcyTURnZ01qQWdPUzQ1T1RrNU5pQXlNRU14TlM0MU1UTTRJREl3SURJd0lERTFMalV4TkNBeU1DQTVMams1T1RrNVF6SXdJRFF1TkRnMU5EZ2dNVFV1TlRFek9DQXdJRGt1T1RrNU9UWWdNRnBOTVRVdU5UYzFJRFl1TmpZME5UTk1PUzQwTWpFeE1pQXhNeTQxT0RjMlF6a3VNalk1TmlBeE15NDNOVGcySURrdU1EVTRORFlnTVRNdU9EUTJNaUE0TGpnME5UY3hJREV6TGpnME5qSkRPQzQyTnpZNU1TQXhNeTQ0TkRZeUlEZ3VOVEEzTXpFZ01UTXVOemt3T0NBNExqTTJOVFFnTVRNdU5qYzNORXcwTGpVeE9URTJJREV3TGpZd01EVkROQzR4T0RjMk1TQXhNQzR6TXpVMUlEUXVNVE16T0RRZ09TNDROVEUyTVNBMExqTTVPVEl4SURrdU5URTVNelpETkM0Mk5qUXlOaUE1TGpFNE56RWdOUzR4TkRnNElEa3VNVE16T0RnZ05TNDBPREF6TlNBNUxqTTVPVFEyVERndU56VTJNU0F4TWk0d01Ua3pUREUwTGpReU5Ea2dOUzQyTkRJME9FTXhOQzQzTURZMklEVXVNekkwTnpNZ01UVXVNVGt6TkNBMUxqSTVOakl6SURFMUxqVXhNRGNnTlM0MU56ZzBPVU14TlM0NE1qZzBJRFV1T0RZeE15QXhOUzQ0TlRjeklEWXVNelEyTnpnZ01UVXVOVGMxSURZdU5qWTBOVE5hSWlCbWFXeHNQU0lqTTBaRVFrSXhJaTgrRFFvOEwzTjJaejROQ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU1qQWlJR2hsYVdkb2REMGlNakFpSUhacFpYZENiM2c5SWpBZ01DQXlNQ0F5TUNJZ1ptbHNiRDBpYm05dVpTSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklqNE5Danh3WVhSb0lHUTlJazB4TUM0d01EQTRJREJETkM0ME56Z3hOaUF3SURBdU1EQXhNREEzTURnZ05DNDBOemN5TWlBd0xqQXdNVEF3TnpBNElEa3VPVGs1T1VNd0xqQXdNVEF3TnpBNElERTFMalV5TWpRZ05DNDBOemd4SURJd0lERXdMakF3TURjZ01qQkRNVFV1TlRJek15QXlNQ0F5TUM0d01EQTVJREUxTGpVeU1qUWdNakF1TURBd09TQTVMams1T1RsRE1qQXVNREF3T1NBMExqUTNOekl5SURFMUxqVXlNelFnTUNBeE1DNHdNREE0SURCYVRURXpMamMzTXpFZ01UTXVPREV4TTBNeE15NHpOek00SURFMExqSXhNRElnTVRJdU56STNJREUwTGpJeE1ESWdNVEl1TXpJNE1TQXhNeTQ0TVRFelRERXdMakExTWpZZ01URXVOVE0xT0V3M0xqWTNNellnTVRNdU9URTBPVU0zTGpJM05EVTBJREUwTGpNeE16Z2dOaTQyTWpjMk55QXhOQzR6TVRNNElEWXVNakk0T0RFZ01UTXVPVEUwT1VNMUxqZ3lPVFUxSURFekxqVXhOVFVnTlM0NE1qazFOU0F4TWk0NE5qZzRJRFl1TWpJNE9ERWdNVEl1TkRZNU5VdzRMall3TnpZMklERXdMakE1TURkTU5pNHpPVEkzTkNBM0xqZzNOVGt5UXpVdU9Ua3pPREVnTnk0ME56WTFNeUExTGprNU16Z3hJRFl1T0RJNU9EWWdOaTR6T1RJM05DQTJMalF6TURjMFF6WXVOemt4T0RFZ05pNHdNekUyTnlBM0xqUXpPRGdnTmk0d016RTJOeUEzTGpnek56a3pJRFl1TkRNd056Uk1NVEF1TURVeU55QTRMalkwTlRVeFRERXlMakUyTkRFZ05pNDFNelJETVRJdU5UWXpNU0EyTGpFek5UQTNJREV6TGpJeE1ETWdOaTR4TXpRNU5DQXhNeTQyTURreElEWXVOVE0wUXpFMExqQXdPRE1nTmk0NU16TTBJREUwTGpBd09ETWdOeTQxT0RBME5pQXhNeTQyTURreElEY3VPVGM1TVRsTU1URXVORGszT1NBeE1DNHdPVEEyVERFekxqYzNNeklnTVRJdU16WTJRekUwTGpFM01qRWdNVEl1TnpZME9TQXhOQzR4TnpJeklERXpMalF4TWpFZ01UTXVOemN6TVNBeE15NDRNVEV6V2lJZ1ptbHNiRDBpSTBORlJEZEZNU0l2UGcwS1BDOXpkbWMrRFFvPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU56TWlJR2hsYVdkb2REMGlOalVpSUhacFpYZENiM2c5SWpBZ01DQTNNeUEyTlNJZ1ptbHNiRDBpYm05dVpTSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklqNE5Danh3WVhSb0lHUTlJazAyT1M0ME1UQTNJRFEwTGpNeE56ZE1Oamt1TkRFeE1TQTBOQzR6TVRjNVF6Y3hMak13TnprZ05EVXVOREEyTXlBM01pNDFNREExSURRM0xqVXdNRGtnTnpJdU5UQXdOQ0EwT1M0M09USTJWall5TGpjeE1qZEROekl1TlRBd05DQTJNeTQzTURBMUlEY3hMamN3TVRZZ05qUXVORGs1TXlBM01DNDNNVE00SURZMExqUTVPVE5JTlRrdU56Z3hWall3TGpreU5qSklOamd1TkRJM01rZzJPQzQ1TWpjeVZqWXdMalF5TmpKV05Ea3VOemt5TjBNMk9DNDVNamN5SURRNExqZ3hNREVnTmpndU5EVXlNaUEwTnk0NE9EZ3pJRFkzTGpZek5DQTBOeTQwTVRZM1REWTNMall6TXpVZ05EY3VOREUyTkVNMk5DNDFOems1SURRMUxqWTJNVGdnTmpFdU1qa3lNeUEwTkM0ek1qWTFJRFUzTGpnM09EWWdORE11TXpZek5VTTFOaTQ0T0RZMElEUXhMamM1TmpVZ05UVXVOVFV6TXlBME1DNDBNemczSURVekxqZzVOalVnTXprdU5EZzFNVXcxTXk0NE9UWXpJRE01TGpRNE5VTTFNeTR6TlRBMklETTVMakUzTVRNZ05USXVOemt5TVNBek9DNDRPREV5SURVeUxqSXlPRE1nTXpndU5qQTFPRU0xT0M0ek16RWdNemt1TkRFM015QTJOQzR4T0RJNUlEUXhMak14TWpFZ05qa3VOREV3TnlBME5DNHpNVGMzV2lJZ1ptbHNiRDBpSXpoRU5EUTRRaUlnYzNSeWIydGxQU0ozYUdsMFpTSXZQZzBLUEhCaGRHZ2daRDBpVFRVeExqSTRPQ0EwTkM0ek1UYzVRelV6TGpFNE56WWdORFV1TkRFd055QTFOQzR6TnpjNElEUTNMalV3TXpjZ05UUXVNemMzT0NBME9TNDNPVEE0VmpZeUxqY3hNekZETlRRdU16YzNPQ0EyTXk0M01EQTVJRFV6TGpVM09TQTJOQzQwT1RrM0lEVXlMalU1TVRJZ05qUXVORGs1TjBneUxqSTROalpETVM0eU9UZzRNaUEyTkM0ME9UazNJREF1TlNBMk15NDNNREE1SURBdU5TQTJNaTQzTVRNeFZqUTVMamM1TTBNd0xqVWdORGN1TlRBek5pQXhMalk1TURJMklEUTFMalF4TURnZ015NDFPRGsyT1NBME5DNHpNVGhNTlRFdU1qZzRJRFEwTGpNeE56bGFUVFV4TGpJNE9DQTBOQzR6TVRjNVF6TTNMakEwT0RZZ016WXVNVE14TWlBeE55NDRNamsxSURNMkxqRXpNVElnTXk0MU9EazRNU0EwTkM0ek1UYzVTRFV4TGpJNE9GcE5OVEF1TXpBME9DQTJNQzQ1TWpZMVNEVXdMamd3TkRoV05qQXVOREkyTlZZME9TNDNPVEE0UXpVd0xqZ3dORGdnTkRndU9ERXdNU0ExTUM0ek1qazJJRFEzTGpnNE9ESWdORGt1TlRBNE9TQTBOeTQwTVRZNFF6TTJMak0wTURnZ016a3VPRFEzTmlBeE9DNDFNemN5SURNNUxqZzBOellnTlM0ek5qa3hOQ0EwTnk0ME1UWTRRelF1TlRRNE5EVWdORGN1T0RnNE15QTBMakEzTXpNeklEUTRMamd4TURNZ05DNHdOek16TXlBME9TNDNPVE5XTmpBdU5ESTJOVlkyTUM0NU1qWTFTRFF1TlRjek16TklOVEF1TXpBME9Gb2lJR1pwYkd3OUlpTTRSRFEwT0VJaUlITjBjbTlyWlQwaWQyaHBkR1VpTHo0TkNqeHdZWFJvSUdROUlrMDBOUzQxTmpJeUlETXlMalE0TnpkRE5EUXVNelF5TmlBek1pNDBPRGMzSURRekxqRXpPU0F6TWk0ek1EQXpJRFF4TGprMU5DQXpNUzQ1T1RKRE5ESXVPVFV4TXlBek1TNHdNelF4SURRekxqZzNNeklnTWprdU9Ua3pJRFEwTGpZMk56RWdNamd1T0RNNU5rTTBOQzQ1TkRNMUlESTRMamczTkRjZ05EVXVNalU1T1NBeU9DNDVNVFEySURRMUxqVTJNaklnTWpndU9URTBOa00xTWk0eE5ESWdNamd1T1RFME5pQTFOeTQwT1RVeElESXpMalUyTVRZZ05UY3VORGsxTVNBeE5pNDVPREU0UXpVM0xqUTVOVEVnTVRBdU5EQXlJRFV5TGpFME1qSWdOUzR3TkRnNU1TQTBOUzQxTmpJeUlEVXVNRFE0T1RGRE5EVXVNalU1TmlBMUxqQTBPRGt4SURRMExqazBNelVnTlM0d09EZzFPU0EwTkM0Mk5qWTVJRFV1TVRJek5UaERORE11T0RjeU9TQXpMamszTURJeElEUXlMamsxTVNBeUxqa3lPVEkzSURReExqazFNemNnTVM0NU56RXlOVU0wTXk0eE16ZzNJREV1TmpZeU9UWWdORFF1TXpReU5DQXhMalEzTlRVNUlEUTFMalUyTWpJZ01TNDBOelUxT1VNMU5DNHhNVEE1SURFdU5EYzFOVGtnTmpFdU1EWTRNeUE0TGpRek1qazBJRFl4TGpBMk9ETWdNVFl1T1RneE5rTTJNUzR3TmpneklESTFMalV6TURNZ05UUXVNVEV3T0NBek1pNDBPRGMzSURRMUxqVTJNaklnTXpJdU5EZzNOMW9pSUdacGJHdzlJaU00UkRRME9FSWlJSE4wY205clpUMGlkMmhwZEdVaUx6NE5Danh3WVhSb0lHUTlJazAwTWk0NU5EVWdNVFl1T1RneE4wTTBNaTQ1TkRVZ01qVXVOVE13TkNBek5TNDVPRGMxSURNeUxqUTROemNnTWpjdU5ETTRPU0F6TWk0ME9EYzNRekU0TGpnNU1EUWdNekl1TkRnM055QXhNUzQ1TXpJNUlESTFMalV6TURRZ01URXVPVE15T1NBeE5pNDVPREUzUXpFeExqa3pNamtnT0M0ME16STVOU0F4T0M0NE9UQXlJREV1TkRjMU5Ua2dNamN1TkRNNE9TQXhMalEzTlRVNVF6TTFMams0TnpZZ01TNDBOelUxT1NBME1pNDVORFVnT0M0ME16STVOU0EwTWk0NU5EVWdNVFl1T1RneE4xcE5Nemt1TXpjeE9DQXhOaTQ1T0RFM1F6TTVMak0zTVRnZ01UQXVOREF4T1NBek5DNHdNVGc1SURVdU1EUTROemtnTWpjdU5ETTRPU0ExTGpBME9EYzVRekl3TGpnMU9USWdOUzR3TkRnM09TQXhOUzQxTURZeElERXdMalF3TVRrZ01UVXVOVEEyTVNBeE5pNDVPREUzUXpFMUxqVXdOakVnTWpNdU5UWXhOU0F5TUM0NE5Ua3lJREk0TGpreE5EVWdNamN1TkRNNE9TQXlPQzQ1TVRRMVF6TTBMakF4T0RjZ01qZ3VPVEUwTlNBek9TNHpOekU0SURJekxqVTJNVFVnTXprdU16Y3hPQ0F4Tmk0NU9ERTNXaUlnWm1sc2JEMGlJemhFTkRRNFFpSWdjM1J5YjJ0bFBTSjNhR2wwWlNJdlBnMEtQQzl6ZG1jK0RRbz1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlPRFFpSUdobGFXZG9kRDBpTmpVaUlIWnBaWGRDYjNnOUlqQWdNQ0E0TkNBMk5TSWdabWxzYkQwaWJtOXVaU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajROQ2p4d1lYUm9JR1E5SWswMk9TNDBNVEEzSURRMExqTXhOemRNTmprdU5ERXhNU0EwTkM0ek1UYzVRemN4TGpNd056a2dORFV1TkRBMk15QTNNaTQxTURBMUlEUTNMalV3TURrZ056SXVOVEF3TkNBME9TNDNPVEkyVmpZeUxqY3hNamRETnpJdU5UQXdOQ0EyTXk0M01EQTFJRGN4TGpjd01UWWdOalF1TkRrNU15QTNNQzQzTVRNNElEWTBMalE1T1ROSU5Ua3VOemd4VmpZd0xqa3lOakpJTmpndU5ESTNNa2cyT0M0NU1qY3lWall3TGpReU5qSldORGt1TnpreU4wTTJPQzQ1TWpjeUlEUTRMamd4TURFZ05qZ3VORFV5TWlBME55NDRPRGd6SURZM0xqWXpOQ0EwTnk0ME1UWTNURFkzTGpZek16VWdORGN1TkRFMk5FTTJOQzQxTnprNUlEUTFMalkyTVRnZ05qRXVNamt5TXlBME5DNHpNalkxSURVM0xqZzNPRFlnTkRNdU16WXpOVU0xTmk0NE9EWTBJRFF4TGpjNU5qVWdOVFV1TlRVek15QTBNQzQwTXpnM0lEVXpMamc1TmpVZ016a3VORGcxTVV3MU15NDRPVFl6SURNNUxqUTROVU0xTXk0ek5UQTJJRE01TGpFM01UTWdOVEl1TnpreU1TQXpPQzQ0T0RFeUlEVXlMakl5T0RNZ016Z3VOakExT0VNMU9DNHpNekVnTXprdU5ERTNNeUEyTkM0eE9ESTVJRFF4TGpNeE1qRWdOamt1TkRFd055QTBOQzR6TVRjM1dpSWdabWxzYkQwaUl6aEVORFE0UWlJZ2MzUnliMnRsUFNKM2FHbDBaU0l2UGcwS1BIQmhkR2dnWkQwaVRUVXhMakk0T0NBME5DNHpNVGM1UXpVekxqRTROellnTkRVdU5ERXdOeUExTkM0ek56YzRJRFEzTGpVd016Y2dOVFF1TXpjM09DQTBPUzQzT1RBNFZqWXlMamN4TXpGRE5UUXVNemMzT0NBMk15NDNNREE1SURVekxqVTNPU0EyTkM0ME9UazNJRFV5TGpVNU1USWdOalF1TkRrNU4wZ3lMakk0TmpaRE1TNHlPVGc0TWlBMk5DNDBPVGszSURBdU5TQTJNeTQzTURBNUlEQXVOU0EyTWk0M01UTXhWalE1TGpjNU0wTXdMalVnTkRjdU5UQXpOaUF4TGpZNU1ESTJJRFExTGpReE1EZ2dNeTQxT0RrMk9TQTBOQzR6TVRoTU5URXVNamc0SURRMExqTXhOemxhVFRVeExqSTRPQ0EwTkM0ek1UYzVRek0zTGpBME9EWWdNell1TVRNeE1pQXhOeTQ0TWprMUlETTJMakV6TVRJZ015NDFPRGs0TVNBME5DNHpNVGM1U0RVeExqSTRPRnBOTlRBdU16QTBPQ0EyTUM0NU1qWTFTRFV3TGpnd05EaFdOakF1TkRJMk5WWTBPUzQzT1RBNFF6VXdMamd3TkRnZ05EZ3VPREV3TVNBMU1DNHpNamsySURRM0xqZzRPRElnTkRrdU5UQTRPU0EwTnk0ME1UWTRRek0yTGpNME1EZ2dNemt1T0RRM05pQXhPQzQxTXpjeUlETTVMamcwTnpZZ05TNHpOamt4TkNBME55NDBNVFk0UXpRdU5UUTRORFVnTkRjdU9EZzRNeUEwTGpBM016TXpJRFE0TGpneE1ETWdOQzR3TnpNek15QTBPUzQzT1ROV05qQXVOREkyTlZZMk1DNDVNalkxU0RRdU5UY3pNek5JTlRBdU16QTBPRm9pSUdacGJHdzlJaU00UkRRME9FSWlJSE4wY205clpUMGlkMmhwZEdVaUx6NE5Danh3WVhSb0lHUTlJazAwTlM0MU5qSXlJRE15TGpRNE56ZERORFF1TXpReU5pQXpNaTQwT0RjM0lEUXpMakV6T1NBek1pNHpNREF6SURReExqazFOQ0F6TVM0NU9USkROREl1T1RVeE15QXpNUzR3TXpReElEUXpMamczTXpJZ01qa3VPVGt6SURRMExqWTJOekVnTWpndU9ETTVOa00wTkM0NU5ETTFJREk0TGpnM05EY2dORFV1TWpVNU9TQXlPQzQ1TVRRMklEUTFMalUyTWpJZ01qZ3VPVEUwTmtNMU1pNHhORElnTWpndU9URTBOaUExTnk0ME9UVXhJREl6TGpVMk1UWWdOVGN1TkRrMU1TQXhOaTQ1T0RFNFF6VTNMalE1TlRFZ01UQXVOREF5SURVeUxqRTBNaklnTlM0d05EZzVNU0EwTlM0MU5qSXlJRFV1TURRNE9URkRORFV1TWpVNU5pQTFMakEwT0RreElEUTBMamswTXpVZ05TNHdPRGcxT1NBME5DNDJOalk1SURVdU1USXpOVGhETkRNdU9EY3lPU0F6TGprM01ESXhJRFF5TGprMU1TQXlMamt5T1RJM0lEUXhMamsxTXpjZ01TNDVOekV5TlVNME15NHhNemczSURFdU5qWXlPVFlnTkRRdU16UXlOQ0F4TGpRM05UVTVJRFExTGpVMk1qSWdNUzQwTnpVMU9VTTFOQzR4TVRBNUlERXVORGMxTlRrZ05qRXVNRFk0TXlBNExqUXpNamswSURZeExqQTJPRE1nTVRZdU9UZ3hOa00yTVM0d05qZ3pJREkxTGpVek1ETWdOVFF1TVRFd09DQXpNaTQwT0RjM0lEUTFMalUyTWpJZ016SXVORGczTjFvaUlHWnBiR3c5SWlNNFJEUTBPRUlpSUhOMGNtOXJaVDBpZDJocGRHVWlMejROQ2p4d1lYUm9JR1E5SWswNE1TNHlNREEzSURReUxqRXpPVFZNT0RFdU1qQXdPQ0EwTWk0eE16azJRemd5TGpjMk56WWdORE11TURRM09TQTRNeTQzTlRBeElEUTBMamM1TkRJZ09ETXVOelVnTkRZdU56QXhOMVkxTnk0eE5UQTNRemd6TGpjMUlEVTRMakF6TnpNZ09ETXVNRFF3T1NBMU9DNDNOU0E0TWk0eE5qazRJRFU0TGpjMVNEY3pMakkyT0RoV05UVXVOVFV4TlVnNE1DNHpNemsyU0Rnd0xqVTRPVFpXTlRVdU16QXhOVlkwTmk0M01ERTNRemd3TGpVNE9UWWdORFV1T1RVMU9TQTRNQzR5TXpNZ05EVXVNalkxTXlBM09TNDJNekEySURRMExqa3hORFZNTnprdU5qTXdOQ0EwTkM0NU1UUXpRemMzTGpFNE1UVWdORE11TkRreU5pQTNOQzQxTkRJMklEUXlMalF4TWpJZ056RXVPREF3T0NBME1TNDJNelV5UXpjeExqQXhOVElnTkRBdU16WTFOeUEyT1M0NU5UUTVJRE01TGpJMk56VWdOamd1TmpNMUlETTRMalE1T1RsTU5qZ3VOak0wT1NBek9DNDBPVGs0UXpZM0xqa3lOellnTXpndU1EZzVNU0EyTnk0eE9UTTBJRE0zTGpjeU9EY2dOall1TkRVME9TQXpOeTR6T0RZelF6Y3hMalk1TkRnZ016Y3VPVFkzT1NBM05pNDNNekEySURNNUxqVTBNamNnT0RFdU1qQXdOeUEwTWk0eE16azFXaUlnWm1sc2JEMGlJemhFTkRRNFFpSWdjM1J5YjJ0bFBTSjNhR2wwWlNJZ2MzUnliMnRsTFhkcFpIUm9QU0l3TGpVaUx6NE5Danh3WVhSb0lHUTlJazAxT0M0MU1EQTRJRGN1TnpNd09ETkROVGt1TlRjMk9TQTNMalF6TkRnZ05qQXVOamMyTWlBM0xqSTFJRFl4TGpjNU5EWWdOeTR5TlVNMk9DNDVOREE1SURjdU1qVWdOelF1TnpVZ01USXVPVGMwTXlBM05DNDNOU0F5TUVNM05DNDNOU0F5Tnk0d01qVTNJRFk0TGprME1EZ2dNekl1TnpVZ05qRXVOemswTmlBek1pNDNOVU0yTUM0Mk56WTBJRE15TGpjMUlEVTVMalUzTnpJZ016SXVOVFkxTWlBMU9DNDFNREV4SURNeUxqSTJPVEpETlRrdU5ERTVOaUF6TVM0ME1qTXhJRFl3TGpJMk5DQXpNQzQwT1RnMklEWXdMamszTmprZ01qa3VORFl6TjBNMk1TNHdNVEU1SURJNUxqUTJOemtnTmpFdU1EUTNOU0F5T1M0ME56STBJRFl4TGpBNE16WWdNamt1TkRjMk9VTTJNUzR6TURrMklESTVMalV3TlRFZ05qRXVOVFUwT1NBeU9TNDFNelU0SURZeExqYzVORFlnTWprdU5UTTFPRU0yTnk0eE1qazJJREk1TGpVek5UZ2dOekV1TkRjM0lESTFMakkyTVRZZ056RXVORGMzSURJd0xqQXdNREZETnpFdU5EYzNJREUwTGpjek9EWWdOamN1TVRJNU55QXhNQzQwTmpRMElEWXhMamM1TkRZZ01UQXVORFkwTkVNMk1TNDFOVFF5SURFd0xqUTJORFFnTmpFdU16QTROaUF4TUM0ME9UVWdOakV1TURneU1TQXhNQzQxTWpNeVF6WXhMakEwTmpVZ01UQXVOVEkzTnlBMk1TNHdNVEV6SURFd0xqVXpNaUEyTUM0NU56WTNJREV3TGpVek5qSkROakF1TWpZek55QTVMalV3TVRJMUlEVTVMalF4T1RNZ09DNDFOelk1T1NBMU9DNDFNREE0SURjdU56TXdPRE5hSWlCbWFXeHNQU0lqT0VRME5EaENJaUJ6ZEhKdmEyVTlJbmRvYVhSbElpQnpkSEp2YTJVdGQybGtkR2c5SWpBdU5TSXZQZzBLUEhCaGRHZ2daRDBpVFRReUxqazBOU0F4Tmk0NU9ERTNRelF5TGprME5TQXlOUzQxTXpBMElETTFMams0TnpVZ016SXVORGczTnlBeU55NDBNemtnTXpJdU5EZzNOME14T0M0NE9UQTBJRE15TGpRNE56Y2dNVEV1T1RNeU9TQXlOUzQxTXpBMElERXhMamt6TWprZ01UWXVPVGd4TjBNeE1TNDVNekk1SURndU5ETXlPVFVnTVRndU9Ea3dNeUF4TGpRM05UVTVJREkzTGpRek9TQXhMalEzTlRVNVF6TTFMams0TnpZZ01TNDBOelUxT1NBME1pNDVORFVnT0M0ME16STVOU0EwTWk0NU5EVWdNVFl1T1RneE4xcE5Nemt1TXpjeE9DQXhOaTQ1T0RFM1F6TTVMak0zTVRnZ01UQXVOREF4T1NBek5DNHdNVGc1SURVdU1EUTROemtnTWpjdU5ETTVJRFV1TURRNE56bERNakF1T0RVNU1pQTFMakEwT0RjNUlERTFMalV3TmpFZ01UQXVOREF4T1NBeE5TNDFNRFl4SURFMkxqazRNVGRETVRVdU5UQTJNU0F5TXk0MU5qRTFJREl3TGpnMU9USWdNamd1T1RFME5TQXlOeTQwTXprZ01qZ3VPVEUwTlVNek5DNHdNVGczSURJNExqa3hORFVnTXprdU16Y3hPQ0F5TXk0MU5qRTFJRE01TGpNM01UZ2dNVFl1T1RneE4xb2lJR1pwYkd3OUlpTTRSRFEwT0VJaUlITjBjbTlyWlQwaWQyaHBkR1VpTHo0TkNqd3ZjM1puUGcwS1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRmdBQUFCWUNBTUFBQUJHUzhBR0FBQUE0VkJNVkVVQUFBRHdOa0h3TlVId05rRHZOa0R2TlVEdk5FRHdOa0h2TkVEdk5FRHZNRUR4TmtEdk0wRHhOa0x4TmtEd05VSHdOa0x2TjBEdlFFRHZORUR2TmtEd05rRHhOVUR3TmtILy8vLy9mWVhNR3lielQxbnRORDdSSGlua0xEZmJKVEQ5NXVmN3RMamZLVFQyZ1lqKzh2UDl6dEQ0bTZEL2paVCtlSUQ5ZEgzNlltdnhRMDN5UDBuck1Uek9IQ2o1Y25yU0p6TFdJaXovNy9EL3JyTHpabS80V1dQZlAwcnhPMFgvM2QvNHA2ejNqcFRyVmwvYU5VRC85L2ovdnNML25hUC9oWXo3YTNUNFhtZjNWVjdtVEZiL3hzcjZ3TVAvcGF2dlhtZmlSVkRUSnpMbW8xbG9BQUFBRjNSU1RsTUEzKysvZ0dBZ2tFQXdFSjlRZjMvUHIzQVFjTEN2Yit6MlJRa0FBQUxpU1VSQlZGakR0Wm5aY3VJd0VFVWx5OFkyTmdNa2t4RTJDV3NJQ1ZrSkNWbG5TVEw3LzMvUVVPT0h4bzZsbGtWejNpaXFUblcxYnR1U3pIU0UzbTdVRXB3N01vZkR1UkMrRzRmTWducmdOeVdLOE9ONkpXMGdIR2xLeXpNdXRnRldJM2lqWnE0bFYzdWdyYWJXTjZRbXBEV1JwdWlBeXczZ3l2aDlraHZTS1BkK2tCdlRvUGFDbWRnTHRJdmVVQklSRkhMR3FjUThuN3BJa2lGeTh5WUo4V2diQVRoMTJrUUFMblhCVURJVXZKMlNPYlhZVVVTQ2FrcGEwb3p1ZU55dGt1VzZvWGJZV1RIc21pOWZMQTA0UFRyc1pEeDBUWHZoRzJzekJvOFN4MStKaGNRWUR6bzVCbU9KMFZ5SkpjTE5wUE9Pd2FWRVlDeXNvZ1YrSXEwT1dZeEVRUUVXRUkrNXlKb3B3QUxTWnI2TkZnOUl4QVFTQlFWWVFENnF4TkJjaElsaXFGV1B0b21wZUtoNHB6Sk8yd29RTzFMRkk2bytQRHBWUDVKMUtYNUF0V3BBVERnZ3VQaHNOcjB2MTk1L25aMVppKzl1ajVNaytYVmRwazFXdk9yVVRLdk5XQlRVMTRzazQrVE5RdHc5U1lEaG12cnpsMi93eDBtM3FuaVc1SmoreUd1Qmw0cmlsNlRBZFBKL2dLZEpnWmwxSzBDOVdJQzJlaXVBTjFBck9MNjlzNHJiMlN1cXRSOFF0ZGRpUUlEei90WHZjdTNOYy8vY1dydy91a2pUOVBteVRKdXUwS3FabzlObUxBdnF5MldhY1RCU2VoM2xnNzUza0FKLzF0VEgzOWYrT2VqSmltK1FmcHJqNmltdkJlWXFzWkNsek5PMFRQMTBsUmJvcTE2bUxhd1ZvRjR1LzhJdnBCVkNjeVlkZ1ZyQnhXaGZ2WS9kMWNTdGoycVZ1SEMwcWFyV0QwaU1iV1AzNStYYWVRL2J4aklKNEtzSVdnVEdXRk1hcXlFS0dBSS8zRUJBWU0zTURqZUJCSkJWQkMxR3ZCTFhIV21taGlqZzFCbWN4M0IxcjRkcFlkdk5vQmRrd08yTlErM2xMTU9sRnJ1WjEyajU3SzdlWFBLQ29XVFNncmQ5b1FkWkppSGEvcVVwN1pTRXJFQ2JPQkdBUyswRk01V1gzdHhtQ3NMTlByQUVURWt0c3ZlS0d0UGhXUmJ0ZUF5aDVuSUxyYnNEQmpJMWFIRzhQWE9yQ0ZnVmRtSmY0TmFtSCt3d0M4TFk5VVg1NStPOWFOY0xtWVovTEpGdDlHMVV2a0VBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRmdBQUFCWUNBTUFBQUJHUzhBR0FBQUF3MUJNVkVVQUFBQjFNY3gxTWN4ME1NdHdNTTkxTWN4Mk1zMTBNTXQwTWN4MU1NcDBNTXgxTU0xME1jMTBNTXQwTU14NE1NZHdNTWQxTU1wMU1zeDBNY3gyTXMxMU1NdDJNc3h3TU1wMk1jeDFNY3ovLy8rNWcvK3dlZmwrTzlOOVBzLzM4dnkwZnZ4NU50QzZtT1dXV09XUFY5YUNRTmJsMmZhc2MvYWlaKzZHU3RQdTVmbmR5L0twZnQrT1VOK0hSdHFHUzlQY3kvS29idkxMc3V5YlgrbVhaTm51NXZuTHNleXhpK0tYWmRudTVmalV2dS9DcGVubDJQWFV2Ky9DcGVpeGkrT2djZHhubXpnZ0FBQUFHWFJTVGxNQTM3K0FFTzkvUU84d2tHQ2ZjRkFnSUdDdno0K3dyekRQQ0szdDNnQUFBdnRKUkVGVVdNTzEyZWxhb3pBVWdPRWswRktXVXZlWlExbGFzU09qM2V1NHpuYi9WelUrWlBDMFFraUk4ZnRsLzd6UE1ZWUlsTFRsK3NQZ2dsRTZnSU42bERKMlpvVXUwY2gyems1Qkdqc0w3VTZzd3dhZzJzV3g4ckI5VkpXaS9TTjExamp0STl1TmJsK1FJd2JhQlMxRE94UStFQlZ1dnlGOHNINnoyd2N3SzZOclZFYlhTTVBhc1FDR2N0N3RNMm9LcG9lN0xnQmpzWDNYQjRNZG0xMElyR2ViM1JHWVpYcGdIQmtIL3B5UnFXbTRWOXNTWnErU0UralkxZVU2aTZLZjk0L3RlOW51eUtiYnFPcjJlOXVmTCt3NDdvOEl5K1l0YStGMWM3UG9vTC9RbVBjS013MFh5NXBYNCtzcnJPVm1UOVZQejlBWUlWODAzT3hQQ2pEL3Y5Z3BOT1dTc0x0N3czLzlGZi80SURqaUxCMlhkMWwrdkJmOGkvSzBYVmp4elF4TkJjcWJZbFZ6SVcyQno1WGgrVk9HTHUreEJXWmRqcmIwYnJ2bUxvOWYyNytoS2NwaHJTNmpzanNCUEZBeHBua1J4L0VtVCtydURRaU9aQlYyTjY0cUVuUjVvbU5JQVo3Rll5eE9EdDBYMElabmsvRitrMlRmL1picXdlaGllYXVMc0xKYkxjaE82aUlzZHlmNUZHQlIyak9aaTdEY2pSTklWd0RKWmh6bmNoZGh1WnV1cTZ0WjdpSXNkK0dodkJibVY2dkhOYnBTV083Q2JZU2hLNFBsTHZ5cXU3cHdnaTZlOGxKWERpY3h1clg3bEcwSzJuQ0JMbSsxcmRqMUhTZ2tPRGFUTnhkTDV5KzN6L2NQU2l6MEJBZjlEbDI5cUFEZWxQQUNzSHhjTEpiSlZCMW0wRlM1SlNZSExtK21DRFBCYlRkZmlicDdQVldHZzVhSjlWM3dCRzgvcmt0bnFlMkNSZnpXWGFIclFpaTRqVjF5S2w1TVlWbG91T0FTQW9MOWhtbTRRQWc1Rlo5QitpNFRQOXdzTkYxOHVIR2d1V1U4eG9wdUxvU3ZzRDJBNXBLaVl1TUZkTXdtcmM5alNWNXNyb3ZkRXJwMnpsODhndG53N2MzQXRFc0p6eklOVzRSbkd4NlpqZ2lPYkg1Z0hObjh3T1pmNkdITW5CdVEvVWIwRXhiQzdGWGlrbmNORGU4SXpETHRvbXpLTlM4UGlTQ1hmb1NsRGhFMkN2UmROaUp0K1pwRDk0NkpwSkZGTlZqTFJzRVlqYXc4LzBSZFpRN3BraDE2VEs2ZWVvNU5OSEpEeTJPTTBsNzk2K09UWU9pN3BLVi9sbXFheU5JdlhxUUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFGZ0FBQUJZQ0FNQUFBQkdTOEFHQUFBQVdsQk1WRVVBQUFBelhlOHpYZTQwWE84MFhPMHlYZXcwWHU4MFhPc3dZTzh6WE8weld1b3pYZTh6WE80elhPNHpYT3d3WU84d1dPYzBYTzh3VU44MFhlMHpYTzgwWGU3Ly8vOFVKWGdYS29QeTlmN202LzJBbWZRb1NNSW9TTUh3ZlM4cEFBQUFGWFJTVGxNQTMrKy9nR0IvUUJDUU1LK2ZjRkFnSU04UWp6RGtmdnFVQUFBQjVVbEVRVlJZdyszWjNXN2lNQkNHNFcvOFEvNFRLSmcyMEwzLzIxd3BYZFZMeWNTSk15TlZWWjlESDd3YURmWUJnQ1cxNzlyR0Vwbnd3QkJaZTNaOWpRd3Z4ZmtVa3V5NWY4RVdoVFZocmNhdkh2Wmd3aVowT0daa3BkTGVoQ3prc2VSb1E3WjJZZWlDd2c1VWc5R0ZuUTZZZFFpN0hhUzdzU3pjalRwOFVRY2hCUjRjU1NwTWo3ZXVEV0lzRVBrZ3lNc3VJaktsN0kySW5QVEFjZVE0c003SUpCMDJUMWRDOXBVMGdmUCs5anA1ZStkUCtidGNCdFpVbUJyOEtmL3g5WHo0OVJOL3l1K2kwZ2hYQUN5MzNUUisweWNBL0hiVCtFMERkV0lKYWJPQkMzcWRzSWZUQ1hlb2RNSXRyRTY0MFFwYmtFNlk5TUpHNTRFWWhGbC9NcDkwaExEYmIzaFArRDVlSjdjN2M1b2J2bDMvR1puVDNQRDEwL3pwZHdwUGUweFkzalFTMjAwYk40V3ZHL3lZc05FSkc1Qk9tUFRDVmlkczBXaUZXNTF3aFU0bjdPQjF3ajFxbmZBRjBBa0RPR21FTFlCS0kxd0JLRFRDUFlEU2hHZmordTV0TGx5QytUNTJ2NjN0anZmd3JBSGlMaVI1VEl4MGwvREJTWWNkUHBUQ0k5TUFuWkVkb0RJeURmby82QUZXcnR2aWZ3TXBMRUwybFZ6d1JTZDhJeUluM1kxbGthNUt1UU9qcGoxWktzQWEydnl1SGJERVp3NXRQQklHUnhsWlZ3S1FUc2RzbW0vV1YyMkJMY3Erc3VucXFTcEtaS2g3VjluNXY0K2J0dk0xRnZ3RiszNHF3T3hhZDdFQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUZnQUFBQllDQU1BQUFCR1M4QUdBQUFBdEZCTVZFVUFBQUQvZmtmL2ZrZi9ma2IvZjBmL2ZFai9lRUQvZkVmL2ZVWC9mVWYvZlVYL2ZrZi9mRWIvZlVmL2ZVai9ma2YvZmtiL2ZVZi9ma2IvZmtmL2ZrZlVYU3IvLy8vcGJUai9qbDcvNytqKzl2UC9ublg2ZWtQOWZFWGxhalhYWHl6dndxLy9sbXIwZFQvaWoyelpjVVhmWkRELzM5SC96N3J2dUtEL3BvRC9obExaY1VUd2NqejM0ZGYxMThyL3Y2UC9zcExzckpIbm80ZmZobC9aWVM3LzU5My94Ni8veHE3a21ucnZnbFBjZTFMV1p6Z0RjRVpXQUFBQUZIUlNUbE1BMzREdnZ5QVFRRENRWUs5UWNHQ2Z6NCtnYjJXN0hYMEFBQUtPU1VSQlZGakR0ZG5wZHFJd0dJRGhKRVJRVnUxOFlSQVgzTnE2dE5OMTl2dS9yNGxUTlZxaUppUjUvdlNVSCsvSkNSK0tnQzVwaDBrV1VZdzlPT0ZoVEdtUHhHM1VnQi8wdW5BVjdjVytWamFnSHFpS1F1WEZFZyswWU5JeXlKcW1Rdzhhd1pjM3BFV2hzZXpDb2dNTUJ2RFo4ZnNDaG9pOFM4QVlVZSthbHdsWWtkUStGc0NTNE5PY1liQUVuMDVkQnRiUWsrc05MQXJ0Ym9UZytYWW5RaUMyRnl5V0xCYnNac2tZTFBOcUkySDNLb2xBc0RuTFBnaFdUMThNZ3RXOTZJQURIUjZtNEVDWGg4RUo4VUZzV1J2RjRFU0lDRGlSYUF4RnNWcE5RVldtUEJTRHU1enJEMEJOZERZOEhhemh5Rk8rOHlTT3JhY0Ryamh6VVdONXRzOGJQNDcrenc4T2F5NzZId2VlUVFMTHcwV1piOTBYZTl0OWVIeDkzYWJ1OXNlZTh3OTllZGdEaWZ1ODdwRngzK3JINVdFUGdVdy9yNXN6YnE0YUJzM3dtMkg0WjE2M1pOekVKQ3hPK0xKaTNINXZYLzVzbHZ6UGhPMzgyb1cvYTRTaDRLZXZmR0VIaXpMZktSZHNTeXkvWENtRmhmV01IWm1YdSs0YkUvNys1bE1Ib0JrZVZ1ellZbEx5N0dUQmpsVkRBTjN3NkoxOXR0blVEcjJQdE1OanBtU3NHeDR5UlRQTjhLMXErRll2UEdQS1pscmhzWHA0ckJNZU1YV1ZmRERrSDVzUGpCbnVoWWV3MlU1d1k3VnZFREVUUm5PQjVWK21sVTY0a24rWlJvYm5qaHRKd3pkTkx6dGhLTDJQVGR5RUNRcWw0L1pWd3dOSXhNNXVZOTNkZUtNdU9FQmQvcmdKd0lHWWgzMFA3UE9SbTk5akVVSnU5aUpGLzFuZkMrejBRWWlEMDRkYnJoODI4U1U3V1RDWDJoOEp6dklzWis0Zm10cTlTbW9QNmhOYkUrSCtVYnA1MmYxcmhRU2QwVFo3d1JLZ3MxbzMwQmh0b1V2U2hvdjJVblJGaStBR1dlSWpUak50bmhYU1NMMUtBNlREanpzVXJ1cDJBaDgxMEk1Smg4cGZIMGRaa3JiUkJmOEFIa1lVUHZPVSswOEFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFGZ0FBQUJZQ0FNQUFBQkdTOEFHQUFBQWNsQk1WRVVBQUFCSXAvOUhwLzlJcC85SXAvOUlwdjlJcC85QW4vOUhwLzlJcHY5SXB2OUhwZjlJcC85SXB2OUdwdjlIcC85SHFQOUhwLzlKcVA5SnB2OUlwLy8vLy8vbzlQOWZzdi9kNy85VHJQLzArdjkydmYvUjZmK055UCtrMC8rajAvK1l6djlydVArNjN2K3YyUC9HNVArQncvOThMQ2Z4QUFBQUZIUlNUbE1BMysrL2dHQWdFSkIvUURDZmNGRFByN0N2VUFVSE0wb0FBQUtxU1VSQlZGakR0Wm5wZXFvd0VFQVR3aWFMMm5aWUVrQXR0Ty8vaXBjVXZRTWZKVFU0T2Y4dzVEaE9Kb01BTTVFR2VYWVduSHV3d09OY2lOai9TTmtPb2lRK3daK0krQ095MGliQ2cyYzVCMDhIZS9EQUNuNElMYlRVNmdDMWRtcHpRa0lCdThrTVFTY2NYb0J2bGw4T0wzTDQzWHNBb0RXamw5U01YaEx5VlZzQUlwS2xOK1JBQkY5V1hRWmtpTVYrQTBJQzJrUWdYa1JiRVloUEhUQ0dqQUc3Q1prRE1kNnFKR2gzeVJrUXlscU9BQ0ZkdmlNZ3BMbUl3UUh4S0JiZ2dOTW9CaWRnSXlZbXBWNDdiSEUrT0NISG9xQWxZd0tjOE9aS0xFeXRyUmxLVmFoMnFGWUQxMW9WUmQwM3NBbmZGamR0OGFCZnFDc2NLSnR0c2JjeGNpMW1sSjg0OEtubUk5Zk5sbXowcXJxdEo4RU43blRUY2QyMnltaGVpM0Y2MlVuOXl5OTNBWDZodXNpZmswcDkwRmlKOVpSYVBuNjhQcnFBcGw4a3BxcjFrWTI0MHhNcVhLNXlTb1dzaStXQTFGLzViU0grR3MvdkFLbWF1MytrbFlEY3hnKytMTVE2TXJtcVA2VzlBOHlScTF5WXhYajZNamlkNnZWaTdCZGovWFh3bXJoY3BXTFFXcVhMWVpXSzJuTHhib0RJRnN1aGtZQjBsb3YzclRWeVhtNy82L3AyOStOQVo3MUJLdHdnSS8wajFXaVcxaHNFbW1sTC84eStxbGs1M1BlM1ZzdHBTM2ZQaTFHZzJsVVR1ajJhVUszbTliY1dlOXRtUkRXZ3djUm9qRjdQME9oUjBDNGJmWThEamMwVkJOVjlyVnZ5WlRXN0dscFZxSEl3WFpyY1hVelBnSkNLTTNCQ3pISndnczhDY01MUjJkOVlkMys4MlFrY0lGemUzQ1RnZ09Nb2pqeWdKMkp1N3NmZXRKYzhGL2owaGp3WG5FMzRRSXl2clE2V0R4KzkrZVFCT3dtWmg2NGY2QkhYY3ViMG9TbVNFRGJpSlRseFJTQSt0UmZOVkY1NmM4NDJTRjk3d1pJWVhnbGxzQnNSTWhQQnpxQzlnUDFCNlBNZFdqOUNnMGxOckVXQzkrZXRJbUUyUk1kWXdKK2M0aVJpTzBpUGZpeCtmMzM4bnVWQnlnejhBeEpFRGZpU2Q3K0tBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFGZ0FBQUJZQ0FNQUFBQkdTOEFHQUFBQVYxQk1WRVVBQUFEMlNYejFTWHoxU1h6MlNYenpTSGp6U0h6MFNIcnpTSHp2UlhYMFNYejJTWHoxU1h6eVNIcjBTbnIwU1h2MFJYcjFTWHYvUUhEMlNYM3lTSHIyU1gzMVNYei8vLy8zWDR6NnBMMys2ZS81bWJYMlZJUjhndzhmQUFBQUZuUlNUbE1BMysrL2Z5Q0FZRUFRa0srZlVEQndNTThRajJCd0N6ck4rQUFBQWFkSlJFRlVXTVB0MmRsdUlqRVFoZUZUM250dmxsVEk4djdQT2N4a0pJdkl4dEJVS1lyRWQrV3JYeVhhdllKcjF1TXlEcGJJOEFWRFpPMGhUQ3MyNk5KaHgwMzJNSFc0UjdLR2J6WEVtNGQxaHU5Q3ptL0lTcVdqNFUwbzRocHZlYlBSb3lvUlA0QldWTHp3Z3h5S0hEL01WYm9xWmNjaVh2RE56RUlTTG5oaUlYUzU2MFlXWTRFc3NxQW8rME5rcHBQZEVabVRIamlQbkFmV0dabFltS2xzQ2FtelpHQnhGbWNkWjZLSGIySUZDVURQQ25vQWxoWHNBSERaNmVQdDdOUmVsdFV2eE8rdmY3MS90cGRGSzZiS3dLOWZUdTFsVVVUUUNTL29kY0lqckU1NDBBcGJrRTZZOU1KR0oyekFPbUYraHAvaFovZ1ovdEd3Mm1YekY5NUIxRzZtZzFaNDFBbjNXSFRDQVVlZDhJU1ppejcvUDZXMmwyVnIvY0g3N2V6ajFGNldBZGl4QXF2NWNwTll3UVNnTXl5dmc4NzcyQURvL0JZUi94Z1dSdmdTV0pqRG1jTGhJdytka1IyZ01qSjU3UTk2d250NTFQOW9LbnVXelBobUVkNFJXUkR1WmtHa3ExSmVVREVUUDRBU3F2ekltMW1QYStMR29VMUVndyswSVJ2MkFLVFRPZHNXaDl1ck51RWUrNm0zM0xUcjB4NGJ6RlBvYmZudjQyRmNqak91K0FOQ0cwR3R6T2tBa0FBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy90YWItaW1hZ2UtMS00YjJiODA2NjM5YzQwYjg5MDgwODg5ZjhmOWM1YmRjMC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDMEFBQUF0Q0FNQUFBQU54QktvQUFBQy9WQk1WRVVBQUFEbjU5Zlh4ckRuNE16dTdOdnI3TnJlemJicTZkZnI2dG5xNmRsZ1RFVGYzOGZtNXRoTU9Ubmw1ZFhOdmFmajM5RGR6TFBYeGE4K0x6VG01OW5ReExQcTZOYmR5N05CTWpmdjd0cnI2OWJkeWJQTXZhN2V6YmhCTVRMcTZ0dnA2ZHZOd2E4OU1qTGh5N2pXeDdBd0tERkFNekRqNU5ZNUxqRmxUMGpzNjlibzZOdmZ6TFhaekxUV3g3TGZ6N2pwNmRlaGpZRkFMamJYd3Evdjc5dmo1OVBid3FiY3k3TGV6TFBoejdkQUxUTG41dE0rS1M3cDZOWFB0SnZpNGM3WXZxTFZ2S0VzR3lQdDdOZzVLUzQySkNuZjNzN2R4S2l6a25zeUlpdzZKeXN6SWlqcTZ0ZnI2ZFhnemJSZVJrTlNQejlRUERoT09EZElOVFl2SFNiWnliWEtyNWRHTWpVOEtTdmN5YkhXdUo3TnJaYTluWVZFTURFOEt6QXBGeUhrNU5MbjVkRGs0OC9idzZ2T3JKQlZRajFFTkRNL0xTNDNKaTAwSUNYaDM5TFJ1YUhTdUp2RXI1dkZwSWk2bUgydWlIU3NnMjlZUlVKS05qbFhPVGhETWpnd0lDcm40OWZqNHRYcDU5TFgxOGJRemIvVnhyTFl3YXJKdDZYVXRhREZzcC9UdXAzUHQ1M0xzcDNXczVyQXJKcTZwNVRScnBPbmhuTndVVXRaUWoxRExTL2IyOHpjekxiY3hxM1l2NmJIcXBQQm80KzFsNEM1azMrVmgzNlFnbmVjZTJxZGRtRjZhR0I0WWx4dVdWQmtVRTlKTXpFL0tTcm81OXJqMGJuR3ZySFp1WjZ6cDUzWHVadlVzSmJTdEpYUHNaWElwNHUrb0lteWozU2dnMitaZUdWeVlWbHhXMWlDWUZKblVrdGpRenhlUUR0TE9qdEtMUzRoRWgzbDZOamo1ZGZiMWNqSXdyVFN2YWZidTZQSXBJN0duNDdMcDR6RG9JcTVtNGpDb0lTL21ZR0phbHd6SlRBN0pDYy9KQ1FXREJ2aDJzclYwOGJWenJ6Sng3blp4NjdCdWE2dW81bkNxSTYxbVlXdmdubTFsSGlEY1d5V2IxMTNXVkZxVGtWaVNrVnhURVJuUzBOclJrQldQVHhQTkRIcjZkdlUwTVRSd2E3V3dxTzRyYUhQczVLcW5aSzhvb3kxbklxY2pJYWpkbTJvZ1d1UmNXYVNiVjZCWlZtTFoxZUlYbFNBV2xGNlZFcmUxOFhOeGJUT3VxbTl0S25DdEtXL200NmtrNDZsajMyV2ZYT0RiR0xQdWFiR3JKdkxwSldha1lPMGlJT09jV0lGV2x1L0FBQUFOblJTVGxNQUlDQXczKy9idjU5d0lCRHZuNEJWNysvdjc5L2YxNyszbjRDQWdIQndYMUJBTU8vZjM5L1B6Nyt3cjYrZ29KK0FmMzlnUUVCK1YrOGVBQUFHZEVsRVFWUkl4MzJVZFZSVFlSeUdyOTNkM2QwMXg5MWRoMHVYckRjMjFxQUR4Z2FLb29Bb3BaUjBDVWlYaE4zZDNkM2QzWHI4cnQzUE9mZXYrNXozdnZlTEgvUTcvWHUzR2pySUtxN3QwTFZyNy83UWYyayt2b081TnRzc1NIK1ZsaWtRVytEQnJaci8yeDBtMExwcXhjTFRrWnNTcmgySy9KaVJSYThWL3NOdjBUUE5JZFlJWkdlckl6ZElDZE1JaFBqRXFoakVJVHM1N2k5eXZZNDNLbXRoc1VBVFhiV1JRQ2FUU1d1OENadE9XNklGb3ZSTzlYNlhKN1hNcmVDN1hBS051Q1pGdWlZT0U0Y3hrSlpHbEdkRm00VDhwTFo5ZjVYN3JHQzhyalRMYXNVeS96Tk1LUW1Ed1V5WlFsSVcrVHFGcG1oQjVsTnFuNS9sdmprNUI5TDVackcvQ3hZOVhEeVAvTlZXTVoxQ0lkOGtTTkxoSi83VXVkR0tWYThydFM2TnhrVTdlMi9MWE14bmdMMmwrcHlJN3poYkVZUnY5S043d3hVcjg0K2JXRFN6Ykp2WUdRbCtFcWhrY3FneTNCaVZKZWJ6bzVmTkluSWJ0dmdxZCtmaUZoN04wQVpZelZxYTZOenQ2L084eVdHaDB3Q0ZHMDlxTkdmNUR0VG1qdjNhZzd0Q3Q3ZENJTmtHdXpqK2NOVHQ0eWUyUnE0cmlQQXB2eHQxMXdUSE9Qa25NNElZZUR6K1M1ZW1YSjB1UHdQMjJBWlRFQVE1Zmk4bHBmd09NendpTlRXU21Wb3RqNG1PanFwZ2VPTHczQ1pmb3ZHNm9Cc24yUUhidGxsaHhGbm56NitzOG1YbUdVdXJUbVRVc1ZubWFHRlUybWViV2crTlBuOSs5K3FyUWkzSGFxV3huVnRUeXN1WXpNVEV0VVVieTI5djVTTVVpMGtXbFJGRXhPSHd2TzdvZ3VTc3VuQWhXY1RXV2lYMDdDamZ6ZkVxVmJ4NjA5cEM0eFg3a1JRbmhTUFU4RSt2MXVtQTNRaUNHcHdQM00yWWxaekZnVGtjMm82cTBtSUNnU0F0MlRTM0tDSlBxZlE3YlpQSVlGSDFmclFLajlvQWFwYmp0ZnZDL3FRc2w1Vk9wMnkvNzVzUTV1MHQzWlF3dDhoSUlvZjduVUlvZEl1bUpta2hVY2ZnVVp0QkkzSUNkOC9LdmVxQXJSNEJIcHo3Zm1yVjNMbnhoeExXS2pmazVSWDRuWkpKS0ZxMjBGR1J2RXFQcDNhRG1nUjZMWnlWZXlBVDlnQTI2NEdmenpwZ000OHR2clU1SWp6Qzc0eklacU5aNUNKK1phNGV6K3NNdFF5YzRiVnc5WUYwbTRmRVNtRTk5UE5acnlKSUU5VHFkUkhoQmNaYjFUVTJHZ2VKa1FsTmU0aDRYa01vRU5oQnMvS1BJaFFKaTBONThNV1d6bDI3TnJ5Z1lFUHFtUm9rZ01hT2tXVytKM3JPNUZHaFFDL0d3cUM5QjlMa0VuK1lMWG5vdTFpOWJ0M3p3emY5RG04eEdyY2NPK1dNb1hEa1dyRWoyUk9zSVJYS21lSEZDTnFidjh3a3N0QXBPNk9BdmRuM3pzM0RIdzdmVE4zc2szb214a0tCNlN6LzVEMUVISnJkY2VXTVdZeW42VUtSR2FFdDN5a0R0bDMxZlBINmQrdlhGMnhZZkt4R3JnMlEwVm5pWkZCa0p0aWVJVjY3Y3BOZU9MTGtjcmJIOHVVN2p6UFZKUWZqN1Z0ODdCR0ZSdDhIZFFpYm93SFpGYm42bVRoZUU2anBxcVMwWlNhQkdiRnBnYjR6dXp5eDVLQjBtcEpFV25yRmVIOEhJcWR6dERTcjVsemE1Y2VlMU9GUXN4bTdWbDkra1Nrd3d4WTVaL2xPLzlUSXhCTFZOSEljc0ZOMmJFYzRFckFtMlNMaGFpNFAzY3NHb0hkKzB0RktGNTB1WjFPV0w3dkZaRExWZG51eHNiaXN1bzZOU0NRc0d0MlUvQWlIbTBrRjV3UnF1ZExyNmxFQnpHSUZ5QzBVajYyUlBtcWZJMGRLajVTV0hxczZ0NTF1QzZCSjZJNlhqL1Y2THJVaE9MR3RWNndrWHBaVFBDUXNtNGdpVG1GdUxpNjIyemNVMnplVzNqdTF3OGFtMFZpc21JelorcGxjYWpmMDd1QnhNMmJzdjVHNTNZWmtJZWt2RDVXb2lvb0tDOFBEQzMwUzc5UmxiN2ZBc0dqWmdsMm8vZmxpTnNGNUVvbUIrOU15L2ROUGxCMHFTUUFqYytsU1pkN1NQQlh6UkUzZGp1eHM1d0lpRWFmSE4vMXk1M0Y2VHlLNi9mbXZ5aEt2SFl5WFRnc05EU1dUTUtSUXdrRjEyZGE3WlFudWo0aWVPQjRhalRiSDZjQmhXZlhzK3ZWckN4Wk1ueTROdlVRaW9hTnRDdVpTR0VHcEpNZGRXdU8rUzkvNjIrVHVUR1F3OXN6L3pQU1FlZk84TWFpTDJ1UlFjTys4dzhMbWVhOForR01PdHQwekoyVE9uSkRwQU5TT0F5STYyOExDd3NnWXJKc2IxaERidmo3MG5YN1BRcWFIekY4QW1ELzlMY2cyeEJyaTRneXhDdXhVZ052VWZjSEJiYUNmYURObnpwTW5jMExBQjk2c0NUYkV4aHFDZzRNVlU5MldMRm5paHAyczJMZHZBbkIrMXR2UG5uMXg5bXgzZDNjc0ZxdFFHSUlOKzc3Smt4WHQra0cvVWIvVHhZdXozUmN0V2pRWnZBYlpzWlBkQUZNbkF4cUR6bi9RRTBRREZLaXVVR0JSR1l2S1BWcEFmNlArYUhkM05CczdHWXNGejFUMEg3RmR2Z2YvNlk5cWpOcUFxU0Iya2R1QUhzRDlIdzE2amV6U0RwUm8zSGhNcndiUWIzd0NGS2ZjOUl6azJjUUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDMEFBQUF0Q0FNQUFBQU54QktvQUFBQzkxQk1WRVVBQUFEWHpkRldKaGhVS2hpem1ZdlN3cmhnTWlBWUV4QzVlRisvaTJ6ZjJON1J2N3crSHhUbTNPTExxNVRtMnVQVzB0L1MwTjQ1R1E1TkloZUpURHpRejk3VXk4Y3VGUkZESGhmTXdMd1dEQXF0a1hLMm81OFVDZ21TYVZDL3VyZlR5OGlmWTBMU3diclB6OTJUWlVRdkZ4SGUxTnpwNGVMbDE5dlh6OWZQenQ3VjBkazlMU2VJWmx2QWNrMVBMeUVJQndmT20zVUhCZ2JJam1WTUlCVFF6OTBGQndmQ2wzcEVLQ1RtMitQZTJ1RFkxOS9pMitMWHk4am1qVzNRejkzYXlzVFh5TUxEZEZsQUlCYlZoV25hZTFMcTRPYlUxTjdpazMzWmpIWE1nbW5sM3VUajJkL2xsNERaaEdUS2VtRGJmMW16Y1ZqUGRFdFpMaDVnS0JuUzBkM1B4Y2JWeGJ6UmgzRGVnbC9ZZjE2YWFWWE5kbFBYY2xDTVR6aE1JeGMySFJZOUdnNDFGdzdVeGNIZmpXL2hpR1RDZldTN2NWcStiRWhKSGhEU3ljWGl3YXVubEk3cmtHcnFpbUc1ZVY2aFpFM1VlMHlMV2tRcEdSUWtFUTNrM2Q3ZzFOYndvb25oa1hYWWluRGJoV3lpY1Z6SmNsQ3liRS9MY1VTU1YwTzBZVUM4WkR0MVF6WnJPQ3VaUXlndEl5Qm5MeDlhSUJSUEhSQXZFZ3NNQ1FyS3ZMYkxzcDdxbklTNWdHdmJpR2ZUZzJUU2ZXUGxoR0NzY1Z6VGVsbXFhbE9wWlV6RWFrVzJaa1NrV1QrYVZEK2RVeldNUmk1S0t5UnlOQnpqMk52VjA5dmN6YzNNd3NMeXBZN05vSHJia0hydGwzbkRsSFh6bEhHN2UyV09aRmU2ZWxYaGVsT0JYRkdjU3p1MFhET25UU21HUENpQk9CMEdCUVhKdjc3M29JT21oWHZjblhyMG5uUFRrbk9aZTNMbWhXcmZrbWlYY0dYTmkySEtkMXJqZ1ZpaloxSzViRkhGY2ttYllFbk9iMGZEWXo2QlN6cTBURFowTmlNVkN3clB2TGZBdXJiRXRLekNvNXZsdkplOW5vbXlrb0NkaTRERWhXeDNhR1hFZTFteGZsS1ZYbEs5WVV6T1kwQ2hZejkwUGlrOUppRkdHQTd5MnNqeTFiYkZyS1dYakl2VXA0aVFoSUxIbUlIaXNuaXlpSGF3Z1dtUGIyVm9YRmh2VUVpQVVqK3NXenl0VERtcVdTODFNUy9oMWNtM282TGtxcG0vaFhLS2QyN2NibURFWjE3SVpFOWZQalcrY1RITng4bm54YS9mckpJV2tWWXlBQUFBT1hSU1RsTUFJUDRpL2YzOCtTRDdnRFF3NytyZnhaK2ZmMVhmMzkvWHo3KzNxS2VnbjRDQWVIQndjRjlRUUJEdjcrL2YzOS9mejgrL3Y2OXdZRURTcTlOaUFBQUdUVWxFUVZSSXgzM1ZaVmlUVVJnRzRJOEpkbmQzZCt0Z0cwdmNocXgxNlpvRkd5eEJ1aHVrdXhRRkVaQzJtdzY3dTd1Ny9lRVpZTWZ6Kzc2ZTZ6MDc1M3NIL1o3ZVV3WU9INDRUTTd1TkhET2xOL1RmZEJuRVpFV3d3aU92U2k5THBHYXphTjdBTHYrMmkwT0VXWmxaT1RrNVZlSE12RmFjR2RkVkxRSCs3NzFxbGpCVmljVmlmWDNyTTZOZ0lxWVVKNUhnY0tKQmY4UERKSmNEa3VsWWFtSWlQb0dIaFptbFVtYWtTR0tXU3BqRC9xaGZQdHNVMHFDbkt3OG00cjI4dmVPNWdkS29xSzRzSml6S2JNTGxkaDM4S3g2Y0d5WTI2bE9WWkE3SnljbUpLTis3TjBNdGxjQllMSkUwU28zTHV6SDFaenhOKzhpVXk5Y242emhlUktkMWE5ZXQyN3pGVlNnU001bXdpS3M0TmZQeURvL3BQN0JWSCtTWnNBLzgybFFsaDJUUm05YnUydVY2cUFyR1pLb2pyK0p5SmVFbGJLVFZkOTNQY2VORDB5TitMVjFCN3REYnQrOXlUU0pVcTBXd3F4THhGWEZreUkzOG9UTTZjYy8xQ09TVnNESytqMDdCS1NRNk9XM2F0QlpNNHVhbUNoZUpJaVBGSmx4RStBNFg1UGpPT1d4dDNmTnpUU1UreWNXbmR4ZUNNN1pQQWpndHNKb1ZFYUhHd1ZqTisyT1FuYk1Nc0xOemQzZ2ozczl2aUR0TjVuaDZlaEtkTm0xMzVkVXpDRFJWUm5WRVZCUXJMM2pIRFRSeVJIdjFxaFYyQ0VUK21iTGcxdFlBQlRuQlMrNkpWNWFIVmdwU0JMNzRnK25Wa1ZGNW9hbldSMlZJakpXbGVoWGd0cll2SC9EMXplR3RhV2Z4WHJ5SzBOQW5kVlFlTHo2ZVFuc1dFVm01SnU3a1lTUWFNeEhvSWZidE91YVIyR3dTaTdvMmVIa0tBck5Ecm9qRm9wenNneFJ1ZlE3cjZjWFh4OWhJdE13R2dub0J2TUxPemphL0xPeEtMdTVEaU5Gck16Y2pKNlJNa2l0bCtTVlFLSUtNNnBhTHdhZllHQ1RtVEc5b0V0Q1d3VDE4U29LRGpVWStuN1RaTGNHdjRYRnpnTi9aQk8vNEJFRjk2QnF1K1RZYmcwRS9Yd290c2JkVUl4elgreFRyNlBUN3liVWtsSE04WHFGUVVQRnl1VE1GbitKZmVRamJkaHVKUm1QQ3hrRDlPN1hIK1dJeXAvQzFENTJJQXBIanZiMVJLR2RLUEo2UzBwUWtiTHVaajBhend4WkNNKzB0WjdRRldza2hGaGJYNmp5ZFhWR2U2NXlJbTdlNEpYRzl2YnpxWExQejJtNkNuNFFkTmgreXQxKzFBUndTYUQ4cWg1eXFWOGlkazdncGlldldibS9YcEVJY0xDK2tUWXZHMkxERGFpd2FkQ1BnNndNeVZYVlpXV2xrb053WVR5NVE5aDdhU3VQaEMzZEwxWGxkelZyMFlSc2JVM1JITjlBTy9QTEFMS0UrSUN2OVlubzZqWndadEFZa2hVSWlxOE12NDlwdW8yM1lOdEhSNEhMc08vUU9ZV2FWTUpVZUVGb2hjSlk3WThzdk1JRG1rWXBad2Z0TjBjKzN5V1JuYXJwQi9WZDFUT0lRMDV4ZEpjeEtVMklQRXIyVGFEemYwRUFHZ2NBajZVcjJXRCtNam83dTFxMm1aaVEwd0g0RndBZzQzTUY0dGk0Z0lyZ3E5T25UbHBhV3lxcE1GWGlFRkU3Y0h2Q2liajZQcnFucDluQTB1TXNOdGl2aGNMaWpnM1hhUGwzSWc1TTlGRHQzN3R2cGR5RkJRS054OGVTNGs3R0haZWdYbUpnWU5uc2kxR3REaDNhSGV4anh1dHJ5NUR1dlhoRUZUVnc1eFpsTDQ1R3BjUzlsTWhrYWcwVEtZbUo2UWRBc3U1VVdEUWZuVE5QeHk5KzlmVWZhKzNZclNvN2lHZ3lDeEpUaVl4Z1FGeGVYYlVkR1dMN0tsZXZiSjNGMDlIaWM3S012Yjdudy9qME5CYTdkWUdBSUNHdm91Z0lOR3VteWNlT1JJK09BdHJMb2p2Smp4bVI5S2haN2tCSy9ENVZFWVBqN0c3WXlzUGQyMzNKeFdiMTY0N1lqN1I5bS81WGZOSHkvWGdGV0Nza1ROQU9jemlCczlmV2xuNzUzdUYyRGFrczU2TzdreUJJNkdTeWd6YTV1QlAvR3BrYkMxalVYbTg0ZVB4R0xXUTFpMWJsUHZtbEh4TGI5ZGVCZG93NFpnb0lxR2cxQSsrNitmdnpMTlRUQTQ2R096T2dILzhZOU5wN1BmaElZRkZUNXJLS2VZU0FjWW55K3Rudm50ZU4zanJvTS9Xa1BkbXAzOTAvYTRQRFc2c29nZi8vR1JzSmU4aTJOUm5WMzM3NmRKL3BhUWQ4ei9adDIwSjU2M0N5OEZLaEtiMHJuMGZ3UEhQYzdmYjNpUUd6UnJWODIrTlRPdVIyMDJwSWM0YVVNVlZDRklESG83bDI2UmhOM29LQW9ZQm4wUzZhQllSQUk5L3hUMXNhRzdNekFqQXhWb3U5SHc4ZHpzVDNvUFVwNzlJSitpMVUvaTk1VEZpdE04L05UcVpSWWF1bjFTd1ZGNXdvT0hKamJIZm96UGVFTzJnZW5qdDVMVTFLcFZDeFdVWER1WEpHbTZGbjJoTDloVUQvNmZ0a2I3WWxMcFFDWGxoYmM0Y2V5TmFXTGdQMUh1bytkWTdUV0ZNVWRPM0h5aGNZbjluNWYwUHZmOUo0OGFwVDFuajArZlJlTW5mekgvK1JYQTAzYTI2VUhRN1lBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQzBBQUFBdENBTUFBQUFOeEJLb0FBQUM5RkJNVkVVQUFBQVRIQmtpSnlBcUp5QWFIaHJBcUtVWEhSa2VJaDBhSUJsMlNqZ1ZIQmR3UlRRaEpDQWdLQjlZUENvcEtCeElNeVVrS3lTRVV6NG1MeWNmSmg0Z0lobGJPU3FWY1dRYUpCeUNYRW9USEJZZ0pCNFJHUmRKTnloK1R6MXBReTBrS2lDVFhrVElzYTlrVGtrbU1DVVBHUmJJcjZ1VFhFVExzSzNGc3Exd1lGMUhPenBpUFN2SXNxOXpSaTBRR0JURnI2b1BHUmNZSEJnVkdoZ1dHaFliSEJjY0h4d1JHUllnSWg0a0xpVWFJeHNpSGhnZklCMFlJUm9UR1JjOEtoK05WVG9xSnlJeEpoNGZJQnNiSFJrZEtCOGNKUjBxSVJzZUhoa1pHeGFSWGtpVFhVUWtJUnZXdHE2SVVUbURUemRLTUNNa0pTQXRJeHdXSHhyVXNxZkdxcWQ4VERjdExDVWhLeUpGTGlFaUtCODRLQjRaSGh2SG5JMmRaMU5zUlRSdFFTNDBLU0VuSXgwZEhCZlB1YlhHcUtHU1lrK0tXRUVvTWlsWE5TWlFNeVlnSmgwVUhSalp1YkRUcnFMUHFKcTlucG5Ob3BLemo0VERsWU9KVzBpVFdqK0RVVDEvVFRkNVNESnpSakZmUEM1QU1Tb2lKQjhuSUJyZnlzWGV4c0had2IzYXZMUEtzS3ZLcDUvSm41QytrWUthWVVlSFZqMktVVFdIVFRTRFRETitTQzltUHk1S055NWRPaWd6TGliTnRiSFBzcTNQcnFYSG9aaXdtSmF1azQ3R21vdkdtSWEwaVh5NmlYVzFoWFNaYWwycGRGeGlUMGlDVkVXUFdrQTVNQ3RlTXhuYXZiZlFzcXZBbzU3TXBaZkVtNUczbUpDNGo0bTVpWU91aW9EQmtYNm5nSG12ZlhLbGZuR1ZkSEd6Z1d5Y2JtZURYRlNNWEZDZVpVeDFUVUJtU1Q1elNUVllPQ3RHTVNsUUx5UGsxZExpME16ZXc3dlZ2TG5VdWJYSnRMTFJxNS9Mb3BhYmZIV2dkbXlsY0ZsMlcxT0lWVUdYV3o5UU55czNLeVU5THlRcUt5SllNQlRFcjZ5NW82Ry9nWUs5alh5d2hYcXZlV21oWTJHZ2NWOXhaVitMWlZxS1YxUlBSMEpjUlR4WFBUcDNRVGQzUWlwcU94K2lpNGE2alhxbGMyMkxiV2FDYTJXYmIxZVJZMWQ1VWtoK1V6OUZQVGQwUkNHMll5Q1NUaDQrS0JoeE94V0ZRaEtBUHhIUXljckh2cjJaZ0g2dmZucXZlMk9rYWs5cU96ZkhieVZqTWlXYlVCcU9UQmlPU1JnK3BGY2RBQUFBTVhSU1RsTUFJQ0R2Z1B6ZmNERDc3OXUvbnlBUTVkK2xnRjlRTlNEdjM3K3dvSUI0YUVEdjM4L1B6NysvcjUrZm41OXdVRUF3UnF2aFZBQUFCbnRKUkVGVVNNZDlsVlYwR2xFUWhyZnU3dTZ1ckxGSWNBSUVKMGdJRUt6UUFtM2NwWTBuVFNOTjQ0MDBxYnU3dTd1N3U3dSs5S1p5NnYwZTltVy84NStaTzNkbm9kOXAzR2hZdnk2N2lvSWJEQnc4WWpUMFgrclVyMGNuOGlwdkZnVnJrcWVPR1RPbTc1Qk8vM1RyTmllSWVOekl6VmsyTzNrcWtBSGJqdzZ0ODFlM1ZYMDZRU2R3bUVmazdKbzlkZXYyWTRXRnh4b2MxUlN4Ni8rdGlJWTRnUk4wbnBHd3JWM3FHRk5ZR2NjNWVHblp2TkM5MWR3MmRYK1hSelUxRW5RbG5jZWpjK1BPelVzdVhGWlkrUEtpWWszcDBnMlZPbDI5RHIvSzdSa0lqaXNKSG8vZ3N1OHUxR2gyYVRRYXgveVZxNEpuTHl1cVpIczg3WCtXT3lBTXhJZ2I4Zmg0UXJWMm9TTTV1RUdENE4wcno2ME1UVTdVckx4azgvY2UxL3VIM0xJZXNCbEdPc0dsMHlzWE92S1ROY0dMMTI2SXk5a2JyTm1hMk9BQzErTkY3ZnlqOXRaY0JHR1FZV1U4em91NzVzaWZOUzFsZnZtNWxYZFd6SnU2TFhGcjR2YXp1QmVWMzZiVk43bWRqZ2VqWkJJS3c3Q3ljbDYrVktxV1RwQktrMlltVHB5NGJldTIvTFQ1Rjd3cDQ4YTErellVaWgrTUl5UXVqaGpwdW91aDA2VFNDUk9TWms3YXZHblRwbGtGTTZldGlGeDFuMCtoOEwyK2pxbkZPSW9JaCtOMnIxaGJ6YTVlVXpvblVEMGhhVUlTc0RkUFd1Snoyclh4OHBLejNsNWV2cjdOdjR5RldwdU5yWG1mclYyVGN5QzhyTmcwWjRkNndwYUpFeWZOVE5tOWVGVjQxWjJBV3g0cXFKeFMyMmgzcWorZnk3TmZMZzh0RDNCV25Ta0xDeXNKQ1V6YXNtV21OQ1YwM3RSa1IvQnM1MTQvQ29YaTUxZGJlVU04WGtuQVdOV1NVNVltYWFIVHI0ZVZsSVNBV3FUVENoWXNuWjJmY3VQMGFkbkZjUUMrZDJkd240bngza282Yk55d1lNbXFrNmE1cFdFbHB0UWd0VnFkTW5kNitkS0Y1eStmWDdGaVh3NkZBdEs5ZlJ0RGpZQWREOE00ZXF1MFFMMmd1RFN0SkNRb1VLcmVzZk5FUU5YZHQrZUx0ajkvc2JUYTQ4Zm44NzI5R2tIZGxPTTlCR0wweGEyN2R1NE1PUVVxQ2RrUnVDTndUbXJZN28yWGJsNDdWclE0OU9SQmZ4RE85Nk8wZ0pycnh0T05DSXpFSzlsN1QwNHZPN1Y4RWNnT0RBb3htZVlzWEx4cy9vTGp4NCsvc3VwQWwzeS9jZjJoZW5rWUhRVTJtNjNrV1c4c3liNWRsam9uS0Nna3RkZ1VORzFXL3F5VXVRdEtRem1IL2ZsOEtwZyt4SzZXQUJ0aHNQUFlNSklRODloY0VaYWFtbW9xTGk0cERsSkx3WlZ4T0RRWGRCNHExY3QzL0hoSWw2Y1U4bUNFbkhlUWphUFlrUWN1bitXTEZxV2xwWUhIVGpDa3hFa1ROMDg4ZXQrZjZ2WEZwdUtFa0E0enlMbzRObjI4NnVxSHF4aytGY3VYVDU5ZVZuYkNGQ2hOQXZha2JZNnovdDYxdWkvVUVPWUNtMHpDcXBVOHRPYlRzMGVzR1ZucGUvWlV2RjUrSXN4a21sdFFVREIzL3VLY3IzWlRhQUNNQ2JrSW1VUm1FeWo2NE9IVFIvdlRwMXpKWXUxUGYxTlJVYkVuQU9Dc3lyRWVCanJWcXl2VUhVRnhtRUVpa1hoQ1ZGVHo3dU9UekFqV2xTdFRKbWRtWms0R1pNbGRodzV5ckJ5bEI2UjNneG94d0VkR0lwTklNTVpBYXg0K3VSb3R5NW95SlN1VFZVdG1wbGxGczhhcERsblpvRS9mUmxCak1nQkVNNEF0cW5sNnBDWkdHdzFzR1N0Q0hCRVJwYWNKdWRZNHEvNVEzbUdRM1JpQ21wSytnTUFZaWh4NWRxVEdFaE1kRlJXVk1VTXNqbGhIUXpGTWFEaGdZRElQNmZ5OUc0SWJXeDhrQThnd2pLQzBCSUhiRWgwbDN4Y2U3dU16WTUyZERHd0pNMWF4VnNGayszdGFBTHZPZDF1RVlnSjdndHNTSlIvcjQzVDZpTU1OS0FQRjdCS09hOTA5clZ0MTJPL0xrdWo2VmVlSlJEU1ZVTEF4SmpKanJFOHRCekFSS2hMU0pDcG1iTFkybktrRDBkL0RHUXc3aGlXbzdLcU42eUxIQXNRK2tRSk1CQUpzQXBWQm9jOGRhODc3dG4vcWcxTkJoVFJNS0xIUm1PNll5TEVadFQzR1N1d2lvUkNqcWF4TXZWNlJlN3ZIOTgzZEVFR0ZBZ25HdGRFNENwZEZHeW1Yc1ZnWkNodE53QkZncUQwQkhNbkczQzQvZG5kVHUwUWdzWU8zRzl5NXRXY2l6NUpwM1FhRGdpa0FwZE00QmtOdWs1OStLYjI1RXBERTNLQllINXR0aWRiS1pYS1oxaHpyY25Ob0dBb3ltSTh0STMvWjM1SUV6b0gxc2JHeDVuVXhNZEZ5MmVUSisvWnAxek1UYUR6WVptRHExL2VDZnFGRFBmMzZiTE01ZTgyOXFPZ3BNcG1NSlo0Um8rY2swSXkrTnIyaWRVZm9OMW8yTTV1YlJEWUpkenJIZ2lZajlrZklYWHFEUUlMNzJoU3RXMEovMG5OVitabnlxak43QXNUaTlQVDlMSXRid1ZSSjRuRk9qMWJRMytqVU50eXBkUVlFckY2OU9qMUNudTF5NlRsY29ubGQ2RiswYk52TW5DRk9YNzFhek5KYWNuUGQ5ZXJYZ2Y1THg1NXRCL1VSejRoczFteDRyeithK3d3OHZKNDlKSXNDa1FBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUMwQUFBQXRDQU1BQUFBTnhCS29BQUFDOTFCTVZFVUFBQUNabFlQQ3Q2ZS9uWW1lbW9tWmxvVzJyNTdsNDkyOHVMQ3BvcEdibG9PWmxJUFgwOGkvdDZlV2tvQ3Bvby9ZenIrZW1ZbmExY3VzcUpmTXdLeWFsWVVWSWkzbDR0N0p3YkhhMTh6SHdMS1NrSUd3cXBldW1ZZkt0YUFhSmpEajQ5Njl0cVVhS0MrZm00dmw1T0Rkd3F5c3BKVG01dUhDeGIyMnVyek1xWlJRU1VqZzN0WFp1Si9tNXVCWlMwaWFlbW5IdjdDcW9wTGJ1NlhrMzl1TGNtYkh2Ni9rMzlxQVpXRGczZGJrNHQzZDJ0REh2N0M3dGFNYUtERVNJeS9OeHJqRnZhM0R1NnpCdXFxK3RxV21vSkNnbTRzcExUUVVKVExqNE52aTM5alB5YnpMeExhMnJwMFlKaXplM05QYjE4MjRzWjZ3cXBqV3NaZXZwNWFwbzVHSWFGdFhSa1JOUHo1SFBqN2w1Ti9aMWNyVjBzYS91S2R5VlUxSE9UY2hMRFlkS2pNZ0tUQVhKQy9Jd2JIbnhhM2Z1cUc1c3FIYXM1czdOenNrTERFVkp5N1gxTW5TemNIS3c3TGp2NmFkbVlpWWxJS1dkMmg0WGxWdVZFeEFPVG8zTkRjZUp5ekp3clhhdXFDenJKbllxNWVzcFpUTnBZdUFZVnA3VzFEVHpzTHB5TERtd3FyRW9vdVNrSU91algxL2FHRjNWMDFkU2taT1JFTXlNVExrNE5ucXpybnF5N1Rqd3F6UnRKeXpySnlYbFlpeGcyK3FmV3AxVzFSdldsSmdUVXhqVFVoV1FUOHdOamhRT2pmbDR0M3R6N3JPdXFqZHZhVFFxSkdobm8zTW40bTJsSVcra0h1ZWVXdWpkMmVlZFdTWmNHR0ZZMWVBWGxGalVreGFTMGxxVUVoYlFqOHVMelltS0NybHg3SGR3cXZZdktYaHU2UGV0NXZLcnByUnE1U2xub3pGbm9xNm1vZkVtWVhCbFlDQ2dudTBqWGk2aUhhdGhuV3NnVzlwYldoYVdsaHBVazlNVUV4VVJVSmpTVUVSSXlyZjM5dmgzTk8xcjZIWHNwNjJwcHU4bjVPb201T05pSDZqZzNGdGMzQjJlRytEZVc2YmdHeURjR21WYzJTUGJXTm5XVk5kVkZGdVRVVXVMaTg3TVMzeTE4VFUwTVMydGF2cXZLbXFxSnk5cHBlam9aZWRucFdwazRXVWJsNlNaMW8wTzBIU3pML0h1S1hWckkydmw0MmNoSG1pZm15S2QycDFiV2gyYUdOY1gxNXhZMXRGUjBmejRkUEN4OFc5dmJTanBxZkRySm16b3BPdWIyU1NYRlhVTGRvUUFBQUFPWFJTVGxNQUlDRDlmKy9uSUJEbDJycXduNTl3YTJWS1NqQXdJTy92NTkvZng3K29vSUNBZ0VEdjcrL2YzOS9mMzgvUHY3K3ZuNStBY0hCZ01EQTJkbmVCQUFBRjZVbEVRVlJJeDMyVVpWaVRVUmlHUDhYdTd1N3VBdGtHQ0d3b1RHQ3dRRjJ5c1ExMXNqRnd6akdKYld3UzBpVWdxWFFqM1dGTHQ5M2Q3US9QOXdHMjNyL3Y4NXpuUGRlNVh1aDNKbzhkTTJLRW40UEQ0SkVqeDArRy9zdUFRWU9OalkwUEhmTHpLR21xckd3c21UbG13TC9kMmFjQXhzWitqVFZZSmg2UHB6K3N1dXJ4RDMvWUlDT0VVMDFoZUJZT2h3R3crRFVlSGg2RC9oWTgzTnJhK3FpMXRkOXI1M3FnSXJvOUd2c2FqRER6ai9pRlM0NWFBZTQwZGJNd09FdzlIczNBcy9CNEJ2MWhpUU9ZZU9LdjhuZ3JLMHZMUzVhbjNqTEEvZmIyOW1nMG5ZNUdNK2owOUU0SE1MVEQrSi9saVpZbkFCZHUxZUJ4c0FrOE5JUFBwTlBwVEw3WUEzNGtoNFUvNUlGRFRwZ0JMbFNpY1RoN1BKcVBUZGRvZW1nVW1waEd5OENXZU1DUE92aEg5eUZtWmhaMmRuWVh3bGc0ZXhZVHl5T1RVdVZFb2JDTjJOS1NnZzJyOFRNNmEzeG94TEErZWI2ZEhRcm1GaC8wWUtUenlIWHkrd24rY1RIUitVK2V4SFprT0ZjWndmcWd2aDRvbENIQ0hXZlFBOHVqaEtZbUpmaVh4ZVJ6SmJtNUZ4VTlyREJqUk8vdE1ucmZ2aDBJd01ZNTh5aHFUOGN6QVdYRkJJS0V3eEZ3ZlVWTS90V2oxa0FmaVVRYkdCam9JOXgxeHFHeFluSnRpT3BCUUZ3TWdjQ0pZcnR4SkxFYVpyTVZvc1BoNjNWaGJHMXRkV0c3bXhMcW1acDAzNzg0aGt2ZytHUzZ1dVVRZ3AyYkxTMkJiZ1EzbjNFWXh0VDA4T0ViVERSVFE2NEZSVTc3RjhtNEJFS09UeVpid0ZVeW00NVlnblRyNFJBMFNlODdONXdaNlJRU0tTVllSQ3lQa1hLalpia0NkcVlnVjhqM09OS3JUNGJHN2ZwQkdKYmlTVktMblhqaWp2Sm9pVlFtaTcyY0orRW9LTGNzekU3QStsaG8xSUUrSGowNlVLVkpDYTUxNmlGVHdycnJTdk9sTWlVNVBKVkkwSHFEc2pBemc5TTNRS091WHovV3h5V2FVMmRLZUpveU9DV1lSR3FUeVFwS0ZiRmFDcUg3QzBPVW5RV3N6NEttNyszbit1MXFjbldJcDZNNm8rcHpFRG0xS0pmUUhuVHZPYmZRdmNFUWhiS0E5ZUhRbnYxNzlzTUEvYkpMaUNOVnBBb05mWlovT3BSVzdoYmRkZVZka1V4dzBmM3hQaEJ1Y2VLSUZXUnVicjRIQUI5NW1oWklsUk5kNUE4U0t1TFR5RzJjbkdpZmEyeUJhMVRlNDMxOVhhRHQyNEhmZTZJMVhFbWxFdHNTRXdJUzVLSGhaM0xZYmlldlhmUHk5b2swMkFIcllGSm8rbllFNEp0ZlNWTUdVb21KRlFHSkQ2aWg1Q1FwMjlYN3BKZTNxMCtrUHF5RDZrT2dWZHE3QWNpQlhVR0JJcXJMNlFwLy8wUkhHcTJGNiticTQ1UHA3WjBGMjBpWFdkQW9iY0J1YmVTQ1ZwRUxzQVBLNHVMRGFXU0YxRTNneHZiMjhzcUsxQVc2SVFpZkEyMHkyYmtUK0VqOHJsWVhhdExwaXVLQytIQjFUMWRBRVlmRFBublNLenRTVjdjM2ZDeTBWY2ZFeEtUUE4yOFdCUWJlRDRpTGkzY01yNnVRU204S1lEc1NmRSs0Q3dvMUNZS21SdWpvOU9XZnY1b2NCRDVnSWpFMWphb29rc3E0WUU2dnpFOEhEeU8yNFJEd1krZnBBUHM0MElGOUpUa2toT3FpcXFNRnQ1ZkZjS01LdEhKY1hiTnVJemJRUndON3FBMndJeEQ5L0lVT0VzblRVWlVtcG5WOS9WSVdWNXprem83S3UzVFExbFlmRGg4SUFkYlkyT2hFSVBydUF4MHA2dG9nb2lpa21oZ3J2WGxUVU9vdThiMXRZSG9RS1E2aWtYQWJtd2dUdU16dTg2L0lhcEpuWFpkS0pWZXBGQkkzRG9HZzlWUVAyT0JWREpCbzBCem9PaWJBMTlhK291WlJLR0l5VlppWUpIUVhFTndMdEZyMEVWdGZmMzcvNWw0S1Y0ZEhQYmUveGlrTWkzVWlFUlBLaS9PNTdnM0NGMGE3OUV4TkQrcnF6b0Q2R2JySVJnZHcvTno3cXk4MVdEb0Q2K1I1cHR5L29QQ1o0NXNTUFQzRW5nWjY5RE1CTkluUU9kZm9uUEd5RnN0QW8vazhrdEpGMkZwRlM2NzgwR3RQZ0g1aUhJaldicXpIWkx4eUZQTmhQWjNIRXpzNVZWL1NNTzhDMlhZTDlBc1RwcDc3aU1kZ0tJR0J5WlIwSmhQc2VheUdFaFNkbDRIaDN6Q2ROaEg2amFITEg3SXdlSFcxWEJSRUFxbTh0NTNOOXk1ekxuYlc0eXVYZ2M1L3NJQ0ZZZkdTUldmYWxTR2taT1c5UEY5ZjN5ako1ZTc2QmNPZ3Z6RmxMZ3NMOWxSOGcxQXVieS9NbHZobVowVmRYRHNGQXZ6RFgrbENmRjVhR2k5c2lQWE56czVhdkJHVStCL2JOcSticlZXb0tGeXhlczY0U2RCdmZBTXhyOTBQVkxGVDBnQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDMEFBQUF0Q0FNQUFBQU54QktvQUFBQytsQk1WRVVBQUFETnVheloxY3pPdzduWHlieTlsb0RYeDdqT3ZLdk51YXJZeWJ6SXRhV3Jrb1M2cnFLNHBKV25sSWwrYWx6THM2dk9ycHJRd3JTeW9aZk90S0xNdDZiYTBzWGV3YkhSdksydG1ZdGxUa0hjeDdmVXo4WFB0NlNSZzRPcGpIYzFJQlc1cXFFaUdTUFl6OFhVd3JuWHZheThwcEkrUGxMQnNhRTdOVWJmdzdXRVpWS0JhbHBFTWlqVHNwdmYzdGpmeXJ2WDBzbmN4clhWdktuWXRaN09yNWZKbllMV3pNRE53YlRTcnBXdmxZWGV4N2ZVdUtUUHJKTGIzZFRhd3JLMXBKcW5pbmljaG5qZzR0dmN5Ny9PeHI3S3Y3TE91YXJIdWFpOXJxWFN0YUhNc1o3TW80cXBsb3F3ZTFwTklCYmIyZExVeWJ6UXc3ZlJ3TERIdUsvQ3I2QytyWjZ6b0pldW41VElvSWZNbjRhV2gzN0ltWHlPZVc2V1Z6OXRQekZhTUNaVEtoN1J4cnJXeHJqRnZMVEV0S2ZhdXFhem41R2xrb1REbTMvSWxIbkFqbkRBaUdxMWYyZG9NaVBTeThMU3lyN0R1YkhKdmJDK3M2bkl0S1MrcTVqQnFKYk1wNHljaW42cGpYMmppMzNGazNmRmtYR3JmR1M2Z1YrMWMxYXViazF2UnptRFFTNWhNeVpDR1JEVno4VGF5THJHd3JxNnE2QzZxSnZNcUpXN21vcXZsNG5EbjRpZmpZS1BiMTY0ZVZ4MVhWdXJjbHBwVTFhcGNsU2xhbE9MWkZOOVQwQjJTVHBTTnk5eE9pbmJ6OFRReExUZnc3SGN3cTdDdUt6Y3Y2ckNzNlRFckpxN3A1TzRvcERQcVkrdW00Nmprb3VTZm5TZGZtekJmMnVaYmwxRVFWS1hZRXVwV2tlS1ZrTjdQekZoT2k4dEVRazJEd2plMk0zaDBzYkx2YmZhdnE3SnZhM1ZyNWFwbVpQWW80NkJkb1hTb1lTcmo0SzlrWGRuWW5lYWdIVjZabkZTVkcrMmhteVllMnlFYm1xSGIyUlhUVnFDWEUyaFlrZVVXMFo4VjBWMFVrS2xVVUNHVFRwY1FEZU1TVFJITENkY0p4eERJeHJrNU5yTmxJQ3JpWFBHaUhHNmoyMlRkMmkrZldHa2RGMStaMXViWjFBNU1EMStTVFZjSUJUZDFNdWltcVd6bUkrMGxINndrbnloaDNSdVkzQjNabXAwWUdXN2gyS2JhbGlOWDA1bFRFQ1dUVHVDTFNOdkxCMnVwYXk5b3BqWXRKU2FqWlRFcDQrQmJIWTJIaHZIeWMyWGhvbWhnR2lKWUdDUGExUWNBd2xFQUFBQUxuUlNUbE1BSVA3OWUvMmlTRERDY0NDM24zZ2dFT1hmMzRCZjcrL3Y3Ky9mMTcrZ1NERHY3OS9mMzkvZno4K3ZuNENBVlcyMEJBQUFCcE5KUkVGVVNNZDlsWFZZVTFFWWh5ZGhkM2QzVEZ4dmJMSk5HR3dzQkphNE1jWVk2NEYwZDNlRG9DQ0NnQ0pTZGljZ0lSSjJkM2ZYODNnRzJPajczUC91ZTMvUGQ3NTd6bmNnZnpKd2NQOUJvKzNNQ2lZTVdtdzBFUEpmK2hrWjJrUkxQUk5KVzFKT3BaRHdKbFA2OS91M095Z2ZqWTcyQm1hdU9DeWl4akVGQjRkemh2WHRqelN5azBxbGxvbW53bktmUG4xU1VaR2RIZGFha3VETkxScmJWL0FvYXdEU3VDSWlJamMzVEN6T2FRbkxhY25KOXJQRTJNNzlLMzdBcUx2M2NMaUU4eFUzZEhtNkNFZEhSNG5FVVp5VGU2cUNaT3RrTzNIQTcvTGdBcGY0VFY3ZVc4TEV6VUdWZWF6SXVraVdwRk9uazBodVBEM0U4WXJ6R3ZkYk1zeXNBRzVYdkVVUzJScnZZbHlsNjd4NVUxZmQxaFlld1dKRlpOOGxuYitiTk9PWG1pZkFZREF6cVdlTE9HeVRpVG5lK0ZwbDViV3NvQlBxOUdwUWtiZ2lLT2pFWWVNaFAreDV1MkV3MDJnYnoxYXgzODZkK1RDb0VtVlBwOU0zRTRSTUhjdFJrbk9sa25rUk5XcGtyMnkwZTdlcHFXazAyanNpekdUblRuUFlSaVFTaWtEZ2FYamt3YXpJTHBiNFNlYUpBQUZoYkc4ZEczYWJtWnFZbU9kN081NDBNVGZac0JHUEpCQ2dVUDBuZXc5SFJIYlZwQWVybFFJc3RLZVAvYzNnM2ZaT1Qwa0N6QXlPaDJJSlBwdXhoTTJFdlZDc0lMZnVRNDFXRXlpa1k2SFR1cU5OZSsxOHk2NkVBamllUm9OaXNRZ1hCQWhIRWdRNXRiVTFtZ3NxbE05ZUdxMmZQdG9VWmdhTEJyYTVlVmNDSEY1Z2FycWhZT1BHalM0dWVHdWtqNkNxdGpaWEhTaTAzd3lsNGZXVlQ0RjEyMEMzZVVhQ3c0QU1UQVIwTHhhQlFCQjhzbXRyczFVcUZKMEE3SWxnUDF2cXNkTlQySkN5WWJlMXdJZE9Sd25WMm12WDByVjB3dms2eVlseklCb0xwY0hoQXlHRE9SeVpyRWhtQlpCNVo2T3UzTWlyU2cxVVoxWGY3TXhyYjlKZzMwVldYdDU2VGhDUHRMYW0wUVpEK3J1N1l3emRLUlFLQm9PeFNqbDhwZHF4czEwVDJCUitNN0t1czEzckE4M0x1aENRVk96dHZRa3dEREpveFFvRDhCanMyTEZqOVE2Y1Q5V05PdGJMaTIrWTdTL3oyckpTVmZHSTlPMWJCY1ZlWGw1Y0xvZXpFR0t3V3MveUhxendkSzFEdUFNS29jcDBhRzRLQ2JRblFBK0duRU55UEQydHJQYTRZMFpEVnVycGNWY3Qzd0dISHRacXoyRmQ3QU5VS05SQmUvdk5CT1grZUtzOWxuc29HRnNuRzV0ZWUxVTNaOCt1eHlQQWI0R2JZUVBVKzdGSUxKMHVpTGYyTEFScld1L2s1T1lhQlFGbGRHZjMyRFp3eEJ1VVlJTUxZcjgyV0dodjc2TlV4cGRZN2NFWWdtQWdSMEdtV3JpQ1pkcTRSYTBBYTcwVmpkOTdVSHR3LzRVTFcxTkRRalJxWVFBcUNiZUhvcGZSNktpbzhaQ3BiSGUzS0VOM3R4VUdxdzBNVnBqVGxCZlZBZW5ibno4UHVSd2F5bVNxQTVMOHk5aXhIckpDTnB0aU93alNuOHV4ZGFXNG8wRVRieGtZNUZ0ZmZLd1NwcDgrSFpxYUdob2F6SHg4SWttVVJrMFdsYTlaczhhWE94UXl2UHkxTGRxOXFKVEI1OG41eExoM3FNQkErNjNiVDU4R2pRd0pabVlHSmZES0dETGZOYjdKeWVUaXdaQ1pyVjVTTklienJLdGozYnAxWjg1c1FRVm1WVlcvZVBIaWVmcmx5Nm1oRGsvdTdHTlFMZmpsSUpwY0F1Ymk1Qkk3TndyM1djZTZNM3E3MVZpSjJnK3l0Mi9WQkFlSE9sU2R1c01qc2kwOGtoVU1oZjk4c0dPWEZxOUhZenl2WGhVZEpaUDkvVW4za3BRQm10RHRJYW5CbVV5SHRwb0dSV25jTGtNMFQzVHkwcVZod0I3aHRSNjkzdklTbWNFb2xSUGw4dnZuallVYVpoUHpjWENtUXh0cm5hZ1VGOGVKTFVReldscStkZytKYVZKZ24vUXZWZmd5K01raVgvSTlKVXFvVW1reW04V1JIUm0rdUVPSkNwNno2eTJyazB0Nnpyd04yc21PbkVoVWxDZno2elBLaUNXZm1TRk5XUTU1ckxvUGFXbGtFbWtMcmdoalliRzJySGYrR0xrNVVjZzhLcEhQSjlhbjhZczhpcTgwdDRmcldLeU9qSXdHdi90K3BKSTRObnNYY2ZqM3lUMG5YNnFJZFM0czlLRFdYK1Z6UFdUV1FaWGhMM1UxR1k4eWp0NG4rWkVUNDRpbG9qRS81K0I0S1lNYTR3ellWOFpqOE5idVM4b01ENjlPTy9hbzNwL2tkNGdzbDNIbGswYjhNbU1wQ285ZHU1eGpYQzEyVWN0RnI0NGxCRFhuZkRuMlBzMGZSL0k3U282bHhoYjlOc0hIS2JpODEyeFhzQS9YaXNwdkgyazRISFR5L2JHSGFZZHdPSnpJajB1a2pvUDh4b3hKUi8xall5eGlZcWkrdDI4M2R1Q1NQeDA0OE9qb0lWeUovT29kM3F3QmY5MDdvekdHRmdBbjIxZEhHcTgvYkd3OGNPQmhZaUl4VHQ3QUdOUFh0V2JrN0x3V0VQUHh3SU1IRDdaZDM1WlJUNDFseStTWGhvK0U5TVdRNldzQWEyUGV2ajEyNVBpMmJkZkxxT3g5L0tIZHplamJIemJHdzlWdFgrTVJZRi9mNWtHY3ZBeTQvMk9nMGRDaHM0OGZQNzVnMGZUaE0vOTgrUTM5SHRPam5lQkw4Z0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQzBBQUFBdENBTUFBQUFOeEJLb0FBQURBRkJNVkVVQUFBQVREZ3R3UkM1aFJ6eFFNaUQ0OE9nK015NVZOU2dOREFvbklCb0xDQVZyVTBZREF3TU9EQXNJQ0FZTkNRc3JJeDl2VjA0YUZoSUlCZ2NXRFFuNjh1MG5IaHY4K2ZRRkFnSlpOeVZITGlYNzl1b0VBZ0ZZTWlNTkN3ZzlKeDU0YUdRZ0VBcEhNeWhJTUNrUUNRbklnV0VlR2hvT0NndVFpWUJYU2thTFYwRjlTak5pT2lnWkdCTC85K3krZkZqLzl1eWxaVWtZRUJELysvSDkrZmYvOXV1WlhVUlFTRkQvOU9xZlpVb0JBQUFFQXdNSUJnWVFEZzBNQ2dqLzkrMzc4dWppbjMwcklSd2VGaE13SlNBdEdoUDg5ZW5tbzRMcHBIdS9qRy9kbEdmT2ptUWlHaFhibm92Wm5vUGFsM25XbDIrYmJsZ2VFdzBZRFFubXFZdk5tWW5ycVlmanBvZmdvWVhtb0h6Zm0zcm1vWGU1aDIzVmtHV3dlR0RHaUZ4WVNFSkFLU0V1SGhzbkhSa1ZFeEg5L3Zyc3BZTERqWEhEaEcvTGoyeTZlVlRNZzFQRmZrMWRUa2l4YVRwOFREZEZMU0VTQ3dmOStQUDU5T3o4OE9Mbm9velpwSXJXbW9mZ200WFBtSUhHazNqU2tIalVtSFhrbm5MSWtYTGdtV3JGaldtMmdHQ2ljMTU2WWx1emMxaXBkRmVwYkVxUVcwZUZXVWEwYmorcFp6OU5LeDR4SFJQNTV0ZlNvSS9ucDRMTWszM0Vpbm5MbG5UUG1IUGhtbkhPa1hITWlGKytmMTI3ZDBsNlYwaFFRajF6U3prNUpSNzI0TXp1cXBEZHFZN2huNHZLa1lqUm5vZkdsMy9UbVg3Y25IWGFqMnUzZ1dtdmdHblRsV2pDaG1HWmFGYkhobEdkWkVtalpFWmxRamRWUHpaRk9ESTlNaXhqT3lzMUt5WmFOU00zSUJyZXY2dnJzNTNpcVpTZWtJbkZrSC9abm51K2hYS3JlMlRSaDJPbmRtUFZpV0hFaEZ2UWlGcGxWMWlsWjFlVFpWQzBiVXVIWGt1ZFhqNmtZRFZyUENsR0x5bERKQmdtRmczczV0L3UyTDZ0cEo3WHJwM3pyNVhhbzVQWGtvTytqMy9PblhtSGVIVE1oVzY4ZW1WeFlWbWdhMHhyVUVpQ1VUWk5PVEpiT3lqNjdkM2UwOGZreWJ2enI0cTNpWGF5ZW1yRmVXbStoR2lYY1daMFpHWmZVVTlsVERxVVdUV05XRFZ6UENmdjROZnczcy9Qd0xiQ3RLWGJ1WnJVcDVhMG9KSFVpb09aaVhiU2tYQ0xiR1d5YVdYT2dXTEFla203ckpXVVhGSXkzOFNUQUFBQU9uUlNUbE1BSVAwZy9mem5kM0JFTU8vdjM4Ky91cCtBZ0Y4Zzc5L2YxN2Vnb0orZmdGaFFNQkFRNysvdjM5L2YzOS9mdjcrdnI1K0FmM0J3UURBd2VYd1E5QUFBQmw1SlJFRlVTTWQ5MVdWWVUxRWNCdkFyWW5kM2QzZnQzazNXckl0dGJMSVJZMk5zd0FqcDd1NVFCR2tCVVVBa2JHa0VFZXp1N3U3MmJMUHIvWHArei92OHo3bjNuZ3Y5bnNrOXhvMmE4ekJFTlczQm91V3JvUCttYXc4RGcwZGxLcHFFbmJKWlFsT0Z6UjdVOVorMnkyaUQ4TGF3ZGJRVTM1UVVrUWhyYXFvc2ZWdzk3dTkreW9UcUMrdlNhaHVwS1d2V3JERVdLWVFtdTl3OHBaWFZWM3I4YlloUmhoRWw1bWxwOVZSZlkyUEFqWVVtSm01eCtVR1ZsZFZ6LzZqdlpaaVJjV0ZkUTFwaG9iOHZOdDU0RFZhTUpac3ltWGw3V2g5RVgrblQ2MWM4dERQR1VGT21hcUJScWY2KzJrR3daRElZbkptWFVIekYwZElKR2Zvem5rVGtFVHNNMmc2WVN5UlVmMzlmWDVFb1BsNGdGQXFaZVo3RjVUVTRHSVg2cVgxWUg2SlRaN1RtWVZRRERXZ3dONWxNRmdwTVRFeXkzVHlMTWh6UktCU3FiNWZ2ZW9SOURJOW9hS0JwYTBocmxJQmRDZ1R4WUk5Q1pzRnBDc1hHd0JFQkd1NDM5U3RlS2ovUDdTUWFSaitPMnFwVzI2a0NLTkxBSkxHcm03TDBrcVlsUE5RQWh3SkIwSU8vbnQxaCtUV3VGVGV6bzAydC9uaXdMYkM0cFZSNjUyMk9lMkNvV1ZLU01qUUREK3UwdFg2V1FkZmtjbnNaenpJNlJHMTNVR1dibWhwd3A4Z0dLMkFFQm5FNHQ2Um02UmlkeHFBSDZLclBQNVBMZC9PNGx0RmhXKzArbG9TRXRhWnZDUTFneHpPbGRlZnRneVBNT0loV3d4ZzB1b3UydXVtb3MveHdURXhIUjlUV3JUVHpzdkQwZDRraDdGcXhCOFVyTHo4LzcrWE5HcFEyUUE4QmVsYlRiaGY1dGNmVjFZWUg3YmI2czlsc3BtY3F1N0EreGRYTHE2Q2dJSHZYSGt1VWZwdm9HZUI5dHJoLzVvbjgzSUd3UzVWUlFJTkh6aExIRzBzYXFZSUVUMlpXMXM2ZC9FUGZOTG8zMUdPRGZmQXpaK1ZaMnFQMlNMdEdxckZBb1ZBSXlGUjF2U0xIMHpUcitNNmRjZHUrYW10MFQyajBCZ3Y3M1UrOGE5bVJEeVBYTjI1ZW83aHhJMHRCcnE4dHpOcVY0TzE2L1BqT3VCL2Q0NkdCRlJZV1RhK1VoYXoxRHBHUmFza214WTNqQXJGcDdlMFE3MzNOZnQ2dXJyczh2M2RiOTRlR2J3Zmw1NHZGTExXRGc0TWRqUzBTWkhtenlMYktjOUpicDNJVGxTZVpYdVd3N2t5czZmUjVFTDdxc29YOS9lQVBIOVFPa1E1MmFSSXhsbldXeGRxYjRIMHVNWmUvYjUrU1NVbUhZWjJXeWVnUUdxY3R2M2l1bmdwR1dXOU8yeVJPOWZObU1VMU5QTno1dVlsN0Vndk10c0JvcmhPTXdlTndkQWpCRXlvQWIwMUxvV2sxZXhOMmI3THQyYk8zYjc5dmZ2ODVQTEhBemF2R21sNlRTZVRoY1FRWk5OS0pYbFd4emNJaWcxTWE1YURWOGFiTnpVcitzUjNIZHV3NFZlZWU3WFlLdzhWWk9sb1N1VGpDY0tpL0U1ZXcvZksyRFJXTzRXRlI2MHRzOXdwTnhENkYzdnlYeC9pNXVTZmNzdmwzTVR3WjBBUWNqakFRR291aFcyVmFIcXJZN25qQi9PQ0JkYlpKYnFZS2tZaDE4dVRyMTdseGNZeTgvSXNZREZxV1NTRGdDRUQzUlBBeUt3S2hpa0I4Ukl1S1VnVWtKKzhsazBYQ1hReDNkNGI3aWJnOWxCb0VjTHdNaDhQSmVrSzlZVFNlanVmaDhieEw1dHJ5QU50VUZwYU05V0NjZEdjd1R2REJpU0FJQWc3YnlvcHUzUnVDK3NJWURBSWpHTVRBM0Qrc0RNeGk2N01YaS9YdzhNaHh6VDZSdno4VGhyV3JlS0Q3UVJBMEJOWUZnN1EzU0dobFphcVNrZ0NmVFZnUDE1eWNIQWIvWnFWKzBRbHZSZVNPQjdxTFhpUGJPWGFiTjYwckxRMEpEQXl3WlhtNE1oanVDVGNqRUJTTWdubWRuVEV4Ukx6dXd4eWc1MjllcUtqSnAwdkN3aStFU2dNcG5neitubjIzd3R0aG9KMklIZEdPTmNURitvc1kwWFUvMzdoajgyWWZuNERBMEMxYk9FRkJkVUZCTFpwTHJTZ1V3TkdWN2VXSHJIVFZZSExBVVZWSGpzUnV6QVk4aVdLMm44TnBDVytOaUdqaFJNQUlMeWE2WGFNcFB6UUIwbWZxU0FUajlPYkl4dGkxYTE4ays1eE9zZ0cranNQWkVsUVhHa0cwdkZ5ZW9kRmtQT2orNDZmUUYxOTFaQ1BRUmk2eHgveVNrLzBvWnNYNzl4Y1hGWVZHYkxzWS9PN3UzZlQwUGwxL3VyM1JGVTgzeGw0MU1scExJajJOODB2MXM2RlF6TXoyRllXa0EzM216TDNnNEltLzNOKzg1N0d4VjBFM2llVGljajNmTDhuUEJrUWFVbjU1dy8xNzk1cWFBUDQ1azdvZkJ0aklpR1FFc3ZiNjZiZXBYbDUzbXFYQlZqRXl3dmJ1Sy83NG9jMGthWFczYnQyTVZxOTJKdTN3Q2tvb2twNTZaWGdsazk2OUMvUm5scEJJb0p1MEdzVFoyZmxvWm9KTjR2VlBEeHpSZzZkQWY4dXdNVnFxMXk1bnJMbTd1eDNkelIyZ0svNkhINkhuTG9lcjBHZ0VOMzB3c1AvTHltVUw1M2RiN1hLMFgvK3hQWHYvdnZnRkl4bmo0dGdlcThnQUFBQUFTVVZPUks1Q1lJST1cIiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBCYXNlQWNjb3JkaW9uIH0gZnJvbSAnLi9iYXNlLWFjY29yZGlvbic7XHJcbmltcG9ydCBhY2NvcmRpb25JY29uQ2xvc2UgZnJvbSAnYXNzZXRzL2FjY29yZGlvbi1hcnJvdy5zdmcnO1xyXG5pbXBvcnQgYWNjb3JkaW9uSWNvbk9wZW4gZnJvbSAnYXNzZXRzL2FjY29yZGlvbi1hcnJvdy1lLnN2Zyc7XHJcbmltcG9ydCB7XHJcbiAgQWNjb3JkaW9uQnV0dG9uLFxyXG4gIEFjY29yZGlvbkl0ZW0sXHJcbiAgQWNjb3JkaW9uQ29udGVudHMsXHJcbiAgc2luZ2xlLFxyXG4gIHByZXZlbnRDbG9zZSxcclxuICBjb21iaW5lUmVkdWNlcnMsXHJcbn0gZnJvbSAnLi9zaGFyZWQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWNjb3JkaW9uKHsgaXRlbXMsIC4uLnByb3BzIH0pIHtcclxuICBjb25zdCBvcGVuSWNvbiA9IDxJbWFnZSBzcmM9e2FjY29yZGlvbkljb25PcGVufSBhbHQ9XCJvcGVuIGljb25cIiAvPjtcclxuICBjb25zdCBjbG9zZUljb24gPSA8SW1hZ2Ugc3JjPXthY2NvcmRpb25JY29uQ2xvc2V9IGFsdD1cImNsb3NlIGljb25cIiAvPjtcclxuICByZXR1cm4gKFxyXG4gICAgPEJhc2VBY2NvcmRpb25cclxuICAgICAgc3RhdGVSZWR1Y2VyPXtjb21iaW5lUmVkdWNlcnMoc2luZ2xlLCBwcmV2ZW50Q2xvc2UpfVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICA+XHJcbiAgICAgIHsoeyBvcGVuSW5kZXhlcywgaGFuZGxlSXRlbUNsaWNrIH0pID0+IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW1cclxuICAgICAgICAgICAgICBrZXk9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgaXNPcGVuPXtvcGVuSW5kZXhlcy5pbmNsdWRlcyhpbmRleCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8QWNjb3JkaW9uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUl0ZW1DbGljayhpbmRleCl9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgIHtvcGVuSW5kZXhlcy5pbmNsdWRlcyhpbmRleCkgPyBvcGVuSWNvbiA6IGNsb3NlSWNvbn1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgIDwvQWNjb3JkaW9uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxBY2NvcmRpb25Db250ZW50cyBpc09wZW49e29wZW5JbmRleGVzLmluY2x1ZGVzKGluZGV4KX0+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS5jb250ZW50c31cclxuICAgICAgICAgICAgICA8L0FjY29yZGlvbkNvbnRlbnRzPlxyXG4gICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW0+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvQmFzZUFjY29yZGlvbj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBCYXNlQWNjb3JkaW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgc3RhdGVSZWR1Y2VyOiAoc3RhdGUsIGNoYW5nZXMpID0+IGNoYW5nZXMsXHJcbiAgICBvblN0YXRlQ2hhbmdlOiAoKSA9PiB7fSxcclxuICB9O1xyXG4gIHN0YXRlID0geyBvcGVuSW5kZXhlczogWzBdIH07XHJcbiAgZ2V0U3RhdGUoc3RhdGUgPSB0aGlzLnN0YXRlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBvcGVuSW5kZXhlczpcclxuICAgICAgICB0aGlzLnByb3BzLm9wZW5JbmRleGVzID09PSB1bmRlZmluZWRcclxuICAgICAgICAgID8gc3RhdGUub3BlbkluZGV4ZXNcclxuICAgICAgICAgIDogdGhpcy5wcm9wcy5vcGVuSW5kZXhlcyxcclxuICAgIH07XHJcbiAgfVxyXG4gIGludGVybmFsU2V0U3RhdGUoY2hhbmdlcywgY2FsbGJhY2sgPSAoKSA9PiB7fSkge1xyXG4gICAgbGV0IGFsbENoYW5nZXM7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAoc3RhdGUpID0+IHtcclxuICAgICAgICBjb25zdCBhY3R1YWxTdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpO1xyXG4gICAgICAgIGNvbnN0IGNoYW5nZXNPYmplY3QgPVxyXG4gICAgICAgICAgdHlwZW9mIGNoYW5nZXMgPT09ICdmdW5jdGlvbicgPyBjaGFuZ2VzKGFjdHVhbFN0YXRlKSA6IGNoYW5nZXM7XHJcbiAgICAgICAgYWxsQ2hhbmdlcyA9IHRoaXMucHJvcHMuc3RhdGVSZWR1Y2VyKGFjdHVhbFN0YXRlLCBjaGFuZ2VzT2JqZWN0KTtcclxuICAgICAgICByZXR1cm4gYWxsQ2hhbmdlcztcclxuICAgICAgfSxcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMub25TdGF0ZUNoYW5nZShhbGxDaGFuZ2VzKTtcclxuICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuICBoYW5kbGVJdGVtQ2xpY2sgPSAoaW5kZXgpID0+IHtcclxuICAgIHRoaXMuaW50ZXJuYWxTZXRTdGF0ZSgoc3RhdGUpID0+IHtcclxuICAgICAgY29uc3QgY2xvc2luZyA9IHN0YXRlLm9wZW5JbmRleGVzLmluY2x1ZGVzKGluZGV4KTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBjbG9zaW5nID8gJ2Nsb3NpbmcnIDogJ29wZW5pbmcnLFxyXG4gICAgICAgIG9wZW5JbmRleGVzOiBjbG9zaW5nXHJcbiAgICAgICAgICA/IHN0YXRlLm9wZW5JbmRleGVzLmZpbHRlcigoaSkgPT4gaSAhPT0gaW5kZXgpXHJcbiAgICAgICAgICA6IFsuLi5zdGF0ZS5vcGVuSW5kZXhlcywgaW5kZXhdLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZygnY2xpY2tlZCcpO1xyXG4gIH07XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4oe1xyXG4gICAgICBvcGVuSW5kZXhlczogdGhpcy5nZXRTdGF0ZSgpLm9wZW5JbmRleGVzLFxyXG4gICAgICBoYW5kbGVJdGVtQ2xpY2s6IHRoaXMuaGFuZGxlSXRlbUNsaWNrLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBCYXNlQWNjb3JkaW9uIH07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFjY29yZGlvbkJ1dHRvbiA9ICh7IGNoaWxkcmVuLCAuLi5yZXN0IH0pID0+IChcclxuICA8ZGl2XHJcbiAgICBjc3M9e3tcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgbGV0dGVyU3BhY2luZzogJy0wLjJweCcsXHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICBmb250U2l6ZTogJzE3cHgnLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjUsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICc1MDAnLFxyXG4gICAgICBib3JkZXI6ICdub25lJyxcclxuICAgICAgcGFkZGluZ1RvcDogJzEwcHgnLFxyXG4gICAgICBwYWRkaW5nQm90dG9tOiAnMTBweCcsXHJcbiAgICAgIHBhZGRpbmdMZWZ0OiAnMTVweCcsXHJcbiAgICAgIHBhZGRpbmdSaWdodDogJzMwcHgnLFxyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgY29sb3I6ICcjMEYyMTM3JyxcclxuICAgICAgJ0BtZWRpYShtaW4td2lkdGg6IDc2OHB4KSc6IHtcclxuICAgICAgICBwYWRkaW5nTGVmdDogJzMwcHgnLFxyXG4gICAgICAgIHBhZGRpbmdSaWdodDogJzMwcHgnLFxyXG4gICAgICAgIHBhZGRpbmdUb3A6ICcyMHB4JyxcclxuICAgICAgICBwYWRkaW5nQm90dG9tOiAnMjBweCcsXHJcbiAgICAgICAgZm9udFNpemU6ICcxNXB4JyxcclxuICAgICAgfSxcclxuXHJcbiAgICAgICc6Zm9jdXMnOiB7XHJcbiAgICAgICAgb3V0bGluZTogJ25vbmUnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC40KScsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNwYW46IHtcclxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICB0b3A6ICc1MCUnLFxyXG4gICAgICAgIHJpZ2h0OiAnMjBweCcsXHJcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKScsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gICAgICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgJ0BtZWRpYShtaW4td2lkdGg6IDc2OHB4KSc6IHtcclxuICAgICAgICAgIHJpZ2h0OiAnMzBweCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbWc6IHtcclxuICAgICAgICAgIHdpZHRoOiAnN3B4JyxcclxuICAgICAgICAgICdAbWVkaWEobWluLXdpZHRoOiA3NjhweCknOiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAnYXV0bycsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9fVxyXG4gICAgey4uLnJlc3R9XHJcbiAgPlxyXG4gICAge2NoaWxkcmVufVxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuY29uc3QgdmFyaWFudHMgPSB7XHJcbiAgb3Blbjoge1xyXG4gICAgLy8gbWF4SGVpZ2h0OiAyMDAsXHJcbiAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICAgIG1hcmdpbkJvdHRvbTogMTAsXHJcbiAgICAnQG1lZGlhKG1pbi13aWR0aDogNzY4cHgpJzoge1xyXG4gICAgICBtYXJnaW5Cb3R0b206IDMwLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNsb3NlZDogeyBoZWlnaHQ6IDAsIG1hcmdpblRvcDogMCwgbWFyZ2luQm90dG9tOiAwIH0sXHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiBBY2NvcmRpb25Db250ZW50cyh7IGlzT3BlbiwgLi4ucHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bW90aW9uLmRpdlxyXG4gICAgICBpbml0aWFsPVwiY2xvc2VkXCJcclxuICAgICAgYW5pbWF0ZT17aXNPcGVuID8gJ29wZW4nIDogJ2Nsb3NlZCd9XHJcbiAgICAgIHZhcmlhbnRzPXt2YXJpYW50c31cclxuICAgICAgY3NzPXt7XHJcbiAgICAgICAgb3ZlcmZsb3dZOiAnaGlkZGVuJyxcclxuICAgICAgICBmb250U2l6ZTogMTUsXHJcbiAgICAgICAgcGFkZGluZzogJzAgMTVweCcsXHJcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiAnNDBweCcsXHJcbiAgICAgICAgbGluZUhlaWdodDogJzMwcHgnLFxyXG4gICAgICAgIGNvbG9yOiAnIzM0M0Q0OCcsXHJcbiAgICAgICAgJ0BtZWRpYShtaW4td2lkdGg6IDc2OHB4KSc6IHtcclxuICAgICAgICAgIHBhZGRpbmc6ICcwIDMwcHgnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH19XHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFjY29yZGlvbkl0ZW0gPSAoeyBpc09wZW4sIGNoaWxkcmVuLCAuLi5yZXN0IH0pID0+IChcclxuICA8ZGl2XHJcbiAgICBjc3M9e3tcclxuICAgICAgYm9yZGVyUmFkaXVzOiA1LFxyXG4gICAgICBtYXJnaW5Cb3R0b206IDEwLFxyXG4gICAgICBib3JkZXI6ICcxcHggc29saWQgI0VERUZGMicsXHJcbiAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIH19XHJcbiAgICB7Li4ucmVzdH1cclxuICA+XHJcbiAgICB7Y2hpbGRyZW59XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgcHJldmVudENsb3NlID0gKHN0YXRlLCBjaGFuZ2VzKSA9PlxyXG4gIGNoYW5nZXMudHlwZSA9PT0gJ2Nsb3NpbmcnICYmIHN0YXRlLm9wZW5JbmRleGVzLmxlbmd0aCA8IDJcclxuICAgID8geyAuLi5jaGFuZ2VzLCBvcGVuSW5kZXhlczogc3RhdGUub3BlbkluZGV4ZXMgfVxyXG4gICAgOiBjaGFuZ2VzO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpbmdsZSA9IChzdGF0ZSwgY2hhbmdlcykgPT5cclxuICBjaGFuZ2VzLnR5cGUgPT09ICdvcGVuaW5nJ1xyXG4gICAgPyB7IC4uLmNoYW5nZXMsIG9wZW5JbmRleGVzOiBjaGFuZ2VzLm9wZW5JbmRleGVzLnNsaWNlKC0xKSB9XHJcbiAgICA6IGNoYW5nZXM7XHJcblxyXG5leHBvcnQgY29uc3QgY29tYmluZVJlZHVjZXJzID0gKC4uLnJlZHVjZXJzKSA9PiAoc3RhdGUsIGNoYW5nZXMpID0+XHJcbiAgcmVkdWNlcnMucmVkdWNlKChhY2MsIHJlZHVjZXIpID0+IHJlZHVjZXIoc3RhdGUsIGFjYyksIGNoYW5nZXMpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb3gsIFRleHQsIEhlYWRpbmcgfSBmcm9tICd0aGVtZS11aSc7XHJcblxyXG5jb25zdCBCbG9ja1RpdGxlID0gKHsgdGl0bGUsIHRleHQgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHN4PXtzdHlsZXMuYmxvY2tUaXRsZX0gY2xhc3NOYW1lPVwiYmxvY2tUaXRsZVwiPlxyXG4gICAgICA8SGVhZGluZyBhcz1cImgzXCI+e3RpdGxlfTwvSGVhZGluZz5cclxuICAgICAgPFRleHQgYXM9XCJwXCI+e3RleHR9PC9UZXh0PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2NrVGl0bGU7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgYmxvY2tUaXRsZToge1xyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIG1iOiBbJzYwcHgnLCBudWxsLCBudWxsLCBudWxsLCAnNjBweCcsIG51bGwsICc4MHB4J10sXHJcbiAgICBoMzoge1xyXG4gICAgICBjb2xvcjogJyMwRjIxMzcnLFxyXG4gICAgICBmb250U2l6ZTogWycyM3B4JywgbnVsbCwgbnVsbCwgJzMwcHgnXSxcclxuICAgICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLTEuNXB4JyxcclxuICAgICAgbGluZUhlaWdodDogMSxcclxuICAgICAgbWI6ICcyMHB4JyxcclxuICAgIH0sXHJcbiAgICBwOiB7XHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEsXHJcbiAgICAgIGZvbnRTaXplOiAnMThweCcsXHJcbiAgICAgIGNvbG9yOiAnIzg1OEI5MScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCwgVGV4dCwgSGVhZGluZywgSW1hZ2UgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi9saW5rJztcclxuXHJcbmltcG9ydCBhcnJvd0FuZ2xlIGZyb20gJy4uLy4uL2Fzc2V0cy9hcnJvdy1hbmdsZS5zdmcnO1xyXG5cclxuY29uc3QgQmxvZ0NhcmQgPSAoeyBpbWFnZSwgdGl0bGUsIGRlc2NyaXB0aW9uLCBwYXRoLCBsaW5rTGFiZWwgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICAgIHN4PXtzdHlsZXMuYmxvZ0NhcmR9XHJcbiAgICAgIGNsYXNzTmFtZT17YGJsb2dDYXJkICR7aW1hZ2UgPT09IG51bGwgPyAnbm9UaHVtYiAnIDogJyAnfSAke1xyXG4gICAgICAgIGRlc2NyaXB0aW9uID09PSBudWxsID8gJ25vRGVzY3JpcHRpb24gICcgOiAnJ1xyXG4gICAgICB9ICR7bGlua0xhYmVsID09PSBudWxsID8gJ25vTGFiZWwgJyA6ICcnfWB9XHJcbiAgICA+XHJcbiAgICAgIHtpbWFnZSAhPT0gbnVsbCAmJiAoXHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmltYWdlfT5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlfSBhbHQ9e3RpdGxlfSAvPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICApfVxyXG5cclxuICAgICAgPEJveCBzeD17c3R5bGVzLmNvbnRlbnR9IGNsYXNzTmFtZT1cImJsb2dDb250ZW50XCI+XHJcbiAgICAgICAgPEhlYWRpbmcgYXM9XCJoM1wiPlxyXG4gICAgICAgICAgPExpbmsgcGF0aD17cGF0aH0+e3RpdGxlfTwvTGluaz5cclxuICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAge2Rlc2NyaXB0aW9uICE9PSBudWxsICYmIDxUZXh0IGFzPVwicFwiPntkZXNjcmlwdGlvbn08L1RleHQ+fVxyXG4gICAgICAgIHtsaW5rTGFiZWwgIT09IG51bGwgJiYgKFxyXG4gICAgICAgICAgPExpbmsgc3g9e3N0eWxlcy5saW5rTGFiZWx9IHBhdGg9e3BhdGh9PlxyXG4gICAgICAgICAgICB7bGlua0xhYmVsfSA8SW1hZ2Ugc3JjPXthcnJvd0FuZ2xlfSBhbHQ9XCJhbmdsZSBpY29uXCIgLz5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApfVxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9nQ2FyZDtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBibG9nQ2FyZDoge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICBtYjogMzAsXHJcbiAgICBteDogMTUsXHJcbiAgICB3aWR0aDogW1xyXG4gICAgICAnY2FsYygxMDAlIC0gMzBweCknLFxyXG4gICAgICAnY2FsYygxMDAlIC0gMzBweCknLFxyXG4gICAgICAnY2FsYyg1MCUgLSAzMHB4KScsXHJcbiAgICAgICdjYWxjKDUwJSAtIDMwcHgpJyxcclxuICAgICAgJ2NhbGMoMzMuMzMzMyUgLSAzMHB4KScsXHJcbiAgICBdLFxyXG4gICAgJyYubm9UaHVtYic6IHtcclxuICAgICAgcDogJzI1cHgnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjBGMEY0JyxcclxuICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgaDM6IHtcclxuICAgICAgICBmb250U2l6ZTogJzIwcHgnLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6IDEuNzUsXHJcbiAgICAgICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgICAgIG06IDAsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgJyYubm9EZXNjcmlwdGlvbjpub3QoLm5vVGh1bWIpJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgaW1nOiB7XHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgfSxcclxuICAgICAgJy5ibG9nQ29udGVudCc6IHtcclxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgbGVmdDogMCxcclxuICAgICAgICByaWdodDogMCxcclxuICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOlxyXG4gICAgICAgICAgJ2xpbmVhci1ncmFkaWVudCgxODAuMDZkZWcsIHJnYmEoMCwgMCwgMCwgMCkgNTAlLCByZ2JhKDAsIDAsIDAsIDAuNzEpIDk5Ljk1JSknLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGFsaWduSXRlbXM6ICdmbGV4LWVuZCcsXHJcbiAgICAgICAgcDogJzI1cHgnLFxyXG4gICAgICAgIGgzOiB7XHJcbiAgICAgICAgICBtOiAwLFxyXG4gICAgICAgICAgY29sb3I6ICcjZmZmJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGltYWdlOiB7XHJcbiAgICBpbWc6IHtcclxuICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjb250ZW50OiB7XHJcbiAgICBoMzoge1xyXG4gICAgICBmb250U2l6ZTogJzE4cHgnLFxyXG4gICAgICBjb2xvcjogJyMwRjIxMzcnLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjY3LFxyXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICAgIG10OiAnMjBweCcsXHJcbiAgICAgIG1iOiAnMTVweCcsXHJcbiAgICAgIGE6IHtcclxuICAgICAgICBjb2xvcjogJ2luaGVyaXQnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHA6IHtcclxuICAgICAgZm9udFNpemU6ICcxNnB4JyxcclxuICAgICAgbGluZUhlaWdodDogMS44NyxcclxuICAgICAgY29sb3I6ICcjMEYyMTM3JyxcclxuICAgICAgb3BhY2l0eTogMC42LFxyXG4gICAgICBtYjogJzE1cHgnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGxpbmtMYWJlbDoge1xyXG4gICAgY29sb3I6ICcjMzE4M0ZGJyxcclxuICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICBmb250V2VpZ2h0OiAnNTAwJyxcclxuICAgIGltZzoge1xyXG4gICAgICBtbDogJzZweCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCwgVGV4dCwgSGVhZGluZywgSW1hZ2UgfSBmcm9tICd0aGVtZS11aSc7XHJcbmNvbnN0IEphY2twb3RDYXJkID0gKHsgaW1hZ2UsIGhlYWRpbmcsIHRleHQgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHN4PXtzdHlsZXMuamFja3BvdENhcmR9PlxyXG4gICAgICA8Qm94IHN4PXtzdHlsZXMuaW1hZ2V9PlxyXG4gICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlfSBhbHQ9e2hlYWRpbmd9IC8+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8Qm94IHN4PXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgPEhlYWRpbmcgYXM9XCJoM1wiPntoZWFkaW5nfTwvSGVhZGluZz5cclxuICAgICAgICA8VGV4dCBhcz1cInBcIj57dGV4dH08L1RleHQ+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEphY2twb3RDYXJkO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGphY2twb3RDYXJkOiB7XHJcbiAgICBwOiBbJzMwcHgnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnMTVweCAzMHB4JywgJzMwcHgnXSxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246IFsnY29sdW1uJywgbnVsbCwgbnVsbCwgJ3JvdyddLFxyXG4gICAgdGV4dEFsaWduOiBbJ2NlbnRlcicsIG51bGwsIG51bGwsICdsZWZ0J10sXHJcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDUwMG1zIGVhc2UnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcclxuXHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgYm94U2hhZG93OiAnIDBweCA4cHggMjRweCByZ2JhKDY5LCA4OCwgMTU3LCAwLjA3KScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaW1hZ2U6IHtcclxuICAgIGZsZXhTaHJpbms6ICcwJyxcclxuICAgIG1yOiBbJzAnLCBudWxsLCBudWxsLCAnMzBweCddLFxyXG4gICAgbWI6IFsnMjBweCcsIG51bGwsIG51bGwsICcwcHgnXSxcclxuICB9LFxyXG4gIGNvbnRlbnQ6IHtcclxuICAgIGgzOiB7XHJcbiAgICAgIGNvbG9yOiAnIzBGMjEzNycsXHJcbiAgICAgIGZvbnRTaXplOiAnMThweCcsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgICAgbWI6ICcxMHB4JyxcclxuICAgIH0sXHJcbiAgICBwOiB7XHJcbiAgICAgIGZvbnRTaXplOiAnMTVweCcsXHJcbiAgICAgIGNvbG9yOiAnIzM0M0Q0OCcsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNzMsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCwgSW1hZ2UsIFRleHQsIEhlYWRpbmcgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdjb21wb25lbnRzL2xpbmsnO1xyXG5cclxuaW1wb3J0IHByaWNlQ2hlY2sgZnJvbSAnYXNzZXRzL3ByaWNlLWNoZWNrLnN2Zyc7XHJcbmltcG9ydCBwcmljZUNyb3NzIGZyb20gJ2Fzc2V0cy9wcmljZS1jcm9zcy5zdmcnO1xyXG5pbXBvcnQgcHJpY2VBcnJvdyBmcm9tICdhc3NldHMvcHJpY2UtYXJyb3cuc3ZnJztcclxuXHJcbmNvbnN0IFByaWNlQ2FyZCA9ICh7IGRhdGE6IHsgdGl0bGUsIGljb24sIGFtb3VudCwgb3B0aW9ucywgcmVjb21tZW5kZWQgfSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3hcclxuICAgICAgY2xhc3NOYW1lPXtgJHtcclxuICAgICAgICByZWNvbW1lbmRlZCA9PT0gbnVsbCA/ICdwcmljZUNhcmQgJyA6ICdwcmljZUNhcmQgcmVjb21tZW5kZWQnXHJcbiAgICAgIH1gfVxyXG4gICAgICBzeD17c3R5bGVzLnByaWNlQ2FyZH1cclxuICAgID5cclxuICAgICAgPEJveCBzeD17c3R5bGVzLnByaWNlSGVhZGVyfT5cclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT1cInByaWNlSGVhZGVyXCI+XHJcbiAgICAgICAgICB7cmVjb21tZW5kZWQgPT09IG51bGwgPyBudWxsIDogKFxyXG4gICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMucmVjb21tZW5kZWR9PntyZWNvbW1lbmRlZH08L0JveD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtpY29ufSBhbHQ9e3RpdGxlfSAvPlxyXG4gICAgICAgICAgPEhlYWRpbmcgYXM9XCJoM1wiPnt0aXRsZX08L0hlYWRpbmc+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8Qm94IGFzPVwidWxcIj5cclxuICAgICAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgYXM9XCJsaVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7b3B0aW9uLnN0YXR1cyA9PT0gdHJ1ZSA/ICcnIDogJ2Nsb3NlZCd9YH1cclxuICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge29wdGlvbi5zdGF0dXMgPT09IHRydWUgPyAoXHJcbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17cHJpY2VDaGVja30gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtwcmljZUNyb3NzfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7b3B0aW9uLmxhYmVsfVxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8Qm94IHN4PXtzdHlsZXMuYnV0dG9uV3JhcH0+XHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9XCJwcmljZUFtb3VudFwiPlxyXG4gICAgICAgICAgPFRleHQgYXM9XCJwXCI+U3RhcnRpbmcgZnJvbTwvVGV4dD5cclxuICAgICAgICAgIDxMaW5rIHBhdGg9XCIjXCIgc3g9e3N0eWxlcy5oZWFkaW5nfT5cclxuICAgICAgICAgICAge2Ftb3VudH1cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8TGluayBwYXRoPVwiI1wiIGNsYXNzTmFtZT1cInByaWNlQnV0dG9uXCI+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtwcmljZUFycm93fSBhbHQ9XCJwcmljZSBidXR0b25cIiAvPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJpY2VDYXJkO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHByaWNlQ2FyZDoge1xyXG4gICAgcHg6IFsnMjBweCcsIG51bGwsIG51bGwsIG51bGwsICc0MHB4J10sXHJcbiAgICBib3JkZXI6ICcxcHggc29saWQgI0UwRTJFNCcsXHJcbiAgICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgdWw6IHtcclxuICAgICAgcDogMCxcclxuICAgICAgbXQ6IFsnMzBweCcsIG51bGwsIG51bGwsIG51bGwsICc1MHB4J10sXHJcbiAgICAgIGxpc3RTdHlsZTogJ25vbmUnLFxyXG4gICAgICBsaToge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXHJcbiAgICAgICAgY29sb3I6ICcjMzQzRDQ4JyxcclxuICAgICAgICBmb250U2l6ZTogJzE2cHgnLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6ICcyNnB4JyxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgIG1heFdpZHRoOiBbJzEwMCUnLCBudWxsLCBudWxsLCBudWxsLCAnOTAlJ10sXHJcbiAgICAgICAgJytsaSc6IHtcclxuICAgICAgICAgIG10OiBbJzEwcHgnLCBudWxsLCBudWxsLCBudWxsLCAnMjBweCddLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJyYuY2xvc2VkJzoge1xyXG4gICAgICAgICAgY29sb3I6ICdyZ2JhKDUyLDYxLDcyLC42KScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbWc6IHtcclxuICAgICAgICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICAgIHRvcDogJzVweCcsXHJcbiAgICAgICAgICBtcjogJzE1cHgnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcHJpY2VIZWFkZXI6IHtcclxuICAgIHB0OiBbJzQwcHgnLCBudWxsLCBudWxsLCBudWxsLCAnNjBweCddLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgZmxleERpcmVjdGlvbjogWydjb2x1bW4nLCBudWxsLCAncm93J10sXHJcbiAgICAnLnByaWNlQW1vdW50Jzoge1xyXG4gICAgICB0ZXh0QWxpZ246ICdyaWdodCcsXHJcbiAgICB9LFxyXG4gICAgJy5wcmljZUhlYWRlcic6IHtcclxuICAgICAgbWI6IFsnMjBweCcsIG51bGwsICcwJ10sXHJcbiAgICAgIGgzOiB7XHJcbiAgICAgICAgbGluZUhlaWdodDogMSxcclxuICAgICAgICBjb2xvcjogJyMwRjIxMzcnLFxyXG4gICAgICAgIGZvbnRTaXplOiAnMjJweCcsXHJcbiAgICAgICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgICAgIGxldHRlclNwYWNpbmc6ICctMC41NXB4JyxcclxuICAgICAgICBtdDogJzM1cHgnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHJlY29tbWVuZGVkOiB7XHJcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnM3B4JyxcclxuICAgIGxpbmVIZWlnaHQ6IDEsXHJcbiAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgZm9udFNpemU6ICcxNHB4JyxcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgIGxldHRlclNwYWNpbmc6ICctMC4xNHB4JyxcclxuICAgIHBhZGRpbmc6ICc1cHggOHB4JyxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiBbJy0xNXB4JywgbnVsbCwgbnVsbCwgbnVsbF0sXHJcbiAgICBsZWZ0OiAnMHB4JyxcclxuICB9LFxyXG4gIGJ1dHRvbldyYXA6IHtcclxuICAgIGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6ICcxMHB4JyxcclxuICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiAnMTBweCcsXHJcbiAgICBweTogJzQ0cHgnLFxyXG4gICAgbXQ6ICc2MHB4JyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNGOEY4RkEnLFxyXG4gICAgbXg6IFsnLTIwcHgnLCBudWxsLCBudWxsLCBudWxsLCAnLTQwcHgnXSxcclxuICAgIHB4OiBbJzIwcHgnLCBudWxsLCBudWxsLCBudWxsLCAnNDBweCddLFxyXG4gICAgaW1nOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICB9LFxyXG4gICAgJy5wcmljZUFtb3VudCc6IHtcclxuICAgICAgcDoge1xyXG4gICAgICAgIGxpbmVIZWlnaHQ6IDEsXHJcbiAgICAgICAgZm9udFNpemU6ICcxNnB4JyxcclxuICAgICAgICBjb2xvcjogJyMzNDNENDgnLFxyXG4gICAgICAgIG1iOiAnMTBweCcsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaGVhZGluZzoge1xyXG4gICAgY29sb3I6ICdwcmltYXJ5JyxcclxuICAgIGZvbnRTaXplOiAnMjZweCcsXHJcbiAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICBsaW5lSGVpZ2h0OiAxLFxyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCwgVGV4dCwgSGVhZGluZywgSW1hZ2UgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdjb21wb25lbnRzL2xpbmsnO1xyXG5pbXBvcnQgYXJyb3dBbmdsZSBmcm9tICdhc3NldHMvYXJyb3ctYW5nbGUuc3ZnJztcclxuXHJcbmNvbnN0IFNlcnZpY2VDYXJkID0gKHsgaW1hZ2UsIHRleHQsIGhlYWRpbmcsIHBhdGggfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHN4PXtzdHlsZXMuc2VydmljZUNhcmR9PlxyXG4gICAgICA8Qm94IHN4PXtzdHlsZXMuaW1hZ2V9PlxyXG4gICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlfSBhbHQ9e2hlYWRpbmd9IC8+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8Qm94IHN4PXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgPEhlYWRpbmcgYXM9XCJoM1wiPntoZWFkaW5nfTwvSGVhZGluZz5cclxuICAgICAgICA8VGV4dCBhcz1cInBcIj57dGV4dH08L1RleHQ+XHJcbiAgICAgICAgPExpbmsgc3g9e3N0eWxlcy5saW5rfSBwYXRoPXtwYXRofT5cclxuICAgICAgICAgIExlYXJuIE1vcmUgPEltYWdlIHNyYz17YXJyb3dBbmdsZX0gYWx0PVwiYW5nbGUgaWNvblwiIC8+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZXJ2aWNlQ2FyZDtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBzZXJ2aWNlQ2FyZDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogWydjb2x1bW4nLCBudWxsLCBudWxsLCAncm93J10sXHJcbiAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgbnVsbCwgbnVsbCwgJ2xlZnQnXSxcclxuICB9LFxyXG4gIGltYWdlOiB7XHJcbiAgICBmbGV4U2hyaW5rOiAwLFxyXG4gIH0sXHJcbiAgY29udGVudDoge1xyXG4gICAgbWw6IFsnMCcsIG51bGwsIG51bGwsICczMHB4J10sXHJcbiAgICBtdDogWycyMHB4JywgbnVsbCwgbnVsbCwgJzBweCddLFxyXG4gICAgaDM6IHtcclxuICAgICAgY29sb3I6ICcjMEYyMTM3JyxcclxuICAgICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgICBmb250U2l6ZTogJzE4cHgnLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxyXG4gICAgfSxcclxuICAgIHA6IHtcclxuICAgICAgZm9udFNpemU6ICcxNnB4JyxcclxuICAgICAgbGluZUhlaWdodDogMS44NyxcclxuICAgICAgY29sb3I6ICcjMzQzRDQ4JyxcclxuICAgICAgbXQ6ICcyMHB4JyxcclxuICAgICAgbWI6ICcyMHB4JyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBsaW5rOiB7XHJcbiAgICBjb2xvcjogJyMzMTgzRkYnLFxyXG4gICAgZm9udFNpemU6ICcxNnB4JyxcclxuICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgaW1nOiB7XHJcbiAgICAgIG1sOiAnNXB4JyxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94LCBUZXh0LCBIZWFkaW5nLCBJbWFnZSB9IGZyb20gJ3RoZW1lLXVpJztcclxuY29uc3QgVGVzdGltb25pYWxzQ2FyZCA9ICh7IGltYWdlLCB0ZXh0LCBuYW1lLCB1c2VybmFtZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggc3g9e3N0eWxlcy50ZXN0aW1vbmlhbHNDYXJkfT5cclxuICAgICAgPFRleHQgYXM9XCJwXCI+e3RleHR9PC9UZXh0PlxyXG4gICAgICA8Qm94IHN4PXtzdHlsZXMudGVzdGltb25pYWxzSW5mb30+XHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLnRlc3RpbW9uaWFsc0ltYWdlfT5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlfSBhbHQ9e25hbWV9IC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLnRlc3RpbW9uaWFsc0NvbnRlbnR9PlxyXG4gICAgICAgICAgPEhlYWRpbmcgYXM9XCJoM1wiPntuYW1lfTwvSGVhZGluZz5cclxuICAgICAgICAgIDxUZXh0IGFzPVwicFwiPnt1c2VybmFtZX08L1RleHQ+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlc3RpbW9uaWFsc0NhcmQ7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgdGVzdGltb25pYWxzQ2FyZDoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI0ZGRkZGRicsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gICAgbWI6ICcyMHB4JyxcclxuICAgIHB4OiBbJzIwcHgnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnMjVweCcsICczNXB4J10sXHJcbiAgICBweTogWycyMHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJzIwcHgnLCAnMjVweCddLFxyXG4gICAgcGI6IFsnMjVweCcsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICcyNXB4JywgJzM1cHgnXSxcclxuICAgIHA6IHtcclxuICAgICAgZm9udFNpemU6ICcxNnB4JyxcclxuICAgICAgbGluZUhlaWdodDogMS44NyxcclxuICAgICAgY29sb3I6ICcjMzQzRDQ4JyxcclxuICAgIH0sXHJcbiAgfSxcclxuICB0ZXN0aW1vbmlhbHNJbmZvOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIG10OiAnMjBweCcsXHJcbiAgfSxcclxuICB0ZXN0aW1vbmlhbHNJbWFnZToge1xyXG4gICAgaW1nOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgIG1yOiAnMTVweCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdGVzdGltb25pYWxzQ29udGVudDoge1xyXG4gICAgaDM6IHtcclxuICAgICAgbTogMCxcclxuICAgICAgY29sb3I6ICcjMzQzRDQ4JyxcclxuICAgICAgZm9udFNpemU6ICcxN3B4JyxcclxuICAgICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxyXG4gICAgfSxcclxuICAgIHA6IHtcclxuICAgICAgbTogMCxcclxuICAgICAgbGluZUhlaWdodDogMSxcclxuICAgICAgY29sb3I6ICcjNEY5NkZGJyxcclxuICAgICAgZm9udFNpemU6ICcxNHB4JyxcclxuICAgICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgICBtdDogJzEwcHgnLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IFJjRHJhd2VyIGZyb20gJ3JjLWRyYXdlcic7XHJcblxyXG5jb25zdCBEcmF3ZXIgPSAoe1xyXG4gIGNsYXNzTmFtZSxcclxuICBjaGlsZHJlbixcclxuICBjbG9zZUJ1dHRvbixcclxuICBjbG9zZUJ1dHRvblN0eWxlLFxyXG4gIGRyYXdlckhhbmRsZXIsXHJcbiAgdG9nZ2xlSGFuZGxlcixcclxuICBvcGVuLFxyXG4gIHdpZHRoLFxyXG4gIHBsYWNlbWVudCxcclxuICBkcmF3ZXJTdHlsZSxcclxuICBjbG9zZUJ0blN0eWxlLFxyXG4gIC4uLnByb3BzXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8UmNEcmF3ZXJcclxuICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgIG9uQ2xvc2U9e3RvZ2dsZUhhbmRsZXJ9XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgZHJhd2VyICR7Y2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJyd9YC50cmltKCl9XHJcbiAgICAgICAgd2lkdGg9e3dpZHRofVxyXG4gICAgICAgIHBsYWNlbWVudD17cGxhY2VtZW50fVxyXG4gICAgICAgIGhhbmRsZXI9e2ZhbHNlfVxyXG4gICAgICAgIGxldmVsPXtudWxsfVxyXG4gICAgICAgIGR1cmF0aW9uPVwiMC40c1wiXHJcbiAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICA+XHJcbiAgICAgICAge2Nsb3NlQnV0dG9uICYmIChcclxuICAgICAgICAgIDxCb3ggYXM9XCJkaXZcIiBvbkNsaWNrPXt0b2dnbGVIYW5kbGVyfSBzeD17Y2xvc2VCdG5TdHlsZX0+XHJcbiAgICAgICAgICAgIHtjbG9zZUJ1dHRvbn1cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPEJveCBzeD17ZHJhd2VyU3R5bGV9PntjaGlsZHJlbn08L0JveD5cclxuICAgICAgPC9SY0RyYXdlcj5cclxuICAgICAgPEJveFxyXG4gICAgICAgIGNsYXNzTmFtZT1cImRyYXdlcl9faGFuZGxlclwiXHJcbiAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ2lubGluZS1ibG9jaycgfX1cclxuICAgICAgICBvbkNsaWNrPXt0b2dnbGVIYW5kbGVyfVxyXG4gICAgICA+XHJcbiAgICAgICAge2RyYXdlckhhbmRsZXJ9XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuRHJhd2VyLmRlZmF1bHRQcm9wcyA9IHtcclxuICB3aWR0aDogJzMyMHB4JyxcclxuICBwbGFjZW1lbnQ6ICdsZWZ0JyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERyYXdlcjtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGpzeCwgQm94LCBUZXh0LCBDb250YWluZXIgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdjb21wb25lbnRzL2xpbmsnO1xyXG5pbXBvcnQgTG9nbyBmcm9tICdjb21wb25lbnRzL2xvZ28nO1xyXG5pbXBvcnQgbG9nb0xpZ2h0IGZyb20gJ2Fzc2V0cy9sb2dvLWxpZ2h0LnN2Zyc7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBhcz1cImZvb3RlclwiIHN4PXtzdHlsZXMuZm9vdGVyfT5cclxuICAgICAgPENvbnRhaW5lciBzeD17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgc3g9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgZmxleERpcmVjdGlvbjogWydjb2x1bW4nLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAncm93J10sXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxMb2dvIGltYWdlPXtsb2dvTGlnaHR9IC8+XHJcbiAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICBhcz1cInBcIlxyXG4gICAgICAgICAgICBzeD17e1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogJzAuNycsXHJcbiAgICAgICAgICAgICAgZm9udFNpemU6ICcxNHB4JyxcclxuICAgICAgICAgICAgICBtdDogWycxMHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJzAnXSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQ29weXJpZ2h0IGJ5IHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IEZ4Ym90MzYwXHJcbiAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmxpbmtzV3JhcH0+XHJcbiAgICAgICAgICA8TGluayBwYXRoPVwiL1wiPkhvbWU8L0xpbms+XHJcbiAgICAgICAgICB7LyogPExpbmsgcGF0aD1cIi9cIj5BZHZlcnRpc2U8L0xpbms+ICovfVxyXG4gICAgICAgICAgPExpbmsgcGF0aD1cIi9cIj5TdXBwb3J0czwvTGluaz5cclxuICAgICAgICAgIHsvKiA8TGluayBwYXRoPVwiL1wiPk1hcmtldGluZzwvTGluaz4gKi99XHJcbiAgICAgICAgICA8TGluayBwYXRoPVwiL1wiPkZBUTwvTGluaz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgZm9vdGVyOiB7XHJcbiAgICBweTogWyc0MHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJzMwcHgnLCAnNDBweCddLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzAyMDcxOCcsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICcmOjpiZWZvcmUnOiB7XHJcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIHRvcDogMCxcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgIGJvdHRvbTogMCxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICAgIG9wYWNpdHk6ICcwLjA1JyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjb250YWluZXI6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246IFsnY29sdW1uJywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJ3JvdyddLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFsnY2VudGVyJywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJ3NwYWNlLWJldHdlZW4nXSxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gIH0sXHJcbiAgbGlua3NXcmFwOiB7XHJcbiAgICBtdDogWycxNXB4JywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJzAnXSxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICBhOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbJzE0cHgnLCBudWxsLCBudWxsLCBudWxsLCAnMTZweCddLFxyXG4gICAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDUwMG1zIGVhc2UnLFxyXG4gICAgICAnJjpob3Zlcic6IHsgb3BhY2l0eTogMC43IH0sXHJcbiAgICB9LFxyXG4gICAgJ2ErYSc6IHsgbWw6IFsnMTVweCcsIG51bGwsIG51bGwsIG51bGwsICczNXB4J10gfSxcclxuICB9LFxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBbXHJcbiAge1xyXG4gICAgcGF0aDogJ2Jhbm5lcicsXHJcbiAgICBsYWJlbDogJ0hvbWUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ3NlcnZpY2VzJyxcclxuICAgIGxhYmVsOiAnU2VydmljZXMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ3ByaWNpbmcnLFxyXG4gICAgbGFiZWw6ICdQcmljaW5nJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICd0ZXN0aW1vbmlhbHMnLFxyXG4gICAgbGFiZWw6ICdUZXN0aW1vbmlhbHMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ25ld3MnLFxyXG4gICAgbGFiZWw6ICdOZXdzJyxcclxuICB9LFxyXG5dO1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBDb250YWluZXIsIEZsZXggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdjb21wb25lbnRzL2xpbmsnO1xyXG5pbXBvcnQgeyBMaW5rIGFzIFNjcm9sbExpbmsgfSBmcm9tICdyZWFjdC1zY3JvbGwnO1xyXG5pbXBvcnQgTG9nbyBmcm9tICdjb21wb25lbnRzL2xvZ28nO1xyXG5pbXBvcnQgeyBEcmF3ZXJQcm92aWRlciB9IGZyb20gJ2NvbnRleHRzL2RyYXdlci9kcmF3ZXIucHJvdmlkZXInO1xyXG5pbXBvcnQgTW9iaWxlRHJhd2VyIGZyb20gJy4vbW9iaWxlRHJhd2VyJztcclxuaW1wb3J0IG1lbnVJdGVtcyBmcm9tICcuL2hlYWRlci5kYXRhJztcclxuaW1wb3J0IGxvZ29EYXJrIGZyb20gJ2Fzc2V0cy9sb2dvLWRhcmsuc3ZnJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcih7IGNsYXNzTmFtZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxEcmF3ZXJQcm92aWRlcj5cclxuICAgICAgPGhlYWRlciBzeD17c3R5bGVzLmhlYWRlcn0gY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxyXG4gICAgICAgIDxDb250YWluZXIgc3g9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgPExvZ28gaW1hZ2U9e2xvZ29EYXJrfSAvPlxyXG5cclxuICAgICAgICAgIDxGbGV4IGFzPVwibmF2XCIgc3g9e3N0eWxlcy5uYXZ9PlxyXG4gICAgICAgICAgICB7bWVudUl0ZW1zLm1hcCgoeyBwYXRoLCBsYWJlbCB9LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFNjcm9sbExpbmtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNsYXNzPVwiYWN0aXZlXCJcclxuICAgICAgICAgICAgICAgIHN4PXtzdHlsZXMubmF2Lm5hdkxpbmt9XHJcbiAgICAgICAgICAgICAgICB0bz17cGF0aH1cclxuICAgICAgICAgICAgICAgIHNweT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIG9mZnNldD17LTcwfVxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cclxuICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgICAgPC9TY3JvbGxMaW5rPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvRmxleD5cclxuXHJcbiAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICBwYXRoPVwiL1wiXHJcbiAgICAgICAgICAgIG1sPXsyfVxyXG4gICAgICAgICAgICBsYWJlbD1cIlB1cmNoYXNlIE5vd1wiXHJcbiAgICAgICAgICAgIHN4PXtzdHlsZXMuaGVhZGVyQnRufVxyXG4gICAgICAgICAgICB2YXJpYW50PVwiYnV0dG9ucy5wcmltYXJ5XCJcclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPE1vYmlsZURyYXdlciAvPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgIDwvRHJhd2VyUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGhlYWRlckJ0bjoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnYmxhY2snLFxyXG4gICAgZm9udFNpemU6ICcxNnB4JyxcclxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgIGxldHRlclNwYWNpbmc6ICctMC4xNnB4JyxcclxuICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICBjb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgcGFkZGluZzogJzYuNXB4IDI0cHgnLFxyXG4gICAgZGlzcGxheTogWydub25lJywgbnVsbCwgbnVsbCwgbnVsbCwgJ2lubGluZS1ibG9jayddLFxyXG4gICAgbWw6IFsnMCcsIG51bGwsIG51bGwsICdhdXRvJywgJzAnXSxcclxuICAgIG1yOiBbJzAnLCBudWxsLCBudWxsLCAnMjBweCcsICcwJ10sXHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgY29sb3I6ICcjZmZmJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBoZWFkZXI6IHtcclxuICAgIGNvbG9yOiAndGV4dF93aGl0ZScsXHJcbiAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcclxuICAgIHB5OiAnMjVweCcsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICB0b3A6IDAsXHJcbiAgICBsZWZ0OiAwLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAwLjRzIGVhc2UnLFxyXG5cclxuICAgICcmLnN0aWNreSc6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnYmFja2dyb3VuZCcsXHJcbiAgICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICAgIHB5OiAnMTVweCcsXHJcbiAgICAgIGJveFNoYWRvdzogJzAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDYpJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjb250YWluZXI6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgd2lkdGg6IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnMTM5MHB4J10sXHJcbiAgICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpJzoge1xyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIG5hdjoge1xyXG4gICAgbXg6ICdhdXRvJyxcclxuICAgICdAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCknOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdub25lJyxcclxuICAgIH0sXHJcbiAgICBuYXZMaW5rOiB7XHJcbiAgICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICAgIGNvbG9yOiAnIzAyMDczRScsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICc0MDAnLFxyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgbGluZUhlaWdodDogJzEuMicsXHJcbiAgICAgIG1yOiAnNDhweCcsXHJcbiAgICAgIHRyYW5zaXRpb246ICc1MDBtcycsXHJcbiAgICAgICc6bGFzdC1jaGlsZCc6IHtcclxuICAgICAgICBtcjogJzAnLFxyXG4gICAgICB9LFxyXG4gICAgICAnJjpob3ZlciwgJi5hY3RpdmUnOiB7XHJcbiAgICAgICAgY29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgQm94IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBTY3JvbGxiYXJzIH0gZnJvbSAncmVhY3QtY3VzdG9tLXNjcm9sbGJhcnMnO1xyXG5pbXBvcnQgRHJhd2VyIGZyb20gJ2NvbXBvbmVudHMvZHJhd2VyJztcclxuaW1wb3J0IHsgRHJhd2VyQ29udGV4dCB9IGZyb20gJ2NvbnRleHRzL2RyYXdlci9kcmF3ZXIuY29udGV4dCc7XHJcbmltcG9ydCB7IElvTWRDbG9zZSwgSW9NZE1lbnUgfSBmcm9tICdyZWFjdC1pY29ucy9pbyc7XHJcbmltcG9ydCB7IExpbmsgYXMgU2Nyb2xsTGluayB9IGZyb20gJ3JlYWN0LXNjcm9sbCc7XHJcbmltcG9ydCBtZW51SXRlbXMgZnJvbSAnLi9oZWFkZXIuZGF0YSc7XHJcbmltcG9ydCBMb2dvIGZyb20gJ2NvbXBvbmVudHMvbG9nbyc7XHJcbmltcG9ydCBsb2dvRGFyayBmcm9tICdhc3NldHMvbG9nby1kYXJrLnN2Zyc7XHJcblxyXG5jb25zdCBNb2JpbGVEcmF3ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBzdGF0ZSwgZGlzcGF0Y2ggfSA9IHVzZUNvbnRleHQoRHJhd2VyQ29udGV4dCk7XHJcblxyXG4gIC8vIFRvZ2dsZSBkcmF3ZXJcclxuICBjb25zdCB0b2dnbGVIYW5kbGVyID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiAnVE9HR0xFJyxcclxuICAgIH0pO1xyXG4gIH0sIFtkaXNwYXRjaF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPERyYXdlclxyXG4gICAgICB3aWR0aD1cIjMyMHB4XCJcclxuICAgICAgZHJhd2VySGFuZGxlcj17XHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmhhbmRsZXJ9PlxyXG4gICAgICAgICAgPElvTWRNZW51IHNpemU9XCIyMnB4XCIgLz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgfVxyXG4gICAgICBvcGVuPXtzdGF0ZS5pc09wZW59XHJcbiAgICAgIHRvZ2dsZUhhbmRsZXI9e3RvZ2dsZUhhbmRsZXJ9XHJcbiAgICAgIGNsb3NlQnV0dG9uPXs8SW9NZENsb3NlIHNpemU9XCIyNHB4XCIgY29sb3I9XCIjMDIwNzNFXCIgLz59XHJcbiAgICAgIGRyYXdlclN0eWxlPXtzdHlsZXMuZHJhd2VyfVxyXG4gICAgICBjbG9zZUJ0blN0eWxlPXtzdHlsZXMuY2xvc2V9XHJcbiAgICA+XHJcbiAgICAgIDxTY3JvbGxiYXJzIGF1dG9IaWRlPlxyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgIDxMb2dvIGltYWdlPXtsb2dvRGFya30gLz5cclxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5tZW51fT5cclxuICAgICAgICAgICAge21lbnVJdGVtcy5tYXAoKHsgcGF0aCwgbGFiZWwgfSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxTY3JvbGxMaW5rXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICB0bz17cGF0aH1cclxuICAgICAgICAgICAgICAgIHNweT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIHNtb290aD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgIG9mZnNldD17MTB9XHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbj17NTAwfVxyXG4gICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgICA8L1Njcm9sbExpbms+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLm1lbnVGb290ZXJ9PlxyXG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgc3g9e3N0eWxlcy5idXR0b259PlxyXG4gICAgICAgICAgICAgIFB1cmNoYXNlIE5vd1xyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L1Njcm9sbGJhcnM+XHJcbiAgICA8L0RyYXdlcj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGhhbmRsZXI6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgZmxleFNocmluazogJzAnLFxyXG4gICAgd2lkdGg6ICcyNnB4JyxcclxuXHJcbiAgICAnQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTYwcHgpJzoge1xyXG4gICAgICBkaXNwbGF5OiAnbm9uZScsXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIGRyYXdlcjoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgYmFja2dyb3VuZDogJyNmZmYnLFxyXG4gIH0sXHJcblxyXG4gIGNsb3NlOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAnMzBweCcsXHJcbiAgICByaWdodDogJzMwcHgnLFxyXG4gICAgekluZGV4OiAnMScsXHJcbiAgfSxcclxuXHJcbiAgY29udGVudDoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBwdDogJzMwcHgnLFxyXG4gICAgcGI6ICc0MHB4JyxcclxuICAgIHB4OiAnMzBweCcsXHJcbiAgfSxcclxuXHJcbiAgbWVudToge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgbWFyZ2luVG9wOiAnMzBweCcsXHJcblxyXG4gICAgYToge1xyXG4gICAgICBmb250U2l6ZTogJzE2cHgnLFxyXG4gICAgICBmb250V2VpZ2h0OiAnNDAwJyxcclxuICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICAgIHB5OiAnNXB4JyxcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIG1lbnVGb290ZXI6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgbXQ6ICdhdXRvJyxcclxuICB9LFxyXG5cclxuICBidXR0b246IHtcclxuICAgIGZvbnRTaXplOiAnMTVweCcsXHJcbiAgICBmdzogJzcwMCcsXHJcbiAgICBoZWlnaHQ6ICc0OHB4JyxcclxuICAgIGJvcmRlclJhZGl1czogJzNweCcsXHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIHB5OiAnMCcsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdibGFjaycsXHJcbiAgICBjb2xvcjogJyNmZmYnLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2JpbGVEcmF3ZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEltYWdlIGFzIEltZyB9IGZyb20gJ3RoZW1lLXVpJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlKHsgc3JjLCAuLi5yZXN0IH0pIHtcclxuICByZXR1cm4gPEltZyBzcmM9e3NyY30gey4uLnJlc3R9IC8+O1xyXG59XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFN0aWNreSBmcm9tICdyZWFjdC1zdGlja3lub2RlJztcclxuaW1wb3J0IHsgdXNlU3RpY2t5U3RhdGUgfSBmcm9tICdjb250ZXh0cy9hcHAvYXBwLnByb3ZpZGVyJztcclxuaW1wb3J0IHsgV2F5cG9pbnQgfSBmcm9tICdyZWFjdC13YXlwb2ludCc7XHJcbmltcG9ydCB7IHVzZVN0aWNreURpc3BhdGNoIH0gZnJvbSAnY29udGV4dHMvYXBwL2FwcC5wcm92aWRlcic7XHJcblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyL2hlYWRlcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9mb290ZXIvZm9vdGVyJztcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IGlzU3RpY2t5ID0gdXNlU3RpY2t5U3RhdGUoJ2lzU3RpY2t5Jyk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VTdGlja3lEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHNldFN0aWNreSA9IHVzZUNhbGxiYWNrKCgpID0+IGRpc3BhdGNoKHsgdHlwZTogJ1NFVF9TVElDS1knIH0pLCBbXHJcbiAgICBkaXNwYXRjaCxcclxuICBdKTtcclxuICBjb25zdCByZW1vdmVTdGlja3kgPSB1c2VDYWxsYmFjaygoKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdSRU1PVkVfU1RJQ0tZJyB9KSwgW1xyXG4gICAgZGlzcGF0Y2gsXHJcbiAgXSk7XHJcblxyXG4gIGNvbnN0IG9uV2F5cG9pbnRQb3NpdGlvbkNoYW5nZSA9ICh7IGN1cnJlbnRQb3NpdGlvbiB9KSA9PiB7XHJcbiAgICBpZiAoY3VycmVudFBvc2l0aW9uID09PSAnYWJvdmUnKSB7XHJcbiAgICAgIHNldFN0aWNreSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGN1cnJlbnRQb3NpdGlvbiA9PT0gJ2JlbG93Jykge1xyXG4gICAgICByZW1vdmVTdGlja3koKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8U3RpY2t5IGVuYWJsZWQ9e2lzU3RpY2t5fSBpbm5lclo9ezk5MX0+XHJcbiAgICAgICAgPEhlYWRlciBjbGFzc05hbWU9e2Ake2lzU3RpY2t5ID8gJ3N0aWNreScgOiAndW5TdGlja3knfWB9IC8+XHJcbiAgICAgIDwvU3RpY2t5PlxyXG4gICAgICA8V2F5cG9pbnRcclxuICAgICAgICBvbkVudGVyPXtyZW1vdmVTdGlja3l9XHJcbiAgICAgICAgLy8gb25MZWF2ZT17c2V0U3RpY2t5fVxyXG4gICAgICAgIG9uUG9zaXRpb25DaGFuZ2U9e29uV2F5cG9pbnRQb3NpdGlvbkNoYW5nZX1cclxuICAgICAgLz5cclxuICAgICAgPG1haW5cclxuICAgICAgICBzeD17e1xyXG4gICAgICAgICAgdmFyaWFudDogJ2xheW91dC5tYWluJyxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBOYXZMaW5rIGFzIE1lbnVMaW5rLCBMaW5rIGFzIEEgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5leHBvcnQgZnVuY3Rpb24gTmF2TGluayh7IHBhdGgsIGxhYmVsLCBjaGlsZHJlbiwgLi4ucmVzdCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxOZXh0TGluayBocmVmPXtwYXRofT5cclxuICAgICAgPE1lbnVMaW5rIHsuLi5yZXN0fT57Y2hpbGRyZW4gPyBjaGlsZHJlbiA6IGxhYmVsfTwvTWVudUxpbms+XHJcbiAgICA8L05leHRMaW5rPlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIExpbmsoeyBwYXRoLCBsYWJlbCwgY2hpbGRyZW4sIC4uLnJlc3QgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TmV4dExpbmsgaHJlZj17cGF0aH0+XHJcbiAgICAgIDxBIHsuLi5yZXN0fT57Y2hpbGRyZW4gPyBjaGlsZHJlbiA6IGxhYmVsfTwvQT5cclxuICAgIDwvTmV4dExpbms+XHJcbiAgKTtcclxufVxyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBJbWFnZSB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ2NvbXBvbmVudHMvbGluayc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dvKHsgaW1hZ2UgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGlua1xyXG4gICAgICBwYXRoPVwiL1wiXHJcbiAgICAgIHN4PXt7XHJcbiAgICAgICAgdmFyaWFudDogJ2xpbmtzLmxvZ28nLFxyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPEltYWdlIHNyYz17aW1hZ2V9IGFsdD1cInN0YXJ0dXAgbGFuZGluZyBsb2dvXCIgLz5cclxuICAgIDwvTGluaz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTRU8oe1xyXG4gIGRlc2NyaXB0aW9uID0gJ3N0YXJ0dXAgbGFuZGluZyBkZXNjcmlwdGlvbnMnLFxyXG4gIGF1dGhvciA9ICdSZWRRLCBJbmMnLFxyXG4gIG1ldGEsXHJcbiAgdGl0bGUgPSAnc3RhcnR1cCBsYW5kaW5nIHRpdGxlJyxcclxufSkge1xyXG4gIGNvbnN0IG1ldGFEYXRhID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBgZGVzY3JpcHRpb25gLFxyXG4gICAgICBjb250ZW50OiBkZXNjcmlwdGlvbixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3BlcnR5OiBgb2c6dGl0bGVgLFxyXG4gICAgICBjb250ZW50OiB0aXRsZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3BlcnR5OiBgb2c6ZGVzY3JpcHRpb25gLFxyXG4gICAgICBjb250ZW50OiBkZXNjcmlwdGlvbixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3BlcnR5OiBgb2c6dHlwZWAsXHJcbiAgICAgIGNvbnRlbnQ6IGB3ZWJzaXRlYCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IGB0d2l0dGVyOmNhcmRgLFxyXG4gICAgICBjb250ZW50OiBgc3VtbWFyeWAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBgdHdpdHRlcjpjcmVhdG9yYCxcclxuICAgICAgY29udGVudDogYXV0aG9yLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogYHR3aXR0ZXI6dGl0bGVgLFxyXG4gICAgICBjb250ZW50OiB0aXRsZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IGB0d2l0dGVyOmRlc2NyaXB0aW9uYCxcclxuICAgICAgY29udGVudDogZGVzY3JpcHRpb24sXHJcbiAgICB9LFxyXG4gIF0uY29uY2F0KG1ldGEpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxyXG4gICAgICB7bWV0YURhdGEubWFwKCh7IG5hbWUsIGNvbnRlbnQgfSwgaSkgPT4gKFxyXG4gICAgICAgIDxtZXRhIGtleT17aX0gbmFtZT17bmFtZX0gY29udGVudD17Y29udGVudH0gLz5cclxuICAgICAgKSl9XHJcbiAgICA8L0hlYWQ+XHJcbiAgKTtcclxufVxyXG5cclxuU0VPLmRlZmF1bHRQcm9wcyA9IHtcclxuICBsYW5nOiBgZW5gLFxyXG4gIG1ldGE6IFtdLFxyXG4gIGRlc2NyaXB0aW9uOiBgYCxcclxufTtcclxuIiwiaW1wb3J0IHsgdXNlQ3JlYXRlQ29udGV4dCB9IGZyb20gJy4uL2NyZWF0ZS1jb250ZXh0JztcclxuaW1wb3J0IHsgcmVkdWNlciwgaW5pdGlhbFN0YXRlIH0gZnJvbSAnLi9hcHAucmVkdWNlcic7XHJcblxyXG5jb25zdCBbc3RhdGUsIHVzZURpc3BhdGNoLCBwcm92aWRlcl0gPSB1c2VDcmVhdGVDb250ZXh0KGluaXRpYWxTdGF0ZSwgcmVkdWNlcik7XHJcbmV4cG9ydCBjb25zdCB1c2VTdGlja3lTdGF0ZSA9IHN0YXRlO1xyXG5leHBvcnQgY29uc3QgdXNlU3RpY2t5RGlzcGF0Y2ggPSB1c2VEaXNwYXRjaDtcclxuZXhwb3J0IGNvbnN0IFN0aWNreVByb3ZpZGVyID0gcHJvdmlkZXI7XHJcbiIsImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgaXNTdGlja3k6IGZhbHNlLFxyXG4gIGlzU2lkZWJhclN0aWNreTogdHJ1ZSxcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCB7IHR5cGUgfSkge1xyXG4gIHN3aXRjaCAodHlwZSkge1xyXG4gICAgY2FzZSAnU0VUX1NUSUNLWSc6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNTdGlja3k6IHRydWUsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlICdSRU1PVkVfU1RJQ0tZJzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc1N0aWNreTogZmFsc2UsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlICdTRVRfU0lERUJBUl9TVElDS1knOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGlzU2lkZWJhclN0aWNreTogdHJ1ZSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgJ1JFTU9WRV9TSURFQkFSX1NUSUNLWSc6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNTaWRlYmFyU3RpY2t5OiBmYWxzZSxcclxuICAgICAgfTtcclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbnN1cHBvcnRlZCBhY3Rpb24gdHlwZTogJHt0eXBlfWApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VDcmVhdGVDb250ZXh0KGRlZmF1bHRWYWx1ZSwgcmVkdWNlcikge1xyXG4gIGNvbnN0IGRlZmF1bHREaXNwYXRjaCA9ICgpID0+IGRlZmF1bHRWYWx1ZTtcclxuICBjb25zdCBzdGF0ZUN0eCA9IGNyZWF0ZUNvbnRleHQoZGVmYXVsdFZhbHVlKTtcclxuICBjb25zdCBkaXNwYXRjaEN0eCA9IGNyZWF0ZUNvbnRleHQoZGVmYXVsdERpc3BhdGNoKTtcclxuXHJcbiAgZnVuY3Rpb24gdXNlU3RhdGVDdHgocHJvcGVydHkpIHtcclxuICAgIGNvbnN0IHN0YXRlID0gdXNlQ29udGV4dChzdGF0ZUN0eCk7XHJcbiAgICByZXR1cm4gc3RhdGVbcHJvcGVydHldOyAvLyBvbmx5IG9uZSBkZXB0aCBzZWxlY3RvciBmb3IgY29tcGFyaXNvblxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdXNlRGlzcGF0Y2hDdHgoKSB7XHJcbiAgICByZXR1cm4gdXNlQ29udGV4dChkaXNwYXRjaEN0eCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcclxuICAgIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gUmVhY3QudXNlUmVkdWNlcihyZWR1Y2VyLCBkZWZhdWx0VmFsdWUpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpc3BhdGNoQ3R4LlByb3ZpZGVyIHZhbHVlPXtkaXNwYXRjaH0+XHJcbiAgICAgICAgPHN0YXRlQ3R4LlByb3ZpZGVyIHZhbHVlPXtzdGF0ZX0+e2NoaWxkcmVufTwvc3RhdGVDdHguUHJvdmlkZXI+XHJcbiAgICAgIDwvZGlzcGF0Y2hDdHguUHJvdmlkZXI+XHJcbiAgICApO1xyXG4gIH1cclxuICByZXR1cm4gW3VzZVN0YXRlQ3R4LCB1c2VEaXNwYXRjaEN0eCwgUHJvdmlkZXJdO1xyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgRHJhd2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRHJhd2VyQ29udGV4dCB9IGZyb20gJy4vZHJhd2VyLmNvbnRleHQnO1xyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgaXNPcGVuOiBmYWxzZSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgJ1RPR0dMRSc6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXNPcGVuOiAhc3RhdGUuaXNPcGVuLFxyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgRHJhd2VyUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxEcmF3ZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHN0YXRlLCBkaXNwYXRjaCB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9EcmF3ZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IFN0aWNreVByb3ZpZGVyIH0gZnJvbSAnY29udGV4dHMvYXBwL2FwcC5wcm92aWRlcic7XHJcbmltcG9ydCB0aGVtZSBmcm9tICd0aGVtZSc7XHJcbmltcG9ydCBTRU8gZnJvbSAnY29tcG9uZW50cy9zZW8nO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJ2NvbXBvbmVudHMvbGF5b3V0JztcclxuaW1wb3J0IEJhbm5lciBmcm9tICdzZWN0aW9ucy9iYW5uZXInO1xyXG5pbXBvcnQgU2VydmljZXMgZnJvbSAnc2VjdGlvbnMvc2VydmljZXMnO1xyXG5pbXBvcnQgSmFja3BvdCBmcm9tICdzZWN0aW9ucy9qYWNrcG90JztcclxuaW1wb3J0IENhbGxUb0FjdGlvbiBmcm9tICdzZWN0aW9ucy9jYWxsLXRvLWFjdGlvbic7XHJcbmltcG9ydCBGZWF0dXJlZCBmcm9tICdzZWN0aW9ucy9mZWF0dXJlZCc7XHJcbmltcG9ydCBQcmljaW5nIGZyb20gJ3NlY3Rpb25zL3ByaWNpbmcnO1xyXG5pbXBvcnQgVGVzdGltb25pYWxzIGZyb20gJ3NlY3Rpb25zL3Rlc3RpbW9uaWFscyc7XHJcbmltcG9ydCBCbG9ncyBmcm9tICdzZWN0aW9ucy9ibG9ncyc7XHJcbmltcG9ydCBGQVEgZnJvbSAnc2VjdGlvbnMvZmFxJztcclxuaW1wb3J0IFN1YnNjcmliZSBmcm9tICdzZWN0aW9ucy9zdWJzY3JpYmUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXhQYWdlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICA8U3RpY2t5UHJvdmlkZXI+XHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgIDxTRU8gdGl0bGU9XCJGeGJvdDM2MFwiIC8+XHJcbiAgICAgICAgICA8QmFubmVyIC8+XHJcbiAgICAgICAgICA8U2VydmljZXMgLz5cclxuICAgICAgICAgIDxKYWNrcG90IC8+XHJcbiAgICAgICAgICA8Q2FsbFRvQWN0aW9uIC8+XHJcbiAgICAgICAgICA8RmVhdHVyZWQgLz5cclxuICAgICAgICAgIDxQcmljaW5nIC8+XHJcbiAgICAgICAgICB7LyogPFRlc3RpbW9uaWFscyAvPiAqL31cclxuICAgICAgICAgIHsvKiA8QmxvZ3MgLz4gKi99XHJcbiAgICAgICAgICA8RkFRIC8+XHJcbiAgICAgICAgICA8U3Vic2NyaWJlIC8+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgIDwvU3RpY2t5UHJvdmlkZXI+XHJcbiAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb3gsIENvbnRhaW5lciwgSW1hZ2UsIEhlYWRpbmcgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xyXG5pbXBvcnQgbG9nb0ltYWdlIGZyb20gJ2Fzc2V0cy9iYW5uZXItbG9nby5wbmcnO1xyXG5pbXBvcnQgYmFubmVySW1hZ2UgZnJvbSAnYXNzZXRzL2Jhbm5lci1tb2NrdXAucG5nJztcclxuaW1wb3J0IGJhbm5lckljb24xIGZyb20gJ2Fzc2V0cy9iYW5uZXItaWNvbi0xLTEuc3ZnJztcclxuaW1wb3J0IGJhbm5lckljb24yIGZyb20gJ2Fzc2V0cy9iYW5uZXItaWNvbi0xLTIuc3ZnJztcclxuaW1wb3J0IGJhbm5lckljb24zIGZyb20gJ2Fzc2V0cy9iYW5uZXItaWNvbi0xLTMuc3ZnJztcclxuaW1wb3J0IGJhbm5lckljb240IGZyb20gJ2Fzc2V0cy9iYW5uZXItaWNvbi0xLTQuc3ZnJztcclxuaW1wb3J0IGJhbm5lckljb241IGZyb20gJ2Fzc2V0cy9iYW5uZXItaWNvbi0xLTUuc3ZnJztcclxuaW1wb3J0IGJhbm5lckljb242IGZyb20gJ2Fzc2V0cy9iYW5uZXItaWNvbi0xLTYuc3ZnJztcclxuaW1wb3J0IGJhbm5lckljb243IGZyb20gJ2Fzc2V0cy9kb3QtcGF0dGVybi5zdmcnO1xyXG5cclxuY29uc3QgQmFubmVyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGFzPVwic2VjdGlvblwiIGlkPVwiYmFubmVyXCIgc3g9e3N0eWxlcy5iYW5uZXJ9PlxyXG4gICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgIHN4PXtzdHlsZXMuYmFubmVySWNvbjF9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiYW5uZXJJY29uXCJcclxuICAgICAgICAgIGFsdD1cImJhbm5lciBpY29uXCJcclxuICAgICAgICAgIHNyYz17YmFubmVySWNvbjF9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgIHN4PXtzdHlsZXMuYmFubmVySWNvbjJ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiYW5uZXJJY29uXCJcclxuICAgICAgICAgIGFsdD1cImJhbm5lciBpY29uXCJcclxuICAgICAgICAgIHNyYz17YmFubmVySWNvbjJ9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgIHN4PXtzdHlsZXMuYmFubmVySWNvbjN9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiYW5uZXJJY29uXCJcclxuICAgICAgICAgIGFsdD1cImJhbm5lciBpY29uXCJcclxuICAgICAgICAgIHNyYz17YmFubmVySWNvbjN9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgIHN4PXtzdHlsZXMuYmFubmVySWNvbjR9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiYW5uZXJJY29uXCJcclxuICAgICAgICAgIGFsdD1cImJhbm5lciBpY29uXCJcclxuICAgICAgICAgIHNyYz17YmFubmVySWNvbjR9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgIHN4PXtzdHlsZXMuYmFubmVySWNvbjV9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiYW5uZXJJY29uXCJcclxuICAgICAgICAgIGFsdD1cImJhbm5lciBpY29uXCJcclxuICAgICAgICAgIHNyYz17YmFubmVySWNvbjV9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgIHN4PXtzdHlsZXMuYmFubmVySWNvbjZ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiYW5uZXJJY29uXCJcclxuICAgICAgICAgIGFsdD1cImJhbm5lciBpY29uXCJcclxuICAgICAgICAgIHNyYz17YmFubmVySWNvbjZ9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgIHN4PXtzdHlsZXMuYmFubmVySWNvbjd9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiYW5uZXJJY29uXCJcclxuICAgICAgICAgIGFsdD1cImJhbm5lciBpY29uXCJcclxuICAgICAgICAgIHNyYz17YmFubmVySWNvbjd9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPEltYWdlIHN4PXtzdHlsZXMubG9nb30gc3JjPXtsb2dvSW1hZ2V9IGFsdD1cImxvZ28gaW1hZ2VcIiAvPlxyXG4gICAgICAgIDxIZWFkaW5nIGFzPVwiaDJcIj5BdXRvbWF0ZSB5b3VyIHRyYWRpbmcgd2l0aCBlYXNlLi4uPC9IZWFkaW5nPlxyXG4gICAgICAgIDxJbWFnZSBzcmM9e2Jhbm5lckltYWdlfSBzeD17c3R5bGVzLmJhbm5lckltYWdlfSBhbHQ9XCJiYW5uZXIgbW9jXCIgLz5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFubmVyO1xyXG5cclxuY29uc3QgYmFubmVyQW5pbTEgPSBrZXlmcmFtZXNgXHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAxLCAwLCAwZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICAzMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNWRlZyk7XHJcbiAgICB9XHJcblxyXG4gICAgNjAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDEsIDAsIDAsIDBkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgIDgwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA1ZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDEsIDAsIDBkZWcpO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgYmFubmVyQW5pbTIgPSBrZXlmcmFtZXNgXHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgdHJhbnNsYXRlWCgwKSByb3RhdGUoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgMzAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzBweCkgdHJhbnNsYXRlWCgzMHB4KSByb3RhdGUoMTVkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgNTAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTBweCkgdHJhbnNsYXRlWCg1MHB4KSByb3RhdGUoNDVkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcclxuICAgIH1cclxuXHJcbiAgICA4MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHB4KSB0cmFuc2xhdGVYKDMwcHgpIHJvdGF0ZSgxNWRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgdHJhbnNsYXRlWCgwKSByb3RhdGUoMCk7XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IGJhbm5lckFuaW0zID0ga2V5ZnJhbWVzYFxyXG4gICAgMCUsXHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSB0cmFuc2xhdGVZKDApIHJvdGF0ZSgwZGVnKSB0cmFuc2xhdGVaKDBweCkgdHJhbnNsYXRlWCgwKTtcclxuICAgIH1cclxuXHJcbiAgICA1MCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZVooMjBweCkgdHJhbnNsYXRlWSgyMHB4KSB0cmFuc2xhdGVYKDIwcHgpO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGJhbm5lcjoge1xyXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI0Y5RkJGRCcsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgcHQ6IFsnMTEwcHgnLCBudWxsLCBudWxsLCBudWxsLCAnMTMwcHgnXSxcclxuICAgIGgyOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbJzI4cHgnLCBudWxsLCBudWxsLCAnMzJweCcsICczOHB4JywgJzQ4cHgnLCAnNjRweCddLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjI1LFxyXG4gICAgICBjb2xvcjogJyMwMjA3M0UnLFxyXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIG1heFdpZHRoOiBbJzEwMCUnLCBudWxsLCBudWxsLCAnNTUlJywgJzUwMHB4JywgJzY0MHB4JywgJzg1MXB4J10sXHJcbiAgICAgIG14OiAnYXV0bycsXHJcbiAgICAgIG10OiAnMzBweCcsXHJcbiAgICAgIG1iOiBbJzQwcHgnLCBudWxsLCBudWxsLCAnNjVweCddLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGxvZ286IHtcclxuICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gICAgbXg6ICdhdXRvJyxcclxuICAgIGJveFNoYWRvdzogJzBweCAxNXB4IDM1cHggcmdiYSg2NSwgMTA0LCAxMzksIDAuMTIpJyxcclxuICB9LFxyXG4gIGJhbm5lckltYWdlOiB7XHJcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgbXg6ICdhdXRvJyxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgbWF4V2lkdGg6IFsnMTAwJScsIG51bGwsIG51bGwsICc4MCUnLCBudWxsLCAnMTAwJSddLFxyXG4gIH0sXHJcbiAgY29udGFpbmVyOiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICcuYmFubmVySWNvbic6IHtcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIGRpc3BsYXk6IFsnbm9uZScsIG51bGwsIG51bGwsIG51bGwsICdibG9jayddLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJhbm5lckljb24xOiB7XHJcbiAgICB0b3A6ICcxMCUnLFxyXG4gICAgbGVmdDogJzEwJScsXHJcbiAgICBhbmltYXRpb246IGAke2Jhbm5lckFuaW0yfSA4cyBsaW5lYXIgaW5maW5pdGVgLFxyXG4gIH0sXHJcbiAgYmFubmVySWNvbjI6IHtcclxuICAgIHRvcDogJzEwJScsXHJcbiAgICByaWdodDogJzEwJScsXHJcbiAgICBhbmltYXRpb246IGAke2Jhbm5lckFuaW0yfSA4cyBsaW5lYXIgaW5maW5pdGVgLFxyXG4gIH0sXHJcbiAgYmFubmVySWNvbjM6IHtcclxuICAgIGJvdHRvbTogJzQwcHgnLFxyXG4gICAgcmlnaHQ6ICctMTIwcHgnLFxyXG4gICAgYW5pbWF0aW9uOiBgJHtiYW5uZXJBbmltMX0gNXMgZWFzZS1vdXQgaW5maW5pdGVgLFxyXG4gIH0sXHJcbiAgYmFubmVySWNvbjQ6IHtcclxuICAgIGJvdHRvbTogJzEzMHB4JyxcclxuICAgIGxlZnQ6ICctMTIwcHgnLFxyXG4gICAgYW5pbWF0aW9uOiBgJHtiYW5uZXJBbmltMX0gNXMgZWFzZS1vdXQgaW5maW5pdGVgLFxyXG4gIH0sXHJcbiAgYmFubmVySWNvbjU6IHtcclxuICAgIGJvdHRvbTogJzUwJScsXHJcbiAgICBsZWZ0OiAnMTUlJyxcclxuICB9LFxyXG4gIGJhbm5lckljb242OiB7XHJcbiAgICBib3R0b206ICctNjVweCcsXHJcbiAgICBsZWZ0OiAnMHB4JyxcclxuICAgIGFuaW1hdGlvbjogYCR7YmFubmVyQW5pbTN9IDlzIGxpbmVhciBpbmZpbml0ZWAsXHJcbiAgfSxcclxuICBiYW5uZXJJY29uNzoge1xyXG4gICAgYm90dG9tOiAnMzAlJyxcclxuICAgIHJpZ2h0OiAnMCUnLFxyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgQm94LCBHcmlkIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgTWFzb25yeSBmcm9tICdyZWFjdC1tYXNvbnJ5LWNvbXBvbmVudCc7XHJcbmltcG9ydCBCbG9ja1RpdGxlIGZyb20gJ2NvbXBvbmVudHMvYmxvY2stdGl0bGUnO1xyXG5pbXBvcnQgQmxvZ0NhcmQgZnJvbSAnY29tcG9uZW50cy9jYXJkcy9ibG9nLWNhcmQnO1xyXG5cclxuaW1wb3J0IGJsb2dJbWFnZTEgZnJvbSAnYXNzZXRzL2Jsb2ctMS0xLnBuZyc7XHJcbmltcG9ydCBibG9nSW1hZ2UyIGZyb20gJ2Fzc2V0cy9ibG9nLTEtMi5wbmcnO1xyXG5pbXBvcnQgYmxvZ0ltYWdlMyBmcm9tICdhc3NldHMvYmxvZy0xLTMucG5nJztcclxuaW1wb3J0IGJsb2dJbWFnZTQgZnJvbSAnYXNzZXRzL2Jsb2ctMS00LnBuZyc7XHJcblxyXG5jb25zdCBCTE9HX0RBVEEgPSBbXHJcbiAge1xyXG4gICAgaW1hZ2U6IGJsb2dJbWFnZTEsXHJcbiAgICB0aXRsZTogJ0hvdyB0byB3b3JrIHdpdGggcHJvdG90eXBlIGRlc2lnbiB3aXRoIGFkb2JlIHhkIGZlYXR1cmluZyB0b29scycsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgJ1RoZSAyMDE5IElubm92YXRpb24gYnkgRGVzaWduIEF3YXJkcyBob25vciB0aGUgZGVzaWduZXJzIGFuZCBidXNpbmVzc2VzIHNvbHZpbmcgdGhlIHByb2JsZW1zIG9mIHRvZGF5IGFuZCB0b21vcnJvdy4gSXQgaXMgb25lIG9mIHRoZSBtb3N0IHNvdWdodC1hZnRlciBkZXNpZ24nLFxyXG4gICAgcGF0aDogJy8nLFxyXG4gICAgbGlua0xhYmVsOiAnTGVhcm4gTW9yZScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogbnVsbCxcclxuICAgIHRpdGxlOlxyXG4gICAgICAnQW50aWJpYXMgcmVjZWl2ZXMgaG9ub3JhYmxlIGdpZnQgbWVudGlvbiBhdCBGYXN0IENvbXBhbnnigJlzIG1vc3QgSW5ub3ZhdGlvbiBieSBEZXNpZ24gQXdhcmRzJyxcclxuICAgIGRlc2NyaXB0aW9uOiBudWxsLFxyXG4gICAgcGF0aDogJy8nLFxyXG4gICAgbGlua0xhYmVsOiBudWxsLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6IGJsb2dJbWFnZTMsXHJcbiAgICB0aXRsZTogJ011bHRpcGxlIHRhc2sgd2lyZWZyYW1pbmcgd2l0aCB0ZWFtIG1hbmFnZW1lbnQgcGVyZm9ybSBiZXR0ZXInLFxyXG4gICAgZGVzY3JpcHRpb246IG51bGwsXHJcbiAgICBwYXRoOiAnLycsXHJcbiAgICBsaW5rTGFiZWw6IG51bGwsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogYmxvZ0ltYWdlMixcclxuICAgIHRpdGxlOiAnTXVsdGlwbGUgYXJ0IGJvYXJkIHByb3RvdHlwZSB3aXRoIEZpZ21hJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnQmV5b25kIGxhdW5jaGVkIGFudGliaWFzLCBhIENocm9tZSBleHRlbnNpb24gdGhhdCByZXBsYWNlcyBMaW5rZWRJbiBwcm9maWxlIHBob3RvcycsXHJcbiAgICBwYXRoOiAnLycsXHJcbiAgICBsaW5rTGFiZWw6ICdMZWFybiBNb3JlJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiBibG9nSW1hZ2U0LFxyXG4gICAgdGl0bGU6XHJcbiAgICAgICdUZWFtIHByZXNlbnRhdGlvbiB3aXRoIGxhdGVzdCB1c2VyIGludGVyZmFjZSAmIGV4cGVyaWVuY2UgcmVhY2ggbW9yZScsXHJcbiAgICBkZXNjcmlwdGlvbjogbnVsbCxcclxuICAgIHBhdGg6ICcvJyxcclxuICAgIGxpbmtMYWJlbDogbnVsbCxcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgbWFzb25yeU9wdGlvbnMgPSB7XHJcbiAgdHJhbnNpdGlvbkR1cmF0aW9uOiAwLFxyXG59O1xyXG5cclxuY29uc3QgQmxvZ3MgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggYXM9XCJzZWN0aW9uXCIgaWQ9XCJuZXdzXCIgc3g9e3N0eWxlcy5ibG9nc30+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPEJsb2NrVGl0bGVcclxuICAgICAgICAgIHRpdGxlPVwiUG9wdWxhciBibG9nIHBvc3Qgd2UgdXBkYXRlZFwiXHJcbiAgICAgICAgICB0ZXh0PVwiVXBkZXRlIG5ld3NmZWVkIGJsb2dcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEJveCBhcz17TWFzb25yeX0gb3B0aW9ucz17bWFzb25yeU9wdGlvbnN9IHN4PXtzdHlsZXMuYmxvZ1dyYXBwZXJ9PlxyXG4gICAgICAgICAge0JMT0dfREFUQS5tYXAoXHJcbiAgICAgICAgICAgICh7IGltYWdlLCB0aXRsZSwgZGVzY3JpcHRpb24sIHBhdGgsIGxpbmtMYWJlbCB9LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxCbG9nQ2FyZFxyXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgIGltYWdlPXtpbWFnZX1cclxuICAgICAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgIHBhdGg9e3BhdGh9XHJcbiAgICAgICAgICAgICAgICBsaW5rTGFiZWw9e2xpbmtMYWJlbH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9ncztcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBibG9nczoge1xyXG4gICAgcHQ6IFsnODBweCcsIG51bGwsIG51bGwsIG51bGwsICc4MHB4JywgbnVsbCwgJzEwMHB4J10sXHJcbiAgICBwYjogWyc0MHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzE0MHB4JywgbnVsbCwgJzEwMHB4J10sXHJcbiAgfSxcclxuICBibG9nV3JhcHBlcjoge1xyXG4gICAgbXg6ICctMTVweCcsXHJcbiAgfSxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm94LCBDb250YWluZXIsIEZsZXgsIFRleHQsIEhlYWRpbmcsIEltYWdlIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnY29tcG9uZW50cy9saW5rJztcclxuXHJcbmltcG9ydCBjYWxsSW1hZ2UgZnJvbSAnYXNzZXRzL2NhbGwtaW1hZ2UucG5nJztcclxuXHJcbmNvbnN0IENhbGxUb0FjdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBhcz1cInNlY3Rpb25cIiBzeD17c3R5bGVzLmNhbGxUb0FjdGlvbn0+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPEZsZXggc3g9e3N0eWxlcy5mbGV4fT5cclxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgPFRleHQgYXM9XCJzcGFuXCI+QmVoaW5kIHRoZSBvdXIgdGVjaG5vbG9neS4uPC9UZXh0PlxyXG4gICAgICAgICAgICA8SGVhZGluZyBhcz1cImgzXCI+XHJcbiAgICAgICAgICAgICAgRnhib3QzNjAgdGVjaC1zdGFjayAmIHRlY2hub2xvZ3lcclxuICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICA8VGV4dCBhcz1cInBcIj5cclxuICAgICAgICAgICAgICBHZXQgeW91ciBiZXN0IGF1dG9tYXRlZCB0cmFkaW5nIEJvdCBkZWxpdmVyZWQgdG8geW91IG9uIFxyXG4gICAgICAgICAgICAgIE10NCBhbmQgTXQ1IHRyYWRpbmcgdGVjaG5vbG9naWVzXHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPExpbmsgcGF0aD1cIiNcIiBzeD17c3R5bGVzLmJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgRXhwbG9yZSBNb3JlXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLmltYWdlc30+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e2NhbGxJbWFnZX0gYWx0PVwiY2FsbCBpbWFnZVwiIC8+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0ZsZXg+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbGxUb0FjdGlvbjtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBjYWxsVG9BY3Rpb246IHtcclxuICAgIG10OiBbJy05MHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzAnXSxcclxuICAgIHB5OiBbJzUwcHgnLCBudWxsLCBudWxsLCBudWxsLCAnMTEwcHgnLCBudWxsLCAnMTQwcHgnXSxcclxuICB9LFxyXG4gIGZsZXg6IHtcclxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgfSxcclxuICBjb250ZW50OiB7XHJcbiAgICBmbGV4OiBbJzAgMCAxMDAlJywgbnVsbCwgbnVsbCwgbnVsbCwgJzAgMCAzOC41JSddLFxyXG4gICAgdGV4dEFsaWduOiBbJ2NlbnRlcicsIG51bGwsIG51bGwsIG51bGwsICdsZWZ0J10sXHJcbiAgICBwdDogWyc4MHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzAnXSxcclxuICAgIG1heFdpZHRoOiBbJzEwMCUnLCBudWxsLCBudWxsLCAnODAlJywgJzEwMCUnXSxcclxuICAgIG14OiBbJ2F1dG8nLCBudWxsLCBudWxsLCBudWxsLCAnMCddLFxyXG4gICAgbWI6IFsnMzBweCcsIG51bGwsIG51bGwsIG51bGwsICcwJ10sXHJcbiAgICBzcGFuOiB7XHJcbiAgICAgIGZvbnRTaXplOiAnMThweCcsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgICAgY29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgbGluZUhlaWdodDogMSxcclxuICAgIH0sXHJcbiAgICBoMzoge1xyXG4gICAgICBjb2xvcjogJyMwRjIxMzcnLFxyXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICAgIGZvbnRTaXplOiBbJzIzcHgnLCBudWxsLCBudWxsLCBudWxsLCAnMzBweCcsICczNnB4JywgJzQ0cHgnXSxcclxuICAgICAgbWF4V2lkdGg6IFsnMTAwJScsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICc5MCUnLCAnMTAwJSddLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjM2LFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLTEuNXB4JyxcclxuICAgICAgbXQ6ICcyMHB4JyxcclxuICAgICAgbWI6ICczMHB4JyxcclxuICAgIH0sXHJcbiAgICBwOiB7XHJcbiAgICAgIGNvbG9yOiAnIzAyMDczRScsXHJcbiAgICAgIGZvbnRTaXplOiBbJzE2cHgnLCBudWxsLCBudWxsLCAnMjBweCddLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBbJzInLCBudWxsLCBudWxsLCAyLjMzXSxcclxuICAgICAgbWI6ICczMHB4JyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBidXR0b246IHtcclxuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDIwNzNFJyxcclxuICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gICAgZm9udFNpemU6ICcxNnB4JyxcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgIHA6ICc2LjVweCAxOXB4JyxcclxuICAgIGxldHRlclNwYWNpbmc6ICctMC4xNnB4JyxcclxuICAgIHRyYW5zaXRpb246ICdhbGwgNTAwbXMgZWFzZScsXHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgb3BhY2l0eTogMC44LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGltYWdlczoge1xyXG4gICAgZmxleDogWycwIDAgMTAwJScsIG51bGwsIG51bGwsIG51bGwsICcwIDAgNjEuNSUnXSxcclxuICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb3gsIENvbnRhaW5lciwgRmxleCwgVGV4dCwgSGVhZGluZyB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ2NvbXBvbmVudHMvbGluayc7XHJcbmltcG9ydCBCbG9ja1RpdGxlIGZyb20gJ2NvbXBvbmVudHMvYmxvY2stdGl0bGUnO1xyXG5pbXBvcnQgQWNjb3JkaW9uIGZyb20gJ2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbic7XHJcblxyXG5jb25zdCBhY2NvcmRpb25EYXRhID0gW1xyXG4gIHtcclxuICAgIGlzRXhwYW5kZWQ6IGZhbHNlLFxyXG4gICAgdGl0bGU6ICdIb3cgbXVjaCBkb2VzIGl0IGNvc3QgdG8gYmUgYSBjcmVkaXQgY2FyZCBtZXJjaGFudD8nLFxyXG4gICAgY29udGVudHM6IChcclxuICAgICAgPGRpdj5cclxuICAgICAgICBGb3Igb3VyIHJlY2VudCB0cmlwIHRvIFMuQS4gSSBib29rZWQgc2V2ZXJhbCBhY2NvbW1vZGF0aW9uIHRocnUgU0FcclxuICAgICAgICBQbGFjZXMuIEkganVzdCB3YW50ZWQgdG8gdGVsbCB5b3UgdGhhdCBldmVyeXRoaW5nIHdvcmtlZCBvdXQgcGVyZmVjdGx5XHJcbiAgICAgICAgd2l0aCBhbGwgdGhlIGJvb2tpbmdzIGFuZCBhbHNvIHlvdXIgYm9va2luZyB3YXMgdmVyeSBxdWljayBhbmRcclxuICAgICAgICBwcm9mZXNzaW9uYWwuIEkgaG9wZSBJIGhhdmUgdGhlIG9wcG9ydHVuaXR5IHRvIHJlLXZpc2l0IFNvdXRoIEFmcmljYVxyXG4gICAgICAgIHNvb24sIEkgd2lsbCB0aGVuIG1ha2UgbXkgYm9va2luZ3Mgd2l0aCB5b3VyIGNvbXBhbnkgYWdhaW4uIEkgd2lsbCBhbHNvXHJcbiAgICAgICAgcmVjb21tZW5kXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlzRXhwYW5kZWQ6IHRydWUsXHJcbiAgICB0aXRsZTogJ0hvdyBjYW4gSSBvcGVuIGEgbWVyY2hhbnQgYWNjb3VudD8nLFxyXG4gICAgY29udGVudHM6IChcclxuICAgICAgPGRpdj5cclxuICAgICAgICBGb3Igb3VyIHJlY2VudCB0cmlwIHRvIFMuQS4gSSBib29rZWQgc2V2ZXJhbCBhY2NvbW1vZGF0aW9uIHRocnUgU0FcclxuICAgICAgICBQbGFjZXMuIEkganVzdCB3YW50ZWQgdG8gdGVsbCB5b3UgdGhhdCBldmVyeXRoaW5nIHdvcmtlZCBvdXQgcGVyZmVjdGx5XHJcbiAgICAgICAgd2l0aCBhbGwgdGhlIGJvb2tpbmdzIGFuZCBhbHNvIHlvdXIgYm9va2luZyB3YXMgdmVyeSBxdWljayBhbmRcclxuICAgICAgICBwcm9mZXNzaW9uYWwuIEkgaG9wZSBJIGhhdmUgdGhlIG9wcG9ydHVuaXR5IHRvIHJlLXZpc2l0IFNvdXRoIEFmcmljYVxyXG4gICAgICAgIHNvb24sIEkgd2lsbCB0aGVuIG1ha2UgbXkgYm9va2luZ3Mgd2l0aCB5b3VyIGNvbXBhbnkgYWdhaW4uIEkgd2lsbCBhbHNvXHJcbiAgICAgICAgcmVjb21tZW5kXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlzRXhwYW5kZWQ6IGZhbHNlLFxyXG4gICAgdGl0bGU6ICdIb3cgbG9uZyBkb2VzIHRoZSBhcHBsaWNhdGlvbiB0YWtlPycsXHJcbiAgICBjb250ZW50czogKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIEZvciBvdXIgcmVjZW50IHRyaXAgdG8gUy5BLiBJIGJvb2tlZCBzZXZlcmFsIGFjY29tbW9kYXRpb24gdGhydSBTQVxyXG4gICAgICAgIFBsYWNlcy4gSSBqdXN0IHdhbnRlZCB0byB0ZWxsIHlvdSB0aGF0IGV2ZXJ5dGhpbmcgd29ya2VkIG91dCBwZXJmZWN0bHlcclxuICAgICAgICB3aXRoIGFsbCB0aGUgYm9va2luZ3MgYW5kIGFsc28geW91ciBib29raW5nIHdhcyB2ZXJ5IHF1aWNrIGFuZFxyXG4gICAgICAgIHByb2Zlc3Npb25hbC4gSSBob3BlIEkgaGF2ZSB0aGUgb3Bwb3J0dW5pdHkgdG8gcmUtdmlzaXQgU291dGggQWZyaWNhXHJcbiAgICAgICAgc29vbiwgSSB3aWxsIHRoZW4gbWFrZSBteSBib29raW5ncyB3aXRoIHlvdXIgY29tcGFueSBhZ2Fpbi4gSSB3aWxsIGFsc29cclxuICAgICAgICByZWNvbW1lbmRcclxuICAgICAgPC9kaXY+XHJcbiAgICApLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaXNFeHBhbmRlZDogZmFsc2UsXHJcbiAgICB0aXRsZTogJ0NhbiBJIG1ha2UgcGF5bWVudCBvdXRzaWRlIG9mIEhvbmcgS29uZz8nLFxyXG4gICAgY29udGVudHM6IChcclxuICAgICAgPGRpdj5cclxuICAgICAgICBGb3Igb3VyIHJlY2VudCB0cmlwIHRvIFMuQS4gSSBib29rZWQgc2V2ZXJhbCBhY2NvbW1vZGF0aW9uIHRocnUgU0FcclxuICAgICAgICBQbGFjZXMuIEkganVzdCB3YW50ZWQgdG8gdGVsbCB5b3UgdGhhdCBldmVyeXRoaW5nIHdvcmtlZCBvdXQgcGVyZmVjdGx5XHJcbiAgICAgICAgd2l0aCBhbGwgdGhlIGJvb2tpbmdzIGFuZCBhbHNvIHlvdXIgYm9va2luZyB3YXMgdmVyeSBxdWljayBhbmRcclxuICAgICAgICBwcm9mZXNzaW9uYWwuIEkgaG9wZSBJIGhhdmUgdGhlIG9wcG9ydHVuaXR5IHRvIHJlLXZpc2l0IFNvdXRoIEFmcmljYVxyXG4gICAgICAgIHNvb24sIEkgd2lsbCB0aGVuIG1ha2UgbXkgYm9va2luZ3Mgd2l0aCB5b3VyIGNvbXBhbnkgYWdhaW4uIEkgd2lsbCBhbHNvXHJcbiAgICAgICAgcmVjb21tZW5kXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlzRXhwYW5kZWQ6IGZhbHNlLFxyXG4gICAgdGl0bGU6ICdIb3cgZG8gSSBnZXQgdGhlIHBheW1lbnQgY29tcGxldGU/JyxcclxuICAgIGNvbnRlbnRzOiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgRm9yIG91ciByZWNlbnQgdHJpcCB0byBTLkEuIEkgYm9va2VkIHNldmVyYWwgYWNjb21tb2RhdGlvbiB0aHJ1IFNBXHJcbiAgICAgICAgUGxhY2VzLiBJIGp1c3Qgd2FudGVkIHRvIHRlbGwgeW91IHRoYXQgZXZlcnl0aGluZyB3b3JrZWQgb3V0IHBlcmZlY3RseVxyXG4gICAgICAgIHdpdGggYWxsIHRoZSBib29raW5ncyBhbmQgYWxzbyB5b3VyIGJvb2tpbmcgd2FzIHZlcnkgcXVpY2sgYW5kXHJcbiAgICAgICAgcHJvZmVzc2lvbmFsLiBJIGhvcGUgSSBoYXZlIHRoZSBvcHBvcnR1bml0eSB0byByZS12aXNpdCBTb3V0aCBBZnJpY2FcclxuICAgICAgICBzb29uLCBJIHdpbGwgdGhlbiBtYWtlIG15IGJvb2tpbmdzIHdpdGggeW91ciBjb21wYW55IGFnYWluLiBJIHdpbGwgYWxzb1xyXG4gICAgICAgIHJlY29tbWVuZFxyXG4gICAgICA8L2Rpdj5cclxuICAgICksXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IEZBUSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBhcz1cInNlY3Rpb25cIj5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8QmxvY2tUaXRsZVxyXG4gICAgICAgICAgdGl0bGU9XCJGcmVxdWVudGx5IEFzayBRdWVzdGlvblwiXHJcbiAgICAgICAgICB0ZXh0PVwiQXNrIHlvdXIgcXVlc3Rpb24gYW5kIG1lZXRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEZsZXggc3g9e3N0eWxlcy5mbGV4fT5cclxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5mYXFXcmFwcGVyfT5cclxuICAgICAgICAgICAgPEFjY29yZGlvbiBpdGVtcz17YWNjb3JkaW9uRGF0YX0gLz5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICA8SGVhZGluZyBhcz1cImgzXCI+XHJcbiAgICAgICAgICAgICAgRG8geW91IGhhdmUgYW55IHF1ZXNpdG9uPyBQbGVhc2UgYXNrIGhlcmUgd2UgcmVhZHkgdG8gc3VwcG9ydFxyXG4gICAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgIDxUZXh0IGFzPVwicFwiPlxyXG4gICAgICAgICAgICAgIElmIHlvdXIgcXVlc3Rpb24gaXMgbm90IGxpc3QgaGVyZSwgcGxlYXNlIGZlZWwgZnJlZSB0byBtYWtlIGFcclxuICAgICAgICAgICAgICBtYW51YWwgc3VwcG9ydC5cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICA8TGluayBzeD17c3R5bGVzLmFza0J1dHRvbn0gcGF0aD1cIiNcIj5cclxuICAgICAgICAgICAgICBBc2sgeW91ciBRdWVzdGlvblxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0ZsZXg+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZBUTtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBmbGV4OiB7XHJcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAgZmxleERpcmVjdGlvbjogWydjb2x1bW4nLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAncm93LXJldmVyc2UnXSxcclxuICAgIHBiOiBbJzcwcHgnLCBudWxsLCBudWxsLCBudWxsLCAnOTBweCcsIG51bGwsICcxMzBweCddLFxyXG4gIH0sXHJcbiAgY29udGVudDoge1xyXG4gICAgZmxleDogWycwIDAgMTAwJScsIG51bGwsIG51bGwsIG51bGwsICcwIDAgMzMuMzMzJSddLFxyXG4gICAgbWF4V2lkdGg6IFsnMTAwJScsIG51bGwsIG51bGwsICc0NTBweCcsICcxMDAlJ10sXHJcbiAgICBteDogWydhdXRvJywgbnVsbCwgbnVsbCwgbnVsbCwgJzAnXSxcclxuICAgIG1iOiBbJzBweCcsIG51bGwsIG51bGwsIG51bGwsICcwJ10sXHJcbiAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJ2xlZnQnXSxcclxuICAgIG10OiBbJzQwcHgnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnMCddLFxyXG4gICAgaDM6IHtcclxuICAgICAgZm9udFNpemU6IFsnMjNweCcsIG51bGwsIG51bGwsIG51bGwsICcyNHB4J10sXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjUsIG51bGwsIG51bGwsIG51bGwsIDEuNjddLFxyXG4gICAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLTEuNXB4JyxcclxuICAgICAgbXQ6ICctNXB4JyxcclxuICAgICAgcHI6IFsnMCcsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICczMHB4J10sXHJcbiAgICB9LFxyXG4gICAgcDoge1xyXG4gICAgICBmb250U2l6ZTogJzE2cHgnLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjg3LFxyXG4gICAgICBjb2xvcjogJyMzNDNENDgnLFxyXG4gICAgICBvcGFjaXR5OiAwLjcsXHJcbiAgICAgIG10OiAnMTBweCcsXHJcbiAgICAgIHByOiBbJzAnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnODBweCddLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGFza0J1dHRvbjoge1xyXG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMwMjA3M0UnLFxyXG4gICAgY29sb3I6ICcjZmZmJyxcclxuICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICBmb250U2l6ZTogJzE2cHgnLFxyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgcDogJzYuNXB4IDE5cHgnLFxyXG4gICAgbGV0dGVyU3BhY2luZzogJy0wLjE2cHgnLFxyXG4gICAgbXQ6ICcyNXB4JyxcclxuICAgIHRyYW5zaXRpb246ICdhbGwgNTAwbXMgZWFzZScsXHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgb3BhY2l0eTogMC44LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGZhcVdyYXBwZXI6IHtcclxuICAgIGZsZXg6IFsnMCAwIDEwMCUnLCBudWxsLCBudWxsLCBudWxsLCAnMCAwIDY2LjY2NiUnXSxcclxuICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCwgQ29udGFpbmVyLCBCdXR0b24gfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xyXG5pbXBvcnQgQmxvY2tUaXRsZSBmcm9tICdjb21wb25lbnRzL2Jsb2NrLXRpdGxlJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ2NvbXBvbmVudHMvaW1hZ2UnO1xyXG5pbXBvcnQgeyBBaUZpbGxEb2xsYXJDaXJjbGUsIEFpRmlsbFBpZUNoYXJ0IH0gZnJvbSAncmVhY3QtaWNvbnMvYWknO1xyXG5pbXBvcnQgeyBGYUJyaWVmY2FzZSwgRmFDb2cgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcbmltcG9ydCB0YWJJbWFnZTEgZnJvbSAnYXNzZXRzL3RhYi1pbWFnZS0xLnBuZyc7XHJcbmltcG9ydCBkb3RQYXR0ZXJuIGZyb20gJ2Fzc2V0cy9kb3QtcGF0dGVybi5zdmcnO1xyXG5cclxuY29uc3QgRmVhdHVyZWQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3RhYiwgc2V0VGFiXSA9IHVzZVN0YXRlKHtcclxuICAgIGFjdGl2ZTogJ2J1ZGdldCcsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRhYiA9ICh0YWIpID0+IHtcclxuICAgIGlmICh0YWIgPT09ICdidWRnZXQnKSB7XHJcbiAgICAgIHNldFRhYih7XHJcbiAgICAgICAgLi4udGFiLFxyXG4gICAgICAgIGFjdGl2ZTogJ2J1ZGdldCcsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHRhYiA9PT0gJ2FkanVzdCcpIHtcclxuICAgICAgc2V0VGFiKHtcclxuICAgICAgICAuLi50YWIsXHJcbiAgICAgICAgYWN0aXZlOiAnYWRqdXN0JyxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGFiID09PSAncmVwb3J0Jykge1xyXG4gICAgICBzZXRUYWIoe1xyXG4gICAgICAgIC4uLnRhYixcclxuICAgICAgICBhY3RpdmU6ICdyZXBvcnQnLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmICh0YWIgPT09ICdjcmVhdGUnKSB7XHJcbiAgICAgIHNldFRhYih7XHJcbiAgICAgICAgLi4udGFiLFxyXG4gICAgICAgIGFjdGl2ZTogJ2NyZWF0ZScsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggYXM9XCJzZWN0aW9uXCIgc3g9e3N0eWxlcy5mZWF0dXJlZH0+XHJcbiAgICAgIDxDb250YWluZXIgc3g9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxCbG9ja1RpdGxlXHJcbiAgICAgICAgICB0aXRsZT1cIldoYXQgdGhlIGZlYXR1cmVzIG9mIHByb2R1Y3RcIlxyXG4gICAgICAgICAgdGV4dD1cIkludHJvZHVjaW5nIGFsbCBzY3JlZW4gZGV0YWlsc1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMudGFiQnV0dG9uVG9wV3JhcHBlcn0+XHJcbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMudGFiQnV0dG9uV3JhcHBlcn0+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVUYWIoJ2J1ZGdldCcpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7dGFiLmFjdGl2ZSA9PT0gJ2J1ZGdldCcgPyAnYWN0aXZlJyA6ICcnfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8QWlGaWxsRG9sbGFyQ2lyY2xlIC8+XHJcbiAgICAgICAgICAgICAgQnVkZ2V0IE92ZXJ2aWV3XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVGFiKCdhZGp1c3QnKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3RhYi5hY3RpdmUgPT09ICdhZGp1c3QnID8gJ2FjdGl2ZScgOiAnJ31gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEZhQ29nIC8+XHJcbiAgICAgICAgICAgICAgQ3JlYXRlICYgYWRqdXN0XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVGFiKCdyZXBvcnQnKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3RhYi5hY3RpdmUgPT09ICdyZXBvcnQnID8gJ2FjdGl2ZScgOiAnJ31gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEFpRmlsbFBpZUNoYXJ0IC8+XHJcbiAgICAgICAgICAgICAgVmlldyBSZXBvcnRzXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVGFiKCdjcmVhdGUnKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3RhYi5hY3RpdmUgPT09ICdjcmVhdGUnID8gJ2FjdGl2ZScgOiAnJ31gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEZhQnJpZWZjYXNlIC8+XHJcbiAgICAgICAgICAgICAgQ3JlYXRlICYgYWRqdXN0XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLnRhYkNvbnRlbnR9PlxyXG4gICAgICAgICAge3RhYi5hY3RpdmUgPT09ICdidWRnZXQnICYmIChcclxuICAgICAgICAgICAgPEltYWdlIHNyYz17dGFiSW1hZ2UxfSBhbHQ9XCJ0YWIgaW1hZ2VcIiBjbGFzc05hbWU9XCJ0YWJJbWFnZVwiIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge3RhYi5hY3RpdmUgPT09ICdjcmVhdGUnICYmIChcclxuICAgICAgICAgICAgPEltYWdlIHNyYz17dGFiSW1hZ2UxfSBhbHQ9XCJ0YWIgaW1hZ2VcIiBjbGFzc05hbWU9XCJ0YWJJbWFnZVwiIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge3RhYi5hY3RpdmUgPT09ICdhZGp1c3QnICYmIChcclxuICAgICAgICAgICAgPEltYWdlIHNyYz17dGFiSW1hZ2UxfSBhbHQ9XCJ0YWIgaW1hZ2VcIiBjbGFzc05hbWU9XCJ0YWJJbWFnZVwiIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge3RhYi5hY3RpdmUgPT09ICdyZXBvcnQnICYmIChcclxuICAgICAgICAgICAgPEltYWdlIHNyYz17dGFiSW1hZ2UxfSBhbHQ9XCJ0YWIgaW1hZ2VcIiBjbGFzc05hbWU9XCJ0YWJJbWFnZVwiIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlZDtcclxuY29uc3QgZmFkZUluID0ga2V5ZnJhbWVzYFxyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgZmVhdHVyZWQ6IHtcclxuICAgIHB0OiBbJzgwcHgnLCBudWxsLCBudWxsLCBudWxsLCAnODBweCcsIG51bGwsICcxMDBweCddLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI0Y5RkFGQycsXHJcbiAgfSxcclxuICBjb250YWluZXI6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgdG9wOiAnMTUwcHgnLFxyXG4gICAgbXQ6ICctMTUwcHgnLFxyXG4gIH0sXHJcbiAgdGFiQnV0dG9uVG9wV3JhcHBlcjoge1xyXG4gICAgb3ZlcmZsb3dZOiBbJ2hpZGRlbicsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICdpbmhlcml0J10sXHJcbiAgICBvdmVyZmxvd1g6IFsnYXV0bycsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICdpbmhlcml0J10sXHJcbiAgfSxcclxuICB0YWJCdXR0b25XcmFwcGVyOiB7XHJcbiAgICB3aWR0aDogWyc3MDBweCcsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICcxMDAlJ10sXHJcbiAgICBteDogWydhdXRvJywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJzAnXSxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkIHJnYmEoMSw3LDEzLC4xKScsXHJcbiAgICBtYjogJzM1cHgnLFxyXG4gICAgYnV0dG9uOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIHBiOiBbJzE1cHgnLCBudWxsLCBudWxsLCBudWxsLCAnMzVweCddLFxyXG4gICAgICBweDogWycxNXB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzMwcHgnXSxcclxuICAgICAgZmxleFNocmluazogJzAnLFxyXG4gICAgICBib3JkZXI6IDAsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsMCknLFxyXG4gICAgICBjb2xvcjogJyMwRjIxMzcnLFxyXG4gICAgICBmb250U2l6ZTogWycxNHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzE4cHgnXSxcclxuICAgICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCA1MDBtcyBlYXNlJyxcclxuICAgICAgc3ZnOiB7XHJcbiAgICAgICAgZm9udFNpemU6IFsnMThweCcsIG51bGwsIG51bGwsIG51bGwsICczMHB4J10sXHJcbiAgICAgICAgY29sb3I6ICcjQURCREQwJyxcclxuICAgICAgICBvcGFjaXR5OiAwLjcsXHJcbiAgICAgICAgbXI6ICcxNXB4JyxcclxuICAgICAgICB0cmFuc2l0aW9uOiAnYWxsIDUwMG1zIGVhc2UnLFxyXG4gICAgICB9LFxyXG4gICAgICAnJjpob3ZlciwgJi5hY3RpdmUnOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDAsMCwwKScsXHJcbiAgICAgICAgY29sb3I6ICcjMEYyMTM3JyxcclxuICAgICAgICBzdmc6IHtcclxuICAgICAgICAgIGNvbG9yOiAnIzBGMjEzNycsXHJcbiAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJyY6OmJlZm9yZSc6IHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEsMSknLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgICcmOjpiZWZvcmUnOiB7XHJcbiAgICAgICAgY29udGVudDogXCInJ1wiLFxyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIGJvdHRvbTogJy0ycHgnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwRjIxMzcnLFxyXG4gICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICBoZWlnaHQ6ICczcHgnLFxyXG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDAsMSknLFxyXG4gICAgICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gNTAwbXMgZWFzZScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdGFiQ29udGVudDoge1xyXG4gICAgbWluSGVpZ2h0OiBbJzE5MHB4JywgbnVsbCwgJzMwMHB4JywgJzM4NXB4JywgbnVsbCwgJzYwMHB4J10sXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICcmOjpiZWZvcmUnOiB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiJydcIixcclxuICAgICAgd2lkdGg6ICczMDJweCcsXHJcbiAgICAgIGhlaWdodDogJzM0N3B4JyxcclxuICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7ZG90UGF0dGVybn0pYCxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIGJvdHRvbTogJy0zMHB4JyxcclxuICAgICAgcmlnaHQ6ICctNDBweCcsXHJcbiAgICAgIGRpc3BsYXk6IFsnbm9uZScsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICdibG9jayddLFxyXG4gICAgfSxcclxuICAgICcudGFiSW1hZ2UnOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICBhbmltYXRpb246IGAke2ZhZGVJbn0gMC44cyBsaW5lYXJgLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb3gsIENvbnRhaW5lciwgRmxleCwgSW1hZ2UsIFRleHQsIEhlYWRpbmcgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBKYWNrcG90Q2FyZCBmcm9tICdjb21wb25lbnRzL2NhcmRzL2phY2twb3QtY2FyZCc7XHJcbmltcG9ydCBqYWNrcG90SW1hZ2UgZnJvbSAnYXNzZXRzL2phY2twb3QucG5nJztcclxuaW1wb3J0IGphY2twb3RJbWFnZTEgZnJvbSAnYXNzZXRzL2phY2twb3QtMS0xLnBuZyc7XHJcbmltcG9ydCBqYWNrcG90SW1hZ2UyIGZyb20gJ2Fzc2V0cy9qYWNrcG90LTEtMi5wbmcnO1xyXG5cclxuY29uc3QgSkFDS1BPVF9EQVRBID0gW1xyXG4gIHtcclxuICAgIGltYWdlOiBqYWNrcG90SW1hZ2UxLFxyXG4gICAgdGV4dDpcclxuICAgICAgJ1NtYXJ0IGF1dG9tYXRpb24gb2YgdHJhZGUgd2l0aCAyNC81IHNjYWxwaW5nIHN0cmF0ZWd5Li4uJyxcclxuICAgIGhlYWRpbmc6ICdTbWFydCBGZWF0dXJlcycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogamFja3BvdEltYWdlMixcclxuICAgIHRleHQ6XHJcbiAgICAgICdOZXZlciBsb3NzIHRyYWRlcyBhZ2Fpbiwgb25lLVRpbWUgcGF5bWVudCwgTGlmZS10aW1lIFJvYm90ICcsXHJcbiAgICBoZWFkaW5nOiAnVHJhZGUgU2VjdXJpdHkgJyxcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgSmFja3BvdCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBhcz1cInNlY3Rpb25cIiBzeD17c3R5bGVzLmphY2twb3R9PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxGbGV4IHN4PXtzdHlsZXMuZmxleH0+XHJcbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuaW1hZ2V9PlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtqYWNrcG90SW1hZ2V9IGFsdD1cImphY2twb3QgaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5oZWFkaW5nfT5cclxuICAgICAgICAgICAgICA8VGV4dCBhcz1cInNwYW5cIj5Db3JlIGZlYXR1cmVzPC9UZXh0PlxyXG4gICAgICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDNcIj5BSSB0cmFkaW5nIFJvYm90IHdpdGggZ3JlYXQgcmVzdWx0cy4uLjwvSGVhZGluZz5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5qYWNrcG90Q2FyZEJveH0+XHJcbiAgICAgICAgICAgICAge0pBQ0tQT1RfREFUQS5tYXAoKHsgaW1hZ2UsIGhlYWRpbmcsIHRleHQgfSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxKYWNrcG90Q2FyZFxyXG4gICAgICAgICAgICAgICAgICBpbWFnZT17aW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgIGhlYWRpbmc9e2hlYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgIHRleHQ9e3RleHR9XHJcbiAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvRmxleD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSmFja3BvdDtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBqYWNrcG90OiB7XHJcbiAgICBwdDogWyc2NXB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzg1cHgnLCBudWxsLCAnMTI1cHgnXSxcclxuICB9LFxyXG4gIGZsZXg6IHtcclxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgfSxcclxuICBpbWFnZToge1xyXG4gICAgZmxleDogWycwIDAgMTAwJScsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICcwIDAgNjIuNSUnXSxcclxuICAgIGltZzoge1xyXG4gICAgICBtYXhXaWR0aDogWycxMDAlJywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJ25vbmUnXSxcclxuICAgICAgZmxvYXQ6ICdyaWdodCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY29udGVudDoge1xyXG4gICAgZmxleDogWycwIDAgMTAwJScsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICcwIDAgMzcuNSUnXSxcclxuICB9LFxyXG4gIGhlYWRpbmc6IHtcclxuICAgIG1iOiAnMzBweCcsXHJcbiAgICBwdDogJzYwcHgnLFxyXG4gICAgdGV4dEFsaWduOiBbJ2NlbnRlcicsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICdsZWZ0J10sXHJcbiAgICBwbDogWycwJywgbnVsbCwgbnVsbCwgJzMwcHgnXSxcclxuICAgIG1heFdpZHRoOiBbJzgwJScsIG51bGwsIG51bGwsICcxMDAlJ10sXHJcbiAgICBteDogWydhdXRvJywgbnVsbCwgbnVsbCwgJzAnXSxcclxuICAgIHNwYW46IHtcclxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgZm9udFNpemU6ICcxOHB4JyxcclxuICAgICAgY29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxyXG4gICAgICBtYjogJzIwcHgnLFxyXG4gICAgfSxcclxuICAgIGgzOiB7XHJcbiAgICAgIGNvbG9yOiAnIzBGMjEzNycsXHJcbiAgICAgIGZvbnRTaXplOiBbJzIzcHgnLCBudWxsLCBudWxsLCBudWxsLCAnMzBweCcsICczNnB4JywgJzQ0cHgnXSxcclxuICAgICAgbWF4V2lkdGg6IFsnMTAwJScsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICc5MCUnLCAnMTAwJSddLFxyXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6ICctMS41cHgnLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjM2LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGphY2twb3RDYXJkQm94OiB7XHJcbiAgICBkaXNwbGF5OiBbJ2dyaWQnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnYmxvY2snXSxcclxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFsnMWZyJywgbnVsbCwgbnVsbCwgJzFmciAxZnInXSxcclxuICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xyXG5pbXBvcnQgeyBCb3gsIENvbnRhaW5lciwgR3JpZCwgQnV0dG9uLCBUZXh0IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgQmxvY2tUaXRsZSBmcm9tICdjb21wb25lbnRzL2Jsb2NrLXRpdGxlJztcclxuaW1wb3J0IFByaWNlQ2FyZCBmcm9tICdjb21wb25lbnRzL2NhcmRzL3ByaWNlLWNhcmQnO1xyXG5pbXBvcnQgcHJpY2VJY29uMSBmcm9tICdhc3NldHMvcHJpY2UtdXNlci0xLTEuc3ZnJztcclxuaW1wb3J0IHByaWNlSWNvbjIgZnJvbSAnYXNzZXRzL3ByaWNlLXVzZXItMS0yLnN2Zyc7XHJcblxyXG5jb25zdCBQUklDRV9NT05USExZX0RBVEEgPSBbXHJcbiAge1xyXG4gICAgcmVjb21tZW5kZWQ6IG51bGwsXHJcbiAgICB0aXRsZTogJ0ZvciBUZWFtIHBhY2snLFxyXG4gICAgaWNvbjogcHJpY2VJY29uMSxcclxuICAgIGFtb3VudDogJzI5Ljk5L21vJyxcclxuICAgIG9wdGlvbnM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHN0YXR1czogdHJ1ZSxcclxuICAgICAgICBsYWJlbDogJ1VsdGltYXRlIGFjY2VzcyB0byBhbGwgY291cnNlLCBleGVyY2lzZXMgYW5kIGFzc2Vzc21lbnRzJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHN0YXR1czogdHJ1ZSxcclxuICAgICAgICBsYWJlbDpcclxuICAgICAgICAgICdGcmVlIGFjY2VzcyBmb3IgYWxsIGtpbmQgb2YgZXhlcmNpc2UgY29ycmVjdGlvbnMgd2l0aCBkb3dubG9hZHMuJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHN0YXR1czogdHJ1ZSxcclxuICAgICAgICBsYWJlbDogJ1RvdGFsIGFzc2Vzc21lbnQgY29ycmVjdGlvbnMgd2l0aCBmcmVlIGRvd25sb2FkIGFjY2VzcyBzeXN0ZW0nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgc3RhdHVzOiBmYWxzZSxcclxuICAgICAgICBsYWJlbDogJ1VubGltaXRlZCBkb3dubG9hZCBvZiBjb3Vyc2VzIG9uIHRoZSBtb2JpbGUgYXBwIGNvbnRlbnRzJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHN0YXR1czogZmFsc2UsXHJcbiAgICAgICAgbGFiZWw6ICdEb3dubG9hZCBhbmQgcHJpbnQgY291cnNlcyBhbmQgZXhlcmNpc2VzIGluIFBERicsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcmVjb21tZW5kZWQ6ICdSZWNvbW1lbmRlZCcsXHJcbiAgICB0aXRsZTogJ0ZvciBPcmdhbml6YXRpb24gcGFjaycsXHJcbiAgICBpY29uOiBwcmljZUljb24yLFxyXG4gICAgYW1vdW50OiAnNDkuOTkvbW8nLFxyXG4gICAgb3B0aW9uczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgc3RhdHVzOiB0cnVlLFxyXG4gICAgICAgIGxhYmVsOiAnVWx0aW1hdGUgYWNjZXNzIHRvIGFsbCBjb3Vyc2UsIGV4ZXJjaXNlcyBhbmQgYXNzZXNzbWVudHMnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgc3RhdHVzOiB0cnVlLFxyXG4gICAgICAgIGxhYmVsOlxyXG4gICAgICAgICAgJ0ZyZWUgYWNjZXNzIGZvciBhbGwga2luZCBvZiBleGVyY2lzZSBjb3JyZWN0aW9ucyB3aXRoIGRvd25sb2Fkcy4nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgc3RhdHVzOiB0cnVlLFxyXG4gICAgICAgIGxhYmVsOiAnVG90YWwgYXNzZXNzbWVudCBjb3JyZWN0aW9ucyB3aXRoIGZyZWUgZG93bmxvYWQgYWNjZXNzIHN5c3RlbScsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBzdGF0dXM6IHRydWUsXHJcbiAgICAgICAgbGFiZWw6ICdVbmxpbWl0ZWQgZG93bmxvYWQgb2YgY291cnNlcyBvbiB0aGUgbW9iaWxlIGFwcCBjb250ZW50cycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBzdGF0dXM6IHRydWUsXHJcbiAgICAgICAgbGFiZWw6ICdEb3dubG9hZCBhbmQgcHJpbnQgY291cnNlcyBhbmQgZXhlcmNpc2VzIGluIFBERicsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBQUklDRV9ZRUFSTFlfREFUQSA9IFtcclxuICB7XHJcbiAgICByZWNvbW1lbmRlZDogbnVsbCxcclxuICAgIHRpdGxlOiAnRm9yIFRlYW0gcGFjaycsXHJcbiAgICBpY29uOiBwcmljZUljb24xLFxyXG4gICAgYW1vdW50OiAnOTkuOTkveXInLFxyXG4gICAgb3B0aW9uczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgc3RhdHVzOiB0cnVlLFxyXG4gICAgICAgIGxhYmVsOiAnVWx0aW1hdGUgYWNjZXNzIHRvIGFsbCBjb3Vyc2UsIGV4ZXJjaXNlcyBhbmQgYXNzZXNzbWVudHMnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgc3RhdHVzOiB0cnVlLFxyXG4gICAgICAgIGxhYmVsOlxyXG4gICAgICAgICAgJ0ZyZWUgYWNjZXNzIGZvciBhbGwga2luZCBvZiBleGVyY2lzZSBjb3JyZWN0aW9ucyB3aXRoIGRvd25sb2Fkcy4nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgc3RhdHVzOiB0cnVlLFxyXG4gICAgICAgIGxhYmVsOiAnVG90YWwgYXNzZXNzbWVudCBjb3JyZWN0aW9ucyB3aXRoIGZyZWUgZG93bmxvYWQgYWNjZXNzIHN5c3RlbScsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBzdGF0dXM6IGZhbHNlLFxyXG4gICAgICAgIGxhYmVsOiAnVW5saW1pdGVkIGRvd25sb2FkIG9mIGNvdXJzZXMgb24gdGhlIG1vYmlsZSBhcHAgY29udGVudHMnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgc3RhdHVzOiBmYWxzZSxcclxuICAgICAgICBsYWJlbDogJ0Rvd25sb2FkIGFuZCBwcmludCBjb3Vyc2VzIGFuZCBleGVyY2lzZXMgaW4gUERGJyxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICByZWNvbW1lbmRlZDogJ1JlY29tbWVuZGVkJyxcclxuICAgIHRpdGxlOiAnRm9yIE9yZ2FuaXphdGlvbiBwYWNrJyxcclxuICAgIGljb246IHByaWNlSWNvbjIsXHJcbiAgICBhbW91bnQ6ICcxOTkuOTkveXInLFxyXG4gICAgb3B0aW9uczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgc3RhdHVzOiB0cnVlLFxyXG4gICAgICAgIGxhYmVsOiAnVWx0aW1hdGUgYWNjZXNzIHRvIGFsbCBjb3Vyc2UsIGV4ZXJjaXNlcyBhbmQgYXNzZXNzbWVudHMnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgc3RhdHVzOiB0cnVlLFxyXG4gICAgICAgIGxhYmVsOlxyXG4gICAgICAgICAgJ0ZyZWUgYWNjZXNzIGZvciBhbGwga2luZCBvZiBleGVyY2lzZSBjb3JyZWN0aW9ucyB3aXRoIGRvd25sb2Fkcy4nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgc3RhdHVzOiB0cnVlLFxyXG4gICAgICAgIGxhYmVsOiAnVG90YWwgYXNzZXNzbWVudCBjb3JyZWN0aW9ucyB3aXRoIGZyZWUgZG93bmxvYWQgYWNjZXNzIHN5c3RlbScsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBzdGF0dXM6IHRydWUsXHJcbiAgICAgICAgbGFiZWw6ICdVbmxpbWl0ZWQgZG93bmxvYWQgb2YgY291cnNlcyBvbiB0aGUgbW9iaWxlIGFwcCBjb250ZW50cycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBzdGF0dXM6IHRydWUsXHJcbiAgICAgICAgbGFiZWw6ICdEb3dubG9hZCBhbmQgcHJpbnQgY291cnNlcyBhbmQgZXhlcmNpc2VzIGluIFBERicsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBQcmljaW5nID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwbGFuLCBzZXRQbGFuXSA9IHVzZVN0YXRlKHtcclxuICAgIGFjdGl2ZTogJ21vbnRobHknLFxyXG4gICAgcHJpY2luZ1BsYW46IFBSSUNFX01PTlRITFlfREFUQSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUGxhbiA9IChwbGFuKSA9PiB7XHJcbiAgICBpZiAocGxhbiA9PT0gJ21vbnRobHknKSB7XHJcbiAgICAgIHNldFBsYW4oe1xyXG4gICAgICAgIC4uLnBsYW4sXHJcbiAgICAgICAgYWN0aXZlOiAnbW9udGhseScsXHJcbiAgICAgICAgcHJpY2luZ1BsYW46IFBSSUNFX01PTlRITFlfREFUQSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAocGxhbiA9PT0gJ3llYXJseScpIHtcclxuICAgICAgc2V0UGxhbih7XHJcbiAgICAgICAgLi4ucGxhbixcclxuICAgICAgICBhY3RpdmU6ICd5ZWFybHknLFxyXG4gICAgICAgIHByaWNpbmdQbGFuOiBQUklDRV9ZRUFSTFlfREFUQSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBhcz1cInNlY3Rpb25cIiBpZD1cInByaWNpbmdcIiBzeD17c3R5bGVzLnByaWNpbmd9PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxCbG9ja1RpdGxlXHJcbiAgICAgICAgICB0aXRsZT1cIldoYXQgZGVhbCBzdWl0IHlvdSBwZXJmZWN0XCJcclxuICAgICAgICAgIHRleHQ9XCJNZWV0IG91ciBwcmljaW5nIHBsYW5cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmJ0bldyYXB9PlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQbGFuKCdtb250aGx5Jyl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cGxhbi5hY3RpdmUgPT09ICdtb250aGx5JyA/ICdhY3RpdmUnIDogJyd9YH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgTW9udGhseSBQbGFuXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUGxhbigneWVhcmx5Jyl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7cGxhbi5hY3RpdmUgPT09ICd5ZWFybHknID8gJ2FjdGl2ZScgOiAnJ31gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBBbm51YWwgUGxhblxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPEdyaWQgc3g9e3N0eWxlcy5ncmlkfT5cclxuICAgICAgICAgIHtwbGFuLnByaWNpbmdQbGFuLm1hcCgocHJpY2UsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxQcmljZUNhcmQgZGF0YT17cHJpY2V9IGtleT17YCR7cGxhbi5hY3RpdmV9LWNhcmQtLWtleSR7aW5kZXh9YH0gLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJpY2luZztcclxuXHJcbmNvbnN0IGZhZGVJbiA9IGtleWZyYW1lc2BcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5gO1xyXG5jb25zdCBmYWRlSW4yID0ga2V5ZnJhbWVzYFxyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBwcmljaW5nOiB7XHJcbiAgICBwdDogWycyMDBweCcsIG51bGwsIG51bGwsIG51bGwsICcyMDBweCcsIG51bGwsICcyNDBweCddLFxyXG4gICAgcGI6IFsnODBweCcsIG51bGwsIG51bGwsIG51bGwsICc4MHB4JywgJzEwMHB4JywgJzE0MHB4J10sXHJcbiAgfSxcclxuICBidG5XcmFwOiB7XHJcbiAgICB3aWR0aDogJzMwMnB4JyxcclxuICAgIGhlaWdodDogJzYwcHgnLFxyXG4gICAgbXQ6IFsnLTIwcHgnLCBudWxsLCBudWxsLCAnMHB4J10sXHJcbiAgICBtYjogWyc0MHB4JywgbnVsbCwgbnVsbCwgJzYwcHgnXSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNGN0Y4RkInLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgIGRpc3BsYXk6ICdncmlkJyxcclxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcxZnIgMWZyJyxcclxuICAgIHA6ICc3cHgnLFxyXG4gICAgbXg6ICdhdXRvJyxcclxuICAgIGJ1dHRvbjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLDApJyxcclxuICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgY29sb3I6ICcjMEYyMTM3JyxcclxuICAgICAgbGV0dGVyU3BhY2luZzogJy0wLjI0cHgnLFxyXG4gICAgICBmb250U2l6ZTogJzE2cHgnLFxyXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICBvdXRsaW5lOiAnbm9uZScsXHJcbiAgICAgIGZvbnRGYW1pbHk6ICdETSBTYW5zJyxcclxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCA1MDBtcyBlYXNlJyxcclxuICAgICAgJyYuYWN0aXZlJzoge1xyXG4gICAgICAgIGJveFNoYWRvdzogJzBweCAzcHggMy44cHggcmdiYSgzOCwgNzgsIDExOCwgMC4xKScsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICAgIH0sXHJcbiAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsMCknLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGdyaWQ6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBtYXhXaWR0aDogJzk2MHB4JyxcclxuICAgIG14OiBbJ2F1dG8nXSxcclxuICAgIGdyaWRHYXA6ICczMHB4JyxcclxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFsnMWZyJywgbnVsbCwgbnVsbCwgJzFmciAxZnInXSxcclxuICAgICcucHJpY2VDYXJkJzoge1xyXG4gICAgICAnLnByaWNlSGVhZGVyJzoge1xyXG4gICAgICAgIGFuaW1hdGlvbjogYCR7ZmFkZUlufSAwLjhzIGxpbmVhcmAsXHJcbiAgICAgIH0sXHJcbiAgICAgICd1bCA+IGxpJzoge1xyXG4gICAgICAgIGFuaW1hdGlvbjogYCR7ZmFkZUluMn0gMC43cyBsaW5lYXJgLFxyXG4gICAgICB9LFxyXG4gICAgICAnLnByaWNlQW1vdW50Jzoge1xyXG4gICAgICAgIGFuaW1hdGlvbjogYCR7ZmFkZUlufSAwLjlzIGxpbmVhcmAsXHJcbiAgICAgIH0sXHJcbiAgICAgICcucHJpY2VCdXR0b24nOiB7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBgJHtmYWRlSW4yfSAwLjdzIGxpbmVhcmAsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCwgQ29udGFpbmVyLCBHcmlkIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgQmxvY2tUaXRsZSBmcm9tICdjb21wb25lbnRzL2Jsb2NrLXRpdGxlJztcclxuaW1wb3J0IFNlcnZpY2VDYXJkIGZyb20gJ2NvbXBvbmVudHMvY2FyZHMvc2VydmljZS1jYXJkJztcclxuaW1wb3J0IHNlcnZpY2VJbWFnZTEgZnJvbSAnYXNzZXRzL3NlcnZpY2UtMS5wbmcnO1xyXG5pbXBvcnQgc2VydmljZUltYWdlMiBmcm9tICdhc3NldHMvc2VydmljZS0yLnBuZyc7XHJcbmltcG9ydCBzZXJ2aWNlSW1hZ2UzIGZyb20gJ2Fzc2V0cy9zZXJ2aWNlLTMucG5nJztcclxuaW1wb3J0IHNlcnZpY2VJbWFnZTQgZnJvbSAnYXNzZXRzL3NlcnZpY2UtNC5wbmcnO1xyXG5pbXBvcnQgc2VydmljZUltYWdlNSBmcm9tICdhc3NldHMvc2VydmljZS01LnBuZyc7XHJcbmltcG9ydCBzZXJ2aWNlSW1hZ2U2IGZyb20gJ2Fzc2V0cy9zZXJ2aWNlLTYucG5nJztcclxuXHJcbmNvbnN0IFNFUlZJQ0VTX0RBVEEgPSBbXHJcbiAge1xyXG4gICAgaW1hZ2U6IHNlcnZpY2VJbWFnZTEsXHJcbiAgICB0ZXh0OlxyXG4gICAgICAnVGFrZSBhIGNsb3NlciBsb29rIGF0IGV2ZXJ5dGhpbmcgeW914oCZbGwgbmVlZCB0byBrbm93IGFib3V0IGZvcmV4LCBpbmNsdWRpbmcgd2hhdCBpdCBpcywgaG93IHlvdSB0cmFkZSBpdCBhbmQgaG93IGxldmVyYWdlIGluIGZvcmV4IHdvcmtzLicsXHJcbiAgICBoZWFkaW5nOiAnSG93IGl0IHdvcmtzJyxcclxuICAgIHBhdGg6ICcjJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGltYWdlOiBzZXJ2aWNlSW1hZ2UyLFxyXG4gICAgdGV4dDpcclxuICAgICAgJ091ciB0b29scyBhbmQgcGxhdGZvcm1zIGhhdmUgY2xlYXIgYW5kIHNpbXBsZSBpbnN0cnVjdGlvbnMgYW5kIGFyZSBpbnR1aXRpdmVseSBlYXN5IHRvIG5hdmlnYXRlLicsXHJcbiAgICBoZWFkaW5nOiAnVHJhZGluZyBSb2JvdCB0b29scycsXHJcbiAgICBwYXRoOiAnIycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogc2VydmljZUltYWdlMyxcclxuICAgIHRleHQ6XHJcbiAgICAgICdmeGJvdCBtYWtlcyBpdCBlYXN5IGZvciBhbnlvbmUgdG8gc3RhcnQgdHJhZGluZywgdW5kZXJzdGFuZCByaXNrLCBhbmQgbWFrZSBiZXR0ZXIgdHJhZGluZyBkZWNpc2lvbnMuJyxcclxuICAgIGhlYWRpbmc6ICdDdXN0b21lci1maXJzdCB0cmFkaW5nIGV4cGVyaWVuY2UnLFxyXG4gICAgcGF0aDogJyMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6IHNlcnZpY2VJbWFnZTQsXHJcbiAgICB0ZXh0OlxyXG4gICAgICAnT25saW5lIHRyYWRpbmcgaXMgZXhjaXRpbmcgYnV0IGludm9sdmVzIHJpc2tzIGFuZCBjYW4gbGVhZCB0byBhbiBhZGRpY3Rpb24uJyxcclxuICAgIGhlYWRpbmc6ICdNYXJrZXQgbWVhc3VyZXMnLFxyXG4gICAgcGF0aDogJyMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW1hZ2U6IHNlcnZpY2VJbWFnZTUsXHJcbiAgICB0ZXh0OlxyXG4gICAgICAnd2UgZW5mb3JjZSBiZXN0LWluLWNsYXNzIHNlY3VyaXR5IG1lYXN1cmVzIHN1Y2ggYXMgdG8gcHJvdGVjdCB5b3VyIGFjY291bnQgYW5kIHBlcnNvbmFsIGRhdGEuJyxcclxuICAgIGhlYWRpbmc6ICdTZWN1cml0eSBtZWFzdXJlcycsXHJcbiAgICBwYXRoOiAnIycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbWFnZTogc2VydmljZUltYWdlNixcclxuICAgIHRleHQ6XHJcbiAgICAgICdUaGUgZnhib3QzNjAgc3VwcG9ydCB0ZWFtIGlzIGF2YWlsYWJsZSB2aWEgbGl2ZSBjaGF0IDI0Lzcg4oCTIGV2ZW4gb24gd2Vla2VuZHMuJyxcclxuICAgIGhlYWRpbmc6ICdPbmxpbmUgc3VwcG9ydCcsXHJcbiAgICBwYXRoOiAnIycsXHJcbiAgfSxcclxuXTtcclxuY29uc3QgU2VydmljZXMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggYXM9XCJzZWN0aW9uXCIgaWQ9XCJzZXJ2aWNlc1wiIHN4PXtzdHlsZXMuc2VydmljZXN9PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxCbG9ja1RpdGxlXHJcbiAgICAgICAgICB0aXRsZT1cIldoYXQgdGhlIGZlYXR1cmVzIG9mIHByb2R1Y3RcIlxyXG4gICAgICAgICAgdGV4dD1cIkZlYXR1cmVzIGFyZSBoaWdobGlnaHRlZCBoZXJlXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxHcmlkIHN4PXtzdHlsZXMuZ3JpZH0+XHJcbiAgICAgICAgICB7U0VSVklDRVNfREFUQS5tYXAoKHsgaW1hZ2UsIHRleHQsIGhlYWRpbmcsIHBhdGggfSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPFNlcnZpY2VDYXJkXHJcbiAgICAgICAgICAgICAgaW1hZ2U9e2ltYWdlfVxyXG4gICAgICAgICAgICAgIHRleHQ9e3RleHR9XHJcbiAgICAgICAgICAgICAgaGVhZGluZz17aGVhZGluZ31cclxuICAgICAgICAgICAgICBwYXRoPXtwYXRofVxyXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2VzO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHNlcnZpY2VzOiB7XHJcbiAgICBwdDogWyc4MHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzgwcHgnLCBudWxsLCAnMTAwcHgnXSxcclxuICB9LFxyXG4gIGdyaWQ6IHtcclxuICAgIGdyaWRHYXA6ICczMHB4JyxcclxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFsnMWZyJywgbnVsbCwgbnVsbCwgJzFmciAxZnInLCBudWxsLCAnMWZyIDFmciAxZnInXSxcclxuICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24sIElucHV0LCBCb3gsIENvbnRhaW5lciwgSGVhZGluZywgVGV4dCB9IGZyb20gJ3RoZW1lLXVpJztcclxuXHJcbmNvbnN0IFN1YnNjcmliZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBhcz1cInNlY3Rpb25cIiBzeD17c3R5bGVzLnN1YnNjcmliZX0+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPEhlYWRpbmcgYXM9XCJoM1wiPlN1YnNjcmliZSB0byBnZXQgbm90aWZpZWQgYWJvdXQgZXZlbnQ8L0hlYWRpbmc+XHJcbiAgICAgICAgPFRleHQgYXM9XCJwXCI+XHJcbiAgICAgICAgICBCeSBzdWJzY3JpYmluZyB3aXRoIHlvdXIgbWFpbCwgeW91IHdpbGwgYWNjZXB0IG91ciBwcml2YWN5IHBvbGljeVxyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgICA8Qm94IGFzPVwiZm9ybVwiIHN4PXtzdHlsZXMuZm9ybX0+XHJcbiAgICAgICAgICA8Qm94IGFzPVwibGFiZWxcIiBodG1sRm9yPVwic3Vic2NyaWJlRW1haWxcIiB2YXJpYW50PVwic3R5bGVzLnNyT25seVwiPlxyXG4gICAgICAgICAgICBFbWFpbFxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsXCJcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgaWQ9XCJzdWJzY3JpYmVFbWFpbFwiXHJcbiAgICAgICAgICAgIHN4PXtzdHlsZXMuaW5wdXR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgc3g9e3N0eWxlcy5idXR0b259PlxyXG4gICAgICAgICAgICBTdWJzY3JpYmUgdXNcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdWJzY3JpYmU7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgc3Vic2NyaWJlOiB7XHJcbiAgICBweTogWyc4MHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzgwcHgnLCAnMTAwcHgnLCAnMTQwcHgnXSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMwMjA3MTgnLFxyXG4gICAgaDM6IHtcclxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgZm9udFNpemU6IFsnMjNweCcsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICczMHB4JywgJzM2cHgnXSxcclxuICAgICAgbGluZUhlaWdodDogWzEuNSwgbnVsbCwgbnVsbCwgJzEnXSxcclxuICAgICAgY29sb3I6ICcjZmZmJyxcclxuICAgICAgbGV0dGVyU3BhY2luZzogWyctMC41cHgnXSxcclxuICAgICAgbWI6IFsnMHB4JywgbnVsbCwgbnVsbCwgJzE1cHgnXSxcclxuICAgICAgd2lkdGg6IFsnNzAlJywgbnVsbCwgbnVsbCwgJ2F1dG8nXSxcclxuICAgICAgbXg6IFsnYXV0bycsIG51bGwsIG51bGwsICcwJ10sXHJcbiAgICB9LFxyXG4gICAgcDoge1xyXG4gICAgICBmb250U2l6ZTogWycxNnB4J10sXHJcbiAgICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICAgIG9wYWNpdHk6ICcuNicsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6IFsnLTAuNXB4J10sXHJcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgIHdpZHRoOiBbJzcwJScsIG51bGwsIG51bGwsICdhdXRvJ10sXHJcbiAgICAgIG14OiBbJ2F1dG8nLCBudWxsLCBudWxsLCAnMCddLFxyXG4gICAgICBtdDogWycxMHB4JywgbnVsbCwgbnVsbCwgJzAnXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBmb3JtOiB7XHJcbiAgICB3aWR0aDogWycxMDAlJ10sXHJcbiAgICBtYXhXaWR0aDogWyc1NTVweCddLFxyXG4gICAgbXg6IFsnYXV0byddLFxyXG4gICAgZGlzcGxheTogWydmbGV4J10sXHJcbiAgICBmbGV4V3JhcDogWyd3cmFwJ10sXHJcbiAgICBtdDogWyczMHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzYwcHgnXSxcclxuICB9LFxyXG4gIGlucHV0OiB7XHJcbiAgICB3aWR0aDogWycxMDAlJ10sXHJcbiAgICBtYXhXaWR0aDogWycxMDAlJywgbnVsbCwgJzM3MHB4JywgJzM4MHB4J10sXHJcbiAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LCAuMDgpJyxcclxuICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgIGNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwgLjgpJyxcclxuICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICBwbDogWycwcHgnLCBudWxsLCBudWxsLCAnMzBweCddLFxyXG4gICAgaGVpZ2h0OiBbJzUwcHgnLCBudWxsLCBudWxsLCAnNjBweCddLFxyXG4gICAgbXI6IFsnMHB4JywgbnVsbCwgbnVsbCwgJzE1cHgnXSxcclxuICAgIHRleHRBbGlnbjogWydjZW50ZXInLCBudWxsLCBudWxsLCAnbGVmdCddLFxyXG4gIH0sXHJcbiAgYnV0dG9uOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICBmb250V2VpZ2h0OiAnNTAwJyxcclxuICAgIGZvbnRTaXplOiBbJzE4cHgnXSxcclxuICAgIGNvbG9yOiAnIzAyMDcxOCcsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuNXB4JyxcclxuICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgIHBhZGRpbmc6IFsnMHB4IDMwLjc1cHgnXSxcclxuICAgIG1pbkhlaWdodDogWyc1MHB4JywgbnVsbCwgbnVsbCwgJzYwcHgnXSxcclxuICAgIHdpZHRoOiBbJzEwMCUnLCBudWxsLCBudWxsLCAnYXV0byddLFxyXG4gICAgbXQ6IFsnMTBweCcsIG51bGwsIG51bGwsICcwJ10sXHJcbiAgICBteDogWydhdXRvJywgbnVsbCwgbnVsbCwgJzAnXSxcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgb3BhY2l0eTogJzAuOCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IFN3aXBlckNvcmUsIHsgQXV0b3BsYXkgfSBmcm9tICdzd2lwZXInO1xyXG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSAnc3dpcGVyL3JlYWN0JztcclxuaW1wb3J0IEJsb2NrVGl0bGUgZnJvbSAnY29tcG9uZW50cy9ibG9jay10aXRsZSc7XHJcbmltcG9ydCBUZXN0aW1vbmlhbHNDYXJkIGZyb20gJ2NvbXBvbmVudHMvY2FyZHMvdGVzdGltb25pYWwtY2FyZCc7XHJcbmltcG9ydCB0ZXN0aW1vbmlhbHNJbWFnZTEgZnJvbSAnYXNzZXRzL3Rlc3RpbW9uaWFsLTEtMS5wbmcnO1xyXG5pbXBvcnQgdGVzdGltb25pYWxzSW1hZ2UyIGZyb20gJ2Fzc2V0cy90ZXN0aW1vbmlhbC0xLTIucG5nJztcclxuaW1wb3J0IHRlc3RpbW9uaWFsc0ltYWdlMyBmcm9tICdhc3NldHMvdGVzdGltb25pYWwtMS0zLnBuZyc7XHJcbmltcG9ydCB0ZXN0aW1vbmlhbHNJbWFnZTQgZnJvbSAnYXNzZXRzL3Rlc3RpbW9uaWFsLTEtNC5wbmcnO1xyXG5pbXBvcnQgdGVzdGltb25pYWxzSW1hZ2U1IGZyb20gJ2Fzc2V0cy90ZXN0aW1vbmlhbC0xLTUucG5nJztcclxuaW1wb3J0IHRlc3RpbW9uaWFsc0ltYWdlNiBmcm9tICdhc3NldHMvdGVzdGltb25pYWwtMS02LnBuZyc7XHJcblxyXG5Td2lwZXJDb3JlLnVzZShbQXV0b3BsYXldKTtcclxuXHJcbmNvbnN0IFRFU1RJTU9OSUFMU19EQVRBID0gW1xyXG4gIFtcclxuICAgIHtcclxuICAgICAgaW1hZ2U6IHRlc3RpbW9uaWFsc0ltYWdlMSxcclxuICAgICAgdGV4dDpcclxuICAgICAgICAnSSB3b3VsZCBsaWtlIHRvIHRha2UgdGhpcyBvcHBlcnR1bml0eSB0byB0aGFuayBTQSBQbGFjZXMgZm9yIHRoZSBncmVhdCBzZXJ2aWNlIHJlbmRlcmVkIHRvIHVzIGFuZCBpbiBwYXJ0aWN1bGFyIEVzdGVsbGUuIFlvdSBnb3QgbWUgdGhlIGJlc3QgcGxhY2UgZXZlciBpbiBqdXN0IGEgZmV3IG1vbWVudHMgYWZ0ZXIgSSBzcG9rZSB0byB5b3UuJyxcclxuICAgICAgdXNlcm5hbWU6ICdAaGVsbG8ubWltbWllJyxcclxuICAgICAgbmFtZTogJ01pbm5pZSBIb3JuJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGltYWdlOiB0ZXN0aW1vbmlhbHNJbWFnZTIsXHJcbiAgICAgIHRleHQ6XHJcbiAgICAgICAgJ01hbnkgdGhhbmtzIGZvciB5b3Uga2luZCBhbmQgZWZmaWNpZW50IHNlcnZpY2UuIEkgaGF2ZSBhbHJlYWR5IGFuZCB3aWxsIGRlZmluaXRlbHkgY29udGludWUgdG8gcmVjb21tZW5kIHlvdXIgc2VydmljZXMgdG8gb3RoZXJzIGluIHRoZSBmdXR1cmUuJyxcclxuICAgICAgdXNlcm5hbWU6ICdAbWVycnluLm1hbmxleScsXHJcbiAgICAgIG5hbWU6ICdNZXJyeW4gTWFubGV5JyxcclxuICAgIH0sXHJcbiAgXSxcclxuICBbXHJcbiAgICB7XHJcbiAgICAgIGltYWdlOiB0ZXN0aW1vbmlhbHNJbWFnZTMsXHJcbiAgICAgIHRleHQ6XHJcbiAgICAgICAgJ0kgd291bGQganVzdCBsaWtlIHRvIGNvbXBsaW1lbnQgRXN0ZWxsZSBQZXN0YW5hLiBTaGUgaGFzIGJlZW4gbW9zdCBwcm9mZXNzaW9uYWwgYW5kIGdvbmUgdG8gZ3JlYXQgbGVuZ3RocyB0byBhc3Npc3QgbWUuIEhlciBwYXRpZW5jZSB3aXRoIG1lIGFzIEkgY29udGludW91c2x5IGNoYW5nZWQgbXkgcGxhbnMgaXMgdG8gYmUgY29tbWVuZGVkLiBIZXIgc2VydmljZSByZS1hZmZpcm1zIHdoeSBJIGFsd2F5cyBjaG9vc2UgdG8gYm9vayB0aHJvdWdoIGFuIGFnZW5jeSBpbnN0ZWFkIG9mIGRpcmVjdGx5LiBUaGFuayB5b3UnLFxyXG4gICAgICB1c2VybmFtZTogJ0BoaS52ZW9uYScsXHJcbiAgICAgIG5hbWU6ICdWZW9uYSBXYXRzb24nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaW1hZ2U6IHRlc3RpbW9uaWFsc0ltYWdlNCxcclxuICAgICAgdGV4dDpcclxuICAgICAgICAnSSBoYXZlIHNlbGRvbSBleHBlcmllbmNlZCBzdWNoIGFuIGVmZmljaWVudCBoZWxwIGFuZCBzdXBwb3J0IGxpa2UgZnJvbSB5b3UhIFRoYW5rIHlvdSBzbyBtdWNoLiBXZSB3aWxsIGRvIGFsbCB0aGUgYm9va2luZ3MgZHVyaW5nIHRoZSBuZXh0IGZldyBkYXlzIGFuZCBJIHdpbGwgcmV2ZXJ0IHRvIHlvdSB3aXRoIHRoZSBlbmQgcmVzdWx0JyxcclxuICAgICAgdXNlcm5hbWU6ICdAaGV5Lm5rdScsXHJcbiAgICAgIG5hbWU6ICdQYXNla2EgTmt1JyxcclxuICAgIH0sXHJcbiAgXSxcclxuICBbXHJcbiAgICB7XHJcbiAgICAgIGltYWdlOiB0ZXN0aW1vbmlhbHNJbWFnZTUsXHJcbiAgICAgIHRleHQ6XHJcbiAgICAgICAgJ1RoYW5rIHlvdSBmb3IgYWxsIHlvdXIgaGVscC4gWW91ciBzZXJ2aWNlIHdhcyBleGNlbGxlbnQgYW5kIHZlcnkgRkFTVC4nLFxyXG4gICAgICB1c2VybmFtZTogJ0BjaGVyaWNlLm1lJyxcclxuICAgICAgbmFtZTogJ0NoZXJpY2UgSnVzdGluJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGltYWdlOiB0ZXN0aW1vbmlhbHNJbWFnZTYsXHJcbiAgICAgIHRleHQ6XHJcbiAgICAgICAgJ0ZvciBvdXIgcmVjZW50IHRyaXAgdG8gUy5BLiBJIGJvb2tlZCBzZXZlcmFsIGFjY29tbW9kYXRpb24gdGhydSBTQSBQbGFjZXMuIEkganVzdCB3YW50ZWQgdG8gdGVsbCB5b3UgdGhhdCBldmVyeXRoaW5nIHdvcmtlZCBvdXQgcGVyZmVjdGx5IHdpdGggYWxsIHRoZSBib29raW5ncyBhbmQgYWxzbyB5b3VyIGJvb2tpbmcgd2FzIHZlcnkgcXVpY2sgYW5kIHByb2Zlc3Npb25hbC4gSSBob3BlIEkgaGF2ZSB0aGUgb3Bwb3J0dW5pdHkgdG8gcmUtdmlzaXQgU291dGggQWZyaWNhIHNvb24sIEkgd2lsbCB0aGVuIG1ha2UgbXkgYm9va2luZ3Mgd2l0aCB5b3VyIGNvbXBhbnkgYWdhaW4uIEkgd2lsbCBhbHNvIHJlY29tbWVuZCcsXHJcbiAgICAgIHVzZXJuYW1lOiAnQG15c2VsZi50aGFpcycsXHJcbiAgICAgIG5hbWU6ICdUaGFpcyBDYXJiYWxsYWwnLFxyXG4gICAgfSxcclxuICBdLFxyXG4gIFtcclxuICAgIHtcclxuICAgICAgaW1hZ2U6IHRlc3RpbW9uaWFsc0ltYWdlMSxcclxuICAgICAgdGV4dDpcclxuICAgICAgICAnSSB3b3VsZCBsaWtlIHRvIHRha2UgdGhpcyBvcHBlcnR1bml0eSB0byB0aGFuayBTQSBQbGFjZXMgZm9yIHRoZSBncmVhdCBzZXJ2aWNlIHJlbmRlcmVkIHRvIHVzIGFuZCBpbiBwYXJ0aWN1bGFyIEVzdGVsbGUuIFlvdSBnb3QgbWUgdGhlIGJlc3QgcGxhY2UgZXZlciBpbiBqdXN0IGEgZmV3IG1vbWVudHMgYWZ0ZXIgSSBzcG9rZSB0byB5b3UuJyxcclxuICAgICAgdXNlcm5hbWU6ICdAaGVsbG8ubWltbWllJyxcclxuICAgICAgbmFtZTogJ01pbm5pZSBIb3JuJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGltYWdlOiB0ZXN0aW1vbmlhbHNJbWFnZTIsXHJcbiAgICAgIHRleHQ6XHJcbiAgICAgICAgJ01hbnkgdGhhbmtzIGZvciB5b3Uga2luZCBhbmQgZWZmaWNpZW50IHNlcnZpY2UuIEkgaGF2ZSBhbHJlYWR5IGFuZCB3aWxsIGRlZmluaXRlbHkgY29udGludWUgdG8gcmVjb21tZW5kIHlvdXIgc2VydmljZXMgdG8gb3RoZXJzIGluIHRoZSBmdXR1cmUuJyxcclxuICAgICAgdXNlcm5hbWU6ICdAbWVycnluLm1hbmxleScsXHJcbiAgICAgIG5hbWU6ICdNZXJyeW4gTWFubGV5JyxcclxuICAgIH0sXHJcbiAgXSxcclxuICBbXHJcbiAgICB7XHJcbiAgICAgIGltYWdlOiB0ZXN0aW1vbmlhbHNJbWFnZTMsXHJcbiAgICAgIHRleHQ6XHJcbiAgICAgICAgJ0kgd291bGQganVzdCBsaWtlIHRvIGNvbXBsaW1lbnQgRXN0ZWxsZSBQZXN0YW5hLiBTaGUgaGFzIGJlZW4gbW9zdCBwcm9mZXNzaW9uYWwgYW5kIGdvbmUgdG8gZ3JlYXQgbGVuZ3RocyB0byBhc3Npc3QgbWUuIEhlciBwYXRpZW5jZSB3aXRoIG1lIGFzIEkgY29udGludW91c2x5IGNoYW5nZWQgbXkgcGxhbnMgaXMgdG8gYmUgY29tbWVuZGVkLiBIZXIgc2VydmljZSByZS1hZmZpcm1zIHdoeSBJIGFsd2F5cyBjaG9vc2UgdG8gYm9vayB0aHJvdWdoIGFuIGFnZW5jeSBpbnN0ZWFkIG9mIGRpcmVjdGx5LiBUaGFuayB5b3UnLFxyXG4gICAgICB1c2VybmFtZTogJ0BoaS52ZW9uYScsXHJcbiAgICAgIG5hbWU6ICdWZW9uYSBXYXRzb24nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaW1hZ2U6IHRlc3RpbW9uaWFsc0ltYWdlNCxcclxuICAgICAgdGV4dDpcclxuICAgICAgICAnSSBoYXZlIHNlbGRvbSBleHBlcmllbmNlZCBzdWNoIGFuIGVmZmljaWVudCBoZWxwIGFuZCBzdXBwb3J0IGxpa2UgZnJvbSB5b3UhIFRoYW5rIHlvdSBzbyBtdWNoLiBXZSB3aWxsIGRvIGFsbCB0aGUgYm9va2luZ3MgZHVyaW5nIHRoZSBuZXh0IGZldyBkYXlzIGFuZCBJIHdpbGwgcmV2ZXJ0IHRvIHlvdSB3aXRoIHRoZSBlbmQgcmVzdWx0JyxcclxuICAgICAgdXNlcm5hbWU6ICdAaGV5Lm5rdScsXHJcbiAgICAgIG5hbWU6ICdQYXNla2EgTmt1JyxcclxuICAgIH0sXHJcbiAgXSxcclxuICBbXHJcbiAgICB7XHJcbiAgICAgIGltYWdlOiB0ZXN0aW1vbmlhbHNJbWFnZTUsXHJcbiAgICAgIHRleHQ6XHJcbiAgICAgICAgJ1RoYW5rIHlvdSBmb3IgYWxsIHlvdXIgaGVscC4gWW91ciBzZXJ2aWNlIHdhcyBleGNlbGxlbnQgYW5kIHZlcnkgRkFTVC4nLFxyXG4gICAgICB1c2VybmFtZTogJ0BjaGVyaWNlLm1lJyxcclxuICAgICAgbmFtZTogJ0NoZXJpY2UgSnVzdGluJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGltYWdlOiB0ZXN0aW1vbmlhbHNJbWFnZTYsXHJcbiAgICAgIHRleHQ6XHJcbiAgICAgICAgJ0ZvciBvdXIgcmVjZW50IHRyaXAgdG8gUy5BLiBJIGJvb2tlZCBzZXZlcmFsIGFjY29tbW9kYXRpb24gdGhydSBTQSBQbGFjZXMuIEkganVzdCB3YW50ZWQgdG8gdGVsbCB5b3UgdGhhdCBldmVyeXRoaW5nIHdvcmtlZCBvdXQgcGVyZmVjdGx5IHdpdGggYWxsIHRoZSBib29raW5ncyBhbmQgYWxzbyB5b3VyIGJvb2tpbmcgd2FzIHZlcnkgcXVpY2sgYW5kIHByb2Zlc3Npb25hbC4gSSBob3BlIEkgaGF2ZSB0aGUgb3Bwb3J0dW5pdHkgdG8gcmUtdmlzaXQgU291dGggQWZyaWNhIHNvb24sIEkgd2lsbCB0aGVuIG1ha2UgbXkgYm9va2luZ3Mgd2l0aCB5b3VyIGNvbXBhbnkgYWdhaW4uIEkgd2lsbCBhbHNvIHJlY29tbWVuZCcsXHJcbiAgICAgIHVzZXJuYW1lOiAnQG15c2VsZi50aGFpcycsXHJcbiAgICAgIG5hbWU6ICdUaGFpcyBDYXJiYWxsYWwnLFxyXG4gICAgfSxcclxuICBdLFxyXG5dO1xyXG5cclxuY29uc3QgVGVzdGltb25pYWxzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRlc3RpbW9uaWFsQ2Fyb3VzZWwgPSB7XHJcbiAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICBzcGVlZDogMTAwMCxcclxuICAgIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxyXG4gICAgYXV0b0hlaWdodDogdHJ1ZSxcclxuICAgIGF1dG9wbGF5OiB7XHJcbiAgICAgIHdhaXRGb3JUcmFuc2l0aW9uOiBmYWxzZSxcclxuICAgICAgZGVsYXk6IDQwMDAsXHJcbiAgICB9LFxyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgNjQwOiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgICB9LFxyXG4gICAgICA3Njg6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgIH0sXHJcbiAgICAgIDEwMjQ6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgIH0sXHJcbiAgICAgIDEyMDA6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggYXM9XCJzZWN0aW9uXCIgaWQ9XCJ0ZXN0aW1vbmlhbHNcIiBzeD17c3R5bGVzLnRlc3RpbW9uaWFsc30+XHJcbiAgICAgIDxCbG9ja1RpdGxlXHJcbiAgICAgICAgdGl0bGU9XCJXaGF0IGNsaWVudCBzYXkgYWJvdXQgdXNcIlxyXG4gICAgICAgIHRleHQ9XCJDdXN0b21lciB0ZXN0aW1vbmlhbFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxTd2lwZXIgey4uLnRlc3RpbW9uaWFsQ2Fyb3VzZWx9PlxyXG4gICAgICAgIHtURVNUSU1PTklBTFNfREFUQS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8U3dpcGVyU2xpZGUga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgIHtpdGVtLm1hcCgoeyBpbWFnZSwgdGV4dCwgbmFtZSwgdXNlcm5hbWUgfSwgX2luZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPFRlc3RpbW9uaWFsc0NhcmRcclxuICAgICAgICAgICAgICAgIGltYWdlPXtpbWFnZX1cclxuICAgICAgICAgICAgICAgIHRleHQ9e3RleHR9XHJcbiAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAga2V5PXtfaW5kZXh9XHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZT17dXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L1N3aXBlclNsaWRlPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L1N3aXBlcj5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXN0aW1vbmlhbHM7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgdGVzdGltb25pYWxzOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjRGNEY2JyxcclxuICAgIHB0OiBbJzgwcHgnLCBudWxsLCBudWxsLCBudWxsLCAnODBweCcsIG51bGwsICcxMDBweCddLFxyXG4gICAgcGI6IFsnNjBweCcsIG51bGwsIG51bGwsIG51bGwsICc4MHB4JywgbnVsbCwgJzEyMHB4J10sXHJcbiAgfSxcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIC8vIGV4YW1wbGUgY29sb3JzIHdpdGggZGFyayBtb2RlXHJcbiAgYnJlYWtwb2ludHM6IFsnMzc2cHgnLCAnNTc2cHgnLCAnNzY4cHgnLCAnOTkycHgnLCAnMTIwMHB4JywgJzE2NTBweCddLFxyXG4gIGNvbG9yczoge1xyXG4gICAgdGV4dDogJyMzNDNENDgnLCAvLyBib2R5IGNvbG9yIGFuZCBwcmltYXJ5IGNvbG9yXHJcbiAgICB0ZXh0X3NlY29uZGFyeTogJyMwMjA3M0UnLCAvLyBzZWNvbmRhcnkgYm9keSBjb2xvclxyXG4gICAgaGVhZGluZzogJyMwMjA3M0UnLCAvLyBwcmltYXJ5IGhlYWRpbmcgY29sb3JcclxuICAgIGhlYWRpbmdfc2Vjb25kYXJ5OiAnIzM0M0Q0OCcsIC8vIGhlYWRpbmcgY29sb3JcclxuICAgIGJhY2tncm91bmQ6ICcjRkZGRkZGJywgLy8gYm9keSBiYWNrZ3JvdW5kIGNvbG9yXHJcbiAgICBiYWNrZ3JvdW5kX3NlY29uZGFyeTogJyNGOUZCRkQnLCAvLyBzZWNvbmRhcnkgYmFja2dyb3VuZCBjb2xvclxyXG4gICAgYm9yZGVyX2NvbG9yOiAnI0U5RURGNScsIC8vIGJvcmRlciBjb2xvclxyXG4gICAgcHJpbWFyeTogJyM4RDQ0OEInLCAvLyBwcmltYXJ5IGJ1dHRvbiBhbmQgbGluayBjb2xvclxyXG4gICAgc2Vjb25kYXJ5OiAnIzc5MzY3NycsIC8vIHNlY29uZGFyeSBjb2xvciAtIGNhbiBiZSB1c2VkIGZvciBob3ZlciBzdGF0ZXNcclxuICAgIGJsYWNrOiAnIzBGMjEzNycsIC8vIGJsYWNrIGNvbG9yXHJcbiAgICBncmF5OiAnI0Y4RkFGQycsXHJcbiAgICBtdXRlZDogJyM3QjgxODgnLCAvLyBtdXRlZCBjb2xvclxyXG4gICAgYWNjZW50OiAnIzYwOScsIC8vIGEgY29udHJhc3QgY29sb3IgZm9yIGVtcGhhc2l6aW5nIFVJXHJcbiAgfSxcclxuICBmb250czoge1xyXG4gICAgYm9keTogJ0RNIFNhbnMnLFxyXG4gICAgLy8gYm9keTpcclxuICAgIC8vICAgJ3N5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmJyxcclxuICAgIGhlYWRpbmc6ICdETSBTYW5zJyxcclxuICAgIC8vIGhlYWRpbmc6ICdCcmVlIFNlcmlmJyxcclxuICAgIG1vbm9zcGFjZTogJ01lbmxvLCBtb25vc3BhY2UnLFxyXG4gIH0sXHJcbiAgZm9udFNpemVzOiBbMTMsIDE0LCAxNiwgMTgsIDIwLCAyMSwgMzAsIDM2LCA0OCwgNjRdLFxyXG4gIGZvbnRXZWlnaHRzOiB7XHJcbiAgICBib2R5OiAnbm9ybWFsJyxcclxuICAgIGhlYWRpbmc6IDUwMCxcclxuICAgIGJvbGQ6IDcwMCxcclxuICB9LFxyXG4gIGxpbmVIZWlnaHRzOiB7XHJcbiAgICBib2R5OiAyLFxyXG4gICAgaGVhZGluZzogJzUwcHgnLFxyXG4gIH0sXHJcbiAgbGV0dGVyU3BhY2luZ3M6IHtcclxuICAgIGJvZHk6ICdub3JtYWwnLFxyXG4gICAgY2FwczogJzAuMmVtJyxcclxuICAgIGhlYWRpbmc6ICctMC41cHgnLFxyXG4gIH0sXHJcbiAgLy8gc3BhY2U6IFswLCA0LCA4LCAxNiwgMzIsIDY0XSxcclxuICBzaXplczoge1xyXG4gICAgY29udGFpbmVyOiBbJzEyNTBweCddLFxyXG4gIH0sXHJcbiAgLy8gdmFyaWFudHMgY2FuIHVzZSBjdXN0b20sIHVzZXItZGVmaW5lZCBuYW1lc1xyXG4gIGxheW91dDoge1xyXG4gICAgY29udGFpbmVyOiB7XHJcbiAgICAgIHB4OiBbJzE1cHgnLCBudWxsLCBudWxsLCAnMzBweCcsICc0MHB4J10sXHJcbiAgICB9LFxyXG4gICAgaGVhZGVyOiB7XHJcbiAgICAgIGNvbG9yOiAnIzAyMDczRScsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxyXG4gICAgICBweTogMyxcclxuICAgIH0sXHJcbiAgICB0b29sYmFyOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIC8vIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICB9LFxyXG4gICAgbWFpbjoge30sXHJcbiAgICBmb290ZXI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnYmFja2dyb3VuZF9zZWNvbmRhcnknLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHRleHQ6IHtcclxuICAgIGhlYWRpbmc6IHtcclxuICAgICAgZm9udEZhbWlseTogJ2hlYWRpbmcnLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnaGVhZGluZycsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdoZWFkaW5nJyxcclxuICAgICAgZm9udFNpemU6IDQsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6ICdoZWFkaW5nJyxcclxuICAgICAgY29sb3I6ICdoZWFkaW5nJyxcclxuICAgIH0sXHJcbiAgICBoZXJvUHJpbWFyeToge1xyXG4gICAgICBmb250U2l6ZTogWzUsIDU1XSxcclxuICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFsnNDBweCcsICc4MHB4J10sXHJcbiAgICAgIGxldHRlclNwYWNpbmc6ICctMXB4JyxcclxuICAgICAgdGV4dEFsaWduOiBbJ2NlbnRlcicsICdsZWZ0J10sXHJcbiAgICB9LFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgdmFyaWFudDogJ3RleHQuaGVhZGluZycsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgICAgZm9udFNpemU6IDE4LFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnMzBweCcsXHJcbiAgICAgIGNvbG9yOiAnIzBGMjEzNycsXHJcbiAgICB9LFxyXG4gICAgaGVyb1NlY29uZGFyeToge1xyXG4gICAgICBjb2xvcjogJ3RleHRfc2Vjb25kYXJ5JyxcclxuICAgICAgbGluZUhlaWdodDogWyczMHB4JywgJzQycHgnXSxcclxuICAgICAgbGV0dGVyU3BhY2luZzogJzAuMWVtJyxcclxuICAgICAgdGV4dEFsaWduOiBbJ2NlbnRlcicsICdsZWZ0J10sXHJcbiAgICB9LFxyXG4gICAgbGVhZDoge1xyXG4gICAgICBmb250U2l6ZTogNDAsXHJcbiAgICAgIGZvbnRGYW1pbHk6ICdETSBTYW5zJyxcclxuICAgICAgZm9udFdlaWdodDogJzUwMCcsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICc2MHB4JyxcclxuICAgICAgbGV0dGVyU3BhY2luZzogJy0xLjVweCcsXHJcbiAgICAgIGNvbG9yOiAnIzBGMjEzNycsXHJcbiAgICB9LFxyXG4gICAgbXV0ZWQ6IHtcclxuICAgICAgbGluZUhlaWdodDogJzI2cHgnLFxyXG4gICAgICBjb2xvcjogJ211dGVkJyxcclxuICAgIH0sXHJcbiAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgICBjb2xvcjogJyMwMEE5OUQnLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnNDBweCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbGlua3M6IHtcclxuICAgIGJvbGQ6IHtcclxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgfSxcclxuICAgIG5hdjoge1xyXG4gICAgICBkaXNwbGF5OiBbJ25vbmUnLCBudWxsLCAnaW5saW5lLWJsb2NrJ10sXHJcbiAgICAgIHA6IDIsXHJcbiAgICB9LFxyXG4gICAgZm9vdGVyOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgIHB4OiAwLFxyXG4gICAgICBjb2xvcjogJ2luaGVyaXQnLFxyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBpbWFnZXM6IHtcclxuICAgIGF2YXRhcjoge1xyXG4gICAgICB3aWR0aDogNDgsXHJcbiAgICAgIGhlaWdodDogNDgsXHJcbiAgICAgIGJvcmRlclJhZGl1czogOTk5OTksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgLy8gdmFyaWFudHMgZm9yIGJ1dHRvbnNcclxuICBidXR0b25zOiB7XHJcbiAgICBtZW51OiB7XHJcbiAgICAgIGRpc3BsYXk6IFtudWxsLCBudWxsLCAnbm9uZSddLFxyXG4gICAgfSwgLy8gZGVmYXVsdCB2YXJpYW50IGZvciBNZW51QnV0dG9uXHJcbiAgICAvLyB5b3UgY2FuIHJlZmVyZW5jZSBvdGhlciB2YWx1ZXMgZGVmaW5lZCBpbiB0aGUgdGhlbWVcclxuICAgIHByaW1hcnk6IHtcclxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgYmc6ICdwcmltYXJ5JyxcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgIHRyYW5zaXRpb246ICc1MDBtcycsXHJcbiAgICAgIGZvbnRTaXplOiAyLFxyXG4gICAgICBvdXRsaW5lOiAnbm9uZScsXHJcbiAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgIGJnOiAnc2Vjb25kYXJ5JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgc3R5bGVzOiB7XHJcbiAgICAvLyBUbyBhZGQgYmFzZSwgdG9wLWxldmVsIHN0eWxlcyB0byB0aGUgPGJvZHk+IGVsZW1lbnQsIHVzZSB0aGVtZS5zdHlsZXMucm9vdC5cclxuICAgIHJvb3Q6IHtcclxuICAgICAgZm9udEZhbWlseTogJ2JvZHknLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnYm9keScsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2R5JyxcclxuICAgICAgV2Via2l0Rm9udFNtb290aGluZzogJ2FudGlhbGlhc2VkJyxcclxuICAgIH0sXHJcbiAgICBhOiB7XHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG4gICAgfSxcclxuICAgIGJ1dHRvbjoge1xyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgIH0sXHJcbiAgICAvLyBEaXZpZGVyIHN0eWxlc1xyXG4gICAgaHI6IHtcclxuICAgICAgYm9yZGVyOiAwLFxyXG4gICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQnLFxyXG4gICAgICBib3JkZXJDb2xvcjogJyNEOUUwRTcnLFxyXG4gICAgfSxcclxuICAgIC8vIGFsc28geW91IGNhbiB1c2Ugb3RoZXIgSFRNTCBlbGVtZW50cyBzdHlsZSBoZXJlXHJcbiAgICB1bDoge1xyXG4gICAgICBsaXN0U3R5bGU6ICdub25lJyxcclxuICAgIH0sXHJcbiAgICBzck9ubHk6IHtcclxuICAgICAgYm9yZGVyOiAnMCAhaW1wb3J0YW50JyxcclxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KSAhaW1wb3J0YW50JyxcclxuICAgICAgY2xpcFBhdGg6ICdpbnNldCg1MCUpICFpbXBvcnRhbnQnLFxyXG4gICAgICBoZWlnaHQ6ICcxcHggIWltcG9ydGFudCcsXHJcbiAgICAgIG1hcmdpbjogJy0xcHggIWltcG9ydGFudCcsXHJcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuICFpbXBvcnRhbnQnLFxyXG4gICAgICBwYWRkaW5nOiAnMCAhaW1wb3J0YW50JyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSAhaW1wb3J0YW50JyxcclxuICAgICAgd2lkdGg6ICcxcHggIWltcG9ydGFudCcsXHJcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAgIWltcG9ydGFudCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnJhbWVyLW1vdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmMtZHJhd2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWN1c3RvbS1zY3JvbGxiYXJzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2FpXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2ZhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2lvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1hc29ucnktY29tcG9uZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNjcm9sbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zdGlja3lub2RlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXdheXBvaW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3aXBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzd2lwZXIvcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidGhlbWUtdWlcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==