
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '../src';
import Dropdown from '../src';


const CARET = <i className="uf uf-chevronarrowdown"></i>;

const CARETUP = <i className="uf uf-chevronarrowup"></i>;


/**
 *
 * @title 默认下拉菜单
 * @description
 *
 */

class Demo1 extends Component {
    render () {
        return (
            <div>
            <Dropdown title="下拉菜单">
            <Dropdown.Item disabled eventKey="A">下拉一</Dropdown.Item>
            <Dropdown.Item eventKey="B">下拉2</Dropdown.Item>
            <Dropdown.Item eventKey="C">下拉3</Dropdown.Item>
            <Dropdown.Item divider eventKey="D">下拉3</Dropdown.Item>
            <Dropdown.Item eventKey="E">下拉4</Dropdown.Item>
            </Dropdown>
            <Dropdown title="上拉菜单" dropup>
            <Dropdown.Item disabled eventKey="A">下拉一</Dropdown.Item>
            <Dropdown.Item eventKey="B">下拉2</Dropdown.Item>
            <Dropdown.Item eventKey="C">下拉3</Dropdown.Item>
            <Dropdown.Item divider eventKey="D">下拉3</Dropdown.Item>
            <Dropdown.Item eventKey="E">下拉4</Dropdown.Item>
            </Dropdown>
            <Dropdown title="不可点击的下拉菜单" disabled colors="danger">
            <Dropdown.Item disabled>下拉一</Dropdown.Item>
            <Dropdown.Item>下拉2</Dropdown.Item>
            <Dropdown.Item>下拉3</Dropdown.Item>
            <Dropdown.Item divider>下拉3</Dropdown.Item>
            <Dropdown.Item>下拉4</Dropdown.Item>
            </Dropdown>
            </div>
        )
    }
}
/**
 *
 * @title 不同颜色的下拉
 * @description 通过`colors`属性控制按钮颜色
 *
 */
 const COLORS = ['primary', 'accent','success', 'warning', 'danger', 'info'];

 function renderButtonGroup(color,index){
     return (
         <Dropdown colors={color}  title={color} key={index}>
             <Dropdown.Item eventKey="A" >Default Item</Dropdown.Item>
             <Dropdown.Item eventKey="B" active>Active Item</Dropdown.Item>
             <Dropdown.Item eventKey="C" disabled>Disabled Item</Dropdown.Item>
             <Dropdown.Item divider></Dropdown.Item>
             <Dropdown.Item href="http://www.pagurian.com">Link Item</Dropdown.Item>
         </Dropdown>
     );
 }

class Demo2 extends Component {
    render () {
        return (
            <div className="demoPadding">
                {COLORS.map(renderButtonGroup)}
            </div>
        )
    }
}
/**
 *
 * @title 不同的子菜单
 * @description 通过item的属性控制子菜单状态
 *
 */

class Demo3 extends Component {

    render () {
        return (
            <Dropdown title="默认下拉" activeKey="B">
            <Dropdown.Item eventKey="A">下拉一</Dropdown.Item>
            <Dropdown.Item eventKey="B">下拉2</Dropdown.Item>
            <Dropdown.Item eventKey="C">下拉3</Dropdown.Item>
            <Dropdown.Item eventKey="D">下拉4</Dropdown.Item>
            <Dropdown.Item divider>分割线</Dropdown.Item>
            <Dropdown.Item eventKey="A" disabled>不可点击</Dropdown.Item>
            <Dropdown.Item eventKey="B">活跃的</Dropdown.Item>
            <Dropdown.Item href="https://www.tinper.org">锚点</Dropdown.Item>
            </Dropdown>
        )
    }
}
/**
 *
 * @title 模拟选择器的下拉菜单
 * @description 通过`select`属性控制按钮大小
 *
 */

