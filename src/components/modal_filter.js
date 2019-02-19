import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import {MODAL_FILTER_STATE} from './../constants/constants_reducer';
import RangeSlider from './range_slider';
import MultipleSelect from './multiple_select';
import { FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';

const DialogTitle = withStyles(theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit * 2,
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing.unit,
    top: theme.spacing.unit,
    color: theme.palette.grey[500],
  },
}))(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing.unit * 2,
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    //borderTop: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit,
  },
}))(MuiDialogActions);

const options = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

class FilterModal extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({ open: false });
    this.props.showModal(false);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.module_modal) {
      this.handleClickOpen();
    } else {
      this.handleClose();
    }
  }

  render() {
 
    const marks = {};
    //mutando el objecto
    marks[0] = '$ 0';
    marks[100000] = '$ 100.000';
    return (
      <div>

        <Dialog
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.state.open}
        >
          <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
            Modal title
          </DialogTitle>
          <DialogContent>
          <div className="col-xs-12">
                <div className="form-group row">
                  <div className="col-xs-3">
                    <select className="form-control">
                      <option value="0">Order by price</option>
                      <option value="1">Order by Alphabet</option>
                    </select>
                  </div>

                  <div className="col-xs-2">
                    <button className="btn btn-primary" onClick={this.sortType}>Order {this.state.sort === 0 ? <FaSortAmountDown /> : <FaSortAmountUp />} </button>
                  </div>
                </div>

                <br></br>
                <RangeSlider marks={marks} title={"Price Range:"} minValue={0} maxValue={100000} step={10000} />
                <br></br>
                <MultipleSelect title={"Nombres"} options={options} />
                <br></br>
              </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Save changes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { module_modal: state.module_modal }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showModal: function (modal) {
      dispatch({ type: MODAL_FILTER_STATE, modal });
    }
  }
}

const FilterModalContainer = connect(mapStateToProps, mapDispatchToProps)(FilterModal)
export default FilterModalContainer;


