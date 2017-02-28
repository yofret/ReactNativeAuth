//-------------------------------
// App Dependencies 
//-------------------------------

	import React, { Component } from 'react';
	import { View } from 'react-native';
	import firebase from 'firebase';
	import { Header, Button, CardSection, Spinner } from './components/common';
	import LoginForm from './components/LoginForm';

//-------------------------------
// App Component
//-------------------------------

	class App extends Component {
		//State
		state = { loggedIn: null }

		//Life cycle methods
		componentWillMount() {
			firebase.initializeApp({
				apiKey: "AIzaSyACa_PPn-t8QFOat6g-BzQ2-mAeVeDsxYM",
				authDomain: "auth-f35b9.firebaseapp.com",
				databaseURL: "https://auth-f35b9.firebaseio.com",
				storageBucket: "auth-f35b9.appspot.com",
				messagingSenderId: "678321840160"
			})

			firebase.auth().onAuthStateChanged((user) => {
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

		// Methods
		renderContent() {

			switch (this.state.loggedIn) {
				case true:
					return (
						<CardSection>
							<Button onPress={() => firebase.auth().signOut()}>
								Log out
							</Button>
						</CardSection>
					)
				case false:
					return <LoginForm />
				default:
					return (
						<View style={styles.spinnerContainer}>
							<Spinner size='large' />
						</View>
					);
			}
		}	

		// Render methods
		render() {
			return (
				<View style={{ flex: 1 }}>
					<Header headerText='Authentication' />
					{this.renderContent()}
				</View>
			);
		}					
	}

	const styles = {
		spinnerContainer: {
			flex: 1
		}
	}

//-------------------------------
// Export Component
//-------------------------------

	export default App;
