import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const UserProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/user-profile-picture.jpg')}
        style={styles.profileImage}
      />
      <Text style={styles.userName}>Ashlee Lewis</Text>
      <Text style={styles.userBio}>
        I am a passionate music lover and enjoy attending live concerts. Gigify has been a great platform for discovering new artists and booking performances.
      </Text>
      <Text style={styles.sectionTitle}>Account Settings</Text>
      <TouchableOpacity style={styles.settingContainer}>
        <Text style={styles.settingLabel}>Privacy</Text>
        <Text style={styles.settingValue}>Public</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingContainer}>
        <Text style={styles.settingLabel}>App Preferences</Text>
        <Text style={styles.settingValue}>Notifications On</Text>
      </TouchableOpacity>
      <Text style={styles.sectionTitle}>Billing</Text>
      <TouchableOpacity style={styles.billingContainer}>
        <Text style={styles.billingLabel}>Payment Method</Text>
        <Text style={styles.billingValue}>**** **** **** 1234</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.billingContainer}>
        <Text style={styles.billingLabel}>Billing Address</Text>
        <Text style={styles.billingValue}>123 Main St, Anytown, USA</Text>
      </TouchableOpacity>
      <Text style={styles.sectionTitle}>Social Features</Text>
      <TouchableOpacity style={styles.socialFeature}>
        <Text style={styles.socialFeatureLabel}>Followers</Text>
        <Text style={styles.socialFeatureValue}>2.5K</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialFeature}>
        <Text style={styles.socialFeatureLabel}>Following</Text>
        <Text style={styles.socialFeatureValue}>1.2K</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialFeature}>
        <Text style={styles.socialFeatureLabel}>Shared Playlists</Text>
        <Text style={styles.socialFeatureValue}>15</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  userBio: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  settingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  settingLabel: {
    fontWeight: 'bold',
  },
  settingValue: {
    color: 'gray',
  },
  billingContainer: {
    marginBottom: 8,
  },
  billingLabel: {
    fontWeight: 'bold',
  },
  billingValue: {
    color: 'gray',
  },
  socialFeature: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  socialFeatureLabel: {
    fontWeight: 'bold',
  },
  socialFeatureValue: {
    color: 'gray',
  },
});

export default UserProfileScreen;
