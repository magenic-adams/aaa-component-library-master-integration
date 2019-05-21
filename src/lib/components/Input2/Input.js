import React, { Component } from 'react';
import PropTypes from 'prop-types';

import InputMUI from '@material-ui/core/Input';
import InputLabelMUI from '@material-ui/core/InputLabel';
import FormControlMUI from '@material-ui/core/FormControl';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

export class Input extends Component {

    constructor(props) {
        super(props);

        this.state = {
            state: null,
        };

        this.themeOverride = createMuiTheme({
            palette: {
                primary: {
                    main: '#0099ff',
                    dark: '#0099ff',
                    contrastText: '#0099ff',
                    light: '#0099ff',
                },
            },
            overrides: {
                MuiFormControl: {
                    root: {
                        margin: '1.5em 0 0',
                    }
                },
                MuiInputLabel: {
                    formControl: {
                        transform: 'unset',
                        'text-transform': 'capitalize',
                        top: '-0.65em',
                        'font-size': '.9em',
                        '-webkit-transition': '',
                        '-moz-transition': '',
                        '-ms-transition': '',
                        '-o-transition': '',
                        transition: '',
                    },
                    root: {
                        transform: 'unset',
                        'text-transform': 'capitalize',
                        top: '-0.65em',
                        'font-size': '.9em',
                        '-webkit-transition': '',
                        '-moz-transition': '',
                        '-ms-transition': '',
                        '-o-transition': '',
                        transition: '',
                    },
                },
                MuiInput: {
                    root: {
                        "&$focused": {
                            "background": "green",
                            "border": "solid green thin"
                        },
                        border: 'solid #ced4da thin',
                        'border-radius': '4px',
                    },
                    input: {
                        padding: '10px 12px'
                    }
                }
            }
        })

    }

    handleChange = name => event => {
        this.setState(
            { [name]: event.target.value, },
            () => {
                if (this.props.callback)
                    this.props.callback(this)
            }
        );
    };


    render = () => {

        return (
            <MuiThemeProvider theme={this.themeOverride}>
                <FormControlMUI
                >
                    <InputLabelMUI
                        disableAnimation={true}
                        shrink={false}
                    >
                        {this.props.label}
                    </InputLabelMUI>
                    <InputMUI
                        disableUnderline={true}
                        type={this.props.type ? this.props.type : 'text'}
                        name={this.props.name}
                        onChange={this.handleChange(this.props.name)}

                    />
                </FormControlMUI>
            </MuiThemeProvider>

        )

    }

}

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string
};


export default Input;
// export default withStyles(themeStyles)(Input);