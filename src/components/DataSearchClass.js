import React from 'react';
import {DataSearch} from '@appbaseio/reactivesearch';



class DataSearchClass extends React.Component {
    render(){
       return (
          <nav className="nav">
            <div className = "title">Men's Clothing </div>
               <DataSearch 
                    componentId = "SearchSensor"
                    dataField="name"
                    autosuggest ={false}
                    placeholder="Search by name"
                    iconPosition = "left"
                    className ="search"
                    highlight = {true}
                />
           </nav>
          );
        }
}


export default DataSearchClass;