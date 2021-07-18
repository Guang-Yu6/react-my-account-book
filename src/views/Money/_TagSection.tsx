import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
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
      &.selected {
        background: palegoldenrod;
      }
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
const TagSection: React.FunctionComponent = () => {
  const [tags,setTags] = useState<string[]>(['衣','食','住','行'])
  const onAddTag = () => { // ①
    const tagName = window.prompt('新标签的名称')
    if(tagName !== null){ // 如果输入的值不为空，先把之前的数组拷贝过来，再生成一个新的，并在最后添加进去输入的值
      setTags([...tags,tagName])
    }
  }

  const [selectedTags,setSelectedTags] = useState <string[]> ([])
  const onToggleTag = (aa:string) => {  // 开关切换的意思
    const index = selectedTags.indexOf(aa);  // 查找数组中的 "aa" 元素并返回它的下标：  aa默认的衣食住行
    if (index >= 0){  // >=0 说明在里面，在里面就要把它生成一个新的数组，这个新数组不包含aa就行了
      // 如果aa已被选中，就复制所有没有被选中的aa，作为新的selectedTag
      setSelectedTags(selectedTags.filter(a => a !== aa)) // 找出不是这个aa的其他aa,只要a不等于aa就把它留下来
    }else {
      setSelectedTags([...selectedTags,aa])
    }
  }, x = (aa:string) => selectedTags.indexOf(aa) >= 0 ? 'selected':'';

  return (
    <div>
      <Wrapper>
        <ol>
          {tags.map(aa =>
            <li
              key={aa}
              onClick={()=>{onToggleTag(aa)}}
              className={x(aa)}
            >{aa}</li>
          )}
        </ol>
        <button onClick={onAddTag}>新增标签</button>
      </Wrapper>
    </div>

  )
}
export {TagSection}
