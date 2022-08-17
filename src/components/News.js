import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroller';

export default class News extends Component {
  static defaultProps={
    country:'in',
    category:'general',
    apiKey:"1339dbe14eca413bb7b3eab3378a4b45"
  }
  // static propTypes={
  //   country:this.propTypes.string,
  //   category:this.propTypes.string
  // }
constructor(){
  super();
  this.state={
    articles:[] ,
    page:1,
    loader:false,
    totalResults:0

  }
 
}
async componentDidMount(){
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=5`;
  this.setState({loader:true});
  let data=await fetch(url);
  let parseData=await data.json()
  console.log(parseData);
  this.setState({articles:parseData.articles,
    totalResults:parseData.totalResults,
    loader:false})
}

fetchMoreData=async()=>{
  
  const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=5`;
  // this.setState({page:this.state.page + 1})
  this.setState({loader:true});

  let data=await fetch(url);
  let parseData=await data.json();
  console.log(parseData);
  this.setState({articles:this.state.articles.concat(parseData.articles),
    totalResults:parseData.totalResults,
    loader:false})
}
// handlePrevClick=async()=>{
//   this.setState({loader:true})
//   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f616eab33d574c2bb12a4953841588e8&page=${this.state.page}
//   &pageSize=5`;
//   let data=await fetch(url);
//   let parseData=await data.json()
//   console.log(parseData);
//   this.setState({
//     articles:parseData.articles,
//     page:this.state.page-1,
//     loader:false
//   })

// }
// handleNextClick=async()=>{
//   if(this.state.page +1>Math.ceil(this.state.totalResults/5)){

//   }
//   else{
//     this.setState({loader:true})
//     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f616eab33d574c2bb12a4953841588e8&page=${this.state.page}
//     &pageSize=5`;
//     let data=await fetch(url);
//     let parseData=await data.json()
//     console.log(parseData);
//     this.setState({
//       articles:parseData.articles,
//       page:this.state.page+1,
//       loader:false

//   })

//   }
  
// }
  render() {
    return (
      <div className="container">
        <h2>Top Headlines</h2>
        {/* {this.state.loader&&<Spinner/>} */}
        <InfiniteScroll
          datalength={this.state.articles.length}
          pageStart={0}
          loadMore={this.fetchMoreData}
          hasMore={this.state.articles.length !==this.state.totalResults}
          loader={<Spinner/>}
          >
        
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4">
                  <NewsItem title={element.title} description={element.description} urlToImage={element.urlToImage} url={element.url} author={element.author?element.author:" unknown"} date={element.publishedAt} />
          </div>
          })}
          </div>
          </InfiniteScroll>
          {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
          <button disabled={this.state.page +1>Math.ceil(this.state.totalResults/5)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
          </div>
          </div> */}
      </div>
    );
  }
}
