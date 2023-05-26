import { useFormik } from "formik";
import { schemaLogin } from "@/helpers/validationForm";
import { INIT_VALUES_LOGIN as initialValues } from "@/constants/fields";
import { useNavigate } from "react-router-dom";
import { API } from "@/api/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "@/context/userContext";
import { useContext } from "react";

const Form = () => {
  const navigate = useNavigate();
  const { update, setUpdate } = useContext(UserContext);
  const handleFormSubmit = async (values, actions) => {
    API.postLogin(values)
      .then((data) => {
        localStorage.setItem("access_token", data.token);
        actions.resetForm();
        toast.success("Successful Login");
        setUpdate(null);
        navigate("/");
      })
      .catch((err) => {
        switch (err.response.status) {
          case 400:
            toast.error("Invalid email or password");
            break;
          default:
            toast.error(err.response.data.message);
        }
      });
  };
  const formik = useFormik({
    initialValues,
    onSubmit: handleFormSubmit,
    validationSchema: schemaLogin,
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <fieldset disabled={formik.isSubmitting}>
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
            <p className="text-danger">{formik.errors.email}</p>
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
            <p className="text-danger">{formik.errors.password}</p>
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
