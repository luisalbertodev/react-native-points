import React from 'react';
import { StyleSheet, Modal, View, Dimensions } from 'react-native';

export default ({ children, visible }) => {
	return (
		<Modal visible={visible} statusBarTranslucent transparent animationType="slide">
			<View style={styles.center}>
				<View style={styles.modalView}>{children}</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	center: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(0,0,0,0.3)',
	},
	modalView: {
		minWidth: Dimensions.get('window').width - 100,
		backgroundColor: '#fff',
		borderRadius: 4,
		padding: 0,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 3,
		},
	},
});
