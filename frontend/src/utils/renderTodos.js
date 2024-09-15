export function renderTodos(todo) {
  //Elements
  const todoElement = document.createElement('div')
  const todoCheckbox = document.createElement('input')
  const todoTitle = document.createElement('span')
  const todoActions = document.createElement('div')
  const todoEdit = document.createElement('button')
  const todoDelete = document.createElement('button')

  //Todo Element
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

  return todoElement
}
