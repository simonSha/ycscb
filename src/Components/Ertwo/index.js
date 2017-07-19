import React,{Component} from "react";
import "./index.scss";
import axios from "axios";

class Ertwo extends Component{
	constructor(props) {
		super(props);
		this.state = {
			twolist:[],
			twoFenlei:[]
		}
	}

	componentDidMount() {
		axios.get("/index.php?act=list&op=getYouhuiClass&cate=meishi").then((res)=>{
			this.setState({
				twolist:res.data.data.city.data,
				onelistUl:res.data.data.city.sub

			})
			 
			 console.log(this.state.twolist);
			
		})
		
	}

	render() {
		return (

			<div id="two">
				{
						this.state.twolist.map((item,index)=>
							<ul>

							
							<li className="twoli1" key={item.id}>{item.name} <span>({item.count})</span> 

							</li>

							</ul>
						)		
				}	
			</div>
		)
	}
}

export default Ertwo;