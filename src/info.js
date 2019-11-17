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
						<input className="input" 
						name="description"
						value={this.state.description}
						onChange={this.handleChange}
						placeholder="Description"
						/>
						
						<input className="input" 
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