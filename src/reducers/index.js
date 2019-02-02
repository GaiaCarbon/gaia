import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import Auth from './Auth';
import Settings from './Settings';
import Tokenization from "./Tokenization";
import Pending from "./PendingTokens";
import AssetMarket from "./AssetMarket";



const reducers = combineReducers({
    routing: routerReducer,
    auth: Auth,
    settings: Settings,
    tokenization: Tokenization,
    pendingTokens: Pending,
    assetMarket: AssetMarket
});

export default reducers;
