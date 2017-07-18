import React,{Component} from "react";
import "./index.scss";
import axios from "axios";
import "../../assets/iconfont/iconfont.css";

import Footer from "../Footer/index";
import "../Footer/index.scss";

import ReactSwipe from "react-swipe";
import {
	NavLink
} from "react-router-dom";

class Home extends Component{
	constructor(props) {
		super(props);
		this.state = {
			playinglist:[],
			playinglist1:[],
			playinglist2:[],
			playinglist3:[],
			playinglist4:[],
			playinglist5:[],
			playinglist6:[],
			playinglist7:[],
			playinglist8:[]
			
		}
		
	}
	componentDidMount() {
		axios.get("/index.php?act=index&op=index&ajax=1").then((res)=>{
			
			 console.log(res.data);
		
			 this.setState({
			 	playinglist:res.data.data,
				playinglist1:res.data.category[1],
                playinglist2:res.data.category[2],
				playinglist3:res.data.category[3],
				playinglist4:res.data.category[4],
				playinglist5:res.data.category[5],
				playinglist6:res.data.category[6],
				playinglist7:res.data.category[7],
				playinglist8:res.data.category[8],

			})

			})}



	render() {
		return (

			<div id="home">
				<div className="xun">
					<div>
						<i className="iconfont icon-search"></i>
						<input type="text" placeholder="输入商家名字/商品名称获取优惠"/>
					</div>
				</div>
				
				<div className="slide">
					<ReactSwipe className="carousel" swipeOptions={{continuous: true,speed: 400,
	  				auto: 3000,}} key={3}>
		                <div>PANE 1</div>
		                <div>PANE 2</div>
		                <div>PANE 3</div>
	            	</ReactSwipe>
				</div>

				

				<nav>
					<ul>
						<li>
						<NavLink to="/food" ><a>
							<img src={this.state.playinglist1.icon_url}/>
							<p>美食</p>
						</a></NavLink>
						</li>
						<li>
						<NavLink to="/film" ><a>
							<img src={this.state.playinglist2.icon_url}/>
							<p>美食</p>
						</a></NavLink>
						</li>
						<li>
						<NavLink to="/hotel" ><a>
							<img src={this.state.playinglist3.icon_url}/>
							<p>美食</p>
						</a></NavLink>
						</li>
						<li>
						<NavLink to="/life" ><a>
							<img src={this.state.playinglist4.icon_url}/>
							<p>美食</p>
						</a></NavLink>
						</li>
						<li>
						<NavLink to="/travel" ><a>
							<img src={this.state.playinglist5.icon_url}/>
							<p>美食</p>
						</a></NavLink>
						</li>
						<li>
						<NavLink to="/quan" ><a>
							<img src={this.state.playinglist6.icon_url}/>
							<p>美食</p>
						</a></NavLink>
						</li>
						<li>
						<NavLink to="/ktv" ><a>
							<img src={this.state.playinglist7.icon_url}/>
							<p>美食</p>
						</a></NavLink>
						</li>
						<li>
						<NavLink to="/all" ><a>
							<img src={this.state.playinglist8.icon_url}/>
							<p>美食</p>
						</a></NavLink>
						</li>						
					</ul>
				</nav>

				<main>
				<h2>本周推荐</h2>
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

				<section>
					{this.props.children}
				</section>
				<Footer></Footer>
			</div>

		)
	}
}

export default Home;