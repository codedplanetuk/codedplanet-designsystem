import React from "react";
import { Container } from "codedplanet-designsystem";

const styles = {
  extraPadding: { padding: 20 },
  zeroPadding: { padding: 0 },
  tmpHeader: { padding: 10, textAlign: "right" },
  gridContainer: {
    padding: 10,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  gridChild: {
    padding: 0,
    width: 350,
    textAlign: "center",
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 15,
    backgroundColor: "yellow"
  }
};

// const Header = () => <Container style={styles.tmpHeader}>Header</Container>;

const Grid = () => (
  <Container style={styles.gridContainer}>
    <Container style={styles.gridChild}>test 1</Container>
    <Container style={styles.gridChild}>test 2</Container>
    <Container style={styles.gridChild}>test 3</Container>
  </Container>
);
export default function DSPlayground() {
  return <Grid />;
}
