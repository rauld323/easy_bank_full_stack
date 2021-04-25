import "./App.css";
import {useState} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//Screens
import HomeScreen from './screens/HomeScreen';
import CurrencyScreen from './screens/CurrencyScreen';

//components
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import TopDrawer from './components/TopDrawer';
import Footer from './components/Footer';

function App() {
	// Toggle State
	const [topToggle, setTopToggle] = useState(false)

	return (
		<Router>
			<Navbar click={() => setTopToggle(true)} />
			<TopDrawer show={topToggle} click={() => setTopToggle(false)}/>
			<Backdrop show={topToggle} click={() => setTopToggle(false)}/>
			<main>
				<Switch>
					<Route exact path="/" component={HomeScreen} />
          <Route exact path="/CurrencyScreen" component={CurrencyScreen} />
				</Switch>
			</main>
			<Footer />
		</Router>
	);
}

export default App
