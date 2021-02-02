import React from 'react';
import {
  Image,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import config from '../assets/config';
import TopBar from '../commonComponents/TopBar';

export default function Offers({navigation}) {
  return (
    <SafeAreaView style={styles.offerScreen}>
      <TopBar />
      <ScrollView style={styles.offerContainer}>
        <View style={styles.offerList}>
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
          </TouchableOpacity>
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
