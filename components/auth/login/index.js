import { withTranslation } from "next-i18next";
import ButtonComponent from "../../controls/button";
import LanguageSwitcher from "../../languageSwitcher";
import { Formik } from "formik";
import * as yup from "yup";

function LoginForm({ t }) {
  const schema = yup.object().shape({
    email: yup
      .string()
      .required(t("errors.required"))
      .email(t("errors.invalidEmail")),
    password: yup.string().required(t("errors.required")),
  });
  return (
    <div className="w-75 mx-auto">
      <div className="d-flex justify-content-between align-items-center my-5">
        <h3 className="bold_font mb-0">{t("login.loginTitle")}</h3>
        <LanguageSwitcher color="text-dark" />
      </div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={schema}
        onSubmit={(values) => console.log(values)}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>{t("controls.email")}</label>
              <input
                type="text"
                name="email"
                className={`form-control ${
                  errors.email && touched.email ? "border-danger" : ""
                }`}
                placeholder={t("controls.email")}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <small className="text-danger">
                {errors.email && touched.email && errors.email}
              </small>
            </div>
            <div className="form-group">
              <label>{t("controls.password")}</label>
              <input
                type="password"
                name="password"
                className={`form-control ${
                  errors.password && touched.password ? "border-danger" : ""
                }`}
                placeholder={t("controls.password")}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <small className="text-danger">
                {" "}
                {errors.password && touched.password && errors.password}
              </small>
            </div>
            <div className="d-flex justify-content-end">
              <ButtonComponent type="submit" content={t("login.loginTitle")} />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default withTranslation("locale")(LoginForm);
