import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Components/Hader/Home/Home';
import Main from './Components/Layout/Main';
import OrderReview from './Components/OrderReview/OrderReview';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path: '/',
        element:<Home/>,
        loader: ()=> fetch('data.json')
      },{
        path: 'review',
        element: <OrderReview></OrderReview>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
