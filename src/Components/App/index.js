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
						<span>桐乡</span>
						<i className="iconfont icon-map"></i>
						<NavLink to="/food" >food</NavLink>						
					</div>					
					<div className="center">
						<NavLink to="/home" >一传十传百</NavLink>
					</div>
					<div className="right">
						<i className="iconfont icon-account"></i>
						<span>我的</span>
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