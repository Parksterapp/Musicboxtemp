import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const UserProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>User Profile</Text>
      </View>
      <View style={styles.profileSection}>
        <Image
          source={require('avatar.jpg')}
          style={styles.profilePhoto}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Ashlee Lewis</Text>
          <Text style={styles.bio}>Music lover and aspiring artist</Text>
          <Text style={styles.location}>Location: Los Angeles, CA</Text>
          <View style={styles.socialLinks}>
            <TouchableOpacity style={styles.socialLink}>
              <Text style={styles.socialLinkText}>Instagram</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialLink}>
              <Text style={styles.socialLinkText}>Twitter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialLink}>
              <Text style={styles.socialLinkText}>Facebook</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.settingsSection}>
        <Text style={styles.sectionTitle}>Settings</Text>
        <TouchableOpacity style={styles.settingOption}>
          <Text style={styles.settingOptionText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingOption}>
          <Text style={styles.settingOptionText}>Delete Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingOption}>
          <Text style={styles.settingOptionText}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingOption}>
          <Text style={styles.settingOptionText}>Color Theme</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingOption}>
          <Text style={styles.settingOptionText}>Language</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingOption}>
          <Text style={styles.settingOptionText}>Profile Visibility</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingOption}>
          <Text style={styles.settingOptionText}>Location Sharing</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingOption}>
          <Text style={styles.settingOptionText}>Ad Preferences</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.paymentSection}>
        <Text style={styles.sectionTitle}>Payment Information</Text>
        <TouchableOpacity style={styles.paymentOption}>
          <Text style={styles.paymentOptionText}>Add/Update Payment Methods</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.paymentOption}>
          <Text style={styles.paymentOptionText}>Billing Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.paymentOption}>
          <Text style={styles.paymentOptionText}>Payment History</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.savedDataSection}>
        <Text style={styles.sectionTitle}>Saved Data</Text>
        <TouchableOpacity style={styles.savedDataOption}>
          <Text style={styles.savedDataOptionText}>Bookmarks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.savedDataOption}>
          <Text style={styles.savedDataOptionText}>Playlists</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.savedDataOption}>
          <Text style={styles.savedDataOptionText}>Favorites</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileSection: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  profileInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
  },
  location: {
    fontSize: 16,
    marginBottom: 10,
  },
  socialLinks: {
    flexDirection: 'row',
g ); };

const styles = StyleSheet.create({ container: { flex: 1, paddingHorizontal: 20, paddingTop: 20, }, header: { marginBottom: 20, }, title: { fontSize: 24, fontWeight: 'bold', }, profileSection: { flexDirection: 'row', alignItems: 'center', marginBottom: 20, }, profilePhoto: { width: 100, height: 100, borderRadius: 50, marginRight: 20, }, profileInfo: { flex: 1, }, name: { fontSize: 20, fontWeight: 'bold', marginBottom: 5, }, bio: { fontSize: 16, marginBottom: 5, }, location: { fontSize: 16, }, socialLinks: { flexDirection: 'row', marginTop: 10, }, socialLink: { marginRight: 10, paddingVertical: 5, paddingHorizontal: 10, backgroundColor: '#e0e0e0', borderRadius: 5, }, socialLinkText: { fontSize: 14, }, settingsSection: { marginBottom: 20, }, sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10, }, settingOption: { marginBottom: 10, }, settingOptionText: { fontSize: 16, }, });
export default UserProfileScreen;
