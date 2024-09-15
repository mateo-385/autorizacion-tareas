import { database } from '../db/database.js'

export const getAllTodosCtrl = (req, res) => {
  const user = req.user

  if (!user) {
    return res.status(401).json({ message: 'No autorizado' })
  }

  const todos = database.todos.filter((todo) => todo.owner === user.id)

  res.json({ todos })
}

export const createTodoCtrl = (req, res) => {
  const user = req.user
  const { title } = req.body

  if (!user) {
    return res.status(401).json({ message: 'No autorizado' })
  }
  if (!title) {
    return res.status(400).json({ message: 'Falta el título' })
  }

  const newTodo = {
    id: database.todos.length + 1,
    title,
    completed: false,
    owner: user.id,
  }

  database.todos.push(newTodo)

  res.json({ message: 'Tarea creada', todo: newTodo })
}

export const updateTodoCtrl = (req, res) => {
  const user = req.user

  if (!user) {
    return res.status(401).json({ message: 'No autorizado' })
  }

  const { id } = req.params
  const { title, completed } = req.body
  const todo = database.todos.find((todo) => todo.id === Number(id))

  if (!title) {
    return res.status(400).json({ message: 'Falta el título' })
  }
  if (!todo) {
    return res.status(404).json({ message: 'Tarea no encontrada' })
  }
  if (todo.owner !== user.id) {
    return res.status(403).json({ message: 'No permitido' })
  }

  todo.title = title || todo.title
  todo.completed = completed || todo.completed

  res.json({ message: 'Tarea actualizada', todo })
}

export const deleteTodoCtrl = (req, res) => {
  const user = req.user
  const { id } = req.params
  const todo = database.todos.find((todo) => todo.id === Number(id))

  if (!user) {
    return res.status(401).json({ message: 'No autorizado' })
  }

  if (!todo) {
    return res.status(404).json({ message: 'Tarea no encontrada' })
  }
  if (todo.owner !== user.id) {
    return res.status(403).json({ message: 'No permitido' })
  }

  database.todos = database.todos.filter((todo) => todo.id !== Number(id))

  res.json({ message: 'Tarea eliminada' })
}
