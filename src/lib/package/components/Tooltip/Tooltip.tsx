import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/styles';
import cx from 'clsx';

// Styles
import styleClasses from './TooltipStyles';

// MaterialUI components
import { Tooltip as MUITooltip, Fade, ClickAwayListener  } from '@material-ui/core';
import MUIClear from '@material-ui/icons/Clear';
 
interface RequiredProps {
    children: any,
    description: any,
    placement: 'top' | 'bottom-end' | 'bottom-start' | 'bottom' |  'top-end' | 'top-start' ,
    title: any,
};

interface OptionalProps{
    className?:  any,
    classes?: any,
    id?: string,
    open?: boolean,
};

const DefaultProps: OptionalProps = {
    id: '1',
    open: false,
};

function Tooltip(props:RequiredProps & OptionalProps){
   const 
   {
    children, 
    className,
    classes,
    description,
    id,
    open,
    placement,
    title,
  } = props;

  const [openInternal, setOpen] = React.useState(open);

  function handleTooltipClose() {
     setOpen(false);
   }
 
   function handleTooltipOpen() {
     setOpen(true);
   }

   function composedTitle() {
        return (
            <Fragment>
            <span className={classes.arrow} id='popperArrow'/>
            <div onClick={handleTooltipClose} role='presentation'> 
                <MUIClear className={classes.iconStyle} id='popperIcon' /> 
            </div>
            <div className={classes.placeholder}>
                <div className={classes.tooltipTitle} id='popperTitle'>{title}</div>
                <div className={classes.tooltipDescription} id='popperDescription'>{description}</div>
            </div>
            </Fragment>
        );
   };

   return (
    <Fragment>
        <ClickAwayListener onClickAway={handleTooltipClose}>
            <div>
                <MUITooltip
                className={cx('Tooltip', className)}
                classes={{
                    tooltip: classes.tooltip,
                    popper: classes.popper,
                }}
                data-quid={`Tooltip-${id}`}
                open={openInternal}
                placement={placement}
                PopperProps={{
                    disablePortal: true,
                }}
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
                title={composedTitle()}
                >
                    <div onClick={handleTooltipOpen} role='presentation' id='tooltipChild'>
                        { children }
                    </div>
                </MUITooltip>
            </div>
        </ClickAwayListener>
    </Fragment>
   );
};

Tooltip.defaultProps = DefaultProps;

export default withStyles(styleClasses, { withTheme: true })(Tooltip);
