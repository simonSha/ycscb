import React,{Component} from "react";
import "./index.scss";
import{
	NavLink
}from"react-router-dom";

import Zhuce from "../zhuce/index"
import Wjmm from "../wjmm/index"





class Zhdr extends Component{
	constructor(props) {
		super(props);
		
	}


	render() {
		return (

			<div>
				

				<div className="q4">
				<input className="q2" type="text" placeholder="手机号/邮箱/用户名"/>
				<input className="q2" type="text" placeholder="密码"/>
				<button className="q3">登录</button>
					<p className="q5">
						<NavLink className="left" to="/user/zhuce">免费注册</NavLink>
						<NavLink className="right" to="/user/wjmm">忘记密码？</NavLink>
					</p>
				</div>
				<div className="z3">
				<div className="z1">——————&nbsp;&nbsp;&nbsp;使用下列账号登录&nbsp;&nbsp;&nbsp;——————</div>
				<a className="z2" href="http://group.1c10.cn/shop/index.php?act=oauth&amp;op=qq"><span></span>QQ帐号登录</a>
				</div>
			</div>
			
		)
	}
}

export default Zhdr;