import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
// import { createContext } from "react";
import Navbar from "./component/Navbar.js";
import Body from "./component/Body.js";
import About from "./component/About.js";
import Contact from "./component/Contact.js";
import Error from "./component/Error.js";
import Menu from "./component/Menu.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Usercontext from "./utils/Usercontext.js";
//import Grocery from './component/Grocery.js';

//chunking
//code splitting
// Dynamic bundling
//lazy loader

// now import the grocery component using lazy loading
const Grocery = lazy(() => import("./component/Grocery.js"));

// const Firstname = createContext();

const App = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    const data = {
      name: "Rafiya",
      age: "20",
    };
    setUser(data.name);
  }, []);

  return (
    <div>
      <Usercontext.Provider value={{ logged: user, setUser }}>
        <Navbar />
        <Outlet />
      </Usercontext.Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <Menu />,
      },

      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading the grocery</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// export default App;
// export { Firstname };
