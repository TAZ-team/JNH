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
          />

          <input
            name="companyName"
            value={this.state.companyName}
            placeholder="Company Name"
            onChange={this.handleChange}
          />

          <input
            name="streetAddress"
            value={this.state.streetAddress}
            placeholder="Street"
            onChange={this.handleChange}
          />

          <input
            name="city"
            value={this.state.city}
            placeholder="City, ST, Zip"
            onChange={this.handleChange}
          />

          <input
            name="phone"
            value={this.state.phone}
            placeholder="Phone"
            onChange={this.handleChange}
          />

          <input
            name="email"
            value={this.state.email}
            placeholder="Email"
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default billTo;
