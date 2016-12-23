
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'bee-button';
import Dropdown from '../src';
import Menu, { Item as MenuItem, Divider } from 'bee-menus';

const CARET = <i className="uf uf-chevronarrowdown"></i>;

const CARETUP = <i className="uf uf-chevronarrowup"></i>;


/**
 *
 * @title 默认下拉菜单
 * @description
 *
 */

class Demo1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
        this.onVisibleChange = this.onVisibleChange.bind(this);
        this.saveSelected = this.saveSelected.bind(this);
        this.confirm = this.confirm.bind(this);

    }


 onVisibleChange(visible) {
   this.setState({
     visible,
   });
 }

 saveSelected({ selectedKeys }) {
   this.selected = selectedKeys;
 }

 confirm() {
   console.log(this.selected);
   this.setState({
     visible: false,
   });
 }
    render () {

        const menu = (
      <Menu
        style={{ width: 140 }}
        multiple
        onSelect={this.saveSelected}
        onDeselect={this.saveSelected}
      >
        <MenuItem key="1">one</MenuItem>
        <MenuItem key="2">two</MenuItem>
        <Divider />
        <MenuItem disabled>
          <Button
            onClick={this.confirm}
            colors="primary"
          >确定
          </Button>
        </MenuItem>
      </Menu>
    );
        return (
            <Dropdown
                trigger={['click']}
                onVisibleChange={this.onVisibleChange}
                visible={this.state.visible}
                closeOnSelect={false}
                overlay={menu}
                animation="slide-up"
              >
                <Button>open</Button>
              </Dropdown>
        )
    }
}
/**
 *
 * @title 默认下拉菜单
 * @description
 *
 */

 function onSelect({ key }) {
   console.log(`${key} selected`);
 }

 function onVisibleChange(visible) {
   console.log(visible);
 }

 const menu = (
   <Menu onSelect={onSelect}>
     <MenuItem disabled>disabled</MenuItem>
     <MenuItem key="1">one</MenuItem>
     <Divider />
     <MenuItem key="2">two</MenuItem>
   </Menu>
 );

class Demo2 extends Component {
    render () {
        return (
            <div style={{ margin: 20 }}>
               <div style={{ height: 100 }}/>
               <div>
                 <Dropdown
                   trigger={['click']}
                   overlay={menu}
                   animation="slide-up"
                   onVisibleChange={onVisibleChange}
                 >
                   <Button style={{ width: 100 }}>open</Button>
                 </Dropdown>
               </div>
             </div>
        )
    }
}
var DemoArray = [{"example":<Demo1 />,"title":" 默认下拉菜单","code":"/**\r\n *\r\n * @title 默认下拉菜单\r\n * @description\r\n *\r\n */\r\n\r\nclass Demo1 extends Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = {\r\n            visible: false\r\n        };\r\n        this.onVisibleChange = this.onVisibleChange.bind(this);\r\n        this.saveSelected = this.saveSelected.bind(this);\r\n        this.confirm = this.confirm.bind(this);\r\n\r\n    }\r\n\r\n\r\n onVisibleChange(visible) {\r\n   this.setState({\r\n     visible,\r\n   });\r\n }\r\n\r\n saveSelected({ selectedKeys }) {\r\n   this.selected = selectedKeys;\r\n }\r\n\r\n confirm() {\r\n   console.log(this.selected);\r\n   this.setState({\r\n     visible: false,\r\n   });\r\n }\r\n    render () {\r\n\r\n        const menu = (\r\n      <Menu\r\n        style={{ width: 140 }}\r\n        multiple\r\n        onSelect={this.saveSelected}\r\n        onDeselect={this.saveSelected}\r\n      >\r\n        <MenuItem key=\"1\">one</MenuItem>\r\n        <MenuItem key=\"2\">two</MenuItem>\r\n        <Divider />\r\n        <MenuItem disabled>\r\n          <Button\r\n            onClick={this.confirm}\r\n            colors=\"primary\"\r\n          >确定\r\n          </Button>\r\n        </MenuItem>\r\n      </Menu>\r\n    );\r\n        return (\r\n            <Dropdown\r\n                trigger={['click']}\r\n                onVisibleChange={this.onVisibleChange}\r\n                visible={this.state.visible}\r\n                closeOnSelect={false}\r\n                overlay={menu}\r\n                animation=\"slide-up\"\r\n              >\r\n                <Button>open</Button>\r\n              </Dropdown>\r\n        )\r\n    }\r\n}\r\n","desc":""},{"example":<Demo2 />,"title":" 默认下拉菜单","code":"/**\r\n *\r\n * @title 默认下拉菜单\r\n * @description\r\n *\r\n */\r\n\r\n function onSelect({ key }) {\r\n   console.log(`${key} selected`);\r\n }\r\n\r\n function onVisibleChange(visible) {\r\n   console.log(visible);\r\n }\r\n\r\n const menu = (\r\n   <Menu onSelect={onSelect}>\r\n     <MenuItem disabled>disabled</MenuItem>\r\n     <MenuItem key=\"1\">one</MenuItem>\r\n     <Divider />\r\n     <MenuItem key=\"2\">two</MenuItem>\r\n   </Menu>\r\n );\r\n\r\nclass Demo2 extends Component {\r\n    render () {\r\n        return (\r\n            <div style={{ margin: 20 }}>\r\n               <div style={{ height: 100 }}/>\r\n               <div>\r\n                 <Dropdown\r\n                   trigger={['click']}\r\n                   overlay={menu}\r\n                   animation=\"slide-up\"\r\n                   onVisibleChange={onVisibleChange}\r\n                 >\r\n                   <Button style={{ width: 100 }}>open</Button>\r\n                 </Dropdown>\r\n               </div>\r\n             </div>\r\n        )\r\n    }\r\n}\r\n","desc":""}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );

        const header = (
            <Row>
                <Col md={11}>
                { example }
                </Col>
                <Col md={1}>
                <Button shape="icon" onClick={ this.handleClick }>
                    { caret }
                </Button>
                </Col>
            </Row>
        );
        return (
            <Col md={10} mdOffset={1} sm={12} smOffset={0}>
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible headerContent expanded={ this.state.open } colors='bordered' header={ header } footer={footer} footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
