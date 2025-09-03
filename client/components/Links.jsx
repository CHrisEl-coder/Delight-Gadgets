import Link from "next/link";

const Links = () => {
  return (
    <>
      <ul className="hidden md:flex gap-6 items-center h-full text-sm font-poppins font-medium">
        <li>
          <Link
            href="/"
            className="hover:text-teal-800 hover:scale-95 transition duration-300 ease-in-out"
          >
            {" "}
            Home{" "}
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="hover:text-teal-800 hover:scale-95 transition duration-300 ease-in-out"
          >
            {" "}
            Products{" "}
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="hover:text-teal-800 hover:scale-95 transition duration-300 ease-in-out"
          >
            {" "}
            Services{" "}
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="hover:text-teal-800 hover:scale-95 transition duration-300 ease-in-out"
          >
            {" "}
            About{" "}
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Links;
