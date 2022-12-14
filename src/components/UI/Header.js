import Image from "../../assets/Image";

const Header = (props) => {
  return (
    <header className="p-3 bg-transparent border-bottom d-flex flex-md-row flex-column justify-content-center align-items-center">
      <Image name={props.iconName} alt={props.iconName} />
      <span className="text-dark fs-1 fw-bold fst-italic m-0">
        {props.title}
      </span>
    </header>
  );
};
export default Header;
