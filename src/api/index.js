import ky from "ky";

const api = {
  index(
    endpoint = "https://my-json-server.typicode.com/claim-academy-js/workers/workers"
  ) {
    return ky.get(endpoint).json();
  },
};

export default api;
