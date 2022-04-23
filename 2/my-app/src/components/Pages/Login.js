import React, { useContext } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import FormHelperText from "@mui/material/FormHelperText";
import FormGroup from "@mui/material/FormGroup";
import Button from "@mui/material/Button";
import { Formik } from "formik";
import { Typography } from "@mui/material";
import { IsLogin } from "../Context/IsLogin";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const Login = () => {
  const { userIsLogin } = useContext(IsLogin);
  let navigate = useNavigate();

  const handleBack = () => {
    navigate("/", { replace: true });
  };
  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "Required";
          } else if (values.password.length < 6) {
            errors.password = "password have to be at least 6 digits";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert("lOGIN completed successfully");
            setSubmitting(false);
            userIsLogin();
            navigate("/Dashboard", { replace: true });
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <FormGroup sx={{ width: 400, mx: "auto", mt: 20 }}>
              <Typography variant="h2" sx={{ mb: 8 }}>
                please Login{" "}
              </Typography>
              <FormControl>
                <InputLabel htmlFor="email">Email address</InputLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <FormHelperText id="my-helper-text">
                  We'll never share your email.
                </FormHelperText>
              </FormControl>
              <Typography sx={{ color: "error.main" }}>
                {" "}
                {errors.email && touched.email && errors.email}
              </Typography>

              <FormControl>
                <InputLabel htmlFor="password">password</InputLabel>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
              </FormControl>
              <Typography sx={{ color: "error.main" }}>
                {" "}
                {errors.password && touched.password && errors.password}
              </Typography>

              <Button variant="contained" sx={{ mt: 2 }} type="submit">
                submit
              </Button>
            </FormGroup>
          </form>
        )}
      </Formik>
      <Button
        sx={{ mt: 10 }}
        variant="outlined"
        onClick={handleBack}
      >
        <KeyboardBackspaceIcon />
        Back to Home
      </Button>
    </>
  );
};

export default Login;
