import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

interface ButtonProps {
    onPress?: () => void
  }

export default function RowButtons({ onPress }: ButtonProps) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress} style={styles.sendButton}>
                <Text >Enviar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress} style={styles.cancelButton}>
                <Text style={{color:'#ffffff'}}>Cancelar</Text>
            </TouchableOpacity>
        </View>
    )
}   

const styles = StyleSheet.create({
    container: {
        width: '100%', 
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 8, 
        marginTop: 40,
   
    },
    sendButton: {
        width: '48%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: '#FBDF4B', 
        borderRadius: 8,
    },
    cancelButton: {
        width: '48%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: '#484646', 
        borderRadius: 8,
    }
  })
