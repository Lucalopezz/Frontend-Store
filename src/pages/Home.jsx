import React, { useEffect, useState } from "react";
import api from "../utils/api";
import { ImgUrl } from "../../url";

export const Home = () => {
  const [products, setProducts] = useState({});
  useEffect(() => {
    api.get("/products/allProducts").then((resp) => {
      setProducts(resp.data.products);
    });
  }, []);
  return (
    <section>
      {!products && <p>Carregando...</p>}
      <div className="my-6">
        <h1 className="text-5xl font-bold text-slate-800 mt-16 border-l-4 border-neutral-500 py-2">
          Produtos adicionados recentemente
        </h1>
        <p>Veja os detalhes de cada produto</p>
      </div>
      <div className="flex flex-row ">
        {products.length > 0 &&
          products.map((product) => (
            <div
              key={product.id}
              className="max-w-md mx-auto bg-white shadow-md overflow-hidden rounded-md min-w-96"
            >
              <div
                className="w-full h-96 object-cover bg-cover bg-center mb-3"
                style={{
                  backgroundImage: `url(${ImgUrl}img/products/${product.images})`,
                }}
              ></div>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {product.name}
                </h2>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <div className="mt-4">
                  <span className="text-gray-700 font-semibold">Preço: </span>
                  <span className="text-gray-800 font-bold">
                    R${product.price}
                  </span>
                </div>
                <button className="mt-4 bg-slate-900 text-white px-4 py-2 rounded-md hover:bg-slate-800">
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};
