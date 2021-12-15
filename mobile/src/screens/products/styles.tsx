import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  centralize: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterBox: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  searchInput: {
    width: '70%',
  },
  settingsIcon: {
    transform: [{ rotate: '90deg' }],
  },
  categoriesBox: {},
  categoryButton: {
    margin: 10,
  },
  selectedCategoryButton: {
    margin: 10,
    borderBottomWidth: 1,
  },
  brandsBox: {},
  brandButton: {
    margin: 10,
  },
  selectedBrandButton: {
    margin: 10,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },
  brandText: {
    color: '#000',
    fontSize: 16,
  },
  productsBox: {
    margin: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
  },
  productBox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width / 2 - 30,
    height: width / 2 + 30,
  },
  productImage: {
    width: width / 2 - 30,
    height: width / 2 - 80,
  },
  productName: {
    color: '#000',
    fontWeight: '700',
  },
  productAmount: {
    marginTop: 10,
    color: '#000',
    fontWeight: '700',
    fontSize: 24,
  },
});
