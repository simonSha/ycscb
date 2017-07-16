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

					<div className="xun">
						<div>
							<i className="iconfont icon-search"></i>
							<input type="text" placeholder="输入商家名字/商品名称获取优惠"/>
						</div>
					</div>
				</header>
				
				<section>
					{this.props.children}
				</section>
				
			</div>
		)
	}
}
// {this.props.children}
export default App;