import React from 'react';
import {RangeSlider} from '@appbaseio/reactivesearch';



class RangeSliderClass extends React.Component {
    render(){
       return(
            <RangeSlider 
              componentId="PriceSensor"
              dataField = "amount"
              title ="Price Range"
              range = {{
                start : 10,
                end : 500
              }}
              rangeLabels ={{
              start :'$10',
              end: '$500'
              }}
              defaultSelected={{
                 start:10,
                 end:50
              }}
              stepValue={10}
              interval ={20}
             />
          );
        }
}


export default RangeSliderClass;  


