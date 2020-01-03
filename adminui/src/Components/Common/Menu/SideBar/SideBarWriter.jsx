import React from 'react';
import './SideBar.css';
import 'antd/dist/antd.css';
import { Icon, Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Sider } = Layout;
const { SubMenu } = Menu;

class SideBarWriter extends React.Component {
  render() {
    return (
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <Menu.Item key="1">
          <Link style={{ fontSize: 15 }} to="/writer/dashboard">
            <Icon style={{ fontSize: 20 }} type="fund" />
            Trang chủ
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link style={{ fontSize: 15 }} to="/writer/create-post">
            <Icon style={{ fontSize: 20 }} type="file-add" />
            Tạo bài viết
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link style={{ fontSize: 15 }} to="/writer/view-pending-post">
            <Icon style={{ fontSize: 20 }} type="file-sync" />
            Xem bài viết chờ duyệt
          </Link>
        </Menu.Item>
        <Menu.Item key="8">
          <Link style={{ fontSize: 15 }} to="/writer/view-rejected-post">
            <Icon style={{ fontSize: 20 }} type="exception" />
            Xem bài viết bị từ chối
          </Link>
        </Menu.Item>
        <Menu.Item key="9">
          <Link style={{ fontSize: 15 }} to="/writer/view-accepted-post">
            <Icon style={{ fontSize: 20 }} type="file-done" />
            Xem bài viết đã duyệt
          </Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link style={{ fontSize: 15 }} to="/writer/view-schedule">
            <Icon style={{ fontSize: 20 }} type="carry-out" />
            Xem lịch làm việc
          </Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link style={{ fontSize: 15 }} to="/setup">
            <Icon style={{ fontSize: 20 }} type="setting" />
            Cài đặt
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}
export default SideBarWriter;
