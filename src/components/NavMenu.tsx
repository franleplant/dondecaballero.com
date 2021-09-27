import React from "react";
import { Link } from "gatsby";
import logo from "../../content/assets/moustache-logo.svg";

export default function NavMenu(): JSX.Element {
  return (
    <div className="p-4 sm:p-2 lg:px-2 lg:py-0 flex flex-col mx-auto sm:w-5/6 justify-between">
      <h1 className="md:mx-auto sm:w-3/4 w-full max-w-screen-xl mt-1 sm:mt-3 flex py-3">
        <Link
          to={`/`}
          className="grid mx-auto !no-underline justify-items-center"
        >
          <h1>DON DE CABALLERO</h1>
          <img
            src={logo}
            alt={"Don De Caballero"}
            style={{ width: "100px", height: "100px" }}
          />
        </Link>
      </h1>

      <div className="flex flex-col md:flex-row md:mx-auto sm:w-3/4 w-full max-w-screen-xl ml-2 sm:ml-0">
        <Link
          to="/about"
          className="flex-1 leading-10 md:p-2 text-md hover:text-opacity-80 flex-grow-0 mx-auto"
        >
          Acerca
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
