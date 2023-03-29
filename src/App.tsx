import AppRoutes from "./Routes";
import GlobalStyle from "./styles/GlobalStyle";
import { useTheme } from './hooks/useTheme';
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";

const App = () => {

  const { theme } = useTheme()
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes/>
      <ToastContainer/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;