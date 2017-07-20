import React,{Component} from "react";
import "./index.scss";


class Zhuce extends Component{
	constructor(props) {
		super(props);
		
	}


	render() {
		return (


			<div id="zhuce">
			<div className="top">
				<from className="from">
					<div className="call">
						<div className="left">
							<input ref="username" type="text" placeholder="请输入11位手机号码" className="leftt"/>
						</div>
						<p className="p">请输入正确手机</p>
						<div className="right">
							获取验证码
						</div>
					</div>

					<div className="yz">
						<input type="text" className="yzm" placeholder="请输入收到的短信验证码"/>
					</div>
					<p className="p">请输入验证码</p>
					<div className="pw">
						<input type="password" className="psw" placeholder="请输入您的密码，长度至少六位"/>
						<button className="btn" onClick={this.hclick.bind(this)}>
							显示
						</button>
					</div>
					<p className="p">请输入您的密码</p>
				</from>
			</div>


				<div className="wc">
					<a className="a li1">
						完成注册
					</a>
					<div className="bom">
						<input type="checkbox" className="in"/>
						<span>我以阅读并同意</span>
						<p>《用户协议》</p>
					</div>
				</div>
			</div>
			
		)
	}

	hclick(){
		console.log(this.refs.username.value)
	}
}

export default Zhuce;