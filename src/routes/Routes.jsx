import {useAuth} from "@/hooks/useAuth.js";
import {Layout} from "@/components/Layout/Layout.jsx";
import {ToolPages} from "@/pages/ToolPages/ToolPages.jsx";
import {ProtectedRoute} from "@/routes/ProtectedRoutes.jsx";
import {HomePage} from "@/pages/HomePage/HomePage.jsx";
import {MissionsPage} from "@/pages/MissionsPage/MissionsPage.jsx";
import {MissionPage} from "@/pages/MissionPage/MissionPage.jsx";
import {LandingPage} from "@/pages/LandingPage/LandingPage.jsx";
import {RegisterPage} from "@/pages/RegisterPage/RegisterPage.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {LoginPage} from "@/pages/LoginPage/LoginPage.jsx";


const Routes = () => {
  const { token } = useAuth();


const routesForPublic = [
  {
    path: "/tools",
    element: <Layout><ToolPages/></Layout>,
  },
];

const routesForAuthenticatedOnly = [
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <Layout><HomePage /></Layout>,
      },
      {
        path: "/missions",
        element: <Layout><MissionsPage /></Layout>,
      },
      {
        path: "/missions/:id",
        element: <Layout><MissionPage /></Layout>,
      },
    ],
  },
];

const routesForNotAuthenticatedOnly = [
  {
    path: "/",
    element: <Layout><LandingPage /></Layout>,
  },
  {
    path: "/login",
    element: <Layout><LoginPage /></Layout>,
  },
  {
    path: "/register",
    element: <Layout><RegisterPage /></Layout>,
  },
];

const router = createBrowserRouter([
  ...routesForPublic,
  ...(!token ? routesForNotAuthenticatedOnly : []),
  ...routesForAuthenticatedOnly,
]);

  return <RouterProvider router={router} />;
};
export default Routes