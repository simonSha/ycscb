import React,{Component} from "react";
import "./index.scss";
import {
	NavLink
} from "react-router-dom";

class Food extends Component{
	constructor(props) {
		super(props);
		
	}


	render() {
		return (

			<div>
				<div className="header">
					<ul>
						<li>
							<NavLink to="/food/erone" >分类</NavLink>
						</li>
						<li>
							<NavLink to="/food/ertwo" >商圈</NavLink>
						</li>
						<li>
							<NavLink to="/food/erthree" >默认排序</NavLink>
						</li>
					</ul>

				</div>
				
				<section>
					{this.props.children}
				</section>
			</div>
		)
	}
}

export default Food;