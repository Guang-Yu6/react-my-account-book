import Nav from './Nav';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 5px solid pink;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  border: 1px solid saddlebrown;
  flex-grow: 1; // 效果和高度100vh差不多
`;

const Layout = (props:any)=>{
  const {children} = props
  return (
      <Wrapper>
        <Main>
          {children}
        </Main>
        <Nav/>
      </Wrapper>
  )
}


export default Layout
