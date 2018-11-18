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

class Confirmation extends React.Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="card-heading col-md-12"><h2>Completed</h2></div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <TextField
                                id="aboutUser"
                                label="Write Something About You"
                                margin="normal"
                                multiline
                                rowsMax="4"
                                fullWidth
                            /></div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Confirmation;