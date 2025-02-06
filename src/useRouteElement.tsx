import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import RegisterLayout from './layouts/RegisterLayout'
import MainLayout from './layouts/MainLayout'
import Setting from './pages/Setting'
import Task from './pages/Task'
import { useSelector } from 'react-redux'
import { RootState } from './store'
import Message from './pages/Message'
import File from './pages/File'

function ProtectedRoute() {
  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated)
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}

function RejectedRoute() {
  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated)
  return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
}

export default function useRouteElement() {
  const routeElements = useRoutes([
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: '/',
          element: (
            <MainLayout>
              <Home />
            </MainLayout>
          )
        },
        {
          path: '/time-line',
          element: (
            <MainLayout>
              <Home />
            </MainLayout>
          )
        },
        {
          path: '/task',
          element: (
            <MainLayout>
              <Task />
            </MainLayout>
          )
        },

        {
          path: '/setting',
          element: (
            <MainLayout>
              <Setting />
            </MainLayout>
          )
        },
        {
          path: '/file',
          element: (
            <MainLayout>
              <File />
            </MainLayout>
          )
        },
        {
          path: '/message',
          element: (
            <MainLayout>
              <Message />
            </MainLayout>
          )
        }
      ]
    },
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: '/login',
          element: (
            <RegisterLayout>
              <Login />
            </RegisterLayout>
          )
        },
        {
          path: '/register',
          element: (
            <RegisterLayout>
              <Register />
            </RegisterLayout>
          )
        }
      ]
    }
  ])
  return routeElements
}
