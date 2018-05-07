import React from 'react';
import {ResultCard} from '@appbaseio/reactivesearch';



class ResultCardClass extends React.Component {
    render(){
       return(
         <ResultCard 
            className = "right-col"
            componentId = "SearchResult"
            dataField = "name"
            size ={12}
            onData = { data => ({
                image: data.imageURLs,
                title: data.name,
                description : (
                   <div>
                      <div className="price">${data.amount}</div>
                      <p className="info">{data.brand} </p>
                    </div>  
                    ),
                    url : data.url
                      })}
                pagination
                react = {{
                  and: ['SearchSensor', 'PriceSensor','search', 'BookSensor'],
                }}
                innerClass = {{
                  resultStats : 'result-stats',
                  list : 'list',
                  listItem : 'list-item',
                  image: 'image'
                  }}
           />
          );
        }
}


export default ResultCardClass;   

