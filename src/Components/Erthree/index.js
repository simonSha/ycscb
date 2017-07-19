import React,{Component} from "react";
import "./index.scss";

class Ertwo extends Component{
	constructor(props) {
		super(props);
		
	}


	render() {
		return (

			<div id="three">
				<ul>
				<li>默认排序</li>
				<li>距离最近</li>
				<li>销量最高</li>
				<li>价格最低</li>
				<li>价格最高</li>
				<li>评价最好</li>
				</ul>
			</div>
		)
	}
}

export default Ertwo;