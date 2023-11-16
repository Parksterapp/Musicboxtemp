import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const BookingScreen = () => {
  const [artist, setArtist] = useState('');
  const [date, setDate] = useState('');
  const [formError, setFormError] = useState('');

  const handleSubmit = () => {
    if (artist && date) {
      // Perform the booking logic here
      console.log('Booking submitted:', artist, date);
      setArtist('');
      setDate('');
      setFormError('');
      // Additional feature: Display a success message or navigate to a confirmation screen
      alert('Booking submitted successfully!');
    } else {
      setFormError('Please fill in all fields');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book an Artist</Text>
      {formError ? <Text style={styles.error}>{formError}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Artist Name"
        value={artist}
        onChangeText={setArtist}
      />
      <TextInput
        style={styles.input}
        placeholder="Event Date"
        value={date}
        onChangeText={setDate}
      />
      <Button title="Submit Booking" onPress={handleSubmit} />
      {/* Additional feature: Include a cancel button */}
      <Button title="Cancel" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  error: {
    color: 'red',
    marginBottom: 16,
  },
});

export default BookingScreen;
