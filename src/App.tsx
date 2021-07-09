import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  color: #61dafb;
  background: green;
`
const Div = styled.div`
  border: 5px solid pink;
  min-width: 300px;
  min-height: 300px;
`


function App() {
  return (
    <Div>
      <Button>不会吧不会吧</Button>
      <h3>123</h3>
    </Div>
  );
}

export default App;
