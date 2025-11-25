import "./novidades.scss";
import banner from "../../assets/novidades-banner.jpg";

function Novidades() {
  return (
    <>
      <h1>NOVIDADES PARA VOCÊ</h1>
      <img
        className="novidades"
        src={banner}
        alt="Fundo com várias maquiagens"
      />
    </>
  );
}

export default Novidades;