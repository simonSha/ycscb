import React,{Component} from "react";
import "./index.scss";

import "../../assets/iconfont/iconfont.css";

import Header from "../Header/index";
import "../Footer/index.scss";
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
				<div className="er">
					<ul>
						<li onClick={
 							()=>{
 								this.setState({
 									isShow:!this.state.isShow,
 									isFirstShow:true,
 									

 								})
 							}
						} className={this.state.iClass?'f60':''}>
							<NavLink to="/food/erone" >分类
							<i className="iconfont icon-moreunfold"></i></NavLink>
						</li>
						<li onClick={
 							()=>{
 								this.setState({
 									isShow:!this.state.isShow,
 									isFirstShow:true,
 									iClass:true
 									
 								})
 							}
						}>
							<NavLink to="/food/ertwo" >商圈
							<i className="iconfont icon-moreunfold"></i></NavLink>
						</li>
						<li className="lastli2" onClick={
 							()=>{
 								this.setState({
 									isShow:!this.state.isShow,
 									isFirstShow:true				
 								})
 							}
						}>
							<NavLink to="/food/erthree" >默认排序
							<i className="iconfont icon-moreunfold"></i></NavLink>
						</li>
					</ul>

				</div>
				<main>
				
				<div className="nowplaying">

	            	{
	            		this.state.playinglist.map((item,index)=>
	            			<div id="dy">
	            			    <img src={item.image_240} />
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
				<section className={this.state.isShow?'show':'hide'}
					style={{display:this.state.isFirstShow?'block':'none'}}
				>
					{this.props.children}
				</section>
				<Footer></Footer>
			</div>
		)
	}
}

export default Food;