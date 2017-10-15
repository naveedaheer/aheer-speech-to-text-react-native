/**
 * Speech to text React Native App
 * https://github.com/naveedaheer/aheer-speech-to-text-react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Container, StyleProvider } from 'native-base';
import Header from './src/native/nativeBaseComponents/header';
// import Footer from './src/native/nativeBaseComponents/footer';
import Home from './src/native/components/home';

export default class App extends Component<{}> {
  render() {
    return (
      <Container>
        <Header />
        <Home />
        {/* <Footer /> */}
      </Container>
    );
  }
}
