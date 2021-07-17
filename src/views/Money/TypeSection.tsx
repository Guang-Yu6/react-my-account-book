import styled from 'styled-components';

const TypeSection = styled.section`
  font-size: 24px;
  > ul {
    display: flex;
    background: darkseagreen;
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
export {TypeSection}
