import { useEffect, useContext } from 'react';
import { Context } from '../context/AuthContext';

//a screen for automatic signup
//just shows blank page for split second before user signs in
//could see signup screen for split second, looked bad
const LoadingScreen = () => {
    const { autoSignup } = useContext(Context);

    useEffect(() => {
        autoSignup();
    }, [])

    return null
}

export default LoadingScreen;