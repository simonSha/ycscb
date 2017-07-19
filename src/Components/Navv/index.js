import React,{Component} from "react";
import "./index.scss";
import axios from "axios";
import "../../assets/iconfont/iconfont.css";

import Header from "../Header/index";
import "../Footer/index.scss";

import {
	NavLink
} from "react-router-dom";

class Navv extends Component{
	constructor(props) {
		super(props);
		this.state = {
			isShow1:false,
			isShow2:false,
			isShow3:false,
			isFirstShow1:false,
			isFirstShow2:false,
			isFirstShow3:false,
			iClass: false,
			onelist:[],
			twolist:[],
			onelistli:[]
		}

	}

	componentDidMount() {
		axios.get("/index.php?act=list&op=getYouhuiClass&cate=meishi").then((res)=>{
			console.log(res.data.data.cate.sub[1]);
			this.setState({
				onelist:res.data.data.cate.data,
				onelistli:res.data.data.cate.sub[1],
				twolist:res.data.data.city.data,
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
 									isShow1:!this.state.isShow1,
 									isFirstShow1:true,
 									isShow2:false,
 									isShow3:false
 									
 								})
 							}
 						} >分类<i className="iconfont icon-moreunfold"></i>
						
								
						</li>
						<li className="li" onClick={
 							()=>{
 								this.setState({
 									isShow2:!this.state.isShow2,
 									isFirstShow2:true,
 									isShow1:false,
 									isShow3:false
 									
 									
 								})
 							}
						}>商圈<i className="iconfont icon-moreunfold"></i>
														
						</li>

						<li className="lastli2 li"  onClick={
 							()=>{
 								this.setState({
 									isShow3:!this.state.isShow3,
 									isFirstShow3:true,
 									isShow1:false,
 									isShow2:false			
 								})
 							}
						}>默认排序<i className="iconfont icon-moreunfold"></i>
													
						</li>
					</ul>
				</div>

				<ul className={this.state.isShow1?'show oneul':'hide oneul'}
					style={{display:this.state.isFirstShow1?'block':'none'}}
				>
							{
								this.state.onelist.map((item,index)=>
									
									<li key={item.name} className="oneul_li" >{item.name} <span>({item.count})</span>
												
									</li>									
								)		
							}
							
				</ul>

				<ul className={this.state.isShow2?'show twoul':'hide twoul'}
					style={{display:this.state.isFirstShow2?'block':'none'}}
				>
							{
								this.state.twolist.map((item,index)=>
									
									<li key={item.name} className="twoul_li" >{item.name} <span>({item.count})</span>
												
									</li>									
								)		
							}
							
				</ul>
				<ul className={this.state.isShow3?'show threeul':'hide threeul'}
					style={{display:this.state.isFirstShow3?'block':'none'}}
				>
					<li className="threeul_li">默认排序</li>
				</ul>
				<div>food</div>
				

				
			</div>
		)
	}
}

export default Navv