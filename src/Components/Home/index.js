import React,{Component} from "react";
import "./index.scss";
import axios from "axios";
import ReactSwipe from "react-swipe";
import {
	NavLink
} from "react-router-dom";

class Home extends Component{
	constructor(props) {
		super(props);
		
	}

	// componentDidMount() {
	// 	axios.get("/index.php?act=index&op=index").then(res=>{
	// 		 console.log(res.data);
	// 		// this.setState({
			
	// 		// })
	// 	})
	// }

	render() {
		return (

			<div id="home">
				<div>
				
				</div>

				<div className="slide">
					<ReactSwipe className="carousel" swipeOptions={{continuous: true,speed: 400,
	  				auto: 3000,}} key={3}>
		                <div>PANE 1</div>
		                <div>PANE 2</div>
		                <div>PANE 3</div>
	            	</ReactSwipe>
				</div>
				

				<nav>
					<ul>
						<li>
						<NavLink to="/food" >food</NavLink>
						</li>
						<li>
						<NavLink to="/film" >film</NavLink>
						</li>
						<li>
						<NavLink to="/hotel" >hotel</NavLink>
						</li>
						<li>
						<NavLink to="/life" >life</NavLink>
						</li>
						<li>
						<NavLink to="/travel" >travel</NavLink>
						</li>
						<li>
						<NavLink to="/quan" >quan</NavLink>
						</li>
						<li>
						<NavLink to="/ktv" >ktv</NavLink>
						</li>
						<li>
						<NavLink to="/all" >all</NavLink>
						</li>						
					</ul>
				</nav>
				<section>
					{this.props.children}
				</section>
			</div>

		)
	}
}

export default Home;