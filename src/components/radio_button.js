import React, { Component } from 'react';
import PropTypes from 'prop-types';




export default class RadioButton extends React.Component {
    state = {
        value: 'female',
    };

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <div className="form-group row">
                    <div class="input-group">
                        <div className="col-xs-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text">
                                    <input type="radio" aria-label="Radio button for following text input" />
                                </div>
                            </div>
                            <input value="Asc" type="text" class="form-control" aria-label="Text input with radio button" disabled />

                        </div>

                        <div className="col-xs-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text">
                                    <input type="radio" aria-label="Radio button for following text input" />
                                </div>
                            </div>
                            <input value="Desc" type="text" class="form-control" aria-label="Text input with radio button" disabled />
                        </div>
                    </div>



                </div>
            </div>
        );
    }
}

RadioButton.propTypes = {
    classes: PropTypes.object.isRequired,
};
