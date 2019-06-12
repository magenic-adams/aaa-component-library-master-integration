import {
  AAAPrimaryTheme,
  Button,
  ButtonGroup,
  Form,
  FormGroup,
  FormInput,
  FormNumericInput,
} from '../../components';

export const demo = `class FormDemo extends React.Component {
  static validations(){
    return {
      firstName: {
        required: 'First name is required',
        'max_length[24]': 'Too long. Do you have a nickname?',
        alpha_dash_dot_space: 'Name can only contain letters, dashes, periods, and spaces',
      },
      password: {
        required: 'Password is required',
        'min_length[6]': 'Password must be at least 6 characters',
        'max_length[24]': 'Password should be under 24 characters.',
      },
      passwordConfirm: {
        required: 'Password confirmation is required',
        'matches[password]': 'This does not match',
      }
    };
  }

  static handleFormValueSubmission(vals){
    console.log('vals', vals);
  }

  render(){
    return (
      <div>
        <AAAPrimaryTheme>
          <Form
            validations={FormDemo.validations()}
            onSubmit={FormDemo.handleFormValueSubmission}
            render={({ allRequiredFieldsHaveBeenVisited, handleSubmit }) => {
              return (
                <form onSubmit={handleSubmit}>
                  <FormGroup>
                    <FormInput 
                      name="firstName"
                      id="firstName"
                      labelName="First name"
                      helperText="If you have a first name, please enter it here"
                      type="text"
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormInput 
                      name="password"
                      id="password"
                      labelName="Password"
                      type="password"
                    />
                  </FormGroup>
                  <FormGroup>
                    <FormInput 
                      name="passwordConfirm"
                      id="passwordConfirm"
                      labelName="Password Confirm"
                      type="password"
                    />
                  </FormGroup>
                  <ButtonGroup>
                    <Button
                      disabled={!allRequiredFieldsHaveBeenVisited}
                      fadeUp={allRequiredFieldsHaveBeenVisited}
                      type="submit"
                    >
                      Submit
                    </Button>
                  </ButtonGroup>
                </form>
              );
            }
          }
        />
        </AAAPrimaryTheme>
      </div>
    );
  }
}`;

export const scope = {
  AAAPrimaryTheme,
  Button,
  ButtonGroup,
  Form,
  FormGroup,
  FormInput,
  FormNumericInput, 
};
