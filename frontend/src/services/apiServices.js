const API_URL = 'http://localhost:4000/todos'

export async function getAllTodos() {
  const response = await fetch(`${API_URL}`, {
    method: 'GET',
    credentials: 'include',
  })
  const data = await response.json()
  return data
}

export async function createTodo(todo) {
  const response = await fetch(`${API_URL}`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  })

  const data = await response.json()

  console.log(data)

  return data
}

export async function updateTodo(id, todo) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  })

  return response
}

export async function deleteTodo(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
    credentials: 'include',
  })

  return response
}
