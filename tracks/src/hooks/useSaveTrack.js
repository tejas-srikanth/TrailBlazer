import { useContext } from 'react';
import { Context as TrackContext } from '../context/TrackContext';
import { Context as LocationContext } from '../context/LocationContext';
import { navigate } from '../navigationRef';

export default () => {
    const { createTrack } = useContext(TrackContext);
    const { state: { currentName, locations }, reset } = useContext(LocationContext);

    //save the track to the api and go to tracklist
    const saveTrack = async () => {
        await createTrack(currentName, locations);
        reset();
        navigate('TrackList');
    }

    return [saveTrack];
}
