import styles from "./input.module.scss";
const Input = ({
  name,
  error,
  errors,
  className,
  onClick,
  placeholder,
  value,
  onBlur,
  onChange,
  header,
}) => {
  return (
    <>
      <h1 className={`${error ? styles.headerError : styles.header}`}>
        {header || ""}
      </h1>
      <input
        name={name}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onClick();
          }
        }}
        onBlur={onBlur}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className || error ? styles.error : styles.input}
      />

      <p className={`${errors?.[name] ? styles.headerError : styles.header}`}>
        {errors?.[name]}
      </p>
    </>
  );
};
export default Input;
