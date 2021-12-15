import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface Props {
  route: any;
}

export const ProductDetailsPage = ({ route }: Props) => {
  const {} = route.params;

  return (
    <View style={{ justifyContent: 'space-around', flex: 1 }}>
      <View>
        <Image
          style={styles.productImage}
          source={{
            uri: 'https://raw.githubusercontent.com/Josimar16/teste-fullstack-mobile/main/images/1%20–%201.png',
          }}
        />
      </View>

      <View style={styles.centralize}>
        <Text style={styles.productName}>Jordan 5 Nike Style Muito Crazy</Text>
      </View>

      <View style={styles.centralize}>
        <Text style={styles.productAmount}>R$ 1150,00</Text>
      </View>

      <View>
        <View style={styles.sizesBox}>
          <Text style={styles.productSize}>35</Text>
          <Text style={styles.mainProductSize}>36</Text>
          <Text style={styles.productSize}>37</Text>
        </View>
        <View style={styles.centralize}>
          <Text>Tamanho 36</Text>
        </View>
      </View>

      <View style={styles.centralize}>
        <TouchableOpacity style={styles.buyButton}>
          <View style={styles.alignRight}>
            <Text style={styles.titleAmountSize}>COMPRAR</Text>
            <Text style={styles.subtitleAmountSize}>LANCE</Text>
          </View>
          <View style={styles.verticalLine}>
            <Text />
          </View>
          <View>
            <Text style={styles.titleAmountSize}>R$ 1150,00</Text>
            <Text style={styles.subtitleAmountSize}>Tamanho 12</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
