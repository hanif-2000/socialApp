import { StyleSheet, Dimensions } from "react-native";
import { colors, constant } from '@common';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#000',
    paddingTop: 50,
  },

  arrowback: {
    height: 22,
    width: 22,
    tintColor: 'white',
    margin: 20,
  },

  headerContainer: {
    alignSelf: 'center',
    marginTop: 20,
  },
  textcolor: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
  },
  sectext: {
    marginTop: 10,
    fontSize: 20,
    color: '#595b62ed',
  },
  inputContainer: {
    paddingHorizontal: 15,
    marginTop: 50,
  },
  TextInputContainer: {
    elevation: 10,
    shadowColor: 'white',
    backgroundColor: '#262a34',
    borderRadius: 15,
    flex: 1,
    color: 'white',
  },
  inputCustom: {
    color: 'white',
    paddingHorizontal: 15,
    fontSize: 18,
  },

  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#262a34',
    borderRadius: 15,
    flex: 1,
    color: '#595b62ed',
    marginTop: 12,
  },

  eye: {
    height: 25,
    width: 25,
    tintColor: '#595b62ed',
    marginRight: 10,
  },
  forgot: {
    alignSelf: 'flex-end',
    marginTop: 15,
  },

  buttonContainer: {
    backgroundColor: '#5468ff',
    borderRadius: 15,
    paddingVertical: 15,
    flex: 1,
    color: 'white',
    marginTop: 60,
  },

  maingoogle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  google: {
    height: 25,
    width: 25,
  },
  textgoogle: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 6,
  },
  DontAccount: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    justifyContent: 'center',
  },
  accounttext: {
    fontSize: 18,
    color: 'white',
  },
});
