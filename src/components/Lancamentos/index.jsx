import { useState } from "react";
import "./lancamentos.scss";
import vermelho from "../../assets/batom-vermelho.png";
import rosa from "../../assets/batom-rosa.png";
import nude from "../../assets/batom-nude.png";
import marrom from "../../assets/batom-marrom.png";

function Lancamentos() {
  const [cor, setCor] = useState(vermelho);
  return (
    <>
      <h1>APROVEITE OS LANÇAMENTOS</h1>
      <section className="lancamentos">
        <div className="columns">
          <img className="batons" src={vermelho} alt="Batom cor vermelho" />
          <img className="batons" src={nude} alt="Batom cor nude" />
          <img className="batons" src={rosa} alt="Batom cor rosa" />
          <img className="batons" src={marrom} alt="Batom cor marrom" />
        </div>

        <img className="color" src={cor} alt="Batom" />

        <div className="principal">
          <p className="stars">⭐⭐⭐⭐⭐</p>
          <h3>Matte Premium</h3>
          <p>Cores disponíveis</p>
          <section className="batons-colors">
            <button
              className="btn-colors"
              id="vermelho"
              onClick={() => setCor(vermelho)}
            ></button>
            <button
              className="btn-colors"
              id="nude"
              onClick={() => setCor(nude)}
            ></button>
            <button
              className="btn-colors"
              id="rosa"
              onClick={() => setCor(rosa)}
            ></button>
            <button
              className="btn-colors"
              id="marrom"
              onClick={() => setCor(marrom)}
            ></button>
          </section>

          <h3 className="desc">Descrição</h3>
          <p className="text-desc">
            O Batom Matte possui uma fórmula inovadora desenvolvida para
            entregar o máximo de cor na primeira aplicação com um deslize suave
            e macio. Tem acabamento matte aveludado e manteiga de manga que
            ajuda a hidratar e a proteger os lábios contra ressecamento. Ajuda
            na hidratação dos lábios, textura fina e macia que não pesa nos
            lábios.
          </p>
        </div>
      </section>
    </>
  );
}

export default Lancamentos;