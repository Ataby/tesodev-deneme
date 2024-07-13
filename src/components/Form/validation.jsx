import * as yup from "yup";

const validations = yup.object().shape({
  nameSurname: yup.string().min(4).max(60).required("Required Field"),
  email: yup.string().email().required("Required Field"),
  country: yup.string().min(2).max(40).required("Required Field"),
  city: yup.string().min(2).max(40).required("Required Field"),
  website: yup.string().required("Required Field")
});

export default validations;
