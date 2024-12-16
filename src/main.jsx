import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layouts/Root';
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import AuthProvider from './providers/AuthProvider';
import Dashboard from './layouts/Dashboard';
import AdminHome from './pages/Dashboard/AdminHome/AdminHome';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'registration',
        element: <Registration></Registration>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'adminHome',
        element: <AdminHome></AdminHome>
      }]

  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
