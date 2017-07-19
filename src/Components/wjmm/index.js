
import React,{Component} from "react";
import "./index.scss";

class Zhuce extends Component{
	constructor(props) {
		super(props);
		
	}


	render() {
		return (
			<div>
			<div id="container">
			<input className="shouji" placeholder="请输入11位手机号码"/>
			<button className="yanzheng" >获取验证码</button>
			<input className="duanxin" placeholder="请输收到的短信验证码"/>
			<div className="con">
				<input placeholder="请输入您的密码，长度至少6位"/>
				<button>显示</button>
			</div>
		
			</div>
			<button className="xiugai">修改密码</button>
			</div>
		)
	}
}


export default Zhuce;