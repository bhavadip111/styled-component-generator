// src/index.js
import styled from "styled-components";

function generateStyledComponent(styleObject, componentName) {
  const cssString = Object.entries(styleObject)
    .map(
      ([property, value]) =>
        `${property.replace(
          /([A-Z])/g,
          (match) => `-${match.toLowerCase()}`
        )}: ${value};`
    )
    .join("\n");

  const StyledComponent = styled.div`
    ${cssString}
  `;

  // Assign the component name to StyledComponent for debugging purposes
  StyledComponent.displayName = componentName;

  return StyledComponent;
}

export default generateStyledComponent;
