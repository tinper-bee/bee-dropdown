/**
 *
 * @title 不同颜色的下拉
 * @description 通过`colors`属性控制按钮颜色
 *
 */
 const COLORS = ['success', 'warning', 'danger', 'info'];

 function renderButtonGroup(color,index){
     return (
         <Col sm={2}>
             <Dropdown colors={color}  title={color} key={index}>
                 <Dropdown.Item eventKey="A" >Default Item</Dropdown.Item>
                 <Dropdown.Item eventKey="B" active>Active Item</Dropdown.Item>
                 <Dropdown.Item eventKey="C" disabled>Disabled Item</Dropdown.Item>
                 <Dropdown.Item divider></Dropdown.Item>
                 <Dropdown.Item href="http://www.pagurian.com">Link Item</Dropdown.Item>
             </Dropdown>
         </Col>
     );
 }

class Demo2 extends Component {
    render () {
        return (
            <Row>
                {COLORS.map(renderButtonGroup)}
            </Row>
        )
    }
}
