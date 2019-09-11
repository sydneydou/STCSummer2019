import React, {Component} from 'react';
import {Image, ImageBackground, Animated, LayoutAnimation} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import styles from './styles';

const OnBoarding = ({navigation}) => {
  return (
    <Onboarding
      onDone={() => navigation.navigate('SignUp')}
      onSkip={() => navigation.navigate('SignUp')}
      bottomBarColor="#fff"
      nextLabel=""
      titleStyles={styles.titleStyles}
      containerStyles={styles.containerStyles}
      pages={[
        {
          backgroundColor: '#fff',
          image: (
            <Image
              style={styles.imageContainer}
              source={require('../../assets/images/onboarding-1.gif')}
            />
          ),
          title: 'Browse STC for styles, brands and any coveted items.',
          subtitle:
            'No waiting, no shipping fees or buying the wrong size. Head right to the store, check the fit and purchase the item.',
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image
              style={[styles.imageContainer]}
              source={require('../../assets/images/onboarding-2.gif')}
            />
          ),
          title:
            'Curate your own fashion catalogue by favouriting items, stores and brands.',
          subtitle:
            'Be the first to know when your favourites go on sale or recieve new arrivals.',
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image
              style={[styles.imageContainer]}
              source={require('../../assets/images/onboarding-3.gif')}
            />
          ),
          title: '',
          subtitle:
            'Shop This City bridges the gap between customers and local independent boutiques through a common passion for fashion.',
        },
      ]}
    />
  );
};

export default OnBoarding;