import createDataContext from './createDataContext';


const locationReducer = (state, action) => {
    switch(action.type){
        case 'add_current_location':
            return { ...state, currentLocation: action.payload }
        case 'add_location':
            return { ...state, locations: [...state.locations, action.payload] }
        case 'start_recording':
            return { ...state, recording: true }
        case 'stop_recording':
            return { ...state, recording: false }
        case 'change_name':
            return { ...state, currentName: action.payload }
        case 'reset':
            return { ...state, locations: [], currentName: ''}
        default:
            return state
    }
}
//start recording the user's track
const startRecording = dispatch => () => {
    dispatch({ type: 'start_recording'})
};

//stop recording the user's track
const stopRecording = dispatch => () => {
    dispatch({ type: 'stop_recording'})
};

//add a location to the locations array
const addLocation = dispatch => (recording, location) => {
    dispatch({ type: 'add_current_location', payload: location})

    if (recording){
        dispatch({ type: 'add_location', payload: location})
    }
};

//change the trail name
const changeName = dispatch => (name) => {
    dispatch({ type: 'change_name', payload: name })
}

//user saved the track, reset path and text input
const reset = dispatch => () => {
    dispatch({ type: 'reset' })
}


export const { Context, Provider } = createDataContext(
    locationReducer,
    { startRecording, stopRecording, addLocation, changeName, reset },
    { recording: false, locations: [], currentLocation: null, currentName: ''}
)