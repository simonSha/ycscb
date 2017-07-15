import React,{Component} from "react";
import "./index.scss";
import "../../assets/iconfont/iconfont.css";
import {
	NavLink
} from "react-router-dom";

class App extends Component{
	constructor(props) {
		super(props);
		
	}

	render() {
		return (
			<div id="app">
				<header>
					<div className="left">
						<span><NavLink to="/map" >桐乡</NavLink></span>
						<i className="iconfont icon-map"></i>				
					</div>					
					<div className="center">
						<NavLink to="/home" >一传十传百</NavLink>
					</div>
					<div className="right">
						<i className="iconfont icon-account"></i>
						<span><NavLink to="/user" >我的</NavLink></span>
					</div>
				</header>
				<div className="xun">
					<div>
						<i className="iconfont icon-search"></i>
						<input type="text" placeholder="输入商家名字/商品名称获取优惠"/>
					</div>
				</div>
				<section>
					{this.props.children}
				</section>
				<footer>
					<div className="up">
						<ul>
							<li><NavLink to="/denglu" >登录</NavLink></li>
							<li><NavLink to="/zhuce" >注册</NavLink></li>
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
			</div>
		)
	}
}
// {this.props.children}
export default App;