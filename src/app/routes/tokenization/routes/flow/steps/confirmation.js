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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Card, CardBody, CardImg, CardSubtitle, CardText} from 'reactstrap';
import moment from "moment";

import PictureAsPDF from '@material-ui/icons/PictureAsPdf';
import Description from '@material-ui/icons/Description';

const iconStyles = {
    height: "75",
    width: "75",
    color: "#3f51b5"
};

class Confirmation extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
        };
    }


    render() {

        const docIconStyles ={
            height: "30px",
            width: "30px",
            color: "#3f51b5"
        };

        const documentBoxStyle = {
            margin: "5px",

            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            maxWidth:"200px"

        };


        const { projectImage } = this.props.data.projectInfo;

        let finalTarget;
        if(projectImage && projectImage.length > 0){
            finalTarget = projectImage[0].preview;
        } else {
            finalTarget = "http://via.placeholder.com/420x225";
        }

        const docDivStyle ={
            border: "1px solid black",
            marginBottom: "5px",
            paddingLeft: "5px"
        };

        return (
            <div className="mb-5">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Summary of the project</h2>
                        <hr />

                        <div className="row">
                            <div className="col-md-4">
                                <Card className="shadow border-0" >
                                    <CardImg top width="100%" src={finalTarget}/>
                                    <CardBody>
                                        <h3 className="card-title mb-0">
                                            { this.props.data.projectInfo.assetName }
                                        </h3>
                                        <h4 className="font-weight-light">

                                        </h4>
                                        <p className="card-text text-muted">
                                            { this.props.data.projectInfo.aboutProject }
                                    </p>
                                    </CardBody>

                                    <div className="card-mt-footer">

                                    </div>
                                </Card>

                                <Card className="shadow border-0">
                                    <CardBody>
                                        <h3 className="card-title">Highlights</h3>
                                        <CardText>{this.props.data.projectInfo.projectHighLights}</CardText>
                                    </CardBody>
                                </Card>

                            </div>
                            <div className="col-md-8">
                                <div className="row">
                                    <div className="col-12">
                                        <Card className="shadow border-0">
                                            <CardBody>
                                                <h3 className="card-title">Project Information</h3>
                                                <div className="table-responsive-material">
                                                    <Table>
                                                        <TableBody>
                                                            <TableRow>
                                                                <TableCell color="lightgray">Project Type</TableCell>
                                                                <TableCell>{this.props.data.projectInfo.projectType}</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell>Type of asset</TableCell>
                                                                <TableCell>{this.props.data.projectInfo.aType}</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell>Geographic Focus</TableCell>
                                                                <TableCell>{this.props.data.projectInfo.geoFocus}</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell>Focus Country</TableCell>
                                                                <TableCell>{this.props.data.projectInfo.countryFocus1}</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell>Project Category</TableCell>
                                                                <TableCell>{this.props.data.projectInfo.projectCategory}</TableCell>
                                                            </TableRow>
                                                        </TableBody>
                                                    </Table>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <Card className="shadow border-0">
                                            <CardBody>
                                                <h3 className="card-title">Fundraising Details</h3>
                                                <div className="table-responsive-material">
                                                    <Table>
                                                        <TableBody>
                                                            <TableRow>
                                                                <TableCell>Units</TableCell>
                                                                <TableCell>{this.props.data.fundraisingDetails.units}</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell>Currency</TableCell>
                                                                <TableCell>{this.props.data.fundraisingDetails.currency}</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell>Measurement</TableCell>
                                                                <TableCell>{this.props.data.fundraisingDetails.measurement}</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell>Project Start</TableCell>
                                                                <TableCell>{ this.props.data.fundraisingDetails.projectStart.format("YYYY-MM-DD")}</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell>Project End</TableCell>
                                                                <TableCell>{ this.props.data.fundraisingDetails.projectEnd.format("YYYY-MM-DD")}</TableCell>
                                                            </TableRow>
                                                        </TableBody>
                                                    </Table>
                                                </div>
                                            </CardBody>
                                        </Card>

                                    </div>
                                    <div className="col-6">
                                        <Card className="shadow border-0">
                                            <CardBody>
                                                <h3 className="card-title">Legal Parties</h3>
                                                <div className="table-responsive-material">
                                                    <Table>
                                                        <TableBody>
                                                            <TableRow>
                                                                <TableCell>Standard</TableCell>
                                                                <TableCell>{this.props.data.legalParties.standard}</TableCell>
                                                            </TableRow>
                                                            <TableRow>
                                                                <TableCell>Verifier</TableCell>
                                                                <TableCell>{this.props.data.legalParties.verifier}</TableCell>
                                                            </TableRow>
                                                        </TableBody>
                                                    </Table>
                                                </div>
                                            </CardBody>
                                        </Card>
                                        <Card className="shadow border-0">
                                            <CardBody>
                                                <h3 className="card-title">Documents</h3>
                                                {
                                                    this.props.data.additionalDocuments.additionalDocuments.map((value,index)=>{


                                                        if(value.type == "application/pdf"){
                                                            return <div key={index} style={documentBoxStyle}>
                                                                <PictureAsPDF style={docIconStyles}  />
                                                                {value.name}
                                                            </div>;
                                                        } else {
                                                            return <div key={index} style={documentBoxStyle}>
                                                                <Description style={docIconStyles} />
                                                                {value.name}
                                                            </div>;
                                                        }
                                                    })
                                                }
                                            </CardBody>
                                        </Card>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <p>Please verify the above details before submitting</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        );
    }

}

export default Confirmation;