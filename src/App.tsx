import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import { createContext, useState } from 'react'
import data from "../data.json"
import Layout from './Component/Layout'
import Home from './Component/Home'
import Page from './Component/Page'

export const AudiophileEcommerceWebsite = createContext<any>(null)

interface Cart{
  image:string,
  name:string,
  price:number,
  quantity:number
}

function App() {
  const [Pages, setPage] = useState<any>()
  const [cart, setCart] = useState<Cart[]|[]>([])
  const [total, setTotal] = useState<boolean>(false)

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/home",
          element:<Home/>
        },
        {
          path:"/:page",
          element:<Page/>
        }
      ]
    }
  ])

  return (
    <>
      <AudiophileEcommerceWebsite.Provider value={{
        data,
        setPage,
        Pages,
        cart,
        setCart,
        total,
        setTotal
      }} >
        <RouterProvider router={router} />
        </AudiophileEcommerceWebsite.Provider>
    </>
  )
}

export default App
