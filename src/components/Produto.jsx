import {
  faBasketShopping,
  faHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Produto({ name, price, image }) {
  return (
    <div className="w-[80%] md:flex md:w-[25%] sm:w-[calc(50%-60px)] flex-col items-center rounded-3xl gap-5 p-5 bg-neutral-0 shadow-custom relative overflow-hidden text-center">
      <div className="absolute bg-primary-6 flex items-center justify-center text-2xl text-primary-1 w-15 h-15 right-[-10px] top-[-10px] rounded-[0px_40px_0px_40px]">
        <FontAwesomeIcon icon={faHeart} />
      </div>

      <div className="w-full flex justify-center">
        <Image
          src={image}
          width={230}
          height={230}
          className="justify-center"
          alt="Comida"
        />
      </div>

      <h3 className="dish-title">{name}</h3>

      <span className="text-[#434343] text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </span>

      <div className="flex justify-center text-center items-center gap-5">
        <h4>{price}</h4>
        <button className="bg-primary-5 rounded-2xl px-2 py-1 font-semibold shadow-custom cursor-pointer duration-300 ease-in hover:bg-primary-3">
          <FontAwesomeIcon icon={faBasketShopping} />
        </button>
      </div>
    </div>
  );
}
