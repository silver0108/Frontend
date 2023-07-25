import { GlobalStyle } from "./style/globalStyle";
import { RecoilRoot } from "recoil";
import Router from "./Router";
import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";

export default function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </RecoilRoot>
  );
}