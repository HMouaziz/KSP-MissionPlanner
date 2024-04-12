import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { MissionsProvider } from "@/context/MissionContext.jsx";
import {MissionPage} from "@/pages/MissionPage/MissionPage.jsx";
import {MissionsPage} from "@/pages/MissionsPage/MissionsPage.jsx";
import {Layout} from "@/components/Layout/Layout.jsx";
import {TypesProvider} from "@/context/TypeContext.jsx";
import {ObjectivesProvider} from "@/context/ObjectiveContext.jsx";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TypesProvider>
        <MissionsProvider>
          <ObjectivesProvider>
            <Layout>
              <BrowserRouter>
                <Routes>
                  <Route path='/' element={<MissionPage />}></Route>
                  <Route path="/missions" element={<MissionsPage />}></Route>
                  <Route path="/missions/:id" element={<MissionPage />}></Route>
                </Routes>
              </BrowserRouter>
            </Layout>
          </ObjectivesProvider>
        </MissionsProvider>
      </TypesProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
