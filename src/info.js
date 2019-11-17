import React, { Component } from 'react';

class info extends Component {
    
        
        state = { 
            description: '',
            amount: ''
         }
    
      handleChange = (e) => {
				this.setState({[e.target.name]: e.target.value})
			}

    render() { 
        return ( 
            <div className="amnt-desc">
						<input className="description" 
						name="description"
						value={this.state.description}
						onChange={this.handleChange}
						placeholder="Description"
						/>
						
						<input className="amount" 
						name="amount"
						value={this.state.amount}
						onChange={this.handleChange}
						placeholder="Amount"
						/>
						
            </div>
         );
    }
}
 
export default info;