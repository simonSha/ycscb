import React,{Component} from "react";
import "./index.scss";
import {
	NavLink
} from "react-router-dom";

class Header extends Component{
	constructor(props) {
		super(props);
		
	}


	render() {
		return (

			<div id="er">
				<ul>
					<li>
						<NavLink to="/header/erone" >分类</NavLink>
					</li>
					<li>
						<NavLink to="/header/ertwo" >商圈</NavLink>
					</li>
					<li>
						<NavLink to="/header/erthree" >默认排序</NavLink>
					</li>
				</ul>
			</div>
		)
	}
}

export default Header;



