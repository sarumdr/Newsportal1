export const GET_NEWS = 'GET_NEWS'
export const COVID_NEWS='COVID_NEWS'

export function getNews(item) {
    console.log("action",item);
    return {
        type: "GET_NEWS",
        item
    }
}

export function getCovidNews(item){
    console.log('covidaction',item)
    return{
        type:"COVID_NEWS",
        item
    }
}