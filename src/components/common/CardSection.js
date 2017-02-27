//-------------------------------
// App Dependencies 
//-------------------------------

	import React from 'react';
	import { View } from 'react-native';

//-------------------------------
// CardSection Component
//-------------------------------

	const CardSection = (props) => {

		return (
			<View style={style.containerStyle}>
				{props.children}
			</View>
		);
	};

	const style = {
		containerStyle: {
			borderBottomWidth: 1,
			padding: 5,
			backgroundColor: '#FFF',
			justifyContent: 'flex-start',
			flexDirection: 'row',
			borderColor: '#DDD',
			position: 'relative'
		}
	};

//-------------------------------
// Export Component
//-------------------------------
	export default CardSection;
