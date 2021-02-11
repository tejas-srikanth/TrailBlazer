import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';

//screen for sign in (user already has an account)
const SigninScreen = () => {
    const { state, signin, clearErrorMessage } = useContext(Context);

    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillFocus={clearErrorMessage}
            />
            <AuthForm
                headerText="Sign in to Tracker"
                buttonText="Sign in"
                onSubmit={signin}
                errorMessage={state.errMessage}
            />

            <NavLink
                text="Don't have an account? Sign up!"
                routeName="Signup"
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

export default SigninScreen;