import React, { Component } from "react";
import { connect } from "react-redux";
import "../component/style.css";

import { withRouter } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import CoronaNews from "./CoronaNews";

class Bodypage extends Component {
  state = {
    articles: [],
    showItems: 5,
  };
  handleClick() {
    console.log("clicked");
    console.log(this.props.history);
    this.props.history.push({
      pathname: "/newsitem",
      state: {
        news: this.props.news,
      },
    });
  }
  render() {
    console.log('corona',this.props.covidnews);
    let datas = [];
    datas = this.props.news;

    console.log("body", datas);
  // let show = datas.map((data) => {
    //   console.log("image", data.urlToImage);
    //   return data.urlToImage;
    // });

    let featured = datas.slice(0, this.state.showItems).map((news, index) => (
      <div key={index}>
        <div>
          <h1 className="news_title">{news.title}</h1>
          <p className="news_description">{news.description}</p>
          <p className="news_published">
            {news.publishedAt},{news.author}
          </p>

          <hr />
        </div>
      </div>
    ));

    return (
      <div className="row">
        <div className="col-lg-6 col-md-8 col-sm-6 imagecarousel">
        
        <Carousel autoPlay infiniteLoop='true'>
      {
        datas.map( (image,index) => {
            
          return   <div key={index}>
            <img src={ image.urlToImage }  alt='img'/>
          </div>
          
        })
      }
    </Carousel>
  
        </div>
        <div className="col-lg-5 col-md-6 col-sm-6 featured_news">
          <h2>Featured News</h2>
          {featured}
          <div>
          <a href="" onClick={this.handleClick.bind(this)}>Load More</a>
        </div>
        </div>
        <CoronaNews/>       
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(withRouter(Bodypage));
