import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Button from "./Button";

export default function Avaliations() {
  return (
    <section
      id="avaliation"
      className="bg-white min-h-[calc(100vh-91px)] flex items-center justify-evenly gap-12 mt-5"
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

        <div className="flex flex-col gap-5 mb-10 mt-7">
          <div className="flex items-center gap-5 bg-[#cccccc] p-3 rounded-xl shadow-custom-2">
            <Image
              className="rounded-[100%] object-cover"
              width={100}
              height={100}
              src="/images/avatar.png"
              alt="avatar1"
            />

            <div className="feedback-content">
              <p className="flex justify-between text-neutral-1">
                Fulana de Tal
                <span className="text-amber-500">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </span>
              </p>
              <p className="text-neutral-1">
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellat voluptatibus cumque dolor ea est quae alias
                necessitatibus"
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 mb-10 mt-7">
          <div className="flex items-center gap-5 bg-[#cccccc] p-3 rounded-xl shadow-custom-2">
            <Image
              className="rounded-[100%] object-cover"
              width={100}
              height={100}
              src="/images/avatar.png"
              alt="avatar"
            />

            <div className="feedback-content">
              <p className="flex justify-between text-neutral-1">
                Fulana de Tal
                <span className="text-amber-500">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </span>
              </p>
              <p className="text-neutral-1">
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellat voluptatibus cumque dolor ea est quae alias
                necessitatibus"
              </p>
            </div>
          </div>
        </div>

        <Button text="Ver mais avaliações" />
      </div>
    </section>
  );
}
