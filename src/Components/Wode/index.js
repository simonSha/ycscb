import React,{Component} from "react";
import "./index.scss";
import "./font/iconfont.css"


class Wode extends Component{
	constructor(props) {
		super(props);
		
	}


	render() {
		return (
			<div id="fu">
			<div className="zhanghu">
				<img src="src/assets/img/user.gif" />
				<p className="zhm">用户名:</p>
				<p className="ye">账户余额:</p>
			</div>
			<ul className="you">
				<li className="you_1"><i className="iconfont icon-youhui">我的优惠券</i>
				<img src="src/assets/img/arrow_right.png" />
				</li>
				<li className="you_2"><i className="iconfont icon-pinglun-copy">我的评论</i>
				<img src="src/assets/img/arrow_right.png" />

				</li>
				<li className="you_3"><i className="iconfont icon-xieyi-copy">查看用户服务协议</i>
				<img src="src/assets/img/arrow_right.png" />

				</li>

			</ul>
			<div></div>



			</div>
		)
	}
}


export default Wode;