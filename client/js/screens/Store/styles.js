import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  //map link
  mapLinkContainer: {
    width: '100%',
    justifyContent: 'flex-start',
    marginTop: '3%',
  },
  mapText: {
    fontSize: 14,
    textDecorationLine: 'underline',
    fontFamily: 'Lato-bold',
  },
  dayHoursContainer: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'space-between',
  },
  contentContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '1%',
    width: 350,
  },
});

export default styles;
