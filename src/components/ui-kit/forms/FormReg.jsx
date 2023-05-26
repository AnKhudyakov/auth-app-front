import { schemaReg } from "@/helpers/validationForm";
import { useFormik } from "formik";
import { INIT_VALUES_REG as initialValues } from "@/constants/fields";
import { useState } from "react";
import { API } from "@/api/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorSubmit, setErrorSubmit] = useState("");
  const [response, setResponse] = useState(null);
  const handleFormSubmit = async (values, actions) => {
    API.postReg(values)
      .then((data) => {
        actions.resetForm();
        toast.success("Successful registration");
      })
      .catch((err) => {
        switch (err.response.status) {
          case 401:
            toast.error("Email and Password already exist");
            break;
          default:
            toast.error(err.response.data.message);
        }
      });
  };
  const formik = useFormik({
    initialValues,
    onSubmit: handleFormSubmit,
    validationSchema: schemaReg,
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <fieldset disabled={formik.isSubmitting}>
        <div className="mb-3">
          <label htmlFor="Name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            aria-describedby="emailHelp"
            value={formik.values.user_name}
            name="user_name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.user_name && (
            <p className="text-danger">
              {formik.errors.user_name}
            </p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="Email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            value={formik.values.email}
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
          {formik.touched.email && (
            <p className="text-danger">
              {formik.errors.email}
            </p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="Password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            value={formik.values.password}
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && (
            <p className="text-danger">
              {formik.errors.password}
            </p>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </fieldset>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </form>
  );
};

export default Form;
