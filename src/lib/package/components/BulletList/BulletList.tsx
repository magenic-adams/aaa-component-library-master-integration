import React from 'react';
import { withStyles } from '@material-ui/styles';
import cx from 'clsx';

import { Theme } from '@material-ui/core/styles/createMuiTheme';

import Label from '../Label/Label';

interface RequiredProps {
  id: string;

  list: string[];
}

interface OptionalProps {
  classes?: any; // MUI Decorator
  className?: string;
  label: string;
}

// Component styles manipulated entirely by theme
const styleClasses = (theme: Theme) => {
  return {
    root: {
      ...theme.typography.body1,
      '& label': {
        fontWeight: 500,
      },
    },
    list: {
      marginTop: 8,
      '& li': {
        fontWeight: theme.typographyValues.fontWeight,
        color: theme.typographyValues.color,
        fontSize: 16,
        lineHeight: 1,
      },
      '& li:before': {
        color: theme.palette.primary.main,
        content: "'\\2022'",
        fontSize: '22px',
        fontWeight: 900,
        display: 'inline-flex',
        marginRight: 10,
        verticalAlign: 'middle',
      },
    },
  };
};

const BulletList: React.FunctionComponent<RequiredProps & OptionalProps> = ({
  className,
  classes,
  id,
  label,
  list,
}) => {
  return (
    <div className={cx('BulletList', classes.root, className)}>
      {label && <Label id={id}>{label}</Label>}
      <ul id={id} data-quid={`BulletList-${id}`} className={cx(classes.list)}>
        {list.map((text, index) => {
          return <li key={`item-${index}`}>{text}</li>;
        })}
      </ul>
    </div>
  );
};

export default withStyles(styleClasses, { index: 0, withTheme: true })(
  BulletList
);
