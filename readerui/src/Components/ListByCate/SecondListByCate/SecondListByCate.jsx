import React, { Component } from 'react';

import 'antd/dist/antd.css';
import bycate03 from '../../../Assets/bycate03.png';
import { Row, Col, Typography, List, Icon } from 'antd';

const { Text } = Typography;
class SecondListByCate extends Component {
  render() {
    const data = [
      {
        title:
          'Đoàn Việt Nam tụt xuống vị trí thứ 3 dù giành 7 HCV trong ngày 6/12',
        des:
          'Trưởng đoàn Nguyễn Tiến Cường là mội trong những người đi tiên phong trong phong trào bóng rổ chuyên nghiệp tại Việt Nam. '
      },
      {
        title:
          'Đoàn Việt Nam tụt xuống vị trí thứ 3 dù giành 7 HCV trong ngày 6/12',
        des:
          'Trong ngày 6/12, Đoàn Việt Nam giành được 7 HCV đến từ các môn quần vợt, bơi, đấu kiếm, canoeing và xe đạp qua đó giành được 38 HCV 41 HCB và 52 HCĐ, xếp thứ 3 BXH.'
      },
      {
        title:
          'Trưởng đoàn Nguyễn Tiến Cường tự hào về chiến thắng lịch sử của đội tuyển Bóng rổ Việt Nam tại Sea Game 30',
        des:
          'Là mội trong những người đi tiên phong trong phong trào bóng rổ chuyên nghiệp tại Việt Nam, trưởng đoàn Nguyễn Cường đã có những phát biểu khen ngợi đội tuyển Việt Nam. '
      },
      {
        title:
          'CĐV Thai lan không hài lòng vì thua Việt Nam trong trận đấu tại SEA Games 30',
        des:
          'CĐV Thai lan không hài lòng vì thua Việt Nam trong trận đấu tại SEA Games 30 ngày 06/12/2019 tại khuôn khổ vòng bán kết môn bóng đá nam U22'
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
          <Text strong style={{ color: '#DD3535', fontSize: 22 }}>
            Tin tức mới nhất
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
                      src={bycate03}
                      className="img-side-post"
                      height={160}
                      style={{ objectFit: 'fill', width: '100%' }}
                    ></img>
                  </Col>
                  <Col span={16}>
                    <div className="info-side-post">
                      <Text strong style={{ fontSize: 18 }}>
                        {item.title}
                      </Text>
                      <Text style={{ fontSize: 16 }}>
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
      </div>
    );
  }
}

export default SecondListByCate;
