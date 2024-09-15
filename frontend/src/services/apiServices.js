const API_URL = 'http://localhost:4000/todos'

export async function getAllTodos() {
  const response = await fetch(`${API_URL}`, {
    method: 'GET',
    credentials: 'include',
  })
  const data = await response.json()
  return data
}

export async function createTask(task) {
  const response = await fetch(`${API_URL}`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  })

  const data = await response.json()

  return data
}

export async function updateTask(id, task) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  })

  return response
}

export async function deleteTask(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
    credentials: 'include',
  })

  return response
}
