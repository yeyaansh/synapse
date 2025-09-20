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
import ProtectedRoutes from "./pages/routes/protected-routes";
import PublicOnlyRoutes from "./pages/routes/public-routes";

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
          {/* Public Routes */}
          <Route element={<PublicOnlyRoutes></PublicOnlyRoutes>}>
            <Route path="/" element={<HomePage></HomePage>}></Route>

            <Route path="/auth" element={<AuthLayout></AuthLayout>}>
              <Route
                index
                element={<Navigate to={"register"}></Navigate>}
              ></Route>
              <Route
                path="register"
                element={<RegisterPage></RegisterPage>}
              ></Route>
              <Route path="login" element={<LoginPage></LoginPage>}></Route>
            </Route>
          </Route>

          {/* Protected Routes */}
          <Route element={<ProtectedRoutes />}>
            <Route
              path="/audit"
              element={<OnboardingLayout></OnboardingLayout>}
            >
              <Route index element={<Navigate to="start"></Navigate>}></Route>
              <Route
                path="start"
                element={<OnboardingPage></OnboardingPage>}
              ></Route>
            </Route>

            <Route
              path="/dashboard"
              element={<UserDashboardLayout></UserDashboardLayout>}
            >
              <Route index element={<Navigate to="home"></Navigate>}></Route>
              <Route
                path="home"
                element={<UserDashboard></UserDashboard>}
              ></Route>
            </Route>
          </Route>

          <Route path="*" element={<NoPage></NoPage>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
