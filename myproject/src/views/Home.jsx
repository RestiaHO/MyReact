import React, { Component } from 'react';
import HomeTitle from '../Compnents/HomeTitle';
import HomeBody1 from '../Compnents/HomeBody1';
import HomeBody2 from '../Compnents/HomeBody2';
import HomeBottom from '../Compnents/HomeBottom';
import BackTop from '../Compnents/backTop';

export default class Home extends Component {
	render() {
		return (
			<div>
				<HomeTitle />
				<HomeBody1 />
				<HomeBody2 />
				<HomeBottom />
				<BackTop />
			</div>
		);
	}
}
