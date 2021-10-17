import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { About, Contact, Error, Home } from './pages/export';

function App() {
	return (
		<main>
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/contact" component={Contact} />
					<Route path="/about" component={About} />
					<Route component={Error} />
				</Switch>
			</Router>
		</main>
	);
}

export default App;
