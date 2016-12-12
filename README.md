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

```js


```



## API

#### Dropdown

|参数|说明|类型|默认值|
|:--|:---:|:--:|---:|
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

#### DropdownToggle

|参数|说明|类型|默认值|
|:--|:---:|:--:|---:|
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
|title|Dropdown触发按钮显示文字|-|-|
|title|Dropdown触发按钮显示文字|-|-|

#### 开发调试

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-bee/bee-dropdown
$ cd bee-dropdown
$ npm install
$ npm run dev
```
