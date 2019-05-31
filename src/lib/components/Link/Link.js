/* eslint-disable import/no-cycle */
/* eslint-disable no-undef */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/require-default-props */
import React from 'react';
import { withStyles } from '@material-ui/styles';
import cx from 'clsx';
import { Button } from '..';

type propTypes = {
    // MUI Decorator
    classes: PropTypes.object,
    // Passed Props
    className: PropTypes.string,
    children?: PropTypes.string | PropTypes.node,
    disabled: PropTypes.bool,
    href?: PropTypes.bool,
    onBlur: () => {},
    onClick: () => {},
  };

const styleClasses = theme => ({
    primary : { 
            color: theme.palette.colorVariables.DARKER_BLUE,
            padding: 0,
            height: 44,
            background: theme.palette.colorVariables.TRANSPARENT,
            width: 'inherit',
            '&:active': {
                textDecoration: 'underline',
                background: theme.palette.colorVariables.TRANSPARENT,
            },
            '&:hover': {
                textDecoration: 'underline',
                color:theme.palette.colorVariables.VERY_DARK_BLUE,
                background: theme.palette.colorVariables.TRANSPARENT,
            },
            '&.MuiButton-contained': { // remove the box-shadow upon click
                boxShadow: 'none',
            },
            '& .MuiTouchRipple-root': { // need space to get the child. To remove the ripple
                height: 0,
                width: 0
            },
            '& .MuiButton-label': {  // need space to get the child.
                fontSize: 18,
                fontWeight: 'normal',
                fontStyle: 'normal',
                fontStretch: 'normal',
                lineHeight: 2.67,
                letterSpacing: 'normal',
                [theme.breakpoints.down('md')]: {
                    fontSize: 16,
                    lineHeight: 3,
                },
            }
    },
    secondary: {
            color: theme.palette.colorVariables.DARKER_BLUE,
            padding: 0,
            height: 44,
            background: theme.palette.colorVariables.TRANSPARENT,
            width: 'inherit',
            '&:active': {
                textDecoration: 'underline',
                background: theme.palette.colorVariables.TRANSPARENT,
            },
            '&:hover': {
                textDecoration: 'underline',
                color:theme.palette.colorVariables.VERY_DARK_BLUE,
                background: theme.palette.colorVariables.TRANSPARENT,
            },
            '&.MuiButton-contained': { // remove the box-shadow upon click
                boxShadow: 'none',
            },
            '& .MuiTouchRipple-root': { // need space to get the child. To remove the ripple
                height: 0,
                width: 0
            },
            '& .MuiButton-label': {  // need space to get the child.
                fontWeight: 500,
                fontSize: 16,
                fontStyle: 'normal',
                fontStretch: 'normal',
                lineHeight: 2.75,
                letterSpacing: 'normal',
                [theme.breakpoints.down('md')]: {
                    fontSize: 14,
                    lineHeight: 3.14,
                    letterSpacing: 'normal',
                },
            }
        }, 
  })


    function Link ({ className, onClick, classes, href, children, onBlur }:propTypes){
        return (
            <Button 
                className={cx("Link", [className ==='primary' ? classes.primary : classes.secondary] )}
                href={href}
                onBlur={() => onBlur()}
                onClick={() => onClick()}
            >
                {children}
            </Button>
        )
    }

export default withStyles(styleClasses, {withTheme: true})(Link);
