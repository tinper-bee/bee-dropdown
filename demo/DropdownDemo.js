import { Dropdown } from '../src';
import React, { Component } from 'react'
import ReactDOM from 'react-dom';

const SHAPES = ['primary', 'accent','success', 'warning', 'danger', 'info'];

function renderButtonGroup(shape,index){
    return (
        <Dropdown colors={shape}  title={shape} key={index}>
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
      {SHAPES.map(renderButtonGroup)}
      <h3>下拉</h3>
      <Dropdown title="default">
      <Dropdown.Item>下拉一</Dropdown.Item>
      <Dropdown.Item>下拉2</Dropdown.Item>
      <Dropdown.Item>下拉3</Dropdown.Item>
      <Dropdown.Item>下拉4</Dropdown.Item>
      </Dropdown>
      <h3>hover显示</h3>
      <Dropdown title="default" trigger="hover">
      <Dropdown.Item disabled>下拉一</Dropdown.Item>
      <Dropdown.Item>下拉2</Dropdown.Item>
      <Dropdown.Item>下拉3</Dropdown.Item>
      <Dropdown.Item breakLine>下拉3</Dropdown.Item>
      <Dropdown.Item>下拉4</Dropdown.Item>
      </Dropdown>
      <h3>不可用下拉</h3>
      <Dropdown title="default" disabled>
      <Dropdown.Item>下拉一</Dropdown.Item>
      <Dropdown.Item>下拉2</Dropdown.Item>
      <Dropdown.Item>下拉3</Dropdown.Item>
      <Dropdown.Item>下拉4</Dropdown.Item>
      </Dropdown>
      <h3>带不可点击下拉</h3>
      <Dropdown title="default">
      <Dropdown.Item eventKey="A" disabled>下拉一</Dropdown.Item>
      <Dropdown.Item eventKey="B" active>下拉2</Dropdown.Item>
      <Dropdown.Item eventKey="C">下拉3</Dropdown.Item>
      <Dropdown.Item eventKey="D">下拉4</Dropdown.Item>
      <Dropdown.Item href="https://www.tinper.org">下拉4</Dropdown.Item>
      </Dropdown>
      <h3>上拉</h3>
      <Dropdown title="default" dropup colors="primary">
      <Dropdown.Item disabled>下拉一</Dropdown.Item>
      <Dropdown.Item>下拉2</Dropdown.Item>
      <Dropdown.Item>下拉3</Dropdown.Item>
      <Dropdown.Item>下拉4</Dropdown.Item>
      </Dropdown>
      <h3>上拉</h3>
      <Dropdown title="default" colors="primary">
      <Dropdown.Item disabled>下拉一</Dropdown.Item>
      <Dropdown.Item>下拉2</Dropdown.Item>
      <Dropdown.Item>下拉3</Dropdown.Item>
      <Dropdown.Item breakLine>下拉3</Dropdown.Item>
      <Dropdown.Item>下拉4</Dropdown.Item>
      </Dropdown>

      </div>
    )
  }
}
export default Demo;
