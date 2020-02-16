import React from "react";
import { Button, Container } from "codedplanet-designsystem";
import ComponentContainer from "./ComponentContainer";

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
        <pre>{'<Button type="primary" title="click me" />'}</pre>
        <pre>{'<Button type="secondary" title="click me" />'}</pre>
        <pre>{'<Button type="outline" title="click me" />'}</pre>
      </ComponentContainer>
    </Container>
  );
}
