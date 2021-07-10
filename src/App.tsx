import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Components/Nav';




const Wrapper = styled.div`
  border: 1px solid pink;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  border: 1px solid saddlebrown;
  flex-grow: 1; // 效果和高度100vh差不多
`;

function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
          <Switch>
            <Route path="/tags">
              <Tags/>
            </Route>

            <Route path="/money">
              <Money/>
            </Route>

            <Route path='/Statistics'>
              <Statistics/>
            </Route>

            <Route path='*'>
              <A/>
            </Route>

            <Redirect exact from="/" to="/money"/>
          </Switch>
        </Main>

      <Nav/>
      </Wrapper>
    </Router>
  );
}

function A() {
  return <h2>页面不存在</h2>;
}

function Tags() {
  return <h2>tags</h2>;
}

function Money() {
  return <h2>money</h2>;
}

function Statistics() {
  return <h3>统计页</h3>;
}

export default App;
