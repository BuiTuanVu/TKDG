import React, { Component } from 'react';
import './ListPost.css';
import 'antd/dist/antd.css';
import { List, Card, Typography, Tag, Select, Button } from 'antd';

const { Text, Title } = Typography;
const { Meta } = Card;
const { Option } = Select;

class ListPost extends Component {
  render() {
    const { data, tit } = this.props;
    return (
      <div>
        {' '}
        <Typography>
          <div
            style={{
              marginBottom: 15,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          >
            <Title level={4}>{tit}</Title>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}
            >
              <Select
                showSearch
                style={{ width: 200, margin: '0px 15px' }}
                placeholder="Chọn cách sắp xếp"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value="jack">Mới nhất</Option>
                <Option value="lucy">Cũ nhất</Option>
              </Select>
              <Select
                showSearch
                style={{ width: 200, marginRight: '15px' }}
                placeholder="Chọn khoảng thời gian"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value="7">Cách 7 ngày</Option>
                <Option value="30">Cách 30 ngày</Option>
                <Option value="90">Cách 90 ngày</Option>
              </Select>
              <Button icon="plus" type="primary">
                Tạo bài viết
              </Button>
            </div>
          </div>
          <List
            grid={{ gutter: 30, column: 4 }}
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <Card
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: 400,
                    boxShadow: 'hsla(189, 14%, 30%, 0.35) 0px 1px 6px 0px'
                  }}
                  hoverable
                  cover={<img alt={item.title} src={item.img} />}
                >
                  <div>
                    <Text style={{ fontSize: 18 }} strong>
                      {item.title}
                    </Text>
                  </div>
                  <div style={{ fontSize: 15, marginTop: 5 }}>
                    <Text>{item.des}</Text>
                  </div>
                  <div style={{ marginTop: 10 }}>
                    <Text>
                      <span style={{ color: 'orange' }}>{item.cate} </span>|{' '}
                      {item.date}
                    </Text>
                  </div>
                  <div style={{ position: 'absolute', top: 5, left: 5 }}>
                    {' '}
                    {item.status === 1 ? (
                      <Tag color="#87d068">Đã đăng</Tag>
                    ) : item.status === -1 ? (
                      <Tag color="#f50">Bị từ chối</Tag>
                    ) : (
                      <Tag color="#108ee9">Đang chờ</Tag>
                    )}
                  </div>
                </Card>
              </List.Item>
            )}
          />
        </Typography>
      </div>
    );
  }
}

export default ListPost;
