import { getAllTodos, createTodo } from '../services/apiServices.js'
import { renderTodos } from '../utils/renderTodos.js'

export const todosPage = () => {
  // Elements
  const main = document.createElement('div')
  const todosContainer = document.createElement('div')
  const todoForm = document.createElement('form')
  const todoInput = document.createElement('input')
  const todoButton = document.createElement('button')
  const divider = document.createElement('div')
  const todosList = document.createElement('div')

  // Attributes
  todosContainer.id = 'todos-container'

  todoForm.autocomplete = 'off'
  todoForm.id = 'todo-form'

  todoInput.id = 'todo-input'
  todoInput.type = 'text'
  todoInput.placeholder = 'Add a new task'
  todoInput.required = true

  todoButton.id = 'todo-button'
  todoButton.type = 'submit'
  todoButton.textContent = 'Add Task'

  divider.textContent = 'My tasks'

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

  todoForm.classList.add('flex', 'items-center', 'space-x-2', 'w-full')

  todoInput.classList.add(
    'input',
    'input-bordered',
    'w-full',
    'focus:ring',
    'focus:ring-opacity-50',
    'focus:ring-primary',
    'text-lg',
    'dark:placeholder-neutral-600'
  )

  todoButton.classList.add(
    'btn',
    'btn-primary',

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

  // Events
  todoForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const todo = todoInput.value

    if (!todo) {
      return
    }

    const response = await createTodo({ title: todo })

    if (response) {
      const todoElement = renderTodos(response.todo)
      todosList.appendChild(todoElement)
      todoInput.value = ''
    }
  })

  todoForm.appendChild(todoInput)
  todoForm.appendChild(todoButton)
  todosContainer.appendChild(todoForm)
  todosContainer.appendChild(divider)
  todosContainer.appendChild(todosList)
  main.appendChild(todosContainer)

  return main
}
