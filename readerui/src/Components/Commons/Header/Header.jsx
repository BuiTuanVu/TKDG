import React from 'react';
import 'antd/dist/antd.css';
import './Header.css';
import { Menu, Icon, Dropdown, Input, Row, Col, Button, Modal } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../../../Assets/logo.png';
import Sign from '../../Sign/Sign';

const { Search } = Input;

class HeaderCustom extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  componentWillReceiveProps(next) {
    if (next.isLogin) {
      this.setState({ visible: false });
    }
  }
  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  render() {
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <Link to="/trade">Đổi quà tặng</Link>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="#">Gửi bài viết</a>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="#">Lịch sử tin</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">Đăng xuất</Menu.Item>
      </Menu>
    );
    return (
      <div>
        <div className="top-up">
          <div className="second">
            <Link to="#" className="link-custom">
              Liên hệ
            </Link>
            <span>&ensp;|&ensp;</span>
            <Link to="#" className="link-custom">
              Quảng cáo
            </Link>
            <span>&ensp;|&ensp;</span>
            <Link to="#" className="link-custom">
              Gửi bài viết
            </Link>
            <span>&ensp;|&ensp;</span>
            <Link to="/trade" className="link-custom">
              Đổi quà
            </Link>
          </div>
          <div style={{ position: 'absolute', right: 0 }}>
            <span>Hồ Chí Minh, Thứ hai - 09/12/2019</span>
          </div>
        </div>
        <Row className="header-custom">
          {' '}
          <Col
            span={4}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Link className="logo" to="/home">
              <img
                src={logo}
                style={{
                  objectFit: 'fill',
                  height: '40px',
                  width: '100%'
                }}
              />
            </Link>
          </Col>
          <Col
            span={13}
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Search
              placeholder="Nhập từ khóa tìm kiếm"
              onSearch={value => console.log(value)}
              style={{ width: '60%', height: 40 }}
            />
          </Col>
          <Col
            span={7}
            style={{ float: 'right', textAlign: 'right', paddingRight: 10 }}
          >
            {this.props.isLogin ? (
              <Link style={{ fontSize: 16 }} to="/trade">
                <Icon type="dollar" />
                &ensp;1000&ensp;
              </Link>
            ) : (
              <Button
                type="link"
                className="link-custom"
                onClick={this.showModal}
              >
                {' '}
                <Icon type="login" />
                Đăng nhập
              </Button>
            )}
            <span>|</span>
            {this.props.isLogin ? (
              <Dropdown overlay={menu} trigger={['click']}>
                <Link
                  className="ant-dropdown-link"
                  to="trade"
                  style={{ fontSize: 16 }}
                >
                  &ensp;
                  <Icon type="user" />
                  &ensp;
                  {this.props.user}&ensp <Icon type="down" />
                </Link>
              </Dropdown>
            ) : (
              <Button
                type="link"
                className="link-custom"
                onClick={this.showModal}
              >
                {' '}
                <Icon type="user-add" />
                Đăng ký
              </Button>
            )}

            <Modal
              visible={this.state.visible}
              onCancel={this.handleCancel}
              footer={null}
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                maxWidth: '350px'
              }}
            >
              <Sign />
            </Modal>
          </Col>
        </Row>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  user: state.demoApp.username,
  isLogin: state.demoApp.isLogin
});
export default connect(mapStateToProps)(HeaderCustom);
