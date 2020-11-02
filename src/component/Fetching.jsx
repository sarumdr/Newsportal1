import React, {Component} from "react";
import {connect} from "react-redux";
import {getNews} from "../action/getNews";

 const URL=`https://newsapi.org/v2/everything?q=World&apiKey=5ea91de7bbb348ac9472ea527e656d0b`
// const URL=`https://newsapi.org/v2/sources?language=en&apiKey=${API_KEY}`
 class Fetching extends Component{
state={
    articles:[]
}
    componentDidMount() {
fetch(URL)
.then (response=>response.json())
.then((article)=>{
    console.log('article',article);
    this.props.getNews(article.articles);
    
})
}

    render() {
  //      console.log(this.state.articles.author);
        return(
            <div>
            </div> 
        )
    }
}

export default connect(null, {getNews})(Fetching);
