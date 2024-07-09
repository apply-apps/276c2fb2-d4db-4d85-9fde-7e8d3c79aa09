// Filename: index.js
// Combined code from all files

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, ScrollView, Button, FlatList, View } from 'react-native';

const initialWorkouts = [
  { id: '1', name: 'Push-ups', duration: '20 mins' },
  { id: '2', name: 'Running', duration: '30 mins' },
  { id: '3', name: 'Squats', duration: '15 mins' },
];

const WorkoutList = () => {
  const [workouts, setWorkouts] = useState(initialWorkouts);

  const renderItem = ({ item }) => (
    <View style={styles.workoutItem}>
      <Text style={styles.workoutName}>{item.name}</Text>
      <Text style={styles.workoutDuration}>{item.duration}</Text>
      <Button title="Complete" onPress={() => handleComplete(item.id)} />
    </View>
  );

  const handleComplete = (id) => {
    setWorkouts(prevWorkouts => prevWorkouts.filter(workout => workout.id !== id));
  };

  return (
    <FlatList
      data={workouts}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.list}
    />
  );
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Workout Tracker</Text>
      <WorkoutList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  list: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  workoutItem: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  workoutName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  workoutDuration: {
    fontSize: 14,
    color: 'gray',
  },
});