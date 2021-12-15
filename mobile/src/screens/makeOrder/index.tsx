import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { styles } from './styles';

interface Props {
  route: any;
}

export const MakeOrderPage = ({ route }: Props) => {
  const { product_id, product_image_url, product_amount, product_size } =
    route.params;

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.iconsBox}>
        <TouchableOpacity
          style={{ backgroundColor: 'transparent' }}
          onPress={() => navigation.goBack()}>
          <Text style={styles.closeText}>Fechar</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="share" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.centralize}>
        <Icon name="check-circle" size={48} color="#000" />
        <Text style={styles.orderConfirmedText}>Pedido confirmado</Text>
      </View>

      <View style={styles.previewBox}>
        <Image
          source={{ uri: product_image_url }}
          style={{ width: 100, height: 100 }}
        />
        <View style={styles.informationProductBox}>
          <View style={styles.informationBox}>
            <Text style={{ ...styles.mainInformation, textAlign: 'right' }}>
              R$ {product_amount}
            </Text>
            <Text style={styles.secondaryInformation}>Valor da oferta</Text>
          </View>
          <View style={styles.informationBox}>
            <Text style={styles.mainInformation}>{product_size}</Text>
            <Text style={styles.secondaryInformation}>Tamanho</Text>
          </View>
        </View>
      </View>

      <View style={styles.followOrderBox}>
        <Text style={styles.followOrderText}>ACOMPANHAR PEDIDO</Text>
      </View>

      <View style={styles.followInformationsBox}>
        <Text style={{ textAlign: 'center' }}>
          Enviamos os dados de pagamento via e-mail com informações sobre o seu
          pedido
        </Text>
      </View>

      <View style={styles.centralize}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={{ width: 100, height: 100 }}
        />
      </View>

      <View style={styles.followOrderBox}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.followOrderText}>FECHAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
