import useRouteElement from './useRouteElement'
import { ToastContainer } from 'react-toastify'

function App() {
  const routeElement = useRouteElement()
  return (
    <>
      {routeElement}
      <ToastContainer />
    </>
  )
}

export default App
