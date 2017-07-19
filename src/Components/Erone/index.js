import React,{Component} from "react";
import "./index.scss";
import axios from "axios";

import {
	NavLink
} from "react-router-dom";

class Erone extends Component{
	constructor(props) {
		super(props);
		this.state = {
			onelist:[],
			oneFenlei:[]
		}
		
	}

	componentDidMount() {
		axios.get("/index.php?act=list&op=getYouhuiClass&cate=meishi").then((res)=>{
			this.setState({
				onelist:res.data.data.cate.data,
				onelistUl:res.data.data.cate.sub

			})
			 
			 console.log(this.state.onelistUl);

			
		})

		
		
	}


	render() {
		return (

			<div id="one">
				
					{
						this.state.onelist.map((item,index)=>
							<ul>

							
							<li className="oneli1" key={item.id}>{item.name} <span>({item.count})</span> 

							</li>

							</ul>
						)		
					}	

				<section>
						{this.props.children}
				</section>		
			</div>
		)
	}
}

export default Erone;