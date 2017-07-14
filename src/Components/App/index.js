import React,{Component} from "react";
import "./index.scss";
import "../../assets/iconfont/iconfont.css";

class App extends Component{
	constructor(props) {
		super(props);
		
	}

	render() {
		return (
			<div id="app">
				<header>
					<div className="life">
						<span>桐乡</span>
						<i className="iconfont icon-map"></i>
						
					</div>
					<div className="right">
						<i className="iconfont icon-account"></i>
						<span>我的</span>
					</div>
				</header>				
			</div>
		)
	}
}
// {this.props.children}
export default App;