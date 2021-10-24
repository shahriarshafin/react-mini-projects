import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { About, Error, Home, Structures } from './pages/export';
function App() {
	return (
		<main>
			<Router>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/structures' component={Structures} />
					<Route path='/about' component={About} />
					<Route component={Error} />
				</Switch>
			</Router>
		</main>
	);
}

export default App;
