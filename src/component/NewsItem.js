import React from 'react'

 const NewsItem = (props) =>{
  
   
        let {title, description , imageUrl,newsUrl, author,date} = props;
        return (
            <div>
                <div className="card">
                    <img src={!imageUrl?"https://www.thepinknews.com/wp-content/uploads/2023/05/AIDS_Vaccine.jpeg.jpg":imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            {/* <h6>{time}</h6> */}
                            <p className="card-text"><small className="text-body-secondary">By {!author?"Author":author} on {new Date(date).toGMTString()}</small></p>
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{!description?"description not avalable you can click read more button for more reading and read a description":description}</p>
                            <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-primary">Read more</a>
                        </div>
                </div>
            </div>
            
        )
    }


export default NewsItem
