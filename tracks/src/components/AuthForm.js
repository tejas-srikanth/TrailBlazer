import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from './Spacer'

//component for auth screens (signin and signup)
const AuthForm = ({ headerText, buttonText, onSubmit, errorMessage }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <>
            <Spacer>
                <Text h3>{headerText}</Text>
            </Spacer>

            <Input 
                label="Email" 
                value={email} 
                onChangeText={setEmail}
                autoCorrect={false}
                autoCapitalize='none'
            />
            <Spacer />

            <Input 
                label="Password" 
                value={password} 
                onChangeText={setPassword}
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry
            />
            {errorMessage !== '' && <Text style={styles.errorMessage}>{errorMessage}</Text>}
            <Spacer>
                <Button title={buttonText} onPress={() => onSubmit({ email, password })}/>
            </Spacer>
        </>
    )
}

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15
    },
});

export default AuthForm;