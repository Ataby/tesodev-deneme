import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="landingHeaderContainer">
      <div>
        <div className="headerButtonContainer ">
          <Button onClick={() => navigate("/add")} text={"Add new record"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
