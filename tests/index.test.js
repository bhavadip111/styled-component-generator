// tests/index.test.js
const generateStyledComponent = require("../src/index");

test("should convert JS object to styled component string", () => {
  const input = {
    backgroundColor: "red",
    fontSize: "16px",
    padding: "10px",
  };
  const componentName = "StyledDiv";

  const result = generateStyledComponent(input, componentName);

  expect(result).toBe(
    `import styled from 'styled-components';\n\n` +
      `const StyledDiv = styled.div\`\n` +
      `  background-color: red;\n` +
      `  font-size: 16px;\n` +
      `  padding: 10px;\n` +
      `\`;\n\nexport default StyledDiv;`
  );
});
