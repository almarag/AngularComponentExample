import { RootReducer } from '../Reducers/RootReducer';

export default ['$ngReduxProvider', ($ngReduxProvider: any) => {
    $ngReduxProvider.createStoreWith(RootReducer);
}];
