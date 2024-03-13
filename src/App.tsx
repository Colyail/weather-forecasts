import { TypedUseSelectorHook, useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import { RootState } from 'redux/store';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { themes } from './styles/theme/themes';
import { CurrentForecast, FiveDaysForecast } from 'pages';
import Header from 'components/Header';
import { ThemeTypes } from './redux/themeSlice';
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
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const { theme } = useAppSelector((state) => state.theme);

  return (
    <ThemeProvider theme={theme === ThemeTypes.Light ? themes.light : themes.dark}>
      <PageWrapper>
        <Header />
        <RouterProvider router={router} />
        <GlobalStyle />
        <CityButtonGroup/>
      </PageWrapper>
    </ThemeProvider>
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
