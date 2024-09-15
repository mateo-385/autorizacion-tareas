export const loginPage = () => {
  // Eslements
  const container = document.createElement('div')
  const title = document.createElement('h1')
  const form = document.createElement('form')
  const error = document.createElement('div')
  const labelUsername = document.createElement('label')
  const inputUsername = document.createElement('input')
  const labelPassword = document.createElement('label')
  const inputPassword = document.createElement('input')
  const buttonLogin = document.createElement('button')

  //Attributes
  container.id = 'container'
  title.id = 'title'
  form.id = 'form'
  error.id = 'message'
  labelUsername.id = 'label-username'
  inputUsername.id = 'username'
  inputUsername.type = 'text'
  inputUsername.required = true
  inputUsername.placeholder = 'Username'
  labelPassword.id = 'label-password'
  inputPassword.id = 'password'
  inputPassword.type = 'password'
  inputPassword.required = true
  inputPassword.placeholder = 'Password'
  buttonLogin.id = 'login'
  buttonLogin.type = 'submit'

  //Classes
  container.classList.add(
    'w-96',
    'mx-auto',
    'bg-base-200',
    'p-6',
    'rounded-lg',
    'mt-20'
  )
  title.classList.add('text-3xl', 'font-semibold', 'mb-5', 'text-center')
  form.classList.add('login-form', 'flex', 'flex-col', 'gap-4')
  error.classList.add('text-error')
  labelUsername.classList.add('input', 'input-bordered', 'flex', 'gap-2')
  inputUsername.classList.add('grow')
  labelPassword.classList.add('input', 'input-bordered', 'flex', 'gap-2')
  inputPassword.classList.add('grow')
  buttonLogin.classList.add('btn', 'btn-primary', 'rounded-full', 'text-base')

  //Content
  title.textContent = 'Sign In'
  buttonLogin.textContent = 'Sign In'

  // Events
  form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const username = inputUsername.value
    const password = inputPassword.value

    if (!username || !password) {
      error.textContent = 'Por favor, completa todos los campos.'
      return
    }

    try {
      const response = await fetch('http://localhost:4000/auth/sign-in', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })

      if (!response.ok) {
        error.textContent = 'Incorrect username or password'
        return
      }

      const data = await response.json()
      console.log(data)
      window.location.pathname = '/home'
    } catch (error) {}
  })

  // Append elements
  labelUsername.appendChild(inputUsername)
  labelPassword.appendChild(inputPassword)
  form.appendChild(labelUsername)
  form.appendChild(labelPassword)
  form.appendChild(error)
  form.appendChild(buttonLogin)
  container.appendChild(title)
  container.appendChild(form)

  return container
}
