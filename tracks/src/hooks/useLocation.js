import { useState, useEffect } from 'react';
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';

export default (shouldTrack, callback) => {
    const [err, setErr] = useState(null);

    useEffect(() => {
        let subscriber;
        
        //request permission and get users current location every second
        const startWatching = async () => {
            const { status } = await requestPermissionsAsync();
            subscriber = await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            }, callback)
    
            if (status !== 'granted'){
                setErr('denied');
            }
            
        }

        if (shouldTrack){
            startWatching()
        } else {
            if (subscriber){
                subscriber.remove();
            }
           subscriber = null;
        }

        return () => {
            if (subscriber){
                subscriber.remove();
            }
        }
    }, [shouldTrack, callback])

    return [err];
}