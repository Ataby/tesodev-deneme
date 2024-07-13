import { addUser } from "../../database/dbFunctions";
import Input from "../AddPage/Input";
import styles from "./form.module.scss";

const PUBLIC_API_URL = "https://tinyurl.com/api-create.php?";

const Form = ({ formik }) => {

  const userDbLength = JSON.parse(localStorage.getItem("data")).data.data.length
  const handleAdd = async () => {
    const USER_URL = formik.values.website
    const REQUEST_URL = `${PUBLIC_API_URL}url=${USER_URL}`;

    const res = await fetch(REQUEST_URL)
    const data = await res.text()

    const lastData = {...formik.values,website:data,id:userDbLength+1}

    addUser(lastData)   

  }

  return (
    <form onSubmit={formik.handleSubmit} className="formContainer">
      <Input
        error={formik.touched.nameSurname && formik.errors.nameSurname}
        errors={formik.errors}
        name="nameSurname"
        value={formik.values.nameSurname}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder={"Enter name and surname"}
        header={"Name Surname"}
      />
      <Input
        error={formik.touched.country && formik.errors.country}
        errors={formik.errors}
        name="country"
        value={formik.values.country}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder={"Enter a country"}
        header={"country"}
      />
      <Input
        error={formik.touched.city && formik.errors.city}
        errors={formik.errors}
        name={"city"}
        value={formik.values.city}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder={"Enter a city"}
        header={"city"}
      />
      <Input
        error={formik.touched.email && formik.errors.email}
        errors={formik.errors}
        name={"email"}
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder={"Enter a e-mail (abc@xyz.com)"}
        header={"email"}
      />
      <Input
        error={formik.touched.website && formik.errors.website}
        errors={formik.errors}
        name={"website"}
        value={formik.values.website}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        placeholder={"Enter a website url (google.com/?search=example1)"}
        header={"website"}
      />

      <div className={styles.submitContainer}>

          <button
            disabled={!formik.isValid}
            className={`${styles.submitButton}`}
            type="submit"
            style={{ background: formik.isValid ? "blue" : "gray" }}
            onClick={handleAdd}

          >
            Add
          </button>

      </div>
    </form>
  );
};

export default Form;
