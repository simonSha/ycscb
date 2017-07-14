/*路由配置模块*/
import React from "react";
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
}from "react-router-dom"

const router = (
	<Router>
		<App>
			<Route path="/all" component={All}></Route>
			<Route path="/film" component={Film}></Route>
			<Route path="/food" component={Food}></Route>
			<Route path="/hotel" component={Hotel}></Route>
			<Route path="/ktv" component={KTV}></Route>
			<Route path="/life" component={Life}></Route>
			<Route path="/quan" component={Quan}></Route>
			<Route path="/travel" component={Travel}></Route>
			<Route path="/header" component={Header}></Route>
			<Route path="/footer" component={Footer}></Route>
		</App>
	</Router>
)

export default router;