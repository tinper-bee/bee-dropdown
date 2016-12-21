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
