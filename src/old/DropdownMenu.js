import React from 'react';
import { findDOMNode } from 'react-dom';
import classNames from 'classnames';
import DropdownMenuItem from './DropdownMenuItem';
// import createChainedFunction from './utils/createChainedFunction';

const propTypes = {
    pullRight: React.PropTypes.bool,
    dropup: React.PropTypes.bool,
    onClose: React.PropTypes.func,
    onSelect: React.PropTypes.func,
    type: React.PropTypes.oneOf(['primary', 'accent', 'danger', 'info', 'success', 'warning', '']),
    open: React.PropTypes.bool
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

    // getFocusableMenuItems() {
    //     let menuNode = ReactDOM.findDOMNode(this);
    //     if (menuNode === undefined) {
    //         return [];
    //     }
    //     return Array.from(menuNode.querySelectorAll('[role="menu-item"]'));
    // }
    // getItemsAndActiveIndex() {
    //     let items = this.getFocusableMenuItems();
    //     let activeItemIndex = items.indexOf(document.activeElement);
    //
    //     return {
    //         items,
    //         activeItemIndex
    //     };
    // }
    handleSelect(event){
        let { onClose, onSelect } = this.props;
        onSelect && onSelect();
        onClose && onClose();
    }
    render(){

        let { pullRight, children, className, clsPrefix, activeKey, dropup, open, type, ...props} = this.props;

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
            >
                {items}
            </ul>
        );


    }

};

DorpdownMenu.propTypes = propTypes;

DorpdownMenu.defaultProps = defaultProps;

export default DorpdownMenu;
