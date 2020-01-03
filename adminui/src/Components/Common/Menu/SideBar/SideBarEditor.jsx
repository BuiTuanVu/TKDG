import React from 'react';
import './SideBar.css';
import 'antd/dist/antd.css';
import { Icon, Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Sider } = Layout;
const { SubMenu } = Menu;

class SideBarEditor extends React.Component {
	render() {
		return (
			<Menu theme="dark" mode="inline" defaultSelectedKeys={[ '1' ]} style={{ height: '100%', borderRight: 0 }}>
				<Menu.Item key="1">
					<Link to="/admin/statistic-revenue">
						<Icon type="fund" />
						Trang chủ
					</Link>
				</Menu.Item>
				<Menu.Item key="2">
					<Link to="/admin/statistic-revenue">
						<Icon type="fund" />
						Bài viết chờ duyệt
					</Link>
				</Menu.Item>
				<Menu.Item key="3">
					<Link to="/admin/statistic-revenue">
						<Icon type="fund" />
						Lịch làm việc
					</Link>
				</Menu.Item>
				<Menu.Item key="4">
					<Link to="/admin/statistic-revenue">
						<Icon type="fund" />
						Chuyên mục phụ trách
					</Link>
				</Menu.Item>
				<Menu.Item key="5">
					<Link to="/admin/statistic-revenue">
						<Icon type="fund" />
						Cài đặt
					</Link>
				</Menu.Item>
			</Menu>
		);
	}
}
export default SideBarEditor;
