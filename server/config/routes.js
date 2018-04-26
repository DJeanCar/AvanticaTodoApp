import { createTodo, getTodos } from '../controllers/todos';

export default (app) => {
	app.get('/', (req, res) => res.render('home.html'));

  app.get('/api/todos', getTodos);
  app.post('/api/todos', createTodo);
  //
	// app.get('/api/todos/search', searchTodos);
}
