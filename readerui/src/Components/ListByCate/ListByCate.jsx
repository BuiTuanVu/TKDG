import React, { Component } from 'react';

import 'antd/dist/antd.css';

import { Route } from 'react-router-dom';
import OutstandingListByCate from './OutstandingListByCate/OutstandingListByCate';

import { Row, Col, Breadcrumb } from 'antd';
import RightContent from '../Commons/RightContent/RightContent';

import Detail from '../Detai/Detail';

class ListByCate extends Component {
  render() {
    return (
      <div style={{ width: '100%' }}>
        <Row gutter={30} style={{ marginTop: '-10px' }}>
          <Col span={16}>
            <Route exact path="/bycate/">
              <Breadcrumb style={{ marginTop: 20 }}>
                <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
                <Breadcrumb.Item>Thể thao</Breadcrumb.Item>
              </Breadcrumb>
              <OutstandingListByCate />
            </Route>
            <Route exact path="/bycate/detail">
              <Detail />
            </Route>
          </Col>
          <Col span={8} style={{ marginTop: '25px' }}>
            <RightContent />
          </Col>
        </Row>
      </div>
    );
  }
}
export default ListByCate;
