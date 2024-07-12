import * as yup from "yup";

const validations = yup.object().shape({
  NameSurname: yup.string().min(4).max(60).required("Required Field"),
  Email: yup.string().email().required("Required Field"),
  Country: yup.string().min(2).max(40).required("Required Field"),
  City: yup.string().min(2).max(40).required("Required Field"),
});

export default validations;
