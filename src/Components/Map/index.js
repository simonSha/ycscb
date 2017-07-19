import React,{Component} from "react";
import "./index.scss";
import "../../assets/iconfont/iconfont.css";
import Footer from "../Footer/index";
import "../Footer/index.scss";
import {
	NavLink
} from "react-router-dom";

class Food extends Component{
	constructor(props) {
		super(props);
		this.state = {
			isShow:false,
			isFirstShow:false,
			iClass: false
		}
	}


	render() {
		return (

			
				<div id="map">
				
				</div>
			
		)
	}
}

export default Food