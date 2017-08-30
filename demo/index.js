
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


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var DemoArray = [{"example":<Demo1 />,"title":" 基础下拉菜单","code":"/**\n *\n * @title 基础下拉菜单\n * @description 下拉菜单提供click，hover和focus事件触发。\n *\n */\n\nimport React, { Component } from 'react';\nimport Button from 'bee-button';\nimport Menu, { Item as MenuItem, Divider, SubMenu, MenuItemGroup } from 'bee-menus';\nimport Icon from 'bee-icon';\nimport Dropdown from 'tinper-bee';\n\n function onSelect({ key }) {\n   console.log(`${key} selected`);\n\n }\n\n function onVisibleChange(visible) {\n   console.log(visible);\n }\n\n\n\n    render () {\n\n        const menu1 = (\n              <Menu\n                multiple\n                onSelect={onSelect}>\n                <MenuItem key=\"1\">借款合同</MenuItem>\n                <MenuItem key=\"2\">抵/质押合同</MenuItem>\n                <MenuItem key=\"3\">担保合同</MenuItem>\n                <MenuItem key=\"4\">联保合同</MenuItem>\n                <MenuItem key=\"5\">合同审批</MenuItem>\n                <MenuItem key=\"6\">抵/质押合同跟踪</MenuItem>\n              </Menu>\n          );\n          const menu2 = (\n                <Menu\n                  multiple\n                  onSelect={onSelect}>\n                      <MenuItem key=\"1\"><Icon type='uf-listsearch' />借款合同</MenuItem>\n                      <MenuItem key=\"2\"><Icon type='uf-listsearch' />抵/质押合同</MenuItem>\n                      <MenuItem key=\"3\"><Icon type='uf-listsearch' />担保合同</MenuItem>\n                      <MenuItem key=\"4\"><Icon type='uf-listsearch' />联保合同</MenuItem>\n                     <MenuItem key=\"5\"><Icon type='uf-seal' />合同审批</MenuItem>\n                     <MenuItem key=\"6\"><Icon type='uf-bullseye' />抵/质押合同跟踪</MenuItem>\n                </Menu>\n            );\n        return (\n            <div className=\"demoPadding\">\n                <Dropdown\n                    trigger={['click']}\n                    overlay={menu1}\n                    animation=\"slide-up\"\n                    onVisibleChange={onVisibleChange}>\n                    <Button colors='primary'>点击显示</Button>\n                  </Dropdown>\n                  <Dropdown\n                      trigger={['hover']}\n                      overlay={menu2}\n                      animation=\"slide-up\"\n                      onVisibleChange={onVisibleChange}>\n                      <Button colors='primary'>鼠标滑过显示</Button>\n                    </Dropdown>\n            </div>\n        )\n    }\n}\n","desc":" 下拉菜单提供click，hover和focus事件触发。"},{"example":<Demo2 />,"title":" 不同样子的下拉菜单","code":"/**\n *\n * @title 不同样子的下拉菜单\n * @description 通过不同的子组件搭配，组成不同形式的菜单\n *\n */\n\nimport React, { Component } from 'react';\nimport Button from 'bee-button';\nimport Menu, { Item as MenuItem, Divider, SubMenu, MenuItemGroup } from 'bee-menus';\nimport Icon from 'bee-icon';\nimport Dropdown from 'tinper-bee';\n\n\n function onSelect({ key }) {\n   console.log(`${key} selected`);\n\n }\n\n function onVisibleChange(visible) {\n   console.log(visible);\n }\n\n const menu1 = (\n     <Menu\n       multiple\n       onSelect={onSelect}>\n       <MenuItem key=\"1\">借款合同</MenuItem>\n       <MenuItem key=\"2\">抵/质押合同</MenuItem>\n       <MenuItem key=\"3\">担保合同</MenuItem>\n       <MenuItem key=\"4\">联保合同</MenuItem>\n       <Divider />\n       <MenuItem key=\"5\">合同审批</MenuItem>\n       <MenuItem key=\"6\">抵/质押合同跟踪</MenuItem>\n     </Menu>\n );\n\n const menu2 = (\n     <Menu\n       multiple\n       onSelect={onSelect}>\n       <MenuItemGroup title=\"合同类别\">\n       <MenuItem key=\"1\">借款合同</MenuItem>\n       <MenuItem key=\"2\">抵/质押合同</MenuItem>\n       <MenuItem key=\"3\">担保合同</MenuItem>\n       <MenuItem key=\"4\">联保合同</MenuItem>\n        </MenuItemGroup>\n        <MenuItemGroup title=\"合同操作\">\n            <MenuItem key=\"5\">合同审批</MenuItem>\n            <MenuItem key=\"6\">抵/质押合同跟踪</MenuItem>\n        </MenuItemGroup>\n     </Menu>\n );\n const menu3 = (\n     <Menu\n       vertical\n       onSelect={onSelect}>\n       <SubMenu key=\"sub1\" title=\"合同类别\">\n            <MenuItem key=\"1\">借款合同</MenuItem>\n            <MenuItem key=\"2\">抵/质押合同</MenuItem>\n            <MenuItem key=\"3\">担保合同</MenuItem>\n            <MenuItem key=\"4\">联保合同</MenuItem>\n\t\t</SubMenu>\n\t\t<SubMenu key=\"sub2\" title=\"合同操作\">\n            <MenuItem key=\"5\">抵/质押合同跟踪</MenuItem>\n\t\t    <SubMenu key=\"sub3\" title=\"合同审批\">\n                <MenuItem key=\"6\">待审批合同</MenuItem>\n                <MenuItem key=\"7\">已审批合同</MenuItem>\n\t\t\t</SubMenu>\n\t\t</SubMenu>\n     </Menu>\n );\n\n    render () {\n        return (\n            <div className=\"demoPadding\">\n\n                 <Dropdown\n                   trigger={['click']}\n                   overlay={menu1}\n                   animation=\"slide-up\"\n                   onVisibleChange={onVisibleChange}\n                 >\n                   <Button colors='primary'>带有分割线的下拉</Button>\n                 </Dropdown>\n\n                 <Dropdown\n                   trigger={['click']}\n                   overlay={menu2}\n                   animation=\"slide-up\"\n                   onVisibleChange={onVisibleChange}\n                 >\n                   <Button colors='primary'>带有小标题的下拉</Button>\n                 </Dropdown>\n                 <Dropdown\n                   trigger={['click']}\n                   overlay={menu3}\n                   animation=\"slide-up\"\n                   onVisibleChange={onVisibleChange}\n                 >\n                   <Button colors='primary' style={{ width: 150 }}>多级下拉</Button>\n                 </Dropdown>\n             </div>\n        )\n    }\n}\n","desc":" 通过不同的子组件搭配，组成不同形式的菜单"}]


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
