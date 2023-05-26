import FormLogin from "../ui-kit/forms/FormLogin";

const LoginPage = () => {
  return (
    <section
      className="container-sm py-4 px-5 mx-auto"
      style={{ maxWidth: "500px" }}
    >
      <h1 className="text-center">Login</h1>
      <FormLogin />
    </section>
  );
};

export default LoginPage;
