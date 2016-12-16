import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import  Button from 'bee-button';

const propTypes = {
    noCaret: PropTypes .bool,
    title: PropTypes.string,
    useAnchor: PropTypes.bool,
    dropup: PropTypes.bool
};

const defaultProps = {
    noCaret: false,
    useAnchor: false,
    dropup: false,
    componentClass: Button
}

const CARET = <i className="uf uf-chevronarrowdown"></i>;

const CARETUP = <i className="uf uf-chevronarrowup"></i>;

class DorpdownToggle extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        let { dropup, componentClass: Component  } = this.props;
        let caret = this.props.noCaret ? null : (dropup ? CARETUP : CARET);
        Component =  this.props.useAnchor ? 'a' : Component;

        let classes = {
            ['dropdown-toggle'] : true
        };
        console.log()
        return (
            <Component
                {...this.props}
                className = {classNames(classes, this.props.className)}
                htmlType = "button"
                role = "toggle"
            >
                { this.props.title || this.props.children }
                {caret}
            </Component>
        );
    }

};

DorpdownToggle.propTypes = propTypes;

DorpdownToggle.defaultProps = defaultProps;


export default DorpdownToggle;
