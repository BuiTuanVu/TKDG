import React from 'react';
import { Row, Col } from 'antd';
import './OutstandingPosts.css';
import 'antd/dist/antd.css';

import imgOut01 from '../../../Assets/out1.png';
import outright01 from '../../../Assets/right-outstd-one.png';
import outright02 from '../../../Assets/right-outstd-two.png';
import { Typography, Icon } from 'antd';
const { Text } = Typography;

class OutstandingPosts extends React.Component {
  render() {
    return (
      <Row style={{ marginTop: 20, margin: '10px 0px' }}>
        {/* Left Outstanding Post */}
        <Col
          span={16}
          className="post"
          style={{
            backgroundImage: `url(${imgOut01})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            height: 500
          }}
        >
          <div className="info-post">
            <Text strong className="title-post" style={{ fontSize: 25 }}>
              Thủ môn Thai Lan ấm ức vì quyết định cho Việt Nam thực hiện lại
              quả phạt đền trong trận gặp Việt Nam tại SEA Game 30
            </Text>
            <Text className="title-post" style={{ fontSize: 15 }}>
              <Icon type="clock-circle" style={{ color: 'white' }} />
              &ensp; 06/12/2019
              <span>&ensp;|&ensp;</span>
              22:00
            </Text>
          </div>
        </Col>

        {/* Two Right  Outstanding Post */}
        <Col span={8}>
          <div
            className="post"
            style={{
              marginLeft: 10,
              backgroundImage: `url(${outright01})`,
              height: 245
            }}
          >
            <div className="info-post">
              <Text strong className="title-post" style={{ fontSize: 20 }}>
                Văn Hậu tập thêm mặc dù HLV Park cho nghỉ ngơi thả lỏng
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
              backgroundImage: `url(${outright02})`,
              height: 245
            }}
          >
            <div className="info-post">
              <Text strong className="title-post" style={{ fontSize: 20 }}>
                SEA GAME 30: Trương Thị Phương giành HCV tại bộ môn canoeing
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
      </Row>
    );
  }
}
export default OutstandingPosts;
