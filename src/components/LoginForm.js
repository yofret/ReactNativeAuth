//-------------------------------
// App Dependencies 
//-------------------------------

	import React, { Component } from 'react';
	import { View } from 'react-native';
	import { Button, Card, CardSection } from './common';

//-------------------------------
// LoginForm Component
//-------------------------------

	class LoginForm extends Component {
		//State
		state = {}

		//Life cycle methods
		componentWillMount() {}

		componentDidMount() {}

		componentWillReceiveProps(nextProps) {}

		componentWillUpdate(nextProps, nextState) {}

		componentDidUpdate(prevProps, prevState) {}		

		// Render methods
		render() {
			return (
				<Card>
					<CardSection />
					<CardSection />
					<CardSection>
						<Button>
							Log in
						</Button>
					</CardSection>
				</Card>
			);
		}					
	}

//-------------------------------
// Export Component
//-------------------------------

	export default LoginForm;
