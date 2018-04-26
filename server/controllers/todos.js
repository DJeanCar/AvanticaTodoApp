import Todo from '../models/todo';

const createTodo = async (req, res) => {
  const { name } = req.body;
  const todo = new Todo({
    name,
  });
  await todo.save();
  return res.json({
    todo,
  });
}

const getTodos = async (req, res) => {
  const todos = await Todo.find().sort('-createdAt');
  return res.json({
    todos,
  });
};

export {
  createTodo,
  getTodos,
}
