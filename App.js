import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
return (
<View style={styles.container}>
<View style={{ backgroundColor: 'gray', width: '100%', height: 60 }}>
</View>
<View style={[styles.secondaryContainer, { backgroundColor:'white'}]}>
  <Text style={styles.text}>Kamile Silva Camargo</Text>
  <Text style={styles.text2}>Número 23</Text>
  <Text style={styles.text3}>Número da sala:7</Text>
  <Text style={styles.text4}>oiii</Text>
</View>
<View style={{ backgroundColor: 'gray', width: '100%', height: 60 }}>
</View>
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
},
secondaryContainer: {
flex: 1,
justifyContent: 'center',
backgroundColor: '#fff',
flexDirection: 'column',
},
text: {
  color: 'blue',
  fontSize: 30,
  fontWeight: 'bold',
  textAlign: 'right',
  
},
    text2: {
  color: 'blue',
  fontSize: 25,
  fontStyle: 'italic',
  borderBottomWidth: '1px',  
},
    text3: {
  color: 'blue',
  fontSize: 20,
  backgroundColor: 'pink',
  textAlign: 'center',
},
text4: {
  color: 'black',
  fontSize: 20,
  backgroundColor: 'purple',
  textAlign: 'center',
}
});
 
