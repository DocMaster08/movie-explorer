import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import FavoritesPage from './pages/FavoritesPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import DetailsPage from './pages/DetailsPage.jsx'

const router = createBrowserRouter([
  {path:"/", element:<HomePage></HomePage>},
  {path:"/favorites", element:<FavoritesPage/>},
  {path:"/movie/:id", element:<DetailsPage/>},
  {path:"*", element:<NotFoundPage/>}
])


function App() {
  return <div>
    <RouterProvider router={router}/>
  </div>
}

export default App