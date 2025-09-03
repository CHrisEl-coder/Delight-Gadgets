import Link from "next/link";

const MobileLinks = ({ onClose }) => {
  return (
    <>
      <ul className="bg-teal-700 text-white text-sm font-medium rounded flex flex-col gap-6 items-start p-6 h-full w-auto">
        <li className="w-full p-3 border-b border-white cursor-pointer hover:shadow-xl  transition duration-300 ease-in-out">
          {" "}
          <Link href={"/"} onClick={onClose}>
            {" "}
            Home{" "}
          </Link>
        </li>
        <li className="w-full p-3 border-b border-white cursor-pointer hover:shadow-xl  transition duration-300 ease-in-out">
          {" "}
          <Link href={"/products"}> Products</Link>
        </li>
        <li className="w-full p-3 border-b border-white cursor-pointer hover:shadow-xl  transition duration-300 ease-in-out">
          {" "}
          <Link href={"/services"}> Services </Link>
        </li>
        <li className="w-full p-3 border-b border-white cursor-pointer hover:shadow-xl  transition duration-300 ease-in-out">
          {" "}
          <Link href={"/about"}> About </Link>
        </li>
        <li className="w-full p-3 border-b border-white cursor-pointer hover:shadow-xl  transition duration-300 ease-in-out">
          {" "}
          <Link href={"/sign-in"}>Login </Link>
        </li>
        <li className="w-full p-3 border-b border-white cursor-pointer hover:shadow-xl  transition duration-300 ease-in-out">
          {" "}
          <Link href={"/sign-up"}> Register </Link>
        </li>
      </ul>
    </>
  );
};

export default MobileLinks;
