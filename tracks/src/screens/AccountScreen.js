import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Button } from 'react-native-elements'
import { Context } from '../context/AuthContext';
import { FontAwesome } from '@expo/vector-icons'

//signout button for user
const AccountScreen = () => {
    const { signout } = useContext(Context)
    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text style={{fontSize: 48}}> AccountScreen </Text>
            <Button title="Sign out" onPress={signout} /> 
        </SafeAreaView>
    )
};

AccountScreen.navigationOptions = {
    tabBarIcon: <FontAwesome name="gear" size={20} />
}
const styles = StyleSheet.create({});

export default AccountScreen;