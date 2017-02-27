//-------------------------------
// App Dependencies 
//-------------------------------

	import React, { Component } from 'react';
	import { View, Text } from 'react-native';
	import { Header } from './components/common'

//-------------------------------
// App Component
//-------------------------------

	class App extends Component {
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
