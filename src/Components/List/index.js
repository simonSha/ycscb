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
			dazhe1:[],
			youhui:[],
			youhui2:[]
			
			
		}
	}
    componentDidMount() {
		//当前页面传来的参数通过以下方法获取
		console.log(this.props.match.params);
		axios.get("index.php?act=deal&op=index&id="+this.props.match.params.likeID+"&ajax=1").then(res=>{
			console.log(res.data);

			this.setState({
				playinglist:res.data.buyinfo_list,
				asd:res.data.youhui_info,
				add:res.data.store,
				dazhe:res.data.table_list[0],
				dazhe1:res.data.table_list[0].data[0].list[0],
				youhui:res.data.youhui_other[0]?(res.data.youhui_other[0]):(''),
				youhui2:res.data.youhui_other[1]?(res.data.youhui_other[1]):('')
				


			})
			
		})
	}

	



	render() {
		return (
			

			<div id="List">

			<div className="img">
				<img  src={this.state.asd.image_320}/>
			</div>
			<div className="money">
				<span className="jiage">￥</span>
				<span className="zero">{this.state.asd.price}</span>
				<span className="em">/{this.state.asd.origin_price}</span>
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
					<span className="left">{this.state.dazhe.name}</span>
					<span className="right1">￥{this.state.dazhe.origin_price}</span>
					<span className="right2">￥{this.state.dazhe.price}</span>
				</div>

				<div className="drink">
					
						<span className="first">{this.state.dazhe1.name}</span>
						<span className="second">{this.state.dazhe1.amount}</span>
						<span className="third">{this.state.dazhe1.subtotal}元</span>
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
					<p className="t1_1">{this.state.youhui.subtitle?(this.state.youhui.subtitle):('')}</p>
					<span>￥{this.state.youhui.price}</span>
				</div>
				<div className="t2">
					<p className="t2_2">{this.state.youhui2.subtitle?(this.state.youhui2.subtitle):('')}</p>
					<span>￥{this.state.youhui2.price}</span>
					</div>

				<Footer></Footer>		
						
			</div>
		)
	}
}

export default List;
	
