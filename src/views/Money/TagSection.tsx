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

export {TagSection}
