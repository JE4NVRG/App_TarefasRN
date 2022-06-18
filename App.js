import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , ImageBackground} from 'react-native';

export default function App() {

  const image = require('./resources/bg.jpg');

  return (
    <View style={{flex:1}}>
      
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.coverView}><Text style={styles.textHeader}>Lista de Tarefas - JE4N CARLOS</Text></View>
          
        </ImageBackground>
    </View>
  
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    
  },
  coverView: {
    width: '100%',
    height: 150,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  textHeader: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    marginTop: 20,
    paddingTop: 50,
  }
 
});
