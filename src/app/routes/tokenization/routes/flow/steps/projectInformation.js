import React, { Component, Fragment } from 'react';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import IntlMessages from 'util/IntlMessages';
import Dropzone  from 'react-dropzone';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';




class ProjectInformation extends Component {

    constructor(props) {
        super(props);
        // this.projectInfo = {
        //     projectType: ""
        // };
        this.state = {
            projectType: "",
            aType: "",
            assetName: "",
            geoFocus: "",
            countryFocus1: "",
            projectCategory: "",
            aboutProject: "",
            projectHighLights: "",
            accepted: [],
            rejected: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
    };

    componentDidMount() {

        if(this.props.projectInfo){

            const { projectImage } = this.props.projectInfo;

            this.setState({...this.props.projectInfo, accepted: (projectImage) ? projectImage : []});
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

    handleDrop(accepted, rejected){
        this.props.onStateChange("projectImage", accepted);
        this.setState({accepted, rejected});
    }

    render() {

        const baseStyle = {
            width: 200,
            height: 200,
            borderWidth: 2,
            borderColor: '#666',
            borderStyle: 'dashed',
            borderRadius: 5
        };
        const activeStyle = {
            borderStyle: 'solid',
            borderColor: '#6c6',
            backgroundColor: 'green'
        };
        const rejectStyle = {
            borderStyle: 'solid',
            borderColor: '#c66',
            backgroundColor: 'red'
        };


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
                                            {
                                                this.props.selectData.projectType.map((value,index)=>{
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

                                        <InputLabel htmlFor="aType">{<IntlMessages id="component.tokenization.label.assetType"/>}</InputLabel>
                                        <Select
                                            name="aType"
                                            value={this.state.aType}
                                            onChange={this.handleChange}
                                            input={<Input id="aType"/>}
                                        >
                                            {
                                                this.props.selectData.assetType.map((value,index)=>{
                                                    return <MenuItem key={index} value={value.name}>{value.name}</MenuItem>
                                                })
                                            }
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
                                        value={this.state.assetName}
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
                                            {
                                                this.props.selectData.geographicFocus.map((value,index)=>{
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
                                        <InputLabel htmlFor="countryFocus1">{<IntlMessages id="component.tokenization.label.countryFocus1"/>}</InputLabel>
                                        <Select
                                            name="countryFocus1"
                                            value={this.state.countryFocus1}
                                            onChange={this.handleChange}
                                            input={<Input id="countryFocus1"/>}
                                        >
                                            {
                                                this.props.selectData.countryFocus.map((value,index)=>{
                                                    return <MenuItem key={index} value={value.name}>{value.name}</MenuItem>
                                                })
                                            }

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
                                            {
                                                this.props.selectData.projectCategory.map((value,index)=>{
                                                    return <MenuItem key={index} value={value.name}>{value.name}</MenuItem>
                                                })
                                            }
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
                                        value={this.state.aboutProject}
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
                                        value={this.state.projectHighLights}
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
                                className="drop-default"
                                accept="image/*"
                                onDrop={this.handleDrop}
                            >
                                {({ getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject, acceptedFiles, rejectedFiles}) => {
                                    let styles = {...baseStyle};
                                    styles = isDragActive ? {...styles, ...activeStyle} : styles;
                                    styles = isDragReject ? {...styles, ...rejectStyle} : styles;

                                    return (
                                        <div className="container d-flex h-100 w-100 text-center">
                                            {isDragReject && <div>Unsupported file type...</div>}

                                            <div className="row align-self-center mx-auto">
                                            <Fragment>

                                                {this.state.accepted.map((accepted) => (
                                                    <img style={{ maxHeight:"150px"}}
                                                        alt="Preview"
                                                        key={accepted.preview}
                                                        src={accepted.preview}
                                                    />
                                                ))}

                                            </Fragment>
                                            </div>
                                        </div>
                                    )
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