import PropTypes from "prop-types";

function SelectFromList({ label, text, dataSet, handleSelect, name }) {
  return (
    <label className="label">
      {label}
      <select onChange={handleSelect} name={name} required>
        <option value="">{text}</option>
        {dataSet.map((el) => (
          <option value={el}>{el}</option>
        ))}
      </select>
    </label>
  );
}

SelectFromList.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  dataSet: PropTypes.string.isRequired,
  handleSelect: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default SelectFromList;
