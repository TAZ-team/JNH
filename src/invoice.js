import React from 'react'
import Description from "./description"
import BillTo from "./billTo"


class Invoice extends React.Component {
   
        state = {
            invNum: '',
            date: ''
        }
    

    render(){
        return (
            <div className='invoice-page'>
                <div className="top">
                    <div className="info">
                        <div className="company-name">JNH Construction</div>
                        <div className="address">Address, city, state, zip, phone</div>
                    </div>
                    <div className="inv-date">
                        <div className="inv-num"></div>
                        <div className="date"></div>
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