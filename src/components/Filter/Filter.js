import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import contactsActions from "../redux/actions";

const Filter = ({ value, onChange }) => (
  <label>
    <p>Find contacts by name</p>
    <input type="text" value={value} onChange={onChange} />
  </label>
);

const mapStateToProps = (state) => ({
  value: state.phonebook.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (event) =>
    dispatch(contactsActions.changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
