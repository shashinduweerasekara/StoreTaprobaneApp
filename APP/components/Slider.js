import React from 'react';
import {View, Image, StyleSheet, Dimensions, ScrollView} from 'react-native';

const sliderImgs = [
  {id: 's1', img: require('../imgs/sliderImgs/hero1.png')},
  {id: 's2', img: require('../imgs/sliderImgs/hero2.png')},
  {id: 's3', img: require('../imgs/sliderImgs/hero3.png')},
];

export default function Slider() {
  return (
    <View>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}>
        {sliderImgs.map((image, index) => (
          <Image key={image.id} source={image.img} style={styles.sliderImg} />
        ))}
      </ScrollView>
    </View>
  );
}

const {height, width} = Dimensions.get('window');
const slider_width = width;

const styles = StyleSheet.create({
  silderContainer: {},
  sliderImg: {
    resizeMode: 'cover',
    width: slider_width,
    height: 180,
  },
});
