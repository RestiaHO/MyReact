import React, { Component } from 'react';
import '../css/NewTop.css';
import { Link } from 'react-router-dom';

import { Card, Row, Col, Carousel } from 'antd';
const { Meta } = Card;

export default class NewTop extends Component {
	render() {
		return (
			<div>
				<Card
					className="NewCard"
					hoverable
					style={{ width: 1150 }}
					cover={
						<Carousel autoplay>
							<div>
								<img
									className="swiperimg"
									src="https://www.wigglestatic.com/images/offers/commercial/2019/week36/2019-week37-newpage-slide3-large-min.jpg"
									alt=""
								/>
							</div>
							<div>
								<img
									src="https://www.wigglestatic.com/images/offers/commercial/2019/week36/2019-week37-newpage-slide2-large-min.jpg"
									alt=""
								/>
							</div>
							<div>
								<img
									src="https://www.wigglestatic.com/images/offers/commercial/2019/week36/2019-week37-newpage-slide1-large-min.jpg"
									alt=""
								/>
							</div>
						</Carousel>
					}
				>
					<Meta
						title="以崭新的风貌骑入新赛季。为爱车升级，更新高科技装备，帮助你#GETTHERE。"
						description="我们拥有世界顶级运动品牌，为你提供各种运动服、配饰、自行车及零部件，我们相信你定会从中找到适合你的商品！"
						style={{ textAlign: 'center' }}
					/>
				</Card>
				<Row gutter={16} justify="space-around" className="gutter-row">
					<Col className="gutter-row" span={8}>
						<Link className="gutter-box" to="/new">
							骑行
						</Link>
					</Col>
					<Col className="gutter-row" span={8}>
						<Link className="gutter-box" to="/new">
							跑步系列
						</Link>
					</Col>
					<Col className="gutter-row" span={8}>
						<Link className="gutter-box" to="/new">
							游泳
						</Link>
					</Col>
				</Row>
				<Row gutter={16} justify="space-around" className="gutter-row">
					<Col className="gutter-row" span={8}>
						<Link className="gutter-box" to="/new">
							铁人三项
						</Link>
					</Col>
					<Col className="gutter-row" span={8}>
						<Link className="gutter-box" to="/new">
							健身房锻炼
						</Link>
					</Col>
					<Col className="gutter-row" span={8}>
						<Link className="gutter-box" to="/new">
							户外
						</Link>
					</Col>
				</Row>
			</div>
		);
	}
}
