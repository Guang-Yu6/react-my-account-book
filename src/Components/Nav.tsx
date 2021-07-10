import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import X from'Icon/statistics.svg'
console.log(X);

const NavCss = styled.nav`
  border: 1px solid cornflowerblue;
  line-height: 24px;
  background-color: wheat;
  
  > ul {
    display: flex;
    > li {
      width: 33.33333%;
      text-align: center;
      padding: 16px;
      > img {
    width: 10vh;
    height: 10vh;
  }
    }
    
  }
`;

const Nav = () => {
  return (
    <NavCss>

      <ul>
        <li>
          <Link to="tags">标签</Link>
          <img src={X} alt=""/>
        </li>

        <li>
          <Link to="/money">记账</Link>
          <img src={X} alt=""/>
        </li>

        <li>
          <Link to="/Statistics">统计</Link>
          <img src={X} alt=""/>
        </li>
      </ul>
    </NavCss>
  )
}


export default Nav
