function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _getPrototypeOf(o) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    }, _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: !0,
            configurable: !0
        }
    }), superClass && _setPrototypeOf(subClass, superClass);
}
function _possibleConstructorReturn(self, call) {
    return call && ("object" === _typeof(call) || "function" == typeof call) ? call : (function(self) {
        if (void 0 === self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return self;
    })(self);
}
function _setPrototypeOf(o, p) {
    return _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        return o.__proto__ = p, o;
    }, _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    return obj && "undefined" != typeof Symbol && obj.constructor === Symbol ? "symbol" : typeof obj;
}, BaseClass = function() {
    "use strict";
    _classCallCheck(this, BaseClass);
}, Broken = function(BaseClass) {
    "use strict";
    function Broken() {
        return _classCallCheck(this, Broken), _possibleConstructorReturn(this, _getPrototypeOf(Broken).apply(this, arguments));
    }
    return _inherits(Broken, BaseClass), Broken;
}(BaseClass);
new Broken().bar;
var IncorrectlyExtends = function(BaseClass) {
    "use strict";
    function IncorrectlyExtends() {
        return _classCallCheck(this, IncorrectlyExtends), _possibleConstructorReturn(this, _getPrototypeOf(IncorrectlyExtends).apply(this, arguments));
    }
    return _inherits(IncorrectlyExtends, BaseClass), IncorrectlyExtends;
}(BaseClass);