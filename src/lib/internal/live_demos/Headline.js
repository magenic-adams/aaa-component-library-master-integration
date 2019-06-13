import {
  AAAPrimaryTheme,
  Headline,
} from '../../package/components';

export const demo = `class HeadlineDemo extends React.Component {
  render(){
    return (
      <div>
        <AAAPrimaryTheme>
          <Headline>
            > Edit Headline
          </Headline>
        </AAAPrimaryTheme>
      </div>
    );
  }
}`;

export const scope = {
  AAAPrimaryTheme,
  Headline,
};
