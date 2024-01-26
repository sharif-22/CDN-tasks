import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div
      id="error-page"
      className="w-full bg-slate-200 h-screen grid place-content-center"
    >
      <div className="bg-slate-50 p-10 space-y-3 rounded">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <span>
            <span className="text-4xl p-2 font-medium">{error.status}</span>

            {error.statusText || error.message}
            {console.log(error)}
          </span>
        </p>
      </div>

      <Link to="/">
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-600 p-2 rounded w-full my-4 text-2xl font-medium text-white"
        >
          Back to Home Page
        </button>
      </Link>
    </div>
  );
}
