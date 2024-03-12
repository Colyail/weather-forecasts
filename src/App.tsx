import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { themes } from './styles/theme/themes';
import { CurrentForecast, FiveDaysForecast } from 'pages';
import { GlobalStyle } from 'styles/theme/global-styles';

const router = createBrowserRouter([
  {
    path: "/",
    element: <CurrentForecast />,
  },
  {
    path: "/5days",
    element: <FiveDaysForecast />,
  },
]);

function App() {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? themes.light : themes.dark}>
      <RouterProvider router={router} />      
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
