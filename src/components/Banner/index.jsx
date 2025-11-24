import "./imgBanner.scss";
import banner from "../../assets/banner.png";

function Banner() {
  return (
    <div>
      <img src={banner} alt="Banner da página" />
    </div>
  );
}

export default Banner;