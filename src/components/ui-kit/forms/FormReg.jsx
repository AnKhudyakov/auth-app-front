import { schemaReg } from "@/helpers/validationForm";
import { useFormik } from "formik";
import { INIT_VALUES_REG as initialValues } from "@/constants/fields";
import { API } from "@/api/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../input/Input";
import { useNavigate } from "react-router";

const FormReg = () => {
  const navigate = useNavigate();
  const handleFormSubmit = async (values, actions) => {
    API.postReg(values)
      .then((data) => {
        actions.resetForm();
        toast.success("Successful registration");
        setTimeout(() => {
          navigate("/login");
        }, 1500);
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
        <Input formik={formik} label="Name" name="user_name" type="text" />
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

export default FormReg;
