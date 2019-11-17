import React, { Component } from "react";

class billTo extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      companyName: "",
      streetAddress: "",
      city: "",
      phone: "",
      email: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="billTo">
        <header>Bill To</header>

        <div>
        <input
            name="name"
            value={this.state.name}
            placeholder="name"
            onChange={this.handleChange}
            className="input"
          />

          <input
            name="companyName"
            value={this.state.companyName}
            placeholder="Company Name"
            onChange={this.handleChange}
            className="input"
          />

          <input
            name="streetAddress"
            value={this.state.streetAddress}
            placeholder="Street"
            onChange={this.handleChange}
            className="input"
          />

          <input
            name="city"
            value={this.state.city}
            placeholder="City, ST, Zip"
            onChange={this.handleChange}
            className="input"
          />

          <input
            name="phone"
            value={this.state.phone}
            placeholder="Phone"
            onChange={this.handleChange}
            className="input"
          />

          <input
            name="email"
            value={this.state.email}
            placeholder="Email"
            onChange={this.handleChange}
            className="input"
          />
        </div>
      </div>
    );
  }
}

export default billTo;
