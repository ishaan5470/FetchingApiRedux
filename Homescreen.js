import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApi } from './ProductSlice';


export default function HomeScreen() {
    const dispatch=useDispatch();
    const products=useSelector((state)=>state);
   
    console.log(products)
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={()=>{
            dispatch(fetchApi());
        }}>
        <Text>HomeScreen</Text>
        </TouchableOpacity>
        <View>
            {products.product123.data.map(e=><li>
                {e.title}
            </li>)}
        </View>
      
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});