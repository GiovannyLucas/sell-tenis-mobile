import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { getProductById, Product } from '../../services/api/products';
import { styles } from './styles';

interface Props {
  route: any;
}

export const ProductDetailsPage = ({ route }: Props) => {
  const { id } = route.params;

  const navigation = useNavigation();

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    async function call() {
      try {
        const data = await getProductById(id);

        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    }

    call();
  }, [id]);

  return (
    <View style={styles.container}>
      <View style={styles.iconsBox}>
        <TouchableOpacity
          style={styles.icons}
          onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.icons}>
          <TouchableOpacity style={styles.icons}>
            <Icon name="plus" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icons}>
            <Icon name="share" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <View style={styles.categoriesBox}>
          {product?.categories.map(category => (
            <View style={styles.categoryBox}>
              <Text style={styles.categoryText}>{category}</Text>
            </View>
          ))}
        </View>
        <Image
          style={styles.productImage}
          source={{
            uri: product?.url_image,
          }}
        />
      </View>

      <View style={styles.centralize}>
        <Text style={styles.productName}>{product?.name}</Text>
      </View>

      <View style={styles.centralize}>
        <Text style={styles.productAmount}>R$ {product?.amount}</Text>
      </View>

      <View>
        <View style={styles.sizesBox}>
          <Text style={styles.productSize}>
            {product?.size ? product.size - 1 : 0}
          </Text>
          <Text style={styles.mainProductSize}>{product?.size}</Text>
          <Text style={styles.productSize}>
            {product?.size ? +product.size + 1 : 0}
          </Text>
        </View>
        <View style={styles.centralize}>
          <Text>Tamanho {product?.size}</Text>
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
            <Text style={styles.titleAmountSize}>R$ {product?.amount}</Text>
            <Text style={styles.subtitleAmountSize}>
              Tamanho {product?.size}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
