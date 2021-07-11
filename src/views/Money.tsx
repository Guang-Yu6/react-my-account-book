import Layout from '../Components/Layout';
import React from 'react';
import styled from 'styled-components';

const TagSection = styled.section`
  background: #FFFFFF;
  border: 1px solid wheat;
  > ol {
     padding: 0 -12px;
    > li {
      background: #d9d9d9;
      border-radius: 18px;
      display: inline-block;  //把li变成行内块
      padding: 4px 18px;
      font-size: 14px;
      margin: 8px 16px;
    }
  }
  > button {
     border: none;
     background: none;
     padding: 0 4px;
     border-bottom: 1px solid cornflowerblue;
     color: cornflowerblue;
     margin-top: 10px;
     margin-bottom: 10px;
  }
`

const NoteSection = styled.section`
  border: 1px solid greenyellow;
  background: #f5f5f5;
  padding: 10px 16px;
  font-size: 14px;
  > label {
    display: flex;
    align-items: center;
    > span{
      margin-right: 16px;
      white-space: nowrap;
    }
    > input{
      display: block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
    }
  }
`
const TypeSection = styled.section`
  
`
const NumberSection = styled.section`
  
`

function Money() {
  return (
    <Layout>
      <TagSection>
        <ol>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ol>
        <button>新增标签</button>
      </TagSection>

      <NoteSection>
        <label>
          <span>备注</span>
          <input type="text" placeholder='在这里添加备注'/>
        </label>

      </NoteSection>

      <TypeSection>
        <div>支出</div>
        <div>收入</div>
      </TypeSection>

      <NumberSection>
        <div>100</div>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>0</button>
        <button>.</button>
        <button>OK</button>
      </NumberSection>
    </Layout>
  )
}

export default Money
