# bee-dropdown

[![npm version](https://img.shields.io/npm/v/bee-dropdown.svg)](https://www.npmjs.com/package/bee-dropdown)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-dropdown/master.svg)](https://travis-ci.org/tinper-bee/bee-dropdown)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-dropdown/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-dropdown?branch=master)
[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/bee-dropdown.svg)](https://david-dm.org/tinper-bee/bee-dropdown#info=devDependencies)
[![NPM downloads](http://img.shields.io/npm/dm/bee-dropdown.svg?style=flat)](https://npmjs.org/package/bee-dropdown)


## 浏览器支持

|![IE](https://raw.github.com/alrra/browser-logos/master/internet-explorer/internet-explorer_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/master/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/firefox/firefox_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/opera/opera_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/safari/safari_48x48.png)|
| --- | --- | --- | --- | --- |
| IE 9+ ✔ | Chrome 31.0+ ✔ | Firefox 31.0+ ✔ | Opera 30.0+ ✔ | Safari 7.0+ ✔ |


下拉列表组件

## 使用方法

先进行下载bee-button包
```
npm install --save bee-dropdown
```

```js
import Button from 'bee-dropdown';

ReactDOM.render(
    <Dropdown title="选择">
    <Dropdown.Item disabled eventKey="A">下拉一</Dropdown.Item>
    <Dropdown.Item eventKey="B">下拉2</Dropdown.Item>
    <Dropdown.Item eventKey="C">下拉3</Dropdown.Item>
    <Dropdown.Item divider eventKey="D">下拉3</Dropdown.Item>
    <Dropdown.Item eventKey="E">下拉4</Dropdown.Item>
    </Dropdown>
        , document.getElementById('target'));


```

#### 样式引入
- 可以使用link引入build目录下Dropdown.css
```
<link rel="stylesheet" href="./node_modules/bee-dropdown/build/Dropdown.css">
```
- 可以在js中import样式
```js
import "./node_modules/bee-dropdown/src/Dropdown.scss"
//或是
import "./node_modules/bee-dropdown/build/Dropdown.css"
```

## API

#### Dropdown

|参数|说明|类型|默认值|
|:--|:---|:----|:---|
|title|Dropdown触发按钮显示文字|-|-|
|activeKey|一直显示高亮的子菜单（与子菜单eventKey对应）|-|-|
|disabled|不可点击的触发按钮|-|-|
|trigger|触发方式|string|click|
|dropup|是否向上展示|boolean|false|
|onClose|关闭时的钩子函数|function|-|
|onOpen|打开时的钩子函数|function|-|
|onToggle|触发动作时的钩子函数|function|-|
|onSelect|选中子选项时的钩子函数|-|-|
|select|选中之后是否更新title|-|-|
|active|Dropdown触发按钮显示文字|-|-|
|componentClass|Dropdown所使用的元素|string/reactComponent|div|
|menuStyle|传递给menu的style样式|object|-|
|colors|Dropdown按钮及菜单的颜色|-|-|
|title|Dropdown触发按钮显示文字|-|-|

其他属性是传递给dropdown触发按钮的。

#### Dropdown.Item

|参数|说明|类型|默认值|
|:--|:---:|:--:|---:|
|href|链接地址|string|-|
|divider|是否为分割线|boolean|false|
|active|是否为激活状态|boolean|false|
|disabled|是否不可用|boolean|false|
|onSelect|选中菜单时的钩子函数|function|-|
|onKeyDown|子菜单键盘件事回调函数|function|-|
|eventKey|子菜单独立的编号|any|-|
|componentClass|子菜单使用的dom元素|any|a|
|clsPrefix|样式前缀|string|u-menu-item|


#### 开发调试

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-bee/bee-dropdown
$ cd bee-dropdown
$ npm install
$ npm run dev
```
