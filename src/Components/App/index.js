import React,{Component} form "react";
import "./index.scss";

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
						<span我的></span>
					</div>
				</header>
				{this.props.children}

			</div>
		)
	}
}

export defalt App;