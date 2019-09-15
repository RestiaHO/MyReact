import React, { Component } from 'react'
import HeaderTop from '../Compnents/HeaderTop'
import HeaderMid from '../Compnents/HeaderMid'
import HeaderBot from '../Compnents/HeaderBot'

export default class Header extends Component {
    render() {
        return (
            <div>
                <HeaderTop></HeaderTop>
                <HeaderMid></HeaderMid>
                <HeaderBot></HeaderBot>
            </div>
        )
    }
}
