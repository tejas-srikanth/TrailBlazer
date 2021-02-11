// import '../_mockLocation' (for simulated locations)
import React, {  useContext, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import { Text } from 'react-native-elements';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation'
import TrackForm from '../components/TrackForm';
import { FontAwesome } from '@expo/vector-icons'

//screen to make a new track (shows that current loc of user)
const TrackCreateScreen = ({ isFocused }) => {
    const { state, addLocation } = useContext(LocationContext);
    //fixes nasty bug
    const callback = useCallback(location => {
        addLocation(state.recording, location)
    }, [state.recording])
    //get an error if location permission denied
    const [err] = useLocation(isFocused || state.recording, callback)

    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text h2>Create a map</Text>
            <Map />
            {err ? <Text>Please enable location tracking</Text> : null}
            <TrackForm />
        </SafeAreaView>
    )
};

TrackCreateScreen.navigationOptions = {
    title: 'Add Track',
    tabBarIcon: <FontAwesome name="plus" size={20} />
}

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);