import React, { Component } from 'react';

import 'antd/dist/antd.css';

import { Link } from 'react-router-dom';
import { Row, Col, Tabs, List, Typography, Icon, Button } from 'antd';
import filter01 from '../../../Assets/filer01.png';
import bycate01 from '../../../Assets/bycate01.png';
import bycate02 from '../../../Assets/bycate02.png';
import SecondListByCate from '../SecondListByCate/SecondListByCate';

const { TabPane } = Tabs;
const { Text } = Typography;

class OutstandingListByCate extends Component {
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
        <Tabs defaultActiveKey="1" style={{ marginTop: 5, fontSize: '18px' }}>
          <TabPane tab="Thể thao Việt Nam" key="1" style={{ fontSize: '18px' }}>
            <Row>
              <Col
                span={12}
                className="post"
                style={{
                  backgroundImage: `url(${filter01})`,
                  height: 500
                }}
              >
                <div className="info-post">
                  <Link to="/bycate/detail">
                    <Text
                      strong
                      className="title-post"
                      style={{ fontSize: 25 }}
                    >
                      Bóng đá truyền cảm hứng cho hàng triệu đứa trẻ tại những
                      khu ổ chuột trên thế giới
                    </Text>
                    <Text className="title-post" style={{ fontSize: 15 }}>
                      <Icon type="clock-circle" style={{ color: 'white' }} />
                      &ensp; 06/12/2019
                      <span>&ensp;|&ensp;</span>
                      22:00
                    </Text>
                  </Link>
                </div>
              </Col>

              <Col span={12}>
                <Link to="/bycate/detail">
                  <div
                    className="post"
                    style={{
                      marginLeft: 10,
                      backgroundImage: `url(${bycate01})`,
                      height: 245
                    }}
                  >
                    <div className="info-post">
                      <Text
                        strong
                        className="title-post"
                        style={{ fontSize: 18 }}
                      >
                        Lý Hoàng Nam lần đầu tiên dành được huy chương vàng quần
                        vợt tại SEA Game
                      </Text>
                      <Text className="title-post" style={{ fontSize: 15 }}>
                        <Icon type="clock-circle" style={{ color: 'white' }} />
                        &ensp; 06/12/2019
                        <span>&ensp;|&ensp;</span>
                        22:00
                      </Text>
                    </div>
                  </div>
                </Link>
                <Link to="/bycate/detail">
                  <div
                    className="post"
                    style={{
                      marginLeft: 10,
                      marginTop: 10,
                      backgroundImage: `url(${bycate02})`,
                      height: 245
                    }}
                  >
                    <div className="info-post">
                      <Text
                        strong
                        className="title-post"
                        style={{ fontSize: 18 }}
                      >
                        Nhứng cảm xúc của U22 Việt Nam khi hòa kịch tính U22
                        Thai Lan
                      </Text>
                      <Text className="title-post" style={{ fontSize: 15 }}>
                        <Icon type="clock-circle" style={{ color: 'white' }} />
                        &ensp; 06/12/2019
                        <span>&ensp;|&ensp;</span>
                        22:00
                      </Text>
                    </div>
                  </div>
                </Link>
              </Col>
              <Col span={24}>
                <SecondListByCate />
                <div
                  style={{
                    margin: '40px 0px',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                  }}
                >
                  <Button
                    size="large"
                    style={{ fontSize: 20, margin: '0px auto' }}
                  >
                    Xem thêm&ensp;
                    <Icon type="caret-down" />
                  </Button>
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="Thể thao quốc tế" key="2">
            <Row>
              <Col
                span={12}
                className="post"
                style={{
                  backgroundImage: `url(${filter01})`,
                  height: 600
                }}
              >
                <div className="info-post">
                  <Text strong className="title-post" style={{ fontSize: 25 }}>
                    Bóng đá truyền cảm hứng cho hàng triệu đứa trẻ tại những khu
                    ổ chuột trên thế giới
                  </Text>
                  <Text className="title-post" style={{ fontSize: 15 }}>
                    <Icon type="clock-circle" style={{ color: 'white' }} />
                    &ensp; 06/12/2019
                    <span>&ensp;|&ensp;</span>
                    22:00
                  </Text>
                </div>
              </Col>

