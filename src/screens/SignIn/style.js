import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: 'black',
  },
  arrowback: {
    height: 22,
    width: 22,
    tintColor: '#fff',
    marginTop: 7,
  },
  headerContainer: {
    alignSelf: 'center',
    marginTop: 60,
  },
  textcolor: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
  },
  sectext: {
    fontSize: 20,
    color: '#595b62ed',
  },
  inputContainer: {
    paddingHorizontal: 15,
    marginTop: 50,
  },
  textinput: {
    backgroundColor: '#262a34',
    borderRadius: 15,
    flex: 1,
    color: '#fff',
  },
  inputcustom: {
    color: '#fff',
    paddingHorizontal: 15,
    fontSize: 18,
  },

  textinputsec: {
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

  signin: {
    elevation: 8,
    shadowColor: 'aqua',
    backgroundColor: '#5468ff',
    borderRadius: 15,
    paddingVertical: 15,
    flex: 1,
    color: '#fff',
    marginTop: 60,
  },

  maingoogle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  google: {
    height: 22,
    width: 22,
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
    color: '#fff',
  },
});