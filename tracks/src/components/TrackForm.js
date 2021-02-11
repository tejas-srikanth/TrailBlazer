import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import { Context as LocationContext } from '../context/LocationContext';
import Spacer from './Spacer'
import useSaveTrack from '../hooks/useSaveTrack'

//bottom of track create screen, records the path and the name
const TrackForm = () => {
    const { state: { recording, currentName, locations}, startRecording, stopRecording, changeName } = useContext(LocationContext);
    const [saveTrack] = useSaveTrack();
    return (
        <>
            <Input placeholder="Track title here" onChangeText={changeName} value={currentName}/>
            {!recording 
            ? <Button title="Start Recording" onPress={startRecording} />
            : <Button title="Stop" onPress={stopRecording} />}
            <Spacer />
            {!recording && locations.length > 0
            ? <Button title="Save Track" onPress={saveTrack} />
            : null
            }
        </>
    )
}

export default TrackForm;