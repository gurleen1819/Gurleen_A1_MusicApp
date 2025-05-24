import React from 'react';
import { ScrollView, View, Text, Image, ImageBackground, StyleSheet,TouchableOpacity} from 'react-native';



const App = () => {
  return (
    <View style={styles.appContainer}>
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 120 }}>

        <ImageBackground
          source={require('./assets/banner.jpg')}
          style={styles.banner}
        >
          <Text style={styles.bannerText}>Welcome to VibeTune</Text>
        </ImageBackground>

        <Text style={styles.sectionTitle}>Your Playlists</Text>
       <View style={styles.playlistGrid}>
  <View style={styles.playlistCard}>
    <Image source={require('./assets/playlist1.jpg')} style={styles.playlistImage} />
    <Text style={styles.playlistName}>Chill Beats</Text>
  </View>
  <View style={styles.playlistCard}>
    <Image source={require('./assets/playlist2.jpg')} style={styles.playlistImage} />
    <Text style={styles.playlistName}>No Love </Text>
  </View> 
  <View style={styles.playlistCard}>
    <Image source={require('./assets/playlist3.jpg')} style={styles.playlistImage} />
    <Text style={styles.playlistName}>Lo-fi Vibes</Text>
  </View>
  <View style={styles.playlistCard}>
    <Image source={require('./assets/playlist4.jpg')} style={styles.playlistImage} />
    <Text style={styles.playlistName}>Level</Text>
  </View>
  <View style={styles.playlistCard}>
    <Image source={require('./assets/playlist5.jpg')} style={styles.playlistImage} />
    <Text style={styles.playlistName}>Imagine</Text>
  </View>
  <View style={styles.playlistCard}>
    <Image source={require('./assets/playlist6.jpg')} style={styles.playlistImage} />
    <Text style={styles.playlistName}>Excuses</Text>
  </View>
</View>


        <Text style={styles.sectionTitle}>Top Songs</Text>
        <View style={styles.songContainer}>
          <View style={styles.songRow}>
            <Image source={require('./assets/song1.jpg')} style={styles.songImage} />
            <Text style={styles.songName}>Let Her Go</Text>
          <TouchableOpacity style={styles.heartButton}>
  <Text style={styles.heartIcon}>❤️</Text>
</TouchableOpacity>


          </View>
         
          <View style={styles.songRow}>
            <Image source={require('./assets/song2.jpg')} style={styles.songImage} />
            <Text style={styles.songName}>Obsessed</Text>
       <TouchableOpacity style={styles.heartButton}>
  <Text style={styles.heartIcon}>❤️</Text>
</TouchableOpacity>


          </View>
          <View style={styles.songRow}>
            <Image source={require('./assets/song3.jpeg')} style={styles.songImage} />
            <Text style={styles.songName}>Stay</Text>
        <TouchableOpacity style={styles.heartButton}>
  <Text style={styles.heartIcon}>❤️</Text>
</TouchableOpacity>


          </View>
          <View style={styles.songRow}>
            <Image source={require('./assets/song4.png')} style={styles.songImage} />
            <Text style={styles.songName}>Lover</Text>
        <TouchableOpacity style={styles.heartButton}>
  <Text style={styles.heartIcon}>❤️</Text>
</TouchableOpacity>


          </View>
           <View style={styles.songRow}>
            <Image source={require('./assets/song5.jpeg')} style={styles.songImage} />
            <Text style={styles.songName}>Brown Munde</Text>
         <TouchableOpacity style={styles.heartButton}>
  <Text style={styles.heartIcon}>❤️</Text>
</TouchableOpacity>


          </View>
           
        </View>
<Text style={styles.sectionTitle}>Audiobooks For You</Text>
<View style={styles.audioGrid}>
  <TouchableOpacity style={styles.audioCard}>
    <Image source={require('./assets/musicicon.jpg')} style={styles.audioIcon} />
    <Text style={styles.audioTitle}>Atomic Habits</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.audioCard}>
    <Image source={require('./assets/musicicon.jpg')} style={styles.audioIcon} />
    <Text style={styles.audioTitle}>The Psychology of Money</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.audioCard}>
    <Image source={require('./assets/musicicon.jpg')} style={styles.audioIcon} />
    <Text style={styles.audioTitle}>Deep Work</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.audioCard}>
    <Image source={require('./assets/musicicon.jpg')} style={styles.audioIcon} />
    <Text style={styles.audioTitle}>Can't Hurt Me</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.audioCard}>
    <Image source={require('./assets/musicicon.jpg')} style={styles.audioIcon} />
    <Text style={styles.audioTitle}>Alone</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.audioCard}>
    <Image source={require('./assets/musicicon.jpg')} style={styles.audioIcon} />
    <Text style={styles.audioTitle}>Love Me</Text>
  </TouchableOpacity>
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
    paddingBottom: 100, 
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
 
 



  playlistImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  playlistName: {
    color: 'white',
    marginTop: 8,
  },
 heartButton: {
  marginLeft: 'auto',
  paddingHorizontal: 10,
},

heartIcon: {
  fontSize: 20,
  color: 'white',
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
     fontWeight: 'bold',
  },
playlistContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
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
 playlistGrid: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  paddingHorizontal: 10,
},

playlistCard: {
  width: '30%', 
  marginBottom: 20,
  alignItems: 'center',
},
audioGrid: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  paddingHorizontal: 16,
  marginBottom: 20,
},

audioCard: {
  backgroundColor: '#333',
  borderRadius: 8,
  padding: 10,
  width: '47%',
  marginBottom: 12,
  flexDirection: 'row',
  alignItems: 'center',
},

audioIcon: {
  width: 32,
  height: 32,
  marginRight: 10,
},

audioTitle: {
  color: 'white',
  fontSize: 14,
  flexShrink: 1,
}

});

export default App;