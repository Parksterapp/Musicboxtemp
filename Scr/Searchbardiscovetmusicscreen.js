import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';

const SearchAndDiscoveryScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);

  const handleSearch = () => {
    if (searchQuery) {
      // Perform search logic here
      const results = performSearch(searchQuery);
      setSearchResults(results);

      // Update search history
      setSearchHistory(prevHistory => [searchQuery, ...prevHistory]);
    }
  };

  const performSearch = (query) => {
    // Placeholder function for search logic
    // Replace with your own implementation
    // Example: Searching from a music library
    const musicLibrary = [
      { title: 'Song 1', artist: 'Artist 1', album: 'Album 1' },
      { title: 'Song 2', artist: 'Artist 2', album: 'Album 2' },
      { title: 'Song 3', artist: 'Artist 1', album: 'Album 3' },
      // Add more songs, artists, and albums
    ];

    const results = musicLibrary.filter(item => {
      const { title, artist, album } = item;
      return (
        title.toLowerCase().includes(query.toLowerCase()) ||
        artist.toLowerCase().includes(query.toLowerCase()) ||
        album.toLowerCase().includes(query.toLowerCase())
      );
    });

    return results;
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search songs, artists, albums"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <Button title="Search" onPress={handleSearch} />

      <Text style={styles.sectionTitle}>Search Results:</Text>
      <FlatList
        data={searchResults}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.searchResultItem}>
            <Text style={styles.searchResultText}>{item.title}</Text>
            <Text style={styles.searchResultText}>{item.artist}</Text>
            <Text style={styles.searchResultText}>{item.album}</Text>
          </View>
        )}
      />

      <Text style={styles.sectionTitle}>Search History:</Text>
      <FlatList
        data={searchHistory}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.searchHistoryItem}>{item}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  searchResultItem: {
    marginBottom: 8,
  },
  searchResultText: {
    fontSize: 16,
  },
  searchHistoryItem: {
    fontSize: 16,
    marginBottom: 4,
  },
});

export default SearchAndDiscoveryScreen;
