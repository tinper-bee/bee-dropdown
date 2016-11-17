import React from 'react';
import classNames from 'classnames';

import DropdownToggle from './DropdownToggle';
import DropdownMenu from './DropdownMenu';
import DropdownMenuItem from './DropdownMenuItem';

const DIV = 'div';

const propTypes = {
  active: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  trigger: React.PropTypes.string,
  // block: React.PropTypes.bool,
  dropup: React.PropTypes.bool,
  role: React.PropTypes.string,
  onClose: React.PropTypes.func,
  onOpen: React.PropTypes.func,
  onToggle: React.PropTypes.func,
  onSelect: React.PropTypes.func,
  /*
   * If 'select' is true , title will be updated after the 'onSelect' trigger .
   */
  select: React.PropTypes.bool,
  activeKey: React.PropTypes.any,
  bothEnds: React.PropTypes.bool,
  menuStyle: React.PropTypes.object
};

const defaultProps = {
  componentClass: DIV,
  active: false,
  disabled: false,
  trigger: 'click'
  // block: false
};

class Dropdown extends React.Component {
    constructor (props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.update = this.update.bind(this);
        this.state = {
          title: null,
          activeKey: this.props.activeKey,
          open: false
        }
    }

    toggle(isOpen) {
        let open = isOpen || !this.state.open;
        let handleToggle = open ? this.props.onOpen : this.props.onClose;


        this.setState({
            open: open
        }, function () {
            handleToggle && handleToggle();
        });

        this.props.onToggle && this.props.onToggle();
    }
    handleClick() {
        if (this.props.disabled || !(this.props.trigger == "click")) {
            return;
        }

        this.toggle();
    }
    handleMouseOver() {

      if (this.props.disabled || !(this.props.trigger == "hover")) {
          return;
      }
      this.toggle(true);
    }
    handleMouseLeave() {
      if (this.props.disabled || !(this.props.trigger == "hover")) {
          return;
      }
      this.toggle(false);
    }
    handleSelect(eventKey, props, event) {

        this.props.select && this.setState({
            title: props.children,
            activeKey: props.eventKey
        });

        this.props.onSelect && this.props.onSelect(eventKey, props, event);
    }
    update(props) {

        const {children, select, activeKey} = props || this.props;
        const state = {
            activeKey
        };

        let title;
        if (select) {
            React.Children.map(children, (item, index) => {
                if (activeKey === item.props.eventKey) {
                    title = item.props.children;
                } else if (item.props.active) {
                    title = item.props.children;
                }
            });
            title && (state.title = title);
        }

        this.setState(state);

    }
    componentWillMount() {
        this.update();
    }
    componentWillReceiveProps(nextProps) {
        this.update(nextProps);
    }
    render() {

        let {
            items,
            title,
            children,
            className,
            activeKey,
            dropup,
            disabled,
            bothEnds,
            menuStyle,
            componentClass: Component,
            ...props
        } = this.props;


        let Toggle = (
            <DropdownToggle
                {...props}
                dropup = { dropup }
                onClick = {this.handleClick}
                onMouseEnter = {this.handleMouseOver}
                >
                { this.state.title || title }
            </DropdownToggle>
        );

        let Menu = (
            <DropdownMenu
                onClose={this.toggle}
                onSelect={this.handleSelect}
                activeKey={this.state.activeKey}
                open={this.state.open}
                dropup={dropup}
                type={this.props.type}
                style={menuStyle}
                ref='menu'
                onMouseLeave = {this.handleMouseLeave}
                >
                {children}
            </DropdownMenu>
        );

        // if (this.state.open) {
        //     Menu = (
        //         <RootCloseWrapper onRootClose={this.toggle}>
        //             {Menu}
        //         </RootCloseWrapper>
        //     );
        // }
        const classes = classNames({
            'dropdown': true,
            'both-ends': bothEnds
        }, className);
        Component = Component ? Component : DIV;
        return (
            <Component
                {...props}
                className = {classes}
                role = "dropdown"
                >
                {Toggle}
                {Menu}
            </Component>
        );
    }
};

Dropdown.propTypes = propTypes;
Dropdown.defaultProps = defaultProps;

Dropdown.Item = DropdownMenuItem;

export default Dropdown;
