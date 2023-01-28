import React, { useState } from "react";
import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { removeData } from "../actions/formData";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { addData, sortData } from "../actions/formData";

const ViewTable = ({ formData, removeData, sortData }) => {
  const [currentSort, setCurrentSort] = useState("up");

  const sortTypes = {
    up: {
      class: "sort-up",
      fn: (a, b) => (a.data.firstName > b.data.firstName ? 1 : -1),
    },
    down: {
      class: "sort-down",
      fn: (a, b) => (b.data.firstName > a.data.firstName ? 1 : -1),
    },
  };

  const onSortChange = () => {
    let nextSort;
    if (currentSort === "down") nextSort = "up";
    else if (currentSort === "up") nextSort = "down";
    setCurrentSort(nextSort);
    sortData(sortTypes[currentSort].fn);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this?")) {
      removeData(id);
    } else {
      return false;
    }
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>SNo.</th>
            <th onClick={onSortChange}>Name</th>
            <th>Contact</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                {item.data.firstName} {item.data.lastName}
              </td>
              <td>{item.data.contact}</td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(item.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

ViewTable.propTypes = {
  formData: PropTypes.array.isRequired,
  removeData: PropTypes.func.isRequired,
  sortData: PropTypes.func.isRequired,
};

const mapStateToProp = (state) => ({
  formData: state.formData,
});

export default connect(mapStateToProp, { removeData, addData, sortData })(
  ViewTable
);
