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

class Demo1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };

    }
    render () {

        const menu1 = (
              <Menu
                multiple
                onSelect={onSelect}>
                <MenuItem key="1">借款合同</MenuItem>
                <MenuItem key="2">抵/质押合同</MenuItem>
                <MenuItem key="3">担保合同</MenuItem>
                <MenuItem key="4">联保合同</MenuItem>
                <MenuItem key="5">合同审批</MenuItem>
                <MenuItem key="6">抵/质押合同跟踪</MenuItem>
              </Menu>
          );
          const menu2 = (
                <Menu
                  multiple
                  onSelect={onSelect}>
                      <MenuItem key="1"><Icon type='uf-listsearch' />借款合同</MenuItem>
                      <MenuItem key="2"><Icon type='uf-listsearch' />抵/质押合同</MenuItem>
                      <MenuItem key="3"><Icon type='uf-listsearch' />担保合同</MenuItem>
                      <MenuItem key="4"><Icon type='uf-listsearch' />联保合同</MenuItem>
                     <MenuItem key="5"><Icon type='uf-seal' />合同审批</MenuItem>
                     <MenuItem key="6"><Icon type='uf-bullseye' />抵/质押合同跟踪</MenuItem>
                </Menu>
            );
            const menu3 = (
                  <Menu
                    multiple
                    onSelect={onSelect}>
                   <SubMenu key="sub2" title='全部合同'>
                   <MenuItem key="1">借款合同</MenuItem>
                   <MenuItem key="2">抵/质押合同</MenuItem>
                   <MenuItem key="3">担保合同</MenuItem>
                   <MenuItem key="4">联保合同</MenuItem>
                     <SubMenu key="sub3" title="联保合同">
                     <MenuItem key="5">合同审批</MenuItem>
                     <MenuItem key="6">抵/质押合同跟踪</MenuItem>
                     <MenuItem key="7">权属物转换</MenuItem>
                     </SubMenu>
                   </SubMenu>
                  </Menu>
              );
        return (
            <div>
                <Dropdown
                    trigger={['click']}
                    overlay={menu1}
                    animation="slide-up"
                    onVisibleChange={onVisibleChange}>
                    <Button>合同管理</Button>
                  </Dropdown>
                  <Dropdown
                      trigger={['hover']}
                      overlay={menu2}
                      animation="slide-up"
                      onVisibleChange={onVisibleChange}>
                      <Button>合同管理</Button>
                    </Dropdown>
                    <Dropdown
                        trigger={['click']}
                        overlay={menu3}
                        animation="slide-up"
                        onVisibleChange={onVisibleChange}>
                        <Button>合同管理</Button>
                    </Dropdown>
            </div>
        )
    }
}
