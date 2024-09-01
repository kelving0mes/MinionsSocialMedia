import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

interface ButtonProps {
  onPress?: () => void
}

export default function LoadImageButton({ onPress }: ButtonProps) {
  return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <MaterialIcons name='add-a-photo' size={24} color='#484646' />
        <Text style={styles.textButton}>Adicionar Imagem</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    container: {
        width: '100%', 
        height: 117,
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: '#d9d9d9', 
        marginTop: 4, 
        borderRadius: 4,
        gap: 8
    },
    textButton: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#484646'
    }
    })