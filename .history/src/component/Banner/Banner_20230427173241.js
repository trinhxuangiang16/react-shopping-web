import Background from "./public/images/banner1.jpg";

const Banner = () => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${Background})` }}>
      <p>NEW INSPIRATION 2020</p>
      <h2>20% OFF ON NEW</h2>
      <h2>SEASON</h2>
      <button>Browse collections</button>
    </div>
  );
};
export default Banner;
