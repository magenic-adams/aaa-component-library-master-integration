import Paper from '@material-ui/core/Paper';
import {
  ACEPrimaryTheme,
  Button,
  ButtonGroup,
  Form,
  FormGroup,
  FormRadioGroup,
  FormSelectDropdown,
} from '../../package/components';

export const demo = `class FormDemo2 extends React.Component {
  static validations(){
    return {
      status: {
        required: 'Status is required',
      },
      cars: {
        required: '',
      },
    };
  }

  static status() {
    return  [
      { id: 1, value: 'S', display: 'Single' },
      { id: 2, value: 'M', display: 'Married' },
      { id: 3, value: 'A', display: 'Divorced' },
      { id: 4, value: 'C', display: 'Widowed' },
    ];
  }

  static cars() {
    return  [
      { id: 1, value: 'Honda1', display: 'Honda' },
      { id: 2, value: 'Toyota2', display: 'Toyota' },
      { id: 3, value: 'Mitsubishi3', display: 'Mitsubishi' },
      { id: 4, value: 'Ford4', display: 'Ford' },
      { id: 5, value: 'Suzuki5', display: 'Suzuki' },
      { id: 6, value: 'Hyundai6', display: 'Hyundai' },
    ];
  }

  static handleFormValueSubmission(vals){
    console.log('vals', vals);
  }

  render(){
    return (
      <ACEPrimaryTheme>
        <div className="u-background--gray">
            <Form
              validations={FormDemo2.validations}
              onSubmit={FormDemo2.handleFormValueSubmission}
              render={({
                allRequiredFieldsHaveBeenVisitedOrHaveValues,
                handleSubmit,
              }) => {
                return (
                  <form onSubmit={handleSubmit}>
                    <FormGroup>
                      <FormSelectDropdown
                        id="status"
                        items={FormDemo2.status()}
                        initialValue=""
                        label="Status"
                        placeHolder="Select one"
                        helperText="Choose one above"
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormRadioGroup
                        id="cars"
                        items={FormDemo2.cars()}
                        instructionLabel="Choose one"
                      />
                    </FormGroup>
                    <ButtonGroup>
                      <Button
                        disabled={!allRequiredFieldsHaveBeenVisitedOrHaveValues}
                        fadeUp={allRequiredFieldsHaveBeenVisitedOrHaveValues}
                        type="submit"
                      >
                        Submit
                      </Button>
                    </ButtonGroup>
                  </form>
                );
              }}
            />
        </div>
      </ACEPrimaryTheme>
    );
  }
}`;

export const scope = {
  ACEPrimaryTheme,
  Button,
  ButtonGroup,
  Form,
  FormGroup,
  FormRadioGroup,
  FormSelectDropdown,
  Paper,
};
