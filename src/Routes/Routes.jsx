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
import ResetPassword from '../pages/ResetPassword/ResetPassword';
import Courses from '../pages/Courses/Courses';
import About from '../pages/About/About';
import Support from '../pages/Support/Support';
import Blogs from '../pages/Blogs/Blogs';


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
        path: "courses",
        Component: Courses,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "blogs",
        Component: Blogs,
      },
      {
        path: "support",
        Component: Support,
      },
      {
        path: "my-profile",
        element: <MyProfile></MyProfile>
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "signup",
        Component: SignUp,
      },
      {
        path: "reset-password",
        Component: ResetPassword,
      }
    ]
  },
  
]);