
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
          <button
            style={{
              cursor: 'pointer',
              color: '#000',
              pointerEvents: 'visible',
            }}
            onClick={this.confirm}
          >确定
          </button>
        </MenuItem>
      </Menu>
    );
        return (
            <Dropdown
                trigger={['click']}
                onVisibleChange={this.onVisibleChange}
                visible={this.state.visible}
                closeOnSelect={true}
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
var DemoArray = [{"example":<Demo1 />,"title":" 默认下拉菜单","code":"/**\n *\n * @title 默认下拉菜单\n * @description\n *\n */\n\nclass Demo1 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            visible: false\n        };\n        this.onVisibleChange = this.onVisibleChange.bind(this);\n        this.saveSelected = this.saveSelected.bind(this);\n        this.confirm = this.confirm.bind(this);\n\n    }\n\n\n onVisibleChange(visible) {\n   this.setState({\n     visible,\n   });\n }\n\n saveSelected({ selectedKeys }) {\n   this.selected = selectedKeys;\n }\n\n confirm() {\n   console.log(this.selected);\n   this.setState({\n     visible: false,\n   });\n }\n    render () {\n\n        const menu = (\n      <Menu\n        style={{ width: 140 }}\n        multiple\n        onSelect={this.saveSelected}\n        onDeselect={this.saveSelected}\n      >\n        <MenuItem key=\"1\">one</MenuItem>\n        <MenuItem key=\"2\">two</MenuItem>\n        <Divider />\n        <MenuItem disabled>\n          <button\n            style={{\n              cursor: 'pointer',\n              color: '#000',\n              pointerEvents: 'visible',\n            }}\n            onClick={this.confirm}\n          >确定\n          </button>\n        </MenuItem>\n      </Menu>\n    );\n        return (\n            <Dropdown\n                trigger={['click']}\n                onVisibleChange={this.onVisibleChange}\n                visible={this.state.visible}\n                closeOnSelect={true}\n                overlay={menu}\n                animation=\"slide-up\"\n              >\n                <Button>open</Button>\n              </Dropdown>\n        )\n    }\n}\n","desc":""},{"example":<Demo2 />,"title":" 默认下拉菜单","code":"/**\n *\n * @title 默认下拉菜单\n * @description\n *\n */\n\n\n function onSelect({ key }) {\n   console.log(`${key} selected`);\n\n }\n\n function onVisibleChange(visible) {\n   console.log(visible);\n }\n\n const menu = (\n   <Menu onSelect={onSelect}>\n     <MenuItem disabled>disabled</MenuItem>\n     <MenuItem key=\"1\">one</MenuItem>\n     <Divider />\n     <MenuItem key=\"2\">two</MenuItem>\n   </Menu>\n );\n\nclass Demo2 extends Component {\n    render () {\n        return (\n            <div style={{ margin: 20 }}>\n               <div>\n                 <Dropdown\n                   trigger={['click']}\n                   overlay={menu}\n                   animation=\"slide-up\"\n                   onVisibleChange={onVisibleChange}\n                 >\n                   <Button style={{ width: 100 }}>open</Button>\n                 </Dropdown>\n               </div>\n             </div>\n        )\n    }\n}\n","desc":""}]


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

    
        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0}}>
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
