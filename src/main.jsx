import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { store } from "./Redux/Store.js";
import { Provider } from "react-redux";

import Layout from "./Pages/Layout.jsx";
import SignIn from "./Pages/SignIn.jsx";
import SignUp from "./Pages/SignUp.jsx";
import Student from "./Pages/Student.jsx";
import Class from "./Pages/Class.jsx";
import Counselling from "./Pages/Counselling.jsx";
import Statics from "./Pages/Statics.jsx";
import Help from "./Pages/Help.jsx";
import Admin from "./Pages/Admin.jsx";
import Contact from "./Pages/Contact.jsx";
import LandingPage from "./Pages/LandingPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/dashboard",
    element: <Layout/>,
    children: [
      {
        path: "/dashboard/Students",
        element: <Class />,
      },{
        path: "/dashboard/Student",
        element: <Student />,
      },{
        path: "/dashboard/Counselling",
        element: <Counselling/>,
      },
      {
        path: "/dashboard/Statics",
        element: < Statics/>,
      },
      {
        path: "/dashboard/help",
        element: < Help/>,
      },
      {
        path: "/dashboard/admin",
        element: < Admin/>,
      },
      {
        path: "/dashboard/contact",
        element: < Contact/>,
      },
    ],
  },

  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
