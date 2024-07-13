import styles from "./button.module.scss";

const Button = ({ text, onClick, type, disabled = false }) => {
  const buttonStyle = disabled
    ? { background: "gray" }
    : { background: "#204080" };
  return (
    <button
      style={buttonStyle}
      disabled={disabled}
      onClick={onClick}
      type={type || "button"}
      className={styles.button}
    >
      {text}
    </button>
  );
};

export default Button;
