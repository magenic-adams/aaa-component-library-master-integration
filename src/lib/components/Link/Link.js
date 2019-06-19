import React from 'react';
import PropTypes from 'prop-types';
import { withTheme, makeStyles } from '@material-ui/styles'; // listed as a dependency
import { Link as MuiLink } from '@material-ui/core'; // used the Link instead of the button


const useStyles = makeStyles({
    colorPrimary: {
            color: props => props.theme.palette.colorVariables.DARKER_BLUE,
            cursor: 'pointer',
            fontSize: 16,
            fontWeight: 'normal',
            fontStyle: 'normal',
            fontStretch: 'normal',
            lineHeight: 2.67,
            letterSpacing: 'normal',
            padding: '13.5px 0 13.5px 0',
            [props => props.theme.breakpoints.down('md')]: {
                fontSize: 18,
                lineHeight: 3,
                padding: '12px 0 12px 0',
            },
            '&:hover': {
                color: props => props.theme.palette.colorVariables.VERY_DARK_BLUE,
            },
        },
        colorSecondary: {
                color: props => props.theme.palette.colorVariables.DARKER_BLUE,
                cursor: 'pointer',
                fontWeight: props => props.theme.typography.fontWeight,
                fontSize: 16,
                fontStyle: 'normal',
                fontStretch: 'normal',
                lineHeight: 2.75,
                letterSpacing: 'normal',
                padding: '13.5px 0 13.5px 0',
                [props => props.theme.breakpoints.down('md')]: {
                    fontSize: 14,
                    lineHeight: 3.14,
                    letterSpacing: 'normal',
                    padding: '14.5px 0 14.5px 0',
                },
                '&:hover': {
                    color: props => props.theme.palette.colorVariables.VERY_DARK_BLUE,
                },
        }, 
  });

  type propTypes = {
    children: PropTypes.string,
    color: PropTypes.bool,
    id?: PropTypes.bool,
    href?: PropTypes.bool,
    onBlur: () => {},
    onClick: () => {}
  };

    const Link = (props:propTypes) => {
        const { children, color, id, href, onBlur, onClick } = props;
        const classes = useStyles(props);
        return (
            <MuiLink 
            color={color}
            id={id}
            href={href}
            onBlur={onBlur}
            onClick={onClick}
            TypographyClasses={{
                colorPrimary: classes.colorPrimary,
                colorSecondary: classes.colorSecondary,
            }}
        >
            {children}
        </MuiLink>
        );
    };

    Link.defaultProps = {
        id: '',
        href: '',
      };


export default withTheme(Link);
