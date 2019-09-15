import React, { Component } from 'react';

import '../css/itemBox.css'
import ItemBox from '../Compnents/ItemBox'

export default class Item extends Component {
	constructor(arg) {
		super(arg);
		this.state = {
			id: arg.match.params.id
        };
	}



	render() {
		return <div className="itemVw">
            <ItemBox id={this.state.id}/>
        </div>;
	}
}
