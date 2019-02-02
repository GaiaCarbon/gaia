import {
    TOKENIZATION_FUNDRAISING_SUBMIT,
    TOKENIZATION_INITIAL_LOAD,
    TOKENIZATION_INITIAL_SUCCESS,

    TOKENIZATION_PROJECT_INFO_SUBMIT,
    TOKENIZATION_DOCUMENTS_SUBMIT,
    TOKENIZATION_LEGALPARTIES_SUBMIT,
    TOKENIZATION_SAVE,
    TOKENIZATION_SAVE_SUCCESS,
    TOKENIZATION_SAVE_FAIL,
    TOKENIZATION_SAVE_SAVING, PENDING_NEW_TOKEN
} from "../constants/GaiaActions";

export const startFlow = (payload) => {
  return {
      type: TOKENIZATION_INITIAL_LOAD,
      payload: payload
  }
};

export const startFlowSuccess = (payload) => {
    return {
        type: TOKENIZATION_INITIAL_SUCCESS,
        payload: payload
    }
};

export const projectInfoSave = (payload) => {
  return {
      type: TOKENIZATION_PROJECT_INFO_SUBMIT,
      payload: payload
  }

};

export const fundraisingSave = (payload) => {
  return {
      type: TOKENIZATION_FUNDRAISING_SUBMIT,
      payload: payload
  }
};

export const documentsSave = (payload) => {
    return {
        type: TOKENIZATION_DOCUMENTS_SUBMIT,
        payload: payload
    }
};

export const legalPartiesSave = (payload) => {
  return {
      type: TOKENIZATION_LEGALPARTIES_SUBMIT,
      payload: payload
  }
};

export const tokenizationSave = (payload) => {
  return {
      type: TOKENIZATION_SAVE,
      payload: payload
  }
};

export const tokenizationSaveSaving = (payload) => {
    return {
        type: TOKENIZATION_SAVE_SAVING,
        payload: payload
    }
};


export const tokenizationSaveSuccess = (payload) => {
    return {
        type: TOKENIZATION_SAVE_SUCCESS,
        payload: payload
    }
};

export const tokenizationSaveFail = (payload) => {
    return {
        type: TOKENIZATION_SAVE_FAIL,
        payload: payload
    }
};

export const pendingNewToken = (payload) => {
    return {
        type: PENDING_NEW_TOKEN,
        payload: payload
    }
};