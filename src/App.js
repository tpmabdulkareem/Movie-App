import React from "react";
import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import routes from "./routes";
import MainScreen from "./pages/MainScreen/MainScreen";
import SearchScreen from "./pages/SearchScreen/SearchScreen";
function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path={routes.search.path} component={SearchScreen} />
				<Route path={routes.home.path} component={MainScreen} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
