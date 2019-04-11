import { composeWithDevTools } from 'redux-devtools-extension';
import { RootReducer } from '../Reducers/RootReducer';

export default ['$ngReduxProvider', ($ngReduxProvider: any) => {
    $ngReduxProvider.createStoreWith(
        RootReducer,
        [],
        [composeWithDevTools()]
    );
}];
