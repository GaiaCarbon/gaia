import React from 'react';
import {connect} from "react-redux";
import { withRouter } from "react-router";

// Dispatch Actions
import {
    startFlow
} from "../../../../../actions/Tokenization";

import CircularProgress from "@material-ui/core/CircularProgress";


class Landing extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        };

        this.handleStateChange = this.handleStateChange.bind(this);
    }

    componentDidMount() {

        if(this.props.tokenRequestId){
            // Request in progress ask if the user wants to continue or restart
            this.props.history.push("/app/tokenization/flow");
        } else {
            // Request initialisation of the new tokenization request
            this.props.startFlow({
                "startRequest":true
            });
        }

    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(!this.props.tokenRequestLoading){
            this.props.history.push("/app/tokenization/flow");
        }
    };

    handleStateChange(name,value) {
        this.setState({[name]: value});
        if(name === "projectType"){
            let sdfsd = this.state;
        }
    };

    render() {
        return (
            <div className="w-100">
                <div>
                    <h1>Create New Tokenized Asset</h1>
                </div>
                <div>
                    <div>Please wait generating request ...</div>
                </div>
                <div>
                    { this.props.tokenRequestId }
                </div>
                <div className={"text-center " + (this.props.tokenRequestLoading ? " d-block " : " d-none ") } >
                    <CircularProgress />
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


export default withRouter(connect(mapStateToProps, { startFlow })(Landing));
