"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _styles = require("@material-ui/styles");

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;
;
var DefaultProps = {
  disableBackdropClick: true,
  transitionDuration: 100
};

var styleClasses = theme => ({
  actionMessage: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    paddingTop: 50,
    color: theme.secondaryPalette.colorVariables.BLACK,
    [theme.breakpoints.down('md')]: {
      fontSize: 16,
      paddingTop: 16
    }
  },
  dialogActions: {
    display: 'unset',
    padding: 'unset',
    '& .ButtonGroup': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 'unset',
      '& .Button': {
        background: theme.secondaryPalette.colorVariables.WHITE,
        color: theme.secondaryPalette.colorVariables.BLACK,
        borderTop: "1px solid ".concat(theme.secondaryPalette.colorVariables.DARK_GRAYISH_BLUE),
        width: '100%',
        borderRadius: 0,
        '&:hover': {
          background: theme.secondaryPalette.colorVariables.LIGHT_GRAYISH_BLUE
        },
        '&:active': {
          background: theme.palette.primary.main,
          color: theme.secondaryPalette.colorVariables.WHITE
        },
        '& span': {
          fontWeight: 'normal'
        },
        '&:not(:last-child)': {
          borderRight: "1px solid ".concat(theme.secondaryPalette.colorVariables.DARK_GRAYISH_BLUE)
        }
      }
    }
  },
  dialogContentText: {
    flex: 'unset',
    padding: 'unset',
    '& p': {
      fontWeight: 'normal',
      fontSize: 18,
      textAlign: 'center',
      padding: '16px 16px 0px',
      margin: 'unset',
      color: theme.secondaryPalette.colorVariables.BLACK,
      [theme.breakpoints.down('md')]: {
        fontSize: 16
      }
    }
  },
  paper: {
    maxWidth: 534,
    width: '100%'
  }
});

var ModalDialog = (_ref) => {
  var {
    actionButtons,
    className,
    classes,
    actionMessage,
    description,
    disableBackdropClick,
    id,
    onClose,
    openModal,
    transitionDuration
  } = _ref;
  return _react.default.createElement(_core.Dialog, {
    className: (0, _clsx.default)('ModalDialog', className),
    classes: {
      paper: classes.paper
    },
    "data-quid": "ModalDialog-".concat(id),
    disableBackdropClick: disableBackdropClick,
    onClose: onClose,
    open: openModal,
    transitionDuration: transitionDuration
  }, _react.default.createElement(_core.DialogContent, {
    classes: {
      root: classes.dialogContentText
    }
  }, _react.default.createElement(_core.DialogContentText, {
    "data-quid": "ModalDialog-space-description"
  }, description)), actionMessage && _react.default.createElement("div", {
    className: classes.actionMessage,
    "data-quid": "Action-".concat(id)
  }, actionMessage), _react.default.createElement(_core.DialogActions, {
    classes: {
      root: classes.dialogActions
    }
  }, actionButtons));
};

ModalDialog.defaultProps = DefaultProps;

var _default = (0, _styles.withStyles)(styleClasses, {
  withTheme: true
})(ModalDialog);

exports.default = _default;