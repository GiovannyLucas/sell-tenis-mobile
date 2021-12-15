import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { styles } from './styles';

export const ProductsPage = () => {
  return (
    <View>
      <View style={styles.filterBox}>
        <Icon name="search" size={24} />
        <TextInput style={styles.searchInput} placeholder="Pesquisar..." />
        <Icon name="sliders" size={24} style={styles.settingsIcon} />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesBox}>
        <TouchableOpacity style={styles.categoryButton}>
          <Text>Novo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text>Usado</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text>Lançamento</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text>Promocional</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text>Novo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text>Usado</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text>Lançamento</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Text>Promocional</Text>
        </TouchableOpacity>
      </ScrollView>

      <ScrollView horizontal style={styles.brandsBox}>
        <TouchableOpacity style={styles.selectedBrandButton}>
          <Text style={styles.brandText}>Nike</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.brandButton}>
          <Text style={styles.brandText}>Adidas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.brandButton}>
          <Text style={styles.brandText}>Nike</Text>
        </TouchableOpacity>
      </ScrollView>

      <ScrollView>
        <View style={styles.productsBox}>
          <TouchableOpacity style={styles.productBox}>
            <Image
              source={{
                uri: 'https://raw.githubusercontent.com/Josimar16/teste-fullstack-mobile/main/images/1%20–%201.png',
              }}
              style={styles.productImage}
            />
            <Text style={styles.productName}>
              Air Jordan 5 Retro 'Raging Bulls' Red 2021
            </Text>
            <Text style={styles.productAmount}>R$ 820,00</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.productBox}>
            <Image
              source={{
                uri: 'https://raw.githubusercontent.com/Josimar16/teste-fullstack-mobile/main/images/1%20–%201.png',
              }}
              style={styles.productImage}
            />
            <Text style={styles.productName}>
              Air Jordan 5 Retro 'Raging Bulls' Red 2021
            </Text>
            <Text style={styles.productAmount}>R$ 820,00</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.productBox}>
            <Image
              source={{
                uri: 'https://raw.githubusercontent.com/Josimar16/teste-fullstack-mobile/main/images/1%20–%201.png',
              }}
              style={styles.productImage}
            />
            <Text style={styles.productName}>
              Air Jordan 5 Retro 'Raging Bulls' Red 2021
            </Text>
            <Text style={styles.productAmount}>R$ 820,00</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.productBox}>
            <Image
              source={{
                uri: 'https://raw.githubusercontent.com/Josimar16/teste-fullstack-mobile/main/images/1%20–%201.png',
              }}
              style={styles.productImage}
            />
            <Text style={styles.productName}>
              Air Jordan 5 Retro 'Raging Bulls' Red 2021
            </Text>
            <Text style={styles.productAmount}>R$ 820,00</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.productBox}>
            <Image
              source={{
                uri: 'https://raw.githubusercontent.com/Josimar16/teste-fullstack-mobile/main/images/1%20–%201.png',
              }}
              style={styles.productImage}
            />
            <Text style={styles.productName}>
              Air Jordan 5 Retro 'Raging Bulls' Red 2021
            </Text>
            <Text style={styles.productAmount}>R$ 820,00</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
