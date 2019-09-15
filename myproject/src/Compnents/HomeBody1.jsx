import React, { Component } from 'react';
import {Link} from 'react-router-dom' 
import '../css/HomeBody.css';
import { Card } from 'antd';
const { Meta } = Card;

export default class HomeBody1 extends Component {
	render() {
		return (
			<div className="HomeBody">
				<div className="BodyTitle">本月上新</div>
				<div className="linkbody">
					<Link className="linkbody_a" to="/">
						<Card
							className="BodyCard"
							hoverable
							style={{ width: 550 }}
							cover={
								<img
									alt="秋冬"
									src="https://www.wigglestatic.com/images/offers/commercial/2019/week36/2019-week36-homepage-banner1-new-min.jpg"
								/>
							}
						>
							<Meta title="抢先查看：最新骑行服饰" description="最新秋/冬系列" style={{textAlign:"center"}}/>
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
							<Meta title="室内训练热火朝天" description="室内训练必备" style={{textAlign:"center"}}/>
						</Card>
					</Link>
				</div>
				<div className="linkbody">
					<Link className="linkbody_a" to="/">
						<Card
							className="BodyCard2"
							hoverable
							style={{ width: 265 }}
							cover={
								<img
									alt="秋冬"
									src="https://www.wigglestatic.com/images/offers/commercial/2019/2019-w36-homepage-box-1-var.jpg"
								/>
							}
						>
							<Meta title="最新PRIME" description="零部件＆车轮" style={{textAlign:"center"}}/>
						</Card>
					</Link>

                    <Link className="linkbody_a" to="/">
						<Card
							className="BodyCard2"
							hoverable
							style={{ width: 265 }}
							cover={
								<img
									alt="秋冬"
									src="https://www.wigglestatic.com/images/offers/commercial/2019/2019-w36-homepage-box-2.jpg"
								/>
							}
						>
							<Meta title="最新" description="跑步＆健身鞋" style={{textAlign:"center"}}/>
						</Card>
					</Link>

                    <Link className="linkbody_a" to="/">
						<Card
							className="BodyCard2"
							hoverable
							style={{ width: 265 }}
							cover={
								<img
									alt="秋冬"
									src="https://www.wigglestatic.com/images/offers/commercial/2019/2019-w36-homepage-box-3.jpg"
								/>
							}
						>
							<Meta title="最新" description="车轮＆车胎" style={{textAlign:"center"}}/>
						</Card>
					</Link>

                    <Link className="linkbody_a" to="/">
						<Card
							className="BodyCard2"
							hoverable
							style={{ width: 265 }}
							cover={
								<img
									alt="秋冬"
									src="https://www.wigglestatic.com/images/offers/commercial/2019/2019-w36-homepage-box-4-min.jpg"
								/>
							}
						>
							<Meta title="最新" description="CASTELLI 系列" style={{textAlign:"center"}}/>
						</Card>
					</Link>
				</div>
			</div>
		);
	}
}
