import { combineReducers } from 'redux';
import { FormsReducer } from './FormsReducer';
import { MessagesReducer } from './MessagesReducer';
import { TodosReducer } from './TodosReducer';

export const RootReducer = combineReducers({
    forms: FormsReducer,
    messages: MessagesReducer,
    todos: TodosReducer
});
