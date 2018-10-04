import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import listReducer from './list_reducer';

const rootReducer = combineReducers({
    list: listReducer,
    form: formReducer
});

export default rootReducer;
