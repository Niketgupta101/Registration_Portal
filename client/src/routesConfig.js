import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import UserAuth from './components/Auth/UserAuth';
import Home from './components/Home/Home';
import Inf from './components/MyJobs/INF/Inf';
import Jnf from './components/MyJobs/JNF/Jnf';
import MyJobs from './components/MyJobs/MyJobs';

export const layoutRoutes = [
  {
    path: '/',
    component: () => <Home />,
    exact: true,
    name: 'home',
    meta: {
      requireAuth: true,
      role: 'user',
    },
  },
  //   {
  //     path: '/create/inf/:InfId',
  //     component:  <Inf />,
  //     exact: true,
  //     name: 'INF',
  //     meta: {
  //       requireAuth: true,
  //       role: 'user',
  //     },
  //   },
  //   {
  //     path: '/create/jnf/:JnfId',
  //     component: () => <Jnf />,
  //     exact: true,
  //     name: 'JNF',
  //     meta: {
  //       requireAuth: true,
  //       role: 'user',
  //     },
  //   },
];
export const routes = [
  {
    path: '/auth',
    component: () => <UserAuth />,
    exact: true,
    name: 'auth',
    meta: {
      requireAuth: false,
    },
  },
];
const PermissionDenied = () => <p> Access Denied </p>;

export const CustomRoute = ({ component: Component, path, role, ...rest }) => {
  return (
    <Route
      path={path}
      {...rest}
      render={(props) => {
        if (
          !localStorage.length ||
          localStorage.getItem('user') === undefined ||
          JSON.parse(localStorage.getItem('user'))?.isVerified === false
        ) {
          return <Navigate to='/auth' />;
        }
        const userRole = JSON.parse(localStorage.getItem('user')).role;

        if (userRole === 'Admin' || role === userRole) {
          return <Component {...props} />;
        }

        return <PermissionDenied />;
        // return Role ? <Comp {...props} /> : <Redirect to='/' />;
      }}
    />
  );
};
