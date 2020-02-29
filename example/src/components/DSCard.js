import React from "react";
import { Card, Container, Grid } from "codedplanet-designsystem";
import ComponentContainer from "./ComponentContainer";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeBlock = ({ codeString }) => (
  <SyntaxHighlighter language="javascript" style={docco}>
    {codeString}
  </SyntaxHighlighter>
);

const styles = {
  zeroPadding: { padding: 0 },
  fixedCard: { width: 400 },
  childDiv: { margin: 10, width: 400 }
};

const header = { title: "My header", options: null };

const card = style => (
  <Card header={header} style={style}>
    <div>Child content</div>
  </Card>
);

const grid = () => (
  <Grid>
    {[1, 2, 3].map(n => (
      <div>{card(styles.childDiv)}</div>
    ))}
  </Grid>
);

export default function DSCard() {
  return (
    <Container style={styles.zeroPadding}>
      <h1>Card</h1>
      <ComponentContainer label="Card with header">
        <Container style={styles.fixedCard}>
          <Card header={header}>
            <div>Child content</div>
          </Card>
        </Container>
      </ComponentContainer>
      <ComponentContainer label="Card without header">
        <Container style={styles.fixedCard}>
          <Card>
            <div>Child content</div>
          </Card>
        </Container>
      </ComponentContainer>
      <ComponentContainer label="Card grid example">
        {grid()}
      </ComponentContainer>
      <h1>Code examples</h1>
      <ComponentContainer>
        <CodeBlock
          codeString={
            '<Card header={{ title: "My header", options: null }}><div>Child content</div></Card>'
          }
        ></CodeBlock>
        <CodeBlock
          codeString={"<Card><div>Child content</div></Card>"}
        ></CodeBlock>
      </ComponentContainer>
    </Container>
  );
}
