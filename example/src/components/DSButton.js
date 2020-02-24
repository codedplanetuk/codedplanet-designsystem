import React from "react";
import { Button, Container } from "codedplanet-designsystem";
import ComponentContainer from "./ComponentContainer";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeBlock = ({ codeString }) => (
  <SyntaxHighlighter language="javascript" style={docco}>
    {codeString}
  </SyntaxHighlighter>
);

const styles = {
  zeroPadding: { padding: 0 }
};

export default function DSButton({ onThemeClick }) {
  return (
    <Container style={styles.zeroPadding}>
      <h1>Button</h1>
      <ComponentContainer label="Primary">
        <Button type="primary" title="click me" onClick={onThemeClick} />
      </ComponentContainer>
      <ComponentContainer label="Secondary">
        <Button type="secondary" title="click me" />
      </ComponentContainer>
      <ComponentContainer label="Outline">
        <Button type="outline" title="click me" />
      </ComponentContainer>
      <h1>Code examples</h1>
      <ComponentContainer>
        <CodeBlock codeString={'<Button type="primary" title="click me" />'} />
        <CodeBlock
          codeString={'<Button type="secondary" title="click me" />'}
        />
        <CodeBlock codeString={'<Button type="outline" title="click me" />'} />
      </ComponentContainer>
    </Container>
  );
}
