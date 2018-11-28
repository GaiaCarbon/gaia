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
import {DatePicker, DateTimePicker} from 'material-ui-pickers';

class FundraisingDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            units : "",
            currency : "",
            measurement : "",
            startDate:  moment(),
            endDate: moment()
        };

        this.handleChange = this.handleChange.bind(this);
    }

    //handleChange = name => event => {

      //  this.setState({[name]: event.target.value});
    //};

    handleChange(e) {

        if (e.target) {
            let targetControl = e.target.name;
            let value = e.target.value;
            // Send state to upper control
            this.props.onStateChange(targetControl, value);
            // maintain state in control (visual issue with the material ui)
            this.setState({[targetControl]: value});
        }
    };

    handleDateChange = name => date => {
        this.setState({[name]: date});
        this.props.onStateChange(name, date);
    };

    render(){
        const {startDate} = this.state;
        const {endDate} = this.state;

        return (
            <div>
                <div className="row">
                    <div className="col-md-12">

                    </div>
                </div>
                <div className="row">
                    <div className="card-heading col-md-12"><h2>Fundraising Details</h2></div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <TextField
                                        name="units"
                                        id="units"
                                        label="Units"
                                        margin="normal"
                                        onChange={this.handleChange}
                                        fullWidth
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <FormControl className="w-100"  margin="normal">

                                        <InputLabel htmlFor="currency">{<IntlMessages id="component.tokenization.label.currency"/>}</InputLabel>
                                        <Select
                                            name="currency"
                                            value={this.state.currency}
                                            onChange={this.handleChange}
                                            input={<Input id="currency"/>}
                                        >
                                            <MenuItem value="EUR">EUR</MenuItem>
                                            <MenuItem value="USD">USD</MenuItem>
                                            <MenuItem value="CHF">CHF</MenuItem>
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
                                            name="measurement"
                                            value={this.state.measurement}
                                            onChange={this.handleChange}
                                            input={<Input id="measurement"/>}
                                        >
                                            <MenuItem value="VER (tCO2e)">VER (tCO2e)</MenuItem>
                                            <MenuItem value="VCU (tCO2e)">VCU (tCO2e)</MenuItem>
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
                                    <DatePicker
                                        fullWidth
                                        value={startDate}
                                        onChange={this.handleDateChange('startDate')}
                                        animateYearScrolling={false}
                                        leftArrowIcon={<i className="zmdi zmdi-arrow-back" />}
                                        rightArrowIcon={<i className="zmdi zmdi-arrow-forward" />}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <div className="form-group">
                                        <InputLabel htmlFor="endDate">{<IntlMessages id="component.tokenization.label.startDate"/>}</InputLabel>
                                        <DatePicker
                                            fullWidth
                                            value={endDate}
                                            onChange={this.handleDateChange('endDate')}
                                            animateYearScrolling={false}
                                            leftArrowIcon={<i className="zmdi zmdi-arrow-back" />}
                                            rightArrowIcon={<i className="zmdi zmdi-arrow-forward" />}
                                        />
                                    </div>

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