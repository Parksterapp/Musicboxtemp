import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const HomeScreen = () => {
  const featuredArtists = [
    { id: 1, name: 'Artist 1', image: require('./assets/artist1.jpg') },
    { id: 2, name: 'Artist 2', image: require('./assets/artist2.jpg') },
    { id: 3, name: 'Artist 3', image: require('./assets/artist3.jpg') },
  ];

  const recentlyPlayed = [
    { id: 1, title: 'Song 1', artist: 'Artist 1', image: require('./assets/song1.jpg') },
    { id: 2, title: 'Song 2', artist: 'Artist 2', image: require('./assets/song2.jpg') },
    { id: 3, title: 'Song 3', artist: 'Artist 3', image: require('./assets/song3.jpg') },
  ];

  const popularPlaylists = [
    { id: 1, title: 'Playlist 1', curator: 'Curator 1', image: require('./assets/playlist1.jpg') },
    { id: 2, title: 'Playlist 2', curator: 'Curator 2', image: require('./assets/playlist2.jpg') },
    { id: 3, title: 'Playlist 3', curator: 'Curator 3', image: require('./assets/playlist3.jpg') },
  ];

  const featuredGenres = [
    { id: 1, name: 'Genre 1', image: require('./assets/genre1.jpg') },
    { id: 2, name: 'Genre 2', image: require('./assets/genre2.jpg') },
    { id: 3, name: 'Genre 3', image: require('./assets/genre3.jpg') },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>Featured Artists</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {featuredArtists.map(artist => (
          <View key={artist.id} style={styles.artistContainer}>
            <Image source={artist.image} style={styles.artistImage} />
            <Text style={styles.artistName}>{artist.name}</Text>
          </View>
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>Recent Releases</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {recentlyPlayed.map(song => (
          <View key={song.id} style={styles.recentReleaseContainer}>
            <Image source={song.image} style={styles.recentReleaseImage} />
            <Text style={styles.recentReleaseTitle}>{song.title}</Text>
            <Text style={styles.recentReleaseArtist}>{song.artist}</Text>
          </View>
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>Popular Playlists</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {popularPlaylists.map(playlist => (
          <View key={playlist.id} style={styles.playlistContainer}>
            <Image source={playlist.image} style={styles.playlistImage} />
            <Text style={styles.playlistTitle}>{playlist.title}</Text>
            <Text style={styles.playlistCurator}>{playlist.curator}</Text>
          </View>
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>Featured Genres</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {featuredGenres.map(genre => (
          <View key={genre.id} style={styles.genreContainer}>
            <Image source={genre.image} style={styles.genreImage} />
            <Text style={styles.genreName}>{genre.name}</Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  artistContainer: {
    marginRight: 16,
  },
  artistImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  artistName: {
    marginTop: 8,
    textAlign: 'center',
  },
  recentReleaseContainer: {
    marginRight: 16,
  },
          {popularPlaylists.map(playlist => (
          <View key={playlist.id} style={styles.playlistContainer}>
            <Image source={playlist.image} style={styles.playlistImage} />
            <Text style={styles.playlistTitle}>{playlist.title}</Text>
            <Text style={styles.playlistCurator}>{playlist.curator}</Text>
          </View>
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>Featured Genres</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {featuredGenres.map(genre => (
          <View key={genre.id} style={styles.genreContainer}>
            <Image source={genre.image} style={styles.genreImage} />
            <Text style={styles.genreName}>{genre.name}</Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  artistContainer: {
    marginRight: 12,
    alignItems: 'center',
  },
  artistImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  artistName: {
    marginTop: 8,
    textAlign: 'center',
  },
  recentReleaseContainer: {
    marginRight: 12,
    width: 160,
  },
  recentReleaseImage: {
    width: '100%',
    height: 160,
    borderRadius: 8,
  },
  recentReleaseTitle: {
    marginTop: 8,
    fontWeight: 'bold',
  },
  recentReleaseArtist: {
    color: 'gray',
  },
  playlistContainer: {
    marginRight: 12,
    width: 160,
  },
  playlistImage: {
    width: '100%',
    height: 160,
    borderRadius: 8,
  },
  playlistTitle: {
    marginTop: 8,
    fontWeight: 'bold',
  },
  playlistCurator: {
    color: 'gray',
  },
  genreContainer: {
    marginRight: 12,
    alignItems: 'center',
  },
  genreImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  genreName: {
    marginTop: 8,
    textAlign: 'center',
  },
});

export default HomeScreen;
