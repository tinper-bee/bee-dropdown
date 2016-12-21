/**
 *
 * @title 模拟选择器的下拉菜单
 * @description 通过设置select属性控制是否为模拟选择器
 *
 */

class Demo3 extends Component {
    render () {
        return (
            <Dropdown title="选择器" select>
                <Dropdown.Item disabled eventKey="A">下拉一</Dropdown.Item>
                <Dropdown.Item eventKey="B">下拉2</Dropdown.Item>
                <Dropdown.Item eventKey="C">下拉3</Dropdown.Item>
                <Dropdown.Item divider eventKey="D">下拉3</Dropdown.Item>
                <Dropdown.Item eventKey="E">下拉4</Dropdown.Item>
            </Dropdown>
        )
    }
}
