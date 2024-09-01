import { StyleSheet, Text, TextInput, View } from "react-native";
import LoadImageButton from "./LoadImageButton";

export default function Info() {
  return (
    <View style={styles.post}>
      <View>
        <Text style={styles.postTextTitle}>Título</Text>
        <TextInput placeholderTextColor={'#7E7070'} style={styles.postTextInput} placeholder='Insira o título aqui...' />
      </View>
      <View>
        <Text style={styles.postTextTitle}>Imagem</Text>
        <LoadImageButton />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  post: {
    marginTop: 8,
    paddingHorizontal: 8,
    gap: 32
  },
  postTextTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#484646',
    paddingHorizontal: 4,
    paddingVertical: 4
  },
  postTextInput: {
    height: 60,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 8,
    paddingHorizontal: 8
  }
})