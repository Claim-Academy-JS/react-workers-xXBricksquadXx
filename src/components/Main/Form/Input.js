import { toKebabCase } from "lib";
import PropTypes from "prop-types";

const Input = ({ label }) => {
  return (
    <div className="flex flex-col gap-1 mb-2 max-w-md">
      <label htmlFor={toKebabCase(label)}>{label}</label>
      <input id={toKebabCase(label)} type="text" />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Input;
