import Image from "next/image";
import SocialButton from "./SocialButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-amber-50">
      <Image
        className="w-full"
        width={100}
        height={100}
        src="/images/wave.svg"
        alt="Svg de Onda"
      />

      <div className="flex flex-col justify-center md:flex md:flex-row md:justify-between p-[0px_8%_24px_8%] items-center">
        <span className="text-neutral-1 font-medium text-center">
          <FontAwesomeIcon icon={faCopyright} /> 2025{" "}
          <a
            href="https://www.linkedin.com/in/islaianeribeiro"
            className="text-neutral-1 no-underline cursor-pointer hover:text-black"
          >
            Islaiane Ribeiro
          </a>
        </span>

        <div className="flex mt-2">
          <SocialButton />
        </div>
      </div>
    </footer>
  );
}
