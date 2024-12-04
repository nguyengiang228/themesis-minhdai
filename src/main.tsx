import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ScrollToTop from "./ScrollToTop.tsx";
import LoginPage from "./pages/Login/index.tsx";
import RegisterPage from "./pages/Register/index.tsx";
import ForgotPassPage from "./pages/ForgotPass/index.tsx";
import NewPassword from "./pages/ForgotPass/component/index.tsx";
import IntroducePage from "./pages/IntroducePage/index.tsx";
import FeedbackPage from "./pages/Feedback/index.tsx";
import NewsPage from "./pages/News/index.tsx";
import ProjectPage from "./pages/ProjectPage/index.tsx";
import ContactPage from "./pages/Contact/index.tsx";
import SliderScroll from "./components/Slider/SliderScroll.tsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/login-user",
      element: <App />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassPage />,
    },
    {
      path: "/news-pass",
      element: <NewPassword />,
    },
    {
      path: "/introduce",
      element: <IntroducePage />,
    },
    {
      path: "/feedback",
      element: <FeedbackPage />,
    },
    {
      path: "/news",
      element: <NewsPage />,
    },
    {
      path: "/project",
      element: <ProjectPage />,
    },
    {
      path: "/contact",
      element: <ContactPage />,
    },
    { path: "/child-page", element: <SliderScroll /> },
  ].map((x) => ({
    ...x,
    element: <ScrollToTop>{x.element}</ScrollToTop>,
  }))
);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
