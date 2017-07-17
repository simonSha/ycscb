import React,{Component} from "react";
import "./index.scss";
import Footer from "../Footer/index";
import "../Footer/index.scss";

class List extends Component{
	constructor(props) {
		super(props);
		
	}


	render() {
		return (

			<div id="List">
				<div className="head">

				</div>
					

				<Footer></Footer>		
			</div>
		)
	}
}

export default List;