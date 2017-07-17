import React,{Component} from "react";
import "./index.scss";
import "../../assets/iconfont/iconfont.css";
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
			 console.log(res.data.data.title);
			 this.setState({
				playinglist:res.data.data
			})


			// this.setState({
			
			// })
		})
	}


	
	render() {
		return (

			<div id="film">
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
				<div className="main">
				<div className="nowplaying">

	            	{
	            		this.state.playinglist.map((item,index)=>
	            			<div>

	            			<img src={item.image_240} key={item.id}/>
	            			<h3>{item.title}</h3>
	            			</div>
	            			
	            		)
	            	}
	            </div>
				</div>
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

export default Film