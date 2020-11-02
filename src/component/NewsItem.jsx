import React, { Component } from "react";
import "../component/style.css";

import { withRouter } from "react-router-dom";

class NewsItem extends Component {
 handleClick(id){
   console.log(id);
 }
  render() {
    console.log("news");
    let news = this.props.location.state.news;
    console.log(news);
    let list = news.map((news, index) => {
      console.log(news.title);
      let published = news.publishedAt.slice(0, 10);
      let id=news.id;
      console.log(id);
      return (
        <tr key={index}>
          <td className="table_title" onClick={this.handleClick.bind(this,id)}>
            <h1 className="title">{news.title}</h1>
            <br />
            <p className="description">{news.description}</p>
          </td>
          <td>
            <p className="published">{published}</p>
          </td>
        </tr>
      );
    });
    console.log(news.title);
    return (
      <div>
        <table className=" table-striped table-responsive table_news">
          <thead>
            <tr className="table_heading" >
              <th>Headlines</th>
              <th className="th_released">Released date </th>
            </tr>
          </thead>
          <tbody>{list}</tbody>
        </table>
      </div>
    );
  }
}

export default withRouter(NewsItem);
