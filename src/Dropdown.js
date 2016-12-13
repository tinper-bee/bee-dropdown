import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';

import RootCloseWrapper from 'bee-overlay/build/RootCloseWrapper';
import DropdownToggle from './DropdownToggle';
import DropdownMenu from './DropdownMenu';
import DropdownMenuItem from './DropdownMenuItem';
import Fade from 'bee-transition/build/Fade';

const DIV = 'div';

const propTypes = {
  disabled: PropTypes.bool,
  trigger: PropTypes.string,
  // block: React.PropTypes.bool,
  dropup: PropTypes.bool,
  transition: PropTypes.bool,
  role: PropTypes.string,
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  onToggle: PropTypes.func,
  onSelect: PropTypes.func,
  /*
   * If 'select' is true , title will be updated after the 'onSelect' trigger .
   */
  select: PropTypes.bool,
  activeKey: PropTypes.any,
  menuStyle: PropTypes.object
};

const defaultProps = {
  componentClass: DIV,
  disabled: false,
  trigger: 'click',
  clsPrefix: 'u-dropdown',
  transition: true
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
    handleMouseLeave(event) {

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
                if (activeKey === item.props.eventKey && typeof item.props.eventKey !== "undefined") {
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
            transition,
            clsPrefix,
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
                colors = {this.props.colors}
                dropup={dropup}
                style={menuStyle}
                ref='menu'
                onMouseLeave = {this.handleMouseLeave}
                >
                {children}
            </DropdownMenu>
        );

        if(transition){
            Menu = (<Fade
              in={this.state.open}
              transitionAppear
            >
              { Menu }
            </Fade>);
        }



        if (this.state.open) {
            Menu = (
                <RootCloseWrapper onRootClose={this.toggle}>
                    {Menu}
                </RootCloseWrapper>
            );
        }
        const classes = classNames({
            [`${clsPrefix}`]: true
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
