//-------------------------------
// App Dependencies 
//-------------------------------

	import React, { Component } from 'react';
	import { Text } from 'react-native';
	import firebase from 'firebase';
	import { Button, Card, CardSection, Input, Spinner } from './common';

//-------------------------------
// LoginForm Component
//-------------------------------

	class LoginForm extends Component {
		//State
		state = {
			email: '',
			password: '',
			error: '',
			loading: false
		}

		//Life cycle methods
		componentWillMount() {}

		componentDidMount() {}

		componentWillReceiveProps(nextProps) {}

		componentWillUpdate(nextProps, nextState) {}

		componentDidUpdate(prevProps, prevState) {}

		// Methods
		onButtonPress() {
			const { email, password } = this.state;

			this.setState({ error: '', loading: true});

			firebase.auth().signInWithEmailAndPassword(email, password)
				.then(this.onLoginSuccess.bind(this))
				.catch(() => {
					firebase.auth().createUserWithEmailAndPassword(email, password)
						.then(this.onLoginSuccess.bind(this))
						.catch(this.onLoginFailed.bind(this))
				})
		}

		onLoginFailed() {
			this.setState({ error: 'Authentication Failed.', loading: false })
		}

		onLoginSuccess() {
			this.setState({
				email: '',
				password: '',
				loading: false,
				error: ''
			})
		}

		renderButton() {
			if(this.state.loading) {
				return <Spinner size={'small'}/>
			}

			return (
				<Button onPress={this.onButtonPress.bind(this)}>
					Log in
				</Button>
			);
		}		

		// Render methods
		render() {
			return (
				<Card>
					<CardSection>
						<Input
							label={'Email'}
							placeholder={'user@gmail.com'}
							value={this.state.email}
							onChangeText={email => this.setState({ email })}
						/>
					</CardSection>
					<CardSection>
						<Input
							secureTextEntry
							label={'Password'}
							placeholder={'password'}
							value={this.state.password}
							onChangeText={password => this.setState({ password })}
						/>
					</CardSection>
					<Text style={styles.errorTextStyle}>
						{this.state.error}
					</Text>
					<CardSection>
						{this.renderButton()}
					</CardSection>
				</Card>
			);
		}					
	}

	const styles = {
		errorTextStyle: {
			fontSize: 20,
			alignSelf: 'center',
			color: 'red'
		}
	}

//-------------------------------
// Export Component
//-------------------------------

	export default LoginForm;
