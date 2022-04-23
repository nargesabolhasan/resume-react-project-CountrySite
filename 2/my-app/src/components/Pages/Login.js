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
import { React, useEffect, useState,useContext } from "react";
import { userContext } from "../Context/UserContext";

const Login = () => {
  const { userIsLogin } = useContext(IsLogin);
  const { addUser } = useContext(userContext);

  let navigate = useNavigate();

  const [users, setUsers] = useState([]);

  const fetchUrl = async () => {
    const res = await fetch("https://reqres.in/api/users/");
    const json = await res.json();
    setUsers(json.data);
  };

  const authUser=(values)=>{
    users?.map((user) => {
      if(values.email===user.email){
        alert("lOGIN completed successfully");
        navigate("/Dashboard", { replace: true });
        localStorage.setItem("token", "QpwL5tke4Pnpja7X4")
        addUser(user)
      }
  })}



  useEffect(() => {
    fetchUrl();
  }, []);

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
                setSubmitting(false);
                authUser(values)
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
      <Button sx={{ mt: 10 }} variant="outlined" onClick={handleBack}>
        <KeyboardBackspaceIcon />
        Back to Home
      </Button>
    </>
  );
};

export default Login;
