import React from 'react';
import {Card, CardBody, CardImg} from 'reactstrap';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

let counter = 0;

function createData(name, price, remaining, metric, currency, currencySign) {
    counter += 1;
    return {id: counter, name, price, remaining, metric, currency, currencySign};
}

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

        this.state = {
            styles: styles,
            data: [
              createData('Tree token', 159, 24, 'ton', 'USD', '$'),
              createData('Flower token', 234, 24, 'ton', 'USD', '$'),
              createData('Plant token', 159, 24, 'ton', 'USD', '$'),
              createData('Air token', 23, 24, 'ton', 'USD', '$'),
              createData('Fire token', 234, 24, 'ton', 'USD', '$'),
              createData('Flower token', 234, 24, 'ton', 'USD', '$'),
              createData('Sunflower token', 567, 24, 'ton', 'USD', '$'),
              createData('Plant token', 159, 24, 'ton', 'USD', '$'),
              createData('Air token', 23, 24, 'ton', 'USD', '$'),
              createData('Fire token', 234, 24, 'ton', 'USD', '$'),
              createData('Flower token', 234, 24, 'ton', 'USD', '$'),
              createData('Tree token', 159, 24, 'ton', 'USD', '$'),
              createData('Tree token', 567, 24, 'ton', 'USD', '$'),
              createData('Tree token', 159, 24, 'ton', 'USD', '$'),
            ]
        };
    }

    render() {
        const {data, styles} = this.state;

        return (
            <Grid container style={styles.container} spacing={24}>
                {
                    data.map((data) =>
                        <Grid item xs={12} sm={6} lg={3}>
                            <Card className="shadow border-0">
                                <CardImg top width="100%" src="http://via.placeholder.com/420x225" />
                                <CardBody>
                                    <h3 className="card-title mb-0">
                                        {data.name}
                                    </h3>
                                    <h4 className="font-weight-light">
                                        {data.currencySign}{data.price} {data.currency}/{data.metric} | {data.remaining} remaining
                                    </h4>
                                    <p className="card-text text-muted">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
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

export default AssetMarket;