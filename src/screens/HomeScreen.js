import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
import HomeScreenStyles from './HomeScreenStyles';
import Icons from 'react-native-vector-icons/FontAwesome';
const Data = [
  {
    id: 1,
    name: 'Wedding dress ',
    price: 100,
    Description: 'Bady girl wedding grey color dress ',
    image: require('../assets/pic1.jpg'),
  },
  {
    id: 2,
    name: 'Little girl frock',
    price: 100,
    Description: 'Little girl frock pink and black color',
    image: require('../assets/pic2.jpg'),
  },
  {
    id: 3,
    name: 'Bady girl casual',
    price: 100,
    Description: 'Baby girl casual sky blue dress',
    image: require('../assets/pic3.jpg'),
  },
  {
    id: 4,
    name: 'Black frock',
    price: 80,
    Description: 'Black color fancy little girl frock',
    image: require('../assets/pic4.jpg'),
  },
];
const Data2 = [
  {
    id: 1,
    name: 'Baby girl frock',
    price: 90,
    Description: 'light pink wedding frock for bady girl',
    image: require('../assets/pic5.jpg'),
  },
  {
    id: 2,
    name: 'Little girl frock',
    price: 85,
    Description: 'Little girl frock for wedding',
    image: require('../assets/pic6.jpg'),
  },
  {
    id: 3,
    name: 'Little girl frock',
    price: 90,
    Description: 'Little girl yellow white frock',
    image: require('../assets/pic7.jpg'),
  },
  {
    id: 4,
    name: 'Deal Name 4',
    price: 100,
    Description: 'This is the description of Deal 3',
    image: require('../assets/pic1.jpg'),
  },
];

const HomeScreen = ({navigation}) => {
  const isFocused = useIsFocused();

  const [count, setCount] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (isFocused) getCartCount();
  }, [isFocused]);

  const getCartCount = async () => {
    try {
      const cartDataString = await AsyncStorage.getItem('cartData');
      const cartDataList = (await JSON.parse(cartDataString)) || [];
      setCount(cartDataList.length);
    } catch (error) {
      console.log('getCartCount-error', error);
    }
  };

  return (
    <SafeAreaView style={HomeScreenStyles.mainContainer}>
      <View style={{justifyContent: 'flex-end', flexDirection: 'row'}}>
        <Text style={HomeScreenStyles.headingStyle}>Welcome</Text>
        <TouchableOpacity style={{position: 'absolute', right: 65, top: 33}}>
          <Icons
            name="shopping-cart"
            size={40}
            color="black"
            onPress={() => navigation.navigate('AddToCart')}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            fontWeight: 'bold',
            position: 'absolute',
            right: 72,
            top: 10,
          }}>
          {count}
        </Text>
        <TouchableOpacity style={{position: 'absolute', right: 15, top: 30}}>
          <Icons
            name="user"
            size={40}
            color="black"
            onPress={() => setModalVisible(true)}
          />
        </TouchableOpacity>
      </View>
      <View style={HomeScreenStyles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={HomeScreenStyles.centeredView}>
            <View style={HomeScreenStyles.modalView}>
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <Icons
                  name="close"
                  size={15}
                  color="black"
                  style={HomeScreenStyles.closeStyle}
                />
              </Pressable>
              <Text style={HomeScreenStyles.modalText}>Login</Text>
              <View>
                <TextInput
                  style={HomeScreenStyles.InputStyle}
                  placeholder={'Enter Email'}
                />
                <TextInput
                  style={HomeScreenStyles.InputStyle}
                  placeholder={'Enter Password'}
                />
              </View>
              <TouchableOpacity
                style={[HomeScreenStyles.button, HomeScreenStyles.buttonClose]}>
                <Text style={HomeScreenStyles.textStyle}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={HomeScreenStyles.bottomTextStyle}>
                  Don't Have an Account? Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
      <View
        style={{
          marginTop: 80,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={{
            margin: 10, 
            backgroundColor: '#78e0f0',
            width: 150,
            height: 150,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Image
            style={{width: 100, height: 100}}
            source={require('../assets/icons/dress.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            margin: 10,
            backgroundColor: '#a882fa',
            width: 150,
            height: 150,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Image
            style={{width: 100, height: 100}}
            source={require('../assets/icons/heels.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            margin: 10,
            backgroundColor: '#6ff7de',
            width: 150,
            height: 150,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Image
            style={{width: 100, height: 100}}
            source={require('../assets/icons/shirt.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            margin: 10,
            backgroundColor: '#ec6bfa',
            width: 150,
            height: 150,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Image
            style={{width: 100, height: 100}}
            source={require('../assets/icons/leather-derby-shoe.png')}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={HomeScreenStyles.subHeading}>Trending</Text>
        <View style={{flexDirection: 'row', marginTop: 37, marginRight: 10}}>
          <Text style={{fontSize: 20, color: 'black', marginRight: 10}}>
            See more
          </Text>
          <Icons name="long-arrow-right" size={40} color="black" />
        </View>
      </View>
      <View style={{marginHorizontal: 20}}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          scrollEnabled={true}
          data={Data}
          renderItem={({item}) => (
            <TouchableOpacity
              style={HomeScreenStyles.cardStyle}
              onPress={() =>
                navigation.navigate('DetailScreen', {productData: item})
              }>
              <Image source={item.image} style={{width: 200, height: 200}} />
              <View style={HomeScreenStyles.itemStyle}>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: '600',
                    color: 'black',
                    marginTop: 10,
                  }}>
                  {item.name}
                </Text>
                <Text style={{fontSize: 15, fontWeight: '700', color: 'black'}}>
                  ${item.price}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
        <View
          style={{
            marginTop: 40,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={HomeScreenStyles.subHeading}>Popular Products</Text>
          <View style={{flexDirection: 'row', marginTop: 37, marginRight: 10}}>
            <Text style={{fontSize: 20, color: 'black', marginRight: 10}}>
              See more
            </Text>
            <Icons name="long-arrow-right" size={40} color="black" />
          </View>
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          scrollEnabled={true}
          data={Data2}
          renderItem={({item}) => (
            <View>
              <TouchableOpacity
                style={HomeScreenStyles.cardStyle}
                onPress={() =>
                  navigation.navigate('DetailScreen', {productData: item})
                }>
                <Image source={item.image} style={{width: 200, height: 200}} />
                <View style={HomeScreenStyles.itemStyle}>
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: '600',
                      color: 'black',
                      marginTop: 10,
                    }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{fontSize: 15, fontWeight: '700', color: 'black'}}>
                    ${item.price}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
        <View style={HomeScreenStyles.bottomTab}>
          <TouchableOpacity>
            <Image
              style={{width: 50, height: 50,tintColor:'#78e0f0'}}
              source={require('../assets/icons/home.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{width: 50, height: 50, tintColor:'#a882fa'}}
              source={require('../assets/icons/search.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{width: 50, height: 50,tintColor:'#6ff7de'}}
              source={require('../assets/icons/love.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{width: 50, height: 50,tintColor:'#ec6bfa'}}
              source={require('../assets/icons/user.png')}
            />
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
