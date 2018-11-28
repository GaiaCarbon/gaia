import React from 'react';
import CardBox from 'components/CardBox/index';
import IntlMessages from 'util/IntlMessages';
import AssetMarket from './Components/AssetMarket';

const AssetsMarket = () => {
    return (
        <div className="row animated slideInUpTiny animation-duration-3">
            <CardBox styleName="col-12 disable-box-shadow" cardStyle="p-0" heading={<IntlMessages id="sidebar.tables.assets"/>}
                     headerOutside>
                <AssetMarket/>
            </CardBox>
        </div>

    );
};

export default AssetsMarket;

