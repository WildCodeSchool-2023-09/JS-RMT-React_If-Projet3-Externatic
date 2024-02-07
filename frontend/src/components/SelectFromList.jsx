import PropTypes from "prop-types";
import Select from "react-select";
import colorStyles from "../assets/selectStyle";

function SelectFromList({ label, dataSet, handleSelect, name }) {
  const standardizeEvent = (option) => {
    handleSelect({ target: { name, value: option.value } });
  };
  return (
    <label className="label">
      {label}

      <Select
        onChange={standardizeEvent}
        required
        options={dataSet.map((el) => ({
          value: el.id,
          label: el,
        }))}
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
};

export default SelectFromList;
