import React from 'react';
import classNames from 'classnames';
import  Button from 'bee-button';

const propTypes = {
    noCaret: React.PropTypes.bool,
    title: React.PropTypes.string,
    useAnchor: React.PropTypes.bool,
    dropup: React.PropTypes.bool
};

const defaultProps = {
    noCaret: false,
    useAnchor: false,
    dropup: false
}

const CARET = <i className="uf uf-anglearrowdown"></i>;

const CARETUP = <i className="uf uf-chevronarrowup"></i>;

class DorpdownToggle extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        let { dropup } = this.props;
        let caret = this.props.noCaret ? null : (dropup ? CARETUP : CARET);
        let Component =  this.props.useAnchor ? 'a' : Button;

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
