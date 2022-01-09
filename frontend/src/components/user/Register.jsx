import { Box, Button, Paper, TextField, Typography } from "@material-ui/core";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { registerAction, resetRegisterPromiseAction } from "../../module/user/userAction";
import { getUserRegisterPromise } from "../../module/user/userSelector";
import registerStyles from "./RegisterStyle";
import { useSnackbar } from "notistack";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const validationSchema = yup.object({
  name: yup.string().required("Username is required"),
  email: yup.string().required("Email is required").email("Enter a valid email"),
  password: yup.string().required("Password is required").min(8, "Password should be of minimum 8 character length"),
});

const Register = () => {
  const history = useHistory();
  const classes = registerStyles();
  const dispatch = useDispatch();
  const registerPromise = useSelector(getUserRegisterPromise);
  const { enqueueSnackbar } = useSnackbar();
  const registerForm = useFormik({
    validationSchema,
    initialValues: { email: "", password: "", name: "" },
    onSubmit: (values) => {
      dispatch(registerAction(values));
    },
  });

  useEffect(() => {
    if (registerPromise.isErrorOccured) {
      enqueueSnackbar("Something went wrong. Please try again.", {
        variant: "error",
      });
    } else if (registerPromise.isFulfilled) {
      enqueueSnackbar("User registered successfully", {
        variant: "success",
      });
      dispatch(resetRegisterPromiseAction());
      history.push("/login");
    }
  }, [enqueueSnackbar, history, registerPromise, dispatch]);

  return (
    <Box className={classes.wrapper}>
      <Typography className={classes.heading} variant="h4">
        User Registration
      </Typography>
      <form autoComplete="off" noValidate onSubmit={registerForm.handleSubmit}>
        <Paper className={classes.paper}>
          <TextField
            className={classes.margin12}
            id="name"
            name="name"
            variant="outlined"
            label="Enter username"
            value={registerForm.values.name}
            onChange={registerForm.handleChange}
            helperText={registerForm.touched.name && registerForm.errors.name}
            error={registerForm.touched.name && Boolean(registerForm.errors.name)}
          />
          <TextField
            className={classes.margin12}
            id="email"
            name="email"
            variant="outlined"
            label="Enter email address"
            value={registerForm.values.email}
            onChange={registerForm.handleChange}
            helperText={registerForm.touched.email && registerForm.errors.email}
            error={registerForm.touched.email && Boolean(registerForm.errors.email)}
          />
          <TextField
            className={classes.margin12}
            id="password"
            type="password"
            name="password"
            variant="outlined"
            label="Enter password"
            value={registerForm.values.password}
            onChange={registerForm.handleChange}
            helperText={registerForm.touched.password && registerForm.errors.password}
            error={registerForm.touched.password && Boolean(registerForm.errors.password)}
          />

          <Button
            type="submit"
            color="primary"
            variant="contained"
            className={classes.button}
            disabled={registerPromise.isPending}
          >
            Register
          </Button>
        </Paper>
      </form>
    </Box>
  );
};

export default Register;
