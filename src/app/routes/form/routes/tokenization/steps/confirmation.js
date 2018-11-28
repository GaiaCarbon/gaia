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
import SvgIcon from '@material-ui/core/SvgIcon';

const iconStyles = {
    height: "75",
    width: "75",
    color: "#3f51b5"
};

class Confirmation extends React.Component {

    render() {
        return (
            <div className="mb-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="form-group">
                            <SvgIcon style={iconStyles}>
                                <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"></path>
                            </SvgIcon>
                            <h1>Completed</h1>
                            <p>Your project application has been submitted to the greenX platform.</p>
                            <p>Our experts will asses and get back to you.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h2>Summary of the project</h2>
                        <hr />
                        <div className="row">
                            <div className="col-md-4">AssetName : {this.props.assetName}</div>
                            <div className="col-md-4">Part 2</div>
                            <div className="col-md-4">Part 3</div>
                        </div>

                    </div>

                </div>
            </div>
        );
    }

}

export default Confirmation;