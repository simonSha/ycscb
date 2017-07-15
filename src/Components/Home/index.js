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
				<ReactSwipe className="carousel" swipeOptions={{continuous: true}}>
	                <div>PANE 1</div>
	                <div>PANE 2</div>
	                <div>PANE 3</div>
            	</ReactSwipe>

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
						<NavLink to="/life" >food</NavLink>
						</li>
						<li>
						<NavLink to="/travel" >film</NavLink>
						</li>
						<li>
						<NavLink to="/quan" >hotel</NavLink>
						</li>
						<li>
						<NavLink to="/ktv" >food</NavLink>
						</li>
						<li>
						<NavLink to="/all" >film</NavLink>
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