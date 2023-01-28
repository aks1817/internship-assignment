import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { addData } from "../actions/formData";
import { connect } from "react-redux";

const EntryForm = ({ addData, formData }) => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    contact: "",
  });

  const { firstName, lastName, contact } = data;

  const onChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const found = formData.find(
      (element) =>
        element.data.firstName === firstName ||
        element.data.lastName === lastName ||
        element.data.contact === contact
    );
    if (found !== undefined) {
      alert("Data Already Exists!");
      return;
    }
    addData(data);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "50px",
      }}
    >
      <Form onSubmit={(e) => onSubmit(e)}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Form.Group className="mb-3" style={{ margin: "5px" }}>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              onChange={(e) => onChange(e)}
              name="firstName"
              value={firstName}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" style={{ margin: "5px" }}>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last Name"
              onChange={(e) => onChange(e)}
              name="lastName"
              value={lastName}
              required
            />
          </Form.Group>
        </div>
        <Form.Group className="mb-3">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Contact Number"
            onChange={(e) => onChange(e)}
            name="contact"
            value={contact}
            required
          />
        </Form.Group>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
};

EntryForm.propTypes = {
  addData: PropTypes.func.isRequired,
  formData: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  formData: state.formData,
});

export default connect(mapStateToProps, { addData })(EntryForm);
