import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BackTop } from 'antd';
import { BrowserRouter, Route, withRouter } from 'react-router-dom'
import queryString from 'query-string'
import Navbar from './Components/Commons/Navbar/Navbar';

import { Layout, Row, Col } from '../node_modules/antd/lib';
import HeaderCustom from './Components/Commons/Header/Header';
import Home from './Components/Home/Home';
import FooterCustom from './Components/Commons/Footer/Footer';
import ListByCate from './Components/ListByCate/ListByCate';
import TradeCoin from './Components/ManagementUser/TradeCoin/TradeCoin';
import Detail from './Components/Detai/Detail';
import renderEmpty from 'antd/lib/config-provider/renderEmpty';
const { Header, Footer, Sider, Content } = Layout;

class App extends React.Component {

  render() {

    return (
      <BrowserRouter>
        <BackTop />
        <Layout style={{ backgroundColor: 'white' }}>
          <Row>
            <Col span={3}></Col>
            <Col span={18}>
              <Layout style={{ backgroundColor: 'white' }}>
                <HeaderCustom />
                <Route path="/trade"><TradeCoin /></Route>
                <Header style={{ padding: '0', height: '50px', lineHeight: 50 }} >
                  <Navbar />
                </Header>

                <Content>
                  <Route exact path="/"><Home /></Route>
                  <Route path="/home"><Home /></Route>
                  <Route path="/bycate"><ListByCate /></Route>

                </Content>

              </Layout></Col>
            <Col span={3}></Col>

          </Row>
          <Footer style={{ padding: 0 }}><FooterCustom /></Footer></Layout>
      </BrowserRouter>
    )
  }
}

export default App;
