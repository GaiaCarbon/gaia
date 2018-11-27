import React from 'react';
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
import DatePickers from '../../../components/routes/pickers/date/DatePickers';
import moment from "moment";

class TokenizationFlow extends React.Component {

    constructor(props) {
        super(props);
        this.projectInfo = {};
        this.state = {
            activeStep: 0,
            assetName:""
        };

        this.handleStateChange = this.handleStateChange.bind(this);
    }

    handleNext = () => {

        let pStat = this.projectInfo;
        debugger;
        const {activeStep} = this.state;
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

        if(name === "projectType"){

            let sdfsd = this.state;
            debugger;

        }

    };


    getSteps() {
        return ['', '', '', ''];
        // return ['General project information', 'Fundraising details', 'Additional documents', 'Legal parties', 'Confirm and Finish'];
    }

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return <ProjectInformation onStateChange={this.handleStateChange}
                                           // projectType={this.state.projectType}
                                           // assetType={this.state.assetType}
                />;
            case 1:
                return <FundraisingDetails />;
            case 2:
                return <AdditionalDocuments /> ;
            case 3:
                return <LegalParties />;
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
                        <div>
                            <Confirmation
                                assetName={this.state.assetName}
                            />
                            <div>
                                <Button onClick={this.handleReset}>Reset</Button>
                            </div>
                        </div>
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

export default TokenizationFlow;