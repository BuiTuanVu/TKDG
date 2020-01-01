import React, { Component } from 'react';
import './TopPostList.css';
import 'antd/dist/antd.css';

import { Row, Col, Tabs, List, Typography, Icon } from 'antd';
import rightside from '../../../../Assets/rightside01.png';
const { TabPane } = Tabs;
const { Text } = Typography;

class TopPostList extends Component {
  render() {
    const data = [
      'Đào tạo nguồn nhân lực chất lượng cao là cấp thiết',
      'Đào tạo nguồn nhân lực chất lượng cao là cấp thiết',
      'Ông chủ Uniqlo coi Việt Nam là thị trường tiềm năng nhất Châu Á',
      'Miền Bắc xuất hiện đợt rét đậm',
      'CĐV Thai lan không hài lòng vì thua Việt Nam'
    ];
    return (
      <div>
        <Tabs defaultActiveKey="1" style={{ marginTop: 17, marginLeft: 10 }}>
          <TabPane tab="Mới nhất" key="1">
            <List
              itemLayout="vertical"
              dataSource={data}
              renderItem={item => (
                <List.Item>
                  <div className="side-post">
                    <Row gutter={10}>
                      <Col span={8}>
                        {' '}
                        <img
                          src={rightside}
                          className="img-side-post"
                          height={100}
                          style={{ objectFit: 'fill', width: '100%' }}
                        ></img>
                      </Col>
                      <Col span={16}>
                        <div className="info-side-post">
                          <Text strong style={{ fontSize: 17 }}>
                            {item}
                          </Text>
                          <Text style={{ fontSize: 15 }}>
                            <Icon type="clock-circle" />
                            &ensp; 06/12/2019
                            <span>&ensp;|&ensp;</span>
                            22:00
                          </Text>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </List.Item>
              )}
            />
          </TabPane>
          <TabPane tab="Đọc nhiều nhất" key="2">
            <List
              itemLayout="vertical"
              dataSource={data}
              renderItem={item => (
                <List.Item>
                  <div className="side-post">
                    <Row gutter={10}>
                      <Col span={8}>
                        {' '}
                        <img
                          src={rightside}
                          className="img-side-post"
                          height={90}
                          style={{ objectFit: 'fill', width: '100%' }}
                        ></img>
                      </Col>
                      <Col span={16}>
                        <div className="info-side-post">
                          <Text strong style={{ fontSize: 20 }}>
                            {item}
                          </Text>
                          <Text style={{ fontSize: 15 }}>
                            <Icon type="clock-circle" />
                            &ensp; 06/12/2019
                            <span>&ensp;|&ensp;</span>
                            22:00
                          </Text>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </List.Item>
              )}
            />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
export default TopPostList;
