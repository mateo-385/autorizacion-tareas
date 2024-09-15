export const todosPage = () => {
  // Elements
  const main = document.createElement('div')
  const todosContainer = document.createElement('div')
  const taskForm = document.createElement('form')
  const taskInput = document.createElement('input')
  const taskButton = document.createElement('button')
  const divider = document.createElement('div')
  const todos = document.createElement('div')

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

  todos.id = 'todos'

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

  todos.classList.add('flex', 'flex-col', 'gap-1', 'w-full')

  fetch('http://localhost:4000/todos', {
    method: 'GET',
    credentials: 'include',
  })
    .then((response) => response.json())
    .then((data) => {
      data.todos.forEach((todo) => {
        //Elements

        const todoElement = document.createElement('div')
        const todoCheckbox = document.createElement('input')
        const todoTitle = document.createElement('span')
        const todoActions = document.createElement('div')
        const todoEdit = document.createElement('button')
        const todoDelete = document.createElement('button')

        //Attributes
        todoElement.id = `todo-${todo.id}`

        todoElement.classList.add('flex', 'items-center', 'mb-2')

        //Checkbox
        todoCheckbox.type = 'checkbox'
        todoCheckbox.id = `todo-checkbox-${todo.id}`
        todoCheckbox.checked = todo.completed ? true : false
        todoCheckbox.classList.add(
          'checkbox',
          'checkbox-md',
          'rounded-full',
          'ml-3',
          'mr-2'
        )

        //Title
        todoTitle.id = `task-title-${todo.id}`
        todoTitle.classList.add('text-xl', 'pl-2', 'py-3', 'flex-grow')
        todoTitle.textContent = todo.title

        //Actions
        todoActions.classList.add('flex', 'gap-2')

        todoEdit.id = `todo-edit-${todo.id}`
        todoEdit.textContent = 'Edit'
        todoEdit.classList.add('btn', 'btn-sm', 'btn-success', 'font-semibold')

        todoDelete.id = `todo-delete-${todo.id}`
        todoDelete.textContent = 'Delete'
        todoDelete.classList.add('btn', 'btn-sm', 'btn-error', 'font-semibold')

        //Append
        todoElement.appendChild(todoCheckbox)
        todoElement.appendChild(todoTitle)
        todoActions.appendChild(todoEdit)
        todoActions.appendChild(todoDelete)
        todoElement.appendChild(todoActions)
        todos.appendChild(todoElement)
      })
    })

  taskForm.appendChild(taskInput)
  taskForm.appendChild(taskButton)
  todosContainer.appendChild(taskForm)
  todosContainer.appendChild(divider)
  todosContainer.appendChild(todos)
  main.appendChild(todosContainer)
  return main
}
