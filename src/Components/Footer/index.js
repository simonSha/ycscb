import React,{Component} from "react";
import "./index.scss";
import "../../assets/iconfont/iconfont.css";
import {
	NavLink
} from "react-router-dom";

class Footer extends Component{
	constructor(props) {
		super(props);
		
	}

	render() {
		return (
			
				
				
				<footer>
					<div className="up">
						<ul>
							<li><NavLink to="/user/denglu" >登录</NavLink></li>
							<li><NavLink to="/user/zhuce" >注册</NavLink></li>
						</ul>						
						<span><NavLink to="/map" >桐乡<i className="iconfont icon-moreunfold"></i></NavLink></span>
						<p>城市：</p>
					</div>
					<div className="down">
						<ul>
							<li>
								首页
							</li>
							<li>
								电脑版
							</li>
							<li>
								客户端
							</li>
							<li>
								关于我们
							</li>
							<li>
								信息反馈
							</li>
							<li className="lastli">
								帮助
							</li>
						</ul>
					</div>
				</footer>				
			
		)
	}
}
// {this.props.children}
export default Footer;