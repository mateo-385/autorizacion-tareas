import { updateTodo, deleteTodo } from '../services/apiServices'

export async function editTodoCompleted(todo) {
  const updatedTodo = {
    title: todo.title,
    completed: !todo.completed,
  }
  await updateTodo(todo.id, updatedTodo)
}

export async function editTodoTitle(todo) {
  const todoTitle = document.getElementById(`task-title-${todo.id}`)
  const newTtitle = prompt('Edit task', todo.title)
  if (newTtitle) {
    const updatedTodo = {
      title: newTtitle,
      completed: todo.completed,
    }
    await updateTodo(todo.id, updatedTodo)
    todoTitle.textContent = newTtitle
  }
}

export async function deleteTodoElement(todo) {
  const todoElement = document.getElementById(`todo-${todo.id}`)
  const isConfirmed = confirm('Are you sure you want to delete this task?')
  if (isConfirmed) {
    await deleteTodo(todo.id)
    todoElement.remove()
  }
}
