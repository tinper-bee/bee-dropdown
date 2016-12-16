'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _DropdownMenuItem = require('./DropdownMenuItem');

var _DropdownMenuItem2 = _interopRequireDefault(_DropdownMenuItem);

var _createChainedFunction = require('tinper-bee-core/lib/createChainedFunction');

var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

// import createChainedFunction from './utils/createChainedFunction';

var propTypes = {
    pullRight: _react.PropTypes.bool,
    dropup: _react.PropTypes.bool,
    onClose: _react.PropTypes.func,
    onSelect: _react.PropTypes.func,
    colors: _react.PropTypes.oneOf(['primary', 'accent', 'danger', 'info', 'success', 'warning']),
    open: _react.PropTypes.bool,
    labelledBy: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    rootCloseEvent: _react.PropTypes.oneOf(['click', 'mousedown'])
};

var defaultProps = {
    clsPrefix: 'u-menu',
    pullRight: false,
    dropup: false,
    open: false
};

var color = {
    primary: 'primary',
    accent: 'accent',
    danger: 'danger',
    info: 'info',
    success: 'success',
    warning: 'warning'
};

var DorpdownMenu = function (_React$Component) {
    _inherits(DorpdownMenu, _React$Component);

    function DorpdownMenu(props) {
        _classCallCheck(this, DorpdownMenu);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.handleSelect = _this.handleSelect.bind(_this);
        return _this;
    }

    DorpdownMenu.prototype.handleKeyDown = function handleKeyDown(event) {
        switch (event.keyCode) {
            case keycode.codes.down:
                this.focusNext();
                event.preventDefault();
                break;
            case keycode.codes.up:
                this.focusPrevious();
                event.preventDefault();
                break;
            case keycode.codes.esc:
            case keycode.codes.tab:
                this.props.onClose(event);
                break;
            default:
        }
    };

    DorpdownMenu.prototype.getFocusableMenuItems = function getFocusableMenuItems() {
        var menuNode = ReactDOM.findDOMNode(this);
        if (menuNode === undefined) {
            return [];
        }
        return Array.from(menuNode.querySelectorAll('[role="menu-item"]'));
    };

    DorpdownMenu.prototype.getItemsAndActiveIndex = function getItemsAndActiveIndex() {
        var items = this.getFocusableMenuItems();
        var activeItemIndex = items.indexOf(document.activeElement);

        return {
            items: items,
            activeItemIndex: activeItemIndex
        };
    };

    DorpdownMenu.prototype.focusNext = function focusNext() {
        var _getItemsAndActiveInd = this.getItemsAndActiveIndex(),
            items = _getItemsAndActiveInd.items,
            activeIndex = _getItemsAndActiveInd.activeIndex;

        if (items.length === 0) {
            return;
        }

        var nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        items[nextIndex].focus();
    };

    DorpdownMenu.prototype.focusPrevious = function focusPrevious() {
        var _getItemsAndActiveInd2 = this.getItemsAndActiveIndex(),
            items = _getItemsAndActiveInd2.items,
            activeIndex = _getItemsAndActiveInd2.activeIndex;

        if (items.length === 0) {
            return;
        }

        var prevIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        items[prevIndex].focus();
    };

    DorpdownMenu.prototype.handleSelect = function handleSelect(event) {
        var onClose = this.props.onClose;

        onClose && onClose();
    };

    DorpdownMenu.prototype.render = function render() {
        var _this2 = this,
            _classes;

        var _props = this.props,
            pullRight = _props.pullRight,
            children = _props.children,
            className = _props.className,
            clsPrefix = _props.clsPrefix,
            activeKey = _props.activeKey,
            dropup = _props.dropup,
            open = _props.open,
            rootCloseEvent = _props.rootCloseEvent,
            onClose = _props.onClose,
            labelledBy = _props.labelledBy,
            colors = _props.colors,
            props = _objectWithoutProperties(_props, ['pullRight', 'children', 'className', 'clsPrefix', 'activeKey', 'dropup', 'open', 'rootCloseEvent', 'onClose', 'labelledBy', 'colors']);

        var items = _react2["default"].Children.map(children, function (item, index) {
            var childProps = {
                key: index,
                ref: 'menu_item_' + index,
                onSelect: (0, _createChainedFunction2["default"])(_this2.handleSelect, _this2.props.onSelect)
            };

            if (activeKey) {
                childProps.active = activeKey === item.props.eventKey;
            }

            if (_react2["default"].isValidElement(item)) {
                return _react2["default"].cloneElement(item, childProps, item.props.children);
            }

            return item;
        });

        var classes = (_classes = {}, _defineProperty(_classes, '' + clsPrefix, true), _defineProperty(_classes, "dropup", dropup), _defineProperty(_classes, "show", open), _classes);

        if (color[colors]) {
            classes[clsPrefix + '-' + color[colors]] = true;
        }

        return _react2["default"].createElement(
            'ul',
            _extends({}, props, {
                className: (0, _classnames2["default"])(className, classes),
                role: 'menu',
                'aria-labelledby': labelledBy
            }),
            items
        );
    };

    return DorpdownMenu;
}(_react2["default"].Component);

;

DorpdownMenu.propTypes = propTypes;

DorpdownMenu.defaultProps = defaultProps;

exports["default"] = DorpdownMenu;
module.exports = exports['default'];