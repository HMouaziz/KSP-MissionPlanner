import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import MissionTable from "@/components/MissionTable/MissionTable.jsx";
import { MissionsProvider } from "@/context/MissionContext.jsx";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MissionsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MissionTable />}></Route>
          </Routes>
        </BrowserRouter>
      </MissionsProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
