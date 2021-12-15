import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  centralize: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: { justifyContent: 'space-around', flex: 1 },
  iconsBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  closeText: {
    color: '#1A6',
    backgroundColor: 'transparent',
  },
  orderConfirmedText: {
    fontSize: 26,
    fontWeight: '700',
    color: '#000',
  },
  previewBox: {
    borderColor: '#000',
    borderWidth: 1,
    width: 150,
    maxHeight: 200,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  informationBox: {
    marginHorizontal: 5,
  },
  informationProductBox: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  mainInformation: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000',
  },
  secondaryInformation: {
    fontSize: 10,
    color: '#000',
  },
  followOrderText: {
    fontSize: 16,
    color: '#000',
    letterSpacing: 2,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    textAlign: 'center',
  },
  followOrderBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  followInformationsBox: {
    padding: 30,
  },
});
