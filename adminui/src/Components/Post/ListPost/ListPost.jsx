import React, { Component } from 'react';
import './ListPost.css';
import 'antd/dist/antd.css';
import { List, Card, Typography, Tag, Select, Button, Icon, Form, Input, Row, Col, Modal } from 'antd';

import { connect } from 'react-redux';
import TextArea from 'antd/lib/input/TextArea';
import { Link } from 'react-router-dom';
const { Text, Title } = Typography;
const { Meta } = Card;
const { Option } = Select;

class ListPost extends Component {
	state = {
		visibleAccept: false,
		visibleReject: false,
		isOutStd: false,
		visiblePreview: false
	};
	onChange = (value) => {
		value === 'special' ? this.setState({ isOutStd: true }) : this.setState({ isOutStd: false });
	};
	showModalPreview = () => {
		this.setState({
			visiblePreview: true
		});
	};
	handleCancelPreview = () => {
		this.setState({
			visiblePreview: false
		});
	};

	showModalAccept = () => {
		this.setState({
			visibleAccept: true
		});
	};

	showModalReject = () => {
		this.setState({
			visibleReject: true
		});
	};
	handleOkAccept = (e) => {
		console.log(e);
		this.setState({
			visibleAccept: false
		});
	};
	handleOkReject = (e) => {
		console.log(e);
		this.setState({
			visibleReject: false
		});
	};
	handleCancelAccept = (e) => {
		console.log(e);
		this.setState({
			visibleAccept: false
		});
	};
	handleCancelReject = (e) => {
		console.log(e);
		this.setState({
			visibleReject: false
		});
	};
	render() {
		const { data, tit, username, status } = this.props;
		const { isOutStd } = this.state;
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
								placeholder="Chọn chuyên mục"
								optionFilterProp="children"
								filterOption={(input, option) =>
									option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
							>
								<Option value="1">Đời sống</Option>
								<Option value="2">Xã hội</Option>

								<Option value="3">Thời sự trong nước</Option>
								<Option value="4">Thời sự quốc tế</Option>
								<Option value="5">Thể thao trong nước</Option>
								<Option value="6">Thể theo thế giới</Option>
								<Option value="7">Kinh tế</Option>
							</Select>
							<Select
								showSearch
								style={{ width: 200, margin: '0px 15px' }}
								placeholder="Chọn cách sắp xếp"
								optionFilterProp="children"
								filterOption={(input, option) =>
									option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
							>
								<Option value="new">Mới nhất</Option>
								<Option value="old">Cũ nhất</Option>
							</Select>
							<Button icon="plus" type="primary">
								<Link to="/admin/create-post" style={{ color: 'white' }}>
									{' '}
									Tạo bài viết
								</Link>
							</Button>
						</div>
					</div>
					<List
						grid={{ gutter: 30, column: 4 }}
						dataSource={data}
						renderItem={(item) => (
							<List.Item>
								{status === 0 ? (
									//Card for editor
									<Card
										style={{
											position: 'relative',
											display: 'flex',
											flexDirection: 'column',
											minHeight: 440,
											boxShadow: 'hsla(189, 14%, 30%, 0.35) 0px 1px 6px 0px'
										}}
										hoverable
										cover={
											<img
												style={{ width: '100%', height: 'auto', minHeight: 180 }}
												alt={item.title}
												src={item.img}
											/>
										}
									>
										{' '}
										<Tag style={{ position: 'absolute', top: 5, right: 0 }} color="geekblue">
											<Icon type="user" style={{ marginRight: 5 }} />
											{item.writer}
										</Tag>
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
												<span style={{ color: 'orange' }}>{item.cate} </span>| {item.date}
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
										{username === 'writer' ? (
											<div
												style={{
													position: 'absolute',
													bottom: 10,
													left: 15,
													right: 15,
													display: 'flex',
													flexDirection: 'row',
													justifyContent: 'space-between'
												}}
											>
												<Button icon="edit" type="primary">
													Sửa bài
												</Button>
												<Button icon="delete" type="danger">
													Gỡ bài
												</Button>
											</div>
										) : (
											<div
												style={{
													position: 'absolute',
													bottom: 10,
													left: 15,
													right: 15,
													display: 'flex',
													flexDirection: 'row',
													justifyContent: 'space-between'
												}}
											>
												<Button icon="close" type="danger" onClick={this.showModalReject}>
													Từ chối
												</Button>
												<Button icon="check" type="primary" onClick={this.showModalAccept}>
													Duyệt bài
												</Button>
											</div>
										)}
									</Card>
								) : (
									//Not editor
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
										<Tag style={{ position: 'absolute', top: 5, right: 0 }} color="geekblue">
											<Icon type="user" style={{ marginRight: 5 }} />
											{item.writer}
										</Tag>
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
												<span style={{ color: 'orange' }}>{item.cate} </span>| {item.date}
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
								)}
								<Modal
									style={{ top: 20 }}
									title="Đăng bài viết"
									visible={this.state.visibleAccept}
									onOk={this.handleOkAccept}
									onCancel={this.handleCancelAccept}
									okText="Đăng bài"
									cancelText="Hủy"
								>
									<Form layout="vertical">
										<Form.Item label="Tiêu đề bài viết">
											<Input defaultValue={item.title} />
										</Form.Item>
										<Form.Item label="Tóm tắt nội dung bài viết">
											<TextArea cols={2} defaultValue={item.des} />
										</Form.Item>

										<Form.Item label="Chuyên mục">
											<Select
												mode="multiple"
												style={{ width: '100%' }}
												placeholder="select one country"
												defaultValue={[ `${item.cate}` ]}
												optionLabelProp="label"
											/>
										</Form.Item>
										<Form.Item label="Nhãn tags">
											<Select
												mode="tags"
												style={{ width: '100%' }}
												defaultValue={[ `${item.cate}` ]}
												optionLabelProp="label"
											/>
										</Form.Item>
										<Row gutter={20}>
											<Col span={12}>
												<Form.Item label="Loại bài viết">
													<Select
														onChange={this.onChange}
														showSearch
														defaultValue="normal"
														style={{ width: 200 }}
														placeholder="Select a person"
														optionFilterProp="children"
														filterOption={(input, option) =>
															option.props.children
																.toLowerCase()
																.indexOf(input.toLowerCase()) >= 0}
													>
														<Option value="normal">Bài viết thường</Option>
														<Option value="special">Bài viết nổi bật</Option>
													</Select>
												</Form.Item>
											</Col>
											{isOutStd ? (
												<Col span={12}>
													<Form.Item label="Chọn vị trí">
														<Select
															showSearch
															defaultValue="one"
															style={{ width: 200 }}
															placeholder="Select a person"
															optionFilterProp="children"
															filterOption={(input, option) =>
																option.props.children
																	.toLowerCase()
																	.indexOf(input.toLowerCase()) >= 0}
														>
															<Option value="one">Vị trí 1</Option>
															<Option value="two">Vị trí 2</Option>
															<Option value="three">Vị trí 3</Option>
														</Select>
													</Form.Item>
												</Col>
											) : null}
										</Row>
									</Form>
								</Modal>
								<Modal
									style={{ top: 20 }}
									title="Từ chối bài viết"
									visible={this.state.visibleReject}
									onOk={this.handleOkReject}
									onCancel={this.handleCancelReject}
									okText="Gửi nhận xét"
									cancelText="Hủy"
								>
									<Form layout="vertical">
										<Form.Item label="Tiêu đề bài viết">
											<Input readOnly defaultValue={item.title} />
										</Form.Item>
										<Form.Item label="Tiêu đề bài viết">
											<Input readOnly defaultValue={item.title} />
										</Form.Item>
										<Row gutter={20}>
											<Col span={12}>
												<Form.Item label="Phóng viên">
													<Input readOnly defaultValue={item.writer} />
												</Form.Item>
											</Col>
											<Col span={12}>
												<Form.Item label="Thời gian tạo">
													<Input readOnly defaultValue={item.date} />
												</Form.Item>
											</Col>
										</Row>

										<Form.Item label="Lời nhận xét">
											<TextArea
												cols={2}
												autoFocus
												placeholder="Nhập lời nhận xét về bài viết"
												defaultValue={
													'Bài viết tiêu đề sai, chưa phản ánh đúng nội dung bài viết'
												}
											/>
										</Form.Item>
									</Form>
								</Modal>
								<Modal
									style={{ top: 20, minWidth: 700 }}
									title={
										<div>
											<span>Preview bài viết</span>
										</div>
									}
									visible={this.state.visiblePreview}
									onCancel={this.handleCancelPreview}
									footer={null}
								>
									<Title level={4}>{item.title}</Title>
									<p style={{ fontSize: '13px' }}>
										Viết bởi <span style={{ fontWeight: 'bold' }}>{item.writer}</span> |{' '}
										<span style={{ color: '#B2995F' }}>{item.cate}</span> | {item.date}
									</p>
									<p>{item.des}</p>
									<div style={{ width: 'auto' }}>{item.content}</div>
									<div style={{ marginTop: 20, paddingBottom: 30 }}>
										<span>
											<Icon type="tags" />&ensp;Từ khóa:&ensp;
										</span>
										<Tag style={{ fontSize: 15, fontWeight: 500 }}>
											<span>
												<a href="https://github.com/ant-design/ant-design/issues/1862">
													Bóng đá Việt Nam
												</a>
											</span>
										</Tag>
										<Tag style={{ fontSize: 15, fontWeight: 500 }}>
											<span>
												<a href="https://github.com/ant-design/ant-design/issues/1862">
													Thể thao
												</a>
											</span>
										</Tag>
									</div>
									<div
										style={{
											position: 'absolute',
											bottom: 10,
											right: 10,
											width: '50%',
											display: 'flex',
											flexDirection: 'row',
											justifyContent: 'flex-end'
										}}
									>
										<Button icon="close" type="danger" style={{ marginRight: 20 }}>
											Từ chối bài
										</Button>
										<Button icon="check" type="primary" style={{ marginRight: 20 }}>
											Duyệt bài
										</Button>
									</div>
								</Modal>
							</List.Item>
						)}
					/>
				</Typography>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	isLogin: state.LoginReducer.isLogin,
	username: state.LoginReducer.username
});
export default connect(mapStateToProps, null)(ListPost);
