import React,{Component} from "react";
import "./index.scss";
import {
	NavLink
} from "react-router-dom";

class Erone extends Component{
	constructor(props) {
		super(props);
		
	}


	render() {
		return (

			<div id="one">
				<ul>
					<li>
						<NavLink to="/all" >全部（464）</NavLink>
					</li>
					<li>
						<NavLink to="/new" >今日新单（0）</NavLink>
					</li>
					<li>
						<NavLink to="/food" >美食（150）</NavLink>
					</li>
					<li>
						<NavLink to="/ktv" >娱乐休闲（54）</NavLink>
					</li>
					<li>
						<NavLink to="/film" >电影（13）</NavLink>
					</li>
					<li>
						<NavLink to="/hotel" >酒店（50）</NavLink>
					</li>
					<li>
						<NavLink to="/quan" >优惠券（131）</NavLink>
					</li>
					<li>
						<NavLink to="/life" >丽人养生（65）</NavLink>
					</li>
					<li>
						<NavLink to="/travel" >旅游（1）</NavLink>
					</li>
				</ul>
			
				<section>
						{this.props.children}
				</section>		
			</div>
		)
	}
}

export default Erone;