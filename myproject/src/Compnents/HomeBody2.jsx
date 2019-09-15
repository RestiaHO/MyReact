import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/HomeBody.css';
import { Card } from 'antd';
const { Meta } = Card;

export default class HomeBody2 extends Component {
	render() {
		return (
			<div>
				<div className="HomeBody">
					<div className="BodyTitle">超值特卖</div>
					<div className="linkbody">
						<Link className="linkbody_a" to="/">
							<Card
								className="BodyCard"
								hoverable
								style={{ width: 1120 }}
								cover={
									<img
										alt="秋冬"
										src="https://www.wigglestatic.com/images/offers/commercial/2019/2019-w36-homepage-banner-3.jpg"
									/>
								}
							>
								<Meta title="低至 4 折" description="骑行、跑步、铁人三项＆更多商品" style={{ textAlign: 'center' }} />
							</Card>
							<div className="CardTitle1">清仓大甩卖</div>
						</Link>
					</div>
					<div className="linkbody">
						<Link className="linkbody_a" to="/">
							<Card
								className="BodyCard"
								hoverable
								style={{ width: 550 }}
								cover={
									<img
										alt="秋冬"
										src="https://www.wigglestatic.com/images/offers/commercial/2019/2019-w36-homepage-banner-5.jpg"
									/>
								}
							>
								<Meta title="时刻补充水分" description="HIGH5＆SIS 运动营养品" style={{ textAlign: 'center' }} />
							</Card>
						</Link>

						<Link className="linkbody_a" to="/">
							<Card
								className="BodyCard"
								hoverable
								style={{ width: 550 }}
								cover={
									<img
										alt="秋冬"
										src="//www.wigglestatic.com/images/offers/commercial/2019/2019-w36-homepage-banner-2.jpg"
									/>
								}
							>
								<Meta title="当季DHB骑行装备" description="保暖臂套＆腿套，骑行夹克＆更多商品" style={{ textAlign: 'center' }} />
							</Card>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}
