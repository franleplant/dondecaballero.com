import React from "react";
import { Link } from "gatsby";
import logo from "../../content/assets/logo.svg";

export default function NavMenu(): JSX.Element {
  return (
    <div className="p-4 sm:p-2 lg:px-2 lg:py-0 flex flex-col mx-auto sm:w-5/6 justify-between">
      <h1 className="md:mx-auto sm:w-3/4 w-full max-w-screen-xl mt-1 sm:mt-3 flex">
        <Link to={`/`} className="flex items-end mx-auto !no-underline">
          <Logo />
          <h1>Don de Caballero</h1>
        </Link>
      </h1>

      <div className="flex flex-col md:flex-row md:mx-auto sm:w-3/4 w-full max-w-screen-xl ml-2 sm:ml-0">
        <Link
          to="/about"
          className="flex-1 leading-10 md:p-2 text-md hover:text-opacity-80 flex-grow-0 mx-auto"
        >
          About
        </Link>
        {/* <a
          href={`mailto:nosleeptechblog@gmail.com?subject=Contact from website`}
          className="flex-1 text-start leading-10 md:p-2 text-md hover:text-opacity-80 flex-grow-0"
        >
          Contact
        </a> */}
      </div>
      <div className="border-b border-t border-secondary py-3 mt-4 w-full sm:w-3/4 max-w-screen-xl md:mx-auto text-center">
        <p>Estilo para caballeros</p>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 36"
      style={{ marginRight: "10px" }}
    >
      <path
        fill="#31373D"
        d="M30.198 27.385L32 3.816c0-.135-.008-.263-.021-.373.003-.033.021-.075.021-.11C32 1.529 25.731.066 18 .066c-7.732 0-14 1.462-14 3.267 0 .035.017.068.022.102-.014.11-.022.23-.022.365l1.802 23.585C2.298 28.295 0 29.576 0 31c0 2.762 8.611 5 18 5s18-2.238 18-5c0-1.424-2.298-2.705-5.802-3.615z"
      />
      <path
        fill="#66757F"
        d="M17.536 6.595c-4.89 0-8.602-.896-10.852-1.646-.524-.175-.808-.741-.633-1.265.175-.524.739-.808 1.265-.633 2.889.963 10.762 2.891 21.421-.016.529-.142 1.082.168 1.227.702.146.533-.169 1.083-.702 1.228-4.406 1.202-8.347 1.63-11.726 1.63z"
      />
      <path
        fill="#744EAA"
        d="M30.198 27.385l.446-5.829c-7.705 2.157-17.585 2.207-25.316-.377l.393 5.142c.069.304.113.65.113 1.076 0 1.75 1.289 2.828 2.771 3.396 4.458 1.708 13.958 1.646 18.807.149 1.467-.453 2.776-1.733 2.776-3.191 0-.119.015-.241.024-.361l-.014-.005z"
      />
    </svg>
  );
}
