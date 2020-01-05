import React from 'react';
import 'antd/dist/antd.css';
import './TopPostsByCate.css';
import { Link } from 'react-router-dom';
import { Row, Col, List, Typography, Icon, Button, Tabs, Tag } from 'antd';
import { connect } from 'react-redux';

const { Text } = Typography;
const { TabPane } = Tabs;

class TopPostsByCate extends React.Component {
	render() {
		const { postsData } = this.props;
		const data = postsData.filter((item) => item.vip !== 1).sort((a, b) => {
			return b.id - a.id;
		});
		const first = data[0];
		const secondGroup = data.slice(1, 5);
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
						<Text strong style={{ color: '#F5766D', fontSize: 20, marginBottom: 5 }}>
							Tin mới
						</Text>
						<div className="outstd-cate">
							{' '}
							<Link id="stt" to="#" className="outstd-cate__item">
								Tất cả
							</Link>
							<span>&ensp;|&ensp;</span>
							<Link to="#" className="outstd-cate__item">
								Xã hội
							</Link>
							<span>&ensp;|&ensp;</span>
							<Link to="#" className="outstd-cate__item">
								SEA Games 30
							</Link>
							<span>&ensp;|&ensp;</span>
							<Link to="#" className="outstd-cate__item">
								Đời sống
							</Link>
							<span>&ensp;|&ensp;</span>
							<Link to="#" className="outstd-cate__item">
								Giải trí
							</Link>
						</div>
					</div>
				</Col>

				<Col span={12} style={{ marginTop: 10 }}>
					<Link to={`/bycate/detail?post=${first.id}`}>
						<img src={first.img} style={{ objectFit: 'fill', width: '100%' }} alt="Bài viết đáng chú ý" />
						<div className="info-post-out">
							<Text strong style={{ fontSize: 20 }}>
								{first.title}
							</Text>
							<Text style={{ fontSize: 15 }}>
								<Icon type="clock-circle" />
								&ensp; {first.date} | <span style={{ color: 'red' }}>{first.cate.toUpperCase()}</span>
							</Text>

							<Text style={{ fontSize: 18, marginTop: 10 }}>{first.des}</Text>
						</div>
						<Button
							className="btn-see-more"
							style={{
								marginTop: 20,
								backgroundColor: '#F5766D',
								color: 'white',
								fontSize: 16
							}}
						>
							Đọc tiếp <Icon type="double-right" />
						</Button>
					</Link>
				</Col>
				{/*  */}
				<Col span={12}>
					<List
						itemLayout="vertical"
						dataSource={secondGroup}
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
													<Text strong style={{ fontSize: 18 }}>
														{item.title}
													</Text>
													<Text style={{ fontSize: 13 }}>
														<Icon type="clock-circle" />
														&ensp; {item.date} |{' '}
														<span style={{ color: 'red' }}>{item.cate.toUpperCase()}</span>
													</Text>
												</div>
											</Col>
										</Row>
									</div>
								</Link>
							</List.Item>
						)}
					/>
				</Col>
			</Row>
		);
	}
}

const mapStateToProps = (state) => ({
	postsData: state.PostReducer.postsData
});

export default connect(mapStateToProps, null)(TopPostsByCate);
