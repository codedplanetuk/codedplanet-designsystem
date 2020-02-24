import React from "react";
import { Card, Container } from "codedplanet-designsystem";
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
  fixedCard: { width: 400 }
};

export default function DSCard() {
  const header = { title: "My header", options: null };

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
