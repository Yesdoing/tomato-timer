import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './components/Timer';
import reducer from './reducer';

export default class App extends React.Component {
  render() {
    return <Timer />;
  }
}

