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
import {FaHome, FaSignOutAlt, FaUserCircle, FaStar, FaFilter } from 'react-icons/fa';
import ModalFilter from './modal_filter';
import { connect } from 'react-redux'
import { MODAL_FILTER_STATE, SIDEBAR_STATE } from '../constants/constants_reducer';
import ModalFilterFull from './modal_filter_full';
import { Link } from 'react-router-dom';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class Sidebar extends React.Component {
  /*
    constructor(props) {
      super(props);
      this.state = {
        left: false,
        currentUrl: ""
      };
    }
  */


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
    //console.log("componentWillReceiveProps");
    this.openSidebar(nextProps.module_sidebar);
  }

  logOut() {
    console.log("loggin out");
    //this.setCurrentUrl();
  }

  /*
  setCurrentUrl = () => {
    this.setState({
      currentUrl: this.props.location
    });
    console.log(this.state.currentUrl)
  }*/

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>

          <ListItem button>
            <ListItemIcon>
              <FaHome />
            </ListItemIcon>
            <Link to="/"><ListItemText primary={"Home"} /></Link>
          </ListItem>

          <ListItem button onClick={() => { this.props.showModal(true) }}>

            <ListItemIcon>
              <FaFilter />
            </ListItemIcon>
            <Link to=""><ListItemText primary={"Filter"} /></Link>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <FaStar />
            </ListItemIcon>
            <Link to="/favourites"><ListItemText primary={"Favourites"} /></Link>
          </ListItem>

        </List>

        <Divider />

        <List>

          <ListItem button>
            <ListItemIcon>
              <FaUserCircle />
            </ListItemIcon>
            <Link to="/profile"><ListItemText primary={"Profile"} /></Link>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <FaSignOutAlt />
            </ListItemIcon>
            <Link to=""><ListItemText primary={"Log Out"} button onClick={this.logOut} /></Link>
          </ListItem>


        </List>

      </div >
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

        <ModalFilterFull />
      </div>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};


const mapStateToProps = (state, ownProps) => {
  return {
    module_modal: state.module_modal,
    module_sidebar: state.module_sidebar
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showModal: function (modal) {
      dispatch({ type: MODAL_FILTER_STATE, modal });
    },
    showSidebar: function (sidebar) {
      dispatch({ type: SIDEBAR_STATE, sidebar });
    }
  }
}

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar)
export default withStyles(styles)(SidebarContainer);