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
