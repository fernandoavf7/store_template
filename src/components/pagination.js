import React, { Component } from 'react';
import { Grid, Button } from '@material-ui/core';

class Pagination extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            offset: 0,
            currentPage: 1,
            lastPage: 5
        };
    }
    
 
    componentDidMount(){
        
    }

    nextPage() {
        
        let next = parseInt(this.state.currentPage + 1);
        this.setState({ currentPage: next });
        console.log(this.state.currentPage);
        
    }

    backPage() {
        let back = parseInt(this.state.currentPage - 1);
        this.setState({ currentPage: back });
        console.log(this.state.currentPage);
    }

    render() {
        return (
            <div>
               <Grid container spacing={8} justify="center" style={{ marginTop: '5px' }}>
                    <Grid item>
                        <Button onClick={()=> this.backPage()} variant="contained" color="default" style={{ marginLeft: '5px', marginRight: '5px' }}>
                            {this.state.currentPage - 1 === 0 ? "--" : "Anterior " + parseInt(this.state.currentPage - 1)}
                        </Button>
                        <Button variant="contained" disabled style={{ marginLeft: '5px', marginRight: '5px' }}>
                            Página {this.state.currentPage}
                        </Button>
                        <Button onClick={()=> this.nextPage()} variant="contained" color="default" style={{ marginLeft: '5px', marginRight: '5px' }}>
                            {this.state.currentPage + 1 === this.state.lastPage ? "--" : "Página " + parseInt(this.state.currentPage + 1)}
                        </Button>
                    </Grid>
                </Grid>
  
            </div>
        );
    }
}

export default Pagination;