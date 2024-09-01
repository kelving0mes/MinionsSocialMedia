import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import Post from "../components/Post";

const postImageSource = {
  uri_1: 'https://images.unsplash.com/photo-1515041219749-89347f83291a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  uri_2: 'https://images.unsplash.com/photo-1678519122416-d79c40a7d35d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  uri_3: 'https://images.unsplash.com/photo-1662818943055-e8a119e81457?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  uri_4: 'https://images.unsplash.com/photo-1707112244265-b14d638dd121?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  uri_5: 'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
}

const headerProps = {
  source: 'https://images.unsplash.com/photo-1555786750-7c3c2b9a6b0e?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
}

const source = 'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

export default function Feed() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
          <Header source={headerProps.source} />
        <View style={{gap:16}}>
          <View style={styles.userInfo}>
              <Image source={{ uri: source }} style={styles.userImage} />
              <View>
                <Text style={styles.userName}>Kelvin Gomes</Text>
                <Text style={styles.username}>@kelving0mes</Text>
              </View>              
          </View>
          <Post postImageSource = {postImageSource.uri_1} />
          <Post postImageSource = {postImageSource.uri_2} />
          <Post postImageSource = {postImageSource.uri_3} />
          <Post postImageSource = {postImageSource.uri_4} />
          <Post postImageSource = {postImageSource.uri_5} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F9',
  },
  userInfo:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 4,
    gap: 8,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#FBDF4B'
  },
  userName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#484646',
  },
  username: {
    fontSize: 12,
    color: '#484646',
  },
})