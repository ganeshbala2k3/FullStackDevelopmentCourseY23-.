import React from "react";

// normal JS function
function getText() {
  return "Hello from function";
}

// variable
const headingText = "Hello from variable";

const Demo = () => {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, headingText),
    React.createElement("p", null, getText())
  );
};

export default Demo;
