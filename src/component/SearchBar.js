import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import searchData from "../actions/searchData";

const SearchBar = ({ searchData }) => {
  const [formData, setFormData] = useState({ query: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    searchData(query);
  };

  const { query } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="input-group" style={{ marginTop: "40px" }}>
      <input
        type="text"
        className="form-control"
        placeholder="Search First Name"
        onChange={(e) => onChange(e)}
        name="query"
        value={query}
        style={{ borderRadius: "7px" }}
      />
      <div className="input-group-append">
        <button
          className="btn btn-primary"
          type="button"
          onClick={(e) => onSubmit(e)}
          style={{ marginLeft: "10px" }}
        >
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  searchData: PropTypes.func.isRequired,
};

export default connect(null, { searchData })(SearchBar);
