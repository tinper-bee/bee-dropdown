
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'bee-button';
import Dropdown from '../src';
import Menu, { Item as MenuItem, Divider, SubMenu, MenuItemGroup } from 'bee-menus';
import Icon from 'bee-icon';

const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


/**
 *
 * @title 基础下拉菜单
 * @description 下拉菜单提供click，hover和focus事件触发。
 *
 */

 function onSelect({ key }) {
   console.log(`${key} selected`);

 }

 function onVisibleChange(visible) {
   console.log(visible);
 }

class Demo1 extends Component {

    render () {

        const menu1 = (
              <Menu
                multiple
                onSelect={onSelect}>
                <MenuItem key="1">借款合同</MenuItem>
                <MenuItem key="2">抵/质押合同</MenuItem>
                <MenuItem key="3">担保合同</MenuItem>
                <MenuItem key="4">联保合同</MenuItem>
                <MenuItem key="5">合同审批</MenuItem>
                <MenuItem key="6">抵/质押合同跟踪</MenuItem>
              </Menu>
          );
          const menu2 = (
                <Menu
                  multiple
                  onSelect={onSelect}>
                      <MenuItem key="1"><Icon type='uf-listsearch' />借款合同</MenuItem>
                      <MenuItem key="2"><Icon type='uf-listsearch' />抵/质押合同</MenuItem>
                      <MenuItem key="3"><Icon type='uf-listsearch' />担保合同</MenuItem>
                      <MenuItem key="4"><Icon type='uf-listsearch' />联保合同</MenuItem>
                     <MenuItem key="5"><Icon type='uf-seal' />合同审批</MenuItem>
                     <MenuItem key="6"><Icon type='uf-bullseye' />抵/质押合同跟踪</MenuItem>
                </Menu>
            );
        return (
            <div className="demoPadding">
                <Dropdown
                    trigger={['click']}
                    overlay={menu1}
                    animation="slide-up"
                    onVisibleChange={onVisibleChange}>
                    <Button colors='primary'>点击显示</Button>
                  </Dropdown>
                  <Dropdown
                      trigger={['hover']}
                      overlay={menu2}
                      animation="slide-up"
                      onVisibleChange={onVisibleChange}>
                      <Button colors='primary'>鼠标滑过显示</Button>
                    </Dropdown>
            </div>
        )
    }
}
/**
 *
 * @title 不同样子的下拉菜单
 * @description 通过不同的子组件搭配，组成不同形式的菜单
 *
 */


 function onSelect({ key }) {
   console.log(`${key} selected`);

 }

 function onVisibleChange(visible) {
   console.log(visible);
 }

 const menu1 = (
     <Menu
       multiple
       onSelect={onSelect}>
       <MenuItem key="1">借款合同</MenuItem>
       <MenuItem key="2">抵/质押合同</MenuItem>
       <MenuItem key="3">担保合同</MenuItem>
       <MenuItem key="4">联保合同</MenuItem>
       <Divider />
       <MenuItem key="5">合同审批</MenuItem>
       <MenuItem key="6">抵/质押合同跟踪</MenuItem>
     </Menu>
 );

 const menu2 = (
     <Menu
       multiple
       onSelect={onSelect}>
       <MenuItemGroup title="合同类别">
       <MenuItem key="1">借款合同</MenuItem>
       <MenuItem key="2">抵/质押合同</MenuItem>
       <MenuItem key="3">担保合同</MenuItem>
       <MenuItem key="4">联保合同</MenuItem>
        </MenuItemGroup>
        <MenuItemGroup title="合同操作">
            <MenuItem key="5">合同审批</MenuItem>
            <MenuItem key="6">抵/质押合同跟踪</MenuItem>
        </MenuItemGroup>
     </Menu>
 );
 const menu3 = (
     <Menu
       vertical
       onSelect={onSelect}>
       <SubMenu key="sub1" title="合同类别">
            <MenuItem key="1">借款合同</MenuItem>
            <MenuItem key="2">抵/质押合同</MenuItem>
            <MenuItem key="3">担保合同</MenuItem>
            <MenuItem key="4">联保合同</MenuItem>
		</SubMenu>
		<SubMenu key="sub2" title="合同操作">
            <MenuItem key="5">抵/质押合同跟踪</MenuItem>
		    <SubMenu key="sub3" title="合同审批">
                <MenuItem key="6">待审批合同</MenuItem>
                <MenuItem key="7">已审批合同</MenuItem>
			</SubMenu>
		</SubMenu>
     </Menu>
 );
