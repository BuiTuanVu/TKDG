import React, { Component } from 'react';

import 'antd/dist/antd.css';

import { Row, Col, Tabs, List, Typography, Icon, Button } from 'antd';
import rightside from '../../../../Assets/rightside01.png';
const { TabPane } = Tabs;
const { Text } = Typography;

class MultiPostList extends Component {
  render() {
    const data = [
      {
        title:
          'Bé 14 tuổi phải điều trị tâm lý kéo dài vì nghiện YouTube trong thời gian dài',
        des:
          'Trưởng đoàn Nguyễn Tiến Cường là mội trong những người đi tiên phong trong phong trào bóng rổ chuyên nghiệp tại Việt Nam. '
      },
      {
        title:
          'Hành trình sau khi rời Apple của nhà thiết kế huyền thoại Jony Inve',
        des:
          'Nhà thiết kế Jony Inve - người từng được coi là huyền thoại của Apple đã có những chia sẻ mới nhất về hành trình của ông. '
      },
      {
        title:
          'Trưởng đoàn Nguyễn Tiến Cường tự hào về chiến thắng lịch sử của đội tuyển Bóng rổ Việt Nam tại Sea Game 30',
        des:
          'Là mội trong những người đi tiên phong trong phong trào bóng rổ chuyên nghiệp tại Việt Nam, trưởng đoàn Nguyễn Cường đã có những phát biểu khen ngợi đội tuyển Việt Nam. '
      }
    ];
    return (
      <div>
        <div
          style={{
            width: '100%',
            borderLeft: '2px solid #DD3535',
            borderBottom: '1px solid #e0e0e0',
            padding: '0px 0px 0px 10px',
            margin: '30px 20px 10px 0px',
            display: 'flex',
            flexDirection: 'row',
            position: 'relative'
          }}
        >
          <Text strong style={{ color: '#DD3535', fontSize: 20 }}>
            Tin tức tổng hợp
          </Text>
        </div>
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
                      height={180}
                      style={{ objectFit: 'fill', width: '100%' }}
                    ></img>
                  </Col>
                  <Col span={16}>
                    <div className="info-side-post">
                      <Text strong style={{ fontSize: 18 }}>
                        {item.title}
                      </Text>
                      <Text style={{ fontSize: 15 }}>
                        <Icon type="clock-circle" />
                        &ensp; 06/12/2019
                        <span>&ensp;|&ensp;</span>
                        22:00
                      </Text>
                      <Text style={{ marginTop: 10, fontSize: 16 }}>
                        {item.des}
                      </Text>
                    </div>
                  </Col>
                </Row>
              </div>
            </List.Item>
          )}
        />
        <div
          style={{
            margin: '40px 0px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <Button size="large" style={{ fontSize: 18, margin: '0px auto' }}>
            Xem thêm&ensp;
            <Icon type="caret-down" />
          </Button>
        </div>
      </div>
    );
  }
}
export default MultiPostList;
