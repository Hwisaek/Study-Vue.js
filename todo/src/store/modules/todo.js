export default {
    namespaced: true,
    state: { //데이터
        todos: [
            { id: 1, text: "buy a car", checked: false },
            { id: 2, text: "play game", checked: false },
        ],
    },
    mutations: { // 데이터 변경
        ADD_TODO(state, value) {
            state.todos.push({
                id: Math.random(),
                text: value,
                checked: false,
            });
        },
        TOGGLE_TODO(state, { id, checked }) {
            const index = state.todos.findIndex((todo) => {
                return todo.id === id;
            });
            state.todos[index].checked = checked;
        },
        DELETE_TODO(state, todoId) {
            const index = state.todos.findIndex((todo) => {
                return todo.id === todoId;
            });
            state.todos.splice(index, 1);
        }
    },
    actions: { // 비동기 작업후 데이터 변경 시 사용
        addTodo({ commit }, value) {
            setTimeout(function () {
                commit('ADD_TODO', value)
            }, 500)
        },
        toggleTodo({ commit }, value) {
            setTimeout(function () {
                commit('TOGGLE_TODO', value)
            }, 500)
        },
        deleteTodo({ commit }, value) {
            setTimeout(function () {
                commit('DELETE_TODO', value)
            }, 500)
        },
    },
    getters: {
        numberOfCompletedTodo: state => {
            return state.todos.filter((todo) => todo.checked).length;
        }
    },
}