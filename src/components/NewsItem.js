import React, { Component } from 'react';

export default class NewsItem extends Component {

  render() {
    let {title,description,urlToImage,url,author,date}=this.props;
    
    return (
      <div>
        <div className="card" >
  <img src={urlToImage} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By{author} on {date}</small></p>
    <a href={url} target="_blank" rel="noreferrer" className="btn btn-dark text-center container">Show More</a>
  </div>
</div>
        
      </div>
    );
  }
}

// https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}apiKey=f616eab33d574c2bb12a4953841588e8&page=&{this.state.page}
// f616eab33d574c2bb12a4953841588e8

// 1339dbe14eca413bb7b3eab3378a4b45