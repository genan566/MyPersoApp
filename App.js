import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
export class App extends Component {
  render() {
    return (
      // <View>
      <MapView
        // style={{ width: "100%", height: 700 }}
        style={StyleSheet.absoluteFill}

        initialRegion={{
          latitude: 37.771707,
          longitude: -122.4053769,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0922 * ASPECT_RATIO,
        }}

      >
        {/* <Marker
          coordinate={{
            latitude: 6.375829483928168,
            longitude: 2.4032064201127614
          }}
        >
        </Marker> */}

        <MapViewDirections
          origin={{
            latitude: 37.3317876,
            longitude: -122.0054812,
          }}

          destination={{
            latitude: 37.771707,
            longitude: -122.4053769,
          }}

          apikey={"AIzaSyC_WIqW9HZg0aQERIjf71TSjhuBkg7jduE"}
        />
      </MapView>
      // </View>
    );
  }
}

export default App;