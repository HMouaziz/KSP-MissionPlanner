import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "@/context/ThemeContext.jsx";
import Routes from "@/routes/Routes.jsx";
import AuthProvider from "@/context/AuthContext.jsx";

const queryClient = new QueryClient();

const App = () => {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="dark" storageKey="-ui-theme">
          <Routes />
          <ReactQueryDevtools />
        </ThemeProvider>
      </QueryClientProvider>
    </AuthProvider>
  );
};

export default App;
