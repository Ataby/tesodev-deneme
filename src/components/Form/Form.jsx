import Input from "../AddPage/Input";
import styles from "./form.module.scss";
const Form = ({ formik }) => {
  return (
    <form onSubmit={formik.handleSubmit} className="formContainer">
      <Input
        error={formik.touched.NameSurname && formik.errors.NameSurname}
        errors={formik.errors}
        name="NameSurname"
        value={formik.values.NameSurname}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder={"Enter name and surname"}
        header={"Name Surname"}
      />
      <Input
        error={formik.touched.Country && formik.errors.Country}
        errors={formik.errors}
        name="Country"
        value={formik.values.Country}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder={"Enter a country"}
        header={"Country"}
      />
      <Input
        error={formik.touched.City && formik.errors.City}
        errors={formik.errors}
        name={"City"}
        value={formik.values.City}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder={"Enter a city"}
        header={"City"}
      />
      <Input
        error={formik.touched.Email && formik.errors.Email}
        errors={formik.errors}
        name={"Email"}
        value={formik.values.Email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder={"Enter a e-mail (abc@xyz.com)"}
        header={"Email"}
      />

      <div className={styles.submitContainer}>
        {Object.values(formik.errors).length === 0 && (
          <button
            disabled={!(formik.isValid && formik.dirty)}
            className={styles.submitButton}
            type="submit"
          >
            Add
          </button>
        )}
      </div>
    </form>
  );
};

export default Form;
