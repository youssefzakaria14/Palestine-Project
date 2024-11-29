
import ReactFlagsSelect from "react-flags-select";
import axios from "axios";
import Joi from "joi";
import React, { Component, Fragment ,useState } from "react";


const CitySelection = () => {
  const [selected, setSelected] = useState("");

  return (
    <ReactFlagsSelect
      selected={selected}
      onSelect={(code) => setSelected(code)}
    />
  );
};

export default class joinUs extends Component {
  user = {
    first_name: "",
    last_name: "",
    Address1: "",
    Address2: "",
    city: "",
    Postcode: "",
    country: "",
    Email: "",
  };

  state = {errors:[]}

  schema = Joi.object({
    first_name: Joi.string().alphanum().min(3).max(30).required(),

    last_name: Joi.string().alphanum().min(3).max(30).required(),

    Email: Joi.string().email({ tlds: { allow: ["com", "net"] } }),

    Address1: Joi.string().alphanum().min(3).max(30).required(),

    Address2: Joi.string().alphanum().min(3).max(30).required(),

    city: Joi.string().alphanum().min(3).max(30).required(),

    Postcode: Joi.number().integer().min(3).max(5).required(),

    // country: Joi.string().alphanum().min(3).max(30).required(),
  });

  getFormData = (e) => {
    // console.log(e.target.value);
    this.user[e.target.name] = e.target.value;
    console.log(this.user);
  };

  sendData = async () => {
    let result = this.schema.validate(this.user, { abortEarly: false });
    if (result.error) {
      this.setState({ errors: result.error.details });
    } else {
      console.log("form data is valid to send ", this.user);
      try {
        let response = await axios.post("YOUR_API_ENDPOINT", this.user);
        console.log(response);
      } catch (error) {
        console.error("Error sending data", error);
      }
    }
  };

  renderErrors = (fieldName) => {
    const error = this.state.errors.find((e) => e.path[0] === fieldName);
    return error ? (
      <div className="alert alert-danger">{error.message}</div>
    ) : null;
  };

  render() {
    return (
      <Fragment>
        <section className="join_us">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="mb-5">Join PSC - Standard membership</h1>
              <div className="inner bg-light p-4">
              <div className="row">
              <div className="col-6">
                <h5>First name</h5>
                <input
                  name="first_name"
                  onKeyUp={this.getFormData}
                  className="form-control my-2"
                  type="text"
                  style={{ width: '100%' }}
                />
                {this.renderErrors("first_name")}
              </div>
              <div className="col-6">
                <h5>last name</h5>
                <input
                  name="last_name"
                  onKeyUp={this.getFormData}
                  className="form-control my-2"
                  type="text"
                  style={{ width: '100%' }}
                />
                {this.renderErrors("last_name")}
              </div>
              </div>
              <h5>Address1</h5>
              <input
                name="Address1"
                onKeyUp={this.getFormData}
                className="form-control my-2"
                type="text"
              />
              {this.renderErrors("Address1")}

              <h5>Address2</h5>
              <input
                name="Address2"
                onKeyUp={this.getFormData}
                className="form-control my-2"
                type="text"
              />
              {this.renderErrors("Address2")}
              <div className="row">
                <div className="col-6">
                  <h5>City</h5>
                  <input
                    name="city"
                    onKeyUp={this.getFormData}
                    className="form-control my-2"
                    type="text"
                  />
                  {this.renderErrors("city")}
                </div>
                <div className="col-6">
                  <h5>Postcode</h5>
                  <input
                    name="Postcode"
                    onKeyUp={this.getFormData}
                    className="form-control my-2"
                    type="text"
                  />
                  {this.renderErrors("Postcode")}
                </div>
              </div>

              <h5>Country</h5>
              <CitySelection
                name="country"
                onKeyUp={this.city_selection}
                className="form-control my-2"
                
              />
              {/* {this.renderErrors("country")} */}

              <h5>Email</h5>
              <input
                name="Email"
                onKeyUp={this.getFormData}
                className="form-control my-2"
                type="text"
              />
              {this.renderErrors("Email")}

              <button onClick={this.sendData} className="btn btn-success mt-3">Continue</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      </Fragment>
    );
  }
}
