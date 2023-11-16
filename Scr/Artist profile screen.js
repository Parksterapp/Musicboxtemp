import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ArtistProfileScreen = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isArtistBooked, setIsArtistBooked] = useState(false);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  const handleBookArtist = () => {
    setIsArtistBooked(!isArtistBooked);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/artist-profile-picture.jpg')}
        style={styles.artistImage}
      />
      <Text style={styles.artistName}>John Smith</Text>
      <Text style={styles.artistBio}>
        John Smith is a talented musician with a passion for creating soulful melodies. His music blends elements of jazz, blues, and rock, captivating audiences with his unique sound.
      </Text>
      <TouchableOpacity style={styles.followButton} onPress={handleFollow}>
        <Text style={styles.followButtonText}>
          {isFollowing ? 'Unfollow' : 'Follow'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bookButton} onPress={handleBookArtist}>
        <Text style={styles.bookButtonText}>
          {isArtistBooked ? 'Cancel Booking' : 'Book Artist'}
        </Text>
      </TouchableOpacity>
      <Text style={styles.sectionTitle}>Popular Songs</Text>
      <View style={styles.songContainer}>
        <Image
          source={require('./assets/song1.jpg')}
          style={styles.songImage}
        />
        <Text style={styles.songTitle}>Song 1</Text>
      </View>
      <View style={styles.songContainer}>
        <Image
          source={require('./assets/song2.jpg')}
          style={styles.songImage}
        />
        <Text style={styles.songTitle}>Song 2</Text>
      </View>
      <View style={styles.songContainer}>
        <Image
          source={require('./assets/song3.jpg')}
          style={styles.songImage}
        />
        <Text style={styles.songTitle}>Song 3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  artistImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 16,
  },
  artistName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  artistBio: {
    marginBottom: 16,
  },
  followButton: {
    backgroundColor: 'blue',
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
  },
  followButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bookButton: {
    backgroundColor: 'green',
    padding: 8,
    borderRadius: 8,
  },
  bookButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  songContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  songImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 8,
  },
  songTitle: {
    fontSize: 16,
  },
});

export default ArtistProfileScreen;
