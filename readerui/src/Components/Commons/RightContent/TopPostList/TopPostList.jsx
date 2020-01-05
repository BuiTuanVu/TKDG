import React, { Component } from 'react';
import queryString from 'query-string';
import './TopPostList.css';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { Row, Col, Tabs, List, Typography, Icon } from 'antd';
import rightside from '../../../../Assets/rightside01.png';
import { Link, withRouter } from 'react-router-dom';
const { TabPane } = Tabs;
const { Text } = Typography;

class TopPostList extends Component {
	render() {
		const data = this.props.dataPost;
		const dataNewest = data
			.filter((item) => item.vip !== 1)
			.sort(function(a, b) {
				return b.id - a.id;
			})
			.slice(0, 5);
		const dataViewest = data
			.sort(function(a, b) {
				return b.view - a.view;
			})
			.slice(0, 5);
		return (
			<div>
				<Tabs defaultActiveKey="1" style={{ marginTop: 17, marginLeft: 10 }}>
					<TabPane tab="Đọc nhiều nhất" key="1">
						<List
							itemLayout="vertical"
							dataSource={dataViewest}
							renderItem={(item) => (
								<List.Item>
									<Link to={`/bycate/detail?post=${item.id}`}>
										<div className="side-post">
											<Row gutter={10}>
												<Col span={8}>
													{' '}
													<img
														src={item.img}
														className="img-side-post"
														height={90}
														style={{ objectFit: 'fill', width: '100%' }}
													/>
												</Col>
												<Col span={16}>
													<div className="info-side-post">
														<Text strong style={{ fontSize: 17 }}>
															{item.title}
														</Text>
														<Text style={{ fontSize: 13 }}>
															<Icon type="clock-circle" />
															&ensp;{item.date} |{' '}
															<span style={{ color: 'red' }}>
																{item.cate.toUpperCase()}
															</span>
														</Text>
													</div>
												</Col>
											</Row>
										</div>
									</Link>
								</List.Item>
							)}
						/>
					</TabPane>
					<TabPane tab="Nhiều nhận xét" key="2">
						<List
							itemLayout="vertical"
							dataSource={dataNewest}
							renderItem={(item) => (
								<List.Item>
									<Link to={`/bycate/detail?post=${item.id}`}>
										<div className="side-post">
											<Row gutter={10}>
												<Col span={8}>
													{' '}
													<img
														src={item.img}
														className="img-side-post"
														height={100}
														style={{ objectFit: 'fill', width: '100%' }}
													/>
												</Col>
												<Col span={16}>
													<div className="info-side-post">
														<Text strong style={{ fontSize: 17 }}>
															{item.title}
														</Text>
														<Text style={{ fontSize: 13 }}>
															<Icon type="clock-circle" />
															&ensp; {item.date} |{' '}
															<span style={{ color: 'red' }}>
																{item.cate.toUpperCase()}
															</span>
														</Text>
													</div>
												</Col>
											</Row>
										</div>
									</Link>
								</List.Item>
							)}
						/>
					</TabPane>
				</Tabs>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		dataPost: state.PostReducer.postsData,
		isLogin: state.LoginReducer.isLogin
	};
};
export default withRouter(connect(mapStateToProps)(TopPostList));
