import React, { Component } from 'react';
import './Login.css';
import 'antd/dist/antd.css';

import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { login } from './LoginAction';

class NormalLoginForm extends React.Component {
	constructor() {
		super();
		this.username = '';
		this.password = '';
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
			}
		});
		this.props.login(this.username);
	};

	render() {
		const { getFieldDecorator } = this.props.form;

		const st = this.props;
		if (st.isLogin) {
			return <Redirect to="/admin/" />;
		}
		return (
			<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 50 }}>
				<Form onSubmit={this.handleSubmit} className="login-form">
					<h2 style={{ textAlign: 'center', marginBottom: 20 }}>Đăng nhập trang Admin</h2>
					<Form.Item>
						{getFieldDecorator('username', {
							rules: [ { required: true, message: 'Please input your username!' } ]
						})(
							<Input
								size="large"
								prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
								placeholder="Username"
								onChange={(event) => {
									this.username = event.target.value;
								}}
								name="username"
								autoFocus
							/>
						)}
					</Form.Item>
					<Form.Item>
						{getFieldDecorator('password', {
							rules: [ { required: true, message: 'Please input your Password!' } ]
						})(
							<Input
								size="large"
								prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
								type="password"
								placeholder="Password"
								name="password"
								onChange={(event) => {
									this.password = event.target.value;
								}}
							/>
						)}
					</Form.Item>
					<Form.Item>
						{getFieldDecorator('remember', {
							valuePropName: 'checked',
							initialValue: true
						})(<Checkbox>Nhớ tài khoản</Checkbox>)}
						<a className="login-form-forgot" href="">
							Quên mật khẩu
						</a>
						<Button
							size="large"
							type="primary"
							htmlType="submit"
							className="form-button"
							onClick={(event) => {
								event.preventDefault();
								if (this.username !== '' && this.password !== '') {
									this.props.login(this.username);
								}

								this.setState({
									visible: false
								});
							}}
						>
							Đăng nhập
						</Button>
					</Form.Item>
				</Form>
			</div>
		);
	}
}

const Login = Form.create({ name: 'normal_login' })(NormalLoginForm);

const mapStateToProps = (state) => {
	return {
		user: state.LoginReducer.username,
		isLogin: state.LoginReducer.isLogin
	};
};

const mapDispatchToProps = (dispatch) => ({
	login: (username) => dispatch(login(username))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
