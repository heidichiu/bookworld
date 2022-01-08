import { Box, Button, Paper, TextField, Typography } from "@material-ui/core";
import * as yup from "yup";
import { useFormik } from "formik";

const validationSchema = yup.object({
  name: yup.string().required("Username is required"),
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
});

const Register = () => {
  const registerForm = useFormik({
    validationSchema,
    initialValues: { email: "", password: "", name: "" },
    onSubmit: (values) => {},
  });
  return (
    <Box>
      <Typography variant="h4">User Registration</Typography>
      <form autoComplete="off" noValidate onSubmit={registerForm.handleSubmit}>
        <Paper>
          <TextField
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
            id="email"
            name="email"
            variant="outlined"
            label="Enter email address"
            value={registerForm.values.email}
            onChange={registerForm.handleChange}
            helperText={registerForm.touched.email && registerForm.errors.email}
            error={registerForm.touched.emal && Boolean(registerForm.errors.email)}
          />
          <TextField
            id="password"
            type="password"
            name="Enter password"
            variant="outlined"
            label="Enter password"
            value={registerForm.values.password}
            onChange={registerForm.handleChange}
            helperText={registerForm.touched.password && registerForm.errors.password}
            error={registerForm.touched.password && Boolean(registerForm.errors.password)}
          />

          <Button>Register</Button>
        </Paper>
      </form>
    </Box>
  );
};

export default Register;
