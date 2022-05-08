import wetherIcon from "./icon.png";
const Header = (props) => {
  return (
    <header className="bg-transparent">
      <span className="d-flex justify-content-center align-items-center text-dark gap-2  pb-3 mb-4 border-bottom">
        <img src={wetherIcon} alt="icon" />
        <span className="fs-1 fw-bold fst-italic m-0">Weather Manager</span>
      </span>
    </header>
  );
};
export default Header;
