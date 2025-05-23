import React from 'react';
import { ScrollView, View, Text, Image, ImageBackground, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.appContainer}>
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

      {/* 🔽 Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        <View style={styles.navItem}>
          <Text style={styles.navIcon}>🎧</Text>
          <Text style={styles.navLabel}>All Songs</Text>
        </View>
        <View style={styles.navItem}>
          <Text style={styles.navIcon}>❤️</Text>
          <Text style={styles.navLabel}>Favourites</Text>
        </View>
        <View style={styles.navItem}>
          <Text style={styles.navIcon}>🎵</Text>
          <Text style={styles.navLabel}>Playlists</Text>
        </View>
        <View style={styles.navItem}>
          <Text style={styles.navIcon}>📻</Text>
          <Text style={styles.navLabel}>Podcasts</Text>
        </View>
      </View>
    </View>
  );
};

const styles= StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingBottom: 80, 
  },
  banner: {
    height: 200,
    justifyContent: 'flex-end',
    padding: 16,
  },
  bannerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 20,
    color: 'white',
    marginTop: 20,
    marginLeft: 16,
    marginBottom: 8,
  },
  playlistContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  playlistCard: {
    alignItems: 'center',
  },
  playlistImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  playlistName: {
    color: 'white',
    marginTop: 8,
  },
  songContainer: {
    padding: 10,
  },
  songRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  songImage: {
    width: 60,
    height: 60,
    borderRadius: 6,
    marginRight: 16,
  },
  songName: {
    color: 'white',
    fontSize: 16,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#333',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    fontSize: 20,
    color: 'white',
  },
  navLabel: {
    fontSize: 12,
    color: 'white',
    marginTop: 2,
  },
  appContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingBottom: 80, 
  },
  banner: {
    height: 200,
    justifyContent: 'flex-end',
    padding: 16,
  },
  bannerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 20,
    color: 'white',
    marginTop: 20,
    marginLeft: 16,
    marginBottom: 8,
  },
  playlistContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  playlistCard: {
    alignItems: 'center',
  },
  playlistImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  playlistName: {
    color: 'white',
    marginTop: 8,
  },
  songContainer: {
    padding: 10,
  },
  songRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  songImage: {
    width: 60,
    height: 60,
    borderRadius: 6,
    marginRight: 16,
  },
  songName: {
    color: 'white',
    fontSize: 16,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#333',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    fontSize: 20,
    color: 'white',
  },
  navLabel: {
    fontSize: 12,
    color: 'white',
    marginTop: 2,
  },
});

export default App;