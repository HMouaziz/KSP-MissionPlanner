import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { MissionsProvider } from "@/context/MissionContext.jsx";
import { MissionPage } from "@/pages/MissionPage/MissionPage.jsx";
import { MissionsPage } from "@/pages/MissionsPage/MissionsPage.jsx";
import { Layout } from "@/components/Layout/Layout.jsx";
import { TypesProvider } from "@/context/TypeContext.jsx";
import { ObjectivesProvider } from "@/context/ObjectiveContext.jsx";
import {ToolPages} from "@/pages/ToolPages/ToolPages.jsx";
import {HomePage} from "@/pages/HomePage/HomePage.jsx";
import {useAuth} from "@/hooks/useAuth.js";
import {LandingPage} from "@/pages/LandingPage/LandingPage.jsx";
import {RegisterPage} from "@/pages/RegisterPage/RegisterPage.jsx";
import {LoginPage} from "@/pages/LoginPage/LoginPage.jsx";
import {ProtectedRoute} from "@/routes/ProtectedRoutes.jsx";
import {ThemeProvider} from "@/context/ThemeContext.jsx";

const queryClient = new QueryClient();

const App = () => {
  const { isAuthenticated } = useAuth()

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="-ui-theme">
      <TypesProvider>
        <MissionsProvider>
          <ObjectivesProvider>
            <BrowserRouter>
              <Layout>
                <Routes>
                  <Route path="/" element={isAuthenticated ? <HomePage /> : <LandingPage/> }></Route>
                  <Route path="/login" element={<LoginPage />}></Route>
                  <Route path="/register" element={<RegisterPage />}></Route>

                  <Route path='/tools' element={<ToolPages />}></Route>

                  <Route path="/missions" element={<ProtectedRoute> <MissionsPage /> </ProtectedRoute>}></Route>
                  <Route path="/missions/:id" element={<ProtectedRoute> <MissionPage /> </ProtectedRoute>}></Route>
                </Routes>
              </Layout>
            </BrowserRouter>
          </ObjectivesProvider>
        </MissionsProvider>
      </TypesProvider>
      </ThemeProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
