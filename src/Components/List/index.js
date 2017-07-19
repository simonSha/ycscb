import React,{Component} from "react";
import "./index.scss";
import Footer from "../Footer/index";
import "../Footer/index.scss";
import img1 from "./img/1.jpg";
import "../../assets/iconfont/iconfont.css";
import axios from "axios";
class List extends Component{
	constructor(props) {
		super(props);
		this.state = {
			
			playinglist:[],
			asd:[],
			add:[],
			dazhe:[],
			
		}
		
		
	}

	componentDidMount() {
		axios.get("index.php?act=deal&op=index&id=6206&ajax=1").then((res)=>{
			
			 console.log(res.data);
			 
			 this.setState({
				playinglist:res.data.buyinfo_list,
				asd:res.data.youhui_info,
				add:res.data.store,
				dazhe:res.data.table_list

			})


			// this.setState({
			
			// })
		})
	}



	render() {
		return (
			

			<div id="List">
				<div className="head">
				{
	            		
	            			

	            			<div>
	            			<h3>{this.state.playinglist.info}</h3>
	            				
	            			</div>
	            			
	            		
	            	}


				</div>
			<div className="img">
			<img src={img1}/>
				</div>
				<div className="money">
					<span className="jiage">￥</span>
					<span className="zero">0</span>
					<span className="em">/0</span>
					<button>立即抢购</button>
				</div>

				<div className="youhui">
					<p className="one">{this.state.asd.msg_name}{this.state.asd.msg_name}</p>
					<p className="two">{this.state.asd.subtitle}</p>
				</div>

				<div className="people">
				<span className="shop">
					<i className="iconfont icon-account"></i>
					7人已购买</span>
				</div>


				<div className="star">
					<p>暂无评价</p>
				</div>

				<div className="phone">
					<div className="phone2">
						<a className="add" href="http://m.1c10.cn/index.php?act=store&op=index&id=120">
						<p className="one">{this.state.add.name}</p>
						<p className="two">{this.state.add.address}</p>
						</a>
					</div>
						<a className="tell"></a>
				</div>

				<div className="dazhe">
					<span className="left">全场8.5折</span>
					<span className="right1">￥0</span>
					<span className="right2">￥0</span>
				</div>

				<div className="drink">
					
						<span className="first">全场8.5折（酒水饮料除外）</span>
						<span className="second">1份</span>
						<span className="third">元</span>
				</div>

				<div className="look">
					<a href="http://m.1c10.cn/index.php?act=deal&op=detail&id=6206">
						<p>查看图文详情></p>
					</a>
				</div>
				<div className="xiaofei">
					<p>消费提示</p>
				</div>

				<div className="tishi">
				{
					this.state.playinglist.map((item,index)=>
						<div className="box" key={new Date().getTime() + index}>
							<p className="p1">{item.title}</p>
							<p className="p2">-{item.info}</p>
						</div>
						)
				}
				
				</div>

				<div className="butn">
					<button>免费下载</button>
				</div>

				<div className="ben">
					<p>本商家其他优惠</p>
				</div>
				<div className="t1">
					<p className="t1_1">超值套餐2选1，美味停不下来！</p>
					<span>￥158</span>
				</div>
				<div className="t2">
					<p className="t2_2">4-6人餐，欢迎您和朋友一起来尝尝味道！</p>
					<span>￥158</span>
					</div>

				<Footer></Footer>		
			</div>
		)
	}
}

export default List;