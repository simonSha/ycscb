
import React from "react";
import Home from "./Components/Home/index";
import All from "./Components/All/index";
import App from "./Components/App/index";
import Film from "./Components/Film/index";
import Food from "./Components/Food/index";
import Hotel from "./Components/Hotel/index";
import KTV from "./Components/KTV/index";
import Life from "./Components/Life/index";
import Quan from "./Components/Quan/index";
import Travel from "./Components/Travel/index";
import Header from "./Components/Header/index";
import Footer from "./Components/Footer/index";
import {
	HashRouter as Router,
	Route,
	Switch,
	Redirect
} from "react-router-dom"

const router = (
	<Router>
		<App>
			<Switch>{/*只匹配第一个符合条件的孩子组件*/}
				<Route path="/home" render={()=>
					<Home>
					
							<Route path="/all" component={All}/>
							<Route path="/film" component={Film}/>
							<Route path="/food" component={Food}/>
							<Route path="/hotel" component={Hotel}/>
							<Route path="/ktv" component={KTV}/>
							<Route path="/life" component={Life}/>
							<Route path="/quan" component={Quan}/>
							<Route path="/travel" component={Travel}/>
							<Route path="/header" component={Header}/>
							<Route path="/footer" component={Footer}/>
					
					</Home>
				}/>	
				<Redirect from="/" to='home'/>																
			</Switch>				
		</App>
	</Router>
)

export default router;