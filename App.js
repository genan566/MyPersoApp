import React, { Component } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.771707;
const LONGITUDE = -122.4053769;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const GOOGLE_MAPS_APIKEY = 'AIzaSyAZ7ZmQqWNr4lCWgsT3qFTubStCkX0OWBA';

export class App extends Component {
  render() {
    return (
      <View>
        <MapView
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
          style={StyleSheet.absoluteFill}
        >
          {/* <Marker
            coordinate={{
              latitude: 6.375829483928168,
              longitude: 2.4032064201127614
            }}
          >
          </Marker> */}
          <MapViewDirections
            origin={{ latitude: 37.3317876, longitude: -122.0054812 }}
            destination={{ latitude: 37.771707, longitude: -122.4053769, }}
            apikey={GOOGLE_MAPS_APIKEY}
          />
        </MapView>
      </View >
    );
  }
}

export default App;

// <MapView initialRegion={…}>
//   <MapViewDirections
//     origin={origin}
//     destination={destination}
//     apikey={GOOGLE_MAPS_APIKEY}
//   />
// </MapView>
















// import React, { Component } from 'react';
// import { Dimensions, StyleSheet } from 'react-native';
// import MapView from 'react-native-maps';
// import MapViewDirections from 'react-native-maps-directions';

// const { width, height } = Dimensions.get('window');
// const ASPECT_RATIO = width / height;
// const LATITUDE = 37.771707;
// const LONGITUDE = -122.4053769;
// const LATITUDE_DELTA = 0.0922;
// const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

// const GOOGLE_MAPS_APIKEY = 'AIzaSyAZ7ZmQqWNr4lCWgsT3qFTubStCkX0OWBA';

// class App extends Component {

//   constructor(props) {
//     super(props);

//     // AirBnB's Office, and Apple Park
//     this.state = {
//       coordinates: [
//         {
//           latitude: 37.3317876,
//           longitude: -122.0054812,
//         },
//         {
//           latitude: 37.771707,
//           longitude: -122.4053769,
//         },
//       ],
//     };

//     this.mapView = null;
//   }

//   onMapPress = (e) => {
//     this.setState({
//       coordinates: [
//         ...this.state.coordinates,
//         e.nativeEvent.coordinate,
//       ],
//     });
//   }

//   render() {
//     return (
//       <MapView
//         initialRegion={{
//           latitude: LATITUDE,
//           longitude: LONGITUDE,
//           latitudeDelta: LATITUDE_DELTA,
//           longitudeDelta: LONGITUDE_DELTA,
//         }}
//         style={StyleSheet.absoluteFill}
//         ref={c => this.mapView = c}
//         onPress={this.onMapPress}
//       >
//         {this.state.coordinates.map((coordinate, index) =>
//           <MapView.Marker key={`coordinate_${index}`} coordinate={coordinate} />
//         )}
//         {(this.state.coordinates.length >= 2) && (
//           <MapViewDirections
//             origin={this.state.coordinates[0]}
//             // waypoints={(this.state.coordinates.length > 2) ? this.state.coordinates.slice(1, -1) : null}
//             destination={this.state.coordinates[this.state.coordinates.length - 1]}
//             apikey={GOOGLE_MAPS_APIKEY}
//             strokeWidth={3}
//             strokeColor="hotpink"
//             optimizeWaypoints={true}
//             onStart={(params) => {
//               console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
//             }}
//             onReady={result => {
//               console.log(`Distance: ${result.distance} km`)
//               console.log(`Duration: ${result.duration} min.`)

//               this.mapView.fitToCoordinates(result.coordinates, {
//                 edgePadding: {
//                   right: (width / 20),
//                   bottom: (height / 20),
//                   left: (width / 20),
//                   top: (height / 20),
//                 }
//               });
//             }}
//             onError={(errorMessage) => {
//               // console.log('GOT AN ERROR');
//             }}
//           />
//         )}
//       </MapView>
//     );
//   }
// }

// export default App;