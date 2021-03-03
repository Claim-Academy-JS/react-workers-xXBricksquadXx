import api from "api";
import { useEffect, useReducer } from "react";
import Row from "./Row";

function reducer(state, action) {
  switch (action.type) {
    case "init":
      return action.payload;
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
    console.log(event.target);

    // TODO: `dispatch({type: "delete", payload: ???})
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
            id={index}
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
