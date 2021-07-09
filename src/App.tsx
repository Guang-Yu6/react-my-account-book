import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import styled from 'styled-components';

const Wraper = styled.div`
  border: 1px solid pink;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  border: 1px solid saddlebrown;
  display: flex;
  height: 100vh;
`;

const Nav = styled.nav`
  border: 1px solid cornflowerblue;
  > ul {
    display: flex;
    > li {
      width: 33.33333%;
      text-align: center;
      padding: 16px;
    }
  }
`;


function App() {
  return (
    <Router>
      <Wraper>
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

        <Nav>
          <ul>
            <li>
              <Link to="tags">标签</Link>
            </li>

            <li>
              <Link to="/money">记账</Link>
            </li>

            <li>
              <Link to="/Statistics">统计</Link>
            </li>
          </ul>
        </Nav>


      </Wraper>
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
