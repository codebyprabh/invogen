import logo from "../assets/logo.png";

export default function Nav() {
  return (
    <nav className="w-full py-2 flex justify-center items-center">
        <img src={logo} alt="invo-gen" className="w-82 h-auto mr-10" />
    </nav>
  );
}
