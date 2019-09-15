import React, { Component } from 'react'

export default class 项目后总结demo extends Component {
    constructor(arg){
        super(arg)
        this.state = {
            childState:''
        }
        Object.assign(this.state,this.props)
    }

    handleClick=(a)=>{
        this.setState({
            childState:a
        })
    }

    render() {
        return (
            <div>
                <Child GetStates={this.handleClick}></Child>
            </div>
        )
    }
}
