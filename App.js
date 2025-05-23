import React from 'react';
import { ScrollView, View, Text, Image, ImageBackground, StyleSheet } from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={require('./assets/banner.jpg')}
        style={styles.banner}
      >
        <Text style={styles.bannerText}>Welcome to Music App</Text>
      </ImageBackground>

      <Text style={styles.sectionTitle}>Your Playlists</Text>
      <View style={styles.playlistContainer}>
        <View style={styles.playlistCard}>
          <Image source={require('./assets/playlist1.jpg')} style={styles.playlistImage} />
          <Text style={styles.playlistName}>Chill Beats</Text>
        </View>
        
        <View style={styles.playlistCard}>
          <Image source={require('./assets/playlist2.jpg')} style={styles.playlistImage} />
          <Text style={styles.playlistName}>Workout Hits</Text>
        </View>
        
      </View>

      <Text style={styles.sectionTitle}>Top Songs</Text>
      <View style={styles.songContainer}>
        <View style={styles.songRow}>
          <Image source={require('./assets/song1.jpg')} style={styles.songImage} />
          <Text style={styles.songName}>Blinding Lights</Text>
        </View>
        <View style={styles.songRow}>
          <Image source={require('./assets/song2.jpg')} style={styles.songImage} />
          <Text style={styles.songName}>Peaches</Text>
        </View>
      </View>
    </ScrollView>
  );
};


export default App;
