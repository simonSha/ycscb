
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
import User from "./Components/User/index";
import Zhdr from "./Components/zhdr/index";
import Sjdxdr from "./Components/sjdxdr/index";
import Wjmm from "./Components/wjmm/index";
import Map from "./Components/Map/index";
import Erone from "./Components/Erone/index";
import Ertwo from "./Components/Ertwo/index";
import Erthree from "./Components/Erthree/index";
import New from "./Components/New/index";
import Denglu from "./Components/Denglu/index";
import Zhuce from "./Components/Zhuce/index";
import List from "./Components/List/index";
import Car from "./Components/Car/index";
import {
	HashRouter as Router,
	Route,
	Switch,
	Redirect
} from "react-router-dom"

const router = (
	<Router>
		<App>
			<Switch>
				<Route path="/home" component={Home}/>
				<Route path="/food" render={()=>
					<Food>						
						<Route path="/food/erone" component={Erone}/>
						<Route path="/food/ertwo" component={Ertwo}/>
						<Route path="/food/erthree" component={Erthree}/>						
					</Food>
				}/>					
				<Route path="/all" component={All}/>
				<Route path="/film" component={Film}/>
				<Route path="/hotel" component={Hotel}/>
				<Route path="/ktv" component={KTV}/>
				<Route path="/life" component={Life}/>
				<Route path="/quan" component={Quan}/>
				<Route path="/travel" component={Travel}/>
				<Route path="/user" render={()=>
					<User>
					<Switch>
					<Route path="/user/zhdr" component={Zhdr}/>
				    <Route path="/user/sjdxdr" component={Sjdxdr}/>
				    <Route path="/user/zhuce" component={Zhuce}/>
				    <Route path="/user/wjmm" component={Wjmm}/>
				    <Redirect from="/user" to="/user/zhdr"/>
				    </Switch>
				    </User>
				}/>
				<Route path="/map" component={Map}/>
				<Route path="/new" component={New}/>
				<Route path="/denglu" component={Denglu}/>
				<Route path="/zhuce" component={Zhuce}/>
				<Route path="/list" component={List}/>
				<Route path="/car" component={Car}/>
				<Route path="/header" component={Header}/>
				<Route path="/footer" component={Footer}/>
				<Redirect from="/" to='home'/>																
			</Switch>				
		</App>
	</Router>
)

export default router;