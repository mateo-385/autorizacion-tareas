import logo from '../../public/homepage.gif'

export const homePage = () => {
  // Elements
  const container = document.createElement('div')
  const logoHome = document.createElement('div')
  const btnLogout = document.createElement('button')
  const btnTodos = document.createElement('button')

  // Attributes
  logoHome.innerHTML = `<img src="${logo}" alt="homepage" />`
  btnLogout.textContent = 'Logout'
  btnTodos.textContent = 'View todos'

  // Classes
  container.classList.add(
    'flex',
    'items-center',
    'justify-center',
    'h-screen',
    'flex-col',
    'gap-4'
  )

  btnLogout.classList.add('btn', 'btn-primary', 'text-lg')

  btnTodos.classList.add('btn', 'btn-secondary', 'text-lg')

  // Events
  btnLogout.addEventListener('click', async () => {
    const response = await fetch('http://localhost:4000/auth/sign-out', {
      method: 'POST',
      credentials: 'include',
    })

    if (response.ok) {
      window.location.pathname = '/'
    }
  })

  btnTodos.addEventListener('click', () => {
    window.location.pathname = '/todos'
  })

  // Append
  container.appendChild(logoHome)
  container.appendChild(btnTodos)
  container.appendChild(btnLogout)

  return container
}
