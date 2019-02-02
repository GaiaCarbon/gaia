import React from 'react';
import {Card, CardBody, CardImg} from 'reactstrap';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import connect from "react-redux/es/connect/connect";


const styles = {
    button: {
        margin: '0 14px'
    },
    container: {
        boxShadow: 'none',
        background: '#f8f9fa'
    }
};

class AssetMarket extends React.Component {
    constructor(props, context) {
        super(props, context);

        // debugger;

        this.state = {
            styles: styles
        };

        this.getImageSrc = this.getImageSrc.bind(this);
    }

    getImageSrc(token){

        const url = "http://via.placeholder.com/420x225";

        if(token.projectImage){
            return token.projectImage;
        }

        return url;
    }

    render() {

        const {styles} = this.state;

        const { tokens } = this.props;




        return (
            <Grid container style={styles.container} spacing={24}>
                {
                    tokens.map((data, index) =>
                        <Grid key={index}  item xs={12} sm={6} lg={3}>
                            <Card key={index} className="shadow border-0">
                                <CardImg top width="100%" src={this.getImageSrc(data.projectInfo)}/>
                                <CardBody>
                                    <h3 className="card-title mb-0">
                                        {data.projectInfo.assetName}
                                    </h3>
                                    <h4 className="font-weight-light">
                                       {data.stock.price} {data.fundraisingDetails.currency}/{data.stock.metric} | {data.stock.remaining} remaining
                                    </h4>
                                    <p className="card-text text-muted">
                                        {data.projectInfo.aboutProject}
                                    </p>
                                </CardBody>

                                <div className="card-mt-footer">
                                    <Button variant="raised" style={styles.button} className="jr-btn jr-btn-sm" color="primary">
                                        <span>Buy</span>
                                    </Button>
                                </div>
                            </Card>
                        </Grid>
                    )
                }
          </Grid>
        );
    }
}


const mapStateToProps = (state, props) =>{

    const { assetMarket } = state;

    return assetMarket;
};



export default connect(mapStateToProps,{})(AssetMarket);