class Demo2 extends Component {
    render () {
        return (
            <div className="demoPadding">

                 <Dropdown
                   trigger={['click']}
                   overlay={menu1}
                   animation="slide-up"
                   onVisibleChange={onVisibleChange}
                 >
                   <Button colors='primary'>带有分割线的下拉</Button>
                 </Dropdown>

                 <Dropdown
                   trigger={['click']}
                   overlay={menu2}
                   animation="slide-up"
                   onVisibleChange={onVisibleChange}
                 >
                   <Button colors='primary'>带有小标题的下拉</Button>
                 </Dropdown>
                 <Dropdown
                   trigger={['click']}
                   overlay={menu3}
                   animation="slide-up"
                   onVisibleChange={onVisibleChange}
                 >
                   <Button colors='primary' style={{ width: 150 }}>多级下拉</Button>
                 </Dropdown>
             </div>
        )
    }
}
var DemoArray = [{"example":<Demo1 />,"title":" 基础下拉菜单","code":"/**\r\n *\r\n * @title 基础下拉菜单\r\n * @description 下拉菜单提供click，hover和focus事件触发。\r\n *\r\n */\r\n\r\n function onSelect({ key }) {\r\n   console.log(`${key} selected`);\r\n\r\n }\r\n\r\n function onVisibleChange(visible) {\r\n   console.log(visible);\r\n }\r\n\r\nclass Demo1 extends Component {\r\n\r\n    render () {\r\n\r\n        const menu1 = (\r\n              <Menu\r\n                multiple\r\n                onSelect={onSelect}>\r\n                <MenuItem key=\"1\">借款合同</MenuItem>\r\n                <MenuItem key=\"2\">抵/质押合同</MenuItem>\r\n                <MenuItem key=\"3\">担保合同</MenuItem>\r\n                <MenuItem key=\"4\">联保合同</MenuItem>\r\n                <MenuItem key=\"5\">合同审批</MenuItem>\r\n                <MenuItem key=\"6\">抵/质押合同跟踪</MenuItem>\r\n              </Menu>\r\n          );\r\n          const menu2 = (\r\n                <Menu\r\n                  multiple\r\n                  onSelect={onSelect}>\r\n                      <MenuItem key=\"1\"><Icon type='uf-listsearch' />借款合同</MenuItem>\r\n                      <MenuItem key=\"2\"><Icon type='uf-listsearch' />抵/质押合同</MenuItem>\r\n                      <MenuItem key=\"3\"><Icon type='uf-listsearch' />担保合同</MenuItem>\r\n                      <MenuItem key=\"4\"><Icon type='uf-listsearch' />联保合同</MenuItem>\r\n                     <MenuItem key=\"5\"><Icon type='uf-seal' />合同审批</MenuItem>\r\n                     <MenuItem key=\"6\"><Icon type='uf-bullseye' />抵/质押合同跟踪</MenuItem>\r\n                </Menu>\r\n            );\r\n        return (\r\n            <div className=\"demoPadding\">\r\n                <Dropdown\r\n                    trigger={['click']}\r\n                    overlay={menu1}\r\n                    animation=\"slide-up\"\r\n                    onVisibleChange={onVisibleChange}>\r\n                    <Button colors='primary'>点击显示</Button>\r\n                  </Dropdown>\r\n                  <Dropdown\r\n                      trigger={['hover']}\r\n                      overlay={menu2}\r\n                      animation=\"slide-up\"\r\n                      onVisibleChange={onVisibleChange}>\r\n                      <Button colors='primary'>鼠标滑过显示</Button>\r\n                    </Dropdown>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n","desc":" 下拉菜单提供click，hover和focus事件触发。"},{"example":<Demo2 />,"title":" 不同样子的下拉菜单","code":"/**\r\n *\r\n * @title 不同样子的下拉菜单\r\n * @description 通过不同的子组件搭配，组成不同形式的菜单\r\n *\r\n */\r\n\r\n\r\n function onSelect({ key }) {\r\n   console.log(`${key} selected`);\r\n\r\n }\r\n\r\n function onVisibleChange(visible) {\r\n   console.log(visible);\r\n }\r\n\r\n const menu1 = (\r\n     <Menu\r\n       multiple\r\n       onSelect={onSelect}>\r\n       <MenuItem key=\"1\">借款合同</MenuItem>\r\n       <MenuItem key=\"2\">抵/质押合同</MenuItem>\r\n       <MenuItem key=\"3\">担保合同</MenuItem>\r\n       <MenuItem key=\"4\">联保合同</MenuItem>\r\n       <Divider />\r\n       <MenuItem key=\"5\">合同审批</MenuItem>\r\n       <MenuItem key=\"6\">抵/质押合同跟踪</MenuItem>\r\n     </Menu>\r\n );\r\n\r\n const menu2 = (\r\n     <Menu\r\n       multiple\r\n       onSelect={onSelect}>\r\n       <MenuItemGroup title=\"合同类别\">\r\n       <MenuItem key=\"1\">借款合同</MenuItem>\r\n       <MenuItem key=\"2\">抵/质押合同</MenuItem>\r\n       <MenuItem key=\"3\">担保合同</MenuItem>\r\n       <MenuItem key=\"4\">联保合同</MenuItem>\r\n        </MenuItemGroup>\r\n        <MenuItemGroup title=\"合同操作\">\r\n            <MenuItem key=\"5\">合同审批</MenuItem>\r\n            <MenuItem key=\"6\">抵/质押合同跟踪</MenuItem>\r\n        </MenuItemGroup>\r\n     </Menu>\r\n );\r\n const menu3 = (\r\n     <Menu\r\n       vertical\r\n       onSelect={onSelect}>\r\n       <SubMenu key=\"sub1\" title=\"合同类别\">\r\n            <MenuItem key=\"1\">借款合同</MenuItem>\r\n            <MenuItem key=\"2\">抵/质押合同</MenuItem>\r\n            <MenuItem key=\"3\">担保合同</MenuItem>\r\n            <MenuItem key=\"4\">联保合同</MenuItem>\r\n\t\t</SubMenu>\r\n\t\t<SubMenu key=\"sub2\" title=\"合同操作\">\r\n            <MenuItem key=\"5\">抵/质押合同跟踪</MenuItem>\r\n\t\t    <SubMenu key=\"sub3\" title=\"合同审批\">\r\n                <MenuItem key=\"6\">待审批合同</MenuItem>\r\n                <MenuItem key=\"7\">已审批合同</MenuItem>\r\n\t\t\t</SubMenu>\r\n\t\t</SubMenu>\r\n     </Menu>\r\n );\r\nclass Demo2 extends Component {\r\n    render () {\r\n        return (\r\n            <div className=\"demoPadding\">\r\n\r\n                 <Dropdown\r\n                   trigger={['click']}\r\n                   overlay={menu1}\r\n                   animation=\"slide-up\"\r\n                   onVisibleChange={onVisibleChange}\r\n                 >\r\n                   <Button colors='primary'>带有分割线的下拉</Button>\r\n                 </Dropdown>\r\n\r\n                 <Dropdown\r\n                   trigger={['click']}\r\n                   overlay={menu2}\r\n                   animation=\"slide-up\"\r\n                   onVisibleChange={onVisibleChange}\r\n                 >\r\n                   <Button colors='primary'>带有小标题的下拉</Button>\r\n                 </Dropdown>\r\n                 <Dropdown\r\n                   trigger={['click']}\r\n                   overlay={menu3}\r\n                   animation=\"slide-up\"\r\n                   onVisibleChange={onVisibleChange}\r\n                 >\r\n                   <Button colors='primary' style={{ width: 150 }}>多级下拉</Button>\r\n                 </Dropdown>\r\n             </div>\r\n        )\r\n    }\r\n}\r\n","desc":" 通过不同的子组件搭配，组成不同形式的菜单"}]


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
