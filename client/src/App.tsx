import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { ThemeProvider } from "./components/theme-provider"
import { TooltipProvider } from "./components/ui/tooltip"

import MainLayout from "./layouts/main-layout"
import Login from "./routes/login"
import ForgotPassword from "./routes/forgot-password"
import SignUp from "./routes/sign-up"
import Home from "./routes/home"
import Income from "./routes/income"
import Expenses from "./routes/expenses"

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/income',
          element: <Income />
        },
        {
          path: '/expenses',
          element: <Expenses />
        }
      ]
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/forgot-password',
      element: <ForgotPassword />
    },
    {
      path: '/sign-up',
      element: <SignUp />
    }
  ])

  return (
    <ThemeProvider>
      <TooltipProvider>
        <RouterProvider router={router} />
      </TooltipProvider>
    </ThemeProvider>
  )
}

export default App