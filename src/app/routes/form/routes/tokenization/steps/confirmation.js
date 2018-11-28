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
        return (
            <div className="mb-5">
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
                <div className="row">
                    <div className="col-md-12">
                        <h2>Summary of the project</h2>
                        <hr />
                        <div className="row">
                            <div className="col-md-4">
                                <Card className="shadow border-0">
                                    <CardBody>
                                        <h3 className="card-title">Project Information</h3>
                                        <CardText>
                                            <div className="table-responsive-material">
                                                <Table>
                                                    <TableBody>
                                                        <TableRow>
                                                            <TableCell color="lightgray">Project Type</TableCell>
                                                            <TableCell>{this.props.projectType}</TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell>Type of asset</TableCell>
                                                            <TableCell>{this.props.aType}</TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell>Geographic Focus</TableCell>
                                                            <TableCell>{this.props.geoFocus}</TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell>Focus Country</TableCell>
                                                            <TableCell>{this.props.countryFocus1}</TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell>Project Category</TableCell>
                                                            <TableCell>{this.props.projectCategory}</TableCell>
                                                        </TableRow>
                                                    </TableBody>
                                                </Table>
                                            </div>
                                        </CardText>
                                    </CardBody>
                                </Card>
                                <Card className="shadow border-0">
                                    <CardBody>
                                        <h3 className="card-title">About</h3>
                                        <CardText>{this.props.aboutProject}</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="col-md-4">
                                <Card className="shadow border-0">
                                    <CardBody>
                                        <h3 className="card-title">Fundraising Details</h3>
                                        <CardText>
                                            <div className="table-responsive-material">
                                                <Table>
                                                    <TableBody>
                                                        <TableRow>
                                                            <TableCell>Units</TableCell>
                                                            <TableCell>{this.props.units}</TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell>Currency</TableCell>
                                                            <TableCell>{this.props.currency}</TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell>Measurement</TableCell>
                                                            <TableCell>{this.props.measurement}</TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell>Project Start</TableCell>
                                                            <TableCell>{ this.props.projectStart.format("YYYY-MM-DD")}</TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell>Project End</TableCell>
                                                            <TableCell>{ this.props.projectEnd.format("YYYY-MM-DD")}</TableCell>
                                                        </TableRow>
                                                    </TableBody>
                                                </Table>
                                            </div>
                                        </CardText>
                                    </CardBody>
                                </Card>
                                <Card className="shadow border-0">
                                    <CardBody>
                                        <h3 className="card-title">Highlights</h3>
                                        <CardText>{this.props.projectHighLights}</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="col-md-4">
                                <Card className="shadow border-0">
                                    <CardBody>
                                        <h3 className="card-title">Legal Parties</h3>
                                        <CardText>
                                            <div className="table-responsive-material">
                                                <Table>
                                                    <TableBody>
                                                        <TableRow>
                                                            <TableCell>Standard</TableCell>
                                                            <TableCell>{this.props.standard}</TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell>Verifier</TableCell>
                                                            <TableCell>{this.props.verifier}</TableCell>
                                                        </TableRow>
                                                    </TableBody>
                                                </Table>
                                            </div>
                                        </CardText>
                                    </CardBody>
                                </Card>
                                <Card className="shadow border-0">
                                    <CardBody>
                                        <h3 className="card-title">Documents</h3>
                                        <CardText></CardText>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        );
    }

}

export default Confirmation;