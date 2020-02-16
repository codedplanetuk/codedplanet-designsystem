import React from "react";
import { Container } from "codedplanet-designsystem";
import { applyTheme } from "./theme";
import DSButton from "./components/DSButton";

const styles = {
  extraPadding: { padding: 20 }
};

const onThemeClick = (currentTheme, setTheme) => {
  const nextTheme = currentTheme === "light" ? "dark" : "light";
  setTheme(nextTheme);
  applyTheme(nextTheme);
};

export default function App() {
  const [currentTheme, setTheme] = React.useState("light");

  return (
    <Container style={styles.extraPadding}>
      <DSButton onThemeClick={() => onThemeClick(currentTheme, setTheme)} />
      <Container>
        <hr />
      </Container>
    </Container>
  );
}
