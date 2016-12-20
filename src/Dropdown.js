import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import OverlayTrigger from 'bee-overlay/build/OverlayTrigger';
import placements from './placements';

/*
 var MenuItem = Menu.Item;

 var menu = <Menu><MenuItem>1</MenuItem></Menu>;

 <DropDown trigger="click" animationName="" overlay={<>} onSelect={}>
 <button>open</button>
 </DropDown>
*/

const propTypes = {
  minOverlayWidthMatchTrigger: PropTypes.bool,
  onVisibleChange: PropTypes.func,
  clsPrefix: PropTypes.string,
  children: PropTypes.any,
  //动画名称
  transitionName: PropTypes.string,

  overlayClassName: PropTypes.string,
  animation: PropTypes.any,
  //对齐方式
  align: PropTypes.object,
  overlayStyle: PropTypes.object,
  //弹出位置
  placement: PropTypes.string,
  //弹出内容
  trigger: PropTypes.array,
  showAction: PropTypes.array,
  hideAction: PropTypes.array,
  getPopupContainer: PropTypes.func,
};

const defaultProps = {
    minOverlayWidthMatchTrigger: true,
    clsPrefix: 'u-dropdown',
    trigger: ['hover'],
    showAction: [],
    hideAction: [],
    overlayClassName: '',
    overlayStyle: {},
    defaultVisible: false,
    onVisibleChange() {
    },
    placement: 'bottom'
}

class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: this.props.visible || this.props.defaultVisible,
        };
        this.onClick = this.onClick.bind(this);
        this.onVisibleChange = this.onVisibleChange.bind(this);
        this.getPopupDomNode = this.getPopupDomNode.bind(this);
        this.getMenuElement = this.getMenuElement.bind(this);
        this.afterVisibleChange = this.afterVisibleChange.bind(this);

    }

  componentWillReceiveProps({ visible }) {
    if (visible !== undefined) {
      this.setState({
        visible,
      });
    }
  }

  onClick(e) {
    const props = this.props;
    const overlayProps = props.overlay.props;
    // do no call onVisibleChange, if you need click to hide, use onClick and control visible
    if (!('visible' in props)) {
      this.setState({
        visible: false,
      });
    }
    if (overlayProps.onClick) {
      overlayProps.onClick(e);
    }
  }

  onVisibleChange(visible) {
    const props = this.props;
    if (!('visible' in props)) {
      this.setState({
        visible,
      });
    }
    props.onVisibleChange(visible);
  }

  getMenuElement() {
    const props = this.props;
    return React.cloneElement(props.overlay, {
      clsPrefix: `${props.clsPrefix}-menu`,
      onClick: this.onClick,
    });
  }

  getPopupDomNode() {
    return this.refs.trigger.getPopupDomNode();
  }

  afterVisibleChange(visible) {
    if (visible && this.props.minOverlayWidthMatchTrigger) {
      const overlayNode = this.getPopupDomNode();
      const rootNode = ReactDOM.findDOMNode(this);
      if (rootNode.offsetWidth > overlayNode.offsetWidth) {
        overlayNode.style.width = `${rootNode.offsetWidth}px`;
      }
    }
  }

  render() {
    const {
      clsPrefix,
      children,
      transitionName,
      animation,
      placement,
      trigger,
      ...props,
    } = this.props;
    return (<OverlayTrigger
      {...props}
      placement={placement}
    >{children}</OverlayTrigger>);
  }
};

export default Dropdown;
