import { Image, StyleSheet, Text, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';

interface PostProps {
    postImageSource: string
}
const source = 'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

export default function Post({postImageSource}: PostProps) {
  return (
    <View style={styles.container}>
        <View style={styles.postUserInfo}>
            <Image source={{ uri: source }} style={styles.userImage} />
            <Text style={styles.username}>Kelvin Gomes</Text>                                           
        </View>
          <Image source={{ uri: postImageSource }} style={{ width: '100%', height: 209, borderRadius: 4 }} />
          <View style={styles.interactionText}>
              <View style={{flexDirection:"row", alignItems: 'baseline',}}>
                <AntDesign name="hearto" size={24} color="#484646" />
                <Text style={{ fontSize: 8, color: '#484646' }}>  128</Text>
              </View>
              <View style={{flexDirection:"row", alignItems: 'baseline',}}>
                <AntDesign name="message1" size={24} color="#484646" />
                <Text style={{ fontSize: 8, color: '#484646' }}>  41</Text>
              </View>
              <View style={{flexDirection:"row", alignItems: 'baseline',}}>
                <AntDesign name="sharealt" size={24} color="#484646" />
                <Text style={{ fontSize: 8, color: '#484646' }}>  60</Text>
              </View>
        </View>
              <View style={{flexDirection:"row", alignItems: 'baseline', gap: 4, marginHorizontal: 4}}>
                <Text style={styles.commentSectionUser}>@AndersonAGodoy</Text>
                <Text style={styles.commentSectionText}>Fenomenal, um prodígio!!! #contemironia</Text>
              </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '96%',
        height: 'auto',
        alignSelf: 'center',
        borderColor: '#FBDF4B',
        borderWidth: 2,
        borderRadius: 8,
        padding: 4,
        paddingBottom: 16,
        marginHorizontal: 4,
        backgroundColor: '#FFFFFF',
        gap: 6,
    },
    postUserInfo:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 4,
        gap: 4,
    },
    userImage: {
        width: 40,
        height: 40,
        borderRadius: 100,
        borderWidth: 4,
        borderColor: '#FBDF4B'
      },
    username: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#484646',
    },
    interactionText: {
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'flex-start',
        padding: 4,
        gap: 16,
    },
    commentSectionUser: {
        fontWeight:"bold",
        fontSize: 12,
    },
    commentSectionText: {
        fontSize: 12,
    }
});