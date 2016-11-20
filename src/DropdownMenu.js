import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import classNames from 'classnames';
import DropdownMenuItem from './DropdownMenuItem';

// import createChainedFunction from './utils/createChainedFunction';

const propTypes = {
    pullRight: PropTypes.bool,
    dropup: PropTypes.bool,
    onClose: PropTypes.func,
    onSelect: PropTypes.func,
    type: PropTypes.oneOf(['primary', 'accent', 'danger', 'info', 'success', 'warning', '']),
    open: PropTypes.bool,
    labelledBy: PropTypes.oneOfType([
      PropTypes.string, PropTypes.number,
    ]),
    rootCloseEvent: PropTypes.oneOf(['click', 'mousedown'])
};

const defaultProps = {
    clsPrefix: 'u-menu',
    pullRight: false,
    type: '',
    dropup: false,
    open: false
};

const color = {
   primary: 'primary',
   accent: 'accent',
   danger: 'danger',
   info: 'info',
   success: 'success',
   warning: 'warning'
};



class DorpdownMenu extends React.Component {
    constructor (props) {
          super(props);
          this.handleSelect = this.handleSelect.bind(this);
    }

    handleKeyDown(event) {
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
    }

    getFocusableMenuItems() {
        let menuNode = ReactDOM.findDOMNode(this);
        if (menuNode === undefined) {
            return [];
        }
        return Array.from(menuNode.querySelectorAll('[role="menu-item"]'));
    }
    getItemsAndActiveIndex() {
        let items = this.getFocusableMenuItems();
        let activeItemIndex = items.indexOf(document.activeElement);

        return {
            items,
            activeItemIndex
        };
    }

    focusNext() {
      const { items, activeIndex } = this.getItemsAndActiveIndex();
      if (items.length === 0) {
        return;
      }

      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      items[nextIndex].focus();
    }

    focusPrevious() {
      const { items, activeIndex } = this.getItemsAndActiveIndex();
      if (items.length === 0) {
        return;
      }

      const prevIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      items[prevIndex].focus();
    }

    handleSelect(event){
        let { onClose, onSelect } = this.props;
        onSelect && onSelect();
        onClose && onClose();
    }
    render(){

        let { pullRight, children, className, clsPrefix, activeKey, dropup, open, rootCloseEvent, onClose, labelledBy, type, ...props} = this.props;

        const items = React.Children.map(children,(item, index) => {
            let childProps = {
                key : index,
                ref : 'menu_item_' + index,
                onSelect: this.handleSelect
            };

            if(activeKey){
               childProps.active = (activeKey === item.props.eventKey);
            }

            return React.cloneElement(item, childProps, item.props.children);
        });


        let classes = {
            [`${clsPrefix}`] : true,
            // [`${clsPrefix}-buttom-right`]: pullRight && !dropup,
            // [`${clsPrefix}-top-left`]: !pullRight && dropup,
            // [`${clsPrefix}-top-right`]: pullRight && dropup,
            "dropup": dropup,
            "show": open
        };

        if(color[type]){
              classes[`${clsPrefix}-${color[type]}`] = true;
        }

        return (
            <ul
                {...props}
                className = {classNames(className, classes)}
                role = "menu"
                aria-labelledby={labelledBy}
            >
                {items}
            </ul>
        );


    }

};

DorpdownMenu.propTypes = propTypes;

DorpdownMenu.defaultProps = defaultProps;

export default DorpdownMenu;
