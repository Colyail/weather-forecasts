import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { themes } from './styles/theme/themes';
import { CurrentForecast, FiveDaysForecast } from 'pages';
import Header from 'components/Header';
import CityButtonGroup from 'components/CityButtonLayout';
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
    <Provider store={store}>
      <ThemeProvider theme={theme === 'light' ? themes.light : themes.dark}>
        <PageWrapper>
          <Header />
          <RouterProvider router={router} />
          <GlobalStyle />
          <CityButtonGroup/>
        </PageWrapper>
      </ThemeProvider>
    </Provider>
  );
}

const PageWrapper = styled.div`
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export default App;
