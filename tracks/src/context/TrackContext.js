import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const trackReducer = (state, action) => {
    switch (action.type){
        case 'fetch_tracks':
            return action.payload;
        default:
            return state;
    }
}

//get all of the tracks from the api
const fetchTracks = dispatch => async () => {
    const response = await trackerApi.get('/tracks')
    dispatch({ type: 'fetch_tracks', payload: response.data })
};

//create a new track and post it to the api
const createTrack = dispatch => async (name, locations) => {
    await trackerApi.post('/tracks', { name, locations })
};

export const { Context, Provider } = createDataContext(trackReducer, { fetchTracks, createTrack }, [])