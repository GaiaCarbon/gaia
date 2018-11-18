import React from 'react';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import IntlMessages from 'util/IntlMessages';
import Dropzone from 'react-dropzone';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import moment from 'moment';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import {DatePicker} from 'material-ui-pickers';
import MuiPickersUtilsProvider from "material-ui-pickers/MuiPickersUtilsProvider";

class FundraisingDetails extends React.Component {

    state = {
        units : "",
        currency : "",
        measurement : "",
        startDate: moment(),
        endDate: moment(),
        selectedDate: moment()
    };

    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    };

    handleDateChange = (date) => {
        this.setState({selectedDate: date});
    };

    render(){
        const {selectedDate} = this.state;

        return (
            <div>
                <div className="row">
                    <div className="card-heading col-md-12"><h2>Fundraising Details</h2></div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <TextField
                                        id="units"
                                        label="Units"
                                        margin="normal"
                                        fullWidth
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <FormControl className="w-100"  margin="normal">

                                        <InputLabel htmlFor="currency">{<IntlMessages id="component.tokenization.label.currency"/>}</InputLabel>
                                        <Select
                                            value={this.state.currency}
                                            onChange={this.handleChange('currency')}
                                            input={<Input id="currency"/>}
                                        >
                                            <MenuItem value={10}>EUR</MenuItem>
                                            <MenuItem value={20}>USD</MenuItem>
                                            <MenuItem value={30}>CHF</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <FormControl className="w-100"  margin="normal">
                                        <InputLabel htmlFor="measurement">{<IntlMessages id="component.tokenization.label.measurement"/>}</InputLabel>
                                        <Select
                                            value={this.state.measurement}
                                            onChange={this.handleChange('measurement')}
                                            input={<Input id="measurement"/>}
                                        >
                                            <MenuItem value={10}>VER (tCO2e)</MenuItem>
                                            <MenuItem value={20}>VCU (tCO2e)</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <InputLabel htmlFor="startDate">{<IntlMessages id="component.tokenization.label.startDate"/>}</InputLabel>


                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <InputLabel htmlFor="endDate">{<IntlMessages id="component.tokenization.label.endDate"/>}</InputLabel>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );

    }

}

export default FundraisingDetails;