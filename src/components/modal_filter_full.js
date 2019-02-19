import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import RangeSlider from './range_slider';
import MultipleSelect from './multiple_select';
import RadioButton from './radio_button';
import { FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';
import { MODAL_FILTER_STATE } from '../constants/constants_reducer';
import { connect } from 'react-redux';

//import './../App.css';


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

class ModalFilterFull extends React.Component {

  constructor() {
    super();
    this.state = {
      open: false,
      sort: 0
    };
  }



  handleChange = event => {
    this.setState({ value: event.target.value });
  };


  handleClickOpen = () => {
    this.setState({ open: true });
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


  sortType = () => {
    this.state.sort === 0 ? this.setState({ sort: 1 }) : this.setState({ sort: 0 });
  }


  render() {
    const { fullScreen } = this.props;

    const marks = {};
    //mutando el objecto
    marks[0] = '$ 0';
    marks[100000] = '$ 100.000';

    return (
      <div>
        <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{"Filtros"}</DialogTitle>
          <DialogContent>
            <DialogContentText>

              <div className="col-xs-12">
                <div className="form-group row">
                  <div className="col-xs-3">
                    <select className="form-control">
                      <option value="0">Order by price</option>
                      <option value="1">Order by Alphabet</option>
                    </select>
                  </div>

                  <div className="col-xs-3">
                    <button className="btn btn-primary" onClick={this.sortType}>Order {this.state.sort === 0 ? <FaSortAmountDown /> : <FaSortAmountUp />} </button>
                  </div>
                </div>

                <br></br>
                <RangeSlider marks={marks} title={"Price Range:"} minValue={0} maxValue={100000} step={10000} />
                <br></br>
                <MultipleSelect title={"Nombres"} options={options} />
                <br></br>
              </div>

            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Acept
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

ModalFilterFull.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};


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

const FilterModalFullContainer = connect(mapStateToProps, mapDispatchToProps)(ModalFilterFull)
export default withMobileDialog()(FilterModalFullContainer);
