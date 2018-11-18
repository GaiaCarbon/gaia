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

class AdditionalDocuments extends React.Component {

    render() {
        return (
            <div className="tab-pane" id="tab2-3">
                <div className="row">
                    <div className="card-heading col-md-12"><h2>Additional Documents</h2></div>
                </div>
                <div className="row">
                    <div className="col-md-12 mb-5">
                        <div className="form-group-dropzone pt-2">
                            <InputLabel htmlFor="projectImage">Upload Whitepaper or any other documents to support your application.</InputLabel>
                            <Dropzone
                                accept=".jpeg,.png"
                                className="dropDefault"
                                onDrop={(accepted, rejected) => {
                                    this.setState({accepted, rejected});
                                }}
                            >
                                {({isDragActive, isDragReject}) => {
                                    if (isDragActive) {
                                        return 'All files will be accepted';
                                    }
                                    if (isDragReject) {
                                        return 'Some files will be rejected';
                                    }
                                    return 'Dropping some files here...';
                                }}
                            </Dropzone>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default AdditionalDocuments;