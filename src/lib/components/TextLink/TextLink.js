/* eslint-disable no-undef */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/require-default-props */
import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import cx from 'clsx';

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
    root: { 
            color: "rgb(9,33,106)",
            fontFamily: 'Roboto',
            padding: 0,
            height: 44,
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
            '&:active': {
                backgroundColor: 'transparent',
                textDecoration: 'underline',
                color: "rgb(9,33,106)",
                transition: 'none',
            },
            '&:hover': {
                backgroundColor: 'transparent',
                textDecoration: 'underline',
                color: 'rgb(3,19,67)',
            }, 
            '&:hover,&active': {
                transition: 'none !important',
            },
             '&:disabled': {
                background: 'transparent',
                borderColor: theme.palette.disabled.main,
              }         
    },
    secondary: {
            color: "rgb(9,33,106)",
            fontFamily: 'Roboto',
            padding: 0,
            height: 44,
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
            '&:active': {
                backgroundColor: 'transparent',
                textDecoration: 'underline',
                color: "rgb(9,33,106)",
            },
            '&:hover': {
                backgroundColor: 'transparent',
                textDecoration: 'underline',
                color: 'rgb(3,19,67)',
            }, 
            '&:disabled': {
                background: 'transparent',
                borderColor: theme.palette.disabled.main,
            }
    },   
  })


    class TextLink extends Component <propTypes>{
        render(){
        const { className, onClick, classes, disabled, href, children, onBlur } = this.props
            return (
                <Button 
                    id="textLink"
                    onClick={() => onClick()}
                    className={cx('Link', [className ==='primary' ? classes.root : classes.secondary] )}
                    disableRipple
                    disabled={disabled}
                    href={href}
                    onBlur={() => onBlur()}
                >
                    {children}
                </Button>
            )
        }
    }

export default withStyles(styleClasses, {withTheme: true})(TextLink);
