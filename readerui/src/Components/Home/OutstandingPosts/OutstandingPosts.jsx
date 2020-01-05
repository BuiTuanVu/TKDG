import React from 'react';
import { Row, Col } from 'antd';
import './OutstandingPosts.css';
import 'antd/dist/antd.css';

import { connect } from 'react-redux';
import { Typography, Icon } from 'antd';
import { Link } from 'react-router-dom';
const { Text } = Typography;

class OutstandingPosts extends React.Component {
	render() {
		const { postsData } = this.props;
		const data = postsData.filter((item) => item.vip === 1).sort(function(a, b) {
			return b.id - a.id;
		});

		return (
			<Row style={{ marginTop: 20, margin: '10px 0px' }}>
				{/* Left Outstanding Post */}
				<Col
					span={16}
					className="post"
					style={{
						height: 490
					}}
				>
					<Link to={`/bycate/detail?post=${data[0].id}`}>
						<img
							src={data[0].img}
							alt=""
							style={{
								objectPosition: 'center center',
								objectFit: 'fill',
								width: '100%',
								height: 490
							}}
						/>
						<div className="info-post">
							<Text strong className="title-post" style={{ fontSize: 25 }}>
								{data[0].title}
							</Text>
							<Text className="title-post" style={{ fontSize: 15 }}>
								<Icon type="clock-circle" style={{ color: 'white' }} />
								&ensp; {data[0].date} |{' '}
								<span style={{ color: 'rgb(228, 216, 47)' }}>{data[0].cate.toUpperCase()}</span>
							</Text>
						</div>
					</Link>
				</Col>

				{/* Two Right  Outstanding Post */}
				<Col span={8}>
					<Link to={`/bycate/detail?post=${data[1].id}`}>
						<div
							className="post"
							style={{
								marginLeft: 10,
								height: 240
							}}
						>
							<img
								src={data[1].img}
								alt=""
								style={{
									objectPosition: 'center center',
									objectFit: 'fill',
									width: '100%',
									height: 240
								}}
							/>
							<div className="info-post">
								<Text strong className="title-post" style={{ fontSize: 20 }}>
									{data[1].title}
								</Text>
								<Text className="title-post" style={{ fontSize: 15 }}>
									<Icon type="clock-circle" style={{ color: 'white' }} />
									&ensp; {data[1].date} |{' '}
									<span style={{ color: 'rgb(228, 216, 47)' }}>{data[1].cate.toUpperCase()}</span>
								</Text>
							</div>
						</div>
					</Link>
					<Link to={`/bycate/detail?post=${data[2].id}`}>
						<div
							className="post"
							style={{
								marginLeft: 10,
								marginTop: 10,
								height: 240
							}}
						>
							{' '}
							<img
								src={data[2].img}
								alt=""
								style={{
									objectPosition: 'center center',
									objectFit: 'fill',
									width: '100%',
									height: 240
								}}
							/>
							<div className="info-post">
								<Text strong className="title-post" style={{ fontSize: 20 }}>
									{data[2].title}
								</Text>
								<Text className="title-post" style={{ fontSize: 15 }}>
									<Icon type="clock-circle" style={{ color: 'white' }} />
									&ensp; {data[2].date} |{' '}
									<span style={{ color: 'rgb(228, 216, 47)' }}>{data[2].cate.toUpperCase()}</span>
								</Text>
							</div>
						</div>
					</Link>
				</Col>
			</Row>
		);
	}
}

const mapStateToProps = (state) => ({
	postsData: state.PostReducer.postsData
});
export default connect(mapStateToProps, null)(OutstandingPosts);
