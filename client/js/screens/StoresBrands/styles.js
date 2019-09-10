import {StyleSheet} from 'react-native';
import {fonts, colors} from '../../config/styles';
const styles = StyleSheet.create({
  topNavContainer: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 25,
    marginBottom: 20,
  },
  topNavTitleContainer: {
    borderBottomColor: '#2B2D2F',
    borderBottomWidth: 4,
    width: '30%',
    marginLeft: '3%',
    marginRight: '3%',
    alignItems: 'center',
  },
  topNavTitleContInactive: {
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 4,
    width: '30%',
    marginLeft: '3%',
    marginRight: '3%',
    alignItems: 'center',
  },
  navTitle: {
    fontSize: 16,
    fontFamily: 'Lato-Bold',
  },
  //Brand section
  brandContainer: {
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: '10%',
    marginRight: '10%',
    paddingTop: '6%',
    paddingBottom: '3%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  arrowContainer: {
    height: 15,
    width: 15,
  },
  brandTitle: {
    fontSize: 14,
    color: '#2B2D2F',
    fontFamily: 'Lato-regular',
  },
  //Map Link styles
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
});

export default styles;
