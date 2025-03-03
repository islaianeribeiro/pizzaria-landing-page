import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import SocialButton from "@/components/SocialButton";
import Link from "next/link";

export default function Welcome() {
  return (
    <section className="flex min-h-[calc(100vh-96px)] relative px-[8%] py-7 mb-12">
      <div className="hidden md:block bg-primary-2 w-[45%] h-full absolute rounded-t-[40%] rounded-l-[30%] rounded-b-[0%] rounded-r-[20%] top-0 right-0 z-1"></div>
      <div className="w-full items-center text-center md:w-[35%] flex flex-col justify-center gap-7">
        <h1 className="text-center text-5xl md:text-justify md:text-6xl font-semibold text-neutral-1">
          O sabor que vai até
          <span className="text-primary-6"> você</span>
        </h1>

        <p className="text-2xl text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet.
        </p>

        <div className="flex gap-6">
          <Link
            href="#menu"
            className="no-underline border-none bg-primary-5 rounded-2xl px-3 py-2 font-semibold shadow-custom cursor-pointer duration-300 ease-in hover:bg-primary-3 text-neutral-1"
          >
            Ver cardápio
          </Link>

          <Link
            href="tel:+55555555555"
            className="flex gap-2 items-center bg-white px-3.5 py-2 font-medium shadow-custom rounded-xl"
          >
            <button className="shadow-none bg-primary-5 px-1 rounded-xl">
              <FontAwesomeIcon icon={faPhone} />
            </button>
            (51) 92342-3243
          </Link>
        </div>

        <SocialButton />
      </div>

      <div
        className="hidden md:flex items-start justify-end w-[70%] z-2"
        id="banner"
      >
        <Image width={500} height={500} src="/images/hero.png" alt="foto" />
      </div>
    </section>
  );
}
