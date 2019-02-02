import moment from "moment";


export function buildToken(sold, price, token){
    const id = "123456";


    let output = {
        id: id,
        approved: false, // show on market
        adminNotes:[],

        stock:{
            sold:sold,
            metric:"ton",
            price: price
        },

        projectInfo:{
            aType:"",
            aboutProject:"",
            assetName:"",
            countryFocus1: "",
            geoFocus: "",
            projectCategory:"",
            projectHighLights: "",
            projectImage: null,
            projectType: ""
        },
        fundraisingDetails:{
            currency: "",
            measurement:"",
            projectEnd: new moment(),
            projectStart: new moment(),
            units:""
        },
        additionalDocuments:{
            additionalDocuments:[]
        },
        legalParties:{
            standard:"",
            verifier:""
        }

    };

    output = Object.assign(output, token);

    return output;
}