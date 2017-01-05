
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'bee-button';
import Dropdown from '../src';
import Menu, { Item as MenuItem, Divider, SubMenu, MenuItemGroup } from 'bee-menus';
import Icon from 'bee-icon';

const CARET = <i className="uf uf-chevronarrowdown"></i>;

const CARETUP = <i className="uf uf-chevronarrowup"></i>;


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
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };

    }
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
       <SubMenu key="sub1" title={<span><span>Navigation One</span></span>}>
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
			</SubMenu>
			<SubMenu key="sub2" title=''>
            <MenuItem key="7">合同审批</MenuItem>
            <MenuItem key="8">抵/质押合同跟踪</MenuItem>
			      <SubMenu key="sub3" title="Submenu质押合同跟踪质押合同跟踪">
                  <MenuItem key="9">合同审批</MenuItem>
                  <MenuItem key="10">抵/质押合同跟踪</MenuItem>
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
                   <Button colors='primary'>多级下拉</Button>
                 </Dropdown>
             </div>
        )
    }
}
var DemoArray = [{"example":<Demo1 />,"title":" 基础下拉菜单","code":"/**\n *\n * @title 基础下拉菜单\n * @description 下拉菜单提供click，hover和focus事件触发。\n *\n */\n\n function onSelect({ key }) {\n   console.log(`${key} selected`);\n\n }\n\n function onVisibleChange(visible) {\n   console.log(visible);\n }\n\nclass Demo1 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            visible: false\n        };\n\n    }\n    render () {\n\n        const menu1 = (\n              <Menu\n                multiple\n                onSelect={onSelect}>\n                <MenuItem key=\"1\">借款合同</MenuItem>\n                <MenuItem key=\"2\">抵/质押合同</MenuItem>\n                <MenuItem key=\"3\">担保合同</MenuItem>\n                <MenuItem key=\"4\">联保合同</MenuItem>\n                <MenuItem key=\"5\">合同审批</MenuItem>\n                <MenuItem key=\"6\">抵/质押合同跟踪</MenuItem>\n              </Menu>\n          );\n          const menu2 = (\n                <Menu\n                  multiple\n                  onSelect={onSelect}>\n                      <MenuItem key=\"1\"><Icon type='uf-listsearch' />借款合同</MenuItem>\n                      <MenuItem key=\"2\"><Icon type='uf-listsearch' />抵/质押合同</MenuItem>\n                      <MenuItem key=\"3\"><Icon type='uf-listsearch' />担保合同</MenuItem>\n                      <MenuItem key=\"4\"><Icon type='uf-listsearch' />联保合同</MenuItem>\n                     <MenuItem key=\"5\"><Icon type='uf-seal' />合同审批</MenuItem>\n                     <MenuItem key=\"6\"><Icon type='uf-bullseye' />抵/质押合同跟踪</MenuItem>\n                </Menu>\n            );\n        return (\n            <div className=\"demoPadding\">\n                <Dropdown\n                    trigger={['click']}\n                    overlay={menu1}\n                    animation=\"slide-up\"\n                    onVisibleChange={onVisibleChange}>\n                    <Button colors='primary'>点击显示</Button>\n                  </Dropdown>\n                  <Dropdown\n                      trigger={['hover']}\n                      overlay={menu2}\n                      animation=\"slide-up\"\n                      onVisibleChange={onVisibleChange}>\n                      <Button colors='primary'>鼠标滑过显示</Button>\n                    </Dropdown>\n            </div>\n        )\n    }\n}\n","desc":" 下拉菜单提供click，hover和focus事件触发。"},{"example":<Demo2 />,"title":" 不同样子的下拉菜单","code":"/**\n *\n * @title 不同样子的下拉菜单\n * @description 通过不同的子组件搭配，组成不同形式的菜单\n *\n */\n\n\n function onSelect({ key }) {\n   console.log(`${key} selected`);\n\n }\n\n function onVisibleChange(visible) {\n   console.log(visible);\n }\n\n const menu1 = (\n     <Menu\n       multiple\n       onSelect={onSelect}>\n       <MenuItem key=\"1\">借款合同</MenuItem>\n       <MenuItem key=\"2\">抵/质押合同</MenuItem>\n       <MenuItem key=\"3\">担保合同</MenuItem>\n       <MenuItem key=\"4\">联保合同</MenuItem>\n       <Divider />\n       <MenuItem key=\"5\">合同审批</MenuItem>\n       <MenuItem key=\"6\">抵/质押合同跟踪</MenuItem>\n     </Menu>\n );\n\n const menu2 = (\n     <Menu\n       multiple\n       onSelect={onSelect}>\n       <MenuItemGroup title=\"合同类别\">\n       <MenuItem key=\"1\">借款合同</MenuItem>\n       <MenuItem key=\"2\">抵/质押合同</MenuItem>\n       <MenuItem key=\"3\">担保合同</MenuItem>\n       <MenuItem key=\"4\">联保合同</MenuItem>\n        </MenuItemGroup>\n        <MenuItemGroup title=\"合同操作\">\n            <MenuItem key=\"5\">合同审批</MenuItem>\n            <MenuItem key=\"6\">抵/质押合同跟踪</MenuItem>\n        </MenuItemGroup>\n     </Menu>\n );\n const menu3 = (\n     <Menu\n       vertical\n       onSelect={onSelect}>\n       <SubMenu key=\"sub1\" title={<span><span>Navigation One</span></span>}>\n\t\t\t      <MenuItemGroup title=\"合同类别\">\n                      <MenuItem key=\"1\">借款合同</MenuItem>\n                      <MenuItem key=\"2\">抵/质押合同</MenuItem>\n                      <MenuItem key=\"3\">担保合同</MenuItem>\n                      <MenuItem key=\"4\">联保合同</MenuItem>\n\t\t\t      </MenuItemGroup>\n\t\t\t      <MenuItemGroup title=\"合同操作\">\n                      <MenuItem key=\"5\">合同审批</MenuItem>\n                      <MenuItem key=\"6\">抵/质押合同跟踪</MenuItem>\n\t\t\t      </MenuItemGroup>\n\t\t\t</SubMenu>\n\t\t\t<SubMenu key=\"sub2\" title=''>\n            <MenuItem key=\"7\">合同审批</MenuItem>\n            <MenuItem key=\"8\">抵/质押合同跟踪</MenuItem>\n\t\t\t      <SubMenu key=\"sub3\" title=\"Submenu质押合同跟踪质押合同跟踪\">\n                  <MenuItem key=\"9\">合同审批</MenuItem>\n                  <MenuItem key=\"10\">抵/质押合同跟踪</MenuItem>\n\t\t\t      </SubMenu>\n\t\t\t</SubMenu>\n     </Menu>\n );\nclass Demo2 extends Component {\n    render () {\n        return (\n            <div className=\"demoPadding\">\n\n                 <Dropdown\n                   trigger={['click']}\n                   overlay={menu1}\n                   animation=\"slide-up\"\n                   onVisibleChange={onVisibleChange}\n                 >\n                   <Button colors='primary'>带有分割线的下拉</Button>\n                 </Dropdown>\n\n                 <Dropdown\n                   trigger={['click']}\n                   overlay={menu2}\n                   animation=\"slide-up\"\n                   onVisibleChange={onVisibleChange}\n                 >\n                   <Button colors='primary'>带有小标题的下拉</Button>\n                 </Dropdown>\n                 <Dropdown\n                   trigger={['click']}\n                   overlay={menu3}\n                   animation=\"slide-up\"\n                   onVisibleChange={onVisibleChange}\n                 >\n                   <Button colors='primary'>多级下拉</Button>\n                 </Dropdown>\n             </div>\n        )\n    }\n}\n","desc":" 通过不同的子组件搭配，组成不同形式的菜单"}]


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
