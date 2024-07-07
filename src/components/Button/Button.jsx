import styles from "./button.module.scss";


const Button = ({ text, onClick, type }) => {
      return (
        <button onClick={onClick} type={type || "button"} className={styles.button}>
          {text}
        </button>
      );
    };

export default Button;