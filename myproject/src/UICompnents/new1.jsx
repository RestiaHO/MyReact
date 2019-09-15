import React, { Component } from 'react';

import LinkItem from './LinkItem'


export default class New1 extends Component {
	render() {
		return (
			<div className="New1">
                <div className="New1Top">{this.props.title}</div>
                {this.props.data.map((item)=><LinkItem data={item} key={item.id}></LinkItem>)}


			</div>
		);
	}
}