              <Col span={12}>
                <div
                  className="post"
                  style={{
                    marginLeft: 10,
                    backgroundImage: `url(${bycate01})`,
                    height: 295
                  }}
                >
                  <div className="info-post">
                    <Text
                      strong
                      className="title-post"
                      style={{ fontSize: 22 }}
                    >
                      Lý Hoàng Nam lần đầu tiên dành được huy chương vàng quần
                      vợt tại SEA Game
                    </Text>
                    <Text className="title-post" style={{ fontSize: 15 }}>
                      <Icon type="clock-circle" style={{ color: 'white' }} />
                      &ensp; 06/12/2019
                      <span>&ensp;|&ensp;</span>
                      22:00
                    </Text>
                  </div>
                </div>
                <div
                  className="post"
                  style={{
                    marginLeft: 10,
                    marginTop: 10,
                    backgroundImage: `url(${bycate02})`,
                    height: 295
                  }}
                >
                  <div className="info-post">
                    <Text
                      strong
                      className="title-post"
                      style={{ fontSize: 22 }}
                    >
                      Nhứng cảm xúc của U22 Việt Nam khi hòa kịch tính U22 Thai
                      Lan
                    </Text>
                    <Text className="title-post" style={{ fontSize: 15 }}>
                      <Icon type="clock-circle" style={{ color: 'white' }} />
                      &ensp; 06/12/2019
                      <span>&ensp;|&ensp;</span>
                      22:00
                    </Text>
                  </div>
                </div>
              </Col>
              <Col span={24}>
                <SecondListByCate />
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="SEA Games 30" key="3">
            <Row>
              <Col
                span={12}
                className="post"
                style={{
                  backgroundImage: `url(${filter01})`,
                  height: 600
                }}
              >
                <div className="info-post">
                  <Text strong className="title-post" style={{ fontSize: 25 }}>
                    Bóng đá truyền cảm hứng cho hàng triệu đứa trẻ tại những khu
                    ổ chuột trên thế giới
                  </Text>
                  <Text className="title-post" style={{ fontSize: 15 }}>
                    <Icon type="clock-circle" style={{ color: 'white' }} />
                    &ensp; 06/12/2019
                    <span>&ensp;|&ensp;</span>
                    22:00
                  </Text>
                </div>
              </Col>

              <Col span={12}>
                <div
                  className="post"
                  style={{
                    marginLeft: 10,
                    backgroundImage: `url(${bycate01})`,
                    height: 295
                  }}
                >
                  <div className="info-post">
                    <Text
                      strong
                      className="title-post"
                      style={{ fontSize: 22 }}
                    >
                      Lý Hoàng Nam lần đầu tiên dành được huy chương vàng quần
                      vợt tại SEA Game
                    </Text>
                    <Text className="title-post" style={{ fontSize: 15 }}>
                      <Icon type="clock-circle" style={{ color: 'white' }} />
                      &ensp; 06/12/2019
                      <span>&ensp;|&ensp;</span>
                      22:00
                    </Text>
                  </div>
                </div>
                <div
                  className="post"
                  style={{
                    marginLeft: 10,
                    marginTop: 10,
                    backgroundImage: `url(${bycate02})`,
                    height: 295
                  }}
                >
                  <div className="info-post">
                    <Text
                      strong
                      className="title-post"
                      style={{ fontSize: 22 }}
                    >
                      Nhứng cảm xúc của U22 Việt Nam khi hòa kịch tính U22 Thai
                      Lan
                    </Text>
                    <Text className="title-post" style={{ fontSize: 15 }}>
                      <Icon type="clock-circle" style={{ color: 'white' }} />
                      &ensp; 06/12/2019
                      <span>&ensp;|&ensp;</span>
                      22:00
                    </Text>
                  </div>
                </div>
              </Col>
              <Col span={24}>
                <SecondListByCate />
              </Col>
            </Row>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
export default OutstandingListByCate;
