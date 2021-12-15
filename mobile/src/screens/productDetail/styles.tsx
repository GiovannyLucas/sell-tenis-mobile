import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: { justifyContent: 'space-around', flex: 1 },
  iconsBox: { flexDirection: 'row', justifyContent: 'space-between' },
  centralize: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icons: {
    marginHorizontal: 10,
    flexDirection: 'row',
  },
  categoriesBox: { flexDirection: 'row' },
  categoryBox: {
    margin: 5,
    borderColor: '#AAA',
    borderWidth: 1,
    borderRadius: 20,
    padding: 5,
    height: 25,
  },
  categoryText: { fontSize: 12 },
  productImage: {
    width,
    height: height / 2 - 80,
  },
  productName: {
    color: '#000',
    fontWeight: '700',
    fontSize: 36,
  },
  productAmount: {
    marginTop: 10,
    color: '#000',
    fontWeight: '700',
    fontSize: 32,
  },
  productSize: {
    margin: 20,
    fontWeight: '400',
    fontSize: 24,
  },
  mainProductSize: {
    margin: 20,
    fontWeight: '700',
    color: '#000',
    fontSize: 36,
  },
  sizesBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buyButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    width: width * 0.7,
    borderRadius: 7,
    padding: 5,
  },
  alignRight: {
    alignItems: 'flex-end',
  },
  titleAmountSize: {
    fontWeight: '500',
    fontSize: 20,
    color: '#FFF',
  },
  subtitleAmountSize: {
    fontSize: 12,
    color: '#FFF',
  },
  verticalLine: {
    borderLeftColor: '#AAA',
    borderLeftWidth: 1,
    marginHorizontal: 10,
  },
});
