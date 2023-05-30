import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import AddToCart from './AddToCart'
import Icons from 'react-native-vector-icons/MaterialIcons'
import AsyncStorage from '@react-native-async-storage/async-storage'

const DetailScreen = (props) => {
  const { navigation, route } = props
  const { productData } = route.params
  
  const AddToCart = async () => {
    try {
      const cartDataString = await AsyncStorage.getItem('cartData');
      const cartDataList = await JSON.parse(cartDataString) || []

      const foundedIndex = cartDataList?.findIndex((item) => productData.id == item.id)
      if (foundedIndex > -1) {
        cartDataList[foundedIndex].count++
      } else {
        cartDataList.push({
          ...productData,
          count: 1
        })
      }
      console.log("DetailScreen-cartDataList.length", cartDataList?.length, foundedIndex)
      const jsonValue = JSON.stringify(cartDataList)
      await AsyncStorage.setItem('cartData', jsonValue);
      alert('Add to cart Successfully!')
    } catch (error) {
      console.log("DetailScreen-error", error)
    }
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <TouchableOpacity style={{ position: 'absolute', left: 15, marginTop:25 }}
          onPress={() => navigation.goBack() }
        >
          <Icons
            name='arrow-back-ios' size={30} color="black"
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 30, fontWeight: '700', color: 'black', marginVertical: 20, alignSelf: 'center' }}>Deel Detail</Text>
      </View>
      <Text style={{ color: 'black', fontSize: 20, marginLeft: 50, fontWeight: '700' }}>Name</Text>
      <Text style={{ color: 'black', fontSize: 20, marginVertical: 15, marginLeft: 50 }}>{productData.name}</Text>
      <View style={styles.cardStyle}>
        <View>
          <Image
            source={productData.image}
            style={{ width: 300, height: 300, alignSelf: 'center' }}
          />
        </View>
      </View>
      <Text style={{ color: 'black', fontSize: 20, fontWeight: '700', marginVertical: 15, marginLeft: 50 }}>Description</Text>
      <Text style={{ color: 'black', fontSize: 20, marginBottom: 15, marginLeft: 50 }}>{productData.Description}</Text>
      <TouchableOpacity style={{
        backgroundColor: 'black', width: '40%', height: 40,
        marginVertical: 10, alignSelf: 'center', borderRadius: 40
      }}
        onPress={() => AddToCart()}
      >
        <Text style={{
          color: 'white', fontSize: 17, fontWeight: '600',
          alignSelf: 'center', justifyContent: 'center', marginTop: 8
        }}>Add to Cart</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor:'white'
    // justifyContent:'center',
  },
  cardStyle: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#Fcfdff',
    height: 350,
    width: 300,
    margin: 10,
    padding: 5,
    paddingHorizontal: 20,
    borderRadius: 10,
    shadowColor: 'blue',
    elevation: 10,
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  topContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 80,
    alignContent: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  }
})