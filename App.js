import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './Components/Header.js';
import AlbumList from './Components/AlbumList.js';


export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header name="Albums!!!" />
        <AlbumList />
      </View>

    );
  }
}
AppRegistry.registerComponent('Buoi2ListView', () => App);
