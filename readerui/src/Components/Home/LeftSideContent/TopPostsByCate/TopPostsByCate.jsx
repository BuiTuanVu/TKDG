import React from 'react';
import 'antd/dist/antd.css';
import './TopPostsByCate.css';
import { Link } from 'react-router-dom';
import { Row, Col, List, Typography, Icon, Button, Tabs } from 'antd';

import imgLeftTopCate from '../../../../Assets/01.png';
import rightside02 from '../../../../Assets/rightside02.png';

const { Text } = Typography;
const { TabPane } = Tabs;

class TopPostsByCate extends React.Component {
  render() {
    const data = [
      'Đội tuyển U22 Việt Nam thắng thuyết phục U22 Thai Lan',
      'Đào tạo nguồn nhân lực chất lượng cao là cấp thiết',
      'Ông chủ Uniqlo coi Việt Nam là thị trường tiềm năng',
      'Miền Bắc xuất hiện đợt không khí lạnh'
    ];
    return (
      <Row gutter={20}>
        <Col span={24}>
          <div
            style={{
              width: '100%',
              borderLeft: '2px solid #F5766D',
              borderBottom: '1px solid #e0e0e0',
              padding: '0px 0px 0px 10px',
              margin: '35px 20px 10px 0px',
              display: 'flex',
              flexDirection: 'row',
              position: 'relative'
            }}
          >
            <Text strong style={{ color: '#F5766D', fontSize: 20 }}>
              Tin tức đáng chú ý
            </Text>
            <div className="outstd-cate">
              {' '}
              <Link to="#" className="outstd-cate__item">
                Tất cả
              </Link>
              <Link to="#" className="outstd-cate__item">
                Xã hội
              </Link>
              <Link to="#" className="outstd-cate__item">
                SEA Games 30
              </Link>
              <Link to="#" className="outstd-cate__item">
                Đời sống
              </Link>
              <Link to="#" className="outstd-cate__item">
                Giải trí
              </Link>
            </div>
          </div>
        </Col>

        <Col span={12} style={{ marginTop: 10 }}>
          <img
            src={imgLeftTopCate}
            style={{ objectFit: 'fill', width: '100%' }}
            alt="Bài viết đáng chú ý"
          />
          <div className="info-post-out">
            <Text strong style={{ fontSize: 20 }}>
              Tuyển tập lời chúc 20/11 hay và ý nghĩa nhất dành tặng cho thầy cô
              giáo
            </Text>
            <Text style={{ fontSize: 15 }}>
              <Icon type="clock-circle" />
              &ensp; 06/12/2019
              <span>&ensp;|&ensp;</span>
              22:00
            </Text>

            <Text style={{ fontSize: 18, marginTop: 10 }}>
              Những lời chúc 20/11 là món quà tinh thần vô giá mà bạn có thể gửi
              tới những người "lái đò" tôn kính.
            </Text>
          </div>
          <Button
            style={{
              marginTop: 20,
              backgroundColor: '#F5766D',
              color: 'white',
              fontSize: 16
            }}
          >
            Đọc tiếp >>
          </Button>
        </Col>
        {/*  */}
        <Col span={12}>
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
                        src={rightside02}
                        className="img-side-post"
                        height={100}
                        style={{ objectFit: 'fill', width: '100%' }}
                      ></img>
                    </Col>
                    <Col span={16}>
                      <div className="info-side-post">
                        <Text strong style={{ fontSize: 18 }}>
                          {item}
                        </Text>
                        <Text style={{ fontSize: 14 }}>
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
        </Col>
      </Row>
    );
  }
}
export default TopPostsByCate;
