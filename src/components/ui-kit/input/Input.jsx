import { getIn } from "formik";

const Input = ({ formik, label, name, type }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        aria-describedby={label}
        value={getIn(formik.values, name)}
        name={name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {getIn(formik.touched, name)&& (
        <p className="text-danger">{getIn(formik.errors, name)}</p>
      )}
    </div>
  );
};

export default Input;
