import React, {useState} from 'react';
import {
  Image,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import config from '../assets/config';

export default function Offers({navigation}) {
  const [offers, setoffers] = useState([
    {key: 'O1', img: require('../imgs/offers/offer1.png')},
    {key: 'O2', img: require('../imgs/offers/offer2.png')},
    {key: 'O3', img: require('../imgs/offers/offer3.png')},
  ]);

  return (
    <SafeAreaView style={styles.offerScreen}>
      <ScrollView style={styles.offerContainer}>
        <View style={styles.offerList}>
          {offers.map((offer) => (
            <TouchableOpacity key={offers.key}>
              <Image style={styles.offerImage} source={offer.img} />
            </TouchableOpacity>
          ))}
          {/* 
          <TouchableOpacity>
            <Image
              style={styles.offerImage}
              source={require('../imgs/offers/offer1.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.offerImage}
              source={require('../imgs/offers/offer2.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.offerImage}
              source={require('../imgs/offers/offer3.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.offerImage}
              source={require('../imgs/offers/offer1.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.offerImage}
              source={require('../imgs/offers/offer2.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.offerImage}
              source={require('../imgs/offers/offer3.png')}
            />
          </TouchableOpacity> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  offerScreen: {
    backgroundColor: config.P1,
    height: '100%',
  },

  offerContainer: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: config.W,
    padding: 5,
  },

  offerList: {
    flex: 1,
    alignItems: 'center',
  },

  offerImage: {
    resizeMode: 'contain',
    height: 180,
    borderRadius: 15,
    marginBottom: 10,
  },
});
