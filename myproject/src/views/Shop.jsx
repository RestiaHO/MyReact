import React, { Component } from 'react';
import ShopItem from '../UICompnents/shopItem'
import '../css/ShopBox.css';
import { Row, Col } from 'antd';


export default class Shop extends Component {
	render() {
		return (
			<div className="Shop">
				<Row className="tableHead">
					<Col span={15} className="tabletitle">
						商品描述
					</Col>
					<Col span={3} className="tabletitle">
						数量
					</Col>
					<Col span={3} className="tabletitle">
						商品价格
					</Col>
					<Col span={3} className="tabletitle">
						合计
					</Col>
				</Row>
                <ShopItem/>
			</div>
		);
	}
}
