"use client";

import Pagina from "../components/Pagina";

export default function Array() {
  const carros = ["celta", "corsa", "ferrari", "fusca", "combi"];
  const pessoas = ['sergio','julio','bento','samuel','dinho']

  //<></> isso é igual a fragment
  return (
    <>
      <Pagina titulo="Página de Array">

            {pessoas.map((item) => (
              <p>{item}</p>
            ))}
    




        {carros.map((item) => (
          <p>{item}</p>
        ))}

        <ul>
          {carros.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        

      </Pagina>
    </>
  );
}
