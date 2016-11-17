import React, { PropTypes, Component } from 'react';

import Dropdown from './Dropdown';
import { splitComponent } from 'tinper-bee-core';

const propTypes = {
  ...Dropdown.propTypes,

  // Toggle props.
  style: PropTypes.string,
  size: PropTypes.string,
  title: PropTypes.node.isRequired,
  noCaret: PropTypes.bool,

  // Override generated docs from <Dropdown>.
  /**
   * @private
   */
  children: PropTypes.node,
};

class DropdownButton extends Component {
  render() {
    const { size, style, title, children, ...props } = this.props;

    const [dropdownProps, toggleProps] =
      splitComponentProps(props, Dropdown.ControlledComponent);

    return (
      <Dropdown
        {...dropdownProps}
        bsSize={bsSize}
        bsStyle={bsStyle}
      >
        <Dropdown.Toggle
          {...toggleProps}
          bsSize={bsSize}
          bsStyle={bsStyle}
        >
          {title}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {children}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

DropdownButton.propTypes = propTypes;

export default DropdownButton;
