import {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  withTiming,
  Easing,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const {width, height} = Dimensions.get('window');

const OnBoardingScreen = () => {
  const opacity = useSharedValue(0);

  const fadeInStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  useEffect(() => {
    opacity.value = withTiming(1, {
      duration: 2000,
      easing: Easing.inOut(Easing.ease),
    });
    // opacity.value = withSpring(1, {damping: 2, stiffness: 80});
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/bg.png')}
        style={styles.image}
      />
      <Animated.Image
        source={require('../../assets/images/Logo.png')}
        style={[styles.logo, fadeInStyle]}
      />
      <Animated.View style={[styles.text, fadeInStyle]}>
        <Text style={styles.title}>WELCOME</Text>
        <Text style={styles.desc}>
          Do meditation. Stay focused.Live a healthy life.
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login with Email</Text>
        </TouchableOpacity>
        <Text style={styles.footerText}>
          Don't have an Account? <Text style={{fontWeight: '900'}}>SignUp</Text>
        </Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  image: {
    width,
    height,
  },
  logo: {
    width,
    position: 'absolute',
    top: 0,
  },
  text: {
    flex: 1,
    height,
    width,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 120,
  },
  title: {
    fontSize: 36,
    color: 'white',
    fontWeight: '700',
  },
  desc: {
    maxWidth: '90%',
    fontSize: 16,
    color: 'white',
    fontWeight: '300',
    textAlign: 'center',
    marginTop: 8,
  },
  button: {
    height: 50,
    width: '80%',
    top: 90,
    backgroundColor: '#7C9A92',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
    letterSpacing: 1,
  },
  footerText: {
    height: 50,
    width: '80%',
    top: 100,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
    color: 'white',
  },
});

export default OnBoardingScreen;
