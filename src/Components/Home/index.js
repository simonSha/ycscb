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
		
	}

	

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
							<img/>
							<p>美食</p>
						</a></NavLink>
						</li>
						<li>
						<NavLink to="/film" ><a>
							<img/>
							<p>美食</p>
						</a></NavLink>
						</li>
						<li>
						<NavLink to="/hotel" ><a>
							<img/>
							<p>美食</p>
						</a></NavLink>
						</li>
						<li>
						<NavLink to="/life" ><a>
							<img/>
							<p>美食</p>
						</a></NavLink>
						</li>
						<li>
						<NavLink to="/travel" ><a>
							<img/>
							<p>美食</p>
						</a></NavLink>
						</li>
						<li>
						<NavLink to="/quan" ><a>
							<img/>
							<p>美食</p>
						</a></NavLink>
						</li>
						<li>
						<NavLink to="/ktv" ><a>
							<img/>
							<p>美食</p>
						</a></NavLink>
						</li>
						<li>
						<NavLink to="/all" ><a>
							<img/>
							<p>美食</p>
						</a></NavLink>
						</li>						
					</ul>
				</nav>

				<main>
				<h2>本周推荐</h2>
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
							<span>7</span><i className="iconfont icon-accountfilling"></i>
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
							<span>7</span><i className="iconfont icon-accountfilling"></i>
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
							<span>7</span><i className="iconfont icon-accountfilling"></i>
							</li>
						</ul>
						</NavLink>
					</li>
				</ul>
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