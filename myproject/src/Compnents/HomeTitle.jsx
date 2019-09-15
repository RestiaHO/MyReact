import React, { Component } from 'react'
import '../css/HomeTitle.css'

export default class HomeTitle extends Component {
    render() {
        return (
            <div className="HomeTitle">
                <div className="TitleBike">自行车特卖</div>
                <div className="TitleZhe">低至5.5折</div>
            </div>
        )
    }
}
