import { combineReducers } from 'redux';
import { MessagesReducer } from './MessagesReducer';
import { TodosReducer } from './TodosReducer';

export const RootReducer = combineReducers({
    messages: MessagesReducer,
    todos: TodosReducer
});
