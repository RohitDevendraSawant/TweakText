import sun from "../assets/sun.svg"
import moon from "../assets/moon.svg";

function Navbar(props) {
  const { isDark, changeTheme } = props;
  return (
    <>
      <div className="flex justify-around p-2 shadow-lg">
        <div>
          <h1 className="text-xl">TweakText</h1>
        </div>
        <div className="flex justify-center align-middle">
          <div className="rounded-4xl h-10 w-10" onClick={changeTheme}>
            <img src={isDark ? sun : moon} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
