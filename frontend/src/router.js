import { loginPage } from './pages/loginPage'
import { homePage } from './pages/homePage'
import { todosPage } from './pages/todosPage'
import { Navbar } from './components/Navbar'

import { validateSession } from './helpers/validateSession'

export async function router(path, app) {
  const result = await validateSession()

  if (path !== '/') {
    if (!result) {
      window.location.pathname = '/'
    }
  }

  if (path === '/') {
    app.appendChild(loginPage())
    return
  }

  if (path === '/home') {
    app.appendChild(homePage())
    return
  }

  if (path === '/todos') {
    app.appendChild(Navbar(result.user))
    app.appendChild(todosPage())
    return
  }
}
