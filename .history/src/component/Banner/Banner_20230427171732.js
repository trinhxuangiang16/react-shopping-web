import banner from "./public/images/banner1.jpg";

const Banner = () => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${banner})` }}></div>
  );
};
export default Banner;
