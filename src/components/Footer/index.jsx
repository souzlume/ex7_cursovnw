import "./footer.scss";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import pix from "../../assets/pix.svg";
import visa from "../../assets/visa.svg";
import mastercard from "../../assets/mastercard.svg";
import boleto from "../../assets/boleto.svg";

function Footer() {
  return (
    <footer>
      <section className="footer-a">
        <h4>ATENDIMENTO</h4>

        <ul>
          <li>
            <a href="">Fale Conosco</a>
          </li>
          <li>
            <a href="">Perguntas Frequentes</a>
          </li>
          <li>
            <a href="">Meus Pedidos</a>
          </li>
          <li>
            <a href="">Nossas Lojas</a>
          </li>
        </ul>
      </section>

      <section className="footer-b">
        <h4>FORMAS DE PAGAMENTO</h4>
        <div className="footer-b-icons">
          <img
            className="img-b-icons"
            src={mastercard}
            alt="Ícone do Mastercard"
          />
          <img className="img-b-icons" src={visa} alt="Ícone do Visa" />
          <img className="img-b-icons" src={pix} alt="Ícone do Pix" />
          <img className="img-b-icons" src={boleto} alt="Ícone do Boleto" />
        </div>
      </section>

      <section className="footer-c">
        <h4>SIGA-NOS NAS REDES SOCIAIS</h4>
        <div className="footer-c-icons">
          <img
            className="img-c-icons"
            src={instagram}
            alt="Ícone do Instagram"
          />
          <img className="img-c-icons" src={facebook} alt="Ícone do Facebook" />
          <img className="img-c-icons" src={youtube} alt="Ícone do YouTube" />
          <img className="img-c-icons" src={twitter} alt="Ícone do Twitter" />
        </div>
      </section>
    </footer>
  );
}

export default Footer;