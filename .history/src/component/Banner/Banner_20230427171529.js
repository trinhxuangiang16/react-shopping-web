import Banner from "./public/images/banner1.jpg";

const Banner = () => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${Banner})` }}></div>
  );
};
export default Banner;
