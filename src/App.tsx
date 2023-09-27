import styled from "styled-components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Git>Git</Git>
    </div>
  );
}

const Git = styled.button`
  color: lightblue;
  border-radius: 8px;
  font-size: 3rem;
  border-color: green;
`;

export default App;
