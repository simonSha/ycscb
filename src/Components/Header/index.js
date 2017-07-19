import React,{Component} from "react";
import "../../assets/iconfont/iconfont.css";
import "./index.scss";
import {
	NavLink
} from "react-router-dom";

class Header extends Component{
	constructor(props) {
		super(props);
		this.state = {
			isShow1:true,
			isHide1:true
			
		}
	}


	render() {
		return (
			<div>
				<div id="xun" className={this.state.isShow1?'show1':'hide1'}>
					<NavLink to="/home"><i className="iconfont icon-back ii"></i></NavLink>
					<div>
						<i className="iconfont icon-search"></i>
						<input type="text" placeholder="输入商家名字/商品名称获取优惠" onClick={
 							()=>{
 								this.setState({
 									isShow1:false,
 									isHide1:false
 								})
 							}
						}/>
					</div>
				</div>
				<div id="xun2" className={this.state.isHide1?'hide1':'show1'}>
					<p onClick={
 							()=>{
 								this.setState({
 									isShow1:true,
 									isHide1:true
 								})
 							}
						}>取消</p>
					<div>
						<i className="iconfont icon-search suoi"></i>
						<input type="text" placeholder="输入商家名字/商品名称获取优惠"/>
					</div>
				</div>
			</div>
		)
	}
}

export default Header;



