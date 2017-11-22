/**
 *
 * @title 控制显示隐藏的下拉菜单
 * @description 通过设置Dropdown组件`visible`props，可以外部控制睇下啦菜单的显示隐藏。
 *
 */

import React, { Component } from 'react';
import Button from 'bee-button';
import Menu, { Item as MenuItem, Divider, SubMenu, MenuItemGroup } from 'bee-menus';
import Dropdown from '../../src';


function onVisibleChange(visible) {
    console.log(visible);
}

export default class Demo3 extends Component {
    state = {
        visible: false
    }
    handleSelect = () => {
        this.setState({
            visible: false
        })
    }

    handleShow = () => {
        this.setState({
            visible: true
        })
    }

    render () {

        const menu1 = (
            <Menu
                onSelect={this.handleSelect}>
                <MenuItem key="1">借款合同</MenuItem>
                <MenuItem key="2">抵/质押合同</MenuItem>
                <MenuItem key="3">担保合同</MenuItem>
                <MenuItem key="4">联保合同</MenuItem>
                <MenuItem key="5">合同审批</MenuItem>
                <MenuItem key="6">抵/质押合同跟踪</MenuItem>
            </Menu>
        );

        return (
            <div className="demoPadding">
                <Dropdown
                    trigger={['click']}
                    overlay={menu1}
                    animation="slide-up"
                    visible={ this.state.visible }
                    onVisibleChange={onVisibleChange}
                >
                    <Button
                        onClick={this.handleShow}
                        colors='primary'>
                        受控制的下拉
                    </Button>
                </Dropdown>

            </div>
        )
    }
}
