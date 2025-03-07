import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faUser } from "@fortawesome/free-solid-svg-icons";

// Componente para renderizar as estrelas
const StarRating = ({ rating }) => {
  return (
    <span className="text-amber-500">
      {Array.from({ length: rating }, (_, index) => (
        <FontAwesomeIcon key={index} icon={faStar} />
      ))}
    </span>
  );
};

export default function Clients({ name, avaliation, depoiment }) {
  return (
    <div className="flex flex-row sm:flex-col gap-5 m-8 mt-7">
      <div className="flex items-center gap-5 bg-amber-50 p-3 rounded-xl shadow-custom-2">
        <FontAwesomeIcon
          className="bg-neutral-0 text-gray-400 border border-neutral-1 rounded-full text-2xl p-4"
          icon={faUser}
        />

        <div className="feedback-content">
          <p className="flex justify-between text-neutral-1">
            {name}
            <StarRating rating={avaliation} />{" "}
          </p>
          <p className="text-neutral-1">"{depoiment}"</p>
        </div>
      </div>
    </div>
  );
}
