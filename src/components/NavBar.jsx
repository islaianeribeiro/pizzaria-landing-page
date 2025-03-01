"use client";

import {
  faHamburger,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Button from "./Button";
import { usePathname } from "next/navigation";
import { useState } from "react";

function NavBar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);

  const items = [
    {
      url: "/#home",
      label: "Início",
    },
    {
      url: "/#menu",
      label: "Cardápio",
    },
    {
      url: "/#avaliation",
      label: "Avaliações",
    },
  ];

  return (
    <header className="w-full px-[8%] py-7 sticky top-0 bg-primary-1 z-3">
      <nav className="w-full flex items-center justify-between" id="navbar">
        <div className="flex items-center gap-1">
          <FontAwesomeIcon
            className="size-6 text-primary-6"
            icon={faHamburger}
          />

          <span className="size-6 text-primary-6">FOOD</span>
        </div>

        <ul
          className={`${
            openMenu
              ? "flex flex-col items-center absolute top-16 right-8 bg-white shadow-custom p-4 rounded-lg"
              : "hidden"
          } md:flex md:flex-row md:static md:bg-transparent md:shadow-none md:p-0`}
          id="nav_list"
        >
          {items.map((item, index) => (
            <li className="p-2" key={index}>
              <a
                className={`no-underline text-neutral-1 font-semibold ${
                  pathname === item.url
                    ? "text-black border-b-2 border-primary-3"
                    : ""
                }`}
                href={item.url}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button className="hidden md:flex items-center justify-center border-none bg-primary-5 rounded-2xl px-3 py-2 font-semibold shadow-custom cursor-pointer duration-300 ease-in hover:bg-primary-3">
          Peça aqui
        </button>

        <button
          className="block md:hidden text-neutral-1 cursor-pointer"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
      </nav>
    </header>
  );
}

export { NavBar };
