import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import config from '../assets/config';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import TopBar from '../commonComponents/TopBar';
/* 
function Item({key, title, price, rate}) {
  return (
    <TouchableOpacity
      style={styles.allProductItem}
      onPress={() => console.log('product')}>
      <View style={styles.hotProductImgContainer}>
        <Image
          source={require('../imgs/productImgs/P1.png')}
          style={styles.hotProductImg}
        />
      </View>
      <Text style={styles.hotProductTitle}>{title}</Text>
      <View style={styles.hotProductPriceNRate}>
        <Text style={styles.hotProductPrice}>$ {price}</Text>
        <Text style={styles.hotProductRate}>
          <FontAwesome5 name={'star'} style={styles.hotProductRateIcon} />{' '}
          {rate}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
 */
export default function Home() {
  const [products, setProducts] = useState([
    {id: 'P1', title: 'Product1', price: 5.0, rate: 4.9},
    {id: 'P2', title: 'Product1', price: 4.0, rate: 4.9},
    {id: 'P3', title: 'Product1', price: 4.0, rate: 4.9},
    {id: 'P4', title: 'Product1', price: 4.0, rate: 4.9},
  ]);

  return (
    <SafeAreaView style={styles.homeScreen}>
      <TopBar />
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchBarTxt}
          placeholder="Search products"></TextInput>
        <TouchableOpacity>
          <FontAwesome5 name={'search'} style={styles.searchBarIcon} />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.homeContainer}>
        <View style={{height: 160, backgroundColor: config.S2}}></View>
        <View style={styles.categories}>
          <Text style={styles.categoriesContainerTitle}>OUR CATEGORIES</Text>
          <View style={styles.categoriesContainer}>
            <TouchableOpacity style={styles.category}>
              <Text style={styles.categoryTxt}>SPICES</Text>
              <Image
                source={require('../imgs/spices.png')}
                style={styles.categoryIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.category}>
              <Text style={styles.categoryTxt}>CRAFTS</Text>
              <Image
                source={require('../imgs/crafts.png')}
                style={styles.categoryIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.category}>
              <Text style={styles.categoryTxt}>CLOTHES</Text>
              <Image
                source={require('../imgs/clothes.png')}
                style={styles.categoryIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.category}>
              <Text style={styles.categoryTxt}>FOOD</Text>
              <Image
                source={require('../imgs/food.png')}
                style={styles.categoryIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.hotProducts}>
          <Text style={styles.hotProductsContainerTitle}>HOT PRODUCTS</Text>
          <View style={styles.hotProductsList}>
            <TouchableOpacity style={styles.hotProductItem}>
              <View style={styles.hotProductImgContainer}>
                <Image
                  source={require('../imgs/productImgs/P1.png')}
                  style={styles.hotProductImg}
                />
              </View>
              <Text style={styles.hotProductTitle}>Black Pepper Powder</Text>
              <View style={styles.hotProductPriceNRate}>
                <Text style={styles.hotProductPrice}>$ 4.00</Text>
                <Text style={styles.hotProductRate}>
                  <FontAwesome5
                    name={'star'}
                    style={styles.hotProductRateIcon}
                  />{' '}
                  4.9
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.hotProductItem}>
              <View style={styles.hotProductImgContainer}>
                <Image
                  source={require('../imgs/productImgs/P2.png')}
                  style={styles.hotProductImg}
                />
              </View>
              <Text style={styles.hotProductTitle}>Black Pepper Powder</Text>
              <View style={styles.hotProductPriceNRate}>
                <Text style={styles.hotProductPrice}>$ 4.00</Text>
                <Text style={styles.hotProductRate}>
                  <FontAwesome5
                    name={'star'}
                    style={styles.hotProductRateIcon}
                  />{' '}
                  4.9
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.hotProductItem}>
              <View style={styles.hotProductImgContainer}>
                <Image
                  source={require('../imgs/productImgs/P3.png')}
                  style={styles.hotProductImg}
                />
              </View>
              <Text style={styles.hotProductTitle}>Black Pepper Powder</Text>
              <View style={styles.hotProductPriceNRate}>
                <Text style={styles.hotProductPrice}>$ 4.00</Text>
                <Text style={styles.hotProductRate}>
                  <FontAwesome5
                    name={'star'}
                    style={styles.hotProductRateIcon}
                  />{' '}
                  4.9
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.allProducts}>
          <Text style={styles.hotProductsContainerTitle}>All PRODUCTS</Text>
          <View style={styles.allProductsList}>
            {products.map((item) => (
              <TouchableOpacity
                style={styles.allProductItem}
                onPress={() => console.log('product')}>
                <View style={styles.hotProductImgContainer}>
                  <Image
                    source={require('../imgs/productImgs/P1.png')}
                    style={styles.hotProductImg}
                  />
                </View>
                <Text style={styles.hotProductTitle}>{item.title}</Text>
                <View style={styles.hotProductPriceNRate}>
                  <Text style={styles.hotProductPrice}>$ {item.price}</Text>
                  <Text style={styles.hotProductRate}>
                    <FontAwesome5
                      name={'star'}
                      style={styles.hotProductRateIcon}
                    />{' '}
                    {item.rate}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
            {/* <FlatList
              numColumns={2}
              data={products}
              renderItem={({item}) => (
                <Item title={item.title} price={item.price} rate={item.rate} />
              )}
            /> */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    backgroundColor: config.P1,
    height: '100%',
  },

  searchBar: {
    flexDirection: 'row',
    backgroundColor: config.W,
    height: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    borderTopLeftRadius: config.BR,
    borderTopRightRadius: config.BR,
    borderWidth: 2,
    borderBottomWidth: 1,
    borderColor: config.P2,
  },

  searchBarTxt: {
    fontSize: 16,
    color: config.P2,
    padding: 0,
  },

  searchBarIcon: {
    fontSize: 21,
    color: config.P2,
  },

  homeContainer: {
    backgroundColor: config.W,
  },

  slideShow: {},
  categories: {
    padding: 5,
  },
  categoriesContainerTitle: {
    textAlign: 'center',
    fontSize: 34,
    fontWeight: 'bold',
    color: config.S3,
  },

  categoriesContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  category: {
    width: '48%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: config.P2,
    borderRadius: config.BR,
    marginTop: 5,
    marginBottom: 5,
  },

  categoryTxt: {
    fontSize: 21,
    fontWeight: 'bold',
    color: config.S2,
  },

  categoryIcon: {
    resizeMode: 'contain',
    width: 40,
    height: 40,
  },

  hotProducts: {
    paddingLeft: 10,
  },

  hotProductsContainerTitle: {
    marginTop: 10,
    fontSize: 21,
    fontWeight: 'bold',
    color: config.S3,
  },
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
  },

  hotProductTitle: {
    color: config.P2,
    fontSize: 13,
    fontWeight: 'bold',
    marginLeft: 2,
    marginRight: 2,
  },

  hotProductPriceNRate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
    marginLeft: 2,
    marginRight: 2,
  },

  hotProductPrice: {
    fontSize: 13,
    color: config.P2,
  },

  hotProductRate: {
    fontSize: 13,
    color: config.S1,
  },

  allProducts: {
    padding: 10,
  },

  allProductsList: {},

  allProductItem: {
    backgroundColor: config.S2,
    borderWidth: 1,
    borderColor: config.P2,
    borderRadius: config.BR,
    width: '48%',
    marginBottom: 5,
  },
});
