import React from 'react';

const Router = ({ children }) => {
  const path = window.location.pathname;
  return children.filter((child) => path === child.props.pathname)
}

export default Router;
