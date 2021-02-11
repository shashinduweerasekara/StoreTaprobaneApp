import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  StatusBar,
} from 'react-native';
import config from '../assets/config';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function ProductDetailsScreen({route, navigation}) {
  const {title, price, img, measure, unit, value, description} = route.params;
  return (
    <SafeAreaView style={styles.productViewScreen}>
      <StatusBar backgroundColor={config.P1} barStyle="dark-content" />
      <ScrollView style={styles.productViewContainer}>
        <View style={styles.productViewContent}>
          <View style={styles.productImgContainer}>
            <Image source={img} style={styles.productImg} />
          </View>
          <View style={styles.productDetails}>
            <View style={styles.titleNprice}>
              <Text style={styles.productTitle}>{title}</Text>
              <Text style={styles.productPrice}>$ {price}</Text>
            </View>
            <View style={styles.productDescriptionContainer}>
              <Text style={styles.productDescription}>{description}</Text>
            </View>
            <View>
              <View style={styles.productWnQRow}>
                <Text style={styles.productWnQ}>{measure}:</Text>
                <Text style={styles.productWnQvalue}>
                  {value} {unit}
                </Text>
              </View>
              <View style={styles.productWnQRow}>
                <Text style={styles.productWnQ}>Quantity:</Text>
                <TouchableOpacity style={styles.productQIconContainer}>
                  <FontAwesome5 name={'minus'} style={styles.productQIcon} />
                </TouchableOpacity>
                <Text style={styles.productWnQvalue}>01</Text>
                <TouchableOpacity style={styles.productQIconContainer}>
                  <FontAwesome5 name={'plus'} style={styles.productQIcon} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.mainBtns}>
            <TouchableOpacity
              style={styles.addCartBtn}
              /* onPress={() => navigation.navigate('CartScreen')} */
            >
              <Text style={styles.btnText}>Add to cart</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buyNowBtn}
              onPress={() => console.log('Buy Now')}>
              <Text style={styles.btnText}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  productViewScreen: {
    flex: 1,
    backgroundColor: config.P1,
    height: '100%',
  },

  productViewContainer: {
    backgroundColor: config.W,
    borderTopRightRadius: config.BR,
    borderTopLeftRadius: config.BR,
  },

  productImgContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 30,
  },

  productImg: {
    resizeMode: 'contain',
    height: 200,
    width: 200,
  },

  productDetails: {
    marginLeft: 10,
    marginRight: 20,
  },

  titleNprice: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  productTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: config.P2,
  },
  productPrice: {
    fontSize: 21,
    color: config.P1,
  },

  productDescriptionContainer: {
    marginTop: 10,
  },

  productDescription: {
    fontSize: 16,
    color: config.P2,
  },

  productWnQRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  productWnQ: {
    fontSize: 16,
    fontWeight: 'bold',
    color: config.P2,
  },

  productWnQvalue: {
    fontSize: 16,
    color: config.P2,
    marginLeft: 10,
  },

  productQIcon: {
    fontSize: 16,
    color: config.P2,
  },

  productQIconContainer: {
    backgroundColor: config.P1,
    borderRadius: 100,
    alignSelf: 'center',
    marginLeft: 10,
    padding: 5,
  },

  mainBtns: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30,
  },

  addCartBtn: {
    backgroundColor: config.W,
    borderWidth: 2,
    borderRadius: config.BR,
    borderColor: config.P2,
    width: 150,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
  },

  buyNowBtn: {
    backgroundColor: config.S1,
    borderWidth: 2,
    borderRadius: config.BR,
    borderColor: config.P2,
    width: 150,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
  },

  btnText: {
    fontSize: 21,
    fontWeight: 'bold',
    color: config.P2,
  },
});
