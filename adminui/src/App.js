import React from 'react';

import { Breadcrumb, Layout } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import SideBar from './Components/Common/Menu/SideBar/SideBar';
import NavBarContainer from './Components/Common/Menu/NavBar/NavBarContainer';

import DashBoard from './Components/Dashboard/DashBoard';
import Login from './Components/Common/Login/Login';



const { Content } = Layout;
class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Login} />

        <Route path="/admin/">
          <Layout style={{ height: '100vh' }}>
            <SideBar />
            <Layout>
              <NavBarContainer />
              <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                  <Route path="/admin/view-list-user">
                    <Breadcrumb.Item>Quản lý tài khoản</Breadcrumb.Item>
                    <Breadcrumb.Item>Xem danh sách người dùng</Breadcrumb.Item>
                  </Route>
                  <Route path="/admin/detailUser">
                    <Breadcrumb.Item>Quản lý tài khoản</Breadcrumb.Item>
                    <Breadcrumb.Item>Xem chi tiết người dùng</Breadcrumb.Item>
                  </Route>

                  <Route path="/admin/skills">
                    <Breadcrumb.Item>Quản lý kĩ năng</Breadcrumb.Item>
                    <Breadcrumb.Item>Xem danh sách kĩ năng</Breadcrumb.Item>
                  </Route>

                  <Route path="/admin/contract">
                    <Breadcrumb.Item>Quản lý hợp đồng</Breadcrumb.Item>
                    <Breadcrumb.Item>Xem danh sách hợp đồng</Breadcrumb.Item>
                  </Route>
                  <Route path="/admin/detailContract">
                    <Breadcrumb.Item>Quản lý hợp đồng</Breadcrumb.Item>
                    <Breadcrumb.Item>Xem chi tiết hợp đồng</Breadcrumb.Item>
                  </Route>
                  <Route path="/admin/complaint">
                    <Breadcrumb.Item>Quản lý hợp đồng</Breadcrumb.Item>
                    <Breadcrumb.Item>Danh sách khiếu nại</Breadcrumb.Item>
                  </Route>
                </Breadcrumb>
                <Content
                  style={{
                    background: '#fff',
                    padding: 24,
                    margin: 0,
                    minHeight: 'auto'
                  }}
                >
                  <Route path="/admin/" component={DashBoard} />

                </Content>
              </Layout>
            </Layout>
          </Layout>
        </Route>
      </BrowserRouter>
    );
  }
}

export default App;
