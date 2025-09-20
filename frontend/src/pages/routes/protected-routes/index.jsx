import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router";
import LoadingSpinner from "../../../utils/spinner";

const ProtectedRoutes = () => {
  const location = useLocation();

  const { isAuthenticated, isLoading, isCompletedChecks, user } = useSelector(
    (state) => state.auth
  );

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;



  if (
    isAuthenticated &&
    user?.hasCompletedAssessment &&
    location.pathname == ("/audit/start" || "/audit")
  )
    return <Navigate to="/dashboard/home" />;

  if (
    isAuthenticated &&
    user?.hasCompletedAssessment &&
    location.pathname != ("/audit/start" || "/audit")
  )
    return <Outlet></Outlet>;

    if (isAuthenticated && !user?.hasCompletedAssessment &&
    location.pathname == ("/audit/start" || "/audit") )
    return <Outlet></Outlet>;

    if (isAuthenticated && !user?.hasCompletedAssessment &&
    location.pathname !== ("/audit/start" || "/audit") )
    return <Navigate to="/audit/start"/>;


  if (isCompletedChecks) return <Navigate to="/auth/login" replace></Navigate>;
};

export default ProtectedRoutes;
