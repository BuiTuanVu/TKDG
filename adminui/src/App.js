import React from 'react';

import { Breadcrumb, Layout } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import SideBar from './Components/Common/Menu/SideBar/SideBar';
import NavBarContainer from './Components/Common/Menu/NavBar/NavBarContainer';

import DashBoard from './Components/Dashboard/DashBoard';
import Login from './Components/Common/Login/Login';
import CreatePost from './Components/Writer/CreatePost/CreatePost';
import ListPost from './Components/Writer/ListPost/ListPost';
import { connect } from 'react-redux';


const { Content } = Layout;

class App extends React.PureComponent {
  render() {
    const { postsData } = this.props;
    const dataPending = postsData.filter((item) => item.status === 0);
    const dataAccepted = postsData.filter((item) => item.status === 1);
    const dataRejected = postsData.filter((item) => item.status === -1);
    return (
      <BrowserRouter>
        <Route exact path="/" component={Login} />
        <Route exact path="/admin-login" component={Login} />
        <Route path="/writer/">
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
                  <Route path="/writer/create-post" component={CreatePost} />
                  <Route path="/writer/view-pending-post" ><ListPost data={dataPending} tit={'Danh sách bài viết chờ duyệt'} /></Route>
                  <Route path="/writer/view-accepted-post" ><ListPost data={dataAccepted} tit={'Danh sách bài viết được duyệt'} /></Route>
                  <Route path="/writer/view-rejected-post" ><ListPost data={dataRejected} tit={'Danh sách bài viết bị từ chối'} /></Route>
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </Route>
      </BrowserRouter>
    );
  }
}


const mapStateToProps = state => {
  return {
    postsData: state.PostReducer.postsData,
  };
};


export default connect(mapStateToProps, null)(App);
