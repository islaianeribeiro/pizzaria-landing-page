import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Button from "./Button";
import clientes from "@/data/clientes.json";
import Clientes from "./Clientes";

export default function Avaliations() {
  return (
    <section
      id="avaliation"
      className="bg-white min-h-[100vh] flex items-center justify-evenly gap-12 mt-18 p-[60px 0px]"
    >
      <Image
        width={300}
        height={300}
        src="/images/pizza0.jpg"
        id="testimonial_chef"
        alt="pizza"
      />

      <div className="w-[50%]">
        <h2 className="text-primary-6 text-3xl">Depoimentos</h2>
        <h3 className="text-neutral-1 text-2xl">
          O que os clientes falam sobre nós
        </h3>
        {clientes.map((depoiments) => (
          <Clientes
            key={depoiments.id}
            name={depoiments.name}
            avaliation={depoiments.avaliation}
            depoiment={depoiments.depoiment}
          />
        ))}

        <Button text="Ver mais avaliações" />
      </div>
    </section>
  );
}
