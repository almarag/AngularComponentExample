import { TODOS } from '../Types/todos';

function addTodo(todo: string) {
    return {
        payload: todo,
        type: TODOS.ADD_TODO
    };
}

function removeTodo(index: string) {
    return {
        payload: index,
        type: TODOS.REMOVE_TODO
    };
}

export default { addTodo, removeTodo };
