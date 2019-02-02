import React, {Fragment} from 'react';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import IntlMessages from 'util/IntlMessages';
import Dropzone from 'react-dropzone';
import InputLabel from '@material-ui/core/InputLabel';

import PictureAsPDF from '@material-ui/icons/PictureAsPdf';
import Description from '@material-ui/icons/Description';


class AdditionalDocuments extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            accepted: [],
            rejected: []
        };

        this.handleDrop = this.handleDrop.bind(this);
    }

    componentDidMount() {


        if(this.props.additionalDocuments){
            const { additionalDocuments } = this.props.additionalDocuments
            this.setState({accepted : additionalDocuments});
        }

    };

    handleDrop(newAccepted, newRejected){
        const { accepted } = this.state;
        accepted.push(newAccepted[0]);
        this.props.onStateChange(newAccepted[0]);
        this.setState({accepted, newRejected});
    }


    render() {

        const baseStyle = {
            width: "100%",
            height: 200,
            borderWidth: 2,
            borderColor: '#666',
            borderStyle: 'dashed',
            borderRadius: 5
        };
        const activeStyle = {
            borderStyle: 'solid',
            borderColor: '#6c6',
            // backgroundColor: 'green'
        };
        const rejectStyle = {
            borderStyle: 'solid',
            borderColor: '#c66',
            // backgroundColor: 'red'
        };

        const docIconStyles ={
            height: "60px",
            width: "60px",
            color: "#3f51b5"
        };

        const documentBoxStyle = {
            margin: "5px",

            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            width:"90px"

        };


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
                                name="projectImage"
                                className="drop-documents"
                                acceptStyle={activeStyle}
                                rejectStyle={rejectStyle}

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

                                                    {this.state.accepted.map((accepted, index) => {

                                                        // application/pdf
                                                        //

                                                        const { type } = accepted;

                                                        if(type == "application/pdf"){
                                                            return <div key={index} style={documentBoxStyle}>
                                                                <PictureAsPDF style={docIconStyles}  /><br />
                                                                {accepted.name}
                                                            </div>;
                                                        } else {
                                                            return <div key={index} style={documentBoxStyle}>
                                                                <Description style={docIconStyles} /><br />
                                                                {accepted.name}
                                                            </div>;
                                                        }
                                                    }
                                                    )}

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

export default AdditionalDocuments;