import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
import store from '../store/index';
import New1 from '../UICompnents/new1';
import { Menu, Icon, Input, Button, Checkbox } from 'antd';
const { SubMenu } = Menu;

function onChange(e) {
	console.log(`checked = ${e.target.checked}`);
}

class NewMid extends Component {
	constructor(arg) {
		super(arg);
		this.state = {
			data: store.getState().data,
			title: '热售品'
		};

		store.subscribe(() => {
			this.setState({ data: store.getState().data });
		});

		// 用箭头函数不用绑定这个this指向
		// this.change1=this.change1.bind(this)
	}

	fs = () => {
		var url = 'http://192.168.1.149:1551/getItem';
		axios.get(url, {}).then(function(response) {
			var list = response.data;
			var action = {
				type: 'data',
				value: [ list[6], list[7], list[8], list[9], list[10], list[11] ]
			};
			store.dispatch(action);
		});
		this.setState({ title: '服饰' });
	};

	xl = () => {
		var url = 'http://192.168.1.149:1551/getItem';
		axios.get(url, {}).then(function(response) {
			var list = response.data;
			var action = {
				type: 'data',
				value: [ list[12], list[13], list[14], list[15], list[16], list[17] ]
			};
			store.dispatch(action);
		});
		this.setState({ title: '鞋类' });
	};
	hmj = () => {
		var url = 'http://192.168.1.149:1551/getItem';
		axios.get(url, {}).then(function(response) {
			var list = response.data;
			var action = {
				type: 'data',
				value: [ list[18], list[19] ]
			};
			store.dispatch(action);
		});
		this.setState({ title: '护目镜＆面罩' });
	};
	tkbh = () => {
		var url = 'http://192.168.1.149:1551/getItem';
		axios.get(url, {}).then(function(response) {
			var list = response.data;
			var action = {
				type: 'data',
				value: [ list[0], list[1], list[2], list[3], list[4], list[5] ]
			};
			store.dispatch(action);
		});
		this.setState({ title: '头盔＆保护' });
	};
	yy = () => {
		var url = 'http://192.168.1.149:1551/getItem';
		axios.get(url, {}).then(function(response) {
			var list = response.data;
			var action = {
				type: 'data',
				value: [ list[20], list[21], list[22], list[23] ]
			};
			store.dispatch(action);
		});
		this.setState({ title: '泳衣' });
	};
	componentDidMount() {
		var url = 'http://192.168.1.149:1551/getItem';
		axios.get(url, {}).then(function(response) {
			var action = {
				type: 'data',
				value: response.data
			};
			store.dispatch(action);
		});
	}

	componentWillUnmount=()=>{
        this.setState = (state,callback) => {
            return;
        }
    }

	render() {
		return (
			<div className="NewMid">
				<div className="New_left">
					<div>细化</div>
					<Menu style={{ width: 270 }} defaultOpenKeys={[ 'sub1', 'sub2', 'sub3' ]} mode="inline">
						<SubMenu
							key="sub1"
							title={
								<span>
									<span>价格范围</span>
								</span>
							}
						>
							<Menu.ItemGroup key="g1" title="最低" style={{ marginLeft: '20px' }}>
								<Menu.Item key="1">
									<Input prefix="￥" suffix="RMB" className="MenuInner" />
								</Menu.Item>
							</Menu.ItemGroup>
							<Menu.ItemGroup key="g2" title="最高" style={{ marginLeft: '20px' }}>
								<Menu.Item key="2">
									<Input prefix="￥" suffix="RMB" key="2" className="MenuInner" />
								</Menu.Item>
								<Menu.Item key="3">
									<Button type="primary" className="MenuButton" block>
										提交
									</Button>
								</Menu.Item>
								<Menu.Item key="4">
									<Button type="primary" className="MenuButton" block>
										重置
									</Button>
								</Menu.Item>
							</Menu.ItemGroup>
						</SubMenu>
						<SubMenu
							key="sub2"
							title={
								<span>
									<span>库存</span>
								</span>
							}
						>
							<Checkbox className="MenuInner" onChange={onChange} key="3">
								&nbsp;&nbsp;&nbsp;只有现货
							</Checkbox>
						</SubMenu>
						<SubMenu
							key="sub3"
							title={
								<span>
									<Icon type="setting" />
									<span>类别</span>
								</span>
							}
						>
							<Menu.ItemGroup key="g3" title="主页" style={{ marginLeft: '20px' }}>
								<Menu.Item key="5" onClick={this.fs}>
									服饰
								</Menu.Item>
								<Menu.Item key="6" onClick={this.xl}>
									鞋类
								</Menu.Item>
								<Menu.Item key="7" onClick={this.hmj}>
									防护镜＆面罩
								</Menu.Item>
								<Menu.Item key="8" onClick={this.tkbh}>
									头盔＆保护
								</Menu.Item>
								<Menu.Item key="9" onClick={this.yy}>
									泳装
								</Menu.Item>
							</Menu.ItemGroup>
						</SubMenu>
					</Menu>
				</div>
				<New1 data={this.state.data} title={this.state.title} />
			</div>
		);
	}
}

const Login = withRouter(NewMid);
export default Login;
