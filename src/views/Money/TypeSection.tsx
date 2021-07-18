import styled from 'styled-components';
import React, { useState} from 'react';

const Wrapper = styled.section`
  font-size: 24px;
  > ul {
    display: flex;
    background: gainsboro;
    > li {
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;
      &.selected::after {  // 选中后 伪元素，就不会占用体积
        content: '';
        display: block;
        height: 3px;
        background: #333;
        position: absolute;
        width: 100%;
        bottom:0;
        left: 0;
      }
    }
  }
`
const TypeSection:React.FC = () => {
  const [category,setCategory] = useState('-');  // 默认值  + 表示收入  - 表示支出
  return (
      <Wrapper>
        <ul>
          <li className={category === '-' ? 'selected' : ''}
              onClick={()=>{setCategory('-')}}>
            支出</li>

          <li className={category === '+' ? 'selected' : ''}
              onClick={()=>{setCategory('+')}}>
            收入</li>
        </ul>
      </Wrapper>
  )
}

export {TypeSection}
