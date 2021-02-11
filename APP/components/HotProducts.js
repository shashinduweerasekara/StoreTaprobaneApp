import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import config from '../assets/config';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function HotProducts({navigation}) {
  const [hotProducts, setHotProducts] = useState([
    {
      key: 'H1',
      title: 'Product1',
      price: 5.0,
      measure: 'Weight',
      unit: 'g',
      value: '500',
      rate: 4.9,
      img: require('../imgs/productImgs/P5.png'),
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laudantium maxime, architecto dolorem saepe rerum, magni assumenda suscipit dolore consequuntur dolorum doloremque praesentium, porro qui.',
    },
    {
      key: 'H2',
      title: 'Product2',
      price: 4.0,
      measure: 'Weight',
      unit: 'g',
      value: '500',
      rate: 4.9,
      img: require('../imgs/productImgs/P6.png'),
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laudantium maxime, architecto dolorem saepe rerum, magni assumenda suscipit dolore consequuntur dolorum doloremque praesentium, porro qui.',
    },
    {
      key: 'H3',
      title: 'Product3',
      price: 4.0,
      measure: 'Weight',
      unit: 'g',
      value: '500',
      rate: 4.9,
      img: require('../imgs/productImgs/P7.png'),
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laudantium maxime, architecto dolorem saepe rerum, magni assumenda suscipit dolore consequuntur dolorum doloremque praesentium, porro qui.',
    },
    {
      key: 'H4',
      title: 'Product4',
      price: 4.0,
      measure: 'Weight',
      unit: 'g',
      value: '500',
      rate: 4.9,
      img: require('../imgs/productImgs/P8.png'),
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laudantium maxime, architecto dolorem saepe rerum, magni assumenda suscipit dolore consequuntur dolorum doloremque praesentium, porro qui.',
    },
  ]);
  return (
    <View style={styles.hotProductsList}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {hotProducts.map((hotProduct) => (
          <TouchableOpacity
            ke={hotProduct.key}
            style={styles.hotProductItem}
            onPress={() =>
              navigation.navigate('ProductDetailsScreen', hotProduct)
            }>
            <View style={styles.hotProductImgContainer}>
              <Image source={hotProduct.img} style={styles.hotProductImg} />
            </View>
            <Text style={styles.hotProductTitle}>{hotProduct.title}</Text>
            <View style={styles.hotProductPriceNRate}>
              <Text style={styles.hotProductPrice}>$ {hotProduct.price}</Text>
              <Text style={styles.hotProductRate}>
                <FontAwesome5 name={'star'} style={styles.hotProductRateIcon} />{' '}
                {hotProduct.rate}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  hotProductsList: {
    flexDirection: 'row',
  },
  hotProductItem: {
    width: 140,
    backgroundColor: config.S2,
    borderWidth: 1,
    borderColor: config.P2,
    borderRadius: config.BR,
    marginRight: 10,
  },

  hotProductImgContainer: {
    alignItems: 'center',
    backgroundColor: config.W,
    borderTopLeftRadius: config.BR,
    borderTopRightRadius: config.BR,
  },

  hotProductImg: {
    resizeMode: 'contain',
    margin: 5,
    width: 130,
    height: 130,
    borderRadius: config.BR,
  },

  hotProductTitle: {
    color: config.P2,
    fontSize: 13,
    fontWeight: 'bold',
    marginLeft: 4,
    marginRight: 4,
  },

  hotProductPriceNRate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
    marginLeft: 14,
    marginRight: 10,
  },

  hotProductPrice: {
    fontSize: 13,
    color: config.P2,
  },

  hotProductRate: {
    fontSize: 13,
    color: config.S1,
  },
});
