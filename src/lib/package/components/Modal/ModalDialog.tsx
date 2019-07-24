import React from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/styles'; 
import { Dialog as MUIDialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

interface RequiredProps {
  actionButtons: any,
  classes: any,
  description: string,
  id: string,
  onClose: (evt: React.SyntheticEvent) => void,
  openModal: boolean,
};

interface OptionalProps {
  actionMessage?: string,
  className?: string,
  disableBackdropClick?: boolean,
  title?: string,
  transitionDuration: number,
};

const DefaultProps: OptionalProps = {
  disableBackdropClick: true,
  transitionDuration: 100,
};

const styleClasses  = (theme:Theme): {
 actionMessage: any,
 dialogActions: any,
 dialogContentText: any,
 paper: any,
} => ({
  actionMessage:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    paddingTop: 50,
    color: theme.secondaryPalette.colorVariables.BLACK,
    [theme.breakpoints.down('md')]:{
      fontSize: 16,
      paddingTop: 16,
    },
  },
  dialogActions: {
    display: 'unset',
    padding: 'unset',
    '& .ButtonGroup': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 'unset',
        '& .Button':{
          background: theme.secondaryPalette.colorVariables.WHITE,
          color: theme.secondaryPalette.colorVariables.BLACK,
          borderTop: `1px solid ${theme.secondaryPalette.colorVariables.DARK_GRAYISH_BLUE}`,
          width: '100%',
          borderRadius: 0,
          '&:hover': {
            background: theme.secondaryPalette.colorVariables.LIGHT_GRAYISH_BLUE,
          },
          '&:active': {
            background: theme.palette.primary.main,
            color: theme.secondaryPalette.colorVariables.WHITE,
          },
          '& span':{
            fontWeight: 'normal',
          },
          '&:not(:last-child)': {
            borderRight: `1px solid ${theme.secondaryPalette.colorVariables.DARK_GRAYISH_BLUE}`,
          },
        },
    },
  },
  dialogContentText:{
    flex: 'unset',
    padding: 'unset',
    '& p':{
      fontWeight: 'normal',
      fontSize: 18,
      textAlign: 'center',
      padding: '16px 16px 0px',
      margin: 'unset',
      color: theme.secondaryPalette.colorVariables.BLACK,
      [theme.breakpoints.down('md')]:{
        fontSize: 16,
      },
    },
  },
  paper:{
    maxWidth: 534,
    width: '100%',
  },
});

const ModalDialog:React.FunctionComponent<RequiredProps & OptionalProps> = ({
  actionButtons,
  className,
  classes,
  actionMessage,
  description,
  disableBackdropClick,
  id,
  onClose,
  openModal,
  transitionDuration,
 }) => (
      <MUIDialog
          className={clsx('ModalDialog', className)}
          classes={{
            paper: classes.paper,
          }}
          data-quid={`ModalDialog-${id}`}
          disableBackdropClick={disableBackdropClick}
          onClose={onClose}
          open={openModal}
          transitionDuration={transitionDuration}
      >
            <DialogContent
                classes={{
                  root: classes.dialogContentText,
                }}
                >
                <DialogContentText
                data-quid='ModalDialog-space-description'
                >
                  {description}
                </DialogContentText>
            </DialogContent>
          {actionMessage && <div className={classes.actionMessage} data-quid={`Action-${id}`}>{actionMessage}</div>}
          <DialogActions
              classes={{
                root: classes.dialogActions,
              }}
            >
                {actionButtons}
          </DialogActions>
       </MUIDialog>
 );

 ModalDialog.defaultProps = DefaultProps;

 export default withStyles(styleClasses, { withTheme: true })(ModalDialog);