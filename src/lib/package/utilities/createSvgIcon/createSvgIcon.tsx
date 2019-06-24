// createSvgIcon taken from Material UI utilities
import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';


export default function createSvgIcon(path:string, displayName:string) {
  const Component:any = React.memo(
    React.forwardRef((props:any, ref:React.Ref<any>) => (
      <SvgIcon
        data-mui-test={`${displayName}Icon`}
        ref={ref}
        {...props}
      >
        {path}
      </SvgIcon>
    )),
  );

  if (process.env.NODE_ENV !== 'production') {
    Component.displayName = `${displayName}Icon`;
  }

  // Component.muiName = SvgIcon.muiName;

  return Component;
}
