import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import UserPage from "./pages/UserPage";
import Header from "./components/Header";

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Header />
				<Switch>
					<Route exact path="/">
						<Redirect to="/user/12" />
					</Route>
					<Route path="/user/:id" component={UserPage} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
