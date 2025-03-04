import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function SocialButton() {
  return (
    <div className="flex gap-4.5">
      <Link
        className="flex items-center justify-center w-11 h-10 bg-neutral-0 size-5 rounded-xl no-underline text-primary-5 shadow-custom-2 transition-shadow hover:shadow"
        href="/"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </Link>

      <Link
        className="flex items-center justify-center w-11 h-10 bg-neutral-0 size-5 rounded-xl no-underline text-primary-5 shadow-custom-2 transition-shadow hover:shadow "
        href="/"
      >
        <FontAwesomeIcon icon={faInstagram} />
      </Link>

      <Link
        className="flex items-center justify-center w-11 h-10 bg-neutral-0 size-5 rounded-xl no-underline text-primary-5 shadow-custom-2 transition-shadow hover:shadow"
        href="/"
      >
        <FontAwesomeIcon icon={faFacebook} />
      </Link>
    </div>
  );
}
