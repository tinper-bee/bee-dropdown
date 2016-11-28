'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _beeOverlay = require('bee-overlay');

var _DropdownToggle = require('./DropdownToggle');

var _DropdownToggle2 = _interopRequireDefault(_DropdownToggle);

var _DropdownMenu = require('./DropdownMenu');

var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

var _DropdownMenuItem = require('./DropdownMenuItem');

var _DropdownMenuItem2 = _interopRequireDefault(_DropdownMenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var DIV = 'div';

var propTypes = {
    active: _react2["default"].PropTypes.bool,
    disabled: _react2["default"].PropTypes.bool,
    trigger: _react2["default"].PropTypes.string,
    // block: React.PropTypes.bool,
    dropup: _react2["default"].PropTypes.bool,
    role: _react2["default"].PropTypes.string,
    onClose: _react2["default"].PropTypes.func,
    onOpen: _react2["default"].PropTypes.func,
    onToggle: _react2["default"].PropTypes.func,
    onSelect: _react2["default"].PropTypes.func,
    /*
     * If 'select' is true , title will be updated after the 'onSelect' trigger .
     */
    select: _react2["default"].PropTypes.bool,
    activeKey: _react2["default"].PropTypes.any,
    bothEnds: _react2["default"].PropTypes.bool,
    menuStyle: _react2["default"].PropTypes.object
};

var defaultProps = {
    componentClass: DIV,
    active: false,
    disabled: false,
    trigger: 'click'
    // block: false
};

var Dropdown = function (_React$Component) {
    _inherits(Dropdown, _React$Component);

    function Dropdown(props) {
        _classCallCheck(this, Dropdown);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.toggle = _this.toggle.bind(_this);
        _this.handleClick = _this.handleClick.bind(_this);
        _this.handleMouseOver = _this.handleMouseOver.bind(_this);
        _this.handleMouseLeave = _this.handleMouseLeave.bind(_this);
        _this.handleSelect = _this.handleSelect.bind(_this);
        _this.update = _this.update.bind(_this);
        _this.state = {
            title: null,
            activeKey: _this.props.activeKey,
            open: false
        };
        return _this;
    }

    Dropdown.prototype.toggle = function toggle(isOpen) {
        var open = isOpen || !this.state.open;
        var handleToggle = open ? this.props.onOpen : this.props.onClose;

        this.setState({
            open: open
        }, function () {
            handleToggle && handleToggle();
        });

        this.props.onToggle && this.props.onToggle();
    };

    Dropdown.prototype.handleClick = function handleClick() {
        if (this.props.disabled || !(this.props.trigger == "click")) {
            return;
        }

        this.toggle();
    };

    Dropdown.prototype.handleMouseOver = function handleMouseOver() {

        if (this.props.disabled || !(this.props.trigger == "hover")) {
            return;
        }
        this.toggle(true);
    };

    Dropdown.prototype.handleMouseLeave = function handleMouseLeave() {
        if (this.props.disabled || !(this.props.trigger == "hover")) {
            return;
        }
        this.toggle(false);
    };

    Dropdown.prototype.handleSelect = function handleSelect(eventKey, props, event) {

        this.props.select && this.setState({
            title: props.children,
            activeKey: props.eventKey
        });

        this.props.onSelect && this.props.onSelect(eventKey, props, event);
    };

    Dropdown.prototype.update = function update(props) {
        var _ref = props || this.props;

        var children = _ref.children;
        var select = _ref.select;
        var activeKey = _ref.activeKey;

        var state = {
            activeKey: activeKey
        };

        var title = void 0;
        if (select) {
            _react2["default"].Children.map(children, function (item, index) {
                if (activeKey === item.props.eventKey) {
                    title = item.props.children;
                } else if (item.props.active) {
                    title = item.props.children;
                }
            });
            title && (state.title = title);
        }

        this.setState(state);
    };

    Dropdown.prototype.componentWillMount = function componentWillMount() {
        this.update();
    };

    Dropdown.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.update(nextProps);
    };

    Dropdown.prototype.render = function render() {
        var _props = this.props;
        var items = _props.items;
        var title = _props.title;
        var children = _props.children;
        var className = _props.className;
        var activeKey = _props.activeKey;
        var dropup = _props.dropup;
        var disabled = _props.disabled;
        var bothEnds = _props.bothEnds;
        var menuStyle = _props.menuStyle;
        var Component = _props.componentClass;

        var props = _objectWithoutProperties(_props, ['items', 'title', 'children', 'className', 'activeKey', 'dropup', 'disabled', 'bothEnds', 'menuStyle', 'componentClass']);

        var Toggle = _react2["default"].createElement(
            _DropdownToggle2["default"],
            _extends({}, props, {
                dropup: dropup,
                onClick: this.handleClick,
                onMouseEnter: this.handleMouseOver
            }),
            this.state.title || title
        );

        var Menu = _react2["default"].createElement(
            _DropdownMenu2["default"],
            {
                onClose: this.toggle,
                onSelect: this.handleSelect,
                activeKey: this.state.activeKey,
                open: this.state.open,
                dropup: dropup,
                type: this.props.type,
                style: menuStyle,
                ref: 'menu',
                onMouseLeave: this.handleMouseLeave
            },
            children
        );

        if (this.state.open) {
            console.log(_beeOverlay.RootCloseWrapper);
            Menu = _react2["default"].createElement(
                _beeOverlay.RootCloseWrapper,
                { onRootClose: this.toggle },
                Menu
            );
        }
        var classes = (0, _classnames2["default"])({
            'dropdown': true,
            'both-ends': bothEnds
        }, className);
        Component = Component ? Component : DIV;
        return _react2["default"].createElement(
            Component,
            _extends({}, props, {
                className: classes,
                role: 'dropdown'
            }),
            Toggle,
            Menu
        );
    };

    return Dropdown;
}(_react2["default"].Component);

;

Dropdown.propTypes = propTypes;
Dropdown.defaultProps = defaultProps;

Dropdown.Item = _DropdownMenuItem2["default"];

exports["default"] = Dropdown;
module.exports = exports['default'];