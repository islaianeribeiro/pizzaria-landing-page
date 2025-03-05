"use client";
import Image from "next/image";
import Button from "./Button";
import clientes from "@/data/clientes.json";
import Clientes from "./Clientes";
import { useState } from "react";

export default function Avaliations() {
  const [items, setItems] = useState(2);
  return (
    <section
      id="avaliation"
      className=" min-h-[100vh] flex items-center justify-evenly gap-12 py-8 lg:flex-row"
    >
      <Image
        width={300}
        height={300}
        src="/images/pizza0.jpg"
        alt="pizza"
        className="hidden lg:flex"
      />

      <div className="sm:w-[70%] lg:w-1/2">
        <h2 className="text-primary-6 text-3xl text-center">Depoimentos</h2>
        <h3 className="text-neutral-0 text-2xl text-center">
          O que os clientes falam sobre nós
        </h3>
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

        <div className="w-full flex justify-center items-center">
          <button
            onClick={() => {
              setItems(items + 2);
            }}
            className="border-none flex items-center justify-center bg-primary-5 rounded-2xl px-3 py-2 font-semibold shadow-custom cursor-pointer duration-300 ease-in hover:bg-primary-3"
          >
            Ver mais avaliações
          </button>
        </div>

        {/* <Button text="Ver mais avaliações" /> */}
      </div>
    </section>
  );
}
