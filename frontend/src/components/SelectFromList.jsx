import PropTypes from "prop-types";
import Select from "react-select";
import colorStyles from "../assets/selectStyle";

function SelectFromList({ label, dataSet, handleSelect, name, find }) {
  const standardizeEvent = (option) => {
    handleSelect({ target: { name, value: option.value } });
  };

  const currentValue =
    find && dataSet.includes(find) ? { value: find, label: find } : null;

  return (
    <label className="label">
      {label}

      <Select
        onChange={standardizeEvent}
        required
        options={dataSet.map((el) => ({
          value: el,
          label: el,
        }))}
        value={currentValue}
        styles={colorStyles}
      />
    </label>
  );
}

SelectFromList.propTypes = {
  label: PropTypes.string.isRequired,
  dataSet: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleSelect: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  find: PropTypes.string.isRequired,
};

export default SelectFromList;
