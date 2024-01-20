import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';

import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import Animated, {
  useAnimatedStyle,
  withTiming,
  Easing,
  useSharedValue,
  withSpring,
  FadeIn,
  FadeOut,
} from 'react-native-reanimated';

const {width, height} = Dimensions.get('window');

const SplashScreen = () => {
  const navigation = useNavigation();

  // const animatedStyle = useAnimatedStyle(() => {
  //   return {};
  // });

  useEffect(() => {
    const timeout = setTimeout(
      () => navigation.navigate('OnboardingScreen'),
      2000,
    );

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <Animated.View
      style={styles.container}
      entering={FadeIn.duration(1000)}
      exiting={FadeOut.duration(1000)}>
      <Image
        source={require('../../assets/images/bg.png')}
        style={styles.image}
      />
      <Image
        source={require('../../assets/images/Logo.png')}
        style={styles.logo}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width,
    height,
  },
  logo: {
    width,
    position: 'absolute',
    top: 100,
  },
});

export default SplashScreen;
