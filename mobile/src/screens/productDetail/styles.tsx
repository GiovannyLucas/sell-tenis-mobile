import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  centralize: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
    width,
    height: height / 2 - 80,
  },
  productName: {
    color: '#000',
    fontWeight: '700',
    fontSize: 24,
  },
  productAmount: {
    marginTop: 10,
    color: '#000',
    fontWeight: '700',
    fontSize: 36,
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
