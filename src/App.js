import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import MessagesContainer from './components/Messages/MessagesContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './Redux/app-reducer';
import Preloader from './components/Common/Preloader/Preloader';

const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

class App extends React.Component {
	componentDidMount() {
		this.props.initializeApp();
	}

	render() {
		if (!this.props.initialized) {
			return <Preloader />
		}

		return (
			<BrowserRouter>
				<div className="app-wrapper">
					<HeaderContainer />
					<div className="app-content-wrapper">
						<div className="app-content-grid">
							<Navbar />
							<div className="app-content">
								<div className="app-content-container">
									<Route path='/'
										render={() => <Redirect to={"/profile"} />} />
									<Route path='/messages'
										render={() => <MessagesContainer />} />
									<Route path='/profile/:userId?'
										render={() => <ProfileContainer />} />
									<Route path='/users'
										render={() =>
											<Suspense fallback={<div>Loading...</div>}>
												<UsersContainer />
											</Suspense>} />
									<Route path='/news' render={() => <News />} />
									<Route path='/music' render={() => <Music />} />
									<Route path='/login' render={() => <Login />} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</BrowserRouter>
		);
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
})

export default connect(mapStateToProps, { initializeApp })(App);