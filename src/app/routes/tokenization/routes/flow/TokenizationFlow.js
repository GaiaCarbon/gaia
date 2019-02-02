import React, {Fragment} from 'react';
import Stepper from '@material-ui/core/Stepper';
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
import ProjectInformation from './steps/projectInformation';
import FundraisingDetails from './steps/fundraisingDetails';
import AdditionalDocuments from './steps/additionalDocuments';
import LegalParties from './steps/legalParties';
import Confirmation from './steps/confirmation';

import moment from "moment";
import {withRouter} from "react-router";
import connect from "react-redux/es/connect/connect";
import {startFlow,projectInfoSave, fundraisingSave, documentsSave,legalPartiesSave} from "../../../../../actions/Tokenization";
import Finished from "./steps/finished";


class TokenizationFlow extends React.Component {

    constructor(props) {
        super(props);
        this.projectInfo = {};
        this.state = {
            activeStep: 0,

            // Project Info
            projectType:"-",
            assetName:"-",
            geoFocus:"-",
            countryFocus1:"-",
            aType:"-",
            projectCategory:"-",
            aboutProject:"-",
            projectHighLights:"-",

            // Fundraising Details
            units:"-",
            currency:"-",
            measurement:"-",
            projectStart: moment(),
            projectEnd: moment(),

            // Additional documents
            additionalDocuments: [],

            // Legal Parties
            standard:"-",
            verifier:"-"
        };


        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleDocPush = this.handleDocPush.bind(this);
    }

    handleNext = () => {

        const {activeStep} = this.state;

        switch(activeStep){
            case 0:

                this.props.projectInfoSave({
                    projectType:this.state.projectType,
                    assetName:this.state.assetName,
                    geoFocus:this.state.geoFocus,
                    countryFocus1:this.state.countryFocus1,
                    aType:this.state.aType,
                    projectCategory:this.state.projectCategory,
                    aboutProject:this.state.aboutProject,
                    projectHighLights:this.state.projectHighLights,
                    projectImage: this.state.projectImage
                });
                break;
            case 1:
                this.props.fundraisingSave({
                    units: this.state.units,
                    currency: this.state.currency,
                    measurement: this.state.measurement,
                    projectStart: this.state.projectStart,
                    projectEnd: this.state.projectEnd

                });
                break;
            case 2:
                this.props.documentsSave({
                    additionalDocuments: this.state.additionalDocuments
                });
                break;
            case 3:
                this.props.legalPartiesSave({
                    standard: this.state.standard,
                    verifier: this.state.verifier
                });
                break;
            case 4:

                break;

        }

        this.setState({
            activeStep: activeStep + 1
        });
    };

    handleBack = () => {
        const {activeStep} = this.state;
        this.setState({
            activeStep: activeStep - 1,
        });
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };

    handleStateChange(name,value) {

        this.setState({[name]: value});

    };

    handleDocPush(value){
        const { additionalDocuments } = this.state;
        additionalDocuments.push(value);
        this.setState({additionalDocuments: additionalDocuments});
    }

    componentDidMount() {
        if(!this.props.tokenRequestId){
            // Request in progress ask if the user wants to continue or restart
            this.props.history.push("/app/tokenization/landing");
        }
    };


    getSteps() {
        return ['', '', '', '',''];
        // return ['General project information', 'Fundraising details', 'Additional documents', 'Legal parties', 'Confirm and Finish'];
    }

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                // return <Finished />
                return <ProjectInformation selectData={this.props.selectData} projectInfo={this.props.projectInfo} onStateChange={this.handleStateChange} />;
            case 1:
                return <FundraisingDetails selectData={this.props.selectData} fundraisingDetails={this.props.fundraisingDetails} onStateChange={this.handleStateChange} />;
            case 2:
                return <AdditionalDocuments additionalDocuments={this.props.additionalDocuments} onStateChange={this.handleDocPush} /> ;
            case 3:
                return <LegalParties selectData={this.props.selectData} legalParties={this.props.legalParties} onStateChange={this.handleStateChange} />;
            case 4:
                return <Fragment>
                    <div>

                        <Confirmation
                            data={this.props}
                        />
                    </div>
                </Fragment>;
            default:
                return 'Unknown stepIndex';
        }
    }

    render() {
        const steps = this.getSteps();
        const {activeStep} = this.state;

        return (
            <div className="w-100">
                <div>
                    <h1>Create New Tokenized Asset</h1>
                    <h5>* Required Data</h5>
                </div>
                <Stepper activeStep={activeStep} alternativeLabel className="horizontal-stepper-linear">
                    {steps.map((label, index) => {
                        return (
                            <Step key={label} className={`horizontal-stepper ${index === activeStep ? 'active' : ''}`}>
                                <StepLabel className="stepperlabel">{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                <div>
                    {this.state.activeStep === steps.length ? (
                        <Finished />
                    ) : (
                        <div>
                            {this.getStepContent(activeStep)}
                            <div>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={this.handleBack}
                                    className="mr-2"
                                >
                                    Back
                                </Button>
                                <Button variant="raised" color="primary" onClick={this.handleNext}>
                                    {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({tokenization}, self) => {
    return {
        ...tokenization
    };
};

const mapDispatchToProps = {
    startFlow, projectInfoSave,fundraisingSave, documentsSave,
    legalPartiesSave
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(TokenizationFlow));

