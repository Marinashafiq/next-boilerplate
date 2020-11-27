import Link from "next/link";
import NoLayout from "../components/layouts/noLayout";
function Custom404() {
  return (
    <div className="d-flex justify-content-center align-items-center text-center full-height">
      <div>
        <img
          className="image mb-4"
          src="https://media0.giphy.com/media/jUwpNzg9IcyrK/giphy.gif"
        />
        <h1>OOPS..</h1>
        <h3>404 | Page Not Found</h3>
        <Link href="/">Go back</Link>
      </div>
    </div>
  );
}

Custom404.Layout = NoLayout;

export default Custom404;
