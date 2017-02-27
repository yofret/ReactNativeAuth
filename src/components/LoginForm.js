//-------------------------------
// App Dependencies 
//-------------------------------

	import React, { Component } from 'react';
	import { Button, Card, CardSection, Input } from './common';

//-------------------------------
// LoginForm Component
//-------------------------------

	class LoginForm extends Component {
		//State
		state = {
			text: ''
		}

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
					<CardSection>
						<Input
							label={'Email'}
							value={this.state.text}
							onChangeText={text => this.setState({ text })}
						/>
					</CardSection>
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
