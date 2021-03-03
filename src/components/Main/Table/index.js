import api from "api";
import { useEffect, useReducer } from "react";
import Row from "./Row";

function reducer(state, action) {
  switch (action.type) {
    case "init":
      return action.payload;
    case "delete":
      return state.filter((_, index) => index !== action.payload - 1);
    default:
      console.error("Unmatched case!");
  }
}

const Table = () => {
  const [workers, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    (async () => {
      const workersData = await api.index();
      dispatch({ type: "init", payload: workersData });
    })();
  }, []);

  function handleClick(event) {
    dispatch({
      type: "delete",
      payload: event.target.closest("tr").dataset.id,
    });
  }

  return (
    <table className="container mx-auto table-auto text-left">
      <thead className="border-b">
        <tr>
          <th>Name</th>
          <th>Job</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {workers.map(({ name, job }, index) => (
          <Row
            id={index + 1}
            name={name}
            job={job}
            key={index}
            handler={handleClick}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
