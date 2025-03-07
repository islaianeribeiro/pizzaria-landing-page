"use client";
import Image from "next/image";
import Button from "./Button";
import clientes from "@/data/clientes.json";
import Clientes from "./Clientes";
import { useState } from "react";

export default function Avaliations() {
  const [items, setItems] = useState(2);
  const handleClick = () => {
    setItems(items + 2);
  };

  return (
    <section
      id="avaliation"
      className=" min-h-[100vh] flex items-center justify-evenly gap-12 py-8 lg:flex-row"
    >
      <Image
        width={340}
        height={340}
        src="/images/pizza.png"
        alt="Imagem de Pizza"
        className="hidden lg:flex"
      />

      <div className="sm:w-[70%] lg:w-1/2">
        <h2 className="text-primary-6 text-3xl text-center">Depoimentos</h2>
        <h3 className="text-neutral-0 text-xl sm:text-2xl text-center">
          O que os clientes falam sobre nós
        </h3>

        <div className="h-110 sm:h-75 overflow-y-auto overflow-x-hidden scrollbar-none mb-2">
          {clientes
            .filter((currentValue, index) => index < items)
            .map((depoiments, index) => (
              <Clientes
                key={depoiments.id}
                name={depoiments.name}
                avaliation={depoiments.avaliation}
                depoiment={depoiments.depoiment}
              />
            ))}
        </div>

        <div className="w-full flex justify-center items-center">
          <Button
            onClick={handleClick}
            className="border-none flex items-center justify-center bg-primary-5 rounded-2xl px-3 py-2 font-semibold shadow-custom cursor-pointer duration-300 ease-in hover:bg-primary-3"
            text="Ver mais avaliações"
          />
        </div>
      </div>
    </section>
  );
}
