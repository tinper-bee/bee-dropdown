## Dropdown 下拉框

以条形菜单栏和菜单栏中每个菜单项的弹出菜单窗口两部分组成，一般作为应用系统的主菜单使用。

## 代码展示

### API

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
