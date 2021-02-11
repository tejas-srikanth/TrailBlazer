import React, { useContext } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Circle, Polyline } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';

//component for track create screen, shows user's location on rn map
const Map = () => {
    const { state: { locations, currentLocation } } = useContext(LocationContext);

    if (!currentLocation){
        return <ActivityIndicator size="large" style={{ marginTop: 200 }} />
    }

    return (
        <MapView 
            style={styles.map}
            initialRegion={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}
        >
            <Circle
                center={currentLocation.coords}
                radius={30}
                fillColor="rgba(158, 158, 255, 0.3)"
                strokeColor="rgba(158, 158, 255, 1.0)"
            />
            <Polyline
                coordinates={locations.map(loc => loc.coords)}
            />
        </MapView>

    )
}

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default Map;