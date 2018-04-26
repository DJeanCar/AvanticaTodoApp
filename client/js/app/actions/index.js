import request from 'superagent';

export const CREATE_TODO_PENDING = 'CREATE_TODO_PENDING';
export const CREATE_TODO_FULFILLED = 'CREATE_TODO_FULFILLED';
export const CREATE_TODO_REJECTED = 'CREATE_TODO_REJECTED';

export const GET_TODOS_PENDING = 'GET_TODOS_PENDING';
export const GET_TODOS_FULFILLED = 'GET_TODOS_FULFILLED';
export const GET_TODOS_REJECTED = 'GET_TODOS_REJECTED';

const createTodo = (todo) => {
  return {
    type: 'CREATE_TODO',
    payload: request.post('/api/todos').send(todo)
  };
};

const getTodos = () => {
  return {
    type: 'GET_TODOS',
    payload: request.get('/api/todos')
  };
};

export {
  createTodo,
  getTodos,
}
