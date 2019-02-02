import {
    ASSETMARKET_TOKEN_ADDED
} from "../constants/GaiaActions";





export const assetMarketAddToken = (payload) => {
    return {
        type: ASSETMARKET_TOKEN_ADDED,
        payload: payload
    }
};

