import React,{Component} from "react";
import "./index.scss";
import{
	NavLink
}from"react-router-dom";





class User extends Component{
	constructor(props) {
		super(props);
		
	}


	render() {
		return (

			<div id="user">
				
				<div className="q1">
				<NavLink to="/user/zhdr" activeClassName="active">账号登录</NavLink>
				
				</div>

				<div className="q1">
				<NavLink to="/user/sjdxdr" activeClassName="active">手机短信登录</NavLink>
				</div>
					{
						this.props.children
					}
			</div>
			
		)
	}
}

export default User;