/**
 *
 * @title 默认下拉菜单
 * @description
 *
 */

class Demo1 extends Component {
    render () {
        return (
            <div>
            <Dropdown title="下拉菜单">
            <Dropdown.Item disabled eventKey="A">下拉一</Dropdown.Item>
            <Dropdown.Item eventKey="B">下拉2</Dropdown.Item>
            <Dropdown.Item eventKey="C">下拉3</Dropdown.Item>
            <Dropdown.Item divider eventKey="D">下拉3</Dropdown.Item>
            <Dropdown.Item eventKey="E">下拉4</Dropdown.Item>
            </Dropdown>
            <Dropdown title="上拉菜单" dropup>
            <Dropdown.Item disabled eventKey="A">下拉一</Dropdown.Item>
            <Dropdown.Item eventKey="B">下拉2</Dropdown.Item>
            <Dropdown.Item eventKey="C">下拉3</Dropdown.Item>
            <Dropdown.Item divider eventKey="D">下拉3</Dropdown.Item>
            <Dropdown.Item eventKey="E">下拉4</Dropdown.Item>
            </Dropdown>
            <Dropdown title="不可点击的下拉菜单" disabled colors="danger">
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
