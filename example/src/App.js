import React, { Component } from "react";

import { Banner, Button } from "codedplanet-designsystem";

function renderComponent(label, component) {
  return (
    <div>
      <div>{label}: </div>
      <div>{component}</div>
    </div>
  );
}

export default function App() {
  return (
    <div>
      {renderComponent("Primary", <Button primary title="click me" />)}
      {renderComponent("Secondary", <Button secondary title="click me" />)}
    </div>
  );
}
