import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import LoadingSpinner from "../../../utils/spinner";

const PublicOnlyRoutes = () => {
  const { isAuthenticated, isLoading } = useSelector((state) => state.auth);

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  if (isAuthenticated) return <Navigate to="/dashboard/home" replace></Navigate>;

  return <Outlet></Outlet>;
};
export default PublicOnlyRoutes;
