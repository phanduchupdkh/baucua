import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import Header from './component/Header';

const App = () => {
  return (
    <>
      <View style={styles.contai}>
        <Header />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contai: {
    marginTop: 32,
    paddingHorizontal: 24,
  }
});

export default App;
