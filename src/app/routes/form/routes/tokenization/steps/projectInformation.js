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

class ProjectInformation extends React.Component {

    constructor(props) {
        super(props);
        this.projectInfo = {};
        this.state = {
            projectType: "",
            aType: "",
            geoFocus: "",
            countryFocus1: "",
            countryFocus2: "",
            projectCategory: "",
            accepted: [],
            rejected: []
        };
        this.handleChange = this.handleChange.bind(this);
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
                    <div className="card-heading col-md-12"><h2>{<IntlMessages id="component.tokenization.generalProjectInformation"/>}</h2></div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <FormControl className="w-100"  margin="normal">

                                        <InputLabel htmlFor="projectType">{<IntlMessages id="component.tokenization.label.projectType"/>}</InputLabel>
                                        <Select
                                            name="projectType"
                                            value={this.state.projectType}
                                            onChange={this.handleChange}
                                            input={<Input id="projectType"/>}
                                        >
                                            <MenuItem value={10}>Existing Project</MenuItem>
                                            <MenuItem value={20}>Current Fundraising</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <FormControl className="w-100"  margin="normal">

                                        <InputLabel htmlFor="aType">{<IntlMessages id="component.tokenization.label.assetType"/>}</InputLabel>
                                        <Select
                                            name="aType"
                                            value={this.state.aType}
                                            onChange={this.handleChange}
                                            input={<Input id="aType"/>}
                                        >
                                            <MenuItem value={10}>Water</MenuItem>
                                            <MenuItem value={20}>Solar</MenuItem>
                                            <MenuItem value={30}>Biomass</MenuItem>
                                            <MenuItem value={40}>Wind</MenuItem>
                                            <MenuItem value={50}>Biogas</MenuItem>
                                            <MenuItem value={60}>Energy Efficiency</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <TextField
                                        id="assetName"
                                        name="assetName"
                                        margin="normal"
                                        onChange={this.handleChange}
                                        label={<IntlMessages id="component.tokenization.label.assetName"/>}
                                        fullWidth
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <FormControl className="w-100"  margin="normal">
                                        <InputLabel htmlFor="geoFocus">{<IntlMessages id="component.tokenization.label.geoFocus"/>}</InputLabel>
                                        <Select
                                            name="geoFocus"
                                            value={this.state.geoFocus}
                                            onChange={this.handleChange}
                                            input={<Input id="geoFocus"/>}
                                        >
                                            <MenuItem value={10}>Europe</MenuItem>
                                            <MenuItem value={20}>Asia</MenuItem>
                                            <MenuItem value={30}>North America</MenuItem>
                                            <MenuItem value={40}>South America</MenuItem>
                                            <MenuItem value={50}>Africa</MenuItem>

                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <FormControl className="w-100"  margin="normal">
                                        <InputLabel htmlFor="countryFocus1">{<IntlMessages id="component.tokenization.label.countryFocus1"/>}</InputLabel>
                                        <Select
                                            name="countryFocus1"
                                            value={this.state.countryFocus1}
                                            onChange={this.handleChange}
                                            input={<Input id="countryFocus1"/>}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Switzerland</MenuItem>
                                            <MenuItem value={20}>Brazil</MenuItem>
                                            <MenuItem value={30}>USA</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <FormControl className="w-100"  margin="normal">
                                        <InputLabel htmlFor="projectCategory">{<IntlMessages id="component.tokenization.label.projectCategory"/>}</InputLabel>
                                        <Select
                                            name="projectCategory"
                                            value={this.state.projectCategory}
                                            onChange={this.handleChange}
                                            input={<Input id="projectCategory"/>}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Carbon</MenuItem>
                                            <MenuItem value={20}>Energy Efficiency</MenuItem>
                                            <MenuItem value={30}>Water Quality</MenuItem>
                                            <MenuItem value={40}>Biodiversity And Habitat</MenuItem>
                                            <MenuItem value={50}>Water</MenuItem>
                                            <MenuItem value={60}>Social</MenuItem>
                                            <MenuItem value={70}>REDD</MenuItem>
                                            <MenuItem value={70}>Forrest Conservation & Avoided</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                            <div className="col-md-6">
                                &nbsp;
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-12 p-2 ">
                                <div className="form-group nudge">
                                    <TextField
                                        name="aboutProject"
                                        onChange={this.handleChange}
                                        rows="5"
                                        label="About"
                                        placeholder="Describe your project here"
                                        multiline
                                        margin="normal"
                                        fullWidth
                                    />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <TextField
                                        name="projectHighLights"
                                        onChange={this.handleChange}
                                        rows="5"
                                        label="Highlights"
                                        placeholder="Project Highlights"
                                        multiline
                                        margin="normal"
                                        fullWidth
                                    />
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-5">
                        <div className="form-group-dropzone pt-2">
                            <InputLabel htmlFor="projectImage">Upload Project image</InputLabel>
                            <Dropzone
                                name="projectImage"
                                className="dropDefault"
                                accept=".jpeg,.png"
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
                                    return 'Drag here or browse to upload';
                                }}
                            </Dropzone>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default ProjectInformation;