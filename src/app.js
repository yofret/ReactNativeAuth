//-------------------------------
// App Dependencies 
//-------------------------------

	import React, { Component } from 'react';
	import { View } from 'react-native';
	import firebase from 'firebase';
	import { Header } from './components/common';
	import LoginForm from './components/LoginForm';

//-------------------------------
// App Component
//-------------------------------

	class App extends Component {
		//State
		state = { loggedIn: false }

		//Life cycle methods
		componentWillMount() {
			firebase.initializeApp({
				apiKey: "AIzaSyACa_PPn-t8QFOat6g-BzQ2-mAeVeDsxYM",
				authDomain: "auth-f35b9.firebaseapp.com",
				databaseURL: "https://auth-f35b9.firebaseio.com",
				storageBucket: "auth-f35b9.appspot.com",
				messagingSenderId: "678321840160"
			})

			firebase.auth.onAuthStateChanged((user) => {
				if(user){
					this.setState({ loggedIn: true });
				} else {
					this.setState({ loggedIn: false });
				}
			})
		}

		componentDidMount() {}

		componentWillReceiveProps(nextProps) {}

		componentWillUpdate(nextProps, nextState) {}

		componentDidUpdate(prevProps, prevState) {}		

		// Render methods
		render() {
			return (
				<View>
					<Header headerText='Authentication' />
					<LoginForm />
				</View>
			);
		}					
	}

//-------------------------------
// Export Component
//-------------------------------

	export default App;
