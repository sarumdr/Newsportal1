import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import '../component/style.css';
import no_image from '../image/no_image.jpg'

class CoronaNews extends Component {
  
  render() {
    console.log(this.props.covidnews)
    
    let covidnews=this.props.covidnews.map((news,index)=>{
      return(
        
        <div key={index} className='col-lg-4 col-md-3 col-sm-6 coronanews container'>
         
      { news.urlToImage!=null ? <img src={news.urlToImage} width='400px' height='300px'/>:
      <img src={no_image} width='400px' height='300px'/>
         }
            <h3 className='coronatitle'>{news.title}</h3>
          <p className='coronadesc'>{news.description}</p>
      <span className='coronapublished'>{news.publishedAt},{news.author}</span>
      </div>
      )
    })
        return (
          <div className="container">
          <h1 className='corona'>Corona News</h1>
    <div className="row coronarow">
      {covidnews}
    </div>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(withRouter(CoronaNews));

