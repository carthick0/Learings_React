import React from "react";
import Navbar from "./components/Navbar";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import { UserProvider } from "./utils/userContext";
import { Provider } from "react-redux";
import store from "./utils/store";

const AppLayout=()=>{
  return (
    <>
    <Navbar/>
    <div className="mt-20 px-4">
        <Outlet/>
    </div>
    </>
  )
};const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);


function App(){
  return(
    <UserProvider>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
    </UserProvider>
  )
}
export default App;