/**
 *
 * @title 默认下拉菜单
 * @description
 *
 */

class Demo1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
        this.onVisibleChange = this.onVisibleChange.bind(this);
        this.saveSelected = this.saveSelected.bind(this);
        this.confirm = this.confirm.bind(this);

    }


 onVisibleChange(visible) {
   this.setState({
     visible,
   });
 }

 saveSelected({ selectedKeys }) {
   this.selected = selectedKeys;
 }

 confirm() {
   console.log(this.selected);
   this.setState({
     visible: false,
   });
 }
    render () {

        const menu = (
      <Menu
        style={{ width: 140 }}
        multiple
        onSelect={this.saveSelected}
        onDeselect={this.saveSelected}
      >
        <MenuItem key="1">one</MenuItem>
        <MenuItem key="2">two</MenuItem>
        <Divider />
        <MenuItem disabled>
          <button
            style={{
              cursor: 'pointer',
              color: '#000',
              pointerEvents: 'visible',
            }}
            onClick={this.confirm}
          >确定
          </button>
        </MenuItem>
      </Menu>
    );
        return (
            <Dropdown
                trigger={['click']}
                onVisibleChange={this.onVisibleChange}
                visible={this.state.visible}
                closeOnSelect={true}
                overlay={menu}
                animation="slide-up"
              >
                <button>open</button>
              </Dropdown>
        )
    }
}
