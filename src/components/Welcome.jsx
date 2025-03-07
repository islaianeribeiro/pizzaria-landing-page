import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import SocialButton from "@/components/SocialButton";
import Link from "next/link";
import Button from "./Button";

export default function Welcome() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100vh-96px)] relative px-[8%] pb-7 mb-12"
    >
      <div className="w-full items-center text-center flex flex-col justify-center gap-7">
        <h1 className="text-center text-5xl md:text-justify md:text-6xl font-semibold text-neutral-0">
          O sabor que vai até
          <span className="text-primary-6"> você!</span>
        </h1>

        <p className="text-xl text-justify">
          Cada fatia é feita com ingredientes selecionados, massas artesanais e
          aquele toque especial que só a gente tem. Peça agora e aproveite o
          melhor sabor no conforto da sua casa!
        </p>

        <div className="flex gap-6">
          <Link
            href="#menu"
            className="no-underline border-none bg-primary-5 rounded-2xl px-3 py-2 font-semibold shadow-custom-2 cursor-pointer duration-300 ease-in hover:bg-primary-6 text-neutral-0"
          >
            Ver cardápio
          </Link>

          <Link
            href="tel:+55555555555"
            className="flex gap-2 items-center bg-neutral-0 text-neutral-1 px-3.5 py-2 font-medium shadow-custom-2 rounded-xl"
          >
            <Button
              className="shadow-none bg-primary-5 text-neutral-0 px-1 rounded-xl"
              icon={<FontAwesomeIcon icon={faPhone} />}
            />
            (55) 1234-5678
          </Link>
        </div>

        <SocialButton />
      </div>

      <div
        className="hidden lg:flex items-start justify-end w-[70%] z-2 mt-8"
        id="banner"
      >
        <Image
          width={500}
          height={500}
          src="/images/hero.jpg"
          alt="Imagem de Pizza"
        />
      </div>
    </section>
  );
}
