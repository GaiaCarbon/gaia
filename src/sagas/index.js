import {all} from 'redux-saga/effects';
import mailSagas from './Mail';
import toDoSagas from './Todo';
import contactSagas from './Contact';
import chatSagas from './Chat';
import authSagas from './Auth';
import tokenizationSagas from "./Tokenization";

export default function* rootSaga(getState) {
    yield all([
        mailSagas(),
        toDoSagas(),
        contactSagas(),
        chatSagas(),
        authSagas(),
        tokenizationSagas()
    ]);
}
