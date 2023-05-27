import FormLogin from "../ui-kit/forms/FormLogin";
import FormReg from "../ui-kit/forms/FormReg";

const AuthPage = ({ variant }) => {
  const title = variant === "login" ? "Login" : "Register";
  return (
    <section
      className="container-sm py-4 px-5 mx-auto"
      style={{ maxWidth: "500px" }}
    >
      <h1 className="text-center">{title}</h1>
      {variant === "login" ? <FormLogin /> : <FormReg />}
    </section>
  );
};

export default AuthPage;
