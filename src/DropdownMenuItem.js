import React from 'react';
import classNames from 'classnames';

// import elementType from './prop-types/elementType';

const propTypes = {
    href: React.PropTypes.string,
    divider: React.PropTypes.bool,
    active: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    onSelect: React.PropTypes.func,
    onKeyDown: React.PropTypes.func,
    eventKey: React.PropTypes.any
};

const defaultProps = {
    componentClass: 'a',
    active: false,
    disabled: false,
    divider: false,
    clsPrefix: 'u-menu-item',
};


class DropdownMenuItem extends React.Component {
    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        let { onSelect } = this.props;
        if(this.props.disabled){
            event.preventDefault();
            return;
        }
        onSelect && onSelect(this.props.eventKey, this.props, event);
    }
    render() {

        let {
            children,
            divider,
            onSelect,
            onKeyDown,
            clsPrefix,
            componentClass: Component,
            ...props
        } = this.props;

        let classes = classNames({
            active : this.props.active ,
            disabled : this.props.disabled
        }, `${clsPrefix}`);
        if(divider){
            return <li role="divider" className="u-menu-item-break"></li>;
        }

        return (
            <li role="presentation" className = { classes } >
                <Component
                    {...props}
                    role="menu-item"
                    tabIndex="-1"
                    onClick={ this.handleClick }
                  >
                  {children}
                </Component>
            </li>
        );
    }

};

DropdownMenuItem.propTypes = propTypes;

DropdownMenuItem.defaultProps = defaultProps;

export default DropdownMenuItem;
