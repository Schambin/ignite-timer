import { Button } from "./components/Button";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>oi manaaa</h1>
      <Button variant="primary" />
      <Button variant="secondary"/>
      <Button variant="danger"/>
      <Button variant="success"/>
      <Button />

      <GlobalStyle />
    </ThemeProvider>
  )
}