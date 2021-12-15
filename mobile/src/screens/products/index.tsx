import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {
  FilterProducts,
  getProducts,
  Product,
} from '../../services/api/products';
import { styles } from './styles';

export const ProductsPage = () => {
  const navigation = useNavigation();

  const [filters, setFilters] = useState<FilterProducts>({});
  const [products, setProducts] = useState<Product[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [, setTotal] = useState<number>(0);

  useEffect(() => {
    async function call() {
      try {
        const data = await getProducts(filters);

        setProducts(data.products);
        setBrands(data.brands);
        setCategories(data.categories);
        setTotal(data.total);
      } catch (error) {
        console.log(error);
      }
    }

    call();
  }, [filters]);

  return (
    <View>
      <View style={styles.filterBox}>
        <Icon name="search" size={24} />
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar..."
          onChangeText={text => {
            setFilters({
              ...filters,
              name: text,
            });
          }}
        />
        <Icon name="sliders" size={24} style={styles.settingsIcon} />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesBox}>
        {categories.map((category, key) => (
          <TouchableOpacity
            key={key}
            style={
              filters.category === category
                ? styles.selectedCategoryButton
                : styles.categoryButton
            }
            onPress={() =>
              setFilters({
                ...filters,
                category: filters.category === category ? undefined : category,
              })
            }>
            <Text>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView horizontal style={styles.brandsBox}>
        {brands.map((brand, key) => (
          <TouchableOpacity
            key={key}
            style={
              filters.brand === brand
                ? styles.selectedBrandButton
                : styles.brandButton
            }
            onPress={() =>
              setFilters({
                ...filters,
                brand: filters.brand === brand ? undefined : brand,
              })
            }>
            <Text style={styles.brandText}>{brand}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView>
        <View style={styles.productsBox}>
          {products.map((product, key) => (
            <TouchableOpacity
              style={styles.productBox}
              key={key}
              onPress={() =>
                //@ts-ignore
                navigation.navigate('ProductDetails', { id: product.id })
              }>
              <Image
                source={{
                  uri: product.url_image,
                }}
                style={styles.productImage}
              />
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productAmount}>R$ {product.amount}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
