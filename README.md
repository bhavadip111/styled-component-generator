# Styled Component Generator

A utility for converting CSS objects into styled-components automatically, allowing developers to migrate to styled-components more quickly and easily.

## Installation

You can install the package via npm:

```bash
npm install react-css-styled-component-generator
yarn add react-css-styled-component-generator
```

## Usage

Once installed, you can import and use the `react-css-styled-component-generator` function in your React components:

```javascript
import generateStyledComponent from "react-css-styled-component-generator";

const cssCode = {
  backgroundColor: "blue",
  color: "white",
  padding: "10px",
  borderRadius: "5px",
};

const MyStyledComponent = generateStyledComponent(cssCode, "MyStyledComponent");

// Use MyStyledComponent in your React component
const MyComponent = () => {
  return <MyStyledComponent>Hello, World!</MyStyledComponent>;
};

export default MyComponent;
```
