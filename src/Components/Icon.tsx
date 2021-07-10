import React from 'react';
require('Icon/tags.svg') // svg-loader => svg-sprite-loader
require('Icon/money.svg')
require('Icon/chart.svg')
// require 一个目录或者文件夹爱。 因为如果有100个svg呢

type IconProps = {
  name:string
}
// name = tags
// xlinkHref = "#tags"
const Icon = (props:IconProps) => {
  const {name} = props;
  return (
    <svg className='icon'>
      <use xlinkHref={'#'+name}/>
    </svg>
  );
};

export default Icon;
