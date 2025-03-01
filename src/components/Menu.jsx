import {
  faBasketShopping,
  faHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Food from "../images/dish.png";

export default function Menu() {
  return (
    <section
      id="menu"
      className="flex flex-col items-center justify-center min-h-[100vh]"
    >
      <div className="text-center mt-12">
        <h2 className="text-primary-6 text-2xl">Cardápio</h2>
        <h3 className="text-3xl">Nossos pratos especiais</h3>
      </div>

      <div className="flex-wrap justify-center md:w-full flex gap-6 mt-8">
        <div className="w-[calc(50%-60px)] sm:w-full md:flex flex-col items-center rounded-3xl gap-5 md:w-[25%] p-5 bg-neutral-0 shadow-custom relative overflow-hidden text-center">
          <div className="absolute bg-primary-6 flex items-center justify-center text-2xl text-primary-1 w-15 h-15 right-[-10px] top-[-10px] rounded-l-[37.5px] rounded-r-[42.5px]">
            <FontAwesomeIcon icon={faHeart} />
          </div>

          <Image
            src={Food}
            width={230}
            height={230}
            className="justify-center"
            alt="Comida"
          />

          <h3 className="dish-title">Lorem Ipsum</h3>

          <span className="text-[#434343] text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>

          <div>
            <FontAwesomeIcon icon={faStar} className="text-primary-6" />
            <span>(500+)</span>
          </div>

          <div className="flex text-center items-center gap-5">
            <h4>R$20,00</h4>
            <button className="bg-primary-5 rounded-2xl px-3 py-4 font-semibold shadow-custom cursor-pointer duration-300 ease-in hover:bg-primary-3">
              <FontAwesomeIcon icon={faBasketShopping} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
