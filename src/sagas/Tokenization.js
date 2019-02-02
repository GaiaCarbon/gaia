import {all, call, fork, put, select, takeEvery, takeLatest} from "redux-saga/effects";
import axios from "axios";
import { delay } from 'redux-saga'

import { buildToken } from "../util/internalTokenBuilder";

import {
    TOKENIZATION_INITIAL_LOAD,
    TOKENIZATION_INITIAL_SUCCESS,
    TOKENIZATION_SAVE,
    ASSETMARKET_TOKEN_ADDED
} from "../constants/GaiaActions";
import {createUserAccount, showMessage, signInUser, signOutUser} from "./Auth";

// Further actions

import {
    startFlowSuccess, tokenizationSaveSaving, tokenizationSaveSuccess,
    pendingNewToken
} from "../actions/Tokenization";

import { assetMarketAddToken } from "../actions/AssetMarket";


/***
 * This asks the server to start a new tokenization request, the server will generate a tacking id
 * which the uploaded documents can be tagged against.
 * If a request was already in progress the server will indicate as such and return the original id.
 * The UI should then give the option to abandon the previous request or re-load the data from the last request.
 * @param payload
 * @returns {IterableIterator<SelectEffect | *>}
 */
export function* startTokenizationRequest({payload}) {
    const isLocal = yield select(state => state.settings.runningLocally);
    let output = {
        tokenRequestId: "not-requested",
        fresh: true
    };

    if(!isLocal){

    } else {
        yield delay(1000);
        output.tokenRequestId = "CRA-REQUEST";
    }

    yield put(startFlowSuccess(output));
}

export function* startTokenization(){
    yield takeLatest(TOKENIZATION_INITIAL_LOAD,startTokenizationRequest);
}


export function* startSaveRequest() {

    yield put(tokenizationSaveSaving({}));
    const isLocal = yield select(state => state.settings.runningLocally);

    const tokenData = yield select(state => state.tokenization);

    if(isLocal) {
        yield put(pendingNewToken(tokenData));

        const { projectImage } = tokenData.projectInfo;

        if(projectImage && projectImage.length > 0){
            tokenData.projectInfo.projectImage = projectImage[0].preview;
        }


        const output = buildToken(0,800,tokenData);

        yield delay(5000);
        yield put(assetMarketAddToken(output));
    } else {

        const form = new FormData();


        // call server
    }

    yield put(tokenizationSaveSuccess({}));
}

export function* saveTokenization(){
    yield takeEvery(TOKENIZATION_SAVE, startSaveRequest)

}

export default function* rootSaga() {
    yield all([fork(startTokenization), fork(saveTokenization)]);}
