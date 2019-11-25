import React, { Component, useState } from "react";
import { Banner, Button } from "codedplanet-designsystem";

const lightTheme = {
  "--color-solid": "black",
  "--color-surface": "white"
};
const darkTheme = {
  "--color-solid": "white",
  "--color-surface": "black"
};

function renderComponent(label, component) {
  return (
    <div>
      <div>{label}: </div>
      <div>{component}</div>
    </div>
  );
}

const applyTheme = nextTheme => {
  const theme = nextTheme === "dark" ? lightTheme : darkTheme;
  Object.keys(theme).map(key => {
    const value = theme[key];
    document.documentElement.style.setProperty(key, value);
  });
};

const onThemeClick = (currentTheme, setTheme) => {
  const nextTheme = currentTheme === "light" ? "dark" : "light";
  setTheme(nextTheme);
  applyTheme(nextTheme);
};

export default function App() {
  const [currentTheme, setTheme] = React.useState("light");

  return (
    <div>
      {renderComponent(
        "Primary",
        <Button
          type="primary"
          title="click me"
          onClick={() => onThemeClick(currentTheme, setTheme)}
        />
      )}
      {renderComponent(
        "Secondary",
        <Button type="secondary" title="click me" />
      )}
      {renderComponent("Secondary", <Button type="outline" title="click me" />)}
      <pre>{'<Button type="primary" title="click me" />'}</pre>
      <pre>{'<Button type="secondary" title="click me" />'}</pre>
      <pre>{'<Button type="outline" title="click me" />'}</pre>
    </div>
  );
}
