import Product from "./Product";
import produtos from "../data/produtos.json";

export default function Menu() {
  return (
    <section
      id="menu"
      className="flex flex-col items-center justify-center min-h-[100vh] bg-amber-50 py-10"
    >
      <div className="text-center">
        <h2 className="text-primary-6 text-2xl">Cardápio</h2>
        <h3 className="text-neutral-1 text-2xl md:text-3xl">
          Nossos pratos especiais
        </h3>
      </div>

      <div className="flex-wrap justify-center md:w-full flex gap-6 mt-8">
        {produtos.map((produto) => (
          <Product
            key={produto.id}
            name={produto.name}
            price={produto.price}
            image={produto.image}
            description={produto.description}
          />
        ))}
      </div>
    </section>
  );
}
