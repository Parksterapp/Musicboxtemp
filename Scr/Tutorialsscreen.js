import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const TutorialScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>App Tutorials</Text>
      </View>
      <View style={styles.tutorialSection}>
        <Text style={styles.tutorialTitle}>Welcome to Gigify!</Text>
        <Text style={styles.tutorialDescription}>
          Get started with Gigify by following these simple steps:
        </Text>
        <View style={styles.stepContainer}>
          <Text style={styles.stepNumber}>1</Text>
          <Text style={styles.stepText}>
            Sign up for a Gigify account using your email address or social media accounts.
          </Text>
        </View>
        <View style={styles.stepContainer}>
          <Text style={styles.stepNumber}>2</Text>
          <Text style={styles.stepText}>
            Complete your profile by adding a profile picture, bio, and social media links.
          </Text>
        </View>
        <View style={styles.stepContainer}>
          <Text style={styles.stepNumber}>3</Text>
          <Text style={styles.stepText}>
            Use the Gig Search feature to find artists and events based on location, genre, and availability filters.
          </Text>
        </View>
        <View style={styles.stepContainer}>
          <Text style={styles.stepNumber}>4</Text>
          <Text style={styles.stepText}>
            Explore the Account Management section to customize your profile, manage payment methods, and view account history.
          </Text>
        </View>
        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  tutorialSection: {
    flex: 1,
    justifyContent: 'center',
  },
  tutorialTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tutorialDescription: {
    fontSize: 16,
    marginBottom: 20,
  },
  stepContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  stepNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  stepText: {
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  nextButtonText: {
    fontSize: 16,
  },
});

export default TutorialScreen;
