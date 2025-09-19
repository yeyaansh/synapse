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

function App() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authCheckGlobal());
  }, [dispatch]);
  return (
    <>
      <BrowserRouter>
        <Routes>
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
          <Route path="*" element={<NoPage></NoPage>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
