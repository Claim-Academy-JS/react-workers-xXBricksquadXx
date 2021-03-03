import PropTypes from "prop-types";

const Row = ({ id, name, job, handler }) => {
  return (
    <tr data-id={id} className="border-b">
      <td>{name}</td>
      <td>{job}</td>
      <td>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={handler}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

Row.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  job: PropTypes.string,
  handler: PropTypes.func.isRequired,
};

Row.defaultProps = {
  job: "N/A",
};

export default Row;
