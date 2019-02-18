import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
//import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { FaSignOutAlt, FaUserCircle, FaStar, FaFilter } from 'react-icons/fa';
import ModalFilter from './modal_filter';
import { connect } from 'react-redux'
import { MODAL_FILTER_STATE, SIDEBAR_STATE } from '../constants/constants_reducer';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class Sidebar extends React.Component {

  state = {
    left: false
  };

  //dont delete
  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
    this.props.showSidebar(open);
  };

  openSidebar(state) {
    this.setState({
      'left': state,
    });
    this.props.showSidebar(state);
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
    this.openSidebar(nextProps.module_sidebar);
  }

 
  render() {
    const { classes } = this.props;


    const sideList = (
      <div className={classes.list}>
        <List>
          {['Filter', 'Favourites'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <FaFilter onClick={() => {this.props.showModal(true)}} /> : <FaStar />}</ListItemIcon>
              <ListItemText primary={text}  />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['My Profile', 'Log Out'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <FaUserCircle /> : <FaSignOutAlt />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>

      </div>
    );


    return (
      <div>

        <SwipeableDrawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
          onOpen={this.toggleDrawer('left', true)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}>
            {sideList}
          </div>
        </SwipeableDrawer>
        <ModalFilter />
      </div>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};


const mapStateToProps = (state, ownProps) => {
  return { module_modal: state.module_modal,
    module_sidebar: state.module_sidebar }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showModal: function (modal) {
      dispatch({ type: "MODAL_FILTER_STATE", modal });
    },
    showSidebar: function (sidebar) {
      dispatch({ type: "SIDEBAR_STATE", sidebar });
    }
  }
}

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar)
export default withStyles(styles)(SidebarContainer);