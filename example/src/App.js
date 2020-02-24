import React from "react";
import { Button, Container } from "codedplanet-designsystem";
import { applyTheme } from "./theme";
import DSButton from "./components/DSButton";
import DSCard from "./components/DSCard";
import DSPlayground from "./components/DSPlayground";

const styles = {
  extraPadding: { padding: 20 },
  btnContainer: { textAlign: "right", padding: 10 },
  hr: { marginTop: 20, marginBottom: 20 }
};

const Break = () => (
  <Container style={styles.hr}>
    <hr />
  </Container>
);

const onThemeClick = (nextTheme, state, setState) => {
  setState({ ...state, theme: nextTheme });
  applyTheme(nextTheme);
};

export default function App() {
  const [state, setState] = React.useState({ theme: "light", showPG: false });
  const { showPG } = state;
  const nextTheme = state.theme === "light" ? "dark" : "light";

  return (
    <Container>
      {showPG && <DSPlayground />}
      <Container style={styles.btnContainer}>
        <Button
          type="primary"
          title={nextTheme}
          onClick={() => onThemeClick(nextTheme, state, setState)}
        />
      </Container>
      <Container style={styles.extraPadding}>
        <DSCard />
        <Break />
      </Container>
      <Container style={styles.extraPadding}>
        <DSButton />
        <Break />
      </Container>
    </Container>
  );
}
