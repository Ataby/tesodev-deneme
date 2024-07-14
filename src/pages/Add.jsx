import { useFormik } from "formik";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../components/AddPage/Header";
import Form from "../components/Form/Form";
import validationSchema from "../components/Form/validation";
import { addUser } from "../database/dbFunctions";

const Add = () => {
  const { state } = useLocation();

  const formik = useFormik({
    validateOnMount: true,
    initialValues: {
      nameSurname: "",
      country: "",
      company: "",
      city: "",
      email: "",
      website:"",
      date: new Date().getFullYear().toString(),
    },

    validationSchema,
    onSubmit: (values, { resetForm }) => {
      try {
        window.alert("Added successfully");
        toast("Added Succesfull", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        resetForm();
      } catch (e) {
        toast(e, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    },
  });
  return (
    <>
      <div className="container">
        <Header searchValue={state} />
        <main className="mainContainer">
          <div className="d-flex w-full  flex-col justify-center items-center">
            <div className="w-full ">
              <div className="resultContainer">
                <Form formik={formik} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default Add;
