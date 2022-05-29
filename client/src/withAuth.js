import React from 'react';
import { Navigate } from 'react-router-dom';

const PermissionDenied = () => <p> Access Denied </p>;
const withAuth = (Component, routeRole) => (props) => {
  const {
    location: { pathname },
  } = props;
  console.log({ Component, routeRole });
  if (
    !localStorage.length ||
    localStorage.getItem('user') === undefined ||
    JSON.parse(localStorage.getItem('user'))?.isVerified === false
  ) {
    return () => <Navigate to={{ pathname: '/auth', from: pathname }} />;
  }
  const userRole = JSON.parse(localStorage.getItem('user')).role;

  if (userRole === 'Admin' || routeRole === userRole) {
    return <Component />;
  }

  return () => <PermissionDenied />;
};

export default withAuth;
