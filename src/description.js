import React, { Component } from 'react';
import Info from "./info"

class description extends Component {
    state = {
        total: ''
    }
    render() { 
        return ( 
            <div className="desc-container">
                <div className="titles">
                    <div className="desc-title">DESCRIPTION</div>
                    <div className="amount-title">AMOUNT</div>
                </div>
                <Info />
            </div>
         );
    }
}
 
export default description;