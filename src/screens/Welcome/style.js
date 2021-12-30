import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#000',
  },
  innerContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  helloTxt: {
    alignSelf: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: 20,
  },
  inputcustom: {
    color: '#fff',
    paddingHorizontal: 15,
    fontSize: 18,
  },
  signin: {
    elevation: 8,
    shadowColor: '#fff',
    backgroundColor: '#5468ff',
    borderRadius: 15,
    paddingVertical: 15,
    color: '#fff',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 50,
    marginTop: 20,
  },
});
