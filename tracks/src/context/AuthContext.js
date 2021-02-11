import { AsyncStorage } from 'react-native'
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type){
        case 'add_err':
            return { ...state, errMessage: action.payload}
        case 'signin':
            return { errMessage: '', token: action.payload}
        case 'clear_error_message':
            return { ...state, errMessage: ''}
        case 'signout':
            return { token: null, errMessage: '' }
        default:
            return state
    }
};

//when navigating from signup to signin, clear error
const clearErrorMessage = (dispatch) => () => {
    dispatch({ type: 'clear_error_message'})
}

//signup automatically if user has signed up or signed in before
const autoSignup = (dispatch) => async () => {
    const token = await AsyncStorage.getItem('token')
    if (token){
        dispatch({ type: 'signin', payload: token})
        navigate('TrackList')
    } else {
        navigate('loginFlow')
    }
}

//user does not have an accoun
const signup = (dispatch) => async ({ email, password }) => {
        try {
            //Hi
            const response = await trackerApi.post('/signup', { email, password });
            
            await AsyncStorage.setItem('token', response.data.token)
            dispatch({ type: 'signin', payload: response.data.token})
            
            navigate('TrackList')
        } catch (err) {
            console.log(err.response.data)
            dispatch({ type: 'add_err', payload: 'Something went wrong with signup'})
            
        }
    }

//user has account
const signin = (dispatch) => async ({ email, password }) => {
        try{
            const response = await trackerApi.post('/signin', { email, password })
            console.log(response.data)
            await AsyncStorage.setItem('token', response.data.token)
            dispatch({ type: 'signin', payload: response.data.token})

            navigate('TrackList')
        } catch (err){
            dispatch({ type: 'add_err', payload: 'Something went wrong with signin'})
        }
    }

//user signs out
const signout = (dispatch) => async () => {
        await AsyncStorage.removeItem('token');
        dispatch({ type: 'signout'})

        navigate('loginFlow')
    }

//create the context
export const { Context, Provider } = createDataContext(
    authReducer, 
    {signup, signin, signout, clearErrorMessage, autoSignup}, 
    { token: null, errMessage: '' }
);



