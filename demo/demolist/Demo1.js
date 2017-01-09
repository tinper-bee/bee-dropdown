/**
 *
 * @title 基础下拉菜单
 * @description 下拉菜单提供click，hover和focus事件触发。
 *
 */

 function onSelect({ key }) {
   console.log(`${key} selected`);

 }

 function onVisibleChange(visible) {
   console.log(visible);
 }

class Demo1 extends Component {

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
        return (
            <div className="demoPadding">
                <Dropdown
                    trigger={['click']}
                    overlay={menu1}
                    animation="slide-up"
                    onVisibleChange={onVisibleChange}>
                    <Button colors='primary'>点击显示</Button>
                  </Dropdown>
                  <Dropdown
                      trigger={['hover']}
                      overlay={menu2}
                      animation="slide-up"
                      onVisibleChange={onVisibleChange}>
                      <Button colors='primary'>鼠标滑过显示</Button>
                    </Dropdown>
            </div>
        )
    }
}
