import React, { useState, useEffect} from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
  const [articles, setArticles] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [totalResults, setTotalResults] = useState(0)
 const  update = async () => {
    props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.counTry}&category=${props.cataGory}&apiKey=62348c33a6de4337809141a1b2faf80f&page=1&pageSize=${props.pAge}`;
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json()
    props.setProgress(60)
    setArticles(parsedData.articles)
    setLoading(false)
    setTotalResults(parsedData.totalResults)
    props.setProgress(100)

  }
  useEffect(() => {
    document.title = `${props.cataGory} - NewsMonkey`;
    update(); 
    // eslint-disable-next-line
}, [])

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.counTry}&category=${props.cataGory}&category=${props.cataGory}&category=${props.cataGory}&apiKey=62348c33a6de4337809141a1b2faf80f&page=${page+1}&pageSize=${props.pAge}`;
    setPage(page + 1)
    let data = await fetch(url);
    let parsedData = await data.json()
    setTotalResults(parsedData.totalResults)
    setArticles(articles.concat(parsedData.articles))};

  return (
    <>
      <h1 className='mx-4 my-4 text-center text-white'>0</h1>
      <h1 className='mx-4 my-4 text-center'>Top  {totalResults} headlines From <b>{props.cataGory}-News</b></h1>
      {loading && <div className="text-center my-3"><img srcSet="https://i.gifer.com/ZZ5H.gif" alt="" /></div>}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !==totalResults}
        loader={<div className="text-center my-3"><img srcSet="https://i.gifer.com/ZZ5H.gif" alt="" /></div>}>
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return <div className="col-md-4 my-2" key={element.url}>
                <NewsItem author={element.author} date={element.publishedAt} title={element.title} description={element.description} newsUrl={element.url} imageUrl={element.urlToImage} />
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll>

    </>
  )
}

News.defaultProps = {
  counTry: "in",
  pAge: 12,
  cataGory: "technology"

}
News.propTypes = {
  counTry: PropTypes.string,
  pAge: PropTypes.number,
  cataGory: PropTypes.string,
}
export default News

