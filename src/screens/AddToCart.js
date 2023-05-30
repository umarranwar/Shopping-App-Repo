import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, FlatList, UIManager } from 'react-native'
import Icons from 'react-native-vector-icons/FontAwesome'
import Icon from 'react-native-vector-icons/MaterialIcons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'

const AddToCart = ({ navigation }) => {
  const [dataList, setDataList] = useState([])

  useEffect(() => {
    getDataFromStorage()
  }, [])

  const getDataFromStorage = async () => {
    try {
      const cartDataString = await AsyncStorage.getItem('cartData');
      const cartDataList = await JSON.parse(cartDataString) || []
      console.log("getDataFromStorage-cartDataList.length", cartDataList.length)
      setDataList(cartDataList)
    } catch (error) {
      console.log("getDataFromStorage-error", error)
    }
  }

  const removeItem = async (itemId) => {
    try {
      let dataListTemp = [...dataList]
      dataListTemp = dataListTemp.filter((item) => itemId != item.id)
      setDataList(dataListTemp)
      const jsonValue = JSON.stringify(dataListTemp)
      await AsyncStorage.setItem('cartData', jsonValue);
      alert('Item removed successfully!')
    } catch (error) {
      console.log("getDataFromStorage-error", error)
    }
  }

  return (

    <SafeAreaView style={{ flex: 1,backgroundColor:'white' }}>
      <Icon
        name='arrow-back' size={40} color="black"
        style={{position:'absolute',left:15 ,top:33}}
        onPress={()=>navigation.goBack()}
      />
      <Text style={{ color: 'black', fontSize: 35, fontWeight: '700', alignSelf: 'center', marginVertical: 30 }}>
        Cart</Text>
      {dataList?.length == 0 ?
        <View style={{ flex: 1, marginVertical: 20, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 20, color: 'green', fontWeight: '700' }}>Your Cart is empty add to Cart </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('HomeScreen')}>
            <Text style={{ fontSize: 20, color: 'black', marginRight: 5 }}>Click Here</Text>
          </TouchableOpacity>
        </View> :
        <FlatList
          data={dataList}
          renderItem={({ item }) =>
            <TouchableOpacity
              onPress={() => navigation.navigate('DetailScreen', { productData: item })}>
              <View style={styles.cardStyle}>
                <Text style={[styles.textStyle, { fontWeight: '700' }]}>{item.name}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={[styles.textStyle, { fontWeight: '700' }]}>${item.price}</Text>
                  <TouchableOpacity>
                    <Icons
                      name='trash-o' size={30} color='black'
                      onPress={() => removeItem(item.id)}
                    />
                  </TouchableOpacity>
                </View>
                <Text style={styles.textStyle}>{item.Description}</Text>
                {/* <Text style={styles.textStyle}>{`Items: ${item.count}`}</Text> */}
              </View>
            </TouchableOpacity>
          }
        />
      }
    </SafeAreaView>
  )
}

export default AddToCart
const styles = StyleSheet.create({
  cardStyle: {
    width: '80%',
    height: 130,
    backgroundColor: 'white',
    alignSelf: 'center',
    padding: 25,
    justifyContent: 'center',
    elevation: 20,
    borderRadius: 10,
    margin: 12,
  },
  textStyle: {
    fontSize: 17,
    color: 'black'
  }
})