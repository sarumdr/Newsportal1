import React, {Component} from "react";
import {connect} from "react-redux";
import {getCovidNews} from "../action/getNews";

// const URL=`https://nepalcorona.info/api/v1/news?q=en`
// const URL=`https://nepalcorona.info/api/v1/data/nepal`
const URL=`https://newsapi.org/v2/everything?q=corona&apiKey=5ea91de7bbb348ac9472ea527e656d0b`
 
class CoronaFetching extends Component{
state={
    articles:[]
}
    componentDidMount() {
fetch(URL)
.then (response=>response.json())
.then((covid)=>{
    console.log('covid',covid);
    this.props.getCovidNews(covid.articles);
    
})
}

    render() {
        return(
            <div>
            
            </div> 
        )
    }
}

export default connect(null, {getCovidNews})(CoronaFetching);
