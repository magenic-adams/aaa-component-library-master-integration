"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@material-ui/styles");

var _Clear = _interopRequireDefault(require("@material-ui/icons/Clear"));

var _core = require("@material-ui/core");

var _clsx = _interopRequireDefault(require("clsx"));

var _TooltipStyles = _interopRequireDefault(require("./TooltipStyles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// Styles
;
;
var DefaultProps = {
  id: '1',
  open: false
};

function Tooltip(props) {
  var {
    children,
    className,
    classes,
    description,
    id,
    open,
    placement,
    title
  } = props;

  var [openInternal, setOpen] = _react.default.useState(open);

  function handleTooltipClose() {
    setOpen(false);
  }

  function handleTooltipOpen() {
    setOpen(true);
  }

  function composedTitle() {
    return _react.default.createElement(_react.Fragment, null, _react.default.createElement("span", {
      className: classes.arrow,
      id: "popperArrow"
    }), _react.default.createElement("div", {
      onClick: handleTooltipClose,
      role: "presentation"
    }, _react.default.createElement(_Clear.default, {
      className: classes.iconStyle,
      id: "popperIcon"
    })), _react.default.createElement("div", {
      className: classes.placeholder
    }, _react.default.createElement("div", {
      className: classes.tooltipTitle,
      id: "popperTitle"
    }, title), _react.default.createElement("div", {
      className: classes.tooltipDescription,
      id: "popperDescription"
    }, description)));
  }

  ;
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_core.ClickAwayListener, {
    onClickAway: handleTooltipClose
  }, _react.default.createElement("div", null, _react.default.createElement(_core.Tooltip, {
    className: (0, _clsx.default)('Tooltip', className),
    classes: {
      tooltip: classes.tooltip,
      popper: classes.popper
    },
    "data-quid": "Tooltip-".concat(id),
    open: openInternal,
    placement: placement,
    PopperProps: {
      disablePortal: true
    },
    TransitionComponent: _core.Fade,
    TransitionProps: {
      timeout: 600
    },
    title: composedTitle()
  }, _react.default.createElement("div", {
    onClick: handleTooltipOpen,
    role: "presentation",
    id: "tooltipChild"
  }, children)))));
}

;
Tooltip.defaultProps = DefaultProps;

var _default = (0, _styles.withStyles)(_TooltipStyles.default, {
  withTheme: true
})(Tooltip);

exports.default = _default;