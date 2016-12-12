import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import Dropdown from '../src/index';



describe('verifiy size', function () {
  it('Button should be exist', function () {
    let dropdown = mount(<Dropdown colors="primary"  key="B" id='aa'>
        <Dropdown.Item eventKey="A" >Default Item</Dropdown.Item>
        <Dropdown.Item eventKey="B" active>Active Item</Dropdown.Item>
        <Dropdown.Item eventKey="C" disabled>Disabled Item</Dropdown.Item>
        <Dropdown.Item divider></Dropdown.Item>
        <Dropdown.Item href="http://www.pagurian.com">Link Item</Dropdown.Item>
        </Dropdown>, {attachTo: document.body });

        console.log(window.document.getElementById('aa'));

  });



});
