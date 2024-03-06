import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './Landing'
import MainGoods from './MainGoods'
import GoodPage from './GoodPage'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing></Landing>,
      children: [{
        path: "/",
        element: <MainGoods></MainGoods>
      },
      {
        path: "/goods/:goodsID",
        element: <GoodPage></GoodPage>
      }
    ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App
