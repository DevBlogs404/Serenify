import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {
  Camera,
  CameraType,
  getCameraPermissionsAsync,
  requestCameraPermissionsAsync,
} from 'expo-camera';
import {useEffect, useState} from 'react';

const {width} = Dimensions.get('window');

function App(): React.JSX.Element {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  function toggleCameraType() {
    setType(current =>
      current === CameraType.back ? CameraType.front : CameraType.back,
    );
  }

  return (
    <View style={{flex: 1}}>
      <Text>Hello there</Text>
      <View style={styles.container}>
        <Camera style={styles.camera} type={type}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
              <Text style={styles.text}>Flip Camera</Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 400,
    width,
  },
  image: {
    height: 100,
    width: 100,
  },
  camera: {
    width: '100%',
    aspectRatio: 1,
  },
  buttonContainer: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    color: 'white',
    backgroundColor: 'black',
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
  },
});

export default App;
