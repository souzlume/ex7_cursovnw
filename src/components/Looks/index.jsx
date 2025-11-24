import "./looks.scss";
import labios from "../../assets/labios.png";
import olhos from "../../assets/olhos.jpg";
import rosto from "../../assets/rosto.png";
import tendencia from "../../assets/tendencia.png";

function Looks() {
  return (
    <>
      <h1>LOOKS E DICAS DE MAQUIAGEM</h1>
      <section className="looks">
        <div className="cards">
          <div className="cards-btn">
            <img
              className="cards-img"
              src={labios}
              alt="Mulher passando gloss"
            />
            <span className="subtitles">LÁBIOS</span>
          </div>
        </div>
        <div className="cards">
          <div className="cards-btn">
            <img
              className="cards-img"
              src={olhos}
              alt="Olhos com glitter dourado"
            />
            <span className="subtitles">OLHOS</span>
          </div>
        </div>
        <div className="cards">
          <div className="cards-btn">
            <img
              className="cards-img"
              src={rosto}
              alt="Mulher passando blush"
            />
            <span className="subtitles">ROSTO</span>
          </div>
        </div>
        <div className="cards">
          <div className="cards-btn">
            <img
              className="cards-img"
              src={tendencia}
              alt="Mulher com uma caneta na boca e uma paleta de cores na mão"
            />
            <span className="subtitles">TENDÊNCIA</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Looks;
