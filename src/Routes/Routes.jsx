import React from 'react';
import { createBrowserRouter } from "react-router";
import HomeLayout from '../layouts/HomeLayout';
import Home from '../pages/Home/Home';
import MyProfile from '../pages/MyProfile/MyProfile';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import SkillsDetails from '../pages/SkillsDetails/SkillsDetails';


export const router = createBrowserRouter([
  {
    path: "/",
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
        Component: SkillsDetails,
      },
      {
        path: "my-profile",
        Component: MyProfile,
      }
    ]
  },
  {
    path: "auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/signup",
        Component: SignUp,
      }
    ]
  }
]);