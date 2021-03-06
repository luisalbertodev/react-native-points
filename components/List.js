import React from 'react';
import { StyleSheet, FlatList, Text, View, Button, Dimensions } from 'react-native';

export default ({ points, onCloseModal }) => {
	return (
		<>
			<View style={styles.list}>
				<FlatList
					data={points.map((x) => x.name)}
					renderItem={({ item }) => (
						<View style={styles.item}>
							<Text>{item}</Text>
						</View>
					)}
					keyExtractor={(item) => item}
				/>
			</View>
			<View styles={styles.button}>
				<Button title="Cerrar" onPress={onCloseModal} />
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	button: {
		paddingBottom: 15,
	},
	list: {
		height: Dimensions.get('window').height - 250,
	},
	item: {
		borderBottomWidth: 1,
		borderColor: '#ccc',
		height: 50,
		justifyContent: 'center',
		padding: 15,
	},
});
