import PropTypes from "prop-types";
import Input from "./Input";

function renderInputs(inputs) {
  return inputs.map(({ label }, index) => <Input key={index} label={label} />);
}

const Form = ({ handler }) => {
  const inputs = [{ label: "Name" }, { label: "Job" }];
  return (
    <form onSubmit={handler}>
      {renderInputs(inputs)}
      <button className="px-4 py-2 bg-red-500 text-red-300 rounded">
        Submit
      </button>
    </form>
  );
};

Form.propTypes = {
  handler: PropTypes.func.isRequired,
};

export default Form;
