import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { MissionsProvider } from "@/context/MissionContext.jsx";
import { TypesProvider } from "@/context/TypeContext.jsx";
import { ObjectivesProvider } from "@/context/ObjectiveContext.jsx";
import { ThemeProvider } from "@/context/ThemeContext.jsx";
import Routes from "@/routes/Routes.jsx";
import AuthProvider from "@/context/AuthContext.jsx";

const queryClient = new QueryClient();

const App = () => {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="dark" storageKey="-ui-theme">
          <TypesProvider>
            <MissionsProvider>
              <ObjectivesProvider>
                <Routes />
              </ObjectivesProvider>
            </MissionsProvider>
          </TypesProvider>
          <ReactQueryDevtools />
        </ThemeProvider>
      </QueryClientProvider>
    </AuthProvider>
  );
};

export default App;
