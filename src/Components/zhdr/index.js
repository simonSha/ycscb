import React,{Component} from "react";
import "./index.scss";








class Zhdr extends Component{
	constructor(props) {
		super(props);
		
	}


	render() {
		return (

			<div id="zhdr">
				

				<div className="q4">
				<input className="q2" type="text" placeholder="手机号/邮箱/用户名"/>
				<input className="q2" type="text" placeholder="密码"/>
				<button className="q3">登录</button>
					<p className="q5">
						<a className="left" onClick={()=>{
									//js跳转页面的方法 ,es6 字符串模板的写法
									this.props.history.push(`/zhuce`)
								}}>免费注册</a>
						<a className="right" onClick={()=>{
									//js跳转页面的方法 ,es6 字符串模板的写法
									this.props.history.push(`/wjmm`)
								}}>忘记密码？</a>
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