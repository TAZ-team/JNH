import React from 'react'
import Description from "./description"
import BillTo from "./billTo"


class Invoice extends React.Component {
   
        state = {

        }
    

    render(){
        return (
            <div className='invoice-page'>
                <div className="top">
                    <div className="info">
                        <div className="company-name">JNH Construction</div>
                        <div className="address">Address, city, state, zip, phone</div>
                    </div>
                </div>
                <div className="mid">
                    <BillTo />
                </div>
                <div className="bottom">
                 <Description />
                </div>
            </div>
        )
    }
}

export default Invoice