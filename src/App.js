import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import MessagesContainer from './components/Messages/MessagesContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import UsersContainer from './components/Users/UsersContainer';

const App = () => {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<Navbar />
				<div className="app-content">
					<Route path='/messages' 
						render={ () => <MessagesContainer /> }/>
					<Route path='/profile' 
						render={ () => <Profile /> }/>
					<Route path='/users' 
						render={ () => <UsersContainer /> }/>
					<Route path='/news' render={ () => <News />} />
					<Route path='/music' render={ () => <Music /> }/>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;