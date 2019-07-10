import React from 'react';
import SVG from 'react-inlinesvg';

 
  const SvgIcon = ({ className, id ,svgIcon }) =>
  <SVG className={className} id={id} src={svgIcon} />;
  
  export default SvgIcon;
