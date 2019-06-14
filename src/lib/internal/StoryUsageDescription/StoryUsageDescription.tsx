/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

// MUI Components
import { makeStyles } from '@material-ui/core/styles';
import Checkmark from '@material-ui/icons/Done';
import Warning from '@material-ui/icons/Warning';

// Components
import Subheadline from '../../package/components/Subheadline/Subheadline';
import Body from '../../package/components/Body/Body';

// CSS
import './StoryUsageDescription.css';

type propTypes = {
  positive: boolean,
  items: string[],
  usageText: string,
};

const useStyles = props => makeStyles(theme => ({
  root: {
    color: props.positive ? 'green' : 'red',
    verticalAlign: 'middle',
    marginRight: 10,
  },
  icon: {
    margin: theme.spacing(1),
    fontSize: 32,
  },
}));


export function StoryUsageDescription({
  positive,
  items,
  usageText,
}:propTypes){
  const classes = useStyles({ positive })();
  return (
    <div className="StoryUsageDescription">
      <Subheadline>{usageText}</Subheadline>
      {items.map((text, i) => (
        <Body>
          <li key={`text-${i}`}>
            {positive
              ? <span><Checkmark classes={classes}/></span>
              : <span><Warning classes={classes}/></span>
            }
            <span>{text}</span>
          </li>
        </Body>
      ))}
    </div>
  );
}

export default {
  StoryUsageDescription,
};
