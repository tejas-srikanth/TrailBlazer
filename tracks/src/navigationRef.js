import { NavigationActions } from 'react-navigation';

let navigator;

export const setNavigator = (nav) => {
    navigator = nav ;
}
//navigation for non-component files
export const navigate = (routeName, params) => {
    navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    )
}