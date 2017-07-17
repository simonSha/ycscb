import React,{Component} from "react";
import "./index.scss";
import axios from "axios";
import "../../assets/iconfont/iconfont.css";

import Header from "../Header/index";
import "../Footer/index.scss";

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

	componentDidMount() {
		axios.get("/index.php?act=list&op=getYouhuiClass&cate=meishi").then((res)=>{
			 console.log(res.data.data.cate);
			// this.setState({
			
			// })
		}),
		axios.get("/list.html?cate=meishi&ajax=1").then((res)=>{
			 console.log(res.data);
			// this.setState({
			
			// })
		})
	}


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
				
				<ul>
					<li>
						<NavLink to="/list" >
						<img />
						<ul>
							<li>
							<p>老乡长传家菜</p>
							<span>新世纪公园</span>
							</li>
							<li>老香樟传家菜全场8.5折！</li>
							<li>
							<h3>￥0</h3><p>/ 0</p>
							<span>7</span><i className="iconfont icon-account"></i>
							</li>
						</ul>
						</NavLink>
					</li>
					<li>
						<NavLink to="/list" >
						<img />
						<ul>
							<li>
							<p>老乡长传家菜</p>
							<span>新世纪公园</span>
							</li>
							<li>老香樟传家菜全场8.5折！</li>
							<li>
							<h3>￥0</h3><p>/ 0</p>
							<span>7</span><i className="iconfont icon-account"></i>
							</li>
						</ul>
						</NavLink>
					</li>
					<li>
						<NavLink to="/list" >
						<img />
						<ul>
							<li>
							<p>老乡长传家菜</p>
							<span>新世纪公园</span>
							</li>
							<li>老香樟传家菜全场8.5折！</li>
							<li>
							<h3>￥0</h3><p>/ 0</p>
							<span>7</span><i className="iconfont icon-account"></i>
							</li>
						</ul>
						</NavLink>
					</li>
				</ul>
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

export default Food