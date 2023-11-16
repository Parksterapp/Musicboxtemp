import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

const GenreSelectionScreen = () => {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleGenreSelection = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((selectedGenre) => selectedGenre !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  const genres = [
    'Pop',
    'Rock',
    'Hip Hop',
    'Electronic',
    'R&B',
    'Country',
    'Jazz',
    'Reggae',
    'Classical',
  ];

  const filteredGenres = genres.filter((genre) =>
    genre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Preferred Genres</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search genres"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <View style={styles.genreContainer}>
        {filteredGenres.map((genre) => (
          <TouchableOpacity
            key={genre}
            style={[
              styles.genreButton,
              selectedGenres.includes(genre) && styles.selectedGenreButton,
            ]}
            onPress={() => toggleGenreSelection(genre)}
          >
            <Text
              style={[
                styles.genreButtonText,
                selectedGenres.includes(genre) && styles.selectedGenreButtonText,
              ]}
            >
              {genre}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.resetButton} onPress={() => setSelectedGenres([])}>
        <Text style={styles.resetButtonText}>Reset</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.saveButton} onPress={() => console.log(selectedGenres)}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  genreContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  genreButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    margin: 8,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'gray',
  },
  selectedGenreButton: {
    backgroundColor: 'gray',
  },
  genreButtonText: {
    fontSize: 16,
  },
  selectedGenreButtonText: {
    color: 'white',
  },
  resetButton: {
    marginTop: 16,
    alignSelf: 'center',
  },
  resetButtonText: {
    fontSize: 16,
    color: 'red',
  },
  saveButton: {
    marginTop: 16,
    alignSelf: 'center',
  },
  saveButtonText: {
    fontSize: 16,
    color: 'blue',
  },
});

export default GenreSelectionScreen;
