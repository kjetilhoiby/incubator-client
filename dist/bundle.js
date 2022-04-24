
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
(function () {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var classCallCheck = _classCallCheck;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var createClass = _createClass;

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var setPrototypeOf = createCommonjsModule(function (module) {
    function _setPrototypeOf(o, p) {
      module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };

      return _setPrototypeOf(o, p);
    }

    module.exports = _setPrototypeOf;
  });

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) setPrototypeOf(subClass, superClass);
  }

  var inherits = _inherits;

  var _typeof_1 = createCommonjsModule(function (module) {
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
  });

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  var assertThisInitialized = _assertThisInitialized;

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
      return call;
    }

    return assertThisInitialized(self);
  }

  var possibleConstructorReturn = _possibleConstructorReturn;

  var getPrototypeOf = createCommonjsModule(function (module) {
    function _getPrototypeOf(o) {
      module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
      return _getPrototypeOf(o);
    }

    module.exports = _getPrototypeOf;
  });

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  var isNativeFunction = _isNativeFunction;

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  var isNativeReflectConstruct = _isNativeReflectConstruct;

  var construct = createCommonjsModule(function (module) {
    function _construct(Parent, args, Class) {
      if (isNativeReflectConstruct()) {
        module.exports = _construct = Reflect.construct;
      } else {
        module.exports = _construct = function _construct(Parent, args, Class) {
          var a = [null];
          a.push.apply(a, args);
          var Constructor = Function.bind.apply(Parent, a);
          var instance = new Constructor();
          if (Class) setPrototypeOf(instance, Class.prototype);
          return instance;
        };
      }

      return _construct.apply(null, arguments);
    }

    module.exports = _construct;
  });

  var wrapNativeSuper = createCommonjsModule(function (module) {
    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : undefined;

      module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !isNativeFunction(Class)) return Class;

        if (typeof Class !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }

        if (typeof _cache !== "undefined") {
          if (_cache.has(Class)) return _cache.get(Class);

          _cache.set(Class, Wrapper);
        }

        function Wrapper() {
          return construct(Class, arguments, getPrototypeOf(this).constructor);
        }

        Wrapper.prototype = Object.create(Class.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return setPrototypeOf(Wrapper, Class);
      };

      return _wrapNativeSuper(Class);
    }

    module.exports = _wrapNativeSuper;
  });

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  var arrayWithHoles = _arrayWithHoles;

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  var iterableToArrayLimit = _iterableToArrayLimit;

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

  var arrayLikeToArray = _arrayLikeToArray;

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
  }

  var unsupportedIterableToArray = _unsupportedIterableToArray;

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var nonIterableRest = _nonIterableRest;

  function _slicedToArray(arr, i) {
    return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
  }

  var slicedToArray = _slicedToArray;

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  var superPropBase = _superPropBase;

  var get = createCommonjsModule(function (module) {
    function _get(target, property, receiver) {
      if (typeof Reflect !== "undefined" && Reflect.get) {
        module.exports = _get = Reflect.get;
      } else {
        module.exports = _get = function _get(target, property, receiver) {
          var base = superPropBase(target, property);
          if (!base) return;
          var desc = Object.getOwnPropertyDescriptor(base, property);

          if (desc.get) {
            return desc.get.call(receiver);
          }

          return desc.value;
        };
      }

      return _get(target, property, receiver || target);
    }

    module.exports = _get;
  });

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return arrayLikeToArray(arr);
  }

  var arrayWithoutHoles = _arrayWithoutHoles;

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  var iterableToArray = _iterableToArray;

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var nonIterableSpread = _nonIterableSpread;

  function _toConsumableArray(arr) {
    return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
  }

  var toConsumableArray = _toConsumableArray;

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function noop() {}

  function add_location(element, file, line, column, char) {
    element.__svelte_meta = {
      loc: {
        file: file,
        line: line,
        column: column,
        char: char
      }
    };
  }

  function run(fn) {
    return fn();
  }

  function blank_object() {
    return Object.create(null);
  }

  function run_all(fns) {
    fns.forEach(run);
  }

  function is_function(thing) {
    return typeof thing === 'function';
  }

  function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || a && _typeof_1(a) === 'object' || typeof a === 'function';
  }

  function is_empty(obj) {
    return Object.keys(obj).length === 0;
  }

  function validate_store(store, name) {
    if (store != null && typeof store.subscribe !== 'function') {
      throw new Error("'".concat(name, "' is not a store with a 'subscribe' method"));
    }
  }

  function subscribe(store) {
    if (store == null) {
      return noop;
    }

    for (var _len = arguments.length, callbacks = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      callbacks[_key - 1] = arguments[_key];
    }

    var unsub = store.subscribe.apply(store, callbacks);
    return unsub.unsubscribe ? function () {
      return unsub.unsubscribe();
    } : unsub;
  }

  function component_subscribe(component, store, callback) {
    component.$$.on_destroy.push(subscribe(store, callback));
  }

  function append(target, node) {
    target.appendChild(node);
  }

  function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
  }

  function detach(node) {
    node.parentNode.removeChild(node);
  }

  function destroy_each(iterations, detaching) {
    for (var i = 0; i < iterations.length; i += 1) {
      if (iterations[i]) iterations[i].d(detaching);
    }
  }

  function element(name) {
    return document.createElement(name);
  }

  function text(data) {
    return document.createTextNode(data);
  }

  function space() {
    return text(' ');
  }

  function children(element) {
    return Array.from(element.childNodes);
  }

  function custom_event(type, detail) {
    var e = document.createEvent('CustomEvent');
    e.initCustomEvent(type, false, false, detail);
    return e;
  }

  var current_component;

  function set_current_component(component) {
    current_component = component;
  }

  var dirty_components = [];
  var binding_callbacks = [];
  var render_callbacks = [];
  var flush_callbacks = [];
  var resolved_promise = Promise.resolve();
  var update_scheduled = false;

  function schedule_update() {
    if (!update_scheduled) {
      update_scheduled = true;
      resolved_promise.then(flush);
    }
  }

  function add_render_callback(fn) {
    render_callbacks.push(fn);
  }

  var flushing = false;
  var seen_callbacks = new Set();

  function flush() {
    if (flushing) return;
    flushing = true;

    do {
      // first, call beforeUpdate functions
      // and update components
      for (var i = 0; i < dirty_components.length; i += 1) {
        var component = dirty_components[i];
        set_current_component(component);
        update(component.$$);
      }

      set_current_component(null);
      dirty_components.length = 0;

      while (binding_callbacks.length) {
        binding_callbacks.pop()();
      } // then, once components are updated, call
      // afterUpdate functions. This may cause
      // subsequent updates...


      for (var _i = 0; _i < render_callbacks.length; _i += 1) {
        var callback = render_callbacks[_i];

        if (!seen_callbacks.has(callback)) {
          // ...so guard against infinite loops
          seen_callbacks.add(callback);
          callback();
        }
      }

      render_callbacks.length = 0;
    } while (dirty_components.length);

    while (flush_callbacks.length) {
      flush_callbacks.pop()();
    }

    update_scheduled = false;
    flushing = false;
    seen_callbacks.clear();
  }

  function update($$) {
    if ($$.fragment !== null) {
      $$.update();
      run_all($$.before_update);
      var dirty = $$.dirty;
      $$.dirty = [-1];
      $$.fragment && $$.fragment.p($$.ctx, dirty);
      $$.after_update.forEach(add_render_callback);
    }
  }

  var outroing = new Set();
  var outros;

  function transition_in(block, local) {
    if (block && block.i) {
      outroing.delete(block);
      block.i(local);
    }
  }

  function transition_out(block, local, detach, callback) {
    if (block && block.o) {
      if (outroing.has(block)) return;
      outroing.add(block);
      outros.c.push(function () {
        outroing.delete(block);

        if (callback) {
          if (detach) block.d(1);
          callback();
        }
      });
      block.o(local);
    }
  }

  function create_component(block) {
    block && block.c();
  }

  function mount_component(component, target, anchor) {
    var _component$$$ = component.$$,
        fragment = _component$$$.fragment,
        on_mount = _component$$$.on_mount,
        on_destroy = _component$$$.on_destroy,
        after_update = _component$$$.after_update;
    fragment && fragment.m(target, anchor); // onMount happens before the initial afterUpdate

    add_render_callback(function () {
      var new_on_destroy = on_mount.map(run).filter(is_function);

      if (on_destroy) {
        on_destroy.push.apply(on_destroy, toConsumableArray(new_on_destroy));
      } else {
        // Edge case - component was destroyed immediately,
        // most likely as a result of a binding initialising
        run_all(new_on_destroy);
      }

      component.$$.on_mount = [];
    });
    after_update.forEach(add_render_callback);
  }

  function destroy_component(component, detaching) {
    var $$ = component.$$;

    if ($$.fragment !== null) {
      run_all($$.on_destroy);
      $$.fragment && $$.fragment.d(detaching); // TODO null out other refs, including component.$$ (but need to
      // preserve final state?)

      $$.on_destroy = $$.fragment = null;
      $$.ctx = [];
    }
  }

  function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
      dirty_components.push(component);
      schedule_update();
      component.$$.dirty.fill(0);
    }

    component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
  }

  function init(component, options, instance, create_fragment, not_equal, props) {
    var dirty = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : [-1];
    var parent_component = current_component;
    set_current_component(component);
    var prop_values = options.props || {};
    var $$ = component.$$ = {
      fragment: null,
      ctx: null,
      // state
      props: props,
      update: noop,
      not_equal: not_equal,
      bound: blank_object(),
      // lifecycle
      on_mount: [],
      on_destroy: [],
      before_update: [],
      after_update: [],
      context: new Map(parent_component ? parent_component.$$.context : []),
      // everything else
      callbacks: blank_object(),
      dirty: dirty,
      skip_bound: false
    };
    var ready = false;
    $$.ctx = instance ? instance(component, prop_values, function (i, ret) {
      var value = (arguments.length <= 2 ? 0 : arguments.length - 2) ? arguments.length <= 2 ? undefined : arguments[2] : ret;

      if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
        if (!$$.skip_bound && $$.bound[i]) $$.bound[i](value);
        if (ready) make_dirty(component, i);
      }

      return ret;
    }) : [];
    $$.update();
    ready = true;
    run_all($$.before_update); // `false` as a special case of no DOM component

    $$.fragment = create_fragment ? create_fragment($$.ctx) : false;

    if (options.target) {
      if (options.hydrate) {
        var nodes = children(options.target); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

        $$.fragment && $$.fragment.l(nodes);
        nodes.forEach(detach);
      } else {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        $$.fragment && $$.fragment.c();
      }

      if (options.intro) transition_in(component.$$.fragment);
      mount_component(component, options.target, options.anchor);
      flush();
    }

    set_current_component(parent_component);
  }
  /**
   * Base class for Svelte components. Used when dev=false.
   */


  var SvelteComponent = /*#__PURE__*/function () {
    function SvelteComponent() {
      classCallCheck(this, SvelteComponent);
    }

    createClass(SvelteComponent, [{
      key: "$destroy",
      value: function $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
      }
    }, {
      key: "$on",
      value: function $on(type, callback) {
        var callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
        callbacks.push(callback);
        return function () {
          var index = callbacks.indexOf(callback);
          if (index !== -1) callbacks.splice(index, 1);
        };
      }
    }, {
      key: "$set",
      value: function $set($$props) {
        if (this.$$set && !is_empty($$props)) {
          this.$$.skip_bound = true;
          this.$$set($$props);
          this.$$.skip_bound = false;
        }
      }
    }]);

    return SvelteComponent;
  }();

  function dispatch_dev(type, detail) {
    document.dispatchEvent(custom_event(type, Object.assign({
      version: '3.31.2'
    }, detail)));
  }

  function append_dev(target, node) {
    dispatch_dev('SvelteDOMInsert', {
      target: target,
      node: node
    });
    append(target, node);
  }

  function insert_dev(target, node, anchor) {
    dispatch_dev('SvelteDOMInsert', {
      target: target,
      node: node,
      anchor: anchor
    });
    insert(target, node, anchor);
  }

  function detach_dev(node) {
    dispatch_dev('SvelteDOMRemove', {
      node: node
    });
    detach(node);
  }

  function set_data_dev(text, data) {
    data = '' + data;
    if (text.wholeText === data) return;
    dispatch_dev('SvelteDOMSetData', {
      node: text,
      data: data
    });
    text.data = data;
  }

  function validate_each_argument(arg) {
    if (typeof arg !== 'string' && !(arg && _typeof_1(arg) === 'object' && 'length' in arg)) {
      var msg = '{#each} only iterates over array-like objects.';

      if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
        msg += ' You can use a spread to convert this iterable into an array.';
      }

      throw new Error(msg);
    }
  }

  function validate_slots(name, slot, keys) {
    for (var _i2 = 0, _Object$keys = Object.keys(slot); _i2 < _Object$keys.length; _i2++) {
      var slot_key = _Object$keys[_i2];

      if (!~keys.indexOf(slot_key)) {
        console.warn("<".concat(name, "> received an unexpected slot \"").concat(slot_key, "\"."));
      }
    }
  }
  /**
   * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
   */


  var SvelteComponentDev = /*#__PURE__*/function (_SvelteComponent) {
    inherits(SvelteComponentDev, _SvelteComponent);

    var _super2 = _createSuper(SvelteComponentDev);

    function SvelteComponentDev(options) {
      classCallCheck(this, SvelteComponentDev);

      if (!options || !options.target && !options.$$inline) {
        throw new Error("'target' is a required option");
      }

      return _super2.call(this);
    }

    createClass(SvelteComponentDev, [{
      key: "$destroy",
      value: function $destroy() {
        get(getPrototypeOf(SvelteComponentDev.prototype), "$destroy", this).call(this);

        this.$destroy = function () {
          console.warn('Component was already destroyed'); // eslint-disable-line no-console
        };
      }
    }, {
      key: "$capture_state",
      value: function $capture_state() {}
    }, {
      key: "$inject_state",
      value: function $inject_state() {}
    }]);

    return SvelteComponentDev;
  }(SvelteComponent);

  var subscriber_queue = [];
  /**
   * Creates a `Readable` store that allows reading by subscription.
   * @param value initial value
   * @param {StartStopNotifier}start start and stop notifications for subscriptions
   */

  function readable(value, start) {
    return {
      subscribe: writable(value, start).subscribe
    };
  }
  /**
   * Create a `Writable` store that allows both updating and reading by subscription.
   * @param {*=}value initial value
   * @param {StartStopNotifier=}start start and stop notifications for subscriptions
   */


  function writable(value) {
    var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
    var stop;
    var subscribers = [];

    function set(new_value) {
      if (safe_not_equal(value, new_value)) {
        value = new_value;

        if (stop) {
          // store is ready
          var run_queue = !subscriber_queue.length;

          for (var i = 0; i < subscribers.length; i += 1) {
            var s = subscribers[i];
            s[1]();
            subscriber_queue.push(s, value);
          }

          if (run_queue) {
            for (var _i = 0; _i < subscriber_queue.length; _i += 2) {
              subscriber_queue[_i][0](subscriber_queue[_i + 1]);
            }

            subscriber_queue.length = 0;
          }
        }
      }
    }

    function update(fn) {
      set(fn(value));
    }

    function subscribe(run) {
      var invalidate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
      var subscriber = [run, invalidate];
      subscribers.push(subscriber);

      if (subscribers.length === 1) {
        stop = start(set) || noop;
      }

      run(value);
      return function () {
        var index = subscribers.indexOf(subscriber);

        if (index !== -1) {
          subscribers.splice(index, 1);
        }

        if (subscribers.length === 0) {
          stop();
          stop = null;
        }
      };
    }

    return {
      set: set,
      update: update,
      subscribe: subscribe
    };
  }

  function derived(stores, fn, initial_value) {
    var single = !Array.isArray(stores);
    var stores_array = single ? [stores] : stores;
    var auto = fn.length < 2;
    return readable(initial_value, function (set) {
      var inited = false;
      var values = [];
      var pending = 0;
      var cleanup = noop;

      var sync = function sync() {
        if (pending) {
          return;
        }

        cleanup();
        var result = fn(single ? values[0] : values, set);

        if (auto) {
          set(result);
        } else {
          cleanup = is_function(result) ? result : noop;
        }
      };

      var unsubscribers = stores_array.map(function (store, i) {
        return subscribe(store, function (value) {
          values[i] = value;
          pending &= ~(1 << i);

          if (inited) {
            sync();
          }
        }, function () {
          pending |= 1 << i;
        });
      });
      inited = true;
      sync();
      return function stop() {
        run_all(unsubscribers);
        cleanup();
      };
    });
  }

  var state = writable({});
  var devices = derived(state, function (state) {
    if (state.status) {
      return Object.keys(state.status.devices).map(function (device) {
        return state.status.devices[device];
      });
    }

    return [];
  });
  var activeSessions = derived(state, function (state) {
    if (state.status) {
      return state.status.activeSessions;
    }

    return [];
  });

  function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$2(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$2() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
  var file = "src/components/Header.svelte";

  function create_fragment(ctx) {
    var h2;
    var block = {
      c: function create() {
        h2 = element("h2");
        h2.textContent = "".concat(
        /*title*/
        ctx[0]);
        add_location(h2, file, 10, 0, 98);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, h2, anchor);
      },
      p: noop,
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(h2);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function instance($$self, $$props, $$invalidate) {
    var _$$props$$$slots = $$props.$$slots,
        slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
        $$props.$$scope;
    validate_slots("Header", slots, []);
    var context = $$props.context;
    var title = context.config.title;
    var writable_props = ["context"];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Header> was created with unknown prop '".concat(key, "'"));
    });

    $$self.$$set = function ($$props) {
      if ("context" in $$props) $$invalidate(1, context = $$props.context);
    };

    $$self.$capture_state = function () {
      return {
        context: context,
        title: title
      };
    };

    $$self.$inject_state = function ($$props) {
      if ("context" in $$props) $$invalidate(1, context = $$props.context);
      if ("title" in $$props) $$invalidate(0, title = $$props.title);
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    return [title, context];
  }

  var Header = /*#__PURE__*/function (_SvelteComponentDev) {
    inherits(Header, _SvelteComponentDev);

    var _super = _createSuper$1(Header);

    function Header(options) {
      var _this;

      classCallCheck(this, Header);

      _this = _super.call(this, options);
      init(assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
        context: 1
      });
      dispatch_dev("SvelteRegisterComponent", {
        component: assertThisInitialized(_this),
        tagName: "Header",
        options: options,
        id: create_fragment.name
      });
      var ctx = _this.$$.ctx;
      var props = options.props || {};

      if (
      /*context*/
      ctx[1] === undefined && !("context" in props)) {
        console.warn("<Header> was created without expected prop 'context'");
      }

      return _this;
    }

    createClass(Header, [{
      key: "context",
      get: function get() {
        throw new Error("<Header>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Header>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }]);

    return Header;
  }(SvelteComponentDev);

  function _createSuper$2(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$3(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$3() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
  var file$1 = "src/components/Navigation.svelte";

  function create_fragment$1(ctx) {
    var nav;
    var block = {
      c: function create() {
        nav = element("nav");
        nav.textContent = "Test";
        add_location(nav, file$1, 8, 0, 61);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, nav, anchor);
      },
      p: noop,
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(nav);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment$1.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function instance$1($$self, $$props, $$invalidate) {
    var _$$props$$$slots = $$props.$$slots,
        slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
        $$props.$$scope;
    validate_slots("Navigation", slots, []);
    var context = $$props.context;
    var writable_props = ["context"];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Navigation> was created with unknown prop '".concat(key, "'"));
    });

    $$self.$$set = function ($$props) {
      if ("context" in $$props) $$invalidate(0, context = $$props.context);
    };

    $$self.$capture_state = function () {
      return {
        context: context
      };
    };

    $$self.$inject_state = function ($$props) {
      if ("context" in $$props) $$invalidate(0, context = $$props.context);
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    return [context];
  }

  var Navigation = /*#__PURE__*/function (_SvelteComponentDev) {
    inherits(Navigation, _SvelteComponentDev);

    var _super = _createSuper$2(Navigation);

    function Navigation(options) {
      var _this;

      classCallCheck(this, Navigation);

      _this = _super.call(this, options);
      init(assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {
        context: 0
      });
      dispatch_dev("SvelteRegisterComponent", {
        component: assertThisInitialized(_this),
        tagName: "Navigation",
        options: options,
        id: create_fragment$1.name
      });
      var ctx = _this.$$.ctx;
      var props = options.props || {};

      if (
      /*context*/
      ctx[0] === undefined && !("context" in props)) {
        console.warn("<Navigation> was created without expected prop 'context'");
      }

      return _this;
    }

    createClass(Navigation, [{
      key: "context",
      get: function get() {
        throw new Error("<Navigation>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Navigation>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }]);

    return Navigation;
  }(SvelteComponentDev);

  function _createSuper$3(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$4(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$4() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
  var file$2 = "src/components/DeviceList.svelte";

  function get_each_context(ctx, list, i) {
    var child_ctx = ctx.slice();
    child_ctx[2] = list[i];
    return child_ctx;
  } // (17:2) {#each list as device}


  function create_each_block(ctx) {
    var li;
    var t_value =
    /*device*/
    ctx[2].alias + "";
    var t;
    var block = {
      c: function create() {
        li = element("li");
        t = text(t_value);
        add_location(li, file$2, 17, 4, 213);
      },
      m: function mount(target, anchor) {
        insert_dev(target, li, anchor);
        append_dev(li, t);
      },
      p: function update(ctx, dirty) {
        if (dirty &
        /*list*/
        1 && t_value !== (t_value =
        /*device*/
        ctx[2].alias + "")) set_data_dev(t, t_value);
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(li);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_each_block.name,
      type: "each",
      source: "(17:2) {#each list as device}",
      ctx: ctx
    });
    return block;
  }

  function create_fragment$2(ctx) {
    var ul;
    var each_value =
    /*list*/
    ctx[0];
    validate_each_argument(each_value);
    var each_blocks = [];

    for (var i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    }

    var block = {
      c: function create() {
        ul = element("ul");

        for (var _i = 0; _i < each_blocks.length; _i += 1) {
          each_blocks[_i].c();
        }

        add_location(ul, file$2, 14, 0, 178);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, ul, anchor);

        for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
          each_blocks[_i2].m(ul, null);
        }
      },
      p: function update(ctx, _ref) {
        var _ref2 = slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (dirty &
        /*list*/
        1) {
          each_value =
          /*list*/
          ctx[0];
          validate_each_argument(each_value);

          var _i3;

          for (_i3 = 0; _i3 < each_value.length; _i3 += 1) {
            var child_ctx = get_each_context(ctx, each_value, _i3);

            if (each_blocks[_i3]) {
              each_blocks[_i3].p(child_ctx, dirty);
            } else {
              each_blocks[_i3] = create_each_block(child_ctx);

              each_blocks[_i3].c();

              each_blocks[_i3].m(ul, null);
            }
          }

          for (; _i3 < each_blocks.length; _i3 += 1) {
            each_blocks[_i3].d(1);
          }

          each_blocks.length = each_value.length;
        }
      },
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(ul);
        destroy_each(each_blocks, detaching);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment$2.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function instance$2($$self, $$props, $$invalidate) {
    var _$$props$$$slots = $$props.$$slots,
        slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
        $$props.$$scope;
    validate_slots("DeviceList", slots, []);
    var context = $$props.context;
    var list = [];
    devices.subscribe(function (items) {
      $$invalidate(0, list = items);
    });
    var writable_props = ["context"];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<DeviceList> was created with unknown prop '".concat(key, "'"));
    });

    $$self.$$set = function ($$props) {
      if ("context" in $$props) $$invalidate(1, context = $$props.context);
    };

    $$self.$capture_state = function () {
      return {
        context: context,
        devices: devices,
        list: list
      };
    };

    $$self.$inject_state = function ($$props) {
      if ("context" in $$props) $$invalidate(1, context = $$props.context);
      if ("list" in $$props) $$invalidate(0, list = $$props.list);
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    return [list, context];
  }

  var DeviceList = /*#__PURE__*/function (_SvelteComponentDev) {
    inherits(DeviceList, _SvelteComponentDev);

    var _super = _createSuper$3(DeviceList);

    function DeviceList(options) {
      var _this;

      classCallCheck(this, DeviceList);

      _this = _super.call(this, options);
      init(assertThisInitialized(_this), options, instance$2, create_fragment$2, safe_not_equal, {
        context: 1
      });
      dispatch_dev("SvelteRegisterComponent", {
        component: assertThisInitialized(_this),
        tagName: "DeviceList",
        options: options,
        id: create_fragment$2.name
      });
      var ctx = _this.$$.ctx;
      var props = options.props || {};

      if (
      /*context*/
      ctx[1] === undefined && !("context" in props)) {
        console.warn("<DeviceList> was created without expected prop 'context'");
      }

      return _this;
    }

    createClass(DeviceList, [{
      key: "context",
      get: function get() {
        throw new Error("<DeviceList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<DeviceList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }]);

    return DeviceList;
  }(SvelteComponentDev);

  function _createSuper$4(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$5(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$5() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
  var file$3 = "src/components/SessionList.svelte";

  function get_each_context$1(ctx, list, i) {
    var child_ctx = ctx.slice();
    child_ctx[2] = list[i];
    return child_ctx;
  } // (17:2) {#each list as session}


  function create_each_block$1(ctx) {
    var li;
    var t_value =
    /*session*/
    ctx[2].alias + "";
    var t;
    var block = {
      c: function create() {
        li = element("li");
        t = text(t_value);
        add_location(li, file$3, 17, 4, 228);
      },
      m: function mount(target, anchor) {
        insert_dev(target, li, anchor);
        append_dev(li, t);
      },
      p: function update(ctx, dirty) {
        if (dirty &
        /*list*/
        1 && t_value !== (t_value =
        /*session*/
        ctx[2].alias + "")) set_data_dev(t, t_value);
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(li);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_each_block$1.name,
      type: "each",
      source: "(17:2) {#each list as session}",
      ctx: ctx
    });
    return block;
  }

  function create_fragment$3(ctx) {
    var ul;
    var each_value =
    /*list*/
    ctx[0];
    validate_each_argument(each_value);
    var each_blocks = [];

    for (var i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
    }

    var block = {
      c: function create() {
        ul = element("ul");

        for (var _i = 0; _i < each_blocks.length; _i += 1) {
          each_blocks[_i].c();
        }

        add_location(ul, file$3, 14, 0, 192);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, ul, anchor);

        for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
          each_blocks[_i2].m(ul, null);
        }
      },
      p: function update(ctx, _ref) {
        var _ref2 = slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (dirty &
        /*list*/
        1) {
          each_value =
          /*list*/
          ctx[0];
          validate_each_argument(each_value);

          var _i3;

          for (_i3 = 0; _i3 < each_value.length; _i3 += 1) {
            var child_ctx = get_each_context$1(ctx, each_value, _i3);

            if (each_blocks[_i3]) {
              each_blocks[_i3].p(child_ctx, dirty);
            } else {
              each_blocks[_i3] = create_each_block$1(child_ctx);

              each_blocks[_i3].c();

              each_blocks[_i3].m(ul, null);
            }
          }

          for (; _i3 < each_blocks.length; _i3 += 1) {
            each_blocks[_i3].d(1);
          }

          each_blocks.length = each_value.length;
        }
      },
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(ul);
        destroy_each(each_blocks, detaching);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment$3.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function instance$3($$self, $$props, $$invalidate) {
    var _$$props$$$slots = $$props.$$slots,
        slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
        $$props.$$scope;
    validate_slots("SessionList", slots, []);
    var context = $$props.context;
    var list = [];
    activeSessions.subscribe(function (items) {
      $$invalidate(0, list = items);
    });
    var writable_props = ["context"];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<SessionList> was created with unknown prop '".concat(key, "'"));
    });

    $$self.$$set = function ($$props) {
      if ("context" in $$props) $$invalidate(1, context = $$props.context);
    };

    $$self.$capture_state = function () {
      return {
        context: context,
        activeSessions: activeSessions,
        list: list
      };
    };

    $$self.$inject_state = function ($$props) {
      if ("context" in $$props) $$invalidate(1, context = $$props.context);
      if ("list" in $$props) $$invalidate(0, list = $$props.list);
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    return [list, context];
  }

  var SessionList = /*#__PURE__*/function (_SvelteComponentDev) {
    inherits(SessionList, _SvelteComponentDev);

    var _super = _createSuper$4(SessionList);

    function SessionList(options) {
      var _this;

      classCallCheck(this, SessionList);

      _this = _super.call(this, options);
      init(assertThisInitialized(_this), options, instance$3, create_fragment$3, safe_not_equal, {
        context: 1
      });
      dispatch_dev("SvelteRegisterComponent", {
        component: assertThisInitialized(_this),
        tagName: "SessionList",
        options: options,
        id: create_fragment$3.name
      });
      var ctx = _this.$$.ctx;
      var props = options.props || {};

      if (
      /*context*/
      ctx[1] === undefined && !("context" in props)) {
        console.warn("<SessionList> was created without expected prop 'context'");
      }

      return _this;
    }

    createClass(SessionList, [{
      key: "context",
      get: function get() {
        throw new Error("<SessionList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<SessionList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }]);

    return SessionList;
  }(SvelteComponentDev);

  function _createSuper$5(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$6(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$6() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
  var file$4 = "src/components/Content.svelte";

  function create_fragment$4(ctx) {
    var div;
    var sessionlist;
    var t;
    var devicelist;
    var current;
    sessionlist = new SessionList({
      props: {
        context:
        /*context*/
        ctx[0]
      },
      $$inline: true
    });
    devicelist = new DeviceList({
      props: {
        context:
        /*context*/
        ctx[0]
      },
      $$inline: true
    });
    var block = {
      c: function create() {
        div = element("div");
        create_component(sessionlist.$$.fragment);
        t = space();
        create_component(devicelist.$$.fragment);
        add_location(div, file$4, 12, 0, 196);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, div, anchor);
        mount_component(sessionlist, div, null);
        append_dev(div, t);
        mount_component(devicelist, div, null);
        current = true;
      },
      p: function update(ctx, _ref) {
        var _ref2 = slicedToArray(_ref, 1),
            dirty = _ref2[0];

        var sessionlist_changes = {};
        if (dirty &
        /*context*/
        1) sessionlist_changes.context =
        /*context*/
        ctx[0];
        sessionlist.$set(sessionlist_changes);
        var devicelist_changes = {};
        if (dirty &
        /*context*/
        1) devicelist_changes.context =
        /*context*/
        ctx[0];
        devicelist.$set(devicelist_changes);
      },
      i: function intro(local) {
        if (current) return;
        transition_in(sessionlist.$$.fragment, local);
        transition_in(devicelist.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(sessionlist.$$.fragment, local);
        transition_out(devicelist.$$.fragment, local);
        current = false;
      },
      d: function destroy(detaching) {
        if (detaching) detach_dev(div);
        destroy_component(sessionlist);
        destroy_component(devicelist);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment$4.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function instance$4($$self, $$props, $$invalidate) {
    var _$$props$$$slots = $$props.$$slots,
        slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
        $$props.$$scope;
    validate_slots("Content", slots, []);
    var context = $$props.context;
    var title = context.config.title;
    var writable_props = ["context"];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Content> was created with unknown prop '".concat(key, "'"));
    });

    $$self.$$set = function ($$props) {
      if ("context" in $$props) $$invalidate(0, context = $$props.context);
    };

    $$self.$capture_state = function () {
      return {
        context: context,
        DeviceList: DeviceList,
        SessionList: SessionList,
        title: title
      };
    };

    $$self.$inject_state = function ($$props) {
      if ("context" in $$props) $$invalidate(0, context = $$props.context);
      if ("title" in $$props) title = $$props.title;
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    return [context];
  }

  var Content = /*#__PURE__*/function (_SvelteComponentDev) {
    inherits(Content, _SvelteComponentDev);

    var _super = _createSuper$5(Content);

    function Content(options) {
      var _this;

      classCallCheck(this, Content);

      _this = _super.call(this, options);
      init(assertThisInitialized(_this), options, instance$4, create_fragment$4, safe_not_equal, {
        context: 0
      });
      dispatch_dev("SvelteRegisterComponent", {
        component: assertThisInitialized(_this),
        tagName: "Content",
        options: options,
        id: create_fragment$4.name
      });
      var ctx = _this.$$.ctx;
      var props = options.props || {};

      if (
      /*context*/
      ctx[0] === undefined && !("context" in props)) {
        console.warn("<Content> was created without expected prop 'context'");
      }

      return _this;
    }

    createClass(Content, [{
      key: "context",
      get: function get() {
        throw new Error("<Content>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Content>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }]);

    return Content;
  }(SvelteComponentDev);

  function _createSuper$6(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$7(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$7() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
  var file$5 = "src/components/Footer.svelte";

  function create_fragment$5(ctx) {
    var footer;
    var block = {
      c: function create() {
        footer = element("footer");
        add_location(footer, file$5, 8, 0, 61);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        insert_dev(target, footer, anchor);
      },
      p: noop,
      i: noop,
      o: noop,
      d: function destroy(detaching) {
        if (detaching) detach_dev(footer);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment$5.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function instance$5($$self, $$props, $$invalidate) {
    var _$$props$$$slots = $$props.$$slots,
        slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
        $$props.$$scope;
    validate_slots("Footer", slots, []);
    var context = $$props.context;
    var writable_props = ["context"];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Footer> was created with unknown prop '".concat(key, "'"));
    });

    $$self.$$set = function ($$props) {
      if ("context" in $$props) $$invalidate(0, context = $$props.context);
    };

    $$self.$capture_state = function () {
      return {
        context: context
      };
    };

    $$self.$inject_state = function ($$props) {
      if ("context" in $$props) $$invalidate(0, context = $$props.context);
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    return [context];
  }

  var Footer = /*#__PURE__*/function (_SvelteComponentDev) {
    inherits(Footer, _SvelteComponentDev);

    var _super = _createSuper$6(Footer);

    function Footer(options) {
      var _this;

      classCallCheck(this, Footer);

      _this = _super.call(this, options);
      init(assertThisInitialized(_this), options, instance$5, create_fragment$5, safe_not_equal, {
        context: 0
      });
      dispatch_dev("SvelteRegisterComponent", {
        component: assertThisInitialized(_this),
        tagName: "Footer",
        options: options,
        id: create_fragment$5.name
      });
      var ctx = _this.$$.ctx;
      var props = options.props || {};

      if (
      /*context*/
      ctx[0] === undefined && !("context" in props)) {
        console.warn("<Footer> was created without expected prop 'context'");
      }

      return _this;
    }

    createClass(Footer, [{
      key: "context",
      get: function get() {
        throw new Error("<Footer>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Footer>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }]);

    return Footer;
  }(SvelteComponentDev);

  function _createSuper$7(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$8(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$8() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function create_fragment$6(ctx) {
    var header;
    var t0;
    var navigation;
    var t1;
    var content;
    var t2;
    var footer;
    var current;
    header = new Header({
      props: {
        context:
        /*context*/
        ctx[0]
      },
      $$inline: true
    });
    navigation = new Navigation({
      props: {
        context:
        /*context*/
        ctx[0]
      },
      $$inline: true
    });
    content = new Content({
      props: {
        context:
        /*context*/
        ctx[0]
      },
      $$inline: true
    });
    footer = new Footer({
      props: {
        context:
        /*context*/
        ctx[0]
      },
      $$inline: true
    });
    var block = {
      c: function create() {
        create_component(header.$$.fragment);
        t0 = space();
        create_component(navigation.$$.fragment);
        t1 = space();
        create_component(content.$$.fragment);
        t2 = space();
        create_component(footer.$$.fragment);
      },
      l: function claim(nodes) {
        throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
      },
      m: function mount(target, anchor) {
        mount_component(header, target, anchor);
        insert_dev(target, t0, anchor);
        mount_component(navigation, target, anchor);
        insert_dev(target, t1, anchor);
        mount_component(content, target, anchor);
        insert_dev(target, t2, anchor);
        mount_component(footer, target, anchor);
        current = true;
      },
      p: function update(ctx, _ref) {
        var _ref2 = slicedToArray(_ref, 1),
            dirty = _ref2[0];

        var header_changes = {};
        if (dirty &
        /*context*/
        1) header_changes.context =
        /*context*/
        ctx[0];
        header.$set(header_changes);
        var navigation_changes = {};
        if (dirty &
        /*context*/
        1) navigation_changes.context =
        /*context*/
        ctx[0];
        navigation.$set(navigation_changes);
        var content_changes = {};
        if (dirty &
        /*context*/
        1) content_changes.context =
        /*context*/
        ctx[0];
        content.$set(content_changes);
        var footer_changes = {};
        if (dirty &
        /*context*/
        1) footer_changes.context =
        /*context*/
        ctx[0];
        footer.$set(footer_changes);
      },
      i: function intro(local) {
        if (current) return;
        transition_in(header.$$.fragment, local);
        transition_in(navigation.$$.fragment, local);
        transition_in(content.$$.fragment, local);
        transition_in(footer.$$.fragment, local);
        current = true;
      },
      o: function outro(local) {
        transition_out(header.$$.fragment, local);
        transition_out(navigation.$$.fragment, local);
        transition_out(content.$$.fragment, local);
        transition_out(footer.$$.fragment, local);
        current = false;
      },
      d: function destroy(detaching) {
        destroy_component(header, detaching);
        if (detaching) detach_dev(t0);
        destroy_component(navigation, detaching);
        if (detaching) detach_dev(t1);
        destroy_component(content, detaching);
        if (detaching) detach_dev(t2);
        destroy_component(footer, detaching);
      }
    };
    dispatch_dev("SvelteRegisterBlock", {
      block: block,
      id: create_fragment$6.name,
      type: "component",
      source: "",
      ctx: ctx
    });
    return block;
  }

  function instance$6($$self, $$props, $$invalidate) {
    var $state;
    validate_store(state, "state");
    component_subscribe($$self, state, function ($$value) {
      return $$invalidate(1, $state = $$value);
    });
    var _$$props$$$slots = $$props.$$slots,
        slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
        $$props.$$scope;
    validate_slots("Client", slots, []);
    var context = $$props.context;
    var currentState = $state;
    fetch(context.config.incubator).then(function (res) {
      return res.json();
    }).then(function (data) {
      state.update(function (oldState) {
        oldState.status = data;
        return oldState;
      });
    });
    var writable_props = ["context"];
    Object.keys($$props).forEach(function (key) {
      if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Client> was created with unknown prop '".concat(key, "'"));
    });

    $$self.$$set = function ($$props) {
      if ("context" in $$props) $$invalidate(0, context = $$props.context);
    };

    $$self.$capture_state = function () {
      return {
        state: state,
        Header: Header,
        Navigation: Navigation,
        Content: Content,
        Footer: Footer,
        context: context,
        currentState: currentState,
        $state: $state
      };
    };

    $$self.$inject_state = function ($$props) {
      if ("context" in $$props) $$invalidate(0, context = $$props.context);
      if ("currentState" in $$props) currentState = $$props.currentState;
    };

    if ($$props && "$$inject" in $$props) {
      $$self.$inject_state($$props.$$inject);
    }

    return [context];
  }

  var Client = /*#__PURE__*/function (_SvelteComponentDev) {
    inherits(Client, _SvelteComponentDev);

    var _super = _createSuper$7(Client);

    function Client(options) {
      var _this;

      classCallCheck(this, Client);

      _this = _super.call(this, options);
      init(assertThisInitialized(_this), options, instance$6, create_fragment$6, safe_not_equal, {
        context: 0
      });
      dispatch_dev("SvelteRegisterComponent", {
        component: assertThisInitialized(_this),
        tagName: "Client",
        options: options,
        id: create_fragment$6.name
      });
      var ctx = _this.$$.ctx;
      var props = options.props || {};

      if (
      /*context*/
      ctx[0] === undefined && !("context" in props)) {
        console.warn("<Client> was created without expected prop 'context'");
      }

      return _this;
    }

    createClass(Client, [{
      key: "context",
      get: function get() {
        throw new Error("<Client>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      },
      set: function set(value) {
        throw new Error("<Client>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
      }
    }]);

    return Client;
  }(SvelteComponentDev);

  function _createSuper$8(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$9(); return function _createSuperInternal() { var Super = getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct$9() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
  var elementName = 'incubator-client';
  var config = {
    incubator: 'http://192.168.68.50:3000/status',
    title: 'Vaskerom'
  };

  var incubatorClient = /*#__PURE__*/function (_HTMLElement) {
    inherits(incubatorClient, _HTMLElement);

    var _super = _createSuper$8(incubatorClient);

    function incubatorClient() {
      var _this;

      classCallCheck(this, incubatorClient);

      _this = _super.call(this);
      _this.config = config;
      return _this;
    }

    createClass(incubatorClient, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        this.app = new Client({
          target: this,
          props: {
            context: this
          }
        });
      }
    }]);

    return incubatorClient;
  }( /*#__PURE__*/wrapNativeSuper(HTMLElement));

  if (customElements && customElements.define) {
    if (!window.customElements.get(elementName)) {
      customElements.define(elementName, incubatorClient);
    }
  } else {
    document.registerElement(elementName, {
      prototype: incubatorClient.prototype
    });
  }

}());
//# sourceMappingURL=bundle.js.map
