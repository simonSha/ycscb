import React,{Component} from "react";
import "./index.scss";
import "../../assets/iconfont/iconfont.css";

import Navv from "../Navv/index";
import "../Navv/index.scss";
import Footer from "../Footer/index";
import "../Footer/index.scss";
import axios from "axios";
import {
	NavLink
} from "react-router-dom";

class Film extends Component{
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
		axios.get("/list.html?cate=dianying&ajax=1").then((res)=>{
			
			 console.log(res.data);
		
			 this.setState({
				playinglist:res.data.data
			})

			})}





	render() {
		return (

			<div id="film">
			<Navv></Navv>
				<main>

				<div className="nowplaying">

	            	{
	            		this.state.playinglist.map((item,index)=>
	            			<div id="dy"key={item.id} onClick={()=>{
									//js跳转页面的方法 ,es6 字符串模板的写法
									this.props.history.push(`/list/${item.id}`)
								}}>
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

export default Film

