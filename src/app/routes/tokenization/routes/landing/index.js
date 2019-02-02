import React from 'react';
import connect from 'react-redux';
import CardBox from 'components/CardBox/index';
import IntlMessages from 'util/IntlMessages';
import Landing from "../landing/landing";

const DataTables = () => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <div className="row mb-md-4">
                <CardBox styleName="col-lg-12" childrenStyle="d-flex justify-content-center"
                         heading={<IntlMessages
                             id="component.stepper.horizontalLinearAlternativeLabel"/>}
                         headerOutside>
                    <Landing />
                </CardBox>
            </div>
        </div>

    );
};

export default DataTables;

