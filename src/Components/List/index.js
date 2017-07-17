import React,{Component} from "react";
import "./index.scss";
import Footer from "../Footer/index";
import "../Footer/index.scss";
import img1 from "./img/1.jpg";
import "../../assets/iconfont/iconfont.css";
class List extends Component{
	constructor(props) {
		super(props);
		
	}


	render() {
		return (

			<div id="List">
				<div className="head">

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
					<p className="one">老香樟传家菜老香樟传家菜</p>
					<p className="two">老香樟传家菜全场8.5折！</p>
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
						<p className="one">老香樟传家菜</p>
						<p className="two">桐乡茅盾东路52号（大发大转盘往西100米）</p>
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
				<p className="p1">有效期</p>
				<p className="p2">-项目长期有效，下架提醒请关注“剩余时间”</p>
				<p className="p1">使用时间</p>
				<p className="p2">-10:30-20:00</p>
				<p className="p1">预约方式</p>
				<p className="p2">-无需预约，咨询请致电商家</p>
				<p className="p1">温馨提示</p>
				<p className="p2">-不与商家店内活动同时使用</p>
				<p className="p2">-为保证您的权益，请免费下载一传十传百优惠券，到店消费付款让您更放心！</p>
				<p className="p1">其他费用</p>
				<p className="p2">-餐具1元/份，米饭1元/碗</p>
				<p className="p1">商家服务</p>
				<p className="p2">-提供免费WiFi</p>
				<p className="p2">-提供免费停车位</p>
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