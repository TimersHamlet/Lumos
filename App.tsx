/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import IndexPage from './src/views/home';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <IndexPage />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light,
  },
});

export default App;
