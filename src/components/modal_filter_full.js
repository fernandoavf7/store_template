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
import { FaSortDown, FaSortUp } from 'react-icons/fa';

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

class ResponsiveDialog extends React.Component {
  
  constructor(){
    super();
     this.state = {
    open: true,
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
  };

  sortType= ()=>{
    this.state.sort === 0?  this.setState({sort: 1}):  this.setState({sort: 0});
  }

  render() {
    const { fullScreen } = this.props;

    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Open responsive dialog
        </Button>
        <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{"Filtros"}</DialogTitle>
          <DialogContent>
            <DialogContentText>


              <div className="col-xs-2">
                <button className="btn btn-primary" onClick={this.sortType}>Order { this.state.sort === 0? <FaSortDown/>: <FaSortUp/>} </button>
              </div>
              <br></br>
              <RangeSlider title={"Price Range:"} minValue={0} maxValue={100000} step={10000} />
              <br></br>
              <MultipleSelect title={"Nombres"} options={options} />
              <br></br>


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

ResponsiveDialog.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

export default withMobileDialog()(ResponsiveDialog);