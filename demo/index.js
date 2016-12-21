
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'bee-button';
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
 * @title 不同颜色的下拉
 * @description 通过`colors`属性控制按钮颜色
 *
 */
 const COLORS = ['success', 'warning', 'danger', 'info'];

 function renderButtonGroup(color,index){
     return (
         <Col sm={2}>
             <Dropdown colors={color}  title={color} key={index}>
                 <Dropdown.Item eventKey="A" >Default Item</Dropdown.Item>
                 <Dropdown.Item eventKey="B" active>Active Item</Dropdown.Item>
                 <Dropdown.Item eventKey="C" disabled>Disabled Item</Dropdown.Item>
                 <Dropdown.Item divider></Dropdown.Item>
                 <Dropdown.Item href="http://www.pagurian.com">Link Item</Dropdown.Item>
             </Dropdown>
         </Col>
     );
 }

class Demo2 extends Component {
    render () {
        return (
            <Row>
                {COLORS.map(renderButtonGroup)}
            </Row>
        )
    }
}
/**
 *
 * @title 模拟选择器的下拉菜单
 * @description 通过设置select属性控制是否为模拟选择器
 *
 */

class Demo3 extends Component {
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
var DemoArray = [{"example":<Demo1 />,"title":" 默认下拉菜单","code":"/**\r\n *\r\n * @title 默认下拉菜单\r\n * @description\r\n *\r\n */\r\n\r\nclass Demo1 extends Component {\r\n    render () {\r\n        return (\r\n            <Dropdown title=\"默认下拉\" activeKey=\"B\">\r\n            <Dropdown.Item eventKey=\"A\">下拉一</Dropdown.Item>\r\n            <Dropdown.Item eventKey=\"B\">下拉2</Dropdown.Item>\r\n            <Dropdown.Item eventKey=\"C\">下拉3</Dropdown.Item>\r\n            <Dropdown.Item eventKey=\"D\">下拉4</Dropdown.Item>\r\n            <Dropdown.Item divider>分割线</Dropdown.Item>\r\n            <Dropdown.Item eventKey=\"A\" disabled>不可点击</Dropdown.Item>\r\n            <Dropdown.Item eventKey=\"B\">活跃的</Dropdown.Item>\r\n            <Dropdown.Item href=\"https://www.tinper.org\">锚点</Dropdown.Item>\r\n            </Dropdown>\r\n        )\r\n    }\r\n}\r\n","desc":""},{"example":<Demo2 />,"title":" 不同颜色的下拉","code":"/**\r\n *\r\n * @title 不同颜色的下拉\r\n * @description 通过`colors`属性控制按钮颜色\r\n *\r\n */\r\n const COLORS = ['success', 'warning', 'danger', 'info'];\r\n\r\n function renderButtonGroup(color,index){\r\n     return (\r\n         <Col sm={2}>\r\n             <Dropdown colors={color}  title={color} key={index}>\r\n                 <Dropdown.Item eventKey=\"A\" >Default Item</Dropdown.Item>\r\n                 <Dropdown.Item eventKey=\"B\" active>Active Item</Dropdown.Item>\r\n                 <Dropdown.Item eventKey=\"C\" disabled>Disabled Item</Dropdown.Item>\r\n                 <Dropdown.Item divider></Dropdown.Item>\r\n                 <Dropdown.Item href=\"http://www.pagurian.com\">Link Item</Dropdown.Item>\r\n             </Dropdown>\r\n         </Col>\r\n     );\r\n }\r\n\r\nclass Demo2 extends Component {\r\n    render () {\r\n        return (\r\n            <Row>\r\n                {COLORS.map(renderButtonGroup)}\r\n            </Row>\r\n        )\r\n    }\r\n}\r\n","desc":" 通过`colors`属性控制按钮颜色"},{"example":<Demo3 />,"title":" 模拟选择器的下拉菜单","code":"/**\r\n *\r\n * @title 模拟选择器的下拉菜单\r\n * @description 通过设置select属性控制是否为模拟选择器\r\n *\r\n */\r\n\r\nclass Demo3 extends Component {\r\n    render () {\r\n        return (\r\n            <Dropdown title=\"选择器\" select>\r\n                <Dropdown.Item disabled eventKey=\"A\">下拉一</Dropdown.Item>\r\n                <Dropdown.Item eventKey=\"B\">下拉2</Dropdown.Item>\r\n                <Dropdown.Item eventKey=\"C\">下拉3</Dropdown.Item>\r\n                <Dropdown.Item divider eventKey=\"D\">下拉3</Dropdown.Item>\r\n                <Dropdown.Item eventKey=\"E\">下拉4</Dropdown.Item>\r\n            </Dropdown>\r\n        )\r\n    }\r\n}\r\n","desc":" 通过设置select属性控制是否为模拟选择器"}]


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
