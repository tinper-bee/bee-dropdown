import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import Button from 'bee-button';
import SafeAnchor from 'bee-safe-anchor';


const propTypes = {
  noCaret: PropTypes.bool,
  open: PropTypes.bool,
  title: PropTypes.string,
  useAnchor: PropTypes.bool,
};

const defaultProps = {
  open: false,
  useAnchor: false,
  role: 'toggle',
  clsPrefix: ''
};

class DropdownToggle extends Component {
  render() {
    const {
      noCaret,
      open,
      useAnchor,
      clsPrefix,
      className,
      children,
      ...props
    } = this.props;

    delete props.bsRole;

    const Component = useAnchor ? SafeAnchor : Button;
    const useCaret = !noCaret;

    // This intentionally forwards bsSize and bsStyle (if set) to the
    // underlying component, to allow it to render size and style variants.

    // FIXME: Should this really fall back to `title` as children?

    return (
      <Component
        {...props}
        role="button"
        className={classNames(className)}
        aria-haspopup
        aria-expanded={open}
      >
        {children || props.title}
        {useCaret && ' '}
        {useCaret && <span className="caret" />}
      </Component>
    );
  }
}

DropdownToggle.propTypes = propTypes;
DropdownToggle.defaultProps = defaultProps;

export default DropdownToggle;
