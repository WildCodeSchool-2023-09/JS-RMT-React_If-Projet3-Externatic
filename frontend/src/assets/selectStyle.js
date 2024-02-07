const colorStyles = {
  control: (styles, { isSelected, isFocused }) => ({
    ...styles,
    backgroundColor: "white",
    borderColor: isSelected || isFocused ? "#ca2061" : "black",
    boxShadow: "none",
    ":hover": { borderColor: "#ca2061" },
  }),
  clearIndicator: (styles) => ({
    ...styles,
    cursor: "pointer",
    ":hover": { color: "red" },
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    cursor: "pointer",
  }),
  option: (styles, { isFocused }) => {
    return {
      ...styles,
      backgroundColor: isFocused ? "#ca2061" : "white",
      color: isFocused ? "white" : "black",
      cursor: isFocused ? "pointer" : "default",
    };
  },
  multiValue: (styles) => {
    return {
      ...styles,
      backgroundColor: "#ffd1e3",
    };
  },
  multiValueRemove: (styles) => {
    return {
      ...styles,
      cursor: "pointer",
      ":hover": { color: "red" },
    };
  },
};

export default colorStyles;
