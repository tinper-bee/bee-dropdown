/**
 *
 * @title 不同样子的下拉菜单
 * @description 通过不同的子组件搭配，组成不同形式的菜单
 *
 */


 function onSelect({ key }) {
   console.log(`${key} selected`);

 }

 function onVisibleChange(visible) {
   console.log(visible);
 }

 const menu1 = (
     <Menu
       multiple
       onSelect={onSelect}>
       <MenuItem key="1">借款合同</MenuItem>
       <MenuItem key="2">抵/质押合同</MenuItem>
       <MenuItem key="3">担保合同</MenuItem>
       <MenuItem key="4">联保合同</MenuItem>
       <Divider />
       <MenuItem key="5">合同审批</MenuItem>
       <MenuItem key="6">抵/质押合同跟踪</MenuItem>
     </Menu>
 );

 const menu2 = (
     <Menu
       multiple
       onSelect={onSelect}>
       <MenuItemGroup title="合同类别">
       <MenuItem key="1">借款合同</MenuItem>
       <MenuItem key="2">抵/质押合同</MenuItem>
       <MenuItem key="3">担保合同</MenuItem>
       <MenuItem key="4">联保合同</MenuItem>
        </MenuItemGroup>
        <MenuItemGroup title="合同操作">
            <MenuItem key="5">合同审批</MenuItem>
            <MenuItem key="6">抵/质押合同跟踪</MenuItem>
        </MenuItemGroup>
     </Menu>
 );
 const menu3 = (
     <Menu
       vertical
       onSelect={onSelect}>
       <SubMenu key="sub1" title={<span><span>Navigation One</span></span>}>
			      <MenuItemGroup title="合同类别">
                      <MenuItem key="1">借款合同</MenuItem>
                      <MenuItem key="2">抵/质押合同</MenuItem>
                      <MenuItem key="3">担保合同</MenuItem>
                      <MenuItem key="4">联保合同</MenuItem>
			      </MenuItemGroup>
			      <MenuItemGroup title="合同操作">
                      <MenuItem key="5">合同审批</MenuItem>
                      <MenuItem key="6">抵/质押合同跟踪</MenuItem>
			      </MenuItemGroup>
			</SubMenu>
			<SubMenu key="sub2" title=''>
            <MenuItem key="7">合同审批</MenuItem>
            <MenuItem key="8">抵/质押合同跟踪</MenuItem>
			      <SubMenu key="sub3" title="Submenu质押合同跟踪质押合同跟踪">
                  <MenuItem key="9">合同审批</MenuItem>
                  <MenuItem key="10">抵/质押合同跟踪</MenuItem>
			      </SubMenu>
			</SubMenu>
     </Menu>
 );
class Demo2 extends Component {
    render () {
        return (
            <div className="demoPadding">

                 <Dropdown
                   trigger={['click']}
                   overlay={menu1}
                   animation="slide-up"
                   onVisibleChange={onVisibleChange}
                 >
                   <Button colors='primary'>带有分割线的下拉</Button>
                 </Dropdown>

                 <Dropdown
                   trigger={['click']}
                   overlay={menu2}
                   animation="slide-up"
                   onVisibleChange={onVisibleChange}
                 >
                   <Button colors='primary'>带有小标题的下拉</Button>
                 </Dropdown>
                 <Dropdown
                   trigger={['click']}
                   overlay={menu3}
                   animation="slide-up"
                   onVisibleChange={onVisibleChange}
                 >
                   <Button colors='primary'>多级下拉</Button>
                 </Dropdown>
             </div>
        )
    }
}
