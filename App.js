import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Map, Modal, Panel, Input, List } from './components';

export default function App() {
	const [name, setName] = useState('');
	const [typeView, setTypeView] = useState('new_point'); // new_point, all_points
	const [points, setPoints] = useState([]);
	const [tempPoints, setTempPoint] = useState(null);
	const [isModalVisible, setModal] = useState(false);
	const [pointsFilter, setPointsFilter] = useState(true);

	const handleLongPress = ({ nativeEvent }) => {
		setTypeView('new_point');
		setTempPoint(nativeEvent.coordinate);
		setModal(!isModalVisible);
	};

	const handleSubmit = () => {
		const singlePoint = { name, coordinate: tempPoints };
		setPoints(points.concat(singlePoint));
		setModal(!isModalVisible);
		setName('');
	};

	const handleList = () => {
		setTypeView('all_points');
		setModal(!isModalVisible);
	};

	const togglePoints = () => setPointsFilter(!pointsFilter);

	return (
		<View style={styles.container}>
			<Map onLongPress={handleLongPress} points={points} pointsFilter={pointsFilter} />
			<Panel onPressLeft={handleList} textLeft="Lista" togglePoints={togglePoints} />
			<Modal visible={isModalVisible}>
				{typeView === 'new_point' ? (
					<View style={styles.form}>
						<Input title="Nombre" placeholder="Nombre del punto" onChangeText={setName} />
						<View style={styles.buttton}>
							<Button title="Aceptar" onPress={handleSubmit} />
						</View>
					</View>
				) : (
					<List points={points} onCloseModal={() => setModal(!isModalVisible)} />
				)}
			</Modal>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	form: {
		padding: 20,
	},
	buttton: {
		paddingTop: 16,
	},
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
});
