import React from 'react';
import { createBrowserRouter } from "react-router";
import HomeLayout from '../layouts/HomeLayout';
import Home from '../pages/Home/Home';
import MyProfile from '../pages/MyProfile/MyProfile';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import SkillsDetails from '../pages/SkillsDetails/SkillsDetails';
import PrivateRoute from './PrivateRoute';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Loading from '../components/Loading/Loading';


export const router = createBrowserRouter([
  {
    path: "/",
    hydrateFallbackElement: <Loading></Loading>,
    errorElement: <ErrorPage></ErrorPage>,
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/demandingSkills.json")
      },
      {
        path: "/skill-details/:id",
        loader: () => fetch("/demandingSkills.json"),
        element: <PrivateRoute>
          <SkillsDetails></SkillsDetails>
        </PrivateRoute>
      },
      {
        path: "my-profile",
        Component: MyProfile,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "signup",
        Component: SignUp,
      }
    ]
  },
  // {
  //   path: "auth",
  //   Component: AuthLayout,
  //   children: [
  //     {
  //       path: "/auth/login",
  //       Component: Login,
  //     },
  //     {
  //       path: "/auth/signup",
  //       Component: SignUp,
  //     }
  //   ]
  // }
]);