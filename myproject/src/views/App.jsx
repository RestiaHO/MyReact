import React, { Component } from 'react'
import '../css/App.css'
import Header from './Header'
import Home from './Home'
import NewBody from './New'
import Ridebike from './Ridebike'
import Run from './Run'
import Item from './item'
import Shop from './Shop'


import { BrowserRouter, Route, Switch } from 'react-router-dom';





export default class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                <Header></Header>
                <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/new" component={NewBody} />
                <Route exact path="/骑行系列/" component={Ridebike} />
                <Route exact path="/跑步系列/" component={Run} /> 
                <Route exact path="/item/:id" component={Item} /> 
                <Route exact path="/shop" component={Shop} /> 
                
                </Switch>
                </BrowserRouter>
               
            </div>
        )
    }
}