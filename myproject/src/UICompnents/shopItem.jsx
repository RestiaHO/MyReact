import React, { Component } from 'react';
import { Row, Col } from 'antd';
import store from '../store/index';

import { Button, Icon } from 'antd';
const ButtonGroup = Button.Group;

export default class shopItem extends Component {
	constructor(arg) {
		super(arg);
		this.state = {
			data: store.getState().shopItem
		};

		store.subscribe(() => {
			this.setState({ data: store.getState().shopItem });
		});
	}

	increase = (index) => {
        var data = this.state.data;
        data[index].count ++;
        var action = {
            type: 'shopItemChange',
			value: data
        }
        store.dispatch(action);
	};

	decline = (index) => {
        var data = this.state.data;
        data[index].count --;

        if(data[index].count === 0 ){
            data.splice(index,1)
        }

        var action = {
            type: 'shopItemChange',
			value: data
        }
        store.dispatch(action);
	};

    componentWillUnmount = () => {
		this.setState = (state, callback) => {
			return;
		};
    };
    
	render() {
		return (
			<div>
				{this.state.data.map((item,index) => (
					<Row className="tableBody" key={index}>
						<Col span={15} className="tabletitle2">
							<div className="title_img">
								<img src={item.img} alt="" />
							</div>
							<div className="title_description">{item.description}</div>
						</Col>
						<Col span={3} className="tabletitle3">
							<ButtonGroup>
                                <Button onClick={()=>{
                                    this.decline(index)
                                }} size="small">
									<Icon type="minus" />
								</Button>
								<div className="title_num">{item.count}</div>
								<Button onClick={()=>{
                                    this.increase(index)
                                }} size="small">
									<Icon type="plus" />
								</Button>
							</ButtonGroup>
						</Col>
						<Col span={3} className="tabletitle2">
							{item.one_price}
						</Col>
						<Col span={3} className="tabletitle2">
                            {(item.one_price*100*item.count)/100}
						</Col>
					</Row>
				))}

			</div>
		);
	}
}
