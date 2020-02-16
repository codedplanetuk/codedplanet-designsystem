import React from "react";

export default function ComponentContainer({ label, children }) {
  return (
    <div>
      {label && <div>{label}: </div>}
      <div>{children}</div>
    </div>
  );
}
