import "./App.css";
import { Routes, Route, BrowserRouter, Navigate } from "react-router";
import RegisterPage from "./pages/authentication/register";
import AuthLayout from "./layout/authLayout";
import HomePage from "./pages/homePage";
import NoPage from "./pages/noPage";
import LoginPage from "./pages/authentication/login";
import OnboardingLayout from "./layout/onboardingLayout";
import OnboardingPage from "./pages/onboarding";

function App() {
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
              element={<OnboardingPage></OnboardingPage>}
            ></Route>
          </Route>
          <Route path="*" element={<NoPage></NoPage>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
