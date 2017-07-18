import React,{Component} from "react";
import "./index.scss";



class Sjdxdr extends Component{
	constructor(props) {
		super(props);
		
	}


	render() {
		return (

			<div>
			<div className="q4">
				<div className="a3">
				<input className="a2" type="text" placeholder="请输入11位手机号码"/>
				<a className="a1">获取验证码</a>
				</div>
				<input className="q2" type="text" placeholder="请输入收到的短信验证码"/>
				<button className="q3">登录</button>
				<p className="q5"><a className="left" href="#">免费注册</a><a className="right" href="#">忘记密码？</a></p>
				</div>
			<div className="z3">
				<div className="z1">——————&nbsp;&nbsp;&nbsp;使用下列账号登录&nbsp;&nbsp;&nbsp;——————</div>
				<a className="z2" href="http://group.1c10.cn/shop/index.php?act=oauth&amp;op=qq"><span></span>QQ帐号登录</a>
				</div>
			</div>
			
		)
	}
}

export default Sjdxdr;