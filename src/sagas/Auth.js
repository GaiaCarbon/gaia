import {all, call, fork, put, select, takeEvery} from "redux-saga/effects";
import {
    auth,
    facebookAuthProvider,
    githubAuthProvider,
    googleAuthProvider,
    twitterAuthProvider
} from "helper/firebase";
import {
    SIGNIN_FACEBOOK_USER,
    SIGNIN_GITHUB_USER,
    SIGNIN_GOOGLE_USER,
    SIGNIN_TWITTER_USER,
    SIGNIN_USER,
    SIGNOUT_USER,
    SIGNUP_USER,
    SHOW_MESSAGE
} from "constants/ActionTypes";
import {showAuthMessage, userSignInSuccess, userSignOutSuccess, userSignUpSuccess} from "actions/Auth";
import { NotificationManager} from 'react-notifications';
import axios from "axios";
import {
    userFacebookSignInSuccess,
    userGithubSignInSuccess,
    userGoogleSignInSuccess,
    userTwitterSignInSuccess
} from "../actions/Auth";

const createUserWithEmailPasswordRequest = async (email, password) => {
    await auth.createUserWithEmailAndPassword(email, password)
        .then(authUser => authUser)
        .catch(error => error);
};

const signInUserWithEmailPasswordRequest = async (email, password) => {

    return axios.post("/api/auth",{username:email, password:password})
        .then( response => response.data);

    // TODO: Add error handling
};

const signOutRequest = async () =>
    await  auth.signOut()
        .then(authUser => authUser)
        .catch(error => error);



function* createUserWithEmailPassword({payload}) {

    const {email, password} = payload;
    try {
        const signUpUser = yield call(createUserWithEmailPasswordRequest, email, password);
        if (signUpUser.message) {
            yield put(showAuthMessage(signUpUser.message));
        } else {
            localStorage.setItem('user_id', signUpUser.user.uid);
            yield put(userSignUpSuccess(signUpUser.user));
        }
    } catch (error) {
        yield put(showAuthMessage(error));
    }
}



function* signInUserWithEmailPassword({payload}) {

    const isLocal = yield select(state => state.settings.runningLocally);
    const {email, password} = payload;
    try {

        let signInUser = {
            message: "Login failed",
            user : {
                uid: email,
                name : "CRA User"
            }
        };

        if(!isLocal){
            let authResponse = yield call(signInUserWithEmailPasswordRequest, email, password);

            if(!authResponse.success){
                signInUser.message = authResponse.message;
            } else {
                const { id, email, name} = authResponse.object;
                signInUser.message  = null;
                signInUser.user.uid = email;
                signInUser.user.name = name;
            }

        } else {
            // just login user for CRA
            signInUser.message = null;
        }

        if (signInUser.message) {
            yield put(showAuthMessage(signInUser.message));
        } else {
            localStorage.setItem('user_id', signInUser.user.uid);
            yield put(userSignInSuccess(signInUser.user.uid));
        }
    } catch (error) {
        yield put(showAuthMessage(error));
    }
}

function* signOut() {
    try {
        const signOutUser = yield call(signOutRequest);
        if (signOutUser === undefined) {
            localStorage.removeItem('user_id');
            localStorage.removeItem('ASSET_DATA');
            yield put(userSignOutSuccess(signOutUser));
        } else {
            yield put(showAuthMessage(signOutUser.message));
        }
    } catch (error) {
        yield put(showAuthMessage(error));
    }
}

function* showMessageOnUi() {
    const { alertMessage, showMessage } = yield select(state => state.auth);
    if(showMessage) {
        NotificationManager.error(alertMessage,"",5000);
    }
}

export function* createUserAccount() {
    yield takeEvery(SIGNUP_USER, createUserWithEmailPassword);
}

export function* signInUser() {
    yield takeEvery(SIGNIN_USER, signInUserWithEmailPassword);
}

export function* signOutUser() {
    yield takeEvery(SIGNOUT_USER, signOut);
}

export function* showMessage(){
    yield takeEvery(SHOW_MESSAGE,showMessageOnUi)
}

export default function* rootSaga() {
    yield all([fork(signInUser),
        fork(createUserAccount),
        fork(signOutUser),
        fork(showMessage)]);
}