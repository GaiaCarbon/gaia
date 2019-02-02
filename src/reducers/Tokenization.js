import {
    TOKENIZATION_INITIAL_LOAD,
    TOKENIZATION_INITIAL_SUCCESS,
    TOKENIZATION_PROJECT_INFO_SUBMIT,
    TOKENIZATION_FUNDRAISING_SUBMIT,
    TOKENIZATION_DOCUMENTS_SUBMIT,
    TOKENIZATION_LEGALPARTIES_SUBMIT, TOKENIZATION_SAVE_SAVING, TOKENIZATION_SAVE_SUCCESS
} from "../constants/GaiaActions";


const selectData = {
    // Project Information
    projectType:[
        { id:1, name : "Current Fundraising", textKey:"component.tokenization.select.projectType.currentFundraising"},
        { id:2, name : "Existing Project", textKey:"component.tokenization.select.projectType.existingProject"}
    ],
    assetType:[
        { id:1, name : "Water", textKey:"component.tokenization.select.assetType.water"},
        { id:2, name : "Solar", textKey:"component.tokenization.select.assetType.solar"},
        { id:3, name : "Biomass", textKey:"component.tokenization.select.assetType.biomass"},
        { id:4, name : "Wind", textKey:"component.tokenization.select.assetType.wind"},
        { id:5, name : "Biogas", textKey:"component.tokenization.select.assetType.biogas"},
        { id:6, name : "Energy Efficiency", textKey:"component.tokenization.select.assetType.energyEfficiency"}
    ],
    geographicFocus:[
        { id:1, name : "Europe", textKey:"component.tokenization.select.geoFocus.europe"},
        { id:2, name : "Asia", textKey:"component.tokenization.select.geoFocus.asia"},
        { id:3, name : "North America", textKey:"component.tokenization.select.geoFocus.northAmerica"},
        { id:4, name : "South America", textKey:"component.tokenization.select.geoFocus.southAmerica"},
        { id:5, name : "Africa", textKey:"component.tokenization.select.geoFocus.africa"},
        { id:6, name : "Oceania", textKey:"component.tokenization.select.geoFocus.oceania"}
    ],
    countryFocus: [
        { id:"0", name : "None", textKey:"component.tokenization.select.countryFocus.NONE"},
        { id:"BR", name : "Brazil", textKey:"component.tokenization.select.countryFocus.BR"},
        { id:"CH", name : "Switzerland", textKey:"component.tokenization.select.countryFocus.CH"},
        { id:"US", name : "USA", textKey:"component.tokenization.select.countryFocus.US"}
    ],
    projectCategory: [
        { id:0, name : "None", textKey:"component.tokenization.select.projectCategory.NONE"},
        { id:1, name : "Carbon", textKey:"component.tokenization.select.projectCategory.carbon"},
        { id:2, name : "Energy Efficiency", textKey:"component.tokenization.select.projectCategory.energyEfficiency"},
        { id:3, name : "Water Quality", textKey:"component.tokenization.select.projectCategory.waterQuality"},
        { id:4, name : "Biodiversity And Habitat", textKey:"component.tokenization.select.projectCategory.biodiversity"},
        { id:5, name : "Water", textKey:"component.tokenization.select.projectCategory.water"},
        { id:6, name : "Social", textKey:"component.tokenization.select.projectCategory.social"},
        { id:7, name : "REDD", textKey:"component.tokenization.select.projectCategory.redd"},
        { id:8, name : "Forrest Conservation & Avoided", textKey:"component.tokenization.select.projectCategory.forrestConservation"}
    ],
    // Fundraising Details
    currency: [
        { id:1, name : "EUR", textKey:"component.tokenization.select.currency.EUR"},
        { id:2, name : "USD", textKey:"component.tokenization.select.currency.USD"},
        { id:3, name : "CHF", textKey:"component.tokenization.select.currency.CHF"}

    ],
    measurement: [
        { id:1, name : "VER (tCO2e)", textKey:"component.tokenization.select.measurement.VER"},
        { id:2, name : "VCU (tCO2e)", textKey:"component.tokenization.select.measurement-VCU"}

    ],
    // Legal Parties
    standard: [
        { id:1, name : "Gold Standard", textKey:"component.tokenization.select.standard.goldStandard"},
        { id:2, name : "CarbonFIX", textKey:"component.tokenization.select.standard.carbonfix"},
        { id:3, name : "Verified Carbon Standard", textKey:"component.tokenization.select.standard.verifiedcarbonstandard"}

    ],
    verifier: [
        { id:1, name : "TUV SUD", textKey:"component.tokenization.select.verifier.tuvsud"},
        { id:2, name : "DNV Climate Change Services AS", textKey:"component.tokenization.select.verifier.dnv"},
        { id:3, name : "Det Norske Veritas Certification AS", textKey:"component.tokenization.select.verifier.dnvc"},
        { id:4, name : "Bureau Veritas Certification Holding", textKey:"component.tokenization.select.verifier.bvch"},
        { id:5, name : "RINA S.p.A", textKey:"component.tokenization.select.verifier.rina"},
        { id:6, name : "SCS Global Services", textKey:"component.tokenization.select.verifier.scsgs"}


    ]
};


const INIT_STATE = {
    tokenRequestId: null,
    tokenRequestLoading: false,
    saving: null,
    saveComplete: false,
    selectData: selectData
};

export default (state = INIT_STATE, action) => {
    switch(action.type){
        case TOKENIZATION_INITIAL_LOAD:  {
            return {
                ...state,
                tokenRequestLoading: true
            }
        }
        case TOKENIZATION_INITIAL_SUCCESS: {
            let { tokenRequestId, fresh } = action.payload;
            return {
                ...state,
                tokenRequestId: tokenRequestId,
                fresh : fresh,
                tokenRequestLoading: false
            }
        }
        case TOKENIZATION_PROJECT_INFO_SUBMIT: {
             return {
                ...state,
                projectInfo : {
                    ...action.payload
                }
             }
        }
        case TOKENIZATION_FUNDRAISING_SUBMIT: {
            return {
                ...state,
                fundraisingDetails: {
                    ...action.payload
                }
            }
        }
        case TOKENIZATION_DOCUMENTS_SUBMIT: {
            return {
                ...state,
                additionalDocuments: {
                    ...action.payload
                }
            }
        }
        case TOKENIZATION_LEGALPARTIES_SUBMIT: {
            return {
                ...state,
                legalParties: {
                    ...action.payload
                }
            }
        }
        case TOKENIZATION_SAVE_SAVING: {

            return { ...state, saving:true };
        }
        case TOKENIZATION_SAVE_SUCCESS:{
             const output = { ...INIT_STATE };
             output.saveComplete = true;

            return output;
        }
        default:
            return state;
    }
}


