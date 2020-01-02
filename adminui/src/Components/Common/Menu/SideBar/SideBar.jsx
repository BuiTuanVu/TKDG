import React from 'react';
import './SideBar.css';
import 'antd/dist/antd.css';
import { Icon, Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Sider } = Layout;
const { SubMenu } = Menu;

class SideBar extends React.Component {
	render() {
		return (
			<Sider width={220} style={{ background: '#fff' }}>
				<div className="logo">
					<img
						sizes="50"
						alt="alt"
						className="avatar-admin"
						src="https://cdn4.iconfinder.com/data/icons/business-color-4/512/businessman-512.png"
					/>
					<span className="name-admin">Member Admin</span>
				</div>
				<Menu
					theme="dark"
					mode="inline"
					defaultSelectedKeys={[ '1' ]}
					style={{ height: '100%', borderRight: 0 }}
				>
					<Menu.Item key="1">
						<Link to="/admin/view-dashBoard">
							<Icon type="home" />
							Trang chủ
						</Link>
					</Menu.Item>
					<SubMenu
						key="sub1"
						title={
							<span>
								<Icon type="user" />
								Quản lý bài viết
							</span>
						}
					>
						<Menu.Item key="2">
							<Link to="/admin/view-list-user">Xem danh sách bài viết</Link>
						</Menu.Item>
					</SubMenu>

					<Menu.Item key="3">
						<Link to="/admin/skills">
							<Icon type="tags" />
							Danh sách kỹ năng
						</Link>
					</Menu.Item>

					<SubMenu
						key="4"
						title={
							<span>
								<Icon type="profile" />
								Quản lý hợp đồng
							</span>
						}
					>
						<Menu.Item key="5">
							<Link to="/admin/contract" />Danh sách hợp đồng
						</Menu.Item>
					</SubMenu>
					<SubMenu
						key="7"
						title={
							<span>
								<Icon type="notification" />
								Quản lý khiếu nại
							</span>
						}
					>
						<Menu.Item key="8">
							<Link to="/admin/complaint" />Danh sách khiếu nại
						</Menu.Item>
					</SubMenu>
					<Menu.Item key="9">
						<Link to="/admin/statistic-revenue">
							<Icon type="fund" />
							Thống kê doanh thu
						</Link>
					</Menu.Item>
				</Menu>
			</Sider>
		);
	}
}

const mapStateToProps = (state) => ({
	isLogin: state.LoginReducer.isLogin,
	username: state.LoginReducer.username
});
export default SideBar;
