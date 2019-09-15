import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../css/HeaderMid.css'

export default class HeaderMid extends Component {
    render() {
        return (
            <div className="HeaderMid">
                <div className="mid_box">
                    <Link to="/new" className="mid_box_a">新品</Link>
                    <Link to="/骑行系列/" className="mid_box_a">骑行系列</Link>
                    <Link to="/跑步系列/" className="mid_box_a">跑步系列</Link>
                    <Link to="/new" className="mid_box_a">游泳系列</Link>
                    <Link to="/new" className="mid_box_a">铁人三项</Link>
                    <Link to="/new" className="mid_box_a">户外运动</Link>
                    <Link to="/new" className="mid_box_a">室内健身</Link>
                    <Link to="/new" className="mid_box_a">营养＆健康</Link>
                    <Link to="/new" className="mid_box_a">清仓特卖</Link>
                </div>
            </div>
        )
    }
}
