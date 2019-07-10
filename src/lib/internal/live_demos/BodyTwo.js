import {
  ACEPrimaryTheme,
  Body,
} from '../../package/components';

export const demo = `class BodyTwoDemo extends React.Component {
  render(){
    return (
      <div>
        <ACEPrimaryTheme>
          <Body secondary>
            > Edit Body 2
          </Body>
        </ACEPrimaryTheme>
      </div>
    );
  }
}`;

export const scope = {
  ACEPrimaryTheme,
  Body,
};
