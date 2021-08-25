import './App.css'
import React from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom'
import Layout from './components/Layout'
import IntroPage from './components/IntroPage'
import Home from './components/Home'

function App() {
	const previouslyVisited = localStorage.getItem('visited')

	return (
		<Router>
			<Layout className='App'>
				<div className='App'>
					<Switch>
						<Route exact path='/'>
							{previouslyVisited ? <Redirect to='/home' /> : <IntroPage />}
						</Route>
						<Route path='/home' component={Home} />
						<Redirect to='/' />
					</Switch>
				</div>
			</Layout>
		</Router>
	)
}

export default App
