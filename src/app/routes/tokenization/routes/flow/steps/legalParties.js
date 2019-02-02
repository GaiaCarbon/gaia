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

class LegalParties extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            standard: "",
            verifier: ""
        };
        this.handleChange = this.handleChange.bind(this);
    };

    componentDidMount() {

        if(this.props.legalParties){

            this.setState({...this.props.legalParties});
        }

    };


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

    render() {
        return (
            <div>
                <div className="row">
                    <div className="card-heading col-md-12"><h2>Legal Parties</h2></div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-5">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <FormControl className="w-100"  margin="normal">
                                        <InputLabel htmlFor="standard">{<IntlMessages id="component.tokenization.label.standard"/>}</InputLabel>
                                        <Select
                                            name="standard"
                                            value={this.state.standard}
                                            onChange={this.handleChange}
                                            input={<Input id="standard"/>}
                                        >
                                            {
                                                this.props.selectData.standard.map((value,index)=>{
                                                    return <MenuItem key={index} value={value.name}>{value.name}</MenuItem>
                                                })
                                            }
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <FormControl className="w-100"  margin="normal">

                                        <InputLabel htmlFor="verifier">{<IntlMessages id="component.tokenization.label.verifier"/>}</InputLabel>
                                        <Select
                                            name="verifier"
                                            value={this.state.verifier}
                                            onChange={this.handleChange}
                                            input={<Input id="verifier"/>}
                                        >
                                            {
                                                this.props.selectData.verifier.map((value,index)=>{
                                                    return <MenuItem key={index} value={value.name}>{value.name}</MenuItem>
                                                })
                                            }
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6">

                    </div>
                </div>

            </div>
        );
    }

}

export default LegalParties;