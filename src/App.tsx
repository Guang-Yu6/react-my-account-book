import React from 'react';
import Layout from './Components/Layout';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

function App() {
  return (
    <Router>
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
    </Router>
  );
}

function A() {
  return <h2>页面不存在</h2>;
}

function Tags() {
  return (
      <Layout>
        <h2>标签页面</h2>
      </Layout>
  )
}
function Money() {
  return (
    <Layout>
      <h2>记账页面</h2>
    </Layout>
  )
}
function Statistics() {
  return (
    <Layout>
      <h2>统计页面</h2>
    </Layout>
  )
}

export default App;
