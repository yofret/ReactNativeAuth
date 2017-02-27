//-------------------------------
// App Dependencies 
//-------------------------------

	import React, { Component } from 'react';
	import { View, Text } from 'react-native';
	import firebase from 'firbase';
	import { Header } from './components/common';

//-------------------------------
// App Component
//-------------------------------

	class App extends Component {
		//State
		state = {}

		//Life cycle methods
		componentWillMount() {
			firebase.initializeApp({
				apiKey: "AIzaSyACa_PPn-t8QFOat6g-BzQ2-mAeVeDsxYM",
				authDomain: "auth-f35b9.firebaseapp.com",
				databaseURL: "https://auth-f35b9.firebaseio.com",
				storageBucket: "auth-f35b9.appspot.com",
				messagingSenderId: "678321840160"
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
					<Text>An App!</Text>
				</View>
			);
		}					
	}

//-------------------------------
// Export Component
//-------------------------------

	export default App;