class Demo4 extends Component {
    render () {
        return (
            <Dropdown title="选择器" select>
            <Dropdown.Item disabled eventKey="A">下拉一</Dropdown.Item>
            <Dropdown.Item eventKey="B">下拉2</Dropdown.Item>
            <Dropdown.Item eventKey="C">下拉3</Dropdown.Item>
            <Dropdown.Item divider eventKey="D">下拉3</Dropdown.Item>
            <Dropdown.Item eventKey="E">下拉4</Dropdown.Item>
            </Dropdown>
        )
    }
}
/**
 *
 * @title 通过hover触发的下拉菜单
 * @description 通过设置trigger属性设置下拉菜单触发的事件，现在只支持点击和鼠标滑过
 *
 */

class Demo5 extends Component {

    render () {
        return (
            <Dropdown title="hover事件" trigger="hover">
            <Dropdown.Item disabled eventKey="A">下拉一</Dropdown.Item>
            <Dropdown.Item eventKey="B">下拉2</Dropdown.Item>
            <Dropdown.Item eventKey="C">下拉3</Dropdown.Item>
            <Dropdown.Item divider eventKey="D">下拉3</Dropdown.Item>
            <Dropdown.Item eventKey="E">下拉4</Dropdown.Item>
            </Dropdown>
        )
    }
}
var DemoArray = [{"example":<Demo1 />,"title":" 默认下拉菜单","code":"/**\r\n *\r\n * @title 默认下拉菜单\r\n * @description\r\n *\r\n */\r\n\r\nclass Demo1 extends Component {\r\n    render () {\r\n        return (\r\n            <div>\r\n            <Dropdown title=\"下拉菜单\">\r\n            <Dropdown.Item disabled eventKey=\"A\">下拉一</Dropdown.Item>\r\n            <Dropdown.Item eventKey=\"B\">下拉2</Dropdown.Item>\r\n            <Dropdown.Item eventKey=\"C\">下拉3</Dropdown.Item>\r\n            <Dropdown.Item divider eventKey=\"D\">下拉3</Dropdown.Item>\r\n            <Dropdown.Item eventKey=\"E\">下拉4</Dropdown.Item>\r\n            </Dropdown>\r\n            <Dropdown title=\"上拉菜单\" dropup>\r\n            <Dropdown.Item disabled eventKey=\"A\">下拉一</Dropdown.Item>\r\n            <Dropdown.Item eventKey=\"B\">下拉2</Dropdown.Item>\r\n            <Dropdown.Item eventKey=\"C\">下拉3</Dropdown.Item>\r\n            <Dropdown.Item divider eventKey=\"D\">下拉3</Dropdown.Item>\r\n            <Dropdown.Item eventKey=\"E\">下拉4</Dropdown.Item>\r\n            </Dropdown>\r\n            <Dropdown title=\"不可点击的下拉菜单\" disabled colors=\"danger\">\r\n            <Dropdown.Item disabled>下拉一</Dropdown.Item>\r\n            <Dropdown.Item>下拉2</Dropdown.Item>\r\n            <Dropdown.Item>下拉3</Dropdown.Item>\r\n            <Dropdown.Item divider>下拉3</Dropdown.Item>\r\n            <Dropdown.Item>下拉4</Dropdown.Item>\r\n            </Dropdown>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n","desc":""},{"example":<Demo2 />,"title":" 不同颜色的下拉","code":"/**\r\n *\r\n * @title 不同颜色的下拉\r\n * @description 通过`colors`属性控制按钮颜色\r\n *\r\n */\r\n const COLORS = ['primary', 'accent','success', 'warning', 'danger', 'info'];\r\n\r\n function renderButtonGroup(color,index){\r\n     return (\r\n         <Dropdown colors={color}  title={color} key={index}>\r\n             <Dropdown.Item eventKey=\"A\" >Default Item</Dropdown.Item>\r\n             <Dropdown.Item eventKey=\"B\" active>Active Item</Dropdown.Item>\r\n             <Dropdown.Item eventKey=\"C\" disabled>Disabled Item</Dropdown.Item>\r\n             <Dropdown.Item divider></Dropdown.Item>\r\n             <Dropdown.Item href=\"http://www.pagurian.com\">Link Item</Dropdown.Item>\r\n         </Dropdown>\r\n     );\r\n }\r\n\r\nclass Demo2 extends Component {\r\n    render () {\r\n        return (\r\n            <div className=\"demoPadding\">\r\n                {COLORS.map(renderButtonGroup)}\r\n            </div>\r\n        )\r\n    }\r\n}\r\n","desc":" 通过`colors`属性控制按钮颜色"},{"example":<Demo3 />,"title":" 不同的子菜单","code":"/**\r\n *\r\n * @title 不同的子菜单\r\n * @description 通过item的属性控制子菜单状态\r\n *\r\n */\r\n\r\nclass Demo3 extends Component {\r\n\r\n    render () {\r\n        return (\r\n            <Dropdown title=\"默认下拉\" activeKey=\"B\">\r\n            <Dropdown.Item eventKey=\"A\">下拉一</Dropdown.Item>\r\n            <Dropdown.Item eventKey=\"B\">下拉2</Dropdown.Item>\r\n            <Dropdown.Item eventKey=\"C\">下拉3</Dropdown.Item>\r\n            <Dropdown.Item eventKey=\"D\">下拉4</Dropdown.Item>\r\n            <Dropdown.Item divider>分割线</Dropdown.Item>\r\n            <Dropdown.Item eventKey=\"A\" disabled>不可点击</Dropdown.Item>\r\n            <Dropdown.Item eventKey=\"B\">活跃的</Dropdown.Item>\r\n            <Dropdown.Item href=\"https://www.tinper.org\">锚点</Dropdown.Item>\r\n            </Dropdown>\r\n        )\r\n    }\r\n}\r\n","desc":" 通过item的属性控制子菜单状态"},{"example":<Demo4 />,"title":" 模拟选择器的下拉菜单","code":"/**\r\n *\r\n * @title 模拟选择器的下拉菜单\r\n * @description 通过`select`属性控制按钮大小\r\n *\r\n */\r\n\r\nclass Demo4 extends Component {\r\n    render () {\r\n        return (\r\n            <Dropdown title=\"选择器\" select>\r\n            <Dropdown.Item disabled eventKey=\"A\">下拉一</Dropdown.Item>\r\n            <Dropdown.Item eventKey=\"B\">下拉2</Dropdown.Item>\r\n            <Dropdown.Item eventKey=\"C\">下拉3</Dropdown.Item>\r\n            <Dropdown.Item divider eventKey=\"D\">下拉3</Dropdown.Item>\r\n            <Dropdown.Item eventKey=\"E\">下拉4</Dropdown.Item>\r\n            </Dropdown>\r\n        )\r\n    }\r\n}\r\n","desc":" 通过`select`属性控制按钮大小"},{"example":<Demo5 />,"title":" 通过hover触发的下拉菜单","code":"/**\r\n *\r\n * @title 通过hover触发的下拉菜单\r\n * @description 通过设置trigger属性设置下拉菜单触发的事件，现在只支持点击和鼠标滑过\r\n *\r\n */\r\n\r\nclass Demo5 extends Component {\r\n\r\n    render () {\r\n        return (\r\n            <Dropdown title=\"hover事件\" trigger=\"hover\">\r\n            <Dropdown.Item disabled eventKey=\"A\">下拉一</Dropdown.Item>\r\n            <Dropdown.Item eventKey=\"B\">下拉2</Dropdown.Item>\r\n            <Dropdown.Item eventKey=\"C\">下拉3</Dropdown.Item>\r\n            <Dropdown.Item divider eventKey=\"D\">下拉3</Dropdown.Item>\r\n            <Dropdown.Item eventKey=\"E\">下拉4</Dropdown.Item>\r\n            </Dropdown>\r\n        )\r\n    }\r\n}\r\n","desc":" 通过设置trigger属性设置下拉菜单触发的事件，现在只支"}]


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
                <Panel collapsible expanded={ this.state.open } colors='bordered' header={ header } footer={footer} footerStyle = {{padding: 0}}>
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
