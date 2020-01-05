import React, { Component } from 'react';

import 'antd/dist/antd.css';

import { Link } from 'react-router-dom';
import { Row, Col, Tabs, List, Typography, Icon, Button } from 'antd';
import filter01 from '../../../Assets/filer01.png';
import bycate01 from '../../../Assets/bycate01.png';
import bycate02 from '../../../Assets/bycate02.png';
import SecondListByCate from '../SecondListByCate/SecondListByCate';

const { Text } = Typography;
class ChildList extends Component {
	state = { page: 1 };
	render() {
		const postsData = this.props.data;
		const outStd = postsData.filter((item) => item.vip === 1).sort((a, b) => {
			return b.id * b.view - a.id * a.view;
		});
		const data02 = postsData
			.filter((item) => item.vip !== 1)
			.sort((a, b) => {
				return b.id - a.id;
			})
			.slice(0, 5 * this.state.page);
		return (
			<div style={{ width: '100%' }}>
				<Row>
					<Col span={12} className="post">
						<img
							src={outStd[0].img}
							alt=""
							style={{
								objectPosition: 'center center',
								objectFit: 'fill',
								width: '100%',
								height: 500
							}}
						/>
						<div className="info-post">
							<Link to={`/bycate/detail?post=${outStd[0].id}`}>
								<Text strong className="title-post" style={{ fontSize: 25 }}>
									{outStd[0].title}
								</Text>
								<Text className="title-post" style={{ fontSize: 15 }}>
									<Icon type="clock-circle" style={{ color: 'white' }} />
									&ensp; {outStd[0].date} |{' '}
									<span style={{ color: 'red' }}>{outStd[0].cate.toUpperCase()}</span>
								</Text>
							</Link>
						</div>
					</Col>

					<Col span={12}>
						<Link to={`/bycate/detail?post=${outStd[1].id}`}>
							<div
								className="post"
								style={{
									marginLeft: 10,
									backgroundImage: `url(${outStd[1].img})`,
									backgroundPosition: 'center center',
									backgroundSize: 'cover',

									height: 245
								}}
							>
								<div className="info-post">
									<Text strong className="title-post" style={{ fontSize: 18 }}>
										{outStd[1].title}
									</Text>
									<Text className="title-post" style={{ fontSize: 15 }}>
										<Icon type="clock-circle" style={{ color: 'white' }} />
										&ensp; {outStd[1].date} |{' '}
										<span style={{ color: 'red' }}>{outStd[1].cate.toUpperCase()}</span>
									</Text>
								</div>
							</div>
						</Link>
						<Link to={`/bycate/detail?post=${outStd[2].id}`}>
							<div
								className="post"
								style={{
									marginLeft: 10,
									marginTop: 10,
									backgroundImage: `url(${outStd[2].img})`,
									backgroundPosition: 'center center',
									backgroundSize: 'cover',
									height: 245
								}}
							>
								<div className="info-post">
									<Text strong className="title-post" style={{ fontSize: 18 }}>
										{outStd[2].title}
									</Text>
									<Text className="title-post" style={{ fontSize: 15 }}>
										<Icon type="clock-circle" style={{ color: 'white' }} />
										&ensp; {outStd[2].date} |{' '}
										<span style={{ color: 'red' }}>{outStd[2].cate.toUpperCase()}</span>
									</Text>
								</div>
							</div>
						</Link>
					</Col>
					<Col span={24}>
						<SecondListByCate data={data02} />
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
								className="btn-see-more"
								style={{ fontSize: 20, margin: '0px auto' }}
								onClick={(e) => this.setState({ page: this.state.page + 1 })}
							>
								Bấm xem thêm&ensp;
								<Icon type="caret-down" />
							</Button>
						</div>
					</Col>
				</Row>
			</div>
		);
	}
}

export default ChildList;
