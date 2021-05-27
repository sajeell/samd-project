/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';
import SignIn from './components/signin/SignIn.js';


const App = () => {

  return (
    <SafeAreaView>
      <SignIn />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default App;
