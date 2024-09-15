import { getAllTodos } from '../services/apiServices.js'
import { renderTodos } from '../utils/renderTodos.js'

export const todosPage = () => {
  // Elements
  const main = document.createElement('div')
  const todosContainer = document.createElement('div')
  const taskForm = document.createElement('form')
  const taskInput = document.createElement('input')
  const taskButton = document.createElement('button')
  const divider = document.createElement('div')
  const todosList = document.createElement('div')

  // Attributes
  todosContainer.id = 'todos-container'

  taskForm.autocomplete = 'off'
  taskForm.id = 'task-form'

  taskInput.id = 'task-input'
  taskInput.type = 'text'
  taskInput.placeholder = 'Enter a task'
  taskInput.required = true

  taskButton.id = 'task-button'
  taskButton.type = 'submit'
  taskButton.textContent = 'Add Task'

  divider.textContent = 'My Tasks'

  todosList.id = 'todos'

  // Classes
  main.classList.add('w-full')

  todosContainer.classList.add(
    'flex',
    'flex-col',
    'items-center',
    'my-5',
    'p-6',
    'max-w-lg',
    'mx-auto',
    'rounded-xl',
    'shadow-md',
    'bg-base-300',
    'border',
    'border-gray-200',
    'dark:border-gray-700'
  )

  taskForm.classList.add('flex', 'items-center', 'space-x-2', 'w-full')

  taskInput.classList.add(
    'input',
    'input-bordered',
    'w-full',
    'focus:ring',
    'focus:ring-opacity-50',
    'focus:ring-primary',
    'text-lg',
    'rounded-full',
    'dark:placeholder-neutral-600'
  )

  taskButton.classList.add(
    'btn',
    'btn-primary',
    'rounded-full',
    'text-lg',
    'font-semibold'
  )

  divider.classList.add('divider', 'font-semibold')

  todosList.classList.add('flex', 'flex-col', 'gap-1', 'w-full')

  getAllTodos().then((data) => {
    data.todos.forEach((todo) => {
      const todoElement = renderTodos(todo)
      todosList.appendChild(todoElement)
    })
  })

  taskForm.appendChild(taskInput)
  taskForm.appendChild(taskButton)
  todosContainer.appendChild(taskForm)
  todosContainer.appendChild(divider)
  todosContainer.appendChild(todosList)
  main.appendChild(todosContainer)

  return main
}
