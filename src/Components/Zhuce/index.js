import React,{Component} from "react";
import "./index.scss";


class Zhuce extends Component{
	constructor(props) {
		super(props);
		
	}


	render() {
		return (


			<div id="zhuce">
				<from className="from">
					<div className="call">
						<div className="left">
							<input type="text" placeholder="请输入11位手机号码" className="leftt"/>
						</div>

						<div className="right">
							获取验证码
						</div>
					</div>

					<div className="yz">
						<input type="text" className="yzm" placeholder="请输入收到的短信验证码"/>
					</div>

					<div className="pw">
						<input type="password" className="psw" placeholder="请输入您的mima，长度至少六位"/>
						<button className="btn">
							显示
						</button>
					</div>
				</from>

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
}

export default Zhuce;