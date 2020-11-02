import {GET_NEWS,COVID_NEWS} from "../action/getNews";

import {combineReducers} from "redux";

 function news(state=[],action){
    console.log('actionreducer')
    console.log('reducer',action)
    switch (action.type){
        case GET_NEWS:
            return action.item;
            break;
        default:
            return state;
    }
}
 function covidnews(state=[],action){
    console.log('actionreducer')
    console.log('reducer',action)
    switch (action.type){
        case COVID_NEWS:
            return action.item;
            
        default:
            return state;
    }
}
const rootReducer=combineReducers({news,covidnews});
export default rootReducer;

