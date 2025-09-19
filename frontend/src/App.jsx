import "./App.css";
import { Routes, Route, BrowserRouter, Navigate } from "react-router";
import RegisterPage from "./pages/authentication/register";
import AuthLayout from "./layout/authLayout";
import HomePage from "./pages/homePage";
import NoPage from "./pages/noPage";
import LoginPage from "./pages/authentication/login";
import OnboardingLayout from "./layout/onboardingLayout";
import OnboardingPage from "./pages/onboarding";
import { useDispatch, useSelector } from "react-redux";
import { authCheckGlobal } from "./redux/slice1";
import { useEffect } from "react";
import LoadingSpinner from "./utils/spinner";
import UserDashboardLayout from "./layout/userDashboardLayout";
import UserDashboard from "./pages/dashboard/userDashboard";

function App() {
  const { isAuthenticated, isLoading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authCheckGlobal());
  }, [dispatch]);

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Navigate to={"/dashboard/home"}></Navigate>
              ) : (
                <HomePage></HomePage>
              )
            }
          ></Route>
          <Route path="/auth" element={<AuthLayout></AuthLayout>}>
            <Route
              index
              element={<Navigate to={"register"}></Navigate>}
            ></Route>
            <Route
              path="register"
              element={
                isAuthenticated ? (
                  <Navigate to={"/"}></Navigate>
                ) : (
                  <RegisterPage></RegisterPage>
                )
              }
            ></Route>
            <Route
              path="login"
              element={
                isAuthenticated ? (
                  <Navigate to={"/"}></Navigate>
                ) : (
                  <LoginPage></LoginPage>
                )
              }
            ></Route>
          </Route>

          <Route path="/audit" element={<OnboardingLayout></OnboardingLayout>}>
            <Route
              path=":qId"
              element={
                isAuthenticated ? (
                  <OnboardingPage></OnboardingPage>
                ) : (
                  <RegisterPage></RegisterPage>
                )
              }
            ></Route>
          </Route>

          <Route
            path="/dashboard"
            element={<UserDashboardLayout></UserDashboardLayout>}
          >
            <Route index element={<Navigate to={"home"}></Navigate>}></Route>
            <Route
              path="home"
              element={
                isAuthenticated ? (
                  <UserDashboard />
                ) : (
                  <Navigate to={"/auth/register"}></Navigate>
                )
              }
            ></Route>
          </Route>
          <Route path="*" element={<NoPage></NoPage>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
