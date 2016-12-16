'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

// import elementType from './prop-types/elementType';

var propTypes = {
    href: _react2["default"].PropTypes.string,
    divider: _react2["default"].PropTypes.bool,
    active: _react2["default"].PropTypes.bool,
    disabled: _react2["default"].PropTypes.bool,
    onSelect: _react2["default"].PropTypes.func,
    onKeyDown: _react2["default"].PropTypes.func,
    eventKey: _react2["default"].PropTypes.any
};

var defaultProps = {
    componentClass: 'a',
    active: false,
    disabled: false,
    divider: false,
    clsPrefix: 'u-menu-item'
};

var DropdownMenuItem = function (_React$Component) {
    _inherits(DropdownMenuItem, _React$Component);

    function DropdownMenuItem(props) {
        _classCallCheck(this, DropdownMenuItem);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }

    DropdownMenuItem.prototype.handleClick = function handleClick(event) {
        var onSelect = this.props.onSelect;

        if (this.props.disabled) {
            event.preventDefault();
            return;
        }
        onSelect && onSelect(this.props.eventKey, this.props, event);
    };

    DropdownMenuItem.prototype.render = function render() {
        var _props = this.props,
            children = _props.children,
            divider = _props.divider,
            onSelect = _props.onSelect,
            onKeyDown = _props.onKeyDown,
            clsPrefix = _props.clsPrefix,
            Component = _props.componentClass,
            props = _objectWithoutProperties(_props, ['children', 'divider', 'onSelect', 'onKeyDown', 'clsPrefix', 'componentClass']);

        var classes = (0, _classnames2["default"])({
            active: this.props.active,
            disabled: this.props.disabled
        }, '' + clsPrefix);
        if (divider) {
            return _react2["default"].createElement('li', { role: 'divider', className: 'u-menu-item-break' });
        }

        return _react2["default"].createElement(
            'li',
            { role: 'presentation', className: classes },
            _react2["default"].createElement(
                Component,
                _extends({}, props, {
                    role: 'menu-item',
                    tabIndex: '-1',
                    onClick: this.handleClick
                }),
                children
            )
        );
    };

    return DropdownMenuItem;
}(_react2["default"].Component);

;

DropdownMenuItem.propTypes = propTypes;

DropdownMenuItem.defaultProps = defaultProps;

exports["default"] = DropdownMenuItem;
module.exports = exports['default'];