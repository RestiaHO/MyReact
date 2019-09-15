import React, { Component } from 'react';
import axios from 'axios';
import store from '../store/index';
import { Select, Button, Icon } from 'antd';
const { Option } = Select;
const ButtonGroup = Button.Group;

export default class ItemBox extends Component {
	constructor(arg) {
		super(arg);
		this.state = {
			count: 1,
			color: 'default',
			id: this.props.id,
			data: store.getState().item
		};
		store.subscribe(() => {
			this.setState({ data: store.getState().item });
		});
	}

	componentDidMount() {
		var url = 'http://192.168.1.149:1551/getItemById';
		axios
			.post(url, {
				id: this.state.id
			})
			.then(function(response) {
				var action = {
					type: 'item',
					value: response.data[0]
				};
				store.dispatch(action);
			});
	}

	componentWillUnmount = () => {
		this.setState = (state, callback) => {
			return;
		};
	};

	increase = () => {
		const count = this.state.count + 1;
		this.setState({ count });
	};

	decline = () => {
		let count = this.state.count - 1;
		if (count < 0) {
			count = 0;
		}
		// console.log(this.state.data);
		this.setState({ count });
	};

	SelectOnSelect = (value) => {
		this.setState({ color: value });
	};

	buttonOnClick = () => {
		var ob = {
			img:this.state.data.img_1,
			name: this.state.data.name,
			count: this.state.count,
			color: this.state.color,
			description:this.state.data.description,
			one_price: this.state.data.price
		};
		var action1 = {
			type: 'shopItem',
			value: ob
		};
		store.dispatch(action1);

		let list = store.getState().shopItem;
		let prices = 0;
		let num = 0;
		list.forEach((item) => {
			prices += (item.one_price *100* item.count)/100;
			num += item.count;
		});
		var action2 = {
			type: 'prices',
			value: prices
		};
		var action3 = {
			type: 'num',
			value: num
		};
		store.dispatch(action2);
		store.dispatch(action3);
	};

	render() {
		return (
			<div className="itemBox">
				<div className="itemLeft">
					<div className="itemLeft_big">
						<img src={this.state.data.img_1} alt="" />
					</div>
					<div className="itemLeft_sm">
						<div className="imgbox">
							<img src={this.state.data.img_1} alt="" />
						</div>
						<div className="imgbox">
							<img src={this.state.data.img_2} alt="" />
						</div>
					</div>
				</div>
				<div className="itemRight">
					<div className="itemPrice">￥{this.state.data.price}</div>
					<div className="itemColor">选择颜色：</div>
					<Select
						size="large"
						style={{ width: 400, marginBottom: 20 }}
						onSelect={this.SelectOnSelect}
						placeholder={this.state.color}
					>
						<Option value={this.state.data.color_1}>{this.state.data.color_1}</Option>
						<Option value={this.state.data.color_2}>{this.state.data.color_2}</Option>
					</Select>
					<div className="itemColor">数量：</div>
					<div>
						<ButtonGroup>
							<Button onClick={this.decline}>
								<Icon type="minus" />
							</Button>
							<div className="numMid">{this.state.count}</div>
							<Button onClick={this.increase}>
								<Icon type="plus" />
							</Button>
						</ButtonGroup>
						<div className="description">{this.state.data.description}</div>
						<Button type="primary" className="shopCar" onClick={this.buttonOnClick}>
							<Icon type="shopping-cart" />添加到购物车
						</Button>
					</div>
				</div>
			</div>
		);
	}
}
