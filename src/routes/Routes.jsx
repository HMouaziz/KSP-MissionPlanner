import { useAuth } from "@/hooks/useAuth.js";
import { Layout } from "@/components/Layout/Layout.jsx";
import { ToolsPage } from "@/pages/ToolPages/ToolsPage.jsx";
import { ProtectedRoute } from "@/routes/ProtectedRoutes.jsx";
import { HomePage } from "@/pages/HomePage/HomePage.jsx";
import { MissionsPage } from "@/pages/MissionsPage/MissionsPage.jsx";
import { MissionPage } from "@/pages/MissionPage/MissionPage.jsx";
import { LandingPage } from "@/pages/LandingPage/LandingPage.jsx";
import { RegisterPage } from "@/pages/RegisterPage/RegisterPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "@/pages/LoginPage/LoginPage.jsx";
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage.jsx";
import { EclipseTimePage } from "@/pages/ToolPages/EclipseTimePage.jsx";
import { ResonantOrbitPage } from "@/pages/ToolPages/ResonantOrbitPage.jsx";
import { ProfilePage } from "@/pages/UserPages/ProfilePage.jsx";
import { SettingsPage } from "@/pages/UserPages/SettingsPage.jsx";
import TurboEncabulator from "@/pages/TurboEncabulator/TurboEncabulator.jsx";
import { DeltaVPage } from "@/pages/ToolPages/DeltaVPage.jsx";
import { InterplanetaryTrajectoryPage } from "@/pages/ToolPages/InterplanetaryTrajectoryPage.jsx";
import { LaunchPage } from "@/pages/LaunchPage/LaunchPage.jsx";
import { CraftPage } from "@/pages/CraftPage/CraftPage.jsx";
import UnauthorizedPage from "@/pages/NotFoundPage/UnauthorizedPage.jsx";
import { MissionsProvider } from "@/context/MissionContext.jsx";
import { TypesProvider } from "@/context/TypeContext.jsx";
import { ObjectivesProvider } from "@/context/ObjectiveContext.jsx";

const Routes = () => {
  const { isAuthenticated } = useAuth();

  const routesForPublic = [
    {
      path: "/tools",
      element: (
        <Layout>
          <ToolsPage />
        </Layout>
      ),
    },
    {
      path: "/easter",
      element: (
        <Layout>
          <TurboEncabulator />
        </Layout>
      ),
    },
    {
      path: "/tools/eclipse-time-calculator",
      element: (
        <Layout>
          <EclipseTimePage />
        </Layout>
      ),
    },
    {
      path: "/tools/resonant-orbit-calculator",
      element: (
        <Layout>
          <ResonantOrbitPage />
        </Layout>
      ),
    },
    {
      path: "/tools/deltaV-route-planner",
      element: (
        <Layout>
          <DeltaVPage />
        </Layout>
      ),
    },
    {
      path: "/tools/interplanetary-trajectory-planner",
      element: (
        <Layout>
          <InterplanetaryTrajectoryPage />
        </Layout>
      ),
    },
    {
      path: "/*",
      element: (
        <Layout>
          <NotFoundPage />
        </Layout>
      ),
    },
  ];

  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: (
        <TypesProvider>
          <MissionsProvider>
            <ObjectivesProvider>
              <ProtectedRoute />
            </ObjectivesProvider>
          </MissionsProvider>
        </TypesProvider>
      ),
      children: [
        {
          path: "/",
          element: (
            <Layout>
              <HomePage />
            </Layout>
          ),
        },
        {
          path: "/profile",
          element: (
            <Layout>
              <ProfilePage />
            </Layout>
          ),
        },
        {
          path: "/settings/*",
          element: (
            <Layout>
              <SettingsPage />
            </Layout>
          ),
        },
        {
          path: "/missions",
          element: (
            <Layout>
              <MissionsPage />
            </Layout>
          ),
        },
        {
          path: "/missions/:id",
          element: (
            <Layout>
              <MissionPage />
            </Layout>
          ),
        },
      ],
    },
  ];

  const routesForNotAuthenticatedOnly = [
    {
      path: "/",
      element: (
        <Layout>
          <LandingPage />
        </Layout>
      ),
    },
    {
      path: "/launch",
      element: (
        <Layout>
          <LaunchPage />
        </Layout>
      ),
    },
    {
      path: "/crafts",
      element: (
        <Layout>
          <CraftPage />
        </Layout>
      ),
    },
    {
      path: "/login",
      element: (
        <Layout>
          <LoginPage />
        </Layout>
      ),
    },
    {
      path: "/register",
      element: (
        <Layout>
          <RegisterPage />
        </Layout>
      ),
    },
    {
      path: "/401",
      element: (
        <Layout>
          <UnauthorizedPage />
        </Layout>
      ),
    },
  ];

  const router = createBrowserRouter([
    ...routesForPublic,
    ...(isAuthenticated
      ? routesForAuthenticatedOnly
      : routesForNotAuthenticatedOnly),
  ]);

  return <RouterProvider router={router} />;
};
export default Routes;
