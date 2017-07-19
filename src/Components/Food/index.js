import React,{Component} from "react";
import "./index.scss";

import "../../assets/iconfont/iconfont.css";

import Header from "../Header/index";
import "../Footer/index.scss";
import Navv from "../Navv/index";
import "../Navv/index.scss";
import axios from "axios";
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
			iClass: false,
			playinglist:[]
		}

	}

	componentDidMount() {
		axios.get("/index.php?act=list&op=getYouhuiClass&cate=meishi").then((res)=>{
			 console.log(res.data.data.cate.data);
			// this.setState({
			
			// })
		}),
		axios.get("/list.html?cate=meishi&ajax=1").then((res)=>{
			 console.log(res.data);
			// this.setState({
			
			// })
		})
	}

	componentDidMount() {
		axios.get("/list.html?cate=meishi&ajax=1").then((res)=>{
			
			 console.log(res.data);
		
			 this.setState({
				playinglist:res.data.data
			})

			})}



	render() {
		return (

			<div id="food">
			<Header></Header>
			<Navv></Navv>
			
				<main>
				
				<div className="nowplaying">

	            	{
	            		this.state.playinglist.map((item,index)=>
	            			<div id="dy">
	            			    <img src={item.image_240} key={item.id}/>
			            			<p className="dy1">{item.store_name}{item.msg_name}</p>
			            			<p className="dy2">{item.subtitle}</p>
			            			<p className="dy3">
			            				<span className="sa">
			            					<i className="i">￥</i>{item.price}
			            				</span>			            				
			            				<span style={{textDecoration:"line-through"}} className="sp">
			            					 <b>/</b>
			            					 <del>{item.origin_price}</del>
			            				</span>
			            				<span className="an">{item.buy_num}</span>
			            			</p>
		            			
	            			</div>
	            			
	            		)
	            	}
	            </div>
				</main>
				
				<Footer></Footer>
			</div>
		)
	}
}

export default Food

