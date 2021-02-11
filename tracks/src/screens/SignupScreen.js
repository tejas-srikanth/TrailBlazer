import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { NavigationEvents } from 'react-navigation';

//screen for signup (user does not have an account)
const SignupScreen = ({ navigation }) => {
    const { state, signup, clearErrorMessage } = useContext(AuthContext);
    
    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillFocus={clearErrorMessage}
            />

            <AuthForm
                headerText="Sign Up for Tracker"
                buttonText="Sign Up"
                onSubmit={signup}
                errorMessage={state.errMessage}
            />

            <NavLink
                routeName="Signin"
                text="Already have an account? Sign in instead!"
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginVertical: 150
    },
});

export default SignupScreen;