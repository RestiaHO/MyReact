import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../css/HeaderTop.css';
import 'antd/dist/antd.css';
import store from '../store/index';
import { Row, Col, Button, AutoComplete } from 'antd';

export default class HeaderTop extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: store.getState().list,
			shopItem: store.getState().shopItem,
			prices: 0,
			num: 0
		};
		store.subscribe(() => {
			this.setState({
				data: store.getState().list,
				shopItem: store.getState().shopItem
			});
		});
	}

	componentDidMount() {
		var url = 'http://192.168.1.149:1551/getItem';
		axios.get(url, {}).then(function(response) {
			var newData = [];
			response.data.forEach((item) => {
				newData.push(item.name);
			});
			var action = {
				type: 'list',
				value: newData
			};
			store.dispatch(action);
		});
	}

	onSelect = (value) => {
		var url = 'http://192.168.1.149:1551/getItem2';
		axios
			.post(url, {
				name: value
			})
			.then(function(response) {
				var list = response.data;
				var action = {
					type: 'data',
					value: list
				};
				console.log(response);
				store.dispatch(action);
			});
	};

	onChange = (value) => {
		if (value) {
			var url1 = 'http://192.168.1.149:1551/inputItem';

			axios
				.post(url1, {
					value: value
				})
				.then(function(response) {
					var newData = [];
					response.data.forEach((item) => {
						newData.push(item.name);
					});
					var action = {
						type: 'list',
						value: newData
					};
					store.dispatch(action);
				});
		} else {
			var url2 = 'http://192.168.1.149:1551/getItem';
			axios.get(url2, {}).then(function(response) {
				var list = response.data;
				var action = {
					type: 'data',
					value: list
				};
				console.log(response);
				store.dispatch(action);
			});
		}
	};
	buttonOnClick = () => {
		// console.log(this.state.shopItem);
		// let list = this.state.shopItem;
		// let prices = 0;
		// let num = 0;
		// list.forEach((item) => {
		// 	prices += item.one_price * item.count;
		// 	num += item.count;
		// });
		// this.setState({ prices: prices, num: num });
	};

	render() {
		return (
			<div className="HeaderTop">
				<div>
					<Row type="flex" className="headerRow">
						<Col span={3}>
							<Link to="/">
								<div className="headerCol1">
									<img
										src="https://www.wigglestatic.com/images/ui/wiggle-logo/desktop-wiggle_master_rgb_logo.svg"
										alt=""
										className="logoLeft"
									/>
								</div>
							</Link>
						</Col>
						<Col span={9}>
							<AutoComplete
								dataSource={this.state.data}
								style={{ width: 510, height: 30 }}
								onSelect={this.onSelect}
								onChange={this.onChange}
								placeholder="搜索"
								className="headerInput"
							/>

							{/* <Search
								placeholder="搜索"
								onSearch={(value) => console.log(value)}
								onChange={this.onChange}
								onPressEnter={this.onPressEnter}
								size="large"
								className="headerInput"
							/> */}
						</Col>
						<Col span={6} offset={6}>
							<ul className="headerUl">
								<li>
									<a href="https://www.wiggle.cn">您的账户</a>
								</li>
								<li>
									<a href="https://www.wiggle.cn">愿望清单</a>
								</li>
								<li>
									<Link to="/shop">
										<Button type="primary" size="default" onClick={this.buttonOnClick}>
											￥{` ${store.getState().prices} (${store.getState().num})`}
										</Button>
									</Link>
								</li>
							</ul>
						</Col>
					</Row>
				</div>
			</div>
		);
	}
}
