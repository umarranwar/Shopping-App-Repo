import {StyleSheet} from 'react-native';

const HomeScreenStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  topContainer: {
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  headingStyle: {
    color: 'black',
    fontWeight: '700',
    fontSize: 40,
    fontStyle: 'normal',
    position: 'absolute',
    left: 20,
    top: 10,
  },
  subHeading: {
    color: 'black',
    fontWeight: '700',
    fontSize: 26,
    lineHeight: 29,
    marginLeft: 25,
    marginTop: 40,
  },
  iconStyle: {
    marginLeft: 100,
  },
  itemsContainer: {
    alignContent: 'space-between',
    marginHorizontal: 16,
    marginVertical: 16,
  },
  cardStyle: {
    justifyContent: 'center',
    height: 400,
    margin: 10,
    padding: 5,
    paddingHorizontal: 20,
    borderRadius: 10,
    shadowColor: 'blue',
    elevation: 10,
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  bottomTab: {
    width: '96%',
    height: 110,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'black',
    position: 'absolute',
    bottom: 10,
    alignSelf:'center',
    borderRadius:20
  },
  centeredView: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%',
    height: '60%',
  },
  button: {
    borderRadius: 50,
    padding: 10,
    elevation: 2,
    height:60,
    justifyContent:'center'
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: 'black',
    marginVertical: 20,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize:18
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 25,
    color: 'black',
  },
  InputStyle: {
    width: '100%',
    height: 60,
    padding: 10,
    fontSize: 15,
    borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 50,
    marginVertical: 20,
    paddingHorizontal: 17,
  },
  closeStyle: {
    alignSelf: 'flex-end',
  },
  bottomTextStyle: {
    fontSize: 15,
    color: 'black',
    alignSelf: 'center',
  },
});
export default HomeScreenStyles;
