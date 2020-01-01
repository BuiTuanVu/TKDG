import React from 'react';
import 'antd/dist/antd.css';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Menu, Icon, Dropdown } from 'antd';
const { SubMenu } = Menu;

class Navbar extends React.Component {
  state = {
    current: 'sub'
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key
    });
  };

  render() {
    const dataCate = [
      'XÃ HỘI',
      'THỂ THAO',
      'GIẢI TRÍ',
      'ĐỜI SỐNG',
      'CÔNG NGHỆ',
      'VĂN HÓA',
      'THỜI SỰ',
      'THỜI TRANG',
      'NHÀ ĐẤT',
      'THẾ GIỚI'
    ];
    const menu = (
      <Menu>
        <Menu.Item>
          <Link>1st menu item</Link>
        </Menu.Item>
        <Menu.Item>
          <Link>2nd menu item</Link>
        </Menu.Item>
        <Menu.Item>
          <Link>3rd menu item</Link>
        </Menu.Item>
      </Menu>
    );
    return (
      <Menu
        style={{ height: '50px', lineHeight: '51px' }}
        theme="dark"
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item
          key="ct0"
          style={{
            textAlign: 'center',
            padding: '0px 10px 0px 20px'
          }}
        >
          <Link to="/home">
            {' '}
            <Icon type="home" style={{ fontSize: '25px' }} />
          </Link>
        </Menu.Item>
        {dataCate.map(item => (
          <Menu.Item key={item.id}>
            <Dropdown overlay={menu}>
              <Link style={{ fontWeight: 500 }} to="/bycate">
                {item} <Icon type="down" />
              </Link>
            </Dropdown>
          </Menu.Item>
        ))}
      </Menu>
    );
  }
}
const mapStateToProps = state => ({
  user: state.demoApp.username,
  isLogin: state.demoApp.isLogin
});
export default connect(mapStateToProps)(Navbar);
