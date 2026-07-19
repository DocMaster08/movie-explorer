import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import DetailsPage from './pages/DetailsPage.jsx'

const router = createBrowserRouter([
  {path:"/", element:<HomePage></HomePage>},
  {path:"/movie/:id", element:<DetailsPage/>},
  {path:"*", element:<NotFoundPage/>}
])

function App() {
  return <div>
    <RouterProvider router={router}/>
  </div>
}

export default App