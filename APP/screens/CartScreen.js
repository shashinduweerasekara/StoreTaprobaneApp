import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import config from '../assets/config';

export default function Cart({navigation}) {
  return (
    <View style={styles.cartContainer}>
      <View style={styles.cartContent}>
        <View style={styles.cartContentHeader}>
          <Text style={styles.cartItemCount}>Cart (2)</Text>
          <TouchableOpacity style={styles.checkOutbtn}>
            <Text style={styles.checkOuttxt}>Check Out</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cartItemsContainer}>
          <View style={styles.cartItems}>
            <View style={styles.productImgContainer}>
              <Image
                source={require('../imgs/productImgs/P1.png')}
                style={styles.cartItemImg}
              />
            </View>
            <View style={styles.cartItemRight}>
              <View style={styles.cartItemRightTop}>
                <Text style={styles.cartItemName}>Product1</Text>
                <Text style={styles.cartItemPrice}>$ 5.00</Text>
              </View>
              <View style={styles.cartItemRightBottom}>
                <TouchableOpacity>
                  <FontAwesome5 name={'trash-alt'} style={styles.deleteIcon} />
                </TouchableOpacity>
                <View style={styles.qtyChanger}>
                  <View style={styles.productQIconContainer}>
                    <TouchableOpacity>
                      <FontAwesome5
                        name={'minus'}
                        style={styles.productQIcon}
                      />
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.productQty}>1</Text>
                  <View style={styles.productQIconContainer}>
                    <TouchableOpacity>
                      <FontAwesome5 name={'plus'} style={styles.productQIcon} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.cartItems}>
            <View style={styles.productImgContainer}>
              <Image
                source={require('../imgs/productImgs/P2.png')}
                style={styles.cartItemImg}
              />
            </View>
            <View style={styles.cartItemRight}>
              <View style={styles.cartItemRightTop}>
                <Text style={styles.cartItemName}>Product2</Text>
                <Text style={styles.cartItemPrice}>$ 4.00</Text>
              </View>
              <View style={styles.cartItemRightBottom}>
                <TouchableOpacity>
                  <FontAwesome5 name={'trash-alt'} style={styles.deleteIcon} />
                </TouchableOpacity>
                <View style={styles.qtyChanger}>
                  <View style={styles.productQIconContainer}>
                    <TouchableOpacity>
                      <FontAwesome5
                        name={'minus'}
                        style={styles.productQIcon}
                      />
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.productQty}>4</Text>
                  <View style={styles.productQIconContainer}>
                    <TouchableOpacity>
                      <FontAwesome5 name={'plus'} style={styles.productQIcon} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cartContainer: {
    flex: 1,
    backgroundColor: config.P1,
  },
  cartContent: {
    backgroundColor: config.W,
    borderTopRightRadius: config.BR,
    borderTopLeftRadius: config.BR,
    height: '100%',
    paddingHorizontal: 10,
  },

  cartContentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },

  cartItemCount: {
    fontSize: 21,
    fontWeight: 'bold',
    color: config.P2,
  },

  checkOutbtn: {
    borderRadius: config.BR,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: config.P2,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkOuttxt: {
    fontSize: 21,
    fontWeight: 'bold',
    color: config.P1,
  },

  cartItemsContainer: {
    alignItems: 'center',
  },

  cartItems: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    borderRadius: config.BR,
    borderColor: config.P1,
    borderWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 5,
  },
  productImgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%',
    borderRadius: config.BR,
  },
  cartItemImg: {
    resizeMode: 'contain',
    width: 80,
    height: 80,
    borderRadius: config.BR,
  },
  cartItemRight: {
    flex: 2,
    marginHorizontal: 5,
  },
  cartItemRightTop: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cartItemName: {
    fontSize: 21,
    fontWeight: 'bold',
    color: config.P2,
  },
  cartItemPrice: {
    fontSize: 21,
    color: config.P1,
  },
  cartItemRightBottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 5,
  },
  deleteIcon: {
    fontSize: 24,
    color: config.P1,
  },
  qtyChanger: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productQIconContainer: {
    backgroundColor: config.P1,
    borderRadius: 100,
    alignSelf: 'center',
    marginLeft: 10,
    padding: 5,
  },
  productQIcon: {
    fontSize: 16,
    color: config.P2,
  },
  productQty: {
    fontSize: 16,
    color: config.P2,
    marginLeft: 10,
  },
});
