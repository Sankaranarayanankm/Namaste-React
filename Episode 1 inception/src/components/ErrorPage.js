import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  console.error(err); // log the full object for debugging

  return (
    <div>
      <h1>Ooopss!!! Something went wrong</h1>
      <p>
        {err.status} {err.statusText}{" "}
      </p>
    </div>
  );
};

export default ErrorPage;
