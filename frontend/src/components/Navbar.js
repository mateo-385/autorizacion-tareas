export function Navbar(user) {
  // Elements
  const navbar = document.createElement('div')
  const navbarStart = document.createElement('div')
  const navbarEnd = document.createElement('div')
  const logo = document.createElement('a')
  const msg = document.createElement('p')
  const logout = document.createElement('button')

  // Attributes
  logo.href = '/'
  logo.textContent = 'Task App'
  msg.textContent = `Hi, ${user.username}`
  logout.textContent = 'Logout'

  // Classes
  navbar.classList.add('navbar')
  navbarStart.classList.add('navbar-start')
  navbarEnd.classList.add('navbar-end', 'space-x-4')
  logo.classList.add('btn', 'btn-ghost', 'text-xl')
  msg.classList.add('text-base')
  logout.classList.add('btn', 'btn-outline')

  // Append

  navbarStart.appendChild(logo)
  navbarEnd.appendChild(msg)
  navbarEnd.appendChild(logout)
  navbar.appendChild(navbarStart)
  navbar.appendChild(navbarEnd)

  return navbar
}
