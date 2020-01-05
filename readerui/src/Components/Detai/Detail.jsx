import React, { Component } from 'react';
import 'antd/dist/antd.css';

import { Link, withRouter } from 'react-router-dom';
import { Typography, Button, Icon, Breadcrumb, Tag } from 'antd';
import queryString from 'query-string';
import im01 from '../../Assets/detail01.png';
import im02 from '../../Assets/detail02.png';
import Comment from './Comment/Comment';
import CommentForm from './Comment/Comment';
import RelatedPostList from './RelatedPostList/RelatedPostList';
import { connect } from 'react-redux';
const { Text } = Typography;

class Detail extends Component {
	state = { id: 0, recPost: {} };

	render() {
		const values = queryString.parse(this.props.location.search);
		const { postsData } = this.props;
		console.log('date', postsData);
		const id = values.post;

		const recPost = postsData.filter((item) => item.id === Number(id))[0];

		const dataTag = [ 'Lý Hoàng Nam', 'SEA Games 30', 'HCV', 'Thể thao Việt Nam' ];
		return (
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<Breadcrumb style={{ margin: '20px 0px' }}>
					<Breadcrumb.Item>
						{' '}
						<Link to="/home">
							<Icon type="home" />&ensp;Trang chủ
						</Link>
					</Breadcrumb.Item>
					<Breadcrumb.Item>
						<Link to="/bycate">Thể thao</Link>
					</Breadcrumb.Item>
					<Breadcrumb.Item>{recPost.title}</Breadcrumb.Item>
				</Breadcrumb>

				<div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
					<Text strong style={{ fontSize: 20, color: 'black' }}>
						{recPost.title}
					</Text>

					<Text style={{ margin: '20px 0px' }}>
						<span style={{ fontWeight: 500, color: 'black' }}>{recPost.writer}</span>
						&ensp;đăng lúc <span style={{ fontWeight: 500, color: 'black' }}>{recPost.date}</span>
						&nbsp;-&nbsp;
						<span style={{ fontWeight: 'bold', color: 'orange' }}>{recPost.cate}</span>
					</Text>
					<Text style={{ fontSize: 16, color: 'black', marginBottom: 10 }} strong>
						{recPost.des}
					</Text>
					<div style={{ width: '100%' }}>{recPost.content}</div>

					<div
						style={{
							margin: '20px 0px',
							display: 'flex',
							flexDirection: 'row'
						}}
					>
						<Button
							type="default"
							style={{
								backgroundColor: 'black',
								color: 'white',
								border: 'none'
							}}
						>
							<Icon type="tags" />&nbsp;Từ khóa:
						</Button>
						<div>
							{dataTag.map((item) => (
								<Tag
									className="tag"
									style={{
										fontSize: 16,
										margin: 5,
										height: '25px',
										lineHeight: '25px'
									}}
								>
									<Link to="#" className="tag">
										{item}
									</Link>
								</Tag>
							))}
						</div>
					</div>
					<CommentForm />
				</div>
				<RelatedPostList />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	postsData: state.PostReducer.postsData
});
export default connect(mapStateToProps, null)(withRouter(Detail));
