/**
 *
 * @title 默认下拉菜单
 * @description
 *
 */

 function onSelect({ key }) {
   console.log(`${key} selected`);
 }

 function onVisibleChange(visible) {
   console.log(visible);
 }

 const menu = (
   <Menu onSelect={onSelect}>
     <MenuItem disabled>disabled</MenuItem>
     <MenuItem key="1">one</MenuItem>
     <Divider />
     <MenuItem key="2">two</MenuItem>
   </Menu>
 );

class Demo2 extends Component {
    render () {
        return (
            <div style={{ margin: 20 }}>
               <div style={{ height: 100 }}/>
               <div>
                 <Dropdown
                   trigger={['click']}
                   overlay={menu}
                   animation="slide-up"
                   onVisibleChange={onVisibleChange}
                 >
                   <Button style={{ width: 100 }}>open</Button>
                 </Dropdown>
               </div>
             </div>
        )
    }
}
