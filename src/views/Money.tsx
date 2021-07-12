import Layout from '../Components/Layout';
import React from 'react';
import styled from 'styled-components';

const TagSection = styled.section`
  background: #FFFFFF;
  padding: 12px 19px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; // 尽量靠下
  align-items: flex-start; // 尽量靠左
  > ol {
     margin: 0 -12px;
    > li {
      background: #d9d9d9;
      border-radius: 18px;
      display: inline-block;  //把li变成行内块
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
    }
  }
  > button {
     border: none;
     background: none;
     padding: 2px 4px;
     border-bottom: 1px solid cornflowerblue;
     color: cornflowerblue;
     margin-top: 8px;
    
    
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
  font-size: 24px;
  > ul {
    display: flex;
    background: darkseagreen;
    >li {
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
const NumberSection = styled.section`
  display: flex;
  flex-direction: column;
  > .output {
  background: white;
  font-size: 36px;
  line-height: 72px;
  text-align: right;
  padding: 0 16px;
  } 
  > .pad {
    > button {
      font-size: 18px;
      float: left;
      width: 25%;
      height: 64px;
      border: none;
      &.ok{height: 128px;float: right;}
      &.zero {width: 50%;}
      &:nth-child(1){
        background: #f2f2f2;
      }
      &:nth-child(2),
      &:nth-child(5)
      {
        background: #E0E0E0;
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9)
      {
        background: #D3D3D3;
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10)
      {
        background: #C1C1C1;
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13)
      {
        background: #B8B8B8;
      }
      &:nth-child(12){
        background:#9A9A9A;
      }
      &:nth-child(14)
      {
        background: #A9A9A9
      }
    }
  }
`
const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
function Money() {
  return (
    <MyLayout>
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
        <ul>
          <li className='selected'>支出</li>
          <li>收入</li>
        </ul>
      </TypeSection>

      <NumberSection>
        <div className='output'>100</div>
        <div className='pad clearfix'>
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
          <button className='ok'>OK</button>
          <button className='zero'>0</button>
          <button >.</button>
        </div>
      </NumberSection>
    </MyLayout>
  )
}

export default Money
