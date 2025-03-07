"use client";

import {
  faBars,
  faXmark,
  faPizzaSlice,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useCallback } from "react";
import Button from "./Button";

function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuToggle = useCallback(() => {
    setOpenMenu((prev) => !prev);
  }, []);

  const menuItems = [
    {
      url: "#home",
      label: "Início",
    },
    {
      url: "#menu",
      label: "Cardápio",
    },
    {
      url: "#avaliation",
      label: "Avaliações",
    },
  ];

  return (
    <header className="w-full px-[8%] py-4 sticky top-0 bg-amber-50 z-3 shadow-custom-1">
      <nav className="w-full flex items-center justify-between" id="navbar">
        <div className="flex items-center gap-1">
          <FontAwesomeIcon
            className="size-6 text-primary-6"
            icon={faPizzaSlice}
          />
          <span className="text-[16px] font-semibold text-primary-6">
            BELLA PIZZA
          </span>
        </div>

        <ul
          className={`absolute top-16 right-8 bg-white shadow-custom-2 p-4 rounded-lg flex flex-col items-center 
          md:flex md:flex-row md:static md:bg-transparent md:shadow-none md:p-0 
          ${openMenu ? "flex" : "hidden"}`}
        >
          {menuItems.map((item, index) => (
            <li className="p-2" key={index}>
              <a
                className="no-underline text-neutral-1 font-semibold hover:border-b-2 hover:border-primary-5"
                href={item.url}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <Button
          className="hidden md:flex items-center justify-center border-none bg-primary-5 rounded-2xl px-3 py-2 font-semibold shadow-custom-2 cursor-pointer duration-300 ease-in hover:bg-primary-3"
          href="#menu"
          text="Peça aqui"
        />

        <Button
          className="block md:hidden text-neutral-1 cursor-pointer"
          onClick={handleMenuToggle}
          ariaLabel={openMenu ? "Fechar menu" : "Abrir menu"}
          icon={<FontAwesomeIcon icon={openMenu ? faXmark : faBars} />}
        />
      </nav>
    </header>
  );
}

export { NavBar };
