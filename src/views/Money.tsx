import Layout from '../Components/Layout';
import React from 'react';
import styled from 'styled-components';
import {TagSection} from './Money/_TagSection'
import {NoteSection, } from './Money/NoteSection';
import {TypeSection} from './Money/TypeSection'
import {NumberSection} from './Money/NumberSection';


const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`
function Money() {
  return (
    <MyLayout>
      <TagSection/>
      <NoteSection/>
      <TypeSection/>
      <NumberSection/>
    </MyLayout>
  )
}

export default Money
