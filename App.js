import { Text, View } from 'react-native';
import React, { Component } from 'react';
import MapView, { Marker } from 'react-native-maps';

export class App extends Component {
  render() {
    return (
      <View>
        <MapView
          style={{ width: 800, height: 320 }}

        >
          <Marker
            coordinate={{
              latitude: 6.375829483928168,
              longitude: 2.4032064201127614
            }}
          >
          </Marker>
        </MapView>
      </View>
    );
  }
}

export default App;
