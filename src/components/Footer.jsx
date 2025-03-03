import Image from "next/image";
import SocialButton from "./SocialButton";

export default function Footer() {
  return (
    <footer className="bg-[#ffe8b4]">
      <Image
        className="w-full"
        width={100}
        height={100}
        src="/images/wave.svg"
        alt="Onda"
      />

      <div className="flex flex-col justify-center md:flex md:flex-row md:justify-between p-[0px_8%_24px_8%] items-center">
        <span className="text-neutral-1 font-medium text-center">
          &copy 2025 Islaiane Ribeiro
        </span>

        <div className="flex mt-2">
          <SocialButton />
        </div>
      </div>
    </footer>
  );
}
