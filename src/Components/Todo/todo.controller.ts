import TodoActions from '../../Actions/todos';

class TodoController {
    [x: string]: any;

    private todo: string;
    private unsubscribe: () => void;

    public constructor($ngRedux: any) {
        this.todo = '';
        this.unsubscribe = $ngRedux.connect(this.mapStateToThis, TodoActions)(this);
    }

    public submitTodo() {
        this.addTodo(this.todo);
        this.todo = '';
    }

    public $onDestroy() {
        this.unsubscribe();
    }

    public mapStateToThis(state: any) {
        return {
            todos: state.todos
        };
    }
}

TodoController.$inject = ['$ngRedux'];

export default TodoController;
