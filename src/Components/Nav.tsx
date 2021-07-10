import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';


const NavCss = styled.nav`
  border: 1px solid cornflowerblue;
  line-height: 24px;
  background-color: wheat;
  
  > ul {
    display: flex;
    > li {
      width: 33.33333%;
      text-align: center;
      padding: 4px 0;
      display: flex;
      flex-direction: column;  // 上下部剧
      align-items: center;  // svg 图标居中对齐文字
      .icon {
        width: 24px;
        height: 24px;
      }
  }
    }
`

const Nav = () => {
  return (
    <NavCss>
      <ul>
        <li>
         <Icon name='tags'/>
          <Link to="tags">标签</Link>
        </li>

        <li>
          <Link to="/money">记账</Link>
          <Icon name="money"/>
        </li>

        <li>
          <Icon name='chart'/>
          <Link to="/Statistics">统计</Link>
        </li>
      </ul>
    </NavCss>
  )
}


export default Nav
