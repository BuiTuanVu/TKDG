import React, { Component } from 'react';

import 'antd/dist/antd.css';
import { Tabs, Typography } from 'antd';

import ChildList from './ChildList';
import { connect } from 'react-redux';

const { TabPane } = Tabs;
const { Text } = Typography;

class OutstandingListByCate extends Component {
	render() {
		const { postsData } = this.props;
		const data = postsData.filter((item) => item.cate === 'Thể thao');

		return (
			<div>
				<Tabs style={{ marginTop: 5, fontSize: '18px' }}>
					<TabPane tab="Thể thao" key="1" style={{ fontSize: '18px' }}>
						<ChildList data={data} />
					</TabPane>
					<TabPane tab="Thể thao Việt Nam" key="2" style={{ fontSize: '18px' }}>
						<ChildList data={data} />
					</TabPane>
					<TabPane tab="Thể thao quốc tế" key="3">
						<ChildList data={data} />
					</TabPane>
				</Tabs>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	postsData: state.PostReducer.postsData
});

export default connect(mapStateToProps)(OutstandingListByCate);
