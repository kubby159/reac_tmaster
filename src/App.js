import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const BoxOne = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
`;
const BoxTwo = styled.div`
  background-color: tomato;
  width: 100px;
  height: 100px;
`;

const Text = styled.span`
  color: #fff;
`;

function App() {
  return (
    <Father>
      <BoxOne>
        <Text> Hello</Text>
      </BoxOne>
      <BoxTwo> </BoxTwo>
    </Father>
  );
}

export default App;
