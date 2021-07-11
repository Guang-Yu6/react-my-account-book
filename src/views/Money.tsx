import Layout from '../Components/Layout';
import React from 'react';
import styled from 'styled-components';

const TagSection = styled.section`
  
`
const NoteSection = styled.section`
  
`
const TypeSection = styled.section`
  
`
const NumberSection = styled.section`
  
`

function Money() {
  return (
    <Layout>
      <TagSection>
        <ul>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ul>
        <button>新增标签</button>
      </TagSection>

      <NoteSection>
        <h4>备注</h4>
        <h5>在这里添加备注</h5>
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
