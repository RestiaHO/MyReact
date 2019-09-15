import React, { Component } from 'react';
import '../css/HeaderBot.css';
import { Row, Col, Icon } from 'antd';

export default class HeaderBot extends Component {
	render() {
		return (
			<div className="HeaderBot">
				<Row className="HeaderBotRow">
					<Col span={6} className="HeaderBotCol">
						<Icon type="smile" style={{ fontSize: '40px', color: '#ff920b' }} />
						<div>
							<div>品质保证</div>
							<div>100%正品</div>
						</div>
					</Col>
					<Col span={6} className="HeaderBotCol">
						<Icon type="transaction" style={{ fontSize: '40px', color: '#ff920b' }} />
						<div>
							<div>包邮</div>
							<div>消费金额满 ¥888  *不包含大件商品</div>
						</div>
					</Col>
                    <Col span={6} className="HeaderBotCol">
						<Icon type="robot" style={{ fontSize: '40px', color: '#ff920b' }} />
						<div>
							<div>电子新闻简报</div>
							<div>抢先获得特卖信息</div>
						</div>
					</Col>
                    <Col span={6} className="HeaderBotCol">
						<Icon type="switcher" style={{ fontSize: '40px', color: '#ff920b' }} />
						<div>
							<div>TRUSTPILOT</div>
							<div>查看客户对我们的评价</div>
						</div>
					</Col>
				</Row>
			</div>
		);
	}
}
