import {
  ACEPrimaryTheme,
  Headline,
} from '../../package/components';

export const demo = `class HeadlineDemo extends React.Component {
  render(){
    return (
      <div>
        <ACEPrimaryTheme>
          <Headline>
            > Edit Headline
          </Headline>
        </ACEPrimaryTheme>
      </div>
    );
  }
}`;

export const scope = {
  ACEPrimaryTheme,
  Headline,
};
