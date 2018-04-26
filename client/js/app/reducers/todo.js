import {
  CREATE_TODO_PENDING,
  CREATE_TODO_FULFILLED,
  CREATE_TODO_REJECTED,

  GET_TODOS_PENDING,
  GET_TODOS_FULFILLED,
  GET_TODOS_REJECTED,
} from '../actions';

const initialState = {
  todos: [],
  loading: false,
}

const todo = (state = initialState, action) => {
  switch (action.type) {

    case CREATE_TODO_PENDING: {
      return {
        ...state,
        loading: true,
      };
      break;
    }

    case CREATE_TODO_FULFILLED: {
      const { todo } = action.payload.body;
      return {
        ...state,
        todos: [todo].concat(state.todos),
        loading: false,
      };
      break;
    }

    case GET_TODOS_PENDING:
      return {
        ...state,
        loading: true,
      };
      break;

    case GET_TODOS_FULFILLED: {
      const { todos } = action.payload.body;
      return {
        ...state,
        todos,
        loading: false,
      };
      break;
    }

    default: {
      return state;
    }
  }
};

export default todo;
