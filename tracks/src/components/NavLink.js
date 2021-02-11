import React from 'react';
import { withNavigation } from 'react-navigation';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import Spacer from './Spacer'

//navigate from signup to signin screen and back
const NavLink = ({ navigation, routeName, text }) => {
    return (
    <TouchableOpacity onPress={() => navigation.navigate({ routeName })}>
        <Spacer>
            <Text style={styles.link}>
                { text }
            </Text>
        </Spacer>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    link: {
        color: 'blue'
    }
})

export default withNavigation(NavLink)