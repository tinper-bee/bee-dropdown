'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _beeButton = require('bee-button');

var _beeButton2 = _interopRequireDefault(_beeButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
    noCaret: _react2["default"].PropTypes.bool,
    title: _react2["default"].PropTypes.string,
    useAnchor: _react2["default"].PropTypes.bool,
    dropup: _react2["default"].PropTypes.bool
};

var defaultProps = {
    noCaret: false,
    useAnchor: false,
    dropup: false
};

var CARET = _react2["default"].createElement('i', { className: 'uf uf-anglearrowdown' });

var CARETUP = _react2["default"].createElement('i', { className: 'uf uf-chevronarrowup' });

var DorpdownToggle = function (_React$Component) {
    _inherits(DorpdownToggle, _React$Component);

    function DorpdownToggle(props) {
        _classCallCheck(this, DorpdownToggle);

        return _possibleConstructorReturn(this, _React$Component.call(this, props));
    }

    DorpdownToggle.prototype.render = function render() {
        var dropup = this.props.dropup;

        var caret = this.props.noCaret ? null : dropup ? CARETUP : CARET;
        var Component = this.props.useAnchor ? 'a' : _beeButton2["default"];

        var classes = _defineProperty({}, 'dropdown-toggle', true);
        console.log();
        return _react2["default"].createElement(
            Component,
            _extends({}, this.props, {
                className: (0, _classnames2["default"])(classes, this.props.className),
                htmlType: 'button',
                role: 'toggle'
            }),
            this.props.title || this.props.children,
            caret
        );
    };

    return DorpdownToggle;
}(_react2["default"].Component);

;

DorpdownToggle.propTypes = propTypes;

DorpdownToggle.defaultProps = defaultProps;

exports["default"] = DorpdownToggle;
module.exports = exports['default'];