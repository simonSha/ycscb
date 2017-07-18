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

class Navv extends Component{
	constructor(props) {
		super(props);
		this.state = {
			isShow:false,
			isFirstShow:false,
			iClass: false,
			onelist:[],
			onelistli:[]
		}

	}

	componentDidMount() {
		axios.get("/index.php?act=list&op=getYouhuiClass&cate=meishi").then((res)=>{
			console.log(res.data.data.cate.sub[1]);
			this.setState({
				onelist:res.data.data.cate.data,
				onelistli:res.data.data.cate.sub[1]
			})
			 
			 console.log(this.state.onelistli);
			
		})
		
	}


	render() {
		return (

			<div id="navv">
			<Header></Header>
				<div className="er">
					<ul className="ul">
						<li className="li" onClick={
 							()=>{
 								this.setState({
 									isShow:!this.state.isShow,
 									isFirstShow:true
 									
 								})
 							}
						} >
							分类<i className="iconfont icon-moreunfold"></i>

							<ul className="onelistt">
							{
								this.state.onelist.map((item,index)=>
									

									<li key={item.name} className="navvli" >{item.name} <span>({item.count})</span>
										
										{
											
											this.state.onelistli.map((ite,index)=>
												<ul className="onelisttul" key={ite.length}>
												<li key={ite.name} className="navvlili" >{ite.name} <span>({ite.count})</span></li>
												</ul>
											)	
											
										}	
											
									</li>									
								)		
							}
							
							</ul>
							


							
							
						</li>
						<li className="li" onClick={
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
						<li className="lastli2 li" onClick={
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

export default Navv