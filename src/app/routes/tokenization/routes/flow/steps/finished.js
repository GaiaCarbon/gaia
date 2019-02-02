import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import SaveIcon from '@material-ui/icons/Save';


import {withStyles} from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import classNames from 'classnames';
import {withRouter} from "react-router";
import connect from "react-redux/es/connect/connect";
import {
    tokenizationSave, tokenizationSaveFail, tokenizationSaveSuccess
} from "../../../../../../actions/Tokenization";

const iconStyles = {
    height: "75",
    width: "75",
    color: "#3f51b5"
};


const styles = theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
    },
    wrapper: {
        margin: theme.spacing.unit,
        position: 'relative',
    },
    buttonSuccess: {
        backgroundColor: green[500],
        color: grey[50],
        '&:hover': {
            backgroundColor: green[700],
        },
    },
    fabProgress: {
        color: green[500],
        position: 'absolute',
        top: -6,
        left: -6,
        zIndex: 1,
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
});

class Finished extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {

        this.props.tokenizationSave({
            "startRequest": true
        });

    };

    render() {

        const {loading, success} = this.state;
        const {classes} = this.props;
        const buttonClassname = classNames({
            [classes.buttonSuccess]: success,
        });

        return (
            <div>
                <div className={(this.props.saving ? "mb-5" : "d-none") }>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="text-center">
                                <div className={classes.root }>
                                <div id="saveWrap" className={classes.wrapper + " mx-auto"}>
                                    <Button variant="fab" color="primary" className={buttonClassname} onClick={this.handleButtonClick}>
                                        {<SaveIcon/>}
                                    </Button>
                                    {<CircularProgress size={68} className={classes.fabProgress}/>}
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={(this.props.saveComplete ?  "mb-5" : " d-none") }>
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
                </div>
            </div>
        );
    }

}


const mapStateToProps = (state, self) => {

    const { saving, saveComplete } = state.tokenization;


    return {
        ...state,
        saving: saving,
        saveComplete: saveComplete
    };
};

const mapDispatchToProps = {
    tokenizationSave, tokenizationSaveSuccess, tokenizationSaveFail
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Finished)));