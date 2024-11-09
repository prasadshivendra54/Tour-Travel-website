import React from "react";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { Navlinks } from "./Navbar";

const ResponsivMenu = ({ showMenu }) => {
  return (
    <div
      className={`${showMenu ? "left-0" : "-left-[100%]"} 
    fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-dark dark:text-white px-8 pb-6 pt-16 text-black duration-300 md:hidden rounded-r-xl shadow-md`}
    >
      <div>
        {/* User Top Section */}
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle className="text-5xl" />
          <div>
            <h1 className="font-bold">Hello User </h1>
            <h1 className="text-sm text-slate-500">Premium User !</h1>
          </div>
        </div>

        {/* Navigation Link Section */}

        <nav className="mt-10">
          <ul>
            {Navlinks.map(({ id, name, link }) => {
              return (
                <li key={id} className="py-4">
                  <Link
                    href={link}
                    className={
                      "text-xl font-medium text-black dark:text-white duration-300"
                    }
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="footer">
        <h1>
          Developed By 🙋‍♂️{" "}
          <a href="https://www.linkedin.com/in/shivendra-kacher-083635227/">
            Shivendra
          </a>
          {" 👇"}
        </h1>
        <h1 className="text-sm text-slate-500">tshivendra07@gmail.com</h1>
      </div>
    </div>
  );
};

export default ResponsivMenu;
