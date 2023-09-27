import styled from "styled-components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Git>GitNew</Git>
    </div>
  );
}

const Git = styled.button`
  color: lightblue;
  border-radius: 8px;
  font-size: 4rem;
  border-color: green;
`;

export default App;
