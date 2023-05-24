import FormReg from "../ui-kit/forms/FormReg";

const RegisterPage = () => {
  return (
    <section
      className="container-sm py-4 px-5 mx-auto"
      style={{ maxWidth: "500px" }}
    >
      <h1 className="text-center">Register</h1>
      <FormReg/>
    </section>
  );
};

export default RegisterPage;
