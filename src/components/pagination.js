import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import {PAGINATION} from './../constants/constants_reducer';

class Pagination extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            offset: 0,
            currentPage: 1,
            lastPage: this.props.lastPage
        };
    }


    componentDidMount() {

    }

    componentWillReceiveProps(nextProps){
        if(nextProps.module_pagination){
            this.setState({
                currentPage: nextProps.module_pagination
            });
        }
    }

    nextPage() {
        if (this.state.currentPage !== this.state.lastPage) {
            let next = parseInt(this.state.currentPage + 1);
            this.setState({ currentPage: next });
            console.log(this.state.currentPage);
            this.props.saveCurrentPage(this.state.currentPage+1);
        }

    }

    backPage() {
        if (this.state.currentPage !== 1) {
            let back = parseInt(this.state.currentPage - 1);
            this.setState({ currentPage: back });
            console.log(this.state.currentPage);
            this.props.saveCurrentPage(this.state.currentPage-1);
        }

    }

    render() {
        return (
            <div>
                <Grid container spacing={8} justify="center" style={{ marginTop: '5px' }}>
                    <Grid item>
                        <Button onClick={() => this.backPage()} variant="contained" color="default" style={{ marginLeft: '5px', marginRight: '5px' }}>
                            {this.state.currentPage - 1 === 0 ? "--" : "Anterior " + parseInt(this.state.currentPage - 1)}
                        </Button>
                        <Button variant="contained" disabled style={{ marginLeft: '5px', marginRight: '5px' }}>
                            Página {this.state.currentPage}
                        </Button>
                        <Button onClick={() => this.nextPage()} variant="contained" color="default" style={{ marginLeft: '5px', marginRight: '5px' }}>
                            {this.state.currentPage + 1 > this.state.lastPage ? "--" : "Página " + parseInt(this.state.currentPage + 1)}
                        </Button>
                    </Grid>
                </Grid>

            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        module_pagination: state.module_pagination
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return { 
        saveCurrentPage: function (args) {
        dispatch({ type: PAGINATION, args });
      }}
}


const PaginationContainer = connect(mapStateToProps, mapDispatchToProps)(Pagination)
export default (PaginationContainer);