import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom'
import { Card } from 'antd';
const { Meta } = Card;
class LinkItem extends Component {
    constructor(arg){
        super(arg)
        this.state ={
            path:arg,
            link1:`/item/${this.props.data.id}`
        }
    }

    // detail = (e) => {
    //     this.state.path.history.push('/item/'+e)
    // }
	render() {
		return (
			<div style={{ marginTop: '20px' }}>
				<Link to={this.state.link1}>
					<Card hoverable style={{ width: 350 }} cover={<img alt="秋冬" src={this.props.data.img_1} />}>
                    {/* onClick={()=>this.detail(this.state.link1)} */}
						<Meta
							title={this.props.data.name}
							description={this.props.data.Attr}
							style={{ textAlign: 'center' }}
						/>
					</Card>
				</Link>
			</div>
		);
	}
}

const AuthButton = withRouter(LinkItem);
export default AuthButton;
