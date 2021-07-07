import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default ({ onPressLeft, textLeft, togglePoints }) => {
	return (
		<View style={styles.panel}>
			<View style={styles.spacing}>
				<Button title={textLeft} onPress={onPressLeft} />
			</View>
			<View style={styles.spacing}>
				<Button title="Mostrar/Ocultar" onPress={togglePoints} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	panel: {
		flex: 1,
		width: '100%',
		flexDirection: 'row',
		backgroundColor: '#eee',
		justifyContent: 'center',
		alignItems: 'center',
	},
	spacing: {
		paddingLeft: 4,
		paddingRight: 4,
	},
});
