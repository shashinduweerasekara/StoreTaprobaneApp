import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function AllProducts() {
  const [products, setProducts] = useState([
    {
      id: 'P1',
      title: 'Product1',
      price: 5.0,
      rate: 4.9,
      img: require('../imgs/productImgs/P1.png'),
    },
    {
      id: 'P2',
      title: 'Product2',
      price: 4.0,
      rate: 4.9,
      img: require('../imgs/productImgs/P2.png'),
    },
    {
      id: 'P3',
      title: 'Product3',
      price: 4.0,
      rate: 4.9,
      img: require('../imgs/productImgs/P3.png'),
    },
    {
      id: 'P4',
      title: 'Product4',
      price: 4.0,
      rate: 4.9,
      img: require('../imgs/productImgs/P4.png'),
    },
  ]);

  return (
    <View>
      {products.map((product) => (
        <TouchableOpacity
          key={product.id}
          style={styles.allProductItem}
          onPress={() => console.log('product')}>
          <View style={styles.hotProductImgContainer}>
            <Image source={product.img} style={styles.hotProductImg} />
          </View>
          <Text style={styles.hotProductTitle}>{product.title}</Text>
          <View style={styles.hotProductPriceNRate}>
            <Text style={styles.hotProductPrice}>$ {product.price}</Text>
            <Text style={styles.hotProductRate}>
              <FontAwesome5 name={'star'} style={styles.hotProductRateIcon} />{' '}
              {product.rate}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
