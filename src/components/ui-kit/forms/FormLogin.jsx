import { useFormik } from "formik";
import { schemaLogin } from "@/helpers/validationForm";
import { INIT_VALUES_LOGIN as initialValues } from "@/constants/fields";
import { useNavigate } from "react-router-dom";
import { API } from "@/api/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "@/context/userContext";
import { useContext } from "react";
import Input from "../input/Input";

const FormLogin = () => {
  const navigate = useNavigate();
  const { setUpdate, setIdSelected } = useContext(UserContext);
  const handleFormSubmit = async (values, actions) => {
    API.postLogin(values)
      .then((data) => {
        localStorage.setItem("access_token", data.token);
        actions.resetForm();
        toast.success("Successful Login");
        setIdSelected([]);
        setUpdate(null);
        setTimeout(() => {
          navigate("/");
        }, 1500);
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
        <Input formik={formik} label="Email" name="email" type="email" />
        <Input
          formik={formik}
          label="Password"
          name="password"
          type="password"
        />
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

export default FormLogin;
