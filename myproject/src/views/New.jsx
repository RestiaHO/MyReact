import React, { Component } from 'react';
import '../css/bodybox.css'
import NewTop from '../Compnents/NewTop'
import NewMid from '../Compnents/NewMid'

export default class Home extends Component {
	render() {
		return (
			<div className='BodyBox'>
                <NewTop/>
                <NewMid/>
			</div>
		);
	}
}
