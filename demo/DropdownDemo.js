import  Dropdown from '../src';
import React, { Component } from 'react'
import ReactDOM from 'react-dom';

const COLORS = ['primary', 'accent','success', 'warning', 'danger', 'info'];

function renderButtonGroup(color,index){
    return (
        <Dropdown colors={color}  title={color} key={index} transition>
            <Dropdown.Item eventKey="A" >Default Item</Dropdown.Item>
            <Dropdown.Item eventKey="B" active>Active Item</Dropdown.Item>
            <Dropdown.Item eventKey="C" disabled>Disabled Item</Dropdown.Item>
            <Dropdown.Item divider></Dropdown.Item>
            <Dropdown.Item href="http://www.pagurian.com">Link Item</Dropdown.Item>
        </Dropdown>
    );
}

class Demo extends Component {
  render(){
    return(
      <div>
      <h3>不同颜色下拉</h3>
      {COLORS.map(renderButtonGroup)}
      <h3>下拉</h3>
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
      <h3>模拟选择器</h3>
      <Dropdown title="选择" select transition>
      <Dropdown.Item disabled eventKey="A">下拉一</Dropdown.Item>
      <Dropdown.Item eventKey="B">下拉2</Dropdown.Item>
      <Dropdown.Item eventKey="C">下拉3</Dropdown.Item>
      <Dropdown.Item divider eventKey="D">下拉3</Dropdown.Item>
      <Dropdown.Item eventKey="E">下拉4</Dropdown.Item>
      </Dropdown>
      <h3>hover显示</h3>
      <Dropdown title="default" trigger="hover">
      <Dropdown.Item disabled eventKey="A">下拉一</Dropdown.Item>
      <Dropdown.Item eventKey="B">下拉2</Dropdown.Item>
      <Dropdown.Item eventKey="C">下拉3</Dropdown.Item>
      <Dropdown.Item divider eventKey="D">下拉3</Dropdown.Item>
      <Dropdown.Item eventKey="E">下拉4</Dropdown.Item>
      </Dropdown>

      <h3>上拉</h3>
      <Dropdown title="default" dropup colors="primary">
      <Dropdown.Item disabled>下拉一</Dropdown.Item>
      <Dropdown.Item>下拉2</Dropdown.Item>
      <Dropdown.Item>下拉3</Dropdown.Item>
      <Dropdown.Item divider>下拉3</Dropdown.Item>
      <Dropdown.Item>下拉4</Dropdown.Item>
      </Dropdown>
      <h3>不可点击下拉</h3>
      <Dropdown title="default" disabled colors="danger">
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
export default Demo;
