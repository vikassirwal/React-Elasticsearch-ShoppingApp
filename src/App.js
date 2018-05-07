import React from 'react';
import {ReactiveBase} from '@appbaseio/reactivesearch';
import DataSearchClass from './components/DataSearchClass';
import RangeSliderClass from './components/RangeSliderClass';
import ResultCardClass from  './components/ResultCardClass';
import './App.css';

class App extends React.Component {
    render() {
      return(
          <div className="container">
            <ReactiveBase
              app = "shoesShopping"
              credentials = "8BfvE2ehI:e8e5dc96-49f9-4301-9719-19550573abc5"
              type = "shoesShopping"
              >
                <DataSearchClass />
                <div className="left-col">  
                  <RangeSliderClass />
                </div>
                <ResultCardClass />
            </ReactiveBase>
          </div>
        );
    }

}

export default App;
