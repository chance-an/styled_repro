import React from "react";
import ReactDOM from "react-dom/client";
import styled from "@mui/system/styled";
// import styled from "@emotion/styled";
import { Container } from "@mui/material";

const StyledContainer = styled(Container, {
  shouldForwardProp: () => true
})`
  position: fixed;
  bottom: 0;
  right: 0;
  width: fit-content;
`;

const testVar: any = {
  backgroundColor: 'red'
}; 

// This causes significant performance issues in compile time
const TestComponent = (props: React.ComponentProps<typeof StyledContainer>) => {
// Using this make the complication fast
// const TestComponent = (props: any) => {
    return <StyledContainer sx={props.sx}></StyledContainer>;
}
  
function App() {
    return <div>
      <TestComponent sx={testVar}></TestComponent>
    </div>;
}

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );
root.render(<App />);
