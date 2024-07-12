import { useNavigate } from "react-router-dom";
import { Logo, ReturnArrowIcon } from "../../assets";
import styles from "./header.module.scss";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className={styles.header}>
      <div>
        <Logo onClick={() => navigate("/")} className={styles.logo} />
      </div>
      <div
        onClick={() => navigate(-1)}
        className={styles.return}
      >
        <ReturnArrowIcon />
        <p>Return to List Page</p>
      </div>
    </header>
  );
};

export default Header;
